import type { SubjectContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History (Grades 10-12).
// Grade 10, Semester One, Period I: Introduction to African History (nature and
// purpose, the myth of African history, sources; the role of North Africa,
// Egypt, and the kingdom of Kush/Meroe and Napata). African empires (P4),
// Liberian history (P3) and the slave trade (P6) follow in later periods.
export const history: SubjectContent = {
  slug: "history",
  name: "History",
  shortName: "History",
  description:
    "Introduction to African history: its nature, purpose and sources, and the early civilisations of North Africa — Egypt and the kingdom of Kush.",
  accent: "orange",
  sortOrder: 7,
  teacherCode: "HIS-10-1847",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Introduction to African History",
      summary:
        "Period I of the MoE Grade 10 History syllabus. Learners examine the nature, purpose and sources of history, disprove the myth that Africa has no history, and study the early civilisations of North Africa — the place of Egypt and the kingdom of Kush, Meroe and Napata.",
      topics: [
        {
          slug: "nature-and-sources-of-history",
          title: "The Nature, Purpose and Sources of History",
          objective:
            "By the end of the unit, learners should be able to define history, explain its purpose, disprove the myth that Africa has no history, and identify and evaluate the sources historians use.",
          estimatedMinutes: 160,
          notes: `## Introduction

- The present grows out of the past — today's countries, customs and conflicts were shaped by what came before.
- The past cannot be observed directly; it is **reconstructed** from surviving clues.
- **This lesson:** what history is; why we study it; the written, oral and material **sources** historians use, and their strengths and weaknesses.

## What history is

- **History** — the systematic study of past human events, based on evidence, and the interpretation of those events to understand how the present came to be.
- Not merely a record of what happened — an **argument about the past supported by evidence**.
- Two historians may read the same evidence and reach different, equally reasonable conclusions.

## The purpose of history

- To understand how present conditions arose
- To learn from the successes and failures of earlier generations
- To build national identity and a shared sense of the past
- To preserve cultural heritage
- To train the mind in weighing evidence and building an argument

## The myth of African history

- Some European writers claimed **"Africa has no history"** — that nothing worth studying happened before Europeans arrived.
- The claim is **false**; disproving it is one purpose of studying African history.

The myth arose because:
- Much African history was preserved **orally**, not in European-style written records, so outsiders wrongly assumed there was nothing to record.
- Prejudice led some writers to dismiss African achievements.

- Evidence against the myth: ancient **Egypt** and the kingdom of **Kush**; the empires of **Ghana, Mali and Songhai**; the **Swahili** city-states; Great Zimbabwe; systems of government, trade, art, iron-working and learning.
- Africa has a long, rich history; the myth reflects the ignorance and prejudice of those who spread it, not the African past.

## Sources of history

Historians reconstruct the past from **sources**, which fall into groups.

**Written sources** — documents produced in or about the period: chronicles, letters, treaties, inscriptions, travellers' accounts (such as those of Arab writers who described the West African empires), and government records.

**Oral sources (oral tradition)** — history transmitted by word of mouth: the accounts of griots and elders, praise songs, genealogies, proverbs and legends. In much of Africa, where written records were few, oral tradition is a **major** source.

**Archaeological sources** — physical remains dug from the ground: tools, pottery, coins, buildings, ornaments, bones. Archaeology can reveal how people lived, traded and worked long before written records.

**Other sources** — linguistics (the study of languages and how they are related), anthropology (the study of cultures), art and paintings, and, for recent history, photographs, films and sound recordings.

## Evaluating sources

- No source is accepted uncritically.
- Historians ask: **who** produced it, **when**, **why**, and **whether other evidence agrees** (corroboration).
- A **biased** source — written from one point of view — is still useful: it reliably reveals its author's beliefs and aims, even where unreliable about events.

## Oral tradition: strengths and limits

- *Strengths:* preserves the past of societies with few written records; conveys values and perspective from within a community; often the only evidence for the pre-literate period.
- *Limits:* details may change with retelling; chronology can be imprecise; accounts may be shaped to favour a ruling lineage. The sound approach is to **corroborate** oral tradition against archaeology, linguistics and any written record.

## Common errors and misconceptions

- **Thinking history is only names and dates to memorise** — history is the *interpretation* of the past from evidence; two historians can read the same sources differently.
- **Believing societies without writing have no history** — they do; their past is recovered from **oral tradition**, **archaeology** and **language**, which is why African history is not "unrecorded."
- **Treating every source as fully reliable** — all sources have **bias and limits**; historians **cross-check** (corroborate) them against one another.
- **Confusing primary and secondary sources** — a **primary** source comes from the time studied (a letter, a tool, an eyewitness); a **secondary** source is a later account written about it (a textbook).`,
          workedExample: `**Question:** A visitor claims that "Africa had no history before Europeans came, because Africans kept no written records." Using what you know about the nature and sources of history, explain why this claim is wrong.

**Solution**

*Step 1 — separate the two ideas in the claim.*
The visitor makes two linked claims: (a) that Africa had no history, and (b) that this is *because* Africans kept no written records. Both are mistaken.

*Step 2 — history does not depend only on written records.*
History is the study of the human past from **evidence**, and written documents are only **one** kind of source. Historians also use **oral tradition** (the accounts of griots and elders, praise songs, genealogies), **archaeology** (tools, pottery, buildings, coins), **linguistics** and **art**. A society that kept its history orally, or that left physical remains, has a history that can be recovered — the absence of European-style documents does not mean the absence of a past.

*Step 3 — Africa in fact has abundant history.*
The evidence is overwhelming: ancient **Egypt** and the kingdom of **Kush**; the empires of **Ghana, Mali and Songhai** with their cities, trade and learning (Timbuktu was a centre of scholarship); the **Swahili** city-states; Great Zimbabwe; long traditions of iron-working, government and art. Much of this *was* recorded, including by Arab travellers, and much survives in oral tradition and in the ground.

*Step 4 — explain where the myth came from.*
The myth arose partly because much African history was preserved **orally** rather than in writing, so outsiders wrongly assumed there was nothing to record, and partly from **prejudice**. It reflects the ignorance of those who spread it, not the African past.

**Conclusion:** the claim is wrong on both counts — history is not confined to written records, and Africa has a long, rich and well-evidenced history recoverable through oral tradition, archaeology and written sources alike.`,
          teachingTip:
            "Open by asking the class, directly, whether Africa had a history before Europeans came — and let the weak or hesitant answers surface the very myth the syllabus asks you to disprove. Then dismantle it with evidence the class can name themselves: Egypt, the West African empires, Timbuktu, oral tradition, things in the ground. The point that history rests on many kinds of source, not only writing, is best taught with a local object — an old tool, a photograph, a song, an elder's account — and asking what each can tell us about the past. Invite an elder to speak if you can; nothing conveys the value and the limits of oral tradition as well as hearing it and then asking how one might check it.",
          quiz: [
            { prompt: "History is best defined as", options: ["a list of dates", "the evidence-based study and interpretation of the human past", "stories with no basis", "the study of the future"], correctIndex: 1, explanation: "History studies the past from evidence and interprets it." },
            { prompt: "The claim that 'Africa has no history' is", options: ["true", "false", "partly true", "impossible to judge"], correctIndex: 1, explanation: "Africa has a long, well-evidenced history; the myth reflects prejudice and ignorance." },
            { prompt: "Which is an example of an oral source?", options: ["A treaty", "A griot's account", "A pottery fragment", "A coin"], correctIndex: 1, explanation: "Oral tradition is transmitted by word of mouth, e.g. by griots." },
            { prompt: "Tools, pottery and buildings dug from the ground are", options: ["written sources", "oral sources", "archaeological sources", "myths"], correctIndex: 2, explanation: "Archaeology studies physical remains." },
            { prompt: "One reason the myth of 'no African history' arose is that", options: ["Africa is small", "much African history was preserved orally, not in writing", "Africans had no culture", "there were no people in Africa"], correctIndex: 1, explanation: "Outsiders wrongly assumed no written records meant no history." },
            { prompt: "Which is a written source of history?", options: ["A praise song", "A traveller's chronicle", "A stone tool", "A genealogy recited aloud"], correctIndex: 1, explanation: "Chronicles and travellers' accounts are written documents." },
            { prompt: "In much of Africa, oral tradition is important because", options: ["it is always exact", "many societies kept few written records", "it needs no interpretation", "it replaces archaeology"], correctIndex: 1, explanation: "Where writing was limited, knowledge passed by speech." },
            { prompt: "A purpose of studying history is to", options: ["predict the lottery", "understand how present conditions arose", "avoid the past", "memorise names only"], correctIndex: 1, explanation: "History helps explain the present from the past." },
            { prompt: "A biased source is one that", options: ["is completely useless", "presents matters from one point of view", "contains no facts", "is always written"], correctIndex: 1, explanation: "Bias must be allowed for, but the source still reveals its author's viewpoint." },
            { prompt: "Corroboration means", options: ["rejecting oral evidence", "checking a claim against other independent evidence", "copying the oldest source", "ignoring bias"], correctIndex: 1, explanation: "Independent agreement between sources strengthens a claim." },
            { prompt: "Which African centre was famous for scholarship and learning?", options: ["Timbuktu", "Cape Town", "Nairobi", "Lagos"], correctIndex: 0, explanation: "Timbuktu in the Mali/Songhai region was a renowned centre of learning." },
            { prompt: "The study of languages and how they are related, used as a source, is", options: ["archaeology", "linguistics", "anthropology", "chronology"], correctIndex: 1, explanation: "Linguistics can reveal migrations and relationships between peoples." },
            { prompt: "A limitation of oral tradition is that", options: ["it cannot be recorded", "details may change with retelling and chronology can be imprecise", "it is never about real events", "it is always written down"], correctIndex: 1, explanation: "Transmission across generations can blur dates and detail." },
            { prompt: "Which of these disproves the myth that Africa has no history?", options: ["The empires of Ghana, Mali and Songhai", "The absence of any records", "The lack of trade", "The absence of cities"], correctIndex: 0, explanation: "These powerful, well-documented empires are clear evidence of African history." },
            { prompt: "A griot is best described as", options: ["a type of building", "a keeper and reciter of oral history", "a written chronicle", "an archaeologist"], correctIndex: 1, explanation: "Griots preserve genealogies, praise songs and history orally." },
            { prompt: "History is described as an argument about the past because", options: ["historians always agree", "different historians may interpret the same evidence differently", "there is no evidence", "the past is invented"], correctIndex: 1, explanation: "Interpretation, supported by evidence, is central to history." },
            { prompt: "Which is NOT a source of history?", options: ["Oral tradition", "Archaeology", "Written documents", "Pure guesswork"], correctIndex: 3, explanation: "History rests on evidence, not guesswork." },
            { prompt: "Arab travellers' accounts of the West African empires are", options: ["oral sources", "written sources", "archaeological sources", "not sources at all"], correctIndex: 1, explanation: "They are written documents describing the period." },
            { prompt: "The sound way to use oral tradition is to", options: ["accept it without question", "reject it entirely", "corroborate it against other evidence", "translate it only"], correctIndex: 2, explanation: "Checking it against archaeology and written records strengthens reliability." },
            { prompt: "Studying history helps build", options: ["national identity and a shared sense of the past", "nothing useful", "only exam grades", "distrust of evidence"], correctIndex: 0, explanation: "A shared understanding of the past supports national identity." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Define history and state three of its purposes.", answerKey: "History is the evidence-based study and interpretation of the human past, showing how the present came to be. Purposes: to understand how present conditions arose; to learn from earlier generations; to build national identity and preserve heritage; to train the mind in weighing evidence. Award 3 marks for the definition and 2 for each of three purposes.", marks: 9 },
            { type: "SHORT_ANSWER", prompt: "Identify four sources of history and give an example of each.", answerKey: "Written sources — chronicles, treaties, travellers' accounts. Oral sources — griots' accounts, praise songs, genealogies. Archaeological sources — tools, pottery, coins, buildings. Other — linguistics, art, photographs. Award 1 mark per source named and 1 per example.", marks: 8 },
            { type: "MULTIPLE_CHOICE", prompt: "A partial account written by the winning side of a conflict is best described as", options: ["worthless because biased", "a source whose bias must be allowed for", "not a source", "an oral tradition"], correctIndex: 1, answerKey: "It is a source that reveals the victor's aims and beliefs; the historian identifies the bias and reads it critically. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State three strengths and two limitations of oral tradition as a source of history.", answerKey: "Strengths: preserves the past of societies with few written records; conveys values and perspective from within the community; often the only evidence for the pre-literate period; may preserve genealogies of great antiquity. Limitations: details may change with retelling; chronology is often imprecise; accounts may favour a ruling lineage. Award 2 marks per strength (three) and 2 per limitation (two), to the total.", marks: 10 },
            { type: "ESSAY", prompt: "'Africa has no history.' Discuss and disprove this statement, referring to the nature and sources of history and to evidence of Africa's past.", answerKey: "Award marks for: a clear rejection of the statement, 3 marks; the argument that history rests on many kinds of evidence — oral, archaeological, written, linguistic — not only European-style documents, 6 marks; explanation of how the myth arose (oral preservation misread as absence, plus prejudice), 5 marks; concrete evidence of Africa's history — Egypt, Kush, the empires of Ghana/Mali/Songhai, Timbuktu's scholarship, the Swahili city-states, Great Zimbabwe, iron-working and government, 8 marks; a conclusion tying the evidence to the disproof, 3 marks. A learner who merely asserts the statement is wrong without evidence should not exceed 8.", marks: 20 },
          ],
        },
        {
          slug: "north-africa-egypt-and-kush",
          title: "North Africa: Egypt and the Kingdom of Kush",
          objective:
            "By the end of the unit, learners should be able to describe the role of North Africa in African history, explain the place of Egypt, and trace the rise of the kingdom of Kush, its conquest of Egypt, and the significance of Meroe and Napata.",
          estimatedMinutes: 160,
          notes: `## Introduction

- Some of the world's first great civilisations arose in **Africa**, along the valley of the **River Nile**.
- **Egypt** built pyramids and a writing system thousands of years ago; to its south the African kingdom of **Kush** grew strong enough to conquer Egypt itself.
- **This lesson:** the role of North Africa; the achievement of ancient **Egypt**; the rise of **Kush**, its cities of **Napata** and **Meroe**, and its conquest of Egypt.

## The role of North Africa

- **North Africa** — the lands along the Mediterranean and the Nile — one of the world's **earliest centres of civilisation**.
- Its position linked Africa to the Mediterranean world and to the trade of the Nile valley.
- Setting for **ancient Egypt**, one of the oldest and most influential civilisations in human history.
- Saw waves of **inhabitants and invaders** — Egyptians, Kushites, Assyrians, Persians, Greeks, Romans and later Arabs — each leaving their mark.

## The place of Egypt

**Ancient Egypt** grew up along the **River Nile**, whose annual flood watered the land and made farming possible in the desert. Egypt is important in African history because:

- It was among the **earliest civilisations**, with cities, writing (hieroglyphics), mathematics, medicine and monumental building (the pyramids).
- It shows that a great, complex civilisation arose **in Africa**, which is powerful evidence against the myth that Africa has no history.
- It traded and interacted with lands to the south, especially **Nubia/Kush**, exchanging gold, ivory, ebony and other goods.

## The kingdom of Kush

To the **south of Egypt**, along the Nile in what is now Sudan, lay the kingdom of **Kush** (also spelled Cush), in the region called **Nubia**.

- Kush was rich in **gold, iron and trade**. Its city of **Meroe** became a famous centre of **iron-working** — sometimes called the "Birmingham of Africa" for its ironworks.
- Kush had its own kings, its own writing (Meroitic script), pyramids of its own, and a strong army.

## Kush conquers Egypt

- Early on, Kush was influenced by Egypt; later the relationship reversed.
- **8th century BC** — the kings of Kush **conquered Egypt** and ruled it as the **25th Dynasty** (the "Black Pharaohs") for about a century, until pushed back by an **Assyrian** invasion.
- Striking fact: an African kingdom south of Egypt grew strong enough to **rule Egypt itself**.

## Napata and Meroe

The kingdom of Kush had two great successive centres:

- **Napata** — the earlier capital, close to Egypt, from which the Kushite kings ruled Egypt.
- **Meroe** — the later capital, further south, which flourished after Kush withdrew from Egypt. Meroe developed a distinct culture, its own Meroitic writing, and a major **iron industry**, and it traded across a wide region for centuries before its decline.

## Why this matters

- Africa was home to **ancient, literate, wealthy and powerful states** thousands of years ago — building monuments, working iron, developing writing.
- An African kingdom (Kush) conquered and ruled Egypt itself.
- Among the clearest answers to the myth that Africa has no history.

## Common errors and misconceptions

- **Thinking Egypt was not part of Africa** — ancient Egypt was an **African** civilisation on the Nile, connected to the lands to its south.
- **Believing Kush merely copied Egypt** — Kush borrowed some ideas but developed its **own** writing (Meroitic), its own culture, and a major **iron industry**, and it even **conquered** Egypt.
- **Confusing Napata and Meroe** — **Napata** was the earlier capital; **Meroe** the later, southern capital famous for iron working.
- **Assuming great early civilisations were only European or Asian** — the Nile valley shows Africa among the *earliest* homes of cities, writing and government.`,
          workedExample: `**Question:** Explain the relationship between Egypt and the kingdom of Kush, and why the history of Kush is significant for understanding the African past.

**Solution**

*Step 1 — establish where and what Kush was.*
Kush (or Cush) lay along the Nile **south of Egypt**, in the region of **Nubia** (modern Sudan). It was a wealthy kingdom, rich in **gold, iron and trade**, with its own kings, writing and pyramids.

*Step 2 — describe the early relationship.*
For much of its early history Kush was strongly **influenced by Egypt** to its north — the two traded (gold, ivory, ebony flowing north; Egyptian goods and ideas flowing south), and Egyptian culture shaped Kushite religion, building and kingship.

*Step 3 — describe how the relationship reversed.*
The balance later reversed dramatically. Around the **8th century BC** the kings of Kush grew powerful enough to **conquer Egypt** and rule it as the **25th Dynasty** — the "Black Pharaohs" — for roughly a century, until an **Assyrian** invasion drove them back south. An African kingdom had come to rule Egypt itself.

*Step 4 — the later flowering at Meroe.*
After withdrawing from Egypt, Kush flourished from its southern capital **Meroe**, which became a great centre of **iron-working** and developed its own **Meroitic script** and distinct culture, trading widely for centuries.

*Step 5 — why this is significant.*
The history of Kush matters because it shows that Africa was home to **ancient, wealthy, literate and militarily powerful states** — states that not only rivalled but for a time **ruled** one of the greatest civilisations of the ancient world. It is direct, concrete evidence against the myth that Africa has no history, and it demonstrates African achievement in government, trade, writing and technology (especially iron).

**Conclusion:** Egypt and Kush were neighbours whose relationship ran both ways — Egyptian influence south, then Kushite rule north — and Kush's wealth, iron industry, writing and conquest of Egypt make it a powerful example of Africa's deep and accomplished history.`,
          teachingTip:
            "Kush is one of the most useful topics in the whole course for disproving the 'no African history' myth, so give the single most striking fact its full weight: an African kingdom to the south of Egypt grew strong enough to conquer and rule Egypt as the 25th Dynasty. Learners remember that. Anchor the geography on a simple sketch of the Nile running north, with Egypt downstream and Kush/Nubia upstream, so 'south of Egypt' and the flow of trade make sense. Bring out Meroe's iron industry as evidence of African technology, and connect it to the wider theme by asking, at the end, how the story of Kush answers someone who claims Africa had no history. Keep the two centres straight — Napata earlier and nearer Egypt, Meroe later and further south.",
          quiz: [
            { prompt: "Ancient Egypt grew up along the", options: ["River Niger", "River Nile", "River Congo", "River Zambezi"], correctIndex: 1, explanation: "The Nile's annual flood made farming possible in the desert." },
            { prompt: "The kingdom of Kush lay to the ___ of Egypt.", options: ["north", "south", "east across the sea", "west in the desert"], correctIndex: 1, explanation: "Kush lay south of Egypt along the Nile, in Nubia." },
            { prompt: "The city of Meroe was famous for", options: ["shipbuilding", "iron-working", "glass-making", "silk"], correctIndex: 1, explanation: "Meroe was a major centre of iron production." },
            { prompt: "The Kushite kings who ruled Egypt are known as the", options: ["18th Dynasty", "25th Dynasty (Black Pharaohs)", "Ptolemies", "Caliphs"], correctIndex: 1, explanation: "Kush ruled Egypt as the 25th Dynasty, the 'Black Pharaohs'." },
            { prompt: "Kush was rich in", options: ["gold, iron and trade", "coal and oil", "silk and tea", "diamonds only"], correctIndex: 0, explanation: "Its wealth came from gold, iron and long-distance trade." },
            { prompt: "The Kushite rule of Egypt was ended by an invasion of the", options: ["Romans", "Assyrians", "Portuguese", "British"], correctIndex: 1, explanation: "An Assyrian invasion drove the Kushites back south." },
            { prompt: "The earlier capital of Kush, near Egypt, was", options: ["Meroe", "Napata", "Thebes", "Timbuktu"], correctIndex: 1, explanation: "Napata was the earlier capital, from which Kush ruled Egypt." },
            { prompt: "The later, southern capital where Kush flourished was", options: ["Napata", "Meroe", "Cairo", "Axum"], correctIndex: 1, explanation: "Meroe flourished after Kush withdrew from Egypt." },
            { prompt: "The region around Kush is also called", options: ["Nubia", "Nigeria", "Nairobi", "Numidia"], correctIndex: 0, explanation: "Kush lay in the region of Nubia, in modern Sudan." },
            { prompt: "Why is Egypt important evidence for African history?", options: ["It was outside Africa", "It shows a great, early civilisation arose in Africa", "It had no writing", "It never traded"], correctIndex: 1, explanation: "Egypt is one of the earliest civilisations and it arose in Africa." },
            { prompt: "The Kushites developed their own writing called", options: ["Latin", "Meroitic script", "Arabic", "Greek"], correctIndex: 1, explanation: "Meroe used the Meroitic script." },
            { prompt: "Egyptian writing was known as", options: ["cuneiform", "hieroglyphics", "Meroitic", "runes"], correctIndex: 1, explanation: "The Egyptians wrote in hieroglyphics." },
            { prompt: "Goods traded from Kush/Nubia north to Egypt included", options: ["gold, ivory and ebony", "coal and steel", "wool and wheat only", "printed books"], correctIndex: 0, explanation: "Gold, ivory and ebony flowed north to Egypt." },
            { prompt: "Meroe is sometimes nicknamed the ___ of Africa for its ironworks.", options: ["Rome", "Birmingham", "Paris", "Cairo"], correctIndex: 1, explanation: "Its iron industry earned it the nickname the 'Birmingham of Africa'." },
            { prompt: "North Africa was significant because it", options: ["had no people", "was one of the earliest centres of civilisation", "was cut off from the world", "had no trade routes"], correctIndex: 1, explanation: "It hosted ancient Egypt and linked Africa to the Mediterranean." },
            { prompt: "The most striking fact about Kush's relationship with Egypt is that Kush", options: ["was destroyed by Egypt at once", "conquered and ruled Egypt for a time", "never met Egypt", "was part of Europe"], correctIndex: 1, explanation: "Kush ruled Egypt as the 25th Dynasty." },
            { prompt: "The annual flood of the Nile was important because it", options: ["destroyed all farming", "watered the land and made farming possible", "froze the river", "had no effect"], correctIndex: 1, explanation: "The flood deposited fertile silt and enabled agriculture." },
            { prompt: "Which sequence is correct for the capitals of Kush?", options: ["Meroe then Napata", "Napata then Meroe", "Cairo then Meroe", "Thebes then Napata"], correctIndex: 1, explanation: "Napata was earlier and nearer Egypt; Meroe came later and further south." },
            { prompt: "The story of Kush helps to", options: ["prove Africa had no history", "disprove the myth that Africa has no history", "show Egypt was in Europe", "explain nothing"], correctIndex: 1, explanation: "A powerful, literate African kingdom that ruled Egypt refutes the myth." },
            { prompt: "Ancient Egypt is credited with early developments in", options: ["writing, mathematics and monumental building", "electricity", "the internet", "steam engines"], correctIndex: 0, explanation: "Egypt developed hieroglyphics, mathematics, medicine and the pyramids." },
          ],
          test: [
            { type: "SHORT_ANSWER", prompt: "Explain the importance of the River Nile to ancient Egypt.", answerKey: "The Nile's annual flood watered the land and deposited fertile silt, making farming possible in an otherwise desert region; it also provided water, transport and a route for trade. Without the Nile the civilisation of Egypt could not have developed. Award up to 6 marks for a clear explanation covering farming, water/transport and trade.", marks: 6 },
            { type: "SHORT_ANSWER", prompt: "Describe the kingdom of Kush under three headings: location, wealth, and achievements.", answerKey: "Location — south of Egypt along the Nile, in Nubia (modern Sudan). Wealth — rich in gold, iron and long-distance trade. Achievements — its own kings, the Meroitic script, pyramids, a strong army, a major iron industry at Meroe, and for a time the conquest and rule of Egypt as the 25th Dynasty. Award 3 marks per heading treated accurately.", marks: 9 },
            { type: "MULTIPLE_CHOICE", prompt: "Which best describes the relationship between Egypt and Kush over time?", options: ["Kush always ruled Egypt", "Egypt influenced Kush early, then Kush conquered and ruled Egypt", "They never had contact", "Egypt was part of Kush from the start"], correctIndex: 1, answerKey: "Egyptian influence flowed south early on; later Kush grew strong enough to rule Egypt as the 25th Dynasty. Option B.", marks: 4 },
            { type: "SHORT_ANSWER", prompt: "State two reasons why the history of Egypt and Kush is significant evidence against the myth that Africa has no history.", answerKey: "1. Egypt was one of the earliest and greatest civilisations in the world and it arose in Africa, with writing, mathematics and monumental building. 2. Kush was a wealthy, literate, militarily powerful African kingdom that developed its own writing and iron industry and for a time conquered and ruled Egypt itself. Both show ancient, accomplished African states. Award up to 4 marks per reason developed with evidence.", marks: 8 },
            { type: "ESSAY", prompt: "Trace the rise of the kingdom of Kush and its relationship with Egypt, and assess its significance in African history.", answerKey: "Award marks for: location and character of Kush — south of Egypt in Nubia, rich in gold, iron and trade, with its own kings and writing, 6 marks; the early relationship in which Egypt influenced Kush through trade and culture, 4 marks; the reversal in which Kush conquered Egypt and ruled it as the 25th Dynasty (the 'Black Pharaohs') until the Assyrian invasion, 7 marks; the later flowering at Meroe with its iron industry and Meroitic script, 5 marks; an assessment of significance — Kush as evidence of ancient African achievement in government, trade, writing and technology, and as a refutation of the myth that Africa has no history, 6 marks; organisation and use of evidence, 2 marks. A learner who narrates without assessing significance should not exceed 18.", marks: 30 },
          ],
        },
      ],
    },
  ],
};
