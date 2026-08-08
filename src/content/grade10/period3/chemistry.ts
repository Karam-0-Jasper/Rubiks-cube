import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester One, Period III: The Periodic Table / Periodic Chemistry. The
// CONTENTS list is expanded to one topic per item: 1. History & origin of the
// periodic law; 2. Structure of the periodic table; 3. Trends in periodic
// properties; 4. Main-group elements (physical properties and reactivities);
// 5. Period-three compounds; 6. Period-four metals (K, Ca); 7. Group Seven —
// the halogens; 8. Elements of the first transition series.
export const chemistryG10P3: PeriodContent = {
  grade: 10,
  number: 3,
  title: "The Periodic Table",
  summary:
    "Period III of the MoE Grade 10 Chemistry syllabus. Learners trace the history of the periodic law, learn the structure of the periodic table (groups, periods, metals, non-metals and metalloids), study the periodic trends in atomic radius, ionization energy, electron affinity, electronegativity and metallic character, and examine the properties and reactions of the main-group elements, period-three compounds, the active metals potassium and calcium, the halogens and the first transition series.",
  topics: [
    {
      // source: LibreTexts — 2.10 The History of the Periodic Table (https://chem.libretexts.org/Courses/University_of_Alberta_Augustana_Campus/AUCHE_110_-_General_Chemistry_I/02:_Atomic_Structure_and_Periodic_Trends/2.10:_The_History_of_the_Periodic_Table)
      slug: "history-of-the-periodic-law",
      title: "History and Origin of the Periodic Law",
      objective:
        "By the end of the topic, learners should be able to describe the development of the periodic table from Newlands and Mendeleev to Moseley, and state the modern periodic law. (MoE Grade 10 Period III, CONTENTS 1.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- As more elements were discovered, chemists searched for a way to **organise** them by their properties.
- **This topic:** the story from early attempts to the modern periodic law.

## Early attempts

- **Döbereiner's triads (1829).** Grouped elements in threes (e.g. Li, Na, K) where the middle element's mass was about the average of the other two.
- **Newlands' law of octaves (1864).** Arranged elements by increasing atomic mass and noticed properties repeated every eighth element, like notes on a musical scale.

## Mendeleev's periodic table (1869)

- **Dmitri Mendeleev** (and independently **Lothar Meyer**) arranged the known elements in order of **increasing atomic mass**, grouping those with similar properties in columns.
- He **left gaps** for undiscovered elements and **predicted their properties** (e.g. "eka-silicon", later found as germanium). The accurate predictions were his table's great triumph.
- He even reversed a few pairs where mass order broke the pattern of properties.

## Moseley and the modern periodic law

- **Henry Moseley (1913)** measured the X-rays emitted by elements and found the true ordering principle was the **atomic number** (number of protons), not the atomic mass.
- This fixed the few anomalies in Mendeleev's table.

## The modern periodic law

- **Modern periodic law** — when the elements are arranged in order of **increasing atomic number**, their chemical and physical properties **repeat periodically**.

## Common errors and misconceptions

- **Crediting the atomic-number ordering to Mendeleev** — Mendeleev ordered by mass; **Moseley** established ordering by atomic number.
- **Thinking Mendeleev knew about protons** — he did not; the gaps and reversals were based on properties, later explained by atomic number.
- **Confusing octaves with the modern table** — Newlands' octaves were an early pattern; the modern law is based on atomic number.`,
      workedExample: `**Task.** Explain why Mendeleev's periodic table was so successful, and how Moseley later improved it.

**Mendeleev's success**
1. He arranged elements by **increasing atomic mass** and put those with similar properties in the same **column (group)**.
2. He **left gaps** for elements not yet discovered rather than forcing known elements into the wrong place.
3. He **predicted the properties** of the missing elements (such as eka-silicon). When germanium was discovered, its properties matched his prediction closely — strong evidence that the arrangement reflected a real law.

**Moseley's improvement**
- A few pairs (e.g. tellurium and iodine) were out of order when arranged by mass.
- Moseley's X-ray work showed the elements should be ordered by **atomic number** (proton number), which removed the anomalies.

**Conclusion.** Mendeleev's table worked because it grouped elements by properties and successfully predicted missing elements; Moseley perfected it by showing that atomic number, not atomic mass, is the true basis of the periodic law.`,
      quiz: [
        {
          prompt: "Who arranged elements in groups of three with similar properties (triads)?",
          options: ["Döbereiner", "Newlands", "Mendeleev", "Moseley"],
          correctIndex: 0,
          explanation: "Döbereiner's triads were an early grouping.",
        },
        {
          prompt: "Newlands noticed properties repeated every … element.",
          options: ["eighth", "second", "third", "tenth"],
          correctIndex: 0,
          explanation: "His law of octaves repeated every eighth element.",
        },
        {
          prompt: "Mendeleev arranged the elements in order of increasing…",
          options: ["atomic mass", "atomic number", "density", "reactivity"],
          correctIndex: 0,
          explanation: "Mendeleev used atomic mass.",
        },
        {
          prompt: "A key strength of Mendeleev's table was that he…",
          options: ["left gaps and predicted new elements", "listed only known elements", "used atomic number", "ignored properties"],
          correctIndex: 0,
          explanation: "He predicted undiscovered elements' properties.",
        },
        {
          prompt: "Moseley showed the elements should be ordered by…",
          options: ["atomic number", "atomic mass", "colour", "melting point"],
          correctIndex: 0,
          explanation: "Atomic number is the true ordering principle.",
        },
        {
          prompt: "Moseley discovered the atomic number ordering by studying…",
          options: ["X-rays emitted by elements", "flame colours", "densities", "boiling points"],
          correctIndex: 0,
          explanation: "He analysed X-ray frequencies.",
        },
        {
          prompt: "The modern periodic law states properties repeat with increasing…",
          options: ["atomic number", "atomic mass", "neutron number", "density"],
          correctIndex: 0,
          explanation: "The modern law is based on atomic number.",
        },
        {
          prompt: "Mendeleev predicted the properties of an element he called…",
          options: ["eka-silicon (later germanium)", "oxygen", "sodium", "helium"],
          correctIndex: 0,
          explanation: "Eka-silicon was later identified as germanium.",
        },
        {
          prompt: "The scientist independently credited with a periodic table alongside Mendeleev is…",
          options: ["Lothar Meyer", "Newlands", "Moseley", "Dalton"],
          correctIndex: 0,
          explanation: "Meyer developed a similar table in 1869.",
        },
        {
          prompt: "In the periodic table, columns of elements with similar properties are called…",
          options: ["groups", "periods", "blocks only", "triads"],
          correctIndex: 0,
          explanation: "Vertical columns are groups.",
        },
        {
          prompt: "Ordering by mass placed a few pairs out of order; ordering by atomic number…",
          options: ["fixed these anomalies", "made more anomalies", "changed nothing", "removed elements"],
          correctIndex: 0,
          explanation: "Atomic number corrected the mass-order anomalies.",
        },
        {
          prompt: "Newlands' pattern was named after its resemblance to…",
          options: ["musical octaves", "colours", "triangles", "planets"],
          correctIndex: 0,
          explanation: "Properties repeated like notes in music — octaves.",
        },
        {
          prompt: "The word 'periodic' in periodic table means the properties…",
          options: ["repeat at regular intervals", "never change", "are random", "decrease steadily"],
          correctIndex: 0,
          explanation: "Properties recur periodically.",
        },
        {
          prompt: "Mendeleev sometimes reversed the order of a pair of elements to…",
          options: ["keep similar properties together", "save space", "follow atomic number", "match colours"],
          correctIndex: 0,
          explanation: "He prioritised property patterns over strict mass order.",
        },
        {
          prompt: "Atomic number equals the number of … in an atom.",
          options: ["protons", "neutrons", "outer electrons", "shells"],
          correctIndex: 0,
          explanation: "Atomic number = proton number.",
        },
        {
          prompt: "The biggest advantage of Mendeleev leaving gaps was that it…",
          options: ["allowed successful predictions of new elements", "made the table shorter", "hid unknown elements", "removed metals"],
          correctIndex: 0,
          explanation: "The gaps let him predict undiscovered elements.",
        },
        {
          prompt: "Which came earliest historically?",
          options: ["Döbereiner's triads", "Moseley's X-ray work", "Mendeleev's table", "the modern periodic law"],
          correctIndex: 0,
          explanation: "Triads (1829) predate the others.",
        },
        {
          prompt: "Today the table is arranged by increasing atomic number and grouped by similar…",
          options: ["properties (electron arrangements)", "colours", "densities", "melting points"],
          correctIndex: 0,
          explanation: "Groups share electron arrangements and properties.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The modern periodic table arranges elements in order of increasing:",
          options: ["atomic number", "atomic mass", "density", "neutron number"],
          correctIndex: 0,
          answerKey: "Moseley established ordering by atomic number.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which scientist left gaps in his table and predicted the properties of undiscovered elements?",
          options: ["Mendeleev", "Newlands", "Moseley", "Döbereiner"],
          correctIndex: 0,
          answerKey: "Mendeleev left gaps and made successful predictions.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the modern periodic law.",
          answerKey:
            "When the elements are arranged in order of increasing atomic number, their chemical and physical properties repeat (recur) periodically. Award marks for 'increasing atomic number' and 'periodic repetition of properties'.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two reasons why Mendeleev's periodic table was considered a success.",
          answerKey:
            "Any two of: it grouped elements with similar properties together; it left gaps for undiscovered elements; it predicted the properties of those missing elements (e.g. eka-silicon/germanium) which were later confirmed; it organised all known elements systematically. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how the periodic table developed from early attempts to the modern periodic law, naming the key contributors and their ideas.",
          answerKey:
            "A full answer traces: Döbereiner's triads (groups of three with related masses/properties); Newlands' law of octaves (properties repeating every eighth element by mass); Mendeleev (and Meyer) arranging elements by increasing atomic mass into groups of similar properties, leaving gaps and successfully predicting new elements; and Moseley, whose X-ray work showed the true ordering is by atomic number, giving the modern periodic law that properties repeat periodically with increasing atomic number. Award marks for the correct sequence, at least three named contributors with their ideas, and the statement of the modern law.",
          marks: 6,
        },
      ],
    },
    {
      // source: OpenStax Chemistry 2e — 2.5 The Periodic Table (https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table)
      slug: "structure-of-the-periodic-table",
      title: "Structure of the Periodic Table",
      objective:
        "By the end of the topic, learners should be able to identify groups and periods, locate metals, non-metals and metalloids, and name the main families of elements. (MoE Grade 10 Period III, CONTENTS 2.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The periodic table is organised so that an element's position reveals its properties.
- **This topic:** groups and periods, the metal/non-metal/metalloid division, and the named families.

## Groups and periods

- **Group** — a vertical **column** (numbered 1–18). Elements in a group have the **same number of outer (valence) electrons**, so similar chemistry.
- **Period** — a horizontal **row** (1–7). Across a period, each element has one more proton and one more electron than the last.

\`\`\`svg Groups (columns) and periods (rows)
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid showing a vertical group and a horizontal period">
  <rect x="20" y="20" width="40" height="80" fill="#fde68a" opacity="0.6"/>
  <rect x="20" y="20" width="220" height="40" fill="#bae6fd" opacity="0.4"/>
  <g fill="none" stroke="#b45309">
    <rect x="20" y="20" width="220" height="80"/>
    <line x1="60" y1="20" x2="60" y2="100"/><line x1="100" y1="20" x2="100" y2="100"/>
    <line x1="140" y1="20" x2="140" y2="100"/><line x1="180" y1="20" x2="180" y2="100"/><line x1="220" y1="20" x2="220" y2="100"/>
    <line x1="20" y1="60" x2="240" y2="60"/>
  </g>
  <text x="40" y="115" font-size="9" text-anchor="middle" fill="#92400e">group (column)</text>
  <text x="180" y="14" font-size="9" text-anchor="middle" fill="#075985">period (row)</text>
</svg>
\`\`\`

## Metals, non-metals and metalloids

- **Metals** occupy the **left and centre** (about three-quarters of the table).
- **Non-metals** cluster at the **top right**.
- **Metalloids (semi-metals)** lie along the **staircase line** between them (B, Si, Ge, As, Sb, Te), with in-between properties.

| Type | Position | Properties |
|---|---|---|
| **Metals** | left and centre | shiny, good conductors, malleable, ductile; lose electrons |
| **Non-metals** | top right | dull, brittle (if solid), poor conductors; gain electrons |
| **Metalloids** | staircase | intermediate; moderate conductivity |

## The named families

| Group | Family name | Outer electrons |
|---|---|---|
| 1 | alkali metals | 1 |
| 2 | alkaline earth metals | 2 |
| 3–12 | transition metals | variable |
| 17 | halogens | 7 |
| 18 | noble gases | 8 (2 for He) |

- **Main-group (representative) elements:** groups 1, 2 and 13–18.
- **Transition metals:** groups 3–12; **inner transition metals** (lanthanides and actinides) sit below the main table.

## Common errors and misconceptions

- **Swapping groups and periods** — groups are the vertical **columns**; periods are the horizontal **rows**.
- **Putting hydrogen with the metals** — hydrogen is a non-metal, usually placed above group 1.
- **Calling metalloids metals** — metalloids have intermediate properties and sit on the staircase.
- **Forgetting the link to valence electrons** — elements in the same group react similarly because they have the same number of outer electrons.`,
      workedExample: `**Task.** For chlorine (group 17, period 3): state its group and period, its number of outer electrons, whether it is a metal or non-metal, and its family name.

**Step 1 — Group and period**
- It is in **group 17** and **period 3**.

**Step 2 — Outer electrons**
- Group 17 elements have **7** outer (valence) electrons.

**Step 3 — Metal or non-metal**
- Chlorine sits at the **top right**, so it is a **non-metal**.

**Step 4 — Family**
- Group 17 elements are the **halogens**.

**Conclusion.** Chlorine is in group 17, period 3, has 7 outer electrons, is a non-metal, and belongs to the halogen family — which is why it reacts similarly to fluorine, bromine and iodine (all with 7 outer electrons).`,
      quiz: [
        {
          prompt: "A vertical column of the periodic table is a…",
          options: ["group", "period", "block only", "shell"],
          correctIndex: 0,
          explanation: "Columns are groups.",
        },
        {
          prompt: "A horizontal row of the periodic table is a…",
          options: ["period", "group", "family", "block"],
          correctIndex: 0,
          explanation: "Rows are periods.",
        },
        {
          prompt: "Elements in the same group have the same number of…",
          options: ["outer (valence) electrons", "neutrons", "shells", "protons"],
          correctIndex: 0,
          explanation: "Same valence electrons give similar chemistry.",
        },
        {
          prompt: "Metals are found mainly on the … of the table.",
          options: ["left and centre", "top right", "bottom only", "staircase"],
          correctIndex: 0,
          explanation: "Metals occupy the left and centre.",
        },
        {
          prompt: "Non-metals cluster at the…",
          options: ["top right", "bottom left", "centre", "far left"],
          correctIndex: 0,
          explanation: "Non-metals are top right.",
        },
        {
          prompt: "Elements with properties between metals and non-metals are called…",
          options: ["metalloids", "halogens", "noble gases", "alkali metals"],
          correctIndex: 0,
          explanation: "Metalloids sit on the staircase.",
        },
        {
          prompt: "Group 1 elements are called the…",
          options: ["alkali metals", "halogens", "noble gases", "transition metals"],
          correctIndex: 0,
          explanation: "Group 1 = alkali metals.",
        },
        {
          prompt: "Group 2 elements are called the…",
          options: ["alkaline earth metals", "alkali metals", "halogens", "noble gases"],
          correctIndex: 0,
          explanation: "Group 2 = alkaline earth metals.",
        },
        {
          prompt: "Group 17 elements are called the…",
          options: ["halogens", "noble gases", "alkali metals", "metalloids"],
          correctIndex: 0,
          explanation: "Group 17 = halogens.",
        },
        {
          prompt: "Group 18 elements are called the…",
          options: ["noble gases", "halogens", "alkali metals", "transition metals"],
          correctIndex: 0,
          explanation: "Group 18 = noble gases.",
        },
        {
          prompt: "The transition metals are found in groups…",
          options: ["3–12", "1–2", "13–18", "17–18"],
          correctIndex: 0,
          explanation: "Transition metals occupy groups 3–12.",
        },
        {
          prompt: "A typical metal is described as…",
          options: ["shiny and a good conductor", "dull and brittle", "a poor conductor", "gaseous"],
          correctIndex: 0,
          explanation: "Metals are shiny, malleable, good conductors.",
        },
        {
          prompt: "A typical solid non-metal is…",
          options: ["dull and brittle", "shiny and ductile", "a good conductor", "malleable"],
          correctIndex: 0,
          explanation: "Solid non-metals are dull, brittle, poor conductors.",
        },
        {
          prompt: "The main-group (representative) elements are in groups…",
          options: ["1, 2 and 13–18", "3–12", "17 only", "1 only"],
          correctIndex: 0,
          explanation: "Main-group = groups 1, 2, 13–18.",
        },
        {
          prompt: "Silicon (Si) is best classified as a…",
          options: ["metalloid", "metal", "non-metal", "noble gas"],
          correctIndex: 0,
          explanation: "Silicon is a metalloid on the staircase.",
        },
        {
          prompt: "How many outer electrons does a group 2 element have?",
          options: ["2", "1", "7", "8"],
          correctIndex: 0,
          explanation: "Group 2 elements have 2 valence electrons.",
        },
        {
          prompt: "Metals tend to … electrons in reactions.",
          options: ["lose", "gain", "share only", "keep all"],
          correctIndex: 0,
          explanation: "Metals lose electrons to form cations.",
        },
        {
          prompt: "The lanthanides and actinides are the…",
          options: ["inner transition metals", "halogens", "noble gases", "alkali metals"],
          correctIndex: 0,
          explanation: "They are the inner transition metals (f-block).",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Elements in the same group of the periodic table have the same number of:",
          options: ["valence (outer) electrons", "neutrons", "shells", "protons"],
          correctIndex: 0,
          answerKey: "Same valence electrons — the reason for similar chemistry.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which family occupies group 18?",
          options: ["noble gases", "halogens", "alkali metals", "alkaline earth metals"],
          correctIndex: 0,
          answerKey: "Group 18 is the noble gases.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three properties that distinguish metals from non-metals.",
          answerKey:
            "Metals: shiny/lustrous, good conductors of heat and electricity, malleable and ductile, lose electrons. Non-metals: dull, brittle if solid, poor conductors, gain electrons. Award marks for three valid contrasting properties.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the families found in groups 1, 2, 17 and 18.",
          answerKey:
            "Group 1 – alkali metals; group 2 – alkaline earth metals; group 17 – halogens; group 18 – noble gases. One mark each.",
          marks: 4,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how the periodic table is structured, explaining groups, periods, the metal/non-metal/metalloid division, and how position relates to the number of valence electrons.",
          answerKey:
            "A strong answer explains that the table is arranged in vertical groups (columns, 1–18) and horizontal periods (rows, 1–7). Elements in a group have the same number of valence electrons and so similar properties; across a period the proton and electron number increases by one at each step. Metals occupy the left and centre (shiny, conductive, malleable, lose electrons), non-metals the top right (dull, brittle, poor conductors, gain electrons), and metalloids lie on the staircase between them with intermediate properties. The named families — alkali metals (1), alkaline earth metals (2), transition metals (3–12), halogens (17) and noble gases (18) — reflect shared valence-electron counts. Award marks for groups/periods, the metal division, and the valence-electron link.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 7.5 Atomic Properties and Periodic Trends (https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402:_General_Chemistry_1_(Kattoum)/Text/7:_The_Structure_of_Atoms_and_Periodic_Trends/7.5:_Atomic_Properties_and_Periodic_Trends)
      slug: "trends-in-periodic-properties",
      title: "Trends in Periodic Properties",
      objective:
        "By the end of the topic, learners should be able to describe and explain the trends in atomic radius, ionization energy, electron affinity, electronegativity and metallic character across a period and down a group. (MoE Grade 10 Period III, CONTENTS 3.)",
      estimatedMinutes: 160,
      notes: `## Introduction

- Because properties repeat with atomic number, they show clear **trends** across periods and down groups.
- **This topic:** atomic radius, ionization energy, electron affinity, electronegativity, metallic character and lattice energy.

## The factors behind the trends

Three factors control the trends:
- **Nuclear charge** — more protons pull electrons in more strongly.
- **Number of shells** — more shells push the outer electrons further out.
- **Shielding** — inner electrons reduce the pull of the nucleus on outer electrons.

## Atomic radius

- **Across a period (→):** radius **decreases** — more protons pull the same shell in tighter.
- **Down a group (↓):** radius **increases** — extra shells are added.

## Ionization energy

- **Ionization energy** — the energy needed to remove an electron from a gaseous atom.
- **Across a period (→):** **increases** — electrons are held more tightly.
- **Down a group (↓):** **decreases** — outer electrons are further out and shielded.

## Electron affinity

- **Electron affinity** — the energy change when a gaseous atom gains an electron.
- **Across a period (→):** generally **more negative / greater** — atoms attract an added electron more strongly.
- **Down a group (↓):** generally **decreases**.

## Electronegativity

- **Electronegativity** — the tendency of an atom to attract the shared electrons in a bond.
- **Across a period (→):** **increases**. **Down a group (↓):** **decreases**.
- **Fluorine** is the most electronegative element.

## Metallic (and non-metallic) character

- **Metallic character** — the tendency to **lose** electrons.
- **Across a period (→):** metallic character **decreases**, non-metallic character **increases**.
- **Down a group (↓):** metallic character **increases**.

## Summary table

| Property | Across a period (→) | Down a group (↓) |
|---|---|---|
| Atomic radius | decreases | increases |
| Ionization energy | increases | decreases |
| Electron affinity | increases (more negative) | decreases |
| Electronegativity | increases | decreases |
| Metallic character | decreases | increases |

- **Lattice energy** — energy released when gaseous ions form an ionic solid; it is larger for **smaller, more highly charged ions**.

## Common errors and misconceptions

- **Thinking radius grows across a period** — it **shrinks** across a period as nuclear charge rises.
- **Confusing ionization energy and electron affinity** — ionization is *removing* an electron; electron affinity is *gaining* one.
- **Assuming the biggest atom is the most electronegative** — small atoms (like fluorine) are the most electronegative.
- **Ignoring shielding** — down a group, added shells and shielding weaken the nucleus's hold, lowering ionization energy.`,
      workedExample: `**Task.** Compare sodium (Na, group 1) and chlorine (Cl, group 17), both in period 3: which has the larger atomic radius, the higher ionization energy, and the greater electronegativity? Explain.

**Atomic radius**
- Across period 3, radius decreases from Na to Cl because chlorine has more protons pulling the same third shell in tighter.
- → **Sodium has the larger atomic radius.**

**Ionization energy**
- Across the period, ionization energy increases; chlorine holds its electrons more tightly.
- → **Chlorine has the higher ionization energy.**

**Electronegativity**
- Electronegativity increases across the period.
- → **Chlorine is more electronegative** (Cl ≈ 3.0 vs Na ≈ 0.9).

**Conclusion.** Sodium is the larger, more metallic atom that easily loses an electron; chlorine is smaller, holds its electrons tightly, and strongly attracts electrons — which is why sodium forms Na⁺ and chlorine forms Cl⁻ in NaCl.`,
      quiz: [
        {
          prompt: "Across a period, atomic radius generally…",
          options: ["decreases", "increases", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "More protons pull the shell in tighter.",
        },
        {
          prompt: "Down a group, atomic radius generally…",
          options: ["increases", "decreases", "stays the same", "halves"],
          correctIndex: 0,
          explanation: "Extra shells make atoms larger.",
        },
        {
          prompt: "Ionization energy is the energy needed to…",
          options: ["remove an electron from a gaseous atom", "add an electron", "break a bond", "melt a solid"],
          correctIndex: 0,
          explanation: "It is the energy to remove an electron.",
        },
        {
          prompt: "Across a period, ionization energy generally…",
          options: ["increases", "decreases", "stays the same", "is zero"],
          correctIndex: 0,
          explanation: "Electrons are held more tightly across a period.",
        },
        {
          prompt: "Down a group, ionization energy generally…",
          options: ["decreases", "increases", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "Outer electrons are further out and shielded.",
        },
        {
          prompt: "Electronegativity is the tendency of an atom to…",
          options: ["attract shared bonding electrons", "lose all electrons", "gain neutrons", "emit light"],
          correctIndex: 0,
          explanation: "It measures pull on shared electrons in a bond.",
        },
        {
          prompt: "The most electronegative element is…",
          options: ["fluorine", "sodium", "carbon", "helium"],
          correctIndex: 0,
          explanation: "Fluorine is the most electronegative.",
        },
        {
          prompt: "Across a period, electronegativity generally…",
          options: ["increases", "decreases", "stays the same", "is negative"],
          correctIndex: 0,
          explanation: "Electronegativity rises across a period.",
        },
        {
          prompt: "Metallic character is the tendency to…",
          options: ["lose electrons", "gain electrons", "share electrons only", "gain protons"],
          correctIndex: 0,
          explanation: "Metals lose electrons.",
        },
        {
          prompt: "Across a period, metallic character…",
          options: ["decreases", "increases", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "Atoms become less metallic across a period.",
        },
        {
          prompt: "Down a group, metallic character…",
          options: ["increases", "decreases", "stays the same", "is zero"],
          correctIndex: 0,
          explanation: "Metallic character increases down a group.",
        },
        {
          prompt: "The three factors controlling periodic trends are nuclear charge, number of shells and…",
          options: ["shielding", "colour", "density", "mass number"],
          correctIndex: 0,
          explanation: "Shielding by inner electrons is the third factor.",
        },
        {
          prompt: "Which element has a larger atomic radius: Li or F?",
          options: ["Li", "F", "they are equal", "cannot tell"],
          correctIndex: 0,
          explanation: "Lithium is on the left, so it is larger.",
        },
        {
          prompt: "Which has the higher ionization energy: Na or Cl?",
          options: ["Cl", "Na", "equal", "neither"],
          correctIndex: 0,
          explanation: "Chlorine holds electrons more tightly.",
        },
        {
          prompt: "Electron affinity describes the energy change when an atom…",
          options: ["gains an electron", "loses an electron", "gains a proton", "forms a metal"],
          correctIndex: 0,
          explanation: "It concerns gaining an electron.",
        },
        {
          prompt: "Lattice energy is largest for ions that are…",
          options: ["small and highly charged", "large and low charged", "neutral", "gaseous only"],
          correctIndex: 0,
          explanation: "Small, high-charge ions give strong lattices.",
        },
        {
          prompt: "Down a group, electronegativity…",
          options: ["decreases", "increases", "stays the same", "is always 4.0"],
          correctIndex: 0,
          explanation: "Electronegativity falls down a group.",
        },
        {
          prompt: "Why does ionization energy fall down a group?",
          options: ["outer electrons are further out and more shielded", "there are fewer protons", "atoms get smaller", "there is no nucleus"],
          correctIndex: 0,
          explanation: "Distance and shielding weaken the nuclear hold.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Moving from left to right across a period, which trend is correct?",
          options: ["atomic radius decreases, electronegativity increases", "atomic radius increases, electronegativity decreases", "both increase", "both decrease"],
          correctIndex: 0,
          answerKey: "Radius shrinks and electronegativity rises across a period.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Ionization energy is defined as the energy required to:",
          options: ["remove an electron from a gaseous atom", "add an electron to an atom", "break a covalent bond", "vaporise a metal"],
          correctIndex: 0,
          answerKey: "It is the energy to remove an electron from a gaseous atom.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why atomic radius decreases across a period but increases down a group.",
          answerKey:
            "Across a period the number of protons (nuclear charge) increases while electrons enter the same shell, so the stronger pull draws the shell inward and the radius decreases. Down a group extra electron shells are added, so the outer electrons are further from the nucleus and the radius increases (shielding also reduces the effective pull). Award marks for the nuclear-charge argument across and the extra-shells argument down.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State how ionization energy, electronegativity and metallic character each change across a period.",
          answerKey:
            "Across a period: ionization energy increases; electronegativity increases; metallic character decreases (non-metallic character increases). One mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss the main periodic trends (atomic radius, ionization energy, electronegativity and metallic character), explaining the underlying reasons in terms of nuclear charge, shells and shielding.",
          answerKey:
            "A strong answer explains that the trends arise from three factors: increasing nuclear charge across a period pulls electrons in (radius down, ionization energy up, electronegativity up, metallic character down), while down a group added shells and shielding push outer electrons away and weaken the nuclear hold (radius up, ionization energy down, electronegativity down, metallic character up). It should correctly state each trend both across and down and link them to the factors, e.g. fluorine (small, high nuclear charge) is the most electronegative, and caesium (large, well-shielded) is very metallic. Award marks for at least three trends stated correctly in both directions with sound reasoning.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 6.22 Periodic Trends: Metallic and Nonmetallic Character (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/06:_The_Periodic_Table/6.22:_Periodic_Trends_-_Metallic_and_Nonmetallic_Character)
      slug: "main-group-elements",
      title: "Main-Group Elements: Physical Properties and Reactivities",
      objective:
        "By the end of the topic, learners should be able to describe how the physical properties and chemical reactivity of the second-period main-group elements (Li to F) change from metal to non-metal across the period. (MoE Grade 10 Period III, CONTENTS 4.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- Reading across a period, the **main-group elements** change steadily from reactive metals to reactive non-metals.
- **This topic:** the physical properties and reactivities of the second-period elements (lithium to fluorine), with helium as the noble gas.

## Across period 2: metal to non-metal

| Element | Type | Outer e⁻ | Note |
|---|---|---|---|
| Lithium (Li) | metal | 1 | soft, very reactive; loses 1 e⁻ |
| Beryllium (Be) | metal | 2 | harder, less reactive metal |
| Boron (B) | metalloid | 3 | intermediate properties |
| Carbon (C) | non-metal | 4 | forms giant covalent solids |
| Nitrogen (N) | non-metal | 5 | diatomic gas N₂, unreactive |
| Oxygen (O) | non-metal | 6 | diatomic gas O₂, very reactive |
| Fluorine (F) | non-metal | 7 | most reactive non-metal; gains 1 e⁻ |

- **Left side (metals):** shiny, conduct electricity, **lose** electrons to form positive ions.
- **Right side (non-metals):** dull/brittle or gaseous, poor conductors, **gain** electrons to form negative ions.

## Reactivity trends

- **Metals become less reactive across the period** (Li very reactive → Be less so).
- **Non-metals become more reactive across the period** toward fluorine.
- **Fluorine** is the most reactive non-metal — it reacts violently with metals, organic matter, and even glass.
- The **noble gas** (helium/neon) has a full outer shell and is essentially **unreactive**.

## Metallic → non-metallic character

- Across period 2 the elements shift from **metallic** (lose electrons) to **non-metallic** (gain electrons).
- This mirrors the rise in electronegativity and ionization energy across the period.

## Common errors and misconceptions

- **Treating all main-group elements as similar** — across a period they change from reactive metals to reactive non-metals.
- **Thinking reactivity always increases across** — metals become *less* reactive across, non-metals *more* reactive.
- **Forgetting the noble gases** — a full outer shell makes them unreactive, the end-point of each period.
- **Calling boron a metal** — boron is a metalloid with intermediate properties.`,
      workedExample: `**Task.** Explain how the character of the elements changes from lithium to fluorine across period 2, and predict the type of ion each end element forms.

**Change across the period**
- **Lithium (left):** a soft, shiny **metal** with 1 outer electron; it readily **loses** that electron.
- Moving right, beryllium is a less reactive metal, boron a metalloid, then carbon, nitrogen, oxygen and fluorine are **non-metals**.
- So the elements change from **metallic to non-metallic** across the period, with electronegativity and ionization energy rising.

**Ions formed**
- **Lithium** loses 1 electron → **Li⁺** (a cation).
- **Fluorine** (7 outer electrons) gains 1 electron to complete its octet → **F⁻** (an anion).

**Conclusion.** Across period 2 the elements move from reactive metals that lose electrons (Li → Li⁺) to reactive non-metals that gain electrons (F → F⁻), with metalloid boron marking the change-over; the noble gas at the end is unreactive.`,
      quiz: [
        {
          prompt: "Across period 2, the elements change from…",
          options: ["metals to non-metals", "non-metals to metals", "gases to metals only", "no change"],
          correctIndex: 0,
          explanation: "Li (metal) to F (non-metal).",
        },
        {
          prompt: "Lithium is a … that loses one electron.",
          options: ["reactive metal", "non-metal", "noble gas", "metalloid"],
          correctIndex: 0,
          explanation: "Lithium is a group 1 reactive metal.",
        },
        {
          prompt: "Boron is best described as a…",
          options: ["metalloid", "metal", "non-metal", "noble gas"],
          correctIndex: 0,
          explanation: "Boron has intermediate (metalloid) properties.",
        },
        {
          prompt: "The most reactive non-metal in period 2 is…",
          options: ["fluorine", "carbon", "nitrogen", "lithium"],
          correctIndex: 0,
          explanation: "Fluorine is the most reactive non-metal.",
        },
        {
          prompt: "Fluorine reacts by … one electron.",
          options: ["gaining", "losing", "sharing three of", "emitting"],
          correctIndex: 0,
          explanation: "It gains one electron to complete its octet.",
        },
        {
          prompt: "Metals across period 2 become … reactive from left to right.",
          options: ["less", "more", "equally", "infinitely"],
          correctIndex: 0,
          explanation: "Metallic reactivity decreases across.",
        },
        {
          prompt: "Nitrogen exists as the molecule…",
          options: ["N₂", "N", "N₃", "N₄"],
          correctIndex: 0,
          explanation: "Nitrogen is a diatomic gas, N₂.",
        },
        {
          prompt: "Carbon forms giant … solids such as diamond and graphite.",
          options: ["covalent", "ionic", "metallic", "molecular gas"],
          correctIndex: 0,
          explanation: "Diamond and graphite are giant covalent.",
        },
        {
          prompt: "A group 1 metal such as lithium forms an ion with charge…",
          options: ["+1", "−1", "+2", "−2"],
          correctIndex: 0,
          explanation: "It loses one electron to form Li⁺.",
        },
        {
          prompt: "The noble gas at the end of a period is…",
          options: ["unreactive (full outer shell)", "the most reactive", "a metal", "a metalloid"],
          correctIndex: 0,
          explanation: "A full outer shell makes noble gases unreactive.",
        },
        {
          prompt: "As you cross period 2, electronegativity…",
          options: ["increases", "decreases", "stays the same", "is zero"],
          correctIndex: 0,
          explanation: "Electronegativity rises toward fluorine.",
        },
        {
          prompt: "Non-metals gain electrons to form … ions.",
          options: ["negative", "positive", "neutral", "metallic"],
          correctIndex: 0,
          explanation: "Gaining electrons gives anions.",
        },
        {
          prompt: "Beryllium is a metal that is … than lithium.",
          options: ["harder and less reactive", "softer and more reactive", "a gas", "a non-metal"],
          correctIndex: 0,
          explanation: "Group 2 metals are harder, less reactive than group 1.",
        },
        {
          prompt: "Fluorine's reactivity is so high it can even attack…",
          options: ["glass", "gold only", "nothing", "water only"],
          correctIndex: 0,
          explanation: "Fluorine reacts with glass and organic matter.",
        },
        {
          prompt: "The element that marks the change-over from metal to non-metal in period 2 is roughly…",
          options: ["boron (a metalloid)", "lithium", "fluorine", "neon"],
          correctIndex: 0,
          explanation: "Boron sits between metals and non-metals.",
        },
        {
          prompt: "Oxygen is a very reactive … that exists as O₂.",
          options: ["non-metal", "metal", "metalloid", "noble gas"],
          correctIndex: 0,
          explanation: "Oxygen is a reactive diatomic non-metal.",
        },
        {
          prompt: "Metallic character across a period…",
          options: ["decreases", "increases", "stays the same", "is unrelated"],
          correctIndex: 0,
          explanation: "Elements become less metallic across a period.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which element in period 2 is the most reactive non-metal?",
          options: ["fluorine", "carbon", "beryllium", "boron"],
          correctIndex: 0,
          answerKey: "Fluorine is the most reactive non-metal.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Boron is classified as a:",
          options: ["metalloid", "metal", "non-metal", "noble gas"],
          correctIndex: 0,
          answerKey: "Boron is a metalloid with intermediate properties.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the type of ion (charge) formed by lithium and by fluorine, and explain why.",
          answerKey:
            "Lithium loses its 1 outer electron to form Li⁺ (a +1 cation) because that gives a full inner shell. Fluorine gains 1 electron to form F⁻ (a −1 anion) because that completes its octet. Award marks for both ions and a correct reason (achieving a full/stable shell).",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Describe how metallic character changes across period 2 and give one physical property of a metal and one of a non-metal.",
          answerKey:
            "Metallic character decreases across period 2 (from metallic lithium to non-metallic fluorine). A metal property: shiny/good conductor/malleable. A non-metal property: dull/brittle/poor conductor (or gaseous). Award marks for the trend and one valid property of each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how the physical properties and chemical reactivity of the elements change across period 2 from lithium to fluorine, referring to at least four elements.",
          answerKey:
            "A strong answer describes the change from reactive metals on the left (lithium — soft, shiny, loses 1 electron easily; beryllium — a harder, less reactive metal) through the metalloid boron, to non-metals on the right (carbon forming giant covalent solids; nitrogen and oxygen as diatomic gases; fluorine the most reactive non-metal, gaining 1 electron). It should note that metals become less reactive across while non-metals become more reactive toward fluorine, that electronegativity and ionization energy rise across the period, and that metals lose electrons to form cations while non-metals gain electrons to form anions, ending in the unreactive noble gas. Award marks for at least four elements with correct properties and the overall metal-to-non-metal reactivity trend.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — Period 3 Elements: Acid-base Behaviour of the Oxides & Chlorides of Period 3 Elements (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Elements_Organized_by_Period/Period_3_Elements) and The Thermal Stability of the Nitrates and Carbonates
      slug: "period-three-compounds",
      title: "Period-Three Compounds",
      objective:
        "By the end of the topic, learners should be able to compare the physical and chemical properties of the oxides, hydroxides and chlorides across period 3, and describe the thermal stability trend of Group 1 and Group 2 carbonates and nitrates. (MoE Grade 10 Period III, CONTENTS 5.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- The compounds of period-three elements change in a regular way across the period, from ionic to covalent.
- **This topic:** the oxides, hydroxides and chlorides across period 3, and the thermal stability of carbonates and nitrates.

## Oxides of period 3

- **Structure changes across the period:** ionic (giant) → giant covalent → molecular covalent.
- **Na₂O, MgO, Al₂O₃** are giant ionic/covalent solids with high melting points; **SiO₂** is giant covalent; **P₄O₁₀, SO₃, Cl₂O₇** are molecular.
- **Acid–base behaviour:** oxides change from **basic** on the left to **acidic** on the right.

| Oxide | Na₂O | MgO | Al₂O₃ | SiO₂ | SO₃ | Cl₂O₇ |
|---|---|---|---|---|---|---|
| Character | basic | basic | amphoteric | weakly acidic | acidic | strongly acidic |

- **Amphoteric** — reacts with both acids and bases (aluminium oxide).

## Chlorides of period 3

- **NaCl and MgCl₂** are **ionic** giant lattices, soluble in water, giving near-neutral (MgCl₂ slightly acidic) solutions.
- Chlorides further right (e.g. **SiCl₄**, PCl₅) are **covalent/molecular** and react with water to give **acidic** solutions (forming HCl).

## Hydroxides

- **NaOH and Mg(OH)₂** are basic; the metals on the left form basic hydroxides.
- Aluminium hydroxide is **amphoteric**.

## Thermal stability of carbonates and nitrates

- **Group 1 and Group 2 carbonates and nitrates decompose on heating,** and their **thermal stability increases down the group**.
- **Reason (polarisation):** a **small, highly charged cation** polarises (distorts) the carbonate or nitrate ion more, weakening it and making it decompose more easily. Larger cations lower down polarise less, so their salts are more stable and need higher temperatures.
- **Group 1 vs Group 2:** Group 1 ions (+1, larger) are **less polarising**, so Group 1 carbonates/nitrates are **more stable** than the corresponding Group 2 ones.

Example: MgCO₃ decomposes more easily than CaCO₃, which decomposes more easily than BaCO₃.

## Common errors and misconceptions

- **Thinking all period-3 oxides are basic** — they change from basic (Na₂O) through amphoteric (Al₂O₃) to acidic (SO₃, Cl₂O₇).
- **Assuming stability decreases down a group** — thermal stability of carbonates and nitrates **increases** down the group.
- **Ignoring ion size** — the polarising power of the cation (small, high charge = more polarising) controls the stability trend.
- **Treating all chlorides as ionic** — those on the left are ionic; those on the right are covalent and hydrolyse to acidic solutions.`,
      workedExample: `**Task.** (a) Describe how the acid–base character of the period-3 oxides changes from Na₂O to Cl₂O₇. (b) State and explain the thermal stability trend of the Group 2 carbonates.

**Part (a) — oxides across period 3**
- On the left, **Na₂O and MgO** are **basic** (metal oxides).
- **Al₂O₃** is **amphoteric** — it reacts with both acids and bases.
- On the right, **SiO₂** is weakly acidic and **SO₃ and Cl₂O₇** are **acidic** (non-metal oxides).
- So the oxides change from **basic → amphoteric → acidic** across the period, mirroring the metal-to-non-metal change.

**Part (b) — thermal stability of Group 2 carbonates**
- **Trend:** thermal stability **increases down the group** (MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃).
- **Explanation:** the small Mg²⁺ ion strongly **polarises** the carbonate ion, weakening it so MgCO₃ decomposes at a lower temperature; larger ions lower down (Ba²⁺) polarise less, so their carbonates are more stable and need higher temperatures to decompose.

**Conclusion.** Period-3 oxides shift from basic to acidic across the period, and Group 2 carbonates become more thermally stable down the group because the larger cations are less polarising.`,
      quiz: [
        {
          prompt: "Across period 3, the oxides change in acid–base character from…",
          options: ["basic to acidic", "acidic to basic", "neutral to basic", "acidic to neutral"],
          correctIndex: 0,
          explanation: "Metal oxides (basic) → non-metal oxides (acidic).",
        },
        {
          prompt: "Sodium oxide (Na₂O) is…",
          options: ["basic", "acidic", "amphoteric", "neutral"],
          correctIndex: 0,
          explanation: "It is a basic metal oxide.",
        },
        {
          prompt: "Aluminium oxide (Al₂O₃) is…",
          options: ["amphoteric", "strongly basic", "strongly acidic", "neutral"],
          correctIndex: 0,
          explanation: "It reacts with both acids and bases.",
        },
        {
          prompt: "Sulfur trioxide (SO₃) is a … oxide.",
          options: ["acidic", "basic", "amphoteric", "neutral"],
          correctIndex: 0,
          explanation: "Non-metal oxides on the right are acidic.",
        },
        {
          prompt: "An oxide that reacts with both acids and bases is described as…",
          options: ["amphoteric", "acidic", "basic", "neutral"],
          correctIndex: 0,
          explanation: "Amphoteric = reacts with acids and bases.",
        },
        {
          prompt: "Sodium chloride (NaCl) is…",
          options: ["ionic and soluble", "covalent and insoluble", "a gas", "amphoteric"],
          correctIndex: 0,
          explanation: "NaCl is a soluble ionic lattice.",
        },
        {
          prompt: "Covalent chlorides on the right of period 3 react with water to give…",
          options: ["acidic solutions", "basic solutions", "neutral solutions only", "no reaction"],
          correctIndex: 0,
          explanation: "They hydrolyse to form HCl, giving acidic solutions.",
        },
        {
          prompt: "The structures of period-3 oxides change across the period from…",
          options: ["ionic/giant to molecular covalent", "molecular to ionic", "metallic to ionic", "gas to solid only"],
          correctIndex: 0,
          explanation: "Ionic/giant → giant covalent → molecular.",
        },
        {
          prompt: "Group 1 and Group 2 carbonates decompose more easily…",
          options: ["higher up the group (smaller cation)", "lower down the group", "never", "only in acid"],
          correctIndex: 0,
          explanation: "Smaller cations polarise more, so decomposition is easier.",
        },
        {
          prompt: "Thermal stability of carbonates … down a group.",
          options: ["increases", "decreases", "stays the same", "becomes zero"],
          correctIndex: 0,
          explanation: "Larger cations polarise less, so stability rises.",
        },
        {
          prompt: "The trend is explained by the cation's … power.",
          options: ["polarising", "conducting", "magnetic", "reducing"],
          correctIndex: 0,
          explanation: "Small, high-charge cations polarise the anion.",
        },
        {
          prompt: "Which decomposes more easily on heating?",
          options: ["MgCO₃", "BaCO₃", "they are equal", "neither decomposes"],
          correctIndex: 0,
          explanation: "The smaller Mg²⁺ polarises more, so MgCO₃ is less stable.",
        },
        {
          prompt: "Group 1 carbonates are generally … than Group 2 carbonates.",
          options: ["more thermally stable", "less thermally stable", "identical", "always acidic"],
          correctIndex: 0,
          explanation: "Group 1 ions (+1) are less polarising, so more stable salts.",
        },
        {
          prompt: "Metal hydroxides such as NaOH are…",
          options: ["basic", "acidic", "neutral", "amphoteric"],
          correctIndex: 0,
          explanation: "NaOH is a strong base.",
        },
        {
          prompt: "Giant ionic/covalent oxides have … melting points.",
          options: ["high", "very low", "no", "negative"],
          correctIndex: 0,
          explanation: "Strong 3-D bonding gives high melting points.",
        },
        {
          prompt: "Silicon dioxide (SiO₂) has which structure?",
          options: ["giant covalent", "molecular gas", "ionic lattice", "metallic"],
          correctIndex: 0,
          explanation: "SiO₂ is a giant covalent solid.",
        },
        {
          prompt: "When a carbonate decomposes it usually forms a metal oxide and…",
          options: ["carbon dioxide", "hydrogen", "water only", "oxygen"],
          correctIndex: 0,
          explanation: "e.g. CaCO₃ → CaO + CO₂.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Across period 3, the oxides change from:",
          options: ["basic to acidic", "acidic to basic", "neutral to acidic", "amphoteric to basic"],
          correctIndex: 0,
          answerKey: "Metal oxides (basic) become non-metal oxides (acidic) across the period.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which carbonate is the MOST thermally stable?",
          options: ["BaCO₃", "MgCO₃", "CaCO₃", "SrCO₃"],
          correctIndex: 0,
          answerKey: "Stability increases down the group, so BaCO₃ is most stable.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Classify the oxides Na₂O, Al₂O₃ and SO₃ as basic, amphoteric or acidic.",
          answerKey: "Na₂O – basic; Al₂O₃ – amphoteric; SO₃ – acidic. One mark each.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State and explain the thermal-stability trend of Group 2 carbonates down the group.",
          answerKey:
            "Thermal stability increases down the group (MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃). This is because the cation gets larger down the group and so has less polarising power; a smaller cation (Mg²⁺) polarises/distorts the carbonate ion more, weakening it so it decomposes more easily at a lower temperature. Award marks for the correct trend and the polarisation explanation.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the properties of the oxides and chlorides across period 3, and explain the thermal-stability trend of the Group 1 and Group 2 carbonates.",
          answerKey:
            "A full answer explains that period-3 oxides change in structure from ionic/giant (Na₂O, MgO, Al₂O₃) through giant covalent (SiO₂) to molecular (P₄O₁₀, SO₃, Cl₂O₇), and in character from basic through amphoteric (Al₂O₃) to acidic. The chlorides change from ionic soluble lattices (NaCl, MgCl₂) that give near-neutral/slightly acidic solutions to covalent chlorides (SiCl₄, PCl₅) that hydrolyse to acidic solutions. For the carbonates/nitrates, thermal stability increases down both groups because larger cations have lower polarising power and distort the anion less; Group 1 salts (with +1, larger, less polarising ions) are more stable than the corresponding Group 2 salts. Award marks for the oxide trend, the chloride contrast, and the correctly explained stability trend.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 7.7 Group Trends for the Active Metals (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/07:_Periodic_Properties_of_the_Elements/7.07:_Group_Trends_for_the_Active_Metals)
      slug: "period-four-metals",
      title: "Period-Four Metals: Potassium and Calcium",
      objective:
        "By the end of the topic, learners should be able to describe the physical properties and reactions of the active metals potassium (Group 1) and calcium (Group 2), especially their reactions with water and oxygen. (MoE Grade 10 Period III, CONTENTS 6.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- **Potassium (K)** and **calcium (Ca)** are the period-four **active metals**, from Group 1 and Group 2.
- **This topic:** their physical properties and their reactions with water and oxygen.

## Potassium — a Group 1 alkali metal

- **Physical:** soft (cut with a knife), shiny when freshly cut, low density, low melting point.
- **Outer electrons:** 1 → readily lost to form **K⁺**.
- **Very reactive** — stored under oil to keep out air and water.
- **Reaction with water:** vigorous — 2K + 2H₂O → 2KOH + H₂; the hydrogen often ignites with a lilac flame, and the solution is alkaline.
- **Reaction with oxygen:** tarnishes quickly, forming an oxide.

## Calcium — a Group 2 alkaline earth metal

- **Physical:** harder, denser, higher melting point than potassium.
- **Outer electrons:** 2 → lost to form **Ca²⁺**.
- **Reactive, but less so than potassium.**
- **Reaction with water:** steady (not violent) — Ca + 2H₂O → Ca(OH)₂ + H₂; produces an alkaline solution and hydrogen bubbles.
- **Reaction with oxygen:** burns to form calcium oxide, 2Ca + O₂ → 2CaO.

## Comparing the two metals

| Property | Potassium (Group 1) | Calcium (Group 2) |
|---|---|---|
| Hardness | soft | harder |
| Density / m.p. | low | higher |
| Ion formed | K⁺ | Ca²⁺ |
| Reaction with water | very vigorous | steady |
| Reactivity | higher | lower |

- **Group 1 metals are more reactive than Group 2 metals** because they lose only one electron and have lower ionization energies.

## Common errors and misconceptions

- **Thinking calcium is more reactive than potassium** — Group 1 metals are more reactive than Group 2; potassium reacts more vigorously with water.
- **Wrong ion charges** — potassium forms K⁺ (+1), calcium forms Ca²⁺ (+2).
- **Forgetting hydrogen is released** — both react with water to give a metal hydroxide **and hydrogen gas**.
- **Storing reactive metals in air** — potassium is stored under oil to keep out oxygen and water.`,
      workedExample: `**Task.** Compare the reactions of potassium and calcium with water, writing balanced equations and stating which is more reactive.

**Potassium with water**
- Reaction: 2K + 2H₂O → 2KOH + H₂.
- Observations: floats and moves about, reacts **very vigorously**, hydrogen often ignites with a **lilac** flame; the solution turns alkaline (forms KOH).

**Calcium with water**
- Reaction: Ca + 2H₂O → Ca(OH)₂ + H₂.
- Observations: reacts **steadily**, gives off hydrogen bubbles and forms a cloudy alkaline solution of calcium hydroxide.

**Which is more reactive?**
- **Potassium** is more reactive: as a Group 1 metal it loses just one electron and has a lower ionization energy than the Group 2 calcium, so it reacts faster and more vigorously.

**Conclusion.** Both metals release hydrogen and form alkaline hydroxides with water, but potassium (Group 1) reacts far more vigorously than calcium (Group 2), reflecting the greater reactivity of Group 1 metals.`,
      quiz: [
        {
          prompt: "Potassium belongs to Group…",
          options: ["1 (alkali metals)", "2 (alkaline earth metals)", "17 (halogens)", "18 (noble gases)"],
          correctIndex: 0,
          explanation: "Potassium is a Group 1 alkali metal.",
        },
        {
          prompt: "Calcium belongs to Group…",
          options: ["2 (alkaline earth metals)", "1 (alkali metals)", "17", "18"],
          correctIndex: 0,
          explanation: "Calcium is a Group 2 metal.",
        },
        {
          prompt: "Potassium forms an ion with charge…",
          options: ["+1", "+2", "−1", "−2"],
          correctIndex: 0,
          explanation: "It loses one electron to form K⁺.",
        },
        {
          prompt: "Calcium forms an ion with charge…",
          options: ["+2", "+1", "−2", "−1"],
          correctIndex: 0,
          explanation: "It loses two electrons to form Ca²⁺.",
        },
        {
          prompt: "Which metal is more reactive?",
          options: ["potassium", "calcium", "they are equal", "neither reacts"],
          correctIndex: 0,
          explanation: "Group 1 metals are more reactive than Group 2.",
        },
        {
          prompt: "Potassium is stored under oil to keep out…",
          options: ["air and water", "light", "heat", "sound"],
          correctIndex: 0,
          explanation: "It reacts with oxygen and water, so it is kept under oil.",
        },
        {
          prompt: "The gas released when these metals react with water is…",
          options: ["hydrogen", "oxygen", "carbon dioxide", "chlorine"],
          correctIndex: 0,
          explanation: "Metal + water → hydroxide + hydrogen.",
        },
        {
          prompt: "The solution formed when potassium reacts with water is…",
          options: ["alkaline", "acidic", "neutral", "an oxide"],
          correctIndex: 0,
          explanation: "KOH is an alkali.",
        },
        {
          prompt: "Compared with potassium, calcium is…",
          options: ["harder and denser", "softer and lighter", "a gas", "a non-metal"],
          correctIndex: 0,
          explanation: "Group 2 metals are harder and denser than Group 1.",
        },
        {
          prompt: "The balanced equation for calcium with water is…",
          options: ["Ca + 2H₂O → Ca(OH)₂ + H₂", "Ca + H₂O → CaO + H₂", "Ca + 2H₂O → CaH₂ + O₂", "2Ca + H₂O → Ca₂O + H₂"],
          correctIndex: 0,
          explanation: "Ca + 2H₂O → Ca(OH)₂ + H₂.",
        },
        {
          prompt: "Potassium's flame when hydrogen ignites is coloured…",
          options: ["lilac", "green", "blue only", "red"],
          correctIndex: 0,
          explanation: "Potassium gives a lilac flame.",
        },
        {
          prompt: "Calcium reacts with water…",
          options: ["steadily", "explosively faster than potassium", "not at all", "only when frozen"],
          correctIndex: 0,
          explanation: "Calcium reacts steadily, less violently than potassium.",
        },
        {
          prompt: "When calcium burns in oxygen it forms…",
          options: ["calcium oxide (CaO)", "calcium hydroxide", "calcium chloride", "calcium carbonate"],
          correctIndex: 0,
          explanation: "2Ca + O₂ → 2CaO.",
        },
        {
          prompt: "Group 1 metals are more reactive because they…",
          options: ["lose one electron easily (low ionization energy)", "gain electrons", "have full shells", "are non-metals"],
          correctIndex: 0,
          explanation: "One easily-lost outer electron makes them very reactive.",
        },
        {
          prompt: "Freshly cut potassium is…",
          options: ["shiny then tarnishes", "always dull", "black", "a gas"],
          correctIndex: 0,
          explanation: "It is shiny when cut and tarnishes quickly in air.",
        },
        {
          prompt: "The reaction 2K + 2H₂O → 2KOH + H₂ shows potassium forming a…",
          options: ["hydroxide and hydrogen", "chloride and oxygen", "oxide and water", "carbonate and CO₂"],
          correctIndex: 0,
          explanation: "It forms KOH and releases hydrogen.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which metal reacts more vigorously with water?",
          options: ["potassium", "calcium", "both the same", "neither"],
          correctIndex: 0,
          answerKey: "Potassium (Group 1) is more reactive than calcium (Group 2).",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The gas released when calcium reacts with water is:",
          options: ["hydrogen", "oxygen", "carbon dioxide", "chlorine"],
          correctIndex: 0,
          answerKey: "Metal + water → hydroxide + hydrogen gas.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Write balanced equations for the reactions of potassium and calcium with water.",
          answerKey:
            "2K + 2H₂O → 2KOH + H₂ ; Ca + 2H₂O → Ca(OH)₂ + H₂. Award a mark for each correct balanced equation.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two physical properties that distinguish calcium from potassium.",
          answerKey:
            "Calcium is harder and denser than potassium, and has a higher melting point; potassium is soft (can be cut with a knife) and low-density. Award marks for two valid contrasts.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare potassium and calcium as active metals, describing their physical properties, the ions they form, and their reactions with water and oxygen, and explain why potassium is more reactive.",
          answerKey:
            "A full answer notes that potassium is a soft, low-density Group 1 metal that forms K⁺, while calcium is a harder, denser Group 2 metal that forms Ca²⁺. Both react with water to give an alkaline hydroxide and hydrogen (2K + 2H₂O → 2KOH + H₂; Ca + 2H₂O → Ca(OH)₂ + H₂), but potassium reacts far more vigorously (often igniting the hydrogen with a lilac flame) while calcium reacts steadily. Both react with oxygen to form oxides (potassium tarnishing quickly; 2Ca + O₂ → 2CaO). Potassium is more reactive because, as a Group 1 metal, it loses only one electron and has a lower ionization energy than the Group 2 calcium. Award marks for physical properties, ions, both water reactions, and the reactivity explanation.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — Group 17: The Halogens / General Properties of Halogens (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Elements_Organized_by_Block/2_p-Block_Elements/Group_17:_The_Halogens)
      slug: "group-seven-the-halogens",
      title: "Group Seven: The Halogens",
      objective:
        "By the end of the topic, learners should be able to describe the physical properties and reactivity trends of the halogens (F, Cl, Br, I), including their appearances, states, oxidising power and displacement reactions. (MoE Grade 10 Period III, CONTENTS 7.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The **halogens** (Group 17) are reactive non-metals with **seven** outer electrons.
- **This topic:** their appearances and states, the trends down the group, and displacement reactions.

## The halogens

- Members: **fluorine (F), chlorine (Cl), bromine (Br), iodine (I)** (and astatine).
- All have the outer configuration **ns² np⁵** — 7 valence electrons — so they need just **one** more electron to complete an octet, forming **−1 ions (halides)** or single covalent bonds. They exist as **diatomic molecules** (F₂, Cl₂, Br₂, I₂).

## Physical properties down the group

| Halogen | Appearance / state (room temp) | Trend down group |
|---|---|---|
| Fluorine | pale yellow gas | colour deepens ↓ |
| Chlorine | green/yellow gas | melting & boiling points rise ↓ |
| Bromine | red-brown liquid | density increases ↓ |
| Iodine | grey-black solid | atomic radius increases ↓ |

- Melting points, boiling points, density, colour intensity and atomic radius all **increase down the group**.

## Reactivity trend

- Halogens are very reactive; **reactivity decreases down the group** (F most reactive, I least).
- They are strong **oxidising agents** (they gain electrons); **fluorine is the strongest oxidising agent**, chlorine next.
- **Electronegativity decreases down the group**; fluorine is the most electronegative element.

## Displacement reactions

- A **more reactive halogen displaces a less reactive halide** from solution.
- Example: chlorine displaces bromine — Cl₂ + 2KBr → 2KCl + Br₂ (the solution turns orange as bromine forms).
- Iodine cannot displace chlorine or bromine, because it is the least reactive of the three.

## Common errors and misconceptions

- **Thinking reactivity increases down the group** — halogen reactivity **decreases** down the group (opposite of the metals).
- **Wrong states** — at room temperature: F₂ and Cl₂ gases, Br₂ liquid, I₂ solid.
- **Forgetting they are diatomic** — halogens exist as X₂ molecules.
- **Assuming a less reactive halogen can displace a more reactive one** — only a *more* reactive halogen displaces a halide.`,
      workedExample: `**Task.** (a) Predict what happens when chlorine is bubbled into potassium iodide solution, writing an equation. (b) Explain the reactivity trend down Group 17.

**Part (a) — displacement**
- Chlorine is **more reactive** than iodine, so it **displaces** the iodide:
  Cl₂ + 2KI → 2KCl + I₂.
- Observation: the solution turns **brown** as iodine (I₂) is formed.

**Part (b) — reactivity trend**
- Halogens react by **gaining one electron** to complete their octet.
- Going down the group, atoms get **larger** and the incoming electron is **further from the nucleus and more shielded**, so it is attracted less strongly.
- Therefore **reactivity decreases down the group**: fluorine (top) is the most reactive and iodine (lower) the least, of the common halogens.

**Conclusion.** Chlorine displaces iodine (Cl₂ + 2KI → 2KCl + I₂) because a more reactive halogen displaces a less reactive halide, and reactivity falls down the group as the atom's pull on an added electron weakens.`,
      quiz: [
        {
          prompt: "The halogens are found in Group…",
          options: ["17", "1", "2", "18"],
          correctIndex: 0,
          explanation: "Halogens are Group 17.",
        },
        {
          prompt: "How many outer electrons does a halogen atom have?",
          options: ["7", "1", "8", "2"],
          correctIndex: 0,
          explanation: "Halogens have 7 valence electrons (ns²np⁵).",
        },
        {
          prompt: "Halogens exist as … molecules.",
          options: ["diatomic (X₂)", "single atoms", "triatomic", "giant covalent"],
          correctIndex: 0,
          explanation: "F₂, Cl₂, Br₂, I₂ are diatomic.",
        },
        {
          prompt: "At room temperature, chlorine is a…",
          options: ["green/yellow gas", "red liquid", "black solid", "colourless liquid"],
          correctIndex: 0,
          explanation: "Chlorine is a green-yellow gas.",
        },
        {
          prompt: "At room temperature, bromine is a…",
          options: ["red-brown liquid", "gas", "solid", "white powder"],
          correctIndex: 0,
          explanation: "Bromine is a red-brown liquid.",
        },
        {
          prompt: "At room temperature, iodine is a…",
          options: ["grey-black solid", "gas", "liquid", "colourless gas"],
          correctIndex: 0,
          explanation: "Iodine is a dark solid that sublimes to purple vapour.",
        },
        {
          prompt: "Down Group 17, melting and boiling points…",
          options: ["increase", "decrease", "stay the same", "become negative"],
          correctIndex: 0,
          explanation: "They rise down the group.",
        },
        {
          prompt: "Down Group 17, reactivity…",
          options: ["decreases", "increases", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "Halogen reactivity falls down the group.",
        },
        {
          prompt: "The most reactive halogen is…",
          options: ["fluorine", "iodine", "bromine", "chlorine"],
          correctIndex: 0,
          explanation: "Fluorine is the most reactive.",
        },
        {
          prompt: "Halogens act as … agents.",
          options: ["oxidising", "reducing", "drying", "neutralising"],
          correctIndex: 0,
          explanation: "They gain electrons, oxidising other substances.",
        },
        {
          prompt: "A halogen forms an ion with charge…",
          options: ["−1", "+1", "−2", "+2"],
          correctIndex: 0,
          explanation: "Gaining one electron gives a −1 halide.",
        },
        {
          prompt: "In a displacement reaction, a more reactive halogen displaces a…",
          options: ["less reactive halide", "more reactive halide", "metal", "noble gas"],
          correctIndex: 0,
          explanation: "More reactive halogens push out less reactive halides.",
        },
        {
          prompt: "Cl₂ + 2KBr → 2KCl + Br₂ shows chlorine displacing…",
          options: ["bromine", "chlorine", "iodine", "potassium"],
          correctIndex: 0,
          explanation: "Chlorine displaces the less reactive bromide.",
        },
        {
          prompt: "Iodine cannot displace chlorine because iodine is…",
          options: ["less reactive", "more reactive", "a metal", "a gas"],
          correctIndex: 0,
          explanation: "A less reactive halogen cannot displace a more reactive one.",
        },
        {
          prompt: "Electronegativity down Group 17…",
          options: ["decreases", "increases", "stays the same", "is zero"],
          correctIndex: 0,
          explanation: "It falls from fluorine down to iodine.",
        },
        {
          prompt: "When chlorine displaces iodide, the solution turns…",
          options: ["brown", "colourless", "blue", "green"],
          correctIndex: 0,
          explanation: "Iodine formed gives a brown solution.",
        },
        {
          prompt: "The outer-shell configuration of a halogen is…",
          options: ["ns² np⁵", "ns¹", "ns² np⁶", "ns² np³"],
          correctIndex: 0,
          explanation: "Seven outer electrons: ns² np⁵.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which correctly lists the states of F₂, Cl₂, Br₂ and I₂ at room temperature?",
          options: ["gas, gas, liquid, solid", "solid, liquid, gas, gas", "gas, liquid, solid, gas", "liquid, liquid, solid, gas"],
          correctIndex: 0,
          answerKey: "F₂ and Cl₂ are gases, Br₂ a liquid, I₂ a solid.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Going down Group 17, reactivity:",
          options: ["decreases", "increases", "stays constant", "increases then decreases"],
          correctIndex: 0,
          answerKey: "Halogen reactivity decreases down the group.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Write the equation for the reaction of chlorine with potassium bromide solution and state what is observed.",
          answerKey:
            "Cl₂ + 2KBr → 2KCl + Br₂. Chlorine (more reactive) displaces bromine; the solution turns orange/brown as bromine forms. Award marks for the balanced equation and the observation.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why halogens have similar chemical properties.",
          answerKey:
            "All halogens have seven outer (valence) electrons (ns²np⁵), so each needs to gain (or share) one electron to complete its octet. This shared outer-electron arrangement gives them similar chemistry — forming −1 halide ions or single covalent bonds and acting as oxidising agents. Award marks for '7 outer electrons' and 'need one more electron / similar reactions'.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the physical properties and reactivity of the halogens down Group 17, and explain the reactivity trend and how displacement reactions demonstrate it.",
          answerKey:
            "A strong answer describes the physical trend: colour deepens and melting/boiling points, density and atomic radius increase down the group (F₂ pale-yellow gas, Cl₂ green-yellow gas, Br₂ red-brown liquid, I₂ dark solid). Chemically all have 7 outer electrons, form −1 ions and act as oxidising agents. Reactivity decreases down the group because atoms get larger and the incoming electron is further from the nucleus and more shielded, so it is attracted less strongly (fluorine most reactive, iodine least). Displacement reactions show this: a more reactive halogen displaces a less reactive halide (Cl₂ + 2KBr → 2KCl + Br₂; Cl₂ + 2KI → 2KCl + I₂), but iodine cannot displace chlorine or bromine. Award marks for the physical trend, the reactivity trend with explanation, and a correct displacement example.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — Properties of Transition Metals (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Elements_Organized_by_Block/3_d-Block_Elements/1b_Properties_of_Transition_Metals)
      slug: "first-transition-series",
      title: "Elements of the First Transition Series",
      objective:
        "By the end of the topic, learners should be able to describe the characteristic properties of the first-row transition metals: physical properties, variable oxidation states, coloured compounds, catalytic activity and magnetic behaviour. (MoE Grade 10 Period III, CONTENTS 8.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The **first transition series** runs from scandium (Sc) to zinc (Zn) — the d-block of period 4.
- **This topic:** their physical properties and the four characteristic chemical features.

## Physical properties

- **Hard, dense metals** with **high melting and boiling points**.
- Good **conductors** of heat and electricity; shiny and malleable.
- Much **less reactive** than the Group 1 and Group 2 metals.

## The four characteristic features

1. **Variable oxidation states.** They form compounds in more than one oxidation state (e.g. iron as Fe²⁺ and Fe³⁺; manganese +2, +3, +4, +6, +7). This is because the 3d and 4s electrons are close in energy.
2. **Coloured compounds/ions.** Their ions are often coloured — Cu²⁺ blue, Fe³⁺ yellow-brown, Cr³⁺ green, MnO₄⁻ purple.
3. **Catalytic activity.** Many transition metals and their compounds are good **catalysts** (e.g. iron in ammonia manufacture, nickel in hydrogenation), because they can change oxidation state or adsorb reactants on their surface.
4. **Magnetic properties.** Many transition-metal compounds are **paramagnetic** (attracted to magnets) owing to unpaired d-electrons; iron, cobalt and nickel are ferromagnetic.

They also form **complex ions**.

## Comparison with main-group metals

| Feature | Transition metals | Group 1/2 metals |
|---|---|---|
| Hardness | hard, dense | soft (Group 1) |
| Melting point | high | lower |
| Reactivity | low | high |
| Oxidation states | variable | fixed (+1 or +2) |
| Compound colour | often coloured | usually white |
| Catalysis | often catalysts | rarely |

## Common errors and misconceptions

- **Thinking transition metals have one fixed oxidation state** — a defining feature is their **variable** oxidation states.
- **Expecting them to be as reactive as Group 1 metals** — transition metals are much **less** reactive.
- **Assuming all metal compounds are white** — transition-metal compounds are often **coloured**.
- **Ignoring catalysis** — a key use of transition metals and their compounds is as catalysts.`,
      workedExample: `**Task.** List the four characteristic properties of transition metals and give one example of each, then state one way they differ from Group 1 metals.

**The four characteristic properties**
1. **Variable oxidation states** — e.g. iron forms Fe²⁺ and Fe³⁺.
2. **Coloured compounds** — e.g. copper(II) compounds are blue; MnO₄⁻ is purple.
3. **Catalytic activity** — e.g. iron catalyses the manufacture of ammonia (Haber process).
4. **Magnetic properties** — e.g. iron, cobalt and nickel are magnetic; many compounds are paramagnetic.

**One difference from Group 1 metals**
- Transition metals are **hard, dense and much less reactive**, and show variable oxidation states, whereas Group 1 metals are **soft, very reactive** and have a single fixed +1 oxidation state.

**Conclusion.** The transition metals are defined by variable oxidation states, coloured compounds, catalytic activity and magnetic behaviour, and are far harder and less reactive than the soft, highly reactive Group 1 metals.`,
      quiz: [
        {
          prompt: "The first transition series is part of the … block.",
          options: ["d", "s", "p", "f"],
          correctIndex: 0,
          explanation: "Transition metals are d-block elements.",
        },
        {
          prompt: "Compared with Group 1 metals, transition metals are…",
          options: ["harder and less reactive", "softer and more reactive", "gases", "non-metals"],
          correctIndex: 0,
          explanation: "They are hard, dense and much less reactive.",
        },
        {
          prompt: "A characteristic feature of transition metals is that they show…",
          options: ["variable oxidation states", "only +1 states", "no compounds", "no colour"],
          correctIndex: 0,
          explanation: "Variable oxidation states are a defining feature.",
        },
        {
          prompt: "Transition-metal compounds are often…",
          options: ["coloured", "colourless always", "gaseous", "radioactive"],
          correctIndex: 0,
          explanation: "Coloured ions/compounds are typical.",
        },
        {
          prompt: "Copper(II) ions in solution are typically…",
          options: ["blue", "purple", "colourless", "green-black"],
          correctIndex: 0,
          explanation: "Cu²⁺ gives blue solutions.",
        },
        {
          prompt: "The permanganate ion MnO₄⁻ is…",
          options: ["purple", "blue", "yellow", "colourless"],
          correctIndex: 0,
          explanation: "MnO₄⁻ is intensely purple.",
        },
        {
          prompt: "Many transition metals are useful as…",
          options: ["catalysts", "fuels", "acids", "solvents"],
          correctIndex: 0,
          explanation: "They and their compounds are good catalysts.",
        },
        {
          prompt: "Iron is used as a catalyst in the manufacture of…",
          options: ["ammonia (Haber process)", "oxygen", "sodium", "water"],
          correctIndex: 0,
          explanation: "Iron catalyses the Haber process.",
        },
        {
          prompt: "Iron forms which two common ions?",
          options: ["Fe²⁺ and Fe³⁺", "Fe⁺ and Fe²⁺", "Fe³⁺ only", "Fe⁴⁺ and Fe⁵⁺"],
          correctIndex: 0,
          explanation: "Iron shows +2 and +3 oxidation states.",
        },
        {
          prompt: "Transition metals often have … melting points.",
          options: ["high", "very low", "no", "negative"],
          correctIndex: 0,
          explanation: "They are high-melting, dense metals.",
        },
        {
          prompt: "Many transition-metal compounds are paramagnetic because of…",
          options: ["unpaired d-electrons", "full shells", "no electrons", "extra protons"],
          correctIndex: 0,
          explanation: "Unpaired d-electrons cause paramagnetism.",
        },
        {
          prompt: "Which metals are ferromagnetic?",
          options: ["iron, cobalt, nickel", "sodium, potassium", "helium, neon", "carbon, sulfur"],
          correctIndex: 0,
          explanation: "Fe, Co and Ni are ferromagnetic.",
        },
        {
          prompt: "Transition metals can act as catalysts partly because they can…",
          options: ["change oxidation state", "melt easily", "dissolve in acid only", "form gases"],
          correctIndex: 0,
          explanation: "Changing oxidation state (or surface adsorption) aids catalysis.",
        },
        {
          prompt: "The first transition series runs from … to …",
          options: ["scandium to zinc", "sodium to argon", "lithium to neon", "potassium to krypton"],
          correctIndex: 0,
          explanation: "Sc to Zn is the first transition series.",
        },
        {
          prompt: "Group 1 metal compounds are usually…",
          options: ["white/colourless", "brightly coloured", "magnetic", "catalytic"],
          correctIndex: 0,
          explanation: "Main-group metal compounds are usually colourless.",
        },
        {
          prompt: "Transition metals can also form … ions with molecules or ions attached.",
          options: ["complex", "simple only", "no", "gaseous"],
          correctIndex: 0,
          explanation: "They form complex ions.",
        },
        {
          prompt: "Which is NOT a characteristic property of transition metals?",
          options: ["a single fixed oxidation state", "variable oxidation states", "coloured compounds", "catalytic activity"],
          correctIndex: 0,
          explanation: "They show variable, not fixed, oxidation states.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is a characteristic property of transition metals?",
          options: ["forming coloured compounds", "being very soft and reactive", "having only one oxidation state", "forming colourless ions only"],
          correctIndex: 0,
          answerKey: "Coloured compounds are a hallmark of transition metals.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Iron acting as a catalyst in the Haber process illustrates which property?",
          options: ["catalytic activity", "low melting point", "high reactivity", "colourlessness"],
          correctIndex: 0,
          answerKey: "It is an example of catalytic activity.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List the four characteristic chemical properties of transition metals.",
          answerKey:
            "Variable oxidation states; coloured compounds/ions; catalytic activity; magnetic (often paramagnetic) properties. (Complex-ion formation also acceptable.) One mark each.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two ways transition metals differ from Group 1 metals.",
          answerKey:
            "Any two of: transition metals are harder/denser with higher melting points; much less reactive; show variable oxidation states (not a single fixed one); form coloured compounds (not white/colourless); often act as catalysts and can be magnetic. One mark each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the physical properties and the four characteristic chemical features of the first-row transition metals, giving an example of each feature.",
          answerKey:
            "A full answer states that the first transition series (Sc to Zn) are hard, dense metals with high melting and boiling points, good conductors and much less reactive than Group 1/2 metals. The four characteristic chemical features are: variable oxidation states (e.g. Fe²⁺/Fe³⁺, or manganese +2 to +7); coloured compounds/ions (e.g. Cu²⁺ blue, MnO₄⁻ purple, Cr³⁺ green); catalytic activity (e.g. iron in the Haber process, nickel in hydrogenation), linked to their ability to change oxidation state or adsorb reactants; and magnetic properties (many compounds paramagnetic due to unpaired d-electrons; Fe, Co, Ni ferromagnetic). They also form complex ions. Award marks for the physical properties and all four features with valid examples.",
          marks: 6,
        },
      ],
    },
  ],
};
