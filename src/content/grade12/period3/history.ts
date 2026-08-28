import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 12,
// Semester One, Period III: The Administrations of Seven Selected Liberian
// Presidents (1847–1990). The MoE CONTENTS list has three top-level items,
// each rebuilt here as its own topic: (1) the terms of office of the selected
// presidents; (2) their policies toward national cohesion and growth; and
// (3) the unique contributions of Joseph Jenkins Roberts, Daniel E. Howard,
// Arthur Barclay, Charles D.B. King, William V.S. Tubman, William R. Tolbert
// Jr. and Samuel Kanyon Doe.
//
// SOURCING NOTE / SYLLABUS GAP: this is the most Liberia-specific period in
// the Grade 12 syllabus, and the approved published education sources
// (OpenStax, CK-12, LibreTexts) do NOT carry biographies, terms of office or
// policy records for individual Liberian presidents. Per AGENTS.md, none of
// those facts are invented here. Each topic is built from the CLOSEST covered
// themes — the founding of Liberia by the American Colonization Society and
// the Americo-Liberian settler republic (LibreTexts, US History to 1877), and
// the tasks and record of African leadership during state-building and
// decolonisation (OpenStax World History Volume 2) — and the president-
// specific gap is flagged in each topic. The named presidents' individual
// records must be taken from the MoE primary texts.
export const historyG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "The Administrations of Seven Selected Liberian Presidents (1847–1990)",
  summary:
    "Period III of the MoE Grade 12 History syllabus. Learners study the administrations of seven selected Liberian presidents from 1847 to 1990 — their terms of office, their policies toward national cohesion and growth, and their unique contributions. Because the approved published sources do not carry records for individual Liberian presidents, each topic is taught through the closest covered themes (the American Colonization Society's founding of Liberia and the Americo-Liberian settler republic, and the general tasks and record of African leadership in state-building and decolonisation), with the president-specific gaps flagged for the teacher; the named presidents' records must come from the MoE primary texts.",
  topics: [
    {
      // source: LibreTexts — United States History to 1877 (Locks et al.), 13.3 American Antebellum Reform (https://human.libretexts.org/Bookshelves/History/National_History/United_States_History_to_1877_(Locks_et_al.)/13:_Antebellum_Revival_and_Reform/13.03:_American_Antebellum_Reform)
      slug: "terms-of-office-and-the-founding-of-the-liberian-republic",
      title: "Terms of Office and the Founding of the Liberian Republic",
      objective:
        "By the end of the topic, learners should be able to explain the founding of Liberia as an American settlement and the settler-republic framework within which its presidents served, while recognising that the individual presidents' terms of office lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## From colony to republic (sourced foundation)

- Liberia began as a colony of the **American Colonization Society (ACS)**, "the main voice of colonizationists in the United States."
- "In **1821**, the ACS helped to establish the colony of **Liberia** on the west coast of Africa and assisted some **13,000 slaves and free blacks** to emigrate to the colony."
- Early settlement was hard: "hundreds died from disease soon after emigrating."
- The settlers — later called **Americo-Liberians** — built an American-style government; "**Americans dominated Liberian politics despite forming a tiny minority**."

## The framework in which presidents served

- The syllabus dates the presidencies from **1847** (the year the settler republic declared its independence) to **1990**.
- The presidents therefore governed a **settler republic** with:
- an **executive president**, elected for fixed **terms of office**;
- a settler ruling class (Americo-Liberians) holding power over a much larger **indigenous population**;
- American-derived institutions (a constitution, elected offices).

## What a "term of office" means

- A **term of office** is the fixed period an elected head of state serves before re-election or replacement.
- Studying "terms of office" means placing each president in sequence and asking how power passed from one to the next — peacefully by election, or otherwise.

## Applying the framework to the seven presidents

- The MoE names seven presidents from 1847 to 1990: **Joseph Jenkins Roberts, Daniel E. Howard, Arthur Barclay, Charles D.B. King, William V.S. Tubman, William R. Tolbert Jr. and Samuel Kanyon Doe.**
- Using the sourced framework, each served as executive president of the Americo-Liberian settler republic (until its later disruption), for defined terms.

## Source note and syllabus gap

- The approved sources establish the **founding and settler-republic framework** but do **not** give the individual presidents' dates or terms of office. Those are **not invented here**; use the MoE primary texts (Liberia History Book; Guannue, *The First Republic*) for each president's term.`,
      workedExample: `**Question:** Explain the settler-republic framework within which Liberia's presidents from 1847 to 1990 served.

**Solution**

*Step 1 — the founding.*
Liberia began as an ACS colony established in 1821, settled by some 13,000 emigrants from the United States.

*Step 2 — the settler class.*
The American settlers (Americo-Liberians), though a tiny minority, dominated Liberian politics.

*Step 3 — the republic.*
From 1847 the settlers ran an American-style republic with an executive president elected for fixed terms of office, over a much larger indigenous population.

*Step 4 — the presidents.*
The seven named presidents (Roberts to Doe, 1847–1990) each led this republic for defined terms; the specific dates belong to the MoE primary texts.

**Conclusion:** Liberia's presidents governed an American-founded settler republic with an elected executive; their individual terms of office must be taken from the MoE primary texts, not invented.`,
      quiz: [
        { prompt: "Liberia began as a colony of the", options: ["American Colonization Society", "British Empire", "Warsaw Pact", "Organization of African Unity"], correctIndex: 0, explanation: "Liberia was founded by the ACS." },
        { prompt: "The ACS helped establish the colony of Liberia in", options: ["1821", "1847", "1884", "1945"], correctIndex: 0, explanation: "The colony was established in 1821." },
        { prompt: "About how many settlers did the ACS assist to emigrate?", options: ["13,000", "800,000", "130", "1.3 million"], correctIndex: 0, explanation: "Some 13,000 slaves and free Blacks emigrated." },
        { prompt: "The American settlers in Liberia are called", options: ["Americo-Liberians", "Afrikaners", "Boers", "Creoles"], correctIndex: 0, explanation: "The settler community is the Americo-Liberians." },
        { prompt: "In Liberian politics, the settlers", options: ["dominated despite being a tiny minority", "held no power", "were the majority", "were excluded"], correctIndex: 0, explanation: "A settler minority dominated politics." },
        { prompt: "The syllabus dates the seven presidencies from", options: ["1847 to 1990", "1821 to 1847", "1945 to 1990", "1884 to 1960"], correctIndex: 0, explanation: "The period is 1847–1990." },
        { prompt: "A 'term of office' is", options: ["the fixed period an elected leader serves", "a lifetime monarchy", "a colonial governorship", "a foreign occupation"], correctIndex: 0, explanation: "It is the fixed period of service before re-election or replacement." },
        { prompt: "Studying terms of office means placing presidents in", options: ["sequence and asking how power passed between them", "alphabetical order only", "random order", "no order"], correctIndex: 0, explanation: "It examines sequence and the transfer of power." },
        { prompt: "Liberia's republic had an executive", options: ["president", "colonial governor", "king", "emperor"], correctIndex: 0, explanation: "It had an elected executive president." },
        { prompt: "Early settlers suffered heavily from", options: ["disease", "snow", "famine only", "no hardship"], correctIndex: 0, explanation: "Hundreds died from disease soon after emigrating." },
        { prompt: "The first of the seven named presidents was", options: ["Joseph Jenkins Roberts", "Samuel Kanyon Doe", "William V.S. Tubman", "Arthur Barclay"], correctIndex: 0, explanation: "The list begins with Joseph Jenkins Roberts." },
        { prompt: "The last of the seven named presidents was", options: ["Samuel Kanyon Doe", "Joseph Jenkins Roberts", "Daniel E. Howard", "Charles D.B. King"], correctIndex: 0, explanation: "The list ends with Samuel Kanyon Doe." },
        { prompt: "The approved sources give each president's exact term dates", options: ["no — this gap is flagged", "yes, all of them", "only Roberts", "only Doe"], correctIndex: 0, explanation: "The sources do not give individual terms; the gap is flagged." },
        { prompt: "Liberia's institutions were modelled on", options: ["American government", "the Warsaw Pact", "the Berlin Conference", "a Belgian colony"], correctIndex: 0, explanation: "The settlers built American-style institutions." },
        { prompt: "For each president's term of office, learners should use", options: ["the MoE primary texts", "invented dates", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts; do not invent." },
        { prompt: "The settler republic ruled over a much larger", options: ["indigenous population", "settler majority", "European colony", "Asian population"], correctIndex: 0, explanation: "A minority ruled the larger indigenous population." },
        { prompt: "A peaceful transfer of power at the end of a term happens by", options: ["election", "military seizure", "inheritance", "colonisation"], correctIndex: 0, explanation: "Elections transfer power peacefully at term's end." },
        { prompt: "The colony's declared independence gave rise to a", options: ["republic (from 1847)", "monarchy", "Belgian colony", "British mandate"], correctIndex: 0, explanation: "Liberia became a republic in 1847." },
        { prompt: "The founding tie of the Liberian republic was to", options: ["the United States", "Britain", "Belgium", "the Soviet Union"], correctIndex: 0, explanation: "Liberia was founded from the United States." },
        { prompt: "The safest handling of the presidents' terms is to", options: ["cite the MoE texts and not invent them", "guess the dates", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe how Liberia was founded and who came to dominate its politics.", answerKey: "Liberia began as a colony of the American Colonization Society, established in 1821, with some 13,000 slaves and free Blacks emigrating from the United States. The American settlers (Americo-Liberians), though a tiny minority, came to dominate Liberian politics over the larger indigenous population. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Define a 'term of office' and explain what studying the presidents' terms involves.", answerKey: "A term of office is the fixed period an elected head of state serves before re-election or replacement. Studying the presidents' terms means placing them in sequence (1847–1990) and examining how power passed from one to the next — by election or otherwise. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The syllabus dates the seven presidencies to", options: ["1847–1990", "1821–1847", "1945–1990", "1884–1960"], correctIndex: 0, answerKey: "1847–1990. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "List the seven presidents named by the syllabus.", answerKey: "Joseph Jenkins Roberts, Daniel E. Howard, Arthur Barclay, Charles D.B. King, William V.S. Tubman, William R. Tolbert Jr. and Samuel Kanyon Doe. (Their individual term dates are not in the approved sources and must come from the MoE primary texts.) Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the settler-republic framework within which Liberia's presidents served from 1847 to 1990, noting the limits of the sources.", answerKey: "Award marks for: the founding of Liberia as an ACS colony in 1821 and the ~13,000 emigrants, 6 marks; the Americo-Liberian settler minority's domination of politics over the indigenous majority, 6 marks; the republic's framework — an elected executive president serving fixed terms from 1847, 6 marks; naming the seven presidents as the office-holders of this republic, 3 marks; an explicit statement that the individual terms of office are not in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — United States History to 1877 (Locks et al.), 13.3 American Antebellum Reform (https://human.libretexts.org/Bookshelves/History/National_History/United_States_History_to_1877_(Locks_et_al.)/13:_Antebellum_Revival_and_Reform/13.03:_American_Antebellum_Reform) and OpenStax World History Volume 2, 9.3 Colonial Empires (https://openstax.org/books/world-history-volume-2/pages/9-3-colonial-empires)
      slug: "policies-toward-national-cohesion-and-growth",
      title: "Policies Toward National Cohesion and Growth",
      objective:
        "By the end of the topic, learners should be able to explain the general challenge of national cohesion in a divided settler state and the policy tasks of nation-building and growth, while recognising that the individual presidents' specific policies lie outside the approved sources.",
      estimatedMinutes: 85,
      notes: `## The problem of national cohesion (sourced foundation)

- **National cohesion** means binding a country's different groups into one nation with a shared loyalty.
- Liberia faced a deep internal divide: the **Americo-Liberian settlers**, though "a tiny minority," dominated politics over the far larger **indigenous population**. Political tension arose between the American settlers and local peoples.
- This mirrors a wider African problem: colonial and settler arrangements often **"separated members of the same ethnic group into different countries while forcing hostile groups into the same country,"** so that "violent ethnic conflict has been a frequent result." Building one nation from divided groups was the central task of leadership.

## Policy tasks for cohesion and growth

- **Cohesion (unity):** extending citizenship and political rights across groups; integrating the indigenous majority into national life; reducing the settler–indigenous gap.
- **Growth (development):** building infrastructure, expanding education, and developing the economy so that prosperity is shared and does not fall to a "resource curse."
- A leader is judged on whether policies **narrowed or widened** the divide, and whether growth was **broadly shared**.

## Why cohesion and growth reinforce each other

- Shared growth gives excluded groups a stake in the nation, strengthening cohesion.
- Cohesion (a stable, united country) is in turn a condition for sustained growth; deep division can lead to instability and conflict.

## Applying the framework to the seven presidents

- The MoE item asks about each president's **policies toward national cohesion and growth**. Using the framework, each is assessed on whether his policies **narrowed the settler–indigenous divide** and delivered **broadly shared development**.

## Source note and syllabus gap

- The approved sources establish the **cohesion problem and policy framework** but do **not** record the specific policies of the individual presidents. Those are **not invented here**; use the MoE primary texts.`,
      workedExample: `**Question:** Explain the challenge of national cohesion in Liberia and the policy tasks a president faced to build unity and growth.

**Solution**

*Step 1 — the divide.*
Liberia's Americo-Liberian settlers, though a tiny minority, dominated politics over the far larger indigenous population, producing tension.

*Step 2 — the wider pattern.*
Across Africa, arbitrary settler/colonial arrangements combined divided groups, so violent ethnic conflict was a frequent result; building one nation was the core task.

*Step 3 — cohesion policies.*
A president could narrow the divide by extending citizenship and rights and integrating the indigenous majority.

*Step 4 — growth policies.*
He could pursue broadly-shared development — infrastructure, education, a diversified economy — so prosperity was not captured by a few.

**Conclusion:** the challenge was to turn a divided settler state into one nation with shared growth; each president's specific policies must be taken from the MoE primary texts.`,
      quiz: [
        { prompt: "National cohesion means", options: ["binding different groups into one nation", "dividing a country into colonies", "conquering neighbours", "ending all government"], correctIndex: 0, explanation: "Cohesion is uniting groups into one nation." },
        { prompt: "Liberia's central internal divide was between", options: ["Americo-Liberian settlers and the indigenous majority", "two European empires", "NATO and the Warsaw Pact", "north and south poles"], correctIndex: 0, explanation: "Settlers vs the indigenous majority." },
        { prompt: "The settlers formed", options: ["a tiny minority that dominated politics", "the majority", "an excluded group", "a foreign army"], correctIndex: 0, explanation: "A minority dominated politics." },
        { prompt: "Across Africa, arbitrary borders often forced together", options: ["hostile groups", "identical peoples", "European settlers", "no one"], correctIndex: 0, explanation: "Borders combined rival groups." },
        { prompt: "A frequent result of such division has been", options: ["violent ethnic conflict", "lasting harmony", "rapid unity", "economic boom"], correctIndex: 0, explanation: "Violent ethnic conflict has often followed." },
        { prompt: "A cohesion policy would", options: ["extend rights and integrate the indigenous majority", "exclude most citizens", "widen the divide", "abolish the nation"], correctIndex: 0, explanation: "Cohesion extends rights and integrates groups." },
        { prompt: "A growth policy would include", options: ["infrastructure, education and economic development", "banning schools", "isolating the economy", "restoring colonial rule"], correctIndex: 0, explanation: "Growth builds infrastructure, education and the economy." },
        { prompt: "'Broadly shared' growth means prosperity that", options: ["reaches most people, not just a few", "goes only to settlers", "leaves the country", "is captured by one family"], correctIndex: 0, explanation: "Shared growth reaches the wider population." },
        { prompt: "Cohesion and growth reinforce each other because", options: ["shared growth gives excluded groups a stake in the nation", "growth requires division", "unity prevents development", "they are unrelated"], correctIndex: 0, explanation: "Shared growth strengthens cohesion, which supports growth." },
        { prompt: "Deep division can lead to", options: ["instability and conflict", "guaranteed prosperity", "colonial expansion", "world government"], correctIndex: 0, explanation: "Division can bring instability and conflict." },
        { prompt: "A leader is judged on whether policies", options: ["narrowed or widened the divide", "were long or short", "were written or spoken", "used new or old words"], correctIndex: 0, explanation: "The test is whether the divide narrowed and growth was shared." },
        { prompt: "The approved sources record each president's specific policies", options: ["no — this gap is flagged", "yes, in full", "only Tubman's", "only Doe's"], correctIndex: 0, explanation: "The sources do not record individual policies; the gap is flagged." },
        { prompt: "Extending citizenship across groups is a policy of", options: ["cohesion", "conquest", "colonisation", "partition"], correctIndex: 0, explanation: "It builds national cohesion." },
        { prompt: "A 'resource curse' outcome would mean growth that", options: ["is captured by a few and breeds conflict", "reaches everyone", "ends all poverty", "creates unity"], correctIndex: 0, explanation: "The resource curse concentrates wealth and breeds conflict." },
        { prompt: "For each president's specific policies, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts; do not invent." },
        { prompt: "Integrating the indigenous majority would tend to", options: ["reduce the settler–indigenous gap", "widen the divide", "abolish the state", "start a colony"], correctIndex: 0, explanation: "Integration narrows the divide." },
        { prompt: "Cohesion is a condition for", options: ["sustained growth", "permanent division", "colonisation", "the iron curtain"], correctIndex: 0, explanation: "A united, stable country supports sustained growth." },
        { prompt: "The core task of Liberian leadership was to", options: ["build one nation from divided groups", "keep the groups divided", "expand into Asia", "join the Warsaw Pact"], correctIndex: 0, explanation: "Nation-building from division was the core task." },
        { prompt: "Shared growth gives excluded groups", options: ["a stake in the nation", "a reason to secede", "foreign citizenship", "colonial status"], correctIndex: 0, explanation: "A stake in the nation strengthens unity." },
        { prompt: "The safest handling of the presidents' policies is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define national cohesion and explain the divide it had to overcome in Liberia.", answerKey: "National cohesion means binding a country's different groups into one nation with shared loyalty. In Liberia it had to overcome the divide between the Americo-Liberian settlers — a tiny minority who dominated politics — and the far larger indigenous population, a source of political tension. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two cohesion policies and two growth policies a leader could pursue.", answerKey: "Cohesion (any two): extend citizenship and political rights across groups; integrate the indigenous majority; reduce the settler–indigenous gap. Growth (any two): build infrastructure; expand education; develop and diversify the economy so prosperity is shared. Award 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A leader's cohesion record is judged on whether policies", options: ["narrowed or widened the settler–indigenous divide", "were long or short", "were popular songs", "used old or new words"], correctIndex: 0, answerKey: "Whether they narrowed or widened the divide (and whether growth was shared). Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how cohesion and growth reinforce each other.", answerKey: "Shared growth gives excluded groups a stake in the nation, strengthening cohesion; cohesion (a stable, united country) is in turn a condition for sustained growth, while deep division can lead to instability and conflict. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the challenge of national cohesion and the policy tasks of building unity and growth in a divided settler state such as Liberia, noting the limits of the sources.", answerKey: "Award marks for: defining national cohesion and the Liberian settler–indigenous divide, 6 marks; the wider African pattern of division and ethnic conflict from arbitrary arrangements, 4 marks; cohesion policies (rights, integration, narrowing the gap), 5 marks; growth policies (infrastructure, education, shared development; avoiding the resource curse), 5 marks; an explicit statement that the individual presidents' specific policies are not in the approved sources and must come from the MoE primary texts, 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization) and LibreTexts, United States History to 1877 (Locks et al.), 13.3 American Antebellum Reform (https://human.libretexts.org/Bookshelves/History/National_History/United_States_History_to_1877_(Locks_et_al.)/13:_Antebellum_Revival_and_Reform/13.03:_American_Antebellum_Reform)
      slug: "the-unique-contributions-of-the-seven-presidents",
      title: "The Unique Contributions of the Seven Presidents",
      objective:
        "By the end of the topic, learners should be able to evaluate the general kinds of contribution a national leader can make, using sourced examples of African leadership, while recognising that the specific contributions of the seven named Liberian presidents lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## How a leader's contribution is judged (framework with sourced examples)

- A national leader's "unique contribution" can be measured against the great tasks of a nation's history. The sources give models of African leadership by which such contributions are judged:
- **Winning and defending independence.** **Kwame Nkrumah** led the Gold Coast to become independent **Ghana (6 March 1957)**, the first British African colony to do so; **Jomo Kenyatta** led the Kenya African Union and became independent Kenya's leader (**1963**).
- **National unity and reconciliation.** **Nelson Mandela**, after apartheid, was elected president in South Africa's first universal-suffrage election (**1994**) and is a model of uniting a divided nation.
- **Institution-building and legitimacy.** Leaders who governed by **elections and universal suffrage** (Nkrumah won under universal suffrage) built legitimate institutions rather than ruling by force.

## Kinds of contribution to assess

- **Political:** securing sovereignty, building institutions, ensuring peaceful transfers of power.
- **National unity:** narrowing internal divides (recall Liberia's settler–indigenous gap) and including excluded groups.
- **Economic and social:** infrastructure, education, and broadly-shared development.
- **International:** raising the nation's standing and defending its independence abroad.

## A tool for evaluating each president

| Test | Question to ask of each president |
| --- | --- |
| Sovereignty | Did he defend Liberia's independence? |
| Unity | Did he narrow or widen the settler–indigenous divide? |
| Development | Did he expand infrastructure, education and shared growth? |
| Legitimacy | Did power pass peacefully and lawfully in his time? |
| Standing | Did he raise Liberia's international standing? |

## Applying the framework to the seven presidents

- The MoE names **Joseph Jenkins Roberts, Daniel E. Howard, Arthur Barclay, Charles D.B. King, William V.S. Tubman, William R. Tolbert Jr. and Samuel Kanyon Doe.** Each should be assessed against the five tests above.

## Source note and syllabus gap

- The approved sources give **models of African leadership** and the founding framework but do **not** record the individual contributions of these seven Liberian presidents. Those are **not invented here**; use the MoE primary texts (Liberia History Book; Guannue, *The First Republic*) for each president's specific contribution.`,
      workedExample: `**Question:** How should the "unique contribution" of a Liberian president be evaluated? Illustrate the standard with sourced examples.

**Solution**

*Step 1 — set the tests.*
Judge a leader on sovereignty, national unity, development, legitimacy and international standing.

*Step 2 — sourced models.*
Nkrumah (Ghana, 1957) and Kenyatta (Kenya, 1963) model winning independence; Mandela (South Africa, 1994) models uniting a divided nation; leaders who ruled by universal-suffrage elections model legitimate institution-building.

*Step 3 — apply to Liberia.*
Ask of each president whether he defended independence, narrowed the settler–indigenous divide, delivered shared development, upheld lawful transfers of power, and raised Liberia's standing.

*Step 4 — the limit.*
The sources do not record the seven presidents' specific acts; those come from the MoE primary texts.

**Conclusion:** a president's contribution is judged against sovereignty, unity, development, legitimacy and standing, using sourced models of African leadership; each Liberian president's specific record must be taken from the MoE primary texts.`,
      quiz: [
        { prompt: "Kwame Nkrumah led which colony to independence?", options: ["the Gold Coast (Ghana)", "Kenya", "South Africa", "the Congo"], correctIndex: 0, explanation: "Nkrumah led Ghana to independence." },
        { prompt: "Ghana became independent on", options: ["6 March 1957", "12 December 1963", "27 April 1994", "30 June 1960"], correctIndex: 0, explanation: "Ghana's independence date is 6 March 1957." },
        { prompt: "Ghana was the first ___ colony in Africa to gain independence.", options: ["British", "Belgian", "Portuguese", "French"], correctIndex: 0, explanation: "It was the first British African colony to do so." },
        { prompt: "Jomo Kenyatta led the ___ to independence.", options: ["Kenya African Union / Kenya", "African National Congress", "Convention People's Party", "Warsaw Pact"], correctIndex: 0, explanation: "Kenyatta led the KAU and Kenya." },
        { prompt: "Kenya became independent in", options: ["1963", "1957", "1994", "1960"], correctIndex: 0, explanation: "Kenya became independent in 1963." },
        { prompt: "Nelson Mandela is a model of", options: ["uniting a divided nation", "colonial conquest", "the resource curse", "the iron curtain"], correctIndex: 0, explanation: "Mandela modelled national unity and reconciliation." },
        { prompt: "Mandela was elected president in South Africa's first universal-suffrage election in", options: ["1994", "1963", "1957", "1990"], correctIndex: 0, explanation: "He was elected in 1994." },
        { prompt: "A leader builds legitimate institutions by", options: ["governing through elections and universal suffrage", "ruling only by force", "restoring colonial rule", "abolishing voting"], correctIndex: 0, explanation: "Elections and universal suffrage build legitimacy." },
        { prompt: "'Political' contribution is measured by", options: ["sovereignty, institutions and peaceful transfers of power", "the number of speeches", "personal wealth", "foreign travel"], correctIndex: 0, explanation: "It concerns sovereignty, institutions and lawful power transfers." },
        { prompt: "For Liberia, a key 'national unity' test is whether a leader", options: ["narrowed or widened the settler–indigenous divide", "learned a new language", "built a palace", "won a sports title"], correctIndex: 0, explanation: "Unity is tested by the settler–indigenous divide." },
        { prompt: "Economic and social contribution includes", options: ["infrastructure, education and shared growth", "banning schools", "isolating the economy", "colonising neighbours"], correctIndex: 0, explanation: "It covers infrastructure, education and shared development." },
        { prompt: "The approved sources record the seven presidents' specific contributions", options: ["no — this gap is flagged", "yes, all of them", "only Roberts'", "only Tubman's"], correctIndex: 0, explanation: "The sources do not record their individual contributions; the gap is flagged." },
        { prompt: "'International' contribution means", options: ["raising the nation's standing and defending its independence abroad", "domestic taxes only", "local farming only", "school timetables"], correctIndex: 0, explanation: "It concerns the nation's standing abroad." },
        { prompt: "Nkrumah's rule by universal-suffrage election shows a contribution of", options: ["legitimate institution-building", "military dictatorship", "colonial governorship", "foreign annexation"], correctIndex: 0, explanation: "It models legitimate institution-building." },
        { prompt: "For each president's specific contribution, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts; do not invent." },
        { prompt: "A 'legitimacy' test asks whether power passed", options: ["peacefully and lawfully", "by force only", "by inheritance only", "by foreign decree"], correctIndex: 0, explanation: "Legitimacy asks about lawful, peaceful transfers." },
        { prompt: "The sourced models of African leadership come mainly from", options: ["the decolonisation era", "the Berlin Conference", "the Punic Wars", "the Renaissance"], correctIndex: 0, explanation: "Nkrumah, Kenyatta and Mandela belong to decolonisation-era leadership." },
        { prompt: "Assessing seven presidents against common tests makes the judgement", options: ["consistent and comparable", "random", "impossible", "purely personal"], correctIndex: 0, explanation: "Common tests give a consistent, comparable judgement." },
        { prompt: "A 'sovereignty' test asks whether the leader", options: ["defended Liberia's independence", "increased his salary", "travelled widely", "wrote poetry"], correctIndex: 0, explanation: "Sovereignty asks about defending independence." },
        { prompt: "The safest handling of the presidents' contributions is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Give two sourced models of African leadership and the kind of contribution each represents.", answerKey: "Any two: Kwame Nkrumah led Ghana to independence (6 March 1957) — winning/defending independence; Jomo Kenyatta led Kenya to independence (1963) — national liberation; Nelson Mandela, elected in 1994, models national unity and reconciliation; leaders governing by universal-suffrage elections model legitimate institution-building. Award 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List the five tests by which a president's unique contribution can be judged.", answerKey: "Sovereignty (defending independence); national unity (narrowing the settler–indigenous divide); development (infrastructure, education, shared growth); legitimacy (peaceful, lawful transfers of power); and international standing. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Nelson Mandela was elected president in South Africa's first universal-suffrage election in", options: ["1994", "1957", "1963", "1990"], correctIndex: 0, answerKey: "1994. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why is it useful to judge all seven presidents against the same set of tests?", answerKey: "Applying common tests (sovereignty, unity, development, legitimacy, standing) makes the evaluation consistent and comparable across the seven presidents, rather than a purely personal or arbitrary judgement. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Using sourced models of African leadership, explain how the unique contribution of a Liberian president should be evaluated, and note the limits of the sources.", answerKey: "Award marks for: the standard against which contribution is judged and the sourced models (Nkrumah/Ghana 1957, Kenyatta/Kenya 1963, Mandela/1994, universal-suffrage legitimacy), 8 marks; the kinds of contribution — political, national unity, economic/social, international, 6 marks; the five-test evaluation tool applied to the seven named presidents, 5 marks; an explicit statement that the seven presidents' specific contributions are not in the approved sources and must come from the MoE primary texts, 4 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
