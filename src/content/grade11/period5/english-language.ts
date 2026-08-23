import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 11,
// Semester Two, Period V: Grammar — Library Skills. CONTENTS: (1) Library
// Skills — using the card/online catalog, call numbers, information in the
// catalog, materials in the library; (2) Reading Comprehension — answering
// direct and critical-thinking questions, active reading, before/during/after
// reading, scanning, skimming and the SQ3R/SQ4R method. Each CONTENTS item is
// one topic.
export const englishLanguageG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "Library Skills and Reading Comprehension",
  summary:
    "Period V of the MoE Grade 11 English syllabus. Learners use the card catalog or online catalog and call numbers to find materials in the library, then apply active reading strategies — skimming, scanning and the SQ3R method — and answer direct and critical-thinking comprehension questions on a passage.",
  topics: [
    {
      // source: LibreTexts — Introduction to College Research (Butler, Sargent and Smith), 8: Finding Materials in the Library / 8.7 How Libraries Organize Materials (https://human.libretexts.org/Bookshelves/Research_and_Information_Literacy/Introduction_to_College_Research_(Butler_Sargent_and_Smith)/08:_Finding_Materials_in_the_Library/8.07:_How_Libraries_Organize_Materials)
      slug: "library-skills",
      title: "Library Skills: Using the Catalog and Call Numbers",
      objective:
        "By the end of the topic, learners should be able to use a card catalog or online catalog to find materials, read a catalog record, use a call number to locate an item on the shelf, and name the kinds of materials a library holds.",
      estimatedMinutes: 140,
      notes: `## What a library holds

A library owns many kinds of **materials**, not just books:

- **Books** — fiction and non-fiction.
- **Periodicals** — magazines, journals and newspapers, published regularly.
- **Reference works** — dictionaries, encyclopedias, atlases (used in the library, not borrowed).
- **Audio-visual** — DVDs and recordings; and archival or microform materials.

## The catalog

The **catalog** is the index to everything the library owns. It may be a **card catalog** (drawers of cards) or, today, an **online catalog** (also called an **OPAC** — Online Public Access Catalog).

You can search the catalog by:

- **Author** — the writer's name.
- **Title** — the name of the book or item.
- **Subject** — the topic.
- **Keyword** — any important word.
- Specialty numbers such as the **call number** or **ISBN**.

## Information in a catalog record

A catalog **record** describes one item and tells you:

| Field | What it tells you |
| --- | --- |
| Author | who wrote it |
| Title | its name |
| Publisher / date | who published it and when |
| Call number | its address on the shelf |
| Location | which part of the library |
| Status | whether it is available or on loan |

## Call numbers

**Call number** — the code that gives an item its exact place on the shelf; it is the item's "address." Libraries arrange books **by call number** so that books on the same subject stand together.

- Two main systems: the **Dewey Decimal Classification** (used in most public and school libraries — numbers like 823.9) and the **Library of Congress Classification** (used in many academic libraries — letters and numbers like PR6045).
- To find a book: **search the catalog → note the call number → match it to the labels on the shelves.**

\`\`\`svg From catalog to shelf
<svg viewBox="0 0 420 110" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="14" y="35" width="110" height="40" rx="5" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="69" y="52" text-anchor="middle" font-size="11">Search catalog</text>
  <text x="69" y="67" text-anchor="middle" font-size="10">author/title/subject</text>
  <line x1="124" y1="55" x2="160" y2="55" stroke="#8a5833" stroke-width="2"/>
  <polygon points="160,55 152,51 152,59" fill="#8a5833"/>
  <rect x="162" y="35" width="90" height="40" rx="5" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="207" y="52" text-anchor="middle" font-size="11">Note the</text>
  <text x="207" y="67" text-anchor="middle" font-size="11">call number</text>
  <line x1="252" y1="55" x2="288" y2="55" stroke="#8a5833" stroke-width="2"/>
  <polygon points="288,55 280,51 280,59" fill="#8a5833"/>
  <rect x="290" y="35" width="115" height="40" rx="5" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="347" y="52" text-anchor="middle" font-size="11">Find it on the</text>
  <text x="347" y="67" text-anchor="middle" font-size="11">labelled shelf</text>
</svg>
\`\`\`

## Summary

- A library holds **books, periodicals, reference works and audio-visual/archival materials**.
- The **catalog** (card or online/OPAC) indexes everything; search it by **author, title, subject or keyword**.
- The **call number** is an item's shelf address; **Dewey** and **Library of Congress** are the two main systems. Search the catalog, note the call number, then find the item on the shelf.`,
      workedExample: `**Task.** A student needs the novel *Things Fall Apart* by Chinua Achebe for a class. Show how to find it in the library.

**Steps**

1. **Choose a search type.** The student knows the author and title, so search the **catalog** by **title** ("Things Fall Apart") or by **author** ("Achebe, Chinua").
2. **Read the record.** The catalog record shows the author, title, publisher and date, the **location** (Fiction section), the **status** (Available), and the **call number**.
3. **Note the call number.** Suppose the record shows the call number **823.9 ACH** (a Dewey-style number).
4. **Go to the shelves.** Follow the shelf labels in number order until reaching **823.9**, then find **ACH** (the first letters of the author's surname).
5. **Check the status first.** If the record had said "On loan," the student would reserve it or ask the librarian instead of searching the shelf.

**Rule applied:** search the catalog → read the record → use the **call number** to locate the item on the correctly labelled shelf.`,
      quiz: [
        {
          prompt: "The index to everything a library owns is the…",
          options: ["catalog", "cover", "chapter", "caption"],
          correctIndex: 0,
          explanation: "The catalog lists all the library's materials.",
        },
        {
          prompt: "A modern electronic catalog is often called an…",
          options: ["online catalog (OPAC)", "encyclopedia", "index card", "abstract"],
          correctIndex: 0,
          explanation: "OPAC = Online Public Access Catalog.",
        },
        {
          prompt: "Which is NOT a way to search a library catalog?",
          options: ["by the reader's mood", "by author", "by title", "by subject"],
          correctIndex: 0,
          explanation: "You search by author, title, subject or keyword, not mood.",
        },
        {
          prompt: "A call number tells you an item's…",
          options: ["place on the shelf", "price", "author's age", "number of pages"],
          correctIndex: 0,
          explanation: "The call number is the item's address on the shelf.",
        },
        {
          prompt: "Magazines, journals and newspapers are together called…",
          options: ["periodicals", "reference works", "archives", "atlases"],
          correctIndex: 0,
          explanation: "Periodicals are published at regular intervals.",
        },
        {
          prompt: "Which system uses numbers like 823.9 and is common in school and public libraries?",
          options: ["Dewey Decimal Classification", "Library of Congress Classification", "ISBN", "OPAC"],
          correctIndex: 0,
          explanation: "Dewey Decimal uses numbers and is common in public/school libraries.",
        },
        {
          prompt: "Which system uses letters and numbers like PR6045 and is common in academic libraries?",
          options: ["Library of Congress Classification", "Dewey Decimal Classification", "ISBN", "keyword search"],
          correctIndex: 0,
          explanation: "Library of Congress Classification is alphanumeric and used by many academic libraries.",
        },
        {
          prompt: "Libraries arrange books by call number so that…",
          options: ["books on the same subject stand together", "the newest books are hidden", "authors are grouped by age", "titles rhyme"],
          correctIndex: 0,
          explanation: "Grouping by call number keeps related subjects together.",
        },
        {
          prompt: "The correct order to find a book is…",
          options: ["search catalog, note call number, find on shelf", "go to the shelf, then search", "ask a friend, then leave", "read the ending first"],
          correctIndex: 0,
          explanation: "Search the catalog, note the call number, then match it on the shelf.",
        },
        {
          prompt: "A catalog record's 'status' field tells you whether the item is…",
          options: ["available or on loan", "hardback or paperback", "long or short", "old or new"],
          correctIndex: 0,
          explanation: "Status shows availability, e.g. Available or On loan.",
        },
        {
          prompt: "Dictionaries, encyclopedias and atlases are…",
          options: ["reference works", "periodicals", "novels", "newspapers"],
          correctIndex: 0,
          explanation: "These are reference works, usually used inside the library.",
        },
        {
          prompt: "If you know only the topic of your search, the best search type is…",
          options: ["subject or keyword", "call number", "ISBN", "status"],
          correctIndex: 0,
          explanation: "Search by subject or keyword when you know the topic but not the title.",
        },
        {
          prompt: "The ISBN is a…",
          options: ["number that identifies a specific book", "type of shelf", "reading strategy", "librarian's title"],
          correctIndex: 0,
          explanation: "The ISBN is a unique identifying number for a book.",
        },
        {
          prompt: "In the call number '823.9 ACH', 'ACH' usually stands for…",
          options: ["the first letters of the author's surname", "the year", "the shelf height", "the number of copies"],
          correctIndex: 0,
          explanation: "The letters typically come from the author's surname (Achebe).",
        },
        {
          prompt: "Which of these would a library catalog NOT usually list?",
          options: ["a student's lunch order", "books", "DVDs", "journals"],
          correctIndex: 0,
          explanation: "The catalog lists the library's materials, not personal items.",
        },
        {
          prompt: "A card catalog stores its records on…",
          options: ["cards in drawers", "a chalkboard", "the book covers", "the ceiling"],
          correctIndex: 0,
          explanation: "A card catalog keeps records on cards in drawers.",
        },
        {
          prompt: "To search when you know the writer's name, use the… search.",
          options: ["author", "title", "subject", "status"],
          correctIndex: 0,
          explanation: "Search by author when you know who wrote it.",
        },
        {
          prompt: "Which field in a catalog record tells you where in the library the item is?",
          options: ["location", "title", "author", "date"],
          correctIndex: 0,
          explanation: "The location field names the section of the library.",
        },
        {
          prompt: "A discovery tool or online catalog helps you find what the library…",
          options: ["owns and can access", "will never buy", "has thrown away", "keeps secret"],
          correctIndex: 0,
          explanation: "The catalog/discovery tool shows what the library owns and can access.",
        },
        {
          prompt: "The best first step when a book's status shows 'On loan' is to…",
          options: ["reserve it or ask the librarian", "search the shelf anyway", "give up", "buy a new copy"],
          correctIndex: 0,
          explanation: "If it is out on loan, reserve it or seek help rather than hunt the shelf.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List four different ways you can search a library catalog for an item.",
          answerKey:
            "Any four of: author, title, subject, keyword, call number, ISBN. Award a mark per correct search type (up to the marks available).",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "What is the purpose of a call number?",
          options: [
            "To show an item's exact place on the shelf",
            "To show the price of the book",
            "To count the library's visitors",
            "To rate how good a book is",
          ],
          correctIndex: 0,
          answerKey: "The call number is the item's shelf address, used to locate it.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the two main classification systems libraries use and one difference between them.",
          answerKey:
            "Dewey Decimal Classification (numbers; common in public/school libraries) and Library of Congress Classification (letters and numbers; common in academic libraries). Award marks for both systems and a valid difference.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List three different kinds of materials, other than novels, that a library may hold.",
          answerKey:
            "Any three of: periodicals (magazines/journals/newspapers), reference works (dictionaries/encyclopedias/atlases), DVDs/audio-visual, archival or microform materials, non-fiction books. Award a mark per correct kind.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe, step by step, how you would use the library catalog and a call number to find a particular book on the shelf. Mention what information the catalog record gives you.",
          answerKey:
            "A strong answer explains: choosing a search type (author/title/subject/keyword); reading the record (author, title, publisher/date, location, status, call number); noting the call number; and following the shelf labels in order to find the item, checking status first. Award marks for the search, the record's information, and using the call number to locate the item.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — College Skills: Intermediate English (Canadian), 3.2 Reading Skills: Skimming, Scanning and Careful Reading; and Community College of Allegheny County, 2.2.6 SQ3R (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/College_Skills:_Intermediate_English_(Canadian)/03:_Work/3.02:_Reading_Skills-_Skimming_Scanning_and_Careful_Reading)
      slug: "reading-comprehension",
      title: "Reading Comprehension and Active Reading",
      objective:
        "By the end of the topic, learners should be able to use skimming, scanning and active reading before, during and after reading, apply the SQ3R method, and answer both direct and critical-thinking comprehension questions.",
      estimatedMinutes: 150,
      notes: `## Active reading

**Active reading** means working with a text, not just letting the eyes pass over it. Active readers preview, ask questions, and check their understanding. Active reading in three stages:

- **Before reading** — preview the title, headings and pictures; predict what the text is about; recall what you already know.
- **While reading** — ask and answer questions; note key points; look up or work out unknown words.
- **After reading** — recite or summarise the main ideas in your own words; review to fix them in memory.

## Skimming and scanning

Two fast reading skills are useful before careful reading:

| Skill | Purpose | How |
| --- | --- | --- |
| Skimming | get the **general idea** quickly | run your eyes over the text; read titles, first sentences, key words |
| Scanning | find **one specific piece of information** | move your eyes fast, looking only for that word, name, date or fact |

- **Skimming** = reading quickly to know **what a text is about**; you do not need every detail.
- **Scanning** = searching for a **particular fact** (a date, a name, a number) without reading everything.

## The SQ3R method

**SQ3R** is a step-by-step active-reading strategy that helps you understand and **remember** what you read. Its five steps are used **before, during and after** reading:

1. **Survey** — skim the whole text first (title, headings, summary) to see its shape.
2. **Question** — turn each heading into a question you want answered.
3. **Read** — read a section actively, looking for the answers.
4. **Recite** — say or write the answer in your own words.
5. **Review** — go back over the whole text to fix the ideas in memory.

Some versions add a step and are called **SQ4R** — for example inserting **Record** (write notes) between Read and Recite, giving Survey, Question, Read, Record, Recite, Review.

## Answering comprehension questions

Comprehension questions come in two broad kinds:

- **Direct (literal) questions** — the answer is **stated openly** in the passage. Find the exact place and quote or restate it. Signalled by *who, what, when, where.*
- **Critical-thinking (inferential) questions** — the answer is **not stated directly**; you must **infer** it from clues, or give a reasoned judgment. Signalled by *why, how, what does this suggest, what is the writer's purpose.*

**How to answer:** read the question first, scan for the relevant part, then answer in a complete sentence. For a direct question, point to the words in the text; for a critical-thinking question, give your inference **and the evidence** for it.

## Summary

- **Active reading** = before (preview/predict), while (question/note), after (recite/review).
- **Skim** for the general idea; **scan** for a specific fact.
- **SQ3R** = Survey, Question, Read, Recite, Review (SQ4R adds Record).
- **Direct** questions are answered straight from the text; **critical-thinking** questions need inference plus evidence.`,
      workedExample: `**Task.** Show how to read a short passage and answer two questions.

*Passage:* "The weaver bird builds a hanging nest from grass and reeds. It works for days, knotting each strand. The narrow entrance faces downward, which makes it hard for snakes to enter."

1. Which reading steps would you use before answering?
2. Answer a **direct** question: *What does the weaver bird use to build its nest?*
3. Answer a **critical-thinking** question: *Why does the entrance face downward?*

**Answers**

1. **Survey/skim** the passage for its general idea (a bird building a nest); **question** the topic ("How and why is the nest built that way?"); then **read** carefully and **scan** back for details when answering.
2. **Direct question** — the answer is stated: the weaver bird uses **grass and reeds**. (Found in the first sentence.)
3. **Critical-thinking question** — not stated as "why" but inferable: the entrance faces downward **to make it hard for snakes to get in** — the passage says this makes entry difficult for snakes, so the inference is that it protects the nest from predators. Give the inference **and** the evidence (the line about snakes).

**Rule applied:** skim and question first; answer a direct question straight from the text, and support a critical-thinking answer with evidence.`,
      quiz: [
        {
          prompt: "Active reading means…",
          options: ["working with a text: previewing, questioning, checking understanding", "reading aloud only", "reading as fast as possible", "copying the text word for word"],
          correctIndex: 0,
          explanation: "Active readers engage with the text rather than reading passively.",
        },
        {
          prompt: "Before reading, a good active reader…",
          options: ["previews and predicts", "memorises every word", "writes the summary first", "ignores the title"],
          correctIndex: 0,
          explanation: "Preview the title/headings and predict the content.",
        },
        {
          prompt: "Skimming is reading quickly to…",
          options: ["get the general idea", "find one exact fact", "memorise every detail", "correct spelling"],
          correctIndex: 0,
          explanation: "Skimming gives you the overall gist of a text.",
        },
        {
          prompt: "Scanning is used to…",
          options: ["find a specific piece of information", "get the general idea", "read every word slowly", "check grammar"],
          correctIndex: 0,
          explanation: "Scanning searches for a particular fact, name or date.",
        },
        {
          prompt: "To find a single date in a timetable, you would…",
          options: ["scan", "skim", "read every line carefully", "survey the whole book"],
          correctIndex: 0,
          explanation: "Scanning quickly locates one specific piece of information.",
        },
        {
          prompt: "SQ3R stands for Survey, Question, Read, Recite and…",
          options: ["Review", "Repeat", "Rewrite", "Return"],
          correctIndex: 0,
          explanation: "The five steps are Survey, Question, Read, Recite, Review.",
        },
        {
          prompt: "The 'Survey' step of SQ3R means to…",
          options: ["skim the whole text first", "answer questions", "recite the ideas", "close the book"],
          correctIndex: 0,
          explanation: "Survey = an initial skim of titles, headings and summary.",
        },
        {
          prompt: "The 'Question' step of SQ3R means to…",
          options: ["turn headings into questions", "read aloud", "review at the end", "write the essay"],
          correctIndex: 0,
          explanation: "Turn each heading into a question you read to answer.",
        },
        {
          prompt: "The 'Recite' step of SQ3R means to…",
          options: ["say or write the answer in your own words", "skim again", "survey the text", "scan for dates"],
          correctIndex: 0,
          explanation: "Recite = state the answer in your own words to check understanding.",
        },
        {
          prompt: "SQ3R mainly helps you to…",
          options: ["understand and remember what you read", "read faster only", "write neatly", "spell correctly"],
          correctIndex: 0,
          explanation: "SQ3R aids comprehension and long-term memory.",
        },
        {
          prompt: "The version SQ4R adds the extra step…",
          options: ["Record (write notes)", "Rest", "Ring", "Run"],
          correctIndex: 0,
          explanation: "SQ4R inserts Record: Survey, Question, Read, Record, Recite, Review.",
        },
        {
          prompt: "A direct (literal) comprehension question is answered…",
          options: ["straight from words stated in the text", "only by guessing", "by ignoring the passage", "from memory alone"],
          correctIndex: 0,
          explanation: "The answer is stated openly in the passage.",
        },
        {
          prompt: "A critical-thinking (inferential) question requires you to…",
          options: ["infer the answer from clues and give evidence", "copy a sentence exactly", "count the words", "skip it"],
          correctIndex: 0,
          explanation: "You must infer from clues or reason, supporting the answer with evidence.",
        },
        {
          prompt: "Which question word usually signals a direct question?",
          options: ["what / when / where", "why", "how does this suggest", "what is the purpose"],
          correctIndex: 0,
          explanation: "Who/what/when/where usually have answers stated in the text.",
        },
        {
          prompt: "Which usually signals a critical-thinking question?",
          options: ["why / what does this suggest", "what is the date", "who is named", "where is it set"],
          correctIndex: 0,
          explanation: "'Why' and 'what does this suggest' call for inference.",
        },
        {
          prompt: "A sensible first move when answering comprehension questions is to…",
          options: ["read the question, then scan for the relevant part", "answer without reading", "read the last line only", "guess randomly"],
          correctIndex: 0,
          explanation: "Read the question, then scan the passage for the answer.",
        },
        {
          prompt: "After reading, an active reader should…",
          options: ["recite or summarise the main ideas and review", "forget the text", "start a new book at once", "reread every word aloud"],
          correctIndex: 0,
          explanation: "Summarise in your own words and review to remember.",
        },
        {
          prompt: "While reading actively, you should…",
          options: ["ask questions and note key points", "avoid thinking", "read only the pictures", "count paragraphs"],
          correctIndex: 0,
          explanation: "Question the text and note key points as you read.",
        },
        {
          prompt: "To get a quick overview of a long chapter before studying it, you should…",
          options: ["skim / survey it", "scan for one word", "recite it", "review it"],
          correctIndex: 0,
          explanation: "Skimming or surveying gives the overall shape before careful reading.",
        },
        {
          prompt: "When answering a critical-thinking question, you should include…",
          options: ["your inference and the evidence for it", "only the page number", "the title", "an unrelated opinion"],
          correctIndex: 0,
          explanation: "Support the inference with evidence from the text.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between skimming and scanning, and give a situation where each is useful.",
          answerKey:
            "Skimming = reading quickly for the general idea (e.g. deciding what an article is about); scanning = searching for one specific piece of information (e.g. finding a date in a timetable). Award marks for both definitions and a valid situation for each.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "What do the letters SQ3R stand for?",
          options: [
            "Survey, Question, Read, Recite, Review",
            "Study, Quote, Read, Repeat, Recall",
            "Scan, Question, Read, Recite, Rest",
            "Survey, Quiz, Read, Rewrite, Return",
          ],
          correctIndex: 0,
          answerKey: "SQ3R = Survey, Question, Read, Recite, Review.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three stages of active reading and state one thing you should do at each stage.",
          answerKey:
            "Before reading — preview/predict; while reading — question/note key points; after reading — recite/summarise and review. Award a mark per stage with a valid action.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a direct comprehension question and a critical-thinking comprehension question.",
          answerKey:
            "A direct/literal question has its answer stated openly in the passage (who/what/when/where); a critical-thinking/inferential question must be inferred from clues or reasoned, with evidence (why/how/what does this suggest). Award a mark for each type correctly explained.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how you would use the SQ3R method to study a chapter of a textbook, explaining what you do at each step. Then explain how the method helps you answer comprehension questions afterwards.",
          answerKey:
            "A strong answer explains each step — Survey (skim for shape), Question (turn headings into questions), Read (read for answers), Recite (state answers in own words), Review (go back to fix ideas) — and explains that the method builds understanding and memory so that direct questions can be answered from the text and critical-thinking questions from reasoned inference with evidence. Award marks for the five steps and the link to answering questions.",
          marks: 5,
        },
      ],
    },
  ],
};
