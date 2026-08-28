import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Literature in English,
// Grade 10, Semester Two, Period IV: African Prose — CONTENTS item "Types of
// Prose" (Fictional, Non-fictional, Heroic).
export const literatureG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "African Prose",
  summary:
    "Period IV of the MoE Grade 10 Literature syllabus. Learners study prose as a genre and its types — fictional, non-fictional and heroic prose — and apply them to the reading of African prose works.",
  topics: [
    {
      // source: The Prose Genre, Oral Interpretation of Literature (Martinez),
      // Humanities LibreTexts (human.libretexts.org, 1.7); Defining Literature,
      // Introduction to Literature (Lumen), Humanities LibreTexts (1.6).
      slug: "types-of-prose",
      title: "Types of Prose",
      objective:
        "By the end of the topic, learners should be able to define prose and distinguish it from poetry, and identify and describe the three types of prose — fictional, non-fictional and heroic — with examples.",
      estimatedMinutes: 150,
      notes: `## What prose is

- **Prose** = language with **ordinary syntax and natural speech**, measured in **sentences and paragraphs**, not in lines.
- It differs from **poetry**, which has rhythmic structure and is measured in **lines**.
- Prose "sounds more like natural, everyday speech," though it can still use figurative language.
- Most storytelling — novels, short stories, essays, news — is written in prose.

## Features of prose

- A **narrator** (first person "I" or third person "he/she/they") tells or presents the material.
- The narrator **explains** context, action and character.
- The message is usually **more direct** than in poetry.
- Organised in **sentences and paragraphs**.

## The three types of prose

Literature is classified by whether it is **fiction or non-fiction**. Prose is grouped into three types.

### 1. Fictional prose

- **Imagined** stories — the events and characters are **invented**, though they may reflect real life.
- Main forms:
  - **Novel** — a long fictional prose narrative.
  - **Novella** — between a novel and a short story ("too short to be a novel, too long to be a short story").
  - **Short story** — a short fictional narrative read in one sitting.
- *Example:* Tolstoy's *War and Peace* (novel).

### 2. Non-fictional prose

- Prose that deals with **real** people, events and facts.
- Forms: **essays, biographies and autobiographies, letters, speeches, diary entries, articles, textbooks, newspaper stories**.
- *Example:* Martin Luther King Jr's *I Have a Dream* speech.

### 3. Heroic prose

- Prose that recounts the **deeds of heroes and legends** — stories of a people's heroes, often from **oral tradition** and later written down.
- It carries the subject matter of heroic/epic poetry, but told in **prose sentences** rather than verse (legends, sagas, folk tales of great figures).

## Prose vs poetry

| Feature | Prose | Poetry |
| --- | --- | --- |
| Unit | sentences and paragraphs | lines and stanzas |
| Rhythm | natural speech rhythm | regular metre/rhythm |
| Voice | a narrator explains | often compressed, figurative |

## Common errors to watch for

- **Calling every story "a novel"** — a short story and a novella are also fictional prose.
- **Thinking non-fiction is not literature** — essays, speeches and biographies are prose literature.
- **Confusing prose with poetry** because prose uses imagery — the test is **lines vs sentences**, not figurative language.`,
      workedExample: `**Task.** Classify each passage as fictional, non-fictional or heroic prose, and justify.

**A.** *"I was born in the town of Kabala in 1975, the third of seven children…"*
- Real person's life, told by that person → **non-fictional prose** (autobiography).

**B.** *"Kollie had never seen the sea until the morning the strangers' ship appeared on the water…"*
- Invented character and events, flowing sentences → **fictional prose** (a story/novel).

**C.** *"They say that in the days of the great famine, the hunter Sao carried the whole village on his back across the flooded river…"*
- Recounts the legendary deed of a hero from oral tradition, in prose → **heroic prose**.

**Why it works:** each is prose (sentences, a narrator), so the classification turns on the **content** — real facts (non-fiction), invented story (fiction), or the legend of a hero (heroic).`,
      quiz: [
        { prompt: "Prose is language measured in…", options: ["sentences and paragraphs", "lines and stanzas", "beats and bars", "verses only"], correctIndex: 0, explanation: "Prose is measured in sentences, unlike poetry which is measured in lines." },
        { prompt: "Prose differs from poetry mainly because prose…", options: ["uses ordinary syntax and natural speech", "always rhymes", "has no narrator", "cannot use imagery"], correctIndex: 0, explanation: "Prose has natural, everyday sentence structure." },
        { prompt: "The three types of prose are fictional, non-fictional and…", options: ["heroic", "poetic", "dramatic", "lyric"], correctIndex: 0, explanation: "The syllabus lists fictional, non-fictional and heroic prose." },
        { prompt: "Fictional prose is made of…", options: ["imagined stories", "only true facts", "poems", "stage directions"], correctIndex: 0, explanation: "Fiction is invented, though it may reflect real life." },
        { prompt: "A long fictional prose narrative is a…", options: ["novel", "sonnet", "essay", "speech"], correctIndex: 0, explanation: "A novel is a long fictional prose narrative." },
        { prompt: "A work 'too short to be a novel, too long to be a short story' is a…", options: ["novella", "poem", "diary", "letter"], correctIndex: 0, explanation: "A novella sits between the novel and the short story." },
        { prompt: "Which is a form of non-fictional prose?", options: ["a biography", "a novel", "a short story", "a novella"], correctIndex: 0, explanation: "Biographies deal with real people and facts." },
        { prompt: "Martin Luther King Jr's 'I Have a Dream' is an example of…", options: ["non-fictional prose (a speech)", "fictional prose", "heroic prose", "poetry"], correctIndex: 0, explanation: "A speech about real events is non-fiction prose." },
        { prompt: "Heroic prose recounts…", options: ["the deeds of heroes and legends", "personal shopping lists", "scientific data", "grammar rules"], correctIndex: 0, explanation: "Heroic prose tells of a people's heroes, often from oral tradition." },
        { prompt: "Heroic prose often comes originally from…", options: ["oral tradition", "newspapers", "textbooks", "letters"], correctIndex: 0, explanation: "Legends and sagas of heroes were told orally, then written down." },
        { prompt: "Which is fictional prose?", options: ["a novel", "a research article", "an autobiography", "a diary entry"], correctIndex: 0, explanation: "A novel is invented; the others report real facts." },
        { prompt: "A short story is best described as…", options: ["a short fictional narrative read in one sitting", "a long true history", "a poem", "a play"], correctIndex: 0, explanation: "The short story is compact fictional prose." },
        { prompt: "Essays, letters and speeches are grouped as…", options: ["non-fictional prose", "fictional prose", "heroic prose", "poetry"], correctIndex: 0, explanation: "They present real ideas and facts." },
        { prompt: "The narrator in prose usually…", options: ["explains context, action and character", "sings the lines", "never appears", "only rhymes"], correctIndex: 0, explanation: "A prose narrator presents and explains the material." },
        { prompt: "The clearest test of prose vs poetry is…", options: ["sentences vs lines", "sad vs happy", "long vs short", "old vs new"], correctIndex: 0, explanation: "Prose runs in sentences; poetry is set out in lines." },
        { prompt: "An autobiography is non-fiction because it…", options: ["tells the real life of its author", "is imagined", "is written in verse", "has no narrator"], correctIndex: 0, explanation: "It recounts the writer's real life." },
        { prompt: "Which pairing is correct?", options: ["novel — fiction", "biography — fiction", "speech — fiction", "novella — non-fiction"], correctIndex: 0, explanation: "A novel is fictional prose; biographies and speeches are non-fiction." },
        { prompt: "Prose can use figurative language, so imagery alone…", options: ["does not make a text poetry", "always makes it poetry", "removes the narrator", "makes it heroic"], correctIndex: 0, explanation: "The line-vs-sentence structure, not imagery, marks the difference." },
        { prompt: "A legend of a hunter who saved his village, told in sentences, is…", options: ["heroic prose", "a sonnet", "non-fiction essay", "a novella"], correctIndex: 0, explanation: "It narrates a hero's legendary deed in prose." },
        { prompt: "Non-fictional prose deals mainly with…", options: ["real people, events and facts", "invented worlds", "rhyme schemes", "stage lighting"], correctIndex: 0, explanation: "Non-fiction is grounded in reality." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define prose and give two features that distinguish it from poetry.", answerKey: "Prose is language with ordinary syntax and natural speech, measured in sentences and paragraphs rather than lines. Distinguishing features (any two): runs in sentences/paragraphs not lines; natural speech rhythm rather than regular metre; a narrator explains context and action; more direct messaging. Award 3 marks for the definition and 2 per feature.", marks: 7 },
        { type: "MULTIPLE_CHOICE", prompt: "Which set are all fictional prose?", options: ["novel, novella, short story", "essay, speech, letter", "biography, diary, article", "novel, biography, speech"], correctIndex: 0, answerKey: "Novel, novella and short story are all invented (fictional) prose forms.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the three types of prose and give one example of each.", answerKey: "Fictional prose (novel/short story/novella); non-fictional prose (essay/biography/letter/speech); heroic prose (a legend or saga of a hero from oral tradition). Award 1 mark per type named and 1 per suitable example.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain what heroic prose is and how it differs from an ordinary short story.", answerKey: "Heroic prose recounts the deeds of heroes and legends, usually drawn from oral tradition and later written down; it carries the matter of heroic/epic poetry but in prose sentences. It differs from an ordinary short story because a short story is freely invented fiction, whereas heroic prose retells a community's legendary hero. Award marks for defining heroic prose and for a clear contrast with invented short fiction.", marks: 5 },
        { type: "ESSAY", prompt: "Choose an African prose work you have read (or a passage supplied by your teacher). In 12–15 sentences, state whether it is fictional, non-fictional or heroic prose, justify your classification using at least two features of prose, and comment on one theme it explores.", answerKey: "Award marks as follows: correct classification of the work as fictional, non-fictional or heroic prose, 5 marks; justification using at least two features of prose (sentences/paragraphs, narrator, natural speech, real vs invented content), 8 marks; identification and brief discussion of a theme, 6 marks; grammatical accuracy, organisation and use of textual detail, 6 marks. Deduct where the classification is asserted without evidence from the text.", marks: 25 },
      ],
    },
  ],
};
