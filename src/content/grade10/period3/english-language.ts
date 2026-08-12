import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester One, Period III: Grammar — Verbs Part 2. CONTENTS: (1) Verbs Part 2 —
// (a) tenses (present perfect, past perfect, future perfect), (b) regular verbs,
// (c) irregular verbs; (2) comparative and superlative forms (persuasive essay).
// Each lettered content item is taught here as its own topic.
export const englishLanguageG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Verbs — Part 2",
  summary:
    "Period III of the MoE Grade 10 English syllabus. Learners use the perfect tenses correctly, distinguish regular from irregular verbs and how they form their past tenses, and form the comparative and superlative degrees — skills applied in persuasive writing.",
  topics: [
    {
      // source: LibreTexts — College of the Sequoias, Reading and Composition, 17.15 Verb Tenses (https://human.libretexts.org/Courses/College_of_the_Sequoias/Reading_and_Composition/17:_Grammar/17.15:_Verb_Tenses)
      slug: "perfect-tenses",
      title: "The Perfect Tenses",
      objective:
        "By the end of the topic, learners should be able to form the present perfect, past perfect and future perfect with have/has/had/will have + the past participle, and choose each tense to show an action completed in relation to another time.",
      estimatedMinutes: 150,
      notes: `## What the perfect tenses do

The **perfect tenses** describe an action **completed in relation to another point in time**. Each is built from a form of **have** + the **past participle** of the main verb (e.g. *worn, donated, built, apologized*).

\`\`\`svg The three perfect tenses in time
<svg viewBox="0 0 470 160" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <line x1="20" y1="80" x2="450" y2="80" stroke="#8a5833" stroke-width="2"/>
  <polygon points="450,80 440,75 440,85" fill="#8a5833"/>
  <text x="235" y="150" text-anchor="middle" font-size="11.5" fill="#6a5a48">Each perfect tense marks an action finished before a reference point.</text>
  <g font-size="12.5" text-anchor="middle">
    <circle cx="110" cy="80" r="4" fill="#8a5833"/>
    <text x="110" y="60" font-weight="bold">PAST PERFECT</text>
    <text x="110" y="102">had built</text>
    <circle cx="250" cy="80" r="4" fill="#8a5833"/>
    <text x="250" y="60" font-weight="bold">PRESENT PERFECT</text>
    <text x="250" y="102">has donated</text>
    <circle cx="390" cy="80" r="4" fill="#8a5833"/>
    <text x="390" y="60" font-weight="bold">FUTURE PERFECT</text>
    <text x="390" y="102">will have apologized</text>
  </g>
</svg>
\`\`\`

## Present perfect

**Present perfect** — an action that **began in the past and continues to, or is completed at, the present**. Formed with **have / has + past participle**.

- *We **have worn** organic cotton shirts.*
- *She **has donated** extensively to UNICEF.*

Use **has** with a singular third-person subject (*he, she, it*) and **have** with the others.

## Past perfect

**Past perfect** — an action occurring **before a certain time in the past** (the "past before the past"). Formed with **had + past participle**.

- *By 1995, Doctor Harvey **had built** the first artificial brain.*
- *The train **had left** before we reached the station.*

## Future perfect

**Future perfect** — an action that **will be finished by a certain future time**. Formed with **will have + past participle**.

- *By Thursday, the President **will have apologized** for his mistake.*
- *By June, they **will have completed** the bridge.*

## The past participle

The perfect tenses depend on the **past participle** — the third principal part of a verb.

- **Regular verbs:** the past participle is the same as the simple past (**-ed**): *walk → walked → (have) walked.*
- **Irregular verbs:** the past participle is often a special form: *write → wrote → (have) written; eat → ate → (have) eaten; go → went → (have) gone.*

## Summary

| Tense | Meaning | Form | Example |
| --- | --- | --- | --- |
| Present perfect | started in the past, reaches the present | have/has + past participle | She has donated. |
| Past perfect | finished before a past point | had + past participle | He had built it. |
| Future perfect | will finish before a future point | will have + past participle | We will have arrived. |`,
      workedExample: `**Task.** Put the verb in brackets into the perfect tense named, then explain the time relationship.

1. *By the time we arrived, the film (start) — past perfect.*
2. *She (live) in Bong County since 2010 — present perfect.*
3. *By next year, I (finish) secondary school — future perfect.*

**Answers**

1. *By the time we arrived, the film **had started**.* — past perfect (had + past participle). The film's starting was finished **before** the past moment "we arrived".
2. *She **has lived** in Bong County since 2010.* — present perfect (has + past participle). The living began in the past and **continues to the present**.
3. *By next year, I **will have finished** secondary school.* — future perfect (will have + past participle). The finishing will be complete **before** the future point "next year".

**Rule applied:** every perfect tense = a form of **have** + the **past participle**; the form of *have* fixes the time frame.`,
      quiz: [
        {
          prompt: "The perfect tenses are built from a form of 'have' plus the…",
          options: ["past participle", "base form", "-ing form", "present participle"],
          correctIndex: 0,
          explanation: "Perfect = have/has/had/will have + the past participle.",
        },
        {
          prompt: "The present perfect is formed with…",
          options: ["have/has + past participle", "had + past participle", "will have + past participle", "am/is/are + -ing"],
          correctIndex: 0,
          explanation: "Present perfect uses have or has plus the past participle.",
        },
        {
          prompt: "Which sentence is in the present perfect?",
          options: ["She has donated to UNICEF.", "She donated last year.", "She will donate.", "She is donating."],
          correctIndex: 0,
          explanation: "'Has donated' is the present perfect.",
        },
        {
          prompt: "The past perfect shows an action finished…",
          options: ["before a past point", "at the present", "after a future point", "right now"],
          correctIndex: 0,
          explanation: "The past perfect is the 'past before the past'.",
        },
        {
          prompt: "The past perfect is formed with…",
          options: ["had + past participle", "have + past participle", "will have + past participle", "was + -ing"],
          correctIndex: 0,
          explanation: "Past perfect uses 'had' plus the past participle.",
        },
        {
          prompt: "Which sentence is in the past perfect?",
          options: ["The train had left before we arrived.", "The train left.", "The train leaves.", "The train will leave."],
          correctIndex: 0,
          explanation: "'Had left' is the past perfect, an action before another past action.",
        },
        {
          prompt: "The future perfect shows an action finished…",
          options: ["by a future time", "before a past time", "at present", "never"],
          correctIndex: 0,
          explanation: "The future perfect marks completion by a certain future point.",
        },
        {
          prompt: "The future perfect is formed with…",
          options: ["will have + past participle", "will + base verb", "had + past participle", "have + -ing"],
          correctIndex: 0,
          explanation: "Future perfect uses 'will have' plus the past participle.",
        },
        {
          prompt: "Which sentence is in the future perfect?",
          options: ["By June they will have finished.", "In June they finished.", "They finish in June.", "They are finishing."],
          correctIndex: 0,
          explanation: "'Will have finished' is the future perfect.",
        },
        {
          prompt: "Use 'has' or 'have'? 'The children ___ eaten already.'",
          options: ["have", "has", "had", "having"],
          correctIndex: 0,
          explanation: "Plural subject 'children' takes 'have eaten'.",
        },
        {
          prompt: "Use 'has' or 'have'? 'She ___ finished her work.'",
          options: ["has", "have", "had", "will"],
          correctIndex: 0,
          explanation: "Singular third-person 'she' takes 'has finished'.",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writing", "writes"],
          correctIndex: 0,
          explanation: "write → wrote → (have) written.",
        },
        {
          prompt: "The past participle of 'eat' is…",
          options: ["eaten", "ate", "eating", "eats"],
          correctIndex: 0,
          explanation: "eat → ate → (have) eaten.",
        },
        {
          prompt: "For a regular verb, the past participle is the same as the…",
          options: ["simple past (-ed)", "base form", "-ing form", "third-person -s form"],
          correctIndex: 0,
          explanation: "Regular verbs: walked = simple past = past participle.",
        },
        {
          prompt: "Which correctly completes the present perfect? 'They ___ the report.'",
          options: ["have written", "have wrote", "has wrote", "had wrote"],
          correctIndex: 0,
          explanation: "have + past participle 'written' = 'have written'.",
        },
        {
          prompt: "'By 1995, Dr Harvey had built the first artificial brain.' The tense is…",
          options: ["past perfect", "present perfect", "future perfect", "simple past"],
          correctIndex: 0,
          explanation: "'Had built' is past perfect, completed before the 1995 reference.",
        },
        {
          prompt: "Which sentence correctly uses the present perfect with 'since'?",
          options: ["She has lived here since 2010.", "She lives here since 2010.", "She living here since 2010.", "She will live here since 2010."],
          correctIndex: 0,
          explanation: "An action continuing from the past to now takes the present perfect.",
        },
        {
          prompt: "Choose the correct past perfect: 'We ___ before the guests arrived.'",
          options: ["had eaten", "have eaten", "eat", "will have eaten"],
          correctIndex: 0,
          explanation: "An action before a past event uses the past perfect 'had eaten'.",
        },
        {
          prompt: "The past participle of 'go' is…",
          options: ["gone", "went", "going", "goes"],
          correctIndex: 0,
          explanation: "go → went → (have) gone.",
        },
        {
          prompt: "Which sentence is NOT a perfect tense?",
          options: ["She is writing a letter.", "She has written a letter.", "She had written a letter.", "She will have written a letter."],
          correctIndex: 0,
          explanation: "'Is writing' is progressive, not perfect (no have + past participle).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one sentence each in the present perfect, past perfect and future perfect using the verb 'finish'.",
          answerKey:
            "Present perfect e.g. 'I have finished the task.'; Past perfect 'I had finished before she came.'; Future perfect 'By noon I will have finished.' Award a mark per correctly-formed tense (have/had/will have + finished).",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is in the past perfect?",
          options: [
            "The bell had rung before the teacher entered.",
            "The bell rings at eight.",
            "The bell will ring soon.",
            "The bell has rung.",
          ],
          correctIndex: 0,
          answerKey: "'Had rung' (had + past participle) before another past action is the past perfect.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give the past participle of each verb: (a) speak (b) take (c) walk.",
          answerKey:
            "(a) spoken (b) taken (c) walked. Award a mark for each correct past participle; note (c) is regular so it equals the simple past.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the error: 'She have wrote three letters.'",
          answerKey:
            "Expected: 'She has written three letters.' Two fixes: 'has' (singular subject) and the past participle 'written'. Full marks for both corrections.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between the three perfect tenses. Give the form of each, and one example sentence per tense showing the time relationship it expresses.",
          answerKey:
            "A strong answer defines present perfect (have/has + past participle; past action reaching the present), past perfect (had + past participle; finished before a past point), and future perfect (will have + past participle; finished by a future point), each with a correct example that shows the time relationship. Award marks for the three forms and three well-chosen examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — City College of San Francisco, Writing, Reading, and College Success, 12.6 Verbs and Verb Tense (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_Reading_and_College_Success:_A_First-Year_Composition_Course_for_All_Learners_(Kashyap_and_Dyquisto)/12:_Grammar/12.06:_Verbs_and_Verb_Tense)
      slug: "regular-verbs",
      title: "Regular Verbs",
      objective:
        "By the end of the topic, learners should be able to form the past tense and past participle of regular verbs by adding -ed or -d, and apply the spelling rules for silent -e, consonant + y, and doubling the final consonant.",
      estimatedMinutes: 130,
      notes: `## What a regular verb is

**Regular verb** — a verb that forms its **past tense** and **past participle** by adding **-ed** (or **-d**) to the base form. The great majority of English verbs are regular.

- Present: *Tim **walks** to the store.*
- Past: *Yesterday they **walked** to the store.*
- Future: *I **will walk** to the store tomorrow.*

For a regular verb the **simple past** and the **past participle** are the **same word**: *walk → walked → (have) walked.*

## The spelling rules for -ed

**1. Base ending in silent -e → add only -d.**

- *erase → erased, live → lived, hope → hoped, use → used.*

**2. Consonant + y → change y to i and add -ed (-ied).**

- *carry → carried, study → studied, try → tried, marry → married.*
- (A **vowel** + y just adds -ed: *play → played, enjoy → enjoyed.*)

**3. One stressed vowel + one consonant → double the consonant, then add -ed.**

- *stop → stopped, plan → planned, beg → begged, prefer → preferred.*
- (Do **not** double *w, x* or *y*: *fix → fixed, snow → snowed.*)

**4. Otherwise → just add -ed.**

- *walk → walked, jump → jumped, wait → waited, open → opened.*

## Pronunciation note

The **-ed** ending is spelled the same but sounds three ways: */t/* (*walked*), */d/* (*played*), and */id/* after *t* or *d* (*waited, needed*). The spelling never changes.

## Summary

| Base ends in… | Rule | Example |
| --- | --- | --- |
| silent -e | add -d | live → lived |
| consonant + y | y to i, add -ed | study → studied |
| vowel + y | add -ed | play → played |
| 1 stressed vowel + 1 consonant | double, add -ed | stop → stopped |
| anything else | add -ed | walk → walked |`,
      workedExample: `**Task.** Write the simple past of each regular verb and name the spelling rule used.

1. *hope*  2. *carry*  3. *plan*  4. *play*  5. *open*

**Answers**

1. *hope → **hoped*** — base ends in silent **-e**, so add only **-d**.
2. *carry → **carried*** — **consonant + y**, so change y to i and add **-ed**.
3. *plan → **planned*** — **one stressed vowel + one consonant**, so double the *n* and add **-ed**.
4. *play → **played*** — **vowel + y**, so simply add **-ed** (no change to y).
5. *open → **opened*** — no special ending, so just add **-ed**.

**Rule applied:** all five are regular verbs, so the past and past participle are the same -ed form; only the spelling adjusts to the ending of the base.`,
      quiz: [
        {
          prompt: "A regular verb forms its past tense by adding…",
          options: ["-ed or -d", "a new spelling", "-ing", "-s"],
          correctIndex: 0,
          explanation: "Regular verbs add -ed (or -d) for the past and past participle.",
        },
        {
          prompt: "For a regular verb, the past participle is…",
          options: ["the same as the simple past", "the base form", "the -ing form", "always irregular"],
          correctIndex: 0,
          explanation: "walked = simple past = past participle for regular verbs.",
        },
        {
          prompt: "The past of 'walk' is…",
          options: ["walked", "walk", "walking", "walken"],
          correctIndex: 0,
          explanation: "Just add -ed: walked.",
        },
        {
          prompt: "The past of 'live' is…",
          options: ["lived", "lifed", "living", "liveed"],
          correctIndex: 0,
          explanation: "Base ends in silent -e, so add only -d: lived.",
        },
        {
          prompt: "The past of 'study' is…",
          options: ["studied", "studyed", "studed", "studying"],
          correctIndex: 0,
          explanation: "Consonant + y changes to -ied: studied.",
        },
        {
          prompt: "The past of 'stop' is…",
          options: ["stopped", "stoped", "stopt", "stopping"],
          correctIndex: 0,
          explanation: "One stressed vowel + one consonant: double the p, add -ed: stopped.",
        },
        {
          prompt: "The past of 'play' is…",
          options: ["played", "plaied", "plaid", "playd"],
          correctIndex: 0,
          explanation: "Vowel + y just adds -ed: played.",
        },
        {
          prompt: "The past of 'carry' is…",
          options: ["carried", "carryed", "carreid", "carring"],
          correctIndex: 0,
          explanation: "Consonant + y changes to -ied: carried.",
        },
        {
          prompt: "Which verb doubles its final consonant before -ed?",
          options: ["plan", "open", "wait", "jump"],
          correctIndex: 0,
          explanation: "plan → planned (one stressed vowel + one consonant).",
        },
        {
          prompt: "Which verb does NOT double its final consonant?",
          options: ["fix", "stop", "beg", "plan"],
          correctIndex: 0,
          explanation: "Never double w, x or y: fix → fixed.",
        },
        {
          prompt: "The past of 'hope' is…",
          options: ["hoped", "hopped", "hopeed", "hoping"],
          correctIndex: 0,
          explanation: "Silent -e, add only -d: hoped. ('hopped' is from 'hop'.)",
        },
        {
          prompt: "The past of 'try' is…",
          options: ["tried", "tryed", "tride", "trying"],
          correctIndex: 0,
          explanation: "Consonant + y changes to -ied: tried.",
        },
        {
          prompt: "The past of 'enjoy' is…",
          options: ["enjoyed", "enjoied", "enjoid", "enjoing"],
          correctIndex: 0,
          explanation: "Vowel + y just adds -ed: enjoyed.",
        },
        {
          prompt: "The past of 'prefer' is…",
          options: ["preferred", "prefered", "preferd", "prefering"],
          correctIndex: 0,
          explanation: "Stress on the last syllable: double the r, add -ed: preferred.",
        },
        {
          prompt: "Which is a regular verb?",
          options: ["jump", "go", "eat", "write"],
          correctIndex: 0,
          explanation: "'jump → jumped' is regular; go, eat and write are irregular.",
        },
        {
          prompt: "Which past-tense spelling is correct?",
          options: ["waited", "waitted", "waeted", "waiteed"],
          correctIndex: 0,
          explanation: "'wait' just adds -ed: waited.",
        },
        {
          prompt: "The -ed ending in 'walked' is pronounced…",
          options: ["/t/", "/id/", "/z/", "/ing/"],
          correctIndex: 0,
          explanation: "After the /k/ sound, -ed is pronounced /t/, though spelling stays -ed.",
        },
        {
          prompt: "Which spelling is wrong?",
          options: ["studyed", "studied", "carried", "tried"],
          correctIndex: 0,
          explanation: "It should be 'studied' (consonant + y to -ied).",
        },
        {
          prompt: "The past of 'open' is…",
          options: ["opened", "openned", "opend", "openeed"],
          correctIndex: 0,
          explanation: "No special ending and stress is not on the last syllable: opened.",
        },
        {
          prompt: "In 'They have walked far', 'walked' is the…",
          options: ["past participle", "simple past only", "present tense", "-ing form"],
          correctIndex: 0,
          explanation: "After 'have', 'walked' is the past participle (same as simple past for regular verbs).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write the simple past of each verb and name the rule used: (a) hope (b) marry (c) beg (d) enjoy.",
          answerKey:
            "(a) hoped — silent e, add -d; (b) married — consonant + y to -ied; (c) begged — double the final consonant; (d) enjoyed — vowel + y, add -ed. Award a mark per correct form + rule.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which past-tense form is spelled correctly?",
          options: ["planned", "planed", "plannd", "planed"],
          correctIndex: 0,
          answerKey: "'plan' doubles the n before -ed: planned.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the two spelling errors: 'She studyed hard and stoped only for lunch.'",
          answerKey:
            "Expected: 'She studied hard and stopped only for lunch.' 'studyed' → 'studied' (y to -ied); 'stoped' → 'stopped' (double the p). Award a mark per correction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain why 'fixed' does not double the final consonant but 'stopped' does.",
          answerKey:
            "The doubling rule applies to one stressed vowel + one consonant, but never to w, x or y; 'fix' ends in x, so it just adds -ed (fixed). 'stop' ends in one vowel + one consonant (p), so the p doubles (stopped). Award marks for naming the doubling rule and the x exception.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how regular verbs form their past tense, covering all four spelling rules with your own examples. Explain why regular verbs are easier to learn than irregular ones.",
          answerKey:
            "A strong answer states that regular verbs add -ed/-d (past = past participle) and covers: silent -e adds -d; consonant + y to -ied; doubling one stressed vowel + one consonant (not w/x/y); otherwise add -ed — each with a correct example. It notes regular verbs follow a predictable rule while irregular verbs must be memorised. Award marks for the four rules, examples, and the comparison.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — City College of San Francisco, Writing, Reading, and College Success, 12.6 Verbs and Verb Tense (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_Reading_and_College_Success:_A_First-Year_Composition_Course_for_All_Learners_(Kashyap_and_Dyquisto)/12:_Grammar/12.06:_Verbs_and_Verb_Tense)
      slug: "irregular-verbs",
      title: "Irregular Verbs",
      objective:
        "By the end of the topic, learners should be able to recognise irregular verbs, recall the past and past-participle forms of common irregular verbs, and use their three principal parts correctly in sentences.",
      estimatedMinutes: 140,
      notes: `## What an irregular verb is

**Irregular verb** — a verb that does **not** form its past tense with **-ed**; instead it **changes its spelling** in the past and the past participle. Because there is no single rule, irregular verbs must be **memorised**.

- ✗ *keeped* → ✓ *Lauren **kept** all her letters.*
- ✗ *goed* → ✓ *We **went** home.*

The most common verbs in English are irregular, including **be, do, have.**

## The three principal parts

Every verb has three principal parts: the **base form**, the **simple past**, and the **past participle** (used after *have/has/had*). For irregular verbs, learn all three together.

| Base | Simple past | Past participle |
| --- | --- | --- |
| be | was / were | been |
| do | did | done |
| have | had | had |
| go | went | gone |
| eat | ate | eaten |
| see | saw | seen |
| take | took | taken |
| come | came | come |
| write | wrote | written |
| begin | began | begun |
| speak | spoke | spoken |
| give | gave | given |
| know | knew | known |
| drink | drank | drunk |
| break | broke | broken |
| bring | brought | brought |
| buy | bought | bought |
| think | thought | thought |
| run | ran | run |
| drive | drove | driven |

## Patterns that help

Some irregular verbs fall into loose groups, which makes them easier to remember:

- **No change at all:** *cut → cut → cut; put → put → put; let → let → let; hit → hit → hit.*
- **Same past and participle:** *buy → bought → bought; bring → brought → brought; teach → taught → taught.*
- **Three different forms:** *ring → rang → rung; sing → sang → sung; drink → drank → drunk.*

## Common errors

- Adding -ed to an irregular verb: ✗ *He **breaked** the cup* → ✓ *He **broke** the cup.*
- Using the past participle without *have*: ✗ *I **seen** it yesterday* → ✓ *I **saw** it yesterday* / *I **have seen** it.*
- Using the simple past after *have*: ✗ *She has **wrote*** → ✓ *She has **written**.*

## Summary

- Irregular verbs change spelling; they do **not** add -ed.
- Learn the **three principal parts** (base, past, past participle) as a set.
- Use the **simple past** alone, but the **past participle** with *have/has/had*.`,
      workedExample: `**Task.** Complete the table and then use each past participle in a present-perfect sentence.

| Base | Simple past | Past participle |
| --- | --- | --- |
| write | ? | ? |
| go | ? | ? |
| break | ? | ? |

**Answers**

| Base | Simple past | Past participle |
| --- | --- | --- |
| write | wrote | written |
| go | went | gone |
| break | broke | broken |

Present-perfect sentences (have/has + past participle):

- *She **has written** three letters.*
- *They **have gone** to the farm.*
- *He **has broken** the window.*

**Rule applied:** the **simple past** (wrote, went, broke) stands alone; the **past participle** (written, gone, broken) is used after *have/has*. Never add -ed to these verbs.`,
      quiz: [
        {
          prompt: "An irregular verb forms its past tense by…",
          options: ["changing its spelling", "adding -ed", "adding -ing", "adding -s"],
          correctIndex: 0,
          explanation: "Irregular verbs change spelling and must be memorised.",
        },
        {
          prompt: "The simple past of 'go' is…",
          options: ["went", "goed", "gone", "going"],
          correctIndex: 0,
          explanation: "go → went → gone; the simple past is 'went'.",
        },
        {
          prompt: "The past participle of 'go' is…",
          options: ["gone", "went", "goed", "going"],
          correctIndex: 0,
          explanation: "The past participle (used after have) is 'gone'.",
        },
        {
          prompt: "The simple past of 'eat' is…",
          options: ["ate", "eated", "eaten", "eat"],
          correctIndex: 0,
          explanation: "eat → ate → eaten; the simple past is 'ate'.",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writed", "writing"],
          correctIndex: 0,
          explanation: "write → wrote → written.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["He broke the cup.", "He breaked the cup.", "He broked the cup.", "He breaks the cup yesterday."],
          correctIndex: 0,
          explanation: "'break' is irregular: the simple past is 'broke'.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["She has written the note.", "She has wrote the note.", "She have written the note.", "She has writed the note."],
          correctIndex: 0,
          explanation: "Use the past participle 'written' after 'has'.",
        },
        {
          prompt: "The simple past of 'take' is…",
          options: ["took", "taked", "taken", "takes"],
          correctIndex: 0,
          explanation: "take → took → taken.",
        },
        {
          prompt: "Which verb has the SAME form for base, past and participle?",
          options: ["cut", "write", "go", "eat"],
          correctIndex: 0,
          explanation: "cut → cut → cut (no change).",
        },
        {
          prompt: "The past participle of 'break' is…",
          options: ["broken", "broke", "breaked", "breaking"],
          correctIndex: 0,
          explanation: "break → broke → broken.",
        },
        {
          prompt: "Which is the correct past of 'buy'?",
          options: ["bought", "buyed", "buied", "buing"],
          correctIndex: 0,
          explanation: "buy → bought → bought.",
        },
        {
          prompt: "Which sentence has an error?",
          options: ["I seen it yesterday.", "I saw it yesterday.", "I have seen it.", "I see it now."],
          correctIndex: 0,
          explanation: "'seen' is the past participle; it needs 'have' — use 'saw' for the simple past.",
        },
        {
          prompt: "The three principal parts of a verb are base, simple past and…",
          options: ["past participle", "present participle", "gerund", "infinitive"],
          correctIndex: 0,
          explanation: "Base, simple past, and past participle are the three principal parts.",
        },
        {
          prompt: "The past participle is the form used after…",
          options: ["have / has / had", "will", "do", "is"],
          correctIndex: 0,
          explanation: "The perfect tenses use have/has/had + past participle.",
        },
        {
          prompt: "The simple past of 'begin' is…",
          options: ["began", "begun", "beginned", "beginning"],
          correctIndex: 0,
          explanation: "begin → began → begun; the simple past is 'began'.",
        },
        {
          prompt: "The past participle of 'drink' is…",
          options: ["drunk", "drank", "drinked", "drinking"],
          correctIndex: 0,
          explanation: "drink → drank → drunk.",
        },
        {
          prompt: "Which verb keeps the same past and participle?",
          options: ["bring (brought/brought)", "ring (rang/rung)", "go (went/gone)", "eat (ate/eaten)"],
          correctIndex: 0,
          explanation: "bring → brought → brought (past and participle match).",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["They have gone home.", "They have went home.", "They has gone home.", "They have goed home."],
          correctIndex: 0,
          explanation: "have + past participle 'gone' = 'have gone'.",
        },
        {
          prompt: "The past participle of 'speak' is…",
          options: ["spoken", "spoke", "speaked", "speaking"],
          correctIndex: 0,
          explanation: "speak → spoke → spoken.",
        },
        {
          prompt: "Which are ALL irregular verbs?",
          options: ["go, eat, write", "walk, jump, open", "play, study, carry", "wait, look, plan"],
          correctIndex: 0,
          explanation: "go, eat and write all change spelling; the others are regular.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give the simple past and past participle of each verb: (a) take (b) drink (c) come.",
          answerKey:
            "(a) took / taken; (b) drank / drunk; (c) came / come. Award a mark per verb for both correct forms.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses an irregular verb correctly?",
          options: [
            "She has taken the medicine.",
            "She has took the medicine.",
            "She have taken the medicine.",
            "She has taked the medicine.",
          ],
          correctIndex: 0,
          answerKey: "has + past participle 'taken' = 'has taken'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the verb error: 'He breaked the window and then runned away.'",
          answerKey:
            "Expected: 'He broke the window and then ran away.' 'breaked' → 'broke'; 'runned' → 'ran'. Award a mark per correction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between using 'saw' and 'seen', giving a correct sentence for each.",
          answerKey:
            "'saw' is the simple past and stands alone: 'I saw the film.' 'seen' is the past participle and needs a form of 'have': 'I have seen the film.' Award marks for the distinction and one correct sentence each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what makes a verb irregular and why the three principal parts matter. Group at least six irregular verbs by pattern (no change; same past and participle; three different forms) with examples.",
          answerKey:
            "A strong answer explains that irregular verbs change spelling instead of adding -ed and must be memorised; that the base, simple past and past participle are needed because the simple past stands alone while the participle follows have; and groups at least six verbs correctly (e.g. cut/cut/cut; buy/bought/bought; sing/sang/sung). Award marks for the definition, the principal-parts point, and correct grouping with examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — College of the Sequoias, Reading and Composition, 17.2 Adjectives and Adverbs (https://human.libretexts.org/Courses/College_of_the_Sequoias/Reading_and_Composition/17:_Grammar/17.02:_Adjectives_and_Adverbs)
      slug: "comparative-and-superlative-forms",
      title: "Comparative and Superlative Forms",
      objective:
        "By the end of the topic, learners should be able to form the comparative and superlative degrees of adjectives and adverbs using -er/-est or more/most, handle irregular forms, and use degree words correctly in persuasive writing.",
      estimatedMinutes: 140,
      notes: `## The three degrees

Adjectives and adverbs have three **degrees of comparison**:

- **Positive** — the plain form: *green, delicious, slowly.*
- **Comparative** — compares **two** things: *greener, more delicious, more slowly.*
- **Superlative** — compares **three or more**: *greenest, most delicious, most slowly.*

## How to form the degrees

**1. Short adjectives and adverbs → add -er and -est.**

- *green → greener → greenest; soon → sooner → soonest; fast → faster → fastest.*
- Spelling: silent -e drops (*late → later → latest*); consonant + y changes to i (*happy → happier → happiest*); a short stressed vowel + consonant doubles (*big → bigger → biggest*).

**2. Longer adjectives and most -ly adverbs → use more and most.**

- *delicious → more delicious → most delicious; slowly → more slowly → most slowly; careful → more careful → most careful.*

**3. Irregular forms — memorise these.**

| Positive | Comparative | Superlative |
| --- | --- | --- |
| good / well | better | best |
| bad / badly | worse | worst |
| much / many | more | most |
| little | less | least |
| far | farther / further | farthest / furthest |

## Cautions

- **Do not double up.** ✗ *more taller, most tallest* → ✓ *taller, tallest.* Use **either** -er/-est **or** more/most, never both.
- Some adverbs of **time, place and degree** have no comparison (e.g. *here, now, very*).
- **Absolute** words have no degrees: something cannot be *more perfect, more unique,* or *more final.*

## Degree words in persuasive writing

Comparatives and superlatives make a persuasive case vivid and forceful: *This is the **cheaper** option and by far the **most reliable** brand on the market.* Use them accurately — an unsupported superlative (*the best ever*) weakens an argument, while a well-chosen comparative (*safer than the alternative*) strengthens it.

## Summary

| Word type | Comparative | Superlative |
| --- | --- | --- |
| short (green) | -er (greener) | -est (greenest) |
| long (delicious) | more (more delicious) | most (most delicious) |
| -ly adverb (slowly) | more (more slowly) | most (most slowly) |
| irregular (good) | better | best |`,
      workedExample: `**Task.** Give the comparative and superlative of each word and name the rule used.

1. *big*  2. *careful*  3. *good*  4. *happy*

**Answers**

1. *big → **bigger → biggest*** — short word; add -er/-est and **double** the final consonant (one stressed vowel + one consonant).
2. *careful → **more careful → most careful*** — longer adjective, so use **more/most**.
3. *good → **better → best*** — **irregular**; memorised, not formed by rule.
4. *happy → **happier → happiest*** — short word; add -er/-est and change **consonant + y** to i.

**Common-error check:** never write *more bigger* or *most happiest* — use one method only.`,
      quiz: [
        {
          prompt: "The comparative degree compares…",
          options: ["two things", "three or more things", "one thing", "nothing"],
          correctIndex: 0,
          explanation: "The comparative compares two; the superlative compares three or more.",
        },
        {
          prompt: "The superlative degree compares…",
          options: ["three or more things", "two things", "one thing", "verbs only"],
          correctIndex: 0,
          explanation: "The superlative picks out the extreme among three or more.",
        },
        {
          prompt: "The comparative of 'green' is…",
          options: ["greener", "more green", "greenest", "most green"],
          correctIndex: 0,
          explanation: "Short adjective: add -er → greener.",
        },
        {
          prompt: "The superlative of 'green' is…",
          options: ["greenest", "more green", "most greenest", "greener"],
          correctIndex: 0,
          explanation: "Short adjective: add -est → greenest.",
        },
        {
          prompt: "The comparative of 'delicious' is…",
          options: ["more delicious", "deliciouser", "most delicious", "delicious"],
          correctIndex: 0,
          explanation: "Longer adjective: use 'more' → more delicious.",
        },
        {
          prompt: "The comparative of 'slowly' is…",
          options: ["more slowly", "slowlier", "slowliest", "most slowly"],
          correctIndex: 0,
          explanation: "Most -ly adverbs use 'more' → more slowly.",
        },
        {
          prompt: "The comparative of 'good' is…",
          options: ["better", "gooder", "more good", "best"],
          correctIndex: 0,
          explanation: "'good' is irregular: good → better → best.",
        },
        {
          prompt: "The superlative of 'bad' is…",
          options: ["worst", "baddest", "more bad", "worse"],
          correctIndex: 0,
          explanation: "'bad' is irregular: bad → worse → worst.",
        },
        {
          prompt: "The superlative of 'happy' is…",
          options: ["happiest", "happyest", "most happy", "more happy"],
          correctIndex: 0,
          explanation: "Consonant + y changes to i: happy → happiest.",
        },
        {
          prompt: "The comparative of 'big' is…",
          options: ["bigger", "biger", "more big", "biggest"],
          correctIndex: 0,
          explanation: "Double the g and add -er: bigger.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["She is taller than her brother.", "She is more taller than her brother.", "She is tallest than her brother.", "She is more tall than her brother."],
          correctIndex: 0,
          explanation: "Use -er OR more, not both: 'taller'.",
        },
        {
          prompt: "Which sentence has a double-comparison error?",
          options: ["This is the most easiest test.", "This is the easiest test.", "This test is easier.", "This is an easy test."],
          correctIndex: 0,
          explanation: "'most easiest' doubles the superlative; use 'easiest' only.",
        },
        {
          prompt: "The comparative of 'far' is…",
          options: ["farther / further", "farrer", "more far", "farthest"],
          correctIndex: 0,
          explanation: "'far' is irregular: farther/further (comparative).",
        },
        {
          prompt: "Which word has NO comparative or superlative?",
          options: ["perfect", "tall", "quick", "happy"],
          correctIndex: 0,
          explanation: "'perfect' is absolute: nothing can be 'more perfect'.",
        },
        {
          prompt: "The superlative of 'careful' is…",
          options: ["most careful", "carefullest", "carefuler", "more careful"],
          correctIndex: 0,
          explanation: "Longer adjective: use 'most' → most careful.",
        },
        {
          prompt: "The comparative of 'happy' uses which spelling change?",
          options: ["consonant + y to i", "double the consonant", "drop silent e", "no change"],
          correctIndex: 0,
          explanation: "happy → happier (y changes to i before -er).",
        },
        {
          prompt: "The superlative of 'good' is…",
          options: ["best", "goodest", "most good", "better"],
          correctIndex: 0,
          explanation: "good → better → best.",
        },
        {
          prompt: "Which is the plain (positive) degree?",
          options: ["fast", "faster", "fastest", "more fast"],
          correctIndex: 0,
          explanation: "'fast' is the positive (base) degree.",
        },
        {
          prompt: "Choose the correct comparative for a persuasive claim: 'Brand A is ___ than Brand B.'",
          options: ["cheaper", "cheapest", "more cheaper", "most cheap"],
          correctIndex: 0,
          explanation: "Comparing two brands uses the comparative 'cheaper'.",
        },
        {
          prompt: "The superlative of 'slowly' is…",
          options: ["most slowly", "slowliest", "more slowly", "slowlyest"],
          correctIndex: 0,
          explanation: "-ly adverb: use 'most' → most slowly.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give the comparative and superlative of: (a) tall (b) beautiful (c) bad.",
          answerKey:
            "(a) taller / tallest; (b) more beautiful / most beautiful; (c) worse / worst. Award a mark per word for both correct forms.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is correct?",
          options: [
            "This is the most reliable phone in the shop.",
            "This is the most reliablest phone in the shop.",
            "This is the more reliable phone in the shop.",
            "This is the reliablest phone in the shop.",
          ],
          correctIndex: 0,
          answerKey: "Longer adjective in the superlative uses 'most reliable'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the errors: 'She runs more faster than me and is the most happiest in class.'",
          answerKey:
            "Expected: 'She runs faster than me and is the happiest in class.' Remove the double comparison ('more faster' → 'faster'; 'most happiest' → 'happiest'). Award a mark per correction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain when to use -er/-est and when to use more/most, giving an example of each.",
          answerKey:
            "Short adjectives/adverbs add -er/-est (e.g. fast → faster → fastest); longer adjectives and most -ly adverbs use more/most (e.g. careful → more careful → most careful). Never combine the two. Award marks for the rule and correct examples.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short persuasive paragraph (4–6 sentences) recommending one product over another, using at least one comparative and one superlative correctly. Then underline them.",
          answerKey:
            "Award marks for: a clear persuasive stance; at least one correctly formed comparative (comparing two) and one superlative (best of a group), both underlined; no double-comparison errors; and coherent, convincing sentences. A strong answer supports its superlative rather than merely asserting it.",
          marks: 5,
        },
      ],
    },
  ],
};
