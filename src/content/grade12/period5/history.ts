import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for History, Grade 12,
// Semester Two, Period V: Africa and the United Nations. The MoE CONTENTS list
// has four top-level items, each rebuilt here as its own topic: (1) Africa and
// the United Nations (overview); (2) Africa's role at the founding of the
// United Nations; (3) the contributions of Africa to the United Nations; and
// (4) the relationship between African countries and the United Nations.
//
// SOURCING NOTE: this period maps well onto approved published sources. It is
// built from OpenStax — Introduction to Political Science (the UN's founding,
// purpose and structure) and World History Volume 2 (the UN's creation in 1945
// and the Non-Aligned Movement / Bandung bloc of newly independent African and
// Asian states). Where the MoE asks for the specific African countries that
// played key roles at the 1945 founding, the approved sources establish the
// framework (equal representation of "nations large and small", the Trusteeship
// Council, and the later decolonisation wave) but do not list each founding
// African member; that roster is flagged for the teacher and must come from the
// MoE primary texts (Liberia History Book; History of Africa, Pearson).
export const historyG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Africa and the United Nations",
  summary:
    "Period V of the MoE Grade 12 History syllabus. Learners study Africa and the United Nations — what the UN is and how it is organised, Africa's role at the UN's founding, Africa's contributions to the UN, and the relationship between African countries and the UN. Built from OpenStax Introduction to Political Science (the UN's founding, purpose and structure) and World History Volume 2 (the 1945 creation of the UN and the Non-Aligned Movement of newly independent African and Asian states), with the specific roster of founding African members flagged for the teacher to supply from the MoE primary texts.",
  topics: [
    {
      // source: OpenStax — Introduction to Political Science, 15.3 The United Nations and Global Intergovernmental Organizations (IGOs) (https://openstax.org/books/introduction-political-science/pages/15-3-the-united-nations-and-global-intergovernmental-organizations-igos)
      slug: "africa-and-the-united-nations",
      title: "Africa and the United Nations",
      objective:
        "By the end of the topic, learners should be able to explain what the United Nations is, why it was created, its main aims and its principal organs, and how African member states take part in it.",
      estimatedMinutes: 90,
      notes: `## What the United Nations is (sourced foundation)

- The **United Nations (UN)** is a global intergovernmental organisation "created after World War II to ensure international peace and stability."
- It replaced the ineffective **League of Nations**, which had required unanimous agreement among members.
- It rests on **state sovereignty**: "Because the United Nations was founded in part on the principle of the sovereignty of member states, it is not and cannot become a 'world government.'"
- **193 sovereign states** are members, each joining as an equal.

## The three overarching goals

1. **Promoting peace** — preventing and ending war.
2. **Ensuring human rights** — protecting fundamental rights.
3. **Achieving sustainable development** — raising standards of living.

## The principal organs

- **General Assembly** — "Each of the 193 UN member states has equal representation, regardless of its size or wealth, in the primary deliberative organ." This one-state-one-vote rule gives every African nation, large or small, an equal voice.
- **Security Council** — 15 members: 10 elected to two-year terms and 5 permanent seats held by the WWII victors (United States, United Kingdom, France, Russia, China); the permanent five hold a **veto**.
- **Secretariat** — led by the **Secretary-General**; does administrative and diplomatic work.
- **ECOSOC** (Economic and Social Council) — handles economic and social issues and coordinates development.
- **Trusteeship Council** — "administered former colonial territories; now inactive" — the organ through which many African territories moved toward independence.

## How African members take part

- Every African state has an **equal vote** in the General Assembly, so Africa can shape debate as a bloc.
- African states can be **elected to the Security Council** for two-year terms.
- They receive UN development aid through ECOSOC and specialised agencies.
- **Peacekeeping:** "UN peacekeepers are deployed at the request of the warring parties and with the authorization of the Security Council," following the principles of consent, impartiality, and non-use of force except in self-defence.

## Source note

- The UN's nature, aims and organs are fully sourced. The specific African member states and their individual UN activity should be matched to the MoE primary texts where names are required.`,
      workedExample: `**Question:** Explain what the United Nations is and how an African member state takes part in it.

**Solution**

*Step 1 — define the UN.*
The UN is a global intergovernmental organisation created after World War II to ensure international peace and stability, resting on the sovereignty of its 193 member states.

*Step 2 — its aims.*
It pursues three goals: promoting peace, ensuring human rights, and achieving sustainable development.

*Step 3 — the organs a member uses.*
In the General Assembly every state, large or small, has one equal vote; a state may be elected to the 15-member Security Council; it works through ECOSOC for development; and it can host or contribute to peacekeeping.

*Step 4 — the equal-voice point.*
Because representation in the General Assembly is equal regardless of size or wealth, an African nation has the same vote as a great power there.

**Conclusion:** the UN is a sovereignty-based peace-and-development body of 193 states, and an African member participates chiefly through its equal General Assembly vote, possible Security Council membership, development work and peacekeeping.`,
      quiz: [
        { prompt: "The United Nations was created to ensure", options: ["international peace and stability", "a single world government", "colonial expansion", "one national currency"], correctIndex: 0, explanation: "The UN was created after WWII to ensure peace and stability." },
        { prompt: "The UN replaced the ineffective", options: ["League of Nations", "Roman Empire", "Warsaw Pact", "OAU"], correctIndex: 0, explanation: "It replaced the League of Nations." },
        { prompt: "The UN cannot become a world government because it is founded on", options: ["the sovereignty of member states", "a single army", "one religion", "colonial rule"], correctIndex: 0, explanation: "State sovereignty bars it from being a world government." },
        { prompt: "How many sovereign states are UN members?", options: ["193", "15", "5", "50"], correctIndex: 0, explanation: "There are 193 member states." },
        { prompt: "The three overarching UN goals are peace, human rights and", options: ["sustainable development", "colonisation", "disarmament only", "free trade only"], correctIndex: 0, explanation: "Peace, human rights and sustainable development." },
        { prompt: "In the General Assembly, each member state has", options: ["equal representation regardless of size or wealth", "votes based on population", "votes based on wealth", "no vote"], correctIndex: 0, explanation: "Every state has one equal vote." },
        { prompt: "The General Assembly is the UN's primary", options: ["deliberative organ", "army", "bank", "court of appeal"], correctIndex: 0, explanation: "It is the primary deliberative organ." },
        { prompt: "The Security Council has how many members?", options: ["15", "193", "5", "10"], correctIndex: 0, explanation: "It has 15 members." },
        { prompt: "How many Security Council seats are permanent?", options: ["5", "10", "15", "0"], correctIndex: 0, explanation: "Five permanent seats are held by the WWII victors." },
        { prompt: "The permanent five hold the power of", options: ["veto", "election", "taxation", "appeal"], correctIndex: 0, explanation: "The P5 hold a veto." },
        { prompt: "The permanent members are the US, UK, France, Russia and", options: ["China", "Japan", "Germany", "India"], correctIndex: 0, explanation: "China is the fifth permanent member." },
        { prompt: "The UN's chief administrative officer is the", options: ["Secretary-General", "President", "Pope", "Chief Justice"], correctIndex: 0, explanation: "The Secretariat is led by the Secretary-General." },
        { prompt: "Economic and social issues are handled by", options: ["ECOSOC", "the veto", "the Trusteeship Council", "the army"], correctIndex: 0, explanation: "ECOSOC handles economic and social matters." },
        { prompt: "The organ that administered former colonial territories was the", options: ["Trusteeship Council", "Security Council", "ECOSOC", "General Assembly"], correctIndex: 0, explanation: "The Trusteeship Council administered former colonies." },
        { prompt: "The Trusteeship Council is now", options: ["inactive", "the most powerful organ", "a bank", "an army"], correctIndex: 0, explanation: "It is now inactive." },
        { prompt: "Equal General Assembly votes let African nations", options: ["shape debate as a bloc", "command the Security Council", "abolish the veto", "rule the world"], correctIndex: 0, explanation: "Equal votes give Africa collective influence in debate." },
        { prompt: "UN peacekeepers are deployed with the authorization of the", options: ["Security Council", "Secretariat only", "ECOSOC", "a single state"], correctIndex: 0, explanation: "The Security Council authorises peacekeeping." },
        { prompt: "A core peacekeeping principle is", options: ["consent of the parties and impartiality", "colonising the host", "taking sides", "permanent occupation"], correctIndex: 0, explanation: "Consent, impartiality and non-use of force except in self-defence." },
        { prompt: "An African state can serve on the Security Council as", options: ["a non-permanent member elected for two years", "a sixth permanent member", "its president", "its banker"], correctIndex: 0, explanation: "States are elected to two-year non-permanent terms." },
        { prompt: "The specific African member states by name should be taken from", options: ["the MoE primary texts where names are required", "guesswork", "the model's memory", "no source"], correctIndex: 0, explanation: "Match names to MoE texts where required." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is the United Nations and why was it created?", answerKey: "The United Nations is a global intergovernmental organisation of 193 sovereign states, created after World War II to ensure international peace and stability. It replaced the ineffective League of Nations and rests on the sovereignty of its members, so it is not a world government. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the UN's three overarching goals and its primary deliberative organ.", answerKey: "The three goals are promoting peace, ensuring human rights, and achieving sustainable development. The primary deliberative organ is the General Assembly, in which every member state has equal representation regardless of size or wealth. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The five permanent members of the Security Council are the US, UK, France, Russia and", options: ["China", "Germany", "Japan", "Brazil"], correctIndex: 0, answerKey: "China. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe two ways an African member state takes part in the UN.", answerKey: "Any two: casting its equal one-state-one-vote in the General Assembly and acting within a bloc; standing for election to the Security Council for a two-year term; receiving development support through ECOSOC and specialised agencies; hosting or contributing to UN peacekeeping (deployed with consent, impartiality and Security Council authorization). Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain what the United Nations is, its aims and its principal organs, and how African states participate in it.", answerKey: "Award marks for: defining the UN as a sovereignty-based intergovernmental body of 193 states created after WWII to ensure peace, replacing the League of Nations, 6 marks; its three goals — peace, human rights, sustainable development, 4 marks; its organs — General Assembly (equal representation), Security Council (15 members, P5 veto), Secretariat/Secretary-General, ECOSOC, Trusteeship Council, 8 marks; African participation — equal GA vote and bloc influence, election to the Security Council, development aid, peacekeeping, 5 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 13.4 Out of the Ashes (https://openstax.org/books/world-history-volume-2/pages/13-4-out-of-the-ashes) and Introduction to Political Science, 15.3 The United Nations (https://openstax.org/books/introduction-political-science/pages/15-3-the-united-nations-and-global-intergovernmental-organizations-igos)
      slug: "africas-role-at-the-founding-of-the-united-nations",
      title: "Africa's Role at the Founding of the United Nations",
      objective:
        "By the end of the topic, learners should be able to explain how and why the United Nations was founded in 1945 and the principle of equality of nations large and small that shaped the place of African states, while recognising that the specific founding African members must be taken from the MoE primary texts.",
      estimatedMinutes: 85,
      notes: `## Why and when the UN was founded (sourced foundation)

- The UN "emerged from wartime planning." At the **Yalta Conference**, President Roosevelt sought "Soviet support for the creation of a new institution — the United Nations."
- It was "established in New York City in April 1945" and was part of "attempts across the globe to achieve some form of just and lasting peace."
- It was "modeled on the premise of **collective security** but would be a **stronger body than the League of Nations** had been."

## The founding pledge

- The Charter's opening pledge is to:
> "save succeeding generations from the scourge of war, which twice in our lifetime has brought untold sorrow to mankind, and to reaffirm faith in fundamental human rights, in the equal rights of men and women and of **nations large and small**."

## Why "nations large and small" mattered for Africa

- The founding principle of the **equal rights of nations large and small** meant that even small or newly sovereign states would sit as equals.
- In the **General Assembly**, "each of the 193 UN member states has equal representation, regardless of its size or wealth" — the structural expression of that founding promise.
- At 1945 most of Africa was still colonised; the few independent African states present joined as sovereign equals, and the **Trusteeship Council** was created as the organ to carry remaining colonial territories toward independence.

## The place of Africa at the founding

- **As sovereign equals:** independent African states could sign the Charter and vote equally.
- **As future members:** the Trusteeship and self-determination framework opened the door for the rest of Africa to join as it decolonised.
- **As beneficiaries of the pledge:** the promise of the "equal rights of… nations large and small" became a tool African states would use to press for decolonisation.

## Source note and syllabus gap

- The founding of the UN and the principle of equality of all nations are fully sourced. The approved sources do **not** name each African state present at the 1945 founding; that roster (including Liberia's part) is **not invented here** — use the MoE primary texts (Liberia History Book; History of Africa, Pearson).`,
      workedExample: `**Question:** Explain how the United Nations was founded and why its founding principles mattered for African states.

**Solution**

*Step 1 — the founding.*
The UN grew out of wartime planning (Roosevelt sought Soviet backing at Yalta) and was established in New York City in April 1945 to achieve a just and lasting peace.

*Step 2 — the model.*
It was built on collective security but made a stronger body than the failed League of Nations.

*Step 3 — the pledge.*
Its Charter pledged to save future generations from the scourge of war and to affirm the equal rights of "nations large and small".

*Step 4 — why it mattered for Africa.*
That equality principle, expressed in the General Assembly's equal representation, meant small and newly sovereign African states would sit as equals; the Trusteeship Council framed the path for colonised Africa to join.

*Step 5 — the limit.*
The specific African states present in 1945 are not named in the approved sources; take that roster from the MoE primary texts.

**Conclusion:** the UN was founded in 1945 as a stronger, collective-security body pledged to the equal rights of nations large and small — a principle that gave African states an equal seat and a route from colony to membership, with the founding roster drawn from the MoE primary texts.`,
      quiz: [
        { prompt: "The UN emerged from planning during", options: ["World War II", "the Cold War's end", "the Renaissance", "the Punic Wars"], correctIndex: 0, explanation: "It emerged from wartime planning in WWII." },
        { prompt: "At Yalta, Roosevelt sought Soviet support for", options: ["creating the United Nations", "invading Africa", "ending all trade", "abolishing borders"], correctIndex: 0, explanation: "Roosevelt sought Soviet backing for the UN at Yalta." },
        { prompt: "The UN was established in New York City in", options: ["April 1945", "1919", "1960", "1990"], correctIndex: 0, explanation: "It was established in April 1945." },
        { prompt: "The UN was modelled on the premise of", options: ["collective security", "colonial conquest", "absolute monarchy", "free markets"], correctIndex: 0, explanation: "It was built on collective security." },
        { prompt: "Compared with the League of Nations, the UN was meant to be", options: ["a stronger body", "a weaker body", "identical", "a colony"], correctIndex: 0, explanation: "It was to be stronger than the League." },
        { prompt: "The Charter pledged to save succeeding generations from", options: ["the scourge of war", "high taxes", "cold weather", "trade"], correctIndex: 0, explanation: "The pledge is to end the scourge of war." },
        { prompt: "The Charter affirmed the equal rights of", options: ["nations large and small", "only great powers", "only colonies", "only Europe"], correctIndex: 0, explanation: "It affirmed the equal rights of nations large and small." },
        { prompt: "The equality principle let small states", options: ["sit as equals", "be excluded", "lose sovereignty", "pay more dues"], correctIndex: 0, explanation: "Equality meant small states sat as equals." },
        { prompt: "The structural expression of that equality is the", options: ["General Assembly's equal representation", "P5 veto", "Trusteeship Council", "Secretariat"], correctIndex: 0, explanation: "Equal representation in the General Assembly expresses it." },
        { prompt: "At 1945, most of Africa was", options: ["still colonised", "fully independent", "uninhabited", "part of the UN army"], correctIndex: 0, explanation: "Most of Africa was still under colonial rule in 1945." },
        { prompt: "The organ created to carry colonial territories toward independence was the", options: ["Trusteeship Council", "Security Council", "ECOSOC", "General Assembly"], correctIndex: 0, explanation: "The Trusteeship Council handled former colonies." },
        { prompt: "Independent African states at the founding joined as", options: ["sovereign equals who could sign the Charter", "colonies without a vote", "observers only", "non-members"], correctIndex: 0, explanation: "They joined as sovereign equals." },
        { prompt: "The equality pledge later became a tool African states used to press for", options: ["decolonisation", "re-colonisation", "ending the UN", "the veto"], correctIndex: 0, explanation: "They used it to demand decolonisation." },
        { prompt: "Collective security means", options: ["states act together against aggression", "each state fights alone", "no state has an army", "colonies rule"], correctIndex: 0, explanation: "Collective security is acting together against aggression." },
        { prompt: "The UN was part of global attempts to achieve", options: ["a just and lasting peace", "colonial expansion", "a single empire", "free gold"], correctIndex: 0, explanation: "It aimed at a just and lasting peace." },
        { prompt: "Why did the League of Nations' weakness matter?", options: ["the UN was built stronger to avoid repeating its failure", "it had no name", "it was too large", "it banned members"], correctIndex: 0, explanation: "The UN was strengthened to avoid the League's failure." },
        { prompt: "The specific African states present in 1945 are", options: ["not named in the approved sources — use MoE texts", "listed in full", "invented here", "irrelevant"], correctIndex: 0, explanation: "The founding roster is not in the sources; use MoE texts." },
        { prompt: "The founding pledge affirmed faith in fundamental", options: ["human rights", "colonial rights", "royal privileges", "trade tariffs"], correctIndex: 0, explanation: "It reaffirmed faith in fundamental human rights." },
        { prompt: "Self-determination and trusteeship opened a route for Africa to", options: ["join the UN as it decolonised", "stay colonised forever", "leave the world", "abolish the General Assembly"], correctIndex: 0, explanation: "They opened the path to membership through decolonisation." },
        { prompt: "The safest handling of the 1945 African roster is to", options: ["cite the MoE texts and not invent it", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "How and when was the United Nations founded, and how did it differ from the League of Nations?", answerKey: "The UN grew out of World War II planning (Roosevelt sought Soviet support at Yalta) and was established in New York City in April 1945. It was modelled on collective security but designed as a stronger body than the League of Nations, which had failed to prevent war. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the Charter's founding pledge and explain why the phrase 'nations large and small' mattered for Africa.", answerKey: "The Charter pledged to save succeeding generations from the scourge of war and to reaffirm faith in human rights and the equal rights of men and women and of nations large and small. This mattered for Africa because it meant small and newly sovereign states would sit as equals, expressed in the General Assembly's equal representation. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The United Nations was established in", options: ["April 1945", "1919", "1960", "1990"], correctIndex: 0, answerKey: "April 1945. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain the role of the Trusteeship Council for colonised Africa.", answerKey: "The Trusteeship Council was the organ that administered former colonial territories and carried them toward independence. For colonised Africa it framed the path from colony to self-government and eventual sovereign UN membership. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Explain the founding of the United Nations in 1945 and the principles that shaped the place of African states, noting the limits of the sources.", answerKey: "Award marks for: the founding — wartime planning, Yalta, establishment in New York in April 1945, collective security, and a stronger body than the League, 7 marks; the Charter pledge to end the scourge of war and affirm human rights and the equal rights of nations large and small, 6 marks; why equality and the Trusteeship/self-determination framework mattered for Africa — equal seats for sovereign states and a route to membership through decolonisation, 6 marks; a clear statement that the specific African founding members are not named in the approved sources and must come from the MoE primary texts, 4 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.3 The Non-Aligned Movement (https://openstax.org/books/world-history-volume-2/pages/14-3-the-non-aligned-movement) and Introduction to Political Science, 15.3 The United Nations (https://openstax.org/books/introduction-political-science/pages/15-3-the-united-nations-and-global-intergovernmental-organizations-igos)
      slug: "contributions-of-africa-to-the-united-nations",
      title: "Contributions of Africa to the United Nations",
      objective:
        "By the end of the topic, learners should be able to explain the contributions newly independent African states made to the United Nations — enlarging its membership, acting as a non-aligned bloc, and pressing for decolonisation and equality — while recognising that specific national contributions must come from the MoE primary texts.",
      estimatedMinutes: 85,
      notes: `## How Africa reshaped the UN (sourced foundation)

- As African colonies won independence, they joined the UN in large numbers, **enlarging its membership** and shifting the balance in the **General Assembly**, where "each of the 193 UN member states has equal representation, regardless of its size or wealth."
- Africa's weight in the UN therefore grew through its **equal votes**, not its wealth or armies.

## The non-aligned contribution

- Newly independent African (and Asian) states built the **Non-Aligned Movement** — "an attempt by newly independent nations to stay out of the orbit of either the Western or the Eastern Bloc."
- The **Bandung Conference of 1955** gathered "representatives from twenty-nine Asian and African nations" who sought to "rely on one another as they strove to industrialize and avoid the need to turn to Europe, the United States, or the Soviet Union for assistance."
- Their common goals were "**decolonization, disarmament, bans on nuclear testing, and equality of economic development**."

## Specific contributions to the UN's work

- **Decolonisation:** African members used their General Assembly votes to push the UN to back **self-determination** and end colonial rule.
- **Disarmament and peace:** supporting disarmament and bans on nuclear testing.
- **Equality of economic development:** pressing for development and fairer economic relations (the UN's third goal, sustainable development).
- **A voice for the small:** acting as a bloc so that smaller states, not just great powers, shaped UN debate.

## Why the bloc mattered

- By refusing to be "satellite states of either superpower bloc," non-aligned African states kept the UN from becoming merely a Cold War arena and widened its agenda to decolonisation and development.

## Source note and syllabus gap

- Africa's collective contribution — enlarging membership, the Non-Aligned Movement, and the push for decolonisation, disarmament and development — is sourced. The approved sources do **not** detail each African country's individual UN contribution; those are **not invented here** — use the MoE primary texts (Liberia History Book; History of Africa, Pearson).`,
      workedExample: `**Question:** Explain the main contributions newly independent African states made to the United Nations.

**Solution**

*Step 1 — enlarging the UN.*
As colonies became independent, African states joined in numbers, enlarging UN membership and increasing Africa's weight in the General Assembly, where every state has an equal vote.

*Step 2 — the non-aligned bloc.*
African and Asian states built the Non-Aligned Movement (Bandung, 1955; 29 nations) to stay out of the Western and Eastern blocs and rely on one another.

*Step 3 — the agenda they advanced.*
They pushed the UN toward decolonisation, disarmament, bans on nuclear testing and equality of economic development.

*Step 4 — the effect.*
By refusing to be superpower satellites, they kept the UN from being only a Cold War arena and widened its agenda.

*Step 5 — the limit.*
Individual national contributions are not detailed in the approved sources; take them from the MoE primary texts.

**Conclusion:** Africa's chief contribution was to enlarge the UN and, through the Non-Aligned Movement and its equal votes, drive its agenda toward decolonisation, disarmament and development — with specific national records drawn from the MoE primary texts.`,
      quiz: [
        { prompt: "As African colonies won independence, UN membership", options: ["grew larger", "shrank", "stayed fixed at 5", "ended"], correctIndex: 0, explanation: "New African states enlarged UN membership." },
        { prompt: "Africa's growing weight in the UN came mainly through its", options: ["equal General Assembly votes", "largest armies", "greatest wealth", "veto power"], correctIndex: 0, explanation: "Equal votes, not wealth or armies, gave Africa weight." },
        { prompt: "The Non-Aligned Movement tried to keep new nations out of", options: ["both the Western and Eastern blocs", "the General Assembly", "all trade", "the tropics"], correctIndex: 0, explanation: "It kept them out of both Cold War blocs." },
        { prompt: "The Bandung Conference was held in", options: ["1955", "1919", "1990", "1847"], correctIndex: 0, explanation: "Bandung took place in 1955." },
        { prompt: "How many nations met at Bandung?", options: ["twenty-nine Asian and African", "five", "one hundred ninety-three", "two"], correctIndex: 0, explanation: "Twenty-nine Asian and African nations attended." },
        { prompt: "Bandung nations wanted to rely on one another to", options: ["industrialise without turning to the superpowers", "re-colonise Europe", "abolish the UN", "start a world war"], correctIndex: 0, explanation: "They sought to industrialise without superpower dependence." },
        { prompt: "A common goal of the non-aligned nations was", options: ["decolonization", "re-colonisation", "nuclear expansion", "ending the General Assembly"], correctIndex: 0, explanation: "Decolonisation was a core common goal." },
        { prompt: "Another common goal was", options: ["disarmament and bans on nuclear testing", "more empires", "ending human rights", "closing the UN"], correctIndex: 0, explanation: "They sought disarmament and nuclear-test bans." },
        { prompt: "They also pressed for", options: ["equality of economic development", "permanent colonies", "a single superpower", "no development"], correctIndex: 0, explanation: "Equality of economic development was a goal." },
        { prompt: "African members used General Assembly votes to push the UN to back", options: ["self-determination and end colonial rule", "re-colonisation", "the veto", "world government"], correctIndex: 0, explanation: "They backed self-determination and decolonisation." },
        { prompt: "By refusing to be superpower satellites, African states kept the UN from being only a", options: ["Cold War arena", "trading company", "colonial office", "military base"], correctIndex: 0, explanation: "They stopped the UN becoming only a Cold War stage." },
        { prompt: "Equality of economic development links to which UN goal?", options: ["sustainable development", "the veto", "the Trusteeship Council", "collective security only"], correctIndex: 0, explanation: "It aligns with the UN's sustainable-development goal." },
        { prompt: "Acting as a bloc meant smaller states could", options: ["shape UN debate, not just great powers", "command the Security Council", "abolish the veto", "levy taxes"], correctIndex: 0, explanation: "A bloc let smaller states shape debate." },
        { prompt: "The Non-Aligned Movement was built by", options: ["newly independent nations", "the WWII victors", "colonial empires", "the Security Council P5"], correctIndex: 0, explanation: "Newly independent nations built it." },
        { prompt: "Bandung nations sought to avoid turning to Europe, the US or the", options: ["Soviet Union for assistance", "United Nations", "General Assembly", "Trusteeship Council"], correctIndex: 0, explanation: "They avoided dependence on the superpowers, including the USSR." },
        { prompt: "Africa's contribution was based on", options: ["collective voting strength and a wider agenda", "military conquest", "colonial wealth", "the veto"], correctIndex: 0, explanation: "It rested on collective votes and agenda-setting." },
        { prompt: "Individual national UN contributions by name should come from", options: ["the MoE primary texts", "guesswork", "the model's memory", "no source"], correctIndex: 0, explanation: "Match specific national records to MoE texts." },
        { prompt: "The Non-Aligned Movement's stance toward the superpowers was", options: ["neutrality / non-alignment", "full alliance with the West", "full alliance with the East", "war on both"], correctIndex: 0, explanation: "It was neutrality and non-alignment." },
        { prompt: "Enlarging the General Assembly shifted its", options: ["balance toward decolonising states", "seating alphabetically", "veto to Africa", "headquarters to Africa"], correctIndex: 0, explanation: "New members shifted the Assembly's balance." },
        { prompt: "The safest handling of a specific country's UN record is to", options: ["cite the MoE texts and not invent it", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "How did the independence of African colonies change the UN?", answerKey: "As African colonies won independence they joined the UN in large numbers, enlarging its membership and shifting the balance of the General Assembly, where every state has an equal vote regardless of size or wealth. This increased Africa's collective weight in UN debate. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "What was the Non-Aligned Movement and when/where did its key conference meet?", answerKey: "The Non-Aligned Movement was an attempt by newly independent nations to stay out of the orbit of both the Western and Eastern blocs. Its key early conference was the Bandung Conference of 1955, which gathered representatives from twenty-nine Asian and African nations. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A common goal of the non-aligned African and Asian nations was", options: ["decolonization and disarmament", "re-colonisation", "nuclear expansion", "ending the General Assembly"], correctIndex: 0, answerKey: "Decolonization and disarmament (also bans on nuclear testing and equality of economic development). Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two ways African states contributed to the UN's work.", answerKey: "Any two: enlarging membership and shifting the General Assembly's balance; building the Non-Aligned Movement; pushing the UN to back self-determination and decolonisation; supporting disarmament and bans on nuclear testing; pressing for equality of economic development; giving smaller states a collective voice so the UN was not just a Cold War arena. Award 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the contributions of newly independent African states to the United Nations, noting the limits of the sources.", answerKey: "Award marks for: enlarging UN membership and increasing Africa's weight in the General Assembly through equal votes, 6 marks; the Non-Aligned Movement and Bandung (1955, 29 nations) as an attempt to avoid both Cold War blocs, 6 marks; the agenda advanced — decolonisation/self-determination, disarmament and nuclear-test bans, equality of economic development, 6 marks; the effect of keeping the UN from being only a Cold War arena and giving smaller states a voice, 3 marks; a clear statement that individual national contributions are not detailed in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
    {
      // source: OpenStax — World History Volume 2, 14.3 The Non-Aligned Movement (https://openstax.org/books/world-history-volume-2/pages/14-3-the-non-aligned-movement) and 14.4 Global Tensions and Decolonization (https://openstax.org/books/world-history-volume-2/pages/14-4-global-tensions-and-decolonization) and Introduction to Political Science, 15.3 The United Nations (https://openstax.org/books/introduction-political-science/pages/15-3-the-united-nations-and-global-intergovernmental-organizations-igos)
      slug: "relationship-between-african-countries-and-the-united-nations",
      title: "Relationship Between African Countries and the United Nations",
      objective:
        "By the end of the topic, learners should be able to summarise the relationship between African countries and the United Nations — cooperation through votes, development and peacekeeping, and its limits — while recognising that specific cases must come from the MoE primary texts.",
      estimatedMinutes: 85,
      notes: `## The shape of the relationship (sourced foundation)

- The relationship is **two-way**: African states use the UN to pursue their goals, and the UN works through African states and in Africa.
- It rests on **sovereign equality**: every African member has equal representation in the General Assembly "regardless of its size or wealth," and the UN "cannot become a 'world government'" over them.

## Ways the relationship works

- **Voice and voting.** African states advance decolonisation, disarmament and "equality of economic development" through their General Assembly votes, often as a non-aligned bloc.
- **Development.** Through **ECOSOC** and specialised agencies, the UN supports economic and social development in African states (the UN's sustainable-development goal).
- **Peace and security.** African states can serve on the Security Council and host or supply **peacekeepers**, "deployed at the request of the warring parties and with the authorization of the Security Council," under consent, impartiality and non-use of force except in self-defence.
- **Non-alignment.** Many African states related to the UN as **non-aligned** members, refusing to be "satellite states of either superpower bloc."

## The limits of the relationship

- The UN respects **state sovereignty**, so it may decline to act inside a member's internal affairs. In the Congo crisis (1960), "Lumumba appealed to the UN, which had sent peacekeeping forces to restore order, to end Katanga's secession. The UN refused, however, claiming secession was an internal political matter with which it should not interfere."
- The **P5 veto** in the Security Council can block action, limiting what African states can achieve there even with Assembly majorities.
- Cold War rivalry sometimes turned UN action in Africa into a contest between the superpowers.

## Summary table

| Dimension | How Africa and the UN relate |
| --- | --- |
| Voice | equal General Assembly votes, bloc action |
| Development | ECOSOC and agency support |
| Security | Security Council membership and peacekeeping |
| Autonomy | non-alignment; sovereignty respected |
| Limits | sovereignty bar, P5 veto, Cold War rivalry |

## Source note and syllabus gap

- The framework of the relationship — cooperation through votes, development and peacekeeping, and its limits — is sourced, with the Congo (1960) as a sourced example. The approved sources do **not** detail every African country's dealings with the UN; those are **not invented here** — use the MoE primary texts (Liberia History Book; History of Africa, Pearson).`,
      workedExample: `**Question:** Summarise the relationship between African countries and the United Nations, including its limits.

**Solution**

*Step 1 — the basis.*
It is a two-way relationship built on sovereign equality: every African member has an equal General Assembly vote and the UN is not a world government over them.

*Step 2 — how it works.*
African states gain voice through votes (often as a non-aligned bloc), development support through ECOSOC, and security through Security Council membership and peacekeeping deployed with consent and Security Council authorization.

*Step 3 — the limits.*
The UN respects sovereignty and may refuse to act in internal affairs — in the 1960 Congo crisis it refused to end Katanga's secession, calling it an internal matter. The P5 veto can block action, and Cold War rivalry could distort UN involvement.

*Step 4 — the limit of sources.*
Specific African cases are not all detailed in the approved sources; take them from the MoE primary texts.

**Conclusion:** African countries and the UN cooperate through equal votes, development and peacekeeping, but the relationship is bounded by respect for sovereignty, the P5 veto and Cold War rivalry — with specific cases drawn from the MoE primary texts.`,
      quiz: [
        { prompt: "The Africa–UN relationship is best described as", options: ["two-way cooperation", "one-way command", "colonial rule", "military occupation"], correctIndex: 0, explanation: "It is a two-way relationship." },
        { prompt: "The relationship rests on", options: ["sovereign equality", "the size of armies", "national wealth", "colonial status"], correctIndex: 0, explanation: "It rests on sovereign equality." },
        { prompt: "In the General Assembly, an African state's representation is", options: ["equal regardless of size or wealth", "based on population", "based on GDP", "zero"], correctIndex: 0, explanation: "Representation is equal regardless of size or wealth." },
        { prompt: "The UN cannot become a", options: ["world government over members", "deliberative body", "peacekeeper", "development agency"], correctIndex: 0, explanation: "Sovereignty means it cannot be a world government." },
        { prompt: "African states advance goals mainly through", options: ["their General Assembly votes", "the P5 veto", "colonial charters", "private armies"], correctIndex: 0, explanation: "They use their Assembly votes, often as a bloc." },
        { prompt: "UN development support to Africa runs through", options: ["ECOSOC and specialised agencies", "the veto", "the Trusteeship Council only", "the ICJ"], correctIndex: 0, explanation: "ECOSOC and agencies handle development." },
        { prompt: "UN peacekeepers deploy with authorization from the", options: ["Security Council", "Secretariat alone", "ECOSOC", "a single member"], correctIndex: 0, explanation: "The Security Council authorises peacekeeping." },
        { prompt: "Peacekeeping principles include consent, impartiality and", options: ["non-use of force except in self-defence", "taking sides", "permanent occupation", "colonisation"], correctIndex: 0, explanation: "The third principle is non-use of force except in self-defence." },
        { prompt: "Many African states related to the UN as", options: ["non-aligned members", "colonies", "satellite states", "permanent members"], correctIndex: 0, explanation: "They were non-aligned members." },
        { prompt: "A limit on the relationship is that the UN respects", options: ["state sovereignty and internal affairs", "no borders", "colonial claims", "the veto only"], correctIndex: 0, explanation: "Respect for sovereignty limits intervention." },
        { prompt: "In the 1960 Congo crisis, Lumumba appealed to the UN to", options: ["end Katanga's secession", "colonise Belgium", "abolish the General Assembly", "start a war"], correctIndex: 0, explanation: "He appealed to end Katanga's secession." },
        { prompt: "The UN's response in the Congo was to", options: ["refuse, calling secession an internal matter", "invade immediately", "expel the Congo", "grant Katanga independence"], correctIndex: 0, explanation: "It refused, calling it an internal political matter." },
        { prompt: "Action in the Security Council can be blocked by the", options: ["P5 veto", "General Assembly", "Secretary-General", "ICJ"], correctIndex: 0, explanation: "The P5 veto can block Security Council action." },
        { prompt: "Cold War rivalry could turn UN action in Africa into a", options: ["superpower contest", "festival", "trade fair", "colony"], correctIndex: 0, explanation: "Rivalry sometimes made UN action a superpower contest." },
        { prompt: "African states can gain security influence by", options: ["serving on the Security Council", "buying the veto", "colonising neighbours", "leaving the UN"], correctIndex: 0, explanation: "They can be elected to the Security Council." },
        { prompt: "Non-alignment meant refusing to be", options: ["a satellite of either superpower bloc", "a UN member", "a sovereign state", "a peacekeeper"], correctIndex: 0, explanation: "It meant not being a satellite of either bloc." },
        { prompt: "The 'development' dimension of the relationship links to the UN goal of", options: ["sustainable development", "collective security only", "the veto", "colonisation"], correctIndex: 0, explanation: "Development links to sustainable development." },
        { prompt: "The Congo case shows the UN can", options: ["decline to act in internal affairs", "always override sovereignty", "elect presidents", "levy taxes"], correctIndex: 0, explanation: "It shows the UN may decline to intervene internally." },
        { prompt: "Every African country's specific UN dealings should come from", options: ["the MoE primary texts", "guesswork", "the model's memory", "no source"], correctIndex: 0, explanation: "Match specific cases to MoE texts." },
        { prompt: "The safest handling of a specific Africa–UN case is to", options: ["cite the MoE texts and not invent it", "guess", "recall from memory", "omit the topic"], correctIndex: 0, explanation: "Cite MoE texts; never invent." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "On what basis does the relationship between African countries and the UN rest?", answerKey: "It rests on sovereign equality: every African member has equal representation in the General Assembly regardless of size or wealth, and the UN — founded on the sovereignty of its members — cannot become a world government over them. The relationship is two-way, with African states using the UN and the UN working through and in Africa. Award up to 4 marks.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two ways African countries and the UN cooperate and one limit on that cooperation.", answerKey: "Cooperation (any two): voice and voting in the General Assembly (often as a non-aligned bloc); development support through ECOSOC and agencies; peace and security through Security Council membership and peacekeeping. Limit (any one): respect for state sovereignty (the UN may decline to act in internal affairs, as in the 1960 Congo); the P5 veto blocking action; Cold War rivalry distorting UN involvement. Award up to 4 marks.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In the 1960 Congo crisis, the UN refused to end Katanga's secession because it", options: ["called secession an internal political matter", "had no peacekeepers", "supported Katanga", "had been abolished"], correctIndex: 0, answerKey: "It claimed secession was an internal political matter with which it should not interfere. Option A.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how peacekeeping fits into the Africa–UN relationship.", answerKey: "African states can host or supply UN peacekeepers, who are deployed at the request of the warring parties and with the authorization of the Security Council, operating under the principles of consent, impartiality and non-use of force except in self-defence. Peacekeeping is a key security dimension of the relationship, though bounded by sovereignty and the Security Council's authorisation. Award up to 4 marks.", marks: 4 },
        { type: "ESSAY", prompt: "Summarise the relationship between African countries and the United Nations, including its cooperative dimensions and its limits, noting the limits of the sources.", answerKey: "Award marks for: the two-way, sovereign-equality basis — equal General Assembly votes and no world government, 6 marks; cooperation — voice/voting as a non-aligned bloc, development through ECOSOC, security through Security Council membership and peacekeeping (consent, impartiality, Security Council authorization), 7 marks; the limits — respect for sovereignty (the 1960 Congo refusal over Katanga), the P5 veto, and Cold War rivalry, 6 marks; a clear statement that specific African cases are not all detailed in the approved sources and must come from the MoE primary texts, 2 marks; conclusion, 2 marks.", marks: 25 },
      ],
    },
  ],
};
