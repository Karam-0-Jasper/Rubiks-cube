import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester Two, Period V: Grammar — Prepositions, Conjunctions and
// Interjections.
export const englishLanguageG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Prepositions, Conjunctions and Interjections",
  summary:
    "Period V of the MoE Grade 10 English syllabus. Learners identify and use prepositions and the phrases they begin, join ideas correctly with coordinating and subordinating conjunctions, and recognise interjections — completing their study of the parts of speech.",
  topics: [
    {
      slug: "prepositions",
      title: "Prepositions and Prepositional Phrases",
      objective:
        "By the end of the topic, learners should be able to identify prepositions, name their common types, form prepositional phrases, and use prepositions correctly in sentences.",
      estimatedMinutes: 150,
      notes: `## What a preposition does

A **preposition** is a small but powerful word that shows the **relationship** between a noun (or pronoun) and another word in the sentence — most often a relationship of **position, direction, time** or manner. Think of two things — a cat and a table — and the preposition is the word that tells you how they stand to each other: the cat is *on*, *under*, *beside*, *near* or *behind* the table.

- **Position:** *The book is **on** the table.*
- **Direction:** *She walked **to** the market.*
- **Time:** *We met **after** lunch.*

The noun or pronoun that comes after the preposition is called its **object**. Because it is an object, a pronoun after a preposition must be in the **object form**: *between you and **me*** (not *I*), *for **him** and **her***.

## Common prepositions, grouped

| Relationship | Prepositions |
| --- | --- |
| Place / position | in, on, under, over, above, below, between, beside, near, behind, in front of |
| Direction / movement | to, into, onto, from, towards, across, through, along, up, down |
| Time | at, on, in, before, after, during, until, since, by, for |
| Others | of, for, with, without, by, about, against, like |

Some prepositions are made of more than one word — **compound prepositions**: *in front of, according to, because of, instead of, in spite of, next to*.

## Prepositional phrases

A **prepositional phrase** begins with a preposition and ends with its object, together with any words that describe that object:

> **preposition + (describing words) + object**
> *under the old wooden table* · *after the long meeting* · *because of the heavy rain*

A prepositional phrase does one of two jobs in the sentence:

- as an **adjective phrase**, describing a noun: *the girl **in the blue dress*** (which girl?);
- as an **adverb phrase**, describing a verb: *She waited **at the gate*** (waited where?).

## Using prepositions correctly

Prepositions are the hardest words in English to use, because their choice is often fixed by custom rather than logic.

- **at / on / in for TIME** (smallest to largest): **at** a clock time (*at 6 o'clock*), **on** a day or date (*on Monday, on 26 July*), **in** a longer period (*in June, in 2026, in the morning*).
- **at / on / in for PLACE:** **at** a point (*at the door*), **on** a surface (*on the wall*), **in** an enclosed space (*in the room*).
- **between / among:** use **between** for **two** and **among** for **more than two** — *share it **between** the two of you; **among** the whole class*.
- **Verbs with fixed prepositions:** many verbs demand a particular preposition — *depend **on**, listen **to**, arrive **at/in**, agree **with** a person / **to** a plan, good **at**, afraid **of**, interested **in**.* These must be learned as pairs.
- **Avoid unnecessary prepositions:** ✗ *Where are you **at**?* → ✓ *Where are you?*

## A note on ending sentences

You may have been told that a sentence should never end with a preposition. In natural English it often does — *What are you looking **for**? Who did you go **with**?* — and there is nothing wrong with it. What matters is that the preposition is the **right** one, not where it sits.`,
      workedExample: `**Task.** In each sentence, identify the preposition and its object, and name what relationship it shows (place, direction or time).

1. *The cat slept **under** the bed.*
2. *They travelled **to** Ganta.*
3. *The class ends **at** noon.*

**Answers**

1. **under** — object: **the bed**. It shows **position/place** (where the cat slept). The prepositional phrase is *under the bed*.

2. **to** — object: **Ganta**. It shows **direction/movement** (where they travelled). The prepositional phrase is *to Ganta*.

3. **at** — object: **noon**. It shows **time** (when the class ends). The prepositional phrase is *at noon*.

**Key idea:** a preposition links its object to the rest of the sentence and shows a relationship — most often place, direction or time. The preposition together with its object (and any describing words) makes a **prepositional phrase**.`,
      teachingTip:
        "Prepositions of time (in/on/at) are the biggest source of error for learners. Teach the ladder: at (a precise time — at 5 o'clock), on (a day/date — on Friday), in (a longer period — in July, in 2026). Drill the between/among rule (two vs more than two). The 'never end a sentence with a preposition' myth confuses good writers — reassure learners that correct use matters more than position.",
      quiz: [
        {
          prompt: "A preposition shows the relationship between a noun/pronoun and…",
          options: ["another word in the sentence", "nothing", "the writer", "the title"],
          correctIndex: 0,
          explanation: "It links its object to the rest of the sentence.",
        },
        {
          prompt: "In 'The book is on the table', the preposition is…",
          options: ["on", "book", "table", "is"],
          correctIndex: 0,
          explanation: "'on' shows the book's position.",
        },
        {
          prompt: "The noun or pronoun after a preposition is its…",
          options: ["object", "subject", "verb", "adjective"],
          correctIndex: 0,
          explanation: "It is the object of the preposition.",
        },
        {
          prompt: "Which is a preposition of time?",
          options: ["after", "under", "beside", "towards"],
          correctIndex: 0,
          explanation: "'after' relates to time.",
        },
        {
          prompt: "Which is a preposition of direction/movement?",
          options: ["towards", "on", "during", "beside"],
          correctIndex: 0,
          explanation: "'towards' shows movement.",
        },
        {
          prompt: "A group of words beginning with a preposition and ending with its object is a…",
          options: ["prepositional phrase", "clause", "sentence", "conjunction"],
          correctIndex: 0,
          explanation: "That is a prepositional phrase.",
        },
        {
          prompt: "Which preposition is correct: 'We will meet ___ Monday.'?",
          options: ["on", "in", "at", "since"],
          correctIndex: 0,
          explanation: "Days take 'on': on Monday.",
        },
        {
          prompt: "Which preposition is correct: 'The class starts ___ 8 o'clock.'?",
          options: ["at", "on", "in", "by"],
          correctIndex: 0,
          explanation: "A precise time takes 'at'.",
        },
        {
          prompt: "Which preposition is correct: 'She was born ___ June.'?",
          options: ["in", "on", "at", "since"],
          correctIndex: 0,
          explanation: "Months take 'in': in June.",
        },
        {
          prompt: "Use 'between' when referring to…",
          options: ["two things", "more than two", "one thing", "time only"],
          correctIndex: 0,
          explanation: "'between' is for two.",
        },
        {
          prompt: "Use 'among' when referring to…",
          options: ["more than two", "two", "one", "a single person"],
          correctIndex: 0,
          explanation: "'among' is for more than two.",
        },
        {
          prompt: "In 'She walked into the room', the prepositional phrase is…",
          options: ["into the room", "she walked", "walked into", "the room only"],
          correctIndex: 0,
          explanation: "Preposition 'into' + object 'the room'.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["Where are you going?", "Where are you going at?", "Where at you going?", "You going where at?"],
          correctIndex: 0,
          explanation: "Avoid the unnecessary preposition 'at'.",
        },
        {
          prompt: "Which is a preposition of place?",
          options: ["beside", "after", "during", "since"],
          correctIndex: 0,
          explanation: "'beside' shows position.",
        },
        {
          prompt: "In 'The gift is for you', the object of the preposition is…",
          options: ["you", "gift", "is", "for"],
          correctIndex: 0,
          explanation: "'you' is the object of 'for'.",
        },
        {
          prompt: "Which preposition fits: 'They hid ___ the tree.' (position)",
          options: ["behind", "since", "until", "of"],
          correctIndex: 0,
          explanation: "'behind' shows position.",
        },
        {
          prompt: "A prepositional phrase usually tells where, when or…",
          options: ["how", "who wrote it", "the price", "the title"],
          correctIndex: 0,
          explanation: "It adds where/when/how information.",
        },
        {
          prompt: "Which preposition of time means 'from a point in the past until now'?",
          options: ["since", "at", "on", "into"],
          correctIndex: 0,
          explanation: "'since' marks a starting point continuing to now.",
        },
        {
          prompt: "Choose the correct preposition: 'Divide the money ___ the two boys.'",
          options: ["between", "among", "into", "beside"],
          correctIndex: 0,
          explanation: "Two boys → 'between'.",
        },
        {
          prompt: "Which word is NOT a preposition?",
          options: ["quickly", "under", "between", "through"],
          correctIndex: 0,
          explanation: "'quickly' is an adverb, not a preposition.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Underline the prepositional phrase and circle the preposition: 'The children played in the sandy yard.'",
          answerKey:
            "Prepositional phrase: 'in the sandy yard'; preposition: 'in' (object: yard). Award marks for identifying the phrase and the preposition.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the correct preposition of time?",
          options: [
            "The meeting is on Friday at 10 o'clock in the morning.",
            "The meeting is in Friday on 10 o'clock at the morning.",
            "The meeting is at Friday in 10 o'clock on the morning.",
            "The meeting is on Friday in 10 o'clock at the morning.",
          ],
          correctIndex: 0,
          answerKey: "on (day) + at (clock time) + in (part of day) is correct.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between 'between' and 'among', giving an example of each.",
          answerKey:
            "'between' is used for two things/people (e.g. 'share it between the two of them'); 'among' is used for more than two (e.g. 'share it among the whole class'). Award marks for the rule and a valid example of each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Write four sentences, each using a preposition to show a different relationship (place, direction, time and one other), and underline the preposition in each.",
          answerKey:
            "Award marks for four correct sentences each using a preposition that clearly shows the stated relationship — place (e.g. 'on the table'), direction (e.g. 'to the market'), time (e.g. 'after lunch'), and one other such as manner/possession (e.g. 'with a pen', 'of gold') — with the preposition underlined. Mark for correctness and variety of relationships shown.",
          marks: 4,
        },
      ],
    },
    {
      slug: "conjunctions-and-interjections",
      title: "Conjunctions and Interjections",
      objective:
        "By the end of the topic, learners should be able to identify and use coordinating and subordinating conjunctions to join ideas, and recognise interjections and punctuate them correctly.",
      estimatedMinutes: 150,
      notes: `## Conjunctions — joining words

A **conjunction** is a word that **joins** words, phrases or clauses together. There are two main kinds.

### 1. Coordinating conjunctions
These join words or clauses of **equal importance**. The seven are remembered by **FANBOYS**:

**F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o.

- *I bought rice **and** beans.* (joins two nouns)
- *She was tired, **but** she kept working.* (joins two clauses)

When a coordinating conjunction joins two complete clauses, put a **comma before it**.

### 2. Subordinating conjunctions
These join a **subordinate (dependent) clause** to a **main clause**, showing a relationship such as time, reason, condition or contrast.

Common ones: **because, although, since, when, while, if, unless, after, before, as, so that, even though**.

- *We stayed inside **because** it was raining.* (reason)
- ***Although** he was tired, he finished the work.* (contrast)
- ***If** you study, you will pass.* (condition)

A subordinate clause cannot stand alone as a sentence; it depends on the main clause.

## Correlative conjunctions

Some conjunctions work in **pairs**: *either…or, neither…nor, both…and, not only…but also.*

- ***Either** you come now **or** you stay behind.*
- *She is **not only** clever **but also** kind.*

## Interjections — words of feeling

An **interjection** is a word or short phrase that expresses **sudden emotion or feeling** — surprise, joy, pain, agreement, and so on. It is grammatically separate from the rest of the sentence.

- **Oh! Wow! Ouch! Alas! Hurray! Well, … Oops!**

Punctuation:
- A strong interjection is followed by an **exclamation mark**: *Wow! That is wonderful!*
- A milder one is followed by a **comma**: *Well, I suppose so.*

## The parts of speech complete

With conjunctions and interjections, learners have now met all **eight parts of speech**: noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection.`,
      workedExample: `**Task.** (a) Join each pair of ideas with a suitable conjunction and say whether it is coordinating or subordinating. (b) Add a suitable interjection to a sentence and punctuate it.

**Part (a) — joining ideas**

1. *It was late. We went home.*
   → *It was late, **so** we went home.* — **so** is a **coordinating** conjunction (FANBOYS), joining two equal clauses; note the comma before it.

2. *He passed the exam. He had studied hard.*
   → *He passed the exam **because** he had studied hard.* — **because** is a **subordinating** conjunction, joining a subordinate clause (of reason) to the main clause.

3. *She is clever. She is kind.*
   → *She is **not only** clever **but also** kind.* — **not only…but also** is a **correlative** (paired) conjunction.

**Part (b) — interjection**

Sudden joy: ***Hurray!** We won the match!* — the strong interjection **Hurray!** expresses excitement and is followed by an **exclamation mark**, standing apart from the rest of the sentence. A milder version: ***Well,** we did our best.* (comma after a mild interjection).

**Key idea:** coordinating conjunctions (FANBOYS) join equals; subordinating conjunctions attach a dependent clause to a main clause and show a relationship; interjections express feeling and take an exclamation mark (strong) or a comma (mild).`,
      teachingTip:
        "FANBOYS is the fastest way to fix the seven coordinating conjunctions, and the comma-before-FANBOYS rule (when joining two clauses) is a reliable marks-winner. Contrast them with subordinating conjunctions by testing whether the clause can stand alone — 'because it was raining' cannot, so 'because' is subordinating. Keep interjections light and fun; the punctuation rule (! for strong, , for mild) is the examinable part.",
      quiz: [
        {
          prompt: "A conjunction is a word that…",
          options: ["joins words, phrases or clauses", "describes a noun", "shows sudden feeling", "replaces a noun"],
          correctIndex: 0,
          explanation: "Conjunctions join parts of a sentence.",
        },
        {
          prompt: "The seven coordinating conjunctions are remembered by…",
          options: ["FANBOYS", "PEMDAS", "ROYGBIV", "FOIL"],
          correctIndex: 0,
          explanation: "For, And, Nor, But, Or, Yet, So.",
        },
        {
          prompt: "Coordinating conjunctions join ideas of…",
          options: ["equal importance", "unequal importance", "no importance", "different tenses"],
          correctIndex: 0,
          explanation: "They join equal words or clauses.",
        },
        {
          prompt: "Which is a coordinating conjunction?",
          options: ["but", "because", "although", "when"],
          correctIndex: 0,
          explanation: "'but' is in FANBOYS.",
        },
        {
          prompt: "Which is a subordinating conjunction?",
          options: ["because", "and", "or", "so"],
          correctIndex: 0,
          explanation: "'because' introduces a subordinate clause.",
        },
        {
          prompt: "A subordinating conjunction joins a subordinate clause to a…",
          options: ["main clause", "preposition", "noun only", "interjection"],
          correctIndex: 0,
          explanation: "It links the dependent clause to the main clause.",
        },
        {
          prompt: "When a coordinating conjunction joins two complete clauses, put a … before it.",
          options: ["comma", "full stop", "question mark", "colon only"],
          correctIndex: 0,
          explanation: "Use a comma before FANBOYS joining two clauses.",
        },
        {
          prompt: "'Although he was tired, he finished' uses a conjunction showing…",
          options: ["contrast", "reason", "time", "place"],
          correctIndex: 0,
          explanation: "'although' signals contrast.",
        },
        {
          prompt: "'We stayed inside because it was raining' uses a conjunction showing…",
          options: ["reason", "contrast", "condition", "place"],
          correctIndex: 0,
          explanation: "'because' gives the reason.",
        },
        {
          prompt: "'If you study, you will pass' uses a conjunction showing…",
          options: ["condition", "reason", "time", "contrast"],
          correctIndex: 0,
          explanation: "'if' introduces a condition.",
        },
        {
          prompt: "Which is a correlative (paired) conjunction?",
          options: ["either…or", "and only", "but so", "because when"],
          correctIndex: 0,
          explanation: "either…or is a matching pair.",
        },
        {
          prompt: "An interjection expresses…",
          options: ["sudden emotion or feeling", "the time of an action", "a comparison", "ownership"],
          correctIndex: 0,
          explanation: "Interjections show feeling.",
        },
        {
          prompt: "Which is an interjection?",
          options: ["Wow!", "quickly", "under", "because"],
          correctIndex: 0,
          explanation: "'Wow!' expresses surprise/excitement.",
        },
        {
          prompt: "A strong interjection is usually followed by a…",
          options: ["exclamation mark", "full stop", "comma always", "question mark"],
          correctIndex: 0,
          explanation: "Strong interjections take '!'.",
        },
        {
          prompt: "A mild interjection is usually followed by a…",
          options: ["comma", "exclamation mark", "colon", "semicolon"],
          correctIndex: 0,
          explanation: "e.g. 'Well, I suppose so.'",
        },
        {
          prompt: "A subordinate clause…",
          options: ["cannot stand alone as a sentence", "is always the main idea", "needs no main clause", "is an interjection"],
          correctIndex: 0,
          explanation: "It depends on a main clause.",
        },
        {
          prompt: "Which sentence correctly joins two clauses?",
          options: [
            "She was tired, but she kept working.",
            "She was tired but, she kept working.",
            "She was tired but she, kept working.",
            "She was, tired but she kept working.",
          ],
          correctIndex: 0,
          explanation: "Comma before 'but' joining two clauses.",
        },
        {
          prompt: "'Neither the teacher nor the students knew' uses which pair?",
          options: ["neither…nor", "either…or", "both…and", "not only…but also"],
          correctIndex: 0,
          explanation: "neither…nor is the correlative pair used.",
        },
        {
          prompt: "How many parts of speech are there in total?",
          options: ["eight", "five", "ten", "six"],
          correctIndex: 0,
          explanation: "Noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection.",
        },
        {
          prompt: "'Ouch! That hurt!' — 'Ouch' is a(n)…",
          options: ["interjection", "conjunction", "preposition", "adverb"],
          correctIndex: 0,
          explanation: "It expresses sudden pain — an interjection.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List the seven coordinating conjunctions (FANBOYS).",
          answerKey:
            "For, And, Nor, But, Or, Yet, So. Award full marks for all seven; deduct for each missing or wrong one.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses a subordinating conjunction?",
          options: [
            "Although it rained, the match continued.",
            "It rained, and the match continued.",
            "It rained, so the match stopped.",
            "It rained, but the match continued.",
          ],
          correctIndex: 0,
          answerKey: "'Although' is subordinating; the others (and, so, but) are coordinating.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Join these two sentences with a suitable subordinating conjunction: 'The bell rang. The students left the class.'",
          answerKey:
            "Accept any correct subordinating conjunction that makes sense, e.g. 'When the bell rang, the students left the class.' or 'The students left the class after the bell rang.' Award marks for a correct subordinating conjunction and a grammatical sentence.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between coordinating and subordinating conjunctions, giving an example sentence of each, and describe how an interjection is punctuated.",
          answerKey:
            "A strong answer explains that coordinating conjunctions (FANBOYS) join words or clauses of equal importance (e.g. 'I was tired, but I kept going') with a comma before the conjunction when joining two clauses, while subordinating conjunctions (because, although, if, when…) attach a subordinate clause that cannot stand alone to a main clause and show a relationship such as reason, contrast, time or condition (e.g. 'Because it was late, we went home'). On interjections: a strong interjection is followed by an exclamation mark (Wow!), a mild one by a comma (Well, …). Award marks for the definitions, valid examples of each conjunction type, and the interjection punctuation rule.",
          marks: 5,
        },
      ],
    },
  ],
};
