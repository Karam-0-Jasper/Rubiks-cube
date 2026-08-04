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
  const testQuestions = unlocked
    ? await getTestQuestions(subjectSlug, topicSlug)
    : [];

  return (
    <article className="animate-fade-up mx-auto max-w-2xl">
      {/* Running head */}
      <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
        <Link
          href={`/subjects/${subjectSlug}`}
          className="book-eyebrow transition hover:text-ink"
        >
          ← {topic.period.subject.name}
        </Link>
        <span className="book-eyebrow">
          Grade {topic.period.grade} · Period {topic.period.number}
        </span>
      </div>

      {/* Chapter opener */}
      <header className="mt-8 text-center">
        <p className="book-eyebrow">
          <span className={`mr-2 inline-block h-2 w-2 rounded-full align-middle ${a.dot}`} />
          Lesson
        </p>
        <h1 className="book-title mt-3 text-4xl font-semibold leading-tight sm:text-[2.7rem]">
          {topic.title}
        </h1>
        <p className="mt-4 text-sm italic text-ink-faint">
          Suggested lesson length · {topic.estimatedMinutes} minutes
        </p>
      </header>

      <hr className="book-rule mx-auto mt-8 w-24" />

      {/* Objective */}
      <section className="mt-10">
        <SectionHeading numeral="I" title="Learning objective" />
        <div className="mt-4 border-l-2 border-brand pl-5">
          <p className="text-lg leading-relaxed">{topic.objective}</p>
        </div>
      </section>

      {/* Notes */}
      <section className="mt-12">
        <SectionHeading numeral="II" title="Lesson notes" />
        <div className="mt-5">
          <Notes source={topic.notes} />
        </div>
      </section>

      {/* Worked example */}
      <section className="mt-12">
        <SectionHeading numeral="III" title="Worked example" />
        <div className="mt-5 rounded-card border border-line bg-surface-sunken/60 p-6">
          <Notes source={topic.workedExample} figureLabel="Step" />
        </div>
      </section>

      {/* Quiz */}
      <section className="mt-14">
        <SectionHeading
          numeral="IV"
          title="Practice quiz"
          note={`${quiz.length} questions · for your class`}
        />
        <div className="mt-5">
          <Quiz questions={quiz} />
        </div>
      </section>

      {/* Test questions — gated */}
      <section className="mt-14">
        <SectionHeading
          numeral="V"
          title="Test questions"
          note={`${topic._count.testQuestions} questions · teacher only`}
        />
        <div className="mt-5">
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

      {/* Prev / next — like turning pages */}
      <nav className="mt-16 grid grid-cols-2 gap-4 border-t border-line pt-6">
        {prev ? (
          <Link
            href={`/subjects/${subjectSlug}/${prev.slug}`}
            className="group rounded-card border border-line p-4 transition hover:bg-surface-sunken"
          >
            <div className="book-eyebrow">← Previous</div>
            <div className="mt-1 font-display text-base font-semibold leading-snug">
              {prev.title}
            </div>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/subjects/${subjectSlug}/${next.slug}`}
            className="group rounded-card border border-line p-4 text-right transition hover:bg-surface-sunken"
          >
            <div className="book-eyebrow">Next →</div>
            <div className="mt-1 font-display text-base font-semibold leading-snug">
              {next.title}
            </div>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}

/// A book-style section heading: a roman numeral in the margin, a serif title,
/// and an optional muted note — echoing the way a textbook labels its parts.
function SectionHeading({
  numeral,
  title,
  note,
}: {
  numeral: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex items-baseline gap-3 border-b border-line pb-2">
      <span className="font-display text-sm font-semibold text-brand">
        {numeral}.
      </span>
      <h2 className="book-heading text-2xl font-semibold">{title}</h2>
      {note ? (
        <span className="ml-auto text-sm italic text-ink-faint">{note}</span>
      ) : null}
    </div>
  );
}
