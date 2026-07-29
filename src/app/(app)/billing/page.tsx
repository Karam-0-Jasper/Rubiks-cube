import { requireUser, activePlan } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { PLANS, PAID_PLANS, type PlanConfig } from "@/lib/plans";
import { startCheckout, openBillingPortal } from "@/app/actions/billing";

export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; error?: string }>;
}) {
  const user = await requireUser();
  const [quota, sp] = await Promise.all([getQuota(user), searchParams]);
  const current = activePlan(user);
  const sub = user.subscription;

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Your plan</h1>
      <p className="mt-1 text-ink-muted">
        Every plan includes all lesson notes and plans. Paid plans add
        teacher-only test questions and more Nyvora messages.
      </p>

      {sp.status === "success" && (
        <Banner tone="positive">
          Payment received. Your plan will update within a moment.
        </Banner>
      )}
      {sp.status === "cancelled" && (
        <Banner tone="muted">Checkout cancelled. No charge was made.</Banner>
      )}
      {sp.error === "unconfigured" && (
        <Banner tone="warning">
          Payments are not configured in this environment yet. Add your Stripe
          keys and price IDs to enable upgrades.
        </Banner>
      )}

      <div className="mt-6 rounded-card border border-line bg-surface-raised p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-sm text-ink-faint">Current plan</div>
            <div className="text-xl font-bold">{PLANS[current].name}</div>
          </div>
          <div className="text-right text-sm">
            <div className="font-semibold">
              {quota.used} / {quota.limit} Nyvora messages used
            </div>
            <div className="text-ink-faint">
              Resets {quota.windowEnd.toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-sunken">
          <div
            className="h-full rounded-full bg-brand transition-all"
            style={{
              width: `${Math.min(100, (quota.used / quota.limit) * 100)}%`,
            }}
          />
        </div>
        {sub?.stripeSubscriptionId && (
          <form action={openBillingPortal} className="mt-4">
            <button
              type="submit"
              className="rounded-xl border border-line px-4 py-2 text-sm font-semibold transition hover:bg-surface-sunken"
            >
              Manage billing
            </button>
            {sub.cancelAtPeriodEnd && (
              <span className="ml-3 text-sm text-warning">
                Cancels on {sub.periodEnd.toLocaleDateString()}
              </span>
            )}
          </form>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PlanTile plan={PLANS.FREE} current={current === "FREE"} />
        {PAID_PLANS.map((p) => (
          <PlanTile key={p.id} plan={p} current={current === p.id} />
        ))}
      </div>
    </div>
  );
}

function PlanTile({
  plan,
  current,
}: {
  plan: PlanConfig;
  current: boolean;
}) {
  const isFree = plan.id === "FREE";
  return (
    <div
      className={`flex flex-col rounded-card border p-5 ${
        current ? "border-brand ring-2 ring-brand/20" : "border-line"
      } bg-surface-raised`}
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-ink-muted">{plan.name}</div>
        {current && (
          <span className="rounded-md bg-brand-soft px-2 py-0.5 text-xs font-semibold text-brand">
            Current
          </span>
        )}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-bold">{plan.priceLabel}</span>
        <span className="text-sm text-ink-faint">{plan.cadence}</span>
      </div>
      <p className="mt-2 text-sm text-ink-muted">{plan.blurb}</p>
      <ul className="mt-4 flex-1 space-y-2 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-positive">✓</span>
            <span className="text-ink-muted">{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        {isFree ? (
          <div className="rounded-xl border border-line px-4 py-2.5 text-center text-sm font-medium text-ink-faint">
            Always free
          </div>
        ) : current ? (
          <div className="rounded-xl bg-surface-sunken px-4 py-2.5 text-center text-sm font-medium text-ink-muted">
            Your plan
          </div>
        ) : (
          <form action={startCheckout}>
            <input type="hidden" name="plan" value={plan.id} />
            <button
              type="submit"
              className="w-full rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-brand-ink transition hover:opacity-90"
            >
              Choose {plan.name}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Banner({
  tone,
  children,
}: {
  tone: "positive" | "warning" | "muted";
  children: React.ReactNode;
}) {
  const cls =
    tone === "positive"
      ? "border-positive/30 bg-positive/10 text-positive"
      : tone === "warning"
        ? "border-warning/30 bg-warning/10 text-warning"
        : "border-line bg-surface-sunken text-ink-muted";
  return (
    <div className={`mt-4 rounded-xl border px-4 py-3 text-sm ${cls}`}>
      {children}
    </div>
  );
}
