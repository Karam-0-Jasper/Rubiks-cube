import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 12,
// Semester Two, Period V: Nervous and Endocrine Systems (Control and
// Co-ordination). Topics follow the CONTENTS items: (1) organisation of the
// nervous system (CNS and PNS); (2) neurons and the nerve impulse (resting/action
// potential, synapse, myelin); (3) the brain and spinal cord; (4) types of nervous
// action — voluntary/involuntary, the reflex arc and the autonomic nervous system;
// (5) the sense organs, the eye and ear; (6) the endocrine system (glands,
// hormones and negative feedback). Effects of substance abuse on the nervous
// system are noted where relevant.
export const biologyG12P5: PeriodContent = {
  grade: 12,
  number: 5,
  title: "Nervous and Endocrine Systems",
  summary:
    "Period V of the MoE Grade 12 Biology syllabus. Learners study how the body is controlled and co-ordinated: the organisation of the nervous system into central and peripheral parts; the neuron and how a nerve impulse travels and crosses a synapse; the brain and spinal cord; voluntary and reflex actions and the autonomic nervous system; the eye and ear as sense organs; and the endocrine system of glands and hormones controlled by negative feedback.",
  topics: [
    // source: LibreTexts — Human Biology (Wakim & Grewal) 11.2 Introduction to the Nervous System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/11%3A_Nervous_System/11.2%3A_Introduction_to_the_Nervous_System)
    {
      slug: "organisation-of-the-nervous-system",
      title: "Organisation of the Nervous System",
      objective:
        "By the end of the topic, learners should be able to state the functions of the nervous system, name its central and peripheral divisions, and distinguish sensory and motor neurons.",
      estimatedMinutes: 80,
      notes: `## Function of the nervous system

- The **nervous system** detects changes (stimuli) and sends fast, electrical **nerve impulses** to control and co-ordinate the body.
- It works with the **endocrine system** (hormones), but the nervous system acts **faster** and for a **shorter** time.

## The two main divisions

| Division | Made of | Job |
| --- | --- | --- |
| **Central nervous system (CNS)** | brain and spinal cord | processes information; decides responses |
| **Peripheral nervous system (PNS)** | nerves (bundles of axons) linking the CNS to the body | carries impulses to and from the CNS |

\`\`\`svg Divisions of the nervous system
<svg viewBox="0 0 260 90" role="img" aria-label="Nervous system divided into CNS and PNS">
  <rect x="90" y="10" width="80" height="24" rx="6" fill="#e0e7ff" stroke="currentColor"/>
  <text x="130" y="26" font-size="9" text-anchor="middle" fill="currentColor">Nervous system</text>
  <rect x="20" y="58" width="90" height="24" rx="6" fill="#c7d2fe" stroke="currentColor"/>
  <text x="65" y="74" font-size="8" text-anchor="middle" fill="currentColor">CNS (brain, cord)</text>
  <rect x="150" y="58" width="90" height="24" rx="6" fill="#c7d2fe" stroke="currentColor"/>
  <text x="195" y="74" font-size="8" text-anchor="middle" fill="currentColor">PNS (nerves)</text>
  <line x1="120" y1="34" x2="65" y2="58" stroke="currentColor"/>
  <line x1="140" y1="34" x2="195" y2="58" stroke="currentColor"/>
</svg>
\`\`\`

## The pathway of a response

A stimulus produces a response along this path:

**stimulus → receptor → sensory neuron → CNS → motor neuron → effector → response**

- **Receptor** — detects the stimulus (e.g. eye, ear, skin).
- **Sensory (afferent) neuron** — carries impulses **to** the CNS.
- **Motor (efferent) neuron** — carries impulses **from** the CNS to an effector.
- **Effector** — a muscle or gland that carries out the response.
- **Relay (inter) neurons** connect neurons within the CNS.

## Nerves and neurons

- A **neuron** is a nerve cell; a **nerve** is a bundle of many neuron **axons**.
- The nervous system is made of billions of neurons that carry electrical impulses.

## Common errors and misconceptions

- **"A nerve and a neuron are the same"** — a neuron is one cell; a **nerve** is a bundle of many axons.
- **"Sensory neurons carry impulses away from the CNS"** — sensory neurons carry impulses **to** the CNS; motor neurons carry them away.
- **"The CNS includes the nerves in the arm"** — those are part of the **PNS**; the CNS is only the brain and spinal cord.
- **"The nervous and endocrine systems are the same speed"** — nerve impulses are **fast and brief**; hormones are slower and longer-lasting.`,
      workedExample: `**Task.** A person touches a hot pot and pulls the hand away. (a) Put these in order for this response: motor neuron, receptor, effector, CNS, sensory neuron. (b) Name the receptor and the effector. (c) Which division of the nervous system are the brain and spinal cord part of?

**Solution**

(a) The order of the pathway is: **receptor → sensory neuron → CNS → motor neuron → effector**.

(b) The **receptor** is the **heat/pain receptor in the skin** of the hand. The **effector** is the **muscle in the arm** that contracts to pull the hand away.

(c) The **brain and spinal cord** are part of the **central nervous system (CNS)**.

**Answer:** (a) receptor, sensory neuron, CNS, motor neuron, effector; (b) skin heat/pain receptor and arm muscle; (c) the central nervous system (CNS).`,
      quiz: [
        { prompt: "The nervous system carries information as", options: ["electrical nerve impulses", "hormones only", "digested food", "blood cells"], correctIndex: 0, explanation: "Impulses are electrical signals." },
        { prompt: "The central nervous system is made of the", options: ["brain and spinal cord", "nerves in the arms", "muscles", "sense organs only"], correctIndex: 0, explanation: "CNS = brain + spinal cord." },
        { prompt: "The peripheral nervous system is made of", options: ["nerves linking the CNS to the body", "the brain", "the spinal cord", "the heart"], correctIndex: 0, explanation: "PNS is the network of nerves." },
        { prompt: "A neuron is a", options: ["nerve cell", "bundle of nerves", "gland", "muscle"], correctIndex: 0, explanation: "A neuron is a single nerve cell." },
        { prompt: "A nerve is a", options: ["bundle of many axons", "single cell", "hormone", "receptor"], correctIndex: 0, explanation: "Nerves contain many axons." },
        { prompt: "Sensory neurons carry impulses", options: ["to the CNS", "away from the CNS", "only within a muscle", "to the skin"], correctIndex: 0, explanation: "Sensory = towards the CNS." },
        { prompt: "Motor neurons carry impulses", options: ["from the CNS to effectors", "to the CNS", "within the brain only", "to receptors"], correctIndex: 0, explanation: "Motor = away from the CNS." },
        { prompt: "A part that detects a stimulus is a", options: ["receptor", "effector", "neuron only", "gland"], correctIndex: 0, explanation: "Receptors detect stimuli." },
        { prompt: "An effector is a", options: ["muscle or gland that responds", "receptor", "sensory neuron", "stimulus"], correctIndex: 0, explanation: "Effectors carry out responses." },
        { prompt: "The correct order of a response is", options: ["stimulus, receptor, sensory neuron, CNS, motor neuron, effector", "effector, CNS, receptor", "CNS, receptor, effector", "motor neuron, receptor, CNS"], correctIndex: 0, explanation: "This is the reflex/response pathway." },
        { prompt: "Neurons that connect others within the CNS are", options: ["relay (inter) neurons", "sensory neurons", "motor neurons", "receptors"], correctIndex: 0, explanation: "Relay neurons link within the CNS." },
        { prompt: "Compared with hormones, nerve impulses are", options: ["faster and shorter-lasting", "slower", "the same speed", "longer-lasting"], correctIndex: 0, explanation: "The nervous system acts quickly." },
        { prompt: "The eye and skin are examples of", options: ["receptors", "effectors", "the CNS", "hormones"], correctIndex: 0, explanation: "They detect stimuli." },
        { prompt: "The brain's main role is to", options: ["process information and decide responses", "pump blood", "make urine", "digest food"], correctIndex: 0, explanation: "The CNS coordinates responses." },
        { prompt: "Which is part of the PNS?", options: ["a nerve in the leg", "the brain", "the spinal cord", "the cerebellum"], correctIndex: 0, explanation: "Nerves outside the CNS are PNS." },
        { prompt: "The system that works with the nervous system to control the body is the", options: ["endocrine system", "digestive system", "skeletal system", "excretory system"], correctIndex: 0, explanation: "Hormones also coordinate the body." },
        { prompt: "A muscle acting as an effector responds by", options: ["contracting", "detecting light", "making urine", "carrying impulses to the CNS"], correctIndex: 0, explanation: "Muscles contract to respond." },
        { prompt: "Impulses travel between neurons through junctions called", options: ["synapses", "nerves", "receptors", "glands"], correctIndex: 0, explanation: "Synapses connect neurons." },
        { prompt: "A change that is detected by the body is a", options: ["stimulus", "response", "reflex", "hormone"], correctIndex: 0, explanation: "A stimulus triggers a response." },
        { prompt: "The nervous system is made of billions of", options: ["neurons", "bones", "red cells", "villi"], correctIndex: 0, explanation: "Neurons build the nervous system." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the two divisions of the nervous system and state what each contains.", answerKey: "Central nervous system (CNS): brain and spinal cord. Peripheral nervous system (PNS): nerves linking the CNS to the rest of the body. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which neuron carries impulses from the CNS to a muscle?", options: ["Motor neuron", "Sensory neuron", "Relay neuron", "Receptor"], correctIndex: 0, answerKey: "Motor neurons carry impulses to effectors. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Write the pathway of a nervous response from stimulus to response.", answerKey: "Stimulus → receptor → sensory neuron → CNS → motor neuron → effector → response. Full marks for correct order.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between a neuron and a nerve.", answerKey: "A neuron is a single nerve cell that carries impulses; a nerve is a bundle of many neuron axons. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how the nervous system detects a stimulus and produces a response, naming the parts of the pathway and their roles.", answerKey: "Receptor detects stimulus; sensory neuron carries impulse to CNS; CNS (brain/spinal cord) processes and decides; motor neuron carries impulse to effector; effector (muscle/gland) responds; relay neurons link within CNS (up to 10). Nervous system fast and brief compared with endocrine; neurons carry electrical impulses (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 11.3 Neurons; Introductory Biology (CK-12) 13.19 Nerve Impulses (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/11:_Nervous_System/11.3:_Neurons)
    {
      slug: "neurons-and-the-nerve-impulse",
      title: "Neurons and the Nerve Impulse",
      objective:
        "By the end of the topic, learners should be able to describe the structure of a neuron, explain the resting and action potentials, and describe how an impulse crosses a synapse.",
      estimatedMinutes: 110,
      notes: `## Structure of a neuron

A **neuron** has:

- **Cell body** — contains the nucleus.
- **Dendrites** — short branches that receive impulses.
- **Axon** — a long fibre that carries the impulse away from the cell body.
- **Myelin sheath** — a fatty insulating layer around many axons that **speeds up** the impulse; gaps are the **nodes of Ranvier**.
- **Axon terminals** — endings that pass the impulse to the next cell.

\`\`\`svg A motor neuron
<svg viewBox="0 0 260 90" role="img" aria-label="Neuron with cell body axon and myelin">
  <circle cx="45" cy="45" r="18" fill="#c7d2fe" stroke="currentColor"/>
  <circle cx="45" cy="45" r="6" fill="#818cf8" stroke="currentColor"/>
  <line x1="30" y1="30" x2="14" y2="20" stroke="currentColor"/>
  <line x1="30" y1="60" x2="14" y2="70" stroke="currentColor"/>
  <line x1="63" y1="45" x2="230" y2="45" stroke="currentColor" stroke-width="2"/>
  <rect x="90" y="40" width="24" height="10" rx="5" fill="#e0e7ff" stroke="currentColor"/>
  <rect x="130" y="40" width="24" height="10" rx="5" fill="#e0e7ff" stroke="currentColor"/>
  <rect x="170" y="40" width="24" height="10" rx="5" fill="#e0e7ff" stroke="currentColor"/>
  <text x="45" y="80" font-size="8" text-anchor="middle" fill="currentColor">cell body</text>
  <text x="150" y="30" font-size="8" text-anchor="middle" fill="currentColor">myelin sheath</text>
  <text x="225" y="60" font-size="8" text-anchor="middle" fill="currentColor">terminal</text>
</svg>
\`\`\`

## The nerve impulse

- A nerve impulse is an **electrical signal** made by a difference in charge across the neuron's membrane.
- **Resting potential** — when not firing, the inside of the axon is **negative** (about −70 mV) relative to the outside, kept by the **sodium–potassium pump**.
- **Action potential** — a stimulus briefly **reverses** the charge (the inside becomes positive) as sodium ions rush in; this reversal travels along the axon as the impulse.
- After the impulse, the pump **restores** the resting potential; during the brief **refractory period** the neuron cannot fire again, which keeps the impulse moving one way.
- The **myelin sheath** insulates the axon so the impulse "jumps" between nodes, travelling **faster**.

## The synapse

- A **synapse** is the tiny gap between one neuron and the next.
- When an impulse reaches the axon terminal, it releases chemical **neurotransmitters** into the gap.
- These diffuse across and bind to **receptors** on the next neuron, starting a new impulse there.
- Synapses make impulses travel in **one direction** only.

## Common errors and misconceptions

- **"The impulse is an electric current like in a wire"** — it is a moving **change in membrane charge**, not a flow of electrons.
- **"Neurotransmitters carry the impulse the whole way"** — they only cross the **synapse**; the impulse is electrical along the axon.
- **"Myelin slows the impulse"** — myelin **speeds** the impulse.
- **"Impulses can go either way across a synapse"** — synapses allow **one-way** transmission only.`,
      workedExample: `**Task.** (a) Name the part of a neuron that carries the impulse away from the cell body and the layer that speeds it up. (b) State the charge inside a resting axon and what an action potential does to it. (c) How does an impulse cross the gap between two neurons?

**Solution**

(a) The **axon** carries the impulse away from the cell body. The **myelin sheath** (a fatty insulating layer) speeds up the impulse by letting it jump between the nodes of Ranvier.

(b) At rest, the inside of the axon is **negative** (about −70 mV) compared with the outside — the **resting potential**. An **action potential** briefly **reverses** this, making the inside **positive** as sodium ions rush in; this reversal moves along the axon as the impulse.

(c) At the **synapse** (gap), the impulse causes the axon terminal to release chemical **neurotransmitters**. These diffuse across the gap and bind to **receptors** on the next neuron, triggering a new impulse. Transmission is one-way.

**Answer:** (a) the axon; the myelin sheath; (b) resting inside is negative (−70 mV); an action potential reverses it to positive; (c) neurotransmitters diffuse across the synapse to the next neuron's receptors.`,
      quiz: [
        { prompt: "The part of a neuron with the nucleus is the", options: ["cell body", "axon", "dendrite", "synapse"], correctIndex: 0, explanation: "The cell body holds the nucleus." },
        { prompt: "The long fibre carrying the impulse away is the", options: ["axon", "dendrite", "cell body", "myelin"], correctIndex: 0, explanation: "The axon carries impulses away." },
        { prompt: "Short branches that receive impulses are", options: ["dendrites", "axons", "terminals", "synapses"], correctIndex: 0, explanation: "Dendrites receive signals." },
        { prompt: "The fatty insulating layer on an axon is the", options: ["myelin sheath", "cell body", "synapse", "dendrite"], correctIndex: 0, explanation: "Myelin insulates the axon." },
        { prompt: "The myelin sheath makes the impulse travel", options: ["faster", "slower", "backwards", "in circles"], correctIndex: 0, explanation: "Myelin speeds conduction." },
        { prompt: "A nerve impulse is a", options: ["moving change in membrane charge", "flow of blood", "hormone", "sound wave"], correctIndex: 0, explanation: "It is an electrical membrane change." },
        { prompt: "At rest, the inside of the axon is", options: ["negative", "positive", "neutral", "green"], correctIndex: 0, explanation: "Resting potential is about −70 mV." },
        { prompt: "The resting potential is maintained by the", options: ["sodium–potassium pump", "myelin sheath", "synapse", "dendrite"], correctIndex: 0, explanation: "The pump keeps the charge difference." },
        { prompt: "During an action potential the inside becomes", options: ["positive", "more negative", "unchanged", "solid"], correctIndex: 0, explanation: "Sodium ions rush in, reversing charge." },
        { prompt: "Sodium ions rushing in cause the", options: ["action potential", "resting potential", "refractory period only", "synapse"], correctIndex: 0, explanation: "Na+ influx reverses the charge." },
        { prompt: "The gap between two neurons is a", options: ["synapse", "node", "axon", "dendrite"], correctIndex: 0, explanation: "The synapse is the junction." },
        { prompt: "Chemicals that cross the synapse are", options: ["neurotransmitters", "hormones from glands", "enzymes", "antibodies"], correctIndex: 0, explanation: "Neurotransmitters carry the signal across." },
        { prompt: "Neurotransmitters bind to", options: ["receptors on the next neuron", "the myelin sheath", "red blood cells", "the axon of the same cell"], correctIndex: 0, explanation: "They trigger a new impulse." },
        { prompt: "Synapses allow impulses to travel", options: ["in one direction only", "both ways equally", "backwards only", "in circles"], correctIndex: 0, explanation: "One-way transmission." },
        { prompt: "The gaps in the myelin sheath are the", options: ["nodes of Ranvier", "synapses", "dendrites", "receptors"], correctIndex: 0, explanation: "Impulses jump between nodes." },
        { prompt: "After firing, the resting potential is restored by the", options: ["sodium–potassium pump", "neurotransmitter", "dendrite", "effector"], correctIndex: 0, explanation: "The pump resets the charge." },
        { prompt: "During the refractory period a neuron", options: ["cannot fire again for a moment", "fires continuously", "makes hormones", "dies"], correctIndex: 0, explanation: "It ensures one-way travel." },
        { prompt: "The impulse passes to the next cell at the", options: ["axon terminals", "cell body", "dendrite tips of the same cell", "nucleus"], correctIndex: 0, explanation: "Terminals release neurotransmitter." },
        { prompt: "Which part receives incoming signals?", options: ["dendrites", "axon terminal", "myelin", "node"], correctIndex: 0, explanation: "Dendrites receive impulses." },
        { prompt: "The impulse along the axon is", options: ["electrical", "chemical only", "a hormone", "light"], correctIndex: 0, explanation: "It is electrical along the axon." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Label the main parts of a neuron and give the function of the axon and the myelin sheath.", answerKey: "Parts: cell body (nucleus), dendrites (receive impulses), axon (carries impulse away), myelin sheath (insulation), axon terminals. Axon carries the impulse away from the cell body; myelin sheath insulates and speeds the impulse. Award for parts + two functions.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "What is released at a synapse to carry the signal across?", options: ["Neurotransmitters", "Hormones", "Enzymes", "Antibodies"], correctIndex: 0, answerKey: "Neurotransmitters cross the synapse. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between the resting potential and an action potential.", answerKey: "Resting potential: axon not firing, inside negative (~−70 mV), kept by the sodium–potassium pump. Action potential: a stimulus reverses the charge (inside becomes positive) as sodium ions enter, and this travels along the axon. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How does the myelin sheath affect the nerve impulse?", answerKey: "The myelin sheath insulates the axon so the impulse jumps between the nodes of Ranvier, making it travel faster. Award for insulation + faster/jumping.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how a nerve impulse travels along a neuron and crosses a synapse to the next neuron.", answerKey: "Along axon: resting potential (inside negative, Na/K pump); stimulus triggers action potential (Na+ in, charge reverses) moving along axon; myelin speeds it; refractory period keeps it one-way (up to 8). Synapse: impulse reaches axon terminal, neurotransmitter released into gap, diffuses across, binds receptors on next neuron, starts new impulse; one-way (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 11.5 Central Nervous System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/11:_Nervous_System/11.5:_Central_Nervous_System)
    {
      slug: "the-brain-and-spinal-cord",
      title: "The Brain and Spinal Cord",
      objective:
        "By the end of the topic, learners should be able to name the main parts of the brain and their functions and describe the structure and function of the spinal cord.",
      estimatedMinutes: 90,
      notes: `## The brain

The brain is the control centre of the body. Its three main parts:

| Part | Function |
| --- | --- |
| **Cerebrum** | the largest part; controls **conscious thought**, memory, reasoning, the senses and voluntary movement |
| **Cerebellum** | at the back; controls **balance, posture and co-ordination** of movement |
| **Medulla (brain stem)** | joins the spinal cord; controls **automatic actions** — heartbeat, breathing and blood vessel width |

- The **hypothalamus** controls body temperature, hunger, thirst and links to the pituitary gland.

\`\`\`svg Main parts of the brain
<svg viewBox="0 0 200 130" role="img" aria-label="Cerebrum cerebellum and medulla">
  <path d="M30 60 Q40 20 110 25 Q160 30 165 60 Q150 70 110 68 Q60 72 30 60 Z" fill="#e0e7ff" stroke="currentColor"/>
  <path d="M135 70 Q170 65 175 95 Q160 105 135 95 Z" fill="#c7d2fe" stroke="currentColor"/>
  <rect x="105" y="90" width="16" height="35" rx="4" fill="#a5b4fc" stroke="currentColor"/>
  <text x="85" y="48" font-size="9" text-anchor="middle" fill="currentColor">cerebrum</text>
  <text x="155" y="88" font-size="8" text-anchor="middle" fill="currentColor">cerebellum</text>
  <text x="113" y="120" font-size="7" text-anchor="middle" fill="currentColor">medulla</text>
</svg>
\`\`\`

## The spinal cord

- The **spinal cord** is a thick bundle of nerves running from the medulla down the backbone, protected by the **vertebrae**.
- It **carries impulses** between the brain and the rest of the body.
- It is the centre for **reflex actions**, giving very fast responses without waiting for the brain.
- It has an outer **white matter** (myelinated axons carrying impulses up and down) and inner **grey matter** (cell bodies and connections).

## Protection of the CNS

- The brain is protected by the **skull**; the spinal cord by the **vertebral column (backbone)**.
- Both are cushioned by membranes (meninges) and fluid.

## Substance abuse and the nervous system

- **Alcohol and drugs** act on the brain: they slow reactions, harm judgement and co-ordination, and can permanently damage brain cells. This is why substance abuse is dangerous.

## Common errors and misconceptions

- **"The cerebellum controls thinking"** — the **cerebrum** controls conscious thought; the **cerebellum** controls balance and co-ordination.
- **"Breathing is controlled by the cerebrum"** — automatic actions like breathing and heartbeat are controlled by the **medulla**.
- **"The spinal cord only carries messages"** — it also acts as the centre for **reflexes**.
- **"The brain is unprotected"** — it is protected by the skull, membranes and fluid.`,
      workedExample: `**Task.** Match each activity to the brain part that controls it: (a) solving a maths problem; (b) keeping balance while walking on a narrow log; (c) the automatic beating of the heart. Then (d) give one function of the spinal cord.

**Solution**

(a) Solving a maths problem → the **cerebrum** (conscious thought, reasoning and memory).

(b) Keeping balance on a log → the **cerebellum** (balance, posture and co-ordination of movement).

(c) Automatic heartbeat → the **medulla** (controls automatic actions such as heartbeat and breathing).

(d) One function of the **spinal cord**: it **carries impulses** between the brain and the body, **and** it is the **centre for reflex actions**, giving fast automatic responses.

**Answer:** (a) cerebrum; (b) cerebellum; (c) medulla; (d) the spinal cord relays impulses and controls reflexes.`,
      quiz: [
        { prompt: "The largest part of the brain is the", options: ["cerebrum", "cerebellum", "medulla", "spinal cord"], correctIndex: 0, explanation: "The cerebrum is largest." },
        { prompt: "Conscious thought and reasoning are controlled by the", options: ["cerebrum", "cerebellum", "medulla", "spinal cord"], correctIndex: 0, explanation: "The cerebrum handles thinking." },
        { prompt: "Balance and co-ordination are controlled by the", options: ["cerebellum", "cerebrum", "medulla", "hypothalamus"], correctIndex: 0, explanation: "The cerebellum coordinates movement." },
        { prompt: "Heartbeat and breathing are controlled by the", options: ["medulla", "cerebrum", "cerebellum", "spinal cord"], correctIndex: 0, explanation: "The medulla controls automatic actions." },
        { prompt: "The brain and spinal cord form the", options: ["central nervous system", "peripheral nervous system", "endocrine system", "effector"], correctIndex: 0, explanation: "They are the CNS." },
        { prompt: "The spinal cord is protected by the", options: ["vertebral column", "skull only", "ribs", "pelvis"], correctIndex: 0, explanation: "The backbone shields the cord." },
        { prompt: "The brain is protected by the", options: ["skull", "backbone only", "sternum", "pelvis"], correctIndex: 0, explanation: "The cranium protects the brain." },
        { prompt: "The spinal cord is the centre for", options: ["reflex actions", "digestion", "breathing only", "vision"], correctIndex: 0, explanation: "Reflexes are processed in the cord." },
        { prompt: "Which controls body temperature, hunger and thirst?", options: ["hypothalamus", "cerebellum", "medulla", "spinal cord"], correctIndex: 0, explanation: "The hypothalamus regulates these." },
        { prompt: "White matter of the spinal cord contains", options: ["myelinated axons carrying impulses", "only cell bodies", "muscle", "bone"], correctIndex: 0, explanation: "White matter is myelinated axons." },
        { prompt: "Grey matter contains mainly", options: ["cell bodies and connections", "myelin only", "blood", "fat"], correctIndex: 0, explanation: "Grey matter holds cell bodies." },
        { prompt: "Voluntary movement is controlled by the", options: ["cerebrum", "medulla", "cerebellum only", "spinal cord only"], correctIndex: 0, explanation: "The cerebrum directs voluntary movement." },
        { prompt: "The medulla connects the brain to the", options: ["spinal cord", "heart directly", "lungs directly", "eye"], correctIndex: 0, explanation: "It is the brain stem joining the cord." },
        { prompt: "Alcohol and drugs affect mainly the", options: ["brain", "bones", "kidneys only", "muscles only"], correctIndex: 0, explanation: "They act on the nervous system." },
        { prompt: "The CNS is cushioned by membranes and", options: ["fluid", "air", "fat only", "bone marrow"], correctIndex: 0, explanation: "Meninges and fluid protect it." },
        { prompt: "Memory is a function of the", options: ["cerebrum", "cerebellum", "medulla", "spinal cord"], correctIndex: 0, explanation: "The cerebrum stores memory." },
        { prompt: "Which part would be damaged if someone loses balance and co-ordination?", options: ["cerebellum", "cerebrum", "medulla", "hypothalamus"], correctIndex: 0, explanation: "The cerebellum controls balance." },
        { prompt: "The spinal cord runs down inside the", options: ["backbone (vertebrae)", "skull", "ribs", "sternum"], correctIndex: 0, explanation: "The vertebrae protect it." },
        { prompt: "Substance abuse can cause", options: ["permanent brain damage and poor judgement", "faster reflexes", "stronger memory", "better co-ordination"], correctIndex: 0, explanation: "Drugs harm the brain." },
        { prompt: "The control centre of the whole body is the", options: ["brain", "liver", "heart", "kidney"], correctIndex: 0, explanation: "The brain coordinates the body." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three main parts of the brain and give one function of each.", answerKey: "Cerebrum – conscious thought/senses/voluntary movement; cerebellum – balance and co-ordination; medulla – automatic actions (heartbeat, breathing). 1 mark each part+function (max 3, +1 for full).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which part of the brain controls breathing and heartbeat?", options: ["Medulla", "Cerebrum", "Cerebellum", "Hypothalamus"], correctIndex: 0, answerKey: "The medulla controls automatic actions. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two functions of the spinal cord.", answerKey: "Carries impulses between the brain and the body; acts as the centre for reflex actions. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "How are the brain and spinal cord protected?", answerKey: "The brain is protected by the skull; the spinal cord by the vertebral column (backbone); both cushioned by membranes (meninges) and fluid. Award for skull + backbone.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the structure and functions of the human brain and spinal cord.", answerKey: "Brain: cerebrum (thought, senses, voluntary movement), cerebellum (balance, co-ordination), medulla (heartbeat, breathing), hypothalamus (temperature, hunger, thirst) (up to 8). Spinal cord: bundle of nerves in the backbone, white and grey matter, carries impulses to/from brain, centre for reflexes; both protected by bone, membranes and fluid (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Introductory Biology (CK-12) 13.21 Peripheral Nervous System; Human Biology (Wakim & Grewal) 11.6 (reflex arc, autonomic) (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/13:_Human_Biology/13.21:_Peripheral_Nervous_System)
    {
      slug: "reflexes-and-the-autonomic-nervous-system",
      title: "Reflexes and the Autonomic Nervous System",
      objective:
        "By the end of the topic, learners should be able to distinguish voluntary and involuntary actions, describe a reflex arc, and explain the role of the autonomic nervous system.",
      estimatedMinutes: 90,
      notes: `## Voluntary and involuntary actions

| Type | Under conscious control? | Examples |
| --- | --- | --- |
| **Voluntary action** | yes — decided by the brain (cerebrum) | writing, walking, talking |
| **Involuntary action** | no — automatic | heartbeat, breathing, digestion, reflexes |

## Reflex actions

- A **reflex** is a **fast, automatic, involuntary** response to a stimulus that protects the body (e.g. pulling the hand from a hot object, blinking, the knee jerk).
- Reflexes are processed by the **spinal cord** (or brain stem), **not** the thinking brain — so they are very quick.

## The reflex arc

The pathway of a reflex is the **reflex arc**:

**stimulus → receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector → response**

- The impulse goes into the spinal cord and straight back out, so the response happens **before** the brain "feels" the pain.

\`\`\`svg A reflex arc
<svg viewBox="0 0 260 100" role="img" aria-label="Reflex arc through the spinal cord">
  <circle cx="25" cy="50" r="10" fill="#fecaca" stroke="currentColor"/>
  <text x="25" y="80" font-size="7" text-anchor="middle" fill="currentColor">receptor</text>
  <line x1="35" y1="50" x2="110" y2="30" stroke="currentColor"/>
  <rect x="110" y="20" width="40" height="60" rx="8" fill="#e0e7ff" stroke="currentColor"/>
  <text x="130" y="53" font-size="7" text-anchor="middle" fill="currentColor">spinal</text>
  <text x="130" y="62" font-size="7" text-anchor="middle" fill="currentColor">cord</text>
  <line x1="150" y1="70" x2="225" y2="50" stroke="currentColor"/>
  <rect x="225" y="42" width="16" height="16" fill="#c7d2fe" stroke="currentColor"/>
  <text x="233" y="80" font-size="7" text-anchor="middle" fill="currentColor">effector</text>
</svg>
\`\`\`

## The peripheral nervous system

The PNS has two parts:

- **Somatic nervous system** — controls **voluntary** actions (skeletal muscles under conscious control).
- **Autonomic nervous system** — controls **involuntary** actions of internal organs. It has two opposing branches:
- **Sympathetic** — prepares the body for action ("fight or flight"): speeds the heart, widens airways, releases glucose.
- **Parasympathetic** — calms the body ("rest and digest"): slows the heart, aids digestion.

## Common errors and misconceptions

- **"Reflexes are controlled by the thinking brain"** — reflexes are processed by the **spinal cord**, which is why they are so fast.
- **"You decide to blink or pull away from a pin"** — these are **automatic reflexes**, not voluntary decisions.
- **"The autonomic system controls the arms and legs"** — it controls **internal organs**; the **somatic** system controls voluntary skeletal muscle.
- **"Sympathetic and parasympathetic do the same thing"** — they have **opposite** effects (action vs rest).`,
      workedExample: `**Task.** A person steps on a sharp thorn and instantly lifts the foot. (a) Is this a voluntary or involuntary action, and which part processes it? (b) Write the pathway (reflex arc) for this response. (c) Which branch of the autonomic system would speed the heart if the person then runs away in fright?

**Solution**

(a) It is an **involuntary reflex** action. It is processed by the **spinal cord**, not the thinking brain, which is why it happens so quickly and protects the foot.

(b) The reflex arc:
**stimulus (thorn) → receptor (skin) → sensory neuron → relay neuron in the spinal cord → motor neuron → effector (leg muscle) → response (foot lifts)**.

(c) The **sympathetic** branch of the autonomic nervous system would speed the heart, preparing the body for "fight or flight" as the person runs away.

**Answer:** (a) involuntary reflex, processed by the spinal cord; (b) receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector; (c) the sympathetic branch.`,
      quiz: [
        { prompt: "A voluntary action is", options: ["under conscious control", "always automatic", "controlled by the medulla", "a reflex"], correctIndex: 0, explanation: "Voluntary actions are chosen." },
        { prompt: "An involuntary action is", options: ["automatic and not consciously controlled", "always decided by the brain", "writing a letter", "kicking a ball on purpose"], correctIndex: 0, explanation: "Involuntary actions are automatic." },
        { prompt: "A reflex action is", options: ["a fast automatic protective response", "a slow planned action", "always controlled by the cerebrum", "digestion"], correctIndex: 0, explanation: "Reflexes are fast and automatic." },
        { prompt: "Reflexes are processed mainly by the", options: ["spinal cord", "cerebrum", "cerebellum", "kidney"], correctIndex: 0, explanation: "The spinal cord gives a fast response." },
        { prompt: "The pathway of a reflex is called the", options: ["reflex arc", "action potential", "synapse", "circuit of Willis"], correctIndex: 0, explanation: "The reflex arc is the pathway." },
        { prompt: "In a reflex arc, the neuron in the spinal cord that links others is the", options: ["relay neuron", "sensory neuron", "motor neuron", "receptor"], correctIndex: 0, explanation: "Relay neurons connect within the cord." },
        { prompt: "An example of a reflex is", options: ["blinking when dust enters the eye", "writing your name", "singing a song", "planning a trip"], correctIndex: 0, explanation: "Blinking is an automatic reflex." },
        { prompt: "Reflexes are fast because they", options: ["bypass the thinking brain", "use hormones", "wait for a decision", "use the cerebrum"], correctIndex: 0, explanation: "The spinal cord acts directly." },
        { prompt: "The part of the PNS controlling voluntary muscle is the", options: ["somatic nervous system", "autonomic nervous system", "sympathetic branch", "medulla"], correctIndex: 0, explanation: "Somatic = voluntary control." },
        { prompt: "The part of the PNS controlling internal organs is the", options: ["autonomic nervous system", "somatic nervous system", "cerebrum", "spinal cord"], correctIndex: 0, explanation: "Autonomic = involuntary organs." },
        { prompt: "The 'fight or flight' branch is the", options: ["sympathetic", "parasympathetic", "somatic", "central"], correctIndex: 0, explanation: "Sympathetic prepares for action." },
        { prompt: "The 'rest and digest' branch is the", options: ["parasympathetic", "sympathetic", "somatic", "reflex arc"], correctIndex: 0, explanation: "Parasympathetic calms the body." },
        { prompt: "The sympathetic system would", options: ["speed the heart", "slow the heart", "stop breathing", "digest food faster"], correctIndex: 0, explanation: "It readies the body for action." },
        { prompt: "The parasympathetic system would", options: ["slow the heart and aid digestion", "speed the heart", "widen airways", "release glucose"], correctIndex: 0, explanation: "It restores calm." },
        { prompt: "The knee jerk is an example of a", options: ["reflex", "voluntary action", "hormone response", "thought"], correctIndex: 0, explanation: "It is an automatic reflex." },
        { prompt: "The receptor in a reflex arc", options: ["detects the stimulus", "contracts the muscle", "carries impulses to organs", "makes hormones"], correctIndex: 0, explanation: "Receptors detect stimuli." },
        { prompt: "The effector in a reflex arc is usually a", options: ["muscle", "receptor", "sensory neuron", "gland only"], correctIndex: 0, explanation: "A muscle carries out the response." },
        { prompt: "Sympathetic and parasympathetic systems have effects that are", options: ["opposite", "identical", "the same as reflexes", "always off"], correctIndex: 0, explanation: "They balance each other." },
        { prompt: "Which is a voluntary action?", options: ["writing your name", "the heartbeat", "digestion", "the pupil reflex"], correctIndex: 0, explanation: "Writing is consciously controlled." },
        { prompt: "The autonomic system controls actions such as", options: ["heartbeat and digestion", "writing and walking", "singing", "drawing"], correctIndex: 0, explanation: "It runs involuntary organ functions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a voluntary and an involuntary action, with one example of each.", answerKey: "Voluntary: consciously controlled by the brain, e.g. writing/walking. Involuntary: automatic, not consciously controlled, e.g. heartbeat/reflex. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which structure processes most reflexes, giving a very fast response?", options: ["Spinal cord", "Cerebrum", "Cerebellum", "Pituitary gland"], correctIndex: 0, answerKey: "The spinal cord processes reflexes. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Write out the reflex arc for pulling a hand away from a hot object.", answerKey: "Stimulus (heat) → receptor (skin) → sensory neuron → relay neuron (spinal cord) → motor neuron → effector (arm muscle) → response (hand pulled away). Full marks for correct order.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the roles of the sympathetic and parasympathetic branches of the autonomic nervous system.", answerKey: "Sympathetic: prepares the body for action ('fight or flight') — speeds heart, widens airways, releases glucose. Parasympathetic: calms the body ('rest and digest') — slows heart, aids digestion. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Explain reflex actions and the reflex arc, and describe how the autonomic nervous system controls involuntary activities.", answerKey: "Reflex: fast, automatic, protective, processed by spinal cord (up to 3). Reflex arc: receptor → sensory neuron → relay neuron → motor neuron → effector, response before brain feels it (up to 6). Autonomic NS controls internal organs involuntarily; sympathetic (fight/flight) speeds heart etc.; parasympathetic (rest/digest) slows heart, aids digestion; opposite effects balance the body (up to 6).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 11.7 Human Senses (eye and ear) (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/11:_Nervous_System/11.7:_Human_Senses)
    {
      slug: "sense-organs-the-eye-and-ear",
      title: "Sense Organs: The Eye and Ear",
      objective:
        "By the end of the topic, learners should be able to name the parts of the eye and ear and their functions, describe how an image is formed on the retina, and outline how the ear detects sound and balance.",
      estimatedMinutes: 100,
      notes: `## The eye

The eye is the sense organ for **sight (vision)**. Light passes through its parts in order:

| Part | Function |
| --- | --- |
| **Cornea** | clear front layer; protects the eye and **bends (refracts)** light to help focus |
| **Iris** | coloured ring; controls the size of the **pupil** |
| **Pupil** | hole that lets light in; smaller in bright light, wider in dim light |
| **Lens** | refracts light further and **focuses** it on the retina (changes shape to focus near/far) |
| **Retina** | light-sensitive layer at the back; forms an (inverted) image |
| **Rods and cones** | receptor cells in the retina — **rods** work in dim light, **cones** detect **colour** |
| **Optic nerve** | carries impulses from the retina to the brain |

- The lens forms a small **upside-down image** on the retina; the brain interprets it the right way up.

\`\`\`svg The human eye
<svg viewBox="0 0 180 120" role="img" aria-label="Eye with cornea lens and retina">
  <ellipse cx="90" cy="60" rx="70" ry="45" fill="#e0e7ff" stroke="currentColor"/>
  <path d="M20 60 Q30 35 40 60 Q30 85 20 60 Z" fill="#bfdbfe" stroke="currentColor"/>
  <ellipse cx="48" cy="60" rx="9" ry="20" fill="#a5b4fc" stroke="currentColor"/>
  <path d="M150 30 Q165 60 150 90" fill="none" stroke="#818cf8" stroke-width="3"/>
  <text x="22" y="26" font-size="8" fill="currentColor">cornea</text>
  <text x="42" y="100" font-size="8" fill="currentColor">lens</text>
  <text x="150" y="105" font-size="8" fill="currentColor">retina</text>
</svg>
\`\`\`

## The ear

The ear is the sense organ for **hearing** and **balance**. It has three regions:

| Region | Parts | Function |
| --- | --- | --- |
| **Outer ear** | pinna, ear canal, **eardrum** | collects sound; the eardrum vibrates |
| **Middle ear** | three tiny bones (ossicles) | pass on and amplify the vibrations |
| **Inner ear** | **cochlea**, semicircular canals | cochlea turns vibrations into nerve impulses (hearing); semicircular canals sense **balance** |

- Sound waves make the **eardrum vibrate** → the **ear bones** pass on the vibration → the **cochlea** changes it to nerve impulses → the **auditory nerve** carries them to the brain.
- The **semicircular canals** detect movement and position to keep **balance**.

## Common errors and misconceptions

- **"The pupil is a solid part"** — the pupil is a **hole**; the iris changes its size.
- **"The image on the retina is the right way up"** — it is **upside-down**; the brain corrects it.
- **"Rods see colour"** — **cones** detect colour; **rods** work in dim light.
- **"The ear only helps hearing"** — the inner ear (semicircular canals) also controls **balance**.`,
      workedExample: `**Task.** (a) Trace the path of light through the eye and say where the image forms. (b) In bright sunlight, what happens to the pupil and which part causes it? (c) Name the part of the ear that turns vibrations into nerve impulses.

**Solution**

(a) Light passes: **cornea → pupil → lens → retina**. The **cornea and lens refract (bend)** the light and **focus** it onto the **retina** at the back of the eye, where a small upside-down **image** forms. Rods and cones there send impulses via the **optic nerve** to the brain.

(b) In bright sunlight the **pupil gets smaller (constricts)** to let in less light and protect the retina. The **iris** (the coloured muscle ring) causes this by changing the size of the pupil.

(c) The **cochlea** in the inner ear turns the sound vibrations into nerve impulses, which the auditory nerve carries to the brain.

**Answer:** (a) cornea → pupil → lens → retina, where the image forms; (b) the pupil constricts, controlled by the iris; (c) the cochlea.`,
      quiz: [
        { prompt: "The sense organ for sight is the", options: ["eye", "ear", "skin", "tongue"], correctIndex: 0, explanation: "The eye detects light." },
        { prompt: "The clear front part of the eye that bends light is the", options: ["cornea", "retina", "iris", "optic nerve"], correctIndex: 0, explanation: "The cornea refracts light." },
        { prompt: "The coloured part that controls the pupil is the", options: ["iris", "lens", "cornea", "retina"], correctIndex: 0, explanation: "The iris changes pupil size." },
        { prompt: "The pupil is a", options: ["hole that lets light in", "muscle", "nerve", "light receptor"], correctIndex: 0, explanation: "It is an opening for light." },
        { prompt: "The part that focuses light on the retina is the", options: ["lens", "iris", "pupil", "eardrum"], correctIndex: 0, explanation: "The lens fine-focuses light." },
        { prompt: "The light-sensitive layer at the back of the eye is the", options: ["retina", "cornea", "iris", "lens"], correctIndex: 0, explanation: "The retina forms the image." },
        { prompt: "Receptor cells that detect colour are", options: ["cones", "rods", "ossicles", "neurons only"], correctIndex: 0, explanation: "Cones detect colour." },
        { prompt: "Receptor cells that work in dim light are", options: ["rods", "cones", "cochlea cells", "iris cells"], correctIndex: 0, explanation: "Rods work in low light." },
        { prompt: "Impulses leave the eye through the", options: ["optic nerve", "auditory nerve", "spinal cord", "pupil"], correctIndex: 0, explanation: "The optic nerve carries vision to the brain." },
        { prompt: "The image formed on the retina is", options: ["upside-down", "the right way up", "green", "flat and grey"], correctIndex: 0, explanation: "The brain corrects the inverted image." },
        { prompt: "In bright light the pupil", options: ["gets smaller", "gets larger", "disappears", "turns blue"], correctIndex: 0, explanation: "It constricts to reduce light." },
        { prompt: "The sense organ for hearing and balance is the", options: ["ear", "eye", "nose", "skin"], correctIndex: 0, explanation: "The ear detects sound and balance." },
        { prompt: "The part of the outer ear that vibrates with sound is the", options: ["eardrum", "cochlea", "pinna", "optic nerve"], correctIndex: 0, explanation: "The eardrum vibrates." },
        { prompt: "The tiny bones of the middle ear", options: ["pass on and amplify vibrations", "detect colour", "make wax", "carry blood"], correctIndex: 0, explanation: "The ossicles transmit vibrations." },
        { prompt: "Vibrations are changed to nerve impulses in the", options: ["cochlea", "eardrum", "pinna", "lens"], correctIndex: 0, explanation: "The cochlea generates impulses." },
        { prompt: "Balance is detected by the", options: ["semicircular canals", "cochlea", "retina", "lens"], correctIndex: 0, explanation: "Semicircular canals sense position." },
        { prompt: "The order of light through the eye is", options: ["cornea, pupil, lens, retina", "retina, lens, cornea", "lens, cornea, pupil", "iris, retina, cornea"], correctIndex: 0, explanation: "Light enters front to back." },
        { prompt: "The pinna helps by", options: ["collecting sound", "making impulses", "detecting light", "controlling the pupil"], correctIndex: 0, explanation: "The pinna gathers sound waves." },
        { prompt: "The lens can change shape to", options: ["focus on near and far objects", "detect colour", "make tears", "carry impulses"], correctIndex: 0, explanation: "This is accommodation." },
        { prompt: "The auditory nerve carries impulses from the ear to the", options: ["brain", "eye", "heart", "muscle"], correctIndex: 0, explanation: "It carries hearing to the brain." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the parts of the eye that light passes through, in order, and say where the image forms.", answerKey: "Cornea → pupil → lens → retina; the image forms on the retina. Award for order + retina.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which receptor cells detect colour?", options: ["Cones", "Rods", "Ossicles", "Neurons"], correctIndex: 0, answerKey: "Cones detect colour. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe how the pupil changes in bright and dim light, and which part controls it.", answerKey: "In bright light the pupil constricts (gets smaller) to limit light; in dim light it dilates (gets larger) to let in more; the iris controls the pupil size. Award for both changes + iris.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Trace how sound is detected, from the eardrum to the brain.", answerKey: "Sound vibrates the eardrum → the middle-ear bones (ossicles) pass on/amplify the vibration → the cochlea turns it into nerve impulses → the auditory nerve carries them to the brain. Award for the sequence.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the structure and function of the eye as the organ of sight and the ear as the organ of hearing and balance.", answerKey: "Eye: cornea (refracts), iris/pupil (control light), lens (focuses), retina (image), rods (dim light)/cones (colour), optic nerve to brain, inverted image (up to 8). Ear: outer (pinna, eardrum), middle (ossicles amplify), inner (cochlea → impulses for hearing; semicircular canals for balance), auditory nerve to brain (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 12.3 Endocrine Hormones; 10.7 Homeostasis and Feedback (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/12%3A_Endocrine_System/12.3%3A_Endocrine_Hormones)
    {
      slug: "the-endocrine-system",
      title: "The Endocrine System",
      objective:
        "By the end of the topic, learners should be able to distinguish endocrine and exocrine glands, name the main endocrine glands and their hormones, and explain control of hormone levels by negative feedback.",
      estimatedMinutes: 100,
      notes: `## Hormones and glands

- The **endocrine system** controls the body using chemical messengers called **hormones**.
- **Hormones** are made by **endocrine (ductless) glands** and carried in the **blood** to target organs.
- The nervous system is **fast and brief**; hormones are **slower** but act for a **longer** time.

## Endocrine and exocrine glands

| Gland type | Release | Example |
| --- | --- | --- |
| **Endocrine (ductless)** | secrete hormones straight into the **blood** | pituitary, thyroid, adrenal, pancreas (islets) |
| **Exocrine** | secrete through **ducts/tubes** to a surface | sweat glands, salivary glands, (pancreas digestive juice) |

## Main endocrine glands and hormones

| Gland | Hormone | Main effect |
| --- | --- | --- |
| **Pituitary** ("master gland") | growth hormone; hormones controlling other glands | controls growth and other endocrine glands |
| **Thyroid** | thyroxine | controls **metabolic rate** (needs iodine) |
| **Adrenal glands** | adrenaline | "fight or flight" — raises heart rate, blood sugar |
| **Pancreas** (islets) | **insulin** and glucagon | control **blood sugar** |
| **Ovaries** | oestrogen, progesterone | female features, menstrual cycle |
| **Testes** | testosterone | male features, sperm production |

- Some organs act as endocrine glands too: the **testes, ovaries, kidneys, stomach and liver** release hormones.

## Control by negative feedback

- Hormone levels are kept steady by **negative feedback**: when a hormone (or the substance it controls) rises too high, its production is **switched off**, and vice versa.
- Example — **blood sugar:** after a meal, blood sugar rises; the pancreas releases **insulin**, which makes the liver store glucose as glycogen, lowering blood sugar back to normal. When blood sugar falls, **glucagon** raises it again.
- **Hormone deficiency diseases:** too little of a hormone causes disorders — e.g. too little insulin causes **diabetes**; too little thyroxine (or iodine) causes **goitre** and a slow metabolism.

## Common errors and misconceptions

- **"Hormones travel in nerves"** — hormones travel in the **blood**; nerve impulses travel in neurons.
- **"Endocrine and exocrine glands are the same"** — endocrine glands are **ductless** (into blood); exocrine glands use **ducts**.
- **"The pituitary is the biggest gland"** — it is small but is the **master gland** controlling others.
- **"Negative feedback increases the change"** — negative feedback **reverses** the change to keep balance.`,
      workedExample: `**Task.** After a large meal a person's blood sugar rises. (a) Which gland responds and which hormone does it release? (b) Explain how negative feedback returns the blood sugar to normal. (c) Name a disease caused by too little insulin.

**Solution**

(a) The **pancreas** responds. Its islet cells release the hormone **insulin** into the blood.

(b) **Negative feedback:** the high blood sugar is detected; the pancreas releases **insulin**, which makes the **liver and cells take up glucose** and store it as **glycogen**. This **lowers** the blood sugar back to normal. When the level is normal again, insulin release is reduced. (If blood sugar later falls too low, the pancreas releases **glucagon** to raise it — the reverse correction.)

(c) Too little insulin causes **diabetes** (diabetes mellitus), in which blood sugar stays dangerously high.

**Answer:** (a) the pancreas releases insulin; (b) insulin makes the liver store glucose as glycogen, lowering blood sugar, and the response switches off as it returns to normal; (c) diabetes.`,
      quiz: [
        { prompt: "The endocrine system controls the body using", options: ["hormones", "nerve impulses only", "enzymes only", "blood cells"], correctIndex: 0, explanation: "Hormones are chemical messengers." },
        { prompt: "Hormones are carried around the body in the", options: ["blood", "nerves", "lymph only", "air"], correctIndex: 0, explanation: "The blood transports hormones." },
        { prompt: "Endocrine glands are described as", options: ["ductless (secrete into the blood)", "having ducts to the skin", "muscles", "bones"], correctIndex: 0, explanation: "They release hormones into the blood." },
        { prompt: "Exocrine glands release their products through", options: ["ducts/tubes", "the blood", "nerves", "bones"], correctIndex: 0, explanation: "Exocrine glands use ducts." },
        { prompt: "The 'master gland' is the", options: ["pituitary", "thyroid", "pancreas", "adrenal"], correctIndex: 0, explanation: "The pituitary controls other glands." },
        { prompt: "Thyroxine, which controls metabolic rate, is made by the", options: ["thyroid gland", "pancreas", "adrenal gland", "testis"], correctIndex: 0, explanation: "The thyroid makes thyroxine." },
        { prompt: "Adrenaline is released by the", options: ["adrenal glands", "thyroid", "pituitary", "ovaries"], correctIndex: 0, explanation: "Adrenal glands make adrenaline." },
        { prompt: "Adrenaline prepares the body for", options: ["'fight or flight'", "sleep", "digestion", "growth only"], correctIndex: 0, explanation: "It raises heart rate and blood sugar." },
        { prompt: "Insulin is made by the", options: ["pancreas", "liver", "thyroid", "kidney"], correctIndex: 0, explanation: "Pancreatic islets make insulin." },
        { prompt: "Insulin acts to", options: ["lower blood sugar", "raise blood sugar", "raise body temperature", "make sperm"], correctIndex: 0, explanation: "Insulin stores glucose as glycogen." },
        { prompt: "The hormone that raises blood sugar is", options: ["glucagon", "insulin", "thyroxine", "oestrogen"], correctIndex: 0, explanation: "Glucagon opposes insulin." },
        { prompt: "Oestrogen and progesterone are made by the", options: ["ovaries", "testes", "adrenal glands", "pituitary"], correctIndex: 0, explanation: "Ovaries make female hormones." },
        { prompt: "Testosterone is made by the", options: ["testes", "ovaries", "pancreas", "thyroid"], correctIndex: 0, explanation: "Testes make testosterone." },
        { prompt: "Hormone levels are controlled by", options: ["negative feedback", "positive feedback only", "digestion", "reflexes"], correctIndex: 0, explanation: "Negative feedback keeps balance." },
        { prompt: "Negative feedback works by", options: ["reversing the change to restore normal", "increasing the change", "stopping the heart", "making bones"], correctIndex: 0, explanation: "It opposes the deviation." },
        { prompt: "Too little insulin causes", options: ["diabetes", "goitre", "scurvy", "rickets"], correctIndex: 0, explanation: "Blood sugar stays high." },
        { prompt: "Too little thyroxine or iodine can cause", options: ["goitre and slow metabolism", "diabetes", "fast reflexes", "strong bones"], correctIndex: 0, explanation: "The thyroid enlarges (goitre)." },
        { prompt: "Compared with the nervous system, hormones act", options: ["more slowly and for longer", "faster and briefly", "the same", "not at all"], correctIndex: 0, explanation: "Hormonal effects are slower/longer." },
        { prompt: "Which organ can also act as an endocrine gland?", options: ["the kidney", "the femur", "the eardrum", "the biceps"], correctIndex: 0, explanation: "Kidneys release hormones too." },
        { prompt: "The thyroid needs which mineral to make its hormone?", options: ["iodine", "calcium", "iron", "sodium"], correctIndex: 0, explanation: "Iodine is needed for thyroxine." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between endocrine and exocrine glands, with one example of each.", answerKey: "Endocrine: ductless, secrete hormones into the blood, e.g. thyroid/pituitary. Exocrine: secrete through ducts to a surface, e.g. sweat/salivary glands. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which gland is known as the 'master gland'?", options: ["Pituitary", "Thyroid", "Pancreas", "Adrenal"], correctIndex: 0, answerKey: "The pituitary controls other glands. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the hormone from (a) the thyroid and (b) the pancreas that lowers blood sugar, and state one effect of each.", answerKey: "(a) Thyroxine – controls metabolic rate. (b) Insulin – lowers blood sugar (stores glucose as glycogen). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how negative feedback keeps blood sugar steady after a meal.", answerKey: "Rising blood sugar is detected; the pancreas releases insulin; the liver/cells take up glucose and store it as glycogen, lowering blood sugar to normal; insulin release then falls. Award for insulin + storage + return to normal.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the endocrine system, naming the main glands and their hormones, and explain how hormone levels are controlled by negative feedback.", answerKey: "Endocrine glands are ductless and secrete hormones into the blood; slower/longer than nerves (up to 3). Glands: pituitary (master/growth), thyroid (thyroxine, metabolism), adrenal (adrenaline, fight/flight), pancreas (insulin/glucagon, blood sugar), ovaries/testes (sex hormones) (up to 7). Negative feedback: rising hormone/substance switches off production, falling switches it on, e.g. insulin/glucagon controlling blood sugar; deficiency diseases like diabetes and goitre (up to 5).", marks: 15 },
      ],
    },
  ],
};
