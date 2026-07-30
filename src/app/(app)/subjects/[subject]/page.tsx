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

  return (
    <div className="animate-fade-up">
      <Link
        href="/dashboard"
        className="text-sm font-medium text-ink-muted transition hover:text-ink"
      >
        ← All subjects
      </Link>

      <div className="mt-4 flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${a.dot}`} />
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {subject.name}
        </h1>
      </div>
      <p className="mt-2 max-w-2xl text-ink-muted">{subject.description}</p>
      <p className="mt-3 text-xs font-medium text-ink-faint">
        {topicTotal} topic{topicTotal === 1 ? "" : "s"} available · organised by
        grade and period
      </p>

      <div className="mt-8">
        <GradeBrowser subjectSlug={subject.slug} accent={a} grades={grades} />
      </div>
    </div>
  );
}
