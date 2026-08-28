import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 11, Semester One, Period I: Non-African Prose. The Grade 11 Period I
// CONTENTS list has four top-level items, each rebuilt here as its own topic:
// (1) Non-African prose (themes, style, content, plot, conflict), (2) Use of
// figurative expressions, (3) Book report format, (4) Points of view. Literary
// concepts are sourced from LibreTexts (Humanities). The syllabus names set
// texts (Native Son by Richard Wright; She Stoops to Conquer by Oliver
// Goldsmith; Vanity by Birago Diop; Birches by Robert Frost). Set-text-specific
// facts are NOT invented — the general skills of reading and reporting on
// non-African prose are taught and the set texts are flagged as the teaching
// targets.
export const literatureG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Non-African Prose",
  summary:
    "Period I of the MoE Grade 11 Literature syllabus. Its four CONTENTS items are taught as four topics: the elements of non-African prose (themes, style, content, plot, conflict); the use of figurative expressions; the book report format; and points of view.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Elements of Fiction (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "elements-of-non-african-prose",
      title: "Non-African Prose: Themes, Style, Content, Plot and Conflict",
      objective:
        "By the end of the topic, learners should be able to identify and analyse the elements of a prose text — theme, style, content, plot and conflict — and apply them to a non-African prose work.",
      estimatedMinutes: 150,
      notes: `## Prose and its elements

- **Prose** is ordinary written language organised into sentences and paragraphs — the form of the short story and the novel.
- **Non-African prose** is prose written by writers from outside Africa; the syllabus names works such as *Native Son* (Richard Wright) and *She Stoops to Conquer* (Oliver Goldsmith).
- Fiction is analysed through a set of **elements**: character, setting, **plot, conflict, point of view** and **theme**.

## Plot

- The **plot** is the **series of events and character actions that relate to the central conflict** — what happens, in order.
- Plot has **five stages**: **exposition** (introduction) → **rising action** (complicating action) → **climax** (turning point) → **falling action** → **denouement/resolution**.
- Plot is *what happens*; it is not the same as theme.

## Conflict

- **Conflict** is the **struggle between two entities** that drives the story.
- The main character (the **protagonist**) encounters conflict with an **antagonist** (an adversary).
- Conflict may be **external** (character vs another character, vs nature, vs society) or **internal** (character vs self — a struggle within the character's own mind).

## Content and setting

- **Content** is the substance of the story — its events, characters, ideas and subject matter.
- **Setting** is **where and when** the story takes place. Setting can be a **main force** the characters face (a storm, a flood, a hostile city) or play a **minor role**, setting the mood.

## Theme

- A **theme** is **not the plot**. It is the **underlying truth or central idea** the story conveys.
- Theme is stated as an idea about life ("*poverty and prejudice can trap a person*"), not as a one-word topic.

## Style

- **Style** is *how* the writer uses language — word choice (diction), sentence structure, tone and figurative language.
- Style shapes the reader's experience and distinguishes one writer from another.

## Set text (to be supplied by the teacher)

- Apply these elements to the named non-African prose set text: trace its **plot**, name its central **conflict**, describe its **setting/content**, state a **theme**, and comment on the writer's **style**.
- *(Specific facts about the set texts are studied from the works themselves, not invented here.)*

## Common errors and misconceptions

- **Confusing plot with theme** — plot is *what happens*; theme is *the idea it conveys*.
- **Stating a theme as one word** — a theme is a full idea about life, not a topic label.
- **Ignoring internal conflict** — conflict can be within a character (vs self), not only between characters.
- **Retelling instead of analysing** — examiners reward analysis of the elements, not a plot summary.`,
      workedExample: `**Task.** Analyse a short non-African prose passage by its elements.

*A poor young man in a cold northern city is offered a chance to escape his hardship, but a single reckless act traps him further; torn between fear and pride, he must decide whether to run or confess.*

**Step 1 — plot.** Trace the events: the offer (exposition), the reckless act (rising action), the moment of decision (approaching climax). Plot is the ordered chain of events tied to the conflict.

**Step 2 — conflict.** The **central conflict** is external (the young man vs a hostile society that limits him) and **internal** (vs self — fear against pride). Name both.

**Step 3 — setting/content.** The **setting** is a cold northern city; here the setting acts as a **main force** — the hostile environment pressures the character. The **content** is his struggle to escape hardship.

**Step 4 — theme.** State the underlying idea: *"poverty and prejudice can trap a person and drive them to desperate choices."* Note this is an idea about life, not the plot.

**Step 5 — style.** Comment on *how* it is written — spare, tense sentences that build pressure, matching the character's fear.

**Conclusion:** analysing prose means naming the **plot**, the **conflict** (external and internal), the **setting/content**, the **theme** (an idea, not the plot), and the **style** (how language is used) — and supporting each from the text.`,
      quiz: [
        { prompt: "Prose is written language organised into", options: ["sentences and paragraphs", "lines and stanzas", "acts and scenes", "verses only"], correctIndex: 0, explanation: "Prose is the ordinary sentence-and-paragraph form of the story and novel." },
        { prompt: "The series of events relating to the central conflict is the", options: ["plot", "theme", "setting", "style"], correctIndex: 0, explanation: "Plot is the ordered chain of events." },
        { prompt: "The first stage of plot is the", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition introduces the story." },
        { prompt: "The turning point of a plot is the", options: ["climax", "exposition", "denouement", "rising action"], correctIndex: 0, explanation: "The climax is the turning point." },
        { prompt: "Conflict is the struggle between two", options: ["entities", "chapters", "stanzas", "publishers"], correctIndex: 0, explanation: "Conflict is a struggle between two entities." },
        { prompt: "The main character who faces the conflict is the", options: ["protagonist", "antagonist", "narrator's editor", "author"], correctIndex: 0, explanation: "The protagonist is the main character." },
        { prompt: "A struggle within a character's own mind is", options: ["internal conflict", "external conflict", "setting", "theme"], correctIndex: 0, explanation: "Character vs self is internal conflict." },
        { prompt: "Character vs society is a form of", options: ["external conflict", "internal conflict", "resolution", "diction"], correctIndex: 0, explanation: "It is a struggle with an outside force." },
        { prompt: "Where and when a story takes place is the", options: ["setting", "plot", "theme", "style"], correctIndex: 0, explanation: "Setting is time and place." },
        { prompt: "The underlying truth or central idea of a story is the", options: ["theme", "plot", "setting", "climax"], correctIndex: 0, explanation: "Theme is the underlying idea." },
        { prompt: "Theme differs from plot because plot is", options: ["what happens", "the central idea", "the mood", "the author"], correctIndex: 0, explanation: "Plot is events; theme is the idea." },
        { prompt: "How a writer uses language (diction, tone, sentences) is their", options: ["style", "plot", "conflict", "setting"], correctIndex: 0, explanation: "Style is how language is used." },
        { prompt: "A theme should be stated as", options: ["a full idea about life", "one word", "a page number", "a character's name"], correctIndex: 0, explanation: "A theme is a complete idea, not a topic label." },
        { prompt: "When setting acts as a storm or flood the characters face, it is", options: ["a main force in the story", "a minor mood-setter", "the theme", "the plot"], correctIndex: 0, explanation: "Setting can be a main force." },
        { prompt: "The substance of a story — its events, characters and subject — is its", options: ["content", "style", "rhyme", "metre"], correctIndex: 0, explanation: "Content is the substance." },
        { prompt: "The adversary opposing the protagonist is the", options: ["antagonist", "narrator", "author", "editor"], correctIndex: 0, explanation: "The antagonist is the opponent." },
        { prompt: "The final stage that ties up the story is the", options: ["resolution/denouement", "exposition", "climax", "rising action"], correctIndex: 0, explanation: "The denouement resolves the story." },
        { prompt: "Non-African prose is prose written by", options: ["writers from outside Africa", "only Liberian writers", "only poets", "only playwrights"], correctIndex: 0, explanation: "Non-African prose comes from outside Africa." },
        { prompt: "Rising action is also called", options: ["complicating action", "the climax", "the denouement", "the setting"], correctIndex: 0, explanation: "Rising action complicates the situation." },
        { prompt: "A weak prose answer often", options: ["retells the plot instead of analysing", "names the theme", "identifies conflict", "quotes the text"], correctIndex: 0, explanation: "Plot summary is not analysis." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name and briefly describe the five stages of plot.", answerKey: "Exposition (introduction) — sets up characters and situation; rising action (complicating action) — builds the conflict; climax (turning point) — the point of greatest tension; falling action — events after the climax; denouement/resolution — the story is resolved. Award 1 mark per stage (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about theme is correct?", options: ["Theme is the underlying idea, not the plot", "Theme is the list of events", "Theme is the setting", "Theme is one word only"], correctIndex: 0, answerKey: "Theme is the underlying idea/truth of the story, distinct from plot. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish external conflict from internal conflict, with an example of each.", answerKey: "External conflict is a struggle between the character and an outside force (another character, nature, society) — e.g. a man against a hostile city. Internal conflict is a struggle within the character's own mind (character vs self) — e.g. fear against pride. Award 2 for the distinction and 1 per example (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the content, the plot and the theme of a prose text.", answerKey: "Content is the substance/subject matter (events, characters, ideas); plot is the ordered series of events tied to the central conflict (what happens); theme is the underlying idea or truth the story conveys. Award marks for each of the three clearly distinguished.", marks: 3 },
        { type: "ESSAY", prompt: "Choosing a non-African prose text you have studied, analyse it by its elements — plot, conflict, setting/content, theme and style — supporting each point with reference to the text.", answerKey: "Award marks for: plot traced through its stages, 5 marks; central conflict (external and/or internal) named, 4 marks; setting/content described, 4 marks; a theme stated as an idea, 5 marks; comment on the writer's style, 4 marks; textual support and expression, 2 marks. A plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "use-of-figurative-expressions",
      title: "Use of Figurative Expressions",
      objective:
        "By the end of the topic, learners should be able to identify figurative expressions in a prose text and explain their effect using the name–quote–effect method.",
      estimatedMinutes: 150,
      notes: `## Figurative expressions

- **Figurative language** *"uses words or expressions not meant to be taken literally"* — it means **more than the literal words**.
- Figures of speech appear in **prose**, poetry and drama, carrying much meaning in few words.

## The main figures to recognise

- **Metaphor** — *"a direct comparison between two unlike things"* (e.g. "hope is the thing with feathers").
- **Simile** — *"a comparison that uses like or as"*.
- **Personification** — *"human characteristics being applied to non-human things"*.
- **Metonymy** — *"when one thing is represented by another thing associated with it"* (e.g. "the pen is mightier than the sword").
- **Synecdoche** — *"when a part symbolizes the whole, or the whole symbolizes the part"* (e.g. "all hands on deck").
- **Hyperbole** — deliberate **exaggeration** for effect (e.g. "I'm so hungry I could eat a horse").
- **Imagery** — descriptive detail that appeals to the senses.
- **Symbolism** — an object standing for a larger, abstract idea.

## The name–quote–effect method

To analyse a figurative expression, never just spot it — always give its **effect**:
1. **Name** the figure of speech.
2. **Quote** the words from the text.
3. **Explain the effect** — what image or feeling it creates and how it serves the meaning.

## Why figurative language matters in prose

- It makes description **vivid and economical**.
- It reveals a writer's **attitude and tone** toward characters and events.
- Marks come from explaining **why** the writer chose the figure and **what it does** to the reader.

## Common errors and misconceptions

- **Device-spotting** — listing "metaphor, simile" with no explanation earns almost nothing; complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Reading a symbol too literally** — a symbol stands for a larger idea.
- **Ignoring figurative language in prose** — it is not only found in poetry.`,
      workedExample: `**Task.** Analyse the figurative expressions in this prose sentence using name–quote–effect.

*"The city swallowed him whole, and fear sat on his chest like a stone all night."*

**Expression 1 — "The city swallowed him whole"**
1. **Name:** **personification / metaphor** — the city is given the human/animal action of swallowing.
2. **Quote:** "the city swallowed him whole."
3. **Effect:** it presents the city as a living, devouring thing, making the character seem **helpless and consumed** by an overwhelming environment — the setting becomes a threat.

**Expression 2 — "fear sat on his chest like a stone"**
1. **Name:** **simile** (uses *like*), with a touch of personification (fear "sat").
2. **Quote:** "fear sat on his chest like a stone."
3. **Effect:** the comparison to a stone makes the fear feel **heavy, cold and physically crushing**, so the reader feels the character's dread in the body, not just the mind.

**Conclusion:** naming the device is only half the task. The analysis earns its marks by explaining that the personification makes the city a devouring threat and the simile makes fear a crushing weight. Always finish with the **effect**.`,
      quiz: [
        { prompt: "Figurative language uses words", options: ["not meant to be taken literally", "always in capitals", "with no meaning", "only in poems"], correctIndex: 0, explanation: "Figures of speech mean more than the literal words." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison between two unlike things is a", options: ["metaphor", "simile", "metonymy", "repetition"], correctIndex: 0, explanation: "A metaphor is a direct comparison." },
        { prompt: "Human characteristics given to non-human things is", options: ["personification", "hyperbole", "simile", "symbolism"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "'The pen is mightier than the sword' is", options: ["metonymy", "simile", "hyperbole", "assonance"], correctIndex: 0, explanation: "Each is represented by something associated with it." },
        { prompt: "'All hands on deck' (a part for the whole) is", options: ["synecdoche", "metaphor", "hyperbole", "irony"], correctIndex: 0, explanation: "A part stands for the whole." },
        { prompt: "Deliberate exaggeration for effect is", options: ["hyperbole", "simile", "metonymy", "imagery"], correctIndex: 0, explanation: "Hyperbole exaggerates." },
        { prompt: "Descriptive detail that appeals to the senses is", options: ["imagery", "metre", "rhyme", "a stanza"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "An object standing for a larger abstract idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "The name–quote–effect method ends by", options: ["explaining the effect", "counting lines", "translating", "ignoring meaning"], correctIndex: 0, explanation: "The effect step earns the marks." },
        { prompt: "'Hope is the thing with feathers' is a", options: ["metaphor", "simile", "hyperbole", "synecdoche"], correctIndex: 0, explanation: "It directly compares hope to a bird." },
        { prompt: "'As brave as a lion' is a", options: ["simile", "metaphor", "personification", "metonymy"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "Figurative expressions appear in prose, poetry and", options: ["drama", "timetables", "receipts", "phone books"], correctIndex: 0, explanation: "Figures of speech are found in all three genres." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is what device-spotting leaves out." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is direct; simile keeps like/as." },
        { prompt: "'I could eat a horse' is an example of", options: ["hyperbole", "simile", "symbolism", "metonymy"], correctIndex: 0, explanation: "It is a deliberate exaggeration." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "page number", "price"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "Figurative language helps prose description be", options: ["vivid and economical", "longer only", "silent", "numerical"], correctIndex: 0, explanation: "It packs meaning vividly into few words." },
        { prompt: "A useful prompt for the effect step asks what the words make you", options: ["see, hear or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the reader's experience." },
        { prompt: "Figurative language can reveal a writer's", options: ["attitude and tone", "home address", "salary", "shoe size"], correctIndex: 0, explanation: "Figures of speech carry tone and attitude." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define metaphor, simile and personification, giving one example of each.", answerKey: "Metaphor — a direct comparison between two unlike things without like/as (e.g. 'he is a lion'); simile — a comparison using like/as (e.g. 'as brave as a lion'); personification — human characteristics applied to non-human things (e.g. 'the wind whispered'). Award 1 per device with a valid example (max 3), +1 for accuracy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The pen is mightier than the sword' is an example of", options: ["metonymy", "simile", "hyperbole", "personification"], correctIndex: 0, answerKey: "Each is represented by an associated thing — metonymy. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'The old house groaned under the weight of the years.'", answerKey: "Name: personification (the house 'groaned', a human/living act). Quote: 'the old house groaned.' Effect: makes the house seem alive, tired and burdened, suggesting age, decay and a heavy past, and creating a mournful mood. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why device-spotting earns few marks and what must be added.", answerKey: "Listing devices without explanation shows only recognition, not understanding; the marks come from explaining the effect — what image or feeling the figure creates and how it serves the meaning. Award 2 for the weakness and 2 for the remedy (the effect step).", marks: 4 },
        { type: "ESSAY", prompt: "Choose a non-African prose text you have studied and discuss how the writer uses at least three figurative expressions to create meaning or feeling, explaining the effect of each with quotation.", answerKey: "Award marks for: at least three figures correctly identified and quoted, 9 marks; explanation of the effect of each on meaning/feeling, 12 marks; aptness of quotation and expression, 3 marks. Mere device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Summary Writing (Write What Matters) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Write-What-Matters_(Liza_Long_Amy_Minervini_and_Joel_Gladd)/05%3A_Writing_to_Inform/5.06%3A_Summary_Writing); Elements of Fiction (Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "book-report-format",
      title: "The Book Report Format",
      objective:
        "By the end of the topic, learners should be able to write a book report using the approved format — title, author/genre/date, a sentence summary of setting and theme, characters, purpose and plot.",
      estimatedMinutes: 150,
      notes: `## What a book report is

- A **book report** is a structured account of a book that gives its **facts** (title, author) and a **brief summary** of its content, written in the reader's own words.
- A good summary **includes only the main points**, avoids unnecessary detail, is **written in your own words**, and **does not include your opinion** in the summary section.

## The approved book report format

Report a book under these headings (from the syllabus):

| Heading | What to write |
| --- | --- |
| Title | The exact title of the book |
| Author / Genre / Published date | Who wrote it, its genre, and when it was published |
| Sentence summary | One or two sentences giving the **setting** and **theme** |
| Characters | The main characters and their roles |
| Purpose | Why the author wrote it / the main message |
| Plot | The main events, briefly and in order |

## Writing the sentence summary

- Name the **setting** (where and when) and the **theme** (the underlying idea) in one or two sentences.
- Keep it short: a summary condenses several pages into a few sentences.

## Writing the plot section

- Give the **main events in order** — exposition, the central conflict, the climax, the resolution.
- Do **not** retell every detail; select the events that matter to the story.

## Writing the characters and purpose sections

- **Characters:** name the **protagonist**, the **antagonist**, and important supporting characters, with their roles.
- **Purpose:** state **why** the author wrote the book — the message or idea (this connects to the theme).

## Set text (to be supplied by the teacher)

- Write your book report on the assigned non-African prose set text, filling in each heading from the book itself.
- *(The facts entered under each heading come from the actual book, not invented here.)*

## Common errors and misconceptions

- **Retelling the whole plot** — the plot section is a **brief, ordered** summary, not the full story.
- **Putting opinion in the summary** — keep the summary factual; opinion belongs only where the report asks for evaluation.
- **Omitting the facts** — always give title, author, genre and date.
- **Copying the blurb** — write the summary in **your own words**.`,
      workedExample: `**Task.** Draft a book report skeleton for a non-African prose work, using the approved headings.

**Model (structure only — facts filled from the actual book):**

**Title:** [exact title of the book]

**Author / Genre / Published date:** [author's name] / [novel, play or short story] / [year of publication]

**Sentence summary:** Set in [place and time], the book explores [the underlying theme, e.g. the struggle against poverty and prejudice].

**Characters:**
- [Protagonist] — the main character; [their role].
- [Antagonist] — the opposing force; [their role].
- [Supporting character] — [role].

**Purpose:** The author wrote the book to [message/idea — e.g. show how society shapes an individual's fate].

**Plot:** Briefly, in order: the situation is introduced ([exposition]); the central conflict develops ([rising action]); a turning point occurs ([climax]); the story is resolved ([resolution]).

**Checklist applied:**
- Facts (title, author, genre, date) are given.
- The summary names **setting** and **theme** in one or two sentences.
- The plot is **brief and ordered**, not a full retelling.
- Characters and purpose are stated.

**Conclusion:** a book report follows a fixed **format** — facts, a short setting-and-theme summary, characters, purpose and a brief ordered plot — written in your **own words** and without opinion in the summary.`,
      quiz: [
        { prompt: "A book report gives a book's facts and a", options: ["brief summary of its content", "full copy of the text", "list of prices", "map"], correctIndex: 0, explanation: "A report gives facts plus a brief summary." },
        { prompt: "A good summary includes only the", options: ["main points", "smallest details", "author's address", "printer's name"], correctIndex: 0, explanation: "Summaries keep to the main points." },
        { prompt: "A summary should be written", options: ["in your own words", "copied word for word", "in verse", "in a foreign language"], correctIndex: 0, explanation: "Summaries are paraphrased." },
        { prompt: "The summary section should not include your", options: ["opinion", "own words", "main points", "sentences"], correctIndex: 0, explanation: "The summary stays factual." },
        { prompt: "The first heading of the book report is the", options: ["title", "plot", "purpose", "characters"], correctIndex: 0, explanation: "Start with the title." },
        { prompt: "Author, genre and published date are given as", options: ["facts near the top of the report", "the plot", "the theme", "the climax"], correctIndex: 0, explanation: "These facts are reported early." },
        { prompt: "The sentence summary names the setting and the", options: ["theme", "price", "printer", "page count"], correctIndex: 0, explanation: "It gives setting and theme in one or two sentences." },
        { prompt: "The plot section should present the main events", options: ["in order", "in reverse only", "at random", "not at all"], correctIndex: 0, explanation: "Plot is a brief, ordered summary." },
        { prompt: "In the characters section, you name the protagonist, the antagonist and", options: ["important supporting characters", "the printer", "the price", "the cover artist"], correctIndex: 0, explanation: "Name the main and supporting characters and roles." },
        { prompt: "The purpose section states why the author", options: ["wrote the book", "was paid", "chose the cover", "set the price"], correctIndex: 0, explanation: "Purpose is the author's message/reason." },
        { prompt: "Setting means the book's", options: ["place and time", "price", "author", "genre"], correctIndex: 0, explanation: "Setting is where and when." },
        { prompt: "The purpose of a book connects most closely to its", options: ["theme", "page count", "publisher", "cover"], correctIndex: 0, explanation: "Purpose and theme both concern the central message." },
        { prompt: "A summary condenses several pages into a", options: ["few sentences", "longer text", "full chapter", "single word"], correctIndex: 0, explanation: "Summaries are short." },
        { prompt: "Retelling the whole plot in detail is a", options: ["common error in book reports", "requirement", "sign of good work", "way to add facts"], correctIndex: 0, explanation: "The plot section should be brief, not exhaustive." },
        { prompt: "Copying the back-cover blurb is wrong because you should write in", options: ["your own words", "capitals", "verse", "another language"], correctIndex: 0, explanation: "Write the summary yourself." },
        { prompt: "The plot's turning point is the", options: ["climax", "exposition", "title", "purpose"], correctIndex: 0, explanation: "The climax is the turning point." },
        { prompt: "Which belongs under 'Characters'?", options: ["the protagonist and their role", "the publication date", "the theme", "the price"], correctIndex: 0, explanation: "Characters lists the people and their roles." },
        { prompt: "Which belongs under 'Sentence summary'?", options: ["setting and theme in brief", "every event", "the full character list", "the author's biography"], correctIndex: 0, explanation: "The sentence summary gives setting and theme." },
        { prompt: "A book report should always state the", options: ["title and author", "reader's home address", "printer's profit", "weather"], correctIndex: 0, explanation: "Facts like title and author are essential." },
        { prompt: "Opinion in a book report belongs", options: ["only where evaluation is asked, not in the summary", "everywhere", "in the title", "in the facts"], correctIndex: 0, explanation: "The summary stays factual; opinion is separate." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the headings of the approved book report format.", answerKey: "Title; Author/Genre/Published date; Sentence summary (setting and theme); Characters; Purpose; Plot. Award 1 mark per heading (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is TRUE of a good summary?", options: ["It is in your own words and gives only main points", "It copies the text word for word", "It lists every small detail", "It is longer than the book"], correctIndex: 0, answerKey: "A summary is paraphrased and keeps to main points. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What should the 'sentence summary' section contain, and how long should it be?", answerKey: "It should name the setting (place and time) and the theme (underlying idea) of the book, in one or two sentences. Award 2 for the content (setting + theme) and 1 for the length.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the 'plot' section and the 'purpose' section of a book report.", answerKey: "The plot section gives the main events briefly and in order (what happens); the purpose section states why the author wrote the book — the message or idea (close to the theme). Award 2 per section clearly distinguished.", marks: 4 },
        { type: "ESSAY", prompt: "Using the approved format, write a full book report on a non-African prose text you have studied, completing every heading.", answerKey: "Award marks for: title and author/genre/date correctly given, 4 marks; a sentence summary naming setting and theme, 5 marks; characters and their roles, 5 marks; purpose/message stated, 4 marks; a brief ordered plot, 4 marks; own words and correct structure, 2 marks. A full plot retelling with no other headings should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Point of View (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "points-of-view",
      title: "Points of View",
      objective:
        "By the end of the topic, learners should be able to identify the point of view of a prose text — first person, third person limited, and third person omniscient — and explain how it shapes the reader's experience.",
      estimatedMinutes: 150,
      notes: `## What point of view is

- **Point of view** is the **position from which a story is told** — the vantage of the **narrator**.
- The point of view **shapes the reader's experience**, the **language** the narrator uses, and even the **plot** itself.
- Readers may be **persuaded, or not**, of a story's credibility through its point of view and the persona of the narrator.

## The main points of view

- **First person** — the narrator is a **character in the story**, using **"I"** or **"we"**. The reader sees only what this narrator knows and feels.
- **Third person limited** — the narrator is **outside** the story, using **"he/she/they"**, but follows the thoughts of **one character only**.
- **Third person omniscient** — an **all-knowing** narrator outside the story who can enter the minds of **any character** and reveal what any of them thinks.
- **Second person** — the narrator addresses the reader as **"you"** (rare in prose fiction).

## How point of view shapes a story

- **First person** feels **intimate and personal**, but is **limited and possibly unreliable** — we know only what the narrator knows and must judge their honesty.
- **Third person limited** gives closeness to one character while keeping some outside perspective.
- **Third person omniscient** gives the **widest view**, showing many characters' inner lives, but feels less intimate.
- An **unreliable narrator** is one whose account the reader cannot fully trust — a key reason point of view affects **credibility**.

## Identifying point of view

1. Look at the **pronouns**: "I/we" → first person; "he/she/they" → third person.
2. For third person, ask **whose thoughts** we can access: **one** character → limited; **any** character → omniscient.

## Set text (to be supplied by the teacher)

- Identify the point of view of the assigned non-African prose text and explain how it shapes what the reader knows and feels.
- *(The specific narrator and effects are studied from the text itself, not invented here.)*

## Common errors and misconceptions

- **Confusing first and third person** — check the pronouns the narrator uses.
- **Assuming a first-person narrator is always truthful** — they may be **unreliable**.
- **Confusing limited and omniscient** — limited follows **one** mind; omniscient can enter **any** mind.
- **Treating point of view as unimportant** — it shapes what the reader knows, feels and believes.`,
      workedExample: `**Task.** Identify and explain the point of view of two short prose openings.

**Opening A:** *"I did not mean to take the money. Even now, telling you this, I am not sure you will believe me."*
1. **Pronoun test:** "I" → **first person**.
2. **Effect:** the story is intimate and personal; we are inside one mind. But the narrator's plea — "I am not sure you will believe me" — signals a possibly **unreliable narrator**, so the reader must judge the account's **credibility**. Point of view here creates doubt and closeness at once.

**Opening B:** *"Kofi lay awake, certain he had failed. In the next room, his mother stared at the ceiling, wondering how she would tell him the good news."*
1. **Pronoun test:** "he/his/she" → **third person**.
2. **Whose thoughts?** We enter **both** Kofi's mind ("certain he had failed") **and** his mother's mind ("wondering how she would tell him") → **third person omniscient**.
3. **Effect:** the all-knowing narrator lets us see a **dramatic irony** — the reader knows the news is good while Kofi despairs — which a single viewpoint could not reveal.

**Conclusion:** identify point of view by the **pronouns** and by **whose thoughts** the narrator can access. First person is intimate but limited and possibly unreliable; third person limited follows one mind; third person omniscient sees into any character — and each choice changes what the reader knows and believes.`,
      quiz: [
        { prompt: "Point of view is the position from which a story is", options: ["told", "printed", "sold", "banned"], correctIndex: 0, explanation: "Point of view is the narrator's vantage." },
        { prompt: "A narrator using 'I' or 'we' is", options: ["first person", "third person limited", "third person omniscient", "second person"], correctIndex: 0, explanation: "First person uses I/we." },
        { prompt: "A narrator using 'he/she/they' is", options: ["third person", "first person", "second person", "no narrator"], correctIndex: 0, explanation: "Third person uses he/she/they." },
        { prompt: "A narrator who addresses the reader as 'you' is", options: ["second person", "first person", "third person", "omniscient"], correctIndex: 0, explanation: "Second person uses 'you'." },
        { prompt: "Third person limited follows the thoughts of", options: ["one character only", "every character", "no character", "the author"], correctIndex: 0, explanation: "Limited stays with one mind." },
        { prompt: "An all-knowing narrator who can enter any character's mind is", options: ["third person omniscient", "first person", "second person", "third person limited"], correctIndex: 0, explanation: "Omniscient knows all." },
        { prompt: "First-person narration feels", options: ["intimate and personal", "distant and cold", "silent", "numerical"], correctIndex: 0, explanation: "First person is close and personal." },
        { prompt: "A narrator the reader cannot fully trust is", options: ["unreliable", "omniscient", "objective", "second person"], correctIndex: 0, explanation: "An unreliable narrator's account is doubtful." },
        { prompt: "Point of view can affect a story's", options: ["credibility", "price", "font", "cover art"], correctIndex: 0, explanation: "It shapes how believable the story feels." },
        { prompt: "To tell first from third person, check the", options: ["pronouns", "page count", "price", "author's age"], correctIndex: 0, explanation: "Pronouns reveal the person." },
        { prompt: "The widest view of many characters' inner lives comes from", options: ["omniscient narration", "first person", "second person", "limited narration"], correctIndex: 0, explanation: "Omniscient sees into any character." },
        { prompt: "First-person narrators are", options: ["limited to what they know", "all-knowing", "never characters", "always reliable"], correctIndex: 0, explanation: "We know only what the first-person narrator knows." },
        { prompt: "Point of view shapes the reader's experience and the narrator's", options: ["language", "salary", "address", "shoe size"], correctIndex: 0, explanation: "POV shapes language and even plot." },
        { prompt: "Limited and omniscient differ in", options: ["how many minds we can access", "the price", "the length", "the cover"], correctIndex: 0, explanation: "Limited = one mind; omniscient = any mind." },
        { prompt: "Assuming a first-person narrator is always truthful ignores that they may be", options: ["unreliable", "omniscient", "second person", "a poet"], correctIndex: 0, explanation: "First-person narrators can be unreliable." },
        { prompt: "'We watched the ship sail' is written in", options: ["first person", "third person", "second person", "omniscient"], correctIndex: 0, explanation: "'We' is first person." },
        { prompt: "'You open the door and step inside' is written in", options: ["second person", "first person", "third person", "omniscient"], correctIndex: 0, explanation: "'You' is second person." },
        { prompt: "When a narrator reveals two characters' private thoughts, the POV is", options: ["third person omniscient", "third person limited", "first person", "second person"], correctIndex: 0, explanation: "Access to many minds means omniscient." },
        { prompt: "Point of view is important because it shapes what the reader", options: ["knows, feels and believes", "pays", "prints", "counts"], correctIndex: 0, explanation: "POV controls the reader's access and trust." },
        { prompt: "A story that stays inside one character's mind in third person is", options: ["third person limited", "omniscient", "first person", "second person"], correctIndex: 0, explanation: "One mind in third person is limited." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name three points of view and state the pronoun or access that identifies each.", answerKey: "First person — narrator uses 'I'/'we' and is a character in the story; third person limited — narrator uses 'he/she/they' and follows one character's thoughts; third person omniscient — narrator uses 'he/she/they' and can enter any character's mind. (Second person — 'you' — also acceptable.) Award marks for any three with the identifying feature.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "A narrator outside the story who reveals the private thoughts of several characters is", options: ["third person omniscient", "first person", "third person limited", "second person"], correctIndex: 0, answerKey: "Access to many minds = omniscient. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What is an unreliable narrator, and which point of view most often produces one?", answerKey: "An unreliable narrator is one whose account the reader cannot fully trust; this most often arises in first-person narration, where we know only what that character knows and must judge their honesty. Award 2 for the definition and 1 for the link to first person.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between third person limited and third person omniscient.", answerKey: "Both use third-person pronouns and stand outside the story, but limited follows the thoughts of only one character, while omniscient is all-knowing and can enter the minds of any character. Award 2 per point correctly explained.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing a non-African prose text you have studied, identify its point of view and discuss how that choice shapes what the reader knows, feels and believes. Support your answer from the text.", answerKey: "Award marks for: correct identification of the point of view with evidence (pronouns/access), 6 marks; explanation of how it shapes the reader's knowledge and closeness, 8 marks; comment on credibility/reliability where relevant, 4 marks; textual support, 4 marks; expression, 2 marks. Naming the POV with no discussion of effect should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
