import Link from "next/link";

import { listSubjects } from "@/lib/curriculum";
import { getCurrentUser } from "@/lib/auth";

const GRADES = [10, 11, 12];

export default async function DashboardPage() {
  const [user, subjects] = await Promise.all([
    getCurrentUser(),
    listSubjects(),
  ]);

  const firstName = (user?.fullName || user?.username || "there").split(" ")[0];

  // Tally subjects and topics available per grade from the in-repo content.
  const perGrade = new Map<number, { subjects: number; topics: number }>();
  for (const s of subjects) {
    const gradesInSubject = new Set<number>();
    for (const p of s.periods) {
      gradesInSubject.add(p.grade);
      const g = perGrade.get(p.grade) ?? { subjects: 0, topics: 0 };
      g.topics += p._count.topics;
      perGrade.set(p.grade, g);
    }
    for (const g of gradesInSubject) {
      const row = perGrade.get(g)!;
      row.subjects += 1;
    }
  }

  return (
    <div className="animate-fade-up">
      {/* Masthead */}
      <div className="border-b border-line pb-8 text-center">
        <p className="book-eyebrow">The Nuvex Teacher&apos;s Companion</p>
        <h1 className="book-title mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          Welcome back, {firstName}.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Your library of Ministry of Education–aligned lesson notes. Choose a
          grade to open its shelf of subject books.
        </p>
      </div>

      {/* Grade shelves */}
      <h2 className="book-eyebrow mt-10">Choose a grade</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {GRADES.map((grade) => {
          const stats = perGrade.get(grade);
          const available = Boolean(stats && stats.topics > 0);
          return (
            <GradeCard
              key={grade}
              grade={grade}
              available={available}
              subjects={stats?.subjects ?? 0}
              topics={stats?.topics ?? 0}
            />
          );
        })}
      </div>
    </div>
  );
}

function GradeCard({
  grade,
  available,
  subjects,
  topics,
}: {
  grade: number;
  available: boolean;
  subjects: number;
  topics: number;
}) {
  const inner = (
    <div
      className={`relative flex h-full flex-col justify-between rounded-card border border-line p-6 transition ${
        available
          ? "bg-surface-raised hover:-translate-y-0.5 hover:shadow-md"
          : "bg-surface-sunken/50"
      }`}
    >
      <div>
        <p className="book-eyebrow">Grade</p>
        <p className="font-display text-5xl font-semibold leading-none">
          {grade}
        </p>
      </div>
      <div className="mt-8">
        {available ? (
          <>
            <p className="text-sm text-ink-muted">
              {subjects} subjects · {topics} lessons
            </p>
            <p className="mt-2 text-sm font-semibold text-brand">
              Open the library →
            </p>
          </>
        ) : (
          <span className="inline-block rounded-lg bg-surface-sunken px-2.5 py-1 text-xs font-medium text-ink-faint">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );

  if (!available) return inner;
  return (
    <Link href={`/grade/${grade}`} className="block">
      {inner}
    </Link>
  );
}
