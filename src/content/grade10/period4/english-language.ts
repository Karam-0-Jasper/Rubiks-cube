import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester Two, Period IV: Grammar — Adjectives and Adverbs. CONTENTS:
// (a) Adjectives — (i) proper adjectives, (ii) compound adjectives;
// (b) Adverbs — (i) conjunctive adverbs. Taught here as three topics.
export const englishLanguageG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Adjectives and Adverbs",
  summary:
    "Period IV of the MoE Grade 10 English syllabus. Learners distinguish adjectives from other parts of speech and use proper and compound adjectives, recognise adverbs and the four questions they answer, and use conjunctive adverbs to link ideas — making writing vivid and precise.",
  topics: [
    {
      // source: LibreTexts — College of the Sequoias, Reading and Composition, 17.2 Adjectives and Adverbs (https://human.libretexts.org/Courses/College_of_the_Sequoias/Reading_and_Composition/17:_Grammar/17.02:_Adjectives_and_Adverbs)
      slug: "adjectives",
      title: "Adjectives: Proper and Compound",
      objective:
        "By the end of the topic, learners should be able to identify adjectives and the nouns or pronouns they modify, answer the adjective questions (what kind, which one, how many, how much), and use proper and compound adjectives with correct capitalisation and hyphenation.",
      estimatedMinutes: 150,
      notes: `## What an adjective is

**Adjective** — a word that **modifies a noun or a pronoun**, giving description or added meaning.

- *young, small, loud, short, fat, pretty, red, three, Liberian.*
- *The **loud** market; a **red** dress; **three** goats.*

Adjectives answer four questions about the noun:

| Question | Example adjective | In a phrase |
| --- | --- | --- |
| What kind? | red, wooden, brave | a **brave** soldier |
| Which one? | this, that, first | **that** book |
| How many? | three, several, many | **several** pupils |
| How much? | some, enough, little | **enough** water |

Many adjectives have recognisable endings: **-able, -al, -ful, -ic, -ive, -ish, -less, -ous** (*comfortable, national, careful, heroic, active, childish, careless, famous*).

**Placement.** An adjective usually comes **directly before** the noun (*a **tall** tree*), or **after a linking verb** as a predicate adjective (*The tree is **tall***).

## Proper adjectives

**Proper adjective** — an adjective **formed from a proper noun**, and, like the proper noun, it is **capitalised**.

| Proper noun | Proper adjective | Example |
| --- | --- | --- |
| Liberia | Liberian | **Liberian** culture |
| Africa | African | **African** music |
| Shakespeare | Shakespearean | a **Shakespearean** play |
| China | Chinese | **Chinese** tea |

Exception: when such a word takes a **non-literal** meaning it becomes lower case (*french fries, swiss cheese* — not really from France or Switzerland).

## Compound adjectives

**Compound adjective** — an adjective made of **two or more words** working together to modify one noun. When they come **before** the noun they are usually **hyphenated**.

- *a **well-known** singer; a **ten-year-old** boy; a **part-time** job; a **long-term** plan.*

The hyphen is dropped when the same words come **after** the noun:

- *We were in a **long-term** relationship.* (before the noun → hyphen)
- *That relationship was **long term**.* (after the noun → no hyphen)

## Summary

- An adjective modifies a **noun or pronoun** and answers *what kind? which one? how many? how much?*
- A **proper adjective** comes from a proper noun and is **capitalised** (Liberian, African).
- A **compound adjective** joins two or more words and is **hyphenated before the noun** (well-known, ten-year-old).`,
      workedExample: `**Task.** Underline each adjective, name the noun it modifies, and label any proper or compound adjective.

1. *The **brave Liberian** soldiers marched past.*
2. *She bought a **beautiful hand-woven** basket.*
3. *A **ten-year-old** girl won the **first** prize.*

**Answers**

1. *brave* (what kind?) and *Liberian* — both modify **soldiers**; *Liberian* is a **proper adjective** (from the proper noun *Liberia*, so it is capitalised).
2. *beautiful* (what kind?) and *hand-woven* — both modify **basket**; *hand-woven* is a **compound adjective** (two words, hyphenated before the noun).
3. *ten-year-old* — a **compound adjective** modifying **girl** (hyphenated before the noun); *first* (which one?) modifies **prize**.

**Rule applied:** each adjective is tied to a noun; proper adjectives are capitalised and compound adjectives before a noun are hyphenated.`,
      quiz: [
        {
          prompt: "An adjective modifies a…",
          options: ["noun or pronoun", "verb", "conjunction", "preposition"],
          correctIndex: 0,
          explanation: "Adjectives describe nouns and pronouns.",
        },
        {
          prompt: "Which word is the adjective in 'a loud market'?",
          options: ["loud", "market", "a", "in"],
          correctIndex: 0,
          explanation: "'Loud' describes the noun 'market'.",
        },
        {
          prompt: "Which question does an adjective NOT answer?",
          options: ["How? (in what way)", "What kind?", "Which one?", "How many?"],
          correctIndex: 0,
          explanation: "'How / in what way' is answered by adverbs, not adjectives.",
        },
        {
          prompt: "In 'three goats', the adjective 'three' answers…",
          options: ["how many?", "what kind?", "which one?", "how much?"],
          correctIndex: 0,
          explanation: "'Three' tells how many.",
        },
        {
          prompt: "A proper adjective is formed from a…",
          options: ["proper noun", "verb", "common noun", "pronoun"],
          correctIndex: 0,
          explanation: "Proper adjectives come from proper nouns, e.g. Liberia → Liberian.",
        },
        {
          prompt: "Which is a proper adjective?",
          options: ["African", "beautiful", "tall", "quick"],
          correctIndex: 0,
          explanation: "'African' comes from the proper noun 'Africa' and is capitalised.",
        },
        {
          prompt: "How should a proper adjective be written?",
          options: ["with a capital letter", "in lower case", "in italics", "hyphenated"],
          correctIndex: 0,
          explanation: "Proper adjectives keep the capital letter of the proper noun.",
        },
        {
          prompt: "Which is the proper adjective from 'China'?",
          options: ["Chinese", "Chinish", "Chinan", "Chinly"],
          correctIndex: 0,
          explanation: "China → Chinese.",
        },
        {
          prompt: "A compound adjective is made of…",
          options: ["two or more words", "a verb and a noun only", "one word", "a preposition"],
          correctIndex: 0,
          explanation: "A compound adjective joins two or more words to modify one noun.",
        },
        {
          prompt: "Which is a compound adjective?",
          options: ["well-known", "famous", "quiet", "red"],
          correctIndex: 0,
          explanation: "'well-known' is two words joined with a hyphen.",
        },
        {
          prompt: "Choose the correct form: 'a ___ boy'",
          options: ["ten-year-old", "ten year old", "tenyearold", "ten,year,old"],
          correctIndex: 0,
          explanation: "Before the noun, the compound adjective is hyphenated: ten-year-old.",
        },
        {
          prompt: "When is a compound adjective NOT hyphenated?",
          options: ["when it comes after the noun", "when it comes before the noun", "never", "when capitalised"],
          correctIndex: 0,
          explanation: "'That plan was long term' — after the noun, no hyphen.",
        },
        {
          prompt: "Which sentence uses the hyphen correctly?",
          options: ["She has a part-time job.", "She has a part time-job.", "She works part-time is her job.", "Her job is part-time. is hyphenated wrongly"],
          correctIndex: 0,
          explanation: "'part-time' before 'job' takes a hyphen.",
        },
        {
          prompt: "In 'The tree is tall', 'tall' is a…",
          options: ["predicate adjective", "proper adjective", "compound adjective", "adverb"],
          correctIndex: 0,
          explanation: "After the linking verb 'is', 'tall' is a predicate adjective describing 'tree'.",
        },
        {
          prompt: "Which ending is common on adjectives?",
          options: ["-ful", "-ly (on adverbs)", "-ed only", "-tion"],
          correctIndex: 0,
          explanation: "Endings like -ful, -ous, -ive, -al mark many adjectives (careful, famous).",
        },
        {
          prompt: "Which is the proper adjective from 'Shakespeare'?",
          options: ["Shakespearean", "Shakespeareful", "Shakespeareish", "Shakespearely"],
          correctIndex: 0,
          explanation: "Shakespeare → Shakespearean.",
        },
        {
          prompt: "In 'that book', the adjective 'that' answers…",
          options: ["which one?", "how many?", "what kind?", "how much?"],
          correctIndex: 0,
          explanation: "'That' points out which one.",
        },
        {
          prompt: "Why is 'french' lower case in 'french fries'?",
          options: ["it has a non-literal meaning", "it is a spelling error", "adjectives are never capitalised", "it is a compound adjective"],
          correctIndex: 0,
          explanation: "The fries are not literally from France, so the word is lower case.",
        },
        {
          prompt: "Which phrase has a compound adjective before the noun?",
          options: ["a well-behaved class", "a class that behaves", "the class is well behaved", "behaving very well"],
          correctIndex: 0,
          explanation: "'well-behaved' is hyphenated before the noun 'class'.",
        },
        {
          prompt: "Adjectives usually come directly…",
          options: ["before the noun they modify", "before a verb", "at the end of a sentence", "before a conjunction"],
          correctIndex: 0,
          explanation: "An adjective typically sits just before its noun, or after a linking verb.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one sentence containing a proper adjective and one containing a compound adjective. Underline each and circle the noun it modifies.",
          answerKey:
            "Proper adjective sentence, e.g. 'We enjoyed Liberian food.' (Liberian → food). Compound adjective sentence, e.g. 'A well-known writer visited.' (well-known → writer). Award 2 marks per correct, clearly-labelled sentence; deduct for a missing capital or hyphen.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is punctuated correctly?",
          options: [
            "She adopted a three-legged dog.",
            "She adopted a three legged-dog.",
            "She adopted a threelegged dog.",
            "She adopted a three legged dog.",
          ],
          correctIndex: 0,
          answerKey: "The compound adjective 'three-legged' is hyphenated before the noun 'dog'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Form the proper adjective from each proper noun and use it in a phrase: (a) Nigeria (b) Europe.",
          answerKey:
            "(a) Nigerian, e.g. 'Nigerian film'; (b) European, e.g. 'European history'. Award a mark per correct, capitalised proper adjective used in a phrase.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the hyphen rule for compound adjectives, using 'long-term' before and after a noun.",
          answerKey:
            "A compound adjective is hyphenated before the noun ('a long-term plan') but not after the noun ('the plan is long term'). Award marks for stating the rule and both correct examples.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what an adjective is and the four questions it answers. Then describe proper and compound adjectives, giving two examples of each and the capitalisation/hyphen rule for each.",
          answerKey:
            "A strong answer defines an adjective (modifies a noun/pronoun) and lists the four questions (what kind? which one? how many? how much?). It defines proper adjectives (from proper nouns, capitalised) with two examples, and compound adjectives (two+ words, hyphenated before the noun) with two examples and the after-the-noun exception. Award marks for the definition, the four questions, and both adjective types with rules and examples.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Coalinga College, College Writing and Beyond, 3.1.4 Adverbs (https://human.libretexts.org/Courses/Coalinga_College/College_Writing_and_Beyond/03:_Part_III-_Grammar_and_Mechanics/3.01:_Parts_of_Speech/3.1.04:_Adverbs)
      slug: "adverbs",
      title: "Adverbs and Their Uses",
      objective:
        "By the end of the topic, learners should be able to identify adverbs, name what each modifies (verb, adjective or another adverb), answer the four adverb questions, and form adverbs from adjectives with -ly.",
      estimatedMinutes: 150,
      notes: `## What an adverb is

**Adverb** — a modifier that brings detail to a sentence by describing a **verb**, an **adjective**, or **another adverb** (and sometimes a whole clause).

- Modifies a **verb:** *She sang **beautifully**.* (sang how?)
- Modifies an **adjective:** *The soup is **very** hot.* (how hot?)
- Modifies another **adverb:** *He ran **quite** quickly.* (how quickly?)

## The four questions adverbs answer

| Question | Example | Adverb |
| --- | --- | --- |
| When? | Tomorrow, the storm will quit. | **Tomorrow** |
| Where? | The class is held **here** today. | **here** |
| How? (in what way) | She works **carefully**. | **carefully** |
| To what extent? / How often? | Students change majors **frequently**. | **frequently** |

## Forming adverbs from adjectives

Many adverbs are formed by adding **-ly** to an adjective: *beautiful → beautifully, strange → strangely, clever → cleverly, respectful → respectfully.*

**Warning — the -ly test is not reliable both ways:**

- Some **adjectives** also end in -ly: *friendly, lovely, lonely* (these describe nouns, so they are adjectives, not adverbs).
- Many common adverbs do **not** end in -ly: *always, never, very, well, again, almost, here, there, now, often, seldom.* The most common adverb of all is **not**.

## Placement

Adverbs are flexible; their position can shift emphasis without changing the basic meaning:

- *Originally, the series had three films.*
- *The series originally had three films.*

## Adjective or adverb? A decision rule

Decide which word is being modified, then choose the form:

- Modifying a **noun** → use the **adjective**: *a **quick** runner.*
- Modifying a **verb/adjective/adverb** → use the **adverb**: *runs **quickly**.*

A frequent error is using an adjective where an adverb is needed: ✗ *She sings **beautiful*** → ✓ *She sings **beautifully**.*

## Summary

- An adverb modifies a **verb, adjective, or another adverb**.
- It answers **when? where? how? to what extent?**
- Many adverbs come from adjectives + **-ly**, but not all -ly words are adverbs and not all adverbs end in -ly.`,
      workedExample: `**Task.** Underline each adverb, state what it modifies, and say which question it answers.

1. *The soldiers marched **proudly**.*
2. *The tea is **too** sweet.*
3. *She **almost** always arrives **early**.*

**Answers**

1. *proudly* — modifies the verb **marched**; answers **how?** (in what way). Formed from the adjective *proud* + -ly.
2. *too* — modifies the adjective **sweet**; answers **to what extent?**
3. *almost* — modifies the adverb **always** (to what extent); *always* modifies the verb **arrives** (how often); *early* modifies **arrives** (when?).

**Rule applied:** each adverb is tied to the verb, adjective, or adverb it describes, and answers when/where/how/to what extent.`,
      quiz: [
        {
          prompt: "An adverb can modify all of these EXCEPT a…",
          options: ["noun", "verb", "adjective", "another adverb"],
          correctIndex: 0,
          explanation: "Nouns are modified by adjectives; adverbs modify verbs, adjectives and adverbs.",
        },
        {
          prompt: "In 'She sang beautifully', the adverb modifies…",
          options: ["the verb sang", "the noun she", "an adjective", "a preposition"],
          correctIndex: 0,
          explanation: "'beautifully' tells how she sang.",
        },
        {
          prompt: "In 'very hot', the adverb 'very' modifies…",
          options: ["the adjective hot", "a verb", "a noun", "another adverb"],
          correctIndex: 0,
          explanation: "'very' describes the adjective 'hot' (to what extent).",
        },
        {
          prompt: "Which question do adverbs answer?",
          options: ["When?", "What kind?", "Which one?", "How many?"],
          correctIndex: 0,
          explanation: "Adverbs answer when, where, how, and to what extent.",
        },
        {
          prompt: "In 'The class is held here', 'here' answers…",
          options: ["where?", "when?", "how?", "how many?"],
          correctIndex: 0,
          explanation: "'here' tells where.",
        },
        {
          prompt: "Many adverbs are formed by adding ___ to an adjective.",
          options: ["-ly", "-ed", "-ing", "-est"],
          correctIndex: 0,
          explanation: "clever → cleverly, strange → strangely.",
        },
        {
          prompt: "Which word is an adjective even though it ends in -ly?",
          options: ["friendly", "quickly", "slowly", "loudly"],
          correctIndex: 0,
          explanation: "'friendly' describes a noun ('a friendly dog'), so it is an adjective.",
        },
        {
          prompt: "Which adverb does NOT end in -ly?",
          options: ["never", "quickly", "loudly", "strangely"],
          correctIndex: 0,
          explanation: "'never' is a common adverb without -ly.",
        },
        {
          prompt: "The most common adverb in English is…",
          options: ["not", "very", "well", "here"],
          correctIndex: 0,
          explanation: "'not' is the most commonly used adverb.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["She sings beautifully.", "She sings beautiful.", "She sing beautifully.", "She beautifully sing."],
          correctIndex: 0,
          explanation: "The verb 'sings' needs the adverb 'beautifully', not the adjective.",
        },
        {
          prompt: "In 'He ran quite quickly', 'quite' modifies…",
          options: ["the adverb quickly", "the verb ran", "a noun", "an adjective"],
          correctIndex: 0,
          explanation: "'quite' modifies the adverb 'quickly' (to what extent).",
        },
        {
          prompt: "In 'Students change majors frequently', 'frequently' answers…",
          options: ["how often?", "where?", "what kind?", "which one?"],
          correctIndex: 0,
          explanation: "'frequently' tells how often (to what extent).",
        },
        {
          prompt: "Which is the adverb form of 'careful'?",
          options: ["carefully", "carefuller", "carefulness", "careful"],
          correctIndex: 0,
          explanation: "careful + -ly = carefully.",
        },
        {
          prompt: "Choose the correct word: 'Drive ___ on wet roads.'",
          options: ["carefully", "careful", "carefulness", "carefuller"],
          correctIndex: 0,
          explanation: "The verb 'drive' needs the adverb 'carefully'.",
        },
        {
          prompt: "Which sentence uses an adverb to modify an adjective?",
          options: ["The film was extremely long.", "She runs fast.", "They arrived late.", "He spoke softly."],
          correctIndex: 0,
          explanation: "'extremely' modifies the adjective 'long'.",
        },
        {
          prompt: "Adverb placement mainly affects…",
          options: ["emphasis", "the subject", "the tense", "spelling"],
          correctIndex: 0,
          explanation: "Moving an adverb shifts emphasis without changing the basic meaning.",
        },
        {
          prompt: "To decide between adjective and adverb, first find…",
          options: ["the word being modified", "the subject", "the object", "the tense"],
          correctIndex: 0,
          explanation: "If it modifies a noun use an adjective; a verb/adjective/adverb needs an adverb.",
        },
        {
          prompt: "Which sentence has an adjective where an adverb is needed?",
          options: ["He drives careless.", "He drives carelessly.", "He is careless.", "He is a careless driver."],
          correctIndex: 0,
          explanation: "The verb 'drives' needs the adverb 'carelessly', not 'careless'.",
        },
        {
          prompt: "In 'Tomorrow the storm will quit', 'Tomorrow' answers…",
          options: ["when?", "where?", "how?", "how much?"],
          correctIndex: 0,
          explanation: "'Tomorrow' tells when.",
        },
        {
          prompt: "Which word is an adverb here: 'He almost finished.'?",
          options: ["almost", "he", "finished", "none"],
          correctIndex: 0,
          explanation: "'almost' modifies the verb 'finished' (to what extent).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write three sentences: one with an adverb modifying a verb, one modifying an adjective, and one modifying another adverb. Underline the adverb in each.",
          answerKey:
            "Verb: e.g. 'She walks slowly.' Adjective: e.g. 'It is very cold.' Adverb: e.g. 'He works too slowly.' Award a mark per correct, clearly-labelled sentence, plus a mark for all three adverbs correctly underlined.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the adverb correctly?",
          options: [
            "The team played well.",
            "The team played good.",
            "The team play well.",
            "The team well played.",
          ],
          correctIndex: 0,
          answerKey: "'well' is the adverb modifying 'played'; 'good' is an adjective.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Form adverbs from these adjectives: (a) quick (b) happy (c) careful.",
          answerKey:
            "(a) quickly; (b) happily (y to i, add -ly); (c) carefully. Award a mark for each correct adverb.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain why the -ly test cannot always identify an adverb, with one example of each exception.",
          answerKey:
            "Some -ly words are adjectives (e.g. 'friendly', 'lovely' — they describe nouns), and many adverbs have no -ly (e.g. 'never', 'very', 'well'). Award marks for stating both exceptions with a correct example each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what an adverb does and the four questions it answers. Describe how adverbs are formed from adjectives and give a rule for choosing between an adjective and an adverb, with examples.",
          answerKey:
            "A strong answer states that an adverb modifies a verb, adjective or another adverb and answers when? where? how? to what extent?; explains -ly formation with the two caveats (not all -ly words are adverbs; not all adverbs end in -ly); and gives the rule (noun → adjective; verb/adjective/adverb → adverb) with a correct example such as 'She sings beautifully' vs 'beautiful'. Award marks for the definition, four questions, formation, and the decision rule.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Nashville State Community College, Academic Writing for ESL Students, 3.13 Coordinating Conjunctions and Conjunctive Adverbs (https://human.libretexts.org/Courses/Nashville_State_Community_College/Academic_Writing_for_ESL_Students/03:_The_Logical_Order_Essay/3.13:_Coordinating_Conjunctions_and_Conjunctive_Adverbs)
      slug: "conjunctive-adverbs",
      title: "Conjunctive Adverbs",
      objective:
        "By the end of the topic, learners should be able to identify conjunctive adverbs, use them to join two independent clauses with a semicolon and a following comma, and choose the right one for the relationship between ideas.",
      estimatedMinutes: 130,
      notes: `## What a conjunctive adverb is

**Conjunctive adverb** — an adverb used to show a **relationship between two independent clauses** (two complete sentences). It signals how the second idea connects to the first: addition, contrast, result, and so on.

Common conjunctive adverbs: **however, therefore, moreover, furthermore, accordingly, consequently, nevertheless, otherwise, meanwhile, besides, thus, instead, similarly, indeed.**

## Punctuation — the key rule

When a conjunctive adverb joins two independent clauses, put a **semicolon (;) before** it and a **comma (,) after** it.

**Clause 1 ; conjunctive adverb , Clause 2.**

- *I always brush my teeth**; therefore,** I have no cavities.*
- *The rain fell heavily**; however,** the match continued.*
- *She studied hard**; consequently,** she passed.*

Using only a comma here creates a **comma splice** (an error): ✗ *It was late, however, we kept working.*

## Choosing the right one

| Relationship | Conjunctive adverbs |
| --- | --- |
| Addition | moreover, furthermore, besides, also |
| Contrast | however, nevertheless, instead, on the other hand |
| Result / cause | therefore, consequently, accordingly, thus |
| Time | meanwhile, then, afterward |
| Similarity | similarly, likewise |

## Conjunctive adverb vs coordinating conjunction

- A **coordinating conjunction** (and, but, so, or…) joins two clauses with a **comma before** it: *It was late**, but** we kept working.*
- A **conjunctive adverb** joins them with a **semicolon before** and a **comma after**: *It was late**; however,** we kept working.*

A conjunctive adverb can also sit inside one clause, set off by commas: *We kept working, **however**, until midnight.*

## Summary

- A conjunctive adverb links **two independent clauses** and shows their relationship.
- Punctuate it: **; before, , after.**
- Choose it by meaning — *however* (contrast), *therefore* (result), *moreover* (addition).`,
      workedExample: `**Task.** Join each pair of independent clauses with a suitable conjunctive adverb, punctuated correctly.

1. *The road was flooded. We found another route.*
2. *He trained every day. He won the race.*
3. *The book is long. It is worth reading.*

**Answers**

1. *The road was flooded**; therefore,** we found another route.* — result (*therefore*).
2. *He trained every day**; consequently,** he won the race.* — result (*consequently*).
3. *The book is long**; however,** it is worth reading.* — contrast (*however*).

**Rule applied:** each conjunctive adverb joins two complete sentences with a **semicolon before** and a **comma after**, and its meaning fits the relationship between the ideas.`,
      quiz: [
        {
          prompt: "A conjunctive adverb shows a relationship between two…",
          options: ["independent clauses", "nouns", "adjectives", "prepositions"],
          correctIndex: 0,
          explanation: "It links two complete sentences and signals how they relate.",
        },
        {
          prompt: "Which is a conjunctive adverb?",
          options: ["however", "and", "but", "or"],
          correctIndex: 0,
          explanation: "'however' is a conjunctive adverb; the others are coordinating conjunctions.",
        },
        {
          prompt: "Before a conjunctive adverb joining two clauses, use a…",
          options: ["semicolon", "comma", "full stop", "colon"],
          correctIndex: 0,
          explanation: "The rule is semicolon before, comma after.",
        },
        {
          prompt: "After a conjunctive adverb joining two clauses, use a…",
          options: ["comma", "semicolon", "full stop", "dash"],
          correctIndex: 0,
          explanation: "A comma follows the conjunctive adverb.",
        },
        {
          prompt: "Which sentence is punctuated correctly?",
          options: [
            "I studied hard; therefore, I passed.",
            "I studied hard, therefore, I passed.",
            "I studied hard therefore I passed.",
            "I studied hard: therefore I passed.",
          ],
          correctIndex: 0,
          explanation: "Semicolon before 'therefore', comma after.",
        },
        {
          prompt: "Using only a comma before a conjunctive adverb joining two clauses creates a…",
          options: ["comma splice", "fragment", "run-on modal", "gerund"],
          correctIndex: 0,
          explanation: "A comma alone between two independent clauses is a comma splice.",
        },
        {
          prompt: "Which conjunctive adverb shows contrast?",
          options: ["however", "therefore", "moreover", "consequently"],
          correctIndex: 0,
          explanation: "'however' signals contrast.",
        },
        {
          prompt: "Which conjunctive adverb shows result?",
          options: ["therefore", "however", "nevertheless", "instead"],
          correctIndex: 0,
          explanation: "'therefore' signals a result.",
        },
        {
          prompt: "Which conjunctive adverb shows addition?",
          options: ["moreover", "however", "instead", "otherwise"],
          correctIndex: 0,
          explanation: "'moreover' adds a further point.",
        },
        {
          prompt: "How does a coordinating conjunction differ in punctuation from a conjunctive adverb?",
          options: [
            "comma before it, no semicolon",
            "semicolon before it",
            "no punctuation at all",
            "colon before it",
          ],
          correctIndex: 0,
          explanation: "A coordinating conjunction (but, so) takes a comma before it, not a semicolon.",
        },
        {
          prompt: "Choose the best conjunctive adverb: 'It was raining; ___, the game continued.'",
          options: ["however", "therefore", "moreover", "consequently"],
          correctIndex: 0,
          explanation: "Contrast between rain and continuing calls for 'however'.",
        },
        {
          prompt: "Choose the best conjunctive adverb: 'She missed the bus; ___, she was late.'",
          options: ["consequently", "however", "moreover", "similarly"],
          correctIndex: 0,
          explanation: "A result calls for 'consequently'.",
        },
        {
          prompt: "Which sentence has a punctuation error?",
          options: [
            "He was tired, however, he kept going.",
            "He was tired; however, he kept going.",
            "He was tired. However, he kept going.",
            "He was tired; nevertheless, he kept going.",
          ],
          correctIndex: 0,
          explanation: "A comma before 'however' joining two clauses is a comma splice.",
        },
        {
          prompt: "'nevertheless' signals…",
          options: ["contrast", "addition", "time", "similarity"],
          correctIndex: 0,
          explanation: "'nevertheless' expresses contrast (in spite of).",
        },
        {
          prompt: "'meanwhile' signals a relationship of…",
          options: ["time", "result", "addition", "contrast"],
          correctIndex: 0,
          explanation: "'meanwhile' relates events in time.",
        },
        {
          prompt: "A conjunctive adverb set inside one clause is…",
          options: ["set off by commas", "never punctuated", "always capitalised", "hyphenated"],
          correctIndex: 0,
          explanation: "e.g. 'We kept working, however, until midnight.'",
        },
        {
          prompt: "Which is NOT a conjunctive adverb?",
          options: ["because", "therefore", "however", "moreover"],
          correctIndex: 0,
          explanation: "'because' is a subordinating conjunction, not a conjunctive adverb.",
        },
        {
          prompt: "Choose the best conjunctive adverb: 'The plan is costly; ___, it is risky.'",
          options: ["moreover", "however", "therefore", "instead"],
          correctIndex: 0,
          explanation: "Adding a second drawback calls for 'moreover'.",
        },
        {
          prompt: "'similarly' signals…",
          options: ["a likeness between ideas", "a contrast", "a result", "a time order"],
          correctIndex: 0,
          explanation: "'similarly' shows the ideas are alike.",
        },
        {
          prompt: "Which correctly joins two clauses with a conjunctive adverb?",
          options: [
            "We saved money; consequently, we bought the land.",
            "We saved money consequently we bought the land.",
            "We saved money, consequently we bought the land.",
            "We saved money consequently, we bought the land.",
          ],
          correctIndex: 0,
          explanation: "Semicolon before 'consequently', comma after.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Join these two sentences with a conjunctive adverb, punctuated correctly: 'The shop was closed. We went home.'",
          answerKey:
            "Expected form: 'The shop was closed; therefore, we went home.' (or 'consequently'). Full marks for a suitable conjunctive adverb with a semicolon before and a comma after.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is punctuated correctly?",
          options: [
            "The test was hard; nevertheless, she passed.",
            "The test was hard, nevertheless she passed.",
            "The test was hard nevertheless, she passed.",
            "The test was hard: nevertheless she passed.",
          ],
          correctIndex: 0,
          answerKey: "Semicolon before 'nevertheless', comma after.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the comma splice: 'It was late, however, we kept working.'",
          answerKey:
            "Expected: 'It was late; however, we kept working.' Change the first comma to a semicolon. Full marks for the semicolon-before, comma-after pattern.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give one conjunctive adverb for each relationship and use it in a sentence: (a) contrast (b) result.",
          answerKey:
            "(a) contrast, e.g. 'It rained; however, we went out.' (b) result, e.g. 'He trained hard; therefore, he won.' Award a mark per correct adverb used with correct punctuation.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a conjunctive adverb is and how it is punctuated when joining two independent clauses. Contrast it with a coordinating conjunction, and give two example sentences of your own.",
          answerKey:
            "A strong answer defines a conjunctive adverb (links two independent clauses, shows their relationship), states the punctuation (semicolon before, comma after), contrasts it with a coordinating conjunction (comma before, e.g. 'but'), and gives two correctly punctuated examples. Award marks for the definition, punctuation rule, the contrast, and two valid examples.",
          marks: 5,
        },
      ],
    },
  ],
};
