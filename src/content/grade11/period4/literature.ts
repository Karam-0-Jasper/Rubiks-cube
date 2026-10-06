import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 11, Semester Two, Period IV: Non-African Drama. The Grade 11 Period IV
// CONTENTS list has seven top-level items, each rebuilt here as its own topic:
// (1) Non-African drama and its elements, (2) Use of figurative language,
// (3) Exposition/plot/conflict/climax/resolution, theme, tragedy, comedy,
// (4) Literary devices (irony, flashback, foreshadowing, dialogue, tragic hero),
// (5) Cultural values, practices and implications, (6) Plot (rising, climax,
// falling actions), (7) Constructing drama. Literary concepts are sourced from
// LibreTexts (Humanities). The syllabus names set texts (The Castle of Otranto
// by Horace Walpole; The Proud King by William Morris). Set-text-specific facts
// are NOT invented — the general skills are taught and the set texts are flagged.
export const literatureG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Non-African Drama",
  summary:
    "Period IV of the MoE Grade 11 Literature syllabus. Its seven CONTENTS items are taught as seven topics: non-African drama and its elements; figurative language; exposition, theme, tragedy and comedy; literary devices (irony, flashback, foreshadowing, dialogue, tragic hero); cultural values and implications; the plot diagram; and constructing drama.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Elements of Drama (Writing and Critical Thinking Through Literature, Ringo and Kashyap) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama)
      slug: "non-african-drama-and-elements",
      title: "Non-African Drama and Its Elements",
      objective:
        "By the end of the topic, learners should be able to describe non-African drama as a performance text and identify its elements — dialogue, action, character, acts and scenes, and stage directions.",
      estimatedMinutes: 150,
      notes: `## What non-African drama is

- **Drama** is **literature written to be performed**, told through **dialogue and action** and organised into **acts and scenes**.
- **Non-African drama** is drama by writers from outside Africa; the syllabus names works such as *The Castle of Otranto* (Horace Walpole) and *The Proud King* (William Morris).

## The elements of drama

- **Dialogue** — the **words the characters speak**; a play is written almost entirely through it.
- **Action** — the **physical movements** of the characters.
- **Stage directions** — instructions for what happens on stage: entrances, exits, movement, scenery, sounds and props; usually **italicised and separate** from the dialogue.
- **Character** — the people in the play; the **protagonist** (main character) and **antagonist** (opponent).
- **Acts and scenes** — the **units** into which a play is divided; a scene fixes a place and moment.
- **Plot, conflict and theme** — the story's shape, its central struggle, and its underlying idea.

## Reading a play differently from a novel

- A play has **no narrative paragraphs** describing how a character feels; meaning comes from **dialogue and stage directions**.
- **Read stage directions as part of the text** — they carry movement, mood and meaning the dialogue does not.
- **Theatre happens live** — imagine the scene in performance as you read.

## Set text (to be supplied by the teacher)

- Apply these elements to the assigned non-African play: follow its dialogue and stage directions, name its characters and their roles, and trace its acts and scenes.
- *(Specific facts about the set plays come from the plays themselves, not invented here.)*

## Common errors and misconceptions

- **Reading a play like a novel** — there are no descriptive paragraphs; meaning comes from dialogue and stage directions.
- **Skipping stage directions** — they carry entrances, exits, movement and mood.
- **Confusing an act with a scene** — an act contains scenes; a scene fixes one place and moment.
- **Confusing dialogue with action** — dialogue is spoken words; action is physical movement.`,
      workedExample: `**Task.** Read a short dramatic extract for its elements.

*Act 1, Scene 2. A cold stone hall at night. LORD MARCUS paces before a shuttered window. A knock. He freezes.*

**LORD MARCUS:** Who comes to my house at this hour?

*The door opens slowly. A CLOAKED STRANGER steps in, saying nothing.*

**Step 1 — identify the unit.** "Act 1, Scene 2" shows the play's division into **acts and scenes**; this scene fixes one place (a stone hall) and moment (night).

**Step 2 — read the stage directions.** "A cold stone hall at night," "paces before a shuttered window," "He freezes," "The door opens slowly" are **stage directions** — they set the scene, give **action** and build mood. Read them as part of the text.

**Step 3 — read the dialogue.** "Who comes to my house at this hour?" is **dialogue** — the words Lord Marcus speaks; it reveals his unease.

**Step 4 — note character.** LORD MARCUS is a **character** (here the protagonist); the CLOAKED STRANGER is set against him, a possible **antagonist**.

**Step 5 — imagine it performed.** Theatre is live: picture the pacing, the freeze, the slow door — the meaning is in the performance, not in narration.

**Conclusion:** a play is a **performance text** made of **dialogue, action and stage directions**, divided into **acts and scenes**, with **characters** in conflict. Read the stage directions as carefully as the dialogue.`,
      quiz: [
        { prompt: "Drama is literature written to be", options: ["performed", "read silently only", "sung", "printed in newspapers"], correctIndex: 0, explanation: "Plays are written to be performed." },
        { prompt: "A play is told through dialogue and", options: ["action", "narration only", "rhyme only", "song only"], correctIndex: 0, explanation: "Dialogue and action tell the play." },
        { prompt: "A play is organised into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units." },
        { prompt: "The words characters speak are the", options: ["dialogue", "stage directions", "props", "programme"], correctIndex: 0, explanation: "Dialogue is the spoken words." },
        { prompt: "The physical movements of the characters are the", options: ["action", "dialogue", "theme", "props"], correctIndex: 0, explanation: "Action is physical movement." },
        { prompt: "Instructions for entrances, scenery and props are", options: ["stage directions", "dialogue", "themes", "climaxes"], correctIndex: 0, explanation: "Stage directions give the mechanics." },
        { prompt: "Stage directions are usually", options: ["italicised and separate from dialogue", "sung", "hidden", "spoken by the audience"], correctIndex: 0, explanation: "They are set apart from dialogue." },
        { prompt: "A play has no", options: ["narrative paragraphs", "characters", "dialogue", "acts"], correctIndex: 0, explanation: "Plays lack narrative description paragraphs." },
        { prompt: "Stage directions should be", options: ["read as part of the text", "skipped", "read only by actors", "ignored in exams"], correctIndex: 0, explanation: "They carry meaning the dialogue does not." },
        { prompt: "The main character of a play is the", options: ["protagonist", "antagonist", "narrator", "author"], correctIndex: 0, explanation: "The protagonist is the main character." },
        { prompt: "The opponent set against the protagonist is the", options: ["antagonist", "protagonist", "chorus", "editor"], correctIndex: 0, explanation: "The antagonist opposes the protagonist." },
        { prompt: "A scene fixes a", options: ["place and moment", "price", "printer", "page number"], correctIndex: 0, explanation: "A scene fixes one place and moment." },
        { prompt: "Non-African drama is drama by writers from", options: ["outside Africa", "only Liberia", "only poets", "only novelists"], correctIndex: 0, explanation: "Non-African drama comes from outside Africa." },
        { prompt: "Theatre, unlike a novel, happens", options: ["live", "only once ever", "on paper only", "in silence"], correctIndex: 0, explanation: "Theatre is a live medium." },
        { prompt: "Reading a play like a novel is a mistake because a play has no", options: ["narrative description paragraphs", "characters", "dialogue", "acts"], correctIndex: 0, explanation: "Meaning comes from dialogue and stage directions." },
        { prompt: "An act contains", options: ["scenes", "stanzas", "chapters", "verses"], correctIndex: 0, explanation: "Acts are divided into scenes." },
        { prompt: "Dialogue differs from action because dialogue is", options: ["spoken words", "physical movement", "scenery", "props"], correctIndex: 0, explanation: "Dialogue is speech; action is movement." },
        { prompt: "Meaning in a play comes from dialogue and", options: ["stage directions", "narration", "the index", "footnotes"], correctIndex: 0, explanation: "Dialogue and stage directions carry meaning." },
        { prompt: "Skipping stage directions loses", options: ["movement and mood", "the price", "the printer", "the index"], correctIndex: 0, explanation: "Stage directions carry movement and mood." },
        { prompt: "The underlying idea of a play is its", options: ["theme", "price", "cover", "font"], correctIndex: 0, explanation: "Theme is the underlying idea." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four elements of drama.", answerKey: "Any four of: dialogue (spoken words); action (physical movement); stage directions (entrances, exits, scenery, props); character (protagonist/antagonist); acts and scenes; plot; conflict; theme. Award 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is TRUE of a play compared to a novel?", options: ["It has no narrative paragraphs; meaning comes from dialogue and stage directions", "It is never performed", "It has no characters", "It uses only rhyme"], correctIndex: 0, answerKey: "Plays lack narrative paragraphs. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the role of stage directions and why they must be read as part of the text.", answerKey: "Stage directions are instructions for what happens on stage — entrances, exits, movement, scenery, sounds, props — usually italicised and separate from the dialogue. They must be read because they carry action, mood and meaning the dialogue does not. Award 2 for the role and 2 for the reason.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish an act from a scene, and dialogue from action.", answerKey: "An act is a large division of a play that contains scenes; a scene fixes one place and moment. Dialogue is the words characters speak; action is their physical movement. Award 2 for the act/scene distinction and 2 for dialogue/action.", marks: 4 },
        { type: "ESSAY", prompt: "Using a non-African play you have studied, explain how it works as a performance text, discussing its use of dialogue, action, stage directions, characters and its division into acts and scenes.", answerKey: "Award marks for: play read as a performance text (dialogue + stage directions), 6 marks; characters and their roles, 6 marks; acts and scenes/structure, 5 marks; action and stage directions discussed, 5 marks; textual reference and expression, 2 marks. A plot summary should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "figurative-language-in-drama",
      title: "Use of Figurative Language",
      objective:
        "By the end of the topic, learners should be able to identify figurative language in a play's dialogue and explain its effect using the name–quote–effect method.",
      estimatedMinutes: 150,
      notes: `## Figurative language in drama

- **Figurative language** *"uses words or expressions not meant to be taken literally"* — it means **more than the literal words**.
- In a play, figures of speech live in the **dialogue** — in what characters say — revealing feeling, character and theme.

## The main figures to recognise

- **Metaphor** — *"a direct comparison between two unlike things"*.
- **Simile** — *"a comparison that uses like or as"*.
- **Personification** — *"human characteristics being applied to non-human things"*.
- **Metonymy** — *"when one thing is represented by another thing associated with it"* (e.g. "the crown" for the king).
- **Hyperbole** — deliberate **exaggeration** for effect.
- **Imagery** — descriptive language appealing to the senses.
- **Symbolism** — an object standing for a larger idea.

## The name–quote–effect method

1. **Name** the figure of speech.
2. **Quote** the character's words.
3. **Explain the effect** — what image or feeling it creates and how it reveals character or theme.

## Why figurative language matters in a play

- A character's **imagery reveals their state of mind** — fear, ambition, grief.
- Repeated figures across a play can build a **motif** that carries the theme.

## Common errors and misconceptions

- **Device-spotting** — always complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Ignoring who speaks the figure** — the same image means different things in different mouths.
- **Reading a symbol too literally** — a symbol stands for a larger idea.`,
      workedExample: `**Task.** Analyse figurative language in a line of dramatic dialogue using name–quote–effect.

**LORD MARCUS:** *"This house is a tomb, and every shadow wears my father's face."*

**Expression 1 — "This house is a tomb"**
1. **Name:** **metaphor** (the house is called a tomb).
2. **Quote:** "This house is a tomb."
3. **Effect:** the metaphor makes Marcus's home feel **dead, cold and haunted by loss**, revealing his grief and dread — his state of mind is projected onto the setting.

**Expression 2 — "every shadow wears my father's face"**
1. **Name:** **personification / imagery** (shadows "wear" a face) with a hint of **symbolism** (the father's face = guilt or memory).
2. **Quote:** "every shadow wears my father's face."
3. **Effect:** it dramatises how Marcus is **haunted** — he cannot escape the memory of his father; the image suggests **guilt** pressing on him from every side.

**Reading who speaks it.** Because **Marcus** speaks these lines, the figures reveal **his** guilt and grief; the same house might be described very differently by another character.

**Conclusion:** in drama, figurative language lives in the **dialogue** and reveals the **speaker's mind** and the play's **theme**. Name the device, quote it, and always explain the **effect** — noting **who** speaks it.`,
      quiz: [
        { prompt: "Figurative language means", options: ["more than the literal words", "exactly the literal words", "nothing", "only numbers"], correctIndex: 0, explanation: "Figures carry non-literal meaning." },
        { prompt: "In a play, figures of speech live in the", options: ["dialogue", "page numbers", "index", "price"], correctIndex: 0, explanation: "Dialogue carries the figures." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison of two unlike things is a", options: ["metaphor", "simile", "metonymy", "repetition"], correctIndex: 0, explanation: "A metaphor is direct." },
        { prompt: "Human qualities given to non-human things is", options: ["personification", "hyperbole", "simile", "metonymy"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "'The crown' used for the king is", options: ["metonymy", "simile", "hyperbole", "imagery"], correctIndex: 0, explanation: "An associated thing stands for the king." },
        { prompt: "Deliberate exaggeration is", options: ["hyperbole", "simile", "metonymy", "imagery"], correctIndex: 0, explanation: "Hyperbole exaggerates." },
        { prompt: "An object standing for a larger idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "The name–quote–effect method ends with", options: ["explaining the effect", "counting lines", "translating", "ignoring meaning"], correctIndex: 0, explanation: "The effect step earns the marks." },
        { prompt: "A character's imagery reveals their", options: ["state of mind", "price", "font", "page count"], correctIndex: 0, explanation: "Imagery reveals a speaker's mind." },
        { prompt: "'This house is a tomb' is a", options: ["metaphor", "simile", "hyperbole", "metonymy"], correctIndex: 0, explanation: "It directly calls the house a tomb." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is direct." },
        { prompt: "The same image can mean different things depending on", options: ["who speaks it", "the price", "the font", "the page"], correctIndex: 0, explanation: "The speaker shapes the meaning." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is left out." },
        { prompt: "Repeated figures across a play can build a", options: ["motif", "price", "printer", "index"], correctIndex: 0, explanation: "A recurring image is a motif." },
        { prompt: "Imagery appeals to the", options: ["senses", "price", "font", "index"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "'Her words cut like knives' is a", options: ["simile", "metaphor", "personification", "metonymy"], correctIndex: 0, explanation: "It compares using 'like'." },
        { prompt: "The effect step asks what the words make the audience", options: ["see, hear or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the audience's experience." },
        { prompt: "A motif that recurs across a play often carries the", options: ["theme", "price", "font", "index"], correctIndex: 0, explanation: "A motif can carry the theme." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Where does figurative language appear in a play, and what can it reveal?", answerKey: "It appears in the dialogue — what characters say — and can reveal the speaker's state of mind (fear, ambition, grief), their character, and the play's theme. Award 2 for the location and 2 for what it reveals.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The crown will not rest easy tonight', meaning the king, is an example of", options: ["metonymy", "simile", "hyperbole", "personification"], correctIndex: 0, answerKey: "An associated thing stands for the king — metonymy. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'My guilt is a stone I carry in my chest.'", answerKey: "Name: metaphor (guilt compared to a stone). Quote: 'a stone I carry in my chest.' Effect: makes the speaker's guilt feel like a heavy, constant physical burden weighing on them, revealing inner torment. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why should you note WHO speaks a figure of speech in a play?", answerKey: "Because the same image means different things in different mouths; a figure reveals the particular speaker's state of mind and character, so the meaning depends on who says it and in what situation. Award marks for the reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Choose a non-African play you have studied and discuss how the playwright uses at least three figures of speech in the dialogue to reveal character or theme, explaining the effect of each with quotation.", answerKey: "Award marks for: at least three figures identified and quoted, 9 marks; explanation of the effect of each, linked to character or theme, 12 marks; attention to who speaks and expression, 3 marks. Device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Drama (Ringo and Kashyap) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama); Genres and Styles (Theatre Appreciation, Pipino) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.05%3A_Genres_and_Styles)
      slug: "exposition-theme-tragedy-comedy",
      title: "Exposition, Theme, Tragedy and Comedy",
      objective:
        "By the end of the topic, learners should be able to explain the parts of dramatic plot (exposition, conflict, climax, resolution), identify a play's theme, and distinguish tragedy from comedy.",
      estimatedMinutes: 150,
      notes: `## The dramatic plot

A play's plot has recognisable parts:
- **Exposition** — the **opening** that introduces the characters, setting and situation.
- **Conflict** — the **central struggle** the characters face (the inciting problem).
- **Rising action** — events that build the conflict.
- **Climax** — the **turning point** of greatest tension.
- **Falling action** — events after the climax.
- **Resolution** (denouement) — the conflict is settled and the play ends.

## Theme

- **Theme** is the **underlying idea** the play conveys, stated as a full idea about life, not a one-word topic.
- A play may carry several themes at once; support each with evidence from the dialogue and action.

## Tragedy

- **Tragedy** is **serious in tone**, focusing on a protagonist who experiences an **eventual downfall**.
- Classic tragedy uses **noble characters**, **high-stakes ethical choices** and **heightened language**, and provokes **pity and fear** in the audience.

## Comedy

- **Comedy** is **light in tone**, uses **humour**, and **ends happily**.
- Characters face **practical choices** and are often common people; comedy uses **misunderstandings and mistaken identity**.

## Tragedy vs comedy

| Feature | Tragedy | Comedy |
| --- | --- | --- |
| Tone | serious | light |
| Characters | noble, complex | common, ordinary |
| Ending | downfall | happy |
| Audience feels | pity and fear | amusement |

## Set text (to be supplied by the teacher)

- Trace the plot parts of the assigned non-African play, state its theme, and decide whether it is a tragedy or a comedy, justifying by tone, characters and ending.
- *(Specific facts about the set plays come from the plays themselves, not invented here.)*

## Common errors and misconceptions

- **Confusing exposition with climax** — exposition opens; the climax is the turning point.
- **Stating theme as one word** — a theme is a full idea.
- **Thinking any sad play is a tragedy** — tragedy specifically follows a downfall and provokes pity and fear.
- **Thinking comedy just means jokes** — comedy is defined by light tone and a happy ending.`,
      workedExample: `**Task.** Analyse a play outline by its plot parts, theme and kind.

*A proud king, warned by a wise servant, ignores the warning; his arrogance drives away his allies; at the height of a crisis he is humbled and loses his throne; the play ends with his ruin and the audience's pity.*

**Step 1 — plot parts.**
- **Exposition:** the proud king and his court are introduced.
- **Conflict:** his arrogance versus the wise servant's warning and the loyalty of his allies.
- **Rising action:** his pride drives away his allies.
- **Climax:** at the height of the crisis he is humbled.
- **Falling action / resolution:** he loses his throne; the play closes on his ruin.

**Step 2 — theme.** State it as a full idea: *"unchecked pride leads to a ruler's downfall."*

**Step 3 — kind.** This is a **tragedy**: **serious tone**, a **noble protagonist** (a king), an **eventual downfall**, and the audience's response of **pity**. Justify by tone, characters and ending.

**Contrast — if it were a comedy.** Had the king learned his lesson through a series of comic misunderstandings and been happily restored, with a light tone throughout, it would be a **comedy**.

**Conclusion:** trace the **plot parts** (exposition → conflict → climax → resolution), state the **theme** as a full idea, and classify the play by **tone, characters and ending** — serious + downfall + pity = tragedy; light + happy ending = comedy.`,
      quiz: [
        { prompt: "The opening that introduces characters and situation is the", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition introduces the play." },
        { prompt: "The central struggle of a play is the", options: ["conflict", "exposition", "theme", "setting"], correctIndex: 0, explanation: "Conflict is the central struggle." },
        { prompt: "The turning point of greatest tension is the", options: ["climax", "exposition", "resolution", "rising action"], correctIndex: 0, explanation: "The climax is the turning point." },
        { prompt: "The point where the conflict is settled is the", options: ["resolution", "exposition", "climax", "rising action"], correctIndex: 0, explanation: "The resolution settles the conflict." },
        { prompt: "A serious play following a protagonist to a downfall is a", options: ["tragedy", "comedy", "farce", "pastoral"], correctIndex: 0, explanation: "Tragedy ends in downfall." },
        { prompt: "A light play that uses humour and ends happily is a", options: ["comedy", "tragedy", "elegy", "ode"], correctIndex: 0, explanation: "Comedy is light and ends happily." },
        { prompt: "Tragedy provokes in the audience", options: ["pity and fear", "only laughter", "boredom", "nothing"], correctIndex: 0, explanation: "Tragedy provokes pity and fear." },
        { prompt: "Classic tragedy uses characters of", options: ["noble standing", "no standing", "only children", "only servants"], correctIndex: 0, explanation: "Classic tragic heroes are noble." },
        { prompt: "Comedy often uses misunderstandings and", options: ["mistaken identity", "verse only", "tragic downfall", "elegy"], correctIndex: 0, explanation: "Mistaken identity is a comic device." },
        { prompt: "A theme should be stated as", options: ["a full idea", "one word", "a page number", "a name"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "The events that build the conflict form the", options: ["rising action", "exposition", "resolution", "denouement"], correctIndex: 0, explanation: "Rising action builds the conflict." },
        { prompt: "A sad play is a tragedy only if it follows a protagonist's", options: ["downfall", "wedding", "comic subplot", "song"], correctIndex: 0, explanation: "Tragedy requires a downfall." },
        { prompt: "Comedy is defined mainly by its", options: ["light tone and happy ending", "number of acts", "use of verse", "sad ending"], correctIndex: 0, explanation: "Light tone and happy ending define comedy." },
        { prompt: "Exposition differs from climax because exposition", options: ["opens the play", "is the turning point", "ends the play", "is the theme"], correctIndex: 0, explanation: "Exposition opens; the climax turns." },
        { prompt: "Comedy characters usually face", options: ["practical choices", "only ethical dilemmas", "no choices", "military choices"], correctIndex: 0, explanation: "Comedy involves practical choices." },
        { prompt: "Events after the climax are the", options: ["falling action", "exposition", "rising action", "conflict"], correctIndex: 0, explanation: "Falling action follows the climax." },
        { prompt: "Classic tragedy uses language that is", options: ["heightened", "always plain", "silent", "numerical"], correctIndex: 0, explanation: "Heightened language marks classic tragedy." },
        { prompt: "A play may carry", options: ["several themes at once", "no theme", "only a title", "only a price"], correctIndex: 0, explanation: "Plays hold multiple themes." },
        { prompt: "To classify a play, examine tone, characters and", options: ["ending", "price", "printer", "cover"], correctIndex: 0, explanation: "The ending is a key clue." },
        { prompt: "The inciting problem that starts the struggle is the", options: ["conflict", "resolution", "exposition", "theme"], correctIndex: 0, explanation: "Conflict is the inciting problem." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name and describe the parts of a dramatic plot.", answerKey: "Exposition — introduces characters, setting and situation; conflict — the central struggle; rising action — builds the conflict; climax — the turning point of greatest tension; falling action — events after the climax; resolution/denouement — the conflict is settled. Award marks for the parts described (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which response is provoked by tragedy?", options: ["pity and fear", "only laughter", "boredom", "indifference"], correctIndex: 0, answerKey: "Tragedy provokes pity and fear. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish tragedy from comedy by tone, characters and ending.", answerKey: "Tragedy: serious tone, noble/complex characters, ends in downfall (pity and fear). Comedy: light tone, common/ordinary characters, ends happily. Award marks for each of the three points of contrast.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why is it wrong to call any sad play a tragedy?", answerKey: "Because tragedy is defined not merely by sadness but by a serious tone, a protagonist's eventual downfall, and the arousal of pity and fear; a sad play without a downfall is not a tragedy. Award marks for the reasoning.", marks: 3 },
        { type: "ESSAY", prompt: "Using a non-African play you have studied, trace its plot from exposition to resolution, state a theme, and decide whether it is a tragedy or a comedy, justifying your answer by tone, characters and ending.", answerKey: "Award marks for: plot traced through its parts, 8 marks; a theme stated as an idea and supported, 6 marks; the kind (tragedy/comedy) justified by tone, characters and ending, 8 marks; expression, 2 marks. A plot summary without analysis of theme and kind should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary); The Importance of Tragedy (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/06%3A_Module_4%3A_The_Art_of_Tragic_Drama/06.3%3A_The_Importance_of_Tragedy)
      slug: "literary-devices-drama",
      title: "Literary Devices: Irony, Flashback, Foreshadowing, Dialogue, Tragic Hero",
      objective:
        "By the end of the topic, learners should be able to identify and explain the dramatic devices of irony, flashback, foreshadowing, dialogue and the tragic hero, and analyse their effect.",
      estimatedMinutes: 150,
      notes: `## Dramatic devices

- Playwrights use **literary devices** to build meaning and effect. This topic covers five the syllabus names.

## Irony

- **Irony** creates a **contrast between what is expected and what actually occurs**.
- **Dramatic irony** occurs when the **audience knows something a character does not**, creating anticipation and often suspense.

## Foreshadowing

- **Foreshadowing** gives an **advance hint of events that will occur later**, building suspense and preparing the audience for what comes.

## Flashback

- **Flashback** interrupts the present action to show an **earlier event**, providing **backstory** and revealing characters' motivations.

## Dialogue

- **Dialogue** is the **words characters speak** — the main medium of a play.
- Dialogue **drives the plot, develops relationships and reveals characters' inner emotions**; each character should have a **distinctive voice**.
- A **soliloquy** is a speech a character delivers **alone on stage**, revealing inner thoughts.

## Tragic hero

- A **tragic hero** is the focal character of a tragedy, **usually of noble stature**, who suffers a **downfall** due to a **flaw (hamartia)** — often **hubris** (excessive pride) — or an **error in judgement**.
- The hero is **neither wholly good nor evil**; their suffering provokes **pity and fear** in the audience.

## Analysing a device

Use **name → point → effect**: name the device, point to where it appears, and explain what it adds to meaning, character or tension.

## Set text (to be supplied by the teacher)

- Identify these devices in the assigned non-African play and explain their effect; if the play is a tragedy, analyse its tragic hero and their flaw.
- *(Specific instances come from the set plays themselves, not invented here.)*

## Common errors and misconceptions

- **Confusing dramatic irony with ordinary irony** — dramatic irony depends on the **audience knowing more** than a character.
- **Confusing foreshadowing (hints forward) with flashback (looks backward)**.
- **Calling any hero a tragic hero** — a tragic hero has a **flaw** and suffers a **downfall**.
- **Naming a device with no effect** — always explain what it does.`,
      workedExample: `**Task.** Identify and explain the dramatic devices in a short scenario.

*The audience has seen the poison poured. Now the proud KING lifts the cup, boasting, "No man alive can harm me." Alone earlier, he had confessed in a speech that his pride had cost him his only true friend, remembering the night he drove him away.*

**Device 1 — dramatic irony.** The **audience knows** the cup is poisoned while the **king does not**. **Effect:** unbearable tension and pity — we watch him walk into doom.

**Device 2 — foreshadowing.** His boast "No man alive can harm me" **hints** that harm is coming (from poison, not a man). **Effect:** it prepares the downfall and deepens the irony.

**Device 3 — soliloquy / dialogue.** Earlier, **alone on stage**, he "confessed in a speech" — a **soliloquy** revealing his inner guilt. **Effect:** it exposes his private thoughts the other characters never hear.

**Device 4 — flashback.** "remembering the night he drove [his friend] away" is a **flashback** to an earlier event. **Effect:** it supplies **backstory** explaining his isolation.

**Device 5 — tragic hero.** The **king** is a **tragic hero**: noble, but destroyed by his **flaw (hubris, pride)**. **Effect:** his downfall provokes **pity and fear**.

**Conclusion:** name each device, point to it, and explain its **effect** — dramatic irony makes us dread what a character cannot see, foreshadowing prepares it, soliloquy exposes the inner self, flashback supplies the past, and the tragic hero's **flaw** drives the fall.`,
      quiz: [
        { prompt: "A contrast between what is expected and what occurs is", options: ["irony", "flashback", "dialogue", "exposition"], correctIndex: 0, explanation: "Irony is that contrast." },
        { prompt: "When the audience knows something a character does not, this is", options: ["dramatic irony", "a soliloquy", "a flashback", "foreshadowing"], correctIndex: 0, explanation: "That is dramatic irony." },
        { prompt: "An advance hint of events to come is", options: ["foreshadowing", "flashback", "irony", "dialogue"], correctIndex: 0, explanation: "Foreshadowing hints forward." },
        { prompt: "An interruption showing an earlier event is a", options: ["flashback", "foreshadowing", "climax", "soliloquy"], correctIndex: 0, explanation: "A flashback shows the past." },
        { prompt: "The words characters speak are the", options: ["dialogue", "stage directions", "props", "index"], correctIndex: 0, explanation: "Dialogue is the spoken words." },
        { prompt: "A speech delivered alone on stage revealing inner thoughts is a", options: ["soliloquy", "dialogue", "prologue", "prop"], correctIndex: 0, explanation: "A soliloquy is spoken alone." },
        { prompt: "The focal character of a tragedy who falls through a flaw is the", options: ["tragic hero", "antagonist", "narrator", "chorus"], correctIndex: 0, explanation: "The tragic hero falls through a flaw." },
        { prompt: "A tragic hero's flaw is also called", options: ["hamartia", "a refrain", "a stanza", "a motif"], correctIndex: 0, explanation: "Hamartia is the tragic flaw." },
        { prompt: "Excessive pride, a common tragic flaw, is", options: ["hubris", "a soliloquy", "irony", "a flashback"], correctIndex: 0, explanation: "Hubris is excessive pride." },
        { prompt: "A tragic hero is usually of", options: ["noble stature", "no standing", "comic type", "animal form"], correctIndex: 0, explanation: "Tragic heroes are usually noble." },
        { prompt: "A tragic hero is neither wholly good nor", options: ["evil", "noble", "human", "brave"], correctIndex: 0, explanation: "The hero is morally complex." },
        { prompt: "Dialogue drives the plot and reveals characters'", options: ["inner emotions", "prices", "fonts", "page counts"], correctIndex: 0, explanation: "Dialogue reveals emotion." },
        { prompt: "Foreshadowing hints forward; a flashback looks", options: ["backward", "forward", "sideways", "nowhere"], correctIndex: 0, explanation: "Flashbacks look to the past." },
        { prompt: "Dramatic irony depends on the audience knowing", options: ["more than a character", "the price", "the printer", "the index"], correctIndex: 0, explanation: "The audience knows more." },
        { prompt: "Each character's dialogue should have a", options: ["distinctive voice", "identical voice", "no words", "single word"], correctIndex: 0, explanation: "Distinct voices keep characters distinct." },
        { prompt: "A tragic hero's downfall provokes", options: ["pity and fear", "only laughter", "boredom", "nothing"], correctIndex: 0, explanation: "Tragedy provokes pity and fear." },
        { prompt: "Calling any hero a tragic hero ignores the need for a", options: ["flaw and a downfall", "price", "font", "cover"], correctIndex: 0, explanation: "A tragic hero has a flaw and falls." },
        { prompt: "Naming a device with no effect is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Always explain the effect." },
        { prompt: "A soliloquy exposes thoughts the other characters", options: ["never hear", "all hear", "sing", "print"], correctIndex: 0, explanation: "A soliloquy is private to the audience." },
        { prompt: "A flashback supplies", options: ["backstory", "pricing", "printing", "page numbers"], correctIndex: 0, explanation: "Flashback supplies backstory." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define dramatic irony and explain its effect on the audience.", answerKey: "Dramatic irony occurs when the audience knows something one or more characters do not; its effect is to create anticipation, tension and often pity, as the audience watches a character act in ignorance of the truth. Award 2 for the definition and 2 for the effect.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A tragic hero falls because of", options: ["a flaw (hamartia) or error in judgement", "bad weather", "the price of the ticket", "the length of the play"], correctIndex: 0, answerKey: "A flaw or error in judgement. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What is a soliloquy, and how does it differ from ordinary dialogue?", answerKey: "A soliloquy is a speech a character delivers alone on stage, revealing their inner thoughts to the audience; ordinary dialogue is spoken between characters. The soliloquy exposes private thoughts the other characters do not hear. Award 2 for the definition and 2 for the difference.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List the key features of a tragic hero.", answerKey: "Usually of noble stature; suffers a downfall; the downfall is caused by a flaw (hamartia) such as hubris (excessive pride) or an error in judgement; neither wholly good nor evil; their suffering provokes pity and fear. Award marks for the features (max 3).", marks: 3 },
        { type: "ESSAY", prompt: "Choose a non-African play you have studied and discuss how the playwright uses at least three of these devices (irony, flashback, foreshadowing, dialogue/soliloquy, the tragic hero), explaining the effect of each with reference to the play.", answerKey: "Award marks for: at least three devices correctly identified with reference, 9 marks; explanation of the effect of each on meaning, character or tension, 12 marks; textual support and expression, 3 marks. Naming devices without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Setting/Theme (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction); How to Read a Play (Theatre Appreciation, Pipino) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.04%3A_How_to_Read_a_Play_and_Watch_a_Production)
      slug: "cultural-values-and-implications",
      title: "Cultural Values, Practices and Implications",
      objective:
        "By the end of the topic, learners should be able to identify the cultural values and practices shown in a non-African play and discuss their implications and significance.",
      estimatedMinutes: 150,
      notes: `## Culture in a play

- A play's **setting** carries a **cultural background** — the beliefs, values, customs and social order of the world it shows.
- **Non-African drama** shows the values and practices of societies outside Africa; reading them helps learners **appreciate diversity** and understand why characters act as they do.

## Values, practices and implications

- **Values** — what a society holds important (honour, rank, loyalty, faith, family).
- **Practices** — the customs and behaviours that express those values (rituals, forms of address, rules of conduct).
- **Implications** — the **consequences and significance** of those values and practices for the characters and for the meaning of the play.

## Reading culture in a play

1. Identify a **value or practice** shown in the dialogue or action.
2. Ask **whose value** it is and how the play presents it — with approval, criticism or question.
3. Trace its **implications** — how it shapes the conflict, the characters' choices and their fates.
4. Compare with the learner's **own culture** to appreciate difference and similarity.

## Appreciating diversity

- Different cultures and eras hold different values; a practice that seems strange may make sense within its own world.
- Reading non-African drama builds **respect for diversity of values and practices** while allowing critical thought about their effects.

## Set text (to be supplied by the teacher)

- Identify the cultural values and practices in the assigned non-African play, and discuss their implications for the characters and the play's meaning.
- *(Specific customs, values and events come from the set plays themselves, not invented here.)*

## Common errors and misconceptions

- **Judging a culture only by one's own** — read a value within its own world first.
- **Confusing a value with a practice** — a value is what is prized; a practice is how it is enacted.
- **Ignoring implications** — the point is the **consequences and significance**, not just naming a custom.
- **Assuming the play endorses every value it shows** — a play may **criticise** a practice.`,
      workedExample: `**Task.** Analyse a cultural value, its practice and its implications in a play, using a general model.

*In a courtly society, a king's honour must never be questioned; a servant who dares to warn him of danger is punished for insolence; the king's ruin follows because no one will risk telling him the truth.*

**Step 1 — value.** The society prizes the **king's honour and absolute authority** — a **value**.

**Step 2 — practice.** The **practice** that expresses it is the rule that **no one may question the king**; the servant who warns him is punished for breaking it.

**Step 3 — implications.** The **implication** is grave: because the practice silences honest warning, the king is cut off from the truth and walks into **ruin**. The value and its practice **drive the tragedy**.

**Step 4 — the play's attitude.** The play does not simply endorse the value — by showing the ruin it causes, it **criticises** blind deference to authority. Read the writer's attitude.

**Step 5 — appreciate diversity.** Compare with the learner's own society: where is honest counsel valued or silenced? This builds respect for difference and critical thought.

**Conclusion:** distinguish a **value** (what is prized) from a **practice** (how it is enacted), trace the **implications** (its consequences and significance), and read the play's **attitude** toward it — appreciating cultural diversity without abandoning critical judgement.`,
      quiz: [
        { prompt: "A play's setting carries a", options: ["cultural background", "price", "font", "index"], correctIndex: 0, explanation: "Setting carries cultural background." },
        { prompt: "What a society holds important is its", options: ["values", "practices", "props", "prices"], correctIndex: 0, explanation: "Values are what a society prizes." },
        { prompt: "The customs that express a society's values are its", options: ["practices", "values", "prices", "fonts"], correctIndex: 0, explanation: "Practices enact values." },
        { prompt: "The consequences and significance of a value are its", options: ["implications", "price", "cover", "index"], correctIndex: 0, explanation: "Implications are consequences and significance." },
        { prompt: "Reading non-African drama helps learners appreciate", options: ["diversity of values", "printing", "arithmetic", "map-making"], correctIndex: 0, explanation: "It builds respect for diverse values." },
        { prompt: "A value is what is prized; a practice is how it is", options: ["enacted", "priced", "printed", "numbered"], correctIndex: 0, explanation: "Practices enact values." },
        { prompt: "A practice that seems strange may make sense within its", options: ["own world", "price", "font", "page count"], correctIndex: 0, explanation: "Read a value within its own world." },
        { prompt: "The point of analysing a value is its", options: ["implications", "price", "printer", "cover"], correctIndex: 0, explanation: "Implications carry the significance." },
        { prompt: "A play may present a value with approval, criticism or", options: ["question", "a price", "a font", "a date"], correctIndex: 0, explanation: "Read the play's attitude." },
        { prompt: "Assuming a play endorses every value it shows is an", options: ["error", "requirement", "always correct", "good habit"], correctIndex: 0, explanation: "A play may criticise a practice." },
        { prompt: "Honour, rank and loyalty are examples of", options: ["values", "practices", "prices", "props"], correctIndex: 0, explanation: "These are values." },
        { prompt: "A ritual or rule of conduct is a", options: ["practice", "value", "price", "font"], correctIndex: 0, explanation: "A practice is a custom or behaviour." },
        { prompt: "Judging a culture only by one's own is a", options: ["reading error", "requirement", "good habit", "summary"], correctIndex: 0, explanation: "Read a value within its own world first." },
        { prompt: "Cultural values and practices can drive a play's", options: ["conflict", "price", "font", "index"], correctIndex: 0, explanation: "They shape the conflict." },
        { prompt: "Comparing a play's culture with one's own builds", options: ["respect for diversity", "printing skill", "arithmetic", "map-making"], correctIndex: 0, explanation: "Comparison builds respect and understanding." },
        { prompt: "A rule that no one may question the king is a", options: ["practice", "value", "price", "font"], correctIndex: 0, explanation: "It is a custom enacting a value." },
        { prompt: "The king's ruin from silenced counsel is an", options: ["implication of the practice", "a price", "a font", "an index"], correctIndex: 0, explanation: "Ruin is the practice's implication." },
        { prompt: "Reading the writer's attitude means asking whether the play approves or", options: ["criticises the value", "raises the price", "changes the font", "numbers the pages"], correctIndex: 0, explanation: "The play may approve or criticise." },
        { prompt: "Different cultures and eras hold", options: ["different values", "the same values only", "no values", "only prices"], correctIndex: 0, explanation: "Values vary across cultures and eras." },
        { prompt: "The significance of a custom lies in its", options: ["consequences for characters and meaning", "price", "font", "page count"], correctIndex: 0, explanation: "Implications concern consequences and meaning." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish a cultural value from a cultural practice, with an example of each.", answerKey: "A value is what a society holds important (e.g. honour, family loyalty); a practice is the custom or behaviour that expresses it (e.g. a ritual, a rule of conduct). Award 2 for the distinction and 1 per example (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The 'implications' of a cultural practice in a play are its", options: ["consequences and significance for characters and meaning", "price", "printer", "page count"], correctIndex: 0, answerKey: "Consequences and significance. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give the steps for reading a cultural value in a play.", answerKey: "Identify a value or practice shown; ask whose value it is and how the play presents it (approval/criticism/question); trace its implications (how it shapes conflict, choices and fates); compare with one's own culture. Award marks for the steps.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why should a reader avoid judging a play's culture only by their own values?", answerKey: "Because different cultures and eras hold different values, and a practice that seems strange may make sense within its own world; reading it in its own context first allows genuine understanding and appreciation of diversity, while still permitting critical thought about its effects. Award marks for the reasoning.", marks: 3 },
        { type: "ESSAY", prompt: "Using a non-African play you have studied, identify its main cultural values and practices and discuss their implications for the characters and the meaning of the play, noting whether the play endorses or criticises them.", answerKey: "Award marks for: cultural values and practices identified, 6 marks; implications for characters and conflict traced, 8 marks; the play's attitude (endorse/criticise) discussed, 6 marks; textual support, 2 marks; expression, 2 marks. Merely naming customs with no implications should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Plot (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "plot-diagram",
      title: "The Plot Diagram: Rising, Climax and Falling Actions",
      objective:
        "By the end of the topic, learners should be able to draw and label the plot diagram and place a play's events at the correct stage — exposition, rising action, climax, falling action and resolution.",
      estimatedMinutes: 150,
      notes: `## The plot diagram

- The **plot** is the series of events tied to the central conflict, and it has a recognisable **shape** often drawn as a diagram (Freytag's pyramid).
- The **five stages**: **exposition → rising action → climax → falling action → resolution (denouement)**.

## The stages

- **Exposition** — introduces the characters, setting and situation before the conflict grows.
- **Rising action** — the events that **build the conflict**; tension increases.
- **Climax** — the **turning point** of greatest tension, where the outcome is decided.
- **Falling action** — the events **after the climax**, as the story moves toward its end.
- **Resolution** — the conflict is **settled** and the play ends.

## The plot pyramid

\`\`\`svg Freytag's plot pyramid
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="10">
  <line x1="20" y1="150" x2="160" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="30" x2="300" y2="150" stroke="currentColor" stroke-width="2"/>
  <circle cx="20" cy="150" r="3" fill="currentColor"/>
  <circle cx="90" cy="90" r="3" fill="currentColor"/>
  <circle cx="160" cy="30" r="3" fill="currentColor"/>
  <circle cx="230" cy="90" r="3" fill="currentColor"/>
  <circle cx="300" cy="150" r="3" fill="currentColor"/>
  <text x="20" y="165" text-anchor="middle">Exposition</text>
  <text x="70" y="80">Rising action</text>
  <text x="160" y="22" text-anchor="middle">Climax</text>
  <text x="235" y="80">Falling action</text>
  <text x="300" y="165" text-anchor="middle">Resolution</text>
</svg>
\`\`\`

## Placing events on the diagram

1. Find the **opening** situation → exposition.
2. Find the **building** complications → rising action.
3. Find the **turning point** where the outcome is decided → climax.
4. Find what **follows** → falling action.
5. Find the **settled ending** → resolution.

## Set text (to be supplied by the teacher)

- Draw the plot diagram for the assigned non-African play and place its main events at the correct stages.
- *(Specific events come from the set plays themselves, not invented here.)*

## Common errors and misconceptions

- **Placing the climax at the very end** — the climax is the **turning point**, followed by falling action and resolution.
- **Confusing rising with falling action** — rising builds *toward* the climax; falling comes *after* it.
- **Treating exposition as the whole first act** — exposition is the setup before the conflict grows.
- **Listing events without shaping them** — the point is to see the plot's **shape**.`,
      workedExample: `**Task.** Place the events of a play outline on the plot diagram.

*A proud king rules a peaceful court (1). A wise servant warns him of a coming danger, which he ignores; his arrogance drives away his allies (2). At the height of the crisis he is confronted and humbled — the moment that decides his fate (3). Stripped of support, he loses his throne (4). He ends in exile, having learned too late (5).*

**Step 1 — exposition (event 1).** "A proud king rules a peaceful court" sets up the characters and situation before the conflict grows.

**Step 2 — rising action (event 2).** The ignored warning and the driving-away of allies **build the conflict**; tension rises.

**Step 3 — climax (event 3).** "At the height of the crisis he is humbled — the moment that decides his fate" is the **turning point** of greatest tension.

**Step 4 — falling action (event 4).** "Stripped of support, he loses his throne" **follows** the climax.

**Step 5 — resolution (event 5).** "He ends in exile, having learned too late" **settles** the story.

**Check.** The climax is the **turning point** (event 3), **not** the ending; rising action (2) builds *toward* it and falling action (4) comes *after* it.

**Conclusion:** the plot diagram shows the play's **shape** — exposition, rising action, climax, falling action, resolution. Place each event by asking whether it **sets up**, **builds**, **turns**, **follows** or **settles** the conflict.`,
      quiz: [
        { prompt: "The plot diagram shows the plot's", options: ["shape", "price", "font", "index"], correctIndex: 0, explanation: "The diagram shows the plot's shape." },
        { prompt: "The five stages begin with", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition comes first." },
        { prompt: "Events that build the conflict are the", options: ["rising action", "falling action", "exposition", "resolution"], correctIndex: 0, explanation: "Rising action builds the conflict." },
        { prompt: "The turning point of greatest tension is the", options: ["climax", "exposition", "resolution", "denouement"], correctIndex: 0, explanation: "The climax is the turning point." },
        { prompt: "Events after the climax are the", options: ["falling action", "rising action", "exposition", "conflict"], correctIndex: 0, explanation: "Falling action follows the climax." },
        { prompt: "The stage where the conflict is settled is the", options: ["resolution", "exposition", "climax", "rising action"], correctIndex: 0, explanation: "The resolution settles the conflict." },
        { prompt: "The plot pyramid is also known as", options: ["Freytag's pyramid", "the price chart", "the index", "the cover"], correctIndex: 0, explanation: "Freytag's pyramid maps the plot." },
        { prompt: "Placing the climax at the very end is a", options: ["mistake", "requirement", "good habit", "form of exposition"], correctIndex: 0, explanation: "The climax is the turning point, not the end." },
        { prompt: "Rising action builds toward the climax; falling action comes", options: ["after it", "before it", "instead of it", "never"], correctIndex: 0, explanation: "Falling action follows the climax." },
        { prompt: "Exposition introduces characters, setting and", options: ["situation", "price", "font", "index"], correctIndex: 0, explanation: "Exposition sets up the situation." },
        { prompt: "The turning point where the outcome is decided is the", options: ["climax", "exposition", "resolution", "falling action"], correctIndex: 0, explanation: "The climax decides the outcome." },
        { prompt: "The denouement is another name for the", options: ["resolution", "exposition", "climax", "rising action"], correctIndex: 0, explanation: "Denouement = resolution." },
        { prompt: "To place an opening situation, use the", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Openings belong in exposition." },
        { prompt: "Building complications belong in the", options: ["rising action", "exposition", "resolution", "climax"], correctIndex: 0, explanation: "Complications build in rising action." },
        { prompt: "A settled ending belongs in the", options: ["resolution", "rising action", "exposition", "climax"], correctIndex: 0, explanation: "Settled endings are the resolution." },
        { prompt: "The plot is the series of events tied to the central", options: ["conflict", "price", "font", "index"], correctIndex: 0, explanation: "Plot relates to the conflict." },
        { prompt: "Listing events without shaping them misses the plot's", options: ["shape", "price", "printer", "cover"], correctIndex: 0, explanation: "The point is to see the shape." },
        { prompt: "Confusing rising and falling action confuses events before and", options: ["after the climax", "before the title", "after the price", "before the cover"], correctIndex: 0, explanation: "Rising is before; falling is after." },
        { prompt: "Tension is highest at the", options: ["climax", "exposition", "resolution", "opening"], correctIndex: 0, explanation: "Tension peaks at the climax." },
        { prompt: "The correct order is exposition, rising action, climax, falling action,", options: ["resolution", "exposition", "climax", "conflict"], correctIndex: 0, explanation: "Resolution comes last." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the five stages of the plot diagram in order.", answerKey: "Exposition; rising action; climax; falling action; resolution (denouement). Award 1 mark each (max 5).", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "The climax of a plot is", options: ["the turning point of greatest tension", "the very last event", "the opening", "the theme"], correctIndex: 0, answerKey: "The turning point of greatest tension. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between rising action and falling action.", answerKey: "Rising action is the events that build the conflict and increase tension toward the climax; falling action is the events after the climax as the story moves toward its resolution. Award 2 per stage.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How do you decide where an event belongs on the plot diagram?", answerKey: "Ask whether the event sets up the situation (exposition), builds the conflict (rising action), is the turning point that decides the outcome (climax), follows the turning point (falling action), or settles the conflict at the end (resolution). Award marks for the method.", marks: 4 },
        { type: "ESSAY", prompt: "Draw and label the plot diagram, then place the main events of a non-African play you have studied at the correct stages, explaining why each belongs there.", answerKey: "Award marks for: a correctly labelled diagram (five stages in order), 6 marks; main events correctly placed, 10 marks; justification of each placement, 6 marks; expression, 2 marks. Placing the climax at the end, or listing events without stages, should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Playwriting (Garcia) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Playwriting_(Garcia)/01%3A_Chapters/1.01%3A_Playwriting)
      slug: "constructing-drama",
      title: "Constructing Drama",
      objective:
        "By the end of the topic, learners should be able to apply prior knowledge of the elements of drama to construct a short dramatic scene with dialogue, a central conflict and stage directions.",
      estimatedMinutes: 150,
      notes: `## What constructing a play involves

- A **play is a story told through dialogue and action** — it communicates through these two mediums, not through narrative description.
- A play **poses a difficult problem** the characters try to solve; this **central conflict** drives it forward. Often the main character is **transformed** by the end.

## The playwright's job

- The playwright is a **world builder**, responsible for the **world, the characters and the conflict**, and for **building tension** so the story captivates the audience.

## The tools you write with

- **Dialogue** — the words characters speak; it drives the plot, develops relationships and reveals inner emotions. Each character should have a **distinctive rhythm and vocabulary**.
- **Action** — the physical movements of the characters.
- **Stage directions** — instructions for movement, location, scenery, sounds, props and pauses; usually **italicised and separate** from the dialogue.
- **Acts and scenes** — the units into which the play is divided.

## Structuring the play

- **Introduce** the world, the main characters and a normal situation; then introduce the **conflict**.
- Build the conflict through **rising tension** to a **climax**, then a **resolution** — the plot shape studied earlier.

## A checklist for a scene

1. **Who** is in it (characters) and **where/when** (setting, in a stage direction)?
2. What **problem or tension** does the scene turn on?
3. Write the **dialogue** so each character sounds distinct and the tension builds.
4. Add **stage directions** for entrances, exits, movement and key actions.

## Set text as a model (to be supplied by the teacher)

- Use the studied non-African play as a **model** of dramatic form; construct your own scene applying the same tools.
- *(Your scene is your own creation; do not copy the set play's specific plot or characters.)*

## Common errors and misconceptions

- **Writing narrative prose instead of a script** — a play uses **dialogue, action and stage directions**.
- **Flat, identical dialogue** — give each character a **distinct voice**.
- **No central problem** — a play needs a **conflict** to drive it.
- **Forgetting stage directions** — they tell the actors and reader what happens on stage.`,
      workedExample: `**Task.** Plan and draft the opening of a short dramatic scene.

**Step 1 — plan.**
- **Characters:** DUKE ALARIC (proud and impatient) and ELENA (a calm, honest advisor).
- **Setting (stage direction):** a castle map-room, late at night.
- **Central problem:** Elena must warn Alaric that his ally is about to betray him; Alaric refuses to hear it. That tension drives the scene.

**Step 2 — draft (script form).**

*A map-room lit by one candle. DUKE ALARIC leans over a map, tracing a border with his finger. ELENA stands at the door, a sealed letter in her hand.*

**ELENA:** My lord — before you march, read this. One page. It costs you nothing but a minute.

*She steps forward. ALARIC does not look up.*

**ALARIC:** I do not read the fears of nervous advisors. The border is mine by morning.

**ELENA:** *(placing the letter on the map)* Then let the map read it for you, my lord, when the man you trust is standing on the wrong side of that line.

*ALARIC's finger stops.*

**Step 3 — check against the checklist.**
- **Dialogue** drives the scene; the two voices are **distinct** (Alaric curt and proud, Elena calm and pointed).
- **Stage directions** (in italics) give the setting, entrances and a telling action (his finger stopping).
- A clear **central problem** (the warning he refuses) creates the tension.
- The scene builds toward a small **turning point**.

**Conclusion:** construct drama by telling the story through **dialogue and action**, built around a **central problem**, with **stage directions** for what happens on stage — not narrative prose. Give each character a **distinct voice** and build the **tension**.`,
      quiz: [
        { prompt: "A play is a story told through", options: ["dialogue and action", "description only", "rhyme only", "narration only"], correctIndex: 0, explanation: "Plays communicate through dialogue and action." },
        { prompt: "A play poses a difficult problem the characters try to", options: ["solve", "ignore", "print", "sell"], correctIndex: 0, explanation: "The central conflict drives the play." },
        { prompt: "The playwright is described as a", options: ["world builder", "ticket seller", "printer", "stagehand only"], correctIndex: 0, explanation: "The playwright builds world, characters and conflict." },
        { prompt: "The words characters speak are the", options: ["dialogue", "stage directions", "props", "programme"], correctIndex: 0, explanation: "Dialogue is the spoken words." },
        { prompt: "Instructions for movement, scenery and props are", options: ["stage directions", "dialogue", "themes", "climaxes"], correctIndex: 0, explanation: "Stage directions give the mechanics." },
        { prompt: "Stage directions are usually", options: ["italicised and separate from dialogue", "sung", "hidden", "spoken by the audience"], correctIndex: 0, explanation: "They are set apart from dialogue." },
        { prompt: "Each character's dialogue should have a", options: ["distinctive rhythm and vocabulary", "identical voice", "no words", "single word"], correctIndex: 0, explanation: "Distinct voices keep characters distinct." },
        { prompt: "A play is divided into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units." },
        { prompt: "The opening of a play usually introduces the world, characters and a", options: ["normal situation before conflict", "list of prices", "map", "recipe"], correctIndex: 0, explanation: "Set up the normal world, then the conflict." },
        { prompt: "A play needs, above all, a central", options: ["conflict", "song", "map", "price list"], correctIndex: 0, explanation: "A play turns on a problem to be solved." },
        { prompt: "Writing narrative paragraphs instead of a script is wrong because a play uses", options: ["dialogue, action and stage directions", "only description", "only footnotes", "only rhyme"], correctIndex: 0, explanation: "A play is a script, not prose narration." },
        { prompt: "Dialogue can reveal a character's", options: ["inner emotions", "ticket price", "printer", "seat number"], correctIndex: 0, explanation: "Dialogue reveals emotion." },
        { prompt: "The plot shape to build a play is exposition, rising tension, climax and", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "The arc ends in resolution." },
        { prompt: "By the end, the main character is often", options: ["transformed", "unchanged always", "removed", "renamed"], correctIndex: 0, explanation: "The main character is typically transformed." },
        { prompt: "The physical movements of the characters are the", options: ["action", "dialogue", "theme", "props"], correctIndex: 0, explanation: "Action is physical movement." },
        { prompt: "A scene checklist should establish who, where/when and the", options: ["problem or tension", "ticket price", "printer", "cover art"], correctIndex: 0, explanation: "Identify the tension the scene turns on." },
        { prompt: "The playwright must build", options: ["tension to captivate the audience", "a price list", "an index", "a map only"], correctIndex: 0, explanation: "Building tension captivates the audience." },
        { prompt: "Stage directions include entrances, exits, movement and", options: ["key actions", "ticket prices", "the author's age", "the index"], correctIndex: 0, explanation: "They cover what happens on stage." },
        { prompt: "Flat, identical dialogue is a fault because characters should", options: ["sound distinct", "sound the same", "not speak", "only whisper"], correctIndex: 0, explanation: "Each character needs a distinct voice." },
        { prompt: "A studied play can serve as a", options: ["model of dramatic form", "price list", "map", "index"], correctIndex: 0, explanation: "Use it as a model, not to copy." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the two mediums through which a play tells its story and the role of stage directions.", answerKey: "A play tells its story through dialogue (the words characters speak) and action (their physical movements). Stage directions are instructions for what happens on stage — movement, location, scenery, sounds, props, pauses — usually italicised and separate from the dialogue. Award 2 for the two mediums and 2 for stage directions.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "What must a constructed play be built around?", options: ["a central conflict the characters try to solve", "a list of prices", "a single rhyme", "a map of the theatre"], correctIndex: 0, answerKey: "A central conflict. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the four things a scene checklist should establish before writing dialogue.", answerKey: "Who is in the scene (characters); where and when (setting, in a stage direction); the problem or tension the scene turns on; how the tension builds. Award marks for the items (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why should each character have a distinctive voice, and how is this achieved?", answerKey: "So the characters feel distinct and believable; achieved by giving each a distinctive rhythm, flow and vocabulary in their dialogue. Award 2 for the reason and 2 for the method.", marks: 4 },
        { type: "ESSAY", prompt: "Construct a short dramatic scene (about 12–16 lines) between two characters built around a clear conflict, using correct script form with dialogue and stage directions and giving each character a distinct voice.", answerKey: "Award marks for: correct script form (character names, dialogue, italicised stage directions), 6 marks; a clear central conflict, 6 marks; two distinct character voices, 6 marks; stage directions for setting/movement, 4 marks; coherence and rising tension, 2 marks. A narrative-prose answer (not a script) should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
