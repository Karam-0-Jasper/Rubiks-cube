import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 12,
// Semester One, Period I: Chordata — Aves (Birds) and Mammals. Topics follow the
// CONTENTS items: (1) Birds — general characteristics, external/internal
// features, flight and flightless types, adaptations to flight, feather types;
// (2) Mammals — general characteristics, classes of mammals and their features,
// mammalian molar tooth, dentition and dental formulae; (3) Control of body
// temperature in mammals (thermoregulation).
export const biologyG12P1: PeriodContent = {
  grade: 12,
  number: 1,
  title: "Chordata: Aves (Birds) and Mammals",
  summary:
    "Period I of the MoE Grade 12 Biology syllabus. Learners study the two endothermic (warm-blooded) classes of chordates: the general characteristics of birds and the many structural adaptations that fit them for flight, including the types of feathers; the general characteristics of mammals, the three living groups and their teeth and dental formulae; and how mammals control (regulate) their body temperature.",
  topics: [
    // source: LibreTexts — Introductory Biology (CK-12) 12.21 Bird Structure and Function; General Biology (Boundless) 29.5A Characteristics of Birds (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/12:_Vertebrates/12.21:_Bird_Structure_and_Function)
    {
      slug: "birds-aves",
      title: "Birds (Aves)",
      objective:
        "By the end of the topic, learners should be able to list the general characteristics of birds, explain the structural adaptations that fit birds for flight, distinguish flying and flightless birds, and name the types of feathers.",
      estimatedMinutes: 120,
      notes: `## What are birds?

- **Birds (class Aves)** — endothermic (warm-blooded) tetrapod vertebrates that are bipedal, lay hard-shelled amniotic eggs, and have **feathers**, **wings** and a **beak (bill)**.
- All modern birds have feathers, wings and a toothless keratin beak; they descended from feathered dinosaurs.

## General characteristics of birds

- Body covered with **feathers** (unique to birds).
- Fore-limbs modified into **wings**.
- **Beak (bill)** made of keratin; **no teeth**.
- **Endothermic** and **homeothermic** — keep a high, constant body temperature (about 40–42 °C).
- **Four-chambered heart**; complete separation of oxygenated and deoxygenated blood.
- Lay **hard-shelled eggs**; fertilisation is internal.
- Skin is dry with few glands (mainly the **preen/oil gland** at the tail base).

## Adaptations to flight

Flight needs lift, power and a light body. Birds are adapted in many ways:

| Adaptation | How it helps flight |
| --- | --- |
| **Feathers and wings** | give a large light surface (aerofoil) for lift and thrust |
| **Light, hollow (pneumatic) bones** | filled with air, not marrow, so the body is light |
| **No teeth; horny beak** | reduces weight at the front of the body |
| **Air sacs linked to lungs** | store air and push it through the lungs, giving very efficient gas exchange |
| **Large keeled sternum (breastbone)** | anchors the big flight muscles |
| **Powerful pectoral (breast) muscles** | up to 35% of body weight; power the wing beat |
| **Fused, streamlined body; short tail** | reduces drag and air resistance |
| **Rapid four-chambered heart; high metabolism** | supplies plenty of energy and oxygen for flight |
| **Gizzard with grit** | grinds food to replace chewing (no teeth) |

## Types of feathers

| Feather | Position | Function |
| --- | --- | --- |
| **Contour feathers** | cover the body | give shape, a smooth streamlined surface, colour; reduce drag |
| **Flight feathers (quills)** | wings and tail | long, stiff, asymmetrical; provide lift and thrust — primaries at the wing tip give thrust, secondaries near the body give lift |
| **Down feathers** | next to the skin | soft and fluffy; trap air and **insulate** the body against heat loss |

\`\`\`svg A contour flight feather
<svg viewBox="0 0 240 90" role="img" aria-label="Feather with central shaft and vane">
  <line x1="30" y1="75" x2="210" y2="20" stroke="currentColor" stroke-width="2"/>
  <g stroke="currentColor" stroke-width="1" fill="#e0e7ff">
    <path d="M60 62 L150 30 L150 40 L70 68 Z"/>
    <path d="M95 51 L175 24 L175 34 L105 57 Z"/>
    <path d="M55 66 L120 78 L118 68 L60 60 Z"/>
    <path d="M90 55 L150 66 L148 57 L95 49 Z"/>
  </g>
  <text x="24" y="82" font-size="9" fill="currentColor">quill (calamus)</text>
  <text x="150" y="15" font-size="9" fill="currentColor">shaft (rachis)</text>
  <text x="120" y="88" font-size="9" fill="currentColor">vane / barbs</text>
</svg>
\`\`\`

## Flying and flightless birds

- **Flying birds** (e.g. pigeon, eagle, sparrow, weaver bird) have a **keeled sternum** and strong flight muscles.
- **Flightless birds** (e.g. ostrich, emu, penguin, kiwi) have a **flat sternum without a keel** and reduced flight muscles. Ostriches run fast on strong legs; penguins use wings as flippers to "fly" through water.

## Common errors and misconceptions

- **"All birds fly"** — some birds (ostrich, penguin, kiwi) are flightless.
- **"Feathers are only for flight"** — down feathers mainly insulate; contour feathers streamline; only flight feathers give lift and thrust.
- **"Birds have teeth"** — birds have no teeth; a gizzard with grit grinds their food.
- **"Bird bones are solid to be strong"** — flight bones are hollow (pneumatic) to be light, with internal struts for strength.`,
      workedExample: `**Task.** A learner examines a pigeon and an ostrich. (a) State three features of the pigeon that adapt it for flight. (b) Give one skeletal reason the ostrich cannot fly. (c) Which type of feather keeps a bird warm, and how?

**Solution**

(a) Any three flight adaptations of the pigeon:
- **Wings with flight feathers** — form an aerofoil giving lift and thrust.
- **Light hollow (pneumatic) bones** — reduce body weight.
- **Keeled sternum with large pectoral muscles** — power the wing beat.
- (Also acceptable: air sacs for efficient breathing; no teeth/horny beak to reduce weight; streamlined body.)

(b) The ostrich has a **flat sternum with no keel**, so it lacks the large flight muscles and their firm attachment needed to beat wings for flight. (Its body is also heavy.)

(c) **Down feathers** keep a bird warm. They are soft and fluffy and **trap a layer of air** next to the skin; trapped air is a poor conductor of heat, so it reduces heat loss (insulation).

**Answer:** (a) wings/flight feathers, hollow bones, keeled sternum with strong muscles; (b) flat keel-less sternum means no flight muscles; (c) down feathers trap insulating air.`,
      quiz: [
        { prompt: "Birds belong to the class", options: ["Aves", "Mammalia", "Reptilia", "Amphibia"], correctIndex: 0, explanation: "Birds form the class Aves." },
        { prompt: "A feature unique to birds is", options: ["feathers", "a backbone", "a four-chambered heart", "lungs"], correctIndex: 0, explanation: "Only birds have feathers." },
        { prompt: "Birds are described as endothermic, meaning they", options: ["keep a constant warm body temperature", "are cold-blooded", "cannot fly", "have no heart"], correctIndex: 0, explanation: "Endotherms maintain a high constant temperature." },
        { prompt: "The fore-limbs of birds are modified into", options: ["wings", "fins", "legs", "flippers only"], correctIndex: 0, explanation: "Fore-limbs form wings." },
        { prompt: "Bird bones are light because they are", options: ["hollow and air-filled (pneumatic)", "solid marrow", "made of cartilage only", "full of fat"], correctIndex: 0, explanation: "Pneumatic bones reduce weight." },
        { prompt: "Instead of teeth, birds grind food using a", options: ["gizzard with grit", "large liver", "second stomach acid only", "beak alone"], correctIndex: 0, explanation: "The muscular gizzard with stones grinds food." },
        { prompt: "The large breastbone that anchors flight muscles is the", options: ["keeled sternum", "skull", "pelvis", "rib only"], correctIndex: 0, explanation: "The keel of the sternum anchors pectoral muscles." },
        { prompt: "Air sacs in birds help by", options: ["making breathing very efficient", "storing food", "making them heavy", "producing eggs"], correctIndex: 0, explanation: "Air sacs push air through the lungs for efficient gas exchange." },
        { prompt: "Which feathers provide lift and thrust?", options: ["flight feathers", "down feathers", "no feathers", "body scales"], correctIndex: 0, explanation: "Flight feathers on wings/tail give lift and thrust." },
        { prompt: "Which feathers insulate the body?", options: ["down feathers", "flight feathers", "tail quills", "primary feathers"], correctIndex: 0, explanation: "Down feathers trap insulating air." },
        { prompt: "Contour feathers mainly", options: ["streamline the body and give shape", "produce milk", "store water", "grind food"], correctIndex: 0, explanation: "Contour feathers reduce drag and give shape." },
        { prompt: "A flightless bird is the", options: ["ostrich", "pigeon", "eagle", "sparrow"], correctIndex: 0, explanation: "The ostrich cannot fly." },
        { prompt: "Flightless birds differ in having a", options: ["flat sternum without a keel", "larger keel", "more feathers", "hollow beak"], correctIndex: 0, explanation: "No keel means weak flight muscles." },
        { prompt: "The beak of a bird is made of", options: ["keratin", "bone with teeth", "cartilage", "enamel"], correctIndex: 0, explanation: "The horny beak is keratin, with no teeth." },
        { prompt: "The heart of a bird has", options: ["four chambers", "two chambers", "three chambers", "one chamber"], correctIndex: 0, explanation: "Birds have a four-chambered heart." },
        { prompt: "The powerful muscles that beat the wings are the", options: ["pectoral (breast) muscles", "leg muscles", "neck muscles", "jaw muscles"], correctIndex: 0, explanation: "Pectoral muscles power the wing beat." },
        { prompt: "Fertilisation in birds is", options: ["internal, and they lay hard-shelled eggs", "external in water", "not needed", "in a pouch"], correctIndex: 0, explanation: "Birds fertilise internally and lay shelled eggs." },
        { prompt: "A penguin's wings are used as", options: ["flippers for swimming", "extra legs", "feeding organs", "gills"], correctIndex: 0, explanation: "Penguins swim by 'flying' underwater." },
        { prompt: "Which reduces weight at the front of a bird?", options: ["a toothless horny beak", "a heavy jaw with teeth", "large ears", "thick fur"], correctIndex: 0, explanation: "No teeth lightens the head." },
        { prompt: "Primary flight feathers are found", options: ["at the wing tip and give thrust", "on the belly", "inside the lungs", "on the feet"], correctIndex: 0, explanation: "Primaries at the tip provide thrust." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List four general characteristics of birds.", answerKey: "Any four: feathers; wings (modified fore-limbs); horny beak with no teeth; endothermic/constant warm temperature; four-chambered heart; lay hard-shelled eggs; light hollow bones. 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which adaptation makes a bird's body lighter for flight?", options: ["Hollow, air-filled bones", "A heavy jaw with teeth", "Thick fatty skin", "Solid marrow-filled bones"], correctIndex: 0, answerKey: "Pneumatic (hollow) bones reduce weight. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the three types of feathers and give the function of each.", answerKey: "Contour – streamline/shape/reduce drag; flight feathers (quills) – lift and thrust; down feathers – insulation (trap air). 1 mark per feather+function.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain, using two structural features, why an ostrich cannot fly while a pigeon can.", answerKey: "Pigeon: keeled sternum with large pectoral flight muscles and light body enabling wing beating; ostrich: flat keel-less sternum, reduced flight muscles and heavy body, legs adapted for running. Award for two valid contrasts.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how the bird is adapted to flight, referring to its skeleton, muscles, feathers and respiratory system.", answerKey: "Skeleton: light hollow (pneumatic) bones, keeled sternum, fused streamlined skeleton, toothless beak (up to 4). Muscles: large pectoral flight muscles ~35% body weight (up to 3). Feathers: wings with flight feathers form aerofoil giving lift/thrust, contour feathers streamline, down insulate (up to 4). Respiration: air sacs and efficient lungs, rapid four-chambered heart, high metabolism for energy (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — General Biology (OpenStax) 29.6 Mammals; General Biology (Boundless) 29.6C Living Mammals (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Book:_General_Biology_(OpenStax)/5:_Biological_Diversity/29:_Vertebrates/29.6:_Mammals)
    {
      slug: "mammals",
      title: "Mammals",
      objective:
        "By the end of the topic, learners should be able to list the general characteristics of mammals, classify mammals into the three living groups with examples, describe a mammalian molar tooth, and work out a dental formula.",
      estimatedMinutes: 120,
      notes: `## What are mammals?

- **Mammals (class Mammalia)** — endothermic vertebrates with **hair (fur)** and **mammary glands** that produce **milk** to feed their young.

## General characteristics of mammals

- Body covered with **hair or fur** (traps air, insulates).
- **Mammary glands** produce **milk** for the young.
- **Skin glands**: sweat (eccrine) glands cool the body; sebaceous glands make oil; scent glands communicate.
- **Endothermic (warm-blooded)** — constant body temperature.
- **Four-chambered heart**; red blood cells without a nucleus.
- A muscular **diaphragm** separates chest from abdomen and helps breathing.
- **Heterodont teeth** (incisors, canines, premolars, molars) and **diphyodont** (two sets — milk and permanent teeth).
- Lower jaw is a **single bone (dentary)**; **three middle-ear bones** (malleus, incus, stapes).
- Most bear **live young** (except egg-laying monotremes); internal fertilisation.
- Large, well-developed **brain** (neocortex).

## The three living groups of mammals

| Group | Reproduction | Examples |
| --- | --- | --- |
| **Monotremes** | **lay eggs**; have no teeth as adults | duck-billed platypus, spiny anteater (echidna) |
| **Marsupials** | give birth to very **immature young** that finish developing in a **pouch** | kangaroo, koala, opossum, Tasmanian devil |
| **Eutherians (placental)** | young develop fully inside the uterus, nourished by a **placenta** | humans, dogs, cats, cattle, whales, bats |

## Structure of a mammalian molar tooth

A molar is built for grinding. Its parts:

- **Crown** — the part above the gum, covered by hard **enamel**.
- **Neck** — where crown meets root, at the gum line.
- **Root** — fixed in the jaw bone by **cement**.
- **Dentine** — bony layer under the enamel, forming the bulk of the tooth.
- **Pulp cavity** — inside; holds blood vessels and nerves.

\`\`\`svg Section through a mammalian molar tooth
<svg viewBox="0 0 200 150" role="img" aria-label="Molar tooth section">
  <path d="M45 20 Q100 5 155 20 L150 70 L130 140 L115 90 L85 90 L70 140 L50 70 Z" fill="#f1f5f9" stroke="currentColor"/>
  <path d="M45 20 Q100 5 155 20 L152 40 Q100 28 48 40 Z" fill="#c7d2fe" stroke="currentColor"/>
  <path d="M92 55 Q100 52 108 55 L104 100 L96 100 Z" fill="#fecaca" stroke="currentColor"/>
  <line x1="60" y1="95" x2="15" y2="95" stroke="currentColor"/>
  <text x="0" y="98" font-size="8" fill="currentColor">gum</text>
  <text x="160" y="26" font-size="8" fill="currentColor">enamel</text>
  <text x="160" y="60" font-size="8" fill="currentColor">dentine</text>
  <text x="110" y="80" font-size="8" fill="currentColor">pulp</text>
  <text x="120" y="135" font-size="8" fill="currentColor">root</text>
</svg>
\`\`\`

## Dentition and dental formulae

- **Heterodont dentition** — four kinds of teeth: **incisors (I)** cut, **canines (C)** tear, **premolars (PM)** and **molars (M)** grind.
- The **dental formula** counts the teeth in **half of the upper jaw over half of the lower jaw** (the mouth is symmetrical). Order: I, C, PM, M.
- **Adult human:** I 2/2, C 1/1, PM 2/2, M 3/3 → half a jaw = 8 teeth → total = 8 × 4 = **32 teeth**.
- Diet shapes teeth: **carnivores** (dog) have large canines; **herbivores** (rabbit, cow) have large ridged molars and a gap (diastema); **omnivores** (human) have all four types.

## Common errors and misconceptions

- **"All mammals give birth to live young"** — monotremes (platypus, echidna) lay eggs.
- **"Whales and bats are not mammals"** — they have hair and mammary glands, so they are mammals (eutherians).
- **"The dental formula counts the whole mouth"** — it counts half the upper over half the lower jaw.
- **"Hair is only for looks"** — hair traps air and insulates, keeping the constant body temperature.`,
      workedExample: `**Task.** A rabbit has the dental formula I 2/1, C 0/0, PM 3/2, M 3/3. (a) How many teeth are in one half of the upper jaw? (b) Work out the total number of teeth. (c) Which mammal group does the rabbit belong to, and give one reason.

**Solution**

(a) Half of the **upper** jaw = 2 (incisors) + 0 (canines) + 3 (premolars) + 3 (molars) = **8 teeth**.

(b) Total number of teeth:
- Half of the **upper** jaw = 2 + 0 + 3 + 3 = 8.
- Half of the **lower** jaw = 1 + 0 + 2 + 3 = 6.
- One full side (upper + lower) = 8 + 6 = 14.
- The mouth has **two** sides, so total = 14 × 2 = **28 teeth**.

(c) The rabbit is a **eutherian (placental) mammal** — it gives birth to live young that developed inside the uterus nourished by a placenta. (Its teeth also show it is a herbivore: no canines, a diastema, and ridged grinding molars.)

**Answer:** 8 teeth in half the upper jaw; 28 teeth in total; the rabbit is a placental (eutherian) mammal.`,
      quiz: [
        { prompt: "Mammals feed their young with", options: ["milk from mammary glands", "regurgitated seeds", "nectar", "blood"], correctIndex: 0, explanation: "Mammary glands produce milk." },
        { prompt: "The body of a mammal is covered with", options: ["hair or fur", "feathers", "scales only", "shell"], correctIndex: 0, explanation: "Hair/fur is a mammalian feature." },
        { prompt: "The muscular sheet that separates the chest from the abdomen is the", options: ["diaphragm", "pleura", "pericardium", "peritoneum only"], correctIndex: 0, explanation: "The diaphragm helps breathing." },
        { prompt: "Mammals that lay eggs are", options: ["monotremes", "marsupials", "eutherians", "placentals"], correctIndex: 0, explanation: "Monotremes (platypus, echidna) lay eggs." },
        { prompt: "A kangaroo is an example of a", options: ["marsupial", "monotreme", "placental mammal", "bird"], correctIndex: 0, explanation: "Marsupial young develop in a pouch." },
        { prompt: "Humans, dogs and whales are", options: ["eutherian (placental) mammals", "marsupials", "monotremes", "reptiles"], correctIndex: 0, explanation: "Placental young develop in the uterus via a placenta." },
        { prompt: "Having different kinds of teeth is called", options: ["heterodont dentition", "homodont dentition", "no dentition", "diastema"], correctIndex: 0, explanation: "Mammals are heterodont." },
        { prompt: "Mammals have two sets of teeth in life; this is described as", options: ["diphyodont", "monophyodont", "polyphyodont", "edentulous"], correctIndex: 0, explanation: "Milk teeth then permanent teeth = diphyodont." },
        { prompt: "The hard outer covering of a tooth crown is", options: ["enamel", "dentine", "pulp", "cement"], correctIndex: 0, explanation: "Enamel covers the crown." },
        { prompt: "The part of a tooth with nerves and blood vessels is the", options: ["pulp cavity", "enamel", "root cement", "neck"], correctIndex: 0, explanation: "The pulp holds nerves and vessels." },
        { prompt: "The dental formula counts teeth in", options: ["half the upper over half the lower jaw", "the whole mouth", "one tooth", "the tongue"], correctIndex: 0, explanation: "One symmetrical half is counted." },
        { prompt: "An adult human has how many teeth?", options: ["32", "20", "28", "40"], correctIndex: 0, explanation: "Adult humans have 32 teeth." },
        { prompt: "Carnivores such as dogs have enlarged", options: ["canines", "incisors only", "flat molars only", "no teeth"], correctIndex: 0, explanation: "Large canines stab and tear flesh." },
        { prompt: "A gap between the teeth in herbivores is called a", options: ["diastema", "keel", "pulp", "cusp"], correctIndex: 0, explanation: "The diastema helps manipulate plant food." },
        { prompt: "Mammals maintain a constant body temperature; they are", options: ["endothermic", "ectothermic", "cold-blooded", "poikilothermic"], correctIndex: 0, explanation: "Mammals are endotherms." },
        { prompt: "Mammalian red blood cells are unusual because they", options: ["have no nucleus", "are green", "are the largest cells", "carry no oxygen"], correctIndex: 0, explanation: "Mature mammalian RBCs lack a nucleus." },
        { prompt: "The three tiny bones of the mammalian middle ear are", options: ["malleus, incus, stapes", "femur, tibia, fibula", "radius, ulna, humerus", "atlas, axis, sacrum"], correctIndex: 0, explanation: "These bones transmit sound." },
        { prompt: "Hair keeps a mammal warm by", options: ["trapping a layer of air (insulation)", "producing heat directly", "cooling the skin", "storing fat"], correctIndex: 0, explanation: "Trapped air reduces heat loss." },
        { prompt: "Sweat glands help a mammal by", options: ["cooling the body", "producing milk", "making bones", "digesting food"], correctIndex: 0, explanation: "Sweating cools by evaporation." },
        { prompt: "In the formula I 2/2 C 1/1 PM 2/2 M 3/3, half the upper jaw has how many teeth?", options: ["8", "16", "4", "32"], correctIndex: 0, explanation: "2+1+2+3 = 8." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four characteristics that are common to all mammals.", answerKey: "Any four: hair/fur; mammary glands producing milk; endothermic; diaphragm; four-chambered heart; heterodont teeth; single-bone lower jaw/three middle-ear bones; most bear live young. 1 mark each (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which group of mammals lays eggs?", options: ["Monotremes", "Marsupials", "Eutherians", "Placentals"], correctIndex: 0, answerKey: "Monotremes lay eggs. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the four parts of a mammalian molar from outside in, and state which part contains nerves.", answerKey: "Enamel (outer crown), dentine (bulk), pulp cavity (nerves and blood vessels), plus cement fixing the root; the pulp cavity contains the nerves. Award for correct parts + pulp identified.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "An animal has the dental formula I 3/3 C 1/1 PM 4/4 M 2/3. Work out its total number of teeth.", answerKey: "Half upper = 3+1+4+2 = 10; half lower = 3+1+4+3 = 11; one side = 21; ×2 = 42 teeth. Award for method and answer (42).", marks: 4 },
        { type: "ESSAY", prompt: "Classify mammals into their three living groups, giving the distinguishing reproductive feature and an example of each, and explain how mammalian teeth are adapted to diet.", answerKey: "Monotremes: lay eggs, e.g. platypus/echidna (up to 3). Marsupials: immature young develop in a pouch, e.g. kangaroo/koala (up to 3). Eutherians: young nourished by a placenta in the uterus, e.g. humans/dogs/whales (up to 3). Teeth: heterodont — carnivores large canines to tear flesh; herbivores ridged molars and diastema to grind plants; omnivores all four types (up to 6).", marks: 15 },
      ],
    },
    // source: LibreTexts — General Biology (Boundless) 33.13 Homeostasis - Thermoregulation (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/General_Biology_(Boundless)/33:_The_Animal_Body-_Basic_Form_and_Function/33.13:_Homeostasis_-_Thermoregulation)
    {
      slug: "control-of-body-temperature-in-mammals",
      title: "Control of Body Temperature in Mammals",
      objective:
        "By the end of the topic, learners should be able to explain what thermoregulation is, describe how mammals lose and gain heat, and describe the mechanisms that cool and warm the body under the control of the hypothalamus.",
      estimatedMinutes: 90,
      notes: `## Endotherms and thermoregulation

- **Thermoregulation** — keeping the body temperature within a narrow range around a **set point** (about 37 °C in humans), whatever the outside temperature. It is part of **homeostasis**.
- **Endotherms** ("warm-blooded", e.g. mammals and birds) make most of their heat by **metabolism** and control their own temperature.
- **Ectotherms** ("cold-blooded", e.g. reptiles) depend on the environment for heat.

## The control centre: the hypothalamus

- The **hypothalamus** in the brain is the body's **thermostat**. It has a set point.
- Temperature receptors in the skin and blood send information to the hypothalamus.
- If the body is **too hot** or **too cold**, the hypothalamus triggers responses (through nerves and hormones) that return the temperature to the set point — an example of **negative feedback**.

## Cooling the body (when too hot)

- **Sweating** — sweat glands release sweat; as it **evaporates** it takes heat from the skin (cooling).
- **Vasodilation** — skin arterioles widen, so **more blood flows near the surface** and loses heat by radiation.
- **Hairs lie flat** (erector muscles relax), so little air is trapped and heat escapes.
- **Behaviour** — resting in shade, panting (in dogs), drinking water.

## Warming the body (when too cold)

- **Shivering** — muscles contract rapidly, releasing heat from respiration.
- **Vasoconstriction** — skin arterioles narrow, so **less blood flows to the surface**; blood and heat stay in the core.
- **Hairs stand up** (erector muscles contract), trapping an insulating layer of air.
- **Increased metabolism** — the liver and other organs release more heat; extra thyroxine may be released.
- **Behaviour** — moving to warmth, curling up, huddling.

| Condition | Response | Effect |
| --- | --- | --- |
| Body too hot | sweating, vasodilation, hairs flat | lose heat |
| Body too cold | shivering, vasoconstriction, hairs raised | gain/save heat |

## Why a constant temperature matters

- **Enzymes** work best at their optimum temperature (about 37 °C). Too cold and reactions slow; too hot and enzymes **denature**. A steady temperature keeps metabolism efficient.

## Common errors and misconceptions

- **"Warm-blooded animals are always warmer than their surroundings"** — they keep a **constant** temperature, which may be warmer or cooler than outside.
- **"Sweat cools by being wet"** — it cools only as it **evaporates**, taking heat from the skin.
- **"Blood vessels move to the skin"** — vessels do not move; they **widen (vasodilation)** or **narrow (vasoconstriction)**.
- **"Hair standing up warms the skin directly"** — raised hair traps **air**, which insulates.`,
      workedExample: `**Task.** A person walks from an air-conditioned room into hot sunshine. (a) Which organ detects the change and controls the response? (b) Describe two mechanisms the body uses to cool down. (c) Explain why keeping a constant temperature is important for enzymes.

**Solution**

(a) The **hypothalamus** in the brain acts as the thermostat. Temperature receptors in the skin and blood signal it, and it triggers cooling responses (negative feedback).

(b) Two cooling mechanisms:
- **Sweating** — sweat glands secrete sweat onto the skin; as it **evaporates** it removes heat, cooling the body.
- **Vasodilation** — the arterioles in the skin **widen**, so more warm blood flows near the surface and loses heat by radiation to the air.

(c) A constant temperature (about 37 °C) keeps **enzymes** near their **optimum**. If the body overheats, enzymes **denature** and stop working; if it cools too much, reactions become too slow. Steady temperature keeps metabolism working properly.

**Answer:** (a) the hypothalamus; (b) sweating (evaporation) and vasodilation; (c) it keeps enzymes at their optimum so they are not denatured or slowed.`,
      quiz: [
        { prompt: "Thermoregulation means keeping the body temperature", options: ["within a narrow range (constant)", "always rising", "the same as the air", "always falling"], correctIndex: 0, explanation: "It holds temperature near a set point." },
        { prompt: "Mammals are described as", options: ["endotherms (warm-blooded)", "ectotherms", "cold-blooded", "poikilotherms"], correctIndex: 0, explanation: "They make and control their own heat." },
        { prompt: "The part of the brain that controls body temperature is the", options: ["hypothalamus", "cerebellum", "medulla only", "pituitary"], correctIndex: 0, explanation: "The hypothalamus is the thermostat." },
        { prompt: "Thermoregulation is an example of", options: ["homeostasis by negative feedback", "growth", "digestion", "reproduction"], correctIndex: 0, explanation: "It corrects deviations from a set point." },
        { prompt: "Sweating cools the body because sweat", options: ["evaporates and takes heat from the skin", "is cold when made", "blocks the pores", "warms the blood"], correctIndex: 0, explanation: "Evaporation removes heat." },
        { prompt: "Widening of skin arterioles to lose heat is", options: ["vasodilation", "vasoconstriction", "shivering", "insulation"], correctIndex: 0, explanation: "Vasodilation brings blood to the surface." },
        { prompt: "When too cold, skin arterioles", options: ["narrow (vasoconstriction)", "widen", "disappear", "burst"], correctIndex: 0, explanation: "Vasoconstriction keeps heat in the core." },
        { prompt: "Shivering warms the body because", options: ["muscle contraction releases heat", "it cools the blood", "it stops respiration", "it evaporates water"], correctIndex: 0, explanation: "Rapid contractions release heat from respiration." },
        { prompt: "Hairs standing up in the cold help by", options: ["trapping an insulating layer of air", "producing sweat", "cooling the skin", "making heat directly"], correctIndex: 0, explanation: "Trapped air insulates." },
        { prompt: "When too hot, the hairs", options: ["lie flat so heat escapes", "stand up", "fall out", "produce oil"], correctIndex: 0, explanation: "Flat hair traps little air, aiding heat loss." },
        { prompt: "Temperature information reaches the hypothalamus from", options: ["receptors in the skin and blood", "the stomach only", "the eyes only", "the bones"], correctIndex: 0, explanation: "Skin and blood receptors signal temperature." },
        { prompt: "A constant temperature matters because enzymes", options: ["work best near their optimum and denature if too hot", "do not need warmth", "work only when frozen", "are unaffected by heat"], correctIndex: 0, explanation: "Enzymes have an optimum temperature." },
        { prompt: "Panting in a dog helps to", options: ["lose heat by evaporation", "gain heat", "digest food", "shiver"], correctIndex: 0, explanation: "Evaporation from the tongue/airways cools it." },
        { prompt: "Ectotherms such as reptiles", options: ["rely on the environment for heat", "keep a constant temperature", "sweat a lot", "shiver to stay warm"], correctIndex: 0, explanation: "Ectotherms depend on external heat." },
        { prompt: "Extra heat production in the cold can involve", options: ["increased metabolism/thyroxine", "less respiration", "sweating", "vasodilation"], correctIndex: 0, explanation: "Raised metabolism releases more heat." },
        { prompt: "Vasoconstriction reduces heat loss by", options: ["keeping blood away from the skin surface", "opening pores", "evaporating sweat", "raising hairs only"], correctIndex: 0, explanation: "Less surface blood flow means less heat loss." },
        { prompt: "The normal human body temperature set point is about", options: ["37 °C", "27 °C", "47 °C", "17 °C"], correctIndex: 0, explanation: "Around 37 °C." },
        { prompt: "If the body overheats badly, enzymes may", options: ["denature and stop working", "work faster forever", "turn into hormones", "become vitamins"], correctIndex: 0, explanation: "High temperature denatures enzymes." },
        { prompt: "Negative feedback in temperature control means the response", options: ["reverses the change back to the set point", "increases the change", "has no effect", "stops the heart"], correctIndex: 0, explanation: "It opposes the deviation." },
        { prompt: "Behavioural cooling includes", options: ["resting in the shade and drinking water", "shivering", "curling up", "raising hairs"], correctIndex: 0, explanation: "Behaviour helps regulate temperature." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define thermoregulation and name the organ that controls it.", answerKey: "Thermoregulation: keeping the body temperature within a narrow range around a set point despite external changes (part of homeostasis). Controlled by the hypothalamus. 2 for definition, 1 for hypothalamus.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which response helps cool an overheated body?", options: ["Vasodilation of skin arterioles", "Shivering", "Vasoconstriction", "Raising the hairs"], correctIndex: 0, answerKey: "Vasodilation loses heat. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe two ways a mammal conserves or gains heat when it is cold.", answerKey: "Any two: shivering (muscle contraction releases heat); vasoconstriction (less blood to skin); hairs stand up trapping air; raised metabolism/thyroxine. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why sweating cools the body.", answerKey: "Sweat glands release sweat onto the skin; as the sweat evaporates it absorbs heat (latent heat) from the skin, lowering body temperature. Award for evaporation removing heat.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how the body of a mammal keeps a constant temperature when the surroundings become hot and when they become cold, and say why a constant temperature is important.", answerKey: "Detection: hypothalamus with skin/blood receptors, negative feedback (up to 3). Too hot: sweating (evaporation), vasodilation, hairs flat, behaviour (up to 5). Too cold: shivering, vasoconstriction, hairs raised, increased metabolism, behaviour (up to 5). Importance: keeps enzymes near optimum, avoids denaturing/too-slow reactions (up to 2).", marks: 15 },
      ],
    },
  ],
};
