import { createHash, timingSafeEqual } from "node:crypto";

/// Mirrors prisma/seed.ts. Subject codes are low-entropy strings chosen by us,
/// so a fast hash is acceptable — it exists to keep plaintext out of the
/// database, not to resist an offline attack on user secrets.
export function hashSubjectCode(code: string): string {
  return createHash("sha256").update(code.trim().toUpperCase()).digest("hex");
}

export function subjectCodeMatches(input: string, storedHash: string): boolean {
  const candidate = Buffer.from(hashSubjectCode(input), "hex");
  const expected = Buffer.from(storedHash, "hex");
  if (candidate.length !== expected.length) return false;
  return timingSafeEqual(candidate, expected);
}
