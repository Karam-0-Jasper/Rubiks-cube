"use client";

import { useState } from "react";
import Link from "next/link";

export type TopicRow = {
  id: string;
  slug: string;
  title: string;
  objective: string;
  estimatedMinutes: number;
  quizCount: number;
  testCount: number;
};

export type PeriodRow = {
  id: string;
  number: number;
  title: string;
  summary: string;
  topics: TopicRow[];
};

export type GradeGroup = {
  grade: number;
  periods: PeriodRow[];
};

const ALL_GRADES = [10, 11, 12];
const PERIODS_PER_GRADE = 6;

/// Strip the "By the end of the topic, learners should be able to" preamble so
/// the topic list shows what the lesson actually covers.
function shortObjective(objective: string): string {
  const s = objective
    .replace(/^by the end of the (topic|unit|lesson),?\s*(learners|students)\s+should\s+be\s+able\s+to\s*/i, "")
    .trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : objective;
}

export function GradeBrowser({
  subjectSlug,
  grades,
  initialGrade,
}: {
  subjectSlug: string;
  grades: GradeGroup[];
  initialGrade?: number;
}) {
  const byGrade = new Map(grades.map((g) => [g.grade, g.periods]));
  const has = (g: number) => (byGrade.get(g)?.length ?? 0) > 0;
  const firstPopulated = ALL_GRADES.find(has);
  const [active, setActive] = useState<number>(
    initialGrade && has(initialGrade) ? initialGrade : (firstPopulated ?? 10),
  );

  function choose(g: number) {
    setActive(g);
    // Keep the chosen grade in the address so back/forward and shared links
    // land on the same grade, without a server round-trip.
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("grade", String(g));
      window.history.replaceState(null, "", url.toString());
    } catch {
      // ignore
    }
  }

  const activePeriods = byGrade.get(active) ?? [];
  const periodByNumber = new Map(activePeriods.map((p) => [p.number, p]));

  return (
    <div>
      {/* Grade tabs */}
      <div role="tablist" aria-label="Grade" className="flex gap-1 border-b border-line">
        {ALL_GRADES.map((g) => {
          const isActive = active === g;
          const available = has(g);
          return (
            <button
              key={g}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="grade-panel"
              disabled={!available}
              onClick={() => choose(g)}
              className={`-mb-px border-b-2 px-3 py-2 text-[0.95rem] font-semibold transition-colors ${
                isActive
                  ? "border-brand text-ink"
                  : available
                    ? "border-transparent text-ink-muted hover:text-ink"
                    : "cursor-not-allowed border-transparent text-ink-faint"
              }`}
            >
              Grade {g}
              {!available && <span className="ml-1.5 text-xs font-normal">(not yet)</span>}
            </button>
          );
        })}
      </div>

      <div id="grade-panel" role="tabpanel" aria-label={`Grade ${active}`}>
        {/* Period index */}
        {activePeriods.length > 0 && (
          <nav aria-label="Periods" className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <span className="text-ink-faint">Jump to:</span>
            {Array.from({ length: PERIODS_PER_GRADE }, (_, i) => i + 1).map((num) =>
              periodByNumber.has(num) ? (
                <a
                  key={num}
                  href={`#period-${num}`}
                  className="text-ink-muted underline decoration-line underline-offset-4 hover:text-ink hover:decoration-current"
                >
                  Period {num}
                </a>
              ) : null,
            )}
          </nav>
        )}

        <div className="mt-8 space-y-12">
          {Array.from({ length: PERIODS_PER_GRADE }, (_, i) => i + 1).map((num) => {
            const period = periodByNumber.get(num);
            if (!period) {
              return (
                <section key={num} className="text-ink-faint">
                  <p className="eyebrow">Period {num}</p>
                  <p className="mt-1 text-sm">Notes for this period are being prepared.</p>
                </section>
              );
            }
            return (
              <section key={num} id={`period-${num}`} aria-labelledby={`period-${num}-title`}>
                <p className="eyebrow">Period {num}</p>
                <h2
                  id={`period-${num}-title`}
                  className="mt-1 font-serif text-2xl font-semibold leading-snug"
                >
                  {period.title}
                </h2>
                {period.summary && (
                  <p className="mt-2 max-w-[68ch] font-serif text-ink-muted">
                    {period.summary}
                  </p>
                )}

                <ol className="mt-4 border-t border-line">
                  {period.topics.map((topic, ti) => (
                    <li key={topic.id} className="border-b border-line">
                      <Link
                        href={`/subjects/${subjectSlug}/${topic.slug}`}
                        className="group grid grid-cols-[2rem_1fr] gap-x-3 py-3.5 sm:grid-cols-[2.5rem_1fr_auto]"
                      >
                        <span className="pt-0.5 text-sm font-semibold tabular-nums text-ink-faint">
                          {num}.{ti + 1}
                        </span>
                        <span className="min-w-0">
                          <span className="block font-serif text-[1.08rem] font-semibold leading-snug text-ink group-hover:text-brand group-hover:underline group-hover:underline-offset-4">
                            {topic.title}
                          </span>
                          <span className="mt-0.5 line-clamp-2 block text-sm text-ink-muted sm:line-clamp-1">
                            {shortObjective(topic.objective)}
                          </span>
                        </span>
                        <span className="col-start-2 mt-1 text-xs text-ink-faint sm:col-start-3 sm:mt-0 sm:pt-1 sm:text-right sm:text-sm">
                          {topic.estimatedMinutes} min · {topic.quizCount} quiz questions
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
