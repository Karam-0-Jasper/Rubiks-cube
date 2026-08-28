import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 12, Semester One, Period II: AFRICAN PROSE, POETRY AND LITERARY DEVICES
// (the CONTENTS column is built on Non-African prose and a book report). The
// three top-level CONTENTS items are rebuilt here as three topics: (1) Non-
// African prose — with its sub-items (themes, style, conflict, plot) taught as
// ## sections; (2) Use of Literary Devices — with its sub-items (symbolism,
// characterization, imagery, foreshadowing, suspense, flashback) taught as
// ## sections; (3) Writing a Book Report. Literary concepts are sourced from
// LibreTexts (Humanities). The syllabus names set texts (Lonely Days by Bayo
// Adebowale, Faceless by Amma Darko, Wuthering Heights by Emily Bronte). Set-
// text-specific facts are NOT invented here — the general analysis and writing
// skills are taught, and the set texts are flagged as the teaching targets.
export const literatureG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "African Prose, Poetry and Literary Devices",
  summary:
    "Period II of the MoE Grade 12 Literature syllabus. Its three CONTENTS items are taught as three topics: analysing prose through theme, style, conflict and plot; using literary devices (symbolism, characterization, imagery, foreshadowing, suspense, flashback); and writing a book report.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Elements of Fiction (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "non-african-prose",
      title: "Non-African Prose",
      objective:
        "By the end of the topic, learners should be able to analyse a work of prose through its theme, style, conflict and plot, supporting claims with textual evidence.",
      estimatedMinutes: 150,
      notes: `## Prose and its elements
- **Prose** fiction (novels and short stories) is analysed through its **elements**: plot, character, setting, conflict, point of view and theme.
- Non-African prose named by the syllabus includes *Wuthering Heights* (Emily Bronte) alongside African novels *Lonely Days* (Bayo Adebowale) and *Faceless* (Amma Darko).

## Theme
- A **theme** is *"the central idea or issue conveyed by the story"* — a **full idea about life**, not a one-word topic.
- Themes are found by asking what the story is *really about*, noticing what repeats, and seeing what characters learn or suffer.
- A rich novel carries **several themes at once**; state each and support it with evidence.

## Style
- **Style** is the writer's **characteristic use of language** — **diction** (word choice), sentence structure, imagery and tone.
- Ask whether the language is plain or ornate, formal or colloquial, and how that shapes the reader's experience.
- **Diction** (word choice) and its **connotations** set the **tone** of the prose.

## Conflict
- **Conflict** is *"a struggle between two people or things"* — the tension that drives the plot.
- **External conflict** sets a character against another person, society or nature; **internal conflict** is a struggle within the character's own mind.
- Identify the **central conflict** and any **minor conflicts** that support it.

## Plot
- **Plot** is *"the series of events and character actions that relate to the central conflict"* — the events and **the order in which they are told**.
- The plot arc: **exposition → rising action → climax → falling action → resolution**.
- Distinguish **plot** (what happens and in what order) from **story** (the raw events in time).

## Analysing with evidence
- Use **point → evidence → explanation**: make a claim, quote a detail, explain how it proves the claim.
- Tie theme, conflict and style back to the text; never assert without support.

## Set text (to be supplied by the teacher)
- Apply this method to the assigned prose text: state its themes, describe its style, map its conflict and plot, and support each point with quotation.
- *(Specific characters, events and quotations come from the set text itself, not invented here.)*

## Common errors and misconceptions
- **Stating a theme as one word** — a theme is a full idea about life.
- **Confusing plot with story** — plot is the ordered telling; story is the raw events.
- **Ignoring internal conflict** — struggles within a character matter as much as external ones.
- **Describing style vaguely** — point to specific diction and sentence choices.`,
      workedExample: `**Task.** Analyse a prose passage through theme, style, conflict and plot, using a general model.

**Model:** a proud man refuses help after a flood ruins his farm; his refusal costs him more than the flood did.

**Step 1 — plot.** Exposition: the farm and the man's pride. Rising action: the flood, then offers of help. Climax: he refuses. Falling action and resolution: the losses that follow. The events are shaped into a **plot** around a central conflict.

**Step 2 — conflict.** The **central conflict** is **internal** — the man's pride against his own need — expressed through an **external** conflict with neighbours who offer aid.

**Step 3 — theme.** Stated as a full idea: *"pride can cost a person more than misfortune itself."* It is supported by the outcome of his refusal.

**Step 4 — style.** If the prose uses short, blunt sentences and hard, plain diction (*stone*, *fist*, *no*), the **style** mirrors the man's rigidity; note the specific words, not just "good writing."

**Step 5 — evidence.** For each claim, quote a detail and explain it (point → evidence → explanation). *(In an exam you would quote the set text.)*

**Conclusion:** analyse prose by mapping its **plot**, naming its **conflict** (internal and external), stating its **theme** as a full idea, and pointing to specific features of **style** — all supported by textual evidence.`,
      quiz: [
        { prompt: "A theme is the central idea conveyed by the story, stated as", options: ["a full idea about life", "one word", "a price", "a date"], correctIndex: 0, explanation: "A theme is a complete idea, not a topic." },
        { prompt: "A writer's characteristic use of language is their", options: ["style", "price", "index", "cover"], correctIndex: 0, explanation: "Style is how the writer uses language." },
        { prompt: "Conflict is a struggle between two people or", options: ["things", "prices", "fonts", "pages"], correctIndex: 0, explanation: "Conflict is the driving tension." },
        { prompt: "A struggle within a character's own mind is", options: ["internal conflict", "external conflict", "the setting", "the theme"], correctIndex: 0, explanation: "Internal conflict is within the character." },
        { prompt: "A character against society or nature is", options: ["external conflict", "internal conflict", "the plot", "the style"], correctIndex: 0, explanation: "External conflict is with an outside force." },
        { prompt: "Plot is the series of events relating to the", options: ["central conflict", "price", "printer", "index"], correctIndex: 0, explanation: "Plot is built around the central conflict." },
        { prompt: "The plot arc runs exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "Resolution ends the arc." },
        { prompt: "Style is carried in part by diction, which means", options: ["word choice", "the price", "the margin", "the page count"], correctIndex: 0, explanation: "Diction is word choice." },
        { prompt: "Plot differs from story because plot is the", options: ["ordered telling", "raw events in time", "theme", "setting"], correctIndex: 0, explanation: "Plot is how events are ordered and told." },
        { prompt: "A rich novel usually carries", options: ["several themes at once", "no theme", "only the plot", "only a title"], correctIndex: 0, explanation: "Novels hold multiple themes." },
        { prompt: "To support a claim about a prose text you need", options: ["textual evidence", "a price", "a cover", "a date"], correctIndex: 0, explanation: "Point → evidence → explanation." },
        { prompt: "The moment of greatest tension in a plot is the", options: ["climax", "exposition", "resolution", "title"], correctIndex: 0, explanation: "The climax is the turning point." },
        { prompt: "The opening that sets the scene and introduces characters is", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition opens the plot." },
        { prompt: "Describing style well means pointing to specific", options: ["diction and sentence choices", "prices", "fonts", "page numbers"], correctIndex: 0, explanation: "Style analysis needs specifics." },
        { prompt: "Diction's connotations set the prose's", options: ["tone", "price", "index", "margin"], correctIndex: 0, explanation: "Word choice shapes tone." },
        { prompt: "A minor conflict in a story usually", options: ["supports the central conflict", "sets the price", "picks the font", "numbers pages"], correctIndex: 0, explanation: "Minor conflicts support the main one." },
        { prompt: "Stating a theme as one word is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "A theme is a full idea, not a topic." },
        { prompt: "Ignoring internal conflict is an error because", options: ["struggles within a character matter", "prices matter", "fonts matter", "margins matter"], correctIndex: 0, explanation: "Internal conflict is central to character." },
        { prompt: "The events that build toward the climax are the", options: ["rising action", "resolution", "exposition", "denouement"], correctIndex: 0, explanation: "Rising action leads to the climax." },
        { prompt: "The elements of fiction include plot, character, setting, point of view, conflict and", options: ["theme", "price", "printer", "index"], correctIndex: 0, explanation: "Theme is an element of fiction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish internal conflict from external conflict, giving an example of each.", answerKey: "Internal conflict is a struggle within a character's own mind (e.g. pride versus need); external conflict sets a character against another person, society or nature (e.g. a character against a hostile community). Award 2 per type with an example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which correctly states a theme rather than a topic?", options: ["Pride can cost a person more than misfortune", "Pride", "The flood", "The farm"], correctIndex: 0, answerKey: "Only A is a full idea about life. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the five stages of the plot arc in order.", answerKey: "Exposition; rising action; climax; falling action; resolution (denouement). Award 1 mark each (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "What is meant by a writer's 'style', and how would you analyse it?", answerKey: "Style is the writer's characteristic use of language — diction (word choice), sentence structure, imagery and tone. Analyse it by pointing to specific choices (plain or ornate, formal or colloquial, long or short sentences) and explaining their effect on the reader. Award 2 for the definition and 2 for the method.", marks: 4 },
        { type: "ESSAY", prompt: "For a prose text you have studied, analyse its central conflict, one major theme and an aspect of the writer's style, showing how they work together and supporting each point with textual evidence.", answerKey: "Award marks for: central conflict identified (internal/external), 6 marks; one theme stated as a full idea and developed, 6 marks; a specific feature of style analysed, 6 marks; textual evidence throughout, 4 marks; expression, 2 marks. Plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary / Rhetorical and Literary Devices (Introduction to Literature and Critical Thinking, Oxnard; Ringo & Kashyap) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary)
      slug: "literary-devices-in-prose",
      title: "Use of Literary Devices",
      objective:
        "By the end of the topic, learners should be able to identify and explain the effect of symbolism, characterization, imagery, foreshadowing, suspense and flashback in prose.",
      estimatedMinutes: 150,
      notes: `## Literary devices in prose
- **Literary devices** are techniques writers use to shape meaning and effect. Name the device, quote it, and explain its **effect**.

## Symbolism
- **Symbolism** — *"the use of a physical object to represent an abstract idea"*; a symbol is *anything that represents something larger than itself*.
- A recurring object (a river, a scar, a locked door) can carry an idea across the whole text.

## Characterization
- **Characterization** is the **development of a character** through description, action, speech and thought.
- **Direct characterization** — the writer **states** a trait ("she was proud"). **Indirect characterization** — the reader **infers** a trait from the character's **behaviour, speech and thoughts**.
- A **character** is *"a person, or perhaps an animal, who participates in the action of the story."*

## Imagery
- **Imagery** — *"descriptive, immersive details meant to paint a picture in the reader's mind"*; *language that makes an appeal to the senses*.
- Imagery can also be used to **create the mood** of a text.

## Foreshadowing
- **Foreshadowing** — *"when the author gives hints about the plot developments to come before they happen."*
- It prepares the reader and builds expectation for what follows.

## Suspense
- **Suspense** is the **tension and anxiety** the reader feels about what will happen next.
- It is built by **foreshadowing** hints and by **withholding information** — delaying the outcome so the reader keeps turning the page.

## Flashback
- **Flashback** — *"a plot device where the narrative goes back in time"* to an earlier event.
- It fills in background and explains a character's present state without telling the story in strict order.

## Common errors and misconceptions
- **Device-spotting** — always explain the **effect**.
- **Confusing direct and indirect characterization** — one states a trait; the other shows it.
- **Confusing flashback with foreshadowing** — flashback looks **back**; foreshadowing hints **forward**.
- **Treating a symbol literally** — a symbol stands for a larger idea.`,
      workedExample: `**Task.** Identify and explain four devices in a short passage.

*"The broken clock had stopped at the hour her mother left (1). Even now, years later, Ama's hands shook whenever she passed it (2). She remembered the door closing, the cold rush of air (3) — and a neighbour had warned, that morning, that grief has a long shadow (4)."*

1. **Symbolism** — the **broken clock stopped at the hour her mother left** is a *physical object representing an abstract idea*: time frozen by loss. Effect: shows Ama is emotionally stuck in that moment.
2. **Indirect characterization** — *her hands shook* reveals her lasting distress **through behaviour**, not a stated label. Effect: we infer deep, unresolved grief.
3. **Flashback** — *she remembered the door closing* takes the narrative **back in time**. Effect: explains her present fear by showing its origin.
4. **Foreshadowing / suspense** — the neighbour's warning that *grief has a long shadow* **hints at trouble to come** and creates **suspense**. Effect: the reader expects the grief to shape later events, and reads on to see how.

**Conclusion:** for each device, **name** it, **quote** it, and explain its **effect**. Keep flashback (backward) and foreshadowing (forward) apart, and read symbols for their larger idea.`,
      quiz: [
        { prompt: "Using a physical object to represent an abstract idea is", options: ["symbolism", "flashback", "suspense", "diction"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "Developing a character through description, action and speech is", options: ["characterization", "foreshadowing", "imagery", "flashback"], correctIndex: 0, explanation: "Characterization develops character." },
        { prompt: "Stating a trait outright ('she was proud') is", options: ["direct characterization", "indirect characterization", "flashback", "suspense"], correctIndex: 0, explanation: "Direct characterization states traits." },
        { prompt: "Letting the reader infer a trait from behaviour is", options: ["indirect characterization", "direct characterization", "foreshadowing", "symbolism"], correctIndex: 0, explanation: "Indirect characterization shows traits." },
        { prompt: "Descriptive details that appeal to the senses are", options: ["imagery", "diction", "plot", "resolution"], correctIndex: 0, explanation: "Imagery paints a sensory picture." },
        { prompt: "Imagery can be used to create a text's", options: ["mood", "price", "printer", "index"], correctIndex: 0, explanation: "Imagery shapes mood." },
        { prompt: "Hints about plot developments to come are", options: ["foreshadowing", "flashback", "symbolism", "diction"], correctIndex: 0, explanation: "Foreshadowing hints forward." },
        { prompt: "A narrative going back in time is a", options: ["flashback", "climax", "resolution", "symbol"], correctIndex: 0, explanation: "Flashback returns to an earlier event." },
        { prompt: "The tension a reader feels about what happens next is", options: ["suspense", "diction", "setting", "style"], correctIndex: 0, explanation: "Suspense is reader tension." },
        { prompt: "Suspense is built partly by withholding", options: ["information", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Delaying the outcome builds suspense." },
        { prompt: "Flashback differs from foreshadowing because flashback looks", options: ["back", "forward", "sideways", "up"], correctIndex: 0, explanation: "Flashback = back; foreshadowing = forward." },
        { prompt: "A symbol read only literally loses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "Symbols stand for larger ideas." },
        { prompt: "A recurring object carrying an idea across a text is a", options: ["symbol", "flashback", "climax", "stanza"], correctIndex: 0, explanation: "Recurring objects work as symbols." },
        { prompt: "Analysis of any device should end with its", options: ["effect", "price", "printer", "date"], correctIndex: 0, explanation: "State the effect." },
        { prompt: "'Her hands shook' revealing distress is", options: ["indirect characterization", "direct characterization", "foreshadowing", "symbolism"], correctIndex: 0, explanation: "The trait is shown, not stated." },
        { prompt: "Foreshadowing helps build", options: ["suspense", "the price", "the index", "the margin"], correctIndex: 0, explanation: "Hints create anticipation." },
        { prompt: "A character is a person or animal who", options: ["participates in the action", "prints the book", "sets the price", "designs the cover"], correctIndex: 0, explanation: "Characters take part in the story." },
        { prompt: "Immersive details painting a picture in the mind are", options: ["imagery", "diction", "plot", "conflict"], correctIndex: 0, explanation: "That defines imagery." },
        { prompt: "A flashback fills in a character's", options: ["background", "price", "font", "margin"], correctIndex: 0, explanation: "Flashback supplies background." },
        { prompt: "Confusing direct and indirect characterization confuses stating a trait with", options: ["showing it", "pricing it", "printing it", "numbering it"], correctIndex: 0, explanation: "Direct states; indirect shows." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define symbolism and imagery, giving one example of each.", answerKey: "Symbolism — the use of a physical object to represent an abstract idea (e.g. a stopped clock for frozen grief); imagery — descriptive details that appeal to the senses (e.g. 'the cold rush of air'). Award 2 per device with example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A narrative that suddenly returns to an earlier event is using", options: ["flashback", "foreshadowing", "symbolism", "suspense"], correctIndex: 0, answerKey: "Flashback goes back in time. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between direct and indirect characterization.", answerKey: "Direct characterization states a trait outright (e.g. 'she was proud'); indirect characterization lets the reader infer the trait from the character's behaviour, speech and thoughts. Award 2 per type clearly explained.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How is suspense created, and how does foreshadowing contribute to it?", answerKey: "Suspense is the reader's tension about what will happen next; it is built by withholding information and delaying the outcome, and by foreshadowing — hints about developments to come that raise expectation. Award 2 for how suspense is built and 2 for the role of foreshadowing.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing a prose text you have studied, discuss how the writer uses at least three literary devices (from symbolism, characterization, imagery, foreshadowing, suspense, flashback) to shape meaning, explaining the effect of each with textual evidence.", answerKey: "Award marks for: at least three devices correctly identified and quoted, 9 marks; the effect of each explained, 9 marks; devices linked to the text's meaning, 4 marks; expression, 2 marks. Device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Organizing Your Summary/Response Essay (Integrated Skills: Academic Writing with Sources, Duke, Bonarek & Mielcarek) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Integrated_Skills%3A_Academic_Writing_with_Sources_(Duke_Bonarek_and_Mielcarek)/04%3A_Responding_to_a_Text/4.07%3A_Organizing_Your_Summary_response_Essay)
      slug: "writing-book-report",
      title: "Writing a Book Report",
      objective:
        "By the end of the topic, learners should be able to write a book report that identifies a book, summarises it objectively, and gives a supported personal response.",
      estimatedMinutes: 150,
      notes: `## What a book report is
- A **book report** identifies a book, **summarises** it, and gives a **response** (the reader's supported evaluation).
- It combines an **objective summary** (what the book says) with a **response** (what the reader thinks, backed by reasons).

## Identifying the book
State the basic facts first:
- **Title** and **author**.
- **Genre** (novel, short story, play, poetry) and, if known, the **publication date**.

## The summary
- Give the **overall main idea in a one-sentence summary** first.
- Cover the **major supporting details** — the book's **setting**, main **characters**, central **conflict**, **plot** (main line of events) and **theme**.
- **Paraphrase in your own words** and refer to the **author by last name**; do not copy the text.
- Keep the summary **objective** — report the book, do not judge it yet.

## The response
- The response is **your opinion of the text, supported** — *"I did/did not like it" is not sufficient*; be **descriptive** and give **reasons**.
- Evaluate: is the writing effective? Are the characters believable? Is the theme convincing? If the author fails to prove a point, **state the specific flaw** and how it could be improved.
- Support each judgement with a **detail or quotation** from the book.

## Structure
1. **Introduction** — title, author, genre, and a one-sentence summary of the main idea.
2. **Summary paragraph(s)** — setting, characters, conflict, plot, theme, objectively.
3. **Response paragraph(s)** — supported evaluation with evidence.
4. **Conclusion** — overall assessment and recommendation.

## Set text (to be supplied by the teacher)
- Write a book report on the assigned novel, following this structure.
- *(The book's actual title, author, characters and events are supplied by the set text, not invented here.)*

## Common errors and misconceptions
- **Retelling everything** — summarise the main line, not every incident.
- **Opinion without support** — back every judgement with a reason or quotation.
- **Copying instead of paraphrasing** — use your own words.
- **Mixing summary and response** — keep the objective summary separate from your evaluation.`,
      workedExample: `**Task.** Plan a book report using the structure (general model, no set-text facts).

**Step 1 — introduction (identify + one-sentence summary).** Give the **title**, **author**, **genre** and **date**, then the main idea in one sentence: *"[Title] by [Author] is a novel about a young widow who resists her community's mourning customs and pays a heavy price."*

**Step 2 — summary paragraph.** Objectively cover:
- **Setting:** where and when.
- **Characters:** the protagonist and key figures.
- **Conflict:** the central struggle (e.g. custom versus individual freedom).
- **Plot:** the main line — situation, turning point, ending.
- **Theme:** stated as a full idea.
Paraphrase; refer to the author by last name; add no judgement yet.

**Step 3 — response paragraph.** Now evaluate, with support: *"The novel's strength is its believable protagonist; her fear is shown through action rather than stated (indirect characterization). A weakness is the rushed ending, which resolves the central conflict too quickly to feel earned."* Back each point with a detail.

**Step 4 — conclusion.** Give an **overall assessment** and a **recommendation** (to whom, and why).

**Conclusion:** a book report **identifies** the book, **summarises** it objectively (setting, characters, conflict, plot, theme), and gives a **supported response** — never bare opinion — in a clear introduction, summary, response and conclusion.`,
      quiz: [
        { prompt: "A book report combines an objective summary with a", options: ["supported response", "price list", "font sample", "index"], correctIndex: 0, explanation: "Summary plus evaluation." },
        { prompt: "The introduction should state the title, author, genre and", options: ["a one-sentence main idea", "the price", "the printer", "the margin"], correctIndex: 0, explanation: "Open with identification and the main idea." },
        { prompt: "A summary should first give the", options: ["overall main idea in one sentence", "reader's opinion", "price", "index"], correctIndex: 0, explanation: "Lead with the one-sentence summary." },
        { prompt: "The summary should be", options: ["objective", "a personal attack", "priced", "rhymed"], correctIndex: 0, explanation: "Report the book without judging yet." },
        { prompt: "In a summary you should paraphrase in your own words and refer to the author by", options: ["last name", "first name only", "price", "page number"], correctIndex: 0, explanation: "Refer to the author by last name." },
        { prompt: "'I did not like it' alone is", options: ["not sufficient", "a full response", "a summary", "a theme"], correctIndex: 0, explanation: "Opinions must be supported." },
        { prompt: "A response must be supported with", options: ["reasons and evidence", "a price", "a font", "a date"], correctIndex: 0, explanation: "Back judgements with support." },
        { prompt: "The summary should cover setting, characters, conflict, plot and", options: ["theme", "price", "printer", "index"], correctIndex: 0, explanation: "Theme is part of the summary." },
        { prompt: "If an author fails to prove a point, the response should state the", options: ["specific flaw", "price", "font", "margin"], correctIndex: 0, explanation: "Name the specific weakness." },
        { prompt: "Copying the book's words instead of paraphrasing is a", options: ["fault", "requirement", "good habit", "response"], correctIndex: 0, explanation: "Use your own words." },
        { prompt: "Retelling every incident is a", options: ["weakness (summarise the main line)", "strength", "requirement", "response"], correctIndex: 0, explanation: "Keep to the main line." },
        { prompt: "Summary and response should be kept", options: ["separate", "identical", "priced", "rhymed"], correctIndex: 0, explanation: "Objective summary is separate from evaluation." },
        { prompt: "The response paragraph gives the reader's", options: ["supported evaluation", "price", "printer", "index"], correctIndex: 0, explanation: "The response evaluates with support." },
        { prompt: "A book report should end with an overall assessment and a", options: ["recommendation", "price", "font", "date"], correctIndex: 0, explanation: "Close with a recommendation." },
        { prompt: "The genre of a book might be", options: ["novel, play or poetry", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Genre names the type of work." },
        { prompt: "A strong evaluation of characters asks whether they are", options: ["believable", "cheap", "printed", "numbered"], correctIndex: 0, explanation: "Judge believability with support." },
        { prompt: "The main idea of a book is best stated", options: ["in one clear sentence", "in one word", "as a price", "as a date"], correctIndex: 0, explanation: "Compress the main idea to a sentence." },
        { prompt: "The summary of the plot should give the main line: situation, turning point and", options: ["ending", "price", "printer", "index"], correctIndex: 0, explanation: "Include the ending." },
        { prompt: "Each judgement in the response should be backed by a", options: ["detail or quotation", "price tag", "cover", "date"], correctIndex: 0, explanation: "Support with evidence." },
        { prompt: "The four parts of a book report are introduction, summary, response and", options: ["conclusion", "price list", "index", "glossary"], correctIndex: 0, explanation: "It ends with a conclusion." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the four main parts of a book report in order.", answerKey: "Introduction (title, author, genre, one-sentence main idea); summary (setting, characters, conflict, plot, theme, objectively); response (supported evaluation); conclusion (overall assessment and recommendation). Award 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an adequate response statement?", options: ["The ending is rushed, resolving the central conflict too quickly to feel earned", "I did not like it", "It was a book", "The cover was blue"], correctIndex: 0, answerKey: "A supported, descriptive judgement. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What should the summary part of a book report include, and what should it avoid?", answerKey: "Include: a one-sentence main idea, then the setting, main characters, central conflict, main plot line and theme, paraphrased in the writer's own words with the author referred to by last name. Avoid: personal judgement (keep it objective), copying the text, and retelling every incident. Award 2 for what to include and 2 for what to avoid.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why is 'I liked it' an insufficient response, and how should it be improved?", answerKey: "It gives an opinion with no support; a response must be descriptive and give reasons, backed by details or quotations from the book (e.g. praising believable characterization shown through action). Award 2 for the reason and 2 for the improvement.", marks: 4 },
        { type: "ESSAY", prompt: "Write a book report on a novel you have studied, with an introduction that identifies it, an objective summary, a supported response, and a concluding recommendation.", answerKey: "Award marks for: introduction identifying title/author/genre with a one-sentence main idea, 4 marks; an objective summary covering setting, characters, conflict, plot and theme, 8 marks; a supported response with evidence, 8 marks; a clear concluding recommendation, 2 marks; expression, 2 marks. A pure retelling with no response should not exceed 10.", marks: 24 },
      ],
    },
  ],
};
