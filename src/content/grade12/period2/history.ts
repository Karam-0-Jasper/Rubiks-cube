import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 12,
// Semester One, Period II: Foreign Policy of Liberia. The MoE CONTENTS list
// has seven top-level items, each rebuilt here as its own topic: (1) foreign
// policy objectives; (2) formulation and implementation of foreign policy;
// (3) relations with Europe; (4) relations with the United States of America;
// (5) the League of Nations / United Nations; (6) relations with Asia; and
// (7) relations with the OAU/AU, ECOWAS and the Mano River Union.
//
// SOURCING NOTE / SYLLABUS GAP: the approved published education sources
// (OpenStax, CK-12, LibreTexts) do NOT carry a dedicated account of Liberia's
// own foreign policy. Per AGENTS.md, no Liberia-specific foreign-policy facts
// are invented here. Each topic is built from the CLOSEST covered themes —
// the concept of the national interest and foreign policy, Cold War alliances
// and instruments (Truman Doctrine, Marshall Plan, NATO/Warsaw Pact), the
// European partition of Africa, the American Colonization Society's founding
// of Liberia, the founding of the United Nations, non-alignment and the
// Global South, and pan-Africanism/regional cooperation — and the Liberia-
// specific gap is flagged inside each topic.
export const historyG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Foreign Policy of Liberia",
  summary:
    "Period II of the MoE Grade 12 History syllabus. Learners study Liberia's foreign policy — its objectives; how policy is formulated and implemented; and its relations with Europe, the United States, the League of Nations and United Nations, Asia, and the OAU/AU, ECOWAS and Mano River Union. Because the approved published sources do not treat Liberia's own foreign policy directly, each topic is taught through the closest covered themes (the national interest and foreign-policy concept, Cold War alliances and instruments, the European partition of Africa, the American Colonization Society's founding of Liberia, the United Nations, non-alignment and pan-Africanism), with the Liberia-specific gaps flagged for the teacher.",
  topics: [
    {
      // source: OpenStax — World History Volume 2, 14.1 The Cold War Begins (https://openstax.org/books/world-history-volume-2/pages/14-1-the-cold-war-begins) and 15.4 Ongoing Problems and Solutions (https://openstax.org/books/world-history-volume-2/pages/15-4-ongoing-problems-and-solutions)
      slug: "foreign-policy-objectives",
      title: "Foreign Policy Objectives and the National Interest",
      objective:
        "By the end of the topic, learners should be able to explain what foreign policy is and the general objectives (national interest) states pursue, using the closest sourced Cold War themes, while recognising that Liberia's specific objectives lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## What foreign policy is

- **Foreign policy** is the set of goals and strategies a state uses to guide its dealings with other states and international bodies.
- Its objectives express the country's **national interest** — the core things a state seeks to protect and advance.

## General foreign-policy objectives (from sourced themes)

- **Security.** During the Cold War, states organised their foreign policy around security. The U.S. and its allies built **NATO (1949)**; the Soviet bloc built the **Warsaw Pact (1955)** — opposing alliances meant to protect each side.
- **Ideology and political system.** The U.S. envisioned "democratically governed nations" enjoying "economic prosperity thanks to capitalistic endeavors," while the USSR sought **satellite states** for its own security — showing how a state's values shape its foreign goals.
- **Economic interest.** The **Marshall Plan (1947)** distributed about **12 billion dollars** to rebuild Western Europe, an economic objective (also meant to block the appeal of communism).
- **Prestige and influence.** Superpowers competed for "ideological, social, economic, technological, and military supremacy" — a contest for standing in the world.

## Vital vs non-vital interests

- A **vital interest** is one a state will defend at almost any cost (survival, security, independence).
- A **non-vital interest** is desirable but not worth extreme sacrifice (trade advantages, prestige, friendly ties).
- The Cold War alliances show states ranking security as a vital interest above lesser aims.

## Applying the framework to Liberia

- The MoE item asks about Liberia's **vital and non-vital interests up to 1920** and the objectives it pursued. Using the framework, any state's objectives are its security, independence, political values, economic welfare and influence.

## Source note and syllabus gap

- The approved sources do **not** state Liberia's specific foreign-policy objectives or its ranking of vital and non-vital interests. Those are **not invented here**; use the MoE primary texts (including Dr. D. Elwood Dunn's work on Liberian foreign policy) for the Liberia-specific detail.`,
      workedExample: `**Question:** What is foreign policy, and what general objectives do states pursue? Illustrate from Cold War examples.

**Solution**

*Step 1 — define it.*
Foreign policy is a state's goals and strategies for dealing with other states; its objectives express the national interest.

*Step 2 — security.*
Security is usually the top objective: the U.S. built NATO (1949) and the USSR the Warsaw Pact (1955) to protect each bloc.

*Step 3 — ideology and economy.*
States also pursue their political values (U.S. democracy/capitalism vs Soviet satellite states) and economic interests (the Marshall Plan, ~12 billion dollars).

*Step 4 — rank the interests.*
Vital interests (survival, security, independence) outrank non-vital ones (trade advantages, prestige).

**Conclusion:** foreign policy pursues security, political values, economic welfare and influence, with vital interests ranked above non-vital ones; Liberia's specific objectives must be taken from the MoE primary texts.`,
      quiz: [
        { prompt: "Foreign policy is a state's", options: ["goals and strategies for dealing with other states", "system of local taxes", "school curriculum", "criminal law"], correctIndex: 0, explanation: "Foreign policy guides a state's external relations." },
        { prompt: "Foreign-policy objectives express a country's", options: ["national interest", "weather", "population census", "sports league"], correctIndex: 0, explanation: "Objectives express the national interest." },
        { prompt: "NATO, a security alliance, was formed in", options: ["1949", "1885", "1991", "1920"], correctIndex: 0, explanation: "NATO was founded in 1949." },
        { prompt: "The Soviet-bloc alliance formed in 1955 was the", options: ["Warsaw Pact", "Marshall Plan", "League of Nations", "Mano River Union"], correctIndex: 0, explanation: "The Warsaw Pact was formed in 1955." },
        { prompt: "The Marshall Plan (1947) distributed about", options: ["12 billion dollars", "400 million dollars", "12 million dollars", "1 trillion dollars"], correctIndex: 0, explanation: "About 12 billion dollars to rebuild Western Europe." },
        { prompt: "A vital interest is one a state will", options: ["defend at almost any cost", "give up easily", "ignore", "sell to rivals"], correctIndex: 0, explanation: "Vital interests concern survival and security." },
        { prompt: "A non-vital interest is", options: ["desirable but not worth extreme sacrifice", "the same as survival", "always defended by war", "never pursued"], correctIndex: 0, explanation: "Non-vital interests are desirable but lower priority." },
        { prompt: "The U.S. Cold War vision emphasised", options: ["democratically governed, capitalist nations", "Soviet satellite states", "colonial empires", "world monarchy"], correctIndex: 0, explanation: "The U.S. favoured democracy and capitalism." },
        { prompt: "The USSR sought satellite states mainly for", options: ["its own security", "religious conversion", "sport", "tourism"], correctIndex: 0, explanation: "The USSR built a security buffer of satellites." },
        { prompt: "Superpowers competed for supremacy that was", options: ["ideological, economic, technological and military", "only athletic", "only cultural", "only religious"], correctIndex: 0, explanation: "The rivalry spanned many fields." },
        { prompt: "Security is usually ranked as a", options: ["vital interest", "non-vital interest", "trivial matter", "domestic-only issue"], correctIndex: 0, explanation: "Security is a core vital interest." },
        { prompt: "The approved sources state Liberia's own foreign-policy objectives", options: ["no — this gap is flagged", "yes, in full", "only for 1920", "only in CK-12"], correctIndex: 0, explanation: "The sources do not give Liberia's specific objectives." },
        { prompt: "The Marshall Plan also aimed to", options: ["block the appeal of communism", "expand colonies", "start a war", "end all trade"], correctIndex: 0, explanation: "Economic recovery was meant to reduce communism's appeal." },
        { prompt: "Which is an economic foreign-policy objective?", options: ["rebuilding trading partners' economies", "winning a football match", "writing a constitution", "building a school library"], correctIndex: 0, explanation: "Economic welfare/trade is a foreign-policy objective." },
        { prompt: "For Liberia's specific vital and non-vital interests, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use the MoE primary texts for Liberia-specific detail." },
        { prompt: "A state's political values shape its foreign policy by", options: ["defining the kind of world order it seeks", "setting the tax rate", "choosing the national anthem", "fixing the school day"], correctIndex: 0, explanation: "Values shape the goals a state pursues abroad." },
        { prompt: "Alliances like NATO show foreign policy pursuing", options: ["collective security", "isolation from all states", "conquest of allies", "abolition of borders"], correctIndex: 0, explanation: "NATO is collective security." },
        { prompt: "The national interest is best summarised as", options: ["what a state seeks to protect and advance", "a single trade deal", "one election", "a sports trophy"], correctIndex: 0, explanation: "The national interest is the state's core goals." },
        { prompt: "Ranking interests matters because a state has", options: ["limited resources and must prioritise", "unlimited power", "no goals", "only one interest"], correctIndex: 0, explanation: "Prioritising vital over non-vital reflects limited means." },
        { prompt: "The safest way to handle Liberia-specific objectives is to", options: ["cite the MoE texts and not invent them", "guess them", "recall from memory", "omit foreign policy"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define foreign policy and the national interest.", answerKey: "Foreign policy is the set of goals and strategies a state uses to guide its relations with other states and international bodies; its objectives express the national interest — the core things a state seeks to protect and advance (security, independence, political values, economic welfare, influence). Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a vital from a non-vital interest, with an example of each.", answerKey: "A vital interest is one a state will defend at almost any cost (survival, security, independence — e.g. the Cold War security alliances). A non-vital interest is desirable but not worth extreme sacrifice (trade advantages, prestige, friendly ties). Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Marshall Plan (1947) was mainly a foreign-policy objective of the type", options: ["economic (rebuilding allies, blocking communism)", "purely military conquest", "colonial expansion", "religious mission"], correctIndex: 0, answerKey: "It was an economic objective, distributing ~12 billion dollars to rebuild Western Europe and reduce communism's appeal. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Using Cold War examples, name two general foreign-policy objectives and show how each appears.", answerKey: "Any two: security (NATO 1949 and the Warsaw Pact 1955); political values/ideology (U.S. democracy-capitalism vs Soviet satellite states); economic interest (Marshall Plan, ~12 billion dollars); prestige/influence (the contest for ideological, economic, technological and military supremacy). Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the general objectives of a state's foreign policy, using the closest sourced Cold War themes, and note the limits of the sources for Liberia.", answerKey: "Award marks for: defining foreign policy and the national interest, 4 marks; security as the leading objective (NATO, Warsaw Pact), 5 marks; ideology/political values and economic interest (U.S. vs USSR, Marshall Plan), 6 marks; the vital vs non-vital distinction and prestige/influence, 5 marks; an explicit statement that Liberia's specific objectives are not in the approved sources and must come from the MoE primary texts (e.g. Dunn), 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.1 The Cold War Begins (https://openstax.org/books/world-history-volume-2/pages/14-1-the-cold-war-begins)
      slug: "formulation-and-implementation-of-foreign-policy",
      title: "Formulation and Implementation of Foreign Policy",
      objective:
        "By the end of the topic, learners should be able to explain how states formulate and carry out foreign policy through diplomacy, alliances, aid and doctrines, using the closest sourced Cold War instruments, while recognising that Liberia's specific process lies outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## Formulation: how policy is decided

- Foreign policy is **formulated** by a state's leaders and officials in response to threats and opportunities, guided by the national interest.
- Sourced example of formulation: the U.S. diplomat **George F. Kennan**, from Moscow, wrote the **"Long Telegram,"** arguing Soviet leaders "understood only force" and that communist expansion "must thus be met with strong resistance." This analysis shaped the U.S. policy of **containment**.

## Implementation: the instruments of foreign policy

- **Doctrines (declared policy).** On **12 March 1947** President **Truman** asked Congress for **400 million dollars** for Greece and Turkey; this pledge became the **Truman Doctrine**, "the basis of Cold War foreign policy."
- **Economic aid.** Secretary of State **George C. Marshall** proposed the **European Recovery Program (1947)**, about **12 billion dollars** to rebuild Western Europe.
- **Alliances.** The U.S. and allies formed **NATO (1949)**; the Soviet bloc formed the **Warsaw Pact (1955)**.
- **Diplomacy and summits.** The **Big Three** met at **Yalta (1944)** and **Potsdam (1945)** to plan the postwar order — diplomacy as an instrument.

## From idea to action

1. **Analyse** the situation (Kennan's telegram).
2. **Decide** a strategy (containment).
3. **Announce** it as doctrine (Truman Doctrine).
4. **Carry it out** with aid, alliances and diplomacy (Marshall Plan, NATO, summits).

## Applying the framework to Liberia

- The MoE item asks how Liberia's foreign policy is **formulated and implemented**. Using the framework, any state analyses its interests, decides a strategy, and carries it out through diplomacy, treaties, aid and membership of organisations.

## Source note and syllabus gap

- The approved sources do **not** describe Liberia's own foreign-policy machinery (its executive, foreign ministry, treaties). That detail is **not invented here**; use the MoE primary texts and Ministry of Foreign Affairs reports.`,
      workedExample: `**Question:** Explain, with sourced examples, how a state moves from formulating to implementing a foreign policy.

**Solution**

*Step 1 — analysis.*
Officials study the situation: Kennan's "Long Telegram" argued Soviet expansion had to be resisted.

*Step 2 — decision.*
Leaders choose a strategy: the U.S. adopted containment.

*Step 3 — declaration.*
The strategy is announced: the Truman Doctrine (12 March 1947, 400 million dollars for Greece and Turkey).

*Step 4 — action.*
It is carried out through instruments: economic aid (Marshall Plan, ~12 billion dollars), alliances (NATO, 1949) and diplomacy (Yalta 1944, Potsdam 1945).

**Conclusion:** foreign policy runs from analysis to decision to declared doctrine to implementation by aid, alliances and diplomacy; Liberia's specific machinery must come from the MoE primary texts.`,
      quiz: [
        { prompt: "To 'formulate' a foreign policy means to", options: ["decide its goals and strategy", "carry out an election", "collect taxes", "build a road"], correctIndex: 0, explanation: "Formulation is deciding goals and strategy." },
        { prompt: "George F. Kennan's analysis was known as the", options: ["Long Telegram", "Fourteen Points", "Iron Curtain speech", "Atlantic Charter"], correctIndex: 0, explanation: "Kennan wrote the Long Telegram." },
        { prompt: "Kennan argued Soviet leaders understood only", options: ["force", "trade", "religion", "sport"], correctIndex: 0, explanation: "He said they understood only force." },
        { prompt: "The U.S. strategy shaped by Kennan's telegram was", options: ["containment", "appeasement", "colonisation", "isolation"], correctIndex: 0, explanation: "It shaped the policy of containment." },
        { prompt: "The Truman Doctrine was announced on", options: ["12 March 1947", "6 March 1957", "30 June 1960", "8 May 1945"], correctIndex: 0, explanation: "Truman addressed Congress on 12 March 1947." },
        { prompt: "The Truman Doctrine requested aid for", options: ["Greece and Turkey", "Germany and Japan", "Kenya and Ghana", "China and India"], correctIndex: 0, explanation: "400 million dollars for Greece and Turkey." },
        { prompt: "The Truman Doctrine became the basis of", options: ["Cold War foreign policy", "the Berlin Conference", "the League of Nations", "apartheid"], correctIndex: 0, explanation: "It underpinned Cold War foreign policy." },
        { prompt: "Economic aid to rebuild Western Europe came through the", options: ["Marshall Plan", "Warsaw Pact", "Mano River Union", "iron curtain"], correctIndex: 0, explanation: "The Marshall Plan/European Recovery Program." },
        { prompt: "An alliance is an instrument of foreign policy that provides", options: ["collective security", "domestic tax revenue", "a school syllabus", "a national anthem"], correctIndex: 0, explanation: "Alliances deliver collective security." },
        { prompt: "The Big Three summits were held at", options: ["Yalta (1944) and Potsdam (1945)", "Berlin (1884) and Fashoda (1898)", "Marathon and Salamis", "Monrovia and Accra"], correctIndex: 0, explanation: "Yalta and Potsdam were the Big Three summits." },
        { prompt: "Which is the correct order of the policy process?", options: ["analyse, decide, declare, act", "act, analyse, decide, declare", "declare, act, analyse, decide", "decide, act, declare, analyse"], correctIndex: 0, explanation: "Analysis leads to decision, declaration and action." },
        { prompt: "The approved sources describe Liberia's own foreign-policy machinery", options: ["no — this gap is flagged", "yes, in full", "only the ministry", "only treaties"], correctIndex: 0, explanation: "The sources do not cover Liberia's machinery; the gap is flagged." },
        { prompt: "A 'doctrine' in foreign policy is a", options: ["declared, guiding policy", "secret weapon", "type of tax", "school subject"], correctIndex: 0, explanation: "A doctrine is a publicly declared policy line." },
        { prompt: "Diplomacy as an instrument is best shown by", options: ["summits like Yalta and Potsdam", "the resource curse", "the Scramble for Africa", "the iron curtain alone"], correctIndex: 0, explanation: "Summit diplomacy is an implementation instrument." },
        { prompt: "For Liberia's specific process, learners should use", options: ["MoE texts and Ministry of Foreign Affairs reports", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE and ministry sources; do not invent." },
        { prompt: "Economic aid can serve foreign policy by", options: ["strengthening allies and reducing rivals' appeal", "raising domestic taxes", "closing embassies", "ending diplomacy"], correctIndex: 0, explanation: "Aid strengthened allies and countered communism." },
        { prompt: "Containment aimed to", options: ["stop the spread of communism", "spread colonial empires", "abolish the UN", "end all alliances"], correctIndex: 0, explanation: "Containment resisted communist expansion." },
        { prompt: "Formulation differs from implementation in that formulation is", options: ["deciding, while implementation is doing", "doing, while implementation is deciding", "the same thing", "unrelated to policy"], correctIndex: 0, explanation: "Formulation decides; implementation acts." },
        { prompt: "The instruments of foreign policy include", options: ["diplomacy, alliances, aid and doctrines", "only warfare", "only tariffs", "only espionage"], correctIndex: 0, explanation: "States use diplomacy, alliances, aid and doctrines." },
        { prompt: "The safest handling of Liberia-specific machinery facts is to", options: ["cite MoE/ministry sources and not invent them", "guess", "recall from memory", "skip the topic"], correctIndex: 0, explanation: "Cite the proper sources; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish the formulation of foreign policy from its implementation.", answerKey: "Formulation is deciding the goals and strategy (analysing the situation and choosing a policy, e.g. Kennan's Long Telegram leading to containment). Implementation is carrying it out through instruments — declared doctrines, economic aid, alliances and diplomacy (e.g. Truman Doctrine, Marshall Plan, NATO, Yalta/Potsdam). Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name three instruments a state uses to implement foreign policy, with a sourced example of each.", answerKey: "Any three: declared doctrine (Truman Doctrine, 12 March 1947, 400 million dollars for Greece and Turkey); economic aid (Marshall Plan, ~12 billion dollars); alliances (NATO 1949 / Warsaw Pact 1955); diplomacy/summits (Yalta 1944, Potsdam 1945). Award marks for correct instrument + example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The U.S. policy shaped by Kennan's Long Telegram was", options: ["containment", "appeasement", "colonisation", "non-alignment"], correctIndex: 0, answerKey: "Containment of communism. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Set out the four steps by which a policy moves from idea to action, with an example.", answerKey: "Analyse the situation (Kennan's telegram); decide a strategy (containment); announce it as doctrine (Truman Doctrine, 1947); carry it out with aid, alliances and diplomacy (Marshall Plan, NATO, summits). Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how a state formulates and implements its foreign policy, using the closest sourced Cold War instruments, and note the limits of the sources for Liberia.", answerKey: "Award marks for: formulation — analysis and decision (Kennan, containment), 6 marks; implementation instruments — doctrine (Truman), aid (Marshall Plan), alliances (NATO/Warsaw Pact), diplomacy (Yalta/Potsdam), 8 marks; the ordered idea-to-action process, 4 marks; an explicit statement that Liberia's own machinery is not in the approved sources and must come from MoE/ministry records, 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 9.3 Colonial Empires (https://openstax.org/books/world-history-volume-2/pages/9-3-colonial-empires) and 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization)
      slug: "relations-with-europe",
      title: "Relations with Europe: Africa and the European Powers",
      objective:
        "By the end of the topic, learners should be able to explain the general character of Africa's relations with European powers — colonisation, the partition of Africa, and the few states that avoided conquest — while recognising that Liberia's specific European ties lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## Europe and Africa in the age of empire (sourced framework)

- At the start of the Second Industrial Revolution, Europeans controlled about **10 percent** of Africa; by the century's end, after the **Scramble for Africa**, they controlled about **90 percent**.
- The largest territories were held by **Britain, France, Belgium and Germany**.
- At the **Berlin Conference (1884–1885)**, European powers partitioned the continent **without African input**, recognising existing colonies and ratifying new claims.

## Methods and rivalries

- Britain pursued a **"Cape to Cairo"** vision; France expanded across West and Central Africa; Belgium's **King Leopold II** ran the **Congo Free State (1884)** as a personal colony.
- European rivalries nearly caused war (the **Fashoda Incident, 1898**, between Britain and France).
- The **arbitrary borders** Europeans drew "often separated members of the same ethnic group into different countries while forcing hostile groups into the same country."

## States that resisted conquest

- **Ethiopia** kept its independence by defeating Italy at the **Battle of Adwa (1896)**; Italy retained only **Eritrea**.
- Ethiopia's survival shows that a small number of African states avoided European colonial rule and dealt with Europe as sovereign partners rather than colonies.

## Decolonising the relationship

- After 1945, African states ended European rule (Ghana 1957; Kenya 1963; the "Wind of Change," 1960), transforming Africa–Europe relations from colonial control to relations between sovereign states.

## Applying the framework to Liberia

- The MoE item asks about Liberia's **relations with Europe**. Like Ethiopia, Liberia was one of the very few African states not brought under European colonial rule, so its European relations were those of a sovereign state amid a continent being partitioned.

## Source note and syllabus gap

- The approved sources do **not** detail Liberia's specific dealings with individual European powers (boundary disputes, loans, trade treaties). Those are **not invented here**; use the MoE primary texts for the Liberia-specific detail.`,
      workedExample: `**Question:** Describe the general character of Africa's relations with European powers in the age of empire, and how a few states avoided colonisation.

**Solution**

*Step 1 — the Scramble.*
European control of Africa rose from about 10 percent to about 90 percent, dominated by Britain, France, Belgium and Germany.

*Step 2 — the Berlin Conference.*
At Berlin (1884–1885) Europeans partitioned Africa without African input, drawing arbitrary borders.

*Step 3 — resistance.*
Ethiopia defeated Italy at Adwa (1896) and kept its independence, dealing with Europe as a sovereign state.

*Step 4 — decolonisation.*
After 1945 African states ended European rule (Ghana 1957, Kenya 1963), turning the relationship into one between sovereign states.

**Conclusion:** Africa–Europe relations were dominated by partition and colonial rule, with a few states (like Ethiopia, and Liberia) remaining sovereign; Liberia's specific European dealings belong to the MoE primary texts.`,
      quiz: [
        { prompt: "Before the Scramble, Europeans controlled about what share of Africa?", options: ["10 percent", "50 percent", "90 percent", "100 percent"], correctIndex: 0, explanation: "About 10 percent at the start of the Second Industrial Revolution." },
        { prompt: "By the end of the century Europeans controlled about", options: ["90 percent of Africa", "10 percent of Africa", "25 percent of Africa", "none of Africa"], correctIndex: 0, explanation: "About 90 percent after the Scramble." },
        { prompt: "Africa was partitioned at the", options: ["Berlin Conference (1884–1885)", "Yalta Conference (1944)", "Congress of Vienna (1815)", "Potsdam Conference (1945)"], correctIndex: 0, explanation: "The Berlin Conference of 1884–1885." },
        { prompt: "African input at the Berlin Conference was", options: ["absent — Africans were not consulted", "decisive", "equal to Europe's", "the main factor"], correctIndex: 0, explanation: "Europeans partitioned Africa without African input." },
        { prompt: "The largest African territories were held by", options: ["Britain, France, Belgium and Germany", "Liberia and Ethiopia", "the U.S. and USSR", "China and Japan"], correctIndex: 0, explanation: "Britain, France, Belgium and Germany held the most." },
        { prompt: "Belgium's King Leopold II ran which personal colony?", options: ["the Congo Free State (1884)", "Kenya", "Egypt", "Algeria"], correctIndex: 0, explanation: "Leopold II ran the Congo Free State." },
        { prompt: "The 1898 near-war between Britain and France in Sudan was the", options: ["Fashoda Incident", "Adwa campaign", "Boer War", "Suez Crisis"], correctIndex: 0, explanation: "The Fashoda Incident of 1898." },
        { prompt: "Ethiopia kept its independence by defeating Italy at", options: ["Adwa (1896)", "Fashoda (1898)", "Omdurman (1898)", "Isandlwana (1879)"], correctIndex: 0, explanation: "The Battle of Adwa, 1896." },
        { prompt: "After Adwa, Italy retained only", options: ["Eritrea", "all of Ethiopia", "Kenya", "Sudan"], correctIndex: 0, explanation: "Italy kept only Eritrea." },
        { prompt: "Arbitrary colonial borders often", options: ["split ethnic groups or combined rivals", "matched ethnic boundaries perfectly", "were drawn by Africans", "prevented all conflict"], correctIndex: 0, explanation: "Borders split or combined groups, breeding conflict." },
        { prompt: "Britain's imperial vision in Africa was", options: ["Cape to Cairo", "Paris to Timbuktu", "Berlin to Baghdad", "Lisbon to Luanda"], correctIndex: 0, explanation: "The Cape-to-Cairo railway vision." },
        { prompt: "The approved sources detail Liberia's specific dealings with European powers", options: ["no — this gap is flagged", "yes, fully", "only with Britain", "only with France"], correctIndex: 0, explanation: "The sources do not detail Liberia's European ties; the gap is flagged." },
        { prompt: "Like Ethiopia, Liberia was notable as an African state that", options: ["avoided European colonial rule", "was colonised by Belgium", "was partitioned at Berlin", "joined the Warsaw Pact"], correctIndex: 0, explanation: "Liberia was among the few not brought under colonial rule." },
        { prompt: "Decolonisation after 1945 turned Africa–Europe relations into ties between", options: ["sovereign states", "colonies and rulers", "warring empires", "trading companies only"], correctIndex: 0, explanation: "Sovereign states replaced colonial control." },
        { prompt: "For Liberia's specific European relations, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use the MoE primary texts; do not invent." },
        { prompt: "The Scramble for Africa is defined as", options: ["European competition to establish African colonies", "African unity movements", "a trade fair", "a peace treaty"], correctIndex: 0, explanation: "It was the competition to colonise Africa." },
        { prompt: "Ghana's independence from Britain came in", options: ["1957", "1896", "1884", "1994"], correctIndex: 0, explanation: "Ghana became independent in 1957." },
        { prompt: "Kenya's independence came in", options: ["1963", "1957", "1896", "1885"], correctIndex: 0, explanation: "Kenya became independent in 1963." },
        { prompt: "A sovereign African state dealt with Europe as a", options: ["partner, not a colony", "subject province", "personal colony", "mandate"], correctIndex: 0, explanation: "Sovereign states negotiated as partners." },
        { prompt: "The safest handling of Liberia-specific European facts is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit them silently"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the Scramble for Africa and the Berlin Conference.", answerKey: "The Scramble for Africa was the competition among European powers to establish colonies; European control rose from about 10 to about 90 percent of the continent. At the Berlin Conference (1884–1885), European powers partitioned Africa without African input, recognising existing colonies and ratifying new claims. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How did Ethiopia avoid European colonial rule, and why is this relevant to Liberia?", answerKey: "Ethiopia defeated Italy at the Battle of Adwa (1896), keeping its independence (Italy retained only Eritrea). Like Ethiopia, Liberia was one of the very few African states not brought under European colonial rule, so its European relations were those of a sovereign state. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The four powers holding the largest African territories were", options: ["Britain, France, Belgium and Germany", "the U.S., USSR, China and Japan", "Liberia, Ethiopia, Egypt and Sudan", "Spain, Italy, Greece and Turkey"], correctIndex: 0, answerKey: "Britain, France, Belgium and Germany. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how arbitrary colonial borders affected Africa.", answerKey: "European borders, drawn to benefit imperialist powers, often separated members of the same ethnic group into different countries while forcing hostile groups into the same country, leaving lasting instability and frequent ethnic conflict. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the general character of Africa's relations with the European powers from the Scramble for Africa to decolonisation, and note the limits of the sources for Liberia.", answerKey: "Award marks for: the Scramble and the rise from ~10% to ~90% control, 4 marks; the Berlin Conference partition without African input, 4 marks; methods and rivalries (Cape to Cairo, Leopold's Congo, Fashoda) and arbitrary borders, 6 marks; resistance and sovereignty (Ethiopia/Adwa; Liberia as an uncolonised state), 5 marks; decolonisation after 1945 turning the relationship into one between sovereign states, 2 marks; a note that Liberia's specific European dealings are not in the approved sources, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: LibreTexts — United States History to 1877 (Locks et al.), 13.3 American Antebellum Reform (https://human.libretexts.org/Bookshelves/History/National_History/United_States_History_to_1877_(Locks_et_al.)/13:_Antebellum_Revival_and_Reform/13.03:_American_Antebellum_Reform)
      slug: "relations-with-the-united-states",
      title: "Relations with the United States: The American Colonization Society and Liberia's Origins",
      objective:
        "By the end of the topic, learners should be able to explain the American origins of Liberia through the American Colonization Society and the special settler tie to the United States, while recognising that later 20th-century US–Liberia relations lie outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## The American Colonization Society (sourced)

- The **American Colonization Society (ACS)** was "the main voice of colonizationists in the United States."
- **Colonizationists** wanted to remove African Americans from the United States through emigration to Africa.
- Supporters had mixed motives: **Henry Clay** cited "unconquerable prejudice" against Black Americans; **James Madison** and **Abraham Lincoln** favoured "repatriation" over emancipation.

## The founding of Liberia (sourced)

- "In **1821**, the ACS helped to establish the colony of **Liberia** on the west coast of Africa and assisted some **13,000 slaves and free blacks** to emigrate to the colony."
- The experiment struggled: "hundreds died from disease soon after emigrating."
- Politically, "**Americans dominated Liberian politics despite forming a tiny minority**" — the settler community (Americo-Liberians) held power over the far larger indigenous population.

## Opposition to colonisation (sourced)

- Many African Americans rejected colonisation. The abolitionist **David Walker** argued the United States "belonged more to African Americans than whites because of their 'blood and tears.'"
- The colonisation movement "lost steam during the 1840s and 1850s."

## The meaning for US–Liberia relations

- Liberia's origin as an American settlement created a **special, enduring tie** to the United States — in founding population, in the settlers' American culture and institutions, and in a long relationship of patronage.

## Applying the framework to Liberia

- The MoE item asks about Liberia's **relations with the United States**. The sourced foundation is the ACS's role in founding the colony in 1821 and the resulting American settler state.

## Source note and syllabus gap

- The approved sources cover the **founding** but **not** later US–Liberia relations (20th-century trade, the Firestone concession, wartime bases, Cold War alignment, aid). Those are **not invented here**; use the MoE primary texts for the later relationship.`,
      workedExample: `**Question:** Explain the American origins of Liberia and what they meant for its relations with the United States.

**Solution**

*Step 1 — the ACS.*
The American Colonization Society was the main colonisationist body, seeking to resettle African Americans in Africa, with support from figures like Clay, Madison and Lincoln.

*Step 2 — founding.*
In 1821 the ACS helped establish the colony of Liberia and assisted some 13,000 slaves and free Blacks to emigrate.

*Step 3 — a settler state.*
Despite forming a tiny minority, the American settlers dominated Liberian politics.

*Step 4 — the tie to the U.S.*
This American origin created a lasting special relationship between Liberia and the United States in population, culture and patronage.

**Conclusion:** Liberia began as an ACS colony in 1821, settled from the United States, producing a settler state with an enduring American tie; the later US–Liberia relationship must be taken from the MoE primary texts.`,
      quiz: [
        { prompt: "The ACS was the main voice of", options: ["colonizationists in the United States", "African kings", "European colonisers", "the Warsaw Pact"], correctIndex: 0, explanation: "The ACS led American colonisationism." },
        { prompt: "Colonizationists wanted to", options: ["resettle African Americans in Africa", "abolish the U.S. Senate", "colonise Europe", "end all migration"], correctIndex: 0, explanation: "They sought to remove African Americans via emigration." },
        { prompt: "The ACS helped establish the colony of Liberia in", options: ["1821", "1847", "1884", "1945"], correctIndex: 0, explanation: "The colony was established in 1821." },
        { prompt: "About how many slaves and free Blacks did the ACS assist to emigrate?", options: ["13,000", "800,000", "130", "1.3 million"], correctIndex: 0, explanation: "Some 13,000 emigrated." },
        { prompt: "Soon after emigrating, many settlers", options: ["died from disease", "became wealthy at once", "returned to America immediately", "conquered Europe"], correctIndex: 0, explanation: "Hundreds died from disease." },
        { prompt: "In Liberian politics, the American settlers", options: ["dominated despite being a tiny minority", "held no power", "were the majority", "were excluded"], correctIndex: 0, explanation: "A settler minority dominated politics." },
        { prompt: "Henry Clay justified colonisation by citing", options: ["'unconquerable prejudice' against Black Americans", "a shortage of land", "the resource curse", "the iron curtain"], correctIndex: 0, explanation: "Clay cited unconquerable prejudice." },
        { prompt: "Which two figures favoured 'repatriation' over emancipation?", options: ["James Madison and Abraham Lincoln", "Nkrumah and Kenyatta", "Truman and Marshall", "Leopold II and Bismarck"], correctIndex: 0, explanation: "Madison and Lincoln favoured repatriation." },
        { prompt: "The abolitionist who opposed colonisation was", options: ["David Walker", "Henry Clay", "James Madison", "George Kennan"], correctIndex: 0, explanation: "David Walker opposed colonisation." },
        { prompt: "David Walker argued the U.S. belonged more to African Americans because of their", options: ["'blood and tears'", "wealth", "military service only", "European ancestry"], correctIndex: 0, explanation: "He cited their 'blood and tears'." },
        { prompt: "The colonisation movement lost steam during the", options: ["1840s and 1850s", "1780s", "1960s", "1990s"], correctIndex: 0, explanation: "It faded in the 1840s and 1850s." },
        { prompt: "The approved sources cover Liberia's later US relations (Firestone, bases, aid)", options: ["no — this gap is flagged", "yes, fully", "only Firestone", "only wartime bases"], correctIndex: 0, explanation: "The sources cover the founding, not later relations; the gap is flagged." },
        { prompt: "Liberia's American origin created a lasting", options: ["special tie to the United States", "membership of NATO", "colony of Belgium", "border with Britain"], correctIndex: 0, explanation: "The settler origin created an enduring US tie." },
        { prompt: "The settlers descended from the ACS colonists are often called", options: ["Americo-Liberians", "Boers", "Afrikaners", "Creoles of Sierra Leone"], correctIndex: 0, explanation: "The settler community is the Americo-Liberians." },
        { prompt: "For later US–Liberia relations, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts for the later relationship." },
        { prompt: "Colonisation and abolition differed because colonisation aimed to", options: ["remove Black Americans, not simply free them", "free all enslaved people at once", "expand slavery", "colonise Europe"], correctIndex: 0, explanation: "Colonisationists sought removal, not just emancipation." },
        { prompt: "The colony's name was", options: ["Liberia", "Sierra Leone", "Gold Coast", "Congo Free State"], correctIndex: 0, explanation: "The colony was Liberia." },
        { prompt: "The tiny settler minority's dominance later shaped Liberia's", options: ["internal politics and settler-indigenous divide", "membership of the Warsaw Pact", "European colonisation", "Asian trade routes"], correctIndex: 0, explanation: "It created a lasting settler-indigenous divide." },
        { prompt: "The ACS founding shows Liberia's deepest external tie was to", options: ["the United States", "Belgium", "the Soviet Union", "Germany"], correctIndex: 0, explanation: "Liberia's founding tie was to the U.S." },
        { prompt: "The safest handling of later US–Liberia facts is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "skip the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What was the American Colonization Society, and what did it do in 1821?", answerKey: "The ACS was the main voice of colonizationists in the United States, seeking to resettle African Americans in Africa. In 1821 it helped establish the colony of Liberia on the west coast of Africa and assisted some 13,000 slaves and free Blacks to emigrate. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the settler-minority character of early Liberian politics.", answerKey: "Although the American settlers (Americo-Liberians) formed a tiny minority, they dominated Liberian politics over the far larger indigenous population, creating a lasting settler-indigenous political divide. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The ACS helped establish the colony of Liberia in", options: ["1821", "1847", "1884", "1945"], correctIndex: 0, answerKey: "The colony was established in 1821. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give one motive for supporting colonisation and one argument against it.", answerKey: "For: Henry Clay cited 'unconquerable prejudice' against Black Americans; Madison and Lincoln favoured 'repatriation' over emancipation. Against: David Walker argued the U.S. belonged more to African Americans because of their 'blood and tears.' Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the American origins of Liberia and what they meant for its relationship with the United States, noting the limits of the sources.", answerKey: "Award marks for: the ACS and colonizationism (motives; Clay, Madison, Lincoln), 6 marks; the founding of the colony in 1821 and the ~13,000 emigrants and hardships, 6 marks; the settler-minority domination of politics (Americo-Liberians), 5 marks; the resulting special, enduring tie to the United States, 4 marks; an explicit statement that later 20th-century US–Liberia relations (Firestone, bases, aid) are not in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.1 The Cold War Begins (https://openstax.org/books/world-history-volume-2/pages/14-1-the-cold-war-begins) and 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization)
      slug: "the-league-of-nations-and-the-united-nations",
      title: "The League of Nations and the United Nations",
      objective:
        "By the end of the topic, learners should be able to explain the purpose of international organisations for collective security and the founding of the United Nations in 1945, while recognising that detailed League of Nations coverage and Liberia's specific membership lie outside the fetched approved pages.",
      estimatedMinutes: 90,
      notes: `## International organisations and collective security

- After destructive wars, states have built **international organisations** to keep peace through **collective security** — the idea that an attack on one is met by all.
- Such bodies give even small states a **seat and a voice** in world affairs alongside great powers.

## The United Nations (sourced)

- The **United Nations was established in 1945**, at the end of the Second World War, to maintain international peace and cooperation.
- The postwar order was shaped by the victorious **"Big Three"** — the Soviet Union, the United Kingdom and the United States — who met at **Yalta (1944)** and **Potsdam (1945)**.
- The UN quickly became an arena of the **Cold War**, the "contest for ideological, social, economic, technological, and military supremacy" between the U.S. and USSR that lasted until 1991.
- The UN acted in African crises: in the **Congo (1960)**, Prime Minister **Patrice Lumumba** appealed to the **United Nations** for help (though it initially refused).

## Why membership mattered for African and small states

- For newly independent and small states, UN membership meant **international recognition**, a vote in the **General Assembly**, and access to collective security and development bodies.

## Applying the framework to Liberia

- The MoE item pairs the **League of Nations** and the **United Nations**. Liberia, as an independent state, was a member of both bodies; the general significance is a small state's participation in collective security and world governance.

## Source note and syllabus gap

- The fetched approved pages confirm the **UN's 1945 founding** and its Cold War/African role but do **not** give the League of Nations' detailed structure or Liberia's specific record in either body. Those details are **not invented here**; use the MoE primary texts.`,
      workedExample: `**Question:** Explain the purpose of the United Nations and why membership mattered to small and newly independent states.

**Solution**

*Step 1 — the purpose.*
The UN was established in 1945 to maintain international peace and cooperation through collective security.

*Step 2 — the postwar setting.*
It grew out of the victorious Big Three's planning at Yalta (1944) and Potsdam (1945) and soon became a Cold War arena.

*Step 3 — the African connection.*
The UN acted in African crises — e.g. Lumumba's appeal during the Congo crisis (1960).

*Step 4 — why membership mattered.*
For small and newly independent states, membership meant recognition, a vote in the General Assembly and access to collective security and development.

**Conclusion:** the UN (founded 1945) provides collective security and a global voice; Liberia's specific role in the League and UN belongs to the MoE primary texts.`,
      quiz: [
        { prompt: "The United Nations was established in", options: ["1945", "1919", "1960", "1991"], correctIndex: 0, explanation: "The UN was established in 1945." },
        { prompt: "'Collective security' means", options: ["an attack on one is met by all", "each state fights alone", "no state has an army", "colonies rule themselves"], correctIndex: 0, explanation: "Members defend one another collectively." },
        { prompt: "The victorious 'Big Three' were", options: ["the USSR, the UK and the USA", "Germany, Italy and Japan", "France, China and India", "Liberia, Ethiopia and Egypt"], correctIndex: 0, explanation: "The Big Three were the USSR, UK and USA." },
        { prompt: "The Big Three planned the postwar order at", options: ["Yalta (1944) and Potsdam (1945)", "Berlin (1884)", "Versailles (1919)", "Fashoda (1898)"], correctIndex: 0, explanation: "Yalta and Potsdam." },
        { prompt: "The UN soon became an arena of the", options: ["Cold War", "Scramble for Africa", "Punic Wars", "Hundred Years' War"], correctIndex: 0, explanation: "The UN became a Cold War arena." },
        { prompt: "In the Congo crisis of 1960, Lumumba appealed for help to the", options: ["United Nations", "Warsaw Pact", "Berlin Conference", "Mano River Union"], correctIndex: 0, explanation: "Lumumba appealed to the UN (which initially refused)." },
        { prompt: "For a small state, UN membership provides", options: ["recognition and a vote in the General Assembly", "a colonial empire", "guaranteed wealth", "an exemption from war"], correctIndex: 0, explanation: "Membership gives recognition and a voice." },
        { prompt: "The Cold War lasted until", options: ["1991", "1945", "1960", "2001"], correctIndex: 0, explanation: "It lasted until the USSR's collapse in 1991." },
        { prompt: "International organisations are built mainly to", options: ["keep peace and enable cooperation", "start wars", "abolish all states", "colonise Africa"], correctIndex: 0, explanation: "They promote peace and cooperation." },
        { prompt: "The Cold War was a contest for", options: ["ideological, economic, technological and military supremacy", "athletic medals only", "religious converts only", "colonial borders only"], correctIndex: 0, explanation: "It spanned many fields of supremacy." },
        { prompt: "The fetched approved pages give the League of Nations' detailed structure", options: ["no — this gap is flagged", "yes, in full", "only its founding", "only its failure"], correctIndex: 0, explanation: "The fetched pages do not detail the League; the gap is flagged." },
        { prompt: "Newly independent African states valued UN membership because it gave them", options: ["international recognition and a global voice", "a colonial governor", "a Warsaw Pact seat", "a European empire"], correctIndex: 0, explanation: "Membership gave recognition and a voice." },
        { prompt: "The UN was founded at the end of", options: ["the Second World War", "the First World War", "the Cold War", "the Scramble for Africa"], correctIndex: 0, explanation: "The UN was founded in 1945, ending WWII." },
        { prompt: "The general body where every member state votes is the UN", options: ["General Assembly", "Congo Council", "Berlin Committee", "Warsaw Pact"], correctIndex: 0, explanation: "All members sit in the General Assembly." },
        { prompt: "For Liberia's specific record in the League and UN, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts; do not invent." },
        { prompt: "The UN's initial response to Lumumba's appeal was to", options: ["refuse (initially)", "send an army at once", "colonise the Congo", "dissolve itself"], correctIndex: 0, explanation: "The UN initially refused Lumumba's appeal." },
        { prompt: "Collective security bodies give small states a place alongside", options: ["great powers", "colonial empires only", "no one", "private companies only"], correctIndex: 0, explanation: "Small states gain a seat beside the great powers." },
        { prompt: "The League of Nations preceded the", options: ["United Nations", "Warsaw Pact", "Berlin Conference", "Marshall Plan"], correctIndex: 0, explanation: "The League came before the UN." },
        { prompt: "The UN's core purpose is to maintain", options: ["international peace and cooperation", "colonial rule", "one-party states", "the resource curse"], correctIndex: 0, explanation: "The UN maintains peace and cooperation." },
        { prompt: "The safest handling of League/UN Liberia facts is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "When was the United Nations founded, and what is its core purpose?", answerKey: "The United Nations was established in 1945, at the end of the Second World War, to maintain international peace and cooperation through collective security. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why did UN membership matter to small and newly independent states?", answerKey: "Membership gave international recognition, a vote in the General Assembly, and access to collective security and development bodies — a global voice alongside the great powers. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The victorious 'Big Three' who shaped the postwar order were", options: ["the USSR, the UK and the USA", "Germany, Italy and Japan", "France, China and India", "Liberia, Egypt and Ethiopia"], correctIndex: 0, answerKey: "The USSR, the UK and the USA. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Give one example of the UN's involvement in an African crisis.", answerKey: "In the Congo crisis (1960), Prime Minister Patrice Lumumba appealed to the United Nations for help (the UN initially refused). Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the role of international organisations for collective security, focusing on the founding and purpose of the United Nations, and note the limits of the sources for the League of Nations and Liberia.", answerKey: "Award marks for: the idea of collective security and a global voice for small states, 5 marks; the UN's founding in 1945 and postwar setting (Big Three, Yalta/Potsdam), 6 marks; the UN as a Cold War arena and its African role (Congo/Lumumba), 6 marks; why membership mattered to newly independent states, 4 marks; an explicit statement that the fetched sources do not detail the League of Nations or Liberia's specific membership, which must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.1 The Cold War Begins (https://openstax.org/books/world-history-volume-2/pages/14-1-the-cold-war-begins) and 15.4 Ongoing Problems and Solutions (https://openstax.org/books/world-history-volume-2/pages/15-4-ongoing-problems-and-solutions)
      slug: "relations-with-asia",
      title: "Relations with Asia: The Cold War, Non-Alignment and the Global South",
      objective:
        "By the end of the topic, learners should be able to explain the Cold War division of the world, the option of non-alignment, and the shared interests of the Global South, while recognising that Liberia's specific relations with Asia lie outside the approved sources.",
      estimatedMinutes: 85,
      notes: `## The Cold War divided the world (sourced)

- After 1945 the world split into two blocs: an **American-allied** side and a **Soviet-allied** side. In 1946 Churchill warned that an **"iron curtain"** had cut Europe in two.
- The two sides built rival alliances — **NATO (1949)** and the **Warsaw Pact (1955)** — and competed globally for supremacy until the USSR's collapse in **1991**.

## Asia in the Cold War

- Much of the Cold War's contest and its "hot" wars unfolded in **Asia**, and Asian states, like African ones, had to decide how to relate to the two superpowers.

## Non-alignment: a third path

- Newly independent states could **align** with a bloc or stay **non-aligned** — refusing to join either side while dealing with both.
- Non-alignment let poorer, newly independent African and Asian states protect their independence and pursue development without becoming a superpower's client.

## The Global South and shared interests (sourced)

- The world is divided between wealthy **northern nations** and poorer **southern countries** (the **Global North–South divide**).
- By **2015**, about **85 percent of the world's extreme poor** lived in **Sub-Saharan Africa and South Asia** — shared conditions that gave African and Asian states common development interests.
- Bodies like the **World Bank** and **IMF** provide assistance but are criticised for conditions (privatisation, austerity) that critics say favour wealthy creditors.

## Applying the framework to Liberia

- The MoE item asks about Liberia's **relations with Asia**. Using the framework, an African state's Asian relations were shaped by the Cold War (alignment or non-alignment) and by shared Global South interests in trade and development.

## Source note and syllabus gap

- The approved sources do **not** describe Liberia's specific ties with individual Asian states. Those are **not invented here**; use the MoE primary texts.`,
      workedExample: `**Question:** Explain how the Cold War and the Global South shaped an African state's relations with Asia.

**Solution**

*Step 1 — the divided world.*
After 1945 the world split into American- and Soviet-allied blocs (the iron curtain, NATO 1949, Warsaw Pact 1955), competing until 1991.

*Step 2 — Asia's place.*
Much of the Cold War contest was in Asia, so Asian and African states alike had to decide how to relate to the superpowers.

*Step 3 — non-alignment.*
Newly independent states could stay non-aligned, dealing with both sides while protecting their independence.

*Step 4 — the Global South.*
Shared poverty (85% of the extreme poor in Sub-Saharan Africa and South Asia by 2015) gave African and Asian states common interests in trade and development, though World Bank/IMF conditions were criticised.

**Conclusion:** an African state's Asian relations turned on Cold War alignment and shared Global South development interests; Liberia's specific Asian ties belong to the MoE primary texts.`,
      quiz: [
        { prompt: "After 1945 the world split into blocs allied to", options: ["the U.S. and the USSR", "Britain and France", "China and Japan", "Liberia and Ethiopia"], correctIndex: 0, explanation: "American-allied vs Soviet-allied blocs." },
        { prompt: "Churchill's 1946 image for Europe's division was the", options: ["iron curtain", "bamboo curtain", "Berlin Wall", "Great Wall"], correctIndex: 0, explanation: "The 'iron curtain' speech, 1946." },
        { prompt: "'Non-alignment' meant", options: ["refusing to join either Cold War bloc", "joining both blocs", "colonising Asia", "abolishing the UN"], correctIndex: 0, explanation: "Non-aligned states joined neither side." },
        { prompt: "Non-alignment mainly helped states to", options: ["protect independence and pursue development", "start wars", "become superpower clients", "restore colonial rule"], correctIndex: 0, explanation: "It protected independence and development." },
        { prompt: "The Global North–South divide is between", options: ["wealthy northern and poorer southern nations", "east and west Africa", "NATO and the Warsaw Pact", "cities and villages"], correctIndex: 0, explanation: "It contrasts wealthy North and poorer South." },
        { prompt: "By 2015, about 85 percent of the extreme poor lived in", options: ["Sub-Saharan Africa and South Asia", "Western Europe", "North America", "Australia and Oceania"], correctIndex: 0, explanation: "85 percent in Sub-Saharan Africa and South Asia." },
        { prompt: "Two development bodies criticised for their loan conditions are the", options: ["World Bank and IMF", "NATO and the Warsaw Pact", "OAU and ECOWAS", "ACS and the League"], correctIndex: 0, explanation: "The World Bank and IMF." },
        { prompt: "Critics say World Bank/IMF conditions favoured", options: ["wealthy creditors over poor workers", "poor debtor nations only", "colonial empires", "no one"], correctIndex: 0, explanation: "Stiglitz argued the conditions favoured creditors." },
        { prompt: "The Cold War ended in", options: ["1991", "1945", "1960", "2015"], correctIndex: 0, explanation: "It ended with the USSR's collapse in 1991." },
        { prompt: "NATO and the Warsaw Pact were the two", options: ["Cold War military alliances", "African unions", "UN councils", "development banks"], correctIndex: 0, explanation: "The two opposing alliances." },
        { prompt: "Shared poverty gave African and Asian states common interests in", options: ["trade and development", "colonisation", "arms races", "monarchy"], correctIndex: 0, explanation: "The Global South shared development interests." },
        { prompt: "The approved sources describe Liberia's specific Asian ties", options: ["no — this gap is flagged", "yes, fully", "only with China", "only with India"], correctIndex: 0, explanation: "The sources do not cover Liberia's Asian ties; the gap is flagged." },
        { prompt: "Much of the Cold War's 'hot' conflict took place in", options: ["Asia", "Antarctica", "Western Europe only", "the Americas only"], correctIndex: 0, explanation: "Asia saw much of the Cold War's fighting." },
        { prompt: "A newly independent state that joined neither bloc was", options: ["non-aligned", "a satellite state", "a colony", "a mandate"], correctIndex: 0, explanation: "It was non-aligned." },
        { prompt: "For Liberia's specific Asian relations, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts; do not invent." },
        { prompt: "The 'Global South' broadly refers to", options: ["poorer, often formerly colonised nations", "the wealthiest nations", "the Arctic states", "the Warsaw Pact"], correctIndex: 0, explanation: "The Global South is the poorer, largely postcolonial world." },
        { prompt: "Alignment with a bloc could make a state a superpower's", options: ["client", "colony of Belgium", "member of the League only", "non-aligned partner"], correctIndex: 0, explanation: "Aligning risked becoming a client state." },
        { prompt: "The iron curtain divided Europe into", options: ["American and Soviet spheres", "north and south", "rich and poor", "colonies and empires"], correctIndex: 0, explanation: "It split Europe into two spheres." },
        { prompt: "Development assistance from the World Bank/IMF often came with", options: ["conditions like privatisation and austerity", "free money and no terms", "military occupation", "colonisation"], correctIndex: 0, explanation: "Loans carried privatisation/austerity conditions." },
        { prompt: "The safest handling of Liberia-specific Asian facts is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "skip the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the Cold War division of the world after 1945.", answerKey: "The world split into an American-allied bloc and a Soviet-allied bloc; Churchill warned in 1946 that an 'iron curtain' had cut Europe in two. The two sides built rival alliances (NATO 1949, Warsaw Pact 1955) and competed globally until the USSR's collapse in 1991. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What was non-alignment, and why did newly independent states choose it?", answerKey: "Non-alignment meant refusing to join either Cold War bloc while still dealing with both. Newly independent African and Asian states chose it to protect their independence and pursue development without becoming a superpower's client. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "By 2015, about 85 percent of the world's extreme poor lived in", options: ["Sub-Saharan Africa and South Asia", "Western Europe", "North America", "Oceania"], correctIndex: 0, answerKey: "Sub-Saharan Africa and South Asia. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "What shared interests linked African and Asian states in the Global South?", answerKey: "Both faced widespread poverty (85% of the extreme poor in Sub-Saharan Africa/South Asia by 2015) and dependence on development assistance (World Bank/IMF, criticised for privatisation/austerity conditions), giving them common interests in trade, development and fairer terms. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss how the Cold War and the Global South shaped an African state's relations with Asia, and note the limits of the sources for Liberia.", answerKey: "Award marks for: the Cold War division and rival alliances (iron curtain, NATO, Warsaw Pact), 6 marks; Asia's central place in the Cold War, 3 marks; non-alignment as a third path for newly independent states, 5 marks; shared Global South interests (poverty data, World Bank/IMF), 6 marks; an explicit statement that Liberia's specific Asian ties are not in the approved sources and must come from the MoE primary texts, 3 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization) and 15.4 Ongoing Problems and Solutions (https://openstax.org/books/world-history-volume-2/pages/15-4-ongoing-problems-and-solutions)
      slug: "relations-with-oau-au-ecowas-mano-river-union",
      title: "Relations with the OAU/AU, ECOWAS and the Mano River Union",
      objective:
        "By the end of the topic, learners should be able to explain pan-Africanism and the general purpose of African continental and regional organisations, while recognising that the institutional detail of the OAU/AU, ECOWAS and the Mano River Union lies outside the approved sources.",
      estimatedMinutes: 90,
      notes: `## Pan-Africanism (sourced)

- **Pan-Africanism** is the movement for the unity and liberation of African and African-descended peoples.
- The **Fifth Pan-African Congress** met in **Manchester in October 1945**, with delegates from African colonies, the Caribbean and elsewhere calling for an **end to colonialism**.
- Independence leaders such as **Kwame Nkrumah** (Ghana) and **Jomo Kenyatta** (Kenya) came out of this movement; the drive for African unity was central to the decolonisation era.

## Why independent African states cooperate

- Decolonisation left many small, newly independent states with **arbitrary colonial borders** and shared problems (development, security, ethnic conflict). Cooperation offered strength in numbers.
- The general purposes of African continental and regional organisations are: to **defend the independence and sovereignty** won at decolonisation, to promote **economic cooperation and development**, and to provide **collective security and peacekeeping**.

## Continental and regional levels

- A **continental** body unites states across the whole of Africa around shared political goals (the pan-African ideal).
- A **regional** body groups neighbouring states for closer economic integration and security — the same logic as NATO or the European Recovery Program, applied within a region.

## Applying the framework to Liberia

- The MoE item names the **OAU/AU** (continental), **ECOWAS** (West African regional) and the **Mano River Union** (a smaller sub-regional grouping of neighbours). Using the framework, Liberia joined these bodies to advance African unity, regional development and collective security.

## Source note and syllabus gap

- The approved sources cover **pan-Africanism and decolonisation** but do **not** describe the founding, structure or specific work of the OAU/AU, ECOWAS or the Mano River Union. That institutional detail is **not invented here**; use the MoE primary texts.`,
      workedExample: `**Question:** Explain pan-Africanism and the general purpose of African continental and regional organisations.

**Solution**

*Step 1 — pan-Africanism.*
Pan-Africanism is the movement for African unity and liberation; the Fifth Pan-African Congress (Manchester, October 1945) called for an end to colonialism, and leaders like Nkrumah and Kenyatta emerged from it.

*Step 2 — why cooperate.*
Decolonisation left many small states with arbitrary borders and shared problems, so cooperation offered strength in numbers.

*Step 3 — the purposes.*
African organisations aim to defend sovereignty, promote economic development and provide collective security.

*Step 4 — levels.*
Continental bodies (OAU/AU) pursue the pan-African ideal; regional bodies (ECOWAS) and sub-regional ones (the Mano River Union) integrate neighbours economically and for security.

**Conclusion:** African states built continental and regional organisations to realise pan-African unity and shared development and security; the institutions' specific detail belongs to the MoE primary texts.`,
      quiz: [
        { prompt: "Pan-Africanism is the movement for", options: ["the unity and liberation of African peoples", "European colonisation of Africa", "Cold War alliances", "the resource curse"], correctIndex: 0, explanation: "It seeks African unity and liberation." },
        { prompt: "The Fifth Pan-African Congress met in Manchester in", options: ["October 1945", "1884", "1963", "1991"], correctIndex: 0, explanation: "It met in October 1945." },
        { prompt: "The Fifth Pan-African Congress called for", options: ["an end to colonialism", "more colonies", "the Warsaw Pact", "the Berlin Conference"], correctIndex: 0, explanation: "Delegates demanded an end to colonialism." },
        { prompt: "Which leader emerged from the pan-African movement?", options: ["Kwame Nkrumah", "Harry Truman", "George Marshall", "Leopold II"], correctIndex: 0, explanation: "Nkrumah (and Kenyatta) came out of the movement." },
        { prompt: "Decolonisation left many African states with", options: ["arbitrary colonial borders and shared problems", "perfect ethnic borders", "no borders", "European governors"], correctIndex: 0, explanation: "Arbitrary borders and shared challenges remained." },
        { prompt: "A continental African body unites states around", options: ["shared political goals across all Africa", "one city's interests", "European empires", "a single company"], correctIndex: 0, explanation: "Continental bodies pursue pan-African goals." },
        { prompt: "A regional body groups", options: ["neighbouring states for closer integration", "all the world's states", "colonies and their rulers", "rival superpowers"], correctIndex: 0, explanation: "Regional bodies integrate neighbours." },
        { prompt: "The OAU/AU operates at the ___ level.", options: ["continental", "single-city", "European", "global"], correctIndex: 0, explanation: "The OAU/AU is continental." },
        { prompt: "ECOWAS operates at the ___ level.", options: ["West African regional", "continental", "global", "single-village"], correctIndex: 0, explanation: "ECOWAS is a West African regional body." },
        { prompt: "The Mano River Union is a", options: ["smaller sub-regional grouping of neighbours", "global body", "European alliance", "Cold War pact"], correctIndex: 0, explanation: "It is a sub-regional neighbour grouping." },
        { prompt: "African organisations aim to defend the ___ won at decolonisation.", options: ["independence and sovereignty", "colonial borders' owners", "European empires", "resource curse"], correctIndex: 0, explanation: "They defend hard-won sovereignty." },
        { prompt: "The approved sources describe the OAU/AU, ECOWAS and Mano River Union in detail", options: ["no — this gap is flagged", "yes, fully", "only the AU", "only ECOWAS"], correctIndex: 0, explanation: "The sources cover pan-Africanism, not these institutions' detail." },
        { prompt: "Cooperation among small states offers", options: ["strength in numbers", "guaranteed poverty", "colonial rule", "isolation"], correctIndex: 0, explanation: "Small states gain strength by cooperating." },
        { prompt: "Two independence leaders from the pan-African movement were", options: ["Nkrumah and Kenyatta", "Truman and Marshall", "Clay and Madison", "Leopold and Bismarck"], correctIndex: 0, explanation: "Nkrumah and Kenyatta." },
        { prompt: "For the specific work of these African bodies, learners should use", options: ["the MoE primary texts", "invented facts", "the model's memory", "no source"], correctIndex: 0, explanation: "Use MoE texts; do not invent." },
        { prompt: "Regional integration follows the same logic as", options: ["pooling resources for shared benefit (like the Marshall Plan)", "the Scramble for Africa", "the iron curtain", "the resource curse"], correctIndex: 0, explanation: "It pools resources for shared benefit." },
        { prompt: "The pan-African ideal is closely tied to the era of", options: ["decolonisation", "the Berlin Conference", "the Punic Wars", "the Renaissance"], correctIndex: 0, explanation: "Pan-Africanism drove decolonisation." },
        { prompt: "Collective security within a region means", options: ["neighbours help defend one another", "each state fights alone", "colonisers protect colonies", "the UN does everything"], correctIndex: 0, explanation: "Regional members defend one another." },
        { prompt: "The general purpose of these bodies includes", options: ["unity, development and security", "conquest and empire", "ending African statehood", "restoring colonial rule"], correctIndex: 0, explanation: "They pursue unity, development and security." },
        { prompt: "The safest handling of these institutions' specifics is to", options: ["cite the MoE texts and not invent them", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is pan-Africanism, and what did the Fifth Pan-African Congress call for?", answerKey: "Pan-Africanism is the movement for the unity and liberation of African and African-descended peoples. The Fifth Pan-African Congress (Manchester, October 1945), with delegates from African colonies, the Caribbean and elsewhere, called for an end to colonialism; leaders like Nkrumah and Kenyatta emerged from it. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a continental from a regional African organisation, with the MoE examples.", answerKey: "A continental body (the OAU/AU) unites states across all Africa around shared political goals (the pan-African ideal); a regional body (ECOWAS) and a sub-regional one (the Mano River Union) group neighbouring states for closer economic integration and security. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The Fifth Pan-African Congress met in Manchester in", options: ["October 1945", "1884", "1963", "1991"], correctIndex: 0, answerKey: "October 1945. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Why did newly independent African states form organisations to cooperate?", answerKey: "Decolonisation left many small states with arbitrary colonial borders and shared problems (development, security, ethnic conflict); cooperation offered strength in numbers to defend sovereignty, promote development and provide collective security. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss pan-Africanism and the general purpose of African continental and regional organisations such as the OAU/AU, ECOWAS and the Mano River Union, noting the limits of the sources.", answerKey: "Award marks for: pan-Africanism and the Fifth Pan-African Congress (1945) and its leaders, 6 marks; why decolonised states cooperate (arbitrary borders, shared problems, strength in numbers), 5 marks; the general purposes — sovereignty, development, collective security, 6 marks; the continental vs regional/sub-regional levels applied to OAU/AU, ECOWAS and the Mano River Union, 4 marks; an explicit statement that these institutions' specific detail is not in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
