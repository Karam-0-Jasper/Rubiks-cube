import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Biology, Grade 12,
// Semester Two, Period VI: Ecology (Natural Resources and Pollution) and Health.
// Topics follow the CONTENTS items: (1) natural resources — renewable and
// non-renewable, their importance and conservation; (2) pollution — definition,
// causes (air, water, land, thermal, noise), effects and control; (3) vaccination
// and immunization with personal and community hygiene; (4) water sources,
// contamination and purification, sewage and refuse disposal; (5) drug abuse — its
// effects and prevention.
export const biologyG12P6: PeriodContent = {
  grade: 12,
  number: 6,
  title: "Ecology (Natural Resources and Pollution) and Health",
  summary:
    "Period VI of the MoE Grade 12 Biology syllabus. Learners study natural resources and how to conserve them; the meaning, causes, effects and control of pollution; how vaccination and immunisation, together with personal and community hygiene, prevent disease; the treatment of water, sewage and refuse; and the dangers of drug abuse and how to prevent it.",
  topics: [
    // source: LibreTexts — Introductory Biology (CK-12) 6.27 Renewable and Nonrenewable Resources (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/06%3A_Ecology/6.27%3A_Renewable_and_Nonrenewable_Resources)
    {
      slug: "natural-resources-and-their-conservation",
      title: "Natural Resources and Their Conservation",
      objective:
        "By the end of the topic, learners should be able to define natural resources, distinguish renewable and non-renewable resources with examples, and explain methods of conserving them.",
      estimatedMinutes: 90,
      notes: `## What are natural resources?

- **Natural resources** are useful materials and energy that come from nature, e.g. water, soil, forests, minerals, wildlife, sunlight and fuels.
- They provide food, energy, building materials and the raw materials for industry — they contribute to the **wealth of a nation**.

## Renewable and non-renewable resources

| Type | Meaning | Examples |
| --- | --- | --- |
| **Renewable** | can be replaced by natural processes as fast as they are used | sunlight, wind, water, forests, wildlife, biomass |
| **Non-renewable** | exist in **fixed amounts** and can be **used up** | coal, petroleum (oil), natural gas, metal ores |

- **Living resources** (forests, fish) are renewable because they reproduce — but they can be **destroyed by overuse** (overfishing, deforestation).
- **Fossil fuels** (coal, oil, gas) took millions of years to form and cannot be replaced in our lifetime — they are non-renewable.

## The flow of renewable resources

- Some renewables are **flow resources** — always available as they flow through nature: **sunlight, wind, moving water (hydro), tides**. They are not "used up".

## Why conserve resources?

- Non-renewable resources are **limited** and will run out if wasted.
- Renewable resources can be ruined by **overexploitation** and pollution.
- **Sustainable use** means using resources to meet today's needs **without destroying them for future generations**.

## Methods of conservation

- Follow the **three R's: Reduce, Reuse, Recycle** (e.g. recycle metals and paper).
- **Reduce waste** and use energy-efficiently.
- Switch to **renewable energy** (solar, wind, hydro) where possible.
- **Protect forests and wildlife** — replant trees (afforestation), control hunting and fishing, create reserves.
- **Protect soil and water** from erosion and pollution.

## Common errors and misconceptions

- **"All natural resources can be renewed"** — coal, oil and gas are **non-renewable**.
- **"Renewable resources can never run out"** — living renewables (forests, fish) can be destroyed by **overuse**.
- **"Conservation means never using resources"** — it means **wise, sustainable** use, not no use.
- **"Recycling is the only way to conserve"** — reducing and reusing also conserve resources.`,
      workedExample: `**Task.** (a) Classify each as renewable or non-renewable: sunlight, coal, forest, natural gas. (b) Explain why a forest is renewable but can still be lost. (c) State two ways a community can conserve resources.

**Solution**

(a) Classification:
- **Sunlight** → **renewable** (a flow resource, always available).
- **Coal** → **non-renewable** (a fossil fuel in fixed amount).
- **Forest** → **renewable** (trees regrow/reproduce).
- **Natural gas** → **non-renewable** (a fossil fuel).

(b) A forest is **renewable** because trees **reproduce and regrow**, replacing those used. However, if trees are cut down **faster than they regrow** (deforestation) or the land is cleared, the forest is **destroyed by overexploitation** — so a renewable resource can still be lost if used unsustainably.

(c) Two ways to conserve (any two): **reduce, reuse and recycle** materials (e.g. recycle metal and paper); **replant trees (afforestation)** and protect wildlife; **use renewable energy** like solar; **prevent soil and water pollution/erosion**.

**Answer:** (a) sunlight and forest renewable; coal and gas non-renewable; (b) trees regrow, but cutting faster than regrowth destroys the forest; (c) e.g. recycle materials and replant trees.`,
      quiz: [
        { prompt: "Natural resources are", options: ["useful materials and energy from nature", "man-made machines", "only money", "waste products"], correctIndex: 0, explanation: "They come from nature and are useful." },
        { prompt: "A renewable resource is one that", options: ["can be replaced as fast as it is used", "exists in a fixed amount", "can never be used", "is always man-made"], correctIndex: 0, explanation: "Renewables are replenished naturally." },
        { prompt: "A non-renewable resource is", options: ["coal", "sunlight", "wind", "flowing water"], correctIndex: 0, explanation: "Coal is a fossil fuel in fixed supply." },
        { prompt: "Which is a renewable resource?", options: ["forest", "petroleum", "natural gas", "iron ore"], correctIndex: 0, explanation: "Trees regrow, so forests are renewable." },
        { prompt: "Fossil fuels include", options: ["coal, oil and natural gas", "wind and sunlight", "trees only", "water only"], correctIndex: 0, explanation: "These formed over millions of years." },
        { prompt: "Living resources such as fish are renewable but can be", options: ["destroyed by overuse", "never harmed", "created by factories", "made of metal"], correctIndex: 0, explanation: "Overfishing can wipe them out." },
        { prompt: "A 'flow resource' that is always available is", options: ["sunlight", "coal", "gold", "oil"], correctIndex: 0, explanation: "Sunlight flows continuously." },
        { prompt: "Sustainable use means", options: ["meeting today's needs without harming the future", "using everything now", "never using resources", "only recycling"], correctIndex: 0, explanation: "It balances present and future needs." },
        { prompt: "The three R's of conservation are", options: ["reduce, reuse, recycle", "run, rest, relax", "read, write, repeat", "reduce, remove, replace"], correctIndex: 0, explanation: "Reduce, reuse and recycle conserve resources." },
        { prompt: "Recycling metals helps by", options: ["reducing the need to mine new ore", "using more fuel", "making more waste", "cutting more trees"], correctIndex: 0, explanation: "Recycling saves raw materials." },
        { prompt: "Planting new trees is called", options: ["afforestation", "deforestation", "erosion", "pollution"], correctIndex: 0, explanation: "Afforestation replaces lost forest." },
        { prompt: "Which energy source is renewable?", options: ["solar (sun) energy", "coal", "petrol", "diesel"], correctIndex: 0, explanation: "Solar energy is renewable." },
        { prompt: "Overexploitation of a renewable resource can", options: ["ruin it despite it being renewable", "make it non-renewable forever by law", "have no effect", "increase it"], correctIndex: 0, explanation: "Overuse destroys renewables." },
        { prompt: "Natural resources contribute to a nation's", options: ["wealth", "population only", "language", "climate only"], correctIndex: 0, explanation: "They provide food, energy and materials." },
        { prompt: "Which is a non-renewable energy resource?", options: ["natural gas", "wind", "moving water", "sunlight"], correctIndex: 0, explanation: "Natural gas is a fossil fuel." },
        { prompt: "Deforestation means", options: ["removing forests faster than they regrow", "planting trees", "recycling paper", "cleaning water"], correctIndex: 0, explanation: "It destroys the forest resource." },
        { prompt: "Conservation of resources means", options: ["wise, sustainable use", "never using them", "wasting them", "burning them"], correctIndex: 0, explanation: "Use resources wisely." },
        { prompt: "Reusing a container instead of throwing it away is an example of", options: ["reuse", "reduce", "recycle", "pollution"], correctIndex: 0, explanation: "Using again is reuse." },
        { prompt: "Creating a wildlife reserve helps to conserve", options: ["wildlife", "coal", "petrol", "metals"], correctIndex: 0, explanation: "Reserves protect animals and plants." },
        { prompt: "Which pair are both non-renewable?", options: ["coal and petroleum", "sunlight and wind", "forest and fish", "water and air"], correctIndex: 0, explanation: "Both are fossil fuels." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a natural resource and give one renewable and one non-renewable example.", answerKey: "Natural resource: a useful material or energy source from nature. Renewable example: sunlight/wind/forest/water. Non-renewable example: coal/oil/natural gas/metal ore. 2 for definition, 1 each example.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these is a non-renewable resource?", options: ["Petroleum", "Sunlight", "Wind", "Forest"], correctIndex: 0, answerKey: "Petroleum is a fossil fuel. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a renewable resource such as a forest can still become exhausted.", answerKey: "Forests are renewable because trees regrow, but if they are cut down faster than they can regrow (deforestation/overexploitation) or cleared, the resource is destroyed. Award for regrowth idea + overuse.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State the three R's of conservation and give an example of each.", answerKey: "Reduce (use less, e.g. less fuel); Reuse (use again, e.g. refill a bottle); Recycle (e.g. recycle metal/paper). 1 mark each R+example.", marks: 3 },
        { type: "ESSAY", prompt: "Distinguish between renewable and non-renewable resources and discuss methods of conserving natural resources.", answerKey: "Renewable: replaced by nature (sunlight, wind, water, forests, wildlife); non-renewable: fixed amount, used up (coal, oil, gas, ores); living renewables can be overused (up to 6). Conservation: reduce/reuse/recycle, energy efficiency, renewable energy, afforestation, protect wildlife/soil/water, sustainable use for future generations (up to 9).", marks: 15 },
      ],
    },
    // source: LibreTexts — Introductory Biology (CK-12) 6.29 Air Pollution; Environmental Science (Ha & Schleiger) Pollution (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/06:_Ecology/6.29:_Air_Pollution)
    {
      slug: "pollution-and-its-control",
      title: "Pollution and Its Control",
      objective:
        "By the end of the topic, learners should be able to define pollution, describe the types and causes of pollution, state their effects and explain methods of controlling pollution.",
      estimatedMinutes: 100,
      notes: `## What is pollution?

- **Pollution** is the release of harmful substances (chemicals, particles, waste, heat or noise), called **pollutants**, into the environment, damaging living things.

## Types and causes of pollution

| Type | Main causes | Examples of pollutants |
| --- | --- | --- |
| **Air pollution** | burning fossil fuels (vehicles, power plants, factories), bush burning | carbon monoxide, smoke/soot, sulfur dioxide, carbon dioxide |
| **Water pollution** | sewage, factory waste, oil spills, fertilisers/pesticides washed off farms | germs, chemicals, oil, nitrates |
| **Land (soil) pollution** | dumping refuse, plastics, chemicals, oil | plastics, heavy metals, agro-chemicals |
| **Thermal (heat) pollution** | hot water from power stations released into rivers | raised water temperature |
| **Noise pollution** | traffic, machinery, loud music, industry | loud, unwanted sound |

## Effects of pollution

- **Air pollution** → breathing and heart diseases; smog; **acid rain** (from sulfur dioxide); adds to global warming (from carbon dioxide).
- **Water pollution** → kills fish and water life; spreads waterborne diseases; **thermal** pollution lowers dissolved oxygen so aquatic organisms suffer.
- **Land pollution** → harms soil, crops and wildlife; **non-biodegradable** plastics stay for years.
- **Noise pollution** → stress, poor sleep, hearing damage.

## Controlling pollution

- **Air:** use cleaner fuels and renewable energy; fit filters/catalytic converters; reduce burning; plant trees.
- **Water:** treat **sewage** before release; control factory waste and oil spills; use fertilisers/pesticides carefully.
- **Land:** proper **refuse disposal**, recycling; reduce plastics; avoid dumping chemicals.
- **Thermal:** cool water before returning it to rivers.
- **Noise:** limit and muffle machinery; enforce noise rules; use quieter equipment.
- **Laws and education** help everyone reduce pollution.

## Common errors and misconceptions

- **"Pollution is only smoke and dirt"** — it also includes **heat (thermal)** and **noise**.
- **"Carbon dioxide is not a pollutant"** — excess CO₂ adds to **global warming**.
- **"Plastics rot away quickly"** — plastics are **non-biodegradable** and last for years.
- **"Thermal pollution warms water harmlessly"** — warm water holds **less oxygen**, harming fish.`,
      workedExample: `**Task.** A factory burns coal and pours hot waste water into a river. (a) Name the two types of pollution it causes. (b) State one effect of each on living things. (c) Suggest one way to control each type.

**Solution**

(a) Two types of pollution:
- Burning coal releases smoke and gases → **air pollution**.
- Pouring hot water into the river → **thermal (heat) pollution** (also possibly water pollution from chemicals).

(b) Effects:
- **Air pollution:** the smoke and sulfur dioxide cause **breathing/lung diseases** and **acid rain**; carbon dioxide adds to global warming.
- **Thermal pollution:** warmer river water holds **less dissolved oxygen**, so **fish and water animals suffer or die**.

(c) Control:
- **Air:** fit **filters** or use **cleaner/renewable energy** and reduce coal burning.
- **Thermal:** **cool the waste water** before returning it to the river.

**Answer:** (a) air pollution and thermal pollution; (b) air causes lung disease/acid rain, thermal lowers oxygen and harms fish; (c) filters/cleaner fuel for air, and cooling the water before release.`,
      quiz: [
        { prompt: "Pollution is the release of", options: ["harmful substances into the environment", "clean water only", "useful nutrients", "oxygen only"], correctIndex: 0, explanation: "Pollutants harm living things." },
        { prompt: "A substance that causes pollution is a", options: ["pollutant", "nutrient", "vitamin", "resource"], correctIndex: 0, explanation: "Pollutants are harmful materials." },
        { prompt: "The main cause of air pollution is", options: ["burning fossil fuels", "planting trees", "drinking water", "recycling"], correctIndex: 0, explanation: "Vehicles and factories burn fuels." },
        { prompt: "Acid rain is caused mainly by", options: ["sulfur dioxide in the air", "oxygen", "water vapour", "nitrogen gas"], correctIndex: 0, explanation: "Sulfur dioxide forms acid rain." },
        { prompt: "Water pollution can be caused by", options: ["sewage and factory waste", "sunlight", "wind", "clean rain"], correctIndex: 0, explanation: "Waste contaminates water." },
        { prompt: "Thermal pollution is caused by", options: ["hot water released into rivers", "loud music", "plastic bags", "smoke"], correctIndex: 0, explanation: "Heat is the pollutant." },
        { prompt: "Warm water from thermal pollution holds", options: ["less dissolved oxygen", "more oxygen", "no water", "more fish"], correctIndex: 0, explanation: "Low oxygen harms aquatic life." },
        { prompt: "Noise pollution can cause", options: ["stress and hearing damage", "acid rain", "oil spills", "soil erosion"], correctIndex: 0, explanation: "Loud noise harms health." },
        { prompt: "Plastics are a serious land pollutant because they are", options: ["non-biodegradable", "quickly rotted", "eaten by soil", "good fertiliser"], correctIndex: 0, explanation: "They persist for years." },
        { prompt: "Excess carbon dioxide contributes to", options: ["global warming", "acid rain only", "noise", "clean air"], correctIndex: 0, explanation: "CO2 is a greenhouse gas." },
        { prompt: "Air pollution in humans mainly causes", options: ["breathing and heart diseases", "broken bones", "better lungs", "goitre"], correctIndex: 0, explanation: "It harms the respiratory and heart systems." },
        { prompt: "One way to control air pollution is to", options: ["use cleaner or renewable energy", "burn more coal", "cut all trees", "dump waste in rivers"], correctIndex: 0, explanation: "Cleaner energy reduces emissions." },
        { prompt: "One way to control water pollution is to", options: ["treat sewage before release", "pour oil in rivers", "add fertiliser to rivers", "dump plastics"], correctIndex: 0, explanation: "Treated sewage protects water." },
        { prompt: "Fertilisers and pesticides washed from farms cause", options: ["water pollution", "noise pollution", "thermal pollution", "no pollution"], correctIndex: 0, explanation: "Run-off pollutes water." },
        { prompt: "To reduce land pollution we should", options: ["dispose of refuse properly and recycle", "dump more plastic", "burn everything", "pour chemicals on soil"], correctIndex: 0, explanation: "Proper disposal and recycling help." },
        { prompt: "Planting trees helps reduce", options: ["air pollution", "noise only", "thermal pollution only", "nothing"], correctIndex: 0, explanation: "Trees absorb carbon dioxide." },
        { prompt: "Which is a type of pollution?", options: ["noise pollution", "photosynthesis", "respiration", "digestion"], correctIndex: 0, explanation: "Unwanted sound is a pollutant." },
        { prompt: "Thermal pollution can be controlled by", options: ["cooling waste water before release", "adding more heat", "making it louder", "adding plastic"], correctIndex: 0, explanation: "Cooling protects river life." },
        { prompt: "Oil spills mainly cause", options: ["water pollution", "air pollution only", "noise pollution", "thermal pollution"], correctIndex: 0, explanation: "Oil contaminates water and kills life." },
        { prompt: "Laws and public education help to", options: ["reduce pollution", "increase pollution", "burn more fuel", "waste resources"], correctIndex: 0, explanation: "They encourage cleaner behaviour." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define pollution and name three types of pollution.", answerKey: "Pollution: the release of harmful substances (pollutants) into the environment that damage living things. Three types (any three): air, water, land/soil, thermal, noise. 2 for definition, 1 each type (max 3).", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which type of pollution is caused by releasing hot water into a river?", options: ["Thermal pollution", "Noise pollution", "Air pollution", "Land pollution"], correctIndex: 0, answerKey: "Heat causes thermal pollution. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State one cause and one effect of air pollution.", answerKey: "Cause: burning fossil fuels (vehicles, factories, power plants). Effect: breathing/heart disease, acid rain, or global warming. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "Give two methods of controlling water pollution.", answerKey: "Any two: treat sewage before release; control factory waste/oil spills; use fertilisers and pesticides carefully; recycle. 2 marks each.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the causes, effects and control of the main types of pollution.", answerKey: "Types/causes: air (burning fuels), water (sewage/chemicals/oil), land (refuse/plastics), thermal (hot water), noise (traffic/machinery) (up to 5). Effects: lung/heart disease, acid rain, global warming, dead fish, disease, low oxygen, persistent plastics, stress/hearing loss (up to 5). Control: cleaner energy/filters, sewage treatment, proper refuse disposal/recycling, cool water, limit noise, laws and education (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Human Biology (Wakim & Grewal) 20.5 Adaptive Immune System; Microbiology (Boundless) 12.1B Vaccination (https://bio.libretexts.org/Bookshelves/Human_Biology/Human_Biology_(Wakim_and_Grewal)/20%3A_Immune_System/20.5%3A_Adaptive_Immune_System)
    {
      slug: "vaccination-immunisation-and-hygiene",
      title: "Vaccination, Immunisation and Hygiene",
      objective:
        "By the end of the topic, learners should be able to explain how vaccination gives immunity, distinguish active and passive immunity, and describe personal and community hygiene measures that prevent disease.",
      estimatedMinutes: 90,
      notes: `## Immunity and antibodies

- The body defends itself against germs (pathogens) using **white blood cells**.
- **B-cells (lymphocytes)** make **antibodies** that recognise and destroy a particular pathogen.
- After an infection, **memory cells** remain, so the body responds fast next time — this is **immunity**.

## Vaccination and immunisation

- **Vaccination (immunisation)** gives protection **before** a person catches a disease.
- A **vaccine** contains a **weakened, dead or harmless part** of a pathogen.
- The vaccine stimulates the immune system to make **antibodies and memory cells** **without causing the disease**.
- If the real pathogen later enters, the body destroys it quickly — the person is **immune**.

## Active and passive immunity

| Type | How it is gained | How long it lasts |
| --- | --- | --- |
| **Active immunity** | the body **makes its own antibodies** (after infection or a **vaccine**) | long-lasting (often years/life) |
| **Passive immunity** | **ready-made antibodies** are received (from the mother across the placenta, in breast milk, or by injection) | short-lived (weeks/months) |

- Vaccines have controlled or wiped out diseases such as smallpox, polio, measles and tetanus.

## Personal hygiene

Keeping the body and its surroundings clean to stay healthy:

- Wash hands with soap **before eating** and **after using the toilet**.
- Bathe regularly; brush teeth; keep nails short and clean.
- Wash and cook food properly; drink safe water.
- Cover coughs and sneezes; do not share personal items.

## Community (public) hygiene

Keeping the whole community healthy:

- Safe **water supply** and proper **sewage and refuse disposal**.
- Clean markets, streets and drains; control disease vectors (mosquitoes, flies).
- **Immunisation programmes** and health education for all.

## Common errors and misconceptions

- **"A vaccine gives you the disease"** — vaccines use **weakened/dead** germs and do **not** cause the disease.
- **"Immunity from a vaccine is instant and always for life"** — it takes time to develop; some vaccines need boosters.
- **"Passive immunity lasts a long time"** — ready-made antibodies are **short-lived**.
- **"Hygiene is only a personal matter"** — **community** hygiene (clean water, sewage disposal) protects everyone.`,
      workedExample: `**Task.** A baby is vaccinated against measles and also receives antibodies in the mother's breast milk. (a) Which of these gives active immunity and which gives passive immunity? (b) Explain how the vaccine protects the baby. (c) State two personal hygiene habits that prevent disease.

**Solution**

(a) Immunity types:
- The **vaccine** gives **active immunity** — the baby's own body makes antibodies and memory cells.
- The **antibodies in breast milk** give **passive immunity** — ready-made antibodies are received, not made by the baby.

(b) The measles **vaccine** contains a **weakened (or dead) form** of the measles pathogen. It stimulates the baby's immune system to make **antibodies and memory cells** against measles **without causing the disease**. If the real measles virus later enters, the memory cells make antibodies quickly and destroy it, so the baby does not fall ill — the baby is **immune**.

(c) Two personal hygiene habits (any two): **wash hands with soap** before eating and after the toilet; **bathe regularly** and brush teeth; **cook food well** and drink safe water; cover coughs and sneezes.

**Answer:** (a) vaccine = active immunity, breast-milk antibodies = passive immunity; (b) the weakened vaccine makes the baby produce antibodies and memory cells so measles is destroyed quickly later; (c) e.g. hand-washing and eating well-cooked food.`,
      quiz: [
        { prompt: "Antibodies are made by", options: ["B-cells (white blood cells)", "red blood cells", "platelets", "nerve cells"], correctIndex: 0, explanation: "B-lymphocytes produce antibodies." },
        { prompt: "Being protected against a disease is called", options: ["immunity", "infection", "pollution", "digestion"], correctIndex: 0, explanation: "Immunity is protection from disease." },
        { prompt: "A vaccine contains a", options: ["weakened, dead or harmless part of a pathogen", "strong live germ", "antibody only", "vitamin"], correctIndex: 0, explanation: "Vaccines are safe forms of the pathogen." },
        { prompt: "Vaccination stimulates the body to make", options: ["antibodies and memory cells", "more germs", "sweat", "urine"], correctIndex: 0, explanation: "It prepares the immune system." },
        { prompt: "A vaccine works", options: ["before a person catches the disease", "only after the disease", "by curing all infections", "by adding germs to food"], correctIndex: 0, explanation: "It gives protection in advance." },
        { prompt: "Active immunity is when the body", options: ["makes its own antibodies", "receives ready-made antibodies", "has no antibodies", "makes urine"], correctIndex: 0, explanation: "The body produces its own antibodies." },
        { prompt: "Passive immunity is gained by", options: ["receiving ready-made antibodies", "making antibodies after a vaccine", "eating vitamins", "exercise"], correctIndex: 0, explanation: "Antibodies are received, not made." },
        { prompt: "A baby getting antibodies in breast milk shows", options: ["passive immunity", "active immunity", "vaccination", "no immunity"], correctIndex: 0, explanation: "Ready-made antibodies pass to the baby." },
        { prompt: "Active immunity generally lasts", options: ["a long time", "a few hours", "no time", "one minute"], correctIndex: 0, explanation: "Memory cells give lasting protection." },
        { prompt: "Passive immunity is", options: ["short-lived", "always lifelong", "never useful", "the same as vaccination"], correctIndex: 0, explanation: "Received antibodies do not last." },
        { prompt: "Memory cells allow the body to", options: ["respond quickly to a returning pathogen", "digest food", "carry oxygen", "make bile"], correctIndex: 0, explanation: "They speed the second response." },
        { prompt: "A disease controlled by vaccination is", options: ["polio", "a broken leg", "hunger", "sunburn"], correctIndex: 0, explanation: "Polio is prevented by vaccine." },
        { prompt: "Washing hands with soap prevents disease especially", options: ["before eating and after the toilet", "only once a year", "after sleeping only", "never"], correctIndex: 0, explanation: "It removes germs before they spread." },
        { prompt: "A personal hygiene habit is", options: ["bathing regularly and brushing teeth", "dumping refuse in the street", "sharing a toothbrush", "drinking dirty water"], correctIndex: 0, explanation: "Personal cleanliness prevents disease." },
        { prompt: "Community hygiene includes", options: ["safe water and sewage disposal", "sharing needles", "leaving rubbish uncollected", "polluting rivers"], correctIndex: 0, explanation: "Public health protects everyone." },
        { prompt: "Controlling mosquitoes and flies is part of", options: ["community hygiene", "vaccination", "digestion", "respiration"], correctIndex: 0, explanation: "It stops vectors spreading disease." },
        { prompt: "A vaccine does NOT", options: ["give you the full disease", "cause antibody production", "create memory cells", "protect against a pathogen"], correctIndex: 0, explanation: "Vaccines do not cause the disease." },
        { prompt: "Covering coughs and sneezes helps to", options: ["stop germs spreading to others", "cure the cold", "make antibodies", "clean water"], correctIndex: 0, explanation: "It reduces droplet spread." },
        { prompt: "Immunisation programmes are important because they", options: ["protect the whole community from disease", "cause epidemics", "spread germs", "waste medicine"], correctIndex: 0, explanation: "Wide vaccination prevents outbreaks." },
        { prompt: "The purpose of a booster dose is to", options: ["strengthen and extend immunity", "give the disease", "remove antibodies", "cause allergy"], correctIndex: 0, explanation: "Boosters top up protection." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how a vaccine gives a person immunity.", answerKey: "A vaccine contains a weakened/dead or harmless part of a pathogen; it stimulates the immune system to make antibodies and memory cells without causing the disease; if the real pathogen enters later, memory cells make antibodies quickly to destroy it. Award for weakened pathogen + antibodies/memory + fast later response.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which describes passive immunity?", options: ["Receiving ready-made antibodies", "The body making its own antibodies", "Getting a vaccine", "Having no antibodies"], correctIndex: 0, answerKey: "Passive immunity uses ready-made antibodies. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between active and passive immunity, with an example of each.", answerKey: "Active: body makes its own antibodies (after infection or vaccine), long-lasting. Passive: ready-made antibodies received (from mother/placenta/breast milk or injection), short-lived. 2 marks each.", marks: 4 },
        { type: "SHORT_ANSWER", prompt: "State two personal and one community hygiene measure that prevent disease.", answerKey: "Personal (any two): hand-washing with soap, bathing, brushing teeth, cooking food well, drinking safe water. Community (one): safe water supply, sewage/refuse disposal, vector control, immunisation programmes. 1 mark each.", marks: 3 },
        { type: "ESSAY", prompt: "Explain the importance of immunisation and hygiene in preventing disease in a community.", answerKey: "Immunisation: vaccines make antibodies and memory cells, giving active immunity; wide programmes control diseases (polio, measles, tetanus); passive immunity (breast milk) protects babies (up to 6). Personal hygiene: hand-washing, bathing, safe food and water, covering coughs (up to 4). Community hygiene: safe water, sewage and refuse disposal, vector control, health education protecting everyone (up to 5).", marks: 15 },
      ],
    },
    // source: LibreTexts — Environmental Science (Ha & Schleiger) 6.2.1.02 Water Treatment; Water Pollutants and Their Sources (https://bio.libretexts.org/Bookshelves/Ecology/Environmental_Science_(Ha_and_Schleiger)/06:_Environmental_Impacts/6.02:_Pollution/6.2.01:_Water_Pollution/6.2.1.02:_Water_Treatment)
    {
      slug: "water-sewage-and-refuse-disposal",
      title: "Water, Sewage and Refuse Disposal",
      objective:
        "By the end of the topic, learners should be able to state sources of water and how it becomes contaminated, describe methods of purifying water, and explain the disposal of sewage and refuse.",
      estimatedMinutes: 90,
      notes: `## Sources of water

- **Rain, rivers, streams, lakes, springs, wells and boreholes** supply water for drinking and daily use.
- Not all water is safe — it may carry germs and chemicals.

## How water becomes contaminated

- **Human and animal faeces** (from poor sewage disposal) add **germs** — the main cause of waterborne disease.
- **Factory and farm waste** add chemicals, fertilisers and pesticides.
- Rubbish, oil and dirt also pollute water.
- Waterborne diseases include **cholera, typhoid, dysentery** and **diarrhoea**.

## Purifying water

To make water safe to drink:

| Method | How it works |
| --- | --- |
| **Boiling** | heat kills germs (bacteria, protozoa) |
| **Filtration** | passing water through sand/cloth removes solid particles and some germs |
| **Chlorination** | adding chlorine (or bleach) kills microbes |
| **Sedimentation** | letting dirt settle out before use |
| **Solar disinfection** | sunlight (UV) in clear bottles kills germs |

- Large water treatment plants combine **screening, settling, filtration and disinfection (chlorine)** to supply safe water.

## Sewage and its disposal

- **Sewage** is waste water from homes containing human waste, plus some industrial waste.
- Untreated sewage spreads disease and pollutes water, so it must be **treated** or safely contained.
- Methods: **pit latrines**, **septic tanks**, and **sewage treatment plants**.
- At a treatment plant sewage is **screened**, solids **settle** (primary), **bacteria break down** the organic matter (secondary), and it is **disinfected** before release.
- Treated sewage/sludge can be used as **fertiliser** or to make biogas — economic uses.

## Refuse (solid waste) disposal

- **Refuse** is solid rubbish (food waste, paper, plastics, metal).
- Methods: **collection and sanitary landfill**, **composting** of food/plant waste, **recycling** of paper/metal/glass, and **controlled burning (incineration)**.
- Poor refuse disposal breeds flies, rats and mosquitoes and spreads disease.

## Common errors and misconceptions

- **"All clear water is safe to drink"** — clear water can still carry **invisible germs**; it must be treated.
- **"Boiling removes chemicals"** — boiling kills germs but does not remove chemical pollutants.
- **"Sewage can be dumped straight into rivers"** — untreated sewage spreads disease and must be treated first.
- **"Burning all rubbish is best"** — burning plastics releases toxic fumes; recycling and composting are better for much refuse.`,
      workedExample: `**Task.** A village takes drinking water from a stream near where people use open latrines. (a) How is the stream water likely contaminated and what diseases could result? (b) Give two simple ways the villagers could make the water safe. (c) Suggest a better way to dispose of human waste.

**Solution**

(a) Waste from the **open latrines** (human faeces) washes into the stream, adding **disease-causing germs**. Drinking it could cause **waterborne diseases** such as **cholera, typhoid, dysentery or diarrhoea**.

(b) Two simple ways to make the water safe (any two):
- **Boil** the water to kill germs.
- **Filter** it through clean cloth/sand to remove particles.
- **Add chlorine (or a little bleach)** to kill microbes; or use **solar disinfection** in clear bottles.

(c) A better way to dispose of human waste: use proper **pit latrines placed away from and downhill of water sources**, or **septic tanks/sewage treatment**, so waste does not reach the stream.

**Answer:** (a) faeces from latrines add germs, risking cholera/typhoid/dysentery; (b) e.g. boil and chlorinate the water; (c) use proper covered latrines or septic tanks away from the water source.`,
      quiz: [
        { prompt: "A source of water for a community is", options: ["a well or borehole", "the sky only", "a battery", "a wire"], correctIndex: 0, explanation: "Wells, rivers and rain supply water." },
        { prompt: "The main cause of waterborne disease is water contaminated with", options: ["human and animal faeces", "clean rain", "oxygen", "sunlight"], correctIndex: 0, explanation: "Faecal germs cause most waterborne disease." },
        { prompt: "A waterborne disease is", options: ["cholera", "a broken bone", "sunburn", "goitre"], correctIndex: 0, explanation: "Cholera spreads through dirty water." },
        { prompt: "Boiling water makes it safe by", options: ["killing germs", "removing all chemicals", "adding minerals", "cooling it"], correctIndex: 0, explanation: "Heat destroys microbes." },
        { prompt: "Adding chlorine to water is called", options: ["chlorination", "filtration", "boiling", "sedimentation"], correctIndex: 0, explanation: "Chlorine kills microbes." },
        { prompt: "Passing water through sand or cloth is", options: ["filtration", "chlorination", "boiling", "distillation"], correctIndex: 0, explanation: "Filtration removes particles." },
        { prompt: "Letting dirt settle to the bottom is", options: ["sedimentation", "chlorination", "boiling", "recycling"], correctIndex: 0, explanation: "Sedimentation removes suspended solids." },
        { prompt: "Sewage is", options: ["waste water containing human waste", "clean drinking water", "solid metal", "rainwater only"], correctIndex: 0, explanation: "Sewage is dirty waste water." },
        { prompt: "Untreated sewage in rivers", options: ["spreads disease and pollutes water", "makes water safe", "adds oxygen", "has no effect"], correctIndex: 0, explanation: "It carries dangerous germs." },
        { prompt: "A method of disposing of human waste is a", options: ["pit latrine or septic tank", "recycling bin", "water filter", "compost of paper"], correctIndex: 0, explanation: "Latrines and septic tanks contain waste." },
        { prompt: "At a sewage treatment plant, bacteria are used to", options: ["break down organic matter", "add germs", "cool the water", "make plastics"], correctIndex: 0, explanation: "Secondary treatment uses bacteria." },
        { prompt: "Treated sewage sludge can be used as", options: ["fertiliser", "drinking water", "petrol", "metal"], correctIndex: 0, explanation: "It is an economic use of sewage." },
        { prompt: "Refuse means", options: ["solid rubbish", "clean water", "fresh air", "sunlight"], correctIndex: 0, explanation: "Refuse is solid waste." },
        { prompt: "Composting is suitable for", options: ["food and plant waste", "plastics only", "metal only", "glass only"], correctIndex: 0, explanation: "Organic waste composts." },
        { prompt: "Poor refuse disposal", options: ["breeds flies, rats and mosquitoes", "prevents all disease", "cleans the air", "purifies water"], correctIndex: 0, explanation: "Rubbish attracts pests." },
        { prompt: "Recycling is best for", options: ["paper, metal and glass", "human faeces", "dirty water", "smoke"], correctIndex: 0, explanation: "These materials can be reused." },
        { prompt: "Clear-looking water", options: ["may still contain germs and needs treating", "is always safe", "never has germs", "is pure by law"], correctIndex: 0, explanation: "Germs can be invisible." },
        { prompt: "Solar disinfection uses", options: ["sunlight to kill germs", "chlorine only", "sand only", "salt"], correctIndex: 0, explanation: "UV light kills microbes." },
        { prompt: "A large water treatment plant uses screening, settling, filtration and", options: ["disinfection with chlorine", "adding sewage", "adding oil", "heating to boiling only"], correctIndex: 0, explanation: "Disinfection finishes the process." },
        { prompt: "Sanitary landfill is a method of disposing of", options: ["solid refuse", "drinking water", "clean air", "sunlight"], correctIndex: 0, explanation: "Refuse is buried safely." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two sources of water and two ways water can become contaminated.", answerKey: "Sources (any two): rain, rivers, streams, lakes, springs, wells/boreholes. Contamination (any two): human/animal faeces, factory waste, farm fertilisers/pesticides, rubbish/oil. 1 mark each.", marks: 4 },
        { type: "MULTIPLE_CHOICE", prompt: "Which method of purifying water works by killing germs with a chemical?", options: ["Chlorination", "Filtration", "Sedimentation", "Boiling"], correctIndex: 0, answerKey: "Chlorination adds chlorine to kill microbes. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe three ways of making water safe to drink.", answerKey: "Any three: boiling (kills germs); filtration (removes particles/some germs); chlorination (kills microbes); sedimentation (settling); solar disinfection (UV). 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Why must sewage be treated before it is released, and give one economic use of treated sewage.", answerKey: "Untreated sewage carries disease germs and pollutes water/spreads waterborne disease, so it must be treated. Economic use: fertiliser/sludge or biogas. 3 for reason, 1 for use.", marks: 4 },
        { type: "ESSAY", prompt: "Explain how water is purified for drinking, and how sewage and refuse should be safely disposed of in a community.", answerKey: "Water purification: sedimentation, filtration, boiling, chlorination, solar disinfection; treatment plant screening/settling/filtration/disinfection (up to 6). Sewage: pit latrines, septic tanks, treatment plant (screen, settle, bacterial breakdown, disinfect), reuse as fertiliser (up to 5). Refuse: collection and sanitary landfill, composting, recycling, controlled burning; poor disposal breeds pests (up to 4).", marks: 15 },
      ],
    },
    // source: LibreTexts — Introductory Biology (CK-12) 13.23 Drugs and the Nervous System (https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Introductory_Biology_(CK-12)/13:_Human_Biology/13.23:_Drugs_and_the_Nervous_System)
    {
      slug: "drug-abuse-and-its-prevention",
      title: "Drug Abuse and Its Prevention",
      objective:
        "By the end of the topic, learners should be able to define drug abuse, describe how psychoactive drugs affect the body, state the dangers of alcohol, tobacco and other drugs, and explain how to prevent drug abuse.",
      estimatedMinutes: 90,
      notes: `## Drugs and drug abuse

- A **drug** is a substance that changes how the body or mind works.
- **Drug abuse** is using a drug **without medical advice** and **for reasons it was not intended for** — e.g. to feel "high".
- **Psychoactive drugs** (alcohol, tobacco/nicotine, caffeine, cannabis, cocaine, heroin) act on the **brain and nervous system**, changing the transmission of nerve impulses.

## Types of commonly abused substances

| Type | Effect | Examples |
| --- | --- | --- |
| **Depressants** | slow down the nervous system | **alcohol**, sedatives |
| **Stimulants** | speed up the nervous system | **caffeine**, **nicotine**, cocaine |
| **Narcotics / opioids** | dull pain, cause drowsiness | heroin, morphine (misused) |
| **Hallucinogens** | distort the senses | cannabis, LSD |

## Addiction

- Repeated abuse can lead to **addiction (dependence)** — the person **cannot stop** using the drug.
- It develops through **altered communication between nerve cells** and activation of the brain's **pleasure/reward** system.

## Dangers of drug abuse

- **Alcohol** — a depressant; slows reactions and judgement; long-term use damages the **liver** (cirrhosis), brain and heart, and causes accidents and family problems.
- **Tobacco (smoking)** — nicotine is addictive; causes **lung cancer, bronchitis** and heart disease.
- **Hard drugs** (heroin, cocaine) — damage the brain and body, and injecting can spread **HIV/hepatitis** through shared needles.
- Drug abuse harms **health, judgement, work, relationships and society**.

## Preventing drug abuse

1. **Health education** — teach the dangers of drugs early.
2. **Say no** to peer pressure; choose good friends and role models.
3. **Take part in sport, hobbies and religion** instead of drugs.
4. **Support and counselling** for those struggling; rehabilitation for addicts.
5. **Laws** controlling dangerous drugs and their sale.

## Common errors and misconceptions

- **"All drugs are bad"** — medicines used correctly are helpful; **abuse** (wrong use) is the danger.
- **"Alcohol is a stimulant"** — alcohol is a **depressant**; it slows the nervous system.
- **"You can stop any time"** — abuse can lead to **addiction**, which is hard to stop.
- **"Only illegal drugs are harmful"** — **tobacco and alcohol** are legal but very harmful when abused.`,
      workedExample: `**Task.** (a) Define drug abuse. (b) Classify alcohol and nicotine as depressant or stimulant and give one long-term danger of each. (c) State two ways a school can help prevent drug abuse.

**Solution**

(a) **Drug abuse** is the use of a drug **without medical advice** and for a purpose it was **not intended** for (for example to get "high"), in a way that harms the body or mind.

(b) Classification and danger:
- **Alcohol** — a **depressant** (slows the nervous system). Long-term danger: damages the **liver** (cirrhosis) and brain, and causes accidents.
- **Nicotine** (in tobacco) — a **stimulant** and addictive. Long-term danger: smoking causes **lung cancer**, bronchitis and heart disease.

(c) Two ways a school can help (any two): give **health education** about the dangers of drugs; encourage **sport, clubs and hobbies** as alternatives; teach pupils to **resist peer pressure**; provide **counselling** for those at risk.

**Answer:** (a) using a drug without medical advice and for the wrong reasons; (b) alcohol = depressant (liver damage); nicotine = stimulant (lung cancer); (c) e.g. health education and encouraging sport/hobbies.`,
      quiz: [
        { prompt: "A drug is a substance that", options: ["changes how the body or mind works", "is always food", "gives no effect", "is only water"], correctIndex: 0, explanation: "Drugs alter body/mind function." },
        { prompt: "Drug abuse is using a drug", options: ["without medical advice and for the wrong reasons", "as prescribed by a doctor", "as food", "to cure an illness correctly"], correctIndex: 0, explanation: "Abuse is wrong, unmedical use." },
        { prompt: "Psychoactive drugs mainly affect the", options: ["brain and nervous system", "bones", "hair", "nails"], correctIndex: 0, explanation: "They change nerve impulse transmission." },
        { prompt: "Alcohol is classified as a", options: ["depressant", "stimulant", "vitamin", "mineral"], correctIndex: 0, explanation: "Alcohol slows the nervous system." },
        { prompt: "Nicotine and caffeine are", options: ["stimulants", "depressants", "narcotics", "foods"], correctIndex: 0, explanation: "They speed up the nervous system." },
        { prompt: "Heroin and morphine (misused) are", options: ["narcotics/opioids", "stimulants", "vitamins", "minerals"], correctIndex: 0, explanation: "They dull pain and cause drowsiness." },
        { prompt: "Being unable to stop using a drug is", options: ["addiction (dependence)", "immunity", "digestion", "recovery"], correctIndex: 0, explanation: "Addiction is dependence on a drug." },
        { prompt: "Long-term alcohol abuse damages the", options: ["liver", "hair only", "nails only", "teeth only"], correctIndex: 0, explanation: "Alcohol causes liver cirrhosis." },
        { prompt: "Smoking tobacco can cause", options: ["lung cancer and bronchitis", "stronger lungs", "better breathing", "goitre"], correctIndex: 0, explanation: "Tobacco harms the lungs and heart." },
        { prompt: "Sharing needles to inject drugs can spread", options: ["HIV and hepatitis", "clean blood", "vitamins", "immunity"], correctIndex: 0, explanation: "Blood-borne diseases spread this way." },
        { prompt: "Alcohol slows a person's", options: ["reactions and judgement", "hair growth only", "bone growth only", "nothing"], correctIndex: 0, explanation: "As a depressant it impairs function." },
        { prompt: "Addiction develops partly through", options: ["the brain's pleasure/reward system", "stronger bones", "better eyesight", "cleaner blood"], correctIndex: 0, explanation: "Reward pathways drive dependence." },
        { prompt: "One way to prevent drug abuse is", options: ["health education about the dangers", "trying every drug", "sharing needles", "ignoring the problem"], correctIndex: 0, explanation: "Education reduces abuse." },
        { prompt: "Resisting peer pressure means", options: ["saying no to friends who offer drugs", "always agreeing with friends", "hiding drug use", "starting to smoke"], correctIndex: 0, explanation: "Refusing protects health." },
        { prompt: "A good alternative to drug use is", options: ["sport, hobbies and religion", "more alcohol", "smoking", "gambling on drugs"], correctIndex: 0, explanation: "Positive activities replace drugs." },
        { prompt: "Which legal substances are harmful when abused?", options: ["alcohol and tobacco", "water and food", "oxygen and vitamins", "none"], correctIndex: 0, explanation: "Legal does not mean safe." },
        { prompt: "Medicines used correctly are", options: ["helpful", "always abuse", "the same as hard drugs", "useless"], correctIndex: 0, explanation: "Proper use is not abuse." },
        { prompt: "Counselling and rehabilitation help by", options: ["supporting addicts to recover", "supplying more drugs", "spreading disease", "increasing addiction"], correctIndex: 0, explanation: "They help people stop." },
        { prompt: "Drug abuse harms not only the person but also", options: ["their family and society", "no one else", "only animals", "only plants"], correctIndex: 0, explanation: "It damages relationships and community." },
        { prompt: "Laws controlling dangerous drugs help to", options: ["reduce their sale and abuse", "encourage abuse", "spread addiction", "make drugs free"], correctIndex: 0, explanation: "Regulation limits harm." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define drug abuse.", answerKey: "The use of a drug without medical advice and for a purpose it was not intended for (e.g. to get 'high'), harming the body or mind. Award for 'without medical advice' + 'wrong purpose'.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Alcohol is best classified as which type of drug?", options: ["Depressant", "Stimulant", "Vitamin", "Narcotic"], correctIndex: 0, answerKey: "Alcohol is a depressant. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State two dangers of tobacco smoking and one danger of alcohol abuse.", answerKey: "Tobacco (any two): lung cancer, bronchitis, heart disease, addiction. Alcohol (one): liver damage (cirrhosis), brain damage, accidents, family problems. 1 mark each.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what addiction is and how it develops.", answerKey: "Addiction (dependence) is being unable to stop using a drug; it develops through repeated abuse that alters communication between nerve cells and activates the brain's pleasure/reward system. Award for 'cannot stop' + brain/reward change.", marks: 4 },
        { type: "ESSAY", prompt: "Discuss the effects of drug abuse on the individual and society, and explain how it can be prevented.", answerKey: "Effects: psychoactive drugs alter the nervous system; alcohol (depressant, liver/brain damage, accidents); tobacco (lung cancer, heart disease); hard drugs (brain damage, HIV from needles); addiction; harm to work, family and society (up to 8). Prevention: health education, resisting peer pressure, positive activities (sport/hobbies/religion), counselling and rehabilitation, laws controlling drugs (up to 7).", marks: 15 },
      ],
    },
  ],
};
