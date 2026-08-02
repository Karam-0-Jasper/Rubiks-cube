import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester One, Period III: The Periodic Table / Periodic Chemistry — the
// periodic law, the arrangement of the table, and the trends in properties
// across periods and down groups.
export const chemistryG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "The Periodic Table",
  summary:
    "Period III of the MoE Grade 10 Chemistry syllabus. Learners study how the elements are arranged in the periodic table by increasing atomic number, use periods and groups to predict an element's properties, and describe the main groups — alkali metals, halogens and noble gases — and simple periodic trends.",
  topics: [
    {
      slug: "arrangement-of-the-periodic-table",
      title: "Arrangement of the Periodic Table",
      objective:
        "By the end of the topic, learners should be able to state the periodic law, describe how the periodic table is arranged into periods and groups, and relate an element's position to its electron arrangement.",
      estimatedMinutes: 150,
      notes: `## Introduction

With over a hundred elements known, chemistry would be chaos if each had to be learned separately. The **periodic table** brings order: by arranging the elements sensibly, it places those that behave alike in the same column, so that knowing where an element sits lets you predict how it will react. This topic states the **periodic law**, explains how the table is built into **periods** and **groups**, and links an element's position directly to its electron arrangement.

## Ordering the elements

There are over 100 chemical **elements**. The **periodic table** arranges them in a way that groups elements with similar properties together, so their behaviour can be predicted from their position.

## The periodic law

The modern **periodic law** states:

> The properties of the elements are a **periodic function of their atomic number**.

This means that when the elements are arranged in order of **increasing atomic number** (number of protons), elements with similar properties recur at regular intervals.

*(Dmitri Mendeleev arranged an early table by atomic mass and even left gaps for undiscovered elements; the modern table is ordered by atomic number.)*

## Periods and groups

\`\`\`svg Periods run across; groups run down
<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid showing periods as rows and groups as columns">
  <g stroke="#92400e" fill="#fde68a">
    <rect x="40" y="20" width="30" height="26"/><rect x="70" y="20" width="30" height="26"/><rect x="100" y="20" width="30" height="26"/><rect x="130" y="20" width="30" height="26"/>
    <rect x="40" y="46" width="30" height="26"/><rect x="70" y="46" width="30" height="26"/><rect x="100" y="46" width="30" height="26"/><rect x="130" y="46" width="30" height="26"/>
    <rect x="40" y="72" width="30" height="26"/><rect x="70" y="72" width="30" height="26"/><rect x="100" y="72" width="30" height="26"/><rect x="130" y="72" width="30" height="26"/>
  </g>
  <line x1="40" y1="12" x2="160" y2="12" stroke="#b45309" stroke-width="2" marker-end="url(#ar)"/>
  <text x="100" y="9" font-size="10" text-anchor="middle" fill="#92400e">period (row) →</text>
  <line x1="30" y1="20" x2="30" y2="98" stroke="#b45309" stroke-width="2" marker-end="url(#ar)"/>
  <text x="200" y="60" font-size="10" fill="#92400e">group (column) ↓</text>
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#b45309"/></marker></defs>
</svg>
\`\`\`

- A **period** is a **horizontal row**. There are 7 periods. The period number tells you the **number of electron shells** the atom has.
- A **group** is a **vertical column**. Elements in the same group have the **same number of outer (valence) electrons**, which is why they have **similar chemical properties**. The group number (for the main groups) equals the number of outer electrons.

**Example:** sodium (2, 8, 1) is in **Period 3** (three shells) and **Group I** (one outer electron).

## Metals, non-metals and metalloids

- **Metals** are on the **left and middle** — shiny, good conductors, tend to lose electrons.
- **Non-metals** are on the **right** — dull, poor conductors, tend to gain electrons.
- A zig-zag line separates them; elements along it (**metalloids**, e.g. silicon) show properties of both.

## Why position predicts properties

Because an element's group gives its number of **outer electrons**, and chemistry is driven by outer electrons, the table lets you **predict** how an element will react just from where it sits. This is the power of the periodic table — introduced here and used throughout senior chemistry.

## Common errors and misconceptions

- **Confusing periods and groups** — a **period** is a horizontal **row**; a **group** is a vertical **column**. Elements in the same group behave alike, not those in the same period.
- **Ordering by mass, not atomic number** — the modern table is arranged by **atomic number** (protons), which fixed the few places where mass order went wrong.
- **Thinking the group number never links to electrons** — for the main groups, the group number equals the number of **outer (valence) electrons**.
- **Calling all elements metals** — the table has metals (left/middle), non-metals (right) and metalloids along the dividing zig-zag.`,
      workedExample: `**Task.** An element has the electron configuration 2, 8, 7. (a) State its period and group. (b) Predict whether it is a metal or non-metal and how it tends to react. (c) Name the element.

**Part (a) — period and group**
- The configuration has **three shells** (2, 8, 7), so it is in **Period 3**.
- Its **outer shell has 7 electrons**, so it is in **Group VII**.

**Part (b) — type and reactivity**
- With 7 outer electrons it is on the **right** of the table, so it is a **non-metal**.
- It needs just **one more electron** to fill its outer shell, so it tends to **gain one electron** and is very **reactive** — a typical halogen.

**Part (c) — identify the element**
- Period 3, Group VII, 2,8,7 → **17 electrons → 17 protons → chlorine (Cl)**.

**Conclusion:** knowing only the electron arrangement, we placed the element (Period 3, Group VII), predicted its behaviour (a reactive non-metal that gains one electron), and identified it as chlorine — showing how position in the table predicts chemistry.`,
      teachingTip:
        "Tie every position question back to electron configuration: the number of shells gives the period, the outer electrons give the group. Once learners internalise 'count the shells, count the outer electrons', they can place any of the first 20 elements without memorising the table. Reinforce that same group = same outer electrons = similar reactions, which is the single most useful predictive idea in the topic.",
      quiz: [
        {
          prompt: "The modern periodic table arranges elements in order of increasing…",
          options: ["atomic number", "atomic mass", "density", "melting point"],
          correctIndex: 0,
          explanation: "The modern table is ordered by atomic (proton) number.",
        },
        {
          prompt: "The periodic law states that element properties are a periodic function of their…",
          options: ["atomic number", "colour", "size", "weight in grams"],
          correctIndex: 0,
          explanation: "Properties recur periodically with atomic number.",
        },
        {
          prompt: "A horizontal row in the periodic table is a…",
          options: ["period", "group", "shell", "family"],
          correctIndex: 0,
          explanation: "Rows are periods.",
        },
        {
          prompt: "A vertical column in the periodic table is a…",
          options: ["group", "period", "orbit", "level"],
          correctIndex: 0,
          explanation: "Columns are groups.",
        },
        {
          prompt: "Elements in the same group have the same number of…",
          options: ["outer (valence) electrons", "neutrons", "protons", "shells"],
          correctIndex: 0,
          explanation: "Same outer electrons gives similar properties.",
        },
        {
          prompt: "The period number tells you the number of…",
          options: ["electron shells", "protons", "neutrons", "isotopes"],
          correctIndex: 0,
          explanation: "The period equals the number of occupied shells.",
        },
        {
          prompt: "Sodium (2, 8, 1) is in which period?",
          options: ["Period 3", "Period 1", "Period 8", "Period 2"],
          correctIndex: 0,
          explanation: "Three shells means Period 3.",
        },
        {
          prompt: "Sodium (2, 8, 1) is in which group?",
          options: ["Group I", "Group VIII", "Group III", "Group VII"],
          correctIndex: 0,
          explanation: "One outer electron means Group I.",
        },
        {
          prompt: "Metals are generally found on the … of the periodic table.",
          options: ["left and middle", "far right", "top only", "bottom row only"],
          correctIndex: 0,
          explanation: "Metals occupy the left and centre.",
        },
        {
          prompt: "Non-metals are generally found on the … of the periodic table.",
          options: ["right", "left", "middle", "bottom-left"],
          correctIndex: 0,
          explanation: "Non-metals are on the right-hand side.",
        },
        {
          prompt: "Elements with properties between metals and non-metals are called…",
          options: ["metalloids", "halogens", "noble gases", "isotopes"],
          correctIndex: 0,
          explanation: "Metalloids (e.g. silicon) lie along the zig-zag line.",
        },
        {
          prompt: "Why do elements in the same group react similarly?",
          options: [
            "they have the same number of outer electrons",
            "they have the same mass",
            "they are the same colour",
            "they have the same number of shells",
          ],
          correctIndex: 0,
          explanation: "Chemistry depends on the outer electrons, which match within a group.",
        },
        {
          prompt: "An element with configuration 2, 8, 8 is in which period?",
          options: ["Period 3", "Period 8", "Period 2", "Period 18"],
          correctIndex: 0,
          explanation: "Three shells → Period 3.",
        },
        {
          prompt: "The scientist who created an early periodic table and left gaps for undiscovered elements was…",
          options: ["Mendeleev", "Dalton", "Rutherford", "Bohr"],
          correctIndex: 0,
          explanation: "Mendeleev arranged elements and predicted unknown ones.",
        },
        {
          prompt: "How many periods are there in the periodic table?",
          options: ["7", "3", "18", "100"],
          correctIndex: 0,
          explanation: "There are 7 periods (rows).",
        },
        {
          prompt: "An element in Group II has how many outer electrons?",
          options: ["2", "8", "1", "0"],
          correctIndex: 0,
          explanation: "The main-group number equals the outer-electron count.",
        },
        {
          prompt: "Metals tend to … electrons during reactions.",
          options: ["lose", "gain", "share equally always", "destroy"],
          correctIndex: 0,
          explanation: "Metals lose their few outer electrons.",
        },
        {
          prompt: "Non-metals tend to … electrons during reactions.",
          options: ["gain", "lose", "ignore", "create"],
          correctIndex: 0,
          explanation: "Non-metals gain electrons to fill their outer shell.",
        },
        {
          prompt: "An element in Period 2, Group VI has the configuration…",
          options: ["2, 6", "2, 8, 6", "6, 2", "2, 2, 6"],
          correctIndex: 0,
          explanation: "Two shells (Period 2), six outer electrons (Group VI) → 2, 6 (oxygen).",
        },
        {
          prompt: "The main usefulness of the periodic table is that position lets you…",
          options: [
            "predict an element's properties",
            "measure its temperature",
            "find its price",
            "change its atomic number",
          ],
          correctIndex: 0,
          explanation: "Position (group and period) predicts chemical behaviour.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the modern periodic law and explain what a group and a period each tell you about an element.",
          answerKey:
            "Periodic law: the properties of elements are a periodic function of their atomic number (elements are arranged by increasing atomic number). A period (row) tells you the number of electron shells; a group (column) tells you the number of outer/valence electrons and hence similar chemical properties. Award marks for the law, the period meaning and the group meaning.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "An element has electron configuration 2, 8, 2. State its period and group and say whether it is a metal or non-metal.",
          answerKey:
            "Three shells → Period 3; two outer electrons → Group II; on the left of the table with few outer electrons → a metal (magnesium). Award marks for period, group and metal/non-metal.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Two elements in the same group are likely to have similar…",
          options: ["chemical properties", "atomic masses", "numbers of neutrons", "colours only"],
          correctIndex: 0,
          answerKey: "Same group = same outer electrons = similar chemical properties.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how the position of an element in the periodic table can be used to predict its properties, using an example.",
          answerKey:
            "A strong answer explains that the period gives the number of electron shells and the group gives the number of outer electrons, and since chemistry is governed by outer electrons, the group predicts how an element reacts (metals on the left lose electrons; non-metals on the right gain them). A worked example, e.g. chlorine (2,8,7) in Period 3 Group VII being a reactive non-metal that gains one electron, or sodium (2,8,1) in Group I being a reactive metal that loses one electron, earns full marks. Award for the period/group reasoning and a valid predictive example.",
          marks: 5,
        },
      ],
    },
    {
      slug: "groups-and-periodic-trends",
      title: "Groups of the Periodic Table and Periodic Trends",
      objective:
        "By the end of the topic, learners should be able to describe the characteristic properties of the alkali metals, the halogens and the noble gases, and outline how reactivity changes down these groups.",
      estimatedMinutes: 150,
      notes: `## Introduction

Some columns of the periodic table are so distinctive that chemists give them family names — the soft, fiercely reactive **alkali metals**, the colourful, poisonous **halogens**, and the aloof, unreactive **noble gases**. Studying these families shows the periodic table's greatest lesson: that properties repeat in patterns (**trends**) you can predict. This topic describes each family and how reactivity changes as you go **down** a group.

## Families of elements

Certain groups are so distinctive that they have special names. These "families" share properties because their members have the same number of outer electrons.

## Group I — the alkali metals

Elements: lithium, sodium, potassium, and others. Each has **one outer electron**.

- **Soft** metals that can be cut with a knife.
- **Very reactive** — they react vigorously with water, giving an alkaline solution and hydrogen gas.
- They react by **losing their single outer electron**.
- **Reactivity increases down the group**: potassium reacts more violently than sodium, which reacts more than lithium. This is because the outer electron is further from the nucleus and more easily lost lower down.

## Group VII — the halogens

Elements: fluorine, chlorine, bromine, iodine. Each has **seven outer electrons**.

- **Reactive non-metals** that react by **gaining one electron** to complete their outer shell.
- They form coloured, often poisonous substances; chlorine is used to disinfect water.
- **Reactivity decreases down the group**: fluorine is the most reactive, iodine the least, because the incoming electron is added further from the nucleus lower down.

## Group VIII (0) — the noble gases

Elements: helium, neon, argon. Each has a **full outer shell** (helium 2; the others 8).

- **Very unreactive (inert)** — they do not normally react at all.
- This is because a full outer shell is a **stable arrangement**; they have no need to gain or lose electrons.
- Their stability is the reason other elements react — atoms react in order to **achieve a full outer shell like a noble gas**.

## The link back to atomic structure

Everything in this topic follows from Period II's atomic structure:

- **Metals** (few outer electrons) **lose** them; **non-metals** (nearly full shells) **gain** them; **noble gases** (full shells) do neither.
- The goal of almost every reaction is a **stable, noble-gas-like full outer shell**. This idea prepares learners for chemical bonding in later periods.

## Common errors and misconceptions

- **Reactivity trends go opposite ways** — alkali metals get **more** reactive **down** the group; halogens get **less** reactive down the group. Don't apply one rule to both.
- **Thinking noble gases react easily** — they have full outer shells, so they are almost completely **unreactive**.
- **Storing or handling alkali metals like ordinary metals** — sodium and potassium react violently with water and are stored under oil.
- **Confusing Group I and Group VII** — Group I are metals with **one** outer electron (lose it); Group VII (halogens) are non-metals with **seven** (gain one).`,
      workedExample: `**Task.** (a) Why is potassium more reactive than lithium, even though both are Group I metals? (b) Explain why the noble gases are unreactive, and how this explains why sodium reacts.

**Part (a) — reactivity down Group I**
Both lithium and potassium have **one outer electron**, and both react by **losing** it. But potassium is **lower** in the group, so:
- its outer electron is in a shell **further from the nucleus**,
- and the pull of the nucleus on that electron is **weaker**.
Because the outer electron is **held less tightly**, it is **lost more easily**, so potassium reacts **more vigorously** than lithium. Reactivity therefore **increases down Group I**.

**Part (b) — noble gases and why sodium reacts**
The noble gases (helium, neon, argon) have a **full outer shell**, which is a very **stable** arrangement. Because their outer shell is already complete, they have **no tendency to gain or lose electrons**, so they are **unreactive (inert)**.

This explains why **sodium reacts**: sodium (2, 8, 1) has a single outer electron and is **not** stable. By **losing** that one electron, it achieves the full, stable outer shell of the noble gas neon (2, 8). The drive to reach a **noble-gas arrangement** is exactly why reactive elements like sodium react.`,
      teachingTip:
        "The unifying idea to hammer home is 'atoms react to reach a full, noble-gas outer shell'. Once learners hold that, the whole topic falls out: Group I loses one electron, Group VII gains one, and the noble gases (already full) do nothing. Teach the two reactivity trends together but note they run in opposite directions — metals get MORE reactive down the group, halogens get LESS — and make sure learners can explain both in terms of distance from the nucleus.",
      quiz: [
        {
          prompt: "The Group I elements are known as the…",
          options: ["alkali metals", "halogens", "noble gases", "metalloids"],
          correctIndex: 0,
          explanation: "Group I are the alkali metals.",
        },
        {
          prompt: "How many outer electrons does a Group I element have?",
          options: ["1", "7", "8", "2"],
          correctIndex: 0,
          explanation: "Alkali metals have a single outer electron.",
        },
        {
          prompt: "Alkali metals react by…",
          options: ["losing their outer electron", "gaining seven electrons", "sharing all electrons", "doing nothing"],
          correctIndex: 0,
          explanation: "They lose their one outer electron.",
        },
        {
          prompt: "Down Group I, reactivity…",
          options: ["increases", "decreases", "stays the same", "disappears"],
          correctIndex: 0,
          explanation: "Reactivity increases down the alkali metals.",
        },
        {
          prompt: "The Group VII elements are known as the…",
          options: ["halogens", "alkali metals", "noble gases", "transition metals"],
          correctIndex: 0,
          explanation: "Group VII are the halogens.",
        },
        {
          prompt: "How many outer electrons does a halogen have?",
          options: ["7", "1", "8", "0"],
          correctIndex: 0,
          explanation: "Halogens have seven outer electrons.",
        },
        {
          prompt: "Halogens react by…",
          options: ["gaining one electron", "losing seven electrons", "losing one electron", "never reacting"],
          correctIndex: 0,
          explanation: "They gain one electron to fill the outer shell.",
        },
        {
          prompt: "Down Group VII, reactivity…",
          options: ["decreases", "increases", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "Halogen reactivity decreases down the group.",
        },
        {
          prompt: "Which halogen is used to disinfect water?",
          options: ["chlorine", "iron", "sodium", "helium"],
          correctIndex: 0,
          explanation: "Chlorine is widely used to disinfect water.",
        },
        {
          prompt: "The Group VIII (0) elements are the…",
          options: ["noble gases", "alkali metals", "halogens", "metalloids"],
          correctIndex: 0,
          explanation: "Group VIII/0 are the noble gases.",
        },
        {
          prompt: "Noble gases are…",
          options: ["very unreactive (inert)", "very reactive", "always liquids", "metals"],
          correctIndex: 0,
          explanation: "Their full outer shells make them inert.",
        },
        {
          prompt: "Noble gases are unreactive because they have…",
          options: ["a full outer shell", "one outer electron", "no electrons", "seven outer electrons"],
          correctIndex: 0,
          explanation: "A full outer shell is stable, so they do not react.",
        },
        {
          prompt: "Why does sodium react?",
          options: [
            "to lose one electron and gain a full outer shell",
            "to gain seven electrons",
            "because it is a noble gas",
            "it does not react",
          ],
          correctIndex: 0,
          explanation: "Losing its one outer electron gives a stable neon-like shell.",
        },
        {
          prompt: "Alkali metals are soft enough to be…",
          options: ["cut with a knife", "used as building steel", "burned as coal", "made into wire only"],
          correctIndex: 0,
          explanation: "Group I metals are notably soft.",
        },
        {
          prompt: "When an alkali metal reacts with water it produces an alkaline solution and…",
          options: ["hydrogen gas", "oxygen gas", "chlorine", "carbon"],
          correctIndex: 0,
          explanation: "Alkali metal + water → alkali + hydrogen.",
        },
        {
          prompt: "Which is the most reactive halogen?",
          options: ["fluorine", "iodine", "bromine", "chlorine"],
          correctIndex: 0,
          explanation: "Reactivity is highest at the top: fluorine.",
        },
        {
          prompt: "Which is the most reactive alkali metal of lithium, sodium and potassium?",
          options: ["potassium", "lithium", "sodium", "they are equal"],
          correctIndex: 0,
          explanation: "Reactivity increases down the group, so potassium is most reactive.",
        },
        {
          prompt: "The goal of most chemical reactions is for atoms to achieve…",
          options: [
            "a full, noble-gas-like outer shell",
            "an empty outer shell always",
            "more neutrons",
            "a different atomic number",
          ],
          correctIndex: 0,
          explanation: "Atoms react to reach a stable full outer shell.",
        },
        {
          prompt: "Potassium is more reactive than lithium because its outer electron is…",
          options: [
            "further from the nucleus and lost more easily",
            "closer to the nucleus",
            "held more tightly",
            "shared with neon",
          ],
          correctIndex: 0,
          explanation: "Greater distance means the electron is lost more easily.",
        },
        {
          prompt: "Helium's outer shell is full with how many electrons?",
          options: ["2", "8", "1", "7"],
          correctIndex: 0,
          explanation: "Helium's first (and only) shell is full at 2 electrons.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Describe two characteristic properties of the Group I alkali metals.",
          answerKey:
            "Accept any two: they are soft (can be cut with a knife); very reactive; react vigorously with water to give an alkaline solution and hydrogen; react by losing their single outer electron; reactivity increases down the group. Award a mark per valid property.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why reactivity increases down Group I but decreases down Group VII.",
          answerKey:
            "In Group I, atoms react by losing the outer electron; lower down, that electron is further from the nucleus and held less tightly, so it is lost more easily — reactivity increases. In Group VII, atoms react by gaining an electron; lower down, the incoming electron is added further from the nucleus and is attracted less strongly, so it is harder to gain — reactivity decreases. Award marks for both trends explained in terms of distance from the nucleus.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The noble gases are unreactive because they have…",
          options: ["a full outer electron shell", "one outer electron", "seven outer electrons", "no protons"],
          correctIndex: 0,
          answerKey: "A full outer shell is a stable arrangement, so they do not react.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Using the idea of a stable outer shell, explain why sodium (Group I) and chlorine (Group VII) are both reactive, while argon (a noble gas) is not.",
          answerKey:
            "A strong answer explains that atoms are most stable with a full outer shell. Sodium (2,8,1) has one outer electron and reacts by losing it to reach the stable arrangement 2,8 (like neon). Chlorine (2,8,7) has seven outer electrons and reacts by gaining one to complete its shell (2,8,8, like argon). Argon already has a full outer shell, so it has no tendency to gain or lose electrons and is unreactive. Award marks for the stable-shell principle applied correctly to all three elements.",
          marks: 5,
        },
      ],
    },
  ],
};
