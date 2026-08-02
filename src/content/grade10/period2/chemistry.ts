import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 10,
// Semester One, Period II: Atomic Structure — the history and models of the
// atom, the fundamental particles, atomic and mass number, isotopes and
// electron configuration.
export const chemistryG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Atomic Structure",
  summary:
    "Period II of the MoE Grade 10 Chemistry syllabus. Learners trace the development of atomic theory from Dalton to Bohr, identify the three fundamental particles and their arrangement, and use atomic number and mass number to work out isotopes and to write electron configurations.",
  topics: [
    {
      slug: "models-of-the-atom",
      title: "Models of the Atom and the Fundamental Particles",
      objective:
        "By the end of the topic, learners should be able to outline the contributions of Dalton, Thomson, Rutherford and Bohr to atomic theory, and name the three fundamental particles with their charges, masses and positions in the atom.",
      estimatedMinutes: 150,
      notes: `## Introduction

Everything is built from **atoms**, particles far too small to see even with an ordinary microscope. Because no one could look at an atom directly, our picture of it was built up piece by piece over two hundred years, each scientist improving on the last as new experiments revealed more. This topic follows that story — from Dalton's solid sphere to Bohr's shells — and then names the three **fundamental particles** (proton, neutron, electron) with their charges, masses and positions inside the atom. It is a fine example of how a scientific model changes as evidence grows.

## The idea of the atom

An **atom** is the smallest particle of an element that still has the properties of that element. The idea developed over two centuries as scientists tested and improved earlier models.

## A short history of atomic theory

- **John Dalton (1803).** Proposed that all matter is made of tiny, indivisible **atoms**; atoms of the same element are identical; atoms combine in fixed ratios to form compounds. His atom was a solid, featureless sphere.
- **J. J. Thomson (1897).** Discovered the **electron** — a tiny negative particle. His **"plum-pudding" model** pictured the atom as a ball of positive charge with electrons scattered through it like plums in a pudding.
- **Ernest Rutherford (1911).** His team fired positive alpha particles at thin **gold foil**. Most passed straight through, but a few bounced sharply back. This showed the atom is mostly **empty space** with a tiny, dense, positive **nucleus** at the centre.
- **Niels Bohr (1913).** Refined the model: electrons travel around the nucleus in fixed **energy levels (shells)**, like planets orbiting the Sun. Each shell holds a definite amount of energy.

\`\`\`svg Bohr model of an atom: nucleus with electron shells
<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bohr model with a central nucleus and two electron shells">
  <circle cx="120" cy="110" r="90" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="120" cy="110" r="55" fill="none" stroke="#b45309" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="120" cy="110" r="20" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
  <text x="120" y="114" font-size="10" text-anchor="middle" fill="#451a03">nucleus</text>
  <circle cx="120" cy="55" r="6" fill="#1e3a8a"/>
  <circle cx="175" cy="110" r="6" fill="#1e3a8a"/>
  <circle cx="120" cy="20" r="6" fill="#1e3a8a"/>
  <circle cx="210" cy="110" r="6" fill="#1e3a8a"/>
  <circle cx="30" cy="110" r="6" fill="#1e3a8a"/>
  <text x="120" y="212" font-size="10" text-anchor="middle" fill="#92400e">electrons in shells (energy levels)</text>
</svg>
\`\`\`

## The three fundamental particles

Every atom is built from three **subatomic particles**:

| Particle | Charge | Relative mass | Location |
|---|---|---|---|
| **Proton** | +1 | 1 | in the nucleus |
| **Neutron** | 0 (neutral) | 1 | in the nucleus |
| **Electron** | −1 | ~1/1840 (≈0) | in shells around the nucleus |

Key points:

- The **nucleus** contains the protons and neutrons, so it holds almost all the atom's **mass** and is **positively charged**.
- **Electrons** are found in shells and have almost no mass.
- A neutral atom has **equal numbers of protons and electrons**, so the positive and negative charges cancel.

## Why the gold-foil result mattered

Before Rutherford, the plum-pudding model spread the positive charge evenly. The fact that a few alpha particles bounced **straight back** could only be explained if the positive charge was concentrated in a tiny, dense centre — the nucleus. This single experiment overturned Thomson's model.

## Common errors and misconceptions

- **Thinking the atom is mostly solid** — an atom is mostly **empty space**; its mass is packed into a tiny central nucleus.
- **Getting the charges wrong** — the **proton** is positive, the **electron** negative, the **neutron** has no charge. Protons and neutrons sit in the nucleus; electrons occupy shells around it.
- **Saying electrons weigh as much as protons** — an electron's mass is about 1/1836 of a proton's; almost all the mass is in the nucleus.
- **Treating a model as the final truth** — each atomic model was the best picture *at the time* and was replaced when new evidence appeared.`,
      workedExample: `**Task.** Explain what Rutherford's gold-foil experiment showed, and use a labelled account of the results to justify the nuclear model of the atom.

**The experiment**
A beam of positively charged **alpha particles** was directed at a very thin sheet of **gold foil**, with a screen around it to detect where the particles went.

**The three observations and what each proved**

1. **Most alpha particles passed straight through the foil.**
   → The atom is mostly **empty space**; there was little to stop them.

2. **A small number were deflected through large angles.**
   → There is a **concentrated positive charge** in the atom that repels the positive alpha particles.

3. **A very few bounced almost straight back.**
   → That positive charge must be **tiny and very dense** — a nucleus — because only a head-on hit with something massive could reverse a particle.

**Conclusion (the nuclear model)**
The atom has a **small, dense, positively charged nucleus** at its centre containing most of the mass, surrounded by mostly empty space in which the electrons move. This replaced Thomson's plum-pudding model, in which the positive charge was spread out and could not have caused the large deflections.`,
      teachingTip:
        "The models are best taught as a story of correction: each scientist kept what worked and fixed what didn't. Draw the four models side by side on the board (solid sphere → plum pudding → nuclear → shells) and ask learners what new evidence forced each change. Anchoring the nucleus discovery to the surprising gold-foil 'bounce-back' makes the leap memorable and stops learners treating the models as unrelated facts to memorise.",
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
          explanation: "Bohr's model has electrons orbiting in defined shells.",
        },
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
          prompt: "The fact that a few alpha particles bounced back showed the nucleus is…",
          options: ["tiny and dense", "large and soft", "negatively charged", "made of electrons"],
          correctIndex: 0,
          explanation: "Only a small, dense, positive centre could reverse the particles.",
        },
        {
          prompt: "The overall charge of the nucleus is…",
          options: ["positive", "negative", "neutral", "variable"],
          correctIndex: 0,
          explanation: "The nucleus contains positive protons and neutral neutrons.",
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
          prompt: "Which two particles have approximately the same mass?",
          options: ["proton and neutron", "proton and electron", "neutron and electron", "electron and photon"],
          correctIndex: 0,
          explanation: "Protons and neutrons each have a relative mass of about 1.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "Complete a table giving the charge, relative mass and location of the proton, neutron and electron.",
          answerKey:
            "Proton: +1, mass 1, in nucleus. Neutron: 0, mass 1, in nucleus. Electron: −1, mass ~1/1840 (≈0), in shells around nucleus. Award marks for correct charge, mass and location across the three particles.",
          marks: 6,
        },
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
          type: "SHORT_ANSWER",
          prompt:
            "State one contribution each of Dalton, Thomson and Bohr to our understanding of the atom.",
          answerKey:
            "Dalton – matter is made of indivisible atoms (fixed-ratio combining). Thomson – discovered the electron / plum-pudding model. Bohr – electrons occupy fixed energy levels (shells). Award a mark per correct contribution.",
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
      slug: "atomic-number-isotopes-configuration",
      title: "Atomic Number, Isotopes and Electron Configuration",
      objective:
        "By the end of the topic, learners should be able to define atomic number and mass number, work out the numbers of protons, neutrons and electrons in an atom, explain what isotopes are, and write the electron configuration of the first twenty elements.",
      estimatedMinutes: 150,
      notes: `## Introduction

Now that we know an atom is made of protons, neutrons and electrons, we can count them and see how they are arranged. Two simple numbers — the **atomic number** and the **mass number** — tell us everything about the make-up of an atom's nucleus, explain why **isotopes** of the same element exist, and let us write out the arrangement of an atom's electrons (its **electron configuration**), which in turn decides how the element behaves.

## Atomic number and mass number

Two numbers describe an atom:

- **Atomic number (Z)** = the number of **protons** in the nucleus. It defines the element — every carbon atom has 6 protons.
- **Mass number (A)** = the number of **protons + neutrons** in the nucleus.

An atom is written as:

**ᴬ𝗓X** — for example, ²³₁₁Na means sodium with A = 23 and Z = 11.

From these two numbers:

- **Protons = Z**
- **Electrons = Z** (in a neutral atom)
- **Neutrons = A − Z**

For sodium (²³₁₁Na): protons = 11, electrons = 11, neutrons = 23 − 11 = **12**.

## Isotopes

**Isotopes** are atoms of the **same element** (same number of protons) with **different numbers of neutrons** — so they have the same atomic number but different mass numbers.

Example: chlorine has two common isotopes, ³⁵Cl (18 neutrons) and ³⁷Cl (20 neutrons). Both have 17 protons; they behave the same chemically but differ slightly in mass.

## Electron configuration — filling the shells

Electrons occupy shells (energy levels) around the nucleus, filling the lowest energy shell first. The maximum number each shell can hold is:

- 1st shell: **2** electrons
- 2nd shell: **8** electrons
- 3rd shell: **8** electrons (for the first 20 elements)

We write the arrangement as numbers separated by commas or dots.

- Carbon (Z = 6): 2, 4
- Oxygen (Z = 8): 2, 6
- Sodium (Z = 11): 2, 8, 1
- Calcium (Z = 20): 2, 8, 8, 2

\`\`\`svg Electron shells filling for sodium (2,8,1)
<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sodium atom with electron arrangement 2,8,1">
  <circle cx="120" cy="110" r="88" fill="none" stroke="#b45309" stroke-dasharray="3 3"/>
  <circle cx="120" cy="110" r="55" fill="none" stroke="#b45309" stroke-dasharray="3 3"/>
  <circle cx="120" cy="110" r="18" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
  <text x="120" y="114" font-size="9" text-anchor="middle" fill="#451a03">Na</text>
  <text x="120" y="150" font-size="10" text-anchor="middle" fill="#92400e">inner shell: 2</text>
  <text x="120" y="165" font-size="10" text-anchor="middle" fill="#92400e">2nd shell: 8</text>
  <text x="120" y="180" font-size="10" text-anchor="middle" fill="#92400e">outer shell: 1</text>
  <circle cx="120" cy="22" r="5" fill="#1e3a8a"/>
  <circle cx="120" cy="55" r="5" fill="#1e3a8a"/>
  <circle cx="175" cy="110" r="5" fill="#1e3a8a"/>
</svg>
\`\`\`

## Why the outer shell matters

The electrons in the **outermost shell** are called **valence electrons**. They decide how an element reacts. Sodium (2, 8, **1**) has one outer electron it readily loses; that is why it is a very reactive metal. This links atomic structure directly to chemical behaviour — the theme of the next period, the periodic table.

## Common errors and misconceptions

- **Mass number vs atomic number** — atomic number (Z) = protons; mass number (A) = protons + neutrons. Neutrons = A − Z (don't forget to subtract).
- **Thinking isotopes are different elements** — isotopes have the **same** number of protons (same element) but **different** numbers of neutrons, so different mass numbers.
- **Overfilling shells** — the shells fill 2, then 8, then 8 for the first twenty elements; the first shell holds a **maximum of 2**.
- **Confusing atomic number with the number of electrons in a charged ion** — in a *neutral atom* protons = electrons, but an ion has gained or lost electrons.`,
      workedExample: `**Task.** An atom of aluminium is written ²⁷₁₃Al. (a) State its atomic number and mass number. (b) Work out its numbers of protons, neutrons and electrons. (c) Write its electron configuration. (d) Explain how an isotope of aluminium would differ.

**Part (a)**
- Atomic number Z = **13** (the lower number)
- Mass number A = **27** (the upper number)

**Part (b)**
- Protons = Z = **13**
- Electrons = Z = **13** (neutral atom)
- Neutrons = A − Z = 27 − 13 = **14**

**Part (c) — electron configuration**
Fill the shells 2, then 8, then the rest:
13 = 2 + 8 + 3 → **2, 8, 3**

**Part (d) — an isotope**
An isotope of aluminium would have the **same 13 protons** (so still aluminium) but a **different number of neutrons**, giving a different mass number — for example ²⁶Al (13 neutrons) or ²⁸Al (15 neutrons). Its chemistry would be the same because the electron arrangement (2, 8, 3) is unchanged.`,
      teachingTip:
        "The commonest slip is confusing atomic number and mass number when reading the ᴬ𝗓X symbol. Fix it with a phrase: 'the big number is the mass'. Then drill the three-step routine — protons = Z, electrons = Z, neutrons = A − Z — on five elements before touching electron configuration, so the arithmetic is automatic when the shells are added.",
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
          prompt: "In a neutral atom, the number of electrons equals the number of…",
          options: ["protons", "neutrons", "shells", "isotopes"],
          correctIndex: 0,
          explanation: "Equal protons and electrons keep the atom neutral.",
        },
        {
          prompt: "Isotopes of an element have the same number of protons but different numbers of…",
          options: ["neutrons", "electrons", "shells", "protons"],
          correctIndex: 0,
          explanation: "Isotopes differ only in neutron number, hence mass number.",
        },
        {
          prompt: "How many protons does an atom with atomic number 8 have?",
          options: ["8", "16", "4", "0"],
          correctIndex: 0,
          explanation: "Atomic number = proton number = 8.",
        },
        {
          prompt: "What is the maximum number of electrons in the first shell?",
          options: ["2", "8", "10", "18"],
          correctIndex: 0,
          explanation: "The first (innermost) shell holds at most 2 electrons.",
        },
        {
          prompt: "What is the maximum number of electrons in the second shell?",
          options: ["8", "2", "18", "6"],
          correctIndex: 0,
          explanation: "The second shell holds up to 8 electrons.",
        },
        {
          prompt: "The electron configuration of carbon (Z = 6) is…",
          options: ["2, 4", "6", "2, 2, 2", "2, 8"],
          correctIndex: 0,
          explanation: "Fill 2 in the first shell, then 4 in the second: 2, 4.",
        },
        {
          prompt: "The electron configuration of sodium (Z = 11) is…",
          options: ["2, 8, 1", "8, 2, 1", "2, 9", "11"],
          correctIndex: 0,
          explanation: "2 + 8 + 1 = 11: shells fill as 2, 8, 1.",
        },
        {
          prompt: "Chlorine-35 and chlorine-37 are examples of…",
          options: ["isotopes", "compounds", "ions", "molecules"],
          correctIndex: 0,
          explanation: "Same element, different neutron numbers — they are isotopes.",
        },
        {
          prompt: "Electrons in the outermost shell are called…",
          options: ["valence electrons", "core electrons", "protons", "neutrons"],
          correctIndex: 0,
          explanation: "Valence electrons determine an element's chemistry.",
        },
        {
          prompt: "An atom has 17 protons and 18 neutrons. Its mass number is…",
          options: ["35", "17", "18", "1"],
          correctIndex: 0,
          explanation: "A = protons + neutrons = 17 + 18 = 35.",
        },
        {
          prompt: "The electron configuration of oxygen (Z = 8) is…",
          options: ["2, 6", "8", "6, 2", "2, 8"],
          correctIndex: 0,
          explanation: "2 in the first shell, 6 in the second: 2, 6.",
        },
        {
          prompt: "Which number defines what element an atom is?",
          options: ["atomic number", "mass number", "neutron number", "shell number"],
          correctIndex: 0,
          explanation: "The proton (atomic) number uniquely identifies the element.",
        },
        {
          prompt: "How many electrons does a neutral atom with Z = 20 have?",
          options: ["20", "40", "10", "2"],
          correctIndex: 0,
          explanation: "Electrons = Z = 20 in a neutral atom.",
        },
        {
          prompt: "The electron configuration 2, 8, 8, 2 belongs to an element with atomic number…",
          options: ["20", "18", "12", "2"],
          correctIndex: 0,
          explanation: "2 + 8 + 8 + 2 = 20 (calcium).",
        },
        {
          prompt: "Why do isotopes of the same element behave the same way chemically?",
          options: [
            "They have the same electron arrangement",
            "They have the same number of neutrons",
            "They have the same mass",
            "They have different protons",
          ],
          correctIndex: 0,
          explanation: "Chemistry depends on electrons, which are unchanged in isotopes.",
        },
        {
          prompt: "In the symbol ¹⁶₈O, the number 8 is the…",
          options: ["atomic number", "mass number", "neutron number", "electron shell"],
          correctIndex: 0,
          explanation: "The lower number is the atomic (proton) number.",
        },
        {
          prompt: "How many neutrons are in ³⁷Cl if chlorine's atomic number is 17?",
          options: ["20", "17", "37", "54"],
          correctIndex: 0,
          explanation: "Neutrons = 37 − 17 = 20.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt:
            "An atom is written ⁴⁰₂₀Ca. State (a) its atomic number, (b) its mass number, (c) its number of neutrons.",
          answerKey:
            "(a) 20; (b) 40; (c) neutrons = 40 − 20 = 20. Award a mark for each correct value.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Write the electron configuration of an atom with atomic number 17.",
          answerKey:
            "17 electrons: 2, 8, 7. Full marks for the correct configuration; deduct if a shell is over-filled (e.g. more than 8 in the second shell).",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Two atoms have the same atomic number but different mass numbers. They are…",
          options: ["isotopes", "different elements", "molecules", "compounds"],
          correctIndex: 0,
          answerKey: "Same protons, different neutrons — the definition of isotopes.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Explain, using the outer electrons, why sodium (2, 8, 1) is a very reactive metal.",
          answerKey:
            "Sodium has a single electron in its outer shell (a valence electron) which it loses easily to gain a stable arrangement; this ease of losing the outer electron makes it very reactive. Award marks for identifying the single valence electron and linking its loss to reactivity.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Define isotopes and, using chlorine-35 and chlorine-37, explain why they have identical chemical properties but slightly different masses.",
          answerKey:
            "Isotopes are atoms of the same element with the same number of protons (and electrons) but different numbers of neutrons, giving different mass numbers. Chlorine-35 has 17 protons and 18 neutrons; chlorine-37 has 17 protons and 20 neutrons. Chemistry depends on the electron arrangement, which is identical (both 2,8,7), so the two behave the same chemically; the extra neutrons in Cl-37 only add mass. Award marks for the definition, the correct proton/neutron breakdown, and the electron-based explanation of identical chemistry.",
          marks: 5,
        },
      ],
    },
  ],
};
