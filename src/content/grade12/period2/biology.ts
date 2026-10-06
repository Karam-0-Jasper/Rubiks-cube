import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 12,
// Semester One, Period II: Skeletal, Muscular and Reproductive Systems. Topics
// follow the CONTENTS items: (1) division of the human body and body cavities;
// (2) the skeletal system; (3) the muscular system; (4) reproductive systems and
// gamete formation (adolescence, oogenesis, spermatogenesis, organs, sperm and
// egg); (5) the menstrual cycle, fertilization and conception (sex determination,
// infertility); (6) sexually transmitted infections, HIV/AIDS and family planning
// (including gender-based violence awareness).
export const biologyG12P2: PeriodContent = {
  grade: 12,
  number: 2,
  title: "Skeletal, Muscular and Reproductive Systems",
  summary:
    "Period II of the MoE Grade 12 Biology syllabus. Learners study how the body is organised into regions and cavities; the skeletal system and its joints; the three types of muscle; the male and female reproductive systems and how gametes are made; the menstrual cycle, fertilization and sex determination; and sexually transmitted infections, HIV/AIDS and family planning.",
  topics: [
    // source: LibreTexts — Human Biology (Wakim & Grewal) 10.5 Human Body Cavities (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/10%3A_Introduction_to_the_Human_Body/10.5%3A_Human_Body_Cavities)
    {
      slug: "organisation-of-the-human-body",
      title: "Organisation of the Human Body",
      objective:
        "By the end of the topic, learners should be able to describe how the body is divided into regions, name the main body cavities and the organs they protect, and outline the levels of organisation from cells to systems.",
      estimatedMinutes: 80,
      notes: `## Regions of the human body

The body is divided into a main **axis** and **appendages**:

- **Head** — contains the brain and sense organs.
- **Neck** — joins the head to the trunk.
- **Trunk** — the chest (thorax) and abdomen; holds most internal organs.
- **Appendages** — the two arms and two legs (limbs).

## Levels of organisation

- **Cells** → **tissues** → **organs** → **organ systems** → **organism**.
- Similar **cells** form a **tissue**; tissues form an **organ**; organs working together form a **system** (e.g. the digestive system).

## Body cavities

A **body cavity** is a fluid-filled space that holds and protects internal organs. There are two main cavities:

| Main cavity | Subdivision | Organs protected |
| --- | --- | --- |
| **Dorsal (back)** | cranial cavity | brain |
| **Dorsal (back)** | spinal (vertebral) cavity | spinal cord |
| **Ventral (front)** | thoracic cavity | heart and lungs |
| **Ventral (front)** | abdominal cavity | stomach, intestines, liver, kidneys |
| **Ventral (front)** | pelvic cavity | bladder and reproductive organs |

- The **thoracic** cavity is separated from the **abdominal** cavity by the muscular **diaphragm**.
- The thoracic cavity contains the **pleural cavities** (lungs) and the **pericardial cavity** (heart).
- The abdominal and pelvic cavities together are the **abdominopelvic cavity**.

\`\`\`svg Main body cavities (side view)
<svg viewBox="0 0 160 200" role="img" aria-label="Dorsal and ventral body cavities">
  <ellipse cx="80" cy="28" rx="26" ry="24" fill="#e0e7ff" stroke="currentColor"/>
  <rect x="52" y="55" width="56" height="70" rx="8" fill="#c7d2fe" stroke="currentColor"/>
  <rect x="52" y="128" width="56" height="55" rx="8" fill="#bfdbfe" stroke="currentColor"/>
  <rect x="104" y="20" width="10" height="165" rx="4" fill="#ddd6fe" stroke="currentColor"/>
  <line x1="52" y1="126" x2="108" y2="126" stroke="currentColor" stroke-dasharray="3 2"/>
  <text x="70" y="30" font-size="8" text-anchor="middle" fill="currentColor">cranial</text>
  <text x="80" y="92" font-size="8" text-anchor="middle" fill="currentColor">thoracic</text>
  <text x="80" y="158" font-size="8" text-anchor="middle" fill="currentColor">abdomino-</text>
  <text x="80" y="168" font-size="8" text-anchor="middle" fill="currentColor">pelvic</text>
  <text x="128" y="105" font-size="8" text-anchor="middle" fill="currentColor">spinal</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **"The body has one big cavity"** — there are separate dorsal and ventral cavities, each subdivided.
- **"The heart is in the abdomen"** — the heart is in the thoracic (chest) cavity.
- **"A tissue and an organ are the same"** — a tissue is one cell type working together; an organ is made of several tissues.
- **"The diaphragm is a bone"** — it is a muscle that separates the thorax from the abdomen.`,
      workedExample: `**Task.** A doctor examines a patient with pain in the chest. (a) In which body cavity are the heart and lungs found? (b) What separates this cavity from the one below it? (c) Place these in order of organisation: organ, cell, system, tissue.

**Solution**

(a) The heart and lungs are found in the **thoracic cavity** (part of the ventral cavity). The heart lies in the **pericardial** space and each lung in a **pleural** space.

(b) The **diaphragm**, a muscular sheet, separates the thoracic cavity from the abdominal cavity.

(c) From simplest to most complex: **cell → tissue → organ → system**. (Cells make tissues; tissues make organs; organs make a system.)

**Answer:** (a) the thoracic cavity; (b) the diaphragm; (c) cell, tissue, organ, system.`,
      quiz: [
        { prompt: "The four main regions of the body are head, neck, trunk and", options: ["appendages (limbs)", "cavities", "cells", "organs"], correctIndex: 0, explanation: "The limbs are the appendages." },
        { prompt: "A body cavity is a space that", options: ["holds and protects internal organs", "stores fat only", "makes blood", "produces heat"], correctIndex: 0, explanation: "Cavities protect organs." },
        { prompt: "The brain is protected in the", options: ["cranial cavity", "thoracic cavity", "pelvic cavity", "abdominal cavity"], correctIndex: 0, explanation: "The cranial cavity holds the brain." },
        { prompt: "The spinal cord lies in the", options: ["spinal (vertebral) cavity", "thoracic cavity", "cranial cavity", "pelvic cavity"], correctIndex: 0, explanation: "The vertebral canal holds the spinal cord." },
        { prompt: "The heart and lungs are in the", options: ["thoracic cavity", "abdominal cavity", "cranial cavity", "pelvic cavity"], correctIndex: 0, explanation: "The chest cavity holds heart and lungs." },
        { prompt: "The stomach, intestines and liver are in the", options: ["abdominal cavity", "thoracic cavity", "cranial cavity", "spinal cavity"], correctIndex: 0, explanation: "The abdomen holds digestive organs." },
        { prompt: "The bladder and reproductive organs are in the", options: ["pelvic cavity", "thoracic cavity", "cranial cavity", "pleural cavity"], correctIndex: 0, explanation: "The pelvic cavity holds these organs." },
        { prompt: "The thorax is separated from the abdomen by the", options: ["diaphragm", "sternum", "pelvis", "skull"], correctIndex: 0, explanation: "The diaphragm divides them." },
        { prompt: "The correct order of organisation is", options: ["cell, tissue, organ, system", "system, organ, tissue, cell", "organ, cell, tissue, system", "tissue, cell, organ, system"], correctIndex: 0, explanation: "Cells build up to systems." },
        { prompt: "A group of similar cells working together forms a", options: ["tissue", "system", "organism", "cavity"], correctIndex: 0, explanation: "Cells of one kind form a tissue." },
        { prompt: "Several tissues working together form an", options: ["organ", "cell", "atom", "cavity"], correctIndex: 0, explanation: "Tissues combine into an organ." },
        { prompt: "The two main body cavities are dorsal and", options: ["ventral", "lateral", "cranial", "spinal"], correctIndex: 0, explanation: "Dorsal (back) and ventral (front)." },
        { prompt: "The lungs lie within the", options: ["pleural cavities", "pericardial cavity", "cranial cavity", "pelvic cavity"], correctIndex: 0, explanation: "Each lung has a pleural space." },
        { prompt: "The heart lies within the", options: ["pericardial cavity", "pleural cavity", "spinal cavity", "abdominal cavity"], correctIndex: 0, explanation: "The pericardial space holds the heart." },
        { prompt: "The dorsal cavity is found at the", options: ["back of the body", "front of the chest", "soles of the feet", "palms"], correctIndex: 0, explanation: "Dorsal means the back." },
        { prompt: "The abdominopelvic cavity is made of the abdominal cavity and the", options: ["pelvic cavity", "cranial cavity", "thoracic cavity", "spinal cavity"], correctIndex: 0, explanation: "Abdomen + pelvis." },
        { prompt: "The kidneys are found in the", options: ["abdominal cavity", "cranial cavity", "thoracic cavity", "pleural cavity"], correctIndex: 0, explanation: "The kidneys lie in the abdomen." },
        { prompt: "The neck's role is to", options: ["join the head to the trunk", "protect the heart", "produce eggs", "store urine"], correctIndex: 0, explanation: "The neck connects head and trunk." },
        { prompt: "Which is the largest level of organisation listed?", options: ["organism", "cell", "tissue", "organ"], correctIndex: 0, explanation: "The whole organism is the largest." },
        { prompt: "Body cavities are usually", options: ["fluid-filled to cushion organs", "empty and dry", "filled with bone", "filled with air only"], correctIndex: 0, explanation: "Fluid cushions and protects." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four main regions of the human body.", answerKey: "Head, neck, trunk, appendages (limbs). 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which cavity contains the heart and lungs?", options: ["Thoracic cavity", "Cranial cavity", "Abdominal cavity", "Pelvic cavity"], correctIndex: 0, answerKey: "The thoracic cavity holds heart and lungs. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the organs protected by (a) the cranial cavity and (b) the pelvic cavity.", answerKey: "(a) Brain. (b) Bladder and reproductive organs. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List the levels of organisation from cell to system, in order.", answerKey: "Cell → tissue → organ → system. Full marks require correct order.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how the human body is organised, including its regions, the levels of organisation, and the main body cavities and the organs they protect.", answerKey: "Regions: head, neck, trunk, appendages (up to 3). Levels: cell, tissue, organ, system, organism with definitions (up to 5). Cavities: dorsal (cranial-brain, spinal-spinal cord) and ventral (thoracic-heart/lungs, abdominal-digestive organs/kidneys, pelvic-bladder/reproductive), diaphragm separating thorax and abdomen (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 14.2 Introduction to the Skeletal System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/14%3A_Skeletal_System/14.2%3A_Introduction_to_the_Skeletal_System)
    {
      slug: "the-skeletal-system",
      title: "The Skeletal System",
      objective:
        "By the end of the topic, learners should be able to state the functions of the skeleton, name its two divisions and their supporting tissues, and describe the main types of joints with examples.",
      estimatedMinutes: 100,
      notes: `## Functions of the skeleton

1. **Support and shape** — the skeleton is the body's framework, giving it shape and holding it up.
2. **Protection** — bones protect soft organs (skull → brain; ribs/sternum → heart and lungs; vertebrae → spinal cord).
3. **Movement** — bones give attachment for muscles and act as **levers**; muscles pull on bones at joints.
4. **Blood cell formation** — red bone marrow makes red cells, white cells and platelets.
5. **Mineral storage** — bones store **calcium** and **phosphorus** and release them when needed.

## Supporting tissues

- **Bone** — hard tissue of collagen fibres hardened with calcium salts.
- **Cartilage** — tough, flexible tissue; smooths joint surfaces and cushions.
- **Ligaments** — strong bands that join **bone to bone** at a joint.
- **Tendons** — strong cords that join **muscle to bone**.

## Divisions of the skeleton

| Division | Bones included |
| --- | --- |
| **Axial skeleton** | skull, vertebral column (backbone), rib cage and sternum |
| **Appendicular skeleton** | arms and legs (limbs), hands and feet, shoulder (pectoral) girdle and hip (pelvic) girdle |

## Joints

A **joint** is where two or more bones meet. Types:

| Joint | Movement | Example location |
| --- | --- | --- |
| **Fixed (immovable)** | none | bones of the skull (sutures) |
| **Hinge** | back-and-forth in one plane | elbow, knee, fingers |
| **Ball-and-socket** | movement in all directions | shoulder, hip |
| **Pivot** | rotation | neck (atlas–axis), radius–ulna |
| **Gliding** | small sliding movements | wrist and ankle bones |

\`\`\`svg A ball-and-socket joint
<svg viewBox="0 0 200 110" role="img" aria-label="Ball and socket joint">
  <path d="M20 40 Q10 55 20 70 L70 70 L70 40 Z" fill="#c7d2fe" stroke="currentColor"/>
  <circle cx="95" cy="55" r="24" fill="#a5b4fc" stroke="currentColor"/>
  <rect x="112" y="45" width="70" height="20" rx="8" fill="#818cf8" stroke="currentColor"/>
  <text x="40" y="90" font-size="9" fill="currentColor">socket</text>
  <text x="86" y="58" font-size="9" fill="currentColor">ball</text>
  <text x="130" y="40" font-size="9" fill="currentColor">bone</text>
</svg>
\`\`\`

- At movable (synovial) joints, cartilage covers the bone ends and **synovial fluid** lubricates; ligaments hold the bones together.

## Common errors and misconceptions

- **"Ligaments join muscle to bone"** — ligaments join bone to bone; **tendons** join muscle to bone.
- **"All joints move"** — skull joints (sutures) are fixed/immovable.
- **"The skull is part of the appendicular skeleton"** — the skull is axial; limbs are appendicular.
- **"Bones are dead and dry"** — bone is living tissue that makes blood cells and stores minerals.`,
      workedExample: `**Task.** (a) Classify the elbow and the shoulder by joint type and state how each moves. (b) Name the tissue that joins the biceps muscle to the bone. (c) Give two functions of the skeleton besides support.

**Solution**

(a) Joint types:
- **Elbow** — a **hinge joint**; it moves back and forth in one plane (bending and straightening the arm).
- **Shoulder** — a **ball-and-socket joint**; the rounded head of the humerus fits a socket, allowing movement in all directions (rotation).

(b) The **tendon** joins the biceps muscle to the bone. (Ligaments, in contrast, join bone to bone.)

(c) Two other functions (any two): **protection** of organs (skull protects the brain); **blood cell formation** in red marrow; **mineral storage** of calcium and phosphorus; **movement** by acting as levers for muscles.

**Answer:** (a) elbow = hinge (one plane); shoulder = ball-and-socket (all directions); (b) a tendon; (c) any two of protection, blood cell formation, mineral storage, movement.`,
      quiz: [
        { prompt: "Which is NOT a function of the skeleton?", options: ["digesting food", "support", "protection of organs", "movement"], correctIndex: 0, explanation: "The skeleton does not digest food." },
        { prompt: "Blood cells are made in the", options: ["red bone marrow", "cartilage", "tendons", "skull sutures"], correctIndex: 0, explanation: "Red marrow makes blood cells." },
        { prompt: "The skeleton stores which minerals?", options: ["calcium and phosphorus", "iron and iodine only", "sodium only", "carbon only"], correctIndex: 0, explanation: "Bones store calcium and phosphorus." },
        { prompt: "Ligaments join", options: ["bone to bone", "muscle to bone", "muscle to muscle", "skin to bone"], correctIndex: 0, explanation: "Ligaments connect bones at joints." },
        { prompt: "Tendons join", options: ["muscle to bone", "bone to bone", "nerve to muscle", "skin to muscle"], correctIndex: 0, explanation: "Tendons attach muscle to bone." },
        { prompt: "The skull, backbone and rib cage form the", options: ["axial skeleton", "appendicular skeleton", "pectoral girdle", "pelvic girdle"], correctIndex: 0, explanation: "These central bones are axial." },
        { prompt: "The limbs and their girdles form the", options: ["appendicular skeleton", "axial skeleton", "rib cage", "vertebral column"], correctIndex: 0, explanation: "Limbs are appendicular." },
        { prompt: "The elbow is an example of a", options: ["hinge joint", "ball-and-socket joint", "fixed joint", "pivot joint"], correctIndex: 0, explanation: "The elbow bends in one plane." },
        { prompt: "The shoulder and hip are", options: ["ball-and-socket joints", "hinge joints", "fixed joints", "gliding joints"], correctIndex: 0, explanation: "They allow movement in all directions." },
        { prompt: "Joints in the skull are", options: ["fixed (immovable)", "hinge", "ball-and-socket", "pivot"], correctIndex: 0, explanation: "Skull sutures do not move." },
        { prompt: "A pivot joint allows", options: ["rotation", "no movement", "only bending", "growth"], correctIndex: 0, explanation: "The neck pivot lets the head rotate." },
        { prompt: "Cartilage at a joint", options: ["smooths and cushions the bone ends", "makes blood", "joins bone to bone", "produces hormones"], correctIndex: 0, explanation: "Cartilage reduces friction." },
        { prompt: "The rib cage protects the", options: ["heart and lungs", "brain", "spinal cord", "bladder"], correctIndex: 0, explanation: "Ribs shield the chest organs." },
        { prompt: "The skull protects the", options: ["brain", "heart", "lungs", "liver"], correctIndex: 0, explanation: "The cranium encloses the brain." },
        { prompt: "Bones act as levers for movement when", options: ["muscles pull on them at joints", "they dissolve", "they make urine", "they store fat only"], correctIndex: 0, explanation: "Muscles pull bones to move the body." },
        { prompt: "Synovial fluid at a joint", options: ["lubricates the moving surfaces", "makes red blood cells", "hardens the bone", "digests cartilage"], correctIndex: 0, explanation: "It reduces friction in movable joints." },
        { prompt: "Which tissue is hardened with calcium salts?", options: ["bone", "tendon", "ligament", "cartilage"], correctIndex: 0, explanation: "Bone is mineralised collagen." },
        { prompt: "Wrist and ankle bones meet at", options: ["gliding joints", "ball-and-socket joints", "fixed joints", "pivot joints"], correctIndex: 0, explanation: "Gliding joints allow small sliding." },
        { prompt: "The pectoral girdle belongs to the", options: ["appendicular skeleton", "axial skeleton", "skull", "rib cage"], correctIndex: 0, explanation: "Shoulder girdle is appendicular." },
        { prompt: "The vertebral column protects the", options: ["spinal cord", "lungs", "kidneys", "stomach"], correctIndex: 0, explanation: "The backbone shields the spinal cord." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State four functions of the skeletal system.", answerKey: "Any four: support/shape; protection of organs; movement (levers for muscles); blood cell formation (red marrow); mineral (calcium/phosphorus) storage. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which structure joins a muscle to a bone?", options: ["Tendon", "Ligament", "Cartilage", "Suture"], correctIndex: 0, answerKey: "Tendons join muscle to bone. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between the axial and appendicular skeleton, with one example of each.", answerKey: "Axial: central bones — skull, vertebral column, rib cage (e.g. skull). Appendicular: limbs and their girdles — arms, legs, shoulder and hip girdles (e.g. femur). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name the joint type found at (a) the knee, (b) the hip, (c) the skull.", answerKey: "(a) hinge; (b) ball-and-socket; (c) fixed/immovable. 1 mark each plus 1 for correct matching.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the types of joints in the human body, giving the movement and an example location of each, and explain the roles of ligaments, tendons and cartilage.", answerKey: "Joints: fixed (skull), hinge (elbow/knee), ball-and-socket (shoulder/hip), pivot (neck), gliding (wrist/ankle) with movements (up to 8). Ligaments join bone to bone; tendons join muscle to bone; cartilage smooths and cushions joint surfaces; synovial fluid lubricates (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 15.2 Introduction to the Muscular System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/15%3A_Muscular_System/15.2%3A_Introduction_to_the_Muscular_System)
    {
      slug: "the-muscular-system",
      title: "The Muscular System",
      objective:
        "By the end of the topic, learners should be able to name the three types of muscle, state where each is found and its functions, and explain how skeletal muscles work with bones to cause movement.",
      estimatedMinutes: 90,
      notes: `## What muscles do

- **Muscle** tissue **contracts** (shortens) to produce **movement** and force.
- Functions: move the body and its parts, pump blood, move food through the gut, maintain posture, and produce heat.

## The three types of muscle

| Type | Control | Striped? | Where found | Function |
| --- | --- | --- | --- | --- |
| **Skeletal (voluntary)** | voluntary (conscious) | striated | attached to bones | move the skeleton; posture |
| **Smooth (involuntary)** | involuntary | not striated | walls of gut, blood vessels, bladder | push food along (peristalsis); control vessel width |
| **Cardiac** | involuntary | striated | wall of the heart only | pumps blood; never tires |

## How skeletal muscles move bones

- Skeletal muscles attach to bones by **tendons**.
- When a muscle **contracts**, it **pulls** the bone; muscles can only pull, not push.
- Muscles work in **antagonistic pairs** — as one contracts, its partner relaxes.
- Example at the elbow: the **biceps contracts** to bend (flex) the arm while the **triceps relaxes**; to straighten (extend) the arm, the **triceps contracts** and the **biceps relaxes**.

\`\`\`svg Antagonistic muscles at the elbow
<svg viewBox="0 0 220 120" role="img" aria-label="Biceps and triceps antagonistic pair">
  <line x1="20" y1="30" x2="120" y2="30" stroke="currentColor" stroke-width="3"/>
  <line x1="120" y1="30" x2="180" y2="95" stroke="currentColor" stroke-width="3"/>
  <path d="M45 30 Q80 15 110 40" stroke="#818cf8" stroke-width="8" fill="none"/>
  <path d="M45 40 Q80 55 120 55" stroke="#c7d2fe" stroke-width="6" fill="none"/>
  <circle cx="120" cy="30" r="5" fill="#fff" stroke="currentColor"/>
  <text x="60" y="12" font-size="9" fill="currentColor">biceps (contracts)</text>
  <text x="55" y="72" font-size="9" fill="currentColor">triceps (relaxes)</text>
</svg>
\`\`\`

## Muscles and energy

- Muscle contraction uses **ATP** from respiration. Hard exercise can outrun the oxygen supply, so muscles respire **anaerobically**, producing **lactic acid** (leading to fatigue and oxygen debt).

## STIs, substance abuse and the muscular system

- Alcohol and drug abuse can **weaken muscles** and reduce coordination; some infections and poor nutrition waste muscle. A healthy lifestyle, exercise and good diet keep muscles strong.

## Common errors and misconceptions

- **"Muscles push and pull"** — muscles can only **pull** (contract); a second muscle pulls the bone back.
- **"Cardiac muscle is under conscious control"** — it is **involuntary**, working automatically.
- **"Smooth muscle moves bones"** — smooth muscle is in organ walls; **skeletal** muscle moves bones.
- **"One muscle straightens and bends a joint"** — antagonistic pairs are needed (biceps and triceps).`,
      workedExample: `**Task.** (a) Name the muscle type in (i) the wall of the stomach, (ii) the heart, (iii) the arm. (b) Explain how the biceps and triceps move the forearm. (c) Why can muscles only pull?

**Solution**

(a) Muscle types:
- (i) Stomach wall → **smooth (involuntary) muscle** (moves food by peristalsis).
- (ii) Heart → **cardiac muscle** (pumps blood, involuntary).
- (iii) Arm → **skeletal (voluntary) muscle** (moves the bones).

(b) The biceps and triceps are an **antagonistic pair**. To **bend (flex)** the arm, the **biceps contracts** and pulls the forearm up while the **triceps relaxes**. To **straighten (extend)** the arm, the **triceps contracts** and the **biceps relaxes**.

(c) A muscle produces force only by **contracting (shortening)**, which **pulls** on the bone. It cannot actively lengthen to push, so a second (antagonistic) muscle is needed to move the bone back.

**Answer:** (a) smooth, cardiac, skeletal; (b) biceps contracts/triceps relaxes to bend, and the reverse to straighten; (c) muscles only shorten and pull, so they act in pairs.`,
      quiz: [
        { prompt: "Muscle tissue produces movement by", options: ["contracting (shortening)", "growing longer only", "dissolving", "making blood"], correctIndex: 0, explanation: "Contraction pulls on bones/organs." },
        { prompt: "Skeletal muscle is", options: ["voluntary and striated", "involuntary and smooth", "found in the heart only", "not attached to bones"], correctIndex: 0, explanation: "It is under conscious control and striped." },
        { prompt: "Smooth muscle is found in", options: ["walls of the gut and blood vessels", "the heart only", "attached to bones", "the skull"], correctIndex: 0, explanation: "Smooth muscle lines internal organs." },
        { prompt: "Cardiac muscle is found", options: ["only in the heart", "in the arms", "in the gut wall", "in tendons"], correctIndex: 0, explanation: "Cardiac muscle is unique to the heart." },
        { prompt: "Which muscle is involuntary and striated?", options: ["cardiac", "skeletal", "smooth", "none"], correctIndex: 0, explanation: "Cardiac muscle is striated but involuntary." },
        { prompt: "Peristalsis (moving food along the gut) is done by", options: ["smooth muscle", "skeletal muscle", "cardiac muscle", "bone"], correctIndex: 0, explanation: "Smooth muscle contracts in waves." },
        { prompt: "Skeletal muscles attach to bones by", options: ["tendons", "ligaments", "cartilage", "skin"], correctIndex: 0, explanation: "Tendons join muscle to bone." },
        { prompt: "Muscles that work as opposing partners are", options: ["antagonistic pairs", "identical pairs", "single muscles", "smooth muscles"], correctIndex: 0, explanation: "One contracts as the other relaxes." },
        { prompt: "To bend the arm, the biceps", options: ["contracts and the triceps relaxes", "relaxes and the triceps contracts", "and triceps both contract", "does nothing"], correctIndex: 0, explanation: "Biceps flexes the arm." },
        { prompt: "Muscles can only", options: ["pull (contract)", "push", "both push and pull equally", "grow bones"], correctIndex: 0, explanation: "They shorten to pull." },
        { prompt: "Muscle contraction uses energy from", options: ["ATP (respiration)", "sunlight directly", "digestion in the muscle", "bone marrow"], correctIndex: 0, explanation: "ATP powers contraction." },
        { prompt: "During hard exercise, muscles may respire anaerobically and produce", options: ["lactic acid", "oxygen", "glucose", "protein"], correctIndex: 0, explanation: "Anaerobic respiration makes lactic acid." },
        { prompt: "Which muscle type maintains posture?", options: ["skeletal muscle", "cardiac muscle", "smooth muscle", "none"], correctIndex: 0, explanation: "Skeletal muscles hold the body upright." },
        { prompt: "The heartbeat is produced by", options: ["cardiac muscle", "skeletal muscle", "smooth muscle", "tendons"], correctIndex: 0, explanation: "Cardiac muscle pumps blood." },
        { prompt: "Which is under conscious (voluntary) control?", options: ["skeletal muscle", "cardiac muscle", "smooth muscle in the gut", "smooth muscle in vessels"], correctIndex: 0, explanation: "Only skeletal muscle is voluntary." },
        { prompt: "Smooth muscle in blood vessels helps to", options: ["control vessel width and blood flow", "make the heart beat", "move bones", "produce hormones"], correctIndex: 0, explanation: "It narrows or widens vessels." },
        { prompt: "To straighten the arm, the triceps", options: ["contracts and the biceps relaxes", "and biceps both relax", "relaxes and the biceps contracts", "makes lactic acid"], correctIndex: 0, explanation: "Triceps extends the arm." },
        { prompt: "Cardiac muscle is special because it", options: ["works continuously without tiring", "tires quickly", "is voluntary", "moves bones"], correctIndex: 0, explanation: "It contracts rhythmically for life." },
        { prompt: "Alcohol and drug abuse can", options: ["weaken muscles and coordination", "strengthen muscles", "replace tendons", "make bones softer only"], correctIndex: 0, explanation: "Substance abuse harms the muscular system." },
        { prompt: "Muscles also produce", options: ["heat as they respire", "urine", "bile", "saliva"], correctIndex: 0, explanation: "Respiration in muscle releases heat." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three types of muscle and state where each is found.", answerKey: "Skeletal – attached to bones; smooth – walls of gut/blood vessels/bladder; cardiac – heart wall only. 1 mark each type+location (max 3, +1 for full).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which muscle type is involuntary and found only in the heart?", options: ["Cardiac", "Skeletal", "Smooth", "Voluntary"], correctIndex: 0, answerKey: "Cardiac muscle is heart-only and involuntary. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by an antagonistic pair of muscles, using the biceps and triceps.", answerKey: "Two muscles with opposite actions: as one contracts, the other relaxes. Biceps contracts to bend the arm (triceps relaxes); triceps contracts to straighten it (biceps relaxes). Award for the opposing action idea + example.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why must muscles work in pairs to move a bone?", answerKey: "A muscle can only pull (contract/shorten), not push; so one muscle moves the bone one way and its antagonist pulls it back. Award for 'muscles only pull' + need for a second muscle.", marks: 4 },
        { type: "ESSAY", prompt: "Compare the three types of muscle and describe how skeletal muscles cooperate with the skeleton to move the body.", answerKey: "Skeletal: voluntary, striated, on bones, moves skeleton; smooth: involuntary, non-striated, organ walls, peristalsis; cardiac: involuntary, striated, heart, pumps blood (up to 8). Skeletal muscles attach by tendons, contract to pull bones which act as levers at joints, work in antagonistic pairs (biceps/triceps), powered by ATP (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 22.2 Introduction to the Reproductive System; 7.5 Sexual Reproduction: Meiosis and gametogenesis (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/22:_Reproductive_System/22.02:_Introduction_to_the_Reproductive_System)
    {
      slug: "reproductive-systems-and-gamete-formation",
      title: "Reproductive Systems and Gamete Formation",
      objective:
        "By the end of the topic, learners should be able to name and give the functions of the male and female reproductive organs, describe spermatogenesis and oogenesis, describe the structure of a sperm cell, and outline the body changes of adolescence.",
      estimatedMinutes: 110,
      notes: `## Purpose of the reproductive system

- The reproductive system makes and joins **gametes** (sex cells): **sperm** in males and **eggs (ova)** in females, and (in the female) carries the developing baby.
- Gametes are made by **meiosis**, so each carries **half** the chromosome number (23 in humans).

## Male reproductive organs

| Organ | Function |
| --- | --- |
| **Testes** (in the scrotum) | make **sperm** and the hormone **testosterone** |
| **Epididymis** | stores and matures sperm |
| **Sperm duct (vas deferens)** | carries sperm to the urethra |
| **Prostate and other glands** | add fluid to form **semen** |
| **Penis / urethra** | passes semen into the female |

- Sperm are made in the coiled **seminiferous tubules** of the testes.

## Female reproductive organs

| Organ | Function |
| --- | --- |
| **Ovaries** | make **eggs (ova)** and the hormones **oestrogen** and **progesterone** |
| **Oviduct (fallopian tube)** | carries the egg to the uterus; site of **fertilization** |
| **Uterus (womb)** | where the baby develops; its lining (endometrium) thickens each month |
| **Cervix** | ring of muscle at the neck of the uterus |
| **Vagina** | receives the penis and semen; birth canal |

## Gamete formation (gametogenesis)

- **Spermatogenesis** — the making of **sperm** in the testes; from puberty onwards, millions are produced continuously.
- **Oogenesis** — the making of **eggs** in the ovaries; usually **one egg** matures and is released about every month.

## Structure of a sperm cell

- **Head** — carries the nucleus (genetic material) and the **acrosome**, which holds enzymes to penetrate the egg.
- **Midpiece** — packed with mitochondria that release energy (ATP) for swimming.
- **Tail (flagellum)** — lashes to move the sperm forward.

\`\`\`svg A human sperm cell
<svg viewBox="0 0 240 80" role="img" aria-label="Sperm cell head midpiece and tail">
  <ellipse cx="35" cy="40" rx="22" ry="15" fill="#c7d2fe" stroke="currentColor"/>
  <path d="M14 40 Q22 33 30 40" fill="none" stroke="currentColor"/>
  <rect x="57" y="35" width="28" height="10" fill="#a5b4fc" stroke="currentColor"/>
  <path d="M85 40 Q120 20 150 40 Q180 60 220 40" fill="none" stroke="currentColor" stroke-width="2"/>
  <text x="30" y="72" font-size="9" fill="currentColor">head</text>
  <text x="60" y="24" font-size="9" fill="currentColor">midpiece</text>
  <text x="165" y="70" font-size="9" fill="currentColor">tail</text>
</svg>
\`\`\`

## The egg cell

- Much **larger** than a sperm; not motile; carries a store of food (yolk) for the early embryo, plus the nucleus with 23 chromosomes.

## Adolescence (puberty)

- **Puberty** is the time when the reproductive organs mature, controlled by sex hormones (**testosterone** in boys, **oestrogen** in girls).
- **Boys:** deeper voice, facial and body hair, broader shoulders, sperm production begins.
- **Girls:** breasts develop, hips widen, body hair grows, menstruation (periods) begins.
- Both experience growth spurts and emotional changes.

## Common errors and misconceptions

- **"Gametes have the full chromosome number"** — gametes have **half** (23); the full number (46) is restored at fertilization.
- **"The uterus makes eggs"** — eggs are made in the **ovaries**; the uterus holds the developing baby.
- **"Sperm energy comes from the head"** — energy for swimming comes from mitochondria in the **midpiece**.
- **"Testosterone is only about muscles"** — it drives sperm production and male puberty changes.`,
      workedExample: `**Task.** (a) State where sperm and eggs are made and one hormone from each organ. (b) Match each sperm part to its job: head, midpiece, tail. (c) Why do gametes have only 23 chromosomes?

**Solution**

(a) Sites and hormones:
- **Sperm** are made in the **testes**, which also make **testosterone**.
- **Eggs** are made in the **ovaries**, which also make **oestrogen** (and progesterone).

(b) Sperm parts:
- **Head** — carries the nucleus (genes) and the acrosome with enzymes to enter the egg.
- **Midpiece** — full of mitochondria that release energy for swimming.
- **Tail** — lashes to move the sperm forward.

(c) Gametes are made by **meiosis**, which halves the chromosome number to **23**. When a sperm (23) fertilises an egg (23), the full number **46** is restored in the zygote. This keeps the chromosome number constant from generation to generation.

**Answer:** (a) testes → sperm + testosterone; ovaries → eggs + oestrogen; (b) head = genes/acrosome, midpiece = energy, tail = movement; (c) meiosis halves the number to 23 so fertilization restores 46.`,
      quiz: [
        { prompt: "Sperm are produced in the", options: ["testes", "ovaries", "uterus", "penis"], correctIndex: 0, explanation: "The testes make sperm." },
        { prompt: "Eggs (ova) are produced in the", options: ["ovaries", "testes", "oviducts", "vagina"], correctIndex: 0, explanation: "The ovaries make eggs." },
        { prompt: "The male sex hormone is", options: ["testosterone", "oestrogen", "insulin", "progesterone"], correctIndex: 0, explanation: "Testes make testosterone." },
        { prompt: "Fertilization usually takes place in the", options: ["oviduct (fallopian tube)", "uterus", "ovary", "vagina"], correctIndex: 0, explanation: "Sperm meets egg in the oviduct." },
        { prompt: "The baby develops in the", options: ["uterus (womb)", "ovary", "oviduct", "vagina"], correctIndex: 0, explanation: "The uterus holds the developing baby." },
        { prompt: "The making of sperm is called", options: ["spermatogenesis", "oogenesis", "ovulation", "fertilization"], correctIndex: 0, explanation: "Spermatogenesis is sperm production." },
        { prompt: "The making of eggs is called", options: ["oogenesis", "spermatogenesis", "meiosis only", "gestation"], correctIndex: 0, explanation: "Oogenesis is egg production." },
        { prompt: "Gametes are made by", options: ["meiosis", "mitosis only", "binary fission", "budding"], correctIndex: 0, explanation: "Meiosis halves the chromosome number." },
        { prompt: "A human gamete carries how many chromosomes?", options: ["23", "46", "12", "48"], correctIndex: 0, explanation: "Gametes are haploid (23)." },
        { prompt: "The part of the sperm with enzymes to enter the egg is the", options: ["acrosome (head)", "tail", "midpiece", "nucleus only"], correctIndex: 0, explanation: "The acrosome digests the egg surface." },
        { prompt: "Energy for a sperm's swimming comes from the", options: ["mitochondria in the midpiece", "acrosome", "tail tip", "head nucleus"], correctIndex: 0, explanation: "Midpiece mitochondria make ATP." },
        { prompt: "The tail of the sperm is used for", options: ["movement", "storing food", "digestion", "making hormones"], correctIndex: 0, explanation: "The flagellum propels the sperm." },
        { prompt: "Compared with a sperm, an egg is", options: ["larger and non-motile", "smaller and motile", "the same size", "without a nucleus"], correctIndex: 0, explanation: "The egg is large with food store." },
        { prompt: "Sperm are stored and matured in the", options: ["epididymis", "prostate", "bladder", "kidney"], correctIndex: 0, explanation: "The epididymis stores maturing sperm." },
        { prompt: "Fluid added to sperm to form semen comes from the", options: ["prostate and other glands", "ovaries", "liver", "kidneys"], correctIndex: 0, explanation: "Glands add fluid to make semen." },
        { prompt: "During puberty in girls, one change is", options: ["menstruation begins", "the voice breaks deeply", "sperm are made", "beard grows"], correctIndex: 0, explanation: "Periods start at puberty in girls." },
        { prompt: "During puberty in boys, one change is", options: ["sperm production begins", "menstruation begins", "eggs are released", "breasts develop"], correctIndex: 0, explanation: "Testosterone starts sperm production." },
        { prompt: "The hormone that drives female puberty is", options: ["oestrogen", "testosterone", "insulin", "adrenaline"], correctIndex: 0, explanation: "Oestrogen drives female changes." },
        { prompt: "At fertilization the chromosome number becomes", options: ["46 (restored)", "23", "92", "12"], correctIndex: 0, explanation: "23 + 23 = 46." },
        { prompt: "The sperm duct that carries sperm to the urethra is the", options: ["vas deferens", "oviduct", "cervix", "urethra of the kidney"], correctIndex: 0, explanation: "The vas deferens carries sperm." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the organ that makes (a) sperm and (b) eggs, and give one hormone made by each.", answerKey: "(a) Testes – testosterone. (b) Ovaries – oestrogen (or progesterone). 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Where does fertilization normally occur?", options: ["Oviduct (fallopian tube)", "Uterus", "Ovary", "Vagina"], correctIndex: 0, answerKey: "Fertilization happens in the oviduct. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe the structure of a sperm cell and the function of each part.", answerKey: "Head: nucleus (genes) + acrosome (enzymes to enter egg); midpiece: mitochondria for energy; tail: for swimming/movement. 1 mark each part+function.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Why do gametes contain only half the normal chromosome number?", answerKey: "Gametes are made by meiosis which halves the number to 23; at fertilization sperm (23) + egg (23) restore 46, keeping the number constant across generations. Award for meiosis/halving + restoration.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the male and female reproductive organs and their functions, and explain the changes that occur during adolescence.", answerKey: "Male: testes (sperm + testosterone), epididymis, vas deferens, glands (semen), penis/urethra (up to 5). Female: ovaries (eggs + oestrogen/progesterone), oviduct (fertilization), uterus (development), cervix, vagina (up to 5). Adolescence: hormone-driven puberty — boys (voice, hair, sperm), girls (breasts, hips, menstruation), growth spurt, emotional changes (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 22.7 Menstrual Cycle (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/22:_Reproductive_System/22.07:_Menstrual_Cycle)
    {
      slug: "menstrual-cycle-fertilization-and-conception",
      title: "The Menstrual Cycle, Fertilization and Conception",
      objective:
        "By the end of the topic, learners should be able to describe the phases of the menstrual cycle and its hormones, explain fertilization and conception, describe sex determination, and state common causes of infertility.",
      estimatedMinutes: 100,
      notes: `## The menstrual cycle

- The **menstrual cycle** is a roughly **28-day** cycle that prepares the female body for pregnancy. It is controlled by hormones from the pituitary gland (**FSH, LH**) and the ovaries (**oestrogen, progesterone**).

| Day (approx.) | Phase | What happens |
| --- | --- | --- |
| **1–5** | **Menstruation** | the thickened uterus lining breaks down and passes out as the "period" |
| **6–13** | **Follicular / repair** | **FSH** ripens a follicle; **oestrogen** rises and rebuilds the uterus lining |
| **~14** | **Ovulation** | a surge of **LH** makes the follicle release an egg from the ovary |
| **15–28** | **Luteal** | the empty follicle becomes the **corpus luteum**, which makes **progesterone** to keep the lining thick |

- If the egg is **not fertilised**, the corpus luteum breaks down, progesterone falls, and the lining sheds — a new cycle begins.
- If the egg **is fertilised**, progesterone stays high, the lining is kept, and menstruation stops (pregnancy begins).

## Key hormones

- **FSH** (follicle-stimulating hormone) — ripens a follicle in the ovary.
- **LH** (luteinising hormone) — its surge triggers **ovulation**.
- **Oestrogen** — repairs and thickens the uterus lining.
- **Progesterone** — maintains the thick lining ready for pregnancy.

## Fertilization and conception

- **Fertilization** — a sperm nucleus fuses with an egg nucleus in the oviduct, forming a **zygote** (46 chromosomes).
- The zygote divides by mitosis into a ball of cells (**embryo**) as it moves to the uterus.
- **Conception / implantation** — the embryo sinks into the thick uterus lining and begins to develop; the **placenta** later supplies it with food and oxygen.

## Sex determination

- Sex is decided by the **sex chromosomes**: females are **XX**, males are **XY**.
- Every egg carries an **X**. A sperm carries **either X or Y**.
- **X sperm + egg → XX (girl)**; **Y sperm + egg → XY (boy)**. The **father's sperm** determines the baby's sex.

\`\`\`svg Sex determination cross
<svg viewBox="0 0 200 130" role="img" aria-label="Punnett square for sex determination">
  <rect x="60" y="30" width="60" height="40" fill="none" stroke="currentColor"/>
  <rect x="120" y="30" width="60" height="40" fill="none" stroke="currentColor"/>
  <rect x="60" y="70" width="60" height="40" fill="none" stroke="currentColor"/>
  <rect x="120" y="70" width="60" height="40" fill="none" stroke="currentColor"/>
  <text x="30" y="55" font-size="12" fill="currentColor">X</text>
  <text x="30" y="95" font-size="12" fill="currentColor">X</text>
  <text x="86" y="22" font-size="12" fill="currentColor">X</text>
  <text x="146" y="22" font-size="12" fill="currentColor">Y</text>
  <text x="80" y="55" font-size="12" fill="currentColor">XX</text>
  <text x="140" y="55" font-size="12" fill="currentColor">XY</text>
  <text x="80" y="95" font-size="12" fill="currentColor">XX</text>
  <text x="140" y="95" font-size="12" fill="currentColor">XY</text>
  <text x="30" y="18" font-size="9" fill="currentColor">eggs / sperm</text>
</svg>
\`\`\`

## Infertility

- **Infertility** is the inability to conceive. Causes include:
- in men: **low sperm count** or poorly swimming sperm;
- in women: **failure to ovulate**, **blocked oviducts** (often from untreated STIs), or hormone problems;
- other factors: age, poor health, some infections.

## Common errors and misconceptions

- **"The mother determines the baby's sex"** — the **father's sperm** (X or Y) decides the sex; eggs always carry X.
- **"Ovulation happens during the period"** — ovulation is about **day 14**, roughly mid-cycle.
- **"Fertilization happens in the uterus"** — it happens in the **oviduct**; the embryo implants in the uterus.
- **"A period means an egg was fertilised"** — a period happens when the egg is **not** fertilised and the lining sheds.`,
      workedExample: `**Task.** In a 28-day cycle: (a) On about which day does ovulation occur and which hormone triggers it? (b) What happens to the uterus lining if the egg is not fertilised? (c) A couple cannot conceive; the man's sperm count is normal but the woman's oviducts are blocked. Explain why this causes infertility.

**Solution**

(a) Ovulation occurs about **day 14**. A surge of **LH (luteinising hormone)** from the pituitary makes the ripe follicle release the egg.

(b) If the egg is **not fertilised**, the corpus luteum breaks down and **progesterone falls**. Without progesterone the thick uterus lining cannot be maintained, so it **breaks down and is shed** as menstruation, and a new cycle begins.

(c) Fertilization normally happens in the **oviduct**, where sperm meets egg. If the oviducts are **blocked**, the sperm cannot reach the egg and the egg cannot travel to the uterus, so no fertilization or implantation occurs — hence infertility. (Blocked oviducts often result from untreated STIs.)

**Answer:** (a) day 14, triggered by the LH surge; (b) progesterone falls and the lining sheds as a period; (c) blocked oviducts stop sperm and egg meeting, preventing fertilization.`,
      quiz: [
        { prompt: "The menstrual cycle lasts about", options: ["28 days", "7 days", "90 days", "365 days"], correctIndex: 0, explanation: "A typical cycle is ~28 days." },
        { prompt: "During menstruation (days 1–5)", options: ["the uterus lining breaks down", "an egg is released", "the lining thickens", "fertilization occurs"], correctIndex: 0, explanation: "The lining is shed as the period." },
        { prompt: "Ovulation usually occurs about day", options: ["14", "1", "5", "28"], correctIndex: 0, explanation: "Mid-cycle, around day 14." },
        { prompt: "The hormone whose surge triggers ovulation is", options: ["LH", "progesterone", "insulin", "testosterone"], correctIndex: 0, explanation: "The LH surge releases the egg." },
        { prompt: "FSH acts to", options: ["ripen a follicle in the ovary", "shed the lining", "end the cycle", "make sperm"], correctIndex: 0, explanation: "FSH stimulates a follicle." },
        { prompt: "Oestrogen mainly", options: ["repairs and thickens the uterus lining", "releases the egg", "produces sperm", "cools the body"], correctIndex: 0, explanation: "Oestrogen rebuilds the lining." },
        { prompt: "Progesterone is made by the", options: ["corpus luteum", "pituitary", "testis", "liver"], correctIndex: 0, explanation: "The corpus luteum secretes progesterone." },
        { prompt: "Progesterone acts to", options: ["maintain the thick uterus lining", "shed the lining", "trigger ovulation", "make FSH"], correctIndex: 0, explanation: "It keeps the lining ready for pregnancy." },
        { prompt: "If the egg is not fertilised, progesterone", options: ["falls and the lining sheds", "rises and stays high", "turns into FSH", "has no effect"], correctIndex: 0, explanation: "Falling progesterone causes menstruation." },
        { prompt: "Fertilization is the fusion of", options: ["a sperm nucleus and an egg nucleus", "two eggs", "two sperm", "an egg and a hormone"], correctIndex: 0, explanation: "Male and female nuclei join." },
        { prompt: "The cell formed at fertilization is the", options: ["zygote", "gamete", "corpus luteum", "follicle"], correctIndex: 0, explanation: "A zygote has 46 chromosomes." },
        { prompt: "Implantation (conception) means the embryo", options: ["sinks into the uterus lining", "leaves the body", "returns to the ovary", "splits into sperm"], correctIndex: 0, explanation: "The embryo embeds in the lining." },
        { prompt: "The developing baby is supplied with food and oxygen by the", options: ["placenta", "corpus luteum", "cervix", "acrosome"], correctIndex: 0, explanation: "The placenta exchanges materials." },
        { prompt: "Female sex chromosomes are", options: ["XX", "XY", "YY", "XO"], correctIndex: 0, explanation: "Females are XX." },
        { prompt: "Male sex chromosomes are", options: ["XY", "XX", "YY", "OX"], correctIndex: 0, explanation: "Males are XY." },
        { prompt: "Every egg carries a", options: ["X chromosome", "Y chromosome", "either X or Y", "no sex chromosome"], correctIndex: 0, explanation: "Eggs always carry X." },
        { prompt: "The sex of the baby is determined by", options: ["the father's sperm (X or Y)", "the mother's egg", "the uterus", "the placenta"], correctIndex: 0, explanation: "Sperm may be X or Y." },
        { prompt: "A Y sperm fertilising an egg gives", options: ["a boy (XY)", "a girl (XX)", "no baby", "twins"], correctIndex: 0, explanation: "Y sperm + X egg = XY." },
        { prompt: "A cause of infertility in women is", options: ["blocked oviducts", "a normal cycle", "healthy ovulation", "a thick lining"], correctIndex: 0, explanation: "Blockage stops sperm meeting egg." },
        { prompt: "A cause of infertility in men is", options: ["a low sperm count", "high testosterone only", "strong sperm", "normal semen"], correctIndex: 0, explanation: "Too few sperm reduce fertility." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State what happens in the uterus during (a) menstruation and (b) the follicular/repair phase.", answerKey: "(a) The thickened lining breaks down and is shed as the period. (b) Oestrogen (after FSH ripens a follicle) repairs and thickens the lining again. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which hormone surge triggers ovulation?", options: ["LH", "Progesterone", "FSH", "Testosterone"], correctIndex: 0, answerKey: "The LH surge causes ovulation. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how the sex of a baby is determined.", answerKey: "Eggs all carry X; sperm carry X or Y. X sperm → XX girl; Y sperm → XY boy. The father's sperm determines sex. Award for X/Y sperm + father determines.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two causes of infertility, one in men and one in women.", answerKey: "Men: low sperm count / poor sperm motility. Women: failure to ovulate / blocked oviducts / hormone imbalance. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the events and hormones of the menstrual cycle, and explain what happens after fertilization if it occurs.", answerKey: "Menstruation (days 1–5, lining sheds); follicular (FSH ripens follicle, oestrogen thickens lining); ovulation (~day 14, LH surge); luteal (corpus luteum, progesterone maintains lining) (up to 9). If not fertilised, progesterone falls and lining sheds. If fertilised: zygote forms in oviduct, divides to embryo, implants in uterus, progesterone stays high, placenta develops, menstruation stops (up to 6).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 21.4 Sexually Transmitted Infections (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/21:_Disease/21.4:_Sexually_Transmitted_Infections)
    {
      slug: "stis-hiv-aids-and-family-planning",
      title: "STIs, HIV/AIDS and Family Planning",
      objective:
        "By the end of the topic, learners should be able to name common STIs and how they spread, explain how HIV affects the immune system, describe ways to prevent STIs, and outline methods of family planning.",
      estimatedMinutes: 100,
      notes: `## Sexually transmitted infections (STIs)

- **STIs** are infections passed mainly through **unprotected sexual contact**. They may be caused by **bacteria**, **viruses** or **parasites**.

| STI | Cause | Curable? |
| --- | --- | --- |
| **Gonorrhoea** | bacterium | yes, with antibiotics (some resistant) |
| **Syphilis** | bacterium | yes, with antibiotics (e.g. penicillin) |
| **Chlamydia** | bacterium | yes, with antibiotics |
| **Genital herpes** | virus | no cure; can be treated to control |
| **Genital warts (HPV)** | virus | no cure; can be treated |
| **HIV/AIDS** | virus | no cure; controlled with antiretroviral drugs |

- **Bacterial** STIs can usually be **cured** with antibiotics; **viral** STIs can be **treated** but not fully cured.
- Untreated STIs can cause **infertility**, blindness in babies, and increase HIV risk.

## How STIs spread

- Unprotected vaginal, anal or oral sex.
- Contact with infected **blood** (shared needles, unscreened transfusions).
- From an infected **mother to her baby** during birth or breastfeeding.

## HIV and AIDS

- **HIV** (human immunodeficiency virus) attacks the **immune system**, especially the **T-helper (CD4) white blood cells** that coordinate defence.
- As these cells are destroyed, the body cannot fight infections. The advanced stage is **AIDS**, when the weakened body suffers "opportunistic" infections.
- HIV cannot be spread by sharing food, hugging, or mosquito bites.
- **Testing** lets people know their status; **antiretroviral drugs** keep the virus low and let people live long, healthy lives.

## Preventing STIs

1. **Abstinence** — not having sex is the surest prevention.
2. **Being faithful** to one uninfected partner.
3. **Correct use of condoms** — a barrier that greatly reduces transmission.
4. **Not sharing needles**; using screened blood.
5. **Testing and early treatment**; treating a partner too.

## Gender-based violence (GBV)

- **GBV** (including rape and coercion) is harmful and wrong; it can spread STIs and cause injury and trauma. Everyone has the right to refuse, and survivors should get medical and counselling support.

## Family planning

- **Family planning** lets couples choose **how many children to have and when**, protecting the health of mother and children.

| Method | How it works |
| --- | --- |
| **Barrier (condom, diaphragm)** | stops sperm reaching the egg; condoms also prevent STIs |
| **Hormonal (pill, injection, implant)** | stop ovulation |
| **Intra-uterine device (IUD)** | prevents implantation |
| **Natural (rhythm/calendar)** | avoiding sex near ovulation |
| **Surgical (vasectomy, tubal ligation)** | permanent — cuts the sperm duct or oviducts |

- Only the **condom** both prevents pregnancy **and** protects against STIs ("double protection").

## Common errors and misconceptions

- **"All STIs can be cured"** — bacterial STIs can be cured; **viral** ones (HIV, herpes, HPV) cannot yet be cured.
- **"HIV can be caught by hugging or mosquitoes"** — it spreads through sex, blood and mother-to-child, not casual contact.
- **"The pill protects against STIs"** — hormonal methods prevent pregnancy but **not** STIs; only condoms do both.
- **"An infected person always looks sick"** — many STIs show **no symptoms** at first, so testing matters.`,
      workedExample: `**Task.** (a) State whether gonorrhoea and HIV are bacterial or viral, and whether each can be cured. (b) Which cells does HIV attack, and what is the result? (c) A couple want to prevent both pregnancy and STIs — which method should they use and why?

**Solution**

(a) Cause and cure:
- **Gonorrhoea** is caused by a **bacterium** and can usually be **cured with antibiotics**.
- **HIV** is caused by a **virus**; it **cannot be cured**, but antiretroviral drugs control it.

(b) HIV attacks the **T-helper (CD4) white blood cells** of the immune system. As these are destroyed, the body **loses its defences** and cannot fight infections; the advanced stage is **AIDS**, with dangerous opportunistic infections.

(c) They should use the **condom**. It is a **barrier** that both stops sperm reaching the egg (preventing pregnancy) **and** blocks the exchange of body fluids that carry STIs — so it gives "double protection". Hormonal methods prevent pregnancy but not STIs.

**Answer:** (a) gonorrhoea = bacterial, curable; HIV = viral, not curable; (b) HIV destroys T-helper (CD4) cells, weakening immunity and leading to AIDS; (c) the condom, because it prevents both pregnancy and STIs.`,
      quiz: [
        { prompt: "STIs are spread mainly by", options: ["unprotected sexual contact", "sharing food", "shaking hands", "coughing"], correctIndex: 0, explanation: "Sexual contact is the main route." },
        { prompt: "Gonorrhoea is caused by a", options: ["bacterium", "virus", "fungus", "worm"], correctIndex: 0, explanation: "It is a bacterial STI." },
        { prompt: "HIV is caused by a", options: ["virus", "bacterium", "protozoan", "fungus"], correctIndex: 0, explanation: "HIV is a virus." },
        { prompt: "Bacterial STIs can usually be", options: ["cured with antibiotics", "never treated", "cured with water", "ignored safely"], correctIndex: 0, explanation: "Antibiotics cure bacterial STIs." },
        { prompt: "Viral STIs such as HIV and herpes", options: ["cannot yet be fully cured", "are cured by antibiotics", "cause no harm", "spread by air"], correctIndex: 0, explanation: "Viral STIs are treated, not cured." },
        { prompt: "HIV attacks which cells?", options: ["T-helper (CD4) white blood cells", "red blood cells", "nerve cells", "bone cells"], correctIndex: 0, explanation: "HIV destroys CD4 immune cells." },
        { prompt: "The advanced stage of HIV infection is", options: ["AIDS", "anaemia", "cancer only", "malaria"], correctIndex: 0, explanation: "AIDS is the late stage." },
        { prompt: "HIV can be spread by", options: ["infected blood and unprotected sex", "hugging", "mosquito bites", "sharing plates"], correctIndex: 0, explanation: "Blood, sex and mother-to-child spread HIV." },
        { prompt: "HIV is NOT spread by", options: ["hugging or sharing food", "unprotected sex", "shared needles", "mother to baby"], correctIndex: 0, explanation: "Casual contact does not spread HIV." },
        { prompt: "The surest way to avoid STIs is", options: ["abstinence", "eating well", "exercise", "sleeping more"], correctIndex: 0, explanation: "Not having sex prevents STIs." },
        { prompt: "Which method prevents BOTH pregnancy and STIs?", options: ["condom", "contraceptive pill", "injection", "IUD"], correctIndex: 0, explanation: "Only condoms give double protection." },
        { prompt: "The contraceptive pill works by", options: ["stopping ovulation", "killing sperm in the blood", "preventing STIs", "curing HIV"], correctIndex: 0, explanation: "Hormones stop egg release." },
        { prompt: "A permanent method of family planning is", options: ["vasectomy or tubal ligation", "the pill", "the condom", "the calendar method"], correctIndex: 0, explanation: "Surgery permanently blocks the tubes." },
        { prompt: "Untreated STIs can cause", options: ["infertility", "stronger immunity", "better eyesight", "taller growth"], correctIndex: 0, explanation: "They can block oviducts and cause infertility." },
        { prompt: "Testing for HIV is important because", options: ["people can start treatment and avoid spreading it", "it cures HIV instantly", "it prevents all disease", "it is required to eat"], correctIndex: 0, explanation: "Knowing status allows care and prevention." },
        { prompt: "An IUD prevents pregnancy by", options: ["stopping implantation", "curing STIs", "making more eggs", "raising body temperature"], correctIndex: 0, explanation: "It stops the embryo implanting." },
        { prompt: "Family planning helps by", options: ["letting couples choose the number and timing of children", "curing all diseases", "increasing STIs", "stopping menstruation forever"], correctIndex: 0, explanation: "It protects mother and child health." },
        { prompt: "Gender-based violence (GBV) is", options: ["harmful and can spread STIs", "a safe practice", "a family planning method", "a type of vaccine"], correctIndex: 0, explanation: "GBV is harmful and wrong." },
        { prompt: "Many STIs are dangerous partly because", options: ["they often show no symptoms at first", "they always cause a rash", "they are visible immediately", "they only affect animals"], correctIndex: 0, explanation: "Symptomless carriers spread STIs unknowingly." },
        { prompt: "Antiretroviral drugs are used to", options: ["control HIV and keep people healthy", "cure gonorrhoea", "prevent pregnancy", "treat broken bones"], correctIndex: 0, explanation: "ARVs suppress HIV." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name two bacterial STIs and one viral STI.", answerKey: "Bacterial (any two): gonorrhoea, syphilis, chlamydia. Viral (one): HIV, genital herpes, or genital warts (HPV). 1 mark each (max 3).", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which family planning method protects against both pregnancy and STIs?", options: ["Condom", "Contraceptive pill", "IUD", "Injection"], correctIndex: 0, answerKey: "Only condoms give double protection. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how HIV weakens the body's defences.", answerKey: "HIV infects and destroys T-helper (CD4) white blood cells that coordinate the immune response; as they fall, the body cannot fight infections, leading to AIDS with opportunistic infections. Award for CD4/T-helper cells + loss of immunity.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three ways to prevent the spread of STIs.", answerKey: "Any three: abstinence; faithfulness to one uninfected partner; correct condom use; not sharing needles/screened blood; testing and early treatment. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss sexually transmitted infections under the headings: causes, how they spread, effects, and prevention, and outline the main methods of family planning.", answerKey: "Causes: bacteria (gonorrhoea, syphilis, chlamydia), viruses (HIV, herpes, HPV) (up to 3). Spread: unprotected sex, infected blood/needles, mother-to-child (up to 3). Effects: infertility, illness, HIV→AIDS, harm to babies (up to 3). Prevention: abstinence, faithfulness, condoms, testing/treatment, no shared needles (up to 3). Family planning: barrier, hormonal, IUD, natural, surgical — condom also prevents STIs (up to 3).", marks: 15 },
      ],
    },
  ],
};
