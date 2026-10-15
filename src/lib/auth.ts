import "server-only";

import { cookies, headers } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { cache } from "react";
import type { Plan, Subscription, User } from "@prisma/client";

import { prisma } from "@/lib/db";
import { PLANS } from "@/lib/plans";

const COOKIE_NAME = "nuvex_session";
const SESSION_DAYS = 30;

/// Temporary open access. While guest mode is on, a visitor without a session
/// is served the shared "guest" account instead of being redirected to /login,
/// so the app can be browsed and demoed without signing up. Registration and
/// login still work and still take precedence for anyone who signs in.
/// Set GUEST_MODE=off in the environment to require login again.
export const GUEST_MODE = process.env.GUEST_MODE !== "off";

const GUEST_USERNAME = "guest";

/// Not a valid scrypt hash, so verifyPassword can never match it and the
/// shared account cannot be signed into.
const GUEST_UNUSABLE_HASH = "guest-account-no-login";

export function isGuest(user: SessionUser): boolean {
  return user.username === GUEST_USERNAME;
}

/// Upserted rather than created so concurrent first requests cannot race.
async function getGuestUser(): Promise<SessionUser> {
  const user = await prisma.user.upsert({
    where: { username: GUEST_USERNAME },
    update: {},
    create: {
      username: GUEST_USERNAME,
      fullName: "Guest",
      passwordHash: GUEST_UNUSABLE_HASH,
    },
    include: { subscription: true },
  });

  if (user.subscription) return user;
  return { ...user, subscription: await ensureSubscription(user.id) };
}

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

/// The genuinely signed-in user, or null — guest mode is ignored here. Use
/// this where the difference matters, so that the landing page and the login
/// pages stay reachable while guest mode is on.
/// Deduped per request so layouts and pages share one lookup.
export const getRealUser = cache(async (): Promise<SessionUser | null> => {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;

  let sid: string;
  try {
    const { payload } = await jwtVerify(token, secret());
    sid = payload.sid as string;
  } catch {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: { id: sid },
    include: { user: { include: { subscription: true } } },
  });

  if (!session || session.expiresAt < new Date()) return null;
  return session.user;
});

/// The user the app pages should run as: the signed-in user if there is one,
/// otherwise the shared guest account while guest mode is on.
export const getCurrentUser = cache(async (): Promise<SessionUser | null> => {
  const user = await getRealUser();
  if (user) return user;
  return GUEST_MODE ? getGuestUser() : null;
});

export async function requireUser(): Promise<SessionUser> {
  const user = await getCurrentUser();
  if (!user) throw new Error("UNAUTHENTICATED");
  return user;
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
