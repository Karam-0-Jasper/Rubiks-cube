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
- **Grade 12:**
  - Biology P1–P6 ✅
  - Chemistry P1–P6 ✅
  - Physics P1–P6 ✅
  - Economics P1–P4 · Mathematics P1–P4 · Geography P1–P4 · Literature P1–P4
  - History P1–P3 · English P1–P3

## Remaining work — 13 files

| Subject | Files to create |
|---|---|
| Economics | `grade12/period5/economics.ts`, `grade12/period6/economics.ts` |
| Mathematics | `grade12/period5/mathematics.ts`, `grade12/period6/mathematics.ts` |
| Geography | `grade12/period5/geography.ts`, `grade12/period6/geography.ts` |
| Literature | `grade12/period5/literature.ts`, `grade12/period6/literature.ts` |
| History | `grade12/period4/history.ts`, `grade12/period5/history.ts`, `grade12/period6/history.ts` |
| English | `grade12/period4/english-language.ts`, `grade12/period5/english-language.ts`, `grade12/period6/english-language.ts` |

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

When all 13 land and the build is green, Grade 12 is complete and the PR covers Grades 10–12.
