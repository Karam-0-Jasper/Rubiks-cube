import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester Two, Period V: African Prose. Period IV introduced the
// nature of African prose and the novel; Period V focuses on the African short
// story and on comparing and analysing prose works.
export const literatureG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "African Prose: The Short Story",
  summary:
    "Period V of the MoE Grade 10 Literature syllabus. Building on the study of the African novel, learners examine the African short story — its distinctive features — and practise close analysis, including comparing prose works and evaluating a writer's craft and point of view.",
  topics: [
    {
      slug: "the-african-short-story",
      title: "The African Short Story",
      objective:
        "By the end of the topic, learners should be able to describe the features of the short story as a form, distinguish it from the novel, and analyse the plot, character and theme of an African short story.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Short story** = a work of prose fiction complete enough to be read in one sitting.
- Africa's strong oral storytelling tradition makes it a natural home for the form.
- **This topic:** what a short story is; the features that flow from its **brevity** (single focus, few characters, economy, often a final twist); contrast with the novel; analysing an African short story with the same tools, in miniature.

## What is a short story?

A **short story** is a work of **prose fiction** short enough to be read in one sitting. It uses the same **elements** as a novel — plot, character, setting, theme, point of view — but in a **compact** form.

## Features of the short story

Because it is short, the short story has its own character:

- **Brevity** — it is short and can be read at one time.
- **Single focus** — it usually concentrates on **one main incident**, **one main character** (or a few) and **one main theme or effect**. There is no room for many sub-plots.
- **Few characters** — a small cast, often just one or two developed characters.
- **Economy** — every word counts; the writer wastes nothing and often begins close to the main action.
- **A single, unified impression** — it aims to leave the reader with one strong feeling or idea.
- **A twist or point** — many short stories end with a surprising turn or a sharp final point.

## The short story compared with the novel

| Feature | Short story | Novel |
|---|---|---|
| Length | short (one sitting) | long |
| Plot | one main incident | complex, sub-plots |
| Characters | few | many, fully developed |
| Themes | usually one | several |
| Setting | limited | often broad |

Both are **prose fiction**; the difference is mainly one of **scale and focus**.

## African short stories

African writers have produced many fine short stories, often collected in anthologies. They share the **features of African prose** from Period IV — African settings, use of proverbs and oral tradition, and themes such as the clash of tradition and modernity, colonialism, family and community. Because the oral tradition of storytelling is strong in Africa, the short story is a natural and popular form.

## Analysing a short story

Use the same tools as for the novel, but expect them in miniature:

- **Plot:** what single incident happens, and how does it build to a climax and resolution?
- **Character:** the main character, and what their words and actions reveal about them.
- **Setting:** where and when — and how does it matter?
- **Theme:** what one central idea does the story leave you with?
- **Point of view:** who tells the story (first or third person)?

As always, follow **name–evidence–explanation**, and avoid mere plot summary.

## Common errors and misconceptions

- **Thinking a short story is just "a novel that is shorter"** — the difference is one of **focus**, not only length: it concentrates on **one incident, a few characters and one theme** for a single unified impression.
- **Expecting sub-plots and a large cast** — a short story has no room for them; it usually develops **one or two** characters and begins **close to the main action**.
- **Missing the ending's importance** — in many short stories the **point or twist** lands at the very end; skimming it loses the story's meaning.
- **Retelling instead of analysing** — even in miniature, use *name–evidence–explanation*; identify the single central theme and show how the incident, character and ending build it.`,
      workedExample: `**Task.** Explain how a short story differs from a novel, and describe how you would analyse the theme of an African short story.

**How a short story differs from a novel**

Both are **prose fiction**, but they differ mainly in **scale and focus**:
- A **short story** is **short** (read in one sitting), concentrates on **one main incident**, has **few characters**, usually **one main theme**, and aims for a **single, unified impression**, often with a final twist or point.
- A **novel** is **long**, has a **complex plot with sub-plots**, **many fully developed characters**, and **several themes**.

In short, the short story does in miniature, with great economy, what the novel does at length.

**How to analyse the theme of an African short story**

1. **Read for the single main idea.** Because a short story usually has one central theme, identify the one idea it leaves you with (e.g. the pain of the clash between tradition and modernity, or the strength of family).
2. **Find the evidence.** Look at the **main incident**, the **main character's actions and words**, the **setting**, and especially the **ending** (often where the point is made).
3. **Explain how they convey the theme.** Show how the incident, character and ending work together to build that one idea — using the **name–evidence–explanation** method rather than retelling the plot.

**Conclusion:** a short story is a compact, single-focus form of prose fiction, and analysing its theme means identifying the one central idea and showing — with evidence from the incident, character and ending — how the writer conveys it.`,
      teachingTip:
        "The most useful single idea is 'single focus': one incident, one or two characters, one theme, one impression. Contrast a short story with a novel on a two-column table so learners see it is a difference of scale, not kind. Because short stories are brief, they are ideal for close-reading practice — read one aloud in class, then apply the plot/character/setting/theme/point-of-view checklist, insisting on evidence for every claim.",
      quiz: [
        {
          prompt: "A short story is a work of prose fiction short enough to be read…",
          options: ["in one sitting", "over a year", "in ten volumes", "only aloud"],
          correctIndex: 0,
          explanation: "Brevity is its defining feature.",
        },
        {
          prompt: "A short story usually concentrates on…",
          options: ["one main incident", "many sub-plots", "dozens of characters", "several centuries"],
          correctIndex: 0,
          explanation: "It has a single focus.",
        },
        {
          prompt: "Compared with a novel, a short story has…",
          options: ["fewer characters", "more characters", "no characters", "only villains"],
          correctIndex: 0,
          explanation: "A small cast is typical.",
        },
        {
          prompt: "A short story usually explores…",
          options: ["one main theme", "many themes", "no theme", "only settings"],
          correctIndex: 0,
          explanation: "Usually a single central theme.",
        },
        {
          prompt: "'Economy' in a short story means…",
          options: ["every word counts; nothing is wasted", "it is about money", "it is very long", "it has no plot"],
          correctIndex: 0,
          explanation: "The writer uses words sparingly and effectively.",
        },
        {
          prompt: "Many short stories end with…",
          options: ["a twist or a sharp final point", "a long epilogue", "a sequel", "no ending"],
          correctIndex: 0,
          explanation: "A surprising turn or point is common.",
        },
        {
          prompt: "A short story and a novel are both forms of…",
          options: ["prose fiction", "poetry", "drama", "non-fiction"],
          correctIndex: 0,
          explanation: "Both are prose fiction.",
        },
        {
          prompt: "The main difference between a short story and a novel is one of…",
          options: ["scale and focus", "language", "truthfulness", "author's country"],
          correctIndex: 0,
          explanation: "It is a difference of length and focus.",
        },
        {
          prompt: "A novel, unlike a short story, often has…",
          options: ["sub-plots and many characters", "one incident only", "no theme", "no setting"],
          correctIndex: 0,
          explanation: "Novels are larger in scope.",
        },
        {
          prompt: "African short stories often use which feature of African prose?",
          options: ["proverbs and oral tradition", "algebra", "map symbols", "chemical formulae"],
          correctIndex: 0,
          explanation: "Proverbs and oral storytelling feature strongly.",
        },
        {
          prompt: "The short story is a natural form in Africa partly because of the strong tradition of…",
          options: ["oral storytelling", "written exams", "silent reading", "printing"],
          correctIndex: 0,
          explanation: "Africa's oral storytelling tradition suits the short story.",
        },
        {
          prompt: "To analyse a short story, you use the same elements as for a…",
          options: ["novel", "poem's rhyme", "map", "graph"],
          correctIndex: 0,
          explanation: "Plot, character, setting, theme, point of view.",
        },
        {
          prompt: "In a short story, the point or theme is often made at the…",
          options: ["ending", "title page", "list of characters", "cover"],
          correctIndex: 0,
          explanation: "The ending often carries the point.",
        },
        {
          prompt: "A short story aims to leave the reader with…",
          options: ["a single, unified impression", "many unrelated ideas", "no feeling", "a long summary"],
          correctIndex: 0,
          explanation: "One strong impression is the goal.",
        },
        {
          prompt: "Common themes in African short stories include…",
          options: ["tradition versus modernity and family/community", "the periodic table", "supply and demand", "map scales"],
          correctIndex: 0,
          explanation: "They share African prose's themes.",
        },
        {
          prompt: "Who tells the story (first or third person) is the…",
          options: ["point of view", "theme", "setting", "climax"],
          correctIndex: 0,
          explanation: "Point of view is the narrative perspective.",
        },
        {
          prompt: "Good short-story analysis avoids merely…",
          options: ["retelling the plot", "quoting the text", "naming the theme", "reading closely"],
          correctIndex: 0,
          explanation: "Avoid plot summary; analyse instead.",
        },
        {
          prompt: "Because it is short, a short story often begins…",
          options: ["close to the main action", "with a long history", "with many characters at once", "with the ending explained"],
          correctIndex: 0,
          explanation: "It starts near the main incident to save space.",
        },
        {
          prompt: "The analytical method to use is…",
          options: ["name–evidence–explanation", "guess and skip", "count the pages", "copy the plot"],
          correctIndex: 0,
          explanation: "The consistent method across the course.",
        },
        {
          prompt: "A short story usually develops how many main characters fully?",
          options: ["one or a few", "dozens", "none", "hundreds"],
          correctIndex: 0,
          explanation: "Its small cast means only one or a few are developed.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Give three features that distinguish a short story from a novel.",
          answerKey:
            "Any three: it is short (read in one sitting); it focuses on one main incident; it has few characters; it usually explores one main theme; it aims for a single unified impression; it often ends with a twist/point. Award a mark per valid feature.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The short story and the novel differ mainly in…",
          options: ["scale and focus", "whether they are fiction", "the country of the author", "their use of language"],
          correctIndex: 0,
          answerKey: "Both are prose fiction; the difference is length and focus.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "For an African short story you have studied, state its main theme and one piece of evidence for it.",
          answerKey:
            "Accept a valid theme from a studied African short story with a specific supporting detail (an incident, a character's action, or the ending). Award marks for a clearly named theme and relevant textual evidence.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Analyse how the writer of an African short story you have studied uses plot, character and the ending to convey a single main theme.",
          answerKey:
            "A strong answer names one central theme and shows how the short story's single main incident (plot), its main character's words and actions, and its ending (often where the point is made) work together to convey that theme, supported by textual evidence rather than plot summary. It should reflect the compact, single-focus nature of the short story. Award marks for a clearly named theme and its development through plot, character and ending with evidence.",
          marks: 6,
        },
      ],
    },
    {
      slug: "comparing-and-evaluating-prose",
      title: "Comparing and Evaluating Prose Works",
      objective:
        "By the end of the topic, learners should be able to compare two prose works, evaluate a writer's craft (style, point of view and use of language), and write a reasoned personal response supported by the text.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Two higher skills: **compare** two works, and **evaluate** a writer's craft with a reasoned **personal response**.
- Comparison = weighing one text against another; evaluation = judging how well a writer achieves their purpose (point of view, style, characterisation) and defending an opinion with evidence.
- **This topic:** the culmination of the **name–evidence–explanation** method that runs through the whole Literature course.

## Beyond one text: comparison and evaluation

Having studied African prose (Period IV) and the short story, learners now practise two higher skills: **comparing** two prose works and **evaluating** a writer's craft.

## Comparing two prose works

To **compare** is to examine two texts **side by side**, noting **similarities and differences**. You can compare short stories, or a short story and part of a novel, by their **elements**:

- **Theme:** do they explore the same idea (e.g. tradition vs modernity)? How does each treat it?
- **Character:** are the main characters alike or different in their traits and roles?
- **Setting:** similar or contrasting time and place?
- **Style and tone:** is one serious and one humorous? Which uses proverbs or vivid imagery?

A good comparison does **not** just describe each text in turn; it **links** them — "Both stories deal with…, but whereas the first…, the second…".

## Evaluating a writer's craft

To **evaluate** is to judge **how well** a writer achieves their purpose, using evidence. Look at:

- **Point of view:** is the story told in the **first person** ("I") — making it personal and immediate — or the **third person** ("he/she/they") — allowing a wider view? How does the choice affect the reader?
- **Style and language:** the writer's use of **proverbs, imagery, dialogue, humour** and sentence rhythm.
- **Characterisation:** are the characters convincing and well drawn?
- **Effect on the reader:** does the story move, surprise or persuade you? Does the ending work?

## Writing a personal response

- **Personal response** — a reasoned opinion of a text (effective, moving or weak), **supported by evidence** from the text, not just "I liked it."
- Form: opinion + **because** + evidence. E.g. "The ending is powerful **because**… (evidence)."

## The whole method, one last time

Across all the Literature topics — poetry, drama and prose — the same discipline applies:

1. **Name** the feature (theme, technique, point of view).
2. **Give evidence** from the text.
3. **Explain** its effect — and, in evaluation, **judge** how well it works.

This turns reading into genuine literary analysis.

## Common errors and misconceptions

- **Describing each text in turn instead of comparing** — a real comparison **links** the two works ("Both…, but whereas the first…, the second…"), rather than two separate summaries.
- **Giving an unsupported opinion** — "I liked it" is not evaluation; every judgement needs **opinion + because + evidence** from the text.
- **Confusing first- and third-person point of view** — **first person** uses *"I"* (personal, immediate, possibly biased); **third person** uses *"he/she/they"* (a wider, more balanced view).
- **Mistaking evaluation for description** — evaluation **judges how well** the writing works and why, not merely what happens in the story.`,
      workedExample: `**Task.** (a) How would you compare two African short stories that share a theme? (b) Explain how a writer's choice of point of view affects the reader, and how you would write a supported personal response.

**Part (a) — comparing two stories on a shared theme**
Examine the two stories **side by side**, element by element, and **link** them rather than describing each separately. For a shared theme such as **tradition versus modernity**:
- **Theme:** state that both explore it, then show **how each treats it differently** — perhaps one ends in tragedy and the other in reconciliation.
- **Character:** compare the main characters' traits and roles (e.g. both feature a young person caught between old and new, but one resists change and the other embraces it).
- **Setting and style:** compare where each is set and the writer's tone (serious vs humorous, use of proverbs).
Use linking language: "Both stories…, but whereas the first…, the second…".

**Part (b) — point of view and a personal response**
- **Point of view:** if a story is told in the **first person** ("I"), it feels **personal and immediate**, and we see events through one character's eyes (and possible bias); in the **third person** ("he/she"), the narrator can give a **wider, more balanced view**. The choice shapes how close and how trusting the reader feels.
- **A supported personal response:** give **your own reasoned opinion** — what you found effective or moving — but **back it with evidence**: not "I liked the ending," but "The ending is powerful **because** the final image of… captures the theme of…".

**Conclusion:** comparison means linking two texts element by element, and evaluation means judging the writer's craft — including point of view — with evidence; a personal response is your reasoned, evidence-backed opinion, the culmination of the name–evidence–explanation method.`,
      teachingTip:
        "For comparison, ban 'describe text 1, then text 2' — insist on linked sentences ('Both…, but whereas…, …'). That single habit is what separates a top comparison answer. For evaluation and personal response, the rule is 'opinion + because + evidence'; never accept an unsupported 'I liked it'. Point of view (first vs third person, and its effect) is a reliable exam question — have learners rewrite a first-person passage in the third person to feel the difference.",
      quiz: [
        {
          prompt: "To compare two texts is to examine them…",
          options: ["side by side, noting similarities and differences", "one and then forget the other", "without reading them", "by their covers"],
          correctIndex: 0,
          explanation: "Comparison looks at both together.",
        },
        {
          prompt: "A good comparison should…",
          options: ["link the two texts, not just describe each in turn", "describe only one", "avoid the texts", "list page numbers"],
          correctIndex: 0,
          explanation: "Linking the texts is essential.",
        },
        {
          prompt: "You can compare two prose works by their…",
          options: ["theme, character, setting and style", "price and length only", "authors' ages", "publishers"],
          correctIndex: 0,
          explanation: "Compare by the literary elements.",
        },
        {
          prompt: "To evaluate a writer's craft is to…",
          options: ["judge how well they achieve their purpose, with evidence", "count the words", "summarise the plot", "ignore the writing"],
          correctIndex: 0,
          explanation: "Evaluation is judgement backed by evidence.",
        },
        {
          prompt: "A story told with 'I' is written in the…",
          options: ["first person", "third person", "second person", "no person"],
          correctIndex: 0,
          explanation: "'I' is first-person narration.",
        },
        {
          prompt: "A story told with 'he/she/they' is written in the…",
          options: ["third person", "first person", "second person", "no person"],
          correctIndex: 0,
          explanation: "'he/she' is third-person narration.",
        },
        {
          prompt: "First-person narration tends to feel…",
          options: ["personal and immediate", "distant and cold", "impossible to follow", "always unreliable"],
          correctIndex: 0,
          explanation: "'I' brings us close to one character's view.",
        },
        {
          prompt: "Third-person narration can give the reader a…",
          options: ["wider, more balanced view", "narrower view only", "no view", "false view always"],
          correctIndex: 0,
          explanation: "The narrator can see beyond one character.",
        },
        {
          prompt: "A writer's 'style' includes their use of…",
          options: ["proverbs, imagery, dialogue and humour", "page numbers", "the cover design", "the price"],
          correctIndex: 0,
          explanation: "Style is how the writer uses language.",
        },
        {
          prompt: "A personal response should give your opinion supported by…",
          options: ["evidence from the text", "nothing", "the price of the book", "the author's photo"],
          correctIndex: 0,
          explanation: "Opinions must be backed by evidence.",
        },
        {
          prompt: "Which is a good personal response?",
          options: [
            "The ending is powerful because the final image captures the theme.",
            "I liked it.",
            "It was boring.",
            "The book is long.",
          ],
          correctIndex: 0,
          explanation: "It gives a reason and evidence.",
        },
        {
          prompt: "In comparison, useful linking language is…",
          options: ["'Both…, but whereas…, …'", "'The end.'", "'Chapter one.'", "'The price is…'"],
          correctIndex: 0,
          explanation: "Linking phrases connect the two texts.",
        },
        {
          prompt: "Evaluating the ending of a story asks…",
          options: ["does it work, and why?", "how many pages it has", "who printed it", "its price"],
          correctIndex: 0,
          explanation: "Evaluation judges whether the ending is effective.",
        },
        {
          prompt: "Comparing 'tone' means comparing whether a text is…",
          options: ["serious, humorous, sad, etc.", "long or short", "cheap or costly", "old or new"],
          correctIndex: 0,
          explanation: "Tone is the mood/attitude of the writing.",
        },
        {
          prompt: "The consistent analytical method across all Literature is…",
          options: ["name–evidence–explanation", "guess–skip–stop", "read–forget", "count–copy"],
          correctIndex: 0,
          explanation: "Name the feature, give evidence, explain the effect.",
        },
        {
          prompt: "When comparing characters, you look at their…",
          options: ["traits and roles", "shoe sizes", "the book's price", "the cover"],
          correctIndex: 0,
          explanation: "Compare character traits and roles.",
        },
        {
          prompt: "Evaluation differs from description because it involves…",
          options: ["judgement of how well the writing works", "only retelling events", "no reading", "counting words"],
          correctIndex: 0,
          explanation: "Evaluation judges quality and effect.",
        },
        {
          prompt: "Changing a passage from first to third person mainly changes the…",
          options: ["point of view and how close the reader feels", "spelling", "number of pages", "the price"],
          correctIndex: 0,
          explanation: "It alters the narrative perspective and closeness.",
        },
        {
          prompt: "The purpose of comparison and evaluation is to deepen…",
          options: ["understanding of the texts", "the price", "the page count", "the cover art"],
          correctIndex: 0,
          explanation: "They lead to a richer understanding.",
        },
        {
          prompt: "An unsupported statement like 'I liked it' is weak because it lacks…",
          options: ["a reason and evidence", "a title", "a page number", "an author"],
          correctIndex: 0,
          explanation: "A good response needs reasons and evidence.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what it means to 'compare' two prose works, and name two elements you could compare.",
          answerKey:
            "To compare is to examine two texts side by side, noting their similarities and differences (and linking them, not describing each separately). Two elements (any two): theme, character, setting, style/tone, point of view. Award marks for the definition and two valid elements.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A story narrated using 'I' throughout is written in the…",
          options: ["first person", "third person", "second person", "no particular person"],
          correctIndex: 0,
          answerKey: "'I' narration is first person.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how the choice of first-person or third-person point of view can affect the reader.",
          answerKey:
            "First-person ('I') narration feels personal and immediate, showing events through one character's eyes (with possible bias), drawing the reader close; third-person ('he/she') narration can give a wider, more balanced view beyond one character. Award marks for the effect of each point of view.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare two African prose works you have studied, evaluating how effectively each writer conveys a shared theme. Support your answer with reference to both texts.",
          answerKey:
            "A strong answer identifies a shared theme and compares the two works side by side (linking them, e.g. 'Both…, but whereas…, …') across elements such as theme treatment, character, setting, and style/point of view, and evaluates how effectively each writer conveys the theme — judging their craft with evidence from both texts, and giving a reasoned personal response rather than plot summary. Award marks for genuine comparison (linked, not separate descriptions), evaluation of effectiveness, and textual support from both works.",
          marks: 6,
        },
      ],
    },
  ],
};
