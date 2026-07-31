"use server";

import { prisma } from "@/lib/db";
import { normalizeEmail } from "@/lib/auth";
import { hashPassword } from "@/lib/password";
import { emailConfigured, sendEmail } from "@/lib/email";
import {
  RESET_CODE_MAX_ATTEMPTS,
  RESET_CODE_TTL_MINUTES,
  generateResetCode,
  hashResetCode,
  resetCodeMatches,
} from "@/lib/reset-code";

export type ForgotState =
  | { step: "request"; error?: string }
  | { step: "code"; email: string; error?: string; notice?: string }
  | { step: "done" }
  | undefined;

/// Step 1: the user enters their email. If it belongs to an account we email a
/// 6-digit code. We always advance to the code step and show the same message
/// whether or not the email exists, so the form cannot be used to discover
/// which emails are registered.
export async function requestResetCodeAction(
  _prev: ForgotState,
  formData: FormData,
): Promise<ForgotState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));

  if (!email || !email.includes("@")) {
    return { step: "request", error: "Enter a valid email address." };
  }
  if (!emailConfigured()) {
    return {
      step: "request",
      error:
        "Email is not set up on the server yet. Ask the site owner to configure it.",
    };
  }

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (user) {
    const code = generateResetCode();
    const expiresAt = new Date(Date.now() + RESET_CODE_TTL_MINUTES * 60_000);

    // Replace any previous codes for this user with a single fresh one.
    await prisma.passwordResetToken.deleteMany({ where: { userId: user.id } });
    await prisma.passwordResetToken.create({
      data: { userId: user.id, codeHash: hashResetCode(code), expiresAt },
    });

    const sent = await sendEmail({
      to: email,
      subject: "Your Nuvex password reset code",
      text: `Your Nuvex password reset code is ${code}. It expires in ${RESET_CODE_TTL_MINUTES} minutes. If you did not request this, you can ignore this email.`,
      html: `<p>Your Nuvex password reset code is:</p><p style="font-size:24px;font-weight:bold;letter-spacing:3px">${code}</p><p>It expires in ${RESET_CODE_TTL_MINUTES} minutes. If you did not request this, you can ignore this email.</p>`,
    });

    if (!sent.ok) {
      return {
        step: "request",
        error: "We could not send the email right now. Please try again shortly.",
      };
    }
  }

  return {
    step: "code",
    email,
    notice: "If that email is registered, we've sent a 6-digit code. Enter it below.",
  };
}

/// Step 2: the user enters the code plus a new password.
export async function resetWithCodeAction(
  _prev: ForgotState,
  formData: FormData,
): Promise<ForgotState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const code = String(formData.get("code") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  const back = (error: string): ForgotState => ({ step: "code", email, error });

  if (!code) return back("Enter the code from your email.");
  if (password.length < 8) return back("New password must be at least 8 characters.");
  if (password !== confirm) return back("The two passwords do not match.");

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });
  const token = user
    ? await prisma.passwordResetToken.findFirst({
        where: { userId: user.id, usedAt: null },
        orderBy: { createdAt: "desc" },
      })
    : null;

  const invalid = "That code is incorrect or has expired. Request a new one.";
  if (!user || !token) return back(invalid);

  if (token.expiresAt.getTime() < Date.now()) {
    await prisma.passwordResetToken.delete({ where: { id: token.id } });
    return back(invalid);
  }
  if (token.attempts >= RESET_CODE_MAX_ATTEMPTS) {
    await prisma.passwordResetToken.delete({ where: { id: token.id } });
    return back("Too many attempts. Request a new code.");
  }

  if (!resetCodeMatches(code, token.codeHash)) {
    await prisma.passwordResetToken.update({
      where: { id: token.id },
      data: { attempts: { increment: 1 } },
    });
    return back(invalid);
  }

  // Success: set the new password and consume the code.
  await prisma.$transaction([
    prisma.user.update({
      where: { id: user.id },
      data: { passwordHash: await hashPassword(password) },
    }),
    prisma.passwordResetToken.deleteMany({ where: { userId: user.id } }),
  ]);

  return { step: "done" };
}
