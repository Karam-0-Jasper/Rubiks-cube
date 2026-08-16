import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 11,
// Semester One, Period II: Nutrition and Food Preservation. Topics follow the
// CONTENTS items: (1) nutrition and its types (autotrophic, heterotrophic,
// holozoic); (2) food and nutrients + food tests; (3) balanced diet; (4)
// malnutrition; (5) teeth, dental formulae and dental care; (6) food poisoning
// and its prevention; (7) methods and importance of food preservation.
export const biologyG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Nutrition and Food Preservation",
  summary:
    "Period II of the MoE Grade 11 Biology syllabus. Learners study nutrition and its types, the six classes of nutrients and how to test for them, the meaning of a balanced diet and the diseases caused by malnutrition, the structure of mammalian teeth and dental formulae with dental care, food poisoning and its prevention, and the biological methods used to preserve food.",
  topics: [
    // source: CK-12 — Heterotrophic Nutrition; Autotrophs and Heterotrophs (https://flexbooks.ck12.org/cbook/cbse-science-class-7/section/1.3/primary/lesson/heterotrophic-nutrition/)
    {
      slug: "nutrition-and-its-types",
      title: "Nutrition and Its Types",
      objective:
        "By the end of the topic, learners should be able to define nutrition, explain why living things need nutrients, and distinguish autotrophic, heterotrophic and holozoic nutrition.",
      estimatedMinutes: 100,
      notes: `## What is nutrition?

- **Nutrition** — the process by which living things obtain and use food for energy, growth, repair and health.
- **Nutrients** — the useful substances in food (carbohydrates, proteins, fats, vitamins, minerals, water).

## Why living things need nutrients

- to provide **energy** for life processes;
- to build and repair **body structures** (growth);
- to **regulate** chemical reactions and keep the body healthy.

## The two main types of nutrition

| Type | How food is obtained | Examples |
| --- | --- | --- |
| **Autotrophic** | the organism **makes its own food** from simple inorganic substances | green plants, algae, some bacteria |
| **Heterotrophic** | the organism **takes in ready-made food** from other organisms | animals, fungi, most bacteria, humans |

## Autotrophic nutrition

- **Autotrophs** ("self-feeders") make organic food from inorganic raw materials.
- **Photoautotrophs** use **light energy** (photosynthesis) — green plants, algae, cyanobacteria.
- **Chemoautotrophs** use energy from **chemical reactions** — e.g. nitrifying and sulfur bacteria.

## Heterotrophic nutrition

Heterotrophs cannot make their own food; they obtain energy and nutrients by consuming other organisms. Three main forms:

- **Holozoic nutrition** — taking in **solid food**, then digesting it inside the body (most animals and humans).
- **Saprophytic nutrition** — feeding on **dead and decaying matter** by secreting enzymes onto it (fungi, many bacteria).
- **Parasitic nutrition** — living **in or on a host** and taking food from it, harming it (tapeworm, *Plasmodium*).

## Holozoic nutrition — the five stages

1. **Ingestion** — taking food into the body (the mouth).
2. **Digestion** — breaking food into small soluble molecules.
3. **Absorption** — soluble food passes into the blood.
4. **Assimilation** — absorbed food is used by cells for energy, growth and repair.
5. **Egestion** — undigested waste is removed (faeces).

## Common errors and misconceptions

- **"Only animals need nutrition"** — plants need nutrition too, but they **make** their food (autotrophic).
- **"Autotrophs eat other organisms"** — autotrophs make their own food; only heterotrophs consume others.
- **"Saprophytes and parasites are the same"** — saprophytes feed on **dead** matter; parasites feed on a **living** host.
- **"Digestion and absorption are the same step"** — digestion breaks food down; absorption is its passage into the blood.`,
      workedExample: `**Task.** Classify the nutrition of each organism and justify: (a) a mango tree; (b) a mushroom growing on a rotting log; (c) a tapeworm in a human gut; (d) a goat.

**Solution**

(a) **Mango tree** → **autotrophic** (photoautotroph). It makes its own food from carbon dioxide and water using light energy (photosynthesis).

(b) **Mushroom on a rotting log** → **heterotrophic – saprophytic**. It secretes enzymes onto the **dead** wood and absorbs the digested nutrients.

(c) **Tapeworm in a gut** → **heterotrophic – parasitic**. It lives inside a **living host**, absorbs the host's digested food and harms the host.

(d) **Goat** → **heterotrophic – holozoic**. It ingests solid plant food, digests it internally, absorbs the nutrients, assimilates them and egests waste.

**Answer:** mango tree = autotrophic; mushroom = saprophytic; tapeworm = parasitic; goat = holozoic — classified by whether the organism makes food or takes it, and how.`,
      quiz: [
        { prompt: "Nutrition is the process by which living things", options: ["obtain and use food", "make oxygen only", "reproduce only", "move about"], correctIndex: 0, explanation: "Nutrition covers obtaining and using food." },
        { prompt: "Organisms that make their own food are", options: ["autotrophs", "heterotrophs", "parasites", "saprophytes"], correctIndex: 0, explanation: "Autotrophs are self-feeders." },
        { prompt: "Green plants are", options: ["photoautotrophs", "parasites", "saprophytes", "holozoic feeders"], correctIndex: 0, explanation: "They photosynthesise using light." },
        { prompt: "Animals and humans show which main type of nutrition?", options: ["heterotrophic", "autotrophic", "chemoautotrophic", "photoautotrophic"], correctIndex: 0, explanation: "They take in ready-made food." },
        { prompt: "Taking in solid food and digesting it inside the body is", options: ["holozoic nutrition", "saprophytic nutrition", "parasitic nutrition", "autotrophic nutrition"], correctIndex: 0, explanation: "Holozoic = ingest solid food, digest internally." },
        { prompt: "Feeding on dead and decaying matter is", options: ["saprophytic nutrition", "holozoic nutrition", "autotrophic nutrition", "photosynthesis"], correctIndex: 0, explanation: "Saprophytes feed on dead matter." },
        { prompt: "A tapeworm shows which nutrition?", options: ["parasitic", "autotrophic", "saprophytic", "holozoic"], correctIndex: 0, explanation: "It feeds on a living host." },
        { prompt: "Which is the first stage of holozoic nutrition?", options: ["ingestion", "absorption", "assimilation", "egestion"], correctIndex: 0, explanation: "Food is first taken in (ingestion)." },
        { prompt: "Breaking food into small soluble molecules is", options: ["digestion", "ingestion", "egestion", "assimilation"], correctIndex: 0, explanation: "Digestion breaks food down." },
        { prompt: "Soluble food passing into the blood is", options: ["absorption", "digestion", "ingestion", "egestion"], correctIndex: 0, explanation: "Absorption moves food into the blood." },
        { prompt: "Removal of undigested waste is", options: ["egestion", "absorption", "assimilation", "digestion"], correctIndex: 0, explanation: "Egestion removes faeces." },
        { prompt: "Chemoautotrophs get energy from", options: ["chemical reactions", "light only", "eating animals", "dead matter"], correctIndex: 0, explanation: "They use chemical energy, e.g. nitrifying bacteria." },
        { prompt: "Fungi that live on dead logs feed by", options: ["saprophytic nutrition", "photosynthesis", "holozoic nutrition", "chemosynthesis"], correctIndex: 0, explanation: "They digest dead matter externally." },
        { prompt: "Which needs nutrients to build and repair body structures?", options: ["all living things", "only humans", "only plants", "only bacteria"], correctIndex: 0, explanation: "All organisms use nutrients for growth/repair." },
        { prompt: "Assimilation means", options: ["using absorbed food in the cells", "chewing food", "removing waste", "swallowing"], correctIndex: 0, explanation: "Cells use the absorbed nutrients." },
        { prompt: "Photoautotrophs use which energy source?", options: ["light", "chemicals", "host tissue", "dead matter"], correctIndex: 0, explanation: "Light drives photosynthesis." },
        { prompt: "A parasite differs from a saprophyte because it feeds on", options: ["a living host", "dead matter", "sunlight", "minerals only"], correctIndex: 0, explanation: "Parasites use living hosts; saprophytes use dead matter." },
        { prompt: "Nutrients provide the body with", options: ["energy, building material and regulation", "only water", "only oxygen", "only fibre"], correctIndex: 0, explanation: "Nutrients energise, build and regulate." },
        { prompt: "Which organism is a heterotroph?", options: ["a goat", "a maize plant", "an alga", "a cyanobacterium"], correctIndex: 0, explanation: "The goat consumes other organisms." },
        { prompt: "Cyanobacteria are best described as", options: ["autotrophs", "parasites", "holozoic feeders", "saprophytes"], correctIndex: 0, explanation: "They photosynthesise and make their own food." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define nutrition and give two reasons living things need nutrients.", answerKey: "Nutrition: the process of obtaining and using food. Reasons (any two): energy; growth/building and repair of structures; regulation/health. 2 marks definition, 1 each reason.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which organism uses autotrophic nutrition?", options: ["A green plant", "A goat", "A mushroom", "A tapeworm"], correctIndex: 0, answerKey: "Green plants make their own food. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between saprophytic and parasitic nutrition.", answerKey: "Saprophytic: feeds on dead/decaying matter by external digestion (e.g. fungi). Parasitic: lives in/on a living host and takes food from it, harming it (e.g. tapeworm). 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "List the five stages of holozoic nutrition in order.", answerKey: "Ingestion, digestion, absorption, assimilation, egestion. Full marks require all five in order.", marks: 5 },
        { type: "ESSAY", prompt: "Compare autotrophic and heterotrophic nutrition, and describe the three forms of heterotrophic nutrition with examples.", answerKey: "Autotrophic: makes own food from inorganic materials (photo/chemo), e.g. plants (up to 5). Heterotrophic: takes ready-made food (up to 3). Forms: holozoic (ingest solid food, internal digestion, animals), saprophytic (dead matter, fungi), parasitic (living host, tapeworm) with examples (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Introductory Biology (CK-12), 13.42 Food and Nutrients; food tests from General Biology Labs: Carbohydrates, Lipids, Proteins (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/13%3A_Human_Biology/13.42%3A_Food_and_Nutrients)
    {
      slug: "food-and-nutrients",
      title: "Food and Nutrients",
      objective:
        "By the end of the topic, learners should be able to name and classify the six nutrient groups, state their functions and sources, and describe the food tests used to detect them.",
      estimatedMinutes: 130,
      notes: `## The six classes of nutrients

Nutrients have three basic functions: **provide energy**, **build body structure**, and **regulate** chemical processes.

| Nutrient | Function | Food sources | Energy (per gram) |
| --- | --- | --- | --- |
| **Carbohydrates** | main energy source | rice, cassava, bread, fruits | 4 kcal |
| **Proteins** | growth and repair; enzymes, antibodies | fish, meat, beans, eggs, milk | 4 kcal |
| **Lipids (fats/oils)** | energy store; insulation; protects organs | oils, groundnuts, butter | 9 kcal |
| **Vitamins** | regulate body processes (small amounts) | fruits, vegetables | none |
| **Mineral salts** | build bones/teeth, make blood, regulate | leafy greens, milk, salt | none |
| **Water** | medium for reactions; transport; cooling | water, most foods | none |

## Macronutrients and micronutrients

- **Macronutrients** — needed in **large** amounts: carbohydrates, proteins, lipids, water. (All except water can give energy.)
- **Micronutrients** — needed in **small** amounts: vitamins and minerals. They give **no energy** but are essential.

## Key vitamins and minerals

- **Vitamin A** — good vision (prevents night blindness); sources: carrots, palm oil, green leaves.
- **Vitamin C** — healthy gums and skin (prevents scurvy); sources: oranges, guava, tomatoes.
- **Vitamin D** — strong bones (prevents rickets); made in skin in sunlight.
- **Calcium** — bones and teeth; sources: milk, green leaves.
- **Iron** — makes haemoglobin in red blood cells (prevents anaemia); sources: liver, green leaves.
- **Iodine** — needed by the thyroid (prevents goitre); sources: iodised salt, seafood.

## Food tests

| Nutrient | Reagent | Method | Positive result |
| --- | --- | --- | --- |
| **Starch** | iodine solution (IKI) | add a few drops to the sample | blue-black colour |
| **Reducing sugar** | Benedict's solution | add reagent and heat in a water bath | blue → green → yellow → brick-red |
| **Protein** | biuret (copper sulfate + sodium hydroxide) | add reagents and mix | violet/purple colour |
| **Lipid (fat)** | ethanol (emulsion test) | dissolve in ethanol, add to water | white/milky emulsion (cloudy) |
| **Vitamin C** | DCPIP dye | add sample to blue DCPIP | blue dye is decolourised |

## Common errors and misconceptions

- **"Vitamins and minerals give energy"** — they do **not** provide energy; they regulate and build.
- **"Fats are always bad"** — lipids are an essential energy store and insulation; only excess (saturated) fat is harmful.
- **"Benedict's test works cold"** — it must be **heated** in a water bath.
- **"A milky emulsion means starch"** — a milky emulsion in the ethanol test indicates **lipid**, not starch.`,
      workedExample: `**Task.** A learner tests a sample of groundnut paste and a sample of ripe banana. (a) Which food test shows fat in the groundnut? (b) Which two tests would you expect the banana to give positive results for, and what colours? (c) Why is the biuret test not heated?

**Solution**

(a) **Fat in groundnut** → the **emulsion (ethanol) test**: dissolve the sample in ethanol, then pour into water — a **white, milky emulsion** shows lipid is present.

(b) A ripe banana is rich in **starch/sugar**:
- **Iodine test** → **blue-black** (shows starch).
- **Benedict's test** (heated) → **brick-red / orange** (shows reducing sugar, as ripening breaks starch into sugars).

(c) The **biuret test** detects protein at room temperature by forming a **violet** colour with the peptide bonds; heating is **not required** (and could denature/ interfere). Only the **Benedict's test** for reducing sugar needs heating.

**Answer:** groundnut → emulsion test (milky emulsion = fat); banana → iodine (blue-black = starch) and Benedict's (brick-red = reducing sugar); biuret works cold, only Benedict's is heated.`,
      quiz: [
        { prompt: "The main energy source in the diet is", options: ["carbohydrates", "vitamins", "minerals", "water"], correctIndex: 0, explanation: "Carbohydrates are the chief energy food." },
        { prompt: "Proteins are mainly needed for", options: ["growth and repair", "quick energy only", "cooling the body", "vision"], correctIndex: 0, explanation: "Proteins build and repair tissues." },
        { prompt: "Which nutrient gives the most energy per gram?", options: ["lipids (fats)", "carbohydrates", "proteins", "vitamins"], correctIndex: 0, explanation: "Fats provide about 9 kcal/g." },
        { prompt: "Vitamins and minerals are", options: ["micronutrients", "macronutrients", "energy foods", "fibres"], correctIndex: 0, explanation: "They are needed in small amounts." },
        { prompt: "The test for starch uses", options: ["iodine solution", "Benedict's solution", "biuret reagent", "ethanol"], correctIndex: 0, explanation: "Iodine turns blue-black with starch." },
        { prompt: "A positive Benedict's test gives a final colour of", options: ["brick-red", "blue-black", "violet", "milky white"], correctIndex: 0, explanation: "Reducing sugar turns Benedict's brick-red on heating." },
        { prompt: "The biuret test detects", options: ["protein", "starch", "fat", "vitamin C"], correctIndex: 0, explanation: "Biuret turns violet with protein." },
        { prompt: "The emulsion test detects", options: ["lipids", "sugars", "protein", "minerals"], correctIndex: 0, explanation: "A milky emulsion shows fat." },
        { prompt: "Which test must be heated in a water bath?", options: ["Benedict's test", "iodine test", "biuret test", "emulsion test"], correctIndex: 0, explanation: "Benedict's requires heating." },
        { prompt: "Vitamin C deficiency causes", options: ["scurvy", "rickets", "goitre", "anaemia"], correctIndex: 0, explanation: "Lack of vitamin C causes scurvy." },
        { prompt: "Iron is needed to make", options: ["haemoglobin", "bones only", "enzymes only", "vitamin C"], correctIndex: 0, explanation: "Iron forms haemoglobin; lack causes anaemia." },
        { prompt: "Calcium is important for", options: ["bones and teeth", "vision", "clotting only", "energy"], correctIndex: 0, explanation: "Calcium builds bones and teeth." },
        { prompt: "Vitamin A prevents", options: ["night blindness", "scurvy", "rickets", "goitre"], correctIndex: 0, explanation: "Vitamin A is needed for vision." },
        { prompt: "Water is important because it", options: ["is the medium for reactions and transport", "gives lots of energy", "builds bones", "makes haemoglobin"], correctIndex: 0, explanation: "Reactions occur in water; it transports substances." },
        { prompt: "Which are macronutrients?", options: ["carbohydrates, proteins, lipids", "vitamins and minerals only", "iron and calcium", "vitamin A and C"], correctIndex: 0, explanation: "Macronutrients are needed in large amounts." },
        { prompt: "DCPIP dye is used to test for", options: ["vitamin C", "starch", "protein", "fat"], correctIndex: 0, explanation: "Vitamin C decolourises blue DCPIP." },
        { prompt: "A blue-black colour with iodine indicates", options: ["starch", "reducing sugar", "protein", "lipid"], correctIndex: 0, explanation: "Iodine + starch = blue-black." },
        { prompt: "Iodine deficiency causes", options: ["goitre", "scurvy", "rickets", "night blindness"], correctIndex: 0, explanation: "Iodine is needed by the thyroid." },
        { prompt: "Which nutrient provides no energy but regulates body processes?", options: ["vitamins", "carbohydrates", "lipids", "proteins"], correctIndex: 0, explanation: "Vitamins regulate; they give no energy." },
        { prompt: "The biuret reagent contains", options: ["copper sulfate and sodium hydroxide", "iodine", "ethanol", "Benedict's solution"], correctIndex: 0, explanation: "Biuret uses copper(II) sulfate + alkali." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the six classes of nutrients and state one function of each.", answerKey: "Carbohydrates – energy; proteins – growth/repair; lipids – energy store/insulation; vitamins – regulate processes; minerals – build bones/blood/regulate; water – medium/transport. 1 mark per nutrient+function (max 6).", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which food test requires heating in a water bath?", options: ["Benedict's test for reducing sugar", "Iodine test for starch", "Biuret test for protein", "Emulsion test for lipid"], correctIndex: 0, answerKey: "Benedict's must be heated. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the reagent and positive result for the test for (a) protein and (b) starch.", answerKey: "(a) Protein: biuret reagent → violet/purple. (b) Starch: iodine solution → blue-black. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between macronutrients and micronutrients, with examples.", answerKey: "Macronutrients are needed in large amounts (carbohydrates, proteins, lipids, water) and most provide energy; micronutrients are needed in small amounts (vitamins, minerals) and give no energy but are essential. Award for the amount idea + correct examples.", marks: 4 },
        { type: "ESSAY", prompt: "Describe how you would test a food sample for starch, reducing sugar, protein and fat, giving the reagent, method and positive result for each.", answerKey: "Starch: iodine drops → blue-black (up to 3). Reducing sugar: Benedict's + heat → brick-red (up to 4). Protein: biuret → violet (up to 4). Fat: dissolve in ethanol, add water → milky emulsion (up to 4). Reward correct reagents, methods and result colours.", marks: 15 },
      ],
    },
    // source: LibreTexts — Introductory Biology (CK-12), 13.42 Food and Nutrients (balanced eating) (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/13%3A_Human_Biology/13.42%3A_Food_and_Nutrients)
    {
      slug: "balanced-diet",
      title: "Balanced Diet",
      objective:
        "By the end of the topic, learners should be able to explain what a balanced diet is, describe the food groups it contains, and explain why different people have different dietary needs.",
      estimatedMinutes: 90,
      notes: `## What is a balanced diet?

- A **balanced diet** contains all the nutrient groups in the **correct amounts and proportions** for good health.
- Eating a **variety** of the right foods provides energy for growth and activity and keeps the body healthy.

## The components of a balanced diet

A balanced diet must supply:

1. **Carbohydrates** — the main energy food (rice, cassava, yam, bread).
2. **Proteins** — for growth and repair (fish, beans, meat, eggs).
3. **Lipids (fats and oils)** — a concentrated energy store (palm oil, groundnuts).
4. **Vitamins** — to regulate body processes (fruits, vegetables).
5. **Mineral salts** — for bones, blood and regulation (green leaves, milk, salt).
6. **Water** — for reactions, transport and temperature control.
7. **Roughage (dietary fibre)** — not a nutrient, but it adds bulk and prevents constipation (whole grains, vegetables).

## Why dietary needs differ

The amount of each nutrient needed depends on:

- **Age** — growing children and teenagers need more protein for growth.
- **Sex** — males often need more energy; women need extra iron.
- **Activity level** — active workers and athletes need more energy (carbohydrates/fats).
- **Body condition** — pregnant and breastfeeding women need more protein, calcium and iron.
- **Health** — illness or recovery changes nutrient needs.

## Importance of a balanced diet

- Provides **energy** for daily activity.
- Supports **growth, repair and reproduction**.
- Strengthens the **immune system** to fight disease.
- Prevents **deficiency diseases** (scurvy, rickets, anaemia) and diet-related problems.

## Common errors and misconceptions

- **"A balanced diet means eating a lot"** — it means the right **proportions**, not large quantities.
- **"Everyone needs the same diet"** — needs vary with age, sex, activity and health.
- **"Fibre is a nutrient"** — roughage is not digested, but it is an essential part of a healthy diet.
- **"Only expensive foods are nutritious"** — local foods (beans, green leaves, fish, fruits) give a balanced diet cheaply.`,
      workedExample: `**Task.** A mother prepares her child's lunch of only white rice. (a) Why is this meal not balanced? (b) Suggest three local foods she could add and the nutrient each provides. (c) Explain why her pregnant sister needs a different diet from the child.

**Solution**

(a) The meal is **not balanced** because plain rice supplies mostly **carbohydrate** (energy) but lacks **protein, vitamins, minerals, fat and roughage**. A diet of only rice cannot support proper growth, repair or health.

(b) Three local additions:
- **Beans or fish** → **protein** for growth and repair.
- **Green leafy vegetables (e.g. potato greens)** → **vitamins and minerals** (vitamin A, iron, calcium) and roughage.
- **Palm oil or groundnuts** → **lipids** for a concentrated energy store, and some vitamins.

(c) The pregnant sister needs a **different diet** because pregnancy increases the demand for **protein, calcium and iron** (to build the baby's tissues, bones and blood) and for extra energy. A growing child needs plenty of protein too, but the pregnant woman's needs for iron and calcium are especially high.

**Answer:** plain rice is unbalanced (only carbohydrate); add beans/fish (protein), green leaves (vitamins/minerals/fibre) and oil/groundnuts (fat); a pregnant woman needs extra protein, calcium and iron for the developing baby.`,
      quiz: [
        { prompt: "A balanced diet contains", options: ["all nutrient groups in correct proportions", "only carbohydrates", "only protein", "as much food as possible"], correctIndex: 0, explanation: "It has all nutrients in the right amounts." },
        { prompt: "The main energy food in a balanced diet is", options: ["carbohydrate", "vitamin", "mineral", "water"], correctIndex: 0, explanation: "Carbohydrates supply most energy." },
        { prompt: "Which food group is needed for growth and repair?", options: ["protein", "carbohydrate", "fat", "water"], correctIndex: 0, explanation: "Proteins build and repair tissues." },
        { prompt: "Roughage (dietary fibre) is important because it", options: ["adds bulk and prevents constipation", "gives lots of energy", "builds bones", "makes blood"], correctIndex: 0, explanation: "Fibre keeps the gut healthy." },
        { prompt: "Growing children need extra", options: ["protein", "roughage only", "water only", "fat only"], correctIndex: 0, explanation: "Protein supports growth." },
        { prompt: "Pregnant women need more", options: ["protein, calcium and iron", "only carbohydrate", "no extra nutrients", "only water"], correctIndex: 0, explanation: "The baby needs building materials and blood." },
        { prompt: "A balanced diet helps the immune system by", options: ["providing nutrients to fight disease", "adding weight only", "removing all fat", "stopping digestion"], correctIndex: 0, explanation: "Good nutrition supports immunity." },
        { prompt: "Dietary needs depend on all EXCEPT", options: ["a person's name", "age", "activity level", "health"], correctIndex: 0, explanation: "A name does not affect nutrient needs." },
        { prompt: "Which local foods provide protein cheaply?", options: ["beans and fish", "plain rice", "cassava only", "sugar"], correctIndex: 0, explanation: "Beans and fish are good protein sources." },
        { prompt: "Vitamins in a balanced diet come mainly from", options: ["fruits and vegetables", "oils only", "rice only", "salt"], correctIndex: 0, explanation: "Fruits and vegetables supply vitamins." },
        { prompt: "A meal of only white rice mainly provides", options: ["carbohydrate", "protein", "vitamins", "minerals"], correctIndex: 0, explanation: "Rice is chiefly carbohydrate." },
        { prompt: "Active workers and athletes need more", options: ["energy foods", "roughage only", "water only", "no food"], correctIndex: 0, explanation: "They use more energy." },
        { prompt: "Which is TRUE about a balanced diet?", options: ["It means correct proportions, not large amounts", "It means eating a lot", "Everyone needs the same", "It excludes water"], correctIndex: 0, explanation: "Proportion, not quantity, is key." },
        { prompt: "Green leafy vegetables mainly supply", options: ["vitamins, minerals and fibre", "only carbohydrate", "only fat", "only protein"], correctIndex: 0, explanation: "They are rich in vitamins/minerals/fibre." },
        { prompt: "A concentrated energy store in the diet is provided by", options: ["lipids (fats and oils)", "water", "vitamins", "minerals"], correctIndex: 0, explanation: "Fats are the most energy-dense." },
        { prompt: "Women need extra iron to", options: ["make haemoglobin/replace blood loss", "grow taller", "cool the body", "digest fat"], correctIndex: 0, explanation: "Iron makes haemoglobin." },
        { prompt: "A balanced diet prevents", options: ["deficiency diseases", "all injuries", "old age", "hunger only"], correctIndex: 0, explanation: "It supplies nutrients to avoid deficiencies." },
        { prompt: "Water in the diet is needed for", options: ["reactions, transport and cooling", "energy only", "bones only", "vision"], correctIndex: 0, explanation: "Water is essential for many processes." },
        { prompt: "The correct statement is that local foods", options: ["can give a balanced diet cheaply", "are never nutritious", "only provide fat", "cannot be balanced"], correctIndex: 0, explanation: "Local beans, greens, fish and fruit are nutritious." },
        { prompt: "A balanced diet supports", options: ["growth, repair and reproduction", "only movement", "only breathing", "only sleeping"], correctIndex: 0, explanation: "Good nutrition supports many life processes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a balanced diet.", answerKey: "A diet containing all the nutrient groups (carbohydrate, protein, lipid, vitamins, minerals, water, plus fibre) in the correct amounts and proportions for good health. Award for 'all nutrients' + 'correct proportions'.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about dietary needs is correct?", options: ["Needs vary with age, sex, activity and health", "Everyone needs exactly the same diet", "Only children need protein", "Water is not part of the diet"], correctIndex: 0, answerKey: "Needs differ by individual. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three factors that affect how much of each nutrient a person needs.", answerKey: "Any three: age, sex, activity level, body condition (pregnancy/breastfeeding), health/illness. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons why a balanced diet is important.", answerKey: "Any two: provides energy; supports growth/repair/reproduction; strengthens immune system; prevents deficiency diseases. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Using locally available foods, explain how you would plan a balanced meal for a family and justify your choices.", answerKey: "Include an energy food (rice/cassava/yam), a protein (beans/fish/meat), fat (palm oil/groundnut), vitamins/minerals/fibre (green vegetables/fruits), and water (up to 8). Justify each nutrient's role and note different needs (children, pregnant women) (up to 7). Reward realistic local choices.", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal), 4.6 Undernutrition (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/04:_Nutrition/4.6:_Undernutrition)
    {
      slug: "malnutrition",
      title: "Malnutrition",
      objective:
        "By the end of the topic, learners should be able to explain the concept of malnutrition, describe protein-energy malnutrition and micronutrient deficiencies, and state their effects and prevention.",
      estimatedMinutes: 100,
      notes: `## What is malnutrition?

- **Malnutrition** — poor nutrition caused by not getting the **right amount** of nutrients: too little (**undernutrition**) or too much/unbalanced (**overnutrition**).
- Most malnutrition worldwide is **undernutrition** — an insufficient intake of nutritious food, mainly caused by **poverty** and poor food access, not disease.

## Effects of undernutrition in children

- **Wasting** — dangerous thinness with loss of muscle and fat.
- **Stunting** — reduced growth causing **permanently short stature** if not corrected early.
- Weakened immunity and poorer brain development.

## Protein-energy malnutrition

| Disease | Cause | Signs |
| --- | --- | --- |
| **Kwashiorkor** | severe **protein** deficiency (some energy) | swelling (oedema) of feet/ankles, pot/distended belly, thin discoloured hair, skin changes, enlarged liver |
| **Marasmus** | severe lack of **protein and energy (Calories)** | extreme wasting/thinness, very low body weight, anaemia, weak pulse, cold body |

## Micronutrient (vitamin and mineral) deficiencies

| Deficiency | Disease/effect |
| --- | --- |
| **Vitamin A** | night blindness → total blindness; weak immunity |
| **Vitamin C** | scurvy (bleeding gums, poor healing) |
| **Vitamin D / calcium** | rickets (soft, bent bones) in children |
| **Iron** | anaemia (tiredness, pale colour) |
| **Iodine** | goitre (swollen thyroid); intellectual disability in children |

## Overnutrition

- Eating **too much** energy food (fats/sugars) causes **obesity**, which raises the risk of diabetes, high blood pressure and heart disease.

## Prevention

- Eat a **balanced diet** with enough protein, energy and micronutrients.
- **Fortify foods** (e.g. **iodised salt** greatly reduced iodine deficiency worldwide).
- Improve food supply, sanitation, education and treat sick children early.

## Common errors and misconceptions

- **"Malnutrition only means starvation"** — it also includes **overnutrition** (obesity) and hidden micronutrient deficiencies.
- **"Kwashiorkor and marasmus are the same"** — kwashiorkor is mainly **protein** deficiency (with oedema); marasmus is lack of **both protein and energy** (severe wasting).
- **"A fat child is well nourished"** — obesity is a form of malnutrition and can hide deficiencies.
- **"Goitre is caused by too much salt"** — goitre is caused by **too little iodine**; iodised salt prevents it.`,
      workedExample: `**Task.** Two children are brought to a clinic. Child A is very swollen in the feet with a pot-belly, thin reddish hair and skin patches. Child B is extremely thin and wasted, with a very low body weight for age. (a) Diagnose each condition. (b) Give the main dietary cause of each. (c) State one micronutrient deficiency common in the region and how to prevent it.

**Solution**

(a) Diagnosis:
- **Child A** — swelling (oedema), pot-belly, thin discoloured hair, skin changes → **kwashiorkor**.
- **Child B** — extreme wasting and very low body weight → **marasmus**.

(b) Dietary cause:
- **Kwashiorkor:** severe lack of **protein** (though some energy/carbohydrate may be eaten).
- **Marasmus:** severe lack of **both protein and energy (Calories)** — general starvation.

(c) A common micronutrient deficiency and its prevention:
- **Iodine deficiency** causes **goitre** (and intellectual disability in children); it is prevented by using **iodised salt**.
- (Others acceptable: iron → anaemia, prevented by iron-rich foods; vitamin A → night blindness, prevented by vitamin-A-rich foods.)

**Answer:** Child A has kwashiorkor (protein deficiency), Child B has marasmus (protein + energy deficiency); a common regional deficiency is iodine deficiency, prevented by iodised salt.`,
      quiz: [
        { prompt: "Malnutrition means", options: ["not getting the right amount of nutrients", "eating only protein", "eating a balanced diet", "drinking too much water"], correctIndex: 0, explanation: "It is poor nutrition, too little or too much." },
        { prompt: "Most malnutrition worldwide is", options: ["undernutrition", "overnutrition", "vitamin excess", "protein excess"], correctIndex: 0, explanation: "Insufficient nutritious food is the main problem." },
        { prompt: "Kwashiorkor is caused mainly by lack of", options: ["protein", "carbohydrate", "water", "fibre"], correctIndex: 0, explanation: "It is a severe protein deficiency." },
        { prompt: "A key sign of kwashiorkor is", options: ["swelling (oedema) and a pot-belly", "extreme thinness only", "strong muscles", "good hair"], correctIndex: 0, explanation: "Oedema and distended belly are typical." },
        { prompt: "Marasmus is caused by lack of", options: ["both protein and energy", "vitamin C only", "iron only", "iodine only"], correctIndex: 0, explanation: "Marasmus is protein-energy starvation." },
        { prompt: "The main sign of marasmus is", options: ["severe wasting and very low weight", "swelling of the feet", "goitre", "night blindness"], correctIndex: 0, explanation: "Extreme thinness marks marasmus." },
        { prompt: "Stunting in children means", options: ["reduced growth/permanently short stature", "swelling", "obesity", "good growth"], correctIndex: 0, explanation: "Chronic undernutrition stunts growth." },
        { prompt: "Iron deficiency causes", options: ["anaemia", "rickets", "scurvy", "goitre"], correctIndex: 0, explanation: "Iron is needed for haemoglobin." },
        { prompt: "Iodine deficiency causes", options: ["goitre", "scurvy", "rickets", "night blindness"], correctIndex: 0, explanation: "The thyroid swells without iodine." },
        { prompt: "Vitamin A deficiency causes", options: ["night blindness", "goitre", "rickets", "anaemia"], correctIndex: 0, explanation: "Vitamin A is needed for vision." },
        { prompt: "Scurvy is caused by lack of", options: ["vitamin C", "vitamin A", "iron", "iodine"], correctIndex: 0, explanation: "Vitamin C deficiency causes scurvy." },
        { prompt: "Rickets (soft, bent bones) is caused by lack of", options: ["vitamin D/calcium", "vitamin C", "iron", "protein"], correctIndex: 0, explanation: "Vitamin D and calcium harden bones." },
        { prompt: "Overnutrition can lead to", options: ["obesity", "marasmus", "goitre", "scurvy"], correctIndex: 0, explanation: "Excess energy causes obesity." },
        { prompt: "Obesity raises the risk of", options: ["diabetes and heart disease", "night blindness", "goitre", "scurvy"], correctIndex: 0, explanation: "Obesity is linked to chronic diseases." },
        { prompt: "Iodine deficiency is prevented by", options: ["using iodised salt", "eating more sugar", "drinking less water", "avoiding all salt"], correctIndex: 0, explanation: "Iodised salt supplies iodine." },
        { prompt: "The main underlying cause of undernutrition is", options: ["poverty and poor food access", "eating too much protein", "too many vitamins", "clean water"], correctIndex: 0, explanation: "Lack of access to nutritious food." },
        { prompt: "A well-fed but obese child is", options: ["still malnourished (overnutrition)", "always healthy", "protein deficient", "wasting"], correctIndex: 0, explanation: "Obesity is a form of malnutrition." },
        { prompt: "Which deficiency can permanently reduce a child's intelligence?", options: ["iodine", "vitamin C", "fibre", "water"], correctIndex: 0, explanation: "Iodine deficiency causes intellectual disability." },
        { prompt: "Kwashiorkor and marasmus are both types of", options: ["protein-energy malnutrition", "overnutrition", "vitamin excess", "infection"], correctIndex: 0, explanation: "Both are protein-energy malnutrition." },
        { prompt: "Malnutrition weakens the body's", options: ["immune system", "bones only", "hair only", "teeth only"], correctIndex: 0, explanation: "Poor nutrition lowers immunity." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by malnutrition.", answerKey: "Poor nutrition from not getting the right amount of nutrients — too little (undernutrition) or too much/unbalanced (overnutrition). Award for the idea of wrong amount/imbalance and both directions.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which condition results from severe protein deficiency with oedema?", options: ["Kwashiorkor", "Marasmus", "Scurvy", "Goitre"], correctIndex: 0, answerKey: "Kwashiorkor = protein deficiency with swelling. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the deficiency that causes (a) anaemia, (b) goitre, (c) scurvy.", answerKey: "(a) iron; (b) iodine; (c) vitamin C. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Compare kwashiorkor and marasmus.", answerKey: "Kwashiorkor: severe protein deficiency (some energy), signs oedema/pot-belly/hair changes. Marasmus: severe lack of both protein and energy, signs extreme wasting/very low weight. Award for cause and one sign of each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the causes, effects and prevention of malnutrition in a developing community.", answerKey: "Causes: poverty/poor food access, poor diet, illness (up to 4). Effects: protein-energy malnutrition (kwashiorkor, marasmus), stunting/wasting, micronutrient deficiencies (anaemia, goitre, night blindness, scurvy, rickets), weakened immunity; also overnutrition/obesity (up to 6). Prevention: balanced diet, food fortification (iodised salt), improved food supply/sanitation/education, early treatment (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Anatomy and Physiology of Animals (Lawson), 11.7 Teeth; CK-12 — dental formula (https://med.libretexts.org/Bookshelves/Veterinary_Medicine/Anatomy_and_Physiology_of_Animals_(Lawson)/11:_The_Gut_and_Digestion/11.07:_Teeth)
    {
      slug: "teeth-and-dental-formulae",
      title: "Teeth, Dental Formulae and Dental Care",
      objective:
        "By the end of the topic, learners should be able to name and describe the types of mammalian teeth, work out a dental formula, and explain how to care for the teeth.",
      estimatedMinutes: 110,
      notes: `## Types of teeth (heterodont dentition)

Mammals are **heterodont** — they have different kinds of teeth for different jobs.

| Tooth | Shape | Function |
| --- | --- | --- |
| **Incisors** | chisel-shaped, at the front | biting and cutting food |
| **Canines** | pointed, fang-like | tearing and piercing (holding prey) |
| **Premolars** | flatter with cusps | crushing and grinding |
| **Molars** | broad, flat, at the back | chewing and grinding |

\`\`\`svg Types of teeth in the upper jaw (one side)
<svg viewBox="0 0 300 110" role="img" aria-label="Incisors canines premolars and molars in a jaw">
  <rect x="20" y="35" width="16" height="40" rx="3" fill="#e0e7ff" stroke="currentColor"/>
  <rect x="40" y="35" width="16" height="40" rx="3" fill="#e0e7ff" stroke="currentColor"/>
  <polygon points="64,75 72,30 80,75" fill="#c7d2fe" stroke="currentColor"/>
  <rect x="90" y="40" width="22" height="35" rx="4" fill="#a5b4fc" stroke="currentColor"/>
  <rect x="116" y="40" width="22" height="35" rx="4" fill="#a5b4fc" stroke="currentColor"/>
  <rect x="145" y="42" width="28" height="33" rx="5" fill="#818cf8" stroke="currentColor"/>
  <rect x="177" y="42" width="28" height="33" rx="5" fill="#818cf8" stroke="currentColor"/>
  <rect x="209" y="42" width="28" height="33" rx="5" fill="#818cf8" stroke="currentColor"/>
  <text x="30" y="95" font-size="8" text-anchor="middle" fill="currentColor">incisors</text>
  <text x="72" y="95" font-size="8" text-anchor="middle" fill="currentColor">canine</text>
  <text x="114" y="95" font-size="8" text-anchor="middle" fill="currentColor">premolars</text>
  <text x="200" y="95" font-size="8" text-anchor="middle" fill="currentColor">molars</text>
</svg>
\`\`\`

## The dental formula

- The **dental formula** gives the number of each type of tooth in **half** of the upper jaw over half of the lower jaw (mammals are symmetrical, so one side is counted).
- Order: **incisors (I), canines (C), premolars (PM), molars (M)**.
- Written as upper numbers over lower numbers.

**Adult human dental formula:**

- I 2/2, C 1/1, PM 2/2, M 3/3
- Half a jaw = 2 + 1 + 2 + 3 = **8 teeth**; total = 8 × 4 = **32 teeth**.

## How diet shapes teeth

- **Carnivores** (e.g. dog, cat) — large **canines** for stabbing and cutting flesh.
- **Herbivores** (e.g. cow, rabbit) — broad **molars** and gaps for grinding plant material; reduced or no canines.
- **Omnivores** (e.g. humans) — a mix of all four tooth types.

## Structure of a tooth (brief)

- **Enamel** — hard outer covering (the hardest substance in the body).
- **Dentine** — bony layer under the enamel.
- **Pulp cavity** — contains blood vessels and nerves.

## Dental care

To keep teeth healthy:

1. **Brush** twice a day with fluoride toothpaste; clean between teeth.
2. **Limit sugary foods and drinks** — bacteria turn sugar into acid that decays teeth.
3. **Eat calcium- and vitamin-rich foods** for strong teeth.
4. **Visit a dentist** regularly.
5. **Avoid** using teeth as tools and avoid tobacco.

- **Tooth decay (dental caries)** happens when bacteria + sugar form **acid** that dissolves enamel.

## Common errors and misconceptions

- **"The dental formula counts the whole mouth"** — it counts **half** the upper over half the lower jaw.
- **"Canines are for grinding"** — canines **tear/pierce**; molars and premolars grind.
- **"Sugar directly rots teeth"** — bacteria change sugar into **acid**, which decays the enamel.
- **"Herbivores have big canines"** — herbivores usually have **reduced** canines and large molars.`,
      workedExample: `**Task.** A dog has the dental formula I 3/3, C 1/1, PM 4/4, M 2/3. (a) How many teeth are in one half of the upper jaw? (b) Work out the total number of teeth. (c) Which teeth are enlarged in the dog and why?

**Solution**

(a) One half of the **upper** jaw = 3 (incisors) + 1 (canine) + 4 (premolars) + 2 (molars) = **10 teeth**.

(b) Total number of teeth:
- Half of the **upper** jaw = 3 + 1 + 4 + 2 = 10.
- Half of the **lower** jaw = 3 + 1 + 4 + 3 = 11.
- One full side (upper + lower) = 10 + 11 = 21.
- The mouth has **two** sides, so total = 21 × 2 = **42 teeth**.

(c) The **canines** are large and pointed. The dog is a **carnivore**, so it uses its long canines to **stab, grip and tear flesh**; its molars (carnassials) also shear meat.

**Answer:** 10 teeth in half the upper jaw; 42 teeth in total; the canines are enlarged for tearing flesh because the dog is a carnivore.`,
      quiz: [
        { prompt: "Having different kinds of teeth is described as", options: ["heterodont", "homodont", "toothless", "diphyodont"], correctIndex: 0, explanation: "Mammals have several tooth types (heterodont)." },
        { prompt: "Incisors are used for", options: ["biting and cutting", "grinding", "piercing prey", "nothing"], correctIndex: 0, explanation: "The chisel-shaped incisors cut food." },
        { prompt: "Canines are shaped for", options: ["tearing and piercing", "grinding", "cutting flat", "cooling"], correctIndex: 0, explanation: "Pointed canines pierce and tear." },
        { prompt: "Molars and premolars are used for", options: ["crushing and grinding", "cutting only", "tearing flesh", "biting only"], correctIndex: 0, explanation: "Broad surfaces grind food." },
        { prompt: "The dental formula counts teeth in", options: ["half of the upper over half of the lower jaw", "the whole mouth", "one tooth only", "the tongue"], correctIndex: 0, explanation: "One symmetrical half is counted." },
        { prompt: "An adult human has how many teeth?", options: ["32", "20", "28", "42"], correctIndex: 0, explanation: "The adult set has 32 teeth." },
        { prompt: "The order of teeth in a dental formula is", options: ["incisors, canines, premolars, molars", "molars, premolars, canines, incisors", "canines, incisors, molars, premolars", "premolars, molars, incisors, canines"], correctIndex: 0, explanation: "I, C, PM, M from front to back." },
        { prompt: "Carnivores have enlarged", options: ["canines", "incisors only", "molars only", "no teeth"], correctIndex: 0, explanation: "Large canines stab and tear flesh." },
        { prompt: "Herbivores usually have large", options: ["molars for grinding plants", "canines", "no teeth", "incisors only"], correctIndex: 0, explanation: "Broad molars grind tough plants." },
        { prompt: "The hardest outer covering of a tooth is", options: ["enamel", "dentine", "pulp", "gum"], correctIndex: 0, explanation: "Enamel is the hardest body substance." },
        { prompt: "The part of a tooth with nerves and blood vessels is the", options: ["pulp cavity", "enamel", "dentine", "root only"], correctIndex: 0, explanation: "The pulp holds nerves and vessels." },
        { prompt: "Tooth decay is caused by", options: ["bacteria turning sugar into acid", "eating vegetables", "brushing teeth", "drinking water"], correctIndex: 0, explanation: "Acid from bacteria dissolves enamel." },
        { prompt: "To care for teeth you should", options: ["brush twice a day and limit sugar", "eat more sweets", "never see a dentist", "use teeth as tools"], correctIndex: 0, explanation: "Brushing and low sugar protect teeth." },
        { prompt: "Fluoride toothpaste helps by", options: ["strengthening enamel against decay", "adding sugar", "removing all teeth", "cooling the mouth"], correctIndex: 0, explanation: "Fluoride hardens enamel." },
        { prompt: "Humans are omnivores, so they have", options: ["all four tooth types", "only canines", "only molars", "no incisors"], correctIndex: 0, explanation: "A mixed diet needs all tooth types." },
        { prompt: "In the formula I 2/2 C 1/1 PM 2/2 M 3/3, how many teeth are in one half jaw (upper)?", options: ["8", "16", "32", "4"], correctIndex: 0, explanation: "2+1+2+3 = 8." },
        { prompt: "Dental caries means", options: ["tooth decay", "strong teeth", "extra teeth", "a type of gum"], correctIndex: 0, explanation: "Caries is decay of the tooth." },
        { prompt: "Which food is best for strong teeth?", options: ["calcium-rich food like milk", "sweets", "soft drinks", "sugar"], correctIndex: 0, explanation: "Calcium builds bones and teeth." },
        { prompt: "The layer beneath the enamel is", options: ["dentine", "pulp", "gum", "cement only"], correctIndex: 0, explanation: "Dentine lies under enamel." },
        { prompt: "Limiting sugary drinks protects teeth because", options: ["less acid is produced by bacteria", "sugar strengthens enamel", "acid is good for teeth", "it adds fluoride"], correctIndex: 0, explanation: "Less sugar means less acid attack." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Name the four types of teeth and give the function of each.", answerKey: "Incisors – biting/cutting; canines – tearing/piercing; premolars – crushing/grinding; molars – chewing/grinding. 1 mark per tooth+function (max 4).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "A dental formula counts the teeth in", options: ["half the upper jaw over half the lower jaw", "the whole mouth at once", "the tongue", "one tooth"], correctIndex: 0, answerKey: "Half-jaw over half-jaw. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "The dental formula of an animal is I 3/3 C 1/1 PM 3/3 M 3/3. Work out the total number of teeth.", answerKey: "Half upper = 3+1+3+3 = 10; half lower = 10; one side = 20; ×2 = 40 teeth. Award for correct method and answer (40).", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Explain how tooth decay happens and state two ways to prevent it.", answerKey: "Bacteria in the mouth turn sugar into acid that dissolves the enamel, causing decay. Prevention (any two): brush with fluoride toothpaste, limit sugary foods/drinks, visit the dentist, eat calcium-rich foods. 2 for cause + 1 each prevention.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how the teeth of a carnivore and a herbivore are adapted to their diets, and describe how to keep human teeth healthy.", answerKey: "Carnivore: large canines to stab/tear flesh, shearing carnassials (up to 4). Herbivore: reduced canines, broad ridged molars/diastema to grind plants (up to 4). Dental care: brush twice daily with fluoride, limit sugar, calcium-rich diet, regular dentist visits, avoid tobacco (up to 7).", marks: 15 },
      ],
    },
    // source: LibreTexts — Microbiology (Boundless), 17.5C Food Preservation; OpenStax Biology 2e 22.4 (foodborne diseases) (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(Boundless)/17:_Industrial_Microbiology/17.05:_Food_Preservation/17.5C:_Food_Preservation)
    {
      slug: "food-poisoning-and-its-prevention",
      title: "Food Poisoning and Its Prevention",
      objective:
        "By the end of the topic, learners should be able to explain what food poisoning is, name common causes, and describe how it can be prevented.",
      estimatedMinutes: 90,
      notes: `## What is food poisoning?

- **Food poisoning (foodborne illness)** — illness caused by eating food contaminated with harmful **microorganisms** (bacteria, viruses) or their **toxins**.
- It usually causes **vomiting, diarrhoea, stomach cramps and fever**, and can be dangerous through **dehydration**, especially in children.

## Common causes

| Cause | Example | Source |
| --- | --- | --- |
| ***Salmonella*** | typhoid/gastroenteritis | undercooked eggs, poultry, contaminated water |
| ***Escherichia coli* (E. coli O157:H7)** | severe diarrhoea | undercooked meat, dirty water |
| ***Clostridium botulinum*** | botulism (its toxin) | badly canned/preserved food |
| ***Staphylococcus*** | rapid vomiting (toxin) | food left in the warmth from dirty hands |
| ***Listeria*** | listeriosis | unpasteurised milk, some ready foods |

## Why food becomes unsafe

- Microorganisms grow fast in food that is **warm, moist and left out** for a long time.
- Contamination comes from **dirty hands, flies, unclean water, raw meat juices** touching cooked food (cross-contamination), and poor storage.

## Preventing food poisoning

1. **Cook food thoroughly** — heat kills most bacteria.
2. **Store food cold** — refrigerate to slow microbial growth; do not leave cooked food out.
3. **Keep raw and cooked food separate** — prevent cross-contamination.
4. **Wash hands, utensils and surfaces** before handling food.
5. **Use clean, safe water** and wash fruits and vegetables.
6. **Avoid spoiled or swollen tinned food** (risk of botulism).
7. **Cover food** to keep off flies and dust.

## Common errors and misconceptions

- **"Food poisoning is caused only by poison"** — it is usually caused by **microorganisms or their toxins** in food.
- **"If it looks fine it is safe"** — contaminated food may look and smell normal.
- **"Reheating always makes food safe"** — some **toxins** are not destroyed by reheating; prevention is better.
- **"Only meat causes food poisoning"** — eggs, milk, water, fruits and rice can also cause it.`,
      workedExample: `**Task.** A family ate rice and chicken that had been left uncovered on the table since morning. By evening several members had vomiting and diarrhoea. (a) What is the likely problem? (b) Explain why leaving the food out caused it. (c) Give three measures that would have prevented it.

**Solution**

(a) The family has **food poisoning (foodborne illness)** — most likely from bacteria such as *Salmonella* or *Staphylococcus* multiplying in the food.

(b) The food was **warm, moist and left out for hours**, which are ideal conditions for **bacteria to multiply rapidly** and, in some cases, release **toxins**. Flies and dirty hands may also have contaminated it. Eating this food introduced large numbers of bacteria/toxins, causing vomiting and diarrhoea.

(c) Three preventive measures:
- **Cook food thoroughly** and eat it soon after cooking.
- **Store leftovers cold** (refrigerate) instead of leaving them out.
- **Cover the food** and keep raw and cooked foods separate; wash hands and utensils.

**Answer:** food poisoning from bacteria that multiplied in the warm, uncovered food; prevented by cooking well, storing cold/covered, and good hygiene.`,
      quiz: [
        { prompt: "Food poisoning is caused by", options: ["harmful microorganisms or their toxins in food", "eating vegetables", "drinking clean water", "cooking food well"], correctIndex: 0, explanation: "Contaminated food carries microbes/toxins." },
        { prompt: "A common symptom of food poisoning is", options: ["vomiting and diarrhoea", "improved appetite", "stronger bones", "clear vision"], correctIndex: 0, explanation: "The gut reacts with vomiting/diarrhoea." },
        { prompt: "Bacteria multiply fastest in food that is", options: ["warm, moist and left out", "frozen", "very dry", "boiling"], correctIndex: 0, explanation: "Warmth and moisture favour growth." },
        { prompt: "Salmonella is often found in", options: ["undercooked eggs and poultry", "boiled water", "table salt", "dry rice"], correctIndex: 0, explanation: "Salmonella contaminates eggs/poultry." },
        { prompt: "Botulism comes from the toxin of", options: ["Clostridium botulinum", "Salmonella", "E. coli", "Listeria"], correctIndex: 0, explanation: "C. botulinum toxin causes botulism." },
        { prompt: "Cross-contamination means", options: ["raw food's germs reaching cooked food", "cooking food twice", "freezing food", "washing hands"], correctIndex: 0, explanation: "Germs pass from raw to cooked food." },
        { prompt: "Cooking food thoroughly helps because heat", options: ["kills most bacteria", "adds toxins", "cools the food", "removes vitamins only"], correctIndex: 0, explanation: "High temperature destroys microbes." },
        { prompt: "Refrigerating cooked food", options: ["slows microbial growth", "speeds up spoilage", "adds bacteria", "has no effect"], correctIndex: 0, explanation: "Cold slows bacterial multiplication." },
        { prompt: "Which prevents food poisoning?", options: ["washing hands before handling food", "leaving food uncovered", "using dirty water", "storing food warm"], correctIndex: 0, explanation: "Hygiene reduces contamination." },
        { prompt: "A dangerous effect of severe food poisoning is", options: ["dehydration", "weight gain", "stronger immunity", "better digestion"], correctIndex: 0, explanation: "Fluid loss causes dehydration." },
        { prompt: "Swollen tinned food should be", options: ["thrown away (risk of botulism)", "eaten quickly", "shaken and eaten", "left in the sun"], correctIndex: 0, explanation: "Swelling suggests toxin-producing bacteria." },
        { prompt: "Covering food helps by", options: ["keeping off flies and dust", "adding toxins", "warming the food", "removing nutrients"], correctIndex: 0, explanation: "Covers block contamination." },
        { prompt: "E. coli O157:H7 causes", options: ["severe diarrhoea", "goitre", "rickets", "scurvy"], correctIndex: 0, explanation: "It is a foodborne diarrhoeal pathogen." },
        { prompt: "Which statement is TRUE?", options: ["Contaminated food may look and smell normal", "Unsafe food always smells bad", "All toxins are destroyed by heating", "Only meat causes food poisoning"], correctIndex: 0, explanation: "Contaminated food can appear normal." },
        { prompt: "Keeping raw meat separate from cooked food prevents", options: ["cross-contamination", "cooking", "freezing", "vitamin loss"], correctIndex: 0, explanation: "It stops germs spreading to cooked food." },
        { prompt: "Staphylococcus food poisoning is caused by its", options: ["toxin", "size", "colour", "movement"], correctIndex: 0, explanation: "Staphylococcus releases a toxin causing rapid vomiting." },
        { prompt: "Unpasteurised milk may carry", options: ["Listeria", "vitamin D", "fluoride", "clean water"], correctIndex: 0, explanation: "Listeria can be in unpasteurised milk." },
        { prompt: "Fruits and vegetables should be", options: ["washed with clean water before eating", "left dirty", "kept warm", "never eaten raw"], correctIndex: 0, explanation: "Washing removes contaminants." },
        { prompt: "Why is prevention better than reheating?", options: ["some toxins survive reheating", "reheating adds vitamins", "reheating is impossible", "toxins like heat"], correctIndex: 0, explanation: "Heat may not destroy all toxins." },
        { prompt: "The safest response to food left out all day is to", options: ["not eat it", "eat it cold", "reheat and eat", "share it"], correctIndex: 0, explanation: "Discard food that has been left out and may be unsafe." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define food poisoning and state two common symptoms.", answerKey: "Illness from eating food contaminated with harmful microorganisms or their toxins. Symptoms (any two): vomiting, diarrhoea, stomach cramps, fever. 2 marks definition, 1 each symptom.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which condition allows bacteria to multiply fastest in food?", options: ["Warm, moist and left out", "Frozen", "Very dry", "Boiling hot"], correctIndex: 0, answerKey: "Warmth and moisture favour growth. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Name two microorganisms that cause food poisoning and one food each is linked to.", answerKey: "Any two: Salmonella – eggs/poultry; E. coli – undercooked meat/water; Clostridium botulinum – canned food; Staphylococcus – food left warm; Listeria – unpasteurised milk. 1.5 marks per pair.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State three ways to prevent food poisoning.", answerKey: "Any three: cook food thoroughly; store food cold; separate raw and cooked food; wash hands/utensils; use clean water; cover food; avoid swollen tins. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the causes of food poisoning and describe the measures a household can take to prevent it.", answerKey: "Causes: contamination by bacteria/viruses/toxins from dirty hands, flies, unclean water, raw meat, poor storage; rapid growth in warm moist food (up to 7). Prevention: cook thoroughly, refrigerate, avoid cross-contamination, hygiene, clean water, cover food, discard suspect/swollen food (up to 8).", marks: 15 },
      ],
    },
    // source: LibreTexts — Microbiology (Boundless), 17.5C Food Preservation (https://bio.libretexts.org/Bookshelves/Microbiology/Microbiology_(Boundless)/17:_Industrial_Microbiology/17.05:_Food_Preservation/17.5C:_Food_Preservation)
    {
      slug: "food-preservation",
      title: "Methods and Importance of Food Preservation",
      objective:
        "By the end of the topic, learners should be able to name and describe methods of food preservation, explain the biological basis of each, and state the importance of preserving food.",
      estimatedMinutes: 110,
      notes: `## Why food spoils

- Food spoils because **microorganisms (bacteria, moulds, yeasts)** and the food's own **enzymes** break it down.
- These microbes need **water, warmth, nutrients and (usually) oxygen** to grow.
- **Food preservation** works by removing one or more of these conditions so microbes cannot multiply.

## Methods of food preservation

| Method | How it works (biological basis) | Examples |
| --- | --- | --- |
| **Drying / dehydration** | removes **water**, so microbes cannot grow | dried fish, cassava, grains |
| **Salting** | salt draws water out by **osmosis**, lowering water available to microbes | salted fish/meat |
| **Smoking** | drying + **antimicrobial chemicals** from smoke | smoked fish, bushmeat |
| **Refrigeration** | **cold slows** microbial growth and enzyme action | fresh foods in a fridge |
| **Freezing** | very cold **stops** growth and kills some microbes | frozen meat, fish |
| **Heating (boiling/parboiling/pasteurisation)** | high heat **kills** microbes | pasteurised milk, parboiled rice |
| **Canning** | food is heated then **sealed** in sterile containers | canned fish, tomatoes |
| **Use of oil / sugar** | coats food and lowers available water/oxygen | food stored in oil, jam |

## The biological principle (summary)

Preservation prevents spoilage by:

- **removing water** (drying, salting, smoking, sugar);
- **lowering the temperature** (refrigeration, freezing);
- **killing microbes with heat** (boiling, canning, pasteurisation);
- **removing oxygen or sealing out microbes** (canning, oil, vacuum packing).

## Importance of food preservation

1. **Prevents food spoilage** and waste.
2. **Ensures food security** — food is available in the off-season and in shortages.
3. **Prevents food poisoning** by stopping harmful microbes.
4. **Allows storage and transport** of food over long distances and time.
5. **Saves money** and supports trade.

## Common errors and misconceptions

- **"Preservation kills all microbes"** — many methods only **stop growth** (drying, salting, refrigeration); the microbes may revive if conditions return.
- **"Refrigeration and freezing are the same"** — refrigeration **slows** growth; freezing **stops** it (and kills some microbes).
- **"Salting adds no water change"** — salt removes water from microbes by **osmosis**.
- **"Canned food never spoils"** — damaged or swollen cans can allow dangerous bacteria (botulism).`,
      workedExample: `**Task.** A fisherman catches more fish than can be sold fresh. Explain how (a) drying, (b) salting and (c) smoking each preserve the fish, and (d) give two reasons preservation is important for his community.

**Solution**

(a) **Drying** — spreading the fish in the sun (or a dryer) **removes water**. Without enough water, bacteria and moulds **cannot grow**, so the fish keeps for a long time.

(b) **Salting** — rubbing salt on the fish makes salt draw water out of both the fish and any microbes by **osmosis**. The low water content **stops microbes multiplying**.

(c) **Smoking** — hanging the fish over a smoky fire both **dries** it and coats it with **antimicrobial chemicals** from the smoke, which inhibit microbes and add flavour.

(d) Two reasons preservation is important:
- **Prevents waste and food poisoning** — the extra fish is not lost to spoilage and stays safe to eat.
- **Ensures food security and income** — preserved fish can be stored, transported and **sold later or in the off-season**, giving food and money to the community.

**Answer:** drying and salting remove water (osmosis in salting) so microbes cannot grow; smoking dries and adds antimicrobial chemicals; preservation prevents waste and food poisoning and provides food security and income.`,
      quiz: [
        { prompt: "Food spoils mainly because of", options: ["microorganisms and enzymes", "sunlight only", "cold air", "clean water"], correctIndex: 0, explanation: "Microbes and enzymes break food down." },
        { prompt: "Microorganisms in food need all EXCEPT", options: ["freezing temperatures", "water", "warmth", "nutrients"], correctIndex: 0, explanation: "They grow poorly when frozen." },
        { prompt: "Drying preserves food by removing", options: ["water", "salt", "protein", "colour"], correctIndex: 0, explanation: "Without water microbes cannot grow." },
        { prompt: "Salting preserves food by", options: ["drawing out water by osmosis", "adding water", "warming the food", "adding oxygen"], correctIndex: 0, explanation: "Salt removes water from microbes." },
        { prompt: "Smoking preserves food by drying and", options: ["adding antimicrobial chemicals", "adding water", "cooling", "adding sugar"], correctIndex: 0, explanation: "Smoke chemicals inhibit microbes." },
        { prompt: "Refrigeration preserves food by", options: ["slowing microbial growth", "killing all microbes", "drying the food", "adding salt"], correctIndex: 0, explanation: "Cold slows growth and enzymes." },
        { prompt: "Freezing differs from refrigeration because it", options: ["stops growth and kills some microbes", "warms the food", "adds water", "adds oxygen"], correctIndex: 0, explanation: "Freezing halts growth completely." },
        { prompt: "Boiling and pasteurisation preserve food by", options: ["killing microbes with heat", "adding water", "cooling", "adding salt"], correctIndex: 0, explanation: "Heat destroys microbes." },
        { prompt: "Canning involves heating food then", options: ["sealing it in sterile containers", "leaving it open", "salting it", "freezing it"], correctIndex: 0, explanation: "Sealing keeps microbes out." },
        { prompt: "Storing food in oil or sugar works by", options: ["lowering available water/oxygen", "adding microbes", "warming food", "adding water"], correctIndex: 0, explanation: "It denies microbes water/oxygen." },
        { prompt: "Which method only stops growth rather than killing microbes?", options: ["refrigeration", "boiling", "canning", "pasteurisation"], correctIndex: 0, explanation: "Cold slows but does not kill." },
        { prompt: "An importance of food preservation is", options: ["ensuring food security", "increasing spoilage", "spreading disease", "wasting food"], correctIndex: 0, explanation: "Preserved food is available later." },
        { prompt: "Preservation helps prevent", options: ["food poisoning", "photosynthesis", "digestion", "respiration"], correctIndex: 0, explanation: "It stops harmful microbes growing." },
        { prompt: "Parboiling rice is an example of preservation by", options: ["heating", "salting", "freezing", "drying only"], correctIndex: 0, explanation: "Heat treatment helps preserve it." },
        { prompt: "Osmosis is important in which method?", options: ["salting", "freezing", "canning", "smoking only"], correctIndex: 0, explanation: "Salt removes water by osmosis." },
        { prompt: "Swollen tinned food is dangerous because it may contain", options: ["toxin-producing bacteria", "extra vitamins", "clean water", "salt"], correctIndex: 0, explanation: "Swelling suggests bacterial gas/toxin (botulism)." },
        { prompt: "Which is TRUE?", options: ["Many methods only stop growth, microbes may revive", "All methods kill every microbe", "Preservation adds microbes", "Preservation spoils food"], correctIndex: 0, explanation: "Some methods only halt growth temporarily." },
        { prompt: "Dried cassava lasts longer because it has", options: ["little water for microbes", "more water", "added sugar", "more oxygen"], correctIndex: 0, explanation: "Low water content prevents growth." },
        { prompt: "Which method uses cold to preserve food?", options: ["refrigeration/freezing", "smoking", "salting", "canning"], correctIndex: 0, explanation: "Refrigeration and freezing use cold." },
        { prompt: "Food preservation supports trade because preserved food can be", options: ["stored and transported over time and distance", "eaten only fresh", "never sold", "spoiled quickly"], correctIndex: 0, explanation: "It keeps food usable for markets." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain why food spoils and how preservation prevents it.", answerKey: "Food spoils because microorganisms (bacteria, moulds, yeasts) and enzymes break it down; they need water, warmth, nutrients and oxygen. Preservation removes one or more of these conditions so microbes cannot multiply. Award for spoilage cause + how preservation stops it.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which preservation method works by osmosis removing water from microbes?", options: ["Salting", "Freezing", "Canning", "Boiling"], correctIndex: 0, answerKey: "Salt draws out water by osmosis. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State the biological basis of (a) drying and (b) refrigeration.", answerKey: "(a) Drying removes water so microbes cannot grow. (b) Refrigeration lowers temperature, slowing microbial growth and enzyme action. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two reasons why food preservation is important.", answerKey: "Any two: prevents spoilage/waste; ensures food security; prevents food poisoning; allows storage/transport; saves money/supports trade. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Describe four methods of food preservation, explaining the biological principle of each, and discuss the importance of preserving food using local examples.", answerKey: "Any four methods with principle: drying (remove water), salting (osmosis removes water), smoking (dry + antimicrobial), refrigeration/freezing (cold slows/stops growth), heating/canning (kill microbes/seal) (up to 8). Importance: prevents waste, food security in off-season, prevents food poisoning, storage/transport, income (up to 7). Reward local examples (dried/smoked/salted fish, parboiled rice).", marks: 15 },
      ],
    },
  ],
};
