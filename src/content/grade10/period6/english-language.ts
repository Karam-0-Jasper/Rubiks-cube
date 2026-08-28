import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester Two, Period VI: Grammar — Phrases. CONTENTS: (1) noun phrase and verb
// phrase; (2) verbal phrases — participle, gerund, infinitive; (3) phrasal verbs;
// prepositional phrases; (4) clauses — independent, dependent, noun, adjective,
// adverb. Taught here as five topics.
export const englishLanguageG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Phrases",
  summary:
    "Period VI of the MoE Grade 10 English syllabus. Learners recognise kinds of phrases and clauses: noun and verb phrases, verbal phrases (participle, gerund, infinitive), prepositional phrases used as adjective and adverb phrases, phrasal verbs, and independent, dependent, noun, adjective and adverb clauses.",
  topics: [
    {
      // source: LibreTexts — Lumen Learning, English Composition I, 12.19 Phrases and Clauses (https://human.libretexts.org/Courses/Lumen_Learning/English_Composition_I_(Lumen)/12:_Grammar_Basics/12.19:_Phrases_and_Clauses)
      slug: "noun-and-verb-phrases",
      title: "What a Phrase Is: Noun and Verb Phrases",
      objective:
        "By the end of the topic, learners should be able to define a phrase, distinguish it from a clause, and identify noun phrases and verb phrases and the work each does in a sentence.",
      estimatedMinutes: 140,
      notes: `## Phrase vs clause

**Phrase** — a group of words that has **a partial subject or verb but not both**, or **neither** a subject nor a verb. A phrase works as a **single unit** (like one part of speech) but does **not** express a complete thought.

**Clause** — a group of words that has **both a subject and a verb.** (Clauses are studied later in this period.)

- *the nice neighbour* — a phrase (no verb).
- *after the storm* — a phrase (no subject-verb pair).
- *The sun set.* — a clause (subject *sun* + verb *set*).

## Noun phrases

**Noun phrase** — a noun together with its modifiers, acting as a **single noun** in the sentence. It can be a subject, an object, or a complement.

- ***The nice neighbour*** *waved.* (subject)
- *I met **my best friend**.* (object)
- *We saw **troops of soldiers**.* (object)

A noun phrase is built around a **head noun**, with articles, adjectives, and other modifiers around it: *the / two / tall / brick* + **houses**.

## Verb phrases

**Verb phrase** — a main verb together with its **helping (auxiliary) verbs**, working as the complete verb of the sentence.

- *She **has been sleeping**.* (helpers *has, been* + main verb *sleeping*)
- *They **will finish** soon.* (*will* + *finish*)
- *The gate **was painted**.* (*was* + *painted*)

In a verb phrase the helpers come **first** and the main verb comes **last**.

## Telling them apart

| Group of words | Subject? | Verb? | Type |
| --- | --- | --- | --- |
| the tall brick house | no | no | noun phrase |
| have been waiting | no | main verb + helpers | verb phrase |
| a bowl of rice | no | no | noun phrase |
| Musu cooked rice | yes (Musu) | yes (cooked) | clause |

## Summary

- A **phrase** lacks a full subject-verb pair and works as one unit; it does not state a complete thought.
- A **noun phrase** = a head noun + its modifiers, used wherever a noun can go.
- A **verb phrase** = main verb + its helping verbs.`,
      workedExample: `**Task.** Label each underlined group as a *noun phrase*, a *verb phrase*, or a *clause*, and justify your choice.

1. ***The old wooden bridge*** *collapsed.*
2. *By noon the workers **had been digging** for hours.*
3. ***The rain stopped*** *suddenly.*

**Answers**

1. **The old wooden bridge** → *noun phrase*. Head noun *bridge* with modifiers *the, old, wooden*; no verb inside, and it works as the subject.
2. **had been digging** → *verb phrase*. Main verb *digging* with helpers *had, been*; no subject inside the group.
3. **The rain stopped** → *clause*. It has both a subject (*rain*) and a verb (*stopped*) and states a complete thought.

**Rule applied:** a phrase lacks a full subject-verb pair; a noun phrase centres on a noun, a verb phrase on a main verb + helpers, while a clause has both a subject and a verb.`,
      quiz: [
        {
          prompt: "A phrase is a group of words that…",
          options: ["lacks a full subject-verb pair", "always has a subject and verb", "is a complete sentence", "must contain a preposition"],
          correctIndex: 0,
          explanation: "A phrase has a partial subject or verb, or neither, and works as one unit.",
        },
        {
          prompt: "A clause differs from a phrase because it has…",
          options: ["both a subject and a verb", "only nouns", "no verb", "an interjection"],
          correctIndex: 0,
          explanation: "A clause contains a subject and a verb.",
        },
        {
          prompt: "Which group of words is a noun phrase?",
          options: ["the nice neighbour", "the sun set", "have been sleeping", "because it rained"],
          correctIndex: 0,
          explanation: "'the nice neighbour' is a head noun with modifiers and no verb.",
        },
        {
          prompt: "A noun phrase works in the sentence as a…",
          options: ["single noun", "single verb", "conjunction", "preposition"],
          correctIndex: 0,
          explanation: "A noun phrase can be a subject, object, or complement — wherever a noun fits.",
        },
        {
          prompt: "In 'The tall brick house is empty', the noun phrase is…",
          options: ["The tall brick house", "is empty", "is", "empty"],
          correctIndex: 0,
          explanation: "The head noun 'house' plus its modifiers form the noun phrase.",
        },
        {
          prompt: "A verb phrase is a main verb plus its…",
          options: ["helping verbs", "objects", "adjectives", "prepositions"],
          correctIndex: 0,
          explanation: "Verb phrase = auxiliaries + main verb.",
        },
        {
          prompt: "Which group is a verb phrase?",
          options: ["has been sleeping", "the red car", "a bowl of rice", "under the tree"],
          correctIndex: 0,
          explanation: "'has been sleeping' is helpers + main verb.",
        },
        {
          prompt: "In a verb phrase, the main verb comes…",
          options: ["last", "first", "in the middle only", "before the helpers"],
          correctIndex: 0,
          explanation: "Helpers come first; the main verb comes last.",
        },
        {
          prompt: "The head of a noun phrase is a…",
          options: ["noun", "verb", "preposition", "conjunction"],
          correctIndex: 0,
          explanation: "The noun phrase is built around a head noun.",
        },
        {
          prompt: "Which is NOT a phrase?",
          options: ["Musu cooked rice", "a bowl of rice", "the tall house", "have been waiting"],
          correctIndex: 0,
          explanation: "'Musu cooked rice' has a subject and verb, so it is a clause.",
        },
        {
          prompt: "'By noon' is what kind of group?",
          options: ["a phrase", "a clause", "a sentence", "an interjection"],
          correctIndex: 0,
          explanation: "It has no subject-verb pair, so it is a phrase.",
        },
        {
          prompt: "In 'They will finish soon', the verb phrase is…",
          options: ["will finish", "They", "soon", "finish soon"],
          correctIndex: 0,
          explanation: "'will finish' is helper + main verb.",
        },
        {
          prompt: "A phrase does NOT express…",
          options: ["a complete thought", "a single idea unit", "meaning", "a modifier"],
          correctIndex: 0,
          explanation: "A phrase is not a complete thought; a sentence is.",
        },
        {
          prompt: "In 'I met my best friend', the noun phrase 'my best friend' is the…",
          options: ["object", "subject", "verb", "preposition"],
          correctIndex: 0,
          explanation: "It receives the action of 'met', so it is the object.",
        },
        {
          prompt: "Which group is a noun phrase used as a subject?",
          options: ["Troops of soldiers marched.", "marched quickly", "over the hill", "was marching"],
          correctIndex: 0,
          explanation: "'Troops of soldiers' is the noun phrase subject.",
        },
        {
          prompt: "'was painted' in 'The gate was painted' is a…",
          options: ["verb phrase", "noun phrase", "clause", "adjective phrase"],
          correctIndex: 0,
          explanation: "'was painted' = helper 'was' + main verb 'painted'.",
        },
        {
          prompt: "Which sentence contains a noun phrase and a verb phrase?",
          options: ["The little children have been playing.", "Playing.", "Quickly and quietly.", "Under the tree."],
          correctIndex: 0,
          explanation: "'The little children' (noun phrase) + 'have been playing' (verb phrase).",
        },
        {
          prompt: "A noun phrase can include all of these EXCEPT a…",
          options: ["subject and its own verb", "head noun", "article", "adjective"],
          correctIndex: 0,
          explanation: "A noun phrase has no subject-verb pair; that would make it a clause.",
        },
        {
          prompt: "Which best defines a verb phrase?",
          options: ["main verb + its auxiliaries", "noun + adjectives", "preposition + object", "two clauses joined"],
          correctIndex: 0,
          explanation: "A verb phrase is the main verb with its helping verbs.",
        },
        {
          prompt: "How many verbs (main) are in the verb phrase 'should have been finished'?",
          options: ["one (finished)", "three", "four", "none"],
          correctIndex: 0,
          explanation: "'finished' is the main verb; 'should, have, been' are helpers.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one noun phrase and one verb phrase, then use each in a sentence and underline it.",
          answerKey:
            "Noun phrase e.g. 'the busy market'; sentence 'The busy market was crowded.' Verb phrase e.g. 'has been raining'; sentence 'It has been raining all day.' Award 2 marks per correct phrase used and underlined in a sentence.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which group of words is a clause, not a phrase?",
          options: [
            "the dog barked",
            "the barking dog",
            "in the yard",
            "have been barking",
          ],
          correctIndex: 0,
          answerKey: "'the dog barked' has a subject (dog) and a verb (barked), so it is a clause.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Identify the noun phrase and the verb phrase in: 'The old fishermen had been mending their nets.'",
          answerKey:
            "Noun phrase: 'The old fishermen' (and 'their nets' is also a noun phrase, object); verb phrase: 'had been mending'. Award marks for the subject noun phrase and the verb phrase.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between a phrase and a clause, with one example of each.",
          answerKey:
            "A phrase lacks a full subject-verb pair and does not express a complete thought (e.g. 'the tall tree'); a clause has both a subject and a verb (e.g. 'the tree fell'). Award marks for the distinction and a correct example of each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a phrase is and how noun phrases and verb phrases differ. Describe the parts of each and give two example sentences that contain both.",
          answerKey:
            "A strong answer defines a phrase (no full subject-verb pair, works as one unit, not a complete thought), a noun phrase (head noun + modifiers, used as a noun) and a verb phrase (main verb + auxiliaries), and gives two sentences each clearly containing a noun phrase and a verb phrase. Award marks for the definitions, the parts, and two valid examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Grammar Anatomy (Brehe), 1.18 Those Verbing Verbals: Gerunds and Participles (https://human.libretexts.org/Bookshelves/Composition/Grammar/Grammar_Anatomy_(Brehe)/01:_Chapters/1.18:_Those_Verbing_Verbals_Gerunds_and_Participles)
      slug: "verbal-phrases",
      title: "Verbal Phrases: Participles, Gerunds and Infinitives",
      objective:
        "By the end of the topic, learners should be able to identify the three verbals (participle, gerund, infinitive) and their phrases, and state whether each works as a noun, an adjective, or an adverb.",
      estimatedMinutes: 160,
      notes: `## What a verbal is

**Verbal** — a verb in **form** but with a different **function**: it behaves like another part of speech (noun, adjective, or adverb) while keeping verb qualities (it can take an object or be modified by an adverb). There are three verbals: **participles, gerunds, infinitives.** A **verbal phrase** is the verbal plus its objects and modifiers.

## Participles and participial phrases (verbs as adjectives)

**Participle** — a verb form used as an **adjective**. Two kinds:

- **Present participle** ends in **-ing**: *The **soaring** airplane roared overhead.*
- **Past participle** (often **-ed** / **-en**): ***Shaken** from his fall, the old man sat.*

A **participial phrase** is the participle plus its objects/modifiers, and it works as an adjective describing a noun:

- ***Walking quickly to the door**, the detective threw it open.* (describes *detective*)
- ***Shoveling snow**, Mr. Lochenhocher grew tired.* (describes *Mr. Lochenhocher*)

**Watch the dangling participle:** the phrase must clearly modify a nearby noun. ✗ *Rowing across the river, the boat struck the ice.* (Who was rowing?)

## Gerunds and gerund phrases (verbs as nouns)

**Gerund** — the **-ing** form of a verb used as a **noun**. A **gerund phrase** is the gerund plus its objects/modifiers, and it does a noun's jobs:

- **Subject:** ***Singing** is his favourite pastime.*
- **Object:** *I enjoy **baking cakes**.*
- **Object of a preposition:** *He always has time for **singing hymns**.*

**Gerund vs progressive verb:** a gerund fills a **noun** slot; a progressive verb always has a form of *be* before it. *Playing the tuba is his hobby* (gerund, subject) vs *He is playing the tuba* (progressive verb).

## Infinitives and infinitive phrases (nouns, adjectives, or adverbs)

**Infinitive** — the base verb preceded by **to** (*to run, to be, to win*). An **infinitive phrase** is the infinitive plus its objects/modifiers, and it can work three ways:

- **As a noun:** ***To quit now** would be a mistake.* / *He likes **to run**.*
- **As an adjective:** *I need a book **to read**.* (modifies *book*)
- **As an adverb:** *She plays hard **to win**.* (why she plays)

## Summary

| Verbal | Form | Works as |
| --- | --- | --- |
| Participle | -ing or -ed/-en | adjective |
| Gerund | -ing | noun |
| Infinitive | to + base verb | noun, adjective, or adverb |`,
      workedExample: `**Task.** Name the verbal phrase in bold as *participial*, *gerund*, or *infinitive*, and say what part of speech it works as.

1. ***Reading the poem aloud**, Mrs. Mays grew emotional.*
2. *I enjoy **baking cakes**.*
3. *Our goal is **to win the match**.*

**Answers**

1. **Reading the poem aloud** → *participial phrase*; it works as an **adjective** describing *Mrs. Mays* (which person? — the one reading the poem aloud).
2. **baking cakes** → *gerund phrase*; the -ing form works as a **noun**, the object of *enjoy* (enjoy what?).
3. **to win the match** → *infinitive phrase*; here it works as a **noun**, the predicate after *is* (our goal = to win the match).

**Rule applied:** a participle acts as an adjective, a gerund as a noun, and an infinitive as a noun, adjective, or adverb — decided by the job it does in the sentence.`,
      quiz: [
        {
          prompt: "A verbal is a verb form that functions as…",
          options: ["another part of speech", "the main verb", "a conjunction", "a preposition"],
          correctIndex: 0,
          explanation: "Verbals behave as nouns, adjectives, or adverbs, not as the main verb.",
        },
        {
          prompt: "The three verbals are participles, gerunds and…",
          options: ["infinitives", "auxiliaries", "conjunctions", "prepositions"],
          correctIndex: 0,
          explanation: "Participle, gerund, infinitive are the three verbals.",
        },
        {
          prompt: "A participle works as a(n)…",
          options: ["adjective", "noun", "verb", "conjunction"],
          correctIndex: 0,
          explanation: "A participle modifies a noun, so it works as an adjective.",
        },
        {
          prompt: "The present participle ends in…",
          options: ["-ing", "-ed only", "to +", "-est"],
          correctIndex: 0,
          explanation: "e.g. soaring, walking, shoveling.",
        },
        {
          prompt: "In 'Shaken from his fall, the old man sat', 'Shaken' is a…",
          options: ["past participle", "gerund", "infinitive", "adverb"],
          correctIndex: 0,
          explanation: "'Shaken' is a past participle used as an adjective describing 'man'.",
        },
        {
          prompt: "A gerund works as a(n)…",
          options: ["noun", "adjective", "adverb", "conjunction"],
          correctIndex: 0,
          explanation: "A gerund fills a noun slot (subject, object, etc.).",
        },
        {
          prompt: "A gerund ends in…",
          options: ["-ing", "-ed", "to +", "-ly"],
          correctIndex: 0,
          explanation: "A gerund is the -ing form used as a noun, e.g. 'Singing is fun.'",
        },
        {
          prompt: "In 'Singing is his favourite pastime', 'Singing' is the…",
          options: ["subject (gerund)", "main verb", "adjective", "object"],
          correctIndex: 0,
          explanation: "The gerund 'Singing' is the subject of the sentence.",
        },
        {
          prompt: "How do you tell a gerund from a progressive verb?",
          options: [
            "a gerund fills a noun slot; a progressive verb follows a form of 'be'",
            "they are identical",
            "a gerund ends in -ed",
            "a progressive verb is a noun",
          ],
          correctIndex: 0,
          explanation: "Progressive verbs always have a 'be' auxiliary; gerunds act as nouns.",
        },
        {
          prompt: "An infinitive is formed with…",
          options: ["to + base verb", "verb + -ing", "verb + -ed", "have + participle"],
          correctIndex: 0,
          explanation: "e.g. to run, to be, to win.",
        },
        {
          prompt: "An infinitive can function as…",
          options: ["a noun, adjective, or adverb", "a noun only", "an adjective only", "a verb only"],
          correctIndex: 0,
          explanation: "Infinitives are the most flexible verbal.",
        },
        {
          prompt: "In 'He likes to run', 'to run' works as a…",
          options: ["noun", "adjective", "adverb", "preposition"],
          correctIndex: 0,
          explanation: "'to run' is the object of 'likes', so it works as a noun.",
        },
        {
          prompt: "In 'I need a book to read', 'to read' works as a(n)…",
          options: ["adjective", "noun", "adverb", "conjunction"],
          correctIndex: 0,
          explanation: "'to read' modifies the noun 'book', so it is adjectival.",
        },
        {
          prompt: "In 'She plays hard to win', 'to win' works as a(n)…",
          options: ["adverb", "noun", "adjective", "gerund"],
          correctIndex: 0,
          explanation: "'to win' tells why she plays, modifying the verb, so it is adverbial.",
        },
        {
          prompt: "A participial phrase must clearly modify a nearby…",
          options: ["noun", "verb", "preposition", "conjunction"],
          correctIndex: 0,
          explanation: "Otherwise it is a dangling participle.",
        },
        {
          prompt: "Which sentence has a dangling participle?",
          options: [
            "Rowing across the river, the boat struck the ice.",
            "Rowing across the river, we struck the ice.",
            "The boy rowing the boat was tired.",
            "Rowing hard, the team won.",
          ],
          correctIndex: 0,
          explanation: "The phrase seems to say the boat was rowing, which is illogical.",
        },
        {
          prompt: "In 'I enjoy baking cakes', the gerund phrase is…",
          options: ["baking cakes", "I enjoy", "enjoy baking", "cakes"],
          correctIndex: 0,
          explanation: "'baking cakes' is the gerund plus its object, working as a noun.",
        },
        {
          prompt: "Which verbal always keeps 'to' in front of the base verb?",
          options: ["infinitive", "gerund", "present participle", "past participle"],
          correctIndex: 0,
          explanation: "Infinitives are 'to + base verb'.",
        },
        {
          prompt: "In 'The soaring airplane roared overhead', 'soaring' is a…",
          options: ["present participle", "gerund", "infinitive", "noun"],
          correctIndex: 0,
          explanation: "'soaring' describes 'airplane', so it is a present participle (adjective).",
        },
        {
          prompt: "A verbal phrase includes the verbal plus its…",
          options: ["objects and modifiers", "subject and verb", "conjunctions", "interjections"],
          correctIndex: 0,
          explanation: "A verbal phrase = verbal + any objects/modifiers.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one sentence with a gerund phrase, one with a participial phrase, and one with an infinitive phrase. Underline each verbal phrase.",
          answerKey:
            "Gerund e.g. 'Swimming in the river is dangerous.' Participial e.g. 'Smiling broadly, she accepted the prize.' Infinitive e.g. 'They wanted to help the farmers.' Award a mark per correct, underlined phrase, plus a mark for correct labelling.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In 'Reading is fun', the word 'Reading' is a…",
          options: ["gerund", "participle", "infinitive", "main verb"],
          correctIndex: 0,
          answerKey: "'Reading' is the subject noun, so it is a gerund.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "State whether each infinitive works as a noun, adjective, or adverb: (a) 'To forgive is wise.' (b) 'a plan to follow' (c) 'He came to learn.'",
          answerKey:
            "(a) noun (subject); (b) adjective (modifies 'plan'); (c) adverb (why he came). Award a mark per correct function.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between a gerund and a present participle, since both end in -ing.",
          answerKey:
            "A gerund is the -ing form used as a noun (e.g. 'Singing is fun' — subject); a present participle is the -ing form used as an adjective (e.g. 'the singing bird') or, with 'be', as part of a progressive verb. The test is the job the word does. Award marks for the noun-vs-adjective distinction with examples.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the three verbals and their phrases. State the form of each and what part of speech it works as, and give an example sentence for each.",
          answerKey:
            "A strong answer covers participles (-ing or -ed/-en, work as adjectives), gerunds (-ing, work as nouns), and infinitives (to + base, work as noun/adjective/adverb), each with a correct example sentence and the function named. Award marks for the three verbals, their forms, functions, and examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — City College of San Francisco, Writing, Reading, and College Success, 12.15 Prepositions and Prepositional Phrases (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_Reading_and_College_Success:_A_First-Year_Composition_Course_for_All_Learners_(Kashyap_and_Dyquisto)/12:_Grammar/12.15:_Prepositions_and_Prepositional_Phrases)
      slug: "prepositional-phrases",
      title: "Prepositional Phrases: Adjective and Adverb Phrases",
      objective:
        "By the end of the topic, learners should be able to identify a prepositional phrase, and tell whether it works as an adjective phrase (modifying a noun) or an adverb phrase (modifying a verb, adjective, or adverb).",
      estimatedMinutes: 140,
      notes: `## Recap: the prepositional phrase

**Prepositional phrase** — a **preposition + its object** (a noun or pronoun) plus any modifiers of the object. It always begins with a preposition and ends with the object.

- *in the road; to the end of time; after the storm; underneath the couch.*

A prepositional phrase does the work of a **modifier**: it describes another word in the sentence. Depending on the word it modifies, it is called an **adjective phrase** or an **adverb phrase**.

## Adjective phrases

An **adjective phrase** is a prepositional phrase that **modifies a noun or pronoun** — it answers *which one?* or *what kind?*

- *The book **on the table** is mine.* (which book? — the one on the table; modifies *book*)
- *The house **with the red roof** sold quickly.* (which house?; modifies *house*)
- *A man **of great courage** spoke.* (what kind of man?; modifies *man*)

An adjective phrase usually comes **right after** the noun it modifies.

## Adverb phrases

An **adverb phrase** is a prepositional phrase that **modifies a verb, an adjective, or another adverb** — it answers *where? when? how? why? to what extent?*

- *She sang **in the hall**.* (sang where?; modifies the verb *sang*)
- *They arrived **after lunch**.* (arrived when?; modifies *arrived*)
- *He is good **at mathematics**.* (good in what respect?; modifies the adjective *good*)

## How to decide

Find the word the phrase describes:

| Prepositional phrase | Modifies | Type |
| --- | --- | --- |
| in the box (the toys in the box) | noun *toys* | adjective phrase |
| in the box (put it in the box) | verb *put* | adverb phrase |
| with blue eyes (the girl with blue eyes) | noun *girl* | adjective phrase |
| before dawn (left before dawn) | verb *left* | adverb phrase |

The same phrase can be an adjective phrase in one sentence and an adverb phrase in another — it depends on **what it modifies**.

## Summary

- A prepositional phrase = preposition + object; it always modifies something.
- **Adjective phrase** → modifies a **noun/pronoun** (which one? what kind?).
- **Adverb phrase** → modifies a **verb/adjective/adverb** (where? when? how? why?).`,
      workedExample: `**Task.** For each prepositional phrase in bold, name the word it modifies and say whether it is an adjective phrase or an adverb phrase.

1. *The path **through the forest** was narrow.*
2. *We walked **through the forest**.*
3. *The girl **with the red ribbon** won.*

**Answers**

1. **through the forest** → modifies the noun **path** (which path?); it is an **adjective phrase**.
2. **through the forest** → modifies the verb **walked** (walked where?); it is an **adverb phrase**.
3. **with the red ribbon** → modifies the noun **girl** (which girl?); it is an **adjective phrase**.

**Rule applied:** the same phrase (*through the forest*) is an adjective phrase when it describes a noun and an adverb phrase when it describes a verb — decided by what it modifies.`,
      quiz: [
        {
          prompt: "A prepositional phrase always begins with a preposition and ends with its…",
          options: ["object", "subject", "verb", "adjective"],
          correctIndex: 0,
          explanation: "Preposition + object (with modifiers) forms the phrase.",
        },
        {
          prompt: "A prepositional phrase works in a sentence as a…",
          options: ["modifier", "subject", "main verb", "conjunction"],
          correctIndex: 0,
          explanation: "It modifies another word — as an adjective phrase or adverb phrase.",
        },
        {
          prompt: "An adjective phrase modifies a…",
          options: ["noun or pronoun", "verb", "adverb", "conjunction"],
          correctIndex: 0,
          explanation: "An adjective phrase describes a noun or pronoun.",
        },
        {
          prompt: "An adverb phrase modifies a verb, an adjective, or…",
          options: ["another adverb", "a noun", "a pronoun", "an article"],
          correctIndex: 0,
          explanation: "Adverb phrases modify verbs, adjectives, or adverbs.",
        },
        {
          prompt: "In 'The book on the table is mine', 'on the table' modifies…",
          options: ["book", "is", "mine", "table"],
          correctIndex: 0,
          explanation: "It tells which book, so it modifies the noun 'book' (adjective phrase).",
        },
        {
          prompt: "In 'She sang in the hall', 'in the hall' modifies…",
          options: ["sang", "she", "hall", "in"],
          correctIndex: 0,
          explanation: "It tells where she sang, modifying the verb (adverb phrase).",
        },
        {
          prompt: "'The house with the red roof' — the phrase 'with the red roof' is a(n)…",
          options: ["adjective phrase", "adverb phrase", "noun phrase", "verb phrase"],
          correctIndex: 0,
          explanation: "It modifies the noun 'house' (which house?).",
        },
        {
          prompt: "'They arrived after lunch' — 'after lunch' is a(n)…",
          options: ["adverb phrase", "adjective phrase", "noun phrase", "gerund phrase"],
          correctIndex: 0,
          explanation: "It tells when they arrived, modifying the verb (adverb phrase).",
        },
        {
          prompt: "An adjective phrase answers which questions?",
          options: ["which one? what kind?", "where? when?", "how? why?", "how many verbs?"],
          correctIndex: 0,
          explanation: "Adjective phrases answer which one? / what kind?",
        },
        {
          prompt: "An adverb phrase answers which questions?",
          options: ["where? when? how? why?", "which one?", "what kind?", "how many?"],
          correctIndex: 0,
          explanation: "Adverb phrases answer where? when? how? why? to what extent?",
        },
        {
          prompt: "The same prepositional phrase can be an adjective or adverb phrase depending on…",
          options: ["what it modifies", "its length", "its first letter", "the tense"],
          correctIndex: 0,
          explanation: "Its type depends on the word it describes.",
        },
        {
          prompt: "'A man of great courage spoke' — 'of great courage' modifies…",
          options: ["man", "spoke", "courage", "great"],
          correctIndex: 0,
          explanation: "It tells what kind of man, so it modifies the noun 'man'.",
        },
        {
          prompt: "'He is good at mathematics' — 'at mathematics' modifies…",
          options: ["the adjective good", "the verb is", "the noun he", "the noun mathematics"],
          correctIndex: 0,
          explanation: "It tells in what respect he is good, modifying the adjective 'good' (adverb phrase).",
        },
        {
          prompt: "An adjective phrase usually comes…",
          options: ["right after the noun it modifies", "at the start of the sentence", "after the verb only", "before the subject"],
          correctIndex: 0,
          explanation: "It typically follows the noun it describes.",
        },
        {
          prompt: "Which sentence has an adverb phrase?",
          options: ["We meet on Fridays.", "The bag on the chair is torn.", "The man in the coat left.", "A dog with spots barked."],
          correctIndex: 0,
          explanation: "'on Fridays' tells when we meet, modifying the verb.",
        },
        {
          prompt: "Which sentence has an adjective phrase?",
          options: ["The toys in the box are new.", "She waited by the gate.", "He runs in the morning.", "They sat under the tree."],
          correctIndex: 0,
          explanation: "'in the box' tells which toys, modifying the noun 'toys'.",
        },
        {
          prompt: "In 'Put it in the box', 'in the box' is a(n)…",
          options: ["adverb phrase", "adjective phrase", "noun phrase", "gerund"],
          correctIndex: 0,
          explanation: "It tells where to put it, modifying the verb 'put'.",
        },
        {
          prompt: "In 'The toys in the box are new', 'in the box' is a(n)…",
          options: ["adjective phrase", "adverb phrase", "verb phrase", "clause"],
          correctIndex: 0,
          explanation: "Here it tells which toys, modifying the noun 'toys'.",
        },
        {
          prompt: "To classify a prepositional phrase, first find…",
          options: ["the word it modifies", "the subject", "the tense", "the object only"],
          correctIndex: 0,
          explanation: "The word modified decides adjective vs adverb phrase.",
        },
        {
          prompt: "Which is true of every prepositional phrase?",
          options: ["it has no subject-verb pair", "it is a complete sentence", "it contains a main verb", "it starts with a noun"],
          correctIndex: 0,
          explanation: "A prepositional phrase is a phrase, so it has no subject-verb pair.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one sentence containing an adjective phrase and one containing an adverb phrase. Underline each phrase and name the word it modifies.",
          answerKey:
            "Adjective phrase e.g. 'The girl in the blue dress smiled.' (modifies 'girl'). Adverb phrase e.g. 'We left before dawn.' (modifies 'left'). Award 2 marks per correct, clearly-labelled sentence.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In 'The road to the village was muddy', the phrase 'to the village' is a(n)…",
          options: ["adjective phrase", "adverb phrase", "verb phrase", "noun clause"],
          correctIndex: 0,
          answerKey: "It tells which road, modifying the noun 'road', so it is an adjective phrase.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "For 'She hid the letter under the mattress', name the prepositional phrase, the word it modifies, and its type.",
          answerKey:
            "Phrase: 'under the mattress'; it modifies the verb 'hid' (hid where?); type: adverb phrase. Award a mark each for phrase, modified word, and type.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain, with the phrase 'in the garden', how the same prepositional phrase can be an adjective phrase in one sentence and an adverb phrase in another.",
          answerKey:
            "As an adjective phrase it modifies a noun, e.g. 'The flowers in the garden are red' (which flowers?). As an adverb phrase it modifies a verb, e.g. 'They played in the garden' (played where?). Award marks for both correct sentences and the reason (what it modifies).",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what an adjective phrase and an adverb phrase are, how each is built from a prepositional phrase, and how to tell them apart. Give two example sentences of each.",
          answerKey:
            "A strong answer states that both are prepositional phrases (preposition + object) acting as modifiers; adjective phrases modify a noun/pronoun (which one? what kind?), adverb phrases modify a verb/adjective/adverb (where? when? how? why?); and the type depends on the word modified. Award marks for both definitions, the deciding test, and two valid examples of each.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — San Jacinto College, ESOL 0382 Intermediate Grammar (Marceau), 8.2 Phrasal Verbs (https://human.libretexts.org/Courses/San_Jacinto_College/ESOL_0382_-_Intermediate_Grammar_(Marceau)/08:_Phrasal_Verbs_and_Prepositions/8.02:_Phrasal_Verbs)
      slug: "phrasal-verbs",
      title: "Phrasal Verbs",
      objective:
        "By the end of the topic, learners should be able to identify phrasal verbs (verb + particle), explain that their meaning is often idiomatic, and distinguish separable from inseparable phrasal verbs.",
      estimatedMinutes: 130,
      notes: `## What a phrasal verb is

**Phrasal verb** — a phrase made of a **verb + an adverbial particle or preposition** that together carry **one meaning**. The particle is a small word such as *up, down, in, out, on, off, over, across, away, back.*

- *ran across* — met by chance
- *broke down* — stopped working
- *get away* — escape
- *put off* — delay or postpone
- *turn on / turn off* — start / stop a device

The joined word after the verb is called a **particle**, not a preposition, when it is part of the verb's meaning.

## Idiomatic meaning

A phrasal verb is often **idiomatic**: its meaning is **not** the sum of its parts. *Break down* has nothing to do with breaking, and *give up* is not about giving. Because the meaning is unpredictable, phrasal verbs must be **learned as whole units.**

| Phrasal verb | Meaning | Example |
| --- | --- | --- |
| call off | cancel | They **called off** the match. |
| look after | take care of | She **looks after** her brother. |
| find out | discover | We **found out** the truth. |
| run out (of) | have none left | We **ran out of** fuel. |
| bring up | raise / mention | He **brought up** a new idea. |

## Separable and inseparable

- **Separable** phrasal verbs can be split by the object; a **pronoun** object must go in the middle:
  - *Turn off the light.* = *Turn the light off.* → *Turn **it** off.* (not *turn off it*)
- **Inseparable** phrasal verbs cannot be split; the object always follows the whole verb:
  - *We look after the baby.* → *We look after **it**.* (not *look it after*)

## Phrasal verb vs verb + prepositional phrase

The particle belongs to the **verb** (part of its meaning); a preposition belongs to its **object** (heads a phrase).

- *She **ran across** an old friend.* — phrasal verb (met by chance).
- *She ran **across the road**.* — ordinary verb + prepositional phrase (across the road = where she ran).

## Summary

- A phrasal verb = **verb + particle**, carrying one, often **idiomatic**, meaning.
- Learn each phrasal verb as a whole unit.
- Some are **separable** (turn it off), some **inseparable** (look after it).`,
      workedExample: `**Task.** Identify the phrasal verb, give its meaning, and say whether it is separable.

1. *The car **broke down** on the highway.*
2. *Please **turn off** the radio.*
3. *She **looks after** her grandmother.*

**Answers**

1. **broke down** = *stopped working* (idiomatic — not about breaking). It is **inseparable** in this use (no object between verb and particle).
2. **turn off** = *switch off*; **separable** — you can say *turn off the radio* or *turn the radio off*, and with a pronoun it must split: *turn it off.*
3. **looks after** = *takes care of*; **inseparable** — the object follows the whole verb: *looks after her* (not *looks her after*).

**Rule applied:** a phrasal verb's meaning is learned as a unit; separable ones can be split by the object (a pronoun must go in the middle), inseparable ones cannot.`,
      quiz: [
        {
          prompt: "A phrasal verb is made of a verb plus a(n)…",
          options: ["particle", "subject", "adjective", "conjunction"],
          correctIndex: 0,
          explanation: "Verb + particle (an adverb or preposition) makes a phrasal verb.",
        },
        {
          prompt: "The meaning of a phrasal verb is often…",
          options: ["idiomatic (not the sum of its parts)", "always literal", "the same as the verb alone", "impossible to learn"],
          correctIndex: 0,
          explanation: "Its meaning cannot usually be worked out from the separate words.",
        },
        {
          prompt: "'broke down' means…",
          options: ["stopped working", "smashed something", "went downstairs", "wrote down"],
          correctIndex: 0,
          explanation: "'broke down' = stopped working (idiomatic).",
        },
        {
          prompt: "'get away' means…",
          options: ["escape", "get closer", "give away", "wake up"],
          correctIndex: 0,
          explanation: "'get away' = escape.",
        },
        {
          prompt: "The small word attached to the verb in a phrasal verb is called a…",
          options: ["particle", "pronoun", "gerund", "clause"],
          correctIndex: 0,
          explanation: "When it is part of the verb's meaning, it is a particle.",
        },
        {
          prompt: "'call off' means…",
          options: ["cancel", "telephone", "shout", "name"],
          correctIndex: 0,
          explanation: "'call off' = cancel.",
        },
        {
          prompt: "'look after' means…",
          options: ["take care of", "search behind", "look later", "look up"],
          correctIndex: 0,
          explanation: "'look after' = take care of.",
        },
        {
          prompt: "A separable phrasal verb can be…",
          options: ["split by its object", "never split", "used without a verb", "only used in questions"],
          correctIndex: 0,
          explanation: "e.g. 'turn off the light' = 'turn the light off'.",
        },
        {
          prompt: "With a separable phrasal verb, a pronoun object must go…",
          options: ["between the verb and particle", "after the particle", "before the verb", "at the end only"],
          correctIndex: 0,
          explanation: "'turn it off' is correct; 'turn off it' is not.",
        },
        {
          prompt: "Which is correct for a separable phrasal verb with a pronoun?",
          options: ["Turn it off.", "Turn off it.", "Off turn it.", "It turn off."],
          correctIndex: 0,
          explanation: "The pronoun 'it' goes between verb and particle.",
        },
        {
          prompt: "An inseparable phrasal verb keeps its object…",
          options: ["after the whole verb", "between verb and particle", "before the verb", "in a separate clause"],
          correctIndex: 0,
          explanation: "e.g. 'look after it', not 'look it after'.",
        },
        {
          prompt: "'find out' means…",
          options: ["discover", "go outside", "find a way", "lose"],
          correctIndex: 0,
          explanation: "'find out' = discover.",
        },
        {
          prompt: "In 'She ran across an old friend', 'ran across' means…",
          options: ["met by chance", "ran quickly", "crossed the road", "ran away"],
          correctIndex: 0,
          explanation: "As a phrasal verb, 'ran across' = met by chance.",
        },
        {
          prompt: "In 'She ran across the road', 'across the road' is…",
          options: ["a prepositional phrase", "a phrasal verb", "a gerund", "a clause"],
          correctIndex: 0,
          explanation: "Here 'across the road' is a prepositional phrase (where she ran).",
        },
        {
          prompt: "'put off' most commonly means…",
          options: ["postpone", "wear", "put down", "switch on"],
          correctIndex: 0,
          explanation: "'put off' = delay or postpone.",
        },
        {
          prompt: "Because their meaning is unpredictable, phrasal verbs are best…",
          options: ["learned as whole units", "translated word for word", "avoided completely", "split into letters"],
          correctIndex: 0,
          explanation: "Learn each as a single unit of meaning.",
        },
        {
          prompt: "'run out of' means…",
          options: ["have none left", "exit quickly", "run outside", "run a race"],
          correctIndex: 0,
          explanation: "'run out of' = have none of something left.",
        },
        {
          prompt: "Which sentence uses a phrasal verb?",
          options: ["They called off the trip.", "They called the office.", "They walked to school.", "They are tall."],
          correctIndex: 0,
          explanation: "'called off' (cancelled) is a phrasal verb.",
        },
        {
          prompt: "'bring up' can mean…",
          options: ["raise or mention", "carry down", "bring back", "give up"],
          correctIndex: 0,
          explanation: "'bring up' = raise (a child) or mention (a topic).",
        },
        {
          prompt: "The particle in a phrasal verb belongs to the…",
          options: ["verb (its meaning)", "object", "subject", "adjective"],
          correctIndex: 0,
          explanation: "The particle is part of the verb's meaning, unlike a preposition which heads a phrase.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write two sentences, each using a different phrasal verb, and give the meaning of each phrasal verb.",
          answerKey:
            "Accept any two correct phrasal verbs used in sentences with accurate meanings, e.g. 'The plane took off on time' (departed), 'She gave up smoking' (stopped). Award 2 marks per correct sentence + meaning.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is correct with a separable phrasal verb and a pronoun?",
          options: [
            "Please switch it off.",
            "Please switch off it.",
            "Please off switch it.",
            "Please it switch off.",
          ],
          correctIndex: 0,
          answerKey: "A pronoun object goes between the verb and the particle: 'switch it off'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give the meaning of each phrasal verb: (a) call off (b) find out (c) look after.",
          answerKey:
            "(a) cancel; (b) discover; (c) take care of. Award a mark for each correct meaning.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between the phrasal verb 'ran across' and the verb + prepositional phrase 'ran across the road', giving the meaning of each.",
          answerKey:
            "'ran across' as a phrasal verb means 'met by chance' (the particle is part of the verb's meaning); 'ran across the road' is an ordinary verb plus a prepositional phrase telling where someone ran. Award marks for both meanings and the particle-vs-preposition point.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a phrasal verb is and why its meaning is often idiomatic. Describe the difference between separable and inseparable phrasal verbs, with an example of each.",
          answerKey:
            "A strong answer defines a phrasal verb (verb + particle, one meaning), explains that the meaning is idiomatic and so must be learned as a unit, and distinguishes separable (can be split; a pronoun goes in the middle, e.g. 'turn it off') from inseparable (object follows the whole verb, e.g. 'look after it'). Award marks for the definition, the idiomatic point, and both types with examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Successful College Composition (Crowther et al.), 5.1 Syntax (Part 2) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Successful_College_Composition_(Crowther_et_al.)/5:_Grammar/5.1:_Syntax_(Part_2))
      slug: "clauses",
      title: "Clauses: Independent, Dependent, Noun, Adjective and Adverb",
      objective:
        "By the end of the topic, learners should be able to distinguish independent from dependent clauses, and identify the three kinds of dependent clause — noun, adjective, and adverb — by the word that introduces each and the work it does.",
      estimatedMinutes: 160,
      notes: `## Clause basics

**Clause** — a group of words that has **both a subject and a verb.** There are two kinds:

- **Independent (main) clause** — expresses a **complete thought** and can **stand alone** as a sentence: *The sun set. / I enjoy sitting by the fire.*
- **Dependent (subordinate) clause** — has a subject and a verb but does **not** express a complete thought; it **cannot stand alone** and must attach to an independent clause: *When we get enough snow… / Because I was upset…*

Dependent clauses begin with a **signal word** — a subordinating conjunction (*after, although, as, because, before, if, since, unless, until, when, while*) or a relative pronoun (*who, whom, whose, which, that*).

## The three dependent clauses

A dependent clause is named for the job it does — as a **noun**, an **adjective**, or an **adverb**.

**1. Noun clause** — does a noun's job (subject or object). Introduced by *that, what, whoever, whether, why, how…*

- *What the doctor said* was important.* (subject)
- *The website says **that it might snow**.* (object)

**2. Adjective clause** (relative clause) — modifies a **noun**, telling *which one*. Introduced by a **relative pronoun**: *who, whom, whose, which, that* (or *when, where*).

- *The girl **who is sitting in the front** is new.*
- *Jill camped near a mine **that had been abandoned for fifty years**.*

**3. Adverb clause** — modifies the **verb** of the main clause, telling *when, where, why, how, or under what condition*. Introduced by a **subordinating conjunction**.

- ***After the meeting had finished***, we went to lunch.* (when)
- ***Unless she earns the money***, she must drop out.* (condition)

## Independent vs dependent — the test

Read the clause on its own. If it makes complete sense, it is **independent**; if it leaves you waiting for more, it is **dependent**.

| Clause | Stands alone? | Type |
| --- | --- | --- |
| We went to lunch | yes | independent |
| After the meeting had finished | no | dependent (adverb) |
| that had been abandoned | no | dependent (adjective) |
| whether it will rain | no | dependent (noun) |

## Summary

- Every clause has a **subject and a verb**.
- An **independent** clause stands alone; a **dependent** clause cannot.
- A dependent clause is a **noun**, **adjective**, or **adverb** clause, named for its job and marked by its introducing word.`,
      workedExample: `**Task.** For each dependent clause in bold, name it as a *noun*, *adjective*, or *adverb* clause and give the word it depends on or the job it does.

1. *The book **that you lent me** was excellent.*
2. ***Because the bridge was closed***, we took the ferry.*
3. *Nobody knows **why he left early**.*

**Answers**

1. **that you lent me** → *adjective clause*. Introduced by the relative pronoun *that*; it modifies the noun **book** (which book?).
2. **Because the bridge was closed** → *adverb clause*. Introduced by the subordinating conjunction *because*; it modifies the verb **took**, telling **why**.
3. **why he left early** → *noun clause*. It is the **object** of *knows* (knows what?), doing a noun's job.

**Rule applied:** name a dependent clause for the job it does — modifying a noun (adjective), modifying a verb (adverb), or filling a noun slot (noun clause).`,
      quiz: [
        {
          prompt: "Every clause must contain a…",
          options: ["subject and a verb", "preposition", "conjunction", "gerund"],
          correctIndex: 0,
          explanation: "A clause has both a subject and a verb.",
        },
        {
          prompt: "An independent clause…",
          options: ["can stand alone as a sentence", "cannot stand alone", "has no verb", "is a phrase"],
          correctIndex: 0,
          explanation: "It expresses a complete thought.",
        },
        {
          prompt: "A dependent clause…",
          options: ["cannot stand alone", "is always a full sentence", "has no subject", "has no verb"],
          correctIndex: 0,
          explanation: "It has a subject and verb but does not complete a thought.",
        },
        {
          prompt: "Which is an independent clause?",
          options: ["The sun set.", "When it rained", "Because I was late", "That she wrote"],
          correctIndex: 0,
          explanation: "'The sun set' is a complete thought.",
        },
        {
          prompt: "Which is a dependent clause?",
          options: ["Because I was upset", "The dog barked", "She smiled", "They arrived"],
          correctIndex: 0,
          explanation: "'Because I was upset' cannot stand alone.",
        },
        {
          prompt: "A noun clause does the job of a…",
          options: ["noun", "verb", "adjective", "preposition"],
          correctIndex: 0,
          explanation: "It can be a subject or object, like a noun.",
        },
        {
          prompt: "An adjective clause modifies a…",
          options: ["noun", "verb", "adverb", "conjunction"],
          correctIndex: 0,
          explanation: "An adjective (relative) clause describes a noun.",
        },
        {
          prompt: "An adverb clause modifies the…",
          options: ["verb of the main clause", "subject", "object of a preposition", "article"],
          correctIndex: 0,
          explanation: "It tells when, why, how, or under what condition.",
        },
        {
          prompt: "Adjective clauses are introduced by…",
          options: ["relative pronouns (who, which, that)", "coordinating conjunctions", "interjections", "articles"],
          correctIndex: 0,
          explanation: "Relative pronouns like who, which, that introduce adjective clauses.",
        },
        {
          prompt: "Adverb clauses are introduced by…",
          options: ["subordinating conjunctions", "relative pronouns", "prepositions", "gerunds"],
          correctIndex: 0,
          explanation: "e.g. after, because, if, when, unless.",
        },
        {
          prompt: "In 'The girl who is sitting in front is new', the adjective clause is…",
          options: ["who is sitting in front", "The girl", "is new", "in front"],
          correctIndex: 0,
          explanation: "It modifies 'girl' (which girl?).",
        },
        {
          prompt: "In 'After the meeting finished, we left', the adverb clause is…",
          options: ["After the meeting finished", "we left", "we", "left"],
          correctIndex: 0,
          explanation: "It tells when we left, modifying the verb.",
        },
        {
          prompt: "In 'The website says that it might snow', the noun clause is…",
          options: ["that it might snow", "The website", "says", "might"],
          correctIndex: 0,
          explanation: "It is the object of 'says' (says what?).",
        },
        {
          prompt: "The test for independence is whether the clause…",
          options: ["makes complete sense alone", "has a preposition", "is short", "starts with a capital"],
          correctIndex: 0,
          explanation: "Stands alone with complete sense → independent.",
        },
        {
          prompt: "'Unless she earns the money' is what kind of clause?",
          options: ["adverb (condition)", "adjective", "noun", "independent"],
          correctIndex: 0,
          explanation: "'Unless' introduces an adverb clause of condition.",
        },
        {
          prompt: "'What the doctor said' in 'What the doctor said was important' is a…",
          options: ["noun clause (subject)", "adjective clause", "adverb clause", "independent clause"],
          correctIndex: 0,
          explanation: "It is the subject, doing a noun's job.",
        },
        {
          prompt: "A relative pronoun that can introduce an adjective clause is…",
          options: ["which", "because", "although", "unless"],
          correctIndex: 0,
          explanation: "which/who/that introduce adjective clauses; the others are subordinating conjunctions.",
        },
        {
          prompt: "Which sentence contains an adverb clause?",
          options: ["We ate when the guests arrived.", "The car that I bought is red.", "That he lied is clear.", "The dog barked loudly."],
          correctIndex: 0,
          explanation: "'when the guests arrived' tells when we ate (adverb clause).",
        },
        {
          prompt: "A dependent clause is also called a…",
          options: ["subordinate clause", "main clause", "phrase", "sentence"],
          correctIndex: 0,
          explanation: "Dependent = subordinate.",
        },
        {
          prompt: "Which pairing is correct?",
          options: [
            "adjective clause — modifies a noun",
            "adverb clause — modifies a noun",
            "noun clause — modifies a verb",
            "adjective clause — modifies a verb",
          ],
          correctIndex: 0,
          explanation: "Adjective clauses modify nouns; adverb clauses modify verbs; noun clauses fill noun slots.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one independent clause and one dependent clause. Then join them into a complex sentence and underline the dependent clause.",
          answerKey:
            "Independent e.g. 'We stayed inside.' Dependent e.g. 'because it was raining.' Complex: 'We stayed inside because it was raining.' Award marks for a correct clause of each kind and a correctly joined complex sentence with the dependent clause underlined.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence contains an adjective clause?",
          options: [
            "The house that stood on the hill burned down.",
            "When the rain stopped, we left.",
            "That she won surprised no one.",
            "He ran quickly.",
          ],
          correctIndex: 0,
          answerKey: "'that stood on the hill' modifies the noun 'house', so it is an adjective clause.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Name the kind of dependent clause (noun, adjective, or adverb) in each: (a) 'the man who called you' (b) 'if you arrive early' (c) 'what you decide'.",
          answerKey:
            "(a) adjective clause (modifies 'man'); (b) adverb clause (condition); (c) noun clause. Award a mark per correct label.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between an independent and a dependent clause, and give the test for telling them apart with an example of each.",
          answerKey:
            "Both have a subject and verb; an independent clause expresses a complete thought and stands alone (e.g. 'The sun set'), while a dependent clause does not and cannot stand alone (e.g. 'because it was late'). The test: read it on its own — complete sense = independent. Award marks for the distinction, the test, and both examples.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the two kinds of clause and the three kinds of dependent clause. State what introduces each dependent clause and the job it does, with an example sentence for each.",
          answerKey:
            "A strong answer defines independent (stands alone) and dependent (cannot) clauses, then covers noun clauses (fill a noun slot; introduced by that/what/whether), adjective clauses (modify a noun; introduced by relative pronouns), and adverb clauses (modify a verb; introduced by subordinating conjunctions), each with a correct example. Award marks for the two clause types and the three dependent clauses with their signal words and examples.",
          marks: 5,
        },
      ],
    },
  ],
};
