import "server-only";

import type { Payment, PaymentProvider, Plan } from "@prisma/client";

import { prisma } from "@/lib/db";
import { getGateway } from "@/lib/payments";
import { PLANS } from "@/lib/plans";

/// Extends a teacher's subscription after a mobile money payment clears. Mobile
/// money does not auto-renew, so we grant a fixed window from now. If the
/// teacher already has time left on a paid plan of the same length we add to it,
/// so paying early is never penalised.
export async function activatePaidPlan(
  userId: string,
  plan: Plan,
  provider: PaymentProvider,
): Promise<void> {
  const windowMs = PLANS[plan].windowDays * 86_400_000;
  const now = new Date();

  const existing = await prisma.subscription.findUnique({ where: { userId } });
  const base =
    existing && existing.plan === plan && existing.periodEnd > now
      ? existing.periodEnd
      : now;
  const periodEnd = new Date(base.getTime() + windowMs);

  await prisma.subscription.upsert({
    where: { userId },
    update: {
      plan,
      provider,
      status: "ACTIVE",
      periodStart: now,
      periodEnd,
    },
    create: {
      userId,
      plan,
      provider,
      status: "ACTIVE",
      periodStart: now,
      periodEnd,
    },
  });
}

/// Queries the provider for a pending payment's outcome and applies it exactly
/// once: on success the plan is activated; on failure the payment is marked.
/// Safe to call repeatedly (from polling and from the provider callback).
export async function finalizePayment(payment: Payment): Promise<Payment> {
  if (payment.status !== "PENDING") return payment;

  const gateway = getGateway(payment.provider);
  let status: Payment["status"];
  try {
    status = await gateway.checkStatus({
      reference: payment.reference,
      externalRef: payment.externalRef,
      amountMinor: payment.amountMinor,
      currency: payment.currency,
    });
  } catch {
    return payment; // Transient error — stay pending, try again later.
  }

  if (status === "PENDING") return payment;

  // Flip PENDING -> resolved atomically so concurrent callers don't double-grant.
  const claimed = await prisma.payment.updateMany({
    where: { id: payment.id, status: "PENDING" },
    data: { status, updatedAt: new Date() },
  });

  if (claimed.count === 1 && status === "SUCCESSFUL") {
    await activatePaidPlan(payment.userId, payment.plan, payment.provider);
  }

  return prisma.payment.findUniqueOrThrow({ where: { id: payment.id } });
}
