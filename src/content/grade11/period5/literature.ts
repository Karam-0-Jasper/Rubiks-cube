import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 11, Semester Two, Period V: African Drama and Poetry. The Grade 11
// Period V CONTENTS list has six top-level items, each rebuilt here as its own
// topic: (1) African drama (selected drama), (2) Drama is written in acts and
// scenes, (3) Drama consists of different characters, (4) Culture, values, norms
// and their significance, (5) Main issues and ideas running through the drama,
// (6) Composing drama. Literary concepts are sourced from LibreTexts (Humanities).
// The syllabus names set texts (Let Me Die Alone by John K. Kargbo; The Lion and
// the Jewel by Wole Soyinka; The Blood of a Stranger by Dele Charley). Set-text-
// specific facts are NOT invented — the general skills are taught and the set
// texts are flagged as the teaching targets.
export const literatureG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "African Drama and Poetry",
  summary:
    "Period V of the MoE Grade 11 Literature syllabus. Its six CONTENTS items are taught as six topics: analysing selected African drama; drama written in acts and scenes; the different characters in a drama; culture, values and norms and their significance; the main issues and ideas running through a drama; and composing drama.",
  topics: [
    {
      // source: LibreTexts (Humanities) — Elements of Drama (Writing and Critical Thinking Through Literature, Ringo and Kashyap) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama)
      slug: "analysing-african-drama",
      title: "African Drama: Analysing Selected Drama",
      objective:
        "By the end of the topic, learners should be able to analyse a work of African drama through its elements — exposition, characters, conflict, theme and stage directions — and support claims with reference to the text.",
      estimatedMinutes: 150,
      notes: `## African drama

- **African drama** is drama by African writers; the syllabus names works such as *Let Me Die Alone* (John K. Kargbo) and *The Lion and the Jewel* (Wole Soyinka).
- It is analysed with the same **elements of drama** as any play: **dialogue, action, stage directions, character, acts and scenes, conflict and theme**.

## Reading a play as a performance text

- A play is **written to be performed**, told through **dialogue and action**, with **no narrative paragraphs**.
- **Stage directions** carry entrances, exits, movement, scenery and mood — read them as part of the text.

## Analysing through the elements

- **Exposition** — how the play introduces its characters, setting and situation.
- **Conflict** — the central struggle (character vs character, self, or society).
- **Character** — the protagonist, antagonist and supporting figures, and their roles.
- **Theme** — the underlying idea, stated as a full idea and supported with evidence.

## Using evidence from a play

- Support a claim with **evidence from the text** — a line of dialogue or a stage direction — then explain how it proves the point (**point → evidence → explanation**).

## Set text (to be supplied by the teacher)

- Apply this method to the assigned African play: trace its exposition and conflict, name its characters and their roles, state a theme, and support each point with a line or stage direction.
- *(Specific characters, lines and events come from the set play itself, not invented here.)*

## Common errors and misconceptions

- **Reading a play like a novel** — meaning comes from dialogue and stage directions, not narrative paragraphs.
- **Making claims without evidence** — quote a line or cite a stage direction.
- **Retelling the plot** — examiners reward analysis of the elements, not a summary.
- **Stating a theme as one word** — a theme is a full idea about life.`,
      workedExample: `**Task.** Show how to analyse a claim about an African play using point → evidence → explanation.

**Claim (point):** The protagonist is trapped between personal desire and duty to the community.

**Step 1 — make the point.** State the analytical claim: she wants one thing for herself, but the community expects another, and this tension defines her.

**Step 2 — give the evidence.** Select a line of **dialogue** where she voices her wish, or a **stage direction** showing her hesitate before the community. *(In an exam you would quote the actual text.)*

**Step 3 — explain.** Show how the evidence proves the point: her words reveal a private longing while the stage direction shows her holding back before others — dramatising the conflict between **self and society**. Link this to a **theme**, e.g. *"tradition and individual desire pull against each other."*

**Add the elements.** Note where the play placed this in its **exposition** or **rising action**, and how the **stage directions** shape the mood.

**Conclusion:** analyse African drama by making a **point**, backing it with a **line or stage direction**, and **explaining** how the evidence proves it — then link character and conflict to the **theme**. Read the play as a **performance text**, never as a novel.`,
      quiz: [
        { prompt: "African drama is drama written by", options: ["African writers", "only poets", "only novelists", "non-Africans only"], correctIndex: 0, explanation: "African drama comes from African writers." },
        { prompt: "A play is written to be", options: ["performed", "read silently only", "sung", "printed only"], correctIndex: 0, explanation: "Plays are performance texts." },
        { prompt: "Meaning in a play comes from dialogue and", options: ["stage directions", "narration", "the index", "footnotes"], correctIndex: 0, explanation: "Dialogue and stage directions carry meaning." },
        { prompt: "A claim about a play must be backed by", options: ["evidence from the text", "the price", "the cover", "the page count"], correctIndex: 0, explanation: "Evidence supports every claim." },
        { prompt: "The analysis routine is point, evidence and", options: ["explanation", "opinion only", "summary", "translation"], correctIndex: 0, explanation: "Point → evidence → explanation." },
        { prompt: "The opening that introduces characters and situation is the", options: ["exposition", "climax", "resolution", "falling action"], correctIndex: 0, explanation: "Exposition introduces the play." },
        { prompt: "The central struggle of a play is the", options: ["conflict", "setting", "theme", "prop"], correctIndex: 0, explanation: "Conflict is the central struggle." },
        { prompt: "The main character is the", options: ["protagonist", "antagonist", "narrator", "editor"], correctIndex: 0, explanation: "The protagonist is the main character." },
        { prompt: "The opposing force is the", options: ["antagonist", "protagonist", "chorus", "author"], correctIndex: 0, explanation: "The antagonist opposes the protagonist." },
        { prompt: "A theme should be stated as", options: ["a full idea", "one word", "a page number", "a name"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "Stage directions carry entrances, exits, movement and", options: ["mood", "price", "font", "index"], correctIndex: 0, explanation: "Stage directions carry mood and action." },
        { prompt: "Reading a play like a novel is a mistake because a play has no", options: ["narrative paragraphs", "characters", "dialogue", "acts"], correctIndex: 0, explanation: "Plays lack narrative paragraphs." },
        { prompt: "A struggle between a character and their community is a form of", options: ["conflict (self vs society)", "resolution", "exposition", "prop"], correctIndex: 0, explanation: "It is a character-vs-society conflict." },
        { prompt: "Evidence in a play may be a line of dialogue or a", options: ["stage direction", "price tag", "map", "date stamp"], correctIndex: 0, explanation: "Cite dialogue or a stage direction." },
        { prompt: "A weak drama answer often", options: ["retells the plot", "quotes the text", "explains evidence", "names the theme"], correctIndex: 0, explanation: "Plot summary is not analysis." },
        { prompt: "The elements of drama include dialogue, action, character, theme and", options: ["conflict", "price", "font", "index"], correctIndex: 0, explanation: "Conflict is an element of drama." },
        { prompt: "Explanation shows how the evidence", options: ["proves the point", "raises the price", "sets the date", "names the printer"], correctIndex: 0, explanation: "Explanation links evidence to claim." },
        { prompt: "The underlying idea of a play is its", options: ["theme", "price", "cover", "font"], correctIndex: 0, explanation: "Theme is the underlying idea." },
        { prompt: "A play is told through dialogue and", options: ["action", "narration only", "rhyme only", "song only"], correctIndex: 0, explanation: "Dialogue and action tell the play." },
        { prompt: "Stage directions should be read", options: ["as part of the text", "never", "only by actors", "only at the end"], correctIndex: 0, explanation: "They carry meaning the dialogue does not." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the three-step routine for analysing a claim about a play with evidence.", answerKey: "Point (make an analytical claim) → evidence (quote a line of dialogue or cite a stage direction) → explanation (show how the evidence proves the point, linking to theme). Award marks for each step.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In a play, evidence for a claim takes the form of", options: ["a line of dialogue or a stage direction", "the ticket price", "the number of acts on the cover", "the printer's name"], correctIndex: 0, answerKey: "Dialogue or a stage direction. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why must a play be read as a performance text rather than as a novel?", answerKey: "Because a play has no narrative paragraphs describing feelings; its meaning is carried entirely by dialogue and stage directions, which must be imagined in performance. Award 2 for the point about no narration and 2 for dialogue/stage directions.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name four elements you would use to analyse an African play.", answerKey: "Any four of: exposition; conflict; character (protagonist/antagonist/roles); theme; dialogue; action; stage directions; acts and scenes. Award 1 mark each (max 4).", marks: 4 },
        { type: "ESSAY", prompt: "Analyse a work of African drama you have studied, discussing its exposition, central conflict, one main character and a theme, supporting each point with reference to the text.", answerKey: "Award marks for: exposition/how the play opens, 4 marks; central conflict, 6 marks; one main character (traits, role), 6 marks; a theme stated as an idea, 5 marks; textual reference (dialogue/stage direction), 3 marks. Plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Drama (Ringo and Kashyap) (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/08%3A_About_Drama/8.02%3A_Elements_of_Drama)
      slug: "drama-in-acts-and-scenes",
      title: "Drama Is Written in Acts and Scenes",
      objective:
        "By the end of the topic, learners should be able to explain how a play is structured into acts and scenes and how this structure organises the plot.",
      estimatedMinutes: 150,
      notes: `## Acts and scenes

- A play is divided into **acts and scenes** — the **units** that organise its action.
- An **act** is a **major division** of a play; a **scene** is a smaller unit within an act that fixes **one place and moment** of the action.
- A change of **scene** usually signals a change of **place or time**; a change of **act** marks a larger movement in the story.

## How the structure organises the plot

- The **acts** carry the plot's shape: early acts set up the situation and build the conflict; later acts bring the climax and resolution.
- A traditional **five-act** structure aligns with the plot stages: setup → rising action → climax → falling action → resolution. Many modern plays use **three acts** or fewer.

## Reading act and scene divisions

- A heading such as **"Act 2, Scene 1"** tells you where you are in the play's structure.
- Note **who enters and exits** at scene boundaries — entrances and exits are marked in the **stage directions**.

## Why the divisions matter

- The divisions control **pacing and focus**: each scene concentrates on one place, moment and set of characters.
- Tracking act and scene helps you **locate the climax** and follow the plot's development.

## Set text (to be supplied by the teacher)

- Map the acts and scenes of the assigned African play and show how the structure carries the plot from exposition to resolution.
- *(The specific act/scene content comes from the set play itself, not invented here.)*

## Common errors and misconceptions

- **Confusing an act with a scene** — an act contains scenes; a scene fixes one place and moment.
- **Ignoring scene boundaries** — a new scene usually means a new place or time.
- **Missing entrances and exits** — these are marked in stage directions at scene boundaries.
- **Assuming every play has five acts** — modern plays vary in the number of acts.`,
      workedExample: `**Task.** Explain how act and scene divisions organise a play, using a general model.

*A play in three acts: Act 1 introduces a village and a young woman promised in marriage; Act 2, across several scenes, builds the conflict as she resists; Act 3 brings the confrontation and its outcome.*

**Step 1 — identify the units.** The play has **three acts**; Act 2 has **several scenes**. Each act is a major division; each scene fixes one place and moment.

**Step 2 — link acts to the plot.**
- **Act 1** — **exposition**: the village and the promised marriage are set up.
- **Act 2** — **rising action** (across scenes): her resistance builds the conflict; each scene may shift place or time.
- **Act 3** — **climax and resolution**: the confrontation and its outcome.

**Step 3 — read the boundaries.** At each new scene, note the **stage directions** for who **enters and exits** and where the action now takes place.

**Step 4 — use the structure.** Tracking the acts helps you **locate the climax** (Act 3) and follow how the conflict develops scene by scene.

**Conclusion:** a play is built in **acts and scenes**; the acts carry the **plot's shape** and the scenes fix **place and moment**. Use the "Act X, Scene Y" headings and the stage directions at scene boundaries to follow the play's structure and find its climax.`,
      quiz: [
        { prompt: "A play is divided into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units." },
        { prompt: "A major division of a play is an", options: ["act", "scene", "stanza", "verse"], correctIndex: 0, explanation: "An act is a major division." },
        { prompt: "A smaller unit that fixes one place and moment is a", options: ["scene", "act", "chapter", "stanza"], correctIndex: 0, explanation: "A scene fixes place and moment." },
        { prompt: "An act contains", options: ["scenes", "stanzas", "chapters", "verses"], correctIndex: 0, explanation: "Acts are divided into scenes." },
        { prompt: "A change of scene usually signals a change of", options: ["place or time", "price", "font", "printer"], correctIndex: 0, explanation: "A new scene means a new place or time." },
        { prompt: "The acts carry the plot's", options: ["shape", "price", "font", "index"], correctIndex: 0, explanation: "Acts carry the plot's shape." },
        { prompt: "A traditional structure has", options: ["five acts", "twenty acts", "one scene only", "no divisions"], correctIndex: 0, explanation: "Five acts is the traditional structure." },
        { prompt: "'Act 2, Scene 1' is a", options: ["structural heading", "price", "printer", "index entry"], correctIndex: 0, explanation: "It locates you in the structure." },
        { prompt: "Entrances and exits are marked in the", options: ["stage directions", "price list", "index", "cover"], correctIndex: 0, explanation: "Stage directions mark entrances and exits." },
        { prompt: "The divisions control pacing and", options: ["focus", "price", "font", "printing"], correctIndex: 0, explanation: "Divisions control pacing and focus." },
        { prompt: "Confusing an act with a scene is a", options: ["structural error", "requirement", "good habit", "form of rhyme"], correctIndex: 0, explanation: "An act contains scenes." },
        { prompt: "Tracking acts helps you locate the", options: ["climax", "price", "printer", "index"], correctIndex: 0, explanation: "Structure helps find the climax." },
        { prompt: "Early acts usually", options: ["set up and build the conflict", "resolve everything", "list prices", "give an index"], correctIndex: 0, explanation: "Early acts set up and build." },
        { prompt: "Later acts usually bring the", options: ["climax and resolution", "price list", "cover", "index"], correctIndex: 0, explanation: "Later acts bring the climax and resolution." },
        { prompt: "Modern plays may use", options: ["three acts or fewer", "always five acts", "no acts ever", "one hundred acts"], correctIndex: 0, explanation: "Modern plays vary in act count." },
        { prompt: "A scene concentrates on one place, moment and set of", options: ["characters", "prices", "fonts", "pages"], correctIndex: 0, explanation: "A scene focuses on one situation." },
        { prompt: "Ignoring scene boundaries misses changes of", options: ["place or time", "price", "font", "printer"], correctIndex: 0, explanation: "Scene boundaries mark shifts." },
        { prompt: "Assuming every play has five acts is", options: ["an error", "always correct", "required", "a good habit"], correctIndex: 0, explanation: "Act counts vary." },
        { prompt: "The five-act structure aligns with the plot stages setup, rising action, climax, falling action and", options: ["resolution", "price", "index", "cover"], correctIndex: 0, explanation: "It matches the plot arc." },
        { prompt: "A change of act marks a", options: ["larger movement in the story", "new price", "new font", "new printer"], correctIndex: 0, explanation: "Acts mark larger movements." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between an act and a scene.", answerKey: "An act is a major division of a play that contains scenes; a scene is a smaller unit within an act that fixes one place and moment of the action. A new scene usually signals a change of place or time. Award 2 for the act and 2 for the scene.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A new scene in a play usually signals a change of", options: ["place or time", "ticket price", "printer", "cover"], correctIndex: 0, answerKey: "A change of place or time. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "How does the act structure of a play relate to the stages of the plot?", answerKey: "The acts carry the plot's shape: early acts provide exposition and build the conflict (rising action), and later acts bring the climax and resolution; a traditional five-act structure aligns with setup, rising action, climax, falling action and resolution. Award marks for the linkage.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why do the act and scene divisions matter to a reader?", answerKey: "They control pacing and focus (each scene concentrates on one place, moment and set of characters) and help the reader locate the climax and follow the plot's development; entrances and exits at scene boundaries are marked in the stage directions. Award marks for pacing/focus and locating the climax.", marks: 3 },
        { type: "ESSAY", prompt: "Using an African play you have studied, show how it is structured into acts and scenes and how that structure carries the plot from exposition to resolution.", answerKey: "Award marks for: the act/scene structure described, 6 marks; how the acts carry the plot stages, 8 marks; use of scene boundaries (place/time, entrances/exits), 6 marks; textual reference, 2 marks; expression, 2 marks. A plot summary that ignores structure should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Character (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "characters-in-a-drama",
      title: "Drama Consists of Different Characters",
      objective:
        "By the end of the topic, learners should be able to classify the characters of a play — protagonist, antagonist, flat/round, static/dynamic — and explain characterisation and their roles.",
      estimatedMinutes: 150,
      notes: `## Characters in a play

- A **character** is a person (or sometimes an animal) who **participates in the action** of the story.
- A play consists of **different characters** with different **roles** and different **degrees of development**.

## Character roles

- **Protagonist** — the **main character** the play centres on.
- **Antagonist** — the **adversary** set against the protagonist, creating the conflict.
- **Supporting characters** — figures who help, oppose or contrast the main characters (including a **foil**, who highlights another by contrast).

## Flat and round; static and dynamic

- **Flat characters** have only **one or two traits** and little description; they often play smaller roles.
- **Round characters** are **complex and well developed**.
- **Static** characters **stay the same**; **dynamic** characters **change** over the course of the play.

## Characterisation

- **Characterisation** is how characters are developed and revealed. In drama, character is shown through:
1. **What the character says** (dialogue).
2. **What the character does** (action).
3. **What other characters say** about them.
4. **Stage directions** (appearance, manner, movement).
5. **Soliloquy** — a speech alone on stage revealing inner thoughts.

## Analysing a character

Use **trait → evidence → method → role**: name a trait, give the evidence (a line or action), state the method of characterisation, and identify the character's role — then link to the play's theme.

## Set text (to be supplied by the teacher)

- Classify the characters of the assigned African play, analyse one using trait–evidence–method, and identify their role.
- *(Specific characters, lines and actions come from the set play itself, not invented here.)*

## Common errors and misconceptions

- **Confusing a trait with a role** — a trait is a quality; a role is a function.
- **Mixing up flat/round with static/dynamic** — depth versus change.
- **Naming a trait with no evidence** — always give the line or action.
- **Retelling the plot** — analyse the character, do not summarise the story.`,
      workedExample: `**Task.** Classify and analyse a character using trait → evidence → method → role, with a general model.

**Model character:** a strong-willed young woman who defies a custom (protagonist of an African play).

**Step 1 — classify.** She is the **protagonist** (the play centres on her); she is a **round** character (complex, developed) and **dynamic** (she changes as she resists). A rigid elder who never bends would be **flat** and **static**, and could act as her **antagonist** or **foil**.

**Step 2 — trait.** A trait: **courage / defiance**.

**Step 3 — evidence.** Where she speaks against the custom, or acts against the community's expectation. *(In an exam you would quote the actual line or action.)*

**Step 4 — method.** This is characterisation through **what she says** (dialogue) and **what she does** (action); a **soliloquy**, if the play has one, would reveal her inner resolve.

**Step 5 — role and theme.** Her role as **protagonist** and her trait of defiance carry the play's **theme**, e.g. *"the individual's will can challenge an unjust custom."*

**Conclusion:** classify each character by **role** (protagonist/antagonist/foil) and by **depth and change** (flat/round, static/dynamic); analyse one with **trait → evidence → method → role**, and link the character to the **theme**. Never confuse a trait (quality) with a role (function).`,
      quiz: [
        { prompt: "A character is a person who", options: ["participates in the action", "prints the play", "sells tickets", "sets the price"], correctIndex: 0, explanation: "A character takes part in the story." },
        { prompt: "The main character the play centres on is the", options: ["protagonist", "antagonist", "foil", "narrator"], correctIndex: 0, explanation: "The protagonist is central." },
        { prompt: "The adversary set against the protagonist is the", options: ["antagonist", "protagonist", "foil", "chorus"], correctIndex: 0, explanation: "The antagonist creates conflict." },
        { prompt: "A character who highlights another by contrast is a", options: ["foil", "protagonist", "narrator", "prop"], correctIndex: 0, explanation: "A foil defines another by contrast." },
        { prompt: "A character with only one or two traits is", options: ["flat", "round", "dynamic", "the hero"], correctIndex: 0, explanation: "Flat characters are simple." },
        { prompt: "A complex, well-developed character is", options: ["round", "flat", "static", "minor"], correctIndex: 0, explanation: "Round characters have depth." },
        { prompt: "A character who stays the same is", options: ["static", "dynamic", "round", "the hero"], correctIndex: 0, explanation: "Static characters do not change." },
        { prompt: "A character who changes over the play is", options: ["dynamic", "static", "flat", "minor"], correctIndex: 0, explanation: "Dynamic characters change." },
        { prompt: "How characters are developed and revealed is", options: ["characterisation", "pacing", "rhyme", "metre"], correctIndex: 0, explanation: "Characterisation reveals characters." },
        { prompt: "A speech alone on stage revealing inner thoughts is a", options: ["soliloquy", "dialogue", "prologue", "prop"], correctIndex: 0, explanation: "A soliloquy is delivered alone." },
        { prompt: "Judging a character by what OTHERS say is", options: ["a method of characterisation", "a stage direction", "an interval", "a prop"], correctIndex: 0, explanation: "Others' comments reveal character." },
        { prompt: "A trait is a quality; a role is a", options: ["function", "colour", "price", "scene number"], correctIndex: 0, explanation: "Trait = quality; role = function." },
        { prompt: "Flat vs round describes a character's", options: ["depth", "change", "cost", "costume"], correctIndex: 0, explanation: "Flat/round is depth." },
        { prompt: "Static vs dynamic describes whether a character", options: ["changes", "speaks", "exits", "is major"], correctIndex: 0, explanation: "Static/dynamic is change." },
        { prompt: "Naming a trait requires you also to give", options: ["evidence", "a page count", "the price", "the author's age"], correctIndex: 0, explanation: "Always give the line or action." },
        { prompt: "Characterisation methods include what a character says and", options: ["does", "eats", "wears only", "is paid"], correctIndex: 0, explanation: "Speech and action reveal character." },
        { prompt: "The routine trait–evidence–method ends by identifying the character's", options: ["role", "price", "font", "index"], correctIndex: 0, explanation: "Identify the role, then link to theme." },
        { prompt: "Confusing a trait and a role means confusing a quality with a", options: ["function", "colour", "price", "scene number"], correctIndex: 0, explanation: "Trait = quality; role = function." },
        { prompt: "A character's traits and role carry the play's", options: ["theme", "price", "printer", "cover"], correctIndex: 0, explanation: "Character carries theme." },
        { prompt: "Stage directions can reveal a character's", options: ["appearance and manner", "price", "font", "page count"], correctIndex: 0, explanation: "Stage directions show appearance and manner." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the character roles and the two pairs describing development and change.", answerKey: "Roles: protagonist (main character), antagonist (adversary), foil/supporting characters. Development: flat (one or two traits) vs round (complex). Change: static (stays the same) vs dynamic (changes). Award marks for the roles and both pairs.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "A character who defines another through contrast is a", options: ["foil", "protagonist", "narrator", "prop"], correctIndex: 0, answerKey: "A foil. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the methods of characterisation used in drama.", answerKey: "What the character says (dialogue); what the character does (action); what other characters say about them; stage directions (appearance, manner, movement); soliloquy (inner thoughts spoken alone). Award 1 mark each (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a flat/round character and a static/dynamic character.", answerKey: "Flat vs round concerns depth: flat characters have one or two traits, round characters are complex and developed. Static vs dynamic concerns change: static characters stay the same, dynamic characters change over the play. Award 2 for each distinction.", marks: 4 },
        { type: "ESSAY", prompt: "Choosing an African play you have studied, classify its main characters by role and development, then analyse one character using trait–evidence–method and link them to the play's theme.", answerKey: "Award marks for: characters classified by role and development, 6 marks; one character analysed by trait + evidence + method, 8 marks; the character's role and link to theme, 6 marks; textual evidence, 2 marks; expression, 2 marks. Plot summary without analysis should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Setting/Theme (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "culture-values-and-norms",
      title: "Culture, Values, Norms and Their Significance",
      objective:
        "By the end of the topic, learners should be able to identify the culture, values and norms shown in an African play and explain their significance to the society and the drama.",
      estimatedMinutes: 150,
      notes: `## Culture, values and norms

- A play's **setting** carries a **cultural background** — the beliefs, customs and social order of the world it shows.
- **Values** are what a society holds **important** (respect for elders, family, land, honour); **norms** are the **accepted rules of behaviour** that express those values.
- African drama often dramatises the tension between **tradition and change**, and the place of custom in community life.

## Values versus norms

| Values (what is prized) | Norms (accepted rules of behaviour) |
| --- | --- |
| Respect for elders | Younger people defer to and greet elders |
| Family and community | Individuals put the group's needs first |
| Tradition | Customs and rituals are observed |

## Significance to society

- Values and norms **hold a society together** and guide how people act.
- In a play, they shape the **conflict** — a character who breaks a norm or challenges a value creates dramatic tension.
- Their **significance** is what they reveal about the society and what the play says about them.

## Reading culture in a play

1. Identify a **value or norm** shown in the dialogue or action.
2. Ask how the play **presents** it — upheld, questioned or broken.
3. Trace its **significance** — how it shapes the characters' choices and the conflict.
4. Note the play's **attitude** — does it celebrate, question or criticise the value?

## Set text (to be supplied by the teacher)

- Identify the culture, values and norms in the assigned African play and explain their significance to the society and the drama.
- *(Specific customs, values and events come from the set play itself, not invented here.)*

## Common errors and misconceptions

- **Confusing a value with a norm** — a value is what is prized; a norm is the rule of behaviour that expresses it.
- **Ignoring significance** — the point is what the value reveals and does, not just naming it.
- **Assuming the play endorses every value** — a play may question or criticise a custom.
- **Treating culture as background decoration** — culture often drives the conflict.`,
      workedExample: `**Task.** Analyse a value, its norm and their significance in a play, using a general model.

*In a village, respect for elders is a deep value; the norm is that a young woman accepts the marriage her elders arrange. The protagonist breaks this norm, and the community reacts strongly.*

**Step 1 — value.** The society prizes **respect for elders and the authority of tradition** — a **value**.

**Step 2 — norm.** The **norm** expressing it is that **a young woman accepts an arranged marriage**; obeying elders is the accepted rule of behaviour.

**Step 3 — significance.** The value and norm **hold the community together** and guide behaviour. When the protagonist **breaks the norm**, she creates the play's **conflict**; the community's strong reaction shows how central the value is.

**Step 4 — the play's attitude.** Ask whether the play **celebrates** the tradition, **questions** it, or **criticises** it. Its treatment of the protagonist's fate reveals the attitude.

**Step 5 — significance to society and drama.** The custom's significance is both **social** (it orders the community) and **dramatic** (breaking it drives the plot and theme, e.g. *"tradition and individual freedom pull against each other."*)

**Conclusion:** distinguish a **value** (what is prized) from a **norm** (the accepted rule that expresses it), trace their **significance** to society and to the conflict, and read the play's **attitude** toward them.`,
      quiz: [
        { prompt: "What a society holds important is its", options: ["values", "norms", "props", "prices"], correctIndex: 0, explanation: "Values are what a society prizes." },
        { prompt: "The accepted rules of behaviour that express values are", options: ["norms", "values", "prices", "fonts"], correctIndex: 0, explanation: "Norms are accepted rules of behaviour." },
        { prompt: "A play's setting carries a", options: ["cultural background", "price", "font", "index"], correctIndex: 0, explanation: "Setting carries cultural background." },
        { prompt: "Values and norms help to", options: ["hold a society together", "raise the price", "choose the font", "number the pages"], correctIndex: 0, explanation: "They hold society together and guide behaviour." },
        { prompt: "A character who breaks a norm creates", options: ["dramatic tension", "a price rise", "a new font", "an index"], correctIndex: 0, explanation: "Breaking a norm creates conflict." },
        { prompt: "Respect for elders is an example of a", options: ["value", "norm only", "price", "prop"], correctIndex: 0, explanation: "It is a value a society prizes." },
        { prompt: "Younger people deferring to elders is an example of a", options: ["norm", "value only", "price", "font"], correctIndex: 0, explanation: "A norm is the rule of behaviour." },
        { prompt: "The significance of a value is what it reveals and", options: ["does", "costs", "prints", "weighs"], correctIndex: 0, explanation: "Significance is what it reveals and does." },
        { prompt: "African drama often dramatises the tension between tradition and", options: ["change", "price", "font", "printing"], correctIndex: 0, explanation: "Tradition versus change is common." },
        { prompt: "A play may present a value as upheld, questioned or", options: ["broken", "priced", "printed", "numbered"], correctIndex: 0, explanation: "Read how the play presents it." },
        { prompt: "Confusing a value with a norm confuses what is prized with the", options: ["rule of behaviour", "price", "font", "cover"], correctIndex: 0, explanation: "A value is prized; a norm is the rule." },
        { prompt: "Assuming a play endorses every value it shows is an", options: ["error", "requirement", "always correct", "good habit"], correctIndex: 0, explanation: "A play may question or criticise." },
        { prompt: "Culture in a play often drives the", options: ["conflict", "price", "font", "index"], correctIndex: 0, explanation: "Culture drives the conflict." },
        { prompt: "The point of analysing a value is its", options: ["significance", "price", "printer", "cover"], correctIndex: 0, explanation: "Significance carries the meaning." },
        { prompt: "Treating culture as mere decoration is a", options: ["reading error", "requirement", "good habit", "summary"], correctIndex: 0, explanation: "Culture often drives the conflict." },
        { prompt: "The community's strong reaction to a broken norm shows how central the", options: ["value is", "price is", "font is", "index is"], correctIndex: 0, explanation: "Reaction reveals the value's centrality." },
        { prompt: "Norms guide how people", options: ["act", "print", "price", "count"], correctIndex: 0, explanation: "Norms guide behaviour." },
        { prompt: "The significance of a custom can be both social and", options: ["dramatic", "priced", "printed", "numbered"], correctIndex: 0, explanation: "It orders society and drives the plot." },
        { prompt: "Reading the play's attitude means asking whether it celebrates, questions or", options: ["criticises the value", "prices the value", "prints the value", "numbers the value"], correctIndex: 0, explanation: "The play may celebrate, question or criticise." },
        { prompt: "Family and community loyalty is an example of a", options: ["value", "price", "font", "index"], correctIndex: 0, explanation: "It is a value a society prizes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish a value from a norm, with an example of each.", answerKey: "A value is what a society holds important (e.g. respect for elders); a norm is the accepted rule of behaviour that expresses it (e.g. younger people deferring to and greeting elders). Award 2 for the distinction and 1 per example (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a play, a character who breaks a social norm most often creates", options: ["dramatic conflict", "a price rise", "a new act", "an index"], correctIndex: 0, answerKey: "Dramatic conflict. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the significance of values and norms to a society as shown in a play.", answerKey: "Values and norms hold a society together and guide how people act; in a play they shape the conflict, since challenging or breaking them creates dramatic tension, and their significance is what they reveal about the society and what the play says about them. Award marks for the social and dramatic significance.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give the steps for reading a cultural value or norm in a play.", answerKey: "Identify a value or norm shown; ask how the play presents it (upheld, questioned or broken); trace its significance (how it shapes choices and the conflict); note the play's attitude (celebrate, question or criticise). Award marks for the steps.", marks: 3 },
        { type: "ESSAY", prompt: "Using an African play you have studied, identify its main culture, values and norms and discuss their significance to the society shown and to the drama, noting the play's attitude toward them.", answerKey: "Award marks for: culture, values and norms identified, 6 marks; significance to society (holding it together, guiding behaviour), 6 marks; significance to the drama (driving conflict), 6 marks; the play's attitude, 4 marks; expression, 2 marks. Merely naming customs with no significance should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Elements of Fiction: Theme (Literature for the Humanities, Lumen) (https://human.libretexts.org/Courses/Lumen_Learning/Book%3A_Literature_for_the_Humanities_(Lumen)/04%3A_Module_2%3A_Responding_to_Fiction/04.4%3A_Elements_of_Fiction)
      slug: "main-issues-and-ideas",
      title: "Main Issues and Ideas Running Through the Drama",
      objective:
        "By the end of the topic, learners should be able to identify the main issues and themes that run through a play and trace how they develop across its acts and scenes.",
      estimatedMinutes: 150,
      notes: `## Issues and themes in a play

- The **main issues and ideas** running through a play are its **themes** — the **underlying ideas** it explores, stated as full ideas about life, not one-word topics.
- A play may run **several themes** at once, developed across its **acts and scenes**.

## Distinguishing issue, topic and theme

- An **issue** is a **problem or concern** the play raises (e.g. arranged marriage, corruption, the clash of old and new).
- A **topic** is a one-word subject (e.g. love, power).
- A **theme** states the play's **idea about** that issue or topic (e.g. *"the pursuit of power can corrupt those who gain it"*).

## How a theme "runs through" a play

- A theme is not stated once; it **recurs** — in different characters, scenes and conflicts.
- Trace a theme by noticing **where it appears** across the acts: which characters embody it, which scenes develop it, how the ending comments on it.

## Finding the main ideas

1. Ask what **problems or concerns** the play keeps returning to (the issues).
2. State each as a **full idea** (the theme).
3. **Support** each with lines, actions or stage directions from more than one point in the play.
4. See how the **ending** resolves or comments on the idea.

## Set text (to be supplied by the teacher)

- Identify the main issues and themes of the assigned African play and trace how each develops across the acts and scenes.
- *(Which issues appear and how they develop come from the set play itself, not invented here.)*

## Common errors and misconceptions

- **Confusing an issue with a theme** — an issue is a concern; a theme is the idea about it.
- **Stating a theme as one word** — a theme is a full idea.
- **Naming a theme from one scene only** — a running theme recurs across the play.
- **Ignoring how the ending comments on the theme** — the resolution shapes the meaning.`,
      workedExample: `**Task.** Identify a running theme and trace it across a play, using a general model.

*Across a three-act play, an ambitious man rises to power by betraying allies; each act shows another betrayal; the final act brings his downfall.*

**Step 1 — issue.** The play keeps returning to the **issue** of **ambition and betrayal** — a concern raised again and again.

**Step 2 — theme.** State it as a **full idea**: *"unchecked ambition corrupts and finally destroys the one who holds it."*

**Step 3 — trace it across the acts.**
- **Act 1** introduces his ambition and first betrayal.
- **Act 2** deepens it with a second betrayal, showing the pattern.
- **Act 3** brings his **downfall**, so the ending **comments** on the theme — ambition destroys him.

**Step 4 — support it.** Cite a line or action from **each act** where the theme appears, not just one. *(In an exam you would quote the actual text.)*

**Step 5 — note multiple themes.** The same play may also run themes of **loyalty** and **power**; identify each as a full idea.

**Conclusion:** the main issues and ideas of a play are its **themes** — full ideas that **recur across the acts**. Distinguish the **issue** (the concern) from the **theme** (the idea about it), trace the theme through the play, and let the **ending** shape its meaning.`,
      quiz: [
        { prompt: "The main ideas running through a play are its", options: ["themes", "prices", "fonts", "acts only"], correctIndex: 0, explanation: "The main running ideas are themes." },
        { prompt: "A theme is stated as", options: ["a full idea about life", "one word", "a page number", "a name"], correctIndex: 0, explanation: "A theme is a complete idea." },
        { prompt: "A problem or concern the play raises is an", options: ["issue", "index", "act", "prop"], correctIndex: 0, explanation: "An issue is a concern the play raises." },
        { prompt: "A one-word subject like 'power' is a", options: ["topic", "theme", "issue", "climax"], correctIndex: 0, explanation: "A one-word subject is a topic." },
        { prompt: "A theme states the play's idea about an issue or", options: ["topic", "price", "font", "index"], correctIndex: 0, explanation: "A theme is the idea about the topic." },
        { prompt: "A running theme is not stated once but", options: ["recurs across the play", "printed once", "priced once", "numbered once"], correctIndex: 0, explanation: "A theme recurs." },
        { prompt: "To trace a theme, notice where it appears across the", options: ["acts", "prices", "fonts", "covers"], correctIndex: 0, explanation: "Trace a theme across the acts." },
        { prompt: "A play may run", options: ["several themes at once", "no theme", "only a title", "only a price"], correctIndex: 0, explanation: "Plays hold multiple themes." },
        { prompt: "Confusing an issue with a theme confuses a concern with the", options: ["idea about it", "price", "font", "cover"], correctIndex: 0, explanation: "An issue is a concern; a theme is the idea." },
        { prompt: "Support a theme with evidence from", options: ["more than one point in the play", "the price", "the cover", "the index"], correctIndex: 0, explanation: "A running theme needs evidence across the play." },
        { prompt: "The ending of a play often", options: ["comments on the theme", "sets the price", "chooses the font", "numbers the pages"], correctIndex: 0, explanation: "The resolution shapes the theme's meaning." },
        { prompt: "Naming a theme from one scene only is a", options: ["weakness", "strength", "requirement", "summary"], correctIndex: 0, explanation: "A running theme recurs across the play." },
        { prompt: "'Ambition corrupts the one who holds it' is stated as a", options: ["full theme", "one-word topic", "price", "act number"], correctIndex: 0, explanation: "It is a full idea." },
        { prompt: "Arranged marriage or corruption in a play are", options: ["issues", "prices", "fonts", "indexes"], correctIndex: 0, explanation: "These are issues the play raises." },
        { prompt: "A theme may appear in different characters, scenes and", options: ["conflicts", "prices", "fonts", "covers"], correctIndex: 0, explanation: "A theme recurs through the play's parts." },
        { prompt: "The first step in finding the main ideas is to ask what the play keeps", options: ["returning to", "printing", "pricing", "numbering"], correctIndex: 0, explanation: "Look for the recurring concerns." },
        { prompt: "A theme is best expressed as a", options: ["sentence about life", "single noun", "number", "date"], correctIndex: 0, explanation: "State a theme as a full sentence." },
        { prompt: "Ignoring how the ending comments on a theme is an", options: ["error", "requirement", "always correct", "good habit"], correctIndex: 0, explanation: "The resolution shapes the meaning." },
        { prompt: "An issue differs from a theme because an issue is a", options: ["concern, not yet an idea about it", "full idea", "price", "font"], correctIndex: 0, explanation: "An issue is a concern; a theme is the idea." },
        { prompt: "To show a theme runs through a play, cite evidence from", options: ["different acts", "one line only", "the price", "the cover"], correctIndex: 0, explanation: "Evidence across acts shows the theme runs through." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish an issue, a topic and a theme in a play, with an example of each.", answerKey: "An issue is a problem or concern the play raises (e.g. arranged marriage); a topic is a one-word subject (e.g. power); a theme states the play's idea about it (e.g. 'the pursuit of power can corrupt'). Award marks for each distinguished with an example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A 'running' theme in a play is one that", options: ["recurs across characters, scenes and conflicts", "appears in one scene only", "is stated in one word", "gives the price"], correctIndex: 0, answerKey: "It recurs across the play. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "How do you trace a theme across a play?", answerKey: "Notice where the theme appears across the acts — which characters embody it, which scenes develop it — and support it with evidence from more than one point; then see how the ending resolves or comments on it. Award marks for tracing across acts and using the ending.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why must a theme be supported with evidence from more than one point in the play?", answerKey: "Because a genuine running theme recurs throughout the play; evidence from several acts or scenes shows it truly runs through the work, whereas evidence from a single scene may reflect only a passing moment, not a main idea. Award marks for the reasoning.", marks: 3 },
        { type: "ESSAY", prompt: "Choosing an African play you have studied, identify at least two main issues or themes, state each as a full idea, and trace how each develops across the acts, supporting your answer with textual evidence.", answerKey: "Award marks for: at least two themes stated as full ideas (not topics), 8 marks; each traced across the acts/scenes, 8 marks; textual evidence from more than one point, 6 marks; expression, 2 marks. One-word topics or single-scene claims should not exceed 8.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Playwriting (Garcia) (https://human.libretexts.org/Bookshelves/Theater_Film_and_Storytelling/Playwriting_(Garcia)/01%3A_Chapters/1.01%3A_Playwriting)
      slug: "composing-drama",
      title: "Composing Drama",
      objective:
        "By the end of the topic, learners should be able to compose a short dramatic scene using dialogue, action, a central conflict and stage directions, drawing on African settings and themes.",
      estimatedMinutes: 150,
      notes: `## What composing a play involves

- A **play is a story told through dialogue and action** — not through narrative description.
- A play **poses a difficult problem** the characters try to solve; this **central conflict** drives it forward, and the main character is often **transformed** by the end.

## The playwright's job

- The playwright is a **world builder**, responsible for the **world, the characters and the conflict**, and for **building tension** so the story captivates the audience.
- Composing African drama, a writer may draw on **familiar settings, values and themes** (family, tradition and change, community) to root the play in a recognisable world.

## The tools you write with

- **Dialogue** — the words characters speak; it drives the plot, develops relationships and reveals inner emotions. Give each character a **distinctive rhythm and vocabulary**.
- **Action** — the physical movements of the characters.
- **Stage directions** — instructions for movement, location, scenery, sounds, props and pauses; usually **italicised and separate** from the dialogue.
- **Acts and scenes** — the units into which the play is divided.

## Structuring the play

- **Introduce** the world, the main characters and a normal situation; then introduce the **conflict**.
- Build the conflict through **rising tension** to a **climax**, then a **resolution**.

## A checklist for a scene

1. **Who** is in it and **where/when** (setting, in a stage direction)?
2. What **problem or tension** does the scene turn on?
3. Write the **dialogue** so each character sounds distinct and the tension builds.
4. Add **stage directions** for entrances, exits, movement and key actions.

## Set text as a model (to be supplied by the teacher)

- Use a studied African play as a **model** of dramatic form; compose your own scene applying the same tools, drawing on a setting and theme you know.
- *(Your scene is your own creation; do not copy the set play's specific plot or characters.)*

## Common errors and misconceptions

- **Writing narrative prose instead of a script** — a play uses **dialogue, action and stage directions**.
- **Flat, identical dialogue** — give each character a **distinct voice**.
- **No central problem** — a play needs a **conflict**.
- **Forgetting stage directions** — they tell the actors and reader what happens on stage.`,
      workedExample: `**Task.** Plan and draft the opening of a short dramatic scene set in a familiar world.

**Step 1 — plan.**
- **Characters:** MAMA YEI (a firm grandmother) and ADAMA (her granddaughter, hopeful and stubborn).
- **Setting (stage direction):** a compound at dusk, a cooking fire burning low.
- **Central problem:** Adama wants to leave the village for school in the city; Mama Yei fears losing her to a world she distrusts. That tension drives the scene.

**Step 2 — draft (script form).**

*A compound at dusk. A cooking fire burns low. MAMA YEI sits on a stool, shelling groundnuts. ADAMA stands at the edge of the firelight, a small bag over her shoulder.*

**ADAMA:** The lorry comes at first light, Mama. I have to be on it.

*MAMA YEI does not look up from the groundnuts.*

**MAMA YEI:** The lorry has come every morning for forty years. It can come again without you.

**ADAMA:** *(stepping into the firelight)* And I can wait forty years and become you — or I can go now and become myself.

*MAMA YEI's hands go still.*

**Step 3 — check against the checklist.**
- **Dialogue** drives the scene; the two voices are **distinct** (Mama Yei firm and proverbial, Adama urgent and direct).
- **Stage directions** (in italics) give the setting, the low fire and a telling action (her hands going still).
- A clear **central problem** (leaving for the city) creates the tension.
- The scene builds toward a small **turning point**.

**Conclusion:** compose drama by telling the story through **dialogue and action**, built around a **central problem**, with **stage directions** for what happens on stage — drawing on a **familiar setting and theme**, and giving each character a **distinct voice**.`,
      quiz: [
        { prompt: "A play is a story told through", options: ["dialogue and action", "description only", "rhyme only", "narration only"], correctIndex: 0, explanation: "Plays communicate through dialogue and action." },
        { prompt: "A play poses a difficult problem the characters try to", options: ["solve", "ignore", "print", "sell"], correctIndex: 0, explanation: "The central conflict drives the play." },
        { prompt: "The playwright is described as a", options: ["world builder", "ticket seller", "printer", "stagehand only"], correctIndex: 0, explanation: "The playwright builds world, characters and conflict." },
        { prompt: "The words characters speak are the", options: ["dialogue", "stage directions", "props", "programme"], correctIndex: 0, explanation: "Dialogue is the spoken words." },
        { prompt: "Instructions for movement, scenery and props are", options: ["stage directions", "dialogue", "themes", "climaxes"], correctIndex: 0, explanation: "Stage directions give the mechanics." },
        { prompt: "Stage directions are usually", options: ["italicised and separate from dialogue", "sung", "hidden", "spoken by the audience"], correctIndex: 0, explanation: "They are set apart from dialogue." },
        { prompt: "Each character's dialogue should have a", options: ["distinctive rhythm and vocabulary", "identical voice", "no words", "single word"], correctIndex: 0, explanation: "Distinct voices keep characters distinct." },
        { prompt: "A play is divided into", options: ["acts and scenes", "chapters and verses", "stanzas", "articles"], correctIndex: 0, explanation: "Acts and scenes are the units." },
        { prompt: "The opening usually introduces the world, characters and a", options: ["normal situation before conflict", "list of prices", "map", "recipe"], correctIndex: 0, explanation: "Set up the normal world, then the conflict." },
        { prompt: "A play needs, above all, a central", options: ["conflict", "song", "map", "price list"], correctIndex: 0, explanation: "A play turns on a problem to be solved." },
        { prompt: "Writing narrative prose instead of a script is wrong because a play uses", options: ["dialogue, action and stage directions", "only description", "only footnotes", "only rhyme"], correctIndex: 0, explanation: "A play is a script, not prose narration." },
        { prompt: "Dialogue can reveal a character's", options: ["inner emotions", "ticket price", "printer", "seat number"], correctIndex: 0, explanation: "Dialogue reveals emotion." },
        { prompt: "The plot shape to build a play is exposition, rising tension, climax and", options: ["resolution", "index", "glossary", "appendix"], correctIndex: 0, explanation: "The arc ends in resolution." },
        { prompt: "By the end, the main character is often", options: ["transformed", "unchanged always", "removed", "renamed"], correctIndex: 0, explanation: "The main character is typically transformed." },
        { prompt: "The physical movements of the characters are the", options: ["action", "dialogue", "theme", "props"], correctIndex: 0, explanation: "Action is physical movement." },
        { prompt: "Composing African drama, a writer may draw on familiar", options: ["settings, values and themes", "prices", "fonts", "printers"], correctIndex: 0, explanation: "Familiar settings root the play." },
        { prompt: "A scene checklist should establish who, where/when and the", options: ["problem or tension", "ticket price", "printer", "cover art"], correctIndex: 0, explanation: "Identify the tension the scene turns on." },
        { prompt: "Stage directions include entrances, exits, movement and", options: ["key actions", "ticket prices", "the author's age", "the index"], correctIndex: 0, explanation: "They cover what happens on stage." },
        { prompt: "Flat, identical dialogue is a fault because characters should", options: ["sound distinct", "sound the same", "not speak", "only whisper"], correctIndex: 0, explanation: "Each character needs a distinct voice." },
        { prompt: "A studied play can serve as a", options: ["model of dramatic form", "price list", "map", "index"], correctIndex: 0, explanation: "Use it as a model, not to copy." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the two mediums through which a play tells its story and the role of stage directions.", answerKey: "A play tells its story through dialogue (the words characters speak) and action (their physical movements). Stage directions are instructions for what happens on stage — movement, location, scenery, sounds, props, pauses — usually italicised and separate from the dialogue. Award 2 for the two mediums and 2 for stage directions.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "What must a composed play be built around?", options: ["a central conflict the characters try to solve", "a list of prices", "a single rhyme", "a map of the theatre"], correctIndex: 0, answerKey: "A central conflict. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the four things a scene checklist should establish before writing dialogue.", answerKey: "Who is in the scene (characters); where and when (setting, in a stage direction); the problem or tension the scene turns on; how the tension builds. Award marks for the items (max 4).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How can drawing on a familiar setting and theme help when composing African drama?", answerKey: "Familiar settings, values and themes (family, tradition and change, community) root the play in a recognisable world, making the characters and conflict believable and allowing the writer to explore issues they know well. Award marks for the reasoning.", marks: 4 },
        { type: "ESSAY", prompt: "Compose a short dramatic scene (about 12–16 lines) between two characters built around a clear conflict, using correct script form with dialogue and stage directions, giving each character a distinct voice and drawing on a setting and theme you know.", answerKey: "Award marks for: correct script form (character names, dialogue, italicised stage directions), 6 marks; a clear central conflict, 6 marks; two distinct character voices, 6 marks; stage directions for setting/movement, 4 marks; coherence and rising tension, 2 marks. A narrative-prose answer (not a script) should not exceed 8.", marks: 24 },
      ],
    },
  ],
};
