import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 12,
// Semester Two, Period V: GRAMMAR — Review Vocabulary. CONTENTS: (1) Review
// vocabulary development and spelling rules; (2) Review Phrases and Clauses.
// Each top-level CONTENTS item is one topic.
export const englishLanguageG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Review of Vocabulary, Spelling Rules, Phrases and Clauses",
  summary:
    "Period V of the MoE Grade 12 English syllabus. Learners review vocabulary development and the main spelling rules, and revise phrases and clauses, telling independent clauses from dependent clauses.",
  topics: [
    {
      // source: LibreTexts — Writing for Success (Weaver et al.), 11.5 Spelling Rules (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(Weaver_et_al.)/11:_Diction_and_Spelling/11.5:_Spelling_Rules)
      slug: "review-vocabulary-and-spelling-rules",
      title: "Review of Vocabulary Development and Spelling Rules",
      objective:
        "By the end of the topic, learners should be able to apply the main spelling rules correctly and use strategies (reading carefully, mnemonics, the dictionary and a personal word list) to build and master their vocabulary.",
      estimatedMinutes: 120,
      notes: `## Why spelling matters

Correct spelling makes writing clear and credible. Most English spelling follows **rules**; learning the rules — and keeping a list of the words you get wrong — steadily improves both **spelling** and **vocabulary**.

## The main spelling rules

**1. I before E.**
*Write **i** before **e** except after **c**, or when pronounced "ay" as in "neighbor" or "weigh."*
- i before e: *achieve, alien, believe*
- except after c: *receive, ceiling*
- "ay" sound: *neighbor, weigh*

**2. Consonant + y → change y to i.**
When a word ends in a **consonant + y**, drop the **y** and add **i** before the ending.
- *happy → happier*, *cry → cried*

**3. Vowel + y → keep the y.**
When a word ends in a **vowel + y**, keep the **y** and add the ending.
- *delay → delayed*, *enjoy → enjoyed*
- exceptions: *day → daily*, *lay → laid*, *say → said*, *pay → paid*

**4. Ending begins with a vowel → drop silent e.**
When the ending begins with a **vowel** (*-able, -ence, -ing, -ity*), **drop** the final silent **e**.
- *write → writing*, *love → lovable*

**5. Ending begins with a consonant → keep silent e.**
When the ending begins with a **consonant** (*-less, -ment, -ly*), **keep** the final **e**.
- *hope → hopeless*, *manage → management*

**6. Consonant + o plurals → add -s.**
For many words ending in a **consonant + o**, add **-s** for the plural.
- *photo → photos*, *piano → pianos*

**7. Add -es after s, ch, sh, x.**
Words ending in **s, ch, sh, x** take **-es**.
- *church → churches*, *box → boxes*, *wish → wishes*

## Building vocabulary and mastering spelling

Eight strategies:

1. **Read carefully**, word by word — do not skim; notice each word's spelling.
2. Use **mnemonic devices** (memory sayings) to fix tricky spellings.
3. Use a **dictionary** (print or online) to check spelling and meaning — even professional writers do.
4. Use a **spell checker**, but know it will not catch every error.
5. Keep a **list of words you often misspell** and learn them.
6. Look over **corrected papers**, add misspelled words to your list, and **write each word 4–5 times**.
7. Test yourself with **flashcards**.
8. **Master the rules** above.

## Summary

- Learn the core rules: **i before e**; **consonant + y → i**; **vowel + y keeps y**; **drop silent e** before a vowel ending, **keep it** before a consonant ending; **-s** after consonant + o; **-es** after s/ch/sh/x.
- Grow your vocabulary and spelling by **reading carefully, using mnemonics and the dictionary, and keeping a personal word list**.`,
      workedExample: `**Task.** Add the ending to each word, applying the correct spelling rule.

1. *beauty* + *-ful*
2. *write* + *-ing*
3. *hope* + *-less*
4. *church* + plural
5. *recieve* — correct or wrong?

**Answers with the rule used**
1. *beauty* ends in **consonant + y**, so change y to i: **beautiful**.
2. *-ing* begins with a **vowel**, so drop the silent e: **writing**.
3. *-less* begins with a **consonant**, so keep the silent e: **hopeless**.
4. *church* ends in **ch**, so add **-es**: **churches**.
5. **Wrong** — "i before e except after c": after **c** it is **ei**, so the correct spelling is **receive**.

**Rule applied:** each word is spelled by matching it to a rule — the y→i change, dropping or keeping silent e by the ending's first letter, adding -es after ch, and i-before-e-except-after-c.`,
      quiz: [
        {
          prompt: "The 'i before e' rule says i comes before e except after…",
          options: ["c", "t", "s", "d"],
          correctIndex: 0,
          explanation: "Except after c (receive, ceiling).",
        },
        {
          prompt: "Which word correctly follows 'i before e except after c'?",
          options: ["receive", "recieve", "beleive", "acheive"],
          correctIndex: 0,
          explanation: "After c it is 'ei': receive.",
        },
        {
          prompt: "'Neighbor' and 'weigh' are exceptions because the vowels sound like…",
          options: ["ay", "ee", "oo", "ah"],
          correctIndex: 0,
          explanation: "The 'ay' sound takes 'ei'.",
        },
        {
          prompt: "When a word ends in a consonant + y, before most endings you…",
          options: ["change y to i", "keep the y", "drop the y entirely", "double the y"],
          correctIndex: 0,
          explanation: "happy → happier.",
        },
        {
          prompt: "'Cry' + '-ed' becomes…",
          options: ["cried", "cryed", "cryied", "creid"],
          correctIndex: 0,
          explanation: "Consonant + y → change y to i: cried.",
        },
        {
          prompt: "When a word ends in a vowel + y, you usually…",
          options: ["keep the y", "change y to i", "drop the y", "add an e"],
          correctIndex: 0,
          explanation: "delay → delayed.",
        },
        {
          prompt: "'Enjoy' + '-ed' becomes…",
          options: ["enjoyed", "enjoid", "enjoyied", "enjoed"],
          correctIndex: 0,
          explanation: "Vowel + y keeps the y: enjoyed.",
        },
        {
          prompt: "Which is an exception to the vowel + y rule?",
          options: ["pay → paid", "play → played", "stay → stayed", "enjoy → enjoyed"],
          correctIndex: 0,
          explanation: "pay → paid (irregular).",
        },
        {
          prompt: "Before an ending that begins with a vowel (like -ing), you…",
          options: ["drop the final silent e", "keep the final e", "double the e", "add another e"],
          correctIndex: 0,
          explanation: "write → writing.",
        },
        {
          prompt: "'Love' + '-able' becomes…",
          options: ["lovable", "loveable", "lovible", "loveabel"],
          correctIndex: 0,
          explanation: "Drop silent e before a vowel ending.",
        },
        {
          prompt: "Before an ending that begins with a consonant (like -less), you…",
          options: ["keep the final silent e", "drop the final e", "change e to i", "double the e"],
          correctIndex: 0,
          explanation: "hope → hopeless.",
        },
        {
          prompt: "'Manage' + '-ment' becomes…",
          options: ["management", "managment", "managiment", "manageament"],
          correctIndex: 0,
          explanation: "Keep silent e before a consonant ending.",
        },
        {
          prompt: "The plural of 'photo' is…",
          options: ["photos", "photoes", "photois", "photo's"],
          correctIndex: 0,
          explanation: "Many consonant + o words add -s.",
        },
        {
          prompt: "Words ending in s, ch, sh or x form the plural by adding…",
          options: ["-es", "-s", "-ies", "-en"],
          correctIndex: 0,
          explanation: "church → churches, box → boxes.",
        },
        {
          prompt: "The plural of 'box' is…",
          options: ["boxes", "boxs", "boxies", "box's"],
          correctIndex: 0,
          explanation: "Add -es after x.",
        },
        {
          prompt: "A memory saying that helps you spell a tricky word is a…",
          options: ["mnemonic device", "dictionary", "thesaurus", "spell checker"],
          correctIndex: 0,
          explanation: "Mnemonics aid memory.",
        },
        {
          prompt: "A reliable tool for checking both spelling and meaning is a…",
          options: ["dictionary", "calculator", "ruler", "map"],
          correctIndex: 0,
          explanation: "The dictionary gives spelling and meaning.",
        },
        {
          prompt: "A computer spell checker will…",
          options: ["help but not catch every error", "catch every error", "fix grammar perfectly", "replace the dictionary"],
          correctIndex: 0,
          explanation: "It is useful but limited.",
        },
        {
          prompt: "A good habit for words you often get wrong is to…",
          options: ["keep a personal list and practise them", "ignore them", "avoid writing them", "guess each time"],
          correctIndex: 0,
          explanation: "A word list builds mastery.",
        },
        {
          prompt: "Reading your work word by word (not skimming) helps you…",
          options: ["notice each word's spelling", "read faster", "skip hard words", "write less"],
          correctIndex: 0,
          explanation: "Careful reading catches spelling.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which word is spelled correctly?",
          options: ["receive", "recieve", "beleive", "freind"],
          correctIndex: 0,
          answerKey: "'i before e except after c' — after c it is 'ei', so 'receive' is correct.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the rule for adding an ending to a word that ends in a consonant + y, and give an example.",
          answerKey:
            "Drop/change the y to i before the ending. Example: happy → happier, cry → cried. Award a mark for the rule and a mark for an example.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "When do you drop a final silent e before an ending, and when do you keep it? Give one example of each.",
          answerKey:
            "Drop the silent e when the ending begins with a vowel (write → writing); keep it when the ending begins with a consonant (hope → hopeless). Award marks for the two cases with examples.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List three strategies for improving spelling and building vocabulary.",
          answerKey:
            "Any three of: read carefully word by word; use mnemonic devices; use a dictionary; use a spell checker; keep a personal list of misspelled words and practise them; use flashcards; master the rules. Award a mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the main spelling rules (i before e, consonant/vowel + y, dropping or keeping silent e, plurals with -s and -es) with examples, and describe how a student can steadily improve spelling and vocabulary.",
          answerKey:
            "A strong answer states and illustrates the rules (i before e except after c; consonant + y → i; vowel + y keeps y; drop silent e before a vowel ending, keep it before a consonant ending; consonant + o → -s; s/ch/sh/x → -es) and describes improvement strategies (careful reading, mnemonics, dictionary, spell checker, personal word list, flashcards). Award marks across rules and strategies.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — English Composition I (Lumen), 12.19 Phrases and Clauses (https://human.libretexts.org/Courses/Lumen_Learning/English_Composition_I_(Lumen)/12:_Grammar_Basics/12.19:_Phrases_and_Clauses)
      slug: "phrases-and-clauses",
      title: "Review of Phrases and Clauses",
      objective:
        "By the end of the topic, learners should be able to tell a phrase from a clause, distinguish independent from dependent clauses, and recognise the words that signal a dependent clause.",
      estimatedMinutes: 120,
      notes: `## Phrase vs clause

**Phrase** — a group of words that has a **partial subject or verb but not both**, or **neither** a subject nor a verb. A phrase does **not** make a complete statement on its own.

**Clause** — a group of words that has **both a subject and a verb**.

The key difference: a **clause has a subject + a verb**; a **phrase does not have both**.

## Kinds of phrase

| Phrase | Examples |
| --- | --- |
| Noun phrase | *the nice neighbor*, *my best friend* |
| Verbal phrase | *waiting for the rain to stop*, *have been sleeping* |
| Prepositional phrase | *after the storm*, *to the end of time* |

## Two kinds of clause

**Independent clause** — has a subject and a verb **and expresses a complete thought**; it can **stand alone** as a sentence.
- *The sun set.*
- *I enjoy sitting by the fireplace.*
- *This is the book I want to read next.*

**Dependent (subordinate) clause** — has a subject and a verb **but does not express a complete thought**; it **cannot stand alone** and must attach to an independent clause.
- *When we get enough snow …*
- *Because I was upset …*
- *Which book I want to read next …*

## How to tell them apart

Look for the words that **begin a dependent clause** — **subordinating conjunctions** and **relative pronouns**:

*after, although, as, as if, because, before, even if, even though, if, in order to, since, though, unless, until, whatever, when, whenever, whether, while*

- If a clause **starts with one of these** and cannot stand alone, it is **dependent**.
- Also test the **thought**: can the word group stand by itself and make sense? If yes → **independent**; if it leaves you waiting for more → **dependent**.

## Putting them together

- A dependent clause joined to an independent clause makes a **complete sentence**:
  - *Because I was upset* (dependent) **+** *I left early* (independent) → *Because I was upset, I left early.*

## Summary

- **Phrase** = no subject + verb pair; **clause** = has a subject and a verb.
- **Independent clause** = complete thought, stands alone.
- **Dependent clause** = subject + verb but **incomplete thought**; starts with a subordinating conjunction or relative pronoun and must join an independent clause.`,
      workedExample: `**Task.** For each word group, say whether it is a phrase, an independent clause, or a dependent clause.

1. *after the storm*
2. *The sun set.*
3. *Because I was upset*
4. *waiting for the rain to stop*
5. *I enjoy sitting by the fireplace*

**Answers with reasons**
1. **Phrase** (prepositional) — no subject + verb pair.
2. **Independent clause** — subject *sun* + verb *set*, complete thought, stands alone.
3. **Dependent clause** — subject *I* + verb *was*, but starts with *because* and leaves the thought unfinished.
4. **Phrase** (verbal) — *waiting* has no subject; not a subject + verb pair.
5. **Independent clause** — subject *I* + verb *enjoy*, complete thought.

**Rule applied:** first check for a subject + verb (clause) or not (phrase); then, for a clause, check whether it expresses a complete thought (independent) or starts with a subordinator and stays incomplete (dependent).`,
      quiz: [
        {
          prompt: "A clause always has a subject and a…",
          options: ["verb", "preposition", "comma", "adjective"],
          correctIndex: 0,
          explanation: "A clause = subject + verb.",
        },
        {
          prompt: "A phrase is a group of words that…",
          options: ["lacks a subject + verb pair", "always has a subject and a verb", "is a full sentence", "must stand alone"],
          correctIndex: 0,
          explanation: "A phrase does not have both a subject and a verb.",
        },
        {
          prompt: "'After the storm' is a…",
          options: ["prepositional phrase", "independent clause", "dependent clause", "complete sentence"],
          correctIndex: 0,
          explanation: "It has no subject + verb; it follows a preposition.",
        },
        {
          prompt: "'My best friend' is a…",
          options: ["noun phrase", "clause", "sentence", "verb phrase"],
          correctIndex: 0,
          explanation: "A noun phrase, with no verb.",
        },
        {
          prompt: "'Waiting for the rain to stop' is a…",
          options: ["verbal phrase", "independent clause", "dependent clause", "sentence"],
          correctIndex: 0,
          explanation: "It has a verbal but no subject + verb pair.",
        },
        {
          prompt: "An independent clause expresses a…",
          options: ["complete thought", "partial thought", "question only", "phrase"],
          correctIndex: 0,
          explanation: "It stands alone as a sentence.",
        },
        {
          prompt: "'The sun set.' is an example of a…",
          options: ["independent clause", "phrase", "dependent clause", "noun phrase"],
          correctIndex: 0,
          explanation: "Subject + verb, complete thought.",
        },
        {
          prompt: "A dependent clause has a subject and a verb but…",
          options: ["does not express a complete thought", "has no verb", "has no subject", "is always a phrase"],
          correctIndex: 0,
          explanation: "It cannot stand alone.",
        },
        {
          prompt: "'Because I was upset' is a…",
          options: ["dependent clause", "independent clause", "phrase", "complete sentence"],
          correctIndex: 0,
          explanation: "It starts with 'because' and is incomplete.",
        },
        {
          prompt: "Which word often begins a dependent clause?",
          options: ["because", "and", "the", "very"],
          correctIndex: 0,
          explanation: "'because' is a subordinating conjunction.",
        },
        {
          prompt: "Which of these signals a dependent clause?",
          options: ["although", "quickly", "table", "blue"],
          correctIndex: 0,
          explanation: "'although' is a subordinating conjunction.",
        },
        {
          prompt: "A dependent clause must be joined to a(n)…",
          options: ["independent clause", "phrase", "noun", "preposition"],
          correctIndex: 0,
          explanation: "It attaches to an independent clause.",
        },
        {
          prompt: "Which is an independent clause?",
          options: ["I enjoy sitting by the fireplace", "Because I was upset", "after the storm", "waiting for the rain"],
          correctIndex: 0,
          explanation: "Subject + verb + complete thought.",
        },
        {
          prompt: "The main test of an independent clause is whether it…",
          options: ["can stand alone and make sense", "contains a comma", "is long", "has an adjective"],
          correctIndex: 0,
          explanation: "A complete thought stands alone.",
        },
        {
          prompt: "'Until the sun sets' is a…",
          options: ["dependent clause", "independent clause", "noun phrase", "sentence"],
          correctIndex: 0,
          explanation: "'Until' makes the thought incomplete.",
        },
        {
          prompt: "Words like 'if', 'when' and 'while' are…",
          options: ["subordinating conjunctions", "nouns", "prepositions only", "adjectives"],
          correctIndex: 0,
          explanation: "They begin dependent clauses.",
        },
        {
          prompt: "'To the end of time' is a…",
          options: ["prepositional phrase", "clause", "sentence", "dependent clause"],
          correctIndex: 0,
          explanation: "A phrase following the preposition 'to'.",
        },
        {
          prompt: "Joining 'Because I was upset' to 'I left early' makes…",
          options: ["a complete sentence", "two phrases", "a noun phrase", "a dependent clause only"],
          correctIndex: 0,
          explanation: "Dependent + independent clause = full sentence.",
        },
        {
          prompt: "The simplest way to tell a clause from a phrase is to check for a…",
          options: ["subject + verb pair", "capital letter", "full stop", "long word"],
          correctIndex: 0,
          explanation: "A clause has both a subject and a verb.",
        },
        {
          prompt: "A clause beginning with a relative pronoun like 'which' is usually…",
          options: ["dependent", "independent", "a phrase", "a sentence"],
          correctIndex: 0,
          explanation: "'Which book I want to read next' is dependent.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which word group is a dependent clause?",
          options: [
            "Although it was raining",
            "It was raining",
            "in the rain",
            "the heavy rain",
          ],
          correctIndex: 0,
          answerKey: "'Although it was raining' has a subject and verb but is incomplete (starts with 'although'); 'It was raining' is independent; the others are phrases.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What is the difference between a phrase and a clause?",
          answerKey:
            "A clause has both a subject and a verb; a phrase does not have a subject + verb pair (it may have a partial subject or verb, or neither). Award marks for the distinction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define an independent clause and a dependent clause.",
          answerKey:
            "An independent clause has a subject and verb and expresses a complete thought, so it can stand alone. A dependent (subordinate) clause has a subject and verb but does not express a complete thought, so it cannot stand alone and must attach to an independent clause. Award a mark each.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List three words that commonly begin a dependent clause.",
          answerKey:
            "Any three of: after, although, as, because, before, even if, if, since, though, unless, until, when, whenever, whether, while (also relative pronouns such as which/that). Award a mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain phrases and clauses. Define a phrase and a clause, distinguish independent from dependent clauses, explain how to tell them apart, and show with an example how a dependent clause joins an independent clause to make a sentence.",
          answerKey:
            "A strong answer defines a phrase (no subject + verb pair) and a clause (has a subject and verb); distinguishes independent clauses (complete thought, stand alone) from dependent clauses (incomplete thought, begin with a subordinating conjunction or relative pronoun); explains the subject+verb and complete-thought tests; and gives an example such as 'Because I was upset, I left early.' Award marks across these points.",
          marks: 5,
        },
      ],
    },
  ],
};
