import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester Two, Period V: Atoms, Molecules, Ions and Stoichiometry. The
// CONTENTS list is expanded to one topic per item: 1. Fundamental chemical laws;
// 2. Molecules and ions; 3. The mole concept; 4. Percentage composition;
// 5. Empirical and molecular formulae; 6. Kinds of chemical reactions
// (reversible/irreversible); 7. Types of chemical reactions; 8. Writing and
// balancing chemical equations; 9. Limiting reactants.
export const chemistryG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Atoms, Molecules, Ions and Stoichiometry",
  summary:
    "Period V of the MoE Grade 10 Chemistry syllabus. Learners meet the fundamental chemical laws, distinguish molecules and ions, use the mole concept, calculate percentage composition and empirical and molecular formulae, classify reactions as reversible or irreversible and by type, balance chemical equations, and solve limiting-reactant problems — the quantitative side of chemistry.",
  topics: [
    {
      // source: LibreTexts — 2.2 Fundamental Chemical Laws (Chemistry, Zumdahl & DeCoste) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_(Zumdahl_and_Decoste)/02:_Atoms_Molecules_and_Ions/2.02_Fundamental_Chemical_Laws)
      slug: "fundamental-chemical-laws",
      title: "Fundamental Chemical Laws",
      objective:
        "By the end of the topic, learners should be able to state and apply the law of conservation of mass, the law of definite proportions and the law of multiple proportions. (MoE Grade 10 Period V, CONTENTS 1.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Three **fundamental chemical laws** were discovered from careful measurement and led to the atomic theory.
- **This topic:** conservation of mass, definite proportions and multiple proportions.

## 1. Law of conservation of mass

- **Law of conservation of mass** — matter is neither created nor destroyed in a chemical reaction; the **total mass of the reactants equals the total mass of the products**.
- Stated by **Antoine Lavoisier** (1789).
- It is why chemical equations must **balance**.

## 2. Law of definite (constant) proportions

- **Law of definite proportions** — a given pure compound always contains the **same elements in the same proportions by mass**, whatever its source.
- Stated by **Joseph Proust**.
- Example: pure water is always 11% hydrogen and 89% oxygen by mass.

## 3. Law of multiple proportions

- **Law of multiple proportions** — when two elements form **more than one compound**, the masses of one element that combine with a **fixed mass** of the other are in a ratio of **small whole numbers**.
- Stated by **John Dalton** (1803), supporting his atomic theory.
- Example: in CO and CO₂, the masses of oxygen combining with a fixed 12 g of carbon are 16 g and 32 g — a ratio of **1 : 2**.

## Common errors and misconceptions

- **Thinking mass is lost when a gas escapes** — mass is conserved; a "lost" gas has simply left the container. In a sealed system the total mass is unchanged.
- **Confusing definite and multiple proportions** — definite: one compound, fixed ratio; multiple: two or more compounds of the same elements, whole-number ratios.
- **Expecting non-whole ratios** — the law of multiple proportions gives **small whole-number** ratios.
- **Ignoring the source of a compound** — pure water from any source has the same composition (definite proportions).`,
      workedExample: `**Task.** (a) Use conservation of mass to find the mass of product. (b) Show that carbon monoxide and carbon dioxide obey the law of multiple proportions.

**Part (a) — conservation of mass**
- 12 g of carbon reacts completely with 32 g of oxygen to form carbon dioxide.
- By the law of conservation of mass, mass of products = mass of reactants = 12 + 32 = **44 g** of CO₂.

**Part (b) — multiple proportions**
- In **carbon monoxide (CO):** 12 g of carbon combines with **16 g** of oxygen.
- In **carbon dioxide (CO₂):** 12 g of carbon combines with **32 g** of oxygen.
- The masses of oxygen combining with the same 12 g of carbon are **16 : 32 = 1 : 2** — a ratio of small whole numbers.

**Conclusion.** Mass is conserved (44 g of CO₂ from 12 g C + 32 g O₂), and the 1 : 2 oxygen ratio for CO and CO₂ illustrates the law of multiple proportions.`,
      quiz: [
        {
          prompt: "The law of conservation of mass says that in a reaction, mass is…",
          options: ["neither created nor destroyed", "always created", "always destroyed", "sometimes lost"],
          correctIndex: 0,
          explanation: "Total mass is conserved.",
        },
        {
          prompt: "The total mass of the products equals the total mass of the…",
          options: ["reactants", "catalyst", "container", "gas only"],
          correctIndex: 0,
          explanation: "Reactant mass = product mass.",
        },
        {
          prompt: "The law of conservation of mass was stated by…",
          options: ["Lavoisier", "Proust", "Dalton", "Moseley"],
          correctIndex: 0,
          explanation: "Lavoisier (1789).",
        },
        {
          prompt: "The law of definite proportions says a compound always has the same elements in the same…",
          options: ["proportions by mass", "colour", "temperature", "volume"],
          correctIndex: 0,
          explanation: "Fixed composition by mass.",
        },
        {
          prompt: "The law of definite proportions was stated by…",
          options: ["Proust", "Lavoisier", "Dalton", "Newlands"],
          correctIndex: 0,
          explanation: "Joseph Proust.",
        },
        {
          prompt: "Pure water from any source is always about 11% hydrogen and 89% oxygen by mass. This illustrates the law of…",
          options: ["definite proportions", "multiple proportions", "conservation of mass", "octaves"],
          correctIndex: 0,
          explanation: "A fixed composition = definite proportions.",
        },
        {
          prompt: "The law of multiple proportions was stated by…",
          options: ["Dalton", "Proust", "Lavoisier", "Mendeleev"],
          correctIndex: 0,
          explanation: "John Dalton (1803).",
        },
        {
          prompt: "The law of multiple proportions applies when two elements form…",
          options: ["more than one compound", "only one compound", "an ionic solid only", "a mixture"],
          correctIndex: 0,
          explanation: "It compares two or more compounds of the same elements.",
        },
        {
          prompt: "In CO and CO₂, the oxygen masses combining with fixed carbon are in the ratio…",
          options: ["1 : 2", "2 : 3", "3 : 4", "1 : 1"],
          correctIndex: 0,
          explanation: "16 : 32 = 1 : 2.",
        },
        {
          prompt: "The ratios in the law of multiple proportions are…",
          options: ["small whole numbers", "always fractions", "random", "always 1:1"],
          correctIndex: 0,
          explanation: "They are small whole-number ratios.",
        },
        {
          prompt: "If 4 g of hydrogen reacts with 32 g of oxygen, the mass of water formed is…",
          options: ["36 g", "32 g", "28 g", "40 g"],
          correctIndex: 0,
          explanation: "Conservation of mass: 4 + 32 = 36 g.",
        },
        {
          prompt: "Balanced chemical equations are a direct consequence of the law of…",
          options: ["conservation of mass", "multiple proportions", "octaves", "definite proportions"],
          correctIndex: 0,
          explanation: "Atoms (and mass) are conserved, so equations balance.",
        },
        {
          prompt: "If a reaction in an open beaker seems to lose mass, it is usually because…",
          options: ["a gas has escaped", "atoms were destroyed", "mass turned to energy", "the law is wrong"],
          correctIndex: 0,
          explanation: "Escaping gas accounts for the apparent loss.",
        },
        {
          prompt: "These three laws helped support which theory?",
          options: ["Dalton's atomic theory", "the kinetic theory of gases", "VSEPR", "the octet rule"],
          correctIndex: 0,
          explanation: "They underpinned Dalton's atomic theory.",
        },
        {
          prompt: "A compound's composition by mass depends on its…",
          options: ["identity (not its source)", "colour", "container", "temperature"],
          correctIndex: 0,
          explanation: "Definite proportions: composition is fixed for a given compound.",
        },
        {
          prompt: "Which law would you use to predict the mass of product from known reactant masses?",
          options: ["conservation of mass", "multiple proportions", "definite proportions", "octaves"],
          correctIndex: 0,
          explanation: "Product mass = total reactant mass.",
        },
        {
          prompt: "Which statement matches the law of multiple proportions?",
          options: ["oxygen forms with carbon in a 1:2 mass ratio in CO and CO₂", "water is always the same", "mass is conserved", "elements repeat every eighth"],
          correctIndex: 0,
          explanation: "Whole-number ratios in different compounds of the same elements.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The law of conservation of mass implies that in a reaction:",
          options: ["mass of reactants = mass of products", "mass increases", "mass decreases", "mass depends on temperature"],
          correctIndex: 0,
          answerKey: "Total mass is conserved: reactants = products.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A pure compound always has the same composition by mass. This is the law of:",
          options: ["definite proportions", "multiple proportions", "conservation of mass", "octaves"],
          correctIndex: 0,
          answerKey: "Fixed composition = law of definite proportions.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the law of conservation of mass and the law of definite proportions.",
          answerKey:
            "Conservation of mass: matter is neither created nor destroyed in a chemical reaction, so the total mass of products equals the total mass of reactants. Definite proportions: a given pure compound always contains the same elements in the same fixed proportions by mass, whatever its source. Award marks for each correct statement.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "In sulfur dioxide (SO₂) 32 g of sulfur combines with 32 g of oxygen; in sulfur trioxide (SO₃) 32 g of sulfur combines with 48 g of oxygen. Show that this illustrates the law of multiple proportions.",
          answerKey:
            "For a fixed 32 g of sulfur, the oxygen masses are 32 g (SO₂) and 48 g (SO₃). The ratio 32 : 48 simplifies to 2 : 3, a ratio of small whole numbers, which is exactly what the law of multiple proportions predicts. Award marks for the ratio and the whole-number conclusion.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "State and explain the three fundamental chemical laws, giving an example of each.",
          answerKey:
            "A full answer states: (1) the law of conservation of mass (Lavoisier) — mass is neither created nor destroyed, so reactant mass equals product mass (e.g. 12 g C + 32 g O₂ → 44 g CO₂); (2) the law of definite proportions (Proust) — a pure compound always has the same elements in the same proportions by mass (e.g. water is always ~11% H and ~89% O); (3) the law of multiple proportions (Dalton) — when two elements form more than one compound, the masses of one combining with a fixed mass of the other are in small whole-number ratios (e.g. oxygen in CO and CO₂ is 16 g : 32 g = 1 : 2). Award marks for each law correctly stated with a valid example.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 4.5.1 Ions: Monatomic and Polyatomic (https://chem.libretexts.org/Courses/Fresno_City_College/Introductory_Chemistry_Atoms_First_for_FCC/04:_Compounds_and_Chemical_Bonds/4.05:_Ionic_Compounds/4.5.01:_Ions_-_Monatomic_and_Polyatomic)
      slug: "molecules-and-ions",
      title: "Molecules and Ions",
      objective:
        "By the end of the topic, learners should be able to distinguish atoms, molecules and ions, describe cations and anions, and identify monatomic and polyatomic ions. (MoE Grade 10 Period V, CONTENTS 2.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Matter is built from **atoms**, which combine into **molecules** or become **ions**.
- **This topic:** molecules and ions, cations and anions, monatomic and polyatomic ions.

## Atoms, molecules and ions

- **Atom** — the smallest particle of an element.
- **Molecule** — two or more atoms joined by covalent bonds; it may be an **element** (O₂, N₂) or a **compound** (H₂O, CO₂).
- **Ion** — an atom or group of atoms with an **electric charge**, formed by losing or gaining electrons.

## Cations and anions

- **Cation** — a **positive** ion, formed when an atom **loses** electrons (usually a metal): Na⁺, Mg²⁺, Al³⁺.
- **Anion** — a **negative** ion, formed when an atom **gains** electrons (usually a non-metal): Cl⁻, O²⁻.
- The charge on a simple ion is related to the group: Group 1 → +1, Group 2 → +2, Group 17 → −1, Group 16 → −2.

## Monatomic and polyatomic ions

- **Monatomic ion** — an ion made from a **single atom** (Na⁺, Cl⁻, O²⁻).
- **Polyatomic ion** — an ion made of **several atoms** covalently bonded but carrying an overall charge, acting as a single unit.

| Polyatomic ion | Formula | Charge |
|---|---|---|
| Ammonium | NH₄⁺ | +1 |
| Hydroxide | OH⁻ | −1 |
| Nitrate | NO₃⁻ | −1 |
| Carbonate | CO₃²⁻ | −2 |
| Sulfate | SO₄²⁻ | −2 |

- Most polyatomic ions are **anions**; ammonium (NH₄⁺) is a common polyatomic **cation**.

## Common errors and misconceptions

- **Confusing molecules and ions** — a molecule is neutral; an ion carries a charge.
- **Mixing up cation and anion** — cation = positive (loses electrons); anion = negative (gains electrons).
- **Treating a polyatomic ion as separate atoms** — it acts as one charged unit (e.g. SO₄²⁻).
- **Thinking a charge means atoms were destroyed** — charge comes from gaining or losing **electrons**, not protons.`,
      workedExample: `**Task.** Classify each of the following as an atom, molecule, or ion, and where it is an ion say whether it is a cation or anion and monatomic or polyatomic: Ne, O₂, Na⁺, SO₄²⁻, Cl⁻.

- **Ne** — a single, neutral **atom** (a noble gas).
- **O₂** — a **molecule** (two oxygen atoms, an element; neutral).
- **Na⁺** — an **ion**: positive → **cation**; single atom → **monatomic**.
- **SO₄²⁻** — an **ion**: negative → **anion**; several atoms as one unit → **polyatomic**.
- **Cl⁻** — an **ion**: negative → **anion**; single atom → **monatomic**.

**Conclusion.** Ne is an atom and O₂ a molecule (both neutral); Na⁺ is a monatomic cation; Cl⁻ is a monatomic anion; and SO₄²⁻ is a polyatomic anion acting as a single charged unit.`,
      quiz: [
        {
          prompt: "A molecule is…",
          options: ["two or more atoms joined by covalent bonds", "a charged atom", "a single proton", "a metal ion"],
          correctIndex: 0,
          explanation: "Molecules are covalently bonded atoms.",
        },
        {
          prompt: "An ion is an atom or group of atoms with an…",
          options: ["electric charge", "extra neutron", "no electrons", "full nucleus only"],
          correctIndex: 0,
          explanation: "Ions carry a charge.",
        },
        {
          prompt: "A cation is a … ion.",
          options: ["positive", "negative", "neutral", "molecular"],
          correctIndex: 0,
          explanation: "Cations are positive.",
        },
        {
          prompt: "An anion is a … ion.",
          options: ["negative", "positive", "neutral", "metallic"],
          correctIndex: 0,
          explanation: "Anions are negative.",
        },
        {
          prompt: "A cation forms when an atom … electrons.",
          options: ["loses", "gains", "shares", "destroys"],
          correctIndex: 0,
          explanation: "Losing electrons gives a positive charge.",
        },
        {
          prompt: "An anion forms when an atom … electrons.",
          options: ["gains", "loses", "shares", "creates"],
          correctIndex: 0,
          explanation: "Gaining electrons gives a negative charge.",
        },
        {
          prompt: "O₂ is best described as a…",
          options: ["molecule (element)", "compound", "ion", "atom"],
          correctIndex: 0,
          explanation: "Two atoms of one element bonded = a molecule of an element.",
        },
        {
          prompt: "A monatomic ion is made from…",
          options: ["a single atom", "several atoms", "two molecules", "a metal lattice"],
          correctIndex: 0,
          explanation: "Monatomic = one atom.",
        },
        {
          prompt: "A polyatomic ion is made from…",
          options: ["several atoms acting as one charged unit", "one atom", "only metals", "a neutral molecule"],
          correctIndex: 0,
          explanation: "Several bonded atoms with an overall charge.",
        },
        {
          prompt: "The formula of the sulfate ion is…",
          options: ["SO₄²⁻", "SO₃²⁻", "S²⁻", "SO₄⁻"],
          correctIndex: 0,
          explanation: "Sulfate is SO₄²⁻.",
        },
        {
          prompt: "Which is a polyatomic cation?",
          options: ["NH₄⁺", "Na⁺", "Cl⁻", "O²⁻"],
          correctIndex: 0,
          explanation: "Ammonium NH₄⁺ is a polyatomic cation.",
        },
        {
          prompt: "The hydroxide ion is…",
          options: ["OH⁻", "O²⁻", "H⁺", "H₂O"],
          correctIndex: 0,
          explanation: "Hydroxide is OH⁻.",
        },
        {
          prompt: "A Group 1 metal forms an ion with charge…",
          options: ["+1", "−1", "+2", "−2"],
          correctIndex: 0,
          explanation: "Group 1 → +1.",
        },
        {
          prompt: "A Group 17 element forms an ion with charge…",
          options: ["−1", "+1", "−2", "+2"],
          correctIndex: 0,
          explanation: "Group 17 → −1.",
        },
        {
          prompt: "The carbonate ion has the formula and charge…",
          options: ["CO₃²⁻", "CO₂", "CO₃⁻", "C²⁻"],
          correctIndex: 0,
          explanation: "Carbonate is CO₃²⁻.",
        },
        {
          prompt: "A molecule such as H₂O is…",
          options: ["electrically neutral", "positively charged", "negatively charged", "an ion"],
          correctIndex: 0,
          explanation: "Molecules have no overall charge.",
        },
        {
          prompt: "The charge of an ion comes from a difference between its numbers of…",
          options: ["protons and electrons", "neutrons and protons", "molecules", "shells"],
          correctIndex: 0,
          explanation: "Unequal protons and electrons give the charge.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which particle is a polyatomic anion?",
          options: ["SO₄²⁻", "Na⁺", "Cl⁻", "Ne"],
          correctIndex: 0,
          answerKey: "Sulfate SO₄²⁻ is several atoms with a negative charge — a polyatomic anion.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A cation is formed when an atom:",
          options: ["loses one or more electrons", "gains electrons", "gains protons", "gains neutrons"],
          correctIndex: 0,
          answerKey: "Losing electrons gives a positive cation.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between a molecule and an ion.",
          answerKey:
            "A molecule is two or more atoms joined by covalent bonds and is electrically neutral (e.g. H₂O, O₂). An ion is an atom or group of atoms that carries an electric charge because it has gained or lost electrons (e.g. Na⁺, Cl⁻, SO₄²⁻). Award marks for the covalently-bonded/neutral description of a molecule and the charged description of an ion.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give the formula and charge of the ammonium, hydroxide and carbonate ions, and say which is a cation.",
          answerKey:
            "Ammonium NH₄⁺ (+1) — a cation; hydroxide OH⁻ (−1); carbonate CO₃²⁻ (−2). Award marks for the three ions and identifying ammonium as the cation.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the terms atom, molecule and ion, and describe the difference between cations and anions and between monatomic and polyatomic ions, with examples.",
          answerKey:
            "A full answer defines an atom as the smallest particle of an element, a molecule as two or more atoms joined by covalent bonds (an element such as O₂ or a compound such as H₂O) and electrically neutral, and an ion as an atom or group of atoms carrying a charge from losing or gaining electrons. Cations are positive ions formed by losing electrons (usually metals — Na⁺, Mg²⁺); anions are negative ions formed by gaining electrons (usually non-metals — Cl⁻, O²⁻). Monatomic ions are single charged atoms (Na⁺, Cl⁻); polyatomic ions are groups of covalently bonded atoms carrying an overall charge and acting as one unit (NH₄⁺, OH⁻, SO₄²⁻, CO₃²⁻). Award marks for the three definitions, the cation/anion distinction and the monatomic/polyatomic distinction with examples.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 3.4 Avogadro's Number and the Mole (Chemistry: The Central Science, Brown et al.) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/03:_Stoichiometry-_Chemical_Formulas_and_Equations/3.04:_Avogadro's_Number_and_the_Mole)
      slug: "the-mole-concept",
      title: "The Mole Concept",
      objective:
        "By the end of the topic, learners should be able to define the mole and Avogadro's number, use molar mass, and convert between moles, mass and number of particles. (MoE Grade 10 Period V, CONTENTS 3.)",
      estimatedMinutes: 160,
      notes: `## Introduction

- Atoms are far too small and numerous to count, so chemists use the **mole** to count them by weighing.
- **This topic:** the mole, Avogadro's number, molar mass and the conversions between moles, mass and particles.

## The mole and Avogadro's number

- **Mole (mol)** — the amount of substance that contains **6.022 × 10²³** particles (atoms, molecules or ions).
- **Avogadro's number (Nₐ)** = **6.022 × 10²³** particles per mole.
- Just as "a dozen" means 12, "a mole" means 6.022 × 10²³.

## Molar mass

- **Molar mass** — the mass of **one mole** of a substance, in **grams per mole (g/mol)**.
- Numerically it equals the relative atomic/formula mass. For a compound, add the molar masses of all the atoms: H₂O = 2(1) + 16 = **18 g/mol**.

## The key conversions

\`\`\`svg The mole triangle of conversions
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mass, moles and number of particles linked through molar mass and Avogadro's number">
  <rect x="10" y="50" width="60" height="26" fill="none" stroke="#b45309"/><text x="40" y="67" font-size="10" text-anchor="middle" fill="#92400e">mass (g)</text>
  <rect x="100" y="50" width="60" height="26" fill="none" stroke="#b45309"/><text x="130" y="67" font-size="10" text-anchor="middle" fill="#92400e">moles</text>
  <rect x="190" y="50" width="66" height="26" fill="none" stroke="#b45309"/><text x="223" y="67" font-size="9" text-anchor="middle" fill="#92400e">particles</text>
  <line x1="70" y1="63" x2="100" y2="63" stroke="#1e3a8a" marker-end="url(#m)"/>
  <line x1="160" y1="63" x2="190" y2="63" stroke="#1e3a8a" marker-end="url(#m)"/>
  <text x="85" y="45" font-size="7" text-anchor="middle" fill="#1e3a8a">÷ molar mass</text>
  <text x="175" y="45" font-size="7" text-anchor="middle" fill="#1e3a8a">× Nₐ</text>
  <defs><marker id="m" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e3a8a"/></marker></defs>
</svg>
\`\`\`

- **moles = mass ÷ molar mass** (and mass = moles × molar mass).
- **number of particles = moles × 6.022 × 10²³**.

## Worked pattern

- Moles in 36 g of water: moles = 36 ÷ 18 = **2 mol**.
- Molecules in 2 mol: 2 × 6.022 × 10²³ = **1.2 × 10²⁴ molecules**.

## Common errors and misconceptions

- **Confusing molar mass with mass number** — molar mass is grams per mole; for a compound add up all the atoms' masses.
- **Multiplying when you should divide** — mass → moles is **÷ molar mass**; moles → mass is **× molar mass**.
- **Forgetting to include every atom** — H₂SO₄ molar mass = 2(1) + 32 + 4(16) = 98 g/mol.
- **Using the wrong particle** — a mole can be of atoms, molecules or ions; state which.`,
      workedExample: `**Task.** Calculate (a) the molar mass of carbon dioxide (CO₂), (b) the number of moles in 88 g of CO₂, and (c) the number of molecules in that sample. (C = 12, O = 16, Nₐ = 6.022 × 10²³.)

**Part (a) — molar mass**
- CO₂ = 12 + 2(16) = 12 + 32 = **44 g/mol**.

**Part (b) — moles**
- moles = mass ÷ molar mass = 88 ÷ 44 = **2 mol**.

**Part (c) — molecules**
- number = moles × Nₐ = 2 × 6.022 × 10²³ = **1.204 × 10²⁴ molecules**.

**Conclusion.** CO₂ has a molar mass of 44 g/mol, so 88 g is 2 mol, which contains 1.204 × 10²⁴ molecules.`,
      quiz: [
        {
          prompt: "One mole contains how many particles?",
          options: ["6.022 × 10²³", "6.022 × 10²²", "10²³", "1000"],
          correctIndex: 0,
          explanation: "Avogadro's number is 6.022 × 10²³.",
        },
        {
          prompt: "Avogadro's number is the number of particles in…",
          options: ["one mole", "one gram", "one litre", "one atom"],
          correctIndex: 0,
          explanation: "It is particles per mole.",
        },
        {
          prompt: "Molar mass is measured in…",
          options: ["grams per mole (g/mol)", "grams", "moles", "particles"],
          correctIndex: 0,
          explanation: "Molar mass = g/mol.",
        },
        {
          prompt: "The molar mass of water (H₂O) is…",
          options: ["18 g/mol", "16 g/mol", "2 g/mol", "36 g/mol"],
          correctIndex: 0,
          explanation: "2(1) + 16 = 18 g/mol.",
        },
        {
          prompt: "To convert mass to moles you…",
          options: ["divide by the molar mass", "multiply by the molar mass", "multiply by Nₐ", "divide by Nₐ"],
          correctIndex: 0,
          explanation: "moles = mass ÷ molar mass.",
        },
        {
          prompt: "To convert moles to number of particles you…",
          options: ["multiply by 6.022 × 10²³", "divide by 6.022 × 10²³", "multiply by molar mass", "divide by molar mass"],
          correctIndex: 0,
          explanation: "particles = moles × Nₐ.",
        },
        {
          prompt: "How many moles are in 36 g of water?",
          options: ["2", "1", "18", "36"],
          correctIndex: 0,
          explanation: "36 ÷ 18 = 2 mol.",
        },
        {
          prompt: "The molar mass of CO₂ (C=12, O=16) is…",
          options: ["44 g/mol", "28 g/mol", "16 g/mol", "12 g/mol"],
          correctIndex: 0,
          explanation: "12 + 2(16) = 44 g/mol.",
        },
        {
          prompt: "The number of molecules in 2 mol is…",
          options: ["1.2 × 10²⁴", "6.022 × 10²³", "2", "3 × 10²³"],
          correctIndex: 0,
          explanation: "2 × 6.022 × 10²³ ≈ 1.2 × 10²⁴.",
        },
        {
          prompt: "To convert moles to mass you…",
          options: ["multiply by the molar mass", "divide by the molar mass", "multiply by Nₐ", "divide by Nₐ"],
          correctIndex: 0,
          explanation: "mass = moles × molar mass.",
        },
        {
          prompt: "The mass of 0.5 mol of water is…",
          options: ["9 g", "18 g", "36 g", "4.5 g"],
          correctIndex: 0,
          explanation: "0.5 × 18 = 9 g.",
        },
        {
          prompt: "The molar mass of H₂SO₄ (H=1, S=32, O=16) is…",
          options: ["98 g/mol", "80 g/mol", "49 g/mol", "66 g/mol"],
          correctIndex: 0,
          explanation: "2 + 32 + 64 = 98 g/mol.",
        },
        {
          prompt: "A mole is like a counting unit, similar to a…",
          options: ["dozen", "kilogram", "metre", "litre"],
          correctIndex: 0,
          explanation: "A dozen is 12; a mole is 6.022 × 10²³.",
        },
        {
          prompt: "The number of atoms in 1 mol of carbon is…",
          options: ["6.022 × 10²³", "12", "1", "44"],
          correctIndex: 0,
          explanation: "One mole = Avogadro's number of atoms.",
        },
        {
          prompt: "How many moles are in 44 g of CO₂?",
          options: ["1", "2", "44", "0.5"],
          correctIndex: 0,
          explanation: "44 ÷ 44 = 1 mol.",
        },
        {
          prompt: "The molar mass of a compound is found by…",
          options: ["adding the molar masses of all its atoms", "using only the heaviest atom", "dividing by Nₐ", "counting molecules"],
          correctIndex: 0,
          explanation: "Sum the atomic masses in the formula.",
        },
        {
          prompt: "How many molecules are in 1 mol of any substance?",
          options: ["6.022 × 10²³", "1", "18", "44"],
          correctIndex: 0,
          explanation: "One mole always has Avogadro's number of particles.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "One mole of a substance contains:",
          options: ["6.022 × 10²³ particles", "100 particles", "1 gram of particles", "12 particles"],
          correctIndex: 0,
          answerKey: "A mole is Avogadro's number, 6.022 × 10²³ particles.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "How many moles are in 90 g of water (molar mass 18 g/mol)?",
          options: ["5", "2", "18", "90"],
          correctIndex: 0,
          answerKey: "moles = 90 ÷ 18 = 5 mol.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define the mole and Avogadro's number, and give the molar mass of oxygen gas O₂ (O = 16).",
          answerKey:
            "The mole is the amount of substance containing 6.022 × 10²³ particles; Avogadro's number is 6.022 × 10²³ particles per mole. The molar mass of O₂ = 2 × 16 = 32 g/mol. Award marks for the mole definition, Avogadro's number, and the molar mass 32 g/mol.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Calculate the number of moles and the number of molecules in 8 g of methane, CH₄ (C=12, H=1).",
          answerKey:
            "Molar mass of CH₄ = 12 + 4(1) = 16 g/mol. moles = 8 ÷ 16 = 0.5 mol. molecules = 0.5 × 6.022 × 10²³ = 3.011 × 10²³. Award marks for the molar mass, the moles and the number of molecules.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the mole concept and show, with a worked example, how to convert between mass, moles and number of particles.",
          answerKey:
            "A full answer defines the mole as the amount of substance containing Avogadro's number (6.022 × 10²³) of particles, and molar mass as the mass of one mole in g/mol (found by adding the atomic masses in the formula). It states the conversions: moles = mass ÷ molar mass, mass = moles × molar mass, and number of particles = moles × 6.022 × 10²³. A worked example, e.g. 88 g of CO₂ (molar mass 44 g/mol): moles = 88 ÷ 44 = 2 mol; molecules = 2 × 6.022 × 10²³ = 1.204 × 10²⁴. Award marks for the definitions, the conversion relationships, and a correct worked example.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry) — 6.7 Mass Percent Composition from a Chemical Formula (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/06:_Chemical_Composition/6.07:_Mass_Percent_Composition_from_a_Chemical_Formula)
      slug: "percentage-composition",
      title: "Percentage Composition",
      objective:
        "By the end of the topic, learners should be able to calculate the percentage by mass of each element in a compound from its formula. (MoE Grade 10 Period V, CONTENTS 4.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- The **percentage composition** tells us how much of each element is present in a compound by mass.
- **This topic:** calculating percent composition from a formula.

## The formula

**% by mass of an element = (mass of that element in one mole ÷ molar mass of the compound) × 100**

- Use the subscripts to find the total mass of each element in one mole.
- The percentages of all the elements add up to **100%**.

## Steps

1. Work out the **molar mass** of the compound.
2. Find the **total mass of each element** in one mole (atomic mass × subscript).
3. Divide each element's mass by the molar mass and **× 100**.

## Worked pattern (water, H₂O)

- Molar mass = 2(1) + 16 = 18 g/mol.
- Hydrogen: (2 ÷ 18) × 100 = **11.1%**.
- Oxygen: (16 ÷ 18) × 100 = **88.9%**. (Total = 100%.)

## Why it is useful

- Checks the **purity** of a compound (a pure compound always gives the same percentages — the law of definite proportions).
- Used to find fertiliser nutrient content, metal content of an ore, etc.

## Common errors and misconceptions

- **Forgetting the subscript** — multiply each element's atomic mass by how many atoms are in the formula.
- **Not dividing by the whole molar mass** — the denominator is the compound's total molar mass.
- **Percentages not adding to 100** — if they do not (allowing for rounding), recheck the arithmetic.
- **Confusing percent composition with empirical formula** — percent composition is by mass; the empirical formula is the simplest atom ratio.`,
      workedExample: `**Task.** Calculate the percentage by mass of each element in calcium carbonate, CaCO₃ (Ca = 40, C = 12, O = 16).

**Step 1 — Molar mass**
- CaCO₃ = 40 + 12 + 3(16) = 40 + 12 + 48 = **100 g/mol**.

**Step 2 — Mass of each element in one mole**
- Ca = 40; C = 12; O = 48 (3 × 16).

**Step 3 — Percentages**
- Ca: (40 ÷ 100) × 100 = **40%**.
- C: (12 ÷ 100) × 100 = **12%**.
- O: (48 ÷ 100) × 100 = **48%**.

**Check:** 40 + 12 + 48 = 100%. ✓

**Conclusion.** Calcium carbonate is 40% calcium, 12% carbon and 48% oxygen by mass.`,
      quiz: [
        {
          prompt: "Percentage composition gives the amount of each element by…",
          options: ["mass", "volume", "colour", "number of shells"],
          correctIndex: 0,
          explanation: "It is a percentage by mass.",
        },
        {
          prompt: "The percentages of all elements in a compound add up to…",
          options: ["100%", "50%", "0%", "the molar mass"],
          correctIndex: 0,
          explanation: "They total 100%.",
        },
        {
          prompt: "The denominator in the percent-composition formula is the…",
          options: ["molar mass of the compound", "atomic mass of one element", "Avogadro's number", "number of atoms"],
          correctIndex: 0,
          explanation: "Divide by the compound's molar mass.",
        },
        {
          prompt: "In H₂O, the percentage of oxygen is about…",
          options: ["88.9%", "11.1%", "50%", "16%"],
          correctIndex: 0,
          explanation: "(16 ÷ 18) × 100 = 88.9%.",
        },
        {
          prompt: "In H₂O, the percentage of hydrogen is about…",
          options: ["11.1%", "88.9%", "50%", "2%"],
          correctIndex: 0,
          explanation: "(2 ÷ 18) × 100 = 11.1%.",
        },
        {
          prompt: "The molar mass of CaCO₃ (Ca=40, C=12, O=16) is…",
          options: ["100 g/mol", "68 g/mol", "84 g/mol", "56 g/mol"],
          correctIndex: 0,
          explanation: "40 + 12 + 48 = 100 g/mol.",
        },
        {
          prompt: "In CaCO₃, the percentage of calcium is…",
          options: ["40%", "12%", "48%", "60%"],
          correctIndex: 0,
          explanation: "(40 ÷ 100) × 100 = 40%.",
        },
        {
          prompt: "To find the mass of oxygen in CaCO₃ you multiply 16 by…",
          options: ["3 (the subscript)", "1", "2", "4"],
          correctIndex: 0,
          explanation: "Three oxygen atoms: 3 × 16 = 48.",
        },
        {
          prompt: "Percent composition is the same for a pure compound because of the law of…",
          options: ["definite proportions", "multiple proportions", "octaves", "conservation of energy"],
          correctIndex: 0,
          explanation: "Fixed composition = definite proportions.",
        },
        {
          prompt: "The percentage of an element = (mass of element ÷ molar mass) ×…",
          options: ["100", "10", "1000", "Avogadro's number"],
          correctIndex: 0,
          explanation: "Multiply the fraction by 100 for a percentage.",
        },
        {
          prompt: "In CO₂ (C=12, O=16), the percentage of carbon is about…",
          options: ["27.3%", "72.7%", "50%", "12%"],
          correctIndex: 0,
          explanation: "(12 ÷ 44) × 100 = 27.3%.",
        },
        {
          prompt: "The first step in a percent-composition calculation is to find the…",
          options: ["molar mass of the compound", "number of molecules", "colour", "boiling point"],
          correctIndex: 0,
          explanation: "You need the molar mass first.",
        },
        {
          prompt: "A use of percent composition is to check a compound's…",
          options: ["purity", "colour", "temperature", "shape"],
          correctIndex: 0,
          explanation: "Impurities change the measured percentages.",
        },
        {
          prompt: "In NaCl (Na=23, Cl=35.5), the percentage of sodium is about…",
          options: ["39.3%", "60.7%", "50%", "23%"],
          correctIndex: 0,
          explanation: "(23 ÷ 58.5) × 100 ≈ 39.3%.",
        },
        {
          prompt: "If your element percentages add to 101% (not counting rounding), you should…",
          options: ["recheck the arithmetic", "accept it", "change the formula", "double the mass"],
          correctIndex: 0,
          explanation: "They must total 100% (allowing rounding).",
        },
        {
          prompt: "Percent composition differs from the empirical formula because it is expressed by…",
          options: ["mass, not atom ratio", "atom ratio, not mass", "volume", "moles only"],
          correctIndex: 0,
          explanation: "Percent composition is by mass.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The percentage by mass of an element is calculated as:",
          options: ["(mass of element in 1 mol ÷ molar mass) × 100", "molar mass ÷ mass of element", "moles × Avogadro's number", "mass × 100"],
          correctIndex: 0,
          answerKey: "Divide the element's mass by the compound's molar mass and multiply by 100.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In carbon dioxide (CO₂, molar mass 44), the percentage of oxygen is about:",
          options: ["72.7%", "27.3%", "50%", "32%"],
          correctIndex: 0,
          answerKey: "(32 ÷ 44) × 100 ≈ 72.7%.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Calculate the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃ (N=14, H=1, O=16).",
          answerKey:
            "Molar mass = 14 + 4(1) + 14 + 3(16) = 14 + 4 + 14 + 48 = 80 g/mol. Nitrogen mass = 2 × 14 = 28. %N = (28 ÷ 80) × 100 = 35%. Award marks for the molar mass, the nitrogen mass and the answer 35%.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Calculate the percentage by mass of each element in magnesium oxide, MgO (Mg=24, O=16).",
          answerKey:
            "Molar mass = 24 + 16 = 40 g/mol. %Mg = (24 ÷ 40) × 100 = 60%; %O = (16 ÷ 40) × 100 = 40%. Total 100%. Award marks for the molar mass and both percentages.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how to calculate the percentage composition of a compound and work through a full example, including the check that the percentages sum to 100%.",
          answerKey:
            "A full answer explains the method: find the molar mass of the compound, find the total mass contributed by each element (atomic mass × subscript), then divide each by the molar mass and multiply by 100; the percentages should sum to 100%. A worked example, e.g. CaCO₃ (molar mass 100): Ca = (40/100)×100 = 40%, C = (12/100)×100 = 12%, O = (48/100)×100 = 48%, total 100%. Award marks for the method, a correct worked calculation, and the 100% check.",
          marks: 6,
        },
      ],
    },
    {
      // source: OpenStax Chemistry 2e — 3.2 Determining Empirical and Molecular Formulas (https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas)
      slug: "empirical-and-molecular-formulae",
      title: "Empirical and Molecular Formulae",
      objective:
        "By the end of the topic, learners should be able to determine the empirical formula of a compound from its composition and find the molecular formula from the empirical formula and molar mass. (MoE Grade 10 Period V, CONTENTS 5.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- The **empirical formula** gives the simplest atom ratio; the **molecular formula** gives the actual atoms per molecule.
- **This topic:** finding the empirical formula from composition, and the molecular formula from molar mass.

## Definitions

- **Empirical formula** — the simplest whole-number ratio of atoms in a compound (glucose CH₂O).
- **Molecular formula** — the actual number of atoms of each element in a molecule (glucose C₆H₁₂O₆).
- The molecular formula is a **whole-number multiple** of the empirical formula.

## Finding the empirical formula

1. Write the **mass (or %)** of each element.
2. **Divide** each by its **atomic mass** → moles of each element.
3. **Divide** all by the **smallest** number of moles → simplest ratio.
4. If needed, multiply to get **whole numbers**.

## Finding the molecular formula

1. Find the **empirical formula mass** (the mass of one empirical unit).
2. **n = molar mass ÷ empirical formula mass.**
3. **Molecular formula = (empirical formula) × n.**

## Worked pattern

- A compound is 40% C, 6.7% H, 53.3% O (molar mass 60). In 100 g: C 40 g, H 6.7 g, O 53.3 g.
- Moles: C 40/12 = 3.33; H 6.7/1 = 6.7; O 53.3/16 = 3.33.
- Divide by smallest (3.33): C 1, H 2, O 1 → empirical formula **CH₂O** (mass 30).
- n = 60 ÷ 30 = 2 → molecular formula **C₂H₄O₂**.

## Common errors and misconceptions

- **Not dividing by the smallest** — always divide by the smallest mole value to get the ratio.
- **Rounding too early** — keep decimals until the final ratio; 3.33 : 6.7 : 3.33 rounds to 1 : 2 : 1.
- **Stopping at the empirical formula** — to get the molecular formula you also need the molar mass.
- **Confusing the two** — empirical is the simplest ratio; molecular is the actual count.`,
      workedExample: `**Task.** A compound contains 85.7% carbon and 14.3% hydrogen by mass and has a molar mass of 28 g/mol. Find its empirical and molecular formulae. (C = 12, H = 1.)

**Step 1 — Assume 100 g**
- Carbon: 85.7 g; hydrogen: 14.3 g.

**Step 2 — Moles of each element**
- C: 85.7 ÷ 12 = 7.14; H: 14.3 ÷ 1 = 14.3.

**Step 3 — Divide by the smallest (7.14)**
- C: 7.14 ÷ 7.14 = 1; H: 14.3 ÷ 7.14 = 2.
- **Empirical formula = CH₂** (empirical mass = 12 + 2 = 14).

**Step 4 — Molecular formula**
- n = molar mass ÷ empirical mass = 28 ÷ 14 = 2.
- Molecular formula = (CH₂) × 2 = **C₂H₄** (ethene).

**Conclusion.** The empirical formula is CH₂ and the molecular formula is C₂H₄.`,
      quiz: [
        {
          prompt: "The empirical formula gives the … ratio of atoms.",
          options: ["simplest whole-number", "actual", "largest", "mass"],
          correctIndex: 0,
          explanation: "Empirical = simplest whole-number ratio.",
        },
        {
          prompt: "The molecular formula gives the … number of atoms in a molecule.",
          options: ["actual", "simplest", "smallest", "average"],
          correctIndex: 0,
          explanation: "Molecular = the real count of atoms.",
        },
        {
          prompt: "The empirical formula of glucose (C₆H₁₂O₆) is…",
          options: ["CH₂O", "C₆H₁₂O₆", "C₂H₄O₂", "CHO"],
          correctIndex: 0,
          explanation: "Dividing by 6 gives CH₂O.",
        },
        {
          prompt: "The molecular formula is a whole-number … of the empirical formula.",
          options: ["multiple", "fraction", "square", "half"],
          correctIndex: 0,
          explanation: "Molecular = empirical × n.",
        },
        {
          prompt: "The first step in finding an empirical formula is to convert masses (or %) to…",
          options: ["moles", "grams", "molecules", "litres"],
          correctIndex: 0,
          explanation: "Divide by atomic mass to get moles.",
        },
        {
          prompt: "After finding moles, you divide each by the…",
          options: ["smallest number of moles", "largest", "molar mass", "Avogadro's number"],
          correctIndex: 0,
          explanation: "Divide by the smallest to get the ratio.",
        },
        {
          prompt: "To find n (the multiplier) you divide the molar mass by the…",
          options: ["empirical formula mass", "atomic mass of carbon", "Avogadro's number", "percentage"],
          correctIndex: 0,
          explanation: "n = molar mass ÷ empirical mass.",
        },
        {
          prompt: "If the empirical formula is CH₂O (mass 30) and molar mass is 60, then n is…",
          options: ["2", "1", "3", "30"],
          correctIndex: 0,
          explanation: "60 ÷ 30 = 2.",
        },
        {
          prompt: "The molecular formula when empirical is CH₂O and n = 2 is…",
          options: ["C₂H₄O₂", "CH₂O", "C₃H₆O₃", "C₄H₈O₄"],
          correctIndex: 0,
          explanation: "(CH₂O) × 2 = C₂H₄O₂.",
        },
        {
          prompt: "A ratio of 3.33 : 6.7 : 3.33 simplifies to…",
          options: ["1 : 2 : 1", "1 : 1 : 1", "2 : 3 : 2", "3 : 7 : 3"],
          correctIndex: 0,
          explanation: "Divide by 3.33.",
        },
        {
          prompt: "You should avoid … too early in the calculation.",
          options: ["rounding", "dividing", "multiplying", "reading the question"],
          correctIndex: 0,
          explanation: "Rounding early distorts the ratio.",
        },
        {
          prompt: "To get the molecular formula you also need the compound's…",
          options: ["molar mass", "colour", "boiling point", "density only"],
          correctIndex: 0,
          explanation: "n = molar mass ÷ empirical mass.",
        },
        {
          prompt: "The empirical formula of hydrogen peroxide (H₂O₂) is…",
          options: ["HO", "H₂O₂", "H₂O", "HO₂"],
          correctIndex: 0,
          explanation: "Divide subscripts by 2 → HO.",
        },
        {
          prompt: "If a compound's molecular and empirical formulae are the same, then n =…",
          options: ["1", "2", "0", "10"],
          correctIndex: 0,
          explanation: "They are equal when n = 1 (e.g. water).",
        },
        {
          prompt: "Empirical formula CH₂ with molar mass 42 gives molecular formula…",
          options: ["C₃H₆", "CH₂", "C₂H₄", "C₄H₈"],
          correctIndex: 0,
          explanation: "n = 42 ÷ 14 = 3 → C₃H₆.",
        },
        {
          prompt: "Percentage composition data can be used directly to find the…",
          options: ["empirical formula", "boiling point", "colour", "state"],
          correctIndex: 0,
          explanation: "Percentages give the mole ratio → empirical formula.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The empirical formula of a compound is the:",
          options: ["simplest whole-number ratio of atoms", "actual number of atoms in a molecule", "mass of one mole", "number of molecules"],
          correctIndex: 0,
          answerKey: "Empirical formula = simplest whole-number ratio.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "If the empirical formula is CH₂ (mass 14) and the molar mass is 56, the molecular formula is:",
          options: ["C₄H₈", "C₂H₄", "C₃H₆", "CH₂"],
          correctIndex: 0,
          answerKey: "n = 56 ÷ 14 = 4 → C₄H₈.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "A compound contains 40% sulfur and 60% oxygen by mass. Find its empirical formula (S=32, O=16).",
          answerKey:
            "In 100 g: S 40 g, O 60 g. Moles: S 40/32 = 1.25; O 60/16 = 3.75. Divide by smallest (1.25): S 1, O 3 → empirical formula SO₃. Award marks for the moles, the division, and SO₃.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the difference between an empirical formula and a molecular formula, and explain how to get one from the other.",
          answerKey:
            "The empirical formula is the simplest whole-number ratio of atoms; the molecular formula is the actual number of atoms in a molecule and is a whole-number multiple (n) of the empirical formula. To get the molecular formula, divide the compound's molar mass by the empirical formula mass to find n, then multiply each subscript in the empirical formula by n. Award marks for both definitions and the n = molar mass ÷ empirical mass method.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how to determine the empirical and molecular formulae of a compound from percentage composition and molar mass, using a full worked example.",
          answerKey:
            "A full answer explains the steps: assume 100 g so percentages become grams; divide each element's mass by its atomic mass to get moles; divide all by the smallest to get the simplest whole-number ratio (multiplying if needed) — this gives the empirical formula; find the empirical formula mass, then n = molar mass ÷ empirical formula mass; multiply the empirical formula by n to get the molecular formula. A worked example such as 40% C, 6.7% H, 53.3% O with molar mass 60: moles 3.33, 6.7, 3.33 → CH₂O (mass 30); n = 60/30 = 2 → C₂H₄O₂. Award marks for the empirical-formula method, the n calculation, and a correct worked example.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 19.1 Reversible Reaction (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/19:_Equilibrium/19.01:_Reversible_Reaction)
      slug: "kinds-of-chemical-reactions",
      title: "Kinds of Chemical Reactions: Reversible and Irreversible",
      objective:
        "By the end of the topic, learners should be able to distinguish reversible and irreversible reactions, use the correct arrow notation, and explain dynamic equilibrium. (MoE Grade 10 Period V, CONTENTS 6.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Some reactions go only one way; others can go both ways.
- **This topic:** reversible and irreversible reactions, arrow notation, and equilibrium.

## Irreversible reactions

- **Irreversible reaction** — the reactants change into products, and the products **cannot** easily turn back into reactants.
- Written with a **single arrow (→)**.
- Example: burning (combustion) — wood + oxygen → ash, gases (you cannot un-burn the wood).

## Reversible reactions

- **Reversible reaction** — the forward and backward reactions both occur; products can turn back into reactants.
- Written with a **double arrow (⇌)**.
- Example: N₂ + 3H₂ ⇌ 2NH₃ (the Haber process).

\`\`\`svg Irreversible vs reversible arrows
<svg viewBox="0 0 240 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Single arrow for irreversible and double arrow for reversible reactions">
  <text x="30" y="30" font-size="11" fill="#92400e">A + B</text>
  <line x1="70" y1="26" x2="120" y2="26" stroke="#92400e" stroke-width="2" marker-end="url(#s)"/>
  <text x="135" y="30" font-size="11" fill="#92400e">C (irreversible)</text>
  <text x="30" y="58" font-size="11" fill="#075985">A + B</text>
  <line x1="70" y1="52" x2="120" y2="52" stroke="#075985" stroke-width="2" marker-end="url(#s)"/>
  <line x1="120" y1="58" x2="70" y2="58" stroke="#075985" stroke-width="2" marker-end="url(#s2)"/>
  <text x="135" y="58" font-size="11" fill="#075985">C (reversible)</text>
  <defs>
    <marker id="s" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#92400e"/></marker>
    <marker id="s2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#075985"/></marker>
  </defs>
</svg>
\`\`\`

## Dynamic equilibrium

- In a **closed** system a reversible reaction reaches **equilibrium**, when the **forward and backward reactions occur at the same rate**.
- It is **dynamic** — both reactions keep happening, but the amounts of reactants and products stay constant.

## Common errors and misconceptions

- **Using the wrong arrow** — a single arrow (→) is irreversible; a double arrow (⇌) is reversible.
- **Thinking equilibrium means the reaction has stopped** — it is dynamic; both reactions continue at equal rates.
- **Thinking amounts are equal at equilibrium** — the *rates* are equal, not necessarily the amounts of reactants and products.
- **Assuming all reactions are reversible** — many everyday reactions (burning, rusting) are effectively irreversible.`,
      workedExample: `**Task.** Classify each reaction as reversible or irreversible, choose the right arrow, and explain equilibrium for the reversible one.
(i) Burning of methane; (ii) the Haber process for ammonia.

**(i) Burning of methane**
- CH₄ + 2O₂ → CO₂ + 2H₂O. The products cannot easily reform methane and oxygen, so it is **irreversible** — a **single arrow (→)**.

**(ii) Haber process**
- N₂ + 3H₂ ⇌ 2NH₃. Nitrogen and hydrogen form ammonia, and ammonia can decompose back, so it is **reversible** — a **double arrow (⇌)**.
- **Equilibrium:** in a closed vessel this reaches dynamic equilibrium, where the forward reaction (making NH₃) and the backward reaction (breaking it down) occur at the **same rate**, so the amounts of N₂, H₂ and NH₃ stay constant while both reactions continue.

**Conclusion.** Combustion of methane is irreversible (→); the Haber process is reversible (⇌) and reaches a dynamic equilibrium where forward and backward rates are equal.`,
      quiz: [
        {
          prompt: "An irreversible reaction is written with a…",
          options: ["single arrow (→)", "double arrow (⇌)", "equals sign", "plus sign"],
          correctIndex: 0,
          explanation: "Single arrow for one-way reactions.",
        },
        {
          prompt: "A reversible reaction is written with a…",
          options: ["double arrow (⇌)", "single arrow (→)", "minus sign", "question mark"],
          correctIndex: 0,
          explanation: "Double arrow shows both directions.",
        },
        {
          prompt: "In an irreversible reaction, the products…",
          options: ["cannot easily turn back into reactants", "always turn back", "disappear", "become reactants instantly"],
          correctIndex: 0,
          explanation: "It goes essentially one way.",
        },
        {
          prompt: "In a reversible reaction, the products…",
          options: ["can turn back into reactants", "are destroyed", "cannot form", "are always solid"],
          correctIndex: 0,
          explanation: "Both directions occur.",
        },
        {
          prompt: "Burning (combustion) is an example of a … reaction.",
          options: ["irreversible", "reversible", "neutralisation only", "displacement only"],
          correctIndex: 0,
          explanation: "You cannot un-burn a fuel.",
        },
        {
          prompt: "The Haber process (N₂ + 3H₂ ⇌ 2NH₃) is…",
          options: ["reversible", "irreversible", "a combustion", "a decomposition only"],
          correctIndex: 0,
          explanation: "It is written with a double arrow.",
        },
        {
          prompt: "Equilibrium is reached when the forward and backward reactions occur at…",
          options: ["the same rate", "different rates", "no rate", "increasing rates"],
          correctIndex: 0,
          explanation: "Equal rates define equilibrium.",
        },
        {
          prompt: "At equilibrium, the reaction is described as…",
          options: ["dynamic (both reactions continue)", "stopped", "finished", "explosive"],
          correctIndex: 0,
          explanation: "Both reactions keep going at equal rates.",
        },
        {
          prompt: "Reversible reactions reach equilibrium only in a … system.",
          options: ["closed", "open", "burning", "frozen"],
          correctIndex: 0,
          explanation: "A closed system keeps all species present.",
        },
        {
          prompt: "At equilibrium, the amounts of reactants and products…",
          options: ["stay constant", "become equal", "fall to zero", "always double"],
          correctIndex: 0,
          explanation: "Amounts are constant (not necessarily equal).",
        },
        {
          prompt: "The symbol ⇌ tells you the reaction is…",
          options: ["reversible", "irreversible", "explosive", "endothermic"],
          correctIndex: 0,
          explanation: "The double arrow marks reversibility.",
        },
        {
          prompt: "Which is most likely irreversible?",
          options: ["rusting of iron", "N₂ + 3H₂ ⇌ 2NH₃", "a reaction at equilibrium", "dissolving reversibly"],
          correctIndex: 0,
          explanation: "Rusting does not readily reverse.",
        },
        {
          prompt: "'Dynamic' equilibrium means…",
          options: ["the reactions never stop", "the reactions have stopped", "there are no products", "the container is open"],
          correctIndex: 0,
          explanation: "Both reactions continue at equal rates.",
        },
        {
          prompt: "A single arrow (→) means the reaction goes…",
          options: ["essentially one way", "both ways", "backwards only", "in a circle"],
          correctIndex: 0,
          explanation: "One-way (irreversible).",
        },
        {
          prompt: "At equilibrium the concentrations of reactants and products are…",
          options: ["constant over time", "always identical", "always zero", "always increasing"],
          correctIndex: 0,
          explanation: "They remain constant, though not necessarily equal.",
        },
        {
          prompt: "Which statement about equilibrium is correct?",
          options: ["forward and reverse rates are equal", "only the forward reaction occurs", "the reaction has ended", "no products are present"],
          correctIndex: 0,
          explanation: "Equal forward and reverse rates.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A reversible reaction is indicated by:",
          options: ["a double arrow (⇌)", "a single arrow (→)", "an equals sign", "a plus sign"],
          correctIndex: 0,
          answerKey: "The double arrow ⇌ shows a reversible reaction.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "At dynamic equilibrium:",
          options: ["the forward and reverse reactions occur at equal rates", "the reaction stops", "all reactants are used up", "no products form"],
          correctIndex: 0,
          answerKey: "Equal forward and reverse rates; the reactions continue (dynamic).",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Distinguish between a reversible and an irreversible reaction, giving the arrow used for each.",
          answerKey:
            "An irreversible reaction goes essentially one way — reactants form products that do not readily turn back — and is written with a single arrow (→). A reversible reaction can proceed in both directions, products reforming reactants, and is written with a double arrow (⇌). Award marks for both descriptions and both arrows.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what is meant by dynamic equilibrium.",
          answerKey:
            "Dynamic equilibrium is reached in a closed system when the forward and backward reactions of a reversible reaction occur at the same rate, so the amounts (concentrations) of reactants and products stay constant. It is 'dynamic' because both reactions continue to happen — the reaction has not stopped. Award marks for equal rates, constant amounts, and the reactions continuing.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare reversible and irreversible reactions with examples, and explain how a reversible reaction reaches dynamic equilibrium.",
          answerKey:
            "A full answer explains that an irreversible reaction proceeds essentially one way (single arrow →), the products not readily reforming the reactants — for example the combustion of methane (CH₄ + 2O₂ → CO₂ + 2H₂O) or the rusting of iron. A reversible reaction (double arrow ⇌) proceeds in both directions — for example the Haber process N₂ + 3H₂ ⇌ 2NH₃. In a closed system a reversible reaction reaches dynamic equilibrium when the forward and backward reactions occur at the same rate, so the concentrations of reactants and products remain constant even though both reactions continue. Award marks for the comparison with examples, the arrow notation, and the correct explanation of dynamic equilibrium.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry) — 7.10 Classifying Chemical Reactions (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/07:_Chemical_Reactions/7.10:_Classifying_Chemical_Reactions)
      slug: "types-of-chemical-reactions",
      title: "Types of Chemical Reactions",
      objective:
        "By the end of the topic, learners should be able to identify the main types of chemical reaction — combination, decomposition, single replacement, double replacement and combustion. (MoE Grade 10 Period V, CONTENTS 7.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- Most reactions fall into a few recognisable **types**, which help predict products.
- **This topic:** combination, decomposition, single and double replacement, and combustion.

## The main types

| Type | General pattern | Example |
|---|---|---|
| **Combination (synthesis)** | A + B → AB | 2H₂ + O₂ → 2H₂O |
| **Decomposition** | AB → A + B | 2H₂O₂ → 2H₂O + O₂ |
| **Single replacement** | A + BC → AC + B | Zn + 2HCl → ZnCl₂ + H₂ |
| **Double replacement (metathesis)** | AB + CD → AD + CB | AgNO₃ + NaCl → AgCl + NaNO₃ |
| **Combustion** | fuel + O₂ → CO₂ + H₂O | CH₄ + 2O₂ → CO₂ + 2H₂O |

## Notes on each type

- **Combination:** two or more substances join into **one** product.
- **Decomposition:** one compound **breaks down** into two or more products (often by heat or electricity).
- **Single replacement:** a more reactive element **displaces** a less reactive one from a compound.
- **Double replacement:** the positive and negative parts of two compounds **swap partners**; often forms a precipitate, gas or water.
- **Combustion:** a fuel reacts with oxygen, releasing heat and light; hydrocarbons give CO₂ and H₂O.

Many of these are also **redox** reactions (electron transfer), covered in Period VI.

## Common errors and misconceptions

- **Confusing combination and decomposition** — combination joins into one product; decomposition breaks one into several.
- **Mixing single and double replacement** — single: an element + a compound; double: two compounds swap ions.
- **Forgetting combustion needs oxygen** — combustion is reaction *with oxygen*, releasing energy.
- **Assuming a type from names alone** — check the pattern of reactants and products.`,
      workedExample: `**Task.** Classify each reaction by type: (a) CaCO₃ → CaO + CO₂; (b) Zn + CuSO₄ → ZnSO₄ + Cu; (c) HCl + NaOH → NaCl + H₂O; (d) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.

**(a) CaCO₃ → CaO + CO₂**
- One compound breaks into two → **decomposition**.

**(b) Zn + CuSO₄ → ZnSO₄ + Cu**
- An element (Zn) displaces another (Cu) from a compound → **single replacement**.

**(c) HCl + NaOH → NaCl + H₂O**
- Two compounds swap partners, forming a salt and water → **double replacement** (a neutralisation).

**(d) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O**
- A fuel reacts with oxygen to give CO₂ and water → **combustion**.

**Conclusion.** (a) decomposition, (b) single replacement, (c) double replacement, (d) combustion — each identified from the pattern of reactants and products.`,
      quiz: [
        {
          prompt: "A reaction where two substances join to form one is…",
          options: ["combination (synthesis)", "decomposition", "single replacement", "combustion"],
          correctIndex: 0,
          explanation: "A + B → AB is combination.",
        },
        {
          prompt: "A reaction where one compound breaks into two or more is…",
          options: ["decomposition", "combination", "double replacement", "combustion"],
          correctIndex: 0,
          explanation: "AB → A + B is decomposition.",
        },
        {
          prompt: "The pattern A + BC → AC + B describes…",
          options: ["single replacement", "double replacement", "combination", "decomposition"],
          correctIndex: 0,
          explanation: "One element displaces another.",
        },
        {
          prompt: "The pattern AB + CD → AD + CB describes…",
          options: ["double replacement", "single replacement", "combination", "combustion"],
          correctIndex: 0,
          explanation: "Two compounds swap partners.",
        },
        {
          prompt: "A fuel reacting with oxygen, releasing heat and light, is…",
          options: ["combustion", "decomposition", "single replacement", "combination"],
          correctIndex: 0,
          explanation: "Combustion is reaction with oxygen.",
        },
        {
          prompt: "2H₂ + O₂ → 2H₂O is a … reaction.",
          options: ["combination", "decomposition", "double replacement", "combustion only"],
          correctIndex: 0,
          explanation: "Two substances form one product.",
        },
        {
          prompt: "2H₂O₂ → 2H₂O + O₂ is a … reaction.",
          options: ["decomposition", "combination", "single replacement", "combustion"],
          correctIndex: 0,
          explanation: "One compound breaks down.",
        },
        {
          prompt: "Zn + 2HCl → ZnCl₂ + H₂ is a … reaction.",
          options: ["single replacement", "double replacement", "combination", "decomposition"],
          correctIndex: 0,
          explanation: "Zinc displaces hydrogen.",
        },
        {
          prompt: "AgNO₃ + NaCl → AgCl + NaNO₃ is a … reaction.",
          options: ["double replacement", "single replacement", "combination", "combustion"],
          correctIndex: 0,
          explanation: "The compounds swap ions (and form a precipitate).",
        },
        {
          prompt: "CH₄ + 2O₂ → CO₂ + 2H₂O is a … reaction.",
          options: ["combustion", "decomposition", "combination", "double replacement"],
          correctIndex: 0,
          explanation: "A hydrocarbon burns in oxygen.",
        },
        {
          prompt: "In single replacement, the element that displaces another must be…",
          options: ["more reactive", "less reactive", "a gas", "a liquid"],
          correctIndex: 0,
          explanation: "A more reactive element displaces a less reactive one.",
        },
        {
          prompt: "Complete combustion of a hydrocarbon gives carbon dioxide and…",
          options: ["water", "hydrogen", "carbon", "ammonia"],
          correctIndex: 0,
          explanation: "CO₂ and H₂O are the products.",
        },
        {
          prompt: "Decomposition often needs an input of…",
          options: ["heat or electricity", "water only", "a catalyst always", "sunlight only"],
          correctIndex: 0,
          explanation: "Energy breaks the compound apart.",
        },
        {
          prompt: "A neutralisation (acid + base → salt + water) is a type of…",
          options: ["double replacement", "single replacement", "combustion", "combination"],
          correctIndex: 0,
          explanation: "Ions swap partners to form salt and water.",
        },
        {
          prompt: "Which type produces a single product?",
          options: ["combination", "decomposition", "double replacement", "single replacement"],
          correctIndex: 0,
          explanation: "Combination forms one product.",
        },
        {
          prompt: "Many of these reaction types are also examples of…",
          options: ["redox (electron transfer)", "distillation", "filtration", "sublimation"],
          correctIndex: 0,
          explanation: "Combustion and replacement are often redox.",
        },
        {
          prompt: "The reaction 2Na + Cl₂ → 2NaCl is best classed as…",
          options: ["combination", "decomposition", "double replacement", "combustion"],
          correctIndex: 0,
          explanation: "Two elements combine into one compound.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The reaction 2H₂O₂ → 2H₂O + O₂ is best classified as:",
          options: ["decomposition", "combination", "single replacement", "combustion"],
          correctIndex: 0,
          answerKey: "One compound breaks into two products — decomposition.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Zn + 2HCl → ZnCl₂ + H₂ is a:",
          options: ["single replacement reaction", "double replacement reaction", "combination reaction", "decomposition reaction"],
          correctIndex: 0,
          answerKey: "An element (Zn) displaces hydrogen — single replacement.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the five main types of chemical reaction and give the general pattern of each.",
          answerKey:
            "Combination A + B → AB; decomposition AB → A + B; single replacement A + BC → AC + B; double replacement AB + CD → AD + CB; combustion fuel + O₂ → CO₂ + H₂O. Award marks for correct names and patterns (partial credit for four).",
          marks: 5,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Classify: (a) 2Mg + O₂ → 2MgO and (b) BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl.",
          answerKey:
            "(a) Combination (two substances form one product / also combustion of a metal). (b) Double replacement (the compounds swap ions, forming a BaSO₄ precipitate). Award a mark for each correct classification.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the five main types of chemical reaction, giving a balanced example and the key feature of each.",
          answerKey:
            "A full answer describes: combination/synthesis — two or more substances join into one product (2H₂ + O₂ → 2H₂O); decomposition — one compound breaks into two or more, often by heat/electricity (2H₂O₂ → 2H₂O + O₂); single replacement — a more reactive element displaces a less reactive one from a compound (Zn + 2HCl → ZnCl₂ + H₂); double replacement/metathesis — two compounds swap their ions, often forming a precipitate, gas or water (AgNO₃ + NaCl → AgCl + NaNO₃); combustion — a fuel reacts with oxygen releasing heat and light, hydrocarbons giving CO₂ and H₂O (CH₄ + 2O₂ → CO₂ + 2H₂O). Award marks for each type with a valid example and its key feature.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry) — 7.4 How to Write Balanced Chemical Equations (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/07:_Chemical_Reactions/7.04:_How_to_Write_Balanced_Chemical_Equations)
      slug: "writing-and-balancing-equations",
      title: "Writing and Balancing Chemical Equations",
      objective:
        "By the end of the topic, learners should be able to write chemical equations and balance them by adjusting coefficients so that atoms are conserved. (MoE Grade 10 Period V, CONTENTS 8.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- A **chemical equation** describes a reaction using formulae; it must **balance** (law of conservation of mass).
- **This topic:** writing equations and balancing them with coefficients.

## Parts of an equation

- **Reactants** (left) → **products** (right), joined by an arrow.
- **Coefficients** — the big numbers in front of formulae; they say how many of each are involved.
- **Subscripts** — inside a formula, they cannot be changed to balance an equation.

## Why we balance

- Atoms are **neither created nor destroyed**, so each element must have the **same number of atoms on both sides**.
- We balance by changing **coefficients only**, never subscripts.

## Steps to balance

1. Write the correct formulae for reactants and products.
2. **Count** the atoms of each element on each side.
3. Add **coefficients** to make the counts equal — balance the most complex formula first, elements alone last.
4. **Check** every element balances and the coefficients are the **simplest whole numbers**.

## Worked pattern

- Unbalanced: H₂ + O₂ → H₂O.
- O: 2 left, 1 right → put 2 before H₂O: H₂ + O₂ → 2H₂O.
- Now H: 2 left, 4 right → put 2 before H₂: 2H₂ + O₂ → 2H₂O.
- Check: H 4 = 4, O 2 = 2. **Balanced.**

## Common errors and misconceptions

- **Changing subscripts** — never change a formula's subscripts to balance; change only the coefficients.
- **Forgetting to recount** — after adding a coefficient, recount all elements.
- **Leaving non-simplest coefficients** — divide through to the simplest whole-number ratio.
- **Miscounting atoms in a group** — a coefficient multiplies everything in the formula, e.g. 2Ca(OH)₂ has 4 O and 4 H.`,
      workedExample: `**Task.** Balance the equation for the combustion of methane: CH₄ + O₂ → CO₂ + H₂O.

**Step 1 — Count atoms (unbalanced)**
- Left: C 1, H 4, O 2. Right: C 1, H 2, O 3.

**Step 2 — Balance hydrogen**
- Right has 2 H; put **2** before H₂O: CH₄ + O₂ → CO₂ + 2H₂O. Now H: 4 = 4.

**Step 3 — Balance oxygen**
- Right now has 2 (in CO₂) + 2 (in 2H₂O) = 4 O. Put **2** before O₂: CH₄ + 2O₂ → CO₂ + 2H₂O.

**Step 4 — Check**
- C: 1 = 1; H: 4 = 4; O: 4 = 4. **Balanced.**

**Conclusion.** The balanced equation is CH₄ + 2O₂ → CO₂ + 2H₂O, obtained by adjusting coefficients only.`,
      quiz: [
        {
          prompt: "A chemical equation must be balanced because of the law of…",
          options: ["conservation of mass", "multiple proportions", "octaves", "definite proportions"],
          correctIndex: 0,
          explanation: "Atoms (mass) are conserved.",
        },
        {
          prompt: "To balance an equation you change the…",
          options: ["coefficients", "subscripts", "symbols", "arrow"],
          correctIndex: 0,
          explanation: "Only coefficients may be changed.",
        },
        {
          prompt: "You must NEVER change the … to balance an equation.",
          options: ["subscripts", "coefficients", "reactant order", "state symbols"],
          correctIndex: 0,
          explanation: "Changing subscripts changes the substance.",
        },
        {
          prompt: "In a balanced equation, each element has … atoms on both sides.",
          options: ["equal numbers of", "more", "fewer", "no"],
          correctIndex: 0,
          explanation: "Atoms are conserved.",
        },
        {
          prompt: "The big number in front of a formula is the…",
          options: ["coefficient", "subscript", "charge", "index"],
          correctIndex: 0,
          explanation: "Coefficients count whole formula units.",
        },
        {
          prompt: "Balance H₂ + O₂ → H₂O. The correct balanced equation is…",
          options: ["2H₂ + O₂ → 2H₂O", "H₂ + O₂ → H₂O", "H₂ + 2O₂ → 2H₂O", "2H₂ + 2O₂ → 2H₂O"],
          correctIndex: 0,
          explanation: "2H₂ + O₂ → 2H₂O balances H and O.",
        },
        {
          prompt: "In the balanced equation CH₄ + 2O₂ → CO₂ + 2H₂O, the number of O atoms on each side is…",
          options: ["4", "2", "3", "6"],
          correctIndex: 0,
          explanation: "Right: 2 + 2 = 4; left: 2 × 2 = 4.",
        },
        {
          prompt: "The coefficient in 2Ca(OH)₂ means there are … oxygen atoms.",
          options: ["4", "2", "1", "8"],
          correctIndex: 0,
          explanation: "2 × 2 = 4 O atoms.",
        },
        {
          prompt: "Coefficients in a balanced equation should be the…",
          options: ["simplest whole numbers", "largest possible", "fractions", "decimals"],
          correctIndex: 0,
          explanation: "Use the simplest whole-number ratio.",
        },
        {
          prompt: "After adding a coefficient you should…",
          options: ["recount all the atoms", "stop immediately", "change a subscript", "reverse the arrow"],
          correctIndex: 0,
          explanation: "Recount to check the balance.",
        },
        {
          prompt: "Reactants are written on the … of the arrow.",
          options: ["left", "right", "top", "bottom"],
          correctIndex: 0,
          explanation: "Reactants left, products right.",
        },
        {
          prompt: "Balance N₂ + H₂ → NH₃. The balanced equation is…",
          options: ["N₂ + 3H₂ → 2NH₃", "N₂ + H₂ → NH₃", "N₂ + 2H₂ → 2NH₃", "2N₂ + 3H₂ → 2NH₃"],
          correctIndex: 0,
          explanation: "N₂ + 3H₂ → 2NH₃ balances N and H.",
        },
        {
          prompt: "A good strategy is to balance the most complex formula…",
          options: ["first", "last", "never", "twice"],
          correctIndex: 0,
          explanation: "Balance the complex formula first, elements last.",
        },
        {
          prompt: "Balancing does NOT change the…",
          options: ["identity of the substances", "coefficients", "number of molecules", "atom counts on each side"],
          correctIndex: 0,
          explanation: "Formulae (identities) stay the same.",
        },
        {
          prompt: "In 3H₂O there are … hydrogen atoms.",
          options: ["6", "3", "2", "9"],
          correctIndex: 0,
          explanation: "3 × 2 = 6 H atoms.",
        },
        {
          prompt: "Balance Mg + O₂ → MgO. The balanced equation is…",
          options: ["2Mg + O₂ → 2MgO", "Mg + O₂ → MgO", "Mg + 2O₂ → MgO", "2Mg + 2O₂ → 2MgO"],
          correctIndex: 0,
          explanation: "2Mg + O₂ → 2MgO balances Mg and O.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "To balance a chemical equation, you may change only the:",
          options: ["coefficients", "subscripts", "chemical symbols", "arrow"],
          correctIndex: 0,
          answerKey: "Only coefficients may be changed; subscripts define the substances.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the balanced equation for the reaction of nitrogen and hydrogen to form ammonia?",
          options: ["N₂ + 3H₂ → 2NH₃", "N₂ + H₂ → NH₃", "N₂ + 2H₂ → 2NH₃", "2N₂ + H₂ → 2NH₃"],
          correctIndex: 0,
          answerKey: "N₂ + 3H₂ → 2NH₃ balances 2 N and 6 H on each side.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Balance the equation: Fe + O₂ → Fe₂O₃.",
          answerKey:
            "4Fe + 3O₂ → 2Fe₂O₃. Check: Fe 4 = 4; O 6 = 6. Award marks for correct coefficients and a balance check.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why the subscripts in a formula must not be changed when balancing an equation.",
          answerKey:
            "The subscripts define the identity of the substance (e.g. H₂O is water, but H₂O₂ is hydrogen peroxide — a different compound). Changing a subscript would change what the substance is, not just how much of it there is. Balancing must keep the same substances, so only the coefficients (the amounts) are changed. Award marks for the identity-vs-amount distinction.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the steps for balancing a chemical equation and why balancing is necessary, using the combustion of propane (C₃H₈ + O₂ → CO₂ + H₂O) as your example.",
          answerKey:
            "A full answer explains that balancing is required by the law of conservation of mass — atoms are neither created nor destroyed, so each element must have equal atoms on both sides — and that this is achieved by adjusting coefficients only (never subscripts). Steps: write correct formulae; count atoms; add coefficients (complex formula first, elements last); check and simplify. Applied to propane: balance carbon (3CO₂), then hydrogen (4H₂O), then oxygen (right has 6 + 4 = 10 O → 5O₂), giving C₃H₈ + 5O₂ → 3CO₂ + 4H₂O; check C 3 = 3, H 8 = 8, O 10 = 10. Award marks for the conservation-of-mass reason, the coefficient-only rule, the steps, and the correctly balanced example.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 5.2 Limiting and Excess Reagents (https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402%3A_General_Chemistry_1_(Belford)/Text/05%3A_Stoichiometry-_Quantitative_Information_about_Chemical_Reactions/5.02%3A_Limiting_and_Excess_Reagents)
      slug: "limiting-reactants",
      title: "Limiting Reactants",
      objective:
        "By the end of the topic, learners should be able to identify the limiting and excess reactant in a reaction and use it to work out the amount of product formed. (MoE Grade 10 Period V, CONTENTS 9.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- When reactants are not mixed in the exact ratio, one runs out first and stops the reaction.
- **This topic:** the limiting reactant, the excess reactant, and using them to find the product.

## Key terms

- **Limiting reactant (reagent)** — the reactant that is **completely used up** first; it **limits** how much product forms.
- **Excess reactant** — the reactant that is **left over** when the reaction stops.
- The amount of product is decided by the **limiting reactant**.

## How to find the limiting reactant

1. Write the **balanced equation** (it gives the mole ratio).
2. Convert each reactant's amount to **moles**.
3. Compare the **mole ratio available** with the ratio **required** by the equation.
4. The reactant that provides **less** than needed is the **limiting** reactant; use it to calculate the product.

## Analogy

- To make a "sandwich" needing 2 slices of bread + 1 filling: with 10 slices and 3 fillings you can make only **3** sandwiches — the filling is limiting, and 4 slices are left over (excess).

## Worked pattern

- 2H₂ + O₂ → 2H₂O. You have 3 mol H₂ and 2 mol O₂.
- Ratio needed: 2 H₂ : 1 O₂. For 3 mol H₂ you need 1.5 mol O₂; you have 2 mol, so **H₂ is limiting** (O₂ is in excess).
- Product: 3 mol H₂ → 3 mol H₂O (from the 2 : 2 ratio).

## Common errors and misconceptions

- **Comparing masses instead of moles** — always convert to **moles** and use the balanced ratio.
- **Forgetting the mole ratio** — the equation's coefficients set how much of each is needed.
- **Using the excess reactant to find product** — always base the product on the **limiting** reactant.
- **Thinking equal moles means neither is limiting** — check against the **ratio**, not just equal amounts.`,
      workedExample: `**Task.** 4 mol of hydrogen react with 1 mol of nitrogen: N₂ + 3H₂ → 2NH₃. Find the limiting reactant and the moles of ammonia formed.

**Step 1 — Balanced ratio**
- N₂ + 3H₂ → 2NH₃: 1 N₂ needs 3 H₂.

**Step 2 — Compare what is available**
- For 1 mol N₂ you need 3 mol H₂; you have 4 mol H₂ — more than enough.
- For 4 mol H₂ you would need 4 ÷ 3 = 1.33 mol N₂; you only have 1 mol.
- So **nitrogen (N₂) is the limiting reactant**; hydrogen is in excess.

**Step 3 — Product from the limiting reactant**
- 1 mol N₂ → 2 mol NH₃ (ratio 1 : 2).
- **2 mol of ammonia** are formed.

**Step 4 — Excess**
- H₂ used = 3 mol (for 1 mol N₂); H₂ left over = 4 − 3 = **1 mol** (excess).

**Conclusion.** Nitrogen is limiting, hydrogen is in excess (1 mol left), and 2 mol of ammonia are produced.`,
      quiz: [
        {
          prompt: "The limiting reactant is the one that is…",
          options: ["completely used up first", "left over", "a catalyst", "the largest mass"],
          correctIndex: 0,
          explanation: "It runs out first and limits the product.",
        },
        {
          prompt: "The excess reactant is the one that is…",
          options: ["left over at the end", "used up first", "a gas only", "the product"],
          correctIndex: 0,
          explanation: "Some of it remains unreacted.",
        },
        {
          prompt: "The amount of product is determined by the…",
          options: ["limiting reactant", "excess reactant", "catalyst", "container size"],
          correctIndex: 0,
          explanation: "The limiting reactant sets the maximum product.",
        },
        {
          prompt: "To find the limiting reactant you compare amounts in…",
          options: ["moles, using the balanced ratio", "grams only", "litres only", "colours"],
          correctIndex: 0,
          explanation: "Convert to moles and use the mole ratio.",
        },
        {
          prompt: "The mole ratio needed comes from the…",
          options: ["balanced equation's coefficients", "subscripts only", "atomic masses", "Avogadro's number"],
          correctIndex: 0,
          explanation: "Coefficients give the reacting ratio.",
        },
        {
          prompt: "In 2H₂ + O₂ → 2H₂O with 3 mol H₂ and 2 mol O₂, the limiting reactant is…",
          options: ["H₂", "O₂", "H₂O", "neither"],
          correctIndex: 0,
          explanation: "3 mol H₂ needs only 1.5 mol O₂, so H₂ runs out first.",
        },
        {
          prompt: "The reactant left over is described as being in…",
          options: ["excess", "deficit", "equilibrium", "solution"],
          correctIndex: 0,
          explanation: "The surplus reactant is in excess.",
        },
        {
          prompt: "You should base the product calculation on the…",
          options: ["limiting reactant", "excess reactant", "heaviest reactant", "catalyst"],
          correctIndex: 0,
          explanation: "The limiting reactant fixes the product amount.",
        },
        {
          prompt: "For N₂ + 3H₂ → 2NH₃ with 1 mol N₂ and 4 mol H₂, the limiting reactant is…",
          options: ["N₂", "H₂", "NH₃", "neither"],
          correctIndex: 0,
          explanation: "1 mol N₂ needs 3 mol H₂; H₂ is in excess, N₂ limiting.",
        },
        {
          prompt: "For N₂ + 3H₂ → 2NH₃ with 1 mol N₂ limiting, the ammonia formed is…",
          options: ["2 mol", "1 mol", "3 mol", "4 mol"],
          correctIndex: 0,
          explanation: "1 N₂ → 2 NH₃.",
        },
        {
          prompt: "Comparing only masses (not moles) to find the limiting reactant is…",
          options: ["a mistake", "correct", "faster and correct", "required"],
          correctIndex: 0,
          explanation: "You must use moles and the balanced ratio.",
        },
        {
          prompt: "Excess reactant remaining = initial amount −…",
          options: ["amount reacted", "product formed", "molar mass", "the limiting reactant"],
          correctIndex: 0,
          explanation: "Subtract what reacted from the starting amount.",
        },
        {
          prompt: "In a sandwich analogy needing 2 bread + 1 filling, with 10 bread and 3 fillings the limiting 'reactant' is…",
          options: ["the filling", "the bread", "both", "neither"],
          correctIndex: 0,
          explanation: "Only 3 sandwiches possible — the filling limits.",
        },
        {
          prompt: "If two reactants are in exactly the stoichiometric ratio, then…",
          options: ["neither is in excess", "both are limiting", "no reaction happens", "the product is zero"],
          correctIndex: 0,
          explanation: "They are used up together.",
        },
        {
          prompt: "The first step in a limiting-reactant problem is to…",
          options: ["write the balanced equation", "guess the answer", "measure temperature", "add a catalyst"],
          correctIndex: 0,
          explanation: "The balanced equation gives the mole ratio.",
        },
        {
          prompt: "The limiting reactant controls the … of product.",
          options: ["maximum amount", "colour", "temperature", "state"],
          correctIndex: 0,
          explanation: "It caps how much product can form.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The limiting reactant in a reaction is the one that:",
          options: ["is completely used up first", "is left over", "acts as a catalyst", "has the greatest mass"],
          correctIndex: 0,
          answerKey: "It runs out first and limits the amount of product.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In 2H₂ + O₂ → 2H₂O, if you have 4 mol H₂ and 1 mol O₂, the limiting reactant is:",
          options: ["O₂", "H₂", "H₂O", "neither"],
          correctIndex: 0,
          answerKey: "4 mol H₂ needs 2 mol O₂, but only 1 mol O₂ is present, so O₂ is limiting.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define the limiting reactant and the excess reactant.",
          answerKey:
            "The limiting reactant is the reactant that is completely used up first and so limits (determines) the amount of product formed. The excess reactant is the reactant that is left over when the reaction stops. Award marks for each correct definition.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "For N₂ + 3H₂ → 2NH₃, you start with 2 mol N₂ and 3 mol H₂. Identify the limiting reactant and the moles of NH₃ formed.",
          answerKey:
            "For 2 mol N₂ you would need 6 mol H₂, but only 3 mol H₂ is available, so H₂ is the limiting reactant (N₂ is in excess). 3 mol H₂ produces (2/3 × 3) = 2 mol NH₃. Award marks for identifying H₂ as limiting and calculating 2 mol NH₃.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what is meant by a limiting reactant and describe, with a worked example, how to identify it and use it to find the amount of product.",
          answerKey:
            "A full answer explains that the limiting reactant is the one completely used up first, which determines how much product forms, while the excess reactant is left over. The method: write the balanced equation (for the mole ratio), convert each reactant to moles, and compare the available ratio with the required ratio; the reactant that provides less than needed is limiting, and the product is calculated from it. A worked example, e.g. N₂ + 3H₂ → 2NH₃ with 1 mol N₂ and 4 mol H₂: 1 mol N₂ needs 3 mol H₂ (have 4), so N₂ is limiting; 1 mol N₂ gives 2 mol NH₃, with 1 mol H₂ left over. Award marks for the definitions, the mole-ratio method, and a correct worked example.",
          marks: 6,
        },
      ],
    },
  ],
};
