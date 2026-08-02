import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English
// (Grades 10-12). Grade 10, Semester One, Period I: Figurative Expressions and
// Shakespearean Drama (elements of literature and literary devices; kinds of
// drama, character, conflict and theme, with A Midsummer Night's Dream as the
// set text). African drama (P3) and African prose (P4-5) follow in later
// periods.
export const literature: SubjectContent = {
  slug: "literature",
  name: "Literature in English",
  shortName: "Literature",
  description:
    "Figurative expressions and drama: the figures of speech and elements of literature, and the elements and kinds of drama through Shakespeare's A Midsummer Night's Dream.",
  accent: "fuchsia",
  sortOrder: 11,
  teacherCode: "LIT-10-3382",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Figurative Expressions and Shakespearean Drama",
      summary:
        "Period I of the MoE Grade 10 Literature syllabus. Learners study the elements of literature and the figures of speech, then the elements and kinds of drama — character, conflict and theme — using Shakespeare's A Midsummer Night's Dream as the set text.",
      topics: [
        {
          slug: "figurative-expressions",
          title: "Figurative Expressions and Literary Devices",
          objective:
            "By the end of the unit, learners should be able to define literature and its elements, and identify and explain the effect of the main figures of speech — simile, metaphor, personification, hyperbole and others — in a text.",
          estimatedMinutes: 160,
          notes: `## Introduction

When a poet writes that "the wind whispered" or that grief is "an ocean with no shore," they are not lying or making a mistake — they are using the special, imaginative language that makes literature *literature*. This unit begins the whole subject: it defines what **literature** is, names its **elements** (theme, plot, character and more), and then studies the **figures of speech** — simile, metaphor, personification, hyperbole and the rest — that give writing its power. Most importantly, it trains the one habit that separates a top answer from a weak one: never just *naming* a device, but explaining the **effect** it creates.

## What literature is

**Literature** is the imaginative expression of human experience in language, valued for its artistic quality as well as its content. It differs from ordinary writing in using language **deliberately and artistically** — for beauty, feeling and effect — not merely to give information.

## The elements of literature

- **Theme** — the central idea or underlying message.
- **Plot** — the sequence of connected events.
- **Character** — a person represented in the work.
- **Setting** — the time and place of the action.
- **Style** — the writer's characteristic manner of writing.
- **Tone** — the writer's attitude towards the subject.
- **Mood** — the emotional atmosphere created in the reader.

## Figurative language

**Figurative language (figures of speech)** uses words in a non-literal way to create a special effect — a picture, a comparison, an emphasis — beyond their ordinary meaning.

**Comparison**
- **Simile** — a comparison using *like* or *as*. *Her voice was like rain on a tin roof.*
- **Metaphor** — a direct comparison, without *like* or *as*. *Her voice was rain on a tin roof.*
- **Personification** — giving human qualities to something non-human. *The wind whispered through the trees.*
- **Apostrophe** — addressing an absent person, an idea or an object directly. *O death, where is your sting?*

**Sound**
- **Alliteration** — repetition of initial consonant sounds. *The wind whipped the withered leaves.*
- **Onomatopoeia** — words that imitate the sound they name. *hiss, crash, buzz, murmur.*
- **Assonance** — repetition of vowel sounds. *The old stones grow cold.*

**Emphasis and contrast**
- **Hyperbole** — deliberate exaggeration. *I have told you a thousand times.*
- **Litotes (understatement)** — deliberate diminishing. *He was not displeased* (meaning delighted).
- **Irony** — saying one thing while meaning the opposite, or a gap between expectation and outcome.
- **Oxymoron** — two contradictory words joined. *deafening silence, bitter sweetness.*
- **Paradox** — an apparent contradiction that conveys a truth. *The child is father of the man.*

**Other**
- **Symbolism** — an object standing for something beyond itself (a dove for peace).
- **Imagery** — language that appeals to the senses.
- **Euphemism** — a mild expression for a harsh one. *He has passed on* for *he has died.*
- **Proverb** — a short traditional saying stating a truth, common in African oral literature.

## Analysing a figure of speech — name AND effect

The most important habit in this topic: **do not simply name a device — explain what it does.**

"The poet uses alliteration in line 3" is not analysis. "The alliteration in *wind whipped the withered* forces the reader to repeat a harsh sound, so the line enacts the roughness it describes" is analysis. Always ask: *what effect does this device have on the reader?*

## Common errors and misconceptions

- **Naming a device without explaining its effect** — "the poet uses a metaphor" earns almost nothing; the marks come from saying **what the metaphor makes the reader see or feel**.
- **Confusing simile with metaphor** — a **simile** compares using *like* or *as* ("brave as a lion"); a **metaphor** compares *directly*, without them ("he is a lion").
- **Mixing up tone and mood** — **tone** is the *writer's* attitude to the subject; **mood** is the emotional *atmosphere the reader* feels.
- **Reading figurative language literally** — "the wind whispered" does not mean the wind made a sound like speech; it is **personification**, giving the wind a human quality for effect.`,
          workedExample: `**Question:** Read the extract and answer the questions.

*"The old palm stood like a tired soldier, its green arms lifted against the wind. O sea, keeper of our fathers' bones, the tide counts out its patient arithmetic of loss."*

(a) Identify four figures of speech, quoting each.
(b) For two of them, explain the effect.

**Solution**

**(a) Four figures of speech:**

1. **Simile** — *"like a tired soldier"*. The palm is compared to a soldier using *like*.
2. **Personification** — *"its green arms lifted"* and *"the tide counts"*. The palm is given arms and the tide is given the human ability to count.
3. **Apostrophe** — *"O sea"*. The sea, which cannot answer, is addressed directly.
4. **Metaphor** — *"the patient arithmetic of loss"*. The tide's action is described directly as arithmetic, without *like* or *as*.

*(Accept "keeper of our fathers' bones" as metaphor/symbolism for the sea holding the dead.)*

**(b) The effect of two devices:**

*Simile — "like a tired soldier".*
Comparing the old palm to a **tired soldier** makes it seem worn but still standing, dignified in its endurance. The reader pictures something that has fought long and refuses to fall, which prepares us to admire the palm's resistance to the wind and the sea.

*Metaphor — "the patient arithmetic of loss".*
Calling the tide's action **arithmetic** joins two very different registers: *arithmetic* is cold and methodical, while *loss* is grief. The effect is to make the destruction seem **systematic and unhurried** — the sea is not violent but a patient accountant, steadily counting away what is lost. The word *patient* makes it worse, not better: the outcome is certain and cannot be hurried or stopped.

**The lesson:** naming the device (simile, metaphor, personification, apostrophe) is only the first step. The marks — and the real reading — come from explaining what each device **makes the reader see or feel**.`,
          teachingTip:
            "Learners arrive able to spot a metaphor and stop there, because that is what they have been rewarded for. Break the habit with an unbreakable rule: no device may be named without a following sentence beginning 'the effect is…'. Enforce it in every lesson, and learners move from the bottom of the mark scheme to the top. Read every extract aloud, twice — figurative language written for the ear (alliteration, onomatopoeia, the rhythm of a line) is inert on the page and alive in the voice. Use local material wherever you can: proverbs in the learners' own languages are figures of speech they already own, and starting from a proverb they know makes metaphor and personification feel natural rather than foreign.",
          quiz: [
            { prompt: "A comparison using 'like' or 'as' is a", options: ["metaphor", "simile", "personification", "symbol"], correctIndex: 1, explanation: "A metaphor compares directly, without 'like' or 'as'." },
            { prompt: "Giving human qualities to something non-human is", options: ["hyperbole", "personification", "alliteration", "irony"], correctIndex: 1, explanation: "'The wind whispered' gives the wind a human action." },
            { prompt: "'The wind whipped the withered leaves' is an example of", options: ["assonance", "alliteration", "onomatopoeia", "oxymoron"], correctIndex: 1, explanation: "The repeated initial 'w' sound is alliteration." },
            { prompt: "'Deafening silence' is an example of", options: ["oxymoron", "simile", "metaphor", "euphemism"], correctIndex: 0, explanation: "Two contradictory words are joined for effect." },
            { prompt: "Deliberate exaggeration for effect is", options: ["litotes", "hyperbole", "irony", "paradox"], correctIndex: 1, explanation: "'I have told you a thousand times' is hyperbole." },
            { prompt: "Words that imitate the sound they name (hiss, buzz) show", options: ["assonance", "onomatopoeia", "alliteration", "metaphor"], correctIndex: 1, explanation: "Onomatopoeia imitates real sounds." },
            { prompt: "'He has passed on' instead of 'he has died' is", options: ["hyperbole", "euphemism", "irony", "paradox"], correctIndex: 1, explanation: "A euphemism softens a harsh idea." },
            { prompt: "The central idea or message of a literary work is its", options: ["plot", "setting", "theme", "tone"], correctIndex: 2, explanation: "Theme is what the work is fundamentally about." },
            { prompt: "'Her voice was rain on a tin roof' (no 'like' or 'as') is a", options: ["simile", "metaphor", "personification", "hyperbole"], correctIndex: 1, explanation: "A direct comparison without 'like'/'as' is a metaphor." },
            { prompt: "Addressing an absent person or thing directly, as in 'O death…', is", options: ["apostrophe", "assonance", "allusion", "irony"], correctIndex: 0, explanation: "Apostrophe addresses the absent or non-human directly." },
            { prompt: "An object that stands for something beyond itself (a dove for peace) is a", options: ["simile", "symbol", "paradox", "pun"], correctIndex: 1, explanation: "This is symbolism." },
            { prompt: "The emotional atmosphere a work creates in the reader is the", options: ["tone", "mood", "style", "plot"], correctIndex: 1, explanation: "Tone is the writer's attitude; mood is the reader's atmosphere." },
            { prompt: "An apparent contradiction that reveals a truth, like 'the child is father of the man', is a", options: ["paradox", "simile", "euphemism", "hyperbole"], correctIndex: 0, explanation: "A paradox seems contradictory yet is true." },
            { prompt: "Deliberate understatement, such as 'not bad at all' for excellent, is", options: ["hyperbole", "litotes", "irony", "metaphor"], correctIndex: 1, explanation: "Litotes diminishes to emphasise." },
            { prompt: "Language that appeals to the senses is called", options: ["imagery", "plot", "tone", "diction"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
            { prompt: "When analysing a figure of speech, the most important step is to", options: ["name it", "count how often it appears", "explain its effect on the reader", "translate it"], correctIndex: 2, explanation: "Marks come from explaining the effect, not just naming the device." },
            { prompt: "Repetition of vowel sounds, as in 'the old stones grow cold', is", options: ["alliteration", "assonance", "onomatopoeia", "rhyme"], correctIndex: 1, explanation: "Assonance repeats vowel sounds." },
            { prompt: "Saying the opposite of what is meant, or a gap between expectation and outcome, is", options: ["irony", "simile", "symbol", "euphemism"], correctIndex: 0, explanation: "This is irony." },
            { prompt: "A short traditional saying that states a truth, common in African oral literature, is a", options: ["metaphor", "proverb", "sonnet", "soliloquy"], correctIndex: 1, explanation: "Proverbs compress wisdom into a memorable saying." },
            { prompt: "Literature differs from ordinary writing because it uses language", options: ["only to inform", "deliberately and artistically for effect", "without any meaning", "only in poems"], correctIndex: 1, explanation: "Literature uses language artistically, not merely to convey facts." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define and give an example of each: simile, metaphor, personification, hyperbole and oxymoron.", answerKey: "Simile — comparison using like/as, e.g. 'brave as a lion'. Metaphor — direct comparison without like/as, e.g. 'he is a lion'. Personification — human qualities to the non-human, e.g. 'the sea roared angrily'. Hyperbole — deliberate exaggeration, e.g. 'a thousand times'. Oxymoron — two contradictory words joined, e.g. 'bitter sweetness'. Award 1 mark per definition and 1 per apt example.", marks: 10 },
            { type: "SHORT_ANSWER", prompt: "Name the seven elements of literature and state briefly what each means.", answerKey: "Theme — the central idea; plot — the sequence of events; character — a person in the work; setting — the time and place; style — the writer's manner; tone — the writer's attitude; mood — the atmosphere felt by the reader. Award 1 mark per element correctly named and explained (up to 7); accept a strong answer of six for near-full marks.", marks: 7 },
            { type: "MULTIPLE_CHOICE", prompt: "'The tide counts out its patient arithmetic of loss' contains which two figures of speech?", options: ["Simile and hyperbole", "Personification and metaphor", "Onomatopoeia and irony", "Euphemism and paradox"], correctIndex: 1, answerKey: "The tide is given the human power to count (personification) and its action is figured as arithmetic (metaphor). Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why, in analysing a text, it is not enough to name a figure of speech, giving an example of a device analysed properly.", answerKey: "Naming a device shows recognition but not understanding; the value of a figure of speech lies in what it makes the reader see or feel, so analysis must explain the effect. Example: 'The alliteration in wind whipped the withered leaves forces the reader to repeat a harsh sound, so the line enacts the roughness it describes.' Award 4 marks for the explanation and 4 for a device correctly analysed with its effect.", marks: 8 },
            { type: "ESSAY", prompt: "Choose any poem or passage you have studied. Identify at least four figures of speech in it and, in each case, explain the effect the device creates. Support each point with a quotation.", answerKey: "Award marks for: at least four figures of speech correctly identified and accurately quoted, 8 marks; a clear explanation of the effect of each on the reader — the discriminating requirement — 12 marks; quality and aptness of the quotations, 4 marks; organisation and expression, 4 marks. A learner who lists and names devices without explaining their effects should not exceed 10 regardless of how many are identified.", marks: 28 },
          ],
        },
        {
          slug: "drama-and-shakespeare",
          title: "The Elements and Kinds of Drama",
          objective:
            "By the end of the unit, learners should be able to define drama, identify its kinds (tragedy, comedy, tragicomedy), analyse character, conflict and theme, and apply these to a Shakespearean play such as A Midsummer Night's Dream.",
          estimatedMinutes: 160,
          notes: `## Introduction

A novel is finished the moment it is written, but a play is only *half* made on the page — it waits for actors, a stage and an audience to bring it fully to life. This unit explores **drama**: what makes it different from prose and poetry, its main **kinds** (tragedy, comedy, tragicomedy), and its building blocks — **character, conflict, dialogue and theme** — together with techniques like the **soliloquy**, the **aside** and **dramatic irony**. It then puts all of this to work on the set text, Shakespeare's comedy *A Midsummer Night's Dream*.

## What drama is

**Drama** is literature written to be **performed** by actors before an audience. The word comes from the Greek *dran*, to do or to act.

Drama differs from prose and poetry in one basic way: it is **incomplete on the page**. A novel is finished when written; a play is a set of instructions for a performance. Character is revealed almost entirely through **speech and action**, because there is normally no narrator to explain.

## The kinds of drama

- **Tragedy** — a serious play ending in the downfall, suffering or death of the main character (the *tragic hero*).
- **Comedy** — a light play, often with confusion and mistakes, ending happily (frequently in marriage or reconciliation).
- **Tragicomedy** — a play combining serious and comic elements, with tension that could turn to disaster but ends happily.

## Elements of drama

- **Plot** — the sequence of events, driven by conflict.
- **Character** — the people in the play, revealed by what they say and do.
- **Dialogue** — the conversation between characters, which carries almost the whole work.
- **Conflict** — the struggle that drives the plot.
- **Theme** — the central idea.
- **Stage directions** — the playwright's instructions on movement, setting and delivery.

## Character

- **Protagonist** — the main character.
- **Antagonist** — the character or force opposing the protagonist.
- **Major characters** carry the main action; **minor characters** support it.
- Characters are known by their **traits** (their qualities) and their **roles** (what they do in the play).

## Conflict — major and minor

- **Conflict** is the struggle at the heart of the play. A **major conflict** drives the whole plot; **minor conflicts** are smaller struggles within it.
- Types: person against person; person against self; person against society; person against nature.

## Some dramatic techniques

- **Soliloquy** — a speech by a character alone on stage, revealing inner thoughts.
- **Aside** — a short remark to the audience, unheard by other characters.
- **Dramatic irony** — where the audience knows something a character does not.

## Shakespearean drama: A Midsummer Night's Dream

**William Shakespeare** (1564–1616) is the most famous playwright in the English language. His plays are grouped as tragedies (*Macbeth*, *Romeo and Juliet*), comedies (*A Midsummer Night's Dream*, *Twelfth Night*) and histories.

*A Midsummer Night's Dream* is a **comedy**. Its interwoven plots — the four young lovers who flee into the forest and are confused by a magic love potion, the fairy king and queen Oberon and Titania and their servant Puck, and a group of workmen rehearsing a play — cross and tangle before all is happily resolved.

- **Themes** include love and its confusions, illusion versus reality (the "dream"), and order restored after disorder.
- **Conflict:** the lovers' quarrels (person against person) and the dispute between Oberon and Titania.
- **Comic technique:** mistaken identity, the magic potion, and dramatic irony — the audience knows about the potion's effects while the confused lovers do not.

## Reading a play

Because a play is written for performance, read it actively: **assign parts and read aloud**, picture the stage, and treat the **stage directions as part of the text**, not decoration.

## Common errors and misconceptions

- **Confusing a soliloquy with an aside** — a **soliloquy** is a longer speech by a character *alone* on stage; an **aside** is a *short* remark made to the audience while other characters are present but do not hear it.
- **Mixing up protagonist and antagonist** — the **protagonist** is the main character; the **antagonist** is the character or force *opposing* them.
- **Thinking dramatic irony just means something surprising** — it is specifically when the **audience knows something a character does not**, which is what drives much of the comedy in *A Midsummer Night's Dream*.
- **Skipping the stage directions** — they are part of the text and carry meaning (movement, mood, delivery); ignoring them means missing half the play.`,
          workedExample: `**Question:** Explain, with reference to A Midsummer Night's Dream, why the play is a comedy rather than a tragedy, and how conflict and dramatic irony work in it.

**Solution**

*Step 1 — recall the difference between comedy and tragedy.*
A **tragedy** is a serious play ending in the downfall, suffering or death of the main character. A **comedy** is a lighter play, often full of confusion and mistakes, ending **happily** — typically in marriage or reconciliation, with order restored.

*Step 2 — show why A Midsummer Night's Dream is a comedy.*
The play is full of **confusion and mistaken love** — the four young lovers, muddled by a magic potion, pursue the wrong partners through the forest — but the tone is **light**, the mishaps are amusing rather than fatal, and the ending is **happy**: the potion is corrected, the right couples are united in marriage, and the disorder of the forest gives way to restored order. Nobody dies or is ruined. These are the marks of comedy, not tragedy.

*Step 3 — conflict.*
The play's conflicts are largely **person against person**: the lovers quarrel and change partners, and the fairy king **Oberon** and queen **Titania** are in dispute. These conflicts create the tangle of the plot — but because it is comedy, they are resolved happily rather than ending in disaster.

*Step 4 — dramatic irony.*
**Dramatic irony** occurs where the **audience knows something a character does not**. Here the audience knows that **Puck's magic potion** has caused the lovers' sudden, misdirected passions, while the confused lovers themselves do not understand why their feelings have changed. This gap between what the audience knows and what the characters know is a major source of the play's **humour**: we laugh because we can see the cause of the confusion that the characters cannot.

**Answer:** A Midsummer Night's Dream is a comedy because, despite its conflicts and confusions, it is light in tone and ends happily with the lovers united and order restored; its conflicts are mainly person-against-person quarrels resolved without disaster; and dramatic irony — the audience knowing about the potion while the lovers do not — drives much of its comedy.`,
          teachingTip:
            "A play read silently at desks is only half read. Assign parts, stand learners up, and have them perform even short extracts — dramatic meaning lives in delivery, position and pause, and a Shakespeare scene that seems difficult on the page becomes clear when spoken. Insist learners read the stage directions too, because these carry meaning the dialogue does not. Dramatic irony is the highest-value concept here and is best staged: have one learner speak while the class holds knowledge the speaker lacks, and the tension and humour are felt at once. Connect Shakespeare to what learners already know about performance — the masquerade, festival and storytelling traditions of their own communities — so drama is understood as something their culture has always done, not a foreign form, and pair the set text with African drama (as the syllabus does in later periods) to keep that link alive.",
          quiz: [
            { prompt: "Drama differs from prose and poetry mainly because it is", options: ["always sad", "written to be performed", "written in verse", "shorter"], correctIndex: 1, explanation: "A play is a set of instructions for performance before an audience." },
            { prompt: "A play ending in the downfall or death of the main character is a", options: ["comedy", "tragedy", "tragicomedy", "farce"], correctIndex: 1, explanation: "Tragedy ends in the hero's downfall or death." },
            { prompt: "A light play ending happily is a", options: ["tragedy", "comedy", "elegy", "epic"], correctIndex: 1, explanation: "Comedy is light in tone and ends happily." },
            { prompt: "A play combining serious and comic elements is a", options: ["tragedy", "comedy", "tragicomedy", "sonnet"], correctIndex: 2, explanation: "Tragicomedy blends the two." },
            { prompt: "In a play, character is revealed mainly through", options: ["a narrator's explanation", "speech and action", "the title", "stage size"], correctIndex: 1, explanation: "With no narrator, what characters say and do reveals them." },
            { prompt: "The main character of a play is the", options: ["antagonist", "protagonist", "chorus", "narrator"], correctIndex: 1, explanation: "The protagonist is the central character." },
            { prompt: "The character or force opposing the main character is the", options: ["protagonist", "antagonist", "foil", "minor character"], correctIndex: 1, explanation: "The antagonist opposes the protagonist." },
            { prompt: "A speech by a character alone on stage, revealing inner thoughts, is a", options: ["dialogue", "soliloquy", "aside", "prologue"], correctIndex: 1, explanation: "A soliloquy is spoken alone; an aside is to the audience amid others." },
            { prompt: "Dramatic irony occurs when", options: ["a character tells a joke", "the audience knows something a character does not", "the play ends unhappily", "two characters argue"], correctIndex: 1, explanation: "The gap between audience and character knowledge creates dramatic irony." },
            { prompt: "A Midsummer Night's Dream by Shakespeare is a", options: ["tragedy", "comedy", "history", "poem"], correctIndex: 1, explanation: "It is a comedy of confused lovers, ending happily." },
            { prompt: "The struggle that drives the plot of a play is the", options: ["setting", "conflict", "tone", "stage direction"], correctIndex: 1, explanation: "Conflict is the central struggle." },
            { prompt: "A conflict within a character's own mind is", options: ["person against person", "person against self", "person against nature", "person against society"], correctIndex: 1, explanation: "Internal struggle is person against self." },
            { prompt: "Stage directions should be", options: ["skipped when reading", "read as part of the text", "read only by actors", "ignored in exams"], correctIndex: 1, explanation: "They convey movement, mood and meaning." },
            { prompt: "William Shakespeare is best described as", options: ["an African novelist", "the most famous playwright in English", "a modern poet", "a Liberian dramatist"], correctIndex: 1, explanation: "Shakespeare is the most celebrated English playwright." },
            { prompt: "In A Midsummer Night's Dream, the confusion among the lovers is caused by", options: ["a war", "a magic love potion", "a famine", "a storm at sea"], correctIndex: 1, explanation: "Puck's love potion misdirects the lovers' affections." },
            { prompt: "The qualities of a character are called their", options: ["roles", "traits", "lines", "cues"], correctIndex: 1, explanation: "Traits are qualities; roles are what the character does." },
            { prompt: "A short remark spoken to the audience but not heard by other characters is an", options: ["aside", "epilogue", "soliloquy", "monologue"], correctIndex: 0, explanation: "The aside shares a thought with the audience alone." },
            { prompt: "A theme of A Midsummer Night's Dream is", options: ["the horrors of war", "love and its confusions, and illusion versus reality", "the rise of empires", "the loss of a kingdom"], correctIndex: 1, explanation: "Love, confusion and the 'dream' of illusion versus reality run through the play." },
            { prompt: "Conversation between characters in a play is called", options: ["narration", "dialogue", "commentary", "description"], correctIndex: 1, explanation: "Dialogue carries almost the whole of a play." },
            { prompt: "The best way to read a play is to", options: ["read it silently once", "assign parts and read it aloud, picturing the stage", "read only the last scene", "read the summary only"], correctIndex: 1, explanation: "Drama is written for performance and should be read actively." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define drama and name three kinds of drama, giving a distinguishing feature of each.", answerKey: "Drama is literature written to be performed by actors before an audience. Tragedy — a serious play ending in the downfall or death of the main character. Comedy — a light play ending happily. Tragicomedy — a play combining serious and comic elements. Award 3 marks for the definition and 2 per kind with its feature.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Distinguish between a protagonist and an antagonist, and between a major and a minor character.", answerKey: "The protagonist is the main character around whom the action centres; the antagonist is the character or force opposing the protagonist. Major characters carry the main action of the play, while minor characters play smaller, supporting roles. Award 3 marks for each distinction.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "In A Midsummer Night's Dream, the audience knows the lovers' feelings have been changed by Puck's potion, but the lovers do not. This is an example of", options: ["a soliloquy", "dramatic irony", "an aside", "tragedy"], correctIndex: 1, answerKey: "The audience holds knowledge the characters lack — dramatic irony — which drives the play's comedy. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why A Midsummer Night's Dream is classified as a comedy rather than a tragedy.", answerKey: "Despite its conflicts and confusions among the lovers, the play is light in tone, its mishaps are amusing rather than fatal, no one dies or is ruined, and it ends happily with the right couples united in marriage and order restored. These are the features of comedy; a tragedy would end in the downfall or death of the main character. Award up to 8 marks for a clear explanation referring to tone, the nature of the conflicts, and the happy ending.", marks: 8 },
            { type: "ESSAY", prompt: "Using a Shakespearean or other play you have studied, discuss how the playwright uses character, conflict and at least one dramatic technique to develop a theme. Support your points with reference to the text.", answerKey: "Award marks for: identification of a theme and how it is developed, 6 marks; analysis of character — protagonist, antagonist and their traits and roles — in service of the theme, 8 marks; analysis of the conflict (major and any minor), 6 marks; at least one dramatic technique (soliloquy, aside, dramatic irony) explained in terms of its effect on the audience, 6 marks; quality of textual reference throughout, 4 marks; organisation and expression, 4 marks. A learner who narrates the plot without analysing character, conflict and technique should not exceed 16.", marks: 34 },
          ],
        },
      ],
    },
  ],
};
