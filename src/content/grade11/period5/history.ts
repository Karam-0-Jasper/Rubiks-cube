import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 11,
// Semester Two, Period V: The Industrial Revolution and the Enlightenment. The
// MoE CONTENTS list has two top-level items, each rebuilt here as its own topic:
// (1) The Industrial Revolution — contributing factors, centres in Europe, its
// impact on European industry and American plantations, and its impact on the
// great slave trade; (2) The Enlightenment — as an intellectual movement, its
// English representatives (John Locke and Thomas Hobbes) and its French
// representatives (Rousseau, Voltaire and Montesquieu). Notes rebuilt from
// OpenStax World History and LibreTexts.
export const historyG11P5: PeriodContent = {
  grade: 11,
  number: 5,
  title: "The Industrial Revolution and the Enlightenment",
  summary:
    "Period V of the MoE Grade 11 History syllabus. Learners study the Industrial Revolution — its contributing factors, its centres in Europe, and its impact on European industry, on plantations in America and on the great slave trade — and the Enlightenment as an intellectual movement, through its English representatives (John Locke and Thomas Hobbes) and its French representatives (Rousseau, Voltaire and Montesquieu).",
  topics: [
    {
      // source: LibreTexts — Modern World History: New Perspectives (OERI), 5.1 The First and Second Industrial Revolutions (https://human.libretexts.org/Bookshelves/History/World_History/Modern_World_History:_New_Perspectives_(OERI)/05:_Economic_Transformation_and_Nation-Building_-_1800-1900/5.01:_The_First_and_Second_Industrial_Revolutions) and LibreTexts — Western Civilization: A Concise History III (Brooks), 2.2 Geography of the Industrial Revolution (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_III_(Brooks)/02:_The_Industrial_Revolution/2.02:_Geography_of_the_Industrial_Revolution)
      slug: "the-industrial-revolution",
      title: "The Industrial Revolution",
      objective:
        "By the end of the topic, learners should be able to explain the contributing factors of the Industrial Revolution, its centres in Europe, and its impact on industry, on American plantations and on the slave trade.",
      estimatedMinutes: 120,
      notes: `## What the Industrial Revolution was

- The **Industrial Revolution** was the great change, from about the **mid-1700s**, from making goods **by hand in homes** to making them **by machines in factories**, powered first by water and then by **steam**.
- It began in **Britain (Great Britain)** and spread to the rest of Europe and America.

## Contributing factors (why it began in Britain)

- **Agricultural improvements** and new crops (like the **potato**) produced more food with less labour, feeding a growing **population** and freeing a "**surplus**" of workers for factories.
- **Cheap, abundant coal** provided energy; the **steam engine** (improved by **James Watt**, whose 1781 engine gave rotary power to drive machines) powered the factories.
- **Colonies in the Americas** supplied **raw materials** (like cotton) and were **markets** for British manufactured goods.
- **Capital, banks and trade** provided money to invest, and British landowners (the **gentry**) were friendly to commerce, unlike many nobles on the continent.
- **New inventions** in textiles (spinning and weaving machines) began the change.

## Centres of the Industrial Revolution in Europe

- It began in **Britain** (the first industrial nation) and then spread to **Belgium, France and the German lands**, and later further east.
- **Coal and iron regions** and growing **industrial cities** (like Manchester) became the centres of industry.

## Impact on European industry

- **Factories, cities and railways** grew rapidly; goods were made faster and cheaper.
- A new **working class** (factory workers) and **middle class** (factory owners) arose; **urbanisation** (people moving to cities) transformed society.

## Impact on plantations in America and on the slave trade

- Machine industry, especially **cotton textiles**, hugely increased the demand for **raw cotton** grown on **plantations in America** worked by enslaved people — so at first industry **strengthened** plantation slavery.
- But in the longer run the Industrial Revolution helped **end the slave trade**: it made the economy less dependent on the old slave-based trade, and the **Enlightenment ideas** and reform movements that accompanied industrial society **campaigned against slavery**, leading to the **abolition of the slave trade** and, later, of slavery itself.

## Common errors and misconceptions

- **Thinking the Industrial Revolution happened everywhere at once** — it began in **Britain** and spread outward.
- **Ignoring its two-sided effect on slavery** — it first **increased** demand for plantation cotton, but later helped **abolish** the slave trade.
- **Forgetting the human cost** — factory life brought crowded cities, long hours and hard conditions for workers.`,
      workedExample: `**Question:** Explain the main contributing factors of the Industrial Revolution and its impact on the slave trade.

**Solution**

*Step 1 — the factors.*
The Industrial Revolution began in **Britain** because of: **agricultural improvements** (more food, a growing population and surplus workers); **cheap coal** and the **steam engine** (improved by **James Watt**); **colonies** supplying raw materials and markets; plentiful **capital and trade**; and **new textile inventions**.

*Step 2 — its spread and impact on industry.*
It spread to **Belgium, France and Germany**, bringing **factories, cities and railways**, a new working and middle class, and rapid **urbanisation**.

*Step 3 — impact on plantations and slavery.*
Machine cotton industry increased demand for **raw cotton** from American **plantations**, at first **strengthening** slavery. But in the longer run, industrial society and **Enlightenment reform ideas** helped **abolish the slave trade** and slavery.

**Conclusion:** the Industrial Revolution, born in Britain from farming, coal, steam, colonies and capital, transformed industry and society — and, though it first boosted plantation slavery, ultimately helped bring about the abolition of the slave trade.`,
      quiz: [
        { prompt: "The Industrial Revolution was the change from making goods", options: ["by hand at home to by machine in factories", "by machine to by hand", "in Africa to in Asia", "by farmers to by soldiers"], correctIndex: 0, explanation: "Hand production gave way to factory machines." },
        { prompt: "The Industrial Revolution began about the", options: ["mid-1700s", "year 1 CE", "500 CE", "1900s"], correctIndex: 0, explanation: "From about the mid-eighteenth century." },
        { prompt: "It began in which country?", options: ["Britain (Great Britain)", "France", "Germany", "the United States"], correctIndex: 0, explanation: "Britain was the first industrial nation." },
        { prompt: "A new crop that helped feed the growing population was the", options: ["potato", "coffee", "cocoa", "rubber"], correctIndex: 0, explanation: "The potato improved nutrition." },
        { prompt: "The energy source that powered early British industry was", options: ["abundant coal", "oil", "nuclear power", "wind alone"], correctIndex: 0, explanation: "Cheap, abundant coal." },
        { prompt: "The steam engine was greatly improved by", options: ["James Watt", "Isaac Newton", "John Locke", "Karl Marx"], correctIndex: 0, explanation: "Watt's 1781 engine gave rotary power." },
        { prompt: "Watt's engine was important because it produced", options: ["rotary power to drive machines", "electricity", "gunpowder", "cold air"], correctIndex: 0, explanation: "Rotary power drove factory machines." },
        { prompt: "Colonies in the Americas provided Britain with", options: ["raw materials and markets", "soldiers only", "steam engines", "coal"], correctIndex: 0, explanation: "Raw materials (cotton) and markets." },
        { prompt: "A social class that friendly to commerce in Britain was the", options: ["landowning gentry", "clergy only", "serfs", "helots"], correctIndex: 0, explanation: "British gentry supported enterprise." },
        { prompt: "The first industry to be transformed was", options: ["textiles (spinning and weaving)", "aircraft", "computers", "cars"], correctIndex: 0, explanation: "Textiles led the way." },
        { prompt: "From Britain, industry spread to", options: ["Belgium, France and the German lands", "only Africa", "only Asia", "nowhere"], correctIndex: 0, explanation: "It spread across Europe." },
        { prompt: "A growing industrial city in Britain was", options: ["Manchester", "Athens", "Rome", "Timbuktu"], correctIndex: 0, explanation: "Manchester grew as an industrial centre." },
        { prompt: "The movement of people to cities is called", options: ["urbanisation", "migration to farms", "colonisation", "deportation"], correctIndex: 0, explanation: "Urbanisation transformed society." },
        { prompt: "Industry created a new working class and a new", options: ["middle class (factory owners)", "priesthood", "peasant class", "nobility"], correctIndex: 0, explanation: "Factory owners formed a new middle class." },
        { prompt: "Machine cotton industry increased demand for", options: ["raw cotton from American plantations", "gold from Africa", "silk from China only", "coal from India"], correctIndex: 0, explanation: "It raised demand for plantation cotton." },
        { prompt: "In the short run, industry's demand for cotton", options: ["strengthened plantation slavery", "ended slavery at once", "had no effect on slavery", "freed all slaves immediately"], correctIndex: 0, explanation: "It first increased slavery." },
        { prompt: "In the longer run, the Industrial Revolution helped", options: ["abolish the slave trade", "expand the slave trade forever", "start slavery", "ignore slavery"], correctIndex: 0, explanation: "It contributed to abolition." },
        { prompt: "Reform movements against slavery drew on the ideas of the", options: ["Enlightenment", "Middle Ages", "Roman Republic", "Bronze Age"], correctIndex: 0, explanation: "Enlightenment ideas fuelled abolition." },
        { prompt: "A human cost of the Industrial Revolution was", options: ["crowded cities and long, hard factory hours", "shorter working days for all", "the end of all cities", "less trade"], correctIndex: 0, explanation: "Factory life was hard and crowded." },
        { prompt: "A common error is to think the Industrial Revolution", options: ["happened everywhere at once", "began in Britain", "spread across Europe", "used the steam engine"], correctIndex: 0, explanation: "It began in Britain and spread outward." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three contributing factors of the Industrial Revolution.", answerKey: "Any three: agricultural improvements and new crops (surplus workers, growing population); cheap abundant coal and the steam engine (James Watt); colonies supplying raw materials and markets; plentiful capital/banks/trade and a commerce-friendly gentry; new textile inventions. Award marks up to 4.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Where did the Industrial Revolution begin and where did it spread?", answerKey: "It began in Britain (Great Britain), the first industrial nation, and spread to Belgium, France and the German lands (and later further east), centred on coal and iron regions and growing industrial cities. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The steam engine that drove factories was greatly improved by", options: ["James Watt", "Isaac Newton", "John Locke", "Montesquieu"], correctIndex: 0, answerKey: "James Watt (1781 rotary engine). Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the two-sided impact of the Industrial Revolution on slavery.", answerKey: "In the short run, machine cotton industry increased demand for raw cotton from American plantations, strengthening plantation slavery. In the longer run, industrial society and Enlightenment reform ideas helped bring about the abolition of the slave trade and slavery. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the contributing factors of the Industrial Revolution and its impact on industry, American plantations and the slave trade.", answerKey: "Award marks for: contributing factors (agriculture/population, coal/steam/Watt, colonies as sources and markets, capital/gentry, textile inventions), 8 marks; where it began and spread and its impact on European industry (factories, cities, railways, new classes, urbanisation), 6 marks; impact on American plantations (increased demand for cotton, strengthening slavery), 5 marks; longer-run impact on the slave trade (abolition, Enlightenment reform), 4 marks; conclusion, 2 marks. Ignoring the two-sided effect on slavery caps at 16.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 7.1 The Enlightenment (https://openstax.org/books/world-history-volume-2/pages/7-1-the-enlightenment) and LibreTexts — Western Civilization: A Concise History II (Brooks), 13.3 Enlightenment Philosophes (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_II_(Brooks)/13:_The_Enlightenment/13.03:_Enlightenment_Philosophes)
      slug: "the-enlightenment",
      title: "The Enlightenment",
      objective:
        "By the end of the topic, learners should be able to explain the Enlightenment as an intellectual movement and the ideas of its English and French representatives.",
      estimatedMinutes: 120,
      notes: `## The Enlightenment as an intellectual movement

- The **Enlightenment** (the "**Age of Reason**") was an intellectual movement of the **17th and 18th centuries** that used **reason** to question old ideas and authority.
- Its spirit: "**old ideas and theories could be questioned and new ones proposed**"; simply accepting "what had always been" was no longer enough.
- It grew from the confidence in **science** after **Isaac Newton**, and applied reason to government, religion, society and human rights.
- Thinkers of the movement were called **philosophes**; they believed in **reason, progress, natural rights and liberty**.

## The English representatives

| Thinker | Key ideas |
| --- | --- |
| **Thomas Hobbes** | in a state of nature life is dangerous, so people form a **social contract** and give power to a strong ruler; he taught the **natural equality of all men** and that political power should rest on the **consent of the people** |
| **John Locke** | the "**Father of Liberalism**"; people have natural rights to "**Life, Liberty and Property**"; government rests on the **consent of the governed** and may be changed if it fails to protect these rights |

- Both Hobbes and Locke (with Rousseau) taught the idea of the **social contract** — that government's authority comes from the **consent of the governed**.

## The French representatives

| Thinker | Key ideas |
| --- | --- |
| **Jean-Jacques Rousseau** | the **social contract** and popular sovereignty — the government should express the "general will" of the people |
| **Voltaire** | "arguably the single most influential figure of the Enlightenment"; championed **freedom of speech and religion** and attacked intolerance and superstition |
| **Montesquieu** | the **separation of powers** in government (into legislative, executive and judicial branches) — an idea "enthusiastically adopted by the authors of the United States Constitution" |

## Why the Enlightenment mattered

- Its ideas of **natural rights, liberty, consent of the governed and separation of powers** inspired the **American** and **French Revolutions** and modern **democracy** and **human rights**.
- It also supported the **anti-slavery** movement and modern science.

## Common errors and misconceptions

- **Thinking the Enlightenment rejected all religion** — it questioned old authority and superstition and championed **reason and toleration**, not necessarily atheism.
- **Confusing the thinkers** — **Locke** (life, liberty, property), **Montesquieu** (separation of powers), **Rousseau** (general will), **Voltaire** (free speech/religion), **Hobbes** (strong ruler by contract).
- **Forgetting its influence** — Enlightenment ideas shaped the **American and French Revolutions** and modern democracy.`,
      workedExample: `**Question:** Explain the Enlightenment as an intellectual movement and identify the ideas of its main English and French thinkers.

**Solution**

*Step 1 — the movement.*
The **Enlightenment** (17th–18th centuries, the "Age of Reason") used **reason** to question old ideas and authority, growing from confidence in **science** after **Newton**. Its thinkers, the **philosophes**, believed in **reason, progress, natural rights and liberty**.

*Step 2 — the English thinkers.*
**Thomas Hobbes** taught the **social contract** and a strong ruler, with power resting on the **consent of the people**. **John Locke**, "Father of Liberalism," taught natural rights to **life, liberty and property** and government by the **consent of the governed**.

*Step 3 — the French thinkers.*
**Rousseau** taught the **social contract** and the "general will"; **Voltaire** championed **freedom of speech and religion**; **Montesquieu** proposed the **separation of powers**.

*Step 4 — its importance.*
These ideas inspired the **American and French Revolutions** and modern **democracy and human rights**.

**Conclusion:** the Enlightenment was the age of reason that, through thinkers like Locke, Hobbes, Rousseau, Voltaire and Montesquieu, produced the ideas of natural rights, consent of the governed and separation of powers that shaped the modern world.`,
      quiz: [
        { prompt: "The Enlightenment is also called the", options: ["Age of Reason", "Age of Faith", "Bronze Age", "Dark Ages"], correctIndex: 0, explanation: "The Age of Reason." },
        { prompt: "The Enlightenment took place in the", options: ["17th and 18th centuries", "5th century", "Bronze Age", "20th century"], correctIndex: 0, explanation: "The 1600s and 1700s." },
        { prompt: "The Enlightenment used ___ to question old ideas.", options: ["reason", "warfare", "prayer alone", "magic"], correctIndex: 0, explanation: "It applied reason to everything." },
        { prompt: "The Enlightenment grew from confidence in science after", options: ["Isaac Newton", "James Watt", "Julius Caesar", "Charlemagne"], correctIndex: 0, explanation: "Newton's science inspired it." },
        { prompt: "Enlightenment thinkers were called", options: ["philosophes", "vassals", "philosophes' serfs", "consuls"], correctIndex: 0, explanation: "The philosophes." },
        { prompt: "Thomas Hobbes argued that people form a", options: ["social contract and give power to a strong ruler", "church", "trade guild", "monastery"], correctIndex: 0, explanation: "A social contract for security." },
        { prompt: "Hobbes taught the natural ___ of all men.", options: ["equality", "sinfulness only", "wealth", "nobility"], correctIndex: 0, explanation: "The natural equality of all men." },
        { prompt: "John Locke is known as the 'Father of'", options: ["Liberalism", "Communism", "Fascism", "Feudalism"], correctIndex: 0, explanation: "The Father of Liberalism." },
        { prompt: "Locke said people have natural rights to", options: ["life, liberty and property", "war and conquest", "gold and land only", "silence"], correctIndex: 0, explanation: "Life, liberty and property." },
        { prompt: "For Locke, government rests on the", options: ["consent of the governed", "will of the Pope", "sword of the king", "decree of Rome"], correctIndex: 0, explanation: "Consent of the governed." },
        { prompt: "The idea that government's authority comes from the consent of the governed is the", options: ["social contract", "divine right", "feudal bond", "caste system"], correctIndex: 0, explanation: "The social contract." },
        { prompt: "Rousseau taught that government should express the", options: ["general will of the people", "will of one king", "commands of the Church", "orders of nobles"], correctIndex: 0, explanation: "Rousseau's 'general will'." },
        { prompt: "The most influential single figure of the Enlightenment is often said to be", options: ["Voltaire", "Hobbes", "Montesquieu", "Newton"], correctIndex: 0, explanation: "Voltaire." },
        { prompt: "Voltaire championed freedom of", options: ["speech and religion", "trade only", "the seas", "the nobility"], correctIndex: 0, explanation: "Free speech and religion." },
        { prompt: "Montesquieu introduced the idea of the", options: ["separation of powers", "social contract", "general will", "divine right of kings"], correctIndex: 0, explanation: "Separation of powers." },
        { prompt: "Montesquieu's idea was adopted by the authors of the", options: ["United States Constitution", "Roman law", "feudal charters", "Council of Trent"], correctIndex: 0, explanation: "The US Constitution used it." },
        { prompt: "The separation of powers divides government into", options: ["legislative, executive and judicial branches", "army, navy and air force", "church, state and guild", "north, south and centre"], correctIndex: 0, explanation: "Three branches of government." },
        { prompt: "Enlightenment ideas inspired the", options: ["American and French Revolutions", "fall of Rome", "Bronze Age", "Crusades"], correctIndex: 0, explanation: "They inspired the great revolutions." },
        { prompt: "Which correctly pairs a thinker with an idea?", options: ["Montesquieu – separation of powers", "Locke – separation of powers", "Voltaire – life, liberty, property", "Hobbes – general will"], correctIndex: 0, explanation: "Montesquieu proposed the separation of powers." },
        { prompt: "A common error is to think the Enlightenment", options: ["rejected all religion", "used reason", "valued natural rights", "influenced revolutions"], correctIndex: 0, explanation: "It championed reason and toleration, not necessarily atheism." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What was the Enlightenment, and what was its central method?", answerKey: "The Enlightenment (the 'Age of Reason', 17th–18th centuries) was an intellectual movement that used reason to question old ideas and authority; growing from confidence in science after Newton, it valued reason, progress, natural rights and liberty. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the key idea of John Locke and of Thomas Hobbes.", answerKey: "Locke (Father of Liberalism): natural rights to life, liberty and property, with government resting on the consent of the governed. Hobbes: people form a social contract and give power to a strong ruler for security; natural equality of all men, power based on consent. Award 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The separation of powers was proposed by", options: ["Montesquieu", "Locke", "Voltaire", "Hobbes"], correctIndex: 0, answerKey: "Montesquieu. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Match each of Rousseau, Voltaire and Montesquieu to a key idea.", answerKey: "Rousseau — the social contract / the 'general will' of the people; Voltaire — freedom of speech and religion (attacking intolerance); Montesquieu — the separation of powers. Award marks up to 4.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the Enlightenment as an intellectual movement and the contributions of its English and French representatives.", answerKey: "Award marks for: the Enlightenment as the Age of Reason questioning authority, growing from Newton's science, with the philosophes valuing reason/rights/liberty, 6 marks; the English thinkers — Hobbes (social contract, strong ruler, consent, equality) and Locke (life/liberty/property, consent of the governed), 7 marks; the French thinkers — Rousseau (general will), Voltaire (free speech/religion), Montesquieu (separation of powers), 7 marks; its influence (American and French Revolutions, democracy, human rights, anti-slavery), 3 marks; conclusion, 2 marks. Confusing the thinkers' ideas should cost marks.", marks: 25 },
      ],
    },
  ],
};
