import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 11,
// Semester One, Period III: Grammar — Verb Usage Part 3. CONTENTS: (1) Verb
// usage Part 3 — using the past continuous, present simple and past simple;
// (2) writing essays (selecting topics, thesis statement, organization, unity,
// coherence, mechanics); (3) dictionary skills (alphabetical order, guide
// words, finding meanings, parts of speech). Each CONTENTS item is one topic.
export const englishLanguageG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "Verb Usage — Tenses in Use, Essays and Dictionary Skills",
  summary:
    "Period III of the MoE Grade 11 English syllabus. Learners use the present simple, past simple and past continuous accurately, including the interrupted-action pattern, then plan and write a unified, coherent essay built on a clear thesis statement, and use a dictionary effectively to find spellings, meanings and parts of speech.",
  topics: [
    {
      // source: LibreTexts — San Jacinto College, ESOL Advanced Grammar, 1.02 Simple Past and Past Progressive: Usage and Practice (https://human.libretexts.org/Courses/San_Jacinto_College/ESOL_Advanced_Grammar/01%3A_Present_Past_and_Future_Tenses/1.02%3A_Simple_Past_and_Past_Progressive-Usage_and_Practice)
      slug: "past-and-continuous-tenses-in-use",
      title: "Using the Present Simple, Past Simple and Past Continuous",
      objective:
        "By the end of the topic, learners should be able to use the present simple for habits and truths, the simple past for completed actions, and the past continuous for actions in progress, and combine the past continuous with the simple past in the interrupted-action pattern.",
      estimatedMinutes: 150,
      notes: `## Three tenses, three jobs

| Tense | Form | Main use | Example |
| --- | --- | --- | --- |
| Present simple | base (+ -s) | habits, routines, general truths | She **walks** to school. |
| Simple past | past form (-ed / irregular) | completed past actions | She **walked** to school. |
| Past continuous | was/were + -ing | an action in progress in the past | She **was walking** to school. |

## The present simple

Use the **present simple** for actions that happen **regularly** and for **general truths**:

- *We **wear** uniforms on weekdays.* (routine)
- *Water **boils** at 100 °C.* (general truth)

Remember the third-person **-s**: *He plays; she watches; it carries.*

## The simple past

Use the **simple past** for actions that were **completed** in the past — single events, past habits, and a sequence of finished actions:

- *I **visited** Kakata last summer.*
- *She **finished** her homework, **packed** her bag and **left**.*

## The past continuous (past progressive)

Use the **past continuous** for an action that was **ongoing at a particular past moment**, for two **parallel** past actions, and to set the **background scene** in a story:

- *At 8 p.m. I **was watching** the news.* (ongoing at that moment)
- *While my brother **was driving**, I **was reading** the map.* (two parallel actions)

## The interrupted-action pattern

A very common pattern combines the two past tenses. The **longer, ongoing** action takes the **past continuous**; the **shorter action that interrupts** it takes the **simple past**. The clauses are often joined by **when** or **while**:

- *I **was cooking** when the phone **rang**.* (cooking = longer/background; rang = interrupting)
- *When you **arrived**, we **were writing** you a letter.*

\`\`\`svg Interrupted action on a timeline
<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <line x1="30" y1="60" x2="410" y2="60" stroke="#8a5833" stroke-width="2"/>
  <polygon points="410,60 400,55 400,65" fill="#8a5833"/>
  <path d="M70 60 Q 210 20 350 60" fill="none" stroke="#b5651d" stroke-width="3"/>
  <text x="210" y="30" text-anchor="middle" font-size="12">was cooking (past continuous — ongoing)</text>
  <line x1="250" y1="45" x2="250" y2="75" stroke="#5a3a1a" stroke-width="3"/>
  <text x="250" y="92" text-anchor="middle" font-size="12">phone rang</text>
  <text x="250" y="108" text-anchor="middle" font-size="11" fill="#6a5a48">(simple past — interruption)</text>
</svg>
\`\`\`

**Comma rule:** when the time clause comes **first**, put a **comma** after it: *While I was reading, the lights went out.*

## Summary

- **Present simple** → habits and truths; **simple past** → completed actions; **past continuous** → actions in progress.
- Interrupted action: **past continuous** (longer) + **simple past** (interrupting), joined by *when / while*.
- If the *when/while* clause starts the sentence, follow it with a comma.`,
      workedExample: `**Task.** Choose the correct tense for each blank and explain.

1. *Every morning she ______ (drink) tea.*
2. *Yesterday the team ______ (win) the match.*
3. *At six o'clock we ______ (eat) dinner.*
4. *I ______ (study) when the lights ______ (go) out.*

**Answers**

1. *drinks* — **present simple**: 'every morning' signals a habit; third-person -s.
2. *won* — **simple past**: 'yesterday' signals a completed past action (irregular verb).
3. *were eating* — **past continuous**: an action in progress at a stated past moment.
4. *was studying … went* — the **interrupted-action pattern**: studying was the longer, ongoing action (past continuous); 'went out' interrupted it (simple past).

**Rule applied:** match the tense to the job — habit (present simple), completed action (simple past), action in progress (past continuous) — and use the past-continuous-plus-simple-past pattern for interruptions.`,
      quiz: [
        {
          prompt: "The present simple is used mainly for…",
          options: ["habits and general truths", "actions in progress", "completed past actions", "future plans only"],
          correctIndex: 0,
          explanation: "The present simple covers habits, routines and general truths.",
        },
        {
          prompt: "The simple past is used for actions that were…",
          options: ["completed in the past", "in progress now", "yet to happen", "always true"],
          correctIndex: 0,
          explanation: "The simple past marks completed past actions.",
        },
        {
          prompt: "The past continuous is formed with…",
          options: ["was/were + -ing", "have + past participle", "will + base", "did + base"],
          correctIndex: 0,
          explanation: "Past continuous = was/were + the -ing form.",
        },
        {
          prompt: "Which sentence uses the past continuous?",
          options: ["At 8 p.m. I was watching the news.", "I watched the news.", "I watch the news.", "I will watch the news."],
          correctIndex: 0,
          explanation: "'was watching' shows an action in progress at a past moment.",
        },
        {
          prompt: "Choose the correct verb: 'Water ___ at 100 °C.'",
          options: ["boils", "boiled", "was boiling", "will boil"],
          correctIndex: 0,
          explanation: "A general truth takes the present simple 'boils'.",
        },
        {
          prompt: "Choose the correct verb: 'Last summer I ___ Kakata.'",
          options: ["visited", "visit", "was visiting", "visits"],
          correctIndex: 0,
          explanation: "A completed past action needs the simple past 'visited'.",
        },
        {
          prompt: "In the interrupted-action pattern, the longer ongoing action uses the…",
          options: ["past continuous", "simple past", "present simple", "future"],
          correctIndex: 0,
          explanation: "The ongoing/background action takes the past continuous.",
        },
        {
          prompt: "In the interrupted-action pattern, the shorter interrupting action uses the…",
          options: ["simple past", "past continuous", "present simple", "present continuous"],
          correctIndex: 0,
          explanation: "The interrupting action takes the simple past.",
        },
        {
          prompt: "Complete: 'I was cooking when the phone ___.'",
          options: ["rang", "was ringing", "rings", "will ring"],
          correctIndex: 0,
          explanation: "The interruption takes the simple past 'rang'.",
        },
        {
          prompt: "Complete: 'When you arrived, we ___ a letter.'",
          options: ["were writing", "wrote", "write", "will write"],
          correctIndex: 0,
          explanation: "The ongoing action takes the past continuous 'were writing'.",
        },
        {
          prompt: "Which words often join the two clauses in an interrupted action?",
          options: ["when / while", "so / because", "and / but", "if / unless"],
          correctIndex: 0,
          explanation: "'When' and 'while' typically link the two past tenses.",
        },
        {
          prompt: "Which sentence shows two parallel past actions?",
          options: ["While he was driving, I was reading.", "He drove and I read.", "He drives while I read.", "He will drive while I read."],
          correctIndex: 0,
          explanation: "Two past continuous verbs show simultaneous ongoing actions.",
        },
        {
          prompt: "When the time clause comes first, it is followed by a…",
          options: ["comma", "semicolon", "full stop", "dash"],
          correctIndex: 0,
          explanation: "'While I was reading, the lights went out.' — comma after the first clause.",
        },
        {
          prompt: "Choose the correct verb: 'Every day the shop ___ at eight.'",
          options: ["opens", "opened", "was opening", "open"],
          correctIndex: 0,
          explanation: "A daily routine takes the present simple 'opens'.",
        },
        {
          prompt: "Which tense sets the background scene in a story?",
          options: ["past continuous", "present simple", "future", "future perfect"],
          correctIndex: 0,
          explanation: "The past continuous often sets the ongoing background of a narrative.",
        },
        {
          prompt: "Choose the correct verb: 'She finished, packed her bag and ___.'",
          options: ["left", "leaves", "was leaving", "will leave"],
          correctIndex: 0,
          explanation: "A sequence of completed past actions stays in the simple past: 'left'.",
        },
        {
          prompt: "Which sentence correctly uses the interrupted-action pattern?",
          options: ["They were playing when it started to rain.", "They played when it was starting to rain.", "They play when it rained.", "They were playing when it was raining harder each parallel."],
          correctIndex: 0,
          explanation: "Ongoing 'were playing' + interrupting 'started' is the correct pattern.",
        },
        {
          prompt: "Choose the correct verb: 'At that moment, the children ___ in the yard.'",
          options: ["were playing", "played", "play", "will play"],
          correctIndex: 0,
          explanation: "An action in progress at a stated past moment takes the past continuous.",
        },
        {
          prompt: "'He plays football' is which tense?",
          options: ["present simple", "past simple", "past continuous", "future"],
          correctIndex: 0,
          explanation: "'plays' (with -s) is the present simple.",
        },
        {
          prompt: "Which is correct? 'While the teacher ___, a bird flew in.'",
          options: ["was speaking", "spoke", "speaks", "will speak"],
          correctIndex: 0,
          explanation: "The ongoing background action takes the past continuous 'was speaking'.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Write one sentence in the present simple, one in the simple past, and one in the past continuous, using the verb 'read'.",
          answerKey:
            "Present simple e.g. 'She reads every night.'; simple past 'She read the notice.'; past continuous 'She was reading when I called.' Award a mark per correctly formed and used tense.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence correctly shows an interrupted action?",
          options: [
            "We were eating when the visitors arrived.",
            "We ate when the visitors were arriving.",
            "We eat when the visitors arrive.",
            "We were eating when the visitors were arriving suddenly.",
          ],
          correctIndex: 0,
          answerKey: "The ongoing action 'were eating' + the interrupting action 'arrived' (simple past) is the correct pattern.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Fill the blanks with the correct tense: 'I ___ (walk) home when it ___ (begin) to rain.'",
          answerKey:
            "'was walking' (past continuous, ongoing action) and 'began' (simple past, interruption). Award a mark for each correct form.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Add the comma where it is needed: 'While she was cooking the guests arrived.'",
          answerKey:
            "'While she was cooking, the guests arrived.' The comma follows the time clause when it comes first. Full marks for placing the comma correctly.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain when to use the present simple, the simple past and the past continuous, and describe the interrupted-action pattern. Give an example sentence for each of the three tenses and one showing the interrupted-action pattern.",
          answerKey:
            "A strong answer states: present simple for habits/truths, simple past for completed actions, past continuous for actions in progress; explains the interrupted-action pattern (longer action in past continuous, interruption in simple past, joined by when/while, comma if the time clause is first); and gives four correct examples. Award marks for the three uses, the pattern, and the examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Successful College Composition (Crowther et al.), 1.4 Writing Thesis Statements (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Successful_College_Composition_(Crowther_et_al.)/1:_Introduction_to_Writing/1.4:_Writing_Thesis_Statements)
      slug: "writing-essays",
      title: "Writing Essays: Topic, Thesis, Organization, Unity and Coherence",
      objective:
        "By the end of the topic, learners should be able to select and narrow a topic, write a clear thesis statement, organize an essay into introduction, body and conclusion, and give the essay unity and coherence with correct mechanics.",
      estimatedMinutes: 160,
      notes: `## Selecting and narrowing a topic

An essay develops **one** central idea. Choose a topic that is **not too broad**: narrow a wide subject to something you can cover well.

- Too broad: *Education.*
- Narrowed: *Why every senior high school should have a library.*

## The thesis statement

**Thesis statement** — a **single sentence**, usually at the **end of the introduction**, that states the essay's main point and previews how it is organized. A strong thesis is:

- **Arguable** — it states a point of view, not a plain fact.
- **Supportable** — it can be backed by evidence and reasons.
- **Specific** — it focuses on **one idea**, often naming **one to three points** that the body will develop.

Example: *"Compared to absolute divorce, no-fault divorce is less expensive, promotes fairer settlements, and reflects realistic views of marriage breakdown."* — the three underlined qualities forecast three body paragraphs.

The thesis is **not** the topic itself; it is your **claim about** the topic.

## Organizing the essay

\`\`\`svg Essay structure
<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="40" y="14" width="220" height="40" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="150" y="31" text-anchor="middle" font-size="12" font-weight="bold">Introduction</text>
  <text x="150" y="47" text-anchor="middle" font-size="10.5">ends with the thesis statement</text>
  <rect x="40" y="62" width="220" height="30" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="81" text-anchor="middle" font-size="11">Body 1 — point one + evidence</text>
  <rect x="40" y="98" width="220" height="30" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="117" text-anchor="middle" font-size="11">Body 2 — point two + evidence</text>
  <rect x="40" y="134" width="220" height="30" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="153" text-anchor="middle" font-size="11">Body 3 — point three + evidence</text>
  <rect x="40" y="170" width="220" height="34" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="150" y="191" text-anchor="middle" font-size="12" font-weight="bold">Conclusion</text>
</svg>
\`\`\`

- **Introduction** — introduces the topic and ends with the **thesis**.
- **Body paragraphs** — each develops **one** point from the thesis, with a topic sentence, evidence and explanation.
- **Conclusion** — restates the thesis in new words and closes the essay.

The **topic sentence** of each body paragraph should come out of the **thesis** and lead toward the conclusion.

## Unity and coherence

- **Unity** — every paragraph, and the whole essay, keeps to the **one** idea in the thesis. The thesis ties the body paragraphs together; each body paragraph reinforces the thesis.
- **Coherence** — the wording shows clearly how one idea leads to the next, **within** and **between** paragraphs. **Transitions** (*first, however, therefore, in addition*) make the essay flow.

## Mechanics

Before submitting, check the **mechanics**: spelling, punctuation, capitalization, and consistent verb tense. Errors here weaken an otherwise strong essay.

## Summary

- **Narrow** the topic; write an **arguable, specific thesis** (one idea, one to three points) at the end of the introduction.
- Organize into **introduction → body → conclusion**, each body paragraph developing one thesis point.
- Give the essay **unity** (stay on the thesis) and **coherence** (transitions and logical flow), then check the **mechanics**.`,
      workedExample: `**Task.** Plan an essay from a broad subject, showing thesis, organization, unity and coherence.

**Broad subject:** transport. **Narrowed topic:** why the town needs better public transport.

**Thesis (end of introduction):** *"Better public transport would benefit the town by cutting travel costs, easing traffic, and reducing pollution."* (one idea; three points)

**Organization:**
- **Body 1 — cutting travel costs:** topic sentence on cost, with evidence (shared buses are cheaper than private cars).
- **Body 2 — easing traffic:** topic sentence on congestion, with evidence (fewer cars on the road).
- **Body 3 — reducing pollution:** topic sentence on clean air, with evidence (fewer exhaust fumes).
- **Conclusion:** restates the thesis in new words.

**Unity:** every body paragraph develops one of the three points named in the thesis; nothing off-topic is included.

**Coherence:** transitions link the paragraphs — *First,* cost… *Second,* traffic… *Finally,* pollution… — and key terms (*public transport, the town*) recur.

**Rule applied:** the essay grows straight out of a specific thesis, each part reinforcing it, held together by transitions.`,
      quiz: [
        {
          prompt: "An essay develops how many central ideas?",
          options: ["one", "two", "three", "many"],
          correctIndex: 0,
          explanation: "An essay is built around one central idea, stated in the thesis.",
        },
        {
          prompt: "The first step in choosing a topic is often to…",
          options: ["narrow a broad subject", "write the conclusion", "list references", "count the words"],
          correctIndex: 0,
          explanation: "Narrow a wide subject to something you can cover well.",
        },
        {
          prompt: "A thesis statement is usually…",
          options: ["one sentence", "a whole paragraph", "the title", "a question with no answer"],
          correctIndex: 0,
          explanation: "The thesis is normally a single sentence.",
        },
        {
          prompt: "The thesis statement usually appears…",
          options: ["at the end of the introduction", "in the middle of the essay", "in the conclusion only", "in the title"],
          correctIndex: 0,
          explanation: "It typically comes at the end of the introduction.",
        },
        {
          prompt: "A strong thesis is arguable, supportable and…",
          options: ["specific", "vague", "very long", "unrelated to the body"],
          correctIndex: 0,
          explanation: "It focuses specifically on one idea, often naming one to three points.",
        },
        {
          prompt: "A thesis states…",
          options: ["a claim about the topic", "just the topic", "a random fact", "the reader's name"],
          correctIndex: 0,
          explanation: "The thesis is your interpretation or claim, not merely the topic.",
        },
        {
          prompt: "'Compared to X, Y is cheaper, fairer and more realistic.' The thesis forecasts…",
          options: ["three body paragraphs", "one body paragraph", "the conclusion only", "the title"],
          correctIndex: 0,
          explanation: "Its three points signal three body paragraphs.",
        },
        {
          prompt: "The introduction of an essay ends with the…",
          options: ["thesis statement", "conclusion", "first example", "bibliography"],
          correctIndex: 0,
          explanation: "The introduction leads to the thesis.",
        },
        {
          prompt: "Each body paragraph should develop…",
          options: ["one point from the thesis", "all points at once", "an unrelated idea", "the conclusion"],
          correctIndex: 0,
          explanation: "One body paragraph = one point from the thesis.",
        },
        {
          prompt: "The topic sentence of a body paragraph should come out of the…",
          options: ["thesis", "conclusion", "title", "reference list"],
          correctIndex: 0,
          explanation: "Body topic sentences flow from the thesis and lead to the conclusion.",
        },
        {
          prompt: "The conclusion should…",
          options: ["restate the thesis in new words", "add a brand-new argument", "list every source", "start the essay"],
          correctIndex: 0,
          explanation: "The conclusion restates the thesis and closes the essay.",
        },
        {
          prompt: "Unity in an essay means…",
          options: ["every part keeps to the thesis idea", "the essay is long", "each paragraph has a new topic", "the tense changes often"],
          correctIndex: 0,
          explanation: "Unity: the whole essay stays on the one thesis idea.",
        },
        {
          prompt: "The thesis creates unity by…",
          options: ["tying the body paragraphs together", "adding new topics", "hiding the main point", "listing definitions"],
          correctIndex: 0,
          explanation: "The thesis ties the points together; each body paragraph reinforces it.",
        },
        {
          prompt: "Coherence means the wording shows clearly how one idea…",
          options: ["leads to the next", "contradicts the next", "repeats exactly", "ends the essay"],
          correctIndex: 0,
          explanation: "Coherence is the clear, logical flow within and between paragraphs.",
        },
        {
          prompt: "Which device most helps coherence?",
          options: ["transitions", "long words", "many topics", "capital letters"],
          correctIndex: 0,
          explanation: "Transitional words and phrases make writing more coherent.",
        },
        {
          prompt: "Which is a transition that could open a body paragraph?",
          options: ["First,", "Football,", "Because.", "The."],
          correctIndex: 0,
          explanation: "'First,' signals sequence and links paragraphs.",
        },
        {
          prompt: "Which topic is best narrowed for an essay?",
          options: ["Why our school needs a library", "Education", "Life", "The world"],
          correctIndex: 0,
          explanation: "A narrowed topic can be covered well; the others are far too broad.",
        },
        {
          prompt: "'Mechanics' in essay writing refers to…",
          options: ["spelling, punctuation and capitalization", "the plot", "the number of paragraphs", "the title font"],
          correctIndex: 0,
          explanation: "Mechanics covers spelling, punctuation, capitalization and consistency.",
        },
        {
          prompt: "A fact like 'Water freezes at 0 °C' makes a weak thesis because it is…",
          options: ["not arguable", "too specific", "too short", "well organized"],
          correctIndex: 0,
          explanation: "A thesis must be arguable — a debatable point of view, not a plain fact.",
        },
        {
          prompt: "The three main parts of an essay are…",
          options: ["introduction, body, conclusion", "title, thesis, footnote", "topic, verb, object", "beginning, comma, end"],
          correctIndex: 0,
          explanation: "Essays are organized into introduction, body and conclusion.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three qualities of a strong thesis statement and say where in the essay the thesis usually appears.",
          answerKey:
            "Qualities: arguable, supportable, specific (focused on one idea, often one to three points). Location: at the end of the introduction. Award marks for the qualities and the location.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is the best thesis statement?",
          options: [
            "School uniforms benefit students by reducing distraction, saving money, and building unity.",
            "This essay is about school uniforms.",
            "School uniforms are clothes worn to school.",
            "Do you think uniforms are good?",
          ],
          correctIndex: 0,
          answerKey: "It is arguable and specific, naming three points to develop; the others announce, define or merely ask.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between unity and coherence in an essay.",
          answerKey:
            "Unity = every paragraph and the whole essay keep to the one idea in the thesis. Coherence = the wording shows clearly how ideas connect within and between paragraphs, using transitions and logical flow. Award a mark for each concept.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Narrow the broad subject 'sports' into a suitable essay topic and write a possible thesis for it.",
          answerKey:
            "Any reasonably narrowed topic (e.g. 'why schools should offer athletics') with an arguable, specific thesis naming one to three points. Award a mark for narrowing and a mark for a workable thesis.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Outline an essay on a topic of your choice. Give the narrowed topic, a clear thesis statement with its points, the topic sentence of each body paragraph, and explain how you will keep the essay unified and coherent.",
          answerKey:
            "Award marks for: a suitably narrowed topic; an arguable, specific thesis naming one to three points; body topic sentences that each develop one thesis point; a note that unity comes from staying on the thesis and coherence from transitions and logical order; and correct mechanics. Deduct where the outline strays from the thesis.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Evergreen Valley College, Integrated Reading and Writing, 4.1.2 How to Read a Dictionary Entry (https://human.libretexts.org/Courses/Evergreen_Valley_College/Integrated_Reading_and_Writing/04:_Finding_the_Right_Words_to_Write/4.01:_Navigating_the_Lexicon/4.1.02:_How_to_Read_a_Dictionary_Entry)
      slug: "dictionary-skills",
      title: "Dictionary Skills",
      objective:
        "By the end of the topic, learners should be able to find a word using alphabetical order and guide words, read a dictionary entry, and use it to check spelling, pronunciation, meaning and part of speech.",
      estimatedMinutes: 140,
      notes: `## Why use a dictionary

A **dictionary** lists words with their **spellings, pronunciations, meanings, parts of speech** and origins. Look up a new word **as soon as** you meet it; becoming comfortable with new vocabulary takes repeated use.

## Finding a word: alphabetical order

Dictionary words (**entries** or **headwords**) are arranged in **alphabetical order** — a, b, c … To find a word, compare it letter by letter:

- First letters decide the order: *bat* comes before *cat.*
- If the first letters match, compare the **second**, then the **third**, and so on: *car* before *cat* before *cup*; *back* before *bag* before *bat.*

## Guide words

At the **top of every dictionary page** are two **guide words**:

- The **left guide word** is the **first** entry on that page.
- The **right guide word** is the **last** entry on that page.

Any word that falls **alphabetically between** the two guide words is on that page. Guide words let you find the right page quickly without reading every entry. Example: if the guide words are **market — mast**, then *marsh* is on that page (it falls between them), but *maze* is not.

## Reading a dictionary entry

A dictionary **entry** has several parts:

| Part | What it tells you |
| --- | --- |
| Headword (entry word) | the word and its correct **spelling**, often split into syllables |
| Pronunciation | how to say it; a stress mark shows the syllable said with most force |
| Part of speech | its grammatical class: *n.* noun, *v.* verb, *adj.* adjective, *adv.* adverb |
| Definition(s) | the **meaning**; a word may have several numbered meanings |
| Example | a sentence or phrase showing the word **in use** |
| Etymology | the word's **origin** or history |

## Finding the right meaning

A word may have **several meanings**. To pick the right one:

1. Note the **part of speech** you need (is your word a noun or a verb here?).
2. Read the numbered definitions and choose the one that fits your **sentence/context**.
3. Check the **example** to confirm the fit.

For instance, *bank* can be a noun meaning a place for money **or** a noun meaning the side of a river — context decides which.

## Summary

- Entries are in **alphabetical order**; compare words letter by letter.
- **Guide words** at the top of a page show its first and last entries — a word between them is on that page.
- An entry gives **spelling, pronunciation, part of speech, meanings, an example and origin**; use the part of speech and context to choose the right meaning.`,
      workedExample: `**Task.** Use dictionary skills to answer each question.

1. Put in dictionary order: *pencil, peace, people, pear.*
2. A page has guide words **paint — pardon.** Which of these are on it: *palm, parrot, panic*?
3. In "They live on the river bank," which dictionary meaning of *bank* is needed, and what part of speech is it?

**Answers**

1. Compare letter by letter after *pe-/pea-/pen-/peo-*: *pea**c**e, pea**r**, pen**c**il, peo**p**le* →
   **peace, pear, pencil, people.**
2. Guide words paint — pardon cover words alphabetically between them.
   - *palm* — 'pal…' comes before 'pai…'? Compare: pa**l** vs pa**i** — 'i' comes before 'l', so *palm* comes **after** *paint*; pa**l** vs pa**r** (pardon) — 'l' before 'r', so *palm* is before *pardon*. → **on the page.**
   - *panic* — pa**n** falls between pa**i** and pa**r** → **on the page.**
   - *parrot* — pa**rr**ot vs pa**rd**on: compare third letters, 'r' vs 'd' — 'r' comes **after** 'd', so *parrot* is **after** *pardon* → **not on the page.**
3. The **river bank** meaning — 'the land along the side of a river'. Here *bank* is a **noun**.

**Rule applied:** alphabetical order and guide words locate the word; the part of speech and context choose the right meaning.`,
      quiz: [
        {
          prompt: "Words in a dictionary are arranged in…",
          options: ["alphabetical order", "order of length", "order of importance", "random order"],
          correctIndex: 0,
          explanation: "Dictionary entries are listed alphabetically.",
        },
        {
          prompt: "A word listed in a dictionary is called an entry or a…",
          options: ["headword", "footnote", "caption", "guide word"],
          correctIndex: 0,
          explanation: "The word being defined is the headword (entry word).",
        },
        {
          prompt: "Which word comes first alphabetically?",
          options: ["bat", "cat", "rat", "sat"],
          correctIndex: 0,
          explanation: "'b' comes before c, r and s.",
        },
        {
          prompt: "Which order is correct?",
          options: ["car, cat, cup", "cup, cat, car", "cat, car, cup", "cup, car, cat"],
          correctIndex: 0,
          explanation: "car → cat (compare 3rd letter r vs t) → cup.",
        },
        {
          prompt: "The two words at the top of a dictionary page are called…",
          options: ["guide words", "headwords", "key words", "entry marks"],
          correctIndex: 0,
          explanation: "Guide words show the first and last entries on the page.",
        },
        {
          prompt: "The left guide word on a page is the…",
          options: ["first entry on the page", "last entry on the page", "hardest word", "shortest word"],
          correctIndex: 0,
          explanation: "The left guide word is the first entry on that page.",
        },
        {
          prompt: "The right guide word on a page is the…",
          options: ["last entry on the page", "first entry on the page", "title", "pronunciation"],
          correctIndex: 0,
          explanation: "The right guide word is the last entry on that page.",
        },
        {
          prompt: "If the guide words are 'market — mast', which word is on that page?",
          options: ["marsh", "maze", "mango", "master's owner"],
          correctIndex: 0,
          explanation: "'marsh' falls alphabetically between 'market' and 'mast'.",
        },
        {
          prompt: "The abbreviation 'n.' in an entry means the word is a…",
          options: ["noun", "verb", "adjective", "adverb"],
          correctIndex: 0,
          explanation: "'n.' labels a noun.",
        },
        {
          prompt: "The abbreviation 'v.' in an entry means the word is a…",
          options: ["verb", "noun", "adjective", "adverb"],
          correctIndex: 0,
          explanation: "'v.' labels a verb.",
        },
        {
          prompt: "'adj.' in a dictionary entry stands for…",
          options: ["adjective", "adverb", "adjunct", "advantage"],
          correctIndex: 0,
          explanation: "'adj.' labels an adjective.",
        },
        {
          prompt: "The pronunciation guide in an entry helps you…",
          options: ["say the word correctly", "spell the word", "count the meanings", "find the origin"],
          correctIndex: 0,
          explanation: "The pronunciation shows how to say the word.",
        },
        {
          prompt: "A stress mark in the pronunciation shows…",
          options: ["which syllable to say with most force", "the part of speech", "the plural", "the origin"],
          correctIndex: 0,
          explanation: "The stress mark identifies the emphasized syllable.",
        },
        {
          prompt: "When a word has several meanings, you choose the right one by using the…",
          options: ["context of your sentence", "first meaning always", "longest meaning", "shortest meaning"],
          correctIndex: 0,
          explanation: "Context and the part of speech decide which meaning fits.",
        },
        {
          prompt: "The part of an entry that shows a word's origin is the…",
          options: ["etymology", "pronunciation", "headword", "guide word"],
          correctIndex: 0,
          explanation: "Etymology gives the word's history or origin.",
        },
        {
          prompt: "In 'They sat on the river bank', which part of speech is 'bank'?",
          options: ["noun", "verb", "adjective", "adverb"],
          correctIndex: 0,
          explanation: "Here 'bank' names a thing (the side of a river) — a noun.",
        },
        {
          prompt: "Which word would appear on a page with guide words 'happy — harvest'?",
          options: ["harbour", "hat", "hammer", "hazel"],
          correctIndex: 0,
          explanation: "'harbour' falls between 'happy' and 'harvest' alphabetically.",
        },
        {
          prompt: "An example sentence in an entry shows the word…",
          options: ["in use", "misspelled", "translated", "rhymed"],
          correctIndex: 0,
          explanation: "The example demonstrates the word used in context.",
        },
        {
          prompt: "To compare 'back' and 'bag', you look at the…",
          options: ["third letter (c vs g)", "first letter only", "last letter only", "number of letters"],
          correctIndex: 0,
          explanation: "First two letters match (ba); the third letter decides: c before g.",
        },
        {
          prompt: "The best time to look up a new word is…",
          options: ["as soon as you meet it", "a week later", "never", "only in exams"],
          correctIndex: 0,
          explanation: "Look up a new word promptly and use it repeatedly to learn it.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Put these words in dictionary order: 'orange, oil, open, only'.",
          answerKey:
            "oil, only, open, orange. (Compare letter by letter: oi < on < op < or.) Award full marks for the correct order; partial for a single misplacement.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A dictionary page has the guide words 'garden — gather'. Which word is on that page?",
          options: [
            "gas",
            "game",
            "gaze",
            "gentle",
          ],
          correctIndex: 0,
          answerKey: "'gas' falls alphabetically between 'garden' and 'gather'; 'game' comes before, 'gaze'/'gentle' come after.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name three parts of a dictionary entry and say what each tells you.",
          answerKey:
            "Any three of: headword (spelling), pronunciation (how to say it), part of speech (grammatical class), definition (meaning), example (word in use), etymology (origin). Award a mark per correct part with its purpose.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "The word 'light' has several meanings. Explain how you would choose the right one for a given sentence.",
          answerKey:
            "Identify the part of speech needed (noun, verb or adjective), read the numbered definitions, and pick the meaning that fits the sentence's context, confirming with the example. Award marks for using part of speech and context.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how you would use a dictionary to find and understand an unfamiliar word, from locating it on the page to choosing the correct meaning. Refer to alphabetical order, guide words, and the parts of an entry.",
          answerKey:
            "A strong answer explains: using alphabetical order (letter by letter) and guide words (first/last entries on a page) to locate the word; reading the entry (headword/spelling, pronunciation, part of speech, definitions, example, etymology); and choosing the right meaning by matching the part of speech and the sentence context. Award marks for locating, reading the entry, and selecting the meaning.",
          marks: 5,
        },
      ],
    },
  ],
};
