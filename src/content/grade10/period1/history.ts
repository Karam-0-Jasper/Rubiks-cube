import type { SubjectContent } from "@/content/types";

export const history: SubjectContent = {
  slug: "history",
  name: "History",
  shortName: "History",
  description:
    "Historical method and sources, the peopling of Liberia, the settlement period, and independence.",
  accent: "orange",
  sortOrder: 7,
  teacherCode: "HIS-10-1847",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Foundations of Liberian History",
      summary:
        "Learners learn how historians work with evidence, trace the peopling of the territory that became Liberia, follow the settlement period from 1822, and examine the declaration of independence and the early Republic.",
      topics: [
        {
          slug: "introduction-to-history",
          title: "Introduction to History and Historical Sources",
          objective:
            "By the end of the lesson, learners should be able to define history, distinguish primary from secondary sources, and evaluate a historical source for reliability and bias.",
          estimatedMinutes: 80,
          notes: `## What history is

**History** is the systematic study of past human events, based on evidence, and the interpretation of those events to understand how the present came to be.

History is not simply a record of what happened. It is an **argument about the past supported by evidence**. Two historians may examine the same documents and reach different conclusions, and both may be defensible.

## Why we study history

- To understand how present conditions arose
- To learn from the successes and failures of earlier generations
- To develop national identity and a sense of shared experience
- To train the mind in weighing evidence and constructing an argument
- To preserve cultural heritage

## Sources of history

### Primary sources

Evidence produced **at the time** of the events, by someone present or directly involved.

- Letters, diaries, treaties, constitutions
- Government records, court documents, censuses
- Photographs, newspapers of the period
- Archaeological remains, coins, tools, buildings
- Oral testimony from participants and eyewitnesses

### Secondary sources

Accounts produced **later**, by someone interpreting primary evidence.

- Textbooks, scholarly articles, biographies
- Documentary films
- Encyclopaedias

The same item may be primary or secondary depending on the question asked. A textbook written in 1950 is a secondary source about the founding of Liberia, but a **primary** source about how Liberian history was taught in 1950.

## Oral tradition

In West Africa generally, and in Liberia particularly, much of the past before the nineteenth century was transmitted **orally** — through griots, elders, praise songs, proverbs and genealogies.

**Strengths:**

- Preserves the history of societies that produced few written records
- Conveys values, meaning and perspective from within the community
- Often the only evidence available for the pre-literate period

**Limitations:**

- Details may change with each retelling
- Chronology is often imprecise
- May be shaped to favour a ruling lineage or to explain a present claim

The sound approach is not to reject oral tradition but to **corroborate** it — against archaeology, linguistics, and any written record that exists.

## Evaluating a source

Ask five questions of any source:

1. **Who** produced it, and what was their position?
2. **When** was it produced — at the time, or long after?
3. **Why** was it produced, and for what audience?
4. **What** does it claim, and is the author in a position to know?
5. **Does other evidence agree** with it?

## Bias

**Bias** is a tendency to present matters from one point of view. It arises from the author's nationality, class, religion, race, political interest or personal stake.

A biased source is **not worthless**. A settler's account of a conflict with a local ruler may be biased, but it remains excellent evidence for what the settlers believed, feared and wanted. The historian's task is to read a source for what it can reliably tell you, which is not always what it intends to tell you.`,
          workedExample: `**Question:** A historian studying the founding of the settlement at Cape Mesurado has two documents.

*Document A:* a letter written in 1822 by an agent of the American Colonization Society to his superiors, describing the negotiations for land with local rulers as "conducted with fairness and to the satisfaction of all parties."

*Document B:* an account recorded in 1975 from an elder of a coastal community, stating that his ancestors understood the agreement to be a temporary right of use, not a permanent sale of land.

(a) Classify each source.
(b) Assess the reliability of each.
(c) Explain how a historian should use them together.

**Solution**

**(a) Classification**

*Document A* is a **primary source**. It was written in 1822, at the time of the events, by a participant.

*Document B* is more complicated. As a record of an event in 1821 or 1822, it is **not** primary — the speaker was not present and is relating what has been transmitted through generations. It is **oral tradition**, recorded as a primary source of what that community believed in 1975.

**(b) Reliability**

*Document A:*

- *Strength:* contemporary, and the author was directly involved.
- *Weakness:* he is reporting **to his employers** on the success of his own mission. He has a clear interest in presenting the transaction as fair and legitimate. The phrase "to the satisfaction of all parties" is exactly what a superior would wish to read.
- The document is strong evidence of what the Society was told, and of how the agent wished the transaction to be seen. It is weaker evidence of what the local rulers actually understood.

*Document B:*

- *Strength:* preserves the perspective of a party whose view is largely absent from the written record.
- *Weakness:* recorded over 150 years later; details may have shifted across generations; and the community may have an interest in the land question that shapes the account.

**(c) Using them together**

The historian should not simply choose one and discard the other. Both are evidence, and the **disagreement between them is itself the most valuable finding.**

The sound procedure:

1. Note that both sources agree an agreement was made — that much is corroborated.
2. Note that they disagree fundamentally on **what was agreed**.
3. Recognise that this disagreement is historically significant in its own right. It suggests the two parties may have understood the transaction in genuinely different terms, reflecting different concepts of land tenure: permanent alienable ownership on one side, and communal custodianship granting use rights on the other.
4. Seek further evidence — the text of the agreement itself, other contemporary accounts, later disputes over the same land.

**Conclusion:** neither source is simply true or false. Each is reliable for certain things and unreliable for others. The historian's skill lies in identifying which is which, and in recognising that a conflict between sources often points to the most important question, rather than to an error to be resolved.`,
          teachingTip:
            "Teach source evaluation with an event the class witnessed. Ask four learners to write separately what happened during a recent school occasion — a football match, an assembly, a disagreement in the yard — then read the accounts aloud. The differences appear immediately, and they are not lies; they arise from position, interest and attention. From there the concepts of perspective and bias need almost no explanation. The point to press hardest is that a biased source is still useful: ask what a partisan account of the match reliably tells you, and learners will see that it is excellent evidence of what its author wanted. Then bring in a local elder, if one is willing, to speak about the community's past. Nothing conveys the value and the limits of oral tradition as well as hearing it directly and then asking the class how they might check it.",
          quiz: [
            {
              prompt: "A primary source is one that was produced",
              options: [
                "by a famous historian",
                "at the time of the events by someone involved",
                "in a school textbook",
                "most recently",
              ],
              correctIndex: 1,
              explanation:
                "Primary sources originate from the period itself, from participants or eyewitnesses.",
            },
            {
              prompt: "Which of these is a secondary source about the founding of Liberia?",
              options: [
                "A treaty signed in 1821",
                "A letter written by a settler in 1822",
                "A history textbook written in 2010",
                "A ship's log from 1822",
              ],
              correctIndex: 2,
              explanation:
                "The textbook interprets earlier evidence rather than originating from the period.",
            },
            {
              prompt: "Oral tradition is especially important in West African history because",
              options: [
                "it is always completely accurate",
                "many societies produced few written records",
                "it requires no interpretation",
                "it replaces archaeology",
              ],
              correctIndex: 1,
              explanation:
                "Where writing was limited, knowledge of the past was transmitted through speech.",
            },
            {
              prompt: "Bias in a historical source means that the source",
              options: [
                "is completely useless",
                "presents matters from a particular point of view",
                "contains no facts",
                "was written recently",
              ],
              correctIndex: 1,
              explanation:
                "Bias must be identified and allowed for, but it does not make a source worthless.",
            },
            {
              prompt: "Corroboration in historical method means",
              options: [
                "rejecting all oral evidence",
                "checking a claim against other independent evidence",
                "accepting the oldest source",
                "counting the number of sources",
              ],
              correctIndex: 1,
              explanation:
                "Independent agreement between sources strengthens confidence in a claim.",
            },
            {
              prompt: "Archaeological remains such as tools and pottery are best classified as",
              options: [
                "Secondary sources",
                "Primary sources",
                "Oral traditions",
                "Interpretations",
              ],
              correctIndex: 1,
              explanation:
                "They survive from the period itself and provide direct material evidence.",
            },
            {
              prompt: "A weakness of oral tradition is that",
              options: [
                "it cannot be recorded",
                "chronology is often imprecise and details may change",
                "it is never about real events",
                "it is always written down",
              ],
              correctIndex: 1,
              explanation:
                "Transmission across generations can blur dates and alter detail, so corroboration is needed.",
            },
            {
              prompt: "A history textbook written in 1950 could be a primary source for",
              options: [
                "the events of 1822",
                "how history was taught in 1950",
                "pre-colonial migrations",
                "nothing at all",
              ],
              correctIndex: 1,
              explanation:
                "Whether a source is primary depends on the question being asked of it.",
            },
            {
              prompt: "Which question is least useful when evaluating a source?",
              options: [
                "Who produced it and why?",
                "When was it produced?",
                "How long is the document?",
                "Does other evidence agree with it?",
              ],
              correctIndex: 2,
              explanation:
                "Length says nothing about reliability; authorship, purpose, date and corroboration do.",
            },
            {
              prompt: "History is best described as",
              options: [
                "a list of dates to memorise",
                "an evidence-based study and interpretation of the human past",
                "stories with no factual basis",
                "the study of the future",
              ],
              correctIndex: 1,
              explanation:
                "History involves both establishing what happened and interpreting why it matters.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between primary and secondary sources, giving three examples of each relevant to Liberian history.",
              answerKey:
                "Primary sources originate from the period under study, produced by participants or eyewitnesses — for example the 1847 Declaration of Independence, letters written by settlers, treaties with local rulers, contemporary newspapers, photographs, archaeological remains. Secondary sources are later accounts interpreting primary evidence — for example a modern textbook on Liberian history, a scholarly biography of Joseph Jenkins Roberts, a documentary film. Award 3 marks for each definition and 1 mark per appropriate example up to 6.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State three strengths and three limitations of oral tradition as a source of history.",
              answerKey:
                "Strengths: preserves the past of societies producing few written records; conveys the perspective, values and meaning of the community from within; often the only evidence available for pre-literate periods; may preserve genealogies and land claims of considerable antiquity. Limitations: details may alter with each retelling; chronology is frequently imprecise; accounts may be shaped to favour a ruling lineage or support a present claim; transmission depends on the memory and interest of particular custodians. Award 2 marks each for three strengths and three limitations.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A government report on a conflict, written by the side that won, is best described as",
              options: [
                "worthless because it is biased",
                "a primary source whose bias must be allowed for",
                "a secondary source",
                "an oral tradition",
              ],
              correctIndex: 1,
              answerKey:
                "It originates from the period and from a participant, making it primary. Its partiality does not disqualify it; the historian identifies the bias and reads the source for what it reliably reveals, including the victor's own aims and perceptions. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "List the five questions a historian should ask when evaluating a source, and explain why each matters.",
              answerKey:
                "Who produced it and in what position — establishes authority and interest. When was it produced — contemporary evidence generally outranks recollection long after. Why was it produced and for what audience — purpose shapes content and may introduce distortion. What does it claim and was the author positioned to know — distinguishes eyewitness from hearsay. Does other evidence agree — corroboration is the principal test of reliability. Award 1 mark per question and 1 mark per explanation.",
              marks: 10,
            },
            {
              type: "ESSAY",
              prompt:
                "'A biased source is still a useful source.' Discuss this statement with reference to the methods historians use, illustrating your answer with examples drawn from the study of Liberian history.",
              answerKey:
                "Award marks as follows: a clear position taken on the statement rather than a general description of bias, 4 marks; explanation of what bias is and how it arises from nationality, class, race, religion, political or personal interest, 5 marks; the central argument that a partial source remains reliable evidence of its author's beliefs, aims and perceptions even where it is unreliable as to events, developed with reasoning, 8 marks; treatment of corroboration and the use of multiple perspectives to triangulate, 6 marks; at least two developed examples relevant to Liberian history — for instance settler accounts of land agreements set against oral traditions from coastal communities, or official accounts of nineteenth-century conflicts, 8 marks; a conclusion that qualifies the statement appropriately, recognising that usefulness depends on the question asked, 5 marks; organisation and expression, 4 marks. A learner who argues simply that biased sources should be discarded has misunderstood the method and should not exceed 12.",
              marks: 40,
            },
          ],
        },
        {
          slug: "early-peoples",
          title: "Early Peoples and Migrations into Liberia",
          objective:
            "By the end of the lesson, learners should be able to identify the three linguistic groups of Liberia's indigenous peoples, describe the causes and pattern of migration into the region, and outline the social and economic organisation of these societies before 1822.",
          estimatedMinutes: 80,
          notes: `## Before 1822

The territory that became Liberia was **not empty land**. It had been settled for centuries by peoples with established political systems, trade networks, farming systems and religious institutions. Any account of Liberian history that begins in 1822 begins in the middle of the story.

## The sixteen ethnic groups

Liberia officially recognises sixteen indigenous ethnic groups, classified into **three linguistic families**:

### Mel (West Atlantic) group

Generally regarded as among the **earliest** inhabitants of the region.

- **Gola**
- **Kissi**

### Mande group

Migrated largely from the north and north-east, associated with the decline of the great Sudanic empires.

- *Northern Mande:* **Vai**, **Mandingo (Mandinka)**, **Gbandi**, **Loma**, **Mende**, **Kpelle**
- *Southern Mande:* **Gio (Dan)**, **Mano**

### Kru (Kwa) group

Concentrated in the south-east and along the coast.

- **Bassa**, **Kru**, **Grebo**, **Krahn**, **Dei (Dey)**, **Belle (Kuwaa)**

## Causes of migration

- **The decline of the Sudanic empires.** The breakup of Ghana, Mali and Songhai from the eleventh century onwards displaced populations southwards.
- **Warfare and raiding**, including the Mane invasions of the sixteenth century.
- **Search for fertile land** as populations grew.
- **Trade**, particularly in salt, kola nuts, iron and cloth, drawing groups towards the coast.
- **Escape from domination** by stronger neighbours.
- **Environmental pressure**, including the southward advance of drier conditions in the Sahel.

## Pattern of settlement

Broadly, movement was **from the north and east towards the coast and the forest**. Earlier arrivals such as the Gola and Kissi were displaced or absorbed as later Mande groups pressed southwards. Kru-speaking peoples established themselves along the coast and in the south-east.

This layering explains the present distribution of ethnic groups and much of the pattern of later relations between them.

## Social and political organisation

- Most societies were organised around the **extended family**, the **clan** and the **village**, with authority held by elders and chiefs.
- **Secret societies** — the **Poro** for men and the **Sande** for women — were central institutions. They educated the young, regulated conduct, settled disputes, conducted initiation, and exercised real political authority that often crossed ethnic boundaries.
- Some groups developed **centralised chiefdoms** and confederations; others remained decentralised, with authority resting at village level.
- Religion combined belief in a supreme creator with veneration of ancestors and recognition of spirits in the natural world. Islam spread among the Mandingo and Vai from the north.

## Economic life

- **Farming** — rice as the staple, grown by shifting cultivation, with cassava, yams, plantain, palm oil and vegetables.
- **Fishing** — of great importance along the coast and rivers; the Kru in particular became renowned seafarers.
- **Hunting and gathering** — supplementing the diet.
- **Crafts** — iron smelting and blacksmithing, weaving, pottery, wood carving, canoe building.
- **Trade** — local markets and long-distance routes carrying salt, kola, iron, cloth and slaves between the interior and the coast.

## The Vai script

Around 1833, **Momolu Duwalu Bukele** of the Vai people devised a **syllabic writing system** for the Vai language. It is one of the very few indigenous scripts developed in Africa, and it remains in use. It is important evidence against the assumption that literacy arrived in the region only with outsiders.

## European contact before 1822

Portuguese navigators reached the coast in the **1460s**. Pedro de Sintra named the area, and the coast came to be known by the goods traded along its stretches — the **Grain Coast** or **Pepper Coast**, after the melegueta pepper known as "grains of paradise". Later, Dutch, British and French traders followed. Contact was largely coastal and commercial, and included participation in the Atlantic slave trade, but no European power established permanent territorial control over the region before the nineteenth century.`,
          workedExample: `**Question:** Explain how the migrations into the territory of present-day Liberia shaped the pattern of ethnic distribution found there today, and assess the importance of the Poro and Sande societies in pre-1822 Liberian society.

**Solution**

**Part 1 — Migration and ethnic distribution**

*Step 1 — establish the earliest layer.*

The **Mel-speaking peoples**, the Gola and Kissi, are generally regarded as among the earliest inhabitants. Their present distribution in the western and north-western interior is a remnant of a formerly wider occupation.

*Step 2 — the Mande movement.*

From roughly the eleventh century onwards, the **decline of the Sudanic empires** — Ghana, then Mali, then Songhai — set populations moving southwards. Warfare, the search for land, and the pull of trade routes carried Mande-speaking groups towards the forest zone.

The Vai, Mandingo, Gbandi, Loma, Kpelle, Mende, Gio and Mano entered from the north and north-east. As they advanced, earlier inhabitants were **displaced, absorbed or pushed into more marginal territory**. This is why Mande speakers today occupy much of the northern and central interior.

*Step 3 — the Kru-speaking peoples.*

Kru-speaking groups — Bassa, Kru, Grebo, Krahn, Dei, Belle — established themselves along the **coast and the south-east**. Their coastal position shaped their economy decisively: fishing, canoe building and, later, employment as sailors on European vessels, for which the Kru became widely known.

*Step 4 — the resulting pattern.*

The distribution seen today is therefore **layered rather than random**: an older Mel substratum in the west, Mande groups across the north and centre reflecting movement from the interior, and Kru speakers along the coast and south-east. Ethnic geography is a map of historical movement.

**Part 2 — The Poro and Sande societies**

These were **not** merely ceremonial associations. Their importance rested on four functions:

*1. Education.* The Poro for boys and the Sande for girls conducted initiation, during which young people were instructed in history, law, craft skills, sexual conduct, medicine and the obligations of adulthood. In the absence of schools, these were the principal educational institutions of the society.

*2. Political authority.* Poro officials could summon assemblies, impose sanctions, declare and suspend hostilities, and enforce decisions. In several societies real power lay with the Poro leadership rather than with a nominal chief.

*3. Social regulation.* They settled disputes, punished offences, controlled certain economic activities such as the timing of harvests, and enforced norms of conduct.

*4. Integration across ethnic lines.* Because Poro and Sande operated among several different ethnic groups, they provided a framework for **communication and agreement between peoples who did not share a language**. This gave the region a degree of political coherence that a map of separate ethnic groups does not reveal.

**Assessment**

Their importance was considerable and is easily underestimated. They supplied education, law, government and inter-ethnic diplomacy in societies without written records or standing bureaucracies. Understanding them is essential to understanding why the settlers who arrived after 1822 encountered **organised, institutionally sophisticated societies** rather than the politically empty coastline that some settler accounts described.

**Conclusion:** migration produced a layered ethnic geography still visible today, and the Poro and Sande were central institutions of governance and education, not peripheral customs.`,
          teachingTip:
            "Correct the founding misconception in the first five minutes: many learners arrive believing Liberian history begins in 1822. Ask the class who was living in the territory before the settlers came, and let the thinness of the answers make the point. Then have learners map their own ethnic backgrounds onto a wall map of Liberia and trace where their families say they came from. The migration patterns emerge from the class itself, and learners engage with material about their own lineages far more readily than with a list of names. On the Poro and Sande, be careful and respectful — these are living institutions with genuine restrictions on what may be discussed, and learners will include initiates. Teach their historical functions in governance, education and dispute settlement, which is what the syllabus requires, and do not press for details that members are bound not to disclose. Mention Bukele's Vai script every year; the fact that an African script was invented in Liberia lands hard against the assumption that literacy came from outside.",
          quiz: [
            {
              prompt: "How many indigenous ethnic groups are officially recognised in Liberia?",
              options: ["Twelve", "Fourteen", "Sixteen", "Eighteen"],
              correctIndex: 2,
              explanation:
                "Sixteen groups are recognised, classified into three linguistic families.",
            },
            {
              prompt: "Which of these belongs to the Mel (West Atlantic) linguistic group?",
              options: ["Kpelle", "Gola", "Bassa", "Grebo"],
              correctIndex: 1,
              explanation:
                "The Gola and Kissi form the Mel group and are among the earliest inhabitants.",
            },
            {
              prompt: "The Kru linguistic group is concentrated mainly in",
              options: [
                "the far north",
                "the coast and south-east",
                "the north-west only",
                "the central highlands",
              ],
              correctIndex: 1,
              explanation:
                "Bassa, Kru, Grebo and Krahn occupy coastal and south-eastern areas.",
            },
            {
              prompt: "A major cause of migration into the Liberian region was",
              options: [
                "the discovery of gold in Europe",
                "the decline of the Sudanic empires",
                "the founding of Monrovia",
                "the arrival of the Portuguese",
              ],
              correctIndex: 1,
              explanation:
                "The breakup of Ghana, Mali and Songhai displaced populations southwards.",
            },
            {
              prompt: "The Poro society was primarily concerned with",
              options: [
                "trade with Europeans",
                "the education, initiation and governance of men",
                "farming techniques only",
                "shipbuilding",
              ],
              correctIndex: 1,
              explanation:
                "Poro handled initiation, law, dispute settlement and political authority among men.",
            },
            {
              prompt: "The Sande society was the corresponding institution for",
              options: ["Traders", "Women", "Fishermen", "Chiefs only"],
              correctIndex: 1,
              explanation:
                "Sande conducted the initiation and education of girls and regulated women's affairs.",
            },
            {
              prompt: "The Vai script was devised by",
              options: [
                "Jehudi Ashmun",
                "Momolu Duwalu Bukele",
                "Joseph Jenkins Roberts",
                "Pedro de Sintra",
              ],
              correctIndex: 1,
              explanation:
                "Bukele created the Vai syllabary around 1833, one of few indigenous African scripts.",
            },
            {
              prompt: "The staple food crop of most Liberian societies before 1822 was",
              options: ["Maize", "Rice", "Wheat", "Cocoa"],
              correctIndex: 1,
              explanation:
                "Rice was the staple, grown by shifting cultivation alongside cassava and yams.",
            },
            {
              prompt: "Portuguese navigators first reached the Liberian coast in the",
              options: ["1360s", "1460s", "1560s", "1660s"],
              correctIndex: 1,
              explanation:
                "Pedro de Sintra and others reached the coast in the 1460s.",
            },
            {
              prompt: "The Liberian coast was known to European traders as the",
              options: [
                "Gold Coast",
                "Ivory Coast",
                "Grain or Pepper Coast",
                "Slave Coast",
              ],
              correctIndex: 2,
              explanation:
                "It was named for melegueta pepper, the 'grains of paradise' traded there.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the three linguistic groups of Liberia's indigenous peoples and give three ethnic groups belonging to each.",
              answerKey:
                "Mel or West Atlantic — Gola, Kissi (only two exist; accept both with a note). Mande — Vai, Mandingo, Gbandi, Loma, Kpelle, Mende, Gio, Mano. Kru or Kwa — Bassa, Kru, Grebo, Krahn, Dei, Belle. Award 2 marks per linguistic group correctly named and 1 mark per correct ethnic group, to a maximum of 8 for the examples. Do not penalise a learner who correctly notes that the Mel group contains only two recognised groups.",
              marks: 14,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five causes of the migrations that brought peoples into the territory of present-day Liberia.",
              answerKey:
                "Any five from: the decline and breakup of the Sudanic empires of Ghana, Mali and Songhai; warfare and raiding, including the sixteenth-century Mane invasions; population growth and the search for fertile farmland; the pull of trade routes carrying salt, kola, iron and cloth towards the coast; escape from domination by more powerful neighbours; environmental pressure as drier conditions advanced in the Sahel. Award 2 marks each for the cause stated and explained.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which statement about the Poro society is most accurate?",
              options: [
                "It was concerned only with ceremony and had no political power",
                "It educated the young, settled disputes and exercised real political authority",
                "It was founded by the settlers after 1822",
                "It existed only among the Kru people",
              ],
              correctIndex: 1,
              answerKey:
                "Poro was a governing institution as well as an educational one, and it operated across several ethnic groups long before 1822. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Describe the economic activities of Liberian societies before 1822 under four headings.",
              answerKey:
                "Farming — rice as staple grown by shifting cultivation, with cassava, yams, plantain, palm oil and vegetables. Fishing — of major importance along the coast and rivers, with the Kru noted as seafarers. Crafts — iron smelting and blacksmithing, weaving, pottery, wood carving, canoe building. Trade — local markets and long-distance routes carrying salt, kola nuts, iron, cloth and slaves between interior and coast. Accept also hunting and gathering as a supplementary activity. Award 3 marks per heading treated with accurate detail.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "'The territory that became Liberia was already home to well-organised societies long before 1822.' Discuss this statement with reference to the political, social, economic and religious organisation of the indigenous peoples.",
              answerKey:
                "Award marks as follows: a clear position engaging with the statement, 4 marks; political organisation — extended family, clan and village structures, authority of elders and chiefs, centralised chiefdoms in some areas and decentralised authority in others, 7 marks; the Poro and Sande societies treated as institutions of education, law, dispute settlement and inter-ethnic diplomacy, with recognition that they crossed ethnic boundaries and provided political coherence, 9 marks; economic organisation — rice cultivation and shifting agriculture, fishing and seafaring, iron working and other crafts, and both local and long-distance trade networks, 8 marks; religious organisation — belief in a supreme creator, veneration of ancestors, recognition of spirits in nature, and the spread of Islam among the Mandingo and Vai, 6 marks; supporting evidence of sophistication such as the Vai script devised by Bukele, or the antiquity of trade links with the interior, 4 marks; a conclusion that addresses why this matters for how the settlement period is understood, 4 marks; organisation and expression, 3 marks. A learner who merely lists ethnic groups without addressing organisation should not exceed 12.",
              marks: 45,
            },
          ],
        },
        {
          slug: "founding-of-liberia",
          title: "The Founding of Liberia, 1816-1847",
          objective:
            "By the end of the lesson, learners should be able to explain the origins and motives of the American Colonization Society, narrate the events of the settlement from 1820, and assess the relations between settlers and indigenous peoples.",
          estimatedMinutes: 80,
          notes: `## The American Colonization Society

Founded in **December 1816** in Washington, D.C., and incorporated in 1817, as the **American Society for Colonizing the Free People of Color of the United States**.

Its founders included Robert Finley, Henry Clay, Bushrod Washington and Francis Scott Key.

## Mixed motives

This is the point learners must grasp: the Society united people with **incompatible aims**.

**Humanitarian and religious motives:**

- A genuine belief that free Black Americans would never receive equal treatment in the United States
- The hope of spreading Christianity and Western education in Africa
- Opposition to the Atlantic slave trade, and the wish to establish a base against it

**Self-interested motives:**

- Many slaveholders wished to **remove free Black people from the United States**, believing their presence encouraged enslaved people to seek freedom
- A desire to protect the institution of slavery by exporting the free Black population
- Commercial interest in African trade

Many Black Americans, including the abolitionist leaders Frederick Douglass and James Forten, **opposed colonisation** precisely because they saw this second set of motives clearly. They argued that America was their home and that emigration was a distraction from the struggle for equal rights within it.

## The first attempt, 1820

The ship **Elizabeth** sailed in **January 1820** with 88 emigrants and three ACS agents, landing on **Sherbro Island**, off Sierra Leone.

The venture failed disastrously. The island was low, swampy and malarial. Within weeks a large proportion of the settlers and all three agents had died of fever. The survivors withdrew to Sierra Leone.

## Cape Mesurado, 1821

In **December 1821**, US Navy Lieutenant **Robert Stockton** and ACS agent **Dr. Eli Ayres** negotiated with local rulers, principally **King Peter** of the Dei, for land at **Cape Mesurado**.

The circumstances of this agreement remain disputed. Accounts indicate that Stockton pressed the negotiation while armed, and there is substantial evidence that the local rulers understood the arrangement as granting **rights of use** rather than the permanent alienation of land — a concept foreign to the prevailing systems of communal land tenure.

## Settlement, January 1822

On **7 January 1822** the settlers landed at **Providence Island** and established themselves on Cape Mesurado. This date is regarded as the founding of the settlement.

Conditions were extremely harsh: disease, particularly malaria, killed a high proportion of arrivals; food was short; and relations with neighbouring peoples deteriorated over the land question.

## Jehudi Ashmun

**Jehudi Ashmun**, a white Methodist minister, arrived in **1822** and effectively led the colony until 1828.

- He organised the defence of the settlement during the attacks of **November and December 1822**, when a much larger force attacked the settlers' position at Crown Hill. The settlers, though heavily outnumbered, held their fortified position.
- He reorganised the colony's administration and land distribution.
- He extended settlement and negotiated further land agreements.

He is often described as the effective founder of the colony's institutions.

## Naming, 1824

In **1824** the settlement was named **Liberia**, from the Latin *liber*, meaning free. The principal settlement was named **Monrovia**, after **James Monroe**, then President of the United States and a supporter of the colonisation scheme.

## Other settlements

The ACS was not the only body involved. Several American state colonization societies founded their own settlements:

- **Maryland in Africa** — established at **Cape Palmas** in **1834** by the Maryland State Colonization Society. It declared itself independent in **1854** and joined Liberia in **1857**.
- **Mississippi in Africa** — at Greenville, Sinoe County.
- **Bassa Cove** — founded by Pennsylvania and New York societies.

These separate settlements were combined into the **Commonwealth of Liberia** in **1839**.

## Governors

- **Thomas Buchanan** — the first Governor of the Commonwealth of Liberia, 1839 to 1841. He was white.
- **Joseph Jenkins Roberts** — appointed in **1842** as the **first Black governor**. Born free in Norfolk, Virginia, he had emigrated in 1829.

## Settler-indigenous relations

Relations were shaped by four persistent sources of conflict:

1. **Land.** Fundamentally different concepts of ownership. The settlers understood themselves to have purchased land permanently; indigenous rulers generally understood themselves to have granted use rights over land that remained communally held.

2. **Trade.** Settlers sought to control coastal trade, which threatened the position of established indigenous traders and middlemen.

3. **The slave trade.** The settlers acted against the Atlantic slave trade, which brought them into direct conflict with those profiting from it.

4. **Culture and status.** The settlers, mostly Christian and English-speaking, generally regarded their own culture as superior and made little accommodation with indigenous institutions. Indigenous peoples were excluded from citizenship and political participation, a division that would shape Liberian politics for well over a century.`,
          workedExample: `**Question:** Assess the motives of the American Colonization Society in founding Liberia, and explain why many free Black Americans opposed the scheme.

**Solution**

*Step 1 — recognise that the Society was not united.*

The essential point is that the ACS was a **coalition of groups with conflicting aims** who agreed on a single policy for entirely different reasons. Treating "the motives of the ACS" as a single thing produces a confused answer.

*Step 2 — set out the humanitarian and religious motives.*

Some members held sincerely that:

- Free Black Americans faced legal disability, violence and exclusion, and would never achieve equality in the United States. Emigration offered a place to exercise self-government.
- Christianity and Western education should be carried to Africa, a common missionary conviction of the period.
- A settlement on the coast could serve as a **base against the Atlantic slave trade**, which the settlers did in fact act against.

These motives were genuine in the members who held them, and it would be poor history to dismiss them.

*Step 3 — set out the self-interested motives.*

Other members, including significant slaveholders, supported colonisation because:

- The presence of **free** Black people in a slave society was regarded as dangerous. Their very existence demonstrated that slavery was not a natural condition, and was thought to encourage enslaved people to seek freedom.
- Removing the free Black population would therefore **strengthen and protect the institution of slavery**, not weaken it.
- There were commercial interests in establishing an African trading foothold.

The presence of Henry Clay and other prominent slaveholders among the founders is difficult to reconcile with a purely humanitarian reading.

*Step 4 — explain the opposition of free Black Americans.*

Opposition was widespread and articulate. Frederick Douglass, James Forten and many others rejected the scheme, and mass meetings of free Black communities passed resolutions against it. Their reasons:

1. **America was their home.** They had been born there, often for several generations, and had built it through generations of unpaid labour. To leave was to concede the claim that they did not belong.

2. **They identified the underlying motive.** They saw that colonisation served the interests of slaveholders, and that removing free Black people would entrench slavery rather than end it.

3. **It diverted effort from the real struggle.** Energy spent on emigration was energy not spent on abolition and on the fight for equal rights within the United States.

4. **The human cost was severe.** The mortality among early emigrants was extremely high, and this was known.

*Step 5 — reach a judgement.*

The Society's motives were **genuinely mixed**, and the mixture was not incidental — it was the condition of the Society's existence, since neither faction alone commanded the resources to act. The consequence was an enterprise that was, at once, an opportunity for self-government seized by those who emigrated, and an instrument serving the interests of slaveholders who financed it.

The opposition of free Black Americans was **well founded**: they correctly identified motives that later historians have confirmed. That some emigrants nonetheless built a self-governing republic does not invalidate the criticism; both things are true.

**Conclusion:** any adequate assessment must hold the humanitarian and the self-interested motives together, and must take the contemporary Black critique seriously as informed political analysis rather than as mere reluctance.`,
          teachingTip:
            "This topic carries a real risk of being taught as a simple story of benevolent founding, and learners are poorly served by that. The historical method taught in the first lesson of this period applies directly here: give the class two short extracts — one from an ACS statement of purpose, one from a resolution passed by a free Black community meeting opposing colonisation — and let them identify the conflict for themselves. They will handle the complexity better than teachers usually expect. The same applies to the Cape Mesurado agreement: rather than stating whether it was a fair purchase, present the competing understandings of land tenure and ask learners what each party is likely to have believed had been agreed. On dates, insist on the core four — 1816 the Society, 1822 the landing, 1824 the naming, 1847 independence — and let the rest hang on those anchors.",
          quiz: [
            {
              prompt: "The American Colonization Society was founded in",
              options: ["1806", "1816", "1822", "1847"],
              correctIndex: 1,
              explanation:
                "It was founded in December 1816 in Washington, D.C., and incorporated in 1817.",
            },
            {
              prompt: "The first group of emigrants sailed in 1820 aboard the ship",
              options: ["Mayflower", "Elizabeth", "Providence", "Monrovia"],
              correctIndex: 1,
              explanation:
                "The Elizabeth carried 88 emigrants to Sherbro Island, where the venture failed.",
            },
            {
              prompt: "The settlers landed at Providence Island, Cape Mesurado, on",
              options: [
                "7 January 1822",
                "26 July 1847",
                "4 July 1820",
                "1 December 1821",
              ],
              correctIndex: 0,
              explanation:
                "7 January 1822 is regarded as the founding date of the settlement.",
            },
            {
              prompt: "Liberia's capital, Monrovia, was named after",
              options: [
                "Jehudi Ashmun",
                "James Monroe",
                "Joseph Jenkins Roberts",
                "Robert Stockton",
              ],
              correctIndex: 1,
              explanation:
                "James Monroe was then President of the United States and supported colonisation.",
            },
            {
              prompt: "The name 'Liberia' derives from a Latin word meaning",
              options: ["Land", "Free", "New", "Hope"],
              correctIndex: 1,
              explanation: "From liber, meaning free; the name was adopted in 1824.",
            },
            {
              prompt: "Who organised the defence of the settlement in 1822?",
              options: [
                "Thomas Buchanan",
                "Jehudi Ashmun",
                "Eli Ayres",
                "Joseph Jenkins Roberts",
              ],
              correctIndex: 1,
              explanation:
                "Ashmun led the colony from 1822 to 1828 and directed the defence at Crown Hill.",
            },
            {
              prompt: "Many free Black Americans opposed colonisation because they believed",
              options: [
                "Africa was too far away",
                "the scheme served the interests of slaveholders",
                "the climate was pleasant",
                "the ACS lacked funds",
              ],
              correctIndex: 1,
              explanation:
                "Removing free Black people was seen as strengthening rather than weakening slavery.",
            },
            {
              prompt: "The settlement at Cape Palmas, founded in 1834, was known as",
              options: [
                "Bassa Cove",
                "Mississippi in Africa",
                "Maryland in Africa",
                "Providence",
              ],
              correctIndex: 2,
              explanation:
                "It was founded by the Maryland State Colonization Society and joined Liberia in 1857.",
            },
            {
              prompt: "The first Black governor of Liberia, appointed in 1842, was",
              options: [
                "Thomas Buchanan",
                "Joseph Jenkins Roberts",
                "Jehudi Ashmun",
                "Stephen Benson",
              ],
              correctIndex: 1,
              explanation:
                "Roberts, born free in Virginia, later became Liberia's first President.",
            },
            {
              prompt: "A principal source of conflict between settlers and indigenous peoples was",
              options: [
                "disagreement over language",
                "differing concepts of land ownership",
                "the naming of Monrovia",
                "the design of the flag",
              ],
              correctIndex: 1,
              explanation:
                "Settlers assumed permanent purchase; indigenous rulers understood use rights over communal land.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four motives behind the founding of the American Colonization Society, distinguishing humanitarian from self-interested motives.",
              answerKey:
                "Humanitarian and religious: the belief that free Black Americans would never obtain equality in the United States and needed a place of self-government; the wish to spread Christianity and Western education in Africa; the establishment of a base from which to act against the Atlantic slave trade. Self-interested: the desire of slaveholders to remove free Black people whose presence was thought to encourage enslaved people to seek freedom, thereby protecting slavery; commercial interest in African trade. Award 2 marks per motive correctly stated and 2 marks for making the distinction between the two categories explicit.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Give an account of the events from the sailing of the Elizabeth in 1820 to the naming of Liberia in 1824.",
              answerKey:
                "January 1820: the Elizabeth sailed with 88 emigrants and three ACS agents, landing at Sherbro Island off Sierra Leone; the low, swampy, malarial site caused heavy mortality including all three agents, and survivors withdrew to Sierra Leone. December 1821: Lieutenant Robert Stockton and Dr. Eli Ayres negotiated with local rulers, principally King Peter of the Dei, for land at Cape Mesurado, in circumstances that remain disputed. 7 January 1822: settlers landed at Providence Island and established themselves on Cape Mesurado. 1822: Jehudi Ashmun arrived and organised the defence of the settlement against attacks in November and December. 1824: the settlement was named Liberia, from the Latin liber, with its principal town named Monrovia after President James Monroe. Award 2 marks per accurately narrated stage with its date.",
              marks: 12,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "The separate settlements were combined into the Commonwealth of Liberia in",
              options: ["1822", "1834", "1839", "1847"],
              correctIndex: 2,
              answerKey:
                "The Commonwealth was formed in 1839, with Thomas Buchanan as its first governor. Maryland in Africa remained separate until 1857. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain four causes of conflict between the settlers and the indigenous peoples.",
              answerKey:
                "Land — settlers understood agreements as permanent purchase while indigenous rulers understood them as granting use rights over communally held land. Trade — settlers sought control of coastal commerce, displacing established indigenous traders and middlemen. The slave trade — settler action against the Atlantic trade brought them into conflict with those profiting from it. Culture and status — settlers generally regarded their Christian, English-speaking culture as superior, made little accommodation with indigenous institutions, and excluded indigenous peoples from citizenship and political participation. Award 3 marks per cause correctly explained rather than merely named.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "'The founding of Liberia was both an opportunity for freedom and an instrument of the interests of slaveholders.' Discuss this statement, referring to the motives of the American Colonization Society, the experience of the settlers, and the response of free Black Americans.",
              answerKey:
                "Award marks as follows: recognition that the ACS was a coalition of groups holding incompatible aims, rather than a body with a single motive, 6 marks; treatment of the humanitarian and religious motives — the impossibility of equality in the United States, missionary aims, opposition to the Atlantic slave trade — presented as genuinely held, 7 marks; treatment of the self-interested motives — the removal of free Black people as a means of protecting slavery, the prominence of slaveholders such as Henry Clay among the founders, commercial interest, 8 marks; the settler experience, including the failure at Sherbro Island, high mortality from disease, hardship at Cape Mesurado, and the achievement of self-government, 7 marks; the response of free Black Americans, including Douglass and Forten, with their reasoning that America was their home, that colonisation served slaveholders and that it diverted effort from abolition, 8 marks; a judgement that holds both halves of the statement together rather than choosing one, 6 marks; organisation, use of dates and expression, 3 marks. A learner who presents the founding as straightforwardly benevolent, without engaging the slaveholder interest, should not exceed 18.",
              marks: 45,
            },
          ],
        },
        {
          slug: "independence",
          title: "Independence and the Early Republic",
          objective:
            "By the end of the lesson, learners should be able to explain the causes of the Declaration of Independence in 1847, describe the making of the Constitution, and assess the achievements and problems of the early Republic.",
          estimatedMinutes: 80,
          notes: `## Why independence became necessary

By the 1840s the Commonwealth of Liberia occupied an impossible position. It was governed by a **private society**, the ACS, not by a state. This created three pressing problems.

**1. The customs dispute.**

The Commonwealth levied duties on goods entering its ports. **British traders refused to pay**, arguing that Liberia was not a sovereign state and therefore had no right to levy customs. Britain declined to recognise the ACS's authority to govern territory.

Without customs revenue the Commonwealth could not fund itself. Without sovereignty it could not levy customs. Only independence could break the circle.

**2. Territorial pressure.**

Neighbouring colonial powers, particularly Britain in Sierra Leone and France, were expanding. A territory without recognised sovereign status was vulnerable to encroachment.

**3. The anomaly of rule by a private society.**

The settlers had come seeking self-government. Governance by a philanthropic body in Washington satisfied neither their aspirations nor the requirements of international dealings. The ACS itself came to accept that independence was the only workable course and encouraged the step.

## The Declaration

The Commonwealth legislature called a **Constitutional Convention**, which met in Monrovia in **July 1847**.

On **26 July 1847**, the Convention adopted the **Declaration of Independence**, declaring Liberia a free, sovereign and independent republic.

The Declaration was principally drafted by **Hilary Teage**, a settler, journalist and legislator. It set out the grievances that had driven the settlers from the United States, stating that they had been "originally the inhabitants of the United States of America" where they had suffered under disability and were "debarred by law from all the rights and privileges of freemen."

Liberia became **Africa's first independent republic**.

## The Constitution of 1847

Drafted with the assistance of **Simon Greenleaf**, a professor of law at Harvard, and modelled closely on the Constitution of the United States.

**Main provisions:**

- A **republican** form of government
- **Separation of powers** between three branches
- **Executive:** a President, elected for a two-year term (later extended to four, and at one period eight)
- **Legislature:** a bicameral body — a Senate and a House of Representatives
- **Judiciary:** a Supreme Court and subordinate courts
- A **Bill of Rights** guaranteeing freedom of speech, religion, press and assembly
- A prohibition on slavery and the slave trade

**The critical restriction:**

Citizenship was limited to persons of **Negro descent**, a provision intended to prevent white settlement and land acquisition. But in practice the franchise and full political rights were confined to the **settlers and their descendants**. Indigenous Liberians, though inhabitants of the territory, were **excluded from citizenship and the vote**, and were governed under a separate system of indirect rule through chiefs.

This exclusion is the central structural problem of the Republic's first century.

## The first President

**Joseph Jenkins Roberts** was elected in **October 1847** and inaugurated on **3 January 1848**.

Born free in Norfolk, Virginia, in 1809, he emigrated in 1829, prospered as a trader, and served as governor from 1842. He served four terms as President, 1848 to 1856, and returned to the presidency from 1872 to 1876.

## Recognition

Recognition by other states was essential, since the whole purpose of independence was to secure standing in international dealings.

- **Great Britain** — 1848, the first to recognise Liberia
- **France** — 1852
- Followed by Belgium, Prussia, Brazil, Denmark, Portugal and others
- **The United States** — not until **1862**

The American delay is significant and is frequently asked about. The United States withheld recognition for fourteen years because recognising Liberia would have required **receiving a Black ambassador in Washington**, which the slaveholding interest in Congress would not accept. Recognition came only in 1862, during the Civil War, under President Abraham Lincoln, after the secession of the Southern states had removed that opposition.

## Achievements of the early Republic

- Maintained **independence** through the entire period of the European Scramble for Africa, one of only two African states to do so
- Established functioning **republican institutions** that have persisted
- Suppressed the Atlantic slave trade along its coast
- Extended its territory through further agreements and the accession of Maryland in Africa in **1857**
- Developed trade in coffee, sugar, palm oil, camwood and rice
- Founded educational institutions, including what became the University of Liberia

## Problems of the early Republic

- **Exclusion of the indigenous majority** from citizenship, the franchise and public office — the foundational division of Liberian society
- **Territorial losses** to Britain and France, which annexed substantial areas claimed by Liberia during the late nineteenth century
- **Chronic financial weakness**, leading to foreign loans on damaging terms and recurrent indebtedness
- **A small settler population** attempting to administer a large territory
- **Economic dependence** on a narrow range of exports
- **Persistent conflict** with indigenous peoples resisting the extension of government authority into the interior`,
          workedExample: `**Question:** Explain why Liberia declared independence in 1847, and account for the fact that the United States did not recognise the new republic until 1862.

**Solution**

**Part 1 — Why independence was declared**

*Cause 1: the customs dispute — the immediate trigger.*

The Commonwealth financed itself by levying duties on goods entering its ports. From the early 1840s **British traders refused to pay these duties**, on the grounds that Liberia was not a sovereign state. Britain supported them, declining to recognise that a **private American philanthropic society** could exercise governmental authority over territory.

The logic was inescapable:

- Without customs revenue, the Commonwealth could not sustain itself.
- Without recognised sovereignty, it could not lawfully levy customs.
- Therefore only **sovereign independence** could resolve the difficulty.

*Cause 2: territorial vulnerability.*

Britain was expanding from Sierra Leone and France was active along the coast. Territory held by a body without international standing was exposed to encroachment. Sovereign status offered at least a legal basis for resisting it.

*Cause 3: the anomaly of governance by a private society.*

The settlers had emigrated in pursuit of self-government. Rule by a society headquartered in Washington was inconsistent with that aspiration and unworkable in dealings with other states. Notably, **the ACS itself came to favour independence**, recognising that it could neither defend the territory nor conduct foreign relations.

*The outcome:* the legislature summoned a Constitutional Convention, which met in July 1847 and adopted the Declaration of Independence on **26 July 1847**, drafted principally by **Hilary Teage**.

**Part 2 — Why the United States delayed recognition until 1862**

This is the more demanding half of the question, and it requires explaining an apparent paradox: the United States had sponsored the settlement through a society founded by prominent Americans, yet was among the **last** significant states to recognise it. Britain recognised Liberia in 1848 and France in 1852.

*The explanation lies in domestic American politics, not in Liberian conduct.*

Diplomatic recognition carries a practical consequence: the recognised state sends an **ambassador or minister**, who must be formally received in the capital.

A Liberian minister would necessarily be a **Black man**, who would have to be received officially in Washington, on terms of diplomatic equality, presented to the President, and treated as the representative of a sovereign state.

For the **slaveholding interest** that held decisive influence in Congress, this was unacceptable. It would have amounted to a public admission at the seat of government that Black men were capable of governing a state and were entitled to equality of status. That admission struck directly at the justification for slavery.

Recognition was therefore blocked in Congress, session after session, for fourteen years.

*What changed in 1862.*

The **secession of the Southern states** in 1860 and 1861 removed their representatives from Congress. The bloc that had obstructed recognition was simply no longer present.

In **1862**, during the Civil War, under President **Abraham Lincoln**, the United States extended recognition to Liberia — and, in the same measure, to Haiti, which had been withheld recognition for the same reason since 1804.

**Conclusion**

Liberia declared independence in 1847 because a territory governed by a private society could neither raise revenue nor defend its standing in international law, with the customs dispute forcing the issue. The United States delayed recognition for fourteen years not because of any doubt about Liberia, but because receiving a Black ambassador in Washington was politically impossible while the slaveholding states remained in the Union. Their departure in 1861 removed the obstacle, and recognition followed in 1862.`,
          teachingTip:
            "The recognition question is the best teaching opportunity in this topic, because the answer is genuinely surprising and learners can reason their way to it. Ask the class to explain why Britain — which had been in dispute with Liberia over customs — recognised the new republic in 1848, while the United States, whose citizens had founded it, waited until 1862. Let them propose explanations before you supply the answer. When someone works out that recognition requires receiving an ambassador, and that this ambassador would be Black, the whole logic of the delay opens up, and with it a great deal about the period. On the Constitution, hold the two facts together rather than teaching either alone: the 1847 Constitution was a genuine achievement, establishing Africa's first republic with a bill of rights and a prohibition on slavery, and it excluded the indigenous majority from citizenship. Learners who are taught only the first are unprepared for the century that follows; learners taught only the second cannot explain why the Republic endured. Anchor the dates on 1847, 1848 and 1862.",
          quiz: [
            {
              prompt: "Liberia declared independence on",
              options: [
                "7 January 1822",
                "26 July 1847",
                "3 January 1848",
                "4 July 1847",
              ],
              correctIndex: 1,
              explanation:
                "The Constitutional Convention adopted the Declaration on 26 July 1847.",
            },
            {
              prompt: "The immediate cause of the move to independence was",
              options: [
                "a war with France",
                "a dispute over customs duties with British traders",
                "the death of Jehudi Ashmun",
                "a famine in Monrovia",
              ],
              correctIndex: 1,
              explanation:
                "Britain denied that a private society could levy duties, forcing the question of sovereignty.",
            },
            {
              prompt: "The Liberian Declaration of Independence was principally drafted by",
              options: [
                "Joseph Jenkins Roberts",
                "Hilary Teage",
                "Simon Greenleaf",
                "Thomas Buchanan",
              ],
              correctIndex: 1,
              explanation:
                "Teage was a settler, journalist and legislator who drafted the Declaration.",
            },
            {
              prompt: "The Constitution of 1847 was modelled largely on that of",
              options: [
                "Great Britain",
                "France",
                "The United States",
                "Sierra Leone",
              ],
              correctIndex: 2,
              explanation:
                "It was drafted with the assistance of Simon Greenleaf of Harvard on the American model.",
            },
            {
              prompt: "Liberia's first President was",
              options: [
                "Hilary Teage",
                "Stephen Benson",
                "Joseph Jenkins Roberts",
                "Edward Roye",
              ],
              correctIndex: 2,
              explanation:
                "Roberts was elected in October 1847 and inaugurated on 3 January 1848.",
            },
            {
              prompt: "The first country to recognise Liberia's independence was",
              options: [
                "The United States",
                "Great Britain",
                "France",
                "Brazil",
              ],
              correctIndex: 1,
              explanation:
                "Britain recognised Liberia in 1848, followed by France in 1852.",
            },
            {
              prompt: "The United States did not recognise Liberia until 1862 mainly because",
              options: [
                "Liberia was considered too small",
                "receiving a Black ambassador was unacceptable to the slaveholding interest",
                "the two countries were at war",
                "Liberia refused to trade with America",
              ],
              correctIndex: 1,
              explanation:
                "Recognition became possible only after Southern secession removed that opposition from Congress.",
            },
            {
              prompt: "Under the 1847 Constitution, citizenship and the franchise were in practice limited to",
              options: [
                "all inhabitants of the territory",
                "settlers and their descendants",
                "indigenous chiefs only",
                "property owners of any origin",
              ],
              correctIndex: 1,
              explanation:
                "Indigenous Liberians were excluded and governed separately through indirect rule.",
            },
            {
              prompt: "Maryland in Africa joined the Republic of Liberia in",
              options: ["1847", "1854", "1857", "1862"],
              correctIndex: 2,
              explanation:
                "It declared independence in 1854 and united with Liberia in 1857.",
            },
            {
              prompt: "Liberia is notable in African history as",
              options: [
                "the first African republic to gain independence",
                "the largest African state",
                "the first British colony in Africa",
                "the last state to abolish slavery",
              ],
              correctIndex: 0,
              explanation:
                "It became Africa's first independent republic in 1847 and remained independent through the Scramble.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain three causes of the Liberian Declaration of Independence in 1847.",
              answerKey:
                "The customs dispute: British traders refused to pay duties on the grounds that a private society could not exercise sovereign authority, leaving the Commonwealth unable to fund itself without independence. Territorial pressure: expanding British and French colonial interests threatened a territory that lacked recognised sovereign status. The anomaly of governance by a private society: the settlers had emigrated seeking self-government, and rule from Washington by the ACS was inconsistent with that aim and unworkable in foreign relations, with the ACS itself coming to favour independence. Award 4 marks per cause explained rather than merely named.",
              marks: 12,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State five main provisions of the Constitution of 1847.",
              answerKey:
                "Any five from: a republican form of government; separation of powers between executive, legislature and judiciary; a President elected for a fixed term as head of the executive; a bicameral legislature of Senate and House of Representatives; a Supreme Court and subordinate courts; a Bill of Rights guaranteeing freedom of speech, religion, press and assembly; prohibition of slavery and the slave trade; restriction of citizenship to persons of Negro descent. Award 2 marks each.",
              marks: 10,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which best explains the fourteen-year delay in American recognition of Liberia?",
              options: [
                "Liberia had not requested recognition",
                "Receiving a Black ambassador in Washington was unacceptable to the slaveholding interest in Congress",
                "The United States doubted Liberia's borders",
                "Liberia was still governed by the ACS until 1862",
              ],
              correctIndex: 1,
              answerKey:
                "Recognition entails receiving a diplomatic representative on terms of equality. A Black minister in Washington was politically impossible while the slaveholding states held influence in Congress; their secession removed the obstacle and recognition followed in 1862 under Lincoln. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State three achievements and three problems of the early Republic of Liberia.",
              answerKey:
                "Achievements: maintained independence throughout the European Scramble for Africa; established durable republican institutions; suppressed the Atlantic slave trade along its coast; extended territory including the accession of Maryland in Africa in 1857; developed export trade in coffee, sugar, palm oil and camwood; founded educational institutions. Problems: exclusion of the indigenous majority from citizenship and the franchise; territorial losses to Britain and France; chronic financial weakness and damaging foreign loans; a small settler population administering a large territory; economic dependence on a narrow range of exports; recurrent conflict with peoples of the interior. Award 2 marks each for three of each.",
              marks: 12,
            },
            {
              type: "ESSAY",
              prompt:
                "Assess the significance of the Constitution of 1847, considering both what it achieved and the divisions it created within Liberian society.",
              answerKey:
                "Award marks as follows: circumstances of drafting, including the Constitutional Convention, the role of Simon Greenleaf and the American model, 5 marks; accurate account of the main provisions — republican government, separation of powers, bicameral legislature, independent judiciary, Bill of Rights, prohibition of slavery, 8 marks; assessment of achievements, including the establishment of Africa's first republic, the durability of the institutions created, the guarantee of civil liberties, and the international standing that made recognition and the defence of sovereignty possible, 9 marks; analysis of the citizenship restriction, distinguishing the stated purpose of preventing white land acquisition from the practical effect of confining the franchise and public office to settlers and their descendants, 9 marks; discussion of the consequences of excluding the indigenous majority, including separate governance through indirect rule, resistance in the interior, and the long-term structural division of Liberian society, 9 marks; a balanced judgement holding achievement and exclusion together, 5 marks; organisation, dates and expression, 5 marks. A learner who treats the Constitution only as an achievement, or only as an instrument of exclusion, has answered half the question and should not exceed 25.",
              marks: 50,
            },
          ],
        },
      ],
    },
  ],
};
