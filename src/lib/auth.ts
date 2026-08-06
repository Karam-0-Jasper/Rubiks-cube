import "server-only";

import { cookies, headers } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { cache } from "react";
import type { Plan, Subscription, User } from "@prisma/client";

import { prisma } from "@/lib/db";
import { PLANS } from "@/lib/plans";

const COOKIE_NAME = "nuvex_session";
const SESSION_DAYS = 30;

function secret(): Uint8Array {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) {
    throw new Error(
      "AUTH_SECRET must be set to a random string of at least 32 characters.",
    );
  }
  return new TextEncoder().encode(value);
}

export type SessionUser = User & { subscription: Subscription | null };

/// Login is disabled for now: the app runs as a single built-in demo teacher.
/// `getCurrentUser` falls back to this user whenever there is no real session,
/// so every page renders as "Jasper" without a login screen. Its quota window
/// is far in the future so `getQuota` never has to touch the database for it.
export const DEMO_USER_ID = "demo-jasper";

const DEMO_EPOCH = new Date("2026-01-01T00:00:00.000Z");

export const DEMO_USER: SessionUser = {
  id: DEMO_USER_ID,
  username: "jasper",
  phone: null,
  email: null,
  passwordHash: "",
  fullName: "Jasper",
  school: null,
  theme: "SYSTEM",
  createdAt: DEMO_EPOCH,
  updatedAt: DEMO_EPOCH,
  momoPhone: null,
  subscription: {
    id: "demo-subscription",
    userId: DEMO_USER_ID,
    plan: "FREE",
    status: "ACTIVE",
    provider: null,
    periodStart: DEMO_EPOCH,
    periodEnd: new Date("2100-01-01T00:00:00.000Z"),
    createdAt: DEMO_EPOCH,
    updatedAt: DEMO_EPOCH,
  },
};

export async function createSession(userId: string): Promise<void> {
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86_400_000);
  const userAgent = (await headers()).get("user-agent")?.slice(0, 255) ?? null;

  const session = await prisma.session.create({
    data: { userId, expiresAt, userAgent },
  });

  const token = await new SignJWT({ sid: session.id, uid: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresAt)
    .sign(secret());

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, secret());
      await prisma.session.deleteMany({ where: { id: payload.sid as string } });
    } catch {
      // Token already invalid — clearing the cookie is enough.
    }
  }

  store.delete(COOKIE_NAME);
}

/// Deduped per request so layouts and pages share one lookup. Login is disabled
/// for now, so this never returns null: a real session is honored if present,
/// otherwise the built-in demo teacher (DEMO_USER) is returned.
export const getCurrentUser = cache(async (): Promise<SessionUser> => {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return DEMO_USER;

  let sid: string;
  try {
    const { payload } = await jwtVerify(token, secret());
    sid = payload.sid as string;
  } catch {
    return DEMO_USER;
  }

  const session = await prisma.session.findUnique({
    where: { id: sid },
    include: { user: { include: { subscription: true } } },
  });

  if (!session || session.expiresAt < new Date()) return DEMO_USER;
  return session.user;
});

export async function requireUser(): Promise<SessionUser> {
  return getCurrentUser();
}

export function activePlan(user: SessionUser): Plan {
  const sub = user.subscription;
  if (!sub) return "FREE";
  if (sub.status !== "ACTIVE") return "FREE";
  if (sub.periodEnd < new Date()) return "FREE";
  return sub.plan;
}

/// Every user gets a Subscription row so quota windows have a home even on Free.
export async function ensureSubscription(userId: string): Promise<Subscription> {
  const existing = await prisma.subscription.findUnique({ where: { userId } });
  if (existing) return existing;

  const now = new Date();
  return prisma.subscription.create({
    data: {
      userId,
      plan: "FREE",
      status: "ACTIVE",
      periodStart: now,
      periodEnd: new Date(now.getTime() + PLANS.FREE.windowDays * 86_400_000),
    },
  });
}

/// Usernames are case-insensitive and stored lowercase.
export function normalizeUsername(input: string): string {
  return input.trim().toLowerCase();
}

/// Emails are case-insensitive and stored lowercase.
export function normalizeEmail(input: string): string {
  return input.trim().toLowerCase();
}

/// Liberian numbers are entered locally ("0770123456") or with the country
/// code. Both normalize to +231XXXXXXXX so login works either way.
export function normalizePhone(input: string): string | null {
  const digits = input.replace(/[^\d+]/g, "");
  if (!digits) return null;

  let rest: string;
  if (digits.startsWith("+231")) rest = digits.slice(4);
  else if (digits.startsWith("231")) rest = digits.slice(3);
  else if (digits.startsWith("0")) rest = digits.slice(1);
  else rest = digits;

  if (!/^\d{7,10}$/.test(rest)) return null;
  return `+231${rest}`;
}

export function looksLikePhone(identifier: string): boolean {
  return /^[\d+][\d\s()+-]*$/.test(identifier.trim());
}
