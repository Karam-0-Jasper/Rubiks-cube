import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 11, Semester One, Period III: Poetry. The Grade 11 Period III CONTENTS
// list has five top-level items, each rebuilt here as its own topic:
// (1) Types of poetry (narrative, lyric, dramatic, pastoral, didactic, satiric,
// sonnet, elegy, ballad), (2) Selected and unseen poems (how to read a poem),
// (3) Use of figurative expressions, (4) Literary devices (foreshadowing,
// suspense, flashback, symbolism), (5) Writing poems. Literary concepts are
// sourced from LibreTexts (Humanities). The syllabus names set poems (e.g. Shall
// I Compare Thee to a Summer's Day, The Panic of Growing Older, Caged Bird).
// Set-poem-specific facts are NOT invented — the general skills are taught and
// the set poems are flagged as the teaching targets.
export const literatureG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Poetry",
  summary:
    "Period III of the MoE Grade 11 Literature syllabus. Its five CONTENTS items are taught as five topics: the types of poetry; reading selected and unseen poems; the use of figurative expressions; literary devices (foreshadowing, suspense, flashback, symbolism); and writing poems.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Poetry: types and terms (Rhetoric - What, Why and How) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Rhetoric_-_What_Why_and_How/13%3A_Literature/13.02%3A_Poetry_-_types_and_terms); Poetic Forms and Language (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/05%3A_Module_3%3A_The_Art_of_Poetry/05.2%3A_Poetic_Forms_and_Language)
      slug: "types-of-poetry",
      title: "Types of Poetry",
      objective:
        "By the end of the topic, learners should be able to name and distinguish the types of poetry — narrative, lyric, dramatic, pastoral, didactic, satiric, sonnet, elegy and ballad — by their form and purpose.",
      estimatedMinutes: 150,
      notes: `## Grouping poems by type

- Poems are grouped by their **purpose and form**. Three broad kinds are **narrative**, **lyric** and **dramatic**; specific **forms** include the sonnet, elegy, ballad and others.

## The broad kinds

- **Narrative poetry** — poetry that **tells a story**, with characters and a plot (the ballad and the epic are narrative).
- **Lyric poetry** — focuses on **conveying emotion** through **melody and imagery**; it expresses a single speaker's feelings rather than telling a full story.
- **Dramatic poetry** — poetry written to be **spoken by a character**; a **dramatic monologue** is "dramatic" because it is a speech to an audience and a "monologue" because no other character speaks.

## Specific forms

- **Sonnet** — a poem of **fourteen lines** with a metric pattern and a set rhyme scheme (the Shakespearean sonnet rhymes abab cdcd efef gg).
- **Elegy** — a poem of **mourning and lamentation**, usually for the dead: it mourns a dead person, lists their virtues, and seeks consolation.
- **Ballad** — a **songlike, narrative** poem with a recurring **refrain** and four-line stanzas.
- **Pastoral** — a poem idealising **rural life** and shepherds; a **pastoral elegy** contrasts the peace of country life with the cruelty that caused a death.
- **Didactic** — a poem written to **teach a lesson** or moral.
- **Satiric** — a poem that uses **humour, irony or ridicule** to criticise a person, group or vice.
- **Ode** — a **praise poem**, a form of lyric.

## Comparing the types

| Type | Purpose / form |
| --- | --- |
| Narrative | tells a story |
| Lyric | expresses emotion, melody and imagery |
| Dramatic | spoken by a character (monologue) |
| Sonnet | 14 lines, set rhyme and metre |
| Elegy | mourns the dead |
| Ballad | songlike narrative with a refrain |
| Pastoral | idealises rural life |
| Didactic | teaches a lesson |
| Satiric | ridicules to criticise |

## Common errors and misconceptions

- **Confusing lyric with narrative** — lyric expresses feeling; narrative tells a story.
- **Calling every 14-line poem a sonnet without checking the rhyme/metre** — form has rules.
- **Confusing elegy (mourning) with ode (praise)**.
- **Mistaking didactic (teaches) for satiric (ridicules to criticise)**.`,
      workedExample: `**Task.** Identify the type of each poem from a short description and justify.

**(a)** A fourteen-line poem rhyming abab cdcd efef gg that compares a loved one to a summer's day.
- **Type: sonnet.** Fourteen lines with a set rhyme scheme (the Shakespearean pattern) is the defining form.

**(b)** A songlike poem in four-line stanzas with a repeated refrain, telling the story of a doomed journey.
- **Type: ballad.** Songlike, narrative, four-line stanzas and a recurring refrain — and it tells a story (also narrative).

**(c)** A poem mourning a dead friend, praising his virtues and seeking comfort.
- **Type: elegy.** It mourns the dead, lists virtues and seeks consolation.

**(d)** A single speaker pours out love and longing in musical, image-rich lines, telling no full story.
- **Type: lyric.** It expresses emotion through melody and imagery rather than narrating events.

**(e)** A poem spoken entirely by one invented character addressing a silent listener.
- **Type: dramatic (dramatic monologue).** One character speaks to an audience; no one else talks.

**Conclusion:** classify a poem by its **purpose and form** — does it tell a story (narrative), express feeling (lyric), or speak as a character (dramatic)? Then check specific **forms**: fourteen lines with set rhyme (sonnet), mourning the dead (elegy), a songlike refrain (ballad).`,
      quiz: [
        { prompt: "Poetry that tells a story is", options: ["narrative", "lyric", "dramatic", "didactic"], correctIndex: 0, explanation: "Narrative poetry tells a story." },
        { prompt: "Poetry focused on emotion through melody and imagery is", options: ["lyric", "narrative", "dramatic", "satiric"], correctIndex: 0, explanation: "Lyric poetry conveys emotion." },
        { prompt: "A poem spoken by a single character to an audience is a", options: ["dramatic monologue", "sonnet", "elegy", "ballad"], correctIndex: 0, explanation: "Dramatic poetry is spoken by a character." },
        { prompt: "A poem of fourteen lines with a set rhyme scheme is a", options: ["sonnet", "ballad", "elegy", "ode"], correctIndex: 0, explanation: "A sonnet has fourteen lines." },
        { prompt: "A poem of mourning for the dead is an", options: ["elegy", "ode", "ballad", "epic"], correctIndex: 0, explanation: "An elegy mourns the dead." },
        { prompt: "A songlike narrative poem with a refrain and four-line stanzas is a", options: ["ballad", "sonnet", "elegy", "ode"], correctIndex: 0, explanation: "A ballad is a songlike narrative." },
        { prompt: "A poem idealising rural life and shepherds is", options: ["pastoral", "satiric", "didactic", "dramatic"], correctIndex: 0, explanation: "Pastoral poetry idealises country life." },
        { prompt: "A poem written to teach a lesson is", options: ["didactic", "lyric", "narrative", "elegy"], correctIndex: 0, explanation: "Didactic poetry teaches." },
        { prompt: "A poem using ridicule to criticise a vice is", options: ["satiric", "pastoral", "elegy", "ode"], correctIndex: 0, explanation: "Satire ridicules to criticise." },
        { prompt: "A praise poem, a form of lyric, is an", options: ["ode", "elegy", "ballad", "epic"], correctIndex: 0, explanation: "An ode praises." },
        { prompt: "The Shakespearean sonnet rhymes", options: ["abab cdcd efef gg", "aabb only", "abcabc", "no rhyme"], correctIndex: 0, explanation: "That is the Shakespearean rhyme scheme." },
        { prompt: "The ballad and the epic are kinds of", options: ["narrative poetry", "lyric poetry", "dramatic poetry", "didactic poetry"], correctIndex: 0, explanation: "They tell stories." },
        { prompt: "Lyric poetry differs from narrative because it", options: ["expresses feeling rather than telling a story", "always rhymes", "is longer", "uses no imagery"], correctIndex: 0, explanation: "Lyric expresses emotion." },
        { prompt: "A 'monologue' means", options: ["one character speaks", "many speak", "no one speaks", "a chorus sings"], correctIndex: 0, explanation: "Mono = one; a monologue is one speaker." },
        { prompt: "An elegy differs from an ode because an elegy", options: ["mourns while an ode praises", "praises while an ode mourns", "tells a story", "teaches"], correctIndex: 0, explanation: "Elegy mourns; ode praises." },
        { prompt: "A recurring refrain is a feature of the", options: ["ballad", "sonnet", "elegy", "ode"], correctIndex: 0, explanation: "Ballads repeat a refrain." },
        { prompt: "A pastoral elegy contrasts rural peace with", options: ["the cruelty that caused a death", "a market price", "a printer", "a page count"], correctIndex: 0, explanation: "That is the pastoral-elegy contrast." },
        { prompt: "Didactic poetry differs from satiric poetry because didactic", options: ["teaches while satiric ridicules", "ridicules while satiric teaches", "mourns", "praises"], correctIndex: 0, explanation: "Didactic teaches; satire ridicules." },
        { prompt: "A poem must have how many lines to be a sonnet?", options: ["fourteen", "ten", "twelve", "twenty"], correctIndex: 0, explanation: "A sonnet has fourteen lines." },
        { prompt: "To classify a poem, first ask its", options: ["purpose and form", "price", "printer", "page count"], correctIndex: 0, explanation: "Purpose and form determine the type." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish narrative, lyric and dramatic poetry.", answerKey: "Narrative poetry tells a story (characters, plot); lyric poetry expresses emotion through melody and imagery, focused on feeling rather than a full story; dramatic poetry is spoken by a character (e.g. a dramatic monologue). Award marks for each kind distinguished.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A fourteen-line poem with the rhyme scheme abab cdcd efef gg is a", options: ["Shakespearean sonnet", "ballad", "elegy", "ode"], correctIndex: 0, answerKey: "A Shakespearean sonnet. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define elegy, ballad and pastoral.", answerKey: "Elegy — a poem of mourning for the dead that lists virtues and seeks consolation; ballad — a songlike narrative poem with four-line stanzas and a recurring refrain; pastoral — a poem idealising rural life and shepherds. Award 1 mark each (max 3), +1 for accuracy.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between didactic and satiric poetry.", answerKey: "Didactic poetry is written to teach a lesson or moral; satiric poetry uses humour, irony or ridicule to criticise a person, group or vice. Award 2 per type.", marks: 4 },
        { type: "ESSAY", prompt: "Using poems you have studied, discuss at least three types of poetry, showing how each is distinguished by its purpose and form.", answerKey: "Award marks for: at least three types correctly named and described, 9 marks; distinction by purpose and form applied to examples, 9 marks; illustration from studied poems and expression, 6 marks. A list of definitions with no application should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Poetry: types and terms; Sensory Imagery (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.11%3A_Sensory_Imagery)
      slug: "reading-selected-and-unseen-poems",
      title: "Reading Selected and Unseen Poems",
      objective:
        "By the end of the topic, learners should be able to read and interpret a selected or unseen poem — its speaker, subject, imagery, form and meaning — and support an interpretation with evidence.",
      estimatedMinutes: 150,
      notes: `## Reading a poem

- A **poem** is organised into **lines and stanzas**, not sentences and paragraphs, and packs meaning through **compression, imagery and sound**.
- An **unseen poem** is one you meet for the first time in an exam; the same reading method applies as for a studied poem.

## What to look for

- **Speaker** — the **voice** of the poem (not always the poet); ask *who is speaking, to whom, and about what?*
- **Subject and situation** — what the poem is literally about.
- **Imagery** — captured through the **senses: sight, sound, taste, touch and smell**; images create an actual experience for the reader.
- **Figurative language** — simile, metaphor, personification and symbolism.
- **Form** — lines, stanzas, rhyme and rhythm; is it a sonnet, ballad or free verse?
- **Tone and mood** — the speaker's attitude and the feeling created.
- **Theme** — the underlying idea the poem conveys.

## A method for an unseen poem

1. **Read it twice** — once for the literal sense, once for the deeper meaning.
2. Identify the **speaker, subject and situation**.
3. Mark the **imagery and figurative language** and their **effect**.
4. Note the **form, tone and mood**.
5. State the **theme** and **support it with quotation**.

## Reading for whole-sentence sense

- Poems often run a sentence across several lines (**enjambment**); read for the **sense of the whole sentence**, not line by line.
- **Read aloud** to hear rhythm and meaning.

## Set text (to be supplied by the teacher)

- Apply this method to the selected set poems and to any unseen poem: identify speaker, subject, imagery, form, tone and theme, and support your reading with quotation.
- *(Specific facts about the set poems come from the poems themselves, not invented here.)*

## Common errors and misconceptions

- **Confusing the speaker with the poet** — the speaker is a voice the poet creates.
- **Reading line by line** — read for the sense of the whole sentence.
- **Paraphrasing only** — go beyond the literal to imagery, tone and theme.
- **Interpreting with no evidence** — support every claim with a quotation.`,
      workedExample: `**Task.** Interpret a short unseen poem using the method.

*"I rise before the tired sun, / my hands already worn with the day's demands; / yet in my pocket a folded dream / keeps its small, stubborn warmth."*

**Step 1 — read twice.** Literal sense: a hard-working person wakes early, tired, but carries a private hope.

**Step 2 — speaker, subject, situation.** The **speaker** is a labouring person (a voice, not necessarily the poet); the **subject** is daily toil set against private hope.

**Step 3 — imagery and figurative language.**
- "before the tired sun" — **personification** (the sun is "tired"), and **imagery** of early, exhausting labour.
- "a folded dream / keeps its small, stubborn warmth" — **metaphor** (a dream as a warm object in the pocket); the **effect** is that hope, though small and hidden, endures.

**Step 4 — form, tone, mood.** Free-verse lines with **enjambment** (sentences run over line breaks); the **tone** is weary yet determined; the **mood** is quietly hopeful.

**Step 5 — theme, with evidence.** Theme: *"hope can survive even in a life of hard labour."* Evidence: "its small, stubborn warmth" shows hope persisting against tiredness.

**Conclusion:** read an unseen poem by identifying **speaker, subject, imagery, form, tone** and **theme**, reading for **whole-sentence sense**, and supporting the interpretation with **quotation**.`,
      quiz: [
        { prompt: "A poem is organised into", options: ["lines and stanzas", "sentences and paragraphs", "acts and scenes", "chapters"], correctIndex: 0, explanation: "Poems use lines and stanzas." },
        { prompt: "The voice of a poem is the", options: ["speaker", "printer", "publisher", "editor"], correctIndex: 0, explanation: "The speaker is the poem's voice." },
        { prompt: "The speaker of a poem is", options: ["not always the poet", "always the poet", "the reader", "the printer"], correctIndex: 0, explanation: "The speaker is a voice the poet creates." },
        { prompt: "Imagery is captured through the", options: ["senses", "price", "font", "page count"], correctIndex: 0, explanation: "Imagery appeals to the senses." },
        { prompt: "An unseen poem is one you meet", options: ["for the first time", "many times before", "only at home", "never"], correctIndex: 0, explanation: "Unseen poems are new to the reader." },
        { prompt: "A sentence running across several lines is", options: ["enjambment", "a refrain", "a stanza", "a rhyme"], correctIndex: 0, explanation: "Enjambment runs a sentence over line breaks." },
        { prompt: "Reading a poem for the sense of the whole sentence beats reading", options: ["line by line", "the whole poem", "aloud", "twice"], correctIndex: 0, explanation: "Read for whole-sentence sense." },
        { prompt: "The speaker's attitude in a poem is its", options: ["tone", "price", "font", "index"], correctIndex: 0, explanation: "Tone is the speaker's attitude." },
        { prompt: "The feeling a poem creates in the reader is the", options: ["mood", "price", "printer", "cover"], correctIndex: 0, explanation: "Mood is the feeling created." },
        { prompt: "The underlying idea a poem conveys is its", options: ["theme", "price", "rhyme", "metre"], correctIndex: 0, explanation: "Theme is the underlying idea." },
        { prompt: "Imagery creates an actual experience by appealing to sight, sound, taste, touch and", options: ["smell", "price", "date", "font"], correctIndex: 0, explanation: "The five senses include smell." },
        { prompt: "The first step for an unseen poem is to", options: ["read it twice", "count the pages", "check the price", "name the printer"], correctIndex: 0, explanation: "Read twice — literal then deeper." },
        { prompt: "An interpretation must be supported with", options: ["quotation", "a price", "a cover", "a date"], correctIndex: 0, explanation: "Support claims with evidence." },
        { prompt: "Confusing the speaker with the poet is a", options: ["reading error", "requirement", "good habit", "form of rhyme"], correctIndex: 0, explanation: "The speaker is a created voice." },
        { prompt: "Reading a poem aloud helps you hear its", options: ["rhythm and meaning", "price", "printer", "page numbers"], correctIndex: 0, explanation: "Reading aloud reveals rhythm and sense." },
        { prompt: "Form includes lines, stanzas, rhyme and", options: ["rhythm", "price", "font", "index"], correctIndex: 0, explanation: "Form covers rhyme and rhythm." },
        { prompt: "Paraphrasing only is weak because it stops at the", options: ["literal meaning", "imagery", "theme", "tone"], correctIndex: 0, explanation: "Go beyond the literal to imagery, tone and theme." },
        { prompt: "'Who is speaking, to whom, about what?' identifies the", options: ["speaker, subject and situation", "price", "printer", "cover"], correctIndex: 0, explanation: "These questions locate the speaker and subject." },
        { prompt: "A poem packs meaning through compression, imagery and", options: ["sound", "price", "font", "index"], correctIndex: 0, explanation: "Sound is central to poetry." },
        { prompt: "Free verse is a poem with", options: ["no fixed rhyme or metre", "fourteen lines", "a refrain", "a mourning subject"], correctIndex: 0, explanation: "Free verse has no fixed form." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List five things to look for when reading a poem.", answerKey: "Any five of: speaker (voice); subject/situation; imagery; figurative language; form (lines, stanzas, rhyme, rhythm); tone; mood; theme. Award 1 mark each (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "The voice that speaks a poem is the", options: ["speaker (not always the poet)", "printer", "publisher", "reader"], correctIndex: 0, answerKey: "The speaker, a voice the poet creates. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give the five-step method for reading an unseen poem.", answerKey: "Read it twice (literal, then deeper); identify speaker, subject and situation; mark imagery and figurative language and their effect; note form, tone and mood; state the theme and support it with quotation. Award marks for the steps.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What is enjambment, and how should it change the way you read a poem?", answerKey: "Enjambment is a sentence running across a line break; it means you should read for the sense of the whole sentence rather than stopping at the end of each line. Award 2 for the definition and 2 for the reading strategy.", marks: 4 },
        { type: "ESSAY", prompt: "Interpret a selected or unseen poem you have studied, discussing its speaker, imagery, form and theme, and supporting your reading with quotation.", answerKey: "Award marks for: speaker and subject identified, 4 marks; imagery and figurative language analysed with effect, 8 marks; form, tone and mood, 5 marks; theme stated and supported with quotation, 5 marks; expression, 2 marks. Paraphrase only, with no analysis, should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "figurative-expressions-in-poetry",
      title: "Use of Figurative Expressions",
      objective:
        "By the end of the topic, learners should be able to identify figurative expressions in a poem and explain their effect using the name–quote–effect method.",
      estimatedMinutes: 150,
      notes: `## Figurative expressions in poetry

- **Figurative language** *"uses words or expressions not meant to be taken literally"* — it means **more than the literal words**.
- Poetry is especially **dense** with figures of speech, conveying much meaning in few words.

## The main figures to recognise

- **Metaphor** — *"a direct comparison between two unlike things"* (e.g. "hope is the thing with feathers").
- **Simile** — *"a comparison that uses like or as"*.
- **Personification** — *"human characteristics being applied to non-human things"*.
- **Metonymy** — *"when one thing is represented by another thing associated with it"*.
- **Synecdoche** — *"when a part symbolizes the whole, or the whole symbolizes the part"*.
- **Hyperbole** — deliberate **exaggeration** for effect.
- **Imagery** — descriptive language appealing to the **senses**.
- **Symbolism** — an object standing for a larger, abstract idea.

## The name–quote–effect method

1. **Name** the figure of speech.
2. **Quote** the words from the poem.
3. **Explain the effect** — what image or feeling it creates and how it serves the meaning.

## Why effect matters in a poem

- A poem's meaning lives in its **figures and images**; recognising a device is only half the skill.
- The marks — and the meaning — come from explaining **why** the poet chose it and **what it does** to the reader.

## Common errors and misconceptions

- **Device-spotting** — always complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Reading a symbol too literally** — a symbol stands for a larger idea.
- **Forcing a single feeling** — a poem may hold **mixed feelings** at once.`,
      workedExample: `**Task.** Analyse two figurative expressions from a poem using name–quote–effect.

*"My caged heart beats against its bars, / and freedom is a distant, singing bird."*

**Expression 1 — "My caged heart beats against its bars"**
1. **Name:** **metaphor** (the heart is a caged creature), with **imagery** of confinement.
2. **Quote:** "My caged heart beats against its bars."
3. **Effect:** the metaphor makes the speaker's longing feel like an animal trapped and struggling, so the reader senses a **desperate, restless yearning** to be free.

**Expression 2 — "freedom is a distant, singing bird"**
1. **Name:** **metaphor / symbolism** (freedom pictured as a bird; the bird symbolises liberty).
2. **Quote:** "freedom is a distant, singing bird."
3. **Effect:** the image of a **distant** bird makes freedom feel beautiful yet out of reach, and the "singing" adds hope — capturing **mixed feelings** of longing and faint optimism.

**Conclusion:** name the device, quote it, and explain its **effect**. Here the caged-heart metaphor conveys trapped yearning and the bird symbol conveys distant, hopeful freedom. Always finish with the effect, and allow for **mixed feelings**.`,
      quiz: [
        { prompt: "Figurative language means", options: ["more than the literal words", "exactly the literal words", "nothing", "only numbers"], correctIndex: 0, explanation: "Figures carry non-literal meaning." },
        { prompt: "Poetry is especially dense with", options: ["figures of speech", "prices", "page numbers", "footnotes"], correctIndex: 0, explanation: "Poetry packs meaning through figures." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison of two unlike things is a", options: ["metaphor", "simile", "metonymy", "repetition"], correctIndex: 0, explanation: "A metaphor is direct." },
        { prompt: "Human qualities given to non-human things is", options: ["personification", "hyperbole", "simile", "synecdoche"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "An object standing for a larger idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "Deliberate exaggeration is", options: ["hyperbole", "simile", "metonymy", "imagery"], correctIndex: 0, explanation: "Hyperbole exaggerates." },
        { prompt: "Descriptive language appealing to the senses is", options: ["imagery", "metre", "rhyme", "a stanza"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "'One thing represented by another associated with it' is", options: ["metonymy", "simile", "hyperbole", "imagery"], correctIndex: 0, explanation: "That defines metonymy." },
        { prompt: "The name–quote–effect method ends with", options: ["explaining the effect", "counting lines", "translating", "ignoring meaning"], correctIndex: 0, explanation: "The effect step earns the marks." },
        { prompt: "'Hope is the thing with feathers' is a", options: ["metaphor", "simile", "hyperbole", "synecdoche"], correctIndex: 0, explanation: "It compares hope to a bird directly." },
        { prompt: "'As cold as winter' is a", options: ["simile", "metaphor", "personification", "metonymy"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is left out." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is direct." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "A poem may hold", options: ["mixed feelings at once", "no feelings", "only one word", "only a price"], correctIndex: 0, explanation: "Poems can carry mixed feelings." },
        { prompt: "A part standing for the whole is", options: ["synecdoche", "metaphor", "hyperbole", "irony"], correctIndex: 0, explanation: "Synecdoche uses a part for the whole." },
        { prompt: "The effect step asks what the words make you", options: ["see, hear or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the reader's experience." },
        { prompt: "A poem's meaning lives largely in its", options: ["figures and images", "price", "font", "index"], correctIndex: 0, explanation: "Figures and images carry meaning." },
        { prompt: "Recognising a device is only", options: ["half the skill", "the whole skill", "unnecessary", "the effect"], correctIndex: 0, explanation: "You must also explain the effect." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define metaphor, personification and symbolism, giving one example of each.", answerKey: "Metaphor — a direct comparison between two unlike things (e.g. 'hope is a bird'); personification — human qualities applied to non-human things (e.g. 'the wind wept'); symbolism — an object standing for a larger idea (e.g. a caged bird for lost freedom). Award 1 per device with an example (max 3), +1 for accuracy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The stars blinked down at the sleeping town' uses", options: ["personification", "simile", "metonymy", "synecdoche"], correctIndex: 0, answerKey: "Stars given the human act of blinking — personification. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'Grief is a heavy coat I cannot take off.'", answerKey: "Name: metaphor (grief compared to a heavy coat). Quote: 'a heavy coat I cannot take off.' Effect: makes grief feel like a constant, burdensome weight the speaker carries everywhere and cannot escape, conveying inescapable sorrow. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why is completing the 'effect' step essential when analysing a poem's figurative language?", answerKey: "Because a poem's meaning lives in its figures and images; naming a device only shows recognition, while the effect step shows understanding — what image or feeling the figure creates and how it serves the poem's meaning, which is where the marks lie. Award marks for the reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Choose a poem you have studied and discuss how the poet uses at least three figurative expressions to convey meaning or feeling, explaining the effect of each with quotation.", answerKey: "Award marks for: at least three figures correctly identified and quoted, 9 marks; explanation of the effect of each, 12 marks; aptness of quotation and expression, 3 marks. Device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary); LiteraryDevices.net — Foreshadowing, Suspense, Dramatic Irony (https://literarydevices.net/foreshadowing/)
      slug: "literary-devices-poetry",
      title: "Literary Devices: Foreshadowing, Suspense, Flashback, Symbolism",
      objective:
        "By the end of the topic, learners should be able to identify and explain the literary devices of foreshadowing, suspense, flashback and symbolism, and analyse their effect in a text.",
      estimatedMinutes: 150,
      notes: `## Literary devices

- **Literary devices** are techniques writers use to shape meaning and effect beyond the literal words. This topic covers four the syllabus names.

## Foreshadowing

- **Foreshadowing** is a device in which an author gives an **advance hint of events that will occur later** in the story.
- It **builds suspense** and makes a story more satisfying, so that later events feel prepared for.

## Suspense

- **Suspense** is the feeling of **anticipation and uncertainty**, created by **delaying information** or creating a **sense of danger**.
- Writers build suspense by withholding an outcome, raising a threat, or slowing a crucial moment.

## Flashback

- **Flashback** interrupts the present action to show an **earlier event**.
- It provides **crucial backstory** or reveals past events, letting the reader understand characters' **motivations and actions** more deeply.

## Symbolism

- **Symbolism** is the use of **objects, characters or events to represent abstract ideas**.
- A symbol means both itself and something larger (a caged bird = lost freedom; a river = the passage of time).

## How the devices work together

- **Foreshadowing** plants a hint → **suspense** grows as the reader waits → a **flashback** may explain why a character acts → a **symbol** deepens the meaning of it all.

## Analysing a device

Use **name → quote/point → effect**:
1. **Name** the device.
2. **Point** to where it appears.
3. **Explain the effect** — what it adds to meaning, feeling or tension.

## Set text (to be supplied by the teacher)

- Identify these devices in the selected poems and prose and explain their effect.
- *(Specific instances come from the set texts themselves, not invented here.)*

## Common errors and misconceptions

- **Confusing foreshadowing with a flashback** — foreshadowing hints **forward**; a flashback looks **backward**.
- **Naming a device with no effect** — always explain what it does.
- **Reading a symbol too literally** — a symbol stands for a larger idea.
- **Confusing suspense (a feeling) with the events that cause it**.`,
      workedExample: `**Task.** Identify and explain the literary devices at work in a short passage.

*"She should have known — the cracked mirror on the wall had warned her weeks ago. Now, waiting in the dark for the knock that might never come, she remembered the night it all began, years back, when a single promise was made and broken."*

**Device 1 — foreshadowing.** "the cracked mirror... had warned her weeks ago" is **foreshadowing**: an **advance hint** of trouble to come. **Effect:** it makes later events feel prepared for and builds unease.

**Device 2 — suspense.** "waiting in the dark for the knock that might never come" creates **suspense** — **anticipation and uncertainty** through delayed information and a sense of danger. **Effect:** the reader shares her tense waiting.

**Device 3 — flashback.** "she remembered the night it all began, years back" is a **flashback** to an earlier event. **Effect:** it supplies **backstory** — the broken promise — explaining her present fear.

**Device 4 — symbolism.** The **cracked mirror** works as a **symbol** of a broken relationship or a fractured life. **Effect:** it means more than a household object; it deepens the sense of damage.

**Conclusion:** name each device, point to it, and explain its **effect** — foreshadowing hints forward, suspense makes the reader wait, flashback fills in the past, and a symbol carries a larger idea. Never name a device without its effect.`,
      quiz: [
        { prompt: "An advance hint of events to come is", options: ["foreshadowing", "flashback", "suspense", "symbolism"], correctIndex: 0, explanation: "Foreshadowing hints at future events." },
        { prompt: "The feeling of anticipation and uncertainty is", options: ["suspense", "flashback", "symbolism", "irony"], correctIndex: 0, explanation: "Suspense is anticipation and uncertainty." },
        { prompt: "An interruption showing an earlier event is a", options: ["flashback", "foreshadowing", "climax", "refrain"], correctIndex: 0, explanation: "A flashback shows the past." },
        { prompt: "Using an object to represent an abstract idea is", options: ["symbolism", "suspense", "flashback", "hyperbole"], correctIndex: 0, explanation: "Symbolism uses objects for ideas." },
        { prompt: "Foreshadowing helps to build", options: ["suspense", "the price", "the font", "the index"], correctIndex: 0, explanation: "Foreshadowing builds suspense." },
        { prompt: "Suspense is created by delaying information or creating a sense of", options: ["danger", "price", "rhyme", "metre"], correctIndex: 0, explanation: "Delayed information and danger build suspense." },
        { prompt: "A flashback provides crucial", options: ["backstory", "pricing", "printing", "page numbers"], correctIndex: 0, explanation: "Flashback supplies backstory." },
        { prompt: "A symbol means both itself and", options: ["something larger", "nothing", "a price", "a date"], correctIndex: 0, explanation: "A symbol carries a larger idea." },
        { prompt: "Foreshadowing hints forward; a flashback looks", options: ["backward", "forward", "sideways", "nowhere"], correctIndex: 0, explanation: "Flashbacks look to the past." },
        { prompt: "A caged bird can be a symbol of", options: ["lost freedom", "a price", "a printer", "a font"], correctIndex: 0, explanation: "A caged bird symbolises lost freedom." },
        { prompt: "Flashback deepens understanding of characters'", options: ["motivations", "prices", "fonts", "page counts"], correctIndex: 0, explanation: "Flashback reveals motivations." },
        { prompt: "Naming a device with no effect is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Always explain the effect." },
        { prompt: "Suspense is a feeling; it should not be confused with the", options: ["events that cause it", "price", "font", "cover"], correctIndex: 0, explanation: "Distinguish the feeling from its causes." },
        { prompt: "A cracked mirror in a story of a broken bond works as", options: ["symbolism", "a flashback", "suspense", "foreshadowing only"], correctIndex: 0, explanation: "The object symbolises the broken bond." },
        { prompt: "To analyse a device, name it, point to it and explain its", options: ["effect", "price", "font", "date"], correctIndex: 0, explanation: "Name → point → effect." },
        { prompt: "'Waiting for a knock that might never come' creates", options: ["suspense", "a flashback", "a symbol", "a refrain"], correctIndex: 0, explanation: "Delayed outcome builds suspense." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "'She remembered the night it all began, years back' is a", options: ["flashback", "foreshadowing", "symbol", "refrain"], correctIndex: 0, explanation: "It shows an earlier event." },
        { prompt: "A hint that later events feel prepared for is the work of", options: ["foreshadowing", "suspense", "symbolism", "flashback"], correctIndex: 0, explanation: "Foreshadowing prepares later events." },
        { prompt: "Literary devices shape meaning beyond the", options: ["literal words", "price", "font", "cover"], correctIndex: 0, explanation: "Devices work beyond the literal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define foreshadowing, suspense, flashback and symbolism.", answerKey: "Foreshadowing — an advance hint of events that will occur later; suspense — the feeling of anticipation and uncertainty created by delaying information or a sense of danger; flashback — an interruption showing an earlier event, giving backstory; symbolism — using objects, characters or events to represent abstract ideas. Award 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A device that gives an advance hint of what will happen later is", options: ["foreshadowing", "flashback", "symbolism", "suspense"], correctIndex: 0, answerKey: "Foreshadowing. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between foreshadowing and flashback.", answerKey: "Foreshadowing hints forward at events still to come; a flashback looks backward, interrupting the present to show an earlier event and provide backstory. Award 2 per device.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How does foreshadowing relate to suspense?", answerKey: "Foreshadowing plants an advance hint of trouble or events to come, which builds suspense — the reader's anticipation and uncertainty grows as they wait to see the hinted event unfold. Award marks for the link.", marks: 3 },
        { type: "ESSAY", prompt: "Choose a text you have studied and discuss how the writer uses at least three of these devices (foreshadowing, suspense, flashback, symbolism), explaining the effect of each with reference to the text.", answerKey: "Award marks for: at least three devices correctly identified with reference, 9 marks; explanation of the effect of each on meaning, feeling or tension, 12 marks; textual support and expression, 3 marks. Naming devices without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Imagery in Poetry / Form in Poetry (Introduction to Creative Writing, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Introduction_to_Creative_Writing_(Lumen)/04%3A_Writing_Poetry/04.10%3A_Lesson_11%3A_Imagery_in_Poetry)
      slug: "writing-poems",
      title: "Writing Poems",
      objective:
        "By the end of the topic, learners should be able to write a short poem using concrete sensory imagery, figurative language and an appropriate form.",
      estimatedMinutes: 150,
      notes: `## Writing a poem

- A poem communicates through **compressed language, imagery, sound and figures of speech**, arranged in **lines and stanzas**.
- Decide on a **subject**, a **speaker**, a **feeling** to convey, and a **form**.

## Use concrete imagery

- **Imagery** is captured through the **senses: sight, sound, taste, touch and smell**; it triggers the senses to create an **actual experience** for the reader.
- To be a strong image-maker, **stimulate the senses through significant, concrete detail** rather than **telling with abstract words**.
- **Show, don't tell:** instead of "I was sad," give a concrete image ("the cold tea sat untouched all morning").

## Use figurative language

- Enrich the poem with **simile, metaphor, personification** and **symbolism** to say more than the literal words.
- Choose figures that fit the feeling; explain nothing — let the image carry the meaning.

## Choose a form

- **Form** is the **shape of a poem — its layout on the page**; specific forms have rules.
- A **sonnet** has **fourteen lines** with a set rhyme and rhythm (Shakespearean: abab cdcd efef gg in a 4+4+4+2 structure).
- **Free verse** has **no fixed rhyme or metre**; the poet shapes lines by sense and sound.

## Sound

- Use **rhythm**, and optionally **rhyme**, **alliteration** and **repetition**, to give the poem music.
- **Line breaks** control pace and emphasis; end a line to stress its last word.

## A short checklist

1. **Subject and feeling** — what is the poem about, and what should the reader feel?
2. **Concrete imagery** — appeal to the senses; show, don't tell.
3. **Figurative language** — at least one apt simile, metaphor or symbol.
4. **Form** — sonnet, free verse or another shape.
5. **Sound and line breaks** — rhythm and emphasis.

## Common errors and misconceptions

- **Telling with abstract words** ("I felt joy") instead of **concrete images**.
- **Forcing rhyme** so the sense suffers — sense comes first.
- **No sensory detail** — imagery is what makes a poem vivid.
- **Ignoring form** — even free verse shapes its lines deliberately.`,
      workedExample: `**Task.** Plan and draft a short poem using concrete imagery and figurative language.

**Step 1 — plan (checklist).**
- **Subject and feeling:** a grandmother's kitchen; the feeling is warmth and loss.
- **Imagery:** appeal to smell, sight, touch.
- **Figurative language:** at least one metaphor or simile.
- **Form:** free verse, short lines.

**Step 2 — draft.**

*The kettle still hums her name,*
*steam curling like a slow goodbye.*
*Flour dusts the table where her hands*
*once moved, quick as small birds.*
*I hold the cold cup she never filled*
*and taste the morning she left behind.*

**Step 3 — check against the checklist.**
- **Concrete imagery:** the kettle's hum, steam, flour, the cold cup — **sight, sound, touch** (show, don't tell).
- **Figurative language:** "steam curling like a slow goodbye" (**simile**); "quick as small birds" (**simile** for her hands); the kettle "hums her name" (**personification**).
- **Form:** free verse; line breaks stress "her name," "goodbye," "birds."
- **Feeling:** warmth and loss emerge from the images, not from stated words.

**Conclusion:** write a poem by choosing a **subject and feeling**, building **concrete sensory imagery** (show, don't tell), adding **apt figurative language**, and shaping it in a deliberate **form** with attention to **sound and line breaks**.`,
      quiz: [
        { prompt: "A poem is arranged in", options: ["lines and stanzas", "sentences and paragraphs", "acts and scenes", "chapters"], correctIndex: 0, explanation: "Poems use lines and stanzas." },
        { prompt: "Imagery is captured through the", options: ["senses", "price", "font", "index"], correctIndex: 0, explanation: "Imagery appeals to the senses." },
        { prompt: "Strong imagery uses significant, concrete", options: ["detail", "prices", "fonts", "page numbers"], correctIndex: 0, explanation: "Concrete detail makes strong images." },
        { prompt: "'Show, don't tell' means replacing abstract words with", options: ["concrete images", "prices", "numbers", "titles"], correctIndex: 0, explanation: "Show through concrete images." },
        { prompt: "The shape of a poem — its layout on the page — is its", options: ["form", "price", "font", "index"], correctIndex: 0, explanation: "Form is the shape." },
        { prompt: "A sonnet has how many lines?", options: ["fourteen", "ten", "twelve", "twenty"], correctIndex: 0, explanation: "A sonnet has fourteen lines." },
        { prompt: "A poem with no fixed rhyme or metre is", options: ["free verse", "a sonnet", "a ballad", "an elegy"], correctIndex: 0, explanation: "Free verse has no fixed form." },
        { prompt: "The Shakespearean sonnet uses the structure", options: ["4+4+4+2", "5+5+4", "7+7", "2+2+2+2"], correctIndex: 0, explanation: "Three quatrains and a couplet." },
        { prompt: "Line breaks control pace and", options: ["emphasis", "price", "font", "page count"], correctIndex: 0, explanation: "Line breaks stress and pace." },
        { prompt: "Figures of speech let a poem say", options: ["more than the literal words", "less", "nothing", "only numbers"], correctIndex: 0, explanation: "Figures carry extra meaning." },
        { prompt: "Telling with abstract words like 'I felt joy' is", options: ["weaker than a concrete image", "the best method", "required", "a form of imagery"], correctIndex: 0, explanation: "Concrete images beat abstract telling." },
        { prompt: "Forcing rhyme is a fault when it harms the", options: ["sense", "price", "font", "cover"], correctIndex: 0, explanation: "Sense comes first." },
        { prompt: "Imagery triggers the senses to create an", options: ["actual experience", "invoice", "index", "price"], correctIndex: 0, explanation: "Imagery creates an experience." },
        { prompt: "A poem's music comes from rhythm, rhyme, alliteration and", options: ["repetition", "pricing", "printing", "pagination"], correctIndex: 0, explanation: "These devices give sound." },
        { prompt: "Even free verse shapes its lines", options: ["deliberately", "at random", "by price", "by page count"], correctIndex: 0, explanation: "Free verse is deliberate, not careless." },
        { prompt: "The checklist starts with subject and", options: ["feeling", "price", "font", "index"], correctIndex: 0, explanation: "Begin with subject and feeling." },
        { prompt: "'Steam curling like a slow goodbye' is a", options: ["simile", "metaphor", "refrain", "stanza"], correctIndex: 0, explanation: "It compares using 'like'." },
        { prompt: "'The kettle hums her name' is", options: ["personification", "a simile", "a refrain", "an elegy"], correctIndex: 0, explanation: "The kettle is given a human act." },
        { prompt: "The senses imagery appeals to include sight, sound, taste, touch and", options: ["smell", "price", "date", "font"], correctIndex: 0, explanation: "Smell is the fifth sense." },
        { prompt: "The feeling of a poem should emerge from", options: ["the images", "the price", "the font", "the page number"], correctIndex: 0, explanation: "Let images carry the feeling." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is imagery, and what is the difference between 'showing' and 'telling' in a poem?", answerKey: "Imagery is descriptive language that appeals to the senses (sight, sound, taste, touch, smell) to create an experience for the reader. 'Telling' states a feeling abstractly ('I was sad'); 'showing' gives a concrete sensory image that lets the reader feel it ('the cold tea sat untouched'). Award 2 for imagery and 2 for the show/tell distinction.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A Shakespearean sonnet has", options: ["fourteen lines with a set rhyme and rhythm", "no fixed form", "a mourning subject", "a refrain"], correctIndex: 0, answerKey: "Fourteen lines with set rhyme/rhythm. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the five items on the poem-writing checklist.", answerKey: "Subject and feeling; concrete imagery (show, don't tell); figurative language (an apt simile/metaphor/symbol); form (sonnet, free verse or other); sound and line breaks (rhythm and emphasis). Award 1 mark each (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Why should sense come before rhyme when writing a poem?", answerKey: "Because forcing a rhyme can distort or weaken the meaning; the poem's sense and image must lead, with rhyme serving the meaning rather than the meaning being twisted to fit a rhyme. Award marks for the reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Write a short poem (about 8–14 lines) on a subject of your choice, using concrete sensory imagery, at least two figures of speech, and a deliberate form. Then briefly note the form and one image you used.", answerKey: "Award marks for: concrete sensory imagery (show, don't tell), 8 marks; at least two apt figures of speech, 6 marks; a deliberate form and use of line breaks, 5 marks; a clear feeling/subject conveyed, 3 marks; the brief note on form and image, 2 marks. Abstract telling with no imagery should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
