import Link from "next/link";
import { notFound } from "next/navigation";

import { listSubjects } from "@/lib/curriculum";
import { SubjectMark } from "@/components/SubjectMark";

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

  // A subject belongs to this grade if it has any period in the grade.
  const books = all
    .map((s) => {
      const periods = s.periods.filter((p) => p.grade === grade);
      const topicCount = periods.reduce((n, p) => n + p._count.topics, 0);
      return { subject: s, periods, topicCount };
    })
    .filter((b) => b.periods.length > 0);

  const lessonTotal = books.reduce((n, b) => n + b.topicCount, 0);

  return (
    <div>
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/dashboard">Library</Link>
        <span className="sep" aria-hidden="true">/</span>
        <span aria-current="page">Grade {grade}</span>
      </nav>

      <header className="mt-4 max-w-3xl border-b border-line pb-6">
        <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          Grade {grade}
        </h1>
        <p className="mt-2 text-ink-muted">
          {books.length > 0
            ? `${books.length} subjects · ${lessonTotal} lessons, arranged by period.`
            : "Notes for this grade are being prepared."}
        </p>
      </header>

      {books.length > 0 ? (
        <ul className="mt-2 max-w-4xl">
          {books.map(({ subject, periods, topicCount }) => (
            <li key={subject.slug} className="border-b border-line">
              <Link
                href={`/subjects/${subject.slug}?grade=${grade}`}
                className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:gap-6"
              >
                <div className="min-w-0">
                  <h2 className="flex items-center gap-3 font-serif text-xl font-semibold text-ink group-hover:text-brand">
                    <SubjectMark accent={subject.accent} className="h-4" />
                    <span className="group-hover:underline group-hover:underline-offset-4">
                      {subject.name}
                    </span>
                  </h2>
                  <p className="mt-1.5 max-w-[65ch] pl-[1.125rem] font-serif text-ink-muted">
                    {subject.description}
                  </p>
                </div>
                <p className="pl-[1.125rem] text-sm text-ink-faint sm:pl-0 sm:pt-1.5 sm:text-right">
                  {periods.length} period{periods.length === 1 ? "" : "s"} ·{" "}
                  {topicCount} lesson{topicCount === 1 ? "" : "s"}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 max-w-xl">
          <p className="text-ink-muted">
            Grade {grade} lessons are on the way. Grade 10 is complete.
          </p>
          <Link href="/grade/10" className="btn btn-primary mt-5">
            Go to Grade 10
          </Link>
        </div>
      )}
    </div>
  );
}
