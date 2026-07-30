import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getSubjectWithPeriod,
  getTestQuestions,
  getTopic,
  userHasUnlocked,
} from "@/lib/curriculum";
import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { accent } from "@/lib/accents";
import { Notes } from "@/components/Notes";
import { Quiz, type QuizItem } from "@/components/Quiz";
import { UnlockForm } from "@/components/UnlockForm";

export default async function TopicPage({
  params,
}: {
  params: Promise<{ subject: string; topic: string }>;
}) {
  const { subject: subjectSlug, topic: topicSlug } = await params;
  const [user, topic] = await Promise.all([
    requireUser(),
    getTopic(subjectSlug, topicSlug),
  ]);
  if (!topic) notFound();

  const a = accent(topic.period.subject.accent);

  const quiz: QuizItem[] = topic.quizQuestions.map((q) => ({
    id: q.id,
    prompt: q.prompt,
    options: q.options as string[],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  }));

  // Determine sibling topics for prev/next navigation.
  // Prev/next navigate within the topic's own period.
  const subject = await getSubjectWithPeriod(subjectSlug);
  const ownPeriod = subject?.periods.find((p) =>
    p.topics.some((t) => t.slug === topicSlug),
  );
  const topics = ownPeriod?.topics ?? [];
  const idx = topics.findIndex((t) => t.slug === topicSlug);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx >= 0 && idx < topics.length - 1 ? topics[idx + 1] : null;

  // Resolve unlock state for the gated test questions.
  const subjectRow = await prisma.subject.findUnique({
    where: { slug: subjectSlug },
    select: { id: true },
  });
  const unlocked = subjectRow
    ? await userHasUnlocked(user.id, subjectRow.id)
    : false;
  const testQuestions = unlocked ? await getTestQuestions(topic.id) : [];

  return (
    <article className="animate-fade-up">
      <Link
        href={`/subjects/${subjectSlug}`}
        className="text-sm font-medium text-ink-muted transition hover:text-ink"
      >
        ← {topic.period.subject.name}
      </Link>

      <header className="mt-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${a.chip}`}
        >
          Grade {topic.period.grade} · Period {topic.period.number}
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">
          {topic.title}
        </h1>
      </header>

      {/* Objective */}
      <section className="mt-6 rounded-card border border-line bg-brand-soft/60 p-5">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
          Learning objective
        </h2>
        <p className="mt-2 leading-relaxed">{topic.objective}</p>
        <p className="mt-3 text-xs text-ink-faint">
          Suggested lesson length: {topic.estimatedMinutes} minutes
        </p>
      </section>

      {/* Notes */}
      <section className="mt-8">
        <h2 className="text-xl font-bold tracking-tight">Lesson notes</h2>
        <div className="mt-4">
          <Notes source={topic.notes} />
        </div>
      </section>

      {/* Worked example */}
      <section className="mt-8">
        <h2 className="text-xl font-bold tracking-tight">Worked example</h2>
        <div className="mt-4 rounded-card border border-line bg-surface-raised p-5">
          <Notes source={topic.workedExample} />
        </div>
      </section>

      {/* Teaching tip */}
      <section className="mt-8">
        <div className="rounded-card border-l-4 border-brand bg-surface-raised p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink-faint">
            Teaching tip
          </h2>
          <p className="mt-2 leading-relaxed text-ink-muted">
            {topic.teachingTip}
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="mt-10">
        <h2 className="text-xl font-bold tracking-tight">
          Practice quiz
          <span className="ml-2 text-sm font-normal text-ink-faint">
            {quiz.length} questions · for your class
          </span>
        </h2>
        <div className="mt-4">
          <Quiz questions={quiz} />
        </div>
      </section>

      {/* Test questions — gated */}
      <section className="mt-10">
        <h2 className="text-xl font-bold tracking-tight">
          Test questions
          <span className="ml-2 text-sm font-normal text-ink-faint">
            {topic._count.testQuestions} questions · teacher only
          </span>
        </h2>
        <div className="mt-4">
          {unlocked ? (
            <ol className="space-y-4">
              {testQuestions.map((q, qi) => (
                <li
                  key={q.id}
                  className="rounded-card border border-line bg-surface-raised p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-medium">
                      <span className="text-ink-faint">{qi + 1}. </span>
                      {q.prompt}
                    </p>
                    <span className="shrink-0 rounded-md bg-surface-sunken px-2 py-0.5 text-xs font-medium text-ink-muted">
                      {q.marks} mark{q.marks === 1 ? "" : "s"}
                    </span>
                  </div>
                  {Array.isArray(q.options) && q.options.length > 0 && (
                    <ul className="mt-2 grid gap-1 text-sm text-ink-muted">
                      {(q.options as string[]).map((opt, oi) => (
                        <li key={oi} className="flex gap-2">
                          <span className="font-medium">
                            {String.fromCharCode(65 + oi)}.
                          </span>
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <details className="mt-3 rounded-lg bg-surface-sunken px-3 py-2">
                    <summary className="cursor-pointer text-sm font-medium text-brand">
                      Marking key
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {q.answerKey}
                    </p>
                  </details>
                </li>
              ))}
            </ol>
          ) : (
            <UnlockForm subjectSlug={subjectSlug} topicSlug={topicSlug} />
          )}
        </div>
      </section>

      {/* Prev / next */}
      <nav className="mt-12 flex items-center justify-between gap-3 border-t border-line pt-6">
        {prev ? (
          <Link
            href={`/subjects/${subjectSlug}/${prev.slug}`}
            className="rounded-xl border border-line px-4 py-2.5 text-sm font-medium transition hover:bg-surface-sunken"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/subjects/${subjectSlug}/${next.slug}`}
            className="rounded-xl border border-line px-4 py-2.5 text-sm font-medium transition hover:bg-surface-sunken"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
