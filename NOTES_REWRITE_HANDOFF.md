# Handoff: rebuild Grade 10 lesson notes from real sources

Read this fully before touching content. It exists because earlier work went wrong twice.

## The rules (do not break these)

1. **Topics come from the MoE curriculum, verbatim.** The authoritative topic lists
   are the syllabus files committed in **`curriculum/`** (English, Mathematics, Biology,
   Chemistry, Physics, Geography, History, Economics, Literature, French, Physical_Education).
   For each `GRADE: 10` → `PERIOD` in a file, **every item in the `CONTENTS` list is its own
   topic**. Do **not** condense, rename, invent, or drop topics.
   - Example — English, Grade 10, Period I `CONTENTS`: Nouns; **Narration: Autobiographical
     Writing**; Pronouns (Antecedents); **Narration: Short Story**; **Vocabulary Development**.
     The first version only had Nouns + Pronouns — that was the bug.

2. **Notes must be sourced from real education sites, not written from your own head.**
   The user explicitly rejected AI-invented notes. Fetch the topic from the mapped source
   and build the note from it (accurate, curriculum-aligned, attributed). Per-subject sources
   the user approved (in priority order):
   - CK-12, Khan Academy, LibreTexts, OpenStax, BBC Bitesize, Save My Exams, Siyavula,
     eLearnAfrica, Teachoo, GeeksforGeeks.
   - Rough subject→source fit: **Chemistry/Physics/Biology → LibreTexts, CK-12, OpenStax**;
     **Maths → CK-12, Khan, Siyavula**; **Economics → Khan, OpenStax**;
     **English/Literature → (see note)**; **Geography/History → OpenStax, CK-12**;
     **Computer Science → GeeksforGeeks, CK-12**.
   - The user's original per-subject app list (mostly login-gated/blocked, kept for reference):
     English→NoRedInk, Literature→SparkNotes, Chemistry→RSC, History→History Hit,
     Economics→Marginal Revolution University, Maths→Photomath, Physics→PhyWiz,
     Geography→Seterra, PE→Sworkit, French→Babbel.
   - Cite the source used per topic (e.g. a short `<!-- source: openstax … -->` or a line in the PR).

3. **No "Teaching tip".** It has been removed from the page and the type field is optional —
   do not add it back. New topics omit `teachingTip`.

4. **Note form = blackboard / teaching notes**, not explanatory prose. Terse, declarative
   points a teacher writes on the board: `## heading`, `-` bullets, `**Term** — definition`,
   worked examples, tables, and ` ```svg ` diagrams. Comprehensive and long (these are for
   teachers to teach from), NOT casual one-liners. No narrator voice ("in this lesson we…",
   "why does…", "notice that…").

5. **Per topic:** `objective`, `notes`, `workedExample`, **~20 quiz questions**, **5 test
   questions** (teacher-only, gated). Vary questions — don't reuse the same ones.

6. **Grade 10 only for now.** Grades 11–12 deferred.

## Network / sources

- General web was blocked in the previous session (403 on everything except GitHub). The user
  has since set the cloud environment's **Network access** to Full/Custom. **Verify first**:
  fetch e.g. `https://openstax.org/…` or a CK-12 page. If it still 403s, the session did not
  start in the edited environment — stop and tell the user to relaunch in the right environment.

## Where the content lives

- Notes are content-sourced (NOT the DB): `src/content/grade10/period{1..6}/{subject}.ts`,
  typed by `src/content/types.ts` (`SubjectContent` → `PeriodContent` → `TopicContent`).
  Single-file subjects (agriculture, civics, computer-science) keep all periods in
  `period1/<subject>.ts`. Served via `src/lib/curriculum.ts`; `prisma/seed.ts` seeds the DB.
- Notes markup is rendered by `src/components/Notes.tsx` (`##`, `-`, `1.`, `**bold**`, tables,
  and ` ```svg ` fenced diagrams — inside the TS template literals svg fences are escaped backticks).

## Current state (as of this handoff)

- ✅ Teaching-tip block removed (render + type + seed).
- ✅ English **Period 1** topic list now matches the curriculum: Nouns → Narration:
  Autobiographical Writing → Pronouns → Narration: Short Story → Vocabulary Development.
  **BUT** the note *bodies* for those are still AI-written — they must be **re-sourced**.
- ⛔ Everything else still needs work:
  - English **P2–P6** and **all other subjects/periods** are missing their curriculum
    composition/vocabulary/clause/etc. topics — add them.
  - **All** note bodies should be re-sourced from the mapped sites, not AI-written.
- Prior style passes (blackboard form, common-errors boxes) are already merged; keep that form.

## Workflow

- Branch: **`claude/nuvex-teacher-platform-jqy47u`**. Commit per subject/period.
  `git config user.email noreply@anthropic.com && git config user.name Claude`.
- Verify each batch: `npx tsc --noEmit` and `SKIP_ENV_VALIDATION=1 npx next build`.
- Open a draft PR per batch and squash-merge to `main` (repo auto-watches PRs).
- Suggested order: finish **English** (all periods, re-sourced) first — it's the one the user
  keeps checking — then Maths, Biology, Chemistry, Physics, Geography, History, Economics,
  Literature, then the single-file subjects.
