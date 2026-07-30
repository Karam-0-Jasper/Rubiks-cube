import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester Two, Period IV: Arthropods and Biological Control of Pests.
export const biologyG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Arthropods and Biological Control of Pests",
  summary:
    "Period IV of the MoE Grade 10 Biology syllabus. Learners study the arthropods — the largest group of animals — their general characteristics and main classes, then examine insects, the pests among them, and how pests can be controlled biologically as well as chemically.",
  topics: [
    {
      slug: "arthropods",
      title: "The Arthropods and Their Classes",
      objective:
        "By the end of the topic, learners should be able to state the general characteristics of arthropods, name and describe the main classes of arthropods, and give examples of each.",
      estimatedMinutes: 150,
      notes: `## What are arthropods?

The **arthropods** (Phylum Arthropoda) are the **largest group of animals** on Earth — more than three-quarters of all known animal species. The name means "**jointed legs**" (*arthron* = joint, *podos* = foot).

## General characteristics of arthropods

All arthropods share these features:

- a hard **exoskeleton** (external skeleton) made of **chitin**, which supports and protects the body;
- a **segmented body** (divided into sections);
- **jointed legs** (and often jointed antennae);
- **bilateral symmetry** (the two sides are mirror images);
- they **moult** (shed the exoskeleton) to grow.

\`\`\`svg An insect body divided into head, thorax and abdomen
<svg viewBox="0 0 260 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Insect body showing head, thorax, abdomen and six legs">
  <ellipse cx="55" cy="65" rx="22" ry="18" fill="#bbf7d0" stroke="#065f46"/>
  <ellipse cx="105" cy="65" rx="26" ry="20" fill="#86efac" stroke="#065f46"/>
  <ellipse cx="175" cy="65" rx="40" ry="22" fill="#bbf7d0" stroke="#065f46"/>
  <text x="55" y="30" font-size="9" text-anchor="middle" fill="#065f46">head</text>
  <text x="105" y="22" font-size="9" text-anchor="middle" fill="#065f46">thorax</text>
  <text x="185" y="30" font-size="9" text-anchor="middle" fill="#065f46">abdomen</text>
  <g stroke="#065f46" stroke-width="2">
    <line x1="90" y1="80" x2="80" y2="110"/><line x1="105" y1="82" x2="105" y2="112"/><line x1="120" y1="80" x2="130" y2="110"/>
  </g>
  <line x1="38" y1="55" x2="20" y2="40" stroke="#065f46" stroke-width="1.5"/>
  <line x1="40" y1="60" x2="18" y2="55" stroke="#065f46" stroke-width="1.5"/>
</svg>
\`\`\`

## The main classes of arthropods

Arthropods are divided into classes by the number of body parts and legs:

| Class | Body parts | Legs | Antennae | Examples |
|---|---|---|---|---|
| **Insecta** (insects) | head, thorax, abdomen (3) | **6** (three pairs) | 1 pair | ant, bee, housefly, mosquito |
| **Arachnida** (arachnids) | cephalothorax + abdomen (2) | **8** (four pairs) | none | spider, scorpion, tick |
| **Crustacea** (crustaceans) | cephalothorax + abdomen | many (5+ pairs) | 2 pairs | crab, lobster, prawn |
| **Myriapoda** (myriapods) | head + long segmented body | very many | 1 pair | millipede, centipede |

### Quick identification
- **Six legs, three body parts → an insect.**
- **Eight legs, no antennae → an arachnid.**
- **Two pairs of antennae, mostly aquatic → a crustacean.**
- **Many legs, worm-like body → a myriapod.**

## Why arthropods matter

Arthropods are hugely important: insects **pollinate** crops and flowers; crustaceans are **food**; but some are serious **pests** and **disease carriers** (the mosquito spreads malaria). Understanding them is the basis of the next topic — controlling pests.`,
      workedExample: `**Task.** A learner finds three small animals: (A) has 6 legs and three body parts; (B) has 8 legs, no antennae; (C) is a crab from the river. Classify each into its arthropod class and justify your choice.

**Animal A — 6 legs, three body parts → Class Insecta (an insect)**
- **Justification:** insects are defined by a body in **three parts** (head, thorax, abdomen) and **six legs** (three pairs). This is the surest quick test for an insect.

**Animal B — 8 legs, no antennae → Class Arachnida (an arachnid)**
- **Justification:** arachnids (spiders, scorpions, ticks) have **eight legs** (four pairs), **two** body parts (cephalothorax + abdomen) and **no antennae**. The eight legs plus absence of antennae rule out insects.

**Animal C — a crab → Class Crustacea (a crustacean)**
- **Justification:** crustaceans (crabs, lobsters, prawns) are mostly **aquatic**, have **two pairs of antennae** and many legs, and a hard shell. A river crab fits the crustacean class.

**Conclusion:** all three are arthropods (jointed legs, exoskeleton, segmented body), but the number of legs, body parts and antennae place them in different classes — insect, arachnid and crustacean respectively.`,
      teachingTip:
        "The 'count the legs' rule is the fastest classifier and a guaranteed exam winner: six legs = insect, eight legs = arachnid. Reinforce with local examples learners can picture — housefly (insect), spider (arachnid), river crab (crustacean), millipede (myriapod). Stress that the spider is NOT an insect, a very common misconception, precisely because it has eight legs and no antennae.",
      quiz: [
        {
          prompt: "Arthropods are the … group of animals on Earth.",
          options: ["largest", "smallest", "rarest", "least studied"],
          correctIndex: 0,
          explanation: "Arthropods make up over three-quarters of animal species.",
        },
        {
          prompt: "The name 'arthropod' means…",
          options: ["jointed legs", "soft body", "no skeleton", "many eyes"],
          correctIndex: 0,
          explanation: "Arthron = joint, podos = foot.",
        },
        {
          prompt: "The hard outer covering of an arthropod is the…",
          options: ["exoskeleton", "endoskeleton", "shell only", "cell wall"],
          correctIndex: 0,
          explanation: "Arthropods have an external skeleton (exoskeleton).",
        },
        {
          prompt: "The exoskeleton is made of…",
          options: ["chitin", "bone", "cellulose", "calcium only"],
          correctIndex: 0,
          explanation: "Arthropod exoskeletons are made of chitin.",
        },
        {
          prompt: "To grow, an arthropod must…",
          options: ["moult (shed its exoskeleton)", "eat less", "grow a backbone", "lose its legs"],
          correctIndex: 0,
          explanation: "The rigid exoskeleton is shed to allow growth.",
        },
        {
          prompt: "An insect has how many legs?",
          options: ["6", "8", "4", "10"],
          correctIndex: 0,
          explanation: "Insects have six legs (three pairs).",
        },
        {
          prompt: "An insect's body is divided into how many parts?",
          options: ["three (head, thorax, abdomen)", "two", "one", "five"],
          correctIndex: 0,
          explanation: "Head, thorax and abdomen — three parts.",
        },
        {
          prompt: "An arachnid has how many legs?",
          options: ["8", "6", "10", "4"],
          correctIndex: 0,
          explanation: "Arachnids have eight legs (four pairs).",
        },
        {
          prompt: "Which is an arachnid?",
          options: ["spider", "housefly", "crab", "millipede"],
          correctIndex: 0,
          explanation: "Spiders are arachnids (eight legs, no antennae).",
        },
        {
          prompt: "Which is an insect?",
          options: ["mosquito", "scorpion", "lobster", "centipede"],
          correctIndex: 0,
          explanation: "The mosquito is an insect (six legs, three body parts).",
        },
        {
          prompt: "Crabs, lobsters and prawns belong to which class?",
          options: ["Crustacea", "Insecta", "Arachnida", "Myriapoda"],
          correctIndex: 0,
          explanation: "These are crustaceans.",
        },
        {
          prompt: "Millipedes and centipedes belong to which class?",
          options: ["Myriapoda", "Insecta", "Crustacea", "Arachnida"],
          correctIndex: 0,
          explanation: "Many-legged, worm-like bodies are myriapods.",
        },
        {
          prompt: "How many pairs of antennae does a crustacean have?",
          options: ["two", "one", "none", "four"],
          correctIndex: 0,
          explanation: "Crustaceans have two pairs of antennae.",
        },
        {
          prompt: "Arachnids have how many pairs of antennae?",
          options: ["none", "one", "two", "three"],
          correctIndex: 0,
          explanation: "Arachnids have no antennae.",
        },
        {
          prompt: "A quick way to tell an insect from an arachnid is to count the…",
          options: ["legs", "eyes", "wings only", "antennae only"],
          correctIndex: 0,
          explanation: "Six legs = insect; eight legs = arachnid.",
        },
        {
          prompt: "Which body plan describes an insect?",
          options: ["head, thorax, abdomen with 6 legs", "one part with 8 legs", "many segments with many legs", "no legs at all"],
          correctIndex: 0,
          explanation: "Three body parts and six legs define insects.",
        },
        {
          prompt: "Arthropods have which kind of symmetry?",
          options: ["bilateral", "radial", "none", "spherical"],
          correctIndex: 0,
          explanation: "Their two sides are mirror images (bilateral).",
        },
        {
          prompt: "A common misconception is that a spider is an insect. It is actually an…",
          options: ["arachnid", "crustacean", "myriapod", "annelid"],
          correctIndex: 0,
          explanation: "Eight legs and no antennae make the spider an arachnid.",
        },
        {
          prompt: "Which arthropod feature supports and protects the body?",
          options: ["the exoskeleton", "a backbone", "soft skin", "a shell of bone"],
          correctIndex: 0,
          explanation: "The chitin exoskeleton supports and protects.",
        },
        {
          prompt: "Insects such as bees are important because they…",
          options: ["pollinate crops and flowers", "have backbones", "cannot move", "are all pests"],
          correctIndex: 0,
          explanation: "Many insects are vital pollinators.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State three general characteristics shared by all arthropods.",
          answerKey:
            "Any three: a hard exoskeleton made of chitin; a segmented body; jointed legs; bilateral symmetry; they moult to grow. Award a mark per valid characteristic.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Complete: an insect has ___ legs and ___ body parts; an arachnid has ___ legs.",
          answerKey:
            "An insect has 6 legs and 3 body parts; an arachnid has 8 legs. Award a mark for each correct value.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "An animal with eight legs and no antennae belongs to which class?",
          options: ["Arachnida", "Insecta", "Crustacea", "Myriapoda"],
          correctIndex: 0,
          answerKey: "Eight legs and no antennae identify an arachnid.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Name the four main classes of arthropods and describe how you would tell them apart, giving an example of each.",
          answerKey:
            "A strong answer names Insecta, Arachnida, Crustacea and Myriapoda and distinguishes them: insects — three body parts, six legs, one pair of antennae (e.g. housefly); arachnids — two body parts, eight legs, no antennae (e.g. spider); crustaceans — two pairs of antennae, many legs, mostly aquatic (e.g. crab); myriapods — long segmented body with many legs (e.g. millipede). Award marks for correctly naming the classes and distinguishing features with examples.",
          marks: 6,
        },
      ],
    },
    {
      slug: "biological-control-of-pests",
      title: "Insect Pests and Biological Control",
      objective:
        "By the end of the topic, learners should be able to explain what a pest is, describe how insect pests damage crops and spread disease, and compare biological and chemical methods of controlling pests.",
      estimatedMinutes: 150,
      notes: `## What is a pest?

A **pest** is any organism that is **harmful to humans, crops or livestock**. Many pests are insects (Class Insecta), which are numerous, breed quickly and can spread widely.

## How insect pests harm us

- **Damage to crops:** locusts, armyworms, aphids and weevils eat leaves, stems, grain and stored food, reducing harvests.
- **Spread of disease:** some insects carry (are **vectors** of) disease — the **mosquito** spreads malaria and yellow fever; the **housefly** spreads diarrhoea and cholera by contaminating food; the **tsetse fly** spreads sleeping sickness.
- **Harm to livestock:** ticks and biting flies weaken animals and spread animal diseases.

## Controlling pests

Pests can be controlled in two main ways.

### 1. Chemical control
Using **pesticides** (insecticides) to kill pests.

- **Advantages:** fast-acting; can treat large areas quickly.
- **Disadvantages:** can **harm useful organisms** (bees, natural predators, fish); pests may become **resistant**; chemicals can **pollute** water and soil and leave residues on food; they can be **costly**.

### 2. Biological control
Using **living organisms** — the pest's natural enemies — to control it.

- **Predators:** introducing an animal that eats the pest (e.g. **ladybirds eat aphids**; certain fish eat mosquito larvae).
- **Parasites:** tiny wasps that lay eggs in pest insects.
- **Pathogens:** bacteria or fungi that cause disease in the pest.
- **Advantages:** does not pollute; targets the pest specifically; often self-sustaining once established; no chemical residues.
- **Disadvantages:** works **slowly**; the introduced organism must be chosen carefully so it does not itself become a pest.

## Integrated pest management

The best approach is often **integrated pest management (IPM)** — combining biological control, careful use of chemicals, good farming practices (crop rotation, cleanliness) and resistant crop varieties — to control pests while protecting the environment.`,
      workedExample: `**Task.** A farmer's cassava is being destroyed by aphids. Compare using a chemical pesticide with introducing ladybirds (a biological control), and recommend an approach.

**Option 1 — chemical pesticide**
- **How it works:** spraying an insecticide kills the aphids quickly.
- **Advantages:** fast; treats the whole field at once.
- **Disadvantages:** may also kill helpful insects like bees and the aphids' natural predators; aphids can become **resistant**; the chemical may pollute water and soil and leave residue on the cassava; it costs money to keep buying.

**Option 2 — biological control (ladybirds)**
- **How it works:** ladybirds are natural **predators** that eat aphids, so releasing them reduces the aphid population.
- **Advantages:** no pollution or chemical residue; targets the aphids specifically; once established the ladybirds keep working on their own.
- **Disadvantages:** works more **slowly** than spraying; the ladybirds need the right conditions to survive.

**Recommendation**
Use **integrated pest management**: introduce ladybirds as the main, environment-friendly control, and use a small, careful amount of pesticide only if the aphid attack is severe, together with good farming practices. This protects the harvest while limiting harm to useful organisms and the environment.`,
      teachingTip:
        "Frame biological control as 'setting the pest's natural enemies to work'. The ladybird-and-aphid example is the classic case learners remember. Draw the comparison as a two-column table (chemical vs biological) with speed, cost, pollution and resistance as the rows — this structure is exactly what earns marks in the 'compare' questions, and it naturally leads to the balanced answer of integrated pest management.",
      quiz: [
        {
          prompt: "A pest is an organism that is…",
          options: ["harmful to humans, crops or livestock", "always helpful", "never an insect", "too small to matter"],
          correctIndex: 0,
          explanation: "Pests damage humans, crops or animals.",
        },
        {
          prompt: "Which pest spreads malaria?",
          options: ["the mosquito", "the ladybird", "the bee", "the earthworm"],
          correctIndex: 0,
          explanation: "The mosquito is the vector of malaria.",
        },
        {
          prompt: "An insect that carries and spreads a disease is called a…",
          options: ["vector", "predator", "parasite host", "pollinator"],
          correctIndex: 0,
          explanation: "A disease-carrying organism is a vector.",
        },
        {
          prompt: "The housefly spreads disease by…",
          options: ["contaminating food", "eating crops only", "pollinating flowers", "killing aphids"],
          correctIndex: 0,
          explanation: "Houseflies contaminate food, spreading diarrhoea/cholera.",
        },
        {
          prompt: "Chemical control of pests uses…",
          options: ["pesticides (insecticides)", "natural predators", "crop rotation only", "clean water"],
          correctIndex: 0,
          explanation: "Chemical control means applying pesticides.",
        },
        {
          prompt: "One disadvantage of chemical pesticides is that they can…",
          options: ["harm useful organisms like bees", "never kill pests", "improve the soil", "cost nothing"],
          correctIndex: 0,
          explanation: "Pesticides can kill helpful organisms too.",
        },
        {
          prompt: "Over time, pests may become … to a pesticide.",
          options: ["resistant", "extinct instantly", "friendly", "larger only"],
          correctIndex: 0,
          explanation: "Repeated use can breed resistant pests.",
        },
        {
          prompt: "Biological control uses … to control pests.",
          options: ["living organisms (natural enemies)", "poisons only", "fire", "fertiliser"],
          correctIndex: 0,
          explanation: "It uses the pest's natural enemies.",
        },
        {
          prompt: "Ladybirds are used to control aphids because ladybirds are their…",
          options: ["predators", "parasites' hosts", "food", "vectors"],
          correctIndex: 0,
          explanation: "Ladybirds eat aphids — they are predators.",
        },
        {
          prompt: "Which fish can be used to control mosquitoes?",
          options: ["fish that eat mosquito larvae", "fish that eat aphids", "fish that pollinate", "no fish can"],
          correctIndex: 0,
          explanation: "Larvae-eating fish reduce mosquito numbers.",
        },
        {
          prompt: "An advantage of biological control is that it…",
          options: ["does not pollute the environment", "works instantly", "kills all insects", "needs no living organisms"],
          correctIndex: 0,
          explanation: "Biological control avoids chemical pollution.",
        },
        {
          prompt: "A disadvantage of biological control is that it…",
          options: ["works slowly", "always pollutes", "is instant", "kills bees"],
          correctIndex: 0,
          explanation: "Natural control takes time to reduce pest numbers.",
        },
        {
          prompt: "Locusts and armyworms harm us mainly by…",
          options: ["eating crops", "spreading malaria", "pollinating", "cleaning water"],
          correctIndex: 0,
          explanation: "They destroy crops by feeding on them.",
        },
        {
          prompt: "Combining biological, chemical and farming methods is called…",
          options: ["integrated pest management", "chemical control", "monoculture", "deforestation"],
          correctIndex: 0,
          explanation: "IPM combines several methods.",
        },
        {
          prompt: "Tiny wasps that lay eggs in pest insects are used as a form of…",
          options: ["biological control (parasites)", "chemical control", "pollution", "fertiliser"],
          correctIndex: 0,
          explanation: "Parasitic wasps are a biological control agent.",
        },
        {
          prompt: "Chemical residues from pesticides can end up…",
          options: ["on food and in water", "improving harvests only", "helping bees", "nowhere"],
          correctIndex: 0,
          explanation: "Residues contaminate food and water.",
        },
        {
          prompt: "Which is an advantage of chemical control?",
          options: ["it acts fast over large areas", "it never harms other organisms", "it is always free", "it self-sustains"],
          correctIndex: 0,
          explanation: "Pesticides work quickly across big areas.",
        },
        {
          prompt: "Before releasing a biological control agent, it must be chosen carefully so it does not…",
          options: ["become a pest itself", "eat the pest", "die immediately", "help the crop"],
          correctIndex: 0,
          explanation: "An introduced organism could become a new problem.",
        },
        {
          prompt: "The tsetse fly spreads which disease?",
          options: ["sleeping sickness", "malaria", "cholera", "measles"],
          correctIndex: 0,
          explanation: "The tsetse fly transmits sleeping sickness.",
        },
        {
          prompt: "Good farming practices that help control pests include…",
          options: ["crop rotation and cleanliness", "leaving crops to rot", "removing all predators", "spraying only"],
          correctIndex: 0,
          explanation: "Crop rotation and cleanliness reduce pest build-up.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a 'pest' and give two ways insect pests can harm humans.",
          answerKey:
            "A pest is an organism harmful to humans, crops or livestock. Two harms (any two): damaging/eating crops and stored food; spreading disease as vectors (e.g. mosquito–malaria, housefly–cholera); harming livestock. Award marks for the definition and two valid harms.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which is an example of biological control?",
          options: [
            "releasing ladybirds to eat aphids",
            "spraying insecticide on a field",
            "burning crop residues",
            "adding fertiliser",
          ],
          correctIndex: 0,
          answerKey: "Using a natural predator (ladybirds) is biological control.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State one advantage and one disadvantage of chemical pest control.",
          answerKey:
            "Advantage: fast-acting / treats large areas quickly. Disadvantage (any one): harms useful organisms; pests develop resistance; pollutes soil/water; leaves residues on food; costly. Award a mark for each.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare biological and chemical methods of pest control, and explain why integrated pest management is often the best approach.",
          answerKey:
            "A strong answer compares the two methods: chemical control (pesticides) is fast and covers large areas but can harm useful organisms, cause resistance, pollute and leave residues; biological control (natural predators, parasites, pathogens) does not pollute, targets the pest and can self-sustain, but works slowly and the agent must be chosen carefully. It then explains that integrated pest management combines biological control, careful chemical use, good farming practices and resistant varieties to control pests effectively while protecting the environment. Award marks for a balanced comparison and a clear justification of IPM.",
          marks: 5,
        },
      ],
    },
  ],
};
