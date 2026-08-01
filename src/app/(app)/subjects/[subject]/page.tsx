import Link from "next/link";
import { notFound } from "next/navigation";

import { getSubjectWithPeriod } from "@/lib/curriculum";
import { accent } from "@/lib/accents";
import {
  GradeBrowser,
  type GradeGroup,
} from "@/components/GradeBrowser";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = await getSubjectWithPeriod(slug);
  if (!subject) notFound();

  const a = accent(subject.accent);

  // Group the subject's periods by grade for the sectioned browser.
  const gradeMap = new Map<number, GradeGroup>();
  for (const p of subject.periods) {
    if (!gradeMap.has(p.grade)) gradeMap.set(p.grade, { grade: p.grade, periods: [] });
    gradeMap.get(p.grade)!.periods.push({
      id: p.id,
      number: p.number,
      title: p.title,
      summary: p.summary,
      topics: p.topics.map((t) => ({
        id: t.id,
        slug: t.slug,
        title: t.title,
        objective: t.objective,
        estimatedMinutes: t.estimatedMinutes,
        quizCount: t._count.quizQuestions,
        testCount: t._count.testQuestions,
      })),
    });
  }
  const grades = [...gradeMap.values()].sort((x, y) => x.grade - y.grade);

  const topicTotal = subject.periods.reduce((n, p) => n + p.topics.length, 0);
  const backGrade = subject.periods.length
    ? Math.min(...subject.periods.map((p) => p.grade))
    : 10;

  return (
    <div className="animate-fade-up">
      <Link
        href={`/grade/${backGrade}`}
        className="book-eyebrow transition hover:text-ink"
      >
        ← Grade {backGrade} library
      </Link>

      <div className="mt-6 border-b border-line pb-8 text-center">
        <p className="book-eyebrow">
          <span className={`mr-2 inline-block h-2 w-2 rounded-full align-middle ${a.dot}`} />
          Subject
        </p>
        <h1 className="book-title mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          {subject.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {subject.description}
        </p>
        <p className="mt-4 text-sm italic text-ink-faint">
          {topicTotal} topic{topicTotal === 1 ? "" : "s"} · organised by grade
          and period
        </p>
      </div>

      <div className="mt-8">
        <GradeBrowser subjectSlug={subject.slug} accent={a} grades={grades} />
      </div>
    </div>
  );
}
