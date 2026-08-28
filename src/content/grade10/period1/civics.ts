import type { SubjectContent } from "@/content/types";

export const civics: SubjectContent = {
  slug: "civics",
  name: "Civics",
  shortName: "Civics",
  description:
    "Government and civic engagement, citizenship, constitutions, and the branches of government.",
  accent: "violet",
  sortOrder: 8,
  teacherCode: "CIV-10-7714",
  periods: [
    {
      grade: 10,
      number: 1,
      title: "Citizenship and Government",
      summary:
        "Learners examine what civics and government are, how citizenship is acquired and lost, what a constitution is and does, and how the three branches of government share and check power.",
      topics: [
        // source: OpenStax American Government 3e — 1.1 What Is Government? (https://openstax.org/books/american-government-3e/pages/1-1-what-is-government). General civic concepts of government, civic engagement, rights and duties. FLAG: a specific Liberian list of citizens' legal duties is not on an approved page — the general concept is taught. See report.
        {
          slug: "introduction-to-civics",
          title: "Introduction to Civics",
          objective:
            "By the end of the lesson, learners should be able to define government and civic engagement, and explain rights, duties and minority rights.",
          estimatedMinutes: 80,
          notes: `## What government is

**Government** is the means by which a society organises itself and allocates authority in order to accomplish collective goals.

Civics is the study of government and of the rights and duties of citizens.

## Civic engagement

**Civic engagement** is the participation that connects citizens to government.

Forms of civic engagement include:

- Reading about politics and listening to the news
- Discussing politics and attending debates
- Voting in elections
- Donating to or volunteering for campaigns
- Joining protests
- Writing to representatives

In a representative democracy, citizens elect representatives to make decisions on their behalf. Making your opinions known and voting for those who make decisions that affect everyone are critical and influential forms of civic engagement.

## Direct and representative participation

- **Representative democracy** — citizens elect representatives to decide on their behalf.
- **Direct democracy** — citizens decide directly, through mechanisms such as referendums and town meetings where residents debate decisions affecting the town.

## Rights and minority rights

Government protects rights. A key idea is **minority rights** — protections ensuring that people cannot be deprived of certain rights even if an overwhelming number of people think they should be.

This means some rights are protected even against the will of the majority.

## Why civic engagement matters

- It connects citizens to the decisions that affect them.
- It allows citizens to make their opinions known and to influence government.
- Voting and other participation shape who makes decisions for everyone.

## Key points

- Government organises society and allocates authority to accomplish collective goals.
- Civic engagement is the participation that connects citizens to government.
- Minority rights protect certain rights even against a large majority.`,
          workedExample: `**Question:** A town must decide whether to build a new market. Some residents attend a town meeting to debate it; others vote in an election for councillors who will decide; a small group who would lose their stalls fear the majority will simply overrule them. Using the ideas of government, civic engagement and minority rights, explain what is happening.

**Solution**

*Step 1 — Identify the role of government.* The decision about the market is a **collective goal**. Government is the means by which the society organises itself and allocates authority to accomplish such goals, so it is the body that will make and carry out the decision.

*Step 2 — Identify the forms of civic engagement.* Residents who attend the **town meeting** to debate the decision are taking part in **direct** participation. Residents who **vote** for councillors are taking part in **representative** democracy, electing representatives to decide on their behalf. Both are forms of **civic engagement** — participation that connects citizens to government.

*Step 3 — Apply minority rights.* The small group fears being overruled by the majority. The idea of **minority rights** is that people cannot be deprived of certain rights even if an overwhelming number of people think they should be. So if the group has a protected right at stake, the majority cannot simply remove it by a vote; some rights are protected even against the majority.

**Answer:** Government will make the collective decision; residents take part through civic engagement, both directly (the town meeting) and representatively (voting for councillors); and minority rights mean the small group cannot be stripped of a protected right merely because most people wish it.`,
          quiz: [
            {
              prompt: "Government is best defined as",
              options: [
                "a single ruler",
                "the means by which a society organises itself and allocates authority to accomplish collective goals",
                "a political party",
                "a court building",
              ],
              correctIndex: 1,
              explanation:
                "Government organises society and allocates authority for collective goals.",
            },
            {
              prompt: "Civic engagement is",
              options: [
                "avoiding politics entirely",
                "the participation that connects citizens to government",
                "paying for goods",
                "moving abroad",
              ],
              correctIndex: 1,
              explanation: "Civic engagement links citizens to government.",
            },
            {
              prompt: "Which is a form of civic engagement?",
              options: ["Voting in elections", "Sleeping", "Ignoring the news", "Refusing to discuss issues"],
              correctIndex: 0,
              explanation:
                "Voting, discussing issues and contacting representatives are civic engagement.",
            },
            {
              prompt: "In a representative democracy, citizens",
              options: [
                "make every decision directly",
                "elect representatives to make decisions on their behalf",
                "have no vote",
                "are ruled without elections",
              ],
              correctIndex: 1,
              explanation: "Representatives are elected to decide for the citizens.",
            },
            {
              prompt: "Direct democracy includes mechanisms such as",
              options: ["Referendums and town meetings", "Only royal decrees", "Court trials", "Military orders"],
              correctIndex: 0,
              explanation: "Referendums and town meetings let citizens decide directly.",
            },
            {
              prompt: "Minority rights mean that",
              options: [
                "the majority always wins on every right",
                "people cannot be deprived of certain rights even if most people want them removed",
                "minorities have no rights",
                "rights are decided by lottery",
              ],
              correctIndex: 1,
              explanation: "Some rights are protected even against a large majority.",
            },
            {
              prompt: "Civics is the study of",
              options: [
                "rocks and minerals",
                "government and the rights and duties of citizens",
                "farming methods",
                "computer hardware",
              ],
              correctIndex: 1,
              explanation: "Civics concerns government and citizens' rights and duties.",
            },
            {
              prompt: "Writing to a representative is an example of",
              options: ["Civic engagement", "A criminal offence", "Direct rule", "Taxation"],
              correctIndex: 0,
              explanation: "Contacting representatives is a form of civic engagement.",
            },
            {
              prompt: "Voting is important because it",
              options: [
                "has no effect",
                "shapes who makes decisions that affect everyone",
                "is only for officials",
                "replaces government",
              ],
              correctIndex: 1,
              explanation: "Voting influences who makes decisions for all.",
            },
            {
              prompt: "A town meeting where residents debate a local decision is an example of",
              options: ["Representative democracy", "Direct democracy", "Monarchy", "No participation"],
              correctIndex: 1,
              explanation: "Residents deciding directly is direct democracy.",
            },
            {
              prompt: "Electing councillors to decide on a market is an example of",
              options: ["Direct democracy", "Representative democracy", "Dictatorship", "Anarchy"],
              correctIndex: 1,
              explanation: "Choosing representatives to decide is representative democracy.",
            },
            {
              prompt: "Collective goals are goals that",
              options: [
                "belong to one person",
                "a society seeks to accomplish together",
                "no one wants",
                "only affect other countries",
              ],
              correctIndex: 1,
              explanation: "Government helps a society accomplish shared goals.",
            },
            {
              prompt: "Which best shows civic engagement connecting a citizen to government?",
              options: [
                "Watching entertainment only",
                "Attending a debate and then voting",
                "Never following the news",
                "Refusing to participate",
              ],
              correctIndex: 1,
              explanation: "Attending debates and voting connect citizens to government.",
            },
            {
              prompt: "Government allocates",
              options: ["Rainfall", "Authority", "Soil", "Weather"],
              correctIndex: 1,
              explanation: "Government allocates authority to accomplish collective goals.",
            },
            {
              prompt: "Minority rights protect people",
              options: [
                "only if the majority agrees",
                "even when the majority disagrees",
                "never",
                "only during elections",
              ],
              correctIndex: 1,
              explanation: "Certain rights hold even against majority opinion.",
            },
            {
              prompt: "Donating to or volunteering for a campaign is",
              options: ["Illegal", "A form of civic engagement", "A tax", "A privilege of officials only"],
              correctIndex: 1,
              explanation: "Campaign participation is civic engagement.",
            },
            {
              prompt: "In a representative democracy, the people's main tool for choosing decision-makers is",
              options: ["The vote", "The army", "The weather", "The market"],
              correctIndex: 0,
              explanation: "Citizens vote to elect their representatives.",
            },
            {
              prompt: "Reading about politics and listening to the news are",
              options: [
                "not related to government",
                "forms of civic engagement",
                "forms of taxation",
                "criminal acts",
              ],
              correctIndex: 1,
              explanation: "Staying informed is part of civic engagement.",
            },
            {
              prompt: "The purpose of civic engagement is to",
              options: [
                "separate citizens from government",
                "connect citizens to government and let them influence it",
                "end all voting",
                "remove all rights",
              ],
              correctIndex: 1,
              explanation: "Engagement connects citizens to government and gives them influence.",
            },
            {
              prompt: "A society organises itself and allocates authority through its",
              options: ["Government", "Weather", "Geography", "Soil"],
              correctIndex: 0,
              explanation: "Government is the means of organising society.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define government and civic engagement.",
              answerKey:
                "Government is the means by which a society organises itself and allocates authority in order to accomplish collective goals. Civic engagement is the participation that connects citizens to government, such as reading about politics, discussing issues, voting, volunteering, protesting and writing to representatives. Award 4 marks per definition.",
              marks: 8,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State four forms of civic engagement.",
              answerKey:
                "Any four: reading about politics or listening to the news; discussing politics or attending debates; voting in elections; donating to or volunteering for campaigns; joining protests; writing to representatives. Award 2 marks each.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "The idea that people cannot be deprived of certain rights even if most people want them removed is called",
              options: [
                "majority rule",
                "minority rights",
                "civic engagement",
                "direct democracy",
              ],
              correctIndex: 1,
              answerKey:
                "Minority rights protect certain rights even against an overwhelming majority. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between representative democracy and direct democracy, giving an example of each.",
              answerKey:
                "In a representative democracy citizens elect representatives to make decisions on their behalf (example: voting for councillors or legislators). In a direct democracy citizens decide themselves through mechanisms such as referendums and town meetings where residents debate decisions. Award 3 marks per form defined and 1 mark per example.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain what government is and why civic engagement matters in a democracy, referring to both representative and direct participation and to the protection of minority rights.",
              answerKey:
                "Award marks as follows: government defined as the means by which a society organises itself and allocates authority to accomplish collective goals, 8 marks; civic engagement defined and illustrated with several forms, 12 marks; representative democracy (electing representatives) and direct democracy (referendums, town meetings) distinguished with examples, 12 marks; minority rights explained as protections that hold even against a majority, with why this matters, 12 marks; organisation and expression, 6 marks. A learner who does not address minority rights should not exceed 35.",
              marks: 50,
            },
          ],
        },
        // source: general concepts of citizenship — jus soli (birth in territory) and jus sanguinis (by descent), naturalisation and loss of citizenship, per OpenStax and standard civics references. FLAG: Liberia-specific citizenship law (Article 27(b) Negro-descent requirement, the 1986 Constitution, the Aliens and Nationality Law, dual-citizenship reform) could NOT be verified from an approved published education page and needs a Liberian primary source. General concepts are taught here. See report.
        {
          slug: "citizenship",
          title: "Citizenship",
          objective:
            "By the end of the lesson, learners should be able to define citizenship and describe how it is acquired and lost and the rights and duties it carries.",
          estimatedMinutes: 80,
          notes: `## What citizenship is

**Citizenship** is full legal membership of a state. A citizen holds rights and owes duties, and receives the protection of the state.

A **citizen** differs from an **alien** (a non-citizen), who is present in the state but belongs to another and does not hold full political rights.

## Acquiring citizenship by birth

Two principles are used around the world:

- **Jus soli (right of soil)** — a child has the nationality of the territory in which it is born, even if the parents hold a different nationality.
- **Jus sanguinis (right of blood)** — a child has the same nationality as its parents, whatever the place of birth.

Many states use one principle, the other, or a combination of both.

## Acquiring citizenship by naturalisation

**Naturalisation** is the granting of citizenship to a foreigner who meets legal conditions. Citizenship can be obtained through:

- A required length of lawful **residence**
- **Marriage** to a citizen
- **Historical ties** to the country
- A large **investment** in the country

Applicants typically must also satisfy conditions such as good character and an oath of allegiance.

## Loss of citizenship

Citizenship can be lost in several ways, including:

- **Renunciation** — a voluntary declaration giving up citizenship
- **Deprivation** — where citizenship was obtained by fraud or misrepresentation
- Acquiring another nationality, where the law does not allow dual citizenship
- Taking an oath of allegiance to a foreign state

## Rights and duties of a citizen

A citizen generally holds political rights and owes duties in return.

| Rights (examples) | Duties (examples) |
| --- | --- |
| To vote and stand for office | Allegiance to the state |
| The protection of the state | Obedience to the law |
| To hold a passport | Payment of lawful taxes |
| To enter and leave the country | Respect for the rights of others |

## Key points

- Citizenship is full legal membership of a state, with rights, duties and protection.
- Jus soli is citizenship by birth in the territory; jus sanguinis is by descent from citizen parents.
- Naturalisation grants citizenship to a foreigner meeting legal conditions such as residence.
- Citizenship can be lost by renunciation, deprivation for fraud, or taking a foreign allegiance.`,
          workedExample: `**Question:** Ama was born in a country to two of its citizens. Kofi was born abroad while his citizen parents were travelling. Mrs. Rossi is a foreigner who has lived lawfully in the country for many years and now wishes to become a citizen. Explain how each could hold or gain citizenship.

**Solution**

*Step 1 — Ama.* Ama was born within the territory of the state, so she qualifies under **jus soli** (right of soil). She is also the child of citizen parents, so she qualifies under **jus sanguinis** (right of blood) as well. Either principle makes her a citizen by birth.

*Step 2 — Kofi.* Kofi was born abroad, so **jus soli** of his parents' country does not help him — he was not born in its territory. But under **jus sanguinis** he takes the same nationality as his citizen parents regardless of where he was born. So he is a citizen by descent.

*Step 3 — Mrs. Rossi.* Mrs. Rossi was not born in the country and is not the child of its citizens, so neither birth principle applies. Her route is **naturalisation** — the granting of citizenship to a foreigner who meets legal conditions. Having lived there lawfully for many years, she may qualify through the required length of residence, and would typically also need to meet conditions such as good character and an oath of allegiance.

**Answer:** Ama is a citizen by birth under both jus soli and jus sanguinis; Kofi is a citizen by descent under jus sanguinis; Mrs. Rossi may become a citizen by naturalisation on the basis of long lawful residence and meeting the legal conditions.`,
          quiz: [
            {
              prompt: "Citizenship is best defined as",
              options: [
                "a tourist visa",
                "full legal membership of a state with rights and duties",
                "owning a house",
                "having a job",
              ],
              correctIndex: 1,
              explanation: "Citizenship is full legal membership, with rights, duties and protection.",
            },
            {
              prompt: "Jus soli confers citizenship by",
              options: [
                "descent from parents",
                "birth within the territory",
                "marriage only",
                "investment only",
              ],
              correctIndex: 1,
              explanation: "Jus soli is the right of soil — birth in the territory.",
            },
            {
              prompt: "Jus sanguinis confers citizenship by",
              options: [
                "the nationality of one's parents",
                "place of birth alone",
                "length of a holiday",
                "buying land",
              ],
              correctIndex: 0,
              explanation: "Jus sanguinis is the right of blood, following the parents.",
            },
            {
              prompt: "A child born abroad to citizen parents may be a citizen by",
              options: ["Jus soli", "Jus sanguinis (descent)", "A tourist visa", "Nothing"],
              correctIndex: 1,
              explanation: "Descent follows the parents' nationality regardless of birthplace.",
            },
            {
              prompt: "Naturalisation is the process by which",
              options: [
                "a citizen loses nationality",
                "a foreigner is granted citizenship after meeting legal conditions",
                "a baby is born",
                "an alien is deported",
              ],
              correctIndex: 1,
              explanation: "Naturalisation grants citizenship to a qualifying foreigner.",
            },
            {
              prompt: "Which is a common route to naturalisation?",
              options: [
                "A required length of lawful residence",
                "Owning a phone",
                "Visiting for one day",
                "Watching the news",
              ],
              correctIndex: 0,
              explanation: "Residence, marriage, ties or investment can lead to naturalisation.",
            },
            {
              prompt: "An alien is",
              options: [
                "a citizen with full rights",
                "a non-citizen present in the state who belongs to another",
                "an elected official",
                "a type of passport",
              ],
              correctIndex: 1,
              explanation: "An alien is a non-citizen without full political rights.",
            },
            {
              prompt: "Renunciation of citizenship is",
              options: [
                "involuntary removal by the state",
                "a voluntary declaration giving up citizenship",
                "a tax on citizens",
                "a type of naturalisation",
              ],
              correctIndex: 1,
              explanation: "Renunciation is the citizen's own voluntary act.",
            },
            {
              prompt: "Deprivation of citizenship may occur where citizenship was obtained by",
              options: ["Birth", "Fraud or misrepresentation", "Descent", "Voting"],
              correctIndex: 1,
              explanation: "Fraud in acquiring citizenship can justify its removal.",
            },
            {
              prompt: "Marriage to a citizen may be a route to",
              options: ["Losing rights", "Naturalisation", "Deportation", "Taxation"],
              correctIndex: 1,
              explanation: "Marriage is one recognised route to naturalisation.",
            },
            {
              prompt: "A citizen receives from the state",
              options: ["No protection", "The protection of the state", "Only taxes", "Only duties"],
              correctIndex: 1,
              explanation: "Citizens receive the protection of the state.",
            },
            {
              prompt: "Which is a duty of a citizen?",
              options: ["Holding a passport", "Obedience to the law", "Owning property", "Travelling abroad"],
              correctIndex: 1,
              explanation: "Obedience to the law and allegiance are citizen duties.",
            },
            {
              prompt: "Which is a right of a citizen?",
              options: ["To vote and stand for office", "To break the law", "To avoid all taxes", "To ignore others' rights"],
              correctIndex: 0,
              explanation: "Voting and standing for office are political rights of citizens.",
            },
            {
              prompt: "A state that gives citizenship both by birth in its territory and by descent uses",
              options: [
                "neither principle",
                "a combination of jus soli and jus sanguinis",
                "only marriage",
                "only investment",
              ],
              correctIndex: 1,
              explanation: "Many states combine both birth principles.",
            },
            {
              prompt: "Taking an oath of allegiance to a foreign state may lead to",
              options: ["A promotion", "Loss of citizenship", "A new passport", "A tax refund"],
              correctIndex: 1,
              explanation: "Foreign allegiance is a recognised ground for losing citizenship.",
            },
            {
              prompt: "A large investment in a country may be a route to",
              options: ["Naturalisation", "Deportation", "Renunciation", "Losing rights"],
              correctIndex: 0,
              explanation: "Investment is one recognised route to naturalisation.",
            },
            {
              prompt: "Citizenship differs from mere residence because it carries",
              options: [
                "no duties",
                "political rights and the protection of the state",
                "only a lower tax rate",
                "the right to travel only",
              ],
              correctIndex: 1,
              explanation: "Citizenship is full membership with political rights and protection.",
            },
            {
              prompt: "Historical ties to a country may support a claim to",
              options: ["Naturalisation", "Deportation", "Losing the vote", "Renunciation"],
              correctIndex: 0,
              explanation: "Historical ties are among the bases for naturalisation.",
            },
            {
              prompt: "Which pair is correct?",
              options: [
                "Jus soli — by parents; jus sanguinis — by birthplace",
                "Jus soli — by birthplace; jus sanguinis — by parents",
                "Both mean the same",
                "Neither concerns citizenship",
              ],
              correctIndex: 1,
              explanation: "Jus soli is birthplace; jus sanguinis is parentage.",
            },
            {
              prompt: "Allegiance to the state is best described as a",
              options: ["Right", "Duty of the citizen", "Privilege of officials", "Foreign obligation"],
              correctIndex: 1,
              explanation: "Allegiance is owed by the citizen to the state.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Define citizenship and explain the difference between jus soli and jus sanguinis.",
              answerKey:
                "Citizenship is full legal membership of a state, carrying rights and duties and the protection of the state. Jus soli (right of soil) confers citizenship by birth within the territory, even if the parents hold another nationality. Jus sanguinis (right of blood) confers citizenship by the nationality of one's parents, whatever the place of birth. Award 4 marks for the definition and 3 marks per principle.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State three routes to naturalisation.",
              answerKey:
                "Any three: a required length of lawful residence; marriage to a citizen; historical ties to the country; a large investment in the country. Award 2 marks each.",
              marks: 6,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A person born abroad to citizen parents claims citizenship. The principle that supports the claim is",
              options: ["Jus soli", "Jus sanguinis", "Naturalisation", "Renunciation"],
              correctIndex: 1,
              answerKey:
                "Jus sanguinis confers citizenship by descent from citizen parents regardless of birthplace. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "State three ways in which citizenship may be lost.",
              answerKey:
                "Renunciation — a voluntary declaration giving up citizenship. Deprivation — where citizenship was obtained by fraud or misrepresentation. Acquiring another nationality where dual citizenship is not permitted. Taking an oath of allegiance to a foreign state. Award 2 marks each, up to three.",
              marks: 6,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain how citizenship may be acquired by birth and by naturalisation, and how it may be lost. Distinguish a citizen from an alien throughout.",
              answerKey:
                "Award marks as follows: citizenship defined as full legal membership with rights, duties and state protection, and a citizen distinguished from an alien, 8 marks; acquisition by birth through jus soli (territory) and jus sanguinis (descent), with the point that states may use one or both, 14 marks; acquisition by naturalisation, with routes such as residence, marriage, historical ties and investment, and conditions such as good character and an oath, 12 marks; loss of citizenship through renunciation, deprivation for fraud, or taking a foreign allegiance, 10 marks; organisation and expression, 6 marks. A learner who does not treat both birth and naturalisation should not exceed 30.",
              marks: 50,
            },
          ],
        },
        // source: OpenStax Introduction to Political Science — 4.2 Constitutions and Individual Liberties (https://openstax.org/books/introduction-political-science/pages/4-2-constitutions-and-individual-liberties); GeeksforGeeks — Difference between Written and Unwritten Constitution (https://www.geeksforgeeks.org/difference-between-written-and-unwritten-constitution/). FLAG: Liberia-specific facts (1847/1986 constitutions, a named supremacy article, chapter structure, the exact amendment procedure) could NOT be sourced from an approved page and need a Liberian primary source. General concepts are taught here. See report.
        {
          slug: "constitution",
          title: "The Constitution",
          objective:
            "By the end of the lesson, learners should be able to explain what a constitution is and does, distinguish its types, and describe how constitutions protect liberties.",
          estimatedMinutes: 80,
          notes: `## What a constitution is and does

A **constitution** describes the underlying principles of the people and government, the structure of the branches of government and their duties. It **limits government**, listing the freedoms or rights reserved for the people.

A constitution must be **more difficult to amend or change than ordinary laws**.

## Written and unwritten constitutions

- **Codified (written) constitution** — a single formal document that organises the structure of government and individual protections.
- **Uncodified (unwritten) constitution** — the constitution is not in one document; countries such as Britain, New Zealand and Israel use uncollected writings that establish the form of government and set out the principles of liberty.

An unwritten constitution still exists; it is simply drawn from several sources rather than one document.

## Rigid and flexible constitutions

- **Rigid** — needs a special, difficult process to change it.
- **Flexible** — can be changed like ordinary laws.

Because a constitution must be harder to change than ordinary law, this difficulty is called **entrenchment**, and it establishes constitutional supremacy — the constitution is the supreme legal framework governing all other law.

## How constitutions protect liberties

Constitutions safeguard freedoms in two ways:

- **Negative rights** — limitations on government, telling government what it may not do (for example, "government shall make no law...").
- **Positive rights** — an obligation on government to guarantee the people's rights (for example, a right that "shall be guaranteed").

Many modern democracies use positive-rights constitutions, reflecting a commitment that government actively protects individual freedoms.

## Functions of a constitution

| Function | Meaning |
| --- | --- |
| Sets out principles | States the underlying principles of people and government |
| Structures government | Establishes the branches and their duties |
| Limits government | Restrains what government may do |
| Protects rights | Lists freedoms reserved for the people |
| Is entrenched | Harder to change than ordinary law |

## Key points

- A constitution sets out the principles and structure of government, limits it and lists rights.
- It must be harder to amend than ordinary law (entrenchment).
- Written constitutions are in one document; unwritten ones are drawn from many sources.
- Rigid constitutions need a special process to change; flexible ones change like ordinary law.`,
          workedExample: `**Question:** Country A has all its rules of government in a single document that can only be changed by a special two-stage procedure. Country B has no single document; its rules come from many statutes and long-standing practices, and can be changed by ordinary law. Compare the two constitutions using the correct terms, and explain how each might protect a citizen's freedom of speech.

**Solution**

*Step 1 — Classify Country A.* Its rules are in a single formal document, so it has a **codified (written) constitution**. Because it can only be changed by a special, difficult procedure, it is also **rigid**. The difficulty of changing it is **entrenchment**, which supports constitutional supremacy.

*Step 2 — Classify Country B.* Its rules are drawn from many statutes and practices rather than one document, so it has an **uncodified (unwritten) constitution**, like Britain. Because it can be changed by ordinary law, it is **flexible**. The constitution still exists; it is simply not in one place.

*Step 3 — How each protects freedom of speech.* A constitution limits government and lists freedoms reserved for the people. Country A might protect speech as a **negative right** — stating that government shall make no law restricting it — which, being entrenched, cannot be removed by ordinary legislation. Country B protects speech too, but because its constitution is flexible, the protection could be altered by an ordinary law, so it depends more on established practice and the courts.

**Answer:** Country A has a codified, rigid, entrenched constitution; Country B has an uncodified, flexible one. Both can protect free speech by limiting government and reserving the right to the people, but the entrenched constitution makes that protection harder to remove.`,
          quiz: [
            {
              prompt: "A constitution describes",
              options: [
                "the weather",
                "the principles of the people and government and the structure and duties of its branches",
                "a shopping list",
                "a single election result",
              ],
              correctIndex: 1,
              explanation: "A constitution sets out principles, structure and duties of government.",
            },
            {
              prompt: "A key feature of a constitution is that it",
              options: [
                "is easier to change than ordinary law",
                "must be harder to change than ordinary law",
                "cannot be written down",
                "applies only to visitors",
              ],
              correctIndex: 1,
              explanation: "A constitution must be more difficult to amend than ordinary laws.",
            },
            {
              prompt: "A constitution limits government by",
              options: [
                "giving it unlimited power",
                "listing freedoms or rights reserved for the people",
                "removing all elections",
                "abolishing courts",
              ],
              correctIndex: 1,
              explanation: "It restrains government and reserves rights for the people.",
            },
            {
              prompt: "A codified (written) constitution is",
              options: [
                "not written anywhere",
                "contained in a single formal document",
                "only spoken",
                "the same as no constitution",
              ],
              correctIndex: 1,
              explanation: "A codified constitution is one formal document.",
            },
            {
              prompt: "An uncodified (unwritten) constitution",
              options: [
                "does not exist",
                "is drawn from several sources rather than one document",
                "cannot protect rights",
                "applies only in war",
              ],
              correctIndex: 1,
              explanation: "It is drawn from many writings, as in Britain.",
            },
            {
              prompt: "Which country is a standard example of an uncodified constitution?",
              options: ["Britain", "The United States", "Ghana", "France"],
              correctIndex: 0,
              explanation: "Britain, New Zealand and Israel use uncodified constitutions.",
            },
            {
              prompt: "A rigid constitution",
              options: [
                "changes like ordinary law",
                "needs a special, difficult process to change",
                "cannot be changed at all ever",
                "has no rules",
              ],
              correctIndex: 1,
              explanation: "Rigid constitutions require a special amendment process.",
            },
            {
              prompt: "A flexible constitution",
              options: [
                "needs a special process to change",
                "can be changed like ordinary laws",
                "is always unwritten",
                "cannot protect rights",
              ],
              correctIndex: 1,
              explanation: "Flexible constitutions change by ordinary legislation.",
            },
            {
              prompt: "Making a constitution harder to change than ordinary law is called",
              options: ["Entrenchment", "Election", "Taxation", "Renunciation"],
              correctIndex: 0,
              explanation: "Entrenchment prevents easy modification and supports supremacy.",
            },
            {
              prompt: "Constitutional supremacy means the constitution is",
              options: [
                "below ordinary law",
                "the supreme legal framework governing all other law",
                "optional",
                "only advisory",
              ],
              correctIndex: 1,
              explanation: "The constitution governs all other legislation and government action.",
            },
            {
              prompt: "A negative right is",
              options: [
                "an obligation on government to provide something",
                "a limitation on government, saying what it may not do",
                "a right that harms others",
                "a tax",
              ],
              correctIndex: 1,
              explanation: "Negative rights limit government action.",
            },
            {
              prompt: "A positive right is",
              options: [
                "a limitation on government only",
                "an obligation on government to guarantee a right",
                "a right that can never exist",
                "a foreign law",
              ],
              correctIndex: 1,
              explanation: "Positive rights oblige government to guarantee freedoms.",
            },
            {
              prompt: "\"Government shall make no law...\" is an example of a",
              options: ["Positive right", "Negative right", "Tax rule", "Duty"],
              correctIndex: 1,
              explanation: "It limits government, so it is a negative right.",
            },
            {
              prompt: "An unwritten constitution",
              options: [
                "means there are no rules of government",
                "still exists but is drawn from many sources",
                "is always rigid",
                "cannot be changed",
              ],
              correctIndex: 1,
              explanation: "It exists; it is just not in one document.",
            },
            {
              prompt: "A function of a constitution is to",
              options: [
                "structure the branches of government and their duties",
                "set the price of food",
                "control the weather",
                "run private businesses",
              ],
              correctIndex: 0,
              explanation: "It establishes the structure and duties of government.",
            },
            {
              prompt: "The United States is an example of a country with a",
              options: ["Written constitution", "No constitution", "Purely spoken constitution", "Secret constitution"],
              correctIndex: 0,
              explanation: "The US has a written, codified constitution.",
            },
            {
              prompt: "Many modern democracies use constitutions based on",
              options: ["Negative rights only", "Positive rights", "No rights", "Only duties"],
              correctIndex: 1,
              explanation: "Positive-rights constitutions oblige government to protect freedoms.",
            },
            {
              prompt: "The main reason a constitution is entrenched is to",
              options: [
                "make it easy for one majority to change it",
                "protect its principles from being altered by ordinary law",
                "hide it from citizens",
                "remove all rights",
              ],
              correctIndex: 1,
              explanation: "Entrenchment protects the constitution from easy change.",
            },
            {
              prompt: "A constitution reserves certain freedoms",
              options: ["for the government", "for the people", "for foreigners only", "for no one"],
              correctIndex: 1,
              explanation: "It lists freedoms reserved for the people.",
            },
            {
              prompt: "Which describes a rigid, written constitution?",
              options: [
                "One document, changed by a special difficult process",
                "No document, changed by ordinary law",
                "Spoken only, never changed",
                "A private company rule",
              ],
              correctIndex: 0,
              explanation: "Written = one document; rigid = special amendment process.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "State what a constitution does, and explain why it must be harder to change than ordinary law.",
              answerKey:
                "A constitution describes the underlying principles of the people and government, structures the branches and their duties, limits government, and lists the freedoms or rights reserved for the people. It must be harder to amend than ordinary law (entrenchment) so that its principles and protected rights cannot be removed by an ordinary majority; this supports constitutional supremacy. Award 6 marks for what it does and 4 marks for the entrenchment point.",
              marks: 10,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Distinguish between written and unwritten constitutions, giving an example of each.",
              answerKey:
                "A written (codified) constitution is contained in a single formal document — for example the United States. An unwritten (uncodified) constitution is drawn from several sources rather than one document — for example Britain, New Zealand or Israel. An unwritten constitution still exists; it is just not in one place. Award 3 marks per definition and 1 mark per example, plus 2 for the point that an unwritten constitution still exists.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "A constitution that can only be changed by a special, difficult procedure is",
              options: ["Flexible", "Rigid", "Unwritten", "Ordinary"],
              correctIndex: 1,
              answerKey:
                "A rigid constitution needs a special, difficult process to change; a flexible one changes like ordinary law. Option B.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the difference between negative rights and positive rights in a constitution.",
              answerKey:
                "Negative rights are limitations on government, stating what government may not do (for example, government shall make no law restricting a freedom). Positive rights are obligations on government to guarantee the people's rights (for example, a right that shall be guaranteed). Award 4 marks per type explained.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Explain what a constitution is and does, distinguish written from unwritten and rigid from flexible constitutions, and describe how constitutions protect individual liberties.",
              answerKey:
                "Award marks as follows: a constitution defined as setting out the principles of the people and government, structuring the branches and their duties, limiting government and listing reserved freedoms, 12 marks; written (codified, one document) versus unwritten (uncodified, many sources, still existing), with examples, 10 marks; rigid (special process) versus flexible (ordinary law), with entrenchment and constitutional supremacy explained, 12 marks; protection of liberties through negative rights (limits on government) and positive rights (obligations to guarantee), 10 marks; organisation and expression, 6 marks. A learner who does not address both the types and the protection of liberties should not exceed 30.",
              marks: 50,
            },
          ],
        },
        // source: GeeksforGeeks — Working of the Government (https://www.geeksforgeeks.org/social-science/working-of-the-government-in-india/) for the general doctrine that the legislature makes laws, the executive implements them and the judiciary interprets them, plus separation of powers and checks and balances. FLAG: Liberia-specific figures (numbers of senators/representatives, term lengths, number of Supreme Court justices, chapter references) could NOT be sourced from an approved page and need a Liberian primary source. General doctrine is taught here. See report.
        {
          slug: "branches-of-government",
          title: "The Branches of Government",
          objective:
            "By the end of the lesson, learners should be able to describe the three branches of government, explain the separation of powers, and explain checks and balances.",
          estimatedMinutes: 80,
          notes: `## The separation of powers

The **separation of powers** divides the responsibilities of government among three branches, so that no single body controls the whole state. The arrangement supports a system of **checks and balances**.

The idea is associated with the writer **Montesquieu**, who argued for dividing governmental power. Classical thinkers who supported it, such as Montesquieu and others, stressed protection against the tyranny of the majority.

## The three branches and their functions

| Branch | Main function |
| --- | --- |
| Legislature | Creates (makes) laws |
| Executive | Implements and enforces laws |
| Judiciary | Interprets laws and administers justice |

- **Legislature** — the law-making body. It enacts laws, debates important issues and oversees the working of the government.
- **Executive** — responsible for implementing and enforcing laws and regulations; it handles everyday governance, administration and decision-making.
- **Judiciary** — responsible for the interpretation of laws and the administration of justice. It ensures laws are upheld, resolves disputes, and protects the rights and liberties of individuals.

## How the branches work together

- The legislature enacts laws and carries out oversight.
- The executive formulates policies and executes the laws.
- The judiciary interprets the laws and settles legal disputes.

## Checks and balances

Separating the branches is not enough on its own; each branch must be able to restrain the others. This system of **checks and balances** helps maintain limits on power and ensures a functioning democratic government.

Checks and balances control deviations by officials, such as corruption, and complement the accountability provided by elections. They protect against the tyranny of the majority by making sure power is not concentrated in one branch.

## Why divide power

- To prevent the concentration of power in one body.
- To protect against the tyranny of the majority.
- To keep officials accountable between elections.

## Key points

- Government power is separated into three branches: legislature, executive and judiciary.
- The legislature makes laws, the executive implements them, the judiciary interprets them.
- Checks and balances let each branch restrain the others and prevent concentration of power.
- The doctrine is associated with Montesquieu and aims to prevent tyranny.`,
          workedExample: `**Question:** A new law is needed to manage a public forest. Explain the role each branch of government would play in making, carrying out and interpreting this law, and show how the separation of powers and checks and balances apply.

**Solution**

*Step 1 — The legislature makes the law.* The legislature is the law-making body. It would debate the issue, enact the forest law, and later oversee how it is working. This is its function: creating laws.

*Step 2 — The executive implements the law.* The executive is responsible for implementing and enforcing laws. It would carry out the forest law day to day — issuing permits, employing rangers, administering the rules. This is everyday governance and administration.

*Step 3 — The judiciary interprets the law.* If a dispute arises — say a company is accused of breaking the forest law — the judiciary interprets the law and administers justice. It resolves the dispute, ensures the law is upheld, and protects the rights and liberties of those involved.

*Step 4 — Separation of powers.* Each task is handled by a different branch, so no single body makes, enforces and judges the law by itself. Power is divided.

*Step 5 — Checks and balances.* Because the branches are separate, each can restrain the others: the legislature oversees how the executive enforces the law, and the judiciary can decide whether actions under the law are lawful. This helps maintain limits on power, guards against abuses such as corruption, and protects against the tyranny of the majority.

**Answer:** The legislature makes the forest law, the executive implements it, and the judiciary interprets it in disputes. Separation of powers divides these roles among three branches, and checks and balances let each branch restrain the others so that power is not concentrated.`,
          quiz: [
            {
              prompt: "The separation of powers divides government among",
              options: ["Two branches", "Three branches", "Five branches", "One branch"],
              correctIndex: 1,
              explanation: "Power is divided among the legislature, executive and judiciary.",
            },
            {
              prompt: "The doctrine of separation of powers is chiefly associated with",
              options: ["Montesquieu", "A football coach", "A scientist", "A poet"],
              correctIndex: 0,
              explanation: "Montesquieu argued for dividing governmental power.",
            },
            {
              prompt: "The legislature is responsible for",
              options: ["Making laws", "Enforcing laws", "Interpreting laws", "Growing crops"],
              correctIndex: 0,
              explanation: "The legislature is the law-making body.",
            },
            {
              prompt: "The executive is responsible for",
              options: [
                "making laws",
                "implementing and enforcing laws",
                "interpreting laws",
                "electing judges only",
              ],
              correctIndex: 1,
              explanation: "The executive implements and enforces the laws.",
            },
            {
              prompt: "The judiciary is responsible for",
              options: [
                "making laws",
                "enforcing laws",
                "interpreting laws and administering justice",
                "collecting taxes",
              ],
              correctIndex: 2,
              explanation: "The judiciary interprets laws and administers justice.",
            },
            {
              prompt: "The main purpose of separating powers is to",
              options: [
                "make government faster",
                "prevent the concentration of power in one body",
                "increase the number of officials",
                "reduce elections",
              ],
              correctIndex: 1,
              explanation: "Division prevents any single body from controlling the state.",
            },
            {
              prompt: "Checks and balances allow each branch to",
              options: ["Ignore the others", "Restrain the others", "Abolish the others", "Rule alone"],
              correctIndex: 1,
              explanation: "Each branch can restrain the others.",
            },
            {
              prompt: "The judiciary protects",
              options: [
                "only the government",
                "the rights and liberties of individuals",
                "only officials",
                "no one",
              ],
              correctIndex: 1,
              explanation: "It ensures laws are upheld and protects individuals' rights.",
            },
            {
              prompt: "Which branch resolves legal disputes?",
              options: ["Legislature", "Executive", "Judiciary", "The press"],
              correctIndex: 2,
              explanation: "The judiciary settles disputes and administers justice.",
            },
            {
              prompt: "Everyday governance and administration are handled by the",
              options: ["Legislature", "Executive", "Judiciary", "Voters"],
              correctIndex: 1,
              explanation: "The executive handles day-to-day governance.",
            },
            {
              prompt: "Oversight of how the government is working is carried out by the",
              options: ["Legislature", "Judiciary alone", "No branch", "Foreign states"],
              correctIndex: 0,
              explanation: "The legislature oversees the functioning of government.",
            },
            {
              prompt: "Checks and balances complement the accountability provided by",
              options: ["Elections", "Rainfall", "Taxes only", "Nothing"],
              correctIndex: 0,
              explanation: "They add to the accountability that elections provide.",
            },
            {
              prompt: "Classical thinkers stressed that separation of powers protects against",
              options: [
                "the tyranny of the majority",
                "good harvests",
                "free elections",
                "public debate",
              ],
              correctIndex: 0,
              explanation: "It guards against the tyranny of the majority.",
            },
            {
              prompt: "Which sequence matches branch to function?",
              options: [
                "Legislature interprets, executive makes, judiciary enforces",
                "Legislature makes, executive implements, judiciary interprets",
                "Legislature enforces, executive interprets, judiciary makes",
                "All three make laws",
              ],
              correctIndex: 1,
              explanation: "Make, implement, interpret — legislature, executive, judiciary.",
            },
            {
              prompt: "Checks and balances help control",
              options: [
                "deviations by officials such as corruption",
                "the weather",
                "crop yields",
                "school timetables",
              ],
              correctIndex: 0,
              explanation: "They control abuses such as corruption.",
            },
            {
              prompt: "A functioning democratic government is helped by",
              options: [
                "concentrating power in one branch",
                "separation of powers with checks and balances",
                "removing all branches",
                "ending elections",
              ],
              correctIndex: 1,
              explanation: "Separation with checks and balances maintains limits on power.",
            },
            {
              prompt: "The legislature also",
              options: [
                "debates important issues",
                "delivers court verdicts",
                "commands the army only",
                "prints money privately",
              ],
              correctIndex: 0,
              explanation: "It enacts laws and debates important issues.",
            },
            {
              prompt: "Interpreting a disputed law is the role of the",
              options: ["Executive", "Judiciary", "Legislature", "Electorate"],
              correctIndex: 1,
              explanation: "The judiciary interprets laws.",
            },
            {
              prompt: "The three branches together ensure that",
              options: [
                "one person controls the state",
                "power is shared and each branch checks the others",
                "no laws are ever made",
                "courts make all laws",
              ],
              correctIndex: 1,
              explanation: "Sharing power and mutual checks prevent concentration.",
            },
            {
              prompt: "Enforcing the laws made by the legislature is the job of the",
              options: ["Judiciary", "Executive", "Press", "Voters"],
              correctIndex: 1,
              explanation: "The executive implements and enforces laws.",
            },
          ],
          test: [
            {
              type: "SHORT_ANSWER",
              prompt:
                "Name the three branches of government and state the main function of each.",
              answerKey:
                "Legislature — makes (creates) laws, debates important issues and oversees government. Executive — implements and enforces laws, handling everyday governance and administration. Judiciary — interprets laws and administers justice, resolving disputes and protecting rights. Award 2 marks per branch named with its function; award up to 3 further marks for accurate detail.",
              marks: 9,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain the separation of powers and why it is used.",
              answerKey:
                "The separation of powers divides the responsibilities of government among three branches so that no single body controls the whole state, supporting a system of checks and balances. It is associated with Montesquieu. It is used to prevent the concentration of power, to protect against the tyranny of the majority, and to keep officials accountable. Award 5 marks for the explanation and 3 marks for the reasons.",
              marks: 8,
            },
            {
              type: "MULTIPLE_CHOICE",
              prompt:
                "Which branch interprets laws and administers justice?",
              options: ["Legislature", "Executive", "Judiciary", "The electorate"],
              correctIndex: 2,
              answerKey:
                "The judiciary interprets laws, resolves disputes and protects rights. Option C.",
              marks: 4,
            },
            {
              type: "SHORT_ANSWER",
              prompt:
                "Explain what checks and balances are and give one reason they matter.",
              answerKey:
                "Checks and balances are the arrangement by which each branch of government can restrain the others, so that no branch dominates. They matter because they maintain limits on power, control deviations by officials such as corruption, complement the accountability provided by elections, and protect against the tyranny of the majority. Award 4 marks for the explanation and 4 marks for a developed reason.",
              marks: 8,
            },
            {
              type: "ESSAY",
              prompt:
                "Describe the three branches of government and their functions, explain the separation of powers and the system of checks and balances, and discuss why dividing power is important.",
              answerKey:
                "Award marks as follows: the three branches described with functions — legislature (makes laws, debates, oversees), executive (implements and enforces, everyday governance), judiciary (interprets laws, administers justice, protects rights), 15 marks; the separation of powers explained, dividing responsibilities so no single body controls the state, associated with Montesquieu, 10 marks; checks and balances explained as each branch restraining the others to maintain limits on power, 12 marks; discussion of why dividing power matters — preventing concentration of power, protecting against the tyranny of the majority, keeping officials accountable, 8 marks; organisation and expression, 5 marks. A learner who describes the branches but does not address checks and balances should not exceed 30.",
              marks: 50,
            },
          ],
        },
      ],
    },
  ],
};
