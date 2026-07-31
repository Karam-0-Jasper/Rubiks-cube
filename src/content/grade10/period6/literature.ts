import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester Two, Period VI: Drama and Prose (Review) — a synthesis
// of the year's study of drama (Periods I-III) and prose (Periods IV-V).
export const literatureG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Drama and Prose (Review)",
  summary:
    "Period VI of the MoE Grade 10 Literature syllabus. Learners review and pull together the year's study — the elements and types of drama, the forms and elements of prose, and the figurative devices of literature — and practise applying one consistent analytical method across all genres.",
  topics: [
    {
      slug: "review-of-drama",
      title: "Review of Drama: Elements, Types and Analysis",
      objective:
        "By the end of the topic, learners should be able to recall the elements and types of drama, the tools of characterisation, and apply them to analyse a dramatic text.",
      estimatedMinutes: 150,
      notes: `## Pulling drama together

This period **reviews** the study of **drama** from earlier in the year. Drama is literature written to be **performed** by actors before an audience.

## The elements of drama (recap)

Every play is built from the same elements:

- **Plot** — the sequence of events (exposition → rising action → climax → falling action → resolution).
- **Character** — the people in the play; revealed through **characterisation**.
- **Conflict** — the struggle that drives the play (person vs person, person vs society, person vs self).
- **Theme** — the central idea or message.
- **Dialogue** — the spoken words through which the play unfolds.
- **Setting** — the time and place.

## Types (kinds) of drama (recap)

- **Tragedy** — a serious play ending in misfortune or the downfall of the main character (e.g. a tragic hero brought down by a flaw or fate).
- **Comedy** — a light play, often ending happily, meant to amuse.
- **Tragicomedy** — a play mixing serious and comic elements.
- **African drama** — rooted in ritual, festival and oral tradition, using music, proverbs and community.

## Character and characterisation (recap)

- Types of character: **protagonist, antagonist, round/flat, dynamic/static, foil**.
- **Characterisation** is revealed through what a character **says** and **does**, what **others** say, appearance/stage directions, and **soliloquy/aside**.

## Special dramatic techniques (recap)

- **Soliloquy** — a character speaking their thoughts aloud, alone on stage.
- **Aside** — a remark to the audience the other characters do not hear.
- **Dramatic irony** — the audience knows something a character does not.

## Analysing a play — the consistent method

Whatever the play, use **name–evidence–explanation**:

1. **Name** the element or technique (a theme, a character trait, dramatic irony…).
2. **Give evidence** from the text (an event, an action, a line).
3. **Explain** its effect — how it works and why the playwright used it.

This turns reading into analysis and avoids mere **plot summary**. Studying *A Midsummer Night's Dream* and *The Lion and the Jewel* this year gave learners the practice; the method is the lasting skill.`,
      workedExample: `**Task.** Using a play you have studied, show your command of drama by identifying (a) its type, (b) its central conflict and theme, (c) one technique the playwright uses, applying name–evidence–explanation.

**Play:** *The Lion and the Jewel* by Wole Soyinka

**(a) Type of drama**
It is a **comedy** (with elements of African drama — music, dance and village life). It is light in tone and centres on a contest rather than a tragic downfall.

**(b) Central conflict and theme**
- **Conflict:** the rivalry between **Lakunle** (the modern schoolteacher) and **Baroka** (the traditional chief) for **Sidi** — a person-vs-person conflict.
- **Theme:** the **clash between tradition and modernity**, dramatised through that rivalry; the conflict *is* the theme in action.

**(c) One technique — name, evidence, explanation**
- **Name:** **characterisation through contrast (a foil).**
- **Evidence:** Lakunle constantly uses grand English and boasts of being "modern," while Baroka is patient and cunning; the two are placed side by side throughout.
- **Explanation:** by making Lakunle a **foil** to Baroka, the playwright sharpens both characters and dramatises the theme — the shallowness of imported "modernity" against the strength of tradition. The technique carries the play's meaning.

**Conclusion:** *The Lion and the Jewel* is a comedy whose person-vs-person conflict over Sidi dramatises the theme of tradition versus modernity, built through the characterisation technique of the foil — analysed, as always, by naming the technique, giving evidence, and explaining its effect.`,
      teachingTip:
        "Use this review to consolidate, not to introduce anything new — the goal is fluent recall of the elements, types and techniques of drama and confident use of the name–evidence–explanation method. A good exercise is a rapid oral quiz on definitions (soliloquy, foil, dramatic irony, tragedy) followed by applying two of them to a studied play. Keep hammering that analysis beats plot summary; that single habit determines exam marks across every genre.",
      quiz: [
        {
          prompt: "Drama is literature written to be…",
          options: ["performed before an audience", "read silently only", "sung", "printed as a novel"],
          correctIndex: 0,
          explanation: "Drama is meant to be acted.",
        },
        {
          prompt: "The sequence of events in a play is the…",
          options: ["plot", "theme", "setting", "cast"],
          correctIndex: 0,
          explanation: "Plot is the order of events.",
        },
        {
          prompt: "The central idea or message of a play is its…",
          options: ["theme", "plot", "climax", "prop"],
          correctIndex: 0,
          explanation: "The theme is the central idea.",
        },
        {
          prompt: "A serious play ending in the downfall of the main character is a…",
          options: ["tragedy", "comedy", "tragicomedy", "farce"],
          correctIndex: 0,
          explanation: "Tragedy ends in misfortune/downfall.",
        },
        {
          prompt: "A light play meant to amuse, often ending happily, is a…",
          options: ["comedy", "tragedy", "epic", "elegy"],
          correctIndex: 0,
          explanation: "Comedy amuses and often ends happily.",
        },
        {
          prompt: "A play mixing serious and comic elements is a…",
          options: ["tragicomedy", "pure tragedy", "pure comedy", "sonnet"],
          correctIndex: 0,
          explanation: "Tragicomedy blends the two.",
        },
        {
          prompt: "A character who contrasts with another to highlight them is a…",
          options: ["foil", "protagonist", "chorus", "narrator"],
          correctIndex: 0,
          explanation: "A foil sharpens another by contrast.",
        },
        {
          prompt: "A character speaking their thoughts aloud, alone on stage, is delivering a…",
          options: ["soliloquy", "dialogue", "aside", "prologue"],
          correctIndex: 0,
          explanation: "A soliloquy reveals inner thoughts alone.",
        },
        {
          prompt: "A remark to the audience that other characters do not hear is an…",
          options: ["aside", "epilogue", "soliloquy", "act"],
          correctIndex: 0,
          explanation: "An aside is spoken to the audience only.",
        },
        {
          prompt: "When the audience knows something a character does not, this is…",
          options: ["dramatic irony", "a metaphor", "alliteration", "a stanza"],
          correctIndex: 0,
          explanation: "That is dramatic irony.",
        },
        {
          prompt: "The main character of a play is the…",
          options: ["protagonist", "antagonist", "foil", "chorus"],
          correctIndex: 0,
          explanation: "The protagonist is central.",
        },
        {
          prompt: "The character who opposes the protagonist is the…",
          options: ["antagonist", "hero", "narrator", "prop"],
          correctIndex: 0,
          explanation: "The antagonist creates conflict.",
        },
        {
          prompt: "Characterisation is revealed through what a character says and…",
          options: ["does", "eats", "wears only", "the ticket price"],
          correctIndex: 0,
          explanation: "Speech and action reveal character.",
        },
        {
          prompt: "The struggle that drives a play is the…",
          options: ["conflict", "setting", "prop", "cast list"],
          correctIndex: 0,
          explanation: "Conflict drives the plot.",
        },
        {
          prompt: "The turning point of highest tension in a plot is the…",
          options: ["climax", "exposition", "resolution", "prologue"],
          correctIndex: 0,
          explanation: "The climax is the peak.",
        },
        {
          prompt: "African drama is rooted in ritual, festival and…",
          options: ["oral tradition", "silent reading", "printing", "algebra"],
          correctIndex: 0,
          explanation: "Oral storytelling is a root of African drama.",
        },
        {
          prompt: "The consistent method for analysing literature is…",
          options: ["name–evidence–explanation", "guess–skip–stop", "read–forget", "count–copy"],
          correctIndex: 0,
          explanation: "Name the feature, give evidence, explain the effect.",
        },
        {
          prompt: "Good analysis of a play avoids merely…",
          options: ["retelling the plot", "quoting the text", "naming the theme", "reading closely"],
          correctIndex: 0,
          explanation: "Avoid plot summary; analyse instead.",
        },
        {
          prompt: "In The Lion and the Jewel, Lakunle acts as a … to Baroka.",
          options: ["foil", "chorus", "narrator", "prop"],
          correctIndex: 0,
          explanation: "Their contrast makes each stand out.",
        },
        {
          prompt: "The time and place of a play is its…",
          options: ["setting", "plot", "theme", "climax"],
          correctIndex: 0,
          explanation: "Setting is the time and place.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three main types of drama and define each in one phrase.",
          answerKey:
            "Tragedy — a serious play ending in misfortune/downfall of the main character; Comedy — a light play, often ending happily, meant to amuse; Tragicomedy — a play mixing serious and comic elements. Award a mark per type correctly named and defined.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A character speaking their private thoughts aloud, alone on stage, is using a…",
          options: ["soliloquy", "aside", "dialogue", "prologue"],
          correctIndex: 0,
          answerKey: "A soliloquy is delivered alone on stage.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a soliloquy and an aside.",
          answerKey:
            "A soliloquy is a longer speech in which a character, alone on stage, speaks their thoughts aloud to the audience; an aside is a short remark made to the audience (often with other characters present) that the other characters are not meant to hear. Award marks for both definitions and the distinction.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "For a play you have studied, analyse how the playwright uses characterisation and conflict to develop a theme, applying the name–evidence–explanation method.",
          answerKey:
            "A strong answer selects a studied play, names a theme, and shows how characterisation (traits revealed through speech, action, others' words, soliloquy, or a foil) and the central conflict develop that theme, supporting each point with evidence from the text and explaining its effect — not merely summarising the plot. For example, in The Lion and the Jewel the foil relationship between Lakunle and Baroka and their conflict over Sidi dramatise the theme of tradition versus modernity. Award marks for the theme, the use of characterisation and conflict with evidence, and the analytical (not summarising) approach.",
          marks: 6,
        },
      ],
    },
    {
      slug: "review-of-prose-and-integrated-analysis",
      title: "Review of Prose and Integrated Literary Analysis",
      objective:
        "By the end of the topic, learners should be able to recall the forms and elements of prose and the main figures of speech, and apply one consistent analytical method across drama, prose and poetry.",
      estimatedMinutes: 150,
      notes: `## Pulling prose (and the whole year) together

This final review draws together **prose** (Periods IV–V) and connects it with **drama** and the **figurative devices** studied all year, so learners can analyse **any** literary text with confidence.

## Prose — forms and elements (recap)

- **Prose** is ordinary written language without the regular rhythm of poetry.
- **Prose fiction** includes the **novel** (long, complex, many characters, several themes) and the **short story** (short, single incident, few characters, one main theme, one impression).
- **African prose** uses African settings, proverbs and oral tradition, and themes such as tradition vs modernity and colonialism (e.g. *Things Fall Apart*).
- **Elements of prose fiction:** **plot, character, setting, theme,** and **point of view** (first person "I" / third person "he, she").

## Figurative devices (recap)

Literature — poetry, drama and prose — uses **figures of speech**:

- **Simile** (like/as), **metaphor** (direct comparison), **personification** (human qualities to non-human), **hyperbole** (exaggeration), **imagery** (appeals to the senses), **symbolism** (an object for an idea), **alliteration**, **repetition**.

Recognising a device is only half the task — always explain its **effect**.

## One method for every genre

The great lesson of the year is that **one analytical method works across all literature**:

> **Name** the feature (theme, technique, device, character trait) → **give evidence** from the text → **explain** its effect.

- In **poetry**: name the figure of speech, quote it, explain its effect.
- In **drama**: name the technique or trait, cite the action/line, explain its effect.
- In **prose**: name the theme/element, refer to the event/setting, explain its effect.

The enemy in every genre is **plot summary** — retelling instead of analysing.

## Comparing and evaluating

At the highest level, learners **compare** two texts (linking them, not describing each separately) and **evaluate** a writer's craft — judging **how well** the writer achieves their purpose, and giving a **reasoned personal response supported by evidence** ("effective because…", not just "I liked it").

## The year in one idea

Across figurative expression, drama, and prose — poems, plays, novels and short stories — literature explores human life and ideas through language, and we understand it by **naming what the writer does, showing the evidence, and explaining its effect.** That single skill is what Grade 10 Literature has built.`,
      workedExample: `**Task.** Show that one analytical method works for all three genres by applying **name–evidence–explanation** to (a) a line of poetry, (b) a moment of drama, and (c) an element of a novel.

**(a) Poetry** — the line "the black woman is a ripe fruit"
- **Name:** metaphor (and symbolism).
- **Evidence:** "is a ripe fruit."
- **Explanation:** it compares the woman to ripe fruit, suggesting beauty, richness and fullness of life, and — as a symbol — celebrating Africa; the device turns praise into a proud image.

**(b) Drama** — Baroka's cunning in *The Lion and the Jewel*
- **Name:** characterisation through action (and the foil with Lakunle).
- **Evidence:** Baroka patiently outwits the "modern" Lakunle to win Sidi.
- **Explanation:** his cunning, set against Lakunle's shallow modernity, dramatises the theme of tradition versus modernity — character carrying meaning.

**(c) Prose** — the setting of *Things Fall Apart*
- **Name:** setting (and theme).
- **Evidence:** an Igbo village at the moment colonial rule arrives.
- **Explanation:** the setting creates the central conflict and dramatises the theme of the destructive effects of colonialism on African society.

**Conclusion:** the same three-step method — **name the feature, give the evidence, explain the effect** — works for a poem, a play and a novel alike. Whatever the genre, naming the writer's technique, quoting or citing the text, and explaining the effect (never merely summarising the story) is the key to analysing literature.`,
      teachingTip:
        "Frame this as the capstone: the point of the whole year is that ONE method — name, evidence, explain — unlocks poetry, drama and prose alike. Have learners apply it in turn to a poem line, a play moment and a prose element (as in the worked example) so they feel the transfer. Close by warning, one last time, against plot summary and unsupported opinion ('I liked it'); insist on 'effective because…' with evidence, which is the habit that earns marks in every literature exam.",
      quiz: [
        {
          prompt: "Prose is language written without the regular … of poetry.",
          options: ["rhythm and line pattern", "words", "meaning", "letters"],
          correctIndex: 0,
          explanation: "Prose lacks poetry's metre and line breaks.",
        },
        {
          prompt: "A long work of prose fiction is a…",
          options: ["novel", "poem", "play", "sonnet"],
          correctIndex: 0,
          explanation: "The novel is long prose fiction.",
        },
        {
          prompt: "A short work of prose fiction focusing on one incident is a…",
          options: ["short story", "novel", "epic", "ode"],
          correctIndex: 0,
          explanation: "The short story is brief and focused.",
        },
        {
          prompt: "The elements of prose fiction are plot, character, setting, theme and…",
          options: ["point of view", "rhyme", "metre", "stanza"],
          correctIndex: 0,
          explanation: "Point of view is a key prose element.",
        },
        {
          prompt: "A story told using 'I' is written in the…",
          options: ["first person", "third person", "second person", "no person"],
          correctIndex: 0,
          explanation: "'I' is first-person narration.",
        },
        {
          prompt: "A comparison using 'like' or 'as' is a…",
          options: ["simile", "metaphor", "hyperbole", "symbol"],
          correctIndex: 0,
          explanation: "Similes use 'like' or 'as'.",
        },
        {
          prompt: "Giving human qualities to non-human things is…",
          options: ["personification", "hyperbole", "simile", "alliteration"],
          correctIndex: 0,
          explanation: "Personification makes non-human things human.",
        },
        {
          prompt: "An object standing for a larger idea is…",
          options: ["symbolism", "rhyme", "metre", "a stanza"],
          correctIndex: 0,
          explanation: "Symbolism uses an object for an idea.",
        },
        {
          prompt: "Recognising a figure of speech is only half the task; you must also explain its…",
          options: ["effect", "spelling", "page number", "price"],
          correctIndex: 0,
          explanation: "Explaining the effect is essential.",
        },
        {
          prompt: "The consistent method for all genres is…",
          options: ["name–evidence–explanation", "guess–skip–stop", "read–forget", "count–copy"],
          correctIndex: 0,
          explanation: "Name, evidence, explain works across genres.",
        },
        {
          prompt: "The enemy of good analysis in every genre is…",
          options: ["plot summary", "quoting evidence", "explaining effect", "naming devices"],
          correctIndex: 0,
          explanation: "Retelling the story is not analysis.",
        },
        {
          prompt: "The most famous African novel studied this year is…",
          options: ["Things Fall Apart", "Romeo and Juliet", "The Odyssey", "Oliver Twist"],
          correctIndex: 0,
          explanation: "Achebe's Things Fall Apart.",
        },
        {
          prompt: "To 'compare' two texts well, you should…",
          options: ["link them, not describe each separately", "describe only one", "avoid both", "count the pages"],
          correctIndex: 0,
          explanation: "Linking the texts is the key skill.",
        },
        {
          prompt: "To 'evaluate' a writer's craft is to…",
          options: ["judge how well they achieve their purpose, with evidence", "summarise the plot", "count the words", "ignore the text"],
          correctIndex: 0,
          explanation: "Evaluation is judgement backed by evidence.",
        },
        {
          prompt: "A good personal response gives an opinion supported by…",
          options: ["evidence from the text", "nothing", "the price", "the cover"],
          correctIndex: 0,
          explanation: "Opinions must be evidence-based.",
        },
        {
          prompt: "Which is the strongest response?",
          options: [
            "The ending is powerful because the final image captures the theme.",
            "I liked it.",
            "It was long.",
            "It was boring.",
          ],
          correctIndex: 0,
          explanation: "It gives a reason and evidence.",
        },
        {
          prompt: "The name–evidence–explanation method works for…",
          options: ["poetry, drama and prose", "only poetry", "only drama", "only prose"],
          correctIndex: 0,
          explanation: "It applies across all three genres.",
        },
        {
          prompt: "Literature explores human life and ideas through…",
          options: ["language", "numbers", "maps", "chemicals"],
          correctIndex: 0,
          explanation: "Language is the medium of literature.",
        },
        {
          prompt: "African prose often explores the theme of tradition versus…",
          options: ["modernity", "chemistry", "arithmetic", "geography"],
          correctIndex: 0,
          explanation: "Tradition vs modernity is a common theme.",
        },
        {
          prompt: "In prose, the central idea a work explores is its…",
          options: ["theme", "cover", "price", "author"],
          correctIndex: 0,
          explanation: "The theme is the central idea.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the three steps of the analytical method used for all literary genres.",
          answerKey:
            "1. Name the feature (theme, technique, device or character trait). 2. Give evidence from the text (an event, action, line or image). 3. Explain its effect (how it works and why the writer used it). Award a mark per step.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which pair correctly matches a form to its genre?",
          options: [
            "novel — prose fiction",
            "sonnet — drama",
            "tragedy — poetry",
            "short story — poetry",
          ],
          correctIndex: 0,
          answerKey: "A novel is a form of prose fiction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a novel and a short story.",
          answerKey:
            "Both are prose fiction, but a novel is long, with a complex plot (sub-plots), many characters and several themes, while a short story is short (read in one sitting), focuses on one main incident, has few characters, usually one main theme and aims for a single unified impression. Award marks for the distinction across length, plot, characters and themes.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Using examples from a poem, a play and a prose work you have studied, show how the same analytical method (name–evidence–explanation) can be applied across all three genres.",
          answerKey:
            "A strong answer applies name–evidence–explanation to each of three genres: for a poem, naming a figure of speech, quoting it, and explaining its effect (e.g. a metaphor in Senghor's Black Woman); for a play, naming a technique or trait, citing an action/line, and explaining its effect on theme (e.g. the foil relationship in The Lion and the Jewel); and for a prose work, naming an element such as setting or theme, referring to the text, and explaining its effect (e.g. the colonial setting of Things Fall Apart). It should show that the method transfers across genres and avoid mere plot summary. Award marks for a correct application in each of the three genres and a clear demonstration that the method is consistent.",
          marks: 6,
        },
      ],
    },
  ],
};
