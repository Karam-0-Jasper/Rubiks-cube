import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 12,
// Semester One, Period III: Digestive, Circulatory and Lymphatic Systems. Topics
// follow the CONTENTS items: (1) the digestive system — nutrition, alimentary
// canal, accessory organs, enzymes and the liver; (2) the circulatory system —
// heart, blood vessels, systemic and pulmonary circulation; (3) blood — cells,
// plasma, clotting, blood groups and Rh factor; (4) the lymphatic system — lymph,
// vessels, nodes, lymphocytes and lymphoid organs.
export const biologyG12P3: PeriodContent = {
  grade: 12,
  number: 3,
  title: "Digestive, Circulatory and Lymphatic Systems",
  summary:
    "Period III of the MoE Grade 12 Biology syllabus. Learners study how food is digested, absorbed and used by the body; how the heart and blood vessels transport materials in a double circulation; the composition of blood, blood clotting, blood groups and the Rh factor; and how the lymphatic system drains tissue fluid and defends the body.",
  topics: [
    // source: LibreTexts — Human Biology (Wakim & Grewal) 18.2 Introduction to the Digestive System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/18%3A_Digestive_System/18.2%3A_Introduction_to_the_Digestive_System)
    {
      slug: "the-digestive-system",
      title: "The Digestive System",
      objective:
        "By the end of the topic, learners should be able to describe the processes of digestion, name the organs of the alimentary canal and the accessory organs, state the roles of the main digestive enzymes and the liver, and explain absorption through the villi.",
      estimatedMinutes: 120,
      notes: `## The processes of nutrition

1. **Ingestion** — taking food into the mouth.
2. **Digestion** — breaking food into small soluble molecules (mechanical by chewing/churning; chemical by enzymes).
3. **Absorption** — soluble food passes into the blood, mainly in the small intestine.
4. **Assimilation** — cells use the absorbed food for energy, growth and repair.
5. **Egestion** — undigested waste leaves as faeces.

## The alimentary canal (in order)

| Organ | What happens |
| --- | --- |
| **Mouth** | teeth chew (mechanical); **salivary amylase** starts starch digestion |
| **Oesophagus** | muscular tube; **peristalsis** pushes food to the stomach |
| **Stomach** | churns food; **pepsin** (a protease) plus acid begin protein digestion |
| **Small intestine** | most digestion and **absorption**; enzymes from pancreas and gut walls finish digestion |
| **Large intestine** | absorbs **water**; forms and stores faeces |
| **Anus** | egestion of faeces |

## Accessory organs (help digestion but food does not pass through)

- **Salivary glands** — make saliva with **amylase**.
- **Pancreas** — makes amylase, protease and **lipase**, and alkaline juice.
- **Liver** — makes **bile** (stored in the gall bladder) which **emulsifies fats** (breaks large fat drops into tiny droplets).

## Digestive enzymes

| Enzyme | Made in | Digests | Products |
| --- | --- | --- | --- |
| **Amylase** | salivary glands, pancreas | starch | maltose (sugar) |
| **Protease (e.g. pepsin)** | stomach, pancreas | proteins | amino acids |
| **Lipase** | pancreas | fats/lipids | fatty acids and glycerol |

## Absorption in the small intestine

- The small intestine wall is folded into millions of tiny finger-like **villi**.
- Villi give a **huge surface area**, are **thin-walled**, and have a rich **blood supply** and a **lacteal** — so digested food is absorbed quickly.
- Sugars and amino acids enter the **blood capillaries**; fatty acids and glycerol enter the **lacteals** (lymph).

\`\`\`svg A villus in the small intestine
<svg viewBox="0 0 160 130" role="img" aria-label="Villus with capillary network and lacteal">
  <path d="M60 120 Q40 60 60 20 Q80 5 100 20 Q120 60 100 120 Z" fill="#e0e7ff" stroke="currentColor"/>
  <path d="M80 115 L80 30" stroke="#fbbf24" stroke-width="6"/>
  <path d="M70 110 Q55 70 72 35" stroke="#ef4444" fill="none"/>
  <path d="M90 110 Q105 70 88 35" stroke="#3b82f6" fill="none"/>
  <text x="86" y="70" font-size="8" fill="currentColor">lacteal</text>
  <text x="16" y="95" font-size="8" fill="currentColor">capillaries</text>
</svg>
\`\`\`

## The liver's other jobs

- Stores **glucose as glycogen** and controls blood sugar.
- Makes **bile**; breaks down old red cells.
- **Detoxifies** poisons (e.g. alcohol, drugs) — heavy alcohol use damages the liver.
- Makes plasma proteins; stores iron and some vitamins.

## Common errors and misconceptions

- **"Digestion happens only in the stomach"** — most chemical digestion and all absorption occur in the **small intestine**.
- **"Bile is an enzyme"** — bile is **not** an enzyme; it **emulsifies** fats to help lipase.
- **"The liver is part of the gut tube"** — the liver is an **accessory** organ; food does not pass through it.
- **"Villi are in the stomach"** — villi are in the **small intestine** for absorption.`,
      workedExample: `**Task.** A meal of rice, beans and palm oil is eaten. (a) Name the enzyme that begins to digest the starch in the rice and where. (b) Which organ's secretion emulsifies the palm oil, and what does emulsify mean? (c) Explain two features of a villus that make it good for absorption.

**Solution**

(a) **Salivary amylase**, made in the **salivary glands** of the mouth, begins to digest the starch in the rice into maltose. (Pancreatic amylase continues this in the small intestine.)

(b) The **liver's** secretion, **bile** (stored in the gall bladder), emulsifies the palm oil. To **emulsify** means to break large fat drops into many tiny droplets, giving a bigger surface area for **lipase** to act on.

(c) Two features of a villus (any two):
- **Large surface area** — millions of finger-like villi speed absorption.
- **Thin wall (one cell thick)** — short distance for food to pass into the blood.
- **Rich blood supply / lacteal** — quickly carries absorbed food away, keeping a steep gradient.

**Answer:** (a) salivary amylase, in the mouth; (b) bile from the liver, which breaks fat into tiny droplets; (c) large surface area, thin wall, and rich blood supply/lacteal.`,
      quiz: [
        { prompt: "Taking food into the mouth is", options: ["ingestion", "absorption", "egestion", "assimilation"], correctIndex: 0, explanation: "Ingestion is taking food in." },
        { prompt: "Breaking food into small soluble molecules is", options: ["digestion", "ingestion", "egestion", "absorption"], correctIndex: 0, explanation: "Digestion breaks food down." },
        { prompt: "Soluble food passing into the blood is", options: ["absorption", "assimilation", "ingestion", "egestion"], correctIndex: 0, explanation: "Absorption moves food to the blood." },
        { prompt: "Removal of undigested waste is", options: ["egestion", "digestion", "absorption", "ingestion"], correctIndex: 0, explanation: "Egestion removes faeces." },
        { prompt: "Salivary amylase digests", options: ["starch", "protein", "fat", "vitamins"], correctIndex: 0, explanation: "Amylase breaks starch to sugar." },
        { prompt: "Pepsin in the stomach digests", options: ["protein", "starch", "fat", "sugar"], correctIndex: 0, explanation: "Pepsin is a protease." },
        { prompt: "Lipase digests", options: ["fats to fatty acids and glycerol", "starch to sugar", "protein to amino acids", "water"], correctIndex: 0, explanation: "Lipase breaks down lipids." },
        { prompt: "Most digestion and absorption occur in the", options: ["small intestine", "stomach", "mouth", "large intestine"], correctIndex: 0, explanation: "The small intestine is the main site." },
        { prompt: "The large intestine mainly absorbs", options: ["water", "protein", "fat", "starch"], correctIndex: 0, explanation: "It reabsorbs water to form faeces." },
        { prompt: "Peristalsis is", options: ["muscular waves pushing food along", "chewing", "bile release", "absorption"], correctIndex: 0, explanation: "Muscle contractions move food." },
        { prompt: "Bile is made by the", options: ["liver", "pancreas", "stomach", "salivary glands"], correctIndex: 0, explanation: "The liver produces bile." },
        { prompt: "Bile helps digestion by", options: ["emulsifying fats", "digesting starch", "killing all bacteria", "absorbing water"], correctIndex: 0, explanation: "It breaks fat into small droplets." },
        { prompt: "The pancreas makes", options: ["amylase, protease and lipase", "bile only", "hydrochloric acid only", "saliva"], correctIndex: 0, explanation: "The pancreas secretes several enzymes." },
        { prompt: "Villi are found in the", options: ["small intestine", "stomach", "mouth", "liver"], correctIndex: 0, explanation: "Villi line the small intestine." },
        { prompt: "Villi speed absorption because they", options: ["give a large thin surface with a rich blood supply", "are thick and few", "have no blood vessels", "make enzymes only"], correctIndex: 0, explanation: "Large area, thin walls, good blood supply." },
        { prompt: "Amino acids come from digesting", options: ["proteins", "starch", "fats", "water"], correctIndex: 0, explanation: "Proteases produce amino acids." },
        { prompt: "The liver stores glucose as", options: ["glycogen", "starch", "fat only", "protein"], correctIndex: 0, explanation: "Glycogen stores glucose." },
        { prompt: "The liver detoxifies", options: ["alcohol and drugs", "oxygen", "water", "vitamins"], correctIndex: 0, explanation: "It breaks down poisons." },
        { prompt: "Fatty acids and glycerol are absorbed into the", options: ["lacteals (lymph)", "bones", "lungs", "kidneys"], correctIndex: 0, explanation: "Fats enter the lacteal of the villus." },
        { prompt: "An accessory organ of digestion is the", options: ["pancreas", "oesophagus", "stomach", "small intestine"], correctIndex: 0, explanation: "Food does not pass through the pancreas." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List the five processes of nutrition in order.", answerKey: "Ingestion, digestion, absorption, assimilation, egestion. Full marks require correct order.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which enzyme digests fats?", options: ["Lipase", "Amylase", "Pepsin", "Protease"], correctIndex: 0, answerKey: "Lipase digests fats to fatty acids and glycerol. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the site of production and the substrate for (a) amylase and (b) pepsin.", answerKey: "(a) Amylase: salivary glands/pancreas; digests starch. (b) Pepsin: stomach; digests protein. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how a villus is adapted for absorption.", answerKey: "Large surface area (many finger-like villi); thin wall (one cell thick) for a short diffusion path; rich blood supply and a lacteal to carry food away and keep a steep gradient. Award for any two adaptations + explanation.", marks: 4 },
        { type: "ESSAY", prompt: "Trace a meal through the alimentary canal, describing the digestion that occurs in each region and the role of the liver.", answerKey: "Mouth: chewing + salivary amylase on starch. Oesophagus: peristalsis. Stomach: churning, pepsin + acid on protein. Small intestine: pancreatic and gut enzymes finish digestion, bile emulsifies fat, absorption via villi. Large intestine: water absorption, faeces. Anus: egestion (up to 10). Liver: makes bile, stores glycogen/controls blood sugar, detoxifies alcohol/drugs, breaks down old red cells (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 17.2 Introduction to the Cardiovascular System; 17.4 Blood Vessels (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/17:_Cardiovascular_System/17.2:_Introduction_to_the_Cardiovascular_System)
    {
      slug: "the-circulatory-system",
      title: "The Circulatory System",
      objective:
        "By the end of the topic, learners should be able to describe the structure of the heart, distinguish arteries, veins and capillaries, and explain double circulation (pulmonary and systemic).",
      estimatedMinutes: 110,
      notes: `## The heart

- The heart is a muscular pump made of **cardiac muscle**. It has **four chambers**:
- Two upper chambers, the **atria** (right and left), **receive** blood.
- Two lower chambers, the **ventricles** (right and left), **pump** blood out.
- **Valves** between the atria and ventricles, and at the exits, stop blood flowing backwards.
- The **left ventricle** has the thickest wall because it pumps blood to the whole body.

\`\`\`svg The four chambers of the heart
<svg viewBox="0 0 180 150" role="img" aria-label="Heart with four chambers">
  <rect x="30" y="25" width="55" height="45" rx="8" fill="#bfdbfe" stroke="currentColor"/>
  <rect x="95" y="25" width="55" height="45" rx="8" fill="#fecaca" stroke="currentColor"/>
  <rect x="30" y="72" width="55" height="60" rx="8" fill="#93c5fd" stroke="currentColor"/>
  <rect x="95" y="72" width="55" height="60" rx="8" fill="#f87171" stroke="currentColor"/>
  <text x="57" y="50" font-size="8" text-anchor="middle" fill="currentColor">right</text>
  <text x="57" y="60" font-size="8" text-anchor="middle" fill="currentColor">atrium</text>
  <text x="122" y="50" font-size="8" text-anchor="middle" fill="currentColor">left</text>
  <text x="122" y="60" font-size="8" text-anchor="middle" fill="currentColor">atrium</text>
  <text x="57" y="104" font-size="8" text-anchor="middle" fill="currentColor">right</text>
  <text x="57" y="114" font-size="8" text-anchor="middle" fill="currentColor">ventricle</text>
  <text x="122" y="104" font-size="8" text-anchor="middle" fill="currentColor">left</text>
  <text x="122" y="114" font-size="8" text-anchor="middle" fill="currentColor">ventricle</text>
</svg>
\`\`\`

## Blood vessels

| Vessel | Direction | Features |
| --- | --- | --- |
| **Arteries** | carry blood **away** from the heart | thick, muscular, elastic walls; high pressure; no valves (except at heart) |
| **Veins** | carry blood **towards** the heart | thinner walls; low pressure; have **valves** to stop backflow |
| **Capillaries** | link arteries to veins in tissues | walls **one cell thick**; site of **exchange** of gases, food and waste |

- Arteries usually carry **oxygenated** blood and veins **deoxygenated** blood — **except** the pulmonary artery (to lungs, deoxygenated) and pulmonary vein (from lungs, oxygenated).

## Double circulation

Blood passes through the heart **twice** for each trip round the body:

1. **Pulmonary circulation** — the **right** side of the heart pumps **deoxygenated** blood to the **lungs**, where it picks up oxygen and returns to the left side.
2. **Systemic circulation** — the **left** side pumps **oxygenated** blood to the **whole body**, and deoxygenated blood returns to the right side.

- Double circulation keeps oxygen-rich and oxygen-poor blood **separate** and delivers oxygen at high pressure.

## Common errors and misconceptions

- **"All arteries carry oxygenated blood"** — the **pulmonary artery** carries deoxygenated blood to the lungs.
- **"Veins carry blood away from the heart"** — veins carry blood **towards** the heart.
- **"The heart has two chambers"** — the mammalian heart has **four** chambers.
- **"Capillaries have thick walls"** — capillary walls are **one cell thick** for easy exchange.`,
      workedExample: `**Task.** (a) Name the chamber that pumps blood to the whole body, and say why its wall is thickest. (b) State one way an artery differs from a vein. (c) Explain what happens in the pulmonary circulation.

**Solution**

(a) The **left ventricle** pumps blood to the whole body (systemic circulation). Its wall is the **thickest** because it must generate **high pressure** to push blood all the way around the body.

(b) One difference (any one): arteries have **thick, muscular, elastic walls** and carry blood **away** from the heart at high pressure with no valves, while veins have **thinner walls**, carry blood **towards** the heart at low pressure, and have **valves** to stop backflow.

(c) In **pulmonary circulation**, the **right ventricle** pumps **deoxygenated** blood through the pulmonary artery to the **lungs**. In the lungs the blood **releases carbon dioxide and picks up oxygen**, then returns as **oxygenated** blood through the pulmonary vein to the **left atrium**.

**Answer:** (a) left ventricle — thick wall for high pressure to the whole body; (b) arteries carry blood away with thick walls and no valves, veins carry blood back with valves; (c) the right side pumps blood to the lungs to be oxygenated and it returns to the left side.`,
      quiz: [
        { prompt: "The heart is made mainly of", options: ["cardiac muscle", "smooth muscle", "bone", "cartilage"], correctIndex: 0, explanation: "Cardiac muscle pumps the blood." },
        { prompt: "How many chambers does the human heart have?", options: ["4", "2", "3", "1"], correctIndex: 0, explanation: "Two atria and two ventricles." },
        { prompt: "The upper chambers that receive blood are the", options: ["atria", "ventricles", "valves", "arteries"], correctIndex: 0, explanation: "Atria receive incoming blood." },
        { prompt: "The lower chambers that pump blood out are the", options: ["ventricles", "atria", "capillaries", "veins"], correctIndex: 0, explanation: "Ventricles pump blood out." },
        { prompt: "Heart valves prevent", options: ["backflow of blood", "the heart from beating", "oxygen uptake", "digestion"], correctIndex: 0, explanation: "Valves keep blood moving one way." },
        { prompt: "The chamber with the thickest wall is the", options: ["left ventricle", "right atrium", "left atrium", "right ventricle"], correctIndex: 0, explanation: "It pumps to the whole body." },
        { prompt: "Arteries carry blood", options: ["away from the heart", "towards the heart", "only to the gut", "nowhere"], correctIndex: 0, explanation: "Arteries lead away from the heart." },
        { prompt: "Veins carry blood", options: ["towards the heart", "away from the heart", "only to the lungs", "into the stomach"], correctIndex: 0, explanation: "Veins return blood to the heart." },
        { prompt: "Which vessels have valves to stop backflow?", options: ["veins", "arteries", "capillaries", "the aorta only"], correctIndex: 0, explanation: "Veins have valves due to low pressure." },
        { prompt: "Exchange of gases and food happens in the", options: ["capillaries", "arteries", "veins", "atria"], correctIndex: 0, explanation: "Thin capillary walls allow exchange." },
        { prompt: "Capillary walls are", options: ["one cell thick", "very thick and muscular", "made of bone", "full of valves"], correctIndex: 0, explanation: "One-cell walls ease exchange." },
        { prompt: "The pulmonary artery is unusual because it carries", options: ["deoxygenated blood", "oxygenated blood", "no blood", "digested food"], correctIndex: 0, explanation: "It carries blood to the lungs." },
        { prompt: "The pulmonary vein carries", options: ["oxygenated blood from the lungs", "deoxygenated blood to the lungs", "urine", "lymph"], correctIndex: 0, explanation: "It returns oxygen-rich blood to the heart." },
        { prompt: "Pulmonary circulation carries blood between the heart and the", options: ["lungs", "kidneys", "brain", "legs"], correctIndex: 0, explanation: "It goes to the lungs for gas exchange." },
        { prompt: "Systemic circulation carries blood between the heart and the", options: ["whole body", "lungs only", "liver only", "spleen only"], correctIndex: 0, explanation: "It supplies the whole body." },
        { prompt: "Double circulation means blood passes through the heart", options: ["twice per full circuit", "once per circuit", "never", "only in the lungs"], correctIndex: 0, explanation: "Once for lungs, once for the body." },
        { prompt: "The right side of the heart pumps blood to the", options: ["lungs", "whole body", "kidneys directly", "gut only"], correctIndex: 0, explanation: "The right side serves the lungs." },
        { prompt: "Arteries have thick walls because they carry blood at", options: ["high pressure", "low pressure", "no pressure", "negative pressure"], correctIndex: 0, explanation: "Thick elastic walls resist high pressure." },
        { prompt: "In the lungs, blood", options: ["gains oxygen and loses carbon dioxide", "gains carbon dioxide", "gains urea", "loses water only"], correctIndex: 0, explanation: "Gas exchange oxygenates the blood." },
        { prompt: "An advantage of double circulation is that", options: ["oxygenated and deoxygenated blood stay separate", "the heart never beats", "blood moves slowly", "no oxygen is needed"], correctIndex: 0, explanation: "Separation gives efficient oxygen delivery." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four chambers of the heart and state which one has the thickest wall and why.", answerKey: "Right atrium, right ventricle, left atrium, left ventricle. The left ventricle has the thickest wall because it pumps blood at high pressure to the whole body. 4 for chambers, +1 for reason.", marks: 5 },
        { type: "MULTIPLE_CHOICE", prompt: "Which vessels have walls one cell thick for exchange?", options: ["Capillaries", "Arteries", "Veins", "The aorta"], correctIndex: 0, answerKey: "Capillaries are one cell thick. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two differences between an artery and a vein.", answerKey: "Any two: arteries carry blood away from the heart / veins towards it; arteries thick muscular walls / veins thinner; arteries high pressure / veins low; veins have valves / arteries do not. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain why the pulmonary artery carries deoxygenated blood.", answerKey: "It carries blood from the right ventricle to the lungs to be oxygenated; the blood has not yet reached the lungs, so it is still deoxygenated. Award for direction to lungs + not yet oxygenated.", marks: 3 },
        { type: "ESSAY", prompt: "Describe the double circulation of blood in humans, naming the sides of the heart and the vessels involved, and explain its advantage.", answerKey: "Pulmonary: right ventricle → pulmonary artery → lungs (gains O2, loses CO2) → pulmonary vein → left atrium (up to 6). Systemic: left ventricle → aorta → body (delivers O2) → veins/vena cava → right atrium (up to 6). Advantage: keeps oxygenated and deoxygenated blood separate and maintains high pressure/efficient oxygen delivery (up to 3).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 17.6 Blood Types; 17.5 Blood (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/17:_Cardiovascular_System/17.6:_Blood_Types)
    {
      slug: "blood-and-blood-groups",
      title: "Blood, Blood Groups and the Rh Factor",
      objective:
        "By the end of the topic, learners should be able to list the components of blood and their functions, describe blood clotting, and explain the ABO blood groups and the Rh factor.",
      estimatedMinutes: 100,
      notes: `## Composition of blood

Blood is made of a liquid, **plasma**, with three kinds of cells suspended in it.

| Component | Function |
| --- | --- |
| **Plasma** | straw-coloured liquid (mostly water); carries dissolved food, wastes, hormones, heat and blood proteins |
| **Red blood cells (erythrocytes)** | carry **oxygen** using **haemoglobin**; biconcave, no nucleus |
| **White blood cells (leucocytes)** | **fight infection** (phagocytes engulf germs; lymphocytes make antibodies) |
| **Platelets (thrombocytes)** | help **blood clotting** |

## Functions of blood

- **Transport** — oxygen, carbon dioxide, digested food, hormones, urea and heat.
- **Defence** — white cells and antibodies fight disease.
- **Clotting** — seals wounds to stop bleeding and keep germs out.

## Blood clotting

1. A cut damages a vessel; **platelets** stick to the wound and release chemicals.
2. These trigger a series of reactions that turn the soluble protein **fibrinogen** into insoluble threads of **fibrin**.
3. Fibrin forms a **mesh** that traps blood cells, making a **clot** which dries into a scab.

## Blood groups (ABO system)

- Red cells carry marker **antigens** on their surface. The **ABO** system gives four groups:

| Group | Antigen on red cells | Antibody in plasma |
| --- | --- | --- |
| **A** | A | anti-B |
| **B** | B | anti-A |
| **AB** | A and B | none — "universal recipient" |
| **O** | none | anti-A and anti-B — "universal donor" |

- Wrong mixing makes red cells clump (**agglutinate**), which can be fatal — so blood must be **matched** before transfusion.

## The Rh factor

- The **Rhesus (Rh) factor** is another antigen (the **D antigen**).
- **Rh-positive (Rh+)** people **have** the D antigen; **Rh-negative (Rh−)** people **lack** it.
- Rh matters in transfusions and in pregnancy (an Rh− mother carrying an Rh+ baby can make antibodies against the baby's red cells).

## Common errors and misconceptions

- **"Red cells fight disease"** — **white** cells fight disease; **red** cells carry oxygen.
- **"Group O can receive any blood"** — group O is the **universal donor**; **AB** is the universal recipient.
- **"Plasma is the same as platelets"** — plasma is the liquid; platelets are cell fragments that aid clotting.
- **"Rh-positive means blood group is positive only"** — Rh is a separate antigen (D) added to the ABO group, e.g. "A positive".`,
      workedExample: `**Task.** (a) State which blood cells carry oxygen and the pigment they use. (b) A person is blood group O Rh-negative. Explain why they are called a "universal donor" and what Rh-negative means. (c) Outline how a clot forms at a cut.

**Solution**

(a) **Red blood cells** carry oxygen, using the red pigment **haemoglobin**, which combines with oxygen in the lungs and releases it in the tissues.

(b) Group **O** red cells carry **no A or B antigens**, so they will not be attacked by anti-A or anti-B antibodies in a recipient's plasma — this is why group O is called the **universal donor**. **Rh-negative** means the person's red cells **lack the D (Rhesus) antigen**.

(c) Clot formation:
1. Platelets stick to the damaged vessel and release chemicals.
2. These convert soluble **fibrinogen** into insoluble **fibrin** threads.
3. Fibrin forms a mesh that traps blood cells, sealing the wound as a clot/scab.

**Answer:** (a) red blood cells, using haemoglobin; (b) O has no A/B antigens so it can be given to anyone, and Rh-negative means no D antigen; (c) platelets trigger fibrinogen → fibrin, which traps cells to form a clot.`,
      quiz: [
        { prompt: "The liquid part of blood is", options: ["plasma", "haemoglobin", "fibrin", "platelets"], correctIndex: 0, explanation: "Plasma is the liquid." },
        { prompt: "Red blood cells carry", options: ["oxygen", "urea only", "antibodies", "platelets"], correctIndex: 0, explanation: "Red cells transport oxygen." },
        { prompt: "The oxygen-carrying pigment is", options: ["haemoglobin", "chlorophyll", "melanin", "fibrin"], correctIndex: 0, explanation: "Haemoglobin binds oxygen." },
        { prompt: "White blood cells", options: ["fight infection", "carry oxygen", "clot blood", "carry food only"], correctIndex: 0, explanation: "They defend against disease." },
        { prompt: "Platelets help with", options: ["blood clotting", "carrying oxygen", "digesting food", "making urine"], correctIndex: 0, explanation: "Platelets start clotting." },
        { prompt: "Red blood cells are unusual because they", options: ["have no nucleus and are biconcave", "are green", "have many nuclei", "are the largest cells"], correctIndex: 0, explanation: "No nucleus leaves room for haemoglobin." },
        { prompt: "During clotting, fibrinogen changes into", options: ["fibrin threads", "plasma", "platelets", "haemoglobin"], correctIndex: 0, explanation: "Insoluble fibrin forms the mesh." },
        { prompt: "Blood group A has which antigen on its red cells?", options: ["A", "B", "both A and B", "none"], correctIndex: 0, explanation: "Group A carries antigen A." },
        { prompt: "Blood group O has", options: ["no A or B antigen", "both antigens", "only A", "only B"], correctIndex: 0, explanation: "O red cells carry neither antigen." },
        { prompt: "The universal donor group is", options: ["O", "AB", "A", "B"], correctIndex: 0, explanation: "O has no A/B antigens." },
        { prompt: "The universal recipient group is", options: ["AB", "O", "A", "B"], correctIndex: 0, explanation: "AB has no anti-A or anti-B antibodies." },
        { prompt: "Wrong mixing of blood causes red cells to", options: ["clump (agglutinate)", "carry more oxygen", "divide", "make bile"], correctIndex: 0, explanation: "Agglutination can be fatal." },
        { prompt: "The Rh factor is the", options: ["D antigen on red cells", "a white cell", "a clotting protein", "a plasma sugar"], correctIndex: 0, explanation: "Rh is the D antigen." },
        { prompt: "Rh-negative people", options: ["lack the D antigen", "have the D antigen", "have no red cells", "have no plasma"], correctIndex: 0, explanation: "Rh− means no D antigen." },
        { prompt: "Blood transports all EXCEPT", options: ["nerve impulses", "oxygen", "hormones", "urea"], correctIndex: 0, explanation: "Nerves, not blood, carry impulses." },
        { prompt: "Phagocytes are white cells that", options: ["engulf germs", "carry oxygen", "clot blood", "make plasma"], correctIndex: 0, explanation: "They ingest pathogens." },
        { prompt: "Antibodies are made by", options: ["lymphocytes", "red cells", "platelets", "plasma alone"], correctIndex: 0, explanation: "Lymphocytes produce antibodies." },
        { prompt: "Blood group AB has antibodies", options: ["none in the plasma", "anti-A and anti-B", "anti-A only", "anti-B only"], correctIndex: 0, explanation: "AB plasma has no ABO antibodies." },
        { prompt: "A clot finally dries to form a", options: ["scab", "bruise", "blister", "vein"], correctIndex: 0, explanation: "The clot dries into a scab." },
        { prompt: "Plasma is mostly", options: ["water", "haemoglobin", "fibrin", "platelets"], correctIndex: 0, explanation: "Plasma is largely water." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the three types of blood cells and give one function of each.", answerKey: "Red cells – carry oxygen; white cells – fight infection; platelets – help clotting. 1 mark each cell+function (max 3, +1 for full).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which blood group is the universal donor?", options: ["O", "AB", "A", "B"], correctIndex: 0, answerKey: "Group O has no A/B antigens. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe how blood clots at a wound.", answerKey: "Platelets stick to the wound and release chemicals; these convert soluble fibrinogen to insoluble fibrin threads; fibrin forms a mesh trapping cells to seal the wound (clot/scab). Award for platelets + fibrinogen→fibrin + mesh.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the Rh factor and why it matters.", answerKey: "The Rh (Rhesus) factor is the D antigen on red cells; Rh+ have it, Rh− lack it. It must be matched in transfusion, and an Rh− mother with an Rh+ baby can make antibodies against the baby's red cells. Award for D antigen + one reason it matters.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the composition and functions of blood, and explain the ABO blood grouping system.", answerKey: "Composition: plasma (water + dissolved substances), red cells (haemoglobin, oxygen), white cells (defence), platelets (clotting) (up to 6). Functions: transport (gases, food, hormones, urea, heat), defence, clotting (up to 4). ABO: antigens A/B on red cells give groups A, B, AB, O; matching antibodies in plasma; wrong mixing agglutinates; O universal donor, AB universal recipient (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 20.3 Lymphatic System (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/20%3A_Immune_System/20.3%3A_Lymphatic_System)
    {
      slug: "the-lymphatic-system",
      title: "The Lymphatic System",
      objective:
        "By the end of the topic, learners should be able to describe lymph and lymphatic vessels, explain the structure and function of lymph nodes and lymphocytes, and name other lymphoid organs.",
      estimatedMinutes: 80,
      notes: `## What is the lymphatic system?

- The **lymphatic system** is a network of **vessels**, **nodes** and **organs** that drains excess tissue fluid, absorbs fats, and helps **defend** the body.

## Lymph and lymphatic vessels

- **Lymph** — a clear fluid, similar to plasma, formed from **tissue fluid** that leaks out of blood capillaries into the spaces around cells.
- **Lymphatic vessels** collect this fluid and return it to the blood near the heart. They have **valves** (like veins) and are moved by body muscles.
- Lymph in the gut (in lacteals) also carries **absorbed fats**.

## Lymph nodes

- **Lymph nodes** are small swellings along the lymph vessels.
- They **filter lymph**, trapping germs and dead cells, and store **lymphocytes** that destroy the germs.
- Nodes **swell** when fighting an infection (e.g. swollen glands in the neck).

## Lymphocytes

- **Lymphocytes** are white blood cells central to defence. Two main kinds:
- **B-cells** — mature in the **bone marrow**; make **antibodies**.
- **T-cells** — mature in the **thymus**; attack infected cells and coordinate the immune response.

## Other lymphoid organs

| Organ | Role |
| --- | --- |
| **Bone marrow** | makes all blood cells, including lymphocytes (primary organ) |
| **Thymus** | where **T-cells mature** (primary organ) |
| **Spleen** | filters **blood** and lymph; stores lymphocytes |
| **Tonsils** | guard the throat, trapping germs entering the mouth/nose |

## Common errors and misconceptions

- **"Lymph is the same as blood"** — lymph has no red cells; it is a clear fluid formed from tissue fluid.
- **"The lymphatic system has a pump like the heart"** — it has **no pump**; lymph moves by body muscles and valves.
- **"Lymph nodes make lymph"** — nodes **filter** lymph and store lymphocytes; they do not make lymph.
- **"B-cells and T-cells mature in the same place"** — B-cells mature in **bone marrow**, T-cells in the **thymus**.`,
      workedExample: `**Task.** A child has swollen glands in the neck during a throat infection. (a) What are these "glands" and why have they swollen? (b) Where is lymph formed and how does it move? (c) State where B-cells and T-cells mature.

**Solution**

(a) The "glands" are **lymph nodes**. They have **swollen** because they are **filtering lymph** from the infected area and are packed with **lymphocytes** multiplying to fight the germs.

(b) **Lymph** is formed from **tissue fluid** that leaks out of blood capillaries into the spaces around cells; lymphatic vessels collect it. Because there is **no pump**, lymph is moved by the squeezing of **body muscles**, and **valves** stop it flowing backwards, until it drains back into the blood near the heart.

(c) **B-cells mature in the bone marrow**; **T-cells mature in the thymus**.

**Answer:** (a) lymph nodes, swollen because they filter lymph and store multiplying lymphocytes; (b) lymph forms from tissue fluid and moves by muscle action and valves; (c) B-cells in bone marrow, T-cells in the thymus.`,
      quiz: [
        { prompt: "The lymphatic system is a network of vessels, nodes and", options: ["organs", "bones", "muscles only", "nerves"], correctIndex: 0, explanation: "It includes lymphoid organs." },
        { prompt: "Lymph is formed from", options: ["tissue fluid", "red blood cells", "bile", "urine"], correctIndex: 0, explanation: "It comes from fluid around cells." },
        { prompt: "Lymph is best described as", options: ["a clear fluid similar to plasma", "thick red blood", "digestive juice", "air"], correctIndex: 0, explanation: "Lymph is clear, with no red cells." },
        { prompt: "Lymphatic vessels have valves to", options: ["stop lymph flowing backwards", "make lymph", "pump like the heart", "carry oxygen"], correctIndex: 0, explanation: "Valves keep lymph moving one way." },
        { prompt: "Lymph is moved along by", options: ["body muscles squeezing the vessels", "a strong pump", "gravity only", "the heart pumping lymph"], correctIndex: 0, explanation: "There is no lymph pump." },
        { prompt: "Lymph nodes act to", options: ["filter lymph and store lymphocytes", "make red cells", "digest food", "produce bile"], correctIndex: 0, explanation: "Nodes trap germs and hold lymphocytes." },
        { prompt: "Swollen lymph nodes usually mean", options: ["the body is fighting an infection", "the heart has stopped", "digestion has failed", "bones are broken"], correctIndex: 0, explanation: "Nodes swell during infection." },
        { prompt: "Lymphocytes are a type of", options: ["white blood cell", "red blood cell", "platelet", "nerve cell"], correctIndex: 0, explanation: "They are defence white cells." },
        { prompt: "B-cells make", options: ["antibodies", "haemoglobin", "bile", "hormones only"], correctIndex: 0, explanation: "B-cells produce antibodies." },
        { prompt: "B-cells mature in the", options: ["bone marrow", "thymus", "spleen", "tonsils"], correctIndex: 0, explanation: "B-cells mature in bone marrow." },
        { prompt: "T-cells mature in the", options: ["thymus", "bone marrow", "liver", "kidney"], correctIndex: 0, explanation: "T-cells mature in the thymus." },
        { prompt: "The spleen filters", options: ["blood as well as lymph", "only air", "only urine", "only bile"], correctIndex: 0, explanation: "The spleen cleans blood and lymph." },
        { prompt: "The tonsils guard the", options: ["throat", "kidneys", "heart", "bones"], correctIndex: 0, explanation: "Tonsils trap germs entering the throat." },
        { prompt: "Absorbed fats enter the lymphatic system through the", options: ["lacteals of the villi", "lungs", "kidneys", "skin"], correctIndex: 0, explanation: "Lacteals carry fats as lymph." },
        { prompt: "A main job of the lymphatic system is to", options: ["defend the body and drain tissue fluid", "pump blood", "make bones", "digest starch"], correctIndex: 0, explanation: "It drains fluid and fights disease." },
        { prompt: "Which is a primary lymphoid organ where cells mature?", options: ["thymus", "spleen", "tonsils", "lymph node"], correctIndex: 0, explanation: "T-cells mature in the thymus." },
        { prompt: "Lymph eventually drains back into the", options: ["blood near the heart", "stomach", "lungs", "bladder"], correctIndex: 0, explanation: "Lymph returns to the bloodstream." },
        { prompt: "Compared with blood, lymph has", options: ["no red blood cells", "more red cells", "the same red cells", "only platelets"], correctIndex: 0, explanation: "Lymph lacks red cells." },
        { prompt: "T-cells help defence by", options: ["attacking infected cells and coordinating the response", "carrying oxygen", "clotting blood", "making bile"], correctIndex: 0, explanation: "T-cells fight infected cells." },
        { prompt: "All blood cells, including lymphocytes, are made in the", options: ["bone marrow", "thymus", "spleen", "tonsils"], correctIndex: 0, explanation: "Bone marrow produces blood cells." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "What is lymph, and how does it move through the lymphatic vessels?", answerKey: "Lymph is a clear fluid formed from tissue fluid that leaks from blood capillaries; it moves by the squeezing of body muscles, with valves preventing backflow (no pump). Award for definition + movement mechanism.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Where do T-cells mature?", options: ["Thymus", "Bone marrow", "Spleen", "Tonsils"], correctIndex: 0, answerKey: "T-cells mature in the thymus. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two functions of lymph nodes.", answerKey: "Filter lymph (trap germs/dead cells); store lymphocytes that destroy germs; swell during infection. Any two, 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Name two lymphoid organs other than lymph nodes and give the role of each.", answerKey: "Any two: thymus (T-cells mature); bone marrow (makes blood cells/lymphocytes); spleen (filters blood and lymph); tonsils (guard the throat). 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe the structure and functions of the lymphatic system, including lymph, vessels, nodes, lymphocytes and other lymphoid organs.", answerKey: "Lymph: clear fluid from tissue fluid, carries fats via lacteals (up to 3). Vessels: valves, moved by muscles, drain to blood (up to 3). Nodes: filter lymph, store lymphocytes, swell in infection (up to 3). Lymphocytes: B-cells (antibodies, bone marrow) and T-cells (attack infected cells, thymus) (up to 3). Other organs: thymus, spleen, tonsils, bone marrow with roles (up to 3).", marks: 15 },
      ],
    },
  ],
};
