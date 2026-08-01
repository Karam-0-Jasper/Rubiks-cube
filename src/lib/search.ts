import "server-only";

import { SUBJECTS } from "@/content";

export type SearchResult = {
  subjectSlug: string;
  subjectName: string;
  accent: string;
  grade: number;
  periodNumber: number;
  periodTitle: string;
  topicSlug: string;
  topicTitle: string;
  /// A short snippet of the notes around the first match, for context.
  snippet: string;
};

/// Strip the light markdown / svg used in note bodies down to plain text so
/// snippets read cleanly and matches aren't thrown off by markup.
function toPlainText(md: string): string {
  return md
    .replace(/```svg[\s\S]*?```/g, " ") // drop diagram blocks
    .replace(/[#*`|>]/g, " ") // markdown punctuation
    .replace(/\s+/g, " ")
    .trim();
}

function makeSnippet(plain: string, needle: string): string {
  const i = plain.toLowerCase().indexOf(needle.toLowerCase());
  if (i === -1) return plain.slice(0, 140).trim() + (plain.length > 140 ? "…" : "");
  const start = Math.max(0, i - 60);
  const end = Math.min(plain.length, i + needle.length + 80);
  return (
    (start > 0 ? "…" : "") +
    plain.slice(start, end).trim() +
    (end < plain.length ? "…" : "")
  );
}

/// Search all in-repo curriculum topics by title, objective and note text.
/// `grade` optionally restricts results to a single grade (10/11/12).
export function searchCurriculum(
  query: string,
  grade?: number,
): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const subject of SUBJECTS) {
    for (const period of subject.periods) {
      if (grade && period.grade !== grade) continue;
      for (const topic of period.topics) {
        const haystackParts = [
          topic.title,
          topic.objective,
          topic.notes,
          topic.workedExample,
        ];
        const haystack = haystackParts.join(" \n ").toLowerCase();
        if (!haystack.includes(q)) continue;

        const plainNotes = toPlainText(topic.notes);
        results.push({
          subjectSlug: subject.slug,
          subjectName: subject.name,
          accent: subject.accent,
          grade: period.grade,
          periodNumber: period.number,
          periodTitle: period.title,
          topicSlug: topic.slug,
          topicTitle: topic.title,
          snippet: makeSnippet(
            `${toPlainText(topic.objective)} ${plainNotes}`,
            q,
          ),
        });
      }
    }
  }

  // Rank: title matches first, then objective, then note-body matches.
  return results.sort((a, b) => {
    const at = a.topicTitle.toLowerCase().includes(q) ? 0 : 1;
    const bt = b.topicTitle.toLowerCase().includes(q) ? 0 : 1;
    if (at !== bt) return at - bt;
    return a.topicTitle.localeCompare(b.topicTitle);
  });
}
