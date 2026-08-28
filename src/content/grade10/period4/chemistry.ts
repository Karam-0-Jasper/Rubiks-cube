import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester Two, Period IV: Chemical Bonding. The CONTENTS list is expanded to
// one topic per item: 1. Ionic bonding; 2. Covalent bonding; 3. Electronegativity
// and bond polarity; 4. Hybridization of atomic orbitals; 5. Molecular geometry
// (VSEPR); 6. Metallic bonding; 7. Intermolecular forces; 8. Coordinate (dative)
// bonding and comparison of bond types.
export const chemistryG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Chemical Bonding",
  summary:
    "Period IV of the MoE Grade 10 Chemistry syllabus. Learners explain why atoms bond to reach a stable outer shell, and study ionic, covalent and metallic bonding; electronegativity and bond polarity; the hybridization of atomic orbitals; molecular geometry by VSEPR; the intermolecular forces (van der Waals and hydrogen bonding); and coordinate (dative) bonding, comparing the properties of the substances each bond type forms.",
  topics: [
    {
      // source: LibreTexts — 8.2 Ionic Bonding (Chemistry: The Central Science, Brown et al.) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/08:_Basic_Concepts_of_Chemical_Bonding/8.02:_Ionic_Bonding)
      slug: "ionic-bonding",
      title: "Ionic Bonding",
      objective:
        "By the end of the topic, learners should be able to explain how ionic bonds form by electron transfer between metals and non-metals, describe the giant ionic lattice, and relate the properties of ionic compounds to their structure. (MoE Grade 10 Period IV, CONTENTS 1.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- Atoms bond to reach a **stable, full outer shell** (like a noble gas) — the **octet rule**.
- **Ionic bonding** is the first of the three main bond types.
- **This topic:** how ionic bonds form, the giant lattice, and the properties of ionic compounds.

## How an ionic bond forms

- An ionic bond forms between a **metal** and a **non-metal** by the **transfer of electrons**.
- The **metal loses** electrons to become a positive **cation**; the **non-metal gains** them to become a negative **anion**.
- The **electrostatic attraction** between the oppositely charged ions is the **ionic bond**.
- The electrons lost by the metal equal the electrons gained by the non-metal (charge balance).

Example — sodium chloride: Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻; the Na⁺ and Cl⁻ attract to form NaCl.

\`\`\`svg Electron transfer forming an ionic bond (Na to Cl)
<svg viewBox="0 0 260 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium transferring an electron to chlorine to form Na+ and Cl-">
  <circle cx="55" cy="45" r="26" fill="#fde68a" stroke="#92400e"/><text x="55" y="49" font-size="11" text-anchor="middle" fill="#451a03">Na</text>
  <circle cx="205" cy="45" r="26" fill="#bae6fd" stroke="#075985"/><text x="205" y="49" font-size="11" text-anchor="middle" fill="#082f49">Cl</text>
  <circle cx="88" cy="30" r="5" fill="#dc2626"/>
  <line x1="94" y1="32" x2="176" y2="42" stroke="#dc2626" stroke-width="1.5" marker-end="url(#a)"/>
  <text x="55" y="82" font-size="9" text-anchor="middle" fill="#92400e">loses e⁻ → Na⁺</text>
  <text x="205" y="82" font-size="9" text-anchor="middle" fill="#075985">gains e⁻ → Cl⁻</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

## The giant ionic lattice

- Ionic compounds are not single molecules; the ions pack into a **giant regular lattice** in which each ion is surrounded by ions of **opposite charge**.
- The **lattice energy** is the energy released when gaseous ions come together to form the solid — a measure of the strength of the ionic bonding.
- Lattice energy is **larger** for **smaller, more highly charged ions**.

## Properties of ionic compounds

| Property | Explanation |
|---|---|
| **High melting/boiling points** | strong electrostatic forces need much energy to break |
| **Hard but brittle** | shifting layers bring like charges together, so they shatter |
| **Conduct when molten or dissolved** | ions become free to move (not as a solid) |
| **Often soluble in water** | polar water separates and surrounds the ions |

## Common errors and misconceptions

- **Saying ionic compounds are molecules** — they are giant lattices, not discrete molecules.
- **Thinking solids conduct** — ionic solids conduct only when **molten or dissolved**, when ions are free to move.
- **Forgetting charge balance** — the total positive charge must equal the total negative charge (e.g. MgCl₂, not MgCl).
- **Confusing transfer with sharing** — ionic bonding is electron **transfer**; covalent bonding is **sharing**.`,
      workedExample: `**Task.** Show how magnesium (2,8,2) and chlorine (2,8,7) form magnesium chloride, and explain two properties of the compound.

**Electron transfer**
- Magnesium has 2 outer electrons; it **loses both** to form **Mg²⁺** (2,8).
- Each chlorine needs **one** electron; so **two** chlorine atoms each gain one, forming two **Cl⁻** ions (2,8,8).
- Charge balance: one Mg²⁺ (+2) with two Cl⁻ (−1 each) → **MgCl₂**.

**Two properties explained**
1. **High melting point:** MgCl₂ is a giant lattice held by strong electrostatic forces between Mg²⁺ and Cl⁻; a lot of energy is needed to break them, so it melts at a high temperature.
2. **Conducts when molten or dissolved:** in the solid the ions are fixed, but when melted or dissolved the ions are free to move and carry charge.

**Conclusion.** Magnesium transfers its two outer electrons to two chlorine atoms, forming Mg²⁺ and 2 Cl⁻ held in a giant lattice (MgCl₂) with a high melting point that conducts electricity only when molten or dissolved.`,
      quiz: [
        {
          prompt: "An ionic bond forms between…",
          options: ["a metal and a non-metal", "two non-metals", "two metals", "two noble gases"],
          correctIndex: 0,
          explanation: "Metals transfer electrons to non-metals.",
        },
        {
          prompt: "An ionic bond forms by the … of electrons.",
          options: ["transfer", "sharing", "destruction", "creation"],
          correctIndex: 0,
          explanation: "Electrons are transferred, not shared.",
        },
        {
          prompt: "A metal atom that loses electrons becomes a…",
          options: ["positive cation", "negative anion", "neutron", "neutral atom"],
          correctIndex: 0,
          explanation: "Losing electrons gives a positive cation.",
        },
        {
          prompt: "A non-metal atom that gains electrons becomes a…",
          options: ["negative anion", "positive cation", "proton", "neutral atom"],
          correctIndex: 0,
          explanation: "Gaining electrons gives a negative anion.",
        },
        {
          prompt: "The force holding an ionic bond together is…",
          options: ["electrostatic attraction between opposite charges", "gravity", "magnetism", "shared electrons"],
          correctIndex: 0,
          explanation: "Opposite charges attract electrostatically.",
        },
        {
          prompt: "Atoms bond to achieve a … outer shell.",
          options: ["full/stable", "empty", "half-full", "single-electron"],
          correctIndex: 0,
          explanation: "The octet rule: a full stable outer shell.",
        },
        {
          prompt: "Ionic compounds exist as…",
          options: ["giant lattices", "single molecules", "free atoms", "gases only"],
          correctIndex: 0,
          explanation: "Ions pack into a giant regular lattice.",
        },
        {
          prompt: "Ionic compounds have … melting points.",
          options: ["high", "very low", "no", "negative"],
          correctIndex: 0,
          explanation: "Strong electrostatic forces give high melting points.",
        },
        {
          prompt: "Ionic solids conduct electricity when…",
          options: ["molten or dissolved", "solid", "frozen", "never"],
          correctIndex: 0,
          explanation: "Ions must be free to move to conduct.",
        },
        {
          prompt: "The formula of the compound from Na⁺ and Cl⁻ is…",
          options: ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
          correctIndex: 0,
          explanation: "One +1 balances one −1 → NaCl.",
        },
        {
          prompt: "Magnesium forms an ion with charge…",
          options: ["+2", "+1", "−2", "−1"],
          correctIndex: 0,
          explanation: "It loses 2 outer electrons to form Mg²⁺.",
        },
        {
          prompt: "In magnesium chloride, one Mg²⁺ combines with … Cl⁻.",
          options: ["two", "one", "three", "four"],
          correctIndex: 0,
          explanation: "Charge balance needs two Cl⁻ for one Mg²⁺.",
        },
        {
          prompt: "The energy released when gaseous ions form an ionic solid is the…",
          options: ["lattice energy", "ionization energy", "activation energy", "bond energy of a molecule"],
          correctIndex: 0,
          explanation: "That is the lattice energy.",
        },
        {
          prompt: "Lattice energy is larger for ions that are…",
          options: ["small and highly charged", "large and low charged", "neutral", "gaseous only"],
          correctIndex: 0,
          explanation: "Small, high-charge ions attract more strongly.",
        },
        {
          prompt: "Ionic compounds are often … in water.",
          options: ["soluble", "insoluble always", "gaseous", "flammable"],
          correctIndex: 0,
          explanation: "Polar water separates and surrounds the ions.",
        },
        {
          prompt: "Ionic compounds are hard but…",
          options: ["brittle", "soft", "elastic", "gaseous"],
          correctIndex: 0,
          explanation: "Shifting layers bring like charges together and they shatter.",
        },
        {
          prompt: "The electrons lost by the metal are…",
          options: ["gained by the non-metal", "destroyed", "shared equally", "kept by the metal"],
          correctIndex: 0,
          explanation: "Electron transfer conserves electrons.",
        },
        {
          prompt: "In NaCl, each Na⁺ ion is surrounded by…",
          options: ["Cl⁻ ions (opposite charge)", "Na⁺ ions", "electrons only", "molecules"],
          correctIndex: 0,
          explanation: "Each ion is surrounded by ions of opposite charge.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Ionic bonding involves:",
          options: ["transfer of electrons from a metal to a non-metal", "sharing of electrons between non-metals", "a sea of delocalised electrons", "no electrons at all"],
          correctIndex: 0,
          answerKey: "Ionic bonding is electron transfer from metal to non-metal.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Why do ionic compounds conduct electricity only when molten or in solution?",
          options: ["the ions become free to move", "electrons leave the metal", "the compound melts into atoms", "they never conduct"],
          correctIndex: 0,
          answerKey: "Mobile ions are needed to carry charge; in the solid the ions are fixed.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain, using electron transfer, how sodium and chlorine form sodium chloride.",
          answerKey:
            "Sodium (2,8,1) loses its 1 outer electron to form Na⁺ (2,8); chlorine (2,8,7) gains that electron to form Cl⁻ (2,8,8). The oppositely charged ions attract by electrostatic forces to form NaCl, held in a giant ionic lattice. Award marks for the transfer, the ions formed, and the electrostatic attraction.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State three physical properties of ionic compounds.",
          answerKey:
            "Any three of: high melting/boiling points; hard but brittle; conduct when molten or dissolved (not solid); often soluble in water. One mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how ionic bonds form and explain how the giant ionic lattice accounts for the main properties of ionic compounds.",
          answerKey:
            "A full answer explains that ionic bonds form when a metal transfers electrons to a non-metal, producing positive cations and negative anions held together by electrostatic attraction, with the ions arranged in a giant lattice where each ion is surrounded by ions of opposite charge. The strong electrostatic forces throughout the lattice explain the high melting and boiling points (much energy needed to break the bonds) and the hardness. The compounds are brittle because displacing a layer brings like charges together, causing repulsion and shattering. They conduct electricity only when molten or dissolved because only then are the ions free to move; and many dissolve in water because polar water molecules pull the ions apart. Award marks for the bonding mechanism, the lattice, and at least three property explanations.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry) — 10.4 Covalent Lewis Structures: Electrons Shared (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/10:_Chemical_Bonding/10.04:_Covalent_Lewis_Structures-_Electrons_Shared)
      slug: "covalent-bonding",
      title: "Covalent Bonding",
      objective:
        "By the end of the topic, learners should be able to explain how covalent bonds form by sharing electrons, draw simple Lewis (dot-and-cross) structures, describe single, double and triple bonds, and relate the properties of molecular substances to their structure. (MoE Grade 10 Period IV, CONTENTS 2.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Covalent bonding** joins **non-metal** atoms by **sharing** electrons.
- **This topic:** how covalent bonds form, Lewis structures, multiple bonds, and the properties of molecular substances.

## How a covalent bond forms

- Two **non-metal** atoms **share a pair of electrons**, so each atom counts the shared pair toward a full outer shell (octet; 2 for hydrogen).
- A **shared pair** is one **covalent bond**; electrons not in bonds are **lone pairs**.
- Example: two hydrogen atoms share a pair to form H₂ (H–H); in H₂O oxygen shares one pair with each hydrogen.

\`\`\`svg Covalent bond: shared pair of electrons in H2
<svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two hydrogen atoms sharing a pair of electrons">
  <circle cx="70" cy="40" r="24" fill="none" stroke="#b45309"/><text x="70" y="44" font-size="11" text-anchor="middle" fill="#92400e">H</text>
  <circle cx="130" cy="40" r="24" fill="none" stroke="#b45309"/><text x="130" y="44" font-size="11" text-anchor="middle" fill="#92400e">H</text>
  <circle cx="94" cy="40" r="4" fill="#1e3a8a"/><circle cx="106" cy="40" r="4" fill="#dc2626"/>
  <text x="100" y="72" font-size="9" text-anchor="middle" fill="#92400e">shared pair = one covalent bond</text>
</svg>
\`\`\`

## Single, double and triple bonds

- **Single bond** — one shared pair (H–H, Cl–Cl).
- **Double bond** — two shared pairs (O=O in O₂, C=O in CO₂).
- **Triple bond** — three shared pairs (N≡N in N₂).
- More shared pairs = a **stronger, shorter** bond.

## Lewis (dot-and-cross) structures

- Draw each atom's outer electrons; put shared pairs **between** the atoms and lone pairs on the atoms.
- Each atom should reach a full shell (octet, or 2 for H).

## Properties of covalent (molecular) substances

| Property | Explanation |
|---|---|
| **Low melting/boiling points** | weak forces *between* molecules are easily overcome |
| **Do not conduct electricity** | no free ions or electrons (molecules are neutral) |
| **Often insoluble in water** | non-polar molecules are not attracted to water |

- Note: the covalent bonds *within* a molecule are strong; it is the forces *between* molecules that are weak. (Giant covalent solids such as diamond are the exception, with very high melting points.)

## Common errors and misconceptions

- **Thinking covalent substances conduct** — molecules are neutral, with no free ions or electrons.
- **Confusing bonds within and between molecules** — the covalent bond is strong; the *intermolecular* forces are weak, giving low melting points.
- **Sharing with metals** — covalent bonding is between **non-metals**; metal + non-metal is ionic.
- **Forgetting hydrogen only needs 2** — hydrogen completes with 2 electrons, not 8.`,
      workedExample: `**Task.** Show the bonding in a water molecule (H₂O) and in carbon dioxide (CO₂), and explain why molecular substances have low melting points.

**Water, H₂O**
- Oxygen has 6 outer electrons and needs 2 more; each hydrogen has 1 and needs 1 more.
- Oxygen shares **one pair with each hydrogen** — two single O–H bonds. Oxygen also has **two lone pairs**.
- Each hydrogen now has 2 electrons and oxygen has 8 — all shells full.

**Carbon dioxide, CO₂**
- Carbon has 4 outer electrons; each oxygen has 6.
- Carbon forms a **double bond** to each oxygen (O=C=O), sharing two pairs with each; every atom reaches an octet.

**Why low melting points**
- The covalent bonds *inside* each molecule are strong, but the forces *between* separate molecules are **weak**, so little energy is needed to separate the molecules — hence low melting and boiling points.

**Conclusion.** In H₂O oxygen forms two single bonds (with two lone pairs); in CO₂ carbon forms two double bonds; and molecular substances melt easily because the forces between molecules — not the covalent bonds within them — are weak.`,
      quiz: [
        {
          prompt: "A covalent bond forms between…",
          options: ["two non-metals", "a metal and a non-metal", "two metals", "a metal and a noble gas"],
          correctIndex: 0,
          explanation: "Covalent bonding is between non-metals.",
        },
        {
          prompt: "A covalent bond is a … of electrons.",
          options: ["shared pair", "transfer", "loss", "gain"],
          correctIndex: 0,
          explanation: "A shared pair of electrons is a covalent bond.",
        },
        {
          prompt: "A pair of outer electrons not used in bonding is a…",
          options: ["lone pair", "bonding pair", "cation", "shared pair"],
          correctIndex: 0,
          explanation: "Non-bonding electrons are lone pairs.",
        },
        {
          prompt: "A double bond consists of … shared pairs.",
          options: ["two", "one", "three", "four"],
          correctIndex: 0,
          explanation: "Two shared pairs make a double bond.",
        },
        {
          prompt: "The bond in a nitrogen molecule (N₂) is a…",
          options: ["triple bond", "single bond", "double bond", "ionic bond"],
          correctIndex: 0,
          explanation: "N₂ has a triple bond (N≡N).",
        },
        {
          prompt: "Hydrogen completes its shell with … electrons.",
          options: ["2", "8", "1", "4"],
          correctIndex: 0,
          explanation: "Hydrogen needs just 2 electrons.",
        },
        {
          prompt: "Covalent molecular substances have … melting points.",
          options: ["low", "very high", "no", "negative"],
          correctIndex: 0,
          explanation: "Weak forces between molecules give low melting points.",
        },
        {
          prompt: "Molecular substances usually … conduct electricity.",
          options: ["do not", "always", "only as solids", "only when frozen"],
          correctIndex: 0,
          explanation: "No free ions or electrons, so no conduction.",
        },
        {
          prompt: "In water, oxygen forms … single bonds with hydrogen.",
          options: ["two", "one", "three", "four"],
          correctIndex: 0,
          explanation: "Two O–H bonds in H₂O.",
        },
        {
          prompt: "In carbon dioxide, carbon forms … with each oxygen.",
          options: ["a double bond", "a single bond", "a triple bond", "an ionic bond"],
          correctIndex: 0,
          explanation: "O=C=O has two double bonds.",
        },
        {
          prompt: "A single covalent bond shares … pair(s).",
          options: ["one", "two", "three", "zero"],
          correctIndex: 0,
          explanation: "One shared pair is a single bond.",
        },
        {
          prompt: "More shared pairs make a bond…",
          options: ["stronger and shorter", "weaker and longer", "ionic", "conductive"],
          correctIndex: 0,
          explanation: "Multiple bonds are stronger and shorter.",
        },
        {
          prompt: "The forces that are weak in molecular substances are the forces…",
          options: ["between molecules", "within molecules", "in the nucleus", "in metals"],
          correctIndex: 0,
          explanation: "Intermolecular forces are weak; bonds within are strong.",
        },
        {
          prompt: "The bond within a Cl₂ molecule is a…",
          options: ["single covalent bond", "double bond", "ionic bond", "metallic bond"],
          correctIndex: 0,
          explanation: "Cl–Cl is a single covalent bond.",
        },
        {
          prompt: "Covalent substances are often … in water.",
          options: ["insoluble", "always soluble", "gaseous", "conductive"],
          correctIndex: 0,
          explanation: "Non-polar molecules are not attracted to water.",
        },
        {
          prompt: "In a dot-and-cross diagram, the shared pair is drawn…",
          options: ["between the two atoms", "far from both atoms", "inside the nucleus", "only on one atom"],
          correctIndex: 0,
          explanation: "Shared pairs sit between the bonded atoms.",
        },
        {
          prompt: "A giant covalent solid such as diamond has a … melting point.",
          options: ["very high", "very low", "negative", "zero"],
          correctIndex: 0,
          explanation: "Giant covalent structures are the high-melting exception.",
        },
        {
          prompt: "Atoms form covalent bonds to achieve a…",
          options: ["full outer shell", "positive charge", "negative charge", "half-empty shell"],
          correctIndex: 0,
          explanation: "Sharing completes each atom's outer shell.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A covalent bond is best described as:",
          options: ["a shared pair of electrons between non-metals", "a transfer of electrons", "a sea of electrons", "attraction between ions"],
          correctIndex: 0,
          answerKey: "Covalent bonding is electron sharing between non-metals.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The molecule N₂ contains a:",
          options: ["triple bond", "single bond", "double bond", "ionic bond"],
          correctIndex: 0,
          answerKey: "Nitrogen shares three pairs (N≡N).",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why covalent molecular substances have low melting points but the covalent bonds themselves are strong.",
          answerKey:
            "The covalent bonds within a molecule (shared electron pairs) are strong, but the forces of attraction between separate molecules are weak. Melting only has to overcome the weak intermolecular forces, not break the covalent bonds, so molecular substances melt at low temperatures. Award marks for the strong-bond/weak-intermolecular-force distinction.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Draw or describe the bonding in a water molecule (H₂O), showing bonding pairs and lone pairs.",
          answerKey:
            "Oxygen shares one electron pair with each of two hydrogen atoms (two single O–H bonds), giving oxygen a full octet and each hydrogen 2 electrons. Oxygen also has two lone (non-bonding) pairs. Award marks for the two bonding pairs and the two lone pairs on oxygen.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe how covalent bonds form, explain single, double and triple bonds with examples, and account for the properties of molecular substances.",
          answerKey:
            "A full answer explains that covalent bonds form when two non-metal atoms share pairs of electrons so that each achieves a full outer shell (octet, or 2 for hydrogen). A single bond is one shared pair (H–H, Cl–Cl), a double bond two shared pairs (O=O, or C=O in CO₂) and a triple bond three shared pairs (N≡N), with more pairs giving a stronger, shorter bond; electrons not in bonds are lone pairs. Molecular substances have low melting and boiling points because the forces between molecules are weak (even though the covalent bonds within are strong), do not conduct electricity because there are no free ions or electrons, and are often insoluble in water. Award marks for the bonding mechanism, the three bond types with examples, and at least two property explanations.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 8.4 Bond Polarity and Electronegativity (Chemistry: The Central Science, Brown et al.) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map:_Chemistry_-_The_Central_Science_(Brown_et_al.)/08:_Basic_Concepts_of_Chemical_Bonding/8.04:_Bond_Polarity_and_Electronegativity)
      slug: "electronegativity-and-bond-polarity",
      title: "Electronegativity and Bond Polarity",
      objective:
        "By the end of the topic, learners should be able to define electronegativity, use the electronegativity difference to classify a bond as non-polar covalent, polar covalent or ionic, and identify the partial charges in a polar bond. (MoE Grade 10 Period IV, CONTENTS 3.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Covalent bonds are not always shared equally — one atom may pull the electrons more strongly.
- **This topic:** electronegativity and how the difference in electronegativity decides bond polarity.

## Electronegativity

- **Electronegativity** — the tendency of an atom to attract the shared (bonding) electrons in a bond.
- It **increases across a period** and **decreases down a group**; **fluorine** is the most electronegative element.

## Bond polarity from the electronegativity difference

- The type of bond depends on the **difference in electronegativity (ΔEN)** between the two atoms:

| ΔEN (difference) | Bond type | Electron sharing |
|---|---|---|
| ≈ 0 (very small) | non-polar covalent | shared equally |
| intermediate | polar covalent | shared unequally |
| large | ionic | effectively transferred |

- The larger the difference, the more **ionic** the bond; a small or zero difference gives a **non-polar** bond.

## Polar covalent bonds and partial charges

- In a **polar covalent bond** the more electronegative atom pulls the shared pair closer, gaining a small negative charge (**δ−**), leaving the other atom slightly positive (**δ+**).
- This separation of charge is a **dipole**. Example: in H–Cl, chlorine is δ− and hydrogen δ+.
- A bond between two **identical** atoms (H–H, Cl–Cl) is **non-polar** — equal sharing.

\`\`\`svg Polar bond in HCl showing partial charges
<svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydrogen chloride with delta plus on H and delta minus on Cl">
  <circle cx="60" cy="35" r="20" fill="none" stroke="#b45309"/><text x="60" y="39" font-size="11" text-anchor="middle" fill="#92400e">H</text>
  <circle cx="140" cy="35" r="24" fill="none" stroke="#075985"/><text x="140" y="39" font-size="11" text-anchor="middle" fill="#075985">Cl</text>
  <line x1="80" y1="35" x2="116" y2="35" stroke="#92400e" stroke-width="2"/>
  <text x="60" y="15" font-size="10" text-anchor="middle" fill="#dc2626">δ+</text>
  <text x="140" y="12" font-size="10" text-anchor="middle" fill="#1e3a8a">δ−</text>
</svg>
\`\`\`

## Percent ionic character

- The greater the electronegativity difference, the greater the **percent ionic character** of the bond — bonds lie on a continuum from pure covalent to ionic.

## Common errors and misconceptions

- **Thinking all covalent bonds are non-polar** — only bonds between identical atoms are non-polar; different atoms give polar bonds.
- **Confusing δ charges with full ionic charges** — δ+ and δ− are *partial* charges, smaller than a full +1 or −1.
- **Assuming a large ΔEN is still covalent** — a large electronegativity difference gives an ionic bond.
- **Forgetting electronegativity trends** — it rises across a period and falls down a group.`,
      workedExample: `**Task.** Classify the bonds in H₂, HCl and NaCl as non-polar covalent, polar covalent or ionic, and mark any partial charges (approximate electronegativities: H 2.1, Cl 3.0, Na 0.9).

**H₂ (H–H)**
- Both atoms identical → ΔEN = 0 → **non-polar covalent** (equal sharing, no partial charges).

**HCl (H–Cl)**
- ΔEN = 3.0 − 2.1 = 0.9 → intermediate → **polar covalent**.
- Chlorine is more electronegative, so **Cl is δ−** and **H is δ+**.

**NaCl (Na–Cl)**
- ΔEN = 3.0 − 0.9 = 2.1 → large → **ionic** (electron effectively transferred: Na⁺ and Cl⁻).

**Conclusion.** As the electronegativity difference grows, the bond changes from non-polar covalent (H₂) to polar covalent (HCl, with Cl δ− and H δ+) to ionic (NaCl).`,
      quiz: [
        {
          prompt: "Electronegativity is the tendency of an atom to…",
          options: ["attract the shared bonding electrons", "lose all electrons", "gain neutrons", "form a metal"],
          correctIndex: 0,
          explanation: "It measures the pull on shared electrons.",
        },
        {
          prompt: "The most electronegative element is…",
          options: ["fluorine", "sodium", "hydrogen", "carbon"],
          correctIndex: 0,
          explanation: "Fluorine has the highest electronegativity.",
        },
        {
          prompt: "A bond between two identical atoms is…",
          options: ["non-polar covalent", "polar covalent", "ionic", "metallic"],
          correctIndex: 0,
          explanation: "Equal sharing gives a non-polar bond.",
        },
        {
          prompt: "A small but non-zero electronegativity difference gives a … bond.",
          options: ["polar covalent", "non-polar covalent", "ionic", "metallic"],
          correctIndex: 0,
          explanation: "Unequal sharing gives a polar covalent bond.",
        },
        {
          prompt: "A very large electronegativity difference gives a … bond.",
          options: ["ionic", "non-polar covalent", "polar covalent", "metallic"],
          correctIndex: 0,
          explanation: "The electron is effectively transferred: ionic.",
        },
        {
          prompt: "In a polar bond, the more electronegative atom is…",
          options: ["slightly negative (δ−)", "slightly positive (δ+)", "neutral", "a full ion"],
          correctIndex: 0,
          explanation: "It pulls the shared pair closer, becoming δ−.",
        },
        {
          prompt: "In H–Cl, the hydrogen atom is…",
          options: ["δ+", "δ−", "neutral", "Cl−"],
          correctIndex: 0,
          explanation: "Chlorine pulls electrons, leaving H slightly positive.",
        },
        {
          prompt: "A separation of charge across a bond is called a…",
          options: ["dipole", "lattice", "octet", "lone pair"],
          correctIndex: 0,
          explanation: "The δ+/δ− separation is a dipole.",
        },
        {
          prompt: "Electronegativity increases…",
          options: ["across a period", "down a group", "with more shells", "with mass only"],
          correctIndex: 0,
          explanation: "It rises across a period (and falls down a group).",
        },
        {
          prompt: "The bond in Cl₂ is…",
          options: ["non-polar covalent", "polar covalent", "ionic", "metallic"],
          correctIndex: 0,
          explanation: "Two identical Cl atoms share equally.",
        },
        {
          prompt: "δ+ and δ− represent…",
          options: ["partial charges", "full ionic charges", "whole electrons", "protons"],
          correctIndex: 0,
          explanation: "They are partial (small) charges.",
        },
        {
          prompt: "As electronegativity difference increases, the percent ionic character…",
          options: ["increases", "decreases", "stays the same", "becomes zero"],
          correctIndex: 0,
          explanation: "Bigger difference = more ionic character.",
        },
        {
          prompt: "Which bond is most polar?",
          options: ["H–F", "H–H", "Cl–Cl", "C–H"],
          correctIndex: 0,
          explanation: "H–F has the largest electronegativity difference of these.",
        },
        {
          prompt: "Down a group, electronegativity…",
          options: ["decreases", "increases", "stays the same", "is always 4.0"],
          correctIndex: 0,
          explanation: "It falls down a group.",
        },
        {
          prompt: "A polar covalent bond shares electrons…",
          options: ["unequally", "equally", "not at all", "as ions"],
          correctIndex: 0,
          explanation: "The more electronegative atom takes a bigger share.",
        },
        {
          prompt: "Bonds lie on a continuum from pure covalent to…",
          options: ["ionic", "metallic", "nuclear", "gaseous"],
          correctIndex: 0,
          explanation: "Increasing polarity leads toward ionic.",
        },
        {
          prompt: "Which pair would form a non-polar bond?",
          options: ["O and O", "H and O", "Na and Cl", "H and Cl"],
          correctIndex: 0,
          explanation: "Identical atoms share equally — non-polar.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A bond with a large difference in electronegativity between the atoms is:",
          options: ["ionic", "non-polar covalent", "metallic", "always non-polar"],
          correctIndex: 0,
          answerKey: "A large electronegativity difference gives an ionic bond.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In the polar bond H–Cl, the partial charges are:",
          options: ["H is δ+, Cl is δ−", "H is δ−, Cl is δ+", "both δ+", "both δ−"],
          correctIndex: 0,
          answerKey: "Chlorine (more electronegative) is δ−; hydrogen is δ+.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Define electronegativity and state how it changes across a period and down a group.",
          answerKey:
            "Electronegativity is the tendency (ability) of an atom to attract the shared bonding electrons in a bond. It increases across a period and decreases down a group. Award marks for the definition and both trends.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how the electronegativity difference is used to decide whether a bond is non-polar covalent, polar covalent or ionic.",
          answerKey:
            "If the electronegativity difference is zero or very small the bond is non-polar covalent (electrons shared equally); an intermediate difference gives a polar covalent bond (electrons shared unequally, producing δ+ and δ− ends); a large difference gives an ionic bond (electron effectively transferred). Award marks for the three cases linked to the size of the difference.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Discuss how electronegativity determines bond polarity, using H₂, HCl and NaCl as examples, and explain the meaning of δ+ and δ−.",
          answerKey:
            "A full answer defines electronegativity as an atom's power to attract shared electrons and explains that the bond type depends on the electronegativity difference: H₂ (identical atoms, difference 0) is non-polar covalent with equal sharing; HCl (difference about 0.9) is polar covalent, with chlorine pulling the shared pair to become δ− and hydrogen δ+, creating a dipole; NaCl (difference about 2.1) is ionic, the electron being effectively transferred to give Na⁺ and Cl⁻. δ+ and δ− are partial charges (smaller than full ionic charges) marking the slightly positive and slightly negative ends of a polar bond. Award marks for the electronegativity-difference argument, the three worked examples, and the meaning of the partial charges.",
          marks: 6,
        },
      ],
    },
    {
      // source: OpenStax Chemistry 2e — 8.2 Hybrid Atomic Orbitals (https://openstax.org/books/chemistry-2e/pages/8-2-hybrid-atomic-orbitals)
      slug: "hybridization-of-atomic-orbitals",
      title: "Hybridization of Atomic Orbitals",
      objective:
        "By the end of the topic, learners should be able to explain orbital hybridization and describe sp³, sp² and sp hybridization with their geometries and bond angles. (MoE Grade 10 Period IV, CONTENTS 4.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- **Hybridization** explains the shapes of molecules by mixing atomic orbitals into new, equivalent **hybrid orbitals**.
- **This topic:** sp³, sp² and sp hybridization, their geometries and bond angles.

## What hybridization is

- **Hybridization** — the mixing of an atom's atomic orbitals (one s and some p orbitals) to make a set of **identical hybrid orbitals** ready for bonding.
- The number of hybrid orbitals equals the number of atomic orbitals mixed.

## The three types

| Hybridization | Orbitals mixed | Number of hybrids | Geometry | Bond angle |
|---|---|---|---|---|
| **sp³** | one s + three p | 4 | tetrahedral | 109.5° |
| **sp²** | one s + two p | 3 | trigonal planar | 120° |
| **sp** | one s + one p | 2 | linear | 180° |

## Examples

- **sp³:** carbon in methane (CH₄) — four equal C–H bonds pointing to the corners of a tetrahedron (109.5°).
- **sp²:** carbon in ethene (C₂H₄) — three regions in a plane at 120° (a double bond present).
- **sp:** carbon in ethyne (C₂H₂) or the carbon in CO₂ — two regions opposite each other, 180°.

\`\`\`svg sp3 tetrahedral hybrid orbitals (methane)
<svg viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Central carbon with four bonds at tetrahedral angles">
  <circle cx="70" cy="65" r="14" fill="#fde68a" stroke="#92400e"/><text x="70" y="69" font-size="10" text-anchor="middle" fill="#451a03">C</text>
  <line x1="70" y1="65" x2="70" y2="18" stroke="#92400e" stroke-width="2"/>
  <line x1="70" y1="65" x2="24" y2="100" stroke="#92400e" stroke-width="2"/>
  <line x1="70" y1="65" x2="116" y2="100" stroke="#92400e" stroke-width="2"/>
  <line x1="70" y1="65" x2="70" y2="115" stroke="#92400e" stroke-width="2" stroke-dasharray="3 3"/>
  <circle cx="70" cy="14" r="7" fill="none" stroke="#b45309"/><circle cx="20" cy="103" r="7" fill="none" stroke="#b45309"/>
  <circle cx="120" cy="103" r="7" fill="none" stroke="#b45309"/><circle cx="70" cy="119" r="7" fill="none" stroke="#b45309"/>
  <text x="70" y="128" font-size="8" text-anchor="middle" fill="#92400e">109.5° (tetrahedral)</text>
</svg>
\`\`\`

## Why the s and p character matters

- Each hybrid orbital blends s and p character: sp is 50% s, sp² is 33% s, sp³ is 25% s.
- More s character (sp) holds electrons closer, giving shorter, stronger bonds.

## Common errors and misconceptions

- **Miscounting hybrids** — the number of hybrid orbitals equals the number of atomic orbitals mixed (sp³ = 4, sp² = 3, sp = 2).
- **Wrong bond angles** — sp³ ≈ 109.5°, sp² = 120°, sp = 180°.
- **Thinking hybrids are the original orbitals** — hybrids are new, equivalent orbitals formed by mixing.
- **Confusing geometry with hybridization** — hybridization determines the electron geometry: tetrahedral (sp³), trigonal planar (sp²), linear (sp).`,
      workedExample: `**Task.** State the hybridization, geometry and bond angle of the central carbon in (a) methane CH₄, (b) ethene C₂H₄ and (c) carbon dioxide CO₂.

**(a) Methane CH₄**
- Carbon forms four single bonds → **four** regions → mix one s + three p → **sp³**.
- Geometry **tetrahedral**, bond angle **109.5°**.

**(b) Ethene C₂H₄**
- Each carbon has three bonding regions (two C–H and one C=C) → mix one s + two p → **sp²**.
- Geometry **trigonal planar**, bond angle **120°**.

**(c) Carbon dioxide CO₂**
- Carbon has two regions (a double bond to each oxygen) → mix one s + one p → **sp**.
- Geometry **linear**, bond angle **180°**.

**Conclusion.** The number of bonding regions fixes the hybridization: four → sp³ (109.5°, tetrahedral); three → sp² (120°, trigonal planar); two → sp (180°, linear).`,
      quiz: [
        {
          prompt: "Hybridization is the … of atomic orbitals to form new hybrid orbitals.",
          options: ["mixing", "removing", "splitting into ions", "destroying"],
          correctIndex: 0,
          explanation: "Hybridization mixes atomic orbitals.",
        },
        {
          prompt: "sp³ hybridization mixes one s orbital with … p orbitals.",
          options: ["three", "two", "one", "four"],
          correctIndex: 0,
          explanation: "sp³ = one s + three p.",
        },
        {
          prompt: "The geometry of an sp³ hybridized atom is…",
          options: ["tetrahedral", "linear", "trigonal planar", "bent"],
          correctIndex: 0,
          explanation: "sp³ gives a tetrahedral arrangement.",
        },
        {
          prompt: "The bond angle in an sp³ tetrahedral arrangement is…",
          options: ["109.5°", "120°", "180°", "90°"],
          correctIndex: 0,
          explanation: "Tetrahedral angle is 109.5°.",
        },
        {
          prompt: "sp² hybridization gives … hybrid orbitals.",
          options: ["three", "two", "four", "five"],
          correctIndex: 0,
          explanation: "sp² = one s + two p → three hybrids.",
        },
        {
          prompt: "The geometry of an sp² atom is…",
          options: ["trigonal planar", "tetrahedral", "linear", "octahedral"],
          correctIndex: 0,
          explanation: "sp² is trigonal planar.",
        },
        {
          prompt: "The bond angle in a trigonal planar (sp²) arrangement is…",
          options: ["120°", "109.5°", "180°", "90°"],
          correctIndex: 0,
          explanation: "Trigonal planar is 120°.",
        },
        {
          prompt: "sp hybridization gives … hybrid orbitals.",
          options: ["two", "three", "four", "one"],
          correctIndex: 0,
          explanation: "sp = one s + one p → two hybrids.",
        },
        {
          prompt: "The geometry of an sp atom is…",
          options: ["linear", "tetrahedral", "trigonal planar", "bent"],
          correctIndex: 0,
          explanation: "sp gives a linear arrangement.",
        },
        {
          prompt: "The bond angle in a linear (sp) arrangement is…",
          options: ["180°", "120°", "109.5°", "90°"],
          correctIndex: 0,
          explanation: "Linear is 180°.",
        },
        {
          prompt: "The carbon in methane (CH₄) is … hybridized.",
          options: ["sp³", "sp²", "sp", "not hybridized"],
          correctIndex: 0,
          explanation: "Four single bonds → sp³.",
        },
        {
          prompt: "The carbon atoms in ethene (C₂H₄) are … hybridized.",
          options: ["sp²", "sp³", "sp", "d²sp³"],
          correctIndex: 0,
          explanation: "Three regions each → sp².",
        },
        {
          prompt: "The carbon in carbon dioxide (CO₂) is … hybridized.",
          options: ["sp", "sp²", "sp³", "not hybridized"],
          correctIndex: 0,
          explanation: "Two regions (double bond to each O) → sp.",
        },
        {
          prompt: "The number of hybrid orbitals equals the number of…",
          options: ["atomic orbitals mixed", "lone pairs only", "protons", "neutrons"],
          correctIndex: 0,
          explanation: "Mixing n orbitals gives n hybrids.",
        },
        {
          prompt: "Which hybridization has the most s character?",
          options: ["sp (50%)", "sp² (33%)", "sp³ (25%)", "they are equal"],
          correctIndex: 0,
          explanation: "sp has 50% s character.",
        },
        {
          prompt: "Hybrid orbitals in a set are…",
          options: ["identical in energy and shape", "all different", "always empty", "ionic"],
          correctIndex: 0,
          explanation: "Hybridization gives equivalent hybrids.",
        },
        {
          prompt: "An atom with two bonding regions and no lone pairs is…",
          options: ["sp (linear)", "sp³ (tetrahedral)", "sp² (trigonal)", "bent"],
          correctIndex: 0,
          explanation: "Two regions → sp, linear.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which hybridization gives a tetrahedral geometry with 109.5° bond angles?",
          options: ["sp³", "sp²", "sp", "none"],
          correctIndex: 0,
          answerKey: "sp³ hybridization is tetrahedral, 109.5°.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The carbon in CO₂ (linear) is hybridized:",
          options: ["sp", "sp²", "sp³", "not hybridized"],
          correctIndex: 0,
          answerKey: "Two bonding regions → sp, linear, 180°.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the geometry and bond angle associated with sp³, sp² and sp hybridization.",
          answerKey:
            "sp³ – tetrahedral, 109.5°; sp² – trigonal planar, 120°; sp – linear, 180°. One mark each (correct geometry-and-angle pair).",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what orbital hybridization is and why the number of hybrid orbitals equals the number of orbitals mixed.",
          answerKey:
            "Hybridization is the mixing of an atom's atomic orbitals (one s with one or more p orbitals) to produce a set of new, equivalent hybrid orbitals used for bonding. Because orbitals are conserved in the mixing, the number of hybrid orbitals produced equals the number of atomic orbitals combined (e.g. sp³ from four orbitals). Award marks for the definition and the conservation reasoning.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe sp³, sp² and sp hybridization, giving the orbitals mixed, the geometry, the bond angle and an example of each.",
          answerKey:
            "A full answer explains that hybridization mixes atomic orbitals into equivalent hybrids. sp³ mixes one s and three p to give four hybrids in a tetrahedral arrangement at 109.5° (e.g. carbon in CH₄). sp² mixes one s and two p to give three hybrids in a trigonal planar arrangement at 120° (e.g. carbon in ethene C₂H₄). sp mixes one s and one p to give two hybrids in a linear arrangement at 180° (e.g. carbon in CO₂ or ethyne). More s character (sp) gives shorter, stronger bonds. Award marks for the orbitals mixed, geometry, bond angle and a valid example for each of the three types.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 9.2 VSEPR - Molecular Geometry (Averill, General Chemistry) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Book:_General_Chemistry:_Principles_Patterns_and_Applications_(Averill)/09:_Molecular_Geometry_and_Covalent_Bonding_Models/9.02:_VSEPR_-_Molecular_Geometry)
      slug: "molecular-geometry-vsepr",
      title: "Molecular Geometry (VSEPR)",
      objective:
        "By the end of the topic, learners should be able to use VSEPR theory to predict the shapes of simple molecules from the number of bonding pairs and lone pairs around the central atom. (MoE Grade 10 Period IV, CONTENTS 5.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- **VSEPR** (Valence Shell Electron Pair Repulsion) theory predicts molecular **shapes**.
- **This topic:** how electron pairs arrange themselves and the common molecular shapes.

## The VSEPR principle

- Electron pairs around a central atom are all **negative**, so they **repel** each other and move as **far apart as possible**.
- Count the **electron groups** (bonding pairs and lone pairs; a double or triple bond counts as **one** group) around the central atom.
- **Lone pairs repel more strongly** than bonding pairs, so they **squeeze** bond angles slightly.

## Common shapes

| Electron groups | Bonding pairs | Lone pairs | Shape | Angle | Example |
|---|---|---|---|---|---|
| 2 | 2 | 0 | linear | 180° | CO₂ |
| 3 | 3 | 0 | trigonal planar | 120° | BF₃ |
| 4 | 4 | 0 | tetrahedral | 109.5° | CH₄ |
| 4 | 3 | 1 | trigonal pyramidal | ~107° | NH₃ |
| 4 | 2 | 2 | bent (V-shaped) | ~104.5° | H₂O |

\`\`\`svg Shapes of methane, ammonia and water
<svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tetrahedral methane, pyramidal ammonia and bent water">
  <g stroke="#92400e" stroke-width="2" fill="none">
    <circle cx="45" cy="55" r="10" fill="#fde68a"/>
    <line x1="45" y1="55" x2="45" y2="25"/><line x1="45" y1="55" x2="20" y2="80"/><line x1="45" y1="55" x2="70" y2="80"/><line x1="45" y1="55" x2="45" y2="88"/>
    <circle cx="150" cy="50" r="10" fill="#bae6fd"/>
    <line x1="150" y1="50" x2="128" y2="82"/><line x1="150" y1="50" x2="172" y2="82"/><line x1="150" y1="50" x2="150" y2="86"/>
    <circle cx="255" cy="45" r="10" fill="#fecaca"/>
    <line x1="255" y1="45" x2="233" y2="78"/><line x1="255" y1="45" x2="277" y2="78"/>
  </g>
  <text x="45" y="105" font-size="9" text-anchor="middle" fill="#92400e">CH₄ tetrahedral</text>
  <text x="150" y="105" font-size="9" text-anchor="middle" fill="#075985">NH₃ pyramidal</text>
  <text x="255" y="105" font-size="9" text-anchor="middle" fill="#b91c1c">H₂O bent</text>
</svg>
\`\`\`

## Electron geometry vs molecular geometry

- **Electron geometry** counts all groups (bonding + lone).
- **Molecular geometry** describes the arrangement of the **atoms** only. Lone pairs affect angles but are not "seen" in the shape name — so NH₃ (4 groups) is *pyramidal*, not tetrahedral.

## Common errors and misconceptions

- **Ignoring lone pairs** — lone pairs occupy space and change the shape (H₂O is bent, not linear).
- **Counting a double bond as two groups** — a multiple bond counts as **one** electron group.
- **Confusing electron geometry with molecular shape** — the shape name describes the atoms; lone pairs are not named but still bend the molecule.
- **Wrong angles** — 180° linear, 120° trigonal, 109.5° tetrahedral, ~107° pyramidal, ~104.5° bent.`,
      workedExample: `**Task.** Use VSEPR to predict the shapes of methane (CH₄), ammonia (NH₃) and water (H₂O).

**Methane CH₄**
- Central carbon has 4 bonding pairs, 0 lone pairs → 4 groups.
- They spread to a **tetrahedron** → **tetrahedral**, angle **109.5°**.

**Ammonia NH₃**
- Central nitrogen has 3 bonding pairs and **1 lone pair** → 4 groups.
- The four groups point to a tetrahedron, but only the three N–H atoms are "seen" → **trigonal pyramidal**; the lone pair squeezes the angle to about **107°**.

**Water H₂O**
- Central oxygen has 2 bonding pairs and **2 lone pairs** → 4 groups.
- Two lone pairs push the O–H bonds together → **bent (V-shaped)**, angle about **104.5°**.

**Conclusion.** All three have four electron groups, but the lone pairs change the shape: CH₄ (0 lone pairs) is tetrahedral, NH₃ (1 lone pair) is pyramidal, and H₂O (2 lone pairs) is bent.`,
      quiz: [
        {
          prompt: "VSEPR stands for Valence Shell Electron Pair…",
          options: ["Repulsion", "Reaction", "Reduction", "Resonance"],
          correctIndex: 0,
          explanation: "It is electron pair repulsion theory.",
        },
        {
          prompt: "According to VSEPR, electron pairs arrange themselves to be…",
          options: ["as far apart as possible", "as close as possible", "in a line always", "in the nucleus"],
          correctIndex: 0,
          explanation: "Repulsion pushes them far apart.",
        },
        {
          prompt: "A molecule with 2 bonding groups and no lone pairs is…",
          options: ["linear (180°)", "bent", "tetrahedral", "pyramidal"],
          correctIndex: 0,
          explanation: "Two groups give a linear shape.",
        },
        {
          prompt: "A molecule with 3 bonding groups and no lone pairs is…",
          options: ["trigonal planar (120°)", "linear", "tetrahedral", "bent"],
          correctIndex: 0,
          explanation: "Three groups give trigonal planar.",
        },
        {
          prompt: "A molecule with 4 bonding groups and no lone pairs is…",
          options: ["tetrahedral (109.5°)", "linear", "trigonal planar", "bent"],
          correctIndex: 0,
          explanation: "Four groups give a tetrahedron.",
        },
        {
          prompt: "The shape of methane (CH₄) is…",
          options: ["tetrahedral", "linear", "bent", "pyramidal"],
          correctIndex: 0,
          explanation: "CH₄ is tetrahedral.",
        },
        {
          prompt: "The shape of ammonia (NH₃) is…",
          options: ["trigonal pyramidal", "tetrahedral", "linear", "trigonal planar"],
          correctIndex: 0,
          explanation: "One lone pair makes NH₃ pyramidal.",
        },
        {
          prompt: "The shape of water (H₂O) is…",
          options: ["bent (V-shaped)", "linear", "tetrahedral", "pyramidal"],
          correctIndex: 0,
          explanation: "Two lone pairs make H₂O bent.",
        },
        {
          prompt: "Lone pairs repel … than bonding pairs.",
          options: ["more strongly", "less strongly", "the same amount", "not at all"],
          correctIndex: 0,
          explanation: "Lone pairs repel more, squeezing bond angles.",
        },
        {
          prompt: "A double bond counts as … electron group(s).",
          options: ["one", "two", "three", "zero"],
          correctIndex: 0,
          explanation: "A multiple bond counts as one group.",
        },
        {
          prompt: "The H–O–H angle in water is about…",
          options: ["104.5°", "180°", "120°", "90°"],
          correctIndex: 0,
          explanation: "Two lone pairs reduce it to ~104.5°.",
        },
        {
          prompt: "The bond angle in ammonia is about…",
          options: ["107°", "120°", "180°", "90°"],
          correctIndex: 0,
          explanation: "The lone pair reduces it to ~107°.",
        },
        {
          prompt: "CO₂ is a … molecule.",
          options: ["linear", "bent", "tetrahedral", "pyramidal"],
          correctIndex: 0,
          explanation: "Two groups (double bonds) → linear.",
        },
        {
          prompt: "BF₃ (3 bonding pairs) is…",
          options: ["trigonal planar", "pyramidal", "bent", "linear"],
          correctIndex: 0,
          explanation: "Three groups, no lone pairs → trigonal planar.",
        },
        {
          prompt: "The molecular geometry describes the arrangement of the…",
          options: ["atoms", "lone pairs only", "neutrons", "protons"],
          correctIndex: 0,
          explanation: "Molecular shape names the positions of atoms.",
        },
        {
          prompt: "Why is water bent rather than linear?",
          options: ["two lone pairs on oxygen push the bonds together", "oxygen is a metal", "it has no lone pairs", "hydrogen repels itself"],
          correctIndex: 0,
          explanation: "Lone-pair repulsion bends the molecule.",
        },
        {
          prompt: "The number of electron groups is the number of bonding pairs plus…",
          options: ["lone pairs", "protons", "neutrons", "double bonds counted twice"],
          correctIndex: 0,
          explanation: "Count bonding pairs and lone pairs (multiple bonds as one).",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "According to VSEPR, the shape of a molecule with four bonding pairs and no lone pairs is:",
          options: ["tetrahedral", "trigonal planar", "linear", "bent"],
          correctIndex: 0,
          answerKey: "Four bonding pairs give a tetrahedral shape (109.5°).",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Water is bent rather than linear because oxygen has:",
          options: ["two lone pairs", "no lone pairs", "four bonding pairs", "a triple bond"],
          correctIndex: 0,
          answerKey: "Two lone pairs on oxygen repel the O–H bonds into a bent shape.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the shapes and approximate bond angles of CH₄, NH₃ and H₂O.",
          answerKey:
            "CH₄ – tetrahedral, 109.5°; NH₃ – trigonal pyramidal, about 107°; H₂O – bent, about 104.5°. One mark each (shape + angle).",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why NH₃ and H₂O both have four electron groups but different shapes.",
          answerKey:
            "Both have four electron groups around the central atom, but they differ in the number of lone pairs: NH₃ has 3 bonding pairs and 1 lone pair, giving a trigonal pyramidal shape, while H₂O has 2 bonding pairs and 2 lone pairs, giving a bent shape. Lone pairs are not named in the molecular shape but occupy space and push the bonds together. Award marks for the differing lone-pair counts and the resulting shapes.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain VSEPR theory and use it to predict and account for the shapes of at least four simple molecules.",
          answerKey:
            "A full answer states that VSEPR theory says electron pairs (bonding and lone) around a central atom repel and arrange themselves as far apart as possible, with lone pairs repelling more strongly and reducing bond angles; a multiple bond counts as one group. It should predict, from the number of groups, shapes such as: CO₂ (2 groups) linear 180°; BF₃ (3) trigonal planar 120°; CH₄ (4 bonding) tetrahedral 109.5°; NH₃ (3 bonding + 1 lone) trigonal pyramidal ~107°; H₂O (2 bonding + 2 lone) bent ~104.5°. Award marks for the VSEPR principle, the effect of lone pairs, and correct shapes/angles for at least four molecules.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 8.10 Metallic Bonding (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/08:_Ionic_and_Metallic_Bonding/8.10:_Metallic_Bonding)
      slug: "metallic-bonding",
      title: "Metallic Bonding and the Properties of Metals",
      objective:
        "By the end of the topic, learners should be able to describe metallic bonding using the 'sea of delocalised electrons' model and relate it to the physical properties of metals. (MoE Grade 10 Period IV, CONTENTS 6.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- **Metallic bonding** holds a metal together.
- **This topic:** the sea-of-electrons model and how it explains the properties of metals.

## The sea-of-electrons model

- In a metal, the atoms lose their outer (valence) electrons, becoming positive **metal ions (cations)**.
- The lost electrons are **delocalised** — free to move throughout the whole structure, forming a **"sea" of mobile electrons**.
- **Metallic bond** — the electrostatic attraction between the lattice of positive metal ions and the sea of delocalised electrons.

\`\`\`svg Sea of delocalised electrons among metal ions
<svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Positive metal ions in a lattice surrounded by a sea of free electrons">
  <g fill="#fde68a" stroke="#92400e">
    <circle cx="40" cy="35" r="12"/><circle cx="100" cy="35" r="12"/><circle cx="160" cy="35" r="12"/>
    <circle cx="40" cy="80" r="12"/><circle cx="100" cy="80" r="12"/><circle cx="160" cy="80" r="12"/>
  </g>
  <g fill="#1e3a8a">
    <circle cx="70" cy="30" r="3"/><circle cx="130" cy="40" r="3"/><circle cx="70" cy="70" r="3"/><circle cx="130" cy="75" r="3"/><circle cx="100" cy="57" r="3"/><circle cx="45" cy="57" r="3"/><circle cx="150" cy="57" r="3"/>
  </g>
  <text x="100" y="103" font-size="9" text-anchor="middle" fill="#92400e">+ metal ions in a sea of free electrons (blue)</text>
</svg>
\`\`\`

## Properties explained

| Property | Explanation |
|---|---|
| **Good conductor of electricity** | delocalised electrons are free to move and carry charge |
| **Good conductor of heat** | mobile electrons transfer energy quickly |
| **Malleable and ductile** | layers of ions slide over each other; the electron sea keeps them bonded |
| **High melting/boiling points** | strong attraction between ions and the electron sea |
| **Shiny (lustrous)** | free electrons reflect light |

- Because the electron sea has **no directional** bonds, the layers can shift without shattering — unlike brittle ionic solids.

## Common errors and misconceptions

- **Thinking metals conduct because ions move** — it is the **delocalised electrons** that move and carry charge, not the ions.
- **Confusing malleability with ionic brittleness** — metals bend because layers slide with the electron sea holding them; ionic solids shatter.
- **Forgetting metals are giant structures** — a metal is a giant lattice of ions in an electron sea, not molecules.
- **Saying the outer electrons stay on their atoms** — the valence electrons are delocalised over the whole structure.`,
      workedExample: `**Task.** Use the sea-of-electrons model to explain why metals (a) conduct electricity and (b) are malleable.

**(a) Conducting electricity**
- In the metal, the outer electrons are **delocalised** and free to move throughout the structure.
- When a voltage is applied, these mobile electrons **drift** through the metal, carrying charge — so the metal **conducts electricity** (as a solid, unlike ionic solids).

**(b) Malleability**
- The metal is a lattice of positive ions held together by the **electron sea**, which is **non-directional**.
- When the metal is hammered, layers of ions **slide over each other** into new positions, but the electron sea moves with them and keeps the structure bonded, so the metal **bends and reshapes without breaking**.

**Conclusion.** Delocalised electrons make metals conduct because they are free to move and carry charge, and the non-directional electron sea lets layers of ions slide, making metals malleable rather than brittle.`,
      quiz: [
        {
          prompt: "In metallic bonding, the metal atoms lose their outer electrons to become…",
          options: ["positive ions", "negative ions", "neutrons", "molecules"],
          correctIndex: 0,
          explanation: "They become positive cations.",
        },
        {
          prompt: "The lost outer electrons in a metal are…",
          options: ["delocalised (free to move)", "fixed on their atoms", "destroyed", "in the nucleus"],
          correctIndex: 0,
          explanation: "They form a sea of delocalised electrons.",
        },
        {
          prompt: "The metallic bond is the attraction between metal ions and the…",
          options: ["sea of delocalised electrons", "nucleus", "lone pairs", "anions"],
          correctIndex: 0,
          explanation: "Positive ions attract the electron sea.",
        },
        {
          prompt: "Metals conduct electricity because…",
          options: ["delocalised electrons move and carry charge", "the ions move", "they contain acids", "of lone pairs"],
          correctIndex: 0,
          explanation: "Mobile electrons carry the charge.",
        },
        {
          prompt: "Metals conduct heat well because…",
          options: ["mobile electrons transfer energy quickly", "they are brittle", "they have no electrons", "of trapped gases"],
          correctIndex: 0,
          explanation: "Free electrons carry thermal energy.",
        },
        {
          prompt: "Metals are malleable because…",
          options: ["layers of ions slide with the electron sea holding them", "they shatter easily", "ions repel", "bonds are directional"],
          correctIndex: 0,
          explanation: "Non-directional bonding lets layers slide.",
        },
        {
          prompt: "Metals have … melting points.",
          options: ["generally high", "always very low", "no", "negative"],
          correctIndex: 0,
          explanation: "Strong ion–electron attraction gives high melting points.",
        },
        {
          prompt: "Metals are shiny because free electrons…",
          options: ["reflect light", "absorb all light", "emit sound", "are coloured"],
          correctIndex: 0,
          explanation: "The electron sea reflects light, giving lustre.",
        },
        {
          prompt: "A metal is best described as a giant lattice of…",
          options: ["positive ions in a sea of electrons", "molecules", "neutral atoms only", "anions"],
          correctIndex: 0,
          explanation: "Positive ions in an electron sea.",
        },
        {
          prompt: "Unlike ionic solids, metals do NOT shatter when hammered because…",
          options: ["the electron sea keeps layers bonded as they slide", "they have no ions", "they are liquids", "bonds are ionic"],
          correctIndex: 0,
          explanation: "The mobile electron sea keeps the layers bonded.",
        },
        {
          prompt: "Which particle carries the electric current in a metal?",
          options: ["delocalised electrons", "protons", "neutrons", "metal ions"],
          correctIndex: 0,
          explanation: "The mobile electrons carry charge.",
        },
        {
          prompt: "The word 'delocalised' means the electrons are…",
          options: ["not tied to one atom", "stuck in the nucleus", "shared in pairs only", "removed from the metal"],
          correctIndex: 0,
          explanation: "They are free to move over the whole structure.",
        },
        {
          prompt: "Ductile means a metal can be…",
          options: ["drawn into wires", "shattered", "dissolved", "evaporated"],
          correctIndex: 0,
          explanation: "Ductility is drawing into wires.",
        },
        {
          prompt: "Metallic bonding occurs in…",
          options: ["metals", "non-metal gases", "ionic solids", "noble gases"],
          correctIndex: 0,
          explanation: "It is the bonding found in metals.",
        },
        {
          prompt: "The electron sea model was an early idea developed by…",
          options: ["Drude", "Dalton", "Mendeleev", "Bohr"],
          correctIndex: 0,
          explanation: "Drude developed the sea-of-electrons model.",
        },
        {
          prompt: "Metallic bonds are described as … (unlike covalent bonds).",
          options: ["non-directional", "directional", "ionic", "temporary"],
          correctIndex: 0,
          explanation: "The electron sea has no fixed direction.",
        },
        {
          prompt: "Do metals conduct electricity as solids?",
          options: ["yes", "no, only when molten", "no, never", "only when dissolved"],
          correctIndex: 0,
          explanation: "Delocalised electrons let solid metals conduct.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Metallic bonding is the attraction between:",
          options: ["positive metal ions and a sea of delocalised electrons", "two shared electron pairs", "positive and negative ions", "molecules"],
          correctIndex: 0,
          answerKey: "It is the attraction between metal cations and delocalised electrons.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which particles carry the current when a metal conducts electricity?",
          options: ["delocalised electrons", "positive ions", "protons", "neutrons"],
          correctIndex: 0,
          answerKey: "Mobile delocalised electrons carry the charge.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Describe the sea-of-electrons model of metallic bonding.",
          answerKey:
            "In a metal, atoms lose their outer (valence) electrons to become positive ions arranged in a lattice; the lost electrons become delocalised and move freely throughout the structure as a 'sea' of electrons. The metallic bond is the electrostatic attraction between the positive ions and this sea of delocalised electrons. Award marks for the positive ions, the delocalised electron sea, and the attraction between them.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain, using the model, why metals are good conductors and why they are malleable.",
          answerKey:
            "Metals conduct because the delocalised electrons are free to move and carry charge (and transfer heat). They are malleable because the bonding is non-directional, so layers of positive ions can slide over one another while the electron sea moves with them and keeps the structure held together, so the metal reshapes without shattering. Award marks for the conduction explanation and the malleability explanation.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe metallic bonding and use it to explain at least four physical properties of metals.",
          answerKey:
            "A full answer explains that in a metal the atoms lose their outer electrons to form a lattice of positive ions surrounded by a sea of delocalised (free) electrons, and the metallic bond is the attraction between them. It should then explain properties: good electrical conductivity (mobile electrons carry charge, even as a solid); good thermal conductivity (electrons transfer energy); malleability and ductility (non-directional bonding lets layers of ions slide while the electron sea keeps them bonded, so they bend rather than shatter); high melting and boiling points (strong ion–electron attraction); and lustre (free electrons reflect light). Award marks for the bonding model and at least four correctly explained properties.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry) — 12.6 Intermolecular Forces: Dispersion, Dipole–Dipole, Hydrogen Bonding, and Ion-Dipole (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/12:_Liquids_Solids_and_Intermolecular_Forces/12.06:_Intermolecular_Forces-_Dispersion_DipoleDipole_Hydrogen_Bonding_and_Ion-Dipole)
      slug: "intermolecular-forces",
      title: "Intermolecular Forces and Hydrogen Bonding",
      objective:
        "By the end of the topic, learners should be able to describe the intermolecular forces (van der Waals / London dispersion, dipole–dipole and hydrogen bonding), rank their strengths, and relate them to boiling points. (MoE Grade 10 Period IV, CONTENTS 7.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- **Intermolecular forces** are the attractions **between** molecules (not the covalent bonds within them).
- **This topic:** the three main types, their relative strengths and their effect on boiling points.

## The three intermolecular forces

1. **London dispersion forces.** Weak forces present in **all** molecules, caused by momentary (instantaneous) dipoles from moving electrons inducing dipoles in neighbours. They are stronger for **bigger** molecules with more electrons. (Dispersion and dipole–dipole forces together are called **van der Waals forces**.)
2. **Dipole–dipole forces.** Attractions between the **permanent dipoles** of **polar** molecules — the δ+ of one molecule attracts the δ− of another. Stronger than dispersion.
3. **Hydrogen bonding.** A **strong** dipole–dipole attraction that occurs when **H is bonded to a very electronegative atom (N, O or F)** and is attracted to a lone pair on the N, O or F of a neighbouring molecule.

## Ranking of strength

- **Hydrogen bonding > dipole–dipole > London dispersion** (for small molecules).
- All three are **much weaker than covalent or ionic bonds**.

## Effect on boiling point

- To boil a liquid, its molecules must **overcome the intermolecular forces**.
- **Stronger intermolecular forces → higher boiling point.**
- **Water** boils at 100 °C — unusually high for such a small molecule — because of extensive **hydrogen bonding** (each water molecule can hydrogen-bond to several others).

\`\`\`svg Hydrogen bonding between two water molecules
<svg viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two water molecules linked by a hydrogen bond">
  <text x="45" y="45" font-size="12" text-anchor="middle" fill="#075985">O</text>
  <text x="25" y="30" font-size="10" fill="#92400e">H</text><text x="25" y="62" font-size="10" fill="#92400e">H</text>
  <text x="175" y="45" font-size="12" text-anchor="middle" fill="#075985">O</text>
  <text x="200" y="30" font-size="10" fill="#92400e">H</text><text x="200" y="62" font-size="10" fill="#92400e">H</text>
  <line x1="58" y1="45" x2="162" y2="45" stroke="#1e3a8a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="112" y="35" font-size="9" text-anchor="middle" fill="#1e3a8a">hydrogen bond</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **Confusing hydrogen bonds with covalent bonds** — a hydrogen bond is an *intermolecular* attraction, much weaker than the covalent O–H bond.
- **Thinking hydrogen bonding happens for any H** — it needs H bonded to **N, O or F**.
- **Ignoring size for dispersion forces** — bigger molecules with more electrons have stronger dispersion forces and higher boiling points.
- **Mixing up bonds within and between molecules** — boiling breaks the forces *between* molecules, not the covalent bonds *within* them.`,
      workedExample: `**Task.** Explain why water (H₂O) has a much higher boiling point than a similar-sized molecule such as methane (CH₄).

**Step 1 — Identify the intermolecular forces**
- **Methane (CH₄)** is non-polar, so its molecules are held only by weak **London dispersion forces**.
- **Water (H₂O)** is polar and has H bonded to the very electronegative oxygen, so its molecules are held by strong **hydrogen bonds** (as well as dipole–dipole and dispersion).

**Step 2 — Compare the strength**
- Hydrogen bonds are much **stronger** than the London dispersion forces in methane.

**Step 3 — Link to boiling point**
- Boiling requires overcoming the intermolecular forces. Water's strong hydrogen bonds need much more energy to break, so water boils at **100 °C**, whereas methane boils far below room temperature.

**Conclusion.** Water boils much higher than methane because its molecules are held together by strong hydrogen bonds, while methane has only weak London dispersion forces.`,
      quiz: [
        {
          prompt: "Intermolecular forces are the attractions…",
          options: ["between molecules", "within a molecule", "in the nucleus", "between protons"],
          correctIndex: 0,
          explanation: "They act between molecules.",
        },
        {
          prompt: "London dispersion forces are present in…",
          options: ["all molecules", "only polar molecules", "only ionic solids", "only metals"],
          correctIndex: 0,
          explanation: "Dispersion forces exist in all molecules.",
        },
        {
          prompt: "Dispersion and dipole–dipole forces together are called…",
          options: ["van der Waals forces", "hydrogen bonds", "ionic bonds", "metallic bonds"],
          correctIndex: 0,
          explanation: "They are collectively van der Waals forces.",
        },
        {
          prompt: "Dipole–dipole forces occur between … molecules.",
          options: ["polar", "non-polar", "ionic", "metallic"],
          correctIndex: 0,
          explanation: "Permanent dipoles attract in polar molecules.",
        },
        {
          prompt: "Hydrogen bonding needs H bonded to…",
          options: ["N, O or F", "C only", "any metal", "a noble gas"],
          correctIndex: 0,
          explanation: "H must be on a very electronegative N, O or F.",
        },
        {
          prompt: "The strongest of these intermolecular forces (for small molecules) is…",
          options: ["hydrogen bonding", "dispersion", "dipole–dipole", "none"],
          correctIndex: 0,
          explanation: "Hydrogen bonding is the strongest of the three.",
        },
        {
          prompt: "The weakest intermolecular force is…",
          options: ["London dispersion", "hydrogen bonding", "dipole–dipole", "ionic bonding"],
          correctIndex: 0,
          explanation: "Dispersion forces are the weakest.",
        },
        {
          prompt: "Stronger intermolecular forces give a … boiling point.",
          options: ["higher", "lower", "zero", "negative"],
          correctIndex: 0,
          explanation: "More energy is needed to separate the molecules.",
        },
        {
          prompt: "Water's high boiling point is due mainly to…",
          options: ["hydrogen bonding", "dispersion only", "ionic bonding", "metallic bonding"],
          correctIndex: 0,
          explanation: "Extensive hydrogen bonding raises the boiling point.",
        },
        {
          prompt: "A hydrogen bond is compared with a covalent bond…",
          options: ["much weaker", "much stronger", "identical", "an ionic bond"],
          correctIndex: 0,
          explanation: "It is far weaker than a covalent bond.",
        },
        {
          prompt: "Dispersion forces are stronger for molecules that are…",
          options: ["bigger with more electrons", "smaller", "ionic", "charged"],
          correctIndex: 0,
          explanation: "More electrons give stronger dispersion forces.",
        },
        {
          prompt: "To boil a liquid you must overcome the forces…",
          options: ["between molecules", "within molecules", "in the nucleus", "in metals only"],
          correctIndex: 0,
          explanation: "Boiling overcomes intermolecular forces.",
        },
        {
          prompt: "Which molecule can form hydrogen bonds?",
          options: ["NH₃", "CH₄", "Cl₂", "CO₂"],
          correctIndex: 0,
          explanation: "NH₃ has H bonded to N.",
        },
        {
          prompt: "Methane (CH₄) is held together by…",
          options: ["weak London dispersion forces", "hydrogen bonds", "ionic bonds", "metallic bonds"],
          correctIndex: 0,
          explanation: "Non-polar CH₄ has only dispersion forces.",
        },
        {
          prompt: "A permanent dipole exists in a … molecule.",
          options: ["polar", "non-polar", "metallic", "ionic solid"],
          correctIndex: 0,
          explanation: "Polar molecules have permanent dipoles.",
        },
        {
          prompt: "Hydrogen bonds form between the H of one molecule and a … on N, O or F of another.",
          options: ["lone pair", "proton", "metal ion", "double bond"],
          correctIndex: 0,
          explanation: "H is attracted to a lone pair on N, O or F.",
        },
        {
          prompt: "Compared with ionic and covalent bonds, intermolecular forces are…",
          options: ["much weaker", "much stronger", "identical", "the same as metallic bonds"],
          correctIndex: 0,
          explanation: "Intermolecular forces are much weaker than true bonds.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is the strongest intermolecular force (for small molecules)?",
          options: ["hydrogen bonding", "London dispersion", "dipole–dipole", "they are equal"],
          correctIndex: 0,
          answerKey: "Hydrogen bonding is the strongest of the three.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Hydrogen bonding occurs when hydrogen is bonded to:",
          options: ["N, O or F", "carbon", "any metal", "chlorine only"],
          correctIndex: 0,
          answerKey: "H must be bonded to a very electronegative N, O or F.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "List the three types of intermolecular force in order of increasing strength.",
          answerKey:
            "London dispersion (weakest) < dipole–dipole < hydrogen bonding (strongest). Award marks for the correct order.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how intermolecular forces affect boiling point.",
          answerKey:
            "To boil a liquid its molecules must be separated by overcoming the intermolecular forces between them. The stronger these forces, the more energy (higher temperature) is needed, so a substance with stronger intermolecular forces has a higher boiling point. Award marks for the overcoming-forces idea and the stronger-forces/higher-boiling-point link.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the three types of intermolecular force and explain, using hydrogen bonding, why water has an unusually high boiling point for its size.",
          answerKey:
            "A full answer describes London dispersion forces (weak, present in all molecules, from temporary induced dipoles, stronger for larger molecules), dipole–dipole forces (between permanent dipoles of polar molecules) and hydrogen bonding (a strong dipole–dipole attraction when H is bonded to N, O or F and attracted to a lone pair on the N, O or F of another molecule), and ranks them hydrogen bonding > dipole–dipole > dispersion, all far weaker than covalent/ionic bonds. It should then explain that water molecules form extensive hydrogen bonds (each can bond to several neighbours), which require a lot of energy to break, so water boils at 100 °C — much higher than a similar-sized non-polar molecule such as methane that has only weak dispersion forces. Award marks for the three forces, their ranking, and the hydrogen-bonding explanation of water's boiling point.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — Coordinate (Dative Covalent) Bonding (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Chemical_Bonding/Fundamentals_of_Chemical_Bonding/Coordinate_(Dative_Covalent)_Bonding)
      slug: "coordinate-bonding-and-comparison",
      title: "Coordinate (Dative) Bonding and Comparison of Bond Types",
      objective:
        "By the end of the topic, learners should be able to explain coordinate (dative covalent) bonding with examples, and compare ionic, covalent and metallic bonding in terms of structure and properties. (MoE Grade 10 Period IV, CONTENTS 8.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- A **coordinate (dative) bond** is a covalent bond in which **both** shared electrons come from **one** atom.
- **This topic:** coordinate bonding and a comparison of the three main bond types.

## Coordinate (dative covalent) bonding

- **Coordinate bond** — a covalent bond where **both electrons of the shared pair are donated by the same atom** (which has a **lone pair**), to an atom that has an **empty orbital**.
- Once formed, it is **identical** to an ordinary covalent bond.
- The donor (with the lone pair) is a **Lewis base**; the acceptor (with the empty orbital) is a **Lewis acid**.

### Examples

- **Ammonium ion (NH₄⁺):** ammonia's nitrogen donates its **lone pair** to a bare **H⁺** (which has an empty orbital), forming the fourth N–H bond by a coordinate bond. NH₃ + H⁺ → NH₄⁺.
- **Hydroxonium ion (H₃O⁺):** water donates a lone pair to H⁺.

\`\`\`svg Coordinate bond forming the ammonium ion
<svg viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ammonia donating a lone pair to a hydrogen ion to form ammonium">
  <text x="45" y="45" font-size="12" text-anchor="middle" fill="#075985">NH₃</text>
  <circle cx="95" cy="40" r="5" fill="#1e3a8a"/><text x="95" y="25" font-size="8" text-anchor="middle" fill="#1e3a8a">lone pair</text>
  <line x1="102" y1="40" x2="150" y2="40" stroke="#dc2626" stroke-width="1.5" marker-end="url(#c)"/>
  <text x="165" y="45" font-size="12" text-anchor="middle" fill="#92400e">H⁺</text>
  <text x="110" y="72" font-size="9" text-anchor="middle" fill="#92400e">→ NH₄⁺ (coordinate bond)</text>
  <defs><marker id="c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

## Comparison of the three main bond types

| Feature | Ionic | Covalent (molecular) | Metallic |
|---|---|---|---|
| **Formed between** | metal + non-metal | non-metal + non-metal | metal atoms |
| **How** | transfer of electrons | sharing electron pairs | sea of delocalised electrons |
| **Structure** | giant ionic lattice | small molecules | giant metallic lattice |
| **Melting point** | high | low | high |
| **Electrical conductivity** | when molten/dissolved | none | good (solid too) |
| **Solubility in water** | often soluble | often insoluble | insoluble |
| **Hardness** | hard but brittle | soft | malleable/ductile |

## Common errors and misconceptions

- **Thinking a coordinate bond is different once formed** — it is identical to a normal covalent bond; only its *origin* (both electrons from one atom) differs.
- **Forgetting the donor needs a lone pair and the acceptor an empty orbital.**
- **Saying metals conduct only when molten** — metals conduct as solids (delocalised electrons); ionic solids need to be molten or dissolved.
- **Mixing up the structures** — ionic and metallic form giant lattices; simple covalent forms small molecules.`,
      workedExample: `**Task.** (a) Explain how a coordinate bond forms the ammonium ion NH₄⁺. (b) Compare ionic, covalent and metallic bonding in how they conduct electricity.

**Part (a) — the ammonium ion**
- Ammonia (NH₃) has a **lone pair** on its nitrogen.
- A hydrogen ion **H⁺** has an **empty orbital** and no electrons.
- Nitrogen **donates both electrons** of its lone pair to the H⁺, forming a fourth N–H bond — a **coordinate (dative) bond**: NH₃ + H⁺ → NH₄⁺.
- Once formed, all four N–H bonds are **identical**.

**Part (b) — electrical conductivity**
- **Ionic:** conducts only when **molten or dissolved** (ions become free to move); does not conduct as a solid.
- **Covalent (molecular):** does **not** conduct — molecules are neutral with no free ions or electrons.
- **Metallic:** conducts **well, even as a solid**, because of the delocalised (free) electrons.

**Conclusion.** A coordinate bond forms when one atom (with a lone pair) donates both electrons to an atom with an empty orbital, as in NH₄⁺; and the three bond types differ in conductivity — metals conduct as solids, ionic compounds only when molten or dissolved, and molecular substances not at all.`,
      quiz: [
        {
          prompt: "In a coordinate (dative) bond, the shared pair of electrons comes from…",
          options: ["one atom only", "both atoms equally", "an ion", "the nucleus"],
          correctIndex: 0,
          explanation: "Both electrons are donated by one atom.",
        },
        {
          prompt: "The atom that donates the electron pair must have a…",
          options: ["lone pair", "positive charge", "full shell only", "delocalised electron"],
          correctIndex: 0,
          explanation: "The donor supplies a lone pair.",
        },
        {
          prompt: "The atom that accepts the electron pair must have an…",
          options: ["empty orbital", "extra neutron", "ionic bond", "lone pair"],
          correctIndex: 0,
          explanation: "The acceptor has an empty orbital.",
        },
        {
          prompt: "Once formed, a coordinate bond is … an ordinary covalent bond.",
          options: ["identical to", "weaker than", "an ionic version of", "stronger than any"],
          correctIndex: 0,
          explanation: "It is identical once formed.",
        },
        {
          prompt: "The ammonium ion NH₄⁺ forms when NH₃ donates a lone pair to…",
          options: ["H⁺", "Cl⁻", "Na⁺", "OH⁻"],
          correctIndex: 0,
          explanation: "NH₃ + H⁺ → NH₄⁺.",
        },
        {
          prompt: "The electron-pair donor is a Lewis…",
          options: ["base", "acid", "metal", "salt"],
          correctIndex: 0,
          explanation: "The donor is a Lewis base.",
        },
        {
          prompt: "The electron-pair acceptor is a Lewis…",
          options: ["acid", "base", "metal", "gas"],
          correctIndex: 0,
          explanation: "The acceptor is a Lewis acid.",
        },
        {
          prompt: "Ionic bonding forms between…",
          options: ["a metal and a non-metal", "two non-metals", "metal atoms", "noble gases"],
          correctIndex: 0,
          explanation: "Metal + non-metal → ionic.",
        },
        {
          prompt: "Which bond type produces small molecules?",
          options: ["covalent", "ionic", "metallic", "coordinate lattice"],
          correctIndex: 0,
          explanation: "Simple covalent bonding gives molecules.",
        },
        {
          prompt: "Which bond type conducts electricity as a solid?",
          options: ["metallic", "ionic", "covalent molecular", "none"],
          correctIndex: 0,
          explanation: "Metals conduct as solids via delocalised electrons.",
        },
        {
          prompt: "Ionic compounds conduct electricity when…",
          options: ["molten or dissolved", "solid", "never", "frozen"],
          correctIndex: 0,
          explanation: "Ions must be free to move.",
        },
        {
          prompt: "Molecular covalent substances have … melting points.",
          options: ["low", "high", "no", "negative"],
          correctIndex: 0,
          explanation: "Weak intermolecular forces give low melting points.",
        },
        {
          prompt: "Metals are described as … whereas ionic solids are brittle.",
          options: ["malleable/ductile", "gaseous", "non-conducting", "molecular"],
          correctIndex: 0,
          explanation: "Metals bend; ionic solids shatter.",
        },
        {
          prompt: "The hydroxonium ion H₃O⁺ forms when water donates a lone pair to…",
          options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"],
          correctIndex: 0,
          explanation: "H₂O + H⁺ → H₃O⁺ by a coordinate bond.",
        },
        {
          prompt: "Which type of substance is usually soluble in water?",
          options: ["ionic", "metallic", "non-polar covalent", "all equally"],
          correctIndex: 0,
          explanation: "Many ionic compounds dissolve in water.",
        },
        {
          prompt: "A giant metallic lattice consists of positive ions in a…",
          options: ["sea of delocalised electrons", "lattice of anions", "set of molecules", "lone-pair cloud"],
          correctIndex: 0,
          explanation: "Metal ions sit in an electron sea.",
        },
        {
          prompt: "Which bond involves a sea of delocalised electrons?",
          options: ["metallic", "ionic", "covalent", "coordinate"],
          correctIndex: 0,
          explanation: "The electron sea is the metallic model.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "In a coordinate (dative) covalent bond:",
          options: ["both shared electrons come from one atom", "each atom gives one electron", "electrons are transferred", "electrons are delocalised"],
          correctIndex: 0,
          answerKey: "Both electrons of the shared pair are donated by one atom.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which bonding type conducts electricity when solid?",
          options: ["metallic", "ionic", "simple covalent", "none of these"],
          correctIndex: 0,
          answerKey: "Metals conduct as solids because of delocalised electrons.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how the ammonium ion (NH₄⁺) is formed by a coordinate bond.",
          answerKey:
            "Ammonia (NH₃) has a lone pair on the nitrogen. A hydrogen ion (H⁺) has an empty orbital and no electrons. The nitrogen donates both electrons of its lone pair to the H⁺, forming a fourth N–H bond — a coordinate (dative) bond — giving NH₄⁺; all four N–H bonds are then identical. Award marks for the lone pair, the empty orbital on H⁺, and the donation of both electrons.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Compare ionic, covalent (molecular) and metallic substances by their electrical conductivity.",
          answerKey:
            "Ionic – conducts only when molten or dissolved (mobile ions), not as a solid. Covalent molecular – does not conduct (no free ions or electrons). Metallic – conducts well, even as a solid, due to delocalised electrons. One mark each.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare ionic, covalent and metallic bonding in terms of how they form, their structures and their properties, and explain what makes a coordinate bond a special case of covalent bonding.",
          answerKey:
            "A full answer contrasts the three bond types: ionic (metal + non-metal, electron transfer, giant lattice, high melting point, conducts when molten/dissolved, hard but brittle, often water-soluble); covalent molecular (non-metal + non-metal, shared electron pairs, small molecules, low melting point, non-conducting, often insoluble); metallic (metal atoms, sea of delocalised electrons in a giant lattice, high melting point, conducts as a solid, malleable/ductile). It should explain that a coordinate (dative) bond is a covalent bond in which both electrons of the shared pair come from one atom (a donor with a lone pair) to an acceptor with an empty orbital (e.g. NH₃ + H⁺ → NH₄⁺), and that once formed it is identical to an ordinary covalent bond. Award marks for the three-way comparison across formation/structure/properties and the correct account of coordinate bonding.",
          marks: 6,
        },
      ],
    },
  ],
};
