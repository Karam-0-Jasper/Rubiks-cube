import { NextResponse } from "next/server";
import type Stripe from "stripe";
import type { Plan, SubscriptionStatus } from "@prisma/client";

import { prisma } from "@/lib/db";
import { getStripe } from "@/lib/stripe";
import { planFromPriceId, PLANS } from "@/lib/plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function mapStatus(status: Stripe.Subscription.Status): SubscriptionStatus {
  switch (status) {
    case "active":
    case "trialing":
      return "ACTIVE";
    case "past_due":
    case "unpaid":
      return "PAST_DUE";
    case "canceled":
    case "incomplete_expired":
      return "CANCELED";
    default:
      return "INCOMPLETE";
  }
}

/// Reconciles our Subscription row with a Stripe subscription object. Resolves
/// the plan from the price id, and sets the quota window to the Stripe billing
/// period so getQuota counts against the right window.
async function syncSubscription(sub: Stripe.Subscription): Promise<void> {
  const userId =
    (sub.metadata?.userId as string | undefined) ??
    (await resolveUserIdFromCustomer(sub.customer));
  if (!userId) {
    console.error("Stripe webhook: no userId for subscription", sub.id);
    return;
  }

  const priceId = sub.items.data[0]?.price.id ?? null;
  const plan: Plan = (priceId && planFromPriceId(priceId)) || "FREE";
  const status = mapStatus(sub.status);

  const periodStart = new Date(sub.current_period_start * 1000);
  const periodEnd = new Date(sub.current_period_end * 1000);

  await prisma.subscription.upsert({
    where: { userId },
    update: {
      plan,
      status,
      stripeSubscriptionId: sub.id,
      stripePriceId: priceId,
      periodStart,
      periodEnd,
      cancelAtPeriodEnd: sub.cancel_at_period_end,
    },
    create: {
      userId,
      plan,
      status,
      stripeSubscriptionId: sub.id,
      stripePriceId: priceId,
      periodStart,
      periodEnd,
      cancelAtPeriodEnd: sub.cancel_at_period_end,
    },
  });
}

async function resolveUserIdFromCustomer(
  customer: string | Stripe.Customer | Stripe.DeletedCustomer,
): Promise<string | null> {
  const customerId = typeof customer === "string" ? customer : customer.id;
  const user = await prisma.user.findUnique({
    where: { stripeCustomerId: customerId },
    select: { id: true },
  });
  return user?.id ?? null;
}

/// When a subscription ends entirely, drop the user back to a FREE window so
/// their Nyvora allowance resets to the free tier immediately.
async function revertToFree(sub: Stripe.Subscription): Promise<void> {
  const userId =
    (sub.metadata?.userId as string | undefined) ??
    (await resolveUserIdFromCustomer(sub.customer));
  if (!userId) return;

  const now = new Date();
  await prisma.subscription.updateMany({
    where: { userId },
    data: {
      plan: "FREE",
      status: "CANCELED",
      periodStart: now,
      periodEnd: new Date(now.getTime() + PLANS.FREE.windowDays * 86_400_000),
      cancelAtPeriodEnd: false,
    },
  });
}

export async function POST(req: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !secret) {
    return NextResponse.json(
      { error: "Stripe webhook not configured" },
      { status: 503 },
    );
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const payload = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.subscription) {
          const sub = await stripe.subscriptions.retrieve(
            session.subscription as string,
          );
          await syncSubscription(sub);
        }
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        await syncSubscription(event.data.object as Stripe.Subscription);
        break;
      }
      case "customer.subscription.deleted": {
        await revertToFree(event.data.object as Stripe.Subscription);
        break;
      }
      default:
        break;
    }
  } catch (err) {
    console.error("Stripe webhook handler error", event.type, err);
    return NextResponse.json({ error: "Handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
