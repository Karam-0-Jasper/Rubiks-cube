import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester Two, Period V: Development of Other African States — Kanem-Bornu,
// the Hausa States, Oyo, Benin, and the Mossi and Akan states.
export const historyG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Development of Other African States",
  summary:
    "Period V of the MoE Grade 10 History syllabus. Learners study other important African states — the savanna kingdoms of Kanem-Bornu and the Hausa city-states, and the forest states of Oyo, Benin and the Akan and Mossi — examining their origins, government, trade and the place of Islam.",
  topics: [
    {
      slug: "savanna-states",
      title: "The Savanna States: Kanem-Bornu and the Hausa States",
      objective:
        "By the end of the topic, learners should be able to describe the founding, growth and government of Kanem-Bornu, and explain the origins of the Hausa city-states and the role of Islam and trade in the savanna region.",
      estimatedMinutes: 150,
      notes: `## Introduction

Ghana and Mali were not the only states of the West African grasslands. Across the wide **savanna** belt, other powerful societies rose and lasted for centuries — some as **single enduring kingdoms**, some as clusters of proud **city-states**. This topic looks at two of the most important: the long-lived kingdom of **Kanem-Bornu** around Lake Chad, and the **Hausa city-states** of northern Nigeria — examining how they were founded, how they were governed, and how **trade** and **Islam** shaped them, just as they had shaped Ghana and Mali.

## The savanna states

South of the Sahara, in the grassland (**savanna**) belt of the western and central Sudan, several important states grew up alongside the great empires of Ghana and Mali. Two groups stand out: **Kanem-Bornu** and the **Hausa city-states**.

## Kanem-Bornu

**Kanem-Bornu** was a long-lasting kingdom around **Lake Chad** (in present-day Chad, Niger, Nigeria and Cameroon).

- It began as the kingdom of **Kanem** and later shifted its centre to **Bornu**, west of the lake — hence the joined name.
- It grew wealthy through the **trans-Saharan trade**, exchanging goods across the desert (like Ghana and Mali), controlling a route that carried salt, horses and cloth for ivory, and other goods.
- Its rulers, called the **Mai**, adopted **Islam** early (around the 11th century), which strengthened trade links with North Africa and brought literacy and Muslim scholars.
- A famous ruler, **Mai Idris Alooma** (late 16th century), strengthened the state with a well-organised army (including **firearms** obtained through trade), and promoted Islam and justice.
- Kanem-Bornu survived for **many centuries**, one of the longest-lasting African states.

## The Hausa city-states

The **Hausa** people of northern Nigeria organised themselves into a number of independent **city-states** rather than a single empire.

- Well-known Hausa states included **Kano, Katsina, Zaria (Zazzau), Gobir** and others, each ruled by its own king (**Sarki**).
- Each was a walled **city** with a busy **market**, surrounded by farmland and villages.
- They were famous for **crafts and trade** — leatherwork, dyed cloth, and as centres on the trans-Saharan and regional trade routes.
- **Islam** spread among the Hausa through trade and scholars, and cities like **Kano** and **Katsina** became centres of learning.
- Because they were separate states, the Hausa were sometimes **rivals** and were later brought under one rule during the 19th-century reform movement (the **Sokoto Caliphate**, founded by Usman dan Fodio).

## Common features of the savanna states

- Growth through **trans-Saharan and regional trade**.
- The spread and influence of **Islam** (rulers, scholars, learning, law).
- Organised **government** under kings, with walled cities and armies.
- Contact with North Africa across the Sahara.

## Common errors and misconceptions

- **Treating the Hausa as one empire** — the Hausa were **several independent, sometimes rival city-states** (Kano, Katsina, Zaria, Gobir…), *not* a single state; they were only united later under the Sokoto Caliphate.
- **Confusing Kanem-Bornu's Mai with the Hausa Sarki** — the ruler of Kanem-Bornu was the **Mai**; each Hausa city-state had its own **Sarki**.
- **Assuming Islam was forced on the savanna states** — it spread **peacefully through trade and scholars**; rulers adopted it and cities such as Kano and Katsina became centres of learning.
- **Thinking these states were small or short-lived** — Kanem-Bornu was one of the **longest-lasting** African states, surviving many centuries.`,
      workedExample: `**Task.** Compare Kanem-Bornu and the Hausa states, and explain the role of Islam and trade in both.

**Kanem-Bornu**
- A **single long-lasting kingdom** around **Lake Chad**, beginning as Kanem and centred later on Bornu.
- Ruled by the **Mai**; a strong central state with a well-organised army (Mai **Idris Alooma** even used firearms).
- Grew rich on the **trans-Saharan trade**.

**The Hausa states**
- **Not one empire** but several independent **city-states** (Kano, Katsina, Zaria, Gobir…), each ruled by its own **Sarki**.
- Walled cities with busy markets, famous for **crafts** (leather, dyed cloth) and trade; sometimes rivals; later united under the **Sokoto Caliphate**.

**The role of Islam and trade in both**
- **Trade:** both grew wealthy through the **trans-Saharan and regional trade**, exchanging goods across the desert and the savanna; their cities were important market and route centres.
- **Islam:** in both, **Islam spread through trade and scholars**. Rulers adopted it (the Mai of Kanem-Bornu early on; Hausa kings later), and cities such as Kano and Katsina became **centres of Islamic learning**, bringing literacy, law and links with North Africa.

**Conclusion:** Kanem-Bornu was a single enduring kingdom and the Hausa a group of rival city-states, but both were savanna states shaped by the same two forces — **trans-Saharan trade** for their wealth and **Islam** for their religion, learning and government.`,
      teachingTip:
        "The key contrast is structure: Kanem-Bornu = one long-lasting kingdom; the Hausa = several separate city-states. Keep the two lists parallel so learners can compare them cleanly. Trade (trans-Saharan) and Islam are the two threads running through every savanna state — teach them as the shared 'why they grew' so learners can transfer the pattern from Ghana and Mali to these states as well.",
      quiz: [
        {
          prompt: "The savanna states grew up in the grassland belt south of the…",
          options: ["Sahara", "Atlantic Ocean", "Congo forest", "Mediterranean"],
          correctIndex: 0,
          explanation: "They lay in the Sudan savanna south of the Sahara.",
        },
        {
          prompt: "Kanem-Bornu was located around…",
          options: ["Lake Chad", "the River Nile", "the Atlantic coast", "the Cape of Good Hope"],
          correctIndex: 0,
          explanation: "Kanem-Bornu centred on Lake Chad.",
        },
        {
          prompt: "Kanem-Bornu began as the kingdom of … and later centred on Bornu.",
          options: ["Kanem", "Kano", "Oyo", "Benin"],
          correctIndex: 0,
          explanation: "It started as Kanem, then Bornu.",
        },
        {
          prompt: "The rulers of Kanem-Bornu were called the…",
          options: ["Mai", "Sarki", "Oba", "Asantehene"],
          correctIndex: 0,
          explanation: "The title of the ruler was Mai.",
        },
        {
          prompt: "Kanem-Bornu grew wealthy mainly through the…",
          options: ["trans-Saharan trade", "Atlantic slave trade only", "gold mines of the south", "fishing"],
          correctIndex: 0,
          explanation: "Trade across the Sahara enriched it.",
        },
        {
          prompt: "Which famous ruler strengthened Kanem-Bornu with a well-organised army and firearms?",
          options: ["Mai Idris Alooma", "Usman dan Fodio", "Sundiata", "Mansa Musa"],
          correctIndex: 0,
          explanation: "Idris Alooma modernised the army.",
        },
        {
          prompt: "The Mai of Kanem-Bornu adopted which religion early?",
          options: ["Islam", "Christianity", "Buddhism", "Hinduism"],
          correctIndex: 0,
          explanation: "The rulers adopted Islam around the 11th century.",
        },
        {
          prompt: "The Hausa organised themselves into…",
          options: ["independent city-states", "a single empire", "one kingdom under the Mai", "no states at all"],
          correctIndex: 0,
          explanation: "The Hausa were separate city-states.",
        },
        {
          prompt: "Which was a Hausa city-state?",
          options: ["Kano", "Bornu", "Oyo", "Benin"],
          correctIndex: 0,
          explanation: "Kano was a leading Hausa state.",
        },
        {
          prompt: "The ruler of a Hausa city-state was called the…",
          options: ["Sarki", "Mai", "Oba", "Pharaoh"],
          correctIndex: 0,
          explanation: "The Hausa king was the Sarki.",
        },
        {
          prompt: "Hausa cities were typically…",
          options: ["walled, with busy markets", "floating on water", "underground", "without any trade"],
          correctIndex: 0,
          explanation: "They were walled market cities.",
        },
        {
          prompt: "The Hausa were famous for crafts such as…",
          options: ["leatherwork and dyed cloth", "shipbuilding", "iron ships", "glass towers"],
          correctIndex: 0,
          explanation: "Leather and dyed cloth were Hausa specialities.",
        },
        {
          prompt: "Islam spread among the Hausa mainly through…",
          options: ["trade and scholars", "warfare only", "the Atlantic Ocean", "European missionaries"],
          correctIndex: 0,
          explanation: "Traders and scholars carried Islam.",
        },
        {
          prompt: "Kano and Katsina became centres of…",
          options: ["Islamic learning", "shipbuilding", "gold mining", "European government"],
          correctIndex: 0,
          explanation: "They were centres of Muslim scholarship.",
        },
        {
          prompt: "The Hausa states were later united under the…",
          options: ["Sokoto Caliphate", "Roman Empire", "Mali Empire", "British Empire only"],
          correctIndex: 0,
          explanation: "Usman dan Fodio's reform created the Sokoto Caliphate.",
        },
        {
          prompt: "The 19th-century Islamic reformer who founded the Sokoto Caliphate was…",
          options: ["Usman dan Fodio", "Idris Alooma", "Mansa Musa", "Sundiata"],
          correctIndex: 0,
          explanation: "Usman dan Fodio led the reform movement.",
        },
        {
          prompt: "A common feature of the savanna states was growth through…",
          options: ["trade and the influence of Islam", "isolation from all trade", "living in the desert only", "avoiding all religion"],
          correctIndex: 0,
          explanation: "Trade and Islam shaped them all.",
        },
        {
          prompt: "Kanem-Bornu is notable for being…",
          options: ["one of the longest-lasting African states", "the shortest-lived state", "an ocean empire", "a European colony"],
          correctIndex: 0,
          explanation: "It survived for many centuries.",
        },
        {
          prompt: "A key difference between Kanem-Bornu and the Hausa states is that Kanem-Bornu was…",
          options: ["a single kingdom, while the Hausa were several city-states", "a group of city-states", "on the coast", "a forest state"],
          correctIndex: 0,
          explanation: "One kingdom vs several city-states.",
        },
        {
          prompt: "Because they were separate states, the Hausa were sometimes…",
          options: ["rivals of one another", "always united", "ruled by the Mai", "in the forest"],
          correctIndex: 0,
          explanation: "Independent city-states were often rivals.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Where was Kanem-Bornu located, and what were its rulers called?",
          answerKey:
            "Kanem-Bornu was located around Lake Chad (central Sudan); its rulers were called the Mai. Award a mark for the location and a mark for the title Mai.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name two Hausa city-states and state one thing they were famous for.",
          answerKey:
            "Any two of Kano, Katsina, Zaria (Zazzau), Gobir. Famous for (any one): crafts such as leatherwork and dyed cloth; trade; Islamic learning (Kano, Katsina). Award marks for two states and one valid feature.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which statement correctly contrasts Kanem-Bornu and the Hausa states?",
          options: [
            "Kanem-Bornu was a single kingdom; the Hausa were several independent city-states",
            "Both were single empires",
            "Both were on the Atlantic coast",
            "The Hausa were one kingdom; Kanem-Bornu was many city-states",
          ],
          correctIndex: 0,
          answerKey: "Kanem-Bornu was one kingdom; the Hausa were several city-states.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the role of trade and Islam in the development of the savanna states of Kanem-Bornu and the Hausa.",
          answerKey:
            "A strong answer explains that both Kanem-Bornu and the Hausa states grew wealthy through the trans-Saharan and regional trade, their cities acting as market and route centres exchanging goods such as salt, horses, cloth and craft products. Islam spread through this trade and through scholars: rulers adopted it (the Mai of Kanem-Bornu early; Hausa kings later), and cities such as Kano and Katsina became centres of Islamic learning, bringing literacy, law and links with North Africa; in Kanem-Bornu, rulers like Idris Alooma promoted Islam and justice, and the Hausa were later united under the Islamic Sokoto Caliphate. Award marks for explaining both trade and Islam in the development of these states.",
          marks: 6,
        },
      ],
    },
    {
      slug: "forest-states",
      title: "The Forest States: Oyo, Benin, Akan and Mossi",
      objective:
        "By the end of the topic, learners should be able to describe the origins, government and achievements of the forest states of Oyo and Benin, and outline the Akan and Mossi states.",
      estimatedMinutes: 150,
      notes: `## Introduction

Not every great West African state grew from the desert trade. In the thick **forest zone** near the coast, powerful societies developed from the land itself — from farming, from **gold**, from remarkable **art**, and from strong **armies**. This topic explores four of them: the Yoruba empire of **Oyo** and the Edo kingdom of **Benin** (famous for its bronzes) in modern Nigeria, and the gold-rich **Akan** and the cavalry states of the **Mossi** in the region of modern Ghana and Burkina Faso — showing how varied and sophisticated West Africa's civilizations were.

## The forest states

South of the savanna, in the **forest zone** of West Africa, other important states developed — including **Oyo** and **Benin** (in present-day Nigeria) and the **Akan** states and the **Mossi** states (in the region of modern Ghana and Burkina Faso). Unlike the savanna states, these were less shaped by trans-Saharan trade and Islam, and more by the forest environment, farming, and (later) trade with Europeans on the coast.

## The Oyo Empire

**Oyo** was a powerful **Yoruba** empire.

- It was ruled by a king called the **Alaafin**, who governed from the capital, Old Oyo.
- The Alaafin's power was **balanced** by a council of chiefs (the **Oyo Mesi**), led by the **Bashorun** — a check on the king's authority, an example of organised government.
- Oyo grew strong through its **cavalry (horsemen)**, which allowed it to control the savanna's edge and trade routes, and it became wealthy through trade, including trade with Europeans on the coast.

## The Kingdom of Benin

**Benin** (the Edo kingdom, not the modern country) was famous for its **art and organised government**.

- It was ruled by a king called the **Oba**, with a well-organised capital, Benin City, protected by great **walls and moats**.
- Benin is world-famous for its **brass and bronze sculptures** (the "Benin Bronzes") and **ivory carvings**, made by skilled craftsmen for the royal court — evidence of advanced African art and metalworking.
- It traded with Europeans (from the 15th century) in ivory, pepper and other goods.

## The Akan states

The **Akan** peoples (in the forest of modern Ghana) formed several states based on **gold**.

- The region was rich in **gold**, which the Akan mined and traded.
- Several Akan states later united to form the powerful **Asante (Ashanti) Empire**, ruled by the **Asantehene**, with its capital at **Kumasi** and its famous symbol of unity, the **Golden Stool**.

## The Mossi states

The **Mossi** (in the region of modern Burkina Faso) formed a group of states in the savanna-forest borderland.

- They were known for their **strong cavalry** and for **resisting** the spread of Islam and the domination of the larger empires (Mali and Songhai) around them for a long time.
- They kept much of their traditional religion and independent kingship.

## What these states show

The forest states show that West Africa had **many advanced, organised societies** — with kings and councils, great art (Benin), gold wealth (Akan), and strong armies (Oyo, Mossi) — developing in their own way, not only through Saharan trade and Islam.

## Common errors and misconceptions

- **Confusing the historic kingdom of Benin with the modern Republic of Benin** — the kingdom studied here is the **Edo kingdom of Benin** (in modern Nigeria), *not* the present-day country of that name.
- **Thinking the Alaafin of Oyo was an all-powerful king** — his power was deliberately **balanced by the Oyo Mesi**, a council of chiefs led by the Bashorun — an early example of organised, checked government.
- **Believing the "Benin Bronzes" were made by Europeans** — they were made by **skilled Edo craftsmen** for the royal court, proof of advanced African art and metalworking.
- **Mixing up the forest states' foundations** — Oyo rested on **cavalry**, Benin on **art and organised government**, the Akan on **gold**, and the Mossi on **cavalry and resistance to Islam**; each has its own signature.`,
      workedExample: `**Task.** (a) Who ruled Oyo and Benin, and how was the Oyo king's power limited? (b) What is Benin most famous for? (c) On what was the wealth of the Akan states based?

**Part (a) — rulers of Oyo and Benin, and the check on Oyo's king**
- **Oyo** was ruled by the **Alaafin** (a Yoruba king).
- **Benin** was ruled by the **Oba** (an Edo king).
- The Alaafin's power was **limited (balanced) by a council of chiefs, the Oyo Mesi**, led by the **Bashorun**. This council could check the king's decisions — an example of organised government with a balance of power, rather than an all-powerful ruler.

**Part (b) — what Benin is most famous for**
Benin is world-famous for its **art** — especially its **brass and bronze sculptures (the "Benin Bronzes")** and **ivory carvings**, made by skilled craftsmen for the royal court. Its capital, Benin City, was also famous for its great **walls and moats**. This art is important evidence of advanced African skill in metalworking and organised royal patronage.

**Part (c) — the basis of Akan wealth**
The wealth of the **Akan** states was based on **gold**. Their forest region was rich in gold, which they mined and traded; several Akan states later united into the powerful **Asante (Ashanti) Empire**.

**Conclusion:** Oyo (ruled by the Alaafin, checked by the Oyo Mesi) and Benin (ruled by the Oba, famous for its bronzes) were sophisticated Yoruba/Edo forest states, while the Akan built their power on gold — together showing the richness and variety of West Africa's forest civilizations.`,
      teachingTip:
        "The forest states are best learned by their signature feature: Oyo — cavalry and a king checked by a council (the Oyo Mesi); Benin — the Oba and world-famous bronzes and city walls; Akan — gold, leading to Asante; Mossi — cavalry and long resistance to Islam. Assign one distinctive fact per state so learners can tell them apart. Stress the Benin Bronzes as hard evidence of advanced African art, countering the myth that pre-colonial Africa lacked sophistication.",
      quiz: [
        {
          prompt: "The forest states developed in the … zone of West Africa.",
          options: ["forest", "desert", "Arctic", "ocean"],
          correctIndex: 0,
          explanation: "They lay in the forest zone south of the savanna.",
        },
        {
          prompt: "Oyo was an empire of which people?",
          options: ["the Yoruba", "the Hausa", "the Edo", "the Mossi"],
          correctIndex: 0,
          explanation: "Oyo was a Yoruba empire.",
        },
        {
          prompt: "The king of Oyo was called the…",
          options: ["Alaafin", "Oba", "Mai", "Sarki"],
          correctIndex: 0,
          explanation: "The Oyo king was the Alaafin.",
        },
        {
          prompt: "The Alaafin's power was checked by a council of chiefs called the…",
          options: ["Oyo Mesi", "Sarki", "Golden Stool", "Sokoto"],
          correctIndex: 0,
          explanation: "The Oyo Mesi balanced the king's power.",
        },
        {
          prompt: "Oyo grew strong militarily because of its…",
          options: ["cavalry (horsemen)", "navy", "gunboats", "elephants only"],
          correctIndex: 0,
          explanation: "Cavalry gave Oyo military strength.",
        },
        {
          prompt: "The kingdom of Benin was ruled by a king called the…",
          options: ["Oba", "Alaafin", "Mai", "Asantehene"],
          correctIndex: 0,
          explanation: "The Benin king was the Oba.",
        },
        {
          prompt: "Benin is world-famous for its…",
          options: ["brass and bronze sculptures", "pyramids", "ships", "gold coins"],
          correctIndex: 0,
          explanation: "The 'Benin Bronzes' are famous.",
        },
        {
          prompt: "Benin City was protected by great…",
          options: ["walls and moats", "rivers only", "deserts", "ice"],
          correctIndex: 0,
          explanation: "Benin City had famous walls and moats.",
        },
        {
          prompt: "The wealth of the Akan states was based on…",
          options: ["gold", "salt", "oil", "iron ships"],
          correctIndex: 0,
          explanation: "The Akan region was rich in gold.",
        },
        {
          prompt: "Several Akan states later united to form the … Empire.",
          options: ["Asante (Ashanti)", "Oyo", "Benin", "Sokoto"],
          correctIndex: 0,
          explanation: "The Asante Empire grew from Akan states.",
        },
        {
          prompt: "The ruler of the Asante Empire was the…",
          options: ["Asantehene", "Alaafin", "Oba", "Mai"],
          correctIndex: 0,
          explanation: "The Asante king was the Asantehene.",
        },
        {
          prompt: "The famous symbol of unity of the Asante was the…",
          options: ["Golden Stool", "Benin Bronze", "Oyo Mesi", "Lone Star"],
          correctIndex: 0,
          explanation: "The Golden Stool symbolised Asante unity.",
        },
        {
          prompt: "The Mossi states were known for their strong cavalry and for…",
          options: ["resisting the spread of Islam for a long time", "building ships", "mining salt", "abandoning kingship"],
          correctIndex: 0,
          explanation: "The Mossi long resisted Islam and larger empires.",
        },
        {
          prompt: "Compared with the savanna states, the forest states were less shaped by…",
          options: ["trans-Saharan trade and Islam", "farming", "kingship", "art"],
          correctIndex: 0,
          explanation: "The forest states were less influenced by Saharan trade and Islam.",
        },
        {
          prompt: "The 'Benin Bronzes' are important because they show…",
          options: ["advanced African art and metalworking", "European technology", "that Benin had no rulers", "that Africa had no art"],
          correctIndex: 0,
          explanation: "They are evidence of sophisticated African art.",
        },
        {
          prompt: "The Akan and Asante states were located in the region of modern…",
          options: ["Ghana", "Egypt", "Kenya", "Liberia"],
          correctIndex: 0,
          explanation: "The Akan/Asante were in modern Ghana.",
        },
        {
          prompt: "From the 15th century, forest states like Benin and Oyo traded with…",
          options: ["Europeans on the coast", "the Romans", "the Chinese only", "no one"],
          correctIndex: 0,
          explanation: "They traded with Europeans arriving on the coast.",
        },
        {
          prompt: "The capital of the Asante Empire was…",
          options: ["Kumasi", "Benin City", "Old Oyo", "Kano"],
          correctIndex: 0,
          explanation: "Kumasi was the Asante capital.",
        },
        {
          prompt: "The forest states show that West Africa had…",
          options: ["many advanced, organised societies", "no organised states", "only deserts", "only European rule"],
          correctIndex: 0,
          explanation: "They prove West Africa's rich, varied civilizations.",
        },
        {
          prompt: "Benin, in this topic, refers to…",
          options: ["the Edo kingdom (not the modern country)", "the modern Republic of Benin only", "a Hausa city", "an ocean"],
          correctIndex: 0,
          explanation: "It is the historic Edo kingdom of Benin.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name the ruler of Oyo and the ruler of Benin.",
          answerKey:
            "Oyo was ruled by the Alaafin; Benin was ruled by the Oba. Award a mark for each correct title.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State what the kingdom of Benin is famous for, and what the Akan states' wealth was based on.",
          answerKey:
            "Benin is famous for its art — brass/bronze sculptures (the Benin Bronzes) and ivory carvings, and its walled capital. The Akan states' wealth was based on gold. Award marks for the Benin art and the Akan gold.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The Alaafin of Oyo's power was limited by which body?",
          options: ["the council of chiefs (Oyo Mesi)", "the Golden Stool", "the Sokoto Caliphate", "the Benin Bronzes"],
          correctIndex: 0,
          answerKey: "The Oyo Mesi council checked the Alaafin's power.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss how the forest states of Oyo, Benin and the Akan show that West Africa had advanced, organised societies.",
          answerKey:
            "A strong answer uses the forest states as evidence of sophistication: Oyo had organised government with a king (Alaafin) whose power was balanced by a council (the Oyo Mesi) and a strong cavalry; Benin had a well-organised capital with great walls and moats and produced world-famous brass and bronze art (the Benin Bronzes), evidence of advanced metalworking and royal patronage; the Akan built wealth on gold and later formed the powerful Asante Empire under the Asantehene with the Golden Stool as a symbol of unity. Together these show West Africa had many advanced states with organised government, great art, and strong economies. Award marks for using at least two states as evidence of organised, advanced society.",
          marks: 6,
        },
      ],
    },
  ],
};
