import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 12, Semester Two, Period V: REVIEWING PAST EXAMINATION PAPERS (WASSCE).
// The six top-level CONTENTS items are rebuilt here as six topics:
// (1) Answer questions from past WASSCE papers; (2) Literary Devices; (3) Discuss
// past questions in prose, poetry and drama; (4) Discuss various themes, characters,
// exposition, tone and mood; (5) Review contents, expressions, mechanics and styles;
// (6) Drill for literary devices using examples. All literary and composition concepts
// are sourced from LibreTexts (Humanities / Composition). The syllabus names set texts
// (Faceless by Amma Darko, Lonely Days by Bayo Adebowale, The Last Goodman by Patience
// Swift, She Stoops to Conquer by Oliver Goldsmith, Vanity by Birago Diop) and past
// WASSCE papers; set-text-specific facts are NOT invented here — the transferable exam
// and analysis skills are taught, and the set texts/papers are flagged as the targets.
export const literatureG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Reviewing Past Examination Papers (WASSCE)",
  summary:
    "Period V of the MoE Grade 12 Literature syllabus. Its six CONTENTS items are taught as six topics: answering past WASSCE questions; reviewing literary devices; handling past questions on prose, poetry and drama; analysing themes, characters, exposition, tone and mood; reviewing content, expression, mechanics and style; and drilling literary devices with examples — all exam-review skills applied to the set texts and past papers.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Writing a Literary Analysis Essay (Living Literature, Cosumnes River College) (https://human.libretexts.org/Courses/Cosumnes_River_College/Living_Literature:_A_Journey_Through_Stories_Drama_and_Poetry/07:_Writing_about_Literature/7.10:_Writing_a_Literary_Analysis_Essay)
      slug: "answering-past-wassce-questions",
      title: "Answer Questions from Past WASSCE Papers",
      objective:
        "By the end of the topic, learners should be able to answer past WASSCE literature questions with a clear, debatable thesis supported by evidence from the set texts, observing content, expression, mechanics and style.",
      estimatedMinutes: 150,
      notes: `## Why review past papers
- Past WASSCE papers show the **question types**, the **set texts** examined, and how **marks** are shared across content, expression, mechanics and style.
- Practising them turns knowledge of the texts into **exam technique**: reading the question, planning, and answering to the mark scheme.

## What a literary answer must be
- A WASSCE literature answer is an **argumentative, analytical** response — not a plot summary.
- It must have a **clear, debatable thesis** (your interpretation stated in one or two sentences).
- It must give **quotations and references as evidence from the text** to support the thesis.
- It must be built as a **clear introduction, body paragraphs and conclusion**.

## Reading the question
- **Underline the command word** — *discuss, examine, analyse, compare, to what extent, show how*.
- Note the **focus** (a character, a theme, a device) and any **limits** (one text, two poems, a named scene).
- Answer the **question asked**, not the topic in general; marks follow relevance.

## Planning before writing
1. State a **thesis** that directly answers the question.
2. List **3–4 points**, each a reason or aspect that supports the thesis.
3. For each point, note the **evidence** (incident, quotation, reference) from the set text.
4. Order the points and write a quick **outline**.

## Structure of the answer
- **Introduction** — name the author and text, and state your thesis (your interpretation).
- **Body paragraphs** — one point each: topic sentence → evidence from the text → explanation of how it answers the question.
- **Conclusion** — draw the points together and restate how they prove the thesis; do not add new points.

## The "heresy of paraphrase"
- You cannot assign a meaning to a text *"unless that meaning can be supported by a close examination of the artistic elements of the text."*
- **Retelling the story is not analysis** — always move from *what happens* to *what it means and how*.

## Set texts and papers (to be supplied by the teacher)
- Practise on past WASSCE questions using the prescribed texts (e.g. *Faceless*, *Lonely Days*, *The Last Goodman*, *She Stoops to Conquer*, *Vanity*).
- *(The content of each set text and each past paper comes from those sources, not invented here.)*

## Common errors and misconceptions
- **Summarising the plot** instead of arguing a thesis.
- **Ignoring the command word** and writing everything you know.
- **No textual evidence** — assertions without quotation or reference.
- **Running out of time** — plan points and manage the clock across all questions.`,
      workedExample: `**Task.** A past-paper style question: *"Discuss the role of a character who struggles against their society in a prose text you have studied."*

**Step 1 — read the command word.** *Discuss* + *role* + *a character who struggles against society* + *prose text*. The answer must argue what that character's role **is** and **does**, with evidence.

**Step 2 — thesis.** *"In the chosen novel, the central figure's struggle against an unjust society is the text's main engine: through this character the author exposes the society's failures and argues for change."* (A debatable interpretation, directly answering "role".)

**Step 3 — plan 3 points.**
- Point 1: the character embodies a value the society denies (evidence: a key incident).
- Point 2: the struggle drives the plot's central conflict (evidence: the turning point).
- Point 3: through the character the author delivers the theme/criticism (evidence: the outcome).

**Step 4 — write one body paragraph.** *Topic sentence:* the character's defiance sets the central conflict in motion. *Evidence:* [reference the incident/quotation from the set text]. *Explanation:* this shows the society's injustice and makes the reader side with the character — fulfilling the character's role as the author's lens on society.

**Step 5 — conclude.** Restate that the character's role is to carry the central conflict and the author's criticism of society; the evidence from the three points proves it.

**Conclusion:** answer the **question asked** with a **thesis + evidence + explanation** in a clear introduction, body and conclusion — never a plot summary.`,
      quiz: [
        { prompt: "A WASSCE literature answer should be mainly", options: ["an analytical argument with a thesis", "a plot summary", "a list of characters", "a biography of the author"], correctIndex: 0, explanation: "It is an argumentative, analytical response." },
        { prompt: "The thesis of an answer is", options: ["your interpretation, stated in a sentence or two", "the question repeated", "a quotation", "the title"], correctIndex: 0, explanation: "A clear, debatable thesis states your interpretation." },
        { prompt: "Evidence in a literary answer comes from", options: ["quotations and references from the text", "your opinion only", "the price of the book", "the author's photo"], correctIndex: 0, explanation: "Use textual evidence to support the thesis." },
        { prompt: "The first thing to do with an exam question is", options: ["underline the command word", "start writing immediately", "copy the question", "skip to the end"], correctIndex: 0, explanation: "Identify what the question asks." },
        { prompt: "'Discuss', 'analyse' and 'examine' are", options: ["command words", "characters", "themes", "titles"], correctIndex: 0, explanation: "Command words tell you what to do." },
        { prompt: "A good answer is built as", options: ["introduction, body paragraphs, conclusion", "one long paragraph", "a list of dates", "bullet points only"], correctIndex: 0, explanation: "Clear structure is required." },
        { prompt: "The introduction should state the author, text and", options: ["the thesis", "the price", "the publisher's address", "the page count"], correctIndex: 0, explanation: "Name the work and give your thesis." },
        { prompt: "Each body paragraph should contain one", options: ["point with evidence and explanation", "whole chapter retold", "new thesis", "unrelated fact"], correctIndex: 0, explanation: "One point per paragraph, supported." },
        { prompt: "Retelling the story instead of analysing is called a", options: ["common weakness / heresy of paraphrase", "strength", "thesis", "quotation"], correctIndex: 0, explanation: "Paraphrase is not analysis." },
        { prompt: "Meaning may be assigned to a text only if it can be", options: ["supported by close examination of the text", "guessed", "priced", "ignored"], correctIndex: 0, explanation: "Interpretation must be grounded in the text." },
        { prompt: "If a question says 'compare two poems', you must write about", options: ["two poems", "one poem", "a novel", "the whole syllabus"], correctIndex: 0, explanation: "Obey the limits in the question." },
        { prompt: "Planning before writing helps you", options: ["organise points and evidence", "waste time", "avoid the text", "copy others"], correctIndex: 0, explanation: "A plan orders the answer." },
        { prompt: "Marks in a literature answer follow", options: ["relevance to the question", "handwriting size", "length alone", "the margin"], correctIndex: 0, explanation: "Answer the question asked." },
        { prompt: "The conclusion of an answer should", options: ["draw the points together, no new ones", "add a new argument", "retell the plot", "list prices"], correctIndex: 0, explanation: "Conclude; do not open new points." },
        { prompt: "A topic sentence in a body paragraph states", options: ["the paragraph's point", "the author's birthday", "a random quote", "the mark"], correctIndex: 0, explanation: "It announces the point." },
        { prompt: "Reviewing past papers reveals the exam's", options: ["question types and mark distribution", "secret answers", "future questions exactly", "nothing"], correctIndex: 0, explanation: "Patterns and mark schemes emerge." },
        { prompt: "'To what extent' in a question asks you to", options: ["weigh and judge how far something is true", "list everything", "define a word", "retell events"], correctIndex: 0, explanation: "It calls for evaluation." },
        { prompt: "Writing everything you know, ignoring the command word, loses marks for", options: ["relevance", "neatness", "spelling", "length"], correctIndex: 0, explanation: "Off-question material is not credited." },
        { prompt: "Managing the clock across all questions prevents", options: ["running out of time", "good planning", "clear theses", "strong evidence"], correctIndex: 0, explanation: "Time management protects every answer." },
        { prompt: "The strongest answers move from what happens to", options: ["what it means and how", "the price", "the cover", "the index"], correctIndex: 0, explanation: "Analysis explains meaning and method." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the three things a strong WASSCE literary answer must have.", answerKey: "A clear, debatable thesis (your interpretation); quotations/references as evidence from the text; and a clear structure of introduction, body paragraphs and conclusion. Award marks for each (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "The first step in answering an exam question is to", options: ["underline the command word and focus", "write everything you know", "retell the plot", "name the price"], correctIndex: 0, answerKey: "Identify what the question asks. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why is retelling the plot a weak way to answer a literature question?", answerKey: "Because the task is analysis, not summary: marks are given for an argued interpretation supported by evidence (the meaning must be supported by close examination of the text). Plot summary shows reading but not analysis. Award marks for the principle.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Outline how you would plan an answer to 'Discuss the main theme of a prose text you have studied'.", answerKey: "State a thesis naming the theme and your interpretation; list 3-4 points each showing an aspect of the theme; for each point note the textual evidence (incident/quotation); order them and write intro-body-conclusion. Award marks for thesis, points, evidence and structure.", marks: 5 },
        { type: "ESSAY", prompt: "Explain, with reference to a set text you have studied, how you would answer a past WASSCE question of the form 'Examine the role of a major character'. Show your thesis, your points, your evidence, and your structure.", answerKey: "Award marks for: a clear thesis answering 'role', 5 marks; 3-4 relevant points about the character's function, 6 marks; specific textual evidence for each point, 6 marks; clear intro-body-conclusion structure, 5 marks; expression, 2 marks. Pure plot summary with no thesis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Oxnard College, Introduction to Literature and Critical Thinking) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary)
      slug: "reviewing-literary-devices",
      title: "Literary Devices",
      objective:
        "By the end of the topic, learners should be able to define and recognise the common literary devices and explain the effect each creates in a text.",
      estimatedMinutes: 150,
      notes: `## What a literary device is
- A **literary device** is a technique a writer uses to create meaning, effect or emphasis beyond the plain sense of the words.
- Reviewing devices helps you **name** what a writer is doing and **explain its effect** in an answer.

## Figurative-language devices
- **Metaphor** — figurative language describing one object as if it is another, *without* using "like" or "as".
- **Simile** — *"one thing is compared to another using the words 'like' or 'as.'"*
- **Personification** — *"giving human qualities to animals or objects for the sake of imagery."*
- **Symbolism** — *"the use of a physical object to represent an abstract idea."*
- **Hyperbole** — *"an exaggeration for rhetorical effect."*

## Sense and sound devices
- **Imagery** — *"descriptive, immersive details meant to paint a picture in the reader's mind."*
- **Alliteration** — *"multiple words in a row which start with the same sound."*

## Structural and meaning devices
- **Irony** — *"a meaning or outcome contrary to what is expected."*
- **Foreshadowing** — *"when the author gives hints about the plot developments to come."*

## Voice devices
- **Diction** — *"word choice. Paying attention to diction helps determine the tone of a literary work."*
- **Tone** — *"the attitude or mood of the work, and the style of narration."*

## How to use a device in an answer
1. **Name** the device.
2. **Quote** the words that show it.
3. **Explain the effect** — what it makes the reader see, feel or understand.

## Quick reference

| Device | What it is | Marker |
| --- | --- | --- |
| Metaphor | One thing described as another | no "like"/"as" |
| Simile | Comparison using "like"/"as" | "like"/"as" |
| Personification | Human qualities to non-human | an object acts/feels |
| Symbolism | Object standing for an idea | concrete → abstract |
| Imagery | Sensory detail | you can picture it |
| Irony | Outcome contrary to expectation | the opposite happens |
| Hyperbole | Deliberate exaggeration | impossible overstatement |

## Common errors and misconceptions
- **Naming a device without explaining its effect** — identification alone earns little.
- **Confusing metaphor and simile** — the marker is "like"/"as".
- **Calling every comparison a metaphor** — check for the comparison words first.
- **Confusing symbol and image** — an image is seen; a symbol stands for an idea.`,
      workedExample: `**Task.** Identify the devices in this line and explain each effect: *"The old house groaned like a tired man, its empty windows staring out at the sea of grass."*

**Step 1 — simile.** *"groaned like a tired man"* uses **"like"** to compare the house's sound to a tired man — a **simile**. Effect: makes the house seem weary and near its end.

**Step 2 — personification.** The house *"groaned"* and the windows *"staring"* give **human qualities** to an object — **personification**. Effect: the house feels alive and lonely.

**Step 3 — metaphor / imagery.** *"a sea of grass"* describes the grass **as** a sea, with no "like"/"as" — a **metaphor** — and paints a picture — **imagery**. Effect: suggests a vast, endless field.

**Step 4 — write it up (name → quote → effect).** *The writer personifies the house, which "groaned" and whose windows are "staring", so the building feels weary and alone; the simile "like a tired man" deepens this, and the metaphor "a sea of grass" makes the surroundings feel vast and empty.*

**Conclusion:** always go **name → quote → effect**; naming a device alone is not analysis.`,
      quiz: [
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "symbol", "theme"], correctIndex: 0, explanation: "Simile uses 'like' or 'as'." },
        { prompt: "Describing one object as another, without 'like'/'as', is a", options: ["metaphor", "simile", "pun", "rhyme"], correctIndex: 0, explanation: "Metaphor omits 'like'/'as'." },
        { prompt: "Giving human qualities to animals or objects is", options: ["personification", "alliteration", "irony", "diction"], correctIndex: 0, explanation: "Personification humanises the non-human." },
        { prompt: "A physical object representing an abstract idea is", options: ["symbolism", "hyperbole", "simile", "imagery"], correctIndex: 0, explanation: "A symbol stands for an idea." },
        { prompt: "An exaggeration for rhetorical effect is", options: ["hyperbole", "understatement", "a simile", "a rhyme"], correctIndex: 0, explanation: "Hyperbole exaggerates deliberately." },
        { prompt: "Descriptive details that paint a picture in the mind are", options: ["imagery", "diction", "irony", "meter"], correctIndex: 0, explanation: "Imagery appeals to the senses." },
        { prompt: "Several words in a row starting with the same sound is", options: ["alliteration", "assonance", "a metaphor", "a symbol"], correctIndex: 0, explanation: "Alliteration repeats initial sounds." },
        { prompt: "A meaning or outcome contrary to what is expected is", options: ["irony", "imagery", "simile", "diction"], correctIndex: 0, explanation: "Irony reverses expectation." },
        { prompt: "Hints the author gives about plot to come is", options: ["foreshadowing", "flashback", "climax", "rhyme"], correctIndex: 0, explanation: "Foreshadowing previews events." },
        { prompt: "A writer's word choice is their", options: ["diction", "margin", "price", "font"], correctIndex: 0, explanation: "Diction is word choice." },
        { prompt: "Diction helps the reader determine a work's", options: ["tone", "price", "length", "page count"], correctIndex: 0, explanation: "Word choice shapes tone." },
        { prompt: "Tone is defined as the attitude or mood of the work and the style of", options: ["narration", "printing", "binding", "pricing"], correctIndex: 0, explanation: "Tone includes the style of narration." },
        { prompt: "'Her smile was sunshine' is a", options: ["metaphor", "simile", "pun", "rhyme"], correctIndex: 0, explanation: "No 'like'/'as', so it is a metaphor." },
        { prompt: "'He ran like the wind' is a", options: ["simile", "metaphor", "symbol", "irony"], correctIndex: 0, explanation: "'like' signals a simile." },
        { prompt: "'The wind whispered through the trees' is", options: ["personification", "hyperbole", "simile", "alliteration"], correctIndex: 0, explanation: "Wind given the human act of whispering." },
        { prompt: "'I've told you a million times' is", options: ["hyperbole", "irony", "imagery", "symbol"], correctIndex: 0, explanation: "A deliberate exaggeration." },
        { prompt: "A dove used to mean peace is a", options: ["symbol", "simile", "rhyme", "pun"], correctIndex: 0, explanation: "An object standing for an idea." },
        { prompt: "'Big brown bears bound briskly' shows", options: ["alliteration", "assonance", "irony", "symbol"], correctIndex: 0, explanation: "Repeated initial 'b' sound." },
        { prompt: "To analyse a device well you should name it, quote it and", options: ["explain its effect", "price it", "count it", "ignore it"], correctIndex: 0, explanation: "Effect is the key step." },
        { prompt: "An image is something you can picture; a symbol additionally", options: ["stands for an abstract idea", "is louder", "is longer", "is cheaper"], correctIndex: 0, explanation: "Symbols carry extra meaning." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define metaphor and simile and state the one marker that distinguishes them.", answerKey: "A metaphor describes one object as another without 'like' or 'as'; a simile compares one thing to another using 'like' or 'as'. The distinguishing marker is the presence of 'like'/'as' in a simile. Award 2 per definition.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The classroom was a zoo' is an example of", options: ["metaphor", "simile", "alliteration", "hyperbole"], correctIndex: 0, answerKey: "A direct comparison with no 'like'/'as' - metaphor. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define personification and symbolism, giving one example of each.", answerKey: "Personification gives human qualities to animals or objects (e.g. 'the sun smiled'); symbolism uses a physical object to represent an abstract idea (e.g. a dove for peace). Award 2 per term with example.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why is naming a device not enough in a literary answer?", answerKey: "Because marks come from analysis: you must name the device, quote the words that show it, and explain the effect it creates on the reader's understanding or feeling. Identification alone is not analysis. Award marks for the name-quote-effect principle.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing a poem or prose passage you have studied, identify at least four literary devices the writer uses and explain the effect of each on the reader.", answerKey: "Award marks for: four devices correctly named, 8 marks; a quotation/reference for each, 6 marks; an explanation of the effect of each, 8 marks; expression, 2 marks. Devices named with no effect explained should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Writing an Analysis of a Poem, Story, or Play (Appendix 5, Literature, Critical Thinking and Writing, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book:_Literature_Critical_Thinking_and_Writing_(Lumen)/09:_Analyzing_Plays/09.1:_Appendix_5:_Writing_an_Analysis_of_a_Poem_Story_or_Play)
      slug: "past-questions-prose-poetry-drama",
      title: "Discuss Past Questions in Prose, Poetry and Drama",
      objective:
        "By the end of the topic, learners should be able to handle past-paper questions on each genre by examining the elements proper to prose, poetry and drama.",
      estimatedMinutes: 150,
      notes: `## One framework, three genres
- Every analysis follows the same spine — **introduction** (author, title, theme in a sentence or two), **body** (guide the reader through the work, analysing key moments), **conclusion** (judgement and relevance).
- *"Theme ... is that insight into human experience the author offers to readers."*
- What changes is **which elements** you foreground for each genre.

## Prose (story / novel) questions
- Examine **plot**, **character**, **setting**, **point of view**, **conflict** and **theme**.
- *"Setting and point-of-view might be more important than they are in a poem."*
- Typical questions: role of a character, a theme, the significance of the setting, the effect of the narrator.

## Poetry questions
- Foreground **form**, **imagery and metaphor**, **diction** (word connotations), **tone** and **sound**.
- Give the poem *"a total response"* — read it several times, slowly, attending to images and tone line by line.
- Typical questions: the central message, the use of imagery, the poet's attitude (tone), the effect of the form.

## Drama (play) questions
- Examine what is special to the stage: **dialogue**, **stage directions** and **staging/lighting** — things *"rarely relevant in the analysis of a story or poem."*
- Also read **conflict**, **character** and **theme** as in prose.
- Typical questions: dramatic conflict, a character's role, the use of a particular scene, dramatic irony.

## The warning for all three
- Do **not** merely paraphrase content — this is *"a common weakness in student literary analyses, especially ... of a poem or a play."*
- Always move from **what happens** to **how and why it matters**.

## Matching the answer to the genre

| Genre | Foreground these elements |
| --- | --- |
| Prose | Plot, character, setting, point of view, theme |
| Poetry | Form, imagery, metaphor, diction, tone, sound |
| Drama | Dialogue, stage directions, staging, conflict, character |

## Set texts (to be supplied by the teacher)
- Apply the framework to prescribed prose, poems and plays and to past WASSCE questions on them.
- *(Each text's specific content comes from the text itself, not invented here.)*

## Common errors and misconceptions
- **Analysing every genre the same way** — foreground the right elements.
- **Paraphrasing a poem or play** instead of analysing.
- **Ignoring point of view in prose** or **staging in drama**.
- **Skipping theme** — the insight into human experience the work offers.`,
      workedExample: `**Task.** Three past-paper style prompts, one per genre — show which elements to foreground.

**Prose prompt:** *"How does the setting shape events in a novel you have studied?"*
- Foreground **setting** (time/place) and its link to **plot** and **character**; name the setting, show two incidents it makes possible or shapes, and connect to **theme**. Setting and point of view carry weight in prose.

**Poetry prompt:** *"Examine the poet's use of imagery in a poem you have studied."*
- Give the poem a **total response** (read it several times). Foreground **imagery and metaphor** and **diction**; quote two or three images, explain what each makes the reader see/feel, and relate them to **tone** and the poem's central message.

**Drama prompt:** *"Discuss the dramatic conflict in a play you have studied."*
- Foreground **conflict**, **dialogue** and **staging**; identify the opposing forces, show how a key **scene** and the characters' **dialogue** dramatise the conflict, and link to **theme**.

**All three:** open by naming author, title and theme; in the body go **element → evidence → effect**; close with judgement — and never just retell the story.

**Conclusion:** one spine, three sets of foregrounded elements — prose (plot/character/setting/POV), poetry (imagery/diction/tone/form), drama (dialogue/staging/conflict).`,
      quiz: [
        { prompt: "Every genre analysis opens by naming author, title and", options: ["theme", "price", "publisher", "page count"], correctIndex: 0, explanation: "State the theme in a sentence or two." },
        { prompt: "Theme is the insight into human experience the author offers to", options: ["readers", "printers", "editors", "sellers"], correctIndex: 0, explanation: "Theme speaks to readers." },
        { prompt: "In prose questions you foreground plot, character, setting, point of view and", options: ["theme", "meter", "rhyme", "stage lighting"], correctIndex: 0, explanation: "These are prose elements." },
        { prompt: "Compared with a poem, in prose the setting and point of view are often", options: ["more important", "less important", "irrelevant", "identical"], correctIndex: 0, explanation: "They carry more weight in prose." },
        { prompt: "For poetry you should give the poem", options: ["a total response (several readings)", "one quick glance", "no reading", "only the last line"], correctIndex: 0, explanation: "Poetry needs repeated, slow reading." },
        { prompt: "Poetry questions foreground form, imagery, metaphor, tone and", options: ["diction/sound", "stage directions", "chapters", "the price"], correctIndex: 0, explanation: "Diction and sound matter in verse." },
        { prompt: "Drama analysis attends to dialogue, staging and", options: ["stage directions", "chapter titles", "page numbers", "the index"], correctIndex: 0, explanation: "These are special to the stage." },
        { prompt: "Stage directions and lighting are rarely relevant when analysing a", options: ["story or poem", "play", "scene", "monologue"], correctIndex: 0, explanation: "They belong to drama." },
        { prompt: "The common weakness across genres is", options: ["paraphrasing instead of analysing", "quoting the text", "stating a thesis", "planning"], correctIndex: 0, explanation: "Paraphrase is not analysis." },
        { prompt: "A question on 'the role of the narrator' belongs to", options: ["prose", "poetry", "drama", "none"], correctIndex: 0, explanation: "Point of view is a prose element." },
        { prompt: "A question on 'dramatic conflict' belongs to", options: ["drama", "poetry", "prose", "the dictionary"], correctIndex: 0, explanation: "Conflict staged is a drama question." },
        { prompt: "A question on 'the poet's use of imagery' belongs to", options: ["poetry", "prose", "drama", "grammar"], correctIndex: 0, explanation: "Imagery is foregrounded in poetry." },
        { prompt: "In the body of an answer you should go", options: ["element → evidence → effect", "price → cover → date", "random facts", "plot only"], correctIndex: 0, explanation: "Analyse with evidence and effect." },
        { prompt: "Reading a poem line by line, you attend to images and", options: ["tone", "the price", "the binding", "the margin"], correctIndex: 0, explanation: "Images and tone guide poetry reading." },
        { prompt: "In a play, opposing forces create the", options: ["conflict", "rhyme", "meter", "margin"], correctIndex: 0, explanation: "Conflict drives drama." },
        { prompt: "Setting in prose means", options: ["the time and place of events", "the font", "the price", "the rhyme"], correctIndex: 0, explanation: "Setting is time and place." },
        { prompt: "The conclusion of a genre analysis gives", options: ["judgement and relevance", "a new thesis", "the plot again", "the price"], correctIndex: 0, explanation: "Conclude with evaluation." },
        { prompt: "Analysing every genre the same way is", options: ["an error — foreground the right elements", "best practice", "required", "impossible"], correctIndex: 0, explanation: "Each genre needs its own elements." },
        { prompt: "The spine of any analysis is", options: ["introduction, body, conclusion", "title, price, index", "quiz, test, exam", "plot only"], correctIndex: 0, explanation: "The same structure serves all genres." },
        { prompt: "Dialogue chiefly carries the story in", options: ["drama", "the novel", "the lyric poem", "the essay"], correctIndex: 0, explanation: "Drama works through dialogue." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the elements you would foreground when answering a question on (a) prose and (b) drama.", answerKey: "Prose: plot, character, setting, point of view, conflict, theme (setting and POV carry weight). Drama: dialogue, stage directions, staging/lighting, conflict, character, theme. Award up to 3 per genre.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Giving a poem 'a total response' means", options: ["reading it slowly several times, attending to image and tone", "reading only the first line", "pricing it", "skipping it"], correctIndex: 0, answerKey: "Poetry requires repeated, careful reading. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Which genre makes stage directions and lighting relevant, and why?", answerKey: "Drama, because a play is written to be performed: stage directions and lighting shape how the action and conflict are staged, serving functions rarely relevant in a story or poem. Award marks for genre and reason.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why paraphrase is a weakness in answers on poetry and drama.", answerKey: "Because the task is analysis, not retelling: a poem or play must be examined for how its elements (imagery, diction, dialogue, staging) create meaning and effect; simply restating the content shows no analysis and is a common student weakness. Award marks for the principle.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing one prose text, one poem and one play you have studied, explain how a past-paper question on each would require you to foreground different elements, and show how you would structure each answer.", answerKey: "Award marks for: prose elements foregrounded (plot/character/setting/POV/theme), 6 marks; poetry elements (imagery/diction/tone/form), 6 marks; drama elements (dialogue/staging/conflict), 6 marks; the shared intro-body-conclusion structure and element-evidence-effect method, 4 marks; expression, 2 marks. Treating all three identically should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "themes-characters-exposition-tone-mood",
      title: "Themes, Characters, Exposition, Tone and Mood",
      objective:
        "By the end of the topic, learners should be able to identify and analyse a work's theme, characters, exposition, tone and mood with evidence from the text.",
      estimatedMinutes: 150,
      notes: `## Theme
- **Theme** — *"the central idea or issue conveyed by the story"* — a full idea about human experience, not a one-word topic.
- A work can carry **several themes**; state each as a sentence and support it with evidence.

## Characters
- **Character** — *"a person, or perhaps an animal, who participates in the action of the story."*
- **Protagonist** — the main character, the hero/heroine.
- **Antagonist** — the opposing force (the anti-hero/ine); need not be a villain.
- Read a character's **role** (function) and **traits** (qualities), shown through what they say, do and think.

## Exposition
- **Exposition** introduces the *"characters' backstory and key information about the setting"* at the start of a story.
- It sets up who, where and when **before** the central conflict develops.
- Exposition is the first stage of **plot**: exposition → rising action → climax → falling action → resolution.

## Tone
- **Tone** — the **attitude** of the writer or speaker toward the subject, carried by **diction** (word choice).
- Examples: bitter, affectionate, ironic, solemn.

## Mood
- **Mood** — the **feeling the work creates in the reader** (tense, calm, sorrowful, hopeful), often built through **imagery** and setting.
- Keep them apart: **tone** is the *attitude conveyed*; **mood** is the *feeling produced*.

## How they connect
- **Exposition** gives the ground; **characters** act within it; their struggle reveals the **theme**; the writer's **tone** colours the telling; and the overall effect is the reader's **mood**.

## Common errors and misconceptions
- **Stating a theme as one word** (e.g. "love") — a theme is a full idea ("love demands sacrifice").
- **Confusing tone and mood** — tone is the writer's attitude; mood is the reader's feeling.
- **Confusing protagonist and antagonist** — the antagonist is the opposing force.
- **Treating exposition as the whole plot** — it is only the opening stage.`,
      workedExample: `**Task.** Analyse this opening for exposition, character, theme, tone and mood:
*"Kollie had farmed the same tired acre since his father died, and the rains, once faithful, now came late or not at all. 'We will manage,' he told the children, though the granary stood half empty."*

**Step 1 — exposition.** The passage gives **backstory and setting**: Kollie inherited the farm after his father's death, on a tired acre where the rains have failed. This is the **exposition** — who, where, when — before the conflict deepens.

**Step 2 — character.** Kollie is the **protagonist**; the failing land and weather act as the **antagonist** (an opposing force). His **traits** — responsible, hopeful, protective — show in *"We will manage"* despite the empty granary.

**Step 3 — theme.** A full idea: *"people hold on to hope and duty even when the land and circumstances turn against them."* Supported by the gap between his words and the half-empty granary.

**Step 4 — tone.** The narrator's **tone** is sober and sympathetic — the plain diction (*tired acre, half empty*) conveys quiet concern without melodrama.

**Step 5 — mood.** The images of late rains and a half-empty granary create an **anxious, uncertain mood** in the reader.

**Conclusion:** name each element and tie it to **evidence** — exposition (backstory/setting), character (role + traits), theme (a full idea), tone (attitude), mood (reader's feeling).`,
      quiz: [
        { prompt: "The central idea or issue conveyed by a story is its", options: ["theme", "exposition", "tone", "price"], correctIndex: 0, explanation: "Theme is the central idea." },
        { prompt: "A theme is best stated as", options: ["a full idea about life", "one word", "a price", "a date"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "A person or animal who participates in the action is a", options: ["character", "setting", "theme", "margin"], correctIndex: 0, explanation: "That is the definition of character." },
        { prompt: "The main character, the hero or heroine, is the", options: ["protagonist", "antagonist", "narrator", "author"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The opposing force to the protagonist is the", options: ["antagonist", "protagonist", "chorus", "editor"], correctIndex: 0, explanation: "The antagonist opposes." },
        { prompt: "Backstory and key setting information at the start is the", options: ["exposition", "climax", "resolution", "rhyme"], correctIndex: 0, explanation: "Exposition opens the plot." },
        { prompt: "Exposition is the first stage of", options: ["plot", "rhyme", "meter", "diction"], correctIndex: 0, explanation: "Plot begins with exposition." },
        { prompt: "The attitude of the writer toward the subject is the", options: ["tone", "mood", "plot", "setting"], correctIndex: 0, explanation: "Tone is the attitude conveyed." },
        { prompt: "Tone is carried mainly by", options: ["diction", "the price", "the font", "page count"], correctIndex: 0, explanation: "Word choice conveys tone." },
        { prompt: "The feeling a work creates in the reader is the", options: ["mood", "tone", "theme", "margin"], correctIndex: 0, explanation: "Mood is the reader's feeling." },
        { prompt: "Mood is often built through", options: ["imagery and setting", "the price", "the index", "the font"], correctIndex: 0, explanation: "Imagery and setting shape mood." },
        { prompt: "Tone differs from mood: tone is the attitude conveyed, mood is the", options: ["feeling produced", "price", "cover", "date"], correctIndex: 0, explanation: "Mood is the reader's feeling." },
        { prompt: "An antagonist must be", options: ["an opposing force (not always a villain)", "always a villain", "the hero", "the narrator"], correctIndex: 0, explanation: "It is any opposing force." },
        { prompt: "A rich work usually carries", options: ["several themes", "no theme", "one word only", "a price"], correctIndex: 0, explanation: "Works hold multiple themes." },
        { prompt: "'Love' alone is a topic; 'love demands sacrifice' is a", options: ["theme", "character", "setting", "tone"], correctIndex: 0, explanation: "A theme is a full idea." },
        { prompt: "A character's qualities (proud, loyal) are their", options: ["traits", "roles", "prices", "fonts"], correctIndex: 0, explanation: "Traits are qualities." },
        { prompt: "A character's function in the story is their", options: ["role", "trait", "margin", "price"], correctIndex: 0, explanation: "Role is function." },
        { prompt: "Exposition sets up who, where and when before the", options: ["conflict develops", "price is set", "book is printed", "index is made"], correctIndex: 0, explanation: "It precedes the rising conflict." },
        { prompt: "A bitter or affectionate attitude in the telling is the", options: ["tone", "mood", "plot", "setting"], correctIndex: 0, explanation: "These describe tone." },
        { prompt: "A tense or hopeful feeling in the reader is the", options: ["mood", "tone", "theme", "diction"], correctIndex: 0, explanation: "These describe mood." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define theme and explain why it should not be stated in a single word.", answerKey: "Theme is the central idea or issue a work conveys - an insight into human experience. A single word (e.g. 'love') names only a topic; the theme must be a full idea ('love demands sacrifice') that can be supported with evidence. Award marks for definition and the one-word point.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The opening section that gives backstory and setting is the", options: ["exposition", "climax", "resolution", "tone"], correctIndex: 0, answerKey: "Exposition. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish tone from mood, giving an example of each.", answerKey: "Tone is the writer's/speaker's attitude to the subject, carried by diction (e.g. bitter, affectionate); mood is the feeling created in the reader, built through imagery/setting (e.g. tense, hopeful). Award 2 per term with example.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish protagonist from antagonist and note one thing the antagonist need not be.", answerKey: "The protagonist is the main character (hero/heroine); the antagonist is the opposing force. The antagonist need not be a villain and need not even be a person (can be nature, society, circumstance). Award 2 per term, +1 for the qualification.", marks: 4 },
        { type: "ESSAY", prompt: "For a prose text you have studied, analyse its exposition, a major character, a central theme, and its tone and mood, supporting each with evidence.", answerKey: "Award marks for: exposition (backstory/setting) identified, 4 marks; a character's role and traits, 6 marks; a theme stated as a full idea and developed, 6 marks; tone and mood distinguished with evidence, 6 marks; expression, 2 marks. Confusing tone with mood, or theme stated as one word, loses those marks; plot summary should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Matters of Grammar, Mechanics, and Style (Composing Ourselves and Our World, Burrows/Fowler/Locklear) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Book:_Composing_Ourselves_and_our_World_(Burrows_Fowler_and_Locklear)/01:_Part_I-_The_Composition_Process/06:_Revising_and_Recomposing/6.02:_Matters_of_Grammar_Mechanics_and_Style)
      slug: "content-expression-mechanics-style",
      title: "Review Content, Expression, Mechanics and Style",
      objective:
        "By the end of the topic, learners should be able to review their writing for content, expression, mechanics and style, distinguishing higher-order from lower-order concerns.",
      estimatedMinutes: 150,
      notes: `## The four marks of a good answer
- WASSCE and most literature marking reward four things: **content**, **expression/organisation**, **mechanics** and **style**.
- Revise in that order — fix **content and organisation first** (higher-order), then **mechanics** (lower-order).

## Content (higher-order)
- **Content** is *what* you say — the ideas, the argument, the relevance to the question, the evidence.
- Check: is there a **thesis**? Does every point **answer the question**? Is each point **supported by the text**?

## Expression and organisation (higher-order)
- **Expression/organisation** is how the ideas are **arranged and connected** — paragraphing, logical order, linking words.
- Check: one point per paragraph, a clear **beginning–middle–end**, smooth transitions.

## Mechanics (lower-order)
- **Mechanics** are the technical building blocks of sentences: **punctuation, capitalization and spelling**.
- Errors can *"not only make your draft appear sloppy, but ... also change the meaning of your sentences and confuse your reader."*
- Check: full stops, commas, capital letters, correct spelling, subject–verb agreement, pronoun reference.

## Style
- **Style** is *"an incredibly important aspect of writing"* — crafting *"engaging, dynamic prose."*
- It covers **voice, sentence variety, active voice, point of view, description and figurative choices** — and **diction** and **clarity**.
- Check: vary sentence length; prefer clear, concrete words; cut wordiness; keep an appropriate formal tone.

## Order of revision

| Order | Concern | Ask |
| --- | --- | --- |
| 1 | Content | Is the argument there, relevant and supported? |
| 2 | Expression/organisation | Are ideas ordered and connected? |
| 3 | Style | Is the prose clear, varied and appropriate? |
| 4 | Mechanics | Is punctuation, spelling, grammar correct? |

## Common errors and misconceptions
- **Polishing mechanics before fixing content** — you may perfect sentences you later cut.
- **Treating grammar as merely cosmetic** — errors can change meaning.
- **Confusing style with mechanics** — style is how you craft prose; mechanics are punctuation/spelling.
- **No linking between paragraphs** — weak organisation loses expression marks.`,
      workedExample: `**Task.** Review this exam sentence for all four concerns: *"the writer shows poverty, it is a theme, the charecter suffer alot and this is bad."*

**Step 1 — content (higher-order).** The idea (poverty as a theme) is relevant but **unsupported** — there is no evidence and no explanation of *how* the writer shows it. Fix first: add a reference and an explanation.

**Step 2 — expression/organisation.** The sentence is a **run-on** joining three ideas with commas. Split into ordered points: claim → evidence → effect.

**Step 3 — style.** *"this is bad"* is vague and informal; *"a lot"* is weak. Replace with precise, formal diction: *"this deepens the reader's sense of injustice."*

**Step 4 — mechanics.** Correct spelling (*charecter → character*, *alot → a lot*), agreement (*character suffer → character suffers*), and punctuation (comma splice → full stops).

**Revised:** *"The writer makes poverty a central theme. Through the character's constant hardship — [reference from the text] — the reader is shown how poverty strips away dignity, deepening the sense of injustice."*

**Conclusion:** revise **content → expression → style → mechanics**; higher-order concerns first, because mechanics cannot save an answer that does not argue and support its point.`,
      quiz: [
        { prompt: "Content in an answer refers to", options: ["the ideas, argument and evidence", "the punctuation", "the handwriting", "the margin"], correctIndex: 0, explanation: "Content is what you say." },
        { prompt: "Mechanics include punctuation, capitalization and", options: ["spelling", "theme", "plot", "price"], correctIndex: 0, explanation: "Mechanics are the technical building blocks." },
        { prompt: "You should revise for content before", options: ["mechanics", "thinking", "reading", "planning"], correctIndex: 0, explanation: "Higher-order concerns come first." },
        { prompt: "Content and organisation are", options: ["higher-order concerns", "lower-order concerns", "irrelevant", "the same as spelling"], correctIndex: 0, explanation: "They are fixed first." },
        { prompt: "Grammar and mechanics are", options: ["lower-order (local) concerns", "higher-order concerns", "never checked", "the thesis"], correctIndex: 0, explanation: "They are local, checked later." },
        { prompt: "Grammatical errors can", options: ["change the meaning and confuse the reader", "never matter", "improve clarity", "add marks"], correctIndex: 0, explanation: "Errors can alter meaning." },
        { prompt: "Style is about crafting", options: ["engaging, dynamic prose", "the price", "the cover", "the index"], correctIndex: 0, explanation: "Style is how prose is crafted." },
        { prompt: "Expression/organisation concerns how ideas are", options: ["arranged and connected", "priced", "printed", "bound"], correctIndex: 0, explanation: "Organisation orders and links ideas." },
        { prompt: "A run-on sentence is a fault of", options: ["mechanics/expression", "content", "theme", "plot"], correctIndex: 0, explanation: "It is a sentence-level error." },
        { prompt: "Varying sentence length is a matter of", options: ["style", "spelling", "the price", "the margin"], correctIndex: 0, explanation: "Style includes sentence variety." },
        { prompt: "Polishing mechanics before fixing content risks", options: ["perfecting sentences you later cut", "better content", "a stronger thesis", "nothing"], correctIndex: 0, explanation: "Fix ideas first." },
        { prompt: "Diction (word choice) belongs to", options: ["style", "mechanics only", "the margin", "the price"], correctIndex: 0, explanation: "Style includes diction." },
        { prompt: "Subject-verb agreement is a matter of", options: ["grammar/mechanics", "content", "theme", "mood"], correctIndex: 0, explanation: "Agreement is grammatical." },
        { prompt: "Linking words between paragraphs improve", options: ["expression/organisation", "spelling", "the price", "the font"], correctIndex: 0, explanation: "Transitions aid organisation." },
        { prompt: "Content marks depend most on", options: ["relevance and support", "neat handwriting", "page count", "the cover"], correctIndex: 0, explanation: "Relevant, supported ideas earn content marks." },
        { prompt: "Clarity and concision are part of", options: ["style", "mechanics", "theme", "plot"], correctIndex: 0, explanation: "Style aims for clear, concise prose." },
        { prompt: "The correct revision order is", options: ["content → expression → style → mechanics", "mechanics → content", "style → content", "mechanics only"], correctIndex: 0, explanation: "Higher-order first." },
        { prompt: "Treating grammar as merely cosmetic is", options: ["a mistake — it can change meaning", "correct", "required", "stylish"], correctIndex: 0, explanation: "Grammar can alter meaning." },
        { prompt: "An appropriate formal tone in an exam answer is a matter of", options: ["style", "spelling", "the price", "the margin"], correctIndex: 0, explanation: "Register/tone is stylistic." },
        { prompt: "Confusing style with mechanics is an error because style is how you craft prose while mechanics are", options: ["punctuation and spelling", "ideas", "arguments", "evidence"], correctIndex: 0, explanation: "They are different levels." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four concerns a good exam answer is reviewed for, and say which are higher-order.", answerKey: "Content, expression/organisation, style and mechanics. Content and expression/organisation are higher-order (fixed first); style and mechanics are lower-order/local. Award marks for naming all four and correctly grouping them.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Punctuation, capitalization and spelling are matters of", options: ["mechanics", "content", "theme", "plot"], correctIndex: 0, answerKey: "Mechanics. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why should content be revised before mechanics?", answerKey: "Because content is a higher-order concern: an answer must first argue and support a relevant point. Perfecting punctuation and spelling in sentences that may later be cut or rewritten wastes effort; mechanics cannot rescue an answer that does not say anything relevant. Award marks for the higher-order-first principle.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between style and mechanics.", answerKey: "Style is how you craft prose - voice, sentence variety, diction, clarity, figurative choices - to make it engaging and clear; mechanics are the technical building blocks (punctuation, capitalization, spelling) and grammar. Award 2 per term.", marks: 4 },
        { type: "ESSAY", prompt: "Take a weak paragraph (your own or given) and explain, step by step, how you would improve its content, expression, style and mechanics, in the right order.", answerKey: "Award marks for: fixing content first (relevance, thesis, evidence), 6 marks; improving expression/organisation (ordering and linking), 6 marks; improving style (clarity, diction, sentence variety), 6 marks; correcting mechanics last (punctuation, spelling, grammar), 4 marks; expression, 2 marks. Starting with mechanics or ignoring content should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Oxnard College, Introduction to Literature and Critical Thinking) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary)
      slug: "drill-literary-devices-with-examples",
      title: "Drill for Literary Devices Using Examples",
      objective:
        "By the end of the topic, learners should be able to pick out literary devices from worked examples and state the effect of each quickly and accurately.",
      estimatedMinutes: 150,
      notes: `## Purpose of the drill
- Exam questions often give a line or passage and ask you to **spot the device** and **state its effect**.
- The drill builds speed: see the words → name the device → say the effect, using the **name → quote → effect** routine.

## Worked examples by device
- **Simile** — *"Her eyes shone like stars."* → comparison with "like" → makes her eyes seem bright and admired.
- **Metaphor** — *"The world is a stage."* → one thing described as another, no "like"/"as" → suggests life is a performance.
- **Personification** — *"The storm raged and screamed all night."* → human acts given to a storm → makes nature seem violent and alive.
- **Symbolism** — *"She wore black to the wedding."* → black (object) stands for grief/disapproval → hints at hidden sorrow.
- **Hyperbole** — *"I've waited here forever."* → impossible exaggeration → stresses impatience.
- **Imagery** — *"The ripe mangoes glowed gold in the market dust."* → sensory detail → the reader can see the scene.
- **Alliteration** — *"the silver stream slid softly"* → repeated initial 's' → a smooth, flowing sound.
- **Irony** — *"a fire station burns down"* → outcome contrary to expectation → highlights life's contradictions.
- **Foreshadowing** — *"Little did she know it was the last time"* → a hint of events to come → builds suspense.

## The drill routine
1. Read the words and ask: **is one thing compared to another?** (metaphor/simile) — check for "like"/"as".
2. **Is a non-human thing acting human?** (personification)
3. **Does an object stand for an idea?** (symbol) **Is a detail just vivid?** (imagery)
4. **Is it a deliberate overstatement?** (hyperbole)
5. **Is the sound repeated?** (alliteration) **Is the outcome the opposite of expected?** (irony)
6. Then: **quote** the words and **state the effect**.

## Quick-spot table

| Clue in the words | Likely device |
| --- | --- |
| "like" / "as" | Simile |
| X is Y (no "like"/"as") | Metaphor |
| Object does a human act | Personification |
| Object stands for an idea | Symbolism |
| Impossible exaggeration | Hyperbole |
| Vivid sense detail | Imagery |
| Repeated first sound | Alliteration |
| Opposite of expected | Irony |

## Common errors and misconceptions
- **Spotting but not explaining** — always add the effect.
- **Mislabelling metaphor as simile** — the "like"/"as" test comes first.
- **Calling all vivid detail "symbolism"** — a symbol must stand for an idea.
- **Guessing without quoting** — point to the exact words.`,
      workedExample: `**Task.** Drill this short passage — spot every device and state its effect:
*"The tired town sighed in the heat. Dust lay thick as a blanket on every roof, and the one dry well — empty as a promise — waited for rain that never came. 'This heat will last a thousand years,' the old man said."*

**Step 1 — personification.** *"The tired town sighed"* — a town given human weariness and breath → the place feels exhausted.

**Step 2 — simile (×2).** *"thick as a blanket"* and *"empty as a promise"* both use **"as"** → the dust feels smothering; the well feels hopelessly, bitterly empty.

**Step 3 — imagery.** *"Dust lay thick ... on every roof"* → vivid sense detail → the reader sees and feels the heat and dryness.

**Step 4 — symbolism.** The **dry well** stands for lost hope / barren times → more than a well, it represents the town's despair.

**Step 5 — hyperbole.** *"last a thousand years"* → impossible exaggeration → stresses how unbearable the heat feels.

**Step 6 — write one up (name → quote → effect).** *The simile "empty as a promise" compares the dry well to a broken vow, so the well becomes a symbol of the town's lost hope; the exaggeration "a thousand years" conveys the people's despair.*

**Conclusion:** run the routine — compare? human act? object-for-idea? exaggeration? sound? opposite outcome? — then **quote and explain the effect** every time.`,
      quiz: [
        { prompt: "'Her eyes shone like stars' is a", options: ["simile", "metaphor", "symbol", "hyperbole"], correctIndex: 0, explanation: "'like' signals a simile." },
        { prompt: "'The world is a stage' is a", options: ["metaphor", "simile", "irony", "alliteration"], correctIndex: 0, explanation: "A comparison with no 'like'/'as'." },
        { prompt: "'The storm screamed all night' is", options: ["personification", "hyperbole", "simile", "symbol"], correctIndex: 0, explanation: "A storm given a human act." },
        { prompt: "Black clothing standing for grief is", options: ["symbolism", "imagery", "simile", "irony"], correctIndex: 0, explanation: "An object stands for an idea." },
        { prompt: "'I've waited here forever' is", options: ["hyperbole", "imagery", "simile", "symbol"], correctIndex: 0, explanation: "A deliberate exaggeration." },
        { prompt: "'Ripe mangoes glowed gold in the dust' is chiefly", options: ["imagery", "irony", "hyperbole", "alliteration"], correctIndex: 0, explanation: "Vivid sense detail." },
        { prompt: "'The silver stream slid softly' shows", options: ["alliteration", "irony", "symbol", "hyperbole"], correctIndex: 0, explanation: "Repeated initial 's' sound." },
        { prompt: "A fire station burning down is an example of", options: ["irony", "simile", "imagery", "symbol"], correctIndex: 0, explanation: "Outcome contrary to expectation." },
        { prompt: "'Little did she know it was the last time' is", options: ["foreshadowing", "flashback", "climax", "simile"], correctIndex: 0, explanation: "A hint of events to come." },
        { prompt: "The first test to run on a comparison is", options: ["check for 'like'/'as'", "count the words", "read the price", "skip it"], correctIndex: 0, explanation: "That separates simile from metaphor." },
        { prompt: "'Empty as a promise' is a", options: ["simile", "metaphor", "symbol", "irony"], correctIndex: 0, explanation: "'as' makes it a simile." },
        { prompt: "Spotting a device without stating the effect loses marks because analysis needs the", options: ["effect", "price", "font", "margin"], correctIndex: 0, explanation: "Always explain the effect." },
        { prompt: "A dry well representing lost hope is a", options: ["symbol", "simile", "rhyme", "pun"], correctIndex: 0, explanation: "It stands for an idea." },
        { prompt: "An object doing a human act signals", options: ["personification", "simile", "irony", "hyperbole"], correctIndex: 0, explanation: "Personification humanises objects." },
        { prompt: "Calling all vivid detail 'symbolism' is", options: ["a mistake — a symbol must stand for an idea", "correct", "required", "impossible"], correctIndex: 0, explanation: "Imagery is not automatically a symbol." },
        { prompt: "The routine ends with quoting the words and", options: ["stating the effect", "pricing it", "printing it", "numbering it"], correctIndex: 0, explanation: "Effect completes the analysis." },
        { prompt: "'The classroom roared with laughter' gives the room a human/animal act, so it is", options: ["personification", "simile", "symbol", "irony"], correctIndex: 0, explanation: "The room 'roars' - personification." },
        { prompt: "'As brave as a lion' is a", options: ["simile", "metaphor", "symbol", "hyperbole"], correctIndex: 0, explanation: "'as' marks a simile." },
        { prompt: "'Time is money' is a", options: ["metaphor", "simile", "irony", "alliteration"], correctIndex: 0, explanation: "Direct comparison, no 'like'/'as'." },
        { prompt: "The quick-spot clue 'opposite of expected' points to", options: ["irony", "imagery", "simile", "symbol"], correctIndex: 0, explanation: "Reversed expectation is irony." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three-step routine for handling a 'spot the device' question.", answerKey: "Name the device, quote the exact words that show it, and explain the effect it creates on the reader. Award marks for each step (max 5, with weight on naming the effect).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "'The angry clouds marched across the sky' is", options: ["personification", "simile", "hyperbole", "irony"], correctIndex: 0, answerKey: "Clouds given human action - personification. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Identify the device in 'as busy as a bee' and explain its effect.", answerKey: "A simile (comparison using 'as'); its effect is to stress how busy/industrious the person is by comparing them to a bee. Award marks for correct label and effect.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why the 'like/as' test should be done first when spotting a comparison.", answerKey: "Because it separates simile (uses 'like' or 'as') from metaphor (a direct comparison without them); checking the marker first prevents mislabelling, which is a common error. Award marks for the distinction and the reason.", marks: 4 },
        { type: "ESSAY", prompt: "Take a short passage you have studied or been given and drill it: identify at least five literary devices, quote each, and explain the effect of each on the reader.", answerKey: "Award marks for: five devices correctly named, 8 marks; an exact quotation for each, 6 marks; a clear effect for each, 8 marks; expression, 2 marks. Devices named with no quotation or no effect should not exceed 10.", marks: 24 },
      ],
    },
  ],
};
