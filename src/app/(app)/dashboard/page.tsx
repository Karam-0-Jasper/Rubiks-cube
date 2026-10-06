import Link from "next/link";

import { listSubjects } from "@/lib/curriculum";
import { getCurrentUser } from "@/lib/auth";
import { SubjectMark } from "@/components/SubjectMark";

const GRADES = [10, 11, 12];

export default async function DashboardPage() {
  const [user, subjects] = await Promise.all([
    getCurrentUser(),
    listSubjects(),
  ]);

  const firstName = (user?.fullName || user?.username || "there").split(" ")[0];

  // For each grade, the subjects that have lessons in it.
  const shelves = GRADES.map((grade) => {
    const books = subjects
      .map((s) => {
        const periods = s.periods.filter((p) => p.grade === grade);
        return {
          slug: s.slug,
          name: s.name,
          accent: s.accent,
          periods: periods.length,
          lessons: periods.reduce((n, p) => n + p._count.topics, 0),
        };
      })
      .filter((b) => b.lessons > 0);
    const lessons = books.reduce((n, b) => n + b.lessons, 0);
    return { grade, books, lessons };
  });

  return (
    <div>
      <header className="max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          Welcome back, {firstName}.
        </h1>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink-muted">
          Pick a grade and subject to open its lesson notes. Every subject is
          arranged by period, in the order of the Ministry of Education
          syllabus.
        </p>
        <form action="/search" className="mt-6 flex max-w-xl gap-2" role="search">
          <label htmlFor="dash-search" className="sr-only">
            Search the notes
          </label>
          <input
            id="dash-search"
            type="search"
            name="q"
            placeholder="Search topics, e.g. photosynthesis or past tense"
            className="field"
          />
          <button type="submit" className="btn btn-secondary shrink-0">
            Search
          </button>
        </form>
      </header>

      <div className="mt-12 space-y-12">
        {shelves.map(({ grade, books, lessons }) => (
          <section key={grade} aria-labelledby={`grade-${grade}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line pb-2">
              <h2 id={`grade-${grade}`} className="font-serif text-2xl font-semibold">
                Grade {grade}
              </h2>
              {books.length > 0 ? (
                <p className="text-sm text-ink-muted">
                  {books.length} subjects · {lessons} lessons ·{" "}
                  <Link
                    href={`/grade/${grade}`}
                    className="font-medium text-brand underline-offset-4 hover:underline"
                  >
                    Grade {grade} overview
                  </Link>
                </p>
              ) : (
                <p className="text-sm text-ink-faint">Not yet available</p>
              )}
            </div>

            {books.length > 0 ? (
              <ul className="mt-1 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((b) => (
                  <li key={b.slug} className="border-b border-line/70">
                    <Link
                      href={`/subjects/${b.slug}?grade=${grade}`}
                      className="group flex items-center gap-3 py-3"
                    >
                      <SubjectMark accent={b.accent} />
                      <span className="font-serif text-[1.05rem] font-medium text-ink group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
                        {b.name}
                      </span>
                      <span className="ml-auto whitespace-nowrap text-sm tabular-nums text-ink-faint">
                        {b.lessons} lessons
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-ink-muted">
                Notes for Grade {grade} are being prepared.
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
