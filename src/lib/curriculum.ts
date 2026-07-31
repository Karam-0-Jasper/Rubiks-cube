import "server-only";

import { prisma } from "@/lib/db";
import { SUBJECTS, getSubject } from "@/content";
import type { SubjectContent } from "@/content/types";

/// The curriculum (subjects, periods, topics, notes, quiz and test questions)
/// is authored in-repo under `src/content` and ships with the app on every
/// deploy. These readers serve it directly from that content, so the lesson
/// notes on the site are ALWAYS in sync with the deployed code — there is no
/// dependency on a database seed running. The database is used only for
/// user-specific data (accounts, unlocks, quiz attempts, quotas, payments).
///
/// Test questions and their answer keys are only ever returned by
/// getTestQuestions, which is called after the subject-code unlock check.

// Stable synthetic ids (used as React keys and for equality only).
const periodId = (subjectSlug: string, grade: number, number: number) =>
  `${subjectSlug}:g${grade}p${number}`;
const topicId = (subjectSlug: string, grade: number, number: number, slug: string) =>
  `${subjectSlug}:g${grade}p${number}:${slug}`;

function sortedPeriods(subject: SubjectContent) {
  return [...subject.periods].sort(
    (a, b) => a.grade - b.grade || a.number - b.number,
  );
}

export async function listSubjects() {
  return SUBJECTS.map((subject) => ({
    id: subject.slug,
    slug: subject.slug,
    name: subject.name,
    shortName: subject.shortName,
    description: subject.description,
    accent: subject.accent,
    periods: sortedPeriods(subject).map((p) => ({
      id: periodId(subject.slug, p.grade, p.number),
      grade: p.grade,
      number: p.number,
      title: p.title,
      _count: { topics: p.topics.length },
    })),
  }));
}

export async function getSubjectWithPeriod(subjectSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return null;

  return {
    id: subject.slug,
    slug: subject.slug,
    name: subject.name,
    description: subject.description,
    accent: subject.accent,
    periods: sortedPeriods(subject).map((p) => ({
      id: periodId(subject.slug, p.grade, p.number),
      grade: p.grade,
      number: p.number,
      title: p.title,
      summary: p.summary,
      topics: p.topics.map((t) => ({
        id: topicId(subject.slug, p.grade, p.number, t.slug),
        slug: t.slug,
        title: t.title,
        objective: t.objective,
        estimatedMinutes: t.estimatedMinutes,
        _count: {
          quizQuestions: t.quiz.length,
          testQuestions: t.test.length,
        },
      })),
    })),
  };
}

export async function getTopic(subjectSlug: string, topicSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return null;

  for (const p of sortedPeriods(subject)) {
    const t = p.topics.find((x) => x.slug === topicSlug);
    if (!t) continue;
    return {
      id: topicId(subject.slug, p.grade, p.number, t.slug),
      slug: t.slug,
      title: t.title,
      objective: t.objective,
      notes: t.notes,
      workedExample: t.workedExample,
      teachingTip: t.teachingTip,
      estimatedMinutes: t.estimatedMinutes,
      period: {
        grade: p.grade,
        number: p.number,
        title: p.title,
        subject: {
          slug: subject.slug,
          name: subject.name,
          accent: subject.accent,
        },
      },
      quizQuestions: t.quiz.map((q, i) => ({
        id: `${t.slug}-q${i}`,
        prompt: q.prompt,
        options: q.options,
        correctIndex: q.correctIndex,
        explanation: q.explanation,
      })),
      _count: { testQuestions: t.test.length },
    };
  }
  return null;
}

/// Only ever called after a subject-code unlock check. Includes the answer key.
export async function getTestQuestions(subjectSlug: string, topicSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return [];

  for (const p of subject.periods) {
    const t = p.topics.find((x) => x.slug === topicSlug);
    if (!t) continue;
    return t.test.map((q, i) => ({
      id: `${t.slug}-t${i}`,
      type: q.type,
      prompt: q.prompt,
      options: q.options ?? null,
      correctIndex: q.correctIndex ?? null,
      answerKey: q.answerKey,
      marks: q.marks,
    }));
  }
  return [];
}

/// User-specific: whether this teacher has unlocked the subject's test items.
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
