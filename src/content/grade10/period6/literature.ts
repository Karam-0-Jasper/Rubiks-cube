import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester Two, Period VI: Drama and Prose (Review) — CONTENTS item
// "The elements of drama and prose" (theme, setting, mood, plot, conflict,
// climax, literary devices).
export const literatureG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Drama and Prose (Review)",
  summary:
    "Period VI of the MoE Grade 10 Literature syllabus. Learners review the elements common to drama and prose — theme, setting, mood, plot, conflict, climax and literary devices — and apply them to analyse African drama and prose.",
  topics: [
    {
      // source: Elements of Drama, Writing and Critical Thinking Through
      // Literature (Ringo & Kashyap), Humanities LibreTexts (human.libretexts.org,
      // 8.2); Elements of Fiction, Literature for the Humanities (Lumen),
      // Humanities LibreTexts (4.4).
      slug: "elements-of-drama-and-prose",
      title: "The Elements of Drama and Prose",
      objective:
        "By the end of the topic, learners should be able to define and apply the elements common to drama and prose — theme, setting, mood, plot, conflict, climax and literary devices — to analyse a text.",
      estimatedMinutes: 160,
      notes: `## Introduction

- **Drama** (plays) and **prose** (novels, short stories) share the same building blocks — the **elements of fiction**: plot, character, setting, conflict and theme.
- This topic reviews these elements so one analytical method works across both genres.

## 1. Theme

- **Theme** = the **central idea or issue** the work conveys — its underlying message about life or society.
- A work can have more than one theme (e.g. loneliness, hostility, death, widowhood).

## 2. Setting

- **Setting** = the **time and place** of the events — landscape, scenery, buildings, season, weather.
- In prose the narrator describes it; in drama it is built through **backdrops, props, lighting and sound** on a stage.
- Setting shapes the mood and the characters' actions.

## 3. Mood

- **Mood** = the **atmosphere or feeling** a work creates in the reader or audience (e.g. tense, joyful, gloomy).
- Mood is produced by setting, word choice and events.

## 4. Plot

- **Plot** = the **events and the order** in which they are told, tied to the central conflict.
- Typical stages:

1. **Exposition** — introduces characters and setting.
2. **Rising action** — events build and complicate the conflict; tension rises.
3. **Climax** — the turning point of highest tension.
4. **Falling action** — tension unwinds after the climax.
5. **Resolution (denouement)** — the conflict is settled.

- In **drama** the plot is carried by **dialogue and action** and organised into **acts** and **scenes**.

## 5. Conflict

- **Conflict** = the **struggle** that drives the plot.
- **Internal** — within a character (a choice, a fear).
- **External** — between a character and another person, society or nature.

## 6. Climax

- **Climax** = the **turning point**, the moment of greatest tension where the main conflict comes to a head and its outcome becomes clear.

## 7. Literary devices

Techniques writers use to deepen meaning and feeling:

| Device | What it does |
| --- | --- |
| Foreshadowing | hints at events to come |
| Flashback | returns to an earlier event |
| Suspense | keeps the reader anxious about what happens next |
| Symbolism | an object stands for a larger idea |
| Simile / metaphor | compares one thing to another |
| Irony | a gap between what is said/expected and what is real |

## Common errors to watch for

- **Confusing plot with theme** — plot is *what happens*; theme is *what it means*.
- **Confusing mood with tone** — mood is the reader's feeling; tone is the writer's attitude.
- **Calling any exciting moment the climax** — the climax is the single main turning point of the conflict.`,
      workedExample: `**Task.** Apply the elements to a short scene.

*"At dusk the compound was silent. Ayesha stood at the gate, the letter shaking in her hand. For months she had feared this news; now she had to choose — stay and obey her uncle, or leave that night. A dog barked once, and she stepped into the dark."*

- **Setting:** a family compound, at **dusk**.
- **Mood:** tense, uneasy (silence, the shaking hand, the dark).
- **Conflict:** **internal** — Ayesha must choose between obedience and freedom (and **external** — against her uncle's authority).
- **Plot stage:** this reads as **rising action** building toward a **climax** (the choice).
- **Literary devices:** the **letter** and the **dark** work as **symbols**; the barking dog adds **suspense**.
- **Theme:** duty versus personal freedom.

**Why it works:** the same checklist — setting, mood, conflict, plot stage, devices, theme — analyses a scene from a play or a novel in exactly the same way.`,
      quiz: [
        { prompt: "The central idea or message of a work is its…", options: ["theme", "setting", "climax", "mood"], correctIndex: 0, explanation: "Theme is the underlying idea the work conveys." },
        { prompt: "The time and place of the events is the…", options: ["setting", "theme", "plot", "conflict"], correctIndex: 0, explanation: "Setting = time and place." },
        { prompt: "The atmosphere or feeling a work creates is the…", options: ["mood", "plot", "theme", "climax"], correctIndex: 0, explanation: "Mood is the feeling produced in the reader/audience." },
        { prompt: "The events of a story and their order form the…", options: ["plot", "setting", "mood", "theme"], correctIndex: 0, explanation: "Plot is the sequence of events tied to the conflict." },
        { prompt: "The struggle that drives the story is the…", options: ["conflict", "setting", "mood", "resolution"], correctIndex: 0, explanation: "Conflict drives the plot forward." },
        { prompt: "A struggle inside one character is…", options: ["internal conflict", "external conflict", "setting", "climax"], correctIndex: 0, explanation: "Internal conflict happens within a character." },
        { prompt: "The turning point of highest tension is the…", options: ["climax", "exposition", "setting", "resolution"], correctIndex: 0, explanation: "The climax is the peak of the conflict." },
        { prompt: "The stage that introduces characters and setting is the…", options: ["exposition", "climax", "falling action", "resolution"], correctIndex: 0, explanation: "The exposition opens the plot." },
        { prompt: "The conflict is finally settled at the…", options: ["resolution", "exposition", "rising action", "setting"], correctIndex: 0, explanation: "The resolution (denouement) ends the story." },
        { prompt: "In drama, the plot is carried mainly by…", options: ["dialogue and action", "long narration", "footnotes", "stage colour only"], correctIndex: 0, explanation: "Plays move through characters' speech and actions." },
        { prompt: "A play is divided into large parts called…", options: ["acts", "chapters", "stanzas", "cantos"], correctIndex: 0, explanation: "Acts are the main divisions of a play, split into scenes." },
        { prompt: "Hinting at events that will come later is…", options: ["foreshadowing", "flashback", "irony", "setting"], correctIndex: 0, explanation: "Foreshadowing plants hints of what is to come." },
        { prompt: "Returning to an earlier event in the story is a…", options: ["flashback", "climax", "theme", "mood"], correctIndex: 0, explanation: "A flashback jumps back to a past event." },
        { prompt: "When an object stands for a larger idea, that is…", options: ["symbolism", "suspense", "setting", "dialogue"], correctIndex: 0, explanation: "A symbol represents something beyond itself." },
        { prompt: "The device that keeps a reader anxious about what happens next is…", options: ["suspense", "exposition", "theme", "setting"], correctIndex: 0, explanation: "Suspense builds tension about the outcome." },
        { prompt: "Plot is what happens; theme is…", options: ["what it means", "where it happens", "who speaks first", "how long it is"], correctIndex: 0, explanation: "Theme is the meaning behind the events." },
        { prompt: "Mood differs from tone because mood is…", options: ["the reader's feeling", "the writer's attitude", "the setting", "the plot"], correctIndex: 0, explanation: "Mood = the atmosphere felt by the reader; tone = the writer's attitude." },
        { prompt: "A struggle between a character and society is…", options: ["external conflict", "internal conflict", "climax", "theme"], correctIndex: 0, explanation: "External conflict is with another person, society or nature." },
        { prompt: "Which correctly orders part of a plot?", options: ["exposition, rising action, climax", "climax, exposition, resolution", "resolution, climax, exposition", "rising action, resolution, climax"], correctIndex: 0, explanation: "The plot moves exposition → rising action → climax." },
        { prompt: "The same elements (plot, setting, theme…) can analyse…", options: ["both drama and prose", "only poetry", "only drama", "only newspapers"], correctIndex: 0, explanation: "Drama and prose share the elements of fiction." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name four elements common to drama and prose and define each in one sentence.", answerKey: "Any four of: theme (central idea/message); setting (time and place); mood (atmosphere/feeling created); plot (events and their order); conflict (the struggle that drives it); climax (the turning point of highest tension); literary devices (techniques such as symbolism or foreshadowing). Award 2 marks per element correctly named and defined.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which correctly pairs an element with its meaning?", options: ["Climax — the turning point of highest tension", "Setting — the central message", "Theme — the time and place", "Mood — the sequence of events"], correctIndex: 0, answerKey: "The climax is the turning point of highest tension; the other pairings are swapped.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish internal from external conflict, giving one example of each.", answerKey: "Internal conflict is a struggle within one character (e.g. a character torn between duty and desire); external conflict is between a character and another person, society or nature (e.g. a character against an unjust ruler). Award 2 marks per type defined with a valid example (max 4, plus 1 for clear contrast).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Name three literary devices and state what each does.", answerKey: "Any three: foreshadowing (hints at coming events); flashback (returns to an earlier event); suspense (keeps the reader anxious); symbolism (an object stands for a larger idea); simile/metaphor (compares things); irony (a gap between expectation and reality). Award 1 mark per device named and 1 per correct function.", marks: 6 },
        { type: "ESSAY", prompt: "Take a drama or prose text you have studied (or a passage supplied by your teacher). In 12–15 sentences, analyse it using at least five elements — theme, setting, mood, plot stage, conflict, climax or literary devices — supporting each point with detail from the text.", answerKey: "Award marks as follows: at least five elements correctly identified and applied to the text, 10 marks; each supported with specific textual detail rather than assertion, 6 marks; a clear statement of the theme and how the other elements serve it, 5 marks; organisation and grammatical accuracy, 4 marks. Deduct up to 3 marks where plot is merely retold without analysis.", marks: 25 },
      ],
    },
  ],
};
