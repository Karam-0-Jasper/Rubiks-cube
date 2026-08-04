import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Physics, Grade 10,
// Semester Two, Period V: Electrostatics.
export const physicsG10P5: PeriodContent = {
  grade: 10,
  number: 5,
  title: "Electrostatics",
  summary:
    "Period V of the MoE Grade 10 Physics syllabus. Learners study static electricity — the two kinds of charge, how objects become charged by friction, the difference between conductors and insulators, the law of electric charges, and everyday effects such as lightning.",
  topics: [
    {
      slug: "static-charge",
      title: "Static Charge and Charging by Friction",
      objective:
        "By the end of the topic, learners should be able to describe the two types of electric charge, explain how objects become charged by friction in terms of electron transfer, and distinguish conductors from insulators.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Static electricity** — electric charge built up and sitting still (a comb picking up paper; a shock from a door-handle).
- The first step toward the electric currents that power the modern world.
- **This topic:** the **two kinds of charge**; charging by **friction** (electron transfer); **conductors** vs **insulators**.

## Static electricity

**Electrostatics** is the study of **electric charges at rest** (static electricity), as opposed to charges flowing in a current. You meet it when a comb picks up bits of paper, or when you feel a small shock touching a metal door.

## The two kinds of charge

There are **two types of electric charge**: **positive (+)** and **negative (−)**. They come from the parts of the atom (Period II):

- The **proton** carries a **positive** charge.
- The **electron** carries a **negative** charge.

A **neutral** atom or object has **equal** numbers of protons and electrons, so the charges cancel. An object becomes **charged** when this balance is upset — usually by **electrons moving** from one object to another (protons stay fixed in the nucleus).

## Charging by friction

When two suitable materials are **rubbed together**, **electrons are transferred** from one to the other:

- The material that **gains electrons** becomes **negatively** charged.
- The material that **loses electrons** becomes **positively** charged.

*Example:* rubbing a plastic rod with a dry cloth. Electrons move from the cloth to the rod, so the **rod becomes negative** and the **cloth becomes positive**.

Note that **only electrons move** — the positive charge is simply where electrons are **missing**.

## Conductors and insulators

Materials differ in how easily charge moves through them:

- **Conductors** allow charge (electrons) to move through them easily — e.g. **metals**, and the human body. Charge does not stay static on a good conductor unless it is insulated.
- **Insulators** do **not** let charge move easily, so charge **stays where it is put** — e.g. **plastic, rubber, glass, dry wood, silk**. This is why static charge builds up on insulators.

\`\`\`svg A charged rod attracting small pieces of paper
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A negatively charged rod attracting tiny pieces of paper">
  <rect x="20" y="50" width="110" height="14" rx="7" fill="#94a3b8" stroke="#334155"/>
  <text x="35" y="46" font-size="10" fill="#1e3a8a">− − − − −</text>
  <g fill="#fcd34d" stroke="#92400e">
    <rect x="150" y="80" width="10" height="8"/><rect x="170" y="78" width="10" height="8"/><rect x="190" y="82" width="10" height="8"/>
  </g>
  <line x1="130" y1="58" x2="150" y2="82" stroke="#dc2626" stroke-dasharray="3 2"/>
  <line x1="130" y1="58" x2="172" y2="80" stroke="#dc2626" stroke-dasharray="3 2"/>
  <text x="175" y="105" font-size="9" fill="#92400e">bits of paper</text>
</svg>
\`\`\`

## Detecting charge: the electroscope

A **gold-leaf electroscope** is a simple instrument that detects charge. When a charged object is brought near, the thin gold leaf **rises (diverges)** because like charges spread to the leaf and repel — showing that the object is charged.

## Common errors and misconceptions

- **Thinking protons move during charging** — only **electrons** transfer. An object becomes **negative** by *gaining* electrons and **positive** by *losing* them; protons stay in the nucleus.
- **Believing charge is created** — charging by friction only **transfers** charge from one object to the other; the total charge is conserved (one gains what the other loses).
- **Confusing conductors and insulators** — a **conductor** (metal) lets charge move freely; an **insulator** (plastic, glass) holds charge where it is put, which is why insulators show static effects.
- **Getting the force rule backwards** — **like charges repel; unlike charges attract**.`,
      workedExample: `**Task.** A glass rod is rubbed with a silk cloth. After rubbing, the glass rod is found to be positively charged. (a) Explain, in terms of electrons, what happened. (b) What is the charge on the silk cloth, and why? (c) Why does the charge stay on the glass rod?

**Part (a) — what happened to the electrons**
Charging by friction transfers **electrons** between the two materials. Since the glass rod ends up **positively** charged, it must have **lost electrons** — electrons moved **from the glass rod to the silk cloth** during rubbing. (Protons do not move; the rod is positive simply because electrons are now missing.)

**Part (b) — the charge on the silk cloth**
The silk cloth **gained** the electrons that left the glass, so it has **extra electrons** and is therefore **negatively charged**. Charging by friction always produces **equal and opposite** charges on the two materials.

**Part (c) — why the charge stays on the glass**
Glass is an **insulator**, so charge **cannot move through it easily** and stays where it was produced. If the rod were a conductor (like a metal) held in the hand, the charge would flow away through the body, and no static charge would remain.

**Conclusion:** rubbing transfers electrons — the glass lost electrons (becoming positive) and the silk gained them (becoming negative) — and the charge remains because glass is an insulator that does not let charge flow away.`,
      teachingTip:
        "Two rules prevent almost all errors: 'only electrons move' (never protons), and 'gain electrons → negative, lose electrons → positive'. Learners often say the rod 'gained positive charge' — correct them to 'lost electrons'. Reinforce that static builds up on insulators because charge can't escape, and drains away on conductors. The comb-and-paper or balloon-on-hair demonstration makes the whole topic tangible in one minute.",
      quiz: [
        {
          prompt: "Electrostatics is the study of electric charges that are…",
          options: ["at rest (static)", "flowing in a wire", "inside the Sun", "always moving fast"],
          correctIndex: 0,
          explanation: "Electrostatics deals with charges at rest.",
        },
        {
          prompt: "The two types of electric charge are…",
          options: ["positive and negative", "big and small", "hot and cold", "north and south"],
          correctIndex: 0,
          explanation: "Charge is positive or negative.",
        },
        {
          prompt: "Which particle carries a negative charge?",
          options: ["electron", "proton", "neutron", "atom"],
          correctIndex: 0,
          explanation: "Electrons are negative.",
        },
        {
          prompt: "Which particle carries a positive charge?",
          options: ["proton", "electron", "neutron", "molecule"],
          correctIndex: 0,
          explanation: "Protons are positive.",
        },
        {
          prompt: "A neutral object has … numbers of protons and electrons.",
          options: ["equal", "more proton than electron", "more electron than proton", "no"],
          correctIndex: 0,
          explanation: "Equal charges cancel to give neutrality.",
        },
        {
          prompt: "When objects are charged by friction, which particles move?",
          options: ["electrons", "protons", "neutrons", "whole atoms"],
          correctIndex: 0,
          explanation: "Only electrons transfer; protons stay in the nucleus.",
        },
        {
          prompt: "A material that GAINS electrons becomes…",
          options: ["negatively charged", "positively charged", "neutral", "a conductor"],
          correctIndex: 0,
          explanation: "Extra electrons give a negative charge.",
        },
        {
          prompt: "A material that LOSES electrons becomes…",
          options: ["positively charged", "negatively charged", "neutral", "an insulator"],
          correctIndex: 0,
          explanation: "Missing electrons leave a positive charge.",
        },
        {
          prompt: "When a plastic rod is rubbed with a cloth and gains electrons, the rod becomes…",
          options: ["negative", "positive", "neutral", "a conductor"],
          correctIndex: 0,
          explanation: "Gaining electrons makes it negative.",
        },
        {
          prompt: "A conductor is a material that…",
          options: ["lets charge move through it easily", "stops charge moving", "has no electrons", "is always plastic"],
          correctIndex: 0,
          explanation: "Charge flows easily through conductors.",
        },
        {
          prompt: "Which is a good conductor?",
          options: ["metal", "plastic", "rubber", "dry wood"],
          correctIndex: 0,
          explanation: "Metals conduct charge well.",
        },
        {
          prompt: "An insulator is a material that…",
          options: ["does not let charge move easily", "conducts charge well", "has no atoms", "is always metal"],
          correctIndex: 0,
          explanation: "Charge stays put on an insulator.",
        },
        {
          prompt: "Which is an insulator?",
          options: ["rubber", "copper", "iron", "gold"],
          correctIndex: 0,
          explanation: "Rubber does not let charge flow.",
        },
        {
          prompt: "Static charge builds up mostly on…",
          options: ["insulators", "conductors", "metals", "the human body"],
          correctIndex: 0,
          explanation: "Charge cannot escape from insulators, so it accumulates.",
        },
        {
          prompt: "When glass is rubbed and loses electrons, its charge is…",
          options: ["positive", "negative", "neutral", "zero"],
          correctIndex: 0,
          explanation: "Losing electrons makes glass positive.",
        },
        {
          prompt: "Charging by friction produces charges that are…",
          options: ["equal and opposite on the two materials", "the same on both", "always positive", "always negative"],
          correctIndex: 0,
          explanation: "One becomes + and the other − equally.",
        },
        {
          prompt: "An instrument used to detect charge is the…",
          options: ["electroscope", "thermometer", "barometer", "ammeter"],
          correctIndex: 0,
          explanation: "A gold-leaf electroscope detects charge.",
        },
        {
          prompt: "In an electroscope, a charged object makes the gold leaf…",
          options: ["rise (diverge)", "fall completely", "melt", "change colour"],
          correctIndex: 0,
          explanation: "Like charges repel, so the leaf rises.",
        },
        {
          prompt: "A comb picking up small pieces of paper shows an effect of…",
          options: ["static electricity", "gravity", "magnetism only", "heat"],
          correctIndex: 0,
          explanation: "The charged comb attracts the paper electrostatically.",
        },
        {
          prompt: "Why does charge NOT build up on a metal rod held in the hand?",
          options: [
            "metal is a conductor, so charge flows away through the body",
            "metal has no electrons",
            "metal is an insulator",
            "metal repels all charge",
          ],
          correctIndex: 0,
          explanation: "Charge drains through the conducting body.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how an object becomes negatively charged by friction.",
          answerKey:
            "When two materials are rubbed together, electrons are transferred from one to the other; the material that gains electrons has extra electrons and so becomes negatively charged. Award marks for electron transfer and the link between gaining electrons and negative charge.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which particle actually moves when objects are charged by friction?",
          options: ["the electron", "the proton", "the neutron", "the whole atom"],
          correctIndex: 0,
          answerKey: "Only electrons move; protons stay in the nucleus.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a conductor and an insulator, giving one example of each.",
          answerKey:
            "A conductor lets electric charge move through it easily (e.g. metals/copper); an insulator does not let charge move easily, so charge stays where it is put (e.g. plastic, rubber, glass). Award marks for both definitions and valid examples.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "A plastic ruler rubbed on hair can pick up small pieces of paper. Explain, in terms of charge and electrons, why the ruler becomes charged and why the charge stays on it.",
          answerKey:
            "A strong answer explains that rubbing transfers electrons between the hair and the ruler; the ruler gains (or loses) electrons and so becomes charged (commonly negative if it gains electrons), while the hair takes the opposite charge. The charge stays on the ruler because plastic is an insulator, so the charge cannot flow away; the charged ruler then attracts the light, uncharged pieces of paper. Award marks for electron transfer producing the charge, the insulator keeping the charge, and the attraction of the paper.",
          marks: 5,
        },
      ],
    },
    {
      slug: "forces-between-charges",
      title: "Forces Between Charges and Everyday Electrostatics",
      objective:
        "By the end of the topic, learners should be able to state and apply the law of electric charges, explain attraction and repulsion, and describe everyday effects and dangers of static electricity such as lightning.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Charges **push and pull on each other** across a distance — from a balloon sticking to a wall to a flash of **lightning**.
- **This topic:** the **law of electric charges**; attraction and repulsion; everyday electrostatics — uses and dangers, especially lightning and the lightning conductor.

## The law of electric charges

Charged objects exert **forces** on one another. The **law of electric charges** states:

> **Like charges repel; unlike charges attract.**

- Two **positive** charges **repel** each other.
- Two **negative** charges **repel** each other.
- A **positive** and a **negative** charge **attract** each other.

\`\`\`svg Like charges repel, unlike charges attract
<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two like charges pushing apart and two unlike charges pulling together">
  <circle cx="50" cy="40" r="16" fill="#fecaca" stroke="#b91c1c"/><text x="50" y="45" font-size="12" text-anchor="middle" fill="#b91c1c">+</text>
  <circle cx="120" cy="40" r="16" fill="#fecaca" stroke="#b91c1c"/><text x="120" y="45" font-size="12" text-anchor="middle" fill="#b91c1c">+</text>
  <line x1="70" y1="40" x2="45" y2="40" stroke="#b91c1c" stroke-width="2" marker-end="url(#l)"/>
  <line x1="100" y1="40" x2="125" y2="40" stroke="#b91c1c" stroke-width="2" marker-end="url(#l)"/>
  <text x="85" y="72" font-size="9" text-anchor="middle" fill="#b91c1c">repel</text>
  <circle cx="190" cy="40" r="16" fill="#fecaca" stroke="#b91c1c"/><text x="190" y="45" font-size="12" text-anchor="middle" fill="#b91c1c">+</text>
  <circle cx="260" cy="40" r="16" fill="#bfdbfe" stroke="#1d4ed8"/><text x="260" y="45" font-size="12" text-anchor="middle" fill="#1d4ed8">−</text>
  <line x1="205" y1="40" x2="228" y2="40" stroke="#1d4ed8" stroke-width="2" marker-end="url(#l)"/>
  <line x1="245" y1="40" x2="222" y2="40" stroke="#1d4ed8" stroke-width="2" marker-end="url(#l)"/>
  <text x="225" y="72" font-size="9" text-anchor="middle" fill="#1d4ed8">attract</text>
  <defs><marker id="l" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#555"/></marker></defs>
</svg>
\`\`\`

## Why a charged object attracts small uncharged objects

A charged rod also attracts **light, uncharged** things (like paper). The rod's charge causes the charges in the paper to shift slightly (**induction**): the opposite charge is pulled to the near side and attracted, and this attraction lifts the paper.

## Electric field

The region around a charge where its force can be felt is its **electric field**. Another charge placed in this field experiences a force.

## Everyday electrostatics — useful and harmful

**Useful / everyday effects:**
- A charged comb or balloon picking up paper or sticking to a wall.
- **Photocopiers and laser printers** use static charge to place toner on paper.
- **Electrostatic spray painting** — charged paint spreads evenly over a metal object.

**Harmful effects and dangers:**
- **Lightning** is a giant electrostatic discharge: charge builds up in storm clouds until it jumps to the ground (or another cloud) as a huge spark.
- Sparks from static can be dangerous near **fuel or flammable gases**.
- A small shock when touching a metal object after walking on carpet.

## Lightning conductors and earthing

To protect against static dangers:

- A **lightning conductor** — a metal strip from the top of a tall building to the ground — safely carries lightning's charge to the earth, protecting the building.
- **Earthing (grounding)** connects an object to the ground with a conductor so that excess charge flows safely away, preventing dangerous build-up (e.g. on fuel tankers).

## Common errors and misconceptions

- **Getting the force law backwards** — **like charges repel; unlike charges attract**. Two positives push apart; a positive and a negative pull together.
- **Thinking only opposite charges exert forces** — like charges also exert a force; it is a force of **repulsion**.
- **Believing a lightning conductor attracts lightning to harm the building** — it provides a **safe, easy path** for the charge to reach earth, protecting the building.
- **Confusing charged and uncharged attraction** — a charged object can attract a *neutral* light object (like paper) by inducing opposite charge in it; that is attraction between charged and neutral, not between two charges.`,
      workedExample: `**Task.** (a) Two balloons are each rubbed on hair and hung side by side; they swing apart. Explain why, using the law of charges. (b) Explain how a lightning conductor protects a tall building.

**Part (a) — why the balloons swing apart**
Rubbing each balloon on hair charges them by friction. Because both balloons are rubbed the **same way**, they gain the **same kind of charge** (both become **negative**). By the **law of electric charges**, **like charges repel**. So the two negatively charged balloons **push each other away** and swing apart. (If one were positive and one negative — unlike charges — they would attract and swing together.)

**Part (b) — how a lightning conductor protects a building**
During a storm, huge amounts of static charge build up. Without protection, this charge could jump to a tall building as **lightning** and damage or set fire to it. A **lightning conductor** is a **metal strip** running from the highest point of the building down to the **ground**. Because metal is a good **conductor**, it provides an **easy path** for the lightning's charge to flow **safely to the earth**, instead of through the building. This protects the building and the people inside.

**Conclusion:** the balloons repel because they carry like (negative) charges, and a lightning conductor safely channels the enormous electrostatic discharge of lightning to the ground through a metal conductor.`,
      teachingTip:
        "'Like charges repel, unlike attract' is the one law to drill — pair it with the balloons or two charged rods demonstration. Explain lightning as static electricity 'writ large' to connect the everyday and the dramatic. Emphasise the safety applications (lightning conductor, earthing of fuel tankers) since exam questions often ask learners to apply electrostatics to real dangers, not just recite the law.",
      quiz: [
        {
          prompt: "The law of electric charges states that like charges … and unlike charges …",
          options: ["repel; attract", "attract; repel", "both repel", "both attract"],
          correctIndex: 0,
          explanation: "Like repel, unlike attract.",
        },
        {
          prompt: "Two positive charges will…",
          options: ["repel each other", "attract each other", "do nothing", "become neutral"],
          correctIndex: 0,
          explanation: "Like charges repel.",
        },
        {
          prompt: "A positive and a negative charge will…",
          options: ["attract each other", "repel each other", "do nothing", "explode"],
          correctIndex: 0,
          explanation: "Unlike charges attract.",
        },
        {
          prompt: "Two negative charges will…",
          options: ["repel each other", "attract each other", "cancel out", "become positive"],
          correctIndex: 0,
          explanation: "Like charges repel.",
        },
        {
          prompt: "A charged rod attracts small uncharged pieces of paper by…",
          options: ["induction (shifting charges in the paper)", "gravity", "magnetism", "heating them"],
          correctIndex: 0,
          explanation: "The rod induces opposite charge on the near side of the paper.",
        },
        {
          prompt: "The region around a charge where its force is felt is the…",
          options: ["electric field", "magnetic pole", "gravity well", "current"],
          correctIndex: 0,
          explanation: "It is called the electric field.",
        },
        {
          prompt: "Lightning is best described as…",
          options: ["a large electrostatic discharge", "a magnetic force", "a sound wave", "a chemical reaction"],
          correctIndex: 0,
          explanation: "Lightning is static electricity discharging.",
        },
        {
          prompt: "Charge builds up in storm clouds until it…",
          options: ["jumps to the ground or another cloud as a spark", "disappears slowly", "turns to rain", "becomes heat only"],
          correctIndex: 0,
          explanation: "The built-up charge discharges as lightning.",
        },
        {
          prompt: "A metal strip that carries lightning safely to the ground is a…",
          options: ["lightning conductor", "insulator", "capacitor", "thermometer"],
          correctIndex: 0,
          explanation: "The lightning conductor channels charge to earth.",
        },
        {
          prompt: "Connecting an object to the ground so excess charge flows away is called…",
          options: ["earthing (grounding)", "charging", "insulating", "heating"],
          correctIndex: 0,
          explanation: "Earthing removes dangerous charge build-up.",
        },
        {
          prompt: "Static electricity is dangerous near…",
          options: ["fuel and flammable gases", "water only", "cold air", "plastic"],
          correctIndex: 0,
          explanation: "A spark can ignite fuel or gas.",
        },
        {
          prompt: "Photocopiers and laser printers use static charge to…",
          options: ["place toner on the paper", "heat the room", "cut the paper", "measure time"],
          correctIndex: 0,
          explanation: "Charge positions the toner.",
        },
        {
          prompt: "Two balloons rubbed on hair the same way will…",
          options: ["repel each other", "attract each other", "stick together permanently", "lose all charge"],
          correctIndex: 0,
          explanation: "They carry like charges and repel.",
        },
        {
          prompt: "A lightning conductor works because metal is a good…",
          options: ["conductor", "insulator", "magnet", "reflector"],
          correctIndex: 0,
          explanation: "It gives charge an easy path to earth.",
        },
        {
          prompt: "Electrostatic spray painting works because the charged paint…",
          options: ["spreads evenly over the metal object", "becomes solid instantly", "repels the object", "turns to gas"],
          correctIndex: 0,
          explanation: "Charged droplets coat the object evenly.",
        },
        {
          prompt: "A small shock when touching a metal door after walking on carpet is caused by…",
          options: ["static charge discharging", "the door being hot", "magnetism", "a chemical reaction"],
          correctIndex: 0,
          explanation: "Built-up static discharges through you.",
        },
        {
          prompt: "If two charged objects attract, their charges must be…",
          options: ["unlike (one + and one −)", "both positive", "both negative", "both neutral"],
          correctIndex: 0,
          explanation: "Attraction means unlike charges.",
        },
        {
          prompt: "If two charged objects repel, their charges must be…",
          options: ["alike (both + or both −)", "unlike", "zero", "neutral"],
          correctIndex: 0,
          explanation: "Repulsion means like charges.",
        },
        {
          prompt: "Fuel tankers are earthed before unloading to…",
          options: ["let dangerous static charge flow safely away", "keep them cold", "measure the fuel", "make them heavier"],
          correctIndex: 0,
          explanation: "Earthing prevents a dangerous spark.",
        },
        {
          prompt: "Which pair of statements is correct?",
          options: [
            "like charges repel; unlike charges attract",
            "like charges attract; unlike charges repel",
            "all charges attract",
            "all charges repel",
          ],
          correctIndex: 0,
          explanation: "The law of electric charges.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the law of electric charges.",
          answerKey:
            "Like charges repel; unlike charges attract. (Two positive or two negative charges repel; a positive and a negative charge attract.) Award marks for the complete law.",
          marks: 2,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Two charged objects are brought near each other and attract. Their charges are…",
          options: ["unlike (one positive, one negative)", "both positive", "both negative", "both neutral"],
          correctIndex: 0,
          answerKey: "Attraction means the charges are unlike.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how a lightning conductor protects a tall building.",
          answerKey:
            "A lightning conductor is a metal strip from the top of the building to the ground; because metal is a good conductor, it provides an easy path for the lightning's charge to flow safely to the earth instead of through the building, protecting it from damage or fire. Award marks for the conducting path to earth and the protection it provides.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe two useful applications and two dangers of static electricity, and explain how earthing helps to reduce a danger.",
          answerKey:
            "A strong answer gives two useful applications (e.g. photocopiers/laser printers placing toner, electrostatic spray painting, a charged comb/balloon attracting objects) and two dangers (e.g. lightning as a large discharge, sparks igniting fuel or flammable gas, electric shocks). It explains that earthing (grounding) connects an object to the ground with a conductor so that excess charge flows safely away, preventing a dangerous build-up and spark — for example, earthing a fuel tanker before unloading. Award marks for two valid applications, two valid dangers, and a correct explanation of earthing.",
          marks: 5,
        },
      ],
    },
  ],
};
