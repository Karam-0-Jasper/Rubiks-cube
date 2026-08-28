import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester One, Period II: Introduction to African History (Ethiopia and Swahili
// Civilization). The MoE CONTENTS list has five top-level items, each rebuilt
// here as its own topic: (1) Ethiopian history (King Solomon and Queen Sheba),
// (2) contributions of Ethiopia to African history, (3) Swahili Civilization and
// Culture, (4) Ancient Sudan civilization, (5) origin of African societies and
// the civilization of Ancient Sudan. Notes are rebuilt from OpenStax World History.
export const historyG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "African Civilizations: Ethiopia, the Swahili Coast and Ancient Sudan",
  summary:
    "Period II of the MoE Grade 10 History syllabus. Learners study early African civilizations — the history and contributions of ancient Ethiopia (the Kingdom of Aksum), the trading Swahili civilization of the East African coast, and the civilization of the ancient Sudan (Nubia and Kush) — and how small African societies grew into organised states.",
  topics: [
    {
      // source: OpenStax — World History Volume 1, 10.3 The Kingdoms of Aksum and Himyar (https://openstax.org/books/world-history-volume-1/pages/10-3-the-kingdoms-of-aksum-and-himyar)
      slug: "ethiopian-history-solomon-and-sheba",
      title: "Ethiopian History: The Tradition of Solomon and Sheba",
      objective:
        "By the end of the topic, learners should be able to describe early Ethiopia and the Kingdom of Aksum, and explain the tradition of King Solomon and the Queen of Sheba and the prestige the Solomonic line drew from it.",
      estimatedMinutes: 120,
      notes: `## Ethiopia: one of Africa's oldest states

- **Ethiopia**, in the Horn of Africa (modern Ethiopia and Eritrea), is one of the oldest continuous civilisations in the world.
- Its great early kingdom was **Aksum**, which flourished at its height from about the **third to the sixth centuries CE**.
- Long before European contact, Ethiopia had its own kings, writing, religion and long-distance trade.

## The tradition of Solomon and the Queen of Sheba

- A famous **tradition** links Ethiopia's royal line to the biblical King **Solomon** of Israel and the **Queen of Sheba** (called *Makeda* in Ethiopian tradition).
- According to the tradition, the Queen visited Solomon, and their son founded a royal line — the **"Solomonic dynasty"** — from which Ethiopian kings later claimed descent.
- The tradition gave Ethiopian kings great **prestige and legitimacy** and bound the nation together for centuries.

Sourcing note: the Solomon–Sheba tradition is the curriculum's framing. The approved source (OpenStax World History) documents the **Kingdom of Aksum** but does not itself narrate the Solomon–Sheba story; treat that story as an important **tradition**, not a documented event, exactly as historians treat oral or traditional claims (see Period I, "Sources of African History").

## The Kingdom of Aksum: the documented state

The historical greatness of early Ethiopia is the **Kingdom of Aksum**:

- **Location** — sub-Saharan Africa, in modern Ethiopia and Eritrea, adjacent to the **Red Sea**.
- **Trade** — a powerful economic force trading luxury goods with **Egypt, Arabia and the eastern Mediterranean**.
- **Writing** — inscriptions in **Ge'ez**, a written Semitic language still used by the Ethiopian church.
- **Monuments** — urban centres with grand royal palaces, and tall carved **stelae and obelisks** raised by rulers.
- **Coinage** — Aksum minted its own coins, on which "the Christian cross gradually" replaced earlier symbols under King Ezana.

## King Ezana and Christianity

- King **Ezana** came to power in the **mid-fourth century CE**.
- He converted to **Christianity** through **Frumentius**, a Christian from the Syrian city of Tyre, making Aksum one of the earliest Christian states.
- Ezana conducted successful campaigns, **subduing the Kingdom of Kush** to the west.

## Common errors and misconceptions

- **Treating the Solomon–Sheba story as documented fact** — it is a **tradition** that gave the ruling line legitimacy; the documented state is **Aksum**.
- **Confusing the names** — the great ancient kingdom is **Aksum**; "Ethiopia" is the wider, modern name.
- **Thinking Christianity reached Africa only with Europeans** — Aksum became Christian under **Ezana in the fourth century CE**, long before European colonisers.
- **Underrating Aksum** — its coins, Ge'ez script and stelae are hard evidence of an advanced ancient African state.`,
      workedExample: `**Question:** Explain the tradition of Solomon and Sheba in Ethiopian history, and distinguish it from the documented history of Aksum.

**Solution**

*Step 1 — state the tradition.*
Ethiopian **tradition** holds that the **Queen of Sheba** (Makeda) visited King **Solomon** of Israel, and that their descendants founded the **Solomonic dynasty** — the royal line from which Ethiopian kings claimed descent.

*Step 2 — explain its importance.*
Whether or not it is literally true, the tradition mattered because it gave Ethiopian kings **prestige and legitimacy** and helped bind the nation together for centuries.

*Step 3 — turn to documented history.*
The **documented** greatness of early Ethiopia is the **Kingdom of Aksum** (about the 3rd–6th centuries CE). Aksum traded luxury goods across the Red Sea with Egypt, Arabia and the Mediterranean; used the **Ge'ez** script; minted its **own coins**; and raised tall **stelae**.

*Step 4 — the turn to Christianity.*
King **Ezana**, in the mid-fourth century CE, adopted **Christianity** (through Frumentius of Tyre) and subdued the Kingdom of Kush — making Aksum one of the earliest Christian states.

**Conclusion:** the Solomon–Sheba story is an important **tradition** that legitimised Ethiopia's kings, while Aksum — with its coins, Ge'ez script, stelae and early Christianity — is the **documented** African civilisation behind Ethiopia's ancient greatness.`,
      quiz: [
        { prompt: "Ethiopia lies in which part of Africa?", options: ["the Horn of Africa", "West Africa", "the Sahara", "Southern Africa"], correctIndex: 0, explanation: "Ethiopia is in the Horn of Africa." },
        { prompt: "The great early kingdom of Ethiopia was", options: ["Aksum", "Ghana", "Songhai", "Carthage"], correctIndex: 0, explanation: "Aksum was the powerful early Ethiopian kingdom." },
        { prompt: "In Ethiopian tradition, the Queen of Sheba is called", options: ["Makeda", "Cleopatra", "Nefertiti", "Amina"], correctIndex: 0, explanation: "Ethiopian tradition names her Makeda." },
        { prompt: "The royal line claiming descent from Solomon was the", options: ["Solomonic dynasty", "Askia dynasty", "Za dynasty", "Ptolemies"], correctIndex: 0, explanation: "Ethiopian kings claimed the Solomonic dynasty." },
        { prompt: "The Solomon–Sheba story is best treated as", options: ["a documented event", "an important tradition, not a documented event", "modern fiction", "an archaeological find"], correctIndex: 1, explanation: "It is a tradition that gave the kings legitimacy." },
        { prompt: "Aksum lay adjacent to which sea?", options: ["the Red Sea", "the Baltic Sea", "the Caspian Sea", "the Black Sea"], correctIndex: 0, explanation: "Aksum used its Red Sea location for trade." },
        { prompt: "Aksum traded luxury goods with all of these EXCEPT", options: ["the Americas", "Egypt", "Arabia", "the eastern Mediterranean"], correctIndex: 0, explanation: "Its trade linked Africa, Arabia and the Mediterranean." },
        { prompt: "The script of Aksum, still used by the Ethiopian church, is", options: ["Ge'ez", "Latin", "Arabic", "Meroitic"], correctIndex: 0, explanation: "Ge'ez is the Aksumite script." },
        { prompt: "Aksum's tall carved stone monuments are called", options: ["stelae (obelisks)", "pyramids", "castles", "dhows"], correctIndex: 0, explanation: "Aksum raised tall stelae." },
        { prompt: "A clear sign of Aksum's organised economy was that it", options: ["minted its own coins", "used no money", "banned trade", "had no rulers"], correctIndex: 0, explanation: "Aksum struck its own coins." },
        { prompt: "The king who made Aksum a Christian state was", options: ["Ezana", "Solomon", "Piye", "Sundiata"], correctIndex: 0, explanation: "King Ezana adopted Christianity." },
        { prompt: "Ezana came to power in the", options: ["mid-fourth century CE", "first century BCE", "nineteenth century CE", "third millennium BCE"], correctIndex: 0, explanation: "Ezana ruled in the mid-fourth century CE." },
        { prompt: "Ezana converted to Christianity through", options: ["Frumentius of Tyre", "Muhammad Ture", "King Solomon", "Leo Africanus"], correctIndex: 0, explanation: "Frumentius, a Christian from Tyre, brought the faith." },
        { prompt: "Ezana's campaigns subdued which neighbouring kingdom?", options: ["Kush", "Mali", "Rome", "Songhai"], correctIndex: 0, explanation: "Aksum subdued the Kingdom of Kush." },
        { prompt: "On Aksum's coins under Ezana, the ___ gradually replaced earlier symbols.", options: ["Christian cross", "Roman eagle", "crescent moon", "lion"], correctIndex: 0, explanation: "The Christian cross appeared on coinage." },
        { prompt: "The Solomon–Sheba tradition mattered because it", options: ["gave Ethiopian kings prestige and legitimacy", "created the Red Sea", "invented Ge'ez", "ended all trade"], correctIndex: 0, explanation: "It legitimised the royal line." },
        { prompt: "Aksum flourished at its height in about the", options: ["3rd to 6th centuries CE", "19th century CE", "10th century BCE", "1st century BCE only"], correctIndex: 0, explanation: "Its height was the 3rd–6th centuries CE." },
        { prompt: "Christianity reached Aksum", options: ["in the fourth century CE, long before European colonisers", "only in the 1800s", "never", "from the Americas"], correctIndex: 0, explanation: "Aksum was Christian from the 4th century CE." },
        { prompt: "The documented greatness of early Ethiopia rests on", options: ["Aksum's coins, Ge'ez script and stelae", "no evidence at all", "European records only", "the Nile flood"], correctIndex: 0, explanation: "Aksum left hard archaeological evidence." },
        { prompt: "'Ethiopia' compared with 'Aksum' is", options: ["the wider, modern name for the country", "a different continent", "a city in Egypt", "the same as Kush"], correctIndex: 0, explanation: "Aksum was the ancient kingdom; Ethiopia the wider name." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the tradition of King Solomon and the Queen of Sheba and why it was historically important.", answerKey: "Tradition holds the Queen of Sheba (Makeda) visited Solomon and their descendants founded the Solomonic dynasty, from which Ethiopian kings claimed descent. It was important because it gave the kings prestige and legitimacy and bound the nation together. Note: it is a tradition, not a documented event. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State four documented achievements of the Kingdom of Aksum.", answerKey: "Any four: a major Red Sea trading power; minted its own coins; used the Ge'ez script; raised tall stelae/obelisks; adopted Christianity under King Ezana; subdued Kush. Award 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is documented history rather than tradition?", options: ["Aksum minted its own coins and used the Ge'ez script", "The Queen of Sheba visited Solomon", "The Solomonic dynasty descended from Solomon", "Makeda was Sheba's name"], correctIndex: 0, answerKey: "Coins and Ge'ez are physical evidence; the Solomon story is tradition. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe King Ezana's importance in Aksumite history.", answerKey: "Ezana came to power in the mid-fourth century CE, adopted Christianity through Frumentius of Tyre — making Aksum one of the earliest Christian states — and subdued the Kingdom of Kush; the Christian cross appeared on his coinage. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Distinguish the tradition of Solomon and Sheba from the documented history of Aksum, and explain what each contributes to our understanding of ancient Ethiopia.", answerKey: "Award marks for: clear statement of the Solomon–Sheba tradition and its role in legitimising the royal line, 6 marks; recognition that it is tradition, not documented event, 3 marks; documented Aksum — Red Sea trade, coins, Ge'ez, stelae, 6 marks; Ezana and early Christianity, 4 marks; a conclusion weighing tradition against evidence, 2 marks. Treating the tradition as plain fact caps the mark at 14.", marks: 21 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 10.3 The Kingdoms of Aksum and Himyar (https://openstax.org/books/world-history-volume-1/pages/10-3-the-kingdoms-of-aksum-and-himyar)
      slug: "contributions-of-ethiopia",
      title: "The Contributions of Ethiopia to African History",
      objective:
        "By the end of the topic, learners should be able to discuss Ethiopia's contributions to African history — its literate, coin-using, Christian civilisation at Aksum — and explain why Ethiopia became a symbol of African achievement.",
      estimatedMinutes: 110,
      notes: `## Ethiopia's contributions to African history

Ethiopia, through the **Kingdom of Aksum**, made lasting contributions that show Africa produced advanced, organised states in ancient times.

## A literate civilisation

- Aksum used its own written language, **Ge'ez**, recorded in inscriptions and still used in the Ethiopian church today.
- Writing is direct evidence of an organised, record-keeping state.

## An organised economy

- Aksum was "a powerful economic force, trading luxury goods with Egypt, Arabia, and the eastern Mediterranean" at its height from the third to the sixth centuries CE.
- It **minted its own coins** — gold, silver and bronze — which only a strong, centralised economy can sustain.
- Its position adjacent to the **Red Sea** let it dominate an important trade corridor.

## Monumental building

- Aksum built "several urbanized centers with monumental architecture including grand royal palaces," and its rulers raised tall carved **stelae and obelisks** to commemorate their achievements — evidence of engineering skill and central organisation.

## Early African Christianity

- Under King **Ezana** (mid-fourth century CE), Aksum adopted **Christianity**, becoming one of the **earliest Christian states in the world**.
- The Ethiopian Christian church has continued for over sixteen centuries, giving Ethiopia a distinctive and enduring religious tradition.

## A regional power

- Aksum expanded across the Red Sea into **southern Arabia** for a time, and King Ezana **subdued the Kingdom of Kush**, which had ruled southern Egypt for roughly the previous millennium.
- This shows an African state acting as a great regional power.

## Decline — but a lasting legacy

- After King **Kaleb's** reign in the sixth century, Aksum fell into decline, possibly due to increasing **aridity** after the eighth century and **disrupted trade networks**.
- Yet Ethiopia's legacy endured: a literate, Christian, coin-using civilisation and a proud tradition of independence.

## Common errors and misconceptions

- **Thinking Ethiopia contributed nothing until modern times** — Aksum was among the world's earliest coin-minting, literate, Christian states.
- **Believing coins are a minor detail** — minting coins signals a wealthy, centrally organised economy.
- **Assuming African states were isolated** — Aksum traded across the Red Sea and expanded into Arabia.
- **Confusing decline with disappearance** — Aksum declined, but Ethiopia's church, script and traditions continued.`,
      workedExample: `**Task.** A student claims, "Ancient Africa had no organised states before Europeans arrived." Using the Kingdom of Aksum, write a short model answer that corrects this claim with evidence.

**Model answer**

The claim is false, and the Kingdom of Aksum in ancient Ethiopia disproves it clearly.

- **A strong economy:** Aksum was a major trading power on the **Red Sea**, exchanging luxury goods with Egypt, Arabia and the eastern Mediterranean — and it **minted its own coins**, which only a well-organised state can do.
- **Writing:** the Aksumites used the **Ge'ez** script, showing literacy long before European contact.
- **Monuments:** they built urban centres with royal palaces and raised tall **stelae** — evidence of engineering and central organisation.
- **Religion and power:** under King **Ezana** (mid-fourth century CE) Aksum became one of the earliest **Christian** states and even **subdued the Kingdom of Kush**.

**Conclusion:** far from having "no organised states," ancient Africa produced Aksum — a literate, coin-using, monument-building, Christian regional power — centuries before European involvement. The coins, script and stelae make the point beyond doubt.`,
      quiz: [
        { prompt: "Ethiopia's contributions to African history came mainly through the kingdom of", options: ["Aksum", "Kilwa", "Ghana", "Benin"], correctIndex: 0, explanation: "Aksum was the great early Ethiopian kingdom." },
        { prompt: "The Ge'ez script is evidence that Aksum was", options: ["a literate, record-keeping state", "without writing", "a European colony", "purely nomadic"], correctIndex: 0, explanation: "Ge'ez shows literacy." },
        { prompt: "Aksum's minting of coins shows it had", options: ["a strong, centralised economy", "no trade", "no government", "no wealth"], correctIndex: 0, explanation: "Only organised states mint coins." },
        { prompt: "Aksum's height was in about the", options: ["3rd to 6th centuries CE", "19th century CE", "10th century BCE", "1st century BCE only"], correctIndex: 0, explanation: "Its peak was the 3rd–6th centuries CE." },
        { prompt: "Aksum traded across which sea?", options: ["the Red Sea", "the Atlantic", "the Arctic", "the Dead Sea"], correctIndex: 0, explanation: "Its Red Sea position drove trade." },
        { prompt: "Under King Ezana, Aksum adopted", options: ["Christianity", "Buddhism", "Hinduism", "Shinto"], correctIndex: 0, explanation: "Aksum became an early Christian state." },
        { prompt: "Aksum's tall carved stone monuments were", options: ["stelae and obelisks", "canoes", "coins", "walls of ice"], correctIndex: 0, explanation: "Rulers raised stelae and obelisks." },
        { prompt: "Aksum expanded for a time across the Red Sea into", options: ["southern Arabia", "Europe", "India", "China"], correctIndex: 0, explanation: "Aksum reached into southern Arabia." },
        { prompt: "King Ezana subdued which neighbouring kingdom?", options: ["Kush", "Mali", "Rome", "Great Zimbabwe"], correctIndex: 0, explanation: "Ezana subdued Kush." },
        { prompt: "Aksum is called one of the earliest ___ states in the world.", options: ["Christian", "Buddhist", "communist", "democratic"], correctIndex: 0, explanation: "It adopted Christianity very early." },
        { prompt: "Aksum's decline may have been due to", options: ["increasing aridity and disrupted trade", "a European invasion", "the fall of Mali", "the Nile freezing"], correctIndex: 0, explanation: "Aridity and trade disruption weakened it." },
        { prompt: "A king associated with the later reign before decline was", options: ["Kaleb", "Narmer", "Piye", "Sundiata"], correctIndex: 0, explanation: "Aksum declined after Kaleb's sixth-century reign." },
        { prompt: "Which best shows Aksum's engineering skill?", options: ["Its tall stelae and royal palaces", "Its lack of buildings", "Its absence of writing", "Its isolation"], correctIndex: 0, explanation: "Stelae and palaces show engineering." },
        { prompt: "Ethiopia's Christian church has continued for over", options: ["sixteen centuries", "one century", "fifty years", "three centuries"], correctIndex: 0, explanation: "Its church endured since the 4th century CE." },
        { prompt: "Aksum acting as a regional power is shown by", options: ["expanding into Arabia and subduing Kush", "never leaving its capital", "paying tribute to Rome", "having no army"], correctIndex: 0, explanation: "It expanded and subdued neighbours." },
        { prompt: "The Ge'ez language is described as", options: ["a written Semitic language", "a European language", "a Bantu language", "a pictogram-only script"], correctIndex: 0, explanation: "Ge'ez is a Semitic written language." },
        { prompt: "Ethiopia's contributions disprove the idea that", options: ["Africa had no organised states before Europeans", "trade ever existed", "coins were used anywhere", "kings ruled kingdoms"], correctIndex: 0, explanation: "Aksum shows advanced African statehood." },
        { prompt: "Aksum's coins were made of", options: ["gold, silver and bronze", "plastic", "paper", "iron only"], correctIndex: 0, explanation: "It struck gold, silver and bronze coins." },
        { prompt: "The Christian cross appeared on Aksum's coinage under", options: ["Ezana", "Kaleb only", "Solomon", "Frumentius"], correctIndex: 0, explanation: "The cross replaced earlier symbols under Ezana." },
        { prompt: "Aksum's legacy that endured after decline includes", options: ["its church, script and traditions", "nothing at all", "only its coins in Rome", "European rule"], correctIndex: 0, explanation: "Church, Ge'ez and traditions continued." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List four contributions of Ethiopia (through Aksum) to African history.", answerKey: "Any four: a literate civilisation using the Ge'ez script; an organised economy that minted its own coins; monumental building (palaces and stelae); Red Sea trade; early adoption of Christianity under Ezana; regional power (expansion into Arabia, subduing Kush). Award 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why minting coins is strong evidence of an advanced state.", answerKey: "Minting coins in gold, silver and bronze requires wealth, a centralised authority to guarantee their value, and organised trade — so it signals a strong, centrally organised economy. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Aksum became one of the earliest states in the world to adopt", options: ["Christianity", "the wheel", "iron", "coins"], correctIndex: 0, answerKey: "Under Ezana, Aksum adopted Christianity in the fourth century CE. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons why Aksum declined and one part of its legacy that endured.", answerKey: "Decline: increasing aridity after the eighth century; disrupted trade networks (accept decline after Kaleb's reign). Enduring legacy: the Ethiopian Christian church, the Ge'ez script, or Ethiopia's tradition of independence. Award 2 marks per cause and 2 for the legacy.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss Ethiopia's contribution to African history, using the Kingdom of Aksum as your main example.", answerKey: "Award marks for: Aksum as a literate civilisation using Ge'ez, 4 marks; an organised economy that minted coins and controlled Red Sea trade, 6 marks; monumental building (stelae, palaces), 4 marks; early Christianity under Ezana, 4 marks; Aksum as a regional power (Arabia, subduing Kush), 4 marks; decline and enduring legacy, 3 marks. A response listing without discussion should not exceed 14.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 3.3 The Swahili Coast (https://openstax.org/books/world-history-volume-2/pages/3-3-the-swahili-coast)
      slug: "swahili-civilization-and-culture",
      title: "The Swahili Civilization and Culture",
      objective:
        "By the end of the topic, learners should be able to describe the origins and character of the Swahili civilization, identify the peoples and trade that shaped it, and explain the Swahili language, Islam and the city-states.",
      estimatedMinutes: 130,
      notes: `## A civilization of the East African coast

- Along the **East African coast**, from **Mogadishu** (in modern Somalia) south to **Sofala** (in Mozambique), a chain of trading city-states prospered.
- These were the **Swahili** city-states, which flourished on the **Indian Ocean trade** before the Portuguese arrived in the late fifteenth century.
- Swahili culture "blossomed" from about the **seventh century CE**, as Arab traders intermingled with local **Bantu** populations.

## Built on Indian Ocean trade

- The Swahili sat at the meeting point of Africa and the **Indian Ocean** trade routes.
- **Monsoon winds** drove the trade: in summer the prevailing winds blew ships north-east toward India, and winter winds blew them back.
- The standard vessel was the **dhow** — "a vessel made of coconut-wood planks sewn together with coconut fiber," with a triangular **lateen sail**.

## Trade goods

| Direction | Goods |
| --- | --- |
| Exported from Africa | gold, iron, copper, salt, ebony and sandalwood, ivory, tortoise shells |
| Imported to the coast | glass beads from India, Chinese silks, Chinese porcelain |

- The most powerful city-state was **Kilwa**, which grew wealthy by controlling the gold-rich port of **Sofala**.

## A blend of peoples: the Swahili language

- The **Swahili (Kiswahili) language** combined "the grammar of African **Bantu** languages with a Bantu and **Arabic** vocabulary," letting people of many ethnic groups trade with one another.
- Kiswahili is therefore fundamentally an **African (Bantu) language** enriched with Arabic words — a product of trade contact.

## Islam on the coast

- Over centuries, coastal inhabitants converted to **Islam**, adopting a version that "made concessions to the pre-Islamic practices" of several African societies — a distinctly Swahili, syncretic form.

## The city-states

- The coast held many independent city-states — **Mogadishu, Barawa, Mombasa, Malindi, Pemba, Zanzibar, Kilwa, Sofala** and others.
- They were famous for **stone buildings, mosques and busy ports**.

## The Portuguese arrival

- Portugal's arrival at the end of the fifteenth century **disrupted** the established networks; Portuguese ships could "loot and sink the ships of rival traders," most of whom were Muslims.

## Common errors and misconceptions

- **Thinking Kiswahili is an Arabic language** — it is a **Bantu African** language that absorbed Arabic vocabulary.
- **Believing Arabs "founded" the Swahili cities** — the civilisation was fundamentally **African** (Bantu), enriched by Arab and Asian trade contact; it was a *blend*.
- **Assuming the coast was one kingdom** — it was many **independent city-states**, of which Kilwa was the most powerful.
- **Forgetting the monsoon** — the seasonal monsoon winds, not chance, made the dhow trade possible.`,
      workedExample: `**Question:** Explain how trade shaped the Swahili civilization, and identify the peoples and language that resulted.

**Solution**

*Step 1 — the trade setting.*
The East African coast lay on the **Indian Ocean** trade network. The Swahili exported African goods — **gold, ivory, copper, ebony** — and imported **glass beads, Chinese silks and porcelain** from India and China.

*Step 2 — how the trade worked.*
Sailing depended on the **monsoon winds**: summer winds carried **dhows** north-east to India, winter winds brought them home. This seasonal rhythm made regular, long-distance trade possible.

*Step 3 — the wealth it produced.*
Trade built wealthy, independent **city-states** — **Mombasa, Zanzibar, Kilwa, Sofala** — with stone houses, mosques and busy ports. Kilwa grew richest by controlling gold from **Sofala**.

*Step 4 — the peoples and language.*
The civilisation was a **blend**: **Bantu-speaking Africans** at its base, intermingling with **Arab** traders. From this contact came the **Kiswahili language** — Bantu grammar and vocabulary enriched with Arabic words — and the spread of **Islam** in a distinctly Swahili form.

**Conclusion:** Indian Ocean trade, powered by the monsoon, drew Africans and Arabs together to build wealthy Swahili city-states, a new trade language (Kiswahili) and a coastal Islamic culture.`,
      quiz: [
        { prompt: "The Swahili civilization grew up along which coast?", options: ["the East African coast", "the West African coast", "the Mediterranean coast", "the Atlantic coast"], correctIndex: 0, explanation: "It developed along the East African (Indian Ocean) coast." },
        { prompt: "The Swahili city-states stretched from Mogadishu south to", options: ["Sofala", "Cairo", "Cape Town", "Timbuktu"], correctIndex: 0, explanation: "From Mogadishu to Sofala." },
        { prompt: "Swahili culture blossomed from about the", options: ["seventh century CE", "nineteenth century CE", "first century BCE", "fifteenth century BCE"], correctIndex: 0, explanation: "It flourished from about the 7th century CE." },
        { prompt: "Swahili trade depended on which winds?", options: ["monsoon winds", "harmattan winds", "polar winds", "trade winds of the Atlantic"], correctIndex: 0, explanation: "The seasonal monsoon powered the dhow trade." },
        { prompt: "The standard Swahili trading vessel was the", options: ["dhow", "galleon", "canoe", "junk"], correctIndex: 0, explanation: "The dhow, with a lateen sail." },
        { prompt: "The Kiswahili language combines Bantu grammar with", options: ["Arabic vocabulary", "Latin vocabulary", "Chinese grammar", "Persian grammar"], correctIndex: 0, explanation: "Bantu grammar with Bantu and Arabic vocabulary." },
        { prompt: "Kiswahili is fundamentally", options: ["an African (Bantu) language", "an Arabic language", "a European language", "a Chinese dialect"], correctIndex: 0, explanation: "It is a Bantu African language with Arabic loanwords." },
        { prompt: "Which religion spread along the Swahili coast?", options: ["Islam", "Buddhism", "Hinduism", "Shinto"], correctIndex: 0, explanation: "Islam spread among the city-states." },
        { prompt: "The most powerful Swahili city-state was", options: ["Kilwa", "Timbuktu", "Gao", "Carthage"], correctIndex: 0, explanation: "Kilwa controlled gold-rich Sofala." },
        { prompt: "Kilwa grew wealthy by controlling the gold of", options: ["Sofala", "Cairo", "Meroe", "Kano"], correctIndex: 0, explanation: "Kilwa controlled the gold port of Sofala." },
        { prompt: "African goods exported by the Swahili included", options: ["gold, ivory and copper", "porcelain and silk", "cars and radios", "coal and steel"], correctIndex: 0, explanation: "They exported gold, ivory, copper and hardwoods." },
        { prompt: "Imports to the Swahili coast included", options: ["glass beads, Chinese silks and porcelain", "steam engines", "printed books", "aluminium"], correctIndex: 0, explanation: "They imported Indian beads and Chinese goods." },
        { prompt: "The dhow was made of", options: ["coconut-wood planks sewn with coconut fibre", "steel plates", "gold sheets", "ice blocks"], correctIndex: 0, explanation: "Dhows were sewn coconut-wood vessels." },
        { prompt: "The Swahili city-states were", options: ["independent from one another", "a single unified empire", "ruled by Rome", "part of Mali"], correctIndex: 0, explanation: "They were independent city-states." },
        { prompt: "Swahili Islam is described as", options: ["a syncretic form making concessions to older African practices", "identical everywhere", "hostile to trade", "a European faith"], correctIndex: 0, explanation: "It blended with pre-Islamic African practices." },
        { prompt: "In summer, the monsoon winds blew ships", options: ["north-east toward India", "south to the Antarctic", "west to America", "nowhere"], correctIndex: 0, explanation: "Summer winds carried ships toward India." },
        { prompt: "The Swahili civilization was a blend of", options: ["Bantu Africans and Arab traders", "only Europeans", "only Chinese", "only Persians"], correctIndex: 0, explanation: "Bantu Africans intermingled with Arab traders." },
        { prompt: "Swahili city-states were famous for building in", options: ["stone (houses and mosques)", "ice", "glass towers", "gold bricks"], correctIndex: 0, explanation: "They built stone houses, mosques and ports." },
        { prompt: "Who disrupted Swahili trade networks at the end of the fifteenth century?", options: ["the Portuguese", "the Romans", "the Assyrians", "the Mongols"], correctIndex: 0, explanation: "Portuguese ships attacked rival traders." },
        { prompt: "The Swahili civilization shows how trade can create", options: ["wealth, cities, a new language and shared religion", "only warfare", "isolation", "the end of culture"], correctIndex: 0, explanation: "Trade produced wealth, Kiswahili and Islam." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Identify the peoples who contributed to the Swahili civilization and the language that resulted.", answerKey: "Bantu-speaking Africans as the base intermingling with Arab traders; the result was the Kiswahili language — Bantu grammar and vocabulary enriched with Arabic words. Award 2 marks for the peoples and 2 for the language.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how the monsoon winds and dhows made Indian Ocean trade possible.", answerKey: "Summer monsoon winds carried dhows north-east toward India and winter winds carried them back, giving a reliable seasonal rhythm; the dhow, a sewn coconut-wood vessel with a lateen sail, was suited to this trade. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The most powerful Swahili city-state, controlling gold from Sofala, was", options: ["Kilwa", "Mogadishu", "Zanzibar", "Malindi"], correctIndex: 0, answerKey: "Kilwa grew wealthy controlling Sofala's gold. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Correct this misconception: 'Kiswahili is an Arabic language founded by Arabs.'", answerKey: "Kiswahili is fundamentally a Bantu African language that absorbed Arabic vocabulary through trade; the Swahili civilisation was fundamentally African (Bantu), enriched by Arab and Asian contact — a blend, not a foreign creation. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss how trade shaped the Swahili civilization, its language, religion and city-states.", answerKey: "Award marks for: the Indian Ocean trade setting and monsoon/dhow mechanism, 5 marks; goods exported and imported, 4 marks; the wealthy independent city-states and Kilwa/Sofala, 5 marks; the Kiswahili language as a Bantu-Arabic blend, 4 marks; the spread of a syncretic Islam, 3 marks; conclusion, 2 marks. A response that calls Kiswahili an Arabic language loses the language marks.", marks: 23 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 9.3 The Kingdom of Kush (https://openstax.org/books/world-history-volume-1/pages/9-3-the-kingdom-of-kush)
      slug: "ancient-sudan-civilization",
      title: "The Civilization of Ancient Sudan",
      objective:
        "By the end of the topic, learners should be able to explain what 'the Sudan' means in African history, and describe the civilization of ancient Nubia and Kush along the Nile.",
      estimatedMinutes: 110,
      notes: `## What "the Sudan" means in African history

- In African history, **"the Sudan"** originally meant the broad belt of grassland (savanna) **south of the Sahara** — the Arabic *Bilad al-Sudan*, "land of the black peoples" — not only the modern country.
- The **ancient Sudan** in this topic refers to the Nile region of **Nubia**, in what is today the country of Sudan, where the **Kingdom of Kush** arose.

## Ancient Nubia and the Kingdom of Kush

- **Kush** emerged in **Nubia**, the region **south of Egypt's first cataract**.
- The earliest Nubian state formed around **2400 BCE**, organised around the city of **Kerma**, home to the massive Western Deffufa temple.
- Egypt controlled Nubia during its **New Kingdom (1570–1069 BCE)**; later Kush became independent around **Napata**, and around **736 BCE** King **Piye** conquered Egypt, Kush ruling it as the **25th Dynasty**.

## The later capital: Meroe

- After an **Assyrian conquest** of Egypt in **656 BCE**, Kush relocated its centre to **Meroe**, south of the fifth cataract.
- Meroe became famous for **ironworking** — its high-quality iron tools were prized far beyond its borders — and it developed the **Meroitic** script from Egyptian Demotic.
- Kush built its own **pyramids** and traded ivory, wood and other goods.

## Wealth and decline

- Kush was rich in **gold** (used for Tutankhamun's sarcophagus mask) and in ivory, ebony and incense.
- It declined around the **fourth century CE**, from environmental strain, falling Roman demand and competition from Aksum; around **350 CE** Aksum's King Ezana found Meroe already abandoned.

## Why ancient Sudan matters

- The ancient Sudan shows a **long-lasting, independent, literate African civilisation** on the Nile — with its own writing, ironworking and pyramids — that even ruled Egypt.
- It is one of the clearest examples of Africa's deep and accomplished past.

## Common errors and misconceptions

- **Confusing ancient Sudan with the modern country** — "the Sudan" in African history means the savanna belt south of the Sahara; the ancient Sudan of this topic is Nubia/Kush.
- **Thinking Kush merely copied Egypt** — it developed its own **Meroitic script** and **iron industry** and conquered Egypt.
- **Believing it left no evidence** — Kush left pyramids, ironworks, a script and gold.
- **Assuming it fell to one blow** — its decline had several causes over time.`,
      workedExample: `**Question:** Explain what "the Sudan" means in African history, and describe the civilization of ancient Sudan (Nubia and Kush).

**Solution**

*Step 1 — clarify the term.*
In African history, **"the Sudan"** means the broad **savanna belt south of the Sahara** — the *Bilad al-Sudan*, "land of the black peoples" — not only the modern country. The **ancient Sudan** here is **Nubia**, the Nile region where **Kush** arose.

*Step 2 — describe the early civilisation.*
The earliest Nubian state formed around **2400 BCE** at **Kerma**. Egypt ruled Nubia during its New Kingdom (1570–1069 BCE); Kush then became independent at **Napata** and, around **736 BCE**, conquered Egypt, ruling it as the **25th Dynasty**.

*Step 3 — the flowering at Meroe.*
After an Assyrian conquest of Egypt in **656 BCE**, Kush moved to **Meroe**, which became a great **ironworking** centre, developed the **Meroitic** script, and built its own **pyramids**.

*Step 4 — significance.*
Kush was wealthy in gold, ivory and ebony, and lasted until around the **fourth century CE**. It shows a long-lasting, literate, independent African civilisation on the Nile that even ruled Egypt.

**Conclusion:** "the Sudan" is the savanna belt below the Sahara, and the ancient Sudan of Nubia and Kush was a wealthy, literate, iron-working African civilisation — a clear proof of Africa's deep history.`,
      quiz: [
        { prompt: "In African history, 'the Sudan' originally meant", options: ["the grassland belt south of the Sahara", "only the modern country of Sudan", "the Sahara desert itself", "the East African coast"], correctIndex: 0, explanation: "It meant the savanna 'land of the black peoples'." },
        { prompt: "The ancient Sudan of this topic refers to", options: ["Nubia and the Kingdom of Kush", "the Swahili coast", "the Congo basin", "the Fertile Crescent"], correctIndex: 0, explanation: "Ancient Sudan here is Nubia/Kush on the Nile." },
        { prompt: "Kush arose south of Egypt's", options: ["first cataract", "Mediterranean shore", "Red Sea port", "delta only"], correctIndex: 0, explanation: "Kush lay south of the first cataract." },
        { prompt: "The earliest Nubian state was organised around", options: ["Kerma", "Kilwa", "Cairo", "Gao"], correctIndex: 0, explanation: "Kerma arose about 2400 BCE." },
        { prompt: "Kush ruled Egypt as the", options: ["25th Dynasty", "Old Kingdom", "Ptolemies", "Middle Kingdom"], correctIndex: 0, explanation: "Under Piye, Kush ruled as the 25th Dynasty." },
        { prompt: "After 656 BCE Kush moved its centre to", options: ["Meroe", "Napata", "Kerma", "Aksum"], correctIndex: 0, explanation: "It relocated south to Meroe." },
        { prompt: "Meroe became famous for", options: ["ironworking", "silk weaving", "glass blowing", "shipbuilding"], correctIndex: 0, explanation: "Its iron tools were widely prized." },
        { prompt: "The Kushite script was", options: ["Meroitic", "Latin", "Ge'ez", "Arabic"], correctIndex: 0, explanation: "Meroitic derived from Egyptian Demotic." },
        { prompt: "Kush built its own", options: ["pyramids", "coliseums", "cathedrals", "canals to Rome"], correctIndex: 0, explanation: "Meroe had pyramids of its own." },
        { prompt: "Kush was especially rich in", options: ["gold", "coal", "oil", "tea"], correctIndex: 0, explanation: "Kushite gold was used by Egypt." },
        { prompt: "Egypt controlled Nubia during its", options: ["New Kingdom (1570-1069 BCE)", "Old Kingdom only", "Roman period", "Ptolemaic period only"], correctIndex: 0, explanation: "Egypt ruled Nubia in the New Kingdom." },
        { prompt: "Kush's decline came around", options: ["the fourth century CE", "1847 CE", "3150 BCE", "the tenth century BCE"], correctIndex: 0, explanation: "Kush declined around the 4th century CE." },
        { prompt: "Around 350 CE, Aksum's Ezana found Meroe", options: ["already abandoned", "at its peak", "ruled by Rome", "flooded"], correctIndex: 0, explanation: "The capital had already been abandoned." },
        { prompt: "'Bilad al-Sudan' means", options: ["land of the black peoples", "land of the pyramids", "land of gold", "land of rivers"], correctIndex: 0, explanation: "It is Arabic for 'land of the black peoples'." },
        { prompt: "Kerma dates to about", options: ["2400 BCE", "656 BCE", "350 CE", "1500 CE"], correctIndex: 0, explanation: "The earliest Nubian state arose about 2400 BCE." },
        { prompt: "The independent Kushite kingdom first formed around", options: ["Napata", "Meroe", "Thebes", "Kilwa"], correctIndex: 0, explanation: "Napata came before Meroe." },
        { prompt: "Kushite rule of Egypt ended after a conquest by the", options: ["Assyrians", "Portuguese", "Romans", "British"], correctIndex: 0, explanation: "An Assyrian conquest drove Kush south." },
        { prompt: "The ancient Sudan shows Africa had", options: ["a long-lasting, literate, independent civilisation", "no writing", "no metalworking", "no states"], correctIndex: 0, explanation: "Kush was literate, independent and long-lasting." },
        { prompt: "Confusing ancient Sudan with the modern country is an error because", options: ["'the Sudan' meant the whole savanna belt south of the Sahara", "there was no such place", "it was in Europe", "it was on the coast"], correctIndex: 0, explanation: "The term covered the wider savanna belt." },
        { prompt: "The most striking fact about Kush is that it", options: ["conquered and ruled Egypt itself", "was ruled by Rome", "had no cities", "was in Asia"], correctIndex: 0, explanation: "An African kingdom ruled Egypt as the 25th Dynasty." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what 'the Sudan' means in African history and what the ancient Sudan of this topic refers to.", answerKey: "'The Sudan' meant the broad savanna belt south of the Sahara (Bilad al-Sudan, 'land of the black peoples'), not only the modern country; the ancient Sudan here refers to Nubia and the Kingdom of Kush along the Nile. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the Kingdom of Kush under three headings: location, achievements, and decline.", answerKey: "Location — Nubia, south of Egypt's first cataract, on the Nile. Achievements — Kerma about 2400 BCE, ruled Egypt as the 25th Dynasty, ironworking at Meroe, the Meroitic script, its own pyramids, gold wealth. Decline — around the fourth century CE from environmental strain, falling Roman demand and Aksum's competition; Meroe abandoned by about 350 CE. Award 2 marks per heading.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "The later capital of Kush, famous for ironworking, was", options: ["Meroe", "Napata", "Kerma", "Kilwa"], correctIndex: 0, answerKey: "Meroe, south of the fifth cataract. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why is the civilization of ancient Sudan important evidence for African history?", answerKey: "It shows a long-lasting, literate, independent African civilisation on the Nile with its own writing (Meroitic), ironworking and pyramids, that even conquered and ruled Egypt — clear evidence of Africa's deep and accomplished past. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the civilization of ancient Sudan (Nubia and Kush) and its significance in African history.", answerKey: "Award marks for: the meaning of 'the Sudan' and location of Nubia/Kush, 4 marks; early state at Kerma and Egyptian control in the New Kingdom, 5 marks; independence at Napata and the conquest of Egypt as the 25th Dynasty, 6 marks; Meroe's ironworking, Meroitic script and pyramids, 5 marks; wealth, decline and significance, 5 marks. Narration without significance should not exceed 16.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 1, 15.1 Culture and Society in Medieval Africa (https://openstax.org/books/world-history-volume-1/pages/15-1-culture-and-society-in-medieval-africa)
      slug: "origin-of-african-societies",
      title: "The Origin of African Societies",
      objective:
        "By the end of the topic, learners should be able to explain how small African communities grew into larger organised societies through farming, ironworking, the Bantu migrations and trade.",
      estimatedMinutes: 110,
      notes: `## From small communities to organised societies

- Early African societies grew from small kin-based communities into larger, organised societies over a long period.
- The key drivers were **farming and herding**, **ironworking**, the **Bantu migrations**, and **trade**.

## Africa's variety

- Africa's "vast landmass possesses a great variety of different terrains and climatic regions" — North Africa, the Sahel, the savanna and the rainforest.
- Different regions developed **distinct societies and economies** suited to their environments.

## Farming and settled life

- The adoption of **farming and herding** allowed settled village life and food surpluses.
- Surpluses could support larger populations and specialists (craftworkers, traders, rulers), the foundation of larger societies.

## Ironworking and the Bantu migrations

- **Bantu-speaking** peoples had been migrating across Africa possibly since as early as **3000 BCE**.
- They acquired **ironworking technology from the Nok people**, whose metallurgical knowledge they encountered.
- With iron tools and weapons, the Bantu **expanded and settled** across much of central and southern Africa, especially between about **500 and 1000 CE**.
- Iron improved **farming and defence**, helping societies grow.

## Trade

- **Trade** brought wealth and contact with other peoples.
- **Salt** became "the second most prized good traded across the Sahara — the first being gold." Salt was so valuable that the king of Ghana "stored it in the royal treasury alongside gold nuggets."
- Long-distance trade linked African societies to one another and to the wider world (as on the Swahili coast and across the Sahara).

## What bound societies together

- Shared **language, religion and rule** bound people into kingdoms and civilisations — such as Aksum, the Swahili city-states and Kush.

## Common errors and misconceptions

- **Thinking African societies appeared suddenly** — they grew over long periods through farming, iron and migration.
- **Ignoring the Bantu migrations** — these, enabled by ironworking from the Nok, shaped much of central and southern Africa.
- **Underrating salt** — after gold, salt was the most prized trans-Saharan good, stored in Ghana's treasury.
- **Assuming Africa is uniform** — its terrains and societies are highly varied.`,
      workedExample: `**Question:** Explain how farming, ironworking, the Bantu migrations and trade helped small African communities grow into larger organised societies.

**Solution**

*Step 1 — farming and herding.*
The adoption of **farming and herding** allowed **settled village life** and produced **food surpluses**. Surpluses could feed larger populations and support specialists — craftworkers, traders and rulers — the basis of larger societies.

*Step 2 — ironworking and the Bantu.*
**Bantu-speaking** peoples, migrating possibly since about **3000 BCE**, acquired **ironworking from the Nok people**. Iron tools and weapons improved farming and defence and let the Bantu **expand and settle** across central and southern Africa, especially between about 500 and 1000 CE.

*Step 3 — trade.*
**Trade** brought wealth and contact. Across the Sahara, **gold** and then **salt** were the most prized goods — salt so valuable that Ghana's king kept it in the royal treasury beside gold. Trade linked societies and enriched their rulers.

*Step 4 — what bound them together.*
Shared **language, religion and rule** bound people into kingdoms and civilisations such as Aksum, the Swahili coast and Kush.

**Conclusion:** farming produced surpluses, ironworking and the Bantu migrations spread tools and settlement, and trade brought wealth and contact — together turning small communities into the organised societies and states of African history.`,
      quiz: [
        { prompt: "Early African societies grew from", options: ["small kin-based communities into larger organised societies", "empires that always existed", "European colonies", "nomads who never settled"], correctIndex: 0, explanation: "They grew gradually from small communities." },
        { prompt: "Which allowed settled village life and food surpluses?", options: ["farming and herding", "war alone", "isolation", "abandoning tools"], correctIndex: 0, explanation: "Farming and herding produced surpluses." },
        { prompt: "The Bantu acquired ironworking from the", options: ["Nok people", "Romans", "Portuguese", "Swahili"], correctIndex: 0, explanation: "They gained metallurgy from the Nok." },
        { prompt: "Bantu migrations may have begun as early as", options: ["3000 BCE", "1500 CE", "1847 CE", "500 BCE"], correctIndex: 0, explanation: "Possibly by about 3000 BCE." },
        { prompt: "Iron tools helped societies grow by improving", options: ["farming and defence", "sailing only", "coin minting only", "nothing"], correctIndex: 0, explanation: "Iron improved farming and defence." },
        { prompt: "After gold, the most prized good traded across the Sahara was", options: ["salt", "silk", "coal", "tea"], correctIndex: 0, explanation: "Salt was the second most prized good." },
        { prompt: "The king of Ghana stored salt", options: ["in the royal treasury alongside gold", "in the sea", "in Rome", "nowhere"], correctIndex: 0, explanation: "Salt was as prized as gold nuggets." },
        { prompt: "Africa's landmass is described as having", options: ["a great variety of terrains and climates", "one single climate", "no people", "only desert"], correctIndex: 0, explanation: "Its terrains and climates vary greatly." },
        { prompt: "Food surpluses were important because they", options: ["supported larger populations and specialists", "were thrown away", "prevented trade", "stopped growth"], correctIndex: 0, explanation: "Surpluses fed larger, specialised societies." },
        { prompt: "The Bantu spread across much of", options: ["central and southern Africa", "Europe", "the Arctic", "the Americas"], correctIndex: 0, explanation: "They settled central and southern Africa." },
        { prompt: "Trade brought African societies", options: ["wealth and contact with other peoples", "isolation", "the end of farming", "no benefit"], correctIndex: 0, explanation: "Trade enriched and connected societies." },
        { prompt: "What bound people into kingdoms and civilisations?", options: ["shared language, religion and rule", "having no leaders", "avoiding all contact", "abandoning language"], correctIndex: 0, explanation: "Shared language, religion and rule unified people." },
        { prompt: "The Bantu expansion was especially strong between about", options: ["500 and 1000 CE", "1800 and 1900 CE", "3000 and 2500 BCE", "1 and 100 BCE"], correctIndex: 0, explanation: "Expansion peaked around 500–1000 CE." },
        { prompt: "Which region is NOT one of Africa's varied environments named here?", options: ["the Arctic tundra", "North Africa", "the Sahel", "the rainforest"], correctIndex: 0, explanation: "Africa's zones include North Africa, Sahel, savanna and rainforest." },
        { prompt: "Specialists supported by food surpluses included", options: ["craftworkers, traders and rulers", "only farmers", "no one", "foreign soldiers only"], correctIndex: 0, explanation: "Surpluses freed people for specialised roles." },
        { prompt: "Ironworking is significant because it", options: ["enabled Bantu expansion and better tools", "was never used in Africa", "came from Europe", "harmed farming"], correctIndex: 0, explanation: "Iron enabled expansion and improved tools." },
        { prompt: "Salt was valuable in the trans-Saharan trade because it was", options: ["scarce and essential, prized like gold", "worthless", "only decorative", "banned"], correctIndex: 0, explanation: "It was prized second only to gold." },
        { prompt: "African societies did not appear suddenly; they grew through", options: ["farming, iron and migration over long periods", "a single event", "European settlement", "one king's order"], correctIndex: 0, explanation: "Growth was gradual over long periods." },
        { prompt: "Examples of civilisations bound by shared language, religion and rule include", options: ["Aksum, the Swahili coast and Kush", "Rome and Greece only", "Britain and France", "none"], correctIndex: 0, explanation: "These African civilisations were bound in this way." },
        { prompt: "The Nok people were important because they", options: ["provided metallurgical (iron) knowledge", "sailed to India", "founded Rome", "built the pyramids"], correctIndex: 0, explanation: "The Bantu gained ironworking from the Nok." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how farming and herding helped small communities grow into larger societies.", answerKey: "Farming and herding allowed settled village life and produced food surpluses; surpluses supported larger populations and specialists (craftworkers, traders, rulers), the foundation of larger organised societies. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the role of the Bantu migrations and ironworking in the origin of African societies.", answerKey: "Bantu speakers migrated across Africa possibly from about 3000 BCE; acquiring ironworking from the Nok, they expanded and settled across central and southern Africa (especially 500–1000 CE); iron improved farming and defence, helping societies grow. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "After gold, the most prized good traded across the Sahara was", options: ["salt", "silk", "coal", "ivory"], correctIndex: 0, answerKey: "Salt; the king of Ghana stored it beside gold nuggets. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two ways trade contributed to the growth of African societies.", answerKey: "Trade brought wealth to rulers and societies; it brought contact with other peoples and ideas; it linked societies across the Sahara and Indian Ocean. Award 2 marks per point.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss how farming, ironworking, the Bantu migrations and trade explain the origin and growth of African societies.", answerKey: "Award marks for: farming/herding and surpluses supporting specialists, 5 marks; ironworking from the Nok and the Bantu migrations spreading tools and settlement, 6 marks; trade in gold and salt bringing wealth and contact, 5 marks; shared language, religion and rule binding people into kingdoms, 4 marks; examples (Aksum, Swahili, Kush) and conclusion, 3 marks. Listing without explanation should not exceed 12.", marks: 23 },
      ],
    },
  ],
};
