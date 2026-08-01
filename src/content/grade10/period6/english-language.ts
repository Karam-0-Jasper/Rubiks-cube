import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester Two, Period VI: Grammar — Phrases.
export const englishLanguageG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Phrases",
  summary:
    "Period VI of the MoE Grade 10 English syllabus. Learners identify a phrase and distinguish it from a clause, then recognise the main kinds of phrase — noun, verb, prepositional, adjective and adverb phrases — and the work each does in a sentence.",
  topics: [
    {
      slug: "phrases-and-their-kinds",
      title: "What a Phrase Is: Noun and Verb Phrases",
      objective:
        "By the end of the topic, learners should be able to define a phrase and distinguish it from a clause, and identify noun phrases and verb phrases and their functions.",
      estimatedMinutes: 150,
      notes: `## What is a phrase?

A **phrase** is a **group of related words** that works together as a unit in a sentence but **does not contain both a subject and its own verb** — so it does **not** make complete sense on its own.

- *the tall green tree* — a phrase (no verb; not a complete thought).
- *under the wooden table* — a phrase.

## Phrase versus clause

This is the distinction the whole topic rests on:

- A **phrase** has **no subject–verb pair** and cannot stand alone: *in the morning*.
- A **clause** **does** contain a subject and a verb: *the sun rose* (subject *sun* + verb *rose*).

\`\`\`svg A phrase has no subject–verb pair; a clause does
<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="20" y="20" width="200" height="110" rx="10" fill="#efe2cd" stroke="#c9a86e"/>
  <rect x="240" y="20" width="200" height="110" rx="10" fill="#e5efe2" stroke="#8fb08a"/>
  <g text-anchor="middle">
    <text x="120" y="46" font-size="14" font-weight="bold">PHRASE</text>
    <text x="120" y="74" font-size="14" font-style="italic">in the morning</text>
    <text x="120" y="102" font-size="12" fill="#6a5a48">no subject + verb</text>
    <text x="120" y="120" font-size="12" fill="#6a5a48">not a full idea</text>
    <text x="340" y="46" font-size="14" font-weight="bold">CLAUSE</text>
    <text x="340" y="74" font-size="14" font-style="italic">the sun rose</text>
    <text x="340" y="100" font-size="12" fill="#4a6a45">subject (sun) +</text>
    <text x="340" y="118" font-size="12" fill="#4a6a45">verb (rose)</text>
  </g>
</svg>
\`\`\`

A sentence is built from clauses; phrases are the smaller building blocks **inside** them. The quick test for any group of words is: *does it contain a subject and its verb?* If yes, it is a clause; if no, it is a phrase.

## Kinds of phrase

Phrases are named after the **head word** (the most important word) or the job they do. The main kinds are:

- **Noun phrase**
- **Verb phrase**
- **Prepositional phrase** (Period V)
- **Adjective phrase**
- **Adverb phrase**

## Noun phrase

A **noun phrase** is a noun together with the words that describe it (its **modifiers** — articles, adjectives, and other words). It does every job a single noun can do:

- as the **subject**: ***The big black dog*** barked.
- as the **object**: She bought ***a beautiful new dress***.
- as the **complement** after a linking verb: He became ***a respected elder***.
- as the **object of a preposition**: She sat on ***the wooden bench***.

The **head word** is the noun itself (*dog, dress, elder, bench*); the surrounding words (*the, big, black; a, beautiful, new*) modify it. A noun phrase can also be built round a **gerund** (the *-ing* form used as a noun): ***Swimming in the river*** is dangerous.

## Verb phrase

A **verb phrase** is the **main verb together with its helping (auxiliary) verbs** (from Period II). It does the job of the **verb** in the sentence.

- *She **has been working** all day.* (verb phrase: has + been + working)
- *They **will finish** soon.* (verb phrase: will + finish)

The **head** is the main verb (*working, finish*); the helping verbs support it to show tense, etc.

## Why phrases matter

Recognising phrases helps you understand how sentences are built and how to write clearly. A noun phrase can be a subject or object; a verb phrase carries the action and its tense. Seeing these units makes analysing and improving sentences much easier.`,
      workedExample: `**Task.** In each sentence, identify the underlined group as a phrase or a clause; if it is a phrase, name its kind (noun or verb) and its head word.

1. *__The old wooden bridge__ collapsed.*
2. *The workers __have repaired__ the road.*
3. *__because it was late__, we went home.*

**Answers**

1. **The old wooden bridge** — a **phrase** (no verb of its own). It is a **noun phrase** doing the job of the **subject**; its **head word** is the noun **bridge** (modified by *the, old, wooden*).

2. **have repaired** — a **phrase**; specifically a **verb phrase** (helping verb *have* + main verb *repaired*). Its **head** is the main verb **repaired**; it carries the action and its tense (present perfect).

3. **because it was late** — this is **not** a phrase but a **clause**, because it contains a subject (**it**) and a verb (**was**). (It is a subordinate clause.)

**Key idea:** a phrase is a group of related words with **no subject–verb pair** (e.g. the noun phrase *the old wooden bridge*, the verb phrase *have repaired*), while a clause **does** contain a subject and a verb (*because it was late*).`,
      teachingTip:
        "The phrase-vs-clause test is the foundation: does the group contain a subject AND its verb? If yes → clause; if no → phrase. Drill this with mixed examples before naming phrase types. For noun and verb phrases, teach the idea of the 'head word' (the noun or the main verb) with modifiers/auxiliaries around it — this makes the later analysis of sentence structure much clearer.",
      quiz: [
        {
          prompt: "A phrase is a group of related words that…",
          options: ["has no subject–verb pair", "always has a subject and verb", "is a full sentence", "is a single word"],
          correctIndex: 0,
          explanation: "A phrase lacks a subject–verb pair.",
        },
        {
          prompt: "A phrase, on its own,…",
          options: ["does not make complete sense", "is a complete sentence", "always ends with a full stop", "must have a verb"],
          correctIndex: 0,
          explanation: "It cannot stand alone as a complete thought.",
        },
        {
          prompt: "A clause differs from a phrase because a clause has…",
          options: ["a subject and a verb", "no verb", "only nouns", "no meaning"],
          correctIndex: 0,
          explanation: "A clause contains a subject–verb pair.",
        },
        {
          prompt: "Which of these is a phrase (not a clause)?",
          options: ["the tall green tree", "the sun rose", "she sang", "birds fly"],
          correctIndex: 0,
          explanation: "'the tall green tree' has no verb.",
        },
        {
          prompt: "Which of these is a clause (not a phrase)?",
          options: ["the sun rose", "in the morning", "the big dog", "under the table"],
          correctIndex: 0,
          explanation: "'the sun rose' has a subject and verb.",
        },
        {
          prompt: "A noun phrase does the job of a…",
          options: ["noun", "verb", "adjective only", "conjunction"],
          correctIndex: 0,
          explanation: "It functions as a noun (subject or object).",
        },
        {
          prompt: "In 'The big black dog barked', the noun phrase is…",
          options: ["The big black dog", "barked", "big black", "dog barked"],
          correctIndex: 0,
          explanation: "'The big black dog' acts as the subject.",
        },
        {
          prompt: "The head word of the noun phrase 'a beautiful new dress' is…",
          options: ["dress", "beautiful", "new", "a"],
          correctIndex: 0,
          explanation: "The noun 'dress' is the head.",
        },
        {
          prompt: "A verb phrase is the main verb together with its…",
          options: ["helping (auxiliary) verbs", "adjectives", "objects", "prepositions"],
          correctIndex: 0,
          explanation: "Auxiliaries plus the main verb form a verb phrase.",
        },
        {
          prompt: "In 'She has been working', the verb phrase is…",
          options: ["has been working", "working", "she", "has"],
          correctIndex: 0,
          explanation: "The whole 'has been working' is the verb phrase.",
        },
        {
          prompt: "The head of the verb phrase 'will finish' is…",
          options: ["finish", "will", "the whole phrase", "none"],
          correctIndex: 0,
          explanation: "The main verb 'finish' is the head.",
        },
        {
          prompt: "A noun phrase can act as the … of a sentence.",
          options: ["subject or object", "verb", "conjunction", "interjection"],
          correctIndex: 0,
          explanation: "Noun phrases fill noun roles.",
        },
        {
          prompt: "Phrases are the smaller building blocks inside…",
          options: ["clauses/sentences", "words", "letters", "paragraphs only"],
          correctIndex: 0,
          explanation: "Sentences are built from clauses, which contain phrases.",
        },
        {
          prompt: "'in the morning' is which of the following?",
          options: ["a phrase", "a clause", "a sentence", "a verb"],
          correctIndex: 0,
          explanation: "No subject–verb pair, so it is a phrase.",
        },
        {
          prompt: "Which group contains a subject and a verb?",
          options: ["the children played", "the noisy children", "after the game", "a long day"],
          correctIndex: 0,
          explanation: "'the children played' is a clause.",
        },
        {
          prompt: "The words that describe the head noun in a noun phrase are its…",
          options: ["modifiers", "verbs", "clauses", "prepositions only"],
          correctIndex: 0,
          explanation: "Modifiers describe the head noun.",
        },
        {
          prompt: "A verb phrase carries the action and its…",
          options: ["tense", "colour", "spelling", "price"],
          correctIndex: 0,
          explanation: "Auxiliaries show the tense of the verb phrase.",
        },
        {
          prompt: "Recognising phrases helps you understand how … are built.",
          options: ["sentences", "letters", "sounds", "pages"],
          correctIndex: 0,
          explanation: "Phrases show sentence structure.",
        },
        {
          prompt: "Which is a noun phrase acting as an object? 'She bought ___.'",
          options: ["a beautiful new dress", "quickly ran", "has been eating", "under the bed"],
          correctIndex: 0,
          explanation: "'a beautiful new dress' is the object noun phrase.",
        },
        {
          prompt: "'They are singing loudly' — the verb phrase is…",
          options: ["are singing", "loudly", "they", "singing loudly"],
          correctIndex: 0,
          explanation: "'are singing' (auxiliary + main verb) is the verb phrase.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a phrase and a clause, giving one example of each.",
          answerKey:
            "A phrase is a group of related words with no subject–verb pair that cannot stand alone (e.g. 'the tall tree', 'in the morning'); a clause contains a subject and a verb (e.g. 'the sun rose'). Award marks for the definitions and a valid example of each.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which of these is a verb phrase?",
          options: ["has been repaired", "the old road", "under the bridge", "the busy workers"],
          correctIndex: 0,
          answerKey: "'has been repaired' is auxiliaries + main verb — a verb phrase.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Identify the noun phrase and its head word: 'The three noisy children ran outside.'",
          answerKey:
            "Noun phrase: 'The three noisy children' (acting as subject); head word: 'children'. Award marks for the noun phrase and the head word.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a noun phrase and a verb phrase are, describing the job each does in a sentence and giving an example of each.",
          answerKey:
            "A strong answer explains that a noun phrase is a noun with its modifiers that does the job of a noun (subject or object), e.g. 'the big black dog' as a subject; and a verb phrase is the main verb with its helping verbs that does the job of the verb and carries the tense, e.g. 'has been working'. It should identify the head word of each (the noun; the main verb). Award marks for correct definitions, the function of each, and valid examples.",
          marks: 5,
        },
      ],
    },
    {
      slug: "prepositional-adjective-adverb-phrases",
      title: "Prepositional, Adjective and Adverb Phrases",
      objective:
        "By the end of the topic, learners should be able to identify prepositional phrases and recognise when a phrase functions as an adjective phrase or an adverb phrase.",
      estimatedMinutes: 150,
      notes: `## Phrases named by their function

Some phrases are named after the **job they do** in the sentence — describing a noun (like an adjective) or a verb (like an adverb). Often the same **prepositional phrase** does one of these jobs.

## Prepositional phrase (revisited)

A **prepositional phrase** begins with a **preposition** and ends with its object (Period V): *in the box, under the tree, after the meeting*. A prepositional phrase usually works as **either an adjective phrase or an adverb phrase**, depending on what it describes.

## Adjective phrase

An **adjective phrase** is a phrase that does the work of an **adjective** — it **describes a noun or pronoun** (tells *which* or *what kind*).

- *The man **in the blue shirt** is my teacher.* → *in the blue shirt* describes the noun **man** (which man?).
- *A book **with a torn cover** lay on the desk.* → *with a torn cover* describes **book**.

**Test:** an adjective phrase answers *which one?* or *what kind?* about a noun.

## Adverb phrase

An **adverb phrase** is a phrase that does the work of an **adverb** — it **modifies a verb** (or adjective/adverb), telling *how, when, where* or *why*.

- *She sang **with great joy**.* → *with great joy* tells **how** she sang (modifies the verb *sang*).
- *They arrived **after the storm**.* → *after the storm* tells **when** they arrived.
- *The children played **in the yard**.* → *in the yard* tells **where** they played.

**Test:** an adverb phrase answers *how, when, where* or *why* about a verb.

## Same phrase, different job

The **same prepositional phrase** can be an adjective phrase or an adverb phrase depending on what it describes:

- *The house **on the hill** is old.* → describes the noun **house** = **adjective phrase**.
- *They walked **on the hill**.* → tells where they walked (modifies **walked**) = **adverb phrase**.

So to name the phrase, ask **what word it describes**: a noun → adjective phrase; a verb → adverb phrase.

## Why this matters

Adjective and adverb phrases add rich detail to writing without extra clauses. Recognising them — and what they describe — is the key to analysing sentences and to writing with variety and precision, rounding off the study of the parts of speech and phrases.`,
      workedExample: `**Task.** For each underlined prepositional phrase, say whether it is an **adjective phrase** or an **adverb phrase**, and state the word it describes.

1. *The girl __with the red bag__ is my sister.*
2. *He finished the work __before dark__.*
3. *The keys __on the table__ are mine.*

**Answers**

1. **with the red bag** — it describes the **noun** *girl* (which girl?), so it is doing the job of an adjective → an **adjective phrase**. Word described: **girl**.

2. **before dark** — it tells **when** he finished (it modifies the **verb** *finished*), so it is doing the job of an adverb → an **adverb phrase**. Word described: **finished**.

3. **on the table** — it describes the **noun** *keys* (which keys?), so it is doing the job of an adjective → an **adjective phrase**. Word described: **keys**.

**Key idea:** the same kind of prepositional phrase can be an **adjective phrase** (when it describes a noun — answering *which?/what kind?*) or an **adverb phrase** (when it modifies a verb — answering *how?/when?/where?/why?*). Always decide by asking **what word the phrase describes**.`,
      teachingTip:
        "The single most useful skill is deciding what the phrase describes: a noun → adjective phrase; a verb → adverb phrase. Use minimal pairs with the SAME phrase ('the house on the hill' vs 'they walked on the hill') so learners see that function, not form, names the phrase. Drill the question tests — adjective phrase answers 'which/what kind?', adverb phrase answers 'how/when/where/why?' — since exams ask learners to identify the type and what it modifies.",
      quiz: [
        {
          prompt: "A prepositional phrase begins with a preposition and ends with its…",
          options: ["object", "verb", "subject", "adjective"],
          correctIndex: 0,
          explanation: "e.g. 'in the box' — preposition + object.",
        },
        {
          prompt: "An adjective phrase does the work of an…",
          options: ["adjective (describes a noun)", "adverb", "verb", "conjunction"],
          correctIndex: 0,
          explanation: "It describes a noun or pronoun.",
        },
        {
          prompt: "An adverb phrase does the work of an…",
          options: ["adverb (modifies a verb)", "adjective", "noun", "preposition"],
          correctIndex: 0,
          explanation: "It modifies a verb (how/when/where/why).",
        },
        {
          prompt: "In 'The man in the blue shirt is my teacher', the phrase 'in the blue shirt' is an…",
          options: ["adjective phrase (describes 'man')", "adverb phrase", "verb phrase", "noun phrase"],
          correctIndex: 0,
          explanation: "It tells which man — describes the noun.",
        },
        {
          prompt: "In 'She sang with great joy', 'with great joy' is an…",
          options: ["adverb phrase (tells how she sang)", "adjective phrase", "noun phrase", "verb phrase"],
          correctIndex: 0,
          explanation: "It modifies the verb 'sang'.",
        },
        {
          prompt: "An adjective phrase answers the question…",
          options: ["which one? / what kind?", "how? / when?", "who wrote it?", "how much money?"],
          correctIndex: 0,
          explanation: "It describes a noun.",
        },
        {
          prompt: "An adverb phrase answers the question…",
          options: ["how? when? where? why?", "which one?", "what colour is the noun?", "who owns it?"],
          correctIndex: 0,
          explanation: "It modifies a verb.",
        },
        {
          prompt: "In 'They arrived after the storm', 'after the storm' is an…",
          options: ["adverb phrase (tells when)", "adjective phrase", "noun phrase", "verb phrase"],
          correctIndex: 0,
          explanation: "It tells when they arrived.",
        },
        {
          prompt: "In 'A book with a torn cover lay there', 'with a torn cover' describes the noun…",
          options: ["book", "cover", "torn", "there"],
          correctIndex: 0,
          explanation: "It tells which book — adjective phrase.",
        },
        {
          prompt: "To decide the type of a phrase, ask what word it…",
          options: ["describes", "rhymes with", "costs", "replaces"],
          correctIndex: 0,
          explanation: "Noun → adjective phrase; verb → adverb phrase.",
        },
        {
          prompt: "In 'The house on the hill is old', 'on the hill' is an…",
          options: ["adjective phrase (describes 'house')", "adverb phrase", "verb phrase", "noun phrase"],
          correctIndex: 0,
          explanation: "It tells which house.",
        },
        {
          prompt: "In 'They walked on the hill', 'on the hill' is an…",
          options: ["adverb phrase (tells where they walked)", "adjective phrase", "noun phrase", "verb phrase"],
          correctIndex: 0,
          explanation: "It modifies the verb 'walked'.",
        },
        {
          prompt: "The SAME prepositional phrase can be…",
          options: ["an adjective phrase or an adverb phrase, depending on what it describes", "always an adjective phrase", "always an adverb phrase", "a clause"],
          correctIndex: 0,
          explanation: "Function depends on what it describes.",
        },
        {
          prompt: "In 'The children played in the yard', 'in the yard' tells…",
          options: ["where they played (adverb phrase)", "which children", "how they played", "when they played"],
          correctIndex: 0,
          explanation: "It tells where — an adverb phrase.",
        },
        {
          prompt: "A phrase that describes a noun is functioning as an…",
          options: ["adjective phrase", "adverb phrase", "verb phrase", "clause"],
          correctIndex: 0,
          explanation: "Describing a noun = adjective phrase.",
        },
        {
          prompt: "A phrase that modifies a verb is functioning as an…",
          options: ["adverb phrase", "adjective phrase", "noun phrase", "clause"],
          correctIndex: 0,
          explanation: "Modifying a verb = adverb phrase.",
        },
        {
          prompt: "Adjective and adverb phrases add … to writing.",
          options: ["rich detail", "spelling errors", "extra clauses always", "confusion"],
          correctIndex: 0,
          explanation: "They add detail concisely.",
        },
        {
          prompt: "In 'She spoke in a soft voice', 'in a soft voice' is an…",
          options: ["adverb phrase (how she spoke)", "adjective phrase", "noun phrase", "verb phrase"],
          correctIndex: 0,
          explanation: "It modifies the verb 'spoke'.",
        },
        {
          prompt: "In 'The letter from my aunt arrived', 'from my aunt' describes…",
          options: ["the noun 'letter' (adjective phrase)", "the verb 'arrived'", "the word 'my'", "nothing"],
          correctIndex: 0,
          explanation: "It tells which letter.",
        },
        {
          prompt: "Phrases named by their function are the adjective phrase and the…",
          options: ["adverb phrase", "clause", "sentence", "paragraph"],
          correctIndex: 0,
          explanation: "They are named by the job they do.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Identify the prepositional phrase in 'The dog under the table is asleep' and say whether it is an adjective or adverb phrase, and what it describes.",
          answerKey:
            "Prepositional phrase: 'under the table'; it is an adjective phrase describing the noun 'dog' (which dog?). Award marks for the phrase, the type (adjective), and the word described (dog).",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In 'He left before sunrise', the phrase 'before sunrise' is…",
          options: [
            "an adverb phrase telling when he left",
            "an adjective phrase describing 'he'",
            "a noun phrase",
            "a verb phrase",
          ],
          correctIndex: 0,
          answerKey: "It modifies the verb 'left', telling when — an adverb phrase.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Using the phrase 'in the market', write one sentence where it is an adjective phrase and one where it is an adverb phrase.",
          answerKey:
            "Adjective phrase (describes a noun): e.g. 'The trader in the market is my uncle.' Adverb phrase (modifies a verb): e.g. 'They sold fish in the market.' Award marks for each correct use with the phrase functioning as stated.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between an adjective phrase and an adverb phrase, and describe the test you would use to tell them apart. Give an example of each.",
          answerKey:
            "A strong answer explains that an adjective phrase does the work of an adjective — it describes a noun or pronoun and answers 'which one?/what kind?' (e.g. 'the man in the blue shirt'); an adverb phrase does the work of an adverb — it modifies a verb and answers 'how?/when?/where?/why?' (e.g. 'she sang with great joy'). The test: decide what word the phrase describes — a noun means an adjective phrase, a verb means an adverb phrase — noting that the same prepositional phrase can be either. Award marks for the definitions, the test, and a valid example of each.",
          marks: 5,
        },
      ],
    },
  ],
};
