"use server";

import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";
import type { PaymentProvider, Plan } from "@prisma/client";

import { prisma } from "@/lib/db";
import { requireUser, normalizePhone } from "@/lib/auth";
import { getGateway, configuredGateways, appUrl } from "@/lib/payments";
import { PLANS, amountMinor, PAYMENT_CURRENCY, isPaidPlan } from "@/lib/plans";

/// Starts a mobile money payment for the chosen plan. Creates a PENDING
/// Payment, asks the provider to collect, and routes the teacher either to the
/// provider's hosted page (Orange) or to our pending page to await the phone
/// prompt (Lonestar).
export async function startPayment(formData: FormData): Promise<void> {
  const user = await requireUser();

  const plan = String(formData.get("plan") ?? "") as Plan;
  const provider = String(formData.get("provider") ?? "") as PaymentProvider;
  const rawPhone = String(formData.get("phone") ?? "");

  if (!PLANS[plan] || !isPaidPlan(plan)) {
    redirect("/billing?error=invalid");
  }

  const gateway = configuredGateways().find((g) => g.id === provider);
  if (!gateway) {
    redirect("/billing?error=unavailable");
  }

  const msisdn = normalizePhone(rawPhone);
  if (!msisdn) {
    redirect("/billing?error=phone");
  }

  // Remember the number for next time.
  await prisma.user.update({
    where: { id: user.id },
    data: { momoPhone: msisdn },
  });

  const reference = `NUVEX-${randomUUID()}`;
  const payment = await prisma.payment.create({
    data: {
      userId: user.id,
      plan,
      provider,
      status: "PENDING",
      amountMinor: amountMinor(plan),
      currency: PAYMENT_CURRENCY,
      msisdn,
      reference,
    },
  });

  const returnUrl = `${appUrl()}/billing/confirm?p=${payment.id}`;
  const callbackUrl = `${appUrl()}/api/payments/callback/${provider.toLowerCase()}`;

  let result;
  try {
    result = await getGateway(provider).initiate({
      reference,
      amountMinor: payment.amountMinor,
      currency: payment.currency,
      msisdn,
      planName: PLANS[plan].name,
      returnUrl,
      callbackUrl,
    });
  } catch (e) {
    console.error("Payment initiation failed", e);
    await prisma.payment.update({
      where: { id: payment.id },
      data: { status: "FAILED", failureReason: "Could not reach the provider" },
    });
    redirect("/billing?error=provider");
  }

  if (result.externalRef) {
    await prisma.payment.update({
      where: { id: payment.id },
      data: { externalRef: result.externalRef },
    });
  }

  if (result.kind === "redirect") {
    redirect(result.url);
  }

  // Push flow: go wait for the phone prompt to be approved.
  redirect(`/billing/confirm?p=${payment.id}`);
}
