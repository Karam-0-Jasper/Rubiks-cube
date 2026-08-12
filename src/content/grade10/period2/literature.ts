import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester One, Period II: Figurative Expressions and Shakespearean
// Drama. The Grade 10 Period II CONTENTS list has five top-level items, each
// rebuilt here as its own topic: (1) Various types of drama, (2) The traits and
// roles of characters in a drama, (3) Shakespearean Drama (Midsummer Night's
// Dream), (4) Figurative expressions, (5) Drama writing. Literary concepts are
// sourced from LibreTexts (Humanities). A Midsummer Night's Dream is the named
// set text; set-text-specific facts are NOT invented — the general skills of
// interpreting a Shakespearean (classic verse) drama are taught and the set
// text is flagged as the teaching target.
export const literatureG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Types of Drama, Character and Drama Writing",
  summary:
    "Period II of the MoE Grade 10 Literature syllabus. Its five CONTENTS items are taught as five topics: the various types of drama; the traits and roles of characters; interpreting a Shakespearean drama; figurative expressions; and drama writing.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Genres and Styles (Theatre Appreciation); Fiction and Drama - types, terms (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.05%3A_Genres_and_Styles)
      slug: "types-of-drama",
      title: "The Various Types of Drama",
      objective:
        "By the end of the topic, learners should be able to name and describe the various types of drama — tragedy, comedy, tragicomedy, melodrama and farce — and distinguish them by tone, characters and ending.",
      estimatedMinutes: 150,
      notes: `## Drama and its types

- **Drama** is literature written to be **performed**, told through **dialogue and action** and organised into acts and scenes.
- Plays are grouped into **types (genres)** by their **tone**, the kinds of choices characters face, and how they end.

## Tragedy

- **Serious in tone**, focusing on a protagonist who experiences an **eventual downfall**.
- Classic tragedy uses **noble characters**, **ethical choices** with high stakes and **heightened language such as verse**.
- Provokes **pity and fear** in the audience.

## Comedy

- **Light in tone**, employs **humour**, and **ends happily**.
- Characters face **practical choices** and are usually common people from stock types.
- Uses **misunderstandings, mistaken identity and physical comedy**.

## Tragicomedy

- A **hybrid** that **combines tragic and comic elements**.
- Everyday characters, serious subjects, but a **happy or ambiguous ending** rather than a tragic one.

## Melodrama

- Emphasises **action over character**.
- Features **one-dimensional characters** in a clear division of **good versus evil**, ordinary people in extraordinary circumstances, usually ending happily.

## Farce

- An **extreme form of comedy**: **fast-paced**, with **larger-than-life movements** and often petty violence.

## Comparing the types

| Type | Tone | Characters | Ending |
| --- | --- | --- | --- |
| Tragedy | serious | noble, complex | downfall |
| Comedy | light | common, stock | happy |
| Tragicomedy | mixed | everyday | happy/ambiguous |
| Melodrama | heightened | good vs evil | happy |
| Farce | light, extreme | exaggerated | happy |

## Common errors and misconceptions

- **Thinking any sad play is a tragedy** — tragedy specifically follows a **downfall** and provokes pity and fear.
- **Thinking comedy just means jokes** — comedy is defined by **light tone and happy ending**.
- **Forgetting tragicomedy blends the two** — it mixes serious and comic and often ends happily.
- **Confusing melodrama with tragedy** — melodrama uses **simple good/evil characters** and stresses **action over character**.`,
      workedExample: `**Task.** Match each play description to its type and justify.

**(a)** A noble general, undone by his own jealousy, dies at the end; the audience feels pity and fear.
- **Type: tragedy.** Serious tone, a noble protagonist's **downfall** through a flaw, and the response of **pity and fear**.

**(b)** Confused lovers chase the wrong partners through mistaken identity, and all are happily paired off at the end.
- **Type: comedy.** Light tone, **mistaken identity**, and a **happy ending** after confusion.

**(c)** Ordinary villagers face a wicked landlord in a story of pure good against pure evil; good triumphs and all ends well.
- **Type: melodrama.** **One-dimensional good-versus-evil** characters, **action over character**, and a happy ending.

**(d)** A family faces a genuine danger and real grief, but the crisis passes and the play closes on reconciliation.
- **Type: tragicomedy.** Serious matter (danger, grief) with a **happy/ambiguous ending** — the blend of the two kinds.

**Conclusion:** identify a play's type by its **tone, its characters, the choices they face and its ending**. Serious + downfall + pity and fear = tragedy; light + comic devices + happy ending = comedy; a blend = tragicomedy; simple good/evil + action = melodrama.`,
      quiz: [
        { prompt: "A serious play following a protagonist to a downfall is a", options: ["tragedy", "comedy", "farce", "melodrama"], correctIndex: 0, explanation: "Tragedy is serious and ends in downfall." },
        { prompt: "A light play that uses humour and ends happily is a", options: ["comedy", "tragedy", "tragicomedy", "elegy"], correctIndex: 0, explanation: "Comedy is light and ends happily." },
        { prompt: "A play combining tragic and comic elements is a", options: ["tragicomedy", "farce", "melodrama", "history"], correctIndex: 0, explanation: "Tragicomedy is a hybrid." },
        { prompt: "A type stressing action over character with good-versus-evil types is", options: ["melodrama", "tragedy", "tragicomedy", "sonnet"], correctIndex: 0, explanation: "Melodrama emphasises action and simple characters." },
        { prompt: "A fast-paced, extreme comedy is a", options: ["farce", "tragedy", "melodrama", "history"], correctIndex: 0, explanation: "Farce is an extreme comedy." },
        { prompt: "The audience of a tragedy is meant to feel", options: ["pity and fear", "only laughter", "boredom", "nothing"], correctIndex: 0, explanation: "Tragedy provokes pity and fear." },
        { prompt: "Classic tragedy uses characters of", options: ["noble/high standing", "no standing", "only children", "only servants"], correctIndex: 0, explanation: "Classic tragic heroes are noble." },
        { prompt: "Comic characters usually face", options: ["practical choices", "only ethical dilemmas", "no choices", "military choices"], correctIndex: 0, explanation: "Comedy involves practical choices." },
        { prompt: "Mistaken identity is a device of", options: ["comedy", "tragedy", "melodrama", "elegy"], correctIndex: 0, explanation: "Mistaken identity is a comic device." },
        { prompt: "A tragicomedy often ends", options: ["happily or ambiguously", "always in death", "with no ending", "in the exposition"], correctIndex: 0, explanation: "It often ends happily or ambiguously." },
        { prompt: "Melodrama characters are typically", options: ["one-dimensional, good or evil", "deeply complex", "all narrators", "invisible"], correctIndex: 0, explanation: "Simple good/evil characters mark melodrama." },
        { prompt: "Drama is told through dialogue and", options: ["action", "narration only", "rhyme only", "song only"], correctIndex: 0, explanation: "Plays are told through dialogue and action." },
        { prompt: "Comedy is defined mainly by its", options: ["light tone and happy ending", "number of acts", "use of verse", "sad ending"], correctIndex: 0, explanation: "Light tone and happy ending define comedy." },
        { prompt: "A sad play is a tragedy only if it follows a", options: ["protagonist's downfall", "happy couple", "comic subplot", "list of songs"], correctIndex: 0, explanation: "Tragedy requires a downfall." },
        { prompt: "Modern tragedy often features", options: ["ordinary people facing relatable challenges", "only kings", "no characters", "only animals"], correctIndex: 0, explanation: "Modern tragedy shifts to ordinary people." },
        { prompt: "Farce emphasises", options: ["larger-than-life movements", "quiet realism", "tragic downfall", "verse speeches"], correctIndex: 0, explanation: "Farce uses exaggerated physical comedy." },
        { prompt: "Which type has a mixed tone?", options: ["tragicomedy", "pure tragedy", "pure comedy", "elegy"], correctIndex: 0, explanation: "Tragicomedy blends serious and comic tones." },
        { prompt: "Classic tragedies often use", options: ["heightened language such as verse", "no language", "only songs", "only mime"], correctIndex: 0, explanation: "Verse marks classic tragedy." },
        { prompt: "To classify a play's type, examine tone, characters, choices and", options: ["ending", "price", "printer", "cover"], correctIndex: 0, explanation: "The ending is a key clue." },
        { prompt: "Which feeling belongs with comedy?", options: ["laughter", "pity and fear", "dread", "grief only"], correctIndex: 0, explanation: "Comedy generates hilarity and laughter." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name and briefly define five types of drama.", answerKey: "Tragedy — serious, protagonist's downfall, pity and fear. Comedy — light, humorous, happy ending. Tragicomedy — hybrid of tragic and comic, often happy/ambiguous ending. Melodrama — action over character, one-dimensional good/evil, usually happy. Farce — extreme, fast-paced comedy with exaggerated movement. Award 1 mark per type named and defined.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which type stresses action over character and uses one-dimensional good/evil figures?", options: ["melodrama", "tragedy", "tragicomedy", "farce"], correctIndex: 0, answerKey: "Melodrama. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish tragedy from comedy by tone, characters' choices and ending.", answerKey: "Tragedy: serious tone, ethical/high-stakes choices, ends in downfall (pity and fear). Comedy: light tone, practical choices, ends happily. Award marks for each of the three points of contrast.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A play mixes real danger and grief with a reconciling, happy ending. Name its type and justify.", answerKey: "Tragicomedy — it blends serious (tragic) elements with a happy/ambiguous (comic) ending, the defining feature of the hybrid. Award 2 for the type and 3 for justification.", marks: 5 },
        { type: "ESSAY", prompt: "Using plays you have studied or read, discuss at least three types of drama, showing how each is distinguished by tone, characters and ending.", answerKey: "Award marks for: at least three types correctly named and described, 9 marks; distinction by tone, characters and ending applied to examples, 9 marks; textual/illustrative support and expression, 6 marks. A list of definitions with no application to examples should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Drama; How to Analyze Fiction: Elements of Literature (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama)
      slug: "character-traits-and-roles",
      title: "The Traits and Roles of Characters in a Drama",
      objective:
        "By the end of the topic, learners should be able to distinguish a character's traits from their role, classify character types, and explain how characterisation reveals traits, using trait–evidence–method.",
      estimatedMinutes: 150,
      notes: `## Traits and roles

- A **trait** is a **quality** of a character — brave, proud, jealous, loyal, cunning.
- A **role** is the **function** the character serves in the play — protagonist, antagonist, foil, helper, comic figure.
- A full answer names **both**: the trait (the quality) and the role (the function).

## Character types (roles)

- **Protagonist** — the **hero**, the main character the play centres on, usually with the most lines.
- **Antagonist** — the **opponent** set against the protagonist, creating the conflict.
- **Foil** — a character who **defines another through contrast** (juxtaposition), making the other's qualities stand out.
- **Round character** — complex and well developed; **flat character** — built on one or two traits.
- **Dynamic character** — one who **changes**; **static character** — one who stays the same.

## How traits are revealed (characterisation)

**Characterisation** deals with how characters are described and revealed. In drama, character is shown through:
1. **What the character says** — words, opinions, language.
2. **What the character does** — actions and decisions.
3. **What other characters say** about them.
4. **Appearance and stage directions.**
5. **Soliloquy** — a speech alone on stage revealing inner thoughts.

## The trait–evidence–method routine

To analyse a character well:
1. **Name the trait** (a quality).
2. **Give the evidence** (a specific line or action).
3. **State the method** (which of the five ways above reveals it).

Then link the trait and role to the play's **theme**.

## Set text (to be supplied by the teacher)

- The syllabus pairs this topic with the set play(s). Apply the routine to the play's characters: name a trait, cite the evidence from the text, state the method, and note the character's role.
- *(Specific facts about named characters are drawn from the play itself, not invented here.)*

## Common errors and misconceptions

- **Confusing a trait with a role** — a **trait** is a *quality*; a **role** is a *function*.
- **Naming a trait with no evidence** — always give the line or action that shows it.
- **Mixing up flat/round with static/dynamic** — depth versus change.
- **Retelling the plot** — examiners reward *trait + evidence + method linked to theme*, not a summary.`,
      workedExample: `**Task.** Show how to analyse a character by trait, evidence, method and role, using a general model.

**Model character:** a proud, ambitious warrior (protagonist of a tragedy).

**Trait 1 — pride**
- **Evidence:** in his speeches he boasts of his own strength and refuses others' help.
- **Method:** characterisation through **what the character says** — his own words expose the pride.

**Trait 2 — ambition**
- **Evidence:** he seizes an opportunity for power at the cost of loyalty to a friend.
- **Method:** characterisation through **what the character does** — his actions under pressure reveal ambition.

**Role**
- He is the **protagonist**, the hero the play centres on. His pride and ambition drive the conflict and lead to his downfall.

**Link to theme**
- His traits (pride, ambition) and role (protagonist) carry the play's theme — *"unchecked ambition destroys the one who holds it."* The character is the vehicle of the idea.

**Conclusion:** name the **trait**, give the **evidence**, state the **method**, identify the **role**, and connect them to the **theme**. Never name a quality without showing how the playwright reveals it, and never confuse the quality (trait) with the function (role).`,
      quiz: [
        { prompt: "A quality of a character, such as brave, is a", options: ["trait", "role", "scene", "prop"], correctIndex: 0, explanation: "A trait is a quality." },
        { prompt: "The function a character serves (protagonist, foil) is their", options: ["role", "trait", "costume", "line"], correctIndex: 0, explanation: "The role is the function." },
        { prompt: "A full character answer names both the trait and the", options: ["role", "ticket price", "printer", "interval"], correctIndex: 0, explanation: "Name the quality and the function." },
        { prompt: "The hero the play centres on is the", options: ["protagonist", "antagonist", "foil", "messenger"], correctIndex: 0, explanation: "The protagonist is the main character." },
        { prompt: "The opponent set against the protagonist is the", options: ["antagonist", "protagonist", "foil", "chorus"], correctIndex: 0, explanation: "The antagonist creates conflict." },
        { prompt: "A character who defines another through contrast is a", options: ["foil", "protagonist", "narrator", "prop"], correctIndex: 0, explanation: "A foil highlights another by contrast." },
        { prompt: "A complex, well-developed character is", options: ["round", "flat", "static", "minor"], correctIndex: 0, explanation: "Round characters have depth." },
        { prompt: "A character built on one or two traits is", options: ["flat", "round", "dynamic", "the antagonist"], correctIndex: 0, explanation: "Flat characters are simple." },
        { prompt: "A character who changes during the play is", options: ["dynamic", "static", "flat", "minor"], correctIndex: 0, explanation: "Dynamic characters change." },
        { prompt: "A character who stays the same is", options: ["static", "dynamic", "round", "the hero"], correctIndex: 0, explanation: "Static characters do not change." },
        { prompt: "Characterisation is how characters are", options: ["described and revealed", "paid", "seated", "counted"], correctIndex: 0, explanation: "It is how characters are made known." },
        { prompt: "A speech alone on stage revealing inner thoughts is a", options: ["soliloquy", "dialogue", "prologue", "prop"], correctIndex: 0, explanation: "A soliloquy is delivered alone." },
        { prompt: "Judging a character by what OTHERS say is", options: ["a method of characterisation", "a stage direction", "an interval", "a prop"], correctIndex: 0, explanation: "Others' comments reveal character." },
        { prompt: "The trait–evidence–method routine ends by linking to the play's", options: ["theme", "price", "printer", "cover"], correctIndex: 0, explanation: "Traits and roles carry theme." },
        { prompt: "Flat vs round describes a character's", options: ["depth", "change", "cost", "costume"], correctIndex: 0, explanation: "Flat/round is depth." },
        { prompt: "Static vs dynamic describes whether a character", options: ["changes", "speaks", "exits", "is major"], correctIndex: 0, explanation: "Static/dynamic is change." },
        { prompt: "Naming a trait requires you also to give", options: ["evidence", "a page count", "the price", "the author's age"], correctIndex: 0, explanation: "Always give the line or action showing the trait." },
        { prompt: "A weakness in character answers is", options: ["retelling the plot", "giving evidence", "naming the method", "linking to theme"], correctIndex: 0, explanation: "Plot summary is not analysis." },
        { prompt: "Confusing a trait and a role means confusing a quality with a", options: ["function", "colour", "price", "scene number"], correctIndex: 0, explanation: "Trait = quality; role = function." },
        { prompt: "A method of revealing character is what the character says and", options: ["does", "eats", "wears only", "is paid"], correctIndex: 0, explanation: "Speech and action reveal character." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a character's trait and their role, giving an example of each.", answerKey: "A trait is a quality (e.g. brave, proud); a role is a function in the play (e.g. protagonist, foil). Example: a character may be cunning (trait) and act as the antagonist (role). Award 2 for the distinction and 1 per example (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which sequence is the recommended routine for analysing a character?", options: ["name the trait, give evidence, state the method", "count lines, guess, stop", "read only the ending", "summarise the plot"], correctIndex: 0, answerKey: "Trait + evidence + method. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the five methods of characterisation used in drama.", answerKey: "What the character says; what the character does; what other characters say about them; appearance/stage directions; soliloquy (inner thoughts spoken alone). Award 1 mark each (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "For a character in a play you have studied, name one trait, give the evidence, and state the method that reveals it.", answerKey: "Accept a clearly named trait paired with a specific piece of evidence (a line or action) and the correct method of characterisation. Award 2 for the trait+evidence and 2 for the method, +1 for accuracy.", marks: 5 },
        { type: "ESSAY", prompt: "Discuss how a playwright uses the traits and roles of characters to develop a theme in a drama you have studied. Analyse at least one character using trait–evidence–method and link it to the theme.", answerKey: "Award marks for: identification of a theme, 4 marks; at least one character analysed by trait + evidence + method, 8 marks; the character's role identified and linked to the theme, 6 marks; textual evidence rather than plot summary, 4 marks; organisation and expression, 2 marks. Plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Genres and Styles; Elements of Drama; How to Read a Play (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.04%3A_How_to_Read_a_Play_and_Watch_a_Production)
      slug: "shakespearean-drama",
      title: "Interpreting Shakespearean Drama",
      objective:
        "By the end of the topic, learners should be able to apply the skills of reading a classic verse drama — following dialogue, stage directions, acts and scenes, and the kinds of drama — to interpret a Shakespearean play.",
      estimatedMinutes: 150,
      notes: `## What Shakespearean drama is (as a form)

- **Drama** is **literature intended for performance**, written in **dialogue** and organised into **acts and scenes**.
- Classic drama of the Shakespearean type uses **heightened language such as verse** and (in tragedy) **noble characters** facing **ethical choices**.
- Shakespeare's plays are usually grouped by their type — **tragedies** (serious, ending in downfall), **comedies** (light, ending happily) and histories.

## Reading a play — the special skills

Because a play is written to be performed, it is read differently from a novel:
- **Plays are written exclusively through dialogue and stage directions** — there are **no narrative paragraphs** telling you how a character feels.
- **Stage directions** tell the director, actors and designers the mechanics: what the space looks like, where characters enter and exit, what they do.
- **Read stage directions as part of the text** — they carry meaning the dialogue does not.
- **Theatre happens live**; imagine the scene in performance as you read.

## Working with verse and older language

- Classic verse drama uses **heightened language** — unfamiliar words and word order, and lines of verse rather than ordinary sentences.
- Strategies: read for the **sense of a whole sentence** (not line by line), look up unfamiliar words, and **read aloud** to hear the rhythm and meaning.

## Applying the tools of drama

Interpret a Shakespearean play with the tools already studied:
- **Kind** — is it a tragedy, comedy or tragicomedy?
- **Plot** — trace exposition → rising action → climax → falling action → resolution.
- **Character** — protagonist, antagonist, foil; traits and roles.
- **Conflict** — the central struggle.
- **Theme** — the ideas the play conveys.
- **Techniques** — soliloquy (thoughts spoken alone), and dramatic irony (the audience knows what a character does not).

## Set text (to be supplied by the teacher)

- The syllabus names **A Midsummer Night's Dream** by William Shakespeare as the set text.
- Study the play itself for its characters, plot, conflicts and themes, applying the reading skills and the tools of drama above.
- *(This note teaches the general skills of interpreting a Shakespearean drama; specific facts about the set play are studied from the play, not invented here.)*

## Common errors and misconceptions

- **Reading a play like a novel** — there are no paragraphs of description; meaning comes from **dialogue and stage directions**.
- **Skipping stage directions** — they carry movement, entrances, exits and mood.
- **Reading verse line by line** — read for the **sense of the whole sentence**.
- **Giving up on old language** — read aloud, use notes, and grasp the overall meaning first.`,
      workedExample: `**Task.** Explain how you would approach interpreting a Shakespearean drama you have not read before.

**Model method**

**Step 1 — establish the kind.** Decide whether the play is a **tragedy** (serious, ending in downfall) or a **comedy** (light, ending happily). This sets your expectations for tone and ending.

**Step 2 — read for dialogue and stage directions.** Remember a play has **no narrative paragraphs**; everything comes from what characters **say** and the **stage directions**. Read the stage directions carefully — they tell you who enters, who exits, and what happens on stage.

**Step 3 — handle the verse.** The language is **heightened** and may use unfamiliar words and word order. Read for the **sense of a whole sentence**, look up hard words, and **read aloud** to hear the rhythm.

**Step 4 — apply the tools of drama.**
- **Plot:** trace exposition → rising action → climax → falling action → resolution.
- **Character:** identify the protagonist, antagonist and any foil; note traits and roles.
- **Conflict:** find the central struggle.
- **Techniques:** watch for **soliloquy** (a character's thoughts spoken alone) and **dramatic irony** (the audience knowing what a character does not).

**Step 5 — draw out the themes.** Ask what ideas the play conveys through its characters and conflict.

**Conclusion:** interpreting a Shakespearean drama means reading it **as a performance text** (dialogue + stage directions), working patiently through the **verse**, and applying the **tools of drama** — kind, plot, character, conflict, technique and theme — to the play itself.`,
      quiz: [
        { prompt: "Drama is literature intended for", options: ["performance", "silent reading only", "singing", "printing in newspapers"], correctIndex: 0, explanation: "Plays are written to be performed." },
        { prompt: "A play is organised into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Plays are divided into acts and scenes." },
        { prompt: "Plays are written exclusively through dialogue and", options: ["stage directions", "narrative paragraphs", "footnotes", "chapter summaries"], correctIndex: 0, explanation: "There are no narrative paragraphs in a play." },
        { prompt: "Stage directions tell us", options: ["the mechanics of the performance", "the ticket price", "the printer's name", "the interval length"], correctIndex: 0, explanation: "They give entrances, exits, space and action." },
        { prompt: "Classic verse drama uses language that is", options: ["heightened", "always plain", "silent", "numerical"], correctIndex: 0, explanation: "Heightened language such as verse marks classic drama." },
        { prompt: "Shakespeare's plays are usually grouped as tragedies, comedies and", options: ["histories", "novels", "essays", "sonnets only"], correctIndex: 0, explanation: "Tragedies, comedies and histories." },
        { prompt: "A good strategy for reading verse is to", options: ["read for the sense of a whole sentence", "read one word per minute", "skip every line", "read only the last line"], correctIndex: 0, explanation: "Read for whole-sentence sense, not line by line." },
        { prompt: "Reading a play like a novel is a mistake because a play has no", options: ["narrative description paragraphs", "characters", "dialogue", "acts"], correctIndex: 0, explanation: "Plays lack narrative paragraphs describing feelings." },
        { prompt: "Stage directions should be", options: ["read as part of the text", "skipped", "read only by actors", "ignored in exams"], correctIndex: 0, explanation: "They carry meaning the dialogue does not." },
        { prompt: "A character's thoughts spoken alone on stage is a", options: ["soliloquy", "dialogue", "prologue", "prop"], correctIndex: 0, explanation: "A soliloquy reveals inner thoughts alone." },
        { prompt: "When the audience knows something a character does not, this is", options: ["dramatic irony", "a metaphor", "a stage direction", "a stanza"], correctIndex: 0, explanation: "That is dramatic irony." },
        { prompt: "Theatre, unlike a novel, happens", options: ["live every time", "only once ever", "on paper only", "in silence"], correctIndex: 0, explanation: "Theatre is a live medium." },
        { prompt: "To interpret a Shakespearean play, first establish its", options: ["kind (tragedy/comedy)", "price", "printer", "page count"], correctIndex: 0, explanation: "The kind sets expectations for tone and ending." },
        { prompt: "A tragedy is expected to end in", options: ["downfall", "a wedding always", "no ending", "a song"], correctIndex: 0, explanation: "Tragedy ends in the protagonist's downfall." },
        { prompt: "A comedy is expected to end", options: ["happily", "in death", "in the exposition", "with no resolution"], correctIndex: 0, explanation: "Comedy ends happily." },
        { prompt: "Reading a play aloud helps because it lets you hear the", options: ["rhythm and meaning", "ticket price", "printer", "page numbers"], correctIndex: 0, explanation: "Reading aloud reveals rhythm and sense." },
        { prompt: "The plot of a play is traced from exposition to", options: ["resolution", "the cover", "the cast list", "the price"], correctIndex: 0, explanation: "Exposition → rising action → climax → falling action → resolution." },
        { prompt: "Which tool identifies the central struggle of the play?", options: ["conflict", "the interval", "the programme", "the seat plan"], correctIndex: 0, explanation: "Conflict is the central struggle." },
        { prompt: "The set text named by the syllabus for this period is", options: ["A Midsummer Night's Dream", "a chemistry manual", "a road map", "a news bulletin"], correctIndex: 0, explanation: "The syllabus names A Midsummer Night's Dream." },
        { prompt: "Facing older, unfamiliar language, a good reader will", options: ["read aloud and use notes to grasp overall meaning", "give up", "skip the play", "read only summaries"], correctIndex: 0, explanation: "Work patiently for the overall meaning." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two ways in which reading a play differs from reading a novel.", answerKey: "A play is written exclusively through dialogue and stage directions, with no narrative paragraphs describing characters' feelings; stage directions carry the mechanics (entrances, exits, action) and must be read as part of the text; a play is written to be performed live. Award marks for any two clear differences.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a Shakespearean play, a character's private thoughts spoken while alone on stage form a", options: ["soliloquy", "stage direction", "prologue", "chorus"], correctIndex: 0, answerKey: "A soliloquy. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give two strategies for reading and understanding classic verse drama.", answerKey: "Read for the sense of a whole sentence (not line by line); look up unfamiliar words; read aloud to hear the rhythm and meaning; grasp the overall meaning first. Award marks for any two valid strategies.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List four tools of drama you would apply to interpret a Shakespearean play.", answerKey: "Any four: the kind (tragedy/comedy/tragicomedy); plot (exposition to resolution); character (protagonist, antagonist, foil, traits/roles); conflict; theme; techniques (soliloquy, dramatic irony). Award 1 mark each (max 4).", marks: 4 },
        { type: "ESSAY", prompt: "Explain how you would interpret a Shakespearean drama you have studied, showing how you read it as a performance text and apply the tools of drama (kind, plot, character, conflict, technique, theme). Support your answer with reference to the play.", answerKey: "Award marks for: reading it as a performance text (dialogue + stage directions, imagining performance), 4 marks; handling verse/older language, 3 marks; applying the tools of drama — kind, plot, character, conflict, technique, theme — 12 marks; textual reference to the studied play, 3 marks; expression, 2 marks. A response that only summarises the plot should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Figurative Language; Literary Devices Glossary (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
      slug: "figurative-expressions-in-poetry",
      title: "Figurative Expressions",
      objective:
        "By the end of the topic, learners should be able to identify figurative expressions in a text, apply the name–quote–effect method, and explain how each figure creates meaning and feeling.",
      estimatedMinutes: 150,
      notes: `## Figurative expressions

- **Figurative expressions (figures of speech)** use language in a **non-literal** way, meaning **more than the literal words**.
- Figurative language is **the most common of literary devices** and conveys much meaning in few words.
- They are especially dense in **poetry**, but appear in prose and drama too.

## The main figures to recognise

- **Simile** — a comparison using **like or as**.
- **Metaphor** — a **direct comparison** between two unlike things, without like or as.
- **Personification** — **human qualities given to non-human things**.
- **Hyperbole** — deliberate **exaggeration** for effect.
- **Imagery** — descriptive detail that **paints a picture** and appeals to the senses.
- **Symbolism** — a **physical object representing an abstract idea**.
- **Metonymy** — one thing **represented by another associated with it**.
- **Alliteration** and **repetition** — sound and emphasis devices.

## The name–quote–effect method

To analyse figurative expression, never just spot the device — always give its **effect**:
1. **Name** the figure of speech.
2. **Quote** the words from the text.
3. **Explain the effect** — what image or feeling it creates and how it helps the meaning.

## Why effect matters

- Recognising a figure is only half the skill.
- The marks — and the meaning — come from explaining **why** the writer chose it and **what it does** to the reader.
- A useful prompt for the effect step: *"What does this make me see, hear or feel, and why did the writer want that?"*

## Common errors and misconceptions

- **Device-spotting** — listing "metaphor, simile, personification" with no explanation earns almost nothing; always complete the **effect** step.
- **Confusing simile and metaphor** — a simile keeps *like/as*; a metaphor drops them.
- **Reading a symbol too literally** — a symbol stands for a **larger idea**.
- **Assuming an attitude is simple** — a writer may hold **mixed feelings** at once; capture that rather than forcing one label.`,
      workedExample: `**Task.** Analyse the following two lines using the name–quote–effect method.

*"The morning is a ripe fruit, / and the wind whispers your name through the tall grass."*

**Line 1 — "The morning is a ripe fruit"**
1. **Name:** **metaphor** (it says the morning *is* a ripe fruit, not *like* one).
2. **Quote:** "is a ripe fruit."
3. **Effect:** the metaphor compares the morning to ripe fruit, suggesting **freshness, richness and fullness**. It appeals to the senses (sight and taste), turning a plain time of day into an image of abundance and promise.

**Line 2 — "the wind whispers your name through the tall grass"**
1. **Name:** **personification** (the wind is given the human ability to "whisper"), with gentle **imagery** of the tall grass.
2. **Quote:** "the wind whispers your name."
3. **Effect:** by making the wind whisper, the writer creates a **soft, tender, almost reverent** mood, as if nature itself honours the person named. The quiet sound-image deepens the feeling of intimacy.

**Conclusion:** naming the device is not enough; the analysis earns its marks by explaining that the metaphor builds an image of rich promise and the personification creates a tender mood. Always finish with the **effect**.`,
      quiz: [
        { prompt: "Figurative language is language that", options: ["means more than its literal words", "is always in capitals", "has no meaning", "can only be spoken"], correctIndex: 0, explanation: "Figures of speech carry meaning beyond the literal." },
        { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "hyperbole", "symbol"], correctIndex: 0, explanation: "Similes use like/as." },
        { prompt: "A direct comparison saying one thing IS another is a", options: ["metaphor", "simile", "alliteration", "repetition"], correctIndex: 0, explanation: "A metaphor is direct." },
        { prompt: "Giving human qualities to non-human things is", options: ["personification", "hyperbole", "simile", "symbolism"], correctIndex: 0, explanation: "Personification makes the non-human human." },
        { prompt: "Deliberate exaggeration for effect is", options: ["hyperbole", "simile", "metaphor", "alliteration"], correctIndex: 0, explanation: "Hyperbole exaggerates." },
        { prompt: "Language that appeals to the senses is", options: ["imagery", "rhyme", "metre", "a stanza"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
        { prompt: "An object standing for a larger idea is", options: ["a symbol", "a simile", "a pun", "a rhyme"], correctIndex: 0, explanation: "Symbolism uses an object for an idea." },
        { prompt: "The name–quote–effect method requires naming, quoting and", options: ["explaining the effect", "counting the lines", "ignoring meaning", "translating"], correctIndex: 0, explanation: "Marks come from explaining the effect." },
        { prompt: "'The wind whispered through the grass' is", options: ["personification", "simile", "hyperbole", "symbol"], correctIndex: 0, explanation: "The wind is given a human act." },
        { prompt: "'Her smile was as bright as the sun' is a", options: ["simile", "metaphor", "personification", "repetition"], correctIndex: 0, explanation: "It compares using 'as'." },
        { prompt: "'You are my sunshine' is a", options: ["metaphor", "simile", "hyperbole", "alliteration"], correctIndex: 0, explanation: "It directly calls the person sunshine." },
        { prompt: "Repeating a word or line for emphasis is", options: ["repetition", "rhyme", "simile", "symbol"], correctIndex: 0, explanation: "Repetition stresses an idea." },
        { prompt: "'The pen is mightier than the sword' is", options: ["metonymy", "simile", "hyperbole", "assonance"], correctIndex: 0, explanation: "Each is represented by something associated with it." },
        { prompt: "Figurative expressions are especially dense in", options: ["poetry", "phone books", "timetables", "receipts"], correctIndex: 0, explanation: "Poetry packs meaning through figures of speech." },
        { prompt: "Device-spotting is weak because it omits the", options: ["effect", "device name", "quotation", "reading"], correctIndex: 0, explanation: "The effect step is what device-spotting leaves out." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "page number", "price"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "A useful prompt for the effect step asks what the words make you", options: ["see, hear or feel", "buy", "count", "print"], correctIndex: 0, explanation: "Effect is about the reader's experience." },
        { prompt: "Figurative language is the most common of", options: ["literary devices", "punctuation marks", "chapter titles", "footnotes"], correctIndex: 0, explanation: "Figurative language is the most common literary device." },
        { prompt: "A metaphor differs from a simile because it", options: ["drops 'like'/'as'", "always rhymes", "is longer", "uses numbers"], correctIndex: 0, explanation: "Metaphor is a direct comparison." },
        { prompt: "When analysing a metaphor, explain the comparison and its", options: ["effect on meaning or feeling", "number of syllables", "printing date", "page number"], correctIndex: 0, explanation: "Naming is not enough — explain the effect." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define simile, metaphor and personification, giving one example of each.", answerKey: "Simile — a comparison using like/as (e.g. 'as brave as a lion'); metaphor — a direct comparison without like/as (e.g. 'he is a lion'); personification — human qualities given to the non-human (e.g. 'the sea roared angrily'). Award 1 mark per device with a valid example (max 3), +1 for accuracy.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'The angry clouds marched across the sky' uses which figure of speech?", options: ["personification", "simile", "hyperbole", "alliteration"], correctIndex: 0, answerKey: "Clouds given the human actions of anger and marching. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using name–quote–effect, analyse: 'Her voice was a gentle river flowing through the room.'", answerKey: "Name: metaphor (the voice is called a gentle river). Quote: 'a gentle river flowing.' Effect: suggests the voice is smooth, calm, continuous and soothing, creating a peaceful mood and appealing to the senses. Award marks for naming, quoting and a clear effect.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why device-spotting earns few marks, and what must be added.", answerKey: "Listing devices with no explanation shows only recognition, not understanding; the marks come from explaining the effect — what image or feeling the device creates and how it helps the meaning. Award 2 for the explanation of the weakness and 2 for the remedy (the effect step).", marks: 4 },
        { type: "ESSAY", prompt: "Choose a poem you have studied and discuss how the poet uses at least three figurative expressions to convey meaning or feeling, explaining the effect of each with quotation.", answerKey: "Award marks for: at least three figures correctly identified and quoted, 9 marks; explanation of the effect of each on meaning/feeling — the discriminating requirement — 12 marks; aptness of quotation and expression, 3 marks. Mere device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Playwriting (Garcia); Elements of Drama (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Playwriting_(Garcia)/01%3A_Chapters/1.01%3A_Playwriting)
      slug: "drama-writing",
      title: "Drama Writing",
      objective:
        "By the end of the topic, learners should be able to explain how a play is written — through dialogue and action, a central problem, characters, acts and scenes, and stage directions — and draft a short dramatic scene.",
      estimatedMinutes: 150,
      notes: `## What writing a play involves

- A **play is a story told through dialogue and action** — plays communicate through these two mediums, not through narrative description.
- A play **poses a difficult problem** that the characters try to solve over the course of the story; this **central conflict** drives it forward.
- Often the main character is **transformed** by the end and learns something essential.

## The playwright's job

- The playwright is a **world builder**, responsible for the **world, the characters, the conflict**, and for **building tension** so the story captivates the audience.
- Success requires understanding **how to structure a story** and developing your **own voice and perspective**.

## The tools you write with

- **Dialogue** — the words characters speak; it drives the plot, develops relationships, and reveals characters' inner emotions, past and frustrations. Each character should have a **distinctive rhythm and vocabulary** so they feel distinct.
- **Action** — the physical movements of the characters.
- **Stage directions** — instructions for what happens on stage: the movement of actors, the location or scenery, sounds, props, and pauses; usually **italicised and separate from the dialogue**.
- **Acts and scenes** — the play is divided into units; a scene sets a place and moment of the action.

## Structuring the play

- Begin by **introducing the world, the main characters and a normal situation**, then introduce the **conflict** (the inciting problem).
- Build the conflict through **rising tension** to a climax, then move to a resolution.
- Use the plot shape studied earlier: exposition → rising action → climax → falling action → resolution.

## A short checklist for a scene

1. **Who** is in it (characters) and **where/when** (setting, in a stage direction)?
2. What **problem or tension** does the scene turn on?
3. Write the **dialogue** so each character sounds distinct and the tension builds.
4. Add **stage directions** for entrances, exits, movement and key actions.

## Common errors and misconceptions

- **Writing narrative prose instead of a script** — a play uses **dialogue, action and stage directions**, not descriptive paragraphs.
- **Flat, identical dialogue** — give each character a **distinct voice**.
- **No central problem** — a play needs a **conflict** the characters try to solve.
- **Forgetting stage directions** — they tell the actors and reader what happens on stage.`,
      workedExample: `**Task.** Plan and draft the opening of a short dramatic scene, applying the tools of drama writing.

**Step 1 — plan.**
- **Characters:** KOFI (a determined student) and MA THOMAS (a strict head teacher).
- **Setting (stage direction):** a school office, late afternoon.
- **Central problem:** Kofi wants permission to sit an exam he missed; Ma Thomas is reluctant. That tension drives the scene.

**Step 2 — draft (script form).**

*A small office. Late afternoon light through one window. MA THOMAS sits behind a desk stacked with papers. KOFI enters, holding a crumpled letter.*

**KOFI:** Good afternoon, Ma. I know I am late — but please, read this before you decide.

*He holds out the letter. MA THOMAS does not take it.*

**MA THOMAS:** Late is late, Kofi. Rules are rules.

**KOFI:** *(stepping closer)* One rule, one time — against one whole future. Is that a fair trade?

*MA THOMAS looks up for the first time.*

**Step 3 — check against the checklist.**
- **Dialogue** drives the scene and each voice is distinct (Kofi urgent, Ma Thomas terse).
- **Stage directions** (in italics) give the setting, entrances and movement.
- A clear **central problem** (permission for the exam) creates the tension.
- The scene builds toward a decision — a small **climax**.

**Conclusion:** writing drama means telling the story through **dialogue and action**, built around a **central problem**, with **stage directions** for what happens on stage — not narrative prose.`,
      quiz: [
        { prompt: "A play is a story told through", options: ["dialogue and action", "description only", "rhyme only", "narration only"], correctIndex: 0, explanation: "Plays communicate through dialogue and action." },
        { prompt: "A play poses a difficult problem that the characters try to", options: ["solve", "ignore", "print", "sell"], correctIndex: 0, explanation: "The central conflict drives the play." },
        { prompt: "The playwright is described as a", options: ["world builder", "ticket seller", "printer", "stagehand only"], correctIndex: 0, explanation: "The playwright builds the world, characters and conflict." },
        { prompt: "The words characters speak are the", options: ["dialogue", "stage directions", "props", "programme"], correctIndex: 0, explanation: "Dialogue is the spoken words." },
        { prompt: "Instructions for movement, scenery and props are", options: ["stage directions", "dialogue", "themes", "climaxes"], correctIndex: 0, explanation: "Stage directions give the mechanics of the scene." },
        { prompt: "Stage directions are usually", options: ["italicised and separate from dialogue", "sung", "hidden", "spoken by the audience"], correctIndex: 0, explanation: "They are set apart from the dialogue." },
        { prompt: "Each character's dialogue should have a", options: ["distinctive rhythm and vocabulary", "identical voice", "no words", "single word"], correctIndex: 0, explanation: "Distinct voices keep characters distinct." },
        { prompt: "A play is divided into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units of a play." },
        { prompt: "A scene usually sets a", options: ["place and moment of the action", "ticket price", "printer", "page number"], correctIndex: 0, explanation: "A scene fixes a place and moment." },
        { prompt: "The opening of a play usually introduces the world, the characters and a", options: ["normal situation before conflict", "list of prices", "map", "recipe"], correctIndex: 0, explanation: "Set up the normal world, then the conflict." },
        { prompt: "A play needs, above all, a central", options: ["conflict/problem", "song", "map", "price list"], correctIndex: 0, explanation: "A play turns on a problem to be solved." },
        { prompt: "Writing narrative paragraphs instead of a script is wrong because a play uses", options: ["dialogue, action and stage directions", "only description", "only footnotes", "only rhyme"], correctIndex: 0, explanation: "A play is a script, not prose narration." },
        { prompt: "Dialogue can reveal a character's", options: ["inner emotions and past", "ticket price", "printer", "seat number"], correctIndex: 0, explanation: "Dialogue reveals emotion, past and frustration." },
        { prompt: "The plot shape to build a play is exposition → rising action → climax → falling action →", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "The standard plot arc ends in resolution." },
        { prompt: "By the end, the main character is often", options: ["transformed and has learned something", "unchanged always", "removed", "renamed"], correctIndex: 0, explanation: "The hero is typically transformed." },
        { prompt: "The physical movements of the characters are the", options: ["action", "dialogue", "theme", "props"], correctIndex: 0, explanation: "Action is the physical movement." },
        { prompt: "A scene checklist should establish who, where/when, and the", options: ["problem or tension", "ticket price", "printer", "cover art"], correctIndex: 0, explanation: "Identify the tension the scene turns on." },
        { prompt: "Success in playwriting requires developing your own", options: ["voice and perspective", "printing press", "ticket booth", "stage lights only"], correctIndex: 0, explanation: "A distinct voice and perspective are needed." },
        { prompt: "Stage directions include entrances, exits, movement and", options: ["key actions/sounds/props", "ticket prices", "author's age", "the index"], correctIndex: 0, explanation: "They cover what happens on stage." },
        { prompt: "Flat, identical dialogue is a fault because characters should", options: ["sound distinct", "sound the same", "not speak", "only whisper"], correctIndex: 0, explanation: "Each character needs a distinct voice." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the two mediums through which a play tells its story, and explain the role of stage directions.", answerKey: "A play tells its story through dialogue (the words characters speak) and action (their physical movements). Stage directions are instructions for what happens on stage — movement, location/scenery, sounds, props, pauses — usually italicised and separate from the dialogue. Award 2 for the two mediums and 2 for the role of stage directions.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "What must a play be built around?", options: ["a central conflict/problem the characters try to solve", "a list of prices", "a single rhyme", "a map of the theatre"], correctIndex: 0, answerKey: "A central conflict/problem. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give three things a scene checklist should establish before you write the dialogue.", answerKey: "Who is in the scene (characters); where and when it takes place (setting, in a stage direction); the problem or tension the scene turns on. (Also acceptable: how the tension builds.) Award 1 mark each (max 3).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why should each character have a distinctive voice, and how is this achieved?", answerKey: "So the characters feel distinct and believable; achieved by giving each a distinctive rhythm, flow and vocabulary in their dialogue. Award 2 for the reason and 2 for the method.", marks: 4 },
        { type: "ESSAY", prompt: "Write a short dramatic scene (about 10–15 lines) between two characters built around a clear conflict. Use correct script form with dialogue and stage directions, giving each character a distinct voice.", answerKey: "Award marks for: correct script form (character names, dialogue, italicised stage directions), 6 marks; a clear central conflict the scene turns on, 6 marks; two distinct character voices, 6 marks; use of stage directions for setting/movement, 4 marks; overall coherence and rising tension, 2 marks. A narrative-prose answer (not a script) should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
