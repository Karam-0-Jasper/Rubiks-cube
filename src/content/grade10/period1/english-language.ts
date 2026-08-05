import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English (Grades 10-12).
// Grade 10, Semester One, Period I: Grammar — Nouns and Pronouns (taught here
// as two topics for clarity). Verbs (P2-3), Adjectives/Adverbs (P4),
// Prepositions/Conjunctions (P5) and Phrases (P6) follow in their own periods.
export const englishLanguage: SubjectContent = {
  slug: "english-language",
  name: "English Language",
  shortName: "English",
  description:
    "Grammar in use for senior high, beginning with nouns and pronouns, then building through the parts of speech to phrases and composition.",
  accent: "rose",
  sortOrder: 1,
  teacherCode: "ENG-10-2208",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Grammar: Nouns and Pronouns",
      summary:
        "Period I of the MoE Grade 10 English syllabus. Learners identify and use the kinds of nouns and pronouns correctly in speech and writing, understand pronoun–antecedent agreement, and apply them in narration and vocabulary work.",
      topics: [
        {
          slug: "nouns",
          title: "Nouns and Their Kinds",
          objective:
            "By the end of the unit, learners should be able to define a noun, identify the kinds of nouns (common and proper, concrete and abstract, countable and uncountable, collective and compound), form plurals correctly, and use nouns accurately in writing.",
          estimatedMinutes: 160,
          notes: `## Introduction

- Words are grouped into **parts of speech**: noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection.
- The **noun** = the naming word. It comes first.
- **This lesson:** what a noun is; the work of a noun; kinds of nouns; number, gender, case.

## What a noun is

**Noun** — a word that **names** a person, animal, place, thing, or idea. (Also called a *naming word*.)

Nouns name:

- **People:** teacher, Musu, doctor, farmer, mother, carpenter
- **Animals:** goat, lion, mosquito, cow, parrot, fish
- **Places:** Monrovia, market, school, Liberia, kitchen, River Gee
- **Things (can see/touch):** book, cassava, phone, chair, motorbike, cutlass
- **Ideas/feelings (cannot touch):** freedom, honesty, fear, poverty, love

**Test for a noun** — a word is a noun if you can:

1. put **the / a / an** before it — the market, a book, an idea
2. make it **plural** or count it — one boy, two boys
3. put a **possessive** before it — my phone, Musu's basket

## The work a noun does in a sentence

A noun also does a **job** in the sentence (its *function*). Name the job, not just the word.

- **Subject** — does the action / what the sentence is about: *The **teacher** entered.*
- **Object** — receives the action: *The teacher marked the **books**.*
- **Complement** — renames the subject after *is, was, became*: *Musu is a **nurse**.*
- **Object of a preposition** — follows a preposition: *She sat under the **tree**.*

\`\`\`svg The four common jobs a noun does in a sentence
<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="10" y="12" width="440" height="44" rx="8" fill="#efe2cd" stroke="#c9a86e"/>
  <text x="230" y="39" text-anchor="middle" font-size="15">The teacher marked the books under the tree.</text>
  <g font-size="12.5">
    <rect x="14" y="80" width="100" height="52" rx="6" fill="#fff" stroke="#c9a86e"/>
    <text x="64" y="100" text-anchor="middle" font-weight="bold">teacher</text>
    <text x="64" y="120" text-anchor="middle">subject</text>
    <rect x="126" y="80" width="100" height="52" rx="6" fill="#fff" stroke="#c9a86e"/>
    <text x="176" y="100" text-anchor="middle" font-weight="bold">books</text>
    <text x="176" y="120" text-anchor="middle">object</text>
    <rect x="238" y="80" width="100" height="52" rx="6" fill="#fff" stroke="#c9a86e"/>
    <text x="288" y="100" text-anchor="middle" font-weight="bold">tree</text>
    <text x="288" y="120" text-anchor="middle">obj. of prep.</text>
    <rect x="350" y="80" width="96" height="52" rx="6" fill="#fff" stroke="#c9a86e"/>
    <text x="398" y="100" text-anchor="middle" font-weight="bold">Musu → nurse</text>
    <text x="398" y="120" text-anchor="middle">complement</text>
  </g>
  <text x="230" y="164" text-anchor="middle" font-size="12" fill="#6a5a48">One noun, many possible jobs — always name the job it is doing in the sentence.</text>
</svg>
\`\`\`

## The kinds of nouns

- Nouns are grouped in several overlapping ways.
- One noun can belong to more than one group at once (*Monrovia* = proper + concrete + countable).
- When you classify a noun, state the **feature being asked about**.

### 1. Common nouns and proper nouns

- A **common noun** is the **general** name shared by every member of a class of things. It begins with a small (lower-case) letter: *city, river, boy, month, day, dog, country*.
- A **proper noun** is the **particular** name of one specific person, place or thing. It always begins with a **capital letter**: *Monrovia, St. Paul River, Joseph, January, Monday, Liberia*.

Proper nouns include people's names (*Musu, Mr. Kollie*), countries and towns (*Ghana, Gbarnga*), rivers, mountains and oceans (*Mano River, Mount Nimba*), days and months (*Sunday, December*), festivals and holidays (*Christmas, Independence Day*), titles of books and films, and the names of organisations (*University of Liberia*). Remember: days and months are proper nouns and take a capital, but the **seasons** (*rainy season, dry season*) do not.

### 2. Concrete nouns and abstract nouns

- A **concrete noun** names something you can perceive with one of the five senses — see, hear, smell, taste or touch: *rice, music, smoke, perfume, thunder, sand*.
- An **abstract noun** names something that exists only in the mind — an idea, quality, feeling, state or action — and cannot be touched: *courage, poverty, joy, freedom, childhood, education, honesty*.

Abstract nouns are often formed from other words by adding an ending (a *suffix*):

- from **adjectives**: *kind → kindness, happy → happiness, honest → honesty, free → freedom, brave → bravery*;
- from **verbs**: *act → action, decide → decision, arrive → arrival, choose → choice*;
- from **nouns**: *child → childhood, friend → friendship, king → kingdom*.

Common abstract-noun endings to point out to learners are **-ness, -ity, -ment, -hood, -ship, -dom, -tion** and **-ance**.

### 3. Countable nouns and uncountable nouns

- A **countable noun** names something that can be counted as separate units. It has both a singular and a plural form: *one book → two books, a chair → three chairs, an orange → many oranges*.
- An **uncountable (mass) noun** names something seen as a whole mass that cannot be counted directly. It has **no plural** and is not used with *a/an*: *water, sugar, rice, sand, milk, information, advice, furniture, luggage, news, bread*.

To talk about a quantity of an uncountable noun we use a measuring phrase: *a **glass of** water, a **bag of** rice, a **piece of** advice, an **item of** news, a **loaf of** bread*. We use **much** with uncountables and **many** with countables: *much water, many bottles*.

### 4. Collective nouns

A **collective noun** names a **group of people, animals or things** spoken of as one whole: *a **team** of players, a **herd** of cattle, a **flock** of sheep, a **committee**, a **class**, a **crowd**, a **bunch** of bananas, a **swarm** of bees, a **fleet** of ships*. When the group acts together as one, it takes a singular verb (*The team **is** winning*); when the members act separately, some writers use a plural verb (*The team **are** arguing among themselves*).

### 5. Compound nouns

A **compound noun** is a noun made of two or more words joined to name one thing. They appear in three written forms:

- **written as one word (closed):** *classroom, blackboard, toothpaste, sunrise*;
- **written with a hyphen:** *mother-in-law, passer-by, six-year-old*;
- **written as separate words (open):** *palm oil, bus stop, police officer*.

To make most compound nouns plural, add *-s* to the **main word**: *mother**s**-in-law, passer**s**-by, bus stop**s***.

## Number: singular and plural

**Number** tells us whether a noun means **one** (singular) or **more than one** (plural). Learn these rules and their exceptions:

1. **Most nouns** simply add **-s**: *book → books, girl → girls, table → tables*.
2. Nouns ending in **-s, -ss, -sh, -ch, -x, -z** add **-es**: *bus → buses, glass → glasses, dish → dishes, church → churches, box → boxes*.
3. Nouns ending in a **consonant + y** change *y* to **-ies**: *baby → babies, city → cities, lady → ladies*. But a **vowel + y** just adds *-s*: *boy → boys, key → keys*.
4. Many nouns ending in **-f / -fe** change to **-ves**: *leaf → leaves, knife → knives, wife → wives, thief → thieves*. A few just add *-s*: *roof → roofs, chief → chiefs*.
5. Nouns ending in a **consonant + o** often add **-es**: *tomato → tomatoes, potato → potatoes, hero → heroes* (but *photo → photos, piano → pianos*).
6. **Irregular plurals** change their spelling and must be memorised: *child → children, man → men, woman → women, foot → feet, tooth → teeth, mouse → mice, ox → oxen, person → people*.
7. Some nouns are the **same** in singular and plural: *sheep, deer, fish, aircraft, series*.
8. A few nouns are **only plural** and take a plural verb: *scissors, trousers, spectacles, cattle, police*.
9. **Foreign plurals** kept from other languages: *radius → radii, crisis → crises, phenomenon → phenomena, cactus → cacti*.

## Gender of nouns

**Gender** shows whether a noun is male, female, either, or neither:

- **Masculine** (male): *man, boy, king, cock, uncle, actor*.
- **Feminine** (female): *woman, girl, queen, hen, aunt, actress*.
- **Common** (either sex): *pupil, teacher, doctor, cousin, friend, child*.
- **Neuter** (no sex — things): *stone, table, book, house*.

## Case: the possessive of nouns

**Case** shows the noun's relationship to other words. The one that changes a noun's spelling is the **possessive (genitive) case**, which shows ownership:

- Add **'s** to a singular noun: *the boy**'s** book, Musu**'s** basket, the child**'s** toy*.
- Add only an **apostrophe** to a plural noun that already ends in -s: *the boys**'** books, the teachers**'** room*.
- Add **'s** to irregular plurals that do not end in -s: *the children**'s** playground, the men**'s** meeting*.
- For things, we more often use an **of-phrase**: *the leg **of** the table* rather than *the table's leg*.

## Common errors to watch for

- **Making uncountable nouns plural.** *informations, advices, furnitures, luggages* are all wrong. Say *information, some advice, a piece of furniture*.
- **Forgetting the capital on a proper noun.** *monrovia, january, liberia* should be *Monrovia, January, Liberia*.
- **Wrong plural of irregular nouns.** *childs, foots, mans, tooths* are wrong; use *children, feet, men, teeth*.
- **Apostrophe mistakes in the plural.** *banana's for sale* is wrong — a plain plural (*bananas*) takes no apostrophe; the apostrophe is only for possession.

## Nouns in composition

- Good writing uses **precise nouns**.
- *the tree* → *the **mango tree***; *a bird* → *a **hawk***. The exact noun gives a clearer picture.
- Replace vague nouns (*thing, place, stuff, people*) with specific, concrete ones.`,
          workedExample: `**Question:** Read the passage and classify each underlined noun.

*"**Musu** carried a basket of **cassava** to the **market** in **Gbarnga**, hoping the **money** would pay for her sister's **education**."*

**Solution**

Take each in turn and ask what kind of noun it is.

- **Musu** — the particular name of a person, so a **proper noun** (and concrete, countable).
- **cassava** — a thing you can touch; here it names the crop as material, so **concrete**, and used as an **uncountable** noun (we would not say "two cassavas" for the food).
- **market** — a general place, **common** and **concrete**, **countable**.
- **Gbarnga** — the name of one particular town, **proper noun**.
- **money** — concrete but **uncountable** (we do not say "two moneys").
- **education** — an idea or process that cannot be touched, so an **abstract noun**, uncountable.

**The lesson:** a single noun carries several labels at once — *Musu* is proper, concrete and countable all together. Classifying nouns means naming the feature being asked about, not choosing one label for all purposes.`,
          teachingTip:
            "Do not begin with the six definitions. Write a short sentence on the board and ask the class to underline every naming word, then sort those words into piles of their own — they will separate names of people from names of things from words like 'freedom' without prompting. Only then attach the terms proper, concrete and abstract to piles they have already made. The error to attack directly is the plural of uncountable nouns: 'informations', 'advices' and 'furnitures' appear in learners' writing constantly, so keep a wall list of common uncountables and drill 'some advice', 'a piece of information' until it is automatic. For proper nouns, mark the missing capital letter strictly from the first lesson, because learners who are allowed to write 'monrovia' for a fortnight never fully unlearn it.",
          quiz: [
            { prompt: "Which word is a proper noun?", options: ["city", "river", "Liberia", "mountain"], correctIndex: 2, explanation: "Liberia names one particular country and takes a capital letter." },
            { prompt: "Which of these is an abstract noun?", options: ["table", "honesty", "market", "rice"], correctIndex: 1, explanation: "Honesty is a quality that cannot be perceived by the senses." },
            { prompt: "Which noun is uncountable?", options: ["book", "chair", "water", "pencil"], correctIndex: 2, explanation: "Water cannot be counted directly; we say 'some water', not 'two waters'." },
            { prompt: "What is the plural of 'child'?", options: ["childs", "childes", "children", "childrens"], correctIndex: 2, explanation: "'Child' has the irregular plural 'children'." },
            { prompt: "Which is a collective noun?", options: ["cow", "herd", "grass", "farmer"], correctIndex: 1, explanation: "A herd names a group of animals treated as one unit." },
            { prompt: "The plural of 'leaf' is", options: ["leafs", "leaves", "leafes", "leave"], correctIndex: 1, explanation: "Nouns ending in -f often change to -ves: leaf → leaves." },
            { prompt: "Which sentence is correct?", options: ["He gave me two advices.", "He gave me some advice.", "He gave me an advice.", "He gave me advices."], correctIndex: 1, explanation: "'Advice' is uncountable; use 'some advice' or 'a piece of advice'." },
            { prompt: "Which word is a concrete noun?", options: ["freedom", "fear", "smoke", "wisdom"], correctIndex: 2, explanation: "Smoke can be seen and smelled, so it is concrete." },
            { prompt: "'Mother-in-law' is an example of a", options: ["proper noun", "compound noun", "abstract noun", "collective noun"], correctIndex: 1, explanation: "It is made of more than one word joined into a single noun." },
            { prompt: "The plural of 'church' is", options: ["churchs", "churches", "churchies", "church"], correctIndex: 1, explanation: "Nouns ending in -ch add -es." },
            { prompt: "Which noun stays the same in the plural?", options: ["dog", "sheep", "cup", "boy"], correctIndex: 1, explanation: "'Sheep' is unchanged in the plural." },
            { prompt: "In 'The team is playing well', 'team' is a", options: ["proper noun", "abstract noun", "collective noun", "uncountable noun"], correctIndex: 2, explanation: "It names a group treated as a single unit." },
            { prompt: "Which is the correct plural of 'baby'?", options: ["babys", "babyes", "babies", "babie"], correctIndex: 2, explanation: "Consonant + y changes to -ies: baby → babies." },
            { prompt: "Which word names an idea rather than a thing?", options: ["bridge", "courage", "lorry", "cassava"], correctIndex: 1, explanation: "Courage is an abstract quality." },
            { prompt: "Which sentence uses a proper noun correctly?", options: ["We live near a River St. Paul.", "We live near the st. paul river.", "We live near the St. Paul River.", "We live near the river st paul."], correctIndex: 2, explanation: "The particular river's name takes capital letters." },
            { prompt: "The plural of 'knife' is", options: ["knifes", "knives", "knifes'", "knive"], correctIndex: 1, explanation: "Nouns ending in -fe change to -ves: knife → knives." },
            { prompt: "Which of these is countable?", options: ["sugar", "furniture", "orange", "information"], correctIndex: 2, explanation: "You can count oranges: one orange, two oranges." },
            { prompt: "'A bunch of bananas' — the collective noun is", options: ["bunch", "bananas", "a", "of"], correctIndex: 0, explanation: "'Bunch' names the group; 'bananas' are the members." },
            { prompt: "Which is the correct plural of 'tooth'?", options: ["tooths", "toothes", "teeth", "teeths"], correctIndex: 2, explanation: "'Tooth' has the irregular plural 'teeth'." },
            { prompt: "Which noun is both proper and concrete?", options: ["happiness", "Monrovia", "beauty", "advice"], correctIndex: 1, explanation: "Monrovia is a particular place (proper) that physically exists (concrete)." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Identify the kind of noun for each underlined word: 'The COMMITTEE met in MONROVIA to discuss the FREEDOM of the press and the supply of WATER.'", answerKey: "COMMITTEE — collective noun; MONROVIA — proper noun; FREEDOM — abstract noun; WATER — uncountable (mass) noun. Award 2 marks each, requiring the correct category.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Write the plural of each: (a) baby (b) leaf (c) man (d) sheep (e) church.", answerKey: "(a) babies (b) leaves (c) men (d) sheep (e) churches. Award 2 marks each.", marks: 10 },
            { type: "MULTIPLE_CHOICE", prompt: "Which sentence contains an error in noun use?", options: ["She bought some furniture.", "He gave me useful informations.", "The children ate rice.", "We saw three deer."], correctIndex: 1, answerKey: "'Information' is uncountable and has no plural; it should read 'useful information'. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain the difference between a countable and an uncountable noun, giving two examples of each and one common mistake learners make with uncountable nouns.", answerKey: "A countable noun can be counted and made plural (book/books, orange/oranges); an uncountable noun cannot be counted directly and has no plural (water, advice, information, furniture). Common mistake: making them plural or using 'a/an' with them, e.g. 'informations', 'an advice'. Award 3 marks for the distinction, 1 per example up to 4, 3 for the mistake explained.", marks: 8 },
            { type: "ESSAY", prompt: "Write a short autobiographical paragraph (8–10 sentences) about a memorable day in your life. Underline and label at least one proper noun, one abstract noun, one collective noun and one concrete noun in your writing.", answerKey: "Award marks as follows: relevance and coherence of the autobiographical paragraph, 4 marks; correct inclusion and labelling of a proper noun, an abstract noun, a collective noun and a concrete noun, 8 marks (2 each); grammatical accuracy including correct capitalisation of proper nouns and correct plurals, 4 marks; variety and precision of nouns used, 2 marks. Deduct up to 2 marks where labelled nouns are miscategorised.", marks: 18 },
          ],
        },
        {
          // Source: "Autobiographical Narrative", Commonsense Composition, K12 LibreTexts
          // (k12.libretexts.org, 2.2); "Writing Process: Making the Personal Public",
          // Writing Guide with Handbook, OpenStax (openstax.org, 4.5).
          slug: "narration-autobiographical-writing",
          title: "Narration: Autobiographical Writing",
          objective:
            "By the end of the topic, learners should be able to define autobiographical writing, use first-person past-tense narration, organise a personal experience into a clear beginning, middle and end, and write a short autobiographical account.",
          estimatedMinutes: 120,
          notes: `## Introduction

- **Narration** = telling a story of events in order.
- **Autobiography** = the story of your *own* life, written by *you* (Greek *auto* = self, *bios* = life, *graph* = writing).
- **This topic:** what autobiographical writing is; first-person, past-tense narration; structure (beginning–middle–end); writing a personal account.

## What autobiographical writing is

- A **true** account of an event or period from the writer's **own life**.
- Written in the **first person** — *I, me, my, we*.
- Usually in the **past tense** (the events already happened).
- Different from a **biography**, where **someone else** writes about a person's life.

## Features

- **First-person voice:** *I remember the day…*
- **Past tense** throughout.
- **Real** people, places and feelings — honest, personal detail.
- **Chronological order** — events in the order they happened.
- **Reflection** — what the experience meant to you.

## Structure

- Built around **one significant event**, or a **collection of interrelated events**.
- Follows the traditional narrative arc: **exposition → rising action → climax → falling action → resolution**.

1. **Beginning** — set the scene: when, where, who.
2. **Middle** — the events in order, building to the main moment.
3. **End** — how it finished, and what you learnt or felt.

## Organising events and feelings

Two ways to combine the **events** and your **motivations/feelings**:

- **Integrated** — weave feelings into the events as they happen; reads smoothly, usually the better choice.
- **Blocked** — put the events in one paragraph and the feelings in another; can build suspense but needs clear links between paragraphs.

- **One event:** most of the body describes it; the opening and close frame your before-and-after thoughts.
- **Several events:** one body paragraph each; the opening and close show the overall change in you.

## Language to use

- **Time signals** to order events: *first, then, after that, later, finally.*
- **Sensory detail** — what you saw, heard, felt.
- **Precise nouns and verbs**, and varied sentences.

## Common errors to watch for

- **Slipping out of the past tense** (tense-drift) — keep it past throughout.
- **Writing in the third person** — autobiography is **first person (I)**.
- **Listing events with no feeling** — say what the experience meant.
- **No clear order** — use time signals so the reader can follow.`,
          workedExample: `**Task.** Plan and open a short autobiographical account: "A Day I Will Never Forget."

**Plan (beginning–middle–end)**
- **Beginning:** the morning of my first day at a new school in Gbarnga.
- **Middle:** getting lost in the compound; a kind classmate helping me; the moment I had to speak in class.
- **End:** how the day ended, and what it taught me about courage.

**Opening paragraph (first person, past tense):**
*"I will never forget my first day at the new school. It was a cool morning in September, and my heart beat fast as I walked through the gate in my stiff new uniform. I knew no one, and the compound seemed enormous…"*

**Why it works:** first person (*I*), consistent past tense (*was, walked, knew*), the scene is set (when / where / who), and a time signal is ready to move the story on.`,
          quiz: [
            { prompt: "Autobiographical writing is the story of…", options: ["your own life", "a famous person by another writer", "an imaginary hero", "a country's history"], correctIndex: 0, explanation: "An autobiography is written by the person about their own life." },
            { prompt: "Autobiographical writing is written in the…", options: ["first person", "second person", "third person", "no person"], correctIndex: 0, explanation: "It uses I, me, my, we." },
            { prompt: "Which tense is normally used?", options: ["past", "future", "present continuous", "none"], correctIndex: 0, explanation: "The events already happened, so the past tense is used." },
            { prompt: "The prefix 'auto-' means…", options: ["self", "life", "writing", "other"], correctIndex: 0, explanation: "Auto = self; bios = life; graph = writing." },
            { prompt: "A biography differs from an autobiography because it is…", options: ["written by someone else about a person", "always fictional", "written in the future tense", "a list of dates"], correctIndex: 0, explanation: "A biography is another writer's account of a person's life." },
            { prompt: "Which is a first-person pronoun?", options: ["I", "he", "they", "it"], correctIndex: 0, explanation: "I is first person." },
            { prompt: "Events in an autobiography should be arranged in…", options: ["the order they happened", "alphabetical order", "random order", "reverse only"], correctIndex: 0, explanation: "Chronological order helps the reader follow." },
            { prompt: "Which word signals time order?", options: ["finally", "beautiful", "large", "quickly"], correctIndex: 0, explanation: "First, then, later, finally signal the order of events." },
            { prompt: "The beginning of the account should…", options: ["set the scene (when, where, who)", "give the ending", "list the characters only", "state a moral"], correctIndex: 0, explanation: "The opening sets time, place and people." },
            { prompt: "A good ending includes…", options: ["how it finished and what you learnt/felt", "a new unrelated story", "only dialogue", "the title again"], correctIndex: 0, explanation: "Reflection on the experience rounds it off." },
            { prompt: "A common error in autobiographical writing is…", options: ["slipping out of the past tense", "using the first person", "adding sensory detail", "ordering events"], correctIndex: 0, explanation: "Tense-drift between past and present is the commonest fault." },
            { prompt: "Autobiographical writing is based on…", options: ["real, true events", "imaginary events only", "another person's diary", "future plans"], correctIndex: 0, explanation: "It recounts real events from the writer's life." },
            { prompt: "'I remember the morning it rained' shows which two features?", options: ["first person and past tense", "third person and future", "second person and present", "no person and past"], correctIndex: 0, explanation: "'I' is first person; 'remember/rained' are past." },
            { prompt: "Sensory detail means describing what you…", options: ["saw, heard and felt", "will do tomorrow", "read in a book", "were told to write"], correctIndex: 0, explanation: "Sensory detail brings a personal account to life." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define autobiographical writing and state two of its features.", answerKey: "Autobiographical writing is a true account of an event or period from the writer's own life, written by that person. Features (any two): first-person voice (I, me, my); past tense; real people/places/feelings; chronological order; reflection on meaning. Award 3 marks for the definition and 2 per feature.", marks: 7 },
            { type: "MULTIPLE_CHOICE", prompt: "Which sentence is correctly autobiographical?", options: ["I walked to the farm and felt the cool morning air.", "She will walk to the farm tomorrow.", "You are walking to the farm now.", "The farm is three miles away."], correctIndex: 0, answerKey: "Option A is first person and past tense — the marks of autobiographical narration.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Outline, in note form, the beginning, middle and end of an autobiographical account of a memorable event in your life.", answerKey: "Accept a clear three-part plan: beginning sets the scene (when/where/who); middle gives the events in order building to the main moment; end states the outcome and what was learnt or felt. Award marks for a coherent beginning, middle and end that fit a single real experience.", marks: 6 },
            { type: "ESSAY", prompt: "Write an autobiographical account of 12–15 sentences titled 'A Day I Will Never Forget.' Use the first person and the past tense throughout, order the events clearly, and end by saying what the day meant to you.", answerKey: "Award marks as follows: a coherent personal account with a clear beginning, middle and end, 8 marks; consistent first person and past tense throughout, 6 marks; clear ordering with time signals and some sensory detail, 4 marks; a reflective ending stating the meaning of the day, 3 marks; grammatical accuracy and precise vocabulary, 4 marks. Deduct up to 3 marks for tense-drift into the present.", marks: 25 },
          ],
        },
        {
          slug: "pronouns",
          title: "Pronouns and Their Antecedents",
          objective:
            "By the end of the unit, learners should be able to define a pronoun, identify the kinds of pronouns (personal, possessive, indefinite, demonstrative, interrogative), and make pronouns agree with their antecedents in number, gender and person.",
          estimatedMinutes: 160,
          notes: `## What a pronoun is

**Pronoun** — a word used **in place of a noun**, to avoid repeating it.

- Without pronouns: *Musu went to the market. **Musu** bought fish and **Musu** came home.*
- With pronouns: *Musu went to the market. **She** bought fish and **she** came home.*

**Antecedent** — the noun a pronoun stands for (*ante* = "before"). Above, *Musu* is the antecedent of *she*. Keep the link between pronoun and antecedent clear.

## The kinds of pronouns

Eight main kinds. For each: name, what it does, its members.

### 1. Personal pronouns

**Personal pronouns** stand for people or things. They change form with the **job** they do (subject or object) — the source of many errors.

| Person | Subject form | Object form |
| --- | --- | --- |
| 1st singular | I | me |
| 2nd singular | you | you |
| 3rd singular | he / she / it | him / her / it |
| 1st plural | we | us |
| 2nd plural | you | you |
| 3rd plural | they | them |

- **Subject pronouns** do the action: ***She** teaches. **We** are ready.*
- **Object pronouns** receive the action or follow a preposition: *The teacher praised **her**. Give the book to **me**.*

### 2. Possessive pronouns

**Possessive pronouns** show ownership and stand alone in place of a noun: *mine, yours, his, hers, its, ours, theirs*. *This book is **mine**. The choice is **yours**.*

Do not confuse them with **possessive adjectives** (also called possessive determiners) — *my, your, his, her, its, our, their* — which come **before** a noun: ***my** book, **their** house*. **Important:** none of the possessive words *yours, hers, theirs, its* takes an apostrophe.

### 3. Reflexive pronouns

**Reflexive pronouns** end in *-self / -selves* and refer back to the subject when the subject and object are the same person: *myself, yourself, himself, herself, itself, ourselves, yourselves, themselves*. *She taught **herself** to read. They blamed **themselves**.* (Note there is no such word as *hisself* or *theirselves*.)

### 4. Demonstrative pronouns

**Demonstrative pronouns** point to particular things: *this, that, these, those*. *This* and *these* point to what is **near**; *that* and *those* point to what is **far**. ***This** is my seat. **Those** are the new textbooks.*

### 5. Interrogative pronouns

**Interrogative pronouns** ask questions: *who, whom, whose, which, what*. ***Who** called? **Which** do you prefer? **Whose** is this bag?* Use *who* for the subject and *whom* for the object of the question.

### 6. Relative pronouns

**Relative pronouns** join a describing clause to a noun: *who, whom, whose, which, that*. *The boy **who** won the prize is my brother. The house **that** collapsed was old.* Use *who/whom* for people and *which* for things; *that* can be used for both.

### 7. Indefinite pronouns

**Indefinite pronouns** refer to no particular person or thing: *someone, anyone, everyone, no one, nobody, somebody, each, either, neither, one, all, some, few, many, several, none, both*. Note that *everyone, each, either, neither, nobody, someone* are treated as **singular**.

### 8. Reciprocal pronouns

**Reciprocal pronouns** — *each other* (two) and *one another* (more than two) — show a two-way action: *The two friends helped **each other**. The players passed the ball to **one another**.*

## Pronoun–antecedent agreement

A pronoun must **agree** with its antecedent in three ways:

1. **Number** — a singular antecedent takes a singular pronoun; a plural antecedent takes a plural pronoun. *The **girl** lost **her** pen. The **girls** lost **their** pens.* In formal writing, singular indefinite pronouns take a singular pronoun: *Each learner must bring **his or her** book.*
2. **Gender** — masculine, feminine or neuter must match. *The **boy** raised **his** hand* (not *her*).
3. **Person** — do not shift between first, second and third person. *If a **student** studies hard, **he or she** will pass* (not *…you will pass*).

## Case of pronouns

Because personal pronouns change form, choosing the right **case** matters:

- Use the **subject** form for the subject of a verb: ***He and I** went home* (not *Me and him*).
- Use the **object** form after a verb or preposition: *between **you and me**, the teacher called **him and me***.
- A quick test: **drop the other person**. You would say *I went*, never *me went* — so the correct pair is *He and I went*.

## Common errors to watch for

- **Vague reference.** *Kou told Ma that she had won* — who won, Kou or Ma? Rewrite so the antecedent is unmistakable.
- **Wrong case.** *Me and him went* should be *He and I went*; *between you and I* should be *between you and me*.
- **its vs it's.** *its* shows possession (*the dog wagged its tail*); *it's* means *it is* or *it has*. This is the single most common pronoun error in English. Test it by reading *it is* in its place.
- **Apostrophes in possessive pronouns.** *your's, her's, their's* do not exist — write *yours, hers, theirs*.
- **Agreement with indefinite pronouns.** *everyone, each, nobody* are singular: *Everyone has **his or her** ticket* (formal).

## Why pronouns matter

- A pronoun with an unclear antecedent loses the meaning.
- Clear reference + agreement = a sentence the reader can follow.`,
          workedExample: `**Question:** Correct the pronoun errors in each sentence and name the rule broken.

*(a) Me and Kou walked to school.*
*(b) Each of the boys brought their own lunch.*
*(c) The dog wagged it's tail.*

**Solution**

*(a) "Me and Kou walked to school."*

*Walked* needs a **subject pronoun**, and *me* is an object pronoun. Also, courtesy places the other person first.

**Correction: "Kou and I walked to school."**
*Rule broken:* wrong pronoun **case** — a subject was needed, not an object. A quick test is to drop the other person: you would say *I walked*, never *me walked*.

*(b) "Each of the boys brought their own lunch."*

The antecedent is *each*, which is **singular**, so the pronoun must be singular too.

**Correction: "Each of the boys brought his own lunch."**
*Rule broken:* pronoun–antecedent **agreement in number**. *Each, every, everyone, nobody* are singular, even when followed by a plural phrase like *of the boys*.

*(c) "The dog wagged it's tail."*

*It's* means *it is* — "the dog wagged **it is** tail" is nonsense. The possessive of *it* is **its**, with no apostrophe.

**Correction: "The dog wagged its tail."**
*Rule broken:* confusion of the possessive **its** with the contraction **it's**.

**The point to carry away:** three different rules, three different fixes. Case is tested by dropping the other person; number agreement is tested by finding the true antecedent; *its* versus *it's* is tested by reading it as *it is*.`,
          teachingTip:
            "The its/it's error is worth a whole board's attention, because it survives into adult writing. Teach one test and drill it relentlessly: read the word aloud as 'it is' — if the sentence still makes sense, write it's; if not, write its. Do ten quick examples in chorus. For pronoun case ('Me and him went'), teach the drop-the-other-person test: remove the second person and the ear corrects itself ('me went' is obviously wrong). For antecedent agreement, put a sentence with a plural phrase after a singular pronoun ('Each of the girls brought their…') and have the class hunt for the real antecedent; once they see that 'each', not 'girls', governs the pronoun, the rule holds. Keep insisting on clear reference in their own writing — whenever a 'he' or 'she' could point to two people, stop and ask 'who?'",
          quiz: [
            { prompt: "The noun that a pronoun stands for is called its", options: ["object", "antecedent", "subject", "modifier"], correctIndex: 1, explanation: "The antecedent is the noun the pronoun replaces." },
            { prompt: "Which is a possessive pronoun?", options: ["they", "them", "theirs", "who"], correctIndex: 2, explanation: "'Theirs' shows ownership and needs no apostrophe." },
            { prompt: "Which sentence is correct?", options: ["The cat licked it's fur.", "The cat licked its fur.", "The cat licked its' fur.", "The cat licked it fur."], correctIndex: 1, explanation: "The possessive of 'it' is 'its', with no apostrophe." },
            { prompt: "Which is an indefinite pronoun?", options: ["this", "everyone", "who", "hers"], correctIndex: 1, explanation: "'Everyone' refers to no particular person." },
            { prompt: "Choose the correct sentence.", options: ["Him and I went home.", "He and me went home.", "He and I went home.", "Me and him went home."], correctIndex: 2, explanation: "Both must be subject pronouns: 'He and I'." },
            { prompt: "Which is a demonstrative pronoun?", options: ["what", "those", "myself", "nobody"], correctIndex: 1, explanation: "'Those' points to specific things far away." },
            { prompt: "'Each of the students has ___ own desk.' Choose the best formal option.", options: ["their", "his or her", "them", "its"], correctIndex: 1, explanation: "'Each' is singular, so a singular pronoun is required in formal writing." },
            { prompt: "Which word is an interrogative pronoun?", options: ["that", "whom", "ours", "himself"], correctIndex: 1, explanation: "'Whom' is used to ask questions about the object." },
            { prompt: "Identify the reflexive pronoun: 'She taught herself to read.'", options: ["She", "taught", "herself", "read"], correctIndex: 2, explanation: "'Herself' refers back to the subject 'she'." },
            { prompt: "'It's' is a contraction of", options: ["it has only", "it is or it has", "belonging to it", "its own"], correctIndex: 1, explanation: "'It's' means 'it is' or 'it has'; the possessive is 'its'." },
            { prompt: "Which pronoun correctly completes: 'The girls finished ___ work.'", options: ["her", "his", "their", "its"], correctIndex: 2, explanation: "The plural antecedent 'girls' takes 'their'." },
            { prompt: "In 'The man who called is my uncle', 'who' is a", options: ["personal pronoun", "relative pronoun", "possessive pronoun", "demonstrative pronoun"], correctIndex: 1, explanation: "'Who' joins the describing clause to 'the man'." },
            { prompt: "Which sentence has a clear pronoun reference?", options: ["Kou told Ma that she won.", "When the bell rang, it left.", "The teacher praised the pupil because she worked hard.", "After Musu met Kou, she smiled."], correctIndex: 2, explanation: "In option C 'she' clearly refers to the pupil; the others are ambiguous." },
            { prompt: "Which is the object pronoun form?", options: ["they", "we", "them", "he"], correctIndex: 2, explanation: "'Them' is the object form of 'they'." },
            { prompt: "Choose the correct possessive: 'This bag is ___.'", options: ["your's", "yours", "yours'", "your"], correctIndex: 1, explanation: "'Yours' is the possessive pronoun and takes no apostrophe." },
            { prompt: "'Nobody has finished ___ homework.' Choose the best formal option.", options: ["their", "his or her", "them", "they"], correctIndex: 1, explanation: "'Nobody' is singular, so a singular pronoun is used in formal English." },
            { prompt: "Which word is NOT a pronoun?", options: ["she", "quickly", "they", "it"], correctIndex: 1, explanation: "'Quickly' is an adverb, not a pronoun." },
            { prompt: "Identify the demonstrative pronoun: 'This is my book.'", options: ["This", "is", "my", "book"], correctIndex: 0, explanation: "'This' points to a specific thing that is near." },
            { prompt: "Correct the error: 'Her and me are friends.'", options: ["Her and I are friends.", "She and me are friends.", "She and I are friends.", "Me and her are friends."], correctIndex: 2, explanation: "Both must be subject pronouns: 'She and I'." },
            { prompt: "A pronoun must agree with its antecedent in", options: ["spelling only", "number, gender and person", "length", "case only"], correctIndex: 1, explanation: "Agreement covers number, gender and person." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Name the kind of pronoun for each underlined word: 'SHE gave the book to THEM because it was THEIRS, and asked WHO had taken the rest.'", answerKey: "SHE — personal (subject) pronoun; THEM — personal (object) pronoun; THEIRS — possessive pronoun; WHO — interrogative pronoun. Award 2 marks each.", marks: 8 },
            { type: "SHORT_ANSWER", prompt: "Correct the pronoun error in each and state the rule broken: (a) 'Me and Kou are ready.' (b) 'The bird built it's nest.'", answerKey: "(a) 'Kou and I are ready.' — wrong case; a subject pronoun is required, and courtesy puts the other person first. (b) 'The bird built its nest.' — the possessive is 'its'; 'it's' means 'it is'. Award 2 marks per correction and 2 per correctly named rule.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which sentence shows correct pronoun–antecedent agreement in formal English?", options: ["Everyone brought their lunch.", "Each boy brought their book.", "Neither of the girls raised her hand.", "Somebody left their bag."], correctIndex: 2, answerKey: "'Neither' is singular and the antecedents are girls, so 'her' agrees correctly. The others pair a singular indefinite pronoun with 'their'. Option C.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain what an antecedent is and why unclear pronoun reference causes problems, giving one example of an ambiguous sentence and a corrected version.", answerKey: "An antecedent is the noun a pronoun stands for. Unclear reference occurs when a pronoun could point to more than one noun, so the reader cannot tell the meaning. Example: 'Kou told Ma that she had won' — 'she' could be Kou or Ma. Correction: 'Kou told Ma, \"I have won\"' or 'Kou told Ma that Kou had won.' Award 3 marks for the definition, 3 for the explanation, 3 for a valid ambiguous example with a correction.", marks: 9 },
            { type: "ESSAY", prompt: "Write a short story of 10–12 sentences. Use at least one personal, one possessive, one demonstrative and one relative pronoun, underline each, and ensure every pronoun agrees clearly with its antecedent.", answerKey: "Award marks as follows: coherence and interest of the narrative, 5 marks; correct inclusion and underlining of a personal, possessive, demonstrative and relative pronoun, 8 marks (2 each); clear pronoun–antecedent agreement throughout, with no ambiguous references, 5 marks; grammatical accuracy and correct use of its/it's and yours/hers, 4 marks. Deduct up to 3 marks for any pronoun whose antecedent is unclear.", marks: 22 },
          ],
        },
        {
          // Source: "Elements of Fiction", Literature for the Humanities (Lumen),
          // Humanities LibreTexts (human.libretexts.org, 4.4).
          slug: "narration-short-story",
          title: "Narration: Short Story",
          objective:
            "By the end of the topic, learners should be able to define a short story, identify its elements (setting, character, plot, conflict, theme), and plan and write a short imaginative story with a clear beginning, middle and end.",
          estimatedMinutes: 130,
          notes: `## Introduction

- A **short story** = a short piece of **imaginative (fictional) narration** — a made-up story read in one sitting.
- Unlike autobiography, it need **not** be true, and may be told in the **first or third person**.
- **This topic:** the elements of a short story; its structure; planning and writing one.

## Elements of a short story

- **Setting** — the **time and place** of the story: landscape, buildings, season, weather, time of day.
- **Character** — the people (or beings) in it; the **protagonist** is the main character, the **antagonist** the opposing force.
- **Plot** — the **series of events** and character actions tied to the central conflict.
- **Conflict** — the **struggle** between two people or things that drives the plot.
- **Theme** — the **central idea or issue** conveyed by the story.
- **Point of view** — who tells it: **first person** (*I*) or **third person** (*he/she/they*). A narrator whose account cannot be trusted is an **unreliable narrator**.

## Plot structure

1. **Exposition** — introduce the setting and characters.
2. **Rising action** — related events complicate and intensify the conflict.
3. **Climax** — the turning point that shows how the conflict will resolve.
4. **Falling action** — the tension unwinds after the climax.
5. **Resolution (denouement)** — the "knot" of conflict is loosened and settled.

## Writing a good short story

- Keep to **one main incident** and **few characters** — a short story is compact.
- Start **close to the action**; do not over-explain.
- Use **dialogue** and **sensory detail** to show, not just tell.
- Keep the **tense consistent** (usually the past).
- Aim for a **single, clear effect** — one feeling or idea the reader takes away.

## Common errors to watch for

- **Too many characters or events** — a short story has room for only a few.
- **No conflict** — without a problem to solve, there is no story.
- **Tense-drift** — keep the narration in one tense (usually past).
- **A rushed or missing ending** — the conflict must be resolved.`,
          workedExample: `**Task.** Plan a short story around a single conflict, then write its opening.

**Plan**
- **Setting:** a fishing village on the Liberian coast, at dawn.
- **Character:** Kollie, a boy who has never been allowed to take the canoe out alone.
- **Conflict:** a storm rises while he is out at sea against his father's warning (person vs nature, and person vs self).
- **Climax:** the canoe nearly capsizes; Kollie must decide to turn back or push on.
- **Resolution:** he returns safely and learns why the warning was given.
- **Theme:** the value of listening to experience.

**Opening (third person, past tense, close to the action):**
*"The sea was calm when Kollie pushed the canoe from the sand, but he did not see the grey line gathering on the horizon. His father's warning still rang in his ears — 'Not alone, not yet' — as the village shrank behind him…"*

**Why it works:** the setting and character are established in two sentences, the **conflict** is already seeded (the warning, the gathering storm), and the tense is consistent past.`,
          quiz: [
            { prompt: "A short story is a piece of…", options: ["imaginative (fictional) narration", "true personal history", "factual reporting", "instruction writing"], correctIndex: 0, explanation: "A short story is fiction, unlike an autobiography." },
            { prompt: "The time and place of a story is its…", options: ["setting", "plot", "theme", "climax"], correctIndex: 0, explanation: "Setting = time and place." },
            { prompt: "The sequence of events in a story is the…", options: ["plot", "setting", "character", "theme"], correctIndex: 0, explanation: "Plot is what happens and in what order." },
            { prompt: "The problem or struggle that drives the story is the…", options: ["conflict", "setting", "resolution", "narrator"], correctIndex: 0, explanation: "Conflict drives the plot." },
            { prompt: "The central idea or message of a story is its…", options: ["theme", "plot", "setting", "climax"], correctIndex: 0, explanation: "Theme is the underlying idea." },
            { prompt: "The main character of a story is the…", options: ["protagonist", "antagonist", "narrator", "author"], correctIndex: 0, explanation: "The protagonist is the central character." },
            { prompt: "The turning point of highest tension is the…", options: ["climax", "exposition", "resolution", "setting"], correctIndex: 0, explanation: "The climax is the peak of the conflict." },
            { prompt: "A story told using 'I' is written in the…", options: ["first person", "third person", "second person", "no person"], correctIndex: 0, explanation: "'I' narration is first person." },
            { prompt: "A short story should focus on…", options: ["one main incident and few characters", "many sub-plots", "dozens of characters", "several decades"], correctIndex: 0, explanation: "The form is compact." },
            { prompt: "Which part of the plot introduces setting and characters?", options: ["exposition (beginning)", "climax", "falling action", "resolution"], correctIndex: 0, explanation: "The exposition opens the story." },
            { prompt: "'Show, not tell' means using…", options: ["dialogue and sensory detail", "long explanations", "a list of facts", "the future tense"], correctIndex: 0, explanation: "Showing through detail and action is more vivid." },
            { prompt: "A story without a conflict usually has…", options: ["no real story", "too many themes", "a strong climax", "clear characters only"], correctIndex: 0, explanation: "Conflict is what makes events into a story." },
            { prompt: "The conflict is settled at the…", options: ["resolution (ending)", "exposition", "rising action", "setting"], correctIndex: 0, explanation: "The resolution ends the story." },
            { prompt: "A common error in a short story is…", options: ["too many characters and events", "having a single conflict", "using dialogue", "a clear ending"], correctIndex: 0, explanation: "A short story has room for only a few characters and one main incident." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Name and briefly explain four elements of a short story.", answerKey: "Any four: setting (time and place); character (the people, esp. the protagonist); plot (the sequence of events); conflict (the problem/struggle); theme (the central idea); point of view (first or third person). Award 2 marks per element correctly named and explained.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "Which is the correct order of the plot?", options: ["exposition, rising action, climax, falling action, resolution", "climax, exposition, resolution", "resolution, climax, exposition", "rising action, resolution, climax"], correctIndex: 0, answerKey: "The plot moves exposition → rising action → climax → falling action → resolution.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Explain why conflict is essential to a short story.", answerKey: "Conflict is the problem or struggle the characters face; it creates tension and drives the events forward. Without a conflict there is nothing for the characters to overcome, so there is no real story — only a description. Award marks for defining conflict and explaining that it drives the plot/creates the story.", marks: 5 },
            { type: "ESSAY", prompt: "Write a short story of about 15 sentences built around a single conflict. Include a clear setting, at least one main character, a climax and a resolution, and keep the tense consistent.", answerKey: "Award marks as follows: a clear setting and main character established early, 5 marks; a single, well-developed conflict driving the plot, 6 marks; a recognisable climax and a resolution that settles the conflict, 6 marks; consistent tense and point of view, 4 marks; grammatical accuracy, dialogue or sensory detail, and overall effect, 4 marks. Deduct up to 3 marks for tense-drift or an unresolved ending.", marks: 25 },
          ],
        },
        {
          // Source: "Prefixes and Suffixes", Let's Get Writing, Composition, LibreTexts
          // (human.libretexts.org, 10.4); "Vocabulary Strategies", LACC Writing Handbook,
          // Humanities LibreTexts (human.libretexts.org, 1.7).
          slug: "vocabulary-development",
          title: "Vocabulary Development",
          objective:
            "By the end of the topic, learners should be able to use context clues, prefixes, suffixes and roots to work out word meanings, and to use synonyms, antonyms, homophones and a dictionary to build and use vocabulary accurately.",
          estimatedMinutes: 120,
          notes: `## Introduction

- **Vocabulary** = the stock of words a person knows and uses.
- A wider vocabulary means clearer reading, writing and speech.
- **This topic:** working out word meanings from **context** and **word parts**; **synonyms, antonyms, homophones**; and using a **dictionary**.

## Working out meaning from context

- **Context clues** = the other words around a new word that hint at its meaning.
- Types of clue: a **definition** in the sentence, an **example**, a **contrast** (*but, unlike*), or the **general sense** of the passage.
- *Example:* "The path was **arduous** — steep, rocky and tiring." (The detail shows *arduous* = difficult.)

## Word parts (roots, prefixes, suffixes)

- **Root** — the core of a word carrying its basic meaning (*port* = carry).
- **Prefix** — added to the **front** to change meaning: *un-* (not), *re-* (again), *pre-* (before), *dis-* (opposite), *mis-* (wrongly).
- **Suffix** — added to the **end**, often changing the word class: *-ness, -ment, -tion* (nouns); *-ful, -less, -able* (adjectives); *-ly* (adverbs).
- *Example:* **re + view + able = reviewable** ("able to be viewed again").

## Common prefixes

| Prefix | Meaning | Example |
| --- | --- | --- |
| un- | not | unacceptable |
| dis- | not, opposite of | dissatisfied |
| mis- | wrongly | misspell |
| re- | again | re-election |
| pre- | before | prepay |
| non- | not | nonsense |
| inter- | between | interrelated |
| sub- | under | submerge |
| super- | above | superscript |
| anti- | against | antibacterial |

## Spelling rules for suffixes

- **Do not add or drop letters** when joining a prefix to a word: *mis- + spell = misspell.*
- **-ness / -ly:** keep the spelling — except a final *y* becomes *i* (*happy → happiness, happily*).
- **Vowel suffix (-ing, -able):** drop a silent *e* (*hope → hoping*).
- **Consonant suffix (-ment, -ful):** keep the silent *e* (*move → movement*).
- **Consonant + y:** change *y* to *i* before a suffix not starting with *i* (*carry → carried*, but *carrying*).

## Word relationships

- **Synonyms** — words with **similar** meaning: *big / large / huge.*
- **Antonyms** — words with **opposite** meaning: *hot / cold.*
- **Homophones** — words that **sound alike** but differ in spelling and meaning: *their / there / they're; to / too / two; hear / here.*

## Using a dictionary

- Gives the **spelling, pronunciation, word class, meaning(s)** and often the **origin**.
- Entries are in **alphabetical order**; use the **guide words** at the top of the page.
- A **thesaurus** lists synonyms and antonyms.

## Common errors to watch for

- **Confusing homophones** — *their / there / they're*, *its / it's*.
- **Guessing without using the clues** — read the whole sentence first.
- **Adding a prefix/suffix wrongly** — mind the spelling (*happy → happiness*, not *happyness*).
- **Treating synonyms as identical** — they are *similar*, not always interchangeable (*slim* vs *skinny*).`,
          workedExample: `**Task.** Use context and word parts to work out the meaning of the underlined words.

*"The road was **impassable** after the flood, so the aid could not reach the village until the water **subsided**."*

**Step 1 — impassable (word parts).**
- **im-** = not; **pass** = go through; **-able** = able to be.
- So **impassable** = "not able to be passed through." The context (after the flood, aid could not reach) confirms it.

**Step 2 — subsided (context clue).**
- The aid "could not reach the village **until** the water subsided" — the contrast word *until* shows the water had to change for the road to be usable again.
- So **subsided** = "went down / became less." (A dictionary confirms: *subside* = to sink or lessen.)

**Conclusion:** breaking a word into **prefix + root + suffix** and reading the **surrounding context** together give the meaning without being told it directly.`,
          quiz: [
            { prompt: "Context clues are…", options: ["the surrounding words that hint at a word's meaning", "the letters of a word", "the dictionary spelling", "the page number"], correctIndex: 0, explanation: "Context clues come from the words around the new word." },
            { prompt: "A prefix is added to the … of a word.", options: ["front", "end", "middle", "root only"], correctIndex: 0, explanation: "Prefixes go at the front; suffixes at the end." },
            { prompt: "The prefix 'un-' means…", options: ["not", "again", "before", "after"], correctIndex: 0, explanation: "un- means not (unhappy = not happy)." },
            { prompt: "The prefix 're-' means…", options: ["again", "not", "wrongly", "before"], correctIndex: 0, explanation: "re- means again (rewrite = write again)." },
            { prompt: "A suffix is added to the … of a word.", options: ["end", "front", "middle", "root's front"], correctIndex: 0, explanation: "Suffixes are added at the end." },
            { prompt: "The root of a word carries its…", options: ["basic meaning", "spelling only", "pronunciation only", "page number"], correctIndex: 0, explanation: "The root holds the core meaning." },
            { prompt: "Synonyms are words with…", options: ["similar meaning", "opposite meaning", "the same sound", "no meaning"], correctIndex: 0, explanation: "Synonyms mean nearly the same (big/large)." },
            { prompt: "Antonyms are words with…", options: ["opposite meaning", "similar meaning", "the same spelling", "the same sound"], correctIndex: 0, explanation: "Antonyms are opposites (hot/cold)." },
            { prompt: "Homophones are words that…", options: ["sound alike but differ in spelling and meaning", "mean the same", "are opposites", "have no vowels"], correctIndex: 0, explanation: "e.g. their / there / they're." },
            { prompt: "Which set are homophones?", options: ["to / too / two", "big / large / huge", "hot / cold", "run / ran / run"], correctIndex: 0, explanation: "to/too/two sound alike but differ in meaning." },
            { prompt: "A dictionary entry gives the spelling, pronunciation, word class and…", options: ["meaning(s)", "the reader's name", "the price", "the author"], correctIndex: 0, explanation: "It also often gives the origin." },
            { prompt: "The words at the top of a dictionary page that help you find an entry are…", options: ["guide words", "footnotes", "prefixes", "captions"], correctIndex: 0, explanation: "Guide words show the first and last entries on the page." },
            { prompt: "A book that lists synonyms and antonyms is a…", options: ["thesaurus", "dictionary of dates", "atlas", "novel"], correctIndex: 0, explanation: "A thesaurus groups words by meaning." },
            { prompt: "'Impassable' breaks into im- + pass + -able, meaning…", options: ["not able to be passed", "able to pass again", "passing wrongly", "before passing"], correctIndex: 0, explanation: "im- (not) + pass + -able (able to be)." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Explain what context clues are and describe two kinds, with an example.", answerKey: "Context clues are the surrounding words that hint at a new word's meaning. Kinds (any two): a definition given in the sentence; an example; a contrast (but, unlike); the general sense of the passage. Accept a valid example, e.g. 'The path was arduous — steep and tiring' shows arduous = difficult. Award 3 marks for the explanation and 2 per kind with example.", marks: 7 },
            { type: "MULTIPLE_CHOICE", prompt: "Which sentence uses the correct homophone?", options: ["They left their books over there because they're heavy.", "They left there books over their because their heavy.", "They left they're books over there because their heavy.", "They left their books over they're because there heavy."], correctIndex: 0, answerKey: "their (possessive), there (place), they're (they are) are all used correctly in option A.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "Give the meaning of each prefix and use it in a word: un-, re-, pre-, dis-.", answerKey: "un- = not (unfair); re- = again (rebuild); pre- = before (preview); dis- = opposite/not (dishonest). Award 1 mark per correct meaning and 1 per correct word (max 8, scaled to 6).", marks: 6 },
            { type: "ESSAY", prompt: "Read a passage of your choice and pick five unfamiliar words. For each, work out the meaning using context clues or word parts, then check it in a dictionary and use the word in a sentence of your own.", answerKey: "Award marks as follows: five suitable words identified, 5 marks; a reasoned meaning for each from context clues or word parts (prefix/root/suffix), 10 marks; confirmation against a dictionary and correct word class noted, 5 marks; each word used correctly in an original sentence, 5 marks. Deduct where a sentence misuses the word.", marks: 25 },
          ],
        },
      ],
    },
  ],
};
