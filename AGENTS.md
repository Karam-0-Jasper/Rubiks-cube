# AGENTS.md — rebuilding Grade 10 notes from real, published sources

This file is the contract for every agent that touches lesson-note content. Read it
in full before writing anything. It exists because earlier note content was written
from the model's own knowledge, which the project owner has rejected. The mandate now
is strict: **every note must be built from real, already-published, credible education
material — never invented.**

## Prime directives (do not break)

1. **No invented notes.** You may not write lesson content from your own knowledge.
   Every topic's notes and worked example must be sourced from a real, published page
   on an approved education site (below), read via `WebFetch` (or `WebSearch` when a
   page will not fetch). If you cannot source a topic, leave it flagged in your report
   rather than inventing it.

2. **Topics come from the MoE curriculum, verbatim.** The authoritative topic lists are
   the syllabus files in `curriculum/` (`Biology.txt`, `Chemistry.txt`, `Physics.txt`,
   `Mathematics.txt`, `Economics.txt`, `Geography.txt`, `History.txt`, `Literature.txt`,
   `English.txt`, `French.txt`, `Physical_Education.txt`). For each `GRADE: 10` →
   `PERIOD` block, **every top-level item in the `CONTENTS` list is its own topic.** Do
   not condense, rename, invent, or drop topics. Sub-items (a, b, c… / i, ii, iii…)
   become `##` sections inside that topic, not separate topics.

3. **Cite the source for every topic.** Put a `// source: <Site> — <page title> (<url>)`
   TS comment immediately above each topic's `slug:` line. Do **not** put HTML comments
   (`<!-- -->`) inside the `notes` string — the renderer prints them literally.

4. **No "Teaching tip".** The `teachingTip` field is deprecated. Never add it.

5. **Grade 10 only.** Ignore Grades 11–12.

## Approved sources (in priority order)

CK-12, Khan Academy, LibreTexts, OpenStax, BBC Bitesize, Save My Exams, Siyavula,
eLearnAfrica, Teachoo, GeeksforGeeks.

Rough subject → source fit:
- **Chemistry / Physics / Biology →** LibreTexts, CK-12, OpenStax
- **Maths →** CK-12, Khan, Siyavula, Teachoo
- **Economics →** Khan, OpenStax
- **Geography / History →** OpenStax, CK-12
- **English / Literature →** LibreTexts (Humanities/Composition), CK-12
- **Computer Science →** GeeksforGeeks, CK-12

### How to source

1. **Try `WebFetch` first.** Static article sites (LibreTexts, OpenStax, CK-12,
   Siyavula, Teachoo, GeeksforGeeks) return full page text — read the actual page and
   build the note from it. This is the strong path.
2. **`WebSearch` fallback** when a page will not fetch. Search routes around the
   container's network. Pin to approved domains, e.g.
   `WebSearch(query: "…", allowed_domains: ["openstax.org","libretexts.org","ck12.org","khanacademy.org","siyavula.com","teachoo.com"])`.
   Note: `bbc.co.uk` is rejected by the search tool and BBC does not `WebFetch` — skip
   BBC. Khan Academy is a JS app and usually will not `WebFetch`; use `WebSearch` for it.
3. Prefer a page that actually covers the syllabus item. If the best source only
   partially covers it, source what you can and note the gap in your report.

## The audit method (run on every subject/period before writing)

1. Open `curriculum/<Subject>.txt`. Find each `GRADE: 10` → `PERIOD` block. The OCR
   interleaves the CONTENTS column with OBJECTIVES/ACTIVITIES and the period numbering
   is unreliable — trust the `TOPIC:` heading and the `CONTENTS` list.
2. Write out the CONTENTS list. Each top-level numbered/lettered item = one topic.
3. List the app's current topics: `grep -n "slug:" src/content/grade10/period*/<subject>.ts`.
4. Diff. **Add** missing topics; **split** collapsed ones (most P2–P6 files have only 2
   topics and under-cover their CONTENTS — expect to expand them).
5. Before deleting/renaming a slug, check nothing references it:
   `grep -rn "<old-slug>" --include=*.ts --include=*.tsx . | grep -v node_modules`.

## Output format (must compile)

Content lives in `src/content/grade10/period{1..6}/<subject>.ts`, each exporting one
`PeriodContent` (see `src/content/types.ts`). Single-file subjects (agriculture, civics,
computer-science) keep all periods in `period1/<subject>.ts`. Preserve the existing
`export const <subject>G10P<n>: PeriodContent = { grade, number, title, summary, topics }`
wrapper — only rebuild `topics` (and refresh `title`/`summary` if the audit changes them).

Each topic is a `TopicContent`:
- `slug` — kebab-case, unique within the subject; derive from the title.
- `title` — the curriculum topic name.
- `objective` — one sentence, "By the end of the topic, learners should be able to …".
- `notes` — **blackboard/teaching notes**, sourced. Terse declarative points a teacher
  writes on the board: `## headings`, `-` bullets, `**Term** — definition`, `1.` lists,
  tables, and ` ```svg ` fenced diagrams. Comprehensive and long (teachers teach from
  these), NOT casual prose. No narrator voice ("in this lesson we…", "notice that…").
- `workedExample` — one fully worked example (problem → steps → answer), sourced/verified.
- `estimatedMinutes` — integer.
- `quiz` — **~20** `{ prompt, options[4], correctIndex, explanation }`. Vary them; do not
  reuse the same stems across topics.
- `test` — **5** `{ type: "MULTIPLE_CHOICE"|"SHORT_ANSWER"|"ESSAY", prompt, options?,
  correctIndex?, answerKey, marks }`.

Quiz/test items are assessment, not prose notes — you may write these yourself, but they
must test the **sourced** content, and factual claims/answers must match the source.

### Rendering rules (`src/components/Notes.tsx`) — violating these breaks the page

- **No LaTeX.** `$…$` is printed literally. Use plain text: `√(x² + y²)`, `θ`,
  `tan θ = y / x`, `H₂O`, `x²`.
- **Markdown tables:** every row must have the **same number of cells as the header**,
  and include the `| --- | --- |` separator row.
- ` ```svg ` fenced blocks render inline; inside TS template literals the fence
  backticks are escaped (`` \`\`\`svg ``). Keep SVGs small and `viewBox`-based.
- Supported inline markup: `**bold**`, `*italic*`, `` `code` ``. Headings `##` only.

## Workflow for agents

- Touch **only the files you are assigned.** Do not edit another agent's files, and do
  **not** run `git add/commit/push` — the coordinator verifies and commits centrally.
- After rewriting your files, sanity-check them: they must be valid TS. If you can,
  run `npx tsc --noEmit` and fix errors you introduced.
- **Report back**, per period: the CONTENTS list you found, the final topic list you
  wrote, and the source URL used for each topic. Flag any topic you could not source.

## Coordinator (main session) responsibilities

- Assign disjoint file sets to agents so they never collide.
- After each wave: `npx tsc --noEmit` and `SKIP_ENV_VALIDATION=1 npx next build`, fix
  any breakage, then commit per subject with the sources noted, and push to the PR branch.
