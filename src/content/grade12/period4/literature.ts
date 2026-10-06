import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 12, Semester Two, Period IV: PROSE, POETRY, DRAMA AND LITERARY DEVICES.
// The three top-level CONTENTS items are rebuilt here as three topics:
// (1) Prose, Poetry and Drama (comparing the three genres); (2) Literary Devices
// — with its sub-items (style, content, character roles and traits, theme, tone,
// mood) taught as ## sections; (3) Writing a prose, poetry and drama. Literary
// concepts are sourced from LibreTexts (Humanities). The syllabus names set
// texts (Faceless by Amma Darko, Lonely Days by Bayo Adebowale, Native Son by
// Richard Wright, A Raisin in the Sun by Lorraine Hansberry, Crossing the Bar by
// Alfred Tennyson). Set-text-specific facts are NOT invented here — the general
// skills of comparing, analysing and composing literature are taught, and the
// set texts are flagged as the teaching targets.
export const literatureG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Prose, Poetry, Drama and Literary Devices",
  summary:
    "Period IV of the MoE Grade 12 Literature syllabus. Its three CONTENTS items are taught as three topics: comparing prose, poetry and drama as literary forms; reviewing literary devices (style, content, character roles and traits, theme, tone, mood); and composing prose, poetry and drama.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Fiction and Drama: types, terms and sample essay (Rhetoric: What, Why and How) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Rhetoric_-_What_Why_and_How/13%3A_Literature/13.01%3A_Fiction_and_Drama_-_types_terms_and_sample_essay)
      slug: "comparing-prose-poetry-drama",
      title: "Prose, Poetry and Drama",
      objective:
        "By the end of the topic, learners should be able to compare and contrast prose, poetry and drama as the three major literary forms, by their structure, purpose and how they are read.",
      estimatedMinutes: 150,
      notes: `## The three major literary forms
- Literature is written in three great forms — **prose**, **poetry** and **drama** — which share elements (theme, character, conflict) but differ in **how they are built**.

## How each form is written
- **Prose** (fiction) is written in **sentences and paragraphs**, usually with a **narrator**; it includes novels and short stories.
- **Poetry** is written in **lines and stanzas**; it is compressed and works through **sound, imagery and figurative language**.
- **Drama** is written in **dialogue** and meant to be **performed**; it has no narrator, and the story unfolds through characters' speech and action, organised into **acts and scenes**.

## What they share
- All three can carry **theme**, **character**, **conflict**, **setting** and **figurative language**.
- All three can be analysed with **point → evidence → explanation**.

## How they differ

| Feature | Prose | Poetry | Drama |
| --- | --- | --- | --- |
| Written in | Sentences and paragraphs | Lines and stanzas | Dialogue |
| Told by | A narrator | A speaker/persona | The characters (no narrator) |
| Built for | Reading | Reading/hearing | Performance |
| Divided into | Chapters | Stanzas | Acts and scenes |
| Works chiefly through | Story and character | Sound and image | Speech and action |

## Choosing the right approach
- Analyse **prose** through plot, character, point of view and theme.
- Analyse **poetry** through subject-matter, tone, mood, imagery, form and sound.
- Analyse **drama** through dialogue, acts/scenes, conflict, character and staging.

## Set text (to be supplied by the teacher)
- Compare a set prose text, poem and play you have studied: what each is about, how each is built, and how the form shapes the meaning.
- *(Specific content of each set text comes from the texts themselves, not invented here.)*

## Common errors and misconceptions
- **Analysing a poem like a story** — attend to line, stanza and sound, not just plot.
- **Analysing a play like a novel** — drama works through dialogue and performance, not narration.
- **Ignoring form** — the same theme reads differently in prose, verse and on stage.
- **Forgetting the shared core** — all three still carry theme, character and conflict.`,
      workedExample: `**Task.** Compare how the three forms might treat the same subject — a soldier's return home.

**Step 1 — prose.** A short story would use **sentences and paragraphs** and a **narrator** to follow the soldier over time: exposition (his arrival), rising action (his struggle to fit in), climax and resolution. Strength: interiority and gradual change.

**Step 2 — poetry.** A poem would compress the moment into **lines and stanzas**, using **imagery and figurative language** — perhaps a single image of an unfamiliar doorway — and a controlled **tone** and **mood**. Strength: intensity and feeling in few words.

**Step 3 — drama.** A play would stage the return as **dialogue** and action in **acts and scenes**, with no narrator — the tension shown through what characters say and do, and through **dramatic irony**. Strength: immediacy of live conflict.

**Step 4 — compare.** Same subject and theme (the difficulty of coming home), three different builds: prose unfolds it over time, poetry distils it into image, drama enacts it in speech.

**Conclusion:** prose, poetry and drama share a **core** (theme, character, conflict) but differ in **form** — sentences/paragraphs with a narrator, lines/stanzas of compressed image, and dialogue built for performance. Match the analysis to the form.`,
      quiz: [
        { prompt: "The three major literary forms are prose, poetry and", options: ["drama", "printing", "grammar", "spelling"], correctIndex: 0, explanation: "Prose, poetry and drama are the three forms." },
        { prompt: "Prose is written in", options: ["sentences and paragraphs", "lines and stanzas", "dialogue", "columns"], correctIndex: 0, explanation: "Prose uses sentences and paragraphs." },
        { prompt: "Poetry is written in", options: ["lines and stanzas", "sentences and paragraphs", "acts and scenes", "chapters"], correctIndex: 0, explanation: "Poetry uses lines and stanzas." },
        { prompt: "Drama is written in", options: ["dialogue", "paragraphs", "stanzas", "footnotes"], correctIndex: 0, explanation: "Drama uses dialogue." },
        { prompt: "The form usually built for performance is", options: ["drama", "prose", "poetry", "the essay"], correctIndex: 0, explanation: "Drama is meant to be performed." },
        { prompt: "Prose is usually told by a", options: ["narrator", "chorus", "no one", "printer"], correctIndex: 0, explanation: "Prose typically has a narrator." },
        { prompt: "Drama has no", options: ["narrator", "dialogue", "conflict", "character"], correctIndex: 0, explanation: "Drama unfolds without a narrator." },
        { prompt: "Poetry works chiefly through", options: ["sound and image", "chapters", "acts", "footnotes"], correctIndex: 0, explanation: "Poetry compresses meaning into sound and image." },
        { prompt: "All three forms can carry", options: ["theme, character and conflict", "prices", "fonts", "margins"], correctIndex: 0, explanation: "They share a core of elements." },
        { prompt: "Drama is divided into", options: ["acts and scenes", "stanzas", "chapters", "columns"], correctIndex: 0, explanation: "Plays use acts and scenes." },
        { prompt: "Analysing a poem like a story is an error because it ignores", options: ["line, stanza and sound", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Poetry needs attention to form and sound." },
        { prompt: "Prose is best analysed through plot, character, point of view and", options: ["theme", "price", "printer", "index"], correctIndex: 0, explanation: "These are the elements of fiction." },
        { prompt: "Poetry is best analysed through subject-matter, tone, mood, imagery and", options: ["form", "the price", "the cover", "the date"], correctIndex: 0, explanation: "Form and sound matter in poetry." },
        { prompt: "Drama is best analysed through dialogue, acts, conflict, character and", options: ["staging", "price", "font", "margin"], correctIndex: 0, explanation: "Staging is part of drama." },
        { prompt: "The same theme reads differently across the forms because of", options: ["form", "price", "font", "margin"], correctIndex: 0, explanation: "Form shapes meaning." },
        { prompt: "Novels and short stories belong to", options: ["prose", "poetry", "drama", "the essay"], correctIndex: 0, explanation: "Prose fiction includes novels and stories." },
        { prompt: "A speaker or persona voices a", options: ["poem", "play with no narrator", "map", "price list"], correctIndex: 0, explanation: "Poetry has a speaker/persona." },
        { prompt: "All three forms can be analysed with", options: ["point → evidence → explanation", "arithmetic", "pricing", "printing"], correctIndex: 0, explanation: "The same evidence routine applies." },
        { prompt: "Poetry's strength is intensity of feeling in", options: ["few words", "many chapters", "several acts", "footnotes"], correctIndex: 0, explanation: "Poetry compresses feeling." },
        { prompt: "Drama's strength is the immediacy of", options: ["live conflict", "the price", "the index", "the margin"], correctIndex: 0, explanation: "Performance gives immediacy." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State how each of prose, poetry and drama is written (its basic form).", answerKey: "Prose is written in sentences and paragraphs (usually with a narrator); poetry is written in lines and stanzas; drama is written in dialogue and meant to be performed. Award 1 mark each, +1 for accuracy (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which form is built to be performed and told without a narrator?", options: ["drama", "prose", "poetry", "the novel"], correctIndex: 0, answerKey: "Drama. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name two things all three literary forms share.", answerKey: "Any two of: theme; character; conflict; setting; figurative language; the fact that all can be analysed with point-evidence-explanation. Award 2 marks each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why must the method of analysis be matched to the literary form?", answerKey: "Because each form is built differently — prose through plot/character/narrator, poetry through line/stanza/sound/image, drama through dialogue/acts/staging — so the same theme is conveyed by different means; analysing a poem like a story or a play like a novel misses how the form makes meaning. Award marks for the principle and an example.", marks: 4 },
        { type: "ESSAY", prompt: "Compare and contrast prose, poetry and drama as literary forms, explaining how each is structured, how each is read or performed, and how the form of each shapes its meaning. Refer to texts you have studied.", answerKey: "Award marks for: prose described (sentences/paragraphs, narrator, plot), 5 marks; poetry described (lines/stanzas, sound, image, compression), 5 marks; drama described (dialogue, acts/scenes, performance), 5 marks; comparison of how form shapes meaning, 5 marks; reference to studied texts and expression, 4 marks. A description of only one form should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary / Elements of Fiction (Oxnard; Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary)
      slug: "literary-devices-style-content-theme",
      title: "Literary Devices",
      objective:
        "By the end of the topic, learners should be able to analyse a literary work through its style, content, character roles and traits, theme, tone and mood.",
      estimatedMinutes: 150,
      notes: `## Style
- **Style** is a writer's **characteristic use of language** — **diction** (word choice), sentence structure, imagery and tone.
- Ask whether the language is plain or ornate, formal or colloquial, and how that shapes the reader's experience.

## Content
- **Content** is **what the work is about** — its subject matter, events and ideas, as opposed to **style**, which is **how** it is written.
- Separate content (the *what*) from style and form (the *how*), then show how they work together.

## Character roles and traits
- A **character** is *"a person, or perhaps an animal, who participates in the action of the story."*
- **Roles:** the **protagonist** — *"the main character of a story"*; the **antagonist** — *"an opposing force to the protagonist"*; and **supporting** characters.
- **Traits** are the qualities that make up a character (proud, loyal, fearful), shown through **characterization** — direct (stated) or indirect (revealed by action, speech and thought).

## Theme
- **Theme** is *"the main idea(s) of a work of literature"* — a **full idea about life**, not a one-word topic.
- A rich work carries **several themes**; state each and support it with evidence.

## Tone
- **Tone** is *"the attitude ... of the work, and the style of narration"* — the **writer's or speaker's attitude** to the subject, carried by **diction**.

## Mood
- **Mood** is the **feeling the work creates in the reader** (calm, tense, sorrowful, hopeful).
- **Imagery** is often used to **create the mood** of a text.
- Keep them apart: **tone** is the *attitude conveyed*; **mood** is the *feeling produced*.

## Common errors and misconceptions
- **Confusing style with content** — content is the *what*; style is the *how*.
- **Confusing tone with mood** — tone is the attitude conveyed; mood is the reader's feeling.
- **Confusing role with trait** — a role is a character's function (protagonist); a trait is a quality (proud).
- **Stating a theme as one word** — a theme is a full idea about life.`,
      workedExample: `**Task.** Analyse a short passage through style, content, character, theme, tone and mood.

*"He counted the coins again, though he knew the sum. Outside, the rain fell without pause, as it had for days. 'It will be enough,' he said, to no one. It would not be enough."*

**Step 1 — content.** *What it is about:* a poor man counting money he knows is too little, in endless rain. That is the **content**.

**Step 2 — style.** *How it is written:* short, plain sentences and bare diction (*counted*, *coins*, *rain*, *enough*), with a blunt final sentence. This spare **style** matches his hard situation.

**Step 3 — character (role and trait).** He is the **protagonist**; his **traits** — anxious, proud, self-deceiving — are shown **indirectly** (counting twice, speaking to no one).

**Step 4 — theme.** A full idea: *"poverty forces people to hope against what they already know."* Supported by the gap between "it will be enough" and "it would not be enough."

**Step 5 — tone and mood.** The narrator's flat, unsparing **tone** conveys pity without sentiment; the images of ceaseless rain and empty counting create a **bleak, anxious mood** in the reader.

**Conclusion:** analyse a text by separating **content** (the *what*) from **style** (the *how*), reading **character roles and traits**, stating the **theme** as a full idea, and distinguishing **tone** (attitude) from **mood** (feeling) — all with evidence.`,
      quiz: [
        { prompt: "A writer's characteristic use of language is their", options: ["style", "price", "index", "cover"], correctIndex: 0, explanation: "Style is how the writer uses language." },
        { prompt: "What a work is about — its subject and events — is its", options: ["content", "style", "price", "font"], correctIndex: 0, explanation: "Content is the 'what'." },
        { prompt: "Content is the 'what' of a work; style is the", options: ["how", "price", "printer", "date"], correctIndex: 0, explanation: "Style is how it is written." },
        { prompt: "The main character of a story is the", options: ["protagonist", "antagonist", "narrator", "printer"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The opposing force to the protagonist is the", options: ["antagonist", "protagonist", "chorus", "editor"], correctIndex: 0, explanation: "The antagonist opposes the protagonist." },
        { prompt: "A character's function in the story (e.g. protagonist) is their", options: ["role", "trait", "price", "font"], correctIndex: 0, explanation: "A role is a function." },
        { prompt: "A quality like 'proud' or 'loyal' is a character", options: ["trait", "role", "price", "index"], correctIndex: 0, explanation: "A trait is a quality." },
        { prompt: "Traits are shown through", options: ["characterization", "pricing", "printing", "indexing"], correctIndex: 0, explanation: "Characterization reveals traits." },
        { prompt: "The main idea of a work of literature is its", options: ["theme", "price", "font", "margin"], correctIndex: 0, explanation: "Theme is the main idea." },
        { prompt: "A theme should be stated as", options: ["a full idea about life", "one word", "a price", "a date"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "Tone is the attitude conveyed, carried mainly by", options: ["diction", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Word choice conveys tone." },
        { prompt: "Mood is the feeling created in the", options: ["reader", "printer", "publisher", "editor"], correctIndex: 0, explanation: "Mood is the reader's feeling." },
        { prompt: "Imagery is often used to create a text's", options: ["mood", "price", "index", "margin"], correctIndex: 0, explanation: "Imagery shapes mood." },
        { prompt: "Tone differs from mood because tone is the", options: ["attitude conveyed, mood the feeling produced", "price, mood the cover", "same as mood", "font, mood the margin"], correctIndex: 0, explanation: "Tone = attitude; mood = feeling." },
        { prompt: "Confusing style with content confuses the how with the", options: ["what", "price", "printer", "date"], correctIndex: 0, explanation: "Content is the what; style the how." },
        { prompt: "A role differs from a trait: a role is a function, a trait is a", options: ["quality", "price", "font", "date"], correctIndex: 0, explanation: "Trait = quality; role = function." },
        { prompt: "A rich work usually carries", options: ["several themes", "no theme", "only a title", "only a price"], correctIndex: 0, explanation: "Works hold multiple themes." },
        { prompt: "Direct characterization states a trait; indirect characterization", options: ["shows it through action", "prices it", "prints it", "numbers it"], correctIndex: 0, explanation: "Indirect shows through behaviour." },
        { prompt: "Analysing style well means noting specific", options: ["diction and sentence choices", "prices", "fonts", "margins"], correctIndex: 0, explanation: "Style analysis needs specifics." },
        { prompt: "A supporting character is one who is", options: ["neither protagonist nor antagonist but aids the story", "the printer", "the price", "the cover"], correctIndex: 0, explanation: "Supporting characters aid the main figures." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the content and the style of a literary work.", answerKey: "Content is what the work is about — its subject matter, events and ideas (the 'what'); style is how it is written — the writer's diction, sentence structure, imagery and tone (the 'how'). Award 2 per term.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'Proud' describing a character is a", options: ["trait", "role", "theme", "price"], correctIndex: 0, answerKey: "A quality of the character — a trait. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a character's role from a character's trait, giving an example of each.", answerKey: "A role is the character's function in the story (protagonist, antagonist, supporting); a trait is a quality of the character (proud, loyal, fearful). Example: the protagonist (role) who is stubborn (trait). Award 2 per term with example.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish tone from mood in a literary work.", answerKey: "Tone is the attitude conveyed by the writer or speaker toward the subject, carried by diction; mood is the feeling the work creates in the reader, often built through imagery. Award 2 per term.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing a literary work you have studied, analyse its style, one major character's role and traits, a central theme, and its tone and mood, supporting each point with evidence.", answerKey: "Award marks for: a specific feature of style analysed, 5 marks; a character's role and traits (with characterization), 6 marks; a theme stated as a full idea and developed, 6 marks; tone and mood distinguished, 5 marks; expression, 2 marks. Confusing content with style, or tone with mood, loses those marks; plot summary should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction / Fiction and Drama: types and terms (Literature for the Humanities, Lumen; Rhetoric: What, Why and How) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "writing-prose-poetry-drama",
      title: "Writing a Prose, Poetry and Drama",
      objective:
        "By the end of the topic, learners should be able to compose in each of the three forms — a short prose story, a poem, and a short dramatic scene — using the elements proper to each.",
      estimatedMinutes: 150,
      notes: `## Choosing a form
- Decide which form fits the idea: **prose** to unfold a story over time; **poetry** to distil a feeling or image; **drama** to stage a conflict as live speech.

## Writing prose (a short story)
- Build on the **elements of fiction**: character with a **want**, **setting**, a **central conflict**, a **plot** (exposition → rising action → climax → falling action → resolution), a **point of view**, and a **theme**.
- Reveal character **indirectly** — through action, speech and thought — rather than only stating traits.

## Writing poetry (a poem)
- Choose a **subject** and a **tone**; use **concrete imagery** and **figurative language**.
- Shape the **form** — lines, stanzas, sound and **line breaks** — so it supports the meaning; never force a rhyme.

## Writing drama (a scene)
- A play is written in **dialogue** and meant to be **performed**; there is **no narrator**.
- Reveal character and advance the **conflict** through what characters **say and do**; add brief **stage directions** for movement and delivery.
- Organise the action into a **scene** with a clear beginning, a rising tension and a turn.

## A composition checklist (all forms)
1. **Idea and form** — what is it about, and which form suits it?
2. **Central conflict or feeling** — what drives it?
3. **Character** — who, and what do they want?
4. **The elements proper to the form** — plot/point of view (prose); imagery/line breaks (poetry); dialogue/stage directions (drama).
5. **Theme** — the idea that emerges.
6. **Revise** — cut what is dead; sharpen what carries meaning.

## Set text (to be supplied by the teacher)
- Model your writing on the forms studied in the set texts, applying the elements of each form.
- *(Any borrowing of situation or character from a set text should be your own composition, not copied.)*

## Common errors and misconceptions
- **Using the wrong form** — do not write a poem where a scene is needed, or narrate a play.
- **Telling, not showing** (prose/drama) — reveal character through action and speech.
- **Abstract vagueness** (poetry) — use concrete images.
- **No conflict** — every story, poem of tension and scene needs a driving struggle or feeling.`,
      workedExample: `**Task.** Take one situation — a daughter tells her father she is leaving home — and open it in each form.

**Prose (sentences/paragraphs, narrator, indirect characterization):**
*She had packed the bag the night before and hidden it behind the door. Now, watching her father stir his tea, she rehearsed the sentence one more time and found her mouth had gone dry.*
- Elements: **point of view** (close third), **setting**, **internal conflict**, indirect **characterization**.

**Poetry (lines/stanzas, image, line breaks):**
*The bag waits behind the door —*
*packed, patient as a held breath.*
*Between the teaspoon's turn and my father's eyes,*
*a whole country of leaving.*
- Elements: **concrete imagery**, **metaphor** (*country of leaving*), meaningful **line breaks**, controlled **tone**.

**Drama (dialogue, stage directions, no narrator):**
*FATHER (stirring his tea): You're up early.*
*DAUGHTER (glancing at the door): I have to tell you something.*
*(She does not sit.)*
- Elements: **dialogue** carries the story, **stage directions** show tension, the **conflict** is staged, not narrated.

**Conclusion:** the same situation becomes a **story** (unfolded over time), a **poem** (distilled into image), or a **scene** (staged as dialogue). Choose the form to fit the idea and use the **elements proper to each**.`,
      quiz: [
        { prompt: "Prose is best for a subject you want to", options: ["unfold over time", "distil into one image", "stage as speech", "price"], correctIndex: 0, explanation: "Prose unfolds a story over time." },
        { prompt: "Poetry is best for a subject you want to", options: ["distil into a feeling or image", "narrate at length", "stage in acts", "price"], correctIndex: 0, explanation: "Poetry compresses feeling and image." },
        { prompt: "Drama is best for a subject you want to", options: ["stage as live conflict", "narrate quietly", "rhyme", "price"], correctIndex: 0, explanation: "Drama stages conflict in performance." },
        { prompt: "A short story is built on the elements of", options: ["fiction", "arithmetic", "pricing", "printing"], correctIndex: 0, explanation: "Stories use the elements of fiction." },
        { prompt: "In prose, character is best revealed", options: ["indirectly through action and speech", "only by stated labels", "by price", "by font"], correctIndex: 0, explanation: "Show, do not merely tell." },
        { prompt: "A poem should use concrete imagery and", options: ["figurative language", "footnotes", "acts", "chapters"], correctIndex: 0, explanation: "Poetry works through image and figure." },
        { prompt: "In a poem you should never force a", options: ["rhyme", "line break", "image", "stanza"], correctIndex: 0, explanation: "Do not distort meaning for rhyme." },
        { prompt: "A play is written in", options: ["dialogue", "paragraphs", "stanzas", "footnotes"], correctIndex: 0, explanation: "Drama uses dialogue." },
        { prompt: "In drama there is no", options: ["narrator", "dialogue", "conflict", "character"], correctIndex: 0, explanation: "Drama has no narrator." },
        { prompt: "Brief instructions for movement in a play are", options: ["stage directions", "footnotes", "stanzas", "captions"], correctIndex: 0, explanation: "Stage directions guide performance." },
        { prompt: "Every story, tense poem and scene needs a driving", options: ["conflict or feeling", "price", "font", "margin"], correctIndex: 0, explanation: "Conflict/feeling drives the work." },
        { prompt: "The composition checklist begins with", options: ["idea and form", "price", "printer", "cover"], correctIndex: 0, explanation: "Start with the idea and its form." },
        { prompt: "A short story's plot runs exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "price"], correctIndex: 0, explanation: "The arc ends in resolution." },
        { prompt: "In a poem, line breaks should", options: ["support the meaning", "raise the price", "change the font", "number pages"], correctIndex: 0, explanation: "Line breaks shape meaning." },
        { prompt: "In drama, character and conflict are advanced through", options: ["what characters say and do", "a narrator's summary", "the price", "the index"], correctIndex: 0, explanation: "Speech and action carry drama." },
        { prompt: "Using a poem where a scene is needed is", options: ["using the wrong form", "good practice", "required", "a stage direction"], correctIndex: 0, explanation: "Match the form to the idea." },
        { prompt: "'Telling, not showing' is a fault in", options: ["prose and drama", "arithmetic", "pricing", "indexing"], correctIndex: 0, explanation: "Reveal through action and speech." },
        { prompt: "Abstract vagueness is a fault chiefly in", options: ["poetry", "arithmetic", "pricing", "printing"], correctIndex: 0, explanation: "Poetry needs concrete images." },
        { prompt: "The theme of a composed work is the idea that", options: ["emerges", "is priced", "is printed", "is numbered"], correctIndex: 0, explanation: "Theme emerges from the work." },
        { prompt: "The composition checklist ends with", options: ["revising", "pricing", "printing", "binding"], correctIndex: 0, explanation: "Revision sharpens the work." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the elements you would build a short prose story on.", answerKey: "Character with a want; setting; a central conflict; a plot (exposition, rising action, climax, falling action, resolution); a point of view; and a theme. Award marks for the elements given (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is essential to writing drama but absent from it as a technique?", options: ["dialogue carries the story, with no narrator", "a narrator explains events", "stanzas and rhyme", "chapters"], correctIndex: 0, answerKey: "Drama is dialogue-driven with no narrator. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "How does writing a poem differ from writing a short story?", answerKey: "A poem distils a feeling or image into lines and stanzas, working through concrete imagery, figurative language, sound and line breaks; a short story unfolds events over time in sentences and paragraphs using plot, point of view and characterization. Award 2 per form's approach.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why should the writer choose the form to fit the idea? Give an example.", answerKey: "Because each form suits a different purpose — prose to unfold a story over time, poetry to distil a feeling/image, drama to stage a live conflict; using the wrong form (e.g. narrating a play, or writing a poem where a scene is needed) weakens the work. Accept any valid example. Award 2 for the principle and 2 for the example.", marks: 4 },
        { type: "ESSAY", prompt: "Take one situation of your choice and write it briefly in two different forms — a short prose passage and a short poem OR a short dramatic scene — then explain how the elements of each form shaped your treatment.", answerKey: "Award marks for: prose passage using fiction elements (character, conflict, point of view, indirect characterization), 8 marks; the second piece using the elements proper to its form (imagery/line breaks for poetry, or dialogue/stage directions for drama), 8 marks; the reflective explanation of how form shaped each, 6 marks; expression, 2 marks. One form only, or telling-not-showing throughout, should not exceed 10.", marks: 24 },
      ],
    },
  ],
};
