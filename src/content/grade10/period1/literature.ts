import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English
// (Grades 10-12). Grade 10, Semester One, Period I: Figurative Expressions and
// Shakespearean Drama. The Grade 10 Period I CONTENTS list has six top-level
// items, each rebuilt here as its own topic: (1) Elements of Literature,
// (2) Literary Devices, (3) Main issues running through the drama, (4) Major and
// minor characters, (5) Kinds of drama (tragedy, comedy, tragic-comedy),
// (6) The different themes. Literary concepts are sourced from LibreTexts
// (Humanities). The syllabus names A Midsummer Night's Dream as the set text;
// set-text-specific facts are NOT invented here — the general concepts and
// analytical skills are taught and the set text is flagged as a teaching target.
export const literature: SubjectContent = {
  slug: "literature",
  name: "Literature in English",
  shortName: "Literature",
  description:
    "Figurative expressions and drama: the elements of literature and figures of speech, and the characters, issues, themes and kinds of drama, taught through the study of a Shakespearean play.",
  accent: "fuchsia",
  sortOrder: 11,
  teacherCode: "LIT-10-3382",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Figurative Expressions and Shakespearean Drama",
      summary:
        "Period I of the MoE Grade 10 Literature syllabus. Its six CONTENTS items are taught as six topics: the elements of literature; literary devices (figures of speech); the main issues running through a drama; major and minor characters; the kinds of drama (tragedy, comedy, tragicomedy); and the different themes of a play — with a Shakespearean drama as the set text.",
      topics: [
        {
          // source: LibreTexts (Humanities) — Defining Literature; The Five Elements of Fiction (https://human.libretexts.org/Bookshelves/Literature_and_Literacy/World_Literature/Introduction_to_Literature_(Lumen)/01%3A_Genre_Introduction/1.06%3A_Defining_Literature)
          slug: "elements-of-literature",
          title: "Elements of Literature",
          objective:
            "By the end of the topic, learners should be able to define literature and its main genres, and identify the elements of a literary work — plot, character, setting, theme, point of view, style, tone and mood.",
          estimatedMinutes: 150,
          notes: `## What literature is

- **Literature**, in its broadest sense, is **any written work** — the word comes from the Latin for "writing formed with letters."
- More narrowly, literature is **writing that possesses literary merit** — language used for artistic effect, not only to give information.
- Literature explores human experience and ideas through language.

## The main genres of literature

- **Poetry** — literary art using the **aesthetic and rhythmic qualities of language** (metre, line, sound) to evoke meaning.
- **Prose** — language with **ordinary syntax and natural speech** rather than a rhythmic line structure; novels, novellas and short stories are prose.
- **Drama** — **literature intended for performance** by actors before an audience.
- Any of these may be **fiction** (imagined) or **non-fiction** (factual).

## The elements of literature

A work of literature is built from parts that can be named and analysed. The five core **elements of fiction** — which also apply to drama and narrative — are:

- **Plot** — the **series of events and character actions** that relate to the central conflict.
- **Character** — a person (or being) who **participates in the action**; we know characters by what they say, think and do.
- **Setting** — the **time and place** in which the events happen, including landscape, buildings, season and weather.
- **Theme** — the **central idea or issue** the work conveys; an underlying truth that can often be summed up in a few words.
- **Point of view** — **whose eyes** the story is told through (first person "I"; third-person limited; third-person omniscient).

## Two more elements: style, tone and mood

- **Style** — the author's **use of language**: vocabulary, imagery and sentence rhythm. A style can be ironic, humorous, cold or dramatic.
- **Tone** — the **writer's attitude** to the subject, carried by word choice.
- **Mood** — the **feeling or atmosphere** the writing creates in the reader.

## Why analyse by elements

- Naming the elements gives an ordered way to **understand and discuss any text**.
- A strong reading shows how the elements **work together** — how setting shapes plot, how character carries theme — not four separate lists.

## Common errors and misconceptions

- **Confusing plot with theme** — **plot** is *what happens*; **theme** is the *central idea* the events convey.
- **Mixing up tone and mood** — **tone** is the *writer's* attitude; **mood** is the *atmosphere the reader* feels.
- **Thinking "literature" means only old or difficult books** — literature is any written work of literary merit, in any genre.
- **Treating point of view as unimportant** — who tells the story ("I" versus "he/she") changes how close and how trusting the reader feels.`,
          workedExample: `**Task.** Read the short passage and identify five elements of literature in it.

*"By the third dry season the well had gone silent. Ma Weah walked the cracked path each dawn, bucket swinging, telling herself the rains would come. They did not. Still she walked, because to stop walking was to agree that the village was finished."*

**Model answer**

- **Setting:** the **time and place** — a village in "the third dry season," on "the cracked path" at "dawn." The drought setting is essential to the meaning.
- **Character:** **Ma Weah**, revealed by what she does (walks each dawn) and thinks (tells herself the rains will come) — a determined, hopeful figure.
- **Plot:** the **sequence of events** — the well fails, she keeps walking each morning, the rains do not come. Small events tied to one situation.
- **Point of view:** **third person** — the narrator says "she," standing outside the character while seeing her thoughts.
- **Theme:** the **central idea** — endurance and refusing to give up hope in the face of hardship ("to stop walking was to agree that the village was finished").

**How they connect:** the drought **setting** creates the hardship; **Ma Weah's** character (persistence) responds to it; her repeated walking is the **plot**; and through it the passage conveys its **theme** of endurance. Naming an element is only the first step — a good answer shows how they work together.`,
          quiz: [
            { prompt: "In its broadest sense, literature is", options: ["any written work", "only poetry", "only true stories", "only old books"], correctIndex: 0, explanation: "Literature broadly means any written work; more narrowly, writing of literary merit." },
            { prompt: "Which is one of the three main genres of literature?", options: ["drama", "algebra", "geography", "biology"], correctIndex: 0, explanation: "Poetry, prose and drama are the main genres." },
            { prompt: "Drama is literature intended for", options: ["performance", "silent reading only", "singing only", "printing in newspapers"], correctIndex: 0, explanation: "Drama is written to be performed by actors before an audience." },
            { prompt: "The series of events and actions in a story is the", options: ["plot", "setting", "theme", "tone"], correctIndex: 0, explanation: "Plot is the events related to the central conflict." },
            { prompt: "The time and place of a story is its", options: ["setting", "plot", "point of view", "style"], correctIndex: 0, explanation: "Setting is the time and place, including landscape and weather." },
            { prompt: "The central idea or message of a work is its", options: ["theme", "plot", "setting", "mood"], correctIndex: 0, explanation: "Theme is the underlying idea, often stated in a few words." },
            { prompt: "A person who takes part in the action of a story is a", options: ["character", "setting", "theme", "genre"], correctIndex: 0, explanation: "Characters participate in the action." },
            { prompt: "Whose eyes the story is told through is the", options: ["point of view", "plot", "theme", "setting"], correctIndex: 0, explanation: "Point of view is the narrative perspective." },
            { prompt: "First-person point of view uses the pronoun", options: ["I", "he", "she", "they"], correctIndex: 0, explanation: "First person uses 'I' and brings us close to the narrator." },
            { prompt: "The author's characteristic use of language is their", options: ["style", "setting", "plot", "theme"], correctIndex: 0, explanation: "Style is vocabulary, imagery and sentence rhythm." },
            { prompt: "The writer's attitude toward the subject is the", options: ["tone", "mood", "plot", "climax"], correctIndex: 0, explanation: "Tone is the writer's attitude." },
            { prompt: "The atmosphere or feeling created in the reader is the", options: ["mood", "tone", "setting", "genre"], correctIndex: 0, explanation: "Mood is the atmosphere felt by the reader." },
            { prompt: "Prose differs from poetry because prose has", options: ["ordinary syntax and natural speech", "regular metre and lines", "no meaning", "only rhyme"], correctIndex: 0, explanation: "Prose runs in sentences, not rhythmic verse lines." },
            { prompt: "Novels and short stories are examples of", options: ["prose", "poetry", "drama", "non-fiction only"], correctIndex: 0, explanation: "They are prose fiction." },
            { prompt: "'What happens' in a story is the plot; the 'central idea' is the", options: ["theme", "setting", "tone", "point of view"], correctIndex: 0, explanation: "Do not confuse plot (events) with theme (idea)." },
            { prompt: "A fictional work is one that is", options: ["imagined/made up", "always factual", "written in verse", "a news report"], correctIndex: 0, explanation: "Fiction is imagined; non-fiction is factual." },
            { prompt: "Third-person omniscient means the narrator can", options: ["know various characters' thoughts", "know nothing", "only use 'I'", "not describe setting"], correctIndex: 0, explanation: "Omniscient narration has unlimited access to characters' minds." },
            { prompt: "A strong analysis shows how the elements", options: ["work together", "stay separate", "are ignored", "are counted only"], correctIndex: 0, explanation: "Linking the elements lifts analysis above listing." },
            { prompt: "Which pair is correctly matched?", options: ["setting — time and place", "theme — the events", "plot — the atmosphere", "tone — whose eyes tell it"], correctIndex: 0, explanation: "Setting is the time and place." },
            { prompt: "Analysing a text by its elements is useful because it", options: ["gives an ordered way to understand any text", "makes the text shorter", "replaces reading", "counts the pages"], correctIndex: 0, explanation: "The elements are the tools for understanding a work." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Name the three main genres of literature and give one distinguishing feature of each.", answerKey: "Poetry — uses the rhythmic/aesthetic qualities of language (metre, line, sound); Prose — ordinary syntax and natural speech in sentences and paragraphs; Drama — literature intended for performance by actors. Award 1 mark per genre named and 1 per feature.", marks: 6 },
            { type: "SHORT_ANSWER", prompt: "List the five core elements of a work of fiction and define any three of them.", answerKey: "The five: plot, character, setting, theme, point of view. Definitions (any three): plot — the series of events relating to the conflict; character — a person who takes part in the action; setting — the time and place; theme — the central idea/message; point of view — whose eyes the story is told through. Award 2 for the list and 1 per definition (max 3).", marks: 5 },
            { type: "MULTIPLE_CHOICE", prompt: "Which correctly distinguishes tone from mood?", options: ["Tone is the writer's attitude; mood is the atmosphere the reader feels", "Tone is the setting; mood is the plot", "Tone is whose eyes tell the story; mood is the theme", "They mean exactly the same thing"], correctIndex: 0, answerKey: "Tone = writer's attitude; mood = atmosphere felt by the reader. Option A.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Explain the difference between plot and theme, using an example.", answerKey: "Plot is what happens — the sequence of events (e.g. a well dries up and a woman keeps walking to it). Theme is the central idea the events convey (e.g. endurance / refusing to give up hope). Award 2 for the distinction and 2 for a valid example.", marks: 4 },
            { type: "ESSAY", prompt: "Choose any story, poem or play you have studied and show how at least four elements of literature (plot, character, setting, theme, point of view, style/tone/mood) work together to create its meaning. Support each point with reference to the text.", answerKey: "Award marks for: at least four elements correctly named and applied to the chosen text, 8 marks; explanation of how the elements connect (e.g. setting shaping plot, character carrying theme) rather than four separate lists — the discriminating requirement — 8 marks; quality of textual reference, 4 marks; organisation and expression, 4 marks. A learner who merely lists definitions without applying them to a text should not exceed 8.", marks: 24 },
          ],
        },
        {
          // source: LibreTexts (Humanities) — Figurative Language; Literary Devices Glossary (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/04%3A_About_Poetry/4.12%3A_Figurative_Language)
          slug: "literary-devices",
          title: "Literary Devices (Figures of Speech)",
          objective:
            "By the end of the topic, learners should be able to define and identify the main literary devices — simile, metaphor, personification, hyperbole, imagery, symbolism, alliteration, irony and others — and explain the effect of each.",
          estimatedMinutes: 160,
          notes: `## What figurative language is

- **Figurative language** uses words in a **non-literal** way to create meaning and effect beyond their ordinary sense.
- It is **the most common of literary devices** and lets a writer convey much meaning in few words.
- Recognising a device is only half the skill — the value lies in explaining its **effect**.

## Devices of comparison

- **Simile** — a comparison that uses **like or as**. *Something rising explosive as a parakeet bursting from its cage.*
- **Metaphor** — a **direct comparison between two unlike things**, without like or as. *Hope is the thing with feathers.*
- **Personification** — giving **human qualities to non-human things**. *The irises whispering little rumors.*
- **Metonymy** — when one thing is **represented by another associated with it**. *The pen is mightier than the sword* (pen = writing, sword = warfare).
- **Synecdoche** — when a **part stands for the whole** (or the whole for a part). *All hands on deck* (hands = people).

## Devices of sound

- **Alliteration** — multiple words in a row starting with the **same sound**. *The wind whipped the withered leaves.*
- **Assonance** — repetition of **vowel sounds** in close proximity. *The old stones grow cold.*
- **Onomatopoeia** — words that **sound like** what they name. *hiss, crash, buzz.*

## Devices of image, contrast and meaning

- **Imagery** — descriptive detail that **paints a picture** in the reader's mind and appeals to the senses.
- **Symbolism** — the use of a **physical object to represent an abstract idea** (a dove for peace).
- **Hyperbole** — deliberate **exaggeration** for effect. *I'm so hungry I could eat a horse.*
- **Oxymoron** — a combination of **contradictory or opposite ideas**. *deafening silence.*
- **Allusion** — an **indirect reference** to another work or event, without naming it.

## Irony

**Irony** makes visible a contrast between appearance and reality. Three types:
- **Verbal irony** — a speaker **says one thing and means the reverse**.
- **Situational irony** — an expectation is **reversed** by what actually happens.
- **Dramatic irony** — the **reader or audience knows something a character does not**.

## Naming AND effect

- Do not simply name a device — explain **what it does**.
- Weak: "The poet uses alliteration in line 3."
- Strong: "The alliteration in *wind whipped the withered* forces the reader to repeat a harsh sound, so the line enacts the roughness it describes."
- Always ask: *what does this device make the reader see, hear or feel?*

## Common errors and misconceptions

- **Naming a device without its effect** — "the poet uses a metaphor" earns almost nothing; marks come from **what the metaphor makes the reader see or feel**.
- **Confusing simile and metaphor** — a **simile** keeps *like* or *as*; a **metaphor** drops them and says one thing *is* another.
- **Reading figurative language literally** — "the wind whispered" is **personification**, not a claim that the wind spoke.
- **Confusing the three ironies** — verbal (say the reverse), situational (outcome reversed), dramatic (audience knows what a character does not).`,
          workedExample: `**Question:** Identify four literary devices in the extract, quoting each, and explain the effect of two.

*"The old palm stood like a tired soldier, its green arms lifted against the wind. The drum of the rain, the drum of the rain — and the patient sea counting its slow arithmetic of loss."*

**Solution**

**(a) Four devices, with quotations:**
1. **Simile** — *"like a tired soldier"* (comparison using *like*).
2. **Personification** — *"its green arms lifted"* and *"the patient sea counting"* (the palm and sea given human qualities).
3. **Repetition / imagery** — *"the drum of the rain, the drum of the rain"* (a repeated sound-image).
4. **Metaphor** — *"its slow arithmetic of loss"* (the sea's action figured directly as arithmetic).

**(b) The effect of two devices:**

*Simile — "like a tired soldier".* Comparing the old palm to a tired soldier makes it seem **worn but still standing**, dignified in endurance. The reader pictures something that has fought long and refuses to fall.

*Metaphor — "its slow arithmetic of loss".* Calling the sea's action **arithmetic** joins two very different registers — arithmetic is cold and methodical, loss is grief. The effect is to make the destruction seem **systematic and unhurried**; the word *slow* makes it worse, not better, because the outcome is certain and cannot be stopped.

**The lesson:** naming the device is only the first step; the marks come from explaining what each device **makes the reader see or feel**.`,
          quiz: [
            { prompt: "A comparison using 'like' or 'as' is a", options: ["simile", "metaphor", "personification", "symbol"], correctIndex: 0, explanation: "Simile compares using like/as; metaphor is direct." },
            { prompt: "A direct comparison between two unlike things, without 'like' or 'as', is a", options: ["metaphor", "simile", "hyperbole", "allusion"], correctIndex: 0, explanation: "'Hope is the thing with feathers' is a metaphor." },
            { prompt: "Giving human qualities to non-human things is", options: ["personification", "metonymy", "assonance", "irony"], correctIndex: 0, explanation: "Personification applies human traits to the non-human." },
            { prompt: "'The pen is mightier than the sword' is an example of", options: ["metonymy", "simile", "onomatopoeia", "oxymoron"], correctIndex: 0, explanation: "Each thing is represented by something associated with it." },
            { prompt: "'All hands on deck' (hands = people) is", options: ["synecdoche", "metaphor", "hyperbole", "allusion"], correctIndex: 0, explanation: "A part stands for the whole — synecdoche." },
            { prompt: "Words starting with the same sound in a row show", options: ["alliteration", "assonance", "irony", "symbolism"], correctIndex: 0, explanation: "Alliteration repeats initial sounds." },
            { prompt: "Repetition of vowel sounds is", options: ["assonance", "alliteration", "metaphor", "metonymy"], correctIndex: 0, explanation: "Assonance repeats vowel sounds." },
            { prompt: "Words that sound like what they name (hiss, buzz) are", options: ["onomatopoeia", "similes", "symbols", "allusions"], correctIndex: 0, explanation: "Onomatopoeia imitates sounds." },
            { prompt: "Descriptive detail that paints a picture and appeals to the senses is", options: ["imagery", "irony", "metonymy", "hyperbole"], correctIndex: 0, explanation: "Imagery creates sense impressions." },
            { prompt: "A physical object representing an abstract idea (a dove for peace) is", options: ["symbolism", "assonance", "simile", "alliteration"], correctIndex: 0, explanation: "Symbolism uses an object to stand for an idea." },
            { prompt: "Deliberate exaggeration for effect is", options: ["hyperbole", "understatement", "metaphor", "synecdoche"], correctIndex: 0, explanation: "'Eat a horse' is hyperbole." },
            { prompt: "'Deafening silence' joins contradictory ideas, so it is", options: ["oxymoron", "simile", "metonymy", "allusion"], correctIndex: 0, explanation: "An oxymoron combines opposite ideas." },
            { prompt: "An indirect reference to another work, without naming it, is", options: ["allusion", "assonance", "imagery", "irony"], correctIndex: 0, explanation: "Allusion refers indirectly to something outside the text." },
            { prompt: "When a speaker says one thing and means the reverse, this is", options: ["verbal irony", "situational irony", "dramatic irony", "symbolism"], correctIndex: 0, explanation: "Verbal irony says the opposite of what is meant." },
            { prompt: "When the audience knows something a character does not, this is", options: ["dramatic irony", "verbal irony", "metaphor", "hyperbole"], correctIndex: 0, explanation: "Dramatic irony is the audience's superior knowledge." },
            { prompt: "When an expectation is reversed by the outcome, this is", options: ["situational irony", "verbal irony", "alliteration", "assonance"], correctIndex: 0, explanation: "Situational irony reverses what is expected." },
            { prompt: "Figurative language is language used", options: ["in a non-literal way for effect", "only in newspapers", "with no meaning", "only aloud"], correctIndex: 0, explanation: "It carries meaning beyond the literal words." },
            { prompt: "The most important step after naming a device is to", options: ["explain its effect", "count how often it appears", "translate it", "ignore it"], correctIndex: 0, explanation: "Marks come from explaining the effect on the reader." },
            { prompt: "'The wind whispered through the grass' is", options: ["personification", "simile", "metonymy", "synecdoche"], correctIndex: 0, explanation: "The wind is given the human act of whispering." },
            { prompt: "'Her smile was as bright as the sun' is a", options: ["simile", "metaphor", "oxymoron", "allusion"], correctIndex: 0, explanation: "It compares using 'as', so it is a simile." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define and give an example of each: simile, metaphor, personification, hyperbole and oxymoron.", answerKey: "Simile — comparison using like/as (e.g. 'as brave as a lion'); metaphor — direct comparison without like/as (e.g. 'he is a lion'); personification — human qualities to the non-human (e.g. 'the sea roared angrily'); hyperbole — deliberate exaggeration (e.g. 'a thousand times'); oxymoron — contradictory ideas joined (e.g. 'bitter sweetness'). Award 1 mark per definition and 1 per apt example.", marks: 10 },
            { type: "MULTIPLE_CHOICE", prompt: "'The patient sea counting its slow arithmetic of loss' contains which two devices?", options: ["Personification and metaphor", "Simile and hyperbole", "Onomatopoeia and allusion", "Synecdoche and oxymoron"], correctIndex: 0, answerKey: "The sea is given the human act of counting (personification) and its action is figured as arithmetic (metaphor). Option A.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Name and distinguish the three types of irony, giving an example of each.", answerKey: "Verbal irony — a speaker says one thing and means the reverse (e.g. 'What lovely weather!' in a storm). Situational irony — the outcome reverses expectation (e.g. a fire station burns down). Dramatic irony — the audience knows something a character does not. Award 1 mark per type named, 1 per correct example (max 6).", marks: 6 },
            { type: "SHORT_ANSWER", prompt: "Explain why it is not enough to name a figure of speech, giving an example of one analysed properly.", answerKey: "Naming shows recognition but not understanding; the value of a device is what it makes the reader see or feel, so analysis must explain the effect. Example: 'The alliteration in wind whipped the withered leaves forces the reader to repeat a harsh sound, so the line enacts the roughness it describes.' Award 3 for the explanation and 3 for a device correctly analysed with its effect.", marks: 6 },
            { type: "ESSAY", prompt: "Choose a poem or passage you have studied. Identify at least four literary devices in it and, in each case, explain the effect the device creates. Support each point with a quotation.", answerKey: "Award marks for: at least four devices correctly identified and accurately quoted, 8 marks; a clear explanation of the effect of each on the reader — the discriminating requirement — 12 marks; quality and aptness of quotations, 4 marks; organisation and expression, 4 marks. A learner who lists and names devices without explaining their effects should not exceed 10.", marks: 28 },
          ],
        },
        {
          // source: LibreTexts (Humanities) — Elements of Drama; How to Analyze Fiction: Elements of Literature (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama)
          slug: "main-issues-in-drama",
          title: "Main Issues Running Through a Drama",
          objective:
            "By the end of the topic, learners should be able to identify the main issues (subject matter) and the central conflict running through a play, and trace how these issues are developed across its events.",
          estimatedMinutes: 150,
          notes: `## What "the main issues" means

- The **main issues running through a drama** are its **central concerns** — the problems, subject matter and questions the play keeps returning to.
- A play **poses a difficult problem** that the characters try to solve over the course of the story; that problem is the play's driving issue.
- Identifying the main issues is the first step to understanding a play's **theme** (studied later in this period).

## Issue, conflict and plot

- The main issue is usually carried by a **conflict** — the central struggle in the drama.
- **Conflict** has two broad categories:
  - **External conflict** — a character against another character, against society, or against nature.
  - **Internal conflict** — a character struggling **within their own mind**.
- The **plot** is a pattern of carefully selected, causally related events that **contain conflict**; the issue runs through those events.

## How a main issue runs through a play

The plot of a drama unfolds in stages, and the central issue is present at each:

| Stage | What happens | The issue |
| --- | --- | --- |
| Exposition | scene and characters are set; background given | the issue is introduced |
| Rising action | complications and crises build | the issue sharpens |
| Climax | the moment of greatest tension | the issue reaches crisis |
| Falling action | movement toward resolution | the issue starts to settle |
| Resolution | the problem reaches finality | the issue is resolved (happily or not) |

## Finding the main issues

To identify the issues running through a play, ask:
- What **problem** must the main characters solve?
- What do the characters keep **arguing or worrying about**?
- What **conflict** drives the events from beginning to end?
- Which concerns appear again and again in the **dialogue** and action?

## Major and minor issues

- A play usually has one **major issue** (the central problem) and several **minor issues** woven around it.
- The major issue drives the whole plot; minor issues add depth and complication.

## Set text (to be supplied by the teacher)

- The syllabus names a **Shakespearean drama** as the set text for this period.
- Apply the method above to that play: identify the problem the characters must solve, the central conflict, and how the issue runs from exposition to resolution.
- *(Specific facts about the named set text are studied from the play itself, not from this note.)*

## Common errors and misconceptions

- **Confusing an issue with the whole plot** — the issue is the **central concern**; the plot is the *events* through which it plays out.
- **Naming only surface events** — look for the underlying **problem/conflict**, not just "what happened."
- **Missing minor issues** — a rich play has several concerns; note the **major** one and the **minor** ones around it.
- **Stopping at the issue** — the issue points toward the **theme** (the idea the play makes about that issue), which is the deeper goal.`,
          workedExample: `**Task.** Explain how you would identify and trace the main issue running through a play, using the plot stages.

**Model method**

**Step 1 — find the problem.** Ask what difficult problem the characters must solve. Suppose a play sets a young couple who wish to marry against a parent who forbids it. The **main issue** is the conflict between **the couple's desire and the parent's authority** — a person-against-person (and person-against-society) conflict.

**Step 2 — locate it in the exposition.** In the opening scene the characters and their situation are introduced, and the forbidden love is established. The issue is **planted** here.

**Step 3 — trace it through the rising action.** Complications build — secret meetings, threats, a rival suitor. Each crisis makes the central issue **sharper**.

**Step 4 — reach the climax.** At the moment of greatest tension the issue comes to a head — the couple must choose between obedience and elopement. This is the **turning point**.

**Step 5 — follow it to the resolution.** The falling action moves toward an ending; the resolution brings the problem to **finality** (the marriage is allowed, or forbidden, or ends in tragedy).

**Conclusion:** the main issue is the **central problem/conflict** the characters face; you trace it by following one thread — the same struggle — from exposition, through rising action and climax, to resolution. Distinguishing this major issue from minor ones, and from the surface events, is the key skill.`,
          quiz: [
            { prompt: "The 'main issues running through a drama' are its", options: ["central concerns or problems", "list of actors", "stage lights", "ticket prices"], correctIndex: 0, explanation: "They are the problems and subject matter the play returns to." },
            { prompt: "A play poses a difficult problem that the characters try to", options: ["solve over the course of the story", "ignore completely", "read aloud", "sell"], correctIndex: 0, explanation: "The central problem drives the drama." },
            { prompt: "The central struggle in a drama is the", options: ["conflict", "setting", "prop", "cast"], correctIndex: 0, explanation: "Conflict carries the main issue." },
            { prompt: "A character struggling within their own mind is an example of", options: ["internal conflict", "external conflict", "resolution", "exposition"], correctIndex: 0, explanation: "Internal conflict is within the character." },
            { prompt: "A character against another character or society is", options: ["external conflict", "internal conflict", "the climax", "the setting"], correctIndex: 0, explanation: "External conflict is against outside forces." },
            { prompt: "The plot is a pattern of causally related events that contain", options: ["conflict", "no problems", "only description", "only dialogue"], correctIndex: 0, explanation: "Plot events contain conflict." },
            { prompt: "The main issue is introduced during the", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "The exposition sets up the situation and issue." },
            { prompt: "The issue reaches its crisis at the", options: ["climax", "exposition", "resolution", "rising action"], correctIndex: 0, explanation: "The climax is the moment of greatest tension." },
            { prompt: "The problem reaches finality at the", options: ["resolution", "exposition", "rising action", "climax"], correctIndex: 0, explanation: "The resolution settles the issue, happily or not." },
            { prompt: "The stage where complications and crises build is the", options: ["rising action", "exposition", "resolution", "denouement"], correctIndex: 0, explanation: "Rising action sharpens the conflict." },
            { prompt: "A play usually has one major issue and several", options: ["minor issues", "narrators", "climaxes at once", "resolutions"], correctIndex: 0, explanation: "Minor issues surround the central problem." },
            { prompt: "To find the main issue, ask what problem the characters must", options: ["solve", "avoid reading", "buy", "print"], correctIndex: 0, explanation: "The central problem is the main issue." },
            { prompt: "The main issue is best found by looking at the underlying", options: ["problem/conflict", "page numbers", "ticket price", "curtain colour"], correctIndex: 0, explanation: "Look beneath surface events to the conflict." },
            { prompt: "Confusing the issue with the whole plot is wrong because the plot is the", options: ["events through which the issue plays out", "same as the theme", "cast list", "setting only"], correctIndex: 0, explanation: "The issue is the concern; the plot is the events." },
            { prompt: "Which appears again and again to reveal the main issue?", options: ["the concerns in dialogue and action", "the interval", "the printer's name", "the seat numbers"], correctIndex: 0, explanation: "Recurring concerns in dialogue and action signal the issue." },
            { prompt: "The major issue is the one that", options: ["drives the whole plot", "appears once only", "is on the cover", "never matters"], correctIndex: 0, explanation: "The major issue drives the entire play." },
            { prompt: "Identifying the main issues is the first step toward understanding the", options: ["theme", "ticket sales", "stage size", "actor pay"], correctIndex: 0, explanation: "The issue points toward the theme." },
            { prompt: "Movement toward the resolution after the climax is the", options: ["falling action", "exposition", "rising action", "prologue"], correctIndex: 0, explanation: "Falling action leads to the resolution." },
            { prompt: "A weakness in identifying issues is naming only", options: ["surface events", "the conflict", "the problem", "the theme"], correctIndex: 0, explanation: "Look past 'what happened' to the underlying problem." },
            { prompt: "The set text for this period is a", options: ["Shakespearean drama", "chemistry manual", "map", "news bulletin"], correctIndex: 0, explanation: "The syllabus names a Shakespearean play as the set text." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define 'conflict' and distinguish internal from external conflict, giving an example of each.", answerKey: "Conflict is the central struggle in a narrative. Internal conflict is a struggle within a character's own mind (e.g. a character torn between duty and desire). External conflict is against an outside force — another character, society or nature (e.g. a character defying a ruler). Award 2 for the definition and 2 per type with an example.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "At which stage of the plot does the main issue reach its crisis?", options: ["the climax", "the exposition", "the resolution", "the rising action"], correctIndex: 0, answerKey: "The climax is the moment of greatest tension. Option A.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "List the five stages of plot in order and state where the main issue is introduced and where it is resolved.", answerKey: "Exposition → rising action → climax → falling action → resolution. The issue is introduced in the exposition and resolved (happily or not) in the resolution. Award 3 for the correct ordered stages and 2 for the two placements.", marks: 5 },
            { type: "SHORT_ANSWER", prompt: "For a play you have studied, state its major issue and one minor issue.", answerKey: "Accept a clearly stated major issue (the central problem/conflict driving the plot) from a studied play, plus one valid minor issue woven around it. Award 3 for the major issue and 2 for a relevant minor issue.", marks: 5 },
            { type: "ESSAY", prompt: "Choose a play you have studied and trace the main issue running through it from exposition to resolution, showing how the conflict develops at each stage. Support your answer with reference to the text.", answerKey: "Award marks for: a clearly identified main issue/central conflict, 4 marks; tracing it through the plot stages — exposition, rising action, climax, falling action, resolution — 10 marks; distinguishing the major issue from minor issues and from surface events, 4 marks; textual reference throughout, 4 marks; organisation and expression, 2 marks. A response that merely retells the plot without isolating and tracing the issue should not exceed 8.", marks: 24 },
          ],
        },
        {
          // source: LibreTexts (Humanities) — Elements of Drama; How to Analyze Fiction: Elements of Literature (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama)
          slug: "major-and-minor-characters",
          title: "Major and Minor Characters",
          objective:
            "By the end of the topic, learners should be able to classify the characters of a play as major or minor, identify the protagonist, antagonist and foil, and explain how characterisation reveals character.",
          estimatedMinutes: 150,
          notes: `## Character and characterisation

- A **character** is a person (or being) who takes part in the action; we know characters through **what they say, what they think and how they act**.
- **Characterisation** is how the characters are described and revealed — through dialogue, appearance, thoughts, feelings and interactions.

## Major and minor characters

- **Major characters** carry the **main action** of the play; the story centres on them, and they usually have the most spoken lines.
- **Minor characters** play **smaller, supporting roles** — they help the plot along, add contrast, or reveal something about the major characters.

## Key character roles

- **Protagonist** — the **hero** of the play: usually the main character, the one with the most lines, the character the others seem to orbit.
- **Antagonist** — the **villain** or opponent, usually set opposite the protagonist and creating the conflict.
- **Foil** — a character meant to **define another through contrast** (juxtaposition or comparison), making the other's qualities stand out.
- Other supporting roles include the wise elder, the love interest and the messenger.

## Round, flat, dynamic and static

- **Round character** — complex, dimensional and well developed; often a lead role.
- **Flat character** — built on one or two traits; simple and unchanging.
- **Dynamic character** — one who **changes** across the play.
- **Static character** — one who **stays the same** throughout.

## Traits and roles

- A **trait** is a **quality** of a character — brave, proud, jealous, loyal.
- A **role** is the **function** a character serves — protagonist, antagonist, foil, helper.
- A good character analysis names the **trait**, gives the **evidence** (from speech or action), and states the **method** of characterisation.

## Methods of characterisation

Because a play is performed, character is shown mainly through:
1. **What the character says** — words, opinions, choice of language.
2. **What the character does** — actions and decisions under pressure.
3. **What other characters say** about them.
4. **Appearance and stage directions.**
5. **Soliloquy** — an extended speech alone on stage, often addressing the audience, revealing inner thoughts.

## Common errors and misconceptions

- **Confusing a trait with a role** — a **trait** is a *quality* (brave, cunning); a **role** is a *function* (protagonist, foil).
- **Mixing up flat/round with static/dynamic** — **flat/round** is about *depth*; **static/dynamic** is about *change*.
- **Naming a trait with no evidence** — always give the speech or action that shows it, and the method used.
- **Assuming every character is fully developed** — minor characters are often deliberately **flat** and exist to support the majors.`,
          workedExample: `**Task.** Explain how you would classify and analyse the characters in a play, distinguishing major from minor and naming their roles and traits.

**Model method**

**Step 1 — separate major from minor.** List the characters and ask who carries the main action and has the most lines (the **major** characters) and who supports them (the **minor** characters). The story "orbits" the majors.

**Step 2 — name the key roles.**
- The **protagonist** is the hero the play centres on.
- The **antagonist** is the opponent who creates the conflict.
- A **foil** is a character whose contrast highlights another (e.g. a hot-headed youth beside a patient elder).

**Step 3 — describe the majors as round or flat, dynamic or static.** A well-drawn protagonist is usually **round** (complex) and often **dynamic** (changes). Minor characters are frequently **flat** and **static**.

**Step 4 — analyse a trait with evidence and method.** Take one major character and one trait — say, "proud." State the trait, quote or cite the **evidence** (what the character says or does that shows pride), and name the **method** (characterisation through *what the character says*, or through *what others say* about them).

**Worked instance (trait + evidence + method):**
- **Trait:** proud.
- **Evidence:** the character refuses help and boasts of his own strength in his speeches.
- **Method:** characterisation through **what the character says** — his own words reveal the pride.

**Conclusion:** classifying characters means sorting **major from minor**, naming their **roles** (protagonist, antagonist, foil), judging their **depth and change** (round/flat, dynamic/static), and analysing **traits with evidence and method** — never naming a quality without showing how the playwright reveals it.`,
          quiz: [
            { prompt: "A character is a person who", options: ["takes part in the action", "prints the play", "sells tickets", "designs the set only"], correctIndex: 0, explanation: "Characters participate in the action." },
            { prompt: "Characterisation is how characters are", options: ["described and revealed", "paid", "seated", "counted"], correctIndex: 0, explanation: "It is the way characters are built and made known." },
            { prompt: "Characters who carry the main action are", options: ["major characters", "minor characters", "the audience", "props"], correctIndex: 0, explanation: "Major characters carry the main action." },
            { prompt: "Characters in smaller, supporting roles are", options: ["minor characters", "protagonists", "antagonists", "narrators"], correctIndex: 0, explanation: "Minor characters support the majors." },
            { prompt: "The hero the play centres on is the", options: ["protagonist", "antagonist", "foil", "messenger"], correctIndex: 0, explanation: "The protagonist is the main character." },
            { prompt: "The opponent set opposite the protagonist is the", options: ["antagonist", "protagonist", "foil", "chorus"], correctIndex: 0, explanation: "The antagonist creates the conflict." },
            { prompt: "A character who defines another through contrast is a", options: ["foil", "protagonist", "narrator", "prop"], correctIndex: 0, explanation: "A foil highlights another by juxtaposition." },
            { prompt: "A complex, well-developed character is", options: ["round", "flat", "static", "minor"], correctIndex: 0, explanation: "Round characters have depth." },
            { prompt: "A character built on one or two traits is", options: ["flat", "round", "dynamic", "the protagonist"], correctIndex: 0, explanation: "Flat characters are simple." },
            { prompt: "A character who changes during the play is", options: ["dynamic", "static", "flat", "minor"], correctIndex: 0, explanation: "Dynamic characters change." },
            { prompt: "A character who stays the same is", options: ["static", "dynamic", "round", "the antagonist"], correctIndex: 0, explanation: "Static characters do not change." },
            { prompt: "A quality of a character, such as brave, is a", options: ["trait", "role", "scene", "prop"], correctIndex: 0, explanation: "A trait is a quality." },
            { prompt: "The function a character serves (protagonist, foil) is their", options: ["role", "trait", "costume", "line"], correctIndex: 0, explanation: "The role is the function in the story." },
            { prompt: "A method of revealing character is", options: ["what the character says and does", "the ticket price", "the interval length", "the curtain colour"], correctIndex: 0, explanation: "Speech and action reveal character." },
            { prompt: "An extended speech alone on stage revealing inner thoughts is a", options: ["soliloquy", "dialogue", "prologue", "prop"], correctIndex: 0, explanation: "A soliloquy is delivered alone on stage." },
            { prompt: "Judging a character by what OTHER characters say is", options: ["a method of characterisation", "a stage direction", "an interval", "a prop"], correctIndex: 0, explanation: "Others' comments reveal character." },
            { prompt: "Flat vs round describes a character's", options: ["depth", "change", "cost", "costume"], correctIndex: 0, explanation: "Flat/round is about depth." },
            { prompt: "Static vs dynamic describes whether a character", options: ["changes", "speaks", "exits", "is major"], correctIndex: 0, explanation: "Static/dynamic is about change." },
            { prompt: "A good character analysis names the trait, gives evidence, and states the", options: ["method of characterisation", "book price", "author's age", "page count"], correctIndex: 0, explanation: "Trait + evidence + method is the routine." },
            { prompt: "Minor characters are often", options: ["flat and static", "always round", "the protagonist", "the narrator"], correctIndex: 0, explanation: "Minor characters tend to be flat and static." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Distinguish between major and minor characters, and between a protagonist and an antagonist.", answerKey: "Major characters carry the main action and usually have the most lines; minor characters play smaller, supporting roles. The protagonist is the hero/main character the play centres on; the antagonist is the opponent set against the protagonist, creating the conflict. Award 3 for each distinction.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "A character whose contrast highlights another character is a", options: ["foil", "protagonist", "static character", "messenger"], correctIndex: 0, answerKey: "A foil defines another through contrast. Option A.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Explain the difference between 'flat/round' and 'static/dynamic' characters.", answerKey: "Flat/round describes depth: a flat character is built on one or two traits, a round character is complex and well developed. Static/dynamic describes change: a static character stays the same, a dynamic character changes across the play. Award 3 for each pair correctly explained (max 5; strong answer of both pairs = 5).", marks: 5 },
            { type: "SHORT_ANSWER", prompt: "For a character in a play you have studied, name two traits and state one method of characterisation the playwright uses to reveal each.", answerKey: "Accept two clearly named traits, each paired with a valid method (what the character says/does, what others say, appearance/stage directions, soliloquy) and brief evidence. Award marks for each trait correctly matched to a method (max 5).", marks: 5 },
            { type: "ESSAY", prompt: "Choose a play you have studied and analyse its major and minor characters, identifying the protagonist, the antagonist and any foil, and showing how characterisation reveals at least one character's traits. Support your answer with reference to the text.", answerKey: "Award marks for: correct sorting of major and minor characters, 4 marks; identification of protagonist, antagonist and a foil with justification, 6 marks; analysis of at least one character's traits using trait + evidence + method (not plot summary) — the discriminating requirement — 8 marks; textual reference, 4 marks; organisation and expression, 2 marks. A response that narrates the plot without analysing characterisation should not exceed 8.", marks: 24 },
          ],
        },
        {
          // source: LibreTexts (Humanities) — Genres and Styles (Theatre Appreciation); Fiction and Drama - types, terms (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Theatre_Appreciation_(Pipino)/01%3A_Theatre_-_The_Basics/1.05%3A_Genres_and_Styles)
          slug: "kinds-of-drama",
          title: "Kinds of Drama: Tragedy, Comedy, Tragicomedy",
          objective:
            "By the end of the topic, learners should be able to define and distinguish the main kinds of drama — tragedy, comedy and tragicomedy (and melodrama and farce) — and classify a play by its features.",
          estimatedMinutes: 150,
          notes: `## Drama and its kinds

- **Drama** is literature written to be **performed**, organised into **dialogue**, acts and scenes.
- Plays are grouped into **kinds (genres)** by their tone, the kind of choices the characters face, and how they end.

## Tragedy

- **Tragedy** is **serious in tone**, focusing on a protagonist who experiences an **eventual downfall**.
- Classic tragedies feature **noble characters** facing **ethical choices** with high stakes, in **heightened language such as verse**.
- The tragic protagonist's suffering provokes strong feelings of **pity and fear** in the audience.
- Modern tragedy often shifts to **ordinary people** facing relatable challenges, in a realistic style.

## Comedy

- **Comedy** is **light in tone**, employs **humour**, and **ends happily**.
- Comic characters face **practical choices, not ethical ones**, and are usually common people drawn from stock types.
- Comedy uses devices like **misunderstandings, mistaken identities and physical comedy**, and should "generate hilarity and laughter."

## Tragicomedy

- **Tragicomedy** is a **hybrid** — it **combines elements of tragedy with elements of comedy**.
- It features everyday characters addressing serious subjects, but often concludes with a **happy or ambiguous ending** rather than a tragic one.

## Two related kinds

- **Melodrama** — emphasises **action over character**; features **one-dimensional characters** in a sharp division of **good versus evil**, ordinary people in extraordinary circumstances, usually ending happily.
- **Farce** — an extreme form of comedy: **fast-paced**, with **larger-than-life movements** and often petty violence.

## Classifying a play

To decide a play's kind, ask:
| Question | Tragedy | Comedy | Tragicomedy |
| --- | --- | --- | --- |
| Tone | serious | light | mixed |
| Ending | downfall | happy | happy or ambiguous |
| Choices | ethical, high stakes | practical | mixed |
| Feeling | pity and fear | laughter | both |

## Common errors and misconceptions

- **Thinking any sad play is a tragedy** — a tragedy specifically follows a protagonist's **downfall** and provokes pity and fear.
- **Thinking comedy just means "funny"** — comedy is defined by its **light tone and happy ending**, not only jokes.
- **Forgetting tragicomedy is a blend** — it mixes serious and comic elements and often ends happily or ambiguously.
- **Confusing melodrama with tragedy** — melodrama uses **simple good-versus-evil characters** and usually ends happily; it stresses **action over character**.`,
          workedExample: `**Task.** A play is light in tone, full of mistaken identities and misunderstandings, and ends with the confused couples happily united. Classify it and justify your answer, then explain how it would differ if it were a tragedy.

**Model answer**

**Classification: comedy.**

**Justification:**
- **Tone** — the play is **light**, not serious; the mishaps are amusing rather than fatal.
- **Devices** — it uses **mistaken identity and misunderstanding**, which are classic comic devices.
- **Ending** — it **ends happily**, with the couples united. A happy ending after confusion is the hallmark of comedy.
- **Choices** — the characters face **practical** problems (who marries whom), not grave ethical ones.

**How it would differ as a tragedy:**
- A **tragedy** is **serious in tone** and follows a protagonist to an **eventual downfall**.
- Instead of the confusion being resolved happily, the same misunderstandings might lead to **suffering or death**.
- The audience would feel **pity and fear** rather than laughter, and the characters might be **noble figures** facing **ethical choices** with high stakes.

**If instead it mixed serious danger with a happy ending** — real threat that turns out well — it would be a **tragicomedy**, the blend of the two kinds.

**Conclusion:** classify a play by its **tone, its choices, its devices and its ending**. Light + comic devices + happy ending = comedy; serious + downfall + pity and fear = tragedy; a blend ending happily or ambiguously = tragicomedy.`,
          quiz: [
            { prompt: "A serious play following a protagonist to an eventual downfall is a", options: ["tragedy", "comedy", "farce", "melodrama"], correctIndex: 0, explanation: "Tragedy is serious and ends in downfall." },
            { prompt: "A light play that uses humour and ends happily is a", options: ["comedy", "tragedy", "tragicomedy", "elegy"], correctIndex: 0, explanation: "Comedy is light and ends happily." },
            { prompt: "A play that combines elements of tragedy and comedy is a", options: ["tragicomedy", "farce", "melodrama", "history"], correctIndex: 0, explanation: "Tragicomedy is a hybrid." },
            { prompt: "The audience of a tragedy is meant to feel", options: ["pity and fear", "only laughter", "boredom", "nothing"], correctIndex: 0, explanation: "Tragedy provokes pity and fear." },
            { prompt: "Classic tragedies often use", options: ["heightened language such as verse", "no language", "only songs", "only mime"], correctIndex: 0, explanation: "Verse and noble characters mark classic tragedy." },
            { prompt: "Comic characters usually face", options: ["practical choices", "only ethical dilemmas", "no choices", "military choices"], correctIndex: 0, explanation: "Comedy involves practical, not ethical, choices." },
            { prompt: "Mistaken identity and misunderstanding are devices of", options: ["comedy", "tragedy", "melodrama", "elegy"], correctIndex: 0, explanation: "These are classic comic devices." },
            { prompt: "A tragicomedy often ends", options: ["happily or ambiguously", "always in death", "with no ending", "in the exposition"], correctIndex: 0, explanation: "It blends the kinds and often ends happily or ambiguously." },
            { prompt: "A kind of drama that stresses action over character, with good-versus-evil types, is", options: ["melodrama", "tragedy", "tragicomedy", "sonnet"], correctIndex: 0, explanation: "Melodrama emphasises action and simple characters." },
            { prompt: "A fast-paced, extreme comedy with larger-than-life movements is a", options: ["farce", "tragedy", "melodrama", "history"], correctIndex: 0, explanation: "Farce is an extreme form of comedy." },
            { prompt: "Comedy is defined mainly by its", options: ["light tone and happy ending", "number of acts", "use of verse", "sad ending"], correctIndex: 0, explanation: "Light tone and a happy ending define comedy." },
            { prompt: "Classic tragedy features characters of", options: ["noble/high standing", "no standing", "only children", "only servants"], correctIndex: 0, explanation: "Classic tragic heroes are noble figures." },
            { prompt: "Melodrama typically ends", options: ["happily", "in the exposition", "with no resolution", "in verse only"], correctIndex: 0, explanation: "Melodrama usually ends happily with good triumphing." },
            { prompt: "A sad play is NOT automatically a tragedy unless it follows a", options: ["protagonist's downfall", "happy couple", "comic subplot", "list of songs"], correctIndex: 0, explanation: "Tragedy specifically follows a downfall." },
            { prompt: "Modern tragedy often features", options: ["ordinary people facing relatable challenges", "only kings", "no characters", "only animals"], correctIndex: 0, explanation: "Modern tragedy shifts to ordinary people." },
            { prompt: "Drama is organised into dialogue, acts and", options: ["scenes", "chapters", "stanzas", "verses only"], correctIndex: 0, explanation: "Plays are divided into acts and scenes." },
            { prompt: "The tone of a tragicomedy is", options: ["mixed (serious and comic)", "only serious", "only comic", "absent"], correctIndex: 0, explanation: "It blends serious and comic tones." },
            { prompt: "Which feeling belongs with comedy?", options: ["laughter", "pity and fear", "dread", "grief only"], correctIndex: 0, explanation: "Comedy generates hilarity and laughter." },
            { prompt: "In melodrama, the characters are typically", options: ["one-dimensional, good or evil", "deeply complex", "all narrators", "invisible"], correctIndex: 0, explanation: "Melodrama uses simply drawn good/evil characters." },
            { prompt: "To classify a play's kind, examine its tone, choices, devices and", options: ["ending", "price", "printer", "cover"], correctIndex: 0, explanation: "The ending is a key clue to the kind." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define tragedy, comedy and tragicomedy, giving one distinguishing feature of each.", answerKey: "Tragedy — serious in tone, follows a protagonist to an eventual downfall, provoking pity and fear. Comedy — light in tone, uses humour, ends happily. Tragicomedy — a hybrid combining tragic and comic elements, often ending happily or ambiguously. Award 1 mark per definition and 1 per feature.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "Which feature best identifies a comedy?", options: ["a light tone and a happy ending", "a noble hero's downfall", "pity and fear", "one-dimensional good/evil characters"], correctIndex: 0, answerKey: "A light tone and a happy ending define comedy. Option A.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "Distinguish melodrama from tragedy.", answerKey: "Melodrama stresses action over character, uses one-dimensional good-versus-evil characters and usually ends happily; tragedy is serious, follows a complex protagonist's downfall through their own flaw, and provokes pity and fear. Award marks for the contrast in characters, emphasis and ending.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "A play presents ordinary people in real danger, but the danger is resolved and it ends happily. Which kind of drama is it, and why?", answerKey: "Tragicomedy — it blends serious elements (real danger) with a comic outcome (a happy or ambiguous ending), which is the defining feature of the hybrid kind. Award 2 for the classification and 3 for the justification.", marks: 5 },
            { type: "ESSAY", prompt: "Using a play you have studied, classify it by kind (tragedy, comedy or tragicomedy) and justify your classification by reference to its tone, the choices its characters face, its devices and its ending.", answerKey: "Award marks for: a correct, clearly stated classification, 4 marks; justification by tone, 4 marks; by the characters' choices, 4 marks; by devices used, 4 marks; by the ending, 4 marks; textual reference and expression, 4 marks. A response that merely retells the plot without applying the criteria of the kind should not exceed 8.", marks: 24 },
          ],
        },
        {
          // source: LibreTexts (Humanities) — How to Analyze Fiction: Elements of Literature; Fiction and Drama - types, terms (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/04%3A_About_Fiction_-_Short_Stories_and_the_Novel/4.05%3A_How_to_Analyze_Fiction_-_Elements_of_Literature)
          slug: "themes-in-drama",
          title: "The Different Themes of a Play",
          objective:
            "By the end of the topic, learners should be able to define theme, identify the different themes of a play, distinguish theme from subject and plot, and show how a theme is developed through character, conflict and dialogue.",
          estimatedMinutes: 150,
          notes: `## What a theme is

- A **theme** is the **main idea, lesson or message** of a work — usually an **abstract, universal idea** about the human condition, society or life.
- It is the **central idea or issue conveyed** by the story, an underlying truth that can often be summed up in a few words.
- A theme is **universal** — understood by readers across cultures and times.

## Theme is not subject, and not plot

- The **subject** is the broad topic (e.g. "love," "power").
- The **theme** is the **idea the play makes about that subject** (e.g. "love can blind us to reason").
- The **plot** is *what happens*; the theme is the **idea the events convey**.
- State a theme as a **full idea**, not a single word.

## A play has different (several) themes

- A play usually explores **more than one theme** at once.
- One may be the **central** theme; others are secondary but still important.
- Look for the ideas the play keeps returning to through its characters and conflict.

## How a theme is developed

A playwright does not simply announce a theme; it **emerges** through:
- **Character** — what characters value and how they behave.
- **Conflict** — the clash of characters or forces dramatises the idea.
- **Plot and ending** — the events, and especially how the play ends, reveal its attitude to the theme.
- **Dialogue** — what characters say (including recurring images or sayings) carries ideas.

## Identifying themes — a method

1. Note the **main issues/subject matter** running through the play (from the earlier topic).
2. Ask **what the play says about** each issue — that statement is the theme.
3. Express each theme as a **full sentence-like idea**.
4. Find **evidence** — a character, a conflict, an event — that develops it.

## Common errors and misconceptions

- **Stating a theme as one word** — "love" is a *subject*; a theme is a full idea ("love can overturn reason").
- **Confusing theme with plot** — the plot is *what happens*; the theme is the *idea it conveys*.
- **Expecting the theme to be stated outright** — a good play lets the theme **emerge** through character and conflict.
- **Naming only one theme** — most plays carry **several**; identify the central one and the secondary ones.`,
          workedExample: `**Task.** Explain the difference between subject, theme and plot, and show how you would identify and support a theme in a play.

**Model answer**

**Subject vs theme vs plot**
- **Subject** — the broad topic. Suppose a play is *about* **ambition**. "Ambition" is the subject.
- **Theme** — the **idea the play makes** about that subject, stated as a full idea: for example, *"unchecked ambition destroys the one who holds it."*
- **Plot** — *what happens*: a character rises through ruthless ambition and is finally ruined by it. The plot is the events; the theme is the idea those events convey.

**Identifying a theme — step by step**
1. **Note the main issue.** The play keeps returning to a character's hunger for power.
2. **Ask what the play says about it.** Through the character's rise and fall, the play suggests that ambition without limit brings destruction.
3. **State it as a full idea.** *"Unchecked ambition destroys the one who holds it."* (Not just "ambition.")
4. **Find the evidence.**
   - **Character** — the protagonist values power above loyalty.
   - **Conflict** — his ambition sets him against friends and rulers.
   - **Ending** — his downfall shows the play's attitude: ambition, unchecked, is fatal.

**A second theme.** The same play might also explore **guilt** — "guilt cannot be escaped." A play carries **several themes**; name the central one and the secondary ones.

**Conclusion:** a theme is the **idea a play conveys about its subject**, stated as a full idea and supported by character, conflict and the ending — never a single word, and never confused with the plot.`,
          quiz: [
            { prompt: "A theme is the", options: ["main idea or message of a work", "list of scenes", "cast of actors", "price of the book"], correctIndex: 0, explanation: "Theme is the central idea, often about the human condition." },
            { prompt: "A theme is usually", options: ["an abstract, universal idea", "a single stage prop", "the ticket price", "the author's name"], correctIndex: 0, explanation: "Themes are universal ideas about life or society." },
            { prompt: "The broad topic of a play (e.g. 'love') is its", options: ["subject", "theme", "plot", "setting"], correctIndex: 0, explanation: "The subject is the topic; the theme is the idea about it." },
            { prompt: "'Love can blind us to reason' is best described as a", options: ["theme", "subject", "plot", "prop"], correctIndex: 0, explanation: "A theme is a full idea about the subject." },
            { prompt: "The plot is what happens; the theme is the", options: ["idea the events convey", "cast list", "set design", "interval"], correctIndex: 0, explanation: "Do not confuse plot (events) with theme (idea)." },
            { prompt: "A play usually explores", options: ["more than one theme", "no themes", "only stage directions", "only one word"], correctIndex: 0, explanation: "Most plays carry several themes." },
            { prompt: "A theme should be stated as", options: ["a full idea", "a single word", "a page number", "an actor's name"], correctIndex: 0, explanation: "Express a theme as a full idea, not a bare topic." },
            { prompt: "A theme is usually", options: ["shown through character and conflict", "printed on the cover", "read out by a narrator", "listed in the programme"], correctIndex: 0, explanation: "Theme emerges through character, conflict and plot." },
            { prompt: "How a play ends helps reveal its", options: ["attitude to the theme", "ticket sales", "printing date", "seat numbers"], correctIndex: 0, explanation: "The ending shows the play's stance on its theme." },
            { prompt: "Which is a subject, not a theme?", options: ["power", "power corrupts those who hold it", "ambition destroys the ambitious", "guilt cannot be escaped"], correctIndex: 0, explanation: "'Power' is a bare subject; the others are full themes." },
            { prompt: "Themes are called universal because they are", options: ["understood across cultures and times", "written in one language only", "only about one country", "only about the past"], correctIndex: 0, explanation: "Universal themes cross cultures and eras." },
            { prompt: "To find a theme, first note the play's", options: ["main issues/subject matter", "curtain colour", "printer", "seat plan"], correctIndex: 0, explanation: "Note the issues, then ask what the play says about them." },
            { prompt: "The theme is the statement the play makes about its", options: ["subject", "actors", "tickets", "programme"], correctIndex: 0, explanation: "Theme = the idea about the subject." },
            { prompt: "Dialogue helps develop theme because it", options: ["carries characters' ideas and values", "sets the ticket price", "lists the cast", "names the printer"], correctIndex: 0, explanation: "What characters say conveys ideas." },
            { prompt: "Conflict develops a theme by", options: ["making opposing ideas clash on stage", "ending the play early", "removing all characters", "listing scenes"], correctIndex: 0, explanation: "Conflict dramatises the theme." },
            { prompt: "Which is a weakness in stating a theme?", options: ["giving only one word", "using a full idea", "citing evidence", "naming several themes"], correctIndex: 0, explanation: "A one-word theme is really just a subject." },
            { prompt: "A good play usually", options: ["lets the theme emerge, not stated outright", "prints the theme on page one", "has no theme", "states the moral in the title"], correctIndex: 0, explanation: "Theme emerges through the drama." },
            { prompt: "Character develops theme through what characters", options: ["value and how they behave", "cost to hire", "wear only", "are paid"], correctIndex: 0, explanation: "Characters' values and behaviour carry theme." },
            { prompt: "Most plays carry", options: ["a central theme and secondary ones", "exactly one theme always", "no ideas", "only a subject"], correctIndex: 0, explanation: "Identify the central theme and the secondary themes." },
            { prompt: "The deeper goal after identifying the main issue is to state the", options: ["theme (the idea about the issue)", "ticket price", "cast size", "act count"], correctIndex: 0, explanation: "The issue points toward the theme." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define 'theme' and explain how it differs from the subject and from the plot.", answerKey: "A theme is the main idea, lesson or message of a work — a universal idea about life, society or the human condition. The subject is the broad topic (e.g. 'love'); the theme is the idea the work makes about that subject (e.g. 'love can blind us to reason'). The plot is what happens; the theme is the idea the events convey. Award 2 for the definition, 2 for theme-vs-subject, 2 for theme-vs-plot.", marks: 6 },
            { type: "MULTIPLE_CHOICE", prompt: "Which of these is stated as a theme rather than a subject?", options: ["Unchecked ambition destroys the one who holds it", "Ambition", "Power", "Love"], correctIndex: 0, answerKey: "A theme is a full idea; the others are bare subjects. Option A.", marks: 2 },
            { type: "SHORT_ANSWER", prompt: "State two different themes from a play you have studied, expressing each as a full idea.", answerKey: "Accept two valid themes from a studied play, each phrased as a full idea (not a single word) — e.g. 'love can overturn reason' and 'order can be restored after disorder.' Award 2.5 per well-stated theme (max 5).", marks: 5 },
            { type: "SHORT_ANSWER", prompt: "Explain how a theme is developed through character, conflict and the ending.", answerKey: "Character — what characters value and how they behave embodies the idea; conflict — the clash of characters/forces dramatises it; ending — how the play concludes reveals its attitude to the theme. Award marks for each of the three shown to develop theme.", marks: 5 },
            { type: "ESSAY", prompt: "Choose a play you have studied and discuss two of its themes, showing for each how the playwright develops it through character, conflict and the ending. Support your answer with reference to the text.", answerKey: "Award marks for: two themes each stated as a full idea (not a bare subject), 6 marks; development of each through character, conflict and ending, 10 marks; textual evidence rather than plot summary — the discriminating requirement — 6 marks; organisation and expression, 2 marks. A response that names a one-word 'theme' or retells the plot should not exceed 8.", marks: 24 },
          ],
        },
      ],
    },
  ],
};
