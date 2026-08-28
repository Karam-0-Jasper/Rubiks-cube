import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester One, Period III: African Drama. The Grade 10 Period III
// CONTENTS list has four top-level items, each rebuilt here as its own topic:
// (1) African Drama, (2) Literary devices (exposition, plot, conflict, climax,
// resolution, tragic hero, tragic flaw, protagonist, antagonist, irony,
// dialogue, comedy, tragedy, tragic-comedy, melodrama), (3) Similarities and
// differences in drama, (4) Play writing and Acting. Literary concepts are
// sourced from LibreTexts (Humanities). The syllabus names African set texts
// (e.g. The Lion and the Jewel); set-text-specific facts are NOT invented here.
// The general concept of drama is well sourced, but "African drama" as a
// culturally specific tradition is NOT directly covered by the approved sites —
// this gap is flagged in the notes and in the agent's report.
export const literatureG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "African Drama",
  summary:
    "Period III of the MoE Grade 10 Literature syllabus. Its four CONTENTS items are taught as four topics: African drama as a form; the literary devices of drama (exposition, plot, conflict, climax, resolution, tragic hero and flaw, protagonist and antagonist, irony, dialogue, and the kinds of drama); the similarities and differences among kinds of drama; and play writing and acting.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Defining Literature; Elements of Drama; How to Read a Play (https://human.libretexts.org/Bookshelves/Literature_and_Literacy/World_Literature/Introduction_to_Literature_(Lumen)/01%3A_Genre_Introduction/1.06%3A_Defining_Literature)
      slug: "nature-of-african-drama",
      title: "African Drama as a Form",
      objective:
        "By the end of the topic, learners should be able to explain what drama is as a performance form, how a play is structured, and how the tools of drama are applied to an African play.",
      estimatedMinutes: 150,
      notes: `## Drama as a form

- **Drama** is **literature intended for performance** by actors before an audience.
- A play is **told through dialogue and action** and organised into **acts and scenes**.
- Unlike a novel, a play has **no narrative paragraphs** describing feelings — meaning comes from **what characters say** and from **stage directions**.

## African drama

- **African drama** is drama written by African playwrights, applying the same form (performance, dialogue, acts and scenes) to **African life, settings and concerns**.
- The syllabus set texts for this period are African plays (studied from the plays themselves).
- *(Flag: the approved reference sites cover drama as a general form and its elements, which is what this note teaches. The culturally specific features of African drama — its roots in ritual, festival, masquerade and oral storytelling, and facts about particular African playwrights and set texts — are NOT drawn from the approved sites and should be studied from the set plays and teacher-provided African-literature materials.)*

## The elements to apply

Whatever the play's origin, analyse it with the elements of drama:
- **Plot** — the events and their order (exposition → rising action → climax → falling action → resolution).
- **Character** — protagonist, antagonist, foil; traits and roles.
- **Conflict** — the central struggle (person vs person, self, society or nature).
- **Dialogue** — the words through which the play unfolds.
- **Theme** — the ideas the play conveys.
- **Setting** — the time and place.

## Reading a play

- **Read stage directions as part of the text** — they carry meaning the dialogue does not.
- **Imagine the performance**; theatre happens live.
- **Assign parts and read aloud** to hear the drama.

## Why study drama

- Drama presents human life and conflict **directly, in performance**.
- It lets a community see its own concerns acted out on stage.

## Common errors and misconceptions

- **Reading a play like a novel** — a play is dialogue and stage directions, not narrative description.
- **Skipping the stage directions** — they carry movement, entrances and mood.
- **Treating drama as only European** — drama is a **universal form**; African playwrights use it for African stories.
- **Expecting a narrator** — in a play there is usually no narrator; character is shown through speech and action.`,
      workedExample: `**Task.** Explain how you would approach studying an African play, applying the elements of drama.

**Model method**

**Step 1 — read it as a performance text.** Remember a play has **no narrative paragraphs**. Follow the **dialogue** and read the **stage directions** as part of the text (they tell you entrances, exits and action). Imagine the scenes performed.

**Step 2 — trace the plot.** Map the events onto the plot stages: **exposition** (the situation is set), **rising action** (complications build), **climax** (the turning point), **falling action**, and **resolution**.

**Step 3 — analyse character.** Identify the **protagonist**, the **antagonist**, and any **foil**. Note each character's **traits** (qualities) and **role** (function), using evidence from what they say and do.

**Step 4 — find the conflict.** Name the central struggle — is it person against person, self, society or nature?

**Step 5 — draw out the themes.** Ask what ideas the play conveys through its characters and conflict, and how the setting shapes them.

**Step 6 — apply to the African setting.** The set play is rooted in African life; connect its events, characters and conflicts to that context. *(Study the specific cultural features from the play itself and teacher materials, not from this general note.)*

**Conclusion:** studying an African play uses the **same tools of drama** as any play — plot, character, conflict, dialogue, theme, setting — read as a **performance text**, with attention to how the play's African setting shapes its meaning.`,
      quiz: [
        { prompt: "Drama is literature intended for", options: ["performance", "silent reading only", "singing", "printing in newspapers"], correctIndex: 0, explanation: "Plays are written to be performed." },
        { prompt: "A play is told through dialogue and", options: ["action", "narration only", "rhyme only", "footnotes"], correctIndex: 0, explanation: "Dialogue and action tell the story." },
        { prompt: "A play is organised into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units of a play." },
        { prompt: "African drama is drama written by African playwrights about African", options: ["life, settings and concerns", "chemistry", "algebra", "maps"], correctIndex: 0, explanation: "It applies the form to African experience." },
        { prompt: "Unlike a novel, a play has no", options: ["narrative paragraphs describing feelings", "characters", "dialogue", "acts"], correctIndex: 0, explanation: "Meaning comes from dialogue and stage directions." },
        { prompt: "Stage directions should be", options: ["read as part of the text", "skipped", "read only by actors", "ignored in exams"], correctIndex: 0, explanation: "They carry meaning the dialogue does not." },
        { prompt: "The events and their order in a play form the", options: ["plot", "setting", "prop", "cast"], correctIndex: 0, explanation: "Plot is the sequence of events." },
        { prompt: "The main character of a play is the", options: ["protagonist", "antagonist", "foil", "narrator"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The character opposing the protagonist is the", options: ["antagonist", "protagonist", "chorus", "prop"], correctIndex: 0, explanation: "The antagonist creates conflict." },
        { prompt: "The central struggle in a play is the", options: ["conflict", "setting", "prop", "cast list"], correctIndex: 0, explanation: "Conflict drives the play." },
        { prompt: "The time and place of a play is its", options: ["setting", "plot", "theme", "climax"], correctIndex: 0, explanation: "Setting is time and place." },
        { prompt: "The ideas a play conveys are its", options: ["themes", "props", "tickets", "acts"], correctIndex: 0, explanation: "Themes are the ideas conveyed." },
        { prompt: "Theatre, unlike a novel, happens", options: ["live", "only on paper", "in silence", "once ever"], correctIndex: 0, explanation: "Theatre is a live medium." },
        { prompt: "A conflict within a character's own mind is", options: ["person against self", "person against society", "person against nature", "person against person"], correctIndex: 0, explanation: "Internal conflict is person against self." },
        { prompt: "Drama is best described as a", options: ["universal form used by many cultures", "European invention only", "kind of poem", "kind of map"], correctIndex: 0, explanation: "Drama is universal; African writers use it too." },
        { prompt: "The plot arc runs exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "It ends in resolution." },
        { prompt: "A character whose contrast highlights another is a", options: ["foil", "narrator", "prop", "chorus"], correctIndex: 0, explanation: "A foil defines another by contrast." },
        { prompt: "In a play there is usually no", options: ["narrator", "dialogue", "conflict", "character"], correctIndex: 0, explanation: "Character is shown through speech and action, not narration." },
        { prompt: "A good way to experience a play is to", options: ["assign parts and read aloud", "read only the last scene", "read the price list", "skip the dialogue"], correctIndex: 0, explanation: "Reading aloud brings the drama alive." },
        { prompt: "To study an African play, apply the same tools of", options: ["drama (plot, character, conflict, theme)", "chemistry", "geometry", "accounting"], correctIndex: 0, explanation: "The elements of drama are the tools." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define drama and state two ways a play differs from a novel.", answerKey: "Drama is literature intended for performance by actors before an audience. Differences (any two): a play is told through dialogue and action, not narrative description; it has stage directions that must be read as part of the text; it is written to be performed live; it usually has no narrator. Award 2 for the definition and 1 per difference (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which set of tools is used to analyse any play, African or otherwise?", options: ["plot, character, conflict, dialogue, theme, setting", "acids, bases, salts", "supply and demand", "latitude and longitude"], correctIndex: 0, answerKey: "The elements of drama. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the five stages of a play's plot in order.", answerKey: "Exposition → rising action → climax → falling action → resolution. Award 1 mark per correctly placed stage (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Explain why stage directions must be read as part of the text of a play.", answerKey: "A play has no narrative paragraphs; stage directions carry the mechanics — entrances, exits, movement, scenery, sounds and mood — that the dialogue alone does not convey, so skipping them means missing part of the meaning. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Using an African play you have studied, show how the elements of drama (plot, character, conflict, theme, setting) can be applied to interpret it, reading it as a performance text. Support your answer with reference to the play.", answerKey: "Award marks for: reading it as a performance text (dialogue + stage directions), 4 marks; application of plot, character, conflict, theme and setting to the studied play, 12 marks; connection of the play's meaning to its African setting, 4 marks; textual reference and expression, 4 marks. A response that only summarises the story should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Drama; Fiction and Drama - types, terms; The Importance of Tragedy; Literary Devices Glossary (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Rhetoric_-_What_Why_and_How/13%3A_Literature/13.01%3A_Fiction_and_Drama_-_types_terms_and_sample_essay)
      slug: "dramatic-literary-devices",
      title: "The Literary Devices of Drama",
      objective:
        "By the end of the topic, learners should be able to define and identify the key devices and terms of drama — exposition, plot, conflict, climax, resolution, tragic hero, tragic flaw, protagonist, antagonist, irony, dialogue — and the kinds of drama.",
      estimatedMinutes: 170,
      notes: `## Plot and its parts

- **Plot** — a pattern of carefully selected, causally related events that **contain conflict**.
- **Exposition** — the **opening portion** that sets the scene, introduces characters and gives background.
- **Rising action** — the **complications** the protagonist must face; a build of conflicts and crises.
- **Climax** — the **moment of greatest tension**, when the problem is confronted.
- **Falling action** — the movement **toward a resolution**.
- **Resolution (denouement)** — brings the problem to **finality** (not necessarily a happy ending).

## Conflict

- **Conflict** — the **central struggle** in the drama; the play's problem.
- **External** — character against another character, society or nature.
- **Internal** — a character's struggle **within their own mind**.

## Character terms

- **Protagonist** — the **hero**/main character the play centres on.
- **Antagonist** — the **opponent** who creates the conflict.
- **Tragic hero** — the protagonist of a tragedy, a character of **high standing** who is brought to ruin.
- **Tragic flaw (hamartia)** — a flaw that **leads to a substantial error in judgment** and to the hero's downfall (often **hubris** — excessive pride).

## Dialogue and speech

- **Dialogue** — the **words directly spoken** by characters; a play is written in dialogue.
- **Soliloquy** — an extended speech by a character **alone on stage**, often addressing the audience.

## Irony

- **Irony** makes visible a **contrast between appearance and reality**.
- **Verbal irony** — saying one thing and meaning the reverse.
- **Situational irony** — an expectation reversed by the outcome.
- **Dramatic irony** — the **audience knows something a character does not**.

## The kinds of drama

- **Tragedy** — serious; a protagonist's downfall; provokes **pity and fear**.
- **Comedy** — light; humorous; ends happily.
- **Tragicomedy** — a blend of tragic and comic elements; often a happy or ambiguous ending.
- **Melodrama** — action over character; one-dimensional good-versus-evil figures; usually a happy ending.

## Glossary at a glance

| Term | Meaning |
| --- | --- |
| Exposition | opening that sets scene and background |
| Climax | moment of greatest tension |
| Resolution | the problem brought to finality |
| Protagonist | main character/hero |
| Antagonist | the opponent |
| Tragic flaw | the error that causes the downfall |
| Dramatic irony | audience knows what a character does not |

## Common errors and misconceptions

- **Confusing climax with ending** — the **climax** is the turning point of highest tension; the **resolution** is the ending.
- **Thinking a tragic flaw is just "being bad"** — it is a **flaw or error in judgment** (often pride) in an otherwise notable figure.
- **Confusing the three ironies** — verbal (say the reverse), situational (outcome reversed), dramatic (audience knows more than a character).
- **Mixing up protagonist and antagonist** — protagonist = hero; antagonist = opponent.`,
      workedExample: `**Task.** Define the tragic hero and tragic flaw, and explain how they work with plot and dramatic irony in a tragedy, using a general model.

**Model answer**

**The tragic hero and tragic flaw**
- A **tragic hero** is the protagonist of a tragedy — a character of **high standing** who is brought to ruin.
- The ruin comes from a **tragic flaw (hamartia)** — a flaw that **leads to a substantial error in judgment**, often **hubris (excessive pride)**.
- The hero's suffering provokes **pity and fear** in the audience.

**How it plays out in the plot**
- **Exposition:** the hero is introduced at a height of standing.
- **Rising action:** the flaw begins to drive poor decisions; conflicts build.
- **Climax:** the flaw produces the error that turns the hero's fortune — the moment of greatest tension.
- **Falling action → resolution:** the consequences unfold and the hero falls; the problem reaches finality.

**Where dramatic irony fits**
- **Dramatic irony** occurs when the **audience knows something the hero does not** — for instance, that a trusted ally is false, or that a choice will be fatal.
- This gap makes the audience feel **fear and pity** as they watch the hero move, blind, toward the downfall they can foresee.

**Conclusion:** in a tragedy the **tragic hero's flaw** drives an **error in judgment** that reaches crisis at the **climax** and ends in downfall at the **resolution**; **dramatic irony** deepens the effect by letting the audience see the danger the hero cannot. Naming each device is only half the task — explain how it works in the play.`,
      quiz: [
        { prompt: "The opening portion that sets the scene and gives background is the", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition introduces the situation." },
        { prompt: "The moment of greatest tension in a plot is the", options: ["climax", "exposition", "resolution", "rising action"], correctIndex: 0, explanation: "The climax is the turning point of highest tension." },
        { prompt: "The problem brought to finality is the", options: ["resolution", "exposition", "climax", "rising action"], correctIndex: 0, explanation: "The resolution/denouement ends the plot." },
        { prompt: "The complications the protagonist must face form the", options: ["rising action", "exposition", "resolution", "denouement"], correctIndex: 0, explanation: "Rising action builds the conflict." },
        { prompt: "The central struggle in a drama is the", options: ["conflict", "setting", "prop", "cast"], correctIndex: 0, explanation: "Conflict is the play's problem." },
        { prompt: "The hero/main character of a play is the", options: ["protagonist", "antagonist", "foil", "chorus"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The opponent who creates the conflict is the", options: ["antagonist", "protagonist", "narrator", "prop"], correctIndex: 0, explanation: "The antagonist opposes the protagonist." },
        { prompt: "The protagonist of a tragedy, of high standing and brought to ruin, is the", options: ["tragic hero", "comic hero", "narrator", "foil"], correctIndex: 0, explanation: "The tragic hero falls from high standing." },
        { prompt: "A flaw that leads to a substantial error in judgment is the", options: ["tragic flaw (hamartia)", "climax", "resolution", "dialogue"], correctIndex: 0, explanation: "The tragic flaw causes the downfall." },
        { prompt: "Excessive pride, often the tragic flaw, is called", options: ["hubris", "catharsis", "dialogue", "exposition"], correctIndex: 0, explanation: "Hubris is excessive pride." },
        { prompt: "The words directly spoken by characters are the", options: ["dialogue", "stage directions", "props", "theme"], correctIndex: 0, explanation: "A play is written in dialogue." },
        { prompt: "An extended speech alone on stage is a", options: ["soliloquy", "dialogue", "prologue", "prop"], correctIndex: 0, explanation: "A soliloquy is spoken alone." },
        { prompt: "Irony makes visible a contrast between", options: ["appearance and reality", "day and night", "acids and bases", "buyers and sellers"], correctIndex: 0, explanation: "Irony contrasts appearance and reality." },
        { prompt: "When a speaker says one thing and means the reverse, this is", options: ["verbal irony", "situational irony", "dramatic irony", "hubris"], correctIndex: 0, explanation: "Verbal irony says the opposite." },
        { prompt: "When the audience knows something a character does not, this is", options: ["dramatic irony", "verbal irony", "hubris", "exposition"], correctIndex: 0, explanation: "Dramatic irony is the audience's superior knowledge." },
        { prompt: "A serious play with a protagonist's downfall is a", options: ["tragedy", "comedy", "melodrama", "farce"], correctIndex: 0, explanation: "Tragedy ends in downfall." },
        { prompt: "A light play ending happily is a", options: ["comedy", "tragedy", "melodrama", "elegy"], correctIndex: 0, explanation: "Comedy ends happily." },
        { prompt: "A blend of tragic and comic elements is a", options: ["tragicomedy", "farce", "history", "sonnet"], correctIndex: 0, explanation: "Tragicomedy blends the two." },
        { prompt: "Confusing the climax with the ending is wrong because the climax is the", options: ["turning point of highest tension", "final scene", "cast list", "title"], correctIndex: 0, explanation: "The climax is the turning point, not the ending." },
        { prompt: "A play that stresses action over character with good/evil types is a", options: ["melodrama", "tragedy", "tragicomedy", "sonnet"], correctIndex: 0, explanation: "Melodrama uses simple good/evil characters." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the five parts of a plot in order and define the climax and the resolution.", answerKey: "Exposition → rising action → climax → falling action → resolution. Climax — the moment of greatest tension when the problem is confronted. Resolution (denouement) — the problem brought to finality, not necessarily happily. Award 3 for the ordered parts and 1 per definition.", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Define 'tragic hero' and 'tragic flaw', and explain how they are connected.", answerKey: "A tragic hero is the protagonist of a tragedy — a character of high standing who is brought to ruin. A tragic flaw (hamartia) is a flaw that leads to a substantial error in judgment. They are connected because the hero's tragic flaw causes the error that brings about the downfall. Award 2 per definition and 1 for the connection.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "'The audience knows the ally is false, but the hero trusts him' illustrates", options: ["dramatic irony", "verbal irony", "hubris", "exposition"], correctIndex: 0, answerKey: "Dramatic irony — the audience knows what the character does not. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish verbal, situational and dramatic irony with one example each.", answerKey: "Verbal — a speaker says one thing and means the reverse (e.g. 'What lovely weather!' in a storm). Situational — the outcome reverses expectation (e.g. a lifeguard who drowns). Dramatic — the audience knows something a character does not. Award 1 per type named, 1 per example (max 6).", marks: 6 },
        { type: "ESSAY", prompt: "Using a tragedy you have studied, discuss how the tragic hero's flaw drives the plot to a climax and resolution, and how one form of irony deepens the effect. Support your answer with reference to the text.", answerKey: "Award marks for: identification of the tragic hero and tragic flaw, 6 marks; tracing how the flaw drives the plot to climax and resolution, 8 marks; analysis of one form of irony and its effect, 6 marks; textual reference, 2 marks; expression, 2 marks. A response that only summarises the plot without using the terms analytically should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Genres and Styles; Fiction and Drama - types, terms (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.05%3A_Genres_and_Styles)
      slug: "similarities-and-differences-in-drama",
      title: "Similarities and Differences in Drama",
      objective:
        "By the end of the topic, learners should be able to compare and contrast the kinds of drama, identifying what all drama shares and what distinguishes tragedy, comedy, tragicomedy and melodrama.",
      estimatedMinutes: 150,
      notes: `## What all drama shares (the similarities)

Every kind of drama, whatever its tone, has the same **elements**:
- It is **written to be performed**, told through **dialogue and action**.
- It has **characters** (protagonist, antagonist, others) revealed through characterisation.
- It has a **plot** built on **conflict** (exposition → rising action → climax → falling action → resolution).
- It has a **theme** — the ideas it conveys.
- It has a **setting** — a time and place.
- It uses **stage directions** and is divided into **acts and scenes**.

These shared features mean the **same analytical tools** work for any play.

## What distinguishes the kinds (the differences)

The kinds of drama differ by **tone, characters, choices and ending**:

| Kind | Tone | Characters | Ending | Feeling |
| --- | --- | --- | --- | --- |
| Tragedy | serious | noble, complex | downfall | pity and fear |
| Comedy | light | common, stock | happy | laughter |
| Tragicomedy | mixed | everyday | happy/ambiguous | both |
| Melodrama | heightened | good vs evil | happy | suspense |

## Comparing well

To **compare** two kinds (or two plays), examine them **side by side** and **link** them, rather than describing each separately:
- Note what they **share** (both are performed; both have plot, character, conflict, theme).
- Note where they **differ** (tone, the choices characters face, the ending, the feeling produced).
- Use linking language: *"Both … , but whereas the first … , the second … ."*

## Why it matters

- Seeing the **similarities** shows that one set of tools analyses all drama.
- Seeing the **differences** lets you **classify** a play and understand the effect its kind is designed to produce.

## Common errors and misconceptions

- **Describing each kind separately instead of comparing** — a real comparison **links** them.
- **Forgetting the shared elements** — all drama shares plot, character, conflict, theme and performance.
- **Reducing the difference to "happy or sad"** — also consider **tone, characters and the feeling produced**.
- **Assuming a play fits one kind perfectly** — many plays **blend** kinds (tragicomedy).`,
      workedExample: `**Task.** Compare tragedy and comedy, showing both what they share and how they differ.

**Model answer (linked comparison)**

**What they share**
Both tragedy and comedy are **drama**: both are written to be **performed** through **dialogue and action**; both have **characters** revealed through characterisation, a **plot** built on **conflict** (exposition → climax → resolution), a **theme**, and a **setting**. The **same tools** analyse both.

**How they differ**
- **Tone:** tragedy is **serious**, whereas comedy is **light**.
- **Characters:** classic tragedy uses **noble** figures facing **ethical** choices; comedy uses **common** people facing **practical** ones.
- **Ending:** tragedy ends in the protagonist's **downfall**, whereas comedy **ends happily**.
- **Feeling:** tragedy provokes **pity and fear**; comedy generates **laughter**.

**Linked statement:** *Both tragedy and comedy are performed plays built on conflict, but whereas tragedy follows a noble hero to a serious downfall that stirs pity and fear, comedy follows common people through practical confusions to a happy, laughter-filled ending.*

**Conclusion:** a strong comparison names the **shared elements** and then the **differences** in tone, characters, ending and feeling — linking the two kinds rather than describing each in turn.`,
      quiz: [
        { prompt: "All kinds of drama are written to be", options: ["performed", "read silently only", "sung", "printed as novels"], correctIndex: 0, explanation: "Performance is common to all drama." },
        { prompt: "All drama shares a plot built on", options: ["conflict", "rhyme", "metre", "maps"], correctIndex: 0, explanation: "Conflict drives every play's plot." },
        { prompt: "A feature shared by all kinds of drama is", options: ["characters revealed through characterisation", "a happy ending", "a tragic hero", "petty violence"], correctIndex: 0, explanation: "All drama has characters." },
        { prompt: "The kinds of drama differ mainly by tone, characters, choices and", options: ["ending", "price", "printer", "page count"], correctIndex: 0, explanation: "The ending is a key difference." },
        { prompt: "Tragedy differs from comedy in tone by being", options: ["serious rather than light", "light rather than serious", "silent", "numerical"], correctIndex: 0, explanation: "Tragedy is serious; comedy is light." },
        { prompt: "The feeling produced by tragedy is", options: ["pity and fear", "laughter", "boredom", "nothing"], correctIndex: 0, explanation: "Tragedy provokes pity and fear." },
        { prompt: "The feeling produced by comedy is", options: ["laughter", "pity and fear", "dread", "grief only"], correctIndex: 0, explanation: "Comedy generates laughter." },
        { prompt: "A real comparison should", options: ["link the two kinds, not describe each separately", "describe only one", "avoid both", "list prices"], correctIndex: 0, explanation: "Linking is the key skill." },
        { prompt: "Useful linking language is", options: ["'Both …, but whereas …, …'", "'The end.'", "'Chapter one.'", "'The price is …'"], correctIndex: 0, explanation: "Linking phrases connect the two." },
        { prompt: "Because all drama shares elements, the same tools of", options: ["analysis work for any play", "chemistry work", "geometry work", "accounting work"], correctIndex: 0, explanation: "One set of tools analyses all drama." },
        { prompt: "Comedy characters face", options: ["practical choices", "only ethical dilemmas", "no choices", "military choices"], correctIndex: 0, explanation: "Comedy involves practical choices." },
        { prompt: "Classic tragedy characters face", options: ["ethical choices with high stakes", "no choices", "only jokes", "shopping choices"], correctIndex: 0, explanation: "Tragedy involves grave ethical choices." },
        { prompt: "A play that blends tragic and comic elements is a", options: ["tragicomedy", "pure tragedy", "pure comedy", "farce"], correctIndex: 0, explanation: "Many plays blend kinds." },
        { prompt: "Reducing the difference to 'happy or sad' ignores tone, characters and the", options: ["feeling produced", "printer", "price", "cover"], correctIndex: 0, explanation: "Consider the feeling the kind produces." },
        { prompt: "All drama is divided into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are shared units." },
        { prompt: "Melodrama differs from tragedy by using characters that are", options: ["one-dimensional good/evil", "deeply complex", "noble and tragic", "narrators"], correctIndex: 0, explanation: "Melodrama uses simple good/evil types." },
        { prompt: "The similarities among the kinds show that drama has one shared set of", options: ["elements", "prices", "printers", "covers"], correctIndex: 0, explanation: "Shared elements unite all drama." },
        { prompt: "Recognising a play's kind lets you understand the effect its kind is designed to", options: ["produce", "sell", "print", "hide"], correctIndex: 0, explanation: "Each kind aims at a particular effect." },
        { prompt: "A comparison that describes text 1 then text 2 separately is", options: ["weak (not linked)", "ideal", "the best method", "required"], correctIndex: 0, explanation: "Comparison must link the two." },
        { prompt: "Two kinds of drama can be compared by their", options: ["tone, characters, ending and feeling", "prices", "printers", "page numbers"], correctIndex: 0, explanation: "Compare by tone, characters, ending and feeling." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three features that ALL kinds of drama share.", answerKey: "Any three: written to be performed (dialogue and action); characters revealed through characterisation; a plot built on conflict; a theme; a setting; division into acts and scenes; use of stage directions. Award 1 mark each (max 3).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a DIFFERENCE between tragedy and comedy, not a similarity?", options: ["the ending (downfall vs happy)", "both are performed", "both have a plot", "both have characters"], correctIndex: 0, answerKey: "The ending differs; the rest are shared. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give a linked comparison sentence contrasting tragedy and comedy by tone and ending.", answerKey: "Accept a single linked sentence such as: 'Both are performed plays built on conflict, but whereas tragedy is serious and ends in the hero's downfall, comedy is light and ends happily.' Award 3 for correct content and 2 for genuinely linking (not two separate descriptions).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Explain why the similarities among the kinds of drama are useful to a student of literature.", answerKey: "Because all drama shares the same elements (performance, plot, character, conflict, theme, setting), the same analytical tools work for any play; recognising the shared framework lets a student approach an unfamiliar play with confidence. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Compare and contrast two kinds of drama (or two plays of different kinds) you have studied, showing both what they share and how they differ in tone, characters, ending and effect. Link the two throughout.", answerKey: "Award marks for: identification of the shared elements, 6 marks; contrast by tone, characters, ending and effect, 10 marks; genuine linked comparison (not two separate descriptions) — the discriminating requirement — 6 marks; expression, 2 marks. Two separate descriptions with no linking should not exceed 10.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Playwriting (Garcia); How to Read a Play (Theatre Appreciation) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Playwriting_(Garcia)/01%3A_Chapters/1.01%3A_Playwriting)
      slug: "play-writing-and-acting",
      title: "Play Writing and Acting",
      objective:
        "By the end of the topic, learners should be able to write a short play using dialogue, action and stage directions, and describe how a play is brought to life in performance.",
      estimatedMinutes: 150,
      notes: `## Writing a play

- A **play is a story told through dialogue and action**, built around a **central problem** the characters try to solve.
- The playwright is a **world builder** — responsible for the **world, the characters, the conflict**, and for building **rising tension**.
- Use the plot arc: **exposition → rising action → climax → falling action → resolution**.

## The building blocks

- **Dialogue** — the spoken words; it drives the plot, develops relationships and reveals emotion. Give each character a **distinctive voice** (rhythm and vocabulary).
- **Action** — the physical movements of the characters.
- **Stage directions** — instructions for movement, scenery, sounds, props and pauses; usually **italicised and separate** from the dialogue.
- **Acts and scenes** — units of the play; a scene fixes a place and moment.

## Steps to write a short play

1. **Choose a conflict** — a problem two or more characters face.
2. **Create the characters** — give each a clear want and a distinct voice.
3. **Set the scene** — write a stage direction for the place and time.
4. **Write the dialogue** so the tension **rises** toward a climax.
5. **Resolve** the problem at the end.

## Acting: bringing a play to life

- A written play is a **set of instructions for performance**; acting completes it.
- Actors use the **dialogue** and **stage directions** to know their lines, movements, entrances and exits.
- Acting adds **voice, movement, gesture and pause** — meaning that lives in performance, not on the page.
- To rehearse: **assign parts, read aloud, and act out** the scene, following the stage directions.

## Common errors and misconceptions

- **Writing narrative prose instead of a script** — use **dialogue, action and stage directions**.
- **No central conflict** — a play needs a **problem** to drive it.
- **Identical character voices** — each character should sound **distinct**.
- **Treating stage directions as optional** — they guide the actors and carry meaning.`,
      workedExample: `**Task.** Plan and draft the opening of a short play, then explain how actors would bring it to life.

**Step 1 — plan.**
- **Conflict:** two siblings, AMA and KOJO, disagree over selling the family's only goat to pay school fees.
- **Characters:** AMA (practical, protective), KOJO (proud, hopeful).
- **Setting (stage direction):** a small yard at dusk; a goat tied to a post.

**Step 2 — draft (script form).**

*A small yard at dusk. A goat is tied to a post. AMA folds washing. KOJO enters, holding a school notice.*

**KOJO:** They say I can sit the exam — if the fee is paid by Friday.

**AMA:** *(not looking up)* And what would you sell, brother? The roof over us?

**KOJO:** The goat. One goat, for one chance.

*AMA stops folding and turns to face him.*

**AMA:** That goat is next year's meat, and the year after's kid. You would eat the future to feed today.

**Step 3 — how actors bring it to life.**
- They follow the **dialogue** for their lines and the **stage directions** for movement (AMA folding, then turning; KOJO entering with the notice).
- Acting adds **voice** (Ama weary, Kojo eager), **gesture** and **pause** — for example, the silence when Ama turns to face Kojo raises the tension.
- The scene would be rehearsed by **assigning parts and reading aloud**, then acting it with the movements.

**Conclusion:** writing a play means telling the story through **dialogue, action and stage directions** around a **central conflict**; acting completes it by turning those instructions into **live performance**.`,
      quiz: [
        { prompt: "A play is a story told through", options: ["dialogue and action", "description only", "rhyme only", "narration only"], correctIndex: 0, explanation: "Plays use dialogue and action." },
        { prompt: "A play is built around a central", options: ["conflict/problem", "song", "map", "price list"], correctIndex: 0, explanation: "A problem drives the play." },
        { prompt: "The playwright is a", options: ["world builder", "ticket seller", "printer", "usher"], correctIndex: 0, explanation: "The playwright builds the world, characters and conflict." },
        { prompt: "Instructions for movement, scenery and props are", options: ["stage directions", "dialogue", "themes", "climaxes"], correctIndex: 0, explanation: "Stage directions give the mechanics." },
        { prompt: "Stage directions are usually", options: ["italicised and separate from dialogue", "sung", "hidden", "spoken by the audience"], correctIndex: 0, explanation: "They are set apart from the dialogue." },
        { prompt: "Each character should have a", options: ["distinctive voice", "identical voice", "no voice", "single word"], correctIndex: 0, explanation: "Distinct voices keep characters distinct." },
        { prompt: "A play is divided into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units." },
        { prompt: "The plot arc to build a play ends in", options: ["resolution", "exposition", "the cast list", "the price"], correctIndex: 0, explanation: "The arc ends in resolution." },
        { prompt: "A written play is a set of instructions for", options: ["performance", "printing", "selling", "singing"], correctIndex: 0, explanation: "Acting completes the play." },
        { prompt: "Actors learn their movements and entrances from the", options: ["stage directions", "index", "glossary", "price list"], correctIndex: 0, explanation: "Stage directions guide the actors." },
        { prompt: "Acting adds voice, movement, gesture and", options: ["pause", "footnotes", "chapters", "prices"], correctIndex: 0, explanation: "Performance adds meaning beyond the page." },
        { prompt: "To rehearse a scene, learners should", options: ["assign parts, read aloud and act it out", "read only the last line", "skip the dialogue", "print more copies"], correctIndex: 0, explanation: "Reading aloud and acting brings it to life." },
        { prompt: "Writing narrative prose instead of a script is wrong because a play uses", options: ["dialogue, action and stage directions", "only description", "only rhyme", "only footnotes"], correctIndex: 0, explanation: "A play is a script." },
        { prompt: "The first step in writing a short play is to choose a", options: ["conflict", "printer", "ticket price", "cover"], correctIndex: 0, explanation: "Start from a problem the characters face." },
        { prompt: "Dialogue drives the plot and reveals a character's", options: ["emotion and relationships", "ticket price", "printer", "seat number"], correctIndex: 0, explanation: "Dialogue reveals emotion and develops relationships." },
        { prompt: "The physical movements of the characters are the", options: ["action", "dialogue", "theme", "props"], correctIndex: 0, explanation: "Action is physical movement." },
        { prompt: "A scene fixes a", options: ["place and moment of the action", "ticket price", "printer", "page number"], correctIndex: 0, explanation: "A scene sets a place and moment." },
        { prompt: "The dialogue in a good scene should build the", options: ["tension toward a climax", "price", "index", "cover"], correctIndex: 0, explanation: "Rising tension leads to a climax." },
        { prompt: "Meaning in a play lives, above all, in", options: ["performance", "the price", "the cover", "the index"], correctIndex: 0, explanation: "Drama is completed in performance." },
        { prompt: "Treating stage directions as optional is wrong because they", options: ["guide actors and carry meaning", "set the price", "name the printer", "count pages"], correctIndex: 0, explanation: "Stage directions guide the performance." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three building blocks you write a play with, and the role of each.", answerKey: "Dialogue — the spoken words that drive the plot, develop relationships and reveal emotion; action — the physical movements of the characters; stage directions — instructions for movement, scenery, sounds, props and pauses. Award 1 mark per block named with its role (max 3), rounded up for a complete answer.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A written play is best described as", options: ["a set of instructions for performance", "a finished novel", "a list of prices", "a poem in stanzas"], correctIndex: 0, answerKey: "A play is a script completed by performance. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the five steps for writing a short play.", answerKey: "1. Choose a conflict; 2. Create the characters (each with a want and a distinct voice); 3. Set the scene with a stage direction; 4. Write dialogue so tension rises to a climax; 5. Resolve the problem. Award 1 mark each (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Explain how acting completes a written play.", answerKey: "A written play is only a set of instructions; actors use the dialogue and stage directions to know their lines, movements, entrances and exits, and add voice, movement, gesture and pause — meaning that lives in performance, not on the page. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Write a short scene (about 10–15 lines) for two characters built around a clear conflict, in correct script form, then explain briefly how actors would perform it. Give each character a distinct voice and use stage directions.", answerKey: "Award marks for: correct script form with dialogue and italicised stage directions, 6 marks; a clear central conflict, 6 marks; two distinct voices, 4 marks; an explanation of how actors would perform it (voice, movement, following stage directions), 6 marks; coherence and rising tension, 2 marks. A narrative-prose answer should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
