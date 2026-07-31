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
      {/* Masthead */}
      <div className="border-b border-line pb-8 text-center">
        <p className="book-eyebrow">The Nuvex Teacher&apos;s Companion</p>
        <h1 className="book-title mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          Welcome back, {firstName}.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Ministry of Education–aligned lesson notes, worked examples, diagrams
          and plans — organised by subject, grade and period, the way a good
          textbook is.
        </p>
        <div className="mt-6 flex items-center justify-center gap-8">
          <Stat value={String(subjects.length)} label="Subjects" />
          <span className="h-8 w-px bg-line" />
          <Stat value={String(totalTopics)} label="Topics" />
          <span className="h-8 w-px bg-line" />
          <Stat value="10–12" label={`Grades (${gradesCovered.size} live)`} />
        </div>
        <Link
          href="/nyvora"
          className="mt-7 inline-block rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
        >
          Ask Nyvora, your teaching assistant
        </Link>
      </div>

      {/* Subject grid */}
      <h2 className="book-eyebrow mt-10">Table of subjects</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug">
                {subject.name}
              </h3>
              <p className="mt-1.5 line-clamp-2 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">
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
    <div className="text-center">
      <div className="font-display text-2xl font-semibold">{value}</div>
      <div className="mt-0.5 text-xs font-medium text-ink-faint">{label}</div>
    </div>
  );
}
