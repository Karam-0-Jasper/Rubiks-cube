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
  const usedPct = Math.min(100, (quota.used / Math.max(1, quota.limit)) * 100);

  return (
    <div className="max-w-5xl">
      <h1 className="font-serif text-3xl font-semibold">Your plan</h1>
      <p className="mt-2 max-w-[65ch] text-ink-muted">
        All lesson notes are free on every plan. Paid plans add the
        teacher-only test questions and more Nyvora messages. Pay with Orange
        Money or Lonestar Cell MoMo.
      </p>

      {sp.error && ERRORS[sp.error] && (
        <p className="notice notice-danger mt-5" role="alert">
          {ERRORS[sp.error]}
        </p>
      )}

      {providers.length === 0 && (
        <p className="notice notice-warning mt-5">
          Mobile money is not set up on this site yet, so upgrades are
          unavailable for now.
        </p>
      )}

      <section className="mt-8 border-y border-line py-5" aria-labelledby="current-plan">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="eyebrow">Current plan</p>
            <p id="current-plan" className="mt-1 font-serif text-2xl font-semibold">
              {PLANS[current].name}
            </p>
          </div>
          <div className="text-sm sm:text-right">
            <p>
              <span className="font-semibold">{quota.used}</span> of {quota.limit}{" "}
              Nyvora messages used
            </p>
            <p className="text-ink-muted">
              {current === "FREE" ? "Resets on" : "Plan runs until"}{" "}
              {quota.windowEnd.toLocaleDateString()}
            </p>
          </div>
        </div>
        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-sunken"
          role="progressbar"
          aria-label="Nyvora messages used"
          aria-valuenow={quota.used}
          aria-valuemin={0}
          aria-valuemax={quota.limit}
        >
          <div className="h-full bg-brand" style={{ width: `${usedPct}%` }} />
        </div>
        {current !== "FREE" && (
          <p className="mt-3 text-sm text-ink-muted">
            Mobile money plans do not renew by themselves. Paying again before
            your plan ends adds the new days to the ones you have left.
          </p>
        )}
      </section>

      <h2 className="mt-10 font-serif text-2xl font-semibold">Plans</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      className={`flex flex-col rounded-lg border bg-surface-raised p-5 ${
        current ? "border-brand" : "border-line"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold">{plan.name}</h3>
        {current && (
          <span className="text-xs font-semibold uppercase tracking-wide text-brand">
            Your plan
          </span>
        )}
      </div>
      <p className="mt-2">
        <span className="font-serif text-3xl font-semibold">{plan.priceLabel}</span>{" "}
        <span className="text-sm text-ink-muted">{plan.cadence}</span>
      </p>
      <p className="mt-2 text-sm text-ink-muted">{plan.blurb}</p>
      <ul className="mt-4 flex-1 list-disc space-y-1.5 pl-4 text-sm marker:text-ink-faint">
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="mt-5">
        {isFree ? (
          <p className="text-center text-sm text-ink-muted">Free, always</p>
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
