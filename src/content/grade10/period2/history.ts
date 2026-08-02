import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester One, Period II: Introduction to African History — Ethiopia, the
// Swahili Civilization and Culture, and the civilization of Ancient Sudan.
export const historyG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Early African Civilizations: Ethiopia, Swahili and Ancient Sudan",
  summary:
    "Period II of the MoE Grade 10 History syllabus. Learners study early African civilizations — the history of Ethiopia and the tradition of King Solomon and the Queen of Sheba, the trading Swahili civilization of the East African coast, and the ancient kingdoms of the Sudan — and evaluate their contributions to African history.",
  topics: [
    {
      slug: "ancient-ethiopia",
      title: "Ancient Ethiopia and the Kingdom of Aksum",
      objective:
        "By the end of the topic, learners should be able to explain the place of King Solomon and the Queen of Sheba in Ethiopian tradition, describe the achievements of the Kingdom of Aksum, and discuss Ethiopia's contribution to African history.",
      estimatedMinutes: 150,
      notes: `## Introduction

While much of the world was still without cities, the Horn of Africa was home to one of the oldest and proudest civilisations on Earth — **Ethiopia**. Its kingdom of **Aksum** minted its own coins, built towering stone monuments, controlled Red Sea trade, and was among the first states in the world to adopt Christianity. Its story, wrapped in the tradition of **King Solomon and the Queen of Sheba**, is a powerful answer to the myth that Africa lacked great states. This topic explores that tradition, the achievements of Aksum, and Ethiopia's place in African history.

## Ethiopia: one of Africa's oldest states

**Ethiopia** (in the Horn of Africa) is one of the oldest continuous civilizations in the world. Long before European contact it had its own kingdoms, writing, religion and trade — proof that Africa produced advanced, organised states.

## The tradition of Solomon and the Queen of Sheba

A famous tradition, told in the Ethiopian national epic the **Kebra Nagast** ("Glory of Kings"), links Ethiopia to the biblical King Solomon of Israel.

- The **Queen of Sheba** (called *Makeda* in Ethiopian tradition) is said to have travelled to Jerusalem to visit **King Solomon**, famed for his wisdom.
- According to the tradition, their son **Menelik I** became the first emperor of Ethiopia.
- From this story the Ethiopian royal family claimed the title of the **"Solomonic dynasty"**, a line of rulers who traced their descent to Solomon.

Whether or not the events happened exactly as told, the tradition was historically important: it gave Ethiopian kings great prestige and helped bind the nation together for centuries.

## The Kingdom of Aksum

The real historical greatness of early Ethiopia is seen in the **Kingdom of Aksum** (roughly the first to the seventh centuries CE), one of the great trading powers of the ancient world.

- **Trade:** Aksum lay near the Red Sea and traded ivory, gold and other goods with Egypt, Arabia, India and the Roman world.
- **Coins:** Aksum minted its own **gold, silver and bronze coins** — a sign of a strong, organised economy.
- **Writing:** it used the **Ge'ez** script, still used in the Ethiopian church today.
- **Monuments:** the Aksumites raised giant carved stone pillars called **stelae (obelisks)**, some over 20 metres tall.
- **Religion:** in the fourth century CE, King **Ezana** made Aksum one of the first states in the world to adopt **Christianity** as its official religion.

## Ethiopia's contribution to African history

- It shows that Africa had literate, coin-using, monument-building civilizations in ancient times.
- Its long independence and unique church made it a symbol of African dignity.
- Ethiopia famously defeated a European invasion at the **Battle of Adwa (1896)**, becoming a source of pride for Africans everywhere and, later, for the Pan-African movement.

## Common errors and misconceptions

- **Confusing the kingdom's name** — the great ancient kingdom of the region was **Aksum (Axum)**; "Ethiopia" is the wider and modern name for the country.
- **Treating the Solomon–Sheba story as plain fact** — it is a **tradition** that gave the ruling line its legitimacy; historians treat it as an important belief, not a documented event.
- **Thinking Christianity came to Africa only with Europeans** — Aksum adopted **Christianity in the 4th century AD**, centuries before European colonisers arrived.
- **Believing all of Africa was colonised** — Ethiopia kept its **independence**, defeating Italy at **Adwa (1896)**.`,
      workedExample: `**Task.** A student claims, "Ancient Africa had no organised states before Europeans arrived." Using the example of Aksum, write a short answer that corrects this claim with evidence.

**Model answer**

The claim is false, and the Kingdom of Aksum in ancient Ethiopia disproves it clearly.

- **A strong economy:** Aksum was a major trading power on the Red Sea, exchanging ivory and gold with Egypt, Arabia, India and Rome — and it minted its **own gold, silver and bronze coins**, which only a well-organised state can do.
- **Writing:** the Aksumites used the **Ge'ez** script, showing they were literate long before European contact.
- **Monuments:** they carved enormous stone **stelae (obelisks)**, some over 20 metres high — evidence of engineering skill and central organisation.
- **Religion and government:** King **Ezana** adopted Christianity as the state religion in the fourth century CE, making Aksum one of the earliest Christian states in the world, ruled by kings who traced their line to Solomon.

**Conclusion:** far from having "no organised states," ancient Africa produced Aksum — a literate, coin-using, monument-building, independent kingdom — centuries before European involvement. The evidence of coins, script and stelae makes the point beyond doubt.`,
      teachingTip:
        "Learners often confuse tradition (the Solomon–Sheba story) with documented history (the Kingdom of Aksum). Draw the line explicitly: the tradition explains why Ethiopian kings claimed prestige, while the coins, Ge'ez script and stelae are hard evidence of a real, advanced state. Teaching both sides also models the Period I lesson on how historians weigh different kinds of sources.",
      quiz: [
        {
          prompt: "Ethiopia is located in which part of Africa?",
          options: ["the Horn of Africa", "West Africa", "Southern Africa", "the Sahara"],
          correctIndex: 0,
          explanation: "Ethiopia lies in the Horn of Africa, in the east.",
        },
        {
          prompt: "The Ethiopian national epic that tells the Solomon–Sheba story is the…",
          options: ["Kebra Nagast", "Iliad", "Quran", "Domesday Book"],
          correctIndex: 0,
          explanation: "The Kebra Nagast ('Glory of Kings') records the tradition.",
        },
        {
          prompt: "In Ethiopian tradition, the Queen of Sheba is known as…",
          options: ["Makeda", "Cleopatra", "Nefertiti", "Amina"],
          correctIndex: 0,
          explanation: "Ethiopian tradition calls the Queen of Sheba Makeda.",
        },
        {
          prompt: "King Solomon was famous for his…",
          options: ["wisdom", "cruelty", "cowardice", "poverty"],
          correctIndex: 0,
          explanation: "Solomon was renowned for his wisdom.",
        },
        {
          prompt: "According to tradition, the first emperor of Ethiopia was…",
          options: ["Menelik I", "Ezana", "Solomon", "Adwa"],
          correctIndex: 0,
          explanation: "Menelik I, son of Solomon and Sheba in the tradition.",
        },
        {
          prompt: "The Ethiopian royal line claimed descent from Solomon and was called the…",
          options: ["Solomonic dynasty", "Roman Empire", "Swahili coast", "Mali Empire"],
          correctIndex: 0,
          explanation: "Ethiopian kings claimed the Solomonic dynasty.",
        },
        {
          prompt: "The great ancient trading kingdom of early Ethiopia was…",
          options: ["Aksum", "Ghana", "Songhai", "Carthage"],
          correctIndex: 0,
          explanation: "Aksum was the powerful early Ethiopian kingdom.",
        },
        {
          prompt: "Aksum's location near the Red Sea helped it become powerful through…",
          options: ["trade", "farming only", "isolation", "fishing only"],
          correctIndex: 0,
          explanation: "Red Sea trade brought Aksum great wealth.",
        },
        {
          prompt: "A clear sign of Aksum's organised economy was that it…",
          options: ["minted its own coins", "used no money", "banned trade", "had no rulers"],
          correctIndex: 0,
          explanation: "Aksum struck its own gold, silver and bronze coins.",
        },
        {
          prompt: "The script used by Aksum, still used in the Ethiopian church, is…",
          options: ["Ge'ez", "Latin", "Arabic", "Greek"],
          correctIndex: 0,
          explanation: "Ge'ez was the Aksumite script.",
        },
        {
          prompt: "The giant carved stone pillars of Aksum are called…",
          options: ["stelae (obelisks)", "pyramids", "castles", "temples"],
          correctIndex: 0,
          explanation: "Aksum is famous for its tall stelae.",
        },
        {
          prompt: "Which king made Aksum adopt Christianity as its state religion?",
          options: ["Ezana", "Menelik I", "Solomon", "Ramses"],
          correctIndex: 0,
          explanation: "King Ezana adopted Christianity in the fourth century CE.",
        },
        {
          prompt: "Aksum was one of the first states in the world to adopt…",
          options: ["Christianity", "coins", "the wheel", "iron"],
          correctIndex: 0,
          explanation: "It became officially Christian very early, under Ezana.",
        },
        {
          prompt: "The Battle of Adwa (1896) is important because Ethiopia…",
          options: ["defeated a European invasion", "was colonised", "lost its coins", "left Africa"],
          correctIndex: 0,
          explanation: "Ethiopia defeated Italy at Adwa, keeping its independence.",
        },
        {
          prompt: "Aksum traded goods such as ivory and gold with all of these EXCEPT…",
          options: ["the Americas", "Egypt", "Arabia", "India"],
          correctIndex: 0,
          explanation: "Aksum's trade linked Africa, Arabia, India and Rome — not the Americas.",
        },
        {
          prompt: "Why is the Solomon–Sheba tradition historically important even if not fully proven?",
          options: [
            "It gave Ethiopian kings prestige and unity",
            "It created the Red Sea",
            "It invented the Ge'ez script",
            "It ended all trade",
          ],
          correctIndex: 0,
          explanation: "The tradition strengthened royal authority and national identity.",
        },
        {
          prompt: "The height of some Aksumite stelae shows the people's skill in…",
          options: ["engineering and stone-carving", "sailing", "farming", "painting"],
          correctIndex: 0,
          explanation: "Raising huge carved pillars required real engineering ability.",
        },
        {
          prompt: "Ethiopia is significant to Pan-Africanism partly because it…",
          options: [
            "remained independent and defeated a European power",
            "was the largest colony",
            "abolished its own church",
            "had no history",
          ],
          correctIndex: 0,
          explanation: "Its independence and the victory at Adwa inspired Africans.",
        },
        {
          prompt: "The study of Aksum helps disprove the idea that…",
          options: [
            "Africa had no advanced states before Europeans",
            "trade existed in ancient times",
            "coins were used in the past",
            "kings ruled kingdoms",
          ],
          correctIndex: 0,
          explanation: "Aksum shows Africa had advanced civilizations independently.",
        },
        {
          prompt: "Which of these is documented history rather than tradition?",
          options: [
            "Aksum minted its own coins",
            "Menelik I was the son of Solomon and Sheba",
            "The Queen of Sheba was named Makeda",
            "Solomon fathered the Ethiopian line",
          ],
          correctIndex: 0,
          explanation: "Coins are physical evidence; the Solomon story is tradition.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the place of King Solomon and the Queen of Sheba in Ethiopian tradition.",
          answerKey:
            "The Queen of Sheba (Makeda) is said to have visited King Solomon of Israel; their son Menelik I became the first emperor of Ethiopia, founding the 'Solomonic dynasty' from which Ethiopian kings claimed descent. Award marks for the visit, the son Menelik I, and the Solomonic dynasty claim.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three achievements of the Kingdom of Aksum.",
          answerKey:
            "Accept any three: a major Red Sea trading power; minted its own coins; used the Ge'ez script; built tall stelae/obelisks; adopted Christianity under King Ezana. Award a mark per valid achievement.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which achievement is the strongest evidence that Aksum had a well-organised economy?",
          options: [
            "It minted its own coins",
            "It was near the sea",
            "It had a royal family",
            "It had tall buildings",
          ],
          correctIndex: 0,
          answerKey: "Minting coins requires a centrally organised, wealthy state.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss Ethiopia's contribution to African history, referring to both the Kingdom of Aksum and Ethiopia's later independence.",
          answerKey:
            "A strong answer covers Aksum's achievements (trade, coins, Ge'ez writing, stelae, early Christianity under Ezana) as proof of an advanced ancient African civilization, and Ethiopia's long independence — culminating in the defeat of a European invader at Adwa (1896) — as a symbol of African dignity that inspired Pan-Africanism. Award marks for at least two Aksumite contributions and a clear discussion of Ethiopia's significance as an independent African state.",
          marks: 6,
        },
      ],
    },
    {
      slug: "swahili-and-ancient-sudan",
      title: "The Swahili Civilization and Ancient Sudan",
      objective:
        "By the end of the topic, learners should be able to describe the origins and character of the Swahili civilization of the East African coast, identify the peoples who contributed to it, and outline the civilization of ancient Sudan and the origins of African societies.",
      estimatedMinutes: 150,
      notes: `## Introduction

Africa's greatness was not only inland — along its **eastern coast**, trade with the wider Indian Ocean world gave rise to the wealthy **Swahili** city-states, where African, Arab and Asian influences blended into a new culture and language. Together with the earlier civilisation of **ancient Sudan**, these societies show Africans building cities, commerce and culture through their own trade and enterprise. This topic describes the origins and character of the **Swahili** civilisation, the peoples who shaped it, and the civilisation of **ancient Sudan**.

## The Swahili civilization

Along the **East African coast** — from present-day Somalia down through Kenya, Tanzania and Mozambique — a rich trading civilization grew up from about the 8th century CE: the **Swahili civilization**.

### A civilization built on trade
The Swahili coast sat at the meeting point of Africa and the **Indian Ocean** trade routes. Traders exchanged African goods — **gold, ivory, timber and enslaved people** — for goods from Arabia, Persia, India and China, such as **cloth, porcelain and beads**. Ships called **dhows** used the seasonal **monsoon winds** to sail back and forth.

### A blend of peoples and cultures
The Swahili civilization was created by the mixing of several peoples:

- **Africans** (Bantu-speaking coastal peoples) formed its foundation,
- together with **Arabs**, **Persians**, and traders from **India** and **China**.

Out of this contact came the **Swahili (Kiswahili) language** — a **Bantu African language** enriched with many Arabic words — and the spread of **Islam** along the coast.

### City-states
The civilization was organised into wealthy, independent **city-states** such as **Kilwa, Mombasa, Zanzibar** and **Sofala**, each ruled by its own leaders and famous for stone buildings, mosques and busy ports.

## The civilization of Ancient Sudan

In the histories of Africa, **"the Sudan"** originally meant the broad belt of grassland (savanna) south of the Sahara — the *Bilad al-Sudan*, "land of the black peoples" — not only the modern country.

- Along the **Nile** in the region of ancient **Nubia** (in today's Sudan) rose the powerful **Kingdom of Kush**, with its capitals at **Napata** and later **Meroë**.
- Kush was famous for **ironworking** and for its own pyramids at Meroë, and its kings once ruled Egypt as pharaohs.
- Further west, the grasslands of the "western Sudan" would later give rise to the great trading empires of **Ghana, Mali and Songhai** (studied in later periods).

## The origin of African societies

Early African societies grew from small kin-based communities into larger organised societies through:

- **farming and herding**, which allowed settled village life,
- **trade**, which brought wealth and contact with other peoples,
- **ironworking**, which improved tools and weapons,
- and shared **language, religion and rule**, which bound people together into kingdoms and civilizations such as Aksum, the Swahili coast and Kush.

## Common errors and misconceptions

- **Thinking Swahili is only a language** — **Swahili** names both a **people/civilisation** of the East African coast and the **language** that grew from their trade contacts.
- **Believing Arabs "founded" the Swahili cities** — the Swahili civilisation was fundamentally **African**, enriched by trade contact with Arab and Asian merchants; it was a *blend*, not a foreign creation.
- **Confusing ancient Sudan with the modern country** — "the Sudan" here means the broad belt of Africa south of the Sahara, not only today's Republic of Sudan.
- **Assuming African states arose without trade or iron** — farming, **ironworking** and **trade** were the very foundations on which these kingdoms grew.`,
      workedExample: `**Task.** Explain how trade shaped the Swahili civilization, and identify the peoples who contributed to it.

**How trade shaped the Swahili civilization**

- The East African coast lay on the **Indian Ocean** trade network. The Swahili exported African goods — **gold, ivory and timber** — and imported **cloth, porcelain and beads** from Arabia, Persia, India and China.
- Trade made coastal towns rich, producing prosperous **city-states** such as **Kilwa, Mombasa and Zanzibar**, with stone houses, mosques and busy harbours.
- Trade brought not only goods but **ideas and religion**: **Islam** spread along the coast, and the constant contact produced the **Kiswahili language** — a Bantu African language enriched with Arabic words.
- Sailing depended on the **monsoon winds**, which let **dhows** travel to Arabia and India and return with the change of season.

**Who contributed to it**
The civilization was a blend of peoples: **African** (Bantu-speaking) coastal communities at its base, together with **Arabs**, **Persians**, and traders from **India** and **China**.

**Conclusion:** the Swahili civilization is a clear example of how **trade** can build wealth, cities, a new language and a shared religion by drawing different peoples together.`,
      teachingTip:
        "Stress that Kiswahili is fundamentally an African (Bantu) language that absorbed Arabic vocabulary — a common exam misconception is that it is 'an Arabic language'. Similarly, clarify early that 'the Sudan' in African history means the whole savanna belt below the Sahara, not just the modern country; without this, learners misplace Ghana, Mali and Kush on the map.",
      quiz: [
        {
          prompt: "The Swahili civilization grew up along which coast?",
          options: ["the East African coast", "the West African coast", "the Mediterranean coast", "the Atlantic coast"],
          correctIndex: 0,
          explanation: "It developed along the East African (Indian Ocean) coast.",
        },
        {
          prompt: "The Swahili civilization was built mainly on…",
          options: ["Indian Ocean trade", "farming alone", "warfare", "isolation"],
          correctIndex: 0,
          explanation: "Trade across the Indian Ocean was its foundation.",
        },
        {
          prompt: "Which winds did Swahili traders use to sail to and from Arabia and India?",
          options: ["monsoon winds", "harmattan winds", "trade of the Atlantic", "polar winds"],
          correctIndex: 0,
          explanation: "The seasonal monsoon winds powered the dhow trade.",
        },
        {
          prompt: "Swahili ships were called…",
          options: ["dhows", "canoes", "galleons", "junks"],
          correctIndex: 0,
          explanation: "Dhows sailed the Indian Ocean using the monsoon.",
        },
        {
          prompt: "The Kiswahili language is basically a … language enriched with Arabic words.",
          options: ["Bantu (African)", "European", "Persian", "Chinese"],
          correctIndex: 0,
          explanation: "Kiswahili is a Bantu African language with Arabic loanwords.",
        },
        {
          prompt: "Which religion spread along the Swahili coast through trade?",
          options: ["Islam", "Buddhism", "Hinduism", "Shinto"],
          correctIndex: 0,
          explanation: "Islam spread among the Swahili city-states.",
        },
        {
          prompt: "Which of these was a Swahili city-state?",
          options: ["Kilwa", "Timbuktu", "Cairo", "Carthage"],
          correctIndex: 0,
          explanation: "Kilwa (with Mombasa, Zanzibar, Sofala) was a Swahili city-state.",
        },
        {
          prompt: "Which peoples contributed to the Swahili civilization?",
          options: [
            "Africans, Arabs, Persians, Indians and Chinese",
            "only Europeans",
            "only Arabs",
            "only Chinese",
          ],
          correctIndex: 0,
          explanation: "It was a blend of African, Arab, Persian, Indian and Chinese contact.",
        },
        {
          prompt: "African goods exported by the Swahili included…",
          options: ["gold and ivory", "porcelain and silk", "cars and radios", "coal and steel"],
          correctIndex: 0,
          explanation: "They exported gold, ivory and timber and imported cloth and porcelain.",
        },
        {
          prompt: "In African history, 'the Sudan' originally meant…",
          options: [
            "the grassland belt south of the Sahara",
            "only the modern country of Sudan",
            "the Sahara desert itself",
            "the East African coast",
          ],
          correctIndex: 0,
          explanation: "It meant the savanna 'land of the black peoples' below the Sahara.",
        },
        {
          prompt: "The powerful ancient kingdom along the Nile in Nubia was…",
          options: ["Kush", "Kilwa", "Aksum", "Songhai"],
          correctIndex: 0,
          explanation: "The Kingdom of Kush arose in Nubia along the Nile.",
        },
        {
          prompt: "The later capital of Kush, famous for ironworking and pyramids, was…",
          options: ["Meroë", "Mombasa", "Adwa", "Zanzibar"],
          correctIndex: 0,
          explanation: "Meroë was Kush's later capital, known for iron and pyramids.",
        },
        {
          prompt: "The kings of Kush were once powerful enough to rule…",
          options: ["Egypt as pharaohs", "Rome", "India", "China"],
          correctIndex: 0,
          explanation: "Kushite kings ruled Egypt as pharaohs for a time.",
        },
        {
          prompt: "The western Sudan later gave rise to which great trading empires?",
          options: ["Ghana, Mali and Songhai", "Aksum and Kush", "Kilwa and Sofala", "Rome and Greece"],
          correctIndex: 0,
          explanation: "Ghana, Mali and Songhai rose in the western Sudan.",
        },
        {
          prompt: "Which of these helped small African societies grow into larger organised ones?",
          options: [
            "farming, trade and ironworking",
            "having no leaders",
            "avoiding all trade",
            "abandoning language",
          ],
          correctIndex: 0,
          explanation: "Farming, trade, iron tools and shared rule built larger societies.",
        },
        {
          prompt: "Swahili city-states were known for building in…",
          options: ["stone (houses and mosques)", "ice", "glass towers", "gold bricks"],
          correctIndex: 0,
          explanation: "They built stone houses, mosques and ports.",
        },
        {
          prompt: "A common misconception the topic corrects is that Kiswahili is…",
          options: [
            "an Arabic language (it is actually African/Bantu)",
            "spoken in Europe",
            "a written script",
            "the same as Ge'ez",
          ],
          correctIndex: 0,
          explanation: "Kiswahili is an African Bantu language, not an Arabic one.",
        },
        {
          prompt: "Kush is especially remembered in African history for its skill in…",
          options: ["ironworking", "shipbuilding", "glassmaking", "printing"],
          correctIndex: 0,
          explanation: "Meroë in Kush was a famous centre of ironworking.",
        },
        {
          prompt: "The Swahili civilization shows how trade can create…",
          options: [
            "wealth, cities, a new language and shared religion",
            "only warfare",
            "isolation from other peoples",
            "the end of all culture",
          ],
          correctIndex: 0,
          explanation: "Trade produced Swahili wealth, city-states, Kiswahili and Islam.",
        },
        {
          prompt: "Which civilization was located along the Nile rather than on the ocean coast?",
          options: ["Ancient Sudan / Kush", "the Swahili coast", "Kilwa", "Zanzibar"],
          correctIndex: 0,
          explanation: "Kush in ancient Sudan lay along the Nile; the Swahili were coastal.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Identify the peoples who contributed to the Swahili civilization.",
          answerKey:
            "Africans (Bantu-speaking coastal peoples) as the base, together with Arabs, Persians, and traders from India and China. Award marks for naming the African foundation plus at least two of the other groups.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain how the Kiswahili language and the spread of Islam show the effects of trade on the Swahili coast.",
          answerKey:
            "Constant trading contact between Bantu-speaking Africans and Arab/Persian merchants produced Kiswahili — a Bantu African language enriched with Arabic words — and carried Islam along the coast as merchants and rulers adopted it. Award marks for linking trade contact to both the language and the religion.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The ancient Kingdom of Kush was located in which region?",
          options: ["Nubia, along the Nile", "the East African coast", "the western Sudan", "North Africa's Mediterranean coast"],
          correctIndex: 0,
          answerKey: "Kush arose in Nubia (modern Sudan) along the Nile.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss how farming, trade and ironworking helped small African communities develop into larger organised societies and civilizations.",
          answerKey:
            "A strong answer explains: farming and herding allowed settled village life and food surpluses that could support larger populations and specialists; trade brought wealth, goods and contact with other peoples (as on the Swahili coast); ironworking improved tools and weapons (as at Meroë), boosting farming and defence. Together with shared language, religion and rule, these built kingdoms and civilizations such as Aksum, the Swahili city-states and Kush. Award marks for explaining each of the three factors and linking them to the growth of organised societies.",
          marks: 6,
        },
      ],
    },
  ],
};
