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
          notes: `## What a noun is

A **noun** is a word that names a **person, place, thing, or idea**.

- Person: *teacher, Musu, doctor*
- Place: *Monrovia, market, school*
- Thing: *book, cassava, phone*
- Idea: *freedom, honesty, fear*

A quick test: if you can put *the* or *a* in front of it, or make it plural, it is usually a noun.

## The kinds of nouns

**Common vs proper**
- **Common noun** — a general name, written in lower case: *city, river, boy*.
- **Proper noun** — the particular name of one person, place or thing, written with a **capital letter**: *Monrovia, St. Paul River, Joseph*.

**Concrete vs abstract**
- **Concrete noun** — something perceived by the senses: *rice, music, smoke*.
- **Abstract noun** — an idea, quality or state that cannot be touched: *courage, poverty, joy*.

**Countable vs uncountable**
- **Countable noun** — can be counted and made plural: *one book, two books*.
- **Uncountable (mass) noun** — cannot be counted directly and has no plural: *water, sugar, information, advice*. We say *some water*, not *two waters*.

**Collective nouns**
- Name a **group** treated as a single unit: *a herd of cattle, a committee, a team, a bunch of bananas*.

**Compound nouns**
- Made of two or more words: *classroom, mother-in-law, palm oil*.

## Forming plurals

- Most nouns add **-s**: *book → books*.
- Nouns ending in *-s, -sh, -ch, -x, -z* add **-es**: *bus → buses, church → churches*.
- Nouns ending in a consonant + *-y* change to **-ies**: *baby → babies*.
- Nouns ending in *-f/-fe* often change to **-ves**: *leaf → leaves, knife → knives*.
- **Irregular plurals** must be learned: *child → children, foot → feet, man → men, tooth → teeth, mouse → mice*.
- Some nouns are the **same** in singular and plural: *sheep, deer, fish*.

## Common errors to watch for

- Making uncountable nouns plural: *informations, advices, furnitures* are wrong.
- Forgetting the capital on a proper noun: *monrovia* should be *Monrovia*.
- Wrong plural of irregular nouns: *childs, foots, mans* are wrong.

## Nouns in composition

Strong writing uses **precise nouns**. *He sat under the tree* is weaker than *He sat under the mango tree*. Encourage exact, concrete nouns in narration and description rather than vague ones.`,
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
          slug: "pronouns",
          title: "Pronouns and Their Antecedents",
          objective:
            "By the end of the unit, learners should be able to define a pronoun, identify the kinds of pronouns (personal, possessive, indefinite, demonstrative, interrogative), and make pronouns agree with their antecedents in number, gender and person.",
          estimatedMinutes: 160,
          notes: `## What a pronoun is

A **pronoun** is a word used **in place of a noun**, so that we do not have to repeat the noun.

*Musu went to the market. **Musu** bought fish and **Musu** came home.*
→ *Musu went to the market. **She** bought fish and **she** came home.*

The noun a pronoun stands for is called its **antecedent**. In the sentence above, *Musu* is the antecedent of *she*.

## The kinds of pronouns

**Personal pronouns** — stand for people or things.
- Subject: *I, you, he, she, it, we, they*
- Object: *me, you, him, her, it, us, them*

**Possessive pronouns** — show ownership.
- *mine, yours, his, hers, its, ours, theirs*
- *This book is **mine**.* (Note: no apostrophe in *yours, hers, theirs, its*.)

**Indefinite pronouns** — refer to no particular person or thing.
- *someone, anyone, everyone, nobody, each, all, some, few, many, none*

**Demonstrative pronouns** — point to specific things.
- *this, that, these, those*
- *This* and *these* are near; *that* and *those* are far.

**Interrogative pronouns** — ask questions.
- *who, whom, whose, which, what*

**Relative pronouns** — join a describing clause to a noun.
- *who, whom, whose, which, that* — *The boy **who** won the prize is my brother.*

**Reflexive pronouns** — refer back to the subject.
- *myself, yourself, himself, herself, itself, ourselves, themselves*

## Pronoun–antecedent agreement

A pronoun must **agree** with its antecedent in three ways:

1. **Number** — singular antecedent takes a singular pronoun.
   *Each learner must bring **his or her** book* (not *their book*, in formal writing).
2. **Gender** — masculine, feminine or neuter.
   *The girl lost **her** pen* (not *his*).
3. **Person** — first, second or third.
   *If a student studies, **he or she** (not *you*) will pass.*

## Common errors to watch for

- **Vague reference:** *Kou told Ma that she had won* — who won? Rewrite to make the antecedent clear.
- **Wrong case:** *Me and him went* should be *He and I went* (subject pronouns).
- **Apostrophe in possessives:** *its* (belonging to it) has no apostrophe; *it's* means *it is*. This is the single most common pronoun error in English.
- **Agreement with indefinite pronouns:** *everyone, each, nobody* are singular — *Everyone has **his or her** ticket*.

## Why this matters

Correct pronoun use keeps writing clear. A reader who cannot tell which noun a pronoun refers to loses the meaning, so agreement and clear reference are not decoration — they are what makes a sentence understandable.`,
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
      ],
    },
  ],
};
