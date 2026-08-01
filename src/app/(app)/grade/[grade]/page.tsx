import Link from "next/link";
import { notFound } from "next/navigation";

import { listSubjects } from "@/lib/curriculum";
import { BookCover } from "@/components/BookCover";

const GRADES = [10, 11, 12];

export default async function GradeLibraryPage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade: gradeStr } = await params;
  const grade = Number(gradeStr);
  if (!GRADES.includes(grade)) notFound();

  const all = await listSubjects();

  // A subject belongs on this grade's shelf if it has any period in the grade.
  const books = all
    .map((s) => {
      const periods = s.periods.filter((p) => p.grade === grade);
      const topicCount = periods.reduce((n, p) => n + p._count.topics, 0);
      return { subject: s, topicCount, has: periods.length > 0 };
    })
    .filter((b) => b.has);

  return (
    <div className="animate-fade-up">
      <Link href="/dashboard" className="book-eyebrow transition hover:text-ink">
        ← All grades
      </Link>

      <div className="mt-6 border-b border-line pb-6 text-center">
        <p className="book-eyebrow">The Library</p>
        <h1 className="book-title mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          Grade {grade}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-ink-muted">
          {books.length > 0
            ? "Choose a subject. Each book holds all of that subject's lessons, organised by period."
            : "The books for this grade are being written. Grade 10 is fully stocked."}
        </p>
      </div>

      {books.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {books.map(({ subject, topicCount }) => (
            <BookCover
              key={subject.slug}
              href={`/subjects/${subject.slug}`}
              title={subject.name}
              shortName={subject.shortName}
              grade={grade}
              topicCount={topicCount}
              accent={subject.accent}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-card border border-line bg-surface-sunken/60 p-10 text-center">
          <p className="font-display text-xl">Coming soon</p>
          <p className="mt-2 text-ink-muted">
            Grade {grade} lessons are on the way.
          </p>
          <Link
            href="/grade/10"
            className="mt-5 inline-block rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
          >
            Go to Grade 10
          </Link>
        </div>
      )}
    </div>
  );
}
