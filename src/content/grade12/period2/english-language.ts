import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 12,
// Semester One, Period II: GRAMMAR — Poem, Prose, Drama, Speech Writing and
// Review of Verb Usage. CONTENTS: (1) Review essay writing; (2) Creative writing;
// (3) Review verb usage; (4) Five forms / principal parts of a verb; (5) The six
// verb tenses (present, past, future simple and perfect). Each CONTENTS item is
// one topic; item (3) is framed as a subject-verb agreement review to stay
// distinct from principal parts (4) and tenses (5).
export const englishLanguageG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Essay and Creative Writing; Verb Usage Review",
  summary:
    "Period II of the MoE Grade 12 English syllabus. Learners review the structure of an essay, write creatively in the major literary genres (poetry, fiction, drama), and revise verb usage — subject-verb agreement, the five principal parts of a verb, and the six verb tenses.",
  topics: [
    {
      // source: LibreTexts — A Guide to Rhetoric, Genre, and Success in First-Year Writing (Gagich & Zickel), 4.1 Basic Essay Structure (https://human.libretexts.org/Courses/Community_College_of_Allegheny_County/Book:_A_Guide_to_Rhetoric_Genre_and_Success_in_First-Year_Writing_(Gagich_and_Zickel)/04:_Structuring_Paragraphing_and_Styling/4.01:_Basic_Essay_Structure)
      slug: "review-essay-writing",
      title: "Review of Essay Writing: Structure of an Essay",
      objective:
        "By the end of the topic, learners should be able to structure an essay with an introduction that ends in a thesis, unified body paragraphs that support the thesis, and a conclusion that closes the argument.",
      estimatedMinutes: 120,
      notes: `## The three parts of an essay

An essay develops **one main argument (the thesis)** across three parts: **introduction, body and conclusion**. A common model is the **five-paragraph essay** — one introduction, three body paragraphs, one conclusion — though real essays vary.

## The introduction

The introduction is the reader's **first impression**. It does three jobs:

1. **Hook** — an opening that draws the reader in: a question, a striking fact, a short story or a quotation.
2. **Background** — a little context that leads toward the argument.
3. **Thesis statement** — the **last sentence** of the introduction; it states the **central claim** the whole essay will prove.

A **thesis statement** is a single, arguable sentence that tells the reader the essay's main point and often previews the supporting points.

## The body

Each body paragraph develops **one** supporting point:

- **Topic sentence** — states the paragraph's point (a "mini-thesis").
- **Evidence / support** — details, facts, examples and quotations that make the point convincing.
- **Explanation** — shows how the evidence supports the point and **links back to the thesis**.
- **Transitions** — connect one paragraph to the next so the essay flows.

Keep each paragraph to a **single idea** (unity), and make sure every paragraph supports the thesis.

## The conclusion

The conclusion is the **last impression**. It:

- **Restates the thesis** in fresh words (does not copy it).
- **Draws the points together** and shows the **wider significance** — why the argument matters.
- Ends with a **closing thought**; it adds **no new argument**.

\`\`\`svg The shape of an essay
<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="40" y="14" width="220" height="34" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="150" y="30" text-anchor="middle" font-size="11" font-weight="bold">Introduction</text>
  <text x="150" y="43" text-anchor="middle" font-size="9">hook + background + thesis</text>
  <rect x="40" y="54" width="220" height="26" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="71" text-anchor="middle" font-size="10">Body 1 — support + evidence</text>
  <rect x="40" y="84" width="220" height="26" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="101" text-anchor="middle" font-size="10">Body 2 — support + evidence</text>
  <rect x="40" y="114" width="220" height="26" rx="4" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="131" text-anchor="middle" font-size="10">Body 3 — support + evidence</text>
  <rect x="40" y="146" width="220" height="32" rx="4" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="150" y="163" text-anchor="middle" font-size="11" font-weight="bold">Conclusion</text>
  <text x="150" y="175" text-anchor="middle" font-size="9">restate thesis + significance</text>
</svg>
\`\`\`

## Summary

- Essay = **introduction + body + conclusion**, all serving one **thesis**.
- The **thesis** is the last sentence of the introduction; each body paragraph supports it with a topic sentence, evidence and explanation.
- The conclusion restates the thesis, shows why it matters, and adds no new argument.`,
      workedExample: `**Task.** Outline a short essay on: "Should students take part in sport at school?"

**Thesis:** *Schools should require every student to take part in sport, because it improves health, builds teamwork and sharpens the mind.*

**Introduction**
- Hook: *A generation ago children ran and played after class; today many sit for hours.*
- Background: schools debate whether sport should be compulsory.
- Thesis (last sentence): the sentence above, previewing three points.

**Body**
1. **Health** — topic sentence + evidence (exercise strengthens the heart, controls weight) + explanation linking to thesis.
2. **Teamwork** — topic sentence + example (a team learns cooperation and discipline) + explanation.
3. **Mind** — topic sentence + evidence (activity improves mood and concentration) + explanation.
- Transitions: *First… Moreover… Finally…*

**Conclusion**
- Restate thesis in new words; show wider significance (healthier, more disciplined citizens); closing thought — *A school that builds strong bodies builds strong minds.*

**Why it works:** the introduction ends in an arguable thesis, each body paragraph supports one point with evidence and links back to the thesis, and the conclusion restates and widens the argument without new claims.`,
      quiz: [
        {
          prompt: "An essay develops how many central arguments?",
          options: ["one (the thesis)", "two", "three", "as many as fit"],
          correctIndex: 0,
          explanation: "The whole essay proves one thesis.",
        },
        {
          prompt: "The three parts of an essay are…",
          options: ["introduction, body, conclusion", "hook, thesis, quotation", "title, index, notes", "topic, verb, object"],
          correctIndex: 0,
          explanation: "Introduction, body and conclusion.",
        },
        {
          prompt: "In the five-paragraph model, how many body paragraphs are there?",
          options: ["three", "one", "five", "ten"],
          correctIndex: 0,
          explanation: "One intro, three body, one conclusion.",
        },
        {
          prompt: "The opening that draws the reader in is called the…",
          options: ["hook", "thesis", "topic sentence", "transition"],
          correctIndex: 0,
          explanation: "The hook piques the reader's interest.",
        },
        {
          prompt: "The thesis statement usually comes at the…",
          options: ["end of the introduction", "start of the introduction", "end of the essay", "middle of a body paragraph"],
          correctIndex: 0,
          explanation: "It is typically the last sentence of the introduction.",
        },
        {
          prompt: "A thesis statement is…",
          options: ["a single arguable sentence stating the main point", "a question", "a quotation", "a list of facts"],
          correctIndex: 0,
          explanation: "It states the central, arguable claim.",
        },
        {
          prompt: "Each body paragraph should develop…",
          options: ["one supporting point", "the whole thesis", "three points", "no point"],
          correctIndex: 0,
          explanation: "One idea per paragraph keeps it unified.",
        },
        {
          prompt: "The sentence that states a paragraph's point is the…",
          options: ["topic sentence", "thesis", "hook", "transition"],
          correctIndex: 0,
          explanation: "The topic sentence is a mini-thesis for the paragraph.",
        },
        {
          prompt: "After giving evidence, a body paragraph should…",
          options: ["explain how it supports the thesis", "start a new topic", "restate the hook", "end the essay"],
          correctIndex: 0,
          explanation: "Explanation links the evidence back to the thesis.",
        },
        {
          prompt: "Details, facts, examples and quotations are called…",
          options: ["evidence / support", "the thesis", "the conclusion", "transitions"],
          correctIndex: 0,
          explanation: "They make the point convincing.",
        },
        {
          prompt: "Words that connect one paragraph to the next are…",
          options: ["transitions", "topic sentences", "hooks", "titles"],
          correctIndex: 0,
          explanation: "Transitions keep the essay flowing.",
        },
        {
          prompt: "Every body paragraph must support the…",
          options: ["thesis", "hook", "title", "bibliography"],
          correctIndex: 0,
          explanation: "Paragraphs that stray from the thesis break unity.",
        },
        {
          prompt: "The conclusion should restate the thesis…",
          options: ["in fresh words", "word for word", "as a question", "not at all"],
          correctIndex: 0,
          explanation: "Reword it rather than copy it.",
        },
        {
          prompt: "A conclusion should NOT…",
          options: ["introduce a new argument", "show wider significance", "give a closing thought", "restate the thesis"],
          correctIndex: 0,
          explanation: "No new arguments belong in the conclusion.",
        },
        {
          prompt: "The introduction is the reader's…",
          options: ["first impression", "last impression", "only paragraph", "bibliography"],
          correctIndex: 0,
          explanation: "It is the first impression; the conclusion is the last.",
        },
        {
          prompt: "Keeping a paragraph to a single idea is called…",
          options: ["unity", "coherence", "hooking", "citing"],
          correctIndex: 0,
          explanation: "Unity = one idea per paragraph.",
        },
        {
          prompt: "Which belongs in the introduction?",
          options: ["background context leading to the thesis", "the final closing thought", "a body topic sentence", "the bibliography"],
          correctIndex: 0,
          explanation: "Background bridges the hook to the thesis.",
        },
        {
          prompt: "A good conclusion often shows the argument's…",
          options: ["wider significance", "spelling", "word count", "page numbers"],
          correctIndex: 0,
          explanation: "It explains why the argument matters.",
        },
        {
          prompt: "The topic sentence functions as a…",
          options: ["mini-thesis for its paragraph", "hook", "conclusion", "citation"],
          correctIndex: 0,
          explanation: "It states the paragraph's main point.",
        },
        {
          prompt: "Which order is correct for an essay?",
          options: ["introduction, body, conclusion", "conclusion, body, introduction", "body, introduction, conclusion", "thesis, hook, body"],
          correctIndex: 0,
          explanation: "Introduction first, then body, then conclusion.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three parts of an essay and state the main job of each.",
          answerKey:
            "Introduction — hook, background and thesis; body — paragraphs that support the thesis with topic sentences, evidence and explanation; conclusion — restate the thesis, show significance, give closure. Award a mark per part.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Where in an essay does the thesis statement usually appear?",
          options: [
            "At the end of the introduction",
            "In the middle of a body paragraph",
            "As the first sentence of the conclusion only",
            "In the bibliography",
          ],
          correctIndex: 0,
          answerKey: "The thesis is typically the last sentence of the introduction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List the parts of a strong body paragraph.",
          answerKey:
            "Topic sentence; evidence/support (details, examples, quotations); explanation linking the evidence to the thesis; transitions. Award marks for these elements.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two things a conclusion should do and one thing it must not do.",
          answerKey:
            "Should: restate the thesis in fresh words; draw the points together / show wider significance; give a closing thought (any two). Must not: introduce a new argument. Award marks accordingly.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a clear thesis statement for a topic of your choice, then outline the introduction, three body paragraphs and conclusion of an essay that would prove it. Explain how each body paragraph connects to the thesis.",
          answerKey:
            "Award marks for: an arguable thesis; an introduction with a hook, background and the thesis; three body paragraphs each with a topic sentence, evidence and explanation that links to the thesis; and a conclusion that restates the thesis and shows significance without new arguments.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing and Critical Thinking Through Literature (Ringo & Kashyap), 1.8 The Literary Landscape: Four Major Genres (https://human.libretexts.org/Courses/City_College_of_San_Francisco/Writing_and_Critical_Thinking_Through_Literature_(Ringo_and_Kashyap)/01:_Introduction/1.08:_The_Literary_Landscape-_Four_Major_Genres)
      slug: "creative-writing",
      title: "Creative Writing: Poetry, Prose (Fiction) and Drama",
      objective:
        "By the end of the topic, learners should be able to describe the major literary genres, recognise how each is written, and use the shared elements of diction, imagery, tone and theme in their own creative work.",
      estimatedMinutes: 120,
      notes: `## The major genres of creative writing

Creative (imaginative) writing falls into four major genres: **poetry, drama, fiction (prose)** and **creative nonfiction**. They differ in **form** — how the words are laid out on the page.

| Genre | Written in | Focus |
| --- | --- | --- |
| Poetry | lines and stanzas | imagery, rhythm, sound and feeling |
| Fiction (prose) | sentences and paragraphs | imaginative story — character and plot |
| Drama | dialogue (acts, scenes, speakers) | performance before an audience |
| Creative nonfiction | sentences and paragraphs | a true story told with literary skill |

## Poetry

- Organised in **lines** and **stanzas**, not paragraphs.
- Uses **imagery** (word-pictures), **rhythm and meter**, and the **sound** of words; **rhyme** is optional.
- Often captures a **single moment or emotion** rather than a full story. Meant to be **heard as well as read**.

## Fiction (prose)

- Written in **prose** — ordinary sentences and paragraphs.
- Comes **from the imagination**, though it may be inspired by real events.
- Built on **character** and **plot**, with **dialogue** and **description**. Types: **short story, novella, novel**.

## Drama

- Written as **dialogue**, arranged in **acts and scenes** with the **speaker's name** before each line and **stage directions** for action.
- Meant to be **performed** for an audience, so scene description is kept short. May be written in verse.

## Shared elements

Whatever the genre, good creative writing uses the same tools:

- **Diction** — deliberate **word choice**.
- **Imagery** — details that appeal to the senses.
- **Tone** — the **emotional quality** or attitude of the piece.
- **Theme** — the **larger meaning** the reader takes from the work.
- **Literary devices** — such as **simile, metaphor, personification** and repetition.

## Summary

- Four major genres: **poetry** (lines/stanzas), **fiction/prose** (sentences/paragraphs), **drama** (dialogue), **creative nonfiction** (true prose).
- They differ in **form** but share **diction, imagery, tone, theme** and other literary devices.
- Poetry captures a moment in sound and image; fiction tells an imagined story; drama is written to be performed.`,
      workedExample: `**Task.** Show the same idea — a rainstorm — handled in each of the three main genres.

**Poetry** (lines and stanzas, imagery, sound):
*Grey drums roll across the hill,*
*the mango leaves grow loud and still —*
*then silver ropes come down like rain-made rope,*
*and children laugh where gutters slope.*

**Fiction / prose** (sentences and paragraphs, character and plot):
*Kollie watched the first heavy drops darken the dust. Within a minute the road had become a river, and he pulled his little sister under the shop's tin roof, laughing as the storm hammered above them.*

**Drama** (dialogue, speakers, stage directions):
*KOLLIE (pulling MUSU under the roof): Quick — before we are soaked!*
*MUSU (laughing): Too late! (Thunder. The rain roars on the tin.)*

**Why it works:** each version uses **imagery** (the senses), a clear **tone**, and a **theme** (the joy of a sudden storm) — but the **form** changes: poetry in lines and sound, fiction in narrating sentences, drama in spoken lines and stage directions.`,
      quiz: [
        {
          prompt: "The four major literary genres are poetry, drama, fiction and…",
          options: ["creative nonfiction", "grammar", "the essay", "the summary"],
          correctIndex: 0,
          explanation: "Poetry, drama, fiction and creative nonfiction.",
        },
        {
          prompt: "Poetry is written in…",
          options: ["lines and stanzas", "acts and scenes", "paragraphs only", "columns"],
          correctIndex: 0,
          explanation: "Poetry uses lines and stanzas.",
        },
        {
          prompt: "Fiction (prose) is written in…",
          options: ["sentences and paragraphs", "lines and stanzas", "dialogue only", "verse only"],
          correctIndex: 0,
          explanation: "Fiction uses ordinary prose — sentences and paragraphs.",
        },
        {
          prompt: "Drama is written mainly as…",
          options: ["dialogue", "stanzas", "narration", "a summary"],
          correctIndex: 0,
          explanation: "Drama is dialogue with speakers and stage directions.",
        },
        {
          prompt: "Which genre is meant to be performed before an audience?",
          options: ["drama", "poetry", "fiction", "creative nonfiction"],
          correctIndex: 0,
          explanation: "Drama is written to be performed.",
        },
        {
          prompt: "What makes creative nonfiction different from fiction?",
          options: ["it is true / factual", "it has no plot", "it uses no dialogue", "it is written in verse"],
          correctIndex: 0,
          explanation: "Creative nonfiction tells a true story with literary skill.",
        },
        {
          prompt: "Rhyme in poetry is…",
          options: ["optional", "compulsory", "forbidden", "only for drama"],
          correctIndex: 0,
          explanation: "Poetry may rhyme, but need not.",
        },
        {
          prompt: "Deliberate word choice is called…",
          options: ["diction", "meter", "plot", "theme"],
          correctIndex: 0,
          explanation: "Diction = the writer's choice of words.",
        },
        {
          prompt: "Details that appeal to the senses are called…",
          options: ["imagery", "dialogue", "stanza", "act"],
          correctIndex: 0,
          explanation: "Imagery creates word-pictures for the senses.",
        },
        {
          prompt: "The emotional quality or attitude of a piece is its…",
          options: ["tone", "plot", "stanza", "scene"],
          correctIndex: 0,
          explanation: "Tone is the emotional quality of the writing.",
        },
        {
          prompt: "The larger meaning a reader takes from a work is its…",
          options: ["theme", "rhyme", "act", "diction"],
          correctIndex: 0,
          explanation: "Theme is the deeper meaning.",
        },
        {
          prompt: "A group of lines in a poem is a…",
          options: ["stanza", "scene", "paragraph", "chapter"],
          correctIndex: 0,
          explanation: "Poems are grouped into stanzas.",
        },
        {
          prompt: "The divisions of a play are called…",
          options: ["acts and scenes", "stanzas and lines", "chapters", "verses"],
          correctIndex: 0,
          explanation: "Drama is divided into acts and scenes.",
        },
        {
          prompt: "Instructions for a character's actions in a play are…",
          options: ["stage directions", "topic sentences", "rhymes", "themes"],
          correctIndex: 0,
          explanation: "Stage directions tell actors what to do.",
        },
        {
          prompt: "A short work of imaginative prose is a…",
          options: ["short story", "stanza", "act", "sonnet"],
          correctIndex: 0,
          explanation: "Short stories, novellas and novels are fiction.",
        },
        {
          prompt: "Poetry pays special attention to rhythm and…",
          options: ["sound", "page numbers", "stage directions", "footnotes"],
          correctIndex: 0,
          explanation: "Sound and rhythm (meter) are central to poetry.",
        },
        {
          prompt: "The genres differ most obviously in their…",
          options: ["form (how the words are laid out)", "alphabet", "language", "punctuation only"],
          correctIndex: 0,
          explanation: "Form — lines, paragraphs or dialogue — separates them.",
        },
        {
          prompt: "Fiction is built mainly on character and…",
          options: ["plot", "meter", "acts", "stage directions"],
          correctIndex: 0,
          explanation: "Character and plot drive fiction.",
        },
        {
          prompt: "'The wind whispered through the trees' mainly uses…",
          options: ["personification (a literary device)", "a stage direction", "a stanza break", "a topic sentence"],
          correctIndex: 0,
          explanation: "Giving the wind human action is personification.",
        },
        {
          prompt: "Which element is shared by poetry, fiction and drama?",
          options: ["theme", "acts", "stanzas", "chapters"],
          correctIndex: 0,
          explanation: "All genres can carry a theme.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four major literary genres and say how each is written on the page.",
          answerKey:
            "Poetry — lines and stanzas; fiction (prose) — sentences and paragraphs; drama — dialogue (acts, scenes, speakers); creative nonfiction — sentences and paragraphs (but true). Award marks for correct genre + form.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature is typical of drama but not of poetry or fiction?",
          options: [
            "Speaker names and stage directions",
            "Stanzas",
            "Narrating paragraphs",
            "A thesis statement",
          ],
          correctIndex: 0,
          answerKey: "Drama is written as dialogue with speakers and stage directions.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define diction, imagery and theme.",
          answerKey:
            "Diction — the writer's word choice; imagery — details that appeal to the senses; theme — the larger meaning of the work. Award a mark each.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give one way poetry differs from fiction and one thing they share.",
          answerKey:
            "Difference: poetry is in lines/stanzas and stresses sound and rhythm, fiction is in prose paragraphs telling a story. Shared: both use imagery, diction, tone or theme. Award a mark for a valid difference and a mark for a valid shared element.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short original piece (a poem of at least eight lines, OR a paragraph of fiction, OR a short scene of drama). Then explain which genre you chose, how its form shows in your piece, and which literary elements (imagery, tone, theme) you used.",
          answerKey:
            "Award marks for: an original piece in the chosen genre with the correct form (lines/stanzas, prose paragraph, or dialogue with speakers/stage directions); a clear identification of the genre; explanation of how the form appears; and identification of at least two literary elements used. Reward imagery and a clear theme.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (Weaver et al.), 8.6 Subject-Verb Agreement (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Writing_for_Success_(Weaver_et_al.)/8:_Verbs/8.6:_Subject-Verb_Agreement)
      slug: "review-verb-usage-subject-verb-agreement",
      title: "Review of Verb Usage: Subject-Verb Agreement",
      objective:
        "By the end of the topic, learners should be able to make the verb agree with its subject in number and person, including compound subjects, indefinite pronouns, collective nouns, and subjects separated from the verb.",
      estimatedMinutes: 120,
      notes: `## The basic rule

A verb must **agree** with its subject in **number** (singular/plural) and **person** (first/second/third). A **singular subject** takes a **singular verb**; a **plural subject** takes a **plural verb**.

- Singular: *The boy **runs** fast.* (third person singular verb ends in **-s**)
- Plural: *The boys **run** fast.*

The tricky forms are the **third person singular** of the present tense, which usually ends in **-s**: *he lives*, *she works*, *it moves*.

## Irregular verbs to watch

| Verb | Singular (he/she/it) | Plural (they) |
| --- | --- | --- |
| be | is (am with I) | are |
| have | has | have |
| do | does | do |

- ✓ *She **is** ready.* / *They **are** ready.*
- ✓ *He **has** a book.* / *They **have** books.*
- ✓ *It **does** not work.* / *They **do** not work.*

## Compound subjects

- Joined by **and** → usually **plural**: *My dog and my cat **chase** each other.*
- Joined by **or / nor** → the verb agrees with the **nearer** subject: *Neither the teacher **nor** the students **were** absent.* / *Neither the students **nor** the teacher **was** absent.*

## Indefinite pronouns

Most indefinite pronouns are **singular** and take a **singular verb**: *each, either, neither, everyone, everybody, someone, somebody, anyone, nobody, one.*

- ✓ *Everyone **is** here.* / *Each of the boys **has** a pen.*

A few (*both, few, many, several*) are always **plural**; *some, all, none, most* can be singular or plural depending on what they refer to.

## Words between subject and verb

The subject is **never** inside a **prepositional phrase** or dependent clause. Ignore the words in between and match the verb to the **real subject**.

- ✓ *The **box** of tools **is** heavy.* (subject = *box*, not *tools*)
- ✓ *The **students**, along with their teacher, **are** leaving.* (subject = *students*)

## Collective nouns and titles

**Collective nouns** (*team, class, family, group*) act as a **single unit** and usually take a **singular** verb. **Titles** of works take a **singular** verb.

- ✓ *The team **wins** every match.*
- ✓ *"Great Expectations" **is** a long novel.*

## Summary

- Match the verb to the subject in **number** and **person**; third person singular usually adds **-s**.
- **and** → plural; **or/nor** → agree with the nearer subject.
- Most indefinite pronouns and all collective nouns/titles are **singular**.
- Ignore phrases between the subject and the verb.`,
      workedExample: `**Task.** Choose the correct verb and give the reason.

1. *Each of the players (has / have) a number.*
2. *The list of items (is / are) on the desk.*
3. *Neither the cat nor the dogs (was / were) fed.*

**Answers**

1. **has** — *Each* is a singular indefinite pronoun, so it takes a singular verb. *Of the players* is a prepositional phrase and does not change the subject.
2. **is** — the subject is *list* (singular), not *items*. The phrase *of items* comes between the subject and verb but is ignored.
3. **were** — with *nor*, the verb agrees with the **nearer** subject, *dogs* (plural), so the plural *were* is correct.

**Rule applied:** find the real subject, ignore any phrase between it and the verb, and remember that *and* makes a plural subject while *or/nor* agrees with the nearer one.`,
      quiz: [
        {
          prompt: "A verb must agree with its subject in number and…",
          options: ["person", "spelling", "length", "tense only"],
          correctIndex: 0,
          explanation: "Agreement is in number and person.",
        },
        {
          prompt: "A singular subject takes a…",
          options: ["singular verb", "plural verb", "past verb", "no verb"],
          correctIndex: 0,
          explanation: "Singular subject + singular verb.",
        },
        {
          prompt: "The third person singular present verb usually ends in…",
          options: ["-s", "-ed", "-ing", "-en"],
          correctIndex: 0,
          explanation: "he runs, she works, it moves.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["She has a book.", "She have a book.", "She haves a book.", "She having a book."],
          correctIndex: 0,
          explanation: "Third person singular of 'have' is 'has'.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["They are ready.", "They is ready.", "They am ready.", "They be ready."],
          correctIndex: 0,
          explanation: "Plural subject 'they' takes 'are'.",
        },
        {
          prompt: "Two subjects joined by 'and' usually take a…",
          options: ["plural verb", "singular verb", "past verb", "no verb"],
          correctIndex: 0,
          explanation: "'and' makes a compound plural subject.",
        },
        {
          prompt: "With subjects joined by 'or' or 'nor', the verb agrees with the…",
          options: ["nearer subject", "first subject", "longer subject", "plural subject always"],
          correctIndex: 0,
          explanation: "The verb matches whichever subject is nearer.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["Neither the boys nor the girl was late.", "Neither the boys nor the girl were late.", "Neither the boys nor the girl are late.", "Neither the boys nor the girl been late."],
          correctIndex: 0,
          explanation: "The nearer subject 'girl' is singular → 'was'.",
        },
        {
          prompt: "Most indefinite pronouns (each, everyone, somebody) are…",
          options: ["singular", "plural", "past", "collective"],
          correctIndex: 0,
          explanation: "They take a singular verb.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["Everyone is welcome.", "Everyone are welcome.", "Everyone were welcome.", "Everyone have welcome."],
          correctIndex: 0,
          explanation: "'Everyone' is singular → 'is'.",
        },
        {
          prompt: "Which indefinite pronouns are always plural?",
          options: ["both, few, many, several", "each, everyone", "one, nobody", "anybody, someone"],
          correctIndex: 0,
          explanation: "both, few, many, several take plural verbs.",
        },
        {
          prompt: "The subject of a sentence is NEVER found in a…",
          options: ["prepositional phrase", "noun", "pronoun", "main clause"],
          correctIndex: 0,
          explanation: "Ignore prepositional phrases when finding the subject.",
        },
        {
          prompt: "Choose the correct verb: 'The box of tools ___ heavy.'",
          options: ["is", "are", "were", "have"],
          correctIndex: 0,
          explanation: "Subject is 'box' (singular), not 'tools'.",
        },
        {
          prompt: "Choose the correct verb: 'The students, along with their teacher, ___ leaving.'",
          options: ["are", "is", "was", "has"],
          correctIndex: 0,
          explanation: "Subject 'students' is plural; the phrase is ignored.",
        },
        {
          prompt: "Collective nouns like 'team' and 'family' usually take a…",
          options: ["singular verb", "plural verb", "past verb", "no verb"],
          correctIndex: 0,
          explanation: "They act as a single unit.",
        },
        {
          prompt: "Choose the correct sentence.",
          options: ["The team wins every match.", "The team win every match.", "The team winning every match.", "The team are win every match."],
          correctIndex: 0,
          explanation: "'team' is a collective noun → singular 'wins'.",
        },
        {
          prompt: "The title of a book takes a ___ verb.",
          options: ["singular", "plural", "past", "future"],
          correctIndex: 0,
          explanation: "Titles take a singular verb: 'Great Expectations is…'.",
        },
        {
          prompt: "Choose the correct verb: 'It ___ not work.'",
          options: ["does", "do", "done", "doing"],
          correctIndex: 0,
          explanation: "Third person singular of 'do' is 'does'.",
        },
        {
          prompt: "Choose the correct verb: 'Each of the girls ___ a pen.'",
          options: ["has", "have", "having", "were"],
          correctIndex: 0,
          explanation: "'Each' is singular → 'has'.",
        },
        {
          prompt: "The first step to check agreement is to…",
          options: ["find the real subject", "count the words", "look at the last noun", "check the spelling"],
          correctIndex: 0,
          explanation: "Match the verb to the real subject, ignoring in-between phrases.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence has correct subject-verb agreement?",
          options: [
            "The bunch of keys is on the table.",
            "The bunch of keys are on the table.",
            "The bunch of keys were on the table.",
            "The bunch of keys have on the table.",
          ],
          correctIndex: 0,
          answerKey: "Subject is 'bunch' (singular); 'of keys' is a prepositional phrase, so use 'is'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the rule for a compound subject joined by 'or' or 'nor'.",
          answerKey:
            "The verb agrees with the nearer (closer) subject, e.g. 'Neither the boys nor the girl was late.' Award a mark for the rule and a mark for a correct example.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Correct the agreement errors: 'Each of the students have a book, and the team win.'",
          answerKey:
            "'Each of the students has a book, and the team wins.' 'Each' is singular → has; 'team' is collective → wins. Award a mark per correction.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why is the verb singular in 'The list of items is long'? Identify the subject.",
          answerKey:
            "The subject is 'list' (singular); 'of items' is a prepositional phrase that is ignored, so the singular verb 'is' is correct. Award a mark for identifying the subject and a mark for the reason.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the rule of subject-verb agreement and describe how it works for (a) compound subjects with 'and' and with 'or/nor', (b) indefinite pronouns, and (c) collective nouns. Give a correct example for each.",
          answerKey:
            "A strong answer states that verbs agree with subjects in number and person; 'and' makes a plural subject while 'or/nor' agrees with the nearer subject; most indefinite pronouns (each, everyone) are singular; collective nouns take a singular verb. Award marks for the rule and a correct example in each of the three cases.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Grammar Anatomy (Brehe), 1.3 Get Tense: Verb Tense, Principal Parts, and Irregular Verbs (https://human.libretexts.org/Bookshelves/Composition/Grammar/Grammar_Anatomy_(Brehe)/01:_Chapters/1.03:_Get_Tense_Verb_Tense_Principal_Parts_and_Irregular_Verbs)
      slug: "principal-parts-of-a-verb",
      title: "The Five Forms (Principal Parts) of a Verb",
      objective:
        "By the end of the topic, learners should be able to give the five forms of a verb, form the past and past participle of regular verbs, and use the correct forms of common irregular verbs.",
      estimatedMinutes: 120,
      notes: `## The five forms of a verb

Every verb has a set of forms (its **principal parts**) from which all the tenses are built:

| Form | Example (start) | Used for |
| --- | --- | --- |
| Base (present) | start | present tense, base of many tenses |
| -s form | starts | third person singular present |
| Present participle (-ing) | starting | progressive tenses (be + -ing) |
| Past | started | simple past |
| Past participle | started | perfect tenses (have + …) and passive |

The three **principal parts** teachers most often name are the **base (present)**, the **past**, and the **past participle**; the **-s** and **-ing** forms are predictable additions.

## Regular verbs

**Regular verbs** form both the **past** and the **past participle** by adding **-ed** (or **-d**):

| Base | Past | Past participle |
| --- | --- | --- |
| talk | talked | talked |
| walk | walked | walked |
| phone | phoned | phoned |

For regular verbs the past and past participle are **the same**.

## Irregular verbs

**Irregular verbs** do **not** add -ed; they change form in their own way, and there are hundreds of them. The past and past participle are often **different**:

| Base | Past | Past participle |
| --- | --- | --- |
| begin | began | begun |
| break | broke | broken |
| drive | drove | driven |
| know | knew | known |
| write | wrote | written |
| swim | swam | swum |
| take | took | taken |
| go | went | gone |
| eat | ate | eaten |
| see | saw | seen |

## Why the forms matter

- The **past** stands alone: *I **wrote** a letter.*
- The **past participle** needs a helper (**have/has/had** for the perfect, **be** for the passive): *I **have written**…*, *The letter **was written**…*
- **Error to avoid:** using the past for the participle or the reverse — ✗ *I have **wrote**.* / ✗ *I **seen** it.* → ✓ *I have **written**.* / ✓ *I **saw** it* (or *I **have seen** it*).

## Summary

- Five forms: **base, -s, -ing, past, past participle**.
- **Regular** verbs add **-ed** for both past and past participle (they match).
- **Irregular** verbs change in their own way; past and past participle often differ and must be learned.
- Use the **past participle** (not the past) after **have/has/had** and **be**.`,
      workedExample: `**Task.** Give the past and past participle, then use each correctly.

1. *walk*  2. *write*  3. *go*

**Answers**

1. **walk → walked → walked** (regular; forms match).
   - Past: *Yesterday I **walked** to school.*
   - Participle: *I have **walked** here many times.*
2. **write → wrote → written** (irregular; forms differ).
   - Past: *She **wrote** the report.*
   - Participle: *She has **written** the report.* (not *has wrote*)
3. **go → went → gone** (irregular).
   - Past: *They **went** home.*
   - Participle: *They have **gone** home.* (not *have went*)

**Rule applied:** regular verbs add -ed for both past and participle; irregular verbs change form. The **past** stands alone, while the **past participle** follows have/has/had (or be).`,
      quiz: [
        {
          prompt: "How many forms (principal parts) does a verb have in this lesson?",
          options: ["five", "two", "three", "seven"],
          correctIndex: 0,
          explanation: "Base, -s, -ing, past, past participle.",
        },
        {
          prompt: "The -ing form of a verb is the…",
          options: ["present participle", "past participle", "base form", "-s form"],
          correctIndex: 0,
          explanation: "The -ing form is the present participle.",
        },
        {
          prompt: "The third person singular present form of 'start' is…",
          options: ["starts", "started", "starting", "start"],
          correctIndex: 0,
          explanation: "The -s form: he/she/it starts.",
        },
        {
          prompt: "Regular verbs form the past by adding…",
          options: ["-ed", "-ing", "-s", "-en"],
          correctIndex: 0,
          explanation: "talk → talked, walk → walked.",
        },
        {
          prompt: "For a regular verb, the past and past participle are…",
          options: ["the same", "always different", "both -ing forms", "both base forms"],
          correctIndex: 0,
          explanation: "e.g. walked / walked.",
        },
        {
          prompt: "The past participle of 'write' is…",
          options: ["written", "wrote", "writing", "writed"],
          correctIndex: 0,
          explanation: "write → wrote → written.",
        },
        {
          prompt: "The past of 'go' is…",
          options: ["went", "gone", "goed", "going"],
          correctIndex: 0,
          explanation: "go → went → gone.",
        },
        {
          prompt: "The past participle of 'go' is…",
          options: ["gone", "went", "goed", "going"],
          correctIndex: 0,
          explanation: "Use 'gone' after have/has/had.",
        },
        {
          prompt: "Which is an irregular verb?",
          options: ["begin", "walk", "talk", "phone"],
          correctIndex: 0,
          explanation: "begin → began → begun is irregular.",
        },
        {
          prompt: "The past participle of 'break' is…",
          options: ["broken", "broke", "breaked", "breaking"],
          correctIndex: 0,
          explanation: "break → broke → broken.",
        },
        {
          prompt: "The past participle is used after which helper for the perfect tenses?",
          options: ["have / has / had", "will", "can", "must"],
          correctIndex: 0,
          explanation: "Perfect = have/has/had + past participle.",
        },
        {
          prompt: "Correct the error: 'I have wrote a letter.'",
          options: ["I have written a letter.", "I have write a letter.", "I have writing a letter.", "I has wrote a letter."],
          correctIndex: 0,
          explanation: "Use the participle 'written' after 'have'.",
        },
        {
          prompt: "Correct the error: 'I seen it yesterday.'",
          options: ["I saw it yesterday.", "I seen it yesterday.", "I seened it yesterday.", "I have saw it yesterday."],
          correctIndex: 0,
          explanation: "The simple past of 'see' is 'saw' (see → saw → seen).",
        },
        {
          prompt: "The past participle of 'take' is…",
          options: ["taken", "took", "taked", "taking"],
          correctIndex: 0,
          explanation: "take → took → taken.",
        },
        {
          prompt: "The past of 'begin' is…",
          options: ["began", "begun", "beginned", "beginning"],
          correctIndex: 0,
          explanation: "begin → began → begun.",
        },
        {
          prompt: "The past participle of 'eat' is…",
          options: ["eaten", "ate", "eated", "eating"],
          correctIndex: 0,
          explanation: "eat → ate → eaten.",
        },
        {
          prompt: "Which form stands alone without a helper?",
          options: ["the simple past", "the past participle", "the -ing form", "none"],
          correctIndex: 0,
          explanation: "The simple past (e.g. 'wrote') stands alone.",
        },
        {
          prompt: "The past participle is also used to form the…",
          options: ["passive voice", "-ing form", "-s form", "base form"],
          correctIndex: 0,
          explanation: "Passive = be + past participle.",
        },
        {
          prompt: "Which is the correct set for a regular verb?",
          options: ["walk / walked / walked", "walk / walken / walked", "walk / walk / walking", "walk / wrote / written"],
          correctIndex: 0,
          explanation: "Regular verbs add -ed; past and participle match.",
        },
        {
          prompt: "The past participle of 'drive' is…",
          options: ["driven", "drove", "drived", "driving"],
          correctIndex: 0,
          explanation: "drive → drove → driven.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the five forms of a verb, using 'start' as your example.",
          answerKey:
            "Base/present (start), -s form (starts), present participle -ing (starting), past (started), past participle (started). Award marks for the forms named with correct examples.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence uses the past participle correctly?",
          options: [
            "The report has been written.",
            "The report has been wrote.",
            "The report has been write.",
            "The report has been writing.",
          ],
          correctIndex: 0,
          answerKey: "The past participle 'written' is correct after 'has been'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give the past and past participle of: break, know, swim.",
          answerKey:
            "break → broke / broken; know → knew / known; swim → swam / swum. Award a mark per verb with both forms correct.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between how regular and irregular verbs form the past participle.",
          answerKey:
            "Regular verbs add -ed and the past and past participle are the same (walk → walked → walked); irregular verbs change form in their own way and the past and past participle often differ (write → wrote → written). Award a mark for each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what the principal parts of a verb are and why they matter. Use two regular and two irregular verbs to show how the past and past participle are formed, and explain when the past participle (not the simple past) must be used.",
          answerKey:
            "A strong answer names the forms (base, -s, -ing, past, past participle); shows two regular verbs (+-ed, forms match) and two irregular verbs (forms differ); and explains that the past participle is used after have/has/had (perfect) and be (passive), while the simple past stands alone. Award marks for the forms, the examples, and the usage rule.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Writing for Success (McLean), 5.5 Verb Tenses (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/Book:_Writing_for_Success_(McLean)/5:_Help_for_English_Language_Learners/5.5:_Verb_Tenses)
      slug: "the-six-verb-tenses",
      title: "The Six Verb Tenses: Simple and Perfect",
      objective:
        "By the end of the topic, learners should be able to form and use the present, past and future simple tenses and the present, past and future perfect tenses, and choose the right tense for a given time.",
      estimatedMinutes: 120,
      notes: `## The six tenses

English builds meaning about time from **simple** and **perfect** tenses in the present, past and future.

| Tense | Pattern | Use | Example |
| --- | --- | --- | --- |
| Present simple | base (+ -s for he/she/it) | habits, facts, general truths | She **works** in Monrovia. |
| Past simple | past form (-ed / irregular) | a finished past action | She **worked** yesterday. |
| Future simple | will + base | an action still to come | She **will work** tomorrow. |
| Present perfect | has/have + past participle | past linked to now; unstated time | She **has worked** here for years. |
| Past perfect | had + past participle | an action before another past action | She **had worked** before he arrived. |
| Future perfect | will have + past participle | completed before a future point | She **will have worked** ten years by June. |

## Simple tenses in detail

- **Present simple** — habits, repeated actions and facts: *Water **boils** at 100°C.* Add **-s** for he/she/it: *He **plays**.*
- **Past simple** — a completed past action at a stated or known time: *We **arrived** at noon.* Regular verbs add **-ed**; irregular verbs change (*go → went*).
- **Future simple** — *will* + base form for the future: *They **will travel** next week.*

## Perfect tenses in detail

- **Present perfect** = **has/have + past participle** — links the past to the present, or an action at an **unstated** time: *I **have finished** my work.*
- **Past perfect** = **had + past participle** — the earlier of **two** past actions: *The train **had left** before we reached the station.*
- **Future perfect** = **will have + past participle** — completed **before** a stated future time: *By 2030 the town **will have grown**.*

## Choosing a tense

- Use the **past simple** for a finished time (*I **saw** her on Monday*); the **present perfect** for a time still connected to now (*I **have seen** her already*).
- Use the **past perfect** to make clear which of two past events happened **first**.

## Summary

- Three **simple** tenses (present, past, future) and three **perfect** tenses (present, past, future perfect).
- Simple: base/-s, past/-ed, will + base. Perfect: has/have, had, will have + **past participle**.
- Match the tense to the **time**: finished past (past simple), past-linked-to-now (present perfect), earlier of two past actions (past perfect).`,
      workedExample: `**Task.** Put the verb into the tense named.

1. (present simple) Water ___ (freeze) at 0°C.
2. (past simple) They ___ (build) the house last year.
3. (present perfect) I ___ (see) that film already.
4. (past perfect) She ___ (leave) before I ___ (call).
5. (future perfect) By Friday we ___ (finish) the project.

**Answers**

1. **freezes** — present simple, a general truth; add -s for 'water' (it).
2. **built** — past simple of the irregular verb 'build', a finished past time.
3. **have seen** — present perfect (has/have + participle 'seen'); 'already' shows a time linked to now.
4. **had left** … **called** — past perfect for the earlier action (leaving) and past simple for the later action (calling).
5. **will have finished** — future perfect; the action is completed before the future point 'Friday'.

**Rule applied:** simple tenses use base/-s, past/-ed (or irregular) and will + base; perfect tenses use has/have/had/will have + the **past participle**, chosen to fit the time relationship.`,
      quiz: [
        {
          prompt: "How many tenses are covered here (simple + perfect)?",
          options: ["six", "three", "four", "twelve"],
          correctIndex: 0,
          explanation: "Present, past, future simple and perfect.",
        },
        {
          prompt: "The present simple is used for…",
          options: ["habits and general truths", "a finished past action", "a future plan only", "two past actions"],
          correctIndex: 0,
          explanation: "Habits, facts and repeated actions.",
        },
        {
          prompt: "Add which ending to the present simple for he/she/it?",
          options: ["-s", "-ed", "-ing", "-en"],
          correctIndex: 0,
          explanation: "He plays, she works, it moves.",
        },
        {
          prompt: "The past simple describes…",
          options: ["a finished past action", "a present habit", "a future action", "an ongoing action now"],
          correctIndex: 0,
          explanation: "A completed action at a known past time.",
        },
        {
          prompt: "The future simple is formed with…",
          options: ["will + base form", "has + participle", "had + participle", "is + -ing"],
          correctIndex: 0,
          explanation: "will + base: 'they will travel'.",
        },
        {
          prompt: "Which sentence is present simple?",
          options: ["Water boils at 100°C.", "Water boiled.", "Water has boiled.", "Water will boil."],
          correctIndex: 0,
          explanation: "A general truth in the present simple.",
        },
        {
          prompt: "Which sentence is past simple?",
          options: ["We arrived at noon.", "We arrive at noon.", "We have arrived.", "We will arrive."],
          correctIndex: 0,
          explanation: "'arrived' = past simple, a finished action.",
        },
        {
          prompt: "The present perfect is formed with…",
          options: ["has/have + past participle", "had + participle", "will + base", "is + -ing"],
          correctIndex: 0,
          explanation: "e.g. 'I have finished'.",
        },
        {
          prompt: "The present perfect links the past to…",
          options: ["the present / now", "the distant future", "another past action", "nothing"],
          correctIndex: 0,
          explanation: "It connects a past action to the present.",
        },
        {
          prompt: "The past perfect is formed with…",
          options: ["had + past participle", "has + participle", "will have + participle", "was + -ing"],
          correctIndex: 0,
          explanation: "e.g. 'She had worked'.",
        },
        {
          prompt: "The past perfect shows the ___ of two past actions.",
          options: ["earlier", "later", "future", "present"],
          correctIndex: 0,
          explanation: "It marks the action that happened first.",
        },
        {
          prompt: "The future perfect is formed with…",
          options: ["will have + past participle", "will + base", "has + participle", "had + participle"],
          correctIndex: 0,
          explanation: "e.g. 'will have grown'.",
        },
        {
          prompt: "'By 2030 the town will have grown' is in the…",
          options: ["future perfect", "future simple", "present perfect", "past perfect"],
          correctIndex: 0,
          explanation: "will have + participle = future perfect.",
        },
        {
          prompt: "For a finished time such as 'on Monday', use the…",
          options: ["past simple", "present perfect", "future simple", "present simple"],
          correctIndex: 0,
          explanation: "'I saw her on Monday' — past simple.",
        },
        {
          prompt: "For a time still linked to now (with 'already'), use the…",
          options: ["present perfect", "past simple", "future perfect", "present simple"],
          correctIndex: 0,
          explanation: "'I have seen her already' — present perfect.",
        },
        {
          prompt: "The perfect tenses all use the…",
          options: ["past participle", "-ing form", "base form only", "-s form"],
          correctIndex: 0,
          explanation: "has/have/had/will have + past participle.",
        },
        {
          prompt: "Choose the present perfect: 'I ___ my homework.'",
          options: ["have finished", "finish", "finished", "will finish"],
          correctIndex: 0,
          explanation: "have + participle 'finished'.",
        },
        {
          prompt: "Choose the correct past perfect: 'The bus ___ before we arrived.'",
          options: ["had left", "has left", "leaves", "will leave"],
          correctIndex: 0,
          explanation: "had + participle 'left' for the earlier action.",
        },
        {
          prompt: "The simple tenses are present, past and…",
          options: ["future", "perfect", "progressive", "passive"],
          correctIndex: 0,
          explanation: "Present, past and future simple.",
        },
        {
          prompt: "Which tense fits 'They will travel next week'?",
          options: ["future simple", "present simple", "past simple", "past perfect"],
          correctIndex: 0,
          explanation: "will + base = future simple.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three simple tenses and the three perfect tenses.",
          answerKey:
            "Simple: present simple, past simple, future simple. Perfect: present perfect, past perfect, future perfect. Award marks for correct naming.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which sentence is in the past perfect?",
          options: [
            "She had eaten before the guests arrived.",
            "She has eaten.",
            "She eats every morning.",
            "She will eat later.",
          ],
          correctIndex: 0,
          answerKey: "'had eaten' (had + past participle) is the past perfect.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Put the verb into the tense named: (present perfect) 'They ___ (build) a new school.'",
          answerKey:
            "'have built' — present perfect (have + past participle of the irregular verb build). Award a mark for 'have' and a mark for the participle 'built'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain when to use the past simple and when to use the present perfect.",
          answerKey:
            "Past simple for a finished past time (I saw her on Monday); present perfect for a time still connected to now or an unstated time (I have seen her already). Award a mark for each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the three simple and three perfect tenses. For each, give the pattern and one example sentence, and explain what time it refers to.",
          answerKey:
            "A strong answer covers present simple (base/-s; habits/facts), past simple (past/-ed; finished action), future simple (will + base; future), present perfect (has/have + participle; past linked to now), past perfect (had + participle; earlier of two past actions), future perfect (will have + participle; before a future point), each with a correct pattern and example. Award marks across the six tenses.",
          marks: 6,
        },
      ],
    },
  ],
};
