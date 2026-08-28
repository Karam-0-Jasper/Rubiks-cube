import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 12,
// Semester One, Period I: Liberian History — The First Liberian Civil War
// (1989–1997). The MoE CONTENTS list has four top-level items, each rebuilt
// here as its own topic: (1) the Liberian Civil War (causes, major players,
// why it lasted and its destruction); (2) the Role of ECOWAS; (3) the Interim
// Government of National Unity and the transitional councils; (4) the
// post-war Elections.
//
// SOURCING NOTE / SYLLABUS GAP: the approved published education sources
// (OpenStax, CK-12, LibreTexts) do NOT carry a dedicated account of the
// Liberian Civil War, ECOWAS/ECOMOG, the Kpormakpor/Sankawulo/Ruth Perry
// councils, or individual Liberian election results. Per AGENTS.md, none of
// those Liberia-specific facts are invented here. Each topic below is built
// from the CLOSEST covered themes in OpenStax World History Volume 2 —
// post-Cold War instability and civil conflict, the resource curse, arbitrary
// colonial borders and ethnic conflict, regional organisations and
// peacekeeping, post-conflict transition and universal-suffrage elections —
// and the Liberia-specific gap is flagged in a "Source note and syllabus gap"
// section inside each topic.
export const historyG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Liberian History: The First Liberian Civil War (1989–1997)",
  summary:
    "Period I of the MoE Grade 12 History syllabus. Learners study the First Liberian Civil War — its causes, major players, length and destruction; the role of ECOWAS; the Interim Government of National Unity and the transitional councils; and the post-war elections. Because the approved published sources do not treat these Liberia-specific events directly, each topic is taught through the closest covered themes in OpenStax World History (post-Cold War civil conflict, the resource curse, ethnic conflict from arbitrary colonial borders, regional peacekeeping and post-conflict elections), and the Liberia-specific gaps are flagged for the teacher.",
  topics: [
    {
      // source: OpenStax — World History Volume 2, 15.4 Ongoing Problems and Solutions (https://openstax.org/books/world-history-volume-2/pages/15-4-ongoing-problems-and-solutions) and 9.3 Colonial Empires (https://openstax.org/books/world-history-volume-2/pages/9-3-colonial-empires)
      slug: "the-liberian-civil-war-causes-and-destruction",
      title: "The Liberian Civil War: Causes, Major Players and Destruction",
      objective:
        "By the end of the topic, learners should be able to explain the general causes, actors and consequences of a modern African civil war, using the closest sourced themes of post-Cold War instability, the resource curse and arbitrary colonial borders, while recognising which Liberia-specific facts lie outside the approved sources.",
      estimatedMinutes: 110,
      notes: `## Why modern civil wars break out (sourced framework)

- After the Soviet Union dissolved in **1991**, many leaders expected a new era of liberal democracy, but **persistent instability and conflict** followed instead of lasting peace.
- Two sourced causes of conflict apply to many African states:
- **Arbitrary colonial borders.** During the **Scramble for Africa** and the **Berlin Conference (1884–1885)**, European powers drew borders "to benefit imperialist powers," often separating one ethnic group into different countries and forcing hostile groups into the same country. The textbook states that "violent ethnic conflict has been a frequent result."
- **The resource curse.** Resource-rich states can paradoxically fall into **authoritarianism and conflict** as factions fight to control valuable exports. In **Angola**, oil made up "more than 92 percent of its exports," yet "41 percent" of the people lived below the poverty line in **2019**.

## The human cost of civil conflict (sourced examples)

- Modern African civil conflicts have produced mass death and human-rights abuses. In **Rwanda (1994)**, genocide killed "nearly 800,000 people" in about four months.
- Armed groups target civilians: in **Nigeria (2014)**, **Boko Haram** kidnapped **276 schoolgirls**.
- Poverty deepens the damage: by **2015**, about **85 percent of the world's extreme poor** lived in Sub-Saharan Africa and South Asia.

## Applying the framework to the First Liberian Civil War

- The First Liberian Civil War is dated by the syllabus to **1989–1997**.
- Using the sourced framework, the general drivers of such a war are: **ethnic and regional divisions** rooted in an unequal state, **competition over resources**, **weak governance** and the **Cold War / post-Cold War regional context**.
- Its general consequences match the sourced pattern: **mass civilian death and displacement**, **destroyed infrastructure**, **collapsed public services** and **deep poverty**.

## Source note and syllabus gap

- The MoE item lists the specific causes, **major players** and the reasons the war "lasted so long," and the "level of destruction." The approved published sources (OpenStax, CK-12, LibreTexts) do **not** provide a dedicated, factual account of the Liberian factions, leaders or timeline.
- Those Liberia-specific facts are therefore **not stated here** and must **not be invented**. Teach the sourced framework above and direct learners to the MoE primary texts (Liberia History Book; History of Africa, Pearson) for the named players and events.`,
      workedExample: `**Question:** Using the sourced themes, explain the general causes and consequences of a modern African civil war such as the First Liberian Civil War (1989–1997).

**Solution**

*Step 1 — long-term structural causes.*
Colonial borders were drawn at the **Berlin Conference (1884–1885)** to suit European powers, splitting ethnic groups and forcing rivals together; the textbook notes "violent ethnic conflict has been a frequent result."

*Step 2 — resource competition.*
The **resource curse** means resource wealth can bring "authoritarianism and conflict," as the Angola example (oil = 92%+ of exports, yet 41% in poverty) illustrates.

*Step 3 — the post-Cold War context.*
After the USSR fell in **1991**, expected stability did not arrive; instability and civil conflict spread.

*Step 4 — consequences.*
Such wars bring mass civilian death (as in Rwanda, 1994), attacks on civilians and displacement, and deepened poverty (85% of the extreme poor in Sub-Saharan Africa/South Asia by 2015).

**Conclusion:** the general causes are unequal, arbitrarily-bordered states, resource competition and weak post-Cold War governance; the consequences are mass death, destruction and poverty. The Liberia-specific names and events are left to the MoE primary texts and are not invented here.`,
      quiz: [
        { prompt: "The Soviet Union dissolved in", options: ["1991", "1945", "1963", "2001"], correctIndex: 0, explanation: "The USSR dissolved in 1991, ending the Cold War." },
        { prompt: "The Berlin Conference that partitioned Africa was held in", options: ["1884–1885", "1945–1946", "1989–1990", "1963–1964"], correctIndex: 0, explanation: "European powers partitioned Africa at the Berlin Conference of 1884–1885." },
        { prompt: "According to the source, colonial borders were drawn to benefit", options: ["imperialist powers", "local ethnic groups", "the United Nations", "African kingdoms"], correctIndex: 0, explanation: "Borders were charted to benefit imperialist powers, not Africans." },
        { prompt: "A frequent result of arbitrary colonial borders has been", options: ["violent ethnic conflict", "lasting peace", "rapid industrialisation", "population decline"], correctIndex: 0, explanation: "The text says violent ethnic conflict has been a frequent result." },
        { prompt: "The 'resource curse' describes resource-rich nations that experience", options: ["authoritarianism and conflict", "guaranteed prosperity", "no government", "instant democracy"], correctIndex: 0, explanation: "Resource wealth can paradoxically bring authoritarianism and conflict." },
        { prompt: "In Angola, oil made up more than what share of exports?", options: ["92 percent", "20 percent", "50 percent", "10 percent"], correctIndex: 0, explanation: "Oil was more than 92 percent of Angola's exports." },
        { prompt: "Despite its oil wealth, in 2019 what share of Angolans lived below the poverty line?", options: ["41 percent", "5 percent", "92 percent", "100 percent"], correctIndex: 0, explanation: "41 percent lived below the poverty line in 2019." },
        { prompt: "The Rwandan genocide of 1994 killed nearly", options: ["800,000 people", "8,000 people", "80 people", "8 million people"], correctIndex: 0, explanation: "Nearly 800,000 were killed in about four months." },
        { prompt: "The First Liberian Civil War is dated by the syllabus to", options: ["1989–1997", "1847–1848", "1945–1960", "2001–2011"], correctIndex: 0, explanation: "The syllabus period is 1989–1997." },
        { prompt: "In 2014 Boko Haram in Nigeria kidnapped", options: ["276 schoolgirls", "276 soldiers", "800,000 people", "13 settlers"], correctIndex: 0, explanation: "Boko Haram kidnapped 276 schoolgirls in 2014." },
        { prompt: "By 2015, about 85 percent of the world's extreme poor lived in", options: ["Sub-Saharan Africa and South Asia", "Western Europe", "North America", "Australia"], correctIndex: 0, explanation: "85 percent of the extreme poor lived in Sub-Saharan Africa and South Asia." },
        { prompt: "A common consequence of civil war matching the sourced pattern is", options: ["mass civilian death and displacement", "falling poverty", "stronger public services", "rising life expectancy"], correctIndex: 0, explanation: "Civil wars bring death, displacement and collapsed services." },
        { prompt: "Which is a sourced structural cause of many African conflicts?", options: ["arbitrary borders splitting or combining ethnic groups", "too few natural resources everywhere", "the absence of any government in 1991", "European withdrawal before colonisation"], correctIndex: 0, explanation: "Arbitrary colonial borders are a sourced structural cause." },
        { prompt: "After 1991, many Western leaders expected", options: ["a new era of liberal democracy", "the return of colonial empires", "a world without nations", "immediate world government"], correctIndex: 0, explanation: "They anticipated liberal democracy, but instability persisted." },
        { prompt: "The 'level of destruction' of a civil war is best measured by", options: ["deaths, displacement and ruined infrastructure", "the number of political parties", "the length of the constitution", "the size of the capital city"], correctIndex: 0, explanation: "Destruction is measured in human and material loss." },
        { prompt: "Which claim about the Liberian factions is supported by the approved sources?", options: ["None — the sources do not name the Liberian factions", "All faction leaders are listed in OpenStax", "CK-12 gives the full timeline", "LibreTexts names each warlord"], correctIndex: 0, explanation: "The approved sources do not cover the specific Liberian actors; that gap is flagged." },
        { prompt: "The 'resource curse' helps explain why fighters may struggle to control", options: ["valuable export resources", "school textbooks", "the calendar", "foreign languages"], correctIndex: 0, explanation: "Control of lucrative resources can drive and fund conflict." },
        { prompt: "Genocide in Rwanda occurred in", options: ["1994", "1884", "1948", "2015"], correctIndex: 0, explanation: "The Rwandan genocide took place in 1994." },
        { prompt: "The end of the Cold War is marked by the collapse of the", options: ["Soviet Union in 1991", "Roman Empire in 476", "Berlin Conference in 1885", "United Nations in 1945"], correctIndex: 0, explanation: "The Cold War ended with the USSR's collapse in 1991." },
        { prompt: "For the Liberia-specific causes and players, learners should consult", options: ["the MoE primary texts, not invented facts", "any social-media post", "the model's own memory", "no source at all"], correctIndex: 0, explanation: "Liberia-specific detail belongs to the MoE primary texts and is not invented." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how arbitrary colonial borders can be a long-term cause of civil conflict in Africa.", answerKey: "At the Berlin Conference (1884–1885) European powers drew borders to benefit imperialist powers, often separating members of one ethnic group into different countries and forcing hostile groups into the same country; the source states violent ethnic conflict has been a frequent result. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What is the 'resource curse', and how does the Angola example illustrate it?", answerKey: "The resource curse is when resource-rich nations paradoxically experience authoritarianism and conflict rather than shared prosperity. Angola's oil was more than 92 percent of its exports, yet 41 percent of its people lived below the poverty line in 2019. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The First Liberian Civil War is dated by the syllabus to", options: ["1989–1997", "1847–1857", "1945–1960", "2005–2017"], correctIndex: 0, answerKey: "The syllabus period is 1989–1997. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two general consequences of a modern civil war, with a sourced example of each.", answerKey: "Any two: mass civilian death (e.g. Rwanda 1994, nearly 800,000 killed); attacks on/abduction of civilians (e.g. Boko Haram's 276 schoolgirls, 2014); deepened poverty (85% of the extreme poor in Sub-Saharan Africa/South Asia by 2015); displacement and ruined infrastructure. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Using the closest sourced themes, discuss the general causes and consequences of a modern African civil war such as the First Liberian Civil War, and note the limits of the available sources.", answerKey: "Award marks for: structural causes — arbitrary colonial borders and ethnic conflict (Berlin Conference), 6 marks; resource competition and the resource curse (Angola), 5 marks; the post-Cold War context after 1991, 4 marks; consequences — mass death, displacement, poverty (Rwanda, Boko Haram, Sub-Saharan poverty), 6 marks; explicit note that the approved sources do not name the Liberian factions/leaders and that those must come from the MoE primary texts rather than be invented, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 15.4 Ongoing Problems and Solutions (https://openstax.org/books/world-history-volume-2/pages/15-4-ongoing-problems-and-solutions) and 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization)
      slug: "the-role-of-ecowas-regional-peacekeeping",
      title: "The Role of ECOWAS: Regional Organisations and Peacekeeping",
      objective:
        "By the end of the topic, learners should be able to explain, from the closest sourced themes, why states form regional organisations and how the international community and regional bodies respond to conflict, while recognising that ECOWAS-specific detail lies outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## Why nations cooperate in regional and international bodies (sourced framework)

- After the Second World War and through the Cold War, states built **alliances and organisations** to pursue shared security and recovery.
- Sourced examples of cooperation for security: **NATO (1949)**, a defensive alliance of the U.S., Canada and Western European nations, and the **Warsaw Pact (1955)** on the Soviet side.
- The **Marshall Plan (European Recovery Program, 1947)** showed cooperation for **economic recovery**, distributing about **12 billion dollars** to rebuild Western Europe.
- The lesson is general: when a threat crosses borders, states pool resources through **regional or international organisations**.

## The international response to conflict (sourced examples)

- The international community and regional actors intervene in conflicts, though imperfectly. In the **Congo crisis (from 1960)**, Prime Minister **Patrice Lumumba** appealed to the **United Nations** and the U.S. for help; both refused, and the crisis deepened.
- Modern conflicts (Rwanda 1994, the Global South's civil wars) show both the **need for** and the **difficulty of** effective outside intervention.

## Applying the framework to ECOWAS

- **ECOWAS** (the Economic Community of West African States) is a **West African regional organisation**. Using the sourced framework, its general purposes are **economic cooperation** and **collective security / peacekeeping** among neighbouring states.
- Its intervention in a member state's civil war fits the sourced pattern of **regional bodies acting where a conflict threatens the whole region**, much as NATO and the UN acted in their spheres.

## Source note and syllabus gap

- The MoE item asks for the specific **role of ECOWAS** and its peace-enforcement arm in the Liberian war. The approved published sources (OpenStax, CK-12, LibreTexts) do **not** describe ECOWAS, ECOMOG, or their Liberian operations.
- Those facts are **not stated or invented here**. Teach the sourced framework of regional cooperation and international response, and use the MoE primary texts for the ECOWAS/ECOMOG detail.`,
      workedExample: `**Question:** Using the sourced themes, explain why West African states would create and use a regional organisation such as ECOWAS to respond to a civil war.

**Solution**

*Step 1 — states cooperate against shared threats.*
The sources show states forming organisations for security (NATO, 1949; the Warsaw Pact, 1955) and for recovery (the Marshall Plan, 1947, about 12 billion dollars).

*Step 2 — conflict crosses borders.*
A civil war produces refugees, arms flows and instability that spill into neighbouring states, giving the whole region a stake in ending it.

*Step 3 — the international response can be uneven.*
When Lumumba appealed to the UN and the U.S. in the Congo (1960), both refused; regional bodies may step in where global actors will not.

*Step 4 — apply to ECOWAS.*
As a West African regional organisation, ECOWAS pools members' resources for economic cooperation and collective security, and can intervene when a member's war threatens the region.

**Conclusion:** regional organisations exist because cross-border threats are best met by pooled regional action; ECOWAS's specific Liberian role must be taken from the MoE primary texts, not invented.`,
      quiz: [
        { prompt: "NATO, a defensive alliance, was established in", options: ["1949", "1885", "1991", "1963"], correctIndex: 0, explanation: "NATO was founded in 1949." },
        { prompt: "The Soviet-side military alliance formed in 1955 was the", options: ["Warsaw Pact", "Marshall Plan", "Delian League", "African Union"], correctIndex: 0, explanation: "The Warsaw Pact answered NATO in 1955." },
        { prompt: "The Marshall Plan (1947) distributed about how much to rebuild Western Europe?", options: ["12 billion dollars", "400 million dollars", "1 trillion dollars", "12 million dollars"], correctIndex: 0, explanation: "About 12 billion dollars under the European Recovery Program." },
        { prompt: "The Marshall Plan is a sourced example of cooperation for", options: ["economic recovery", "space exploration", "colonisation", "religious conversion"], correctIndex: 0, explanation: "It aimed at Western Europe's economic recovery." },
        { prompt: "ECOWAS stands for the Economic Community of", options: ["West African States", "Central Asian States", "World Atlantic States", "Western European States"], correctIndex: 0, explanation: "ECOWAS = Economic Community of West African States." },
        { prompt: "The general purposes of a regional organisation like ECOWAS are", options: ["economic cooperation and collective security", "conquest and colonisation", "banning all trade", "abolishing all governments"], correctIndex: 0, explanation: "Regional bodies pool resources for cooperation and security." },
        { prompt: "In the Congo crisis, Patrice Lumumba appealed for help to", options: ["the United Nations and the U.S.", "NATO and the Warsaw Pact", "ECOWAS", "the Berlin Conference"], correctIndex: 0, explanation: "He appealed to the UN and the U.S.; both refused." },
        { prompt: "When the UN and U.S. refused Lumumba, the crisis", options: ["deepened", "ended peacefully at once", "never happened", "was solved by NATO"], correctIndex: 0, explanation: "The refusal deepened the Congo crisis." },
        { prompt: "A civil war threatens neighbouring states mainly through", options: ["refugees, arms flows and instability", "improved trade only", "lower taxes", "better schools"], correctIndex: 0, explanation: "Cross-border spillovers give the region a stake in peace." },
        { prompt: "The sourced reason states form alliances is to", options: ["meet shared threats by pooling resources", "avoid all contact", "increase isolation", "end diplomacy"], correctIndex: 0, explanation: "Alliances pool resources against shared threats." },
        { prompt: "Which pair are both defensive/collective-security bodies?", options: ["NATO and the Warsaw Pact", "the Marshall Plan and the resource curse", "the Berlin Conference and apartheid", "the iron curtain and the Fourteen Points"], correctIndex: 0, explanation: "NATO and the Warsaw Pact were opposing security alliances." },
        { prompt: "The approved sources describe ECOMOG's Liberian operations", options: ["not at all — this gap is flagged", "in full detail", "only in CK-12", "only in OpenStax Volume 1"], correctIndex: 0, explanation: "The sources do not cover ECOMOG; the gap is flagged." },
        { prompt: "Regional peacekeeping fits the pattern that bodies act when a conflict threatens", options: ["the whole region", "only one city", "no one", "another continent only"], correctIndex: 0, explanation: "Regional bodies act on region-wide threats." },
        { prompt: "The Congo crisis that tested international response began in", options: ["1960", "1885", "1997", "1945"], correctIndex: 0, explanation: "The Congo became independent in 1960 and crisis followed." },
        { prompt: "For the specific role of ECOWAS in Liberia, learners should use", options: ["the MoE primary texts", "invented facts", "the model's own knowledge", "no source"], correctIndex: 0, explanation: "ECOWAS-specific detail belongs to the MoE primary texts." },
        { prompt: "An economic community's first named goal is usually", options: ["economic cooperation among members", "military conquest of members", "closing all borders forever", "ending its own existence"], correctIndex: 0, explanation: "Economic cooperation is the founding goal of such communities." },
        { prompt: "The lesson from NATO/Warsaw Pact/Marshall Plan is that cooperation can serve", options: ["both security and economic goals", "only warfare", "only sport", "no purpose"], correctIndex: 0, explanation: "Cooperation served security and economic recovery." },
        { prompt: "International intervention in conflict is best described by the sources as", options: ["real but often uneven or refused", "always immediate and total", "never attempted", "purely military"], correctIndex: 0, explanation: "The Congo case shows intervention can be refused or uneven." },
        { prompt: "ECOWAS is a ___ organisation.", options: ["West African regional", "global United Nations", "European Cold War", "South American trade"], correctIndex: 0, explanation: "ECOWAS is a West African regional body." },
        { prompt: "The strongest justification for regional peacekeeping is that", options: ["neighbours share the costs of a nearby war", "wars have no effect on neighbours", "distant states care most", "peace needs no organisation"], correctIndex: 0, explanation: "Neighbours bear spillover costs, so they act together." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Give two sourced examples of states cooperating through organisations, and say what each was for.", answerKey: "Any two: NATO (1949) — a defensive military alliance of the U.S., Canada and Western Europe; the Warsaw Pact (1955) — the Soviet-side military alliance; the Marshall Plan/European Recovery Program (1947, about 12 billion dollars) — economic recovery of Western Europe. Award 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why does a civil war in one country concern its neighbours?", answerKey: "A civil war sends refugees across borders, spreads arms and instability, and disrupts regional trade and security, so neighbouring states have a direct stake in ending it — the basis for regional peacekeeping. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "ECOWAS is the Economic Community of", options: ["West African States", "Western European States", "World Atlantic States", "Central African States"], correctIndex: 0, answerKey: "Economic Community of West African States. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What does the Congo crisis (1960) show about international responses to conflict?", answerKey: "Lumumba appealed to the United Nations and the U.S. for help; both refused, and the crisis deepened, showing that international intervention is real but often uneven, delayed or refused — one reason regional bodies may step in. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Using the closest sourced themes, explain why West African states created ECOWAS and how a regional organisation can respond to a civil war, noting the limits of the sources.", answerKey: "Award marks for: the general logic of cooperation for security and recovery (NATO, Warsaw Pact, Marshall Plan), 6 marks; how conflict spills across borders and gives neighbours a stake, 5 marks; the uneven international response (Congo/Lumumba, UN refusal), 4 marks; applying this to ECOWAS's purposes of economic cooperation and collective security, 5 marks; an explicit statement that ECOWAS/ECOMOG's Liberian role is not in the approved sources and must come from the MoE primary texts, 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization) and 15.4 Ongoing Problems and Solutions (https://openstax.org/books/world-history-volume-2/pages/15-4-ongoing-problems-and-solutions)
      slug: "interim-government-of-national-unity",
      title: "The Interim Government of National Unity and Post-Conflict Transition",
      objective:
        "By the end of the topic, learners should be able to explain, from the closest sourced themes, how societies rebuild governance after conflict through transitional arrangements, while recognising that the specific Liberian transitional councils lie outside the approved sources.",
      estimatedMinutes: 85,
      notes: `## Rebuilding the state after conflict (sourced framework)

- After a war or the fall of a regime, a society must **rebuild government and public order**. The sources show two general routes:
- **Transition toward broad participation.** In the **Gold Coast (Ghana)**, self-government advanced from a limited 1946 constitution through elections under **universal suffrage**, with **Kwame Nkrumah** becoming prime minister and full independence on **6 March 1957**.
- **Negotiated, phased handovers.** Colonial and post-conflict transitions were often **staged** — interim constitutions and arrangements preceding a final settlement (for example, Belgium's proposed thirty-year timetable for the Congo, which nationalists rejected in favour of immediate independence in **1960**).

## The purpose of an interim (transitional) government

- An **interim government** is a temporary authority meant to **bridge** the gap between conflict/collapse and a permanent, elected government.
- Its general tasks: **restore order and basic services**, **prepare and hold elections**, and **include rival groups** so the settlement is seen as legitimate ("national unity").
- The alternative to an inclusive transition is renewed conflict; the sources show that where settlements excluded or failed groups (e.g. post-independence Congo), instability returned.

## Applying the framework to Liberia's transition

- The MoE syllabus places an **Interim Government of National Unity** between the war and the restoration of elected government, followed by a series of transitional councils.
- Using the sourced framework, such a body would exist to **stop the fighting, unite rival factions and organise elections**, matching the general pattern of post-conflict transition.

## Source note and syllabus gap

- The MoE lists specific bodies — the **Liberian Transitional Governments**, the **Kpormakpor Council**, the **Sankawulo Council** and the **Ruth Perry Council**. The approved published sources do **not** mention any of these.
- These names and their records are therefore **not stated or invented here**. Teach the general theory of post-conflict transition and use the MoE primary texts for the specific councils.`,
      workedExample: `**Question:** Using the sourced themes, explain the purpose of an interim government of national unity after a civil war.

**Solution**

*Step 1 — the problem.*
War destroys government and order; a permanent, freely-elected government cannot be created overnight.

*Step 2 — the bridge.*
An interim government is a temporary authority to bridge that gap — restoring order, basic services and preparing elections.

*Step 3 — why "national unity".*
Including rival groups makes the settlement legitimate; the Ghana path to independence (elections under universal suffrage, Nkrumah, 1957) shows the goal of broad participation, while excluded settlements (post-1960 Congo) bred renewed conflict.

*Step 4 — apply to Liberia.*
A Liberian Interim Government of National Unity would exist to end the fighting, unite factions and hold elections; its specific councils belong to the MoE primary texts.

**Conclusion:** an interim government of national unity is a temporary, inclusive bridge from war to an elected government; the named Liberian councils are not in the approved sources and are not invented here.`,
      quiz: [
        { prompt: "An interim (transitional) government is best described as", options: ["a temporary authority bridging conflict and elected government", "a permanent monarchy", "a foreign occupation force", "a colonial governor's office"], correctIndex: 0, explanation: "It bridges the gap to a permanent, elected government." },
        { prompt: "Ghana (the Gold Coast) achieved full independence on", options: ["6 March 1957", "30 June 1960", "12 March 1947", "8 May 1945"], correctIndex: 0, explanation: "Ghana became independent on 6 March 1957." },
        { prompt: "Ghana's prime minister at independence was", options: ["Kwame Nkrumah", "Jomo Kenyatta", "Patrice Lumumba", "Nelson Mandela"], correctIndex: 0, explanation: "Nkrumah led Ghana to independence." },
        { prompt: "Nkrumah won office through elections held under", options: ["universal suffrage", "a colonial appointment only", "military decree", "no vote at all"], correctIndex: 0, explanation: "He won under universal suffrage." },
        { prompt: "A key task of an interim government is to", options: ["prepare and hold elections", "declare permanent one-party rule", "abolish all voting", "restart the war"], correctIndex: 0, explanation: "Organising elections is a central transitional task." },
        { prompt: "'National unity' in a transitional government means", options: ["including rival groups for legitimacy", "excluding all opposition", "handing power to one faction", "ending the state"], correctIndex: 0, explanation: "Inclusion of rivals gives the settlement legitimacy." },
        { prompt: "The Belgian Congo became independent in", options: ["1960", "1957", "1885", "1994"], correctIndex: 0, explanation: "Congo independence came on 30 June 1960." },
        { prompt: "Belgium first proposed a Congo independence timetable of", options: ["thirty years", "one week", "two hundred years", "no timetable"], correctIndex: 0, explanation: "Belgium proposed thirty years; nationalists demanded immediate independence." },
        { prompt: "Where post-conflict settlements exclude or fail groups, the sources show", options: ["instability tends to return", "permanent peace always follows", "the economy always booms", "colonisation restarts"], correctIndex: 0, explanation: "Exclusion (e.g. post-1960 Congo) brought renewed instability." },
        { prompt: "Colonial and post-conflict transitions were often", options: ["staged, with interim arrangements before a final settlement", "instant and total", "never attempted", "decided by lottery"], correctIndex: 0, explanation: "Transitions were commonly phased." },
        { prompt: "The alternative to an inclusive transition is usually", options: ["renewed conflict", "guaranteed prosperity", "world government", "colonisation"], correctIndex: 0, explanation: "Excluding rivals risks a return to war." },
        { prompt: "The Kpormakpor, Sankawulo and Ruth Perry councils are covered by the approved sources", options: ["no — this gap is flagged", "yes, fully", "only in OpenStax", "only in CK-12"], correctIndex: 0, explanation: "The approved sources do not mention these councils." },
        { prompt: "A transitional government mainly restores", options: ["order, basic services and elections", "colonial rule", "monarchy", "empire"], correctIndex: 0, explanation: "It restores order and services and prepares elections." },
        { prompt: "The Ghana example illustrates transition toward", options: ["broad participation via elections", "military dictatorship", "foreign annexation", "abolition of government"], correctIndex: 0, explanation: "Ghana moved to elections under universal suffrage." },
        { prompt: "For the specific Liberian transitional councils, learners should consult", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Council-specific detail belongs to the MoE primary texts." },
        { prompt: "The word 'interim' means", options: ["temporary / for the time being", "permanent", "foreign", "military"], correctIndex: 0, explanation: "Interim means temporary." },
        { prompt: "Congolese nationalists rejected Belgium's timetable in favour of", options: ["immediate independence", "a fifty-year plan", "continued colonial rule", "partition"], correctIndex: 0, explanation: "They demanded immediate independence in 1960." },
        { prompt: "Legitimacy of a peace settlement depends largely on", options: ["including former rivals in governance", "banning elections", "one-faction control", "foreign monarchy"], correctIndex: 0, explanation: "Inclusion builds legitimacy and durable peace." },
        { prompt: "An interim government of national unity is a bridge from war to", options: ["an elected permanent government", "renewed war", "colonisation", "monarchy"], correctIndex: 0, explanation: "It bridges to a permanent, elected government." },
        { prompt: "The safest way to handle Liberia-specific council facts is to", options: ["cite the MoE primary texts and not invent them", "guess plausibly", "copy from memory", "omit the topic entirely"], correctIndex: 0, explanation: "Cite the MoE texts; do not invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an interim government of national unity and state its main tasks.", answerKey: "It is a temporary authority that bridges the gap between conflict/collapse and a permanent, elected government. Its main tasks are to restore order and basic services, include rival groups for legitimacy (national unity), and prepare and hold elections. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How does the Ghana example illustrate a transition toward broad participation?", answerKey: "The Gold Coast moved from a limited 1946 constitution to elections under universal suffrage; Kwame Nkrumah won and became prime minister, and Ghana achieved full independence on 6 March 1957 — a transition toward broad, elected participation. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Belgian Congo became independent in", options: ["1960", "1957", "1994", "1885"], correctIndex: 0, answerKey: "Congo independence came in 1960. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why can excluding rival groups from a transition lead back to conflict?", answerKey: "Excluded groups see the settlement as illegitimate and may take up arms again; the sources show that where post-independence settlements excluded or failed groups (e.g. post-1960 Congo), instability returned. Inclusion ('national unity') is therefore central to durable peace. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss, from the closest sourced themes, how a society rebuilds governance after civil war through an interim government of national unity, and note the limits of the sources.", answerKey: "Award marks for: the problem of destroyed governance and the bridging role of an interim government, 5 marks; its tasks — order, services, inclusion, elections, 6 marks; sourced illustrations of transition (Ghana's phased path to 1957; Congo's contested transition in 1960), 6 marks; the risk of renewed conflict when groups are excluded, 4 marks; an explicit statement that the Kpormakpor/Sankawulo/Ruth Perry councils are not in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization)
      slug: "post-conflict-elections",
      title: "Post-Conflict Elections and Universal Suffrage",
      objective:
        "By the end of the topic, learners should be able to explain, from the closest sourced themes, the role of elections under universal suffrage in ending conflict and legitimising government, while recognising that the specific Liberian election results lie outside the approved sources.",
      estimatedMinutes: 85,
      notes: `## Elections as the endpoint of transition (sourced framework)

- The general purpose of a post-conflict election is to give a country a **legitimate, freely-chosen government**, replacing rule by force.
- **Universal suffrage** — the right of all adult citizens to vote — is the sourced standard of a fully democratic election.
- Two sourced milestones of universal-suffrage elections in Africa:
- **Ghana:** despite being imprisoned, **Kwame Nkrumah** won election **under universal suffrage** and became prime minister, leading to independence on **6 March 1957**.
- **South Africa:** after the end of apartheid (officially **1991**), the country held its **first universal-suffrage elections in 1994**, and **Nelson Mandela** was elected president.

## What makes a post-conflict election meaningful

- **Inclusion:** all adult citizens, formerly-warring groups included, can vote — the essence of universal suffrage.
- **Legitimacy:** the winner governs by the people's choice, not by arms.
- **Peaceful transfer of power:** the losing side accepts the result, which is how elections replace war as the way power changes hands.
- Where these conditions fail, elections can instead trigger renewed conflict.

## Applying the framework to Liberia's elections

- The MoE lists post-war Liberian elections at **1997, 2000, 2011 and 2017**.
- Using the sourced framework, the general significance of each is the same: an attempt to give the country a **legitimate, elected government** and to consolidate peace after conflict.

## Source note and syllabus gap

- The MoE item asks about specific Liberian elections and (implicitly) their winners and outcomes. The approved published sources do **not** report Liberian election results.
- Those results are therefore **not stated or invented here**. Teach the sourced theory of universal-suffrage, post-conflict elections and use the MoE primary texts and official records for the Liberian results.`,
      workedExample: `**Question:** Using the sourced themes, explain why holding elections under universal suffrage matters after a civil war.

**Solution**

*Step 1 — replacing force with choice.*
After a war, power has been held by arms; an election lets citizens choose a government, giving it legitimacy.

*Step 2 — universal suffrage.*
The democratic standard is that all adult citizens vote. Nkrumah won under universal suffrage in the Gold Coast; South Africa held its first universal-suffrage election in 1994, electing Mandela.

*Step 3 — inclusion and peaceful transfer.*
Including former rivals and accepting the result lets power change hands peacefully rather than by renewed war.

*Step 4 — apply to Liberia.*
Liberia's post-war elections (1997, 2000, 2011, 2017) each aimed to give the country a legitimate, elected government and to consolidate peace; the specific results belong to official records, not to invention.

**Conclusion:** universal-suffrage elections turn power from something seized by force into something granted by citizens, which is why they are the goal of post-conflict transition.`,
      quiz: [
        { prompt: "Universal suffrage means", options: ["all adult citizens may vote", "only soldiers may vote", "only landowners may vote", "no one may vote"], correctIndex: 0, explanation: "Universal suffrage is the vote for all adult citizens." },
        { prompt: "The main purpose of a post-conflict election is to create a", options: ["legitimate, freely-chosen government", "permanent military rule", "colonial administration", "one-family monarchy"], correctIndex: 0, explanation: "Elections give a legitimate, chosen government." },
        { prompt: "Kwame Nkrumah won election under universal suffrage while", options: ["imprisoned", "in exile abroad", "serving as king", "commanding an army"], correctIndex: 0, explanation: "He won despite being imprisoned." },
        { prompt: "Ghana became independent on", options: ["6 March 1957", "30 June 1960", "27 April 1994", "8 May 1945"], correctIndex: 0, explanation: "Ghana's independence date is 6 March 1957." },
        { prompt: "Apartheid in South Africa officially ended in", options: ["1991", "1948", "1960", "1976"], correctIndex: 0, explanation: "Apartheid officially ended in 1991." },
        { prompt: "South Africa held its first universal-suffrage elections in", options: ["1994", "1957", "1960", "1989"], correctIndex: 0, explanation: "The first universal-suffrage election was in 1994." },
        { prompt: "The president elected in South Africa's 1994 election was", options: ["Nelson Mandela", "Kwame Nkrumah", "Jomo Kenyatta", "Patrice Lumumba"], correctIndex: 0, explanation: "Nelson Mandela was elected president." },
        { prompt: "A 'peaceful transfer of power' means", options: ["the losing side accepts the result", "the winner seizes power by force", "the army cancels the vote", "the colony keeps its governor"], correctIndex: 0, explanation: "Losers accept the outcome, so power changes without war." },
        { prompt: "The MoE lists Liberia's post-war elections at", options: ["1997, 2000, 2011 and 2017", "1847 and 1848", "1945 and 1960", "1884 and 1885"], correctIndex: 0, explanation: "The syllabus lists 1997, 2000, 2011 and 2017." },
        { prompt: "Elections replace war as the way power changes hands only if", options: ["the loser accepts the result", "the winner rules for life", "voting is banned", "one group is excluded"], correctIndex: 0, explanation: "Acceptance of results is what makes the transfer peaceful." },
        { prompt: "Inclusion in a post-conflict election means", options: ["former rivals can also vote", "only one faction votes", "foreigners decide", "no vote is held"], correctIndex: 0, explanation: "All adult citizens, rivals included, may vote." },
        { prompt: "The approved sources report the winners of Liberia's elections", options: ["no — this gap is flagged", "yes, all of them", "only 1997", "only 2017"], correctIndex: 0, explanation: "The sources do not report Liberian election results; the gap is flagged." },
        { prompt: "Legitimacy from an election comes from", options: ["the people's choice rather than arms", "military strength", "colonial appointment", "inheritance"], correctIndex: 0, explanation: "Elected leaders govern by the people's choice." },
        { prompt: "Where election conditions fail, elections can", options: ["trigger renewed conflict", "always guarantee peace", "abolish the state", "restore colonial rule"], correctIndex: 0, explanation: "Flawed elections can reignite conflict." },
        { prompt: "For Liberia's specific election outcomes, use", options: ["the MoE primary texts and official records", "invented results", "the model's memory", "no source"], correctIndex: 0, explanation: "Use official records; do not invent results." },
        { prompt: "Nkrumah's victory shows an election can confer power even on someone who is", options: ["imprisoned at the time", "a foreign king", "an army general", "a colonial governor"], correctIndex: 0, explanation: "He won while imprisoned." },
        { prompt: "The democratic standard for a fully inclusive vote is", options: ["universal suffrage", "restricted suffrage", "no suffrage", "hereditary rule"], correctIndex: 0, explanation: "Universal suffrage is the inclusive standard." },
        { prompt: "The end of apartheid and the 1994 vote show elections can", options: ["end an era of exclusion peacefully", "start a colonial empire", "abolish voting", "guarantee poverty"], correctIndex: 0, explanation: "1994 peacefully ended apartheid-era exclusion." },
        { prompt: "A post-conflict election consolidates peace by", options: ["making government depend on votes, not weapons", "rewarding the strongest army", "excluding voters", "restoring monarchy"], correctIndex: 0, explanation: "It ties power to votes rather than force." },
        { prompt: "The safest handling of Liberia-specific results is to", options: ["cite official records and not invent them", "guess the winners", "recall them from memory", "skip the topic"], correctIndex: 0, explanation: "Cite records; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define universal suffrage and explain why it matters for a post-conflict election.", answerKey: "Universal suffrage is the right of all adult citizens to vote. It matters because it makes the election fully inclusive — former rivals included — so the resulting government is legitimate and power passes by the people's choice rather than by arms. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two sourced examples of universal-suffrage elections in Africa.", answerKey: "Any two: Kwame Nkrumah won election under universal suffrage in the Gold Coast (leading to Ghana's independence, 6 March 1957); South Africa held its first universal-suffrage election in 1994, electing Nelson Mandela president. Award 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "South Africa's first universal-suffrage elections were held in", options: ["1994", "1957", "1960", "1976"], correctIndex: 0, answerKey: "The first universal-suffrage election was in 1994. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What three conditions make a post-conflict election meaningful?", answerKey: "Inclusion (all adult citizens, formerly-warring groups included, may vote); legitimacy (the winner governs by the people's choice, not by arms); and a peaceful transfer of power (the losing side accepts the result). Failure of these can instead trigger renewed conflict. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss, from the closest sourced themes, the role of universal-suffrage elections in ending conflict and legitimising government, referring to Liberia's post-war elections and the limits of the sources.", answerKey: "Award marks for: the purpose of post-conflict elections — replacing force with the people's choice, 5 marks; universal suffrage and its sourced examples (Nkrumah/Ghana 1957; South Africa 1994/Mandela), 6 marks; the conditions of a meaningful election — inclusion, legitimacy, peaceful transfer, 6 marks; applying the general significance to Liberia's 1997/2000/2011/2017 elections, 4 marks; an explicit statement that the approved sources do not report the Liberian results, which must come from official records rather than be invented, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
