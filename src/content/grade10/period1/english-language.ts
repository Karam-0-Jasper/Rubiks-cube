import type { SubjectContent } from "@/content/types";

export const englishLanguage: SubjectContent = {
  slug: "english-language",
  name: "English Language",
  shortName: "English",
  description:
    "Grammar in context, sentence construction, comprehension and summary, and formal letter writing.",
  accent: "rose",
  sortOrder: 1,
  teacherCode: "ENG-10-2208",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Foundations of Grammar and Composition",
      summary:
        "Learners revisit the parts of speech as working tools rather than labels, build accurate sentences of all three structures, practise comprehension and summary technique, and write a formal letter to WAEC standard.",
      topics: [
        {
          slug: "parts-of-speech",
          title: "Parts of Speech in Context",
          objective:
            "By the end of the lesson, learners should be able to identify all eight parts of speech in a passage and explain the function a word performs in a given sentence rather than in isolation.",
          estimatedMinutes: 80,
          notes: `## Function, not label

The single most important idea in this lesson: **a word's part of speech depends on the job it does in the sentence**, not on the word itself.

Consider the word *water*:

- "The **water** is cold." — noun
- "Please **water** the garden." — verb

Learners who memorise word lists get these wrong. Learners who ask "what is this word doing here?" get them right.

## The eight parts of speech

**1. Noun** — names a person, place, thing, or idea.
Common (*teacher*), proper (*Monrovia*), abstract (*freedom*), collective (*a herd*).

**2. Pronoun** — stands in place of a noun.
Personal (*she, them*), possessive (*mine*), relative (*who, which*), demonstrative (*this, those*).

**3. Verb** — expresses action or state of being.
Action (*ran, wrote*), linking (*is, seems, became*), auxiliary (*have, will, do*).

**4. Adjective** — describes a noun or pronoun.
Answers: which one? what kind? how many?

**5. Adverb** — modifies a verb, an adjective, or another adverb.
Answers: how? when? where? to what extent?

**6. Preposition** — shows the relationship between a noun and another word.
*in, on, under, between, through, during*

**7. Conjunction** — joins words, phrases or clauses.
Coordinating (*and, but, or*), subordinating (*because, although, when*).

**8. Interjection** — expresses sudden feeling. *Oh! Alas! Well,*

## Testing a word's function

Ask a question of the sentence:

- Does it **name** something? Noun.
- Does it **replace** a name? Pronoun.
- Does it tell what the subject **does** or **is**? Verb.
- Does it describe a **noun**? Adjective.
- Does it describe a **verb, adjective or adverb**? Adverb.

## The adjective/adverb trap

Many learners assume every word ending in *-ly* is an adverb and every word not ending in *-ly* is not.

- *friendly, lovely, costly* are **adjectives**
- *fast, hard, late, well* are **adverbs** with no *-ly*

Test by asking what the word modifies, not by looking at its ending.`,
          workedExample: `**Question:** Identify the part of speech of each underlined word and justify your answer.

*"The **early** bus left **early**, but the **early** riser still caught it."*

**Solution**

*Word 1: "early bus"*

Ask: what does *early* describe? It describes *bus*, which is a noun. A word describing a noun is an **adjective**.

*Word 2: "left early"*

Ask: what does *early* describe here? It describes *left*, which is a verb — it tells us **when** the bus left. A word describing a verb is an **adverb**.

*Word 3: "early riser"*

Again it describes a noun, *riser*. **Adjective**.

**Answer:** adjective, adverb, adjective.

**The point:** the same word appeared three times with two different functions. Only the sentence position told us which was which. Never classify a word without reading what surrounds it.`,
          teachingTip:
            "Do not begin with definitions. Write one sentence on the board — 'The old man walked slowly through the market' — and ask learners to sort the words into groups of their own choosing before you name anything. They will naturally separate naming words from doing words from describing words. Only then supply the technical terms, attaching each to a group the class has already discovered. The lesson to protect is that words shift function: keep a running 'shape-shifter' list on the wall (water, run, light, fast, well) and add to it whenever a learner spots one. Learners who own that list stop parsing from memory and start parsing from the sentence.",
          quiz: [
            {
              prompt:
                "In 'She spoke softly to the frightened child', what part of speech is 'softly'?",
              options: ["Adjective", "Adverb", "Verb", "Preposition"],
              correctIndex: 1,
              explanation: "It modifies the verb 'spoke', telling us how she spoke.",
            },
            {
              prompt:
                "In 'The book on the table belongs to Musu', what part of speech is 'on'?",
              options: ["Conjunction", "Adverb", "Preposition", "Pronoun"],
              correctIndex: 2,
              explanation:
                "It shows the relationship in position between 'book' and 'table'.",
            },
            {
              prompt: "Which word in 'Freedom is precious' is an abstract noun?",
              options: ["Freedom", "is", "precious", "None of them"],
              correctIndex: 0,
              explanation:
                "Freedom names an idea rather than a physical object, making it an abstract noun.",
            },
            {
              prompt:
                "In 'He runs fast', what part of speech is 'fast'?",
              options: ["Adjective", "Adverb", "Noun", "Conjunction"],
              correctIndex: 1,
              explanation:
                "It modifies the verb 'runs'. Not every adverb ends in -ly.",
            },
            {
              prompt: "Identify the linking verb: 'The soup seems cold.'",
              options: ["soup", "seems", "cold", "The"],
              correctIndex: 1,
              explanation:
                "'Seems' links the subject to a word describing it rather than expressing an action.",
            },
            {
              prompt:
                "In 'Although it rained, we played', what part of speech is 'Although'?",
              options: [
                "Coordinating conjunction",
                "Subordinating conjunction",
                "Preposition",
                "Interjection",
              ],
              correctIndex: 1,
              explanation:
                "It introduces a subordinate clause and joins it to the main clause.",
            },
            {
              prompt: "Which of these is a collective noun?",
              options: ["Honesty", "Committee", "Quickly", "Themselves"],
              correctIndex: 1,
              explanation:
                "A committee names a group of individuals treated as a single unit.",
            },
            {
              prompt:
                "In 'This is the man who helped us', what part of speech is 'who'?",
              options: [
                "Relative pronoun",
                "Personal pronoun",
                "Conjunction",
                "Adjective",
              ],
              correctIndex: 0,
              explanation:
                "It stands for 'the man' and introduces the clause describing him.",
            },
            {
              prompt: "Which word is used as a verb in 'Please book a seat for me'?",
              options: ["Please", "book", "seat", "for"],
              correctIndex: 1,
              explanation:
                "Here 'book' expresses the action being requested, though it is a noun elsewhere.",
            },
            {
              prompt: "How many parts of speech are there in traditional English grammar?",
              options: ["Six", "Seven", "Eight", "Ten"],
              correctIndex: 2,
              explanation:
                "Noun, pronoun, verb, adjective, adverb, preposition, conjunction and interjection.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Identify the part of speech of each underlined word: 'The LIGHT was too LIGHT to LIGHT the whole hall.'",
              answerKey:
                "First 'light' = noun (names the thing); second 'light' = adjective (describes the noun 'light', meaning weak); third 'light' = verb (the action of illuminating). Award 2 marks per correct identification with justification. Learners who give only the label without reference to function receive 1 mark each.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Write two sentences of your own using the word 'run' — once as a noun and once as a verb — and underline it in each.",
              answerKey:
                "Accept any grammatically correct pair, e.g. 'He scored a run in the match.' (noun) and 'They run to school every morning.' (verb). Award 3 marks per correct and clearly distinguished sentence, deducting 1 where the word is underlined but functions incorrectly.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "In the sentence 'The very tired teacher marked the scripts carefully', which word is an adverb modifying another adverb or adjective?",
              options: ["very", "tired", "carefully", "marked"],
              correctIndex: 0,
              answerKey:
                "'Very' modifies the adjective 'tired'. 'Carefully' is also an adverb but it modifies the verb 'marked', so it does not answer the question asked. Option A.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Read the passage: 'Alas! The old farmer sold his last bag of rice quickly because the rains had failed.' Identify one example each of an interjection, an adjective, an adverb and a subordinating conjunction.",
              answerKey:
                "Interjection = Alas; adjective = old (or last); adverb = quickly; subordinating conjunction = because. Award 2 marks each. Accept 'last' for adjective.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "'A word has no part of speech until it is placed in a sentence.' Discuss this statement, supporting your argument with at least three examples of your own.",
              answerKey:
                "Look for: (a) a clear position taken on the statement; (b) at least three original examples showing a single word functioning as two different parts of speech, correctly identified; (c) recognition that some words are far more restricted in function than others, which is a fair qualification of the statement; (d) an organised response with an introduction and conclusion. Award 3 marks for the argument, 6 for the examples (2 each), 3 for organisation and expression.",
              marks: 12,
            },
          ],
        },
        {
          slug: "sentence-structure",
          title: "Sentence Structure",
          objective:
            "By the end of the lesson, learners should be able to distinguish simple, compound and complex sentences, identify main and subordinate clauses, and correct sentence fragments and run-ons in their own writing.",
          estimatedMinutes: 80,
          notes: `## Clause: the building block

A **clause** is a group of words containing a subject and a finite verb.

- **Main (independent) clause** — makes complete sense alone. *The bell rang.*
- **Subordinate (dependent) clause** — has a subject and verb but cannot stand alone. *When the bell rang...*

A **phrase** has no finite verb: *in the morning, running quickly, on the table*.

## The three sentence types

**1. Simple sentence** — one main clause.

*The farmer harvested the rice.*

A simple sentence can be long. *The old farmer from Bong County harvested his rice early in the morning* is still simple — one subject, one finite verb.

**2. Compound sentence** — two or more main clauses joined by a coordinating conjunction (*and, but, or, so, for, nor, yet*) or a semicolon.

*The farmer harvested the rice, **but** the price had fallen.*

Both halves could stand alone. They are equal in weight.

**3. Complex sentence** — one main clause and at least one subordinate clause, joined by a subordinating conjunction (*because, although, when, if, since, while, unless*) or a relative pronoun (*who, which, that*).

*The farmer harvested the rice **because** the rains were ending.*

The subordinate clause depends on the main clause for its sense.

## Two common faults

**Fragment** — a group of words punctuated as a sentence but lacking a main clause.

- Wrong: *Because the rains were ending.*
- Right: *He harvested early because the rains were ending.*

**Run-on / comma splice** — two main clauses joined with only a comma, or with nothing at all.

- Wrong: *The bell rang, the learners left.*
- Right: *The bell rang, **so** the learners left.* (compound)
- Right: *When the bell rang, the learners left.* (complex)
- Right: *The bell rang. The learners left.* (two simple sentences)

## Why this matters for your writing

Essays written entirely in simple sentences read as a list and score poorly for expression. Essays that vary structure — a short simple sentence for emphasis after two complex ones — read as controlled writing. Structure is a tool, not a classification exercise.`,
          workedExample: `**Question:** Classify each sentence and identify the clauses.

*(a) Although the road was flooded, the driver continued, and the passengers grew anxious.*

**Solution**

*Step 1 — find the finite verbs.* was, continued, grew. Three verbs suggest three clauses.

*Step 2 — test each clause for independence.*

- *Although the road was flooded* — begins with the subordinating conjunction *although*, so it cannot stand alone. **Subordinate clause.**
- *the driver continued* — complete sense alone. **Main clause.**
- *the passengers grew anxious* — complete sense alone. **Main clause.**

*Step 3 — classify.*

The sentence has **two main clauses** joined by *and*, which makes it compound, **and a subordinate clause**, which makes it complex.

**Answer: a compound-complex sentence.** Main clauses: *the driver continued* / *the passengers grew anxious*. Subordinate clause: *Although the road was flooded*.

*Note:* had the sentence been *Although the road was flooded, the driver continued*, it would be simply **complex** — one main clause, one subordinate clause.`,
          teachingTip:
            "Give every learner two strips of paper in different colours — one colour for main clauses, one for subordinate. Write clauses on the board and have learners hold up the colour they think applies, then physically join strips with a card reading 'and' or 'because' to build compound and complex sentences. The kinaesthetic version fixes the distinction far better than underlining does, because learners can see that a subordinate strip left alone is a fragment. Then take a paragraph from a learner's own exercise book, with permission, and rebuild its short simple sentences into varied structures together. Improving real writing is what makes learners care about the terminology.",
          quiz: [
            {
              prompt: "How many main clauses does a simple sentence contain?",
              options: ["None", "One", "Two", "At least two"],
              correctIndex: 1,
              explanation:
                "A simple sentence has exactly one main clause and no subordinate clause.",
            },
            {
              prompt:
                "Classify: 'The rain stopped, but the road remained flooded.'",
              options: ["Simple", "Compound", "Complex", "Fragment"],
              correctIndex: 1,
              explanation:
                "Two main clauses joined by the coordinating conjunction 'but'.",
            },
            {
              prompt:
                "Classify: 'When the teacher entered, the class became quiet.'",
              options: ["Simple", "Compound", "Complex", "Compound-complex"],
              correctIndex: 2,
              explanation:
                "One subordinate clause introduced by 'when' plus one main clause.",
            },
            {
              prompt: "Which of the following is a sentence fragment?",
              options: [
                "The children played.",
                "Running through the tall grass.",
                "She sang and he danced.",
                "Because it rained, we stayed.",
              ],
              correctIndex: 1,
              explanation:
                "It has no finite verb and no main clause, so it cannot stand as a sentence.",
            },
            {
              prompt: "Which word is a subordinating conjunction?",
              options: ["and", "but", "although", "or"],
              correctIndex: 2,
              explanation:
                "'Although' introduces a subordinate clause; the others coordinate equal clauses.",
            },
            {
              prompt: "What is wrong with 'The bell rang, the learners left.'?",
              options: [
                "It is a fragment",
                "It is a comma splice",
                "It has no subject",
                "Nothing is wrong",
              ],
              correctIndex: 1,
              explanation:
                "Two main clauses are joined by only a comma, which is not strong enough.",
            },
            {
              prompt:
                "Identify the subordinate clause: 'The learner who arrived late missed the test.'",
              options: [
                "The learner",
                "who arrived late",
                "missed the test",
                "The learner missed the test",
              ],
              correctIndex: 1,
              explanation:
                "'Who arrived late' is a relative clause describing 'the learner' and cannot stand alone.",
            },
            {
              prompt:
                "Classify: 'The old woman from Grand Bassa County sold her cassava at the market.'",
              options: ["Simple", "Compound", "Complex", "Compound-complex"],
              correctIndex: 0,
              explanation:
                "It is long, but there is only one subject and one finite verb, so it is simple.",
            },
            {
              prompt: "What distinguishes a clause from a phrase?",
              options: [
                "A clause is longer",
                "A clause contains a finite verb",
                "A phrase contains a subject",
                "A phrase must end in a full stop",
              ],
              correctIndex: 1,
              explanation:
                "A clause has a subject and a finite verb; a phrase does not have a finite verb.",
            },
            {
              prompt:
                "Which sentence correctly repairs the run-on 'It was late we went home'?",
              options: [
                "It was late, we went home.",
                "It was late; we went home.",
                "It was late we went home.",
                "It was late, we went home",
              ],
              correctIndex: 1,
              explanation:
                "A semicolon properly joins two closely related main clauses; a comma alone does not.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Classify each sentence as simple, compound or complex: (a) The market closed early. (b) She studied hard, so she passed. (c) If the rains come, the harvest will improve.",
              answerKey:
                "(a) Simple — one main clause. (b) Compound — two main clauses joined by 'so'. (c) Complex — subordinate clause 'If the rains come' plus main clause. Award 2 marks each, requiring the reason for full marks.",
              marks: 6,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Rewrite as a single complex sentence: 'The bridge was damaged. The lorries could not cross. The traders lost money.'",
              answerKey:
                "Accept any correct complex construction, e.g. 'Because the bridge was damaged, the lorries could not cross, and the traders lost money.' or 'Since the bridge was damaged and the lorries could not cross, the traders lost money.' Award 3 marks for correct subordination, 2 for accurate punctuation, 2 for preserving the original meaning.",
              marks: 7,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which of the following is a compound-complex sentence?",
              options: [
                "Although he was tired, he finished the work.",
                "He was tired, but he finished the work.",
                "Although he was tired, he finished the work, and he slept well.",
                "He was tired and finished the work.",
              ],
              correctIndex: 2,
              answerKey:
                "Option C has two main clauses ('he finished the work' / 'he slept well') plus a subordinate clause ('Although he was tired'). Option A is complex, B compound, D simple with a compound predicate.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Identify and correct the fault in each: (a) Because the school had no books. (b) The rain fell heavily, the match was cancelled.",
              answerKey:
                "(a) Fragment — no main clause. Correct by attaching one, e.g. 'The lesson was difficult because the school had no books.' (b) Comma splice — two main clauses joined by only a comma. Correct with a conjunction, semicolon or full stop, e.g. 'The rain fell heavily, so the match was cancelled.' Award 2 marks for naming each fault and 2 for each correction.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Write a paragraph of eight to ten sentences describing a market day in your community. Use at least two simple, two compound and two complex sentences, and underline one example of each type.",
              answerKey:
                "Award marks as follows: content and relevance to the topic, 4 marks; correct inclusion and underlining of the six required sentence types, 6 marks (1 each); grammatical accuracy and punctuation, 3 marks; variety and flow of expression, 2 marks. Deduct up to 2 marks where sentences are correct in structure but the paragraph does not cohere as a description.",
              marks: 15,
            },
          ],
        },
        {
          slug: "comprehension-summary",
          title: "Comprehension and Summary Skills",
          objective:
            "By the end of the lesson, learners should be able to answer literal, inferential and vocabulary-in-context questions on a passage, and write a summary in a stated number of words using their own expression.",
          estimatedMinutes: 80,
          notes: `## The three kinds of comprehension question

**1. Literal** — the answer is stated in the passage. Find it and quote or paraphrase it.
*"What did the trader carry to the market?"*

**2. Inferential** — the answer is implied but not stated. You must reason from evidence in the passage.
*"Why do you think the trader hesitated?"*

**3. Vocabulary in context** — give the meaning the word carries **in that sentence**, not its dictionary meaning in general.
*"What does 'bitter' mean as used in line 12?"*

## Method for comprehension

1. Read the whole passage once for the general sense. Do not stop at hard words.
2. Read the questions.
3. Read again, marking the parts that answer each question.
4. Answer in **complete sentences** unless told otherwise.
5. Use the wording of the question to open your answer. If asked *why did the boy run?*, begin *The boy ran because...*
6. Never copy a whole sentence when only a phrase is required.

## Vocabulary in context

Substitute your suggested meaning back into the sentence. If the sentence still makes sense and keeps its original meaning, you have it right. Match the part of speech: if the tested word is a verb, your answer must be a verb.

## Summary writing

A summary tests whether you can find the main ideas and express them economically.

**Method:**

1. Read the instruction with great care. It tells you *what* to summarise — "the reasons the writer gives for the decline" is not the same as "what the passage is about".
2. Identify only the points that answer that instruction. Ignore everything else, however interesting.
3. Write each point as a short sentence **in your own words**.
4. Join the points into a connected paragraph.
5. Count the words. Stay within the limit.

**What loses marks:**

- Copying sentences wholesale from the passage
- Including examples, illustrations and repetitions
- Adding your own opinion or outside knowledge
- Exceeding the word limit
- Writing in note form or as a list when a paragraph is asked for

## Recognising a main point

A main point is usually a **general statement**. What follows it — a *for example*, a *such as*, a statistic, an anecdote — is supporting detail and belongs out of the summary.`,
          workedExample: `**Passage extract**

*"The decline of the town's fishing trade has several causes. Foreign trawlers, some of them operating without licences, have swept the coastal waters clean; local fishermen with small canoes cannot compete with vessels that take in a week what a canoe takes in a year. The road to the interior markets, unpaved and impassable for four months of the rainy season, means that even a good catch often spoils before it can be sold. And the young people, seeing no future in the work, leave for Monrovia as soon as they finish school."*

**Question:** In no more than 40 words, summarise the reasons given for the decline of the fishing trade.

**Solution**

*Step 1 — mark the instruction.* We need **reasons**. Nothing else.

*Step 2 — extract the points, ignoring illustration.*

1. Foreign trawlers have depleted the fish stocks and the small canoes cannot compete.
2. The poor road means catches spoil before reaching market.
3. Young people leave for the city instead of entering the trade.

The detail about *a week versus a year* and *four months of rainy season* is illustration, not a separate reason. It goes out.

*Step 3 — write in own words, connected, within the limit.*

**Answer (37 words):**

*The trade has declined because foreign trawlers have exhausted the fish stocks, leaving small canoes unable to compete; poor roads cause catches to spoil before sale; and young people migrate to the capital rather than fish.*

*Check:* three reasons, own wording, connected prose, under 40 words.`,
          teachingTip:
            "The commonest reason learners lose summary marks is not poor English — it is answering a question they were not asked. Before any writing, have the class read the instruction aloud and then state in their own words what the examiner wants, in one sentence. Do not let a pen move until every learner can say it. Second, break the copying habit directly: project a passage sentence and challenge the class to say the same thing in half the words with no more than two words carried over. Make it a timed game. Once learners find they can do it, they stop copying out of fear and start compressing out of confidence.",
          quiz: [
            {
              prompt: "What kind of question asks for information directly stated in a passage?",
              options: ["Inferential", "Literal", "Evaluative", "Vocabulary in context"],
              correctIndex: 1,
              explanation: "Literal questions can be answered by locating the words in the text.",
            },
            {
              prompt: "When giving the meaning of a word in context, you should",
              options: [
                "give the full dictionary definition",
                "give the meaning it carries in that sentence",
                "give a synonym of any part of speech",
                "quote the whole sentence",
              ],
              correctIndex: 1,
              explanation:
                "Context questions test the sense in use, and the answer must match the original part of speech.",
            },
            {
              prompt: "Which of these should be left out of a summary?",
              options: [
                "A main reason given by the writer",
                "An example illustrating a point",
                "A general statement of cause",
                "A conclusion the writer draws",
              ],
              correctIndex: 1,
              explanation:
                "Examples are supporting detail; summaries carry only the main points.",
            },
            {
              prompt: "The first step in answering a summary question is to",
              options: [
                "count the words in the passage",
                "read the instruction carefully to see what is required",
                "underline every long word",
                "write the first draft",
              ],
              correctIndex: 1,
              explanation:
                "The instruction defines which points are relevant; everything else follows from it.",
            },
            {
              prompt: "Copying whole sentences from the passage into a summary usually",
              options: [
                "earns full marks for accuracy",
                "loses marks because own expression is required",
                "is required by the examiner",
                "saves time with no penalty",
              ],
              correctIndex: 1,
              explanation:
                "Summary marks reward compression and rephrasing, not transcription.",
            },
            {
              prompt: "An inferential question requires you to",
              options: [
                "copy the answer from the text",
                "reason from evidence to something not directly stated",
                "define a difficult word",
                "count the paragraphs",
              ],
              correctIndex: 1,
              explanation:
                "The answer is implied, and you must justify it from what the passage shows.",
            },
            {
              prompt: "If a summary is limited to 45 words and you write 60, you will",
              options: [
                "gain extra marks for detail",
                "lose marks for exceeding the limit",
                "be unaffected",
                "be asked to rewrite it",
              ],
              correctIndex: 1,
              explanation: "Word limits are part of the task and are penalised when broken.",
            },
            {
              prompt:
                "In 'The news struck him like a blow', the expression 'struck him like a blow' is",
              options: ["A simile", "A metaphor", "Personification", "Irony"],
              correctIndex: 0,
              explanation: "The comparison uses 'like', which makes it a simile.",
            },
            {
              prompt: "A good comprehension answer should normally be written",
              options: [
                "in note form",
                "in complete sentences unless otherwise instructed",
                "as a single word",
                "as a direct quotation only",
              ],
              correctIndex: 1,
              explanation:
                "Complete sentences show understanding and are expected unless the paper says otherwise.",
            },
            {
              prompt: "Which is the best test of a vocabulary-in-context answer?",
              options: [
                "It sounds impressive",
                "It appears in the dictionary",
                "It can replace the original word and keep the sentence's meaning",
                "It is longer than the original word",
              ],
              correctIndex: 2,
              explanation:
                "Substitution is the reliable check for both sense and part of speech.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between a literal and an inferential comprehension question, giving one example of each based on a passage about a flooded village.",
              answerKey:
                "Literal: answer stated directly, e.g. 'How many houses were destroyed?' Inferential: answer implied, requiring reasoning from evidence, e.g. 'Why do you think the villagers refused to leave?' Award 3 marks for the distinction, 2 marks for each appropriate example.",
              marks: 7,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Rewrite this sentence in no more than eight words without changing its meaning: 'The farmers, who had been waiting for a long time for the rains to arrive, finally began the planting of their crops.'",
              answerKey:
                "Accept any accurate compression of eight words or fewer, e.g. 'After long waiting for rain, farmers finally planted.' Award 3 marks for meaning retained, 2 for staying within the limit, 2 for own wording rather than deletion alone.",
              marks: 7,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A passage states: 'Attendance fell sharply. Parents could no longer afford uniforms, the nearest school was eleven kilometres away, and two teachers had left for better pay.' How many main reasons should a summary of the causes contain?",
              options: ["One", "Two", "Three", "Four"],
              correctIndex: 2,
              answerKey:
                "Three: cost of uniforms, distance to school, loss of teachers. The figure 'eleven kilometres' is detail supporting the distance point, not a separate reason. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "List four faults that commonly cost learners marks in summary writing, and state briefly how to avoid each.",
              answerKey:
                "Expect four from: copying wholesale (rephrase in own words); including examples (keep only general points); exceeding the word limit (count and edit); adding personal opinion or outside knowledge (restrict to the passage); answering a different question from the one set (re-read the instruction); writing in note form when prose is required. Award 2 marks per fault correctly named with a workable remedy.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Read a passage of your choice from the class reader. In not more than 60 words, summarise the writer's main argument, then explain in a short paragraph how you decided which material to leave out.",
              answerKey:
                "Award marks as follows: accuracy and completeness of the main points, 6 marks; use of own expression rather than copying, 4 marks; observance of the 60-word limit, 2 marks; quality of the reflective paragraph, particularly whether the learner distinguishes main points from illustration, 4 marks; grammatical accuracy, 2 marks. A learner who summarises well but cannot articulate the selection principle should not score above 12.",
              marks: 18,
            },
          ],
        },
        {
          slug: "formal-letter-writing",
          title: "Formal Letter Writing",
          objective:
            "By the end of the lesson, learners should be able to write a formal letter using the correct layout, register and paragraph structure, and match the closing to the salutation.",
          estimatedMinutes: 80,
          notes: `## When a letter is formal

A formal letter is written to someone in an official capacity — a principal, a commissioner, a company, a newspaper editor — where you do not use first names and the matter is official business.

## Layout, in order

1. **Writer's address** — top right, no name above it, no punctuation needed at line ends.
2. **Date** — directly below the address. Write it in full: *14 March 2025*.
3. **Receiver's address** — on the left, below the date, starting with the title or office.
4. **Salutation** — on the left: *Dear Sir,* / *Dear Madam,* / *Dear Sir or Madam,*
5. **Heading (subject line)** — centred or on the left, in capitals or underlined. This states the purpose in a phrase, not a sentence.
6. **Body** — normally three paragraphs.
7. **Closing** — *Yours faithfully,* if you began *Dear Sir/Madam*; *Yours sincerely,* if you used the person's name.
8. **Signature and full name** — sign, then print your name below.

## The three-paragraph body

**Paragraph 1 — purpose.** State plainly why you are writing. One or two sentences.
*I write to apply for the post of laboratory assistant advertised in the Daily Observer of 3 March 2025.*

**Paragraph 2 — details.** Give the supporting facts, reasons or qualifications. This is the longest paragraph and may run to two if the matter requires it.

**Paragraph 3 — action wanted.** Say clearly what you want the reader to do, and close courteously.
*I should be grateful if you would consider my application. I look forward to your reply.*

## Register: the tone of a formal letter

**Avoid:**

- Contractions — write *I am not*, not *I'm not*
- Slang and colloquialism — *the thing is really bad*
- Emotional outbursts — *I am extremely angry about this nonsense*
- Abbreviations and text spellings
- Rhetorical questions and exclamation marks

**Use:**

- Complete sentences and standard spelling
- Courteous, measured phrasing — *I should be grateful if...*, *I wish to draw your attention to...*
- The passive where it keeps the tone impersonal — *The classroom has not been repaired*

## The commonest layout error

Matching *Dear Sir* with *Yours sincerely*. The rule is simple:

- Do **not** know the name → *Dear Sir/Madam* → *Yours faithfully*
- **Do** know the name → *Dear Mr Kollie* → *Yours sincerely*`,
          workedExample: `**Question:** Write a letter to the Principal of your school complaining about the condition of the school library.

**Solution — plan first**

*Purpose:* to report the library's condition and request repair.
*Details:* leaking roof, damaged books, no seating, effect on learners.
*Action wanted:* inspection and repair before examinations.
*Salutation:* the Principal's name is unknown to us, so *Dear Sir,* and therefore *Yours faithfully,*

---

*24 Camp Johnson Road*
*Monrovia*

*14 March 2025*

*The Principal*
*St. Peter's High School*
*Monrovia*

*Dear Sir,*

**THE POOR CONDITION OF THE SCHOOL LIBRARY**

*I write to draw your attention to the condition of the school library, which has made it difficult for learners to study there.*

*The roof over the eastern section has leaked since the beginning of the rainy season, and a number of textbooks on the lower shelves have been damaged beyond use. Fewer than half of the reading tables have usable chairs, so learners who come during break often stand or sit on the floor. As a result, many have stopped using the library altogether at exactly the time they most need it.*

*I should be grateful if the library could be inspected and the roof repaired before the examinations begin next term. I am confident that the learners would make full use of the facility once it is restored.*

*Yours faithfully,*

*[signature]*

*Musu Kollie*

---

**Note the choices:** the heading is a phrase, not a sentence; each paragraph does exactly one job; there are no contractions; the complaint is firm but never angry; and *Dear Sir* is correctly matched with *Yours faithfully*.`,
          teachingTip:
            "Learners lose easy marks on layout, and layout is the part that can be secured permanently in one lesson. Draw the skeleton of a formal letter on manila paper and hang it on the classroom wall for the whole term — address right, date, receiver left, salutation, heading, three paragraphs, closing, signature. Refer to it every time letters come up. For register, run a short conversion drill: read out an informal sentence ('The library roof is a total mess and nobody cares') and have learners call back a formal version. Ten of these in five minutes teaches tone faster than any amount of explanation, because learners hear the difference in their own voices.",
          quiz: [
            {
              prompt: "If a formal letter begins 'Dear Sir', how should it close?",
              options: [
                "Yours sincerely",
                "Yours faithfully",
                "Yours truly",
                "Best wishes",
              ],
              correctIndex: 1,
              explanation:
                "An unnamed recipient takes 'Yours faithfully'; a named one takes 'Yours sincerely'.",
            },
            {
              prompt: "Where is the writer's address placed in a formal letter?",
              options: ["Top left", "Top right", "Bottom left", "Centred"],
              correctIndex: 1,
              explanation:
                "The writer's address goes at the top right, with the date directly beneath it.",
            },
            {
              prompt: "Which of these is acceptable in a formal letter?",
              options: [
                "I'm writing to complain",
                "I am writing to complain",
                "Am writing to complain",
                "Just writing to complain",
              ],
              correctIndex: 1,
              explanation:
                "Formal register avoids contractions and incomplete constructions.",
            },
            {
              prompt: "The heading of a formal letter should be",
              options: [
                "A complete sentence",
                "A short phrase stating the purpose",
                "The writer's name",
                "The date",
              ],
              correctIndex: 1,
              explanation:
                "The heading names the subject in a phrase, usually underlined or capitalised.",
            },
            {
              prompt: "What belongs in the first paragraph of the body?",
              options: [
                "Supporting details",
                "The purpose of writing",
                "The action requested",
                "A closing courtesy",
              ],
              correctIndex: 1,
              explanation:
                "State clearly and briefly why you are writing before giving any detail.",
            },
            {
              prompt: "Which feature is out of place in a formal letter?",
              options: [
                "A subject heading",
                "An exclamation mark expressing anger",
                "A full date",
                "A printed name below the signature",
              ],
              correctIndex: 1,
              explanation:
                "Formal letters remain measured in tone; emotional punctuation weakens them.",
            },
            {
              prompt: "The receiver's address is written",
              options: [
                "on the right, above the date",
                "on the left, below the date",
                "at the end of the letter",
                "in the heading",
              ],
              correctIndex: 1,
              explanation:
                "It appears on the left-hand side after the date and before the salutation.",
            },
            {
              prompt:
                "A letter begins 'Dear Mrs Johnson'. The correct closing is",
              options: [
                "Yours faithfully",
                "Yours sincerely",
                "Cheers",
                "Respectfully yours",
              ],
              correctIndex: 1,
              explanation: "Because the name is known, 'Yours sincerely' is required.",
            },
            {
              prompt: "How many paragraphs does a standard formal letter body normally contain?",
              options: ["One", "Two", "Three", "Six"],
              correctIndex: 2,
              explanation:
                "Purpose, details, and requested action — expanded only where the matter demands it.",
            },
            {
              prompt: "Which phrase best suits a formal request?",
              options: [
                "Please do something fast",
                "I should be grateful if you would consider",
                "You need to fix this now",
                "Sort it out please",
              ],
              correctIndex: 1,
              explanation:
                "It is courteous, impersonal and appropriately tentative for a formal register.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State the eight parts of a formal letter in the order in which they appear.",
              answerKey:
                "Writer's address; date; receiver's address; salutation; heading; body; closing; signature and printed name. Award 1 mark per part correctly placed in order. Deduct nothing for minor wording differences.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Rewrite these in formal register: (a) 'The toilets are a mess and it's disgusting!' (b) "
                + "'I wanna know why you didn't reply.'",
              answerKey:
                "(a) e.g. 'The condition of the toilets is unsanitary and requires urgent attention.' (b) e.g. 'I should be grateful to know why my earlier letter did not receive a reply.' Award 3 marks each for removal of contractions, slang and emotive punctuation while preserving meaning; 1 further mark for courteous phrasing.",
              marks: 7,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A learner writes 'Dear Sir,' and closes with 'Yours sincerely,'. What is the error?",
              options: [
                "The salutation should have no comma",
                "The closing does not match an unnamed salutation",
                "The closing should be capitalised throughout",
                "There is no error",
              ],
              correctIndex: 1,
              answerKey:
                "'Dear Sir' means the recipient's name is unknown, which requires 'Yours faithfully'. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Write the opening paragraph of a letter to the County Education Officer requesting additional textbooks for your school.",
              answerKey:
                "Expect one or two sentences stating the purpose without preamble, e.g. 'I write on behalf of the learners of St. Mary's High School to request an additional supply of Grade 10 textbooks for the coming academic year.' Award 3 marks for a clear statement of purpose, 2 for formal register, 2 for grammatical accuracy. Deduct marks where the learner drifts into details that belong in paragraph two.",
              marks: 7,
            },
            {
              type: "ESSAY",
              prompt:
                "Write a letter to the Superintendent of your county drawing attention to the poor condition of the road serving your community and requesting repair. Use the correct layout and register throughout.",
              answerKey:
                "Award marks as follows: layout, including correctly placed addresses, date, salutation, heading, closing and signature, 8 marks; three-paragraph structure with purpose, details and requested action clearly separated, 6 marks; formal register with no contractions, slang or emotive outbursts, 6 marks; relevance and development of content, 6 marks; grammar, spelling and punctuation, 4 marks. A letter that is well argued but closes 'Yours sincerely' after 'Dear Sir' should lose 2 marks from the layout allocation.",
              marks: 30,
            },
          ],
        },
      ],
    },
  ],
};
