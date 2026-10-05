import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 12, Semester Two, Period VI: MORE REVIEW WITH PAST EXAMINATION PAPERS,
// PROSE, POEMS, AND DRAMA. The six top-level CONTENTS items are rebuilt here as six
// topics: (1) Reviewing past examination questions on selected poems, novels and
// plays; (2) Survey of literary devices; (3) Discuss past questions in prose, poetry
// and drama; (4) Discuss themes, characters, exposition, tone, mood and plots;
// (5) Content, expression, mechanics and style; (6) Drill for literary devices using
// examples. All literary and composition concepts are sourced from LibreTexts
// (Humanities / Composition). The syllabus names set texts (Faceless by Amma Darko,
// Lonely Days by Bayo Adebowale, Native Son by Richard Wright, The Castle of Otranto
// by Horace Walpole, Othello by Shakespeare, The Rain and the Night by Wilton
// Sankawulo) and past WASSCE papers; set-text-specific facts are NOT invented here —
// the transferable exam and analysis skills are taught, and the texts/papers flagged.
export const literatureG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "More Review with Past Examination Papers, Prose, Poems and Drama",
  summary:
    "Period VI of the MoE Grade 12 Literature syllabus. Its six CONTENTS items are taught as six topics: reviewing past questions on selected poems, novels and plays; surveying literary devices; handling past questions on prose, poetry and drama; analysing themes, characters, exposition, tone, mood and plots; reviewing content, expression, mechanics and style; and drilling literary devices with examples — final exam-review applied to the set texts and past WASSCE papers.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Writing an Analysis of a Poem, Story, or Play (Appendix 5, Literature, Critical Thinking and Writing, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book:_Literature_Critical_Thinking_and_Writing_(Lumen)/09:_Analyzing_Plays/09.1:_Appendix_5:_Writing_an_Analysis_of_a_Poem_Story_or_Play)
      slug: "reviewing-past-questions-poems-novels-plays",
      title: "Reviewing Past Examination Questions on Selected Poems, Novels and Plays",
      objective:
        "By the end of the topic, learners should be able to approach past WASSCE questions on each prescribed genre — poems, novels and plays — by applying the right analytical elements to each.",
      estimatedMinutes: 150,
      notes: `## A systematic review of the set texts
- The final review works **text by text and genre by genre**: selected **poems**, **novels** and **plays**.
- For each text, know its **author, title and theme**, then the **elements** the examiner may ask about.
- *"Theme ... is that insight into human experience the author offers to readers."*

## Reviewing a selected poem
- Give it *"a total response"* — several slow readings.
- Note: **subject/message**, **speaker**, **imagery and metaphor**, **diction** (word connotations), **tone**, **form** and **sound**.
- Likely questions: central message, imagery, the poet's attitude, the effect of the form.

## Reviewing a selected novel
- Note: **plot** (the series of events tied to the central conflict), **characters**, **setting**, **point of view**, **conflict** and **theme**.
- *"Setting and point-of-view might be more important than they are in a poem."*
- Likely questions: role of a character, a theme, the significance of the setting, the narrative method.

## Reviewing a selected play
- Note what is special to the stage: **dialogue**, **stage directions**, **staging/lighting**, plus **conflict**, **character** and **theme**.
- Stage directions and lighting *"serve functions rarely relevant in the analysis of a story or poem."*
- Likely questions: dramatic conflict, a character's role, a key scene, dramatic irony.

## A review checklist per text
1. **Author and title** — fixed facts.
2. **One-sentence theme** — the insight the work offers.
3. **Three key moments** — incidents an answer can cite as evidence.
4. **Main characters** — roles and traits.
5. **Standout devices/elements** — what the examiner is likely to test.

## Set texts (to be supplied by the teacher)
- Build the checklist for each prescribed poem, novel and play (e.g. *Faceless*, *Lonely Days*, *Native Son*, *The Castle of Otranto*, *Othello*, *The Rain and the Night*) and for past WASSCE questions on them.
- *(Each text's specific content comes from the text itself, not invented here.)*

## Common errors and misconceptions
- **Reviewing only the plot** — also prepare characters, theme and devices.
- **Using the same elements for every genre** — poems, novels and plays differ.
- **No evidence ready** — have key incidents/quotations prepared.
- **Ignoring theme** — examiners test the work's insight, not just events.`,
      workedExample: `**Task.** Build a one-page review for one text in each genre (elements only — text content supplied by the teacher).

**A selected poem.**
- *Theme (one sentence):* [the insight the poem offers].
- *Elements to prepare:* speaker, two or three key **images/metaphors**, the **tone**, the **form/sound**, and the central message.
- *Likely question:* "Examine the poet's use of imagery" → quote images → explain effect → link to message.

**A selected novel.**
- *Theme (one sentence):* [the insight the novel offers].
- *Elements to prepare:* **plot** outline, two main **characters** (role + traits), the **setting**, the **point of view**, three key incidents.
- *Likely question:* "Discuss the role of the protagonist" → thesis on the role → three incidents as evidence → effect on theme.

**A selected play.**
- *Theme (one sentence):* [the insight the play offers].
- *Elements to prepare:* the central **conflict**, two key **scenes**, important **dialogue/stage directions**, main **characters**.
- *Likely question:* "Discuss the dramatic conflict" → name the opposing forces → cite a scene and dialogue → link to theme.

**Conclusion:** review each text with the **right elements for its genre** and keep **evidence ready** — do not rely on plot alone.`,
      quiz: [
        { prompt: "The final review works best", options: ["text by text and genre by genre", "at random", "by price", "by page count"], correctIndex: 0, explanation: "Organise the review systematically." },
        { prompt: "For each set text you should know author, title and", options: ["theme", "price", "publisher address", "font"], correctIndex: 0, explanation: "Theme is essential to prepare." },
        { prompt: "A poem deserves", options: ["a total response (several readings)", "one glance", "no reading", "only the title"], correctIndex: 0, explanation: "Poetry needs slow, repeated reading." },
        { prompt: "For a novel, prepare plot, characters, setting, point of view and", options: ["theme", "meter", "rhyme", "lighting"], correctIndex: 0, explanation: "These are prose elements." },
        { prompt: "Setting and point of view often matter more in a", options: ["novel than a poem", "poem than a novel", "list than a novel", "price than a theme"], correctIndex: 0, explanation: "They carry weight in prose." },
        { prompt: "For a play, prepare dialogue, staging, conflict, character and", options: ["theme", "rhyme scheme", "meter", "price"], correctIndex: 0, explanation: "Drama elements plus theme." },
        { prompt: "Stage directions and lighting are special to", options: ["drama", "poetry", "the novel", "the essay"], correctIndex: 0, explanation: "They belong to the stage." },
        { prompt: "Theme is the insight into human experience the author offers to", options: ["readers", "printers", "sellers", "editors"], correctIndex: 0, explanation: "Theme addresses readers." },
        { prompt: "'Three key moments' in the checklist are for", options: ["evidence an answer can cite", "pricing", "the index", "the cover"], correctIndex: 0, explanation: "Incidents serve as evidence." },
        { prompt: "Reviewing only the plot is", options: ["an error — also prepare theme, character, devices", "ideal", "required", "enough"], correctIndex: 0, explanation: "Plot alone is not enough." },
        { prompt: "Using the same elements for every genre is", options: ["a mistake", "correct", "required", "efficient"], correctIndex: 0, explanation: "Genres differ." },
        { prompt: "A likely poem question is on the central message and the use of", options: ["imagery", "stage lighting", "point of view", "chapters"], correctIndex: 0, explanation: "Imagery is foregrounded in poetry." },
        { prompt: "A likely novel question is on the role of a", options: ["character", "spotlight", "stanza", "rhyme"], correctIndex: 0, explanation: "Character and theme suit prose." },
        { prompt: "A likely play question is on the dramatic", options: ["conflict", "rhyme scheme", "meter", "stanza"], correctIndex: 0, explanation: "Conflict is central to drama." },
        { prompt: "Having key incidents and quotations ready supports", options: ["evidence in answers", "the price", "the margin", "the font"], correctIndex: 0, explanation: "Evidence must be prepared." },
        { prompt: "The checklist's one-sentence item is the", options: ["theme", "price", "author's age", "page count"], correctIndex: 0, explanation: "State the theme in a sentence." },
        { prompt: "A novel's plot is the series of events tied to the central", options: ["conflict", "price", "rhyme", "meter"], correctIndex: 0, explanation: "Plot follows the conflict." },
        { prompt: "For a play, two key scenes should be prepared as", options: ["evidence", "prices", "fonts", "margins"], correctIndex: 0, explanation: "Scenes provide evidence." },
        { prompt: "Preparing characters means knowing their roles and", options: ["traits", "prices", "fonts", "margins"], correctIndex: 0, explanation: "Role and trait together." },
        { prompt: "Examiners test a work's insight, not just its", options: ["events", "theme", "characters", "conflict"], correctIndex: 0, explanation: "Theme matters, not plot alone." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the five items in a per-text review checklist.", answerKey: "Author and title; a one-sentence theme; three key moments/incidents (as evidence); the main characters' roles and traits; and standout devices/elements likely to be tested. Award marks for each (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which elements should you foreground when reviewing a selected play?", options: ["dialogue, staging, conflict, character, theme", "rhyme scheme and meter", "chapters and index", "price and cover"], correctIndex: 0, answerKey: "Drama elements plus theme. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why should you not review a novel by its plot alone?", answerKey: "Because examiners also test characters, theme and the author's method (point of view, setting) - the insight the work offers, not just the sequence of events; an answer needs more than plot summary. Award marks for the principle.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two likely exam questions for a selected poem and the element each tests.", answerKey: "Any two of: 'the central message' (theme/subject); 'the poet's use of imagery' (imagery/metaphor); 'the poet's attitude' (tone); 'the effect of the form' (form/sound). Award 2 per valid question-element pair.", marks: 4 },
        { type: "ESSAY", prompt: "Choose one poem, one novel and one play you have studied and explain how you would prepare a review of each for the examination, naming the elements you would foreground and the evidence you would ready.", answerKey: "Award marks for: poem review (speaker/imagery/tone/form + message), 6 marks; novel review (plot/character/setting/POV/theme), 6 marks; play review (conflict/dialogue/staging/character/theme), 6 marks; evidence prepared for each (key moments/quotations), 4 marks; expression, 2 marks. Plot-only preparation should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Oxnard College, Introduction to Literature and Critical Thinking) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary)
      slug: "survey-of-literary-devices",
      title: "Survey of Literary Devices",
      objective:
        "By the end of the topic, learners should be able to survey and classify the main literary devices by the kind of effect they create.",
      estimatedMinutes: 150,
      notes: `## Surveying the devices by family
- A **survey** groups devices by the kind of work they do, so you can recall and apply them quickly.
- Four families: **comparison**, **sense/sound**, **meaning/structure**, **voice**.

## Comparison devices
- **Metaphor** — one object described as another, without "like"/"as".
- **Simile** — *"one thing is compared to another using the words 'like' or 'as.'"*
- **Personification** — *"giving human qualities to animals or objects for the sake of imagery."*
- **Symbolism** — *"the use of a physical object to represent an abstract idea."*

## Sense and sound devices
- **Imagery** — *"descriptive, immersive details meant to paint a picture in the reader's mind."*
- **Alliteration** — *"multiple words in a row which start with the same sound."*

## Meaning and structure devices
- **Irony** — *"a meaning or outcome contrary to what is expected."*
- **Foreshadowing** — *"when the author gives hints about the plot developments to come."*
- **Hyperbole** — *"an exaggeration for rhetorical effect."*

## Voice devices
- **Diction** — *"word choice. Paying attention to diction helps determine the tone of a literary work."*
- **Tone** — *"the attitude or mood of the work, and the style of narration."*

## The survey table

| Family | Devices | They mainly create |
| --- | --- | --- |
| Comparison | Metaphor, simile, personification, symbolism | Vivid links and deeper meaning |
| Sense/sound | Imagery, alliteration | Pictures and music in the words |
| Meaning/structure | Irony, foreshadowing, hyperbole | Surprise, suspense, emphasis |
| Voice | Diction, tone | The writer's attitude and feel |

## Using the survey in the exam
- When a passage is dense, scan **family by family**: any comparisons? any sense/sound effects? any irony or exaggeration? what is the diction/tone?
- This prevents missing devices and speeds up analysis.

## Common errors and misconceptions
- **Knowing names but not effects** — the survey links each family to an effect.
- **Treating devices as a checklist to tick** — only discuss devices that are actually present and matter.
- **Confusing comparison families** — simile/metaphor compare; symbolism stands for an idea.
- **Forgetting voice** — diction and tone shape the whole passage, not just single lines.`,
      workedExample: `**Task.** Survey this passage family by family: *"The exam loomed like a mountain. Fear whispered in his ear, and his pencil — a tiny sword — trembled. 'I will finish in two minutes,' he joked, though he had an hour."*

**Step 1 — comparison family.** *"loomed like a mountain"* (**simile**, "like"); *"Fear whispered"* (**personification**); *"his pencil — a tiny sword"* (**metaphor**, pencil as sword, standing for his small weapon against the exam — edging into **symbolism**).

**Step 2 — sense/sound family.** *"whispered"* and *"trembled"* give **imagery** of fear; soft sounds support the mood.

**Step 3 — meaning/structure family.** *"finish in two minutes ... though he had an hour"* is **irony/hyperbole** — a joking exaggeration against the real situation.

**Step 4 — voice family.** The **diction** (*loomed, trembled, joked*) and the light-then-anxious **tone** show nervous humour.

**Step 5 — write it up.** *The simile "like a mountain" and the personification "fear whispered" dramatise the boy's dread; the metaphor of the pencil as "a tiny sword" symbolises his small defence, while the ironic exaggeration "two minutes" reveals nervous humour.*

**Conclusion:** scan **family by family** (comparison, sense/sound, meaning/structure, voice) so no device is missed, then quote and explain each effect.`,
      quiz: [
        { prompt: "A survey groups literary devices by the kind of", options: ["effect they create", "price", "font", "margin"], correctIndex: 0, explanation: "Families are grouped by effect." },
        { prompt: "Metaphor, simile and personification belong to the", options: ["comparison family", "sound family", "voice family", "price family"], correctIndex: 0, explanation: "They all compare or link." },
        { prompt: "Imagery and alliteration belong to the", options: ["sense/sound family", "comparison family", "voice family", "margin family"], correctIndex: 0, explanation: "They create pictures and music." },
        { prompt: "Irony, foreshadowing and hyperbole belong to the", options: ["meaning/structure family", "comparison family", "sense family", "price family"], correctIndex: 0, explanation: "They create surprise, suspense, emphasis." },
        { prompt: "Diction and tone belong to the", options: ["voice family", "comparison family", "sound family", "price family"], correctIndex: 0, explanation: "They shape the writer's attitude and feel." },
        { prompt: "A simile compares one thing to another using", options: ["'like' or 'as'", "no words", "a price", "a rhyme"], correctIndex: 0, explanation: "Simile uses 'like'/'as'." },
        { prompt: "Symbolism uses a physical object to represent an", options: ["abstract idea", "exact copy", "price", "rhyme"], correctIndex: 0, explanation: "A symbol stands for an idea." },
        { prompt: "Imagery paints a picture in the reader's", options: ["mind", "wallet", "margin", "index"], correctIndex: 0, explanation: "Imagery appeals to the senses." },
        { prompt: "Alliteration repeats the same", options: ["starting sound", "price", "font", "margin"], correctIndex: 0, explanation: "Repeated initial sounds." },
        { prompt: "Irony is a meaning or outcome contrary to what is", options: ["expected", "priced", "printed", "bound"], correctIndex: 0, explanation: "Irony reverses expectation." },
        { prompt: "Hyperbole is an exaggeration for", options: ["rhetorical effect", "pricing", "binding", "indexing"], correctIndex: 0, explanation: "Deliberate overstatement for effect." },
        { prompt: "Diction is a writer's", options: ["word choice", "margin", "price", "font size"], correctIndex: 0, explanation: "Diction is word choice." },
        { prompt: "Tone is the attitude of the work and the style of", options: ["narration", "pricing", "printing", "binding"], correctIndex: 0, explanation: "Tone includes narration style." },
        { prompt: "Scanning a dense passage family by family prevents", options: ["missing devices", "reading", "analysing", "quoting"], correctIndex: 0, explanation: "Systematic scanning finds all devices." },
        { prompt: "Knowing device names but not effects is", options: ["a weakness the survey fixes", "ideal", "required", "complete"], correctIndex: 0, explanation: "The survey links name to effect." },
        { prompt: "Discussing devices that are not present is", options: ["an error — discuss only what matters", "good practice", "required", "efficient"], correctIndex: 0, explanation: "Do not tick a checklist blindly." },
        { prompt: "The comparison family mainly creates", options: ["vivid links and deeper meaning", "prices", "fonts", "margins"], correctIndex: 0, explanation: "Comparisons link and deepen meaning." },
        { prompt: "The meaning/structure family mainly creates", options: ["surprise, suspense, emphasis", "prices", "fonts", "margins"], correctIndex: 0, explanation: "Irony/foreshadowing/hyperbole do this." },
        { prompt: "Foreshadowing gives hints about", options: ["plot developments to come", "the price", "the cover", "the index"], correctIndex: 0, explanation: "It previews coming events." },
        { prompt: "Forgetting the voice family means ignoring", options: ["diction and tone", "the price", "the margin", "the index"], correctIndex: 0, explanation: "Voice shapes the whole passage." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four families of literary devices in a survey and one device in each.", answerKey: "Comparison (metaphor/simile/personification/symbolism); sense-sound (imagery/alliteration); meaning-structure (irony/foreshadowing/hyperbole); voice (diction/tone). Award marks for each family named with an example (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Irony and foreshadowing belong to the family that mainly creates", options: ["surprise, suspense and emphasis", "pictures and music", "the writer's attitude", "prices"], correctIndex: 0, answerKey: "Meaning/structure family. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why is a survey organised by families useful in the exam?", answerKey: "Because it lets you scan a passage family by family (comparisons? sense/sound? irony/exaggeration? diction/tone?), so you miss fewer devices and analyse faster, and it links each device to the effect it creates. Award marks for the systematic-scan and name-effect points.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish the comparison family from the voice family.", answerKey: "The comparison family (metaphor, simile, personification, symbolism) creates vivid links and deeper meaning between things; the voice family (diction, tone) shapes the writer's attitude and the feel of the whole passage. Award 2 per family.", marks: 4 },
        { type: "ESSAY", prompt: "Survey a passage you have studied, grouping the devices the writer uses into families, and explain the overall effect each family contributes.", answerKey: "Award marks for: devices correctly grouped into families, 8 marks; a quotation for each device, 6 marks; the effect each family contributes, 8 marks; expression, 2 marks. A bare list with no families or effects should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Writing a Literary Analysis Essay (Living Literature, Cosumnes River College) (https://human.libretexts.org/Courses/Cosumnes_River_College/Living_Literature:_A_Journey_Through_Stories_Drama_and_Poetry/07:_Writing_about_Literature/7.10:_Writing_a_Literary_Analysis_Essay)
      slug: "discuss-past-questions-prose-poetry-drama",
      title: "Discuss Past Questions in Prose, Poetry and Drama",
      objective:
        "By the end of the topic, learners should be able to turn a past-paper prompt on any genre into an argued essay with a thesis, textual evidence and a clear structure.",
      estimatedMinutes: 150,
      notes: `## From prompt to essay
- A literary answer is an **argumentative essay** whose purpose is **analysis** — to show the reader your interpretation of the text.
- It must meet set structural requirements: a **clear, debatable thesis statement**; a **clear introduction, body paragraphs and conclusion**; and **quotations as evidence from the text**.

## The thesis
- The **thesis statement** is *"a one to two sentence summary of your essay's main argument or interpretation."*
- It must be **debatable** (an interpretation, not a fact) and answer the **exact prompt**.
- Across genres, a good tactic is to *"identify a tension or ambiguity in the literary work"* and show how the work achieves meaning through it.

## Evidence — the "heresy of paraphrase"
- You may not assign a meaning *"unless that meaning can be supported by a close examination of the artistic elements of the text."*
- Use **quotation or precise reference**; then **explain** how it supports the thesis. Do not merely retell.

## Shaping the essay for the genre
- **Prose prompt:** build the thesis on **character, plot, setting, point of view, symbol, theme**.
- **Poetry prompt:** build the thesis on **imagery, metaphor, diction, tone, form, sound**.
- **Drama prompt:** build the thesis on **dialogue, conflict, character, staging, dramatic irony**.
- The **structure is the same**; only the elements cited change.

## Body paragraph pattern (all genres)
1. **Topic sentence** — the point (a reason the thesis is true).
2. **Evidence** — a quotation or reference.
3. **Analysis** — how the evidence proves the point and connects to the thesis.
4. **Link** — to the next point.

## Set texts (to be supplied by the teacher)
- Apply this to past WASSCE prompts on prescribed prose, poems and plays.
- *(Each text's specific content comes from the text itself, not invented here.)*

## Common errors and misconceptions
- **A thesis that is not debatable** (a fact, or the prompt restated).
- **Evidence without analysis** — quoting then moving on.
- **Analysis without evidence** — asserting meaning with no quotation.
- **One genre's elements forced onto another** — match the cited elements to the genre.`,
      workedExample: `**Task.** Turn a drama prompt into the start of an argued essay: *"To what extent is jealousy the cause of the tragedy in a play you have studied?"*

**Step 1 — debatable thesis.** *"In the chosen play, jealousy is the main but not the only cause of the tragedy: it is the flaw an antagonist exploits, so the tragedy springs from jealousy working together with deceit."* (An interpretation answering "to what extent".)

**Step 2 — identify the tension.** The prompt invites a **tension**: jealousy alone vs jealousy plus manipulation. The thesis names it.

**Step 3 — one body paragraph (topic → evidence → analysis → link).**
- *Topic sentence:* jealousy first appears as doubt the antagonist deliberately plants.
- *Evidence:* [quote/reference the scene where the doubt is sown].
- *Analysis:* the protagonist's jealousy is **triggered**, not spontaneous, showing it works with deceit — supporting the "not the only cause" half of the thesis.
- *Link:* this prepares the next point, where jealousy overrides reason.

**Step 4 — genre elements.** Because it is **drama**, the evidence is drawn from **dialogue**, a **scene** and **dramatic irony**, not from a narrator.

**Step 5 — conclude (plan).** Weigh both causes and judge the extent, as the thesis promised.

**Conclusion:** any prompt becomes an essay by setting a **debatable thesis**, arguing it in **topic → evidence → analysis → link** paragraphs with **genre-appropriate** evidence, and never paraphrasing.`,
      quiz: [
        { prompt: "A literary answer is an essay whose purpose is", options: ["analysis / interpretation", "plot summary", "biography", "pricing"], correctIndex: 0, explanation: "It argues an interpretation." },
        { prompt: "A thesis statement is a one-to-two-sentence summary of your", options: ["main argument or interpretation", "life story", "reading list", "timetable"], correctIndex: 0, explanation: "The thesis states the argument." },
        { prompt: "A good thesis must be", options: ["debatable", "a fact", "the prompt restated", "a quotation"], correctIndex: 0, explanation: "It is an arguable interpretation." },
        { prompt: "A useful tactic is to identify a tension or", options: ["ambiguity in the work", "price in the shop", "font in the book", "margin"], correctIndex: 0, explanation: "Tension/ambiguity makes a strong thesis." },
        { prompt: "Meaning may be assigned only if supported by close examination of the", options: ["text's artistic elements", "price", "cover", "index"], correctIndex: 0, explanation: "The heresy of paraphrase rule." },
        { prompt: "Evidence in an essay means", options: ["quotation or precise reference", "guessing", "opinion alone", "pricing"], correctIndex: 0, explanation: "Ground claims in the text." },
        { prompt: "A prose thesis is built on character, plot, setting, point of view and", options: ["theme/symbol", "meter", "stage lighting", "rhyme scheme"], correctIndex: 0, explanation: "These are prose elements." },
        { prompt: "A poetry thesis is built on imagery, metaphor, diction, tone and", options: ["form/sound", "stage directions", "chapters", "the price"], correctIndex: 0, explanation: "These are poetry elements." },
        { prompt: "A drama thesis is built on dialogue, conflict, character, staging and", options: ["dramatic irony", "rhyme scheme", "chapters", "the index"], correctIndex: 0, explanation: "These are drama elements." },
        { prompt: "Across genres the essay structure is", options: ["the same; the cited elements change", "completely different", "optional", "unnecessary"], correctIndex: 0, explanation: "Same spine, different elements." },
        { prompt: "A body paragraph begins with a", options: ["topic sentence", "quotation", "conclusion", "price"], correctIndex: 0, explanation: "The topic sentence states the point." },
        { prompt: "After evidence in a body paragraph comes", options: ["analysis", "the price", "a new thesis", "the index"], correctIndex: 0, explanation: "Analyse how the evidence proves the point." },
        { prompt: "Quoting then moving on without explaining is", options: ["evidence without analysis", "good practice", "a thesis", "a link"], correctIndex: 0, explanation: "Evidence must be analysed." },
        { prompt: "Asserting meaning with no quotation is", options: ["analysis without evidence", "strong", "required", "a thesis"], correctIndex: 0, explanation: "Analysis needs evidence." },
        { prompt: "A thesis that restates the prompt is", options: ["not debatable", "ideal", "required", "an interpretation"], correctIndex: 0, explanation: "It makes no argument." },
        { prompt: "'To what extent' prompts ask you to", options: ["weigh and judge how far", "list facts", "define words", "retell events"], correctIndex: 0, explanation: "They call for evaluation." },
        { prompt: "In a drama essay, evidence comes from", options: ["dialogue, scenes, dramatic irony", "a narrator's summary", "the price", "the margin"], correctIndex: 0, explanation: "Drama evidence is from the stage text." },
        { prompt: "The link at the end of a body paragraph connects to the", options: ["next point", "price", "cover", "index"], correctIndex: 0, explanation: "Links keep the argument flowing." },
        { prompt: "Forcing one genre's elements onto another is", options: ["an error", "best practice", "required", "efficient"], correctIndex: 0, explanation: "Match elements to the genre." },
        { prompt: "The conclusion should deliver what the thesis", options: ["promised", "priced", "printed", "numbered"], correctIndex: 0, explanation: "Conclude on the thesis's claim." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the structural requirements of a literary analysis essay.", answerKey: "A clear, debatable thesis statement; a clear introduction, body paragraphs and conclusion; and quotations as evidence from the text to support the thesis. Award marks for each (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "A thesis statement is best described as", options: ["a one-to-two-sentence summary of your main interpretation", "a quotation from the text", "the prompt copied out", "a plot summary"], correctIndex: 0, answerKey: "The thesis summarises the argument/interpretation. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the 'heresy of paraphrase' and what it requires of you.", answerKey: "It is the error of assigning meaning to a text without grounding it: you may not claim a meaning unless it can be supported by close examination of the text's artistic elements. It requires quoting/referencing the text and analysing it, not just retelling. Award marks for the definition and requirement.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give the four-part pattern of a body paragraph in a literary essay.", answerKey: "Topic sentence (the point) → evidence (quotation/reference) → analysis (how the evidence proves the point and links to the thesis) → link (to the next point). Award 1 per part.", marks: 4 },
        { type: "ESSAY", prompt: "Take a past-paper prompt on a text you have studied and show, step by step, how you would turn it into an argued essay: your debatable thesis, your points with genre-appropriate evidence, and your structure.", answerKey: "Award marks for: a debatable thesis answering the prompt, 6 marks; points built on the right genre elements, 6 marks; textual evidence and analysis for each, 6 marks; clear intro-body(topic-evidence-analysis-link)-conclusion structure, 4 marks; expression, 2 marks. A non-debatable thesis or evidence-free assertion should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "themes-characters-exposition-tone-mood-plots",
      title: "Themes, Characters, Exposition, Tone, Mood and Plots",
      objective:
        "By the end of the topic, learners should be able to analyse a work's theme, characters, exposition, tone, mood and plot, tracing the plot through its five stages.",
      estimatedMinutes: 150,
      notes: `## Plot and its five stages
- **Plot** — *"the series of events and character actions that relate to the central conflict."*
- Five stages:
  1. **Exposition** — introduces *"characters' backstory and key information about the setting."*
  2. **Rising action** — *"a series of related events that complicate and exacerbate the major conflicts."*
  3. **Climax** — *"the turning point of the story,"* which *"typically changes the main character's fate or reveals how the conflict will move toward resolution."*
  4. **Falling action** — *"works to unravel the tension at the core of the major conflict or conflicts."*
  5. **Resolution/denouement** — where *"the knot of conflict ... at last is loosened."*

## Plot diagram

\`\`\`svg
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plot arc">
  <polyline points="10,130 70,120 170,30 230,70 310,120" fill="none" stroke="currentColor" stroke-width="2"/>
  <circle cx="170" cy="30" r="4" fill="currentColor"/>
  <text x="8" y="145" font-size="10" fill="currentColor">Exposition</text>
  <text x="90" y="92" font-size="10" fill="currentColor">Rising</text>
  <text x="150" y="22" font-size="10" fill="currentColor">Climax</text>
  <text x="215" y="60" font-size="10" fill="currentColor">Falling</text>
  <text x="250" y="145" font-size="10" fill="currentColor">Resolution</text>
</svg>
\`\`\`

## Characters
- **Character** — *"a person, or perhaps an animal, who participates in the action."*
- **Protagonist** — the main character (hero/heroine); **antagonist** — the opposing force.
- Read **role** (function) and **traits** (qualities), revealed by speech, action and thought.

## Theme
- **Theme** — *"the central idea or issue conveyed by the story"* — a full idea about human experience; works carry several.

## Tone and mood
- **Tone** — the writer's/speaker's **attitude**, carried by **diction**.
- **Mood** — the **feeling in the reader**, built through imagery and setting.
- Keep apart: **tone** = attitude conveyed; **mood** = feeling produced.

## How they fit together
- **Plot** carries the **conflict** through five stages; **characters** drive it; their struggle reveals the **theme**; **tone** colours the telling; the result is the reader's **mood**.

## Common errors and misconceptions
- **Calling exposition the whole plot** — it is only the first stage.
- **Confusing climax with ending** — the climax is the turning point, not the resolution.
- **Confusing tone and mood** — attitude vs feeling.
- **Stating theme as one word** — a theme is a full idea.`,
      workedExample: `**Task.** Trace the plot and read the other elements in this outline: *A fisherman ignores warnings and sails out in a storm to feed his family; the boat is wrecked; he clings to the hull all night; at dawn a passing vessel saves him; he returns home changed, grateful for the life he nearly lost.*

**Step 1 — exposition.** A poor fisherman must feed his family; the setting is a dangerous sea. (Backstory + setting.)

**Step 2 — rising action.** He ignores the warnings, sails out, the storm grows, the boat is wrecked — related events that **complicate the conflict** (man vs nature).

**Step 3 — climax.** Clinging to the hull through the night is the **turning point** — his fate hangs in the balance.

**Step 4 — falling action.** At dawn a vessel approaches and the rescue begins — the tension starts to **unravel**.

**Step 5 — resolution.** He returns home safely, changed — the **knot of conflict is loosened**.

**Step 6 — other elements.** He is the **protagonist**; the storm/sea is the **antagonist**. **Theme:** *"risking everything for one's family can teach the value of life."* **Tone:** sober and admiring (diction of struggle and survival). **Mood:** tense during the storm, relieved at the rescue.

**Conclusion:** name each **plot stage**, then read **character, theme, tone and mood** with evidence — the climax is the turning point, not the ending.`,
      quiz: [
        { prompt: "Plot is the series of events and actions that relate to the central", options: ["conflict", "price", "margin", "font"], correctIndex: 0, explanation: "Plot follows the conflict." },
        { prompt: "The first stage of plot is", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition opens the plot." },
        { prompt: "Rising action is a series of events that", options: ["complicate the conflict", "end the story", "price the book", "set the margin"], correctIndex: 0, explanation: "It exacerbates the conflict." },
        { prompt: "The turning point of the story is the", options: ["climax", "exposition", "resolution", "setting"], correctIndex: 0, explanation: "The climax is the turning point." },
        { prompt: "The climax typically changes the main character's", options: ["fate", "price", "name", "font"], correctIndex: 0, explanation: "It changes fate or reveals the outcome." },
        { prompt: "Falling action works to unravel the", options: ["tension", "price", "cover", "margin"], correctIndex: 0, explanation: "It loosens the central tension." },
        { prompt: "The stage where the knot of conflict is loosened is the", options: ["resolution/denouement", "exposition", "climax", "rising action"], correctIndex: 0, explanation: "Resolution ends the conflict." },
        { prompt: "The correct order is exposition, rising action, climax, falling action,", options: ["resolution", "exposition again", "prologue", "price"], correctIndex: 0, explanation: "The standard plot arc." },
        { prompt: "A person or animal who participates in the action is a", options: ["character", "setting", "theme", "margin"], correctIndex: 0, explanation: "That defines character." },
        { prompt: "The opposing force to the protagonist is the", options: ["antagonist", "narrator", "author", "editor"], correctIndex: 0, explanation: "The antagonist opposes." },
        { prompt: "The central idea conveyed by a story is its", options: ["theme", "plot", "tone", "price"], correctIndex: 0, explanation: "Theme is the central idea." },
        { prompt: "A theme should be stated as", options: ["a full idea", "one word", "a price", "a date"], correctIndex: 0, explanation: "Themes are full ideas." },
        { prompt: "The writer's attitude to the subject is the", options: ["tone", "mood", "plot", "setting"], correctIndex: 0, explanation: "Tone is the attitude conveyed." },
        { prompt: "The feeling created in the reader is the", options: ["mood", "tone", "theme", "margin"], correctIndex: 0, explanation: "Mood is the reader's feeling." },
        { prompt: "Calling exposition the whole plot is", options: ["an error — it is only the first stage", "correct", "required", "efficient"], correctIndex: 0, explanation: "Exposition is one stage." },
        { prompt: "The climax is often confused with the", options: ["ending/resolution", "exposition", "setting", "price"], correctIndex: 0, explanation: "Climax is the turning point, not the end." },
        { prompt: "Exposition introduces backstory and key information about the", options: ["setting", "price", "index", "cover"], correctIndex: 0, explanation: "Setting and backstory open the story." },
        { prompt: "Tone is carried mainly by", options: ["diction", "price", "font", "margin"], correctIndex: 0, explanation: "Word choice conveys tone." },
        { prompt: "Mood is often built through imagery and", options: ["setting", "pricing", "binding", "indexing"], correctIndex: 0, explanation: "Imagery and setting shape mood." },
        { prompt: "A character's qualities (brave, selfish) are their", options: ["traits", "roles", "prices", "fonts"], correctIndex: 0, explanation: "Traits are qualities." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the five stages of plot in order and say what each does.", answerKey: "Exposition (backstory/setting); rising action (events that complicate the conflict); climax (the turning point that changes the fate/reveals the outcome); falling action (unravels the tension); resolution/denouement (the conflict is loosened/ended). Award 1 per stage.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "The turning point of a story is the", options: ["climax", "exposition", "resolution", "rising action"], correctIndex: 0, answerKey: "Climax. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the climax and the resolution.", answerKey: "The climax is the turning point - the peak of tension that changes the protagonist's fate or reveals how the conflict will be settled; the resolution/denouement comes after, unravelling the tension and loosening the knot of conflict to end the story. Award 2 per stage.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish tone from mood in a narrative.", answerKey: "Tone is the writer's/speaker's attitude to the subject, carried by diction (e.g. admiring, bitter); mood is the feeling created in the reader, built through imagery and setting (e.g. tense, relieved). Award 2 per term.", marks: 4 },
        { type: "ESSAY", prompt: "For a prose text you have studied, trace its plot through the five stages and show how the plot reveals the theme, naming the protagonist and antagonist and commenting on tone and mood.", answerKey: "Award marks for: the five plot stages traced with evidence, 8 marks; protagonist and antagonist identified, 4 marks; theme stated as a full idea and linked to the plot, 6 marks; tone and mood distinguished, 4 marks; expression, 2 marks. Confusing climax with ending, or plot summary without analysis, should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Matters of Grammar, Mechanics, and Style (Composing Ourselves and Our World, Burrows/Fowler/Locklear) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Book:_Composing_Ourselves_and_our_World_(Burrows_Fowler_and_Locklear)/01:_Part_I-_The_Composition_Process/06:_Revising_and_Recomposing/6.02:_Matters_of_Grammar_Mechanics_and_Style)
      slug: "content-expression-mechanics-style-review",
      title: "Content, Expression, Mechanics and Style",
      objective:
        "By the end of the topic, learners should be able to apply the content–expression–mechanics–style criteria to improve a given answer, with worked edits.",
      estimatedMinutes: 150,
      notes: `## The marking criteria, applied
- Literature answers are judged on **content**, **expression/organisation**, **mechanics** and **style**.
- Revise **higher-order first** (content, organisation), then **lower-order** (mechanics); style runs through both.

## Content — the ideas
- **Content** is *what* is said: the argument, its relevance and its textual evidence.
- Fix: add a **thesis**, make every point **answer the question**, support each with **the text**.

## Expression and organisation — the arrangement
- How ideas are **ordered and connected**: paragraphing, logical sequence, linking words.
- Fix: one point per paragraph; clear beginning–middle–end; transitions between points.

## Mechanics — the technical building blocks
- **Mechanics** = **punctuation, capitalization, spelling** (and grammar such as agreement and tense).
- Errors can *"change the meaning of your sentences and confuse your reader"* — not merely cosmetic.
- Fix: correct full stops, commas, capitals, spelling; mend run-ons and fragments; keep tense consistent.

## Style — crafting the prose
- **Style** is *"an incredibly important aspect of writing"* — making prose *"engaging, dynamic."*
- It covers **voice, sentence variety, active voice, point of view, description, figurative choices, diction and clarity**.
- Fix: vary sentence length; prefer concrete, precise words; cut wordiness; keep a formal register.

## A worked editing order

| Step | Concern | Example fix |
| --- | --- | --- |
| 1 | Content | Add a thesis and textual evidence |
| 2 | Expression | Split a run-on into ordered points, add links |
| 3 | Style | Replace vague words; vary sentences |
| 4 | Mechanics | Fix spelling, capitals, punctuation, agreement |

## Common errors and misconceptions
- **Editing mechanics first** — you may polish lines you later rewrite.
- **Thinking grammar is cosmetic** — it can change meaning.
- **Mixing up style and mechanics** — crafting prose vs punctuation/spelling.
- **No transitions** — hurts expression/organisation marks.`,
      workedExample: `**Task.** Improve this exam paragraph using the four criteria in order:
*"othello is jealous. he kill his wife. the play show jealousy is bad and iago is bad to. its very sad."*

**Step 1 — content (higher-order).** The ideas are relevant but **unsupported and unargued**. Add a thesis and evidence: *jealousy, provoked by Iago, drives the tragedy.* (Reference the text where the teacher's set text supplies it.)

**Step 2 — expression/organisation.** The sentences are **choppy and unordered**. Reorder as claim → cause → effect and link them: *because ... , so ... , and therefore ...*

**Step 3 — style.** *"bad", "to" (too), "very sad", "its"* are **vague/informal**. Replace with precise diction: *destructive, manipulative, tragic*; vary sentence length.

**Step 4 — mechanics.** Capitalise names and sentence starts (*othello → Othello*, *iago → Iago*, *he → He*); fix agreement (*he kill → he kills*, *the play show → the play shows*); correct *to → too* and *its → it is*; mend the fragments.

**Revised:** *"Othello's jealousy, deliberately provoked by Iago, drives the play's tragedy. Because Iago manipulates him with false evidence, Othello is pushed to kill Desdemona, and the play thus shows how destructive jealousy becomes when exploited by a manipulative antagonist."*

**Conclusion:** edit **content → expression → style → mechanics**; the polished final sentence is worthless if the first step — a supported argument — is skipped.`,
      quiz: [
        { prompt: "Literature answers are judged on content, expression, mechanics and", options: ["style", "price", "length", "margin"], correctIndex: 0, explanation: "Four criteria, including style." },
        { prompt: "You should revise higher-order concerns", options: ["first", "last", "never", "only on request"], correctIndex: 0, explanation: "Content and organisation come first." },
        { prompt: "Content is", options: ["what is said — the argument and evidence", "punctuation", "handwriting", "the margin"], correctIndex: 0, explanation: "Content is the ideas." },
        { prompt: "Expression/organisation is about how ideas are", options: ["ordered and connected", "priced", "printed", "bound"], correctIndex: 0, explanation: "Arrangement and linking." },
        { prompt: "Mechanics include punctuation, capitalization and", options: ["spelling", "theme", "plot", "price"], correctIndex: 0, explanation: "The technical building blocks." },
        { prompt: "Grammatical errors can", options: ["change meaning and confuse the reader", "never matter", "add marks", "improve clarity"], correctIndex: 0, explanation: "They are not merely cosmetic." },
        { prompt: "Style is about crafting prose that is", options: ["engaging and dynamic", "expensive", "long", "wide"], correctIndex: 0, explanation: "Style makes prose engaging." },
        { prompt: "Sentence variety is a matter of", options: ["style", "spelling", "the price", "the margin"], correctIndex: 0, explanation: "Style includes sentence variety." },
        { prompt: "A run-on sentence is corrected at the", options: ["expression/mechanics step", "content step", "theme step", "plot step"], correctIndex: 0, explanation: "It is a sentence-level fix." },
        { prompt: "Editing mechanics first risks", options: ["polishing lines you later rewrite", "a better thesis", "stronger content", "nothing"], correctIndex: 0, explanation: "Fix content first." },
        { prompt: "Replacing vague words with precise ones improves", options: ["style", "spelling", "the price", "the font"], correctIndex: 0, explanation: "Diction is stylistic." },
        { prompt: "Subject-verb agreement is a matter of", options: ["grammar/mechanics", "content", "theme", "mood"], correctIndex: 0, explanation: "Agreement is grammatical." },
        { prompt: "Adding a thesis and evidence fixes", options: ["content", "spelling", "capitals", "margins"], correctIndex: 0, explanation: "Content is the ideas and support." },
        { prompt: "Linking words between points improve", options: ["expression/organisation", "spelling", "the price", "the margin"], correctIndex: 0, explanation: "Transitions aid organisation." },
        { prompt: "Mixing up style and mechanics is an error because style is crafting prose while mechanics are", options: ["punctuation and spelling", "ideas", "evidence", "arguments"], correctIndex: 0, explanation: "Different levels of the work." },
        { prompt: "The correct editing order is", options: ["content, expression, style, mechanics", "mechanics first", "style, content", "mechanics only"], correctIndex: 0, explanation: "Higher-order first." },
        { prompt: "A formal register in an exam answer is part of", options: ["style", "spelling", "the price", "the margin"], correctIndex: 0, explanation: "Register is stylistic." },
        { prompt: "Capitalising names and sentence starts is part of", options: ["mechanics", "content", "theme", "plot"], correctIndex: 0, explanation: "Capitalization is mechanical." },
        { prompt: "Content marks depend most on", options: ["relevance and textual support", "neat handwriting", "page count", "the cover"], correctIndex: 0, explanation: "Relevant, supported ideas earn content marks." },
        { prompt: "A polished sentence is worthless if the writer skips", options: ["a supported argument (content)", "the margin", "the font", "the price"], correctIndex: 0, explanation: "Content is foundational." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the correct order for editing an answer and name the concern fixed at each step.", answerKey: "1 Content (argument, relevance, evidence); 2 Expression/organisation (order and links); 3 Style (clarity, diction, sentence variety); 4 Mechanics (punctuation, capitalization, spelling, grammar). Award 1 per correct step.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "'He kill his wife' needs correcting for", options: ["subject-verb agreement (kills)", "content", "theme", "style only"], correctIndex: 0, answerKey: "A grammar/mechanics fix. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why is content edited before mechanics?", answerKey: "Because content is a higher-order concern - the answer must first make a relevant, supported argument. Perfecting punctuation/spelling in sentences that may be cut or rewritten wastes effort, and mechanics cannot rescue an answer with no relevant content. Award marks for the higher-order-first principle.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish style from mechanics with an example of each.", answerKey: "Style is crafting engaging, clear prose - voice, sentence variety, diction, clarity (e.g. replacing 'bad' with 'destructive'); mechanics are the technical building blocks - punctuation, capitalization, spelling, grammar (e.g. 'othello' to 'Othello'). Award 2 per term with example.", marks: 4 },
        { type: "ESSAY", prompt: "Take a weak exam paragraph (your own or given) and rewrite it, explaining the improvements you made to its content, expression, style and mechanics in the correct order.", answerKey: "Award marks for: content fixed first (thesis, relevance, evidence), 6 marks; expression/organisation improved (ordering, links), 6 marks; style improved (diction, clarity, sentence variety), 6 marks; mechanics corrected last (punctuation, capitals, spelling, agreement), 4 marks; expression, 2 marks. Starting with mechanics or ignoring content should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Oxnard College, Introduction to Literature and Critical Thinking) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary)
      slug: "drill-literary-devices-examples-review",
      title: "Drill for Literary Devices Using Examples",
      objective:
        "By the end of the topic, learners should be able to identify mixed literary devices at speed from examples and justify each with the exact words and its effect.",
      estimatedMinutes: 150,
      notes: `## Final drill
- The exam often supplies a line and asks: *identify the device and comment on its effect.*
- Build fluency with mixed examples, using **name → quote → effect** every time.

## Mixed worked examples
- *"The moon was a ghostly galleon."* → **metaphor** (moon described as a ship, no "like"/"as") → suggests a pale, drifting, eerie moon.
- *"Peter Piper picked a peck of pickled peppers."* → **alliteration** (repeated 'p') → a playful, rhythmic sound.
- *"The flowers danced in the breeze."* → **personification** (flowers given the human act of dancing) → the garden feels joyful and alive.
- *"It was so cold I saw polar bears in the hall."* → **hyperbole** → stresses extreme cold.
- *"The long road was a ribbon of moonlight."* → **metaphor** → the road looks thin, pale and winding.
- *"Life is like a box of chocolates."* → **simile** ("like") → life is unpredictable.
- *"The thunder grumbled in the distance."* → **personification** → nature seems bad-tempered.
- *"The broken clock" that stops at the hour of a death → **symbolism** (object standing for loss/time halted).
- *"He arrived to find the party he'd dreaded had been cancelled"* → **irony** (outcome contrary to expectation).

## Self-check for each item
1. **Name** the device correctly.
2. **Quote** the exact words that prove it.
3. **State the effect** on the reader (what it makes us see/feel/understand).
4. If a comparison: did you run the **"like"/"as" test** to split simile from metaphor?

## Speed table — decide in seconds

| If the words... | Device |
| --- | --- |
| compare with "like"/"as" | Simile |
| equate X and Y directly | Metaphor |
| give an object a human act | Personification |
| use an object for an idea | Symbolism |
| exaggerate impossibly | Hyperbole |
| repeat a first sound | Alliteration |
| reverse expectation | Irony |
| paint a sense picture | Imagery |

## Common errors and misconceptions
- **Giving the device but not the effect** — the effect carries the marks.
- **Simile/metaphor mix-up** — apply the "like"/"as" test first.
- **Over-reading imagery as symbolism** — a symbol must stand for an idea.
- **No quotation** — always point to the exact words.`,
      workedExample: `**Task.** Final drill — identify every device and give its effect:
*"The engine coughed, shuddered, and died. Night pressed its black hand over the valley, and the single lamp — a brave little star — fought on. 'We'll be home in no time,' she lied, as the snow began, soft as falling feathers."*

**Step 1 — personification (×2).** *"The engine coughed ... and died"* and *"Night pressed its black hand"* give human/bodily acts to machine and night → the breakdown feels like a death; the darkness feels threatening.

**Step 2 — metaphor.** *"the single lamp — a brave little star"* equates the lamp with a star (no "like"/"as") → the small light seems heroic against the dark.

**Step 3 — irony.** *"We'll be home in no time," she lied* → the stated hope is **contrary** to the truth → highlights the hopelessness.

**Step 4 — simile.** *"soft as falling feathers"* ("as") → the snow seems gentle, almost tender — a quiet contrast to the danger.

**Step 5 — imagery.** The whole passage is rich in **sense detail** (coughing engine, black hand, lamp, feather-soft snow) → the reader sees and feels the scene.

**Step 6 — write up one (name → quote → effect).** *The personification "Night pressed its black hand over the valley" makes the darkness feel menacing, while the metaphor of the lamp as "a brave little star" sets a fragile hope against it.*

**Conclusion:** at speed, run the **speed table**, then for each device give **name → quote → effect** — the effect is where the marks are.`,
      quiz: [
        { prompt: "'The moon was a ghostly galleon' is a", options: ["metaphor", "simile", "symbol", "hyperbole"], correctIndex: 0, explanation: "Moon equated with a ship, no 'like'/'as'." },
        { prompt: "'Peter Piper picked a peck' shows", options: ["alliteration", "irony", "symbol", "hyperbole"], correctIndex: 0, explanation: "Repeated initial 'p' sound." },
        { prompt: "'The flowers danced in the breeze' is", options: ["personification", "simile", "hyperbole", "symbol"], correctIndex: 0, explanation: "Flowers given a human act." },
        { prompt: "'So cold I saw polar bears in the hall' is", options: ["hyperbole", "imagery", "simile", "irony"], correctIndex: 0, explanation: "A deliberate exaggeration." },
        { prompt: "'The road was a ribbon of moonlight' is a", options: ["metaphor", "simile", "symbol", "irony"], correctIndex: 0, explanation: "Direct comparison, no 'like'/'as'." },
        { prompt: "'Life is like a box of chocolates' is a", options: ["simile", "metaphor", "symbol", "hyperbole"], correctIndex: 0, explanation: "'like' signals a simile." },
        { prompt: "'The thunder grumbled' is", options: ["personification", "irony", "symbol", "simile"], correctIndex: 0, explanation: "Thunder given a human act." },
        { prompt: "A broken clock stopped at the hour of a death is a", options: ["symbol", "simile", "rhyme", "pun"], correctIndex: 0, explanation: "An object standing for loss/time halted." },
        { prompt: "Dreading a party that turns out cancelled is", options: ["irony", "imagery", "hyperbole", "symbol"], correctIndex: 0, explanation: "Outcome contrary to expectation." },
        { prompt: "The marks in a device question come mainly from the", options: ["effect", "price", "font", "margin"], correctIndex: 0, explanation: "Always explain the effect." },
        { prompt: "The first test on a comparison is the", options: ["'like'/'as' test", "price test", "font test", "length test"], correctIndex: 0, explanation: "It splits simile from metaphor." },
        { prompt: "'Soft as falling feathers' is a", options: ["simile", "metaphor", "symbol", "irony"], correctIndex: 0, explanation: "'as' marks a simile." },
        { prompt: "'Night pressed its black hand over the valley' is", options: ["personification", "simile", "symbol", "hyperbole"], correctIndex: 0, explanation: "Night given a bodily act." },
        { prompt: "Over-reading vivid detail as symbolism is", options: ["an error — a symbol must stand for an idea", "correct", "required", "efficient"], correctIndex: 0, explanation: "Imagery is not automatically symbolic." },
        { prompt: "Every device answer must include a", options: ["quotation of the exact words", "price", "font choice", "margin"], correctIndex: 0, explanation: "Point to the words." },
        { prompt: "'The lamp was a brave little star' is a", options: ["metaphor", "simile", "irony", "alliteration"], correctIndex: 0, explanation: "Lamp equated with a star, no 'like'/'as'." },
        { prompt: "The speed-table clue 'reverse expectation' means", options: ["irony", "imagery", "simile", "symbol"], correctIndex: 0, explanation: "Reversed expectation is irony." },
        { prompt: "The speed-table clue 'give an object a human act' means", options: ["personification", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Human acts to objects = personification." },
        { prompt: "'As brave as a lion' and 'brave as a lion' are both", options: ["similes", "metaphors", "symbols", "ironies"], correctIndex: 0, explanation: "'as' marks the simile." },
        { prompt: "The routine for each item is name, quote and", options: ["effect", "price", "print", "number"], correctIndex: 0, explanation: "Effect completes the analysis." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the self-check steps for each item in a device drill.", answerKey: "Name the device correctly; quote the exact words that prove it; state the effect on the reader; and if it is a comparison, apply the 'like'/'as' test to split simile from metaphor. Award marks for each step.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "'The stars winked at the sleeping town' is", options: ["personification", "simile", "hyperbole", "irony"], correctIndex: 0, answerKey: "Stars given the human act of winking - personification. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Identify the device in 'the road was a ribbon of moonlight' and give its effect.", answerKey: "A metaphor (the road described directly as a ribbon of moonlight, no 'like'/'as'); its effect is to make the road seem thin, pale and winding. Award marks for correct label and effect.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why does the effect, not the label, carry most of the marks in a device question?", answerKey: "Because naming a device shows recognition but not understanding; the analysis - explaining what the device makes the reader see, feel or understand - is what demonstrates literary skill, so examiners reward the explained effect over the bare label. Award marks for the principle.", marks: 4 },
        { type: "ESSAY", prompt: "Take a passage you have studied or been given and drill it at speed: identify at least six literary devices, quote each, and explain the effect of each on the reader.", answerKey: "Award marks for: six devices correctly named, 8 marks; an exact quotation for each, 6 marks; a clear effect for each, 8 marks; expression, 2 marks. Devices named with no quotation or no effect should not exceed 10.", marks: 24 },
      ],
    },
  ],
};
