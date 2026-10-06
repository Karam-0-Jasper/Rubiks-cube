# Grade 12 notes — continuation handoff

Read this together with **`AGENTS.md`** (the full content contract) before writing anything.
This file tracks the exact remaining work so a fresh session can finish Grade 12.

## What this project is

Nyvora — a Next.js 15 + TypeScript + Prisma/Neon app of Liberian MoE lesson notes.
Content is code: each period is a `PeriodContent` in `src/content/grade{10,11,12}/period{1..6}/<subject>.ts`,
registered in `src/content/index.ts`. Notes must be **sourced from real, already-published
education sites** (CK-12, Khan, LibreTexts, OpenStax, Siyavula, Teachoo, GeeksforGeeks) — never
invented. One topic per curriculum `CONTENTS` item. Each topic: objective, sourced blackboard
notes, one worked example, ~20 quiz + 5 test questions. **No `teachingTip`. No LaTeX** (`$` is
printed literally; use plain unicode like H₂O, x², √(x²+y²), θ).

## Current state (branch `claude/notes-rewrite-handoff-uk6afl`, PR #58)

- **Grade 10** — complete ✅
- **Grade 11** — complete ✅
- **Grade 12** — complete ✅ (all 9 subjects, P1–P6)

## Remaining work

All Grade 12 files exist. Optional cleanup: `grade12/period6/geography.ts` (General Revision) covers its five
CONTENTS items as `##` sections inside one topic; strictly it should be split into five
topics (Map Reading; Industries of Liberia; Climate and Natural Vegetation; Regional
Geography of Africa; Population and Settlement).

## Improvement passes — status when paused

All work below is committed. When resuming, also guard against saving half-finished
files: never commit a file that has lost topics it had before (diff the `slug:` lists),
and check that every quiz/test item's correct-answer text is unchanged unless the change
is a deliberate fix.

1. **Grade 11 Maths, English, History** — Maths P1 done (rebuilt to 15 topics, one per
   CONTENTS item; a wrong answer key fixed). **Remaining:** Maths P2–P6, English P1–P6,
   History P1–P6.
2. **Grade 10, all subjects (fix every mistake)** — done for Maths, Physics, Chemistry,
   Biology, Economics, English, Geography, Literature: wrong/ambiguous items fixed and
   answer positions balanced (most answers had been option B; the app does not shuffle).
   **Remaining:** any Grade 10 subjects not listed (e.g. History, Civics, Agriculture,
   Computer Science, French, PE) — check `ls src/content/grade10/period1/`.
3. **UI/UX redesign** — first pass done: Source Serif/Source Sans typography, new MainNav
   and SubjectMark, reworked dashboard/grade/subject/search/billing/quiz/unlock screens,
   flatter cards, plain copy. **Remaining:** finish PlanCheckout, PaymentStatusPoller and the
   payment confirm page; review the notes reader and topic pages; check mobile layout.
4. **Grade 11 other subjects** — Biology P1, P2, P4 audited. **Remaining:** Biology P3, P5
   (P5 protein-synthesis topic was being split), P6, and all of Chemistry, Physics,
   Economics, Geography, Literature.
5. **Grade 12 Period 1 book-style rewrite** — Maths done (8 topics); English partly
   rewritten. **Remaining:** finish English, then Biology, Chemistry, Physics.

## How to build each file (repeat per file)

1. **Find the syllabus block.** In `curriculum/<Subject>.txt` (Economics.txt, Mathematics.txt,
   Geography.txt, Literature.txt, History.txt, English.txt), locate the `GRADE: 12` block for that
   period. Note the OCR uses irregular spacing — search e.g. `grep -niE "grade:? *12" curriculum/Mathematics.txt`.
   Trust the `TOPIC:` heading and the `CONTENTS` list. **Every top-level CONTENTS item = one topic**
   (sub-items a/b/c become `##` sections inside that topic).

2. **Source each topic** from an approved site via web fetch/search — NO invented notes. Put a
   `// source: <Site> — <title> (<url>)` comment immediately above each topic's `slug:`.

3. **Write the file** exactly as a `PeriodContent` (see `src/content/types.ts` and any existing
   Grade 12 file as a template, e.g. `src/content/grade12/period4/mathematics.ts`):

   ```ts
   import type { PeriodContent } from "@/content/types";
   // source: ...
   export const <subjectCamel>G12P<n>: PeriodContent = {
     grade: 12,
     number: <n>,
     title: "...",   // from the curriculum TOPIC heading
     summary: "...",
     topics: [ /* one TopicContent per CONTENTS item */ ],
   };
   ```

   Export names use the subject's camelCase base: `economicsG12P5`, `mathematicsG12P5`,
   `geographyG12P5`, `literatureG12P5`, `historyG12P4`, `englishLanguageG12P4` (english base is
   `englishLanguage`). Each `TopicContent`: `slug` (kebab-case, unique in subject), `title`,
   `objective` ("By the end of the topic, learners should be able to …"), `notes` (sourced,
   `##` headings, `-` bullets, `**Term** — definition`, tables with matching cell counts + `| --- |`
   separator, optional ` ```svg ` diagrams), `workedExample`, `estimatedMinutes`, `quiz` (~20
   `{prompt, options[4], correctIndex, explanation}`), `test` (5 `{type, prompt, options?,
   correctIndex?, answerKey, marks}` where type is MULTIPLE_CHOICE | SHORT_ANSWER | ESSAY).

4. **Register it in `src/content/index.ts`** — two edits:
   - an `import { <export> } from "@/content/grade12/period<n>/<subject>";` line (next to the same
     subject's other G12 imports),
   - the bare `<export>,` added to that subject's array in `EXTRA_PERIODS` (next to its other
     G12 entries).

5. **Verify:** `npx tsc --noEmit` then `SKIP_ENV_VALIDATION=1 npx next build` — both must pass.

6. **Commit each file (or a small batch) and push** to `claude/notes-rewrite-handoff-uk6afl`:
   `git add ... && git commit && git push -u origin claude/notes-rewrite-handoff-uk6afl`.
   Commit as soon as a file is verified — do not batch a whole grade, or an interruption loses it.

## Sanity checks per file

- `grep -c 'slug:'` == `grep -c '// source:'` (every topic sourced) and == number of CONTENTS items.
- `grep -c teachingTip` == 0.
- No `$…$` LaTeX (literal `$` for currency is fine).
- File ends with `};` and exports the right `G12P<n>` name with correct `grade: 12` / `number: <n>`.

Grades 10, 11 and 12 all have every period built; the passes above are quality improvements.
