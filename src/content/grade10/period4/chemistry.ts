import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester Two, Period IV: Chemical Bonding.
export const chemistryG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Chemical Bonding",
  summary:
    "Period IV of the MoE Grade 10 Chemistry syllabus. Learners explain why atoms bond to reach a stable outer shell, and describe and contrast the three main types of chemical bond — ionic, covalent and metallic — and the properties of the substances they form.",
  topics: [
    {
      slug: "ionic-and-covalent-bonding",
      title: "Ionic and Covalent Bonding",
      objective:
        "By the end of the topic, learners should be able to explain why atoms form bonds, describe how ionic and covalent bonds form, and relate each bond type to the properties of the substances it produces.",
      estimatedMinutes: 160,
      notes: `## Introduction

- Most atoms are unstable and reach a full outer shell (like the noble gases) by **joining together** — forming chemical **bonds**.
- This is why atoms are almost never found alone but locked into compounds like salt and water.
- **This topic:** why atoms bond; **transferring** electrons (ionic) vs **sharing** them (covalent); and the different properties each produces.

## Why atoms bond

Atoms bond in order to achieve a **stable, full outer electron shell**, like the noble gases (the idea from Period III). An atom can reach this by **losing, gaining or sharing** electrons — and the way it does so determines the **type of bond**.

## Ionic bonding

**Ionic bonding** happens between a **metal and a non-metal**. Electrons are **transferred** from the metal to the non-metal.

- The **metal loses** its outer electron(s) and becomes a **positive ion (cation)**.
- The **non-metal gains** the electron(s) and becomes a **negative ion (anion)**.
- The oppositely charged ions attract each other strongly — this attraction is the **ionic bond**.

**Example — sodium chloride (NaCl):** sodium (2, 8, 1) loses one electron to become Na⁺; chlorine (2, 8, 7) gains it to become Cl⁻. Na⁺ and Cl⁻ attract to form NaCl.

\`\`\`svg Electron transfer forms an ionic bond (Na to Cl)
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium transferring an electron to chlorine">
  <circle cx="70" cy="60" r="30" fill="#fde68a" stroke="#92400e"/><text x="70" y="64" font-size="12" text-anchor="middle" fill="#451a03">Na</text>
  <circle cx="230" cy="60" r="30" fill="#bae6fd" stroke="#075985"/><text x="230" y="64" font-size="12" text-anchor="middle" fill="#082f49">Cl</text>
  <circle cx="110" cy="45" r="5" fill="#dc2626"/>
  <line x1="112" y1="45" x2="195" y2="52" stroke="#dc2626" stroke-width="1.5" marker-end="url(#e)"/>
  <text x="150" y="35" font-size="10" text-anchor="middle" fill="#dc2626">electron</text>
  <text x="70" y="105" font-size="11" text-anchor="middle" fill="#92400e">Na⁺</text>
  <text x="230" y="105" font-size="11" text-anchor="middle" fill="#075985">Cl⁻</text>
  <defs><marker id="e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#dc2626"/></marker></defs>
</svg>
\`\`\`

### Properties of ionic compounds
- **High melting and boiling points** (strong attraction between ions).
- **Conduct electricity when molten or dissolved** (ions are free to move) but **not when solid**.
- Usually **hard, crystalline solids**; many are **soluble in water**.

## Covalent bonding

**Covalent bonding** happens between **two non-metals**. Instead of transferring electrons, the atoms **share** pairs of electrons so that each reaches a full outer shell.

- A **single covalent bond** is one shared pair of electrons.
- Examples: **H₂** (two hydrogen atoms share a pair), **H₂O** (water), **CO₂**, **CH₄** (methane).

\`\`\`svg A shared pair of electrons in a covalent bond (H2)
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two hydrogen atoms sharing a pair of electrons">
  <circle cx="80" cy="50" r="28" fill="#e0e7ff" stroke="#3730a3"/><text x="80" y="54" font-size="12" text-anchor="middle" fill="#3730a3">H</text>
  <circle cx="140" cy="50" r="28" fill="#e0e7ff" stroke="#3730a3"/><text x="140" y="54" font-size="12" text-anchor="middle" fill="#3730a3">H</text>
  <circle cx="103" cy="50" r="4" fill="#dc2626"/><circle cx="117" cy="50" r="4" fill="#dc2626"/>
  <text x="110" y="90" font-size="10" text-anchor="middle" fill="#dc2626">shared pair</text>
</svg>
\`\`\`

### Properties of covalent (molecular) substances
- **Low melting and boiling points** (weak forces between molecules); many are gases or liquids.
- **Do not conduct electricity** (no free ions or electrons).
- Often **insoluble in water**.

## Comparing the two bonds

| Feature | Ionic bond | Covalent bond |
|---|---|---|
| Formed between | metal + non-metal | non-metal + non-metal |
| Electrons | transferred | shared |
| Particles | ions | molecules |
| Conducts electricity | when molten/dissolved | no |
| Melting point | high | low |

## Common errors and misconceptions

- **Confusing which type forms where** — **ionic** = metal + non-metal (electrons *transferred*); **covalent** = non-metal + non-metal (electrons *shared*).
- **Thinking ionic solids conduct electricity** — a solid ionic compound does **not** conduct; it conducts only when **molten or dissolved**, because the ions are then free to move.
- **Saying covalent compounds conduct** — they have no free ions or electrons, so most do not conduct at all.
- **Muddling ions and atoms** — an **ion** is a charged atom that has lost or gained electrons; a metal forms a **positive** ion, a non-metal a **negative** one.`,
      workedExample: `**Task.** (a) Describe how an ionic bond forms in magnesium oxide (MgO), given Mg is 2,8,2 and O is 2,6. (b) Explain why sodium chloride conducts electricity when molten but not when solid.

**Part (a) — ionic bonding in MgO**
Magnesium is a **metal** and oxygen is a **non-metal**, so they form an **ionic bond** by **transferring electrons**:
- Magnesium (2, 8, **2**) **loses its two outer electrons** to reach the stable 2, 8 arrangement, becoming **Mg²⁺**.
- Oxygen (2, **6**) **gains those two electrons** to reach 2, 8, becoming **O²⁻**.
- The strong attraction between **Mg²⁺** and **O²⁻** is the ionic bond, giving **MgO**.

**Part (b) — conductivity of NaCl**
Electricity is carried by **charged particles that are free to move**.
- **When molten (or dissolved),** the ions Na⁺ and Cl⁻ are **free to move**, so they carry charge — NaCl **conducts**.
- **When solid,** the ions are locked in a fixed **lattice** and **cannot move**, so solid NaCl **does not conduct**.

**Conclusion:** MgO forms by the transfer of two electrons from magnesium to oxygen (an ionic bond), and ionic compounds conduct only when their ions are free to move — that is, when molten or dissolved, not when solid.`,
      teachingTip:
        "The reliable rule learners need is: metal + non-metal → ionic (transfer); non-metal + non-metal → covalent (share). Have them classify a list of compounds by that rule first, then explain the electron movement. The 'conducts only when molten or dissolved' property is a frequent exam question — always tie it back to whether the charged particles (ions) are free to move.",
      quiz: [
        {
          prompt: "Atoms form chemical bonds in order to achieve a…",
          options: ["stable, full outer shell", "larger nucleus", "smaller mass", "higher temperature"],
          correctIndex: 0,
          explanation: "Bonding lets atoms reach a stable noble-gas arrangement.",
        },
        {
          prompt: "Ionic bonding occurs between a…",
          options: ["metal and a non-metal", "two metals", "two non-metals", "two noble gases"],
          correctIndex: 0,
          explanation: "Ionic bonds form between metals and non-metals.",
        },
        {
          prompt: "In ionic bonding, electrons are…",
          options: ["transferred", "shared", "destroyed", "created"],
          correctIndex: 0,
          explanation: "Electrons move from the metal to the non-metal.",
        },
        {
          prompt: "A metal atom that loses electrons becomes a…",
          options: ["positive ion (cation)", "negative ion", "neutral atom", "molecule"],
          correctIndex: 0,
          explanation: "Losing electrons leaves a positive charge.",
        },
        {
          prompt: "A non-metal atom that gains electrons becomes a…",
          options: ["negative ion (anion)", "positive ion", "neutral atom", "metal"],
          correctIndex: 0,
          explanation: "Gaining electrons gives a negative charge.",
        },
        {
          prompt: "In sodium chloride, sodium becomes…",
          options: ["Na⁺", "Na⁻", "Na²⁺", "Cl⁻"],
          correctIndex: 0,
          explanation: "Sodium loses one electron to become Na⁺.",
        },
        {
          prompt: "Covalent bonding occurs between…",
          options: ["two non-metals", "a metal and a non-metal", "two metals", "noble gases only"],
          correctIndex: 0,
          explanation: "Covalent bonds form between non-metals.",
        },
        {
          prompt: "In covalent bonding, electrons are…",
          options: ["shared", "transferred", "lost only", "removed from the atom"],
          correctIndex: 0,
          explanation: "Covalent atoms share pairs of electrons.",
        },
        {
          prompt: "A single covalent bond is…",
          options: ["one shared pair of electrons", "two transferred electrons", "a metal ion", "an empty shell"],
          correctIndex: 0,
          explanation: "It is one shared pair.",
        },
        {
          prompt: "Which is a covalently bonded substance?",
          options: ["water (H₂O)", "sodium chloride (NaCl)", "magnesium oxide (MgO)", "potassium fluoride (KF)"],
          correctIndex: 0,
          explanation: "Water is made of non-metals sharing electrons.",
        },
        {
          prompt: "Ionic compounds have … melting points.",
          options: ["high", "low", "no", "negative"],
          correctIndex: 0,
          explanation: "Strong ionic attraction gives high melting points.",
        },
        {
          prompt: "Covalent (molecular) substances usually have … melting points.",
          options: ["low", "high", "the same as metals", "infinite"],
          correctIndex: 0,
          explanation: "Weak forces between molecules mean low melting points.",
        },
        {
          prompt: "An ionic compound conducts electricity when it is…",
          options: ["molten or dissolved", "solid", "frozen", "never"],
          correctIndex: 0,
          explanation: "Ions must be free to move to carry charge.",
        },
        {
          prompt: "Solid ionic compounds do not conduct electricity because…",
          options: ["the ions cannot move", "they have no ions", "they are metals", "they are gases"],
          correctIndex: 0,
          explanation: "In a solid the ions are locked in a lattice.",
        },
        {
          prompt: "Covalent substances generally do not conduct electricity because they have…",
          options: ["no free ions or electrons", "too many ions", "high melting points", "metal atoms"],
          correctIndex: 0,
          explanation: "Molecules carry no free charge.",
        },
        {
          prompt: "In magnesium oxide, magnesium (2,8,2) forms which ion?",
          options: ["Mg²⁺", "Mg⁻", "Mg⁺", "O²⁻"],
          correctIndex: 0,
          explanation: "Losing two electrons gives Mg²⁺.",
        },
        {
          prompt: "Which pair of atoms would form an ionic bond?",
          options: ["potassium and chlorine", "oxygen and oxygen", "hydrogen and carbon", "nitrogen and hydrogen"],
          correctIndex: 0,
          explanation: "Metal (K) + non-metal (Cl) → ionic.",
        },
        {
          prompt: "Which pair of atoms would form a covalent bond?",
          options: ["carbon and hydrogen", "sodium and chlorine", "magnesium and oxygen", "potassium and fluorine"],
          correctIndex: 0,
          explanation: "Two non-metals (C and H) share electrons.",
        },
        {
          prompt: "The particles in an ionic compound are…",
          options: ["ions", "molecules", "atoms with no charge", "electrons only"],
          correctIndex: 0,
          explanation: "Ionic compounds are made of charged ions.",
        },
        {
          prompt: "Methane (CH₄) is held together by … bonds.",
          options: ["covalent", "ionic", "metallic", "no"],
          correctIndex: 0,
          explanation: "Carbon and hydrogen (non-metals) share electrons covalently.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how an ionic bond forms in sodium chloride (Na is 2,8,1; Cl is 2,8,7).",
          answerKey:
            "Sodium (a metal) loses its one outer electron to reach 2,8, becoming Na⁺; chlorine (a non-metal) gains that electron to reach 2,8,8, becoming Cl⁻; the strong attraction between Na⁺ and Cl⁻ is the ionic bond. Award marks for the electron transfer, the two ions, and the attraction.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which statement about covalent bonding is correct?",
          options: [
            "Electrons are shared between non-metal atoms",
            "Electrons are transferred from metal to non-metal",
            "It forms ions",
            "It occurs only between metals",
          ],
          correctIndex: 0,
          answerKey: "Covalent bonding is the sharing of electrons between non-metals.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Give two differences between ionic and covalent compounds.",
          answerKey:
            "Any two: ionic = electrons transferred / covalent = shared; ionic between metal+non-metal / covalent between non-metals; ionic made of ions / covalent of molecules; ionic conducts when molten or dissolved / covalent does not conduct; ionic high melting point / covalent low. Award a mark per valid difference.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain why an ionic compound such as sodium chloride conducts electricity when molten or dissolved but not when solid, and relate this to the movement of ions.",
          answerKey:
            "A strong answer explains that electrical conduction requires charged particles that are free to move. In solid NaCl the ions (Na⁺ and Cl⁻) are held in a fixed lattice and cannot move, so it does not conduct. When molten or dissolved in water, the ions become free to move and carry charge, so it conducts. Award marks for the requirement of mobile charged particles and the correct explanation of the solid vs molten/dissolved states.",
          marks: 5,
        },
      ],
    },
    {
      slug: "metallic-bonding",
      title: "Metallic Bonding and the Properties of Metals",
      objective:
        "By the end of the topic, learners should be able to describe metallic bonding as a lattice of positive ions in a sea of delocalised electrons, and use this model to explain the characteristic properties of metals.",
      estimatedMinutes: 130,
      notes: `## Introduction

- Ionic bonding transfers electrons; covalent bonding shares them. A third kind holds pure metals together: **metallic bonding**.
- Its model explains why metals **conduct heat and electricity, can be hammered into shape, and shine**.
- **This topic:** metallic bonding, and how it explains the properties of metals.

## The third type of bond

The first two bonds joined metals to non-metals (ionic) and non-metals to each other (covalent). The third, **metallic bonding**, holds a **metal** together.

## The metallic bonding model

In a metal, the atoms are packed closely in a regular arrangement (a **lattice**). Each metal atom **loses its outer electrons**, which become **delocalised** — free to move throughout the whole structure.

So a metal is described as:

> a **lattice of positive metal ions** surrounded by a **"sea" of delocalised (free) electrons**.

The **metallic bond** is the strong attraction between the positive ions and this sea of negative electrons.

\`\`\`svg Metallic bonding: positive ions in a sea of electrons
<svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid of positive metal ions surrounded by free electrons">
  <rect x="10" y="10" width="220" height="110" fill="#f1f5f9" stroke="#64748b"/>
  <g fill="#fbbf24" stroke="#92400e">
    <circle cx="50" cy="40" r="12"/><circle cx="120" cy="40" r="12"/><circle cx="190" cy="40" r="12"/>
    <circle cx="50" cy="90" r="12"/><circle cx="120" cy="90" r="12"/><circle cx="190" cy="90" r="12"/>
  </g>
  <g fill="#2563eb">
    <circle cx="85" cy="65" r="3"/><circle cx="155" cy="65" r="3"/><circle cx="30" cy="65" r="3"/><circle cx="210" cy="65" r="3"/><circle cx="120" cy="25" r="3"/><circle cx="120" cy="105" r="3"/>
  </g>
  <text x="120" y="20" font-size="9" text-anchor="middle" fill="#92400e">+ = metal ions,  • = free electrons</text>
</svg>
\`\`\`

## Explaining the properties of metals

The metallic model explains why metals behave as they do:

- **Good conductors of electricity and heat** — the **delocalised electrons are free to move** and carry charge and energy through the metal.
- **Malleable (can be hammered into shape) and ductile (drawn into wires)** — the layers of ions can **slide over one another** without breaking the bond, because the electron sea holds them together in any position.
- **Shiny (lustrous)** — the free electrons reflect light.
- **High melting and boiling points** — the metallic bond is strong, so much energy is needed to break it.
- **Strong and dense** — the ions are packed closely.

## Summary of the three bonds

| Bond | Between | Held by |
|---|---|---|
| **Ionic** | metal + non-metal | attraction of + and − ions |
| **Covalent** | non-metal + non-metal | shared electron pairs |
| **Metallic** | metal atoms | + ions in a sea of free electrons |

## Common errors and misconceptions

- **Thinking metals are held by ionic bonds** — a pure metal has only *one* kind of atom, so there are no negative ions; it is held by **metallic** bonding.
- **Explaining conduction wrongly** — metals conduct because of the **delocalised (free) electrons** that drift through the lattice, not because of moving ions.
- **Confusing malleable and brittle** — metals are **malleable** (layers of ions slide without breaking the bond); ionic solids are **brittle** (the lattice shatters when like charges meet).
- **Saying metals share electrons in pairs** — the electrons are **delocalised** across the whole structure, not shared between two atoms as in covalent bonding.`,
      workedExample: `**Task.** Use the metallic bonding model to explain (a) why copper is used for electrical wires, and (b) why a metal can be bent and hammered into shape without breaking.

**Part (a) — copper conducts electricity**
In copper, the metal atoms form a lattice of **positive ions** surrounded by a **sea of delocalised (free) electrons**. When a voltage is applied, these **free electrons move** through the metal, carrying electric charge. Because the electrons are free to move, copper is an excellent **conductor of electricity**, which is why it is used for wires.

**Part (b) — metals are malleable and ductile**
The positive metal ions are arranged in **layers**. Because the ions are held together by the surrounding **sea of electrons** (not by fixed bonds to particular neighbours), the layers can **slide over one another** when a force is applied — and the electron sea simply moves with them, keeping the metal bonded. So the metal **changes shape** (it can be hammered flat or drawn into a wire) **without breaking**. This is why metals are **malleable** and **ductile**.

**Conclusion:** the sea of delocalised electrons explains both key facts — the moving electrons make metals conduct, and their ability to hold sliding layers together makes metals malleable and ductile.`,
      teachingTip:
        "The phrase 'a lattice of positive ions in a sea of delocalised electrons' should become second nature — have learners recite and draw it. Then each property is just an application: free electrons → conducts; layers slide → malleable; free electrons reflect light → shiny. Teaching the properties as consequences of one model (rather than a list to memorise) is what secures the marks.",
      quiz: [
        {
          prompt: "Metallic bonding holds together…",
          options: ["metal atoms", "a metal and a non-metal", "two non-metals", "noble gases"],
          correctIndex: 0,
          explanation: "Metallic bonding occurs within a metal.",
        },
        {
          prompt: "In a metal, the outer electrons become…",
          options: ["delocalised (free to move)", "fixed to one atom", "transferred to non-metals", "destroyed"],
          correctIndex: 0,
          explanation: "Outer electrons are delocalised through the metal.",
        },
        {
          prompt: "A metal is described as a lattice of … surrounded by a sea of electrons.",
          options: ["positive ions", "negative ions", "molecules", "noble gases"],
          correctIndex: 0,
          explanation: "Positive metal ions sit in the electron sea.",
        },
        {
          prompt: "The metallic bond is the attraction between positive ions and the…",
          options: ["sea of delocalised electrons", "non-metal atoms", "protons", "neutrons"],
          correctIndex: 0,
          explanation: "The ions are attracted to the free-electron sea.",
        },
        {
          prompt: "Metals conduct electricity because…",
          options: ["delocalised electrons are free to move", "ions move through the solid", "they have no electrons", "they melt easily"],
          correctIndex: 0,
          explanation: "Free electrons carry the electric charge.",
        },
        {
          prompt: "Metals conduct heat well because of their…",
          options: ["free-moving electrons", "fixed ions", "shared pairs", "low density"],
          correctIndex: 0,
          explanation: "Delocalised electrons transfer heat energy.",
        },
        {
          prompt: "That a metal can be hammered into shape is called being…",
          options: ["malleable", "ductile", "brittle", "soluble"],
          correctIndex: 0,
          explanation: "Malleable = can be hammered/shaped.",
        },
        {
          prompt: "That a metal can be drawn into wires is called being…",
          options: ["ductile", "malleable", "magnetic", "shiny"],
          correctIndex: 0,
          explanation: "Ductile = can be drawn into wires.",
        },
        {
          prompt: "Metals are malleable because the layers of ions can…",
          options: ["slide over one another", "disappear", "gain electrons", "become gases"],
          correctIndex: 0,
          explanation: "Layers slide while the electron sea holds them together.",
        },
        {
          prompt: "Metals are shiny because the free electrons…",
          options: ["reflect light", "absorb all light", "produce heat", "form ions"],
          correctIndex: 0,
          explanation: "The delocalised electrons reflect light (lustre).",
        },
        {
          prompt: "Metals generally have … melting points.",
          options: ["high", "low", "no", "negative"],
          correctIndex: 0,
          explanation: "Strong metallic bonds need much energy to break.",
        },
        {
          prompt: "Which property makes copper suitable for electrical wiring?",
          options: ["it conducts electricity", "it is brittle", "it does not conduct", "it is a gas"],
          correctIndex: 0,
          explanation: "Copper's free electrons make it a good conductor.",
        },
        {
          prompt: "In metallic bonding, the positive ions are arranged in a…",
          options: ["regular lattice", "single line", "gas cloud", "molecule"],
          correctIndex: 0,
          explanation: "Metal ions form a regular close-packed lattice.",
        },
        {
          prompt: "Which particles carry charge in a metal?",
          options: ["delocalised electrons", "positive ions moving", "protons", "neutrons"],
          correctIndex: 0,
          explanation: "The free electrons move and carry charge.",
        },
        {
          prompt: "When a metal is bent, the metallic bond…",
          options: ["does not break (electrons hold ions together)", "breaks completely", "turns ionic", "disappears"],
          correctIndex: 0,
          explanation: "The electron sea keeps the sliding layers bonded.",
        },
        {
          prompt: "Which bond type involves a 'sea of electrons'?",
          options: ["metallic", "ionic", "covalent", "none"],
          correctIndex: 0,
          explanation: "The electron-sea model describes metallic bonding.",
        },
        {
          prompt: "Compared with a covalent gas, a metal's melting point is…",
          options: ["much higher", "much lower", "the same", "zero"],
          correctIndex: 0,
          explanation: "Strong metallic bonds give high melting points.",
        },
        {
          prompt: "Which of the three bond types forms between two non-metals?",
          options: ["covalent", "ionic", "metallic", "none"],
          correctIndex: 0,
          explanation: "Two non-metals share electrons covalently.",
        },
        {
          prompt: "Which of the three bond types forms between a metal and a non-metal?",
          options: ["ionic", "covalent", "metallic", "none"],
          correctIndex: 0,
          explanation: "Metal + non-metal transfer electrons ionically.",
        },
        {
          prompt: "The metallic model explains metal properties as consequences of the…",
          options: ["sea of delocalised electrons", "absence of electrons", "sharing of pairs", "transfer of ions"],
          correctIndex: 0,
          explanation: "The free-electron sea underlies conduction, malleability and lustre.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Describe the structure of a metal using the metallic bonding model.",
          answerKey:
            "A metal is a regular lattice of positive metal ions surrounded by a 'sea' of delocalised (free) electrons; the metallic bond is the attraction between the positive ions and the sea of electrons. Award marks for the lattice of positive ions and the sea of delocalised electrons.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Metals conduct electricity because…",
          options: [
            "they contain delocalised electrons that are free to move",
            "their ions move through the solid",
            "they contain no charged particles",
            "they are covalently bonded",
          ],
          correctIndex: 0,
          answerKey: "Free (delocalised) electrons carry the current.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain, using the metallic bonding model, why metals are malleable.",
          answerKey:
            "The positive ions are arranged in layers held together by the surrounding sea of electrons; when a force is applied, the layers can slide over one another while the electron sea keeps them bonded, so the metal changes shape without breaking. Award marks for the sliding layers and the electron sea maintaining the bond.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Using the metallic bonding model, explain three characteristic properties of metals.",
          answerKey:
            "A strong answer explains three properties as consequences of the model (a lattice of positive ions in a sea of delocalised electrons): electrical/thermal conductivity — free electrons move and carry charge/heat; malleability and ductility — layers of ions slide over one another while the electron sea holds them together; lustre (shininess) — free electrons reflect light; high melting point — strong metallic bonds need much energy to break. Award marks for three properties each correctly linked to the model.",
          marks: 5,
        },
      ],
    },
  ],
};
