import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 12,
// Semester Two, Period IV: Excretory and Respiratory Systems; Cellular
// Respiration (Glycolysis and Krebs Cycle). Topics follow the CONTENTS items:
// (1) the excretory system and homeostasis; (2) the respiratory system organs and
// breathing; (3) gaseous exchange and types of respiration (external/internal,
// aerobic/anaerobic); (4) cellular respiration — ATP, glycolysis, link reaction,
// Krebs cycle and the electron transport chain; (5) anaerobic respiration and
// fermentation (alcoholic fermentation, lactic acid in muscle and oxygen debt).
export const biologyG12P4: PeriodContent = {
  grade: 12,
  number: 4,
  title: "Excretory and Respiratory Systems; Cellular Respiration",
  summary:
    "Period IV of the MoE Grade 12 Biology syllabus. Learners study how the body removes wastes and keeps a stable internal environment (excretion and homeostasis); the organs of breathing and how air moves in and out; external and internal gas exchange and the difference between aerobic and anaerobic respiration; the stages of aerobic cellular respiration that release energy as ATP; and fermentation in yeast and muscle.",
  topics: [
    // source: LibreTexts — Human Biology (Wakim & Grewal) 19.2 Introduction to the Urinary System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/19:_Urinary_System/19.2:_Introduction_to_the_Urinary_System)
    {
      slug: "the-excretory-system",
      title: "The Excretory System",
      objective:
        "By the end of the topic, learners should be able to define excretion, name the excretory organs and their wastes, describe the parts of the urinary system, and explain how the kidneys help maintain homeostasis.",
      estimatedMinutes: 100,
      notes: `## What is excretion?

- **Excretion** — the removal of the **waste products of metabolism** and excess substances from the body.
- Excretion is essential for **homeostasis** — keeping a stable internal environment (water, salts, pH, temperature).
- Do not confuse excretion (metabolic wastes) with **egestion** (undigested food/faeces, which never entered the cells).

## The excretory organs and their wastes

| Organ | Waste removed |
| --- | --- |
| **Kidneys** | **urea**, excess water and salts (as urine) |
| **Lungs** | **carbon dioxide** and some water vapour |
| **Skin** | **sweat** — water, salts and a little urea |
| **Liver** | breaks down excess amino acids to **urea**; deals with old red cells and toxins |
| **Large intestine** | bile pigments (in faeces) |

## The urinary system

The urinary system is made of:

- **Kidneys** (two) — filter the blood and make urine.
- **Ureters** — carry urine from the kidneys to the bladder.
- **Bladder** — stores urine.
- **Urethra** — carries urine out of the body.

\`\`\`svg The urinary system
<svg viewBox="0 0 160 170" role="img" aria-label="Kidneys ureters bladder and urethra">
  <path d="M40 30 Q25 45 40 62 Q55 55 50 40 Z" fill="#c7d2fe" stroke="currentColor"/>
  <path d="M120 30 Q135 45 120 62 Q105 55 110 40 Z" fill="#c7d2fe" stroke="currentColor"/>
  <line x1="45" y1="60" x2="75" y2="120" stroke="currentColor"/>
  <line x1="115" y1="60" x2="85" y2="120" stroke="currentColor"/>
  <ellipse cx="80" cy="130" rx="22" ry="16" fill="#bfdbfe" stroke="currentColor"/>
  <line x1="80" y1="146" x2="80" y2="165" stroke="currentColor"/>
  <text x="20" y="24" font-size="8" fill="currentColor">kidney</text>
  <text x="120" y="90" font-size="8" fill="currentColor">ureter</text>
  <text x="95" y="132" font-size="8" fill="currentColor">bladder</text>
  <text x="84" y="162" font-size="8" fill="currentColor">urethra</text>
</svg>
\`\`\`

## Inside the kidney

- Each kidney has an outer **cortex** and inner **medulla**, and about a **million nephrons** (tiny filtering units).
- In a nephron: blood is **filtered** under pressure; useful substances (glucose, most water, salts) are **reabsorbed** back into the blood; the remaining **urea, excess water and salts** form **urine**.

## Kidneys and homeostasis

- The kidneys control the **water and salt balance** of the blood (**osmoregulation**) and remove poisonous **urea**.
- They help keep blood **pH** and **pressure** steady. If the blood is too dilute, more water is lost as urine; if too concentrated, water is saved.
- **Substance abuse:** heavy **alcohol** and some drugs damage the kidneys and liver, upsetting homeostasis.

## Common errors and misconceptions

- **"Excretion and egestion are the same"** — excretion removes **metabolic** wastes; egestion removes **undigested** food.
- **"Urine is made in the bladder"** — urine is made in the **kidneys**; the bladder only stores it.
- **"The lungs are not excretory"** — the lungs excrete **carbon dioxide**.
- **"The kidney only removes waste"** — it also controls water/salt balance and blood pH (homeostasis).`,
      workedExample: `**Task.** (a) Name the nitrogen-containing waste removed by the kidneys and where it is made. (b) Put these urinary parts in the order urine passes through them: bladder, kidney, urethra, ureter. (c) Explain how the kidneys help homeostasis when a person drinks a lot of water.

**Solution**

(a) The kidneys remove **urea**. Urea is made in the **liver**, when excess **amino acids** are broken down; it is carried in the blood to the kidneys to be excreted.

(b) Urine passes in the order: **kidney → ureter → bladder → urethra**. (It is made in the kidney, carried by the ureter, stored in the bladder, and leaves via the urethra.)

(c) If a person drinks a lot of water, the blood becomes **too dilute**. The kidneys respond by **reabsorbing less water**, so they produce a **large volume of dilute urine**. This removes the extra water and returns the blood's water content to normal — keeping the internal environment stable (**osmoregulation**).

**Answer:** (a) urea, made in the liver; (b) kidney, ureter, bladder, urethra; (c) the kidneys reabsorb less water and make more dilute urine, restoring normal water balance.`,
      quiz: [
        { prompt: "Excretion is the removal of", options: ["metabolic waste products", "undigested food", "whole cells", "bones"], correctIndex: 0, explanation: "Excretion removes wastes of metabolism." },
        { prompt: "Which waste do the kidneys remove?", options: ["urea", "carbon dioxide only", "faeces", "bile pigment"], correctIndex: 0, explanation: "Kidneys excrete urea in urine." },
        { prompt: "The lungs excrete", options: ["carbon dioxide", "urea", "faeces", "salts only"], correctIndex: 0, explanation: "CO2 leaves through the lungs." },
        { prompt: "The skin excretes waste as", options: ["sweat", "urine", "bile", "faeces"], correctIndex: 0, explanation: "Sweat has water, salts and some urea." },
        { prompt: "Urea is made in the", options: ["liver", "kidney", "bladder", "lungs"], correctIndex: 0, explanation: "The liver breaks amino acids to urea." },
        { prompt: "The urinary system organ that makes urine is the", options: ["kidney", "ureter", "bladder", "urethra"], correctIndex: 0, explanation: "Kidneys filter blood to make urine." },
        { prompt: "Urine is stored in the", options: ["bladder", "kidney", "liver", "ureter"], correctIndex: 0, explanation: "The bladder stores urine." },
        { prompt: "The tube carrying urine out of the body is the", options: ["urethra", "ureter", "oviduct", "trachea"], correctIndex: 0, explanation: "The urethra is the exit tube." },
        { prompt: "The tubes from kidneys to bladder are the", options: ["ureters", "urethras", "arteries", "bronchi"], correctIndex: 0, explanation: "Ureters connect kidney to bladder." },
        { prompt: "The tiny filtering units of the kidney are", options: ["nephrons", "alveoli", "villi", "neurons"], correctIndex: 0, explanation: "Nephrons filter blood." },
        { prompt: "In the nephron, useful substances are", options: ["reabsorbed into the blood", "all removed as urine", "digested", "turned to bile"], correctIndex: 0, explanation: "Glucose, water and salts are reabsorbed." },
        { prompt: "Control of the body's water and salt balance is called", options: ["osmoregulation", "digestion", "respiration", "clotting"], correctIndex: 0, explanation: "Kidneys osmoregulate." },
        { prompt: "Keeping a stable internal environment is", options: ["homeostasis", "excretion only", "egestion", "reproduction"], correctIndex: 0, explanation: "Homeostasis maintains balance." },
        { prompt: "If the blood is too dilute, the kidneys make urine that is", options: ["large in volume and dilute", "small and concentrated", "solid", "green"], correctIndex: 0, explanation: "Excess water is removed." },
        { prompt: "Egestion differs from excretion because it removes", options: ["undigested food (faeces)", "urea", "carbon dioxide", "sweat"], correctIndex: 0, explanation: "Faeces never entered cells." },
        { prompt: "The outer layer of the kidney is the", options: ["cortex", "medulla", "pelvis only", "capsule"], correctIndex: 0, explanation: "Cortex is the outer layer." },
        { prompt: "Blood is filtered in the nephron under", options: ["pressure", "no force", "digestion", "heat only"], correctIndex: 0, explanation: "High pressure drives filtration." },
        { prompt: "Heavy alcohol use can damage the", options: ["kidneys and liver", "bones only", "hair only", "teeth only"], correctIndex: 0, explanation: "Substance abuse harms excretory organs." },
        { prompt: "The liver also excretes waste as", options: ["bile pigments", "urine", "sweat", "oxygen"], correctIndex: 0, explanation: "Bile pigments leave in faeces." },
        { prompt: "The kidneys help keep the blood's", options: ["water, salt and pH balance", "temperature only", "colour", "sugar unchanged forever"], correctIndex: 0, explanation: "They regulate several factors." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define excretion and give one example of a waste and the organ that removes it.", answerKey: "Excretion: removal of metabolic waste products from the body. Example: kidneys remove urea (or lungs remove carbon dioxide; skin removes sweat). 2 for definition, 2 for example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which organ stores urine before it leaves the body?", options: ["Bladder", "Kidney", "Ureter", "Liver"], correctIndex: 0, answerKey: "The bladder stores urine. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "List the four parts of the urinary system in the order urine passes through them.", answerKey: "Kidney → ureter → bladder → urethra. Full marks for correct order.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how the kidneys help maintain homeostasis.", answerKey: "They remove poisonous urea, control the water and salt balance of the blood (osmoregulation) making more/less urine as needed, and help keep blood pH steady, keeping the internal environment stable. Award for waste removal + water/salt balance.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the human excretory system, naming the excretory organs and their wastes, and explain the role of the kidney in forming urine and maintaining homeostasis.", answerKey: "Organs and wastes: kidneys (urea/water/salts), lungs (CO2), skin (sweat), liver (urea/bile pigments) (up to 5). Urinary system: kidneys, ureters, bladder, urethra (up to 3). Kidney function: nephrons filter blood under pressure, reabsorb useful substances, form urine (up to 4). Homeostasis: osmoregulation, removal of urea, pH balance (up to 3).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 16 Respiratory System (Introduction / Systems of Gas Exchange) (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/16:_Respiratory_System)
    {
      slug: "the-respiratory-system",
      title: "The Respiratory System",
      objective:
        "By the end of the topic, learners should be able to name the organs of the respiratory system in order, describe the mechanism of breathing, and explain how the alveoli are adapted for gas exchange.",
      estimatedMinutes: 100,
      notes: `## Organs of the respiratory system

Air travels through these organs in order:

| Organ | Function |
| --- | --- |
| **Nose / nasal cavity** | warms, moistens and filters the air |
| **Pharynx** | shared passage for air and food (throat) |
| **Larynx** | the voice box; holds the vocal cords |
| **Trachea (windpipe)** | carries air to the lungs; held open by rings of cartilage |
| **Bronchi** | two tubes, one to each lung |
| **Bronchioles** | fine branching tubes inside the lungs |
| **Alveoli** | tiny air sacs where **gas exchange** happens |

## The mechanism of breathing

Breathing (ventilation) moves air in and out using the **diaphragm** and **intercostal muscles**.

| Phase | Diaphragm | Ribs | Chest volume | Pressure | Air |
| --- | --- | --- | --- | --- | --- |
| **Inspiration (breathing in)** | contracts and flattens | move up and out | increases | falls | air rushes in |
| **Expiration (breathing out)** | relaxes and domes up | move down and in | decreases | rises | air pushed out |

\`\`\`svg Breathing in and out
<svg viewBox="0 0 220 120" role="img" aria-label="Diaphragm during inspiration and expiration">
  <rect x="20" y="20" width="80" height="70" rx="10" fill="none" stroke="currentColor"/>
  <path d="M20 82 Q60 78 100 82" fill="none" stroke="#3b82f6" stroke-width="3"/>
  <text x="60" y="105" font-size="9" text-anchor="middle" fill="currentColor">inspiration</text>
  <rect x="120" y="20" width="80" height="70" rx="10" fill="none" stroke="currentColor"/>
  <path d="M120 82 Q160 60 200 82" fill="none" stroke="#ef4444" stroke-width="3"/>
  <text x="160" y="105" font-size="9" text-anchor="middle" fill="currentColor">expiration</text>
</svg>
\`\`\`

## Gas exchange in the alveoli

- The alveoli are covered in **blood capillaries**. Here:
- **Oxygen** diffuses from the alveolar air into the blood.
- **Carbon dioxide** diffuses from the blood into the alveolar air to be breathed out.
- Alveoli are adapted for gas exchange because they have a **huge surface area** (millions of tiny sacs), **very thin (one-cell) walls**, are **moist**, and have a **rich blood supply** — keeping a steep diffusion gradient.

## Keeping the lungs healthy

- **Smoking** and drug/substance abuse damage the airways and alveoli, causing bronchitis, emphysema and lung cancer, and reduce gas exchange.

## Common errors and misconceptions

- **"We breathe using only the lungs"** — the **diaphragm and rib muscles** cause breathing; the lungs have no muscles of their own.
- **"Gas exchange happens in the trachea"** — it happens in the **alveoli**.
- **"Air is sucked into the lungs by the lungs pulling"** — increasing chest volume **lowers pressure** so air flows in.
- **"Breathing and respiration are the same"** — breathing moves air; **cellular respiration** releases energy in cells.`,
      workedExample: `**Task.** (a) List the parts the air passes through from the nose to the air sacs. (b) Describe what the diaphragm and ribs do during inspiration. (c) Give two ways the alveoli are adapted for efficient gas exchange.

**Solution**

(a) From the nose the air passes: **nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli**.

(b) During **inspiration** (breathing in): the **diaphragm contracts and flattens**, and the **rib (intercostal) muscles pull the ribs up and out**. This **increases the volume** of the chest, which **lowers the pressure** inside, so air rushes into the lungs.

(c) Two adaptations of the alveoli (any two):
- **Large surface area** — millions of tiny sacs speed diffusion.
- **Thin (one-cell) walls** — short distance for gases to diffuse.
- **Rich blood supply / moist surface** — keeps a steep concentration gradient for oxygen and carbon dioxide.

**Answer:** (a) nose, pharynx, larynx, trachea, bronchi, bronchioles, alveoli; (b) diaphragm flattens and ribs move up/out, increasing volume and lowering pressure so air enters; (c) large surface area, thin walls, and moist rich blood supply.`,
      quiz: [
        { prompt: "The windpipe is also called the", options: ["trachea", "larynx", "pharynx", "bronchus"], correctIndex: 0, explanation: "The trachea is the windpipe." },
        { prompt: "The voice box is the", options: ["larynx", "pharynx", "trachea", "alveolus"], correctIndex: 0, explanation: "The larynx holds the vocal cords." },
        { prompt: "Gas exchange takes place in the", options: ["alveoli", "trachea", "pharynx", "bronchi"], correctIndex: 0, explanation: "Alveoli are the exchange sites." },
        { prompt: "The trachea is held open by rings of", options: ["cartilage", "bone", "muscle only", "fat"], correctIndex: 0, explanation: "Cartilage rings keep it open." },
        { prompt: "The two tubes leading to each lung are the", options: ["bronchi", "bronchioles", "alveoli", "ureters"], correctIndex: 0, explanation: "Bronchi enter the lungs." },
        { prompt: "The nose warms, moistens and", options: ["filters the air", "digests air", "cools the blood", "makes sound"], correctIndex: 0, explanation: "It cleans the incoming air." },
        { prompt: "During breathing in, the diaphragm", options: ["contracts and flattens", "relaxes and domes up", "disappears", "makes urine"], correctIndex: 0, explanation: "Flattening increases chest volume." },
        { prompt: "During breathing in, the chest volume", options: ["increases", "decreases", "stays the same", "becomes zero"], correctIndex: 0, explanation: "Volume rises, pressure falls." },
        { prompt: "Air enters the lungs when the pressure inside", options: ["falls below outside pressure", "rises above outside", "equals zero", "does not change"], correctIndex: 0, explanation: "Lower pressure draws air in." },
        { prompt: "During breathing out, the diaphragm", options: ["relaxes and domes up", "contracts and flattens", "grows", "makes bile"], correctIndex: 0, explanation: "Relaxing reduces chest volume." },
        { prompt: "Oxygen moves from the alveoli into the blood by", options: ["diffusion", "active pumping only", "clotting", "digestion"], correctIndex: 0, explanation: "Oxygen diffuses down a gradient." },
        { prompt: "Carbon dioxide moves from the blood into the", options: ["alveolar air", "bones", "stomach", "kidney"], correctIndex: 0, explanation: "CO2 is breathed out." },
        { prompt: "Alveoli have thin walls to", options: ["shorten the diffusion distance", "make them strong", "store air forever", "produce mucus"], correctIndex: 0, explanation: "Thin walls speed exchange." },
        { prompt: "Alveoli give a large surface area because they are", options: ["millions of tiny sacs", "one big bag", "solid tissue", "muscular tubes"], correctIndex: 0, explanation: "Many sacs increase area." },
        { prompt: "The muscles between the ribs are the", options: ["intercostal muscles", "cardiac muscles", "biceps", "smooth muscles only"], correctIndex: 0, explanation: "Intercostals move the ribs." },
        { prompt: "Which is NOT a respiratory organ?", options: ["bladder", "trachea", "bronchi", "alveoli"], correctIndex: 0, explanation: "The bladder is excretory." },
        { prompt: "Smoking damages the lungs and can cause", options: ["bronchitis and lung cancer", "stronger alveoli", "more oxygen uptake", "better breathing"], correctIndex: 0, explanation: "Smoking harms the airways." },
        { prompt: "Breathing (ventilation) is different from cellular respiration because breathing", options: ["moves air in and out", "releases energy in cells", "makes ATP", "digests food"], correctIndex: 0, explanation: "Breathing is air movement." },
        { prompt: "The alveoli are kept moist to", options: ["help gases dissolve and diffuse", "make them heavy", "store water", "cool the lungs only"], correctIndex: 0, explanation: "Gases dissolve before diffusing." },
        { prompt: "The pharynx is a shared passage for", options: ["air and food", "blood and lymph", "urine and air", "bile and food"], correctIndex: 0, explanation: "The throat carries both air and food." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List, in order, the parts through which air passes from the nose to the alveoli.", answerKey: "Nose/nasal cavity → pharynx → larynx → trachea → bronchi → bronchioles → alveoli. Full marks for correct order.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Where does gas exchange occur?", options: ["Alveoli", "Trachea", "Larynx", "Bronchi"], correctIndex: 0, answerKey: "Alveoli are the exchange surface. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe what happens to the diaphragm and ribs during expiration (breathing out).", answerKey: "The diaphragm relaxes and domes upward; the ribs move down and in; chest volume decreases, pressure rises, and air is pushed out. Award for diaphragm relaxing + ribs down/in + air out.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State three features that adapt the alveoli for gas exchange.", answerKey: "Any three: large surface area (many sacs); thin (one-cell) walls for short diffusion distance; moist surface; rich blood supply keeping a steep gradient. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the mechanism of breathing and how oxygen and carbon dioxide are exchanged in the lungs.", answerKey: "Inspiration: diaphragm contracts/flattens, intercostals raise ribs up/out, chest volume increases, pressure falls, air enters (up to 5). Expiration: diaphragm relaxes/domes, ribs down/in, volume decreases, pressure rises, air leaves (up to 5). Exchange: in alveoli oxygen diffuses into blood capillaries, CO2 diffuses out; adaptations — large area, thin walls, moist, good blood supply (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 5.9 Cellular Respiration (aerobic vs anaerobic; gas exchange) (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/05:_Cells/5.09:_Cellular_Respiration)
    {
      slug: "gaseous-exchange-and-types-of-respiration",
      title: "Gaseous Exchange and Types of Respiration",
      objective:
        "By the end of the topic, learners should be able to distinguish external and internal respiration, write the balanced equation for aerobic respiration, and compare aerobic and anaerobic respiration.",
      estimatedMinutes: 90,
      notes: `## Respiration has two meanings

- **Gaseous exchange (breathing/external)** — taking in oxygen and giving out carbon dioxide.
- **Cellular respiration** — the **release of energy** from food (glucose) inside cells.

## External and internal respiration

| Term | Where | What happens |
| --- | --- | --- |
| **External respiration** | in the lungs (alveoli) | oxygen enters the blood; carbon dioxide leaves the blood |
| **Internal respiration** | in the body tissues | oxygen leaves the blood into cells; carbon dioxide passes from cells into the blood |

- Both are **gas exchange by diffusion** between blood and either air (external) or cells (internal).

## Aerobic respiration

- **Aerobic respiration** releases energy from glucose **using oxygen**. It gives a **large** amount of energy (ATP).
- Word equation: **glucose + oxygen → carbon dioxide + water + energy**.
- Balanced equation: **C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)**.

## Anaerobic respiration

- **Anaerobic respiration** releases energy from glucose **without oxygen**. It gives only a **small** amount of energy and leaves waste products.
- **In muscle cells:** glucose → **lactic acid** + a little energy.
- **In yeast (and plants):** glucose → **ethanol (alcohol) + carbon dioxide** + a little energy (fermentation).

## Comparing aerobic and anaerobic respiration

| Feature | Aerobic | Anaerobic |
| --- | --- | --- |
| Oxygen | needed | not needed |
| Energy released | large amount | small amount |
| Products | carbon dioxide + water | lactic acid (muscle) or ethanol + CO₂ (yeast) |
| Complete breakdown of glucose | yes | no |

## Common errors and misconceptions

- **"Respiration means breathing"** — breathing is gas exchange; **respiration** is the energy release in cells.
- **"Anaerobic respiration gives more energy"** — aerobic respiration releases **much more** energy per glucose.
- **"Plants do not respire"** — all living cells respire; plants respire day and night.
- **"External respiration happens in the cells"** — external respiration is in the **lungs**; internal respiration is in the **tissues**.`,
      workedExample: `**Task.** (a) Write the balanced equation for aerobic respiration. (b) A footballer sprints hard and their muscles run short of oxygen. Which type of respiration now occurs and what is produced? (c) State one difference between external and internal respiration.

**Solution**

(a) Balanced equation for aerobic respiration:
**C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)**
(glucose + oxygen → carbon dioxide + water + energy).

(b) When the muscles cannot get enough oxygen, they carry out **anaerobic respiration**. In muscle this produces **lactic acid** and only a **small amount of energy**. The lactic acid builds up and causes fatigue (and later an oxygen debt).

(c) One difference: **external respiration** happens in the **lungs**, where oxygen enters the blood and carbon dioxide leaves it; **internal respiration** happens in the **body tissues**, where oxygen passes from the blood into cells and carbon dioxide passes from cells into the blood.

**Answer:** (a) C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy; (b) anaerobic respiration, producing lactic acid; (c) external is in the lungs, internal is in the tissues.`,
      quiz: [
        { prompt: "Gaseous exchange means", options: ["taking in oxygen and giving out carbon dioxide", "releasing energy in cells", "digesting food", "clotting blood"], correctIndex: 0, explanation: "It is the swapping of gases." },
        { prompt: "Cellular respiration is the", options: ["release of energy from glucose in cells", "movement of air in and out", "removal of urea", "making of proteins"], correctIndex: 0, explanation: "Cells release energy from food." },
        { prompt: "External respiration occurs in the", options: ["lungs", "muscles", "kidneys", "liver"], correctIndex: 0, explanation: "Gas exchange with air in the lungs." },
        { prompt: "Internal respiration occurs in the", options: ["body tissues", "lungs", "nose", "trachea"], correctIndex: 0, explanation: "Gas exchange between blood and cells." },
        { prompt: "Aerobic respiration requires", options: ["oxygen", "no oxygen", "carbon dioxide", "lactic acid"], correctIndex: 0, explanation: "Aerobic means with oxygen." },
        { prompt: "The products of aerobic respiration are", options: ["carbon dioxide and water", "lactic acid", "ethanol only", "protein"], correctIndex: 0, explanation: "Glucose is fully broken down." },
        { prompt: "The balanced equation for aerobic respiration is", options: ["C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy", "6CO₂ + 6H₂O → C₆H₁₂O₆", "glucose → alcohol only", "O₂ → CO₂"], correctIndex: 0, explanation: "Glucose + oxygen give CO2 + water + energy." },
        { prompt: "Anaerobic respiration occurs", options: ["without oxygen", "only with oxygen", "in the lungs only", "in bones"], correctIndex: 0, explanation: "Anaerobic means without oxygen." },
        { prompt: "In muscle cells, anaerobic respiration produces", options: ["lactic acid", "ethanol", "water only", "protein"], correctIndex: 0, explanation: "Muscles make lactic acid." },
        { prompt: "In yeast, anaerobic respiration produces", options: ["ethanol and carbon dioxide", "lactic acid only", "water and oxygen", "urea"], correctIndex: 0, explanation: "Yeast fermentation makes alcohol and CO2." },
        { prompt: "Which releases more energy per glucose?", options: ["aerobic respiration", "anaerobic respiration", "they are equal", "neither"], correctIndex: 0, explanation: "Aerobic releases much more energy." },
        { prompt: "Anaerobic respiration is incomplete because glucose is", options: ["not fully broken down", "fully broken to CO2 and water", "turned to protein", "not used"], correctIndex: 0, explanation: "Products still hold energy." },
        { prompt: "Which cells respire?", options: ["all living cells", "only muscle cells", "only lung cells", "only plant cells"], correctIndex: 0, explanation: "All living cells respire." },
        { prompt: "During external respiration, oxygen", options: ["enters the blood in the lungs", "leaves the blood in the tissues", "is destroyed", "becomes urea"], correctIndex: 0, explanation: "O2 is taken up in the lungs." },
        { prompt: "During internal respiration, carbon dioxide", options: ["passes from cells into the blood", "is breathed in", "is stored in bone", "makes glucose"], correctIndex: 0, explanation: "CO2 leaves the tissues." },
        { prompt: "The gas taken in during aerobic respiration is", options: ["oxygen", "carbon dioxide", "nitrogen", "hydrogen"], correctIndex: 0, explanation: "Oxygen is used up." },
        { prompt: "The gas released in respiration is", options: ["carbon dioxide", "oxygen", "nitrogen", "chlorine"], correctIndex: 0, explanation: "CO2 is produced." },
        { prompt: "Fermentation in yeast is used to make", options: ["bread and alcoholic drinks", "steel", "petrol only", "plastic"], correctIndex: 0, explanation: "CO2 raises bread; alcohol is brewed." },
        { prompt: "Plants respire", options: ["day and night", "only at night", "only in light", "never"], correctIndex: 0, explanation: "Respiration is continuous." },
        { prompt: "Both external and internal respiration involve", options: ["diffusion of gases", "active swimming of gases", "digestion", "clotting"], correctIndex: 0, explanation: "Gases move by diffusion." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between external and internal respiration.", answerKey: "External: gas exchange in the lungs — O2 into the blood, CO2 out. Internal: gas exchange in the tissues — O2 from blood into cells, CO2 from cells into blood. 2 marks each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a product of anaerobic respiration in yeast?", options: ["Ethanol and carbon dioxide", "Lactic acid", "Water only", "Protein"], correctIndex: 0, answerKey: "Yeast produces ethanol and CO2. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Write the word and balanced equations for aerobic respiration.", answerKey: "Word: glucose + oxygen → carbon dioxide + water + energy. Balanced: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy. 2 for word, 2 for balanced.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two differences between aerobic and anaerobic respiration.", answerKey: "Any two: aerobic needs oxygen / anaerobic does not; aerobic releases much energy / anaerobic little; aerobic products CO2 + water / anaerobic lactic acid (muscle) or ethanol + CO2 (yeast); aerobic fully breaks down glucose / anaerobic does not. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Compare aerobic and anaerobic respiration, giving the conditions, energy yield, products and examples of where each occurs.", answerKey: "Aerobic: needs oxygen, large energy yield, products CO2 + water, equation, occurs in most cells (up to 7). Anaerobic: no oxygen, small yield, incomplete breakdown; muscle → lactic acid; yeast/plants → ethanol + CO2; uses in brewing/baking (up to 8).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 5.9 Cellular Respiration; General Biology (Boundless) 07 Cellular Respiration (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/05:_Cells/5.09:_Cellular_Respiration)
    {
      slug: "cellular-respiration-glycolysis-and-the-krebs-cycle",
      title: "Cellular Respiration: Glycolysis and the Krebs Cycle",
      objective:
        "By the end of the topic, learners should be able to describe the role of ATP, outline the four stages of aerobic respiration, and state where each stage occurs and its main products.",
      estimatedMinutes: 120,
      notes: `## Energy and ATP

- Cellular respiration transfers energy from glucose to **ATP** (adenosine triphosphate), the cell's energy "currency".
- ATP is a **phosphorylated nucleotide**: when its end phosphate bond is broken (ATP → ADP + phosphate), energy is **released** for the cell's work.

## The four stages of aerobic respiration

Aerobic respiration of one glucose has four stages:

| Stage | Where (in the cell) | Main events | Products |
| --- | --- | --- | --- |
| **1. Glycolysis** | cytoplasm | glucose (6C) splits into two **pyruvate** (3C); this uses ATP then makes more | net **2 ATP**, 2 NADH, 2 pyruvate |
| **2. Link reaction** | mitochondrion | each pyruvate is oxidised to **acetyl-CoA**, losing CO₂ | acetyl-CoA, NADH, CO₂ |
| **3. Krebs cycle** | mitochondrion (matrix) | acetyl-CoA is broken down; CO₂ released; hydrogen (electrons) picked up by NAD/FAD | **2 ATP**, NADH, FADH₂, CO₂ |
| **4. Electron transport chain** | inner mitochondrial membrane | NADH and FADH₂ pass electrons along carriers; energy makes lots of ATP; oxygen is the final electron acceptor, forming **water** | up to **~32 ATP**, water |

- Total from one glucose: **up to about 36 ATP**.

\`\`\`svg Stages of aerobic respiration
<svg viewBox="0 0 300 90" role="img" aria-label="Glycolysis link reaction Krebs cycle and electron transport chain">
  <rect x="5" y="30" width="55" height="30" rx="5" fill="#e0e7ff" stroke="currentColor"/>
  <rect x="80" y="30" width="45" height="30" rx="5" fill="#c7d2fe" stroke="currentColor"/>
  <rect x="145" y="30" width="55" height="30" rx="5" fill="#a5b4fc" stroke="currentColor"/>
  <rect x="220" y="30" width="70" height="30" rx="5" fill="#818cf8" stroke="currentColor"/>
  <text x="32" y="48" font-size="7" text-anchor="middle" fill="currentColor">glycolysis</text>
  <text x="102" y="45" font-size="7" text-anchor="middle" fill="currentColor">link</text>
  <text x="102" y="53" font-size="7" text-anchor="middle" fill="currentColor">reaction</text>
  <text x="172" y="45" font-size="7" text-anchor="middle" fill="currentColor">Krebs</text>
  <text x="172" y="53" font-size="7" text-anchor="middle" fill="currentColor">cycle</text>
  <text x="255" y="48" font-size="7" text-anchor="middle" fill="currentColor">electron chain</text>
  <line x1="60" y1="45" x2="80" y2="45" stroke="currentColor"/>
  <line x1="125" y1="45" x2="145" y2="45" stroke="currentColor"/>
  <line x1="200" y1="45" x2="220" y2="45" stroke="currentColor"/>
</svg>
\`\`\`

## Key ideas

- **Coenzymes** **NAD** and **FAD** carry **hydrogen atoms (electrons)** from the earlier stages to the electron transport chain.
- **Decarboxylation** removes **carbon dioxide**; **dehydrogenation** removes **hydrogen** (to NAD/FAD). Both happen in the link reaction and Krebs cycle.
- **Oxidation** = loss of electrons/hydrogen or gain of oxygen; **reduction** = the opposite.
- The electron transport chain carriers include **flavoproteins, quinones and cytochromes**; oxygen accepts the electrons at the end, forming **water**.
- Glycolysis begins with **phosphorylation** — adding phosphate to glucose to make it reactive.

## Common errors and misconceptions

- **"All respiration happens in the mitochondria"** — **glycolysis** happens in the **cytoplasm**; the rest is in the **mitochondria**.
- **"Oxygen is used throughout"** — oxygen is only used at the **end** (electron transport chain).
- **"The Krebs cycle makes most of the ATP"** — most ATP is made in the **electron transport chain**.
- **"CO₂ comes from the electron chain"** — CO₂ is released in the **link reaction and Krebs cycle**.`,
      workedExample: `**Task.** (a) Where in the cell does glycolysis occur, and what does it produce from one glucose? (b) In which stage is most ATP made, and what is oxygen's role there? (c) Name the coenzyme that carries hydrogen to the electron transport chain.

**Solution**

(a) **Glycolysis** occurs in the **cytoplasm**. It splits one glucose (6 carbons) into **two molecules of pyruvate** (3 carbons each), giving a **net gain of 2 ATP** and 2 reduced NAD (NADH).

(b) Most ATP is made in the **electron transport chain** (up to about 32 ATP). Here electrons from NADH and FADH₂ pass along carriers, releasing energy to make ATP. **Oxygen** is the **final electron acceptor** — it combines with electrons and hydrogen to form **water**. Without oxygen, this stage stops.

(c) **NAD** (and also **FAD**) carries hydrogen atoms/electrons from glycolysis and the Krebs cycle to the electron transport chain.

**Answer:** (a) cytoplasm; 2 pyruvate + net 2 ATP (and NADH); (b) the electron transport chain, where oxygen is the final electron acceptor forming water; (c) NAD (and FAD).`,
      quiz: [
        { prompt: "The energy 'currency' of the cell is", options: ["ATP", "DNA", "glucose", "starch"], correctIndex: 0, explanation: "ATP stores and transfers energy." },
        { prompt: "ATP releases energy when it changes to", options: ["ADP and phosphate", "glucose", "DNA", "protein"], correctIndex: 0, explanation: "Breaking the phosphate bond releases energy." },
        { prompt: "Glycolysis takes place in the", options: ["cytoplasm", "mitochondrion", "nucleus", "ribosome"], correctIndex: 0, explanation: "Glycolysis is in the cytoplasm." },
        { prompt: "Glycolysis splits glucose into two molecules of", options: ["pyruvate", "ethanol", "water", "lactic acid"], correctIndex: 0, explanation: "Glucose becomes two pyruvate." },
        { prompt: "The net ATP made in glycolysis is", options: ["2", "36", "0", "32"], correctIndex: 0, explanation: "Glycolysis nets 2 ATP." },
        { prompt: "The link reaction converts pyruvate into", options: ["acetyl-CoA", "glucose", "ethanol", "ATP only"], correctIndex: 0, explanation: "Pyruvate is oxidised to acetyl-CoA." },
        { prompt: "The Krebs cycle takes place in the", options: ["mitochondrion", "cytoplasm", "nucleus", "cell wall"], correctIndex: 0, explanation: "It occurs in the mitochondrial matrix." },
        { prompt: "Most ATP is produced in the", options: ["electron transport chain", "glycolysis", "link reaction", "cytoplasm"], correctIndex: 0, explanation: "The chain makes the most ATP." },
        { prompt: "In the electron transport chain, the final electron acceptor is", options: ["oxygen", "carbon dioxide", "glucose", "water"], correctIndex: 0, explanation: "Oxygen accepts electrons, forming water." },
        { prompt: "Oxygen combining with electrons and hydrogen forms", options: ["water", "glucose", "ATP", "urea"], correctIndex: 0, explanation: "Water is the product." },
        { prompt: "Coenzymes that carry hydrogen are", options: ["NAD and FAD", "DNA and RNA", "ATP and ADP", "haemoglobin"], correctIndex: 0, explanation: "NAD/FAD carry hydrogen/electrons." },
        { prompt: "Removal of carbon dioxide is called", options: ["decarboxylation", "dehydrogenation", "phosphorylation", "reduction"], correctIndex: 0, explanation: "Decarboxylation removes CO2." },
        { prompt: "Removal of hydrogen is called", options: ["dehydrogenation", "decarboxylation", "hydration", "glycolysis"], correctIndex: 0, explanation: "Dehydrogenation removes hydrogen." },
        { prompt: "Oxidation is best described as", options: ["loss of electrons/hydrogen or gain of oxygen", "gain of electrons", "gain of hydrogen", "no change"], correctIndex: 0, explanation: "Oxidation is loss of electrons/hydrogen." },
        { prompt: "Carbon dioxide is released during the", options: ["link reaction and Krebs cycle", "electron transport chain only", "glycolysis only", "no stage"], correctIndex: 0, explanation: "CO2 leaves in these stages." },
        { prompt: "Adding phosphate to glucose at the start is", options: ["phosphorylation", "dehydrogenation", "reduction", "digestion"], correctIndex: 0, explanation: "Phosphorylation makes glucose reactive." },
        { prompt: "Electron carriers in the chain include", options: ["flavoproteins, quinones and cytochromes", "amylase and lipase", "haemoglobin only", "insulin"], correctIndex: 0, explanation: "These carriers pass electrons." },
        { prompt: "The total ATP from one glucose is about", options: ["36", "2", "0", "100"], correctIndex: 0, explanation: "Up to ~36 ATP per glucose." },
        { prompt: "Which stage does NOT need oxygen directly?", options: ["glycolysis", "electron transport chain", "final oxidation", "chemiosmosis"], correctIndex: 0, explanation: "Glycolysis is anaerobic in itself." },
        { prompt: "Acetyl-CoA enters which stage?", options: ["the Krebs cycle", "glycolysis", "the nucleus", "digestion"], correctIndex: 0, explanation: "Acetyl-CoA feeds the Krebs cycle." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is ATP and why is it important to cells?", answerKey: "ATP (adenosine triphosphate) is a phosphorylated nucleotide that acts as the cell's energy currency; breaking its end phosphate bond (ATP → ADP + Pi) releases energy for the cell's work. Award for energy currency + release on hydrolysis.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Where does glycolysis take place?", options: ["Cytoplasm", "Mitochondrion", "Nucleus", "Cell membrane"], correctIndex: 0, answerKey: "Glycolysis is in the cytoplasm. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name the four stages of aerobic respiration in order.", answerKey: "Glycolysis, link reaction, Krebs cycle, electron transport chain. Full marks for correct order.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the role of oxygen and of NAD in the electron transport chain.", answerKey: "Oxygen is the final electron acceptor, combining with electrons and hydrogen to form water, allowing the chain to keep running. NAD (as NADH) carries hydrogen/electrons from earlier stages to the chain. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Outline the stages of aerobic cellular respiration, saying where each occurs and its main products, and explain how energy is captured as ATP.", answerKey: "Glycolysis (cytoplasm): glucose → 2 pyruvate, net 2 ATP, NADH (up to 4). Link reaction (mitochondrion): pyruvate → acetyl-CoA + CO2 + NADH (up to 3). Krebs cycle (matrix): acetyl-CoA broken down, CO2 released, NADH/FADH2, 2 ATP (up to 4). Electron transport chain (inner membrane): NADH/FADH2 pass electrons, oxygen final acceptor → water, ~32 ATP (up to 4). Total ~36 ATP.", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 5.10 Fermentation; Introductory Biology (CK-12) 2.30 Fermentation (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/05:_Cells/5.10:_Fermentation)
    {
      slug: "anaerobic-respiration-and-fermentation",
      title: "Anaerobic Respiration and Fermentation",
      objective:
        "By the end of the topic, learners should be able to describe alcoholic and lactic acid fermentation, explain the significance of fermentation in muscle and its uses, and explain oxygen debt.",
      estimatedMinutes: 90,
      notes: `## Fermentation

- **Fermentation** is a way of making ATP **without oxygen**. It uses only **glycolysis**, not the link reaction, Krebs cycle or electron transport chain.
- Because glucose is not fully broken down, fermentation gives only a **small** amount of energy (net 2 ATP per glucose).
- Its job is to **regenerate NAD** so glycolysis can keep going without oxygen.

## Two types of fermentation

| Type | Organism/cell | Pyruvate becomes | Products |
| --- | --- | --- | --- |
| **Alcoholic fermentation** | yeast, plant cells | ethanol + carbon dioxide | **ethanol + CO₂** + energy |
| **Lactic acid fermentation** | animal muscle, some bacteria | lactic acid | **lactic acid** + energy |

- **Alcoholic:** glucose → ethanol + carbon dioxide + energy.
- **Lactic acid:** glucose → lactic acid + energy.

## Uses of fermentation

- **Yeast** in bread dough makes **carbon dioxide** that makes the bread **rise**; in brewing it makes **alcohol** (e.g. from palm wine and fruits).
- Bacteria make **yoghurt** and other foods by lactic acid fermentation.

## Anaerobic respiration in muscle and oxygen debt

- During **hard exercise**, muscles cannot get oxygen fast enough, so they respire **anaerobically**, producing **lactic acid**.
- Lactic acid build-up causes **muscle fatigue** and cramp.
- After exercise, the body needs **extra oxygen** to break down the lactic acid (mostly in the liver). This extra oxygen is the **oxygen debt**, "repaid" by breathing hard and fast for a while after stopping.

\`\`\`svg Fermentation from glucose
<svg viewBox="0 0 260 90" role="img" aria-label="Glucose splits to lactic acid or ethanol">
  <rect x="10" y="35" width="60" height="24" rx="5" fill="#e0e7ff" stroke="currentColor"/>
  <text x="40" y="51" font-size="9" text-anchor="middle" fill="currentColor">glucose</text>
  <line x1="70" y1="47" x2="110" y2="25" stroke="currentColor"/>
  <line x1="70" y1="47" x2="110" y2="69" stroke="currentColor"/>
  <rect x="110" y="12" width="140" height="24" rx="5" fill="#fecaca" stroke="currentColor"/>
  <text x="180" y="28" font-size="8" text-anchor="middle" fill="currentColor">ethanol + CO₂ (yeast)</text>
  <rect x="110" y="58" width="140" height="24" rx="5" fill="#bfdbfe" stroke="currentColor"/>
  <text x="180" y="74" font-size="8" text-anchor="middle" fill="currentColor">lactic acid (muscle)</text>
</svg>
\`\`\`

## Common errors and misconceptions

- **"Fermentation gives lots of energy"** — it gives only a **little** energy (2 ATP), far less than aerobic respiration.
- **"Yeast makes lactic acid"** — **yeast** makes **ethanol + CO₂**; **muscle** makes **lactic acid**.
- **"Oxygen debt is a lack of breathing"** — it is the **extra oxygen** needed **after** exercise to remove lactic acid.
- **"Fermentation needs oxygen"** — fermentation is **anaerobic** (no oxygen).`,
      workedExample: `**Task.** (a) Write the word equations for alcoholic and lactic acid fermentation. (b) Explain what causes the "burning" fatigue in a sprinter's legs. (c) What is oxygen debt and how is it repaid?

**Solution**

(a) Word equations:
- **Alcoholic fermentation (yeast):** glucose → **ethanol + carbon dioxide** + energy.
- **Lactic acid fermentation (muscle):** glucose → **lactic acid** + energy.

(b) During sprinting the leg muscles use oxygen faster than it can be supplied, so they respire **anaerobically**. This produces **lactic acid**, which builds up in the muscles and causes the **burning fatigue** (and cramp).

(c) The **oxygen debt** is the **extra oxygen** the body needs **after** exercise to break down the accumulated **lactic acid** (mainly in the liver). It is "repaid" by continuing to **breathe hard and fast** (and the heart beating quickly) for a time after exercise, until the lactic acid is removed.

**Answer:** (a) yeast: glucose → ethanol + CO₂; muscle: glucose → lactic acid; (b) anaerobic respiration builds up lactic acid; (c) oxygen debt is the extra oxygen needed to clear lactic acid, repaid by fast breathing after exercise.`,
      quiz: [
        { prompt: "Fermentation makes ATP", options: ["without oxygen", "only with oxygen", "using the Krebs cycle", "in the lungs"], correctIndex: 0, explanation: "Fermentation is anaerobic." },
        { prompt: "Fermentation uses which stage of respiration?", options: ["glycolysis only", "the Krebs cycle", "the electron transport chain", "all four stages"], correctIndex: 0, explanation: "Only glycolysis is used." },
        { prompt: "Alcoholic fermentation produces", options: ["ethanol and carbon dioxide", "lactic acid", "water only", "protein"], correctIndex: 0, explanation: "Yeast makes ethanol and CO2." },
        { prompt: "Lactic acid fermentation occurs in", options: ["animal muscle", "yeast only", "the lungs", "bones"], correctIndex: 0, explanation: "Muscle makes lactic acid." },
        { prompt: "Yeast is used in bread because it produces", options: ["carbon dioxide that makes dough rise", "lactic acid", "oxygen", "water only"], correctIndex: 0, explanation: "CO2 raises the bread." },
        { prompt: "Fermentation releases", options: ["only a small amount of energy", "a huge amount of energy", "no energy", "more than aerobic respiration"], correctIndex: 0, explanation: "Glucose is not fully broken down." },
        { prompt: "In brewing, yeast ferments sugars to make", options: ["alcohol", "lactic acid", "vinegar only", "protein"], correctIndex: 0, explanation: "Alcoholic fermentation makes alcohol." },
        { prompt: "Yoghurt is made by", options: ["lactic acid fermentation by bacteria", "alcoholic fermentation", "aerobic respiration", "digestion"], correctIndex: 0, explanation: "Bacteria make lactic acid." },
        { prompt: "During hard exercise, muscles respire anaerobically because", options: ["oxygen cannot be supplied fast enough", "they have no glucose", "they stop working", "they use bile"], correctIndex: 0, explanation: "Oxygen supply lags behind demand." },
        { prompt: "Build-up of lactic acid causes", options: ["muscle fatigue and cramp", "stronger muscles instantly", "more oxygen", "bone growth"], correctIndex: 0, explanation: "Lactic acid tires muscles." },
        { prompt: "The extra oxygen needed after exercise is the", options: ["oxygen debt", "vital capacity", "tidal volume", "residual air"], correctIndex: 0, explanation: "It repays the debt by clearing lactic acid." },
        { prompt: "Lactic acid is mostly broken down in the", options: ["liver", "kidney", "lungs", "stomach"], correctIndex: 0, explanation: "The liver processes lactic acid." },
        { prompt: "Oxygen debt is repaid by", options: ["breathing hard after exercise", "eating more", "sleeping only", "sweating"], correctIndex: 0, explanation: "Fast breathing supplies extra oxygen." },
        { prompt: "The purpose of fermentation for the cell is to", options: ["regenerate NAD so glycolysis continues", "make oxygen", "digest food", "build protein"], correctIndex: 0, explanation: "NAD must be recycled for glycolysis." },
        { prompt: "Compared with aerobic respiration, fermentation gives", options: ["much less ATP", "much more ATP", "the same ATP", "no products"], correctIndex: 0, explanation: "Only ~2 ATP per glucose." },
        { prompt: "The gas that makes dough rise is", options: ["carbon dioxide", "oxygen", "nitrogen", "hydrogen"], correctIndex: 0, explanation: "Yeast releases CO2." },
        { prompt: "Which cells can carry out lactic acid fermentation?", options: ["muscle cells", "yeast cells only", "root cells only", "red blood cells only"], correctIndex: 0, explanation: "Muscle makes lactic acid when short of oxygen." },
        { prompt: "Alcoholic fermentation is carried out by", options: ["yeast and plant cells", "muscle cells", "nerve cells", "bone cells"], correctIndex: 0, explanation: "Yeast and plants ferment to ethanol." },
        { prompt: "Fermentation is important in West Africa for making", options: ["palm wine and local drinks", "steel", "cement", "plastic"], correctIndex: 0, explanation: "Palm wine ferments to alcohol." },
        { prompt: "Fermentation is a type of", options: ["anaerobic respiration", "aerobic respiration", "photosynthesis", "digestion"], correctIndex: 0, explanation: "It respires without oxygen." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the word equation for alcoholic fermentation and name an organism that carries it out.", answerKey: "Glucose → ethanol + carbon dioxide + energy; carried out by yeast (or plant cells). 2 for equation, 1 for organism.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which product is formed by anaerobic respiration in muscle?", options: ["Lactic acid", "Ethanol", "Water", "Oxygen"], correctIndex: 0, answerKey: "Muscle makes lactic acid. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by oxygen debt.", answerKey: "The extra oxygen needed after exercise to break down the lactic acid produced by anaerobic respiration in the muscles (mainly in the liver); repaid by breathing hard after exercise. Award for extra oxygen + to remove lactic acid.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two everyday uses of fermentation.", answerKey: "Any two: yeast makes bread rise (CO2); brewing alcohol/palm wine (ethanol); making yoghurt (lactic acid bacteria). 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe fermentation, comparing alcoholic and lactic acid fermentation, and explain why it is important in muscle and in food production.", answerKey: "Fermentation: anaerobic, uses only glycolysis, small energy (2 ATP), regenerates NAD (up to 4). Alcoholic (yeast/plants): glucose → ethanol + CO2 (up to 3). Lactic acid (muscle/bacteria): glucose → lactic acid (up to 3). Importance: muscle keeps working when short of oxygen (lactic acid, oxygen debt); food — bread rising, brewing alcohol, yoghurt (up to 5).", marks: 15 },
      ],
    },
  ],
};
