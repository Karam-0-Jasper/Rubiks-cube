import { PrismaClient } from "@prisma/client";

import { SUBJECTS } from "../src/content";
import { hashSubjectCode as hashCode } from "../src/lib/subject-code";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding curriculum...");

  for (const subject of SUBJECTS) {
    const created = await prisma.subject.upsert({
      where: { slug: subject.slug },
      update: {
        name: subject.name,
        shortName: subject.shortName,
        description: subject.description,
        accent: subject.accent,
        sortOrder: subject.sortOrder,
        teacherCodeHash: hashCode(subject.teacherCode),
      },
      create: {
        slug: subject.slug,
        name: subject.name,
        shortName: subject.shortName,
        description: subject.description,
        accent: subject.accent,
        sortOrder: subject.sortOrder,
        teacherCodeHash: hashCode(subject.teacherCode),
      },
    });

    for (const period of subject.periods) {
      const createdPeriod = await prisma.period.upsert({
        where: {
          subjectId_grade_number: {
            subjectId: created.id,
            grade: period.grade,
            number: period.number,
          },
        },
        update: { title: period.title, summary: period.summary },
        create: {
          subjectId: created.id,
          grade: period.grade,
          number: period.number,
          title: period.title,
          summary: period.summary,
        },
      });

      for (let t = 0; t < period.topics.length; t++) {
        const topic = period.topics[t];
        const createdTopic = await prisma.topic.upsert({
          where: {
            periodId_slug: { periodId: createdPeriod.id, slug: topic.slug },
          },
          update: {
            sortOrder: t,
            title: topic.title,
            objective: topic.objective,
            notes: topic.notes,
            workedExample: topic.workedExample,
            teachingTip: topic.teachingTip ?? "",
            estimatedMinutes: topic.estimatedMinutes,
          },
          create: {
            periodId: createdPeriod.id,
            slug: topic.slug,
            sortOrder: t,
            title: topic.title,
            objective: topic.objective,
            notes: topic.notes,
            workedExample: topic.workedExample,
            teachingTip: topic.teachingTip ?? "",
            estimatedMinutes: topic.estimatedMinutes,
          },
        });

        // Replace questions wholesale so edits to content propagate cleanly.
        await prisma.quizQuestion.deleteMany({
          where: { topicId: createdTopic.id },
        });
        await prisma.testQuestion.deleteMany({
          where: { topicId: createdTopic.id },
        });

        await prisma.quizQuestion.createMany({
          data: topic.quiz.map((q, i) => ({
            topicId: createdTopic.id,
            sortOrder: i,
            prompt: q.prompt,
            options: q.options,
            correctIndex: q.correctIndex,
            explanation: q.explanation,
          })),
        });

        await prisma.testQuestion.createMany({
          data: topic.test.map((q, i) => ({
            topicId: createdTopic.id,
            sortOrder: i,
            type: q.type,
            prompt: q.prompt,
            options: q.options ?? undefined,
            correctIndex: q.correctIndex ?? null,
            answerKey: q.answerKey,
            marks: q.marks,
          })),
        });
      }

      // Prune stale topics that used to live in this period but are no longer
      // in the content (e.g. a topic moved to a different period). Content is
      // the source of truth, so orphaned rows and their questions are removed.
      const keptSlugs = period.topics.map((t) => t.slug);
      const orphanTopics = await prisma.topic.findMany({
        where: { periodId: createdPeriod.id, slug: { notIn: keptSlugs } },
        select: { id: true },
      });
      if (orphanTopics.length > 0) {
        const orphanIds = orphanTopics.map((t) => t.id);
        await prisma.quizAttempt.deleteMany({
          where: { topicId: { in: orphanIds } },
        });
        await prisma.quizQuestion.deleteMany({
          where: { topicId: { in: orphanIds } },
        });
        await prisma.testQuestion.deleteMany({
          where: { topicId: { in: orphanIds } },
        });
        await prisma.topic.deleteMany({ where: { id: { in: orphanIds } } });
        console.log(
          `  (pruned ${orphanTopics.length} stale topic(s) from ${subject.name} Grade ${period.grade} Period ${period.number})`,
        );
      }

      console.log(
        `  ${subject.name}: ${period.topics.length} topics for Grade ${period.grade} Period ${period.number}`,
      );
    }
  }

  const subjectCount = await prisma.subject.count();
  const topicCount = await prisma.topic.count();
  console.log(`Done. ${subjectCount} subjects, ${topicCount} topics seeded.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
