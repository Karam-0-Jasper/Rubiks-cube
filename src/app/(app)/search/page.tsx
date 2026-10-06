import Link from "next/link";

import { searchCurriculum } from "@/lib/search";
import { SubjectMark } from "@/components/SubjectMark";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query.length >= 2 ? searchCurriculum(query) : [];

  return (
    <div className="max-w-3xl">
      <h1 className="font-serif text-3xl font-semibold">Search</h1>
      <p className="mt-2 text-ink-muted">
        Find a topic by keyword across every subject and grade.
      </p>

      <form action="/search" className="mt-6" role="search">
        <label htmlFor="q" className="sr-only">
          Search the notes
        </label>
        <div className="flex gap-2">
          <input
            id="q"
            type="search"
            name="q"
            defaultValue={query}
            autoFocus
            placeholder="e.g. photosynthesis, past tense, Venn diagram"
            className="field !py-2.5 !text-base"
          />
          <button type="submit" className="btn btn-primary shrink-0">
            Search
          </button>
        </div>
      </form>

      {query.length === 1 && (
        <p className="mt-6 text-sm text-ink-muted">Type at least two letters.</p>
      )}

      {query.length >= 2 && (
        <p className="mt-8 border-b border-line pb-2 text-sm text-ink-muted">
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
        </p>
      )}

      <ol>
        {results.map((r) => (
          <li key={`${r.subjectSlug}-${r.topicSlug}`} className="border-b border-line">
            <Link
              href={`/subjects/${r.subjectSlug}/${r.topicSlug}`}
              className="group block py-4"
            >
              <p className="flex items-center gap-2 text-sm text-ink-muted">
                <SubjectMark accent={r.accent} />
                {r.subjectName} · Grade {r.grade} · Period {r.periodNumber}
              </p>
              <h2 className="mt-1 font-serif text-lg font-semibold leading-snug group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
                {r.topicTitle}
              </h2>
              <p className="mt-1 line-clamp-2 font-serif text-ink-muted">{r.snippet}</p>
            </Link>
          </li>
        ))}
      </ol>

      {query.length >= 2 && results.length === 0 && (
        <p className="mt-6 text-ink-muted">
          Nothing matched &ldquo;{query}&rdquo;. Try a shorter or different word,
          or{" "}
          <Link href="/dashboard" className="text-brand underline underline-offset-4">
            browse the library
          </Link>
          .
        </p>
      )}
    </div>
  );
}
