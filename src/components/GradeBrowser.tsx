"use client";

import { useState } from "react";
import Link from "next/link";

import type { Accent } from "@/lib/accents";

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

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export function GradeBrowser({
  subjectSlug,
  accent,
  grades,
}: {
  subjectSlug: string;
  accent: Accent;
  grades: GradeGroup[];
}) {
  const byGrade = new Map(grades.map((g) => [g.grade, g.periods]));
  const firstPopulated = ALL_GRADES.find((g) => (byGrade.get(g)?.length ?? 0) > 0);
  const [active, setActive] = useState<number>(firstPopulated ?? 10);

  const activePeriods = byGrade.get(active) ?? [];
  const periodByNumber = new Map(activePeriods.map((p) => [p.number, p]));

  return (
    <div>
      {/* Grade tabs */}
      <div className="inline-flex rounded-xl border border-line bg-surface-raised p-1">
        {ALL_GRADES.map((g) => {
          const has = (byGrade.get(g)?.length ?? 0) > 0;
          const isActive = active === g;
          return (
            <button
              key={g}
              type="button"
              onClick={() => setActive(g)}
              className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-brand text-brand-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Grade {g}
              {!has && (
                <span
                  className={`ml-1.5 text-[10px] font-medium ${isActive ? "text-brand-ink/70" : "text-ink-faint"}`}
                >
                  soon
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Periods as sections */}
      <div className="mt-6 space-y-4">
        {Array.from({ length: PERIODS_PER_GRADE }, (_, i) => i + 1).map((num) => {
          const period = periodByNumber.get(num);
          if (!period) {
            return (
              <div
                key={num}
                className="rounded-card border border-dashed border-line px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-sunken text-xs font-semibold text-ink-faint">
                    {ROMAN[num - 1]}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-ink-muted">
                      Period {num}
                    </div>
                    <div className="text-xs text-ink-faint">
                      Content coming soon
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <section
              key={num}
              className="overflow-hidden rounded-card border border-line bg-surface-raised"
            >
              <header className="border-b border-line px-5 py-4">
                <div className="flex items-start gap-3">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold ${accent.chip}`}
                  >
                    {ROMAN[num - 1]}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                        Period {num}
                      </span>
                      <h3 className="text-base font-bold tracking-tight">
                        {period.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-ink-muted">
                      {period.summary}
                    </p>
                  </div>
                </div>
              </header>
              <ol className="divide-y divide-line">
                {period.topics.map((topic, ti) => (
                  <li key={topic.id}>
                    <Link
                      href={`/subjects/${subjectSlug}/${topic.slug}`}
                      className="group flex items-start gap-4 px-5 py-3.5 transition hover:bg-surface-sunken"
                    >
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-surface-sunken text-xs font-semibold text-ink-muted">
                        {ti + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold tracking-tight">
                          {topic.title}
                        </h4>
                        <p className="mt-0.5 line-clamp-1 text-sm text-ink-muted">
                          {topic.objective}
                        </p>
                        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-faint">
                          <span>{topic.estimatedMinutes} min</span>
                          <span>{topic.quizCount} quiz questions</span>
                          <span>{topic.testCount} test questions · locked</span>
                        </div>
                      </div>
                      <span className="mt-1 text-ink-faint transition group-hover:translate-x-0.5">
                        →
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
  );
}
