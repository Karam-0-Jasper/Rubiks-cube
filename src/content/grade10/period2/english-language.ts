import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester One, Period II: Grammar — Verbs Part 1. CONTENTS: (1) Verbs Part 1 —
// (a) action verbs / transitive and intransitive, (b) linking verbs,
// (c) helping and modal auxiliaries, (d) tenses of verbs (present, past, future);
// (2) progressive forms of verbs (descriptive and narrative writing). Each
// lettered content item is taught here as its own topic.
export const englishLanguageG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Verbs — Part 1",
  summary:
    "Period II of the MoE Grade 10 English syllabus. Learners identify and use verbs correctly: action verbs (transitive and intransitive), linking verbs, and helping and modal auxiliaries, then control the three simple tenses and the progressive forms in descriptive and narrative writing.",
  topics: [
    {
      // source: LibreTexts — Citrus College, Rhetoric and Composition, 6.1 Parts of Speech (https://human.libretexts.org/Courses/Citrus_College/Rhetoric_and_Composition_(Wikibooks)/06:_Grammar_and_Mechanics/6.01:_Parts_of_Speech)
      slug: "action-verbs",
      title: "Action Verbs: Transitive and Intransitive",
      objective:
        "By the end of the topic, learners should be able to identify action verbs (physical and mental), classify an action verb as transitive or intransitive by testing for a direct object, and recognise verbs that can be either.",
      estimatedMinutes: 150,
      notes: `## What a verb is

**Verb** — the main word in the **predicate** of a sentence. It expresses an **action**, describes an occurrence, or establishes a **state of being**.

- A sentence cannot be complete without a verb. A one-word command is a complete sentence: *Run! Stop! Listen!*
- Two broad kinds: **action verbs** (tell what the subject *does*) and **linking verbs** (join the subject to a word that renames or describes it — taught in the next topic).

## Action verbs

**Action verb** — depicts a **physical or mental** activity.

- **Physical (visible) action:** *Josh **threw** the ball.* / *Jason **kicked** the football.* Others: run, write, cook, dig, carry, build.
- **Mental action:** *think, believe, remember, know, imagine, decide, understand.* The mind does the work, so these are action verbs even though nothing is seen.

## Transitive verbs

**Transitive verb** — carries its action **toward an object**; it needs a **direct object** to complete its meaning.

- *She **cuts** her hair every month.* — cuts **what?** *her hair* (direct object).
- *The dog **chased** the cat.* — chased **what?** *the cat*.

**Finding the direct object:** say the subject and verb, then ask **"what?"** or **"whom?"** The answer is the direct object.

## Intransitive verbs

**Intransitive verb** — expresses a **complete action without an object**. The action stops with the subject and does not pass on.

- *Katie **ran**.* — ran **what?** — no answer, so *ran* is intransitive.
- *Jack **fell** on the steps.* — *on the steps* tells *where*, not *what*; there is no direct object.

## Verbs that can be either

Many action verbs are transitive in one sentence and intransitive in another. Test each sentence separately by asking "what?" or "whom?"

| Sentence | Ask "what/whom?" | Type |
| --- | --- | --- |
| He **sang** a song. | sang **what?** a song | transitive |
| He **sang** loudly. | sang what? (no object) | intransitive |
| She **runs** a shop. | runs **what?** a shop | transitive |
| She **runs** every day. | runs what? (no object) | intransitive |

## Verbs with two objects

Some transitive verbs take an **indirect object** (who benefits) as well as a **direct object** (what is acted on): *The teacher **gave** the pupils some books.* Gave **what?** *books* (direct object); gave books **to whom?** *the pupils* (indirect object). Common examples: give, send, tell, show, buy, teach, lend.

## Summary

- Every action verb tells what the subject does — physically or mentally.
- Ask **"verb + what/whom?"** A clear answer means the verb is **transitive**; no answer means it is **intransitive**.
- The same verb can be transitive or intransitive depending on the sentence, so test one sentence at a time.`,
      workedExample: `**Task.** For each sentence, name the underlined action verb as *transitive* or *intransitive*. If transitive, name the direct object.

1. *The farmer **planted** cassava.*
2. *The baby **slept** peacefully.*
3. *Musu **wrote** a long letter.*
4. *The old gate **creaked**.*

**Answers**

1. **planted** → *transitive*. Planted **what?** *cassava* — the direct object.
2. **slept** → *intransitive*. Slept what? *peacefully* tells *how*, not *what*; there is no object.
3. **wrote** → *transitive*. Wrote **what?** *a long letter* — the direct object.
4. **creaked** → *intransitive*. Creaked what? There is no receiver of the action.

**Rule applied:** the verb + "what/whom?" test decides the type — a named answer means transitive, no answer means intransitive.`,
      quiz: [
        {
          prompt: "A verb is best described as the main word in the…",
          options: ["predicate", "subject", "object", "article"],
          correctIndex: 0,
          explanation: "The verb is the main word in the predicate; it states the action or being.",
        },
        {
          prompt: "Which word is the action verb in: 'Josh threw the ball.'?",
          options: ["threw", "Josh", "ball", "the"],
          correctIndex: 0,
          explanation: "'Threw' expresses the physical action Josh performed.",
        },
        {
          prompt: "Which of these is a mental action verb?",
          options: ["believe", "jump", "cook", "throw"],
          correctIndex: 0,
          explanation: "'Believe' is an action that takes place in the mind.",
        },
        {
          prompt: "A transitive verb must be followed by a…",
          options: ["direct object", "linking word", "preposition", "conjunction"],
          correctIndex: 0,
          explanation: "A transitive verb carries its action to a direct object.",
        },
        {
          prompt: "In 'She cuts her hair', the verb 'cuts' is…",
          options: ["transitive", "intransitive", "linking", "helping"],
          correctIndex: 0,
          explanation: "Cuts what? 'her hair' — the action has an object, so it is transitive.",
        },
        {
          prompt: "In 'Katie ran', the verb 'ran' is…",
          options: ["intransitive", "transitive", "linking", "modal"],
          correctIndex: 0,
          explanation: "There is no object receiving the action, so 'ran' is intransitive.",
        },
        {
          prompt: "To find a direct object you ask, after the verb,…",
          options: ["what? or whom?", "where?", "when?", "why?"],
          correctIndex: 0,
          explanation: "The answer to 'verb + what/whom?' is the direct object.",
        },
        {
          prompt: "Identify the direct object in: 'The carpenter built a table.'",
          options: ["a table", "carpenter", "built", "the"],
          correctIndex: 0,
          explanation: "'A table' receives the action of 'built'.",
        },
        {
          prompt: "Which sentence contains an intransitive verb?",
          options: ["The plane landed.", "She read a book.", "He kicked the ball.", "They ate rice."],
          correctIndex: 0,
          explanation: "'Landed' has no object receiving the action.",
        },
        {
          prompt: "Which sentence contains a transitive verb?",
          options: ["The dog chased the cat.", "The baby cried.", "The sun rose.", "She smiled."],
          correctIndex: 0,
          explanation: "Chased what? 'the cat' — a direct object, so 'chased' is transitive.",
        },
        {
          prompt: "In 'He sang loudly', 'sang' is…",
          options: ["intransitive", "transitive", "linking", "auxiliary"],
          correctIndex: 0,
          explanation: "'Loudly' tells how, not what; there is no object, so 'sang' is intransitive here.",
        },
        {
          prompt: "In 'He sang a song', 'sang' is…",
          options: ["transitive", "intransitive", "linking", "modal"],
          correctIndex: 0,
          explanation: "Sang what? 'a song' — a direct object makes it transitive.",
        },
        {
          prompt: "Which verb can be transitive OR intransitive depending on the sentence?",
          options: ["run", "sleep", "arrive", "exist"],
          correctIndex: 0,
          explanation: "'She runs a shop' (transitive) vs 'She runs daily' (intransitive).",
        },
        {
          prompt: "In 'The teacher gave the pupils some books', the indirect object is…",
          options: ["the pupils", "some books", "the teacher", "gave"],
          correctIndex: 0,
          explanation: "The pupils benefit from the action; 'books' is the direct object.",
        },
        {
          prompt: "'Jack fell on the steps.' The verb 'fell' is…",
          options: ["intransitive", "transitive", "linking", "helping"],
          correctIndex: 0,
          explanation: "'On the steps' tells where, not what; there is no direct object.",
        },
        {
          prompt: "Which is NOT an action verb?",
          options: ["is", "write", "dig", "imagine"],
          correctIndex: 0,
          explanation: "'Is' is a linking verb (state of being), not an action verb.",
        },
        {
          prompt: "The word that answers 'verb + what/whom?' is called the…",
          options: ["direct object", "subject", "adverb", "complement"],
          correctIndex: 0,
          explanation: "That answer is the direct object of a transitive verb.",
        },
        {
          prompt: "Which sentence has a mental (not physical) action verb?",
          options: ["She remembered the answer.", "She carried the basket.", "She ran home.", "She dug a hole."],
          correctIndex: 0,
          explanation: "'Remembered' is a mental action.",
        },
        {
          prompt: "'Farmers grow rice.' The verb 'grow' is here…",
          options: ["transitive", "intransitive", "linking", "modal"],
          correctIndex: 0,
          explanation: "Grow what? 'rice' — a direct object, so transitive.",
        },
        {
          prompt: "'The children grow quickly.' The verb 'grow' is here…",
          options: ["intransitive", "transitive", "linking", "helping"],
          correctIndex: 0,
          explanation: "'Quickly' tells how; there is no object, so 'grow' is intransitive.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write two sentences using the verb 'read' — one where it is transitive and one where it is intransitive. Underline the verb in each and, for the transitive one, state the direct object.",
          answerKey:
            "Transitive example must have a direct object, e.g. 'She reads novels.' (reads what? novels). Intransitive example must have none, e.g. 'She reads every evening.' Award 2 marks per correct, clearly-labelled sentence; deduct for a missing or wrong object.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence contains a transitive verb?",
          options: [
            "The mechanic repaired the engine.",
            "The engine stopped.",
            "The rain fell.",
            "They laughed.",
          ],
          correctIndex: 0,
          answerKey: "'Repaired what? the engine' — a direct object, so 'repaired' is transitive.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Underline the action verb and state whether it is physical or mental: 'The pupils understood the lesson.'",
          answerKey:
            "Verb: 'understood'; it is a mental action verb (the understanding happens in the mind). Full marks for identifying the verb and correctly naming it as mental.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "For 'The kind woman gave the beggar some food', name the direct object and the indirect object.",
          answerKey:
            "Direct object: 'some food' (gave what?). Indirect object: 'the beggar' (gave to whom / who benefits). Award a mark per correct object.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between a transitive and an intransitive verb. Give a reliable test for telling them apart, then illustrate with two of your own sentences using the same verb both ways.",
          answerKey:
            "A strong answer defines transitive (carries action to a direct object) and intransitive (complete action, no object); gives the 'verb + what/whom?' test (a named answer = transitive, none = intransitive); and shows one verb used both ways with the objects correctly identified. Award marks for accurate definitions, the test, and two valid contrasting sentences.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Citrus College, Rhetoric and Composition, 6.1 Parts of Speech (https://human.libretexts.org/Courses/Citrus_College/Rhetoric_and_Composition_(Wikibooks)/06:_Grammar_and_Mechanics/6.01:_Parts_of_Speech)
      slug: "linking-verbs",
      title: "Linking Verbs",
      objective:
        "By the end of the topic, learners should be able to identify linking verbs, name the subject complement they introduce (predicate noun or predicate adjective), and use the substitution test to separate linking verbs from action verbs.",
      estimatedMinutes: 140,
      notes: `## What a linking verb does

**Linking verb** — the main verb in a sentence that shows **no action**. It works like an **equals sign**, joining the subject to a word in the predicate that **renames** or **describes** it.

- *The tea **is** hot.* (tea = hot)
- *The work **was** very tiring.* (work → tiring)

The word that follows the linking verb is the **subject complement**. Because a linking verb has no direct object, it cannot form a passive construction.

## Two kinds of subject complement

- **Predicate noun (predicate nominative)** — a noun that *renames* the subject: *Kollie **is** a **teacher**.* (Kollie = teacher)
- **Predicate adjective** — an adjective that *describes* the subject: *The soup **tastes** **delicious**.* (soup → delicious)

## The linking verbs

- The commonest linking verb is **be** in all its forms: *am, is, are, was, were, be, been, being.*
- Other linking verbs are "sense" and "state" verbs: **appear, become, seem, taste, continue, remain,** and also *look, feel, smell, sound, grow, stay.*

## The substitution test

Many sense verbs (look, feel, taste, smell, sound) can be **either** linking or action verbs. Replace the verb with a form of **be**:

- If the sentence still makes sense, the verb is **linking**.
- If it turns to nonsense, the verb is an **action** verb.

| Sentence | Swap in "is" | Result |
| --- | --- | --- |
| The soup tastes delicious. | The soup **is** delicious. ✓ | linking |
| She tastes the soup. | She **is** the soup. ✗ | action (transitive) |
| The dog smells bad. | The dog **is** bad. ✓ | linking |
| The dog smells the food. | The dog **is** the food. ✗ | action (transitive) |

## Summary

- A linking verb connects, it does not act.
- What follows is a **subject complement**: a predicate noun (renames) or a predicate adjective (describes).
- Learn the *be* family, plus *become, seem, appear, remain, taste, feel, look, smell, sound.*
- When in doubt, use the **be-substitution test**.`,
      workedExample: `**Task.** State whether each underlined verb is *linking* or *action*. For each linking verb, name the subject complement and say whether it is a predicate noun or a predicate adjective.

1. *The mango **is** ripe.*
2. *She **tastes** the pepper soup.*
3. *Kollie **became** a nurse.*
4. *The music **sounds** beautiful.*

**Answers**

1. **is** → *linking*. Complement: *ripe* — a **predicate adjective** (describes *mango*).
2. **tastes** → *action* (transitive). Swap test: *She is the pepper soup* is nonsense; 'tastes' shows action with the object *the pepper soup*.
3. **became** → *linking*. Complement: *a nurse* — a **predicate noun** (renames *Kollie*).
4. **sounds** → *linking*. Swap test: *The music is beautiful* makes sense; complement *beautiful* is a **predicate adjective**.`,
      quiz: [
        {
          prompt: "A linking verb works most like a…",
          options: ["equals sign", "question mark", "full stop", "comma"],
          correctIndex: 0,
          explanation: "It joins the subject to a word that renames or describes it, like '='.",
        },
        {
          prompt: "The commonest linking verb is a form of…",
          options: ["be", "do", "have", "go"],
          correctIndex: 0,
          explanation: "Am, is, are, was, were are all forms of 'be', the main linking verb.",
        },
        {
          prompt: "In 'The tea is hot', the linking verb is…",
          options: ["is", "tea", "hot", "the"],
          correctIndex: 0,
          explanation: "'Is' links the subject 'tea' to the describing word 'hot'.",
        },
        {
          prompt: "A word that renames the subject after a linking verb is a…",
          options: ["predicate noun", "direct object", "adverb", "preposition"],
          correctIndex: 0,
          explanation: "A predicate noun (predicate nominative) renames the subject.",
        },
        {
          prompt: "A word that describes the subject after a linking verb is a…",
          options: ["predicate adjective", "predicate noun", "indirect object", "modal"],
          correctIndex: 0,
          explanation: "A predicate adjective describes the subject.",
        },
        {
          prompt: "In 'Kollie is a teacher', 'teacher' is a…",
          options: ["predicate noun", "predicate adjective", "direct object", "adverb"],
          correctIndex: 0,
          explanation: "'Teacher' renames the subject Kollie, so it is a predicate noun.",
        },
        {
          prompt: "Which of these is NOT a linking verb?",
          options: ["run", "seem", "become", "appear"],
          correctIndex: 0,
          explanation: "'Run' is an action verb; seem, become and appear can all link.",
        },
        {
          prompt: "In 'The soup tastes salty', 'tastes' is a…",
          options: ["linking verb", "transitive verb", "helping verb", "modal"],
          correctIndex: 0,
          explanation: "It links 'soup' to 'salty'; 'The soup is salty' makes sense.",
        },
        {
          prompt: "In 'He tastes the soup', 'tastes' is…",
          options: ["an action verb", "a linking verb", "a modal", "an adverb"],
          correctIndex: 0,
          explanation: "'He is the soup' is nonsense, so 'tastes' shows action with an object.",
        },
        {
          prompt: "The reliable way to test a possible linking verb is to…",
          options: ["replace it with a form of 'be'", "add -ed", "make it plural", "move it to the front"],
          correctIndex: 0,
          explanation: "If a form of 'be' fits and still makes sense, the verb is linking.",
        },
        {
          prompt: "Which sentence contains a linking verb?",
          options: ["The weather became cold.", "The dog chased the cat.", "She wrote a poem.", "They ran home."],
          correctIndex: 0,
          explanation: "'Became' links 'weather' to 'cold'; the others show action.",
        },
        {
          prompt: "In 'The children seem tired', the subject complement is…",
          options: ["tired", "children", "seem", "the"],
          correctIndex: 0,
          explanation: "'Tired' is a predicate adjective describing 'children'.",
        },
        {
          prompt: "Why can a linking verb not form a passive construction?",
          options: ["it has no direct object", "it has no subject", "it is always plural", "it has no tense"],
          correctIndex: 0,
          explanation: "The passive needs an object to move to the subject; linking verbs have none.",
        },
        {
          prompt: "In 'The flowers smell sweet', 'smell' is a…",
          options: ["linking verb", "transitive verb", "helping verb", "adverb"],
          correctIndex: 0,
          explanation: "'The flowers are sweet' makes sense, so 'smell' links here.",
        },
        {
          prompt: "In 'She smells the flowers', 'smells' is…",
          options: ["an action verb", "a linking verb", "a modal", "a preposition"],
          correctIndex: 0,
          explanation: "'She is the flowers' is nonsense; 'smells' shows action with an object.",
        },
        {
          prompt: "Which word completes a linking-verb sentence as a predicate adjective? 'The road is ___.'",
          options: ["narrow", "quickly", "runs", "under"],
          correctIndex: 0,
          explanation: "'Narrow' is an adjective describing the subject 'road'.",
        },
        {
          prompt: "Which is a 'state' linking verb?",
          options: ["remain", "throw", "build", "carry"],
          correctIndex: 0,
          explanation: "'Remain' links a subject to a complement, e.g. 'She remained calm.'",
        },
        {
          prompt: "In 'James is our captain', the predicate noun is…",
          options: ["captain", "James", "is", "our"],
          correctIndex: 0,
          explanation: "'Captain' renames the subject James.",
        },
        {
          prompt: "A linking verb connects the subject to its…",
          options: ["complement", "object", "adverb", "preposition"],
          correctIndex: 0,
          explanation: "The word linked to the subject is the subject complement.",
        },
        {
          prompt: "Which sentence uses 'grow' as a linking verb?",
          options: ["The nights grow cold.", "Farmers grow maize.", "They grow vegetables.", "She grows flowers."],
          correctIndex: 0,
          explanation: "'The nights are cold' makes sense; 'grow' links here to the adjective 'cold'.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write one sentence in which 'feel' is a linking verb and one in which it is an action verb. Underline the verb in each.",
          answerKey:
            "Linking: e.g. 'I feel tired.' ('I am tired' works). Action: e.g. 'I feel the cloth.' (has an object). Award 2 marks per correct, clearly-distinguished sentence.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence contains a predicate noun?",
          options: [
            "Mr. Weah is our teacher.",
            "The soup is hot.",
            "She runs fast.",
            "They arrived late.",
          ],
          correctIndex: 0,
          answerKey: "'Teacher' is a predicate noun renaming the subject; the others do not rename the subject with a noun.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Use the substitution test to decide whether 'looks' is linking or action in: 'The baby looks healthy.' Show your test.",
          answerKey:
            "Swap in 'is': 'The baby is healthy' makes sense, so 'looks' is a linking verb; 'healthy' is a predicate adjective. Full marks for the test and correct conclusion.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Name the subject complement in 'The results became clear' and say whether it is a predicate noun or predicate adjective.",
          answerKey:
            "Complement: 'clear'; it is a predicate adjective describing 'results'. Award a mark for the complement and a mark for the correct type.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a linking verb is and how it differs from an action verb. Include the two kinds of subject complement and describe the be-substitution test with your own examples.",
          answerKey:
            "A strong answer defines linking verbs (join subject to a complement, no action, no object) versus action verbs (show what the subject does); names predicate noun (renames) and predicate adjective (describes); and explains the be-substitution test with clear examples, especially for a sense verb used both ways. Award marks for accurate definitions, both complement types, and a correctly demonstrated test.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (Weaver et al.), 8.4 Modals (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(Weaver_et_al.)/8:_Verbs/8.4:_Modals)
      slug: "helping-and-modal-verbs",
      title: "Helping Verbs and Modal Auxiliaries",
      objective:
        "By the end of the topic, learners should be able to identify helping (auxiliary) verbs in a verb phrase, distinguish the primary auxiliaries (be, have, do) from the modal auxiliaries, and use each modal to add the correct meaning without common errors.",
      estimatedMinutes: 150,
      notes: `## Verb phrases and helping verbs

**Helping (auxiliary) verb** — comes **before** a main verb to build a **verb phrase** and to show tense, questions, negatives, or shades of meaning. In a verb phrase the helpers come **first** and the main verb comes **last**: *They **will have finished** by noon* (*will, have* = helpers; *finished* = main verb).

**Primary auxiliaries — be, have, do:**

- **be** → progressive tenses and the passive: *She **is** singing; The gate **was** painted.*
- **have** → perfect tenses: *They **have** eaten; He **had** left.*
- **do** → questions, negatives, and emphasis: ***Do** you know? I **do not** agree; She **does** try hard.*

## Modal auxiliaries

**Modal auxiliary** — a special helping verb that adds meaning to the main verb. The formula is fixed:

**Subject + modal + main verb in the base form.**

The ten main modals and the meaning each adds:

| Modal | Meaning it adds | Example |
| --- | --- | --- |
| can | ability or possibility | *I **can** lift this box.* |
| could | past ability; present possibility; permission | *I **could** swim at five.* |
| may | permission; uncertain future | *You **may** begin the exam.* |
| might | uncertain future / possibility | *I **might** attend the concert.* |
| shall | intended future action | *I **shall** go to the opera.* |
| should | obligation; advice | *I **should** mail my RSVP.* |
| will | future intention; requests | *I **will** get an A in this class.* |
| would | preference; polite request; habitual past | *I **would** like the steak, please.* |
| must | obligation; necessity | *We **must** be on time for class.* |
| ought to | obligation (like should) | *You **ought to** rest.* |

## Rules and common errors

1. **Base form only after a modal** — never *to* and never *-ing*:
   - ✗ *I can to move* → ✓ *I can move.*
   - ✗ *I could moving* → ✓ *I could move.*
2. **No double modals:** ✗ *I should must renew* → ✓ *I must renew.*
3. **Do not drop a needed modal:** ✗ *I renew my passport* (when necessity is meant) → ✓ *I **must** renew my passport.*
4. **With the perfect, use 'have' (never 'had'):** ✗ *Jamie would had attended* → ✓ *Jamie **would have** attended.*

## Summary

- Helping verbs support a main verb to form a verb phrase.
- Primary auxiliaries **be, have, do** build tenses, questions and negatives.
- **Modals** add meaning (ability, permission, obligation, advice, possibility) and take the **base form** of the main verb.`,
      workedExample: `**Task.** In each sentence, underline the helping verb(s) and state whether each is a primary auxiliary or a modal; for modals, give the meaning added.

1. *She **is** writing a letter.*
2. *You **should** rest before the match.*
3. *They **have** eaten already.*
4. *We **must** leave now.*

**Answers**

1. **is** → *primary auxiliary* (be); it forms the present progressive with the main verb *writing*.
2. **should** → *modal*; meaning added = **advice / obligation**. Main verb *rest* is in the base form.
3. **have** → *primary auxiliary* (have); it forms the present perfect with the main verb *eaten*.
4. **must** → *modal*; meaning added = **obligation / necessity**. Main verb *leave* is in the base form.

**Rule applied:** a modal is followed by the base form of the main verb (no *to*, no *-ing*).`,
      quiz: [
        {
          prompt: "A helping verb combines with a main verb to form a…",
          options: ["verb phrase", "noun phrase", "clause", "prepositional phrase"],
          correctIndex: 0,
          explanation: "Helpers plus the main verb make up the verb phrase.",
        },
        {
          prompt: "Which three are the primary auxiliary verbs?",
          options: ["be, have, do", "can, may, must", "run, jump, sing", "seem, become, feel"],
          correctIndex: 0,
          explanation: "Be, have and do are the three primary auxiliaries.",
        },
        {
          prompt: "In 'They have finished the work', the helping verb is…",
          options: ["have", "finished", "work", "they"],
          correctIndex: 0,
          explanation: "'Have' assists the main verb 'finished' to form the present perfect.",
        },
        {
          prompt: "Which auxiliary forms the progressive tenses and the passive?",
          options: ["be", "have", "do", "will"],
          correctIndex: 0,
          explanation: "'Be' builds progressive tenses (is writing) and the passive (was painted).",
        },
        {
          prompt: "Which of these is a modal auxiliary?",
          options: ["must", "have", "is", "does"],
          correctIndex: 0,
          explanation: "'Must' is a modal; the others are primary auxiliaries here.",
        },
        {
          prompt: "After a modal, the main verb must be in the…",
          options: ["base form", "-ing form", "-ed form", "to-infinitive"],
          correctIndex: 0,
          explanation: "The formula is subject + modal + base verb.",
        },
        {
          prompt: "The modal in 'You may leave now' expresses…",
          options: ["permission", "obligation", "ability", "the past"],
          correctIndex: 0,
          explanation: "'May' grants permission.",
        },
        {
          prompt: "The modal in 'She can swim' expresses…",
          options: ["ability", "permission", "obligation", "advice"],
          correctIndex: 0,
          explanation: "'Can' shows ability to do something.",
        },
        {
          prompt: "The modal in 'Students must wear uniforms' expresses…",
          options: ["obligation", "possibility", "permission", "ability"],
          correctIndex: 0,
          explanation: "'Must' shows a requirement or necessity.",
        },
        {
          prompt: "The modal in 'It might rain today' expresses…",
          options: ["possibility", "certainty", "ability", "permission"],
          correctIndex: 0,
          explanation: "'Might' shows something is possible but not certain.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["I can move the table.", "I can to move the table.", "I can moving the table.", "I can moved the table."],
          correctIndex: 0,
          explanation: "A modal takes the base form: 'can move' (no 'to', no '-ing', no '-ed').",
        },
        {
          prompt: "Which sentence contains an error?",
          options: ["I should must renew it.", "I must renew it.", "I should renew it.", "I will renew it."],
          correctIndex: 0,
          explanation: "You cannot use two modals together ('should must').",
        },
        {
          prompt: "Which auxiliary forms questions and negatives, e.g. 'Do you know?'",
          options: ["do", "be", "have", "must"],
          correctIndex: 0,
          explanation: "'Do' forms questions, negatives and emphasis.",
        },
        {
          prompt: "In the verb phrase 'will have finished', the main verb is…",
          options: ["finished", "will", "have", "will have"],
          correctIndex: 0,
          explanation: "Helpers come first (will, have); the main verb is 'finished'.",
        },
        {
          prompt: "The modal 'should' most often expresses…",
          options: ["advice or obligation", "ability", "permission", "past tense"],
          correctIndex: 0,
          explanation: "'Should' gives advice or states an obligation.",
        },
        {
          prompt: "Which sentence correctly combines a modal with the perfect?",
          options: ["Jamie would have attended.", "Jamie would had attended.", "Jamie would attends.", "Jamie would attending."],
          correctIndex: 0,
          explanation: "With a modal, use 'have' not 'had': 'would have attended'.",
        },
        {
          prompt: "In 'He does try hard', the auxiliary 'does' adds…",
          options: ["emphasis", "the future", "permission", "possibility"],
          correctIndex: 0,
          explanation: "'Do/does' can add emphasis to a main verb.",
        },
        {
          prompt: "'We shall travel tomorrow.' The modal 'shall' expresses…",
          options: ["intended future action", "past ability", "permission", "obligation"],
          correctIndex: 0,
          explanation: "'Shall' signals an intended future action.",
        },
        {
          prompt: "'I would like the steak, please.' Here 'would' makes the request…",
          options: ["polite", "impossible", "past", "compulsory"],
          correctIndex: 0,
          explanation: "'Would' is used for polite requests and preferences.",
        },
        {
          prompt: "Which is a complete list of correct forms after a modal? 'She must ___.'",
          options: ["go / leave / study", "going / to leave / studied", "to go / leaving", "went / studies"],
          correctIndex: 0,
          explanation: "Only base forms follow a modal: go, leave, study.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Rewrite 'You leave the classroom' three times, each with a different modal, and state the meaning each modal adds.",
          answerKey:
            "Accept any three distinct modals with correct meanings, e.g. 'You may leave' (permission), 'You must leave' (obligation), 'You should leave' (advice), 'You can leave' (ability/permission). Award a mark per correct modal + meaning pairing.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses a modal auxiliary correctly?",
          options: [
            "She might join us later.",
            "She might to join us later.",
            "She might joining us later.",
            "She might joined us later.",
          ],
          correctIndex: 0,
          answerKey: "A modal is followed by the base form: 'might join'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Underline the helping verb(s) and circle the main verb: 'By next year, she will have graduated.'",
          answerKey:
            "Helping verbs: 'will' and 'have'; main verb: 'graduated'. Full marks for correctly separating both auxiliaries from the main verb.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Each sentence has a modal error. Correct it: (a) 'I can to swim.' (b) 'We should must hurry.'",
          answerKey:
            "(a) 'I can swim.' (no 'to' after a modal). (b) 'We should hurry.' or 'We must hurry.' (no double modal). Award a mark per correction.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between primary auxiliaries and modal auxiliaries. Give the meaning of at least four modals with example sentences, and state two rules that keep modal use correct.",
          answerKey:
            "A strong answer distinguishes primary auxiliaries (be/have/do build tenses, questions, negatives) from modals (add meaning), gives at least four modals with accurate meanings and examples (e.g. can-ability, may-permission, must-obligation, should-advice), and states two rules (base form after a modal; no double modals; use 'have' not 'had' with the perfect). Award marks for the distinction, four modals, and two rules.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — College of the Sequoias, Reading and Composition, 17.15 Verb Tenses (https://human.libretexts.org/Courses/College_of_the_Sequoias/Reading_and_Composition/17:_Grammar/17.15:_Verb_Tenses)
      slug: "verb-tenses",
      title: "Tenses of Verbs: Present, Past and Future",
      objective:
        "By the end of the topic, learners should be able to form and use the simple present, simple past and simple future correctly, apply the third-person -s and the -ed past rules, and keep tense consistent in a passage.",
      estimatedMinutes: 150,
      notes: `## Tense: locating an action in time

**Tense** — the form of a verb that shows **when** an action happens: **present**, **past**, or **future**. Choose the right tense and keep it steady.

\`\`\`svg The three simple tenses on a timeline
<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <line x1="20" y1="70" x2="440" y2="70" stroke="#8a5833" stroke-width="2"/>
  <polygon points="440,70 430,65 430,75" fill="#8a5833"/>
  <circle cx="120" cy="70" r="5" fill="#8a5833"/>
  <circle cx="230" cy="70" r="5" fill="#8a5833"/>
  <circle cx="340" cy="70" r="5" fill="#8a5833"/>
  <g font-size="13" text-anchor="middle">
    <text x="120" y="45" font-weight="bold">PAST</text>
    <text x="120" y="95">I walked</text>
    <text x="230" y="45" font-weight="bold">PRESENT</text>
    <text x="230" y="95">I walk</text>
    <text x="340" y="45" font-weight="bold">FUTURE</text>
    <text x="340" y="95">I will walk</text>
  </g>
  <text x="230" y="128" text-anchor="middle" font-size="11.5" fill="#6a5a48">Time flows left to right; tense fixes the verb at a point on the line.</text>
</svg>
\`\`\`

## The simple present

The **simple present** indicates an action taking place at the time you express it, or an action that occurs **regularly**. It is also used for **general truths**.

- *We **wear** organic cotton shirts.* (a current, general practice)
- *I **watch** the documentary each Sunday night.* (a habit / routine)
- *Water **boils** at 100 °C.* (a general truth)

**The third-person -s.** With a singular third-person subject (*he, she, it*), add **-s** to the verb: *He plays.* Add **-es** after *-s, -sh, -ch, -x, -o* (*She watch**es**; He go**es***), and change a consonant + *y* to *-ies* (*carry → she carr**ies***).

## The simple past

The **simple past** indicates that an action is **completed and has already taken place**. Regular verbs add **-ed** (or **-d**).

- *Martin Luther King, Jr. **gave** his most famous speech in 1963.*
- *As a girl, she **wondered** how her degree would help her career.*

(Regular and irregular past forms are studied in detail in Period III.)

## The simple future

The **simple future** indicates an action that **will** or is likely to **take place**. It is formed with **will** + the base verb.

- *Later today I **will rinse** the dishes.*
- *The defendant probably **will plead** innocent.*

English also shows the future with **going to**: *It **is going to** rain.*

## Keeping tense consistent

Within one passage, hold the tense steady unless the time genuinely changes. **Tense-drift** — sliding between past and present — is the commonest fault in learners' writing.

- ✗ *He **opened** the door and **sees** a stranger.*
- ✓ *He **opened** the door and **saw** a stranger.*

- **Narrative** (a story that happened) → **past**.
- **Descriptive** (painting a scene) → often **present**.
- Whichever you choose, stay in it.

## Summary

| Tense | Use | How to form | Example |
| --- | --- | --- | --- |
| Simple present | habit, routine, general truth | base verb (+ -s for he/she/it) | She teaches. |
| Simple past | a completed action | -ed / -d (regular) | She taught. |
| Simple future | an action still to come | will + base verb | She will teach. |`,
      workedExample: `**Task.** Rewrite the passage so that the tense is consistent in the **simple past**, then identify the tense of every verb.

*"Musu walks to the market. A trader calls her over and she stops to bargain. She buys rice for the week."*

**Corrected (all simple past):**

"Musu **walked** to the market. A trader **called** her over and she **stopped** to bargain. She **bought** rice for the week."

**Explanation of changes**

- *walks → walked*, *calls → called*, *stops → stopped* — regular verbs add -ed for the completed, past narrative actions.
- *buys → bought* — 'buy' is irregular; its simple past is *bought*.

Every verb now sits in the **simple past**, so the passage is consistent — the fix for tense-drift.`,
      quiz: [
        {
          prompt: "Tense is the verb form that shows…",
          options: ["when an action happens", "who does an action", "where an action happens", "why an action happens"],
          correctIndex: 0,
          explanation: "Tense locates an action in time: present, past or future.",
        },
        {
          prompt: "Which sentence is in the simple present?",
          options: ["She sings every morning.", "She sang yesterday.", "She will sing tomorrow.", "She is singing now."],
          correctIndex: 0,
          explanation: "'Sings' is the simple present, used here for a habit.",
        },
        {
          prompt: "The simple present is used for all EXCEPT…",
          options: ["a completed past action", "a habit", "a routine", "a general truth"],
          correctIndex: 0,
          explanation: "A completed past action needs the simple past, not the present.",
        },
        {
          prompt: "Choose the correct present-tense verb: 'He ___ football on Saturdays.'",
          options: ["plays", "play", "playing", "played"],
          correctIndex: 0,
          explanation: "Third-person singular in the present adds -s: 'plays'.",
        },
        {
          prompt: "Which is the correct third-person present of 'watch'?",
          options: ["watches", "watchs", "watching", "watched"],
          correctIndex: 0,
          explanation: "Add -es after -ch: 'watches'.",
        },
        {
          prompt: "Which is the correct third-person present of 'carry'?",
          options: ["carries", "carrys", "carryes", "caring"],
          correctIndex: 0,
          explanation: "Consonant + y changes to -ies: 'carries'.",
        },
        {
          prompt: "The simple past shows an action that is…",
          options: ["completed", "still happening", "yet to come", "a general truth"],
          correctIndex: 0,
          explanation: "The simple past indicates a completed action.",
        },
        {
          prompt: "What is the simple past of the regular verb 'wonder'?",
          options: ["wondered", "wonder", "wondering", "wonders"],
          correctIndex: 0,
          explanation: "Regular verbs add -ed: 'wondered'.",
        },
        {
          prompt: "Which sentence is in the future tense?",
          options: ["We will visit Kakata.", "We visited Kakata.", "We visit Kakata.", "We are visiting Kakata."],
          correctIndex: 0,
          explanation: "'Will visit' places the action in the future.",
        },
        {
          prompt: "The simple future is formed with…",
          options: ["will + base verb", "verb + -ed", "am/is/are + verb-ing", "have + verb-ed"],
          correctIndex: 0,
          explanation: "Will + the base verb makes the simple future.",
        },
        {
          prompt: "Which sentence keeps tense consistent?",
          options: [
            "She opened the door and saw the rain.",
            "She opened the door and sees the rain.",
            "She opens the door and saw the rain.",
            "She open the door and seeing the rain.",
          ],
          correctIndex: 0,
          explanation: "Both verbs are in the simple past, so the tense is consistent.",
        },
        {
          prompt: "Identify the tense: 'The sun rises in the east.'",
          options: ["simple present", "simple past", "future", "progressive"],
          correctIndex: 0,
          explanation: "It states a general truth, so it is the simple present.",
        },
        {
          prompt: "Which tense is best for a story that has already happened?",
          options: ["simple past", "simple present", "future", "none"],
          correctIndex: 0,
          explanation: "Narrative writing usually uses the simple past.",
        },
        {
          prompt: "Another way to show the future is with…",
          options: ["going to", "used to", "have to", "did"],
          correctIndex: 0,
          explanation: "'It is going to rain' shows the future with 'going to'.",
        },
        {
          prompt: "Choose the correct verb: 'Yesterday they ___ to the farm.'",
          options: ["walked", "walk", "will walk", "walking"],
          correctIndex: 0,
          explanation: "'Yesterday' signals the past, so 'walked' is correct.",
        },
        {
          prompt: "Choose the correct verb: 'Every day she ___ to school.'",
          options: ["walks", "walked", "will walk", "walking"],
          correctIndex: 0,
          explanation: "'Every day' signals a habit, so the simple present 'walks' fits.",
        },
        {
          prompt: "The commonest fault when learners tell stories is…",
          options: ["tense-drift", "spelling", "too many nouns", "short sentences"],
          correctIndex: 0,
          explanation: "Tense-drift is sliding between past and present within a passage.",
        },
        {
          prompt: "Which is the correct third-person present of 'go'?",
          options: ["goes", "gos", "going", "went"],
          correctIndex: 0,
          explanation: "Add -es after -o: 'goes'.",
        },
        {
          prompt: "Which sentence is in the simple future?",
          options: ["The team will train tomorrow.", "The team trained hard.", "The team trains daily.", "The team is training."],
          correctIndex: 0,
          explanation: "'Will train' is the simple future.",
        },
        {
          prompt: "In descriptive writing that paints a scene, a common tense choice is the…",
          options: ["simple present", "simple future", "past perfect", "future perfect"],
          correctIndex: 0,
          explanation: "Descriptive writing often uses the present to make a scene feel alive.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write the simple present, simple past and simple future of 'walk' in a full sentence for each.",
          answerKey:
            "Present e.g. 'She walks to school.'; Past 'She walked to school.'; Future 'She will walk to school.' Award a mark per correctly-formed tense in a complete sentence.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Rewrite with the correct third-person present verbs: 'He (watch) the news and (carry) the baby.'",
          answerKey:
            "Expected: 'He watches the news and carries the baby.' Award a mark for 'watches' (-es after -ch) and a mark for 'carries' (y to -ies).",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "The passage has a tense error. Rewrite it correctly in the simple past: 'He entered the room and looks around.'",
          answerKey:
            "Expected: 'He entered the room and looked around.' Both verbs must be in the simple past. Full marks for correcting 'looks' to 'looked' while leaving 'entered' unchanged.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is written in the simple future?",
          options: [
            "Next term we will study poetry.",
            "Last term we studied poetry.",
            "We study poetry.",
            "We are studying poetry.",
          ],
          correctIndex: 0,
          answerKey: "'Will study' is the simple future.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short narrative paragraph (4–6 sentences) about a journey you took, using the simple past throughout. Keep your tense consistent, then underline every verb.",
          answerKey:
            "Award marks for: a consistent simple-past tense (no drift); correctly formed past verbs, including any irregular ones; every verb underlined; a clear, ordered narrative; and correct sentence structure. Deduct for each verb that slips out of the past tense.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — College of the Sequoias, Reading and Composition, 17.15 Verb Tenses (https://human.libretexts.org/Courses/College_of_the_Sequoias/Reading_and_Composition/17:_Grammar/17.15:_Verb_Tenses)
      slug: "progressive-forms",
      title: "Progressive Forms of Verbs",
      objective:
        "By the end of the topic, learners should be able to form the present, past and future progressive with be + the -ing form, apply the -ing spelling rules, and use progressive verbs in descriptive and narrative writing.",
      estimatedMinutes: 150,
      notes: `## The progressive (continuous) forms

The **progressive** (also called **continuous**) shows an action **in progress** at a particular time. It is built from a form of **be** + the **-ing** form of the main verb (the *present participle*).

| Progressive | Meaning | Form | Example |
| --- | --- | --- | --- |
| Present progressive | happening now | am/is/are + -ing | She **is writing** a letter. |
| Past progressive | in progress at a past moment | was/were + -ing | They **were playing** football. |
| Future progressive | will be in progress later | will be + -ing | At nine I **will be studying**. |

- **Present progressive** — indicates something is happening at the time you express it: *The worker **is hammering**, and her foreman **is watching** lazily.*
- **Past progressive** — a continuing past action, or an action in progress when another happened: *The mob tackled him while he **was introducing** the film.*
- **Future progressive** — a continuing action in the future: *The government **will be monitoring** the phones in the lab.*

## Spelling of the -ing form

- Drop a silent **-e**: *write → writing, make → making.*
- Double the final consonant of a short, stressed verb: *run → running, sit → sitting, swim → swimming, stop → stopping.*
- Otherwise just add **-ing**: *play → playing, read → reading.*

## Progressive verbs in writing

- **Descriptive writing** paints a scene; the present progressive makes it feel alive: *The market **is bustling**; traders **are calling** out prices and children **are weaving** through the crowd.*
- **Narrative writing** tells a story; the past progressive sets the background action while the simple past carries the main events: *We **were walking** home when the rain **started**.*

## Common errors

- Leaving out the form of **be**: ✗ *She writing a letter* → ✓ *She **is** writing a letter.*
- Wrong number on **be**: ✗ *They is playing* → ✓ *They **are** playing.*
- Forgetting the spelling change: ✗ *runing* → ✓ *running.*

## Summary

- Progressive = **be + -ing**; the form of *be* shows the tense (is / was / will be).
- Use it for actions **in progress** at a point in time.
- Mind the **-ing** spelling (drop silent e; double a final consonant after a short stressed vowel).`,
      workedExample: `**Task.** Change each verb to the progressive tense named, then say what the -ing spelling rule required.

1. *She (write) a letter — present progressive.*
2. *They (run) in the rain — past progressive.*
3. *I (study) at nine — future progressive.*

**Answers**

1. *She **is writing** a letter.* — present progressive (am/is/are + -ing). Spelling: *write* drops the silent **-e** to make *writing*.
2. *They **were running** in the rain.* — past progressive (was/were + -ing). Spelling: *run* doubles the final consonant to make *running*.
3. *I **will be studying** at nine.* — future progressive (will be + -ing). Spelling: *study* simply adds **-ing** to make *studying* (no change).

**Rule applied:** every progressive is a form of **be** + the **-ing** participle; the form of *be* fixes the tense.`,
      quiz: [
        {
          prompt: "The progressive form shows an action that is…",
          options: ["in progress", "completed", "a general truth", "never happening"],
          correctIndex: 0,
          explanation: "The progressive (continuous) shows an action in progress at a point in time.",
        },
        {
          prompt: "The progressive is built from a form of 'be' plus the…",
          options: ["-ing form", "-ed form", "base form", "to-infinitive"],
          correctIndex: 0,
          explanation: "be + present participle (-ing) makes the progressive.",
        },
        {
          prompt: "The present progressive is formed with…",
          options: ["am/is/are + verb-ing", "will + verb", "verb + -ed", "have + verb-ed"],
          correctIndex: 0,
          explanation: "A present form of 'be' plus the -ing participle.",
        },
        {
          prompt: "Which sentence uses the present progressive?",
          options: ["The baby is sleeping.", "The baby slept.", "The baby sleeps.", "The baby will sleep."],
          correctIndex: 0,
          explanation: "'Is sleeping' shows an action in progress right now.",
        },
        {
          prompt: "What is the past progressive of 'They (run)'?",
          options: ["They were running", "They ran", "They run", "They will run"],
          correctIndex: 0,
          explanation: "Past progressive = past 'be' (were) + running.",
        },
        {
          prompt: "The future progressive of 'I (study)' is…",
          options: ["I will be studying", "I studied", "I will study", "I am studying"],
          correctIndex: 0,
          explanation: "Future progressive = will be + studying.",
        },
        {
          prompt: "Which is the -ing form of 'swim'?",
          options: ["swimming", "swimED", "swam", "swiming"],
          correctIndex: 0,
          explanation: "Double the m and add -ing: swimming.",
        },
        {
          prompt: "Which is the -ing form of 'write'?",
          options: ["writing", "writeing", "writting", "wrote"],
          correctIndex: 0,
          explanation: "Drop the silent -e and add -ing: writing.",
        },
        {
          prompt: "Complete the past progressive: 'While it ___ raining, we stayed inside.'",
          options: ["was", "is", "will be", "has"],
          correctIndex: 0,
          explanation: "Past progressive needs the past 'be': 'was raining'.",
        },
        {
          prompt: "Which sentence is correct?",
          options: ["They are watching a film.", "They watching a film.", "They is watching a film.", "They been watching a film."],
          correctIndex: 0,
          explanation: "Plural 'they' takes 'are' before the -ing verb.",
        },
        {
          prompt: "Which sentence has an error?",
          options: ["She writing a letter.", "She is writing a letter.", "She was writing a letter.", "She will be writing a letter."],
          correctIndex: 0,
          explanation: "The form of 'be' is missing; it should be 'is writing'.",
        },
        {
          prompt: "Which sentence describes a future action in progress?",
          options: ["At noon I will be teaching.", "At noon I taught.", "At noon I teach.", "At noon I was teaching."],
          correctIndex: 0,
          explanation: "'Will be teaching' is the future progressive.",
        },
        {
          prompt: "The past progressive often sets a background action while another event happens in the…",
          options: ["simple past", "simple future", "present perfect", "base form"],
          correctIndex: 0,
          explanation: "e.g. 'We were walking when the rain started' — past progressive + simple past.",
        },
        {
          prompt: "Which is the -ing form of 'sit'?",
          options: ["sitting", "siting", "sitED", "sat"],
          correctIndex: 0,
          explanation: "Double the t and add -ing: sitting.",
        },
        {
          prompt: "'The worker is hammering' is in which tense?",
          options: ["present progressive", "past progressive", "future progressive", "simple present"],
          correctIndex: 0,
          explanation: "is + hammering = present progressive.",
        },
        {
          prompt: "Which tense best keeps a market scene feeling alive in descriptive writing?",
          options: ["present progressive", "simple future", "past perfect", "future perfect"],
          correctIndex: 0,
          explanation: "The present progressive shows ongoing activity, ideal for description.",
        },
        {
          prompt: "Complete: 'They ___ playing when the whistle blew.'",
          options: ["were", "are", "is", "will be"],
          correctIndex: 0,
          explanation: "A past background action needs the past progressive 'were playing'.",
        },
        {
          prompt: "Which is the -ing form of 'play'?",
          options: ["playing", "plaing", "playng", "played"],
          correctIndex: 0,
          explanation: "Just add -ing: playing (no spelling change).",
        },
        {
          prompt: "The '-ing' word after a form of 'be' is called the…",
          options: ["present participle", "past participle", "gerund", "infinitive"],
          correctIndex: 0,
          explanation: "In a progressive verb the -ing form is the present participle.",
        },
        {
          prompt: "Which sentence is the future progressive?",
          options: ["This time tomorrow, we will be travelling.", "We travelled last week.", "We travel often.", "We are travelling now."],
          correctIndex: 0,
          explanation: "'Will be travelling' is the future progressive.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Rewrite in the past progressive: 'The students study for the test.'",
          answerKey:
            "Expected: 'The students were studying for the test.' Full marks for the correct past 'be' (were) + '-ing' form; deduct for a wrong auxiliary or a missing -ing.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Give the -ing form of these verbs and name the spelling rule used: (a) make (b) stop (c) read.",
          answerKey:
            "(a) making — drop silent e; (b) stopping — double the final consonant after a short stressed vowel; (c) reading — just add -ing. Award a mark per correct form + rule.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Correct the error: 'She writing a letter to her aunt.'",
          answerKey:
            "Expected: 'She is writing a letter to her aunt.' The form of 'be' (is) is required before the -ing verb. Full marks for supplying the correct 'be'.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is written in the present progressive?",
          options: [
            "The children are singing.",
            "The children sang.",
            "The children sing.",
            "The children will sing.",
          ],
          correctIndex: 0,
          answerKey: "'Are singing' is the present progressive (are + -ing).",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short descriptive paragraph (4–6 sentences) about a busy market, using at least two progressive verbs and keeping your tense consistent. Then underline the progressive verbs.",
          answerKey:
            "Award marks for: a consistent tense throughout (no drift); at least two correctly formed progressive verbs (be + -ing) that are clearly underlined; vivid descriptive detail; and correct sentence structure. A strong response uses the present progressive to make the market feel alive.",
          marks: 5,
        },
      ],
    },
  ],
};
