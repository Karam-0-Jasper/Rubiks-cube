import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester Two, Period IV: African Empires — the Ghana Empire (the ancient
// empire of the western Sudan, not the modern country).
export const historyG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "African Empires: The Ghana Empire",
  summary:
    "Period IV of the MoE Grade 10 History syllabus. Learners study the ancient Ghana Empire of the western Sudan — its rise and government, the trans-Saharan gold-and-salt trade that made it wealthy, and the causes of its decline — as the first of the great West African trading empires.",
  topics: [
    {
      slug: "rise-and-government-of-ghana",
      title: "The Rise and Government of the Ghana Empire",
      objective:
        "By the end of the topic, learners should be able to locate the ancient Ghana Empire, explain the factors behind its rise, and describe how it was governed.",
      estimatedMinutes: 150,
      notes: `## Which Ghana?

The **ancient Ghana Empire** was **not** in the same place as the modern country of Ghana. It lay in the **western Sudan** — the grassland belt south of the Sahara, in the region of present-day **Mauritania, Mali and southern Senegal**. Its own people called it **Wagadu**; "Ghana" was actually the **title of its king**, meaning "war chief", which later became the name Arab traders used for the whole empire. It flourished from about the **8th to the 11th century CE**.

## Why Ghana rose to power

Several factors allowed Ghana to grow into a powerful empire:

- **Position on the trade routes:** Ghana lay **between** the **Sahara** (source of salt from the north) and the **gold-producing lands** to the south. It controlled the meeting point of these two.
- **Control of trade:** Ghana taxed the goods passing through, becoming very wealthy.
- **Iron weapons:** the people of Ghana used **iron** tools and weapons, giving them an advantage over neighbours who did not, so they could conquer and defend territory.
- **Strong, organised leadership:** able kings built a large army and a system of government.

## Government of Ghana

Ghana was ruled by a powerful **king** who held great authority:

- The king was the **head of state, chief judge and religious leader**, and controlled the **army** and the **gold**.
- The king was seen as almost **sacred**; subjects showed great respect (Arab visitors described people kneeling and sprinkling dust on their heads before him).
- The empire was governed through **provinces**, some ruled directly by the king's officials and some by **local (vassal) rulers** who paid tribute and stayed loyal.
- The king kept a large **standing army** to protect the trade routes and control the provinces.
- A key royal rule: **all gold nuggets belonged to the king**, while gold dust could be traded by the people — this kept the price of gold high and the king rich.

## The capital

The empire's capital, **Kumbi Saleh**, is described by Arab writers as having **two towns**: one for the **king and the local people** (with the royal palace and sacred groves), and one for the **Muslim traders** (with mosques). This shows Ghana as a busy centre where different peoples and religions met through trade.`,
      workedExample: `**Task.** Explain three factors that helped the ancient Ghana Empire rise to power, and describe the position of the king in its government.

**Three factors behind Ghana's rise**

1. **Its position on the trade routes.** Ghana lay between the **Sahara** (the source of salt) and the **goldfields** to the south, controlling the point where these two vital trades met.
2. **Control and taxation of trade.** By taxing the goods — especially **gold and salt** — passing through its territory, Ghana became **very wealthy**, which funded its army and government.
3. **Iron weapons and strong leadership.** The people used **iron** tools and weapons, giving them a military advantage over neighbours, and able kings organised a **strong army** to conquer and defend land.

**The position of the king**
The king held **great, almost sacred authority**. He was the **head of state, chief judge, religious leader and commander of the army**, and he controlled the empire's **gold** (all gold nuggets belonged to him). He ruled through **provinces** — some governed by his own officials and some by **local vassal rulers** who paid tribute — and kept a large standing army to guard the trade routes.

**Conclusion:** Ghana rose because it controlled and taxed the gold-and-salt trade, held a military edge through iron, and was led by strong kings — and at its head stood a powerful, near-sacred king who controlled the gold, the army and the government.`,
      teachingTip:
        "The essential clarification is that ancient Ghana is not modern Ghana — it was in the western Sudan (Mauritania/Mali region), and 'Ghana' was the king's title. Fix this first, or learners misplace the empire entirely. Then teach the rise as a single logic: control the meeting point of gold and salt, tax the trade, back it with iron weapons and a strong king. That causal chain is what exam answers reward.",
      quiz: [
        {
          prompt: "The ancient Ghana Empire was located in the…",
          options: ["western Sudan (grassland south of the Sahara)", "same place as modern Ghana", "Horn of Africa", "Nile valley"],
          correctIndex: 0,
          explanation: "It lay in the western Sudan, not modern Ghana.",
        },
        {
          prompt: "The word 'Ghana' originally was…",
          options: ["the title of the king (war chief)", "the name of a river", "a type of gold", "a mosque"],
          correctIndex: 0,
          explanation: "'Ghana' was the king's title, later used for the empire.",
        },
        {
          prompt: "The people of the empire called it…",
          options: ["Wagadu", "Aksum", "Kush", "Mali"],
          correctIndex: 0,
          explanation: "Its own name was Wagadu.",
        },
        {
          prompt: "Ghana flourished during roughly which centuries?",
          options: ["8th to 11th century CE", "18th to 19th century", "1st to 2nd century", "15th to 16th century"],
          correctIndex: 0,
          explanation: "Ghana was powerful from about the 8th to 11th centuries.",
        },
        {
          prompt: "Ghana became wealthy mainly by controlling the trade in…",
          options: ["gold and salt", "cars and oil", "tea and coffee", "cotton and silk"],
          correctIndex: 0,
          explanation: "The gold-and-salt trade was the source of its wealth.",
        },
        {
          prompt: "Salt came from the … and gold from the …",
          options: ["Sahara (north); lands to the south", "south; north", "sea; desert", "forest; ocean"],
          correctIndex: 0,
          explanation: "Salt from the northern Sahara, gold from the south.",
        },
        {
          prompt: "One military advantage of the Ghana people was their use of…",
          options: ["iron weapons", "gunpowder", "horses only", "ships"],
          correctIndex: 0,
          explanation: "Iron tools and weapons gave them an edge.",
        },
        {
          prompt: "Ghana taxed goods that…",
          options: ["passed through its territory", "were made at home only", "belonged to the king", "were given away free"],
          correctIndex: 0,
          explanation: "It taxed the trade crossing its land.",
        },
        {
          prompt: "The king of Ghana was the head of state, chief judge and…",
          options: ["religious leader and army commander", "a foreign trader", "a Muslim scholar only", "a farmer"],
          correctIndex: 0,
          explanation: "He held political, judicial, religious and military power.",
        },
        {
          prompt: "A royal rule was that all gold … belonged to the king.",
          options: ["nuggets", "dust", "mines in the north", "coins"],
          correctIndex: 0,
          explanation: "Nuggets were the king's; gold dust could be traded.",
        },
        {
          prompt: "Keeping the gold nuggets for the king helped to…",
          options: ["keep the price of gold high and the king rich", "give gold to everyone", "end trade", "lower taxes"],
          correctIndex: 0,
          explanation: "Limiting nuggets kept gold valuable and the king wealthy.",
        },
        {
          prompt: "Ghana was governed through…",
          options: ["provinces, some under officials and some under vassal rulers", "one single city only", "a foreign king", "no government"],
          correctIndex: 0,
          explanation: "Provinces were run by officials or loyal local rulers.",
        },
        {
          prompt: "Local rulers who stayed loyal to Ghana paid the king…",
          options: ["tribute", "nothing", "gold mines", "the whole army"],
          correctIndex: 0,
          explanation: "Vassal rulers paid tribute and remained loyal.",
        },
        {
          prompt: "The capital of Ghana was…",
          options: ["Kumbi Saleh", "Timbuktu", "Kumasi", "Cairo"],
          correctIndex: 0,
          explanation: "Kumbi Saleh was the capital.",
        },
        {
          prompt: "Arab writers described the capital as having…",
          options: ["two towns (royal and Muslim traders')", "no people", "only farms", "a single mosque"],
          correctIndex: 0,
          explanation: "One town for the king/people, one for Muslim traders.",
        },
        {
          prompt: "To protect the trade routes, the king kept a large…",
          options: ["standing army", "fishing fleet", "school", "market only"],
          correctIndex: 0,
          explanation: "A standing army guarded the routes and provinces.",
        },
        {
          prompt: "The king of Ghana was regarded as almost…",
          options: ["sacred", "powerless", "foreign", "poor"],
          correctIndex: 0,
          explanation: "Subjects showed him near-sacred respect.",
        },
        {
          prompt: "Ghana's key geographic advantage was lying between the sources of…",
          options: ["salt and gold", "iron and copper", "rivers and mountains", "rain and drought"],
          correctIndex: 0,
          explanation: "It sat between the salt of the north and gold of the south.",
        },
        {
          prompt: "The presence of mosques in the capital shows that Ghana…",
          options: ["was a meeting place of different peoples and religions", "banned all trade", "had no visitors", "was in Europe"],
          correctIndex: 0,
          explanation: "Muslim traders and mosques show its cosmopolitan trade.",
        },
        {
          prompt: "Modern Ghana took its name from the ancient empire as a symbol of…",
          options: ["African greatness and heritage", "the Sahara desert", "European rule", "the gold price"],
          correctIndex: 0,
          explanation: "The name honours the ancient African empire's greatness.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why the ancient Ghana Empire should not be confused with the modern country of Ghana.",
          answerKey:
            "The ancient Ghana Empire lay in the western Sudan (the region of modern Mauritania, Mali and southern Senegal), not where modern Ghana is; its own name was Wagadu, and 'Ghana' was the title of its king. Modern Ghana simply adopted the historic name. Award marks for the different location and the origin of the name.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three factors that helped the Ghana Empire rise to power.",
          answerKey:
            "Any three: its position between the salt (Sahara) and gold (south) trades; control and taxation of the trans-Saharan trade; use of iron weapons giving a military advantage; strong, organised kings and a large army. Award a mark per valid factor.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The wealth of the Ghana Empire came mainly from…",
          options: [
            "controlling and taxing the gold-and-salt trade",
            "farming rice",
            "fishing in the sea",
            "mining coal",
          ],
          correctIndex: 0,
          answerKey: "Ghana grew rich by controlling and taxing the gold-and-salt trade.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how the Ghana Empire was governed, referring to the power of the king, the provinces, and the control of gold.",
          answerKey:
            "A strong answer describes the king as the powerful, near-sacred head of state, chief judge, religious leader and army commander who controlled the gold and the army. The empire was governed through provinces — some run directly by the king's officials, others by local vassal rulers who paid tribute and stayed loyal — and a large standing army protected the trade routes. The rule that all gold nuggets belonged to the king (while gold dust could be traded) kept gold valuable and the king wealthy. Award marks for the king's authority, the provincial/tribute system, and the control of gold.",
          marks: 6,
        },
      ],
    },
    {
      slug: "trade-and-decline-of-ghana",
      title: "Trade, Wealth and the Decline of Ghana",
      objective:
        "By the end of the topic, learners should be able to describe the trans-Saharan trade that enriched Ghana, explain the role of gold and salt, and give the causes of the empire's decline.",
      estimatedMinutes: 150,
      notes: `## The trans-Saharan trade

Ghana's wealth came from the **trans-Saharan trade** — the exchange of goods carried by **camel caravans** across the **Sahara Desert** between North Africa and the western Sudan.

- **From the north (across the Sahara):** **salt**, cloth, copper, horses, and manufactured goods.
- **From the south (the forest lands):** **gold**, ivory, kola nuts, and enslaved people.

Ghana sat in the middle and **controlled and taxed** this exchange.

## Why gold and salt were so important

- **Gold** was abundant in the lands south of Ghana and was in huge demand in North Africa and Europe. Ghana was so famous for it that it was called "the land of gold."
- **Salt** was scarce in the south but **essential for life** (to preserve food and for health in a hot climate). It came from mines in the Sahara.

Gold and salt were sometimes traded in the **"silent trade" (dumb barter)**: the two groups exchanged goods by leaving them at an agreed place, without meeting or speaking, until both sides were satisfied — allowing trade between people who did not share a language and kept the goldfields secret.

## Islam and trade

The North African traders were **Muslims**, and through trade **Islam spread** peacefully into the western Sudan. Muslim traders brought **literacy (writing)** and their religion; many lived in Ghana's capital, though the kings and most people kept their traditional beliefs at first.

## The decline of Ghana

Ghana weakened from about the **11th century** for several reasons:

- **The Almoravid pressure:** the **Almoravids**, a Muslim group from the north, attacked and weakened Ghana in the late 11th century, disrupting its trade and control.
- **Loss of control over trade:** as trade routes shifted, Ghana lost its monopoly, and other states began to control the gold trade.
- **Rebellion of subject peoples:** vassal states broke away, weakening the empire.
- **Overuse of resources / drought:** overgrazing and dry conditions damaged farmland around the capital.

As Ghana declined, the empire of **Mali** rose to take its place as the great power of the western Sudan (the subject of later study).`,
      workedExample: `**Task.** (a) Describe the trans-Saharan trade and the main goods exchanged. (b) Explain the "silent trade". (c) Give two reasons for the decline of Ghana.

**Part (a) — the trans-Saharan trade**
The trans-Saharan trade was the exchange of goods carried by **camel caravans** across the **Sahara Desert**. From the **north** came **salt**, cloth, copper and horses; from the **south** came **gold**, ivory and kola nuts. Ghana lay between the two and grew rich by **controlling and taxing** this trade — especially the exchange of **gold and salt**.

**Part (b) — the silent trade**
The **silent trade (dumb barter)** was a way of trading **without meeting or speaking**. One group left its goods (e.g. salt) at an agreed place and withdrew; the other group came, laid down gold beside it, and withdrew; this continued until both sides were satisfied with the amounts. It allowed trade between peoples who **did not share a language** and let the gold miners **keep the location of their goldfields secret**.

**Part (c) — two reasons for Ghana's decline**
Any two, for example:
- **Almoravid attacks** from the north in the late 11th century weakened Ghana and disrupted its trade.
- **Loss of control over the trade routes**, as trade shifted and rivals took over the gold trade.
- **Rebellion of subject (vassal) peoples** who broke away from the empire.

**Conclusion:** Ghana's greatness rested on the trans-Saharan gold-and-salt trade, sometimes conducted by silent barter; and it declined through Almoravid pressure, the loss of its trade monopoly, and the breaking away of its subject states — after which Mali rose in its place.`,
      teachingTip:
        "The 'silent trade' fascinates learners and is a memorable exam favourite — teach it as a little story and have two students act it out. Keep the gold-north/salt-south geography crystal clear (a quick sketch map helps). For the decline, group the causes into external (Almoravids, shifting routes) and internal (rebellions, drought) — that structure produces a well-organised essay answer.",
      quiz: [
        {
          prompt: "Ghana's wealth came from the trade carried across the Sahara, called the…",
          options: ["trans-Saharan trade", "Atlantic trade", "silk road", "Indian Ocean trade"],
          correctIndex: 0,
          explanation: "The trans-Saharan trade crossed the desert by caravan.",
        },
        {
          prompt: "Goods were carried across the Sahara by…",
          options: ["camel caravans", "ships", "trains", "aeroplanes"],
          correctIndex: 0,
          explanation: "Camel caravans crossed the desert.",
        },
        {
          prompt: "From the north came which key good?",
          options: ["salt", "gold", "kola nuts", "ivory"],
          correctIndex: 0,
          explanation: "Salt came from Saharan mines in the north.",
        },
        {
          prompt: "From the south came which key good?",
          options: ["gold", "salt", "cloth", "horses"],
          correctIndex: 0,
          explanation: "Gold came from the forest lands to the south.",
        },
        {
          prompt: "Ghana was so famous for one metal that it was called the land of…",
          options: ["gold", "iron", "copper", "silver"],
          correctIndex: 0,
          explanation: "It was known as the land of gold.",
        },
        {
          prompt: "Why was salt so valuable in the south?",
          options: ["it was scarce there but essential for life", "it was used as money only", "it was heavy", "it was gold"],
          correctIndex: 0,
          explanation: "Salt was rare in the south yet needed for health and preserving food.",
        },
        {
          prompt: "Trading goods by leaving them at an agreed place without meeting is called the…",
          options: ["silent trade (dumb barter)", "open market", "royal tax", "tribute"],
          correctIndex: 0,
          explanation: "The silent trade needed no direct contact.",
        },
        {
          prompt: "One purpose of the silent trade was to…",
          options: ["keep the goldfields' location secret", "raise taxes", "start wars", "build mosques"],
          correctIndex: 0,
          explanation: "Miners could trade without revealing where the gold was.",
        },
        {
          prompt: "The North African traders who came to Ghana were mostly…",
          options: ["Muslims", "Christians", "Europeans", "Chinese"],
          correctIndex: 0,
          explanation: "Muslim traders crossed the Sahara to trade.",
        },
        {
          prompt: "Through trade, which religion spread peacefully into the western Sudan?",
          options: ["Islam", "Christianity", "Buddhism", "Hinduism"],
          correctIndex: 0,
          explanation: "Islam spread along the trade routes.",
        },
        {
          prompt: "Muslim traders also brought which useful skill?",
          options: ["literacy (writing)", "iron-working", "farming", "camel breeding only"],
          correctIndex: 0,
          explanation: "They brought writing and their religion.",
        },
        {
          prompt: "Which group attacked and weakened Ghana in the late 11th century?",
          options: ["the Almoravids", "the Romans", "the British", "the Swahili"],
          correctIndex: 0,
          explanation: "The Almoravids pressured Ghana from the north.",
        },
        {
          prompt: "Ghana declined partly because it lost control over the…",
          options: ["trade routes", "camels", "silent trade rules", "salt mines it never had"],
          correctIndex: 0,
          explanation: "Shifting routes and rivals cost Ghana its trade monopoly.",
        },
        {
          prompt: "An internal cause of Ghana's decline was the…",
          options: ["rebellion of subject (vassal) peoples", "arrival of Europeans", "loss of gold to the sea", "end of the Sahara"],
          correctIndex: 0,
          explanation: "Vassal states broke away, weakening the empire.",
        },
        {
          prompt: "Which environmental problem hurt Ghana near its capital?",
          options: ["overgrazing and drought", "floods every day", "snow", "earthquakes"],
          correctIndex: 0,
          explanation: "Overuse of land and dry conditions damaged farmland.",
        },
        {
          prompt: "As Ghana declined, which empire rose to take its place?",
          options: ["Mali", "Aksum", "Kush", "Rome"],
          correctIndex: 0,
          explanation: "The Mali Empire succeeded Ghana in the western Sudan.",
        },
        {
          prompt: "The two most important goods in Ghana's trade were…",
          options: ["gold and salt", "cloth and copper", "ivory and kola", "horses and books"],
          correctIndex: 0,
          explanation: "Gold and salt were the heart of the trade.",
        },
        {
          prompt: "The kings and most people of Ghana at first kept their…",
          options: ["traditional beliefs", "Christian faith", "European laws", "Roman gods"],
          correctIndex: 0,
          explanation: "Islam spread gradually; the court kept traditional beliefs at first.",
        },
        {
          prompt: "The silent trade allowed trade between peoples who did not share a…",
          options: ["language", "religion only", "king", "desert"],
          correctIndex: 0,
          explanation: "It overcame the language barrier.",
        },
        {
          prompt: "Ghana's decline shows that an empire's power can fade when it loses control of its…",
          options: ["trade and its subject states", "camels", "salt mines", "writing"],
          correctIndex: 0,
          explanation: "Losing the trade monopoly and its vassals broke Ghana's power.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Describe the trans-Saharan trade and name the main good that came from the north and the main good from the south.",
          answerKey:
            "The trans-Saharan trade was the exchange of goods carried by camel caravans across the Sahara between North Africa and the western Sudan. From the north came salt (and cloth, copper, horses); from the south came gold (and ivory, kola nuts). Award marks for the description and the correct salt (north) / gold (south) goods.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what the 'silent trade' was and one reason it was used.",
          answerKey:
            "The silent trade (dumb barter) was trading by leaving goods at an agreed place and withdrawing, without the two groups meeting or speaking, until both were satisfied with the amounts. Reasons (any one): it allowed trade between peoples who did not share a language; it kept the location of the goldfields secret. Award marks for the description and a valid reason.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which was a cause of the decline of the Ghana Empire?",
          options: [
            "Almoravid attacks and loss of control over trade",
            "the discovery of oil",
            "the building of railways",
            "the arrival of European colonists",
          ],
          correctIndex: 0,
          answerKey: "Almoravid pressure and the loss of the trade monopoly weakened Ghana.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the causes of the decline of the Ghana Empire, organising them into external and internal factors.",
          answerKey:
            "A strong answer organises the causes into external factors — the Almoravid attacks from the north in the late 11th century, and the shifting of trade routes so that rivals took control of the gold trade (loss of Ghana's monopoly) — and internal factors — the rebellion of subject/vassal peoples who broke away, and environmental problems such as overgrazing and drought that damaged farmland. It should conclude that these combined to weaken Ghana, after which Mali rose to power. Award marks for at least one external and one internal cause, clearly explained.",
          marks: 6,
        },
      ],
    },
  ],
};
