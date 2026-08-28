import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester Two, Period V: Grammar — Prepositions, Conjunctions, and
// Interjections. CONTENTS: (A) Prepositions — prepositions and the prepositional
// phrase; telling prepositions and adverbs apart; (B) Conjunctions —
// coordinating, correlative, subordinating; conjunctive adverbs; (C)
// Interjections (persuasion: advertisement). Taught here as three topics.
export const englishLanguageG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Prepositions, Conjunctions and Interjections",
  summary:
    "Period V of the MoE Grade 10 English syllabus. Learners use prepositions and prepositional phrases correctly and tell them from adverbs, identify coordinating, correlative and subordinating conjunctions, and recognise interjections that express feeling — applied in persuasive advertisement writing.",
  topics: [
    {
      // source: LibreTexts — Grammar Anatomy (Brehe), 1.07 Among the Prepositions (https://human.libretexts.org/Bookshelves/Composition/Grammar/Grammar_Anatomy_(Brehe)/01:_Chapters/1.07:_Among_the_Prepositions)
      slug: "prepositions",
      title: "Prepositions and Prepositional Phrases",
      objective:
        "By the end of the topic, learners should be able to identify prepositions and their objects, recognise the prepositional phrase, name the relationship a preposition shows, and tell a preposition from an adverb.",
      estimatedMinutes: 150,
      notes: `## What a preposition is

**Preposition** — a small word that connects a noun or pronoun — the **object of the preposition** — to another word in the sentence, showing a relationship such as **location, direction, time, cause, or possession**.

- *The book is **on** the table.* (location)
- *She walked **to** the market.* (direction)
- *We rested **after** the journey.* (time)
- *The gift is **for** you.* (possession/relationship)

Common prepositions: *in, on, at, by, of, to, up, for, from, with, about, above, below, behind, between, under, over, through, during, after, before, near, against, toward.*

## The prepositional phrase

**Prepositional phrase** — a **preposition + its object** (plus any words modifying the object). The preposition and its object always travel together.

- *under the **table*** = under (preposition) + the table (object).
- *to our **house*** ; *for your **birthday*** ; *among the **debris**.*

Structure: **preposition + (article/adjective) + noun/pronoun (object).** A preposition **must** be followed by an object; that is its defining feature.

\`\`\`svg A prepositional phrase and its parts
<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <text x="220" y="30" text-anchor="middle" font-size="15">The cat slept under the wooden table.</text>
  <rect x="150" y="48" width="220" height="30" rx="6" fill="#efe2cd" stroke="#c9a86e"/>
  <text x="260" y="68" text-anchor="middle" font-size="12.5">prepositional phrase</text>
  <g font-size="11.5" text-anchor="middle">
    <text x="172" y="100">under</text><text x="172" y="113" fill="#6a5a48">prep.</text>
    <text x="330" y="100">table</text><text x="330" y="113" fill="#6a5a48">object</text>
  </g>
</svg>
\`\`\`

## Telling prepositions from adverbs

Many words (up, down, in, out, on, off, over, by) can be **either** a preposition **or** an adverb. The test is simple: **a preposition has an object; the same word with no object is an adverb.**

| Sentence | Word | Object? | Part of speech |
| --- | --- | --- | --- |
| I drove **into** the garage. | into | yes (the garage) | preposition |
| I looked **up**. | up | no | adverb |
| He climbed **up** the hill. | up | yes (the hill) | preposition |
| The plane took **off**. | off | no | adverb |

If a noun or pronoun follows and completes the meaning, the word is a **preposition** heading a phrase; if nothing follows and the word simply modifies the verb, it is an **adverb**.

## Summary

- A preposition links its **object** to the rest of the sentence and shows a relationship.
- Preposition + object = a **prepositional phrase**.
- A word with an object is a **preposition**; the same word with no object is an **adverb**.`,
      workedExample: `**Task.** In each sentence find the prepositional phrase, name the preposition and its object; then in items 3–4 say whether the underlined word is a preposition or an adverb.

1. *The children played in the yard.*
2. *She sat between her two friends.*
3. *He ran **down** the street.*
4. *The engine broke **down**.*

**Answers**

1. Prepositional phrase: *in the yard*; preposition = **in**, object = **the yard** (shows location).
2. Prepositional phrase: *between her two friends*; preposition = **between**, object = **friends** (shows position).
3. **down** = **preposition** — it has an object (*the street*), forming the phrase *down the street*.
4. **down** = **adverb** — there is no object; it simply modifies the verb *broke*.

**Rule applied:** an object after the word makes it a preposition; no object makes it an adverb.`,
      quiz: [
        {
          prompt: "A preposition shows a relationship and connects its object to…",
          options: ["another word in the sentence", "nothing", "only the verb", "only an adjective"],
          correctIndex: 0,
          explanation: "A preposition links its object to another word, showing a relationship.",
        },
        {
          prompt: "The noun or pronoun after a preposition is called the…",
          options: ["object of the preposition", "subject", "complement", "modifier"],
          correctIndex: 0,
          explanation: "That noun/pronoun is the object of the preposition.",
        },
        {
          prompt: "A prepositional phrase is made of a preposition plus its…",
          options: ["object", "verb", "subject", "conjunction"],
          correctIndex: 0,
          explanation: "Preposition + object (and any modifiers) = prepositional phrase.",
        },
        {
          prompt: "Which is the preposition in 'The book is on the table'?",
          options: ["on", "book", "table", "is"],
          correctIndex: 0,
          explanation: "'on' shows the location relationship and takes the object 'table'.",
        },
        {
          prompt: "Which relationship does 'after' show in 'after the journey'?",
          options: ["time", "location", "possession", "direction"],
          correctIndex: 0,
          explanation: "'after' shows a relationship in time.",
        },
        {
          prompt: "Identify the prepositional phrase in 'She walked to the market.'",
          options: ["to the market", "She walked", "walked to", "the market"],
          correctIndex: 0,
          explanation: "'to the market' = preposition 'to' + object 'the market'.",
        },
        {
          prompt: "What defining feature must a preposition have?",
          options: ["an object", "a subject", "a tense", "a hyphen"],
          correctIndex: 0,
          explanation: "A preposition is always followed by an object.",
        },
        {
          prompt: "In 'I looked up', the word 'up' is a…",
          options: ["adverb", "preposition", "conjunction", "noun"],
          correctIndex: 0,
          explanation: "There is no object after 'up', so it is an adverb modifying 'looked'.",
        },
        {
          prompt: "In 'He climbed up the hill', 'up' is a…",
          options: ["preposition", "adverb", "conjunction", "adjective"],
          correctIndex: 0,
          explanation: "'up' has the object 'the hill', so it is a preposition.",
        },
        {
          prompt: "The test for preposition vs adverb is whether the word has…",
          options: ["an object", "a capital letter", "a hyphen", "a suffix"],
          correctIndex: 0,
          explanation: "Object present → preposition; no object → adverb.",
        },
        {
          prompt: "In 'The plane took off', 'off' is a…",
          options: ["adverb", "preposition", "noun", "conjunction"],
          correctIndex: 0,
          explanation: "No object follows 'off', so it is an adverb.",
        },
        {
          prompt: "Which of these is a preposition?",
          options: ["between", "quickly", "and", "wow"],
          correctIndex: 0,
          explanation: "'between' is a preposition; the others are an adverb, conjunction and interjection.",
        },
        {
          prompt: "Identify the object of the preposition: 'She sat under the tree.'",
          options: ["the tree", "she", "sat", "under"],
          correctIndex: 0,
          explanation: "'the tree' is the object of 'under'.",
        },
        {
          prompt: "Which sentence contains a prepositional phrase of direction?",
          options: ["He ran into the house.", "He ran quickly.", "He is tall.", "He and I left."],
          correctIndex: 0,
          explanation: "'into the house' shows direction with the object 'the house'.",
        },
        {
          prompt: "How many prepositional phrases are in 'The cat under the chair slept on the mat'?",
          options: ["two", "one", "three", "none"],
          correctIndex: 0,
          explanation: "'under the chair' and 'on the mat' are two prepositional phrases.",
        },
        {
          prompt: "Which word can be a preposition OR an adverb depending on the sentence?",
          options: ["over", "beautiful", "because", "run"],
          correctIndex: 0,
          explanation: "'over' can be a preposition (over the wall) or an adverb (fall over).",
        },
        {
          prompt: "In 'We rested during the storm', the preposition is…",
          options: ["during", "rested", "storm", "we"],
          correctIndex: 0,
          explanation: "'during' takes the object 'the storm' and shows time.",
        },
        {
          prompt: "A prepositional phrase never contains a…",
          options: ["main subject and verb of the sentence", "preposition", "object", "noun"],
          correctIndex: 0,
          explanation: "A prepositional phrase has no subject-verb pair; it is a phrase, not a clause.",
        },
        {
          prompt: "Which sentence uses 'by' as a preposition?",
          options: ["She sat by the window.", "Time passed by.", "Drop by later.", "He walked by."],
          correctIndex: 0,
          explanation: "'by the window' has the object 'the window', so 'by' is a preposition here.",
        },
        {
          prompt: "The relationship shown by 'for' in 'a gift for you' is…",
          options: ["possession / benefit", "time", "location", "cause"],
          correctIndex: 0,
          explanation: "'for you' shows who benefits — a relationship of possession/benefit.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Underline the prepositional phrase and name the preposition and its object: 'The keys are inside the drawer.'",
          answerKey:
            "Prepositional phrase: 'inside the drawer'; preposition = 'inside', object = 'the drawer'. Award a mark for the phrase, a mark for the preposition, a mark for the object.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In which sentence is 'in' an adverb (not a preposition)?",
          options: [
            "Please come in.",
            "She is in the room.",
            "Put it in the box.",
            "They live in Monrovia.",
          ],
          correctIndex: 0,
          answerKey: "'come in' has no object after 'in', so 'in' is an adverb; the others have objects.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write two sentences using the word 'over' — one where it is a preposition and one where it is an adverb. Underline 'over' in each.",
          answerKey:
            "Preposition: e.g. 'The ball flew over the fence.' (object 'the fence'). Adverb: e.g. 'The vase fell over.' (no object). Award 2 marks per correct, clearly-labelled sentence.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "List two prepositions of time and two of location.",
          answerKey:
            "Time: e.g. after, before, during, until. Location: e.g. on, under, between, near, above. Award a mark for each correct pair (2 marks total possible per category as guided).",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a preposition and a prepositional phrase are, and describe a reliable test for telling a preposition from an adverb. Give two example sentences that use the same word both ways.",
          answerKey:
            "A strong answer defines a preposition (links its object to another word, shows a relationship) and a prepositional phrase (preposition + object + modifiers), then gives the object test (object present = preposition; none = adverb) with one word shown both ways (e.g. 'up the hill' vs 'looked up'). Award marks for both definitions, the test, and the paired examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Coalinga College, College Writing and Beyond, 3.1.5 Conjunctions (https://human.libretexts.org/Courses/Coalinga_College/College_Writing_and_Beyond/03:_Part_III-_Grammar_and_Mechanics/3.01:_Parts_of_Speech/3.1.05:_Conjunctions)
      slug: "conjunctions",
      title: "Conjunctions: Coordinating, Correlative and Subordinating",
      objective:
        "By the end of the topic, learners should be able to identify coordinating, correlative and subordinating conjunctions, use each to join words or clauses of the right kind, and punctuate the joins correctly.",
      estimatedMinutes: 150,
      notes: `## What a conjunction is

**Conjunction** — a word that **joins** words, phrases, or clauses within a sentence. There are three main kinds: **coordinating, correlative,** and **subordinating.**

## Coordinating conjunctions (FANBOYS)

**Coordinating conjunctions** join **two or more equal** items (words, phrases, or whole sentences). The seven are remembered by **FANBOYS**: **for, and, nor, but, or, yet, so.**

Each shows a relationship:

| Conjunction | Relationship |
| --- | --- |
| for | reason / cause |
| and | addition |
| nor | joins two negatives |
| but | contrast |
| or | choice |
| yet | contrast |
| so | result / effect |

**Punctuation:** use a **comma before** a coordinating conjunction when it joins two complete sentences: *Each conflict is unique**, and** each requires its own assessment.* Use no comma when it joins two similar items: *rice **and** beans.*

## Correlative conjunctions

**Correlative conjunctions** work in **pairs** to join two elements of **equal weight**.

- *either… or* — *I will have **either** pasta **or** pizza.*
- *neither… nor* — *She likes **neither** tea **nor** coffee.*
- *not only… but (also)* — ***Not only** did he win, **but** he also broke the record.*
- *both… and* ; *whether… or* ; *just as… so.*

Keep the two joined parts **parallel** (same grammatical form): ✗ *She is not only clever but also works hard* → ✓ *She is **not only clever but also hard-working**.*

## Subordinating conjunctions

**Subordinating conjunctions** join a **dependent (subordinate) clause** to an **independent clause**, showing how they relate. Common ones: **after, although, as, as if, because, before, even though, if, once, in order that, rather than, since, so that, unless, until, when, while.**

- ***Although** I would rather party tonight, I will go to the library instead.*
- *We stayed inside **because** it was raining.*

**Punctuation:** put a **comma** when the dependent clause comes **first** (*Because it rained, we stayed in*); usually **no comma** when the independent clause comes first (*We stayed in because it rained*).

## Summary

| Kind | Joins | Examples |
| --- | --- | --- |
| Coordinating | equal items | for, and, nor, but, or, yet, so |
| Correlative | equal items, in pairs | either…or, neither…nor, not only…but also |
| Subordinating | dependent to independent clause | because, although, if, when, since, unless |`,
      workedExample: `**Task.** Name the kind of conjunction in bold and, where two clauses are joined, check the punctuation.

1. *The market was crowded**, so** we left early.*
2. ***Because** the road flooded, the bus was late.*
3. *You may have **either** rice **or** fufu.*

**Answers**

1. **so** — a **coordinating** conjunction (FANBOYS) showing result. It joins two complete sentences, so the **comma before** it is correct.
2. **Because** — a **subordinating** conjunction. Its dependent clause comes first, so a **comma** follows it before the independent clause — correct.
3. **either… or** — a **correlative** conjunction (a pair) joining two equal nouns, *rice* and *fufu*. The joined parts are parallel — correct.

**Rule applied:** coordinating joins equals (comma before when linking sentences); correlative uses matched pairs kept parallel; subordinating attaches a dependent clause (comma when it comes first).`,
      quiz: [
        {
          prompt: "A conjunction is a word that…",
          options: ["joins words, phrases or clauses", "names a person", "shows action", "expresses emotion"],
          correctIndex: 0,
          explanation: "Conjunctions join sentence elements.",
        },
        {
          prompt: "The acronym FANBOYS lists the…",
          options: ["coordinating conjunctions", "correlative conjunctions", "subordinating conjunctions", "prepositions"],
          correctIndex: 0,
          explanation: "For, And, Nor, But, Or, Yet, So — the coordinating conjunctions.",
        },
        {
          prompt: "Which is a coordinating conjunction?",
          options: ["but", "because", "although", "either…or"],
          correctIndex: 0,
          explanation: "'but' is one of the FANBOYS coordinating conjunctions.",
        },
        {
          prompt: "Coordinating conjunctions join items that are…",
          options: ["equal", "unequal", "always nouns", "always clauses"],
          correctIndex: 0,
          explanation: "They coordinate two or more equal (equivalent) items.",
        },
        {
          prompt: "The coordinating conjunction 'so' shows…",
          options: ["result", "contrast", "choice", "addition"],
          correctIndex: 0,
          explanation: "'so' signals an effect or result.",
        },
        {
          prompt: "When a coordinating conjunction joins two complete sentences, put a…",
          options: ["comma before it", "semicolon after it", "colon before it", "no punctuation"],
          correctIndex: 0,
          explanation: "Use a comma before FANBOYS joining two independent clauses.",
        },
        {
          prompt: "Correlative conjunctions always come in…",
          options: ["pairs", "threes", "single words", "clauses"],
          correctIndex: 0,
          explanation: "e.g. either…or, neither…nor, not only…but also.",
        },
        {
          prompt: "Which is a correlative conjunction pair?",
          options: ["neither…nor", "because", "and", "although"],
          correctIndex: 0,
          explanation: "'neither…nor' is a correlative pair.",
        },
        {
          prompt: "Complete the pair: 'not only… ___'",
          options: ["but also", "and then", "or else", "nor yet"],
          correctIndex: 0,
          explanation: "The pair is 'not only… but (also)'.",
        },
        {
          prompt: "Correlative conjunctions should join parts that are…",
          options: ["parallel in form", "different in form", "always plural", "always past tense"],
          correctIndex: 0,
          explanation: "The two joined elements should be grammatically parallel.",
        },
        {
          prompt: "A subordinating conjunction joins a dependent clause to an…",
          options: ["independent clause", "object", "adverb", "interjection"],
          correctIndex: 0,
          explanation: "It attaches a subordinate clause to a main clause.",
        },
        {
          prompt: "Which is a subordinating conjunction?",
          options: ["because", "and", "but", "either…or"],
          correctIndex: 0,
          explanation: "'because' introduces a dependent clause.",
        },
        {
          prompt: "Which sentence uses a subordinating conjunction?",
          options: ["We stayed in because it rained.", "Rice and beans are cheap.", "He is tall but shy.", "Either you or I must go."],
          correctIndex: 0,
          explanation: "'because it rained' is a dependent clause joined by a subordinating conjunction.",
        },
        {
          prompt: "When a dependent clause comes first, it is usually followed by a…",
          options: ["comma", "semicolon", "colon", "dash"],
          correctIndex: 0,
          explanation: "'Because it rained, we stayed in' — comma after the fronted dependent clause.",
        },
        {
          prompt: "Which sentence needs a comma before the conjunction?",
          options: [
            "The task was hard but we finished it.",
            "She likes rice and beans.",
            "We bought bread and milk.",
            "He is tired or hungry.",
          ],
          correctIndex: 0,
          explanation: "'but' joins two complete sentences, so a comma is needed before it.",
        },
        {
          prompt: "'although' is which kind of conjunction?",
          options: ["subordinating", "coordinating", "correlative", "conjunctive adverb"],
          correctIndex: 0,
          explanation: "'although' introduces a dependent clause, so it is subordinating.",
        },
        {
          prompt: "The coordinating conjunction 'nor' is used to join two…",
          options: ["negative ideas", "positive ideas", "questions", "commands"],
          correctIndex: 0,
          explanation: "'nor' links two negatives.",
        },
        {
          prompt: "Which pair is NOT correlative?",
          options: ["and…but", "both…and", "whether…or", "either…or"],
          correctIndex: 0,
          explanation: "'and…but' is not a correlative pair; the others are.",
        },
        {
          prompt: "Which sentence uses a coordinating conjunction to show contrast?",
          options: ["She studied hard, yet she failed.", "She studied hard, so she passed.", "She studied hard and passed.", "She studied because of the exam."],
          correctIndex: 0,
          explanation: "'yet' shows contrast between studying hard and failing.",
        },
        {
          prompt: "A subordinating conjunction shows the relationship between the two clauses, such as…",
          options: ["cause, time or condition", "spelling", "capitalisation", "number"],
          correctIndex: 0,
          explanation: "e.g. because (cause), when (time), unless (condition).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write three sentences, one using a coordinating conjunction, one a correlative pair, and one a subordinating conjunction. Underline the conjunction(s) in each.",
          answerKey:
            "Coordinating e.g. 'It was late, so we left.' Correlative e.g. 'Either you or I must go.' Subordinating e.g. 'We waited until the rain stopped.' Award a mark per correct, clearly-labelled sentence, plus a mark for correct punctuation across the three.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is punctuated correctly?",
          options: [
            "Although it was late, we kept working.",
            "Although it was late we kept working,",
            "Although, it was late we kept working.",
            "Although it was late; we kept working.",
          ],
          correctIndex: 0,
          answerKey: "The fronted dependent clause 'Although it was late' takes a comma after it.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Name the seven coordinating conjunctions (FANBOYS).",
          answerKey:
            "for, and, nor, but, or, yet, so. Award full marks for all seven correct; deduct proportionally for omissions.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Fix the parallelism in this correlative sentence: 'She is not only clever but also works hard.'",
          answerKey:
            "Expected: 'She is not only clever but also hard-working.' (both parts adjectives) or 'She not only is clever but also works hard.' The two parts joined by 'not only…but also' must be parallel. Award marks for restoring parallel form.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the three kinds of conjunctions with examples, and describe how each is punctuated when it joins clauses. State what makes coordinating and correlative conjunctions different from subordinating ones.",
          answerKey:
            "A strong answer defines coordinating (FANBOYS, join equals, comma before when linking sentences), correlative (pairs, keep parallel), and subordinating (attach a dependent clause, comma when fronted), each with a correct example. It notes that coordinating and correlative join equal elements while subordinating creates an unequal (main + dependent) relationship. Award marks for the three kinds, examples, and punctuation.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Coalinga College, College Writing and Beyond, 3.1.7 Interjections (https://human.libretexts.org/Courses/Coalinga_College/College_Writing_and_Beyond/03:_Part_III-_Grammar_and_Mechanics/3.01:_Parts_of_Speech/3.1.07:_Interjections)
      slug: "interjections",
      title: "Interjections",
      objective:
        "By the end of the topic, learners should be able to identify interjections, explain that they express feeling and function independently of a sentence, punctuate them correctly, and use them for effect in persuasive advertisement writing.",
      estimatedMinutes: 120,
      notes: `## What an interjection is

**Interjection** — a word or short group of words that expresses **feeling or emotion**. The name comes from Latin *inter* ("between") + *iacere* ("throw") — a word "thrown in between."

- An interjection can **stand alone**: *Ouch! Wow! Hurray!*
- Even inside a sentence, it is **grammatically independent** — it does not connect to the grammar of the rest of the sentence.

Common interjections: **oh, wow, hey, ow, ouch, ugh, oops, hurray, alas, well, yes, no, ah, oh no, shhh.** Some serve social functions: greetings (*hello, goodbye*), politeness (*please, thanks*), or agreement (*yes, sure, maybe*).

## Punctuation

The punctuation depends on the **strength of the emotion**:

- **Strong feeling → an exclamation mark:** *Hey! That barn is on fire!*
- **Milder feeling → a comma:** *Hey, I broke a nail.* / *Well, I suppose so.*

The interjection usually comes at the **start** of the sentence, set off from the rest.

## Register: where interjections belong

Interjections are common in **speech, dialogue, and informal writing**, but are usually **avoided in formal or academic writing**. They add a natural, emotional voice — useful in stories and, especially, in **advertisements**.

## Interjections in advertisement (persuasion)

Advertising uses interjections to grab attention and stir feeling:

- ***Wow!*** *Prices you won't believe!*
- ***Hurry!*** *Offer ends Friday.*
- ***Yes!*** *Now with double the flavour.*

Used sparingly, an interjection makes an advert lively and persuasive; overused, it feels like empty shouting.

## Summary

- An interjection expresses **emotion** and is **grammatically independent**.
- Punctuate with an **exclamation mark** (strong) or a **comma** (mild).
- Keep interjections out of **formal writing**, but use them for impact in **stories and adverts**.`,
      workedExample: `**Task.** Underline the interjection, state the feeling it expresses, and add the correct punctuation.

1. *Ouch that really hurt*
2. *Well I suppose we can wait*
3. *Hurray we won the match*

**Answers**

1. ***Ouch!*** *That really hurt.* — expresses **sudden pain**; strong feeling, so an **exclamation mark** after the interjection.
2. ***Well,*** *I suppose we can wait.* — expresses **mild hesitation**; a soft feeling, so a **comma** after the interjection.
3. ***Hurray!*** *We won the match.* — expresses **joy/celebration**; strong feeling, so an **exclamation mark**.

**Rule applied:** the interjection stands apart from the sentence grammar; strong emotion takes an exclamation mark, mild emotion a comma.`,
      quiz: [
        {
          prompt: "An interjection expresses…",
          options: ["feeling or emotion", "an action", "a place", "a comparison"],
          correctIndex: 0,
          explanation: "Interjections express emotion such as surprise, pain or joy.",
        },
        {
          prompt: "Grammatically, an interjection is…",
          options: ["independent of the sentence", "the subject", "the main verb", "an object"],
          correctIndex: 0,
          explanation: "It does not connect to the grammar of the rest of the sentence.",
        },
        {
          prompt: "Which word is an interjection?",
          options: ["Wow", "quickly", "because", "table"],
          correctIndex: 0,
          explanation: "'Wow' expresses emotion and stands alone.",
        },
        {
          prompt: "The word 'interjection' comes from Latin meaning…",
          options: ["thrown in between", "joined together", "placed before", "named after"],
          correctIndex: 0,
          explanation: "inter (between) + iacere (throw) = thrown in between.",
        },
        {
          prompt: "Strong emotion after an interjection is shown with…",
          options: ["an exclamation mark", "a comma", "a full stop", "a colon"],
          correctIndex: 0,
          explanation: "Strong feeling → exclamation mark: 'Hey! Fire!'",
        },
        {
          prompt: "Mild emotion after an interjection is shown with…",
          options: ["a comma", "an exclamation mark", "a semicolon", "a dash"],
          correctIndex: 0,
          explanation: "Milder feeling → comma: 'Well, I suppose so.'",
        },
        {
          prompt: "Where does an interjection usually appear?",
          options: ["at the start of a sentence", "always at the end", "in the middle of the verb", "inside a noun phrase"],
          correctIndex: 0,
          explanation: "It commonly opens the sentence, set off from the rest.",
        },
        {
          prompt: "Interjections are usually AVOIDED in…",
          options: ["formal or academic writing", "advertisements", "dialogue", "stories"],
          correctIndex: 0,
          explanation: "They suit informal writing and speech, not formal essays.",
        },
        {
          prompt: "Which sentence uses an interjection correctly for strong feeling?",
          options: ["Ouch! That hurt.", "Ouch. that hurt", "ouch that hurt", "Ouch that; hurt"],
          correctIndex: 0,
          explanation: "'Ouch!' with an exclamation mark shows the sudden pain.",
        },
        {
          prompt: "Which is NOT an interjection?",
          options: ["run", "wow", "oops", "alas"],
          correctIndex: 0,
          explanation: "'run' is a verb; the others express emotion.",
        },
        {
          prompt: "In 'Oh no! We missed the bus.', the interjection is…",
          options: ["Oh no", "We", "missed", "bus"],
          correctIndex: 0,
          explanation: "'Oh no' expresses dismay and stands apart from the sentence.",
        },
        {
          prompt: "Which feeling does 'Hurray!' express?",
          options: ["joy / celebration", "pain", "disgust", "boredom"],
          correctIndex: 0,
          explanation: "'Hurray!' celebrates or shows joy.",
        },
        {
          prompt: "Which feeling does 'Ugh!' express?",
          options: ["disgust", "delight", "surprise", "agreement"],
          correctIndex: 0,
          explanation: "'Ugh!' expresses disgust or dislike.",
        },
        {
          prompt: "Why are interjections useful in advertisements?",
          options: ["they grab attention and stir feeling", "they add facts", "they make text formal", "they list prices"],
          correctIndex: 0,
          explanation: "Adverts use interjections like 'Wow!' or 'Hurry!' to attract and persuade.",
        },
        {
          prompt: "Which advert line uses an interjection?",
          options: ["Wow! Half price today!", "Prices reduced today.", "Open until nine.", "Made in Liberia."],
          correctIndex: 0,
          explanation: "'Wow!' is an attention-grabbing interjection.",
        },
        {
          prompt: "An interjection that shows agreement is…",
          options: ["Yes!", "Ouch!", "Alas!", "Ugh!"],
          correctIndex: 0,
          explanation: "'Yes' can serve as an interjection of agreement.",
        },
        {
          prompt: "In 'Well, I am not sure.', the comma after 'Well' shows the feeling is…",
          options: ["mild", "very strong", "angry", "joyful"],
          correctIndex: 0,
          explanation: "A comma marks mild emotion or hesitation.",
        },
        {
          prompt: "Overusing interjections in an advert makes it feel…",
          options: ["like empty shouting", "more formal", "more factual", "longer"],
          correctIndex: 0,
          explanation: "Too many interjections lose their impact and feel like shouting.",
        },
        {
          prompt: "Which social-function word can act as an interjection?",
          options: ["Hello", "under", "and", "because"],
          correctIndex: 0,
          explanation: "Greetings like 'Hello' can function as interjections.",
        },
        {
          prompt: "An interjection followed by an exclamation mark is punctuated to show…",
          options: ["strong emotion", "a question", "a pause only", "a list"],
          correctIndex: 0,
          explanation: "The exclamation mark signals strong feeling.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write two sentences that begin with an interjection — one showing strong emotion and one showing mild emotion — and punctuate each correctly.",
          answerKey:
            "Strong: e.g. 'Wow! We won!' (exclamation mark). Mild: e.g. 'Well, I can wait.' (comma). Award 2 marks per correct, correctly-punctuated sentence.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which statement about interjections is true?",
          options: [
            "They are grammatically independent of the sentence.",
            "They are the main verb of the sentence.",
            "They must be capitalised in the middle of a sentence.",
            "They are required in academic essays.",
          ],
          correctIndex: 0,
          answerKey: "Interjections do not connect to the grammar of the rest of the sentence.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Add the correct punctuation and explain your choice: 'Ouch that pin is sharp.'",
          answerKey:
            "Expected: 'Ouch! That pin is sharp.' The exclamation mark shows strong, sudden feeling (pain). Award a mark for the punctuation and a mark for the explanation.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain why interjections are used in advertisements but avoided in formal essays.",
          answerKey:
            "Adverts use interjections (Wow!, Hurry!) to grab attention and stir feeling, making the message lively and persuasive; formal/academic writing needs an objective tone, so emotional interjections are out of place. Award marks for both points.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short advertisement (3–5 lines) for a product of your choice, using at least two interjections correctly punctuated. Then explain how each interjection helps persuade the reader.",
          answerKey:
            "Award marks for: at least two correctly-punctuated interjections (exclamation marks for strong feeling); a clear product and persuasive message; an explanation of how each interjection grabs attention or stirs feeling; and appropriate, not excessive, use. A strong answer shows the interjections working with, not overwhelming, the advert.",
          marks: 5,
        },
      ],
    },
  ],
};
