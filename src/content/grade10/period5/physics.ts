import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester Two, Period V: Electrostatics. Topics follow the syllabus
// CONTENTS item by item: 1. concept of electric charge; 2. basic law of
// electrostatics; 3. Coulomb's law; 4. electric fields and potential
// difference; 5. electric field intensity (strength); 6. capacitors and
// capacitance; 7. network of capacitors (series, parallel, series-parallel).
export const physicsG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Electrostatics",
  summary:
    "Period V of the MoE Grade 10 Physics syllabus. Learners study static electricity: the two kinds of charge and conservation of charge, the basic law of electrostatics and charging by friction, conduction and induction, Coulomb's law, electric fields and potential difference, electric field intensity, and capacitors and their networks in series and parallel.",
  topics: [
    // source: OpenStax — College Physics 2e, 18.1 Static Electricity and Charge: Conservation of Charge (https://openstax.org/books/college-physics-2e/pages/18-1-static-electricity-and-charge-conservation-of-charge)
    {
      slug: "concept-of-electric-charge",
      title: "The Concept of Electric Charge",
      objective:
        "By the end of the topic, learners should be able to describe electric charge, identify the two kinds of charge, state the law of conservation of charge, and use the coulomb and the elementary charge. (MoE Grade 10 Period V, CONTENTS 1 'Concept of electric charge'.)",
      estimatedMinutes: 90,
      notes: `## Electric charge

- **Electric charge** — a fundamental physical property of matter that causes it to experience a force in an electric field.
- Charge is carried by the sub-atomic particles: **protons** (positive) and **electrons** (negative).
- A neutral atom has equal numbers of protons and electrons.
- **Static electricity** — electric charge at rest on the surface of a body.

## Two kinds of charge

- There are only two kinds of charge: **positive (+)** and **negative (−)**.
- An object becomes **negatively** charged if it gains electrons, **positively** charged if it loses electrons.
- Rubbing glass with silk leaves the glass positive and the silk negative.

## The elementary charge and the coulomb

- SI unit of charge: the **coulomb (C)**.
- The smallest observed charge is the **elementary charge**: |e| = 1.60 × 10⁻¹⁹ C — the charge of one proton or electron.
- All charges are whole-number multiples of e (charge is **quantised**).
- 1 coulomb ≈ 6.25 × 10¹⁸ elementary charges.

## Conservation of charge

- **Law of conservation of charge** — the total electric charge in an isolated system is constant; charge is neither created nor destroyed, only transferred.
- Charging by rubbing does not create charge — electrons move from one body to the other.

## Common errors

- **Thinking protons move in charging** — normally only electrons transfer; the object gains or loses electrons.
- **Saying charge is created by rubbing** — it is only separated/transferred.
- **Confusing charge with mass** — charge is a separate property; its unit is the coulomb.`,
      workedExample: `**Problem.** A plastic rod gains a charge of −3.2 × 10⁻¹⁹ C after being rubbed. (a) How many extra electrons has it gained? (b) State whether charge was created. (Elementary charge e = 1.60 × 10⁻¹⁹ C.)

**Step 1 — Relationship.** Total charge Q = n × e, where n is the number of extra electrons.

**Step 2 — Rearrange.** n = Q / e = (3.2 × 10⁻¹⁹) / (1.60 × 10⁻¹⁹).

**Step 3 — Evaluate.** n = 2.

**Answer.** (a) The rod gained 2 extra electrons. (b) No charge was created: the 2 electrons came from the cloth used to rub it, so the cloth is left with an equal +2e charge — total charge is conserved.`,
      quiz: [
        { prompt: "The two kinds of electric charge are:", options: ["north and south", "positive and negative", "strong and weak", "up and down"], correctIndex: 1, explanation: "Charge is either positive or negative." },
        { prompt: "A positively charged particle in the atom is the:", options: ["electron", "proton", "neutron", "photon"], correctIndex: 1, explanation: "The proton carries positive charge." },
        { prompt: "An object becomes negatively charged when it:", options: ["gains electrons", "loses electrons", "gains protons", "loses neutrons"], correctIndex: 0, explanation: "Extra electrons give a negative charge." },
        { prompt: "The SI unit of charge is the:", options: ["volt", "coulomb", "ampere", "farad"], correctIndex: 1, explanation: "Charge is measured in coulombs (C)." },
        { prompt: "The elementary charge is about:", options: ["1.6 × 10⁻¹⁹ C", "9.0 × 10⁹ C", "6.25 × 10¹⁸ C", "1.6 × 10¹⁹ C"], correctIndex: 0, explanation: "e = 1.60 × 10⁻¹⁹ C." },
        { prompt: "Static electricity is electric charge that is:", options: ["moving in a wire", "at rest on a surface", "inside a battery", "a magnetic field"], correctIndex: 1, explanation: "Static electricity is charge at rest." },
        { prompt: "The law of conservation of charge says total charge is:", options: ["always increasing", "constant in an isolated system", "always zero", "created by rubbing"], correctIndex: 1, explanation: "Charge is conserved; only transferred, not created or destroyed." },
        { prompt: "Rubbing glass with silk makes the glass:", options: ["negative", "positive", "neutral", "magnetic"], correctIndex: 1, explanation: "Glass loses electrons to the silk, becoming positive." },
        { prompt: "A neutral atom has:", options: ["more protons than electrons", "equal protons and electrons", "only electrons", "only neutrons"], correctIndex: 1, explanation: "Equal positive and negative charges make it neutral." },
        { prompt: "Charge is quantised means it comes in:", options: ["any value", "whole-number multiples of e", "only large amounts", "negative values only"], correctIndex: 1, explanation: "Charges are integer multiples of the elementary charge." },
        { prompt: "1 coulomb is about how many elementary charges?", options: ["6.25 × 10¹⁸", "1.6 × 10⁻¹⁹", "9 × 10⁹", "100"], correctIndex: 0, explanation: "1 C ≈ 6.25 × 10¹⁸ electrons or protons." },
        { prompt: "When a body is charged by rubbing, the particles that move are:", options: ["protons", "electrons", "neutrons", "atoms"], correctIndex: 1, explanation: "Electrons transfer; protons stay in the nucleus." },
        { prompt: "A charge of −1.6 × 10⁻¹⁹ C corresponds to:", options: ["1 extra electron", "2 extra electrons", "1 proton", "10 electrons"], correctIndex: 0, explanation: "That is exactly one elementary charge of electrons." },
        { prompt: "Charge cannot be:", options: ["transferred", "separated", "created or destroyed", "measured"], correctIndex: 2, explanation: "Charge is conserved — not created or destroyed." },
        { prompt: "The particle with negative charge is the:", options: ["proton", "electron", "neutron", "nucleus"], correctIndex: 1, explanation: "Electrons carry the negative charge." },
        { prompt: "If a body loses electrons it becomes:", options: ["negative", "positive", "neutral", "magnetic"], correctIndex: 1, explanation: "Losing electrons leaves a net positive charge." },
        { prompt: "The neutron has a charge that is:", options: ["positive", "negative", "zero", "elementary"], correctIndex: 2, explanation: "The neutron is electrically neutral." },
        { prompt: "In rubbing silk on glass, the silk becomes negative because it:", options: ["loses electrons", "gains electrons", "gains protons", "loses protons"], correctIndex: 1, explanation: "The silk gains the electrons lost by the glass." },
        { prompt: "A charge of 4.8 × 10⁻¹⁹ C is made of how many elementary charges?", options: ["2", "3", "4", "8"], correctIndex: 1, explanation: "4.8 / 1.6 = 3 elementary charges." },
        { prompt: "Two objects charged by rubbing carry charges that are:", options: ["both positive", "both negative", "equal and opposite", "unequal in size"], correctIndex: 2, explanation: "Transferred electrons make equal and opposite charges (conservation)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the two kinds of electric charge and state which sub-atomic particle carries each.", answerKey: "Positive charge — carried by the proton; negative charge — carried by the electron. (Neutron is neutral.)", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A body that has gained electrons is:", options: ["positively charged", "negatively charged", "neutral", "a conductor"], correctIndex: 1, answerKey: "Extra electrons give a net negative charge.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the law of conservation of charge and explain what happens to charge when a glass rod is rubbed with silk.", answerKey: "Total charge in an isolated system is constant; charge is neither created nor destroyed, only transferred. Rubbing transfers electrons from the glass to the silk, leaving the glass positive and the silk equally negative; total charge is unchanged.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The elementary charge e is approximately:", options: ["1.6 × 10⁻¹⁹ C", "9 × 10⁹ C", "6.25 × 10¹⁸ C", "8.85 × 10⁻¹² C"], correctIndex: 0, answerKey: "e = 1.60 × 10⁻¹⁹ C.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what electric charge is, describe the structure of a neutral atom, and use the idea of electron transfer to explain how objects become positively or negatively charged.", answerKey: "Charge is a property of matter causing electrical forces; carried by protons (+) and electrons (−). A neutral atom has equal protons and electrons, giving zero net charge. Charging: electrons (not protons) transfer between bodies. A body that loses electrons becomes positive; a body that gains them becomes negative. Charge is conserved and quantised (multiples of e = 1.6×10⁻¹⁹ C). Reward correct particle roles, neutrality, electron-transfer mechanism and conservation.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 18.2 Conductors and Insulators (https://openstax.org/books/college-physics-2e/pages/18-2-conductors-and-insulators)
    {
      slug: "basic-law-of-electrostatics",
      title: "Basic Law of Electrostatics: Conductors, Insulators and Charging",
      objective:
        "By the end of the topic, learners should be able to state the basic law of electric charges, distinguish conductors from insulators, and describe charging by friction, conduction and induction. (MoE Grade 10 Period V, CONTENTS 2 'Basic law of Electrostatics'.)",
      estimatedMinutes: 100,
      notes: `## The basic law of electrostatics

- **Basic law of electric charges** — like charges repel and unlike charges attract.
- Two positive charges (or two negative) push apart; a positive and a negative pull together.
- The force acts along the line joining the charges.

\`\`\`svg Like charges repel; unlike charges attract
<svg viewBox="0 0 340 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of repulsion between like charges and attraction between unlike charges">
  <circle cx="40" cy="40" r="14" fill="#fecaca" stroke="#991b1b"/><text x="40" y="45" font-size="14" text-anchor="middle" fill="#991b1b">+</text>
  <circle cx="120" cy="40" r="14" fill="#fecaca" stroke="#991b1b"/><text x="120" y="45" font-size="14" text-anchor="middle" fill="#991b1b">+</text>
  <line x1="58" y1="40" x2="86" y2="40" stroke="#334155"/><polygon points="58,40 66,36 66,44" fill="#334155"/><polygon points="102,40 94,36 94,44" fill="#334155"/>
  <text x="80" y="72" font-size="10" text-anchor="middle" fill="#334155">repel</text>
  <circle cx="230" cy="40" r="14" fill="#fecaca" stroke="#991b1b"/><text x="230" y="45" font-size="14" text-anchor="middle" fill="#991b1b">+</text>
  <circle cx="310" cy="40" r="14" fill="#bfdbfe" stroke="#1e40af"/><text x="310" y="45" font-size="14" text-anchor="middle" fill="#1e40af">−</text>
  <line x1="252" y1="40" x2="288" y2="40" stroke="#334155"/><polygon points="288,40 280,36 280,44" fill="#334155"/><polygon points="252,40 260,36 260,44" fill="#334155"/>
  <text x="270" y="72" font-size="10" text-anchor="middle" fill="#334155">attract</text>
</svg>
\`\`\`

## Conductors and insulators

- **Conductor** — a material through which charge (electrons) can move freely. Examples: metals, graphite, salty water, the human body.
- **Insulator** — a material through which charge cannot move easily; electrons are bound. Examples: glass, plastic, rubber, dry wood, pure water.
- Free electrons in a conductor move about 10²³ times more easily than in an insulator.

## Methods of charging

1. **Charging by friction (rubbing)** — two different insulators are rubbed; electrons transfer from one to the other (glass + silk, plastic comb + hair). They gain equal and opposite charges.
2. **Charging by conduction (contact)** — a charged object touches a neutral conductor; charge spreads across both, giving the neutral object the **same** sign of charge.
3. **Charging by induction** — a charged object is brought **near** (not touching) a conductor; it pushes like charges away and pulls unlike charges near, separating charge. With **grounding**, electrons flow to or from the earth, leaving the object with the **opposite** sign to the charging object.

## Common errors

- **Thinking charging by contact gives opposite charge** — contact gives the *same* sign; induction (with earthing) gives the *opposite* sign.
- **Calling all metals insulators** — metals are conductors.
- **Forgetting the force acts along the line joining the charges.**`,
      workedExample: `**Problem.** A negatively charged rod is brought close to (but does not touch) one end of an insulated metal sphere, which is then briefly earthed and the earth connection removed before the rod is taken away. What charge does the sphere end up with, and why?

**Step 1 — The rod repels electrons.** The negative rod repels the free electrons in the metal, pushing them to the far side of the sphere; the near side becomes positive.

**Step 2 — Earthing.** Connecting the far side to earth lets the repelled electrons flow away into the ground.

**Step 3 — Remove the earth, then the rod.** With the earth wire removed the sphere is left short of electrons; removing the rod lets the remaining positive charge spread over the sphere.

**Answer.** The sphere becomes **positively** charged — the opposite sign to the charging rod. This is charging by induction: no charge passed from the rod, and total charge is conserved (the electrons went to earth).`,
      quiz: [
        { prompt: "The basic law of electrostatics: like charges ___ and unlike charges ___.", options: ["attract; repel", "repel; attract", "attract; attract", "repel; repel"], correctIndex: 1, explanation: "Like charges repel; unlike charges attract." },
        { prompt: "Two negative charges placed near each other will:", options: ["attract", "repel", "do nothing", "combine"], correctIndex: 1, explanation: "Like charges repel." },
        { prompt: "A conductor is a material that lets charge:", options: ["never move", "move freely", "become mass", "disappear"], correctIndex: 1, explanation: "Charge moves freely through a conductor." },
        { prompt: "Which is an insulator?", options: ["copper", "salty water", "glass", "iron"], correctIndex: 2, explanation: "Glass is an insulator; the others are conductors." },
        { prompt: "Which is a conductor?", options: ["rubber", "plastic", "metal", "dry wood"], correctIndex: 2, explanation: "Metals are good conductors." },
        { prompt: "Charging by rubbing two insulators is called charging by:", options: ["induction", "friction", "conduction", "earthing"], correctIndex: 1, explanation: "Rubbing transfers electrons — charging by friction." },
        { prompt: "Charging by contact (conduction) gives the neutral object a charge of:", options: ["the opposite sign", "the same sign", "zero", "double size"], correctIndex: 1, explanation: "Contact spreads charge, giving the same sign." },
        { prompt: "Charging by induction is done by bringing a charged body:", options: ["into contact", "near but not touching", "far away", "into water"], correctIndex: 1, explanation: "Induction happens without contact, by bringing the charge near." },
        { prompt: "In a conductor, the particles that move are:", options: ["protons", "free electrons", "neutrons", "nuclei"], correctIndex: 1, explanation: "Free electrons carry charge through a conductor." },
        { prompt: "A charged object attracts a neutral one because it:", options: ["repels all charges", "induces opposite charge on the near side", "creates protons", "becomes an insulator"], correctIndex: 1, explanation: "Induction pulls unlike charge to the near side, causing attraction." },
        { prompt: "Charging a conductor by induction with earthing gives it a charge:", options: ["the same as the rod", "opposite to the rod", "zero", "magnetic"], correctIndex: 1, explanation: "Earthing removes like charge, leaving the opposite sign." },
        { prompt: "The force between two charges acts:", options: ["perpendicular to the line joining them", "along the line joining them", "in a circle", "downward only"], correctIndex: 1, explanation: "Electrostatic force is along the line joining the charges." },
        { prompt: "Pure water is a:", options: ["good conductor", "poor conductor (insulator)", "metal", "semiconductor of protons"], correctIndex: 1, explanation: "Pure water is a poor conductor; salty water conducts." },
        { prompt: "Rubbing a plastic comb through hair charges it by:", options: ["conduction", "friction", "induction", "earthing"], correctIndex: 1, explanation: "Friction transfers electrons between comb and hair." },
        { prompt: "Grounding (earthing) a conductor lets charge:", options: ["stay fixed", "flow to or from the earth", "become mass", "turn positive only"], correctIndex: 1, explanation: "The earth can supply or accept charge freely." },
        { prompt: "A positive and a negative charge exert forces that are:", options: ["repulsive", "attractive", "zero", "magnetic"], correctIndex: 1, explanation: "Unlike charges attract." },
        { prompt: "Electrons move much more easily in a conductor than an insulator by a factor of about:", options: ["2", "100", "10²³", "10⁶"], correctIndex: 2, explanation: "Free electrons move ~10²³ times more readily in conductors." },
        { prompt: "In charging by induction, no charge is:", options: ["moved", "transferred from the charging body to the object", "separated", "earthed"], correctIndex: 1, explanation: "Induction separates charge without transferring from the rod." },
        { prompt: "Two objects charged by friction have charges that are:", options: ["equal and same sign", "equal and opposite", "both zero", "unequal"], correctIndex: 1, explanation: "Electron transfer gives equal and opposite charges." },
        { prompt: "The human body is generally a:", options: ["good insulator", "conductor", "dielectric only", "non-conductor"], correctIndex: 1, explanation: "The body (containing salty fluids) conducts charge." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the basic law of electrostatics and give one example of each case.", answerKey: "Like charges repel, unlike charges attract. Example of repulsion: two positive (or two negative) charges pushing apart, e.g. two charged balloons. Example of attraction: a positive and negative charge pulling together, e.g. a charged rod attracting bits of paper.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which set contains only insulators?", options: ["copper, iron, glass", "glass, rubber, dry wood", "salty water, metal, graphite", "aluminium, plastic, water"], correctIndex: 1, answerKey: "Glass, rubber and dry wood are insulators.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a conductor and an insulator, giving one example of each.", answerKey: "Conductor: charge (free electrons) moves through it easily, e.g. metal/copper. Insulator: charge cannot move easily, electrons are bound, e.g. glass/plastic/rubber.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Charging a neutral conductor by contact with a positively charged rod leaves it:", options: ["negatively charged", "positively charged", "neutral", "magnetised"], correctIndex: 1, answerKey: "Charging by conduction gives the same sign as the charging body — positive.", marks: 2 },
        { type: "ESSAY", prompt: "Describe the three methods of charging a body — friction, conduction and induction — explaining the sign of charge produced in each and why charge is conserved throughout.", answerKey: "Friction: rubbing two insulators transfers electrons; they gain equal and opposite charges. Conduction (contact): a charged body touches a conductor; charge spreads, giving the same sign. Induction: a charged body is brought near a conductor, separating charge; with earthing, electrons flow to/from earth, leaving the opposite sign, without the rod touching. In every case electrons are only transferred, never created or destroyed, so total charge is conserved. Reward all three methods, correct signs, and the conservation point.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 18.3 Coulomb's Law (https://openstax.org/books/college-physics-2e/pages/18-3-coulombs-law)
    {
      slug: "coulombs-law",
      title: "Coulomb's Law of Electrostatics",
      objective:
        "By the end of the topic, learners should be able to state Coulomb's law, use F = kq₁q₂/r², and solve problems on the force between point charges. (MoE Grade 10 Period V, CONTENTS 3 'Coulombs law of Electrostatics'.)",
      estimatedMinutes: 100,
      notes: `## Coulomb's law

- **Coulomb's law** — the electrostatic force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between them, and acts along the line joining them.
- **Formula:** F = k q₁ q₂ / r²
- **F** — electrostatic force (N); **q₁, q₂** — the charges (C); **r** — separation of the charges (m).
- **k** — Coulomb's constant = 8.99 × 10⁹ N·m²/C² (often written 9.0 × 10⁹).
- The force is **repulsive** for like charges and **attractive** for unlike charges.

## Inverse-square relationship

- F ∝ 1/r²: doubling the distance reduces the force to one quarter; halving it multiplies the force by four.
- F ∝ q₁q₂: doubling either charge doubles the force.

## Comparison with gravitation

- Coulomb's law has the same inverse-square form as Newton's law of gravitation.
- The electric force between charges is enormously stronger than the gravitational force between the same particles.

## Common errors

- **Forgetting to square r** — it is an inverse-square law.
- **Wrong value of k** — use 9.0 × 10⁹ N·m²/C².
- **Using microcoulombs without converting** — convert µC (10⁻⁶ C) and nC (10⁻⁹ C) to coulombs first.`,
      workedExample: `**Problem (based on OpenStax College Physics 2e, 18.3).** Two point charges q₁ = +3.0 µC and q₂ = +4.0 µC are placed 0.20 m apart in air. Find the force between them. (k = 9.0 × 10⁹ N·m²/C²)

**Step 1 — Convert units.** q₁ = 3.0 × 10⁻⁶ C, q₂ = 4.0 × 10⁻⁶ C, r = 0.20 m.

**Step 2 — Formula.** F = k q₁ q₂ / r².

**Step 3 — Substitute.** F = (9.0 × 10⁹)(3.0 × 10⁻⁶)(4.0 × 10⁻⁶) / (0.20)².

**Step 4 — Numerator.** (9.0 × 10⁹)(3.0 × 10⁻⁶)(4.0 × 10⁻⁶) = 9.0 × 12 × 10⁻³ = 108 × 10⁻³ = 0.108.

**Step 5 — Divide.** F = 0.108 / 0.04 = 2.7 N.

**Answer.** F = 2.7 N. Both charges are positive, so the force is repulsive, pushing them apart along the line joining them.`,
      quiz: [
        { prompt: "Coulomb's law gives the force between two:", options: ["masses", "point charges", "magnets", "currents"], correctIndex: 1, explanation: "It describes the force between electric point charges." },
        { prompt: "The Coulomb's law formula is:", options: ["F = kq₁q₂/r", "F = kq₁q₂/r²", "F = kq₁q₂r²", "F = k(q₁+q₂)/r²"], correctIndex: 1, explanation: "F = kq₁q₂/r², an inverse-square law." },
        { prompt: "Coulomb's constant k is about:", options: ["9.0 × 10⁹ N·m²/C²", "6.67 × 10⁻¹¹", "1.6 × 10⁻¹⁹", "8.85 × 10⁻¹²"], correctIndex: 0, explanation: "k = 8.99 × 10⁹ ≈ 9.0 × 10⁹ N·m²/C²." },
        { prompt: "The force between two like charges is:", options: ["attractive", "repulsive", "zero", "magnetic"], correctIndex: 1, explanation: "Like charges repel." },
        { prompt: "If the distance between charges doubles, the force becomes:", options: ["half", "one quarter", "double", "four times"], correctIndex: 1, explanation: "F ∝ 1/r²: doubling r gives 1/4." },
        { prompt: "If one charge is doubled, the force:", options: ["halves", "doubles", "quarters", "is unchanged"], correctIndex: 1, explanation: "F ∝ q, so doubling a charge doubles the force." },
        { prompt: "The force in Coulomb's law acts:", options: ["perpendicular to the line joining the charges", "along the line joining the charges", "in a circle", "upward"], correctIndex: 1, explanation: "The electrostatic force is along the line joining the charges." },
        { prompt: "1 µC equals:", options: ["10⁻³ C", "10⁻⁶ C", "10⁻⁹ C", "10⁶ C"], correctIndex: 1, explanation: "1 microcoulomb = 10⁻⁶ C." },
        { prompt: "Coulomb's law has the same form as which other law?", options: ["Ohm's law", "Newton's law of gravitation", "Hooke's law", "Boyle's law"], correctIndex: 1, explanation: "Both are inverse-square laws." },
        { prompt: "If the distance is halved, the force becomes:", options: ["half", "double", "four times", "one quarter"], correctIndex: 2, explanation: "F ∝ 1/r²: halving r multiplies force by 4." },
        { prompt: "The unit of the charges in Coulomb's law is the:", options: ["volt", "coulomb", "farad", "newton"], correctIndex: 1, explanation: "Charges are in coulombs." },
        { prompt: "Two +2 µC charges 1 m apart experience a force of about (k=9×10⁹):", options: ["0.036 N", "0.36 N", "3.6 N", "36 N"], correctIndex: 0, explanation: "F = 9×10⁹ × (2×10⁻⁶)² / 1² = 9×10⁹ × 4×10⁻¹² = 0.036 N." },
        { prompt: "The force between an electron and a proton is:", options: ["repulsive", "attractive", "zero", "gravitational only"], correctIndex: 1, explanation: "Unlike charges attract." },
        { prompt: "Doubling both charges multiplies the force by:", options: ["2", "4", "8", "1"], correctIndex: 1, explanation: "F ∝ q₁q₂; doubling both gives ×4." },
        { prompt: "Compared with gravity between the same two particles, the electric force is:", options: ["much weaker", "much stronger", "equal", "zero"], correctIndex: 1, explanation: "The electric force is vastly stronger than gravity." },
        { prompt: "The r in Coulomb's law is the:", options: ["radius of a charge", "distance between the charges", "size of the force", "charge value"], correctIndex: 1, explanation: "r is the separation between the two charges." },
        { prompt: "If r triples, the force becomes:", options: ["1/3", "1/6", "1/9", "9 times"], correctIndex: 2, explanation: "F ∝ 1/r²: tripling r gives 1/9." },
        { prompt: "Two charges +5 µC and −5 µC exert a force that is:", options: ["repulsive", "attractive", "zero", "upward"], correctIndex: 1, explanation: "Opposite charges attract." },
        { prompt: "To use Coulomb's law, charges given in nC must first be:", options: ["squared", "converted to coulombs", "added", "ignored"], correctIndex: 1, explanation: "Convert nC (10⁻⁹ C) to coulombs before substituting." },
        { prompt: "Coulomb's law is an example of an:", options: ["inverse-square law", "direct linear law", "exponential law", "logarithmic law"], correctIndex: 0, explanation: "F depends on 1/r² — an inverse-square law." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Coulomb's law and write its formula, defining each symbol and giving the value of k.", answerKey: "The force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation, along the line joining them. F = kq₁q₂/r²: F force (N), q₁,q₂ charges (C), r separation (m), k = 9.0 × 10⁹ N·m²/C².", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "If the distance between two charges is reduced to one-third, the force becomes:", options: ["3 times", "1/3", "9 times", "1/9"], correctIndex: 2, answerKey: "F ∝ 1/r²; reducing r to r/3 multiplies force by 9.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Two charges of +2.0 µC and +3.0 µC are 0.30 m apart. Calculate the force between them (k = 9.0 × 10⁹).", answerKey: "F = kq₁q₂/r² = 9.0×10⁹ × (2.0×10⁻⁶)(3.0×10⁻⁶)/(0.30)² = 9.0×10⁹ × 6.0×10⁻¹²/0.09 = 0.054/0.09 = 0.6 N (repulsive).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The force between two unlike charges is:", options: ["repulsive", "attractive", "zero", "always weaker than gravity"], correctIndex: 1, answerKey: "Unlike charges attract.", marks: 2 },
        { type: "ESSAY", prompt: "Explain Coulomb's law, how the force depends on the charges and the distance, and compare it with Newton's law of universal gravitation.", answerKey: "Coulomb's law: F = kq₁q₂/r²; force ∝ product of charges and ∝ 1/r² (inverse-square), acting along the line joining them; repulsive for like, attractive for unlike charges. Doubling a charge doubles F; doubling r quarters F. Comparison with gravitation (F = Gm₁m₂/r²): both are inverse-square laws with a constant and the product of the 'source' quantities; but gravity acts on masses and is always attractive and very weak, while the electric force acts on charges, can attract or repel, and is far stronger. Reward the dependence rules and a correct comparison.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 18.4 Electric Field & 19.1 Electric Potential Energy: Potential Difference (https://openstax.org/books/college-physics-2e/pages/18-4-electric-field-concept-of-a-field-revisited)
    {
      slug: "electric-fields-and-potential-difference",
      title: "Electric Fields and Potential Difference",
      objective:
        "By the end of the topic, learners should be able to describe an electric field and its field lines, define potential difference (voltage), and use W = qV. (MoE Grade 10 Period V, CONTENTS 4 'Electric fields and Potential difference'.)",
      estimatedMinutes: 100,
      notes: `## The electric field

- **Electric field** — a region of space around a charge in which another charge experiences an electric force.
- Every electric charge is surrounded by an electric field.
- The field is a **vector**: it has direction as well as size.

## Electric field lines

- **Field lines** show the direction of the force on a **positive** test charge.
- Lines point **away from** a positive charge and **toward** a negative charge.
- Lines never cross; they are closer together where the field is stronger.

\`\`\`svg Field lines: away from + charge, toward − charge
<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Radial field lines around a positive and a negative charge">
  <circle cx="70" cy="65" r="14" fill="#fecaca" stroke="#991b1b"/><text x="70" y="70" font-size="14" text-anchor="middle" fill="#991b1b">+</text>
  <g stroke="#b45309"><line x1="84" y1="65" x2="118" y2="65"/><line x1="70" y1="51" x2="70" y2="20"/><line x1="70" y1="79" x2="70" y2="110"/><line x1="60" y1="55" x2="38" y2="33"/><line x1="80" y1="55" x2="102" y2="33"/><line x1="60" y1="75" x2="38" y2="97"/><line x1="80" y1="75" x2="102" y2="97"/></g>
  <polygon points="118,65 110,61 110,69" fill="#b45309"/>
  <circle cx="250" cy="65" r="14" fill="#bfdbfe" stroke="#1e40af"/><text x="250" y="70" font-size="14" text-anchor="middle" fill="#1e40af">−</text>
  <g stroke="#1e40af"><line x1="216" y1="65" x2="236" y2="65"/><line x1="250" y1="20" x2="250" y2="51"/><line x1="250" y1="79" x2="250" y2="110"/><line x1="218" y1="33" x2="240" y2="55"/><line x1="282" y1="33" x2="260" y2="55"/></g>
  <polygon points="236,65 228,61 228,69" fill="#1e40af"/>
</svg>
\`\`\`

## Electric potential difference (voltage)

- **Potential difference (V)** — the work done in moving a unit positive charge from one point to another in an electric field. Also called **voltage**.
- **Formula:** V = W / q, so **W = qV** (work = charge × potential difference).
- SI unit: the **volt (V)**; 1 volt = 1 joule per coulomb (1 V = 1 J/C).
- Named after Alessandro Volta.

## The electron volt

- **Electron volt (eV)** — the energy gained by one elementary charge moved through a potential difference of 1 volt: 1 eV = 1.60 × 10⁻¹⁹ J.

## Common errors

- **Confusing field and potential** — the field is force per charge (N/C); potential difference is energy per charge (J/C).
- **Drawing field lines that cross** — they never cross.
- **Field direction** — always taken for a positive test charge (away from +, toward −).`,
      workedExample: `**Problem (OpenStax College Physics 2e, 19.1).** A 12.0 V battery moves 5000 C of charge round a circuit. How much energy does it deliver?

**Step 1 — Relationship.** Energy transferred W = qV (work = charge × potential difference).

**Step 2 — Knowns.** q = 5000 C, V = 12.0 V.

**Step 3 — Substitute.** W = (5000)(12.0).

**Step 4 — Evaluate.** W = 60 000 J = 6.00 × 10⁴ J.

**Answer.** The battery delivers 6.00 × 10⁴ J. Note that voltage alone does not give the energy — the amount of charge moved matters equally.`,
      quiz: [
        { prompt: "An electric field is a region where a charge experiences an electric:", options: ["mass", "force", "current", "temperature"], correctIndex: 1, explanation: "In an electric field a charge feels an electric force." },
        { prompt: "Electric field lines point away from a ___ charge.", options: ["negative", "positive", "neutral", "moving"], correctIndex: 1, explanation: "Lines point away from positive, toward negative." },
        { prompt: "Field lines show the direction of force on a:", options: ["negative test charge", "positive test charge", "neutron", "magnet"], correctIndex: 1, explanation: "By convention, on a positive test charge." },
        { prompt: "Electric field lines:", options: ["cross often", "never cross", "form closed loops around charge", "are always straight"], correctIndex: 1, explanation: "Field lines never cross." },
        { prompt: "Potential difference is the work done per unit charge and is also called:", options: ["current", "voltage", "resistance", "power"], correctIndex: 1, explanation: "Potential difference is voltage." },
        { prompt: "The SI unit of potential difference is the:", options: ["ampere", "volt", "coulomb", "ohm"], correctIndex: 1, explanation: "Potential difference is measured in volts." },
        { prompt: "1 volt equals:", options: ["1 J/C", "1 C/J", "1 N/C", "1 J·C"], correctIndex: 0, explanation: "1 V = 1 joule per coulomb." },
        { prompt: "The relationship between work, charge and voltage is:", options: ["W = q/V", "W = qV", "W = V/q", "W = q + V"], correctIndex: 1, explanation: "W = qV." },
        { prompt: "A field is stronger where the field lines are:", options: ["farther apart", "closer together", "crossing", "straight"], correctIndex: 1, explanation: "Closer lines mean a stronger field." },
        { prompt: "The electric field is a:", options: ["scalar", "vector", "unit of charge", "type of current"], correctIndex: 1, explanation: "The field has magnitude and direction." },
        { prompt: "Field lines around a negative charge point:", options: ["away from it", "toward it", "in circles", "upward"], correctIndex: 1, explanation: "Lines point toward a negative charge." },
        { prompt: "Moving 2 C through a potential difference of 6 V transfers energy of:", options: ["3 J", "12 J", "8 J", "0.33 J"], correctIndex: 1, explanation: "W = qV = 2 × 6 = 12 J." },
        { prompt: "The electron volt is a unit of:", options: ["charge", "energy", "voltage", "field"], correctIndex: 1, explanation: "1 eV is an amount of energy = 1.6×10⁻¹⁹ J." },
        { prompt: "Voltage is energy per unit:", options: ["mass", "charge", "time", "area"], correctIndex: 1, explanation: "Potential difference = energy per unit charge." },
        { prompt: "The volt is named after:", options: ["Coulomb", "Volta", "Newton", "Ohm"], correctIndex: 1, explanation: "It honours Alessandro Volta." },
        { prompt: "A 9 V battery moves 4 C of charge. Energy delivered:", options: ["36 J", "2.25 J", "13 J", "0.44 J"], correctIndex: 0, explanation: "W = qV = 4 × 9 = 36 J." },
        { prompt: "The electric field around a charge exists:", options: ["only when touched", "everywhere around the charge", "only in wires", "only for negative charge"], correctIndex: 1, explanation: "Every charge is surrounded by its field." },
        { prompt: "1 eV in joules is:", options: ["1.6 × 10⁻¹⁹ J", "9 × 10⁹ J", "1 J", "6.25 × 10¹⁸ J"], correctIndex: 0, explanation: "1 eV = 1.60 × 10⁻¹⁹ J." },
        { prompt: "Two points at the same potential have a potential difference of:", options: ["1 V", "zero", "infinite", "9 V"], correctIndex: 1, explanation: "Equal potentials mean zero potential difference — no work to move charge." },
        { prompt: "Field is force per charge; potential difference is:", options: ["force per charge", "energy per charge", "charge per energy", "charge per time"], correctIndex: 1, explanation: "Potential difference is energy (work) per unit charge." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define an electric field and state two rules for drawing electric field lines.", answerKey: "Electric field = region around a charge where another charge experiences an electric force. Field-line rules (any two): lines point away from positive and toward negative charge; they never cross; they show the force direction on a positive test charge; closer lines mean a stronger field.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The SI unit of potential difference is the volt, equal to:", options: ["1 N/C", "1 J/C", "1 C/J", "1 J·C"], correctIndex: 1, answerKey: "1 V = 1 joule per coulomb.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "A charge of 3 C is moved through a potential difference of 8 V. Calculate the work done.", answerKey: "W = qV = 3 × 8 = 24 J.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Electric field lines around an isolated positive charge point:", options: ["toward the charge", "away from the charge", "in circles around it", "up and down"], correctIndex: 1, answerKey: "Field lines point away from a positive charge.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between electric field and electric potential difference, giving the unit of each, and describe how field lines represent an electric field.", answerKey: "Electric field = force per unit positive charge (N/C), a vector; it describes the force environment around a charge. Potential difference (voltage) = work done per unit charge moved between two points (J/C = volt), related by W = qV. Field lines represent the field: they point away from positive and toward negative charges, never cross, and are closer where the field is stronger; their direction gives the force on a positive test charge. Reward correct definitions, units and field-line description.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 18.4 Electric Field: Concept of a Field Revisited (https://openstax.org/books/college-physics-2e/pages/18-4-electric-field-concept-of-a-field-revisited)
    {
      slug: "electric-field-intensity",
      title: "Electric Field Intensity (Strength)",
      objective:
        "By the end of the topic, learners should be able to define electric field intensity, use E = F/q and E = kQ/r², and state its unit. (MoE Grade 10 Period V, CONTENTS 5 'Electric field intensity (strength)'.)",
      estimatedMinutes: 90,
      notes: `## Electric field intensity

- **Electric field intensity (strength), E** — the force per unit positive charge at a point in the field.
- **Formula:** E = F / q, where F is the force on a small positive test charge q.
- SI unit: **newton per coulomb (N/C)** (also volt per metre, V/m).
- E is a **vector**, in the direction of the force on a positive charge.

## Field of a point charge

- The field a distance r from a point charge Q is:
- **E = k Q / r²**, where k = 8.99 × 10⁹ N·m²/C².
- The field depends only on the source charge Q and the distance r — **not** on the test charge.
- It obeys the inverse-square law: doubling r reduces E to one quarter.

## Force from the field

- The force on a charge q placed in a field E is **F = qE**.
- A positive charge feels a force along E; a negative charge feels a force opposite to E.

## Common errors

- **Thinking E depends on the test charge** — E = F/q is the same whatever test charge is used.
- **Forgetting to square r** in E = kQ/r².
- **Wrong unit** — field intensity is N/C (or V/m), not newtons.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 18.4).** Calculate the electric field intensity 5.00 mm from a point charge of 2.00 nC. (k = 8.99 × 10⁹ N·m²/C²)

**Step 1 — Convert units.** Q = 2.00 × 10⁻⁹ C, r = 5.00 mm = 5.00 × 10⁻³ m.

**Step 2 — Formula.** E = kQ / r².

**Step 3 — Substitute.** E = (8.99 × 10⁹)(2.00 × 10⁻⁹) / (5.00 × 10⁻³)².

**Step 4 — Denominator.** (5.00 × 10⁻³)² = 2.50 × 10⁻⁵.

**Step 5 — Numerator and divide.** (8.99 × 10⁹)(2.00 × 10⁻⁹) = 18.0; E = 18.0 / 2.50 × 10⁻⁵ = 7.19 × 10⁵ N/C.

**Answer.** E = 7.19 × 10⁵ N/C, directed away from the positive charge.`,
      quiz: [
        { prompt: "Electric field intensity is the force per unit:", options: ["mass", "positive charge", "area", "time"], correctIndex: 1, explanation: "E = force per unit positive charge." },
        { prompt: "The formula for field intensity from force is:", options: ["E = Fq", "E = F/q", "E = q/F", "E = F + q"], correctIndex: 1, explanation: "E = F/q." },
        { prompt: "The SI unit of electric field intensity is:", options: ["volt", "newton per coulomb", "coulomb", "joule"], correctIndex: 1, explanation: "Field intensity is measured in N/C (or V/m)." },
        { prompt: "The field of a point charge is given by:", options: ["E = kQ/r", "E = kQ/r²", "E = kQr²", "E = kq/Q"], correctIndex: 1, explanation: "E = kQ/r², an inverse-square law." },
        { prompt: "The field of a point charge depends on:", options: ["the test charge", "the source charge and distance", "the mass", "the time"], correctIndex: 1, explanation: "E depends only on Q and r, not on the test charge." },
        { prompt: "Doubling the distance from a point charge changes E to:", options: ["half", "one quarter", "double", "four times"], correctIndex: 1, explanation: "E ∝ 1/r²: doubling r gives 1/4." },
        { prompt: "The force on a charge q in a field E is:", options: ["F = E/q", "F = qE", "F = q/E", "F = E + q"], correctIndex: 1, explanation: "F = qE." },
        { prompt: "Electric field intensity is a:", options: ["scalar", "vector", "unit of charge", "type of current"], correctIndex: 1, explanation: "E has magnitude and direction." },
        { prompt: "The field direction is that of the force on a:", options: ["negative charge", "positive charge", "neutron", "proton in the nucleus"], correctIndex: 1, explanation: "E points along the force on a positive test charge." },
        { prompt: "A test charge of 2 C feels a force of 10 N. The field is:", options: ["5 N/C", "20 N/C", "0.2 N/C", "12 N/C"], correctIndex: 0, explanation: "E = F/q = 10/2 = 5 N/C." },
        { prompt: "A negative charge in a field E feels a force:", options: ["along E", "opposite to E", "perpendicular to E", "zero"], correctIndex: 1, explanation: "A negative charge is pushed opposite to the field direction." },
        { prompt: "Field intensity 5 mm from a 2 nC charge is about (k=9×10⁹):", options: ["7.2 × 10⁵ N/C", "7.2 × 10³ N/C", "3.6 × 10⁵ N/C", "1.8 × 10⁶ N/C"], correctIndex: 0, explanation: "E = kQ/r² = 9×10⁹ × 2×10⁻⁹/(5×10⁻³)² ≈ 7.2×10⁵ N/C." },
        { prompt: "If r triples, the field of a point charge becomes:", options: ["1/3", "1/6", "1/9", "9 times"], correctIndex: 2, explanation: "E ∝ 1/r²: tripling r gives 1/9." },
        { prompt: "A field of 100 N/C exerts a force on a 0.5 C charge of:", options: ["50 N", "200 N", "0.005 N", "100.5 N"], correctIndex: 0, explanation: "F = qE = 0.5 × 100 = 50 N." },
        { prompt: "Which does NOT change the field intensity from a point charge?", options: ["the source charge Q", "the distance r", "the size of the test charge", "the constant k"], correctIndex: 2, explanation: "E = kQ/r² is independent of the test charge." },
        { prompt: "Another equivalent unit for field intensity is:", options: ["V/m", "J/C", "C/s", "N·m"], correctIndex: 0, explanation: "N/C is the same as volt per metre (V/m)." },
        { prompt: "A stronger source charge produces a field that is:", options: ["weaker", "stronger", "unchanged", "negative"], correctIndex: 1, explanation: "E ∝ Q, so more charge gives a stronger field." },
        { prompt: "The field intensity from a 1 C charge at 1 m is about (k=9×10⁹):", options: ["9 × 10⁹ N/C", "9 N/C", "9 × 10⁻⁹ N/C", "1 N/C"], correctIndex: 0, explanation: "E = kQ/r² = 9×10⁹ × 1/1 = 9×10⁹ N/C." },
        { prompt: "E = F/q gives the same value whichever test charge is used because:", options: ["F and q both scale together", "q is always 1", "F is constant", "E is a scalar"], correctIndex: 0, explanation: "A larger test charge feels a proportionally larger force, so the ratio is unchanged." },
        { prompt: "The direction of E near a positive point charge is:", options: ["toward it", "away from it", "in a circle", "downward"], correctIndex: 1, explanation: "The field points away from a positive charge." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define electric field intensity and give its formula in terms of force and charge, with the SI unit.", answerKey: "Electric field intensity = force per unit positive charge at a point; E = F/q; SI unit newton per coulomb (N/C), also volt per metre (V/m).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "A charge of 4 C in a field feels a force of 20 N. The field intensity is:", options: ["5 N/C", "80 N/C", "0.2 N/C", "24 N/C"], correctIndex: 0, answerKey: "E = F/q = 20/4 = 5 N/C.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Calculate the electric field intensity 0.10 m from a point charge of 5.0 × 10⁻⁸ C (k = 9.0 × 10⁹).", answerKey: "E = kQ/r² = 9.0×10⁹ × 5.0×10⁻⁸ / (0.10)² = 450 / 0.01 = 4.5 × 10⁴ N/C, directed away from the charge if positive.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "The field of a point charge is proportional to:", options: ["r", "1/r", "1/r²", "r²"], correctIndex: 2, answerKey: "E = kQ/r² — inverse-square in r.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the meaning of electric field intensity, why it does not depend on the size of the test charge, and how it varies with distance from a point charge.", answerKey: "Field intensity E = F/q is the force per unit positive charge at a point; it describes the field itself. It is independent of the test charge because a larger test charge experiences a proportionally larger force, so F/q stays the same. For a point charge E = kQ/r²: it depends only on the source charge Q and distance r, decreasing as an inverse square (doubling r gives 1/4 of E). Reward the definition, the independence argument, and the inverse-square variation.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 19.5 Capacitors and Dielectrics (https://openstax.org/books/college-physics-2e/pages/19-5-capacitors-and-dielectrics)
    {
      slug: "capacitors-and-capacitance",
      title: "Capacitors and Capacitance",
      objective:
        "By the end of the topic, learners should be able to describe a capacitor, define capacitance, use C = Q/V, state the farad, and explain the role of a dielectric. (MoE Grade 10 Period V, CONTENTS 6 'Capacitors and Capacitance'.)",
      estimatedMinutes: 100,
      notes: `## Capacitors

- **Capacitor** — a device used to store electric charge (and electrical energy).
- Basic form: two conducting plates separated by an insulator (the **dielectric**).
- When connected to a battery, one plate gains positive charge and the other equal negative charge.
- Uses: smoothing/filtering in radios and power supplies, camera flashes, defibrillators, timing circuits.

## Capacitance

- **Capacitance (C)** — the charge stored per unit potential difference: C = Q / V.
- **Q** — charge on each plate (C); **V** — potential difference across the plates (V).
- SI unit: the **farad (F)**; 1 F = 1 coulomb per volt (1 C/V).
- 1 farad is very large; practical values are microfarads (µF), nanofarads (nF) and picofarads (pF).

## Parallel-plate capacitor

- For two plates of area A separated by distance d:
- C = ε₀ A / d, where ε₀ = 8.85 × 10⁻¹² F/m (permittivity of free space).
- **Larger plate area** and **smaller separation** both increase capacitance.

## Dielectrics

- Inserting a **dielectric** (insulator) between the plates increases the capacitance by a factor κ (the dielectric constant):
- C = κ ε₀ A / d.
- A dielectric also lets the capacitor withstand a higher voltage before breaking down.

## Common errors

- **Confusing charge and capacitance** — Q is the charge stored; C is the storage capacity per volt.
- **Ignoring unit prefixes** — most capacitors are µF, nF or pF, not whole farads.
- **Thinking charge flows through a capacitor** — charge builds up on the plates; the dielectric blocks direct flow.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 19.5).** A parallel-plate capacitor has a capacitance of 8.85 nF. It is connected to a 3000 V supply. How much charge is stored on each plate?

**Step 1 — Relationship.** Capacitance C = Q/V, so Q = C V.

**Step 2 — Knowns.** C = 8.85 nF = 8.85 × 10⁻⁹ F, V = 3000 V.

**Step 3 — Substitute.** Q = (8.85 × 10⁻⁹)(3000).

**Step 4 — Evaluate.** Q = 2.655 × 10⁻⁵ C = 26.6 µC.

**Answer.** The capacitor stores 26.6 µC on each plate (one plate +26.6 µC, the other −26.6 µC).`,
      quiz: [
        { prompt: "A capacitor is a device used to store:", options: ["current", "electric charge", "resistance", "magnetism"], correctIndex: 1, explanation: "A capacitor stores electric charge (and energy)." },
        { prompt: "A basic capacitor has two conducting plates separated by an:", options: ["conductor", "insulator (dielectric)", "empty wire", "ammeter"], correctIndex: 1, explanation: "The plates are separated by an insulating dielectric." },
        { prompt: "Capacitance is defined as:", options: ["C = QV", "C = Q/V", "C = V/Q", "C = Q + V"], correctIndex: 1, explanation: "C = Q/V, charge stored per unit voltage." },
        { prompt: "The SI unit of capacitance is the:", options: ["volt", "farad", "coulomb", "ohm"], correctIndex: 1, explanation: "Capacitance is measured in farads (F)." },
        { prompt: "1 farad equals:", options: ["1 C/V", "1 V/C", "1 J/C", "1 N/C"], correctIndex: 0, explanation: "1 F = 1 coulomb per volt." },
        { prompt: "The insulating material between the plates is the:", options: ["conductor", "dielectric", "electrode", "resistor"], correctIndex: 1, explanation: "The dielectric is the insulator between the plates." },
        { prompt: "For a parallel-plate capacitor, a larger plate area gives:", options: ["smaller capacitance", "larger capacitance", "no change", "zero charge"], correctIndex: 1, explanation: "C = ε₀A/d, so C increases with area." },
        { prompt: "Bringing the plates closer together (smaller d):", options: ["decreases C", "increases C", "does not change C", "removes the charge"], correctIndex: 1, explanation: "Smaller separation increases capacitance." },
        { prompt: "A dielectric between the plates ___ the capacitance.", options: ["decreases", "increases", "does not affect", "reverses"], correctIndex: 1, explanation: "A dielectric multiplies C by κ (>1)." },
        { prompt: "A 2 F capacitor charged to 5 V stores charge of:", options: ["10 C", "2.5 C", "0.4 C", "7 C"], correctIndex: 0, explanation: "Q = CV = 2 × 5 = 10 C." },
        { prompt: "Practical capacitors are usually measured in:", options: ["farads", "microfarads, nanofarads, picofarads", "coulombs", "volts"], correctIndex: 1, explanation: "1 F is huge; real values are µF, nF, pF." },
        { prompt: "When a capacitor charges, the two plates carry charges that are:", options: ["both positive", "equal and opposite", "both negative", "zero"], correctIndex: 1, explanation: "One plate +Q, the other −Q." },
        { prompt: "The permittivity of free space ε₀ is about:", options: ["8.85 × 10⁻¹² F/m", "9 × 10⁹", "1.6 × 10⁻¹⁹", "6.25 × 10¹⁸"], correctIndex: 0, explanation: "ε₀ = 8.85 × 10⁻¹² F/m." },
        { prompt: "A capacitor storing 12 C at 4 V has capacitance:", options: ["3 F", "48 F", "0.33 F", "16 F"], correctIndex: 0, explanation: "C = Q/V = 12/4 = 3 F." },
        { prompt: "One use of capacitors is in:", options: ["camera flashes and defibrillators", "measuring mass", "generating charge from nothing", "boiling water"], correctIndex: 0, explanation: "Capacitors store energy released quickly, e.g. in flashes and defibrillators." },
        { prompt: "A dielectric also allows the capacitor to withstand:", options: ["lower voltage", "higher voltage before breakdown", "no voltage", "only AC"], correctIndex: 1, explanation: "A dielectric raises the breakdown voltage." },
        { prompt: "Charge does not flow through an ideal capacitor because the dielectric is an:", options: ["conductor", "insulator", "ammeter", "electrode"], correctIndex: 1, explanation: "The insulating dielectric blocks direct charge flow." },
        { prompt: "The formula for a parallel-plate capacitor is:", options: ["C = ε₀A/d", "C = ε₀d/A", "C = Ad/ε₀", "C = ε₀Ad"], correctIndex: 0, explanation: "C = ε₀A/d (without a dielectric)." },
        { prompt: "A 100 µF capacitor at 10 V stores charge of:", options: ["1 × 10⁻³ C", "1000 C", "10 C", "0.1 C"], correctIndex: 0, explanation: "Q = CV = 100×10⁻⁶ × 10 = 1×10⁻³ C." },
        { prompt: "Capacitance measures how much charge a capacitor stores per:", options: ["second", "volt", "metre", "ampere"], correctIndex: 1, explanation: "C = Q/V — charge per volt." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define capacitance, give its formula and SI unit, and state what a capacitor does.", answerKey: "Capacitance = charge stored per unit potential difference, C = Q/V; SI unit farad (F) = 1 C/V. A capacitor stores electric charge (and energy) on two plates separated by a dielectric.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A 5 µF capacitor is charged to 20 V. The charge stored is:", options: ["1 × 10⁻⁴ C", "0.25 C", "100 C", "4 C"], correctIndex: 0, answerKey: "Q = CV = 5×10⁻⁶ × 20 = 1×10⁻⁴ C (100 µC).", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State two ways to increase the capacitance of a parallel-plate capacitor.", answerKey: "Any two: increase the plate area A; decrease the plate separation d; insert a dielectric (of higher dielectric constant κ) between the plates.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Inserting a dielectric between the plates of a capacitor:", options: ["decreases its capacitance", "increases its capacitance", "leaves it unchanged", "removes its charge"], correctIndex: 1, answerKey: "A dielectric multiplies capacitance by κ (>1).", marks: 2 },
        { type: "ESSAY", prompt: "Describe the structure and action of a parallel-plate capacitor, define capacitance, and explain how plate area, plate separation and a dielectric affect the capacitance.", answerKey: "Structure: two conducting plates separated by an insulating dielectric. Action: connected to a supply, one plate gains +Q, the other −Q, storing charge and energy. Capacitance C = Q/V (farads). C = ε₀A/d (or κε₀A/d with a dielectric): larger area A increases C; smaller separation d increases C; a dielectric of constant κ>1 increases C and raises the breakdown voltage. Reward correct structure, definition and all three factors.", marks: 8 },
      ],
    },
    // source: OpenStax — College Physics 2e, 19.6 Capacitors in Series and Parallel (https://openstax.org/books/college-physics-2e/pages/19-6-capacitors-in-series-and-parallel)
    {
      slug: "networks-of-capacitors",
      title: "Networks of Capacitors: Series, Parallel and Series-Parallel",
      objective:
        "By the end of the topic, learners should be able to find the total capacitance of capacitors in parallel, in series, and in series-parallel combinations. (MoE Grade 10 Period V, CONTENTS 7 'Network of capacitors: series, parallel, series-parallel'.)",
      estimatedMinutes: 100,
      notes: `## Capacitors in parallel

- In **parallel**, all capacitors share the **same voltage**.
- The total (equivalent) capacitance is the **sum**:
- **C_p = C₁ + C₂ + C₃ + …**
- The parallel total is larger than any single capacitor (effective plate area increases).

## Capacitors in series

- In **series**, all capacitors carry the **same charge** but the voltage divides between them.
- The reciprocal of the total equals the sum of the reciprocals:
- **1/C_s = 1/C₁ + 1/C₂ + 1/C₃ + …**
- The series total is smaller than the smallest single capacitor.

| Connection | Same for all | Formula |
| --- | --- | --- |
| Parallel | voltage | C_p = C₁ + C₂ + … |
| Series | charge | 1/C_s = 1/C₁ + 1/C₂ + … |

## Series-parallel (mixed) networks

- Reduce the network in stages:
1. Combine any purely series groups using the series formula.
2. Combine any purely parallel groups using the parallel formula.
3. Repeat until a single equivalent capacitance remains.

## Common errors

- **Swapping the formulas** — parallel adds directly; series adds reciprocals (opposite to resistors).
- **Forgetting to invert** — after summing 1/C values, take the reciprocal to get C_s.
- **Combining unlike groups at once** — reduce series and parallel parts separately, step by step.`,
      workedExample: `**Problem (OpenStax College Physics 2e, 19.6).** Three capacitors of 1.000 µF, 5.000 µF and 8.000 µF are connected (a) all in parallel, then (b) all in series. Find the total capacitance in each case.

**Part (a) — Parallel.** C_p = C₁ + C₂ + C₃ = 1.000 + 5.000 + 8.000 = 14.000 µF.

**Part (b) — Series.** 1/C_s = 1/1.000 + 1/5.000 + 1/8.000 = 1.000 + 0.200 + 0.125 = 1.325 per µF.

**Then invert.** C_s = 1 / 1.325 = 0.755 µF.

**Answer.** In parallel the total is 14.000 µF (larger than any one); in series it is 0.755 µF (smaller than the smallest). Parallel increases capacitance; series decreases it.`,
      quiz: [
        { prompt: "Capacitors in parallel all have the same:", options: ["charge", "voltage", "resistance", "current only"], correctIndex: 1, explanation: "Parallel capacitors share the same voltage." },
        { prompt: "For capacitors in parallel, the total capacitance is:", options: ["C₁ + C₂ + …", "1/C₁ + 1/C₂", "smaller than each", "zero"], correctIndex: 0, explanation: "C_p = C₁ + C₂ + …" },
        { prompt: "Capacitors in series all carry the same:", options: ["voltage", "charge", "resistance", "power"], correctIndex: 1, explanation: "Series capacitors carry the same charge." },
        { prompt: "For capacitors in series:", options: ["C_s = C₁ + C₂", "1/C_s = 1/C₁ + 1/C₂", "C_s = C₁C₂", "C_s = 0"], correctIndex: 1, explanation: "Series adds reciprocals: 1/C_s = Σ 1/C." },
        { prompt: "The parallel total is ___ any single capacitor.", options: ["smaller than", "larger than", "equal to", "unrelated to"], correctIndex: 1, explanation: "Adding directly gives a larger total." },
        { prompt: "The series total is ___ the smallest single capacitor.", options: ["larger than", "smaller than", "equal to", "double"], correctIndex: 1, explanation: "The series combination is smaller than the smallest one." },
        { prompt: "Two 4 µF capacitors in parallel give:", options: ["2 µF", "8 µF", "4 µF", "16 µF"], correctIndex: 1, explanation: "C_p = 4 + 4 = 8 µF." },
        { prompt: "Two 4 µF capacitors in series give:", options: ["8 µF", "2 µF", "4 µF", "16 µF"], correctIndex: 1, explanation: "1/C_s = 1/4 + 1/4 = 1/2, so C_s = 2 µF." },
        { prompt: "Compared with resistors, capacitor formulas are:", options: ["identical", "swapped (series/parallel opposite)", "always the same", "not related"], correctIndex: 1, explanation: "Capacitors add in parallel and add reciprocals in series — opposite to resistors." },
        { prompt: "Three 6 µF capacitors in parallel give:", options: ["2 µF", "18 µF", "6 µF", "9 µF"], correctIndex: 1, explanation: "6 + 6 + 6 = 18 µF." },
        { prompt: "Three 6 µF capacitors in series give:", options: ["18 µF", "2 µF", "6 µF", "3 µF"], correctIndex: 1, explanation: "1/C_s = 3 × (1/6) = 1/2, so C_s = 2 µF." },
        { prompt: "To find the total of a mixed network you should:", options: ["add everything directly", "reduce series and parallel parts step by step", "ignore series parts", "use only the largest value"], correctIndex: 1, explanation: "Reduce the network in stages." },
        { prompt: "In parallel, the effective plate area:", options: ["decreases", "increases", "stays the same", "becomes zero"], correctIndex: 1, explanation: "Parallel connection effectively increases plate area, raising capacitance." },
        { prompt: "After summing the reciprocals in a series calculation, you must:", options: ["multiply by 2", "take the reciprocal of the sum", "add the voltages", "subtract 1"], correctIndex: 1, explanation: "C_s = 1 / (Σ 1/C)." },
        { prompt: "A 2 µF and a 3 µF capacitor in parallel give:", options: ["1.2 µF", "5 µF", "6 µF", "0.83 µF"], correctIndex: 1, explanation: "C_p = 2 + 3 = 5 µF." },
        { prompt: "A 2 µF and a 3 µF capacitor in series give about:", options: ["5 µF", "1.2 µF", "6 µF", "0.5 µF"], correctIndex: 1, explanation: "1/C_s = 1/2 + 1/3 = 5/6, C_s = 6/5 = 1.2 µF." },
        { prompt: "Capacitors 1, 5 and 8 µF in parallel total:", options: ["0.755 µF", "14 µF", "40 µF", "4.67 µF"], correctIndex: 1, explanation: "1 + 5 + 8 = 14 µF." },
        { prompt: "Capacitors 1, 5 and 8 µF in series total about:", options: ["14 µF", "0.755 µF", "1.3 µF", "4 µF"], correctIndex: 1, explanation: "1/C_s = 1 + 0.2 + 0.125 = 1.325, C_s ≈ 0.755 µF." },
        { prompt: "Connecting capacitors in parallel is used to get a ___ capacitance.", options: ["smaller", "larger", "zero", "negative"], correctIndex: 1, explanation: "Parallel increases total capacitance." },
        { prompt: "In a series combination, the applied voltage is:", options: ["the same across each", "divided between the capacitors", "zero", "doubled"], correctIndex: 1, explanation: "Series capacitors share the charge but divide the voltage." },
      ],
      test: [
        { type: "MULTIPLE_CHOICE", prompt: "Two 10 µF capacitors in parallel give a total of:", options: ["5 µF", "10 µF", "20 µF", "100 µF"], correctIndex: 2, answerKey: "C_p = 10 + 10 = 20 µF.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "State the formula for capacitors in parallel and in series, and say which quantity is the same for all capacitors in each case.", answerKey: "Parallel: C_p = C₁ + C₂ + … (same voltage across each). Series: 1/C_s = 1/C₁ + 1/C₂ + … (same charge on each).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Two capacitors, 6 µF and 3 µF, are connected in series. Find the total capacitance.", answerKey: "1/C_s = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so C_s = 2 µF.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The total capacitance of capacitors in series is always:", options: ["larger than the largest", "smaller than the smallest", "equal to their sum", "zero"], correctIndex: 1, answerKey: "Series capacitance is less than the smallest individual capacitor.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how to find the total capacitance of capacitors connected in parallel and in series, why the parallel total is larger and the series total smaller, and outline how to reduce a series-parallel network.", answerKey: "Parallel: same voltage across each; C_p = C₁ + C₂ + … The effective plate area adds, so the total is larger than any one. Series: same charge on each, voltage divides; 1/C_s = Σ1/C, then invert; the effective separation increases, so the total is smaller than the smallest. Series-parallel: reduce step by step — combine series groups (reciprocal sum) and parallel groups (direct sum) in stages until one equivalent capacitance remains. Reward both formulas, the size reasoning, and the reduction method.", marks: 8 },
      ],
    },
  ],
};
