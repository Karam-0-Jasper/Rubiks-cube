import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SUBJECTS } from "@/content";
import { PAID_PLANS, PLANS } from "@/lib/plans";

export default async function LandingPage() {
  const user = await getCurrentUser();
  if (user) redirect("/dashboard");

  const subjectCount = SUBJECTS.length;

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-xl font-semibold">Nuvex</span>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:text-ink"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-ink transition hover:opacity-90"
          >
            Get started
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pb-8 pt-12 sm:pt-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-raised px-3 py-1 text-xs font-medium text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-positive" />
              Aligned to the Liberian MoE curriculum
            </span>
            <h1 className="book-title mt-5 text-5xl font-semibold leading-[1.05] sm:text-6xl">
              Walk into class already prepared.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-muted">
              Nuvex gives Liberian teachers ready-made lesson notes and plans by
              subject, grade and period — full notes, worked examples, practice
              quizzes, and teacher-only test questions. Plus Nyvora, your AI
              teaching assistant, to help you prep faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-ink transition hover:opacity-90"
              >
                Start free
              </Link>
              <Link
                href="/login"
                className="rounded-xl border border-line bg-surface-raised px-5 py-3 text-sm font-semibold transition hover:bg-surface-sunken"
              >
                I have an account
              </Link>
            </div>
            <p className="mt-4 text-sm text-ink-faint">
              Free plan includes all lesson notes and {PLANS.FREE.messageAllowance}{" "}
              Nyvora messages a week. No card required.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <Feature
              title="Full lesson notes"
              body="Objective, notes, a worked example and a teaching tip for every topic — written the way you would teach it."
            />
            <Feature
              title="Quizzes and tests"
              body="Ten practice questions per topic for your class, plus five teacher-only test questions unlocked with a subject code."
            />
            <Feature
              title="Nyvora AI assistant"
              body="Ask for a simpler explanation, a lesson starter, or an extra example. Metered usage, fair to every plan."
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="book-eyebrow">
            {subjectCount} subjects · Grade 10, all six periods
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {SUBJECTS.map((s) => (
              <span
                key={s.slug}
                className="rounded-lg border border-line bg-surface-raised px-3 py-1.5 text-sm font-medium"
              >
                {s.name}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="book-title text-3xl font-semibold">Simple pricing</h2>
          <p className="mt-2 text-ink-muted">
            Every plan includes all lesson notes and plans. Paid plans add
            teacher-only test questions and more Nyvora.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PlanCard plan={PLANS.FREE} />
            {PAID_PLANS.map((p) => (
              <PlanCard key={p.id} plan={p} />
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-faint">
        Nuvex — built for teachers.
      </footer>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-card border border-line bg-surface-raised p-5">
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{body}</p>
    </div>
  );
}

function PlanCard({
  plan,
}: {
  plan: (typeof PLANS)[keyof typeof PLANS];
}) {
  return (
    <div className="flex flex-col rounded-card border border-line bg-surface-raised p-5">
      <div className="text-sm font-semibold text-ink-muted">{plan.name}</div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-display text-3xl font-semibold">
          {plan.priceLabel}
        </span>
        <span className="text-sm text-ink-faint">{plan.cadence}</span>
      </div>
      <p className="mt-2 text-sm text-ink-muted">{plan.blurb}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-positive">✓</span>
            <span className="text-ink-muted">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand font-display text-sm font-semibold text-brand-ink">
      N
    </span>
  );
}
