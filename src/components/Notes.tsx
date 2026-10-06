import { Fragment, type ReactNode } from "react";

/// A small, deliberately limited renderer for the lesson-note body format
/// described in src/content/types.ts. Supports `##` and `###` headings,
/// `>` quotations, `-` and `1.` lists, `|` tables, ```svg figures, and inline
/// `**bold**`, `*italic*`, `` `code` ``. Everything else is a paragraph.
/// Kept dependency-free and server-rendered.

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Split on the inline markers, keeping the delimiters.
  const regex = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|`[^`]+`)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;
    if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      nodes.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    }
    last = match.index + token.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/// Plain text of a heading (markers removed), for ids and the contents list.
function plain(text: string): string {
  return text.replace(/\*\*|`/g, "").replace(/\*/g, "").trim();
}

function slugify(text: string): string {
  return plain(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

type Block =
  | { kind: "h2"; text: string; id: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "quote"; lines: string[] }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; rows: string[][] }
  | { kind: "figure"; svg: string; caption?: string };

function parse(source: string, idPrefix: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  const usedIds = new Set<string>();
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      blocks.push({ kind: "h3", text: trimmed.slice(4) });
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      const text = trimmed.slice(3);
      let id = `${idPrefix}${slugify(text) || "section"}`;
      let n = 2;
      while (usedIds.has(id)) id = `${idPrefix}${slugify(text)}-${n++}`;
      usedIds.add(id);
      blocks.push({ kind: "h2", text, id });
      i++;
      continue;
    }

    // Fenced diagram: ```svg [optional caption]  … raw <svg> …  ```
    // The content is authored in-repo (curriculum), never user input, so it
    // is trusted and rendered inline.
    if (/^```svg\b/.test(trimmed)) {
      const caption = trimmed.replace(/^```svg\s*/, "").trim() || undefined;
      i++;
      const svgLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== "```") {
        svgLines.push(lines[i]);
        i++;
      }
      i++; // consume the closing fence
      blocks.push({ kind: "figure", svg: svgLines.join("\n"), caption });
      continue;
    }

    // Table: consecutive lines starting with |; the |---| row is skipped.
    if (trimmed.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i]
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((c) => c.trim());
        if (!cells.every((c) => /^:?-+:?$/.test(c))) rows.push(cells);
        i++;
      }
      blocks.push({ kind: "table", rows });
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quoted: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        const q = lines[i].trim().replace(/^>\s?/, "");
        if (q) quoted.push(q);
        i++;
      }
      blocks.push({ kind: "quote", lines: quoted });
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ kind: "ol", items });
      continue;
    }

    blocks.push({ kind: "p", text: trimmed });
    i++;
  }

  return blocks;
}

/// The `##` headings of a note, with the ids the renderer gives them — used to
/// build an "On this page" contents list.
export function noteOutline(
  source: string,
  idPrefix = "",
): { id: string; title: string }[] {
  return parse(source, idPrefix)
    .filter((b): b is Extract<Block, { kind: "h2" }> => b.kind === "h2")
    .map((b) => ({ id: b.id, title: plain(b.text) }));
}

export function Notes({
  source,
  figureLabel = "Figure",
  idPrefix = "",
}: {
  source: string;
  /** Prefix for auto-numbered diagram captions, e.g. "Figure" or "Diagram". */
  figureLabel?: string;
  /** Prefix for heading ids, so two notes on one page never collide. */
  idPrefix?: string;
}) {
  const blocks = parse(source, idPrefix);
  let figureNo = 0;
  return (
    <div className="prose-notes">
      {blocks.map((block, bi) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={bi} id={block.id}>
                {renderInline(block.text, `h${bi}`)}
              </h2>
            );
          case "h3":
            return <h3 key={bi}>{renderInline(block.text, `h3${bi}`)}</h3>;
          case "p":
            return <p key={bi}>{renderInline(block.text, `p${bi}`)}</p>;
          case "quote":
            return (
              <blockquote key={bi}>
                {block.lines.map((l, li) => (
                  <p key={li}>{renderInline(l, `q${bi}-${li}`)}</p>
                ))}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={bi}>
                {block.items.map((it, ii) => (
                  <li key={ii}>{renderInline(it, `ul${bi}-${ii}`)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={bi}>
                {block.items.map((it, ii) => (
                  <li key={ii}>{renderInline(it, `ol${bi}-${ii}`)}</li>
                ))}
              </ol>
            );
          case "table": {
            const [head, ...body] = block.rows;
            return (
              <div className="table-scroll" key={bi}>
                <table>
                  {head && (
                    <thead>
                      <tr>
                        {head.map((cell, ci) => (
                          <th key={ci} scope="col">
                            {renderInline(cell, `th${bi}-${ci}`)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {body.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <Fragment key={ci}>
                            <td>{renderInline(cell, `t${bi}-${ri}-${ci}`)}</td>
                          </Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          case "figure": {
            figureNo += 1;
            return (
              <figure className="note-figure" key={bi}>
                <div
                  className="note-figure-svg"
                  // Trusted curriculum content authored in-repo, not user input.
                  dangerouslySetInnerHTML={{ __html: block.svg }}
                />
                <figcaption>
                  <span className="fig-label">
                    {figureLabel} {figureNo}.
                  </span>
                  {block.caption ? (
                    <> {renderInline(block.caption, `fig${bi}`)}</>
                  ) : null}
                </figcaption>
              </figure>
            );
          }
        }
      })}
    </div>
  );
}
