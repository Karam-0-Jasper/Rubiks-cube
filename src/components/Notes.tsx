import { Fragment, type ReactNode } from "react";

/// A small, deliberately limited renderer for the lesson-note body format
/// described in src/content/types.ts. Supports `##` headings, `-` and `1.`
/// lists, `|` tables, and inline `**bold**`, `*italic*`, `` `code` ``.
/// Everything else is a paragraph. Kept dependency-free and server-rendered.

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  // Split on the inline markers, keeping the delimiters.
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
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

type Block =
  | { kind: "h2"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "table"; rows: string[][] }
  | { kind: "figure"; svg: string; caption?: string };

function parse(source: string): Block[] {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      blocks.push({ kind: "h2", text: trimmed.slice(3) });
      i++;
      continue;
    }

    // Fenced diagram: ```svg [optional caption]  … raw <svg> …  ```
    // The content is authored by us (curriculum), never user input, so it is
    // trusted and rendered inline.
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

    // Table: a line starting with | followed by a separator row.
    if (trimmed.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const cells = lines[i]
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((c) => c.trim());
        // Skip the |---|---| separator row.
        if (!cells.every((c) => /^:?-+:?$/.test(c))) rows.push(cells);
        i++;
      }
      blocks.push({ kind: "table", rows });
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

export function Notes({
  source,
  figureLabel = "Figure",
}: {
  source: string;
  /** Prefix for auto-numbered diagram captions, e.g. "Figure" or "Diagram". */
  figureLabel?: string;
}) {
  const blocks = parse(source);
  let figureNo = 0;
  return (
    <div className="prose-notes">
      {blocks.map((block, bi) => {
        switch (block.kind) {
          case "h2":
            return <h2 key={bi}>{renderInline(block.text, `h${bi}`)}</h2>;
          case "p":
            return <p key={bi}>{renderInline(block.text, `p${bi}`)}</p>;
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
          case "table":
            return (
              <div className="table-scroll" key={bi}>
                <table>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <Fragment key={ci}>
                            {ri === 0 ? (
                              <th>{renderInline(cell, `t${bi}-${ri}-${ci}`)}</th>
                            ) : (
                              <td>{renderInline(cell, `t${bi}-${ri}-${ci}`)}</td>
                            )}
                          </Fragment>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
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
                    {figureLabel} {figureNo}
                  </span>
                  {block.caption ? (
                    <> — {renderInline(block.caption, `fig${bi}`)}</>
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
