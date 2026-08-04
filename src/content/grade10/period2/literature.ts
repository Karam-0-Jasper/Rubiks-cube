import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester One, Period II: Figurative Expressions and Shakespearean
// Drama — the types of drama and the traits and roles of characters, and
// figurative expression in set poems. Period I introduced the devices and the
// elements of drama; Period II applies them to characterisation and to poetry.
export const literatureG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Characterisation and Figurative Expression in Poetry",
  summary:
    "Period II of the MoE Grade 10 Literature syllabus. Building on the devices and elements of drama from Period I, learners analyse the traits and roles of characters in drama (using A Midsummer Night's Dream and The Lion and the Jewel) and interpret figurative expression in set poems such as Senghor's Black Woman and D. H. Lawrence's Bats.",
  topics: [
    {
      slug: "characterisation-in-drama",
      title: "Character, Traits and Roles in Drama",
      objective:
        "By the end of the topic, learners should be able to describe the main types of character in a drama, explain how a playwright reveals character (characterisation), and outline the traits and roles of characters in set plays.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Character** = a person or being who takes part in the action of a play.
- **Characterisation** = the craft of building and revealing characters.
- **This topic:** the types of character; the methods that reveal them; **traits** (qualities) vs **roles** (function) — using Puck in *A Midsummer Night's Dream* and Baroka and Lakunle in *The Lion and the Jewel*.

## Character and characterisation

A **character** is a person (or being) who takes part in the action of a play. **Characterisation** is the way the playwright **creates and reveals** those characters so that the audience understands them.

## Types of character

Characters are classified by the role they play and by how much they change.

- **Protagonist** — the main character, whom the story centres on (the "hero"). In *A Midsummer Night's Dream*, the young lovers and the fairy king and queen drive the action.
- **Antagonist** — the character (or force) who opposes the protagonist and creates conflict.
- **Round character** — fully developed, with many sides and inner life; feels like a real person.
- **Flat character** — built around one or two traits; simple and unchanging.
- **Dynamic character** — one who **changes** through the play (learns, grows, or falls).
- **Static character** — one who **stays the same** from beginning to end.
- **Foil** — a character whose qualities **contrast** with another's, making the other's traits stand out.

## How a playwright reveals character (methods of characterisation)

Because a play is meant to be **performed**, character is shown mainly through what we see and hear:

1. **What the character says** — their words, opinions and choice of language.
2. **What the character does** — their actions and decisions under pressure.
3. **What other characters say** about them.
4. **Appearance and stage directions** — how they look, move and behave.
5. **Soliloquy and aside** — moments when a character reveals inner thoughts directly (introduced in Period I).

## Traits and roles

- A **trait** is a quality of character — brave, jealous, loyal, foolish, ambitious.
- A **role** is the function the character serves in the play — hero, villain, helper, comic relief, trickster.

### Examples
- In *A Midsummer Night's Dream*, **Puck** is mischievous and playful (traits) and serves as the **trickster** whose mistakes drive much of the comedy (role).
- In Wole Soyinka's *The Lion and the Jewel*, **Baroka** the old chief is cunning and proud (traits) and acts as a shrewd **antagonist** to the schoolteacher Lakunle in the contest for Sidi; **Lakunle** is modern, vain and impractical, serving as a **foil** to Baroka's traditional cunning.

## Why characterisation matters

- Strong characterisation makes an audience care about the story.
- Traits, actions and role uncover the play's **themes**.
- Example: the clash between tradition and modernity in *The Lion and the Jewel*.

## Common errors and misconceptions

- **Confusing a trait with a role** — a **trait** is a *quality* (brave, cunning, vain); a **role** is a *function* in the play (protagonist, foil, trickster). A good answer names both.
- **Naming traits with no evidence** — never write "Puck is funny" and stop; state the trait, the **evidence**, and the **method** of characterisation that reveals it.
- **Mixing up flat/round with static/dynamic** — **flat vs round** is about *depth* (one-sided vs fully developed); **static vs dynamic** is about *change* (stays the same vs grows or falls).
- **Retelling the plot instead of analysing character** — examiners reward *trait + evidence + method* linked to theme, not a summary of what happens.`,
      workedExample: `**Task.** Choosing one character from *The Lion and the Jewel*, show how the playwright reveals character. Identify two traits, the character's role, and the method of characterisation that reveals each trait.

**Chosen character: Lakunle** (the village schoolteacher)

**Trait 1 — vanity / self-importance**
- **How it is revealed (what he says):** Lakunle constantly boasts of his "modern" education and uses long, showy English words to impress others. His own speech exposes his vanity — a case of characterisation through **what the character says**.

**Trait 2 — impracticality**
- **How it is revealed (what he does):** he refuses to pay the traditional bride-price for Sidi on "principle," yet has no realistic plan to win her. His actions under pressure reveal that his modern ideals are not matched by practical sense — characterisation through **what the character does**.

**Role in the play**
Lakunle serves as a **foil** to the cunning old chief **Baroka**. Where Baroka is shrewd, patient and rooted in tradition, Lakunle is vain, hasty and half-modern. Placing them side by side sharpens both: the contrast is how Soyinka dramatises the play's central theme — the **clash between tradition and modernity**.

**Conclusion**
By examining Lakunle's own words (vanity) and his actions (impracticality), and his role as a foil, we see how the playwright builds a character who carries the play's meaning. Good analysis always names the **trait**, the **evidence**, and the **method** used to reveal it.`,
      teachingTip:
        "Push learners past 'good' and 'bad'. Insist that every trait they name is backed by evidence and a method: not 'Puck is funny', but 'Puck is mischievous, shown by his own words when he delights in his mistakes (characterisation through what the character says)'. The trait-evidence-method routine is exactly what earns marks in WAEC-style character questions and stops answers becoming plot summary.",
      quiz: [
        {
          prompt: "A character in a play is…",
          options: [
            "a person or being who takes part in the action",
            "the stage itself",
            "the audience",
            "the title of the play",
          ],
          correctIndex: 0,
          explanation: "Characters are the people who act in the drama.",
        },
        {
          prompt: "Characterisation is…",
          options: [
            "the way a playwright creates and reveals characters",
            "the number of acts in a play",
            "the price of a ticket",
            "the name of the theatre",
          ],
          correctIndex: 0,
          explanation: "It is how characters are built and made known to us.",
        },
        {
          prompt: "The main character a story centres on is the…",
          options: ["protagonist", "antagonist", "foil", "narrator"],
          correctIndex: 0,
          explanation: "The protagonist is the central figure (the hero).",
        },
        {
          prompt: "The character who opposes the protagonist is the…",
          options: ["antagonist", "protagonist", "chorus", "audience"],
          correctIndex: 0,
          explanation: "The antagonist creates conflict against the protagonist.",
        },
        {
          prompt: "A fully developed, many-sided character is called…",
          options: ["a round character", "a flat character", "a static character", "a prop"],
          correctIndex: 0,
          explanation: "Round characters have depth, like real people.",
        },
        {
          prompt: "A character built around only one or two traits is…",
          options: ["a flat character", "a round character", "a dynamic character", "a foil"],
          correctIndex: 0,
          explanation: "Flat characters are simple and unchanging.",
        },
        {
          prompt: "A character who changes during the play is…",
          options: ["dynamic", "static", "flat", "minor"],
          correctIndex: 0,
          explanation: "Dynamic characters grow or change.",
        },
        {
          prompt: "A character who stays the same throughout is…",
          options: ["static", "dynamic", "round", "the protagonist"],
          correctIndex: 0,
          explanation: "Static characters do not change.",
        },
        {
          prompt: "A character whose qualities contrast with another's is a…",
          options: ["foil", "protagonist", "chorus", "prop"],
          correctIndex: 0,
          explanation: "A foil highlights another character by contrast.",
        },
        {
          prompt: "A quality of a character, such as brave or jealous, is a…",
          options: ["trait", "role", "scene", "stage direction"],
          correctIndex: 0,
          explanation: "A trait is a character's quality.",
        },
        {
          prompt: "The function a character serves in a play (hero, villain, helper) is their…",
          options: ["role", "trait", "costume", "line"],
          correctIndex: 0,
          explanation: "The role is the character's function in the story.",
        },
        {
          prompt: "Which is a method of revealing character in drama?",
          options: [
            "what the character says and does",
            "the price of the book",
            "the length of the interval",
            "the colour of the curtains",
          ],
          correctIndex: 0,
          explanation: "Character is shown through speech, action and others' words.",
        },
        {
          prompt: "In A Midsummer Night's Dream, the mischievous trickster is…",
          options: ["Puck", "Baroka", "Lakunle", "Sidi"],
          correctIndex: 0,
          explanation: "Puck (Robin Goodfellow) is the playful trickster.",
        },
        {
          prompt: "In The Lion and the Jewel, the cunning old chief is…",
          options: ["Baroka", "Puck", "Lakunle", "Oberon"],
          correctIndex: 0,
          explanation: "Baroka is the shrewd traditional chief.",
        },
        {
          prompt: "In The Lion and the Jewel, Lakunle acts as a foil to Baroka because he is…",
          options: [
            "modern and vain, contrasting Baroka's traditional cunning",
            "identical to Baroka",
            "the play's narrator",
            "a static prop",
          ],
          correctIndex: 0,
          explanation: "Their contrast sharpens the tradition-vs-modernity theme.",
        },
        {
          prompt: "A soliloquy helps characterisation by revealing a character's…",
          options: ["inner thoughts", "costume", "ticket price", "exit door"],
          correctIndex: 0,
          explanation: "A soliloquy shares private thoughts with the audience.",
        },
        {
          prompt: "When we judge a character by what OTHER characters say about them, this is…",
          options: [
            "a method of characterisation",
            "a stage direction",
            "an interval",
            "a prop",
          ],
          correctIndex: 0,
          explanation: "Others' comments are one way character is revealed.",
        },
        {
          prompt: "Studying a character's traits and role helps us uncover the play's…",
          options: ["themes", "ticket sales", "printing date", "cover design"],
          correctIndex: 0,
          explanation: "Character analysis leads to the deeper themes.",
        },
        {
          prompt: "A good character analysis should name the trait, give evidence, and state the…",
          options: [
            "method of characterisation used",
            "price of the play",
            "author's birthday",
            "number of pages",
          ],
          correctIndex: 0,
          explanation: "Trait + evidence + method is the marking routine.",
        },
        {
          prompt: "The central theme dramatised by Baroka and Lakunle's contrast is…",
          options: [
            "tradition versus modernity",
            "war and peace",
            "the sea and the land",
            "night and day only",
          ],
          correctIndex: 0,
          explanation: "Their clash embodies tradition versus modernity.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define 'character' and 'characterisation', and explain the difference between them.",
          answerKey:
            "A character is a person or being who takes part in the action of a play; characterisation is the way the playwright creates and reveals those characters (through speech, action, others' words, appearance, soliloquy). The difference: character = who; characterisation = how they are shown. Award marks for both definitions and the distinction.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A character whose qualities contrast sharply with another's, highlighting the other, is called a…",
          options: ["foil", "protagonist", "static character", "chorus"],
          correctIndex: 0,
          answerKey: "A foil is defined by contrast that emphasises another character.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "For any character from a play you have studied, name two traits and state one method the playwright uses to reveal each.",
          answerKey:
            "Accept two clearly named traits (e.g. cunning, vain, loyal) each paired with a valid method of characterisation (what the character says/does, what others say, appearance/stage directions, soliloquy). Award marks for each trait correctly matched to a method with brief evidence.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss how a playwright uses characterisation to develop a theme in a drama you have studied. Refer to at least one character's traits, role and the methods used to reveal them.",
          answerKey:
            "A strong answer selects a character, names specific traits with evidence, states the character's role (e.g. protagonist, antagonist, foil), and identifies the methods of characterisation used (speech, action, others' comments, soliloquy). Crucially it links these to a theme — e.g. Lakunle and Baroka's contrast dramatising tradition versus modernity in The Lion and the Jewel, or the lovers/fairies dramatising the disorder of love in A Midsummer Night's Dream. Award marks for accurate character analysis (trait + evidence + method) and a clear connection to theme, not plot summary.",
          marks: 6,
        },
      ],
    },
    {
      slug: "figurative-expression-in-poetry",
      title: "Figurative Expression in Poetry",
      objective:
        "By the end of the topic, learners should be able to identify figures of speech in a poem, explain their effect, and use the 'name-and-effect' method to analyse figurative expression in set poems such as Black Woman and Bats.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Poetry packs feeling into few words, largely through **figures of speech**.
- Three-step routine for analysis: **name, quote, explain the effect**.
- **This topic:** applying the devices from Period I to whole poems — Senghor's *Black Woman* (the woman as symbol of Africa) and D. H. Lawrence's *Bats* (images of wonder shading into unease).

## Figurative language in poetry

- Poets rarely say things plainly.
- **Figurative expressions (figures of speech)** — language that means more than its literal words — create images, feeling and music.
- Period I introduced these devices; here they are applied to whole poems.

## The main figures to recognise

- **Simile** — a comparison using *like* or *as*: "her skin is like the night."
- **Metaphor** — a direct comparison, saying one thing **is** another: "you are the promised land."
- **Personification** — giving human qualities to non-human things: "the wind whispered."
- **Hyperbole** — deliberate exaggeration for effect: "I have told you a thousand times."
- **Imagery** — language that appeals to the senses (sight, sound, touch, smell, taste).
- **Symbolism** — an object standing for a larger idea (a dove for peace).
- **Alliteration** — repeated initial consonant sounds: "the soft, slow sea."
- **Repetition** — repeating a word or line for emphasis.

## The name-and-effect method

To analyse figurative expression, never just spot the device — always give its **effect**:

1. **Name** the figure of speech.
2. **Quote** the words from the poem.
3. **Explain the effect** — what image or feeling it creates and how it helps the poem's meaning.

## Applying it to set poems

### *Black Woman* (Léopold Sédar Senghor)
Senghor celebrates the beauty and dignity of the African woman, who becomes a **symbol** of Africa itself.

- **Metaphor / symbolism:** the "black woman" stands for the beauty and richness of Africa — praising her is praising the continent.
- **Imagery:** rich images of colour, land and ripeness ("promised land," "ripe fruit") appeal to sight and taste and build a mood of pride and love.
- **Effect:** the figures turn personal praise into a proud celebration of African identity — a key idea of the **Negritude** movement.

### *Bats* (D. H. Lawrence)
Lawrence describes bats at dusk with a mixture of wonder and disgust.

- **Simile:** bats are compared to "little lumps that fly in air" and to other quick, unsettling things, making the reader see their darting flight.
- **Personification / imagery:** the evening and the flying creatures are given vivid, uneasy life, so the reader shares the speaker's shudder.
- **Effect:** the figurative language turns an ordinary evening scene into a study of how beauty can shade into unease.

## Why it matters

- Recognising figures of speech is only half the skill.
- The marks — and the meaning — come from explaining **why** the poet chose them and **what they do** to the reader.

## Common errors and misconceptions

- **Device-spotting** — listing "metaphor, simile, personification" with no explanation earns almost nothing; always complete the **effect** step of the name–quote–effect routine.
- **Confusing simile and metaphor** — a **simile** keeps *like* or *as*; a **metaphor** drops them and says one thing *is* another.
- **Reading a symbol too literally** — in *Black Woman* the woman is a **symbol of Africa**; treating the poem as being only about one person misses its whole meaning.
- **Assuming a poet's attitude is simple** — in *Bats*, Lawrence feels **wonder *and* unease** at once; good analysis captures mixed feeling rather than forcing a single label.`,
      workedExample: `**Task.** Analyse the following two lines using the name-and-effect method:

*"The black woman is a ripe fruit, / and the wind whispers her name through the tall grass."*

**Line 1 — "The black woman is a ripe fruit"**
1. **Name:** this is a **metaphor** (it says she *is* a ripe fruit, not *like* one).
2. **Quote:** "is a ripe fruit."
3. **Effect:** the metaphor compares the woman to ripe fruit, suggesting beauty, richness, nourishment and being at the fullness of life. It appeals to the senses (taste and sight) and turns praise of a person into a celebration of natural abundance — and, as a **symbol**, of Africa's richness.

**Line 2 — "the wind whispers her name through the tall grass"**
1. **Name:** **personification** (the wind is given the human ability to "whisper"). There is also gentle **imagery** of the tall grass.
2. **Quote:** "the wind whispers her name."
3. **Effect:** by making the wind whisper, the poet creates a soft, tender, almost reverent mood, as if all of nature honours her. The quiet sound-image deepens the feeling of love and pride.

**Conclusion:** naming the device is not enough; the analysis earns its marks by explaining that the metaphor builds an image of rich beauty and the personification creates a tender, reverent mood — together celebrating the woman, and Africa, with pride.`,
      teachingTip:
        "Learners lose marks by 'device-spotting' — listing 'metaphor, simile, personification' with no explanation. Drill the three-step name–quote–effect frame on two lines at a time until the 'effect' sentence is automatic. A useful prompt for the effect step: 'What does this make me see, hear or feel, and why did the poet want that?' Answering that question is the whole difference between a low and a high mark.",
      quiz: [
        {
          prompt: "Figurative language is language that…",
          options: [
            "means more than its literal words",
            "is always written in capitals",
            "has no meaning",
            "can only be spoken",
          ],
          correctIndex: 0,
          explanation: "Figures of speech carry meaning beyond the literal.",
        },
        {
          prompt: "A comparison using 'like' or 'as' is a…",
          options: ["simile", "metaphor", "hyperbole", "symbol"],
          correctIndex: 0,
          explanation: "Similes use 'like' or 'as'.",
        },
        {
          prompt: "A direct comparison saying one thing IS another is a…",
          options: ["metaphor", "simile", "alliteration", "repetition"],
          correctIndex: 0,
          explanation: "A metaphor states the comparison directly.",
        },
        {
          prompt: "Giving human qualities to non-human things is…",
          options: ["personification", "hyperbole", "simile", "symbolism"],
          correctIndex: 0,
          explanation: "Personification makes non-human things act human.",
        },
        {
          prompt: "'I have told you a thousand times' is an example of…",
          options: ["hyperbole", "simile", "metaphor", "alliteration"],
          correctIndex: 0,
          explanation: "Deliberate exaggeration for effect is hyperbole.",
        },
        {
          prompt: "Language that appeals to the senses is called…",
          options: ["imagery", "rhyme", "meter", "a stanza"],
          correctIndex: 0,
          explanation: "Imagery appeals to sight, sound, touch, smell or taste.",
        },
        {
          prompt: "An object that stands for a larger idea (a dove for peace) is a…",
          options: ["symbol", "simile", "pun", "rhyme"],
          correctIndex: 0,
          explanation: "Symbolism uses an object to represent an idea.",
        },
        {
          prompt: "Repeated initial consonant sounds ('soft, slow sea') is…",
          options: ["alliteration", "hyperbole", "metaphor", "irony"],
          correctIndex: 0,
          explanation: "Alliteration repeats the opening consonant sounds.",
        },
        {
          prompt: "The name-and-effect method requires you to name the device, quote it, and…",
          options: [
            "explain its effect",
            "count the lines",
            "ignore its meaning",
            "translate it",
          ],
          correctIndex: 0,
          explanation: "The marks come from explaining the effect.",
        },
        {
          prompt: "'The wind whispered through the grass' is an example of…",
          options: ["personification", "simile", "hyperbole", "symbol"],
          correctIndex: 0,
          explanation: "The wind is given the human act of whispering.",
        },
        {
          prompt: "'Her smile was as bright as the sun' is a…",
          options: ["simile", "metaphor", "personification", "repetition"],
          correctIndex: 0,
          explanation: "It compares using 'as', so it is a simile.",
        },
        {
          prompt: "In Senghor's Black Woman, the black woman is used as a symbol of…",
          options: ["Africa", "war", "winter", "the sea only"],
          correctIndex: 0,
          explanation: "She symbolises the beauty and richness of Africa.",
        },
        {
          prompt: "Senghor's poem is associated with which African literary movement?",
          options: ["Negritude", "Romanticism", "Realism", "the Enlightenment"],
          correctIndex: 0,
          explanation: "Black Woman is a key Negritude poem celebrating African identity.",
        },
        {
          prompt: "In D. H. Lawrence's Bats, the poet's attitude to the bats is one of…",
          options: [
            "wonder mixed with unease/disgust",
            "pure hatred only",
            "total indifference",
            "scientific boredom",
          ],
          correctIndex: 0,
          explanation: "Lawrence blends fascination with a shudder of distaste.",
        },
        {
          prompt: "'You are my sunshine' is a…",
          options: ["metaphor", "simile", "hyperbole", "alliteration"],
          correctIndex: 0,
          explanation: "It directly calls the person sunshine — a metaphor.",
        },
        {
          prompt: "The BEST reason to identify a figure of speech in a poem is to…",
          options: [
            "explain what it does to meaning and feeling",
            "make the essay longer",
            "avoid reading the poem",
            "count devices for a list",
          ],
          correctIndex: 0,
          explanation: "Analysis explains effect; listing devices alone earns little.",
        },
        {
          prompt: "Repeating a word or line for emphasis is called…",
          options: ["repetition", "rhyme", "simile", "symbol"],
          correctIndex: 0,
          explanation: "Repetition stresses an idea by repeating it.",
        },
        {
          prompt: "Rich images of 'ripe fruit' and 'promised land' in Black Woman appeal mainly to the reader's…",
          options: ["senses (sight and taste)", "sense of smell only", "hearing only", "sense of time"],
          correctIndex: 0,
          explanation: "Such imagery builds sensory pictures of richness and beauty.",
        },
        {
          prompt: "When analysing a metaphor, you should explain both the comparison and its…",
          options: ["effect on meaning or feeling", "number of syllables", "printing date", "page number"],
          correctIndex: 0,
          explanation: "Naming the metaphor is not enough — explain its effect.",
        },
        {
          prompt: "Which step is MISSING from device-spotting that the name-and-effect method adds?",
          options: [
            "explaining the effect of the device",
            "reading the poem",
            "finding the title",
            "counting the stanzas",
          ],
          correctIndex: 0,
          explanation: "The effect explanation is what device-spotting leaves out.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define simile, metaphor and personification, giving one example of each.",
          answerKey:
            "Simile – a comparison using 'like' or 'as' (e.g. 'as brave as a lion'); metaphor – a direct comparison saying one thing is another (e.g. 'he is a lion'); personification – giving human qualities to non-human things (e.g. 'the sea roared angrily'). Award a mark per device correctly defined with a valid example (max 3), plus a mark for overall accuracy.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "'The angry clouds marched across the sky' uses which figure of speech?",
          options: ["personification", "simile", "hyperbole", "alliteration"],
          correctIndex: 0,
          answerKey: "Clouds are given the human actions of anger and marching.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Using the name-and-effect method, analyse the line: 'Her voice was a gentle river flowing through the room.'",
          answerKey:
            "Name: metaphor (the voice is called a gentle river). Quote: 'a gentle river flowing.' Effect: it suggests the voice is smooth, calm, continuous and soothing, creating a peaceful mood and appealing to the senses. Award marks for correctly naming the metaphor, quoting, and a clear explanation of effect.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Choose a poem you have studied and discuss how the poet uses at least two figures of speech to convey meaning or feeling. Explain the effect of each.",
          answerKey:
            "A strong answer names at least two distinct figures of speech from a studied poem (e.g. metaphor/symbolism and imagery in Senghor's Black Woman, or simile and personification in Lawrence's Bats), quotes or refers accurately to the text, and — most importantly — explains the effect of each on the poem's meaning or feeling (e.g. how metaphor turns praise of a woman into a celebration of Africa; how imagery creates unease). Award marks for accurate identification, textual reference, and clear effect analysis rather than mere device-spotting.",
          marks: 6,
        },
      ],
    },
  ],
};
