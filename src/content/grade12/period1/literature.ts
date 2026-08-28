import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 12, Semester One, Period I: REVIEW AFRICAN POEMS AND FIGURATIVE
// EXPRESSIONS. The Grade 12 Period I CONTENTS list has three top-level items,
// each rebuilt here as its own topic: (1) African Poems — with its sub-items
// (subject-matter, tone, atmosphere, mood, literary devices, relevance of poem
// to society, form) taught as ## sections; (2) Figurative Expressions;
// (3) Writing of poems. Literary concepts are sourced from LibreTexts
// (Humanities). The syllabus names set poems (Piano and Drums by Gabriel Okara,
// The Panic of Growing Older by Lenrie Peters, Vanity by Birago Diop, The Anvil
// and the Hammer by Kofi Awoonor, The Dining Table by Gbanabom Hallowell,
// Ambush by Gbemisola Adeoti, Black Woman by L.S. Senghor, A Government Driver
// on his Retirement by Onu Chibuike). Set-poem-specific facts are NOT invented
// here — the general skills of analysing and composing poems are taught, and
// the set poems are flagged as the teaching targets.
export const literatureG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Review: African Poems and Figurative Expressions",
  summary:
    "Period I of the MoE Grade 12 Literature syllabus. Its three CONTENTS items are taught as three topics: analysing African poems through subject-matter, tone, atmosphere, mood, literary devices, form and relevance to society; reviewing figurative expressions; and writing original poems.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Speaker and Voice / Word Choice, Word Order and Tone (Introduction to Literature and Critical Thinking, Oxnard; Ringo & Kashyap) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.06%3A_Speaker_and_Voice)
      slug: "analysing-african-poems",
      title: "African Poems",
      objective:
        "By the end of the topic, learners should be able to analyse an African poem through its subject-matter, tone, atmosphere, mood, literary devices, form and relevance to society.",
      estimatedMinutes: 150,
      notes: `## Analysing a poem
- A poem is read closely for **what it says** (subject-matter) and **how it says it** (tone, mood, imagery, form).
- African poems named by the syllabus include *Piano and Drums* (Gabriel Okara), *The Panic of Growing Older* (Lenrie Peters), *Vanity* (Birago Diop) and *Black Woman* (L.S. Senghor).

## Subject-matter
- The **subject-matter** is **what the poem is about** — its central topic or experience.
- Distinguish the **speaker** (the voice that says the poem, the *persona*) from the **poet** — they may be different.
- Ask: who is speaking, to whom, about what situation?

## Tone
- **Tone** is *"the general character or attitude of a piece of writing"* — the **speaker's attitude** to the subject.
- Tone is carried by **diction** (word choice): words with **positive or negative associations give a specific tone**.
- Every word has a **denotation** (dictionary meaning) and a **connotation** (implied meaning): *home* denotes a residence but connotes security, warmth and belonging.

## Atmosphere and mood
- **Mood** is the **feeling the poem creates in the reader** (calm, tense, sorrowful, hopeful).
- **Atmosphere** is the mood attached to the poem's **setting or situation**.
- **Imagery** — descriptive language appealing to the senses — is used to **create the mood** of a text.
- Keep tone and mood apart: **tone** is the *speaker's attitude*; **mood** is the *reader's feeling*.

## Literary devices
- Poets use **figurative language** (metaphor, simile, personification), **imagery**, **symbolism** and **sound** to build meaning.
- **Symbolism** — an object standing for a larger idea; **imagery** — details that appeal to the senses.
- Name the device, quote it, and explain its **effect** on meaning or feeling.

## Form
- **Form** is the **shape of the poem on the page** — its **lines** and **stanzas** (poetry is written in *lines and stanzas*, unlike prose in sentences and paragraphs).
- Note **stanza length**, **line length**, **rhyme** (repeated end-sounds) and **rhythm**, and whether the form is fixed (e.g. a sonnet) or free.
- Ask how the form **supports the meaning** — a broken, irregular form may mirror conflict; a steady form, calm.

## Relevance of a poem to society
- Ask what the poem **says about human life or society** — its comment on culture, values, change or injustice.
- African poems often speak to **cultural identity, colonial encounter, ageing, vanity, and community**.

## Set poem (to be supplied by the teacher)
- Apply this method to the assigned African poem: state its subject-matter, describe its tone and mood, analyse its key devices and form, and explain its relevance to society.
- *(Specific lines, images and meanings come from the set poem itself, not invented here.)*

## Common errors and misconceptions
- **Confusing the speaker with the poet** — the voice may be a persona.
- **Confusing tone and mood** — tone is the speaker's attitude; mood is the reader's feeling.
- **Device-spotting** — always finish with the effect.
- **Ignoring form** — the shape of the poem carries meaning too.`,
      workedExample: `**Task.** Analyse a short poem through subject-matter, tone, mood, device and form, using a general model.

*Model lines:* "The old drum sleeps in the corner now; / dust settles where our fathers danced."

**Step 1 — subject-matter.** The poem is about a **silent, disused drum** and, through it, about **lost tradition** — the passing of an older way of life. The **speaker** looks back with memory.

**Step 2 — tone.** The diction is quiet and elegiac — *sleeps*, *dust*, *fathers*. The connotations (rest, neglect, ancestry) give a **regretful, respectful tone** toward the subject.

**Step 3 — mood and atmosphere.** The images of a still drum and settling dust create a **subdued, mournful mood**; the atmosphere of the corner is one of neglect and stillness.

**Step 4 — device.** *"The old drum sleeps"* is **personification** — the drum is given human rest; its effect is to make the loss of tradition feel like a death or a fading.

**Step 5 — form.** Two lines, unrhymed, plainly set out — a **simple, quiet form** that matches the hushed subject.

**Step 6 — relevance to society.** The poem comments on **cultural change** — how modern life can silence inherited traditions — a concern common in African poetry.

**Conclusion:** analyse a poem by stating its **subject-matter**, describing its **tone** (speaker's attitude via diction) and **mood** (reader's feeling), naming a **device** with its effect, reading the **form**, and drawing out its **relevance to society**.`,
      quiz: [
        { prompt: "The subject-matter of a poem is", options: ["what the poem is about", "the price", "the printer", "the page count"], correctIndex: 0, explanation: "Subject-matter is the poem's central topic." },
        { prompt: "The voice that speaks a poem is the", options: ["speaker (persona)", "printer", "publisher", "reader"], correctIndex: 0, explanation: "The speaker/persona may differ from the poet." },
        { prompt: "Tone is the speaker's", options: ["attitude to the subject", "shoe size", "address", "salary"], correctIndex: 0, explanation: "Tone is the general attitude of the writing." },
        { prompt: "Tone is chiefly carried by", options: ["diction (word choice)", "the price", "the cover", "the margin"], correctIndex: 0, explanation: "Word choice and its associations create tone." },
        { prompt: "The dictionary meaning of a word is its", options: ["denotation", "connotation", "rhyme", "metre"], correctIndex: 0, explanation: "Denotation is the literal meaning." },
        { prompt: "The implied, associated meaning of a word is its", options: ["connotation", "denotation", "syllable", "stanza"], correctIndex: 0, explanation: "Connotation is the implied meaning." },
        { prompt: "Mood is the feeling created in the", options: ["reader", "printer", "publisher", "editor"], correctIndex: 0, explanation: "Mood is the reader's feeling." },
        { prompt: "Atmosphere is the mood attached to the poem's", options: ["setting or situation", "price", "font", "index"], correctIndex: 0, explanation: "Atmosphere is setting-linked mood." },
        { prompt: "Descriptive language appealing to the senses is", options: ["imagery", "rhyme", "metre", "a stanza"], correctIndex: 0, explanation: "Imagery appeals to the senses." },
        { prompt: "Imagery can be used to create a text's", options: ["mood", "price", "printer", "index"], correctIndex: 0, explanation: "Imagery shapes mood." },
        { prompt: "The difference between tone and mood is that tone is the", options: ["speaker's attitude, mood the reader's feeling", "price, mood the cover", "font, mood the margin", "same as mood"], correctIndex: 0, explanation: "Tone = speaker's attitude; mood = reader's feeling." },
        { prompt: "An object standing for a larger idea is a", options: ["symbol", "simile", "stanza", "rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "The form of a poem is its", options: ["shape in lines and stanzas", "price", "printer", "cover"], correctIndex: 0, explanation: "Form is the poem's structure on the page." },
        { prompt: "Poetry is written in", options: ["lines and stanzas", "sentences and paragraphs", "acts and scenes", "columns"], correctIndex: 0, explanation: "Poetry uses lines and stanzas." },
        { prompt: "Repeated end-sounds in a poem are", options: ["rhyme", "metonymy", "diction", "tone"], correctIndex: 0, explanation: "Rhyme is repeated end-sounds." },
        { prompt: "A good analysis of a device always ends with its", options: ["effect", "price", "printer", "date"], correctIndex: 0, explanation: "State the effect on meaning or feeling." },
        { prompt: "The relevance of a poem to society is what it says about", options: ["human life or society", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Relevance is the poem's comment on life." },
        { prompt: "A broken, irregular form may mirror", options: ["conflict", "the price", "the printer", "the index"], correctIndex: 0, explanation: "Form can support meaning." },
        { prompt: "Confusing the poet with the persona is a", options: ["reading error", "requirement", "good habit", "form of rhyme"], correctIndex: 0, explanation: "The speaker may be a persona, not the poet." },
        { prompt: "African poems often address cultural identity, ageing and", options: ["community", "arithmetic", "printing", "cartography"], correctIndex: 0, explanation: "These are common concerns of African poetry." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish tone from mood in a poem.", answerKey: "Tone is the speaker's attitude to the subject (carried by diction/word choice); mood is the feeling the poem creates in the reader. Award 2 per term clearly distinguished.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The implied, associative meaning of a word is its", options: ["connotation", "denotation", "rhyme", "metre"], correctIndex: 0, answerKey: "Connotation. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name four things you would examine when analysing the form of a poem.", answerKey: "Any four of: number/length of stanzas; line length; rhyme (repeated end-sounds); rhythm/metre; whether the form is fixed (e.g. sonnet) or free; how the form supports the meaning. Award 1 mark each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What is the subject-matter of a poem, and why must the speaker be distinguished from the poet?", answerKey: "Subject-matter is what the poem is about — its central topic or experience. The speaker (persona) is the voice within the poem and may be a created character different from the poet, so a reader must not assume the poet's own views. Award 2 for subject-matter and 2 for the speaker/poet distinction.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing an African poem you have studied, analyse its subject-matter, tone and mood, at least two literary devices, its form, and its relevance to society, supporting your points with reference to the poem.", answerKey: "Award marks for: subject-matter identified, 4 marks; tone and mood distinguished and described, 5 marks; at least two devices named with effect, 6 marks; form read and linked to meaning, 4 marks; relevance to society, 3 marks; expression, 2 marks. Device-spotting or paraphrase without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "figurative-expressions",
      title: "Figurative Expressions",
      objective:
        "By the end of the topic, learners should be able to identify figurative expressions in poems and explain their effect using the name–quote–effect method.",
      estimatedMinutes: 150,
      notes: `## Figurative expressions
- **Figurative language** *"uses words or expressions not meant to be taken literally"* — it means **more than the literal words**.
- It is dense in poetry but shapes all imaginative writing.

## The main figures to recognise
- **Metaphor** — *"a direct comparison between two unlike things"* (e.g. *Hope is the thing with feathers*).
- **Simile** — *"a comparison that uses like or as"*.
- **Personification** — *"human characteristics being applied to non-human things"*.
- **Metonymy** — *"when one thing is represented by another thing associated with it"* (e.g. *the pen is mightier than the sword*).
- **Synecdoche** — *"when a part of something symbolizes the whole, or the whole of something symbolizes the part"* (e.g. *all hands on deck*).
- **Imagery** — descriptive language appealing to the **senses**.
- **Symbolism** — an object standing for a larger, abstract idea.
- **Hyperbole** — deliberate **exaggeration** for effect.

## The name–quote–effect method
1. **Name** the figure of speech.
2. **Quote** the words from the text.
3. **Explain the effect** — the image or feeling created and how it serves the meaning.

## Figurative language and cultural meaning
- In African poems a figure may draw on **local images** (drums, rivers, the land) whose meaning is tied to the **culture**.
- Read the effect in that context — a drum image may signal **ancestral rhythm, community or the past**.

## Common errors and misconceptions
- **Device-spotting** — always complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Confusing metonymy and synecdoche** — synecdoche uses a **part** for the whole; metonymy uses an **associated** thing.
- **Reading a symbol too literally** — a symbol stands for a larger idea.`,
      workedExample: `**Task.** Analyse two figurative expressions using name–quote–effect.

*"The drums beat in my blood, and the piano's cold notes cut the air like glass."*

**Expression 1 — "The drums beat in my blood"**
1. **Name:** **metaphor** (a direct comparison — the drums beat *in the blood*, an internal, bodily image).
2. **Quote:** "the drums beat in my blood."
3. **Effect:** makes the drum rhythm feel **inborn and ancestral**, as if the traditional music is part of the speaker's very body — suggesting deep cultural belonging.

**Expression 2 — "the piano's cold notes cut the air like glass"**
1. **Name:** **simile** (uses *like*).
2. **Quote:** "cut the air like glass."
3. **Effect:** comparing the notes to glass makes them feel **sharp, cold and foreign**, contrasting with the warm drums and dramatising a cultural clash.

**Conclusion:** name the device, quote it, and explain its **effect in context**. Always finish with the effect.`,
      quiz: [
        { prompt: "Figurative language means", options: ["more than the literal words", "exactly the literal words", "nothing", "only numbers"], correctIndex: 0, explanation: "Figures carry non-literal meaning." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison of two unlike things is a", options: ["metaphor", "simile", "metonymy", "repetition"], correctIndex: 0, explanation: "A metaphor is direct." },
        { prompt: "Giving human qualities to non-human things is", options: ["personification", "hyperbole", "simile", "synecdoche"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "'The pen is mightier than the sword' is", options: ["metonymy", "simile", "hyperbole", "imagery"], correctIndex: 0, explanation: "One thing represents an associated thing." },
        { prompt: "'All hands on deck' uses", options: ["synecdoche", "metaphor", "hyperbole", "irony"], correctIndex: 0, explanation: "A part (hands) stands for the whole (sailors)." },
        { prompt: "Language that appeals to the senses is", options: ["imagery", "metre", "rhyme", "a stanza"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "An object standing for a larger idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "Deliberate exaggeration is", options: ["hyperbole", "simile", "metonymy", "imagery"], correctIndex: 0, explanation: "Hyperbole exaggerates." },
        { prompt: "The name–quote–effect method ends with", options: ["explaining the effect", "counting lines", "translating", "ignoring meaning"], correctIndex: 0, explanation: "The effect step earns the marks." },
        { prompt: "In African poems, a drum image may symbolise", options: ["ancestral rhythm or community", "a price", "a page number", "a printer"], correctIndex: 0, explanation: "Local images carry cultural meaning." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is a direct comparison." },
        { prompt: "Synecdoche differs from metonymy in that it uses a", options: ["part for the whole", "rhyme for a reason", "price for a book", "font for a page"], correctIndex: 0, explanation: "Synecdoche = part for whole." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is left out." },
        { prompt: "'Her words were music' is a", options: ["metaphor", "simile", "hyperbole", "metonymy"], correctIndex: 0, explanation: "It directly equates words with music." },
        { prompt: "'His hands were as cold as ice' is a", options: ["simile", "metaphor", "personification", "synecdoche"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "The effect step asks what the words make you", options: ["see, hear or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the reader's experience." },
        { prompt: "Figurative language conveys much meaning in", options: ["few words", "many pages", "numbers", "silence"], correctIndex: 0, explanation: "Figures are economical." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "'I have told you a thousand times' is", options: ["hyperbole", "metonymy", "synecdoche", "simile"], correctIndex: 0, explanation: "It is a deliberate exaggeration." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define simile, metaphor and personification, giving one example of each.", answerKey: "Simile — a comparison using like/as (e.g. 'brave as a lion'); metaphor — a direct comparison without like/as (e.g. 'he is a lion'); personification — human qualities given to non-human things (e.g. 'the wind sighed'). Award 1 per device with example (max 3), +1 accuracy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The crown announced a new tax' is an example of", options: ["metonymy", "simile", "synecdoche", "personification"], correctIndex: 0, answerKey: "The crown (an associated thing) stands for the monarch — metonymy. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'Hope drummed in her chest like distant thunder.'", answerKey: "Name: simile (uses 'like'), with personification of hope. Quote: 'like distant thunder.' Effect: makes hope feel powerful and building, as if a force approaching from far off, giving a sense of rising anticipation. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between metonymy and synecdoche.", answerKey: "Metonymy represents one thing by another thing associated with it (e.g. 'the pen' for writing); synecdoche uses a part to stand for the whole, or the whole for a part (e.g. 'all hands' for sailors). Award 2 per figure correctly distinguished.", marks: 4 },
        { type: "ESSAY", prompt: "Choose a poem you have studied and discuss how the poet uses at least three figurative expressions to convey meaning or feeling, explaining the effect of each with quotation.", answerKey: "Award marks for: at least three figures correctly identified and quoted, 9 marks; explanation of the effect of each, including cultural context where relevant, 12 marks; aptness of quotation and expression, 3 marks. Device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Word Choice, Word Order and Tone / Figurative Language (Writing and Critical Thinking Through Literature, Ringo & Kashyap; Oxnard) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/06%3A_About_Poetry/6.07%3A_Word_Choice_Word_Order_and_Tone)
      slug: "writing-poems",
      title: "Writing of Poems",
      objective:
        "By the end of the topic, learners should be able to compose an original poem, choosing a subject, controlling diction and tone, using imagery and figurative language, and shaping form.",
      estimatedMinutes: 150,
      notes: `## Planning a poem
- Choose a **subject-matter** — an experience, feeling, person, place or idea worth exploring.
- Decide the **speaker** (yourself or a persona) and the **tone** you want (playful, angry, tender, mournful).

## Choosing words (diction)
- Poems live on **diction** — precise word choice: words with **positive or negative associations** set the tone.
- Prefer **concrete, sensory words** over vague **abstract** ones; *the red dust rose* engages more than *it was dusty*.
- Use **denotation and connotation** deliberately — pick words whose overtones match your feeling.

## Using imagery and figurative language
- Build **imagery** that appeals to the senses so the reader can see, hear and feel the poem.
- Use **figurative language** — metaphor, simile, personification, symbolism — to say much in few words.
- Aim each device at an **effect**; do not decorate for its own sake.

## Shaping form
- Decide the **form**: **lines and stanzas**, their length, and whether to use **rhyme** and a regular **rhythm** or free verse.
- Use **line breaks** to control pace and emphasis; end a line on a strong word.
- Let the **form support the meaning** — a tight form for order, a loose one for freedom or disorder.

## A drafting checklist
1. **Subject** — what is the poem about?
2. **Speaker and tone** — whose voice, what attitude?
3. **Imagery** — which senses will it engage?
4. **Figures** — which comparisons carry the meaning?
5. **Form** — lines, stanzas, sound, line breaks.
6. **Revise** — cut dead words; sharpen each image.

## Common errors and misconceptions
- **Abstract vagueness** — replace vague statements with concrete images.
- **Forced rhyme** — never twist meaning just to rhyme.
- **Empty decoration** — every device must earn its place with an effect.
- **Ignoring line breaks** — where a line ends is a choice that shapes meaning.`,
      workedExample: `**Task.** Plan and draft the opening of a short poem using the checklist.

**Step 1 — subject and speaker.** Subject: a grandmother's hands. Speaker: a grandchild. Tone: tender, admiring.

**Step 2 — gather concrete images.** Not "she worked hard" but sensory detail: cracked skin, the smell of woodsmoke, palms rough as bark.

**Step 3 — choose a figure.** *"palms rough as bark"* — a **simile** linking her hands to a tree, suggesting age, strength and rootedness.

**Step 4 — draft with line breaks.**

*Her hands are maps of every harvest —*
*palms rough as bark, each line a road*
*worn smooth by water, salt and years.*

**Step 5 — check against the checklist.**
- **Subject/speaker/tone:** grandmother's hands, grandchild, tender — present.
- **Imagery:** touch (rough), sight (maps, roads) — engaged.
- **Figure:** metaphor (*hands are maps*) and simile (*rough as bark*) with clear effect.
- **Form:** three lines, no forced rhyme; line breaks fall on strong words (*harvest*, *road*).

**Conclusion:** write a poem by choosing a **subject** and **tone**, using **concrete imagery** and purposeful **figures**, and shaping **form** and **line breaks** so they support the meaning. Then revise to cut dead words.`,
      quiz: [
        { prompt: "A poem begins with choosing a", options: ["subject-matter", "price", "printer", "cover"], correctIndex: 0, explanation: "Start with what the poem is about." },
        { prompt: "Precise word choice in a poem is", options: ["diction", "rhyme", "metre", "a stanza"], correctIndex: 0, explanation: "Diction is word choice." },
        { prompt: "Poets prefer concrete, sensory words over words that are", options: ["abstract and vague", "specific", "sensory", "precise"], correctIndex: 0, explanation: "Concrete images engage the reader." },
        { prompt: "Words with positive or negative associations set the", options: ["tone", "price", "font", "margin"], correctIndex: 0, explanation: "Connotation sets tone." },
        { prompt: "Language appealing to the senses is", options: ["imagery", "rhyme", "metre", "diction"], correctIndex: 0, explanation: "Imagery engages the senses." },
        { prompt: "Figurative language lets a poet say much in", options: ["few words", "many pages", "numbers", "silence"], correctIndex: 0, explanation: "Figures are economical." },
        { prompt: "The shape of a poem in lines and stanzas is its", options: ["form", "price", "printer", "index"], correctIndex: 0, explanation: "Form is the poem's structure." },
        { prompt: "Line breaks are used to control pace and", options: ["emphasis", "price", "font", "margin"], correctIndex: 0, explanation: "Where a line ends shapes meaning." },
        { prompt: "Twisting meaning only to make words rhyme is", options: ["forced rhyme (an error)", "good practice", "required", "imagery"], correctIndex: 0, explanation: "Never distort meaning for rhyme." },
        { prompt: "Every device in a poem should earn its place with an", options: ["effect", "price", "index", "date"], correctIndex: 0, explanation: "Avoid empty decoration." },
        { prompt: "The dictionary meaning of a word is its", options: ["denotation", "connotation", "rhyme", "stanza"], correctIndex: 0, explanation: "Denotation is the literal meaning." },
        { prompt: "The implied overtones of a word are its", options: ["connotation", "denotation", "metre", "form"], correctIndex: 0, explanation: "Connotation is the implied meaning." },
        { prompt: "'The red dust rose' is stronger than 'it was dusty' because it is", options: ["concrete and sensory", "abstract", "vague", "priced"], correctIndex: 0, explanation: "Concrete images are vivid." },
        { prompt: "A tight, regular form may suit a subject of", options: ["order", "chaos", "printing", "pricing"], correctIndex: 0, explanation: "Form can support meaning." },
        { prompt: "The persona of a poem is the", options: ["speaker's voice, which may differ from the poet", "printer", "publisher", "reader"], correctIndex: 0, explanation: "A poet may write as a persona." },
        { prompt: "Revising a poem includes cutting", options: ["dead words", "all imagery", "the subject", "the speaker"], correctIndex: 0, explanation: "Trim weak words in revision." },
        { prompt: "'Palms rough as bark' is a", options: ["simile", "metaphor", "metonymy", "rhyme"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "A poem free of rhyme and regular metre is", options: ["free verse", "a sonnet", "prose", "a ballad"], correctIndex: 0, explanation: "Free verse has no fixed metre or rhyme." },
        { prompt: "The best place to end a line is on a", options: ["strong word", "weak word", "price", "number"], correctIndex: 0, explanation: "Line breaks emphasise the final word." },
        { prompt: "The drafting checklist ends with", options: ["revising", "pricing", "printing", "binding"], correctIndex: 0, explanation: "Revision sharpens the draft." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the steps of a poem-drafting checklist.", answerKey: "Choose a subject; decide speaker and tone; gather sensory imagery; choose figures of speech that carry the meaning; shape the form (lines, stanzas, sound, line breaks); revise to cut dead words and sharpen images. Award marks for the steps given (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Why do poets favour concrete words over abstract ones?", options: ["concrete sensory words are vivid and engaging", "abstract words rhyme better", "concrete words are cheaper", "abstract words are longer"], correctIndex: 0, answerKey: "Concrete sensory words engage the reader. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "How can the form of a poem support its meaning? Give one example.", answerKey: "Form (line length, stanza shape, rhyme, line breaks) can mirror content — a tight, regular form for order or calm; a broken, irregular form for conflict or disorder; a line break can emphasise a key word. Award 2 for the principle and 2 for a valid example.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how diction (word choice) creates tone in a poem.", answerKey: "Words carry connotations (positive or negative associations) as well as denotations; choosing words whose overtones match the intended feeling gives the poem its tone. Award 2 for connotation/denotation and 2 for the link to tone.", marks: 4 },
        { type: "ESSAY", prompt: "Write an original short poem (8–14 lines) on a subject of your choice, using concrete imagery, at least two figures of speech, and deliberate line breaks; then write two sentences explaining your choices of tone and form.", answerKey: "Award marks for: a clear subject and consistent tone, 5 marks; concrete sensory imagery, 5 marks; at least two purposeful figures of speech, 6 marks; deliberate form and line breaks, 4 marks; the reflective explanation of tone and form, 4 marks. Vague abstraction with no imagery should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
