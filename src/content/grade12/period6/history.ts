import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 12,
// Semester Two, Period VI: The Struggle for Political Sovereignty in Eastern
// Africa, 1945 to Independence. The MoE CONTENTS list has four top-level items,
// each rebuilt here as its own topic: (1) the partitioning of Eastern Africa and
// the scramble of political powers; (2) the political struggle in Eastern Africa
// during the 20th century; (3) the political struggle faced by African nations
// toward their independence; and (4) sexual behavior (the syllabus activity
// specifies values and attitudes on love, friendship and sexual attraction, and
// the outcome notes that some African women were victims of sexual exploitation
// and abuse during the political struggles).
//
// SOURCING NOTE / SYLLABUS GAPS: topics 1–3 are built from OpenStax World
// History Volume 2 (9.3 Colonial Empires; 9.4 Exploitation and Resistance;
// 14.4 Global Tensions and Decolonization) and LibreTexts (Brooks, Western
// Civilization III, 13.3 Africa). Those sources cover the Berlin Conference,
// German East Africa, Italy/Ethiopia and Adwa, and Kenya's Mau Mau struggle in
// depth, but do NOT detail Tanganyika (Nyerere), Uganda, Zanzibar or the
// Maji Maji rising; those are flagged, not invented. Topic 4 is built from
// OpenStax Psychology 2e (12.7, relationships and Sternberg's theory of love)
// and OpenStax Lifespan Development (9.2, adolescent sexual behaviour, consent
// and sexual violence). The approved sources do not document the sexual
// exploitation of women during the East African independence struggles
// specifically; that history must come from the MoE primary texts.
export const historyG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "The Struggle for Political Sovereignty in Eastern Africa, 1945 to Independence",
  summary:
    "Period VI of the MoE Grade 12 History syllabus. Learners study how Eastern Africa was partitioned in the Scramble for Africa, the political struggle against colonial rule in the 20th century (with Kenya's Mau Mau struggle as the sourced case study), the general obstacles African nations faced on the road to independence, and values and attitudes on sexual behavior — love, friendship, attraction, consent and the recognition of sexual violence. Built from OpenStax World History Volume 2, LibreTexts and OpenStax Psychology / Lifespan Development; East African cases the sources do not cover (Tanganyika, Uganda, Zanzibar, Maji Maji) and the specific history of sexual exploitation during the struggles are flagged for the teacher to supply from the MoE primary texts.",
  topics: [
    {
      // source: OpenStax — World History Volume 2, 9.3 Colonial Empires (https://openstax.org/books/world-history-volume-2/pages/9-3-colonial-empires)
      slug: "partitioning-of-eastern-africa-and-the-scramble-of-political-powers",
      title: "The Partitioning of Eastern Africa and the Scramble of Political Powers",
      objective:
        "By the end of the topic, learners should be able to explain why and how European powers partitioned Africa, identify the powers that claimed territory in Eastern Africa, and explain Ethiopia's successful resistance at Adwa.",
      estimatedMinutes: 90,
      notes: `## The Scramble for Africa

- **Scramble for Africa** — the rush by European powers in the late 1800s to claim African territory as colonies.
- At the start of the Industrial Revolution Europeans controlled about **10%** of Africa; by the end of the century they controlled about **90%**.
- The largest shares went to **Britain, France, Belgium and Germany**.

## Why the powers scrambled

1. **Raw materials** — "to get access to raw materials."
2. **Markets** — "new markets for their goods."
3. **Prestige** — "to boost international prestige and national pride."
4. **Military dominance** — "to achieve military dominance over rivals."

## The Berlin Conference (1884–1885)

- "The 'Scramble for Africa' reached its height during the Berlin Conference of 1884–1885 when, **without input from Africans**, European nations simply allotted different parts of the continent to one another."
- **Partition** — the dividing up of Africa into colonial territories by outside powers.
- Africans had no say in the borders drawn over their lands.

## The powers in Eastern Africa

| Power | Eastern / North-Eastern African claims (sourced) |
| --- | --- |
| Britain | Egypt and Sudan — protecting finances and the Suez Canal route; later Kenya (granted independence 1963) |
| Germany | German East Africa — today Rwanda, Burundi and parts of Tanzania |
| Italy | Eritrea (claimed 1889); attempted control of Ethiopia |
| Ethiopia | Remained independent after defeating Italy |

## Ethiopia's resistance — the Battle of Adwa (1896)

- Italy signed the **Treaty of Wuchale** with Emperor **Menelik II** of Ethiopia, then tried to enforce its terms to control Ethiopia.
- At **Adwa (1896)** Ethiopia won decisively: "Six thousand Italians were killed, three thousand were captured," and the Ethiopians seized eleven thousand rifles.
- Adwa "largely marked the end of Italy's expansion in Africa"; **Ethiopia kept its independence**.

## Results of partition for Eastern Africa

- Borders drawn in Europe, not by Africans.
- Colonial economies built on extraction, forced labour and taxes (see Topic 2).
- The colonial units drawn in this period became the territories that later fought for sovereignty.

## Source note and syllabus gap

- The source covers the Berlin Conference, Britain, German East Africa, Italy and Adwa. It does **not** detail the British claim to Uganda, Zanzibar or the exact dates of each East African protectorate; take those from the MoE primary texts (History of Africa, Pearson).`,
      workedExample: `**Question:** Explain how Eastern Africa was partitioned during the Scramble for Africa, and why Ethiopia escaped colonisation.

**Solution**

*Step 1 — the motives.*
European powers wanted raw materials, new markets, national prestige and military dominance over rivals.

*Step 2 — the method.*
At the Berlin Conference (1884–1885), without input from Africans, they allotted parts of the continent to one another; European control rose from about 10% to about 90% of Africa.

*Step 3 — Eastern Africa's division.*
Britain held Egypt and Sudan (and Kenya); Germany took German East Africa (today Rwanda, Burundi and parts of Tanzania); Italy claimed Eritrea in 1889 and tried to control Ethiopia.

*Step 4 — Ethiopia's exception.*
When Italy tried to enforce the Treaty of Wuchale, Menelik II's Ethiopia defeated it at Adwa in 1896 — 6,000 Italians killed, 3,000 captured — ending Italian expansion and preserving Ethiopian independence.

**Answer:** Eastern Africa was divided among Britain, Germany and Italy by European agreement without African consent; Ethiopia alone stayed independent by defeating Italy at Adwa.`,
      quiz: [
        { prompt: "The 'Scramble for Africa' was", options: ["the European rush to claim African colonies", "a trade fair in Addis Ababa", "an African alliance", "a UN peace mission"], correctIndex: 0, explanation: "It was the late-1800s European rush for African territory." },
        { prompt: "About how much of Africa did Europeans control at the start of the Industrial Revolution?", options: ["10%", "50%", "90%", "100%"], correctIndex: 0, explanation: "About 10%, rising to about 90% by century's end." },
        { prompt: "By the end of the 1800s, Europeans controlled about", options: ["90% of Africa", "10% of Africa", "25% of Africa", "none of Africa"], correctIndex: 0, explanation: "About 90%." },
        { prompt: "The Berlin Conference took place in", options: ["1884–1885", "1945", "1896", "1963"], correctIndex: 0, explanation: "1884–1885." },
        { prompt: "At the Berlin Conference, Africans", options: ["had no input", "chaired the meeting", "voted on borders", "vetoed the partition"], correctIndex: 0, explanation: "Africa was divided without input from Africans." },
        { prompt: "Which was NOT a motive for the scramble?", options: ["spreading African self-rule", "raw materials", "new markets", "national prestige"], correctIndex: 0, explanation: "The motives were materials, markets, prestige and military dominance." },
        { prompt: "'Partition' means", options: ["dividing a territory among outside powers", "uniting colonies", "holding an election", "signing a trade deal"], correctIndex: 0, explanation: "Partition is division into colonial territories." },
        { prompt: "German East Africa is today", options: ["Rwanda, Burundi and parts of Tanzania", "Kenya and Uganda", "Ethiopia and Eritrea", "Sudan and Egypt"], correctIndex: 0, explanation: "The source gives Rwanda, Burundi and parts of Tanzania." },
        { prompt: "Britain held Egypt and Sudan partly to protect", options: ["the Suez Canal route and its finances", "German East Africa", "Italian Eritrea", "Ethiopia"], correctIndex: 0, explanation: "Britain protected its financial interests and the Suez route." },
        { prompt: "Italy claimed Eritrea in", options: ["1889", "1945", "1963", "1884"], correctIndex: 0, explanation: "1889." },
        { prompt: "The Treaty of Wuchale was signed between Italy and", options: ["Emperor Menelik II of Ethiopia", "Jomo Kenyatta", "Britain", "Germany"], correctIndex: 0, explanation: "Italy signed it with Menelik II." },
        { prompt: "The Battle of Adwa was fought in", options: ["1896", "1884", "1952", "1963"], correctIndex: 0, explanation: "1896." },
        { prompt: "At Adwa, about how many Italians were killed?", options: ["six thousand", "sixty", "six hundred thousand", "none"], correctIndex: 0, explanation: "Six thousand Italians were killed." },
        { prompt: "How many rifles did the Ethiopians seize at Adwa?", options: ["eleven thousand", "eleven", "one hundred", "one million"], correctIndex: 0, explanation: "Eleven thousand rifles." },
        { prompt: "Adwa largely marked the end of", options: ["Italy's expansion in Africa", "British rule in Egypt", "the Berlin Conference", "German East Africa"], correctIndex: 0, explanation: "It ended Italian expansion in Africa." },
        { prompt: "Which Eastern African state kept its independence through the scramble?", options: ["Ethiopia", "Kenya", "Eritrea", "Sudan"], correctIndex: 0, explanation: "Ethiopia stayed independent after Adwa." },
        { prompt: "The four powers with the largest African shares were Britain, France, Belgium and", options: ["Germany", "Italy", "Portugal", "Spain"], correctIndex: 0, explanation: "Germany." },
        { prompt: "Colonial borders in Eastern Africa were drawn", options: ["by Europeans, not Africans", "by African kings", "by the UN", "by referendum"], correctIndex: 0, explanation: "Borders were drawn in Europe without African input." },
        { prompt: "Seeking 'military dominance over rivals' was a motive linked to", options: ["competition between European powers", "African unity", "the UN Charter", "trade with Asia only"], correctIndex: 0, explanation: "Powers scrambled to outdo European rivals." },
        { prompt: "Details of Uganda's and Zanzibar's partition should be taken from", options: ["the MoE primary texts", "guesswork", "the Berlin Conference minutes only", "no source"], correctIndex: 0, explanation: "The approved source does not detail them; use MoE texts." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four motives that drove European powers to scramble for Africa.", answerKey: "Access to raw materials; new markets for their goods; boosting international prestige and national pride; achieving military dominance over rivals. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "German East Africa corresponds today to", options: ["Rwanda, Burundi and parts of Tanzania", "Kenya and Uganda", "Eritrea and Somalia", "Egypt and Sudan"], correctIndex: 0, answerKey: "Rwanda, Burundi and parts of Tanzania. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe the Berlin Conference and explain why it matters to Eastern Africa.", answerKey: "The Berlin Conference (1884–1885) was where European nations, without input from Africans, allotted different parts of Africa to one another; the Scramble reached its height there. It matters because Eastern Africa's colonial borders and rulers (Britain, Germany, Italy) were fixed by outsiders, and European control of Africa rose from about 10% to about 90%. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how Ethiopia avoided colonisation.", answerKey: "Italy signed the Treaty of Wuchale with Emperor Menelik II and tried to enforce it to control Ethiopia. At the Battle of Adwa (1896) Ethiopia won decisively — 6,000 Italians killed, 3,000 captured and 11,000 rifles seized — which largely ended Italy's expansion in Africa and preserved Ethiopian independence. Award up to 5 marks.", marks: 5 },
        { type: "ESSAY", prompt: "Discuss the partitioning of Eastern Africa and the scramble of political powers in the late nineteenth century.", answerKey: "Award marks for: defining the Scramble and its scale (10% to 90% European control), 4 marks; the four motives — raw materials, markets, prestige, military dominance, 4 marks; the Berlin Conference (1884–1885) dividing Africa without African input, 5 marks; the powers in Eastern Africa — Britain (Egypt, Sudan, Kenya), Germany (German East Africa: Rwanda, Burundi, parts of Tanzania), Italy (Eritrea 1889), 6 marks; Ethiopia's victory at Adwa (1896) after the Treaty of Wuchale, 4 marks; conclusion on the consequences of externally drawn borders, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 9.4 Exploitation and Resistance (https://openstax.org/books/world-history-volume-2/pages/9-4-exploitation-and-resistance) and 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization)
      slug: "political-struggle-in-eastern-africa-during-the-20th-century",
      title: "The Political Struggle in Eastern Africa during the 20th Century",
      objective:
        "By the end of the topic, learners should be able to describe the colonial grievances that drove resistance in Eastern Africa and explain Kenya's struggle for independence — the Kenya African Union, the Mau Mau uprising, the British response and independence in 1963.",
      estimatedMinutes: 95,
      notes: `## Colonial grievances (the roots of struggle)

- **Forced labour** — people were compelled to "mine ore or gather ivory or rubber for Europeans," often leaving no time to grow their own food.
- **Taxes and extraction** — colonial economies were built to send raw materials to Europe.
- **Land loss and political exclusion** — Africans had no vote in the colonial state.
- "Resistance movements and outright revolts **sprang up wherever colonizers went**." North-east African examples in the source: the Egyptian revolt, the war of the **Mahdi's army** in Sudan, and **Ethiopia's war with Italy**.

## Forms of political struggle

1. **Armed revolt** — e.g. the Mahdi in Sudan; later the Mau Mau in Kenya.
2. **Political organisation** — parties and unions demanding rights and self-rule (e.g. the Kenya African Union).
3. **Negotiation and elections** — pressing the colonial power for a constitutional path to independence.

## Case study: Kenya

- **Kenya African Union (KAU)** — led by **Jomo Kenyatta**, who rejected violence: in 1952 he said, "K.A.U. is not a fighting union that uses fists and weapons."
- **Mau Mau** — "In 1952, a group called the Kenya Land and Freedom Army, popularly known as the Mau Mau, began to fight for independence."
- Mau Mau fighters attacked civilians, "both White and Black," to spread fear.
- **British response** — political parties were banned; "Thousands were sent to internment camps. Entire villages were forcibly resettled."
- The conflict became a civil war — "a complex web of nationalist rebels, impoverished villagers and farmers, and counter-insurgent fighters" — with "concentration camps" and systematic violence (LibreTexts, Brooks, 13.3).
- **Independence, 1963** — Britain, "financially over-extended" after the war, granted independence; **Kenyatta became prime minister**.

## Timeline

| Year | Event |
| --- | --- |
| 1952 | Mau Mau (Kenya Land and Freedom Army) begins armed struggle; Kenyatta's KAU rejects violence |
| 1950s | Parties banned, internment camps, villages resettled |
| 1963 | Kenya independent; Kenyatta prime minister |

## Source note and syllabus gap

- The sources cover Kenya fully. They do **not** detail Tanganyika's path under Julius Nyerere, Uganda's or Zanzibar's independence, or the Maji Maji rising in German East Africa. Those are **not invented here** — use the MoE primary texts (History of Africa, Pearson).`,
      workedExample: `**Question:** Describe the main features of Kenya's political struggle for independence.

**Solution**

*Step 1 — the grievance.*
Colonial rule rested on extraction, forced labour and exclusion of Africans from power, so resistance arose as it did "wherever colonizers went."

*Step 2 — the political wing.*
The Kenya African Union under Jomo Kenyatta pressed for independence and rejected violence ("K.A.U. is not a fighting union").

*Step 3 — the armed wing.*
In 1952 the Kenya Land and Freedom Army (Mau Mau) began an armed fight for independence, including attacks on civilians.

*Step 4 — the British response.*
Britain banned political parties, sent thousands to internment camps and forcibly resettled villages; the conflict became a violent civil war.

*Step 5 — the outcome.*
Financially over-extended, Britain granted independence in 1963, with Kenyatta as prime minister.

**Answer:** Kenya's struggle combined political organisation (KAU) with armed revolt (Mau Mau, 1952); harsh British repression followed, but independence came in 1963.`,
      quiz: [
        { prompt: "Colonised people were forced to mine ore or gather", options: ["ivory or rubber for Europeans", "cotton for Africans", "food for themselves", "gold for the UN"], correctIndex: 0, explanation: "The source names ivory and rubber." },
        { prompt: "According to the source, resistance movements sprang up", options: ["wherever colonizers went", "only in Kenya", "only after 1990", "nowhere"], correctIndex: 0, explanation: "Resistance arose wherever colonizers went." },
        { prompt: "The war waged by the Mahdi's army took place in", options: ["Sudan", "Kenya", "Ethiopia", "Tanzania"], correctIndex: 0, explanation: "The Mahdi fought in Sudan." },
        { prompt: "The Mau Mau's formal name was the", options: ["Kenya Land and Freedom Army", "Kenya African Union", "Convention People's Party", "African National Congress"], correctIndex: 0, explanation: "Kenya Land and Freedom Army." },
        { prompt: "The Mau Mau began fighting for independence in", options: ["1952", "1963", "1896", "1945"], correctIndex: 0, explanation: "1952." },
        { prompt: "Who led the Kenya African Union?", options: ["Jomo Kenyatta", "Kwame Nkrumah", "Patrice Lumumba", "Menelik II"], correctIndex: 0, explanation: "Jomo Kenyatta." },
        { prompt: "Kenyatta's 1952 stance on violence was that KAU", options: ["is not a fighting union", "must take up arms", "would join the British", "would dissolve"], correctIndex: 0, explanation: "He said K.A.U. is not a fighting union that uses fists and weapons." },
        { prompt: "Which was part of the British response in Kenya?", options: ["banning political parties", "granting immediate independence", "holding free elections in 1952", "withdrawing all troops"], correctIndex: 0, explanation: "Britain banned political parties." },
        { prompt: "Thousands of Kenyans were sent to", options: ["internment camps", "universities in Britain", "the UN", "Ethiopia"], correctIndex: 0, explanation: "Thousands were sent to internment camps." },
        { prompt: "Entire Kenyan villages were", options: ["forcibly resettled", "given self-rule", "made into cities", "left untouched"], correctIndex: 0, explanation: "Villages were forcibly resettled." },
        { prompt: "Mau Mau fighters attacked civilians", options: ["both White and Black", "only White", "never", "only British soldiers"], correctIndex: 0, explanation: "The source says both White and Black civilians." },
        { prompt: "Kenya became independent in", options: ["1963", "1952", "1957", "1945"], correctIndex: 0, explanation: "1963." },
        { prompt: "After independence, Kenyatta became", options: ["prime minister", "governor", "a detainee for life", "UN Secretary-General"], correctIndex: 0, explanation: "He became prime minister." },
        { prompt: "One reason Britain granted Kenyan independence was that it was", options: ["financially over-extended", "militarily defeated by Germany", "forced by Italy", "bankrupted by Ethiopia"], correctIndex: 0, explanation: "Britain was financially over-extended." },
        { prompt: "The Kenyan conflict is described as a civil war involving rebels, villagers and", options: ["counter-insurgent fighters", "Italian troops", "UN peacekeepers", "German settlers only"], correctIndex: 0, explanation: "Nationalist rebels, villagers/farmers and counter-insurgent fighters." },
        { prompt: "Organising a party or union to demand self-rule is an example of", options: ["political organisation", "armed revolt", "forced labour", "partition"], correctIndex: 0, explanation: "That is the political-organisation form of struggle." },
        { prompt: "Forced labour often left Africans with no time to", options: ["grow their own food", "pay taxes", "build railways", "learn European languages"], correctIndex: 0, explanation: "It left no time for subsistence crops." },
        { prompt: "Which pair shows the two wings of Kenya's struggle?", options: ["KAU (political) and Mau Mau (armed)", "OAU and UN", "Mahdi and Menelik", "Britain and Italy"], correctIndex: 0, explanation: "KAU was political; Mau Mau was armed." },
        { prompt: "Ethiopia's war with Italy is cited in the source as an example of", options: ["African resistance", "partition by consent", "a trade treaty", "a UN mission"], correctIndex: 0, explanation: "It is listed among acts of resistance." },
        { prompt: "Tanganyika's path to independence under Nyerere should be taught from", options: ["the MoE primary texts", "invented details", "the Kenya case only", "no source"], correctIndex: 0, explanation: "The approved sources do not detail it; use MoE texts." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Identify three colonial grievances that fuelled political struggle in Eastern Africa.", answerKey: "Any three: forced labour (mining ore, gathering ivory or rubber for Europeans); no time to grow subsistence food; taxation and extraction of raw materials for Europe; loss of land; exclusion from political power. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The Mau Mau began its armed struggle in", options: ["1952", "1963", "1896", "1957"], correctIndex: 0, answerKey: "1952. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Contrast the methods of the Kenya African Union and the Mau Mau.", answerKey: "The KAU under Jomo Kenyatta used political organisation and rejected violence ('K.A.U. is not a fighting union that uses fists and weapons'). The Mau Mau (Kenya Land and Freedom Army) took up armed struggle from 1952, including attacks on civilians to spread fear. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe how Britain responded to the Mau Mau uprising.", answerKey: "Britain banned political parties, sent thousands of Kenyans to internment camps and forcibly resettled entire villages; the conflict became a violent civil war with concentration camps and systematic violence. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the political struggle in Eastern Africa during the 20th century, using Kenya as a case study.", answerKey: "Award marks for: colonial grievances — forced labour, extraction, exclusion, 5 marks; the forms of struggle (armed revolt, political organisation, negotiation) with sourced examples (Mahdi, Ethiopia, KAU, Mau Mau), 5 marks; the Kenya case — KAU and Kenyatta's non-violence, Mau Mau from 1952, 6 marks; the British response — banned parties, internment camps, resettlement, civil war, 5 marks; independence in 1963 with Kenyatta as prime minister and Britain's financial over-extension, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization) and LibreTexts — Western Civilization: A Concise History III (Brooks), 13.3 Africa (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_III_(Brooks)/13:_Postwar_Conflict/13.03:_Africa)
      slug: "political-struggle-faced-by-african-nations-toward-independence",
      title: "The Political Struggle Faced by African Nations toward Their Independence",
      objective:
        "By the end of the topic, learners should be able to compare peaceful and violent routes to independence in Africa after 1945 and analyse the obstacles African nations faced — settler resistance, colonial repression, Cold War interference and competition for resources.",
      estimatedMinutes: 90,
      notes: `## The collapse of empire after 1945

- After the Second World War "the whole edifice of European empire in Africa collapsed as rapidly as it had arisen a bit over a half century earlier."
- Colonial powers were weakened — Britain, for example, was "financially over-extended."
- "In some places this process was **peaceful**, but in many it was **extremely violent**."

## Route 1 — peaceful transfer: Ghana

- **Kwame Nkrumah** was "elected to office in 1951, in the first election in Africa in which universal suffrage was allowed."
- Ghana became independent on **6 March 1957** "after a peaceful independence movement."
- Nkrumah championed **Pan-Africanism** — a "United States of Africa" that would achieve parity with the great powers.

## Route 2 — violent struggle: Kenya

- Mau Mau armed struggle from **1952**; British internment camps and forced resettlement.
- An 11-year conflict described as a civil war before independence in **1963**.

## Route 3 — independence undermined: the Congo

- **Patrice Lumumba**, the elected prime minister, faced the secession of **Katanga**.
- The UN refused to end the secession, calling it an internal matter; Western nations refused aid, so Lumumba turned to the Soviet Union.
- "Lumumba was subsequently killed by Katangese troops with the knowledge and support of the CIA."

## Obstacles African nations faced

| Obstacle | Sourced example |
| --- | --- |
| Settler resistance | Kenya — settler colony where independence came only after violent conflict |
| Colonial repression | Banned parties, internment camps, resettled villages (Kenya) |
| Cold War interference | Congo — superpower rivalry; CIA knowledge of Lumumba's killing |
| Competition for resources | Congo — mineral-rich Katanga's secession |
| Financial and military imbalance | Colonial powers held military dominance even when financially weak |

## Comparing routes

- **Peaceful** where the colonial power accepted elections and nationalist parties (Ghana).
- **Violent** where settlers held land and the colonial power used force (Kenya).
- **Unstable** where Cold War and resource interests intervened (Congo).

## Source note and syllabus gap

- The sources cover Ghana, Kenya and the Congo. They do **not** cover Tanganyika, Uganda or post-independence problems such as one-party states and neocolonialism in detail; those are **not invented here** — use the MoE primary texts.`,
      workedExample: `**Question:** Compare Ghana's and Kenya's routes to independence and explain the difference.

**Solution**

*Step 1 — Ghana.*
Nkrumah was elected in 1951 in Africa's first universal-suffrage election; Ghana became independent peacefully on 6 March 1957.

*Step 2 — Kenya.*
The Mau Mau began armed struggle in 1952; Britain responded with banned parties, internment camps and forced resettlement; independence came in 1963 after an 11-year conflict.

*Step 3 — the difference.*
Ghana's transfer went through elections and a peaceful movement. Kenya was a settler colony where the struggle turned into a civil war and the colonial state used repression.

*Step 4 — the common factor.*
In both cases a weakened, financially over-extended Britain eventually conceded independence.

**Answer:** Ghana won independence peacefully through elections (1957); Kenya through a violent, repressed struggle (1963). Settler interests and colonial force explain the contrast.`,
      quiz: [
        { prompt: "After 1945 the European empire in Africa collapsed", options: ["as rapidly as it had arisen", "very slowly over 300 years", "never", "only in North Africa"], correctIndex: 0, explanation: "It collapsed as rapidly as it had arisen." },
        { prompt: "According to the source, decolonisation was", options: ["peaceful in some places, extremely violent in many", "always peaceful", "always violent", "never completed"], correctIndex: 0, explanation: "Both routes occurred." },
        { prompt: "Nkrumah was elected in 1951 in Africa's first election with", options: ["universal suffrage", "no voters", "only European voters", "a UN veto"], correctIndex: 0, explanation: "It was the first with universal suffrage." },
        { prompt: "Ghana became independent on", options: ["6 March 1957", "12 December 1963", "30 June 1960", "1 January 1945"], correctIndex: 0, explanation: "6 March 1957." },
        { prompt: "Ghana's independence movement is described as", options: ["peaceful", "an 11-year civil war", "a coup", "a UN mandate"], correctIndex: 0, explanation: "It was peaceful." },
        { prompt: "Nkrumah's Pan-African aim was a", options: ["United States of Africa", "return to colonial rule", "European federation", "single tribe state"], correctIndex: 0, explanation: "A United States of Africa." },
        { prompt: "Kenya's road to independence was", options: ["violent", "entirely peaceful", "decided at Berlin", "granted in 1945"], correctIndex: 0, explanation: "It was violent." },
        { prompt: "Kenya's conflict lasted about", options: ["11 years", "11 days", "1 year", "50 years"], correctIndex: 0, explanation: "About 11 years." },
        { prompt: "Who was the elected prime minister of the Congo?", options: ["Patrice Lumumba", "Jomo Kenyatta", "Kwame Nkrumah", "Menelik II"], correctIndex: 0, explanation: "Patrice Lumumba." },
        { prompt: "Which Congolese province seceded?", options: ["Katanga", "Kenya", "Adwa", "Sudan"], correctIndex: 0, explanation: "Katanga." },
        { prompt: "When Western nations refused help, Lumumba turned to", options: ["the Soviet Union", "Italy", "Germany", "Ethiopia"], correctIndex: 0, explanation: "He turned to the Soviet Union." },
        { prompt: "Lumumba was killed by Katangese troops with the knowledge and support of", options: ["the CIA", "the OAU", "Ghana", "Kenya"], correctIndex: 0, explanation: "The source names the CIA." },
        { prompt: "The Congo case illustrates which obstacle?", options: ["Cold War interference", "peaceful elections", "Pan-Africanism", "the Berlin Conference"], correctIndex: 0, explanation: "Superpower rivalry interfered." },
        { prompt: "Britain conceded Kenyan independence partly because it was", options: ["financially over-extended", "defeated at Adwa", "ordered by Germany", "out of soldiers entirely"], correctIndex: 0, explanation: "Britain was financially over-extended." },
        { prompt: "Struggles tended to be more violent where", options: ["settlers held land and colonial force was used", "elections were allowed early", "there were no colonisers", "the UN ruled"], correctIndex: 0, explanation: "Settler colonies like Kenya saw violent struggles." },
        { prompt: "Banned parties and internment camps are examples of", options: ["colonial repression", "peaceful transfer", "Pan-Africanism", "non-alignment"], correctIndex: 0, explanation: "They are colonial repression." },
        { prompt: "Mineral-rich Katanga's secession illustrates", options: ["competition for resources", "universal suffrage", "Pan-African unity", "trusteeship"], correctIndex: 0, explanation: "Resource interests drove instability." },
        { prompt: "A route to independence through elections and nationalist parties is best shown by", options: ["Ghana", "Kenya", "the Congo", "Katanga"], correctIndex: 0, explanation: "Ghana." },
        { prompt: "Even when financially weak, colonial powers often still held", options: ["military dominance", "no soldiers", "African votes", "a UN veto over Africa"], correctIndex: 0, explanation: "In Kenya British forces were militarily dominant." },
        { prompt: "Tanganyika's and Uganda's independence struggles should be taught from", options: ["the MoE primary texts", "invented details", "the Ghana case", "no source"], correctIndex: 0, explanation: "Not in the approved sources; use MoE texts." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Ghana became independent in", options: ["1957", "1963", "1952", "1945"], correctIndex: 0, answerKey: "1957 (6 March). Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State three obstacles African nations faced on the road to independence, with an example of each.", answerKey: "Any three: settler resistance (Kenya); colonial repression — banned parties, internment camps (Kenya); Cold War interference (Congo, Lumumba and the CIA); competition for resources (Katanga secession); military imbalance (British dominance in Kenya). 1 mark per obstacle with example, up to 6.", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain what happened to Patrice Lumumba and what it shows about the struggle for independence.", answerKey: "Lumumba, the Congo's elected prime minister, faced Katanga's secession; the UN refused to end it and Western nations refused aid, so he turned to the Soviet Union. He was killed by Katangese troops with the knowledge and support of the CIA. It shows how Cold War rivalry and resource interests undermined new African states. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why was decolonisation peaceful in Ghana but violent in Kenya?", answerKey: "In Ghana the colonial power allowed elections (Nkrumah elected under universal suffrage in 1951), giving a peaceful constitutional path to independence in 1957. Kenya was a settler colony where an armed struggle (Mau Mau, 1952) met harsh British repression, producing an 11-year civil war before independence in 1963. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Analyse the political struggles African nations faced on the way to independence after 1945.", answerKey: "Award marks for: the rapid post-1945 collapse of empire and weakened colonial powers, 3 marks; the peaceful route — Ghana (Nkrumah, universal suffrage 1951, independence 1957, Pan-Africanism), 5 marks; the violent route — Kenya (Mau Mau, repression, independence 1963), 5 marks; the undermined route — Congo (Lumumba, Katanga, Soviet appeal, CIA), 5 marks; the obstacles — settlers, repression, Cold War, resources, 5 marks; conclusion comparing routes, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — Psychology 2e, 12.7 Prosocial Behavior (https://openstax.org/books/psychology-2e/pages/12-7-prosocial-behavior) and Lifespan Development, 9.2 Puberty, Sexual Behavior, and Sexual Health in Adolescence (https://openstax.org/books/lifespan-development/pages/9-2-puberty-sexual-behavior-and-sexual-health-in-adolescence)
      slug: "sexual-behavior",
      title: "Sexual Behavior",
      objective:
        "By the end of the topic, learners should be able to analyse values and attitudes on sexual behavior — how friendship, attraction and love form, the meaning of affirmative consent, the risks of early sexual activity, and why sexual violence is abuse.",
      estimatedMinutes: 80,
      notes: `## Why this topic sits in a history period

- The syllabus asks learners to recognise that **some African women were victims of sexual exploitation and abuse during the political struggles**, and to examine values and attitudes on sexual behavior (love, friendship, sexual attraction).
- Sexual exploitation is **abuse**, never a normal part of relationships. Respect, consent and equality are the values that protect against it.

## How friendships and relationships form

- **Proximity** — "You are more likely to be friends with people who live in your dorm, your apartment building, or your immediate neighborhood."
- **Similarity** — "We are more likely to become friends or lovers with someone who is similar to us in background, attitudes, and lifestyle."
- **Reciprocity** — "the give and take in relationships."
- **Self-disclosure** — "the sharing of personal information"; it builds intimacy.
- **Matching hypothesis** — people tend to choose partners they see as "their equal in physical attractiveness and social desirability."

## Sternberg's triangular theory of love

- Three components: **intimacy** (closeness, sharing), **passion** (physical attraction), **commitment** (loyalty).

| Type of love | Components |
| --- | --- |
| Liking (friendship) | intimacy only |
| Infatuation | passion only |
| Empty love | commitment only |
| Romantic love | intimacy + passion |
| Companionate love | intimacy + commitment |
| Fatuous love | passion + commitment |
| Consummate love | intimacy + passion + commitment |

- **Friendship** is liking: real closeness without sexual passion.
- **Attraction** alone (infatuation) is not the same as love.

## Consent

- **Affirmative consent** "must be freely given, reversible, informed, enthusiastic, and specific to each interaction."
- Teens and females "with more egalitarian views on gender roles exhibited more positive attitudes toward affirmative consent" — equality and consent go together.
- Anything forced, pressured, traded for money or favours, or done to someone unable to agree is **not consent**.

## Sexual violence

- Sexual violence is widespread: "18 percent of female adolescents and 5 percent of male adolescents have experienced some form of sexual violence."
- It is abuse; responsibility lies with the abuser, never the victim.

## Risks of early sexual activity

- "About 75 percent of teenage pregnancies are unplanned."
- Inconsistent protection raises the risk of **STIs** and pregnancy.
- The share of high school students who had ever had sex fell from **49% (2011) to 30% (2021)** — most teens are not sexually active.

## Values that protect

- Respect, equality, honesty, and the right to say **no** (abstinence is a valid choice).
- Comprehensive sex education has "reduced adolescent childbearing and STI transmission" and improved "prevention of and knowledge of dating violence."

## Source note and syllabus gap

- Values, relationships, consent and sexual violence are sourced (OpenStax, US data). The approved sources do **not** document the sexual exploitation of women during the East African independence struggles specifically; that history is **not invented here** — use the MoE primary texts.`,
      workedExample: `**Question:** Using Sternberg's triangular theory of love and the definition of affirmative consent, analyse this case: Two classmates have been close friends for years. One now feels strong physical attraction and pressures the other to begin a sexual relationship; the other has not agreed.

**Solution**

*Step 1 — classify the friendship.*
Years of closeness and sharing without passion is intimacy only — Sternberg's "liking", i.e. friendship.

*Step 2 — classify the new feeling.*
Strong physical attraction alone is passion only — "infatuation", which is not the same as love.

*Step 3 — apply consent.*
Affirmative consent must be freely given, reversible, informed, enthusiastic and specific. Pressure means consent is not freely given; silence or lack of agreement is not consent.

*Step 4 — the values judgement.*
Respect and equality require the attracted classmate to accept "no" and stop the pressure. Continuing would move toward coercion, which is a form of sexual violence.

**Answer:** The relationship is liking (friendship) and the new feeling is infatuation. Without freely given, enthusiastic agreement there is no consent, so the pressure must stop.`,
      quiz: [
        { prompt: "According to the source, the most likely friends are people who", options: ["live or study near us", "live far away", "we never meet", "are complete strangers"], correctIndex: 0, explanation: "Proximity drives friendship." },
        { prompt: "We tend to befriend people similar to us in", options: ["background, attitudes and lifestyle", "height only", "shoe size", "nothing at all"], correctIndex: 0, explanation: "Similarity in background, attitudes and lifestyle." },
        { prompt: "'Reciprocity' in relationships means", options: ["the give and take in relationships", "never sharing", "one person controlling the other", "physical attraction only"], correctIndex: 0, explanation: "Reciprocity is give and take." },
        { prompt: "Self-disclosure is", options: ["the sharing of personal information", "hiding feelings", "physical attraction", "a legal contract"], correctIndex: 0, explanation: "Sharing personal information builds intimacy." },
        { prompt: "The matching hypothesis says people choose partners they see as their", options: ["equal in attractiveness and social desirability", "opposite in every way", "teacher", "parent"], correctIndex: 0, explanation: "People pick perceived equals." },
        { prompt: "Sternberg's three components of love are intimacy, passion and", options: ["commitment", "money", "jealousy", "proximity"], correctIndex: 0, explanation: "Commitment." },
        { prompt: "Intimacy only is called", options: ["liking", "infatuation", "empty love", "consummate love"], correctIndex: 0, explanation: "Liking — friendship." },
        { prompt: "Passion only is called", options: ["infatuation", "liking", "companionate love", "empty love"], correctIndex: 0, explanation: "Infatuation." },
        { prompt: "Commitment only is called", options: ["empty love", "romantic love", "liking", "infatuation"], correctIndex: 0, explanation: "Empty love." },
        { prompt: "Intimacy plus commitment is", options: ["companionate love", "fatuous love", "infatuation", "empty love"], correctIndex: 0, explanation: "Companionate love." },
        { prompt: "Love with all three components is", options: ["consummate love", "romantic love", "liking", "fatuous love"], correctIndex: 0, explanation: "Consummate love." },
        { prompt: "Affirmative consent must be freely given, reversible, informed, enthusiastic and", options: ["specific to each interaction", "permanent", "given once for life", "assumed"], correctIndex: 0, explanation: "Specific to each interaction." },
        { prompt: "Consent that is 'reversible' means a person", options: ["can change their mind at any time", "can never say no later", "must agree forever", "loses their rights"], correctIndex: 0, explanation: "Consent can be withdrawn." },
        { prompt: "Agreement obtained through pressure or payment is", options: ["not consent", "full consent", "enthusiastic consent", "legal in all cases"], correctIndex: 0, explanation: "Pressured agreement is not freely given." },
        { prompt: "Teens with more egalitarian views on gender roles showed", options: ["more positive attitudes toward consent", "less respect for consent", "no attitudes", "more violence"], correctIndex: 0, explanation: "Equality links to positive consent attitudes." },
        { prompt: "What percentage of female adolescents reported some form of sexual violence?", options: ["18 percent", "1 percent", "75 percent", "50 percent"], correctIndex: 0, explanation: "18 percent." },
        { prompt: "About what share of teenage pregnancies are unplanned?", options: ["75 percent", "5 percent", "25 percent", "100 percent"], correctIndex: 0, explanation: "About 75 percent." },
        { prompt: "Between 2011 and 2021, the share of high school students who had ever had sex", options: ["fell from 49% to 30%", "rose from 30% to 49%", "stayed at 75%", "fell to 0%"], correctIndex: 0, explanation: "It dropped from 49% to 30%." },
        { prompt: "Comprehensive sex education has been shown to", options: ["reduce teen childbearing and STI transmission", "increase STIs", "have no effect", "increase dating violence"], correctIndex: 0, explanation: "It reduced childbearing and STI transmission." },
        { prompt: "Sexual exploitation of women during political struggles should be understood as", options: ["abuse, with responsibility on the abuser", "a normal part of war", "the victim's fault", "a form of consent"], correctIndex: 0, explanation: "It is abuse; the abuser is responsible." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name and explain three factors that influence how friendships and relationships form.", answerKey: "Any three: proximity — we befriend people we are near; similarity — in background, attitudes and lifestyle; reciprocity — give and take; self-disclosure — sharing personal information builds intimacy; matching hypothesis — choosing partners we see as equals. 1 mark each for factor plus explanation, up to 3; 1 extra mark for clear explanation.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In Sternberg's theory, love combining intimacy and commitment but not passion is", options: ["companionate love", "infatuation", "fatuous love", "empty love"], correctIndex: 0, answerKey: "Companionate love. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the five qualities of affirmative consent and explain why pressure cancels consent.", answerKey: "Consent must be freely given, reversible, informed, enthusiastic and specific to each interaction. Pressure, threats or payment mean agreement is not freely given, so there is no consent. 1 mark per quality up to 4, plus 1 for the explanation.", marks: 5 },
        { type: "SHORT_ANSWER", prompt: "Give two risks of early sexual activity and two values that protect young people.", answerKey: "Risks (any two): unplanned pregnancy (about 75% of teen pregnancies are unplanned); STIs from inconsistent protection; sexual violence or coercion. Values (any two): respect; equality; honesty; the right to say no / abstinence; insisting on consent. 1 mark each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss values and attitudes on sexual behavior, explaining how friendship, attraction and love differ, what consent means, and why sexual exploitation — including that suffered by some women during political struggles — must be recognised as abuse.", answerKey: "Award marks for: how relationships form — proximity, similarity, reciprocity, self-disclosure, 4 marks; Sternberg's three components and the difference between liking (friendship), infatuation (attraction) and consummate love, 6 marks; affirmative consent (freely given, reversible, informed, enthusiastic, specific) and the link with gender equality, 5 marks; sexual violence data and risks of early sexual activity, 4 marks; recognising exploitation (including during political struggles) as abuse with responsibility on the abuser, and protective values, 4 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
