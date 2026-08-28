import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 12,
// Semester One, Period I: GRAMMAR — The Three Cases of Pronouns and Verb Usage.
// CONTENTS: (1) The three pronoun cases: nominative, objective and possessive;
// (2) Verb usage — the perfect and perfect progressive tenses (present perfect,
// present perfect progressive, past perfect, past perfect progressive, future
// perfect, future perfect progressive); (3) Speech writing; (4) Summary writing.
// Each CONTENTS item is one topic.
export const englishLanguageG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Pronoun Cases, Perfect Tenses, Speeches and Summaries",
  summary:
    "Period I of the MoE Grade 12 English syllabus. Learners choose the correct case of a pronoun (nominative, objective or possessive), use the perfect and perfect progressive tenses accurately, plan and organise a speech with an introduction, body and conclusion, and write objective summaries of passages in their own words.",
  topics: [
    {
      // source: LibreTexts — About Writing Guide with Handbook (OpenStax), 21.15 Pronouns (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/About_Writing_Guide_with_Handbook_-_A_textbook_for_English_Composition_(OpenStax)/21:_Handbook/21.15:_Pronouns)
      slug: "three-cases-of-pronouns",
      title: "The Three Cases of Pronouns: Nominative, Objective and Possessive",
      objective:
        "By the end of the topic, learners should be able to name the three pronoun cases, list the pronouns in each, and choose the correct case for subjects, objects and possession, including who/whom and compound constructions.",
      estimatedMinutes: 150,
      notes: `## What case means

**Case** is the form a pronoun takes to show its **job** in the sentence. English pronouns have three cases: **nominative (subjective)**, **objective** and **possessive**.

## The three cases at a glance

| Person | Nominative (subject) | Objective (object) | Possessive (ownership) |
| --- | --- | --- | --- |
| 1st singular | I | me | my / mine |
| 2nd | you | you | your / yours |
| 3rd singular | he / she / it | him / her / it | his / her, hers / its |
| 1st plural | we | us | our / ours |
| 3rd plural | they | them | their / theirs |
| question / relative | who / whoever | whom / whomever | whose |

## Nominative (subjective) case

Use the nominative case when the pronoun is the **subject** of a verb or a **subject complement** (after a linking verb).

- **Subject:** *He and I share a room.* (*He and I* do the sharing)
- **Subject complement:** *The winner was she.* (formal; *she* renames the subject *winner*)

## Objective case

Use the objective case when the pronoun is the **object** of a verb or of a **preposition**, or the object of an infinitive.

- **Object of a verb:** *The manager gave us a tour.*
- **Object of a preposition:** *between you and me*, *to him*, *for them*.
- **With an infinitive:** *She asked Antonio and me to write.*

## Possessive case

Use the possessive case to show **ownership**. *My, your, his, her, its, our, their* come **before a noun**; *mine, yours, hers, ours, theirs* stand **alone**. Use the possessive **before a gerund** (an -ing noun): *They were tired of **their** partying.*

- ✗ *That book is her's.* → ✓ *That book is **hers**.* (no apostrophe)
- Do not confuse **its** (possessive) with **it's** (= it is); **your** with **you're**; **their** with **they're**.

## Compound subjects and objects

A pronoun keeps the same case whether it stands alone or is joined to another word. Test it by **dropping the other word**.

- **Subject:** ✓ *Antonio and **I** share an apartment.* (drop *Antonio*: *I share*, not *me share*)
- **Object:** ✓ *between Antonio and **me*** (drop *Antonio*: *between me*, not *between I*)

## Who vs. whom

- **who / whoever** = nominative → use for a **subject**: *Who wrote this?* / *He is the man **who** called.*
- **whom / whomever** = objective → use for an **object**, especially after a **preposition**: *With **whom** did you speak?* / *the man **whom** we met.*
- **Trick:** if you could answer with *he/she/they*, use **who**; if *him/her/them*, use **whom**.

## Comparisons with 'than' and 'as'

The case shows the missing words. Finish the sentence in your head:

- *Antonio cares more than **I** [do].* (nominative — *I* is the subject of the dropped *do*)
- *This surprised no one more than [it surprised] **me**.* (objective)

## Summary

- Three cases: **nominative** (subjects), **objective** (objects), **possessive** (ownership).
- In compounds, drop the other word to hear the right case.
- **who** = subject, **whom** = object; use the possessive (no apostrophe) and before a gerund.`,
      workedExample: `**Task.** Choose the correct pronoun and name the case, giving the reason.

1. *The prizes were shared between Kollie and (I / me).*
2. *(Who / Whom) did the committee choose?*
3. *No one enjoyed the trip more than (they / them).*

**Answers**

1. **me** — objective case. The pronoun is the object of the preposition *between*. Drop *Kollie and*: *between me*, not *between I*.
2. **Whom** — objective case. It is the object of the verb *choose* (*the committee chose whom?*). You could answer *them*, so use **whom**.
3. **they** — nominative case. Finish the comparison: *more than they [enjoyed it]*; *they* is the subject of the dropped verb *enjoyed*.

**Rule applied:** identify the pronoun's job — subject (nominative), object (objective) or owner (possessive) — and, in compounds and comparisons, supply the missing words to hear the correct case.`,
      quiz: [
        {
          prompt: "How many cases do English pronouns have?",
          options: ["three", "two", "four", "five"],
          correctIndex: 0,
          explanation: "Nominative (subjective), objective and possessive.",
        },
        {
          prompt: "The nominative (subjective) case is used when the pronoun is the…",
          options: ["subject of a verb", "object of a verb", "object of a preposition", "owner of a noun"],
          correctIndex: 0,
          explanation: "Nominative pronouns act as subjects (and subject complements).",
        },
        {
          prompt: "Which list is entirely nominative case?",
          options: ["I, he, she, we, they", "me, him, her, us, them", "my, his, her, our, their", "mine, his, hers, ours"],
          correctIndex: 0,
          explanation: "I, he, she, we, they are subject pronouns.",
        },
        {
          prompt: "Which list is entirely objective case?",
          options: ["me, him, her, us, them", "I, he, she, we, they", "my, your, his, our", "mine, yours, hers"],
          correctIndex: 0,
          explanation: "me, him, her, us, them are object pronouns.",
        },
        {
          prompt: "The possessive case shows…",
          options: ["ownership", "the subject", "the object", "an action"],
          correctIndex: 0,
          explanation: "Possessive pronouns show ownership: my, mine, his, hers, etc.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["He and I share a room.", "Him and me share a room.", "Him and I share a room.", "He and me share a room."],
          correctIndex: 0,
          explanation: "Both are subjects, so use the nominative: He and I.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["The gift is for you and me.", "The gift is for you and I.", "The gift is for we.", "The gift is for she and I."],
          correctIndex: 0,
          explanation: "Object of the preposition 'for' → objective: you and me.",
        },
        {
          prompt: "To test a compound like 'Antonio and (I/me) share a room', you should…",
          options: ["drop the other word and listen", "always use 'I'", "always use 'me'", "add a comma"],
          correctIndex: 0,
          explanation: "Drop 'Antonio and': 'I share', so 'Antonio and I share'.",
        },
        {
          prompt: "Which word is the nominative form used for subjects?",
          options: ["who", "whom", "whose", "whomever"],
          correctIndex: 0,
          explanation: "'who' is the subject form; 'whom' is the object form.",
        },
        {
          prompt: "Which is correct?",
          options: ["With whom did you speak?", "With who did you speak?", "With whose did you speak?", "With whomever spoke?"],
          correctIndex: 0,
          explanation: "After the preposition 'with', use the objective 'whom'.",
        },
        {
          prompt: "The trick for who/whom: if you could answer with 'him' or 'them', use…",
          options: ["whom", "who", "whose", "which"],
          correctIndex: 0,
          explanation: "him/them (objects) signal 'whom'; he/they signal 'who'.",
        },
        {
          prompt: "Which possessive pronoun is written WITHOUT an apostrophe?",
          options: ["hers", "her's", "it's", "who's"],
          correctIndex: 0,
          explanation: "Possessives like hers, its, theirs take no apostrophe.",
        },
        {
          prompt: "'It's' with an apostrophe means…",
          options: ["it is", "belonging to it", "its own", "it has ownership"],
          correctIndex: 0,
          explanation: "'It's' = 'it is'; the possessive is 'its' (no apostrophe).",
        },
        {
          prompt: "Before a gerund (an -ing noun), which case is used?",
          options: ["possessive", "nominative", "objective", "none"],
          correctIndex: 0,
          explanation: "e.g. 'their partying', 'my leaving early'.",
        },
        {
          prompt: "Complete correctly: 'She asked Antonio and ___ to write.'",
          options: ["me", "I", "mine", "myself"],
          correctIndex: 0,
          explanation: "Object of the verb 'asked'/infinitive → objective 'me'.",
        },
        {
          prompt: "In 'Antonio cares more than I', the case of 'I' is nominative because…",
          options: ["it is the subject of the dropped verb 'do'", "it follows 'than'", "it is possessive", "it is an object"],
          correctIndex: 0,
          explanation: "Finish it: 'more than I do' — 'I' is a subject.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["The manager gave us a tour.", "The manager gave we a tour.", "The manager gave our a tour.", "The manager gave ours a tour."],
          correctIndex: 0,
          explanation: "Indirect object → objective 'us'.",
        },
        {
          prompt: "Which sentence uses a subject complement correctly (formal)?",
          options: ["The winner was she.", "The winner was her.", "The winner was hers.", "The winner was herself."],
          correctIndex: 0,
          explanation: "After a linking verb, formal usage takes the nominative 'she'.",
        },
        {
          prompt: "Which is the possessive form of 'who'?",
          options: ["whose", "who's", "whom", "whoever"],
          correctIndex: 0,
          explanation: "'whose' shows ownership; 'who's' = who is.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["Give the books to them.", "Give the books to they.", "Give the books to their.", "Give the books to theirs."],
          correctIndex: 0,
          explanation: "Object of the preposition 'to' → objective 'them'.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is correct?",
          options: [
            "The teacher praised Musu and me.",
            "The teacher praised Musu and I.",
            "The teacher praised Musu and myself.",
            "The teacher praised Musu and mine.",
          ],
          correctIndex: 0,
          answerKey: "Object of the verb 'praised' → objective 'me' (drop 'Musu and': 'praised me').",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three cases of pronouns and give one pronoun example of each.",
          answerKey:
            "Nominative/subjective (e.g. I, he, they), objective (e.g. me, him, them), possessive (e.g. my/mine, his, their/theirs). Award a mark per case correctly named with a valid example.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Choose who or whom and explain: '____ did you invite to the ceremony?'",
          answerKey:
            "'Whom' — it is the object of the verb 'invite' (you invited whom? → them). Award a mark for 'whom' and a mark for a correct reason (object case).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Correct the pronoun errors: 'Her and me is going to town, and the money is your's.'",
          answerKey:
            "'She and I are going to town, and the money is yours.' Subjects take the nominative (She and I); the verb becomes 'are'; the possessive 'yours' has no apostrophe. Award marks for the required corrections.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the three cases of pronouns and when each is used. Give at least one correct example sentence for each case, and explain how to choose the right pronoun in a compound subject or object and in the who/whom choice.",
          answerKey:
            "A strong answer defines nominative (subjects/subject complements), objective (objects of verbs and prepositions) and possessive (ownership); gives a correct example of each; explains the 'drop the other word' test for compounds; and explains who (subject) vs whom (object) with the he/him substitution test. Award marks for definitions, examples, the compound test and the who/whom rule.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (McLean), 5.5 Verb Tenses (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Book:_Writing_for_Success_(McLean)/5:_Help_for_English_Language_Learners/5.5:_Verb_Tenses)
      slug: "perfect-and-perfect-progressive-tenses",
      title: "Verb Usage: The Perfect and Perfect Progressive Tenses",
      objective:
        "By the end of the topic, learners should be able to form and use the present, past and future perfect tenses and their progressive forms, and choose the right one to show when and how an action relates to another time.",
      estimatedMinutes: 150,
      notes: `## Perfect vs progressive

- The **perfect** tenses show an action **completed** in relation to another time. They use a form of **have** + the **past participle**.
- The **progressive** forms stress that an action is **ongoing / continuing**. The perfect progressive uses **have + been + the -ing form**.

## The three perfect tenses

| Tense | Pattern | Use | Example |
| --- | --- | --- | --- |
| Present perfect | has/have + past participle | Links past to present; action done at an unstated time, or begun in the past and still relevant | I **have helped** many students. |
| Past perfect | had + past participle | An action completed **before** another past action | The bus **had left** before we arrived. |
| Future perfect | will have + past participle | An action that will be completed **before** a future time | You **will have forgotten** me after you move. |

## The three perfect progressive tenses

| Tense | Pattern | Use | Example |
| --- | --- | --- | --- |
| Present perfect progressive | has/have been + -ing | Action begun in the past, still going on, stressing duration | She **has been talking** for an hour. |
| Past perfect progressive | had been + -ing | Ongoing past action that stopped before another past moment | The staff **had been talking** until the boss arrived. |
| Future perfect progressive | will have been + -ing | Ongoing action continuing up to a future moment | By noon I **will have been driving** for six hours. |

\`\`\`svg Perfect tenses on a timeline
<svg viewBox="0 0 320 150" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <line x1="20" y1="80" x2="300" y2="80" stroke="#8a5833" stroke-width="2"/>
  <text x="60" y="100" text-anchor="middle" font-size="10">PAST</text>
  <text x="160" y="100" text-anchor="middle" font-size="10">NOW</text>
  <text x="260" y="100" text-anchor="middle" font-size="10">FUTURE</text>
  <circle cx="160" cy="80" r="4" fill="#8a5833"/>
  <circle cx="70" cy="80" r="4" fill="#b98a5a"/>
  <text x="70" y="60" text-anchor="middle" font-size="9">had left</text>
  <text x="70" y="48" text-anchor="middle" font-size="8">(past perfect)</text>
  <circle cx="120" cy="80" r="4" fill="#b98a5a"/>
  <text x="120" y="72" text-anchor="middle" font-size="8">then arrived</text>
  <circle cx="260" cy="80" r="4" fill="#b98a5a"/>
  <text x="260" y="60" text-anchor="middle" font-size="9">will have gone</text>
  <text x="260" y="48" text-anchor="middle" font-size="8">(future perfect)</text>
</svg>
\`\`\`

## Building the past participle

- **Regular verbs:** add **-ed** — walk → walked, help → helped.
- **Irregular verbs** have their own participles — go → **gone**, write → **written**, speak → **spoken**, break → **broken**, eat → **eaten**, see → **seen**.

## Common errors

- **Wrong participle:** ✗ *I have went.* → ✓ *I have **gone**.*
- **Missing 'have/had':** ✗ *She been waiting.* → ✓ *She **has** been waiting.*
- **Confusing simple past with present perfect:** use the present perfect for a time still connected to now (*I have lived here since 2010*), the simple past for a finished time (*I lived there in 2010*).

## Summary

- **Perfect = have + past participle**; **perfect progressive = have + been + -ing**.
- Present perfect links past to now; past perfect goes "past before the past"; future perfect finishes before a future point.
- The progressive forms add the sense of a **continuing** action up to that moment.`,
      workedExample: `**Task.** Put the verb in brackets into the correct perfect (or perfect progressive) tense.

1. By the time the teacher arrived, the class (finish) the test.
2. She (study) for three hours and is still going.
3. By next June, I (complete) my final examinations.

**Answers**

1. **had finished** — past perfect. One past action (finishing) came **before** another past action (the teacher arriving): *had* + past participle *finished*.
2. **has been studying** — present perfect progressive. The action began in the past and is **still ongoing**, so *has been* + *studying* stresses the duration.
3. **will have completed** — future perfect. The action will be finished **before** the future point *next June*: *will have* + past participle *completed*.

**Rule applied:** perfect = have/has/had/will have + past participle; add **been + -ing** when you want to stress that the action keeps going up to that time.`,
      quiz: [
        {
          prompt: "The perfect tenses are formed with a form of 'have' plus the…",
          options: ["past participle", "base form", "-ing form", "past simple"],
          correctIndex: 0,
          explanation: "Perfect = have/has/had + past participle.",
        },
        {
          prompt: "The present perfect is formed with…",
          options: ["has/have + past participle", "had + past participle", "will have + past participle", "is/are + -ing"],
          correctIndex: 0,
          explanation: "e.g. 'I have helped', 'she has gone'.",
        },
        {
          prompt: "Which sentence is in the present perfect?",
          options: ["I have finished the work.", "I finished the work.", "I had finished the work.", "I will finish the work."],
          correctIndex: 0,
          explanation: "'have finished' = present perfect.",
        },
        {
          prompt: "The past perfect ('had gone') describes an action that…",
          options: ["was completed before another past action", "is happening now", "will happen tomorrow", "never happened"],
          correctIndex: 0,
          explanation: "Past perfect is 'the past before the past'.",
        },
        {
          prompt: "'The bus had left before we arrived' uses the past perfect for…",
          options: ["the earlier of two past actions (leaving)", "arriving", "a present action", "a future action"],
          correctIndex: 0,
          explanation: "Leaving happened first, so 'had left' is past perfect.",
        },
        {
          prompt: "The future perfect is formed with…",
          options: ["will have + past participle", "will + base form", "has + past participle", "had + -ing"],
          correctIndex: 0,
          explanation: "e.g. 'will have forgotten', 'will have completed'.",
        },
        {
          prompt: "'By 2030 the town will have doubled in size' is in the…",
          options: ["future perfect", "present perfect", "past perfect", "simple future"],
          correctIndex: 0,
          explanation: "will have + past participle = future perfect.",
        },
        {
          prompt: "The perfect progressive forms use…",
          options: ["have + been + -ing", "have + past participle", "be + past participle", "will + -ing"],
          correctIndex: 0,
          explanation: "e.g. 'has been talking', 'had been waiting'.",
        },
        {
          prompt: "'She has been talking for an hour' is in the…",
          options: ["present perfect progressive", "past perfect progressive", "present perfect", "future perfect"],
          correctIndex: 0,
          explanation: "has been + -ing = present perfect progressive.",
        },
        {
          prompt: "The present perfect progressive stresses that an action…",
          options: ["began in the past and is still ongoing", "finished long ago", "will start later", "never began"],
          correctIndex: 0,
          explanation: "It emphasises the ongoing duration up to now.",
        },
        {
          prompt: "'The staff had been talking until the boss arrived' is in the…",
          options: ["past perfect progressive", "present perfect progressive", "future perfect", "past perfect"],
          correctIndex: 0,
          explanation: "had been + -ing = past perfect progressive.",
        },
        {
          prompt: "The future perfect progressive is formed with…",
          options: ["will have been + -ing", "will have + past participle", "have been + -ing", "will be + -ing"],
          correctIndex: 0,
          explanation: "e.g. 'will have been driving'.",
        },
        {
          prompt: "What is the past participle of 'go'?",
          options: ["gone", "went", "going", "goed"],
          correctIndex: 0,
          explanation: "go → went → gone; the perfect needs 'gone'.",
        },
        {
          prompt: "Correct the error: 'I have went to the market.'",
          options: ["I have gone to the market.", "I have go to the market.", "I have going to the market.", "I has went to the market."],
          correctIndex: 0,
          explanation: "Use the past participle 'gone', not the past 'went'.",
        },
        {
          prompt: "What is missing: 'She ___ been waiting since morning.'",
          options: ["has", "having", "being", "were"],
          correctIndex: 0,
          explanation: "Present perfect progressive needs 'has been' + -ing.",
        },
        {
          prompt: "Which sentence best fits 'a time still connected to now'?",
          options: ["I have lived here since 2010.", "I lived here in 2010.", "I had lived here.", "I will live here."],
          correctIndex: 0,
          explanation: "The present perfect with 'since' links the past to now.",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writing", "writed"],
          correctIndex: 0,
          explanation: "write → wrote → written.",
        },
        {
          prompt: "Choose the past perfect: 'When I called, she ___ already ___.'",
          options: ["had / left", "has / left", "will have / left", "have / leave"],
          correctIndex: 0,
          explanation: "Past perfect = had + past participle 'left'.",
        },
        {
          prompt: "'By the end of the meeting, I will have been listening for two hours' is the…",
          options: ["future perfect progressive", "future perfect", "present perfect progressive", "past perfect progressive"],
          correctIndex: 0,
          explanation: "will have been + -ing = future perfect progressive.",
        },
        {
          prompt: "For a regular verb, the past participle is formed by adding…",
          options: ["-ed", "-ing", "-s", "-en"],
          correctIndex: 0,
          explanation: "help → helped, walk → walked.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Put the verb into the past perfect: 'The film ___ (start) before we found our seats.'",
          answerKey:
            "'had started' — past perfect (had + past participle). The starting happened before the past action of finding seats. Award a mark for 'had' and a mark for the correct participle 'started'.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is in the present perfect progressive?",
          options: [
            "They have been building the road for months.",
            "They have built the road.",
            "They had built the road.",
            "They will build the road.",
          ],
          correctIndex: 0,
          answerKey: "'have been building' = have + been + -ing = present perfect progressive.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between the present perfect ('I have eaten') and the past perfect ('I had eaten').",
          answerKey:
            "Present perfect (has/have + participle) links a past action to the present or an unstated time; past perfect (had + participle) shows an action completed before another past action. Award a mark for each correctly explained.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Rewrite in the future perfect: 'I finish the project by Friday.'",
          answerKey:
            "'I will have finished the project by Friday.' Future perfect = will have + past participle (finished), showing completion before a future point. Award marks for 'will have' and the correct participle.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the three perfect tenses and their progressive forms. For each, give the pattern (auxiliaries + participle) and one example sentence, and explain what time relationship it shows.",
          answerKey:
            "A strong answer covers present perfect (has/have + participle), past perfect (had + participle), future perfect (will have + participle), and their progressives (has/have/had/will have + been + -ing); gives correct patterns and examples; and explains the time each shows (present perfect links past to now; past perfect = before another past action; future perfect = before a future point; progressives stress ongoing duration). Award marks for patterns, examples and the time explanations.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — Public Speaking (Lumen Learning), 06 Organizing and Outlining Your Speech (https://socialsci.libretexts.org/Bookshelves/Communication/Public_Speaking/Public_Speaking_(Lumen_Learning)/06:_Organizing_and_Outlining_Your_Speech)
      slug: "speech-writing",
      title: "Speech Writing: Organising Introduction, Body and Conclusion",
      objective:
        "By the end of the topic, learners should be able to plan a speech around a clear central idea, organise the body into two to five main points using a suitable pattern, and write an introduction and conclusion that do their proper jobs.",
      estimatedMinutes: 120,
      notes: `## Why organisation matters

A well-organised speech is **clearer, more credible and easier to remember**. Disorganised speakers are seen as less credible, persuade less, and their audiences remember less. Plan the speech as an **outline** before writing it out.

## The three parts of a speech

A speech, like an essay, has three parts. A common guide is roughly **10% introduction, 80% body, 10% conclusion**.

1. **Introduction** — should:
   - **Get the audience's attention** (a question, story, striking fact or quotation).
   - **Introduce the topic** and show its **relevance** to the listeners.
   - **Establish the speaker's credibility**.
   - **State the central idea (thesis)** and **preview the main points**.
2. **Body** — presents and supports the **main points**:
   - Aim for **at least two but no more than five** main points.
   - Support each point with **facts, examples, statistics, quotations and explanation**.
   - Join points with **transitions** so the speech flows.
3. **Conclusion** — should:
   - **Signal the end** ("In closing…").
   - **Review / summarise the main points**.
   - **Provide closure** with a memorable final thought that ties back to the introduction.

## Patterns for arranging the body

| Pattern | Orders points by | Good for |
| --- | --- | --- |
| Topical | equal sub-topics of the theme | informative speeches |
| Chronological | time / sequence | histories, narratives |
| Step-by-step | stages of a process | how-to speeches |
| Spatial | location / place | describing a place or object |
| Problem-solution | a problem then its solution | persuasive speeches |
| Pro-con (cause-effect) | contrasting or linked ideas | weighing an issue |

## Outlining the speech

- Build a **preparation outline** in **full sentences** with **uniform indentation**: label the introduction, each main point (I, II, III), sub-points (A, B, C), the conclusion, and a bibliography of sources.
- Reduce it to a **speaking outline** of **key phrases and reminders** for delivery.

## Kinds of speeches

- **Informative** — teaches or explains.
- **Persuasive** — argues a position and moves the audience to agree or act.
- **Entertaining** — amuses, often for a special occasion.
- **Extemporaneous** — planned and outlined but delivered from brief notes, not read word for word.

## Summary

- Organise around a **central idea**; outline before writing.
- **Introduction:** attention, topic, relevance, credibility, thesis, preview.
- **Body:** 2-5 main points, supported and linked by transitions, in a clear pattern.
- **Conclusion:** signal the end, review the points, give closure.`,
      workedExample: `**Task.** Plan a short persuasive speech: "Students should read a newspaper daily."

**Central idea:** Reading a newspaper every day makes students better informed, better writers and better citizens.

**Introduction**
- Attention: *Imagine walking into an interview and being asked about today's news — and having nothing to say.*
- Relevance + credibility: as fellow students preparing for exams and work, we all need this.
- Thesis + preview: *A daily newspaper habit helps in three ways — knowledge, language and citizenship.*

**Body (topical pattern, three main points)**
1. **Knowledge** — newspapers keep readers up to date on national and world events (support: examples).
2. **Language** — regular reading builds vocabulary and models good writing (support: how it aids the WASSCE essay).
3. **Citizenship** — informed students make better decisions and take part in their communities.
- Transitions: *First… Second… Finally…*

**Conclusion**
- Signal + review: *In closing, a daily newspaper builds knowledge, language and citizenship.*
- Closure: *Pick up a paper tomorrow — your future self will thank you.*

**Why it works:** it has a clear central idea, an introduction that does its four jobs, three supported main points joined by transitions, and a conclusion that reviews and closes by echoing the opening.`,
      quiz: [
        {
          prompt: "A well-organised speech is…",
          options: ["clearer, more credible and easier to remember", "always longer", "read word for word", "free of a thesis"],
          correctIndex: 0,
          explanation: "Organisation improves clarity, credibility and memorability.",
        },
        {
          prompt: "The three parts of a speech are…",
          options: ["introduction, body, conclusion", "title, index, notes", "thesis, quotation, list", "beginning, verbs, end"],
          correctIndex: 0,
          explanation: "Like an essay: introduction, body and conclusion.",
        },
        {
          prompt: "Roughly what share of a speech is the body?",
          options: ["about 80%", "about 10%", "about 50%", "about 25%"],
          correctIndex: 0,
          explanation: "A common guide: 10% intro, 80% body, 10% conclusion.",
        },
        {
          prompt: "Which is a job of the introduction?",
          options: ["get the audience's attention", "review the main points", "provide closure", "give the bibliography"],
          correctIndex: 0,
          explanation: "The introduction grabs attention (among other jobs).",
        },
        {
          prompt: "The introduction should preview the…",
          options: ["main points", "conclusion word for word", "bibliography", "delivery notes"],
          correctIndex: 0,
          explanation: "It states the thesis and previews the main points.",
        },
        {
          prompt: "How many main points should a speech usually have?",
          options: ["at least two but no more than five", "exactly one", "at least ten", "as many as possible"],
          correctIndex: 0,
          explanation: "Two to five main points is the recommended range.",
        },
        {
          prompt: "Main points in the body are supported with…",
          options: ["facts, examples, statistics and quotations", "only opinions", "the title", "the outline labels"],
          correctIndex: 0,
          explanation: "Support each point with evidence and explanation.",
        },
        {
          prompt: "Words that link one point to the next are called…",
          options: ["transitions", "captions", "footnotes", "headings"],
          correctIndex: 0,
          explanation: "Transitions make the speech flow between points.",
        },
        {
          prompt: "Which is a job of the conclusion?",
          options: ["review the main points and give closure", "introduce a new argument", "establish credibility for the first time", "list references only"],
          correctIndex: 0,
          explanation: "The conclusion signals the end, reviews and provides closure.",
        },
        {
          prompt: "The 'topical' pattern arranges the body by…",
          options: ["equal sub-topics of the theme", "time", "location", "problem then solution"],
          correctIndex: 0,
          explanation: "Topical order divides the theme into equal sub-topics.",
        },
        {
          prompt: "Which pattern arranges points by time or sequence?",
          options: ["chronological", "spatial", "topical", "pro-con"],
          correctIndex: 0,
          explanation: "Chronological order follows time.",
        },
        {
          prompt: "Which pattern suits a 'how-to' speech?",
          options: ["step-by-step", "spatial", "pro-con", "problem-solution"],
          correctIndex: 0,
          explanation: "Step-by-step follows the stages of a process.",
        },
        {
          prompt: "The problem-solution pattern is especially good for…",
          options: ["persuasive speeches", "describing a place", "listing dates", "reading a poem"],
          correctIndex: 0,
          explanation: "It states a problem and argues for a solution.",
        },
        {
          prompt: "A preparation outline is written in…",
          options: ["full sentences with uniform indentation", "single words only", "no order", "paragraphs without labels"],
          correctIndex: 0,
          explanation: "The preparation outline uses full sentences and clear labels.",
        },
        {
          prompt: "A speaking outline uses…",
          options: ["key phrases and reminders", "the full script", "no notes at all", "only the bibliography"],
          correctIndex: 0,
          explanation: "The speaking outline is brief cues for delivery.",
        },
        {
          prompt: "A speech that teaches or explains is…",
          options: ["informative", "persuasive", "entertaining", "extemporaneous"],
          correctIndex: 0,
          explanation: "Informative speeches teach or explain.",
        },
        {
          prompt: "A speech that argues a position and moves the audience to act is…",
          options: ["persuasive", "informative", "entertaining", "a summary"],
          correctIndex: 0,
          explanation: "Persuasive speeches argue and call to action.",
        },
        {
          prompt: "A speech delivered from brief notes rather than read word for word is…",
          options: ["extemporaneous", "manuscript", "memorised only", "impromptu with no plan"],
          correctIndex: 0,
          explanation: "Extemporaneous speaking is planned but delivered from notes.",
        },
        {
          prompt: "Establishing that you are trustworthy on the topic is called building…",
          options: ["credibility", "closure", "a transition", "a bibliography"],
          correctIndex: 0,
          explanation: "The introduction should establish the speaker's credibility.",
        },
        {
          prompt: "A strong conclusion often ties back to the…",
          options: ["introduction", "bibliography", "next speech", "outline labels"],
          correctIndex: 0,
          explanation: "Echoing the opening gives a sense of closure.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List the three parts of a speech and state the main job of each.",
          answerKey:
            "Introduction — gain attention, introduce topic/relevance/credibility, state thesis and preview points; body — present and support 2-5 main points with transitions; conclusion — signal the end, review points, give closure. Award a mark per part correctly described.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which task belongs to the conclusion of a speech?",
          options: [
            "Reviewing the main points and providing closure",
            "Getting the audience's attention for the first time",
            "Introducing a brand-new main point",
            "Establishing the speaker's credibility",
          ],
          correctIndex: 0,
          answerKey: "The conclusion reviews the points and provides closure; the others belong to the introduction or body.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two patterns for organising the body of a speech and say what each orders points by.",
          answerKey:
            "Any two of: topical (equal sub-topics), chronological (time), step-by-step (stages of a process), spatial (location), problem-solution, pro-con/cause-effect. Award a mark per correct pattern with its ordering.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give three things a good introduction should do.",
          answerKey:
            "Any three of: get attention; introduce the topic and show relevance; establish credibility; state the central idea/thesis; preview the main points. Award a mark each, up to three.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Plan a short speech on a topic of your choice. State your central idea, then outline an introduction (with its jobs), a body of two or three supported main points in a named pattern, and a conclusion. Explain why organisation makes a speech effective.",
          answerKey:
            "Award marks for: a clear central idea; an introduction that gains attention and previews the points; two or three main points with support and transitions in a stated pattern; a conclusion that reviews and gives closure; and an explanation that organisation improves clarity, credibility and memorability.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Write What Matters (Long, Minervini & Gladd), 5.6 Summary Writing (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Write-What-Matters_(Liza_Long_Amy_Minervini_and_Joel_Gladd)/05:_Writing_to_Inform/5.06:_Summary_Writing)
      slug: "summary-writing",
      title: "Summary Writing",
      objective:
        "By the end of the topic, learners should be able to write a brief, accurate, objective summary of a passage in their own words, naming the author and title and keeping only the main ideas.",
      estimatedMinutes: 120,
      notes: `## What a summary is

A **summary** is a **comprehensive and objective restatement of the main ideas** of a text, made much shorter than the original. It reports what the writer says **without adding your own opinion**.

## Summary vs paraphrase

- A **paraphrase** restates a **short** passage fully in your own words — about the same length as the original.
- A **summary** **condenses** a whole text to its main ideas — much shorter (often about **10-15%** of the original).

## Qualities of a good summary

1. **Comprehensive** — includes all the **main** ideas, not just a few convenient ones.
2. **Accurate** — reports the source faithfully; does not distort it.
3. **Neutral (objective)** — no opinion, no praise or blame; avoids words like *good, bad, effective*. Use the **third person**.
4. **Brief** — cuts examples and minor detail; keeps only what matters.
5. **In your own words** — paraphrased, not copied (except key terms).
6. **Independent** — a reader who has not seen the source can still follow it.

## Steps for writing a summary

1. **Read the whole text** carefully, more than once. Note the **thesis / main idea**.
2. Find the **main point of each section or paragraph** and write it in your own words as a complete sentence. Leave out examples and minor detail.
3. **Name the author and the title** in the first sentence, with the main idea: *In "…," [Author] argues/explains that ….*
4. Join the points with **transitions** (*first, next, then, finally*) and keep the original **order** of ideas.
5. **Cut** anything repeated and remove your own **opinions**.
6. **Check** it against the source: is it accurate, complete and objective?

## A summary has a shape

Like an essay, a summary has a small **introduction** (author, title, main idea), a **body** (the main supporting points in order) and a brief **conclusion** (the overall significance).

## Common faults

- Copying sentences from the source (plagiarism) instead of paraphrasing.
- Adding your **opinion** or interpretation.
- Including **examples and detail** that make it too long.
- Leaving out main ideas so the summary **misrepresents** the text.

## Summary

- A summary = **short, accurate, objective** restatement of the **main ideas** in **your own words**.
- Name the **author and title**, keep the original **order**, add **no opinion**.
- Aim for about **10-15%** of the original length.`,
      workedExample: `**Task.** Summarise this short passage in one to two sentences.

*Original:* "Regular exercise benefits the body in many ways. It strengthens the heart and lungs, helps control weight, and lowers the risk of many diseases. Exercise also improves mood by releasing chemicals in the brain, and it helps people sleep better at night. For these reasons, doctors recommend at least thirty minutes of activity on most days."

**Step 1 — main idea:** exercise has many health benefits.
**Step 2 — main points:** strengthens heart and lungs; controls weight; lowers disease risk; improves mood and sleep; doctors advise 30 minutes most days.
**Step 3 — name source + paraphrase, keep order, no opinion.**

**Summary:** *The passage explains that regular exercise brings many health benefits — it strengthens the heart and lungs, controls weight, lowers disease risk, and improves mood and sleep — which is why doctors recommend about thirty minutes of activity on most days.*

**Why it works:** it is much shorter than the original, keeps all the main ideas in order, is written in the writer's own words, and adds no personal opinion.`,
      quiz: [
        {
          prompt: "A summary is a restatement of a text's main ideas that is…",
          options: ["objective and much shorter", "longer than the original", "full of your opinions", "copied word for word"],
          correctIndex: 0,
          explanation: "A summary is brief, accurate and objective.",
        },
        {
          prompt: "How does a summary differ from a paraphrase?",
          options: ["a summary condenses; a paraphrase is about the same length", "they are identical", "a summary is longer", "a paraphrase adds opinion"],
          correctIndex: 0,
          explanation: "A paraphrase restates fully; a summary condenses to main ideas.",
        },
        {
          prompt: "Roughly what length should a summary be?",
          options: ["about 10-15% of the original", "the same as the original", "longer than the original", "one word"],
          correctIndex: 0,
          explanation: "A summary compresses to roughly 10-15% of the source.",
        },
        {
          prompt: "A summary must be objective, which means it…",
          options: ["contains no personal opinion", "praises the author", "criticises the text", "uses the first person 'I'"],
          correctIndex: 0,
          explanation: "Keep opinion out; report the source neutrally.",
        },
        {
          prompt: "Which words should be avoided in a summary?",
          options: ["good, bad, effective", "first, next, finally", "the, and, of", "author, title"],
          correctIndex: 0,
          explanation: "Evaluative words break neutrality.",
        },
        {
          prompt: "A summary should be written…",
          options: ["in your own words", "copied from the source", "with no verbs", "in verse"],
          correctIndex: 0,
          explanation: "Paraphrase; do not copy (except key terms).",
        },
        {
          prompt: "The first sentence of a summary should name the…",
          options: ["author and title, with the main idea", "reader", "page number only", "your opinion"],
          correctIndex: 0,
          explanation: "Introduce the author, title and thesis.",
        },
        {
          prompt: "'Comprehensive' as a quality of a summary means it…",
          options: ["includes all the main ideas", "is very long", "adds new ideas", "keeps only one point"],
          correctIndex: 0,
          explanation: "Cover all main ideas, not just a few.",
        },
        {
          prompt: "A summary should keep the source's…",
          options: ["original order of ideas", "exact wording", "opinions of the reader", "examples in full"],
          correctIndex: 0,
          explanation: "Preserve the order; drop the detail.",
        },
        {
          prompt: "Which should be LEFT OUT of a summary?",
          options: ["minor examples and detail", "the main idea", "the author's name", "transitions"],
          correctIndex: 0,
          explanation: "Cut examples and minor detail to keep it brief.",
        },
        {
          prompt: "The first step in writing a summary is to…",
          options: ["read the whole text carefully", "write your opinion", "count the words", "copy the first paragraph"],
          correctIndex: 0,
          explanation: "Read (more than once) and find the main idea first.",
        },
        {
          prompt: "After finding the main idea, you next find the…",
          options: ["main point of each section", "longest sentence", "hardest word", "author's address"],
          correctIndex: 0,
          explanation: "Note each section's main point in your own words.",
        },
        {
          prompt: "'Independent' as a quality means a reader can follow the summary…",
          options: ["without having read the source", "only with the source open", "only if they agree", "only in class"],
          correctIndex: 0,
          explanation: "It should stand on its own and be clear.",
        },
        {
          prompt: "Copying sentences from the source into your summary is…",
          options: ["plagiarism", "good practice", "required", "objective"],
          correctIndex: 0,
          explanation: "Paraphrase in your own words to avoid plagiarism.",
        },
        {
          prompt: "Transitions like 'first, next, finally' help a summary by…",
          options: ["linking the main points", "adding opinion", "making it longer", "hiding the author"],
          correctIndex: 0,
          explanation: "They connect ideas and keep the order clear.",
        },
        {
          prompt: "A summary that reports only the points you agree with is faulty because it…",
          options: ["misrepresents the text", "is too objective", "is too short", "names the author"],
          correctIndex: 0,
          explanation: "Selective reporting distorts the source.",
        },
        {
          prompt: "Which pronoun/person suits a summary?",
          options: ["third person", "first person 'I'", "second person 'you'", "no person"],
          correctIndex: 0,
          explanation: "Use the third person for a neutral report.",
        },
        {
          prompt: "The last step of writing a summary is to…",
          options: ["check it against the source for accuracy", "add a new argument", "double its length", "insert your rating"],
          correctIndex: 0,
          explanation: "Verify it is accurate, complete and objective.",
        },
        {
          prompt: "Like an essay, a summary has an introduction, a body and a…",
          options: ["conclusion", "quotation", "bibliography", "footnote"],
          correctIndex: 0,
          explanation: "Intro (author/title/idea), body (points), conclusion (significance).",
        },
        {
          prompt: "The main purpose of a summary is to…",
          options: ["report the source's main ideas briefly and faithfully", "argue against the source", "entertain", "list every detail"],
          correctIndex: 0,
          explanation: "It faithfully condenses the source's main ideas.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State three qualities of a good summary.",
          answerKey:
            "Any three of: comprehensive (all main ideas), accurate, neutral/objective (no opinion), brief, in your own words, independent. Award a mark each, up to three.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence belongs in a good summary?",
          options: [
            "The article explains that clean water reduces disease.",
            "I really loved this brilliant article about water.",
            "This is the worst argument I have ever read.",
            "Everyone should agree with the writer immediately.",
          ],
          correctIndex: 0,
          answerKey: "Only the first is objective and reports the main idea; the others add opinion.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a summary and a paraphrase.",
          answerKey:
            "A paraphrase restates a short passage fully in your own words, about the same length; a summary condenses a whole text to its main ideas and is much shorter (about 10-15%). Award a mark for each correctly explained.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What should the first sentence of a summary include, and why?",
          answerKey:
            "The author's name and the title (and the main idea), so the reader knows the source and its thesis from the start, and the summary can stand independently. Award marks for naming author + title and giving a reason.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how to write a good summary, listing the main steps and the qualities the finished summary should have. Then describe one common fault and how to avoid it.",
          answerKey:
            "A strong answer lists steps (read carefully; find the thesis; note each section's main point in your own words; name author and title; keep the order with transitions; cut opinion and detail; check against the source); states qualities (comprehensive, accurate, objective, brief, own words, independent); and gives a fault (copying/plagiarism, adding opinion, or being too long) with its fix. Award marks for steps, qualities and the fault/fix.",
          marks: 5,
        },
      ],
    },
  ],
};
