import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester One, Period III: Liberian History — the indigenous peoples, the
// settlement by the American Colonization Society, and the founding of the
// Republic of Liberia.
export const historyG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Liberian History",
  summary:
    "Period III of the MoE Grade 10 History syllabus. Learners study the history of Liberia — its indigenous peoples, the arrival of freed African-Americans through the American Colonization Society, the founding of the settlement at Cape Mesurado, and the declaration of the Republic of Liberia in 1847.",
  topics: [
    {
      slug: "founding-of-liberia",
      title: "The Settlement and Founding of Liberia",
      objective:
        "By the end of the topic, learners should be able to describe Liberia's indigenous peoples, explain the role of the American Colonization Society, and outline the events leading to the settlement at Cape Mesurado and the founding of the settler colony.",
      estimatedMinutes: 150,
      notes: `## Liberia before the settlers

Long before any settlers arrived, the land now called Liberia was home to many **indigenous peoples** — including the Kpelle, Bassa, Grebo, Kru, Gola, Vai, Mandingo and others — organised into their own societies, with farming, trade, crafts and systems of rule. The **Vai** even developed their own **written script** in the early 19th century. These communities traded along the coast and rivers long before contact with the settlers.

## The American Colonization Society

In the United States in the early 1800s, a group formed the **American Colonization Society (ACS)** in **1816**. Its aim was to resettle **free-born and freed African-Americans** in Africa. People supported it for mixed reasons:

- some believed freed people would have **more freedom and opportunity** in Africa than under discrimination in America,
- others (including slave-holders) simply wanted **free black people removed** from America.

## The settlement at Cape Mesurado

- The first ACS ships brought settlers to the West African coast from **1820–1821**.
- In **1822**, settlers established a permanent settlement at **Cape Mesurado**, which grew into the city of **Monrovia** — named after the American president **James Monroe**.
- Land was obtained from local rulers, often under pressure, which created tensions between the settlers and the indigenous peoples.

## Growth of the settler colony

- More settlers arrived, and additional settlements were founded along the coast.
- The settlers (later called **Americo-Liberians**) brought American styles of dress, religion (Christianity), education and government.
- **Relations with indigenous groups** were often difficult: the two communities had different cultures, and the settlers held most of the political power.

## Toward a nation

By the 1840s the colony was largely governing itself under ACS oversight, with its own settlements, trade and a growing population — setting the stage for the declaration of an independent republic, which the next topic examines.`,
      workedExample: `**Task.** A student writes: "Liberia's history began when the settlers arrived in 1822." Explain why this statement is incomplete, and give a fuller account of Liberia's early history.

**Why the statement is incomplete**
It ignores the **indigenous peoples** who had lived in the region for centuries before 1822. Liberia's history did **not** begin with the settlers.

**A fuller account**

1. **Indigenous societies first.** Peoples such as the Kpelle, Bassa, Grebo, Kru, Gola, Vai and Mandingo already lived in the area with their own farming, trade, crafts and systems of rule. The **Vai** even created their own **writing script**.

2. **The American Colonization Society.** Formed in the United States in **1816**, the ACS aimed to resettle free and freed African-Americans in Africa, supported for a mix of reasons — genuine hope of freedom for some, and a wish simply to remove free black people from America for others.

3. **The settlement (1822).** ACS settlers established a permanent settlement at **Cape Mesurado** in 1822, which grew into **Monrovia** (named after President James Monroe). Land was taken from local rulers, causing tension.

4. **The settler colony.** The settlers (**Americo-Liberians**) brought American culture, Christianity and government, and held most political power, while indigenous peoples remained the majority.

**Conclusion:** the settlers were an important part of Liberia's story, but the land already had a long history of indigenous societies. A complete account begins with those peoples and then adds the arrival and growth of the settler colony.`,
      teachingTip:
        "This topic invites a one-sided 'history began in 1822' narrative. Correct it from the first lesson by starting with the indigenous peoples and the Vai script, then introducing the ACS. Present the settlers' mixed motives honestly, and note the tensions over land and power — this gives learners a balanced view and prepares them to understand later divisions in Liberian society.",
      quiz: [
        {
          prompt: "Before the settlers arrived, the land now called Liberia was home to…",
          options: ["many indigenous peoples", "no people at all", "only Europeans", "only Americans"],
          correctIndex: 0,
          explanation: "Indigenous peoples had long lived there.",
        },
        {
          prompt: "Which indigenous group developed its own written script?",
          options: ["the Vai", "the settlers", "the ACS", "the Americans"],
          correctIndex: 0,
          explanation: "The Vai created their own script in the early 19th century.",
        },
        {
          prompt: "The organisation that resettled freed African-Americans in Africa was the…",
          options: ["American Colonization Society", "United Nations", "African Union", "Red Cross"],
          correctIndex: 0,
          explanation: "The ACS organised the settlement.",
        },
        {
          prompt: "The American Colonization Society was formed in…",
          options: ["1816", "1922", "1776", "1847"],
          correctIndex: 0,
          explanation: "The ACS was founded in 1816.",
        },
        {
          prompt: "The permanent settlement at Cape Mesurado was established in…",
          options: ["1822", "1847", "1816", "1900"],
          correctIndex: 0,
          explanation: "Settlers established Cape Mesurado in 1822.",
        },
        {
          prompt: "The settlement at Cape Mesurado grew into which city?",
          options: ["Monrovia", "Buchanan", "Gbarnga", "Harper"],
          correctIndex: 0,
          explanation: "Cape Mesurado became Monrovia.",
        },
        {
          prompt: "Monrovia was named after which American president?",
          options: ["James Monroe", "George Washington", "Abraham Lincoln", "Thomas Jefferson"],
          correctIndex: 0,
          explanation: "The city honours President James Monroe.",
        },
        {
          prompt: "The settlers who came to Liberia later became known as the…",
          options: ["Americo-Liberians", "the Vai", "the ACS", "the Krus only"],
          correctIndex: 0,
          explanation: "The settlers were called Americo-Liberians.",
        },
        {
          prompt: "Which of these was an indigenous group in Liberia?",
          options: ["the Kpelle", "the Romans", "the Aksumites", "the Swahili"],
          correctIndex: 0,
          explanation: "The Kpelle are one of Liberia's indigenous peoples.",
        },
        {
          prompt: "One reason some Americans supported the ACS was that freed people might have…",
          options: ["more freedom in Africa", "less land", "no education", "no religion"],
          correctIndex: 0,
          explanation: "Some believed Africa offered more freedom and opportunity.",
        },
        {
          prompt: "Another motive behind the ACS was a wish to…",
          options: ["remove free black people from America", "end all trade", "conquer Europe", "abolish farming"],
          correctIndex: 0,
          explanation: "Some supporters simply wanted free black people removed.",
        },
        {
          prompt: "Land for the settlement was obtained from…",
          options: ["local rulers, often under pressure", "the ocean", "the United Nations", "no one"],
          correctIndex: 0,
          explanation: "Settlers acquired land from local rulers, causing tension.",
        },
        {
          prompt: "The settlers brought which religion with them?",
          options: ["Christianity", "no religion", "only Islam", "Buddhism"],
          correctIndex: 0,
          explanation: "The settlers were largely Christian.",
        },
        {
          prompt: "Relations between settlers and indigenous peoples were often…",
          options: ["difficult, over land and power", "always peaceful", "non-existent", "controlled by Europe"],
          correctIndex: 0,
          explanation: "Cultural differences and land/power issues caused tension.",
        },
        {
          prompt: "The first ACS ships reached the West African coast in about…",
          options: ["1820–1821", "1900", "1847", "1776"],
          correctIndex: 0,
          explanation: "The first settlers arrived in 1820–1821.",
        },
        {
          prompt: "The Vai, Bassa, Grebo and Kru were all…",
          options: ["indigenous peoples of Liberia", "American presidents", "European traders", "ACS officials"],
          correctIndex: 0,
          explanation: "These are among Liberia's indigenous groups.",
        },
        {
          prompt: "The statement 'Liberia's history began in 1822' is wrong because…",
          options: [
            "indigenous peoples lived there long before",
            "the settlers never arrived",
            "there was no land",
            "Monrovia did not exist",
          ],
          correctIndex: 0,
          explanation: "Indigenous societies existed long before the settlers.",
        },
        {
          prompt: "The settlers held most of the colony's…",
          options: ["political power", "farmland only", "indigenous scripts", "nothing"],
          correctIndex: 0,
          explanation: "Americo-Liberians dominated the government.",
        },
        {
          prompt: "By the 1840s the colony was…",
          options: ["largely governing itself under ACS oversight", "abandoned", "ruled by Britain", "part of the USA"],
          correctIndex: 0,
          explanation: "It was moving toward self-government and independence.",
        },
        {
          prompt: "The settlers brought American styles of…",
          options: ["dress, education and government", "farming tools only", "indigenous scripts", "nothing new"],
          correctIndex: 0,
          explanation: "They introduced American culture, education and government.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Name three indigenous peoples of Liberia and state one achievement of the Vai.",
          answerKey:
            "Any three of: Kpelle, Bassa, Grebo, Kru, Gola, Vai, Mandingo (and others). Vai achievement: they developed their own written script. Award marks for three valid peoples and the Vai script.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The American Colonization Society was formed mainly to…",
          options: [
            "resettle freed African-Americans in Africa",
            "colonise Europe",
            "abolish trade in Africa",
            "build railways in America",
          ],
          correctIndex: 0,
          answerKey: "The ACS aimed to resettle free and freed African-Americans in Africa.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Describe the establishment of the settlement at Cape Mesurado.",
          answerKey:
            "ACS settlers arrived from 1820–1821 and in 1822 established a permanent settlement at Cape Mesurado, which grew into Monrovia (named after President James Monroe); land was obtained from local rulers, often under pressure, causing tension with indigenous peoples. Award marks for the date/place, the growth into Monrovia, and the land/tension point.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why a complete history of Liberia must include both the indigenous peoples and the arrival of the settlers.",
          answerKey:
            "A strong answer argues that Liberia's history did not begin in 1822: indigenous peoples (Kpelle, Bassa, Grebo, Kru, Vai and others) had long lived there with their own societies, trade and culture (the Vai even had a script). The settlers, resettled through the ACS from 1822, added a new element — American culture, Christianity, education and a settler government (the Americo-Liberians) — but relations with the indigenous majority were often tense over land and power. A balanced history therefore includes the indigenous foundation and the settler contribution, and the interaction between them. Award marks for recognising the indigenous history, the settler arrival, and the need for a balanced account.",
          marks: 6,
        },
      ],
    },
    {
      slug: "republic-of-liberia",
      title: "The Founding of the Republic of Liberia",
      objective:
        "By the end of the topic, learners should be able to explain why the colony declared independence, describe the founding of the Republic of Liberia in 1847, and identify its first president and early character as a nation.",
      estimatedMinutes: 150,
      notes: `## Why the colony sought independence

By the 1840s the settlement had grown into a self-governing colony, but it faced problems that pushed it toward full independence:

- **Trade disputes:** European traders (especially the British) questioned the colony's right to collect **customs duties** on trade, because it was not a recognised sovereign state.
- To defend its ports and taxes, the colony needed to be a **recognised independent nation** that other countries would deal with.
- The settlers also wanted to **govern themselves fully**, without ACS control.

## The Declaration of Independence, 1847

- On **26 July 1847**, the colony declared itself the **independent Republic of Liberia**. (July 26 is still celebrated as Liberia's **Independence Day**.)
- Liberia adopted a **Constitution** and a flag modelled on that of the United States — the **Lone Star flag**, with red and white stripes and a single white star on a blue field.
- Liberia became **Africa's first independent republic**.

## The first president

- **Joseph Jenkins Roberts** became the **first President of Liberia** in 1848. He worked to gain international recognition for the new republic.
- **Britain** recognised Liberia in 1848 and **France** soon after; the **United States** did not formally recognise Liberia until **1862**.

## The character of the early republic

- Liberia was governed by the **Americo-Liberian** settler elite, who controlled the government for many years.
- Most of the population were **indigenous Liberians**, who at first had limited political rights — a division that shaped the country's later history.
- The republic's motto, **"The love of liberty brought us here,"** reflects the settlers' story of seeking freedom.

## Liberia's significance

- As **Africa's oldest republic**, Liberia became a symbol of African self-government at a time when almost all of Africa was being colonised by European powers.
- It kept its independence throughout the colonial era, a source of pride across Africa.`,
      workedExample: `**Task.** Explain the main reason Liberia declared independence in 1847, and describe two features of the new republic.

**The main reason for independence**

The strongest push came from **trade and recognition**. As a colony (not a sovereign state), Liberia's right to collect **customs duties** on trade at its ports was challenged by European traders, especially the **British**. To defend its ports and its revenue, and to be treated as an equal by other nations, Liberia needed to become a **recognised independent country**. The settlers also wished to **govern themselves fully**, free of ACS control.

**Two features of the new republic**

1. **A declaration, constitution and flag (1847).** On **26 July 1847** Liberia declared independence as the **Republic of Liberia**, adopting a constitution and the **Lone Star flag** modelled on the United States. It became **Africa's first republic**.

2. **Its first president and leadership.** **Joseph Jenkins Roberts** became the first president in 1848 and worked to win international recognition; Britain and France recognised Liberia soon after, though the United States waited until 1862. The republic was led by the **Americo-Liberian** settler elite, while indigenous Liberians formed the majority with limited early political rights.

**Conclusion:** Liberia declared independence chiefly to secure its trade and gain recognition as a sovereign nation, and it emerged in 1847 as Africa's first republic, with its own constitution, the Lone Star flag, and Joseph Jenkins Roberts as its first president.`,
      teachingTip:
        "Anchor the date 26 July 1847 firmly — it is Liberia's Independence Day and a guaranteed exam fact. Balance national pride ('Africa's first republic') with honesty about the early inequality between the Americo-Liberian settlers and the indigenous majority, since that division is essential background for understanding later Liberian history. Link the Lone Star flag and the national motto to the settlers' story so the symbols carry meaning.",
      quiz: [
        {
          prompt: "Liberia declared its independence on…",
          options: ["26 July 1847", "4 July 1776", "1 January 1900", "12 April 1980"],
          correctIndex: 0,
          explanation: "26 July 1847 is Liberia's Independence Day.",
        },
        {
          prompt: "A major reason for independence was a dispute over the right to collect…",
          options: ["customs duties on trade", "rain water", "gold from mines", "school fees"],
          correctIndex: 0,
          explanation: "European traders challenged the colony's right to tax trade.",
        },
        {
          prompt: "Which European power especially challenged Liberia's trade rights?",
          options: ["Britain", "Spain", "Russia", "Germany"],
          correctIndex: 0,
          explanation: "The British questioned the colony's authority to collect duties.",
        },
        {
          prompt: "On independence, Liberia became…",
          options: ["Africa's first independent republic", "a British colony", "part of the USA", "a French territory"],
          correctIndex: 0,
          explanation: "Liberia was Africa's first republic.",
        },
        {
          prompt: "The first President of Liberia was…",
          options: ["Joseph Jenkins Roberts", "James Monroe", "William Tubman", "Samuel Doe"],
          correctIndex: 0,
          explanation: "Joseph Jenkins Roberts was the first president (1848).",
        },
        {
          prompt: "Liberia's flag is known as the…",
          options: ["Lone Star flag", "Union Jack", "Tricolour", "Star-Spangled Banner"],
          correctIndex: 0,
          explanation: "Liberia's flag is the Lone Star flag.",
        },
        {
          prompt: "Liberia's flag was modelled on the flag of…",
          options: ["the United States", "Britain", "France", "Ethiopia"],
          correctIndex: 0,
          explanation: "It resembles the US flag, with one star.",
        },
        {
          prompt: "Which country recognised Liberia in 1848?",
          options: ["Britain", "the United States", "Ethiopia", "Ghana"],
          correctIndex: 0,
          explanation: "Britain recognised Liberia in 1848; the US only in 1862.",
        },
        {
          prompt: "The United States formally recognised Liberia in…",
          options: ["1862", "1847", "1848", "1900"],
          correctIndex: 0,
          explanation: "US recognition came in 1862.",
        },
        {
          prompt: "The early republic was governed by the…",
          options: ["Americo-Liberian settler elite", "indigenous majority equally", "British governor", "United Nations"],
          correctIndex: 0,
          explanation: "The settler elite controlled the government.",
        },
        {
          prompt: "In the early republic, indigenous Liberians had…",
          options: ["limited political rights at first", "full equal power", "no presence in the country", "control of the government"],
          correctIndex: 0,
          explanation: "Indigenous people were the majority but had limited early rights.",
        },
        {
          prompt: "Liberia's national motto is…",
          options: [
            "The love of liberty brought us here",
            "Liberty, equality, fraternity",
            "In God we trust",
            "Out of many, one people",
          ],
          correctIndex: 0,
          explanation: "The motto reflects the settlers' search for freedom.",
        },
        {
          prompt: "July 26 is celebrated in Liberia as…",
          options: ["Independence Day", "New Year", "Labour Day", "Founders' Day only"],
          correctIndex: 0,
          explanation: "26 July is Liberia's Independence Day.",
        },
        {
          prompt: "Liberia adopted which document at independence?",
          options: ["a Constitution", "a peace treaty with Britain", "a trade ban", "a census"],
          correctIndex: 0,
          explanation: "Liberia adopted a Constitution in 1847.",
        },
        {
          prompt: "Why is Liberia significant in African history?",
          options: [
            "it was Africa's oldest republic and stayed independent",
            "it was the largest colony",
            "it never had a government",
            "it was ruled by France",
          ],
          correctIndex: 0,
          explanation: "Liberia remained independent through the colonial era.",
        },
        {
          prompt: "The first president worked mainly to gain…",
          options: ["international recognition for Liberia", "more colonies", "a European king", "a new flag design"],
          correctIndex: 0,
          explanation: "Roberts sought recognition from other nations.",
        },
        {
          prompt: "Which best describes Liberia at its founding?",
          options: [
            "a republic led by settlers, with an indigenous majority",
            "a monarchy",
            "a British colony",
            "an empty land",
          ],
          correctIndex: 0,
          explanation: "It was a settler-led republic within an indigenous-majority population.",
        },
        {
          prompt: "The single star on Liberia's flag represents…",
          options: ["Liberia as a free/independent nation", "the United States", "the ACS", "Britain"],
          correctIndex: 0,
          explanation: "The lone star symbolises Liberia's independence in Africa.",
        },
        {
          prompt: "The division between settlers and indigenous people in the early republic…",
          options: ["shaped the country's later history", "did not exist", "ended in 1847", "was caused by Britain"],
          correctIndex: 0,
          explanation: "This division influenced Liberia's later politics.",
        },
        {
          prompt: "At the time Liberia became a republic, most of the rest of Africa was…",
          options: ["being colonised by European powers", "already independent", "part of Liberia", "uninhabited"],
          correctIndex: 0,
          explanation: "Liberia's independence stood out during the colonial era.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the date Liberia declared independence and name its first president.",
          answerKey:
            "Liberia declared independence on 26 July 1847; its first president was Joseph Jenkins Roberts (1848). Award marks for the correct date and the correct name.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the main reason the colony decided to become an independent republic.",
          answerKey:
            "Chiefly trade and recognition: as a colony (not a sovereign state) its right to collect customs duties on trade was challenged by European traders, especially the British; to defend its ports and revenue and be treated as an equal, and to govern itself fully without ACS control, it needed to be a recognised independent nation. Award marks for the trade/customs issue and the desire for recognition/self-government.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Liberia holds the distinction of being…",
          options: [
            "Africa's first independent republic",
            "the largest African colony",
            "a former British colony",
            "the newest African nation",
          ],
          correctIndex: 0,
          answerKey: "Liberia was Africa's first (oldest) republic.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the founding of the Republic of Liberia in 1847 and discuss its significance in African history.",
          answerKey:
            "A strong answer describes: the declaration of independence on 26 July 1847, the adoption of a Constitution and the Lone Star flag (modelled on the US), Joseph Jenkins Roberts as first president, and the work to gain international recognition (Britain 1848, US 1862). On significance: Liberia became Africa's first/oldest republic and remained independent throughout the colonial era, a symbol of African self-government, though it was led by an Americo-Liberian settler elite over an indigenous majority with limited early rights. Award marks for the key founding facts and a thoughtful discussion of Liberia's significance.",
          marks: 6,
        },
      ],
    },
  ],
};
