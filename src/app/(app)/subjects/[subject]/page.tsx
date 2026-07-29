import Link from "next/link";
import { notFound } from "next/navigation";

import { getSubjectWithPeriod } from "@/lib/curriculum";
import { accent } from "@/lib/accents";

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject: slug } = await params;
  const subject = await getSubjectWithPeriod(slug);
  if (!subject) notFound();

  const a = accent(subject.accent);
  const period = subject.periods[0];

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
        <h1 className="text-2xl font-bold tracking-tight">{subject.name}</h1>
      </div>
      <p className="mt-1.5 max-w-2xl text-ink-muted">{subject.description}</p>

      {period && (
        <section className="mt-8">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">
              Grade {period.grade} · Period {period.number}
            </h2>
          </div>
          <h3 className="mt-1 text-lg font-semibold">{period.title}</h3>
          <p className="mt-1 max-w-3xl text-sm text-ink-muted">
            {period.summary}
          </p>

          <ol className="mt-6 space-y-3">
            {period.topics.map((topic, i) => (
              <li key={topic.id}>
                <Link
                  href={`/subjects/${subject.slug}/${topic.slug}`}
                  className={`group flex items-start gap-4 rounded-card border border-line bg-surface-raised p-4 transition ${a.ring} hover:shadow-sm`}
                >
                  <span
                    className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg text-sm font-semibold ${a.chip}`}
                  >
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold tracking-tight">
                      {topic.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-ink-muted">
                      {topic.objective}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-ink-faint">
                      <span>{topic.estimatedMinutes} min lesson</span>
                      <span>{topic._count.quizQuestions} quiz questions</span>
                      <span>
                        {topic._count.testQuestions} test questions
                        <span className="text-ink-faint"> · locked</span>
                      </span>
                    </div>
                  </div>
                  <span className="mt-2 text-ink-faint transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
