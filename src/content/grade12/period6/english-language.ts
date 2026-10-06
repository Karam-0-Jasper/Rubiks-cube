import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 12,
// Semester Two, Period VI: GRAMMAR — More Review with WASSCE Papers.
// CONTENTS: More Review with WASSCE papers (continuous rehearsal of past
// WASSCE papers to succeed in public examinations). One top-level CONTENTS
// item = one topic.
export const englishLanguageG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "More Review with WASSCE Papers",
  summary:
    "Period VI of the MoE Grade 12 English syllabus. Learners rehearse past WASSCE papers continuously and use evidence-based revision strategies — spacing, interleaving, practice testing, mnemonics and a study plan — to prepare for success in public examinations.",
  topics: [
    {
      // source: LibreTexts — Academic Success (Bartlett et al.), 4.5 Preparing for Exams (https://socialsci.libretexts.org/Bookshelves/Counseling_and_Guidance/Academic_Success_(Bartlett_et_al.)/04:_Successful_Assessment/4.05:_Preparing_for_Exams)
      slug: "more-review-with-wassce-papers",
      title: "More Review with WASSCE Papers: Exam Revision Strategies",
      objective:
        "By the end of the topic, learners should be able to rehearse past WASSCE papers effectively using spacing, interleaving and practice testing, apply memory aids, build a study plan, and avoid cramming so as to succeed in public examinations.",
      estimatedMinutes: 120,
      notes: `## Why keep rehearsing past WASSCE papers

Working through **past WASSCE papers again and again** is a form of **practice testing** — it rehearses **retrieving** the knowledge and skills you will need on the real exam. Continuous, well-planned review beats a last-minute rush.

## Spacing (distributed practice)

**Spacing** is about **when** you study: repeat your review **over many short sessions** with breaks between them, instead of one long session.

- A little **forgetting between sessions** makes your brain **work harder to relearn**, which **strengthens long-term memory**.
- Study small amounts **daily** across the weeks before the exam rather than cramming seven hours the night before.

## Interleaving

**Interleaving** is about **what** you study: **switch between topics or papers** within a session instead of finishing all of one type first.

- Mix question types and subjects (e.g. comprehension, then grammar, then an essay plan).
- It feels harder at first but forces **deeper processing** and improves long-term memory.

## Practice testing (retrieval practice)

**Practice testing** means **actively recalling** information rather than just rereading. Ways to do it with WASSCE papers:

- **Cover** your notes and recall the main ideas **aloud or in writing**.
- Make **flashcards** or your **own quizzes**.
- **Teach** a concept to a classmate.
- Do **timed writing** under real exam conditions.

## Memory aids

- **Mnemonics** — remember things using letters or phrases as association (e.g. *NEWS* for North-East-West-South). Good for lists and multi-step processes.
- **Concept association** — link new material to what you **already know**, creating more ways to recall it.
- **Idea clusters** — link information to **well-remembered but unrelated** things (a song, a story) to recall complex steps.

## A study plan and exam-day plan

- **Start early**; know the **exam requirements** and what materials are allowed.
- Build an **exam-day plan**: how much **time per section**, which questions to **answer first** (begin with those you are confident about), and how to use any **time left** to review.
- Plan logistics (arrive early, bring materials) to **reduce stress**.

## Why cramming fails

**Cramming** leaves **no time for rest** between sessions, so it causes **memory fatigue** and poor concentration, prevents deep learning, and makes information hard to retain or reuse later.

## Summary

- Rehearsing past papers = **practice testing** (retrieval), the strongest review.
- **Space** your review over time; **interleave** topics and papers.
- Use **mnemonics, concept association and idea clusters** to remember.
- Make a **study plan** and an **exam-day plan**; start with confident answers.
- **Avoid cramming** — it brings fatigue and shallow learning.`,
      workedExample: `**Task.** A student has three weeks before the WASSCE English paper and a stack of past papers. Design a review plan using spacing, interleaving and practice testing.

**Step 1 — space it out.** Schedule **short daily sessions** (about 45 minutes) across the three weeks instead of long cram nights. Accept that forgetting a little between days actually strengthens memory.

**Step 2 — interleave.** In each session, **mix** the parts of the paper: 15 minutes of comprehension from one past paper, 15 minutes of grammar/objective questions from another, and 15 minutes planning an essay — rather than doing only comprehension all week.

**Step 3 — practice testing.** Attempt questions **from memory** with notes closed, then check the marking scheme. Once a week, do a **full timed paper** under exam conditions to rehearse retrieval and pacing.

**Step 4 — memory aids and plan.** Make **flashcards** for troublesome words and use **mnemonics**; write an **exam-day plan** (time per section, answer confident questions first, review at the end).

**Step 5 — avoid cramming.** Keep to the daily schedule and rest the night before.

**Why it works:** the plan turns past-paper review into spaced, interleaved practice testing with memory aids and a clear exam-day plan — the strategies shown to build lasting recall and strong exam performance.`,
      quiz: [
        {
          prompt: "Repeatedly working past WASSCE papers is mainly a form of…",
          options: ["practice testing (retrieval)", "cramming", "rereading", "guessing"],
          correctIndex: 0,
          explanation: "It rehearses retrieving knowledge, like the real exam.",
        },
        {
          prompt: "Spacing refers to ___ you study.",
          options: ["when", "where", "who", "why"],
          correctIndex: 0,
          explanation: "Spacing is about timing — sessions spread out.",
        },
        {
          prompt: "Spacing means reviewing in…",
          options: ["many short sessions with breaks", "one long session", "no sessions", "random order only"],
          correctIndex: 0,
          explanation: "Distributed practice spreads study over time.",
        },
        {
          prompt: "A little forgetting between sessions helps because your brain…",
          options: ["works harder to relearn, strengthening memory", "gives up", "forgets everything", "needs no review"],
          correctIndex: 0,
          explanation: "Relearning strengthens long-term retention.",
        },
        {
          prompt: "Interleaving refers to ___ you study.",
          options: ["what", "when", "where", "how long"],
          correctIndex: 0,
          explanation: "Interleaving is about mixing topics/subjects.",
        },
        {
          prompt: "Interleaving means…",
          options: ["switching between topics or papers in a session", "doing one topic only for a week", "never changing topic", "studying once"],
          correctIndex: 0,
          explanation: "Mixing topics forces deeper processing.",
        },
        {
          prompt: "Interleaving often feels ___ at first but improves memory.",
          options: ["harder", "easier", "pointless", "faster"],
          correctIndex: 0,
          explanation: "The extra difficulty aids long-term recall.",
        },
        {
          prompt: "Practice testing means…",
          options: ["actively recalling information from memory", "rereading notes passively", "copying answers", "skipping revision"],
          correctIndex: 0,
          explanation: "Retrieval practice strengthens learning.",
        },
        {
          prompt: "Which is an example of practice testing?",
          options: ["covering notes and recalling aloud", "reading the chapter again", "highlighting the text", "watching a video once"],
          correctIndex: 0,
          explanation: "Recalling without looking is retrieval.",
        },
        {
          prompt: "Doing a full past paper under exam conditions mainly builds…",
          options: ["retrieval and pacing", "handwriting", "vocabulary only", "typing speed"],
          correctIndex: 0,
          explanation: "Timed practice rehearses retrieval and time management.",
        },
        {
          prompt: "A mnemonic is a memory aid that uses…",
          options: ["letters or phrases as association", "a calculator", "a dictionary only", "longer study hours"],
          correctIndex: 0,
          explanation: "e.g. NEWS for the compass directions.",
        },
        {
          prompt: "Concept association means linking new material to…",
          options: ["what you already know", "nothing", "random noise", "the exam room"],
          correctIndex: 0,
          explanation: "It creates more retrieval pathways.",
        },
        {
          prompt: "Idea clusters link new information to…",
          options: ["well-remembered but unrelated things (a song, a story)", "the exam date only", "the teacher's name", "the page colour"],
          correctIndex: 0,
          explanation: "Memorable anchors aid recall of complex steps.",
        },
        {
          prompt: "A good exam-day plan includes deciding…",
          options: ["time per section and which questions to answer first", "the weather", "the seating colour", "nothing in advance"],
          correctIndex: 0,
          explanation: "Plan time and order of questions.",
        },
        {
          prompt: "On the exam it is wise to answer first the questions you…",
          options: ["are confident about", "find hardest", "like least", "cannot read"],
          correctIndex: 0,
          explanation: "Secure easy marks first, then return to harder ones.",
        },
        {
          prompt: "Planning logistics (arrive early, bring materials) helps to…",
          options: ["reduce exam-day stress", "waste time", "lower your marks", "skip the exam"],
          correctIndex: 0,
          explanation: "Good preparation calms nerves.",
        },
        {
          prompt: "Cramming the night before fails because it…",
          options: ["causes memory fatigue and shallow learning", "guarantees success", "replaces spacing", "needs no rest"],
          correctIndex: 0,
          explanation: "No rest means poor retention.",
        },
        {
          prompt: "Compared with rereading, practice testing is…",
          options: ["more effective for retention", "less effective", "the same", "useless"],
          correctIndex: 0,
          explanation: "Active retrieval beats passive rereading.",
        },
        {
          prompt: "Teaching a concept to a classmate is a form of…",
          options: ["practice testing / retrieval", "cramming", "spacing only", "guessing"],
          correctIndex: 0,
          explanation: "Explaining forces you to retrieve and organise.",
        },
        {
          prompt: "The best overall revision plan for past WASSCE papers combines…",
          options: ["spacing, interleaving and practice testing", "one all-night session", "only rereading", "luck"],
          correctIndex: 0,
          explanation: "These evidence-based strategies work together.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which approach to revising past WASSCE papers is most effective?",
          options: [
            "Short spaced sessions with practice testing over several weeks",
            "One long cramming session the night before",
            "Rereading the papers silently once",
            "Only reading the marking schemes",
          ],
          correctIndex: 0,
          answerKey: "Spaced, active practice testing builds lasting retrieval; cramming and passive rereading are weak.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between spacing and interleaving.",
          answerKey:
            "Spacing is about WHEN you study — spreading review over many short sessions with breaks; interleaving is about WHAT you study — switching between topics/papers within a session. Award a mark each.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What is practice testing, and give two ways to do it with past papers.",
          answerKey:
            "Actively recalling information from memory rather than rereading. Any two of: cover notes and recall aloud/in writing; make flashcards or your own quizzes; teach a concept to a classmate; do timed papers under exam conditions. Award a mark for the definition and a mark for two methods.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why does cramming the night before an exam usually fail?",
          answerKey:
            "It leaves no time for rest between sessions, causing memory fatigue and poor concentration; it prevents deep learning so information is hard to retain or reuse. Award marks for these reasons.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe a plan for reviewing past WASSCE papers in the weeks before the examination. Explain how you would use spacing, interleaving and practice testing, what memory aids you would apply, and how an exam-day plan and avoiding cramming would help you succeed.",
          answerKey:
            "A strong answer describes spaced short sessions over weeks; interleaving different question types/papers; practice testing (recall with notes closed, timed full papers, flashcards, teaching); memory aids (mnemonics, concept association, idea clusters); an exam-day plan (time per section, answer confident questions first, review at the end); and avoiding cramming because it causes fatigue and shallow learning. Award marks across these strategies.",
          marks: 5,
        },
      ],
    },
  ],
};
