import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester Two, Period V: Atoms, Molecules, Ions and Stoichiometry.
export const chemistryG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Atoms, Molecules, Ions and Stoichiometry",
  summary:
    "Period V of the MoE Grade 10 Chemistry syllabus. Learners distinguish atoms, molecules and ions, write and interpret chemical formulae, and use relative atomic mass and the idea of the mole to do simple stoichiometry — the quantitative side of chemistry.",
  topics: [
    {
      slug: "atoms-molecules-and-ions",
      title: "Atoms, Molecules, Ions and Chemical Formulae",
      objective:
        "By the end of the topic, learners should be able to distinguish atoms, molecules and ions, interpret a chemical formula, and name simple compounds.",
      estimatedMinutes: 150,
      notes: `## Introduction

Chemistry has its own written language. Just as words are built from letters, every substance is written as a **chemical formula** built from element symbols and numbers — H₂O, NaCl, CO₂. To read and write these formulae you first need to be clear about the three basic particles they describe: the **atom**, the **molecule** and the **ion**. This topic distinguishes the three, shows how to interpret a formula, and names simple compounds.

## Atoms, molecules and ions

Three basic particles describe matter in chemistry:

- An **atom** is the smallest particle of an **element** (from Period II). Example: a single atom of oxygen, O.
- A **molecule** is **two or more atoms joined by covalent bonds**. It may be atoms of the **same** element (e.g. **O₂**, an oxygen molecule) or **different** elements (e.g. **H₂O**, a water molecule).
- An **ion** is an atom (or group of atoms) that has **gained or lost electrons**, so it carries a **charge** (from the bonding in Period IV). Example: **Na⁺** (a positive ion) and **Cl⁻** (a negative ion).

## Chemical symbols and formulae

- Each element has a **symbol**: H (hydrogen), O (oxygen), C (carbon), Na (sodium), Cl (chlorine).
- A **chemical formula** shows the kinds and numbers of atoms in a substance.
  - **H₂O** — 2 hydrogen atoms and 1 oxygen atom.
  - **CO₂** — 1 carbon atom and 2 oxygen atoms.
  - **H₂SO₄** — 2 hydrogen, 1 sulfur, 4 oxygen atoms.

The **small number (subscript)** after a symbol tells how many of that atom there are. A **big number in front** multiplies the whole formula: **2H₂O** means 2 water molecules (4 H and 2 O in total).

## Common ions and their charges

| Positive ions | Charge | Negative ions | Charge |
|---|---|---|---|
| sodium Na⁺ | +1 | chloride Cl⁻ | −1 |
| potassium K⁺ | +1 | hydroxide OH⁻ | −1 |
| calcium Ca²⁺ | +2 | oxide O²⁻ | −2 |
| aluminium Al³⁺ | +3 | sulfate SO₄²⁻ | −2 |

## Writing formulae of ionic compounds

In an ionic compound the **total positive charge must balance the total negative charge**. Combine the ions so the charges cancel:

- Na⁺ and Cl⁻ → **NaCl** (charges +1 and −1 balance).
- Ca²⁺ and Cl⁻ → **CaCl₂** (one Ca²⁺ needs two Cl⁻ to balance).
- Al³⁺ and O²⁻ → **Al₂O₃** (a common technique: swap the numbers of the charges).

## Naming simple compounds

- A metal + a non-metal: name the metal, then the non-metal ending in **-ide**: sodium + chlorine → **sodium chloride**; magnesium + oxygen → **magnesium oxide**.
- Compounds with oxygen in a group often end in **-ate**: sulfate, carbonate, nitrate.

## Common errors and misconceptions

- **Confusing a subscript with a coefficient** — in **2H₂O**, the small **2** (subscript) means two atoms *within* the molecule; the big **2** in front means *two molecules*. They change different things.
- **Muddling molecule and compound** — a **molecule** can be one element (O₂); a **compound** always has *different* elements chemically joined.
- **Getting ion charges backwards** — a metal *loses* electrons to form a **positive** ion; a non-metal *gains* electrons to form a **negative** ion.
- **Writing formulae without balancing charge** — in an ionic formula the total positive and negative charge must cancel (Al³⁺ and O²⁻ give Al₂O₃).`,
      workedExample: `**Task.** (a) State whether each is an atom, a molecule or an ion: O, O₂, Na⁺, H₂O. (b) Write the formula of the compound formed between calcium (Ca²⁺) and chloride (Cl⁻), and name it.

**Part (a) — classify each particle**
- **O** → an **atom** (a single atom of the element oxygen).
- **O₂** → a **molecule** (two oxygen atoms joined — a molecule of an element).
- **Na⁺** → an **ion** (a sodium atom that has lost one electron, so it is charged +1).
- **H₂O** → a **molecule** (a molecule of a compound: 2 hydrogen + 1 oxygen atom).

**Part (b) — formula and name of the calcium–chloride compound**
- Calcium is **Ca²⁺** (charge +2); chloride is **Cl⁻** (charge −1).
- The total positive charge (+2) must be balanced by the total negative charge. **One** Ca²⁺ (+2) needs **two** Cl⁻ (2 × −1 = −2) to balance.
- Formula: **CaCl₂**.
- Name: metal (calcium) + non-metal ending in -ide (chloride) → **calcium chloride**.

**Conclusion:** an atom is a single element particle, a molecule is atoms joined together, and an ion is a charged atom; and in an ionic compound the charges must balance — so calcium (Ca²⁺) and chloride (Cl⁻) form CaCl₂, calcium chloride.`,
      teachingTip:
        "Keep the three particles crisp: atom (one element particle), molecule (atoms joined), ion (charged atom). The charge-balancing rule for ionic formulae is where marks are made and lost — teach the 'swap and cancel' shortcut (the charge of one ion becomes the subscript of the other, then simplify), and always sanity-check that total + charge equals total − charge. Reading subscripts vs the big multiplier (2H₂O) is another reliable exam point.",
      quiz: [
        {
          prompt: "The smallest particle of an element is an…",
          options: ["atom", "molecule", "ion", "compound"],
          correctIndex: 0,
          explanation: "An atom is the smallest particle of an element.",
        },
        {
          prompt: "Two or more atoms joined by covalent bonds form a…",
          options: ["molecule", "ion", "single atom", "mixture"],
          correctIndex: 0,
          explanation: "Joined atoms make a molecule.",
        },
        {
          prompt: "An atom that has gained or lost electrons and carries a charge is an…",
          options: ["ion", "atom", "molecule", "element"],
          correctIndex: 0,
          explanation: "A charged atom is an ion.",
        },
        {
          prompt: "O₂ is an example of a…",
          options: ["molecule of an element", "single atom", "positive ion", "compound of two elements"],
          correctIndex: 0,
          explanation: "Two O atoms joined = a molecule of the element oxygen.",
        },
        {
          prompt: "In H₂O, how many hydrogen atoms are there?",
          options: ["2", "1", "3", "0"],
          correctIndex: 0,
          explanation: "The subscript 2 means two hydrogen atoms.",
        },
        {
          prompt: "In CO₂, how many oxygen atoms are there?",
          options: ["2", "1", "3", "0"],
          correctIndex: 0,
          explanation: "The subscript 2 gives two oxygen atoms.",
        },
        {
          prompt: "The symbol for sodium is…",
          options: ["Na", "S", "So", "N"],
          correctIndex: 0,
          explanation: "Sodium's symbol is Na.",
        },
        {
          prompt: "2H₂O represents…",
          options: ["2 water molecules", "2 hydrogen atoms", "1 water molecule", "2 oxygen atoms"],
          correctIndex: 0,
          explanation: "The big 2 multiplies the whole formula.",
        },
        {
          prompt: "The charge on the sodium ion is…",
          options: ["+1", "−1", "+2", "0"],
          correctIndex: 0,
          explanation: "Na⁺ has a +1 charge.",
        },
        {
          prompt: "The charge on the oxide ion (O²⁻) is…",
          options: ["−2", "+2", "−1", "0"],
          correctIndex: 0,
          explanation: "Oxide is O²⁻.",
        },
        {
          prompt: "In an ionic compound, the total positive charge must…",
          options: ["balance the total negative charge", "be larger", "be smaller", "be zero for each ion"],
          correctIndex: 0,
          explanation: "Charges must cancel overall.",
        },
        {
          prompt: "The formula for the compound of Na⁺ and Cl⁻ is…",
          options: ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
          correctIndex: 0,
          explanation: "+1 and −1 balance one-to-one.",
        },
        {
          prompt: "The formula for the compound of Ca²⁺ and Cl⁻ is…",
          options: ["CaCl₂", "CaCl", "Ca₂Cl", "Ca₂Cl₂"],
          correctIndex: 0,
          explanation: "One Ca²⁺ needs two Cl⁻.",
        },
        {
          prompt: "The compound formed from sodium and chlorine is named…",
          options: ["sodium chloride", "sodium chlorine", "chlorine sodide", "sodium chlorate"],
          correctIndex: 0,
          explanation: "Metal + non-metal ending in -ide.",
        },
        {
          prompt: "Magnesium + oxygen forms a compound named…",
          options: ["magnesium oxide", "magnesium oxygen", "oxide magnesium", "magnesium oxate"],
          correctIndex: 0,
          explanation: "Metal name + oxide.",
        },
        {
          prompt: "Which is an ion?",
          options: ["OH⁻", "O₂", "H₂O", "CO₂"],
          correctIndex: 0,
          explanation: "OH⁻ (hydroxide) carries a charge.",
        },
        {
          prompt: "H₂SO₄ contains how many oxygen atoms?",
          options: ["4", "2", "1", "6"],
          correctIndex: 0,
          explanation: "The subscript 4 after O gives four oxygen atoms.",
        },
        {
          prompt: "A compound of a metal and a non-metal usually ends in…",
          options: ["-ide", "-ate", "-ous", "-ic"],
          correctIndex: 0,
          explanation: "e.g. chloride, oxide, sulfide.",
        },
        {
          prompt: "The formula for the compound of Al³⁺ and O²⁻ is…",
          options: ["Al₂O₃", "AlO", "Al₃O₂", "AlO₃"],
          correctIndex: 0,
          explanation: "Swap the charges: Al₂O₃ balances +6 and −6.",
        },
        {
          prompt: "H₂O is a molecule of a … because it contains different elements.",
          options: ["compound", "element", "single atom", "metal"],
          correctIndex: 0,
          explanation: "Water is a compound (H and O).",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define an atom, a molecule and an ion, giving one example of each.",
          answerKey:
            "Atom — the smallest particle of an element (e.g. O). Molecule — two or more atoms joined by covalent bonds (e.g. O₂ or H₂O). Ion — an atom (or group) that has gained/lost electrons and carries a charge (e.g. Na⁺ or Cl⁻). Award a mark per correct definition with a valid example.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "How many atoms of each element are in H₂SO₄? State the total number of atoms.",
          answerKey:
            "2 hydrogen, 1 sulfur, 4 oxygen. Total = 2 + 1 + 4 = 7 atoms. Award marks for the correct count of each element and the total.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The correct formula for the compound of calcium (Ca²⁺) and oxide (O²⁻) is…",
          options: ["CaO", "CaO₂", "Ca₂O", "Ca₂O₂"],
          correctIndex: 0,
          answerKey: "+2 and −2 balance one-to-one, giving CaO.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how to write the formula of an ionic compound, using the compound of aluminium (Al³⁺) and chloride (Cl⁻) as an example.",
          answerKey:
            "A strong answer explains that in an ionic compound the total positive charge must balance the total negative charge. For Al³⁺ and Cl⁻: aluminium is +3 and each chloride is −1, so three chloride ions (3 × −1 = −3) are needed to balance one aluminium (+3), giving the formula AlCl₃. (A valid method is to make the charge of one ion the subscript of the other and then simplify.) Award marks for the charge-balance principle, the correct working, and the formula AlCl₃.",
          marks: 5,
        },
      ],
    },
    {
      slug: "relative-mass-and-the-mole",
      title: "Relative Atomic Mass, the Mole and Simple Stoichiometry",
      objective:
        "By the end of the topic, learners should be able to use relative atomic mass to work out relative molecular (formula) mass, explain the mole as the chemist's counting unit, and carry out simple mole calculations.",
      estimatedMinutes: 160,
      notes: `## Introduction

Chemical reactions happen between *countless* atoms and molecules — far too many to count one by one, and each far too small to weigh alone. Chemists solve this with two brilliant ideas: a scale of **relative mass** (comparing every atom to carbon-12) and the **mole**, a "chemist's dozen" that links the invisible world of atoms to masses we can weigh on a balance. This topic explains relative atomic and molecular mass, the mole, and how to use them in simple calculations.

## Why we need relative mass

Atoms are far too small to weigh individually, so chemists compare their masses using a scale of **relative mass**, based on the carbon-12 atom.

- The **relative atomic mass (Ar)** of an element is the average mass of its atoms compared with carbon-12. Common values: H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32, Cl = 35.5, Ca = 40.

## Relative molecular (formula) mass

The **relative molecular mass (Mr)** — or relative formula mass — of a compound is found by **adding up the relative atomic masses of all the atoms** in its formula.

*Examples (using the Ar values above):*
- **H₂O:** (2 × 1) + (16) = **18**.
- **CO₂:** (12) + (2 × 16) = **44**.
- **CaCO₃:** 40 + 12 + (3 × 16) = **100**.

## The mole — the chemist's counting unit

Because atoms are so tiny, chemists count them in a very large group called the **mole**.

- **One mole** of any substance contains the same number of particles: **Avogadro's number, about 6 × 10²³ particles.**
- The mass of one mole of a substance, in grams, equals its **relative atomic or molecular mass**. This is the **molar mass** (units: grams per mole, g/mol).
  - 1 mole of carbon atoms = **12 g**.
  - 1 mole of water = **18 g**.
  - 1 mole of CO₂ = **44 g**.

## The key mole equation

$$\\text{number of moles} = \\frac{\\text{mass (g)}}{\\text{molar mass (g/mol)}}$$

This links the mass you can weigh to the number of moles (and so the number of particles) — the basis of **stoichiometry**, the calculation of quantities in chemical reactions.

### Using the equation
- **Moles from mass:** how many moles are in 36 g of water (Mr = 18)? moles = 36 ÷ 18 = **2 moles**.
- **Mass from moles:** what is the mass of 3 moles of CO₂ (Mr = 44)? mass = 3 × 44 = **132 g**.

## Why stoichiometry matters

Chemical equations tell us the **ratio** in which substances react. Using moles, chemists can work out **exactly how much** of a reactant is needed or how much product will form — essential for industry, medicine and the laboratory.

## Common errors and misconceptions

- **Thinking a mole is a mass** — a **mole** is a *number* of particles (6.02 × 10²³, Avogadro's number); its *mass* in grams equals the relative molecular mass.
- **Using the wrong formula** — moles = mass ÷ Mr. To find mass, rearrange to mass = moles × Mr; don't multiply when you should divide.
- **Forgetting to multiply atoms in a formula** — for the Mr of H₂O it is (2 × 1) + 16 = 18, not 1 + 16.
- **Assuming equal masses mean equal moles** — 12 g of carbon and 12 g of magnesium contain *different* numbers of moles because their Ar values differ.`,
      workedExample: `**Task.** Using Ar values H = 1, C = 12, O = 16, Ca = 40:
(a) Work out the relative molecular mass of calcium carbonate, CaCO₃.
(b) How many moles are there in 50 g of CaCO₃?
(c) What is the mass of 0.5 mole of CO₂ (Mr = 44)?

**Part (a) — relative molecular mass of CaCO₃**
Add the relative atomic masses of every atom:
- Ca: 40
- C: 12
- O₃: 3 × 16 = 48

Mr = 40 + 12 + 48 = **100**.

**Part (b) — moles in 50 g of CaCO₃**
Use moles = mass ÷ molar mass. The molar mass of CaCO₃ is 100 g/mol.

moles = 50 ÷ 100 = **0.5 mole**.

**Part (c) — mass of 0.5 mole of CO₂**
Rearrange the equation: mass = moles × molar mass.

mass = 0.5 × 44 = **22 g**.

**Conclusion:** relative molecular mass is the sum of the relative atomic masses (CaCO₃ = 100); the mole equation (moles = mass ÷ molar mass) then converts between mass and moles — 50 g of CaCO₃ is 0.5 mole, and 0.5 mole of CO₂ has a mass of 22 g.`,
      teachingTip:
        "The one equation to make automatic is moles = mass ÷ molar mass — teach the triangle (mass on top; moles and molar mass below) so learners can rearrange it for mass or molar mass. Practise relative molecular mass first (just careful addition, watching subscripts like the 3 oxygens in CaCO₃) before any mole calculation. Keep Avogadro's number as 'a mole is just a chemist's dozen — a fixed huge number of particles' so it feels like counting, not magic.",
      quiz: [
        {
          prompt: "Relative atomic mass compares an atom's mass with that of…",
          options: ["carbon-12", "hydrogen-2", "oxygen-32", "water"],
          correctIndex: 0,
          explanation: "The scale is based on carbon-12.",
        },
        {
          prompt: "The relative atomic mass of oxygen is…",
          options: ["16", "8", "32", "1"],
          correctIndex: 0,
          explanation: "Ar of oxygen is 16.",
        },
        {
          prompt: "The relative atomic mass of hydrogen is…",
          options: ["1", "12", "16", "23"],
          correctIndex: 0,
          explanation: "Ar of hydrogen is 1.",
        },
        {
          prompt: "The relative molecular mass of a compound is found by…",
          options: ["adding the relative atomic masses of all its atoms", "multiplying the charges", "counting the molecules", "subtracting the masses"],
          correctIndex: 0,
          explanation: "Add up all the atoms' relative masses.",
        },
        {
          prompt: "The relative molecular mass of H₂O (H=1, O=16) is…",
          options: ["18", "17", "16", "2"],
          correctIndex: 0,
          explanation: "(2×1) + 16 = 18.",
        },
        {
          prompt: "The relative molecular mass of CO₂ (C=12, O=16) is…",
          options: ["44", "28", "32", "40"],
          correctIndex: 0,
          explanation: "12 + (2×16) = 44.",
        },
        {
          prompt: "The chemist's counting unit for particles is the…",
          options: ["mole", "gram", "litre", "atom"],
          correctIndex: 0,
          explanation: "The mole counts particles.",
        },
        {
          prompt: "One mole of any substance contains about…",
          options: ["6 × 10²³ particles", "100 particles", "12 particles", "1 000 particles"],
          correctIndex: 0,
          explanation: "That is Avogadro's number.",
        },
        {
          prompt: "The mass of one mole of a substance, in grams, equals its…",
          options: ["relative molecular (or atomic) mass", "charge", "volume", "number of atoms"],
          correctIndex: 0,
          explanation: "Molar mass in g equals the relative mass.",
        },
        {
          prompt: "One mole of carbon atoms (Ar = 12) has a mass of…",
          options: ["12 g", "1 g", "24 g", "6 g"],
          correctIndex: 0,
          explanation: "Molar mass of carbon is 12 g/mol.",
        },
        {
          prompt: "The mole equation is moles = mass ÷…",
          options: ["molar mass", "charge", "volume", "temperature"],
          correctIndex: 0,
          explanation: "moles = mass ÷ molar mass.",
        },
        {
          prompt: "How many moles are in 36 g of water (Mr = 18)?",
          options: ["2", "18", "36", "0.5"],
          correctIndex: 0,
          explanation: "36 ÷ 18 = 2 moles.",
        },
        {
          prompt: "What is the mass of 2 moles of CO₂ (Mr = 44)?",
          options: ["88 g", "44 g", "22 g", "46 g"],
          correctIndex: 0,
          explanation: "mass = 2 × 44 = 88 g.",
        },
        {
          prompt: "The relative molecular mass of CaCO₃ (Ca=40, C=12, O=16) is…",
          options: ["100", "68", "88", "72"],
          correctIndex: 0,
          explanation: "40 + 12 + (3×16) = 100.",
        },
        {
          prompt: "Molar mass is measured in…",
          options: ["grams per mole (g/mol)", "moles", "grams only", "litres"],
          correctIndex: 0,
          explanation: "Molar mass has units g/mol.",
        },
        {
          prompt: "How many moles are in 100 g of CaCO₃ (Mr = 100)?",
          options: ["1", "10", "100", "0.1"],
          correctIndex: 0,
          explanation: "100 ÷ 100 = 1 mole.",
        },
        {
          prompt: "The Ar of chlorine is…",
          options: ["35.5", "17", "35", "70"],
          correctIndex: 0,
          explanation: "Chlorine's relative atomic mass is 35.5.",
        },
        {
          prompt: "The study of the quantities of substances in reactions is called…",
          options: ["stoichiometry", "electrolysis", "titration", "distillation"],
          correctIndex: 0,
          explanation: "Stoichiometry deals with reacting quantities.",
        },
        {
          prompt: "The mass of 0.5 mole of water (Mr = 18) is…",
          options: ["9 g", "18 g", "36 g", "4.5 g"],
          correctIndex: 0,
          explanation: "0.5 × 18 = 9 g.",
        },
        {
          prompt: "Chemists use the mole because atoms are…",
          options: ["far too small to count or weigh individually", "too large", "always the same mass", "invisible only in gases"],
          correctIndex: 0,
          explanation: "The mole groups huge numbers of tiny particles.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Work out the relative molecular mass of sulfuric acid, H₂SO₄ (H=1, S=32, O=16).",
          answerKey:
            "(2×1) + 32 + (4×16) = 2 + 32 + 64 = 98. Award marks for correctly using the subscripts and the total 98.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "How many moles are there in 88 g of carbon dioxide, CO₂ (Mr = 44)?",
          answerKey:
            "moles = mass ÷ molar mass = 88 ÷ 44 = 2 moles. Award marks for the correct equation and the answer 2 moles.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "One mole of any substance contains approximately…",
          options: ["6 × 10²³ particles", "1 000 particles", "12 particles", "100 particles"],
          correctIndex: 0,
          answerKey: "Avogadro's number, about 6 × 10²³ particles per mole.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain what a mole is and why it is useful to chemists, and describe how the equation moles = mass ÷ molar mass is used, with an example.",
          answerKey:
            "A strong answer explains that a mole is the chemist's counting unit — a fixed, very large number of particles (Avogadro's number, about 6 × 10²³) — and that the mass of one mole of a substance in grams equals its relative molecular/atomic mass (its molar mass). It is useful because atoms are far too small to count individually, so the mole lets chemists relate a mass they can weigh to a number of particles and work out reacting quantities (stoichiometry). The equation moles = mass ÷ molar mass converts between mass and moles — e.g. 36 g of water (molar mass 18 g/mol) is 36 ÷ 18 = 2 moles, and mass = moles × molar mass gives the reverse. Award marks for the definition, the usefulness, and a correct worked use of the equation.",
          marks: 5,
        },
      ],
    },
  ],
};
