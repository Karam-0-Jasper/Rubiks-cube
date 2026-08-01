import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester One, Period III: Grammar — Verbs Part 2 (the perfect tenses, and
// regular versus irregular verbs).
export const englishLanguageG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Verbs — Part 2",
  summary:
    "Period III of the MoE Grade 10 English syllabus. Learners extend their control of verbs to the perfect tenses (present, past and future perfect) and learn to distinguish and use regular and irregular verbs correctly in different kinds of essay.",
  topics: [
    {
      slug: "the-perfect-tenses",
      title: "The Perfect Tenses",
      objective:
        "By the end of the topic, learners should be able to form and use the present perfect, past perfect and future perfect tenses correctly, and choose the right perfect tense to show the sequence of events in a sentence.",
      estimatedMinutes: 160,
      notes: `## What the perfect tenses do

We have already met the **simple** tenses (I walk, I walked, I will walk) and the **progressive** tenses (I am walking). The **perfect tenses** are the third group. They describe an action in relation to **another point in time** — normally an action that is **completed before** that point, or that began earlier and still matters. All three perfect tenses are built the same way:

> **a form of the helping verb *have* + the past participle of the main verb**

## The past participle — the "third form"

Every verb has three key forms: the **base**, the **simple past**, and the **past participle**. The perfect tenses use the third one.

| Base | Simple past | Past participle |
| --- | --- | --- |
| walk | walked | walked |
| eat | ate | eaten |
| write | wrote | written |
| go | went | gone |
| see | saw | seen |
| do | did | done |
| take | took | taken |
| speak | spoke | spoken |
| break | broke | broken |
| give | gave | given |

Regular verbs use the same word (*-ed*) for both past and participle; irregular verbs often differ (*ate* / *eaten*), so the participle must be learned.

## The present perfect — *has / have + past participle*

The present perfect links the **past to the present**. Use it when:

- the action happened at an **unspecified** past time and still matters now: *She **has finished** her homework* (so she is free now);
- the action **began in the past and continues** to the present: *They **have lived** in Gbarnga for ten years* (and still do).

It goes with the signal words *just, already, ever, never, yet, so far, since* (a point in time) and *for* (a length of time): *I **have just eaten**; **Have** you **ever** flown? We **have** known each other **since** 2015.*

## The past perfect — *had + past participle*

The past perfect is the "**past before the past**." It shows which of **two past actions happened first**.

- *By the time we arrived, the bus **had left**.* → the bus left **first**, then we arrived.

\`\`\`svg How the past perfect orders two past events
<svg viewBox="0 0 460 130" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <line x1="20" y1="70" x2="440" y2="70" stroke="#8a5833" stroke-width="2"/>
  <polygon points="440,70 430,65 430,75" fill="#8a5833"/>
  <circle cx="140" cy="70" r="5" fill="#8a5833"/>
  <circle cx="300" cy="70" r="5" fill="#8a5833"/>
  <g font-size="12.5" text-anchor="middle">
    <text x="140" y="52" font-weight="bold">the bus had left</text>
    <text x="140" y="92">(earlier past)</text>
    <text x="300" y="52" font-weight="bold">we arrived</text>
    <text x="300" y="92">(later past)</text>
    <text x="415" y="60">now</text>
  </g>
</svg>
\`\`\`

## The future perfect — *will have + past participle*

The future perfect shows an action that **will be completed before a stated point in the future**.

- *By next June, she **will have graduated**.* (the graduating is finished before June arrives)
- *By the time you return, I **will have cooked** dinner.*

## Summary table

| Tense | Form | Example |
| --- | --- | --- |
| Present perfect | has / have + past participle | *I **have eaten**.* |
| Past perfect | had + past participle | *I **had eaten** before he came.* |
| Future perfect | will have + past participle | *I **will have eaten** by noon.* |

## A common confusion: simple past vs present perfect

This is the error to attack directly:

- **Simple past** — a finished action at a **stated** past time: *I **saw** him **yesterday**.*
- **Present perfect** — a past action with a **link to now** and **no** stated time: *I **have seen** that film.*

You may **not** use the present perfect with a finished-time expression: ✗ *I have seen him yesterday* → ✓ *I **saw** him yesterday.* If the sentence names exactly when (yesterday, last week, in 2019), use the simple past.`,
      workedExample: `**Task.** Choose the correct perfect tense for each sentence and explain why.

1. *By the time the teacher entered, the students ___ (finish) their test.*
2. *She ___ (live) in Monrovia since 2018.*
3. *By this time next week, we ___ (complete) the project.*

**Answers**

1. **had finished** — *past perfect*. Two past events: finishing the test came **before** the teacher entered, so the earlier action takes *had + past participle*. → "the students **had finished** their test."

2. **has lived** — *present perfect*. The action started in the past (2018) and **continues to now**, and "since" signals the present perfect. → "She **has lived** in Monrovia since 2018."

3. **will have completed** — *future perfect*. The action will be finished **before a future point** ("by this time next week"), which calls for *will have + past participle*. → "we **will have completed** the project."

**Key idea:** the perfect tenses are about **sequence** — one action completed in relation to another moment. Identify that other moment (past, present or future) and the right perfect tense follows.`,
      teachingTip:
        "Learners default to the simple past everywhere. Anchor the past perfect with a two-event timeline on the board: draw the two past actions and ask 'which happened first?' — the earlier one gets 'had'. For the present perfect, ban stated past-time words ('yesterday', 'last week') outright; if the sentence names a finished time, it must be simple past, not present perfect.",
      quiz: [
        {
          prompt: "All perfect tenses are formed with the helping verb…",
          options: ["have (have/has/had/will have)", "be", "do", "will"],
          correctIndex: 0,
          explanation: "Perfect tenses use a form of 'have' + past participle.",
        },
        {
          prompt: "The present perfect is formed with…",
          options: ["has/have + past participle", "had + past participle", "will + verb", "am/is/are + verb-ing"],
          correctIndex: 0,
          explanation: "Present perfect = has/have + past participle.",
        },
        {
          prompt: "The past participle of 'eat' is…",
          options: ["eaten", "ate", "eating", "eated"],
          correctIndex: 0,
          explanation: "eat → ate → eaten.",
        },
        {
          prompt: "Which sentence is in the present perfect?",
          options: ["She has finished her work.", "She finished her work.", "She will finish her work.", "She is finishing her work."],
          correctIndex: 0,
          explanation: "'has finished' is the present perfect.",
        },
        {
          prompt: "The past perfect is formed with…",
          options: ["had + past participle", "has + past participle", "will have + past participle", "was + verb-ing"],
          correctIndex: 0,
          explanation: "Past perfect = had + past participle.",
        },
        {
          prompt: "Which sentence uses the past perfect correctly?",
          options: [
            "By the time we arrived, the bus had left.",
            "By the time we arrived, the bus has left.",
            "By the time we arrived, the bus leaves.",
            "By the time we arrived, the bus will leave.",
          ],
          correctIndex: 0,
          explanation: "'had left' shows the earlier of two past actions.",
        },
        {
          prompt: "The future perfect is formed with…",
          options: ["will have + past participle", "will + verb", "had + past participle", "have + verb-ing"],
          correctIndex: 0,
          explanation: "Future perfect = will have + past participle.",
        },
        {
          prompt: "Which sentence is in the future perfect?",
          options: [
            "By June, she will have graduated.",
            "By June, she graduated.",
            "By June, she graduates.",
            "By June, she is graduating.",
          ],
          correctIndex: 0,
          explanation: "'will have graduated' is the future perfect.",
        },
        {
          prompt: "The present perfect often appears with which word?",
          options: ["already", "yesterday", "last year", "ago"],
          correctIndex: 0,
          explanation: "already, just, ever, never, yet, since, for signal the present perfect.",
        },
        {
          prompt: "Which is INCORRECT?",
          options: [
            "I have seen him yesterday.",
            "I saw him yesterday.",
            "I have seen that film.",
            "I had seen it before.",
          ],
          correctIndex: 0,
          explanation: "You cannot use the present perfect with 'yesterday' (a finished time).",
        },
        {
          prompt: "The past perfect shows an action completed…",
          options: ["before another past action", "in the future", "right now", "at the same time as another"],
          correctIndex: 0,
          explanation: "It is the 'past before the past'.",
        },
        {
          prompt: "Complete: 'They ___ in Kakata for five years and still live there.'",
          options: ["have lived", "lived", "will live", "had lived"],
          correctIndex: 0,
          explanation: "Started in the past, continues now → present perfect.",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writing", "writed"],
          correctIndex: 0,
          explanation: "write → wrote → written.",
        },
        {
          prompt: "Complete: 'By the time he called, I ___ already ___ (leave).'",
          options: ["had … left", "have … left", "will have … left", "am … leaving"],
          correctIndex: 0,
          explanation: "Earlier of two past actions → past perfect 'had left'.",
        },
        {
          prompt: "Which tense links a past action to the present?",
          options: ["present perfect", "past perfect", "future perfect", "simple past"],
          correctIndex: 0,
          explanation: "The present perfect connects past and present.",
        },
        {
          prompt: "Complete: 'By 2030, the school ___ (build) a new library.'",
          options: ["will have built", "has built", "had built", "builds"],
          correctIndex: 0,
          explanation: "Completed before a future point → future perfect.",
        },
        {
          prompt: "The past participle of 'go' is…",
          options: ["gone", "went", "going", "goed"],
          correctIndex: 0,
          explanation: "go → went → gone.",
        },
        {
          prompt: "Which sentence correctly uses the present perfect with 'since'?",
          options: [
            "She has taught here since 2019.",
            "She has taught here in 2019.",
            "She taught here since 2019.",
            "She teaches here since 2019.",
          ],
          correctIndex: 0,
          explanation: "'since 2019' with present perfect shows an action continuing to now.",
        },
        {
          prompt: "Which is the correct order of forms for a regular verb?",
          options: [
            "base, past, past participle (walk, walked, walked)",
            "past, base, participle",
            "participle, base, past",
            "base, participle, past",
          ],
          correctIndex: 0,
          explanation: "The three principal parts are base, past and past participle.",
        },
        {
          prompt: "'I had finished before you arrived' places 'finished'…",
          options: ["before 'arrived'", "after 'arrived'", "at the same time", "in the future"],
          correctIndex: 0,
          explanation: "The past perfect marks the earlier action.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one sentence each in the present perfect, past perfect and future perfect using the verb 'complete'.",
          answerKey:
            "Present perfect e.g. 'I have completed the form.'; Past perfect e.g. 'I had completed the form before the deadline.'; Future perfect e.g. 'I will have completed the form by Friday.' Award a mark per correctly formed tense (has/have, had, will have + 'completed').",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence correctly uses the past perfect?",
          options: [
            "The film had started before we found our seats.",
            "The film has started before we found our seats.",
            "The film starts before we found our seats.",
            "The film will have started before we found our seats.",
          ],
          correctIndex: 0,
          answerKey: "'had started' correctly marks the action that happened first.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the error in this sentence and explain it: 'I have visited my aunt last weekend.'",
          answerKey:
            "Correct to 'I visited my aunt last weekend.' The present perfect cannot be used with a stated finished-time expression ('last weekend'); a specific past time requires the simple past. Award marks for the correction and the reason.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between the simple past and the present perfect, giving two examples of each and stating when to use each one.",
          answerKey:
            "A strong answer explains that the simple past describes a finished action at a stated/known past time (e.g. 'I saw him yesterday'; 'She travelled last year'), while the present perfect describes a past action linked to the present, without a stated time, or one continuing to now (e.g. 'I have seen that film'; 'They have lived here for years'). It notes that finished-time words force the simple past. Award marks for accurate definitions, two valid examples of each, and the usage rule.",
          marks: 5,
        },
      ],
    },
    {
      slug: "regular-and-irregular-verbs",
      title: "Regular and Irregular Verbs",
      objective:
        "By the end of the topic, learners should be able to distinguish regular from irregular verbs, form the past tense and past participle of each type correctly, and use them accurately in writing.",
      estimatedMinutes: 150,
      notes: `## The principal parts of a verb

Every verb has three key forms (its **principal parts**):

1. the **base form** (present): walk, eat
2. the **simple past**: walked, ate
3. the **past participle** (used after have/be): walked, eaten

Knowing these three forms lets you build every tense.

## Regular verbs

A **regular verb** forms its **simple past** and **past participle** by simply adding **-ed** (or **-d**) to the base.

| Base | Simple past | Past participle |
|---|---|---|
| walk | walked | walked |
| play | played | played |
| love | loved | loved |
| carry | carried | carried |

Spelling notes:
- verbs ending in **-e** just add **-d**: love → loved.
- verbs ending in a consonant + **-y** change y to i: carry → carried.
- some short verbs double the final consonant: stop → stopped.

For regular verbs, the simple past and past participle are **the same word**.

## Irregular verbs

An **irregular verb** does **not** add -ed; it changes its form in a way you cannot predict from spelling. There is no single rule, so irregular verbs must be memorised. It helps, though, to notice that they fall into a few **patterns**.

**Pattern 1 — all three forms different** (base / past / participle):

| Base | Simple past | Past participle |
| --- | --- | --- |
| go | went | gone |
| eat | ate | eaten |
| write | wrote | written |
| take | took | taken |
| begin | began | begun |
| see | saw | seen |
| speak | spoke | spoken |
| drink | drank | drunk |

**Pattern 2 — past and participle the same, but different from the base:**

| Base | Simple past | Past participle |
| --- | --- | --- |
| bring | brought | brought |
| buy | bought | bought |
| teach | taught | taught |
| make | made | made |
| find | found | found |
| sit | sat | sat |

**Pattern 3 — all three forms the same:**

| Base | Simple past | Past participle |
| --- | --- | --- |
| put | put | put |
| cut | cut | cut |
| let | let | let |
| hit | hit | hit |

So for many irregular verbs the simple past and past participle **differ** (*go / went / gone*), for others they are **identical** (*buy / bought / bought*), and for a few every form is the **same** (*put / put / put*).

## Why it matters

Choosing the wrong form is a very common error:

- ✗ *I have went to the market.* → ✓ *I have **gone** to the market.* (past participle after "have")
- ✗ *She teached us.* → ✓ *She **taught** us.* (irregular past)
- ✗ *He drinked the water.* → ✓ *He **drank** the water.*

Using the correct principal parts is essential for clear, correct writing in every kind of essay.`,
      workedExample: `**Task.** For each verb, give the simple past and the past participle, say whether it is regular or irregular, and use the past participle correctly in a present-perfect sentence.

**1. jump**
- Simple past: **jumped**; past participle: **jumped** → **regular** (adds -ed).
- Sentence: *The athlete has **jumped** over the bar.*

**2. break**
- Simple past: **broke**; past participle: **broken** → **irregular** (unpredictable change).
- Sentence: *Someone has **broken** the window.*

**3. carry**
- Simple past: **carried**; past participle: **carried** → **regular** (y → i, add -ed).
- Sentence: *She has **carried** the load all day.*

**4. speak**
- Simple past: **spoke**; past participle: **spoken** → **irregular**.
- Sentence: *The principal has **spoken** to the class.*

**Key point:** with regular verbs the two forms match (jumped/jumped); with many irregular verbs they differ (broke/broken, spoke/spoken). After "have/has/had" you must use the **past participle**, never the simple past — "has broken", not "has broke".`,
      teachingTip:
        "The highest-value drill here is the 'have + past participle' test. Learners write 'I have went' because they don't separate the simple past ('went') from the past participle ('gone'). Give them a short list of the most common irregular verbs to memorise as three columns, and have them read each row aloud — 'go, went, gone' — until the third column comes automatically after 'have'.",
      quiz: [
        {
          prompt: "A regular verb forms its past tense by adding…",
          options: ["-ed (or -d)", "-ing", "-s", "nothing"],
          correctIndex: 0,
          explanation: "Regular verbs add -ed/-d for the past and past participle.",
        },
        {
          prompt: "The three principal parts of a verb are the base, the simple past, and the…",
          options: ["past participle", "present participle", "infinitive", "gerund"],
          correctIndex: 0,
          explanation: "Base, simple past and past participle are the principal parts.",
        },
        {
          prompt: "Which verb is regular?",
          options: ["walk", "go", "eat", "write"],
          correctIndex: 0,
          explanation: "walk → walked → walked follows the -ed rule.",
        },
        {
          prompt: "Which verb is irregular?",
          options: ["eat", "play", "jump", "love"],
          correctIndex: 0,
          explanation: "eat → ate → eaten does not add -ed.",
        },
        {
          prompt: "The simple past of 'carry' is…",
          options: ["carried", "carryed", "carry", "carrying"],
          correctIndex: 0,
          explanation: "Consonant + y changes to i: carried.",
        },
        {
          prompt: "The past participle of 'go' is…",
          options: ["gone", "went", "goed", "going"],
          correctIndex: 0,
          explanation: "go → went → gone.",
        },
        {
          prompt: "For a regular verb, the simple past and past participle are…",
          options: ["the same word", "always different", "both -ing forms", "never used"],
          correctIndex: 0,
          explanation: "Regular verbs use the same -ed form for both.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["I have gone to the market.", "I have went to the market.", "I have go to the market.", "I have going to the market."],
          correctIndex: 0,
          explanation: "After 'have' use the past participle 'gone', not 'went'.",
        },
        {
          prompt: "The simple past of 'begin' is…",
          options: ["began", "begun", "beginned", "beginning"],
          correctIndex: 0,
          explanation: "begin → began → begun.",
        },
        {
          prompt: "The past participle of 'break' is…",
          options: ["broken", "broke", "breaked", "breaking"],
          correctIndex: 0,
          explanation: "break → broke → broken.",
        },
        {
          prompt: "Which correction is right? 'She teached us maths.'",
          options: ["She taught us maths.", "She teach us maths.", "She teaches us maths.", "She teachted us maths."],
          correctIndex: 0,
          explanation: "'teach' is irregular: teach → taught → taught.",
        },
        {
          prompt: "The simple past of 'stop' is…",
          options: ["stopped", "stoped", "stop", "stopping"],
          correctIndex: 0,
          explanation: "Short verb doubles the consonant: stopped.",
        },
        {
          prompt: "Which verb keeps the same form in all three principal parts?",
          options: ["put", "eat", "go", "see"],
          correctIndex: 0,
          explanation: "put → put → put.",
        },
        {
          prompt: "The past participle of 'take' is…",
          options: ["taken", "took", "taked", "taking"],
          correctIndex: 0,
          explanation: "take → took → taken.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["He drank the water.", "He drinked the water.", "He drunk the water.", "He drinks the water yesterday."],
          correctIndex: 0,
          explanation: "drink → drank (simple past) → drunk (participle).",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writed", "writing"],
          correctIndex: 0,
          explanation: "write → wrote → written.",
        },
        {
          prompt: "'The past participle is used after which helping verb to form the perfect tenses?'",
          options: ["have", "will", "do", "can"],
          correctIndex: 0,
          explanation: "have/has/had + past participle forms the perfect tenses.",
        },
        {
          prompt: "Which is the correct past form? 'They ___ the song beautifully.' (sing)",
          options: ["sang", "singed", "sung", "sing"],
          correctIndex: 0,
          explanation: "sing → sang (simple past) → sung.",
        },
        {
          prompt: "The simple past of 'love' is…",
          options: ["loved", "loveed", "loving", "love"],
          correctIndex: 0,
          explanation: "Ends in -e, so just add -d: loved.",
        },
        {
          prompt: "Why must irregular verbs be memorised?",
          options: [
            "They do not follow the -ed rule",
            "They have no past tense",
            "They are always one syllable",
            "They cannot be used in writing",
          ],
          correctIndex: 0,
          explanation: "Irregular verbs change unpredictably, so each must be learned.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give the simple past and past participle of these verbs and state whether each is regular or irregular: (a) play, (b) speak, (c) put.",
          answerKey:
            "(a) play – played, played – regular. (b) speak – spoke, spoken – irregular. (c) put – put, put – irregular. Award marks for correct forms and correct classification.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the correct past participle?",
          options: [
            "The bell has rung.",
            "The bell has rang.",
            "The bell has ringed.",
            "The bell has ring.",
          ],
          correctIndex: 0,
          answerKey: "ring → rang → rung; after 'has' use the participle 'rung'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the verb errors: 'Yesterday she teached the class and has drank her tea before she goed home.'",
          answerKey:
            "Corrected: 'Yesterday she taught the class and had drunk her tea before she went home.' (teach→taught, has drank→had drunk, goed→went). Award a mark per correctly fixed verb.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between regular and irregular verbs, giving three examples of each with their three principal parts.",
          answerKey:
            "A strong answer explains that regular verbs form the simple past and past participle by adding -ed (base/past/participle the same, e.g. walk/walked/walked, play/played/played, love/loved/loved), while irregular verbs change unpredictably and must be memorised (e.g. go/went/gone, eat/ate/eaten, write/wrote/written). Award marks for the definitions and three correct principal-part sets for each type.",
          marks: 5,
        },
      ],
    },
  ],
};
