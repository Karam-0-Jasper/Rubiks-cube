import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 12,
// Semester One, Period III: GRAMMAR — Phrasal Verbs, Common Mistakes and Past
// WASSCE Papers. CONTENTS: (1) Review phrasal verbs; (2) Review common mistakes
// and troublesome (commonly confused) words; (3) Review past WASSCE papers
// (test-taking strategies, incl. tips for taking public tests); (4) Speech
// development / oral practice (speech delivery). Each CONTENTS item is one topic.
export const englishLanguageG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Phrasal Verbs, Confused Words, Exam Practice and Speech Delivery",
  summary:
    "Period III of the MoE Grade 12 English syllabus. Learners use phrasal verbs correctly, avoid common mistakes with troublesome words, apply test-taking strategies for past WASSCE papers and public examinations, and develop and deliver speeches through practice.",
  topics: [
    {
      // source: LibreTexts — ESOL 0382 Intermediate Grammar (Marceau), 8.2 Phrasal Verbs (https://human.libretexts.org/Courses/San_Jacinto_College/ESOL_0382_-_Intermediate_Grammar_(Marceau)/08:_Phrasal_Verbs_and_Prepositions/8.02:_Phrasal_Verbs)
      slug: "phrasal-verbs",
      title: "Review of Phrasal Verbs",
      objective:
        "By the end of the topic, learners should be able to recognise phrasal verbs, know their idiomatic meanings, and use separable and inseparable phrasal verbs correctly, especially with pronouns.",
      estimatedMinutes: 120,
      notes: `## What a phrasal verb is

A **phrasal verb** is a **verb + a particle** (a small word such as *up, off, on, out, down, in*) that together make **one idiomatic meaning** — a meaning you cannot always work out from the separate words.

- *put* + *off* = **put off** (to postpone/delay)
- *give* + *up* = **give up** (to quit)

## Particle, not preposition

The little word in a phrasal verb is called a **particle**. Although it looks like a preposition, in a phrasal verb it belongs to the verb and helps change its meaning.

## Separable phrasal verbs

**Separable** phrasal verbs can be kept together **or** split by the object.

- *I **looked up** the word.* (together)
- *I **looked** the word **up**.* (split by the noun object)

**Pronoun rule:** if the object is a **pronoun**, it **must** go **between** the verb and the particle:

- ✓ *Hyun-Ki **gave** it **up**.*  ✗ *Hyun-Ki gave up it.*
- ✓ *Please **turn** it **off**.*  ✗ *Please turn off it.*

Common separable phrasal verbs: **give up** (quit), **call off** (cancel), **drop off** (leave someone/something), **figure out** (solve), **put off** (postpone), **take off** (remove), **turn down** (refuse / lower), **fill out** (complete a form).

## Inseparable phrasal verbs

**Inseparable** phrasal verbs must stay **together**; the object always comes **after** the whole verb.

- ✓ *I **look after** my little brother.*  ✗ *I look my little brother after.*

Common inseparable phrasal verbs: **get over** (recover from), **look after** (take care of), **run into** (meet by chance), **turn into** (become), **pick on** (bully), **stand for** (represent), **put up with** (tolerate).

**Rule of thumb:** **three-word** phrasal verbs (*put up with, look forward to, keep up with*) are always **inseparable**.

## Summary

- Phrasal verb = **verb + particle** with **one idiomatic meaning**.
- **Separable:** the noun object may come before or after the particle, but a **pronoun** goes **between** verb and particle.
- **Inseparable:** keep the verb and particle together; three-word phrasal verbs are always inseparable.`,
      workedExample: `**Task.** Rewrite each sentence, replacing the underlined words with a phrasal verb, and place the pronoun correctly.

1. The head teacher decided to *cancel* the meeting. (Then use a pronoun for "the meeting".)
2. Please *complete* this form.
3. I must *take care of* my sister today.

**Answers**

1. *The head teacher decided to **call off** the meeting.* With a pronoun (separable): *The head teacher decided to **call** it **off**.* (not "call off it")
2. *Please **fill out** this form.* With a pronoun: *Please **fill** it **out**.*
3. *I must **look after** my sister today.* This is **inseparable**, so the object stays after the whole verb: *I must **look after** her* (not "look her after").

**Rule applied:** choose the phrasal verb by its meaning; with separable phrasal verbs a pronoun goes between the verb and the particle, while inseparable phrasal verbs keep the verb and particle together.`,
      quiz: [
        {
          prompt: "A phrasal verb is a verb plus a…",
          options: ["particle", "noun", "adjective", "subject"],
          correctIndex: 0,
          explanation: "Verb + particle forming one meaning.",
        },
        {
          prompt: "The meaning of a phrasal verb is usually…",
          options: ["idiomatic (not the sum of its parts)", "the same as the verb alone", "always literal", "a single noun"],
          correctIndex: 0,
          explanation: "The combined meaning is idiomatic.",
        },
        {
          prompt: "'Put off' means to…",
          options: ["postpone", "wear", "remove", "cancel forever"],
          correctIndex: 0,
          explanation: "put off = delay/postpone.",
        },
        {
          prompt: "'Give up' means to…",
          options: ["quit", "donate", "lift", "increase"],
          correctIndex: 0,
          explanation: "give up = stop trying / quit.",
        },
        {
          prompt: "The small word (up, off, on) in a phrasal verb is called a…",
          options: ["particle", "pronoun", "conjunction", "gerund"],
          correctIndex: 0,
          explanation: "It is a particle, not a plain preposition.",
        },
        {
          prompt: "A separable phrasal verb can be…",
          options: ["kept together or split by the object", "never split", "only used with pronouns", "written as one word"],
          correctIndex: 0,
          explanation: "The noun object can come before or after the particle.",
        },
        {
          prompt: "With a separable phrasal verb, a pronoun object must go…",
          options: ["between the verb and the particle", "after the particle", "before the verb", "at the end always"],
          correctIndex: 0,
          explanation: "e.g. 'turn it off', not 'turn off it'.",
        },
        {
          prompt: "Which is correct?",
          options: ["She gave it up.", "She gave up it.", "She up gave it.", "She it gave up."],
          correctIndex: 0,
          explanation: "A pronoun goes between the verb and particle.",
        },
        {
          prompt: "Which is correct?",
          options: ["Please turn it off.", "Please turn off it.", "Please off turn it.", "Please it turn off."],
          correctIndex: 0,
          explanation: "Pronoun 'it' goes between 'turn' and 'off'.",
        },
        {
          prompt: "'Call off' means to…",
          options: ["cancel", "telephone", "shout", "postpone"],
          correctIndex: 0,
          explanation: "call off = cancel.",
        },
        {
          prompt: "An inseparable phrasal verb must…",
          options: ["stay together with the object after it", "always be split", "drop its particle", "take no object"],
          correctIndex: 0,
          explanation: "The object comes after the whole verb.",
        },
        {
          prompt: "Which is correct?",
          options: ["I look after her.", "I look her after.", "I after look her.", "I look after she."],
          correctIndex: 0,
          explanation: "'look after' is inseparable; object comes after.",
        },
        {
          prompt: "'Look after' means to…",
          options: ["take care of", "search for", "follow", "look behind"],
          correctIndex: 0,
          explanation: "look after = take care of.",
        },
        {
          prompt: "'Run into' means to…",
          options: ["meet by chance", "jog", "escape", "enter slowly"],
          correctIndex: 0,
          explanation: "run into = meet unexpectedly.",
        },
        {
          prompt: "Three-word phrasal verbs (put up with) are…",
          options: ["always inseparable", "always separable", "not phrasal verbs", "prepositions"],
          correctIndex: 0,
          explanation: "Three-word phrasal verbs cannot be split.",
        },
        {
          prompt: "'Put up with' means to…",
          options: ["tolerate", "build", "raise", "share"],
          correctIndex: 0,
          explanation: "put up with = tolerate/endure.",
        },
        {
          prompt: "'Figure out' means to…",
          options: ["solve / understand", "draw", "count", "leave"],
          correctIndex: 0,
          explanation: "figure out = solve or work out.",
        },
        {
          prompt: "'Fill out' a form means to…",
          options: ["complete it", "tear it", "empty it", "fold it"],
          correctIndex: 0,
          explanation: "fill out = complete a form.",
        },
        {
          prompt: "Which sentence uses a separable phrasal verb correctly with a noun?",
          options: ["Turn down the radio.", "Turn the radio.", "Down turn the radio.", "Turn radio down the."],
          correctIndex: 0,
          explanation: "'turn down the radio' (or 'turn the radio down') is correct.",
        },
        {
          prompt: "'Get over' an illness means to…",
          options: ["recover from it", "jump it", "forget it", "worsen"],
          correctIndex: 0,
          explanation: "get over = recover from.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence places the pronoun correctly?",
          options: [
            "The teacher called it off.",
            "The teacher called off it.",
            "The teacher off called it.",
            "The teacher it called off.",
          ],
          correctIndex: 0,
          answerKey: "With a separable phrasal verb, the pronoun 'it' goes between the verb and particle.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give the meaning of these phrasal verbs: put off, give up, look after.",
          answerKey:
            "put off — postpone/delay; give up — quit/stop trying; look after — take care of. Award a mark each.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a separable and an inseparable phrasal verb, with an example of each.",
          answerKey:
            "Separable — the object can go before or after the particle, and a pronoun must go between the verb and particle (e.g. turn it off); inseparable — the verb and particle stay together and the object comes after (e.g. look after her). Award marks for the distinction and examples.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Correct the error: 'She looked up it in the dictionary.'",
          answerKey:
            "'She looked it up in the dictionary.' With the separable phrasal verb 'look up', the pronoun 'it' must go between the verb and the particle. Award a mark for the correction and a mark for the reason.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a phrasal verb is and how separable and inseparable phrasal verbs behave with objects and pronouns. Use at least four phrasal verbs of your own, with their meanings, in correct sentences.",
          answerKey:
            "A strong answer defines a phrasal verb (verb + particle with an idiomatic meaning); explains that separable verbs allow the noun before or after the particle but require a pronoun between verb and particle, while inseparable verbs keep verb and particle together with the object after; and uses at least four correct phrasal verbs with meanings. Award marks for the definition, the separable/inseparable rule, and the examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (McLean), 4.1 Commonly Confused Words (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(McLean)/4:_Working_with_Words_-_Which_Word_Is_Right/4.1:_Commonly_Confused_Words)
      slug: "common-mistakes-and-troublesome-words",
      title: "Common Mistakes and Troublesome (Commonly Confused) Words",
      objective:
        "By the end of the topic, learners should be able to tell apart words that are commonly confused and use the right one, and understand why spell-check will not catch these errors.",
      estimatedMinutes: 120,
      notes: `## Why these words cause trouble

Some words are **commonly confused** because they **sound alike, look alike, or have related meanings**. Because each one is a **correctly spelled word**, a **spell-checker will not catch** the mistake — only the writer, by knowing the meanings, can.

## The most troublesome pairs

| Words | Meaning / use | Example |
| --- | --- | --- |
| their / there / they're | their = belonging to them; there = a place; they're = they are | *They're leaving their bags there.* |
| your / you're | your = belonging to you; you're = you are | *You're late for your class.* |
| its / it's | its = belonging to it; it's = it is | *The dog wagged its tail. It's happy.* |
| to / too / two | to = towards / infinitive; too = also / very; two = the number 2 | *I went to see the two of them too.* |
| then / than | then = next / at that time; than = used in comparisons | *She is taller than I was then.* |
| accept / except | accept = to receive/agree; except = but / leaving out | *Everyone accepted the offer except me.* |
| affect / effect | affect = verb, to change; effect = noun, a result | *Rain affects crops; the effect is a good harvest.* |
| lose / loose | lose = to misplace / not win; loose = not tight | *Do not lose the loose button.* |
| principal / principle | principal = head of a school / main; principle = a rule or belief | *The principal explained the principle.* |
| quiet / quite | quiet = not noisy; quite = fairly / completely | *The quite large hall was quiet.* |

## Troublesome verb pairs

- **lie / lay:** *lie* (to recline — no object): *I lie down.* / *lay* (to put something down — takes an object): *I lay the book on the table.*
- **rise / raise:** *rise* (go up by itself): *The sun rises.* / *raise* (lift something): *Raise your hand.*

## How to avoid the mistakes

1. Learn the **meaning** of each word in the pair.
2. When you meet an apostrophe word (*it's, you're, they're*), test it by reading it as **two words** (*it is, you are, they are*). If that does not fit, use the possessive (*its, your, their*).
3. **Proofread by eye** — do not trust spell-check for these.

## Summary

- Commonly confused words share sound, look or meaning, and **spell-check misses them**.
- Learn each pair; test apostrophe words by expanding them (*it's = it is*).
- Watch the classic pairs: their/there/they're, your/you're, its/it's, to/too/two, then/than, accept/except, affect/effect, lose/loose.`,
      workedExample: `**Task.** Choose the correct word and give the reason.

1. *(Their / There / They're)* going to bring *(their / there / they're)* books over *(their / there / they're)*.
2. *The medicine did not (affect / effect) him, and the (affect / effect) wore off.*
3. *You should (accept / except) every gift (accept / except) that one.*

**Answers**

1. ***They're** going to bring **their** books over **there**.* — *they're* = they are; *their* = belonging to them; *there* = the place.
2. *The medicine did not **affect** him, and the **effect** wore off.* — *affect* is the verb (to change); *effect* is the noun (the result).
3. *You should **accept** every gift **except** that one.* — *accept* = receive; *except* = leaving out.

**Rule applied:** know the meaning of each word; test apostrophe forms by expanding them (*they're = they are*); remember affect = verb, effect = noun.`,
      quiz: [
        {
          prompt: "Commonly confused words are confused because they…",
          options: ["sound, look or mean something alike", "are all misspelled", "have no meaning", "are foreign words"],
          correctIndex: 0,
          explanation: "They share sound, spelling or meaning.",
        },
        {
          prompt: "Spell-check usually will NOT catch these errors because the words are…",
          options: ["all spelled correctly", "very long", "capitalised", "foreign"],
          correctIndex: 0,
          explanation: "They are real, correctly spelled words used wrongly.",
        },
        {
          prompt: "'They're' means…",
          options: ["they are", "belonging to them", "a place", "over there"],
          correctIndex: 0,
          explanation: "they're = they are (contraction).",
        },
        {
          prompt: "'Their' means…",
          options: ["belonging to them", "they are", "a place", "the number"],
          correctIndex: 0,
          explanation: "their shows possession.",
        },
        {
          prompt: "'There' refers to…",
          options: ["a place", "they are", "possession", "the number two"],
          correctIndex: 0,
          explanation: "there = a location.",
        },
        {
          prompt: "'You're' means…",
          options: ["you are", "belonging to you", "a place", "yours"],
          correctIndex: 0,
          explanation: "you're = you are.",
        },
        {
          prompt: "'Its' (no apostrophe) shows…",
          options: ["possession", "it is", "a place", "a plural"],
          correctIndex: 0,
          explanation: "its = belonging to it; it's = it is.",
        },
        {
          prompt: "Which is correct?",
          options: ["It's raining, and the cat licked its paw.", "Its raining, and the cat licked it's paw.", "Its raining, and the cat licked its paw.", "It's raining, and the cat licked it's paw."],
          correctIndex: 0,
          explanation: "it's = it is; its = possessive.",
        },
        {
          prompt: "'Too' means…",
          options: ["also / very", "towards", "the number 2", "then"],
          correctIndex: 0,
          explanation: "too = also or very.",
        },
        {
          prompt: "'Than' is used for…",
          options: ["comparisons", "time (next)", "a place", "possession"],
          correctIndex: 0,
          explanation: "than compares; then = next/at that time.",
        },
        {
          prompt: "Choose correctly: 'She is taller ___ her brother.'",
          options: ["than", "then", "that", "there"],
          correctIndex: 0,
          explanation: "Comparison → 'than'.",
        },
        {
          prompt: "'Accept' means…",
          options: ["to receive or agree", "to leave out", "but", "except"],
          correctIndex: 0,
          explanation: "accept = receive; except = leaving out.",
        },
        {
          prompt: "'Except' means…",
          options: ["leaving out / but", "to receive", "to agree", "to change"],
          correctIndex: 0,
          explanation: "except = not including.",
        },
        {
          prompt: "'Affect' is usually a…",
          options: ["verb (to change)", "noun (a result)", "adjective", "preposition"],
          correctIndex: 0,
          explanation: "affect = verb; effect = noun.",
        },
        {
          prompt: "'Effect' is usually a…",
          options: ["noun (a result)", "verb (to change)", "adjective", "adverb"],
          correctIndex: 0,
          explanation: "effect = the result.",
        },
        {
          prompt: "'Loose' means…",
          options: ["not tight", "to misplace", "to fail", "a knot"],
          correctIndex: 0,
          explanation: "loose = not tight; lose = misplace/not win.",
        },
        {
          prompt: "Choose correctly: 'Don't ___ your ticket.'",
          options: ["lose", "loose", "loss", "loosen"],
          correctIndex: 0,
          explanation: "lose = to misplace.",
        },
        {
          prompt: "The head of a school is the…",
          options: ["principal", "principle", "principel", "principality"],
          correctIndex: 0,
          explanation: "principal = head / main; principle = a rule.",
        },
        {
          prompt: "A rule or belief is a…",
          options: ["principle", "principal", "principals", "principle's"],
          correctIndex: 0,
          explanation: "principle = a basic truth or rule.",
        },
        {
          prompt: "The best way to check an apostrophe word like 'you're' is to…",
          options: ["expand it to two words (you are)", "run spell-check", "ignore it", "capitalise it"],
          correctIndex: 0,
          explanation: "If 'you are' fits, use you're; otherwise use your.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is correct?",
          options: [
            "You're going to lose your ticket if it's loose.",
            "Your going to loose you're ticket if its loose.",
            "You're going to loose your ticket if its lose.",
            "Your going to lose you're ticket if it's loose.",
          ],
          correctIndex: 0,
          answerKey: "you're = you are; lose = misplace; your = possessive; it's = it is; loose = not tight.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between 'affect' and 'effect' with an example of each.",
          answerKey:
            "affect is a verb meaning to change/influence (e.g. Rain affects crops); effect is a noun meaning a result (e.g. The effect was a good harvest). Award a mark for each correctly explained with an example.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why can't a spell-checker catch commonly confused words? Give one strategy to avoid the errors.",
          answerKey:
            "Because each word is correctly spelled — the checker only flags misspellings, not wrong word choice. Strategy: learn the meanings, or expand apostrophe words (it's = it is) to test them, and proofread by eye. Award a mark for the reason and a mark for a strategy.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Choose the correct words: 'The (principal/principle) told the students that honesty is an important (principal/principle).'",
          answerKey:
            "'The principal told the students that honesty is an important principle.' principal = head of school; principle = a rule/belief. Award a mark per correct choice.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Choose four pairs of commonly confused words. For each pair, explain the meaning of each word and use it correctly in a sentence. Then explain why proofreading matters more than spell-check for these words.",
          answerKey:
            "Award marks for: four correctly explained pairs (e.g. their/there/they're, your/you're, to/too/two, then/than, accept/except, affect/effect, lose/loose, principal/principle) each used correctly; and an explanation that these are all real, correctly spelled words that spell-check cannot flag, so the writer must proofread by meaning.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — OpenNow College Success (Cengage), 9.2 Test-Taking Strategies (https://socialsci.libretexts.org/Bookshelves/Counseling_and_Guidance/OpenNow_College_Success_(Cengage)/09:_Developing_Learning_Strategies/9.02:_Test-Taking_Strategies)
      slug: "reviewing-past-wassce-papers",
      title: "Reviewing Past WASSCE Papers: Test-Taking Strategies",
      objective:
        "By the end of the topic, learners should be able to prepare for and work through a public examination such as the WASSCE, using sound strategies for multiple-choice and essay questions and managing their time.",
      estimatedMinutes: 120,
      notes: `## Why review past papers

Working through **past WASSCE papers** shows the **types of questions**, their **wording** and their **mark values**, so learners know what to expect and can practise the skills the examination tests. Good performance depends on **preparation**, **strategy** and **time management**, not luck.

## Before the test

- **Study steadily** over time; do not cram the night before.
- **Know the format:** how many sections, question types (objective/multiple-choice, comprehension, essay), and the marks for each.
- Bring the **right materials** and arrive early and calm.

## When you start: scan first

**Scan the whole paper first** to see how many items there are, what **types** they are, and the **point value** of each. Then plan a **time schedule** — essay questions need more time than multiple-choice or matching, so give time in proportion to the **marks**.

## Multiple-choice (objective) questions

1. **Read the stem carefully** and try to answer it **in your head before** looking at the options.
2. Read **all** the options; **eliminate** those that are clearly wrong first.
3. Pick the option that matches your answer, then check that **none of the others is better**.
4. If you must **guess**, avoid extreme words like **always** or **never**; safer choices often use **usually** or **sometimes**.
5. **Answer every question** if there is no penalty for wrong answers; do not leave blanks.

## Essay / composition questions

1. Read the **question and the instructions** first, and **underline the key words** (the task words: *discuss, explain, compare, describe*).
2. **Plan your time** and **outline** your answer before writing, so you do not leave out key points.
3. Write a clear **introduction, body and conclusion**; support your points and keep to the point.
4. Leave a few minutes to **proofread** for grammar, spelling and clarity.

## After answering

- **Review** your paper: check you answered every part, transferred answers correctly, and did not misread any question.

## Summary

- Past papers reveal the **format, wording and marks** — practise them.
- **Scan first**, then budget time by the **marks**.
- Multiple-choice: answer in your head, eliminate wrong options, avoid *always/never* when guessing.
- Essays: read the task words, **outline first**, write intro-body-conclusion, and proofread.`,
      workedExample: `**Task.** A WASSCE English paper has an objective section (50 marks, 50 questions) and an essay section (50 marks, choose one essay) in 2 hours. Plan an approach.

**Step 1 — scan and budget time.** The two sections carry equal marks, so split the time roughly equally: about **50 minutes** for the objective section, **60 minutes** for the essay, and **10 minutes** to review.

**Step 2 — objective section.** For each item, cover the options, read the stem, answer in your head, then uncover and pick the matching option; eliminate clearly wrong choices; when unsure, avoid options with *always/never* and make a sensible guess (no blanks). About one minute per question keeps you on schedule.

**Step 3 — essay section.** Read all the titles; underline the task word (e.g. *discuss*, *describe*). Spend about 5 minutes **outlining** an introduction, three body points and a conclusion; write for about 50 minutes; then **proofread** for grammar and spelling.

**Step 4 — review.** In the last 10 minutes, check every question is answered and nothing was misread.

**Why it works:** it budgets time by the marks, uses the correct strategy for each question type, and leaves time to proofread and review — exactly what past-paper practice builds.`,
      quiz: [
        {
          prompt: "Reviewing past papers mainly helps learners know the…",
          options: ["question types, wording and mark values", "examiners' names", "weather on exam day", "seating plan"],
          correctIndex: 0,
          explanation: "Past papers reveal format, wording and marks.",
        },
        {
          prompt: "The best way to prepare for a test is to…",
          options: ["study steadily over time", "cram the night before", "skip revision", "rely on luck"],
          correctIndex: 0,
          explanation: "Spaced study beats cramming.",
        },
        {
          prompt: "The first thing to do when you receive the paper is to…",
          options: ["scan the whole paper", "start writing immediately", "answer the last question", "leave the room"],
          correctIndex: 0,
          explanation: "Scan for number, types and marks of questions.",
        },
        {
          prompt: "You should budget your time according to the…",
          options: ["marks each question carries", "order of questions only", "colour of the paper", "number of options"],
          correctIndex: 0,
          explanation: "Give more time to higher-mark questions.",
        },
        {
          prompt: "Essay questions usually need ___ time than multiple-choice.",
          options: ["more", "less", "the same", "no"],
          correctIndex: 0,
          explanation: "Essays require planning and writing time.",
        },
        {
          prompt: "For a multiple-choice question, first try to…",
          options: ["answer it in your head before reading options", "read the last option first", "guess at random", "skip the stem"],
          correctIndex: 0,
          explanation: "Answer mentally, then match an option.",
        },
        {
          prompt: "A good multiple-choice strategy is to…",
          options: ["eliminate clearly wrong options first", "pick the longest option", "always pick 'C'", "never read all options"],
          correctIndex: 0,
          explanation: "Eliminating wrong options improves your odds.",
        },
        {
          prompt: "When guessing, avoid options with extreme words such as…",
          options: ["always / never", "usually / sometimes", "often", "many"],
          correctIndex: 0,
          explanation: "Extreme words are more often wrong.",
        },
        {
          prompt: "When guessing, safer choices often contain words like…",
          options: ["usually / sometimes", "always / never", "all / none", "must / cannot"],
          correctIndex: 0,
          explanation: "Qualified words are usually safer.",
        },
        {
          prompt: "If there is no penalty for wrong answers, you should…",
          options: ["answer every question", "leave hard ones blank", "answer only the easy half", "guess only the first ten"],
          correctIndex: 0,
          explanation: "Never leave blanks when there is no penalty.",
        },
        {
          prompt: "Before writing an essay answer, you should read the question and…",
          options: ["underline the key task words", "count the lines", "copy the question", "write the conclusion first"],
          correctIndex: 0,
          explanation: "Task words (discuss, explain) tell you what to do.",
        },
        {
          prompt: "Task words like 'discuss' or 'compare' tell you…",
          options: ["what the examiner expects you to do", "how many marks there are", "the time limit", "the page number"],
          correctIndex: 0,
          explanation: "They describe the expected response.",
        },
        {
          prompt: "Before writing, making a quick outline helps you…",
          options: ["not leave out key points", "waste time", "write less", "avoid the topic"],
          correctIndex: 0,
          explanation: "An outline organises the answer.",
        },
        {
          prompt: "A good essay answer has an introduction, a body and a…",
          options: ["conclusion", "bibliography", "title page", "diagram"],
          correctIndex: 0,
          explanation: "Structure the answer clearly.",
        },
        {
          prompt: "Leaving a few minutes at the end lets you…",
          options: ["proofread and review", "start a new essay", "rest", "leave early"],
          correctIndex: 0,
          explanation: "Proofreading catches errors and missed parts.",
        },
        {
          prompt: "Scanning the test first gives you the 'big picture' of…",
          options: ["how many items and their types and values", "the answers", "the examiner's mood", "the marking scheme secretly"],
          correctIndex: 0,
          explanation: "You see the layout and can plan.",
        },
        {
          prompt: "Cramming the night before a test is…",
          options: ["a poor strategy", "the best strategy", "required", "the only option"],
          correctIndex: 0,
          explanation: "Steady study is far better than cramming.",
        },
        {
          prompt: "In the objective section, one useful trick is to cover the options while you…",
          options: ["read the stem and decide your answer", "sleep", "copy a neighbour", "skip ahead"],
          correctIndex: 0,
          explanation: "Decide first, then uncover and match.",
        },
        {
          prompt: "Reviewing your paper at the end helps you check that you…",
          options: ["answered every part and did not misread", "used a pen", "wrote your name only", "finished first"],
          correctIndex: 0,
          explanation: "Catch missed or misread questions.",
        },
        {
          prompt: "Success in a public exam depends mainly on…",
          options: ["preparation, strategy and time management", "luck", "the paper colour", "the room number"],
          correctIndex: 0,
          explanation: "Preparation and strategy, not luck.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State two things you should do as soon as you receive an examination paper.",
          answerKey:
            "Scan the whole paper to see the number, types and mark values of questions; plan a time schedule that gives more time to higher-mark/essay questions. Award a mark each.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the best strategy for a multiple-choice question you are unsure about?",
          options: [
            "Eliminate clearly wrong options, then choose the best remaining answer",
            "Always choose the longest option",
            "Leave it blank even with no penalty",
            "Pick an option with the word 'never'",
          ],
          correctIndex: 0,
          answerKey: "Eliminating wrong options and choosing the best remaining answer is the sound strategy; extremes like 'never' are risky and blanks lose marks.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List three steps for answering an essay question well.",
          answerKey:
            "Any three of: read the question and underline the key task words; plan time and outline before writing; write a clear introduction, body and conclusion with support; proofread at the end. Award a mark each.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why should you budget exam time according to marks rather than question order?",
          answerKey:
            "Because higher-mark questions (especially essays) deserve more time; spending equal time regardless of marks risks losing easy marks or rushing the big questions. Award marks for the reasoning.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how you would prepare for and work through a WASSCE English paper. Cover preparation before the exam, scanning and time management, strategies for the objective section, strategies for the essay section, and reviewing at the end.",
          answerKey:
            "A strong answer covers: steady preparation and knowing the format; scanning first and budgeting time by marks; objective strategies (answer in your head, eliminate wrong options, avoid always/never, answer every item); essay strategies (read task words, outline, intro-body-conclusion, proofread); and reviewing the paper at the end. Award marks across these stages.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Public Speaking (Lumen Learning), 08 Delivering Your Speech / 8.13 Rehearsing Your Speech (https://socialsci.libretexts.org/Bookshelves/Communication/Public_Speaking/Public_Speaking_(Lumen_Learning)/08:_Delivering_Your_Speech)
      slug: "speech-development-oral-practice",
      title: "Speech Development and Oral Practice: Delivery",
      objective:
        "By the end of the topic, learners should be able to rehearse a speech effectively and deliver it with good use of the voice (vocalics), eye contact and body language.",
      estimatedMinutes: 120,
      notes: `## From writing to speaking

A well-written speech still has to be **delivered**. Good delivery combines a little **formality** with the best of good conversation — **directness, spontaneity, animation** and lively **vocal and facial expression**. Delivery is built by **practice**.

## Using the voice (vocalics)

**Vocalics** (also called **paralanguage**) is how you use your **voice** to carry meaning. Six vocal elements to control:

| Element | Meaning | Aim |
| --- | --- | --- |
| Volume | loudness | loud enough for all to hear |
| Pitch | how high or low | vary it; avoid a flat monotone |
| Rate | speed of speaking | not too fast; slow for key points |
| Pauses | silences | pause for emphasis and breath |
| Vocal variety | changes in the above | keeps the audience interested |
| Pronunciation | saying words correctly | clear and correct |

## Body language (nonverbal delivery)

- **Eye contact** — look at the audience; it holds their interest and builds the speaker's **credibility**. With rehearsal you glance at notes only occasionally.
- **Gestures and facial expression** — natural movements and a lively face support the words. Practise them in a **mirror** or by **recording** yourself.
- **Posture** — stand upright and confident.

## Rehearsing (oral practice)

1. **Practise aloud**, not just in your head — practise the **words and the nonverbal delivery** together.
2. Use a **mirror or a recording** to review facial expression and gestures and adjust them.
3. **Time** your rehearsal with a stopwatch — check each part and the whole speech fit the time limit.
4. Rehearse in front of a **few friends** to build the habit of eye contact while glancing at notes.
5. Rehearse **all** parts, including any visual aids, until the speech is smooth.

## Summary

- Delivery = **voice + body language**, built by **practice**.
- Control the **six vocalics** (volume, pitch, rate, pauses, variety, pronunciation).
- Use **eye contact**, natural **gestures** and good **posture**.
- **Rehearse aloud**, use a mirror/recording, **time** it, and practise before others.`,
      workedExample: `**Task.** A learner will give a 3-minute speech but reads it in a fast monotone with eyes down. Give a rehearsal plan to improve the delivery.

**Plan**
1. **Practise aloud** three times, marking the script where to **pause** and which words to stress.
2. **Slow the rate** and add **vocal variety** — raise the pitch on questions, drop it to close a point; pause after the thesis.
3. **Eye contact:** rehearse in front of two friends, glancing at notes only occasionally, so the eyes stay up.
4. **Record** one run and watch it back; fix a flat face by adding natural **gestures** and expression.
5. **Time** the speech with a stopwatch; trim or expand to hit 3 minutes.

**Result:** the same words now reach the audience because the voice varies, the pace is right, and the eyes and gestures connect — the improvement came from **oral practice**, not from rewriting the speech.`,
      quiz: [
        {
          prompt: "Good delivery is built mainly through…",
          options: ["practice", "luck", "reading faster", "a longer script"],
          correctIndex: 0,
          explanation: "Rehearsal produces smooth delivery.",
        },
        {
          prompt: "The use of the voice to carry meaning is called…",
          options: ["vocalics (paralanguage)", "posture", "diction", "syntax"],
          correctIndex: 0,
          explanation: "Vocalics = how we use the voice.",
        },
        {
          prompt: "Which is a vocalic element?",
          options: ["volume", "eye contact", "posture", "gesture"],
          correctIndex: 0,
          explanation: "Volume is a vocal element; the others are nonverbal.",
        },
        {
          prompt: "'Pitch' refers to how ___ the voice is.",
          options: ["high or low", "loud or soft", "fast or slow", "clear or unclear"],
          correctIndex: 0,
          explanation: "Pitch = highness/lowness of the voice.",
        },
        {
          prompt: "Speaking too fast is a problem of…",
          options: ["rate", "pitch", "pronunciation", "volume"],
          correctIndex: 0,
          explanation: "Rate = speed of speaking.",
        },
        {
          prompt: "A short silence used for emphasis is a…",
          options: ["pause", "monotone", "gesture", "stanza"],
          correctIndex: 0,
          explanation: "Pauses add emphasis and let the speaker breathe.",
        },
        {
          prompt: "Speaking in a flat, unchanging tone is called a…",
          options: ["monotone", "vocal variety", "pause", "projection"],
          correctIndex: 0,
          explanation: "A monotone bores the audience; vary the voice.",
        },
        {
          prompt: "Changing volume, pitch and rate to stay interesting is called…",
          options: ["vocal variety", "monotone", "pronunciation", "posture"],
          correctIndex: 0,
          explanation: "Vocal variety keeps the audience engaged.",
        },
        {
          prompt: "Looking at the audience is called…",
          options: ["eye contact", "gesture", "posture", "projection"],
          correctIndex: 0,
          explanation: "Eye contact holds interest and builds credibility.",
        },
        {
          prompt: "Eye contact helps build the speaker's…",
          options: ["credibility", "vocabulary", "grammar", "handwriting"],
          correctIndex: 0,
          explanation: "It makes the speaker seem more trustworthy.",
        },
        {
          prompt: "Hand and body movements that support the words are…",
          options: ["gestures", "pauses", "pitch", "rate"],
          correctIndex: 0,
          explanation: "Gestures reinforce the message.",
        },
        {
          prompt: "A good way to review your gestures and expression is to…",
          options: ["use a mirror or recording", "close your eyes", "read silently", "speak faster"],
          correctIndex: 0,
          explanation: "A mirror or recording shows your nonverbal delivery.",
        },
        {
          prompt: "You should practise a speech…",
          options: ["aloud", "only in your head", "once, silently", "while asleep"],
          correctIndex: 0,
          explanation: "Practise aloud, words and delivery together.",
        },
        {
          prompt: "Timing your rehearsal with a stopwatch helps you…",
          options: ["fit the time limit", "speak louder", "memorise faster", "avoid gestures"],
          correctIndex: 0,
          explanation: "Timing keeps the speech within limits.",
        },
        {
          prompt: "Rehearsing in front of a few friends helps you practise…",
          options: ["eye contact while glancing at notes", "spelling", "the bibliography", "silent reading"],
          correctIndex: 0,
          explanation: "It builds the habit of looking up at the audience.",
        },
        {
          prompt: "Standing upright and confident is good…",
          options: ["posture", "pitch", "rate", "diction"],
          correctIndex: 0,
          explanation: "Posture is part of nonverbal delivery.",
        },
        {
          prompt: "Most audiences prefer delivery that mixes some formality with the best of…",
          options: ["good conversation", "silent reading", "shouting", "monotone"],
          correctIndex: 0,
          explanation: "Directness, animation and expressiveness of good conversation.",
        },
        {
          prompt: "Saying words correctly is a matter of…",
          options: ["pronunciation", "posture", "gesture", "rate"],
          correctIndex: 0,
          explanation: "Pronunciation is a vocalic element.",
        },
        {
          prompt: "With enough rehearsal, a speaker looks at the notes…",
          options: ["only occasionally", "constantly", "never at all", "the whole time"],
          correctIndex: 0,
          explanation: "Good preparation frees the eyes for the audience.",
        },
        {
          prompt: "Volume should be…",
          options: ["loud enough for everyone to hear", "as soft as possible", "always shouting", "unimportant"],
          correctIndex: 0,
          explanation: "Project so the whole room can hear.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name three of the six vocalic elements a speaker should control.",
          answerKey:
            "Any three of: volume, pitch, rate, pauses, vocal variety, pronunciation. Award a mark each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is a nonverbal (not vocal) part of delivery?",
          options: [
            "Eye contact",
            "Volume",
            "Pitch",
            "Pronunciation",
          ],
          correctIndex: 0,
          answerKey: "Eye contact is nonverbal; the others are vocalic elements.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two things a speaker should do when rehearsing a speech.",
          answerKey:
            "Any two of: practise aloud (words and nonverbal delivery together); use a mirror or recording to review gestures/expression; time the speech with a stopwatch; rehearse in front of a few friends to practise eye contact. Award a mark each.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why is eye contact important in a speech?",
          answerKey:
            "It captures and holds the audience's interest and builds the speaker's credibility. Award marks for these points.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how a speaker can deliver a speech well. Cover the use of the voice (vocalics), body language (eye contact, gestures, posture), and how to rehearse. Give practical advice a classmate could follow.",
          answerKey:
            "A strong answer explains the six vocalics (volume, pitch, rate, pauses, variety, pronunciation) and the need to avoid a monotone; covers eye contact (builds interest/credibility), natural gestures and good posture; and describes rehearsal (practise aloud, use a mirror/recording, time it, practise before others). Award marks for voice, body language and rehearsal advice.",
          marks: 5,
        },
      ],
    },
  ],
};
