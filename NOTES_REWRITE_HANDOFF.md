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

## Network / sources — DO THIS FIRST

Run this check before writing any content:

1. **WebFetch** `https://openstax.org/books/physics/pages/1-1-physics-definitions-and-applications`.
   - **200 → you have full page access.** Read the actual source pages and build notes from them.
     This is the good case and is much stronger than what earlier sessions could do.
   - **403 → the egress proxy is still blocking**, meaning this session did not start in the
     network-enabled environment. Say so, then fall back to step 2.
2. **WebSearch fallback.** Search routes through Anthropic's servers, not this container's
   network, so it works even when WebFetch 403s. Use `allowed_domains` to pin results to the
   approved sites, e.g.
   `WebSearch(query: "…", allowed_domains: ["openstax.org","libretexts.org","ck12.org","khanacademy.org","siyavula.com","teachoo.com"])`.
   Note `bbc.co.uk` is rejected by the search tool — don't include it.
   This yields sourced definitions and summaries rather than full page text; it is how the
   Physics P1 and Chemistry P1 topics were built.
3. **Connectors** (Wolfram, Learning Commons) also bypass the block when connected, and are
   useful for verifying numeric worked examples and for standards alignment. They drop in and
   out of the session — check availability rather than assuming.

## Where the content lives

- Notes are content-sourced (NOT the DB): `src/content/grade10/period{1..6}/{subject}.ts`,
  typed by `src/content/types.ts` (`SubjectContent` → `PeriodContent` → `TopicContent`).
  Single-file subjects (agriculture, civics, computer-science) keep all periods in
  `period1/<subject>.ts`. Served via `src/lib/curriculum.ts`; `prisma/seed.ts` seeds the DB.
- Notes markup is rendered by `src/components/Notes.tsx` (`##`, `-`, `1.`, `**bold**`, tables,
  and ` ```svg ` fenced diagrams — inside the TS template literals svg fences are escaped backticks).

## Current state

**Done and verified (on branch, PR #57):**

- ✅ Teaching-tip block removed (render + type + seed). Do not reintroduce it.
- ✅ **Physics Period 1** — rebuilt from 2 topics to **8**, one per syllabus CONTENTS item:
  branches of physics; basic mathematical concepts; measurement (systems, quantities, units,
  prefixes, significant figures, accuracy/errors); dimensional analysis; measuring instruments;
  scalar and vector quantities; density and relative density; pressure in solids/liquids/gases.
- ✅ **Chemistry Period 1** — rebuilt from 2 topics to **6**, covering both syllabus topics:
  development of chemistry; units of measurement; states of matter and their changes;
  properties and changes of matter; separation techniques; classification of mixtures.
- ✅ **Maths** — added the two Grade 10 topics that were missing entirely: **Vector in a Plane**
  (P5) and **Statistics: Frequency Tables and Averages** (P6); completed Simultaneous Equations.
- ✅ `curriculum/` syllabus files committed — the authoritative topic lists.

**Not done:**

- ⛔ **English Period 1** — topic list matches the curriculum, but the note *bodies* for
  Autobiographical Writing, Short Story and Vocabulary Development are still AI-written and
  must be **re-sourced**.
- ⛔ **Every other subject and period has not been audited against its CONTENTS list.**
  Expect the same defect found in Physics/Chemistry P1: several syllabus items collapsed into
  one or two oversized topics. Physics P2–P6 and Chemistry P2–P6 in particular each have only
  two topics and almost certainly under-cover their CONTENTS.
- Prior style passes (blackboard form, common-errors boxes) are merged; keep that form.

## The audit method (use this on every subject/period)

This is what found the missing Maths topics and the collapsed Physics/Chemistry periods:

1. Open `curriculum/<Subject>.txt`, find each `GRADE: 10` → `PERIOD` block. Beware: the OCR
   interleaves the CONTENTS column with the OBJECTIVES and ACTIVITIES columns, and the period
   numbering in the file is unreliable — trust the `TOPIC:` heading and the CONTENTS list.
2. Write out the CONTENTS list. **Each top-level numbered/lettered item is one topic.**
   Sub-items (i, ii, iii…) become `##` sections inside that topic, not separate topics.
3. List the app's current topics: `grep -n "slug:" src/content/grade10/period*/<subject>.ts`.
4. Diff the two. Add what's missing; split what's been collapsed.
5. Before deleting or renaming a slug, check nothing references it:
   `grep -rn "<old-slug>" --include=*.ts --include=*.tsx . | grep -v node_modules`.

## Workflow

- Branch: **`claude/nuvex-teacher-platform-jqy47u`**. Commit per subject/period.
  `git config user.email noreply@anthropic.com && git config user.name Claude`.
- Verify each batch: `npx tsc --noEmit` and `SKIP_ENV_VALIDATION=1 npx next build`.
- Watch for two mistakes that have actually bitten:
  - **No LaTeX.** `Notes.tsx` does not render `$…$`; it prints literally. Use plain text
    (`√(x² + y²)`, `θ`, `tan θ = y / x`).
  - **Markdown tables must have the same number of cells in every row as in the header.**
- Open a draft PR per batch and squash-merge to `main` (repo auto-watches PRs).

## Suggested order from here

1. **Merge PR #57** if it is still open.
2. **English, all periods, re-sourced** — the user checks this one most.
3. **Physics P2–P6** and **Chemistry P2–P6** — same collapse defect as P1, already diagnosed.
4. **Maths P1–P4** — audit for missing topics the way P5/P6 were.
5. Biology, Geography, History, Economics, Literature, then the single-file subjects
   (agriculture, civics, computer-science).
