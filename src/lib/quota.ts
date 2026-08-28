import "server-only";

import type { Plan } from "@prisma/client";

import { prisma } from "@/lib/db";
import { PLANS } from "@/lib/plans";
import { DEMO_USER_ID, ensureSubscription, type SessionUser } from "@/lib/auth";

export type QuotaState = {
  plan: Plan;
  used: number;
  limit: number;
  remaining: number;
  windowStart: Date;
  windowEnd: Date;
};

/// Reports Nyvora usage against the current quota window, healing lapsed state
/// as it goes. A paid plan that has run out (mobile money does not auto-renew)
/// drops back to a fresh FREE window; a FREE window that has ended rolls
/// forward. This is the single place that reconciles the subscription with the
/// clock, so it stays correct even if a provider callback never arrives.
export async function getQuota(user: SessionUser): Promise<QuotaState> {
  // The built-in demo teacher has no database row; report a full free window
  // without touching the database so notes render even when login is disabled.
  if (user.id === DEMO_USER_ID) {
    const now = new Date();
    const config = PLANS.FREE;
    return {
      plan: "FREE",
      used: 0,
      limit: config.messageAllowance,
      remaining: config.messageAllowance,
      windowStart: now,
      windowEnd: new Date(now.getTime() + config.windowDays * 86_400_000),
    };
  }

  const subscription =
    user.subscription ?? (await ensureSubscription(user.id));
  const now = new Date();

  let plan: Plan = subscription.plan;
  let periodStart = subscription.periodStart;
  let periodEnd = subscription.periodEnd;

  // A lapsed paid plan reverts to a fresh free window.
  if (plan !== "FREE" && periodEnd <= now) {
    plan = "FREE";
    periodStart = now;
    periodEnd = new Date(now.getTime() + PLANS.FREE.windowDays * 86_400_000);
    await prisma.subscription.update({
      where: { id: subscription.id },
      data: {
        plan: "FREE",
        provider: null,
        status: "ACTIVE",
        periodStart,
        periodEnd,
      },
    });
  }

  const config = PLANS[plan];
  const windowMs = config.windowDays * 86_400_000;

  // A lapsed free window rolls forward to the current one.
  if (periodEnd <= now) {
    const elapsed = now.getTime() - periodStart.getTime();
    const windowsPassed = Math.max(1, Math.floor(elapsed / windowMs));
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
