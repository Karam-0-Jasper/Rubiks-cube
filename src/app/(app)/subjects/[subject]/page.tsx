import Link from "next/link";
import { notFound } from "next/navigation";

import { getSubjectWithPeriod } from "@/lib/curriculum";
import { GradeBrowser, type GradeGroup } from "@/components/GradeBrowser";
import { SubjectMark } from "@/components/SubjectMark";

export default async function SubjectPage({
  params,
  searchParams,
}: {
  params: Promise<{ subject: string }>;
  searchParams: Promise<{ grade?: string }>;
}) {
  const [{ subject: slug }, sp] = await Promise.all([params, searchParams]);
  const subject = await getSubjectWithPeriod(slug);
  if (!subject) notFound();

  // Group the subject's periods by grade for the browser.
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

  const requested = Number(sp.grade);
  const initialGrade = gradeMap.has(requested) ? requested : grades[0]?.grade ?? 10;

  return (
    <div>
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/dashboard">Library</Link>
        <span className="sep" aria-hidden="true">/</span>
        <Link href={`/grade/${initialGrade}`}>Grade {initialGrade}</Link>
        <span className="sep" aria-hidden="true">/</span>
        <span aria-current="page">{subject.name}</span>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="flex items-center gap-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
          <SubjectMark accent={subject.accent} className="h-7 w-2" />
          {subject.name}
        </h1>
        <p className="mt-3 max-w-[65ch] font-serif text-lg leading-relaxed text-ink-muted">
          {subject.description}
        </p>
      </header>

      <div className="mt-8 max-w-4xl">
        <GradeBrowser
          subjectSlug={subject.slug}
          grades={grades}
          initialGrade={initialGrade}
        />
      </div>
    </div>
  );
}
