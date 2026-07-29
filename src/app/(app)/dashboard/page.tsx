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

  return (
    <div className="animate-fade-up">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Good to see you, {firstName}.
          </h1>
          <p className="mt-1 text-ink-muted">
            Grade 10 · Period 1 · {subjects.length} subjects ready to teach.
          </p>
        </div>
        <Link
          href="/nyvora"
          className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
        >
          Ask Nyvora
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const a = accent(subject.accent);
          const period = subject.periods[0];
          const topicCount = period?._count.topics ?? 0;
          return (
            <Link
              key={subject.id}
              href={`/subjects/${subject.slug}`}
              className={`group rounded-card border border-line bg-surface-raised p-5 transition ${a.ring} hover:shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${a.chip}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                  {subject.shortName}
                </span>
                <span className="text-xs text-ink-faint">
                  {topicCount} topics
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold tracking-tight">
                {subject.name}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">
                {subject.description}
              </p>
              {period && (
                <p className="mt-4 text-xs font-medium text-ink-faint">
                  {period.title}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
