import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 11,
// Semester One, Period II: Grammar — Verb Usage. CONTENTS: (1) Verb usage —
// proper verb usage, and active and passive voice; (2) writing a paragraph
// (topic sentence, body, conclusion, unity, coherence); (3) proofreading
// (mechanics, misspelled words, run-on sentences, fragments, pronoun shift,
// capitalization, abbreviation). Each CONTENTS item is one topic.
export const englishLanguageG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Verb Usage — Voice, Paragraphs and Proofreading",
  summary:
    "Period II of the MoE Grade 11 English syllabus. Learners use verbs correctly in the active and passive voice, build well-formed paragraphs with a topic sentence, body and conclusion held together by unity and coherence, and proofread their writing to remove run-on sentences, fragments, pronoun shifts and mechanical errors.",
  topics: [
    {
      // source: LibreTexts — Writing for Success (Weaver et al.), 8.2 Passive Verb (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(Weaver_et_al.)/8:_Verbs/8.2:_Passive_Verb)
      slug: "active-and-passive-voice",
      title: "Active and Passive Voice",
      objective:
        "By the end of the topic, learners should be able to distinguish active from passive voice, form the passive in different tenses with be + past participle, convert sentences between the two voices, and choose the voice that suits the meaning.",
      estimatedMinutes: 150,
      notes: `## Voice: who does the action

**Voice** shows whether the subject of a sentence **does** the action or **receives** it.

- **Active voice** — the subject is **responsible for the action**: *Faculty members often forget to lock their office doors.* (the subject *members* performs the action)
- **Passive voice** — the subject **receives** the action; it did not do it, it only suffered the effect: *Professor Mulden's purse was stolen from her office.* (the subject *purse* did nothing; it was acted on)

## How the passive is formed

The passive is built from a form of **be** + the **past participle** of the main verb. The tense is shown by the form of *be*.

| Tense | Passive pattern | Example |
| --- | --- | --- |
| Simple present | am/is/are + past participle | The letters **are posted** daily. |
| Simple past | was/were + past participle | The purse **was stolen** last week. |
| Simple future | will be + past participle | The results **will be announced** soon. |
| Present perfect | has/have been + past participle | The road **has been repaired**. |
| With a modal | modal + be + past participle | The door **must be locked**. |

## Turning active into passive

1. Make the **object** of the active sentence the **subject** of the passive.
2. Put **be** in the same tense, followed by the **past participle**.
3. The original subject, if named, follows **by**.

- Active: *The teacher marked the scripts.* → Passive: *The scripts **were marked** by the teacher.*
- Active: *Workers build the road.* → Passive: *The road **is built** by workers.*

To go the other way (passive → active), name the doer as the subject and drop *be*: *The scripts were marked by the teacher* → *The teacher marked the scripts.*

## Choosing the right voice

- Prefer the **active voice** for most writing: it is **shorter, clearer and more direct**, and it names who is responsible.
- Use the **passive voice** when the **doer is unknown, unimportant, or obvious**, or when the receiver of the action matters most:
  - *My bicycle **was stolen**.* (the thief is unknown)
  - *The bridge **was completed** in 1998.* (who built it is not the point)

## Common errors

- **Missing 'be':** ✗ *The house painted last year.* → ✓ *The house **was** painted last year.*
- **Wrong participle:** ✗ *The song was sang.* → ✓ *The song was **sung**.* (use the past participle, not the past form)

## Summary

- **Active:** subject does the action; **Passive:** subject receives it.
- Passive = **be (in the right tense) + past participle**, with the doer after **by** if named.
- Write in the active voice by default; use the passive when the doer is unknown or unimportant.`,
      workedExample: `**Task.** Convert each active sentence to the passive, then say why the passive might be chosen.

1. *The committee approved the plan.*
2. *Someone has broken the window.*

**Answers**

1. Object *the plan* becomes the subject; *approved* (simple past) becomes **was approved**; the doer follows *by*:
   → *The plan **was approved** by the committee.*
   The passive here keeps the focus on *the plan*.
2. Object *the window* becomes the subject; *has broken* (present perfect) becomes **has been broken**; the doer *someone* is unknown, so it is dropped:
   → *The window **has been broken**.*
   The passive is right because the doer is unknown and unimportant.

**Rule applied:** move the object to the front, use **be + past participle** in the original tense, and add *by + doer* only when the doer matters.`,
      quiz: [
        {
          prompt: "In the active voice, the subject…",
          options: ["performs the action", "receives the action", "is always plural", "is always a pronoun"],
          correctIndex: 0,
          explanation: "In active voice the subject does the action.",
        },
        {
          prompt: "In the passive voice, the subject…",
          options: ["receives the action", "performs the action", "disappears", "becomes a verb"],
          correctIndex: 0,
          explanation: "In passive voice the subject receives (suffers) the action.",
        },
        {
          prompt: "The passive voice is formed with a form of 'be' plus the…",
          options: ["past participle", "base form", "-ing form", "past form"],
          correctIndex: 0,
          explanation: "Passive = be + past participle.",
        },
        {
          prompt: "Which sentence is in the passive voice?",
          options: ["The purse was stolen.", "She stole the purse.", "She is stealing the purse.", "She steals purses."],
          correctIndex: 0,
          explanation: "'was stolen' (be + past participle) is passive; the subject receives the action.",
        },
        {
          prompt: "Which sentence is in the active voice?",
          options: ["The teacher marked the scripts.", "The scripts were marked.", "The scripts have been marked.", "The scripts are being marked."],
          correctIndex: 0,
          explanation: "The subject 'teacher' performs the action, so it is active.",
        },
        {
          prompt: "The passive of 'Workers build the road' is…",
          options: ["The road is built by workers.", "The road builds workers.", "Workers are built the road.", "The road building workers."],
          correctIndex: 0,
          explanation: "Object 'road' becomes subject; 'is built' + 'by workers'.",
        },
        {
          prompt: "In a passive sentence, the doer (if named) usually follows the word…",
          options: ["by", "of", "to", "with"],
          correctIndex: 0,
          explanation: "The agent follows 'by': 'marked by the teacher'.",
        },
        {
          prompt: "Which passive is in the present perfect?",
          options: ["The road has been repaired.", "The road was repaired.", "The road is repaired.", "The road will be repaired."],
          correctIndex: 0,
          explanation: "has/have been + past participle = present perfect passive.",
        },
        {
          prompt: "Which tense is 'The results will be announced'?",
          options: ["simple future passive", "simple past passive", "present perfect passive", "present passive"],
          correctIndex: 0,
          explanation: "will be + past participle = simple future passive.",
        },
        {
          prompt: "Most writing should prefer the active voice because it is…",
          options: ["clearer and more direct", "always longer", "harder to read", "more formal only"],
          correctIndex: 0,
          explanation: "The active voice is shorter, clearer and names the doer.",
        },
        {
          prompt: "The passive is a good choice when the doer is…",
          options: ["unknown or unimportant", "the main point", "a proper noun", "a pronoun"],
          correctIndex: 0,
          explanation: "Use the passive when the doer is unknown, unimportant or obvious.",
        },
        {
          prompt: "Which sentence correctly uses the passive for an unknown doer?",
          options: ["My bicycle was stolen.", "My bicycle stole.", "My bicycle is stealing.", "My bicycle steals."],
          correctIndex: 0,
          explanation: "'was stolen' fits an unknown thief; the others are wrong.",
        },
        {
          prompt: "What is the error in 'The song was sang'?",
          options: ["it uses the past form, not the past participle", "it has no subject", "it is active", "it needs a modal"],
          correctIndex: 0,
          explanation: "The passive needs the past participle 'sung': 'The song was sung.'",
        },
        {
          prompt: "What is missing in 'The house painted last year' (intended as passive)?",
          options: ["a form of 'be' (was)", "an object", "a subject", "a modal"],
          correctIndex: 0,
          explanation: "It should be 'The house was painted last year.'",
        },
        {
          prompt: "The active version of 'The plan was approved by the committee' is…",
          options: ["The committee approved the plan.", "The plan approved the committee.", "The committee was approved.", "The plan committee approved."],
          correctIndex: 0,
          explanation: "Name the doer as subject and drop 'be': 'The committee approved the plan.'",
        },
        {
          prompt: "With a modal, the passive pattern is…",
          options: ["modal + be + past participle", "modal + past participle", "modal + being", "modal + was"],
          correctIndex: 0,
          explanation: "e.g. 'The door must be locked.'",
        },
        {
          prompt: "Which sentence keeps the focus on the receiver of the action?",
          options: ["The bridge was completed in 1998.", "They completed the bridge in 1998.", "Workers built the bridge.", "The company builds bridges."],
          correctIndex: 0,
          explanation: "The passive foregrounds 'the bridge', the receiver.",
        },
        {
          prompt: "Which is the passive of 'The dog chased the cat'?",
          options: ["The cat was chased by the dog.", "The cat chased the dog.", "The dog was chased by the cat.", "The cat is chasing the dog."],
          correctIndex: 0,
          explanation: "Object 'cat' becomes subject; 'was chased by the dog'.",
        },
        {
          prompt: "In 'The letters are posted daily', the voice and tense are…",
          options: ["passive, simple present", "active, simple present", "passive, simple past", "active, present perfect"],
          correctIndex: 0,
          explanation: "are + past participle 'posted' = simple present passive.",
        },
        {
          prompt: "Why is the active voice usually preferred?",
          options: ["it names who is responsible", "it hides the doer", "it uses more words", "it avoids verbs"],
          correctIndex: 0,
          explanation: "Active writing states clearly who did the action.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Convert to the passive voice: 'The students planted the trees.' Keep the same tense.",
          answerKey:
            "'The trees were planted by the students.' Object becomes subject; 'were planted' (simple past passive); doer after 'by'. Full marks for correct passive with the tense preserved.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is correctly written in the passive voice?",
          options: [
            "The bridge has been repaired.",
            "The bridge has repaired.",
            "The bridge was repair.",
            "The bridge repairing.",
          ],
          correctIndex: 0,
          answerKey: "'has been repaired' (has been + past participle) is a correct present perfect passive.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Convert to the active voice: 'The letter was written by Musu.'",
          answerKey:
            "'Musu wrote the letter.' Name the doer as subject and drop 'be'. Full marks for the correct active sentence.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give one situation in which the passive voice is the better choice, with an example sentence.",
          answerKey:
            "When the doer is unknown, unimportant or obvious, e.g. 'My phone was stolen.' (thief unknown) or 'The school was built in 1990.' (builder not the point). Award marks for a valid reason plus a correct passive example.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between active and passive voice and how the passive is formed. Give one active and one passive sentence with the same meaning, and explain when each voice is the better choice.",
          answerKey:
            "A strong answer defines active (subject does the action) and passive (subject receives it); states passive = be + past participle with the doer after 'by'; gives a matched active/passive pair; and explains that the active is clearer for most writing while the passive suits an unknown or unimportant doer. Award marks for definitions, formation, the example pair, and the usage guidance.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (Weaver et al.), 2.6 Writing Paragraphs (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(Weaver_et_al.)/02:_Introduction_to_Writing/2.06:_Writing_Paragraphs)
      slug: "writing-a-paragraph",
      title: "Writing a Paragraph: Topic Sentence, Body and Conclusion",
      objective:
        "By the end of the topic, learners should be able to write a paragraph with a clear topic sentence, developed supporting sentences and a concluding sentence, and give it unity and coherence.",
      estimatedMinutes: 150,
      notes: `## The three parts of a paragraph

A **paragraph** develops **one** main idea. It has three parts:

1. **Topic sentence** — states the main idea; usually the **first** sentence. It is the **most general** sentence and often joins a **topic** with a **judgment** about it: *Owning a hybrid car has numerous advantages.*
2. **Body (supporting sentences)** — explain, prove or develop the topic sentence with **reasons, facts, statistics, quotations and examples**. They give **more specific** information than the topic sentence.
3. **Concluding sentence** — the **last** sentence; it **restates the main point in different words** and adds no new idea: *Given these savings, more people will surely follow suit.*

\`\`\`svg The shape of a paragraph
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="40" y="18" width="220" height="34" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="150" y="39" text-anchor="middle" font-size="12" font-weight="bold">Topic sentence (main idea)</text>
  <rect x="40" y="62" width="220" height="26" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="79" text-anchor="middle" font-size="11">Support 1 — reason / fact</text>
  <rect x="40" y="94" width="220" height="26" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="111" text-anchor="middle" font-size="11">Support 2 — example</text>
  <rect x="40" y="126" width="220" height="26" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="143" text-anchor="middle" font-size="11">Support 3 — detail</text>
  <rect x="40" y="160" width="220" height="30" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="150" y="179" text-anchor="middle" font-size="11.5" font-weight="bold">Concluding sentence</text>
</svg>
\`\`\`

## Unity

**Unity** means **every** sentence serves the **one** main idea in the topic sentence. Any sentence that wanders off the point breaks unity and must be cut or rewritten. Test each supporting sentence: *does it explain or support the topic sentence?* If not, it does not belong.

## Coherence

**Coherence** means the sentences **flow smoothly** and connect logically. Writers build coherence with:

- **Transitional words and phrases** that show the link between ideas:

| Relationship | Transitions |
| --- | --- |
| Sequence / time | first, second, finally, meanwhile |
| Addition | furthermore, moreover, in addition |
| Contrast | however, nevertheless, on the other hand |
| Result | therefore, thus, as a result |
| Example | for instance, for example |

- **Repetition of key terms** and pronouns that point back to them, keeping the reader anchored to the main idea.
- A clear **order** — chronological (time), spatial (place), or order of importance.

## A worked pattern

- **Topic sentence:** *There are numerous advantages to owning a hybrid car.*
- **Body:** *First,* they use far less fuel… *Second,* they produce fewer emissions… *Because* the engine switches off at rest, they are quiet in traffic…
- **Concluding sentence:** *Given the low running costs and environmental benefits, many more people will likely choose a hybrid.*

Note how *advantages* returns as *benefits* — a restatement, not a repeat.

## Summary

- Paragraph = **topic sentence + body + concluding sentence**, all about **one** idea.
- **Unity:** every sentence supports the main idea.
- **Coherence:** transitions, repeated key terms and a clear order make the sentences flow.`,
      workedExample: `**Task.** Build a unified, coherent paragraph from these notes about school libraries.

Main idea: a school library helps students succeed. Supports: quiet place to study; books for research; librarian gives guidance.

**Paragraph**

*A well-run school library helps students succeed.* (topic sentence — topic + judgment) *First, it offers a quiet place where learners can study without distraction.* (support + time transition) *Second, its books and reference materials give students the sources they need for research and homework.* (support + addition) *In addition, the librarian guides readers to the right material and teaches them how to find information.* (support + addition) *For these reasons, a good library is one of a school's most valuable resources.* (concluding sentence — restates the main idea in new words)

**Why it works**

- **Unity:** every sentence supports the one idea — the library helping students.
- **Coherence:** the transitions *first, second, in addition, for these reasons* link the sentences, and *library / it / resources* keep the focus.
- The concluding sentence restates the point (*valuable resources*) without repeating the topic sentence word for word.`,
      quiz: [
        {
          prompt: "A paragraph should develop how many main ideas?",
          options: ["one", "two", "three", "as many as possible"],
          correctIndex: 0,
          explanation: "A paragraph develops a single main idea.",
        },
        {
          prompt: "The sentence that states the main idea is the…",
          options: ["topic sentence", "concluding sentence", "supporting sentence", "transition"],
          correctIndex: 0,
          explanation: "The topic sentence states the paragraph's main idea.",
        },
        {
          prompt: "The topic sentence is usually the…",
          options: ["most general sentence", "most detailed sentence", "shortest sentence", "last sentence"],
          correctIndex: 0,
          explanation: "It is the most general sentence, guiding the paragraph.",
        },
        {
          prompt: "Supporting sentences develop the topic sentence with…",
          options: ["reasons, facts and examples", "new topics", "questions only", "the title"],
          correctIndex: 0,
          explanation: "The body offers reasons, facts, statistics, quotations and examples.",
        },
        {
          prompt: "The concluding sentence should…",
          options: ["restate the main point in new words", "introduce a new idea", "give a statistic", "start the paragraph"],
          correctIndex: 0,
          explanation: "It restates the main point without adding a new idea.",
        },
        {
          prompt: "Compared with the topic sentence, supporting sentences are…",
          options: ["more specific", "more general", "unrelated", "always shorter"],
          correctIndex: 0,
          explanation: "The body gives more specific information than the topic sentence.",
        },
        {
          prompt: "Unity in a paragraph means…",
          options: ["every sentence supports the main idea", "the sentences rhyme", "there is a concluding sentence", "it is very long"],
          correctIndex: 0,
          explanation: "Unity: all sentences serve the one main idea.",
        },
        {
          prompt: "A sentence that wanders off the topic breaks…",
          options: ["unity", "spelling", "the margin", "the tense"],
          correctIndex: 0,
          explanation: "Off-topic material destroys unity and should be cut.",
        },
        {
          prompt: "Coherence means the sentences…",
          options: ["flow smoothly and connect logically", "are all the same length", "avoid transitions", "have no order"],
          correctIndex: 0,
          explanation: "Coherence is the smooth, logical flow between sentences.",
        },
        {
          prompt: "Which of these is a transitional word showing contrast?",
          options: ["however", "furthermore", "first", "therefore"],
          correctIndex: 0,
          explanation: "'However' signals contrast.",
        },
        {
          prompt: "Which transition shows addition?",
          options: ["furthermore", "however", "for instance", "as a result"],
          correctIndex: 0,
          explanation: "'Furthermore' adds another point.",
        },
        {
          prompt: "Which transition shows result?",
          options: ["therefore", "meanwhile", "for example", "on the other hand"],
          correctIndex: 0,
          explanation: "'Therefore' signals a result or consequence.",
        },
        {
          prompt: "Repeating key terms and using pronouns that point back to them helps a paragraph's…",
          options: ["coherence", "length", "margins", "spelling"],
          correctIndex: 0,
          explanation: "Repetition of key ideas keeps the reader anchored and aids coherence.",
        },
        {
          prompt: "A strong topic sentence usually combines a topic with a…",
          options: ["judgment or interpretation", "list of facts", "quotation", "transition"],
          correctIndex: 0,
          explanation: "It pairs the topic with a judgment, e.g. 'Hybrid cars have many advantages.'",
        },
        {
          prompt: "Ordering a paragraph by time is called…",
          options: ["chronological order", "spatial order", "order of importance", "alphabetical order"],
          correctIndex: 0,
          explanation: "Chronological order arranges points by time.",
        },
        {
          prompt: "Ordering a description by location is called…",
          options: ["spatial order", "chronological order", "order of importance", "random order"],
          correctIndex: 0,
          explanation: "Spatial order arranges details by place.",
        },
        {
          prompt: "Which sentence would break unity in a paragraph about study habits?",
          options: ["My uncle sells fish at the market.", "A quiet space helps concentration.", "A timetable keeps you on track.", "Short breaks refresh the mind."],
          correctIndex: 0,
          explanation: "The fish-selling sentence is off-topic and breaks unity.",
        },
        {
          prompt: "The concluding sentence 'Given the low running costs and benefits…' echoes the topic word 'advantages' with the word…",
          options: ["benefits", "costs", "running", "given"],
          correctIndex: 0,
          explanation: "'Benefits' restates 'advantages' without repeating it exactly.",
        },
        {
          prompt: "In a paragraph, transitions such as 'first, second, finally' show…",
          options: ["sequence", "contrast", "example", "cause"],
          correctIndex: 0,
          explanation: "They order points in a sequence.",
        },
        {
          prompt: "The best test for a supporting sentence is: does it…",
          options: ["support the topic sentence", "contain a transition", "end the paragraph", "use a long word"],
          correctIndex: 0,
          explanation: "If it does not support the topic sentence, it does not belong.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three parts of a paragraph and state what each one does.",
          answerKey:
            "Topic sentence — states the main idea; body/supporting sentences — explain and develop it with reasons, facts and examples; concluding sentence — restates the main point in new words. Award a mark per part correctly described.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence would best serve as a topic sentence?",
          options: [
            "Regular exercise improves both body and mind.",
            "For example, running strengthens the heart.",
            "In conclusion, exercise is worthwhile.",
            "However, some people dislike the gym.",
          ],
          correctIndex: 0,
          answerKey: "It is the most general statement of the main idea; the others are support, conclusion or contrast.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between unity and coherence in a paragraph.",
          answerKey:
            "Unity = every sentence supports the one main idea; coherence = the sentences flow smoothly and connect logically (through transitions, repeated key terms and clear order). Award a mark for each concept correctly explained.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two transitional words or phrases and say what relationship each one shows.",
          answerKey:
            "Any two correct pairings, e.g. 'however' (contrast), 'furthermore' (addition), 'therefore' (result), 'for example' (example), 'first/finally' (sequence). Award a mark per correct transition + relationship.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a unified, coherent paragraph of 5-7 sentences on a topic of your choice. Begin with a topic sentence, develop it with supporting sentences using at least two transitions, and end with a concluding sentence.",
          answerKey:
            "Award marks for: a clear topic sentence stating one main idea; supporting sentences that all relate to it (unity); at least two well-used transitions and repeated key terms (coherence); a concluding sentence that restates the idea in new words; and correct sentence structure. Deduct for off-topic sentences or a conclusion that introduces new material.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (Weaver et al.), 7.3 Common Sentence Errors (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(Weaver_et_al.)/7:_Syntax/7.3:_Common_Sentence_Errors)
      slug: "proofreading-common-sentence-errors",
      title: "Proofreading: Fragments, Run-ons and Mechanics",
      objective:
        "By the end of the topic, learners should be able to proofread their writing to find and fix sentence fragments, run-on sentences (fused sentences and comma splices), pronoun shifts, and errors of capitalization and abbreviation.",
      estimatedMinutes: 150,
      notes: `## What proofreading is

**Proofreading** is the final check of a piece of writing for errors in **grammar, sentence structure, spelling and mechanics** (capitalization, punctuation, abbreviation). A complete sentence needs a **subject** and a **verb** and must express a **complete thought**.

## Sentence fragments

**Sentence fragment** — a group of words punctuated as a sentence but **not** complete. Three common types and their fixes:

1. **Incomplete verb** — a helping verb is missing:
   - ✗ *The runners staggering in the heat.* → ✓ *The runners **were** staggering in the heat.*
2. **Dependent clause standing alone** — it begins with a word like *because, although, unless, when* and cannot stand by itself:
   - ✗ *Unless she could earn the money for tuition.* → ✓ *Unless she could earn the money for tuition, **she would have to drop out.***
3. **Subject with modifiers but no verb**:
   - ✗ *Doubt and mistrust everywhere.* → ✓ *Doubt and mistrust **were** everywhere.*

## Run-on sentences

**Run-on sentence** — two or more **independent clauses** joined incorrectly. Two kinds:

- **Fused sentence** — no punctuation between the clauses: ✗ *A family of foxes lived under our shed young foxes played in the yard.*
- **Comma splice** — only a comma joins them (a comma alone cannot): ✗ *We looked outside, the kids were on the trampoline.*

**Four ways to fix a run-on:**

| Fix | Example |
| --- | --- |
| Full stop → two sentences | We looked outside. The kids were on the trampoline. |
| Semicolon | The accident closed both lanes; we waited an hour. |
| Comma + coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) | The child loved his mother, but he did not obey her. |
| Subordination (make one clause dependent) | When we looked outside, the kids were on the trampoline. |

## Pronoun shift

Keep pronouns **consistent** in person and number. Do not slide from one to another:

- ✗ *When **a student** studies hard, **you** pass.* → ✓ *When **a student** studies hard, **he or she** passes.* (or make both plural: *When **students** study hard, **they** pass.*)

## Capitalization and abbreviation

- **Capitalize** the first word of a sentence, the pronoun *I*, and **proper nouns** (names of people, places, days, months, countries, titles): *Monrovia, Tuesday, December, Liberia, President Weah.*
- Do **not** capitalize common nouns (*city, month, teacher*) unless they begin a sentence.
- **Abbreviations** shorten words (*Dr., Mr., etc., a.m.*). In formal writing, spell words out; use standard abbreviations only where accepted, and punctuate them correctly.

## Summary

- A sentence needs a **subject + verb + complete thought**.
- **Fragment** = incomplete; attach it or add what is missing.
- **Run-on** = clauses wrongly joined; fix with a full stop, semicolon, comma + FANBOYS, or subordination.
- Keep **pronouns consistent** and apply **capitalization** and **abbreviation** rules when you proofread.`,
      workedExample: `**Task.** Proofread and correct each error, naming the fault.

1. *Because the rain fell heavily.*
2. *The bell rang the pupils rushed out.*
3. *We waited for the bus, it never came.*
4. *When a learner is late, you miss the lesson.*

**Answers**

1. **Fragment** (a dependent clause alone). Fix by attaching an independent clause: *Because the rain fell heavily, **the match was cancelled**.*
2. **Run-on (fused sentence)** — no punctuation between two clauses. Fix: *The bell rang**, and** the pupils rushed out.* (comma + FANBOYS) or *The bell rang. The pupils rushed out.*
3. **Run-on (comma splice)** — a comma alone joins two clauses. Fix: *We waited for the bus**, but** it never came.* or use a semicolon: *We waited for the bus; it never came.*
4. **Pronoun shift** — from *a learner* to *you*. Fix: *When a learner is late, **he or she** misses the lesson.*

**Rule applied:** every sentence must have a subject, a verb and a complete thought; independent clauses must be joined correctly; pronouns must stay consistent.`,
      quiz: [
        {
          prompt: "Proofreading is the final check for errors in grammar, spelling and…",
          options: ["mechanics", "handwriting speed", "page count", "font"],
          correctIndex: 0,
          explanation: "Proofreading checks grammar, structure, spelling and mechanics.",
        },
        {
          prompt: "A complete sentence must have a subject, a verb and…",
          options: ["a complete thought", "a comma", "an adjective", "a capital in the middle"],
          correctIndex: 0,
          explanation: "It needs a subject, a verb and a complete thought.",
        },
        {
          prompt: "A sentence fragment is a group of words that is…",
          options: ["not a complete sentence", "too long", "a run-on", "a question"],
          correctIndex: 0,
          explanation: "A fragment is punctuated as a sentence but is incomplete.",
        },
        {
          prompt: "'The runners staggering in the heat.' is a fragment because it lacks…",
          options: ["a complete verb (helping verb)", "a subject", "a capital letter", "a comma"],
          correctIndex: 0,
          explanation: "It needs 'were': 'The runners were staggering in the heat.'",
        },
        {
          prompt: "'Unless she could earn the money.' is a fragment because it is a…",
          options: ["dependent clause standing alone", "run-on", "comma splice", "complete sentence"],
          correctIndex: 0,
          explanation: "A dependent clause cannot stand alone; attach it to an independent clause.",
        },
        {
          prompt: "A run-on sentence has two or more independent clauses that are…",
          options: ["joined incorrectly", "very short", "questions", "dependent"],
          correctIndex: 0,
          explanation: "Run-ons wrongly join independent clauses.",
        },
        {
          prompt: "A fused sentence is a run-on with…",
          options: ["no punctuation between the clauses", "a semicolon", "a full stop", "a conjunction"],
          correctIndex: 0,
          explanation: "A fused sentence has no punctuation joining the clauses.",
        },
        {
          prompt: "A comma splice joins two independent clauses with only a…",
          options: ["comma", "semicolon", "full stop", "dash"],
          correctIndex: 0,
          explanation: "A comma alone cannot join independent clauses — that is a comma splice.",
        },
        {
          prompt: "Which is NOT a correct way to fix a run-on?",
          options: ["leave the comma splice as it is", "use a full stop", "use a semicolon", "use a comma + coordinating conjunction"],
          correctIndex: 0,
          explanation: "A comma splice is an error, not a fix.",
        },
        {
          prompt: "The coordinating conjunctions are remembered as…",
          options: ["FANBOYS", "AWUBIS", "FGH", "the 5 Ws"],
          correctIndex: 0,
          explanation: "FANBOYS = for, and, nor, but, or, yet, so.",
        },
        {
          prompt: "'The lanes were closed; we waited an hour.' is fixed with a…",
          options: ["semicolon", "comma only", "no punctuation", "question mark"],
          correctIndex: 0,
          explanation: "A semicolon correctly joins two closely related independent clauses.",
        },
        {
          prompt: "Making one clause dependent to fix a run-on is called…",
          options: ["subordination", "coordination", "fragmentation", "capitalization"],
          correctIndex: 0,
          explanation: "Subordination turns one clause into a dependent clause.",
        },
        {
          prompt: "'When a student works hard, you succeed.' shows a…",
          options: ["pronoun shift", "fragment", "fused sentence", "spelling error"],
          correctIndex: 0,
          explanation: "It shifts from 'a student' to 'you'; keep pronouns consistent.",
        },
        {
          prompt: "Which corrects the pronoun shift in 'When a student works hard, you succeed'?",
          options: ["When a student works hard, he or she succeeds.", "When you works hard, a student succeed.", "When a student works hard, they is succeeding.", "When students works hard, you succeeds."],
          correctIndex: 0,
          explanation: "Keep the pronoun consistent: 'a student … he or she succeeds.'",
        },
        {
          prompt: "Which word should be capitalized?",
          options: ["Monrovia", "city", "teacher", "month"],
          correctIndex: 0,
          explanation: "'Monrovia' is a proper noun and must be capitalized.",
        },
        {
          prompt: "Which is always capitalized?",
          options: ["the pronoun I", "the word she", "common nouns", "verbs"],
          correctIndex: 0,
          explanation: "The pronoun 'I' is always capitalized.",
        },
        {
          prompt: "Which of these should NOT be capitalized (mid-sentence)?",
          options: ["teacher", "Tuesday", "December", "Liberia"],
          correctIndex: 0,
          explanation: "'teacher' is a common noun; the others are proper nouns.",
        },
        {
          prompt: "'Dr.' and 'a.m.' are examples of…",
          options: ["abbreviations", "fragments", "conjunctions", "pronouns"],
          correctIndex: 0,
          explanation: "They are abbreviations — shortened forms of words.",
        },
        {
          prompt: "How can you fix the fragment 'Because the road was closed'?",
          options: ["attach an independent clause", "add a semicolon", "remove the subject", "capitalize 'because'"],
          correctIndex: 0,
          explanation: "e.g. 'Because the road was closed, we took another route.'",
        },
        {
          prompt: "'The bell rang the pupils rushed out.' is best fixed as…",
          options: ["The bell rang, and the pupils rushed out.", "The bell rang the pupils rushed out,", "The bell rang, the pupils rushed out.", "The bell, rang the pupils rushed out."],
          correctIndex: 0,
          explanation: "Add a comma + coordinating conjunction to join the two clauses.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Identify the error and correct it: 'The children were tired, they slept early.'",
          answerKey:
            "Error: comma splice (a comma alone joins two independent clauses). Fix any acceptable way, e.g. 'The children were tired, so they slept early.' / 'The children were tired; they slept early.' / two sentences. Award a mark for naming the error and a mark for a correct fix.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which group of words is a sentence fragment?",
          options: [
            "Although the sun was shining brightly.",
            "The sun was shining brightly.",
            "The sun shone and warmed the field.",
            "It was a bright day.",
          ],
          correctIndex: 0,
          answerKey: "It is a dependent clause that cannot stand alone, so it is a fragment.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List three different ways to fix a run-on sentence.",
          answerKey:
            "Any three of: use a full stop to make two sentences; use a semicolon; use a comma + coordinating conjunction (FANBOYS); use subordination to make one clause dependent. Award a mark per correct method.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Correct the errors of capitalization: 'my friend kollie travelled to monrovia on tuesday.'",
          answerKey:
            "'My friend Kollie travelled to Monrovia on Tuesday.' Capitalize the first word, the proper name 'Kollie', the place 'Monrovia', and the day 'Tuesday'. Award marks for the required capitals.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a sentence fragment and a run-on sentence are, and how each is corrected. Give your own example of each error together with its correction, and explain why proofreading for these faults matters.",
          answerKey:
            "A strong answer defines a fragment (an incomplete word group lacking a subject, verb or complete thought) and a run-on (independent clauses joined incorrectly — fused or comma splice); gives correct fixes (attach/complete the fragment; full stop, semicolon, comma + FANBOYS, or subordination for the run-on); illustrates each with an example and correction; and explains that these errors confuse the reader and weaken writing, so proofreading catches them. Award marks for both definitions, the fixes, correct examples, and the reason.",
          marks: 5,
        },
      ],
    },
  ],
};
