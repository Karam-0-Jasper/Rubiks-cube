import { requireUser, activePlan } from "@/lib/auth";
import { getQuota } from "@/lib/quota";
import { PLANS, PAID_PLANS, type PlanConfig } from "@/lib/plans";
import { configuredGateways } from "@/lib/payments";
import { PlanCheckout, type ProviderOption } from "@/components/PlanCheckout";

const ERRORS: Record<string, string> = {
  invalid: "That plan is not available.",
  unavailable: "That payment method is not set up yet.",
  phone: "Please enter a valid Liberian mobile money number.",
  provider: "We could not reach the payment provider. Please try again.",
};

export default async function BillingPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await requireUser();
  const [quota, sp] = await Promise.all([getQuota(user), searchParams]);
  const current = activePlan(user);

  const providers: ProviderOption[] = configuredGateways().map((g) => ({
    id: g.id,
    label: g.label,
    hint: g.hint,
  }));
  const defaultPhone = user.momoPhone ?? user.phone ?? "";

  return (
    <div className="animate-fade-up">
      <h1 className="text-2xl font-bold tracking-tight">Your plan</h1>
      <p className="mt-1 text-ink-muted">
        Every plan includes all lesson notes and plans. Paid plans add
        teacher-only test questions and more Nyvora messages. Pay with Orange
        Money or Lonestar Cell MoMo.
      </p>

      {sp.error && ERRORS[sp.error] && (
        <div className="mt-4 rounded-xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
          {ERRORS[sp.error]}
        </div>
      )}

      {providers.length === 0 && (
        <div className="mt-4 rounded-xl border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-warning">
          Mobile money is not configured in this environment yet. Add your
          Orange Money and/or Lonestar Cell (MTN MoMo) merchant credentials to
          enable upgrades.
        </div>
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
              {current === "FREE" ? "Resets" : "Plan runs until"}{" "}
              {quota.windowEnd.toLocaleDateString()}
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
        {current !== "FREE" && (
          <p className="mt-3 text-xs text-ink-faint">
            Mobile money plans do not renew automatically. Pay again any time to
            extend — paying before your plan ends adds to your remaining days.
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PlanTile
          plan={PLANS.FREE}
          current={current === "FREE"}
          providers={providers}
          defaultPhone={defaultPhone}
        />
        {PAID_PLANS.map((p) => (
          <PlanTile
            key={p.id}
            plan={p}
            current={current === p.id}
            providers={providers}
            defaultPhone={defaultPhone}
          />
        ))}
      </div>
    </div>
  );
}

function PlanTile({
  plan,
  current,
  providers,
  defaultPhone,
}: {
  plan: PlanConfig;
  current: boolean;
  providers: ProviderOption[];
  defaultPhone: string;
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
        ) : (
          <PlanCheckout
            planId={plan.id}
            planName={plan.name}
            providers={providers}
            defaultPhone={defaultPhone}
          />
        )}
      </div>
    </div>
  );
}
