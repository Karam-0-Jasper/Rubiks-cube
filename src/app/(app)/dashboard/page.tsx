import Link from "next/link";

import { listSubjects } from "@/lib/curriculum";
import { accent } from "@/lib/accents";
import { getCurrentUser } from "@/lib/auth";

export default async function DashboardPage() {
  const [user, subjects] = await Promise.all([
    getCurrentUser(),
    listSubjects(),
  ]);

  const firstName = (user?.fullName || user?.username || "there").split(" ")[0];

  const totalTopics = subjects.reduce(
    (n, s) => n + s.periods.reduce((m, p) => m + p._count.topics, 0),
    0,
  );
  const gradesCovered = new Set(
    subjects.flatMap((s) => s.periods.map((p) => p.grade)),
  );

  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <div className="rounded-card border border-line bg-gradient-to-br from-brand-soft/70 to-surface-raised p-6 sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back, {firstName}.
            </h1>
            <p className="mt-1.5 max-w-xl text-ink-muted">
              Ministry of Education–aligned lesson notes and plans, organised by
              subject, grade and period. Pick a subject to begin.
            </p>
          </div>
          <Link
            href="/nyvora"
            className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
          >
            Ask Nyvora
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Stat value={String(subjects.length)} label="Subjects" />
          <Stat value={String(totalTopics)} label="Topics" />
          <Stat
            value={`10–12`}
            label={`Grades (${gradesCovered.size} live)`}
          />
        </div>
      </div>

      {/* Subject grid */}
      <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-faint">
        Subjects
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const a = accent(subject.accent);
          const topicCount = subject.periods.reduce(
            (n, p) => n + p._count.topics,
            0,
          );
          const grades = [...new Set(subject.periods.map((p) => p.grade))].sort();
          return (
            <Link
              key={subject.id}
              href={`/subjects/${subject.slug}`}
              className={`group flex flex-col rounded-card border border-line bg-surface-raised p-5 transition ${a.ring} hover:shadow-md`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${a.chip}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                  {subject.shortName}
                </span>
                <span className="text-xs text-ink-faint">
                  {topicCount} topic{topicCount === 1 ? "" : "s"}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {subject.name}
              </h3>
              <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-ink-muted">
                {subject.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5">
                {[10, 11, 12].map((g) => {
                  const live = grades.includes(g);
                  return (
                    <span
                      key={g}
                      className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${
                        live
                          ? `${a.chip}`
                          : "bg-surface-sunken text-ink-faint"
                      }`}
                    >
                      G{g}
                    </span>
                  );
                })}
                <span className="ml-auto text-ink-faint transition group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-xl font-bold tracking-tight">{value}</div>
      <div className="text-xs font-medium text-ink-faint">{label}</div>
    </div>
  );
}
