import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester Two, Period V: Development of Other African States. The MoE CONTENTS
// list gives six top-level items, each rebuilt here as its own topic:
// (1) Kanem-Bornu, (2) the Hausa States, (3) the Mossi and Akan States,
// (4) the Yoruba states of Oyo and Benin, (5) iron technology and the Kongo
// (Bakongo) Empire, (6) the Monomotapa (Mutapa) Empire. Notes are rebuilt from
// OpenStax World History and LibreTexts. SOURCING NOTE (see report): OpenStax
// gives only brief coverage of Kanem-Bornu and the Hausa states, so those two
// topics are built from what the approved sources support plus the general
// trans-Saharan trade / Islam theme, and the thinness is flagged in the report.
export const historyG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Development of Other African States",
  summary:
    "Period V of the MoE Grade 10 History syllabus. Learners study other important African states — Kanem-Bornu and the Hausa city-states of the central Sudan, the Mossi and Akan states, the Yoruba states of Oyo and Benin, the ironworking Kingdom of Kongo, and the Mutapa (Monomotapa) empire of southern Africa — examining their origins, government, trade, art and the place of Islam.",
  topics: [
    {
      // source: OpenStax — World History Volume 2, 3.1 The Roots of African Trade (https://openstax.org/books/world-history-volume-2/pages/3-1-the-roots-of-african-trade) and Volume 1, 15.2 Medieval Sub-Saharan Africa (https://openstax.org/books/world-history-volume-1/pages/15-2-medieval-sub-saharan-africa)
      slug: "kanem-bornu",
      title: "The Kanem-Bornu Empire",
      objective:
        "By the end of the topic, learners should be able to describe the founding, growth and importance of Kanem-Bornu, and explain the role of trans-Saharan trade and Islam in its development.",
      estimatedMinutes: 120,
      notes: `## Location and setting

- **Kanem-Bornu** was a long-lasting empire of the **central Sudan**, based around **Lake Chad**.
- It grew where the **savanna belt** met the trade routes crossing the Sahara, linking the central Sudan to North Africa.

## Islam and trans-Saharan trade

- "By the thirteenth century, **Islam had spread into the region of Lake Chad and the Kingdom of Kanem by way of trans-Saharan trade**."
- Kanem-Bornu **maintained an active caravan trade with the states of North Africa** in the thirteenth century, exchanging the goods of the Sudan for those of the Mediterranean world.
- As in Ghana, Mali and Songhai, **long-distance trade** brought wealth, Islam and contact with the wider world.

## Rise, difficulty and revival

- **Kanem-Bornu dominated the central Sudan** and its caravan trade in the thirteenth century.
- In the **fourteenth century** it was **destabilised by revolts and rebellions**.
- It **regained its preeminence in the sixteenth century**, but by the end of that century its power was at an end.

## Trading links

- Kanem-Bornu had established **vital trading links with the Hausa kingdoms** to its west (studied in the next topic).
- A trade route connected the oasis town of **Ghadames** with the trade centres of the region.

## Importance in African history

- Kanem-Bornu shows the pattern of the **trading, Islamic state of the central Sudan**, parallel to the western Sudanic empires of Ghana, Mali and Songhai.
- Its long life — dominant in the thirteenth century, revived in the sixteenth — makes it one of Africa's most durable states.

## Common errors and misconceptions

- **Confusing Kanem-Bornu with the western empires** — it lay in the **central** Sudan around **Lake Chad**, not the western Sudan of Ghana/Mali.
- **Thinking Islam was forced by conquest here** — it spread mainly through **trans-Saharan trade**.
- **Believing it was short-lived** — it was dominant in the thirteenth century and revived in the sixteenth, a very long history.
- **Ignoring its trade links** — it traded with North Africa and had vital links with the **Hausa** states.

Sourcing note: the approved sources (OpenStax) give only brief coverage of Kanem-Bornu; the points above are limited to what those sources state, supported by the general trans-Saharan trade and Islam theme documented for the Sudan.`,
      workedExample: `**Question:** Explain how trans-Saharan trade and Islam shaped the development of Kanem-Bornu.

**Solution**

*Step 1 — the setting.*
**Kanem-Bornu** lay in the **central Sudan**, around **Lake Chad**, where the savanna met the routes crossing the Sahara.

*Step 2 — the arrival of Islam.*
"By the thirteenth century, Islam had spread into the region of **Lake Chad** and the Kingdom of **Kanem** by way of **trans-Saharan trade**." Islam came not by conquest but through **trade contact** with North Africa.

*Step 3 — the wealth of trade.*
Kanem-Bornu **maintained an active caravan trade with the states of North Africa** in the thirteenth century, and held vital trading links with the **Hausa** kingdoms to its west. This long-distance trade brought wealth and connected the central Sudan to the Mediterranean world.

*Step 4 — the pattern.*
Like Ghana, Mali and Songhai in the west, Kanem-Bornu was a **trading, Islamic Sudanic state**: it dominated in the thirteenth century, was destabilised by revolts in the fourteenth, and revived in the sixteenth.

**Conclusion:** trans-Saharan trade made Kanem-Bornu wealthy and connected, and it carried Islam into the central Sudan, so that trade and Islam together shaped Kanem-Bornu into one of Africa's most durable states.`,
      quiz: [
        { prompt: "Kanem-Bornu was based around which lake?", options: ["Lake Chad", "Lake Victoria", "Lake Malawi", "the Dead Sea"], correctIndex: 0, explanation: "It lay around Lake Chad in the central Sudan." },
        { prompt: "Kanem-Bornu was a state of the", options: ["central Sudan", "East African coast", "Nile delta", "Congo forest"], correctIndex: 0, explanation: "It lay in the central Sudan." },
        { prompt: "Islam spread into the Lake Chad region by the thirteenth century through", options: ["trans-Saharan trade", "European missionaries", "sea voyages from India", "Roman conquest"], correctIndex: 0, explanation: "Trade carried Islam into Kanem." },
        { prompt: "In the thirteenth century Kanem-Bornu maintained an active caravan trade with", options: ["the states of North Africa", "the Americas", "China directly", "Australia"], correctIndex: 0, explanation: "It traded with North Africa across the Sahara." },
        { prompt: "In the fourteenth century Kanem-Bornu was", options: ["destabilised by revolts and rebellions", "at its greatest height", "conquered by Rome", "abandoned entirely"], correctIndex: 0, explanation: "Revolts destabilised it in the 1300s." },
        { prompt: "Kanem-Bornu regained its preeminence in the", options: ["sixteenth century", "first century", "nineteenth century", "eighth century"], correctIndex: 0, explanation: "It revived in the 1500s." },
        { prompt: "Kanem-Bornu had vital trading links with which neighbours?", options: ["the Hausa kingdoms", "the Swahili city-states", "the Aksumites", "the Romans"], correctIndex: 0, explanation: "It traded with the Hausa states to its west." },
        { prompt: "A trade route linked the region to which oasis town?", options: ["Ghadames", "Timbuktu only", "Cairo only", "Kilwa"], correctIndex: 0, explanation: "Ghadames connected to the trade centres." },
        { prompt: "Kanem-Bornu is best described as a", options: ["trading, Islamic state of the central Sudan", "coastal Christian kingdom", "nomadic group with no state", "European colony"], correctIndex: 0, explanation: "It was a Sudanic trading, Islamic state." },
        { prompt: "Compared with Ghana and Mali, Kanem-Bornu lay in the", options: ["central Sudan, not the western Sudan", "same western Sudan", "East African coast", "Nile valley"], correctIndex: 0, explanation: "It was in the central Sudan." },
        { prompt: "Islam came to Kanem-Bornu mainly by", options: ["trade rather than conquest", "European armies", "sea raids", "forced conversion by Rome"], correctIndex: 0, explanation: "It spread through trans-Saharan trade." },
        { prompt: "Kanem-Bornu's long history shows it was", options: ["one of Africa's most durable states", "very short-lived", "never important", "a myth"], correctIndex: 0, explanation: "Dominant in the 13th c, revived in the 16th." },
        { prompt: "The goods of the Sudan were exchanged for those of", options: ["the Mediterranean world", "the Arctic", "the Americas", "East Asia only"], correctIndex: 0, explanation: "Trans-Saharan trade linked Sudan and the Mediterranean." },
        { prompt: "By the end of the sixteenth century, Kanem-Bornu's power was", options: ["at an end", "at its peak", "just beginning", "unchanged"], correctIndex: 0, explanation: "Its power ended by the late 1500s." },
        { prompt: "Kanem-Bornu parallels which western states in type?", options: ["Ghana, Mali and Songhai", "the Swahili city-states", "Aksum and Kush", "Rome and Greece"], correctIndex: 0, explanation: "All were trading, Islamic Sudanic states." },
        { prompt: "Long-distance trade brought Kanem-Bornu", options: ["wealth, Islam and wider contact", "isolation", "the end of farming", "no benefit"], correctIndex: 0, explanation: "Trade brought wealth, Islam and contact." },
        { prompt: "The central Sudan around Lake Chad is part of Africa's", options: ["savanna belt south of the Sahara", "tropical rainforest", "Mediterranean coast", "Arctic zone"], correctIndex: 0, explanation: "It lies in the Sudanic savanna belt." },
        { prompt: "Kanem-Bornu's trade with North Africa crossed the", options: ["Sahara", "Atlantic", "Indian Ocean", "Red Sea only"], correctIndex: 0, explanation: "Caravans crossed the Sahara." },
        { prompt: "The kingdom that Islam first spread into in the region was", options: ["Kanem", "Kongo", "Benin", "Oyo"], correctIndex: 0, explanation: "Islam spread into the Kingdom of Kanem." },
        { prompt: "Which statement about Kanem-Bornu's coverage in approved sources is true?", options: ["Approved sources cover it only briefly", "It is covered in enormous detail", "It is never mentioned", "It is only in fiction"], correctIndex: 0, explanation: "OpenStax gives brief coverage; detail is limited." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the location and setting of Kanem-Bornu.", answerKey: "Kanem-Bornu was an empire of the central Sudan, based around Lake Chad, where the savanna belt met the trans-Saharan trade routes linking the central Sudan to North Africa. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how Islam reached Kanem-Bornu and its link to trade.", answerKey: "By the thirteenth century Islam had spread into the Lake Chad region and the Kingdom of Kanem by way of trans-Saharan trade; Kanem-Bornu maintained an active caravan trade with North Africa, so Islam came through trade contact rather than conquest. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Kanem-Bornu regained its preeminence in the", options: ["sixteenth century", "first century", "eighth century", "nineteenth century"], correctIndex: 0, answerKey: "It revived in the sixteenth century. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Outline the rise, difficulty and revival of Kanem-Bornu.", answerKey: "It dominated the central Sudan and its caravan trade in the thirteenth century; it was destabilised by revolts and rebellions in the fourteenth century; it regained preeminence in the sixteenth century, but by the end of that century its power was at an end. Award 2 marks per phase.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the development and importance of the Kanem-Bornu empire, referring to trade and Islam.", answerKey: "Award marks for: location in the central Sudan around Lake Chad, 4 marks; the spread of Islam via trans-Saharan trade by the thirteenth century, 5 marks; the active caravan trade with North Africa and links with the Hausa, 5 marks; the rise, revolts and sixteenth-century revival, 5 marks; its importance as a durable, trading Islamic Sudanic state parallel to Ghana/Mali/Songhai, 4 marks. Note that a full answer is limited by the brief source coverage; reward accurate use of the sourced points.", marks: 23 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 3.2 The Songhai Empire (Kano in Hausaland) (https://openstax.org/books/world-history-volume-2/pages/3-2-the-songhai-empire) and Volume 1, 15.2 Medieval Sub-Saharan Africa (https://openstax.org/books/world-history-volume-1/pages/15-2-medieval-sub-saharan-africa)
      slug: "the-hausa-states",
      title: "The Hausa City-States",
      objective:
        "By the end of the topic, learners should be able to describe the Hausa city-states of the central Sudan, and explain the role of trade and Islam in their development.",
      estimatedMinutes: 110,
      notes: `## The Hausa city-states

- The **Hausa** people of the central Sudan (in what is now northern **Nigeria**) organised themselves into a group of **city-states**, each centred on a walled town.
- The best-known Hausa town named in the sources is **Kano**, in **Hausaland**.

## Trade and location

- The Hausa states lay on the **trade routes of the central Sudan**, west of Kanem-Bornu.
- **Bornu had established vital trading links with the Hausa kingdoms** to its west, and a trade route connected the oasis town of **Ghadames** with the trade centres of the region.
- Their position let the Hausa trade the goods of the Sudan northward across the Sahara and southward to the forest.

## Part of the Songhai sphere

- The Hausa lands lay at the eastern edge of the great Sudanic empires: under **Askia Muhammad**, the Songhai Empire "stretched from **Kano in Hausaland** in the south-east ... to Taghaza ... and modern Senegal on the Atlantic coast."
- The Hausa states were thus drawn into the wider network of Sudanic trade and Islam.

## Islam among the Hausa

- As with the other central-Sudanic states, **Islam** spread among the Hausa through **trans-Saharan trade** and the influence of neighbouring Muslim states.

## Importance in African history

- The Hausa city-states show a different pattern of state — not one large empire but a **cluster of independent trading city-states**, comparable in form to the Swahili coast, but inland.
- Their walled towns and craft production made them important centres of commerce in the central Sudan.

## Common errors and misconceptions

- **Thinking the Hausa formed one empire** — they were a group of **independent city-states**, not a single kingdom.
- **Placing them in the western Sudan** — the Hausa lay in the **central** Sudan, in what is now northern Nigeria, west of Kanem-Bornu.
- **Assuming they were isolated** — they had vital trading links with **Bornu** and lay within the Songhai trade sphere (Kano).
- **Believing Islam was imposed by force** — it spread mainly through **trade and neighbouring influence**.

Sourcing note: the approved sources (OpenStax) mention the Hausa and Kano only briefly; the points above are limited to what those sources state, supported by the general central-Sudanic trade and Islam theme. Named detail beyond this is not drawn from approved sources.`,
      workedExample: `**Question:** Describe the Hausa city-states and explain the role of trade in their development.

**Solution**

*Step 1 — what they were.*
The **Hausa** of the central Sudan (now northern Nigeria) formed a group of **independent city-states**, each centred on a walled town such as **Kano** — not a single empire.

*Step 2 — their location and trade.*
They lay on the **trade routes of the central Sudan**, west of **Kanem-Bornu**, which had established **vital trading links with the Hausa kingdoms**. A route ran through the oasis of **Ghadames**, connecting them to the trans-Saharan network.

*Step 3 — the wider network.*
The Hausa lands lay within the reach of the great Sudanic empires: under **Askia Muhammad**, Songhai stretched to **Kano in Hausaland**. Through this network came trade goods and **Islam**.

*Step 4 — their importance.*
Trade made the Hausa walled towns important **commercial centres**, a cluster of city-states comparable in form to the Swahili coast but inland.

**Conclusion:** the Hausa city-states were independent walled trading towns of the central Sudan whose development rested on their place in the trans-Saharan and Sudanic trade network, which also brought them Islam.`,
      quiz: [
        { prompt: "The Hausa organised themselves into", options: ["a group of independent city-states", "one large empire", "a coastal republic", "a nomadic confederation with no towns"], correctIndex: 0, explanation: "They were independent city-states." },
        { prompt: "The best-known Hausa town named in the sources is", options: ["Kano", "Kilwa", "Timbuktu", "Gao"], correctIndex: 0, explanation: "Kano lay in Hausaland." },
        { prompt: "The Hausa states lay in which part of the Sudan?", options: ["the central Sudan", "the western Sudan", "the eastern coast", "the Nile valley"], correctIndex: 0, explanation: "They were in the central Sudan (now northern Nigeria)." },
        { prompt: "The Hausa lay west of which empire?", options: ["Kanem-Bornu", "Aksum", "Kush", "Rome"], correctIndex: 0, explanation: "Bornu lay to their east and traded with them." },
        { prompt: "Bornu had established vital trading links with the", options: ["Hausa kingdoms", "Swahili coast", "Romans", "Aksumites"], correctIndex: 0, explanation: "Bornu traded with the Hausa to its west." },
        { prompt: "Under Askia Muhammad, Songhai stretched to which Hausa town?", options: ["Kano", "Mombasa", "Meroe", "Sofala"], correctIndex: 0, explanation: "Songhai reached Kano in Hausaland." },
        { prompt: "Each Hausa city-state was centred on a", options: ["walled town", "harbour", "pyramid", "monastery"], correctIndex: 0, explanation: "Walled towns were the Hausa centres." },
        { prompt: "Islam spread among the Hausa mainly through", options: ["trade and neighbouring influence", "European missionaries", "sea raids", "Roman conquest"], correctIndex: 0, explanation: "Trade and neighbours carried Islam." },
        { prompt: "A trade route connected the Hausa region to which oasis town?", options: ["Ghadames", "Cairo only", "Kilwa", "Napata"], correctIndex: 0, explanation: "Ghadames linked to the trade centres." },
        { prompt: "In form, the Hausa city-states are most comparable to", options: ["the Swahili coast, but inland", "the Roman Empire", "ancient Egypt", "the Kongo kingdom"], correctIndex: 0, explanation: "Both were clusters of trading city-states." },
        { prompt: "The Hausa traded the goods of the Sudan", options: ["northward across the Sahara and southward to the forest", "only within one town", "across the Atlantic", "nowhere"], correctIndex: 0, explanation: "They linked Saharan and forest trade." },
        { prompt: "The Hausa states were", options: ["independent from one another", "a single unified kingdom", "part of Rome", "ruled from Mecca"], correctIndex: 0, explanation: "They were independent city-states." },
        { prompt: "The Hausa lands lay at the eastern edge of which empire under Askia?", options: ["Songhai", "Ghana", "Kush", "Mutapa"], correctIndex: 0, explanation: "Songhai reached Kano in Hausaland." },
        { prompt: "Modern country where the Hausa lands lie is", options: ["Nigeria", "Kenya", "Egypt", "Morocco"], correctIndex: 0, explanation: "The Hausa are in northern Nigeria." },
        { prompt: "The Hausa walled towns were important as", options: ["commercial centres", "polar ports", "silk farms", "Roman forts"], correctIndex: 0, explanation: "Trade made them commercial centres." },
        { prompt: "A common error is to think the Hausa", options: ["formed one empire (they were city-states)", "traded with Bornu", "were in the central Sudan", "adopted Islam"], correctIndex: 0, explanation: "They were city-states, not one empire." },
        { prompt: "The Hausa were connected to the wider world through", options: ["the trans-Saharan and Sudanic trade network", "isolation", "Atlantic shipping only", "no trade"], correctIndex: 0, explanation: "Trade networks connected them." },
        { prompt: "Approved-source coverage of the Hausa is", options: ["brief", "extremely detailed", "absent", "only fictional"], correctIndex: 0, explanation: "OpenStax mentions them only briefly." },
        { prompt: "The Hausa city-states show a pattern of", options: ["several independent trading towns rather than one empire", "a single vast empire", "a coastal Christian kingdom", "a nomadic society with no towns"], correctIndex: 0, explanation: "A cluster of city-states, not one empire." },
        { prompt: "Which was NOT a feature of the Hausa states?", options: ["A single hereditary emperor over all of them", "Walled towns", "Trade with Bornu", "The spread of Islam"], correctIndex: 0, explanation: "They had no single emperor; they were independent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the political form of the Hausa and where they were located.", answerKey: "The Hausa formed a group of independent city-states (not one empire), each centred on a walled town such as Kano, in the central Sudan in what is now northern Nigeria, west of Kanem-Bornu. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how trade shaped the Hausa city-states.", answerKey: "They lay on the central-Sudanic trade routes; Bornu had vital trading links with them and a route ran through Ghadames; under Askia, Songhai reached Kano in Hausaland. Trade made their walled towns commercial centres and carried Islam to them. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The best-known Hausa town, reached by Songhai under Askia, was", options: ["Kano", "Kilwa", "Gao", "Sofala"], correctIndex: 0, answerKey: "Kano in Hausaland. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "In form, how did the Hausa states differ from an empire like Mali?", answerKey: "The Hausa were a cluster of independent city-states, each centred on a walled town, rather than one large centralised empire like Mali; they are comparable in form to the Swahili city-states but inland. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the Hausa city-states and the role of trade and Islam in their development.", answerKey: "Award marks for: the Hausa as independent walled city-states of the central Sudan (Kano), 5 marks; their place on the trans-Saharan trade routes and links with Bornu (Ghadames), 6 marks; their place in the Songhai sphere (Kano) and the spread of Islam through trade, 5 marks; their importance as commercial centres and comparison with the Swahili coast, 4 marks. Note the answer is limited by brief source coverage; reward accurate use of sourced points. Do not credit invented named detail.", marks: 20 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — African American History and Culture, 1.4 West Africa 1300–1800AD (Akan/Asante) (https://human.libretexts.org/Bookshelves/History/National_History/African_American_History_and_Culture/01%3A_African_Origins__History_and_Culture/1.04%3A_West_Africa_1300__1800AD) and OpenStax World History Volume 2, 3.2 The Songhai Empire (Mossi) (https://openstax.org/books/world-history-volume-2/pages/3-2-the-songhai-empire)
      slug: "mossi-and-akan-states",
      title: "The Mossi and Akan States",
      objective:
        "By the end of the topic, learners should be able to describe the origin and character of the Mossi states and the Akan states, and explain their relationship to the Sudanic empires and to trade.",
      estimatedMinutes: 110,
      notes: `## The Mossi states

- The **Mossi** were a people of the region south of the great bend of the Niger, on the southern edge of the Sudanic empires.
- They were known as **cavalry raiders and fierce opponents** of the Muslim Sudanic empires:
- The Mossi resisted the spread of **Islam** and kept their traditional religion.
- They were among the **opponents that weakened Mali** in its decline.
- Under **Askia Muhammad**, Songhai in **1498 declared a holy war (jihad) against the non-Muslim Mossi** — showing the Mossi as a distinct, non-Muslim power on the empire's frontier.

## The Akan states

- The **Akan** peoples lived in the **forest region** of West Africa, in what is today Ghana and Côte d'Ivoire.
- "By the **15th century** the Akan peoples, who included the Baule, and Twi-speaking **Asante**, reached dominance in the central region."
- The Akan lands were rich in **gold**; Europeans later called parts of the coast the **Gold Coast** (as well as the Ivory Coast and Grain Coast), after the goods traded there.
- The Akan produced gold and traded it both northward to the Sudanic empires and, later, to Europeans on the coast.

## Two different environments

| State | Environment | Known for |
| --- | --- | --- |
| Mossi | Savanna, southern edge of the Sudan | Cavalry, resisting Islam, raiding the empires |
| Akan | Forest, near the coast | Gold, forest trade, Twi-speaking Asante |

## Importance in African history

- The Mossi show that not all Sudanic peoples accepted Islam or the great empires — some remained **independent and traditional**.
- The Akan show the wealth of the **forest and coastal** peoples, whose gold fed both the trans-Saharan trade and, later, the Atlantic trade with Europeans.

## Common errors and misconceptions

- **Thinking all West Africans were Muslim** — the **Mossi** resisted Islam and kept traditional religion.
- **Assuming the Mossi were weak** — their **cavalry** raided and helped weaken Mali, and Songhai launched a holy war against them.
- **Placing the Akan in the savanna** — the Akan were **forest** peoples near the coast, rich in **gold**.
- **Confusing the Gold Coast with modern Ghana's ancient empire** — the "Gold Coast" name came from Akan **gold** traded on the coast.

Sourcing note: approved-source coverage of the Mossi and Akan is limited; the points above are drawn from what OpenStax (on the Mossi and Songhai) and LibreTexts (on the Akan/Asante) state.`,
      workedExample: `**Question:** Contrast the Mossi and Akan states, and explain their relationship to trade and the Sudanic empires.

**Solution**

*Step 1 — the Mossi.*
The **Mossi** lived on the southern edge of the Sudan and were known as **cavalry raiders** who **resisted Islam** and kept their traditional religion. They helped **weaken Mali**, and under **Askia Muhammad**, Songhai declared a **holy war against the non-Muslim Mossi in 1498** — marking them as a distinct, independent power on the frontier.

*Step 2 — the Akan.*
The **Akan** were **forest** peoples of what is now Ghana and Côte d'Ivoire. By the **15th century** the Akan (including the Twi-speaking **Asante**) reached dominance in the central region. Their lands were rich in **gold**, and Europeans later called the coast the **Gold Coast**.

*Step 3 — the contrast.*
The Mossi were **savanna cavalry** who fought the Muslim empires; the Akan were **forest gold-producers** who fed the trade. One resisted the empires; the other supplied the gold that made the empires and later the Europeans rich.

*Step 4 — the link to trade.*
Akan **gold** flowed north across the Sahara to the Sudanic empires and later to Europeans on the coast, while the Mossi remained an independent power raiding the trading empires.

**Conclusion:** the Mossi and Akan show two contrasting African states — the traditional cavalry Mossi resisting the Muslim empires, and the gold-rich forest Akan feeding the trade that enriched both the Sudanic empires and, later, the Europeans.`,
      quiz: [
        { prompt: "The Mossi were known as", options: ["cavalry raiders who resisted Islam", "coastal traders", "Christian monks", "Swahili sailors"], correctIndex: 0, explanation: "They were cavalry who kept their traditional religion." },
        { prompt: "The Mossi helped to weaken which empire in its decline?", options: ["Mali", "Rome", "Aksum", "Kongo"], correctIndex: 0, explanation: "Mossi opposition weakened Mali." },
        { prompt: "In 1498 Songhai declared a holy war against the", options: ["non-Muslim Mossi", "Swahili coast", "Romans", "Akan only"], correctIndex: 0, explanation: "Askia Muhammad launched a jihad against the Mossi." },
        { prompt: "The Akan peoples lived in the", options: ["forest region near the coast", "central Sudan savanna", "Nile valley", "Ethiopian highlands"], correctIndex: 0, explanation: "The Akan were forest peoples." },
        { prompt: "By the 15th century, which Akan people reached dominance?", options: ["the Twi-speaking Asante", "the Romans", "the Bantu of Kongo", "the Aksumites"], correctIndex: 0, explanation: "The Twi-speaking Asante rose to dominance." },
        { prompt: "The Akan lands were especially rich in", options: ["gold", "iron only", "coal", "silk"], correctIndex: 0, explanation: "Akan gold was famous." },
        { prompt: "Europeans called part of the Akan coast the", options: ["Gold Coast", "Silk Coast", "Iron Coast", "Coral Coast"], correctIndex: 0, explanation: "After the gold traded there." },
        { prompt: "The Mossi kept their", options: ["traditional religion, resisting Islam", "Christian faith", "Buddhist faith", "no religion"], correctIndex: 0, explanation: "They resisted Islam." },
        { prompt: "Akan gold flowed", options: ["north to the Sudanic empires and later to Europeans", "only into the sea", "to the Arctic", "nowhere"], correctIndex: 0, explanation: "Gold fed both trans-Saharan and Atlantic trade." },
        { prompt: "The Mossi lived on the ___ edge of the Sudanic empires.", options: ["southern", "northern", "eastern coast", "Mediterranean"], correctIndex: 0, explanation: "They were on the southern edge." },
        { prompt: "The Akan included which people besides the Asante?", options: ["the Baule", "the Zulu", "the Swahili", "the Berbers"], correctIndex: 0, explanation: "The Baule were among the Akan." },
        { prompt: "The Mossi were a threat mainly because of their", options: ["cavalry", "navy", "iron ships", "pyramids"], correctIndex: 0, explanation: "Their cavalry raided the empires." },
        { prompt: "Which environment did the Akan occupy?", options: ["forest", "desert", "Arctic", "high mountains"], correctIndex: 0, explanation: "The Akan were forest peoples." },
        { prompt: "Other names Europeans gave the West African coast included", options: ["the Ivory Coast and Grain Coast", "the Coral Sea", "the Barbary Coast only", "the Skeleton Coast"], correctIndex: 0, explanation: "Named after goods: ivory, grain and gold." },
        { prompt: "The Mossi show that", options: ["not all West Africans accepted Islam or the empires", "everyone was Muslim", "there were no independent peoples", "the forest had no gold"], correctIndex: 0, explanation: "Some peoples stayed independent and traditional." },
        { prompt: "The Akan reached dominance in the central region by the", options: ["15th century", "1st century", "19th century", "8th century BCE"], correctIndex: 0, explanation: "By the 15th century the Akan dominated." },
        { prompt: "The Twi-speaking people among the Akan were the", options: ["Asante", "Mossi", "Hausa", "Shona"], correctIndex: 0, explanation: "The Asante spoke Twi." },
        { prompt: "The Akan contribution to the wider economy was mainly", options: ["gold", "salt", "horses", "porcelain"], correctIndex: 0, explanation: "Akan gold fed the trade." },
        { prompt: "A common error is to place the Akan in the", options: ["savanna (they were forest peoples)", "forest", "coast", "gold trade"], correctIndex: 0, explanation: "The Akan were forest, not savanna, peoples." },
        { prompt: "The Mossi and Akan together show", options: ["contrasting African states — traditional cavalry vs gold-rich forest traders", "identical societies", "European colonies", "two Swahili city-states"], correctIndex: 0, explanation: "They contrast in environment, religion and role." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the character of the Mossi and their relationship with the Sudanic empires.", answerKey: "The Mossi were cavalry raiders on the southern edge of the Sudan who resisted Islam and kept their traditional religion; they helped weaken Mali, and under Askia Muhammad, Songhai declared a holy war against the non-Muslim Mossi in 1498. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the Akan states and their importance.", answerKey: "The Akan were forest peoples of what is now Ghana and Côte d'Ivoire; by the 15th century the Twi-speaking Asante (with the Baule) reached dominance; their lands were rich in gold, which fed the trans-Saharan and later Atlantic trade, and Europeans called the coast the Gold Coast. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In 1498, Songhai under Askia declared a holy war against the", options: ["Mossi", "Akan", "Swahili", "Kongo"], correctIndex: 0, answerKey: "The non-Muslim Mossi. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Contrast the environment and role of the Mossi and the Akan.", answerKey: "The Mossi were savanna cavalry on the southern edge of the Sudan who resisted the Muslim empires; the Akan were forest peoples near the coast, rich in gold, who supplied the trade. One resisted the empires; the other fed them. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the origin and character of the Mossi and Akan states and their place in West African history.", answerKey: "Award marks for: the Mossi as traditional cavalry resisting Islam and the empires (weakening Mali; Songhai's 1498 jihad), 8 marks; the Akan as forest gold-producers, the rise of the Twi-speaking Asante by the 15th century, and the Gold Coast, 8 marks; the contrast between them and their links to trade, 5 marks; conclusion, 2 marks. Reward accurate use of the sourced points; do not credit invented detail.", marks: 23 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — Early World Civilizations (Lumen), 11.16 The Yoruba States (https://human.libretexts.org/Bookshelves/History/World_History/Early_World_Civilizations_(Lumen)/11:_African_Civilizations/11.16:_The_Yoruba_States)
      slug: "yoruba-states-oyo-and-benin",
      title: "The Yoruba States: Oyo and Benin",
      objective:
        "By the end of the topic, learners should be able to describe the origins and government of the Yoruba states of Ife, Oyo and Benin, and explain their cultural and artistic contributions.",
      estimatedMinutes: 130,
      notes: `## The Yoruba and Ile-Ife

- The **Yoruba** peoples of the forest of what is now south-western **Nigeria** began to form **city-states** by the **12th century**, of which **Ife, Oyo and Benin** dominated.
- **Ile-Ife** emerged as a powerful kingdom by about the **8th century CE** and was regarded as the **cultural and spiritual homeland** of Yorubaland.
- Ife became famous for its **naturalistic art** — "bronze as well as stone and terracotta sculptures, which reached their peak of artistic expression between **1200 and 1400**." King **Obalufon II** is identified as the Yoruba **patron deity of brass casting, weaving and regalia**.

## The Oyo Empire

- **Oranyan**, a prince of Ile-Ife, **founded Oyo around 1300** and became its first **Alaafin** (ruler).
- After defeats by the **Nupe around 1535**, the Yoruba rebuilt Oyo into an expansive empire in the **17th century**; by **1680 the Oyo Empire spanned over 150,000 square kilometres**.
- **Government with checks and balances:** Oyo was "not a hereditary monarchy, nor an absolute one." The **Oyo Mesi** (seven councillors of state) and the **Ogboni** religious society **balanced the Alaafin's authority** — an early system of checks on royal power.
- **Economy:** Oyo became "the southern emporium of the trans-Saharan trade," dealing in **salt, leather, kola nuts, ivory and slaves**.
- Internal conflicts weakened Oyo in the late 18th century, and "the Oyo state ceased to exist as any sort of power in **1896**."

## The Kingdom of Benin

- **Benin**, in southern **Nigeria**, east of Yorubaland and west of the Niger River, also **claimed to have obtained kingship from the Yoruba city of Ife**.
- Benin, Oyo and Ife shared a **high level of artistic achievement** — especially in **ivory, wood, brass and bronze sculpture**.

## Cultural and artistic contributions

- The Yoruba states are renowned for **art**: the naturalistic bronzes and terracottas of Ife, and the brass and bronze sculpture of Benin — among the finest artistic traditions of Africa.
- Oyo contributed a model of **balanced government** with councils checking the ruler's power.

## Common errors and misconceptions

- **Thinking these were primitive villages** — Ife, Oyo and Benin were **sophisticated city-states** with fine art and, in Oyo, checks on royal power.
- **Believing the Alaafin was an absolute king** — the **Oyo Mesi** and **Ogboni** balanced his authority.
- **Confusing Ife and Oyo** — **Ife** was the older spiritual and artistic homeland; **Oyo** the later political and military empire.
- **Ignoring Benin's link to Ife** — Benin claimed its kingship came from **Ife**.`,
      workedExample: `**Question:** Describe the Yoruba states of Ife, Oyo and Benin, and explain their government and artistic contributions.

**Solution**

*Step 1 — Ife, the homeland.*
The **Yoruba** formed city-states by the **12th century**. **Ile-Ife**, powerful by about the **8th century CE**, was the **spiritual and artistic homeland**, famous for **naturalistic bronze, stone and terracotta** sculpture (peaking 1200–1400).

*Step 2 — Oyo, the empire.*
**Oranyan** of Ife **founded Oyo around 1300** as its first **Alaafin**. Rebuilt in the 17th century, Oyo spanned **over 150,000 square kilometres by 1680**.

*Step 3 — Oyo's balanced government.*
Oyo was **not an absolute monarchy**: the **Oyo Mesi** (seven councillors) and the **Ogboni** society **checked the Alaafin's power** — an early system of checks and balances.

*Step 4 — Benin and the art.*
**Benin**, in southern Nigeria, claimed its kingship from **Ife** and, with Oyo and Ife, produced a **high level of art** in **ivory, wood, brass and bronze**. Oyo also traded as "the southern emporium of the trans-Saharan trade."

**Conclusion:** the Yoruba states — spiritual Ife, imperial Oyo with its checks on royal power, and artistic Benin — were sophisticated city-states whose greatest contributions were their **fine sculpture** and Oyo's **balanced government**.`,
      quiz: [
        { prompt: "The Yoruba began forming city-states by the", options: ["12th century", "19th century", "1st century", "8th century BCE"], correctIndex: 0, explanation: "By the 12th century Ife, Oyo and Benin dominated." },
        { prompt: "The spiritual and artistic homeland of the Yoruba was", options: ["Ile-Ife", "Oyo", "Benin", "Kano"], correctIndex: 0, explanation: "Ife was the cultural homeland." },
        { prompt: "Ife was famous for its", options: ["naturalistic bronze and terracotta sculpture", "iron ships", "pyramids", "silk"], correctIndex: 0, explanation: "Its sculpture peaked between 1200 and 1400." },
        { prompt: "Oyo was founded around 1300 by", options: ["Oranyan", "Mansa Musa", "Sunni Ali", "Ezana"], correctIndex: 0, explanation: "Oranyan, a prince of Ife, founded Oyo." },
        { prompt: "The ruler of Oyo was called the", options: ["Alaafin", "Mansa", "Askia", "Oba of Benin"], correctIndex: 0, explanation: "The Alaafin ruled Oyo." },
        { prompt: "By 1680 the Oyo Empire spanned over", options: ["150,000 square kilometres", "150 square kilometres", "1,500 square kilometres", "the whole continent"], correctIndex: 0, explanation: "Over 150,000 square kilometres." },
        { prompt: "The council that checked the Alaafin's power was the", options: ["Oyo Mesi", "Roman Senate", "Oba's court", "Sanhaja"], correctIndex: 0, explanation: "The Oyo Mesi balanced the Alaafin." },
        { prompt: "The religious society that also balanced royal power was the", options: ["Ogboni", "Almoravids", "Jesuits", "Ogboni was not involved"], correctIndex: 0, explanation: "The Ogboni society checked the Alaafin." },
        { prompt: "Oyo was described as the southern emporium of the", options: ["trans-Saharan trade", "Indian Ocean trade", "Atlantic whaling", "silk road"], correctIndex: 0, explanation: "It was a great southern trade centre." },
        { prompt: "The Oyo state ceased to exist as a power in", options: ["1896", "1300", "1535", "1680"], correctIndex: 0, explanation: "Oyo ended as a power in 1896." },
        { prompt: "The Kingdom of Benin lay in", options: ["southern Nigeria, east of Yorubaland", "the Sahara", "East Africa", "the Nile delta"], correctIndex: 0, explanation: "Benin was in southern Nigeria." },
        { prompt: "Benin claimed to have obtained its kingship from", options: ["the Yoruba city of Ife", "Rome", "Kilwa", "Songhai"], correctIndex: 0, explanation: "Benin traced its kingship to Ife." },
        { prompt: "The Yoruba states are especially renowned for their", options: ["art (ivory, wood, brass and bronze)", "iron ships", "glass towers", "coal mining"], correctIndex: 0, explanation: "Their sculpture is world-famous." },
        { prompt: "Oyo's government is best described as", options: ["not absolute — checked by councils", "an absolute monarchy", "a republic with no king", "ruled from Mecca"], correctIndex: 0, explanation: "The Oyo Mesi and Ogboni checked the king." },
        { prompt: "Oyo suffered defeats around 1535 by the", options: ["Nupe", "Romans", "Portuguese", "Mossi"], correctIndex: 0, explanation: "The Nupe defeated Oyo around 1535." },
        { prompt: "King Obalufon II became the patron deity of", options: ["brass casting, weaving and regalia", "war and iron", "the sea", "the Nile"], correctIndex: 0, explanation: "He patronised Ife's art traditions." },
        { prompt: "Ife's art reached its peak between", options: ["1200 and 1400", "1 and 100 CE", "1800 and 1900", "800 and 900 BCE"], correctIndex: 0, explanation: "Its sculpture peaked 1200–1400." },
        { prompt: "Goods traded by Oyo included", options: ["salt, leather, kola nuts and ivory", "porcelain and silk", "coal and steel", "printed books"], correctIndex: 0, explanation: "Oyo dealt in salt, leather, kola nuts, ivory and slaves." },
        { prompt: "Which was the older, spiritual centre, and which the later empire?", options: ["Ife older/spiritual; Oyo later/imperial", "Oyo older; Ife later", "Benin older; Ife later", "they were the same"], correctIndex: 0, explanation: "Ife came first as homeland; Oyo rose later." },
        { prompt: "The Yoruba city-states show that African societies had", options: ["sophisticated art and balanced government", "no art", "no government", "no cities"], correctIndex: 0, explanation: "Fine art and checks on power mark them." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the importance of Ile-Ife to the Yoruba.", answerKey: "Ile-Ife, powerful by about the 8th century CE, was the cultural and spiritual homeland of Yorubaland; it was famous for naturalistic bronze, stone and terracotta sculpture (peaking 1200–1400), and Benin claimed its kingship from Ife. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the system of checks and balances in the Oyo Empire.", answerKey: "Oyo was not a hereditary or absolute monarchy: the Oyo Mesi (seven councillors of state) and the Ogboni religious society balanced the authority of the Alaafin (the ruler). Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The ruler of the Oyo Empire was called the", options: ["Alaafin", "Mansa", "Askia", "Oba"], correctIndex: 0, answerKey: "The Alaafin ruled Oyo. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the cultural and artistic contributions of the Yoruba states.", answerKey: "Fine naturalistic bronze, stone and terracotta sculpture at Ife; brass and bronze and ivory sculpture at Benin; and Oyo's model of balanced government with councils checking the ruler. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the origins, government and artistic contributions of the Yoruba states of Ife, Oyo and Benin.", answerKey: "Award marks for: the Yoruba city-states from the 12th century and Ife as spiritual/artistic homeland (8th century, sculpture 1200–1400), 6 marks; Oyo's founding by Oranyan (c.1300), rebuilding and extent (150,000 sq km by 1680), 5 marks; Oyo's checks and balances (Alaafin, Oyo Mesi, Ogboni) and trade, 6 marks; Benin's link to Ife and the shared artistic achievement in ivory/brass/bronze, 5 marks; conclusion, 2 marks.", marks: 24 },
      ],
    },
    {
      // source: LibreTexts (Humanities) — African American History (Lumen), 1.5 West Central Africa 14th–18th Centuries (https://human.libretexts.org/Bookshelves/History/National_History/Book:_African_American_History_(Lumen)/01:_African_Origins__History_and_Culture/1.05:_West_Central_Africa_14th__18th_Centuries) and OpenStax World History Volume 1, 15.1 Culture and Society in Medieval Africa (ironworking) (https://openstax.org/books/world-history-volume-1/pages/15-1-culture-and-society-in-medieval-africa)
      slug: "iron-technology-and-the-kongo-empire",
      title: "Iron Technology and the Kingdom of Kongo",
      objective:
        "By the end of the topic, learners should be able to explain the role of iron technology in Bantu Africa and describe the founding, organisation and craft of the Kingdom of Kongo, and the impact of the slave trade on it.",
      estimatedMinutes: 130,
      notes: `## Iron technology and the Bantu

- **Ironworking** was central to the growth of African societies south of the Sahara.
- **Bantu-speaking** peoples, migrating across Africa possibly since as early as **3000 BCE**, acquired **ironworking technology from the Nok people**.
- With iron tools and weapons, the Bantu **expanded and settled** across central and southern Africa (especially between about **500 and 1000 CE**), improving farming and defence.
- Iron technology thus underlay the rise of the Bantu kingdoms of central and southern Africa — including **Kongo**.

## The founding of the Kingdom of Kongo

- The **Kingdom of Kongo** (the **Bakongo**) was founded by **Ne Lukeni Kia Nzinga**, roughly three centuries before its later destruction (by the Portuguese) in **1665**.
- It was "an organized, stable, and politically centralized society based on a subsistence economy."
- By **1600**, Kongo "dominated a region more than half the size of England," stretching from north of Loango to northern Angola and from the Atlantic inland.

## Government and craft

- Authority was **hierarchical**: provinces, districts and villages each had **chiefs**; **tribute flowed upward** to the King of the Kongo and **rewards flowed downward**.
- Each regional group **specialised in distinct crafts**, including **weaving, basket making, potting and iron working**.
- The economy exchanged natural resources, agricultural products, textiles and other goods, using **cowrie shells** as currency.
- The Bakongo had a **matrilineal** social organisation and a shared cosmological worldview, and used a **lingua franca** (trade language) across regions.

## The slave trade and the fall of Kongo

- Portuguese contact drew Kongo into the **transatlantic slave trade**.
- The slave trade "destroyed old lineages and kinship ties upon which the basis of social order and organization was maintained."
- Between **1517 and 1700**, about **69 per cent of all African people transported in the transatlantic slave trade** came from **West Central Africa** — the region of Kongo.
- The kingdom was finally **destroyed by the Portuguese in 1665**.

## Common errors and misconceptions

- **Underrating iron** — ironworking (from the Nok) enabled the **Bantu expansion** and the rise of kingdoms like Kongo.
- **Thinking Kongo was disorganised** — it was a **centralised, hierarchical** state with tribute flowing up and rewards down.
- **Believing the slave trade barely touched Kongo** — West Central Africa supplied about **69 per cent** of transatlantic captives (1517–1700), devastating Kongo's social order.
- **Assuming the Portuguese only traded peacefully** — they **destroyed the kingdom in 1665**.`,
      workedExample: `**Question:** Explain the role of iron technology in Bantu Africa and describe the Kingdom of Kongo, including the impact of the slave trade.

**Solution**

*Step 1 — iron and the Bantu.*
**Ironworking**, acquired by the **Bantu** from the **Nok people**, let the Bantu expand and settle across central and southern Africa (especially 500–1000 CE), improving farming and defence. This technology underlay the Bantu kingdoms — including **Kongo**.

*Step 2 — the Kingdom of Kongo.*
Kongo (the **Bakongo**) was founded by **Ne Lukeni Kia Nzinga**, about three centuries before 1665. It was an **organised, centralised** state; by **1600** it dominated a region **more than half the size of England**.

*Step 3 — government and craft.*
Authority was **hierarchical** — chiefs of provinces, districts and villages, with **tribute flowing up** to the king and **rewards flowing down**. Regions specialised in crafts including **weaving, potting and iron working**, using **cowrie shells** as currency.

*Step 4 — the slave trade.*
Portuguese contact drew Kongo into the **transatlantic slave trade**, which **destroyed old lineages and kinship ties**. Between 1517 and 1700, about **69 per cent** of all transatlantic captives came from West Central Africa, and the Portuguese **destroyed the kingdom in 1665**.

**Conclusion:** iron technology enabled the Bantu to build kingdoms like the centralised, craft-rich Kingdom of Kongo, but Portuguese contact and the transatlantic slave trade — which drew most of its captives from this very region — devastated and finally destroyed it.`,
      quiz: [
        { prompt: "The Bantu acquired ironworking from the", options: ["Nok people", "Romans", "Portuguese", "Swahili"], correctIndex: 0, explanation: "The Nok gave the Bantu metallurgy." },
        { prompt: "Iron tools and weapons helped the Bantu to", options: ["expand and settle across central and southern Africa", "sail to India", "build pyramids", "mint coins"], correctIndex: 0, explanation: "Iron enabled Bantu expansion." },
        { prompt: "The Kingdom of Kongo was founded by", options: ["Ne Lukeni Kia Nzinga", "Sundiata", "Oranyan", "Ezana"], correctIndex: 0, explanation: "Ne Lukeni Kia Nzinga founded Kongo." },
        { prompt: "The people of Kongo are called the", options: ["Bakongo", "Hausa", "Yoruba", "Shona"], correctIndex: 0, explanation: "The Bakongo were the people of Kongo." },
        { prompt: "By 1600, Kongo dominated a region more than", options: ["half the size of England", "the whole of Africa", "the size of a village", "twice the size of Asia"], correctIndex: 0, explanation: "It was a large, centralised state." },
        { prompt: "Kongo's government was", options: ["hierarchical, with tribute flowing up and rewards down", "a democracy with no chiefs", "ruled from Rome", "leaderless"], correctIndex: 0, explanation: "Tribute up, rewards down, through chiefs." },
        { prompt: "Crafts of Kongo's regions included", options: ["weaving, basket making, potting and iron working", "silk weaving only", "glassblowing", "printing"], correctIndex: 0, explanation: "Regions specialised in several crafts." },
        { prompt: "Kongo used which currency?", options: ["cowrie shells", "gold coins only", "paper money", "iron bars only"], correctIndex: 0, explanation: "Cowrie shells were used in exchange." },
        { prompt: "The Bakongo social organisation was", options: ["matrilineal", "patrilineal only", "based on no families", "European"], correctIndex: 0, explanation: "They had a matrilineal organisation." },
        { prompt: "Kongo was drawn into which trade by the Portuguese?", options: ["the transatlantic slave trade", "the Indian Ocean silk trade", "the fur trade", "the tea trade"], correctIndex: 0, explanation: "Portuguese contact brought the slave trade." },
        { prompt: "The slave trade destroyed Kongo's", options: ["old lineages and kinship ties", "iron industry only", "language only", "rivers"], correctIndex: 0, explanation: "It broke the basis of social order." },
        { prompt: "Between 1517 and 1700, West Central Africa supplied about what share of transatlantic captives?", options: ["69 per cent", "5 per cent", "100 per cent", "1 per cent"], correctIndex: 0, explanation: "About 69 per cent came from West Central Africa." },
        { prompt: "The Kingdom of Kongo was destroyed by the Portuguese in", options: ["1665", "1300", "1847", "1980"], correctIndex: 0, explanation: "The Portuguese destroyed it in 1665." },
        { prompt: "Bantu migrations may have begun as early as", options: ["3000 BCE", "1500 CE", "1665", "500 BCE"], correctIndex: 0, explanation: "Possibly by about 3000 BCE." },
        { prompt: "Iron technology underlay the rise of which kind of kingdoms?", options: ["Bantu kingdoms of central and southern Africa", "Roman provinces", "Swahili city-states only", "European states"], correctIndex: 0, explanation: "Iron enabled Bantu kingdoms like Kongo." },
        { prompt: "Kongo stretched from the Atlantic to", options: ["the inland valley of the Kwango", "the Red Sea", "the Nile", "the Indian Ocean"], correctIndex: 0, explanation: "It reached inland to the Kwango valley." },
        { prompt: "A lingua franca in Kongo was", options: ["a trade language enabling inter-regional communication", "a secret code", "a European tongue", "not used"], correctIndex: 0, explanation: "It let regions trade and communicate." },
        { prompt: "Kongo's economy is described as", options: ["a subsistence economy with craft specialisation", "a fully industrial economy", "based only on gold", "without any trade"], correctIndex: 0, explanation: "Subsistence base with specialised crafts." },
        { prompt: "The most devastating outside force on Kongo was", options: ["the transatlantic slave trade and the Portuguese", "the Bantu migrations", "the Nok people", "the Nile flood"], correctIndex: 0, explanation: "The slave trade and Portuguese destroyed it." },
        { prompt: "Ironworking is significant because it", options: ["enabled Bantu expansion and the rise of kingdoms", "was never used in Africa", "came from Europe", "harmed farming"], correctIndex: 0, explanation: "Iron enabled expansion and statehood." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the role of iron technology in the growth of Bantu societies.", answerKey: "Ironworking, acquired by the Bantu from the Nok, gave them iron tools and weapons that improved farming and defence and let them expand and settle across central and southern Africa (especially 500–1000 CE), underlying the rise of Bantu kingdoms such as Kongo. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the founding and government of the Kingdom of Kongo.", answerKey: "Kongo (the Bakongo) was founded by Ne Lukeni Kia Nzinga, about three centuries before 1665; it was an organised, centralised, hierarchical state where chiefs of provinces, districts and villages sent tribute up to the king and received rewards down; by 1600 it dominated a region more than half the size of England. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Between 1517 and 1700, about what share of transatlantic captives came from West Central Africa?", options: ["69 per cent", "5 per cent", "20 per cent", "100 per cent"], correctIndex: 0, answerKey: "About 69 per cent. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the impact of the slave trade on the Kingdom of Kongo.", answerKey: "The transatlantic slave trade, brought by Portuguese contact, destroyed the old lineages and kinship ties on which Kongo's social order rested; West Central Africa supplied about 69 per cent of captives (1517–1700), and the Portuguese finally destroyed the kingdom in 1665. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the role of iron technology in Bantu Africa and the rise and fall of the Kingdom of Kongo.", answerKey: "Award marks for: ironworking from the Nok enabling the Bantu migrations and kingdoms, 6 marks; the founding of Kongo by Ne Lukeni Kia Nzinga and its centralised, hierarchical government, 6 marks; its craft specialisation, cowrie currency and matrilineal society, 4 marks; the slave trade's destruction of kinship ties, West Central Africa as 69 per cent of captives, and the Portuguese destruction in 1665, 6 marks; conclusion, 2 marks.", marks: 24 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 15.2 Medieval Sub-Saharan Africa (Great Zimbabwe/Mapungubwe) (https://openstax.org/books/world-history-volume-1/pages/15-2-medieval-sub-saharan-africa)
      slug: "the-monomotapa-empire",
      title: "The Monomotapa (Mutapa) Empire and Great Zimbabwe",
      objective:
        "By the end of the topic, learners should be able to describe Great Zimbabwe and the Mutapa (Monomotapa) empire, and explain how gold, trade and the coast shaped southern Africa's states.",
      estimatedMinutes: 120,
      notes: `## Southern Africa's stone-building states

- Southern Africa produced a series of Bantu (Shona) states built on **cattle, farming, gold and trade**.
- The greatest was **Great Zimbabwe**, and its successor in the region's gold trade was the **Mutapa** empire — the **Monomotapa** of the syllabus.

## Great Zimbabwe

- **Great Zimbabwe** was founded by the **Shona**, an Iron Age Bantu-speaking people who arrived around the 2nd century CE. It flourished from the **13th to the 16th centuries**.
- The name comes from the Bantu **"dzimba dzamabwe," meaning "stone buildings."**
- Its **Great Enclosure** (13th–14th centuries) had **drystone walls 35 feet high** and up to **17 feet thick** — "the largest ancient monument in Africa south of the Sahara." The site covers about **1,700 acres** and may have held **18,000 people** ruled by an elite class.
- **Trade:** positioned to link the **goldfields of the western plateau** to **Sofala** on the coast, Great Zimbabwe traded gold, copper and ivory for **Chinese Ming porcelain** and **Persian faience**. "Zimbabwean gold made Kilwa the wealthiest of all the Swahili city-states."

## The Mutapa (Monomotapa) empire

- Gold from the mines of the **Kingdom of Mutapa** flowed through **Sofala**, making it wealthy and powerful.
- The Portuguese hoped to exploit Mutapa's wealth and **took control of the kingdom in 1633**, but by then the gold deposits were largely **exhausted**, and Portuguese attempts to convert the population to Catholicism led to **conflict**.

## Mapungubwe: the earlier state

- Before Great Zimbabwe, **Mapungubwe** (11th–13th centuries) was "southern Africa's first state," a class-divided society trading gold and ivory down the Limpopo to Sofala for **glass beads from India and Chinese pottery**. It declined around the end of the 13th century, probably from **drought**.

## How these states worked

- Wealth rested on **cattle** (a measure of wealth), **farming**, and above all the **gold trade** to the Swahili coast.
- The king or chief, often the wealthiest man, governed by **consensus** with leading men; Great Zimbabwe's chief "had no army," ruling through influence rather than force.

## Common errors and misconceptions

- **Thinking outsiders built Great Zimbabwe** — it was built by the **Shona**, a Bantu people; the name itself means "stone buildings" in a Bantu language.
- **Confusing the states** — **Mapungubwe** (earlier) → **Great Zimbabwe** (13th–16th c) → **Mutapa/Monomotapa** (the later gold kingdom).
- **Believing the Portuguese found rich gold in Mutapa** — by the time they took control in **1633** the gold was largely **exhausted**.
- **Assuming these states were isolated** — their gold reached the **Swahili coast**, India and China.`,
      workedExample: `**Question:** Describe Great Zimbabwe and the Mutapa (Monomotapa) empire, and explain how gold and trade shaped southern Africa's states.

**Solution**

*Step 1 — Great Zimbabwe.*
**Great Zimbabwe** was built by the **Shona**, a Bantu people, and flourished from the **13th to 16th centuries**. Its name means **"stone buildings."** The **Great Enclosure**, with drystone walls **35 feet high**, is "the largest ancient monument in Africa south of the Sahara," and the site may have held **18,000 people**.

*Step 2 — gold and trade.*
Great Zimbabwe linked the **goldfields of the plateau** to **Sofala** on the coast, trading gold, copper and ivory for **Chinese porcelain and Persian faience**. Its gold **made Kilwa the wealthiest Swahili city-state**.

*Step 3 — the Mutapa empire.*
Gold from the **Kingdom of Mutapa** (the Monomotapa) also flowed through **Sofala**, making it wealthy. The **Portuguese took control in 1633**, but the gold was by then largely **exhausted**, and their attempts to convert the people caused **conflict**.

*Step 4 — how the states worked.*
Wealth rested on **cattle, farming and the gold trade**; kings ruled largely by **consensus** — Great Zimbabwe's chief "had no army."

**Conclusion:** southern Africa's states — Mapungubwe, then Great Zimbabwe, then Mutapa — were Shona, gold-trading kingdoms whose wealth came from selling gold through Sofala to the Swahili coast and beyond, until the gold was exhausted and the Portuguese intervened.`,
      quiz: [
        { prompt: "Great Zimbabwe was built by the", options: ["Shona (a Bantu people)", "Portuguese", "Romans", "Arabs"], correctIndex: 0, explanation: "The Shona, a Bantu-speaking people, built it." },
        { prompt: "The name 'Zimbabwe' means", options: ["stone buildings", "gold city", "great river", "land of cattle"], correctIndex: 0, explanation: "From 'dzimba dzamabwe', 'stone buildings'." },
        { prompt: "Great Zimbabwe flourished from the", options: ["13th to 16th centuries", "1st to 3rd centuries", "18th to 19th centuries", "8th to 9th centuries BCE"], correctIndex: 0, explanation: "It flourished 13th–16th centuries." },
        { prompt: "The Great Enclosure's drystone walls were about", options: ["35 feet high", "3 feet high", "350 feet high", "5 inches high"], correctIndex: 0, explanation: "Walls were 35 feet high and up to 17 feet thick." },
        { prompt: "The Great Enclosure is the largest ancient monument in Africa", options: ["south of the Sahara", "north of the Sahara", "in Egypt", "on the coast"], correctIndex: 0, explanation: "The largest south of the Sahara." },
        { prompt: "Great Zimbabwe traded gold through which coastal port?", options: ["Sofala", "Alexandria", "Tunis", "Tangier"], correctIndex: 0, explanation: "Gold flowed to Sofala on the coast." },
        { prompt: "Zimbabwean gold made which Swahili city-state the wealthiest?", options: ["Kilwa", "Mogadishu", "Malindi", "Barawa"], correctIndex: 0, explanation: "Kilwa grew richest on Zimbabwean gold." },
        { prompt: "In exchange for gold, Great Zimbabwe imported", options: ["Chinese porcelain and Persian faience", "steam engines", "printed books", "coal"], correctIndex: 0, explanation: "It imported Chinese and Persian goods." },
        { prompt: "The Monomotapa of the syllabus is the kingdom of", options: ["Mutapa", "Mali", "Kongo", "Aksum"], correctIndex: 0, explanation: "Mutapa is the Monomotapa." },
        { prompt: "The Portuguese took control of Mutapa in", options: ["1633", "1300", "1847", "1980"], correctIndex: 0, explanation: "They took control in 1633." },
        { prompt: "By the time the Portuguese took Mutapa, its gold was", options: ["largely exhausted", "at its greatest", "just discovered", "made of iron"], correctIndex: 0, explanation: "The gold deposits were largely exhausted." },
        { prompt: "The earlier southern African state before Great Zimbabwe was", options: ["Mapungubwe", "Kilwa", "Ife", "Napata"], correctIndex: 0, explanation: "Mapungubwe was southern Africa's first state." },
        { prompt: "Mapungubwe declined around the end of the 13th century probably due to", options: ["drought", "a European army", "the Nile flood", "loss of iron"], correctIndex: 0, explanation: "Intense drought is the likely cause." },
        { prompt: "Wealth in these southern states was measured largely in", options: ["cattle", "coins", "porcelain", "paper"], correctIndex: 0, explanation: "Cattle measured wealth." },
        { prompt: "Great Zimbabwe's chief governed", options: ["by consensus and had no army", "with a huge standing army", "from Portugal", "by election every year"], correctIndex: 0, explanation: "He ruled by influence; he had no army." },
        { prompt: "The correct order of southern African states is", options: ["Mapungubwe, then Great Zimbabwe, then Mutapa", "Mutapa, then Mapungubwe, then Great Zimbabwe", "Great Zimbabwe, then Mapungubwe", "Kongo, then Zimbabwe"], correctIndex: 0, explanation: "Mapungubwe → Great Zimbabwe → Mutapa." },
        { prompt: "Mapungubwe traded gold and ivory down which river to Sofala?", options: ["the Limpopo", "the Nile", "the Niger", "the Congo"], correctIndex: 0, explanation: "Trade flowed down the Limpopo to Sofala." },
        { prompt: "A common error is to think Great Zimbabwe was built by", options: ["outsiders (it was built by the Shona)", "the Shona", "Bantu peoples", "Africans"], correctIndex: 0, explanation: "It was built by the Shona, not outsiders." },
        { prompt: "The site of Great Zimbabwe may have held about", options: ["18,000 people", "180 people", "1.8 million people", "no people"], correctIndex: 0, explanation: "About 18,000 people ruled by an elite." },
        { prompt: "Southern Africa's gold-trading states show that these societies were", options: ["connected to the coast, India and China through trade", "totally isolated", "European colonies", "without any government"], correctIndex: 0, explanation: "Their gold reached the coast and Asia." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe Great Zimbabwe and who built it.", answerKey: "Great Zimbabwe was built by the Shona, an Iron Age Bantu-speaking people, and flourished from the 13th to the 16th centuries; its name means 'stone buildings'; its Great Enclosure had drystone walls 35 feet high and is the largest ancient monument in Africa south of the Sahara, on a site that may have held 18,000 people. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how gold and trade shaped Great Zimbabwe and Mutapa.", answerKey: "Both linked plateau goldfields to Sofala on the coast; gold, copper and ivory were traded for Chinese porcelain and Persian faience; Zimbabwean gold made Kilwa the wealthiest Swahili city-state, and Mutapa's gold flowed through Sofala making it powerful. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "The Portuguese took control of Mutapa in 1633 but found the gold was", options: ["largely exhausted", "at its peak", "newly discovered", "made of iron"], correctIndex: 0, answerKey: "The gold deposits were largely exhausted. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Put the three southern African states in order and give one fact about each.", answerKey: "Mapungubwe (11th–13th c, southern Africa's first state, gold/ivory down the Limpopo, declined in drought); Great Zimbabwe (13th–16th c, Shona stone buildings, gold trade to Sofala); Mutapa/Monomotapa (later gold kingdom via Sofala, Portuguese took control 1633). Award 2 marks per state.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the southern African states of Mapungubwe, Great Zimbabwe and Mutapa, and explain the role of gold and trade in their development.", answerKey: "Award marks for: Mapungubwe as southern Africa's first state and its Limpopo/Sofala trade and drought decline, 5 marks; Great Zimbabwe, built by the Shona, its stone architecture and scale, 6 marks; the gold trade to Sofala and the Swahili coast (Kilwa), imports of porcelain and faience, 6 marks; the Mutapa (Monomotapa) empire, its gold through Sofala and the Portuguese takeover in 1633 with exhausted gold, 5 marks; conclusion, 2 marks. Crediting outsiders with building Great Zimbabwe caps the mark at 14.", marks: 24 },
      ],
    },
  ],
};
