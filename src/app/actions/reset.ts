"use server";

import { timingSafeEqual } from "node:crypto";

import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/password";
import { looksLikePhone, normalizePhone, normalizeUsername } from "@/lib/auth";

export type ResetState = { error?: string; ok?: boolean } | undefined;

function keyMatches(input: string, expected: string): boolean {
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/// Admin-only password reset. Guarded by the ADMIN_RESET_KEY environment
/// secret — only the site owner (who set that key) can use it, unlike normal
/// users. It resets the password of any account by username or phone, without
/// needing direct database access.
export async function resetPasswordAction(
  _prev: ResetState,
  formData: FormData,
): Promise<ResetState> {
  const adminKey = String(formData.get("adminKey") ?? "");
  const identifier = String(formData.get("identifier") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  // Bracket access reads the value at runtime; a "Sensitive" env var on Vercel
  // is hidden at build time and would otherwise be inlined as undefined.
  const expectedKey = process.env["ADMIN_RESET_KEY"];
  if (!expectedKey) {
    return {
      error:
        "Password reset is not enabled. Set the ADMIN_RESET_KEY environment variable first.",
    };
  }
  if (!adminKey || !keyMatches(adminKey, expectedKey)) {
    return { error: "Incorrect admin key." };
  }

  if (!identifier) return { error: "Enter the account's username or phone." };
  if (password.length < 8) {
    return { error: "New password must be at least 8 characters." };
  }
  if (password !== confirm) return { error: "The two passwords do not match." };

  const user = looksLikePhone(identifier)
    ? await prisma.user.findFirst({
        where: { phone: normalizePhone(identifier) ?? " " },
        select: { id: true },
      })
    : await prisma.user.findUnique({
        where: { username: normalizeUsername(identifier) },
        select: { id: true },
      });

  if (!user) {
    return { error: "No account was found for that username or phone." };
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { passwordHash: await hashPassword(password) },
  });

  return { ok: true };
}
