import type { Plan } from "@prisma/client";

export type PlanConfig = {
  id: Plan;
  name: string;
  /// Nyvora messages allowed per quota window.
  messageAllowance: number;
  /// Length of the quota window in days.
  windowDays: number;
  /// Price in major currency units (e.g. 6 means 6.00). Charged through mobile
  /// money on purchase. Zero for the free plan.
  amount: number;
  priceLabel: string;
  cadence: string;
  blurb: string;
  features: string[];
};

/// Currency charged for paid plans. Liberian mobile money supports USD and LRD
/// wallets; set to match the currency your merchant account settles in. If you
/// switch to LRD, update each plan's `amount` accordingly.
export const PAYMENT_CURRENCY = process.env.PAYMENT_CURRENCY || "USD";

export const PLANS: Record<Plan, PlanConfig> = {
  FREE: {
    id: "FREE",
    name: "Free",
    messageAllowance: 15,
    windowDays: 7,
    amount: 0,
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
    amount: 2,
    priceLabel: "$2",
    cadence: "per week",
    blurb: "For the week you are behind on prep.",
    features: [
      "Everything in Free",
      "Teacher-only test questions",
      "80 Nyvora messages per week",
    ],
  },
  MONTHLY: {
    id: "MONTHLY",
    name: "Monthly",
    messageAllowance: 350,
    windowDays: 30,
    amount: 6,
    priceLabel: "$6",
    cadence: "per month",
    blurb: "The plan most teachers settle on.",
    features: [
      "Everything in Weekly",
      "350 Nyvora messages per month",
      "Priority lesson-note updates",
    ],
  },
  YEARLY: {
    id: "YEARLY",
    name: "Yearly",
    messageAllowance: 4200,
    windowDays: 365,
    amount: 50,
    priceLabel: "$50",
    cadence: "per year",
    blurb: "A full academic year, planned.",
    features: [
      "Everything in Monthly",
      "4,200 Nyvora messages per year",
      "Two months free versus monthly",
    ],
  },
};

export const PAID_PLANS: PlanConfig[] = [
  PLANS.WEEKLY,
  PLANS.MONTHLY,
  PLANS.YEARLY,
];

/// Minor units (e.g. cents) for the provider APIs, assuming a 2-decimal
/// currency. Both USD and LRD use two decimal places.
export function amountMinor(plan: Plan): number {
  return Math.round(PLANS[plan].amount * 100);
}

export function isPaidPlan(plan: Plan): boolean {
  return plan !== "FREE";
}
