import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 10,
// Semester One, Period III: Liberian History.
//
// SOURCING NOTE (see agent report): the MoE CONTENTS list for this period is
// largely Liberia-specific civics/economics/political history (foundation of the
// new state; the Declaration of Independence — kind of state, system of
// government, powers of the president; the three branches of government; the
// driving force of Liberia's territorial expansion; European encroachment and the
// government's stance; social conditions — Ministry of Education, cultural ties,
// Christian missionary education, Islam in Liberian society; the economy —
// extractive and agriculture industries, foreign-concession liberalization; and
// the 1980 Coup and the People's Redemption Council). The approved education sites
// (OpenStax, CK-12, LibreTexts) do NOT cover these Liberia-specific items, so per
// AGENTS.md they are NOT written from the model's own knowledge. The topics below
// rebuild what IS sourceable — the founding of Liberia by the American Colonization
// Society, Liberia in the context of the Atlantic slave trade, and Liberia amid the
// European colonization of Africa — from LibreTexts and OpenStax. Un-sourceable
// CONTENTS items are flagged in the agent report rather than invented.
export const historyG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "Liberian History: Founding, the Slave Trade and the Colonial Era",
  summary:
    "Period III of the MoE Grade 10 History syllabus. Learners study the founding of Liberia by the American Colonization Society, its origins in the Atlantic slave trade and the movement to resettle free and freed Black Americans, and Liberia's place among the very few African states that were not taken over during the European colonization of Africa.",
  topics: [
    {
      // source: LibreTexts (Humanities) — United States History to 1877 (Locks et al.), 13.3 American Antebellum Reform (https://human.libretexts.org/Bookshelves/History/National_History/United_States_History_to_1877_(Locks_et_al.)/13:_Antebellum_Revival_and_Reform/13.03:_American_Antebellum_Reform)
      slug: "founding-of-liberia",
      title: "The Founding of Liberia and the American Colonization Society",
      objective:
        "By the end of the topic, learners should be able to explain how and why the American Colonization Society founded the colony of Liberia, who settled there, and the tensions that followed.",
      estimatedMinutes: 130,
      notes: `## The American Colonization Society

- The **American Colonization Society (ACS)** was "the main voice of colonizationists in the United States."
- **Colonizationists** wanted to remove African Americans from the United States through **emigration** or by establishing **colonies in Africa**, which they viewed as a gradual path to ending slavery.
- The movement mixed different motives: some genuinely opposed slavery, while others simply wanted free Black Americans out of the country.

## The establishment of Liberia

- In **1821**, the ACS "helped to establish the colony of **Liberia** on the west coast of Africa."
- The society assisted approximately **13,000 enslaved and free Black people** to emigrate to the colony.
- These settlers came from the United States to build a new society on the West African coast.

## The settlers and the local population

- The American settlers were a **tiny minority** of Liberia's total population — the great majority were the **indigenous peoples** already living in the region.
- **Cultural, social and political tensions** arose "between the foreign American population and the local population in Liberia."
- Despite being a small minority, the American settlers **dominated Liberian politics until the 1980s**.

## Difficulties of the settlement

- The Liberian experiment "encountered severe difficulties."
- **Hundreds died from disease** soon after emigrating.
- Building a viable settlement in an unfamiliar environment, alongside established local societies, proved hard.

## Decline of the colonization movement in America

- The colonization movement **lost momentum during the 1840s–1850s** as tensions between free and slave states intensified.
- By then most African Americans had **rejected colonization** as an alternative to direct emancipation — they wanted freedom and equality in the United States, not removal to Africa.

## Common errors and misconceptions

- **Thinking the settlers were the whole population** — they were a **small minority**; most Liberians were indigenous peoples already living there.
- **Assuming everyone in the ACS opposed slavery** — motives were mixed; some simply wanted free Black Americans removed.
- **Believing the settlement was easy** — many settlers **died of disease**, and tensions arose with local societies.
- **Thinking African Americans embraced colonization** — most **rejected** it, preferring emancipation and equality at home.`,
      workedExample: `**Question:** Explain why the American Colonization Society founded Liberia, who settled there, and what problems followed.

**Solution**

*Step 1 — the purpose of the ACS.*
The **American Colonization Society**, the main voice of colonizationists, wanted to remove African Americans from the United States by resettling them in **Africa**, which its supporters saw as a gradual path to ending slavery. Motives were mixed — genuine opposition to slavery among some, and a simple wish to remove free Black Americans among others.

*Step 2 — the founding.*
In **1821** the ACS helped establish the colony of **Liberia** on the west coast of Africa, assisting about **13,000 enslaved and free Black people** to emigrate there.

*Step 3 — the settlers and the locals.*
The American settlers were only a **tiny minority**; most people in the region were **indigenous** communities. Serious **cultural, social and political tensions** arose between the settlers and the local population, yet the settlers **dominated Liberian politics until the 1980s**.

*Step 4 — the difficulties.*
The experiment was, in many ways, a failure: **hundreds died from disease** soon after arriving, and the movement itself **lost momentum in the 1840s–1850s**, rejected by most African Americans who wanted freedom and equality at home.

**Conclusion:** the ACS founded Liberia in 1821 to resettle free and freed Black Americans in Africa, but the settlers remained a small, politically dominant minority amid a much larger indigenous population, and the settlement faced disease, tension and, back in America, growing rejection.`,
      quiz: [
        { prompt: "The organisation that founded the colony of Liberia was the", options: ["American Colonization Society", "United Nations", "Royal African Company", "League of Nations"], correctIndex: 0, explanation: "The ACS established Liberia." },
        { prompt: "Colonizationists wanted to", options: ["resettle African Americans in Africa", "keep everyone in America", "abolish all governments", "colonise Europe"], correctIndex: 0, explanation: "They sought emigration/colonies in Africa." },
        { prompt: "The ACS helped establish Liberia in", options: ["1821", "1947", "1600", "1980"], correctIndex: 0, explanation: "The colony was established in 1821." },
        { prompt: "Liberia lies on which coast of Africa?", options: ["the west coast", "the east coast", "the north coast", "the south coast"], correctIndex: 0, explanation: "Liberia is on the west coast of Africa." },
        { prompt: "About how many people did the ACS help emigrate to Liberia?", options: ["13,000", "1,300", "13 million", "130"], correctIndex: 0, explanation: "Some 13,000 enslaved and free Black people." },
        { prompt: "The settlers who came from America were", options: ["enslaved and free Black people", "European soldiers", "Arab traders", "Portuguese sailors"], correctIndex: 0, explanation: "Free and freed Black Americans settled Liberia." },
        { prompt: "Compared with the whole population, the American settlers were", options: ["a tiny minority", "the vast majority", "exactly half", "non-existent"], correctIndex: 0, explanation: "Most people were indigenous; settlers were few." },
        { prompt: "Tensions in Liberia arose between the settlers and", options: ["the local (indigenous) population", "the United Nations", "the Roman Empire", "the Swahili coast"], correctIndex: 0, explanation: "Cultural, social and political tensions arose with locals." },
        { prompt: "Despite being a minority, the American settlers dominated Liberian politics until", options: ["the 1980s", "1821", "the 1600s", "the present day"], correctIndex: 0, explanation: "They dominated politics until the 1980s." },
        { prompt: "A major difficulty for the new settlers was", options: ["disease, which killed hundreds", "too much wealth", "no land at all", "European invasion"], correctIndex: 0, explanation: "Hundreds died from disease soon after arriving." },
        { prompt: "Motives within the ACS were", options: ["mixed — some opposed slavery, some wanted removal of free Black Americans", "all identical", "purely religious", "entirely economic"], correctIndex: 0, explanation: "The movement mixed different motives." },
        { prompt: "The colonization movement lost momentum during the", options: ["1840s–1850s", "1980s", "1600s", "2000s"], correctIndex: 0, explanation: "It declined as free/slave state tensions grew." },
        { prompt: "Most African Americans came to view colonization as", options: ["something to reject in favour of emancipation at home", "the only good option", "a foreign plot they welcomed", "irrelevant"], correctIndex: 0, explanation: "They preferred freedom and equality in the US." },
        { prompt: "Colonizationists saw resettlement as", options: ["a gradual path to ending slavery", "a way to expand slavery", "a military conquest", "a trade agreement"], correctIndex: 0, explanation: "They framed it as gradually ending slavery." },
        { prompt: "The Liberian experiment is described as", options: ["in many ways a failure", "a complete and easy success", "never attempted", "a European colony"], correctIndex: 0, explanation: "Disease and tensions made it largely a failure." },
        { prompt: "The great majority of people in the Liberia region were", options: ["indigenous peoples already living there", "American settlers", "European colonists", "Arab merchants"], correctIndex: 0, explanation: "Indigenous communities far outnumbered settlers." },
        { prompt: "The ACS is described as the main voice of", options: ["colonizationists in the United States", "abolitionists in Britain", "African kings", "the Catholic Church"], correctIndex: 0, explanation: "It led the US colonization movement." },
        { prompt: "The word 'emigrate' in this topic means to", options: ["leave one country to settle in another", "return home", "trade goods", "declare war"], correctIndex: 0, explanation: "Settlers emigrated from the US to Liberia." },
        { prompt: "A key reason African Americans rejected colonization was that they wanted", options: ["freedom and equality in the United States", "to rule Europe", "more colonies", "to stop all trade"], correctIndex: 0, explanation: "They sought emancipation at home, not removal." },
        { prompt: "The founding of Liberia is best understood as part of", options: ["the American debate over slavery and the place of free Black Americans", "the Roman conquest of Africa", "the Bantu migrations", "the Swahili trade"], correctIndex: 0, explanation: "It grew out of the US slavery debate." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the purpose of the American Colonization Society.", answerKey: "The ACS was the main voice of colonizationists, who wanted to remove African Americans from the US through emigration or African colonies, viewing this as a gradual path to ending slavery; motives were mixed. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State when Liberia was established, on which coast, and roughly how many settlers the ACS assisted.", answerKey: "Established in 1821 on the west coast of Africa; the ACS assisted about 13,000 enslaved and free Black people to emigrate. Award 2 marks for the date/coast and 2 for the figure.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The American settlers in Liberia were", options: ["a tiny minority who nonetheless dominated politics until the 1980s", "the majority of the population", "European colonists", "indigenous rulers"], correctIndex: 0, answerKey: "A small settler minority dominated politics until the 1980s. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe two difficulties or tensions that followed the founding of Liberia.", answerKey: "Hundreds of settlers died from disease soon after emigrating; cultural, social and political tensions arose between the American settlers and the indigenous population; the settlers were a minority yet dominated politics. Award 2 marks per point.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss why the American Colonization Society founded Liberia and the problems the settlement faced.", answerKey: "Award marks for: the aims and mixed motives of the ACS and colonizationists, 6 marks; the establishment in 1821 and the emigration of about 13,000 free and freed Black Americans, 5 marks; the settlers as a small minority amid a larger indigenous population, dominating politics until the 1980s, 5 marks; difficulties — disease, tensions with locals, and the movement's decline in the 1840s–1850s as African Americans rejected it, 5 marks; a clear conclusion, 2 marks.", marks: 23 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 5.4 The Atlantic Slave Trade (https://openstax.org/books/world-history-volume-2/pages/5-4-the-atlantic-slave-trade)
      slug: "liberia-and-the-atlantic-slave-trade",
      title: "The Atlantic Slave Trade: The Background to Liberia",
      objective:
        "By the end of the topic, learners should be able to describe the trans-Atlantic slave trade and its effects on Africa, and explain how it forms the background to the resettlement movement that founded Liberia.",
      estimatedMinutes: 130,
      notes: `## Why the slave trade matters for Liberia

- Liberia was founded to resettle **free and freed Black Americans** — the descendants of Africans taken across the Atlantic by the slave trade.
- Understanding Liberia's origins therefore begins with the **trans-Atlantic slave trade**.

## The scale of the trade

- Between the **late fifteenth and early nineteenth centuries**, Europeans forcibly transported approximately **twelve million Africans** across the Atlantic to the Americas.
- About **two million people died** on the voyages across the Atlantic.

## The triangular trade

- The trade formed a **triangle** connecting the Americas, Europe and West Africa.
- Europeans exchanged **manufactured goods** with African traders for enslaved people.
- Enslaved captives were shipped to the Americas on the **Middle Passage** (the second leg).
- Products of enslaved labour (like sugar and molasses) were shipped back, funding the purchase of more captives and goods.

## The Middle Passage

- Conditions were catastrophic: ships held **five to six hundred people**, packed tightly, with captains expecting **10–20 per cent** to die.
- Enslaved people were fed once a day, had no bathing facilities, and endured poor ventilation and extreme heat.

## European and African involvement

- **Portugal** first brought enslaved Africans to the Americas in **1525**; British, French, Spanish, Dutch and Danish traders later took part extensively.
- **African traders** captured and sold other Africans, sometimes launching **wars solely to take captives** — the European demand reshaped existing African slavery.

## The impact on Africa

- The trade **devastated** many African societies. One model suggests that **between 1750 and 1850 no population growth occurred** south of the Sahara.
- The removal of young adults **destabilised communities** and forced women into traditionally male economic roles.
- European **textile and metal imports undermined African industries**.
- Fear of raiders pervaded villages, and social trust broke down. Historically enslaved regions "remain today the poorest in Africa."

## Common errors and misconceptions

- **Thinking only Europeans were involved** — European traders drove the demand, but **African intermediaries** captured and sold captives.
- **Underrating the scale** — about **twelve million** Africans were transported, with some two million dying at sea.
- **Believing the trade had no lasting effect** — it caused **population loss, instability and economic damage** still felt today.
- **Forgetting the link to Liberia** — Liberia's settlers were descendants of Africans taken in this very trade, resettled back on the African coast.`,
      workedExample: `**Question:** Describe the trans-Atlantic slave trade and its effects on Africa, and explain how it connects to the founding of Liberia.

**Solution**

*Step 1 — the scale.*
Between the late fifteenth and early nineteenth centuries, Europeans forcibly transported about **twelve million Africans** across the Atlantic, of whom some **two million died** at sea.

*Step 2 — how it worked.*
It was a **triangular trade**: manufactured goods went from Europe to Africa, enslaved people crossed the **Middle Passage** to the Americas in catastrophic conditions, and the products of their labour returned to Europe. **African traders** supplied captives, sometimes making war to take them, while Portugal, Britain, France and others shipped them.

*Step 3 — the effects on Africa.*
The trade **devastated** African societies: little or no population growth south of the Sahara between 1750 and 1850, destabilised communities, women pushed into new economic roles, and African industries undermined by European imports. Historically enslaved regions remain among the poorest today.

*Step 4 — the link to Liberia.*
Liberia was founded (in 1821, by the American Colonization Society) to resettle **free and freed Black Americans** — the descendants of Africans taken in this trade — back on the West African coast. The slave trade is therefore the **background** to Liberia's origins.

**Conclusion:** the trans-Atlantic slave trade removed millions of Africans and damaged African societies for generations; Liberia was created to return some of their descendants to Africa, making the slave trade the essential background to Liberian history.`,
      quiz: [
        { prompt: "Roughly how many Africans were transported across the Atlantic?", options: ["about twelve million", "about twelve thousand", "about one hundred", "about two billion"], correctIndex: 0, explanation: "About twelve million between the 15th and 19th centuries." },
        { prompt: "About how many people died on the Atlantic voyages?", options: ["about two million", "none", "a few hundred", "twelve million"], correctIndex: 0, explanation: "Some two million died crossing the Atlantic." },
        { prompt: "The slave trade connected the Americas, Europe and", options: ["West Africa", "Australia", "Antarctica", "Central Asia"], correctIndex: 0, explanation: "It was a triangle including West Africa." },
        { prompt: "The middle leg carrying enslaved people to the Americas was the", options: ["Middle Passage", "Silk Road", "Suez Canal", "monsoon route"], correctIndex: 0, explanation: "The Middle Passage was the second leg." },
        { prompt: "On the Middle Passage, captains expected roughly what share to die?", options: ["10–20 per cent", "0 per cent", "90 per cent", "50–60 per cent"], correctIndex: 0, explanation: "Captains anticipated 10–20 per cent mortality." },
        { prompt: "Europeans exchanged what for enslaved people in Africa?", options: ["manufactured goods", "nothing", "gold coins only", "land in Europe"], correctIndex: 0, explanation: "Manufactured goods were traded for captives." },
        { prompt: "Portugal first brought enslaved Africans to the Americas in", options: ["1525", "1821", "1884", "1980"], correctIndex: 0, explanation: "Portugal began the trade in 1525." },
        { prompt: "African involvement in the trade included", options: ["African traders capturing and selling other Africans", "no African participation", "only European raids", "Roman soldiers"], correctIndex: 0, explanation: "African intermediaries supplied captives." },
        { prompt: "The trade reshaped African slavery because European demand", options: ["led some to make war solely to take captives", "ended all warfare", "had no effect", "banned trade"], correctIndex: 0, explanation: "Demand drove wars to take captives." },
        { prompt: "One demographic effect was that between 1750 and 1850 south of the Sahara there was", options: ["no population growth", "rapid population growth", "no people at all", "only urban growth"], correctIndex: 0, explanation: "A model suggests no population growth in that period." },
        { prompt: "The removal of young adults", options: ["destabilised communities", "strengthened villages", "had no effect", "increased trade only"], correctIndex: 0, explanation: "Losing young adults destabilised societies." },
        { prompt: "European imports undermined African", options: ["textile and metal industries", "farming entirely", "languages", "rivers"], correctIndex: 0, explanation: "Imports damaged African industries." },
        { prompt: "Historically enslaved regions of Africa today are described as", options: ["among the poorest in Africa", "the wealthiest", "uninhabited", "European colonies"], correctIndex: 0, explanation: "Lasting damage left them among the poorest." },
        { prompt: "Liberia's settlers were", options: ["descendants of Africans taken in the slave trade", "European colonists", "Arab traders", "Roman citizens"], correctIndex: 0, explanation: "Free and freed Black Americans descended from enslaved Africans." },
        { prompt: "Ships on the Middle Passage typically held", options: ["five to six hundred people", "ten people", "fifty thousand people", "no passengers"], correctIndex: 0, explanation: "They were packed with five to six hundred people." },
        { prompt: "Which European nations took part in the trade?", options: ["Portugal, Britain, France, Spain, the Dutch and Danes", "only Portugal", "only Britain", "no European nations"], correctIndex: 0, explanation: "Many European powers participated." },
        { prompt: "The products of enslaved labour, shipped back, were used to", options: ["fund the purchase of more captives and goods", "end the trade", "build African cities", "pay African kings only"], correctIndex: 0, explanation: "Profits funded more captives and goods." },
        { prompt: "Fear of slave raiders in African villages led to", options: ["broken social trust", "stronger unity everywhere", "no change", "more coins"], correctIndex: 0, explanation: "The threat eroded trust between communities." },
        { prompt: "The slave trade is the background to Liberia because Liberia was founded to", options: ["resettle descendants of enslaved Africans back in Africa", "expand slavery", "colonise Europe", "trade gold"], correctIndex: 0, explanation: "Liberia resettled free and freed Black Americans in Africa." },
        { prompt: "The trans-Atlantic slave trade lasted from the", options: ["late 15th to early 19th centuries", "1st to 3rd centuries", "20th century only", "10th to 12th centuries"], correctIndex: 0, explanation: "It spanned the late 1400s to early 1800s." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the approximate number of Africans transported across the Atlantic and how many died at sea.", answerKey: "About twelve million Africans were forcibly transported between the late 15th and early 19th centuries; about two million died on the voyages. Award 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the triangular trade and the Middle Passage.", answerKey: "The triangular trade linked Europe, West Africa and the Americas: manufactured goods went to Africa, enslaved people crossed the Middle Passage (the second leg) to the Americas in catastrophic conditions, and the products of their labour returned to Europe to fund more captives. Award up to 5 marks.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which best describes African involvement in the trade?", options: ["African traders captured and sold other Africans, driven by European demand", "Africans had no part in it", "Only Romans took captives", "Europeans never participated"], correctIndex: 0, answerKey: "African intermediaries supplied captives to European buyers. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give three effects of the slave trade on Africa.", answerKey: "Any three: little or no population growth south of the Sahara between 1750 and 1850; destabilised communities and women pushed into new economic roles; European imports undermining African industries; broken social trust; historically enslaved regions among the poorest today. Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the trans-Atlantic slave trade and its effects on Africa, and explain how it forms the background to the founding of Liberia.", answerKey: "Award marks for: the scale (about 12 million, 2 million deaths) and dates, 5 marks; the triangular trade and the Middle Passage, 6 marks; European and African involvement, 4 marks; effects on Africa (population, instability, economy, social trust), 6 marks; the link to Liberia as a resettlement of descendants of enslaved Africans, 4 marks. A response that ignores the link to Liberia should not exceed 18.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 9.3 Colonial Empires (https://openstax.org/books/world-history-volume-2/pages/9-3-colonial-empires)
      slug: "liberia-and-the-colonization-of-africa",
      title: "Liberia and the European Colonization of Africa",
      objective:
        "By the end of the topic, learners should be able to describe the European Scramble for Africa and the Berlin Conference, explain how nearly all of Africa was colonized, and identify how a few states (including Liberia) avoided direct European rule.",
      estimatedMinutes: 130,
      notes: `## The Scramble for Africa

- At the start of the Second Industrial Revolution, Europeans controlled only about **10 per cent** of Africa.
- By the end of the nineteenth century, after the **"Scramble for Africa"** — the competition among European powers to establish colonies — they controlled about **90 per cent**.

## The Berlin Conference (1884–1885)

- European nations gathered at the **Berlin Conference of 1884–1885** — with **no African representatives** — to partition the continent.
- The conference set the **procedure** by which a Western country could formally claim African territory, and it formalised existing colonies and new claims.
- The colonial powers **completely re-shaped the map of Africa**, replacing African kingdoms and territories with new colonial boundaries.

## Motives for imperialism

- Access to **natural resources and raw materials** (ivory, rubber, palm oil, cotton).
- New **markets** for manufactured goods.
- **International prestige** and national pride.
- **Military dominance** over rivals.
- The quest for colonies was "greatly aided by developments in **medicine, transportation, and weapons technology**."

## Which powers took which colonies

| Power | Examples of colonies |
| --- | --- |
| Britain | South Africa, Egypt and Sudan, Rhodesia |
| France | West and Central Africa (Côte d'Ivoire, Mali, Niger, Chad and others), Madagascar |
| Belgium | the Congo (as Leopold II's private colony) |
| Germany | Togoland, Cameroon, South-West Africa, East Africa |
| Italy | Eritrea (and a failed attempt on Ethiopia) |

## Methods and effects of colonial rule

- Powers used **treaties** with local rulers, **military conquest**, **protectorates**, and **monopoly companies**.
- Colonial policies varied — **Belgian paternalism, French assimilation, British indirect rule, Portuguese resource extraction**.
- Effects included the **exploitation of African labour**, **violence against local populations**, **disruption of traditional governance**, and economies **designed to benefit the colonisers**.

## The states that avoided colonization

- Almost the whole continent fell under European control — but a few states were **not directly colonised**.
- **Ethiopia** kept its independence, defeating an Italian invasion.
- **Liberia**, founded by the American Colonization Society and settled by free and freed Black Americans, was likewise **not taken over by a European power** — one of the very few African states to remain independent through the colonial era.

## Common errors and misconceptions

- **Thinking Africans were consulted** — the Berlin Conference had **no African representatives**.
- **Believing all Africa was colonised** — about 90 per cent was, but **Ethiopia and Liberia** avoided direct European rule.
- **Assuming colonisation was only about land** — motives included **resources, markets, prestige and military rivalry**, aided by new medicine, transport and weapons.
- **Treating all colonial rule as the same** — methods varied (assimilation, indirect rule, paternalism, extraction).`,
      workedExample: `**Question:** Explain the European Scramble for Africa and how a few states — including Liberia — avoided colonization.

**Solution**

*Step 1 — the change in control.*
Around the start of the Second Industrial Revolution Europeans held only about **10 per cent** of Africa; by 1900, after the **Scramble for Africa**, they controlled about **90 per cent**.

*Step 2 — how it was organised.*
At the **Berlin Conference of 1884–1885** — with **no African representatives** — European powers set the rules for claiming African territory and re-shaped the continent's map, replacing African kingdoms with colonial boundaries.

*Step 3 — why and how.*
They were driven by **resources, markets, prestige and military rivalry**, aided by advances in **medicine, transport and weapons**. They used treaties, conquest, protectorates and monopoly companies; rule brought exploitation of labour, violence and economies serving the colonisers.

*Step 4 — the exceptions.*
A few states escaped direct European rule. **Ethiopia** defeated an Italian invasion and stayed independent. **Liberia** — founded by the American Colonization Society and settled by free and freed Black Americans — was likewise **not taken over** by a European power, making it one of the very few African states to remain independent through the colonial era.

**Conclusion:** the Scramble for Africa, formalised at the Berlin Conference, brought about 90 per cent of Africa under European control, yet Ethiopia and Liberia stood out as African states that kept their independence.`,
      quiz: [
        { prompt: "Before the Scramble, Europeans controlled about what share of Africa?", options: ["10 per cent", "90 per cent", "50 per cent", "0 per cent"], correctIndex: 0, explanation: "About 10 per cent at the start." },
        { prompt: "By 1900, Europeans controlled about", options: ["90 per cent of Africa", "10 per cent", "half", "none"], correctIndex: 0, explanation: "The Scramble brought about 90 per cent under control." },
        { prompt: "The competition to seize African colonies is called the", options: ["Scramble for Africa", "Middle Passage", "Bantu migration", "Cold War"], correctIndex: 0, explanation: "The 'Scramble for Africa'." },
        { prompt: "The conference that set rules for claiming African territory met in", options: ["Berlin, 1884–1885", "Rome, 1500", "Cairo, 1980", "London, 1600"], correctIndex: 0, explanation: "The Berlin Conference of 1884–1885." },
        { prompt: "How many African representatives attended the Berlin Conference?", options: ["none", "all African kings", "a majority", "half"], correctIndex: 0, explanation: "No African representatives were present." },
        { prompt: "A motive for imperialism was", options: ["access to raw materials and new markets", "reducing European wealth", "helping African industries", "ending all trade"], correctIndex: 0, explanation: "Resources, markets, prestige and rivalry drove it." },
        { prompt: "The Scramble was aided by developments in", options: ["medicine, transportation and weapons", "farming only", "poetry", "sailing canoes"], correctIndex: 0, explanation: "New medicine, transport and weapons helped Europeans." },
        { prompt: "Belgium's African colony was", options: ["the Congo", "Egypt", "Nigeria", "Madagascar"], correctIndex: 0, explanation: "The Congo was Leopold II's private colony." },
        { prompt: "Which power failed to conquer Ethiopia?", options: ["Italy", "Britain", "France", "Belgium"], correctIndex: 0, explanation: "Italy's attempt on Ethiopia failed." },
        { prompt: "Which two African states avoided direct European colonization?", options: ["Ethiopia and Liberia", "Egypt and Sudan", "Congo and Rhodesia", "Kenya and Uganda"], correctIndex: 0, explanation: "Ethiopia and Liberia stayed independent." },
        { prompt: "The Berlin Conference re-shaped Africa by", options: ["replacing African kingdoms with colonial boundaries", "keeping all old borders", "uniting Africa into one state", "leaving Africa alone"], correctIndex: 0, explanation: "It completely changed the political map." },
        { prompt: "British colonies included", options: ["South Africa, Egypt and Sudan", "the Congo", "Togoland", "Eritrea"], correctIndex: 0, explanation: "Britain held South Africa, Egypt and Sudan." },
        { prompt: "French colonial policy is described as", options: ["assimilation", "paternalism", "indirect rule", "extraction only"], correctIndex: 0, explanation: "France emphasised assimilation." },
        { prompt: "British colonial rule is described as", options: ["indirect rule", "assimilation", "paternalism", "extraction only"], correctIndex: 0, explanation: "Britain often used indirect rule." },
        { prompt: "Methods of colonial control included", options: ["treaties, conquest, protectorates and monopoly companies", "only peaceful trade", "only elections", "no methods"], correctIndex: 0, explanation: "Several methods were used." },
        { prompt: "An effect of colonial rule was", options: ["economies designed to benefit the colonisers", "African-run industry", "no change to governance", "more African independence"], correctIndex: 0, explanation: "Colonial economies served the colonisers." },
        { prompt: "Liberia avoided colonization; it had been founded by the", options: ["American Colonization Society", "British Empire", "Berlin Conference", "League of Nations"], correctIndex: 0, explanation: "Liberia was founded by the ACS and stayed independent." },
        { prompt: "Germany's African colonies included", options: ["Togoland and Cameroon", "the Congo", "Egypt", "Madagascar"], correctIndex: 0, explanation: "Germany held Togoland, Cameroon and others." },
        { prompt: "The Scramble for Africa took place mainly in the", options: ["late nineteenth century", "first century", "tenth century", "twenty-first century"], correctIndex: 0, explanation: "It intensified in the late 1800s." },
        { prompt: "Liberia and Ethiopia are significant because they", options: ["remained independent while most of Africa was colonised", "were the first colonies", "led the Berlin Conference", "had no history"], correctIndex: 0, explanation: "They kept independence through the colonial era." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the change in European control of Africa across the Scramble for Africa.", answerKey: "At the start of the Second Industrial Revolution Europeans controlled about 10 per cent of Africa; by the end of the nineteenth century, after the Scramble, they controlled about 90 per cent. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the significance of the Berlin Conference of 1884–1885.", answerKey: "European nations met, with no African representatives, to set the procedure for claiming African territory; they formalised existing and new claims and completely re-shaped Africa's map, replacing African kingdoms with colonial boundaries. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which two African states avoided direct European colonization?", options: ["Ethiopia and Liberia", "Egypt and Congo", "Kenya and Nigeria", "Sudan and Rhodesia"], correctIndex: 0, answerKey: "Ethiopia and Liberia remained independent. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State three motives that drove European imperialism in Africa.", answerKey: "Any three: access to natural resources/raw materials; new markets for manufactured goods; international prestige and national pride; military dominance over rivals (aided by medicine, transport and weapons). Award 2 marks each.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the European colonization of Africa and explain how Liberia and Ethiopia remained independent.", answerKey: "Award marks for: the Scramble and the shift from about 10 to 90 per cent European control, 5 marks; the Berlin Conference (1884–85) with no African representatives and the re-drawn map, 5 marks; motives and methods of imperialism, 5 marks; effects on African societies, 4 marks; Ethiopia's defeat of Italy and Liberia's origins as an ACS settlement that avoided European takeover, 4 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
