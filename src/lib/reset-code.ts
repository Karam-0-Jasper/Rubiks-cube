import { createHash, randomInt, timingSafeEqual } from "node:crypto";

/// A 6-digit numeric reset code. Kept short-lived and single-use; only its
/// hash is stored.
export function generateResetCode(): string {
  return String(randomInt(0, 1_000_000)).padStart(6, "0");
}

export function hashResetCode(code: string): string {
  return createHash("sha256").update(code.trim()).digest("hex");
}

export function resetCodeMatches(input: string, storedHash: string): boolean {
  const a = Buffer.from(hashResetCode(input), "hex");
  const b = Buffer.from(storedHash, "hex");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export const RESET_CODE_TTL_MINUTES = 15;
export const RESET_CODE_MAX_ATTEMPTS = 5;
