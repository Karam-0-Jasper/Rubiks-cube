import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 12,
// Semester Two, Period V: Atomic and Nuclear Physics. Topics follow the syllabus
// CONTENTS item by item: the nucleus and the electron, types of nuclear reactions
// and the uses of nuclear energy, radioactivity (types, effects, decay and
// half-life), nuclear fission and fusion, and thermionic and photoelectric
// emissions (cathode rays and X-rays). Every topic is sourced from OpenStax
// College Physics 2e (read via WebFetch).
export const physicsG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Atomic and Nuclear Physics",
  summary:
    "Period V of the MoE Grade 12 Physics syllabus. Learners describe the nucleus (protons, neutrons, atomic number Z, mass number A, isotopes) and the electron, classify nuclear reactions and list uses of nuclear energy, study the three types of radioactivity, their effects and half-life (N = N₀(1/2)^(t/T)), compare nuclear fission and fusion with E = mc², and explain thermionic and photoelectric emission including cathode rays and X-rays (Einstein's equation KE_max = hf − W).",
  topics: [
    // source: OpenStax — College Physics 2e, 30.2 Discovery of the Parts of the Atom & 31.3 Substructure of the Nucleus (https://openstax.org/books/college-physics-2e/pages/31-3-substructure-of-the-nucleus)
    {
      slug: "the-nucleus-and-the-electron",
      title: "The Nucleus and the Electron",
      objective:
        "By the end of the topic, learners should be able to describe the structure of the nucleus (protons, neutrons, atomic number, mass number, isotopes) and state the properties of the electron. (MoE Grade 12 Period V, CONTENTS 1 'The nucleus and the electron'.)",
      estimatedMinutes: 100,
      notes: `## The nucleus

- The **nucleus** is the small, dense, positively charged centre of the atom, made of **nucleons**: **protons** (positive) and **neutrons** (neutral).
- **Atomic number (Z)** — the number of protons; it identifies the element.
- **Mass number (A)** — the total number of nucleons: **A = Z + N**, where N is the number of neutrons.
- Notation: for element X, ᴬ𝓏X (e.g. carbon-12 has Z = 6, A = 12, so 6 neutrons).
- **Isotopes** — atoms of the same element (same Z) with different numbers of neutrons (different A); they have identical chemical properties but different nuclear behaviour (e.g. ¹H, ²H, ³H).
- The nucleus is held together by the **strong nuclear force**, which overcomes the electrostatic repulsion between protons.

## The electron

- The **electron** is a fundamental particle found outside the nucleus, discovered from **cathode rays** by J.J. Thomson.
- **Charge:** negative, e = −1.60 ×10⁻¹⁹ C (measured by Millikan's oil-drop experiment).
- **Mass:** very small, mₑ = 9.11 ×10⁻³¹ kg — the smallest mass of any particle with mass; about 1/1836 of a proton's mass.
- **Charge-to-mass ratio:** e/mₑ = 1.76 ×10¹¹ C/kg (found by Thomson).
- Electrons occupy energy levels (shells) around the nucleus; the number of electrons equals Z in a neutral atom.

| Particle | Charge | Relative mass | Location |
| --- | --- | --- | --- |
| Proton | +1.6 ×10⁻¹⁹ C | 1 | nucleus |
| Neutron | 0 | 1 | nucleus |
| Electron | −1.6 ×10⁻¹⁹ C | ≈ 1/1836 | shells outside nucleus |

## Common errors

- **Confusing atomic number and mass number** — Z counts protons; A counts protons + neutrons.
- **Thinking isotopes differ in protons** — isotopes differ in neutrons, not protons.
- **Giving the electron a positive charge** — the electron is negative.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 31.3 and 30.2).** An atom is written as ²³₁₁Na (sodium-23). (a) State its atomic number, mass number, and the number of protons, neutrons and electrons in the neutral atom. (b) Sodium-24 is an isotope of sodium. How does it differ from sodium-23?

**Part (a).**
Step 1 — Atomic number Z = 11 (the lower number), so there are 11 protons.
Step 2 — Mass number A = 23 (the upper number).
Step 3 — Neutrons N = A − Z = 23 − 11 = 12 neutrons.
Step 4 — A neutral atom has electrons = protons = 11 electrons.

**Part (b).** Sodium-24 has the same Z = 11 (still 11 protons, so still sodium) but A = 24, giving N = 24 − 11 = 13 neutrons — one more neutron than sodium-23.

**Answer.** (a) Z = 11, A = 23; 11 protons, 12 neutrons, 11 electrons. (b) Sodium-24 has the same number of protons but one extra neutron (13 instead of 12) — it is an isotope.`,
      quiz: [
        { prompt: "The nucleus of an atom contains:", options: ["protons and electrons", "protons and neutrons", "neutrons and electrons", "electrons only"], correctIndex: 1, explanation: "The nucleus contains protons and neutrons (nucleons)." },
        { prompt: "The atomic number Z is the number of:", options: ["neutrons", "protons", "electrons plus neutrons", "nucleons"], correctIndex: 1, explanation: "Z is the number of protons." },
        { prompt: "The mass number A equals:", options: ["Z − N", "Z + N", "N − Z", "Z × N"], correctIndex: 1, explanation: "A = Z + N (protons + neutrons)." },
        { prompt: "Isotopes have the same number of:", options: ["neutrons", "protons", "nucleons", "no particles in common"], correctIndex: 1, explanation: "Isotopes share the same Z (protons) but differ in neutrons." },
        { prompt: "Carbon-14 (A=14, Z=6) has how many neutrons?", options: ["6", "8", "14", "20"], correctIndex: 1, explanation: "N = A − Z = 14 − 6 = 8." },
        { prompt: "The force holding the nucleus together is the:", options: ["gravitational force", "strong nuclear force", "friction", "magnetic force"], correctIndex: 1, explanation: "The strong nuclear force binds nucleons." },
        { prompt: "The charge of an electron is:", options: ["+1.6 ×10⁻¹⁹ C", "−1.6 ×10⁻¹⁹ C", "0", "−9.1 ×10⁻³¹ C"], correctIndex: 1, explanation: "The electron carries −1.6 ×10⁻¹⁹ C." },
        { prompt: "The electron's charge was measured by:", options: ["Thomson", "Millikan's oil-drop experiment", "Bohr", "Rutherford"], correctIndex: 1, explanation: "Millikan measured e directly with oil drops." },
        { prompt: "The mass of an electron is about:", options: ["9.11 ×10⁻³¹ kg", "1.67 ×10⁻²⁷ kg", "1.6 ×10⁻¹⁹ kg", "9.11 kg"], correctIndex: 0, explanation: "mₑ ≈ 9.11 ×10⁻³¹ kg." },
        { prompt: "Cathode rays are streams of:", options: ["protons", "electrons", "neutrons", "photons"], correctIndex: 1, explanation: "Cathode rays are fast-moving electrons." },
        { prompt: "In a neutral atom, the number of electrons equals the number of:", options: ["neutrons", "protons", "nucleons", "isotopes"], correctIndex: 1, explanation: "Electrons = protons = Z in a neutral atom." },
        { prompt: "A proton's charge compared with an electron's is:", options: ["equal and opposite", "the same sign", "much smaller", "zero"], correctIndex: 0, explanation: "Proton +e, electron −e — equal magnitude, opposite sign." },
        { prompt: "The neutron's charge is:", options: ["+1", "−1", "0", "+2"], correctIndex: 2, explanation: "The neutron is electrically neutral." },
        { prompt: "The nucleons are:", options: ["protons and electrons", "protons and neutrons", "electrons and neutrons", "electrons only"], correctIndex: 1, explanation: "Nucleons = protons and neutrons." },
        { prompt: "Thomson found the electron's:", options: ["charge only", "mass only", "charge-to-mass ratio", "isotopes"], correctIndex: 2, explanation: "Thomson measured e/m for the electron." },
        { prompt: "Uranium-235 and uranium-238 are:", options: ["different elements", "isotopes of uranium", "compounds", "ions"], correctIndex: 1, explanation: "Same Z (92), different A — isotopes." },
        { prompt: "The number identifying the element is the:", options: ["mass number", "atomic number", "neutron number", "charge number"], correctIndex: 1, explanation: "The atomic number (protons) identifies the element." },
        { prompt: "An electron is roughly how much lighter than a proton?", options: ["1836 times", "10 times", "2 times", "the same"], correctIndex: 0, explanation: "The electron is about 1/1836 the mass of a proton." },
        { prompt: "In ³⁵₁₇Cl the number of protons is:", options: ["35", "17", "18", "52"], correctIndex: 1, explanation: "Z = 17 protons." },
        { prompt: "In ³⁵₁₇Cl the number of neutrons is:", options: ["17", "18", "35", "52"], correctIndex: 1, explanation: "N = A − Z = 35 − 17 = 18." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "An atom of ¹⁶₈O contains:", options: ["8 protons, 8 neutrons, 8 electrons", "16 protons, 8 neutrons", "8 protons, 16 neutrons", "16 electrons, 8 protons"], correctIndex: 0, answerKey: "Z = 8 gives 8 protons and (neutral) 8 electrons; N = A − Z = 16 − 8 = 8 neutrons.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Define atomic number and mass number, and explain what isotopes are.", answerKey: "Atomic number (Z) is the number of protons in the nucleus, which identifies the element. Mass number (A) is the total number of nucleons (protons + neutrons), A = Z + N. Isotopes are atoms of the same element (same Z) with different numbers of neutrons (different A); they have the same chemical properties but different nuclear properties.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three properties of the electron (charge, mass and location).", answerKey: "The electron has a negative charge of −1.6 ×10⁻¹⁹ C, a very small mass of about 9.11 ×10⁻³¹ kg (roughly 1/1836 of a proton), and is found in energy levels/shells outside the nucleus. (It was discovered from cathode rays by Thomson.)", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Two atoms are isotopes if they have the same number of:", options: ["neutrons but different protons", "protons but different neutrons", "nucleons but different electrons", "electrons and neutrons"], correctIndex: 1, answerKey: "Isotopes have the same number of protons (same Z) but different numbers of neutrons.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the structure of the atom, naming the three sub-atomic particles with their charges and relative masses and their positions, and explain the terms atomic number, mass number and isotope.", answerKey: "An atom has a small, dense, positively charged nucleus at its centre containing protons (charge +1.6 ×10⁻¹⁹ C, relative mass 1) and neutrons (no charge, relative mass 1); together these are the nucleons, bound by the strong nuclear force. Electrons (charge −1.6 ×10⁻¹⁹ C, relative mass about 1/1836) orbit in energy levels/shells outside the nucleus; a neutral atom has equal numbers of protons and electrons. The atomic number Z is the number of protons (identifying the element); the mass number A is the total number of nucleons, A = Z + N. Isotopes are atoms of the same element (same Z) with different numbers of neutrons (different A). Reward the three particles with charges/masses/positions and correct definitions of Z, A and isotope.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 31.6 Binding Energy & 32.6 Fission (https://openstax.org/books/college-physics-2e/pages/32-6-fission)
    {
      slug: "nuclear-reactions-and-uses-of-nuclear-energy",
      title: "Types of Nuclear Reactions and Uses of Nuclear Energy",
      objective:
        "By the end of the topic, learners should be able to classify nuclear reactions (decay, transmutation, fission, fusion), explain that energy comes from mass change (E = mc²), and list the uses of nuclear energy. (MoE Grade 12 Period V, CONTENTS 2 'Types of nuclear reactions and the uses of nuclear energy'.)",
      estimatedMinutes: 100,
      notes: `## Nuclear reactions

- A **nuclear reaction** changes the nucleus of an atom, unlike a chemical reaction which involves only electrons.
- In every nuclear reaction the total **charge (Z)** and total **nucleon number (A)** are conserved.
- Energy is released when the products have slightly **less mass** than the reactants; the "missing" mass is converted to energy by **Einstein's relation E = mc²**.

## Types of nuclear reaction

1. **Radioactive decay** — an unstable nucleus emits a particle (alpha or beta) or gamma radiation, changing into another nucleus.
2. **Transmutation** — bombarding a nucleus with a particle changes it into a different element (e.g. nitrogen struck by an alpha particle forms oxygen).
3. **Nuclear fission** — a heavy nucleus splits into lighter nuclei, releasing energy and neutrons.
4. **Nuclear fusion** — light nuclei join to form a heavier nucleus, releasing large energy (the Sun's energy source).

## Mass, energy and binding energy

- **Mass defect** — the mass of a nucleus is a little less than the total mass of its separate nucleons.
- The energy equivalent of the mass defect is the **binding energy** — the energy needed to split the nucleus into its nucleons.
- Fission of a heavy nucleus (like uranium-235) releases about 200 MeV per event; fusion and radioactive decay release energy for the same reason (mass converted to energy).

## Uses of nuclear energy

- **Electricity generation** in nuclear reactors (controlled fission heats water to drive turbines).
- **Medicine** — radiotherapy to treat cancer, radioactive tracers for diagnosis, sterilising equipment.
- **Industry** — thickness gauges, detecting flaws in metals, powering spacecraft.
- **Research and dating** — carbon-14 dating of once-living material; tracing chemical/biological processes.
- **Weapons** — uncontrolled fission (atomic bomb) and fusion (hydrogen bomb) — a serious hazard.

## Common errors

- **Confusing nuclear and chemical reactions** — nuclear reactions change the nucleus and release far more energy.
- **Forgetting conservation of A and Z** — nucleon number and charge balance on both sides.
- **Thinking mass is unrelated to the energy** — the energy comes from the mass defect via E = mc².`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 31.6 and 32.6).** In a fission event a nucleus and its products lose a mass of 3.0 ×10⁻²⁸ kg, which is converted to energy. (a) Calculate the energy released, using c = 3.0 ×10⁸ m/s. (b) State two peaceful uses of the energy released by controlled fission.

**Part (a) — Mass-energy conversion.**
Step 1 — E = mc².
Step 2 — E = (3.0 ×10⁻²⁸ kg)(3.0 ×10⁸ m/s)² = (3.0 ×10⁻²⁸)(9.0 ×10¹⁶).
Step 3 — E = 2.7 ×10⁻¹¹ J.

**Part (b) — Peaceful uses.** Generating electricity in a nuclear power station (controlled fission heats water to drive turbines); producing medical radioisotopes / powering radiotherapy; other valid answers: desalination, powering spacecraft.

**Answer.** (a) The energy released is 2.7 ×10⁻¹¹ J (per event — small individually but enormous when multiplied over huge numbers of nuclei). (b) Electricity generation and medical/industrial uses are peaceful applications.`,
      quiz: [
        { prompt: "A nuclear reaction changes the:", options: ["electron shells only", "nucleus of the atom", "colour of the atom", "temperature only"], correctIndex: 1, explanation: "Nuclear reactions change the nucleus." },
        { prompt: "The energy released in nuclear reactions comes from a change in:", options: ["colour", "mass (E = mc²)", "volume", "pressure"], correctIndex: 1, explanation: "Lost mass converts to energy via E = mc²." },
        { prompt: "In a nuclear reaction the conserved quantities include:", options: ["charge and nucleon number", "colour and shape", "temperature", "volume"], correctIndex: 0, explanation: "Total charge (Z) and nucleon number (A) are conserved." },
        { prompt: "Splitting a heavy nucleus into lighter ones is:", options: ["fusion", "fission", "decay", "ionisation"], correctIndex: 1, explanation: "Fission = splitting a heavy nucleus." },
        { prompt: "Joining light nuclei into a heavier one is:", options: ["fission", "fusion", "transmutation", "decay"], correctIndex: 1, explanation: "Fusion = joining light nuclei." },
        { prompt: "The Sun's energy comes mainly from:", options: ["burning coal", "nuclear fusion", "fission", "chemical reactions"], correctIndex: 1, explanation: "Fusion of hydrogen powers the Sun." },
        { prompt: "Changing one element into another by bombardment is:", options: ["transmutation", "evaporation", "condensation", "melting"], correctIndex: 0, explanation: "Transmutation changes the element." },
        { prompt: "Einstein's mass-energy relation is:", options: ["E = mc", "E = mc²", "E = m/c²", "E = m²c"], correctIndex: 1, explanation: "E = mc²." },
        { prompt: "The mass of a nucleus compared with its separate nucleons is:", options: ["greater", "slightly less (mass defect)", "the same", "zero"], correctIndex: 1, explanation: "The mass defect: the nucleus is slightly lighter." },
        { prompt: "The energy needed to break a nucleus into its nucleons is the:", options: ["kinetic energy", "binding energy", "activation energy", "potential energy"], correctIndex: 1, explanation: "That is the binding energy." },
        { prompt: "A peaceful use of nuclear energy is:", options: ["atomic bombs", "generating electricity", "hydrogen bombs", "polluting rivers"], correctIndex: 1, explanation: "Reactors generate electricity by controlled fission." },
        { prompt: "Radioactive tracers are used in:", options: ["cooking", "medicine and biology", "painting", "farming soil colour"], correctIndex: 1, explanation: "Tracers help diagnose and study processes." },
        { prompt: "Carbon-14 is used to:", options: ["date once-living material", "make electricity", "cool reactors", "harden steel"], correctIndex: 0, explanation: "Carbon dating uses ¹⁴C." },
        { prompt: "About how much energy does one uranium-235 fission release?", options: ["200 MeV", "2 eV", "200 J", "2 kW·h"], correctIndex: 0, explanation: "Roughly 200 MeV per fission event." },
        { prompt: "Radiotherapy uses nuclear radiation to:", options: ["build bones", "treat cancer", "make food", "cool the body"], correctIndex: 1, explanation: "Radiotherapy treats cancerous tumours." },
        { prompt: "Nuclear reactions release far more energy than chemical reactions because:", options: ["they use bigger atoms", "they convert mass to energy", "they are slower", "they need no fuel"], correctIndex: 1, explanation: "Mass-to-energy conversion gives huge energy." },
        { prompt: "A controlled fission chain reaction takes place in a:", options: ["battery", "nuclear reactor", "transformer", "capacitor"], correctIndex: 1, explanation: "Reactors sustain controlled fission." },
        { prompt: "Which is NOT a use of nuclear energy?", options: ["electricity generation", "medical imaging/tracers", "cancer treatment", "producing sound waves in speakers"], correctIndex: 3, explanation: "Loudspeakers are not a nuclear-energy application." },
        { prompt: "In transmutation, a nucleus of nitrogen struck by an alpha particle can form:", options: ["carbon", "oxygen", "helium", "hydrogen only"], correctIndex: 1, explanation: "This classic reaction forms oxygen (Rutherford)." },
        { prompt: "The main hazard of nuclear reactions is:", options: ["low energy", "harmful radiation and radioactive waste", "no energy release", "cold temperatures"], correctIndex: 1, explanation: "Radiation and waste are the key dangers." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The energy released in a nuclear reaction comes from:", options: ["a change in colour", "a small loss of mass (E = mc²)", "burning fuel chemically", "cooling the nucleus"], correctIndex: 1, answerKey: "The products have slightly less mass than the reactants; this mass defect converts to energy via E = mc².", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Name four types of nuclear reaction.", answerKey: "Radioactive decay (alpha, beta, gamma emission), transmutation (bombarding a nucleus to change the element), nuclear fission (splitting a heavy nucleus), and nuclear fusion (joining light nuclei).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A nuclear process converts 2.0 ×10⁻²⁷ kg of mass into energy. Calculate the energy released (c = 3.0 ×10⁸ m/s).", answerKey: "E = mc² = (2.0 ×10⁻²⁷)(3.0 ×10⁸)² = (2.0 ×10⁻²⁷)(9.0 ×10¹⁶) = 1.8 ×10⁻¹⁰ J.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is a peaceful use of nuclear energy?", options: ["atomic bomb", "hydrogen bomb", "electricity generation in reactors", "none of these"], correctIndex: 2, answerKey: "Controlled fission in nuclear reactors generates electricity — a peaceful use.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what a nuclear reaction is, how energy is released from it (with reference to mass defect and E = mc²), and describe four beneficial uses of nuclear energy.", answerKey: "A nuclear reaction is one that changes the nucleus of an atom (unlike a chemical reaction, which involves only electrons); total charge and nucleon number are conserved. Energy is released because the products have slightly less total mass than the reactants — this 'mass defect' is converted to energy according to Einstein's relation E = mc², which is why nuclear reactions release far more energy than chemical ones (the binding energy is the energy equivalent of the mass defect). Beneficial uses (any four): electricity generation in nuclear reactors by controlled fission; radiotherapy to treat cancer; radioactive tracers for medical diagnosis and studying processes; sterilising medical equipment and food; carbon-14 dating of once-living materials; industrial thickness gauges and flaw detection; powering spacecraft. Reward the definition, the mass-defect/E = mc² explanation and four valid uses.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 31.4 Nuclear Decay and Conservation Laws & 31.5 Half-Life and Activity (https://openstax.org/books/college-physics-2e/pages/31-5-half-life-and-activity)
    {
      slug: "radioactivity",
      title: "Radioactivity: Types, Effects and Half-Life",
      objective:
        "By the end of the topic, learners should be able to describe alpha, beta and gamma radiation and their properties, state the effects of radiation, and use half-life with N = N₀(1/2)^(t/T). (MoE Grade 12 Period V, CONTENTS 3 'Radioactivity: types; radioactive substances and their effects; radioactive decay and half-life'.)",
      estimatedMinutes: 110,
      notes: `## Radioactivity

- **Radioactivity** — the spontaneous emission of radiation from unstable nuclei as they decay to more stable ones.
- It is a **random** and **spontaneous** process, unaffected by temperature, pressure or chemical state.

## Types of radiation

| Radiation | Nature | Charge | Penetrating power | Stopped by |
| --- | --- | --- | --- | --- |
| Alpha (α) | helium nucleus (2p + 2n) | +2 | low (few cm of air) | a sheet of paper |
| Beta (β) | fast electron | −1 | medium | a few mm of aluminium |
| Gamma (γ) | electromagnetic wave | 0 | high | thick lead / concrete |

- **Alpha** is the most strongly ionising but least penetrating; **gamma** is the least ionising but most penetrating.
- In decay, charge and nucleon number are conserved: alpha decay reduces A by 4 and Z by 2; beta decay increases Z by 1 (a neutron becomes a proton plus the emitted electron); gamma emission carries away energy only.

## Effects of radioactive substances

- Radiation **ionises** atoms it passes through; in living tissue this can damage or kill cells, cause burns, radiation sickness, and cancer, or genetic mutations.
- **Safety:** keep sources far away, handle with tongs, limit exposure time, shield with lead, and store in labelled lead containers.
- Radiation is also useful (medicine, sterilisation, dating) when used with proper precautions.

## Radioactive decay and half-life

- **Half-life (T or t½)** — the time for half the radioactive nuclei in a sample to decay.
- After each half-life the number of undecayed nuclei (and the activity) halves: **N = N₀ (1/2)^(t/T)**.
- **Activity** — the number of decays per second, in **becquerel (Bq)**; 1 Bq = 1 decay per second.
- Decay is exponential: the count-rate falls by half each half-life.

\`\`\`svg Exponential decay showing successive half-lives
<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number of nuclei halving after each half-life">
  <line x1="30" y1="115" x2="205" y2="115" stroke="#334155" stroke-width="1.5"/>
  <line x1="30" y1="115" x2="30" y2="15" stroke="#334155" stroke-width="1.5"/>
  <path d="M30 25 C70 25 70 70 110 70 C150 70 150 92 190 92 C200 96 200 100 205 102" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="70" y1="115" x2="70" y2="118" stroke="#334155"/>
  <text x="60" y="130" font-size="9" fill="#334155">1 T</text>
  <line x1="110" y1="115" x2="110" y2="118" stroke="#334155"/>
  <text x="100" y="130" font-size="9" fill="#334155">2 T</text>
  <text x="6" y="28" font-size="9" fill="#334155">N₀</text>
  <text x="4" y="73" font-size="9" fill="#334155">N₀/2</text>
</svg>
\`\`\`

## Common errors

- **Ranking penetration wrong** — alpha is least penetrating, gamma most.
- **Thinking half-life means the sample fully decays in two half-lives** — after 2 half-lives one quarter remains, not zero.
- **Believing decay can be sped up** — half-life is fixed; it is not affected by temperature or pressure.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 31.5).** A radioactive isotope has a half-life of 8.0 days. A sample starts with an activity of 6400 Bq. (a) What is its activity after 24 days? (b) What fraction of the original nuclei remain after 24 days?

**Step 1 — Count the half-lives.** Number of half-lives = t/T = 24 / 8.0 = 3.

**Step 2 — Halve for each half-life.** After 1: 6400/2 = 3200 Bq. After 2: 3200/2 = 1600 Bq. After 3: 1600/2 = 800 Bq.

**Step 3 — Fraction remaining.** Fraction = (1/2)³ = 1/8.

**Answer.** (a) After 24 days (3 half-lives) the activity is 800 Bq. (b) One eighth (1/8) of the original nuclei remain.`,
      quiz: [
        { prompt: "Radioactivity is the spontaneous emission of radiation from:", options: ["stable nuclei", "unstable nuclei", "electrons", "molecules"], correctIndex: 1, explanation: "Unstable nuclei decay, emitting radiation." },
        { prompt: "An alpha particle is a:", options: ["fast electron", "helium nucleus", "photon", "proton only"], correctIndex: 1, explanation: "An alpha particle is a helium nucleus (2 protons, 2 neutrons)." },
        { prompt: "A beta particle is a:", options: ["helium nucleus", "fast-moving electron", "gamma ray", "neutron"], correctIndex: 1, explanation: "Beta radiation is a fast electron." },
        { prompt: "Gamma radiation is:", options: ["a charged particle", "an electromagnetic wave", "a helium nucleus", "an electron"], correctIndex: 1, explanation: "Gamma is high-energy electromagnetic radiation." },
        { prompt: "Which radiation is the most penetrating?", options: ["alpha", "beta", "gamma", "all equal"], correctIndex: 2, explanation: "Gamma penetrates most; alpha least." },
        { prompt: "Which radiation is stopped by a sheet of paper?", options: ["alpha", "beta", "gamma", "none"], correctIndex: 0, explanation: "Alpha is stopped by paper." },
        { prompt: "Beta radiation is typically stopped by:", options: ["paper", "a few mm of aluminium", "air only", "nothing"], correctIndex: 1, explanation: "A few millimetres of aluminium stop beta." },
        { prompt: "Gamma radiation is best absorbed by:", options: ["paper", "aluminium foil", "thick lead or concrete", "water vapour"], correctIndex: 2, explanation: "Thick lead/concrete is needed for gamma." },
        { prompt: "The charge of an alpha particle is:", options: ["+2", "−1", "0", "+1"], correctIndex: 0, explanation: "Alpha is a helium nucleus, charge +2." },
        { prompt: "The half-life of a sample is the time for:", options: ["all nuclei to decay", "half the nuclei to decay", "the mass to double", "the activity to double"], correctIndex: 1, explanation: "Half the nuclei decay in one half-life." },
        { prompt: "After 2 half-lives, the fraction remaining is:", options: ["1/2", "1/4", "1/8", "0"], correctIndex: 1, explanation: "(1/2)² = 1/4 remains." },
        { prompt: "Activity is measured in:", options: ["becquerel (Bq)", "tesla", "ohm", "hertz"], correctIndex: 0, explanation: "Activity is in becquerel (decays per second)." },
        { prompt: "In alpha decay the mass number A:", options: ["increases by 4", "decreases by 4", "stays the same", "decreases by 2"], correctIndex: 1, explanation: "Alpha decay reduces A by 4 (and Z by 2)." },
        { prompt: "Radioactive decay is:", options: ["predictable for a single nucleus", "random and spontaneous", "affected by temperature", "reversible"], correctIndex: 1, explanation: "Decay is random and spontaneous." },
        { prompt: "A sample of 800 Bq has a half-life of 5 years. After 10 years its activity is:", options: ["400 Bq", "200 Bq", "100 Bq", "0 Bq"], correctIndex: 1, explanation: "10 years = 2 half-lives: 800→400→200 Bq." },
        { prompt: "The most strongly ionising radiation is:", options: ["alpha", "beta", "gamma", "all equal"], correctIndex: 0, explanation: "Alpha is most ionising (but least penetrating)." },
        { prompt: "Radiation damages living cells because it:", options: ["cools them", "ionises atoms in the tissue", "adds mass", "makes them magnetic"], correctIndex: 1, explanation: "Ionisation damages cells, causing burns, cancer, mutations." },
        { prompt: "A safety measure when handling radioactive sources is to:", options: ["hold them in bare hands", "use tongs and lead shielding", "warm them up", "keep them close for a long time"], correctIndex: 1, explanation: "Use tongs, shielding and limit exposure time." },
        { prompt: "After 3 half-lives, the fraction of nuclei remaining is:", options: ["1/2", "1/4", "1/8", "1/16"], correctIndex: 2, explanation: "(1/2)³ = 1/8." },
        { prompt: "Half-life can be changed by:", options: ["heating the sample", "increasing pressure", "a chemical reaction", "nothing — it is fixed for an isotope"], correctIndex: 3, explanation: "Half-life is a fixed property, unaffected by external conditions." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Which sequence lists the radiations in order of increasing penetrating power?", options: ["gamma, beta, alpha", "alpha, beta, gamma", "beta, alpha, gamma", "gamma, alpha, beta"], correctIndex: 1, answerKey: "Alpha (least) < beta < gamma (most) penetrating.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the nature and one property (charge or penetration) of alpha, beta and gamma radiation.", answerKey: "Alpha: a helium nucleus, charge +2, least penetrating (stopped by paper), strongly ionising. Beta: a fast electron, charge −1, medium penetration (stopped by a few mm of aluminium). Gamma: an electromagnetic wave, no charge, most penetrating (needs thick lead/concrete), weakly ionising.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "A radioactive source has a half-life of 6 hours and an initial activity of 3200 Bq. Find its activity after 18 hours.", answerKey: "Number of half-lives = 18/6 = 3. Activity halves each time: 3200 → 1600 → 800 → 400 Bq. After 18 hours the activity is 400 Bq (= 3200 × (1/2)³).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The half-life of a radioactive isotope is the time taken for:", options: ["all its nuclei to decay", "half of its nuclei to decay", "its mass to halve by evaporation", "its activity to double"], correctIndex: 1, answerKey: "Half-life is the time for half the radioactive nuclei (and the activity) to decay.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the three types of radioactive emission, compare their penetrating powers, explain the meaning of half-life, and state two precautions for handling radioactive materials.", answerKey: "Alpha radiation is a helium nucleus (charge +2), strongly ionising but least penetrating — stopped by a sheet of paper or a few cm of air. Beta radiation is a fast electron (charge −1), of medium penetration — stopped by a few millimetres of aluminium. Gamma radiation is a high-energy electromagnetic wave (no charge), weakly ionising but most penetrating — needs thick lead or concrete to absorb it. Half-life is the time taken for half of the radioactive nuclei in a sample (and hence its activity) to decay; the activity halves after each half-life (N = N₀(1/2)^(t/T)). Precautions (any two): keep sources far away and handle with tongs, limit the exposure time, shield with lead, wear protective clothing/dosimeters, and store sources in labelled lead containers. Reward the three radiations with penetration order, the half-life definition and two valid precautions.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 32.5 Fusion & 32.6 Fission (https://openstax.org/books/college-physics-2e/pages/32-6-fission)
    {
      slug: "nuclear-fission-and-fusion",
      title: "Nuclear Fission and Fusion",
      objective:
        "By the end of the topic, learners should be able to explain nuclear fission (heavy nucleus splits, chain reaction) and nuclear fusion (light nuclei combine), and compare the two. (MoE Grade 12 Period V, CONTENTS 4 'Nuclear fission and fusion'.)",
      estimatedMinutes: 100,
      notes: `## Nuclear fission

- **Nuclear fission** — the splitting of a heavy nucleus (such as uranium-235) into two lighter nuclei, releasing energy and **two or three neutrons**.
- It is usually started by a slow neutron being absorbed by the heavy nucleus, making it unstable so it splits.
- The energy released (about 200 MeV per fission) comes from the mass defect (E = mc²).

## Chain reaction

- The neutrons released can cause further fissions in nearby nuclei — a **chain reaction**.
- If, on average, more than one neutron from each fission causes a new fission, the reaction is **self-sustaining** (critical).
- In a **nuclear reactor** the chain reaction is **controlled** (control rods absorb surplus neutrons, a moderator slows neutrons); in an **atomic bomb** it is uncontrolled.

\`\`\`svg A fission chain reaction
<svg viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A neutron causing fission, releasing neutrons that cause further fissions">
  <circle cx="40" cy="65" r="10" fill="#fca5a5" stroke="#334155"/>
  <line x1="10" y1="65" x2="28" y2="65" stroke="#2563eb" stroke-width="2"/>
  <polygon points="28,65 20,61 20,69" fill="#2563eb"/>
  <line x1="52" y1="58" x2="110" y2="35" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="52" y1="72" x2="110" y2="95" stroke="#16a34a" stroke-width="1.5"/>
  <circle cx="120" cy="30" r="9" fill="#fca5a5" stroke="#334155"/>
  <circle cx="120" cy="100" r="9" fill="#fca5a5" stroke="#334155"/>
  <line x1="130" y1="26" x2="180" y2="15" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="130" y1="34" x2="180" y2="48" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="130" y1="96" x2="180" y2="82" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="130" y1="104" x2="180" y2="118" stroke="#16a34a" stroke-width="1.5"/>
  <circle cx="192" cy="12" r="7" fill="#fca5a5" stroke="#334155"/>
  <circle cx="192" cy="50" r="7" fill="#fca5a5" stroke="#334155"/>
  <circle cx="192" cy="80" r="7" fill="#fca5a5" stroke="#334155"/>
  <circle cx="192" cy="120" r="7" fill="#fca5a5" stroke="#334155"/>
</svg>
\`\`\`

## Nuclear fusion

- **Nuclear fusion** — the joining of two light nuclei (such as hydrogen isotopes) to form a heavier nucleus, releasing even more energy per unit mass than fission.
- Fusion needs **extremely high temperatures and pressures** (millions of degrees) so that nuclei move fast enough to overcome their electrostatic repulsion.
- Fusion powers the **Sun and stars** (hydrogen fusing into helium) and the hydrogen bomb; controlled fusion for power is still being developed.

## Comparison

| Feature | Fission | Fusion |
| --- | --- | --- |
| Process | heavy nucleus splits | light nuclei combine |
| Fuel | uranium, plutonium | hydrogen isotopes |
| Conditions | slow neutron | very high temperature/pressure |
| Occurs in | reactors, atomic bombs | stars, hydrogen bombs |
| Waste | radioactive waste | little radioactive waste |

## Common errors

- **Swapping the definitions** — fission splits heavy nuclei; fusion joins light nuclei.
- **Thinking fusion is easy on Earth** — it needs enormous temperatures and is hard to control.
- **Forgetting fission releases neutrons** — these sustain the chain reaction.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 32.5-32.6).** (a) Explain why a chain reaction can occur in fission but not in a single fusion event. (b) State two differences between nuclear fission and nuclear fusion.

**Part (a) — Chain reaction.** In fission, each splitting nucleus releases two or three neutrons. These neutrons can be absorbed by other heavy nuclei, causing them to fission and release still more neutrons. If on average more than one neutron per fission causes a further fission, the process becomes self-sustaining — a chain reaction. Fusion releases no neutrons that trigger further identical fusions in the same way, and it requires extreme temperature/pressure to occur at all, so it does not chain in that manner.

**Part (b) — Differences.** (1) Fission splits a heavy nucleus, while fusion joins light nuclei. (2) Fission is triggered by a neutron at ordinary conditions (in a reactor), whereas fusion needs extremely high temperatures and pressures. (Also acceptable: fusion releases more energy per unit mass and produces little radioactive waste.)

**Answer.** (a) Fission's emitted neutrons trigger further fissions, giving a self-sustaining chain reaction; fusion does not. (b) Fission = splitting heavy nuclei by neutrons; fusion = joining light nuclei at very high temperature/pressure.`,
      quiz: [
        { prompt: "Nuclear fission is the:", options: ["joining of light nuclei", "splitting of a heavy nucleus", "emission of an electron", "heating of a nucleus"], correctIndex: 1, explanation: "Fission splits a heavy nucleus." },
        { prompt: "Nuclear fusion is the:", options: ["splitting of a heavy nucleus", "joining of light nuclei", "loss of a neutron", "ionisation of atoms"], correctIndex: 1, explanation: "Fusion joins light nuclei." },
        { prompt: "A common fuel for fission is:", options: ["hydrogen", "uranium-235", "helium", "carbon"], correctIndex: 1, explanation: "Uranium-235 is a fission fuel." },
        { prompt: "Fission of a uranium nucleus is usually started by a:", options: ["proton", "slow neutron", "gamma ray", "electron"], correctIndex: 1, explanation: "A slow neutron is absorbed, making the nucleus split." },
        { prompt: "Each fission releases how many neutrons (typically)?", options: ["none", "two or three", "a hundred", "exactly one"], correctIndex: 1, explanation: "Two or three neutrons are released per fission." },
        { prompt: "A chain reaction occurs when neutrons:", options: ["are all absorbed by control rods", "cause further fissions", "escape completely", "turn into protons"], correctIndex: 1, explanation: "Released neutrons trigger more fissions." },
        { prompt: "In a nuclear reactor the chain reaction is:", options: ["uncontrolled", "controlled", "impossible", "reversed"], correctIndex: 1, explanation: "Reactors control the chain reaction." },
        { prompt: "Control rods in a reactor:", options: ["speed up neutrons", "absorb surplus neutrons", "produce fuel", "cool the turbine"], correctIndex: 1, explanation: "Control rods absorb neutrons to control the rate." },
        { prompt: "Fusion powers the:", options: ["Sun and stars", "car engine", "electric kettle", "battery"], correctIndex: 0, explanation: "Fusion of hydrogen powers stars." },
        { prompt: "Fusion requires:", options: ["low temperature", "very high temperature and pressure", "a magnet", "a slow neutron"], correctIndex: 1, explanation: "Extreme temperature/pressure overcomes repulsion." },
        { prompt: "In the Sun, hydrogen nuclei fuse to form:", options: ["uranium", "helium", "carbon", "iron"], correctIndex: 1, explanation: "Hydrogen fuses into helium." },
        { prompt: "An uncontrolled fission chain reaction occurs in a(n):", options: ["nuclear reactor", "atomic bomb", "solar cell", "transformer"], correctIndex: 1, explanation: "Atomic bombs use uncontrolled fission." },
        { prompt: "Compared with fission, fusion produces:", options: ["more radioactive waste", "little radioactive waste", "no energy", "the same waste"], correctIndex: 1, explanation: "Fusion produces little radioactive waste." },
        { prompt: "The energy released in fission comes from:", options: ["chemical bonds", "mass defect (E = mc²)", "friction", "electric charge"], correctIndex: 1, explanation: "Mass converts to energy via E = mc²." },
        { prompt: "A self-sustaining reaction needs, on average, per fission:", options: ["no neutrons", "more than one neutron to cause a new fission", "only gamma rays", "zero energy"], correctIndex: 1, explanation: "More than one neutron per fission sustains the reaction." },
        { prompt: "Fusion joins nuclei that are:", options: ["heavy", "light", "charged neutral", "radioactive only"], correctIndex: 1, explanation: "Fusion combines light nuclei." },
        { prompt: "Which releases more energy per unit mass of fuel?", options: ["fission", "fusion", "they are equal", "neither releases energy"], correctIndex: 1, explanation: "Fusion releases more energy per unit mass." },
        { prompt: "A moderator in a reactor is used to:", options: ["absorb all neutrons", "slow the neutrons down", "speed up the turbine", "add fuel"], correctIndex: 1, explanation: "Moderators slow neutrons so they can cause fission." },
        { prompt: "In fusion, the repulsion that must be overcome is between:", options: ["neutrons", "the positive nuclei", "electrons", "photons"], correctIndex: 1, explanation: "Positively charged nuclei repel electrostatically." },
        { prompt: "Which pair correctly matches process to location?", options: ["fission — the Sun", "fusion — nuclear reactor", "fission — nuclear reactor", "fusion — atomic bomb only"], correctIndex: 2, explanation: "Fission occurs in reactors; fusion occurs in stars." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Nuclear fusion is the process in which:", options: ["a heavy nucleus splits into two", "light nuclei join to form a heavier nucleus", "a nucleus emits an electron", "an atom loses an electron"], correctIndex: 1, answerKey: "Fusion joins light nuclei to form a heavier nucleus, releasing energy.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain how a fission chain reaction is set up and sustained.", answerKey: "A slow neutron is absorbed by a heavy nucleus (e.g. uranium-235), making it split (fission) and release energy plus two or three neutrons. These neutrons are absorbed by other heavy nuclei, causing them to fission and release more neutrons. If on average more than one neutron per fission goes on to cause a new fission, the process becomes self-sustaining — a chain reaction.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two differences between nuclear fission and nuclear fusion.", answerKey: "Any two: (1) Fission splits a heavy nucleus, whereas fusion joins light nuclei. (2) Fission is triggered by a neutron under ordinary conditions, whereas fusion needs extremely high temperature and pressure. (3) Fission fuel is uranium/plutonium, fusion fuel is hydrogen isotopes. (4) Fission produces more radioactive waste; fusion produces little. (5) Fission occurs in reactors/atomic bombs; fusion occurs in stars/hydrogen bombs.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "In a nuclear reactor, control rods are used to:", options: ["speed up the reaction", "absorb surplus neutrons and control the reaction", "produce more fuel", "cool the building"], correctIndex: 1, answerKey: "Control rods absorb surplus neutrons to keep the chain reaction controlled.", marks: 2 },
        { type: "ESSAY", prompt: "Compare nuclear fission and nuclear fusion. In your answer describe each process, the conditions each requires, where each occurs, and the source of the energy released.", answerKey: "Nuclear fission is the splitting of a heavy nucleus (such as uranium-235) into two lighter nuclei when it absorbs a slow neutron, releasing energy and two or three neutrons; those neutrons can cause a chain reaction. It occurs (controlled) in nuclear reactors and (uncontrolled) in atomic bombs, and needs a neutron under ordinary conditions plus enough fissionable material (criticality). Nuclear fusion is the joining of two light nuclei (such as hydrogen isotopes) to form a heavier nucleus (helium), releasing even more energy per unit mass. Fusion requires extremely high temperatures and pressures so nuclei can overcome their electrostatic repulsion; it occurs in the Sun and stars and in the hydrogen bomb, and controlled fusion for power is still being developed. In both, the energy comes from the small loss of mass (mass defect) converted to energy by E = mc². Reward correct descriptions of both processes, their conditions, locations and the mass-energy source.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 29.2 The Photoelectric Effect & 30.2 Discovery of the Parts of the Atom (https://openstax.org/books/college-physics-2e/pages/29-2-the-photoelectric-effect)
    {
      slug: "thermionic-and-photoelectric-emission",
      title: "Thermionic and Photoelectric Emissions: Cathode Rays and X-rays",
      objective:
        "By the end of the topic, learners should be able to explain thermionic and photoelectric emission (with Einstein's equation KE_max = hf − W), and describe cathode rays and X-rays. (MoE Grade 12 Period V, CONTENTS 5 'Thermionic and Photoelectric emissions: cathode rays; X-rays'.)",
      estimatedMinutes: 100,
      notes: `## Thermionic emission and cathode rays

- **Thermionic emission** — the release of electrons from a hot metal surface; heating gives some electrons enough energy to escape the metal.
- Used in the electron gun of the old cathode-ray tube (CRT) and X-ray tubes: a heated filament (cathode) "boils off" electrons.
- **Cathode rays** — beams of these fast-moving electrons; they travel in straight lines, are deflected by electric and magnetic fields (showing negative charge), and cause fluorescence on a screen.

## Photoelectric emission

- **Photoelectric effect** — the emission of electrons from a metal surface when light of high enough frequency shines on it.
- Light behaves as **photons**, each of energy **E = hf** (h = Planck's constant, f = frequency).
- **Work function (W)** — the minimum energy needed to remove an electron from the metal; related to the **threshold frequency f₀** by W = h f₀.
- Below the threshold frequency **no electrons are emitted**, however bright the light; above it, brighter light emits **more** electrons.
- **Einstein's photoelectric equation:** **KE_max = hf − W**, the maximum kinetic energy of the emitted electrons.

## X-rays

- **X-rays** — high-frequency (short-wavelength) electromagnetic waves produced when fast-moving electrons strike a metal target (anode) and are suddenly stopped; their kinetic energy is converted to X-ray photons (and heat).
- Properties: they travel in straight lines at the speed of light, are not deflected by electric/magnetic fields (no charge), penetrate soft tissue, cause fluorescence, and affect photographic film.
- Uses: medical imaging (bones), treating cancer, security scanning, studying crystal structure.

## Common errors

- **Confusing thermionic and photoelectric emission** — thermionic uses heat; photoelectric uses light.
- **Thinking brighter light always emits electrons** — below the threshold frequency, no emission occurs regardless of brightness.
- **Saying X-rays are charged particles** — X-rays are electromagnetic waves (uncharged).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 29.2).** Violet light of frequency 7.14 ×10¹⁴ Hz shines on a calcium surface whose work function is W = 4.34 ×10⁻¹⁹ J. Take h = 6.63 ×10⁻³⁴ J·s. Find the maximum kinetic energy of the emitted electrons.

**Step 1 — Photon energy.** E = hf = (6.63 ×10⁻³⁴)(7.14 ×10¹⁴) = 4.73 ×10⁻¹⁹ J.

**Step 2 — Einstein's equation.** KE_max = hf − W = 4.73 ×10⁻¹⁹ − 4.34 ×10⁻¹⁹.

**Step 3 — Subtract.** KE_max = 0.39 ×10⁻¹⁹ J = 3.9 ×10⁻²⁰ J.

**Answer.** The maximum kinetic energy of the ejected electrons is about 3.9 ×10⁻²⁰ J (≈ 0.25 eV). Because the photon energy exceeds the work function, electrons are emitted; if it were below W, none would be emitted.`,
      quiz: [
        { prompt: "Thermionic emission is the release of electrons from a metal by:", options: ["light", "heat", "sound", "magnetism"], correctIndex: 1, explanation: "Heating the metal releases electrons." },
        { prompt: "Cathode rays are beams of:", options: ["protons", "electrons", "photons", "neutrons"], correctIndex: 1, explanation: "Cathode rays are fast-moving electrons." },
        { prompt: "Cathode rays are deflected by:", options: ["gravity only", "electric and magnetic fields", "sound", "nothing"], correctIndex: 1, explanation: "Being charged, they deflect in electric/magnetic fields." },
        { prompt: "The photoelectric effect is the emission of electrons from a metal by:", options: ["heat", "light of high enough frequency", "sound", "pressure"], correctIndex: 1, explanation: "Suitable light ejects electrons (photoelectric effect)." },
        { prompt: "The energy of a photon is:", options: ["E = h/f", "E = hf", "E = f/h", "E = hc"], correctIndex: 1, explanation: "E = hf, with h Planck's constant." },
        { prompt: "The minimum energy to remove an electron from a metal is the:", options: ["kinetic energy", "work function", "binding energy of the nucleus", "threshold current"], correctIndex: 1, explanation: "That is the work function W." },
        { prompt: "Below the threshold frequency, the number of electrons emitted is:", options: ["large", "zero", "maximum", "unchanged"], correctIndex: 1, explanation: "No emission below f₀, however bright the light." },
        { prompt: "Einstein's photoelectric equation is:", options: ["KE_max = hf + W", "KE_max = hf − W", "KE_max = W − hf", "KE_max = hf × W"], correctIndex: 1, explanation: "KE_max = hf − W." },
        { prompt: "Above the threshold, brighter light causes:", options: ["faster electrons", "more electrons", "fewer electrons", "no change"], correctIndex: 1, explanation: "Brightness increases the number of electrons, not their maximum KE." },
        { prompt: "The work function relates to threshold frequency by:", options: ["W = hf₀", "W = f₀/h", "W = h/f₀", "W = hf₀²"], correctIndex: 0, explanation: "W = h f₀." },
        { prompt: "X-rays are produced when fast electrons:", options: ["are heated", "strike a metal target and stop suddenly", "pass through glass", "join nuclei"], correctIndex: 1, explanation: "Sudden stopping of electrons at the anode makes X-rays." },
        { prompt: "X-rays are:", options: ["charged particles", "electromagnetic waves", "sound waves", "electrons"], correctIndex: 1, explanation: "X-rays are high-frequency EM waves (uncharged)." },
        { prompt: "X-rays are NOT deflected by magnetic fields because they:", options: ["are too fast", "carry no charge", "are very heavy", "are electrons"], correctIndex: 1, explanation: "Being uncharged, they are undeflected." },
        { prompt: "A use of X-rays is:", options: ["cooking food", "medical imaging of bones", "charging batteries", "producing sound"], correctIndex: 1, explanation: "X-rays image bones and are used in medicine." },
        { prompt: "In a cathode-ray tube, electrons are produced by:", options: ["photoelectric emission", "thermionic emission from a hot filament", "fission", "fusion"], correctIndex: 1, explanation: "A heated filament emits electrons thermionically." },
        { prompt: "Increasing the frequency of the light (above threshold) increases the electrons':", options: ["number only", "maximum kinetic energy", "charge", "mass"], correctIndex: 1, explanation: "Higher f gives more energetic photons, so higher KE_max." },
        { prompt: "If hf < W then:", options: ["electrons are emitted", "no electrons are emitted", "the metal melts", "X-rays form"], correctIndex: 1, explanation: "Photon energy below the work function emits no electrons." },
        { prompt: "Cathode rays travel in:", options: ["curved paths always", "straight lines (in the absence of fields)", "circles", "random paths"], correctIndex: 1, explanation: "They travel in straight lines unless deflected." },
        { prompt: "The particle nature of light needed to explain the photoelectric effect is the:", options: ["electron", "photon", "neutron", "proton"], correctIndex: 1, explanation: "Light acts as photons of energy hf." },
        { prompt: "X-rays affect photographic film and cause:", options: ["cooling", "fluorescence", "magnetism", "sound"], correctIndex: 1, explanation: "X-rays cause fluorescence and expose film." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "The photoelectric effect provides evidence that light behaves as:", options: ["a continuous wave only", "photons (particles) of energy hf", "sound", "a magnetic field"], correctIndex: 1, answerKey: "Light delivers energy in discrete photons of energy E = hf, explaining the threshold and instantaneous emission.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between thermionic emission and photoelectric emission.", answerKey: "Thermionic emission is the release of electrons from a metal surface when it is heated (heat gives electrons enough energy to escape). Photoelectric emission is the release of electrons from a metal surface when light of a high enough frequency (above the threshold) shines on it. One is caused by heat, the other by light.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Light of photon energy 5.0 ×10⁻¹⁹ J falls on a metal of work function 3.0 ×10⁻¹⁹ J. Find the maximum kinetic energy of the emitted electrons.", answerKey: "KE_max = hf − W = 5.0 ×10⁻¹⁹ − 3.0 ×10⁻¹⁹ = 2.0 ×10⁻¹⁹ J.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "X-rays are produced when:", options: ["a metal is heated", "fast electrons strike a metal target and stop suddenly", "light shines on a metal", "a nucleus splits"], correctIndex: 1, answerKey: "X-rays are emitted when high-speed electrons are suddenly decelerated on hitting a metal anode.", marks: 2 },
        { type: "ESSAY", prompt: "State Einstein's photoelectric equation and explain the terms in it, describe what is meant by the threshold frequency, and explain why increasing the brightness of light below the threshold frequency still produces no photoelectrons.", answerKey: "Einstein's photoelectric equation is KE_max = hf − W, where hf is the energy of each incident photon (h = Planck's constant, f = frequency), W is the work function (the minimum energy needed to release an electron from the metal), and KE_max is the maximum kinetic energy of the emitted electrons. The threshold frequency f₀ is the minimum frequency for which electrons are just emitted, given by W = hf₀; below it hf < W. Because each electron is ejected by a single photon giving up all its energy at once, if the photon energy hf is less than the work function W (i.e. below the threshold frequency), no single photon has enough energy to free an electron; increasing the brightness only increases the number of such low-energy photons, not the energy of each, so still no electrons are emitted. Reward the equation with all terms defined, the threshold-frequency definition and the correct one-photon-one-electron explanation.", marks: 8 },
      ],
    },
  ],
};
