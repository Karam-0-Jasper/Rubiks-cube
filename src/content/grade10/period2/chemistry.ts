import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester One, Period II: Atomic Structure. The CONTENTS list is expanded to
// one topic per item: 1. History of atomic structure; 2. Fundamental particles
// and their arrangement; 3. Atomic number, mass number and isotopes; 4. Relative
// atomic mass; 5. Quantum numbers; 6. Electron configuration; 7. Rules and
// principles for filling in electrons.
export const chemistryG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Atomic Structure",
  summary:
    "Period II of the MoE Grade 10 Chemistry syllabus. Learners trace the development of atomic theory from Dalton to Bohr, identify the three fundamental particles and their arrangement, use atomic number and mass number to work out isotopes, calculate relative atomic mass from isotopic abundance, meet the four quantum numbers, and write electron configurations using the Aufbau principle, the Pauli exclusion principle and Hund's rule.",
  topics: [
    {
      // source: LibreTexts (Introductory Chemistry) — 4.3 The Nuclear Atom (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/04%3A_Atoms_and_Elements/4.03%3A_The_Nuclear_Atom)
      slug: "history-of-atomic-structure",
      title: "History of Atomic Structure",
      objective:
        "By the end of the topic, learners should be able to outline the contributions of Dalton, Thomson, Rutherford and Bohr to atomic theory and explain how each experiment forced the model to change. (MoE Grade 10 Period II, CONTENTS 1.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- The picture of the atom was built up over two hundred years, each scientist improving on the last.
- **This topic:** the story from Dalton's solid sphere to Bohr's shells, and the experiments that forced each change.
- Shows how a scientific model changes as evidence grows.

## The idea of the atom

- **Atom** — the smallest particle of an element that still has the properties of that element.
- The idea developed over two centuries as scientists tested and improved earlier models.

## A short history of atomic theory

- **John Dalton (1803).** All matter is made of tiny, indivisible **atoms**; atoms of the same element are identical; atoms combine in fixed ratios to form compounds. His atom was a solid, featureless sphere.
- **J. J. Thomson (1897).** Using a **cathode-ray tube**, he found rays bending toward a positive plate — proving a tiny **negative** particle, the **electron**. His **"plum-pudding" model** pictured a ball of positive charge with electrons scattered through it.
- **Ernest Rutherford (1911).** With Geiger and Marsden he fired positive **alpha particles** at thin **gold foil**. Most passed through, but a few bounced sharply back — proving a tiny, dense, positive **nucleus** in mostly empty space.
- **Niels Bohr (1913).** Electrons travel around the nucleus in fixed **energy levels (shells)**, each holding a definite amount of energy (stationary states).

\`\`\`svg The changing model of the atom
<svg viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four atomic models from Dalton's sphere to Bohr's shells">
  <circle cx="42" cy="50" r="26" fill="#f59e0b" stroke="#92400e"/>
  <text x="42" y="95" font-size="9" text-anchor="middle" fill="#92400e">Dalton</text>
  <circle cx="130" cy="50" r="26" fill="#fde68a" stroke="#92400e"/>
  <circle cx="120" cy="42" r="3" fill="#1e3a8a"/><circle cx="140" cy="45" r="3" fill="#1e3a8a"/><circle cx="128" cy="60" r="3" fill="#1e3a8a"/>
  <text x="130" y="95" font-size="9" text-anchor="middle" fill="#92400e">Thomson</text>
  <circle cx="220" cy="50" r="26" fill="none" stroke="#b45309" stroke-dasharray="2 2"/>
  <circle cx="220" cy="50" r="6" fill="#f59e0b" stroke="#92400e"/>
  <text x="220" y="95" font-size="9" text-anchor="middle" fill="#92400e">Rutherford</text>
  <circle cx="308" cy="50" r="26" fill="none" stroke="#b45309" stroke-dasharray="2 2"/>
  <circle cx="308" cy="50" r="15" fill="none" stroke="#b45309" stroke-dasharray="2 2"/>
  <circle cx="308" cy="50" r="5" fill="#f59e0b" stroke="#92400e"/>
  <circle cx="308" cy="35" r="3" fill="#1e3a8a"/><circle cx="334" cy="50" r="3" fill="#1e3a8a"/>
  <text x="308" y="95" font-size="9" text-anchor="middle" fill="#92400e">Bohr</text>
</svg>
\`\`\`

## Why the gold-foil result mattered

- The plum-pudding model spread the positive charge evenly.
- A few alpha particles bouncing **straight back** could only mean the positive charge is concentrated in a tiny, dense centre — the **nucleus**.
- Most passing straight through showed the atom is mostly **empty space**.
- This single experiment overturned Thomson's model.

## Common errors and misconceptions

- **Treating a model as final truth** — each atomic model was the best picture *at the time* and was replaced when new evidence appeared.
- **Thinking the atom is mostly solid** — an atom is mostly **empty space**; its mass sits in a tiny central nucleus.
- **Crediting the nucleus to Dalton or Thomson** — the nucleus came from **Rutherford's** gold-foil experiment.`,
      workedExample: `**Task.** Explain what Rutherford's gold-foil experiment showed, and use the results to justify the nuclear model of the atom.

**The experiment**
A beam of positively charged **alpha particles** was directed at a very thin sheet of **gold foil**, with a screen around it to detect where the particles went.

**The three observations and what each proved**
1. **Most alpha particles passed straight through** → the atom is mostly **empty space**.
2. **A small number were deflected through large angles** → there is a **concentrated positive charge** that repels the positive alpha particles.
3. **A very few bounced almost straight back** → that positive charge must be **tiny and very dense** — a nucleus — because only a head-on hit with something massive could reverse a particle.

**Conclusion (the nuclear model)**
The atom has a **small, dense, positively charged nucleus** at its centre containing most of the mass, surrounded by mostly empty space in which the electrons move. This replaced Thomson's plum-pudding model, in which the positive charge was spread out and could not have caused the large deflections.`,
      quiz: [
        {
          prompt: "The smallest particle of an element that keeps its properties is the…",
          options: ["atom", "molecule", "mixture", "compound"],
          correctIndex: 0,
          explanation: "An atom is the smallest unit of an element.",
        },
        {
          prompt: "Who proposed that all matter is made of tiny indivisible atoms?",
          options: ["John Dalton", "J. J. Thomson", "Ernest Rutherford", "Niels Bohr"],
          correctIndex: 0,
          explanation: "Dalton's 1803 theory introduced indivisible atoms.",
        },
        {
          prompt: "The electron was discovered by…",
          options: ["J. J. Thomson", "Dalton", "Rutherford", "Bohr"],
          correctIndex: 0,
          explanation: "Thomson discovered the negatively charged electron in 1897.",
        },
        {
          prompt: "Thomson discovered the electron using a…",
          options: ["cathode-ray tube", "gold foil", "microscope", "balance"],
          correctIndex: 0,
          explanation: "Cathode rays bent toward the positive plate, showing a negative particle.",
        },
        {
          prompt: "The 'plum-pudding' model of the atom was proposed by…",
          options: ["Thomson", "Rutherford", "Dalton", "Bohr"],
          correctIndex: 0,
          explanation: "Thomson pictured electrons dotted in a sphere of positive charge.",
        },
        {
          prompt: "Rutherford's famous experiment fired alpha particles at…",
          options: ["thin gold foil", "a water tank", "a magnet", "a glass rod"],
          correctIndex: 0,
          explanation: "The gold-foil experiment revealed the nucleus.",
        },
        {
          prompt: "Rutherford concluded that the atom is mostly…",
          options: ["empty space", "solid metal", "negative charge", "water"],
          correctIndex: 0,
          explanation: "Most alpha particles passed straight through, showing empty space.",
        },
        {
          prompt: "Which scientist placed electrons in fixed energy levels (shells)?",
          options: ["Niels Bohr", "Dalton", "Thomson", "Rutherford"],
          correctIndex: 0,
          explanation: "Bohr's model has electrons in defined shells.",
        },
        {
          prompt: "The fact that a few alpha particles bounced back showed the nucleus is…",
          options: ["tiny and dense", "large and soft", "negatively charged", "made of electrons"],
          correctIndex: 0,
          explanation: "Only a small, dense, positive centre could reverse the particles.",
        },
        {
          prompt: "Which model came directly BEFORE Rutherford's nuclear model?",
          options: ["Thomson's plum-pudding model", "Bohr's shell model", "Dalton's sphere", "the quantum model"],
          correctIndex: 0,
          explanation: "Rutherford's results overturned Thomson's plum-pudding model.",
        },
        {
          prompt: "Dalton pictured the atom as a…",
          options: ["solid indivisible sphere", "cloud of electrons", "nucleus with shells", "pudding with plums"],
          correctIndex: 0,
          explanation: "Dalton's atom was a featureless solid ball.",
        },
        {
          prompt: "Rutherford worked with which two experimenters on the scattering experiment?",
          options: ["Geiger and Marsden", "Dalton and Bohr", "Thomson and Chadwick", "Curie and Becquerel"],
          correctIndex: 0,
          explanation: "The gold-foil (Geiger–Marsden) experiment was done in Rutherford's lab.",
        },
        {
          prompt: "Alpha particles carry a … charge.",
          options: ["positive", "negative", "neutral", "variable"],
          correctIndex: 0,
          explanation: "Alpha particles are positively charged.",
        },
        {
          prompt: "Bohr called the fixed-energy electron orbits…",
          options: ["stationary states (energy levels)", "clouds", "pudding", "nuclei"],
          correctIndex: 0,
          explanation: "Electrons occupy stationary states of constant energy.",
        },
        {
          prompt: "The large-angle deflection of some alpha particles showed the atom contains a…",
          options: ["concentrated positive charge", "spread-out negative charge", "cloud of neutrons", "vacuum only"],
          correctIndex: 0,
          explanation: "A concentrated positive charge repelled the positive alpha particles.",
        },
        {
          prompt: "Dalton's theory says atoms of the same element are…",
          options: ["identical", "always different", "made of electrons", "divisible"],
          correctIndex: 0,
          explanation: "Dalton held that atoms of one element are identical.",
        },
        {
          prompt: "The main lesson of the sequence of atomic models is that scientific models…",
          options: ["change as new evidence appears", "never change", "are always right first time", "come only from Dalton"],
          correctIndex: 0,
          explanation: "Each model was improved when new evidence arrived.",
        },
        {
          prompt: "Which discovery is credited to Rutherford?",
          options: ["the nucleus", "the electron", "fixed energy levels", "indivisible atoms"],
          correctIndex: 0,
          explanation: "Rutherford discovered the atomic nucleus.",
        },
        {
          prompt: "In Thomson's model, the electrons were embedded in a sphere of…",
          options: ["positive charge", "negative charge", "neutrons", "empty space"],
          correctIndex: 0,
          explanation: "Electrons sat in a ball of positive charge like plums in pudding.",
        },
        {
          prompt: "The order of atomic models from earliest to latest is…",
          options: [
            "Dalton → Thomson → Rutherford → Bohr",
            "Bohr → Rutherford → Thomson → Dalton",
            "Thomson → Dalton → Bohr → Rutherford",
            "Rutherford → Dalton → Thomson → Bohr",
          ],
          correctIndex: 0,
          explanation: "Solid sphere → plum pudding → nuclear → shells.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which observation from the gold-foil experiment proved the nucleus is very small and dense?",
          options: [
            "A few alpha particles bounced almost straight back",
            "Most particles passed straight through",
            "The foil glowed",
            "The particles disappeared",
          ],
          correctIndex: 0,
          answerKey: "Only a head-on hit with a tiny dense mass could reverse an alpha particle.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The scientist who discovered the electron was:",
          options: ["J. J. Thomson", "John Dalton", "Ernest Rutherford", "Niels Bohr"],
          correctIndex: 0,
          answerKey: "Thomson discovered the electron with cathode-ray experiments in 1897.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State one contribution each of Dalton, Thomson and Bohr to our understanding of the atom.",
          answerKey:
            "Dalton – matter is made of indivisible atoms combining in fixed ratios. Thomson – discovered the electron / plum-pudding model. Bohr – electrons occupy fixed energy levels (shells). Award a mark per correct contribution.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Why did Rutherford's results force scientists to abandon Thomson's plum-pudding model?",
          answerKey:
            "In the plum-pudding model the positive charge was spread evenly, so all alpha particles should have passed through with little deflection. The large-angle deflections and back-scattering could only be explained by a tiny, dense, concentrated positive charge (the nucleus), which the plum-pudding model did not contain. Award marks for identifying the unexpected deflection and the need for a concentrated nucleus.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe Rutherford's gold-foil experiment and explain how each of its main results led to the nuclear model of the atom.",
          answerKey:
            "A full answer: alpha particles were fired at thin gold foil. Result 1 — most passed straight through → atom is mostly empty space. Result 2 — some deflected at large angles → a concentrated positive charge repelled them. Result 3 — a very few bounced back → that charge is in a tiny, dense nucleus. Conclusion: a small dense positive nucleus surrounded by electrons in empty space, replacing the plum-pudding model. Award marks for the method, at least two results with correct interpretation, and the conclusion.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 2.2 Discovery of Atomic Structure / The Nuclear Atom (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(LibreTexts)/04%3A_Atoms_and_Elements/4.03%3A_The_Nuclear_Atom)
      slug: "fundamental-particles",
      title: "Fundamental Particles and Their Arrangement",
      objective:
        "By the end of the topic, learners should be able to name the three fundamental particles, state their charges, relative masses and positions, and describe how they are arranged in the atom. (MoE Grade 10 Period II, CONTENTS 2.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Every atom is built from three **subatomic particles**: the proton, the neutron and the electron.
- **This topic:** their charges, masses and positions, and how they are arranged in the atom.

## The three fundamental particles

| Particle | Symbol | Charge | Relative mass | Location |
|---|---|---|---|---|
| **Proton** | p | +1 | 1 | in the nucleus |
| **Neutron** | n | 0 (neutral) | 1 | in the nucleus |
| **Electron** | e⁻ | −1 | ~1/1840 (≈0) | in shells around the nucleus |

## Arrangement of the particles

- The **nucleus** is a tiny, dense centre containing the **protons and neutrons** (together called **nucleons**).
- Because it holds all the protons and almost all the mass, the nucleus is **positive** and carries nearly all the atom's mass.
- **Electrons** move around the nucleus in **shells (energy levels)**; they take up almost all the atom's volume but almost none of its mass.

\`\`\`svg Arrangement of particles in an atom
<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nucleus of protons and neutrons with electrons in shells">
  <circle cx="110" cy="90" r="75" fill="none" stroke="#b45309" stroke-dasharray="3 3"/>
  <circle cx="110" cy="90" r="45" fill="none" stroke="#b45309" stroke-dasharray="3 3"/>
  <circle cx="98" cy="88" r="9" fill="#dc2626"/><text x="98" y="92" font-size="8" text-anchor="middle" fill="#fff">p</text>
  <circle cx="118" cy="84" r="9" fill="#64748b"/><text x="118" y="88" font-size="8" text-anchor="middle" fill="#fff">n</text>
  <circle cx="108" cy="100" r="9" fill="#dc2626"/><text x="108" y="104" font-size="8" text-anchor="middle" fill="#fff">p</text>
  <circle cx="110" cy="15" r="5" fill="#1e3a8a"/><circle cx="110" cy="45" r="5" fill="#1e3a8a"/><circle cx="155" cy="90" r="5" fill="#1e3a8a"/>
  <text x="110" y="178" font-size="9" text-anchor="middle" fill="#92400e">protons + neutrons in nucleus; electrons in shells</text>
</svg>
\`\`\`

## The neutral atom

- A neutral atom has **equal numbers of protons and electrons**, so the positive and negative charges cancel.
- If an atom **loses** electrons it becomes a positive **ion (cation)**; if it **gains** electrons it becomes a negative **ion (anion)**.

## Why mass sits in the nucleus

- A proton and a neutron each have a relative mass of about 1; an electron is roughly 1/1840 as heavy.
- So the mass of an atom is essentially the mass of its **protons + neutrons** (the nucleons).

## Common errors and misconceptions

- **Getting the charges wrong** — proton +1, electron −1, neutron 0. Protons and neutrons sit in the nucleus; electrons occupy shells.
- **Saying electrons weigh as much as protons** — an electron's mass is about 1/1840 of a proton's; almost all the mass is in the nucleus.
- **Confusing atoms and ions** — a neutral atom has equal protons and electrons; an ion has gained or lost electrons.`,
      workedExample: `**Task.** Draw up the charge, relative mass and location of the proton, neutron and electron, then explain why the whole atom is neutral and where its mass is concentrated.

**The three particles**
| Particle | Charge | Relative mass | Location |
|---|---|---|---|
| Proton | +1 | 1 | nucleus |
| Neutron | 0 | 1 | nucleus |
| Electron | −1 | ~1/1840 | shells |

**Why the atom is neutral**
- A neutral atom has equal numbers of protons (+1 each) and electrons (−1 each), so the total positive charge exactly cancels the total negative charge.

**Where the mass is**
- Protons and neutrons each have relative mass 1; electrons are ~1/1840 as heavy, so their mass is negligible.
- Therefore almost all the atom's mass is in the **nucleus** (protons + neutrons), even though the electrons fill almost all the volume.`,
      quiz: [
        {
          prompt: "What is the charge on a proton?",
          options: ["+1", "−1", "0", "+2"],
          correctIndex: 0,
          explanation: "Protons carry a single positive charge.",
        },
        {
          prompt: "What is the charge on a neutron?",
          options: ["0 (neutral)", "−1", "+1", "+2"],
          correctIndex: 0,
          explanation: "Neutrons have no charge.",
        },
        {
          prompt: "What is the charge on an electron?",
          options: ["−1", "+1", "0", "−2"],
          correctIndex: 0,
          explanation: "Electrons carry a single negative charge.",
        },
        {
          prompt: "Which particles are found in the nucleus?",
          options: ["protons and neutrons", "electrons only", "protons and electrons", "neutrons only"],
          correctIndex: 0,
          explanation: "The nucleus holds protons and neutrons.",
        },
        {
          prompt: "Where are the electrons found in an atom?",
          options: ["in shells around the nucleus", "inside the nucleus", "in the protons", "outside the atom"],
          correctIndex: 0,
          explanation: "Electrons occupy shells (energy levels) around the nucleus.",
        },
        {
          prompt: "Almost all of an atom's mass is contained in the…",
          options: ["nucleus", "electron shells", "empty space", "surface"],
          correctIndex: 0,
          explanation: "Protons and neutrons in the nucleus carry nearly all the mass.",
        },
        {
          prompt: "Which particle has a mass of about 1/1840 of a proton?",
          options: ["electron", "neutron", "proton", "nucleus"],
          correctIndex: 0,
          explanation: "The electron is far lighter than a proton or neutron.",
        },
        {
          prompt: "In a neutral atom, the number of protons equals the number of…",
          options: ["electrons", "neutrons", "shells", "molecules"],
          correctIndex: 0,
          explanation: "Equal protons and electrons make the atom neutral.",
        },
        {
          prompt: "The overall charge of the nucleus is…",
          options: ["positive", "negative", "neutral", "variable"],
          correctIndex: 0,
          explanation: "The nucleus contains positive protons and neutral neutrons.",
        },
        {
          prompt: "Which two particles have approximately the same mass?",
          options: ["proton and neutron", "proton and electron", "neutron and electron", "electron and photon"],
          correctIndex: 0,
          explanation: "Protons and neutrons each have a relative mass of about 1.",
        },
        {
          prompt: "Protons and neutrons together are called…",
          options: ["nucleons", "electrons", "isotopes", "ions"],
          correctIndex: 0,
          explanation: "Particles in the nucleus are nucleons.",
        },
        {
          prompt: "An atom that has lost electrons becomes a…",
          options: ["positive ion (cation)", "negative ion (anion)", "neutron", "neutral atom"],
          correctIndex: 0,
          explanation: "Losing electrons leaves excess positive charge.",
        },
        {
          prompt: "An atom that has gained electrons becomes a…",
          options: ["negative ion (anion)", "positive ion (cation)", "proton", "neutral atom"],
          correctIndex: 0,
          explanation: "Gaining electrons gives excess negative charge.",
        },
        {
          prompt: "The relative mass of a proton is about…",
          options: ["1", "0", "1/1840", "12"],
          correctIndex: 0,
          explanation: "A proton has relative mass 1.",
        },
        {
          prompt: "Electrons take up most of the atom's…",
          options: ["volume", "mass", "charge in the nucleus", "protons"],
          correctIndex: 0,
          explanation: "Electrons occupy most of the volume but little of the mass.",
        },
        {
          prompt: "The particle with no charge is the…",
          options: ["neutron", "proton", "electron", "ion"],
          correctIndex: 0,
          explanation: "The neutron is electrically neutral.",
        },
        {
          prompt: "Which statement is TRUE of the electron?",
          options: ["negative, very light, in shells", "positive, heavy, in nucleus", "neutral, heavy, in nucleus", "negative, heavy, in nucleus"],
          correctIndex: 0,
          explanation: "The electron is a light, negative particle found in shells.",
        },
        {
          prompt: "If an atom has 8 protons, a neutral atom of it has how many electrons?",
          options: ["8", "16", "0", "4"],
          correctIndex: 0,
          explanation: "Neutral atoms have equal protons and electrons.",
        },
        {
          prompt: "The nucleus is best described as…",
          options: ["tiny, dense and positive", "large, light and negative", "spread throughout the atom", "made of electrons"],
          correctIndex: 0,
          explanation: "It is a small dense positive centre.",
        },
        {
          prompt: "The mass of an atom comes mainly from its…",
          options: ["protons and neutrons", "electrons", "shells", "empty space"],
          correctIndex: 0,
          explanation: "Nucleons carry essentially all the mass.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Complete a table giving the charge, relative mass and location of the proton, neutron and electron.",
          answerKey:
            "Proton: +1, mass 1, in nucleus. Neutron: 0, mass 1, in nucleus. Electron: −1, mass ~1/1840 (≈0), in shells around nucleus. Award marks for correct charge, mass and location across the three particles.",
          marks: 6,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which particle contributes almost nothing to the mass of an atom?",
          options: ["electron", "proton", "neutron", "nucleus"],
          correctIndex: 0,
          answerKey: "The electron is about 1/1840 the mass of a proton.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The particles found in the nucleus are:",
          options: ["protons and neutrons", "protons and electrons", "electrons and neutrons", "electrons only"],
          correctIndex: 0,
          answerKey: "Protons and neutrons (nucleons) make up the nucleus.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why a whole atom has no overall electric charge.",
          answerKey:
            "A neutral atom has equal numbers of protons (each +1) and electrons (each −1), so the total positive and negative charges cancel exactly, leaving no overall charge. Award marks for equal protons/electrons and the cancelling of charge.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the arrangement of the three fundamental particles in an atom and explain why almost all the atom's mass, but only a small part of its volume, lies in the nucleus.",
          answerKey:
            "A strong answer states that protons and neutrons are packed into a tiny central nucleus, while electrons occupy shells (energy levels) in the large volume around it. Because each proton and neutron has relative mass about 1 while an electron has mass about 1/1840, the nucleons carry essentially all the mass; yet the nucleus is very small compared with the electron shells, so the mass is concentrated in a tiny volume while the electrons spread through most of the atom's space (which is largely empty). Award marks for the correct arrangement, the mass comparison, and the size/volume contrast.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 4.1 Atomic Number, Mass Number, and Atomic Symbol (https://chem.libretexts.org/Courses/City_Colleges_of_Chicago/Chemistry_201:_Professor_Samar_Ayesh/04:_The_Structure_of_the_Atom/4.01:_Atomic_Number_Mass_Number_and_Atomic_Symbol)
      slug: "atomic-number-mass-number-and-isotopes",
      title: "Atomic Number, Mass Number and Isotopes",
      objective:
        "By the end of the topic, learners should be able to define atomic number and mass number, work out the numbers of protons, neutrons and electrons in an atom, and explain what isotopes are. (MoE Grade 10 Period II, CONTENTS 3.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Two numbers — **atomic number** and **mass number** — fix the make-up of an atom's nucleus.
- **This topic:** counting protons, neutrons and electrons, and why **isotopes** exist.

## Atomic number and mass number

- **Atomic number (Z)** = the number of **protons** in the nucleus. It defines the element — every carbon atom has 6 protons.
- **Mass number (A)** = the number of **protons + neutrons** in the nucleus.

An atom is written as **ᴬ𝗓X** — for example ²³₁₁Na means sodium with A = 23 and Z = 11.

From these two numbers:
- **Protons = Z**
- **Electrons = Z** (in a neutral atom)
- **Neutrons = A − Z**

For sodium (²³₁₁Na): protons = 11, electrons = 11, neutrons = 23 − 11 = **12**.

## Isotopes

- **Isotopes** — atoms of the **same element** (same number of protons) with **different numbers of neutrons**, so the same atomic number but different mass numbers.
- Example: chlorine has ³⁵Cl (18 neutrons) and ³⁷Cl (20 neutrons). Both have 17 protons; they behave the same chemically but differ slightly in mass.
- Isotopes have identical **electron arrangements**, so identical chemistry; only their masses differ.

| Isotope | Protons | Neutrons | Mass number |
|---|---|---|---|
| ³⁵Cl | 17 | 18 | 35 |
| ³⁷Cl | 17 | 20 | 37 |

## Common errors and misconceptions

- **Mass number vs atomic number** — atomic number (Z) = protons; mass number (A) = protons + neutrons. Neutrons = A − Z (don't forget to subtract).
- **Thinking isotopes are different elements** — isotopes have the **same** number of protons (same element) but **different** neutrons.
- **Confusing atomic number with the electrons in an ion** — in a *neutral atom* protons = electrons, but an ion has gained or lost electrons.`,
      workedExample: `**Task.** An atom of aluminium is written ²⁷₁₃Al. (a) State its atomic number and mass number. (b) Work out its protons, neutrons and electrons. (c) Explain how an isotope of aluminium would differ.

**Part (a)**
- Atomic number Z = **13** (the lower number)
- Mass number A = **27** (the upper number)

**Part (b)**
- Protons = Z = **13**
- Electrons = Z = **13** (neutral atom)
- Neutrons = A − Z = 27 − 13 = **14**

**Part (c) — an isotope**
An isotope of aluminium would have the **same 13 protons** (so still aluminium) but a **different number of neutrons**, giving a different mass number — for example ²⁶Al (13 neutrons) or ²⁸Al (15 neutrons). Its chemistry would be the same because the electron arrangement is unchanged.`,
      quiz: [
        {
          prompt: "The atomic number of an element equals the number of…",
          options: ["protons", "neutrons", "protons plus neutrons", "electron shells"],
          correctIndex: 0,
          explanation: "Atomic number Z is the proton count and defines the element.",
        },
        {
          prompt: "The mass number of an atom is the number of…",
          options: ["protons plus neutrons", "protons only", "electrons only", "neutrons only"],
          correctIndex: 0,
          explanation: "Mass number A counts protons and neutrons together.",
        },
        {
          prompt: "How many neutrons are in an atom with A = 23 and Z = 11?",
          options: ["12", "11", "23", "34"],
          correctIndex: 0,
          explanation: "Neutrons = A − Z = 23 − 11 = 12.",
        },
        {
          prompt: "Isotopes of an element have the same number of … but different numbers of …",
          options: ["protons; neutrons", "neutrons; protons", "electrons; protons", "protons; electrons"],
          correctIndex: 0,
          explanation: "Same protons (same element), different neutrons.",
        },
        {
          prompt: "The number that defines which element an atom is, is the…",
          options: ["atomic number", "mass number", "neutron number", "shell number"],
          correctIndex: 0,
          explanation: "The proton (atomic) number identifies the element.",
        },
        {
          prompt: "In a neutral atom, the number of electrons equals the…",
          options: ["atomic number", "mass number", "neutron number", "number of shells"],
          correctIndex: 0,
          explanation: "Neutral atoms have electrons = protons = Z.",
        },
        {
          prompt: "How many protons does ³⁷₁₇Cl have?",
          options: ["17", "37", "20", "54"],
          correctIndex: 0,
          explanation: "Z = 17 gives 17 protons.",
        },
        {
          prompt: "How many neutrons does ³⁷₁₇Cl have?",
          options: ["20", "17", "37", "54"],
          correctIndex: 0,
          explanation: "A − Z = 37 − 17 = 20.",
        },
        {
          prompt: "Chemically, two isotopes of the same element behave…",
          options: ["the same", "completely differently", "as different elements", "as ions"],
          correctIndex: 0,
          explanation: "Same electron arrangement means the same chemistry.",
        },
        {
          prompt: "The symbol ᴬ𝗓X: the top number A is the…",
          options: ["mass number", "atomic number", "neutron number", "charge"],
          correctIndex: 0,
          explanation: "The upper number is the mass number.",
        },
        {
          prompt: "An atom has 19 protons and 20 neutrons. Its mass number is…",
          options: ["39", "20", "19", "1"],
          correctIndex: 0,
          explanation: "A = protons + neutrons = 19 + 20 = 39.",
        },
        {
          prompt: "An atom has Z = 6 and A = 14. Its number of neutrons is…",
          options: ["8", "6", "14", "20"],
          correctIndex: 0,
          explanation: "Neutrons = 14 − 6 = 8.",
        },
        {
          prompt: "Two atoms are isotopes if they have the same…",
          options: ["atomic number", "mass number", "number of neutrons", "number of shells filled"],
          correctIndex: 0,
          explanation: "Same atomic number (same element), different mass.",
        },
        {
          prompt: "Carbon-12 and carbon-14 differ in their number of…",
          options: ["neutrons", "protons", "electrons", "shells"],
          correctIndex: 0,
          explanation: "Both have 6 protons; carbon-14 has 2 more neutrons.",
        },
        {
          prompt: "Which quantity is NOT needed to identify an isotope fully?",
          options: ["its colour", "its atomic number", "its mass number", "its number of neutrons"],
          correctIndex: 0,
          explanation: "Colour is irrelevant; Z and A fix the isotope.",
        },
        {
          prompt: "A neutral potassium atom (Z = 19) has how many electrons?",
          options: ["19", "20", "39", "18"],
          correctIndex: 0,
          explanation: "Electrons = Z = 19 for a neutral atom.",
        },
        {
          prompt: "If neutrons = A − Z, then A equals…",
          options: ["protons + neutrons", "protons − neutrons", "electrons + neutrons only", "neutrons only"],
          correctIndex: 0,
          explanation: "Rearranging gives A = Z + neutrons = protons + neutrons.",
        },
        {
          prompt: "Isotopes are useful because they let us calculate an element's…",
          options: ["relative atomic mass", "colour", "melting point", "density only"],
          correctIndex: 0,
          explanation: "Relative atomic mass is the weighted average of isotope masses.",
        },
        {
          prompt: "An ion of an atom differs from the neutral atom in its number of…",
          options: ["electrons", "protons", "neutrons", "mass number"],
          correctIndex: 0,
          explanation: "Ions form by gaining or losing electrons.",
        },
        {
          prompt: "Which pair are isotopes?",
          options: ["¹²C and ¹³C", "¹²C and ¹⁴N", "O and O₂", "Na and Na⁺"],
          correctIndex: 0,
          explanation: "Both are carbon (6 protons) with different neutron numbers.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "For the atom ²⁴₁₂Mg, state the number of protons, neutrons and electrons.",
          answerKey:
            "Protons = Z = 12; electrons = 12 (neutral atom); neutrons = A − Z = 24 − 12 = 12. Award marks for each correct value.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Two atoms with the same atomic number but different mass numbers are:",
          options: ["isotopes", "ions", "different elements", "molecules"],
          correctIndex: 0,
          answerKey: "Same protons, different neutrons = isotopes.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Neutrons in an atom are found by:",
          options: ["mass number − atomic number", "atomic number − mass number", "mass number + atomic number", "atomic number only"],
          correctIndex: 0,
          answerKey: "Neutrons = A − Z.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain why isotopes of the same element have identical chemical properties.",
          answerKey:
            "Isotopes have the same number of protons and therefore the same number of electrons in the same arrangement. Chemical behaviour depends on the electron (especially outer-shell) arrangement, so isotopes react identically; only their masses differ because of the different neutron numbers. Award marks for same electrons/arrangement and the link to chemical behaviour.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Define atomic number and mass number, and use chlorine's two isotopes (³⁵Cl and ³⁷Cl) to explain the meaning of the term isotope.",
          answerKey:
            "A strong answer defines atomic number as the number of protons (which defines the element) and mass number as the total of protons and neutrons. It states that both chlorine isotopes have 17 protons (atomic number 17) but different neutron numbers: ³⁵Cl has 18 neutrons and ³⁷Cl has 20 neutrons, giving mass numbers 35 and 37. Isotopes are therefore atoms of the same element with the same atomic number but different mass numbers because of different neutron numbers; they have the same electron arrangement and so the same chemistry. Award marks for both definitions, the correct proton/neutron counts, and a correct definition of isotope.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 4.20 Calculating Average Atomic Mass (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/04:_Atomic_Structure/4.20:_Calculating_Average_Atomic_Mass)
      slug: "relative-atomic-mass",
      title: "Relative Atomic Mass",
      objective:
        "By the end of the topic, learners should be able to explain relative atomic mass as the weighted average of isotope masses and calculate it from isotopic masses and percentage abundances. (MoE Grade 10 Period II, CONTENTS 4.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Most elements exist as a mixture of **isotopes**, so an element's mass on the periodic table is an **average**.
- **Relative atomic mass (Aᵣ)** — the weighted average mass of the atoms of an element, compared with 1/12 the mass of a carbon-12 atom.
- **This topic:** why atomic masses are not whole numbers, and how to calculate the average.

## Why atomic masses are averages

- An element's atoms come in different isotopes, each with its own mass and its own **percentage abundance** (how common it is).
- The relative atomic mass is the **weighted average** — isotopes that are more abundant count more.

## The formula

**Aᵣ = Σ (isotope mass × fractional abundance)**

or, using percentages,

**Aᵣ = (mass₁ × %₁ + mass₂ × %₂ + …) ÷ 100**

- **Fractional abundance** = percentage abundance ÷ 100.
- The answer lies **between** the isotope masses, closer to the more abundant isotope.

## Worked pattern (chlorine)

- ³⁵Cl, mass 35, abundance 75%; ³⁷Cl, mass 37, abundance 25%.
- Aᵣ = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = 3550 ÷ 100 = **35.5**.
- The value 35.5 is closer to 35 because ³⁵Cl is more abundant.

## Common errors and misconceptions

- **Forgetting to divide by 100** — when using percentages, divide the total by 100 (or use fractional abundances).
- **Taking a simple average** — the average is **weighted** by abundance, not a plain mean of the isotope masses.
- **Expecting a whole number** — because it is an average, Aᵣ is usually a decimal (e.g. chlorine 35.5).
- **Mixing up mass number and relative atomic mass** — mass number is for one isotope; Aᵣ is the element's average.`,
      workedExample: `**Task.** Boron has two isotopes: ¹⁰B (mass 10.0, abundance 20%) and ¹¹B (mass 11.0, abundance 80%). Calculate the relative atomic mass of boron.

**Step 1 — Write the formula**
Aᵣ = (mass₁ × %₁ + mass₂ × %₂) ÷ 100.

**Step 2 — Substitute the values**
Aᵣ = (10.0 × 20 + 11.0 × 80) ÷ 100.

**Step 3 — Work out the top line**
= (200 + 880) ÷ 100 = 1080 ÷ 100.

**Step 4 — Divide**
Aᵣ = **10.8**.

**Check.** The answer 10.8 lies between 10 and 11 and is closer to 11, which is correct because ¹¹B (80%) is the more abundant isotope.`,
      quiz: [
        {
          prompt: "Relative atomic mass is the … mass of an element's atoms.",
          options: ["weighted average", "smallest", "largest", "total"],
          correctIndex: 0,
          explanation: "It is the average weighted by abundance.",
        },
        {
          prompt: "Relative atomic mass is measured relative to…",
          options: ["1/12 the mass of a carbon-12 atom", "a hydrogen atom", "an electron", "one gram"],
          correctIndex: 0,
          explanation: "The standard is 1/12 of a carbon-12 atom.",
        },
        {
          prompt: "Atomic masses are usually not whole numbers because elements are mixtures of…",
          options: ["isotopes", "ions", "molecules", "compounds"],
          correctIndex: 0,
          explanation: "Averaging isotope masses gives a decimal.",
        },
        {
          prompt: "In the weighted average, isotopes that are more abundant have…",
          options: ["a greater effect", "no effect", "a smaller effect", "an equal effect always"],
          correctIndex: 0,
          explanation: "More abundant isotopes count more.",
        },
        {
          prompt: "Fractional abundance is the percentage abundance divided by…",
          options: ["100", "10", "1000", "the mass"],
          correctIndex: 0,
          explanation: "Divide the percentage by 100.",
        },
        {
          prompt: "Chlorine's relative atomic mass (75% ³⁵Cl, 25% ³⁷Cl) is…",
          options: ["35.5", "36", "37", "35"],
          correctIndex: 0,
          explanation: "(35×75 + 37×25)/100 = 35.5.",
        },
        {
          prompt: "The relative atomic mass lies … the isotope masses.",
          options: ["between", "below all of", "above all of", "far from"],
          correctIndex: 0,
          explanation: "The average is between the lightest and heaviest isotope.",
        },
        {
          prompt: "For an element with isotopes of mass 63 (69%) and 65 (31%), Aᵣ is about…",
          options: ["63.6", "64.0", "65.0", "63.0"],
          correctIndex: 0,
          explanation: "(63×69 + 65×31)/100 = 63.62 (copper).",
        },
        {
          prompt: "A simple (unweighted) average of isotope masses is wrong because it ignores…",
          options: ["abundance", "mass", "the element", "neutrons"],
          correctIndex: 0,
          explanation: "The average must be weighted by abundance.",
        },
        {
          prompt: "If a sample is 50% ¹⁰X and 50% ¹²X, the relative atomic mass is…",
          options: ["11", "10", "12", "22"],
          correctIndex: 0,
          explanation: "(10×50 + 12×50)/100 = 11.",
        },
        {
          prompt: "The mass number applies to … while relative atomic mass applies to …",
          options: ["one isotope; the whole element", "the whole element; one isotope", "ions; atoms", "protons; neutrons"],
          correctIndex: 0,
          explanation: "Mass number is per isotope; Aᵣ is the element's average.",
        },
        {
          prompt: "Boron (20% ¹⁰B, 80% ¹¹B) has Aᵣ of…",
          options: ["10.8", "10.2", "11.0", "10.5"],
          correctIndex: 0,
          explanation: "(10×20 + 11×80)/100 = 10.8.",
        },
        {
          prompt: "The percentage abundances of all isotopes of an element add up to…",
          options: ["100%", "50%", "0%", "the mass number"],
          correctIndex: 0,
          explanation: "All abundances total 100%.",
        },
        {
          prompt: "When using fractional abundances (not percentages), you do NOT need to…",
          options: ["divide by 100 at the end", "multiply mass by abundance", "add the terms", "know the isotope masses"],
          correctIndex: 0,
          explanation: "Fractional abundances already account for the /100.",
        },
        {
          prompt: "An element's atomic mass being close to 24 with isotopes 24, 25, 26 suggests the most abundant isotope is…",
          options: ["mass 24", "mass 26", "mass 25", "none"],
          correctIndex: 0,
          explanation: "The average sits closest to the most abundant isotope.",
        },
        {
          prompt: "The relative atomic mass has … units.",
          options: ["no", "gram", "kilogram", "mole"],
          correctIndex: 0,
          explanation: "It is a relative (comparative) quantity, so unitless.",
        },
        {
          prompt: "Which data are needed to calculate relative atomic mass?",
          options: ["isotope masses and their abundances", "melting points", "colours", "densities"],
          correctIndex: 0,
          explanation: "You need each isotope's mass and abundance.",
        },
        {
          prompt: "Neon is 90% ²⁰Ne and 10% ²²Ne. Its Aᵣ is…",
          options: ["20.2", "21.0", "20.0", "22.0"],
          correctIndex: 0,
          explanation: "(20×90 + 22×10)/100 = 20.2.",
        },
        {
          prompt: "The device used to measure isotope masses and abundances is the…",
          options: ["mass spectrometer", "thermometer", "burette", "microscope"],
          correctIndex: 0,
          explanation: "A mass spectrometer provides isotope data.",
        },
        {
          prompt: "If one isotope is far more abundant, the relative atomic mass is…",
          options: ["close to that isotope's mass", "exactly halfway", "far from all isotopes", "always a whole number"],
          correctIndex: 0,
          explanation: "The average is pulled toward the dominant isotope.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define relative atomic mass.",
          answerKey:
            "The relative atomic mass is the weighted average mass of the atoms of an element, taking account of the masses and percentage abundances of its isotopes, compared with 1/12 the mass of a carbon-12 atom. Award marks for weighted average of isotopes and the carbon-12 standard.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Copper has isotopes ⁶³Cu (69.2%) and ⁶⁵Cu (30.8%). Its relative atomic mass is closest to:",
          options: ["63.6", "64.0", "65.0", "63.0"],
          correctIndex: 0,
          answerKey: "(63×69.2 + 65×30.8)/100 ≈ 63.6.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Relative atomic masses are usually decimals because:",
          options: ["they are averages of isotope masses", "atoms have fractional protons", "electrons add mass", "of measurement error only"],
          correctIndex: 0,
          answerKey: "The value is a weighted average over isotopes, giving a decimal.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Magnesium has isotopes ²⁴Mg (79%), ²⁵Mg (10%) and ²⁶Mg (11%). Calculate its relative atomic mass.",
          answerKey:
            "Aᵣ = (24×79 + 25×10 + 26×11)/100 = (1896 + 250 + 286)/100 = 2432/100 = 24.3. Award marks for correct substitution and answer 24.3.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain, with a worked example, why the relative atomic mass of chlorine is 35.5 even though its isotopes have whole-number mass numbers.",
          answerKey:
            "A full answer explains that chlorine exists as two isotopes, ³⁵Cl and ³⁷Cl, each with a whole-number mass number, but in a fixed proportion (about 75% ³⁵Cl and 25% ³⁷Cl). The relative atomic mass is the weighted average, not a plain mean: Aᵣ = (35 × 75 + 37 × 25)/100 = (2625 + 925)/100 = 3550/100 = 35.5. Because ³⁵Cl is three times as abundant, the average lies closer to 35 than to 37, giving the decimal value 35.5. Award marks for the idea of a weighted average, the correct calculation, and the explanation of why the value is nearer 35.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 2.2 The Four Quantum Numbers (https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Organic_Chemistry_I_(Cortes)/02:_Atomic_Structure/2.02:_The_Four_Quantum_Numbers)
      slug: "quantum-numbers",
      title: "Quantum Numbers",
      objective:
        "By the end of the topic, learners should be able to name the four quantum numbers, state what each describes and its allowed values, and relate the second quantum number to the shapes of s, p and d orbitals. (MoE Grade 10 Period II, CONTENTS 5.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The Bohr shell model is refined by the **quantum model**, in which each electron is described by **four quantum numbers**.
- The four numbers act like an address, fixing an electron's energy level, orbital shape, orientation and spin.
- **This topic:** the four quantum numbers, their allowed values, and orbital shapes.

## The four quantum numbers

| Symbol | Name | Describes | Allowed values |
|---|---|---|---|
| **n** | principal | main energy level / size | 1, 2, 3, … |
| **l** | azimuthal (orbital shape) | subshell / shape | 0 to n − 1 |
| **mₗ** | magnetic | orientation in space | −l to +l |
| **mₛ** | spin | electron spin | +1/2 or −1/2 |

## Principal quantum number (n)

- Gives the **main energy level (shell)** and the electron's most probable distance from the nucleus.
- Larger n = higher energy and larger orbital. n = 1, 2, 3, … (the K, L, M shells).

## Azimuthal quantum number (l) and orbital shapes

- Sets the **subshell** and the **shape** of the orbital; l runs from 0 to n − 1.
- The letters s, p, d, f correspond to l = 0, 1, 2, 3.

| l value | Subshell letter | Orbital shape |
|---|---|---|
| 0 | s | spherical |
| 1 | p | dumb-bell |
| 2 | d | double dumb-bell / four-leaf clover |
| 3 | f | complex |

## Magnetic quantum number (mₗ)

- Gives the **orientation** of the orbital in space; mₗ runs from −l to +l.
- So a p subshell (l = 1) has three orientations (mₗ = −1, 0, +1) — the pₓ, p_y, p_z orbitals.

## Spin quantum number (mₛ)

- Describes the electron's **spin**, either **+1/2** (spin up) or **−1/2** (spin down).
- Each orbital holds a maximum of **two electrons**, which must have **opposite spins**.

## Common errors and misconceptions

- **Mixing up l and n** — n is the energy level; l is the shape (subshell) within it.
- **Wrong ranges** — l goes 0 to n−1, and mₗ goes −l to +l; they are not free integers.
- **Thinking s and p have the same shape** — s orbitals are spherical, p orbitals are dumb-bell shaped.
- **More than two electrons per orbital** — no orbital holds more than two, and those two have opposite spin.`,
      workedExample: `**Task.** For the third energy level (n = 3): (a) list the allowed values of l and name each subshell, (b) state how many orbitals the p subshell has, and (c) give the possible spin values of an electron.

**Part (a) — values of l**
- l runs from 0 to n − 1 = 0 to 2.
- l = 0 → **3s** (spherical); l = 1 → **3p** (dumb-bell); l = 2 → **3d** (clover).

**Part (b) — orbitals in the p subshell**
- For l = 1, mₗ runs from −1 to +1, i.e. −1, 0, +1 — **three orbitals** (pₓ, p_y, p_z).

**Part (c) — spin values**
- The spin quantum number mₛ can be **+1/2** or **−1/2** only.

**Conclusion.** n = 3 contains the 3s, 3p and 3d subshells; the p subshell has three orbitals; and each electron spins either +1/2 or −1/2, so an orbital holds two electrons of opposite spin.`,
      quiz: [
        {
          prompt: "How many quantum numbers describe an electron in an atom?",
          options: ["4", "2", "3", "5"],
          correctIndex: 0,
          explanation: "n, l, mₗ and mₛ — four in total.",
        },
        {
          prompt: "The principal quantum number n describes the electron's…",
          options: ["main energy level and size", "spin", "orbital shape", "orientation only"],
          correctIndex: 0,
          explanation: "n gives the energy level and orbital size.",
        },
        {
          prompt: "The azimuthal quantum number l describes the orbital's…",
          options: ["shape", "energy level", "spin", "orientation"],
          correctIndex: 0,
          explanation: "l fixes the subshell shape.",
        },
        {
          prompt: "The magnetic quantum number mₗ describes the orbital's…",
          options: ["orientation in space", "shape", "energy", "spin"],
          correctIndex: 0,
          explanation: "mₗ gives the orientation.",
        },
        {
          prompt: "The spin quantum number mₛ can be…",
          options: ["+1/2 or −1/2", "0 to n−1", "−l to +l", "1, 2, 3"],
          correctIndex: 0,
          explanation: "Spin is +1/2 or −1/2.",
        },
        {
          prompt: "The allowed values of l range from…",
          options: ["0 to n − 1", "1 to n", "−l to +l", "−n to +n"],
          correctIndex: 0,
          explanation: "l runs from 0 up to n − 1.",
        },
        {
          prompt: "The allowed values of mₗ range from…",
          options: ["−l to +l", "0 to n−1", "1 to n", "+1/2 to −1/2"],
          correctIndex: 0,
          explanation: "mₗ runs from −l to +l.",
        },
        {
          prompt: "An s orbital (l = 0) has which shape?",
          options: ["spherical", "dumb-bell", "clover", "complex"],
          correctIndex: 0,
          explanation: "s orbitals are spherical.",
        },
        {
          prompt: "A p orbital (l = 1) has which shape?",
          options: ["dumb-bell", "spherical", "clover", "cube"],
          correctIndex: 0,
          explanation: "p orbitals are dumb-bell shaped.",
        },
        {
          prompt: "A d orbital corresponds to l = …",
          options: ["2", "0", "1", "3"],
          correctIndex: 0,
          explanation: "l = 2 gives d orbitals.",
        },
        {
          prompt: "The subshell letters s, p, d, f correspond to l = …",
          options: ["0, 1, 2, 3", "1, 2, 3, 4", "0, 2, 4, 6", "−1, 0, 1, 2"],
          correctIndex: 0,
          explanation: "s=0, p=1, d=2, f=3.",
        },
        {
          prompt: "How many orbitals does a p subshell contain?",
          options: ["3", "1", "5", "7"],
          correctIndex: 0,
          explanation: "mₗ = −1, 0, +1 gives three p orbitals.",
        },
        {
          prompt: "How many electrons can a single orbital hold?",
          options: ["2", "1", "6", "8"],
          correctIndex: 0,
          explanation: "Two electrons of opposite spin per orbital.",
        },
        {
          prompt: "For n = 2, the allowed values of l are…",
          options: ["0 and 1", "0, 1 and 2", "1 and 2", "0 only"],
          correctIndex: 0,
          explanation: "l goes 0 to n−1 = 0, 1.",
        },
        {
          prompt: "The two electrons in one orbital must have…",
          options: ["opposite spins", "the same spin", "the same n only", "different l"],
          correctIndex: 0,
          explanation: "Opposite spins are required (Pauli).",
        },
        {
          prompt: "Larger n means the orbital is…",
          options: ["larger and higher in energy", "smaller and lower in energy", "spherical only", "always empty"],
          correctIndex: 0,
          explanation: "Higher n = larger, higher-energy orbital.",
        },
        {
          prompt: "The number that acts like the 'orientation' of an orbital is…",
          options: ["mₗ", "n", "l", "mₛ"],
          correctIndex: 0,
          explanation: "mₗ gives orientation in space.",
        },
        {
          prompt: "How many orbitals does a d subshell contain?",
          options: ["5", "3", "1", "7"],
          correctIndex: 0,
          explanation: "l = 2 gives mₗ = −2…+2, i.e. 5 orbitals.",
        },
        {
          prompt: "The four quantum numbers together act like an electron's…",
          options: ["address", "colour", "mass", "charge"],
          correctIndex: 0,
          explanation: "They uniquely locate/describe the electron.",
        },
        {
          prompt: "The f orbitals correspond to l = …",
          options: ["3", "2", "1", "0"],
          correctIndex: 0,
          explanation: "l = 3 gives f orbitals.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which quantum number determines the shape of an orbital?",
          options: ["l (azimuthal)", "n (principal)", "mₗ (magnetic)", "mₛ (spin)"],
          correctIndex: 0,
          answerKey: "The azimuthal quantum number l fixes the subshell shape.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The number of orbitals in a p subshell is:",
          options: ["3", "1", "5", "2"],
          correctIndex: 0,
          answerKey: "mₗ = −1, 0, +1 gives three p orbitals.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Name the four quantum numbers and state what each one describes.",
          answerKey:
            "n (principal) – main energy level / size; l (azimuthal) – subshell / orbital shape; mₗ (magnetic) – orientation of the orbital in space; mₛ (spin) – the electron's spin (+1/2 or −1/2). Award a mark for each correct name-and-description pair.",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "For n = 3, list the subshells present and give their shapes.",
          answerKey:
            "l can be 0, 1, 2 → subshells 3s (spherical), 3p (dumb-bell), 3d (double dumb-bell / four-leaf clover). Award marks for the three subshells and their shapes.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how the four quantum numbers describe an electron, and how the azimuthal quantum number is linked to the shapes of the s, p and d orbitals.",
          answerKey:
            "A strong answer explains that the four quantum numbers together specify an electron: n gives the main energy level (and size), l gives the subshell and orbital shape, mₗ gives the orientation of the orbital in space, and mₛ gives the spin (+1/2 or −1/2). The azimuthal quantum number l can be 0 to n−1 and is labelled s (l=0), p (l=1), d (l=2), f (l=3); s orbitals are spherical, p orbitals are dumb-bell shaped, and d orbitals have a double dumb-bell / four-leaf-clover shape. No two electrons in an atom can have all four quantum numbers the same. Award marks for the roles of the four numbers, the l → subshell link, and the correct shapes.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — 7.3 Electron Configurations of Atoms (https://chem.libretexts.org/Courses/University_of_Arkansas_Little_Rock/Chem_1402:_General_Chemistry_1_(Kattoum)/Text/7:_The_Structure_of_Atoms_and_Periodic_Trends/7.3:_Electron_Configurations_of_Atoms)
      slug: "electron-configuration",
      title: "Electron Configuration",
      objective:
        "By the end of the topic, learners should be able to write the electron configuration of the first twenty elements using both the KLMN shell notation and the s, p, d orbital (spdf) notation, and use noble-gas shorthand. (MoE Grade 10 Period II, CONTENTS 6.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Electron configuration** — the arrangement of electrons in an atom's shells and subshells.
- It decides how an element behaves, so it is the bridge to the periodic table (Period III).
- **This topic:** shell (KLMN) notation and orbital (spdf) notation, plus noble-gas shorthand.

## Shell (KLMN) notation

- Electrons fill shells from the lowest energy first. The maximum each shell holds:

| Shell | Letter | Maximum electrons |
|---|---|---|
| 1st | K | 2 |
| 2nd | L | 8 |
| 3rd | M | 8 (for the first 20 elements) |
| 4th | N | (begins to fill at K, Ca) |

- Written as numbers separated by commas: carbon (Z = 6) = 2, 4; sodium (Z = 11) = 2, 8, 1; calcium (Z = 20) = 2, 8, 8, 2.

## Orbital (spdf) notation

- Each shell is split into subshells that hold: **s = 2, p = 6, d = 10, f = 14** electrons.
- Order of filling by energy: **1s 2s 2p 3s 3p 4s 3d 4p …**
- Superscripts give the electron count: oxygen (Z = 8) = 1s² 2s² 2p⁴; sodium (Z = 11) = 1s² 2s² 2p⁶ 3s¹.

| Element | Z | spdf notation | shell notation |
|---|---|---|---|
| Hydrogen | 1 | 1s¹ | 1 |
| Carbon | 6 | 1s² 2s² 2p² | 2, 4 |
| Oxygen | 8 | 1s² 2s² 2p⁴ | 2, 6 |
| Sodium | 11 | 1s² 2s² 2p⁶ 3s¹ | 2, 8, 1 |
| Calcium | 20 | 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² | 2, 8, 8, 2 |

## Noble-gas shorthand

- Replace the inner electrons with the previous **noble gas** in brackets.
- Sodium 1s² 2s² 2p⁶ 3s¹ = **[Ne] 3s¹**; calcium = **[Ar] 4s²**.

## Valence electrons

- **Valence electrons** — the electrons in the outermost shell; they decide chemical behaviour.
- Sodium (2, 8, **1**) has one outer electron it readily loses — a reactive metal.

## Common errors and misconceptions

- **Filling 3d before 4s** — 4s is lower in energy and fills before 3d (…3p 4s 3d…).
- **Overfilling a subshell** — s holds 2, p holds 6, d holds 10; never more.
- **Wrong shell maxima** — first shell holds 2, second 8, third 8 (for the first 20 elements).
- **Ignoring the outer shell** — chemistry is decided by the valence (outer-shell) electrons.`,
      workedExample: `**Task.** Write the electron configuration of (a) chlorine (Z = 17) and (b) potassium (Z = 19), in both spdf and shell notation, and give the noble-gas shorthand for potassium.

**Part (a) — chlorine, Z = 17**
- Fill in energy order 1s 2s 2p 3s 3p: 1s² (2), 2s² (4), 2p⁶ (10), 3s² (12), 3p⁵ (17).
- **spdf:** 1s² 2s² 2p⁶ 3s² 3p⁵.  **Shell:** 2, 8, 7.

**Part (b) — potassium, Z = 19**
- After 3p⁶ (18 electrons), the next electron goes into **4s** (lower energy than 3d): 4s¹.
- **spdf:** 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹.  **Shell:** 2, 8, 8, 1.
- **Noble-gas shorthand:** the previous noble gas is argon (18), so potassium = **[Ar] 4s¹**.

**Conclusion.** Chlorine is 1s² 2s² 2p⁶ 3s² 3p⁵ (2, 8, 7) and potassium is 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ (2, 8, 8, 1) = [Ar] 4s¹, showing the 4s subshell filling before 3d.`,
      quiz: [
        {
          prompt: "The maximum number of electrons in the first shell is…",
          options: ["2", "8", "18", "1"],
          correctIndex: 0,
          explanation: "The first (K) shell holds a maximum of 2.",
        },
        {
          prompt: "The maximum number of electrons in the second shell is…",
          options: ["8", "2", "18", "10"],
          correctIndex: 0,
          explanation: "The second (L) shell holds 8.",
        },
        {
          prompt: "An s subshell holds a maximum of … electrons.",
          options: ["2", "6", "10", "14"],
          correctIndex: 0,
          explanation: "s holds 2 electrons.",
        },
        {
          prompt: "A p subshell holds a maximum of … electrons.",
          options: ["6", "2", "10", "8"],
          correctIndex: 0,
          explanation: "p holds 6 electrons.",
        },
        {
          prompt: "A d subshell holds a maximum of … electrons.",
          options: ["10", "6", "2", "14"],
          correctIndex: 0,
          explanation: "d holds 10 electrons.",
        },
        {
          prompt: "The electron configuration of carbon (Z = 6) is…",
          options: ["1s² 2s² 2p²", "1s² 2s² 2p⁴", "1s² 2s⁴", "2, 8"],
          correctIndex: 0,
          explanation: "Six electrons: 1s² 2s² 2p².",
        },
        {
          prompt: "The shell notation for oxygen (Z = 8) is…",
          options: ["2, 6", "2, 8", "6, 2", "8"],
          correctIndex: 0,
          explanation: "2 in the first shell, 6 in the second.",
        },
        {
          prompt: "Which subshell fills before 3d?",
          options: ["4s", "5s", "4p", "4d"],
          correctIndex: 0,
          explanation: "4s is lower in energy and fills before 3d.",
        },
        {
          prompt: "The configuration of sodium (Z = 11) is…",
          options: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁹", "2, 9", "1s² 2s⁹"],
          correctIndex: 0,
          explanation: "Eleven electrons end in 3s¹.",
        },
        {
          prompt: "The noble-gas shorthand for sodium is…",
          options: ["[Ne] 3s¹", "[He] 3s¹", "[Ar] 3s¹", "[Ne] 2s¹"],
          correctIndex: 0,
          explanation: "Neon (10) plus 3s¹.",
        },
        {
          prompt: "Valence electrons are the electrons in the…",
          options: ["outermost shell", "innermost shell", "nucleus", "1s orbital"],
          correctIndex: 0,
          explanation: "Outer-shell electrons decide chemistry.",
        },
        {
          prompt: "Calcium (Z = 20) has shell notation…",
          options: ["2, 8, 8, 2", "2, 8, 10", "2, 8, 8, 2, 0", "2, 18"],
          correctIndex: 0,
          explanation: "Twenty electrons fill 2, 8, 8, 2.",
        },
        {
          prompt: "The filling order after 3p is…",
          options: ["4s then 3d", "3d then 4s", "4p then 4s", "5s then 4s"],
          correctIndex: 0,
          explanation: "4s fills before 3d.",
        },
        {
          prompt: "The configuration 1s² 2s² 2p⁶ describes…",
          options: ["neon (Z = 10)", "oxygen (Z = 8)", "sodium (Z = 11)", "carbon (Z = 6)"],
          correctIndex: 0,
          explanation: "Ten electrons = neon.",
        },
        {
          prompt: "Potassium (Z = 19) in noble-gas shorthand is…",
          options: ["[Ar] 4s¹", "[Ne] 4s¹", "[Ar] 3d¹", "[Ne] 3s¹"],
          correctIndex: 0,
          explanation: "Argon (18) plus 4s¹.",
        },
        {
          prompt: "Electrons fill orbitals starting from the…",
          options: ["lowest energy", "highest energy", "outer shell", "3d subshell"],
          correctIndex: 0,
          explanation: "Lowest-energy orbitals fill first.",
        },
        {
          prompt: "How many valence electrons does chlorine (2, 8, 7) have?",
          options: ["7", "8", "2", "17"],
          correctIndex: 0,
          explanation: "Seven electrons in the outer shell.",
        },
        {
          prompt: "The spdf notation for magnesium (Z = 12) is…",
          options: ["1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁸", "2, 8, 2 only", "1s² 2s² 2p⁶ 3s¹"],
          correctIndex: 0,
          explanation: "Twelve electrons end in 3s².",
        },
        {
          prompt: "Noble-gas shorthand is useful because it…",
          options: ["shortens long configurations", "changes the element", "removes valence electrons", "adds neutrons"],
          correctIndex: 0,
          explanation: "It abbreviates the inner (core) electrons.",
        },
        {
          prompt: "The third shell holds how many electrons for the first twenty elements?",
          options: ["8", "18", "2", "32"],
          correctIndex: 0,
          explanation: "Up to calcium, the third shell shows 8 before 4s fills.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Write the full spdf electron configuration and the shell notation for phosphorus (Z = 15).",
          answerKey:
            "spdf: 1s² 2s² 2p⁶ 3s² 3p³. Shell notation: 2, 8, 5. Award marks for correct spdf and correct shell notation.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which subshell is filled before 3d?",
          options: ["4s", "4p", "5s", "4d"],
          correctIndex: 0,
          answerKey: "4s is lower in energy than 3d and fills first.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The noble-gas shorthand for calcium (Z = 20) is:",
          options: ["[Ar] 4s²", "[Ne] 4s²", "[Ar] 3d²", "[Kr] 4s²"],
          correctIndex: 0,
          answerKey: "Argon core (18) plus 4s².",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the maximum number of electrons that can occupy s, p and d subshells.",
          answerKey: "s = 2, p = 6, d = 10. One mark each (accept two of three for partial).",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain how the electron configuration of an atom is built up, using potassium (Z = 19) as your example, and explain why 4s fills before 3d.",
          answerKey:
            "A full answer explains that electrons fill orbitals from lowest energy upward, each subshell holding s = 2, p = 6, d = 10. For potassium the order is 1s² 2s² 2p⁶ 3s² 3p⁶, which accounts for 18 electrons; the nineteenth goes into 4s (not 3d) because the 4s subshell is slightly lower in energy than 3d, giving 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ = [Ar] 4s¹, shell notation 2, 8, 8, 1. Award marks for the filling rule/subshell capacities, the correct configuration, and a clear reason that 4s is lower in energy than 3d.",
          marks: 6,
        },
      ],
    },
    {
      // source: LibreTexts — Electron Configuration: Aufbau principle, Pauli exclusion principle and Hund's rule (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Quantum_Mechanics/10:_Multi-electron_Atoms/Electron_Configuration)
      slug: "rules-for-filling-electrons",
      title: "Rules and Principles for Filling in Electrons",
      objective:
        "By the end of the topic, learners should be able to state and apply the Aufbau principle, the Pauli exclusion principle and Hund's rule, and draw orbital (box) diagrams for the first twenty elements. (MoE Grade 10 Period II, CONTENTS 7.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- Electron configurations are built using three rules that decide **the order** of filling, **how many** per orbital, and **how** electrons spread within a subshell.
- **This topic:** the Aufbau principle, the Pauli exclusion principle and Hund's rule, shown with orbital (box) diagrams.

## 1. The Aufbau principle

- **Aufbau** (German, "building up") — electrons fill the **lowest-energy** orbital available first, then the next.
- Filling order: **1s 2s 2p 3s 3p 4s 3d 4p 5s …**
- A subshell must be started before moving to the next higher one.

## 2. The Pauli exclusion principle

- **No two electrons in an atom can have the same four quantum numbers.**
- Practical result: an orbital holds **at most two electrons, and they must have opposite spins** (one up ↑, one down ↓).

## 3. Hund's rule

- Within a subshell of equal-energy (degenerate) orbitals, electrons occupy **empty orbitals singly first**, all with **parallel spins**, before any orbital is doubled up.
- This gives the lowest-energy, most stable arrangement.

## Orbital (box) diagrams

- Each orbital is a box; electrons are arrows (↑ or ↓).
- Example — nitrogen (Z = 7), 1s² 2s² 2p³:

\`\`\`svg Orbital box diagram for nitrogen (1s2 2s2 2p3)
<svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Box diagram: 1s and 2s each with paired arrows, three 2p boxes each with a single up arrow">
  <g font-size="10" fill="#92400e" text-anchor="middle">
    <rect x="20" y="30" width="26" height="26" fill="none" stroke="#b45309"/><text x="33" y="48" fill="#1e3a8a">↑↓</text><text x="33" y="72">1s</text>
    <rect x="70" y="30" width="26" height="26" fill="none" stroke="#b45309"/><text x="83" y="48" fill="#1e3a8a">↑↓</text><text x="83" y="72">2s</text>
    <rect x="150" y="30" width="26" height="26" fill="none" stroke="#b45309"/><text x="163" y="48" fill="#1e3a8a">↑</text>
    <rect x="180" y="30" width="26" height="26" fill="none" stroke="#b45309"/><text x="193" y="48" fill="#1e3a8a">↑</text>
    <rect x="210" y="30" width="26" height="26" fill="none" stroke="#b45309"/><text x="223" y="48" fill="#1e3a8a">↑</text>
    <text x="193" y="72">2p</text>
  </g>
</svg>
\`\`\`

- Note how the three 2p electrons go singly into the three 2p orbitals with parallel spins — that is **Hund's rule**.

## Putting the rules together

1. **Aufbau** — decide the order (lowest energy first).
2. **Pauli** — no more than two per orbital, opposite spins.
3. **Hund** — spread out singly within a subshell before pairing.

## Common errors and misconceptions

- **Pairing before spreading** — within a subshell fill each orbital singly first (Hund), then pair.
- **Same spins in one orbital** — the two electrons in an orbital must be opposite (Pauli).
- **Filling 3d before 4s** — Aufbau order puts 4s before 3d.
- **More than two electrons in a box** — an orbital holds a maximum of two.`,
      workedExample: `**Task.** Use the three rules to write the configuration and draw the orbital diagram of oxygen (Z = 8), explaining where each rule applies.

**Step 1 — Aufbau (order of filling)**
- Fill lowest energy first: 1s, then 2s, then 2p. Eight electrons: 1s² 2s² 2p⁴.

**Step 2 — Pauli (two per orbital, opposite spins)**
- 1s holds ↑↓ (2), 2s holds ↑↓ (2). No orbital gets more than two, and the pair is opposite in spin.

**Step 3 — Hund (spread out first)**
- The four 2p electrons go into the three 2p orbitals: first one each (↑ ↑ ↑) with parallel spins, then the fourth pairs up in the first 2p orbital (↑↓ ↑ ↑).

**Orbital diagram**
- 1s [↑↓]  2s [↑↓]  2p [↑↓][↑][↑]

**Conclusion.** Oxygen is 1s² 2s² 2p⁴: Aufbau set the 1s→2s→2p order, Pauli limited each orbital to two opposite-spin electrons, and Hund made the 2p electrons singly occupy the orbitals before the fourth paired up.`,
      quiz: [
        {
          prompt: "The Aufbau principle says electrons fill the … orbital first.",
          options: ["lowest-energy", "highest-energy", "outermost", "3d"],
          correctIndex: 0,
          explanation: "Lowest-energy orbitals fill first.",
        },
        {
          prompt: "The Pauli exclusion principle limits each orbital to a maximum of…",
          options: ["2 electrons", "1 electron", "6 electrons", "8 electrons"],
          correctIndex: 0,
          explanation: "Two electrons of opposite spin per orbital.",
        },
        {
          prompt: "The two electrons in one orbital must have…",
          options: ["opposite spins", "the same spin", "the same energy level only", "no spin"],
          correctIndex: 0,
          explanation: "Opposite spins satisfy Pauli.",
        },
        {
          prompt: "Hund's rule says that within a subshell, electrons first…",
          options: ["occupy empty orbitals singly with parallel spins", "pair up immediately", "leave orbitals empty", "fill the highest orbital"],
          correctIndex: 0,
          explanation: "Single occupancy with parallel spins comes first.",
        },
        {
          prompt: "'Aufbau' is a German word meaning…",
          options: ["building up", "spinning", "pairing", "removing"],
          correctIndex: 0,
          explanation: "Aufbau means to build up.",
        },
        {
          prompt: "According to the Aufbau order, which fills first?",
          options: ["4s before 3d", "3d before 4s", "4p before 4s", "3d before 3p"],
          correctIndex: 0,
          explanation: "4s is lower in energy and fills before 3d.",
        },
        {
          prompt: "No two electrons in an atom can have the same set of…",
          options: ["four quantum numbers", "two quantum numbers", "spins", "energies"],
          correctIndex: 0,
          explanation: "That is the Pauli exclusion principle.",
        },
        {
          prompt: "In the 2p subshell of nitrogen (2p³), the three electrons are…",
          options: ["one in each orbital, parallel spins", "all paired in one orbital", "two paired, one absent", "all opposite spins in one box"],
          correctIndex: 0,
          explanation: "Hund's rule: singly occupied, parallel spins.",
        },
        {
          prompt: "Drawing electrons as arrows in boxes gives an…",
          options: ["orbital (box) diagram", "isotope chart", "mass spectrum", "titration curve"],
          correctIndex: 0,
          explanation: "Box diagrams show orbital occupancy and spin.",
        },
        {
          prompt: "Which rule prevents both arrows in one box pointing the same way?",
          options: ["Pauli exclusion principle", "Hund's rule", "Aufbau principle", "Avogadro's law"],
          correctIndex: 0,
          explanation: "Paired electrons must be opposite (Pauli).",
        },
        {
          prompt: "Which rule decides the ORDER in which subshells fill?",
          options: ["Aufbau principle", "Hund's rule", "Pauli principle", "octet rule"],
          correctIndex: 0,
          explanation: "Aufbau gives the filling order.",
        },
        {
          prompt: "Which rule explains why 2p electrons spread out before pairing?",
          options: ["Hund's rule", "Aufbau principle", "Pauli principle", "Charles's law"],
          correctIndex: 0,
          explanation: "Hund's rule gives single occupancy first.",
        },
        {
          prompt: "The most stable arrangement of electrons in equal-energy orbitals has spins that are…",
          options: ["parallel (same direction) when singly occupied", "always opposite", "random", "zero"],
          correctIndex: 0,
          explanation: "Parallel spins in singly filled orbitals are lowest energy.",
        },
        {
          prompt: "An orbital diagram box can hold at most … arrows.",
          options: ["2", "1", "3", "6"],
          correctIndex: 0,
          explanation: "Two electrons (arrows) per orbital.",
        },
        {
          prompt: "For carbon (2p²), Hund's rule gives the 2p electrons as…",
          options: ["↑ ↑ (in separate orbitals)", "↑↓ in one orbital", "↑ only", "↑↓↑ in one orbital"],
          correctIndex: 0,
          explanation: "Two 2p electrons occupy separate orbitals, parallel spins.",
        },
        {
          prompt: "The three rules are applied in the order…",
          options: ["Aufbau, Pauli, Hund", "Hund, Pauli, Aufbau", "Pauli, Aufbau, Hund", "Aufbau, Hund, Pauli only"],
          correctIndex: 0,
          explanation: "Order the orbitals (Aufbau), cap at two (Pauli), spread out (Hund).",
        },
        {
          prompt: "Electrons that are paired in an orbital are represented as…",
          options: ["↑↓", "↑↑", "↓↓", "a single ↑"],
          correctIndex: 0,
          explanation: "Opposite arrows show paired, opposite spins.",
        },
        {
          prompt: "The Aufbau, Pauli and Hund rules together let you predict an atom's…",
          options: ["electron configuration", "colour", "mass number", "number of neutrons"],
          correctIndex: 0,
          explanation: "They build the ground-state configuration.",
        },
        {
          prompt: "Filling 3d before 4s would violate the…",
          options: ["Aufbau principle", "Pauli principle", "Hund's rule", "octet rule"],
          correctIndex: 0,
          explanation: "Aufbau requires 4s before 3d.",
        },
        {
          prompt: "Putting three electrons in one orbital would violate the…",
          options: ["Pauli exclusion principle", "Aufbau principle", "Hund's rule", "law of conservation of mass"],
          correctIndex: 0,
          explanation: "An orbital holds at most two electrons.",
        },
      ],
      test: [
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which principle states that no two electrons in an atom can have the same four quantum numbers?",
          options: ["Pauli exclusion principle", "Aufbau principle", "Hund's rule", "Avogadro's law"],
          correctIndex: 0,
          answerKey: "That is the Pauli exclusion principle.",
          marks: 1,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Placing 2p electrons singly with parallel spins before pairing follows:",
          options: ["Hund's rule", "the Aufbau principle", "the Pauli principle", "the octet rule"],
          correctIndex: 0,
          answerKey: "Hund's rule gives single occupancy with parallel spins first.",
          marks: 1,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State the Aufbau principle, the Pauli exclusion principle and Hund's rule.",
          answerKey:
            "Aufbau: electrons fill the lowest-energy orbital available first. Pauli: no two electrons can have the same four quantum numbers, so an orbital holds at most two electrons with opposite spins. Hund: within a subshell, electrons occupy empty orbitals singly with parallel spins before pairing. Award a mark for each correct statement (and one for completeness).",
          marks: 4,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Draw (in words or arrows) the orbital diagram of nitrogen (Z = 7) and identify where Hund's rule applies.",
          answerKey:
            "Nitrogen 1s² 2s² 2p³: 1s [↑↓], 2s [↑↓], 2p [↑][↑][↑]. Hund's rule applies to the three 2p electrons, which occupy the three 2p orbitals singly with parallel spins rather than pairing. Award marks for the correct diagram and for identifying the 2p single occupancy as Hund's rule.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the three rules used to fill electrons into orbitals, and apply all three to build the orbital diagram of oxygen (Z = 8).",
          answerKey:
            "A full answer states the Aufbau principle (fill lowest-energy orbitals first, order 1s 2s 2p 3s 3p 4s 3d …), the Pauli exclusion principle (max two electrons per orbital, opposite spins) and Hund's rule (occupy degenerate orbitals singly with parallel spins before pairing). Applying them to oxygen (8 electrons): 1s² 2s² 2p⁴, drawn as 1s[↑↓] 2s[↑↓] 2p[↑↓][↑][↑] — Aufbau sets the 1s→2s→2p order, Pauli caps each box at two opposite-spin electrons, and Hund puts one electron in each 2p orbital before the fourth pairs up. Award marks for the three correctly stated rules and the correct, fully explained oxygen diagram.",
          marks: 6,
        },
      ],
    },
  ],
};
