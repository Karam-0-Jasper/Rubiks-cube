import Link from "next/link";

import { searchCurriculum } from "@/lib/search";
import { accent } from "@/lib/accents";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query.length >= 2 ? searchCurriculum(query) : [];

  return (
    <div className="animate-fade-up mx-auto max-w-2xl">
      <h1 className="book-title text-3xl font-semibold">Search the notes</h1>
      <p className="mt-2 text-ink-muted">
        Find any topic or note across the curriculum by keyword.
      </p>

      <form action="/search" className="mt-6">
        <div className="flex gap-2">
          <input
            type="search"
            name="q"
            defaultValue={query}
            autoFocus
            placeholder="e.g. photosynthesis, past tense, Venn diagram…"
            className="w-full rounded-xl border border-line bg-surface-raised px-4 py-3 text-base outline-none transition placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
          <button
            type="submit"
            className="shrink-0 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-ink transition hover:opacity-90"
          >
            Search
          </button>
        </div>
      </form>

      {query.length >= 2 && (
        <p className="mt-6 book-eyebrow">
          {results.length} result{results.length === 1 ? "" : "s"} for
          &ldquo;{query}&rdquo;
        </p>
      )}

      <div className="mt-4 space-y-3">
        {results.map((r) => {
          const a = accent(r.accent);
          return (
            <Link
              key={`${r.subjectSlug}-${r.topicSlug}`}
              href={`/subjects/${r.subjectSlug}/${r.topicSlug}`}
              className="block rounded-card border border-line bg-surface-raised p-4 transition hover:bg-surface-sunken"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-0.5 text-xs font-semibold ${a.chip}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                  {r.subjectName}
                </span>
                <span className="text-xs text-ink-faint">
                  Grade {r.grade} · Period {r.periodNumber}
                </span>
              </div>
              <h2 className="mt-2 font-display text-lg font-semibold leading-snug">
                {r.topicTitle}
              </h2>
              <p className="mt-1 line-clamp-2 text-sm text-ink-muted">
                {r.snippet}
              </p>
            </Link>
          );
        })}

        {query.length >= 2 && results.length === 0 && (
          <div className="rounded-card border border-line bg-surface-sunken/60 p-6 text-center text-ink-muted">
            No topics matched &ldquo;{query}&rdquo;. Try a different word.
          </div>
        )}
      </div>
    </div>
  );
}
