import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 11,
// Semester Two, Period IV: Grammar — Vocabulary and Spelling. CONTENTS:
// (1) synonyms, antonyms, and homophones/homographs; (2) prefixes and meaning —
// word analysis, roots and meaning, suffixes and meaning, commonly misspelled
// words; (3) vocabulary and spelling — using context clues and spelling rules.
// Each CONTENTS item is one topic.
export const englishLanguageG11P4: PeriodContent = {
  grade: 11,
  number: 4,
  title: "Vocabulary and Spelling",
  summary:
    "Period IV of the MoE Grade 11 English syllabus. Learners build vocabulary and spelling: they tell apart synonyms, antonyms, homophones and homographs; analyse words into prefixes, roots and suffixes to unlock meaning and spell correctly; and use context clues and spelling rules to learn and write new words.",
  topics: [
    {
      // source: LibreTexts — Writing for Success (McLean), 4.5 Synonyms and Antonyms (Working with Words: Which Word Is Right) (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(McLean)/4:_Working_with_Words_-_Which_Word_Is_Right/4.5:_Synonyms_and_Antonyms)
      slug: "synonyms-antonyms-homophones",
      title: "Synonyms, Antonyms, Homophones and Homographs",
      objective:
        "By the end of the topic, learners should be able to define and give examples of synonyms, antonyms, homophones and homographs, and choose the right word so that meaning and spelling are correct.",
      estimatedMinutes: 140,
      notes: `## Four kinds of word relationship

| Term | Meaning | Key test | Example |
| --- | --- | --- | --- |
| Synonym | same or almost the same meaning | can replace the word | *big / large* |
| Antonym | opposite meaning | reverses the word | *hot / cold* |
| Homophone | sounds the same, different spelling/meaning | same sound | *their / there* |
| Homograph | spelled the same, may sound different, different meaning | same spelling | *lead* (metal) / *lead* (to guide) |

## Synonyms

**Synonym** — a word with the **same, or almost the same, meaning** as another word. *An easy task* and *a simple task* are synonymous.

- Synonyms sharpen writing by letting you choose the exact word, but the **small differences** in meaning matter: *thin, slim, slender* and *skinny* are close but not identical in tone.
- A **thesaurus** lists synonyms (and antonyms).

## Antonyms

**Antonym** — a word with the **opposite meaning** of another word: *hot / cold, happy / sad, buy / sell.* Studying antonyms helps you pick the most exact word and sharpens your overall sense of language.

## Homophones

**Homophone** — words that **sound the same** but may have a **different spelling, a different meaning, or both**. They are a frequent source of spelling errors:

- *to / too / two*
- *their / there / they're*
- *hear / here*
- *right / write*
- *your / you're*

The ear cannot tell them apart, so you must choose by **meaning**.

## Homographs

**Homograph** — words that are **spelled the same** but may **sound different** and have **different meanings**:

- *lead* — a heavy metal (rhymes with *bed*) / *lead* — to guide (rhymes with *feed*)
- *bow* — to bend at the waist / *bow* — a knot or a weapon
- *tear* — a drop from the eye / *tear* — to rip

Context tells you which meaning (and often which pronunciation) is intended.

## Choosing the right word

- For a **synonym**, keep the tone and exact sense you want.
- For an **antonym**, make sure it truly reverses the meaning.
- For a **homophone**, spell the one whose **meaning** fits (*They left **their** bags **there**.*)
- For a **homograph**, read the **context** to fix the meaning.

## Summary

- **Synonyms** = same meaning; **antonyms** = opposite meaning.
- **Homophones** = same sound, different spelling/meaning; **homographs** = same spelling, different meaning (and maybe sound).
- Choose by **meaning** and **context**; a thesaurus helps with synonyms and antonyms.`,
      workedExample: `**Task.** For each pair, name the relationship, then choose the correct word for the sentence.

1. *brave / cowardly*
2. *flower / flour*
3. *"The runner won the ______ (medal / meddle)."*
4. *"She tied a ______ (bow) in her hair"* and *"He gave a polite ______ (bow)."*

**Answers**

1. **Antonyms** — *brave* is the opposite of *cowardly*.
2. **Homophones** — *flower* and *flour* sound the same but differ in spelling and meaning.
3. **medal** — a homophone choice; a *medal* is an award, while *meddle* means to interfere. Meaning decides the spelling.
4. **Homograph** — *bow* is spelled the same in both, but means a knot in the first and a bend of the body in the second; the two are also said differently.

**Rule applied:** name the relationship by testing sound, spelling and meaning, then let **meaning and context** pick the correct word.`,
      quiz: [
        {
          prompt: "A synonym is a word that has…",
          options: ["the same or almost the same meaning", "the opposite meaning", "the same spelling", "no meaning"],
          correctIndex: 0,
          explanation: "Synonyms share the same or nearly the same meaning.",
        },
        {
          prompt: "Which pair are synonyms?",
          options: ["big / large", "hot / cold", "their / there", "buy / sell"],
          correctIndex: 0,
          explanation: "'big' and 'large' mean nearly the same thing.",
        },
        {
          prompt: "An antonym is a word that has…",
          options: ["the opposite meaning", "the same meaning", "the same sound", "the same spelling"],
          correctIndex: 0,
          explanation: "Antonyms have opposite meanings.",
        },
        {
          prompt: "Which pair are antonyms?",
          options: ["happy / sad", "big / large", "to / too", "lead / lead"],
          correctIndex: 0,
          explanation: "'happy' and 'sad' are opposites.",
        },
        {
          prompt: "Homophones are words that…",
          options: ["sound the same but differ in spelling or meaning", "are spelled the same", "mean the same", "have no sound"],
          correctIndex: 0,
          explanation: "Homophones sound alike but differ in spelling and/or meaning.",
        },
        {
          prompt: "Which are homophones?",
          options: ["their / there", "big / small", "lead / lead", "run / running"],
          correctIndex: 0,
          explanation: "'their' and 'there' sound the same but are spelled and mean differently.",
        },
        {
          prompt: "Homographs are words that…",
          options: ["are spelled the same but have different meanings", "sound the same only", "mean the same", "are always verbs"],
          correctIndex: 0,
          explanation: "Homographs share spelling but differ in meaning (and often sound).",
        },
        {
          prompt: "Which is an example of homographs?",
          options: ["lead (metal) / lead (to guide)", "to / two", "hot / cold", "big / large"],
          correctIndex: 0,
          explanation: "'lead' is spelled one way but has two meanings and two pronunciations.",
        },
        {
          prompt: "A book that lists synonyms and antonyms is a…",
          options: ["thesaurus", "novel", "atlas", "diary"],
          correctIndex: 0,
          explanation: "A thesaurus lists synonyms and antonyms.",
        },
        {
          prompt: "Choose the correct homophone: 'They parked ___ car here.'",
          options: ["their", "there", "they're", "thair"],
          correctIndex: 0,
          explanation: "'their' shows possession — the car belongs to them.",
        },
        {
          prompt: "Choose the correct homophone: 'You are going ___ the market.'",
          options: ["to", "too", "two", "tow"],
          correctIndex: 0,
          explanation: "'to' shows direction; 'too' means also and 'two' is the number.",
        },
        {
          prompt: "A synonym for 'quick' is…",
          options: ["fast", "slow", "quiet", "heavy"],
          correctIndex: 0,
          explanation: "'fast' means the same as 'quick'.",
        },
        {
          prompt: "An antonym for 'ancient' is…",
          options: ["modern", "old", "aged", "historic"],
          correctIndex: 0,
          explanation: "'modern' is the opposite of 'ancient'.",
        },
        {
          prompt: "Why can homophones cause spelling errors?",
          options: ["the ear cannot tell them apart", "they are very long", "they have no meaning", "they are always plural"],
          correctIndex: 0,
          explanation: "Because they sound identical, you must choose by meaning, not sound.",
        },
        {
          prompt: "In 'The wind blew' and 'Wind the clock', 'wind' is an example of…",
          options: ["homographs", "synonyms", "antonyms", "homophones"],
          correctIndex: 0,
          explanation: "Same spelling, different meaning and sound — homographs.",
        },
        {
          prompt: "Choose the correct homophone: 'Please ___ your name here.'",
          options: ["write", "right", "rite", "wright"],
          correctIndex: 0,
          explanation: "'write' means to form letters; 'right' means correct or a direction.",
        },
        {
          prompt: "Which statement about synonyms is true?",
          options: ["Small differences in meaning between synonyms still matter", "Synonyms are always identical", "Synonyms are opposites", "Synonyms sound the same"],
          correctIndex: 0,
          explanation: "Synonyms are close but not identical; the differences affect tone.",
        },
        {
          prompt: "An antonym for 'expand' is…",
          options: ["shrink", "grow", "widen", "stretch"],
          correctIndex: 0,
          explanation: "'shrink' is the opposite of 'expand'.",
        },
        {
          prompt: "Choose the correct homophone: 'Can you ___ me now?'",
          options: ["hear", "here", "heir", "hare"],
          correctIndex: 0,
          explanation: "'hear' relates to listening; 'here' means this place.",
        },
        {
          prompt: "Which pair are synonyms?",
          options: ["slim / slender", "up / down", "sea / see", "bow / bow"],
          correctIndex: 0,
          explanation: "'slim' and 'slender' have nearly the same meaning.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define homophone and homograph and give one example of each.",
          answerKey:
            "Homophone: words that sound the same but differ in spelling and/or meaning (e.g. their/there). Homograph: words spelled the same but with different meanings and often different sounds (e.g. lead/lead, tear/tear). Award a mark per correct definition + example.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which pair are antonyms?",
          options: [
            "generous / stingy",
            "large / big",
            "flour / flower",
            "bow / bow",
          ],
          correctIndex: 0,
          answerKey: "'generous' and 'stingy' are opposites; the others are synonyms or homophones/homographs.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give a synonym and an antonym for the word 'brave'.",
          answerKey:
            "Synonym e.g. courageous/bold/fearless; antonym e.g. cowardly/timid/afraid. Award a mark for each acceptable word.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Choose the correct word and explain why: 'She could not decide (weather / whether) to go.'",
          answerKey:
            "'whether' — it introduces a choice; 'weather' refers to the climate. They are homophones, so meaning decides the spelling. Award marks for the correct word and the reason.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between synonyms, antonyms, homophones and homographs, giving an example of each. Then explain why knowing these relationships helps a writer choose and spell words correctly.",
          answerKey:
            "A strong answer defines all four (synonym = same meaning; antonym = opposite; homophone = same sound, different spelling/meaning; homograph = same spelling, different meaning) with a correct example each, and explains that recognising them helps a writer pick the exact word and avoid spelling the wrong homophone. Award marks for the four definitions, examples, and the explanation.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Let's Get Writing (Browning, DeVries, Boylan, Kurtz and Burton), 10.4 Prefixes and Suffixes (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Let's_Get_Writing_(Browning_DeVries_Boylan_Kurtz_and_Burton)/10:_Working_With_Words_-_Which_Word_is_Right/10.04:_Prefixes_and_Suffixes)
      slug: "prefixes-roots-suffixes",
      title: "Word Analysis: Prefixes, Roots and Suffixes",
      objective:
        "By the end of the topic, learners should be able to break a word into prefix, root and suffix, use the parts to work out meaning, and apply the spelling rules for adding prefixes and suffixes, including for commonly misspelled words.",
      estimatedMinutes: 150,
      notes: `## Words are built from parts

Most words can be **analysed** into a **root** plus one or more **affixes** (a **prefix** at the front, a **suffix** at the end). Knowing the common parts is like cracking a code: you can spell better and even work out the meaning of unfamiliar words.

\`\`\`svg A word broken into parts
<svg viewBox="0 0 400 90" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="20" y="30" width="90" height="34" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="65" y="52" text-anchor="middle" font-size="13">un-</text>
  <rect x="115" y="30" width="120" height="34" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="175" y="52" text-anchor="middle" font-size="13">happy (root)</text>
  <rect x="240" y="30" width="90" height="34" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="285" y="52" text-anchor="middle" font-size="13">-ness</text>
  <text x="175" y="20" text-anchor="middle" font-size="11" fill="#6a5a48">prefix + root + suffix = unhappiness</text>
</svg>
\`\`\`

## The root

**Root** — the **base unit of meaning** around which the rest of a word is built. Most English roots come from **Greek, Latin or Anglo-Saxon**.

- *port* (Latin, "carry") → *transport, export, portable*
- *spect* (Latin, "look") → *inspect, spectator, respect*
- *bio* (Greek, "life") → *biology, biography*

A **base word** is a root that can already stand alone as a word (*happy, play*); some roots cannot stand alone (*spect, port*).

## Prefixes

**Prefix** — a word part added to the **beginning** of a word that **changes its meaning**. Adding a prefix does **not** change the spelling of the base word.

| Prefix | Meaning | Example |
| --- | --- | --- |
| un- | not / opposite | unhappy, unfair |
| re- | again / back | rewrite, return |
| dis- | not / away | disagree, dishonest |
| pre- | before | preview, prepare |
| mis- | wrongly | misspell, misunderstand |
| in-/im- | not | incorrect, impossible |

Note: *un- + necessary = unnecessary* (keep both letters); *mis- + spell = misspell* (keep both s's) — the base word's spelling is unchanged.

## Suffixes

**Suffix** — a word part added to the **end** of a word that **changes its meaning** (and often its part of speech).

| Suffix | Meaning / effect | Example |
| --- | --- | --- |
| -ful | full of | hopeful, careful |
| -less | without | hopeless, careless |
| -ness | state of (makes a noun) | kindness, happiness |
| -ly | in a way (makes an adverb) | quickly, slowly |
| -er / -or | one who | teacher, actor |
| -tion | act / state (makes a noun) | action, education |

## Spelling rules for adding suffixes

1. **-ness and -ly** do **not** change the spelling of the base word: *mean → meanness; calm → calmly.* (But base words ending in *-y* change *y* to *i*: *happy → happiness, happily.*)
2. When the suffix begins with a **vowel**, **drop the silent -e**: *hope → hoping; write → writing.*
3. **Double the final consonant** before a vowel-suffix when (a) the word is **one syllable or stressed on the last syllable** and (b) it ends in a **single vowel + single consonant**: *stop → stopping; begin → beginning.*

## Commonly misspelled words

Many spelling errors come from mishandling word parts. Watch these:

- **misspell** (mis + spell — two s's), **unnecessary** (un + necessary — two n's), **finally** (final + ly).
- **necessary, separate, definitely, beginning, embarrass, occurrence** — learn these letter by letter.

## Summary

- Analyse a word into **prefix + root + suffix**; use the parts to find meaning.
- **Prefixes** attach to the front (spelling of the base unchanged); **suffixes** attach to the end.
- Apply the suffix rules: -ness/-ly keep the spelling; drop silent -e before a vowel suffix; double a final consonant after a short stressed vowel.`,
      workedExample: `**Task.** Analyse each word and build/spell the target word.

1. Break *disrespectful* into its parts and give the root's meaning.
2. Add the prefix *un-* to *necessary*.
3. Add the suffix *-ing* to *begin* and to *hope*.
4. Add *-ly* to *final*.

**Answers**

1. *dis- + spect (respect) + -ful* → prefix *dis-* (not/away), root *spect* (Latin "look", as in *respect*), suffix *-ful* (full of). *Disrespectful* = "full of no respect."
2. *un- + necessary = **unnecessary*** — the prefix does not change the base, so both the *n* of *un* and the *n* of *necessary* stay: **un-n**ecessary.
3. *begin + -ing = **beginning*** — one root stressed on the last syllable ending in single vowel + single consonant, so double the *n*. *hope + -ing = **hoping*** — drop the silent *e* before the vowel suffix.
4. *final + -ly = **finally*** — *-ly* does not change the base, so keep the *l* of *final* and add *-ly*: two l's.

**Rule applied:** identify the parts, then apply the correct prefix/suffix spelling rule.`,
      quiz: [
        {
          prompt: "A prefix is a word part added to the… of a word.",
          options: ["beginning", "end", "middle", "root only"],
          correctIndex: 0,
          explanation: "A prefix attaches to the beginning and changes the meaning.",
        },
        {
          prompt: "A suffix is a word part added to the… of a word.",
          options: ["end", "beginning", "middle", "front"],
          correctIndex: 0,
          explanation: "A suffix attaches to the end and changes the meaning.",
        },
        {
          prompt: "The base unit of meaning a word is built around is the…",
          options: ["root", "suffix", "prefix", "syllable"],
          correctIndex: 0,
          explanation: "The root carries the core meaning.",
        },
        {
          prompt: "Most English roots come from…",
          options: ["Greek, Latin or Anglo-Saxon", "only French", "only Spanish", "no other language"],
          correctIndex: 0,
          explanation: "English roots are largely Greek, Latin or Anglo-Saxon.",
        },
        {
          prompt: "Adding a prefix to a base word…",
          options: ["does not change the base word's spelling", "always removes a letter", "changes the root's sound", "adds a suffix"],
          correctIndex: 0,
          explanation: "The base word's spelling stays the same when a prefix is added.",
        },
        {
          prompt: "The prefix 'un-' means…",
          options: ["not / opposite", "again", "before", "wrongly"],
          correctIndex: 0,
          explanation: "'un-' means not or the opposite: unhappy, unfair.",
        },
        {
          prompt: "The prefix 're-' means…",
          options: ["again / back", "not", "before", "full of"],
          correctIndex: 0,
          explanation: "'re-' means again or back: rewrite, return.",
        },
        {
          prompt: "The prefix 'mis-' means…",
          options: ["wrongly", "before", "again", "without"],
          correctIndex: 0,
          explanation: "'mis-' means wrongly: misspell, misunderstand.",
        },
        {
          prompt: "The suffix '-less' means…",
          options: ["without", "full of", "one who", "again"],
          correctIndex: 0,
          explanation: "'-less' means without: hopeless, careless.",
        },
        {
          prompt: "The suffix '-ful' means…",
          options: ["full of", "without", "not", "before"],
          correctIndex: 0,
          explanation: "'-ful' means full of: hopeful, careful.",
        },
        {
          prompt: "The suffix '-er' in 'teacher' means…",
          options: ["one who (does something)", "without", "not", "again"],
          correctIndex: 0,
          explanation: "'-er/-or' means one who: a teacher is one who teaches.",
        },
        {
          prompt: "Adding '-ness' or '-ly' to most words…",
          options: ["does not change the base word's spelling", "doubles the last letter", "drops the first letter", "adds a prefix"],
          correctIndex: 0,
          explanation: "e.g. mean → meanness; calm → calmly. (Words ending in -y change y to i.)",
        },
        {
          prompt: "When a suffix begins with a vowel, drop the…",
          options: ["silent -e of the root", "first letter", "prefix", "double consonant"],
          correctIndex: 0,
          explanation: "hope → hoping; write → writing.",
        },
        {
          prompt: "Which is spelled correctly?",
          options: ["hoping", "hopeing", "hopping (for 'hope')", "hopeng"],
          correctIndex: 0,
          explanation: "Drop the silent -e before -ing: hoping.",
        },
        {
          prompt: "You double the final consonant before a vowel suffix when the word…",
          options: ["is one syllable or stressed on the last syllable and ends in single vowel + single consonant", "ends in -e", "starts with a prefix", "has two syllables always"],
          correctIndex: 0,
          explanation: "That is the doubling rule: stop → stopping; begin → beginning.",
        },
        {
          prompt: "Which is the correct spelling of 'begin' + '-ing'?",
          options: ["beginning", "begining", "begginning", "beginnning"],
          correctIndex: 0,
          explanation: "Stressed last syllable + single vowel + single consonant → double the n: beginning.",
        },
        {
          prompt: "Which is spelled correctly?",
          options: ["misspell", "mispell", "mispel", "missspell"],
          correctIndex: 0,
          explanation: "mis- + spell keeps both s's: misspell.",
        },
        {
          prompt: "Which is spelled correctly?",
          options: ["unnecessary", "unecessary", "unneccessary", "unnecesary"],
          correctIndex: 0,
          explanation: "un- + necessary keeps both n's: unnecessary.",
        },
        {
          prompt: "Knowing prefixes, roots and suffixes helps you…",
          options: ["work out the meaning of unfamiliar words", "read faster only", "avoid punctuation", "write longer sentences"],
          correctIndex: 0,
          explanation: "Word parts let you decode and even define new words.",
        },
        {
          prompt: "Which word contains the root 'port' meaning 'carry'?",
          options: ["transport", "portray", "important-looking", "porridge"],
          correctIndex: 0,
          explanation: "'transport' = carry across; the root 'port' means carry.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Break the word 'unhelpful' into prefix, root and suffix, and give the meaning of each part.",
          answerKey:
            "Prefix 'un-' (not) + root/base 'help' + suffix '-ful' (full of) = 'not full of help'. Award marks for correctly separating the three parts with their meanings.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which word is spelled correctly after adding the suffix?",
          options: [
            "stopping (stop + -ing)",
            "stoping (stop + -ing)",
            "writeing (write + -ing)",
            "finaly (final + -ly)",
          ],
          correctIndex: 0,
          answerKey: "'stop' doubles the final consonant before -ing: stopping. The others break a spelling rule.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Add the given affix and spell the new word: (a) hope + -ing (b) happy + -ness (c) un- + necessary.",
          answerKey:
            "(a) hoping (drop silent e); (b) happiness (y to i, then -ness); (c) unnecessary (prefix does not change base, two n's). Award a mark per correct spelling.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two words that share the root 'spect' (meaning 'look') and explain how the root's meaning appears in each.",
          answerKey:
            "Any two of inspect, spectator, respect, inspection, spectacle, etc., each showing 'look' (e.g. inspect = look into; spectator = one who looks/watches). Award a mark per valid word with explanation.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how analysing a word into prefix, root and suffix helps with both meaning and spelling. Use at least two example words, and state two spelling rules for adding suffixes.",
          answerKey:
            "A strong answer explains that the root gives core meaning, prefixes and suffixes add or change meaning, and knowing the parts helps decode unfamiliar words and spell them (prefixes do not change the base); gives at least two analysed examples; and states two suffix rules (e.g. drop silent -e before a vowel suffix; -ness/-ly keep the spelling; double the final consonant after a short stressed vowel). Award marks for the analysis principle, examples, and two rules.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Evergreen Valley College, Integrated Reading and Writing, 10.5.6 Using Context Clues; and Writing for Success, Diction and Spelling (https://human.libretexts.org/Courses/Evergreen_Valley_College/Integrated_Reading_and_Writing/10:_Revising_and_Editing_for_Voice/10.05:_Working_With_Words_-_Which_Word_is_Right/10.5.06:_Using_Context_Clues)
      slug: "context-clues-and-spelling",
      title: "Vocabulary and Spelling: Context Clues and Spelling Rules",
      objective:
        "By the end of the topic, learners should be able to use context clues to work out the meaning of unfamiliar words and apply core spelling rules to write words correctly.",
      estimatedMinutes: 150,
      notes: `## Using context clues

**Context clues** — bits of information **within a text** that help you work out the meaning of an **unknown word**. Since most vocabulary comes from reading, noticing the words and phrases around a difficult word lets you make a **logical guess** at its meaning before reaching for a dictionary.

**Types of context clue:**

| Type | How it works | Example (unknown word in bold) |
| --- | --- | --- |
| Definition / restatement | the meaning is stated in the sentence | *A **cartographer**, a person who makes maps, drew the route.* |
| Synonym | a nearby word means the same | *He was **jovial**, cheerful and full of jokes.* |
| Antonym / contrast | a nearby word means the opposite (often after *but, unlike, however*) | *Unlike his **timid** brother, Kofi was bold.* |
| Example | examples make the meaning clear | *Citrus fruits, such as oranges and lemons, are **acidic**.* |
| General / inference | the whole sentence hints at the meaning | *After the long march the soldiers were **fatigued** and could barely stand.* |

**Steps:** read the whole sentence; look for a clue (a definition, synonym, opposite, or example); make a sensible guess; check that it fits; confirm with a dictionary if unsure.

## Spelling rules

A few reliable rules prevent many errors.

**1. i before e.** Write **i before e except after c** (when the sound is "ee"): *believe, chief, field*; but *receive, ceiling* (after c). Exceptions include *weird, seize, either.*

**2. Adding suffixes to words ending in silent -e.**

- Drop the -e before a suffix beginning with a **vowel**: *hope → hoping, use → usable.*
- Keep the -e before a suffix beginning with a **consonant**: *hope → hopeful, use → useless.*

**3. Words ending in -y.** Change **y to i** when a consonant comes before the y: *happy → happiness, carry → carried, city → cities*; but keep the y before **-ing**: *carry → carrying.*

**4. Doubling the final consonant.** Double it before a vowel-suffix when the word is one syllable (or stressed on the last syllable) and ends in a single vowel + single consonant: *run → running, big → bigger, begin → beginning.*

**5. Plurals.** Add **-es** after *-s, -sh, -ch, -x, -z* (*box → boxes, bush → bushes*); change *-y* to *-ies* after a consonant (*baby → babies*).

## Putting it together

When you meet a new word while reading, first use **context clues** to guess its meaning; when you write it, apply the **spelling rules** so it is spelled correctly.

## Summary

- **Context clues** (definition, synonym, antonym, example, inference) unlock the meaning of unknown words from the surrounding text.
- Core **spelling rules**: *i before e except after c*; drop silent -e before a vowel suffix (keep it before a consonant suffix); change *y* to *i* after a consonant; double the final consonant after a short stressed vowel; add *-es* / *-ies* for certain plurals.`,
      workedExample: `**Task.** (a) Use context clues to guess the bold word; name the clue type. (b) Apply spelling rules.

(a) *"The desert was **arid**, so dry that no crops could grow."*
(b) Spell: *believe*? *hope + -ful*? *carry + -ed*? *run + -ing*?

**Answers**

(a) **arid** ≈ "very dry." The clue is a **definition/restatement**: the phrase *so dry that no crops could grow* explains the word right after it.

(b)
- **believe** — "i before e" (the sound is "ee" and it is not after c).
- **hopeful** — the suffix *-ful* begins with a **consonant**, so **keep** the silent -e: hope + ful = hopeful.
- **carried** — *carry* ends in a consonant + y, so change **y to i** before -ed: carried.
- **running** — one syllable, single vowel + single consonant, so **double** the n before -ing: running.

**Rule applied:** read the surrounding words to guess meaning, then match each spelling to its rule.`,
      quiz: [
        {
          prompt: "Context clues are bits of information that help you work out…",
          options: ["the meaning of an unknown word", "the spelling of a name", "the length of a text", "the author's age"],
          correctIndex: 0,
          explanation: "Context clues reveal the meaning of unfamiliar words from the surrounding text.",
        },
        {
          prompt: "Most of a person's vocabulary comes from…",
          options: ["reading", "watching sport", "sleeping", "drawing"],
          correctIndex: 0,
          explanation: "Because most vocabulary comes from reading, context clues are valuable.",
        },
        {
          prompt: "In 'A cartographer, a person who makes maps, drew the route', the clue type is…",
          options: ["definition / restatement", "antonym", "example", "inference"],
          correctIndex: 0,
          explanation: "The meaning is restated directly in the sentence.",
        },
        {
          prompt: "In 'He was jovial, cheerful and full of jokes', the clue type is…",
          options: ["synonym", "antonym", "definition", "example"],
          correctIndex: 0,
          explanation: "'cheerful' is a synonym signalling the meaning of 'jovial'.",
        },
        {
          prompt: "In 'Unlike his timid brother, Kofi was bold', the clue type is…",
          options: ["antonym / contrast", "synonym", "example", "definition"],
          correctIndex: 0,
          explanation: "'bold' contrasts with 'timid', signalled by 'unlike'.",
        },
        {
          prompt: "Words like 'but', 'unlike' and 'however' often signal a… clue.",
          options: ["contrast (antonym)", "synonym", "definition", "example"],
          correctIndex: 0,
          explanation: "Contrast words point to an opposite meaning.",
        },
        {
          prompt: "In 'Citrus fruits, such as oranges and lemons, are acidic', the clue type is…",
          options: ["example", "antonym", "definition", "synonym"],
          correctIndex: 0,
          explanation: "'such as oranges and lemons' gives examples.",
        },
        {
          prompt: "The 'i before e' rule says write i before e except after…",
          options: ["c", "s", "t", "b"],
          correctIndex: 0,
          explanation: "i before e except after c (for the 'ee' sound): believe, but receive.",
        },
        {
          prompt: "Which word follows 'i before e except after c'?",
          options: ["receive", "beleive", "recieve", "freind"],
          correctIndex: 0,
          explanation: "After c it is 'ei': receive.",
        },
        {
          prompt: "Before a suffix beginning with a vowel, a silent -e is usually…",
          options: ["dropped", "kept", "doubled", "changed to i"],
          correctIndex: 0,
          explanation: "hope → hoping; use → usable.",
        },
        {
          prompt: "Before a suffix beginning with a consonant, a silent -e is usually…",
          options: ["kept", "dropped", "doubled", "removed with the last letter"],
          correctIndex: 0,
          explanation: "hope → hopeful; use → useless.",
        },
        {
          prompt: "Which is spelled correctly?",
          options: ["hopeful", "hopful", "hopeing", "hopful-ness"],
          correctIndex: 0,
          explanation: "Keep the silent -e before the consonant suffix -ful: hopeful.",
        },
        {
          prompt: "'carry' + '-ed' is spelled…",
          options: ["carried", "carryed", "carrid", "carreid"],
          correctIndex: 0,
          explanation: "Consonant + y → change y to i: carried.",
        },
        {
          prompt: "'carry' + '-ing' is spelled…",
          options: ["carrying", "carriing", "carreying", "caring"],
          correctIndex: 0,
          explanation: "Keep the y before -ing: carrying.",
        },
        {
          prompt: "'baby' becomes plural as…",
          options: ["babies", "babys", "babyes", "babice"],
          correctIndex: 0,
          explanation: "Consonant + y → -ies: babies.",
        },
        {
          prompt: "'box' becomes plural as…",
          options: ["boxes", "boxs", "boxies", "boxen"],
          correctIndex: 0,
          explanation: "Add -es after -x: boxes.",
        },
        {
          prompt: "Which shows correct doubling of the final consonant?",
          options: ["running", "runing", "runningg", "runing-ness"],
          correctIndex: 0,
          explanation: "run → running (single vowel + single consonant, one syllable).",
        },
        {
          prompt: "In 'After the march, the soldiers were fatigued and could barely stand', you infer 'fatigued' means…",
          options: ["very tired", "very happy", "very hungry", "very tall"],
          correctIndex: 0,
          explanation: "The whole sentence (could barely stand) infers 'very tired'.",
        },
        {
          prompt: "The first step when meeting an unknown word in reading is to…",
          options: ["use context clues to guess its meaning", "skip the paragraph", "stop reading", "rewrite the sentence"],
          correctIndex: 0,
          explanation: "Use the surrounding text to make a sensible guess, then confirm.",
        },
        {
          prompt: "'happy' + '-ness' is spelled…",
          options: ["happiness", "happyness", "happines", "hapiness"],
          correctIndex: 0,
          explanation: "Consonant + y → change y to i: happiness.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Use context clues to work out the meaning of 'benevolent' in: 'The benevolent chief, always kind and generous, helped the poor.' Name the clue type.",
          answerKey:
            "'benevolent' means kind/generous. Clue type: synonym (or definition/restatement) — 'kind and generous' signals the meaning. Award marks for the meaning and the clue type.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which word is spelled correctly?",
          options: [
            "believe",
            "beleive",
            "recieve",
            "freind",
          ],
          correctIndex: 0,
          answerKey: "'believe' follows 'i before e except after c'; the others break it.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Spell these correctly: (a) use + -able (b) use + -less (c) city (plural).",
          answerKey:
            "(a) usable (drop silent e before vowel suffix); (b) useless (keep e before consonant suffix); (c) cities (consonant + y → -ies). Award a mark per correct spelling.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two types of context clue and give a short example of each.",
          answerKey:
            "Any two of: definition/restatement, synonym, antonym/contrast, example, inference — each with a short illustrative sentence. Award a mark per clue type with a valid example.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how context clues help a reader learn new words, describing at least three types of clue with examples. Then state two spelling rules you would apply when writing those words.",
          answerKey:
            "A strong answer explains that context clues let a reader infer meaning from surrounding text; describes at least three types (definition, synonym, antonym/contrast, example, inference) with examples; and states two spelling rules (e.g. i before e except after c; drop silent -e before a vowel suffix; change y to i after a consonant; double the final consonant after a short stressed vowel). Award marks for the explanation, three clue types with examples, and two rules.",
          marks: 5,
        },
      ],
    },
  ],
};
