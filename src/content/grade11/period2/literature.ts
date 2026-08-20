import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 11, Semester One, Period II: Prose and Poetry (African prose focus).
// The Grade 11 Period II CONTENTS list has six top-level items, each rebuilt
// here as its own topic: (1) African prose (selected prose), (2) Figurative
// expressions, (3) Cultural background of texts, (4) Themes in a prose,
// (5) Composing prose, (6) Sexuality (discussing mature themes responsibly).
// Literary concepts are sourced from LibreTexts (Humanities). The syllabus
// names set texts (Lonely Days by Bayo Adebowale / Faceless by Amma Darko, and
// poems by Okara, Tennyson and Dempster). Set-text-specific facts are NOT
// invented — the general skills of analysing and composing African prose are
// taught and the set texts are flagged as the teaching targets.
export const literatureG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Prose and Poetry: African Prose",
  summary:
    "Period II of the MoE Grade 11 Literature syllabus. Its six CONTENTS items are taught as six topics: analysing selected African prose; figurative expressions; the cultural background of texts; themes in a prose; composing prose; and discussing sensitive themes such as sexuality responsibly.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Elements of Fiction (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "analysing-african-prose",
      title: "African Prose: Analysing Selected Prose",
      objective:
        "By the end of the topic, learners should be able to analyse a work of African prose through its elements — plot, character, point of view, textual evidence and theme — and support claims with quotation.",
      estimatedMinutes: 150,
      notes: `## African prose

- **African prose** is prose fiction (short stories and novels) by African writers; the syllabus names works such as *Lonely Days* (Bayo Adebowale) and *Faceless* (Amma Darko).
- It is analysed with the same **elements of fiction** as any prose: **character, setting, plot, conflict, point of view** and **theme**.

## Analysing through the writer's point of view

- Identify the **point of view** — first person ("I"), third person limited (one mind), or third person omniscient (all-knowing).
- Ask how the chosen viewpoint shapes **what the reader knows and feels** about events and characters.

## Using textual evidence

- A claim about a prose text must be backed by **textual evidence** — a **quotation or specific detail** from the work.
- The routine is **point → evidence → explanation**: make a point, quote the text, explain how the quote proves the point.

## Character and role

- Distinguish **major (round)** characters, who are complex and developed, from **minor (flat)** characters, built on one or two traits.
- Note each character's **role**: protagonist, antagonist, or supporting figure, and how they carry the story's ideas.

## Theme

- A **theme** is the **underlying idea or truth** conveyed by the story, stated as a full idea about life, not a one-word topic.
- African prose often explores themes of grief, social class, land, love, women's roles, family loyalty and violence.

## Set text (to be supplied by the teacher)

- Apply this method to the assigned African prose text: identify the point of view, name the major and minor characters and their roles, and support each point about theme with a quotation.
- *(Specific facts, characters and quotations come from the set text itself, not invented here.)*

## Common errors and misconceptions

- **Making claims without evidence** — always quote or cite a detail.
- **Retelling the plot** — examiners reward point + evidence + explanation, not summary.
- **Confusing major and minor characters** — depth of development sets them apart.
- **Stating a theme as one word** — a theme is a full idea about life.`,
      workedExample: `**Task.** Show how to analyse a claim about an African prose text using point → evidence → explanation.

**Claim (point):** The protagonist is treated as an outsider in her own community.

**Step 1 — make the point.** State the analytical claim clearly: she is excluded and made to feel she does not belong.

**Step 2 — give the evidence (quotation).** Select a line or detail that shows it — for example, a passage where neighbours turn away from her or exclude her from a gathering. *(In an exam you would quote the actual words of the set text.)*

**Step 3 — explain.** Show **how** the evidence proves the point: the neighbours' turning away dramatises her exclusion, and the writer's word choice (cold, distancing language) makes the reader feel her isolation. Link this to a **theme** — for example, *"a community can wound its own members through rejection."*

**Add point of view.** If the story is told in **first person**, her isolation feels intimate and we share her hurt directly; if **third person limited**, we stay close to her mind while seeing the community from outside.

**Conclusion:** analyse African prose by making a **point**, backing it with a **quotation**, and **explaining** how the evidence proves it — then connect character and viewpoint to the **theme**. Never assert without evidence, and never merely retell.`,
      quiz: [
        { prompt: "African prose is prose fiction written by", options: ["African writers", "only poets", "only playwrights", "non-Africans only"], correctIndex: 0, explanation: "African prose comes from African writers." },
        { prompt: "A claim about a text must be backed by", options: ["textual evidence", "the price", "the cover", "the page count"], correctIndex: 0, explanation: "Evidence supports every claim." },
        { prompt: "The analysis routine is point, evidence and", options: ["explanation", "opinion only", "summary", "translation"], correctIndex: 0, explanation: "Point → evidence → explanation." },
        { prompt: "A complex, developed character is", options: ["round/major", "flat/minor", "the narrator", "the author"], correctIndex: 0, explanation: "Round characters are developed." },
        { prompt: "A character built on one or two traits is", options: ["flat/minor", "round/major", "dynamic", "the protagonist"], correctIndex: 0, explanation: "Flat characters are simple." },
        { prompt: "A narrator using 'I' is", options: ["first person", "third person limited", "omniscient", "second person"], correctIndex: 0, explanation: "First person uses 'I'." },
        { prompt: "An all-knowing narrator is third person", options: ["omniscient", "limited", "first", "second"], correctIndex: 0, explanation: "Omniscient knows all minds." },
        { prompt: "A theme is stated as", options: ["a full idea about life", "one word", "the price", "the author's name"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "Point of view shapes what the reader knows and", options: ["feels", "pays", "prints", "counts"], correctIndex: 0, explanation: "POV shapes knowledge and feeling." },
        { prompt: "The main character the story centres on is the", options: ["protagonist", "antagonist", "minor character", "editor"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The opposing force is the", options: ["antagonist", "protagonist", "narrator", "author"], correctIndex: 0, explanation: "The antagonist opposes the protagonist." },
        { prompt: "A weak prose answer often", options: ["retells the plot", "quotes the text", "explains evidence", "names the theme"], correctIndex: 0, explanation: "Plot summary is not analysis." },
        { prompt: "Textual evidence usually takes the form of a", options: ["quotation or specific detail", "price tag", "map", "date stamp"], correctIndex: 0, explanation: "Quote or cite a detail." },
        { prompt: "First-person narration of a character's suffering feels", options: ["intimate", "distant", "silent", "numerical"], correctIndex: 0, explanation: "First person is intimate." },
        { prompt: "African prose often explores the theme of", options: ["social class and land", "printing costs", "map-making", "arithmetic"], correctIndex: 0, explanation: "Class, land, love and family are common themes." },
        { prompt: "Major and minor characters differ in", options: ["depth of development", "the price", "the font", "the cover"], correctIndex: 0, explanation: "Development distinguishes them." },
        { prompt: "In point-evidence-explanation, the explanation shows how the evidence", options: ["proves the point", "raises the price", "sets the date", "names the printer"], correctIndex: 0, explanation: "Explanation links evidence to claim." },
        { prompt: "Third person limited stays close to", options: ["one character's mind", "every mind", "no mind", "the author"], correctIndex: 0, explanation: "Limited follows one character." },
        { prompt: "A theme is the story's", options: ["underlying idea or truth", "list of events", "publication date", "cover art"], correctIndex: 0, explanation: "Theme is the underlying idea." },
        { prompt: "The elements of fiction include character, setting, plot, conflict, point of view and", options: ["theme", "price", "printer", "index"], correctIndex: 0, explanation: "Theme is an element of fiction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three-step routine for analysing a prose text with evidence.", answerKey: "Point (make an analytical claim) → evidence (quote or cite a specific detail from the text) → explanation (show how the evidence proves the point, linking to theme). Award marks for each step.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is required to support a claim about a prose text?", options: ["textual evidence (a quotation or detail)", "the book's price", "the number of pages", "the cover colour"], correctIndex: 0, answerKey: "Textual evidence. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a major (round) character from a minor (flat) character.", answerKey: "A major/round character is complex and well developed with several traits and an important role; a minor/flat character is built on one or two traits and plays a smaller role. Award 2 per point of contrast (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How does the point of view of a prose text affect the reader's understanding? Give one example.", answerKey: "Point of view controls what the reader knows and feels: first person is intimate and limited to one character's knowledge (possibly unreliable); third person omniscient shows many characters' inner lives. Accept any valid example. Award 2 for the general point and 2 for the example.", marks: 4 },
        { type: "ESSAY", prompt: "Analyse a work of African prose you have studied, discussing its point of view, one major character, and a central theme, supporting each point with textual evidence.", answerKey: "Award marks for: point of view identified with effect, 5 marks; one major character analysed (traits, role), 6 marks; a central theme stated as an idea and developed, 6 marks; textual evidence (quotation/detail) used throughout, 5 marks; expression, 2 marks. Plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "figurative-expressions-in-prose",
      title: "Figurative Expressions",
      objective:
        "By the end of the topic, learners should be able to identify figurative expressions in African prose and poetry and explain their effect using the name–quote–effect method.",
      estimatedMinutes: 150,
      notes: `## Figurative expressions

- **Figurative language** *"uses words or expressions not meant to be taken literally"* — it means **more than the literal words**.
- It is dense in poetry (such as *Piano and Drums* by Gabriel Okara) but also shapes prose.

## The main figures to recognise

- **Metaphor** — *"a direct comparison between two unlike things"*.
- **Simile** — *"a comparison that uses like or as"*.
- **Personification** — *"human characteristics being applied to non-human things"*.
- **Metonymy** — *"when one thing is represented by another thing associated with it"*.
- **Synecdoche** — *"when a part symbolizes the whole, or the whole symbolizes the part"*.
- **Hyperbole** — deliberate **exaggeration** for effect.
- **Imagery** — descriptive language that appeals to the **senses**.
- **Symbolism** — an object standing for a larger, abstract idea.

## The name–quote–effect method

1. **Name** the figure of speech.
2. **Quote** the words from the text.
3. **Explain the effect** — what image or feeling it creates and how it serves the meaning.

## Figurative language and cultural meaning

- In African writing, a figure may draw on **local images** (drums, rivers, the land) whose meaning is tied to the **culture**.
- Read the effect in that context — a drum image may signal **ancestral rhythm, community or the past**, not just noise.

## Common errors and misconceptions

- **Device-spotting** — always complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Ignoring cultural context** — a local image carries culturally specific meaning.
- **Reading a symbol too literally** — a symbol stands for a larger idea.`,
      workedExample: `**Task.** Analyse two figurative expressions using name–quote–effect.

*"The drums beat in my blood, and the piano's cold notes cut the air like glass."*

**Expression 1 — "The drums beat in my blood"**
1. **Name:** **metaphor** (the drums are said to beat *in the blood*, an internal, bodily image).
2. **Quote:** "the drums beat in my blood."
3. **Effect:** the metaphor makes the drum rhythm feel **inborn and ancestral**, as if the traditional music is part of the speaker's very body and heritage — suggesting a deep, cultural belonging.

**Expression 2 — "the piano's cold notes cut the air like glass"**
1. **Name:** **simile** (uses *like*), with the sense-image of "cold."
2. **Quote:** "cut the air like glass."
3. **Effect:** comparing the notes to glass makes them feel **sharp, cold and foreign**, contrasting with the warm drums; the reader senses a clash between two cultures or two ways of feeling.

**Conclusion:** name the device, quote it, and explain its **effect in context** — here the warm, bodily drum-metaphor set against the cold, cutting piano-simile dramatises a cultural contrast. Always finish with the effect.`,
      quiz: [
        { prompt: "Figurative language means", options: ["more than the literal words", "exactly the literal words", "nothing", "only numbers"], correctIndex: 0, explanation: "Figures of speech carry non-literal meaning." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison of two unlike things is a", options: ["metaphor", "simile", "metonymy", "repetition"], correctIndex: 0, explanation: "A metaphor is direct." },
        { prompt: "Giving human qualities to non-human things is", options: ["personification", "hyperbole", "simile", "synecdoche"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "Language that appeals to the senses is", options: ["imagery", "metre", "rhyme", "a stanza"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "An object standing for a larger idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "Deliberate exaggeration is", options: ["hyperbole", "simile", "metonymy", "imagery"], correctIndex: 0, explanation: "Hyperbole exaggerates." },
        { prompt: "A part standing for the whole is", options: ["synecdoche", "metaphor", "hyperbole", "irony"], correctIndex: 0, explanation: "Synecdoche uses a part for the whole." },
        { prompt: "The name–quote–effect method ends with", options: ["explaining the effect", "counting lines", "translating", "ignoring meaning"], correctIndex: 0, explanation: "The effect step earns the marks." },
        { prompt: "In African writing, a drum image may symbolise", options: ["ancestral rhythm or community", "a price", "a page number", "a printer"], correctIndex: 0, explanation: "Local images carry cultural meaning." },
        { prompt: "'One thing represented by another associated with it' is", options: ["metonymy", "simile", "hyperbole", "imagery"], correctIndex: 0, explanation: "That defines metonymy." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is direct." },
        { prompt: "Ignoring cultural context when reading an image is", options: ["an error", "required", "good practice", "impossible"], correctIndex: 0, explanation: "Local images carry culturally specific meaning." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is left out." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "Figurative language is found in", options: ["both prose and poetry", "only poetry", "only receipts", "only drama"], correctIndex: 0, explanation: "Figures appear across genres." },
        { prompt: "'Her words were music' is a", options: ["metaphor", "simile", "hyperbole", "metonymy"], correctIndex: 0, explanation: "It directly equates words with music." },
        { prompt: "'His hands were as cold as ice' is a", options: ["simile", "metaphor", "personification", "synecdoche"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "The effect step asks what the words make you", options: ["see, hear or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the reader's experience." },
        { prompt: "Figurative language conveys much meaning in", options: ["few words", "many pages", "numbers", "silence"], correctIndex: 0, explanation: "Figures are economical." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define simile, metaphor and imagery, giving one example of each.", answerKey: "Simile — a comparison using like/as (e.g. 'brave as a lion'); metaphor — a direct comparison without like/as (e.g. 'he is a lion'); imagery — descriptive language appealing to the senses (e.g. 'the red dust rose'). Award 1 per device with an example (max 3), +1 for accuracy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The river sang as it wound through the village' uses", options: ["personification", "simile", "metonymy", "synecdoche"], correctIndex: 0, answerKey: "The river is given the human act of singing — personification. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'Hope drummed in her chest like distant thunder.'", answerKey: "Name: simile (uses 'like'), with personification of hope. Quote: 'like distant thunder.' Effect: makes hope feel powerful, building and stirring, as if a force approaching from far off, giving the reader a sense of rising anticipation. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why must a reader consider cultural context when interpreting a figurative image in African writing?", answerKey: "Because a local image (a drum, a river, the land) carries culturally specific meaning — a drum may signal ancestral rhythm, community or the past — so its effect can only be read fully in that cultural context. Award marks for the principle and a valid example.", marks: 4 },
        { type: "ESSAY", prompt: "Choose a poem or prose passage you have studied and discuss how the writer uses at least three figurative expressions to convey meaning or feeling, explaining the effect of each with quotation.", answerKey: "Award marks for: at least three figures correctly identified and quoted, 9 marks; explanation of the effect of each, including cultural context where relevant, 12 marks; aptness of quotation and expression, 3 marks. Device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Setting (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "cultural-background-of-texts",
      title: "Cultural Background of Texts",
      objective:
        "By the end of the topic, learners should be able to explain the cultural background and setting of a prose text, identify its important ideas, and summarise the major substance of the storyline.",
      estimatedMinutes: 150,
      notes: `## Cultural background and setting

- **Setting** is **where and when** a story takes place, including its landscape, community, customs and time.
- The **cultural background** is the **way of life** behind the story — the beliefs, values, customs and social order of the people in it.
- Setting can be a **main force** the characters face (a hostile society, a demanding tradition) or a **minor** mood-setter.

## Why cultural background matters

- Characters' choices and conflicts often make sense only in their **cultural context** — a duty, a taboo, or a family expectation may drive the plot.
- Reading the culture helps the reader grasp **why** characters act as they do and what the writer is questioning or praising.

## Finding the important ideas

- The **important ideas** are the story's central concerns — for example custom versus change, the position of women, land, or loyalty.
- Distinguish an **important idea** (central, developed across the text) from a **minor detail** (mentioned once).

## Summarising the major substance of the storyline

- The **major substance** is the **main line of the story** — the essential events and the central conflict, not every incident.
- To summarise it: state **who** the story is about, the **main situation and conflict**, the **turning point**, and **how it ends** — briefly and in order.

## Set text (to be supplied by the teacher)

- Describe the cultural background and setting of the assigned African prose text, identify its important ideas, and summarise its main storyline.
- *(Specific customs, places and events come from the set text itself, not invented here.)*

## Common errors and misconceptions

- **Ignoring cultural background** — a character's motives may be rooted in culture and customs.
- **Confusing setting with plot** — setting is where/when; plot is what happens.
- **Listing every event** — a summary of the major substance keeps to the main line.
- **Mistaking a minor detail for an important idea** — important ideas run across the whole text.`,
      workedExample: `**Task.** Explain the cultural background and summarise the major substance of a prose text, using a general model.

**Model story:** a young widow in a rural community is expected by custom to follow strict mourning rules; she resists, and the community reacts.

**Step 1 — setting and cultural background.** The **setting** is a rural community; the **cultural background** is a society with strong customs about mourning and the role of a widow. This culture is not decoration — it is the **main force** the character struggles against.

**Step 2 — important ideas.** The central concerns are **custom versus individual freedom** and the **position of women** (specifically widows). These ideas run through the whole story, so they are important ideas, not minor details.

**Step 3 — major substance of the storyline.** In brief: a widow (who) is bound by mourning custom and resists it (main situation and conflict); the community's pressure builds to a confrontation (turning point); the story closes on the cost of her choice (ending).

**Step 4 — link culture to meaning.** Her conflict only makes sense in its cultural context; the writer uses it to **question a custom** and to show its effect on a woman's life.

**Conclusion:** read a prose text against its **cultural background** and **setting**; identify the **important ideas** that run across it; and summarise the **major substance** — who, the central conflict, the turning point and the ending — briefly and in order.`,
      quiz: [
        { prompt: "Setting is where and when a story", options: ["takes place", "is printed", "is sold", "is banned"], correctIndex: 0, explanation: "Setting is time and place." },
        { prompt: "The way of life behind a story — its beliefs, values and customs — is its", options: ["cultural background", "price", "font", "index"], correctIndex: 0, explanation: "Cultural background is the way of life in the story." },
        { prompt: "Setting can act as a main force the characters", options: ["face", "print", "sell", "count"], correctIndex: 0, explanation: "Setting can be a main force." },
        { prompt: "Characters' choices often make sense only in their", options: ["cultural context", "price range", "font size", "page count"], correctIndex: 0, explanation: "Culture explains motives." },
        { prompt: "An important idea is", options: ["central and developed across the text", "mentioned once", "the price", "the cover"], correctIndex: 0, explanation: "Important ideas run through the text." },
        { prompt: "A detail mentioned once is a", options: ["minor detail", "central theme", "climax", "setting"], correctIndex: 0, explanation: "A one-time detail is minor." },
        { prompt: "The major substance of a storyline is its", options: ["main line and central conflict", "every incident", "price", "printer"], correctIndex: 0, explanation: "The major substance is the main line." },
        { prompt: "Setting differs from plot because setting is", options: ["where and when", "what happens", "the theme", "the style"], correctIndex: 0, explanation: "Setting is where/when; plot is events." },
        { prompt: "A summary of the storyline should be", options: ["brief and in order", "a full retelling", "random", "in verse"], correctIndex: 0, explanation: "Keep to the main line, in order." },
        { prompt: "Cultural background helps a reader understand why characters", options: ["act as they do", "are printed", "are priced", "are numbered"], correctIndex: 0, explanation: "Culture illuminates motive." },
        { prompt: "A custom or taboo in a story may", options: ["drive the plot", "set the price", "choose the font", "number the pages"], correctIndex: 0, explanation: "Customs can drive conflict." },
        { prompt: "To summarise the main line, state who, the main conflict, the turning point and", options: ["how it ends", "the price", "the printer", "the cover"], correctIndex: 0, explanation: "Include the ending." },
        { prompt: "Ignoring cultural background is an error because motives may be", options: ["rooted in custom", "printed in colour", "priced highly", "numbered"], correctIndex: 0, explanation: "Culture shapes motives." },
        { prompt: "An important idea in African prose might be", options: ["custom versus change", "the ink colour", "the paper weight", "the shelf number"], correctIndex: 0, explanation: "Central concerns are important ideas." },
        { prompt: "Setting includes landscape, community, customs and", options: ["time", "price", "font", "index"], correctIndex: 0, explanation: "Setting covers place, people and time." },
        { prompt: "Mistaking a minor detail for an important idea is a", options: ["reading error", "requirement", "good habit", "summary"], correctIndex: 0, explanation: "Important ideas run across the whole text." },
        { prompt: "A widow's conflict with mourning custom is best understood through the story's", options: ["cultural background", "price", "font", "page count"], correctIndex: 0, explanation: "Culture explains the conflict." },
        { prompt: "The turning point of the storyline is the", options: ["climax", "exposition", "title", "price"], correctIndex: 0, explanation: "The turning point is the climax." },
        { prompt: "A writer may use a cultural conflict to", options: ["question a custom", "set a price", "pick a font", "number pages"], correctIndex: 0, explanation: "Writers examine customs through conflict." },
        { prompt: "The main line of a story excludes", options: ["every small incident", "the central conflict", "the turning point", "the ending"], correctIndex: 0, explanation: "The main line keeps to essentials." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the setting and the cultural background of a prose text.", answerKey: "Setting is where and when the story takes place (landscape, community, time); cultural background is the way of life behind it — the beliefs, values, customs and social order of the people. Award 2 per element clearly explained.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "An 'important idea' in a text is one that", options: ["is central and developed across the whole text", "is mentioned once", "gives the price", "names the printer"], correctIndex: 0, answerKey: "Important ideas run across the text. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What four things should a summary of the 'major substance' of a storyline include?", answerKey: "Who the story is about; the main situation and central conflict; the turning point (climax); how it ends — briefly and in order. Award 1 mark each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why should a reader consider a text's cultural background when explaining a character's choices?", answerKey: "Because characters' motives, duties, taboos and conflicts often make sense only in their cultural context; understanding the culture explains why they act as they do and what the writer questions or praises. Award marks for the principle and an illustration.", marks: 3 },
        { type: "ESSAY", prompt: "For an African prose text you have studied, describe its setting and cultural background, identify its important ideas, and summarise the major substance of its storyline.", answerKey: "Award marks for: setting and cultural background described, 6 marks; important ideas identified (central, developed), 6 marks; a clear, ordered summary of the main storyline (who, conflict, turning point, ending), 8 marks; textual support, 2 marks; expression, 2 marks. A full plot retelling with no cultural analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Theme (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "themes-in-a-prose",
      title: "Themes in a Prose",
      objective:
        "By the end of the topic, learners should be able to identify and state the themes of a prose text — such as grief, social class, land, love, women's roles, family loyalty and violence — as full ideas supported by evidence.",
      estimatedMinutes: 150,
      notes: `## What a theme is

- A **theme** is **not the plot** of the story. It is the **underlying truth or central idea** the story conveys about life.
- A theme is stated as a **full idea** ("*grief can isolate a person from their community*"), not a **one-word topic** ("grief").

## Common themes in African prose

The syllabus lists themes often found in prose:
- **Grief** — loss and mourning.
- **Social class** — divisions of wealth and status.
- **Land** — ownership, belonging and disputes over land.
- **Love** — romantic, familial and communal.
- **Women's role in society** — the position and treatment of women.
- **Family loyalty** — duty and bonds within a family.
- **Violence** — conflict, cruelty and its consequences.

## Topic versus theme

| Topic (one word) | Theme (a full idea) |
| --- | --- |
| Grief | Grief can cut a person off from those around them |
| Land | Disputes over land can destroy family bonds |
| Women's role | A society's rules can silence and confine women |

## How to find a theme

1. Ask **what the story is really about** beyond the events.
2. Notice what **repeats** — images, conflicts, choices.
3. See what the main character **learns** or **suffers**.
4. State the idea as a **full sentence** about life.
5. **Support it** with evidence from the text.

## Set text (to be supplied by the teacher)

- Identify the themes of the assigned African prose text, state each as a full idea, and support it with quotation or detail.
- *(Which themes appear and how they are developed come from the set text itself, not invented here.)*

## Common errors and misconceptions

- **Stating a theme as one word** — a theme is a full idea, not a topic.
- **Confusing theme with plot** — plot is events; theme is the idea behind them.
- **Naming a theme with no evidence** — support it from the text.
- **Assuming one theme only** — a rich prose text carries several themes at once.`,
      workedExample: `**Task.** Turn topics into themes and support one, using a general model.

**Step 1 — from topic to theme.** Take three topics the syllabus lists and state each as a full idea:
- *Grief* → "Unshared grief can isolate a person from their community."
- *Social class* → "Class divisions can deny people dignity regardless of their worth."
- *Family loyalty* → "Loyalty to family can demand painful personal sacrifice."

**Step 2 — choose one and support it.** Take the grief theme. Find where the text shows a grieving character being avoided or misunderstood by others. *(In an exam you would quote the actual passage.)*

**Step 3 — explain.** Show how the evidence proves the theme: the grieving character's isolation, dramatised in the scene, demonstrates that grief has cut them off from the community — exactly the idea the theme states.

**Step 4 — note multiple themes.** A single text may carry grief **and** the position of women **and** family loyalty at once; identify each rather than forcing one.

**Conclusion:** a theme is a **full idea about life**, not a one-word topic. Find it by asking what the story is really about, state it as a sentence, and **support it with evidence** — and recognise that a rich text holds several themes together.`,
      quiz: [
        { prompt: "A theme is the story's", options: ["underlying idea about life", "list of events", "price", "cover"], correctIndex: 0, explanation: "Theme is the underlying idea." },
        { prompt: "A theme should be stated as", options: ["a full idea", "one word", "a page number", "a name"], correctIndex: 0, explanation: "A theme is a complete idea, not a topic." },
        { prompt: "'Grief' by itself is a", options: ["topic, not a full theme", "full theme", "plot", "setting"], correctIndex: 0, explanation: "One word is a topic; a theme is an idea." },
        { prompt: "Theme differs from plot because plot is", options: ["what happens", "the idea behind events", "the mood", "the author"], correctIndex: 0, explanation: "Plot is events; theme is the idea." },
        { prompt: "A theme naming custom's power over women concerns", options: ["women's role in society", "printing", "arithmetic", "map-making"], correctIndex: 0, explanation: "It is the women's-role theme." },
        { prompt: "Disputes over ownership and belonging point to the theme of", options: ["land", "grief", "violence", "love"], correctIndex: 0, explanation: "Land is a common theme." },
        { prompt: "A theme must be supported with", options: ["evidence from the text", "a price", "a cover", "a date"], correctIndex: 0, explanation: "Support a theme with evidence." },
        { prompt: "A rich prose text usually carries", options: ["several themes at once", "no theme", "only the plot", "only a title"], correctIndex: 0, explanation: "Texts hold multiple themes." },
        { prompt: "To find a theme, ask what the story is", options: ["really about beyond events", "priced at", "printed on", "numbered by"], correctIndex: 0, explanation: "Look beyond the plot." },
        { prompt: "Repeated images and conflicts often point to a", options: ["theme", "price", "printer", "font"], correctIndex: 0, explanation: "Repetition signals theme." },
        { prompt: "What the main character learns or suffers can reveal the", options: ["theme", "price", "date", "cover"], correctIndex: 0, explanation: "The character's arc reveals theme." },
        { prompt: "Family loyalty as a theme concerns duty and bonds within a", options: ["family", "printer", "market", "map"], correctIndex: 0, explanation: "Family loyalty is a listed theme." },
        { prompt: "Naming a theme with no evidence is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Themes must be supported." },
        { prompt: "'Class divisions can deny people dignity' is stated as a", options: ["full theme", "one-word topic", "plot", "setting"], correctIndex: 0, explanation: "It is a full idea." },
        { prompt: "Confusing theme with plot means confusing the idea with the", options: ["events", "price", "cover", "date"], correctIndex: 0, explanation: "Plot is events; theme is the idea." },
        { prompt: "Violence as a theme includes conflict, cruelty and its", options: ["consequences", "price", "font", "index"], correctIndex: 0, explanation: "Violence and its results form a theme." },
        { prompt: "The theme of grief concerns", options: ["loss and mourning", "arithmetic", "printing", "mapping"], correctIndex: 0, explanation: "Grief is loss and mourning." },
        { prompt: "A theme is best expressed as a", options: ["sentence about life", "single noun", "number", "date"], correctIndex: 0, explanation: "State a theme as a full sentence." },
        { prompt: "Assuming a text has only one theme is", options: ["an error", "always correct", "required", "a summary"], correctIndex: 0, explanation: "Rich texts have several themes." },
        { prompt: "The theme of love may be romantic, familial or", options: ["communal", "printed", "priced", "numbered"], correctIndex: 0, explanation: "Love takes several forms." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a topic and a theme, giving an example of each.", answerKey: "A topic is a one-word subject (e.g. grief); a theme is a full idea about life (e.g. 'grief can isolate a person from their community'). Award 2 for the distinction and 1 per example (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a correctly stated theme (not a topic)?", options: ["Disputes over land can destroy family bonds", "Land", "Grief", "Women"], correctIndex: 0, answerKey: "Only option A is a full idea; the rest are one-word topics. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List five themes commonly found in prose according to the syllabus.", answerKey: "Any five of: grief; social class; land; love; women's role in society; family loyalty; violence. Award 1 mark each (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Give the five steps for finding and stating a theme in a prose text.", answerKey: "Ask what the story is really about beyond the events; notice what repeats (images, conflicts, choices); see what the main character learns or suffers; state the idea as a full sentence about life; support it with evidence from the text. Award marks for the steps given.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing an African prose text you have studied, identify at least two of its themes, state each as a full idea, and show how the writer develops them, using textual evidence.", answerKey: "Award marks for: at least two themes stated as full ideas (not topics), 8 marks; development of each shown through the text, 8 marks; textual evidence (quotation/detail), 6 marks; expression, 2 marks. One-word topics or plot summary without development should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — What is Fiction? / Elements of Fiction (Ringo and Kashyap) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/04%3A_About_Fiction_-_Short_Stories_and_the_Novel/4.01%3A_What_is_Fiction)
      slug: "composing-prose",
      title: "Composing Prose",
      objective:
        "By the end of the topic, learners should be able to plan and write a short story using the elements of fiction — character, setting, plot, conflict and point of view — through characterisation and controlled pacing.",
      estimatedMinutes: 150,
      notes: `## Writing a short story

- A **short story** is a work of prose fiction built from the same elements you analyse: **character, setting, plot, conflict, point of view** and **theme**.
- Plan the story around a **central conflict** and shape events into a **plot** (exposition → rising action → climax → falling action → resolution).

## Characterisation

- **Characterisation** is the **development of characters through actions, descriptions and dialogue**.
- It can be **direct** — specific description of the character — or **indirect** — revealed through the character's **behaviour, speech and thoughts**.
- Give the main character a clear **want** and a **conflict** that blocks it.

## Choosing a point of view

- The **position from which the story is told** shapes the reader's experience, the narrator's language and even the plot.
- Decide before writing: **first person** ("I", intimate but limited), **third person limited** (one mind), or **third person omniscient** (all-knowing).

## Scope, sequence and pacing

- **Scope** — the **boundaries of your plot**: how much of the story's world and time you cover.
- **Sequence** — the order in which you tell events (straight, or with flashback).
- **Pacing** — how fast the story moves; slow down for key moments, speed through the rest.

## A planning checklist

1. **Character** — who, and what do they want?
2. **Setting** — where and when?
3. **Conflict** — what blocks the want?
4. **Plot** — the ordered events to a climax and resolution.
5. **Point of view** — whose vantage tells it?
6. **Theme** — what idea about life will emerge?

## Common errors and misconceptions

- **No central conflict** — a story needs a struggle to drive it.
- **Telling, not showing** — reveal character through action, speech and thought, not only labels.
- **Uncontrolled pacing** — do not rush the climax or dwell on the trivial.
- **Switching viewpoint carelessly** — keep the point of view consistent.`,
      workedExample: `**Task.** Plan and open a short story using the elements of fiction.

**Step 1 — plan (checklist).**
- **Character:** AMA, a market girl who wants to stay in school.
- **Setting:** a busy town market, present day.
- **Conflict:** her family needs her to trade full-time; her want (school) is blocked by duty (external) and her own guilt (internal).
- **Plot:** exposition (market life) → rising action (a chance to sit an exam) → climax (she must choose) → resolution.
- **Point of view:** third person limited, close to Ama.
- **Theme:** "duty and personal hope can pull a young person in two directions."

**Step 2 — open the story (indirect characterisation).**

*The scale still swung in Ama's hand when the teacher's letter reached her. She did not open it at once. She weighed a customer's tomatoes, counted the coins twice, and only then — with the stall quiet — unfolded the paper, her thumb pressing each crease flat as if to slow the news.*

**Step 3 — check against the elements.**
- **Characterisation** is **indirect** — Ama's care with the letter shows her longing and caution without stating it.
- **Setting** (the market) and **conflict** (school vs trade) are established.
- **Point of view** stays close to Ama (third person limited).
- **Pacing** slows at the key moment (the letter) — controlled pacing.

**Conclusion:** compose prose by planning the **elements** first — character with a want, setting, conflict, plot, point of view and theme — then reveal character **indirectly** through action and control the **pacing** so key moments land.`,
      quiz: [
        { prompt: "A short story is built from the elements of", options: ["fiction", "arithmetic", "cartography", "accounting"], correctIndex: 0, explanation: "Short stories use the elements of fiction." },
        { prompt: "Developing characters through actions, descriptions and dialogue is", options: ["characterisation", "pacing", "rhyme", "metre"], correctIndex: 0, explanation: "Characterisation develops characters." },
        { prompt: "Revealing character through behaviour, speech and thoughts is", options: ["indirect characterisation", "direct characterisation", "pacing", "scope"], correctIndex: 0, explanation: "Indirect characterisation shows rather than tells." },
        { prompt: "Specific description of a character is", options: ["direct characterisation", "indirect characterisation", "sequence", "pacing"], correctIndex: 0, explanation: "Direct characterisation states traits." },
        { prompt: "A story should be planned around a central", options: ["conflict", "price", "font", "index"], correctIndex: 0, explanation: "Conflict drives the story." },
        { prompt: "The boundaries of a plot are its", options: ["scope", "pacing", "rhyme", "metre"], correctIndex: 0, explanation: "Scope is the plot's boundaries." },
        { prompt: "How fast a story moves is its", options: ["pacing", "scope", "sequence", "theme"], correctIndex: 0, explanation: "Pacing is speed." },
        { prompt: "The order in which events are told is the", options: ["sequence", "scope", "pacing", "setting"], correctIndex: 0, explanation: "Sequence is the order of telling." },
        { prompt: "Point of view shapes the reader's experience and the narrator's", options: ["language", "salary", "address", "shoe size"], correctIndex: 0, explanation: "POV shapes language and plot." },
        { prompt: "'Telling, not showing' is a fault because character is best revealed through", options: ["action, speech and thought", "labels only", "the price", "the cover"], correctIndex: 0, explanation: "Show through indirect characterisation." },
        { prompt: "A plot moves exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "The arc ends in resolution." },
        { prompt: "The main character should have a clear", options: ["want blocked by conflict", "price", "font", "index"], correctIndex: 0, explanation: "A want plus an obstacle drives the story." },
        { prompt: "First-person narration is intimate but", options: ["limited", "all-knowing", "silent", "numerical"], correctIndex: 0, explanation: "First person knows only one mind." },
        { prompt: "Switching viewpoint carelessly is a", options: ["fault", "strength", "requirement", "form of pacing"], correctIndex: 0, explanation: "Keep point of view consistent." },
        { prompt: "For a key moment, a writer should", options: ["slow the pacing", "skip it", "raise the price", "change the font"], correctIndex: 0, explanation: "Slow down for important moments." },
        { prompt: "Telling events out of order using an earlier scene is a form of", options: ["flashback (sequence)", "scope", "pacing", "rhyme"], correctIndex: 0, explanation: "Flashback alters sequence." },
        { prompt: "The planning checklist starts with the", options: ["character and their want", "price", "printer", "cover"], correctIndex: 0, explanation: "Begin with character and want." },
        { prompt: "Theme in a composed story is the", options: ["idea about life that emerges", "price", "font", "index"], correctIndex: 0, explanation: "Theme is the emergent idea." },
        { prompt: "Indirect characterisation shows Ama's longing through her", options: ["careful handling of the letter", "shoe size", "the price of tomatoes", "the font"], correctIndex: 0, explanation: "Action reveals feeling indirectly." },
        { prompt: "A story with no struggle to drive it lacks a", options: ["central conflict", "price", "cover", "date"], correctIndex: 0, explanation: "Every story needs a conflict." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the six things a short-story planning checklist should establish.", answerKey: "Character (who, and their want); setting (where/when); conflict (what blocks the want); plot (ordered events to a climax and resolution); point of view (whose vantage); theme (the idea that will emerge). Award 1 mark each (max 6, capped at the mark total).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Revealing a character through their behaviour, speech and thoughts is", options: ["indirect characterisation", "direct characterisation", "pacing", "scope"], correctIndex: 0, answerKey: "Indirect characterisation. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define scope, sequence and pacing in story writing.", answerKey: "Scope — the boundaries of the plot (how much of the world/time is covered); sequence — the order in which events are told (straight or with flashback); pacing — how fast the story moves. Award 1 mark each (max 3).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why is 'showing' preferred to 'telling' in characterisation, and how is it achieved?", answerKey: "Showing makes character vivid and believable and lets the reader infer traits, rather than being flatly told; it is achieved through indirect characterisation — the character's actions, speech and thoughts. Award 2 for the reason and 2 for the method.", marks: 4 },
        { type: "ESSAY", prompt: "Write the opening of a short story (about 12–18 lines) built around a clear conflict, using a consistent point of view and revealing your main character indirectly through action, speech or thought.", answerKey: "Award marks for: a clear central conflict, 6 marks; a consistent point of view, 4 marks; indirect characterisation (action/speech/thought), 6 marks; setting established, 4 marks; controlled pacing and coherence, 4 marks. A plotless description with no conflict should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Theme (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "discussing-sensitive-themes",
      title: "Discussing Sensitive Themes (Sexuality)",
      objective:
        "By the end of the topic, learners should be able to discuss a sensitive theme such as sexuality in a prose text maturely and respectfully, treating it as a theme supported by textual evidence.",
      estimatedMinutes: 150,
      notes: `## Sensitive themes in literature

- Literature deals with the whole of human life, including **sensitive and mature themes** — among them **sexuality**, as it arises in a set text.
- A sensitive theme is still a **theme**: an **underlying idea about life** the writer explores, to be discussed with **evidence** and **respect**, not sensationalised.

## Treating the theme responsibly

- Discuss the theme as it **functions in the text** — what the writer shows about relationships, values, consequences and society.
- Keep the discussion **mature, respectful and text-focused**; avoid crude or personal comment.
- Connect the theme to the text's **cultural background** — attitudes to relationships differ across cultures and eras.

## Analysing the theme with evidence

- Use **point → evidence → explanation**: state what the text conveys about the theme, cite a **detail or quotation**, and explain the writer's purpose.
- Ask what **attitude** the writer takes — approval, criticism, sympathy, warning — and how the text conveys it.

## Linking to character and consequence

- Examine how the theme affects **characters** and drives **conflict** and **plot**.
- Note the **consequences** the text presents, since these often reveal the writer's judgement and the story's moral or social point.

## Set text (to be supplied by the teacher)

- Discuss how the assigned African prose set text treats this sensitive theme, using evidence, respecting the classroom, and linking the theme to the text's ideas and cultural background.
- *(The specific content, characters and events come from the set text itself, not invented here. Handle the material in line with school guidance and an age-appropriate, respectful classroom discussion.)*

## Common errors and misconceptions

- **Sensationalising** — treat a mature theme as a serious idea, not for shock.
- **Avoiding the theme entirely** — literature examines all of human life; discuss it maturely with evidence.
- **Ignoring the writer's attitude** — ask what judgement or sympathy the text conveys.
- **Dropping evidence** — a sensitive theme still needs textual support.`,
      workedExample: `**Task.** Show how to discuss a sensitive theme maturely, using a general model.

**Step 1 — treat it as a theme.** State the sensitive theme as an **idea about life** the writer explores — for example, *"the text examines how a society's expectations shape relationships and judge those who break them."*

**Step 2 — gather evidence responsibly.** Find where the text develops the theme — a relationship, a consequence, a community's reaction. Cite the **detail or quotation** without sensationalising it. *(In an exam you would quote the actual passage.)*

**Step 3 — read the writer's attitude.** Ask what the writer seems to think: does the text show **sympathy** for a character, **criticism** of a custom, or a **warning** about a consequence? The tone and the outcomes reveal the attitude.

**Step 4 — link to character, conflict and consequence.** Show how the theme drives the **conflict** and shapes the **characters' fates**, and what **consequences** the text presents — these carry the writer's judgement.

**Step 5 — connect to cultural background.** Relate the theme to the society in the text, since attitudes to relationships are shaped by **culture and era**.

**Conclusion:** a sensitive theme such as sexuality is handled like any theme — as a serious **idea about life**, discussed **maturely and respectfully**, supported with **evidence**, and read for the writer's **attitude** and the **consequences** shown. Keep the discussion text-focused and age-appropriate.`,
      quiz: [
        { prompt: "A sensitive theme in a text is still a", options: ["theme (an idea about life)", "price", "cover", "font"], correctIndex: 0, explanation: "Sensitive themes are themes to be analysed." },
        { prompt: "Sensitive themes should be discussed with evidence and", options: ["respect", "mockery", "shock", "silence"], correctIndex: 0, explanation: "Discuss maturely and respectfully." },
        { prompt: "A mature theme should be treated as a serious idea, not for", options: ["shock", "analysis", "evidence", "understanding"], correctIndex: 0, explanation: "Avoid sensationalising." },
        { prompt: "The routine for analysing the theme is point, evidence and", options: ["explanation", "opinion only", "summary", "translation"], correctIndex: 0, explanation: "Point → evidence → explanation." },
        { prompt: "A writer's attitude to a theme may be sympathy, criticism or", options: ["warning", "a price", "a font", "a date"], correctIndex: 0, explanation: "Attitude can be sympathy, criticism or warning." },
        { prompt: "Attitudes to relationships are shaped by culture and", options: ["era", "price", "font", "page count"], correctIndex: 0, explanation: "Culture and era shape attitudes." },
        { prompt: "A sensitive theme still requires", options: ["textual support", "no evidence", "a price", "a cover"], correctIndex: 0, explanation: "Support the theme with evidence." },
        { prompt: "Avoiding a sensitive theme entirely is", options: ["an error — literature examines all of life", "always correct", "required", "good practice"], correctIndex: 0, explanation: "Discuss it maturely rather than avoid it." },
        { prompt: "Consequences shown in a text often reveal the writer's", options: ["judgement", "price", "font", "printer"], correctIndex: 0, explanation: "Consequences carry the writer's judgement." },
        { prompt: "A sensitive theme should be discussed in a way that is", options: ["mature and text-focused", "crude", "personal", "sensational"], correctIndex: 0, explanation: "Keep it mature and text-focused." },
        { prompt: "A theme drives a text's conflict and", options: ["plot", "price", "cover", "font"], correctIndex: 0, explanation: "Theme shapes conflict and plot." },
        { prompt: "Ignoring the writer's attitude to a theme is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Always read the writer's attitude." },
        { prompt: "A sensitive theme should be connected to the text's", options: ["cultural background", "price", "font", "index"], correctIndex: 0, explanation: "Culture shapes the theme." },
        { prompt: "Sensationalising a mature theme means treating it for", options: ["shock rather than meaning", "evidence", "respect", "analysis"], correctIndex: 0, explanation: "Sensationalising ignores meaning." },
        { prompt: "Evidence for a theme is a", options: ["detail or quotation", "price tag", "cover", "date"], correctIndex: 0, explanation: "Cite a detail or quotation." },
        { prompt: "Discussing a sensitive theme should follow", options: ["school guidance and age-appropriate respect", "no rules", "shock value", "personal attack"], correctIndex: 0, explanation: "Follow guidance; keep it respectful." },
        { prompt: "The theme affects characters and their", options: ["fates/consequences", "prices", "fonts", "page numbers"], correctIndex: 0, explanation: "Theme shapes character fates." },
        { prompt: "A responsible discussion stays", options: ["focused on the text", "focused on gossip", "focused on price", "focused on the cover"], correctIndex: 0, explanation: "Keep the discussion text-focused." },
        { prompt: "Reading the writer's attitude means asking what the text", options: ["judges or sympathises with", "costs", "weighs", "is titled"], correctIndex: 0, explanation: "Attitude is judgement or sympathy." },
        { prompt: "A sensitive theme is best stated as", options: ["an idea about life", "a one-word topic", "a price", "a date"], correctIndex: 0, explanation: "State it as a full idea." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how a sensitive theme such as sexuality should be discussed in a literature class.", answerKey: "As a theme — an idea about life the writer explores — discussed maturely, respectfully and with textual evidence, connected to the text's cultural background and the writer's attitude, and handled in an age-appropriate, text-focused way rather than sensationalised. Award marks for maturity/respect, evidence, and treating it as a theme.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A sensitive theme in a text should be", options: ["analysed as a serious idea with evidence", "used for shock", "avoided completely", "discussed without the text"], correctIndex: 0, answerKey: "Treat it as a serious theme with evidence. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why should a reader consider the writer's attitude when discussing a sensitive theme?", answerKey: "Because the writer's attitude — sympathy, criticism or warning — shapes the meaning; the tone and the consequences shown reveal the writer's judgement and the text's moral or social point. Award marks for the principle and the idea of consequences.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the point–evidence–explanation routine and why it applies to sensitive themes too.", answerKey: "Make a point about what the text conveys; cite a detail or quotation as evidence; explain the writer's purpose. It applies to sensitive themes because they are themes and still require textual support rather than mere opinion. Award marks for the routine and the reason.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss how a prose text you have studied treats a serious social or personal theme, showing the writer's attitude and the consequences presented, and supporting your discussion with evidence. Keep your discussion mature and text-focused.", answerKey: "Award marks for: the theme stated as an idea and discussed maturely, 6 marks; the writer's attitude identified (sympathy/criticism/warning), 6 marks; consequences and their meaning, 5 marks; textual evidence, 5 marks; respectful, coherent expression, 2 marks. Sensationalised or evidence-free responses should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
