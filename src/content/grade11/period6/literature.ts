import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 11, Semester Two, Period VI: African and Non-African Prose, Poetry and
// Drama (review and synthesis). The Grade 11 Period VI CONTENTS list has four
// top-level items (a-d), each rebuilt here as its own topic: (a) Themes
// (cultural beliefs, maltreatment, loneliness, widowhood, hostility, death),
// (b) Literary devices (foreshadowing, suspense, flashback, symbolism),
// (c) Using graphic organizers, (d) Writing prose/short story, poetry/poem and
// drama/play. Literary concepts are sourced from LibreTexts (Humanities). The
// syllabus names set texts across genres (Lonely Days, Native Son, Let Me Die
// Alone, and various poems). Set-text-specific facts are NOT invented — the
// general skills are taught and the set texts are flagged as teaching targets.
export const literatureG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "African and Non-African Prose, Poetry and Drama",
  summary:
    "Period VI of the MoE Grade 11 Literature syllabus, a review and synthesis across genres. Its four CONTENTS items are taught as four topics: themes across texts; literary devices (foreshadowing, suspense, flashback, symbolism); using graphic organizers to depict character roles; and writing prose, poetry and drama.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Theme (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "themes-across-texts",
      title: "Themes: Cultural Beliefs, Maltreatment, Loneliness, Widowhood, Hostility, Death",
      objective:
        "By the end of the topic, learners should be able to identify and state themes across prose, poetry and drama — cultural beliefs, maltreatment, loneliness, widowhood, hostility and death — as full ideas supported by evidence.",
      estimatedMinutes: 150,
      notes: `## What a theme is

- A **theme** is **not the plot**. It is the **underlying truth or central idea** a text conveys about life.
- A theme is stated as a **full idea** ("*the maltreatment of a widow exposes a community's cruelty*"), not a **one-word topic** ("widowhood").
- The same theme can run across **prose, poetry and drama**.

## The themes named by the syllabus

- **Cultural beliefs** — how a community's customs and convictions shape lives.
- **Maltreatment** — cruelty and ill-treatment of the weak or the outsider.
- **Loneliness** — isolation and the longing for connection.
- **Widowhood** — the position and treatment of a widow.
- **Hostility** — enmity, conflict and aggression between people or groups.
- **Death** — loss, mortality and its effect on the living.

## Topic versus theme

| Topic (one word) | Theme (a full idea) |
| --- | --- |
| Loneliness | Isolation can drive a person to seek connection at any cost |
| Widowhood | Custom can turn a widow into an outsider in her own home |
| Death | The death of one person can reshape the lives of many |

## Finding a theme across genres

1. Ask **what the text is really about** beyond the events.
2. Notice what **repeats** — images, conflicts, situations.
3. See what characters **suffer** or **learn**.
4. State the idea as a **full sentence** about life.
5. **Support** it with evidence — a line, action or image — from the text.

## Set text (to be supplied by the teacher)

- Identify these themes in the assigned prose, poems and plays, state each as a full idea, and support it with evidence.
- *(Which themes appear and how they are developed come from the set texts themselves, not invented here.)*

## Common errors and misconceptions

- **Stating a theme as one word** — a theme is a full idea, not a topic.
- **Confusing theme with plot** — plot is events; theme is the idea behind them.
- **Naming a theme with no evidence** — support it from the text.
- **Assuming one theme only** — a rich text carries several themes at once.`,
      workedExample: `**Task.** Turn topics into themes and support one, across genres, using a general model.

**Step 1 — from topic to theme.** Take three of the syllabus topics and state each as a full idea:
- *Loneliness* → "Isolation can hollow out a person and drive them to seek any connection."
- *Widowhood* → "Custom can turn a grieving widow into an outsider in her own community."
- *Maltreatment* → "A society reveals its cruelty in how it treats the weakest among it."

**Step 2 — choose one and support it.** Take the widowhood theme. In a **prose** text, find where a widow is excluded; in a **poem**, an image of isolation; in a **play**, a scene of the community turning away. *(In an exam you would quote the actual text.)*

**Step 3 — explain.** Show how each piece of evidence proves the theme: the exclusion, the image and the scene all demonstrate that custom has made the widow an outsider — the very idea the theme states.

**Step 4 — note that themes cross genres.** The same idea (isolation, death, hostility) can appear in **prose, poetry and drama**; identify it in each.

**Step 5 — allow multiple themes.** A single text may carry **loneliness and death and hostility** at once; state each as a full idea.

**Conclusion:** a theme is a **full idea about life**, not a one-word topic. Find it by asking what the text is really about, state it as a sentence, **support it with evidence**, and recognise that themes recur **across genres** and that a rich text holds several at once.`,
      quiz: [
        { prompt: "A theme is the text's", options: ["underlying idea about life", "list of events", "price", "cover"], correctIndex: 0, explanation: "Theme is the underlying idea." },
        { prompt: "A theme should be stated as", options: ["a full idea", "one word", "a page number", "a name"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "'Widowhood' by itself is a", options: ["topic, not a full theme", "full theme", "plot", "setting"], correctIndex: 0, explanation: "One word is a topic; a theme is an idea." },
        { prompt: "Theme differs from plot because plot is", options: ["what happens", "the idea behind events", "the mood", "the author"], correctIndex: 0, explanation: "Plot is events; theme is the idea." },
        { prompt: "Isolation and the longing for connection point to the theme of", options: ["loneliness", "printing", "arithmetic", "map-making"], correctIndex: 0, explanation: "Loneliness is a listed theme." },
        { prompt: "Cruelty and ill-treatment of the weak is the theme of", options: ["maltreatment", "cultural beliefs", "death", "hostility"], correctIndex: 0, explanation: "Maltreatment is cruelty to the weak." },
        { prompt: "A theme must be supported with", options: ["evidence from the text", "a price", "a cover", "a date"], correctIndex: 0, explanation: "Support a theme with evidence." },
        { prompt: "The same theme can run across prose, poetry and", options: ["drama", "receipts", "timetables", "phone books"], correctIndex: 0, explanation: "Themes cross genres." },
        { prompt: "Enmity and aggression between people is the theme of", options: ["hostility", "loneliness", "death", "widowhood"], correctIndex: 0, explanation: "Hostility is enmity and conflict." },
        { prompt: "Loss and mortality and their effect on the living is the theme of", options: ["death", "cultural beliefs", "maltreatment", "hostility"], correctIndex: 0, explanation: "Death is loss and mortality." },
        { prompt: "How a community's customs shape lives is the theme of", options: ["cultural beliefs", "loneliness", "death", "hostility"], correctIndex: 0, explanation: "Cultural beliefs shape lives." },
        { prompt: "A rich text usually carries", options: ["several themes at once", "no theme", "only a title", "only a price"], correctIndex: 0, explanation: "Texts hold multiple themes." },
        { prompt: "To find a theme, ask what the text is", options: ["really about beyond events", "priced at", "printed on", "numbered by"], correctIndex: 0, explanation: "Look beyond the plot." },
        { prompt: "Repeated images and conflicts often point to a", options: ["theme", "price", "printer", "font"], correctIndex: 0, explanation: "Repetition signals theme." },
        { prompt: "What characters suffer or learn can reveal the", options: ["theme", "price", "date", "cover"], correctIndex: 0, explanation: "The characters' experience reveals theme." },
        { prompt: "The treatment of a widow is the theme of", options: ["widowhood", "printing", "arithmetic", "map-making"], correctIndex: 0, explanation: "Widowhood concerns the widow's position." },
        { prompt: "Naming a theme with no evidence is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Themes must be supported." },
        { prompt: "'Isolation can drive a person to seek connection' is stated as a", options: ["full theme", "one-word topic", "plot", "setting"], correctIndex: 0, explanation: "It is a full idea." },
        { prompt: "A theme is best expressed as a", options: ["sentence about life", "single noun", "number", "date"], correctIndex: 0, explanation: "State a theme as a full sentence." },
        { prompt: "Assuming a text has only one theme is", options: ["an error", "always correct", "required", "a summary"], correctIndex: 0, explanation: "Rich texts have several themes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a topic and a theme, giving an example of each.", answerKey: "A topic is a one-word subject (e.g. death); a theme is a full idea about life (e.g. 'the death of one person can reshape the lives of many'). Award 2 for the distinction and 1 per example (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a correctly stated theme (not a topic)?", options: ["Custom can turn a widow into an outsider in her own home", "Widowhood", "Death", "Loneliness"], correctIndex: 0, answerKey: "Only option A is a full idea; the rest are one-word topics. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List five themes named by the syllabus for this period.", answerKey: "Any five of: cultural beliefs; maltreatment; loneliness; widowhood; hostility; death. Award 1 mark each (max 5).", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Give the steps for finding and stating a theme in a text.", answerKey: "Ask what the text is really about beyond the events; notice what repeats (images, conflicts, situations); see what characters suffer or learn; state the idea as a full sentence about life; support it with evidence. Award marks for the steps.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing texts you have studied across at least two genres, identify a shared theme, state it as a full idea, and show how each text develops it, using textual evidence.", answerKey: "Award marks for: a theme stated as a full idea (not a topic), 6 marks; the theme traced in at least two genres, 10 marks; textual evidence from each, 6 marks; expression, 2 marks. A one-word topic or single-text treatment should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Literary Devices Glossary (Introduction to Literature and Critical Thinking, Oxnard College) (https://human.libretexts.org/Courses/Oxnard_College/Introduction_to_Literature_and_Critical_Thinking/10%3A_Literary_Devices_Glossary); LiteraryDevices.net — Foreshadowing, Suspense (https://literarydevices.net/foreshadowing/)
      slug: "literary-devices-review",
      title: "Literary Devices: Foreshadowing, Suspense, Flashback, Symbolism",
      objective:
        "By the end of the topic, learners should be able to identify and explain foreshadowing, suspense, flashback and symbolism across prose, poetry and drama, and analyse their effect.",
      estimatedMinutes: 150,
      notes: `## Literary devices across genres

- **Literary devices** are techniques writers use to shape meaning and effect beyond the literal words; they appear in **prose, poetry and drama**.

## Foreshadowing

- **Foreshadowing** is a device in which an author gives an **advance hint of events that will occur later** in the story, **building suspense** and making the story more satisfying.

## Suspense

- **Suspense** is the feeling of **anticipation and uncertainty**, created by **delaying information** or creating a **sense of danger**.

## Flashback

- **Flashback** interrupts the present action to show an **earlier event**, providing **crucial backstory** and revealing characters' **motivations**.

## Symbolism

- **Symbolism** is the use of **objects, characters or events to represent abstract ideas** — a symbol means both itself and something larger.

## How the devices work together

- **Foreshadowing** plants a hint → **suspense** grows as the reader waits → a **flashback** may explain why a character acts → a **symbol** deepens the meaning of it all.

## Analysing a device

Use **name → point → effect**:
1. **Name** the device.
2. **Point** to where it appears.
3. **Explain the effect** — what it adds to meaning, feeling or tension.

## Set text (to be supplied by the teacher)

- Identify these devices in the assigned prose, poems and plays and explain their effect.
- *(Specific instances come from the set texts themselves, not invented here.)*

## Common errors and misconceptions

- **Confusing foreshadowing with a flashback** — foreshadowing hints **forward**; a flashback looks **backward**.
- **Naming a device with no effect** — always explain what it does.
- **Reading a symbol too literally** — a symbol stands for a larger idea.
- **Confusing suspense (a feeling) with the events that cause it**.`,
      workedExample: `**Task.** Identify and explain the literary devices in a short passage.

*"He should have trusted the dream that warned him. Now, waiting for the messenger who might bring life or death, he remembered the day, long ago, when he first betrayed a friend — and he turned the old brass key over and over in his hand."*

**Device 1 — foreshadowing.** "the dream that warned him" is **foreshadowing** — an **advance hint** of trouble. **Effect:** it makes later events feel prepared for and builds unease.

**Device 2 — suspense.** "waiting for the messenger who might bring life or death" creates **suspense** — **anticipation and uncertainty** through delayed information and danger. **Effect:** the reader shares his tense waiting.

**Device 3 — flashback.** "he remembered the day, long ago, when he first betrayed a friend" is a **flashback**. **Effect:** it supplies **backstory** — the old betrayal — that explains his present fear.

**Device 4 — symbolism.** The **old brass key** he turns over works as a **symbol** — of a locked past, guilt, or a door he cannot reopen. **Effect:** it means more than an object; it deepens the sense of a past that still holds him.

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
        { prompt: "Literary devices appear in prose, poetry and", options: ["drama", "receipts", "timetables", "phone books"], correctIndex: 0, explanation: "Devices work across genres." },
        { prompt: "A flashback deepens understanding of characters'", options: ["motivations", "prices", "fonts", "page counts"], correctIndex: 0, explanation: "Flashback reveals motivations." },
        { prompt: "Naming a device with no effect is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Always explain the effect." },
        { prompt: "Suspense is a feeling; it should not be confused with the", options: ["events that cause it", "price", "font", "cover"], correctIndex: 0, explanation: "Distinguish the feeling from its causes." },
        { prompt: "An old brass key standing for a locked past works as", options: ["symbolism", "a flashback", "suspense", "foreshadowing only"], correctIndex: 0, explanation: "The object symbolises the locked past." },
        { prompt: "To analyse a device, name it, point to it and explain its", options: ["effect", "price", "font", "date"], correctIndex: 0, explanation: "Name → point → effect." },
        { prompt: "'Waiting for a messenger who might bring life or death' creates", options: ["suspense", "a flashback", "a symbol", "a refrain"], correctIndex: 0, explanation: "Delayed outcome builds suspense." },
        { prompt: "Reading a symbol too literally misses its", options: ["larger idea", "spelling", "price", "page number"], correctIndex: 0, explanation: "A symbol stands for a larger idea." },
        { prompt: "'He remembered the day, long ago' is a", options: ["flashback", "foreshadowing", "symbol", "refrain"], correctIndex: 0, explanation: "It shows an earlier event." },
        { prompt: "A hint that later events feel prepared for is the work of", options: ["foreshadowing", "suspense", "symbolism", "flashback"], correctIndex: 0, explanation: "Foreshadowing prepares later events." },
        { prompt: "Literary devices shape meaning beyond the", options: ["literal words", "price", "font", "cover"], correctIndex: 0, explanation: "Devices work beyond the literal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define foreshadowing, suspense, flashback and symbolism.", answerKey: "Foreshadowing — an advance hint of events that will occur later; suspense — the feeling of anticipation and uncertainty created by delaying information or a sense of danger; flashback — an interruption showing an earlier event, giving backstory; symbolism — using objects, characters or events to represent abstract ideas. Award 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A device that gives an advance hint of what will happen later is", options: ["foreshadowing", "flashback", "symbolism", "suspense"], correctIndex: 0, answerKey: "Foreshadowing. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between foreshadowing and flashback.", answerKey: "Foreshadowing hints forward at events still to come; a flashback looks backward, interrupting the present to show an earlier event and provide backstory. Award 2 per device.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How does foreshadowing relate to suspense?", answerKey: "Foreshadowing plants an advance hint of events to come, which builds suspense — the reader's anticipation and uncertainty grows as they wait to see the hinted event unfold. Award marks for the link.", marks: 3 },
        { type: "ESSAY", prompt: "Choose texts across at least two genres that you have studied and discuss how the writers use at least three of these devices (foreshadowing, suspense, flashback, symbolism), explaining the effect of each with reference to the texts.", answerKey: "Award marks for: at least three devices correctly identified with reference across genres, 9 marks; explanation of the effect of each on meaning, feeling or tension, 12 marks; textual support and expression, 3 marks. Naming devices without effect should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Character (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "using-graphic-organizers",
      title: "Using Graphic Organizers to Depict Character Roles",
      objective:
        "By the end of the topic, learners should be able to use graphic organizers — character maps, webs and relationship charts — to depict and analyse the roles and relationships of characters in a text.",
      estimatedMinutes: 150,
      notes: `## What a graphic organizer is

- A **graphic organizer** is a **visual tool** that arranges information — characters, traits, roles and relationships — in a diagram so patterns can be seen at a glance.
- For literature, a graphic organizer helps **depict character roles**: who the protagonist and antagonist are, how characters relate, and what traits define them.

## Characters and roles to organise

- **Protagonist** — the main character; **antagonist** — the adversary; **supporting characters** — helpers, opponents, foils.
- **Major (round)** characters are complex and developed; **minor (flat)** characters have one or two traits.

## Common graphic organizers for character

- **Character map** — the character in the centre; branches for **traits, actions, and what others say**.
- **Character web / relationship chart** — characters as nodes with **lines showing relationships** (family, ally, enemy) labelled on the connections.
- **Protagonist–antagonist chart** — two columns comparing the opposed characters' goals and traits.
- **Trait–evidence table** — a table pairing each **trait** with the **evidence** from the text.

## A character map (example layout)

\`\`\`svg A simple character map
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif" font-size="9">
  <ellipse cx="160" cy="90" rx="46" ry="24" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="160" y="93" text-anchor="middle">Character</text>
  <line x1="160" y1="66" x2="160" y2="30" stroke="currentColor"/>
  <line x1="206" y1="90" x2="270" y2="90" stroke="currentColor"/>
  <line x1="160" y1="114" x2="160" y2="150" stroke="currentColor"/>
  <line x1="114" y1="90" x2="50" y2="90" stroke="currentColor"/>
  <rect x="120" y="14" width="80" height="18" fill="none" stroke="currentColor"/>
  <text x="160" y="26" text-anchor="middle">Role</text>
  <rect x="270" y="81" width="46" height="18" fill="none" stroke="currentColor"/>
  <text x="293" y="93" text-anchor="middle">Traits</text>
  <rect x="120" y="150" width="80" height="18" fill="none" stroke="currentColor"/>
  <text x="160" y="162" text-anchor="middle">Actions</text>
  <rect x="4" y="81" width="46" height="18" fill="none" stroke="currentColor"/>
  <text x="27" y="93" text-anchor="middle">Others say</text>
</svg>
\`\`\`

## How to use one

1. Put the **character** at the centre (or list characters as nodes).
2. Add branches or columns for **role, traits, actions, and what others say**.
3. Draw **lines for relationships** between characters and label them.
4. Fill each branch with **evidence** from the text.
5. Read the finished organizer to see **roles and relationships** at a glance.

## Set text (to be supplied by the teacher)

- Build a graphic organizer for the characters of an assigned text, depicting their roles, traits and relationships with evidence.
- *(The specific characters and evidence come from the set text itself, not invented here.)*

## Common errors and misconceptions

- **Filling a map with plot, not character** — a character organizer holds roles, traits and relationships.
- **Adding traits with no evidence** — pair each trait with a line or action.
- **Confusing a role with a trait** — a role is a function; a trait is a quality.
- **Leaving relationships unlabelled** — say what each connection is (ally, enemy, family).`,
      workedExample: `**Task.** Build a character organizer for a text, using a general model.

**Step 1 — choose the organizer.** To show how characters relate, use a **relationship chart** (a web); to analyse one character in depth, use a **character map**.

**Step 2 — place the characters (relationship chart).**
- Node: **PROTAGONIST** (a young woman defying a custom).
- Node: **ANTAGONIST** (an elder enforcing the custom).
- Node: **FOIL** (a sister who conforms).
- Draw **lines** and label them: protagonist—antagonist ("opposed"); protagonist—foil ("sisters, contrasting choices").

**Step 3 — map one character (character map).** Put the **protagonist** at the centre; branch out:
- **Role:** protagonist.
- **Traits:** courage, stubbornness.
- **Actions:** she refuses the arranged marriage.
- **Others say:** the elders call her disobedient.

**Step 4 — add evidence.** Beside each trait, note the **line or action** that shows it. *(In an exam you would quote the actual text.)*

**Step 5 — read the organizer.** At a glance it shows the protagonist's **role**, her **traits with evidence**, and her **relationships** (opposed to the antagonist, contrasted with the foil).

**Conclusion:** a graphic organizer **depicts character roles** visually — a **character map** for one character's role, traits, actions and reputation; a **relationship chart** for how characters connect. Fill it with **evidence**, and label every relationship.`,
      quiz: [
        { prompt: "A graphic organizer is a", options: ["visual tool arranging information", "price list", "printer", "index"], correctIndex: 0, explanation: "It arranges information visually." },
        { prompt: "For literature, a graphic organizer helps depict character", options: ["roles", "prices", "fonts", "page counts"], correctIndex: 0, explanation: "It depicts character roles." },
        { prompt: "The main character shown in an organizer is the", options: ["protagonist", "antagonist", "printer", "editor"], correctIndex: 0, explanation: "The protagonist is the main character." },
        { prompt: "The adversary shown in an organizer is the", options: ["antagonist", "protagonist", "narrator", "author"], correctIndex: 0, explanation: "The antagonist is the adversary." },
        { prompt: "A character map puts the character at the centre with branches for traits, actions and", options: ["what others say", "the price", "the printer", "the index"], correctIndex: 0, explanation: "Branches include what others say." },
        { prompt: "A web with lines showing relationships is a", options: ["relationship chart", "price list", "index", "cover"], correctIndex: 0, explanation: "A relationship chart links characters." },
        { prompt: "A protagonist–antagonist chart compares the two characters'", options: ["goals and traits", "prices", "fonts", "page counts"], correctIndex: 0, explanation: "It compares goals and traits." },
        { prompt: "A trait–evidence table pairs each trait with its", options: ["evidence", "price", "font", "date"], correctIndex: 0, explanation: "Pair each trait with evidence." },
        { prompt: "A character organizer should hold roles, traits and", options: ["relationships", "prices", "fonts", "indexes"], correctIndex: 0, explanation: "It holds roles, traits and relationships." },
        { prompt: "Filling a character map with plot instead of character is an", options: ["error", "requirement", "always correct", "good habit"], correctIndex: 0, explanation: "A character organizer holds character, not plot." },
        { prompt: "A complex, developed character is", options: ["major/round", "minor/flat", "the narrator", "the printer"], correctIndex: 0, explanation: "Round characters are developed." },
        { prompt: "A character with one or two traits is", options: ["minor/flat", "major/round", "dynamic", "the protagonist"], correctIndex: 0, explanation: "Flat characters are simple." },
        { prompt: "Each relationship line in a chart should be", options: ["labelled (ally, enemy, family)", "priced", "printed", "numbered"], correctIndex: 0, explanation: "Label what each connection is." },
        { prompt: "A trait added to an organizer should have", options: ["evidence", "a price", "a font", "a date"], correctIndex: 0, explanation: "Pair each trait with evidence." },
        { prompt: "A role is a function; a trait is a", options: ["quality", "price", "font", "page number"], correctIndex: 0, explanation: "Role = function; trait = quality." },
        { prompt: "A character who contrasts another is a", options: ["foil", "protagonist", "printer", "editor"], correctIndex: 0, explanation: "A foil contrasts another." },
        { prompt: "The benefit of a graphic organizer is seeing patterns", options: ["at a glance", "for a price", "in an index", "on a cover"], correctIndex: 0, explanation: "It shows patterns at a glance." },
        { prompt: "To analyse one character in depth, use a", options: ["character map", "price list", "index", "cover"], correctIndex: 0, explanation: "A character map suits one character." },
        { prompt: "To show how characters connect, use a", options: ["relationship chart", "price list", "index", "cover"], correctIndex: 0, explanation: "A relationship chart shows connections." },
        { prompt: "Leaving relationships unlabelled is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "Say what each connection is." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is a graphic organizer, and how does it help in studying characters?", answerKey: "A graphic organizer is a visual tool that arranges information (characters, traits, roles, relationships) in a diagram so patterns can be seen at a glance; for characters it helps depict roles (protagonist, antagonist, foil), traits and relationships clearly. Award 2 for the definition and 2 for its use.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which graphic organizer best shows how characters relate to one another?", options: ["a relationship chart/web with labelled lines", "a price list", "a table of contents", "an index"], correctIndex: 0, answerKey: "A relationship chart/web. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name four things a character map should include around the character.", answerKey: "Role; traits; actions; what others say about the character (and, ideally, the evidence for each). Award 1 mark each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two common errors to avoid when building a character organizer.", answerKey: "Any two of: filling it with plot instead of character (roles, traits, relationships); adding traits with no evidence; confusing a role (function) with a trait (quality); leaving relationships unlabelled. Award 2 marks each up to the total.", marks: 3 },
        { type: "ESSAY", prompt: "For a text you have studied, build (describe in words) a graphic organizer depicting the main characters' roles, traits and relationships, supporting each entry with evidence, and explain what the organizer reveals.", answerKey: "Award marks for: a suitable organizer described (map or relationship chart), 6 marks; characters' roles correctly shown, 6 marks; traits with evidence, 6 marks; relationships labelled, 4 marks; what the organizer reveals, 2 marks. An organizer filled with plot rather than character should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — What is Fiction? (Ringo and Kashyap) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/04%3A_About_Fiction_-_Short_Stories_and_the_Novel/4.01%3A_What_is_Fiction); Imagery in Poetry (Introduction to Creative Writing, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Introduction_to_Creative_Writing_(Lumen)/04%3A_Writing_Poetry/04.10%3A_Lesson_11%3A_Imagery_in_Poetry); Playwriting (Garcia) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Playwriting_(Garcia)/01%3A_Chapters/1.01%3A_Playwriting)
      slug: "writing-across-genres",
      title: "Writing Prose, Poetry and Drama",
      objective:
        "By the end of the topic, learners should be able to write in all three genres — a short story, a poem, and a dramatic scene — applying the conventions of each.",
      estimatedMinutes: 150,
      notes: `## Writing across the three genres

- This topic brings together the writing skills of the whole grade: composing a **short story** (prose), a **poem** (poetry) and a **play/scene** (drama).
- Each genre has its **own conventions**, but all reward a clear **central idea** and **concrete, purposeful detail**.

## Writing prose (a short story)

- A short story uses the **elements of fiction**: character, setting, **plot**, **conflict**, **point of view** and theme.
- Build it around a **central conflict**; reveal character through **characterisation** — direct (description) or indirect (behaviour, speech, thought).
- Control **point of view** (first person, third limited, third omniscient) and keep it consistent.

## Writing poetry (a poem)

- A poem communicates through **compressed language, imagery and sound**, in **lines and stanzas**.
- Use **concrete sensory imagery** (sight, sound, taste, touch, smell) — **show, don't tell** — and **figurative language** (simile, metaphor, symbol).
- Choose a **form** (sonnet, free verse) and shape **line breaks** for emphasis.

## Writing drama (a scene)

- A play is a story told through **dialogue and action**, built around a **central problem**.
- Use **stage directions** (italicised, separate) for setting, movement and key actions; give each character a **distinct voice**.
- Shape the scene toward a small **climax**.

## Genre conventions at a glance

| Genre | Built from | Key convention |
| --- | --- | --- |
| Prose | sentences and paragraphs | plot, conflict, point of view |
| Poetry | lines and stanzas | imagery, figures, form |
| Drama | dialogue and stage directions | script form, central conflict |

## Set text as a model (to be supplied by the teacher)

- Use studied texts in each genre as **models** of form; write your own short story, poem and scene applying each genre's conventions.
- *(Your writing is your own creation; do not copy a set text's specific plot, lines or characters.)*

## Common errors and misconceptions

- **Writing prose when a script is asked for** — drama uses dialogue and stage directions.
- **Telling with abstract words in a poem** — use concrete images (show, don't tell).
- **A story with no conflict** — prose and drama both need a central problem.
- **Switching point of view carelessly** in prose — keep it consistent.`,
      workedExample: `**Task.** Take one situation and show how it is written in each genre.

**Situation:** a young person leaving home for the city, watched by a grandmother.

**As prose (short story) —**
*Ama folded the last shirt into the bag she had packed and unpacked three times. From the doorway her grandmother watched, saying nothing, her hands still for once.*
- Uses **third person limited** (close to Ama), **indirect characterisation** (the folding shows her nerves), and sets up the **conflict** (leaving vs staying).

**As poetry (a poem) —**
*The lorry breathes at the gate.*
*Grandmother's hands, quiet as folded cloth,*
*hold all the words she will not say.*
- Uses **concrete imagery** (the lorry "breathes," hands "quiet as folded cloth"), a **simile**, and short **free-verse lines** with line breaks for emphasis (show, don't tell).

**As drama (a scene) —**
*A doorway at dawn. A bag on the floor. GRANDMOTHER stands very still. AMA lifts the bag.*
**AMA:** The lorry won't wait, Grandma.
**GRANDMOTHER:** *(not moving)* Neither will the years. Go.
- Uses **script form**, **stage directions** (the stillness), **distinct voices**, and a **central problem** (the parting).

**Conclusion:** the same idea becomes a **story** (plot, point of view, characterisation), a **poem** (imagery, figures, line breaks), or a **scene** (dialogue, stage directions, conflict). Apply each genre's **own conventions** while keeping a clear central idea.`,
      quiz: [
        { prompt: "A short story uses the elements of", options: ["fiction", "arithmetic", "cartography", "accounting"], correctIndex: 0, explanation: "Short stories use the elements of fiction." },
        { prompt: "A poem communicates through compressed language, imagery and", options: ["sound", "price", "font", "index"], correctIndex: 0, explanation: "Poetry uses imagery and sound." },
        { prompt: "A play is a story told through", options: ["dialogue and action", "description only", "rhyme only", "narration only"], correctIndex: 0, explanation: "Drama uses dialogue and action." },
        { prompt: "Prose is built from", options: ["sentences and paragraphs", "lines and stanzas", "dialogue and stage directions", "acts only"], correctIndex: 0, explanation: "Prose uses sentences and paragraphs." },
        { prompt: "Poetry is built from", options: ["lines and stanzas", "sentences and paragraphs", "acts and scenes", "chapters"], correctIndex: 0, explanation: "Poetry uses lines and stanzas." },
        { prompt: "Drama is built from", options: ["dialogue and stage directions", "sentences and paragraphs", "lines and stanzas", "chapters"], correctIndex: 0, explanation: "Drama uses dialogue and stage directions." },
        { prompt: "A short story should be built around a central", options: ["conflict", "price", "font", "index"], correctIndex: 0, explanation: "Prose needs a central conflict." },
        { prompt: "In a poem, 'show, don't tell' means using", options: ["concrete images", "abstract words", "prices", "numbers"], correctIndex: 0, explanation: "Show through concrete images." },
        { prompt: "A scene should be shaped toward a small", options: ["climax", "price", "font", "index"], correctIndex: 0, explanation: "Build the scene to a climax." },
        { prompt: "Stage directions are usually", options: ["italicised and separate from dialogue", "sung", "hidden", "spoken by the audience"], correctIndex: 0, explanation: "They are set apart from dialogue." },
        { prompt: "Point of view in prose should be kept", options: ["consistent", "changing at random", "priced", "numbered"], correctIndex: 0, explanation: "Keep POV consistent." },
        { prompt: "Imagery appeals to the", options: ["senses", "price", "font", "index"], correctIndex: 0, explanation: "Imagery appeals to the senses." },
        { prompt: "Each character in a scene should have a", options: ["distinct voice", "identical voice", "no voice", "single word"], correctIndex: 0, explanation: "Distinct voices keep characters distinct." },
        { prompt: "Revealing character through behaviour, speech and thought is", options: ["indirect characterisation", "direct characterisation", "pacing", "rhyme"], correctIndex: 0, explanation: "Indirect characterisation shows rather than tells." },
        { prompt: "Writing prose when a script is asked for is an", options: ["error", "requirement", "always correct", "good habit"], correctIndex: 0, explanation: "Drama needs script form." },
        { prompt: "A sonnet and free verse are examples of poetic", options: ["form", "price", "font", "index"], correctIndex: 0, explanation: "They are forms of poetry." },
        { prompt: "Both prose and drama need a central", options: ["problem/conflict", "price", "font", "index"], correctIndex: 0, explanation: "Both need a central problem." },
        { prompt: "Telling with abstract words in a poem is", options: ["weaker than concrete imagery", "the best method", "required", "a form of drama"], correctIndex: 0, explanation: "Concrete images beat abstract telling." },
        { prompt: "Line breaks in a poem control", options: ["emphasis", "price", "font", "page count"], correctIndex: 0, explanation: "Line breaks stress and pace." },
        { prompt: "The same idea can be written as a story, a poem or a", options: ["scene", "price", "font", "index"], correctIndex: 0, explanation: "One idea fits all three genres." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State what each genre — prose, poetry and drama — is built from.", answerKey: "Prose is built from sentences and paragraphs; poetry from lines and stanzas; drama from dialogue and stage directions. Award 1 mark each, +1 for accuracy (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which convention belongs to drama?", options: ["script form with dialogue and stage directions", "lines and stanzas", "a rhyme scheme", "an index"], correctIndex: 0, answerKey: "Script form with dialogue and stage directions. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give one key convention each for writing prose, poetry and drama.", answerKey: "Prose — build around a central conflict with a consistent point of view and characterisation; poetry — use concrete sensory imagery and figurative language in a chosen form; drama — use script form (dialogue and stage directions) around a central conflict with distinct voices. Award 1 mark per genre (max 3).", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why must a writer switch conventions when moving from a short story to a dramatic scene?", answerKey: "Because prose tells its story through narrated sentences and paragraphs with a point of view, while drama tells its story only through dialogue and stage directions performed on stage; the same content must be re-shaped into script form with distinct voices rather than narration. Award marks for the reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Take a single situation and write it in TWO of the three genres (a short prose passage, a short poem, or a short dramatic scene), applying the conventions of each genre correctly.", answerKey: "Award marks for: the first piece in correct genre conventions, 10 marks; the second piece in correct genre conventions, 10 marks; a clear central idea carried across both, 2 marks; expression, 2 marks. A piece that ignores its genre's conventions (e.g. prose narration submitted as a play) should not exceed 8 for that piece.", marks: 24 },
      ],
    },
  ],
};
