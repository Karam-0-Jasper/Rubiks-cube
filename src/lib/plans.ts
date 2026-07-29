import type { Plan } from "@prisma/client";

export type PlanConfig = {
  id: Plan;
  name: string;
  /// Nyvora messages allowed per quota window.
  messageAllowance: number;
  /// Length of the quota window in days.
  windowDays: number;
  priceLabel: string;
  cadence: string;
  blurb: string;
  features: string[];
  /// Stripe price id, read from env so the same code works across environments.
  stripePriceEnvKey?: string;
};

export const PLANS: Record<Plan, PlanConfig> = {
  FREE: {
    id: "FREE",
    name: "Free",
    messageAllowance: 15,
    windowDays: 7,
    priceLabel: "$0",
    cadence: "forever",
    blurb: "Everything a teacher needs to try Nuvex for a term.",
    features: [
      "All lesson notes and plans",
      "10 practice questions per topic",
      "15 Nyvora messages per week",
    ],
  },
  WEEKLY: {
    id: "WEEKLY",
    name: "Weekly",
    messageAllowance: 80,
    windowDays: 7,
    priceLabel: "$2",
    cadence: "per week",
    blurb: "For the week you are behind on prep.",
    features: [
      "Everything in Free",
      "Teacher-only test questions",
      "80 Nyvora messages per week",
    ],
    stripePriceEnvKey: "STRIPE_PRICE_WEEKLY",
  },
  MONTHLY: {
    id: "MONTHLY",
    name: "Monthly",
    messageAllowance: 350,
    windowDays: 30,
    priceLabel: "$6",
    cadence: "per month",
    blurb: "The plan most teachers settle on.",
    features: [
      "Everything in Weekly",
      "350 Nyvora messages per month",
      "Priority lesson-note updates",
    ],
    stripePriceEnvKey: "STRIPE_PRICE_MONTHLY",
  },
  YEARLY: {
    id: "YEARLY",
    name: "Yearly",
    messageAllowance: 4200,
    windowDays: 365,
    priceLabel: "$50",
    cadence: "per year",
    blurb: "A full academic year, planned.",
    features: [
      "Everything in Monthly",
      "4,200 Nyvora messages per year",
      "Two months free versus monthly",
    ],
    stripePriceEnvKey: "STRIPE_PRICE_YEARLY",
  },
};

export const PAID_PLANS: PlanConfig[] = [
  PLANS.WEEKLY,
  PLANS.MONTHLY,
  PLANS.YEARLY,
];

export function planFromPriceId(priceId: string): Plan | null {
  for (const plan of PAID_PLANS) {
    if (!plan.stripePriceEnvKey) continue;
    if (process.env[plan.stripePriceEnvKey] === priceId) return plan.id;
  }
  return null;
}

export function priceIdForPlan(plan: Plan): string | null {
  const key = PLANS[plan].stripePriceEnvKey;
  if (!key) return null;
  return process.env[key] ?? null;
}
