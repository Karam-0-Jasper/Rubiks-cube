import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester Two, Period IV: African Prose.
export const literatureG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "African Prose",
  summary:
    "Period IV of the MoE Grade 10 Literature syllabus. Learners study African prose — the novel and the short story — its features and major writers, and apply the elements of prose fiction (plot, character, setting and theme) to study an African novel.",
  topics: [
    {
      slug: "nature-of-african-prose",
      title: "The Nature and Features of African Prose",
      objective:
        "By the end of the topic, learners should be able to define prose and distinguish its forms, describe the features of African prose, and name major African prose writers and their works.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Prose** = the ordinary flowing language of sentences and paragraphs; most novels and short stories are prose.
- **African prose** — Africans telling their own stories, in their own settings and voice.
- **This topic:** what prose is and its forms; the features that make African prose distinctive; its great writers, above all Chinua Achebe, whose *Things Fall Apart* is the most famous African novel.

## What is prose?

**Prose** is ordinary written or spoken language — sentences and paragraphs — **without the regular rhythm and line pattern of poetry**. Most storytelling is written in prose.

Prose can be:

- **Fiction** — imagined stories: the **novel** (a long fictional story), the **novella** (shorter), and the **short story**.
- **Non-fiction** — factual writing: biography, autobiography, essays, articles.

**African prose** is prose written by African authors, usually rooted in African life, history and society.

## Features of African prose

African prose often shows these distinctive features:

- **African settings and life** — village and city life, family, farming, custom and community.
- **Use of proverbs, folktales and oral tradition** woven into the storytelling (as in African drama).
- **Themes from African experience** — the clash of **tradition and modernity**, **colonialism and its effects**, corruption, culture and identity, the role of women.
- **Local expressions and rhythms of speech**, and sometimes words from African languages.
- A strong sense of **community**, not just the individual.

## Major African prose writers

- **Chinua Achebe** (Nigeria) — his novel ***Things Fall Apart*** (1958) is the most famous African novel, telling of the Igbo world and the coming of colonialism through the character Okonkwo.
- **Ngũgĩ wa Thiong'o** (Kenya) — *Weep Not, Child*, on colonial Kenya.
- **Buchi Emecheta** (Nigeria) — novels on the lives of women.
- **Camara Laye** (Guinea) — *The African Child (L'Enfant noir)*.
- **Bessie Head** (Southern Africa) and many others.

## The forms of African prose fiction

- **The novel** — a long story with a developed plot, several characters and one or more themes (e.g. *Things Fall Apart*).
- **The short story** — a short piece focusing on a single incident, a few characters and usually one main effect or theme.

## Why African prose matters

- Lets African writers **tell their own stories** and correct outsiders' misrepresentations of Africa.
- *Things Fall Apart* was written partly to show the richness and order of African society before colonialism.
- That purpose made it one of the most important books in world literature.

## Common errors and misconceptions

- **Thinking African prose is "only about villages and old customs"** — it also deals with **city life, colonialism, politics, women's lives and modern struggles**; its "Africanness" is a set of features, not a single subject.
- **Confusing prose with poetry** — **prose** runs in sentences and paragraphs without poetry's regular metre and line breaks; a poem is verse, not prose.
- **Mixing up fiction and non-fiction** — the **novel, novella and short story** are prose *fiction* (imagined); biography, autobiography and essays are prose *non-fiction* (factual).
- **Getting the writers' nationalities wrong** — e.g. **Chinua Achebe** (*Things Fall Apart*) is **Nigerian**, while **Ngũgĩ wa Thiong'o** (*Weep Not, Child*) is **Kenyan** and **Camara Laye** is **Guinean**.`,
      workedExample: `**Task.** A reader says, "African prose is only about villages and old customs." Correct this view, and describe three features that genuinely characterise African prose, naming a major writer.

**Correcting the view**
The statement is too narrow. African prose is not *only* about villages and old customs — it also deals with **city life, colonialism, politics, the lives of women, and modern struggles**. What makes it "African" is not a single subject but a set of features drawn from African life and storytelling.

**Three genuine features of African prose**

1. **African settings and experience.** African prose is rooted in African life — whether village or city — and in African history, such as the impact of **colonialism**. For example, Chinua Achebe's ***Things Fall Apart*** portrays Igbo society and the disruption caused by colonial rule.

2. **Use of proverbs and oral tradition.** African writers weave **proverbs, folktales and the rhythms of oral storytelling** into their prose, so that traditional wisdom and voice come through — Achebe famously said that "proverbs are the palm-oil with which words are eaten."

3. **Themes from African experience.** Common themes include the **clash of tradition and modernity**, colonialism and its effects, corruption, and the role of women — issues that matter to African societies.

**Conclusion:** African prose is far richer than "villages and old customs"; it is defined by African settings and experience, the use of proverbs and oral tradition, and themes drawn from African life — as seen in the work of writers like Chinua Achebe.`,
      teachingTip:
        "Center the topic on Things Fall Apart — it is the touchstone African novel and rewards close study. Use Achebe's 'proverbs are the palm-oil with which words are eaten' to show how oral tradition enters prose. Push learners past the stereotype that African literature is only rural nostalgia: highlight its engagement with colonialism, city life and women's experience, which produces more sophisticated exam answers.",
      quiz: [
        {
          prompt: "Prose is language written without the regular … of poetry.",
          options: ["rhythm and line pattern", "words", "meaning", "letters"],
          correctIndex: 0,
          explanation: "Prose lacks poetry's regular metre and line breaks.",
        },
        {
          prompt: "A long fictional story is called a…",
          options: ["novel", "poem", "play", "proverb"],
          correctIndex: 0,
          explanation: "The novel is a long work of prose fiction.",
        },
        {
          prompt: "A short prose story focusing on a single incident is a…",
          options: ["short story", "novel", "epic poem", "drama"],
          correctIndex: 0,
          explanation: "The short story is brief and focused.",
        },
        {
          prompt: "Which is an example of prose non-fiction?",
          options: ["a biography", "a novel", "a poem", "a play"],
          correctIndex: 0,
          explanation: "Biography is factual prose (non-fiction).",
        },
        {
          prompt: "African prose is prose written by … authors, rooted in African life.",
          options: ["African", "European", "ancient Roman", "American only"],
          correctIndex: 0,
          explanation: "It is written by Africans about African experience.",
        },
        {
          prompt: "The most famous African novel is…",
          options: ["Things Fall Apart", "Romeo and Juliet", "The Odyssey", "Oliver Twist"],
          correctIndex: 0,
          explanation: "Achebe's Things Fall Apart is the best-known African novel.",
        },
        {
          prompt: "Things Fall Apart was written by…",
          options: ["Chinua Achebe", "Wole Soyinka", "Ngũgĩ wa Thiong'o", "Camara Laye"],
          correctIndex: 0,
          explanation: "Chinua Achebe wrote it (1958).",
        },
        {
          prompt: "Chinua Achebe was from which country?",
          options: ["Nigeria", "Kenya", "Guinea", "Ghana"],
          correctIndex: 0,
          explanation: "Achebe was Nigerian.",
        },
        {
          prompt: "The main character of Things Fall Apart is…",
          options: ["Okonkwo", "Baroka", "Lakunle", "Puck"],
          correctIndex: 0,
          explanation: "Okonkwo is the tragic hero of the novel.",
        },
        {
          prompt: "A common feature of African prose is the use of…",
          options: ["proverbs and oral tradition", "algebra", "map symbols", "chemical formulae"],
          correctIndex: 0,
          explanation: "Proverbs and folktales enrich African prose.",
        },
        {
          prompt: "A common theme in African prose is the clash of…",
          options: ["tradition and modernity", "acids and bases", "supply and demand", "night and day"],
          correctIndex: 0,
          explanation: "Tradition vs modernity is a frequent theme.",
        },
        {
          prompt: "Ngũgĩ wa Thiong'o, author of Weep Not, Child, is from…",
          options: ["Kenya", "Nigeria", "Guinea", "South Africa"],
          correctIndex: 0,
          explanation: "Ngũgĩ is a Kenyan writer.",
        },
        {
          prompt: "Which writer is known for novels about the lives of African women?",
          options: ["Buchi Emecheta", "Chinua Achebe", "Camara Laye", "William Shakespeare"],
          correctIndex: 0,
          explanation: "Buchi Emecheta wrote about women's experiences.",
        },
        {
          prompt: "African prose lets African writers…",
          options: ["tell their own stories", "avoid all themes", "write only poetry", "ignore African life"],
          correctIndex: 0,
          explanation: "It gives Africans their own literary voice.",
        },
        {
          prompt: "Achebe said proverbs are the … with which words are eaten.",
          options: ["palm-oil", "salt", "water", "rice"],
          correctIndex: 0,
          explanation: "His famous image for the role of proverbs in speech.",
        },
        {
          prompt: "Prose fiction means writing that is…",
          options: ["imagined (made up)", "always true", "in verse", "a list of facts"],
          correctIndex: 0,
          explanation: "Fiction is imagined storytelling.",
        },
        {
          prompt: "Which is NOT a form of prose fiction?",
          options: ["a poem", "a novel", "a novella", "a short story"],
          correctIndex: 0,
          explanation: "A poem is verse, not prose.",
        },
        {
          prompt: "The African Child (L'Enfant noir) was written by…",
          options: ["Camara Laye", "Chinua Achebe", "Buchi Emecheta", "Bessie Head"],
          correctIndex: 0,
          explanation: "Camara Laye of Guinea wrote it.",
        },
        {
          prompt: "One purpose of Things Fall Apart was to show…",
          options: [
            "the richness and order of African society before colonialism",
            "that Africa had no history",
            "how to write poetry",
            "European superiority",
          ],
          correctIndex: 0,
          explanation: "Achebe portrayed a rich, ordered pre-colonial society.",
        },
        {
          prompt: "A short story usually focuses on…",
          options: ["a single incident and few characters", "many decades and dozens of characters", "no characters", "only setting"],
          correctIndex: 0,
          explanation: "The short story is compact and focused.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define prose and name two forms of prose fiction.",
          answerKey:
            "Prose is ordinary written or spoken language without the regular rhythm and line pattern of poetry. Two forms of prose fiction (any two): the novel, the novella, the short story. Award marks for the definition and two valid forms.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which novel is regarded as the most famous work of African prose?",
          options: [
            "Things Fall Apart by Chinua Achebe",
            "Romeo and Juliet by Shakespeare",
            "A Midsummer Night's Dream by Shakespeare",
            "The Lion and the Jewel by Wole Soyinka",
          ],
          correctIndex: 0,
          answerKey: "Achebe's Things Fall Apart is the best-known African novel (the others are dramas or non-African).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three features that characterise African prose.",
          answerKey:
            "Any three: African settings and experience (village or city life, history); use of proverbs, folktales and oral tradition; themes from African life (tradition vs modernity, colonialism, corruption, women's roles); local expressions/rhythms of speech; emphasis on community. Award a mark per valid feature.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the features that make African prose distinctive, referring to a major African writer or work.",
          answerKey:
            "A strong answer identifies distinctive features — African settings and experience, use of proverbs and oral tradition, themes drawn from African life (tradition vs modernity, colonialism, corruption, the role of women), local speech rhythms, and a sense of community — and supports the discussion with a named writer or work (e.g. Chinua Achebe's Things Fall Apart, its Igbo setting, its use of proverbs, and its theme of colonial disruption). Award marks for at least three features and a relevant reference to an African writer or text.",
          marks: 5,
        },
      ],
    },
    {
      slug: "studying-an-african-novel",
      title: "Studying an African Novel: Plot, Character, Setting and Theme",
      objective:
        "By the end of the topic, learners should be able to identify and analyse the elements of prose fiction — plot, character, setting and theme — in an African novel, and support their views with reference to the text.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Studying a novel means taking it apart into its main **elements** — **plot, character, setting, theme** (plus point of view and style) — then seeing how they fit back together.
- Applied to an African novel such as *Things Fall Apart*: a village on the edge of colonial change and a proud, rigid hero combine to dramatise the book's meaning.
- **This topic:** the elements of prose fiction, and how to write about them without slipping into plot summary.

## The elements of prose fiction

To study a novel or short story, we analyse its main **elements**. These are the tools for understanding any work of prose fiction.

### 1. Plot
The **plot** is the **sequence of events** in the story — what happens and in what order. A typical plot has:

- an **exposition** (introduction of characters and setting),
- a **rising action** (the conflict develops),
- a **climax** (the turning point of highest tension),
- a **falling action**, and a **resolution (ending)**.

### 2. Character
The **characters** are the people in the story (studied in drama in Period II). We look at the **protagonist**, **antagonist**, and whether characters are **round or flat, dynamic or static**, and how the author reveals them (**characterisation**).

### 3. Setting
The **setting** is the **time and place** in which the story happens — the historical period, the country, the village or city, and the social background. In African prose the setting is often essential to the meaning (e.g. a village on the eve of colonialism).

### 4. Theme
The **theme** is the **central idea or message** of the work (studied in Period III drama) — such as tradition versus modernity, or the effects of colonialism.

Other elements include **point of view** (who tells the story) and **style** (the author's use of language, including proverbs).

## Analysing an African novel

To analyse well, connect the elements. For example, in *Things Fall Apart*:

- **Setting:** an Igbo village in Nigeria at the time colonial rule arrives.
- **Character:** **Okonkwo**, a proud, strong but inflexible man (the protagonist) whose story drives the novel.
- **Plot:** Okonkwo's rise and his tragic fall as his world is changed by colonialism.
- **Theme:** the **clash of tradition and modernity / the effects of colonialism** on African society.

The title itself, *Things Fall Apart*, points to the theme — the breaking apart of the old order.

## Writing a good analysis

As with poetry and drama, a good analysis follows **name–evidence–explanation**:

1. **Name** the element (e.g. a theme, or a character's trait).
2. **Give evidence** from the text (an event, a setting detail, a line).
3. **Explain** how it works to create meaning.

This avoids mere **plot summary** — the commonest weakness — and produces real analysis.

## Common errors and misconceptions

- **Retelling the story instead of analysing it** — **plot summary** is the commonest weakness; use *name–evidence–explanation* to show how the elements *create meaning*.
- **Listing the elements separately** — a strong answer shows how **setting, character, plot and theme connect** (e.g. the setting creates the conflict the character reacts to), not four unlinked paragraphs.
- **Confusing plot with theme** — **plot** is *what happens*; **theme** is the *central idea* the events convey.
- **Mixing up the parts of plot** — the order is **exposition → rising action → climax → falling action → resolution**; the *climax* is the turning point of highest tension, not the ending.`,
      workedExample: `**Task.** Using an African novel you have studied, show how the elements of prose fiction work together. Identify the setting, the protagonist, a key plot movement, and the central theme, and explain how they connect.

**Novel:** *Things Fall Apart* by Chinua Achebe

**Setting**
The novel is set in an **Igbo village in Nigeria** at the time when **colonial rule and Christian missionaries arrive**. This historical setting is essential — the story is about a society at the moment of great change.

**Protagonist (character)**
The protagonist is **Okonkwo**, a strong, proud and hard-working man who fears weakness and clings to the old ways. He is a **round** character with real depth, and the way Achebe reveals his pride and rigidity is central to the book.

**A key plot movement**
The plot follows Okonkwo's **rise** to respect in his community and then his **tragic fall** as colonial rule disrupts Igbo society and he cannot adapt — ending in his personal destruction.

**Central theme**
The central theme is the **clash of tradition and modernity / the destructive effects of colonialism** on African society. The very title, *Things Fall Apart*, names this theme — the old order breaks apart.

**How they connect**
The **setting** (a village on the edge of colonial change) creates the **conflict**; the **character** of Okonkwo — proud and inflexible — reacts to that change in a way that drives the **plot** to its tragic end; and through his fall the novel dramatises its **theme**. No element stands alone: setting shapes plot, character embodies theme.

**Conclusion:** analysing a novel means seeing how setting, character, plot and theme work **together** — in *Things Fall Apart*, a changing Igbo world and a proud, rigid hero combine to dramatise the painful clash of tradition and colonial modernity.`,
      teachingTip:
        "Give learners the four-element checklist — plot, character, setting, theme — and insist they show how the elements CONNECT rather than listing them separately; that connection is what lifts an answer above plot summary. Reuse the name–evidence–explanation frame from the poetry and drama topics so the analytical method is consistent across the whole Literature course. Things Fall Apart is the ideal worked text if it is available.",
      quiz: [
        {
          prompt: "The sequence of events in a story is the…",
          options: ["plot", "setting", "theme", "style"],
          correctIndex: 0,
          explanation: "Plot is what happens and in what order.",
        },
        {
          prompt: "The time and place of a story is its…",
          options: ["setting", "plot", "climax", "narrator"],
          correctIndex: 0,
          explanation: "Setting is the time and place.",
        },
        {
          prompt: "The central idea or message of a work is its…",
          options: ["theme", "plot", "setting", "cover"],
          correctIndex: 0,
          explanation: "The theme is the central idea.",
        },
        {
          prompt: "The main character of a novel is the…",
          options: ["protagonist", "antagonist", "narrator only", "author"],
          correctIndex: 0,
          explanation: "The protagonist is the central character.",
        },
        {
          prompt: "The turning point of highest tension in a plot is the…",
          options: ["climax", "exposition", "resolution", "setting"],
          correctIndex: 0,
          explanation: "The climax is the peak of the conflict.",
        },
        {
          prompt: "The introduction of characters and setting at the start is the…",
          options: ["exposition", "climax", "resolution", "theme"],
          correctIndex: 0,
          explanation: "Exposition sets the scene at the beginning.",
        },
        {
          prompt: "In Things Fall Apart, the protagonist is…",
          options: ["Okonkwo", "Baroka", "Lakunle", "Puck"],
          correctIndex: 0,
          explanation: "Okonkwo is the central character.",
        },
        {
          prompt: "The setting of Things Fall Apart is an Igbo village at the time of…",
          options: ["the arrival of colonial rule", "the Second World War", "ancient Egypt", "modern Lagos only"],
          correctIndex: 0,
          explanation: "It is set as colonialism reaches Igboland.",
        },
        {
          prompt: "The central theme of Things Fall Apart is…",
          options: ["the clash of tradition and colonial modernity", "space travel", "supply and demand", "the water cycle"],
          correctIndex: 0,
          explanation: "It dramatises tradition vs colonial change.",
        },
        {
          prompt: "The way an author reveals a character is called…",
          options: ["characterisation", "setting", "resolution", "point of view"],
          correctIndex: 0,
          explanation: "Characterisation is how character is shown.",
        },
        {
          prompt: "Who tells the story (first person, third person) is the…",
          options: ["point of view", "theme", "plot", "climax"],
          correctIndex: 0,
          explanation: "Point of view is the narrative perspective.",
        },
        {
          prompt: "A character with depth and many sides is described as…",
          options: ["round", "flat", "static", "minor"],
          correctIndex: 0,
          explanation: "Round characters are fully developed.",
        },
        {
          prompt: "The four main elements of prose fiction to analyse are plot, character, setting and…",
          options: ["theme", "price", "rhyme", "metre"],
          correctIndex: 0,
          explanation: "Plot, character, setting and theme.",
        },
        {
          prompt: "In African prose, the setting is often … to the meaning.",
          options: ["essential", "irrelevant", "hidden", "unimportant"],
          correctIndex: 0,
          explanation: "The setting frequently carries the story's meaning.",
        },
        {
          prompt: "Good analysis avoids merely retelling the story, which is called…",
          options: ["plot summary", "characterisation", "setting", "theme"],
          correctIndex: 0,
          explanation: "Plot summary is the weakness to avoid.",
        },
        {
          prompt: "The name–evidence–explanation method is used to analyse…",
          options: ["all literature (prose, drama and poetry)", "only maths", "only prose", "only poems"],
          correctIndex: 0,
          explanation: "It is the consistent analytical method across the course.",
        },
        {
          prompt: "The end of the story, where the conflict is settled, is the…",
          options: ["resolution", "exposition", "climax", "rising action"],
          correctIndex: 0,
          explanation: "The resolution concludes the plot.",
        },
        {
          prompt: "The title 'Things Fall Apart' points directly to the novel's…",
          options: ["theme", "setting only", "author", "price"],
          correctIndex: 0,
          explanation: "The title signals the breaking of the old order.",
        },
        {
          prompt: "A strong analysis shows how the elements…",
          options: ["connect and work together", "stay separate", "are ignored", "are counted only"],
          correctIndex: 0,
          explanation: "Linking the elements is what makes analysis strong.",
        },
        {
          prompt: "Okonkwo's pride and inflexibility are best described as his…",
          options: ["character traits", "setting", "plot", "point of view"],
          correctIndex: 0,
          explanation: "They are traits revealed through characterisation.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four main elements of prose fiction and define any two of them.",
          answerKey:
            "The four elements: plot, character, setting, theme. Definitions (any two): plot — the sequence of events; character — the people in the story; setting — the time and place; theme — the central idea/message. Award marks for naming the four and correctly defining two.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The 'setting' of a novel refers to…",
          options: ["the time and place of the story", "the main character", "the sequence of events", "the central message"],
          correctIndex: 0,
          answerKey: "Setting is the time and place in which the story happens.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "For an African novel you have studied, identify its protagonist and its central theme.",
          answerKey:
            "Accept a valid protagonist and central theme from a studied African novel — e.g. Things Fall Apart: protagonist Okonkwo; theme the clash of tradition and colonial modernity / the effects of colonialism. Award marks for a correctly named protagonist and an appropriate theme.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Using an African novel you have studied, discuss how setting, character, plot and theme work together to convey the writer's message. Support your answer with reference to the text.",
          answerKey:
            "A strong answer selects an African novel and shows how the elements connect: the setting creates the situation/conflict; the protagonist's character shapes how they respond; the plot develops through that response; and together they dramatise the central theme. Using Things Fall Apart, for example: the Igbo village at the arrival of colonialism (setting) and Okonkwo's proud, inflexible character (character) drive his tragic fall (plot), dramatising the clash of tradition and colonial modernity (theme). It must support points with textual reference rather than plot summary. Award marks for treating all four elements, showing their interconnection, and referencing the text.",
          marks: 6,
        },
      ],
    },
  ],
};
