import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester Two, Period IV: Grammar — Adjectives and Adverbs.
export const englishLanguageG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Adjectives and Adverbs",
  summary:
    "Period IV of the MoE Grade 10 English syllabus. Learners identify adjectives and the nouns they describe, form the degrees of comparison, recognise adverbs and the words they modify, and use adjectives and adverbs correctly to make writing vivid and precise.",
  topics: [
    {
      slug: "adjectives",
      title: "Adjectives and Their Degrees of Comparison",
      objective:
        "By the end of the topic, learners should be able to identify adjectives and the nouns or pronouns they describe, name the kinds of adjective, and form and use the comparative and superlative degrees correctly.",
      estimatedMinutes: 160,
      notes: `## What an adjective does

An **adjective** is a word that **describes or modifies a noun or a pronoun**. It adds information, answering one of these questions about the noun: *what kind? which one? how many? whose?*

- *a **tall** boy* — what kind?
- ***this** book* — which one?
- ***three** oranges* — how many?
- ***her** bag* — whose?

An adjective can stand in two positions. When it comes **directly before** the noun it is called **attributive**: *a **red** car, a **kind** teacher*. When it comes **after a linking verb** (is, seems, became, looks…) and describes the subject, it is called **predicative**: *the car is **red**; the teacher seems **kind***.

## The kinds of adjective

1. **Descriptive (quality) adjectives** tell what kind: *kind, brave, wooden, dirty, enormous*.
2. **Proper adjectives** are formed from proper nouns and take a capital letter: *Liberian rice, African history, Islamic art*.
3. **Quantitative adjectives** tell how much or how many: *some, little, much, enough, several*.
4. **Numeral adjectives** give a number or order: *three mangoes (cardinal), the first prize (ordinal)*.
5. **Demonstrative adjectives** point out which: *this, that, these, those* — ***this** house, **those** girls*.
6. **Possessive adjectives** show ownership: *my, your, his, her, its, our, their*.
7. **Interrogative adjectives** ask a question before a noun: *which, what, whose* — ***Which** book?*
8. **Articles** — *a, an, the* — are the commonest adjectives of all. *A / an* (the **indefinite** articles) point to any one member of a class (*a book, an egg*); *the* (the **definite** article) points to a particular one (*the book on my desk*). Use *an* before a vowel **sound** (*an hour, an honest man*) and *a* before a consonant sound (*a university, a European*).

## The order of adjectives

When two or more adjectives describe the same noun, English follows a natural order: **opinion → size → age → shape → colour → origin → material → purpose**. We say *a **beautiful large old round brown wooden** table*, not *a wooden brown round old large beautiful table*. Learners rarely need the full list, but they should feel that *a nice new shirt* sounds right while *a new nice shirt* does not.

## The degrees of comparison

Adjectives change form to **compare**. There are three degrees:

- **Positive** — the plain form, describing one thing: *tall*.
- **Comparative** — compares **two** things: *taller*.
- **Superlative** — compares **three or more**: *tallest*.

### Forming the degrees

| Rule | Positive | Comparative | Superlative |
| --- | --- | --- | --- |
| short words: add -er / -est | tall | taller | tallest |
| ending in -e: add -r / -st | large | larger | largest |
| consonant + y → i | happy | happier | happiest |
| short vowel + consonant: double it | big | bigger | biggest |
| long words: use more / most | beautiful | more beautiful | most beautiful |

Note that the superlative usually takes **the** before it: *the tallest boy, the most careful driver*.

### Comparing things that are equal

To show two things are the **same**, use **as … as**: *Kou is **as tall as** Musu.* To show they are not, use **not as … as**: *This road is **not as busy as** that one.*

### Irregular comparisons

A few very common adjectives do not follow the rules and must be learned:

| Positive | Comparative | Superlative |
| --- | --- | --- |
| good | better | best |
| bad | worse | worst |
| little | less | least |
| many / much | more | most |
| far | farther / further | farthest / furthest |

## Common errors

- **Double comparison** — never use *-er/-est* and *more/most* together: ✗ *more taller*, ✗ *most cleverest* → ✓ *taller*, *cleverest*.
- **Wrong degree for the number compared** — use the **comparative** for two, the **superlative** for three or more: *the taller **of the two***, *the tallest **in the class***.
- **Wrong article** — ✗ *a apple, a hour* → ✓ *an apple, an hour* (go by the sound, not the spelling).`,
      workedExample: `**Task.** For each sentence, name the adjective and the noun it describes, and give its degree of comparison; then correct any error.

1. *Musu is the **cleverest** girl in the class.*
2. *This mango is **sweeter** than that one.*
3. *He is the **more tallest** boy in the team.*

**Answers**

1. **cleverest** describes the noun **girl**. It is the **superlative** degree (comparing her with all the others in the class — three or more). Correct as written.

2. **sweeter** describes the noun **mango**. It is the **comparative** degree (comparing two mangoes, signalled by "than"). Correct as written.

3. **more tallest** describes the noun **boy**, but it is **wrong**: it doubles the comparison (*more* + *-est*). The superlative of "tall" is simply **tallest**. → *He is the **tallest** boy in the team.*

**Key idea:** an adjective always describes a noun (or pronoun); use the **comparative** (-er / more) for two things and the **superlative** (-est / most) for three or more — and never combine the two methods.`,
      teachingTip:
        "The double-comparison error ('more taller', 'most cleverest') is extremely common. Teach the single rule: pick EITHER -er/-est OR more/most, never both. Also drill the two-vs-more distinction with a quick oral game — 'of the two' forces the comparative, 'in the class' forces the superlative — so learners choose the degree by counting what is being compared.",
      quiz: [
        {
          prompt: "An adjective describes or modifies a…",
          options: ["noun or pronoun", "verb", "adverb", "preposition"],
          correctIndex: 0,
          explanation: "Adjectives modify nouns and pronouns.",
        },
        {
          prompt: "In 'a brave soldier', the adjective is…",
          options: ["brave", "soldier", "a", "brave soldier"],
          correctIndex: 0,
          explanation: "'brave' describes the noun 'soldier'.",
        },
        {
          prompt: "Which word is a demonstrative adjective?",
          options: ["this", "quickly", "run", "very"],
          correctIndex: 0,
          explanation: "'this' points out which noun.",
        },
        {
          prompt: "In 'my book', the word 'my' is a … adjective.",
          options: ["possessive", "descriptive", "interrogative", "quantitative"],
          correctIndex: 0,
          explanation: "'my' shows ownership.",
        },
        {
          prompt: "Which is a quantitative adjective?",
          options: ["few", "beautiful", "this", "whose"],
          correctIndex: 0,
          explanation: "'few' tells how many.",
        },
        {
          prompt: "The comparative of 'tall' is…",
          options: ["taller", "tallest", "more tall", "most tall"],
          correctIndex: 0,
          explanation: "Short word adds -er: taller.",
        },
        {
          prompt: "The superlative of 'happy' is…",
          options: ["happiest", "happier", "most happy", "more happy"],
          correctIndex: 0,
          explanation: "Consonant + y → i, add -est: happiest.",
        },
        {
          prompt: "The comparative of 'beautiful' is…",
          options: ["more beautiful", "beautifuller", "most beautiful", "beautifulest"],
          correctIndex: 0,
          explanation: "Long words use 'more': more beautiful.",
        },
        {
          prompt: "The comparative of 'good' is…",
          options: ["better", "gooder", "best", "more good"],
          correctIndex: 0,
          explanation: "'good' is irregular: good, better, best.",
        },
        {
          prompt: "The superlative of 'bad' is…",
          options: ["worst", "baddest", "worse", "most bad"],
          correctIndex: 0,
          explanation: "'bad' is irregular: bad, worse, worst.",
        },
        {
          prompt: "Use the comparative degree when comparing…",
          options: ["two things", "three things", "one thing", "many things"],
          correctIndex: 0,
          explanation: "The comparative compares exactly two.",
        },
        {
          prompt: "Use the superlative degree when comparing…",
          options: ["three or more things", "two things", "one thing", "no things"],
          correctIndex: 0,
          explanation: "The superlative compares three or more.",
        },
        {
          prompt: "Which sentence is correct?",
          options: [
            "She is the taller of the two sisters.",
            "She is the tallest of the two sisters.",
            "She is more taller than her sister.",
            "She is most tall of the two.",
          ],
          correctIndex: 0,
          explanation: "Two things → comparative 'taller'.",
        },
        {
          prompt: "Which is WRONG?",
          options: ["more cleverer", "cleverer", "cleverest", "more clever"],
          correctIndex: 0,
          explanation: "'more cleverer' doubles the comparison.",
        },
        {
          prompt: "The plain form of an adjective (e.g. 'tall') is the … degree.",
          options: ["positive", "comparative", "superlative", "irregular"],
          correctIndex: 0,
          explanation: "The base form is the positive degree.",
        },
        {
          prompt: "In 'Which book do you want?', 'which' is a … adjective.",
          options: ["interrogative", "possessive", "demonstrative", "descriptive"],
          correctIndex: 0,
          explanation: "'which' asks a question about the noun.",
        },
        {
          prompt: "The comparative of 'large' is…",
          options: ["larger", "largest", "more large", "largeer"],
          correctIndex: 0,
          explanation: "Ends in -e, add -r: larger.",
        },
        {
          prompt: "An adjective can come after which kind of verb?",
          options: ["a linking verb", "no verb ever", "only action verbs", "only modal verbs"],
          correctIndex: 0,
          explanation: "e.g. 'the soup is hot' — adjective after a linking verb.",
        },
        {
          prompt: "The superlative of 'many' is…",
          options: ["most", "manyest", "more", "manier"],
          correctIndex: 0,
          explanation: "'many' is irregular: many, more, most.",
        },
        {
          prompt: "Adjectives make writing more…",
          options: ["vivid and precise", "confusing", "shorter only", "grammatically wrong"],
          correctIndex: 0,
          explanation: "Good adjectives add clear, vivid detail.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Give the comparative and superlative of: (a) small, (b) happy, (c) good.",
          answerKey:
            "(a) smaller, smallest; (b) happier, happiest; (c) better, best. Award a mark per correct pair; note (c) is irregular.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the correct degree of comparison?",
          options: [
            "This is the best of all the essays.",
            "This is the better of all the essays.",
            "This is the most best essay.",
            "This is the goodest essay.",
          ],
          correctIndex: 0,
          answerKey: "Superlative 'best' for three or more; no doubling.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Identify the adjective and the noun it describes: 'The diligent students passed the difficult exam.'",
          answerKey:
            "'diligent' describes 'students'; 'difficult' describes 'exam'. Award a mark for each adjective correctly matched to its noun.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the three degrees of comparison of adjectives, giving an example of each and stating a common error learners should avoid.",
          answerKey:
            "A strong answer defines the positive (plain form, e.g. tall), comparative (comparing two, e.g. taller / more beautiful) and superlative (comparing three or more, e.g. tallest / most beautiful) degrees, with valid examples. It states the common error of doubling the comparison (e.g. 'more taller', 'most cleverest') and/or using the superlative for only two things, and how to avoid it. Award marks for the three degrees with examples and a correctly identified error.",
          marks: 5,
        },
      ],
    },
    {
      slug: "adverbs",
      title: "Adverbs and Their Uses",
      objective:
        "By the end of the topic, learners should be able to identify adverbs and the words they modify, name the main kinds of adverb, form adverbs from adjectives, and use adverbs correctly and distinctly from adjectives.",
      estimatedMinutes: 160,
      notes: `## What an adverb does

If the adjective is the friend of the noun, the **adverb** is the friend of the **verb**. An **adverb** is a word that **modifies a verb, an adjective, or another adverb**, adding information that answers *how? when? where? how often?* or *to what extent?*

- modifying a **verb**: *She sings **beautifully**.* (how she sings)
- modifying an **adjective**: *It is **very** hot.* (how hot)
- modifying **another adverb**: *He ran **quite** quickly.* (how quickly)

## The kinds of adverb

| Kind | Question it answers | Examples |
| --- | --- | --- |
| Manner | how? | quickly, well, carefully, badly, loudly |
| Time | when? | now, yesterday, soon, already, tomorrow |
| Place | where? | here, there, outside, everywhere, above |
| Frequency | how often? | always, often, never, sometimes, daily |
| Degree | to what extent? | very, too, quite, almost, so, enough |
| Affirmation / negation | is it so? | certainly, surely, yes, not, never |

## Forming adverbs from adjectives

Many adverbs of manner are made by adding **-ly** to an adjective, with a few spelling changes:

- quick → quick**ly**, careful → careful**ly** (most just add -ly);
- happy → happi**ly** (consonant + *y* changes to *i*);
- gentle → gent**ly** (words ending in *-le* drop the *e*);
- true → tru**ly** (a few drop a final *e*).

Two warnings: **not every -ly word is an adverb** — *friendly, lovely, silly, ugly* are **adjectives**; and some adverbs have **no -ly** at all — *fast, hard, late, well, straight* keep the same form as the adjective (*a fast car → he drives fast*).

## Comparison of adverbs

Like adjectives, adverbs have three degrees. Short adverbs add **-er / -est** (*fast → faster → fastest*), while -ly adverbs use **more / most** (*carefully → more carefully → most carefully*). A few are irregular: *well → better → best; badly → worse → worst.*

## The position of adverbs

- **Adverbs of manner** usually come after the verb or its object: *She read the letter **slowly**.*
- **Adverbs of frequency** usually come **before** the main verb but **after** *be*: *He **always** arrives early; She **is always** early.*
- **Degree adverbs** (*very, too, quite, so*) come **before** the word they modify: ***very** tired*, not *tired very*.

## Adjective or adverb? — the key distinction

This is the most heavily tested point in the topic:

- an **adjective** describes a **noun or pronoun**: *She is a **careful** driver.* (careful → driver)
- an **adverb** describes a **verb, adjective or adverb**: *She drives **carefully**.* (carefully → drives)

**good vs well.** *Good* is the adjective (*a good student, the food is good*); *well* is the adverb (*she writes well*). ✗ *She writes good* → ✓ *She writes **well***. (Note: *well* is an adjective only when it means "healthy": *I feel well*.)

## Common errors

- Using an adjective where an adverb is needed: ✗ *He ran quick* → ✓ *He ran **quickly**; ✗ speak clear* → ✓ *speak **clearly***.
- *very* vs *too*: *very* simply intensifies (*very hot*), while *too* means "more than is good" (*too hot to drink*). They are not interchangeable.
- Double negatives: ✗ *I didn't see nobody* → ✓ *I didn't see **anybody***.`,
      workedExample: `**Task.** For each sentence, find the adverb, say what word it modifies and what kind of adverb it is; then correct any error.

1. *The children played **happily** in the yard.*
2. *She sang **very** sweetly.*
3. *He writes **good**.*

**Answers**

1. **happily** modifies the verb **played** — it tells *how* they played. It is an adverb of **manner** (formed from the adjective *happy*, y → i, + ly). Correct.

2. **very** modifies the adverb **sweetly** — it tells *to what extent* she sang sweetly. It is an adverb of **degree**. (And *sweetly* is an adverb of manner modifying *sang*.) Correct.

3. **good** is meant to describe *how* he writes, so it should be an **adverb**, but *good* is an **adjective**. The adverb is **well**. → *He writes **well**.*

**Key idea:** an adverb modifies a verb, an adjective or another adverb — never a noun. When a word tells *how* something is done, use the adverb (usually -ly, but *well* is the adverb of *good*), not the adjective.`,
      teachingTip:
        "The single most examined error is adjective-for-adverb ('he runs quick', 'she writes good'). Give learners a one-question test: does the word describe a NOUN (adjective) or tell how a VERB is done (adverb)? Drill 'good/well' as the classic pair — 'a good singer' (adjective + noun) versus 'sings well' (adverb + verb) — until the correction is automatic.",
      quiz: [
        {
          prompt: "An adverb can modify a verb, an adjective, or another…",
          options: ["adverb", "noun", "pronoun", "conjunction"],
          correctIndex: 0,
          explanation: "Adverbs modify verbs, adjectives and other adverbs.",
        },
        {
          prompt: "In 'She runs quickly', the adverb is…",
          options: ["quickly", "runs", "she", "run"],
          correctIndex: 0,
          explanation: "'quickly' tells how she runs.",
        },
        {
          prompt: "An adverb of manner answers the question…",
          options: ["how?", "when?", "where?", "whose?"],
          correctIndex: 0,
          explanation: "Manner adverbs tell how an action is done.",
        },
        {
          prompt: "Which is an adverb of time?",
          options: ["yesterday", "quickly", "here", "very"],
          correctIndex: 0,
          explanation: "'yesterday' tells when.",
        },
        {
          prompt: "Which is an adverb of place?",
          options: ["outside", "soon", "carefully", "always"],
          correctIndex: 0,
          explanation: "'outside' tells where.",
        },
        {
          prompt: "Which is an adverb of frequency?",
          options: ["always", "loudly", "there", "very"],
          correctIndex: 0,
          explanation: "'always' tells how often.",
        },
        {
          prompt: "Which is an adverb of degree?",
          options: ["very", "yesterday", "outside", "slowly"],
          correctIndex: 0,
          explanation: "'very' tells to what extent.",
        },
        {
          prompt: "The adverb formed from 'careful' is…",
          options: ["carefully", "carefuly", "carefull", "careful"],
          correctIndex: 0,
          explanation: "Add -ly: carefully.",
        },
        {
          prompt: "The adverb formed from 'happy' is…",
          options: ["happily", "happyly", "happy", "happiness"],
          correctIndex: 0,
          explanation: "y → i, add -ly: happily.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["He ran quickly.", "He ran quick.", "He ran quicker way.", "He ran quickness."],
          correctIndex: 0,
          explanation: "The verb 'ran' needs the adverb 'quickly'.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["She writes well.", "She writes good.", "She writes goodly.", "She writes well-ly."],
          correctIndex: 0,
          explanation: "'well' is the adverb of 'good'.",
        },
        {
          prompt: "In 'a careful driver', 'careful' is an…",
          options: ["adjective (describes 'driver')", "adverb", "verb", "noun"],
          correctIndex: 0,
          explanation: "It describes the noun 'driver', so it is an adjective.",
        },
        {
          prompt: "In 'drives carefully', 'carefully' is an…",
          options: ["adverb (modifies 'drives')", "adjective", "noun", "pronoun"],
          correctIndex: 0,
          explanation: "It modifies the verb 'drives', so it is an adverb.",
        },
        {
          prompt: "Which -ly word is actually an ADJECTIVE, not an adverb?",
          options: ["friendly", "quickly", "slowly", "loudly"],
          correctIndex: 0,
          explanation: "'friendly' describes a noun (a friendly person).",
        },
        {
          prompt: "Which adverb has no -ly ending?",
          options: ["fast", "quickly", "happily", "gently"],
          correctIndex: 0,
          explanation: "'fast' is an adverb without -ly (run fast).",
        },
        {
          prompt: "In 'very tired', the adverb 'very' modifies the adjective…",
          options: ["tired", "very", "is", "a"],
          correctIndex: 0,
          explanation: "'very' tells how tired — it modifies 'tired'.",
        },
        {
          prompt: "An adverb never modifies a…",
          options: ["noun", "verb", "adjective", "another adverb"],
          correctIndex: 0,
          explanation: "Nouns are modified by adjectives, not adverbs.",
        },
        {
          prompt: "Correct this: 'She speaks English good.'",
          options: ["She speaks English well.", "She speaks English gooder.", "She speaks good English good.", "She speaks Englishly."],
          correctIndex: 0,
          explanation: "The verb 'speaks' needs the adverb 'well'.",
        },
        {
          prompt: "The adverb from 'gentle' is…",
          options: ["gently", "gentlely", "gentley", "gentle"],
          correctIndex: 0,
          explanation: "Drop -e after -le and add -ly: gently.",
        },
        {
          prompt: "'He arrived early' — 'early' here is an adverb of…",
          options: ["time", "place", "degree", "manner"],
          correctIndex: 0,
          explanation: "'early' tells when he arrived.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Form adverbs from these adjectives: (a) quick, (b) happy, (c) gentle.",
          answerKey:
            "(a) quickly; (b) happily; (c) gently. Award a mark for each correctly formed adverb, noting the spelling changes for happy (y→i) and gentle (drop -e).",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the adverb correctly?",
          options: [
            "The team played badly in the final.",
            "The team played bad in the final.",
            "The team played baddest in the final.",
            "The team played badness in the final.",
          ],
          correctIndex: 0,
          answerKey: "'badly' (adverb) modifies the verb 'played'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain the difference between 'good' and 'well', giving a correct sentence for each.",
          answerKey:
            "'good' is an adjective describing a noun (e.g. 'She is a good singer'); 'well' is the adverb describing how an action is done (e.g. 'She sings well'). Award marks for the adjective/adverb distinction and a correct sentence for each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between an adjective and an adverb, and describe a simple test a student can use to decide which to use. Give two examples.",
          answerKey:
            "A strong answer explains that an adjective describes a noun or pronoun, while an adverb modifies a verb, an adjective or another adverb (telling how, when, where or to what extent). The test: ask whether the word describes a NOUN (use the adjective) or tells how a VERB is done (use the adverb) — e.g. 'a careful driver' (adjective) versus 'drives carefully' (adverb); 'a good student' versus 'writes well'. Award marks for the definitions, the test, and two valid contrasting examples.",
          marks: 5,
        },
      ],
    },
  ],
};
