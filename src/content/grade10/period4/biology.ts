import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 10,
// Semester Two, Period IV: Arthropods and Biological Control of Pests.
// Topics follow the six CONTENTS items: (1) arthropod characteristics and
// classification; (2) metamorphosis and molting; (3) insect vectors;
// (4) caste system in social insects; (5) economic importance of social
// insects; (6) pests and their control.
export const biologyG10P4: PeriodContent = {
  grade: 10,
  number: 4,
  title: "Arthropods and Biological Control of Pests",
  summary:
    "Period IV of the MoE Grade 10 Biology syllabus. Learners classify the arthropods and describe their characteristics, study metamorphosis and molting, examine insect vectors of disease, learn the caste system and economic importance of social insects such as honey bees and termites, and compare chemical and biological control of pests.",
  topics: [
    // source: OpenStax — Concepts of Biology, 15.3 Flatworms, Nematodes, and Arthropods (https://openstax.org/books/concepts-biology/pages/15-3-flatworms-nematodes-and-arthropods)
    {
      slug: "arthropods",
      title: "Arthropods: Characteristics and Classification",
      objective:
        "By the end of the topic, learners should be able to describe the general characteristics of arthropods, classify them into their main groups, and relate their body segments and mouthparts to their life processes.",
      estimatedMinutes: 120,
      notes: `## What are arthropods?

- **Arthropoda** = the **largest** and most successful animal phylum — about **85%** of all known animal species.
- The name means **"jointed legs"** (*arthron* = joint, *podos* = foot).

## General characteristics

- **Jointed appendages** (legs, antennae) — the defining feature.
- **Exoskeleton** of **chitin** — a hard outer covering for protection and support; must be shed (molted) to grow.
- **Segmented body**, often fused into regions: **head, thorax, abdomen**.
- **Bilateral symmetry** — left and right halves are mirror images.
- **Jointed limbs**, a ventral nervous system and an open circulatory system.

## Body segments and mouthparts

- Segments group into a **head** (senses, mouthparts), **thorax** (legs, wings) and **abdomen** (digestion, reproduction).
- **Mouthparts** are adapted to the diet: chewing (grasshopper), piercing-sucking (mosquito), sponging (housefly).

## Life processes

- **Respiration:** insects breathe through **tracheae** (air tubes) opening at **spiracles**; aquatic forms use gills.
- **Feeding:** by adapted mouthparts (above).
- **Growth:** by **molting** the exoskeleton.

## The main groups (classes/subphyla)

| Group | Legs | Body regions | Examples |
| --- | --- | --- | --- |
| **Insecta (Hexapoda)** | 6 (three pairs) | head, thorax, abdomen | grasshopper, bee, butterfly, mosquito |
| **Arachnida (Chelicerata)** | 8 | cephalothorax + abdomen | spiders, scorpions, ticks |
| **Crustacea** | many (varies) | cephalothorax + abdomen | crab, crayfish, shrimp |
| **Myriapoda** | many | head + long segmented trunk | centipedes, millipedes |

\`\`\`svg An insect body divided into head, thorax and abdomen with three pairs of legs
<svg viewBox="0 0 300 120" role="img" aria-label="Insect body: head, thorax, abdomen and three pairs of legs">
  <ellipse cx="50" cy="60" rx="22" ry="18" fill="none" stroke="currentColor"/>
  <ellipse cx="110" cy="60" rx="28" ry="20" fill="none" stroke="currentColor"/>
  <ellipse cx="200" cy="60" rx="55" ry="22" fill="none" stroke="currentColor"/>
  <g stroke="currentColor" stroke-width="2">
    <line x1="95" y1="76" x2="85" y2="100"/><line x1="110" y1="80" x2="110" y2="104"/><line x1="128" y1="76" x2="140" y2="100"/>
  </g>
  <g font-size="9" fill="currentColor" text-anchor="middle">
    <text x="50" y="30">head</text><text x="110" y="26">thorax</text><text x="200" y="28">abdomen</text><text x="110" y="116">3 pairs of legs</text>
  </g>
</svg>
\`\`\`

## Why arthropods are so successful

- The **exoskeleton** resists water loss and gives support and protection.
- **Jointed limbs** allow varied movement.
- **Small size** and short life cycles allow rapid reproduction and adaptation.

## Common errors and misconceptions

- **"All arthropods are insects"** — insects have **6 legs**; spiders (8 legs) are arachnids, crabs are crustaceans.
- **"Arthropods have bones"** — they have an **external** skeleton (exoskeleton) of chitin, not internal bones.
- **Spiders are insects** — spiders are **arachnids** (8 legs, two body regions), not insects.
- **The exoskeleton grows with the animal** — it does not; the animal must **molt** it to grow.`,
      workedExample: `**Question:** A learner collects three small animals: A has six legs and three body regions; B has eight legs and two body regions; C lives in water, has a hard shell and many legs. Classify each and give the reason.

**Solution**

*Animal A — six legs, three body regions (head, thorax, abdomen).*
- This is the pattern of an **insect (Insecta)**. Six legs and the head–thorax–abdomen plan are the key features. Example: grasshopper.

*Animal B — eight legs, two body regions.*
- Eight legs and a cephalothorax + abdomen mark an **arachnid (Arachnida)**. Example: spider. (It is **not** an insect, which would have six legs.)

*Animal C — aquatic, hard shell, many legs.*
- An aquatic arthropod with a hard exoskeleton and many limbs is a **crustacean (Crustacea)**. Example: crab or crayfish.

*Common thread.* All three are **arthropods**: they have **jointed legs**, an **exoskeleton of chitin** and a **segmented body**. They differ in the number of legs and body regions, which is how we place them in classes.

**Answer:** A = insect (6 legs), B = arachnid (8 legs), C = crustacean (aquatic, hard shell) — all arthropods classified by leg number and body regions.`,
      quiz: [
        { prompt: "The name 'arthropod' means", options: ["jointed legs", "hard shell", "many eyes", "no backbone"], correctIndex: 0, explanation: "Arthron = joint, podos = foot." },
        { prompt: "The exoskeleton of arthropods is made of", options: ["chitin", "cellulose", "bone", "calcium only"], correctIndex: 0, explanation: "Chitin forms the hard outer covering." },
        { prompt: "Insects have how many legs?", options: ["six", "eight", "ten", "four"], correctIndex: 0, explanation: "Insects have three pairs (six) legs." },
        { prompt: "Spiders belong to the class", options: ["Arachnida", "Insecta", "Crustacea", "Myriapoda"], correctIndex: 0, explanation: "Spiders are arachnids with eight legs." },
        { prompt: "The three body regions of an insect are", options: ["head, thorax, abdomen", "head, chest, tail", "head, body, legs", "front, middle, back"], correctIndex: 0, explanation: "Head, thorax and abdomen." },
        { prompt: "Arthropods must molt because", options: ["the exoskeleton cannot grow with them", "they have bones", "they photosynthesise", "they lay eggs"], correctIndex: 0, explanation: "They shed the hard exoskeleton to grow." },
        { prompt: "Crabs and crayfish belong to the class", options: ["Crustacea", "Insecta", "Arachnida", "Myriapoda"], correctIndex: 0, explanation: "They are crustaceans." },
        { prompt: "Insects breathe through tiny air tubes called", options: ["tracheae", "lungs", "gills only", "veins"], correctIndex: 0, explanation: "Tracheae open at spiracles." },
        { prompt: "Which is the largest animal phylum?", options: ["Arthropoda", "Chordata", "Annelida", "Porifera"], correctIndex: 0, explanation: "Arthropods make up about 85% of animal species." },
        { prompt: "Centipedes and millipedes belong to", options: ["Myriapoda", "Insecta", "Crustacea", "Arachnida"], correctIndex: 0, explanation: "Myriapods have many legs on a long trunk." },
        { prompt: "The defining feature of arthropods is their", options: ["jointed appendages", "green colour", "backbone", "single cell"], correctIndex: 0, explanation: "Jointed legs give the phylum its name." },
        { prompt: "Arthropods show which symmetry?", options: ["bilateral", "radial", "none", "spherical"], correctIndex: 0, explanation: "Left and right halves are mirror images." },
        { prompt: "A grasshopper feeds using", options: ["chewing mouthparts", "sponging mouthparts", "roots", "a beak"], correctIndex: 0, explanation: "Grasshoppers chew plant parts." },
        { prompt: "Which arthropod has eight legs and two body regions?", options: ["spider", "grasshopper", "crab", "housefly"], correctIndex: 0, explanation: "A spider is an arachnid." },
        { prompt: "The exoskeleton helps arthropods by", options: ["preventing water loss and giving support", "making food", "storing blood", "growing continuously"], correctIndex: 0, explanation: "It protects, supports and reduces water loss." },
        { prompt: "The body region bearing the legs and wings of an insect is the", options: ["thorax", "head", "abdomen", "tail"], correctIndex: 0, explanation: "Legs and wings attach to the thorax." },
        { prompt: "Which statement is TRUE?", options: ["All insects are arthropods but not all arthropods are insects", "All arthropods are insects", "Spiders are insects", "Crabs have six legs"], correctIndex: 0, explanation: "Insects are one class within Arthropoda." },
        { prompt: "The openings through which insects take in air are", options: ["spiracles", "stomata", "gills", "pores"], correctIndex: 0, explanation: "Spiracles connect to the tracheae." },
        { prompt: "Arthropods have a skeleton that is", options: ["external (exoskeleton)", "internal bones", "made of cellulose", "absent"], correctIndex: 0, explanation: "The skeleton is on the outside." },
        { prompt: "Rapid reproduction and adaptation in arthropods is helped by their", options: ["small size and short life cycles", "large size", "long lifespan", "lack of legs"], correctIndex: 0, explanation: "Small size and quick breeding aid success." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four general characteristics of arthropods.", answerKey: "Any four: jointed appendages; exoskeleton of chitin; segmented body (head, thorax, abdomen); bilateral symmetry; molting to grow. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which class has six legs and three body regions?", options: ["Arachnida", "Insecta", "Crustacea", "Myriapoda"], correctIndex: 1, answerKey: "Insecta. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the four main groups of arthropods and give one example of each.", answerKey: "Insecta – grasshopper/bee; Arachnida – spider/scorpion; Crustacea – crab/crayfish; Myriapoda – centipede/millipede. 1 mark per group + example, max 8 (capped).", marks: 6 },
        { type: "SHORT_ANSWER", prompt: "Explain why an arthropod must molt in order to grow.", answerKey: "The exoskeleton of chitin is hard and cannot expand, so as the animal grows the old exoskeleton is shed (molting/ecdysis) and a new, larger one forms. Award marks for the rigid exoskeleton and the shedding.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the features that make arthropods the most successful group of animals on Earth.", answerKey: "Exoskeleton (protection, support, reduced water loss) (4); jointed limbs allowing varied movement (3); segmentation and specialised regions/mouthparts for varied diets (4); small size and short life cycles allowing rapid reproduction and adaptation (4). Reward clear links between feature and success.", marks: 15 },
      ],
    },
    // source: LibreTexts — Virginia Cooperative Extension Gardener Handbook, 03: Entomology (https://bio.libretexts.org/Bookshelves/Botany/Virginia_Cooperative_Extension_Gardener_Handbook/03:_Entomology)
    {
      slug: "metamorphosis-and-molting",
      title: "Metamorphosis and Molting in Arthropods",
      objective:
        "By the end of the topic, learners should be able to explain molting (ecdysis) and compare complete and incomplete metamorphosis in insects, naming the stages of each.",
      estimatedMinutes: 100,
      notes: `## Molting (ecdysis)

- Arthropods grow inside a hard **exoskeleton** that cannot stretch.
- As the animal grows the exoskeleton becomes too tight and is **shed** — this is **molting (ecdysis)**.
- A new, larger, soft exoskeleton underneath then hardens.
- Each growth stage between molts is called an **instar**.

## Metamorphosis

**Metamorphosis** = the series of changes in body form from young to adult. Two main types:

### Complete metamorphosis (four stages)

**Egg → Larva → Pupa → Adult**

- The **larva** (e.g. caterpillar, maggot, grub) looks completely different from the adult and often eats different food.
- In the **pupa**, the larval tissues break down and rebuild into the adult.
- Examples: **butterfly, housefly, mosquito, beetle, bee**.

\`\`\`svg Complete metamorphosis: egg, larva, pupa, adult
<svg viewBox="0 0 340 90" role="img" aria-label="Complete metamorphosis stages">
  <g font-size="9" text-anchor="middle" fill="currentColor">
    <circle cx="35" cy="40" r="9" fill="none" stroke="currentColor"/><text x="35" y="70">egg</text>
    <path d="M95 40 q 10 -12 22 0 q 10 12 22 0" fill="none" stroke="currentColor"/><text x="117" y="70">larva</text>
    <ellipse cx="200" cy="40" rx="14" ry="9" fill="none" stroke="currentColor"/><text x="200" y="70">pupa</text>
    <circle cx="290" cy="40" r="7" fill="none" stroke="currentColor"/><line x1="278" y1="34" x2="266" y2="28" stroke="currentColor"/><line x1="302" y1="34" x2="314" y2="28" stroke="currentColor"/><text x="290" y="70">adult</text>
    <line x1="48" y1="40" x2="90" y2="40" stroke="currentColor"/><line x1="140" y1="40" x2="184" y2="40" stroke="currentColor"/><line x1="216" y1="40" x2="280" y2="40" stroke="currentColor"/>
  </g>
</svg>
\`\`\`

### Incomplete metamorphosis (three stages)

**Egg → Nymph → Adult**

- The **nymph** looks like a small adult (a "miniature adult") and eats the same food; it grows and molts, with wings developing as **wing buds**.
- There is **no pupa**.
- Examples: **grasshopper, locust, cockroach, termite, true bugs**.

## Comparing the two types

| Feature | Complete | Incomplete |
| --- | --- | --- |
| Stages | 4 (egg, larva, pupa, adult) | 3 (egg, nymph, adult) |
| Pupa | Present | Absent |
| Young form | Larva (unlike adult) | Nymph (like a small adult) |
| Young's food | Often different from adult | Same as adult |
| Examples | butterfly, housefly, mosquito, beetle | grasshopper, cockroach, termite |

## Common errors and misconceptions

- **"Molting and metamorphosis are the same"** — molting is **shedding the exoskeleton**; metamorphosis is the **change in body form** (which involves several molts).
- **"A nymph is a larva"** — a **nymph** (incomplete) resembles the adult; a **larva** (complete) does not.
- **"All insects have a pupa"** — only insects with **complete** metamorphosis have a pupa.
- **The caterpillar and butterfly are different animals** — they are the same insect at different **stages** of complete metamorphosis.`,
      workedExample: `**Question:** A learner rears two insects. Insect P hatches as a wingless "miniature adult" that grows larger at each molt and eats the same leaves as the adult. Insect Q hatches as a worm-like grub that eats rotting fruit, then forms a hard case before an adult fly emerges. Identify the type of metamorphosis in each and name the missing stage.

**Solution**

*Insect P.* The young is a **miniature adult** eating the **same food** and simply growing at each molt, with **no case/pupa** — this is **incomplete metamorphosis**. Its stages are **egg → nymph → adult**, so the young form is a **nymph** and there is **no pupa**.

*Insect Q.* The young is a **grub (larva)** that looks nothing like the adult and eats **different food**, then forms a **hard case** (pupa) before the adult fly appears — this is **complete metamorphosis**. Its stages are **egg → larva → pupa → adult**; the "hard case" stage is the **pupa**.

**Answer:** Insect P undergoes **incomplete** metamorphosis (egg → nymph → adult, no pupa); Insect Q undergoes **complete** metamorphosis (egg → larva → pupa → adult), with the pupa being the resting stage where the body rebuilds.`,
      quiz: [
        { prompt: "Shedding the exoskeleton to grow is called", options: ["molting (ecdysis)", "metamorphosis", "pollination", "respiration"], correctIndex: 0, explanation: "Molting sheds the hard exoskeleton." },
        { prompt: "Complete metamorphosis has how many stages?", options: ["four", "three", "two", "five"], correctIndex: 0, explanation: "Egg, larva, pupa, adult." },
        { prompt: "The stages of complete metamorphosis are", options: ["egg, larva, pupa, adult", "egg, nymph, adult", "larva, pupa, egg", "nymph, pupa, adult"], correctIndex: 0, explanation: "Egg → larva → pupa → adult." },
        { prompt: "Incomplete metamorphosis has the stages", options: ["egg, nymph, adult", "egg, larva, pupa, adult", "nymph, pupa, adult", "egg, pupa, adult"], correctIndex: 0, explanation: "Egg → nymph → adult, no pupa." },
        { prompt: "In complete metamorphosis, the resting stage is the", options: ["pupa", "nymph", "egg", "instar"], correctIndex: 0, explanation: "The pupa is where the body rebuilds." },
        { prompt: "A nymph is", options: ["a young that resembles a small adult", "a worm-like larva", "a resting stage", "an adult"], correctIndex: 0, explanation: "Nymphs look like miniature adults." },
        { prompt: "Which insect undergoes complete metamorphosis?", options: ["butterfly", "grasshopper", "cockroach", "termite"], correctIndex: 0, explanation: "Butterflies have egg, larva, pupa, adult." },
        { prompt: "Which insect undergoes incomplete metamorphosis?", options: ["grasshopper", "housefly", "mosquito", "beetle"], correctIndex: 0, explanation: "Grasshoppers have egg, nymph, adult." },
        { prompt: "A caterpillar is the ____ stage of a butterfly.", options: ["larva", "nymph", "pupa", "adult"], correctIndex: 0, explanation: "The caterpillar is the larva." },
        { prompt: "A growth stage between molts is called an", options: ["instar", "pupa", "nymph", "egg"], correctIndex: 0, explanation: "Instars are stages between molts." },
        { prompt: "In incomplete metamorphosis there is no", options: ["pupa", "egg", "adult", "nymph"], correctIndex: 0, explanation: "No pupa stage occurs." },
        { prompt: "In complete metamorphosis the larva usually", options: ["eats different food from the adult", "eats the same food", "does not eat", "looks like the adult"], correctIndex: 0, explanation: "Larva and adult often use different foods." },
        { prompt: "Metamorphosis means", options: ["the change in body form from young to adult", "shedding the skeleton", "laying eggs", "breathing"], correctIndex: 0, explanation: "It is the change in form during development." },
        { prompt: "Which sequence is correct for a housefly?", options: ["egg → larva (maggot) → pupa → adult", "egg → nymph → adult", "larva → egg → adult", "pupa → nymph → adult"], correctIndex: 0, explanation: "The housefly shows complete metamorphosis." },
        { prompt: "A grub or maggot is best described as a", options: ["larva", "nymph", "adult", "egg"], correctIndex: 0, explanation: "These are larval forms." },
        { prompt: "Wings develop as 'wing buds' in the ____ of insects with incomplete metamorphosis.", options: ["nymph", "pupa", "larva", "egg"], correctIndex: 0, explanation: "Nymphs show developing wing buds." },
        { prompt: "Which pair correctly matches insect and metamorphosis type?", options: ["mosquito – complete", "grasshopper – complete", "butterfly – incomplete", "cockroach – complete"], correctIndex: 0, explanation: "Mosquitoes show complete metamorphosis." },
        { prompt: "The caterpillar and the adult butterfly are", options: ["the same insect at different stages", "two different species", "both adults", "both larvae"], correctIndex: 0, explanation: "They are one insect at different life stages." },
        { prompt: "Why can arthropods not grow without molting?", options: ["the exoskeleton cannot stretch", "they have no cells", "they photosynthesise", "they lack eggs"], correctIndex: 0, explanation: "The rigid exoskeleton must be shed to grow." },
        { prompt: "Which stage does NOT feed in a butterfly's life cycle?", options: ["pupa", "larva", "adult", "nymph"], correctIndex: 0, explanation: "The pupa is a non-feeding resting stage." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define molting and explain why arthropods need to molt.", answerKey: "Molting (ecdysis) is the shedding of the hard exoskeleton. It is needed because the rigid chitin exoskeleton cannot stretch, so it must be shed for the animal to grow larger. 2 marks for definition, 2 for the reason.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which stage is present in complete but NOT incomplete metamorphosis?", options: ["Egg", "Nymph", "Pupa", "Adult"], correctIndex: 2, answerKey: "The pupa. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List the stages of (a) complete and (b) incomplete metamorphosis.", answerKey: "(a) egg, larva, pupa, adult. (b) egg, nymph, adult. 2 marks each, full only if in order.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two differences between a nymph and a larva.", answerKey: "Any two: nymph resembles a small adult / larva does not; nymph eats same food as adult / larva often different; nymph has no pupa stage after it / larva becomes a pupa. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Compare complete and incomplete metamorphosis, using named insect examples, and explain one advantage of complete metamorphosis.", answerKey: "Complete: egg, larva, pupa, adult; larva unlike adult, different food; e.g. butterfly, housefly, mosquito (5). Incomplete: egg, nymph, adult; nymph like small adult, same food, no pupa; e.g. grasshopper, cockroach (5). Advantage of complete: larva and adult use different foods/habitats, reducing competition between young and adults (up to 5). Reward examples.", marks: 15 },
      ],
    },
    // source: LibreTexts — Virginia Cooperative Extension Gardener Handbook, 03: Entomology (insect mouthparts and vectors) (https://bio.libretexts.org/Bookshelves/Botany/Virginia_Cooperative_Extension_Gardener_Handbook/03:_Entomology)
    {
      slug: "insect-vectors",
      title: "Insect Vectors of Disease",
      objective:
        "By the end of the topic, learners should be able to describe how mosquitoes, houseflies, tsetse flies and cockroaches transmit diseases, relating their mouthparts and feeding to transmission and prevention.",
      estimatedMinutes: 110,
      notes: `## What is a vector?

- **Vector** — an organism (often an insect) that **carries and transmits** a disease-causing organism from one host to another.
- Two ways insects transmit disease:
  - **Biological transmission** — the pathogen **develops or multiplies inside** the insect (e.g. malaria parasite in the mosquito).
  - **Mechanical transmission** — the insect simply **carries germs on its body/mouthparts** and deposits them on food (e.g. housefly).

## Mouthparts and feeding

- **Piercing-sucking** (mosquito, tsetse fly) — sharp mouthparts pierce the skin to suck **blood**; can inject pathogens directly into the blood.
- **Sponging** (housefly) — a spongy pad mops up liquid food; picks up and drops off germs mechanically.
- **Chewing/biting** (cockroach) — feeds on waste and food, carrying germs on its body.

## The main insect vectors

| Insect | Mouthparts | Disease(s) | Transmission |
| --- | --- | --- | --- |
| **Mosquito** (Anopheles) | piercing-sucking | **malaria**, yellow fever, dengue | biological (parasite develops inside) |
| **Housefly** | sponging | **typhoid, cholera, dysentery** | mechanical (germs on body) |
| **Tsetse fly** | piercing-sucking | **sleeping sickness (trypanosomiasis)** | biological |
| **Cockroach** | chewing | food poisoning, dysentery | mechanical (contaminates food) |

## The mosquito and malaria

- The female **Anopheles** mosquito bites at night and injects saliva carrying the **Plasmodium** parasite.
- Its life cycle passes through water (egg → larva/wriggler → pupa → adult), so **stagnant water** is where it breeds.

## Preventing vector-borne disease

- **Attack the vector:** insecticide-treated nets, indoor spraying, draining stagnant water, screens on windows.
- **Protect food:** cover food, control flies and cockroaches, keep kitchens and latrines clean.
- **Personal protection:** repellents, long clothing, prompt treatment.

## Common errors and misconceptions

- **"The mosquito causes malaria"** — the mosquito is the **vector**; the **Plasmodium** parasite is the cause.
- **"Houseflies bite"** — houseflies have **sponging** mouthparts; they spread germs **mechanically**, not by biting.
- **"All flies spread the same way"** — the mosquito/tsetse fly transmit **biologically** (pathogen develops inside); the housefly/cockroach transmit **mechanically**.
- **"Spraying alone ends malaria"** — draining breeding water and using nets are equally important.`,
      workedExample: `**Question:** In one village, many people get typhoid, and in a nearby swampy area many get malaria. Identify the likely insect vector in each case, state how it transmits the disease, and give one control measure for each.

**Solution**

*Typhoid in the village.*
- **Vector:** the **housefly**. It has **sponging** mouthparts and feeds on both faeces and food.
- **Transmission:** **mechanical** — germs (typhoid bacteria) stick to its body and mouthparts and are deposited on food when it lands. (Poor sanitation lets flies breed and contaminate food.)
- **Control:** **cover food** and keep kitchens/latrines clean; control flies and dispose of waste safely.

*Malaria in the swampy area.*
- **Vector:** the female **Anopheles mosquito**, which breeds in **stagnant water**.
- **Transmission:** **biological** — the **Plasmodium** parasite develops inside the mosquito and is injected into the blood when it bites.
- **Control:** sleep under an **insecticide-treated net** and **drain/cover stagnant water** to remove breeding sites.

**Answer:** typhoid is spread mechanically by houseflies (control by food hygiene and sanitation); malaria is spread biologically by mosquitoes (control by nets and removing stagnant water).`,
      quiz: [
        { prompt: "A vector is an organism that", options: ["carries and transmits a disease", "cures a disease", "is always a bacterium", "cannot move"], correctIndex: 0, explanation: "It transmits pathogens between hosts." },
        { prompt: "Malaria is transmitted by the", options: ["Anopheles mosquito", "housefly", "cockroach", "tsetse fly"], correctIndex: 0, explanation: "The female Anopheles mosquito is the vector." },
        { prompt: "The housefly spreads disease by", options: ["mechanical transmission", "biting and injecting", "photosynthesis", "stinging"], correctIndex: 0, explanation: "It carries germs on its body and mouthparts." },
        { prompt: "Sleeping sickness is transmitted by the", options: ["tsetse fly", "mosquito", "housefly", "bee"], correctIndex: 0, explanation: "The tsetse fly carries trypanosomes." },
        { prompt: "Mosquitoes and tsetse flies have ____ mouthparts.", options: ["piercing-sucking", "sponging", "chewing", "grinding"], correctIndex: 0, explanation: "They pierce skin to suck blood." },
        { prompt: "Biological transmission means the pathogen", options: ["develops or multiplies inside the insect", "is only carried on the body", "is killed by the insect", "makes food for the insect"], correctIndex: 0, explanation: "The pathogen develops inside the vector." },
        { prompt: "Houseflies commonly spread", options: ["typhoid and cholera", "malaria", "sleeping sickness", "yellow fever"], correctIndex: 0, explanation: "They mechanically spread gut diseases." },
        { prompt: "The mosquito breeds in", options: ["stagnant water", "dry soil", "the human liver only", "salt only"], correctIndex: 0, explanation: "Larvae develop in standing water." },
        { prompt: "The housefly's mouthparts are of the ____ type.", options: ["sponging", "piercing-sucking", "chewing", "beak"], correctIndex: 0, explanation: "A spongy pad mops liquid food." },
        { prompt: "Cockroaches spread disease mainly by", options: ["contaminating food mechanically", "biting people", "injecting parasites", "photosynthesis"], correctIndex: 0, explanation: "They carry germs onto food." },
        { prompt: "Which is the cause of malaria (not the vector)?", options: ["Plasmodium parasite", "the mosquito", "the housefly", "dirty water"], correctIndex: 0, explanation: "Plasmodium is the pathogen; the mosquito carries it." },
        { prompt: "Which measure attacks the mosquito vector?", options: ["draining stagnant water", "covering food", "boiling drinking water", "washing hands"], correctIndex: 0, explanation: "Removing breeding water reduces mosquitoes." },
        { prompt: "Covering food and controlling flies mainly prevents", options: ["fly-borne diseases like typhoid", "malaria", "sleeping sickness", "yellow fever"], correctIndex: 0, explanation: "It stops flies contaminating food." },
        { prompt: "Which insect transmits its disease biologically?", options: ["mosquito", "housefly", "cockroach", "none"], correctIndex: 0, explanation: "The malaria parasite develops inside the mosquito." },
        { prompt: "Insecticide-treated nets protect against", options: ["mosquito bites at night", "houseflies", "cockroaches", "tsetse flies only"], correctIndex: 0, explanation: "Nets stop mosquitoes biting sleepers." },
        { prompt: "The stage of the mosquito found in water is the", options: ["larva (wriggler)", "adult only", "egg on land", "pupa on land"], correctIndex: 0, explanation: "Larvae and pupae develop in water." },
        { prompt: "Why do houseflies not inject pathogens into the blood?", options: ["they have sponging, not piercing, mouthparts", "they have no mouth", "they photosynthesise", "they only eat plants"], correctIndex: 0, explanation: "Sponging mouthparts cannot pierce skin." },
        { prompt: "Which pair is correctly matched?", options: ["tsetse fly – sleeping sickness", "mosquito – typhoid", "housefly – malaria", "cockroach – sleeping sickness"], correctIndex: 0, explanation: "The tsetse fly transmits sleeping sickness." },
        { prompt: "A good general measure against vector-borne disease is", options: ["improving sanitation and reducing breeding sites", "leaving food uncovered", "keeping stagnant water", "ignoring flies"], correctIndex: 0, explanation: "Cleanliness and vector control break transmission." },
        { prompt: "Screens on windows help prevent", options: ["insects entering and biting", "plant growth", "food spoilage by bacteria", "soil erosion"], correctIndex: 0, explanation: "Screens keep out mosquitoes and flies." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a vector and give two examples of insect vectors and the disease each spreads.", answerKey: "A vector carries and transmits a disease-causing organism between hosts. Examples: mosquito – malaria; housefly – typhoid/cholera; tsetse fly – sleeping sickness; cockroach – food poisoning/dysentery. 2 marks for definition + 1 per correct example pair (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which insect transmits disease mechanically rather than biologically?", options: ["Anopheles mosquito", "Tsetse fly", "Housefly", "None"], correctIndex: 2, answerKey: "The housefly carries germs on its body. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between biological and mechanical transmission, with one example each.", answerKey: "Biological: the pathogen develops/multiplies inside the insect (e.g. Plasmodium in the mosquito). Mechanical: the insect only carries germs on its body/mouthparts and deposits them (e.g. housefly on food). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three ways of controlling malaria in a community.", answerKey: "Any three: insecticide-treated nets; indoor residual spraying; drain/cover stagnant water; window screens; prompt treatment. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss how the mouthparts and feeding habits of the mosquito and the housefly determine how each transmits disease, and how each can be controlled.", answerKey: "Mosquito: piercing-sucking mouthparts pierce skin and inject Plasmodium (biological transmission); breeds in water; controlled by nets, spraying, draining water (7). Housefly: sponging mouthparts mop liquids, carrying germs mechanically onto food; controlled by covering food, sanitation, fly control (7). Up to 1 mark for a clear link between mouthpart and transmission mode. Reward the biological vs mechanical contrast.", marks: 15 },
      ],
    },
    // source: LibreTexts — Virginia Cooperative Extension Gardener Handbook, 03: Entomology (honey bee castes) (https://bio.libretexts.org/Bookshelves/Botany/Virginia_Cooperative_Extension_Gardener_Handbook/03:_Entomology)
    {
      slug: "caste-system-social-insects",
      title: "The Caste System in Social Insects",
      objective:
        "By the end of the topic, learners should be able to describe the caste system and division of labour in social insects such as honey bees and termites, naming each caste and its role.",
      estimatedMinutes: 100,
      notes: `## Social insects

- **Social insects** (honey bees, termites, ants, some wasps) live in large, organised **colonies**.
- They show **eusociality**: **reproductive division of labour**, **cooperative care of the young**, and **overlapping generations** living together.
- The colony is divided into **castes** — groups with different body forms and jobs (**polymorphism**).

## The honey bee colony

| Caste | Sex | Role |
| --- | --- | --- |
| **Queen** | one fertile female | lays all the eggs; controls the colony with pheromones |
| **Workers** | many sterile females | build the comb, collect nectar and pollen, feed larvae, guard the hive |
| **Drones** | males | mate with the queen; do no other work |

- **Division of labour:** each caste does its own tasks, so the colony works efficiently — a worker changes jobs as it ages (nurse → builder → guard → forager).

\`\`\`svg The three honey-bee castes and their roles
<svg viewBox="0 0 320 90" role="img" aria-label="Honey bee castes: queen, worker, drone">
  <g font-size="9" text-anchor="middle" fill="currentColor">
    <ellipse cx="55" cy="35" rx="20" ry="10" fill="none" stroke="currentColor"/><text x="55" y="60">queen</text><text x="55" y="74">lays eggs</text>
    <ellipse cx="160" cy="35" rx="15" ry="9" fill="none" stroke="currentColor"/><text x="160" y="60">worker</text><text x="160" y="74">all colony work</text>
    <ellipse cx="265" cy="35" rx="16" ry="9" fill="none" stroke="currentColor"/><text x="265" y="60">drone</text><text x="265" y="74">mates only</text>
  </g>
</svg>
\`\`\`

## The termite colony

| Caste | Role |
| --- | --- |
| **Queen (and king)** | the queen lays eggs; the king stays with her to fertilise |
| **Workers** | build and repair the mound, gather food, tend the young |
| **Soldiers** | defend the colony with large jaws/heads |

- Termite castes are fed special food by workers (**trophallaxis**), which helps decide what each becomes.

## Why the caste system works

- **Specialisation** means each job is done well.
- The colony behaves almost like a single "superorganism".
- **Cooperation** and communication (pheromones, dances) coordinate thousands of individuals.

## Common errors and misconceptions

- **"The queen rules/commands the colony"** — the queen mainly **lays eggs** and releases **pheromones**; the workers run the colony.
- **"Workers are male"** — in bees the **workers are sterile females**; **drones** are the males.
- **"Termites are ants"** — termites are a different group (related to cockroaches) but are also social with castes.
- **"All the insects in a colony are the same"** — a colony has different **castes** with different bodies and jobs.`,
      workedExample: `**Question:** In a honey-bee hive, one large bee lays thousands of eggs, thousands of smaller bees collect nectar and feed the young, and a few larger males do no work except mating. Name each caste, state its role, and explain what "division of labour" means here.

**Solution**

*The large egg-layer* → the **queen**. She is the single fertile female; her job is to **lay all the eggs** and to keep the colony together using **pheromones**.

*The many small nectar-collectors and nurses* → the **workers**. They are sterile females that do **all the colony work**: building comb, collecting nectar and pollen, feeding larvae and guarding the hive. A worker changes jobs as it ages.

*The few larger males* → the **drones**. Their only role is to **mate** with a queen.

*Division of labour* means the tasks of the colony are **shared out among castes** — the queen reproduces, the workers maintain the colony, the drones mate. Because each caste specialises, the whole colony works **efficiently**, like a single organism.

**Answer:** queen (lays eggs), workers (do all colony work), drones (mate only); division of labour is the sharing of tasks among specialised castes, making the colony efficient.`,
      quiz: [
        { prompt: "Social insects live in", options: ["organised colonies", "isolation", "the human body", "the sea only"], correctIndex: 0, explanation: "They form large cooperative colonies." },
        { prompt: "The groups with different bodies and jobs in a colony are called", options: ["castes", "phyla", "species", "tissues"], correctIndex: 0, explanation: "Castes divide the colony by role." },
        { prompt: "The only fertile female in a honey-bee colony is the", options: ["queen", "worker", "drone", "soldier"], correctIndex: 0, explanation: "The queen lays all the eggs." },
        { prompt: "Honey-bee workers are", options: ["sterile females", "fertile males", "queens", "drones"], correctIndex: 0, explanation: "Workers are sterile females doing colony work." },
        { prompt: "Drones are", options: ["male bees that mate with the queen", "sterile female workers", "the egg-layers", "soldiers"], correctIndex: 0, explanation: "Drones are males whose role is mating." },
        { prompt: "The queen controls the colony mainly using", options: ["pheromones", "sound only", "her stinger", "webs"], correctIndex: 0, explanation: "Chemical pheromones coordinate the colony." },
        { prompt: "Termite soldiers are specialised for", options: ["defence", "laying eggs", "collecting nectar", "mating only"], correctIndex: 0, explanation: "Soldiers defend the colony." },
        { prompt: "Division of labour means", options: ["different castes do different tasks", "all insects do the same job", "no cooperation", "the queen does everything"], correctIndex: 0, explanation: "Tasks are shared among specialised castes." },
        { prompt: "In a termite colony, the queen's main role is to", options: ["lay eggs", "defend the mound", "collect food", "mate only"], correctIndex: 0, explanation: "The queen lays the eggs." },
        { prompt: "Eusociality includes cooperative care of", options: ["the young", "predators", "food only", "soil"], correctIndex: 0, explanation: "Colony members care for the brood together." },
        { prompt: "Which caste does 'all the colony work' in bees?", options: ["workers", "queen", "drones", "soldiers"], correctIndex: 0, explanation: "Workers build, forage, feed and guard." },
        { prompt: "A worker bee changes its job as it", options: ["ages", "shrinks", "changes species", "loses its wings"], correctIndex: 0, explanation: "Nurse → builder → guard → forager with age." },
        { prompt: "Termite workers pass food to other castes by", options: ["trophallaxis (mouth-to-mouth feeding)", "photosynthesis", "flight", "stinging"], correctIndex: 0, explanation: "Trophallaxis feeds the king, queen and young." },
        { prompt: "A colony of social insects behaves almost like a", options: ["single superorganism", "single cell", "random crowd", "plant"], correctIndex: 0, explanation: "Coordinated castes act as one unit." },
        { prompt: "Which statement is TRUE about honey bees?", options: ["Workers are sterile females", "Drones lay eggs", "The queen forages for nectar", "Workers are males"], correctIndex: 0, explanation: "Workers are sterile females." },
        { prompt: "Termites are most closely related to", options: ["cockroaches", "spiders", "crabs", "worms"], correctIndex: 0, explanation: "Termites are related to cockroaches, not ants." },
        { prompt: "Overlapping generations in a colony means", options: ["parents and offspring live together", "all die at once", "only one age group exists", "no reproduction"], correctIndex: 0, explanation: "Several generations coexist in the colony." },
        { prompt: "The caste responsible for reproduction in bees is the", options: ["queen (and drones for mating)", "workers", "soldiers", "foragers"], correctIndex: 0, explanation: "The queen lays eggs; drones mate." },
        { prompt: "Which is NOT a honey-bee caste?", options: ["soldier", "queen", "worker", "drone"], correctIndex: 0, explanation: "Soldiers are a termite caste, not a bee caste." },
        { prompt: "Specialisation of castes makes the colony", options: ["more efficient", "less organised", "unable to survive", "identical to a single insect"], correctIndex: 0, explanation: "Each job is done well by a specialised caste." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three castes of a honey-bee colony and give the role of each.", answerKey: "Queen – lays eggs / controls colony; workers – sterile females doing all colony work (build, forage, feed, guard); drones – males that mate. 2 marks each.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "In a honey-bee colony, the workers are", options: ["fertile males", "sterile females", "the egg-layers", "drones"], correctIndex: 1, answerKey: "Workers are sterile females. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by 'division of labour' in a social insect colony.", answerKey: "Different castes carry out different specialised tasks (reproduction by the queen, colony work by workers, defence by soldiers, mating by drones), so the colony works efficiently as a unit. Award marks for specialisation and efficiency.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the castes of a termite colony and state the role of the soldiers.", answerKey: "Queen (and king) – reproduction; workers – build/forage/tend young; soldiers – defend the colony (with large jaws/heads). Award marks for the castes and the soldiers' defensive role.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the caste system of social insects, using honey bees and termites, and explain why this organisation is successful.", answerKey: "Honey bees: queen (eggs), workers (colony work), drones (mating) (4). Termites: queen/king (reproduction), workers (build/forage), soldiers (defence) (4). Success: division of labour and specialisation, cooperative brood care, communication (pheromones/trophallaxis), colony acts as a superorganism (up to 7). Reward examples and clear reasoning.", marks: 15 },
      ],
    },
    // source: LibreTexts — Virginia Cooperative Extension Gardener Handbook, 03: Entomology (beneficial insects, pollination) (https://bio.libretexts.org/Bookshelves/Botany/Virginia_Cooperative_Extension_Gardener_Handbook/03:_Entomology)
    {
      slug: "economic-importance-social-insects",
      title: "Economic Importance of Social Insects",
      objective:
        "By the end of the topic, learners should be able to explain the economic importance of honey bees and termites, describing both their benefits and their harmful effects.",
      estimatedMinutes: 90,
      notes: `## Honey bees — mostly beneficial

**Benefits:**
- **Pollination** — bees are the main pollinators of many crops: squash, tomatoes, beans, okra, peppers, apples, citrus, berries and more require insect pollination to set fruit. This raises **crop yields** and supports **food security and biodiversity**.
- **Honey** — a valuable food and source of income.
- **Beeswax** — used for candles, polish and cosmetics.
- Other bee products: **propolis** and **royal jelly**.

**Harm:**
- Bee **stings** can be painful and dangerous to people who are allergic.

## Termites — beneficial and harmful

**Benefits:**
- **Recycle dead wood and plant matter**, returning nutrients to the soil.
- Their tunnelling **aerates and improves the soil**.
- Termite mounds enrich soil in some areas; termites are eaten as food in some cultures.

**Harm:**
- Termites **eat wood**, destroying **houses, furniture, books and crops** — a major economic pest.
- They can damage wooden structures and stored materials.

## Weighing it up

| Insect | Main benefit | Main harm |
| --- | --- | --- |
| **Honey bee** | pollination, honey, wax | stings |
| **Termite** | recycle wood, improve soil | destroy wood, buildings and crops |

## Managing social insects

- **Keep bees** (bee-keeping/apiculture) for honey and pollination; protect them from careless pesticide use.
- **Protect wood** from termites with treated timber, barriers and good building practice.

## Common errors and misconceptions

- **"Bees are only dangerous pests"** — bees are hugely beneficial through **pollination** and honey; their main harm is stinging.
- **"Termites have no value"** — termites **recycle wood** and **improve soil**, though they also damage buildings.
- **"Pollination is unimportant"** — without pollinators many food crops would not set fruit.
- **"Honey is the main benefit of bees"** — **pollination** is economically far more important than honey.`,
      workedExample: `**Question:** A farmer wants to increase his okra and pepper yield but is also worried that termites are eating his wooden store. Explain the role of bees for his crops and the double nature of termites, and advise him.

**Solution**

*Bees and the crops.* Okra and pepper flowers must be **pollinated** to set fruit, and **bees are the main pollinators**. More bees visiting the flowers means **more pollination**, so **more fruit and a higher yield**. The farmer should **protect bees** — for example, by not spraying insecticide on open flowers where bees feed, and by keeping some flowering plants nearby.

*Termites — two sides.* Termites are **beneficial** in the field because they **recycle dead plant matter** and **improve and aerate the soil**. But they are also **harmful pests** that **eat wood**, which is why they are destroying his store.

*Advice.*
- **Encourage bees** (avoid careless pesticide use; consider bee-keeping for honey and better pollination).
- **Protect wood from termites** by using **treated timber**, raising the store off the ground and using barriers — without wiping out the termites that benefit the soil.

**Answer:** bees raise crop yield through pollination and should be protected; termites both enrich the soil and destroy wood, so the farmer should encourage bees and guard his wooden structures rather than destroy all insects.`,
      quiz: [
        { prompt: "The most economically important service of honey bees is", options: ["pollination of crops", "producing wax", "stinging pests", "digging soil"], correctIndex: 0, explanation: "Pollination raises crop yields." },
        { prompt: "Besides pollination, bees provide", options: ["honey and wax", "wood", "silk", "milk"], correctIndex: 0, explanation: "Bees give honey, wax and other products." },
        { prompt: "Termites are harmful mainly because they", options: ["eat wood and destroy buildings", "sting people", "spread malaria", "pollinate crops"], correctIndex: 0, explanation: "They damage wooden structures." },
        { prompt: "A benefit of termites is that they", options: ["recycle dead wood and improve soil", "make honey", "pollinate flowers", "produce wax"], correctIndex: 0, explanation: "They return nutrients and aerate soil." },
        { prompt: "Keeping bees for honey and pollination is called", options: ["bee-keeping (apiculture)", "sericulture", "aquaculture", "horticulture"], correctIndex: 0, explanation: "Apiculture is bee-keeping." },
        { prompt: "Which crop relies on insect pollination to set fruit?", options: ["okra", "none", "all grow without pollen", "only trees"], correctIndex: 0, explanation: "Many crops like okra need pollinators." },
        { prompt: "The main harm caused by honey bees is", options: ["their stings", "eating wood", "spreading malaria", "destroying crops"], correctIndex: 0, explanation: "Stings can hurt or harm allergic people." },
        { prompt: "Beeswax is used to make", options: ["candles and polish", "steel", "paper", "petrol"], correctIndex: 0, explanation: "Wax is used for candles, polish and cosmetics." },
        { prompt: "Termites improve soil by", options: ["tunnelling and aerating it", "adding pesticide", "producing honey", "eating other insects"], correctIndex: 0, explanation: "Their tunnels aerate and enrich the soil." },
        { prompt: "Which statement about termites is TRUE?", options: ["they are both beneficial and harmful", "they only benefit humans", "they only harm humans", "they have no effect"], correctIndex: 0, explanation: "They recycle wood but also destroy structures." },
        { prompt: "To protect wood from termites a builder can use", options: ["treated timber and barriers", "more sugar", "open flowers", "stagnant water"], correctIndex: 0, explanation: "Treated timber resists termite damage." },
        { prompt: "Pollination by bees supports", options: ["food security and biodiversity", "soil erosion", "disease spread", "water pollution"], correctIndex: 0, explanation: "Crops and wild plants depend on pollinators." },
        { prompt: "Which is a bee product?", options: ["royal jelly", "chitin", "silk", "wood"], correctIndex: 0, explanation: "Royal jelly, honey, wax and propolis come from bees." },
        { prompt: "Careless use of pesticides on flowers can", options: ["kill beneficial bees", "increase pollination", "make honey", "help termites"], correctIndex: 0, explanation: "Pesticides harm pollinators." },
        { prompt: "Termites feed mainly on", options: ["wood and dead plant matter", "blood", "nectar", "other insects"], correctIndex: 0, explanation: "They digest cellulose in wood." },
        { prompt: "The economic value of bees is greatest through", options: ["pollination of many crops", "their stings", "their wings", "their eggs"], correctIndex: 0, explanation: "Pollination underpins crop production." },
        { prompt: "A farmer can raise crop yield by", options: ["encouraging pollinating bees", "killing all insects", "removing all flowers", "draining the field"], correctIndex: 0, explanation: "More pollinators mean more fruit set." },
        { prompt: "Which pair is correctly matched?", options: ["bee – pollination; termite – wood damage", "bee – wood damage; termite – honey", "bee – malaria; termite – wax", "bee – soil aeration; termite – stings"], correctIndex: 0, explanation: "Bees pollinate; termites damage wood." },
        { prompt: "In some cultures termites are also", options: ["eaten as food", "used as money", "kept as pets only", "worshipped as gods only"], correctIndex: 0, explanation: "Termites are eaten in some places." },
        { prompt: "Why should bees be protected on a farm?", options: ["they pollinate crops and raise yields", "they eat pests", "they make wood", "they drain water"], correctIndex: 0, explanation: "Pollination is vital for crops." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State three benefits of honey bees to humans.", answerKey: "Any three: pollination of crops; honey; beeswax; other products (propolis, royal jelly); support for food security/biodiversity. 1 mark each.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The most economically important service provided by bees is", options: ["Honey", "Wax", "Pollination", "Stings"], correctIndex: 2, answerKey: "Pollination. Option C.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why termites are described as both beneficial and harmful.", answerKey: "Beneficial: recycle dead wood/plant matter and aerate/improve soil (and eaten as food). Harmful: eat wood and destroy houses, furniture and crops. Award marks for one benefit and one harm.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two ways a community can benefit from the economic importance of social insects.", answerKey: "Any two: keep bees for honey and better crop pollination; use beeswax; use termite-recycled/improved soil; harvest termites as food. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the economic importance of honey bees and termites, giving both their beneficial and harmful effects, and advise how each should be managed.", answerKey: "Bees: pollination (crop yields, food security), honey, wax; harm = stings; manage by bee-keeping and protecting from pesticides (7). Termites: recycle wood, improve soil, food; harm = destroy wood/buildings/crops; manage by protecting timber while keeping soil benefits (7). Up to 1 for balance. Reward concrete examples.", marks: 15 },
      ],
    },
    // source: LibreTexts — Biology (Kimball), 17.4C Biological Control of Pests (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Biology_(Kimball)/17:_Ecology/17.04:_Interactions_between_Species/17.4C:_Biological_Control_of_Pests)
    {
      slug: "pests-and-their-control",
      title: "Pests and Their Control",
      objective:
        "By the end of the topic, learners should be able to explain the economic importance of pests and compare chemical and biological methods of pest control.",
      estimatedMinutes: 110,
      notes: `## What is a pest?

- **Pest** — an organism that harms crops, livestock, stored food, or people.
- Common pests: insects (weevils, locusts, aphids), rodents, weeds, and disease-causing organisms.

## Economic importance of pests

- Pests **reduce crop yield** and **lower crop quality**, and raise the cost of production.
- An estimated **20–30% of major crop yields** are lost to pests worldwide, especially in food-short areas.
- Pests destroy **stored grain**, spread **plant and animal diseases**, and cost farmers heavily in control.

## Chemical control

- Uses **pesticides** — insecticides (insects), herbicides (weeds), fungicides (fungi), rodenticides (rodents).
- **Advantages:** fast, effective, easy to apply over large areas.
- **Disadvantages:**
  - **environmental pollution** and harm to non-target organisms (including bees and natural enemies);
  - **toxic to humans and animals**;
  - pests may develop **resistance**;
  - pesticide residues in food and water.

## Biological control

- **Biological control** — using the pest's **natural enemies** to control it, instead of chemicals.
- **Types of natural enemy:**
  - **Predators** — eat the pest (e.g. **ladybird/vedalia beetles** ate the cottony-cushion scale on citrus).
  - **Parasites / parasitoids** — develop on or in the pest and kill it (e.g. parasitic wasps).
  - **Pathogens** — microbes that cause disease in the pest (e.g. the bacterium ***Bacillus thuringiensis (Bt)*** kills caterpillars).
- Another method: releasing **sterile males** (used to eradicate the screwworm fly).

**Advantages of biological control:**
- No chemical pollution; safe for people and other wildlife.
- Once established, natural enemies **sustain themselves** — cheap and long-lasting.
- Pests are less likely to become resistant.

**Disadvantages:**
- **Slower** to act than chemicals.
- The introduced enemy must be **carefully tested** so it does not become a pest itself or harm native species.

## Comparing the two methods

| Feature | Chemical control | Biological control |
| --- | --- | --- |
| Speed | fast | slow |
| Cost over time | keeps costing | cheap once established |
| Pollution | yes | no |
| Resistance | common | rare |
| Risk | toxic to non-targets | enemy could spread |

## Integrated pest management (IPM)

- Combining **biological, chemical and cultural** methods, using each carefully, usually gives the best long-term control.

## Common errors and misconceptions

- **"Pesticides are always the best control"** — they pollute, harm bees and other wildlife, and pests develop resistance.
- **"Biological control means poisoning pests"** — it uses **living natural enemies**, not poisons.
- **"Biological control works instantly"** — it is **slower** than chemicals but longer lasting.
- **"All insects are pests"** — many insects are helpful (pollinators, predators of pests).`,
      workedExample: `**Question:** A citrus farm is badly attacked by a scale insect. One adviser suggests spraying insecticide every season; another suggests introducing a beetle that eats the scale insect. Compare the two approaches and recommend one, giving reasons.

**Solution**

*Chemical control (spraying insecticide).*
- **For:** it acts **fast** and clears the scale quickly.
- **Against:** it must be repeated (**ongoing cost**), it **pollutes** and can kill beneficial insects like **bees** and the scale's own natural enemies; the scale may become **resistant**; residues may reach food and water.

*Biological control (introducing a predatory beetle).*
- **For:** the beetle eats the scale insect; once established it **sustains itself**, so control is **cheap and long-lasting**, with **no pollution** and little risk of resistance. (This actually happened — vedalia beetles controlled cottony-cushion scale on citrus.)
- **Against:** it works **more slowly**, and the beetle must be **carefully tested** so it does not harm other species.

*Recommendation.* For a long-term, low-cost and environmentally safe solution, **biological control** (the predatory beetle) is preferable, provided it is properly tested first. Chemicals could be kept only for emergencies — an **integrated** approach.

**Answer:** biological control is recommended because it is self-sustaining, cheap over time and non-polluting, unlike repeated insecticide spraying, which pollutes and risks resistance.`,
      quiz: [
        { prompt: "A pest is an organism that", options: ["harms crops, livestock, food or people", "helps crops grow", "only lives in water", "is always microscopic"], correctIndex: 0, explanation: "Pests cause harm and economic loss." },
        { prompt: "Roughly what fraction of major crop yields is lost to pests worldwide?", options: ["20–30%", "1–2%", "80–90%", "none"], correctIndex: 0, explanation: "About 20–30% is lost, especially in poor areas." },
        { prompt: "Chemical control uses", options: ["pesticides", "predators", "parasites", "sterile males"], correctIndex: 0, explanation: "Pesticides are chemicals against pests." },
        { prompt: "Biological control uses", options: ["natural enemies of the pest", "poison sprays", "burning fields", "flooding"], correctIndex: 0, explanation: "It uses predators, parasites or pathogens." },
        { prompt: "A predator used in biological control is the", options: ["ladybird/vedalia beetle", "aphid", "locust", "weevil"], correctIndex: 0, explanation: "Vedalia beetles ate the cottony-cushion scale." },
        { prompt: "Bacillus thuringiensis (Bt) is a ____ used against caterpillars.", options: ["pathogen (bacterium)", "predator", "herbicide", "rodent"], correctIndex: 0, explanation: "Bt is a bacterium that kills caterpillars." },
        { prompt: "A disadvantage of chemical control is", options: ["environmental pollution and resistance", "it is too cheap", "it never works", "it helps bees"], correctIndex: 0, explanation: "Pesticides pollute and pests can resist them." },
        { prompt: "An advantage of biological control is that natural enemies", options: ["sustain themselves once established", "must be re-applied daily", "pollute water", "always fail"], correctIndex: 0, explanation: "They persist and keep controlling the pest." },
        { prompt: "A disadvantage of biological control is that it", options: ["acts more slowly than chemicals", "always pollutes", "kills bees directly", "is very expensive forever"], correctIndex: 0, explanation: "It is slower to take effect." },
        { prompt: "Insecticides target", options: ["insect pests", "weeds", "fungi", "rodents"], correctIndex: 0, explanation: "Insecticides kill insects; herbicides kill weeds." },
        { prompt: "Pests are economically important because they", options: ["reduce yield and quality and raise costs", "improve harvests", "have no effect", "only affect animals"], correctIndex: 0, explanation: "They cause major economic losses." },
        { prompt: "The sterile male technique was used to eradicate the", options: ["screwworm fly", "honey bee", "ladybird", "earthworm"], correctIndex: 0, explanation: "Releasing sterile males eliminated the screwworm." },
        { prompt: "Parasitoids control pests by", options: ["developing on/in the pest and killing it", "eating whole fields", "pollinating flowers", "making honey"], correctIndex: 0, explanation: "Parasitic wasps kill their hosts." },
        { prompt: "Pests developing resistance is a problem of", options: ["chemical control", "biological control", "no method", "pollination"], correctIndex: 0, explanation: "Overuse of pesticides breeds resistance." },
        { prompt: "Combining biological, chemical and cultural methods is called", options: ["integrated pest management (IPM)", "monoculture", "crop rotation only", "chemical control"], correctIndex: 0, explanation: "IPM uses methods together for best control." },
        { prompt: "Which is a natural enemy type used in biological control?", options: ["predators, parasites, pathogens", "pesticides, herbicides", "fungicides only", "rodenticides only"], correctIndex: 0, explanation: "These living enemies attack pests." },
        { prompt: "Careless pesticide use harmed which beneficial insect in the citrus example?", options: ["the vedalia beetle", "the queen bee", "the earthworm", "the housefly"], correctIndex: 0, explanation: "DDT killed the beneficial vedalia beetle too." },
        { prompt: "Which statement is TRUE?", options: ["Biological control is slower but longer-lasting than chemicals", "Chemicals never pollute", "All insects are pests", "Biological control uses poison sprays"], correctIndex: 0, explanation: "Biological control is slow but persistent." },
        { prompt: "Pesticide residues can end up in", options: ["food and water", "the sun", "outer space", "nowhere"], correctIndex: 0, explanation: "Residues contaminate food and water." },
        { prompt: "The safest long-term approach to pest control is often", options: ["integrated pest management", "spraying more chemicals", "ignoring the pests", "flooding the land"], correctIndex: 0, explanation: "IPM balances methods for sustainable control." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a pest and state two ways pests are economically important.", answerKey: "A pest is an organism that harms crops, livestock, stored food or people. Economic importance: reduce crop yield; lower crop quality; destroy stored food; spread diseases; raise control costs. 2 marks for definition + 1 per point (max 2).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is an example of biological control?", options: ["Spraying DDT", "Introducing ladybird beetles to eat scale insects", "Burning the field", "Using a herbicide"], correctIndex: 1, answerKey: "Introducing natural enemies. Option B.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two advantages and two disadvantages of chemical pest control.", answerKey: "Advantages: fast; effective; easy over large areas. Disadvantages: pollution/harm to non-targets; toxic to humans/animals; resistance; residues. 1 mark each (2 + 2).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the three types of natural enemy used in biological control, with an example of one.", answerKey: "Predators, parasites/parasitoids, pathogens. Example e.g. vedalia beetle (predator), parasitic wasp (parasitoid), Bacillus thuringiensis (pathogen). 1 mark per type + 1 for an example.", marks: 4 },
        { type: "ESSAY", prompt: "Compare chemical and biological control of pests, and explain why integrated pest management is often recommended.", answerKey: "Chemical: fast, effective, but pollutes, harms non-targets (bees), causes resistance, leaves residues (5). Biological: uses natural enemies (predators/parasites/pathogens), self-sustaining, non-polluting, but slower and needs careful testing (5). IPM combines methods to get effective control while limiting pollution and resistance (up to 5). Reward examples.", marks: 15 },
      ],
    },
  ],
};
