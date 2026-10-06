import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester Two, Period IV: African Empires. The MoE lists three empires under
// Period IV — A. Ghana, B. Mali, C. Songhai — each with its own TOPIC heading
// and CONTENTS list, rebuilt here as one topic per empire (its CONTENTS items
// become the ## sections). Notes are rebuilt from OpenStax World History.
export const historyG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "African Empires: Ghana, Mali and Songhai",
  summary:
    "Period IV of the MoE Grade 10 History syllabus. Learners study the three great trading empires of the western Sudan — Ghana, Mali and Songhai — their founders and government, the trans-Saharan gold-and-salt trade that made them wealthy, the role of Islam, and the causes of their rise and fall.",
  topics: [
    {
      // source: OpenStax — World History Volume 1, 15.2 Medieval Sub-Saharan Africa (https://openstax.org/books/world-history-volume-1/pages/15-2-medieval-sub-saharan-africa)
      slug: "the-ghana-empire",
      title: "The Ghana Empire",
      objective:
        "By the end of the topic, learners should be able to describe the founders and government of the Ghana Empire, explain how the trans-Saharan trade made it wealthy, and account for its decline.",
      estimatedMinutes: 140,
      notes: `## The ancient Ghana Empire

- The **Ghana Empire** was one of the first great trading empires of the **western Sudan** (the savanna south of the Sahara). It is **not** the same place as the modern country of Ghana.
- It was established around the **fifth century CE** by **Soninke**-speaking people.

## The founders

- According to tradition, **Diabe Cisse** unified the Soninke in response to raids by the **Sanhaja** (a Berber people), creating a loose **federation** for protection and expansion.
- The Soninke were the **Black African founders** of Ghana.

## Growth and government

- Ghana sat strategically **between the Sahara** (the source of **salt**) and the **Bambuk goldfields** along the Senegal River.
- By the **eleventh century** its king "had some **200,000 soldiers** at his command."
- The king held a **monopoly** on the largest gold: gold **nuggets over one ounce** belonged to the king, while gold dust circulated in trade — a way to keep prices high and the state rich.

## Trade and commerce

- Ghana's power came from controlling the **trans-Saharan trade routes**.
- **Gold** moved north across the Sahara; **salt** moved south. Salt was so prized that Ghana's king "stored it in the royal treasury alongside gold nuggets."
- Trade brought **Islamized Berber** merchants across the desert, spreading Islam and Arabic learning into the Sudan through commerce.

## Decline and fall

- In the eleventh century the militant **Almoravid** movement threatened Ghana; by **1055** they captured **Awdaghost**, a key trading town, triggering religious strife that weakened trade links.
- By the end of the twelfth century Ghana lost its dominance as **new goldfields opened at Bure**, beyond its reach, shifting trade routes away from it.

## Ghana in African history

- Ghana pioneered the pattern of the great **Sudanic trading empire**, controlling gold-and-salt commerce — a model followed by **Mali** and **Songhai**.
- Its name was later taken by the modern nation of Ghana at independence, as a symbol of a proud African past.

## Common errors and misconceptions

- **Confusing ancient Ghana with the modern country** — the empire lay in the western Sudan (around modern Mali/Mauritania), not on the coast of modern Ghana.
- **Thinking Ghana produced its own gold and salt** — it **controlled the trade** between the Saharan salt and the southern goldfields; it did not sit on both.
- **Believing the Almoravids alone destroyed Ghana** — Almoravid pressure plus the **opening of new goldfields at Bure** (which bypassed Ghana) caused the decline.
- **Assuming the king taxed all gold equally** — the king monopolised **nuggets**, letting only gold **dust** circulate.`,
      workedExample: `**Question:** Explain how the trans-Saharan trade made the Ghana Empire wealthy, and why Ghana declined.

**Solution**

*Step 1 — the geography of the trade.*
Ghana lay in the western Sudan, **between the Sahara** (source of **salt**) and the **Bambuk goldfields** to the south. It did not produce gold or salt itself — it **controlled the trade** between them.

*Step 2 — how wealth was captured.*
Gold moved north and salt moved south across the Sahara through Ghana. The king taxed this trade and held a **monopoly on gold nuggets over one ounce**, letting only gold dust circulate — keeping gold scarce, prices high and the treasury full. Salt was so valued it was stored beside gold in the royal treasury.

*Step 3 — the power it bought.*
This wealth supported a strong state: by the eleventh century the king commanded some **200,000 soldiers**.

*Step 4 — the decline.*
Two forces broke Ghana's dominance. The militant **Almoravids** captured **Awdaghost in 1055**, causing religious strife and disrupting trade. Then **new goldfields opened at Bure**, beyond Ghana's control, so trade routes shifted away from it. By the end of the twelfth century Ghana had lost its dominance.

**Conclusion:** Ghana grew rich by controlling and taxing the gold-and-salt trade across the Sahara, but Almoravid pressure and the opening of new goldfields at Bure shifted the trade away and brought the empire down.`,
      quiz: [
        { prompt: "The ancient Ghana Empire was located in", options: ["the modern country of Ghana on the coast", "the western Sudan (savanna south of the Sahara)", "East Africa", "North Africa's Mediterranean coast"], correctIndex: 1, explanation: "It lay in the western Sudan, not modern Ghana." },
        { prompt: "Ghana was established around the fifth century CE by which people?", options: ["Soninke", "Zulu", "Swahili", "Berbers only"], correctIndex: 0, explanation: "Soninke-speaking people founded Ghana." },
        { prompt: "According to tradition, who unified the Soninke?", options: ["Sunni Ali", "Sundiata", "Mansa Musa", "Diabe Cisse"], correctIndex: 3, explanation: "Diabe Cisse unified them against Sanhaja raids." },
        { prompt: "The Soninke united in response to raids by the", options: ["Sanhaja", "Romans", "Portuguese", "Mongols"], correctIndex: 0, explanation: "The Sanhaja Berbers raided them." },
        { prompt: "Ghana's wealth came from controlling the trade in", options: ["coal and oil", "silk and tea", "gold and salt", "spices and porcelain"], correctIndex: 2, explanation: "It controlled the trans-Saharan gold-and-salt trade." },
        { prompt: "Salt came from the ___, and gold from the ___.", options: ["forest; desert oasis", "sea; mountains", "Sahara; Bambuk goldfields", "coast; Nile"], correctIndex: 2, explanation: "Salt from the Sahara, gold from Bambuk." },
        { prompt: "By the eleventh century Ghana's king commanded about", options: ["2,000 soldiers", "200,000 soldiers", "5 million soldiers", "no army"], correctIndex: 1, explanation: "Some 200,000 soldiers at his command." },
        { prompt: "The king held a monopoly on gold", options: ["of all kinds equally", "dust only", "coins from Rome", "nuggets over one ounce"], correctIndex: 3, explanation: "Nuggets belonged to the king; dust circulated." },
        { prompt: "Islam entered the Sudan through Ghana mainly by way of", options: ["European missionaries", "Islamized Berber merchants and trade", "sea voyages from India", "Roman soldiers"], correctIndex: 1, explanation: "Berber traders spread Islam through commerce." },
        { prompt: "Which movement captured Awdaghost in 1055?", options: ["the Ottomans", "the Almohads only", "the Almoravids", "the Portuguese"], correctIndex: 2, explanation: "The Almoravids took Awdaghost." },
        { prompt: "New goldfields that shifted trade away from Ghana opened at", options: ["Sofala", "Bure", "Kilwa", "Cairo"], correctIndex: 1, explanation: "The Bure goldfields lay beyond Ghana's reach." },
        { prompt: "Ghana lost its dominance by the end of the", options: ["first century", "fifth century", "nineteenth century", "twelfth century"], correctIndex: 3, explanation: "Decline came by the late 1100s." },
        { prompt: "Ghana pioneered the model of the", options: ["Indian Ocean city-state", "Sudanic gold-and-salt trading empire", "Roman province", "Nile pyramid kingdom"], correctIndex: 1, explanation: "Mali and Songhai followed its model." },
        { prompt: "The Soninke created a loose ___ for protection and expansion.", options: ["monarchy of one city", "federation", "republic", "colony"], correctIndex: 1, explanation: "A federation united the Soninke." },
        { prompt: "The king kept gold nuggets scarce in order to", options: ["trade them for iron", "give them away", "melt them for tools", "keep prices high and the state rich"], correctIndex: 3, explanation: "The monopoly kept gold valuable." },
        { prompt: "Ghana itself", options: ["was on the Atlantic coast", "mined all its own gold and salt", "had no trade", "controlled the trade rather than producing gold and salt"], correctIndex: 3, explanation: "It sat between the sources and taxed the trade." },
        { prompt: "The Sanhaja who raided the Soninke were a ___ people.", options: ["Bantu", "Berber", "Swahili", "Roman"], correctIndex: 1, explanation: "The Sanhaja were Berbers of the desert." },
        { prompt: "The modern country of Ghana took its name from the empire to", options: ["claim the same territory", "honour a proud African past", "join the Sahara trade", "copy Europe"], correctIndex: 1, explanation: "The name symbolised African heritage at independence." },
        { prompt: "Two forces behind Ghana's decline were", options: ["the slave trade and Christianity", "drought and the Nile flood", "Roman and Persian invasions", "Almoravid pressure and the opening of Bure goldfields"], correctIndex: 3, explanation: "Almoravids plus the shift of goldfields to Bure." },
        { prompt: "Awdaghost was important as a", options: ["Nile temple", "key trans-Saharan trading town", "Swahili port", "Roman fort"], correctIndex: 1, explanation: "It was a vital trade town captured in 1055." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Identify the founders of Ghana and explain how the empire was first organised.", answerKey: "Ghana was founded around the fifth century CE by Soninke-speaking people; according to tradition Diabe Cisse unified the Soninke against Sanhaja (Berber) raids, creating a loose federation for protection and expansion. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how the trans-Saharan trade made Ghana wealthy.", answerKey: "Ghana sat between the Saharan salt and the Bambuk goldfields and controlled the trade between them; gold moved north and salt south; the king taxed this trade and monopolised gold nuggets over one ounce, keeping gold scarce and prices high, filling the treasury. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "By the eleventh century, Ghana's king could command about", options: ["2,000 soldiers", "200,000 soldiers", "no army", "20 million soldiers"], correctIndex: 1, answerKey: "Some 200,000 soldiers. Option B.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons for the decline of the Ghana Empire.", answerKey: "The militant Almoravids captured Awdaghost in 1055, causing religious strife and disrupting trade; new goldfields opened at Bure beyond Ghana's reach, shifting trade routes away. Award 3 marks per reason.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the rise, wealth and fall of the Ghana Empire, and its place in African history.", answerKey: "Award marks for: founders (Soninke, Diabe Cisse, federation) and location in the western Sudan, 5 marks; control of the gold-and-salt trade and the king's monopoly and army, 8 marks; the role of Islamized Berber merchants, 3 marks; decline (Almoravids at Awdaghost 1055, Bure goldfields), 6 marks; Ghana as the model Sudanic empire followed by Mali and Songhai, 3 marks. Distinguishing ancient Ghana from the modern country earns credit; confusing them caps at 16.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 15.2 Medieval Sub-Saharan Africa (https://openstax.org/books/world-history-volume-1/pages/15-2-medieval-sub-saharan-africa)
      slug: "the-mali-empire",
      title: "The Mali Empire",
      objective:
        "By the end of the topic, learners should be able to describe the founding of Mali by Sundiata Keita, the reign and pilgrimage of Mansa Musa, and the wealth, government and fall of the empire.",
      estimatedMinutes: 140,
      notes: `## The founding of Mali: Sundiata Keita

- The **Mali Empire** rose in the western Sudan after Ghana declined.
- Prince **Sundiata of the Keita clan** defeated the **Sosso** kingdom in **1235** and captured **Koumbi Saleh** (the old Ghanaian capital) in **1240**.
- Mali became "the largest and richest that medieval Africa had yet seen."
- Sundiata made himself sole ruler by persuading the Malinke kings to surrender their title of **"mansa"** to him, so he alone was religious and secular leader.

## Wealth and economy

- Mali's economy was **diverse**:
- Access to the **Bure goldfields**.
- Control of the Sahelian trading towns of **Oualata, Gao, Timbuktu and Djenné**.
- Agricultural surplus — **sorghum and millet on the savanna, rice in the Gambia valley**.
- **Copper** trade with heavy custom duties.
- The capital moved to **Niani**, in the southern savanna near the Bure goldfields.

## Islam and gold

- Malian rulers were Muslims but were careful: they let **gold-producing areas stay quasi-independent** to avoid disrupting mining, recognising that where Islam spread into a gold town "there the gold begins to decrease."

## Mansa Musa and his pilgrimage (1324–1325)

- The most famous king, **Mansa Musa**, made a pilgrimage to Mecca in **1324–1325**.
- His caravan, by the accounts, "included sixty thousand soldiers, five hundred captives, and a hundred camel-loads of gold."
- His lavish spending in **Cairo** was so great that the value of gold there **fell for twelve years**.
- The Majorcan mapmaker **Abraham Cresques** put him in *The Catalan Atlas* (1375) as "the richest and most noble lord" — spreading Mali's fame to Europe.

## Government and administration

- Mali ruled conquered territories **indirectly**, through local "puppet" regimes, which bred resentment among vassal states such as **Takrur** and **Songhai**.

## Decline

- From the late fourteenth century, **weak rulers, brief reigns and civil wars** weakened Mali.
- Opposition from the **Mossi**, **Tuareg** attacks, and **Songhai** uprisings forced Mali to abandon **Gao and Timbuktu in 1438**.
- The rising **Songhai** Empire, centred on Gao, took over the trans-Saharan trade.

## Common errors and misconceptions

- **Thinking Mali only inherited Ghana's wealth** — Mali had a **diverse** economy: gold, control of trading towns, farming and copper.
- **Believing the rulers forced Islam on the goldfields** — they deliberately left gold areas quasi-independent to keep the gold flowing.
- **Assuming Mansa Musa's gold had no effect abroad** — his spending depressed the value of gold in Cairo for years.
- **Confusing indirect rule with unity** — indirect "puppet" rule bred resentment and later revolts.`,
      workedExample: `**Question:** Describe the founding of Mali and the reign of Mansa Musa, and explain why Mansa Musa's pilgrimage was significant.

**Solution**

*Step 1 — the founding.*
Prince **Sundiata of the Keita clan** founded Mali by defeating the **Sosso** in **1235** and capturing **Koumbi Saleh** in **1240**. He made himself sole **mansa**, uniting the Malinke under one ruler, and built "the largest and richest" state medieval Africa had yet seen.

*Step 2 — the sources of wealth.*
Mali controlled the **Bure goldfields** and the trading towns of **Timbuktu, Djenné, Gao and Oualata**, and drew surplus from farming (sorghum, millet, rice) and the copper trade.

*Step 3 — Mansa Musa's pilgrimage.*
In **1324–1325** the famous king **Mansa Musa** made the pilgrimage to Mecca with a huge caravan — by the accounts sixty thousand soldiers and a hundred camel-loads of gold.

*Step 4 — why it mattered.*
His spending in **Cairo** was so lavish that the **value of gold there fell for twelve years**, and his fame spread to Europe: **Abraham Cresques** depicted him in the *Catalan Atlas* (1375) as the richest lord in the world. The pilgrimage advertised Mali's wealth and Islam to the whole Mediterranean world.

**Conclusion:** Sundiata founded Mali on Ghana's ruins and built a diverse, wealthy empire; Mansa Musa's pilgrimage displayed that wealth so dramatically that it shifted gold prices in Cairo and made Mali famous across Europe.`,
      quiz: [
        { prompt: "The Mali Empire was founded by", options: ["Sunni Ali", "Mansa Musa", "Sundiata Keita", "Diabe Cisse"], correctIndex: 2, explanation: "Prince Sundiata of the Keita clan founded Mali." },
        { prompt: "Sundiata defeated which kingdom in 1235?", options: ["Aksum", "the Songhai", "Rome", "the Sosso"], correctIndex: 3, explanation: "He defeated the Sosso in 1235." },
        { prompt: "The title Sundiata took as sole ruler was", options: ["caliph", "pharaoh", "mansa", "askia"], correctIndex: 2, explanation: "He made himself the sole mansa." },
        { prompt: "Mali is described as", options: ["a small forest village", "the largest and richest medieval Africa had yet seen", "a Swahili city-state", "a Roman province"], correctIndex: 1, explanation: "It surpassed Ghana in size and wealth." },
        { prompt: "Mali's gold came from the", options: ["Nile delta", "Bure goldfields", "Red Sea", "Congo forest"], correctIndex: 1, explanation: "It controlled the Bure goldfields." },
        { prompt: "Which was a great trading town of Mali?", options: ["Carthage", "Kilwa", "Meroe", "Timbuktu"], correctIndex: 3, explanation: "Timbuktu, Djenné, Gao and Oualata were Malian towns." },
        { prompt: "Mali's capital moved to", options: ["Niani", "Cairo", "Napata", "Zanzibar"], correctIndex: 0, explanation: "Niani lay near the Bure goldfields." },
        { prompt: "The famous king who made a pilgrimage to Mecca was", options: ["Mansa Musa", "Sundiata", "Ezana", "Piye"], correctIndex: 0, explanation: "Mansa Musa's pilgrimage was in 1324–1325." },
        { prompt: "Mansa Musa's pilgrimage took place in", options: ["1055", "1324–1325", "656 BCE", "1847"], correctIndex: 1, explanation: "He journeyed to Mecca in 1324–1325." },
        { prompt: "In which city did Mansa Musa's spending lower the value of gold for years?", options: ["Rome", "Cairo", "London", "Kilwa"], correctIndex: 1, explanation: "Gold's value in Cairo fell for twelve years." },
        { prompt: "Mansa Musa appeared in which famous European map?", options: ["The Catalan Atlas (1375)", "the Domesday Book", "a Roman itinerary", "Ptolemy's Geography"], correctIndex: 0, explanation: "Abraham Cresques depicted him in the Catalan Atlas." },
        { prompt: "Malian rulers left gold-producing areas quasi-independent because", options: ["the gold was fake", "they had no soldiers", "the areas were empty", "spreading Islam there could reduce the gold supply"], correctIndex: 3, explanation: "They feared conversion would stop the mining." },
        { prompt: "Mali ruled conquered lands", options: ["directly from Mecca", "with no government at all", "indirectly, through local puppet regimes", "as Roman colonies"], correctIndex: 2, explanation: "Indirect rule bred resentment." },
        { prompt: "Crops of Mali's diverse economy included", options: ["tea and coffee", "wheat and barley only", "sorghum, millet and rice", "maize and potatoes"], correctIndex: 2, explanation: "Sorghum and millet on the savanna, rice in the Gambia valley." },
        { prompt: "Mali abandoned Gao and Timbuktu in", options: ["1438", "1235", "1055", "1591"], correctIndex: 0, explanation: "It gave up Gao and Timbuktu in 1438." },
        { prompt: "Which rising empire took over Mali's trans-Saharan trade?", options: ["Aksum", "Ghana", "Songhai", "Kush"], correctIndex: 2, explanation: "Songhai, centred on Gao, rose next." },
        { prompt: "A cause of Mali's decline was", options: ["loss of the Nile", "a Roman invasion", "weak rulers, civil wars and revolts (Mossi, Tuareg, Songhai)", "a European army"], correctIndex: 2, explanation: "Internal weakness and revolts undid Mali." },
        { prompt: "Sundiata captured which former Ghanaian capital in 1240?", options: ["Koumbi Saleh", "Gao", "Kano", "Sofala"], correctIndex: 0, explanation: "He captured Koumbi Saleh in 1240." },
        { prompt: "Mali's economy is best described as", options: ["based only on inherited Ghanaian gold", "diverse (gold, trade towns, farming, copper)", "purely pastoral", "purely coastal"], correctIndex: 1, explanation: "It rested on several sources of wealth." },
        { prompt: "Mansa Musa's pilgrimage was significant because it", options: ["had no effect", "advertised Mali's wealth and Islam across the Mediterranean and Europe", "conquered Egypt", "ended the gold trade"], correctIndex: 1, explanation: "It spread Mali's fame widely." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe how Sundiata Keita founded the Mali Empire.", answerKey: "Prince Sundiata of the Keita clan defeated the Sosso in 1235 and captured Koumbi Saleh in 1240; he made himself sole mansa by having the Malinke kings surrender their title to him, building the largest and richest state medieval Africa had yet seen. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the sources of Mali's wealth.", answerKey: "Access to the Bure goldfields; control of trading towns (Oualata, Gao, Timbuktu, Djenné); agricultural surplus (sorghum, millet, rice); and the copper trade with heavy custom duties. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Mansa Musa's pilgrimage to Mecca took place in", options: ["1591", "1055", "1438", "1324–1325"], correctIndex: 3, answerKey: "1324–1325. Option D.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why was Mansa Musa's pilgrimage historically significant?", answerKey: "It displayed Mali's enormous wealth — a huge caravan with a hundred camel-loads of gold — and his spending in Cairo lowered the value of gold there for twelve years; his fame reached Europe (the Catalan Atlas, 1375), advertising Mali's wealth and Islam. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the founding, greatness and fall of the Mali Empire, referring to Sundiata Keita and Mansa Musa.", answerKey: "Award marks for: Sundiata's founding (Sosso 1235, Koumbi Saleh 1240, sole mansa), 6 marks; the diverse economy and control of trade towns, 5 marks; Mansa Musa's reign and pilgrimage and its impact, 6 marks; indirect rule and resentment among vassals, 3 marks; decline (weak rulers, civil war, Mossi/Tuareg/Songhai revolts, abandoning Gao and Timbuktu in 1438), 5 marks. A response omitting either Sundiata or Mansa Musa should not exceed 18.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 3.2 The Songhai Empire (https://openstax.org/books/world-history-volume-2/pages/3-2-the-songhai-empire)
      slug: "the-songhai-empire",
      title: "The Songhai Empire",
      objective:
        "By the end of the topic, learners should be able to trace the origins of Songhai at Gao, describe the reigns of Sunni Ali and Askia Muhammad, and explain the empire's government, trade and fall.",
      estimatedMinutes: 140,
      notes: `## Origins of the Songhai people

- The Songhai state began at **Kukiya** (about 80 miles south-east of **Gao**) under the **Za dynasty** in the eleventh and twelfth centuries — "the earliest dynasty of kings of the Songhai state was the Za."
- Its centre later shifted to **Gao**, a prosperous trading hub. **Mali annexed Gao around 1325**, holding it until internal strife led Mali to withdraw in the **1430s**.

## Sunni Ali (late fifteenth century)

- **Sunni Ali** led the Songhai rebels against Mali and became the **first king of the new Songhai Empire**.
- He expanded the state with a **massive cavalry and a fleet of war canoes** on the Niger River.
- **1468** — he **sacked Timbuktu**, driving out its governor, killing or exiling many scholars; Islamic scholarship there declined for a time.
- **1473** — after a seven-month siege he captured **Djenné**, but there he **accommodated the Muslim scholars**, so learning flourished at Djenné.

## Askia Muhammad the Great (r. 1493–1528)

- **Muhammad Ture**, a general and governor, defeated Sunni Ali's successor in **1493** and founded the **Askia dynasty**, becoming **Askia the Great**.
- Under him the empire "stretched from **Kano in Hausaland** in the south-east to **Taghaza** with its salt mines in the north, and modern **Senegal** on the Atlantic coast." By **1512 even the mansa of Mali was paying tribute** to Askia — Songhai became the largest empire in West Africa's history.
- **Administration:** he replaced traditional rulers with **royal family members or trusted servants** as provincial governors, dependent on him — a centralised system that prevented breakaway states.
- **Islam:** not ethnically Songhai, he legitimised his rule through Islam, went on **pilgrimage to Mecca**, and was recognised as "caliph of the whole of Sudan," but he **did not force his subjects to convert**.
- **Trade:** he introduced **standardised weights and measures** and posted **trade inspectors** at major centres. Salt was the currency for external trade; cowrie shells for internal trade.

## Timbuktu as a centre of learning

- Under Askia, **Timbuktu revived** as a centre of scholarship. **Leo Africanus** noted "great numbers of religious teachers, judges, scholars," maintained at the king's expense.
- Public libraries were established, and scribes copied books; the Great Mosque at Djenné hosted thousands of teachers and students of **Islamic law, astronomy, mathematics and philosophy**.

## The fall of Songhai

- After Askia's later years, his sons **revolted and deposed him in 1528**; civil wars followed.
- **1591** — the Sultan of Morocco, **Ahmad al-Mansur**, invaded with **guns, cannon and ammunition** (supplied by Queen Elizabeth I of England). At the **Battle of Tondibi**, the Moroccan army under **Judar Pasha** defeated the larger Songhai force; **Askia Ishaq II was killed**.
- The Moroccans sacked **Djenné, Gao and Timbuktu**; within a decade the empire was shattered into smaller kingdoms.

## Common errors and misconceptions

- **Confusing Sunni Ali and Askia Muhammad** — Sunni Ali founded the empire by conquest; Askia Muhammad (a different dynasty) organised and Islamised it.
- **Thinking Sunni Ali favoured all scholars** — he sacked Timbuktu's scholars (1468) but accommodated those of Djenné (1473).
- **Believing Songhai fell to internal revolt alone** — civil war weakened it, but the decisive blow was the **1591 Moroccan invasion with firearms** at Tondibi.
- **Assuming firearms did not matter** — Moroccan guns and cannon beat Songhai's larger cavalry force.`,
      workedExample: `**Question:** Compare the reigns of Sunni Ali and Askia Muhammad, and explain how Songhai fell.

**Solution**

*Step 1 — Sunni Ali, the conqueror.*
**Sunni Ali** founded the Songhai Empire after Mali withdrew from Gao. Using a **massive cavalry and war canoes**, he sacked **Timbuktu in 1468** and took **Djenné in 1473**. He was a ruthless conqueror — harsh to Timbuktu's scholars but accommodating to Djenné's.

*Step 2 — Askia Muhammad, the organiser.*
**Askia Muhammad the Great** (r. 1493–1528) founded a new dynasty and turned conquest into a lasting state. He centralised government by appointing **loyal governors** dependent on him, standardised **weights and measures**, posted **trade inspectors**, and used **Islam** to legitimise his rule (pilgrimage to Mecca; "caliph of the Sudan") without forcing conversion. Under him Songhai became the **largest empire in West African history**, with even Mali paying tribute by 1512.

*Step 3 — the fall.*
After Askia's later years his sons **deposed him in 1528**, and civil wars weakened the empire. In **1591** Morocco's Sultan **al-Mansur** invaded with **firearms and cannon**; at the **Battle of Tondibi**, **Judar Pasha** defeated Songhai's larger army and killed **Askia Ishaq II**. The Moroccans sacked Djenné, Gao and Timbuktu, and the empire broke apart.

**Conclusion:** Sunni Ali built Songhai by conquest and Askia Muhammad organised it into West Africa's greatest empire, but internal civil war and the firearms of the 1591 Moroccan invasion at Tondibi brought it down.`,
      quiz: [
        { prompt: "The earliest dynasty of Songhai kings was the", options: ["Keita", "Za", "Askia", "Almoravid"], correctIndex: 1, explanation: "The Za dynasty ruled the early Songhai state." },
        { prompt: "The main trading centre of Songhai was", options: ["Cairo", "Kilwa", "Gao", "Meroe"], correctIndex: 2, explanation: "Gao became the prosperous Songhai hub." },
        { prompt: "Mali annexed Gao around", options: ["656 BCE", "1591", "1055", "1325"], correctIndex: 3, explanation: "Mali held Gao from about 1325 to the 1430s." },
        { prompt: "The founder of the new Songhai Empire was", options: ["Askia Muhammad", "Sunni Ali", "Sundiata", "Mansa Musa"], correctIndex: 1, explanation: "Sunni Ali led the rebellion against Mali." },
        { prompt: "Sunni Ali expanded Songhai using cavalry and", options: ["firearms", "steamships", "elephants", "a fleet of war canoes"], correctIndex: 3, explanation: "War canoes on the Niger aided his conquests." },
        { prompt: "In 1468 Sunni Ali", options: ["sacked Timbuktu", "built Timbuktu's libraries", "converted to Christianity", "invaded Morocco"], correctIndex: 0, explanation: "He sacked Timbuktu and drove out its scholars." },
        { prompt: "At Djenné (1473), Sunni Ali", options: ["burned the city entirely", "accommodated the Muslim scholars", "was defeated", "gave up his throne"], correctIndex: 1, explanation: "He accommodated Djenné's scholars, so learning flourished." },
        { prompt: "Askia Muhammad the Great reigned from", options: ["1591 to 1600", "1055 to 1100", "1493 to 1528", "1235 to 1255"], correctIndex: 2, explanation: "He founded the Askia dynasty in 1493." },
        { prompt: "By 1512, who was paying tribute to Askia?", options: ["the Roman emperor", "the Pope", "the mansa of Mali", "the king of Portugal"], correctIndex: 2, explanation: "Even Mali paid tribute to Songhai." },
        { prompt: "Askia appointed provincial governors who were", options: ["chosen by Morocco", "elected by the people", "foreign kings", "royal family or trusted servants dependent on him"], correctIndex: 3, explanation: "This centralised system prevented breakaways." },
        { prompt: "Askia used which religion to legitimise his rule?", options: ["Christianity", "Islam", "Buddhism", "traditional religion only"], correctIndex: 1, explanation: "He went on pilgrimage and was called caliph of the Sudan." },
        { prompt: "Did Askia force his subjects to convert?", options: ["Only merchants", "Yes, all of them", "No", "Only farmers"], correctIndex: 2, explanation: "He did not force conversion." },
        { prompt: "Askia improved trade by introducing", options: ["paper money", "standardised weights and measures and trade inspectors", "a stock exchange", "steam engines"], correctIndex: 1, explanation: "He standardised measures and posted inspectors." },
        { prompt: "Under Askia, Timbuktu revived as a centre of", options: ["shipbuilding", "scholarship and learning", "gold mining", "iron smelting"], correctIndex: 1, explanation: "Leo Africanus noted its many scholars." },
        { prompt: "Subjects taught at Djenné's Great Mosque included", options: ["European history only", "Islamic law, astronomy, mathematics and philosophy", "navigation only", "no subjects"], correctIndex: 1, explanation: "A wide range of learning flourished there." },
        { prompt: "Askia was deposed in 1528 by", options: ["the Portuguese", "Morocco", "Mali", "his own sons"], correctIndex: 3, explanation: "His sons revolted and deposed him." },
        { prompt: "Songhai was invaded in 1591 by", options: ["Morocco", "Rome", "Britain directly", "Mali"], correctIndex: 0, explanation: "Sultan al-Mansur of Morocco invaded." },
        { prompt: "The decisive battle where Songhai was defeated was", options: ["Tondibi", "Adwa", "Awdaghost", "Syene"], correctIndex: 0, explanation: "The Battle of Tondibi in 1591." },
        { prompt: "Morocco's decisive advantage at Tondibi was", options: ["more cavalry", "guns and cannon", "war elephants", "a larger army"], correctIndex: 1, explanation: "Firearms beat Songhai's larger cavalry force." },
        { prompt: "The Moroccan commander at Tondibi was", options: ["Ezana", "Sunni Ali", "Mansa Musa", "Judar Pasha"], correctIndex: 3, explanation: "Judar Pasha led the Moroccan army." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the origins of the Songhai state and its early relationship with Mali.", answerKey: "The Songhai state began at Kukiya near Gao under the Za dynasty in the 11th–12th centuries; its centre shifted to Gao, a trading hub, which Mali annexed around 1325 and held until internal strife led Mali to withdraw in the 1430s, allowing Songhai's rise. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Contrast the reigns of Sunni Ali and Askia Muhammad.", answerKey: "Sunni Ali was the conqueror who founded the empire, using cavalry and war canoes, sacking Timbuktu (1468) and taking Djenné (1473). Askia Muhammad (r. 1493–1528, Askia dynasty) organised and Islamised the state, centralising government with loyal governors, standardising weights and measures, and legitimising rule through Islam without forcing conversion. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Songhai was decisively defeated in 1591 at the Battle of", options: ["Awdaghost", "Adwa", "Tondibi", "Koumbi Saleh"], correctIndex: 2, answerKey: "The Battle of Tondibi, by Morocco's firearms. Option C.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how Askia Muhammad strengthened the government and economy of Songhai.", answerKey: "He replaced traditional rulers with royal family or trusted servants dependent on him (centralisation preventing breakaways); introduced standardised weights and measures and trade inspectors at major centres; and used Islam to legitimise his rule. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the rise, greatness and fall of the Songhai Empire.", answerKey: "Award marks for: origins at Gao/Kukiya and the Za dynasty, and Mali's withdrawal, 4 marks; Sunni Ali's conquests (Timbuktu 1468, Djenné 1473), 5 marks; Askia Muhammad's administration, Islam, trade reforms and the empire's greatest extent (Mali paying tribute by 1512), 8 marks; Timbuktu's scholarship, 3 marks; the fall — the 1528 revolt, civil war, and the 1591 Moroccan invasion with firearms at Tondibi, 5 marks. Confusing Sunni Ali and Askia caps at 16.", marks: 25 },
      ],
    },
  ],
};
