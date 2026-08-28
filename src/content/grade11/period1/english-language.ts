import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 11,
// Semester One, Period I: Grammar — Verb Usage Part 1. CONTENTS: (1) the five
// forms of a verb (base, -s, -ing, past, past participle); (2) using the six
// tenses of the verb correctly, including the progressive forms; (3) writing
// book reports in the context of literature. Each CONTENTS item is one topic.
export const englishLanguageG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Verb Usage — Part 1",
  summary:
    "Period I of the MoE Grade 11 English syllabus. Learners revisit and extend verb usage: they name the five forms of a verb and build every tense from them, use the six tenses (with their progressive forms) correctly in writing, and apply these skills to write a well-structured book report on a work of literature.",
  topics: [
    {
      // source: LibreTexts — Grammar Anatomy (Brehe), 1.3 Verb Tense, Principal Parts, and Irregular Verbs (https://human.libretexts.org/Bookshelves/Composition/Grammar/Grammar_Anatomy_(Brehe)/01:_Chapters/1.03:_Get_Tense_Verb_Tense_Principal_Parts_and_Irregular_Verbs)
      slug: "five-forms-of-a-verb",
      title: "The Five Forms of a Verb",
      objective:
        "By the end of the topic, learners should be able to name and produce the five forms of any verb (base, -s, -ing, past, past participle), identify the three principal parts, and use the correct form to build each tense.",
      estimatedMinutes: 150,
      notes: `## Every verb has five forms

An English verb (except a few auxiliaries) has **five forms**. From these five forms every tense in the language is built.

| Form | Also called | How it is made | Example (*go*) | Example (*play*) |
| --- | --- | --- | --- | --- |
| Base form | plain / infinitive | the dictionary word | go | play |
| -s form | third-person singular | base + -s/-es | goes | plays |
| -ing form | present participle | base + -ing | going | playing |
| Past form | simple past | base + -ed (regular) | went | played |
| Past participle | perfect participle | used with *have* | gone | played |

- The verb **go** has the five forms: *go, goes, went, gone, going.*
- The verb **play** has the five forms: *play, plays, played, played, playing.*

## The three principal parts

Grammarians also speak of the **three principal parts** — the forms you must know to build every tense:

1. **Present (base) form** — *go, play, write.*
2. **Past form** — *went, played, wrote.*
3. **Past participle** — the form used after *have* in the perfect tenses — *gone, played, written.*

The **-s form** and the **-ing form** are predictable from the base, so the past and past participle are the two forms worth memorising for each verb.

## Regular and irregular verbs

**Regular verb** — the past form and the past participle are made the same way, by adding **-ed** (or **-d**):

| Base | Past | Past participle |
| --- | --- | --- |
| play | played | played |
| walk | walked | walked |
| hope | hoped | hoped |

**Irregular verb** — the past form and/or the past participle are **not** made with -ed; they must be learned one by one:

| Base | Past | Past participle |
| --- | --- | --- |
| go | went | gone |
| write | wrote | written |
| eat | ate | eaten |
| begin | began | begun |
| speak | spoke | spoken |

Note that for many irregulars the past form and the past participle **differ** (*wrote / written*), which is why *I have wrote* is wrong and *I have written* is right.

## Which form each tense uses

\`\`\`svg How tenses are built from the forms
<svg viewBox="0 0 470 170" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="14" y="16" width="120" height="34" rx="5" fill="#f2e4d4" stroke="#8a5833"/>
  <text x="74" y="38" text-anchor="middle" font-size="12">base: write</text>
  <rect x="14" y="66" width="120" height="34" rx="5" fill="#f2e4d4" stroke="#8a5833"/>
  <text x="74" y="88" text-anchor="middle" font-size="12">past: wrote</text>
  <rect x="14" y="116" width="120" height="34" rx="5" fill="#f2e4d4" stroke="#8a5833"/>
  <text x="74" y="138" text-anchor="middle" font-size="12">participle: written</text>
  <line x1="134" y1="33" x2="300" y2="33" stroke="#8a5833"/>
  <line x1="134" y1="83" x2="300" y2="83" stroke="#8a5833"/>
  <line x1="134" y1="133" x2="300" y2="133" stroke="#8a5833"/>
  <text x="310" y="30" font-size="12">simple present / future (will write)</text>
  <text x="310" y="87" font-size="12">simple past (wrote)</text>
  <text x="310" y="138" font-size="12">perfect tenses (have / had written)</text>
  <text x="235" y="165" text-anchor="middle" font-size="11" fill="#6a5a48">-ing form builds every progressive tense (was writing)</text>
</svg>
\`\`\`

- **Base form** → simple present and, with *will*, the simple future.
- **Past form** → simple past (used alone, never after *have*).
- **Past participle** → all perfect tenses (after *have/has/had*) and the passive.
- **-ing form** → all progressive tenses (after *be*).

## Summary

- Five forms: **base, -s, -ing, past, past participle.**
- Three principal parts: **present, past, past participle** — memorise the last two for irregular verbs.
- Regular verbs form the past and participle with **-ed**; irregular verbs do not and often keep them different (*wrote / written*).`,
      workedExample: `**Task.** Give the five forms of the verb *begin*, mark the three principal parts, and use the correct form in each blank.

**Five forms of *begin*:** begin, begins, beginning, began, begun.

- Three principal parts: **begin** (present) — **began** (past) — **begun** (past participle).

**Fill each blank with the right form:**

1. Every day the match ______ at four. → *begins* (simple present, -s form for *the match*).
2. Yesterday the match ______ late. → *began* (simple past — past form used alone).
3. The match has already ______. → *begun* (present perfect — past participle after *has*).
4. They were ______ to sing when I arrived. → *beginning* (past progressive — -ing form after *were*).

**Rule applied:** the simple past uses the **past** form (*began*); the perfect uses the **past participle** (*begun*). Because *begin* is irregular, these two forms differ, so *has began* would be wrong.`,
      quiz: [
        {
          prompt: "How many forms does an English verb have?",
          options: ["five", "three", "four", "six"],
          correctIndex: 0,
          explanation: "Every verb has five forms: base, -s, -ing, past, and past participle.",
        },
        {
          prompt: "Which are the five forms of 'go'?",
          options: ["go, goes, went, gone, going", "go, goed, gone, going, goes", "go, going, goned, goes, went", "goes, go, going, goned, gone"],
          correctIndex: 0,
          explanation: "The verb 'go' has the forms go, goes, went, gone, going.",
        },
        {
          prompt: "The dictionary form of a verb is the…",
          options: ["base form", "-s form", "past participle", "present participle"],
          correctIndex: 0,
          explanation: "The base (plain) form is the dictionary word, e.g. 'play'.",
        },
        {
          prompt: "The -ing form of a verb is also called the…",
          options: ["present participle", "past participle", "base form", "-s form"],
          correctIndex: 0,
          explanation: "The -ing form is the present participle, e.g. 'playing'.",
        },
        {
          prompt: "The form used after 'have' in the perfect tenses is the…",
          options: ["past participle", "past form", "base form", "-s form"],
          correctIndex: 0,
          explanation: "The past participle follows have/has/had, e.g. 'have written'.",
        },
        {
          prompt: "What are the three principal parts of a verb?",
          options: ["present, past, past participle", "base, -s, -ing", "present, future, past", "singular, plural, past"],
          correctIndex: 0,
          explanation: "The three principal parts are the present, the past, and the past participle.",
        },
        {
          prompt: "A regular verb forms its past and past participle by adding…",
          options: ["-ed", "-en", "-ing", "-s"],
          correctIndex: 0,
          explanation: "Regular verbs add -ed (or -d): play → played → played.",
        },
        {
          prompt: "Which of these is an irregular verb?",
          options: ["write", "walk", "hope", "play"],
          correctIndex: 0,
          explanation: "'Write' is irregular (wrote / written); the others add -ed.",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writing", "writed"],
          correctIndex: 0,
          explanation: "'Write' is irregular: past 'wrote', past participle 'written'.",
        },
        {
          prompt: "Which sentence uses the correct form? 'I have ___ the letter.'",
          options: ["written", "wrote", "write", "writing"],
          correctIndex: 0,
          explanation: "The perfect tense needs the past participle 'written' after 'have'.",
        },
        {
          prompt: "The simple past uses which form of the verb?",
          options: ["the past form", "the past participle", "the base form", "the -ing form"],
          correctIndex: 0,
          explanation: "The simple past uses the past form alone, e.g. 'wrote' (never 'have wrote').",
        },
        {
          prompt: "The -s form of a verb is used with a…",
          options: ["third-person singular subject", "plural subject", "past action", "future action"],
          correctIndex: 0,
          explanation: "The -s form goes with he/she/it: 'She plays.'",
        },
        {
          prompt: "Which form builds the progressive tenses (after 'be')?",
          options: ["the -ing form", "the past form", "the past participle", "the base form"],
          correctIndex: 0,
          explanation: "All progressive tenses use the -ing form: 'was writing'.",
        },
        {
          prompt: "The past participle of 'eat' is…",
          options: ["eaten", "ate", "eating", "eated"],
          correctIndex: 0,
          explanation: "'Eat' is irregular: past 'ate', past participle 'eaten'.",
        },
        {
          prompt: "Which is the -s form of 'go'?",
          options: ["goes", "gone", "going", "went"],
          correctIndex: 0,
          explanation: "The third-person singular form of 'go' is 'goes'.",
        },
        {
          prompt: "For a regular verb like 'walk', the past and past participle are…",
          options: ["the same (walked)", "always different", "irregular", "made with -en"],
          correctIndex: 0,
          explanation: "Regular verbs make both with -ed, so they are identical: walked / walked.",
        },
        {
          prompt: "Why is 'I have began' wrong?",
          options: ["'began' is the past form, not the past participle", "'begin' is regular", "'have' cannot take a verb", "'began' is the base form"],
          correctIndex: 0,
          explanation: "The perfect needs the past participle 'begun': 'I have begun'.",
        },
        {
          prompt: "Which form of a verb follows 'will' to make the simple future?",
          options: ["the base form", "the past form", "the past participle", "the -ing form"],
          correctIndex: 0,
          explanation: "'Will' + base form: 'will write', 'will play'.",
        },
        {
          prompt: "The past participle is also used to form the…",
          options: ["passive voice", "simple present", "future progressive", "-s form"],
          correctIndex: 0,
          explanation: "The passive uses 'be' + past participle, e.g. 'was written'.",
        },
        {
          prompt: "The five forms of 'play' are…",
          options: ["play, plays, playing, played, played", "play, plaies, playd, playing, plays", "play, plays, play, played, playing", "plays, play, playing, plaied, playd"],
          correctIndex: 0,
          explanation: "Being regular, both past and participle are 'played': play, plays, playing, played, played.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Write out the five forms of the verb 'speak' and label the three principal parts.",
          answerKey:
            "Five forms: speak, speaks, speaking, spoke, spoken. Principal parts: speak (present), spoke (past), spoken (past participle). Award marks for all five forms and for correctly labelling the three principal parts.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the past participle correctly?",
          options: [
            "They have eaten all the rice.",
            "They have ate all the rice.",
            "They has eaten all the rice yesterday.",
            "They have eating all the rice.",
          ],
          correctIndex: 0,
          answerKey: "The perfect tense uses 'have' + past participle 'eaten'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State whether each verb is regular or irregular and give its past and past participle: (a) hope (b) begin.",
          answerKey:
            "(a) hope — regular; past 'hoped', participle 'hoped'. (b) begin — irregular; past 'began', participle 'begun'. Award a mark per verb correctly classified with both forms.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Fill each blank with the correct form of 'write': 'She ___ a poem yesterday, and she has ___ three this term.'",
          answerKey:
            "'wrote' (simple past) and 'written' (present perfect, past participle). Award a mark for each correct form.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between the five forms of a verb and the three principal parts, and explain why irregular verbs cause errors like 'I have went'. Use two irregular verbs of your own to illustrate.",
          answerKey:
            "A strong answer names the five forms (base, -s, -ing, past, past participle) and the three principal parts (present, past, past participle); explains that in many irregular verbs the past and past participle differ, so using the past form after 'have' (e.g. 'have went' instead of 'have gone') is wrong; and illustrates with two irregular verbs showing distinct past and participle forms. Award marks for the forms, the principal parts, the explanation of the error, and two correct examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — College of the Sequoias, Reading and Composition, 17.15 Verb Tenses (https://human.libretexts.org/Courses/College_of_the_Sequoias/Reading_and_Composition/17:_Grammar/17.15:_Verb_Tenses)
      slug: "six-verb-tenses",
      title: "Using the Six Tenses of the Verb",
      objective:
        "By the end of the topic, learners should be able to form and use the simple, perfect and progressive versions of the present, past and future, choose the tense that matches the meaning, and keep tense consistent in writing.",
      estimatedMinutes: 160,
      notes: `## Tense = the time of the verb

**Tense** — the form a verb takes to express the **present, past or future**. English builds its tenses in three families: **simple**, **perfect**, and **progressive** (continuous).

## The simple tenses

| Tense | Meaning | Form | Example |
| --- | --- | --- | --- |
| Simple present | now or a regular habit | base (+ -s) | I learn. |
| Simple past | a completed action | past form | I learned. |
| Simple future | an action yet to happen | will + base | I will learn. |

## The perfect tenses

The **perfect** shows an action **completed before** another point in time. It is built from **have** + the **past participle**.

| Tense | Meaning | Form | Example |
| --- | --- | --- | --- |
| Present perfect | started in the past, reaches now | has/have + participle | I have learned. |
| Past perfect | finished before another past event | had + participle | I had learned. |
| Future perfect | will be finished by a future time | will have + participle | I will have learned. |

## The progressive tenses

The **progressive** shows a **continuing** action. It is built from **be** + the **-ing** form (present participle).

| Tense | Meaning | Form | Example |
| --- | --- | --- | --- |
| Present progressive | happening right now | am/is/are + -ing | I am learning. |
| Past progressive | was in progress in the past | was/were + -ing | I was learning. |
| Future progressive | will be in progress later | will be + -ing | I will be learning. |

## The perfect progressive

The two families can combine — **have been** + **-ing** — to show a continuing action tied to another time:

- **Present perfect progressive:** *I have been learning.* (still going on now)
- **Past perfect progressive:** *I had been learning.* (going on until another past event)
- **Future perfect progressive:** *I will have been learning.* (going on up to a future time)

## Choosing the right tense

- A **habit or general truth** → simple present: *Water boils at 100 °C.*
- A **finished** past action → simple past: *She travelled last year.*
- A past action **still linked to now** → present perfect: *She has travelled widely.*
- The **earlier** of two past actions → past perfect: *The bus had left before we arrived.*
- An action **in progress** at a moment → a progressive: *We were eating when he called.*

## Keeping tense consistent

Do not slide between tenses without reason (**tense-drift**):

- Wrong: *He opened the door and sees the rain.*
- Right: *He opened the door and saw the rain.*

## Summary

- Three families: **simple**, **perfect** (have + participle), **progressive** (be + -ing).
- Each family has a present, past and future — giving the six core tenses plus their progressive forms.
- Match the tense to the meaning, and stay in one tense unless the time truly changes.`,
      workedExample: `**Task.** Name the tense of each verb, then rewrite sentence 3 so that its tense is consistent.

1. *By noon tomorrow, we **will have finished** the exam.*
2. *They **were playing** football when it rained.*
3. *She **walked** into the hall and **sees** her friends.*

**Answers**

1. **will have finished** → *future perfect* (will have + past participle): the action will be complete by a future time.
2. **were playing** → *past progressive* (was/were + -ing): an action in progress in the past, interrupted by 'rained' (simple past).
3. **walked** = simple past, but **sees** = simple present — this is **tense-drift**. Fixed: *She **walked** into the hall and **saw** her friends.* Both verbs are now simple past.

**Rule applied:** hold one tense across a sentence unless the time changes; the perfect uses the past participle, the progressive uses the -ing form.`,
      quiz: [
        {
          prompt: "The three families of tense in English are simple, progressive, and…",
          options: ["perfect", "passive", "plural", "modal"],
          correctIndex: 0,
          explanation: "The families are simple, perfect, and progressive.",
        },
        {
          prompt: "Which sentence is in the simple present?",
          options: ["I learn.", "I learned.", "I will learn.", "I have learned."],
          correctIndex: 0,
          explanation: "'I learn' is the simple present.",
        },
        {
          prompt: "The perfect tenses are formed with 'have' plus the…",
          options: ["past participle", "base form", "-ing form", "-s form"],
          correctIndex: 0,
          explanation: "Perfect = have/has/had + past participle.",
        },
        {
          prompt: "'I have learned' is which tense?",
          options: ["present perfect", "past perfect", "simple past", "present progressive"],
          correctIndex: 0,
          explanation: "has/have + participle = present perfect.",
        },
        {
          prompt: "'I had learned' is which tense?",
          options: ["past perfect", "present perfect", "future perfect", "past progressive"],
          correctIndex: 0,
          explanation: "had + participle = past perfect, an action completed before another past event.",
        },
        {
          prompt: "The progressive tenses are formed with 'be' plus the…",
          options: ["-ing form", "past participle", "base form", "past form"],
          correctIndex: 0,
          explanation: "Progressive = be + -ing (present participle).",
        },
        {
          prompt: "'I am learning' is which tense?",
          options: ["present progressive", "present perfect", "simple present", "future progressive"],
          correctIndex: 0,
          explanation: "am/is/are + -ing = present progressive.",
        },
        {
          prompt: "'I will be learning' is which tense?",
          options: ["future progressive", "future perfect", "simple future", "past progressive"],
          correctIndex: 0,
          explanation: "will be + -ing = future progressive.",
        },
        {
          prompt: "Which tense is best for a finished past action: 'She ___ last year.'?",
          options: ["travelled", "has travelled", "travels", "will travel"],
          correctIndex: 0,
          explanation: "A completed past action takes the simple past 'travelled'.",
        },
        {
          prompt: "Which tense links a past action to the present: 'She ___ widely.'?",
          options: ["has travelled", "travelled", "travels", "was travelling"],
          correctIndex: 0,
          explanation: "The present perfect 'has travelled' connects past experience to now.",
        },
        {
          prompt: "The future perfect 'I will have learned' means the action…",
          options: ["will be finished by a future time", "is happening now", "finished long ago", "never happened"],
          correctIndex: 0,
          explanation: "The future perfect marks completion before a future point.",
        },
        {
          prompt: "Which sentence shows the earlier of two past actions correctly?",
          options: ["The bus had left before we arrived.", "The bus left before we had arrive.", "The bus leaves before we arrived.", "The bus has left before we arrive."],
          correctIndex: 0,
          explanation: "The past perfect 'had left' marks the earlier of two past events.",
        },
        {
          prompt: "'I have been learning' is which tense?",
          options: ["present perfect progressive", "present progressive", "past perfect", "future perfect"],
          correctIndex: 0,
          explanation: "has/have been + -ing = present perfect progressive.",
        },
        {
          prompt: "Which sentence has an action in progress interrupted by another?",
          options: ["We were eating when he called.", "We eat when he calls.", "We will eat when he calls.", "We have eaten when he called."],
          correctIndex: 0,
          explanation: "Past progressive 'were eating' + simple past 'called' shows interruption.",
        },
        {
          prompt: "Which is the simple future of 'learn'?",
          options: ["will learn", "learned", "have learned", "am learning"],
          correctIndex: 0,
          explanation: "will + base form = 'will learn'.",
        },
        {
          prompt: "A general truth such as 'Water boils at 100 °C' uses the…",
          options: ["simple present", "simple past", "future perfect", "past progressive"],
          correctIndex: 0,
          explanation: "General truths take the simple present.",
        },
        {
          prompt: "Which sentence contains tense-drift?",
          options: ["He opened the door and sees the rain.", "He opened the door and saw the rain.", "He opens the door and sees the rain.", "He will open the door and see the rain."],
          correctIndex: 0,
          explanation: "It mixes simple past 'opened' with simple present 'sees'.",
        },
        {
          prompt: "'They had been waiting for an hour' is which tense?",
          options: ["past perfect progressive", "present perfect progressive", "past progressive", "past perfect"],
          correctIndex: 0,
          explanation: "had been + -ing = past perfect progressive.",
        },
        {
          prompt: "The past progressive is formed with…",
          options: ["was/were + -ing", "had + participle", "will + base", "have + participle"],
          correctIndex: 0,
          explanation: "Past progressive = was/were + the -ing form.",
        },
        {
          prompt: "Which tense fits: 'By the time you arrive, I ___ the cooking.'?",
          options: ["will have finished", "finished", "have finished", "was finishing"],
          correctIndex: 0,
          explanation: "Completion before a future point needs the future perfect 'will have finished'.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Write the verb 'travel' in the simple present, present perfect, and past progressive, each in a full sentence.",
          answerKey:
            "Simple present e.g. 'I travel to Kakata every week.'; present perfect 'I have travelled to Kakata often.'; past progressive 'I was travelling to Kakata when it rained.' Award a mark per correctly formed and used tense.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is in the present perfect?",
          options: [
            "The team has won three matches.",
            "The team won three matches.",
            "The team will win three matches.",
            "The team was winning the match.",
          ],
          correctIndex: 0,
          answerKey: "'has won' (has + past participle) is the present perfect.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the tense of each verb: (a) 'She had left before I called.' (b) 'They will be arriving soon.'",
          answerKey:
            "(a) 'had left' = past perfect; 'called' = simple past. (b) 'will be arriving' = future progressive. Award marks for correctly naming each tense.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Correct the tense-drift: 'He picked up the phone and hears bad news.'",
          answerKey:
            "'He picked up the phone and heard bad news.' Both verbs must be simple past. Full marks for changing 'hears' to 'heard' while leaving 'picked' unchanged.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the three families of tense (simple, perfect, progressive) and how each is formed. Give one example sentence in each family, and explain why keeping tense consistent matters in writing.",
          answerKey:
            "A strong answer explains simple (base/past/will + base), perfect (have + past participle), and progressive (be + -ing); gives one correct example per family; and explains that tense-drift confuses the reader about when events happen, so writers hold one tense unless the time genuinely changes. Award marks for the three families, three examples, and the consistency point.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — About Writing Guide with Handbook (OpenStax), 7: Evaluation or Review — Would You Recommend It? (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/About_Writing_Guide_with_Handbook_-_A_textbook_for_English_Composition_(OpenStax)/07:_Evaluation_or_Review-_Would_You_Recommend_it)
      slug: "writing-book-reports",
      title: "Writing Book Reports",
      objective:
        "By the end of the topic, learners should be able to plan and write a book report that identifies the book, summarises it objectively, judges it against clear criteria with evidence, and ends with a reasoned recommendation.",
      estimatedMinutes: 150,
      notes: `## What a book report is

A **book report** is a short piece of writing that both **summarises** a book and gives a **reasoned evaluation** of it — a judgment of its worth, supported by evidence from the text. It is a kind of **review**: writers evaluate in order to present an informed, well-reasoned judgment about a subject.

- The judgment is based on opinion, but it should **not seem opinionated**; it must read as reasonable and fair.
- A sound review rests on clear **criteria** — the standards you judge the book by — and on **evidence** drawn from the book itself.

## The parts of a book report

1. **Heading / identification.** Give the **title**, **author**, and the **type of book** (novel, biography, play, short-story collection). You may add publisher and date.
2. **Introduction.** Name the book and its author, state the subject or theme, and give your overall judgment in one sentence (this is your thesis).
3. **Summary.** Restate the main content **objectively** and in your own words. For a story, cover setting, main characters and the central conflict — but **do not give away the ending**. Include only the main points; leave out minor details.
4. **Evaluation.** Judge the book against clear **criteria**, for example: the strength of the plot, believable characters, the theme or message, the writer's style and language. Support every judgment with **evidence** — brief examples or a short quotation from the book.
5. **Recommendation / conclusion.** State whether you would recommend the book and to **whom** (its likely readers), and give the reason.

## Summary versus evaluation

The two must be kept apart:

| Summary | Evaluation |
| --- | --- |
| objective restatement of the content | your judgment of the book's worth |
| your own words, no opinion | opinion backed by criteria and evidence |
| avoids words like *good, weak, boring* | uses reasoned praise or criticism |
| answers "What is the book about?" | answers "Is it worth reading, and why?" |

## Choosing criteria

What makes an evaluation worthwhile is the **soundness of its criteria**. State the factors you are judging by rather than only whether you liked the book. Useful criteria for a book report:

- **Plot** — is the story well-built and convincing?
- **Characters** — are they believable and well-developed?
- **Theme / message** — is it clear and worth thinking about?
- **Style** — is the language clear, vivid, suited to the subject?

## Summary

- A book report = **objective summary** + **reasoned evaluation** + **recommendation**.
- Identify the book fully; summarise without spoilers; judge against clear **criteria** and back each judgment with **evidence**.
- Keep the summary free of opinion and the evaluation free of plot-retelling.`,
      workedExample: `**Task.** Plan a book report on a novel, showing each required part.

**Book:** *Things Fall Apart* — a novel by Chinua Achebe.

1. **Identification:** Title *Things Fall Apart*; author Chinua Achebe; type: novel.
2. **Introduction (with judgment):** "Chinua Achebe's novel *Things Fall Apart* tells of Okonkwo, a proud Igbo leader whose world changes with the arrival of colonial rule. It is a powerful and moving book that repays careful reading." (states subject + overall judgment)
3. **Summary (objective, no ending):** "The story follows Okonkwo, a respected wrestler and farmer, as he strives to succeed in his village of Umuofia. When missionaries and colonial officials arrive, the customs he has lived by come under pressure." (main content, in own words, no spoiler)
4. **Evaluation (criteria + evidence):**
   - *Characters:* Okonkwo is believable because his strength and his fear of weakness are shown through his actions, not merely stated.
   - *Theme:* the clash between tradition and change is developed clearly through the village's response to the newcomers.
   - *Style:* Achebe weaves in proverbs ("Proverbs are the palm-oil with which words are eaten"), which give the writing a distinctive voice.
5. **Recommendation:** "I would recommend this novel to readers interested in African history and in how societies change, because it presents that change through one unforgettable character."

**Rule applied:** the report separates an **objective summary** from a **criteria-based evaluation**, and closes with a **reasoned recommendation**.`,
      quiz: [
        {
          prompt: "A book report combines a summary of the book with a…",
          options: ["reasoned evaluation", "list of characters only", "copy of the blurb", "personal diary entry"],
          correctIndex: 0,
          explanation: "A book report both summarises and evaluates the book.",
        },
        {
          prompt: "The summary part of a book report should be…",
          options: ["objective and in your own words", "full of your opinions", "a word-for-word copy", "only about the ending"],
          correctIndex: 0,
          explanation: "A summary objectively restates the main content in your own words.",
        },
        {
          prompt: "Which of these belongs in the identification/heading?",
          options: ["title, author, type of book", "your recommendation", "a quotation", "the ending"],
          correctIndex: 0,
          explanation: "The heading names the title, author, and kind of book.",
        },
        {
          prompt: "The standards you judge a book by are called…",
          options: ["criteria", "chapters", "characters", "captions"],
          correctIndex: 0,
          explanation: "Criteria are the factors an evaluation is measured against.",
        },
        {
          prompt: "Every judgment in the evaluation should be supported by…",
          options: ["evidence from the book", "another book", "the price", "the cover art"],
          correctIndex: 0,
          explanation: "Judgments must be backed by evidence drawn from the text.",
        },
        {
          prompt: "A good book-report summary should NOT…",
          options: ["give away the ending", "mention the setting", "name the main characters", "state the central conflict"],
          correctIndex: 0,
          explanation: "Avoid spoilers; do not reveal the ending in the summary.",
        },
        {
          prompt: "The final part of a book report usually gives a…",
          options: ["recommendation", "second summary", "new plot", "bibliography only"],
          correctIndex: 0,
          explanation: "The report ends by recommending (or not) the book and saying to whom.",
        },
        {
          prompt: "Which word signals evaluation rather than summary?",
          options: ["convincing", "chapter", "setting", "character"],
          correctIndex: 0,
          explanation: "'Convincing' is a judgment; the others are neutral summary terms.",
        },
        {
          prompt: "The evaluation should read as…",
          options: ["reasonable and fair", "highly opinionated", "angry", "uncertain"],
          correctIndex: 0,
          explanation: "A review's judgment should seem reasonable and unbiased, not opinionated.",
        },
        {
          prompt: "Which is a useful criterion for judging a novel?",
          options: ["believable characters", "the font size", "the number of pages only", "the shop it was bought from"],
          correctIndex: 0,
          explanation: "Character believability is a genuine evaluative criterion.",
        },
        {
          prompt: "The introduction of a book report should state…",
          options: ["the book, its subject, and your overall judgment", "only your name", "every event in order", "a list of quotations"],
          correctIndex: 0,
          explanation: "The introduction names the book and gives the overall judgment (thesis).",
        },
        {
          prompt: "'What is the book about?' is answered by the…",
          options: ["summary", "evaluation", "recommendation", "heading"],
          correctIndex: 0,
          explanation: "The summary answers what the book is about.",
        },
        {
          prompt: "'Is it worth reading, and why?' is answered by the…",
          options: ["evaluation", "summary", "identification", "title"],
          correctIndex: 0,
          explanation: "The evaluation judges the book's worth with reasons.",
        },
        {
          prompt: "What makes an evaluation worthwhile is the soundness of its…",
          options: ["criteria", "length", "vocabulary", "handwriting"],
          correctIndex: 0,
          explanation: "Clear, sound criteria give an evaluation its value.",
        },
        {
          prompt: "In the summary you should include…",
          options: ["only the main points", "every minor detail", "your opinions", "the ending"],
          correctIndex: 0,
          explanation: "Keep to the main points; leave out minor details and opinion.",
        },
        {
          prompt: "A recommendation is stronger when it names…",
          options: ["the likely readers and a reason", "the price", "the author's age", "the number of chapters"],
          correctIndex: 0,
          explanation: "Say to whom you recommend the book and why.",
        },
        {
          prompt: "Which sentence belongs in the evaluation, not the summary?",
          options: ["The theme of change is developed convincingly.", "The story is set in a village.", "The hero is a farmer.", "Missionaries arrive later."],
          correctIndex: 0,
          explanation: "It offers a judgment ('convincingly'); the others merely report content.",
        },
        {
          prompt: "Using a short quotation from the book in the evaluation serves as…",
          options: ["evidence for a judgment", "a way to fill space", "the summary", "the heading"],
          correctIndex: 0,
          explanation: "A brief quotation is evidence supporting an evaluative point.",
        },
        {
          prompt: "Which style criterion could a report comment on?",
          options: ["clarity and vividness of the language", "the shop's location", "the reader's mood", "the weather"],
          correctIndex: 0,
          explanation: "Style criteria include how clear and vivid the writing is.",
        },
        {
          prompt: "The two parts a book report must keep separate are…",
          options: ["objective summary and reasoned evaluation", "title and author", "plot and setting", "praise and length"],
          correctIndex: 0,
          explanation: "Keep the summary opinion-free and the evaluation free of plot-retelling.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List, in order, the five parts of a book report.",
          answerKey:
            "1) Identification (title, author, type); 2) Introduction with overall judgment; 3) Objective summary; 4) Evaluation against criteria with evidence; 5) Recommendation/conclusion. Award marks for the correct parts in a sensible order.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence belongs in the summary rather than the evaluation?",
          options: [
            "The novel is set in a farming village and follows one family.",
            "The plot is gripping from the first page.",
            "The characters are wonderfully drawn.",
            "The ending is deeply moving.",
          ],
          correctIndex: 0,
          answerKey: "It objectively reports content; the others give judgments and so belong in the evaluation.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two criteria you could use to evaluate a novel and, for one of them, say what evidence you would give.",
          answerKey:
            "Any two of: plot, characters, theme/message, style. For evidence, e.g. for 'characters', give an action or quotation that shows a character is believable. Award a mark per valid criterion and a mark for appropriate evidence.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why a book report's summary should not reveal the ending.",
          answerKey:
            "Because the summary should give the main content objectively to inform a would-be reader without spoiling the story; revealing the ending removes the reader's reason to read. Award marks for the no-spoiler purpose.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short book report (about one paragraph) on any book you have read. Identify the book, summarise it objectively without spoilers, evaluate it against at least one clear criterion with evidence, and end with a recommendation.",
          answerKey:
            "Award marks for: full identification (title, author, type); an objective, spoiler-free summary in the learner's own words; an evaluation naming at least one criterion supported by evidence from the book; a clear recommendation naming likely readers and a reason; and correct, ordered writing. Deduct where summary and evaluation blur together.",
          marks: 5,
        },
      ],
    },
  ],
};
