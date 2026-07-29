import "server-only";

import { prisma } from "@/lib/db";

/// Reads the seeded curriculum from the database. Test questions and their
/// answer keys are deliberately never selected here — those go through the
/// gated route in src/app/api/unlock.

export async function listSubjects() {
  return prisma.subject.findMany({
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      slug: true,
      name: true,
      shortName: true,
      description: true,
      accent: true,
      periods: {
        orderBy: [{ grade: "asc" }, { number: "asc" }],
        select: {
          id: true,
          grade: true,
          number: true,
          title: true,
          _count: { select: { topics: true } },
        },
      },
    },
  });
}

export async function getSubjectWithPeriod(subjectSlug: string) {
  return prisma.subject.findUnique({
    where: { slug: subjectSlug },
    select: {
      id: true,
      slug: true,
      name: true,
      description: true,
      accent: true,
      periods: {
        orderBy: [{ grade: "asc" }, { number: "asc" }],
        select: {
          id: true,
          grade: true,
          number: true,
          title: true,
          summary: true,
          topics: {
            orderBy: { sortOrder: "asc" },
            select: {
              id: true,
              slug: true,
              title: true,
              objective: true,
              estimatedMinutes: true,
              _count: { select: { quizQuestions: true, testQuestions: true } },
            },
          },
        },
      },
    },
  });
}

export async function getTopic(subjectSlug: string, topicSlug: string) {
  return prisma.topic.findFirst({
    where: {
      slug: topicSlug,
      period: { subject: { slug: subjectSlug } },
    },
    select: {
      id: true,
      slug: true,
      title: true,
      objective: true,
      notes: true,
      workedExample: true,
      teachingTip: true,
      estimatedMinutes: true,
      period: {
        select: {
          grade: true,
          number: true,
          title: true,
          subject: { select: { slug: true, name: true, accent: true } },
        },
      },
      quizQuestions: {
        orderBy: { sortOrder: "asc" },
        select: {
          id: true,
          prompt: true,
          options: true,
          correctIndex: true,
          explanation: true,
        },
      },
      _count: { select: { testQuestions: true } },
    },
  });
}

/// Only ever called after an unlock check. Includes the answer key.
export async function getTestQuestions(topicId: string) {
  return prisma.testQuestion.findMany({
    where: { topicId },
    orderBy: { sortOrder: "asc" },
    select: {
      id: true,
      type: true,
      prompt: true,
      options: true,
      correctIndex: true,
      answerKey: true,
      marks: true,
    },
  });
}

export async function userHasUnlocked(
  userId: string,
  subjectId: string,
): Promise<boolean> {
  const unlock = await prisma.subjectUnlock.findUnique({
    where: { userId_subjectId: { userId, subjectId } },
    select: { id: true },
  });
  return unlock !== null;
}
