import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 11,
// Semester One, Period III: European History — the Advent of Christianity and
// the Reformations. The MoE CONTENTS list has seven top-level items, each
// rebuilt here as its own topic: (1) Christianity — Judaic origin, Jesus Christ,
// his teachings, and the rise and decline of the Papacy; (2) developments
// leading to the Protestant Reformation (Martin Luther, John Calvin, St.
// Ignatius Loyola); (3) results of the protest; (4) root causes of the Catholic
// Reformation; (5) impact of the Catholic Reformation; (6) the rise of
// nationalism in Europe; (7) major European nationalists. Notes rebuilt from
// OpenStax World History and LibreTexts (Western Civilization: A Concise History,
// Brooks).
export const historyG11P3: PeriodContent = {
  grade: 11,
  number: 3,
  title: "European History: The Advent of Christianity and the Reformations",
  summary:
    "Period III of the MoE Grade 11 History syllabus. Learners study the Judaic origins of Christianity, the life and teachings of Jesus Christ, and the rise and decline of the Papacy; the Protestant Reformation of Martin Luther and John Calvin and the Catholic response of St. Ignatius Loyola; the results of the Protestant protest; the root causes and impact of the Catholic (Counter-)Reformation; and the rise of nationalism in Europe with its major nationalists.",
  topics: [
    {
      // source: LibreTexts — World Religions (Lumen), 10.3 The Beginnings of the Church (https://human.libretexts.org/Courses/Lumen_Learning/Book:_World_Religions-1_(Lumen)/10:_Section_10:_Christianity/10.3:_History:_The_Beginnings_of_the_Church) and OpenStax World History Volume 1, 13.3 Patriarch and Papacy (https://openstax.org/books/world-history-volume-1/pages/13-3-patriarch-and-papacy-the-church-and-the-call-to-crusade)
      slug: "christianity-origins-jesus-teachings-papacy",
      title: "Christianity: Judaic Origins, Jesus, His Teachings, and the Rise and Decline of the Papacy",
      objective:
        "By the end of the topic, learners should be able to explain the Judaic origins of Christianity, describe Jesus Christ and his basic teachings, and trace the rise and decline of the Papacy.",
      estimatedMinutes: 120,
      notes: `## The Judaic origin of Christianity

- Christianity **arose from Judaism**, the religion of the Hebrews, which began with the **covenant** God made with **Abraham**.
- Christianity began about **2,000 years ago** in the Middle East, in **Judea** (Palestine), then occupied by the **Roman Empire**.
- **Jesus** lived as a **Jew**; his earliest followers were Jews who at first sought to **reform Judaism**, teaching that Jesus was the promised **messiah** of the Hebrew prophecies.
- After Jesus' death, some believed he was the messiah and some did not — the beginning of the split between **Judaism and Christianity**.

## Jesus Christ the man

- **Jesus of Nazareth** was born in **Palestine about 4 BCE** and grew up in northern Judea under Roman rule.
- He taught as a **rabbi (teacher)**, using **parables and aphorisms** (short wise sayings), like the prophets before him.
- He was influenced by the prophet **Isaiah** and accepted the authority of the **Hebrew scriptures**.

## Christ's basic teachings

- **Caritas (charity/love)** — treat others as you would like to be treated (the "Golden Rule").
- **Love of God and love of neighbour** as the greatest commandments.
- The coming **kingdom of God**, repentance, forgiveness and care for the poor and outcast.
- His followers believed he **died and rose from the dead** (the resurrection), the central Christian belief.

## The rise of the Papacy

- The **Pope** is the **Bishop of Rome** and head of the Catholic Church, regarded as the successor of **Saint Peter**.
- Jesus is said to have given Peter the "**keys of Heaven**," naming him the "**rock**" on which the church would be built — so the Church counts Peter as the **first Pope**.
- After Christianity became the empire's religion and the western empire fell, the Pope grew into the leading authority in Western Christianity, both spiritual and political.

## The decline of the Papacy

- Over the later Middle Ages papal authority **weakened**:
  - The **Babylonian Captivity** (the popes residing at Avignon, not Rome).
  - The **Great Western Schism** (rival popes claiming the office at the same time).
  - Growing **corruption** and the challenge of rising **kings and monarchies**, who appointed their own bishops.
- This decline in prestige helped prepare the way for the **Reformation**.

## Common errors and misconceptions

- **Thinking Christianity is unrelated to Judaism** — it grew directly out of Judaism (Abraham's covenant, the Hebrew scriptures).
- **Confusing the Pope with a king** — the Pope is a spiritual head (Bishop of Rome), though he also gained political power.
- **Believing papal power was always strong** — it rose, then declined (Avignon, the Schism, corruption) before the Reformation.`,
      workedExample: `**Question:** Explain the Judaic origins of Christianity, the teachings of Jesus, and the rise and decline of the Papacy.

**Solution**

*Step 1 — Judaic origins.*
Christianity **arose from Judaism**, beginning with God's **covenant with Abraham**. It started in Roman-ruled **Judea** about 2,000 years ago; Jesus lived as a **Jew** and his first followers were Jews who believed he was the promised **messiah**.

*Step 2 — Jesus the man and his teaching.*
**Jesus of Nazareth** (born about **4 BCE**) taught as a **rabbi** in **parables**, stressing **love of God and neighbour** and **caritas** (charity). His followers believed he **rose from the dead**.

*Step 3 — the rise of the Papacy.*
The **Pope**, Bishop of Rome and successor of **Saint Peter** (given the "keys of Heaven"), became the head of Western Christianity, gaining spiritual and political power after Rome fell.

*Step 4 — the decline.*
Papal authority later weakened through the **Avignon papacy**, the **Great Western Schism**, corruption and the rise of powerful kings — preparing the way for the Reformation.

**Conclusion:** Christianity grew from Judaism through Jesus, whose teaching of love and resurrection founded the faith; the Papacy rose to lead Western Christianity but declined in the late Middle Ages, opening the door to reform.`,
      quiz: [
        { prompt: "Christianity arose from which older religion?", options: ["Judaism", "Buddhism", "Zoroastrianism", "Hinduism"], correctIndex: 0, explanation: "Christianity grew out of Judaism." },
        { prompt: "Judaism began with God's covenant with", options: ["Abraham", "Moses only", "Peter", "Constantine"], correctIndex: 0, explanation: "The covenant with Abraham." },
        { prompt: "Christianity began in which Roman-ruled region?", options: ["Judea (Palestine)", "Gaul", "Egypt", "Greece"], correctIndex: 0, explanation: "In Judea, about 2,000 years ago." },
        { prompt: "Jesus of Nazareth was born about", options: ["4 BCE", "500 CE", "753 BCE", "1517 CE"], correctIndex: 0, explanation: "About 4 BCE in Palestine." },
        { prompt: "Jesus lived and taught as a", options: ["Jew (a rabbi)", "Roman emperor", "Greek philosopher", "Persian satrap"], correctIndex: 0, explanation: "He was a Jewish teacher." },
        { prompt: "Jesus often taught using", options: ["parables and short sayings", "written law codes", "military commands", "scientific proofs"], correctIndex: 0, explanation: "He taught in parables and aphorisms." },
        { prompt: "'Caritas', a key teaching of Jesus, means", options: ["charity/love (treat others as yourself)", "war", "wealth", "obedience to Rome"], correctIndex: 0, explanation: "Caritas is charity/love." },
        { prompt: "The greatest commandments Jesus taught were love of God and love of", options: ["neighbour", "money", "power", "the emperor"], correctIndex: 0, explanation: "Love of God and neighbour." },
        { prompt: "The central Christian belief about Jesus is that he", options: ["died and rose from the dead", "conquered Rome", "wrote the Twelve Tables", "founded Athens"], correctIndex: 0, explanation: "The resurrection is central." },
        { prompt: "Jesus' first followers were mostly", options: ["Jews who believed he was the messiah", "Romans", "Greeks", "Persians"], correctIndex: 0, explanation: "Early followers were Jewish." },
        { prompt: "The Pope is the Bishop of", options: ["Rome", "Athens", "Jerusalem", "Constantinople"], correctIndex: 0, explanation: "The Pope is the Bishop of Rome." },
        { prompt: "The Church regards the first Pope as", options: ["Saint Peter", "Saint Paul", "Constantine", "Martin Luther"], correctIndex: 0, explanation: "Peter is counted the first Pope." },
        { prompt: "Jesus is said to have given Peter the", options: ["keys of Heaven", "sword of Rome", "crown of Persia", "scroll of the law"], correctIndex: 0, explanation: "The 'keys of Heaven' and the 'rock'." },
        { prompt: "The Pope grew powerful especially after", options: ["Christianity became the empire's religion and the west fell", "the founding of Sparta", "the Punic Wars", "the Bronze Age"], correctIndex: 0, explanation: "Papal power rose as Rome fell." },
        { prompt: "The 'Babylonian Captivity' of the Church refers to the popes residing at", options: ["Avignon", "Babylon in Iraq", "Jerusalem", "Wittenberg"], correctIndex: 0, explanation: "The popes lived at Avignon, not Rome." },
        { prompt: "The Great Western Schism was when", options: ["rival popes claimed the office at once", "Rome fell", "Jesus was crucified", "Luther posted his theses"], correctIndex: 0, explanation: "Competing popes divided the Church." },
        { prompt: "Papal authority declined partly because of rising", options: ["kings and monarchies appointing their own bishops", "trade fairs", "universities", "monasteries"], correctIndex: 0, explanation: "Monarchs challenged papal power." },
        { prompt: "The decline of the Papacy helped prepare the way for the", options: ["Reformation", "Punic Wars", "Hellenistic age", "Bronze Age"], correctIndex: 0, explanation: "Weak papacy opened the door to reform." },
        { prompt: "Which is TRUE about Christianity and Judaism?", options: ["Christianity grew out of Judaism", "They have no connection", "Judaism grew out of Christianity", "Both began in Rome"], correctIndex: 0, explanation: "Christianity arose from Judaism." },
        { prompt: "A common error is to think papal power was", options: ["always strong and never declined", "centred in Rome", "linked to Saint Peter", "spiritual in nature"], correctIndex: 0, explanation: "It rose and then declined before the Reformation." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the Judaic origins of Christianity.", answerKey: "Christianity arose from Judaism, which began with God's covenant with Abraham. It started in Roman-ruled Judea; Jesus lived as a Jew and his first followers were Jews who believed he was the promised messiah of the Hebrew prophecies. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three basic teachings of Jesus.", answerKey: "Any three: caritas/charity — treat others as yourself; love of God and love of neighbour; the coming kingdom of God; repentance and forgiveness; care for the poor and outcast; the belief that he died and rose again. Award marks up to 4.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Church regards the first Pope as", options: ["Saint Peter", "Saint Paul", "Constantine", "Martin Luther"], correctIndex: 0, answerKey: "Peter, given the 'keys of Heaven'. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons for the decline of the Papacy in the later Middle Ages.", answerKey: "Any two: the Babylonian Captivity (popes at Avignon); the Great Western Schism (rival popes); corruption in the Church; the rise of kings/monarchies appointing their own bishops. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the advent of Christianity — its Judaic origins, Jesus and his teachings — and the rise and decline of the Papacy.", answerKey: "Award marks for: Judaic origins (Abraham's covenant, Judea, Jesus as a Jew, the messiah), 6 marks; Jesus the man and his teachings (parables, love of God and neighbour, caritas, resurrection), 7 marks; the rise of the Papacy (Bishop of Rome, Peter, power after Rome's fall), 5 marks; the decline (Avignon, Schism, corruption, kings), 5 marks; conclusion, 2 marks. Denying the Judaism–Christianity link caps at 14.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 5.1 The Protestant Reformation (https://openstax.org/books/world-history-volume-2/pages/5-1-the-protestant-reformation) and LibreTexts — Western Civilization: A Concise History II (Brooks), 7.01 The Context of the Reformation (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_II_(Brooks)/07:_The_Protestant_Reformation/7.01:_The_Context_of_the_Reformation) and 7.04 Calvinism (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_II_(Brooks)/07:_The_Protestant_Reformation/7.04:_Calvinism)
      slug: "developments-protestant-reformation",
      title: "Developments Leading to the Protestant Reformation: Luther, Calvin and Loyola",
      objective:
        "By the end of the topic, learners should be able to explain the causes of the Protestant Reformation and the roles of Martin Luther, John Calvin and St. Ignatius Loyola.",
      estimatedMinutes: 120,
      notes: `## Causes of the Reformation

- **Corruption in the Church**: by the late 1400s the Church owned about **20% of Western European land**, and many clergy — even popes — "lived like princes," breaking their vows.
- **Weak papal authority** after the Avignon papacy and the Great Western Schism.
- The sale of **indulgences** — papers said to reduce the punishment for sin in **purgatory** — which many saw as buying forgiveness.
- The **printing press**, which spread reforming ideas quickly, and rising monarchies that resisted papal control.

## Martin Luther

- **Martin Luther** was a German monk and professor of theology at **Wittenberg**.
- In **1517** he posted his **Ninety-Five Theses** on the Castle Church door, attacking the **sale of indulgences** — the first act of the Reformation.
- His key teachings:
  - **Justification by faith alone** — salvation comes from God's grace through faith, not from buying indulgences or good works.
  - **Scripture alone** — the **Bible**, not the Pope, is the final authority; he translated the Bible into German.
- He refused to take back his writings before Pope Leo X and Emperor **Charles V** at the **Diet of Worms (1521)**, and was **excommunicated** and outlawed. His followers became the **Lutherans**.

## John Calvin

- **John (Jean) Calvin**, a French lawyer, settled in **Geneva, Switzerland (from 1536)** and built a strict Protestant church.
- His central doctrine was **predestination** — God has already chosen the "**elect**" who will be saved, before they are born.
- He made Geneva a **model Christian city**, its **Consistory** enforcing strict moral rules.
- **Calvinism** spread widely: **Huguenots** in France, **Presbyterians** in Scotland, **Puritans** in England, and Reformed churches in the Netherlands.

## St. Ignatius Loyola (the Catholic response)

- **St. Ignatius Loyola**, a Spanish noble, founded the **Society of Jesus (the Jesuits)**.
- The Jesuits led the **Catholic** side: teaching, **educating young Catholic men**, missionary work, and winning people back to the Catholic Church.
- Loyola therefore represents the **Catholic Reformation's** answer to Luther and Calvin.

## Common errors and misconceptions

- **Thinking Luther wanted a new church at first** — he wanted to **reform** the existing Church; the break came after Rome refused.
- **Confusing Luther and Calvin** — Luther stressed **faith alone**; Calvin stressed **predestination**.
- **Putting Loyola on the Protestant side** — Loyola and the Jesuits were **Catholic**, opposing the Protestants.`,
      workedExample: `**Question:** Explain the roles of Martin Luther, John Calvin and St. Ignatius Loyola in the Reformation era.

**Solution**

*Step 1 — the setting.*
Corruption, weak papal authority, the sale of **indulgences** and the **printing press** created demand for reform.

*Step 2 — Martin Luther.*
In **1517** Luther posted the **Ninety-Five Theses** against indulgences. He taught **justification by faith alone** and **scripture alone**, refused to recant at the **Diet of Worms (1521)**, was excommunicated, and founded the **Lutheran** movement.

*Step 3 — John Calvin.*
Calvin built a strict Protestant church in **Geneva**, teaching **predestination** (God's "elect"). Calvinism spread as the **Huguenots**, **Presbyterians** and **Puritans**.

*Step 4 — St. Ignatius Loyola.*
On the **Catholic** side, Loyola founded the **Jesuits**, who educated Catholic youth and won people back to Rome — the Catholic answer to the Protestants.

**Conclusion:** Luther and Calvin led the Protestant break (faith alone; predestination), while Loyola's Jesuits led the Catholic response — together shaping the age of the Reformations.`,
      quiz: [
        { prompt: "One cause of the Reformation was the sale of", options: ["indulgences", "roads", "coins", "spices"], correctIndex: 0, explanation: "Indulgences promised to reduce punishment in purgatory." },
        { prompt: "Which technology spread reforming ideas quickly?", options: ["the printing press", "the telegraph", "the steam engine", "the radio"], correctIndex: 0, explanation: "The printing press spread ideas fast." },
        { prompt: "Martin Luther was a German monk and professor at", options: ["Wittenberg", "Geneva", "Rome", "Paris"], correctIndex: 0, explanation: "Luther taught at Wittenberg." },
        { prompt: "Luther posted his Ninety-Five Theses in", options: ["1517", "1601", "1400", "1789"], correctIndex: 0, explanation: "The Theses appeared in 1517." },
        { prompt: "The Ninety-Five Theses mainly attacked", options: ["the sale of indulgences", "the printing press", "the Bible", "monasteries"], correctIndex: 0, explanation: "They attacked indulgences." },
        { prompt: "Luther's doctrine of salvation was", options: ["justification by faith alone", "salvation by buying indulgences", "salvation by conquest", "predestination"], correctIndex: 0, explanation: "Justification by faith alone." },
        { prompt: "Luther held that the final authority was", options: ["the Bible (scripture alone)", "the Pope", "the emperor", "the Council"], correctIndex: 0, explanation: "Scripture alone, not the Pope." },
        { prompt: "Luther refused to recant at the", options: ["Diet of Worms (1521)", "Council of Nicaea", "Battle of Actium", "Congress of Vienna"], correctIndex: 0, explanation: "The Diet of Worms, 1521." },
        { prompt: "Luther's followers were called", options: ["Lutherans", "Jesuits", "Huguenots", "Puritans"], correctIndex: 0, explanation: "The Lutherans." },
        { prompt: "John Calvin built his strict church in", options: ["Geneva", "Wittenberg", "London", "Madrid"], correctIndex: 0, explanation: "Calvin worked in Geneva." },
        { prompt: "Calvin's central doctrine was", options: ["predestination", "indulgences", "papal infallibility", "monasticism"], correctIndex: 0, explanation: "Predestination — the 'elect'." },
        { prompt: "In Calvinism, the 'elect' are those", options: ["chosen by God for salvation before birth", "who buy indulgences", "who join the Jesuits", "who obey the Pope"], correctIndex: 0, explanation: "God chose the elect beforehand." },
        { prompt: "French Calvinists were known as", options: ["Huguenots", "Lutherans", "Jesuits", "Anglicans"], correctIndex: 0, explanation: "The Huguenots." },
        { prompt: "Scottish Calvinists became the", options: ["Presbyterians", "Puritans", "Jesuits", "Lutherans"], correctIndex: 0, explanation: "The Presbyterian church." },
        { prompt: "St. Ignatius Loyola founded the", options: ["Society of Jesus (Jesuits)", "Lutheran church", "Huguenots", "Church of England"], correctIndex: 0, explanation: "Loyola founded the Jesuits." },
        { prompt: "The Jesuits belonged to which side of the Reformation?", options: ["the Catholic side", "the Lutheran side", "the Calvinist side", "no side"], correctIndex: 0, explanation: "They were the Catholic response." },
        { prompt: "A chief task of the Jesuits was", options: ["educating young Catholic men and winning people back to Rome", "selling indulgences", "printing Luther's Bible", "leading Geneva"], correctIndex: 0, explanation: "They taught and did missionary work." },
        { prompt: "Luther at first wanted to", options: ["reform the existing Church, not start a new one", "destroy all religion", "found the Jesuits", "become Pope"], correctIndex: 0, explanation: "He sought reform; the break came later." },
        { prompt: "The key difference between Luther and Calvin was", options: ["Luther stressed faith alone; Calvin stressed predestination", "they agreed on everything", "Calvin stressed indulgences", "Luther led the Jesuits"], correctIndex: 0, explanation: "Faith alone vs predestination." },
        { prompt: "Luther was condemned and", options: ["excommunicated by the Pope", "made a cardinal", "elected emperor", "sent to Geneva"], correctIndex: 0, explanation: "He was excommunicated and outlawed." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two causes of the Protestant Reformation.", answerKey: "Any two: corruption in the Church (wealth, clergy breaking vows); weak papal authority (Avignon, the Schism); the sale of indulgences; the printing press spreading ideas; rising monarchies resisting the Pope. Award 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe Martin Luther's role and two of his key teachings.", answerKey: "Luther (monk/professor at Wittenberg) posted the Ninety-Five Theses in 1517 against indulgences, starting the Reformation; refused to recant at the Diet of Worms (1521) and was excommunicated. Teachings (two): justification by faith alone; scripture alone (the Bible, not the Pope, is final authority). Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "John Calvin's central doctrine was", options: ["predestination", "indulgences", "papal supremacy", "monasticism"], correctIndex: 0, answerKey: "Predestination — God's elect. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Who was St. Ignatius Loyola and which side of the Reformation did he serve?", answerKey: "A Spanish noble who founded the Society of Jesus (the Jesuits); he served the Catholic side, leading education, missionary work and the effort to win people back to the Catholic Church against Luther and Calvin. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the developments leading to the Protestant Reformation and the roles of Luther, Calvin and Loyola.", answerKey: "Award marks for: causes (corruption, weak papacy, indulgences, printing press), 6 marks; Luther (95 Theses 1517, faith alone, scripture alone, Diet of Worms, Lutherans), 7 marks; Calvin (Geneva, predestination, spread as Huguenots/Presbyterians/Puritans), 6 marks; Loyola and the Jesuits as the Catholic response, 4 marks; conclusion, 2 marks. Placing Loyola on the Protestant side caps at 16.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — Western Civilization: A Concise History II (Brooks), 7.06 The Effects of the Reformation (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_II_(Brooks)/07:_The_Protestant_Reformation/7.06:_The_Effects_of_the_Reformation)
      slug: "results-of-the-protestant-reformation",
      title: "Results of the Protestant Protest",
      objective:
        "By the end of the topic, learners should be able to describe the results of the Protestant Reformation — the division of Western Christianity, new churches, and religious conflict.",
      estimatedMinutes: 90,
      notes: `## The Protestant protest and its results

The word "**Protestant**" comes from the reformers' **protest** against the Roman Catholic Church. The protest permanently changed Europe.

## The division of Western Christianity

- Western Christianity was **split** into **Roman Catholic** and **Protestant** churches — the unity of the medieval Church was broken.
- New **Protestant churches** formed:
  - **Lutherans** — mostly in Germany, the Baltic lands and Scandinavia.
  - **Reformed / Calvinist churches** — in Switzerland, France (**Huguenots**), the Netherlands, Scotland (**Presbyterians**) and beyond.
  - Later national churches such as the **Church of England (Anglican)**.

## A religious map of Europe

| Region | Religion after the Reformation |
| --- | --- |
| Northern Europe (except most of Ireland) | mostly **Protestant** |
| Southern Europe | remained **Roman Catholic** |
| Central Europe | a zone of **fierce religious conflict** |

## Other results

- **Religious wars** broke out as Protestants and Catholics fought; by the 1560s the battle lines were firmly set, and conflict escalated to full-scale war in central Europe.
- The **Bible** was translated into common languages (like Luther's German Bible), encouraging **literacy** and personal reading of scripture.
- Churches became tied to **nations and rulers**, strengthening royal and national power over the Church.
- The break provoked the **Catholic (Counter-)Reformation** as Rome fought back.

## Common errors and misconceptions

- **Thinking the Reformation produced one Protestant church** — it produced **many** (Lutheran, Reformed/Calvinist, Anglican and others).
- **Assuming the change was peaceful** — it led to **religious wars** across Europe.
- **Believing only religion changed** — it also strengthened **national and royal power** and spread **literacy** through Bible reading.`,
      workedExample: `**Question:** Describe the main results of the Protestant Reformation.

**Solution**

*Step 1 — a divided Christianity.*
The protest **split** Western Christianity into **Catholic** and **Protestant** churches, ending the unity of the medieval Church.

*Step 2 — new churches.*
Many **Protestant churches** formed: **Lutherans** (Germany, Scandinavia), **Reformed/Calvinist** churches (Switzerland, France's Huguenots, Scotland's Presbyterians, the Netherlands) and the **Anglican** Church of England.

*Step 3 — a divided map and religious wars.*
**Northern Europe** turned largely Protestant, **Southern Europe** stayed Catholic, and **Central Europe** became a zone of **fierce war**.

*Step 4 — wider effects.*
The **Bible** in common languages spread **literacy**; churches were tied to **nations and rulers**; and Rome answered with the **Catholic Reformation**.

**Conclusion:** the Protestant protest permanently divided Western Christianity into many churches, redrew Europe's religious map, sparked religious wars, spread Bible literacy and strengthened national power — and provoked the Catholic Reformation.`,
      quiz: [
        { prompt: "The word 'Protestant' comes from the reformers'", options: ["protest against the Catholic Church", "love of Rome", "support for the Pope", "war with Persia"], correctIndex: 0, explanation: "It comes from their protest." },
        { prompt: "The main result of the protest was that Western Christianity was", options: ["divided into Catholic and Protestant", "united forever", "abolished", "moved to Africa"], correctIndex: 0, explanation: "It split into Catholic and Protestant." },
        { prompt: "Lutheran churches were strongest in", options: ["Germany and Scandinavia", "Italy and Spain", "Greece and Egypt", "Persia and India"], correctIndex: 0, explanation: "Germany, the Baltics and Scandinavia." },
        { prompt: "Reformed/Calvinist churches spread in France as the", options: ["Huguenots", "Lutherans", "Jesuits", "Anglicans"], correctIndex: 0, explanation: "French Calvinists were Huguenots." },
        { prompt: "Scottish Calvinists became the", options: ["Presbyterians", "Puritans", "Jesuits", "Lutherans"], correctIndex: 0, explanation: "The Presbyterian church." },
        { prompt: "The national church of England was the", options: ["Anglican (Church of England)", "Lutheran church", "Jesuit order", "Reformed church"], correctIndex: 0, explanation: "The Church of England (Anglican)." },
        { prompt: "After the Reformation, Northern Europe became mostly", options: ["Protestant", "Catholic", "Muslim", "Buddhist"], correctIndex: 0, explanation: "Northern Europe turned Protestant." },
        { prompt: "Southern Europe remained mostly", options: ["Roman Catholic", "Protestant", "Orthodox", "pagan"], correctIndex: 0, explanation: "Southern Europe stayed Catholic." },
        { prompt: "Central Europe became a zone of", options: ["fierce religious conflict/war", "peace and unity", "no religion", "Buddhist monasteries"], correctIndex: 0, explanation: "Central Europe saw religious war." },
        { prompt: "The Reformation produced", options: ["many Protestant churches, not one", "a single Protestant church", "no new churches", "one world church"], correctIndex: 0, explanation: "Many distinct churches formed." },
        { prompt: "By which decade were the Catholic–Protestant battle lines firmly set?", options: ["the 1560s", "the 1200s", "the 1900s", "the 700s"], correctIndex: 0, explanation: "By the 1560s." },
        { prompt: "Translating the Bible into common languages encouraged", options: ["literacy and personal Bible reading", "the end of reading", "Latin-only worship", "the fall of Rome"], correctIndex: 0, explanation: "Common-language Bibles spread literacy." },
        { prompt: "After the Reformation, churches became more tied to", options: ["nations and rulers", "the Roman Senate", "Greek city-states", "African empires"], correctIndex: 0, explanation: "National and royal power over the Church grew." },
        { prompt: "The Protestant protest provoked the", options: ["Catholic (Counter-)Reformation", "Industrial Revolution", "Hellenistic age", "Punic Wars"], correctIndex: 0, explanation: "Rome answered with the Catholic Reformation." },
        { prompt: "A key error is to think the Reformation was", options: ["peaceful", "a religious split", "the cause of many churches", "a spur to literacy"], correctIndex: 0, explanation: "It led to religious wars, not peace." },
        { prompt: "Luther's German Bible is an example of", options: ["scripture in a common language", "a Latin-only text", "an indulgence", "a Jesuit school"], correctIndex: 0, explanation: "It made the Bible readable to ordinary people." },
        { prompt: "The unity broken by the Reformation was that of the", options: ["medieval Roman Catholic Church", "Roman Empire", "Greek city-states", "Persian Empire"], correctIndex: 0, explanation: "The united medieval Church was split." },
        { prompt: "Which pair correctly matches a group to a place?", options: ["Presbyterians – Scotland", "Huguenots – Italy", "Lutherans – Spain", "Anglicans – Persia"], correctIndex: 0, explanation: "Presbyterians were Scottish Calvinists." },
        { prompt: "Religious wars after the Reformation were fought between", options: ["Protestants and Catholics", "Greeks and Persians", "Rome and Carthage", "Sunni and Shia"], correctIndex: 0, explanation: "Protestant vs Catholic conflict." },
        { prompt: "A lasting political result of the Reformation was", options: ["stronger national and royal control of the Church", "the return of the Roman Republic", "the fall of all monarchies", "the union of all churches"], correctIndex: 0, explanation: "Rulers gained more control over religion." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What was the main religious result of the Protestant protest?", answerKey: "It permanently divided Western Christianity into Roman Catholic and Protestant churches, ending the unity of the medieval Church and producing many new churches (Lutheran, Reformed/Calvinist, Anglican). Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Describe how the Reformation changed the religious map of Europe.", answerKey: "Northern Europe (except most of Ireland) became mostly Protestant; Southern Europe remained Roman Catholic; Central Europe became a zone of fierce religious conflict and war. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Protestant protest provoked the", options: ["Catholic (Counter-)Reformation", "Industrial Revolution", "Punic Wars", "Hellenistic age"], correctIndex: 0, answerKey: "Rome's Catholic Reformation. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two non-religious results of the Reformation.", answerKey: "Any two: religious wars across Europe; the Bible in common languages spread literacy; churches became tied to nations and rulers, strengthening national/royal power. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the results of the Protestant Reformation for religion and society in Europe.", answerKey: "Award marks for: the division of Western Christianity and the many new churches, 7 marks; the new religious map (North Protestant, South Catholic, Centre in conflict), 5 marks; religious wars, 4 marks; Bible literacy and common-language scripture, 3 marks; stronger national/royal power and the Catholic Reformation as response, 4 marks; conclusion, 2 marks. Treating the change as peaceful or as one church caps at 14.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — Western Civilization: A Concise History II (Brooks), 8.02 The Inquisition and the Council of Trent (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_II_(Brooks)/08:_The_Catholic_Reformation/8.02:_The_Inquisition_and_the_Council_of_Trent)
      slug: "root-causes-catholic-reformation",
      title: "Root Causes of the Catholic Reformation",
      objective:
        "By the end of the topic, learners should be able to explain the root causes of the Catholic (Counter-)Reformation — the Protestant challenge and the need to reform Church abuses.",
      estimatedMinutes: 90,
      notes: `## What the Catholic Reformation was

- The **Catholic Reformation** (also called the **Counter-Reformation**) was the Roman Catholic Church's **response** to the Protestant Reformation, in the sixteenth century.
- It aimed both to **fight Protestantism** and to **reform the Church's own abuses**.

## Root cause 1 — the Protestant challenge

- Luther, Calvin and others had won away large parts of Europe. Rome needed to **stop the spread of Protestantism** and to **win back** lost believers.
- Under **Pope Paul III** (reigned **1534–1549**) the Church launched a "hardline" response.

## Root cause 2 — real abuses inside the Church

- A **1536 reform report** (commissioned by Paul III) admitted serious **abuses**:
  - clergy who were poorly **educated**;
  - **bishops collecting income** from parishes they never visited;
  - the general worldliness and corruption the Protestants had attacked.
- Reform-minded Catholics wanted to **correct these abuses** to make the Church stronger and more respected.

## Root cause 3 — defending doctrine

- The Church was determined that its **essential doctrines were correct** and that Luther and Calvin were **wrong**: "there was **no budging on doctrine**."
- So a root aim was to **define and defend Catholic teaching** clearly against Protestant ideas.

## The instruments created

- The **Inquisition (Holy Office, 1542)** — a permanent body to find and punish **heresy**.
- The **Jesuits** (Ignatius Loyola) — to teach, do missionary work and win people back.
- The **Council of Trent (1545–1563)** — to reaffirm doctrine and reform abuses.

## Common errors and misconceptions

- **Thinking the Catholic Reformation only attacked Protestants** — it also **reformed genuine abuses** inside the Church.
- **Believing the Church changed its doctrine** — on doctrine there was **no budging**; it reformed discipline, not core beliefs.
- **Confusing it with the Protestant Reformation** — the Catholic Reformation was the Catholic **response** to it.`,
      workedExample: `**Question:** Explain the root causes of the Catholic Reformation.

**Solution**

*Step 1 — the Protestant challenge.*
Luther and Calvin had won much of Europe, so Rome needed to **stop Protestantism** and **win back** lost believers; **Pope Paul III** led a hardline response.

*Step 2 — real abuses.*
A **1536 report** admitted abuses — poorly educated clergy, absentee bishops collecting income — which reformers wanted to **correct** to restore the Church's standing.

*Step 3 — defending doctrine.*
The Church insisted its **doctrine was correct** ("no budging on doctrine") and needed to **define and defend** Catholic teaching against Protestant ideas.

**Conclusion:** the Catholic Reformation arose from the Protestant challenge, the need to reform genuine abuses, and the determination to defend Catholic doctrine — pursued through the Inquisition, the Jesuits and the Council of Trent.`,
      quiz: [
        { prompt: "The Catholic Reformation is also called the", options: ["Counter-Reformation", "Protestant Reformation", "Renaissance", "Enlightenment"], correctIndex: 0, explanation: "It is the Counter-Reformation." },
        { prompt: "The Catholic Reformation was mainly a response to", options: ["the Protestant Reformation", "the Punic Wars", "the fall of Rome", "the Hellenistic age"], correctIndex: 0, explanation: "It answered the Protestant challenge." },
        { prompt: "The Pope who launched the hardline response was", options: ["Paul III", "Leo X", "Peter", "Gregory VII"], correctIndex: 0, explanation: "Pope Paul III (1534–1549)." },
        { prompt: "One root cause was the need to stop the spread of", options: ["Protestantism", "Islam", "Buddhism", "the Roman Empire"], correctIndex: 0, explanation: "Rome sought to halt Protestantism." },
        { prompt: "The 1536 reform report admitted problems such as", options: ["poorly educated clergy and absentee bishops", "too many Bibles", "too many Jesuits", "war with Persia"], correctIndex: 0, explanation: "It admitted real abuses." },
        { prompt: "'Absentee bishops' means bishops who", options: ["collected income from parishes they never visited", "lived in poverty", "printed Bibles", "founded Geneva"], correctIndex: 0, explanation: "They took income without serving." },
        { prompt: "On matters of doctrine, the Church decided there was", options: ["no budging (doctrine would not change)", "full agreement with Luther", "a new gospel", "no need for the Bible"], correctIndex: 0, explanation: "Doctrine did not change." },
        { prompt: "The Catholic Reformation aimed both to fight Protestantism and to", options: ["reform the Church's own abuses", "abolish the Papacy", "join the Lutherans", "end all education"], correctIndex: 0, explanation: "It also corrected abuses." },
        { prompt: "A permanent body created to punish heresy was the", options: ["Inquisition (Holy Office, 1542)", "Diet of Worms", "Council of Nicaea", "Delian League"], correctIndex: 0, explanation: "The Inquisition, 1542." },
        { prompt: "The teaching order founded to win people back to Rome was the", options: ["Jesuits", "Huguenots", "Presbyterians", "Lutherans"], correctIndex: 0, explanation: "The Jesuits (Ignatius Loyola)." },
        { prompt: "The great council held to reaffirm doctrine and reform abuses was the Council of", options: ["Trent (1545–1563)", "Nicaea", "Worms", "Chalcedon"], correctIndex: 0, explanation: "The Council of Trent." },
        { prompt: "The Catholic Reformation took place in the", options: ["sixteenth century", "first century", "tenth century", "nineteenth century"], correctIndex: 0, explanation: "The 1500s (16th century)." },
        { prompt: "Reform-minded Catholics wanted to correct abuses in order to", options: ["make the Church stronger and more respected", "join the Protestants", "abolish the Church", "end the Papacy"], correctIndex: 0, explanation: "To restore the Church's standing." },
        { prompt: "A root cause was the desire to define and defend", options: ["Catholic doctrine against Protestant ideas", "the Roman Republic", "Greek philosophy", "African empires"], correctIndex: 0, explanation: "Defending Catholic teaching." },
        { prompt: "The abuses attacked had first been highlighted by the", options: ["Protestants", "Persians", "Romans", "Greeks"], correctIndex: 0, explanation: "Protestants had attacked these abuses." },
        { prompt: "The Inquisition's job was to find and punish", options: ["heresy", "trade", "farming", "printing"], correctIndex: 0, explanation: "It targeted heresy." },
        { prompt: "A common error is to think the Catholic Reformation", options: ["only attacked Protestants and did not reform abuses", "reformed some abuses", "used the Council of Trent", "was led by Paul III"], correctIndex: 0, explanation: "It also reformed genuine abuses." },
        { prompt: "Another error is to think the Church", options: ["changed its core doctrine", "held the Council of Trent", "founded the Jesuits", "created the Inquisition"], correctIndex: 0, explanation: "There was 'no budging on doctrine'." },
        { prompt: "Which describes the relationship of the two Reformations?", options: ["the Catholic Reformation responded to the Protestant one", "they were unrelated", "the Protestant one responded to the Catholic one", "both began in Persia"], correctIndex: 0, explanation: "The Catholic Reformation answered the Protestant one." },
        { prompt: "The three main instruments of the Catholic Reformation were the", options: ["Inquisition, the Jesuits and the Council of Trent", "Senate, consuls and assemblies", "phalanx, legion and navy", "Huguenots, Puritans and Presbyterians"], correctIndex: 0, explanation: "Inquisition, Jesuits and Council of Trent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What was the Catholic Reformation, and what was its main cause?", answerKey: "The Catholic (Counter-)Reformation was the Roman Catholic Church's sixteenth-century response to the Protestant Reformation; its main cause was the need to stop the spread of Protestantism and win back lost believers (led by Pope Paul III). Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two real abuses in the Church that the Catholic Reformation sought to correct.", answerKey: "Any two: poorly educated clergy; bishops collecting income from parishes they never visited (absentee bishops); general worldliness and corruption. Award 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "On matters of doctrine, the Catholic Reformation decided", options: ["there was no budging — doctrine would not change", "to adopt Luther's views", "to abolish the sacraments", "to end the Papacy"], correctIndex: 0, answerKey: "No budging on doctrine. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name the three main instruments created by the Catholic Reformation.", answerKey: "The Inquisition (Holy Office, 1542); the Jesuits (Society of Jesus, Ignatius Loyola); the Council of Trent (1545–1563). Award marks up to 4 (1–2 each).", marks: 4 },
        { type: "ESSAY", prompt: "Explain the root causes of the Catholic Reformation.", answerKey: "Award marks for: the Protestant challenge and the need to stop Protestantism and win back believers (Paul III), 8 marks; the need to reform genuine abuses (uneducated clergy, absentee bishops, corruption), 8 marks; the determination to defend Catholic doctrine ('no budging'), 5 marks; naming the instruments (Inquisition, Jesuits, Trent), 2 marks; conclusion, 2 marks. Saying doctrine changed caps at 16.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — Western Civilization: A Concise History II (Brooks), 8.02 The Inquisition and the Council of Trent (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_II_(Brooks)/08:_The_Catholic_Reformation/8.02:_The_Inquisition_and_the_Council_of_Trent)
      slug: "impact-of-the-catholic-reformation",
      title: "Impact of the Catholic Reformation",
      objective:
        "By the end of the topic, learners should be able to describe the impact of the Catholic Reformation — the Council of Trent's reforms, the Inquisition and Jesuits, and the renewal of the Catholic Church.",
      estimatedMinutes: 90,
      notes: `## The Council of Trent (1545–1563)

The **Council of Trent** met in three sessions under Popes **Paul III, Paul IV and Pius IV**. Its impact was twofold — it **reaffirmed doctrine** and **reformed discipline**.

- **Reaffirmed doctrine:** it upheld nearly all disputed Catholic teachings, including the **necessity of the sacraments** and of **good works** (not faith alone) in salvation — directly rejecting the Protestant positions.
- **Reformed discipline:**
  - It **banned the selling of indulgences**.
  - It required **formal training of priests** through **seminaries**, so clergy received education, Latin and theological knowledge.

## The Inquisition and the Jesuits

- The **Inquisition (Holy Office, 1542)** pursued and punished **heresy**, holding Protestantism in check in Catholic lands (especially Italy and Spain).
- The **Jesuits** educated Catholic youth, ran schools, sent **missionaries** worldwide (Asia, Africa, the Americas) and won many people back to the Catholic Church.

## The overall impact

- The Catholic Church was **renewed and strengthened**: better-trained clergy, clearer doctrine and renewed enthusiasm among laypeople.
- Protestantism was **halted** in much of Europe; **Southern Europe stayed Catholic**, and the battle lines between the faiths were firmly set by the 1560s.
- The Church launched "a massive, and largely successful, campaign" to reaffirm the loyalty of Catholic laypeople.
- Catholic **missions** carried the faith across the world.

## Common errors and misconceptions

- **Thinking the Council of Trent changed Catholic doctrine** — it **reaffirmed** doctrine (sacraments, good works) and only reformed **discipline**.
- **Believing indulgences were untouched** — Trent **banned the sale** of indulgences.
- **Assuming the Catholic Reformation failed** — it **renewed** the Church and **halted** Protestant expansion in much of Europe.`,
      workedExample: `**Question:** Describe the impact of the Catholic Reformation, especially the Council of Trent.

**Solution**

*Step 1 — the Council of Trent's two effects.*
The **Council of Trent (1545–1563)** both **reaffirmed doctrine** — upholding the **sacraments** and **good works** (rejecting "faith alone") — and **reformed discipline**, **banning the sale of indulgences** and requiring **seminary training** for priests.

*Step 2 — the Inquisition and Jesuits.*
The **Inquisition** punished heresy and held Protestantism in check; the **Jesuits** educated Catholic youth and sent **missionaries** worldwide, winning many back to Rome.

*Step 3 — the overall impact.*
The Church emerged **renewed and strengthened**, with better clergy and clearer doctrine; **Protestant expansion was halted** and Southern Europe stayed Catholic; Catholic **missions** spread the faith globally.

**Conclusion:** through the Council of Trent, the Inquisition and the Jesuits, the Catholic Reformation reaffirmed doctrine, reformed abuses, renewed the Church and stopped the spread of Protestantism in much of Europe.`,
      quiz: [
        { prompt: "The great council of the Catholic Reformation was the Council of", options: ["Trent (1545–1563)", "Nicaea", "Worms", "Chalcedon"], correctIndex: 0, explanation: "The Council of Trent." },
        { prompt: "The Council of Trent both reaffirmed doctrine and", options: ["reformed Church discipline", "abolished the Papacy", "joined the Lutherans", "ended the sacraments"], correctIndex: 0, explanation: "It did both." },
        { prompt: "On salvation, Trent upheld the necessity of", options: ["the sacraments and good works", "faith alone", "buying indulgences", "predestination"], correctIndex: 0, explanation: "Sacraments and good works, rejecting 'faith alone'." },
        { prompt: "Trent's teaching on salvation directly rejected which Protestant idea?", options: ["justification by faith alone", "the Trinity", "the resurrection", "the Ten Commandments"], correctIndex: 0, explanation: "It rejected 'faith alone'." },
        { prompt: "One reform of Trent was to ban the", options: ["selling of indulgences", "reading of the Bible", "training of priests", "building of churches"], correctIndex: 0, explanation: "It banned selling indulgences." },
        { prompt: "Trent required priests to be trained in", options: ["seminaries", "the army", "trade guilds", "monasteries only"], correctIndex: 0, explanation: "Formal seminary training." },
        { prompt: "The body that pursued heresy was the", options: ["Inquisition (Holy Office)", "Council of Five Hundred", "Roman Senate", "Delian League"], correctIndex: 0, explanation: "The Inquisition held Protestantism in check." },
        { prompt: "The Jesuits contributed mainly through", options: ["education and worldwide missions", "selling indulgences", "leading Geneva", "printing Luther's Bible"], correctIndex: 0, explanation: "They taught and did missionary work." },
        { prompt: "Jesuit missionaries carried Catholicism to", options: ["Asia, Africa and the Americas", "only Italy", "no new lands", "Persia alone"], correctIndex: 0, explanation: "They spread the faith worldwide." },
        { prompt: "The overall impact on the Catholic Church was that it was", options: ["renewed and strengthened", "abolished", "made Protestant", "left unchanged"], correctIndex: 0, explanation: "The Church was renewed." },
        { prompt: "Protestant expansion in much of Europe was", options: ["halted", "encouraged by Trent", "unaffected", "made compulsory"], correctIndex: 0, explanation: "The Catholic Reformation halted Protestant growth." },
        { prompt: "Southern Europe after the Catholic Reformation remained", options: ["Catholic", "Protestant", "pagan", "Muslim"], correctIndex: 0, explanation: "Southern Europe stayed Catholic." },
        { prompt: "By which decade were the Catholic–Protestant battle lines set?", options: ["the 1560s", "the 700s", "the 1900s", "the 200s"], correctIndex: 0, explanation: "By the 1560s." },
        { prompt: "Trent aimed to reaffirm the loyalty of", options: ["Catholic laypeople", "the Lutherans", "the Huguenots", "the Presbyterians"], correctIndex: 0, explanation: "It renewed lay Catholic loyalty." },
        { prompt: "A common error is to think Trent", options: ["changed Catholic doctrine", "reformed discipline", "banned indulgence sales", "required seminaries"], correctIndex: 0, explanation: "It reaffirmed doctrine; it did not change it." },
        { prompt: "Trent's action on indulgences was to", options: ["ban their sale", "increase their price", "leave them untouched", "make them faith alone"], correctIndex: 0, explanation: "It banned selling indulgences." },
        { prompt: "The Council of Trent met under Popes Paul III, Paul IV and", options: ["Pius IV", "Leo X", "Gregory I", "Peter"], correctIndex: 0, explanation: "Three sessions, ending under Pius IV." },
        { prompt: "Better-trained clergy after Trent means priests who had", options: ["seminary education and theological knowledge", "no schooling", "military ranks", "trading licences"], correctIndex: 0, explanation: "Seminary-trained clergy." },
        { prompt: "The Catholic Reformation is best judged as", options: ["largely successful in renewing the Church and halting Protestantism", "a total failure", "a Protestant movement", "unrelated to Trent"], correctIndex: 0, explanation: "It was largely successful." },
        { prompt: "The three pillars of the Catholic Reformation's impact were", options: ["the Council of Trent, the Inquisition and the Jesuits", "Luther, Calvin and Loyola all as Protestants", "the Senate, consuls and assemblies", "the phalanx, legion and navy"], correctIndex: 0, explanation: "Trent, the Inquisition and the Jesuits." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the two kinds of action taken by the Council of Trent.", answerKey: "It reaffirmed doctrine (upholding the sacraments and good works in salvation, rejecting 'faith alone') and reformed discipline (banned the sale of indulgences; required seminary training of priests). Award 2 marks for each kind.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How did the Inquisition and the Jesuits contribute to the Catholic Reformation?", answerKey: "The Inquisition (Holy Office, 1542) pursued and punished heresy, holding Protestantism in check in Catholic lands. The Jesuits educated Catholic youth, ran schools and sent missionaries worldwide, winning many back to the Church. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Council of Trent's teaching on salvation upheld", options: ["the sacraments and good works", "faith alone", "predestination", "indulgence-buying"], correctIndex: 0, answerKey: "Sacraments and good works, rejecting 'faith alone'. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe the overall impact of the Catholic Reformation on the Church and on Europe.", answerKey: "The Church was renewed and strengthened (better-trained clergy, clearer doctrine, renewed lay enthusiasm); Protestant expansion was halted in much of Europe and Southern Europe stayed Catholic; Catholic missions spread the faith worldwide. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the impact of the Catholic Reformation, focusing on the Council of Trent, the Inquisition and the Jesuits.", answerKey: "Award marks for: the Council of Trent reaffirming doctrine (sacraments, good works), 6 marks; Trent reforming discipline (banning indulgence sales, seminary training), 5 marks; the Inquisition holding Protestantism in check, 4 marks; the Jesuits' education and worldwide missions, 4 marks; the overall renewal of the Church and halting of Protestantism, 4 marks; conclusion, 2 marks. Saying Trent changed doctrine caps at 16.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 7.4 Nationalism, Liberalism, Conservatism, and the Political Order (https://openstax.org/books/world-history-volume-2/pages/7-4-nationalism-liberalism-conservatism-and-the-political-order)
      slug: "rise-of-nationalism-in-europe",
      title: "The Rise of Nationalism in Europe",
      objective:
        "By the end of the topic, learners should be able to define nationalism, explain how a common national identity fostered it, and describe the rise of nationalism in nineteenth-century Europe.",
      estimatedMinutes: 100,
      notes: `## What nationalism is

- **Nationalism** is "a radical political ideology that promotes the interests of the **nation** over international concerns" — loyalty and devotion to one's nation, often claiming its uniqueness and right to **self-government**.
- A **nation** is a large group of people who feel they belong together through a **common national identity**.

## What creates a common national identity

- A shared **language**, **ethnicity**, **religion**, **history** or **sense of common origin** — or a mix of these — makes people feel they are one nation.
- This shared identity is the **root** of nationalism: people who feel they are one nation want their **own state**.

## Why nationalism rose in the nineteenth century

- The **French Revolution** and the wars that followed spread **loyalty to the nation-state**, which "represented the people," replacing older loyalties to **dynasties (royal families)** and to **empires**.
- People increasingly demanded that each nation should govern itself — the idea of the **nation-state** (an independent state for a people).
- Across Europe, **revolutions and movements** sprang up seeking **independence** and **unification** for national groups.

## Nationalism in action: unification

- **Italy:** many small states were united into one **Kingdom of Italy (1861)** — the **Risorgimento**.
- **Germany:** many German states were united into the **German Empire (1871)**.
- Nationalism also stirred peoples inside large empires (such as Austria-Hungary and the Ottoman Empire) to seek independence.

## Common errors and misconceptions

- **Confusing a nation with a state** — a **nation** is a people who feel they belong together; a **state** is the government/country. Nationalism seeks to match the two (a **nation-state**).
- **Thinking nationalism is only about war** — its core is a shared **identity** and the demand for **self-government**.
- **Dating it too early** — modern European nationalism grew strong especially **after the French Revolution**, in the nineteenth century.`,
      workedExample: `**Question:** Define nationalism and explain how it rose in nineteenth-century Europe.

**Solution**

*Step 1 — define it.*
**Nationalism** is a political ideology that puts the **nation** first — loyalty to one's nation and the claim that a people should **govern itself**. A **nation** is a group bound by a **common national identity**.

*Step 2 — the source of national identity.*
A shared **language, ethnicity, religion, history or origin** makes people feel they are one nation; this shared identity is the **root** of nationalism.

*Step 3 — why it rose.*
The **French Revolution** and its wars spread loyalty to the **nation-state** "which represented the people," replacing loyalty to kings and empires. People demanded that each nation rule itself.

*Step 4 — nationalism in action.*
This drove the **unification of Italy (1861)** and **Germany (1871)** and stirred peoples in large empires to seek independence.

**Conclusion:** nationalism — loyalty to a nation bound by common identity and its right to self-rule — rose across nineteenth-century Europe after the French Revolution, producing new nation-states like Italy and Germany.`,
      quiz: [
        { prompt: "Nationalism is an ideology that promotes the interests of the", options: ["nation above international concerns", "Church above all", "Roman Empire", "individual only"], correctIndex: 0, explanation: "It puts the nation first." },
        { prompt: "A 'nation' is best described as", options: ["a people who feel they belong together (common identity)", "a single city", "a trading company", "a religious order"], correctIndex: 0, explanation: "A people bound by common identity." },
        { prompt: "A common national identity can be based on", options: ["shared language, ethnicity, religion or history", "the weather", "trade routes only", "military ranks"], correctIndex: 0, explanation: "Shared language, religion, history, etc." },
        { prompt: "The root of nationalism is", options: ["a shared national identity and desire for self-government", "hatred of all religion", "love of empires", "the fall of Rome"], correctIndex: 0, explanation: "Shared identity and self-rule." },
        { prompt: "Which event helped spread modern nationalism?", options: ["the French Revolution", "the Punic Wars", "the Bronze Age", "the Hellenistic age"], correctIndex: 0, explanation: "The French Revolution and its wars." },
        { prompt: "Nationalism replaced older loyalties to", options: ["dynasties (royal families) and empires", "the nation", "language", "self-government"], correctIndex: 0, explanation: "It replaced dynastic and imperial loyalty." },
        { prompt: "A 'nation-state' is", options: ["an independent state for a people/nation", "a city-state", "an empire of many nations", "a trading league"], correctIndex: 0, explanation: "A state matching a nation." },
        { prompt: "In the nineteenth century, nationalism drove the", options: ["unification of Italy and Germany", "fall of Athens", "founding of Rome", "conquest of Persia"], correctIndex: 0, explanation: "It unified Italy and Germany." },
        { prompt: "Italy was united into one kingdom in", options: ["1861", "1517", "1789", "1945"], correctIndex: 0, explanation: "The Kingdom of Italy, 1861." },
        { prompt: "The Italian unification is called the", options: ["Risorgimento", "Reformation", "Renaissance", "Enlightenment"], correctIndex: 0, explanation: "The Risorgimento." },
        { prompt: "Germany was united into an empire in", options: ["1871", "1517", "1815", "1945"], correctIndex: 0, explanation: "The German Empire, 1871." },
        { prompt: "Nationalism also stirred peoples inside", options: ["large empires like Austria-Hungary and the Ottoman Empire", "the Roman Republic", "ancient Sumer", "the Hellenistic kingdoms"], correctIndex: 0, explanation: "It pushed for independence within empires." },
        { prompt: "The nation-state idea says that each nation should", options: ["govern itself", "be ruled by a foreign king", "join one world empire", "abolish government"], correctIndex: 0, explanation: "Each nation should rule itself." },
        { prompt: "A common error is to confuse a nation with", options: ["a state (the government/country)", "a language", "a religion", "an army"], correctIndex: 0, explanation: "A nation is a people; a state is the country." },
        { prompt: "Nationalism's core is", options: ["a shared identity and demand for self-government", "only warfare", "only trade", "only religion"], correctIndex: 0, explanation: "Identity and self-rule are the core." },
        { prompt: "Modern European nationalism grew strong especially", options: ["after the French Revolution", "in ancient Greece", "in the Bronze Age", "under the Roman Republic"], correctIndex: 0, explanation: "In the nineteenth century." },
        { prompt: "The French revolutionary wars spread loyalty to the state, which represented the", options: ["people", "Pope", "emperor of Persia", "Greek gods"], correctIndex: 0, explanation: "The nation-state represented the people." },
        { prompt: "Which is an example of nationalism creating a new state?", options: ["the unification of Germany (1871)", "the fall of Rome (476 CE)", "the Council of Trent", "the Battle of Marathon"], correctIndex: 0, explanation: "German unification in 1871." },
        { prompt: "Nationalism claims that a nation has a right to", options: ["political self-government (autonomy)", "no government", "rule all others", "abolish its own language"], correctIndex: 0, explanation: "The right of a nation to self-rule." },
        { prompt: "A shared sense of common origin helps build", options: ["national identity", "the Roman Senate", "the Hellenistic age", "the feudal system"], correctIndex: 0, explanation: "Common origin builds national identity." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define nationalism and 'common national identity'.", answerKey: "Nationalism is a political ideology that promotes the interests of the nation above international concerns and claims a nation's right to self-government. A common national identity is the shared sense of belonging built on shared language, ethnicity, religion, history or origin. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why nationalism rose in nineteenth-century Europe.", answerKey: "The French Revolution and its wars spread loyalty to the nation-state, which represented the people, replacing older loyalties to dynasties and empires; people came to demand that each nation govern itself (the nation-state idea), and revolutions and movements sought independence and unification. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The unification of Italy (1861) is known as the", options: ["Risorgimento", "Reformation", "Renaissance", "Enlightenment"], correctIndex: 0, answerKey: "The Risorgimento. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a 'nation' and a 'state'.", answerKey: "A nation is a group of people who feel they belong together through a common identity (language, history, religion, origin); a state is the government/country. Nationalism seeks to match the two in a nation-state. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the rise of nationalism in Europe, its basis in common national identity, and its results.", answerKey: "Award marks for: defining nationalism and national identity, 6 marks; the basis of identity (shared language, ethnicity, religion, history), 5 marks; the role of the French Revolution and the shift from dynastic/imperial to national loyalty, 6 marks; the nation-state idea and results (unification of Italy 1861 and Germany 1871; independence movements in empires), 6 marks; conclusion, 2 marks. Confusing nation and state should cost marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 7.4 Nationalism, Liberalism, Conservatism, and the Political Order (https://openstax.org/books/world-history-volume-2/pages/7-4-nationalism-liberalism-conservatism-and-the-political-order) and LibreTexts — Western Civilization: A Concise History III (Brooks), 4.4 National Unifications (https://human.libretexts.org/Bookshelves/History/World_History/Western_Civilization_-_A_Concise_History_III_(Brooks)/04:_The_Politics_of_the_Nineteenth_Century/4.04:_National_Unifications)
      slug: "major-european-nationalists",
      title: "Major European Nationalists",
      objective:
        "By the end of the topic, learners should be able to identify major European nationalists — Mazzini, Cavour, Garibaldi and Victor Emmanuel II in Italy, and Bismarck in Germany — and their roles in unification.",
      estimatedMinutes: 100,
      notes: `## Nationalists who built new nations

Nationalism was carried by leaders — "**nationalists**" — who worked to unite their peoples into single nation-states. The clearest examples are the makers of **Italy** and **Germany**.

## The makers of Italy (unified 1861)

| Nationalist | Role in Italian unification |
| --- | --- |
| **Giuseppe Mazzini** | founded **"Young Italy"** (1831); the **idealist** who preached a shared Italian identity and republican unity |
| **Count Cavour** | prime minister of **Piedmont-Sardinia**; the **statesman** who used diplomacy and war (with French help, 1859) to drive Austria from northern Italy |
| **Giuseppe Garibaldi** | the **soldier** who led the "Red Shirts," conquered the south, and handed it to the king |
| **Victor Emmanuel II** | **King** of Piedmont-Sardinia who became the first **King of a united Italy in 1861** |

- Their combined work — idea (Mazzini), diplomacy (Cavour) and arms (Garibaldi) — produced the **Kingdom of Italy (1861)**, the **Risorgimento**; **Rome** was added in **1870**.

## The maker of Germany (unified 1871)

- **Otto von Bismarck**, prime minister of **Prussia** from **1862**, united the German states around Protestant Prussia.
- He practised **"Realpolitik"** — cold, practical politics — and used a series of **wars** with **Denmark, Austria and France** to build German power (gaining Schleswig-Holstein and Alsace-Lorraine).
- On **18 January 1871** the **German Empire** was proclaimed and Bismarck became its **Imperial Chancellor**.

## Why they mattered

- These nationalists turned the **idea** of nationalism into real **nation-states**, redrawing the map of Europe.
- Their success inspired other national movements across Europe and beyond.

## Common errors and misconceptions

- **Giving all the credit to one person** — Italy was made by **several** men with different roles (Mazzini the thinker, Cavour the diplomat, Garibaldi the soldier, Victor Emmanuel the king).
- **Confusing the two unifications** — **Italy (1861)** was led by Mazzini/Cavour/Garibaldi; **Germany (1871)** by **Bismarck**.
- **Thinking Bismarck was an idealist** — he was a hard **realist** ("Realpolitik") who used war and diplomacy.`,
      workedExample: `**Question:** Identify the major European nationalists and their roles in the unification of Italy and Germany.

**Solution**

*Step 1 — the makers of Italy.*
Italian unification (**1861**) needed several men: **Mazzini** supplied the **idea** ("Young Italy," 1831); **Cavour**, prime minister of Piedmont, supplied the **diplomacy** and war that drove out Austria; **Garibaldi** supplied the **army** that took the south; and **Victor Emmanuel II** became the first **king** of a united Italy.

*Step 2 — the maker of Germany.*
German unification (**1871**) was led by **Otto von Bismarck** of Prussia, who used **"Realpolitik"** and wars with Denmark, Austria and France, becoming **Imperial Chancellor** of the new German Empire on **18 January 1871**.

*Step 3 — why they mattered.*
They turned nationalism into real **nation-states**, redrawing Europe's map and inspiring other movements.

**Conclusion:** the major nationalists were Mazzini, Cavour, Garibaldi and Victor Emmanuel II (Italy, 1861) and Bismarck (Germany, 1871) — men who built modern nations out of the idea of nationalism.`,
      quiz: [
        { prompt: "The nationalist who founded 'Young Italy' in 1831 was", options: ["Giuseppe Mazzini", "Count Cavour", "Bismarck", "Victor Emmanuel II"], correctIndex: 0, explanation: "Mazzini founded Young Italy." },
        { prompt: "Mazzini is best described as the ___ of Italian unification.", options: ["idealist/thinker", "soldier", "king", "banker"], correctIndex: 0, explanation: "He preached the idea of a united Italy." },
        { prompt: "The prime minister of Piedmont-Sardinia who used diplomacy was", options: ["Count Cavour", "Garibaldi", "Mazzini", "Bismarck"], correctIndex: 0, explanation: "Cavour was the statesman of unification." },
        { prompt: "In 1859 Cavour drove Austria from northern Italy with the help of", options: ["France", "Britain", "Persia", "the Ottomans"], correctIndex: 0, explanation: "French military support in 1859." },
        { prompt: "The soldier who led the 'Red Shirts' and conquered southern Italy was", options: ["Giuseppe Garibaldi", "Cavour", "Mazzini", "Victor Emmanuel II"], correctIndex: 0, explanation: "Garibaldi led the military campaigns." },
        { prompt: "Garibaldi handed his conquests to", options: ["King Victor Emmanuel II", "the Pope", "Bismarck", "Napoleon"], correctIndex: 0, explanation: "He gave the south to the king." },
        { prompt: "The first king of a united Italy was", options: ["Victor Emmanuel II", "Cavour", "Mazzini", "Garibaldi"], correctIndex: 0, explanation: "Victor Emmanuel II, from 1861." },
        { prompt: "Italy was unified into a kingdom in", options: ["1861", "1871", "1517", "1789"], correctIndex: 0, explanation: "The Kingdom of Italy, 1861." },
        { prompt: "The Italian unification is called the", options: ["Risorgimento", "Reformation", "Realpolitik", "Renaissance"], correctIndex: 0, explanation: "The Risorgimento." },
        { prompt: "Rome was added to united Italy in", options: ["1870", "1861", "1815", "1900"], correctIndex: 0, explanation: "Rome was annexed in 1870." },
        { prompt: "The chief maker of German unification was", options: ["Otto von Bismarck", "Garibaldi", "Mazzini", "Cavour"], correctIndex: 0, explanation: "Bismarck united Germany." },
        { prompt: "Bismarck was prime minister of", options: ["Prussia", "Austria", "France", "Italy"], correctIndex: 0, explanation: "Prussia, from 1862." },
        { prompt: "Bismarck's cold, practical politics was called", options: ["Realpolitik", "Risorgimento", "Reformation", "liberalism"], correctIndex: 0, explanation: "Realpolitik." },
        { prompt: "Bismarck built German power through wars with", options: ["Denmark, Austria and France", "Persia and Egypt", "Italy and Spain", "Britain and Russia"], correctIndex: 0, explanation: "Denmark, Austria and France." },
        { prompt: "From France, Bismarck's Germany gained", options: ["Alsace and Lorraine", "Sicily", "Bavaria only", "Prussia"], correctIndex: 0, explanation: "Alsace-Lorraine from France." },
        { prompt: "The German Empire was proclaimed on", options: ["18 January 1871", "14 July 1789", "31 October 1517", "1 January 1861"], correctIndex: 0, explanation: "18 January 1871." },
        { prompt: "Bismarck's title in the new empire was", options: ["Imperial Chancellor", "King of Italy", "Pope", "Consul"], correctIndex: 0, explanation: "He became Imperial Chancellor." },
        { prompt: "A common error is to think Italy was united by", options: ["one man alone", "several men with different roles", "Mazzini's idea", "Garibaldi's army"], correctIndex: 0, explanation: "It took several leaders, not one." },
        { prompt: "Bismarck is best described as", options: ["a hard realist (Realpolitik)", "a dreamy idealist", "a Catholic monk", "a Greek philosopher"], correctIndex: 0, explanation: "He practised Realpolitik." },
        { prompt: "Which correctly pairs a nationalist with a country?", options: ["Bismarck – Germany", "Garibaldi – Germany", "Cavour – Prussia", "Mazzini – France"], correctIndex: 0, explanation: "Bismarck united Germany; the others made Italy." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four leaders of Italian unification and give each one's role.", answerKey: "Mazzini — the idealist/thinker who founded Young Italy (1831); Cavour — prime minister of Piedmont-Sardinia, the diplomat who drove Austria out (with French help, 1859); Garibaldi — the soldier who conquered the south; Victor Emmanuel II — the first king of united Italy (1861). Award 1 mark each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How did Bismarck unify Germany?", answerKey: "As prime minister of Prussia (from 1862), Bismarck practised Realpolitik and used wars with Denmark, Austria and France (gaining Schleswig-Holstein and Alsace-Lorraine) to unite the German states around Prussia; the German Empire was proclaimed on 18 January 1871, with Bismarck as Imperial Chancellor. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Bismarck's practical, realistic politics was called", options: ["Realpolitik", "Risorgimento", "Reformation", "liberalism"], correctIndex: 0, answerKey: "Realpolitik. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why is it wrong to credit Italian unification to a single person?", answerKey: "Italy was made by several men with different roles: Mazzini supplied the idea (Young Italy), Cavour the diplomacy and war, Garibaldi the army, and Victor Emmanuel II the crown; unification (1861) resulted from their combined work. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the major European nationalists and their roles in the unification of Italy and Germany.", answerKey: "Award marks for: the Italian makers — Mazzini (idea/Young Italy), Cavour (diplomacy, Austria driven out 1859), Garibaldi (army, the south), Victor Emmanuel II (first king, 1861), 10 marks; German unification under Bismarck (Prussia, Realpolitik, wars with Denmark/Austria/France, empire 1871), 8 marks; why these nationalists mattered (turning the idea into nation-states, inspiring others), 3 marks; conclusion, 2 marks. Crediting one person for Italy, or confusing the two unifications, caps at 14.", marks: 23 },
      ],
    },
  ],
};
