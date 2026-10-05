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
        "By the end of the topic, learners should be able to name the three pronoun cases, identify the pronouns in each, and choose the correct case for subjects, objects and possession, including compound constructions, who/whom, we/us and comparisons with than or as.",
      estimatedMinutes: 120,
      notes: `Most English nouns look the same whether they are doing an action or receiving it: *the teacher* praised the class, and the class praised *the teacher*. Personal pronouns are different. They change their form according to the work they do in a sentence, so that *she* praises the class but the class praises *her*. Choosing the wrong form is one of the most noticeable errors in formal writing and speech, and nearly every such error can be avoided by asking one question: what is this pronoun doing in the sentence?

## What case means

**Case** — the form a pronoun takes to show its function in a sentence. English pronouns have three cases:

- the **nominative** (also called **subjective**) case, used for subjects;
- the **objective** case, used for objects;
- the **possessive** case, used to show ownership.

## The pronouns in each case

| Person and number | Nominative (subject) | Objective (object) | Possessive (ownership) |
| --- | --- | --- | --- |
| First person singular | I | me | my, mine |
| Second person | you | you | your, yours |
| Third person singular | he, she, it | him, her, it | his, her, hers, its |
| First person plural | we | us | our, ours |
| Third person plural | they | them | their, theirs |
| Question and relative | who, whoever | whom, whomever | whose |

Only *you* and *it* keep the same form in the nominative and objective cases. Every other personal pronoun changes.

## The nominative (subjective) case

Pronouns in the nominative case act as **subjects** — they name who or what performs the action of the verb, or who or what the sentence is about.

- *She* is the person who is best qualified for the job.
- *We* reached the village before dark.
- *They* have finished the report.

## The objective case

Pronouns in the objective case act as **objects**. They are used in three main positions:

1. As the object of a verb: *The principal invited us to the ceremony.*
2. As the object of a preposition such as *to, for, with, between, among*: *The letter was addressed to her.*
3. Before and after an infinitive (the *to* form of a verb): *The agent asked Antonio and me to write a review.*

## The possessive case

Pronouns in the possessive case show **ownership**. There are two sets of forms. *My, your, his, her, its, our* and *their* stand before a noun (*their house*), while *mine, yours, his, hers, ours* and *theirs* stand alone (*the house is theirs*).

Possessive pronouns never take an apostrophe. *Its* is the possessive form (*the dog wagged its tail*); *it's* is a contraction of *it is*. In the same way, *hers*, *ours* and *theirs* are written without apostrophes.

**Before a gerund.** A gerund is the *-ing* form of a verb used as a noun. A pronoun placed before a gerund is generally put in the possessive case, because the gerund is being treated as a thing that "belongs" to the person: *He grew tired of their partying late into the night.* (Not *of them partying*.)

## Compound subjects and compound objects

When a pronoun is joined to a noun or to another pronoun by *and* or *or*, it keeps the case it would have if it stood alone. Compound subjects take subjective pronouns; compound objects take objective pronouns.

- Subject: *Antonio and I have occasional disagreements about the dishes.*
- Object: *Disagreements about the dishes come up between Antonio and me.*

A reliable test is to remove the other part of the compound and listen to the pronoun alone. *I have disagreements* is correct, *me have disagreements* is not; *between me* is correct, *between I* is not. The phrase *between you and I*, though often heard, is incorrect, because *between* is a preposition and needs objects: *between you and me*.

## Who and whom; whoever and whomever

*Who* and *whoever* are nominative; *whom* and *whomever* are objective.

- *Who is going to the concert?* (*who* is the subject of *is going*)
- *She is the person who is best qualified for the job.* (*who* is the subject of *is*)
- *I don't know whom to ask.* (*whom* is the object of *ask*)
- *To whom should I give the extra concert tickets?* (*whom* is the object of the preposition *to*)

A practical check is to answer the question, or rearrange the clause, using *he* or *him*. If *he* fits, use *who*; if *him* fits, use *whom*. *Whom should I ask?* — *I should ask him* — so *whom* is correct.

## We or us before a noun

When *we* or *us* comes directly before a noun, choose the case by the job of the whole phrase. Use *we* in a subject and *us* in an object.

- *We citizens must vote in order to make our voices heard.* (subject)
- *Legislators need to hear from us citizens.* (object of the preposition *from*)

Again, removing the noun gives the answer: *we must vote*; *hear from us*.

## Comparisons with than and as

Comparisons with *than* or *as* often leave words out. The case of the pronoun shows which words have been omitted, and so it can change the meaning of the sentence.

- *Antonio cares more about having a clean kitchen than I [do].* — Antonio cares more than I care.
- *Sometimes I think Antonio cares more about a clean kitchen than [he cares about] me.* — Antonio cares more about the kitchen than about me.

To choose the case, complete the comparison in your mind and see whether the pronoun is a subject or an object.

## Summary

- Case is the form of a pronoun that shows its function: nominative for subjects, objective for objects, possessive for ownership.
- Objective pronouns follow verbs, prepositions and infinitives.
- Possessive pronouns never take apostrophes; use the possessive before a gerund.
- In compound subjects and objects, test the pronoun on its own.
- *Who/whoever* are subjects; *whom/whomever* are objects. *We* goes with subjects and *us* with objects.
- In comparisons with *than* or *as*, supply the missing words to find the correct case.`,
      workedExample: `**Task.** Choose the correct pronoun in each sentence. Name its case and explain the choice.

1. *The headmaster gave the prizes to Musu and (I / me).*
2. *(We / Us) students of Grade 12 organised the debate.*
3. *(Who / Whom) did the committee appoint as chairperson?*
4. *My parents were proud of (me / my) winning the essay competition.*
5. *Kollie runs faster than (she / her).*

**Answers**

1. **me** — objective case. *Musu and me* is the object of the preposition *to*. Removing *Musu and* leaves *gave the prizes to me*, not *to I*.

2. **We** — nominative case. *We students* is the subject of *organised*. Removing *students* leaves *We organised the debate*.

3. **Whom** — objective case. Rearranged, the question reads *The committee did appoint whom*; *whom* is the object of *appoint*. The answer would be *The committee appointed him*, and *him* signals *whom*.

4. **my** — possessive case. *Winning* is a gerund (an *-ing* word used as a noun), so the pronoun before it takes the possessive form.

5. **she** — nominative case. Completing the comparison gives *Kollie runs faster than she [runs]*; *she* is the subject of the omitted verb *runs*.

**Method used.** In each sentence, decide what job the pronoun does — subject, object or owner — and, where words are missing or a second word is joined to the pronoun, supply or remove words until the job is clear.`,
      quiz: [
        { prompt: "What does the 'case' of a pronoun show?", options: ["Whether it is singular or plural", "The function it performs in the sentence", "Whether it refers to a person or a thing", "The tense of the verb"], correctIndex: 1, explanation: "Case is the form a pronoun takes to show its function — subject, object or owner." },
        { prompt: "Which group contains only objective-case pronouns?", options: ["I, she, we, they", "my, her, our, their", "me, her, us, them", "mine, hers, ours, theirs"], correctIndex: 2, explanation: "Me, her, us and them are the objective forms." },
        { prompt: "Which two personal pronouns have the same form in the nominative and objective cases?", options: ["he and him", "you and it", "we and us", "she and her"], correctIndex: 1, explanation: "You and it do not change between the subject and object positions." },
        { prompt: "Choose the correct sentence.", options: ["Him and me collected the books.", "He and me collected the books.", "Him and I collected the books.", "He and I collected the books."], correctIndex: 3, explanation: "The compound is the subject, so both pronouns must be nominative: He and I." },
        { prompt: "Choose the correct sentence.", options: ["Keep this secret between you and I.", "Keep this secret between you and me.", "Keep this secret between yourself and I.", "Keep this secret between we."], correctIndex: 1, explanation: "Between is a preposition, so it takes objective pronouns: between you and me." },
        { prompt: "In 'The coach asked Fatu and ___ to lead the warm-up', which pronoun is correct?", options: ["I", "me", "my", "mine"], correctIndex: 1, explanation: "The objective case is used before an infinitive (to lead); test: asked me to lead." },
        { prompt: "Which sentence uses the possessive correctly?", options: ["The bag is her's.", "The bag is hers'.", "The bag is hers.", "The bag is she's."], correctIndex: 2, explanation: "Possessive pronouns never take an apostrophe." },
        { prompt: "Which is correct?", options: ["The school changed it's timetable.", "The school changed its timetable.", "The school changed its' timetable.", "The school changed it timetable."], correctIndex: 1, explanation: "Its is the possessive; it's means it is." },
        { prompt: "Choose the correct form before the gerund: 'We were surprised by ___ leaving early.'", options: ["him", "he", "his", "himself"], correctIndex: 2, explanation: "A pronoun before a gerund generally takes the possessive case: his leaving." },
        { prompt: "'___ wrote this letter?' Which word is correct?", options: ["Whom", "Who", "Whose", "Whomever"], correctIndex: 1, explanation: "The word is the subject of wrote, so the nominative who is needed." },
        { prompt: "'To ___ should I send the invitation?' Which word is correct?", options: ["who", "whom", "whoever", "whose"], correctIndex: 1, explanation: "After the preposition to, the objective whom is required." },
        { prompt: "'She is the candidate ___ we interviewed yesterday.' Which word is correct?", options: ["who", "whom", "whose", "which"], correctIndex: 1, explanation: "Rearranged: we interviewed her/him — an object — so whom." },
        { prompt: "'The prize will go to ___ finishes first.' Which word is correct?", options: ["whomever", "whoever", "whom", "who's"], correctIndex: 1, explanation: "Whoever is the subject of finishes; the whole clause is the object of to." },
        { prompt: "Choose the correct sentence.", options: ["Us farmers need better roads.", "We farmers need better roads.", "Our farmers need better roads to us.", "Us farmer's need better roads."], correctIndex: 1, explanation: "The phrase is the subject, so we is used: we need better roads." },
        { prompt: "Choose the correct sentence.", options: ["The minister spoke to we students.", "The minister spoke to us students.", "The minister spoke to our's students.", "The minister spoke to students we."], correctIndex: 1, explanation: "After the preposition to, the objective us is needed." },
        { prompt: "'My brother is taller than ___.' Which completion is correct in formal English?", options: ["me", "I", "myself", "mine"], correctIndex: 1, explanation: "Completed: taller than I [am]. I is the subject of the omitted verb." },
        { prompt: "What is the difference between 'She likes Musa more than I' and 'She likes Musa more than me'?", options: ["There is no difference", "The first compares how much she and I like Musa; the second compares how much she likes Musa and me", "The first is always wrong", "The second compares two people's height"], correctIndex: 1, explanation: "The case shows the omitted words: than I [like Musa] versus than [she likes] me." },
        { prompt: "Which test helps you choose between 'who' and 'whom'?", options: ["Count the syllables", "Replace it with he or him and see which fits", "Use who at the start of every sentence", "Use whom after every verb"], correctIndex: 1, explanation: "If he fits, use who; if him fits, use whom." },
        { prompt: "In 'The house on the hill is ours', the word 'ours' is", options: ["nominative", "objective", "possessive, standing alone", "possessive, standing before a noun"], correctIndex: 2, explanation: "Ours shows ownership and is not followed by a noun." },
        { prompt: "Identify the error: 'Mother gave Sando and I some money for the trip.'", options: ["Mother should be mother", "I should be me", "gave should be given", "There is no error"], correctIndex: 1, explanation: "Sando and I is an indirect object of gave, so the objective me is needed: gave me some money." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Choose the sentence in which every pronoun is in the correct case.", options: ["Her and I prepared the report for the teacher and he.", "She and I prepared the report for the teacher and him.", "She and me prepared the report for the teacher and him.", "Her and me prepared the report for the teacher and he."], correctIndex: 1, answerKey: "B. She and I is the subject (nominative); the teacher and him is the object of the preposition for (objective).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Correct the two pronoun errors in this sentence and explain each correction: 'Between you and I, the elders did not like us helping with the harvest.'", answerKey: "between you and me — the pronoun is the object of the preposition between, so the objective case is needed (2 marks); our helping — a pronoun before the gerund helping takes the possessive case (2 marks).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Fill each blank with who or whom and give the reason: (a) ___ is responsible for the library? (b) The man to ___ I spoke was polite. (c) We need a leader ___ the people trust.", answerKey: "(a) Who — subject of is (1 mark). (b) whom — object of the preposition to (1 mark). (c) whom — object of trust (the people trust him) (1 mark). One mark for each correct reason (3 marks).", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain, with an example, how the choice between 'I' and 'me' after 'than' can change the meaning of a sentence.", answerKey: "The case shows the omitted words (1 mark). Example: 'He trusts Lucy more than I' = more than I trust Lucy; 'He trusts Lucy more than me' = more than he trusts me (3 marks).", marks: 4 },
        { type: "ESSAY", prompt: "Write a short explanation, suitable for a younger student, of the three cases of English pronouns. Give the pronouns in each case, show where each case is used, and explain how to avoid common errors with compound pronouns, who/whom and possessive forms.", answerKey: "Definition of case (1). Nominative, objective and possessive pronouns listed correctly (3). Uses: subjects; objects of verbs, prepositions and infinitives; ownership and before gerunds (2). Compound test of removing the other word (1). who/whom with he/him test (1). No apostrophes in possessive pronouns; its/it's (1). Clear, accurate examples (1).", marks: 10 },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (McLean), 5.5 Verb Tenses (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Book:_Writing_for_Success_(McLean)/5:_Help_for_English_Language_Learners/5.5:_Verb_Tenses); LibreTexts — Guide to Writing (Lumen), 4.27 Advanced Verb Tenses (https://chem.libretexts.org/Courses/Lumen_Learning/Book:_Guide_to_Writing_(Lumen)/04:_Module_1:_Grammar/04.27:_Advanced_Verb_Tenses); LibreTexts — ESOL Advanced Grammar (San Jacinto College), Ch. 2 Perfect Tenses, 2.1–2.7 (https://human.libretexts.org/Courses/San_Jacinto_College/ESOL_Advanced_Grammar/02:_Perfect_Tenses)
      slug: "perfect-and-perfect-progressive-tenses",
      title: "Verb Usage: The Perfect and Perfect Progressive Tenses",
      objective:
        "By the end of the topic, learners should be able to form the present perfect, past perfect and future perfect tenses and their progressive forms, explain what each expresses about time, and choose the correct tense in speech and writing.",
      estimatedMinutes: 150,
      notes: `A verb does more than say that something happened. It can also show how one event stands in time against another: whether an action is finished or still going on, whether it happened before something else, and whether it will be complete by some future moment. The six tenses in this topic exist to express exactly these relationships. They are built from a small number of parts, and once the parts are understood the whole set falls into a clear pattern.

## Perfect and progressive: what the names mean

**Perfect tenses** — tenses that express a sense of completion. The action has been, had been, or will have been completed by a certain time. They are formed with a form of the helping verb *have* and the past participle of the main verb.

**Progressive (continuous) tenses** — tenses that express a sense of continuity. The subject is, was or will be doing something over a period of time. They use a form of *be* with the *-ing* form (present participle) of the main verb.

**Perfect progressive tenses** combine the two ideas: an action continuing over a period up to a certain time. They are formed with a form of *have*, then *been*, then the *-ing* form.

**Past participle** — the form of a verb used in all the perfect tenses. For regular verbs it ends in *-d* or *-ed* and is identical to the simple past (*work → worked*, *help → helped*). Irregular verbs have their own forms (*write → written*, *fly → flown*, *take → taken*), which must be learnt.

## The six tenses at a glance

| Tense | Form | Example with *work* |
| --- | --- | --- |
| Present perfect | has / have + past participle | She has worked. |
| Present perfect progressive | has / have + been + -ing | She has been working. |
| Past perfect | had + past participle | She had worked. |
| Past perfect progressive | had + been + -ing | She had been working. |
| Future perfect | will have + past participle | She will have worked. |
| Future perfect progressive | will have + been + -ing | She will have been working. |

The only difference between the present, past and future versions is the form of *have*: *has/have*, *had* or *will have*.

## The present perfect

**Form.** Subject + *has* or *have* + past participle: *I have finished the report.* The negative adds *not* (*We haven't eaten lunch yet*), and questions place *has* or *have* before the subject (*Have you done your homework?*).

**Use.** The present perfect connects the past with the present. It is used for:

1. An action at an unspecified time in the past: *I have seen that film before.*
2. Life experiences: *They have never been to Australia.*
3. An action that began in the past and continues now: *She has lived here for five years.*
4. An action completed very recently: *I have just finished my homework.*
5. A past action whose result is still felt now: *He has broken his leg.*

**Time expressions.** Certain words are commonly used with the present perfect. *For* gives a length of time (*for five years*); *since* gives the point at which the action began (*since I graduated*). *Just* refers to the very recent past; *already* means "before now"; *yet* means "up to now" and is used in questions and negatives; *ever* means "at any time" and is used mostly in questions; *never* means "not at any time".

**Present perfect or simple past?** The simple past describes an event that began and ended in the past, often with a finished time expression such as *yesterday*, *last year* or *in 2017*. The present perfect is used when the past event is connected with, or has an effect on, the present. Compare *I locked myself out of the house yesterday* (the problem is over) with *I've locked myself out of the house* (the problem still exists).

## The present perfect progressive

**Form.** Subject + *has* or *have* + *been* + *-ing* form: *She has been talking for the last hour.*

**Use.** Like the present perfect, it describes an action that began in the past and continues into the present, but it is chosen when the speaker wants to stress that the action is ongoing. *I have been feeling tired lately* emphasises the continuing tiredness. Compare *Zachi has read all the latest articles* (the reading is complete) with *Zachi has been reading all the latest articles* (the reading is in progress).

## The past perfect

**Form.** Subject + *had* + past participle: *The bus had left.* The contraction is *'d* (*They'd gone*) and the negative *hadn't*.

**Use.** The past perfect shows that one action in the past happened **before another action in the past**. In *The bus had left by the time Theo arrived at the station*, both actions are past, but the bus left first (past perfect) and Theo arrived later (simple past).

\`\`\`svg The past perfect places one past event before another past event
<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline showing bus had left, then Theo arrived, then now">
  <line x1="15" y1="55" x2="285" y2="55" stroke="#334155" stroke-width="2"/>
  <polygon points="290,55 280,50 280,60" fill="#334155"/>
  <circle cx="80" cy="55" r="6" fill="#2563eb"/>
  <circle cx="170" cy="55" r="6" fill="#dc2626"/>
  <line x1="255" y1="42" x2="255" y2="68" stroke="#334155" stroke-width="2"/>
  <text x="44" y="35" font-size="11" fill="#2563eb">the bus had left</text>
  <text x="58" y="85" font-size="10" fill="#2563eb">past perfect</text>
  <text x="140" y="35" font-size="11" fill="#dc2626">Theo arrived</text>
  <text x="146" y="85" font-size="10" fill="#dc2626">simple past</text>
  <text x="243" y="85" font-size="11" fill="#334155">now</text>
</svg>
\`\`\`

**By the time and by.** In a sentence with *by the time*, the time clause takes the simple past and the main clause the past perfect: *By the time we got to the airport, the flight had already taken off.* *By* followed by a time also marks completion before a past moment: *By 5 p.m., I had completed the project.*

The past perfect should be used only when it is needed to make clear which past action happened first. When the order is already obvious, the simple past is enough.

## The past perfect progressive

**Form.** Subject + *had been* + *-ing* form: *I had been working all day.*

**Use.** It describes an action that began in the past and continued until another time in the past: *The employees had been talking until their boss arrived.*

**Past perfect or past perfect progressive?** The past perfect focuses on the **completion** of the action; the past perfect progressive focuses on its **continuity or duration**. Compare *He had worked at the company for 10 years before he left* with *He had been working at the company for 10 years before he left*. With verbs such as *work* and *live*, either form can be used with little difference in meaning.

## The future perfect

**Form.** Subject + *will have* + past participle: *As a pilot, Sara will have flown many cross-country flights.*

**Use.** The future perfect looks back from a point in the future at an action that will be complete by then. It is used when a speaker expects an event to be finished at some future time, although it is not finished yet. In *You will have forgotten me after you move to London*, both actions lie in the future, but the forgetting will be complete after the move.

## The future perfect progressive

**Form.** Subject + *will have been* + *-ing* form.

**Use.** This tense is rarely used. It describes an action that will continue over a period until another time in the future: *By the end of the meeting, I will have been hearing about mortgages and taxes for eight hours.*

## Summary

| Tense | Main idea | Example |
| --- | --- | --- |
| Present perfect | Past action connected with the present | I have finished my homework. |
| Present perfect progressive | Action from the past still going on, stressing duration | She has been talking for an hour. |
| Past perfect | Earlier of two past actions | The bus had left when Theo arrived. |
| Past perfect progressive | Continuing action up to a past moment | I had been working all day. |
| Future perfect | Action complete before a future moment | Sara will have flown many routes. |
| Future perfect progressive | Continuing action up to a future moment | I will have been listening for eight hours. |

- Perfect = *have* + past participle (completion); perfect progressive = *have* + *been* + *-ing* (continuity).
- Use *for* with a length of time and *since* with a starting point.
- Use the past perfect only when the order of two past events must be made clear.`,
      workedExample: `**Task.** Put each verb in brackets into the correct perfect or perfect progressive tense, and justify the choice.

1. *Kebeh (live) in Gbarnga since 2019.*
2. *By the time the ambulance arrived, the patient (stop) breathing.*
3. *They (wait) for the bus for two hours when it finally came.*
4. *By next June, I (complete) my WASSCE examinations.*
5. *Look at the floor! Someone (spill) palm oil.*
6. *By December, Mr. Dolo (teach) at this school for twenty years.*

**Answers**

1. **has lived** (or **has been living**) — present perfect. The action began in the past (*since 2019*) and continues now. *Since* gives the starting point. With *live*, the progressive form gives almost the same meaning.

2. **had stopped** — past perfect. Two past actions: the stopping happened before the arrival. The *by the time* clause takes the simple past (*arrived*), the main clause the past perfect.

3. **had been waiting** — past perfect progressive. The waiting continued for a period (*for two hours*) up to another past moment (*when it finally came*), and the sentence stresses its duration.

4. **will have completed** — future perfect. The examinations will be finished before a point in the future (*by next June*).

5. **has spilt** (or **has spilled**) — present perfect. A past action whose result is visible now (the oil on the floor).

6. **will have been teaching** — future perfect progressive. The teaching continues over a period (*for twenty years*) up to a future moment (*by December*).

**Method.** For each sentence, identify the reference time (now, a past moment or a future moment), then decide whether the action is complete by then (perfect) or continuing up to then (perfect progressive).`,
      quiz: [
        { prompt: "What do all perfect tenses have in common?", options: ["They use the -ing form of the verb", "They use a form of 'have' with the past participle", "They describe only past events", "They use 'will'"], correctIndex: 1, explanation: "Every perfect tense is built from a form of have plus the past participle." },
        { prompt: "Which tense is 'They have been studying'?", options: ["Present perfect", "Past perfect progressive", "Present perfect progressive", "Future perfect"], correctIndex: 2, explanation: "has/have + been + -ing is the present perfect progressive." },
        { prompt: "Which tense is 'The rain had stopped'?", options: ["Simple past", "Past perfect", "Present perfect", "Past progressive"], correctIndex: 1, explanation: "had + past participle is the past perfect." },
        { prompt: "Choose the correct sentence.", options: ["I have seen him yesterday.", "I saw him yesterday.", "I had see him yesterday.", "I have saw him yesterday."], correctIndex: 1, explanation: "Yesterday is a finished time, so the simple past is used, not the present perfect." },
        { prompt: "'She ___ in Monrovia for ten years and still lives there.'", options: ["lived", "has lived", "had lived", "will live"], correctIndex: 1, explanation: "An action that began in the past and continues now takes the present perfect." },
        { prompt: "Which word completes 'We have known each other ___ 2015'?", options: ["for", "since", "ago", "during"], correctIndex: 1, explanation: "Since introduces the point in time at which the action began." },
        { prompt: "Which word completes 'We have known each other ___ ten years'?", options: ["since", "ago", "for", "from"], correctIndex: 2, explanation: "For introduces a length of time." },
        { prompt: "'When we reached the stadium, the match ___.'", options: ["already started", "has already started", "had already started", "will have started"], correctIndex: 2, explanation: "The match started before we reached the stadium: the earlier past action takes the past perfect." },
        { prompt: "'By the time the police came, the thieves ___.'", options: ["escape", "have escaped", "had escaped", "will have escaped"], correctIndex: 2, explanation: "By the time + simple past (came) is followed by the past perfect in the main clause." },
        { prompt: "What does the past perfect progressive emphasise?", options: ["The completion of a past action", "The duration of an action continuing up to a past moment", "A future plan", "A habit in the present"], correctIndex: 1, explanation: "It focuses on continuity or duration up to another time in the past." },
        { prompt: "'By 2030, the company ___ two hundred houses.'", options: ["will build", "has built", "will have built", "had built"], correctIndex: 2, explanation: "Completion before a future time is expressed by the future perfect." },
        { prompt: "Which tense is described as 'rarely used'?", options: ["Present perfect", "Past perfect", "Future perfect progressive", "Simple future"], correctIndex: 2, explanation: "The future perfect progressive is the least common of the six." },
        { prompt: "Choose the correct past participle: 'The pilot has ___ to Accra twice.'", options: ["flew", "flown", "flied", "flying"], correctIndex: 1, explanation: "Fly is irregular: fly, flew, flown. The perfect tenses use the past participle flown." },
        { prompt: "What is the difference between 'I've lost my key' and 'I lost my key'?", options: ["No difference", "The first suggests the key is still lost; the second simply reports a finished past event", "The first is future", "The second is ungrammatical"], correctIndex: 1, explanation: "The present perfect connects the past event with the present situation." },
        { prompt: "'I am tired because I ___ all morning.'", options: ["have been digging", "had been digging", "will have been digging", "have dug yesterday"], correctIndex: 0, explanation: "An action continuing up to now and causing a present result, with stress on duration: present perfect progressive." },
        { prompt: "Which sentence uses the past perfect unnecessarily?", options: ["After she had eaten, she went to bed.", "I had woken up at six this morning.", "By noon, we had finished the work.", "He had left before I arrived."], correctIndex: 1, explanation: "There is no second past event to compare with, so the simple past (I woke up at six) is enough." },
        { prompt: "'Have you finished your assignment ___?' Which word fits?", options: ["already", "yet", "since", "for"], correctIndex: 1, explanation: "Yet means 'up to now' and usually comes at the end of a question or negative." },
        { prompt: "Which sentence is in the future perfect?", options: ["I will finish the essay.", "I will be finishing the essay.", "I will have finished the essay by Friday.", "I have finished the essay."], correctIndex: 2, explanation: "will have + past participle is the future perfect." },
        { prompt: "'He had worked there for ten years' and 'He had been working there for ten years' differ mainly in that", options: ["the first stresses completion, the second stresses duration", "the first is present and the second past", "the second is ungrammatical", "the first describes the future"], correctIndex: 0, explanation: "Past perfect focuses on completion; past perfect progressive on continuity. With work, the difference is small." },
        { prompt: "Identify the error: 'She has went to the market.'", options: ["has should be have", "went should be gone", "the should be a", "There is no error"], correctIndex: 1, explanation: "The present perfect needs the past participle gone, not the simple past went." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Choose the sentence that correctly uses the past perfect.", options: ["I had finished my homework now.", "When I had arrived, they leave.", "They had already eaten when we arrived.", "She had been go home."], correctIndex: 2, answerKey: "C. The eating happened before the arrival; the earlier past action takes had + past participle, the later one the simple past.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Write the six perfect and perfect progressive forms of the verb 'write' with the subject 'he'.", answerKey: "has written; has been writing; had written; had been writing; will have written; will have been writing (1 mark each).", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference in meaning between 'Musa lived in Kakata for six years' and 'Musa has lived in Kakata for six years'.", answerKey: "The simple past means the six years are finished — Musa no longer lives there (2 marks). The present perfect connects the past to the present — he began living there six years ago and still lives there (2 marks).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Complete each sentence with the correct tense of the verb in brackets: (a) By the time the guests arrived, we (cook) the rice. (b) By the end of this term, she (study) French for three years. (c) I (try) to call you all afternoon, but your phone is off.", answerKey: "(a) had cooked — past perfect, earlier of two past actions (2 marks). (b) will have been studying (or will have studied) — up to a future moment, stressing duration (2 marks). (c) have been trying — action continuing up to the present (2 marks).", marks: 6 },
        { type: "ESSAY", prompt: "Write a paragraph of 10–12 sentences about a memorable day in your school life, using at least one example of each of the six perfect and perfect progressive tenses. Underline each example and name its tense.", answerKey: "Award 1 mark for each tense used correctly and labelled (6). Coherent paragraph on the topic (2). Accurate past participles and correct use of time expressions such as for, since, by the time (2).", marks: 10 },
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
