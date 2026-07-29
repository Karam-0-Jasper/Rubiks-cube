"use server";

import { redirect } from "next/navigation";
import type { Plan } from "@prisma/client";

import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { getStripe, appUrl } from "@/lib/stripe";
import { priceIdForPlan } from "@/lib/plans";

/// Creates a Stripe Checkout session for the chosen plan and redirects the
/// teacher to it. Reuses an existing Stripe customer where we have one.
export async function startCheckout(formData: FormData): Promise<void> {
  const user = await requireUser();
  const plan = String(formData.get("plan") ?? "") as Plan;

  const stripe = getStripe();
  const priceId = priceIdForPlan(plan);

  if (!stripe || !priceId) {
    // Not configured — send back to billing with a flag we can show.
    redirect("/billing?error=unconfigured");
  }

  let customerId = user.stripeCustomerId;
  if (!customerId) {
    const customer = await stripe.customers.create({
      metadata: { userId: user.id },
      name: user.fullName ?? user.username,
    });
    customerId = customer.id;
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customerId },
    });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${appUrl()}/billing?status=success`,
    cancel_url: `${appUrl()}/billing?status=cancelled`,
    metadata: { userId: user.id, plan },
    subscription_data: { metadata: { userId: user.id, plan } },
  });

  if (!session.url) redirect("/billing?error=unconfigured");
  redirect(session.url);
}

/// Opens the Stripe billing portal so teachers can manage or cancel.
export async function openBillingPortal(): Promise<void> {
  const user = await requireUser();
  const stripe = getStripe();

  if (!stripe || !user.stripeCustomerId) {
    redirect("/billing?error=unconfigured");
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${appUrl()}/billing`,
  });

  redirect(session.url);
}
