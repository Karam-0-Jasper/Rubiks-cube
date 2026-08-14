import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester Two, Period V: African Prose. The Grade 10 Period V
// CONTENTS list has five top-level items, each rebuilt here as its own topic:
// (1) African Prose, (2) Figurative expression, (3) Element of Literature,
// (4) Point of view from which a Prose is written, (5) Effective book report.
// Literary concepts are sourced from LibreTexts (Humanities). The syllabus names
// African set texts (studied from the texts themselves); set-text-specific facts
// are NOT invented here. "African prose" as a culturally specific tradition is
// NOT directly covered by the approved sites — the general concept of prose
// fiction is taught and the gap is flagged.
export const literatureG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "African Prose: Analysis and the Book Report",
  summary:
    "Period V of the MoE Grade 10 Literature syllabus. Its five CONTENTS items are taught as five topics: African prose as a form; figurative expression in prose; the elements of literature; the point of view from which prose is written; and the effective book report.",
  topics: [
    {
      // source: LibreTexts (Humanities) — The Prose Genre; Fiction and Drama - types, terms; Defining Literature (https://human.libretexts.org/Courses/Clovis_Community_College/Oral_Interpretation_of_Literature_(Martinez)/01%3A_Chapters/1.07%3A_The_Prose_Genre)
      slug: "african-prose-fiction",
      title: "African Prose as a Form",
      objective:
        "By the end of the topic, learners should be able to define prose fiction, distinguish the novel from the short story, and apply the elements of prose fiction to study an African prose work.",
      estimatedMinutes: 150,
      notes: `## Prose fiction

- **Prose** is language with **ordinary syntax and natural speech**, written in **sentences and paragraphs**, not verse lines.
- **Fiction** is **imagined** storytelling — the writer creates characters and events freely.
- **Prose fiction** therefore means imagined stories told in sentences: the **novel**, the **novella** and the **short story**.

## The novel and the short story

| Feature | Novel | Short story |
| --- | --- | --- |
| Length | long, no fixed limit | short (often 2000–6000 words) |
| Plot | complex, with sub-plots | one major conflict |
| Characters | many, developed | at least one developed character |
| Themes | several | usually one |

- A **novel** allows freedom to develop **complex plots, subplots, multiple characters and broad themes**.
- A **short story** focuses on **one major conflict** and at least one developed character.

## African prose

- **African prose** is prose written by African authors, applying the same forms (novel, short story) to **African life, settings and concerns**.
- The syllabus set texts for this period are African prose works, studied from the texts themselves.
- *(Flag: the approved sites cover prose fiction as a general form and its elements — which is what this note teaches. The culturally specific features of African prose, and facts about particular African authors and set texts, are NOT drawn from the approved sites and should be studied from the set texts and teacher materials.)*

## The elements to apply

Study any prose work by its **elements**:
- **Plot** — the sequence of events (exposition → rising action → climax → falling action → resolution).
- **Character** — protagonist, antagonist, round/flat, dynamic/static; revealed through characterisation.
- **Setting** — the time and place, and the social world.
- **Theme** — the central idea or message.
- **Point of view** — whose eyes tell the story.
- **Style** — the author's use of language.

## Common errors and misconceptions

- **Confusing prose with poetry** — prose runs in **sentences**, poetry in **lines** with regular rhythm.
- **Thinking a short story is just a short novel** — it differs in **focus**: one conflict, fewer characters, usually one theme.
- **Treating prose as only European** — prose fiction is a **universal form**; African writers use it for African stories.
- **Retelling instead of analysing** — study a prose work by its **elements**, not by summarising the plot.`,
      workedExample: `**Task.** Explain how you would study an African prose work, applying the elements of prose fiction, and distinguish a novel from a short story.

**Model method**

**Step 1 — identify the form.** Is it a **novel** (long, complex plot, many characters, several themes) or a **short story** (short, one main conflict, few characters, usually one theme)? This sets your expectations.

**Step 2 — trace the plot.** Map the events onto exposition → rising action → climax → falling action → resolution.

**Step 3 — analyse character.** Identify the **protagonist** and **antagonist**; note who is **round/flat** and **dynamic/static**, and how the author reveals them (characterisation).

**Step 4 — examine setting.** Note the **time and place** and the social world; in African prose the setting often shapes the meaning.

**Step 5 — find the theme and point of view.** Ask what central idea the work conveys, and **whose eyes** tell the story (first or third person).

**Step 6 — connect to the African context.** The set work is rooted in African life; connect its events, characters and conflicts to that context. *(Study the specific cultural features from the text itself, not from this general note.)*

**Conclusion:** studying an African prose work uses the **same elements** as any prose fiction — plot, character, setting, theme, point of view and style — with attention to how the African setting shapes the meaning, and analysis rather than plot summary.`,
      quiz: [
        { prompt: "Prose fiction is imagined storytelling told in", options: ["sentences and paragraphs", "verse lines", "stanzas", "musical bars"], correctIndex: 0, explanation: "Prose runs in sentences; fiction is imagined." },
        { prompt: "A long work of prose fiction is a", options: ["novel", "poem", "play", "sonnet"], correctIndex: 0, explanation: "The novel is long prose fiction." },
        { prompt: "A short work of prose fiction with one main conflict is a", options: ["short story", "novel", "epic", "ode"], correctIndex: 0, explanation: "The short story focuses on one conflict." },
        { prompt: "A novel allows the writer to develop", options: ["complex plots, subplots and many characters", "only one incident", "no characters", "only rhyme"], correctIndex: 0, explanation: "Novels have room for complexity." },
        { prompt: "African prose is prose written by African authors about African", options: ["life, settings and concerns", "chemistry", "algebra", "maps"], correctIndex: 0, explanation: "It applies prose fiction to African experience." },
        { prompt: "The sequence of events in a prose work is the", options: ["plot", "setting", "theme", "style"], correctIndex: 0, explanation: "Plot is the events and their order." },
        { prompt: "The main character of a prose work is the", options: ["protagonist", "antagonist", "narrator only", "author"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The time and place of a prose work is its", options: ["setting", "plot", "climax", "point of view"], correctIndex: 0, explanation: "Setting is the time and place." },
        { prompt: "The central idea of a prose work is its", options: ["theme", "plot", "cover", "price"], correctIndex: 0, explanation: "The theme is the central idea." },
        { prompt: "Whose eyes tell the story is the", options: ["point of view", "setting", "theme", "climax"], correctIndex: 0, explanation: "Point of view is the perspective." },
        { prompt: "A short story is NOT just a short novel because it differs in", options: ["focus (one conflict, fewer characters)", "language", "truth", "author's country"], correctIndex: 0, explanation: "The difference is one of focus, not only length." },
        { prompt: "The author's use of language is their", options: ["style", "setting", "plot", "theme"], correctIndex: 0, explanation: "Style is the use of language." },
        { prompt: "Prose fiction is best described as a form that is", options: ["universal", "European only", "African only", "a kind of poem"], correctIndex: 0, explanation: "Prose fiction is used across cultures." },
        { prompt: "A novel usually explores", options: ["several themes", "no theme", "only numbers", "only settings"], correctIndex: 0, explanation: "Novels have room for several themes." },
        { prompt: "The way an author reveals a character is called", options: ["characterisation", "setting", "resolution", "point of view"], correctIndex: 0, explanation: "Characterisation is how character is shown." },
        { prompt: "The plot arc runs exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "It ends in resolution." },
        { prompt: "A character with depth and many sides is", options: ["round", "flat", "static", "minor"], correctIndex: 0, explanation: "Round characters are fully developed." },
        { prompt: "A good study of a prose work analyses its elements rather than", options: ["retelling the plot", "quoting the text", "naming the theme", "reading closely"], correctIndex: 0, explanation: "Avoid plot summary." },
        { prompt: "Confusing prose with poetry is wrong because prose runs in", options: ["sentences", "verse lines", "stanzas", "musical bars"], correctIndex: 0, explanation: "Prose is sentences, not verse." },
        { prompt: "In African prose, the setting often", options: ["shapes the meaning", "is irrelevant", "is hidden", "is unimportant"], correctIndex: 0, explanation: "The setting frequently carries meaning." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define prose fiction and name its three forms.", answerKey: "Prose fiction is imagined storytelling told in sentences and paragraphs (ordinary syntax, natural speech), not verse. Its three forms: the novel, the novella, the short story. Award 2 for the definition and 1 per form (max 3).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "The main difference between a novel and a short story is one of", options: ["scale and focus", "whether they are fiction", "the author's country", "the use of language"], correctIndex: 0, answerKey: "Both are prose fiction; they differ in scale and focus. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the six elements you would use to study a prose work.", answerKey: "Plot, character, setting, theme, point of view, style. Award 1 mark each (max 6, capped at the marks available).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "For an African prose work you have studied, name its protagonist and its setting.", answerKey: "Accept a valid protagonist and setting (time and place/social world) from a studied African prose work. Award 2 for the protagonist and 3 for a described setting.", marks: 5 },
        { type: "ESSAY", prompt: "Using an African prose work you have studied, show how the elements of prose fiction (plot, character, setting, theme, point of view) can be applied to interpret it. Support your answer with reference to the text.", answerKey: "Award marks for: application of plot, character, setting, theme and point of view to the studied work, 15 marks; connection of the work's meaning to its African setting, 4 marks; textual reference rather than plot summary, 3 marks; expression, 2 marks. A response that only summarises the story should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language; Literary Devices Glossary (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "figurative-expression-in-prose",
      title: "Figurative Expression in Prose",
      objective:
        "By the end of the topic, learners should be able to identify figures of speech in prose, apply the name–quote–effect method, and explain how figurative language creates images and feeling in a story.",
      estimatedMinutes: 150,
      notes: `## Figurative expression in prose

- **Figurative expressions (figures of speech)** use language in a **non-literal** way, meaning **more than the literal words**.
- Prose is usually more direct than poetry, but it **can still use figurative language** to create images, feeling and emphasis.
- Naming a device is only half the skill — always explain its **effect**.

## The main figures to recognise in prose

- **Simile** — a comparison using **like or as**.
- **Metaphor** — a **direct comparison** without like or as.
- **Personification** — **human qualities given to non-human things**.
- **Hyperbole** — deliberate **exaggeration**.
- **Imagery** — descriptive detail that **paints a picture** and appeals to the senses.
- **Symbolism** — a **physical object representing an abstract idea**.
- **Irony** — a contrast between appearance and reality (verbal, situational or dramatic).

## Why writers of prose use figures of speech

- To make description **vivid** (imagery, simile, metaphor).
- To create **mood and feeling** (personification, symbolism).
- To emphasise or surprise (hyperbole, irony).
- Figurative language conveys **much meaning in few words**.

## The name–quote–effect method

1. **Name** the figure of speech.
2. **Quote** the words from the text.
3. **Explain the effect** — what image or feeling it creates and how it helps the meaning.

## Common errors and misconceptions

- **Device-spotting** — listing devices with no explanation earns almost nothing; always complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Assuming prose has no figures of speech** — prose uses figurative language too, though usually less densely than poetry.
- **Reading a symbol too literally** — a symbol stands for a **larger idea**.`,
      workedExample: `**Task.** Analyse the figurative expressions in this prose sentence using name–quote–effect.

*"The old house crouched at the end of the road, its windows watching, and the silence inside was a held breath waiting to be let go."*

**Device 1 — personification**
1. **Name:** personification.
2. **Quote:** "crouched … its windows watching."
3. **Effect:** giving the house the human actions of crouching and watching makes it seem **alive and menacing**, so the reader feels unease before anything has happened — the setting itself becomes threatening.

**Device 2 — metaphor**
1. **Name:** metaphor.
2. **Quote:** "the silence inside was a held breath."
3. **Effect:** calling the silence a **held breath** suggests **tension on the point of breaking** — as if the house is waiting for something to happen. It builds suspense and prepares the reader for a shock.

**Conclusion:** the personification makes the house **menacing** and the metaphor makes the silence **tense**, together creating a mood of dread. Naming the devices is not enough — the marks come from explaining what each **makes the reader feel**.`,
      quiz: [
        { prompt: "Figurative language means language used", options: ["in a non-literal way for effect", "only in capitals", "with no meaning", "only aloud"], correctIndex: 0, explanation: "It carries meaning beyond the literal." },
        { prompt: "Prose, compared with poetry, is usually", options: ["more direct but can still use figures of speech", "unable to use figures of speech", "always in verse", "only factual"], correctIndex: 0, explanation: "Prose can still use figurative language." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "symbol", "hyperbole"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison without 'like' or 'as' is a", options: ["metaphor", "simile", "personification", "allusion"], correctIndex: 0, explanation: "A metaphor is direct." },
        { prompt: "Giving human qualities to non-human things is", options: ["personification", "hyperbole", "irony", "symbolism"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "Deliberate exaggeration is", options: ["hyperbole", "simile", "metaphor", "imagery"], correctIndex: 0, explanation: "Hyperbole exaggerates for effect." },
        { prompt: "Descriptive detail appealing to the senses is", options: ["imagery", "irony", "metonymy", "hyperbole"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "An object standing for an abstract idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "A contrast between appearance and reality is", options: ["irony", "assonance", "imagery", "simile"], correctIndex: 0, explanation: "Irony contrasts appearance and reality." },
        { prompt: "The name–quote–effect method ends with", options: ["explaining the effect", "counting lines", "translating", "ignoring meaning"], correctIndex: 0, explanation: "Marks come from the effect." },
        { prompt: "'The windows watched the street' is", options: ["personification", "simile", "hyperbole", "symbol"], correctIndex: 0, explanation: "The windows are given a human act." },
        { prompt: "'Her words were as sharp as knives' is a", options: ["simile", "metaphor", "personification", "allusion"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "'The silence was a held breath' is a", options: ["metaphor", "simile", "hyperbole", "assonance"], correctIndex: 0, explanation: "It calls silence a held breath directly." },
        { prompt: "Writers use figurative language to convey", options: ["much meaning in few words", "no meaning", "only facts", "only numbers"], correctIndex: 0, explanation: "Figures of speech are economical." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is what is missing." },
        { prompt: "Assuming prose has no figures of speech is", options: ["wrong — prose uses them too", "correct", "only true for novels", "only true for essays"], correctIndex: 0, explanation: "Prose uses figurative language, if less densely." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "page number", "price"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "Personification is often used in prose to create", options: ["mood and feeling", "a price list", "an index", "a map"], correctIndex: 0, explanation: "It builds mood by animating the non-human." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is a direct comparison." },
        { prompt: "When analysing a device in prose, explain what it makes the reader", options: ["see or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the reader's experience." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State whether prose can use figurative language, and name three figures of speech a prose writer might use.", answerKey: "Yes — prose is usually more direct than poetry but can still use figurative language. Any three: simile, metaphor, personification, hyperbole, imagery, symbolism, irony. Award 2 for the point and 1 per figure (max 3).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "'The old house crouched at the end of the road' uses which figure of speech?", options: ["personification", "simile", "hyperbole", "metonymy"], correctIndex: 0, answerKey: "The house is given the human act of crouching — personification. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'Fear was a cold hand on his neck.'", answerKey: "Name: metaphor (fear is called a cold hand). Quote: 'a cold hand on his neck.' Effect: it makes the fear feel physical, sudden and chilling, conveying the character's dread vividly. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a prose writer might use figurative language.", answerKey: "To make description vivid (imagery, simile, metaphor); to create mood and feeling (personification, symbolism); to emphasise or surprise (hyperbole, irony); and to convey much meaning in few words. Award up to 4 marks for valid reasons.", marks: 4 },
        { type: "ESSAY", prompt: "Choose a prose work you have studied and discuss how the writer uses at least three figures of speech to create images or feeling, explaining the effect of each with reference to the text.", answerKey: "Award marks for: at least three figures identified and referenced accurately, 9 marks; explanation of the effect of each on image/feeling — the discriminating requirement — 12 marks; textual reference and expression, 3 marks. Mere device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — How to Analyze Fiction: Elements of Literature; The Five Elements of Fiction (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/04%3A_About_Fiction_-_Short_Stories_and_the_Novel/4.05%3A_How_to_Analyze_Fiction_-_Elements_of_Literature)
      slug: "elements-of-literature-in-prose",
      title: "The Elements of Literature in Prose",
      objective:
        "By the end of the topic, learners should be able to identify and analyse the elements of a prose work — plot, character, setting, theme, point of view and style — and show how they work together.",
      estimatedMinutes: 150,
      notes: `## The elements of a prose work

To analyse a novel or short story, take it apart into its main **elements** and see how they fit back together.

## Plot

- The **plot** is the **main sequence of events** that make up the story.
- Structure runs **exposition → rising action → climax → falling action → resolution**; note turning points and the climax.

## Character and characterisation

- **Characterisation** deals with **how the characters are described** — through dialogue, physical appearance, thoughts, feelings and interactions.
- A **static** character does not change; a **dynamic** character develops.
- Ask whether characters are believable or stereotypes.

## Setting

- The **setting** is **where and when** the story takes place — geography, weather, time of day and social conditions.

## Theme

- The **theme** is the **main idea, lesson or message** — usually an abstract, universal idea about the human condition, society or life.

## Point of view

- **Point of view** is **whose eyes** the story is told through: **first person** ("I"), **third person** ("he/she/they"), or an **all-knowing** third person revealing every character's thoughts.

## Style

- **Style** concerns the author's **vocabulary, use of imagery, tone and feeling**. A style can be ironic, humorous, cold or dramatic.

## How the elements work together

- A strong analysis shows how the elements **connect** — how setting creates the situation the character responds to, how character carries theme, how point of view shapes what we know.
- Follow **name–evidence–explanation**: name the element, give evidence from the text, explain its effect. Avoid mere plot summary.

## Common errors and misconceptions

- **Retelling the story instead of analysing** — plot summary is the commonest weakness.
- **Listing the elements separately** — show how they **connect**, not four unlinked paragraphs.
- **Confusing plot with theme** — plot is *what happens*; theme is the *central idea*.
- **Ignoring point of view and style** — they shape how the story is experienced.`,
      workedExample: `**Task.** Show how the elements of a prose work connect, using a general model.

**Model story:** a young farmer, proud and stubborn, refuses to leave his drying land as a drought worsens.

**Setting**
The **time and place** — a farming village during a long **drought**. The setting creates the pressure the whole story turns on.

**Character (and characterisation)**
The **protagonist** is the young farmer, **proud and stubborn** — revealed through his **actions** (refusing to leave) and his **speech** (insisting the rains will come). He is a **dynamic** character if he changes by the end.

**Plot**
The events follow the plot arc: the drought is introduced (**exposition**), the farmer's situation worsens as he refuses help (**rising action**), a crisis forces a choice (**climax**), and the outcome unfolds (**falling action → resolution**).

**Theme**
The **central idea** — for example, *pride can blind us to necessary change*. The theme is carried by the farmer's character and his choices.

**Point of view**
If told in the **third person**, we watch the farmer from outside, perhaps seeing what he cannot; if in the **first person** ("I"), we are locked inside his stubbornness.

**How they connect**
The **drought setting** creates the pressure; the farmer's **proud character** decides his response; that response is the **plot**; and through his fall or change the story conveys its **theme**. The **point of view** controls how much we see. No element stands alone.

**Conclusion:** analysing prose means naming each element with evidence and showing how **setting, character, plot, theme, point of view and style connect** to create meaning — not summarising the story.`,
      quiz: [
        { prompt: "The main sequence of events in a story is the", options: ["plot", "setting", "theme", "style"], correctIndex: 0, explanation: "Plot is the sequence of events." },
        { prompt: "How characters are described and revealed is", options: ["characterisation", "setting", "resolution", "point of view"], correctIndex: 0, explanation: "Characterisation is how character is shown." },
        { prompt: "Where and when a story takes place is the", options: ["setting", "plot", "theme", "climax"], correctIndex: 0, explanation: "Setting is the time and place." },
        { prompt: "The main idea or message of a work is the", options: ["theme", "plot", "setting", "cover"], correctIndex: 0, explanation: "Theme is the central idea." },
        { prompt: "Whose eyes the story is told through is the", options: ["point of view", "plot", "setting", "style"], correctIndex: 0, explanation: "Point of view is the perspective." },
        { prompt: "The author's vocabulary, imagery and tone make up their", options: ["style", "setting", "plot", "theme"], correctIndex: 0, explanation: "Style is the use of language." },
        { prompt: "A character who develops during the story is", options: ["dynamic", "static", "flat", "minor"], correctIndex: 0, explanation: "Dynamic characters change." },
        { prompt: "A character who does not change is", options: ["static", "dynamic", "round", "the protagonist"], correctIndex: 0, explanation: "Static characters stay the same." },
        { prompt: "A story told with 'I' uses the", options: ["first person", "third person", "second person", "no person"], correctIndex: 0, explanation: "'I' is first person." },
        { prompt: "A story told with 'he/she/they' uses the", options: ["third person", "first person", "second person", "no person"], correctIndex: 0, explanation: "'he/she' is third person." },
        { prompt: "An all-knowing narrator revealing every character's thoughts is", options: ["omniscient third person", "first person", "objective", "second person"], correctIndex: 0, explanation: "Omniscient narration knows all minds." },
        { prompt: "A strong analysis shows how the elements", options: ["connect", "stay separate", "are ignored", "are counted only"], correctIndex: 0, explanation: "Linking the elements lifts analysis." },
        { prompt: "The commonest weakness in analysing prose is", options: ["retelling the plot", "quoting evidence", "explaining effect", "naming elements"], correctIndex: 0, explanation: "Plot summary is not analysis." },
        { prompt: "Plot is what happens; theme is the", options: ["central idea", "cast list", "setting only", "price"], correctIndex: 0, explanation: "Do not confuse plot with theme." },
        { prompt: "The plot arc runs exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "It ends in resolution." },
        { prompt: "Characterisation is revealed through dialogue, appearance, thoughts, feelings and", options: ["interactions", "prices", "printers", "page numbers"], correctIndex: 0, explanation: "Interactions also reveal character." },
        { prompt: "The analytical method for prose is", options: ["name–evidence–explanation", "guess–skip–stop", "read–forget", "count–copy"], correctIndex: 0, explanation: "Name, give evidence, explain effect." },
        { prompt: "A style can be described as ironic, humorous, cold or", options: ["dramatic", "priced", "printed", "paged"], correctIndex: 0, explanation: "Style has a describable tone/feeling." },
        { prompt: "Listing the elements in four unlinked paragraphs is weak because you should show how they", options: ["connect", "cost", "print", "sell"], correctIndex: 0, explanation: "Connection is what makes analysis strong." },
        { prompt: "Point of view shapes", options: ["how much the reader knows", "the ticket price", "the printer", "the page count"], correctIndex: 0, explanation: "The chosen perspective controls what we see." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the six elements of a prose work and define any three.", answerKey: "The six: plot, character, setting, theme, point of view, style. Definitions (any three): plot — the main sequence of events; character/characterisation — how characters are described and revealed; setting — where and when the story takes place; theme — the main idea/message; point of view — whose eyes tell the story; style — the author's vocabulary, imagery and tone. Award 3 for the list and 1 per definition (max 3).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "An all-knowing narrator who reveals every character's thoughts uses", options: ["third-person omniscient point of view", "first person", "second person", "an objective point of view"], correctIndex: 0, answerKey: "Third-person omniscient. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a static and a dynamic character.", answerKey: "A static character does not change over the course of the story; a dynamic character develops or changes. Award 2 per correctly explained term.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "For a prose work you have studied, name its central theme and one element that develops it.", answerKey: "Accept a valid theme (a full idea) from a studied prose work and one element (character, plot, setting, point of view or style) shown to develop it, with brief evidence. Award 3 for the theme and 2 for a relevant element with evidence.", marks: 5 },
        { type: "ESSAY", prompt: "Using a prose work you have studied, discuss how at least four elements (plot, character, setting, theme, point of view, style) connect to create the work's meaning. Support your answer with reference to the text.", answerKey: "Award marks for: at least four elements analysed with evidence, 12 marks; showing how they connect rather than four separate lists — the discriminating requirement — 8 marks; textual reference rather than plot summary, 2 marks; expression, 2 marks. Plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — The Five Elements of Fiction; How to Analyze Fiction: Elements of Literature; Fiction and Drama - types, terms (https://socialsci.libretexts.org/Bookshelves/Communication/Journalism_and_Mass_Communication/Introduction_to_Narrative_Journalism_(Wielechowski)/01%3A_Chapters/1.03%3A_The_Five_Elements_of_Fiction)
      slug: "point-of-view",
      title: "Point of View in Prose",
      objective:
        "By the end of the topic, learners should be able to identify the point of view from which a prose work is written — first person, third-person limited or omniscient — and explain how the choice affects the reader.",
      estimatedMinutes: 150,
      notes: `## What point of view is

- **Point of view** is **whose eyes** the story is told through — the position from which the story is told.
- Choosing a point of view decides **what the reader can know** and **how close** the reader feels to the characters.

## The main points of view

- **First person** — the narrator is a character and uses **"I," "me," "we."** It is compelling because it brings us **intimately close** to the narrator — but we only know what that character knows (and the view may be biased).
- **Third-person limited** — the narrator uses **"he/she/they"** and limits themselves to **one character's thoughts**.
- **Third-person omniscient** — the narrator uses "he/she/they" and is **all-knowing**, able to enter **various characters' thoughts**.
- **Objective** — the narrator reports only what can be seen and heard, without entering any character's mind.

## How the choice affects the reader

| Point of view | Access | Effect on reader |
| --- | --- | --- |
| First person | one character ("I") | personal, immediate, possibly biased |
| Third-person limited | one character ("he/she") | close to one, but outside |
| Third-person omniscient | all characters | wide, balanced view |
| Objective | none (outside only) | detached, like a camera |

## Identifying the point of view

- Look at the **pronouns**: "I/we" signals **first person**; "he/she/they" signals **third person**.
- Then ask **how many minds** the narrator can enter: **one** (limited) or **all** (omniscient).

## Why it matters

- The point of view controls **what we are told and what is hidden**, and therefore how we judge the characters and events.
- A first-person narrator can **mislead** us; an omniscient narrator can show us **more than any character knows**.

## Common errors and misconceptions

- **Confusing first and third person** — first person uses **"I"**; third person uses **"he/she/they."**
- **Assuming a first-person narrator is always reliable** — they may be **biased** or mistaken.
- **Mixing up limited and omniscient** — limited enters **one** mind; omniscient enters **many**.
- **Ignoring point of view in analysis** — it shapes the whole reading and is a common exam question.`,
      workedExample: `**Task.** For each passage, identify the point of view and explain its effect.

**(a)** *"I did not trust him from the first, though I could not have said why."*
- **Point of view: first person.** The pronoun **"I"** shows a character narrating.
- **Effect:** it is **personal and immediate** — we are inside one character's feelings — but it is also **limited and possibly biased**: we only know this narrator's suspicion, and cannot be sure it is fair.

**(b)** *"She smiled and said she was fine. She was not fine; her heart was breaking, though only the reader could know it."*
- **Point of view: third-person omniscient.** The narrator uses **"she"** and enters her hidden thoughts ("her heart was breaking").
- **Effect:** it gives the reader **more than any character can see** — we know the truth behind her smile, creating dramatic irony and sympathy.

**(c)** *"He watched the door. She entered, set down the bag, and left without a word."*
- **Point of view: third-person objective (or limited).** The narrator uses "he/she" and reports mainly **what is seen and done**, without entering minds.
- **Effect:** it feels **detached, like a camera**, leaving the reader to infer feelings from behaviour.

**Conclusion:** identify point of view from the **pronouns** (I vs he/she) and the **number of minds** the narrator enters, then explain how the choice shapes **what we know and how close we feel** — first person is intimate but limited; omniscient is wide and revealing.`,
      quiz: [
        { prompt: "Point of view is", options: ["whose eyes the story is told through", "the ticket price", "the setting only", "the plot"], correctIndex: 0, explanation: "It is the narrative perspective." },
        { prompt: "A story told with 'I' is written in the", options: ["first person", "third person", "second person", "no person"], correctIndex: 0, explanation: "'I' is first-person narration." },
        { prompt: "A story told with 'he/she/they' is written in the", options: ["third person", "first person", "second person", "no person"], correctIndex: 0, explanation: "'he/she' is third person." },
        { prompt: "First-person narration tends to feel", options: ["personal and immediate", "distant and cold", "impossible to follow", "always false"], correctIndex: 0, explanation: "'I' brings us close to one character." },
        { prompt: "A third-person narrator limited to one character's thoughts is", options: ["third-person limited", "first person", "omniscient", "objective"], correctIndex: 0, explanation: "Limited narration enters one mind." },
        { prompt: "An all-knowing narrator entering various characters' thoughts is", options: ["third-person omniscient", "first person", "limited", "objective"], correctIndex: 0, explanation: "Omniscient narration knows all minds." },
        { prompt: "A narrator who reports only what is seen and heard is", options: ["objective", "omniscient", "first person", "limited"], correctIndex: 0, explanation: "Objective narration stays outside minds." },
        { prompt: "First-person narration is limited because we only know", options: ["what that character knows", "everything", "nothing", "the ending"], correctIndex: 0, explanation: "We are confined to one character's knowledge." },
        { prompt: "A first-person narrator may be", options: ["biased or mistaken", "always reliable", "all-knowing", "invisible"], correctIndex: 0, explanation: "First-person views can be biased." },
        { prompt: "Omniscient narration can show the reader", options: ["more than any character knows", "less than a character", "nothing", "only the setting"], correctIndex: 0, explanation: "The all-knowing narrator sees all minds." },
        { prompt: "To identify point of view, first look at the", options: ["pronouns (I vs he/she)", "price", "printer", "page count"], correctIndex: 0, explanation: "Pronouns signal first vs third person." },
        { prompt: "After the pronouns, ask how many minds the narrator can", options: ["enter", "sell", "print", "count"], correctIndex: 0, explanation: "One mind = limited; many = omniscient." },
        { prompt: "Third-person limited enters", options: ["one character's thoughts", "all characters' thoughts", "no thoughts", "the reader's thoughts"], correctIndex: 0, explanation: "Limited narration stays with one mind." },
        { prompt: "Point of view controls what we are told and what is", options: ["hidden", "printed", "priced", "paged"], correctIndex: 0, explanation: "It decides what the reader knows." },
        { prompt: "Confusing first and third person is wrong because first person uses", options: ["'I'", "'he'", "'she'", "'they'"], correctIndex: 0, explanation: "First person uses 'I'." },
        { prompt: "Objective narration feels", options: ["detached, like a camera", "intimate", "all-knowing", "biased"], correctIndex: 0, explanation: "It reports only the observable." },
        { prompt: "A first-person narrator seeing a smile but not the sadness behind it shows the point of view is", options: ["limited to one character", "omniscient", "objective for all", "second person"], correctIndex: 0, explanation: "First person knows only its own mind." },
        { prompt: "An omniscient narrator revealing a character's hidden grief creates", options: ["sympathy/irony beyond the characters", "a price list", "an index", "a map"], correctIndex: 0, explanation: "The reader knows more than the characters." },
        { prompt: "Ignoring point of view in analysis is a mistake because it shapes the whole", options: ["reading", "price", "cover", "index"], correctIndex: 0, explanation: "Point of view shapes how the story is experienced." },
        { prompt: "The choice of point of view decides how close the reader feels to the", options: ["characters", "printer", "publisher", "price"], correctIndex: 0, explanation: "It controls the reader's closeness." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the main points of view from which prose can be written.", answerKey: "First person ('I'); third-person limited (one character's thoughts, 'he/she'); third-person omniscient (all-knowing, entering various characters' thoughts); objective (only what is seen and heard). Award 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A narrator who can enter the thoughts of every character uses", options: ["third-person omniscient point of view", "first person", "third-person limited", "objective point of view"], correctIndex: 0, answerKey: "Third-person omniscient. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how first-person and third-person omniscient points of view differently affect the reader.", answerKey: "First person ('I') is personal and immediate but limited to one character's knowledge and possibly biased, drawing the reader close to one mind. Third-person omniscient is all-knowing, entering various characters' thoughts, giving the reader a wider, more balanced view and sometimes more than any character knows. Award 2 for each point of view's effect and 1 for the contrast.", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "How do you identify the point of view of a prose passage? Give the two steps.", answerKey: "1. Look at the pronouns: 'I/we' = first person; 'he/she/they' = third person. 2. Ask how many minds the narrator can enter: one (limited) or many (omniscient); or none if objective. Award 2 for the pronoun step and 2 for the minds step, +1 for clarity.", marks: 4 },
        { type: "ESSAY", prompt: "Choose a prose work you have studied and discuss the point of view from which it is written, explaining how that choice shapes what the reader knows and how the reader responds to the characters. Support your answer with reference to the text.", answerKey: "Award marks for: correct identification of the point of view with evidence (pronouns, access to minds), 6 marks; explanation of how it shapes what the reader knows, 8 marks; how it shapes the reader's response to the characters (closeness, trust, irony), 6 marks; textual reference, 2 marks; expression, 2 marks. A response that only labels the point of view without analysing its effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — How to Analyze Fiction: Elements of Literature; The Five Elements of Fiction (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/04%3A_About_Fiction_-_Short_Stories_and_the_Novel/4.05%3A_How_to_Analyze_Fiction_-_Elements_of_Literature)
      slug: "effective-book-report",
      title: "The Effective Book Report",
      objective:
        "By the end of the topic, learners should be able to write an effective book report that identifies the book, summarises it, and analyses its characters, setting, plot and theme with a supported personal response.",
      estimatedMinutes: 150,
      notes: `## What a book report is

- A **book report** is a written account of a book that **identifies** it, **summarises** it, and **analyses** its main literary elements.
- It uses the **elements of literature** — plot, character, setting, theme, point of view — to describe and judge the book.
- A clear book report is organised under **headings**, so the reader can follow the analysis.

## The parts of an effective book report

1. **Title and author** — the book's title, its author, genre and (if known) date of publication.
2. **Summary** — a brief overview of the book: the **setting** (time and place) and the **main storyline**, without retelling every event.
3. **Characters** — the **main and supporting characters**, with a note on the protagonist and antagonist and their key traits.
4. **Plot** — the **sequence of events** (exposition → rising action → climax → falling action → resolution), told briefly.
5. **Theme** — the **central idea or message** of the book.
6. **Point of view** — whose eyes the story is told through.
7. **Personal response** — your **reasoned opinion**, supported by evidence from the book.

## Summary versus analysis

- The **summary** gives an overview so the reader sees what the book is about.
- But a good report goes beyond summary to **analyse** — using **name–evidence–explanation** for character, theme and the writer's craft.

## Writing a supported personal response

- A **personal response** is a **reasoned opinion** (the book is effective, moving or weak), **supported by evidence** — not just "I liked it."
- Form: **opinion + because + evidence.** *"The ending is powerful because …"*

## Presentation

- Use **clear headings** for each section so the report is easy to follow.
- A consistent, complete format makes the writer credible.

## Common errors and misconceptions

- **Writing only a summary** — an effective report also **analyses** character, theme and craft.
- **Retelling every event** — the summary should be **brief**, giving the setting and main storyline.
- **Giving an unsupported opinion** — "I liked it" is not a response; use **opinion + because + evidence**.
- **Leaving out sections** — an effective report identifies the book, summarises, analyses the elements, and responds.`,
      workedExample: `**Task.** Outline an effective book report for a novel you have studied, showing each section.

**Model outline**

**1. Title and author**
- Give the book's **title**, its **author**, its **genre** (e.g. a novel) and, if known, its **date of publication**.

**2. Summary**
- In two or three sentences, give the **setting** (time and place) and the **main storyline** — enough for the reader to see what the book is about, without retelling every event.

**3. Characters**
- Name the **protagonist** and **antagonist** and the main supporting characters.
- Give one or two **key traits** of each, with brief evidence.

**4. Plot**
- Briefly trace the **plot arc**: exposition (the situation), rising action (complications), climax (the turning point), falling action and resolution.

**5. Theme**
- State the **central idea** as a full idea (e.g. *"pride can blind us to necessary change"*), not a single word.

**6. Point of view**
- Say whether the story is told in the **first person** or **third person**, and note the effect.

**7. Personal response**
- Give a **reasoned opinion** supported by evidence: *"The ending is powerful because the final image of … captures the theme of … ."* Never just "I liked it."

**Conclusion:** an effective book report **identifies** the book, gives a **brief summary**, **analyses** its characters, plot, theme and point of view, and ends with a **supported personal response** — organised under clear headings.`,
      quiz: [
        { prompt: "A book report identifies a book, summarises it and", options: ["analyses its literary elements", "prints it", "sells it", "translates it"], correctIndex: 0, explanation: "It analyses the main elements." },
        { prompt: "A book report should be organised under", options: ["clear headings", "no headings", "one long paragraph", "a price list"], correctIndex: 0, explanation: "Headings make it easy to follow." },
        { prompt: "The first section of a book report gives the", options: ["title, author and genre", "climax only", "personal opinion only", "index"], correctIndex: 0, explanation: "Identify the book first." },
        { prompt: "The summary of a book report should give the setting and the", options: ["main storyline", "every single event", "price", "printer"], correctIndex: 0, explanation: "A brief overview, not every event." },
        { prompt: "The characters section should note the protagonist, the antagonist and their", options: ["key traits", "shoe sizes", "salaries", "birthdays"], correctIndex: 0, explanation: "Give the main characters and their traits." },
        { prompt: "The plot section briefly traces exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "The plot arc ends in resolution." },
        { prompt: "The theme is the book's", options: ["central idea or message", "price", "cover", "page count"], correctIndex: 0, explanation: "The theme is the central idea." },
        { prompt: "Point of view in a book report tells whose eyes tell the", options: ["story", "price", "index", "cover"], correctIndex: 0, explanation: "It is the narrative perspective." },
        { prompt: "A personal response is a reasoned opinion supported by", options: ["evidence from the book", "nothing", "the price", "the cover art"], correctIndex: 0, explanation: "Opinions must be backed by evidence." },
        { prompt: "Which is an effective personal response?", options: ["The ending is powerful because the final image captures the theme.", "I liked it.", "It was long.", "It was boring."], correctIndex: 0, explanation: "It gives a reason and evidence." },
        { prompt: "The form of a supported response is opinion + because +", options: ["evidence", "price", "printer", "page number"], correctIndex: 0, explanation: "Opinion + because + evidence." },
        { prompt: "A book report that is ONLY a summary is weak because it lacks", options: ["analysis", "a title", "a cover", "a price"], correctIndex: 0, explanation: "An effective report also analyses." },
        { prompt: "The summary should be", options: ["brief", "a retelling of every event", "the whole book", "a price list"], correctIndex: 0, explanation: "Keep the summary brief." },
        { prompt: "A theme should be stated as", options: ["a full idea", "a single word", "a page number", "an author's name"], correctIndex: 0, explanation: "Express the theme as a full idea." },
        { prompt: "The analytical method for the character and theme sections is", options: ["name–evidence–explanation", "guess–skip–stop", "read–forget", "count–copy"], correctIndex: 0, explanation: "Name, give evidence, explain." },
        { prompt: "An unsupported 'I liked it' is weak because it lacks a reason and", options: ["evidence", "a title", "a price", "a cover"], correctIndex: 0, explanation: "A good response needs evidence." },
        { prompt: "A consistent, complete report format makes the writer", options: ["credible", "richer", "faster", "taller"], correctIndex: 0, explanation: "Complete formatting builds credibility." },
        { prompt: "The characters section should distinguish main from", options: ["supporting characters", "prices", "printers", "publishers"], correctIndex: 0, explanation: "Note main and supporting characters." },
        { prompt: "Which section states whose eyes tell the story?", options: ["point of view", "title and author", "price", "index"], correctIndex: 0, explanation: "Point of view is a report section." },
        { prompt: "An effective book report ends with a", options: ["supported personal response", "price list", "blank page", "table of contents"], correctIndex: 0, explanation: "It closes with a reasoned, evidenced opinion." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List five sections an effective book report should contain.", answerKey: "Any five: title/author (and genre/date); summary (setting and main storyline); characters (main and supporting, with traits); plot (the arc); theme (central idea); point of view; personal response (supported by evidence). Award 1 mark each (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a strong personal response for a book report?", options: ["The ending is powerful because the final image captures the theme of loss", "I liked it", "It was long", "The book has 300 pages"], correctIndex: 0, answerKey: "It gives a reason and evidence. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the summary and the analysis in a book report.", answerKey: "The summary gives a brief overview (setting and main storyline) so the reader sees what the book is about; the analysis goes further, using name–evidence–explanation to examine character, theme, point of view and the writer's craft. Award 2 for each side of the distinction.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the form of a supported personal response and give an example.", answerKey: "Form: opinion + because + evidence. Example: 'The ending is powerful because the final image of the empty chair captures the theme of loss.' Award 2 for the form and 3 for a valid example.", marks: 5 },
        { type: "ESSAY", prompt: "Write an effective book report on a prose work you have studied. Identify the book, summarise it briefly, analyse its characters, plot and theme, state its point of view, and end with a supported personal response.", answerKey: "Award marks for: identification (title, author, genre), 3 marks; a brief, accurate summary (setting and storyline, not every event), 4 marks; analysis of characters, 5 marks; plot traced briefly, 4 marks; theme stated as a full idea, 3 marks; point of view identified, 2 marks; a supported personal response (opinion + because + evidence), 3 marks. A report that is only a plot summary should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
