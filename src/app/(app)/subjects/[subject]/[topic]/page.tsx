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
import { Notes, noteOutline } from "@/components/Notes";
import { Quiz, type QuizItem } from "@/components/Quiz";
import { UnlockForm } from "@/components/UnlockForm";
import { SubjectMark } from "@/components/SubjectMark";

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

  const quiz: QuizItem[] = topic.quizQuestions.map((q) => ({
    id: q.id,
    prompt: q.prompt,
    options: q.options as string[],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  }));

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
  const testQuestions = unlocked
    ? await getTestQuestions(subjectSlug, topicSlug)
    : [];

  const grade = topic.period.grade;
  const periodNo = topic.period.number;
  const subjectName = topic.period.subject.name;
  const outline = noteOutline(topic.notes, "n-");

  const contents = (
    <ol className="space-y-1.5 text-sm">
      <li>
        <a href="#objective" className="toc-link">Objective</a>
      </li>
      <li>
        <a href="#notes" className="toc-link">Lesson notes</a>
        {outline.length > 0 && (
          <ol className="mt-1.5 space-y-1.5 border-l border-line pl-3">
            {outline.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`} className="toc-link text-ink-faint">
                  {h.title}
                </a>
              </li>
            ))}
          </ol>
        )}
      </li>
      <li>
        <a href="#worked-example" className="toc-link">Worked example</a>
      </li>
      <li>
        <a href="#quiz" className="toc-link">Practice quiz</a>
      </li>
      <li>
        <a href="#test" className="toc-link">Test questions</a>
      </li>
    </ol>
  );

  return (
    <div>
      <nav aria-label="Breadcrumb" className="crumbs">
        <Link href="/dashboard">Library</Link>
        <span className="sep" aria-hidden="true">/</span>
        <Link href={`/grade/${grade}`}>Grade {grade}</Link>
        <span className="sep" aria-hidden="true">/</span>
        <Link href={`/subjects/${subjectSlug}?grade=${grade}`}>{subjectName}</Link>
        <span className="sep" aria-hidden="true">/</span>
        <Link href={`/subjects/${subjectSlug}?grade=${grade}#period-${periodNo}`}>
          Period {periodNo}
        </Link>
      </nav>

      <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-14">
        <article className="min-w-0 max-w-[44rem]">
          <header>
            <p className="eyebrow flex items-center gap-2">
              <SubjectMark accent={topic.period.subject.accent} />
              {subjectName} · Grade {grade} · Period {periodNo}
              {idx >= 0 ? ` · Topic ${idx + 1} of ${topics.length}` : ""}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-[2.4rem]">
              {topic.title}
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              About {topic.estimatedMinutes} minutes of teaching · {quiz.length} quiz
              questions · {topic._count.testQuestions} test questions
            </p>
          </header>

          {/* Contents on small screens */}
          <details className="mt-6 rounded-md border border-line bg-surface-raised px-4 py-3 lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold">
              On this page
            </summary>
            <div className="mt-3">{contents}</div>
          </details>

          <section id="objective" className="mt-8 border-y border-line py-4">
            <h2 className="eyebrow">Learning objective</h2>
            <p className="mt-1.5 font-serif text-[1.12rem] leading-relaxed">
              {topic.objective}
            </p>
          </section>

          <section id="notes" className="mt-10" aria-labelledby="notes-title">
            <h2 id="notes-title" className="sr-only">
              Lesson notes
            </h2>
            <Notes source={topic.notes} idPrefix="n-" />
          </section>

          <section id="worked-example" className="mt-12" aria-labelledby="we-title">
            <div className="worked-example">
              <h2 id="we-title" className="eyebrow !text-brand">
                Worked example
              </h2>
              <div className="mt-3">
                <Notes source={topic.workedExample} figureLabel="Diagram" idPrefix="we-" />
              </div>
            </div>
          </section>

          <section id="quiz" className="mt-14" aria-labelledby="quiz-title">
            <SectionHeading id="quiz-title" title="Practice quiz" note={`${quiz.length} questions for the class`} />
            <div className="mt-5">
              <Quiz questions={quiz} />
            </div>
          </section>

          <section id="test" className="mt-14" aria-labelledby="test-title">
            <SectionHeading
              id="test-title"
              title="Test questions"
              note={`${topic._count.testQuestions} questions · teachers only`}
            />
            <div className="mt-5">
              {unlocked ? (
                <ol className="border-t border-line">
                  {testQuestions.map((q, qi) => (
                    <li key={q.id} className="border-b border-line py-5">
                      <div className="flex items-start gap-3">
                        <span className="w-6 shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-ink-faint">
                          {qi + 1}.
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <p className="font-serif text-[1.05rem] leading-relaxed">{q.prompt}</p>
                            <span className="text-sm text-ink-faint">
                              [{q.marks} mark{q.marks === 1 ? "" : "s"}]
                            </span>
                          </div>
                          {Array.isArray(q.options) && q.options.length > 0 && (
                            <ol className="mt-2 space-y-1 font-serif text-ink-muted">
                              {(q.options as string[]).map((opt, oi) => (
                                <li key={oi} className="flex gap-2">
                                  <span className="font-sans text-sm font-semibold">
                                    {String.fromCharCode(65 + oi)}.
                                  </span>
                                  <span>{opt}</span>
                                </li>
                              ))}
                            </ol>
                          )}
                          <details className="mt-3">
                            <summary className="cursor-pointer text-sm font-semibold text-brand">
                              Marking key
                            </summary>
                            <p className="mt-2 border-l-2 border-line pl-3 font-serif leading-relaxed text-ink-muted">
                              {q.answerKey}
                            </p>
                          </details>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <UnlockForm subjectSlug={subjectSlug} topicSlug={topicSlug} />
              )}
            </div>
          </section>

          {/* Previous / next topic in this period */}
          <nav
            aria-label="Topic navigation"
            className="mt-16 grid gap-3 border-t border-line pt-6 sm:grid-cols-2"
          >
            {prev ? (
              <Link
                href={`/subjects/${subjectSlug}/${prev.slug}`}
                className="group block rounded-md py-2"
              >
                <span className="text-sm text-ink-faint">Previous topic</span>
                <span className="mt-0.5 block font-serif text-lg font-semibold leading-snug group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/subjects/${subjectSlug}/${next.slug}`}
                className="group block rounded-md py-2 sm:text-right"
              >
                <span className="text-sm text-ink-faint">Next topic</span>
                <span className="mt-0.5 block font-serif text-lg font-semibold leading-snug group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
                  {next.title}
                </span>
              </Link>
            ) : (
              <Link
                href={`/subjects/${subjectSlug}?grade=${grade}#period-${periodNo}`}
                className="group block rounded-md py-2 sm:text-right"
              >
                <span className="text-sm text-ink-faint">End of period {periodNo}</span>
                <span className="mt-0.5 block font-serif text-lg font-semibold leading-snug group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
                  Back to {subjectName}
                </span>
              </Link>
            )}
          </nav>
        </article>

        {/* Contents on large screens */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6">
            <p className="eyebrow">On this page</p>
            <div className="mt-3">{contents}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeading({
  id,
  title,
  note,
}: {
  id: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b-2 border-ink/80 pb-2">
      <h2 id={id} className="font-serif text-2xl font-semibold">
        {title}
      </h2>
      {note ? <span className="text-sm text-ink-faint">{note}</span> : null}
    </div>
  );
}
