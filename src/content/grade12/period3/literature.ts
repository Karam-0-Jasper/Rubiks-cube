import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 12, Semester One, Period III: REVIEW OF NON-AFRICAN DRAMA / POETRY AND
// LITERARY DEVICES. The three top-level CONTENTS items are rebuilt here as three
// topics: (1) Non-African Drama; (2) Reviewing Literary devices — with its sub-
// items (comedy, tragedy, tragic-comedy, melodrama, cultural significance,
// contemporary relevance, flashback, imagery, suspense) taught as ## sections;
// (3) Dictions used by authors. Literary concepts are sourced from LibreTexts
// (Humanities). The syllabus names set texts (Othello and A Midsummer Night's
// Dream by Shakespeare, She Stoops to Conquer by Oliver Goldsmith, A Raisin in
// the Sun by Lorraine Hansberry, and poems by Hopkins and Dylan Thomas). Set-
// text-specific facts are NOT invented here — the general skills of analysing
// drama and literary devices are taught, and the set texts are flagged as the
// teaching targets.
export const literatureG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Review of Non-African Drama, Poetry and Literary Devices",
  summary:
    "Period III of the MoE Grade 12 Literature syllabus. Its three CONTENTS items are taught as three topics: analysing non-African drama (dialogue, acts and scenes, plot); reviewing literary devices including the drama genres (comedy, tragedy, tragic-comedy, melodrama) with flashback, imagery and suspense; and the diction authors use.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Fiction and Drama: types, terms and sample essay (Rhetoric: What, Why and How) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Rhetoric_-_What_Why_and_How/13%3A_Literature/13.01%3A_Fiction_and_Drama_-_types_terms_and_sample_essay)
      slug: "non-african-drama",
      title: "Non-African Drama",
      objective:
        "By the end of the topic, learners should be able to analyse a non-African play through its structure — dialogue, acts and scenes, and the plot from exposition to resolution.",
      estimatedMinutes: 150,
      notes: `## What drama is
- **Drama** is a story written to be **performed**. It is *written in dialogue*, while fiction is written in *sentences and paragraphs* and poetry in *lines and stanzas*.
- Drama typically anchors the audience through its **characters** and their speech and action.
- Non-African drama named by the syllabus includes *Othello* and *A Midsummer Night's Dream* (Shakespeare), *She Stoops to Conquer* (Goldsmith) and *A Raisin in the Sun* (Hansberry).

## Dialogue, acts and scenes
- **Dialogue** — the characters' spoken lines — carries the story; there is no narrator.
- Plays are organised into **scenes** and **acts**: a **scene** is a unit of continuous action; an **act** is a larger division made of scenes.
- **Stage directions** tell actors how to move and speak.

## The structure of the plot
- **Exposition** — *"the opening portion of a story that sets the scene, introduces characters and gives background information."*
- **Rising action** — complications build the tension.
- **Climax** — *"the moment of greatest tension when a problem or complication may be resolved or, at least, confronted."*
- **Falling action** — events flow from the climax.
- **Resolution** — brings *"the problem to some sort of finality, not necessarily a happy ending."*

## Reading a play
- Track the **conflict** and how it develops act by act.
- Note **characters** and their **roles** (protagonist, antagonist, supporting).
- Watch for **dramatic irony** — when the audience knows something a character does not.
- Support every point with a **quotation** from the dialogue.

## Set text (to be supplied by the teacher)
- Apply this method to the assigned non-African play: map its acts and scenes, trace the plot from exposition to resolution, and analyse its central conflict and characters with quotation.
- *(Specific scenes, characters and lines come from the set play itself, not invented here.)*

## Common errors and misconceptions
- **Treating a play like a novel** — drama is told through dialogue and performance, not narration.
- **Confusing scene and act** — a scene is a unit of action; an act is a larger division of scenes.
- **Ignoring the climax** — locate the moment of greatest tension.
- **Missing dramatic irony** — note when the audience knows more than a character.`,
      workedExample: `**Task.** Analyse the structure of a play using a general model.

**Model:** a trusted adviser secretly plots against a leader who believes in him.

**Step 1 — form.** The story is told entirely through **dialogue** and action on stage, organised into **acts and scenes** — no narrator explains events.

**Step 2 — exposition.** Act 1 sets the scene: the leader, the adviser and the trust between them — **background information** the audience needs.

**Step 3 — rising action.** Across scenes the adviser's hints and lies build **complications** and tension.

**Step 4 — climax.** The **moment of greatest tension** — the leader acts on the lies. Here dramatic irony peaks: the **audience knows** the adviser is false while the leader does not.

**Step 5 — falling action and resolution.** The consequences unfold and the play reaches a **finality** — not necessarily happy.

**Step 6 — support.** Each point is backed by a line of **dialogue**. *(In an exam you would quote the set play.)*

**Conclusion:** analyse a play through its **dialogue**, its division into **acts and scenes**, and its **plot** from exposition through climax to resolution — noting conflict, character roles and dramatic irony, always with quotation.`,
      quiz: [
        { prompt: "Drama is a story written to be", options: ["performed", "priced", "printed only", "filed"], correctIndex: 0, explanation: "Drama is meant for performance." },
        { prompt: "Drama is written in", options: ["dialogue", "sentences and paragraphs", "lines and stanzas", "columns"], correctIndex: 0, explanation: "Plays are written in dialogue." },
        { prompt: "A unit of continuous action in a play is a", options: ["scene", "stanza", "chapter", "verse"], correctIndex: 0, explanation: "A scene is a unit of action." },
        { prompt: "A larger division made of scenes is an", options: ["act", "index", "appendix", "octave"], correctIndex: 0, explanation: "An act contains scenes." },
        { prompt: "Instructions telling actors how to move are", options: ["stage directions", "footnotes", "stanzas", "captions"], correctIndex: 0, explanation: "Stage directions guide the actors." },
        { prompt: "The opening that sets the scene and gives background is", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition opens the play." },
        { prompt: "The moment of greatest tension is the", options: ["climax", "exposition", "resolution", "prologue"], correctIndex: 0, explanation: "The climax is the peak of tension." },
        { prompt: "Complications that build tension form the", options: ["rising action", "resolution", "exposition", "denouement"], correctIndex: 0, explanation: "Rising action builds to the climax." },
        { prompt: "Bringing the problem to finality is the", options: ["resolution", "exposition", "climax", "prologue"], correctIndex: 0, explanation: "Resolution ends the plot." },
        { prompt: "When the audience knows something a character does not, that is", options: ["dramatic irony", "a stanza", "a rhyme", "exposition"], correctIndex: 0, explanation: "Dramatic irony is audience knowledge." },
        { prompt: "In drama there is usually no", options: ["narrator", "dialogue", "conflict", "character"], correctIndex: 0, explanation: "Drama has no narrator; it uses dialogue." },
        { prompt: "The main character of a play is the", options: ["protagonist", "antagonist", "narrator", "printer"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The opposing force in a play is the", options: ["antagonist", "protagonist", "chorus", "editor"], correctIndex: 0, explanation: "The antagonist opposes the protagonist." },
        { prompt: "Points about a play should be supported with", options: ["a quotation from the dialogue", "a price", "a font", "a date"], correctIndex: 0, explanation: "Quote the dialogue." },
        { prompt: "Treating a play like a novel is an error because drama is told through", options: ["dialogue and performance", "narration", "the price", "the index"], correctIndex: 0, explanation: "Drama is performed, not narrated." },
        { prompt: "The resolution of a play is", options: ["not necessarily happy", "always happy", "the price", "the cover"], correctIndex: 0, explanation: "Resolution just brings finality." },
        { prompt: "A scene differs from an act in that a scene is", options: ["a smaller unit of action", "larger than an act", "a stanza", "a rhyme"], correctIndex: 0, explanation: "Scenes make up acts." },
        { prompt: "Conflict in a play should be tracked", options: ["as it develops act by act", "by its price", "by its font", "by its margin"], correctIndex: 0, explanation: "Follow the conflict through the acts." },
        { prompt: "The audience learns a play's story mainly from", options: ["the characters' spoken lines", "a narrator", "footnotes", "an index"], correctIndex: 0, explanation: "Dialogue carries the story." },
        { prompt: "The character's spoken lines are the", options: ["dialogue", "stage directions", "exposition", "climax"], correctIndex: 0, explanation: "Dialogue is the spoken lines." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how drama differs from prose fiction in the way its story is told.", answerKey: "Drama is written in dialogue and meant to be performed, with the story carried by characters' spoken lines, action and stage directions and no narrator; prose fiction is written in sentences and paragraphs, usually with a narrator. Award 2 for each form's method.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a play, the moment of greatest tension is the", options: ["climax", "exposition", "resolution", "prologue"], correctIndex: 0, answerKey: "The climax. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish an act from a scene in a play.", answerKey: "A scene is a unit of continuous action (often one setting/time); an act is a larger division of the play made up of one or more scenes. Award 2 per term.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Define exposition and resolution as stages of a play's plot.", answerKey: "Exposition is the opening portion that sets the scene, introduces characters and gives background; resolution brings the problem to a finality (not necessarily a happy ending). Award 2 per stage.", marks: 4 },
        { type: "ESSAY", prompt: "For a non-African play you have studied, trace its plot from exposition to resolution, discuss its central conflict and one major character, and support your analysis with reference to the dialogue.", answerKey: "Award marks for: plot traced through exposition, rising action, climax, falling action and resolution, 8 marks; central conflict analysed, 6 marks; one major character discussed with role, 6 marks; reference to dialogue, 2 marks; expression, 2 marks. Retelling the plot without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Genres and Styles / Literary Devices Dictionary (Theatre Appreciation, Pipino; Writing and Critical Thinking Through Literature) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.05%3A_Genres_and_Styles)
      slug: "reviewing-drama-literary-devices",
      title: "Reviewing Literary Devices",
      objective:
        "By the end of the topic, learners should be able to distinguish the drama genres (comedy, tragedy, tragic-comedy, melodrama) and analyse flashback, imagery and suspense, judging a play's cultural significance and contemporary relevance.",
      estimatedMinutes: 150,
      notes: `## The genres of drama

## Comedy
- **Comedy** is *"a type of play which usually deals with less serious themes, centers on entertainment, may feature more bawdy or common characters, and often ends with a literal or metaphorical wedding."* It is **light in tone** and **ends happily**.

## Tragedy
- **Tragedy** is a **serious** play focusing on a protagonist who suffers an **eventual downfall**.
- The **tragic hero** is *"the focal character of a tragedy, who is mostly good but due to some flaw (hamartia) is doomed to fall."*
- A tragedy aims at **catharsis** — *"the purgation of emotion, usually pity and fear, at the end of a play."*

## Tragic-comedy
- **Tragicomedy** is *"a genre that combines some elements of the tragedy with some elements of the comedy"* — it mixes serious and comic material and often ends more happily than a pure tragedy.

## Melodrama
- In **melodrama**, *"the action ... is more important than the characters themselves."*
- It features **exaggerated characters** and **stock good-versus-evil** figures, **emotionally charged plots**, and usually a happy escape for the hero and heroine.

## Flashback, imagery, suspense
- **Flashback** — *"a plot device where the narrative goes back in time"* to an earlier event.
- **Imagery** — *"descriptive, immersive details meant to paint a picture in the reader's mind"*; language appealing to the senses.
- **Suspense** — the **tension** the audience feels about what will happen, built by hints (**foreshadowing**) and by **withholding information**.

## Cultural significance and contemporary relevance
- **Cultural significance** — what a play reveals about the **values, beliefs and society** of the time and place that produced it.
- **Contemporary relevance** — how the play's themes still **speak to audiences today** (power, jealousy, family, prejudice, justice).

## Common errors and misconceptions
- **Confusing tragedy and melodrama** — tragedy turns on a flawed but complex hero; melodrama puts action and stock good-versus-evil first.
- **Confusing flashback and foreshadowing** — flashback looks back; foreshadowing hints forward.
- **Naming a genre without evidence** — justify the label from the play.
- **Ignoring relevance** — connect old plays to present concerns.`,
      workedExample: `**Task.** Classify plays by genre and read one device, using general models.

**Step 1 — sort by genre.**
- A play of noble characters, a flawed hero and a fatal downfall, ending in death and moving the audience to pity and fear = **tragedy**.
- A light play of mistaken identities and common characters ending in a wedding = **comedy**.
- A play mixing serious hardship with strong comic scenes and a hopeful ending = **tragicomedy**.
- A play of exaggerated heroes and villains, thrilling action and a last-minute rescue = **melodrama**.

**Step 2 — justify the label.** Point to the evidence: the **flaw** and **downfall** for tragedy; the **happy, marriage ending** for comedy; the **mixture** for tragicomedy; the **stock good-versus-evil and action focus** for melodrama.

**Step 3 — read a device.** A scene that cuts back to a character's childhood is a **flashback** — it explains the present by returning to the past; its effect is to reveal the root of the character's behaviour.

**Step 4 — relevance.** A centuries-old tragedy of jealousy still matters because jealousy and manipulation remain **contemporary** human problems — that is its **contemporary relevance**; its picture of its own society is its **cultural significance**.

**Conclusion:** name a play's **genre** from evidence (comedy, tragedy, tragicomedy, melodrama), analyse **flashback, imagery and suspense** for effect, and weigh the play's **cultural significance** and **contemporary relevance**.`,
      quiz: [
        { prompt: "A light play that ends happily, often in a wedding, is a", options: ["comedy", "tragedy", "melodrama", "sonnet"], correctIndex: 0, explanation: "Comedy is light and ends happily." },
        { prompt: "A serious play in which the protagonist suffers a downfall is a", options: ["tragedy", "comedy", "farce", "ballad"], correctIndex: 0, explanation: "Tragedy ends in downfall." },
        { prompt: "The mostly-good focal character doomed by a flaw is the", options: ["tragic hero", "antagonist", "narrator", "chorus"], correctIndex: 0, explanation: "The tragic hero falls through hamartia." },
        { prompt: "A flaw that dooms a tragic hero is called", options: ["hamartia", "catharsis", "climax", "diction"], correctIndex: 0, explanation: "Hamartia is the tragic flaw." },
        { prompt: "The purgation of pity and fear at a play's end is", options: ["catharsis", "exposition", "irony", "imagery"], correctIndex: 0, explanation: "Catharsis is emotional purgation." },
        { prompt: "A genre combining tragedy and comedy is", options: ["tragicomedy", "melodrama", "farce", "elegy"], correctIndex: 0, explanation: "Tragicomedy mixes the two." },
        { prompt: "In melodrama, more important than the characters is the", options: ["action", "price", "font", "margin"], correctIndex: 0, explanation: "Melodrama foregrounds action." },
        { prompt: "Melodrama typically uses stock characters of", options: ["clear good versus evil", "subtle complexity", "no conflict", "pure comedy"], correctIndex: 0, explanation: "Melodrama uses good-vs-evil stock figures." },
        { prompt: "A plot device where the narrative goes back in time is", options: ["flashback", "foreshadowing", "climax", "diction"], correctIndex: 0, explanation: "Flashback returns to the past." },
        { prompt: "Descriptive details that appeal to the senses are", options: ["imagery", "diction", "the plot", "the resolution"], correctIndex: 0, explanation: "Imagery is sensory description." },
        { prompt: "The audience's tension about what will happen is", options: ["suspense", "catharsis", "exposition", "diction"], correctIndex: 0, explanation: "Suspense is audience tension." },
        { prompt: "Suspense is built by hints and by withholding", options: ["information", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Delay and hints build suspense." },
        { prompt: "What a play reveals about the values of its own time is its", options: ["cultural significance", "price", "font", "index"], correctIndex: 0, explanation: "Cultural significance is its picture of its society." },
        { prompt: "How a play's themes still speak to audiences today is its", options: ["contemporary relevance", "price", "cover", "date"], correctIndex: 0, explanation: "Contemporary relevance is its present-day meaning." },
        { prompt: "Tragedy differs from melodrama because tragedy turns on a", options: ["flawed, complex hero", "stock villain", "happy wedding", "price"], correctIndex: 0, explanation: "Tragedy centres a complex flawed hero." },
        { prompt: "Flashback differs from foreshadowing because flashback looks", options: ["back", "forward", "sideways", "up"], correctIndex: 0, explanation: "Flashback = back; foreshadowing = forward." },
        { prompt: "Naming a play's genre requires", options: ["evidence from the play", "a price", "a font", "a date"], correctIndex: 0, explanation: "Justify the label with evidence." },
        { prompt: "A comedy often ends with a", options: ["literal or metaphorical wedding", "funeral", "price rise", "blank page"], correctIndex: 0, explanation: "Comedies often end in marriage." },
        { prompt: "A tragedy aims to move the audience to", options: ["pity and fear", "boredom", "arithmetic", "shopping"], correctIndex: 0, explanation: "Tragedy evokes pity and fear (catharsis)." },
        { prompt: "A scene that cuts to a character's childhood is a", options: ["flashback", "climax", "resolution", "wedding"], correctIndex: 0, explanation: "It returns to an earlier time." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define comedy and tragedy as dramatic genres.", answerKey: "Comedy is a light play dealing with less serious themes, centred on entertainment, often with common characters, ending happily (often in a wedding). Tragedy is a serious play focusing on a protagonist (a mostly-good tragic hero) who suffers an eventual downfall through a flaw, moving the audience to pity and fear. Award 2 per genre.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A play of exaggerated heroes and villains, thrilling action and a last-minute rescue is best called", options: ["melodrama", "tragedy", "comedy", "sonnet"], correctIndex: 0, answerKey: "Melodrama foregrounds action and stock good-vs-evil. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish cultural significance from contemporary relevance when judging a play.", answerKey: "Cultural significance is what the play reveals about the values, beliefs and society of the time and place that produced it; contemporary relevance is how its themes still speak to audiences today. Award 2 per term.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What is a tragicomedy, and how does it differ from a pure tragedy?", answerKey: "A tragicomedy combines elements of tragedy with elements of comedy, mixing serious and comic material and often ending more happily than a pure tragedy, which builds to the hero's downfall. Award 2 for the definition and 2 for the contrast.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing a non-African play you have studied, identify its genre with evidence, analyse one literary device (flashback, imagery or suspense) and its effect, and discuss the play's contemporary relevance.", answerKey: "Award marks for: genre identified and justified from the play, 8 marks; one device analysed with effect, 8 marks; contemporary relevance discussed, 6 marks; expression, 2 marks. An unjustified genre label or device-spotting without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Word Choice, Word Order and Tone / Literary Devices Glossary (Writing and Critical Thinking Through Literature, Ringo & Kashyap; Oxnard) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/06%3A_About_Poetry/6.07%3A_Word_Choice_Word_Order_and_Tone)
      slug: "diction-used-by-authors",
      title: "Diction Used by Authors",
      objective:
        "By the end of the topic, learners should be able to explain what diction is and analyse how an author's word choice — through denotation, connotation and register — creates tone, character and meaning.",
      estimatedMinutes: 150,
      notes: `## What diction is
- **Diction** is **word choice** — the words a writer selects and the way they are arranged.
- Diction is a key part of a writer's **style** and a main source of **tone**.

## Denotation and connotation
- **Denotation** — a word's **dictionary meaning**.
- **Connotation** — a word's **implied, associated meaning**. *Home* denotes a residence but connotes **security, warmth and belonging**.
- Words with **positive or negative associations give a specific tone** to writing.

## Concrete and abstract diction
- **Concrete words** name specific, sensory things (*red dust*, *iron gate*); **abstract words** name ideas (*love*, *fear*, *freedom*).
- Concrete, specific diction creates **immediacy and engagement**; over-abstract diction feels vague.

## Register (formal and informal diction)
- **Formal diction** — elevated, careful language; **informal / colloquial diction** — everyday, conversational language, including **dialect** and **slang**.
- An author varies register to suit the **speaker, character and situation** — a king may speak in elevated diction, a servant in plain speech.

## How diction shapes a text
- **Tone** — word choice reveals the writer's or speaker's **attitude**.
- **Character** — how a character speaks (their diction) reveals **who they are** and where they come from.
- **Meaning and mood** — connotations and imagery in the diction build the **mood** and deepen meaning.

## Set text (to be supplied by the teacher)
- Analyse the diction of the assigned author or character: pick specific words, read their connotations and register, and explain the tone, character or meaning they create.
- *(Actual words and lines come from the set text itself, not invented here.)*

## Common errors and misconceptions
- **Confusing denotation and connotation** — one is the dictionary meaning, the other the associations.
- **Ignoring register** — formal and informal diction serve different characters and effects.
- **Vague praise** — quote the specific words rather than saying the language is "nice."
- **Overlooking connotation** — much of a word's power is in what it suggests, not just what it names.`,
      workedExample: `**Task.** Analyse an author's diction, using a general model.

*Line A (a proud lord):* "I shall not stoop to beg what is mine by right."
*Line B (a weary servant):* "Ain't no use askin' — they never give us nothin'."

**Step 1 — name the register.** Line A uses **formal, elevated diction** (*shall*, *stoop*, *by right*); Line B uses **informal, colloquial diction** with dialect (*ain't*, *nothin'*).

**Step 2 — read connotations.** In A, *stoop* connotes lowering oneself and lost dignity — the lord's pride. In B, the flat, negative words (*no use*, *never*, *nothin'*) connote exhaustion and defeat.

**Step 3 — link to tone and character.** A's diction gives a **proud, defiant tone** and marks a high-status character; B's gives a **weary, resigned tone** and marks a character worn down by hardship.

**Step 4 — link to meaning.** The **contrast in diction** dramatises a gap in **power and status** between the two speakers — meaning carried entirely by word choice.

**Conclusion:** analyse diction by naming the **register** (formal/informal), reading the **connotations** of specific words, and explaining the **tone, character and meaning** those choices create. Always quote the actual words.`,
      quiz: [
        { prompt: "Diction means", options: ["word choice", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Diction is the words a writer selects." },
        { prompt: "A word's dictionary meaning is its", options: ["denotation", "connotation", "register", "rhythm"], correctIndex: 0, explanation: "Denotation is the literal meaning." },
        { prompt: "A word's implied, associated meaning is its", options: ["connotation", "denotation", "syllable", "stanza"], correctIndex: 0, explanation: "Connotation is the implied meaning." },
        { prompt: "Words with positive or negative associations give a specific", options: ["tone", "price", "font", "margin"], correctIndex: 0, explanation: "Connotation sets tone." },
        { prompt: "Specific, sensory words like 'red dust' are", options: ["concrete diction", "abstract diction", "prices", "fonts"], correctIndex: 0, explanation: "Concrete words name sensory things." },
        { prompt: "Words like 'love' and 'freedom' are", options: ["abstract diction", "concrete diction", "dialect", "slang"], correctIndex: 0, explanation: "Abstract words name ideas." },
        { prompt: "Concrete diction creates", options: ["immediacy and engagement", "vagueness", "a price", "a margin"], correctIndex: 0, explanation: "Specific words engage the reader." },
        { prompt: "Elevated, careful language is", options: ["formal diction", "informal diction", "slang", "dialect"], correctIndex: 0, explanation: "Formal diction is elevated." },
        { prompt: "Everyday, conversational language is", options: ["informal / colloquial diction", "formal diction", "denotation", "meter"], correctIndex: 0, explanation: "Informal diction is conversational." },
        { prompt: "The level of formality of diction is its", options: ["register", "rhyme", "price", "margin"], correctIndex: 0, explanation: "Register is the formality level." },
        { prompt: "How a character speaks reveals", options: ["who they are", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Diction characterises the speaker." },
        { prompt: "'Home' connotes security, warmth and", options: ["belonging", "arithmetic", "printing", "pricing"], correctIndex: 0, explanation: "Connotation adds associations to the literal meaning." },
        { prompt: "Diction is a key part of a writer's", options: ["style", "price", "index", "cover"], correctIndex: 0, explanation: "Word choice shapes style." },
        { prompt: "Over-abstract diction tends to feel", options: ["vague", "vivid", "concrete", "sensory"], correctIndex: 0, explanation: "Abstraction can feel vague." },
        { prompt: "A king speaking in elevated language shows diction suited to", options: ["character and situation", "the price", "the font", "the margin"], correctIndex: 0, explanation: "Register suits the speaker." },
        { prompt: "Analysing diction well means quoting the", options: ["specific words", "price", "cover", "date"], correctIndex: 0, explanation: "Point to the actual words." },
        { prompt: "'Ain't no use' is an example of", options: ["informal/colloquial diction", "formal diction", "denotation", "meter"], correctIndex: 0, explanation: "It is everyday, dialectal speech." },
        { prompt: "Much of a word's power lies in its", options: ["connotation", "price", "length", "font"], correctIndex: 0, explanation: "Connotation carries suggestion." },
        { prompt: "A contrast in diction between two speakers can dramatise a gap in", options: ["power and status", "price", "font size", "page count"], correctIndex: 0, explanation: "Diction can mark social difference." },
        { prompt: "Connotations and imagery in diction help build the", options: ["mood", "price", "index", "margin"], correctIndex: 0, explanation: "Diction shapes mood and meaning." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define diction and explain the difference between denotation and connotation.", answerKey: "Diction is a writer's word choice. Denotation is a word's dictionary meaning; connotation is its implied, associated meaning (e.g. 'home' denotes a residence but connotes security and belonging). Award 2 for diction and 2 for the denotation/connotation distinction.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "'Ain't no use askin'' is an example of", options: ["informal/colloquial diction", "formal diction", "concrete imagery", "denotation"], correctIndex: 0, answerKey: "Everyday, dialectal speech — informal diction. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between concrete and abstract diction and why writers favour concrete words.", answerKey: "Concrete diction names specific, sensory things (red dust, iron gate); abstract diction names ideas (love, fear). Writers favour concrete words because they create immediacy and engagement, whereas abstraction can feel vague. Award 2 for the distinction and 2 for the reason.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How can an author's diction reveal a character?", answerKey: "How a character speaks — their register (formal or informal), vocabulary, dialect and the connotations of their words — reveals who they are, their status, background and attitude. Award marks for the principle and an illustration.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing a text you have studied, analyse how the author's diction (word choice, connotation and register) creates tone, character or meaning, quoting specific words.", answerKey: "Award marks for: specific words quoted and their register named, 6 marks; connotations read, 6 marks; the tone, character or meaning created explained, 8 marks; expression, 2 marks; aptness of examples, 2 marks. Vague praise without quoted words should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
