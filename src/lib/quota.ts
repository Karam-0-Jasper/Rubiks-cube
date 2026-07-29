import "server-only";

import { prisma } from "@/lib/db";
import { PLANS } from "@/lib/plans";
import { activePlan, ensureSubscription, type SessionUser } from "@/lib/auth";

export type QuotaState = {
  plan: keyof typeof PLANS;
  used: number;
  limit: number;
  remaining: number;
  windowStart: Date;
  windowEnd: Date;
};

/// Rolls a lapsed window forward before reporting. Free windows roll locally;
/// paid windows are normally advanced by the Stripe webhook, but rolling here
/// too keeps the counter honest if a webhook is late.
export async function getQuota(user: SessionUser): Promise<QuotaState> {
  const subscription =
    user.subscription ?? (await ensureSubscription(user.id));
  const plan = activePlan({ ...user, subscription });
  const config = PLANS[plan];
  const windowMs = config.windowDays * 86_400_000;

  let { periodStart, periodEnd } = subscription;
  const now = new Date();

  if (periodEnd <= now) {
    const elapsed = now.getTime() - periodStart.getTime();
    const windowsPassed = Math.floor(elapsed / windowMs);
    periodStart = new Date(periodStart.getTime() + windowsPassed * windowMs);
    periodEnd = new Date(periodStart.getTime() + windowMs);

    await prisma.subscription.update({
      where: { id: subscription.id },
      data: { periodStart, periodEnd },
    });
  }

  const used = await prisma.nyvoraUsage.count({
    where: { userId: user.id, createdAt: { gte: periodStart } },
  });

  return {
    plan,
    used,
    limit: config.messageAllowance,
    remaining: Math.max(0, config.messageAllowance - used),
    windowStart: periodStart,
    windowEnd: periodEnd,
  };
}

export async function recordUsage(
  userId: string,
  conversationId: string | null,
  inputTokens: number,
  outputTokens: number,
): Promise<void> {
  await prisma.nyvoraUsage.create({
    data: { userId, conversationId, inputTokens, outputTokens },
  });
}
