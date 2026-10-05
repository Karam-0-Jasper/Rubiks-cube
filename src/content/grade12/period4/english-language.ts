import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 12,
// Semester Two, Period IV: GRAMMAR — Essay Writing / Creative Writing / Verb
// Usage. CONTENTS: Reviewing Essay Writing; (1) Creative Writing; (2) Review
// Verb Usage (five forms/principal parts of a verb; present/past/future simple
// and present/past/future perfect); (3) Speech Development / oral practice.
// Each top-level CONTENTS item is one topic.
export const englishLanguageG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Essay Writing, Creative Writing, Verb Usage and Speech Development",
  summary:
    "Period IV of the MoE Grade 12 English syllabus. Learners review how to structure an essay, practise creative writing across its genres, review the principal parts of verbs and the simple and perfect tenses, and develop and organise speeches for public delivery.",
  topics: [
    {
      // source: LibreTexts — A Guide to Rhetoric, Genre and Success in First-Year Writing (Gagich & Zickel), 4.1 Basic Essay Structure (https://human.libretexts.org/Courses/Community_College_of_Allegheny_County/Book:_A_Guide_to_Rhetoric_Genre_and_Success_in_First-Year_Writing_(Gagich_and_Zickel)/04:_Structuring_Paragraphing_and_Styling/4.01:_Basic_Essay_Structure)
      slug: "reviewing-essay-writing",
      title: "Reviewing Essay Writing",
      objective:
        "By the end of the topic, learners should be able to structure an essay into an introduction, body paragraphs and a conclusion, write a clear thesis statement, and support each body paragraph with a topic sentence and evidence.",
      estimatedMinutes: 120,
      notes: `## What an essay is

An **essay** is a piece of writing organised around a single main point (the **thesis**) and developed in three parts: an **introduction**, a **body**, and a **conclusion**.

## The introduction

- The **first paragraph** of the essay; it is the reader's **first impression**.
- **Draws the reader in** — opens with a statement that catches interest.
- Gives short **background/context** on the topic.
- **Ends with the thesis statement**.

## The thesis statement

**Thesis statement** — one sentence, usually at the **end of the introduction**, that states the essay's **main point**. It is the "signpost" that tells the reader where the essay is going.

A thesis has **two parts**:
1. the **topic** of the essay, and
2. the writer's **point / claim** about that topic.

- Weak: *This essay is about pollution.* (topic only, no claim)
- Strong: *River pollution in Monrovia can be reduced if households, markets and factories manage their waste.* (topic **+** claim)

## The body

The **body** is the largest part of the essay — all the paragraphs that **show why the thesis makes sense**. Each body paragraph develops **one** point that supports the thesis and contains:

1. **Topic sentence** — a "mini thesis" stating the **main idea of the paragraph**, placed at the start.
2. **Supporting evidence** — details, facts or examples.
3. **Explanation / analysis** — shows how the evidence **links back to the thesis**.
4. **Concluding / linking sentence** — rounds off the point and leads on.

**Key rule:** one idea, reason or example per body paragraph.

## Transitions

**Transitions** are words and phrases (*first, next, in addition, however, therefore, finally*) that connect paragraphs and sentences so the essay reads smoothly.

## The conclusion

- The **last paragraph** — the reader's **last impression**.
- **Restates the thesis** in fresh words and reminds the reader what the essay has shown.
- Does **more than repeat**: it may note the **significance** of the ideas, their effect on the reader, actions to take, or questions for further thought.

## Summary

- Essay = **introduction + body + conclusion**, organised around one **thesis**.
- The **thesis** (topic + claim) sits at the end of the introduction.
- Each **body paragraph** = topic sentence + evidence + explanation, one idea each.
- The **conclusion** restates the thesis and leaves a final impression.`,
      workedExample: `**Task.** Build the skeleton of an essay on the topic "Should students do farm work at school?"

**Step 1 — thesis (end of introduction).** State topic + claim:
*Farm work at school should be encouraged because it teaches responsibility, provides food, and gives practical skills.*

**Step 2 — one body paragraph per reason**, each led by a topic sentence:
- Body 1 — *Farm work teaches responsibility.* (evidence: students must water and weed daily; explanation: this builds habits of duty → links to thesis)
- Body 2 — *The school farm provides food.* (evidence: vegetables for the canteen; explanation: cuts costs and feeds pupils → links to thesis)
- Body 3 — *Farm work gives practical skills.* (evidence: planting, composting; explanation: useful after school → links to thesis)

**Step 3 — conclusion.** Restate the thesis in new words and add significance:
*School farm work is worth encouraging: it shapes responsible students, feeds the school, and teaches skills that last a lifetime.*

**Why it works:** the introduction ends with a clear thesis (topic + claim); every body paragraph opens with a topic sentence, gives evidence, and ties back to the thesis; the conclusion restates the point and leaves a final impression — the required essay structure.`,
      quiz: [
        {
          prompt: "An essay is organised around a single main point called the…",
          options: ["thesis", "title", "topic sentence", "transition"],
          correctIndex: 0,
          explanation: "The thesis is the essay's central point.",
        },
        {
          prompt: "The three main parts of an essay are the introduction, the body and the…",
          options: ["conclusion", "bibliography", "abstract", "appendix"],
          correctIndex: 0,
          explanation: "Introduction, body, conclusion.",
        },
        {
          prompt: "The thesis statement usually appears…",
          options: ["at the end of the introduction", "in the middle of the body", "in the conclusion only", "in the title"],
          correctIndex: 0,
          explanation: "It typically closes the introduction.",
        },
        {
          prompt: "A good thesis states the topic and the writer's…",
          options: ["point or claim", "name", "word count", "favourite colour"],
          correctIndex: 0,
          explanation: "Thesis = topic + claim.",
        },
        {
          prompt: "Which is the stronger thesis?",
          options: [
            "School sports improve health, discipline and teamwork.",
            "This essay is about school sports.",
            "School sports.",
            "I will write about school sports.",
          ],
          correctIndex: 0,
          explanation: "It states a topic and a clear claim.",
        },
        {
          prompt: "The introduction is important because it is the reader's…",
          options: ["first impression", "last impression", "only paragraph", "conclusion"],
          correctIndex: 0,
          explanation: "The introduction makes the first impression.",
        },
        {
          prompt: "The largest part of the essay is the…",
          options: ["body", "introduction", "conclusion", "title"],
          correctIndex: 0,
          explanation: "The body carries the supporting paragraphs.",
        },
        {
          prompt: "Each body paragraph should develop…",
          options: ["one main idea", "the whole essay", "no ideas", "the title"],
          correctIndex: 0,
          explanation: "One idea, reason or example per paragraph.",
        },
        {
          prompt: "The sentence that states the main idea of a body paragraph is the…",
          options: ["topic sentence", "thesis", "transition", "conclusion"],
          correctIndex: 0,
          explanation: "A topic sentence is the paragraph's mini thesis.",
        },
        {
          prompt: "A topic sentence is sometimes called a…",
          options: ["mini thesis", "footnote", "caption", "heading"],
          correctIndex: 0,
          explanation: "It is the paragraph's small controlling idea.",
        },
        {
          prompt: "After the topic sentence, a body paragraph should give…",
          options: ["supporting evidence and explanation", "the title", "a new thesis", "the conclusion"],
          correctIndex: 0,
          explanation: "Evidence plus analysis linking to the thesis.",
        },
        {
          prompt: "The explanation in a body paragraph should link the evidence back to the…",
          options: ["thesis", "title", "margin", "page number"],
          correctIndex: 0,
          explanation: "Analysis connects evidence to the thesis.",
        },
        {
          prompt: "Words like 'however', 'in addition' and 'therefore' are…",
          options: ["transitions", "thesis statements", "topic sentences", "titles"],
          correctIndex: 0,
          explanation: "Transitions connect ideas smoothly.",
        },
        {
          prompt: "The conclusion is the reader's…",
          options: ["last impression", "first impression", "second paragraph", "thesis"],
          correctIndex: 0,
          explanation: "It leaves the final impression.",
        },
        {
          prompt: "A good conclusion should…",
          options: ["restate the thesis in fresh words", "introduce a brand-new argument", "copy the introduction exactly", "list references only"],
          correctIndex: 0,
          explanation: "It restates the thesis and reminds the reader of the point.",
        },
        {
          prompt: "A conclusion should do more than simply…",
          options: ["repeat the same words", "end the essay", "mention the topic", "leave an impression"],
          correctIndex: 0,
          explanation: "It extends beyond mere repetition.",
        },
        {
          prompt: "How many main ideas should one body paragraph focus on?",
          options: ["one", "two", "three", "as many as possible"],
          correctIndex: 0,
          explanation: "One idea per paragraph keeps it focused.",
        },
        {
          prompt: "Which part gives background/context before the thesis?",
          options: ["the introduction", "a body paragraph", "the conclusion", "a transition"],
          correctIndex: 0,
          explanation: "The introduction sets context, then states the thesis.",
        },
        {
          prompt: "The body paragraphs exist mainly to…",
          options: ["show why the thesis makes sense", "introduce the writer", "list the title", "end the essay"],
          correctIndex: 0,
          explanation: "They support and prove the thesis.",
        },
        {
          prompt: "If an essay had no thesis, the main problem would be that it…",
          options: ["has no clear main point to support", "is too long", "has too many paragraphs", "uses transitions"],
          correctIndex: 0,
          explanation: "Without a thesis there is nothing to organise the essay.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Where in an essay does the thesis statement most often appear?",
          options: [
            "At the end of the introduction",
            "At the start of the first body paragraph",
            "In the middle of the conclusion",
            "In the title",
          ],
          correctIndex: 0,
          answerKey: "The thesis usually closes the introduction, signalling the essay's main point.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the two parts a good thesis statement must contain, and give one example thesis.",
          answerKey:
            "A thesis states (1) the topic and (2) the writer's point/claim about it. Example: 'School gardens should be expanded because they teach skills, feed pupils and protect the environment.' Award a mark for the two parts and a mark for a valid example.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List the parts of a well-built body paragraph.",
          answerKey:
            "Topic sentence (main idea); supporting evidence/details or examples; explanation/analysis that links the evidence back to the thesis; a concluding or linking sentence. Award marks across these.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What should a conclusion do, and what should it avoid?",
          answerKey:
            "It should restate the thesis in fresh words and remind the reader of what the essay showed (and may note significance or next steps); it should avoid simply repeating the introduction word for word or introducing a brand-new argument. Award marks for the two sides.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how to structure an essay. Describe the job of the introduction (including the thesis), the body paragraphs (topic sentence, evidence, explanation) and the conclusion, and explain why transitions matter.",
          answerKey:
            "A strong answer explains that the introduction draws the reader in, gives context and ends with a thesis (topic + claim); that each body paragraph develops one idea with a topic sentence, evidence and explanation linking back to the thesis; that the conclusion restates the thesis and leaves a final impression without just repeating; and that transitions connect ideas so the essay flows. Award marks across these parts.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Write or Left (Priebe), 1.1 Intro to Creative Writing (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Write_or_Left_(Priebe)/01:_Intro_to_Creative_Writing/1.01:_Intro_to_Creative_Writing)
      slug: "creative-writing",
      title: "Creative Writing",
      objective:
        "By the end of the topic, learners should be able to say what creative writing is, name its main genres, and follow the stages of the writing process to generate ideas and produce an original piece.",
      estimatedMinutes: 120,
      notes: `## What creative writing is

**Creative writing** is any writing that goes **outside the bounds** of ordinary professional, journalistic, academic or technical writing. It is marked by an emphasis on **narrative craft**, **character development** and the use of **literary techniques** — writing in an **original style** rather than copying a set form.

Both **fiction** and **nonfiction** can be creative.

## Genres (forms) of creative writing

| Genre | Examples |
| --- | --- |
| Fiction | novels, short stories |
| Poetry | poems |
| Creative nonfiction | biographies, feature stories |
| Drama | screenplays (screenwriting), plays (playwriting) |

In class, creative writing courses usually divide into **fiction** and **poetry**, writing in an original style rather than imitating existing genres.

## The writing process

Creative writing is produced in **stages**, not in one sitting:

1. **Brainstorming** — gather ideas freely.
2. **Drafting** — write a first version without worrying about perfection.
3. **Revising** — reshape content, order and ideas.
4. **Editing** — fix sentences, word choice and grammar.
5. **Proofreading** — correct spelling and small errors.

## The snowflake method (outlining a story)

- **Start** by writing a **summary of the story in one paragraph**.
- Then **expand each sentence** of that paragraph into more detail.
- Keep expanding, so the story grows outward from a simple core — like a snowflake.

## Generating ideas

Ideas for creative writing come from:

- **Reading widely** in the form you want to write.
- **Immersing** yourself in your subject.
- Drawing on **daily life** — conversations, media, dreams, photographs.
- Playing the **"What if…"** and **"I wonder…"** games to open up possibilities.

## Summary

- Creative writing = **original writing** emphasising narrative craft and literary technique.
- Main genres: **fiction, poetry, creative nonfiction, drama**.
- It is built in stages: **brainstorm → draft → revise → edit → proofread**.
- Outline with the **snowflake method** and generate ideas by **reading, observing and asking "what if"**.`,
      workedExample: `**Task.** Use the snowflake method and the writing process to begin a short story.

**Step 1 — one-paragraph summary (snowflake core).**
*A shy girl in a riverside town finds a lost notebook of poems; returning it to its owner, she discovers her own voice and enters the school poetry contest.*

**Step 2 — expand each sentence.**
- "A shy girl…" → name her Musu; she rarely speaks in class; she loves to read.
- "…finds a lost notebook…" → by the market jetty, rain-stained, full of unfinished poems.
- "…returning it…" → the owner is an old fisherman who once taught literature.
- "…discovers her own voice…" → he encourages her to finish one of his poems; she writes her first.
- "…enters the contest…" → she reads aloud, nervous but proud.

**Step 3 — move through the process.** Brainstorm more details, write a rough **draft**, then **revise** the order and ideas, **edit** the sentences, and **proofread** spelling.

**Why it works:** the story grows outward from a simple one-paragraph core (snowflake method) and is produced through the writing-process stages, showing creative writing as original, crafted work rather than a single quick attempt.`,
      quiz: [
        {
          prompt: "Creative writing goes outside the bounds of ordinary professional, journalistic, academic or…",
          options: ["technical writing", "spelling", "the alphabet", "punctuation"],
          correctIndex: 0,
          explanation: "It is distinct from technical and other ordinary forms.",
        },
        {
          prompt: "Creative writing emphasises narrative craft, character development and…",
          options: ["literary techniques", "mathematics", "footnotes", "bibliographies"],
          correctIndex: 0,
          explanation: "Literary technique is central to creative writing.",
        },
        {
          prompt: "Which is a genre of creative writing?",
          options: ["poetry", "a lab report", "a bus timetable", "a receipt"],
          correctIndex: 0,
          explanation: "Poetry is a core creative-writing genre.",
        },
        {
          prompt: "Novels and short stories belong to the genre of…",
          options: ["fiction", "drama", "poetry", "technical writing"],
          correctIndex: 0,
          explanation: "Novels and short stories are fiction.",
        },
        {
          prompt: "Screenwriting and playwriting belong to…",
          options: ["drama", "poetry", "fiction", "nonfiction only"],
          correctIndex: 0,
          explanation: "Scripts for screen and stage are drama.",
        },
        {
          prompt: "Biographies and feature stories are examples of…",
          options: ["creative nonfiction", "fiction", "poetry", "drama"],
          correctIndex: 0,
          explanation: "They are creative nonfiction.",
        },
        {
          prompt: "Can nonfiction ever be creative writing?",
          options: ["Yes — creative nonfiction exists", "No, only fiction counts", "Only poetry counts", "Only drama counts"],
          correctIndex: 0,
          explanation: "Both fiction and nonfiction can be creative.",
        },
        {
          prompt: "The first stage of the writing process is…",
          options: ["brainstorming", "proofreading", "publishing", "editing"],
          correctIndex: 0,
          explanation: "Gather ideas first.",
        },
        {
          prompt: "Writing a first rough version is called…",
          options: ["drafting", "revising", "proofreading", "brainstorming"],
          correctIndex: 0,
          explanation: "The draft is the first full version.",
        },
        {
          prompt: "Reshaping content, order and ideas is called…",
          options: ["revising", "proofreading", "brainstorming", "drafting"],
          correctIndex: 0,
          explanation: "Revision reworks the content.",
        },
        {
          prompt: "Fixing sentences, word choice and grammar is called…",
          options: ["editing", "brainstorming", "drafting", "outlining"],
          correctIndex: 0,
          explanation: "Editing tightens the language.",
        },
        {
          prompt: "Correcting spelling and small errors at the end is called…",
          options: ["proofreading", "drafting", "brainstorming", "revising"],
          correctIndex: 0,
          explanation: "Proofreading is the final clean-up.",
        },
        {
          prompt: "The snowflake method starts by writing a…",
          options: ["one-paragraph summary of the story", "full final draft", "bibliography", "title page"],
          correctIndex: 0,
          explanation: "Begin with a one-paragraph summary, then expand.",
        },
        {
          prompt: "In the snowflake method, after the one-paragraph summary you…",
          options: ["expand each sentence into more detail", "delete it", "translate it", "publish it"],
          correctIndex: 0,
          explanation: "Each sentence grows outward with detail.",
        },
        {
          prompt: "A good way to get ideas for creative writing is to…",
          options: ["read widely in the form you want to write", "avoid all reading", "copy a classmate", "skip planning"],
          correctIndex: 0,
          explanation: "Wide reading feeds ideas.",
        },
        {
          prompt: "The 'What if…' and 'I wonder…' games are used to…",
          options: ["generate ideas", "mark spelling", "count pages", "format margins"],
          correctIndex: 0,
          explanation: "They open up imaginative possibilities.",
        },
        {
          prompt: "Creative writing courses in school usually divide into…",
          options: ["fiction and poetry", "maths and science", "reading and listening", "copying and dictation"],
          correctIndex: 0,
          explanation: "Typically fiction and poetry strands.",
        },
        {
          prompt: "Writing in an original style means…",
          options: ["not simply imitating an existing genre", "copying a model exactly", "using only technical terms", "avoiding all planning"],
          correctIndex: 0,
          explanation: "Originality is a mark of creative writing.",
        },
        {
          prompt: "Dreams, conversations and photographs can serve as…",
          options: ["sources of ideas", "grammar rules", "punctuation marks", "page numbers"],
          correctIndex: 0,
          explanation: "Daily life is a source of creative ideas.",
        },
        {
          prompt: "Producing creative writing in stages shows that good writing is usually…",
          options: ["rewritten and refined, not done in one sitting", "finished in the first draft", "never revised", "copied"],
          correctIndex: 0,
          explanation: "The process involves drafting then revising.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define creative writing in your own words.",
          answerKey:
            "Writing that goes beyond ordinary professional/journalistic/academic/technical forms, emphasising narrative craft, character development and literary technique, written in an original style. Award marks for these ideas.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which list correctly matches genres of creative writing?",
          options: [
            "Fiction: short stories; Poetry: poems; Drama: plays",
            "Fiction: lab reports; Poetry: receipts; Drama: timetables",
            "Fiction: poems; Poetry: plays; Drama: novels",
            "All of these are the same genre",
          ],
          correctIndex: 0,
          answerKey: "Fiction = novels/short stories; poetry = poems; drama = plays/screenplays; creative nonfiction = biographies.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List, in order, the five stages of the writing process.",
          answerKey:
            "Brainstorming, drafting, revising, editing, proofreading. Award a mark for correct order and the stages.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the snowflake method of outlining a story.",
          answerKey:
            "Start by writing a one-paragraph summary of the story, then expand each sentence into more detail, continuing to grow the story outward from a simple core. Award marks for the core idea and the expansion.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how you would write an original short story or poem. Explain what creative writing is, which genre you choose, how you would generate ideas, and how you would move through the stages of the writing process.",
          answerKey:
            "A strong answer defines creative writing (original, craft-focused), names a genre (fiction/poetry/creative nonfiction/drama), explains idea-generation (reading widely, observing daily life, 'what if' questions), and walks through brainstorming, drafting, revising, editing and proofreading (optionally the snowflake method). Award marks across these.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Rhetoric: What, Why and How, 15.15 Verb Tenses (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Rhetoric_-_What_Why_and_How/15:_Grammar/15.15:_Verb_Tenses)
      slug: "review-verb-usage",
      title: "Review of Verb Usage: Principal Parts and Tenses",
      objective:
        "By the end of the topic, learners should be able to name the principal parts of a verb and form and use the simple (present, past, future) and perfect (present, past, future) tenses correctly.",
      estimatedMinutes: 120,
      notes: `## Tense

**Tense** is the form a verb takes to show **time** — whether an action is in the **present, past or future**.

## Principal parts of a verb

Every main verb has three **principal parts**, and all tenses are built from them:

| Principal part | Example (regular) | Example (irregular) |
| --- | --- | --- |
| Present (base) | walk | go |
| Past | walked | went |
| Past participle (used with *have*) | walked | gone |

- **Regular verbs** form the past and the past participle the **same** way, by adding **-d / -ed** (talk → talked → talked).
- **Irregular verbs** change their spelling (go → went → gone; eat → ate → eaten).

## The simple tenses

| Tense | How to form | Example |
| --- | --- | --- |
| Simple present | base verb | I **learn** |
| Simple past | base + -ed (or irregular) | I **learned** |
| Simple future | *will* + base | I **will learn** |

- **Simple present** — an action done now or regularly: *She studies every evening.*
- **Simple past** — a finished action: *She studied last night.*
- **Simple future** — an action still to come: *She will study tomorrow.*

## The perfect tenses

The **perfect tenses** show an action **completed in relation to another time**. They are formed with the auxiliary **have** + the **past participle**.

| Tense | How to form | Example |
| --- | --- | --- |
| Present perfect | has / have + past participle | I **have learned** |
| Past perfect | had + past participle | I **had learned** |
| Future perfect | will have + past participle | I **will have learned** |

- **Present perfect** — an action begun in the past and connected to now: *She has finished her homework.*
- **Past perfect** — an action completed **before another past action**: *She had finished before the bell rang.*
- **Future perfect** — an action that will be completed **by a future time**: *By Friday she will have finished the book.*

## Summary

- A verb has three **principal parts**: present, past, past participle.
- **Simple tenses:** present (base), past (-ed/irregular), future (will + base).
- **Perfect tenses:** have + past participle — present (has/have), past (had), future (will have).
- Perfect tenses show an action **completed relative to another point in time**.`,
      workedExample: `**Task.** Put the verb *write* (irregular: write / wrote / written) into all six tenses in the first person.

**Step 1 — principal parts.** present = *write*; past = *wrote*; past participle = *written*.

**Step 2 — simple tenses.**
- Simple present: *I write a letter each week.*
- Simple past: *I wrote a letter yesterday.*
- Simple future: *I will write a letter tomorrow.*

**Step 3 — perfect tenses (have + past participle 'written').**
- Present perfect: *I have written three letters this term.*
- Past perfect: *I had written the letter before the post office closed.*
- Future perfect: *By June I will have written ten letters.*

**Answer check:** the simple tenses use the base, the past, and 'will' + base; the perfect tenses all use a form of *have* (have / had / will have) with the past participle *written*. The past perfect shows one past action completed before another, and the future perfect shows completion by a future time.`,
      quiz: [
        {
          prompt: "Tense shows the ___ of a verb's action.",
          options: ["time", "colour", "length", "spelling"],
          correctIndex: 0,
          explanation: "Tense expresses present, past or future time.",
        },
        {
          prompt: "How many principal parts does a main verb have?",
          options: ["three", "two", "four", "six"],
          correctIndex: 0,
          explanation: "Present, past, and past participle.",
        },
        {
          prompt: "The three principal parts are present, past and…",
          options: ["past participle", "future", "gerund", "infinitive"],
          correctIndex: 0,
          explanation: "Past participle is the third principal part.",
        },
        {
          prompt: "Regular verbs form the past tense by adding…",
          options: ["-d / -ed", "-ing", "-s", "-ly"],
          correctIndex: 0,
          explanation: "e.g. walk → walked.",
        },
        {
          prompt: "Which is an irregular verb?",
          options: ["go (went, gone)", "walk (walked, walked)", "talk (talked, talked)", "play (played, played)"],
          correctIndex: 0,
          explanation: "'go' changes form irregularly.",
        },
        {
          prompt: "The simple present of 'learn' (first person) is…",
          options: ["I learn", "I learned", "I will learn", "I have learned"],
          correctIndex: 0,
          explanation: "Simple present uses the base form.",
        },
        {
          prompt: "The simple past of 'learn' is…",
          options: ["I learned", "I learn", "I will learn", "I had learned"],
          correctIndex: 0,
          explanation: "base + -ed = learned.",
        },
        {
          prompt: "The simple future is formed with…",
          options: ["will + base verb", "had + participle", "has + participle", "-ing"],
          correctIndex: 0,
          explanation: "e.g. I will learn.",
        },
        {
          prompt: "Perfect tenses are formed with the auxiliary verb…",
          options: ["have", "do", "be", "can"],
          correctIndex: 0,
          explanation: "have/has/had + past participle.",
        },
        {
          prompt: "The present perfect of 'learn' is…",
          options: ["I have learned", "I learned", "I will learn", "I learn"],
          correctIndex: 0,
          explanation: "has/have + past participle.",
        },
        {
          prompt: "The past perfect of 'learn' is…",
          options: ["I had learned", "I have learned", "I will have learned", "I learn"],
          correctIndex: 0,
          explanation: "had + past participle.",
        },
        {
          prompt: "The future perfect of 'learn' is…",
          options: ["I will have learned", "I had learned", "I have learned", "I learned"],
          correctIndex: 0,
          explanation: "will have + past participle.",
        },
        {
          prompt: "Which sentence is in the present perfect?",
          options: ["She has finished her homework.", "She finished her homework.", "She will finish her homework.", "She finishes her homework."],
          correctIndex: 0,
          explanation: "has + past participle = present perfect.",
        },
        {
          prompt: "The past perfect shows an action completed…",
          options: ["before another past action", "in the future", "right now", "never"],
          correctIndex: 0,
          explanation: "e.g. She had finished before the bell rang.",
        },
        {
          prompt: "'By Friday she will have finished the book' is in the…",
          options: ["future perfect", "simple future", "present perfect", "past perfect"],
          correctIndex: 0,
          explanation: "will have + past participle, completed by a future time.",
        },
        {
          prompt: "The past participle is the form used with…",
          options: ["have", "will", "do", "can"],
          correctIndex: 0,
          explanation: "The perfect tenses use have + past participle.",
        },
        {
          prompt: "For regular verbs, the past and the past participle are…",
          options: ["the same (-ed)", "always different", "both -ing", "both -s"],
          correctIndex: 0,
          explanation: "talk → talked → talked.",
        },
        {
          prompt: "Which is the correct past participle of 'eat'?",
          options: ["eaten", "ate", "eated", "eating"],
          correctIndex: 0,
          explanation: "eat / ate / eaten (irregular).",
        },
        {
          prompt: "'I will learn tomorrow' is in the…",
          options: ["simple future", "present perfect", "past perfect", "simple past"],
          correctIndex: 0,
          explanation: "will + base = simple future.",
        },
        {
          prompt: "Which tense best shows an action still connected to the present moment?",
          options: ["present perfect (She has arrived)", "simple past (She arrived)", "simple future", "past perfect"],
          correctIndex: 0,
          explanation: "Present perfect links a past action to now.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three principal parts of a verb and give them for the verb 'speak'.",
          answerKey:
            "Present (base), past, past participle. For 'speak': speak / spoke / spoken. Award a mark for naming the three parts and a mark for the correct forms.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is in the past perfect tense?",
          options: [
            "She had eaten before the guests arrived.",
            "She eats before the guests arrive.",
            "She will eat before the guests arrive.",
            "She has eaten with the guests.",
          ],
          correctIndex: 0,
          answerKey: "'had' + past participle 'eaten' = past perfect, showing one past action completed before another.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Write the verb 'go' in the simple past, present perfect and future perfect (first person).",
          answerKey:
            "Simple past: I went. Present perfect: I have gone. Future perfect: I will have gone. Award a mark each (allow one for any one error).",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "How are the perfect tenses formed, and what do they show?",
          answerKey:
            "Formed with the auxiliary have (have/has for present, had for past, will have for future) + the past participle; they show an action completed in relation to another point in time. Award marks for the formation and the meaning.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the simple and perfect tenses of the verb. Describe how each of the six tenses (simple present, simple past, simple future, present perfect, past perfect, future perfect) is formed, and give a sentence for each.",
          answerKey:
            "A strong answer explains the three principal parts; forms the simple tenses (base; base + -ed / irregular; will + base) and the perfect tenses (have/has, had, will have + past participle); and gives a correct example sentence for each of the six tenses. Award marks across the six tenses and their formation.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Public Speaking (Lumen Learning), 6: Organizing and Outlining Your Speech (https://socialsci.libretexts.org/Bookshelves/Communication/Public_Speaking/Public_Speaking_(Lumen_Learning)/06:_Organizing_and_Outlining_Your_Speech)
      slug: "speech-development-organizing",
      title: "Speech Development: Organizing and Outlining a Speech",
      objective:
        "By the end of the topic, learners should be able to organise a speech into an introduction, body and conclusion, arrange main points in a clear pattern, use transitions, and build a preparation outline and a speaking outline.",
      estimatedMinutes: 120,
      notes: `## Why organising a speech matters

A well-organised speech keeps the **audience engaged** and helps them **remember** the message. Facts given in a **random order** confuse listeners and lose their attention. Good organisation lets the speaker deliver a **clear, confident** message.

## The three parts of a speech

| Part | Share of the speech | Job |
| --- | --- | --- |
| Introduction | about 10% | grab attention, state the central idea, preview main points |
| Body | about 80% | develop the main points with support |
| Conclusion | about 10% | summarise and leave a final impression |

- A **long** introduction leaves too little time for the body, so keep it short.

## Central idea and main points

- **Central idea (thesis)** — the one main message of the whole speech.
- **Main points** — the few key ideas (usually 2–4) that develop the central idea in the body.

## Patterns for arranging main points

- **Topical** — by categories or sub-topics.
- **Chronological** — in time order (steps, history).
- **Spatial** — by physical arrangement or location.

## Transitions

**Transitions** are words and phrases that move the audience from one point to the next (*next, in addition, on the other hand, finally*). They signal the structure so listeners can follow.

## Two kinds of outline

| Outline | Purpose | Detail |
| --- | --- | --- |
| Preparation (full-sentence) outline | plan everything you intend to say | full sentences; central idea, labelled introduction, main points, conclusion, transitions, bibliography |
| Speaking outline | to speak from | key words and phrases only (far less detail) |

- The outline **evolves**: begin with a detailed **preparation outline**, then cut it down to a **speaking outline** of key words you glance at while speaking.

## What a good outline does for you

- Arranges material in your chosen **pattern**.
- Shows **imbalances** in the length or depth of main points.
- Reveals **gaps** — missing research, statistics or examples.
- Lets you check the **flow** and order of points.
- Builds **confidence** for delivery.

## Summary

- Organise a speech into **introduction (10%) + body (80%) + conclusion (10%)**.
- State a **central idea** and develop **2–4 main points** in a clear **pattern** (topical, chronological, spatial).
- Use **transitions** to connect points.
- Plan with a **preparation (full-sentence) outline**, then speak from a **speaking outline** of key words.`,
      workedExample: `**Task.** Organise and outline a 5-minute speech on "Keeping our school clean."

**Step 1 — central idea.** *Everyone at our school can help keep it clean by taking three simple steps.*

**Step 2 — choose a pattern and main points (topical).**
1. Use the bins.
2. Join the weekly clean-up.
3. Teach younger pupils.

**Step 3 — preparation (full-sentence) outline.**
- **Introduction (≈10%)** — attention-getter (a photo of litter); central idea; preview the three points.
- **Body (≈80%)** — Point 1 (bins: evidence, example) → *transition: "In addition…"* → Point 2 (clean-up: evidence) → *transition: "Finally…"* → Point 3 (teaching younger pupils).
- **Conclusion (≈10%)** — summarise the three steps; final appeal.
- Add a **bibliography** of any sources.

**Step 4 — speaking outline.** Reduce to key words: *Litter photo / 3 steps — BINS / CLEAN-UP / TEACH / "a clean school is our pride."*

**Why it works:** the speech follows the 10/80/10 structure, uses a clear topical pattern with 2–4 main points, connects them with transitions, and moves from a full preparation outline to a short speaking outline — exactly how a speech is developed and organised.`,
      quiz: [
        {
          prompt: "A well-organised speech mainly helps the audience to…",
          options: ["stay engaged and remember the message", "fall asleep", "leave early", "ignore the speaker"],
          correctIndex: 0,
          explanation: "Organisation aids engagement and memory.",
        },
        {
          prompt: "Facts presented in a random order tend to…",
          options: ["confuse listeners", "help memory", "shorten the speech", "add transitions"],
          correctIndex: 0,
          explanation: "Random order confuses and loses the audience.",
        },
        {
          prompt: "The three parts of a speech are introduction, body and…",
          options: ["conclusion", "bibliography", "thesis", "transition"],
          correctIndex: 0,
          explanation: "Introduction, body, conclusion.",
        },
        {
          prompt: "About what share of a speech should the body take?",
          options: ["80%", "10%", "50%", "100%"],
          correctIndex: 0,
          explanation: "Body ≈80%, introduction and conclusion ≈10% each.",
        },
        {
          prompt: "The introduction and conclusion should each be about…",
          options: ["10% of the speech", "40%", "60%", "90%"],
          correctIndex: 0,
          explanation: "Roughly 10% each, leaving 80% for the body.",
        },
        {
          prompt: "A long introduction is a problem because it…",
          options: ["leaves too little time for the main points", "is always boring", "needs no transitions", "adds a bibliography"],
          correctIndex: 0,
          explanation: "It eats into the body's time.",
        },
        {
          prompt: "The one main message of the whole speech is the…",
          options: ["central idea", "transition", "bibliography", "speaking outline"],
          correctIndex: 0,
          explanation: "The central idea (thesis) guides the speech.",
        },
        {
          prompt: "The key ideas that develop the central idea in the body are the…",
          options: ["main points", "page numbers", "footnotes", "fonts"],
          correctIndex: 0,
          explanation: "Usually 2–4 main points.",
        },
        {
          prompt: "Arranging main points by time order is the ___ pattern.",
          options: ["chronological", "spatial", "topical", "random"],
          correctIndex: 0,
          explanation: "Chronological = time order.",
        },
        {
          prompt: "Arranging points by physical location is the ___ pattern.",
          options: ["spatial", "chronological", "topical", "alphabetical"],
          correctIndex: 0,
          explanation: "Spatial = by place/arrangement.",
        },
        {
          prompt: "Arranging points by categories or sub-topics is the ___ pattern.",
          options: ["topical", "spatial", "chronological", "random"],
          correctIndex: 0,
          explanation: "Topical = by categories.",
        },
        {
          prompt: "Words like 'next', 'in addition' and 'finally' in a speech are…",
          options: ["transitions", "main points", "bibliographies", "titles"],
          correctIndex: 0,
          explanation: "Transitions link points for listeners.",
        },
        {
          prompt: "The outline that contains full sentences and everything you plan to say is the…",
          options: ["preparation outline", "speaking outline", "bibliography", "title page"],
          correctIndex: 0,
          explanation: "The full-sentence preparation outline is detailed.",
        },
        {
          prompt: "The outline you actually speak from uses…",
          options: ["key words and phrases only", "full sentences only", "no words", "the whole essay"],
          correctIndex: 0,
          explanation: "The speaking outline is brief key words.",
        },
        {
          prompt: "An outline helps reveal ___ in the length or depth of main points.",
          options: ["imbalances", "spelling", "fonts", "page colour"],
          correctIndex: 0,
          explanation: "It shows which points need more or less.",
        },
        {
          prompt: "An outline can also reveal ___ such as missing research or examples.",
          options: ["gaps", "transitions", "titles", "margins"],
          correctIndex: 0,
          explanation: "It exposes missing support.",
        },
        {
          prompt: "A sensible number of main points for a speech is usually…",
          options: ["2 to 4", "10 to 12", "0", "20"],
          correctIndex: 0,
          explanation: "A few clear main points work best.",
        },
        {
          prompt: "The job of the introduction is to grab attention, state the central idea and…",
          options: ["preview the main points", "give the bibliography", "end the speech", "list sources"],
          correctIndex: 0,
          explanation: "It previews what is to come.",
        },
        {
          prompt: "The conclusion should summarise and…",
          options: ["leave a final impression", "add a new main point", "introduce the topic", "read the outline aloud"],
          correctIndex: 0,
          explanation: "It wraps up and leaves a lasting impression.",
        },
        {
          prompt: "A clear outline mainly builds the speaker's…",
          options: ["confidence for delivery", "handwriting", "vocabulary size", "height"],
          correctIndex: 0,
          explanation: "Logical structure gives confidence.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the usual balance of a speech?",
          options: [
            "Introduction ~10%, body ~80%, conclusion ~10%",
            "Introduction ~40%, body ~40%, conclusion ~20%",
            "Introduction ~50%, body ~25%, conclusion ~25%",
            "Introduction ~80%, body ~10%, conclusion ~10%",
          ],
          correctIndex: 0,
          answerKey: "Introduction and conclusion are about 10% each; the body carries about 80%.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three parts of a speech and state the job of each.",
          answerKey:
            "Introduction — grab attention, state the central idea, preview the main points; Body — develop the main points with support; Conclusion — summarise and leave a final impression. Award marks across the three.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name three patterns for arranging the main points of a speech.",
          answerKey:
            "Topical (by categories), chronological (time order), spatial (by physical location/arrangement). Award a mark each.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What is the difference between a preparation outline and a speaking outline?",
          answerKey:
            "A preparation (full-sentence) outline plans everything you intend to say in full sentences, with central idea, labelled parts, transitions and bibliography; a speaking outline is far briefer, using only key words and phrases to speak from. Award marks for both.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how to develop and organise a speech. Cover why organisation matters, the three parts and their balance, choosing and arranging main points, using transitions, and moving from a preparation outline to a speaking outline.",
          answerKey:
            "A strong answer explains that organisation keeps the audience engaged and aids memory; describes the introduction/body/conclusion (10/80/10) and their jobs; explains stating a central idea and arranging 2–4 main points by a pattern (topical, chronological, spatial); the use of transitions; and the move from a detailed preparation outline to a key-word speaking outline. Award marks across these points.",
          marks: 5,
        },
      ],
    },
  ],
};
