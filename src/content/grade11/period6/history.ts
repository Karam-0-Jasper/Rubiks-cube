import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 11,
// Semester Two, Period VI: Western Imperialism, the Age of Revolution and the
// World Wars. The MoE CONTENTS list has five top-level items, each rebuilt here
// as its own topic: (1) Western Imperialism and Colonialism; (2) the Age of
// Revolution (French and American Revolutions); (3) World War I and the formation
// of the League of Nations; (4) World War II and the formation of the United
// Nations; (5) Liberia as founding member of the League of Nations and the
// United Nations. Notes rebuilt from OpenStax World History and LibreTexts.
// SOURCING FLAG: the approved education sites (OpenStax/LibreTexts) document the
// League of Nations and the United Nations, and confirm that Liberia and Ethiopia
// were the two African states that kept their independence during the Scramble
// for Africa (and that Ethiopia was a League member), but they do NOT directly
// state that Liberia was a "founding member" of the League and the UN. Topic 5
// therefore sources the closest covered themes and flags the Liberia-specific
// claim as the curriculum's framing rather than a directly documented fact.
export const historyG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Western Imperialism, the Age of Revolution and the World Wars",
  summary:
    "Period VI of the MoE Grade 11 History syllabus. Learners study Western imperialism and colonialism and their impact on Africa; the Age of Revolution (the French and American Revolutions); World War I and the League of Nations; World War II and the United Nations; and Liberia's place among the independent nations that joined the League of Nations and the United Nations.",
  topics: [
    {
      // source: LibreTexts — Modern World History: New Perspectives (OERI), 6.6 The European 'Scramble for Africa' (https://human.libretexts.org/Bookshelves/History/World_History/Modern_World_History:_New_Perspectives_(OERI)/06:_Imperialism_-_1800-1900/6.06:_The_European_Scramble_for_Africa) and OpenStax World History Volume 2, 9.2 Motives and Means of Imperialism (https://openstax.org/books/world-history-volume-2/pages/9-2-motives-and-means-of-imperialism)
      slug: "western-imperialism-and-colonialism",
      title: "Western Imperialism and Colonialism",
      objective:
        "By the end of the topic, learners should be able to define imperialism and colonialism, explain their social, political and economic roots, identify the major imperial powers, and analyse the impact of colonialism on Africa and the factors of decolonization.",
      estimatedMinutes: 120,
      notes: `## Imperialism and colonialism defined

- **Imperialism** is a policy of extending a nation's power and control over other lands and peoples.
- **Colonialism** is "a historical expansionist project in which one political power **dominates another land and its peoples** through settlement, military strength, and economic control to **expropriate (take) resources**." Colonialism is an **offshoot (result) of imperialism**.
- Imperialism is an **age-old** practice, but the "**New Imperialism**" of the **late 19th century** was on a huge new scale, driven by the Industrial Revolution.

## The roots of Western imperialism

| Root | Explanation |
| --- | --- |
| **Economic** | industry needed **raw materials** (copper, tin, cotton, rubber, palm oil, cocoa) and **captive markets** to sell manufactured goods |
| **Political** | national **prestige, pride** and **military dominance** over rival powers |
| **Social/ideological** | the belief in a "**civilizing mission**" — that "civilized" Europeans had a duty to bring Western culture (and Christianity) to the colonized, casting local peoples as **inferior** |

## The major imperial powers

- The chief Western imperial powers were **Britain, France, Belgium and Germany** (also Portugal, Italy and Spain).
- **Britain's** model in **India** — colony as a source of raw materials and a captive market — was copied by others.

## The Scramble for Africa

- The "**Scramble for Africa**" was the rush of European powers to seize African colonies at the end of the 19th century.
- At the **Berlin Conference (1884–1885)**, European nations "**simply allotted different parts of the continent to one another**" — **without any input from Africans**.
- By about 1900 Europeans controlled about **90%** of Africa; only **Liberia and Ethiopia** kept their independence.

## Impact of colonialism on Africa

- **Economic:** African resources were **taken** for European industry; economies were reshaped to serve the "home country," not Africans.
- **Political:** African states lost their **independence**; borders were drawn by Europeans, ignoring African peoples.
- **Social/cultural:** colonialism cast African cultures as **inferior** ("cultural degradation"), disrupting societies; its effects (**coloniality**) outlast formal rule.

## Decolonization

- **Decolonization** (mostly after **World War II**) was the process by which colonies won back independence.
- **Internal factors:** rising **African nationalism** and independence movements.
- **External factors:** the weakening of Europe after the World Wars, and the **Atlantic Charter (1941)**, which promised **self-determination** for all peoples.

## Common errors and misconceptions

- **Confusing imperialism and colonialism** — **imperialism** is the policy of domination; **colonialism** is the system of rule and settlement that results from it.
- **Thinking Africans agreed to the borders** — the Berlin Conference divided Africa **without African input**.
- **Believing colonialism's effects ended with independence** — "coloniality" (lasting effects) survives colonialism.`,
      workedExample: `**Question:** Explain the roots of Western imperialism and its impact on Africa.

**Solution**

*Step 1 — define the terms.*
**Imperialism** is the policy of extending control over other lands; **colonialism**, its offshoot, is the domination of a land and its peoples to take their resources.

*Step 2 — the roots.*
The roots were **economic** (raw materials and captive markets for industry), **political** (prestige and military dominance) and **social/ideological** (the "civilizing mission" that cast others as inferior).

*Step 3 — the Scramble for Africa.*
Driven by these motives, Europe rushed to seize Africa; at the **Berlin Conference (1884–1885)** the powers divided the continent **without African input**, and by 1900 controlled about **90%** — only **Liberia and Ethiopia** stayed free.

*Step 4 — the impact.*
Colonialism **took African resources**, destroyed African **independence**, imposed European borders, and cast African cultures as **inferior** — effects (coloniality) that outlasted formal rule until **decolonization** after the World Wars.

**Conclusion:** Western imperialism, rooted in economic, political and ideological motives, produced the colonial conquest of Africa at the Berlin Conference, with deep and lasting harm, reversed only by twentieth-century decolonization.`,
      quiz: [
        { prompt: "Imperialism is the policy of", options: ["extending a nation's power over other lands and peoples", "sharing power equally", "abolishing all government", "trading fairly"], correctIndex: 0, explanation: "Extending control over others." },
        { prompt: "Colonialism is best described as", options: ["domination of a land and its peoples to take resources", "peaceful trade", "a religious movement", "a sports league"], correctIndex: 0, explanation: "Domination and resource extraction." },
        { prompt: "Colonialism is an offshoot (result) of", options: ["imperialism", "the Enlightenment", "feudalism", "the Reformation"], correctIndex: 0, explanation: "Colonialism results from imperialism." },
        { prompt: "The 'New Imperialism' of the late 19th century was driven largely by", options: ["the Industrial Revolution", "the fall of Rome", "the Crusades", "the Bronze Age"], correctIndex: 0, explanation: "Industry drove the new imperialism." },
        { prompt: "An economic root of imperialism was the need for", options: ["raw materials and captive markets", "more religion", "cooler climates", "smaller armies"], correctIndex: 0, explanation: "Industry needed materials and markets." },
        { prompt: "The 'civilizing mission' was the idea that Europeans had a duty to", options: ["bring Western culture to the colonized, seen as inferior", "learn from Africans", "leave Africa alone", "trade equally"], correctIndex: 0, explanation: "A social/ideological justification for empire." },
        { prompt: "A political root of imperialism was", options: ["national prestige and military dominance", "religious tolerance", "free elections", "world peace"], correctIndex: 0, explanation: "Prestige and rivalry drove empire." },
        { prompt: "The major Western imperial powers included", options: ["Britain, France, Belgium and Germany", "Persia and Egypt", "China and Japan only", "Sparta and Athens"], correctIndex: 0, explanation: "The chief powers in Africa." },
        { prompt: "Britain's imperial model was first developed in", options: ["India", "Australia only", "Canada only", "Brazil"], correctIndex: 0, explanation: "India was the model colony." },
        { prompt: "The rush to seize African colonies was the", options: ["Scramble for Africa", "Age of Reason", "Reformation", "Renaissance"], correctIndex: 0, explanation: "The Scramble for Africa." },
        { prompt: "European powers divided Africa at the", options: ["Berlin Conference (1884–1885)", "Council of Trent", "Congress of Vienna", "Diet of Worms"], correctIndex: 0, explanation: "The Berlin Conference." },
        { prompt: "At the Berlin Conference, Africa was divided", options: ["without any input from Africans", "by African kings", "by the United Nations", "by vote of the people"], correctIndex: 0, explanation: "Africans had no say." },
        { prompt: "By about 1900, Europeans controlled about ___ of Africa.", options: ["90%", "10%", "50%", "5%"], correctIndex: 0, explanation: "Around 90 per cent." },
        { prompt: "The two African states that kept their independence were", options: ["Liberia and Ethiopia", "Egypt and Sudan", "Ghana and Mali", "Kenya and Nigeria"], correctIndex: 0, explanation: "Only Liberia and Ethiopia stayed free." },
        { prompt: "An economic impact of colonialism on Africa was that", options: ["African resources were taken for European industry", "Africa industrialised rapidly", "Africa grew rich from it", "trade stopped entirely"], correctIndex: 0, explanation: "Resources were extracted for Europe." },
        { prompt: "A social/cultural impact of colonialism was", options: ["casting African cultures as inferior (cultural degradation)", "respect for African cultures", "no change at all", "the spread of African languages in Europe"], correctIndex: 0, explanation: "It degraded African cultures." },
        { prompt: "The process by which colonies won back independence was", options: ["decolonization", "colonization", "the Scramble", "industrialisation"], correctIndex: 0, explanation: "Decolonization." },
        { prompt: "An internal factor of decolonization was", options: ["rising African nationalism", "the Berlin Conference", "the Industrial Revolution", "the civilizing mission"], correctIndex: 0, explanation: "African nationalism and independence movements." },
        { prompt: "An external factor of decolonization was", options: ["the weakening of Europe after the World Wars and the Atlantic Charter's promise of self-determination", "the fall of Rome", "the Reformation", "the Renaissance"], correctIndex: 0, explanation: "Weak post-war Europe and the Atlantic Charter." },
        { prompt: "'Coloniality' means", options: ["the lasting effects of colonialism after formal rule ends", "a type of colony", "a colonial law", "an African kingdom"], correctIndex: 0, explanation: "Effects that survive colonialism." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between imperialism and colonialism.", answerKey: "Imperialism is the policy of extending a nation's power and control over other lands and peoples. Colonialism, an offshoot of imperialism, is the actual system of dominating a land and its peoples through settlement, military strength and economic control to take their resources. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State one economic, one political and one social root of Western imperialism.", answerKey: "Economic — the need for raw materials and captive markets for industry. Political — national prestige, pride and military dominance over rivals. Social/ideological — the 'civilizing mission' casting the colonized as inferior. Award marks up to 4.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "European powers divided Africa, without African input, at the", options: ["Berlin Conference (1884–1885)", "Congress of Vienna", "Council of Trent", "Diet of Worms"], correctIndex: 0, answerKey: "The Berlin Conference. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe two impacts of colonialism on Africa and name the two states that stayed independent.", answerKey: "Impacts (any two): resources taken for European industry; loss of independence and European-drawn borders; cultural degradation (African cultures cast as inferior); lasting effects (coloniality). The two independent states were Liberia and Ethiopia. Award 1 mark per impact and 1 per state.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss Western imperialism and colonialism — their roots, the major powers, the impact on Africa, and the factors of decolonization.", answerKey: "Award marks for: defining imperialism and colonialism, 3 marks; the economic, political and social roots, 6 marks; the major powers and the Scramble for Africa/Berlin Conference (dividing Africa without African input, ~90% by 1900, only Liberia and Ethiopia free), 6 marks; the economic, political and social impact on Africa, 5 marks; the internal and external factors of decolonization, 3 marks; conclusion, 2 marks. Confusing imperialism and colonialism should cost marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 7.3 Revolutions: America, France, and Haiti (https://openstax.org/books/world-history-volume-2/pages/7-3-revolutions-america-france-and-haiti)
      slug: "the-age-of-revolution",
      title: "The Age of Revolution: The American and French Revolutions",
      objective:
        "By the end of the topic, learners should be able to explain the causes and impact of the American Revolution and the French Revolution.",
      estimatedMinutes: 120,
      notes: `## The Age of Revolution

- The late 18th century was an **Age of Revolution** in which **Enlightenment ideas** (natural rights, liberty, consent of the governed) inspired peoples to overthrow old orders.
- The two great examples are the **American Revolution** and the **French Revolution**.

## The American Revolution (1775–1783)

**Causes**
- It "resulted directly from attempts to **reform the British Empire** after the **Seven Years' War**," which had left Britain deep in **debt**.
- To raise money, Britain **taxed the colonies** (e.g. on tea and stamps); colonists protested "**no taxation without representation**."
- **Enlightenment ideas** (Locke's natural rights, consent of the governed) shaped colonial demands.

**Course and impact**
- The colonies declared independence in **1776** (Declaration of Independence) and, with French help, won the war.
- Impact: it created the **United States**, a **republic** founded on the ideas of **natural rights and government by consent**, and **inspired** other revolutions — including in France.

## The French Revolution (1789)

**Causes**
- **Debt** from wars (including French support for the American Revolution) forced King **Louis XVI** to call the **Estates-General in 1789** to raise money.
- French society was divided into **three estates**: the **First Estate** (clergy, under 1% of people but ~10% of land, largely **tax-exempt**), the **Second Estate** (nobility, 3–4% of people, ~30% of land, **tax-exempt**) and the **Third Estate** (everyone else, who paid the taxes).
- **Wealth inequality**, **exclusion from power** and an **economic crisis** angered the Third Estate; **Enlightenment ideas** of natural rights and freedom from tyranny inspired them.

**Course and impact**
- The Third Estate broke away, the Bastille was stormed (1789), and the revolution proclaimed **"Liberty, Equality, Fraternity"** and the **Declaration of the Rights of Man**.
- Impact: it **ended absolute monarchy and noble privilege** in France and, for the first time in Europe, "**extended the experiment with democracy to include the lower classes**," inspiring revolutions and reform across Europe and beyond.

## Comparison

| Feature | American Revolution | French Revolution |
| --- | --- | --- |
| Date | 1775–1783 (declared 1776) | from 1789 |
| Trigger | British taxes after the Seven Years' War | royal debt; the Estates-General |
| Against | British colonial rule | absolute monarchy and noble privilege |
| Result | independent United States (a republic) | end of absolute monarchy; rights of the people |

## Common errors and misconceptions

- **Thinking the two revolutions are unrelated** — the American Revolution helped **inspire** the French.
- **Forgetting the Enlightenment** — both drew on **natural rights and consent of the governed**.
- **Confusing the estates** — in France the **Third Estate** (commoners) carried the tax burden while the clergy and nobles were largely **exempt**.`,
      workedExample: `**Question:** Compare the causes and impact of the American and French Revolutions.

**Solution**

*Step 1 — the American Revolution.*
It arose from Britain's attempt to **tax its colonies** after the costly **Seven Years' War** ("no taxation without representation"), shaped by **Enlightenment** ideas. The colonies declared independence in **1776** and won, creating the **United States**, a republic founded on natural rights.

*Step 2 — the French Revolution.*
Royal **debt** forced Louis XVI to call the **Estates-General (1789)**. French society's **three estates** left the **Third Estate** (commoners) paying the taxes while clergy and nobles were exempt; **inequality**, **exclusion from power** and **Enlightenment ideas** sparked revolution. It **ended absolute monarchy and noble privilege** and proclaimed the rights of the people.

*Step 3 — the link and impact.*
The American Revolution **inspired** the French; both spread the ideas of **natural rights, liberty and government by consent**, and the French Revolution first extended democracy to the **lower classes** in Europe.

**Conclusion:** both revolutions, rooted in taxation grievances and Enlightenment ideas, overthrew old orders — the American creating an independent republic, the French ending monarchy and privilege — and together shaped modern democracy.`,
      quiz: [
        { prompt: "The late 18th century is called the", options: ["Age of Revolution", "Age of Faith", "Bronze Age", "Dark Ages"], correctIndex: 0, explanation: "The Age of Revolution." },
        { prompt: "Both revolutions drew on the ideas of the", options: ["Enlightenment", "Middle Ages", "Roman Republic", "Reformation"], correctIndex: 0, explanation: "Enlightenment ideas inspired them." },
        { prompt: "The American Revolution followed which costly war?", options: ["the Seven Years' War", "World War I", "the Punic Wars", "the Hundred Years' War"], correctIndex: 0, explanation: "Debt from the Seven Years' War." },
        { prompt: "Britain tried to raise money by", options: ["taxing the colonies", "freeing the colonies", "selling India", "borrowing from Africa"], correctIndex: 0, explanation: "New colonial taxes triggered protest." },
        { prompt: "The colonists' slogan was", options: ["no taxation without representation", "liberty, equality, fraternity", "veni, vidi, vici", "faith alone"], correctIndex: 0, explanation: "'No taxation without representation.'" },
        { prompt: "The American colonies declared independence in", options: ["1776", "1789", "1815", "1848"], correctIndex: 0, explanation: "The Declaration of Independence, 1776." },
        { prompt: "The American Revolution created the", options: ["United States (a republic)", "British Commonwealth", "Roman Republic", "German Empire"], correctIndex: 0, explanation: "It founded the United States." },
        { prompt: "The American Revolution helped inspire the", options: ["French Revolution", "fall of Rome", "Reformation", "Renaissance"], correctIndex: 0, explanation: "It inspired France." },
        { prompt: "The French Revolution began in", options: ["1789", "1776", "1815", "1848"], correctIndex: 0, explanation: "It began in 1789." },
        { prompt: "Royal debt forced Louis XVI to call the", options: ["Estates-General (1789)", "Council of Trent", "League of Nations", "Berlin Conference"], correctIndex: 0, explanation: "The Estates-General met in 1789." },
        { prompt: "French society was divided into", options: ["three estates", "two nations", "five castes", "one class"], correctIndex: 0, explanation: "Clergy, nobility and commoners." },
        { prompt: "The First Estate was the", options: ["clergy", "nobility", "commoners", "peasants only"], correctIndex: 0, explanation: "The Catholic clergy." },
        { prompt: "The Second Estate was the", options: ["nobility", "clergy", "commoners", "merchants only"], correctIndex: 0, explanation: "The nobility." },
        { prompt: "The Third Estate (commoners) was mostly", options: ["required to pay the taxes", "exempt from taxes", "made of nobles", "made of clergy"], correctIndex: 0, explanation: "Commoners bore the tax burden." },
        { prompt: "The clergy and nobility were largely", options: ["exempt from taxes", "the poorest group", "foreigners", "slaves"], correctIndex: 0, explanation: "The first two estates were tax-exempt." },
        { prompt: "The slogan of the French Revolution was", options: ["Liberty, Equality, Fraternity", "no taxation without representation", "faith alone", "veni, vidi, vici"], correctIndex: 0, explanation: "'Liberté, Égalité, Fraternité.'" },
        { prompt: "The French Revolution issued the", options: ["Declaration of the Rights of Man", "Twelve Tables", "Ninety-Five Theses", "Atlantic Charter"], correctIndex: 0, explanation: "The Declaration of the Rights of Man." },
        { prompt: "The French Revolution ended", options: ["absolute monarchy and noble privilege in France", "all wars", "the Roman Empire", "the Middle Ages"], correctIndex: 0, explanation: "It ended absolute monarchy and privilege." },
        { prompt: "The French Revolution was notable for extending democracy to the", options: ["lower classes for the first time in Europe", "clergy only", "nobles only", "foreign kings"], correctIndex: 0, explanation: "It included the lower classes." },
        { prompt: "A common error is to think the two revolutions were", options: ["unrelated", "inspired by the Enlightenment", "about rights", "in the late 18th century"], correctIndex: 0, explanation: "The American inspired the French." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two causes of the American Revolution.", answerKey: "Any two: British attempts to reform/tax the empire after the Seven Years' War; British debt leading to new colonial taxes; 'no taxation without representation'; Enlightenment ideas of natural rights and consent of the governed. Award 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the causes of the French Revolution.", answerKey: "Royal debt (partly from supporting the American Revolution) forced Louis XVI to call the Estates-General in 1789; French society's three estates left the Third Estate (commoners) paying taxes while clergy and nobles were exempt; wealth inequality, exclusion from power, an economic crisis and Enlightenment ideas sparked revolution. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In France, which estate carried the tax burden?", options: ["the Third Estate (commoners)", "the First Estate (clergy)", "the Second Estate (nobility)", "none paid tax"], correctIndex: 0, answerKey: "The Third Estate. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the main impact of the American Revolution and of the French Revolution.", answerKey: "American: created the independent United States, a republic founded on natural rights and government by consent, inspiring other revolutions. French: ended absolute monarchy and noble privilege and, for the first time in Europe, extended democracy to the lower classes, spreading revolutionary ideas. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Compare the causes and impact of the American and French Revolutions.", answerKey: "Award marks for: the Age of Revolution and the Enlightenment background, 3 marks; American Revolution causes (Seven Years' War debt, colonial taxes, 'no taxation without representation', natural rights) and impact (independent US republic), 8 marks; French Revolution causes (royal debt, Estates-General 1789, the three estates and tax inequality, Enlightenment ideas) and impact (end of absolute monarchy and privilege, rights of man, democracy to the lower classes), 9 marks; the link (American inspired French) and conclusion, 3 marks. Treating the two as unrelated caps at 16.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 12.1 Recovering from World War I (https://openstax.org/books/world-history-volume-2/pages/12-1-recovering-from-world-war-i)
      slug: "world-war-i-and-the-league-of-nations",
      title: "World War I and the Formation of the League of Nations",
      objective:
        "By the end of the topic, learners should be able to explain the causes and consequences of World War I and the formation and weaknesses of the League of Nations.",
      estimatedMinutes: 110,
      notes: `## World War I (1914–1918)

- **World War I** was a global war fought mainly in Europe between the **Allies** (Britain, France, Russia and later the United States) and the **Central Powers** (Germany, Austria-Hungary and their allies).

## Causes of World War I

The long-term causes are often summarised as **M-A-I-N**:

- **Militarism** — a **arms race** and the glorification of military power.
- **Alliances** — rival alliance systems that dragged many nations into war.
- **Imperialism** — competition for colonies and markets.
- **Nationalism** — national rivalries and pride, especially in the Balkans.
- The **spark (immediate cause)** was the **assassination of Archduke Franz Ferdinand** of Austria-Hungary in **1914**, which set the alliances into motion.

## Consequences of the war

- Catastrophic losses: military dead of **nine to ten million**, civilian dead about **ten million**, and over **21 million wounded**.
- Physical destruction across Belgium and eastern France.
- The **Treaty of Versailles (1919)** ended the war: it created **new nations** (Poland, Czechoslovakia, Yugoslavia), stripped Germany of territory, limited its army to **100,000 troops**, imposed **reparations** (over $30 billion) and a **war-guilt clause** blaming Germany.

## The League of Nations

- The United States president **Woodrow Wilson** proposed, in his **Fourteen Points**, a **League of Nations** — a forum "where member nations could come together for **mutual security** and work out problems **without resorting to war**."
- The **League of Nations** was established in **1920** to settle disputes and prevent future wars.

## Weaknesses of the League

- The **United States did not join** (its Senate rejected the treaty), which badly weakened the League.
- The League **lacked enforcement power** (no army of its own), so it could not stop the aggression of the 1930s — a key reason it failed to prevent **World War II**.

## Common errors and misconceptions

- **Thinking the assassination alone caused the war** — it was the **spark**; the deeper causes were **militarism, alliances, imperialism and nationalism (MAIN)**.
- **Believing the League was strong** — it had **no army** and the **US never joined**, so it was weak.
- **Confusing the Treaty of Versailles with the League** — the **treaty** ended the war and punished Germany; the **League** was the new organisation meant to keep peace.`,
      workedExample: `**Question:** Explain the causes of World War I and why the League of Nations was formed but proved weak.

**Solution**

*Step 1 — the causes (MAIN).*
The long-term causes were **Militarism**, **Alliances**, **Imperialism** and **Nationalism**; the **spark** was the **assassination of Archduke Franz Ferdinand in 1914**, which triggered the alliances.

*Step 2 — the war and its end.*
WWI (1914–1918) killed about **nine to ten million** soldiers and about ten million civilians. The **Treaty of Versailles (1919)** ended it, punishing Germany with lost land, a tiny army, huge **reparations** and a **war-guilt clause**.

*Step 3 — the League.*
**Woodrow Wilson's Fourteen Points** proposed a **League of Nations** for **mutual security** without war; it was set up in **1920**.

*Step 4 — its weakness.*
The **United States never joined**, and the League had **no army to enforce its decisions**, so it could not stop aggression in the 1930s.

**Conclusion:** World War I grew from militarism, alliances, imperialism and nationalism, sparked in 1914; it led to the punitive Treaty of Versailles and the League of Nations — a peace body fatally weakened by US absence and lack of enforcement power.`,
      quiz: [
        { prompt: "World War I was fought from", options: ["1914 to 1918", "1939 to 1945", "1789 to 1799", "1861 to 1865"], correctIndex: 0, explanation: "1914–1918." },
        { prompt: "The two sides were the Allies and the", options: ["Central Powers", "Axis Powers", "United Nations", "League of Nations"], correctIndex: 0, explanation: "Allies vs Central Powers." },
        { prompt: "The long-term causes of WWI are summarised as", options: ["MAIN (militarism, alliances, imperialism, nationalism)", "the three estates", "the seven liberal arts", "the four elements"], correctIndex: 0, explanation: "Militarism, Alliances, Imperialism, Nationalism." },
        { prompt: "The spark that started WWI was the assassination of", options: ["Archduke Franz Ferdinand", "Julius Caesar", "Abraham Lincoln", "Louis XVI"], correctIndex: 0, explanation: "Franz Ferdinand, in 1914." },
        { prompt: "'Militarism' means", options: ["an arms race and glorifying military power", "trading fairly", "religious tolerance", "farming"], correctIndex: 0, explanation: "Building and glorifying armed forces." },
        { prompt: "'Alliances' contributed to WWI by", options: ["dragging many nations into the war", "keeping the peace", "ending imperialism", "abolishing armies"], correctIndex: 0, explanation: "Alliance systems widened the war." },
        { prompt: "About how many soldiers died in WWI?", options: ["nine to ten million", "one thousand", "one hundred", "fifty million"], correctIndex: 0, explanation: "Nine to ten million military dead." },
        { prompt: "The treaty that ended WWI was the", options: ["Treaty of Versailles (1919)", "Atlantic Charter", "Treaty of Trent", "Peace of Nicias"], correctIndex: 0, explanation: "The Treaty of Versailles." },
        { prompt: "The Treaty of Versailles blamed the war on", options: ["Germany (the war-guilt clause)", "Britain", "France", "the United States"], correctIndex: 0, explanation: "The war-guilt clause blamed Germany." },
        { prompt: "The treaty limited Germany's army to", options: ["100,000 troops", "one million troops", "no limit", "ten soldiers"], correctIndex: 0, explanation: "100,000 troops." },
        { prompt: "Payments Germany had to make for war damage were called", options: ["reparations", "tithes", "indulgences", "tribute of Rome"], correctIndex: 0, explanation: "Reparations of over $30 billion." },
        { prompt: "The League of Nations was proposed by", options: ["Woodrow Wilson (in his Fourteen Points)", "Bismarck", "Napoleon", "Hitler"], correctIndex: 0, explanation: "Wilson's Fourteen Points." },
        { prompt: "The League of Nations was established in", options: ["1920", "1945", "1789", "1919 as a war"], correctIndex: 0, explanation: "Founded in 1920." },
        { prompt: "The aim of the League was to", options: ["settle disputes and prevent war", "conquer Africa", "spread the slave trade", "start World War II"], correctIndex: 0, explanation: "Mutual security without war." },
        { prompt: "A key weakness of the League was that", options: ["the United States did not join", "it had a huge army", "every nation obeyed it", "it ruled the world"], correctIndex: 0, explanation: "The US never joined." },
        { prompt: "The League also failed because it", options: ["lacked enforcement power (no army)", "had too many soldiers", "was based in Africa", "banned all trade"], correctIndex: 0, explanation: "It could not enforce its decisions." },
        { prompt: "The League's weakness helped lead to", options: ["World War II", "the fall of Rome", "the Reformation", "the Renaissance"], correctIndex: 0, explanation: "It could not stop 1930s aggression." },
        { prompt: "A common error is to think WWI was caused only by", options: ["the assassination (the spark)", "militarism", "alliances", "nationalism"], correctIndex: 0, explanation: "The assassination was only the spark; MAIN were the deeper causes." },
        { prompt: "New nations created by the Treaty of Versailles included", options: ["Poland, Czechoslovakia and Yugoslavia", "Germany and Austria", "Britain and France", "Liberia and Ethiopia"], correctIndex: 0, explanation: "New states emerged from the old empires." },
        { prompt: "The difference between the treaty and the League is that the treaty", options: ["ended the war and punished Germany; the League was the peace organisation", "was the peace organisation", "created the UN", "started WWI"], correctIndex: 0, explanation: "Treaty ended the war; League kept peace." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the four long-term causes of World War I and its immediate spark.", answerKey: "The four long-term causes (MAIN): Militarism, Alliances, Imperialism, Nationalism. The immediate spark: the assassination of Archduke Franz Ferdinand of Austria-Hungary in 1914. Award marks up to 4.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe the main terms of the Treaty of Versailles.", answerKey: "It created new nations (Poland, Czechoslovakia, Yugoslavia); stripped Germany of territory; limited Germany's army to 100,000 troops; imposed reparations (over $30 billion); and included a war-guilt clause blaming Germany. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The League of Nations was established in", options: ["1920", "1945", "1919", "1789"], correctIndex: 0, answerKey: "1920. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why did the League of Nations prove weak?", answerKey: "The United States did not join (its Senate rejected the treaty), badly weakening it; and the League lacked enforcement power (no army of its own), so it could not stop the aggression of the 1930s. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the causes and consequences of World War I and the formation and weaknesses of the League of Nations.", answerKey: "Award marks for: the long-term causes (MAIN) and the spark (Franz Ferdinand, 1914), 7 marks; the consequences (casualties, destruction, Treaty of Versailles terms), 6 marks; the formation of the League (Wilson's Fourteen Points, 1920, aim of mutual security), 5 marks; its weaknesses (US absence, no enforcement power, failure to prevent WWII), 5 marks; conclusion, 2 marks. Blaming only the assassination caps at 16.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — History of World Civilization II (Lumen), 14.4 Causes of World War II (https://human.libretexts.org/Courses/Lumen_Learning/Book:_History_of_World_Civilization_II-2_(Lumen)/14:_12:_World_War_II/14.4:_Causes_of_World_War_II) and OpenStax World History Volume 2, 12.1 Recovering from World War I (https://openstax.org/books/world-history-volume-2/pages/12-1-recovering-from-world-war-i)
      slug: "world-war-ii-and-the-united-nations",
      title: "World War II and the Formation of the United Nations",
      objective:
        "By the end of the topic, learners should be able to explain the causes of World War II and the formation and aims of the United Nations.",
      estimatedMinutes: 110,
      notes: `## World War II (1939–1945)

- **World War II** was fought between the **Allies** (Britain, France, the Soviet Union, the United States and others) and the **Axis** powers (**Germany, Italy and Japan**).

## Causes of World War II

- **The harsh Treaty of Versailles** — its punishing terms and the war-guilt clause left Germany bitter and eager to overturn it.
- **The Great Depression** — after the 1929 crash, "the economies of the West collapsed," causing mass unemployment and political instability.
- **The rise of fascism and dictatorship** — **Benito Mussolini** set up a **fascist** dictatorship in Italy (1922); **Adolf Hitler** and the **Nazi** party preached "a racist brand of fascism," promised to overturn Versailles and demanded **Lebensraum** (living space).
- **Aggression and appeasement** — Hitler annexed **Austria (1938)** and seized **Czechoslovakia** while Britain and France **appeased** him (the Munich agreement).
- **The Axis** — Germany, Italy and Japan formed the **Rome-Berlin-Tokyo Axis (1936–37)**.
- **The weakness of the League of Nations**, which could not stop this aggression.
- The war began with the German **invasion of Poland in 1939**.

## The United Nations (1945)

- After the war, the victors created the **United Nations (UN)** to **replace the failed League of Nations**.
- Delegates from many nations met at **San Francisco in April 1945** to design the UN.
- Unlike the League, the UN "was given the capacity to **enforce itself militarily**."
- The **UN Charter** set out principles of:
  - **peace through communication and collective action**;
  - **self-determination** (autonomy) for peoples;
  - **respect for human rights** regardless of race, religion, gender or ethnicity.

## Why the UN was stronger than the League

- **Great-power membership** (including the United States) and a **Security Council**.
- The power to take **military action** to keep the peace, which the League lacked.

## Common errors and misconceptions

- **Thinking WWII had a single cause** — it grew from the **harsh Versailles treaty, the Depression, fascism, aggression/appeasement and a weak League**.
- **Confusing the League and the UN** — the **League (1920)** failed; the **UN (1945)** replaced it with real enforcement power.
- **Believing appeasement stopped Hitler** — appeasement **encouraged** further aggression, helping cause the war.`,
      workedExample: `**Question:** Explain the causes of World War II and why the United Nations was created.

**Solution**

*Step 1 — the causes.*
WWII grew from the **harsh Treaty of Versailles** (leaving Germany bitter), the **Great Depression** (economic collapse and instability), the **rise of fascism** (**Mussolini** and **Hitler**), **aggression and appeasement** (Hitler took Austria and Czechoslovakia while Britain and France appeased him), the **Axis** alliance, and the **weak League of Nations**. It began with the German **invasion of Poland in 1939**.

*Step 2 — the war.*
It was fought between the **Allies** and the **Axis** (Germany, Italy, Japan) from **1939 to 1945**.

*Step 3 — the United Nations.*
After the war, the victors created the **United Nations** at **San Francisco (1945)** to **replace the failed League**, this time with the power to **enforce peace militarily**.

*Step 4 — its principles.*
The **UN Charter** proclaimed **peace and collective action**, **self-determination**, and **respect for human rights** for all.

**Conclusion:** World War II arose from the harsh peace of Versailles, economic collapse, fascism, aggression and a weak League; out of it came the United Nations, a stronger peace body with real enforcement power and a charter of human rights.`,
      quiz: [
        { prompt: "World War II was fought from", options: ["1939 to 1945", "1914 to 1918", "1789 to 1799", "1861 to 1865"], correctIndex: 0, explanation: "1939–1945." },
        { prompt: "The Axis powers were", options: ["Germany, Italy and Japan", "Britain, France and the USA", "Russia and China", "Liberia and Ethiopia"], correctIndex: 0, explanation: "The Rome-Berlin-Tokyo Axis." },
        { prompt: "One cause of WWII was the harsh terms of the", options: ["Treaty of Versailles", "Atlantic Charter", "Council of Trent", "Berlin Conference"], correctIndex: 0, explanation: "Versailles left Germany bitter." },
        { prompt: "The economic disaster that fuelled WWII was the", options: ["Great Depression", "Industrial Revolution", "Renaissance", "Reformation"], correctIndex: 0, explanation: "The Depression after 1929." },
        { prompt: "The fascist dictator of Italy was", options: ["Benito Mussolini", "Adolf Hitler", "Woodrow Wilson", "Bismarck"], correctIndex: 0, explanation: "Mussolini founded fascism in Italy." },
        { prompt: "The Nazi leader who demanded Lebensraum was", options: ["Adolf Hitler", "Mussolini", "Cavour", "Locke"], correctIndex: 0, explanation: "Hitler and the Nazi party." },
        { prompt: "'Lebensraum' means", options: ["living space (for expansion)", "world peace", "free trade", "human rights"], correctIndex: 0, explanation: "Living space Hitler demanded." },
        { prompt: "The policy of giving in to Hitler's demands was called", options: ["appeasement", "containment", "imperialism", "colonialism"], correctIndex: 0, explanation: "Appeasement (e.g. Munich)." },
        { prompt: "Hitler annexed Austria in", options: ["1938", "1918", "1945", "1789"], correctIndex: 0, explanation: "The annexation of Austria, 1938." },
        { prompt: "World War II began with the German invasion of", options: ["Poland (1939)", "France (1918)", "Russia (1905)", "Britain (1939)"], correctIndex: 0, explanation: "The invasion of Poland, 1939." },
        { prompt: "The League of Nations' failure helped cause WWII because it", options: ["could not stop aggression", "had a huge army", "banned all war", "ruled the world"], correctIndex: 0, explanation: "It lacked power to stop aggression." },
        { prompt: "After WWII, the victors created the", options: ["United Nations", "League of Nations", "Holy Roman Empire", "Axis"], correctIndex: 0, explanation: "The UN replaced the League." },
        { prompt: "The UN was designed at a 1945 conference in", options: ["San Francisco", "Berlin", "Versailles", "Geneva"], correctIndex: 0, explanation: "San Francisco, April 1945." },
        { prompt: "The UN replaced the", options: ["League of Nations", "Roman Senate", "Berlin Conference", "Congress of Vienna"], correctIndex: 0, explanation: "It replaced the failed League." },
        { prompt: "Unlike the League, the UN could", options: ["enforce itself militarily", "not act at all", "only send letters", "conquer Africa"], correctIndex: 0, explanation: "The UN has enforcement power." },
        { prompt: "A principle of the UN Charter is", options: ["respect for human rights regardless of race, religion, gender or ethnicity", "the right to conquer", "the war-guilt clause", "colonial rule"], correctIndex: 0, explanation: "Human rights for all." },
        { prompt: "Another UN principle is", options: ["self-determination (autonomy) for peoples", "the divine right of kings", "the caste system", "imperialism"], correctIndex: 0, explanation: "Self-determination for peoples." },
        { prompt: "The UN is stronger than the League partly because it has a", options: ["Security Council and great-power membership", "smaller budget", "no members", "no charter"], correctIndex: 0, explanation: "Great powers and a Security Council." },
        { prompt: "A common error is to think WWII had", options: ["a single cause", "many causes", "the Depression as a factor", "fascism as a factor"], correctIndex: 0, explanation: "It grew from many causes." },
        { prompt: "Appeasement is best judged to have", options: ["encouraged further aggression", "stopped Hitler", "caused the Depression", "created the League"], correctIndex: 0, explanation: "It emboldened Hitler." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three causes of World War II.", answerKey: "Any three: the harsh Treaty of Versailles; the Great Depression; the rise of fascism/dictatorship (Mussolini, Hitler); aggression and appeasement (Austria, Czechoslovakia, Munich); the Axis alliance; the weakness of the League of Nations. (The war began with the invasion of Poland, 1939.) Award marks up to 4.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How and where was the United Nations created, and how did it differ from the League?", answerKey: "It was designed by delegates of many nations at San Francisco in April 1945 to replace the failed League of Nations; unlike the League, it was given the capacity to enforce itself militarily (with great-power membership and a Security Council). Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "World War II began with the German invasion of", options: ["Poland (1939)", "France (1918)", "Russia (1905)", "Britain (1939)"], correctIndex: 0, answerKey: "The invasion of Poland, 1939. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State three principles of the United Nations Charter.", answerKey: "Peace through communication and collective action; self-determination (autonomy) for peoples; respect for human rights regardless of race, religion, gender or ethnicity. Award marks up to 4.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the causes of World War II and the formation and aims of the United Nations.", answerKey: "Award marks for: the causes (harsh Versailles, Great Depression, rise of fascism/Mussolini/Hitler, aggression and appeasement, the Axis, weak League, invasion of Poland 1939), 10 marks; the formation of the UN (San Francisco 1945, replacing the League, military enforcement power), 6 marks; the UN's principles (peace/collective action, self-determination, human rights), 5 marks; how the UN improved on the League, 2 marks; conclusion, 2 marks. Giving WWII a single cause caps at 16.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — Modern World History: New Perspectives (OERI), 6.6 The European 'Scramble for Africa' (https://human.libretexts.org/Bookshelves/History/World_History/Modern_World_History:_New_Perspectives_(OERI)/06:_Imperialism_-_1800-1900/6.06:_The_European_Scramble_for_Africa) and OpenStax World History Volume 2, 12.1 Recovering from World War I (League of Nations) and 12/14 (United Nations). SOURCING FLAG: the approved sites confirm the League of Nations (1920) and the United Nations (1945), and confirm that only Liberia and Ethiopia kept their independence during the Scramble for Africa (Ethiopia being a League member), but they do NOT directly state that Liberia was a 'founding member' of either body. That specific claim is the curriculum's framing and is flagged below, not asserted as documented by the approved sources.
      slug: "liberia-in-the-league-of-nations-and-the-united-nations",
      title: "Liberia and the League of Nations and the United Nations",
      objective:
        "By the end of the topic, learners should be able to explain Liberia's place among the independent nations that joined the League of Nations and the United Nations, using the sourced context of those organisations.",
      estimatedMinutes: 100,
      notes: `## Why this topic matters

The curriculum asks learners to study **Liberia as a founding member of the League of Nations and the United Nations**. Because Liberia kept its **independence** through the colonial era, it could take part in world bodies as a sovereign state — a rare distinction for an African country.

## The sourced context

- During the **"Scramble for Africa"** (about the 1880s to 1900), European powers seized almost the whole continent. **Only Liberia and Ethiopia** kept their **independence** — every other part of Africa was taken by a European power.
- Because they were **independent, internationally recognised states**, Liberia and Ethiopia could join world organisations as members in their own right. (The approved sources confirm, for example, that **Ethiopia was a member of the League of Nations**.)
- The **League of Nations** was founded in **1920** to prevent war; the **United Nations** was founded in **1945** (San Francisco) to replace it, with a charter of **peace, self-determination and human rights**.

## Liberia's place (curriculum framing)

- As one of the very few **independent** states in Africa, Liberia was in a position to be an **original/founding member** of the **League of Nations** and, later, of the **United Nations**.
- This gave a small African republic a **voice in world affairs** decades before most of Africa gained independence, and made membership of these bodies a point of **national pride**.

> **Sourcing note (important):** the approved education sources (OpenStax, LibreTexts) document the **League of Nations (1920)** and the **United Nations (1945)** and confirm that **Liberia and Ethiopia** were the two African states that kept their independence during the Scramble for Africa. They do **not** directly state that Liberia was a **"founding member"** of the League and the UN. That specific claim is the **curriculum's framing**; treat it as such until it can be confirmed from a Liberian government or MoE source, exactly as historians treat a claim that a general reference does not directly verify.

## Why Liberia could join when others could not

| African states | Status in the colonial era | Able to join world bodies as members? |
| --- | --- | --- |
| Most of Africa | ruled as **European colonies** | No — they were not independent states |
| **Liberia and Ethiopia** | kept their **independence** | Yes — as sovereign, recognised states |

## Common errors and misconceptions

- **Thinking any African colony could join the League/UN as a member** — only **independent** states could; most of Africa was still colonised.
- **Forgetting why Liberia was special** — it was one of only **two** African states (with Ethiopia) that stayed **independent**.
- **Treating the "founding member" detail as fully sourced here** — the approved general sources confirm the League, the UN and Liberia's independence, but the specific "founding member" claim is the **curriculum's framing** and should be confirmed from a Liberian/MoE source.`,
      workedExample: `**Question:** Explain why Liberia, unlike most African territories, was able to take part in the League of Nations and the United Nations.

**Solution**

*Step 1 — the colonial background.*
During the **Scramble for Africa** (1880s–1900) European powers seized almost all of Africa. **Only Liberia and Ethiopia** kept their **independence**.

*Step 2 — why independence mattered.*
World bodies admit **sovereign states** as members. Most of Africa was ruled as **colonies** and so **could not join** in its own right. Because Liberia (like Ethiopia) was an **independent, recognised state**, it could take part as a member.

*Step 3 — the two organisations.*
The **League of Nations** (1920) aimed to prevent war; the **United Nations** (1945) replaced it with a charter of **peace, self-determination and human rights**. As an independent republic, Liberia was placed to be an **original member** of these bodies.

*Step 4 — a careful note.*
The approved general sources confirm the League, the UN and Liberia's independence, but do not directly state Liberia's "founding member" status; that is the **curriculum's framing**, to be confirmed from a Liberian source.

**Conclusion:** because Liberia kept its independence when nearly all of Africa was colonised, it could join the League of Nations and the United Nations as a sovereign state — giving a small African republic an early voice in world affairs.`,
      quiz: [
        { prompt: "During the Scramble for Africa, which two African states kept their independence?", options: ["Liberia and Ethiopia", "Egypt and Sudan", "Ghana and Mali", "Kenya and Nigeria"], correctIndex: 0, explanation: "Only Liberia and Ethiopia stayed free." },
        { prompt: "World organisations admit as members", options: ["independent, sovereign states", "colonies", "trading companies", "individual people"], correctIndex: 0, explanation: "Only sovereign states can be members." },
        { prompt: "Most of Africa could NOT join the League/UN as members because it was", options: ["ruled as European colonies", "too far away", "uninterested", "at peace"], correctIndex: 0, explanation: "Colonies were not independent states." },
        { prompt: "Liberia could take part in world bodies because it was", options: ["an independent, recognised state", "a British colony", "a French colony", "not a real country"], correctIndex: 0, explanation: "Its independence allowed membership." },
        { prompt: "The League of Nations was founded in", options: ["1920", "1945", "1884", "1789"], correctIndex: 0, explanation: "The League, 1920." },
        { prompt: "The United Nations was founded in", options: ["1945", "1920", "1884", "1815"], correctIndex: 0, explanation: "The UN, 1945." },
        { prompt: "The UN was designed at a conference in", options: ["San Francisco", "Berlin", "Geneva", "Versailles"], correctIndex: 0, explanation: "San Francisco, 1945." },
        { prompt: "The UN Charter proclaims peace, self-determination and", options: ["human rights", "colonial rule", "the war-guilt clause", "the divine right of kings"], correctIndex: 0, explanation: "Human rights for all." },
        { prompt: "The approved sources confirm that ___ was a member of the League of Nations.", options: ["Ethiopia", "Kenya", "Nigeria", "the Congo"], correctIndex: 0, explanation: "Ethiopia was a League member." },
        { prompt: "Liberia's membership of world bodies gave it", options: ["a voice in world affairs before most of Africa was independent", "control of Europe", "a colony in Asia", "no benefit"], correctIndex: 0, explanation: "An early African voice in world affairs." },
        { prompt: "The 'Scramble for Africa' took place about", options: ["the 1880s to 1900", "the 1500s", "the 1960s", "the year 1 CE"], correctIndex: 0, explanation: "Late nineteenth century." },
        { prompt: "By about 1900, Europeans controlled about ___ of Africa.", options: ["90%", "10%", "40%", "5%"], correctIndex: 0, explanation: "Around 90 per cent." },
        { prompt: "The United Nations replaced the", options: ["League of Nations", "Berlin Conference", "Roman Senate", "Axis"], correctIndex: 0, explanation: "The UN replaced the failed League." },
        { prompt: "A colony differs from an independent state in that a colony is", options: ["ruled by a foreign power", "fully sovereign", "a member of the UN", "self-governing"], correctIndex: 0, explanation: "Colonies were ruled from outside." },
        { prompt: "Which best explains Liberia's special position?", options: ["it was one of only two independent African states", "it was the largest African country", "it had the most people", "it was a European colony"], correctIndex: 0, explanation: "Independence made it special." },
        { prompt: "Membership of the League and UN was, for Liberia, a matter of", options: ["national pride and international standing", "military conquest", "colonial rule", "religious duty"], correctIndex: 0, explanation: "A source of pride and standing." },
        { prompt: "A common error is to think that", options: ["any African colony could join the League/UN as a member", "only independent states could join", "the UN replaced the League", "Liberia was independent"], correctIndex: 0, explanation: "Only independent states could be members." },
        { prompt: "The specific claim that Liberia was a 'founding member' is best described as", options: ["the curriculum's framing, to be confirmed from a Liberian source", "fully documented in OpenStax", "clearly false", "unrelated to Liberia"], correctIndex: 0, explanation: "The approved general sources do not directly verify it." },
        { prompt: "The League and the UN were created to", options: ["keep peace and prevent war", "colonise Africa", "spread the slave trade", "punish Liberia"], correctIndex: 0, explanation: "Both aimed to keep peace." },
        { prompt: "Liberia and Ethiopia are important in African history because they", options: ["remained independent during colonial rule", "colonised Europe", "started World War I", "founded the Berlin Conference"], correctIndex: 0, explanation: "They kept their independence." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Why could Liberia take part in the League of Nations and the United Nations when most of Africa could not?", answerKey: "World bodies admit sovereign, independent states as members. Most of Africa was ruled as European colonies and so could not join in its own right; Liberia (like Ethiopia) kept its independence through the colonial era, so as a recognised sovereign state it could take part as a member. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The two African states that kept their independence during the Scramble for Africa were", options: ["Liberia and Ethiopia", "Egypt and Sudan", "Ghana and Mali", "Kenya and Nigeria"], correctIndex: 0, answerKey: "Liberia and Ethiopia. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the founding dates and purpose of the League of Nations and the United Nations.", answerKey: "The League of Nations was founded in 1920 to settle disputes and prevent war; the United Nations was founded in 1945 (San Francisco) to replace the failed League, with aims of peace, self-determination and human rights. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the significance for Liberia of belonging to these world organisations.", answerKey: "As one of the very few independent African states, Liberia could be a member of the League of Nations and the United Nations, giving a small African republic a voice in world affairs decades before most of Africa gained independence — a point of national pride and international standing. (Note: the specific 'founding member' status is the curriculum's framing, to be confirmed from a Liberian source.) Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss Liberia's place among the independent nations that joined the League of Nations and the United Nations, using the context of the Scramble for Africa and these organisations.", answerKey: "Award marks for: the Scramble for Africa and Liberia and Ethiopia as the only independent African states, 6 marks; why independence allowed membership of world bodies while colonies could not join, 6 marks; the League of Nations (1920) and the United Nations (1945, San Francisco, peace/self-determination/human rights), 6 marks; the significance for Liberia (early African voice, national pride), 3 marks; conclusion, 2 marks. Full credit does not require the unverified 'founding member' detail; note candidates should recognise Liberia's independence as the key point. Treating a colony as eligible for membership should cost marks.", marks: 23 },
      ],
    },
  ],
};
