"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/db";
import { requireUser } from "@/lib/auth";
import { subjectCodeMatches } from "@/lib/subject-code";

export type UnlockState = { error?: string; ok?: boolean } | undefined;

/// Verifies a teacher's subject code and, on success, records a SubjectUnlock
/// so the five test questions become visible for that user and subject.
export async function unlockSubjectAction(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const user = await requireUser();
  const subjectSlug = String(formData.get("subjectSlug") ?? "");
  const topicSlug = String(formData.get("topicSlug") ?? "");
  const code = String(formData.get("code") ?? "");

  if (!code.trim()) return { error: "Enter the subject code" };

  const subject = await prisma.subject.findUnique({
    where: { slug: subjectSlug },
    select: { id: true, teacherCodeHash: true },
  });
  if (!subject) return { error: "Subject not found" };

  if (!subjectCodeMatches(code, subject.teacherCodeHash)) {
    return { error: "That code is not correct. Check with your department." };
  }

  await prisma.subjectUnlock.upsert({
    where: { userId_subjectId: { userId: user.id, subjectId: subject.id } },
    update: {},
    create: { userId: user.id, subjectId: subject.id },
  });

  revalidatePath(`/subjects/${subjectSlug}/${topicSlug}`);
  return { ok: true };
}
