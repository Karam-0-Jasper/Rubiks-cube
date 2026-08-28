import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for English, Grade 11,
// Semester Two, Period VI: Grammar — Letter Writing. CONTENTS: (1) Letter
// Writing — informal letter, formal/business letter (letter of application,
// letter of excuse/request/thanks); (2) Speech Writing; (3) Report Writing;
// (4) Oral Reading/Speaking; (5) Listening to Speeches; (6) Oral Presentations
// for Critical Evaluation. CONTENTS items 4-6 are all oral-communication skills
// and are taught here as one "Oral Communication" topic; the other items are
// their own topics.
export const englishLanguageG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Letter Writing, Speeches and Reports",
  summary:
    "Period VI of the MoE Grade 11 English syllabus. Learners write informal and formal/business letters (application, request, excuse and thanks), plan and write speeches and reports with clear structure, and develop oral communication skills — reading aloud and speaking, listening to speeches, and giving oral presentations for critical evaluation.",
  topics: [
    {
      // source: LibreTexts — Business Writing for Everyday Use 2e (HACC), 1.9 Letters; and Online Technical Writing (McMurrey), 2.1.4 Application letters (https://human.libretexts.org/Courses/Harrisburg_Area_Community_College/Business_Writing_for_Everyday_Use_2e/01:_New_Page/1.09:_Letters)
      slug: "letter-writing",
      title: "Letter Writing: Informal and Formal/Business Letters",
      objective:
        "By the end of the topic, learners should be able to distinguish informal from formal letters, lay out a business letter with its standard parts, and write a letter of application, request, excuse or thanks in the correct tone.",
      estimatedMinutes: 160,
      notes: `## Two kinds of letter

| | Informal (friendly) letter | Formal / business letter |
| --- | --- | --- |
| To whom | family and friends | an organisation, official or someone you do not know well |
| Tone | personal, relaxed | polite, professional |
| Salutation ends with | a comma (*Dear Musu,*) | a colon (*Dear Sir:*) |
| Language | everyday, may use contractions | standard, no slang |

A **business letter** is written in a **formal style**, often between an organisation and a client, and is used mainly to **request or give information**.

## Parts of a business letter

A business letter has standard parts, usually in **full-block style** (every part aligned to the **left margin**, single-spaced, a blank line between paragraphs, no indenting):

1. **Heading / return address** — the writer's address and the date.
2. **Inside address** — the name and address of the **recipient**.
3. **Salutation / greeting** — *Dear Mr. Kollie:* (formal → colon).
4. **Body** — the message, in clear paragraphs.
5. **Complimentary close** — *Sincerely yours,* / *Respectfully,* / *Cordially,* (capital first word, comma after).
6. **Signature** — the writer's signature above the typed name.

\`\`\`svg Full-block business letter layout
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="30" y="12" width="240" height="196" fill="#fdf8f0" stroke="#8a5833"/>
  <text x="40" y="30" font-size="10">Return address + date</text>
  <text x="40" y="52" font-size="10">Inside address (recipient)</text>
  <text x="40" y="74" font-size="10">Dear Mr. Kollie:</text>
  <line x1="40" y1="88" x2="255" y2="88" stroke="#d8c4a8"/>
  <line x1="40" y1="100" x2="255" y2="100" stroke="#d8c4a8"/>
  <line x1="40" y1="112" x2="230" y2="112" stroke="#d8c4a8"/>
  <text x="40" y="132" font-size="10">Body paragraphs</text>
  <line x1="40" y1="144" x2="255" y2="144" stroke="#d8c4a8"/>
  <line x1="40" y1="156" x2="210" y2="156" stroke="#d8c4a8"/>
  <text x="40" y="182" font-size="10">Sincerely yours,</text>
  <text x="40" y="198" font-size="10">Signature / typed name</text>
</svg>
\`\`\`

## Common formal letters

- **Letter of application** — applies for a job or place. It draws a **clear connection between the position sought and the writer's qualifications**, matching the job's requirements to what the writer offers, and asks for an interview.
- **Letter of request / inquiry** — asks for information, help, names or directions; state clearly and politely **what you need**.
- **Letter of excuse** — explains and apologises for an absence or failure to do something, giving the reason.
- **Letter of thanks** — expresses gratitude for help, a gift or an opportunity.

## Writing well

- Keep a business letter **clear, brief and polite**; state your purpose early.
- Match **tone** to the reader: formal for officials, warm for friends.
- Proofread for spelling, grammar and correct addresses before sending.

## Summary

- **Informal** letters are personal (comma after the greeting); **formal/business** letters are professional (colon after the greeting).
- A business letter's parts: **heading, inside address, salutation, body, complimentary close, signature**, usually in **full-block** style.
- Learn the special formal letters: **application** (match qualifications to the job), **request**, **excuse** and **thanks**.`,
      workedExample: `**Task.** Draft the opening of a letter of application and label its parts.

**Situation:** Musu Kamara applies for a clerk post at Kakata Trading Co.

\`\`\`
14 Tubman Street
Kakata, Margibi County
23 August 2026                                (heading: return address + date)

The Manager
Kakata Trading Co.
Kakata, Margibi County                        (inside address: recipient)

Dear Sir:                                      (salutation — colon, formal)

I am writing to apply for the post of clerk advertised in the Daily Observer of
20 August 2026. I have completed senior high school and have two years'
experience keeping records at a local shop, so I am confident I can carry out
the duties of the post.                        (body — states purpose, matches
                                                qualifications to the job)

I would welcome the chance of an interview at your convenience.

Sincerely yours,                               (complimentary close — comma)

(signature)
Musu Kamara                                    (signature / typed name)
\`\`\`

**Why it works:** it uses **full-block** layout with every standard part, a **colon** after the formal salutation, and a body that **matches the writer's qualifications to the job's requirements** — the purpose of an application letter.`,
      quiz: [
        {
          prompt: "An informal letter is written to…",
          options: ["family and friends", "a government office", "a company you never met", "a bank manager"],
          correctIndex: 0,
          explanation: "Informal (friendly) letters go to people you know well.",
        },
        {
          prompt: "A business letter is written in a… style.",
          options: ["formal", "slangy", "casual", "rhyming"],
          correctIndex: 0,
          explanation: "Business letters use a formal, professional style.",
        },
        {
          prompt: "In a formal letter the salutation is followed by a…",
          options: ["colon", "comma", "dash", "question mark"],
          correctIndex: 0,
          explanation: "Formal salutations end with a colon: 'Dear Sir:'.",
        },
        {
          prompt: "In a friendly letter the greeting is usually followed by a…",
          options: ["comma", "colon", "semicolon", "full stop"],
          correctIndex: 0,
          explanation: "A friendly greeting uses a comma: 'Dear Musu,'.",
        },
        {
          prompt: "The part of a business letter that gives the recipient's name and address is the…",
          options: ["inside address", "salutation", "complimentary close", "signature"],
          correctIndex: 0,
          explanation: "The inside address shows the recipient's name and address.",
        },
        {
          prompt: "'Sincerely yours,' is an example of the…",
          options: ["complimentary close", "salutation", "heading", "inside address"],
          correctIndex: 0,
          explanation: "The complimentary close ends the letter before the signature.",
        },
        {
          prompt: "In full-block style, all parts of the letter are aligned to the…",
          options: ["left margin", "right margin", "centre", "bottom"],
          correctIndex: 0,
          explanation: "Full-block letters align every component to the left.",
        },
        {
          prompt: "A business letter is used mainly to…",
          options: ["request or give information", "tell jokes", "write poems", "keep a diary"],
          correctIndex: 0,
          explanation: "Business letters mainly request or provide information.",
        },
        {
          prompt: "The main purpose of a letter of application is to…",
          options: ["connect your qualifications to the job you want", "complain about a product", "thank a friend", "invite someone to a party"],
          correctIndex: 0,
          explanation: "It matches the writer's qualifications to the job's requirements.",
        },
        {
          prompt: "A letter that asks for information, help or directions is a letter of…",
          options: ["request / inquiry", "thanks", "excuse", "application"],
          correctIndex: 0,
          explanation: "A request/inquiry letter asks for what you need.",
        },
        {
          prompt: "A letter of excuse usually…",
          options: ["explains and apologises for an absence or failure", "applies for a job", "orders goods", "gives a recipe"],
          correctIndex: 0,
          explanation: "An excuse letter explains and apologises, giving the reason.",
        },
        {
          prompt: "A letter of thanks expresses…",
          options: ["gratitude", "anger", "a complaint", "a request for money"],
          correctIndex: 0,
          explanation: "A thank-you letter expresses gratitude.",
        },
        {
          prompt: "The heading of a business letter contains the…",
          options: ["writer's address and the date", "recipient's signature", "salutation", "complimentary close"],
          correctIndex: 0,
          explanation: "The heading gives the writer's return address and the date.",
        },
        {
          prompt: "Which salutation is correct for a formal letter to an unknown official?",
          options: ["Dear Sir:", "Hey there,", "Yo,", "Dear Sir!!!"],
          correctIndex: 0,
          explanation: "'Dear Sir:' with a colon suits a formal letter.",
        },
        {
          prompt: "Which is good practice in a business letter?",
          options: ["state your purpose early and stay polite", "use slang", "leave out the date", "write one long paragraph with no breaks"],
          correctIndex: 0,
          explanation: "Be clear, brief, polite and state your purpose early.",
        },
        {
          prompt: "In full-block style, paragraphs are…",
          options: ["not indented, separated by a blank line", "deeply indented", "centred", "right-aligned"],
          correctIndex: 0,
          explanation: "Full-block paragraphs are flush left with a blank line between them.",
        },
        {
          prompt: "The signature in a business letter goes…",
          options: ["above the typed name, after the close", "before the salutation", "in the heading", "in the inside address"],
          correctIndex: 0,
          explanation: "You sign above your typed name, after the complimentary close.",
        },
        {
          prompt: "An application letter should end by…",
          options: ["asking for an interview", "demanding payment", "apologising for writing", "listing your friends"],
          correctIndex: 0,
          explanation: "It typically requests an interview at the reader's convenience.",
        },
        {
          prompt: "Which letter would you write after someone helped you find a job?",
          options: ["a letter of thanks", "a letter of excuse", "a letter of application", "a letter of complaint"],
          correctIndex: 0,
          explanation: "You express gratitude with a letter of thanks.",
        },
        {
          prompt: "Before sending any letter you should…",
          options: ["proofread it for spelling, grammar and the address", "hide the date", "remove the greeting", "write it in pencil only"],
          correctIndex: 0,
          explanation: "Always proofread and check the addresses before sending.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List the six standard parts of a business letter in order.",
          answerKey:
            "1) Heading/return address and date; 2) Inside address; 3) Salutation; 4) Body; 5) Complimentary close; 6) Signature/typed name. Award marks for the correct parts in a sensible order.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the correct salutation and punctuation for a formal business letter?",
          options: [
            "Dear Mr. Kollie:",
            "Dear Mr. Kollie!",
            "Hi Kollie,",
            "Dear Mr. Kollie",
          ],
          correctIndex: 0,
          answerKey: "A formal salutation ends with a colon: 'Dear Mr. Kollie:'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two differences between an informal (friendly) letter and a formal (business) letter.",
          answerKey:
            "Any two of: recipient (friends/family vs organisation/official); tone (personal/relaxed vs polite/professional); salutation punctuation (comma vs colon); language (everyday/contractions vs standard, no slang). Award a mark per valid difference.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What is the main purpose of a letter of application, and how should its body achieve that purpose?",
          answerKey:
            "Its purpose is to apply for a job/place by connecting the writer's qualifications to the position. The body should match the writer's qualifications and experience to the job's requirements and request an interview. Award marks for the purpose and the matching of qualifications.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Write a short formal letter of request to your school principal asking permission to use the hall for a debate. Include all the standard parts of a business letter and use the correct tone.",
          answerKey:
            "Award marks for: heading (address + date); inside address; formal salutation with a colon; a clear, polite body that states the request (use of the hall, purpose, date/time); an appropriate complimentary close with a comma; and a signature/typed name. Deduct for missing parts, wrong tone, or informal punctuation.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — About Writing Guide with Handbook (OpenStax), 19.5 Writing Process: Writing to Speak; and Writing for Success (McLean), 14.1 Organizing a Visual Presentation (https://human.libretexts.org/Bookshelves/Composition/Introductory_Composition/About_Writing_Guide_with_Handbook_-_A_textbook_for_English_Composition_(OpenStax)/19:_Scripting_for_the_Public_Forum-_Writing_to_Speak/19.05:_Writing_Process-_Writing_to_Speak)
      slug: "speech-writing",
      title: "Speech Writing",
      objective:
        "By the end of the topic, learners should be able to plan a speech with an engaging introduction, a well-ordered body and a strong conclusion, suit it to audience and purpose, and prepare notes for delivery.",
      estimatedMinutes: 150,
      notes: `## What a speech is

A **speech** is a talk written to be **heard, not read**. Because listeners cannot re-read, a speech must be **clear, well-ordered and engaging**. Its basic shape is like an essay: an **introduction**, three to five **main points**, and a **conclusion**.

## The three parts

**1. Introduction** — it must **engage the audience's attention**, introduce the topic, and set the tone. A **provocative quote, a striking statistic or a question** is an effective way to hook listeners. End the introduction by signalling what the speech will cover.

**2. Body** — it **develops your point of view** with supporting ideas, details and examples in a **logical order**. Common orders: by **time** (chronological), by **importance**, or by **problem then solution**. Use clear **transitions** so listeners can follow.

**3. Conclusion** — it **restates your point of view, sums up the main points**, and leaves the audience with **something to think about** (a call to action, a final thought, a memorable line).

\`\`\`svg Timing a five-minute speech
<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif">
  <rect x="20" y="30" width="50" height="30" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="45" y="49" text-anchor="middle" font-size="10">Intro 1m</text>
  <rect x="70" y="30" width="160" height="30" fill="#f5ecdf" stroke="#b98a5a"/>
  <text x="150" y="49" text-anchor="middle" font-size="10">Body 3m (main points)</text>
  <rect x="230" y="30" width="70" height="30" fill="#e9d9c3" stroke="#8a5833"/>
  <text x="265" y="49" text-anchor="middle" font-size="10">Concl. 1m</text>
  <text x="160" y="20" text-anchor="middle" font-size="11" fill="#6a5a48">A 5-minute plan: 1 + 3 + 1</text>
</svg>
\`\`\`

## Audience and purpose

- Know **who** is listening and **why** you are speaking: to **inform, persuade or entertain**.
- Match vocabulary and examples to the audience.
- Kinds of speech include **informative**, **persuasive**, **entertaining** and **extemporaneous** (spoken from notes).

## Preparing to deliver

- An **extemporaneous** speech is delivered from a **prepared outline or note cards** carrying the main ideas — not read word for word.
- Write for the **ear**: short sentences, plain words, repetition of key ideas.
- **Rehearse** aloud and time yourself so the speech fits the limit.

## Summary

- A speech has an **introduction** (hook + topic), a **body** (main points in logical order), and a **conclusion** (restate + final thought).
- Suit it to the **audience and purpose** (inform, persuade, entertain).
- Prepare an **outline / note cards**, write for the ear, and **rehearse** to time.`,
      workedExample: `**Task.** Outline a three-minute speech persuading students to join the school library.

**Purpose:** persuade. **Audience:** fellow students.

**Introduction (hook + topic):** Open with a question — *"What if the key to passing your exams was sitting on a shelf, free to borrow?"* Then state the topic: the value of joining the library.

**Body (main points, logical order — by importance):**
1. **Free access to books** for study and research.
2. **A quiet place** to work away from distraction.
3. **Help from the librarian** to find the right material.
Use transitions: *First… Second… Finally…*

**Conclusion (restate + something to think about):** *"A library card costs nothing but could change your results. Sign up this week — your future self will thank you."*

**Delivery:** put these points on **note cards** and speak from them (extemporaneous), rehearsing aloud to keep within three minutes.

**Rule applied:** hook the audience, develop main points in order with transitions, and close with a memorable call to action suited to the purpose.`,
      quiz: [
        {
          prompt: "A speech is written mainly to be…",
          options: ["heard", "read silently", "filed away", "printed only"],
          correctIndex: 0,
          explanation: "A speech is meant for listeners, so it must be clear when heard.",
        },
        {
          prompt: "The basic shape of a speech is…",
          options: ["introduction, body, conclusion", "only a conclusion", "a list of names", "questions only"],
          correctIndex: 0,
          explanation: "Like an essay: introduction, main points, conclusion.",
        },
        {
          prompt: "The introduction of a speech should first…",
          options: ["engage the audience's attention", "list references", "give the conclusion", "thank the audience for leaving"],
          correctIndex: 0,
          explanation: "The introduction must grab attention and introduce the topic.",
        },
        {
          prompt: "Which is an effective way to open a speech?",
          options: ["a provocative quote or striking statistic", "a long apology", "reading the whole outline", "silence for a minute"],
          correctIndex: 0,
          explanation: "A quote, statistic or question hooks the listeners.",
        },
        {
          prompt: "The body of a speech develops your point of view with…",
          options: ["supporting ideas, details and examples in logical order", "unrelated jokes", "the bibliography", "the title repeated"],
          correctIndex: 0,
          explanation: "The body presents main points and support in a logical order.",
        },
        {
          prompt: "The conclusion of a speech should…",
          options: ["restate the point, sum up, and leave a final thought", "add a brand-new argument", "list the audience", "start the topic"],
          correctIndex: 0,
          explanation: "It restates the view, sums up, and gives something to think about.",
        },
        {
          prompt: "Three common purposes of a speech are to inform, persuade and…",
          options: ["entertain", "confuse", "bore", "hide"],
          correctIndex: 0,
          explanation: "Speeches inform, persuade or entertain.",
        },
        {
          prompt: "An extemporaneous speech is delivered from…",
          options: ["a prepared outline or note cards", "a full word-for-word script read aloud", "memory with no preparation", "the audience's notes"],
          correctIndex: 0,
          explanation: "Extemporaneous = spoken from an outline/note cards of main ideas.",
        },
        {
          prompt: "Writing 'for the ear' means using…",
          options: ["short sentences and plain words", "very long sentences", "rare technical terms", "no repetition at all"],
          correctIndex: 0,
          explanation: "Listeners follow short, plain sentences and repeated key ideas.",
        },
        {
          prompt: "In a five-minute speech, a good time plan is…",
          options: ["1 minute intro, 3 minutes body, 1 minute conclusion", "4 minutes intro, 1 minute body", "5 minutes conclusion", "no plan"],
          correctIndex: 0,
          explanation: "Roughly 1 + 3 + 1 keeps the body the largest part.",
        },
        {
          prompt: "Transitions in a speech help the audience to…",
          options: ["follow the order of ideas", "fall asleep", "leave early", "forget the topic"],
          correctIndex: 0,
          explanation: "Transitions like 'first, second, finally' guide listeners.",
        },
        {
          prompt: "Before giving a speech you should…",
          options: ["rehearse aloud and time yourself", "never practise", "read it once silently only", "change the topic on stage"],
          correctIndex: 0,
          explanation: "Rehearsing aloud and timing keeps the speech within limits.",
        },
        {
          prompt: "Knowing your audience helps you choose the right…",
          options: ["vocabulary and examples", "font", "paper size", "ink colour"],
          correctIndex: 0,
          explanation: "Match language and examples to who is listening.",
        },
        {
          prompt: "A persuasive speech mainly tries to…",
          options: ["change the audience's opinion or action", "list facts only", "make people laugh", "read a story aloud"],
          correctIndex: 0,
          explanation: "Persuasion aims to move the audience to think or act differently.",
        },
        {
          prompt: "How many main supporting points does a typical speech have?",
          options: ["three to five", "twenty", "none", "one only"],
          correctIndex: 0,
          explanation: "A presentation usually has three to five major points.",
        },
        {
          prompt: "Ordering a speech from the least to the most important point is ordering by…",
          options: ["importance", "colour", "size", "the alphabet"],
          correctIndex: 0,
          explanation: "That is order of importance.",
        },
        {
          prompt: "A good speech conclusion often ends with…",
          options: ["a call to action or memorable line", "a new statistic to research", "a long list of sources", "a question with no point"],
          correctIndex: 0,
          explanation: "Leave the audience with a final, memorable thought or call to action.",
        },
        {
          prompt: "Note cards for an extemporaneous speech should contain…",
          options: ["the main ideas and arguments", "every word to read", "nothing", "the audience list"],
          correctIndex: 0,
          explanation: "Cards carry main ideas so you speak naturally, not read.",
        },
        {
          prompt: "Which order suits a speech that first names a problem then offers a solution?",
          options: ["problem-solution order", "alphabetical order", "random order", "reverse spelling"],
          correctIndex: 0,
          explanation: "Problem-then-solution is a clear logical order.",
        },
        {
          prompt: "A speech that is spoken to amuse the audience is mainly…",
          options: ["entertaining", "informative", "persuasive", "extemporaneous only"],
          correctIndex: 0,
          explanation: "An entertaining speech aims mainly to amuse.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three parts of a speech and state the job of each.",
          answerKey:
            "Introduction — engage attention and introduce the topic; body — develop the main points with support in logical order; conclusion — restate the point, sum up, and leave a final thought. Award a mark per part with its job.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the best way to begin a speech?",
          options: [
            "Open with a striking statistic or question to grab attention.",
            "Apologise for being nervous.",
            "Read out the full list of your sources.",
            "State that the speech will be boring.",
          ],
          correctIndex: 0,
          answerKey: "A striking statistic or question engages the audience from the start.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "What is an extemporaneous speech, and how is it delivered?",
          answerKey:
            "A speech delivered from a prepared outline or note cards carrying the main ideas and arguments, spoken naturally rather than read word for word. Award marks for the definition and the delivery method.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why a speech should be written 'for the ear' and give two features of such writing.",
          answerKey:
            "Because listeners cannot re-read, the speech must be easy to follow on first hearing. Features: short sentences; plain words; repetition of key ideas; clear transitions. Award a mark for the reason and a mark per feature (up to the marks available).",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Outline a short speech on a topic of your choice. State the purpose and audience, then give the introduction (with a hook), the main points of the body in order, and a conclusion. Explain how you would prepare to deliver it.",
          answerKey:
            "Award marks for: a stated purpose and audience; an introduction with an attention-grabbing hook and the topic; three to five main points in a logical order with transitions; a conclusion that restates the point and gives a final thought; and a delivery plan (outline/note cards, rehearse aloud, keep to time). Deduct for a missing part or an illogical order.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Technical Reporting (NWTC), Chapter 7: Formal Reports; and Online Technical Writing (McMurrey), 2.2 Types of technical reports (https://human.libretexts.org/Courses/Northeast_Wisconsin_Technical_College/Technical_Reporting_(NWTC)/Chapter_7:_Formal_Reports)
      slug: "report-writing",
      title: "Report Writing",
      objective:
        "By the end of the topic, learners should be able to explain the purpose of a report, lay it out with an introduction, body and conclusion (plus headings and, for formal reports, front matter), and write a clear, factual report.",
      estimatedMinutes: 150,
      notes: `## What a report is

A **report** is an organised, **factual** account written to give information about an event, investigation or situation so that a reader can understand it or act on it. Unlike a story, a report is **objective** and **structured**, and uses **headings** so a reader can find information quickly.

## Basic structure

Every report has an **introduction, body and conclusion**:

1. **Introduction** — sets out the **background**, the **purpose** (why the report was written), the **scope** (what it covers), and how it is organised.
2. **Body** — the **main text**, divided by **headings** into sections and subsections, each dealing with one topic. It presents the **facts, findings and evidence** in a logical order.
3. **Conclusion** — sums up the findings and, where needed, gives **recommendations**.

**Headings** matter: in all but the shortest reports, headings mark off topics so readers can **skim** and find what they want.

## Extra parts of a formal report

A long, **formal** report adds **front matter** before the main text:

| Part | What it does |
| --- | --- |
| Transmittal letter | a cover note from writer to reader, handing over the report |
| Title page | the report's title, author, date, and who it is for |
| Table of contents | headings and subheadings with page numbers |
| Abstract / executive summary | a short summary of the whole report |

At the end, a formal report may add **references** and **appendices** (extra data).

## Writing a good report

- Be **accurate and objective** — report facts, not opinions or feelings.
- Use **clear headings** and a logical order.
- Keep language **plain and precise**; use lists and tables where they help.
- **Proofread** for accuracy before submitting.

## Summary

- A report is a **factual, structured** account with an **introduction, body and conclusion**.
- **Headings** divide the body so readers can find information.
- A **formal** report adds **front matter** (transmittal letter, title page, table of contents, abstract/executive summary) and may end with references and appendices.`,
      workedExample: `**Task.** Plan a short report to the principal on a school clean-up day.

**Introduction (background, purpose, scope):** "On 20 August 2026 the senior class held a clean-up of the school grounds. This report describes what was done and recommends follow-up action." (says why, what and the scope)

**Body (headings + facts):**
- **Activities:** students cleared litter, cut grass and painted the fence.
- **Participation:** 45 of 50 students took part; three teachers supervised.
- **Materials used:** rakes, brushes and two tins of paint donated by a local shop.

**Conclusion (findings + recommendation):** "The grounds are now clean and tidy. It is recommended that a clean-up be held once each term to keep them so."

**If this were a formal report**, it would add front matter — a **transmittal letter**, a **title page**, a **table of contents**, and an **executive summary** — before the introduction.

**Rule applied:** the report is **objective and structured**, using **headings** and moving from introduction to factual body to conclusion with a recommendation.`,
      quiz: [
        {
          prompt: "A report is written mainly to…",
          options: ["give factual information about something", "tell an imaginative story", "express private feelings", "advertise a product"],
          correctIndex: 0,
          explanation: "A report gives an organised, factual account.",
        },
        {
          prompt: "Compared with a story, a report is…",
          options: ["objective and structured", "purely imaginative", "written in verse", "always secret"],
          correctIndex: 0,
          explanation: "Reports are objective and follow a clear structure.",
        },
        {
          prompt: "The three basic parts of a report are…",
          options: ["introduction, body, conclusion", "title, rhyme, chorus", "greeting, body, signature", "who, what, when"],
          correctIndex: 0,
          explanation: "A report has an introduction, body and conclusion.",
        },
        {
          prompt: "The introduction of a report usually gives the background, scope and…",
          options: ["purpose", "punchline", "moral", "rhyme"],
          correctIndex: 0,
          explanation: "It states why the report was written (its purpose).",
        },
        {
          prompt: "The body of a report is divided by…",
          options: ["headings into sections", "stanzas", "salutations", "call numbers"],
          correctIndex: 0,
          explanation: "Headings mark off topics in the body.",
        },
        {
          prompt: "Headings help a reader to…",
          options: ["skim and find information quickly", "rhyme the report", "hide the facts", "sign the report"],
          correctIndex: 0,
          explanation: "Headings let readers skim and locate what they need.",
        },
        {
          prompt: "The conclusion of a report sums up the findings and may give…",
          options: ["recommendations", "a new story", "the salutation", "a poem"],
          correctIndex: 0,
          explanation: "It summarises and, where needed, recommends action.",
        },
        {
          prompt: "A cover note that hands the report from writer to reader is the…",
          options: ["transmittal letter", "abstract", "appendix", "heading"],
          correctIndex: 0,
          explanation: "The transmittal (cover) letter accompanies a formal report.",
        },
        {
          prompt: "A page listing the headings and their page numbers is the…",
          options: ["table of contents", "title page", "abstract", "reference list"],
          correctIndex: 0,
          explanation: "The table of contents lists headings with page numbers.",
        },
        {
          prompt: "A short summary of the whole report is the…",
          options: ["abstract / executive summary", "appendix", "salutation", "heading"],
          correctIndex: 0,
          explanation: "The abstract or executive summary condenses the report.",
        },
        {
          prompt: "The extra pages placed before the main text of a formal report are called…",
          options: ["front matter", "back matter", "the body", "the margin"],
          correctIndex: 0,
          explanation: "Transmittal letter, title page, contents and abstract are front matter.",
        },
        {
          prompt: "Which belongs at the end of a formal report?",
          options: ["references and appendices", "the salutation", "the hook", "the rhyme scheme"],
          correctIndex: 0,
          explanation: "References and appendices come at the end.",
        },
        {
          prompt: "A good report should be…",
          options: ["accurate and objective", "full of opinions", "written in slang", "as vague as possible"],
          correctIndex: 0,
          explanation: "Report facts accurately and objectively.",
        },
        {
          prompt: "Which is appropriate language for a report?",
          options: ["plain and precise", "poetic and vague", "slangy", "emotional"],
          correctIndex: 0,
          explanation: "Reports use plain, precise language.",
        },
        {
          prompt: "The title page of a formal report shows the title, author, date and…",
          options: ["who it is for", "the weather", "a joke", "the price"],
          correctIndex: 0,
          explanation: "The title page names the report, author, date and recipient.",
        },
        {
          prompt: "Which tool can make report data clearer?",
          options: ["lists and tables", "rhyme", "long unbroken paragraphs", "hidden text"],
          correctIndex: 0,
          explanation: "Lists and tables help present data clearly.",
        },
        {
          prompt: "The body of a report presents…",
          options: ["facts, findings and evidence in logical order", "the writer's dreams", "the reader's address", "a rhyming chorus"],
          correctIndex: 0,
          explanation: "The body sets out the facts and findings logically.",
        },
        {
          prompt: "Why should a report be proofread before submitting?",
          options: ["to ensure accuracy", "to add slang", "to hide the findings", "to make it longer"],
          correctIndex: 0,
          explanation: "Proofreading checks the report is accurate and correct.",
        },
        {
          prompt: "In a very short report you may not need…",
          options: ["front matter like a title page and contents", "any facts", "a conclusion", "clear language"],
          correctIndex: 0,
          explanation: "Short reports often skip the formal front matter.",
        },
        {
          prompt: "A report differs from a personal letter chiefly because it is…",
          options: ["structured with headings and objective", "handwritten", "always short", "addressed to a friend"],
          correctIndex: 0,
          explanation: "Reports are structured, headed and objective.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the three basic parts of a report and state what each contains.",
          answerKey:
            "Introduction — background, purpose and scope; body — the facts/findings divided by headings in logical order; conclusion — summary of findings and any recommendations. Award a mark per part with its content.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which item is part of the front matter of a formal report?",
          options: [
            "Table of contents",
            "The conclusion",
            "The body",
            "A recommendation",
          ],
          correctIndex: 0,
          answerKey: "The table of contents is front matter, placed before the main text.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why headings are important in a report.",
          answerKey:
            "Headings divide the body into topics so readers can skim the report and quickly find the information they want. Award marks for the organisation and the skim/find purpose.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two qualities of good report writing and explain one of them.",
          answerKey:
            "Any two of: accurate/objective (report facts not opinions), clear structure with headings, plain and precise language, well proofread. Explain one, e.g. objectivity means giving facts rather than personal feelings. Award a mark per quality and a mark for the explanation.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how you would organise a report on an event at your school. Explain the introduction, body and conclusion, the use of headings, and (for a formal report) what front matter you would add.",
          answerKey:
            "A strong answer explains: an introduction giving background, purpose and scope; a body divided by clear headings presenting the facts/findings in logical order; a conclusion summarising and recommending; the role of headings for skimming; and, for a formal report, front matter such as a transmittal letter, title page, table of contents and abstract/executive summary. Award marks for the three parts, headings, and front matter.",
          marks: 5,
        },
      ],
    },
    {
      // source: LibreTexts — Online Technical Writing (McMurrey), 2.13 Oral presentations; and Rhetoric and Composition (Wikibooks), 5.5 Oral Presentations (https://human.libretexts.org/Bookshelves/Composition/Technical_Composition/Online_Technical_Writing_(McMurrey)/02:_Applications_of_Technical_Writing/2.13:_Oral_presentations)
      slug: "oral-communication",
      title: "Oral Communication: Reading Aloud, Listening and Presentations",
      objective:
        "By the end of the topic, learners should be able to read aloud and speak clearly, listen actively and critically to speeches, and give and critically evaluate an oral presentation.",
      estimatedMinutes: 150,
      notes: `## Oral reading and speaking

**Oral reading** (reading aloud) and **speaking** share the same skills. To be understood, control your **voice and body**:

- **Volume** — loud enough for the back of the room.
- **Pace** — not too fast; pause at full stops and commas.
- **Clarity** — pronounce words fully; do not mumble.
- **Expression** — vary the tone to match the meaning; stress key words.
- **Eye contact and posture** — look up at the audience; stand straight and still.

When reading a passage aloud, read ahead with your eyes, respect the punctuation, and let phrasing carry the sense.

## Listening to speeches

**Active listening** is a skill, not a passive state. A good listener:

- **Pays attention** — puts distractions aside and focuses on the speaker.
- **Follows the structure** — notes the introduction, main points and conclusion.
- **Takes brief notes** of key ideas.
- **Withholds judgment** until the speaker has finished, then evaluates.

**Critical listening** goes further: weigh the speaker's **argument and evidence**, tell **fact from opinion**, and notice whether the reasoning is sound.

## Oral presentations

An **oral presentation** delivers ideas to a live audience. Prepare and deliver it well:

- **Prepare:** organise the talk (introduction, body, conclusion); make brief **notes or cards**; rehearse and time it.
- **Deliver:** speak clearly and at a good pace; make **eye contact**; use **gestures** naturally; use any visual aids to support, not replace, your words.
- **Manage nerves:** breathe, slow down, and focus on the message.

## Critical evaluation of a presentation

To **evaluate** a speech or presentation (your own or a classmate's), judge it against clear **criteria** and give reasons:

| Criterion | Question to ask |
| --- | --- |
| Content | Was the message clear, accurate and well-supported? |
| Organisation | Did it have a clear introduction, body and conclusion? |
| Delivery | Was the voice clear, the pace right, the eye contact good? |
| Engagement | Did it hold the audience's attention? |

Give **balanced** feedback: name a **strength**, then a point to **improve**, with a reason for each.

## Summary

- **Read aloud / speak** with good volume, pace, clarity, expression and eye contact.
- **Listen actively and critically:** attend, follow the structure, note key ideas, weigh evidence.
- **Present** from notes with clear delivery; **evaluate** presentations against criteria (content, organisation, delivery, engagement) with balanced, reasoned feedback.`,
      workedExample: `**Task.** A student gives a two-minute presentation; a classmate must evaluate it critically.

**During the talk (active listening):** the listener puts away distractions, notes the **introduction** (a question hook), the **three main points**, and the **conclusion**, and jots key ideas — without interrupting.

**After the talk (critical evaluation against criteria):**

- **Content:** "Your message — why we should recycle — was clear and you gave two solid facts." (strength, with reason)
- **Organisation:** "The introduction, three points and conclusion were easy to follow." (strength)
- **Delivery:** "Your voice was clear, but you spoke a little fast in the middle; slowing down there would help the audience." (point to improve, with reason)
- **Engagement:** "The opening question caught our attention."

**Balanced feedback given:** a genuine **strength** (clear, well-organised message) and a specific point to **improve** (pace), each with a **reason**.

**Rule applied:** listen actively, then evaluate against clear criteria — content, organisation, delivery, engagement — with balanced, reasoned feedback.`,
      quiz: [
        {
          prompt: "When reading aloud, your volume should be…",
          options: ["loud enough for the back of the room", "as quiet as possible", "a whisper", "shouting throughout"],
          correctIndex: 0,
          explanation: "Everyone, including those at the back, must hear you.",
        },
        {
          prompt: "A good speaker's pace is…",
          options: ["steady, with pauses at punctuation", "as fast as possible", "so slow it drags", "random"],
          correctIndex: 0,
          explanation: "Speak at a steady pace and pause at full stops and commas.",
        },
        {
          prompt: "Clarity in speaking means…",
          options: ["pronouncing words fully, not mumbling", "using big words only", "speaking very fast", "looking down"],
          correctIndex: 0,
          explanation: "Pronounce words clearly so you are understood.",
        },
        {
          prompt: "Varying your tone to match the meaning is called…",
          options: ["expression", "volume", "posture", "pace"],
          correctIndex: 0,
          explanation: "Expression varies tone and stresses key words.",
        },
        {
          prompt: "Good eye contact with the audience means you should…",
          options: ["look up at the listeners", "stare at the floor", "read every word without looking up", "close your eyes"],
          correctIndex: 0,
          explanation: "Look up and connect with the audience.",
        },
        {
          prompt: "When reading a passage aloud, you should respect the…",
          options: ["punctuation", "page number", "font", "margins"],
          correctIndex: 0,
          explanation: "Punctuation guides your phrasing and pauses.",
        },
        {
          prompt: "Active listening means…",
          options: ["focusing and following the speaker", "daydreaming", "talking over the speaker", "leaving the room"],
          correctIndex: 0,
          explanation: "Active listeners pay attention and follow the message.",
        },
        {
          prompt: "A good listener follows a speech's…",
          options: ["introduction, main points and conclusion", "handwriting", "page count", "font"],
          correctIndex: 0,
          explanation: "Note the structure to follow the argument.",
        },
        {
          prompt: "A good listener takes…",
          options: ["brief notes of key ideas", "no notes ever", "full transcripts", "photos only"],
          correctIndex: 0,
          explanation: "Jot brief notes of the key ideas.",
        },
        {
          prompt: "Critical listening involves…",
          options: ["weighing the argument and evidence", "accepting everything at once", "ignoring the speaker", "counting words"],
          correctIndex: 0,
          explanation: "Critical listeners judge the reasoning and evidence.",
        },
        {
          prompt: "Telling fact from opinion is part of…",
          options: ["critical listening", "shouting", "reading silently", "note passing"],
          correctIndex: 0,
          explanation: "Critical listening distinguishes fact from opinion.",
        },
        {
          prompt: "To prepare an oral presentation you should…",
          options: ["organise it and make brief notes, then rehearse", "never practise", "memorise nothing", "read it silently once"],
          correctIndex: 0,
          explanation: "Organise, note key points, and rehearse to time.",
        },
        {
          prompt: "Visual aids in a presentation should…",
          options: ["support your words, not replace them", "replace the speaker", "be unreadable", "have no purpose"],
          correctIndex: 0,
          explanation: "Visuals support the message; they do not do the speaking.",
        },
        {
          prompt: "A good way to manage nerves before presenting is to…",
          options: ["breathe, slow down and focus on the message", "speak faster and faster", "avoid the audience", "give up"],
          correctIndex: 0,
          explanation: "Breathing and slowing down help control nerves.",
        },
        {
          prompt: "Which is a criterion for evaluating a presentation?",
          options: ["organisation", "the speaker's shoe size", "the room's paint", "the time of year"],
          correctIndex: 0,
          explanation: "Organisation (clear intro, body, conclusion) is a real criterion.",
        },
        {
          prompt: "Evaluating 'delivery' means judging the speaker's…",
          options: ["voice, pace and eye contact", "handwriting", "spelling", "address"],
          correctIndex: 0,
          explanation: "Delivery covers voice, pace, clarity and eye contact.",
        },
        {
          prompt: "Good feedback on a presentation should be…",
          options: ["balanced: a strength and a point to improve, each with a reason", "only negative", "only praise", "silent"],
          correctIndex: 0,
          explanation: "Balanced feedback names a strength and an area to improve, with reasons.",
        },
        {
          prompt: "Judging whether a presentation held the audience's attention assesses its…",
          options: ["engagement", "margins", "font", "length only"],
          correctIndex: 0,
          explanation: "Engagement is whether it held attention.",
        },
        {
          prompt: "When should a listener form a full judgment of a speech?",
          options: ["after the speaker has finished", "before it starts", "during the introduction only", "never"],
          correctIndex: 0,
          explanation: "Withhold judgment until the speaker has finished, then evaluate.",
        },
        {
          prompt: "Natural gestures during a presentation help to…",
          options: ["support and emphasise your message", "distract the audience", "replace your words", "hide your face"],
          correctIndex: 0,
          explanation: "Used naturally, gestures reinforce the message.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "List four things a speaker should control to read aloud or speak clearly.",
          answerKey:
            "Any four of: volume, pace, clarity/pronunciation, expression/tone, eye contact, posture. Award a mark per correct item (up to the marks available).",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which best describes active listening?",
          options: [
            "Focusing on the speaker, following the structure, and noting key ideas",
            "Thinking about something else while the speaker talks",
            "Interrupting to give your own opinion",
            "Leaving once the speaker begins",
          ],
          correctIndex: 0,
          answerKey: "Active listening means focusing, following the structure and noting key ideas.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two criteria you would use to evaluate a classmate's presentation and give a question for each.",
          answerKey:
            "Any two of: content (Was the message clear and supported?); organisation (Was there a clear intro, body, conclusion?); delivery (Was the voice clear and the pace right?); engagement (Did it hold attention?). Award a mark per criterion with a suitable question.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between simply hearing a speech and listening critically to it.",
          answerKey:
            "Hearing is passive (sound reaches the ear); critical listening is active — focusing, following the structure, weighing the argument and evidence, and telling fact from opinion before judging. Award marks for the passive/active contrast and the critical element.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how you would deliver an effective oral presentation and how you would critically evaluate a classmate's presentation. Refer to delivery skills and clear evaluation criteria, and explain what balanced feedback looks like.",
          answerKey:
            "A strong answer covers delivery — prepare and organise, use brief notes, rehearse, speak clearly at a good pace with eye contact and natural gestures, use visuals to support — and evaluation — listen actively, judge against criteria (content, organisation, delivery, engagement), and give balanced feedback naming a strength and a point to improve, each with a reason. Award marks for delivery skills, criteria, and the balanced-feedback point.",
          marks: 5,
        },
      ],
    },
  ],
};
