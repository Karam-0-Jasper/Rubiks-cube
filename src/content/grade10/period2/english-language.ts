import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 10,
// Semester One, Period II: Grammar — Verbs Part 1 (action, linking and
// helping verbs; the three simple tenses and the progressive forms).
export const englishLanguageG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Verbs — Part 1",
  summary:
    "Period II of the MoE Grade 10 English syllabus. Learners identify and use verbs correctly: action verbs (transitive and intransitive), linking verbs, and helping and modal auxiliaries, then control the three simple tenses and the progressive forms in descriptive and narrative writing.",
  topics: [
    {
      slug: "kinds-of-verbs",
      title: "Action, Linking and Helping Verbs",
      objective:
        "By the end of the topic, learners should be able to identify action verbs and classify them as transitive or intransitive, recognise linking verbs and the words they connect, and use helping and modal auxiliary verbs correctly in sentences.",
      estimatedMinutes: 160,
      notes: `## What a verb does

A **verb** is a word that expresses an action or a state of being. Every complete sentence needs at least one verb — it is the engine of the sentence.

- *The farmer **planted** cassava.* (action)
- *Monrovia **is** the capital.* (state of being)

## Action verbs

An **action verb** tells what the subject does. The action can be **visible** (you can see it) or **mental** (it happens in the mind).

- Visible: run, write, cook, dance, throw
- Mental: think, believe, remember, know, imagine

### Transitive and intransitive

Action verbs split into two kinds according to whether the action passes on to a receiver.

- A **transitive verb** carries its action to a **direct object** — a noun that receives the action. Ask "*what?*" or "*whom?*" after the verb.
  - *She **kicked** the ball.* (Kicked what? the ball → transitive)
- An **intransitive verb** has **no** object; the action stops with the subject.
  - *The baby **slept**.* (Slept what? — no answer → intransitive)

Some verbs can be either, depending on the sentence:

- *He **sang** a song.* (transitive — object "song")
- *He **sang** loudly.* ("loudly" is an adverb, not an object → intransitive)

## Linking verbs

A **linking verb** does not show action. It **links** the subject to a word that renames or describes it (a subject complement).

The most common linking verb is **be** (am, is, are, was, were, been). Others include *become, seem, appear, feel, look, taste, smell, sound, remain*.

- *Kollie **is** a teacher.* (links Kollie → teacher)
- *The soup **tastes** delicious.* (links soup → delicious)

**Test:** if you can replace the verb with a form of *be* and the sentence still makes sense, it is working as a linking verb. *The soup **is** delicious* still makes sense, so *tastes* is linking here.

## Helping (auxiliary) verbs

A **helping verb** works before a main verb to build a verb phrase, showing tense, mood or voice.

- Primary auxiliaries: forms of **be, have, do** — *She **is** singing; They **have** eaten; **Do** you know?*
- **Modal auxiliaries**: *can, could, may, might, must, shall, should, will, would, ought to*. Modals add meaning such as ability, permission, possibility or obligation:
  - Ability: *She **can** swim.*
  - Permission: *You **may** leave.*
  - Obligation: *Students **must** arrive on time.*
  - Possibility: *It **might** rain.*

In a verb phrase, the helping verb comes first and the main verb comes last: *They **will have finished** by noon* (will, have = helpers; finished = main).`,
      workedExample: `**Task.** For each sentence, name the underlined verb as *action (transitive)*, *action (intransitive)*, *linking*, or *helping*, and justify your choice.

1. *The players **were** exhausted.*
2. *Musu **wrote** a letter to her aunt.*
3. *The old gate **creaked**.*
4. *We **should** study before the exam.*

**Answers**

1. **were** → *linking*. It joins the subject *players* to the describing word *exhausted*; replace with *are* and it still makes sense.
2. **wrote** → *action, transitive*. Wrote **what?** "a letter" — the action passes to a direct object.
3. **creaked** → *action, intransitive*. Creaked what? There is no receiver of the action, so it is intransitive.
4. **should** → *helping* (a modal auxiliary). It supports the main verb *study* and adds the sense of advice/obligation.`,
      teachingTip:
        "Learners confuse linking and action verbs most with sense verbs (look, feel, taste, smell). Give them the substitution test: swap the verb for a form of 'be'. 'The dog smells the food' — 'The dog is the food' is nonsense, so 'smells' is an action verb; 'The dog smells bad' — 'The dog is bad' works, so here 'smells' is linking. One rule, both cases.",
      quiz: [
        {
          prompt: "Which word is the verb in: 'The children played in the yard.'?",
          options: ["played", "children", "yard", "in"],
          correctIndex: 0,
          explanation: "'Played' expresses the action the children performed.",
        },
        {
          prompt: "A transitive verb must have a…",
          options: ["direct object", "linking word", "modal", "adverb"],
          correctIndex: 0,
          explanation: "A transitive verb passes its action to a direct object.",
        },
        {
          prompt: "In 'She baked a cake', the verb 'baked' is…",
          options: ["transitive", "intransitive", "linking", "a modal"],
          correctIndex: 0,
          explanation: "Baked what? 'a cake' — the action has an object, so it is transitive.",
        },
        {
          prompt: "In 'The baby cried', the verb 'cried' is…",
          options: ["intransitive", "transitive", "linking", "helping"],
          correctIndex: 0,
          explanation: "There is no object receiving the action, so 'cried' is intransitive.",
        },
        {
          prompt: "Which of these is a mental action verb?",
          options: ["believe", "jump", "sing", "throw"],
          correctIndex: 0,
          explanation: "'Believe' is an action that happens in the mind, not visibly.",
        },
        {
          prompt: "Which verb is a linking verb in: 'The mango is ripe.'?",
          options: ["is", "mango", "ripe", "the"],
          correctIndex: 0,
          explanation: "'Is' links the subject 'mango' to the describing word 'ripe'.",
        },
        {
          prompt: "Which is NOT a linking verb?",
          options: ["run", "seem", "become", "appear"],
          correctIndex: 0,
          explanation: "'Run' is an action verb; seem, become and appear can all link.",
        },
        {
          prompt: "In 'They have finished the work', which word is the helping verb?",
          options: ["have", "finished", "work", "they"],
          correctIndex: 0,
          explanation: "'Have' assists the main verb 'finished' to form the verb phrase.",
        },
        {
          prompt: "Which of these is a modal auxiliary verb?",
          options: ["must", "have", "is", "does"],
          correctIndex: 0,
          explanation: "'Must' is a modal; have, is and does are primary auxiliaries here.",
        },
        {
          prompt: "The modal in 'You may leave now' expresses…",
          options: ["permission", "obligation", "ability", "the past"],
          correctIndex: 0,
          explanation: "'May' grants permission.",
        },
        {
          prompt: "The modal in 'She can swim' expresses…",
          options: ["ability", "permission", "possibility", "obligation"],
          correctIndex: 0,
          explanation: "'Can' shows ability to do something.",
        },
        {
          prompt: "In 'The soup tastes salty', 'tastes' is working as a…",
          options: ["linking verb", "transitive verb", "helping verb", "modal"],
          correctIndex: 0,
          explanation: "It links 'soup' to 'salty'; 'The soup is salty' makes sense.",
        },
        {
          prompt: "In 'He tastes the soup', 'tastes' is…",
          options: ["a transitive action verb", "a linking verb", "an intransitive verb", "a modal"],
          correctIndex: 0,
          explanation: "Here it shows action with an object 'the soup', so it is transitive.",
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
          prompt: "Which words are the primary auxiliary verbs?",
          options: ["be, have, do", "can, may, must", "run, jump, sing", "seem, become, feel"],
          correctIndex: 0,
          explanation: "Be, have and do are the three primary (helping) auxiliaries.",
        },
        {
          prompt: "In 'It might rain today', 'might' shows…",
          options: ["possibility", "certainty", "ability", "permission"],
          correctIndex: 0,
          explanation: "'Might' expresses that something is possible but not certain.",
        },
        {
          prompt: "Which is the complete verb phrase in 'She will be singing'?",
          options: ["will be singing", "singing", "will", "be singing"],
          correctIndex: 0,
          explanation: "The phrase is the helpers plus main verb: will + be + singing.",
        },
        {
          prompt: "A verb that expresses a state of being rather than action is a…",
          options: ["linking verb", "transitive verb", "modal verb", "action verb"],
          correctIndex: 0,
          explanation: "Linking verbs express a state and connect subject to complement.",
        },
        {
          prompt: "The modal in 'Students must wear uniforms' expresses…",
          options: ["obligation", "possibility", "permission", "ability"],
          correctIndex: 0,
          explanation: "'Must' shows a requirement or obligation.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write two sentences using the verb 'grow' — one where it is transitive and one where it is intransitive. Underline the verb in each.",
          answerKey:
            "Transitive example must have a direct object, e.g. 'Farmers grow rice.' (grow what? rice). Intransitive example must have none, e.g. 'The children grow quickly.' Award 2 marks for each correct, clearly-labelled sentence; deduct for a missing or wrong object.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence contains a linking verb?",
          options: [
            "The weather became cold.",
            "The dog chased the cat.",
            "She wrote a poem.",
            "They ran home.",
          ],
          correctIndex: 0,
          answerKey: "'Became' links 'weather' to 'cold'; the others are action verbs.",
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
            "Rewrite 'You leave the classroom' three times, each time adding a different modal auxiliary, and state the meaning each modal adds.",
          answerKey:
            "Accept any three distinct modals with correct meanings, e.g. 'You may leave' (permission), 'You must leave' (obligation), 'You should leave' (advice), 'You can leave' (ability/permission). Award a mark per correct modal + meaning pairing.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between an action verb and a linking verb, giving two examples of each. Then describe a reliable test a student can use to tell them apart.",
          answerKey:
            "A strong answer defines action verbs (show what the subject does — visible or mental) and linking verbs (join the subject to a word that renames or describes it), with two clear examples of each. The test: substitute a form of 'be' for the verb; if the sentence still makes sense the verb is linking, otherwise it is an action verb. Award marks for accurate definitions, valid examples, and a correctly explained test.",
          marks: 5,
        },
      ],
    },
    {
      slug: "verb-tenses-and-progressive-forms",
      title: "Verb Tenses and Progressive Forms",
      objective:
        "By the end of the topic, learners should be able to use the present, past and future tenses correctly, form the progressive (continuous) forms of verbs, and choose the right tense to make writing consistent in descriptive and narrative work.",
      estimatedMinutes: 160,
      notes: `## Tense: locating an action in time

**Tense** is the form of a verb that shows **when** an action happens — in the present, the past, or the future.

| Tense | Example | Use |
|---|---|---|
| Present | *I walk to school.* | habit, general truth, now |
| Past | *I walked to school.* | finished action |
| Future | *I will walk to school.* | action still to come |

## The simple present

The simple present describes habits, routines, and general truths.

- *Water **boils** at 100 °C.* (general truth)
- *She **teaches** biology.* (habit)

**Rule:** with a singular third-person subject (he, she, it) add **-s** or **-es** to the verb: *He **plays**; She **watches**.*

## The simple past

The simple past describes an action already completed.

- Regular verbs add **-ed**: walk → walk**ed**, play → play**ed**.
- Irregular verbs change their form: go → **went**, eat → **ate**, write → **wrote**, buy → **bought**.

## The simple future

The simple future uses **will** (or *shall*) before the base verb: *They **will travel** tomorrow.*

## The progressive (continuous) forms

The **progressive** shows an action **in progress** at a point in time. It is built from a form of **be** + the **-ing** form (present participle) of the main verb.

- Present progressive: *She **is writing** a letter.* (happening now)
- Past progressive: *They **were playing** football.* (in progress in the past)
- Future progressive: *I **will be studying** at nine.* (in progress in the future)

## Keeping tense consistent

Within a single passage, keep the tense steady unless the time really changes. A common error is drifting between past and present in a story:

- ✗ *He **opened** the door and **sees** a stranger.*
- ✓ *He **opened** the door and **saw** a stranger.*

Narrative writing (telling a story) usually uses the **past**; descriptive writing (painting a picture in words) often uses the **present** to make a scene feel alive.`,
      workedExample: `**Task.** Rewrite the passage so that the tense is consistent in the **simple past**, then identify one progressive verb in your answer.

*"Musu walks to the market. She is carrying a basket of pepper. A trader calls her over and she stops to bargain. She was buying rice for the week."*

**Corrected (all narrative past):**

"Musu **walked** to the market. She **was carrying** a basket of pepper. A trader **called** her over and she **stopped** to bargain. She **bought** rice for the week."

**Explanation of changes**

- *walks → walked*, *calls → called*, *stops → stopped* — simple past for the finished narrative actions.
- *is carrying → was carrying* — the past **progressive**, because carrying the basket was an action *in progress* while she walked.
- *was buying → bought* — the final act is complete, so the simple past fits better than the progressive.

**Progressive verb in the answer:** *was carrying* (past progressive: was + carrying).`,
      teachingTip:
        "Tense-drift is the single most frequent error in learners' stories. After a first draft, have them underline every verb and check that each sits in the same time-frame. Pair this with the rule that the progressive always needs a form of 'be' plus '-ing' — learners who write 'She writing a letter' are missing the helping verb, not the tense.",
      quiz: [
        {
          prompt: "Which sentence is in the simple present tense?",
          options: ["She sings every morning.", "She sang yesterday.", "She will sing tomorrow.", "She is singing now."],
          correctIndex: 0,
          explanation: "'Sings' is the simple present, used here for a habit.",
        },
        {
          prompt: "What is the simple past of 'go'?",
          options: ["went", "goed", "gone", "going"],
          correctIndex: 0,
          explanation: "'Go' is irregular; its simple past is 'went'.",
        },
        {
          prompt: "What is the simple past of 'walk'?",
          options: ["walked", "walk", "walking", "walken"],
          correctIndex: 0,
          explanation: "Regular verbs add -ed: walk → walked.",
        },
        {
          prompt: "Which sentence is in the future tense?",
          options: ["We will visit Kakata.", "We visited Kakata.", "We visit Kakata.", "We are visiting Kakata."],
          correctIndex: 0,
          explanation: "'Will visit' places the action in the future.",
        },
        {
          prompt: "The present progressive is formed with…",
          options: ["am/is/are + verb-ing", "will + verb", "verb + -ed", "have + verb-ed"],
          correctIndex: 0,
          explanation: "A present-tense form of 'be' plus the -ing participle.",
        },
        {
          prompt: "Which sentence uses the present progressive?",
          options: ["The baby is sleeping.", "The baby slept.", "The baby sleeps.", "The baby will sleep."],
          correctIndex: 0,
          explanation: "'Is sleeping' shows an action in progress right now.",
        },
        {
          prompt: "Choose the correct present-tense verb: 'He ___ football on Saturdays.'",
          options: ["plays", "play", "playing", "played"],
          correctIndex: 0,
          explanation: "Third-person singular in the present adds -s: 'plays'.",
        },
        {
          prompt: "What is the past progressive of 'They (run)' ?",
          options: ["They were running", "They ran", "They run", "They will run"],
          correctIndex: 0,
          explanation: "Past progressive = past 'be' (were) + running.",
        },
        {
          prompt: "What is the simple past of 'write'?",
          options: ["wrote", "writed", "written", "writing"],
          correctIndex: 0,
          explanation: "'Write' is irregular; its past is 'wrote'.",
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
          prompt: "The future progressive of 'I (study)' is…",
          options: ["I will be studying", "I studied", "I will study", "I am studying"],
          correctIndex: 0,
          explanation: "Future progressive = will be + studying.",
        },
        {
          prompt: "Which tense is best for telling a story that has already happened?",
          options: ["simple past", "simple present", "future", "present progressive"],
          correctIndex: 0,
          explanation: "Narrative writing usually uses the simple past.",
        },
        {
          prompt: "Identify the tense: 'The sun rises in the east.'",
          options: ["simple present", "simple past", "future", "past progressive"],
          correctIndex: 0,
          explanation: "It states a general truth, so it is the simple present.",
        },
        {
          prompt: "Which is the -ing form (present participle) of 'swim'?",
          options: ["swimming", "swimed", "swam", "swum"],
          correctIndex: 0,
          explanation: "Double the m and add -ing: swimming.",
        },
        {
          prompt: "Complete the past progressive: 'While it ___ raining, we stayed inside.'",
          options: ["was", "is", "will be", "has"],
          correctIndex: 0,
          explanation: "Past progressive needs the past 'be': 'was raining'.",
        },
        {
          prompt: "What is the simple past of 'buy'?",
          options: ["bought", "buyed", "buy", "buying"],
          correctIndex: 0,
          explanation: "'Buy' is irregular; its past is 'bought'.",
        },
        {
          prompt: "Which sentence is correct?",
          options: [
            "They are watching a film.",
            "They watching a film.",
            "They is watching a film.",
            "They been watching a film.",
          ],
          correctIndex: 0,
          explanation: "The plural subject 'they' takes 'are' before the -ing verb.",
        },
        {
          prompt: "Which sentence describes a future action in progress?",
          options: [
            "At noon I will be teaching.",
            "At noon I taught.",
            "At noon I teach.",
            "At noon I was teaching.",
          ],
          correctIndex: 0,
          explanation: "'Will be teaching' is the future progressive.",
        },
        {
          prompt: "The verb form '-ing' added to a main verb after 'be' creates the…",
          options: ["progressive form", "simple past", "future tense", "modal form"],
          correctIndex: 0,
          explanation: "be + verb-ing gives the progressive (continuous) form.",
        },
        {
          prompt: "Choose the correct verb: 'Yesterday they ___ to the farm.'",
          options: ["went", "go", "will go", "going"],
          correctIndex: 0,
          explanation: "'Yesterday' signals the past, so 'went' is correct.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Write the simple present, simple past and simple future of the verb 'teach' in a full sentence for each.",
          answerKey:
            "Present e.g. 'She teaches English.'; Past 'She taught English.'; Future 'She will teach English.' Award a mark per correctly-formed tense in a complete sentence; note 'taught' is the irregular past.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Rewrite the sentence in the past progressive: 'The students study for the test.'",
          answerKey:
            "Expected: 'The students were studying for the test.' Full marks for the correct past 'be' (were) + '-ing' form; deduct for a wrong auxiliary or a missing -ing.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "The passage below has a tense error. Rewrite it correctly in the simple past: 'He entered the room and looks around.'",
          answerKey:
            "Expected: 'He entered the room and looked around.' Both verbs must be in the simple past. Full marks for correcting 'looks' to 'looked' while leaving 'entered' unchanged.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is written in the future progressive?",
          options: [
            "This time tomorrow, we will be travelling.",
            "We travelled last week.",
            "We travel often.",
            "We are travelling now.",
          ],
          correctIndex: 0,
          answerKey: "'Will be travelling' is the future progressive form.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short descriptive paragraph (4–6 sentences) about a busy market, using at least two progressive verbs and keeping your tense consistent. Then underline the progressive verbs.",
          answerKey:
            "Award marks for: a consistent tense throughout (no drift); at least two correctly formed progressive verbs (be + -ing) that are clearly underlined; vivid descriptive detail appropriate to the scene; and correct sentence structure. A strong response reads as a coherent picture, e.g. present progressive to make the market feel alive.",
          marks: 5,
        },
      ],
    },
  ],
};
