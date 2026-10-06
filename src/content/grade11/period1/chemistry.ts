import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 11,
// Semester One, Period I: Solution and Solubility. The CONTENTS list is
// expanded to one topic per top-level item: 1. Solutions (homogeneous /
// heterogeneous); 2. Types of solutions (saturated, unsaturated,
// supersaturated); 3. Dilute and concentrated solutions; 4. Solution
// concentration units; 5. Colligative properties; 6. Colloids; 7. Factors
// affecting solubility; 8. General principles of solubility; 9. Solubility
// curves and their uses; 10. Solubility of ionic substances; 11. Precipitation
// and quantitative analysis.
export const chemistryG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Solution and Solubility",
  summary:
    "Period I of the MoE Grade 11 Chemistry syllabus. Learners define solutions and distinguish homogeneous from heterogeneous mixtures, classify solutions as saturated, unsaturated or supersaturated, compare dilute and concentrated solutions, calculate concentration in molarity, molality, mass and volume percent, ppm, ppb and normality, describe the colligative properties, meet colloids and the Tyndall effect, examine the factors that affect solubility (including Henry's law), treat a saturated solution as a dynamic equilibrium, read solubility curves, apply solubility rules to ionic substances, and use precipitation reactions in qualitative and quantitative analysis.",
  topics: [
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.2 Saturated Solutions and Solubility (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.02%3A_Saturated_Solutions_and_Solubility)
      slug: "solutions-homogeneous-and-heterogeneous",
      title: "Solutions",
      objective:
        "By the end of the topic, learners should be able to define a solution and its parts and distinguish homogeneous from heterogeneous mixtures. (MoE Grade 11 Period I, CONTENTS 1.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Most chemistry happens in **solution** — in water, in blood, in the sea, in the laboratory.
- **This topic:** what a solution is, its parts, and how a homogeneous mixture differs from a heterogeneous one.

## Key definitions

- **Solution** — a **homogeneous** mixture of two or more substances that has the same composition and properties throughout.
- **Solute** — the substance that is dissolved (usually present in the smaller amount).
- **Solvent** — the substance that does the dissolving (usually present in the larger amount).
- **Solution = solute + solvent.** In salt water, salt is the solute and water is the solvent.

## Homogeneous and heterogeneous mixtures

- **Homogeneous mixture** — uniform throughout; the parts cannot be seen separately (e.g. salt water, air, brass). A true solution is homogeneous.
- **Heterogeneous mixture** — not uniform; different parts can be seen or separated (e.g. sand in water, oil and water, muddy water).

| Feature | Homogeneous (solution) | Heterogeneous |
|---|---|---|
| Appearance | uniform, one phase | non-uniform, more than one phase |
| Particle visibility | not visible | often visible |
| Example | salt water, air | sand in water, oil in water |

## States of solutions

- Solutions can be **solid** (alloys such as brass), **liquid** (salt water) or **gaseous** (air).
- The solvent state usually decides the state of the solution.

## Common errors and misconceptions

- **Solute is always solid** — a solute can be a gas (CO₂ in a fizzy drink) or a liquid (ethanol in water).
- **A solution must be coloured** — many solutions are colourless (sugar water).
- **Calling a suspension a solution** — muddy water is heterogeneous, not a true solution.`,
      workedExample: `**Task.** A student stirs 10 g of table salt into 200 g of water until it all disappears, and separately shakes 10 g of sand with 200 g of water. Identify the solute, the solvent and the type of mixture in each case.

**Salt in water**
- The salt dissolves completely and the liquid looks uniform.
- Solute = **salt** (smaller amount, dissolved); solvent = **water**.
- The mixture is **homogeneous** — a true solution.

**Sand in water**
- The sand does not dissolve; it settles out and the two parts can be seen and separated by filtering.
- The mixture is **heterogeneous** — not a solution.

**Conclusion.** Only the salt-and-water mixture is a solution, because it is homogeneous with the same composition throughout.`,
      quiz: [
        { prompt: "A solution is a … mixture.", options: ["homogeneous", "heterogeneous", "cloudy", "solid only"], correctIndex: 0, explanation: "A solution is uniform throughout." },
        { prompt: "The substance that is dissolved is the…", options: ["solute", "solvent", "solution", "precipitate"], correctIndex: 0, explanation: "The solute is dissolved by the solvent." },
        { prompt: "The substance that does the dissolving is the…", options: ["solvent", "solute", "colloid", "suspension"], correctIndex: 0, explanation: "The solvent dissolves the solute." },
        { prompt: "In salt water, the solvent is…", options: ["water", "salt", "sodium", "chloride"], correctIndex: 0, explanation: "Water is the dissolving medium." },
        { prompt: "In salt water, the solute is…", options: ["salt", "water", "air", "sand"], correctIndex: 0, explanation: "The salt is the dissolved substance." },
        { prompt: "Which is a heterogeneous mixture?", options: ["sand in water", "salt water", "air", "sugar water"], correctIndex: 0, explanation: "Sand in water is non-uniform." },
        { prompt: "Which is a homogeneous mixture?", options: ["air", "oil and water", "muddy water", "gravel and sand"], correctIndex: 0, explanation: "Air is a uniform mixture of gases." },
        { prompt: "A solution equals solute plus…", options: ["solvent", "precipitate", "residue", "colloid"], correctIndex: 0, explanation: "Solution = solute + solvent." },
        { prompt: "Brass (copper and zinc) is an example of a … solution.", options: ["solid", "liquid", "gaseous", "colloidal"], correctIndex: 0, explanation: "An alloy is a solid solution." },
        { prompt: "The solute is usually present in the … amount.", options: ["smaller", "larger", "same", "zero"], correctIndex: 0, explanation: "The solute is usually the minor component." },
        { prompt: "A fizzy drink contains CO₂ gas dissolved in water; here the solute is…", options: ["carbon dioxide", "water", "sugar only", "glass"], correctIndex: 0, explanation: "The dissolved gas is the solute." },
        { prompt: "In a heterogeneous mixture the parts…", options: ["can be seen or separated", "are always invisible", "are chemically bonded", "form one phase"], correctIndex: 0, explanation: "Heterogeneous mixtures have distinguishable parts." },
        { prompt: "Air is best described as a … solution.", options: ["gaseous", "solid", "liquid", "colloidal"], correctIndex: 0, explanation: "Air is a homogeneous gaseous mixture." },
        { prompt: "Which statement about solutions is TRUE?", options: ["they have uniform composition", "they always contain a solid", "they are always coloured", "they separate on standing"], correctIndex: 0, explanation: "Solutions are uniform throughout." },
        { prompt: "Sugar water is homogeneous because…", options: ["the sugar spreads evenly", "the sugar settles", "the sugar is visible", "it has two phases"], correctIndex: 0, explanation: "The dissolved sugar is uniformly distributed." },
        { prompt: "Which pair is a solute and solvent in vinegar (dilute acetic acid in water)?", options: ["acetic acid; water", "water; acetic acid", "salt; sugar", "air; water"], correctIndex: 0, explanation: "Acetic acid is the minor dissolved component." },
        { prompt: "A mixture with more than one visible phase is…", options: ["heterogeneous", "homogeneous", "a true solution", "an alloy"], correctIndex: 0, explanation: "More than one phase means heterogeneous." },
        { prompt: "Which cannot be a solute?", options: ["a mixture that stays separate", "a gas", "a liquid", "a solid"], correctIndex: 0, explanation: "A solute must dissolve to form one phase." },
        { prompt: "Sea water is a mixture of many salts dissolved in water; it is…", options: ["homogeneous", "heterogeneous", "a suspension", "a pure substance"], correctIndex: 0, explanation: "The dissolved salts are uniformly spread, so it is homogeneous." },
        { prompt: "The state of a solution is usually the state of the…", options: ["solvent", "solute", "smallest component", "gas only"], correctIndex: 0, explanation: "The solvent (major component) usually sets the state." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define the terms solution, solute and solvent, giving one example of each from everyday life.", answerKey: "Solution — a homogeneous mixture of two or more substances (e.g. salt water). Solute — the substance dissolved (e.g. salt). Solvent — the substance doing the dissolving (e.g. water). Award a mark for each correct definition and example.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following is a homogeneous mixture?", options: ["sugar dissolved in water", "sand in water", "oil floating on water", "iron filings in sand"], correctIndex: 0, answerKey: "Sugar water is uniform throughout, so homogeneous.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "In a can of soda, the dissolved carbon dioxide gas is the:", options: ["solute", "solvent", "solution", "precipitate"], correctIndex: 0, answerKey: "The dissolved gas is the solute; water is the solvent.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a homogeneous and a heterogeneous mixture and give one example of each.", answerKey: "A homogeneous mixture is uniform throughout with one visible phase (e.g. salt water/air); a heterogeneous mixture is not uniform and its parts can be seen or separated (e.g. sand in water). Award marks for the contrast and correct examples.", marks: 3 },
        { type: "ESSAY", prompt: "Using suitable examples, explain what a solution is, name and describe its components, and show how a solution differs from a heterogeneous mixture.", answerKey: "A strong answer defines a solution as a homogeneous mixture with the same composition throughout, identifies the solute (dissolved, usually smaller amount) and solvent (dissolving medium, usually larger amount) with examples such as salt/sugar in water, notes solutions can be solid (brass), liquid (salt water) or gaseous (air), and contrasts this with a heterogeneous mixture such as sand in water where the parts are visible and separable. Award marks for definition, components with examples, states of solution, and the homogeneous/heterogeneous contrast.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.2 Saturated Solutions and Solubility (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.02%3A_Saturated_Solutions_and_Solubility)
      slug: "types-of-solutions",
      title: "Types of Solutions",
      objective:
        "By the end of the topic, learners should be able to classify a solution as saturated, unsaturated or supersaturated and describe how each is prepared. (MoE Grade 11 Period I, CONTENTS 2.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- There is a limit to how much solute a given amount of solvent can dissolve at a fixed temperature.
- **This topic:** the three classes of solution — saturated, unsaturated and supersaturated.

## The three types

- **Saturated solution** — contains the **maximum** amount of solute that can dissolve at that temperature; extra solute stays undissolved at the bottom.
- **Unsaturated solution** — contains **less** than the maximum; more solute could still dissolve.
- **Supersaturated solution** — contains **more** solute than the normal maximum; it is unstable and any disturbance (a seed crystal) makes the excess crystallise out.

## Solubility

- **Solubility** — the maximum mass of solute that dissolves in a fixed amount of solvent (usually 100 g of water) at a stated temperature, giving a saturated solution.

## Making a supersaturated solution

- Dissolve as much solute as possible in **hot** solvent (higher solubility), then cool the solution **slowly and without disturbance**.
- The extra solute stays in solution — the solution is now supersaturated. Adding a tiny seed crystal starts rapid crystallisation.

## Common errors and misconceptions

- **"Concentrated" = "saturated"** — a solution can be concentrated but still unsaturated if more solute could dissolve.
- **A supersaturated solution is stable** — it is unstable; it crystallises when disturbed.
- **Saturation is fixed** — the saturation point depends on temperature; heating usually lets more solid dissolve.`,
      workedExample: `**Task.** At 20 °C, 36 g of a salt saturates 100 g of water. State whether each mixture at 20 °C is saturated, unsaturated or supersaturated: (a) 20 g salt in 100 g water; (b) 36 g salt in 100 g water with none left over; (c) 45 g salt dissolved in 100 g water by careful cooling of a hot solution.

**Recall the rule**
- The saturation point at 20 °C is 36 g per 100 g water.

**(a) 20 g in 100 g water**
- 20 g is **less** than 36 g, and more could dissolve → **unsaturated**.

**(b) 36 g in 100 g water**
- Exactly the maximum has dissolved → **saturated**.

**(c) 45 g dissolved by cooling**
- 45 g is **more** than the 36 g maximum, yet it is all in solution → **supersaturated** (unstable; a seed crystal would make 9 g crystallise out).`,
      quiz: [
        { prompt: "A solution holding the maximum solute at a given temperature is…", options: ["saturated", "unsaturated", "supersaturated", "dilute"], correctIndex: 0, explanation: "Maximum solute dissolved = saturated." },
        { prompt: "A solution that can still dissolve more solute is…", options: ["unsaturated", "saturated", "supersaturated", "concentrated"], correctIndex: 0, explanation: "Below the maximum = unsaturated." },
        { prompt: "A solution holding more than the normal maximum is…", options: ["supersaturated", "saturated", "unsaturated", "dilute"], correctIndex: 0, explanation: "Above the maximum = supersaturated." },
        { prompt: "A supersaturated solution is…", options: ["unstable", "very stable", "always dilute", "heterogeneous"], correctIndex: 0, explanation: "It crystallises readily when disturbed." },
        { prompt: "Solubility is usually quoted per … of water.", options: ["100 g", "1 g", "1 kg", "1 mL"], correctIndex: 0, explanation: "Solubility is grams solute per 100 g water." },
        { prompt: "Adding a seed crystal to a supersaturated solution causes…", options: ["crystallisation of the excess", "more dissolving", "boiling", "no change"], correctIndex: 0, explanation: "Excess solute crystallises out." },
        { prompt: "To make a supersaturated solution you dissolve solute in … solvent, then cool slowly.", options: ["hot", "cold", "frozen", "boiling then adding seed"], correctIndex: 0, explanation: "Hot solvent dissolves more; slow cooling holds the excess." },
        { prompt: "In a saturated solution with excess solid, dissolving and crystallising occur at…", options: ["equal rates", "no rate", "the solid disappears fully", "different phases only"], correctIndex: 0, explanation: "Saturation is a dynamic equilibrium." },
        { prompt: "If 30 g dissolves in 100 g water and the maximum is 36 g, the solution is…", options: ["unsaturated", "saturated", "supersaturated", "solid"], correctIndex: 0, explanation: "30 < 36, so more could dissolve." },
        { prompt: "Undissolved solute sitting at the bottom shows the solution is at least…", options: ["saturated", "unsaturated", "supersaturated", "empty"], correctIndex: 0, explanation: "Excess undissolved solid means the liquid is saturated." },
        { prompt: "Solubility depends strongly on…", options: ["temperature", "the container colour", "stirring speed only", "the day"], correctIndex: 0, explanation: "Solubility changes with temperature." },
        { prompt: "Which solution has the LEAST solute for the same solvent amount?", options: ["unsaturated", "saturated", "supersaturated", "they are equal"], correctIndex: 0, explanation: "Unsaturated holds less than the maximum." },
        { prompt: "A honey jar that forms sugar crystals over time was originally a … solution.", options: ["supersaturated", "unsaturated", "dilute", "gaseous"], correctIndex: 0, explanation: "Excess sugar crystallises from a supersaturated syrup." },
        { prompt: "The maximum mass of solute that dissolves at a temperature is the…", options: ["solubility", "molarity", "density", "mass number"], correctIndex: 0, explanation: "That maximum is the solubility." },
        { prompt: "Heating a saturated solution of most solids usually lets it…", options: ["dissolve more solute", "dissolve less", "form a colloid", "freeze"], correctIndex: 0, explanation: "Higher temperature raises solubility of most solids." },
        { prompt: "Which term describes a genuinely unstable solution?", options: ["supersaturated", "saturated", "unsaturated", "dilute"], correctIndex: 0, explanation: "Supersaturated solutions are unstable." },
        { prompt: "A saturated solution is at … with any excess undissolved solute.", options: ["equilibrium", "no equilibrium", "boiling", "reaction"], correctIndex: 0, explanation: "Rates of dissolving and crystallising are equal." },
        { prompt: "If exactly the maximum solute has dissolved and none is left over, the solution is…", options: ["saturated", "unsaturated", "supersaturated", "colloidal"], correctIndex: 0, explanation: "Exactly the maximum = saturated." },
        { prompt: "Supersaturation is best achieved by…", options: ["slow, undisturbed cooling", "rapid stirring", "adding sand", "boiling dry"], correctIndex: 0, explanation: "Careful cooling holds excess solute in solution." },
        { prompt: "Which is NOT one of the three types of solution?", options: ["neutralised", "saturated", "unsaturated", "supersaturated"], correctIndex: 0, explanation: "The three types are saturated, unsaturated and supersaturated." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a saturated, an unsaturated and a supersaturated solution.", answerKey: "Saturated — contains the maximum solute that can dissolve at that temperature. Unsaturated — contains less than the maximum, so more can dissolve. Supersaturated — contains more than the normal maximum and is unstable, crystallising when disturbed. Award a mark for each correct description.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which solution will crystallise if a small seed crystal is added?", options: ["supersaturated", "unsaturated", "saturated with no excess", "dilute"], correctIndex: 0, answerKey: "A supersaturated solution is unstable and crystallises on seeding.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The maximum mass of a solute that dissolves in 100 g of water at a stated temperature is its:", options: ["solubility", "molality", "concentration in ppm", "density"], correctIndex: 0, answerKey: "That quantity is the solubility.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "At 25 °C the solubility of a salt is 40 g per 100 g water. Classify a mixture of 40 g salt fully dissolved in 100 g water, and a mixture of 25 g salt in 100 g water.", answerKey: "40 g fully dissolved = saturated (exactly the maximum). 25 g in 100 g water = unsaturated (less than the 40 g maximum, so more could dissolve). Award marks for both correct classifications with reasoning.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how you would prepare a supersaturated solution and explain why it is unstable.", answerKey: "A full answer explains: dissolve as much solute as possible in hot solvent (solubility is higher when hot), then cool the solution slowly and without disturbance so the excess solute stays dissolved beyond the normal saturation point. The solution is unstable because it holds more solute than the temperature normally allows; adding a seed crystal or disturbance triggers rapid crystallisation of the excess until a saturated solution remains. Award marks for the hot-dissolve/slow-cool method, the idea of exceeding the saturation limit, and the explanation of instability/crystallisation.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.4 Ways of Expressing Concentration (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.04%3A_Ways_of_Expressing_Concentration)
      slug: "dilute-and-concentrated-solutions",
      title: "Dilute and Concentrated Solutions",
      objective:
        "By the end of the topic, learners should be able to distinguish dilute from concentrated solutions and carry out simple dilution calculations using C₁V₁ = C₂V₂. (MoE Grade 11 Period I, CONTENTS 3.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- The words **dilute** and **concentrated** are relative descriptions of how much solute a solution contains.
- **This topic:** what the terms mean and how to dilute a stock solution by calculation.

## Dilute and concentrated

- **Dilute solution** — contains a **small** amount of solute relative to the solvent.
- **Concentrated solution** — contains a **large** amount of solute relative to the solvent.
- These are **qualitative** (comparative) terms; concentration units (molarity, etc.) give the exact amount.

## Stock solutions and dilution

- A **stock solution** is a concentrated solution kept ready to be diluted to weaker working solutions.
- Diluting **adds solvent** — the **amount (moles) of solute stays the same**, so the concentration falls.

**Dilution formula:** C₁V₁ = C₂V₂

- C₁, V₁ = concentration and volume before dilution; C₂, V₂ = concentration and volume after.
- The product C × V equals the moles of solute, which does not change on adding water.

## Common errors and misconceptions

- **Confusing concentrated with saturated** — a concentrated solution is not necessarily saturated.
- **Thinking dilution changes the moles of solute** — dilution only adds solvent; moles of solute are unchanged.
- **Adding acid to water vs water to acid** — always add concentrated acid to water (never water to acid) to spread out the heat safely.`,
      workedExample: `**Task.** How would you prepare 250 cm³ of 0.20 mol/dm³ hydrochloric acid from a 2.0 mol/dm³ stock solution?

**Step 1 — Write the dilution formula**
C₁V₁ = C₂V₂, where C₁ = 2.0 mol/dm³ (stock), C₂ = 0.20 mol/dm³ (wanted), V₂ = 250 cm³.

**Step 2 — Make V₁ the subject**
V₁ = C₂V₂ ÷ C₁.

**Step 3 — Substitute**
V₁ = (0.20 × 250) ÷ 2.0 = 50 ÷ 2.0 = **25 cm³**.

**Step 4 — Describe the method**
Measure **25 cm³** of the 2.0 mol/dm³ stock acid, transfer to a 250 cm³ volumetric flask, and add water up to the 250 cm³ mark. Mixing gives 250 cm³ of 0.20 mol/dm³ acid.

**Check.** Moles before = 2.0 × 0.025 = 0.050 mol; moles after = 0.20 × 0.250 = 0.050 mol. The moles of solute are unchanged, confirming the dilution.`,
      quiz: [
        { prompt: "A dilute solution contains a … amount of solute.", options: ["small", "large", "maximum", "zero"], correctIndex: 0, explanation: "Dilute = little solute relative to solvent." },
        { prompt: "A concentrated solution contains a … amount of solute.", options: ["large", "small", "zero", "fixed 1 g"], correctIndex: 0, explanation: "Concentrated = much solute." },
        { prompt: "The terms dilute and concentrated are…", options: ["comparative (qualitative)", "exact units", "the same as saturated", "only for gases"], correctIndex: 0, explanation: "They are relative descriptions." },
        { prompt: "Diluting a solution means…", options: ["adding solvent", "adding solute", "removing solute", "heating it"], correctIndex: 0, explanation: "Dilution adds solvent." },
        { prompt: "On dilution, the moles of solute…", options: ["stay the same", "increase", "decrease", "double"], correctIndex: 0, explanation: "Only solvent is added; solute moles are unchanged." },
        { prompt: "The dilution formula is…", options: ["C₁V₁ = C₂V₂", "PV = nRT", "C = kP", "ΔT = Kf·m"], correctIndex: 0, explanation: "C₁V₁ = C₂V₂ conserves moles of solute." },
        { prompt: "A concentrated solution kept for diluting later is a…", options: ["stock solution", "saturated solution", "buffer", "colloid"], correctIndex: 0, explanation: "That is a stock solution." },
        { prompt: "Diluting 2.0 M acid to make it 0.20 M means the volume must…", options: ["increase 10-fold", "decrease", "stay the same", "double"], correctIndex: 0, explanation: "Concentration falls, so volume rises ten times." },
        { prompt: "The quantity C × V represents the…", options: ["moles of solute", "mass of solvent", "temperature", "density"], correctIndex: 0, explanation: "Concentration × volume = moles of solute." },
        { prompt: "To dilute concentrated acid safely you should add…", options: ["acid to water", "water to acid", "acid to acid", "water to water"], correctIndex: 0, explanation: "Add acid to water to spread heat safely." },
        { prompt: "A concentrated solution is always…", options: ["not necessarily saturated", "saturated", "supersaturated", "dilute"], correctIndex: 0, explanation: "Concentrated does not mean saturated." },
        { prompt: "If you add water to a solution, its concentration…", options: ["decreases", "increases", "stays constant", "becomes zero"], correctIndex: 0, explanation: "Adding solvent dilutes the solution." },
        { prompt: "25 cm³ of 2.0 M stock diluted to 250 cm³ gives a concentration of…", options: ["0.20 M", "2.0 M", "0.02 M", "20 M"], correctIndex: 0, explanation: "(2.0 × 25)/250 = 0.20 M." },
        { prompt: "In C₁V₁ = C₂V₂, subscript 1 refers to the solution…", options: ["before dilution", "after dilution", "at boiling", "when frozen"], correctIndex: 0, explanation: "1 = initial (stock)." },
        { prompt: "Which pair could describe the SAME solution?", options: ["concentrated and unsaturated", "dilute and concentrated", "saturated and empty", "solute and solvent"], correctIndex: 0, explanation: "A concentrated solution can still be unsaturated." },
        { prompt: "To make a weaker solution from a stock you…", options: ["add more solvent", "boil off solvent", "add more solute", "freeze it"], correctIndex: 0, explanation: "Adding solvent lowers concentration." },
        { prompt: "Volume V₁ needed from stock = …", options: ["C₂V₂ ÷ C₁", "C₁ ÷ C₂V₂", "C₁V₁ × C₂", "V₂ ÷ C₂"], correctIndex: 0, explanation: "Rearranging C₁V₁ = C₂V₂." },
        { prompt: "Concentration measures the amount of solute per unit amount of…", options: ["solution or solvent", "container", "temperature", "gas"], correctIndex: 0, explanation: "It is amount of solute per amount of solution/solvent." },
        { prompt: "A very dilute salt solution tastes … than a concentrated one.", options: ["less salty", "more salty", "the same", "bitter"], correctIndex: 0, explanation: "Less solute means less taste." },
        { prompt: "Which apparatus best measures a fixed volume for accurate dilution?", options: ["volumetric flask/pipette", "beaker", "test tube", "watch glass"], correctIndex: 0, explanation: "Volumetric glassware gives accurate volumes." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain the difference between a dilute and a concentrated solution.", answerKey: "A dilute solution has a small amount of solute relative to the solvent; a concentrated solution has a large amount of solute relative to the solvent. The terms are comparative/qualitative. Award marks for both descriptions and the note that they are relative terms.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "When a solution is diluted with water, the number of moles of solute:", options: ["stays the same", "increases", "decreases", "becomes zero"], correctIndex: 0, answerKey: "Dilution only adds solvent; solute moles are unchanged.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "What volume of 1.0 mol/dm³ stock is needed to make 500 cm³ of 0.10 mol/dm³ solution?", options: ["50 cm³", "5 cm³", "100 cm³", "250 cm³"], correctIndex: 0, answerKey: "V₁ = (0.10 × 500)/1.0 = 50 cm³.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Describe how to prepare 100 cm³ of 0.50 mol/dm³ NaOH from a 2.0 mol/dm³ stock solution.", answerKey: "Use C₁V₁ = C₂V₂: V₁ = (0.50 × 100)/2.0 = 25 cm³. Measure 25 cm³ of the 2.0 mol/dm³ stock into a 100 cm³ volumetric flask and add water up to the 100 cm³ mark, then mix. Award marks for the calculation (25 cm³) and the method.", marks: 3 },
        { type: "ESSAY", prompt: "Explain, with the dilution equation, why adding water to a stock solution lowers its concentration but not the amount of solute, and outline how to carry out an accurate dilution in the laboratory.", answerKey: "A strong answer states that dilution adds solvent only, so the moles of solute (given by concentration × volume) stay constant while the total volume rises, lowering the concentration; this is expressed by C₁V₁ = C₂V₂. For the method: calculate the stock volume V₁ = C₂V₂/C₁, measure it accurately with a pipette or burette, transfer to a volumetric flask of the final volume, add water to the calibration mark and mix thoroughly. Award marks for conservation of solute moles, correct use of the equation, and a sound practical method.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.4 Ways of Expressing Concentration (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.04%3A_Ways_of_Expressing_Concentration)
      slug: "solution-concentration-units",
      title: "Solution Concentration Units",
      objective:
        "By the end of the topic, learners should be able to define and calculate molarity, molality, mass percent, volume percent, ppm, ppb and normality. (MoE Grade 11 Period I, CONTENTS 4.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- Concentration must often be stated exactly, not just as "dilute" or "concentrated".
- **This topic:** the quantitative units of concentration and how to calculate them.

## The main units

| Unit | Symbol | Definition |
|---|---|---|
| Molarity | M | moles of solute ÷ litres of **solution** (mol/L) |
| Molality | m | moles of solute ÷ kilograms of **solvent** (mol/kg) |
| Mass percent | % w/w | (mass of solute ÷ mass of solution) × 100 |
| Volume percent | % v/v | (volume of solute ÷ volume of solution) × 100 |
| Mole fraction | χ | moles of one component ÷ total moles |
| Parts per million | ppm | (mass of solute ÷ mass of solution) × 10⁶ |
| Parts per billion | ppb | (mass of solute ÷ mass of solution) × 10⁹ |
| Normality | N | number of gram-equivalents of solute ÷ litres of solution |

## Molarity vs molality

- **Molarity** uses the volume of the whole **solution** and changes with temperature (volume expands).
- **Molality** uses the mass of the **solvent** and does not change with temperature (mass is fixed).

## Normality

- **Normality** = molarity × the number of reactive units (H⁺, OH⁻ or electrons) per formula unit.
- For H₂SO₄ (2 replaceable H⁺), a 1 M solution is 2 N.

## ppm and ppb

- Used for very dilute solutions (traces in drinking water or air).
- For dilute water solutions, **1 ppm ≈ 1 mg per litre** of solution.

## Common errors and misconceptions

- **Using solution mass for molality** — molality uses the mass of the **solvent** only.
- **Molarity uses volume of solvent** — it uses the total volume of **solution**.
- **Forgetting to convert grams to moles** — molarity and molality need moles (mass ÷ molar mass).`,
      workedExample: `**Task.** 4.0 g of sodium hydroxide, NaOH (molar mass 40 g/mol), is dissolved in water and made up to 500 cm³ of solution. (a) Calculate the molarity. (b) If the same 4.0 g were dissolved in 250 g of water, calculate the molality.

**Part (a) — Molarity**
1. Moles of NaOH = mass ÷ molar mass = 4.0 ÷ 40 = **0.10 mol**.
2. Volume of solution = 500 cm³ = 0.500 dm³ (L).
3. Molarity = moles ÷ litres of solution = 0.10 ÷ 0.500 = **0.20 mol/dm³ (0.20 M)**.

**Part (b) — Molality**
1. Moles of NaOH = 0.10 mol (as above).
2. Mass of solvent (water) = 250 g = 0.250 kg.
3. Molality = moles ÷ kg of solvent = 0.10 ÷ 0.250 = **0.40 mol/kg (0.40 m)**.

**Conclusion.** The solution is 0.20 M by volume of solution and 0.40 m by mass of solvent — the two units give different numbers because they are defined differently.`,
      quiz: [
        { prompt: "Molarity is moles of solute per litre of…", options: ["solution", "solvent", "water only", "gas"], correctIndex: 0, explanation: "Molarity uses the volume of the whole solution." },
        { prompt: "Molality is moles of solute per kilogram of…", options: ["solvent", "solution", "solute", "container"], correctIndex: 0, explanation: "Molality uses the mass of the solvent." },
        { prompt: "Mass percent = (mass of solute ÷ mass of solution) × …", options: ["100", "1000", "10⁶", "10⁹"], correctIndex: 0, explanation: "Percent multiplies by 100." },
        { prompt: "ppm multiplies the mass fraction by…", options: ["10⁶", "100", "1000", "10⁹"], correctIndex: 0, explanation: "Parts per million uses 10⁶." },
        { prompt: "ppb multiplies the mass fraction by…", options: ["10⁹", "10⁶", "100", "1000"], correctIndex: 0, explanation: "Parts per billion uses 10⁹." },
        { prompt: "Which unit does NOT change with temperature?", options: ["molality", "molarity", "volume percent", "normality by volume"], correctIndex: 0, explanation: "Molality uses mass, which is temperature-independent." },
        { prompt: "0.10 mol of solute in 0.50 L of solution has molarity…", options: ["0.20 M", "0.050 M", "2.0 M", "5.0 M"], correctIndex: 0, explanation: "0.10 ÷ 0.50 = 0.20 M." },
        { prompt: "Normality equals molarity × …", options: ["number of reactive units", "temperature", "molar mass", "volume"], correctIndex: 0, explanation: "Multiply by H⁺/OH⁻/electrons per formula unit." },
        { prompt: "A 1 M H₂SO₄ solution is … in normality.", options: ["2 N", "1 N", "0.5 N", "4 N"], correctIndex: 0, explanation: "H₂SO₄ has 2 replaceable H⁺, so 1 M = 2 N." },
        { prompt: "Mole fraction is moles of a component ÷ …", options: ["total moles", "mass of solvent", "volume", "molar mass"], correctIndex: 0, explanation: "χ = moles of component / total moles." },
        { prompt: "To get moles from grams you divide by the…", options: ["molar mass", "volume", "density", "temperature"], correctIndex: 0, explanation: "Moles = mass ÷ molar mass." },
        { prompt: "Volume percent uses the volume of solute ÷ volume of…", options: ["solution", "solvent only", "gas", "container"], correctIndex: 0, explanation: "% v/v uses total solution volume." },
        { prompt: "For very dilute water solutions, 1 ppm ≈ …", options: ["1 mg per litre", "1 g per litre", "1 mol per litre", "1 kg per litre"], correctIndex: 0, explanation: "1 ppm ≈ 1 mg/L in dilute water solutions." },
        { prompt: "4.0 g NaOH (M = 40) is how many moles?", options: ["0.10 mol", "1.0 mol", "0.40 mol", "160 mol"], correctIndex: 0, explanation: "4.0 ÷ 40 = 0.10 mol." },
        { prompt: "0.10 mol solute in 0.25 kg solvent has molality…", options: ["0.40 m", "0.025 m", "2.5 m", "0.10 m"], correctIndex: 0, explanation: "0.10 ÷ 0.25 = 0.40 m." },
        { prompt: "Which units are best for trace pollutants?", options: ["ppm and ppb", "molarity only", "mole fraction", "normality"], correctIndex: 0, explanation: "ppm/ppb suit very small amounts." },
        { prompt: "Molarity is symbolised by…", options: ["M", "m", "N", "χ"], correctIndex: 0, explanation: "Capital M is molarity." },
        { prompt: "Molality is symbolised by…", options: ["m", "M", "N", "ppm"], correctIndex: 0, explanation: "Lower-case m is molality." },
        { prompt: "A 10% w/w salt solution contains 10 g salt in … g of solution.", options: ["100", "10", "1000", "90"], correctIndex: 0, explanation: "Mass percent is per 100 g of solution." },
        { prompt: "Why can molarity change with temperature?", options: ["solution volume expands or contracts", "moles change", "mass changes", "it cannot"], correctIndex: 0, explanation: "Volume varies with temperature; molarity uses volume." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define molarity and molality and state one difference between them.", answerKey: "Molarity = moles of solute per litre of solution (mol/L). Molality = moles of solute per kilogram of solvent (mol/kg). Difference: molarity depends on total solution volume and changes with temperature, whereas molality uses solvent mass and is temperature-independent. Award marks for both definitions and one valid difference.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "0.5 mol of glucose is dissolved to make 2.0 L of solution. The molarity is:", options: ["0.25 M", "1.0 M", "2.5 M", "4.0 M"], correctIndex: 0, answerKey: "0.5 ÷ 2.0 = 0.25 M.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which concentration unit is defined as (mass of solute ÷ mass of solution) × 10⁶?", options: ["parts per million (ppm)", "molarity", "molality", "mass percent"], correctIndex: 0, answerKey: "That is the definition of ppm.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Calculate the molarity of a solution made by dissolving 5.85 g of NaCl (molar mass 58.5 g/mol) in enough water to make 250 cm³ of solution.", answerKey: "Moles NaCl = 5.85 ÷ 58.5 = 0.100 mol. Volume = 0.250 L. Molarity = 0.100 ÷ 0.250 = 0.40 mol/dm³. Award marks for moles, volume conversion, and final answer 0.40 M.", marks: 3 },
        { type: "ESSAY", prompt: "Compare molarity, molality, mass percent and ppm as ways of expressing concentration, giving the defining formula for each and a situation where each is useful.", answerKey: "A full answer gives: molarity = mol solute / L solution (useful for titrations and reactions in solution); molality = mol solute / kg solvent (useful for colligative properties because it is temperature-independent); mass percent = (mass solute / mass solution) × 100 (useful for commercial concentrated reagents); ppm = (mass solute / mass solution) × 10⁶ (useful for trace amounts such as pollutants in water). Award marks for correct formulas and appropriate uses across the four units.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.5 Colligative Properties (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.05%3A_Colligative_Properties)
      slug: "colligative-properties",
      title: "Colligative Properties",
      objective:
        "By the end of the topic, learners should be able to name the four colligative properties, state their formulas, and account for the van't Hoff factor in electrolyte solutions. (MoE Grade 11 Period I, CONTENTS 5.)",
      estimatedMinutes: 150,
      notes: `## Introduction

- Some properties of a solution depend only on the **number** of dissolved particles, not on what they are.
- **This topic:** the four colligative properties and how electrolytes affect them.

## Definition

- **Colligative property** — a property of a solution that depends on the **total number of dissolved particles**, not on their chemical identity.

## The four colligative properties

| Property | What happens | Formula |
|---|---|---|
| Vapour-pressure lowering | solute lowers the solvent's vapour pressure | ΔP = χ(solute) × P°(solvent) |
| Boiling-point elevation | boiling point rises | ΔTb = Kb × m |
| Freezing-point depression | freezing point falls | ΔTf = Kf × m |
| Osmotic pressure | pressure driving osmosis | Π = MRT |

- **Raoult's law:** P(solvent) = χ(solvent) × P°(solvent) — a non-volatile solute lowers vapour pressure.
- **Kb, Kf** are constants of the solvent; **m** is the molality; **M** is molarity; **R** is the gas constant; **T** is the absolute temperature.

## Electrolyte solutions and the van't Hoff factor

- **van't Hoff factor (i)** = the number of particles a solute gives in solution.
- Non-electrolytes (sugar): i = 1. NaCl → Na⁺ + Cl⁻: i = 2. CaCl₂ → Ca²⁺ + 2Cl⁻: i = 3.
- Include i in the formulas: ΔTf = i × Kf × m, ΔTb = i × Kb × m, Π = iMRT.

## Everyday uses

- **Salt on icy roads** lowers the freezing point of water, melting the ice.
- **Antifreeze** (ethylene glycol) raises the boiling point and lowers the freezing point of car coolant.

## Common errors and misconceptions

- **Thinking the identity of the solute matters** — only the number of particles matters.
- **Forgetting i for ionic solutes** — an ionic solute splits into several particles, multiplying the effect.
- **Using molarity for boiling/freezing** — use **molality** (mass-based, temperature-independent).`,
      workedExample: `**Task.** Calculate the freezing point of a solution made by dissolving sodium chloride, NaCl, to a molality of 2.0 mol/kg in water. (Kf for water = 1.86 °C·kg/mol; NaCl gives i = 2; pure water freezes at 0 °C.)

**Step 1 — Choose the formula**
Freezing-point depression: ΔTf = i × Kf × m.

**Step 2 — Substitute the values**
ΔTf = 2 × 1.86 × 2.0.

**Step 3 — Calculate**
ΔTf = 7.44 ≈ **7.4 °C**.

**Step 4 — Find the new freezing point**
New freezing point = 0 °C − 7.4 °C = **−7.4 °C**.

**Conclusion.** The salt water freezes at about −7.4 °C, well below 0 °C. Because NaCl splits into two ions (i = 2), it depresses the freezing point twice as much as the same molality of sugar (i = 1) — this is why salt is spread on icy roads.`,
      quiz: [
        { prompt: "A colligative property depends on the … of dissolved particles.", options: ["number", "identity", "colour", "mass only"], correctIndex: 0, explanation: "Only the number of particles matters." },
        { prompt: "Adding a non-volatile solute … the vapour pressure of the solvent.", options: ["lowers", "raises", "does not change", "doubles"], correctIndex: 0, explanation: "Vapour pressure is lowered (Raoult's law)." },
        { prompt: "Boiling-point elevation is given by ΔTb = …", options: ["Kb × m", "Kf × m", "MRT", "χP°"], correctIndex: 0, explanation: "ΔTb = Kb·m (× i for electrolytes)." },
        { prompt: "Freezing-point depression is given by ΔTf = …", options: ["Kf × m", "Kb × m", "MRT", "P°χ"], correctIndex: 0, explanation: "ΔTf = Kf·m (× i for electrolytes)." },
        { prompt: "Osmotic pressure is given by Π = …", options: ["MRT", "Kf·m", "Kb·m", "χP°"], correctIndex: 0, explanation: "Π = MRT (× i for electrolytes)." },
        { prompt: "The van't Hoff factor i for sugar (a non-electrolyte) is…", options: ["1", "2", "3", "0"], correctIndex: 0, explanation: "Sugar does not ionise, so i = 1." },
        { prompt: "For NaCl → Na⁺ + Cl⁻, i is…", options: ["2", "1", "3", "4"], correctIndex: 0, explanation: "Two ions per formula unit." },
        { prompt: "For CaCl₂ → Ca²⁺ + 2Cl⁻, i is…", options: ["3", "2", "1", "4"], correctIndex: 0, explanation: "Three ions per formula unit." },
        { prompt: "Which is NOT a colligative property?", options: ["colour of the solution", "boiling-point elevation", "freezing-point depression", "osmotic pressure"], correctIndex: 0, explanation: "Colour depends on identity, not particle number." },
        { prompt: "Salt is spread on icy roads because it…", options: ["lowers the freezing point of water", "raises the freezing point", "colours the ice", "boils the ice"], correctIndex: 0, explanation: "Freezing-point depression melts the ice." },
        { prompt: "Which concentration unit is used in ΔTf and ΔTb?", options: ["molality", "molarity", "ppm", "mole fraction"], correctIndex: 0, explanation: "Boiling/freezing formulas use molality." },
        { prompt: "Raoult's law relates vapour pressure to the mole fraction of the…", options: ["solvent", "gas", "container", "precipitate"], correctIndex: 0, explanation: "P = χ(solvent) × P°(solvent)." },
        { prompt: "A 1 m solution of NaCl lowers freezing point about … times as much as 1 m sugar.", options: ["2", "1", "0.5", "4"], correctIndex: 0, explanation: "i = 2 for NaCl vs 1 for sugar." },
        { prompt: "Antifreeze in a car radiator works by…", options: ["raising boiling point and lowering freezing point", "colouring the water", "removing the water", "adding oxygen"], correctIndex: 0, explanation: "It shifts both transition temperatures." },
        { prompt: "For 2.0 m NaCl (Kf = 1.86, i = 2), ΔTf is about…", options: ["7.4 °C", "3.7 °C", "1.86 °C", "14.8 °C"], correctIndex: 0, explanation: "2 × 1.86 × 2.0 = 7.44 °C." },
        { prompt: "Osmotic pressure Π uses which temperature scale?", options: ["absolute (kelvin)", "Celsius", "Fahrenheit", "any"], correctIndex: 0, explanation: "T must be in kelvin." },
        { prompt: "The freezing point of pure water is…", options: ["0 °C", "100 °C", "−7 °C", "37 °C"], correctIndex: 0, explanation: "Water freezes at 0 °C." },
        { prompt: "Adding solute to water makes it boil at a … temperature.", options: ["higher", "lower", "the same", "0 °C"], correctIndex: 0, explanation: "Boiling-point elevation raises it." },
        { prompt: "Osmosis is the movement of solvent through a … membrane.", options: ["semipermeable", "solid", "metallic", "gas"], correctIndex: 0, explanation: "Osmosis needs a semipermeable membrane." },
        { prompt: "Which solute gives the biggest freezing-point depression at equal molality?", options: ["CaCl₂ (i = 3)", "NaCl (i = 2)", "sugar (i = 1)", "all equal"], correctIndex: 0, explanation: "More particles means a larger effect." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a colligative property and list the four colligative properties.", answerKey: "A colligative property depends only on the number of dissolved solute particles, not their identity. The four are: vapour-pressure lowering, boiling-point elevation, freezing-point depression and osmotic pressure. Award marks for the definition and the four properties.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The formula for freezing-point depression is:", options: ["ΔTf = i·Kf·m", "ΔTf = Kb·m", "ΔTf = MRT", "ΔTf = χP°"], correctIndex: 0, answerKey: "ΔTf = i·Kf·m (i is the van't Hoff factor).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The van't Hoff factor of calcium chloride, CaCl₂, is:", options: ["3", "2", "1", "4"], correctIndex: 0, answerKey: "CaCl₂ → Ca²⁺ + 2Cl⁻, so i = 3.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Calculate the boiling point of a solution of 1.0 mol/kg glucose in water (Kb = 0.51 °C·kg/mol, i = 1, water boils at 100 °C).", answerKey: "ΔTb = i·Kb·m = 1 × 0.51 × 1.0 = 0.51 °C. New boiling point = 100 + 0.51 = 100.51 °C. Award marks for the calculation and the correct boiling point.", marks: 3 },
        { type: "ESSAY", prompt: "Explain why a 1 mol/kg solution of sodium chloride lowers the freezing point of water roughly twice as much as a 1 mol/kg solution of sugar.", answerKey: "A strong answer explains that colligative properties depend on the number of dissolved particles. Sugar is a non-electrolyte (i = 1) and stays as whole molecules, so 1 mol/kg gives 1 mol/kg of particles. Sodium chloride is an electrolyte that dissociates into Na⁺ and Cl⁻ (i = 2), so 1 mol/kg gives about 2 mol/kg of particles. Since ΔTf = i·Kf·m, the salt roughly doubles the freezing-point depression. Award marks for the particle-number principle, the dissociation of NaCl into two ions, and linking i to the size of the depression.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.6 Colloids (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.06%3A_Colloids)
      slug: "colloids",
      title: "Colloids",
      objective:
        "By the end of the topic, learners should be able to define a colloid, distinguish it from true solutions and suspensions, describe the Tyndall effect, and classify colloid types. (MoE Grade 11 Period I, CONTENTS 6.)",
      estimatedMinutes: 110,
      notes: `## Introduction

- Between true solutions and suspensions lies a third kind of mixture — the **colloid**.
- **This topic:** what colloids are, how to recognise them, and their types.

## Definition

- **Colloid** — a mixture in which particles of one substance (2–500 nm across) are **dispersed** through another and do **not settle out**.
- The **dispersed phase** is spread through the **dispersion medium** (continuous phase).

## Solution vs colloid vs suspension

| Feature | Solution | Colloid | Suspension |
|---|---|---|---|
| Particle size | < 2 nm | 2–500 nm | > 500 nm |
| Settles on standing | no | no | yes |
| Scatters light (Tyndall) | no | yes | yes |
| Example | salt water | milk, fog | muddy water |

## The Tyndall effect

- **Tyndall effect** — the scattering of a beam of light by colloidal particles, making the light path visible (e.g. car headlights in fog, sunbeams through dusty air).
- True solutions do **not** show the Tyndall effect; colloids do. This is a simple test to tell them apart.

## Types of colloid

| Type | Dispersed phase | Medium | Example |
|---|---|---|---|
| Sol | solid | liquid | paint, ink |
| Gel | liquid | solid | jelly, cheese |
| Emulsion | liquid | liquid | milk, mayonnaise |
| Aerosol | liquid/solid | gas | fog, smoke |
| Foam | gas | liquid/solid | whipped cream |

## Hydrophilic and hydrophobic colloids

- **Hydrophilic** ("water-loving") colloids have polar surface groups that attract water and stay dispersed (e.g. proteins).
- **Hydrophobic** ("water-fearing") colloids repel water and need stabilisers such as soaps or detergents to stay dispersed.

## Common errors and misconceptions

- **Calling a colloid a solution** — colloid particles are larger and scatter light.
- **Expecting colloids to settle** — colloid particles stay suspended; suspension particles settle.
- **Milk is a solution** — milk is an emulsion (a colloid).`,
      workedExample: `**Task.** A student has three cloudy-looking liquids: salt water, milk and muddy river water. Describe how the Tyndall effect and standing can be used to classify each as a solution, colloid or suspension.

**Test 1 — Shine a light beam through each (Tyndall effect)**
- Salt water: the beam passes through invisibly → no scattering → **true solution**.
- Milk: the beam's path is clearly visible → scattering → **colloid**.
- Muddy water: the beam is scattered too → **colloid or suspension** (need the next test).

**Test 2 — Let each stand undisturbed**
- Salt water: stays clear → solution (confirmed).
- Milk: stays uniform, does not separate → **colloid** (confirmed).
- Muddy water: the mud settles to the bottom → **suspension**.

**Conclusion.** Salt water is a true solution (no Tyndall effect), milk is a colloid (Tyndall effect, no settling), and muddy water is a suspension (Tyndall effect and settles on standing).`,
      quiz: [
        { prompt: "A colloid has particles that are…", options: ["2–500 nm and do not settle", "less than 2 nm", "always settle out", "chemically bonded"], correctIndex: 0, explanation: "Colloid particles are intermediate in size and stay dispersed." },
        { prompt: "The scattering of light by colloidal particles is the…", options: ["Tyndall effect", "Raoult effect", "Henry effect", "Bohr effect"], correctIndex: 0, explanation: "The Tyndall effect makes the light path visible." },
        { prompt: "A true solution … the Tyndall effect.", options: ["does not show", "always shows", "reverses", "absorbs"], correctIndex: 0, explanation: "Only colloids and suspensions scatter the light." },
        { prompt: "Milk is an example of a…", options: ["emulsion (colloid)", "true solution", "suspension", "gas"], correctIndex: 0, explanation: "Milk is a liquid-in-liquid colloid." },
        { prompt: "Muddy water is a…", options: ["suspension", "true solution", "colloid that never settles", "gel"], correctIndex: 0, explanation: "Its large particles settle on standing." },
        { prompt: "A colloid of liquid dispersed in liquid is an…", options: ["emulsion", "aerosol", "gel", "sol"], correctIndex: 0, explanation: "Liquid-in-liquid = emulsion." },
        { prompt: "Fog and smoke are examples of…", options: ["aerosols", "gels", "sols", "foams"], correctIndex: 0, explanation: "Aerosol = liquid/solid dispersed in gas." },
        { prompt: "Jelly (a liquid trapped in a solid network) is a…", options: ["gel", "sol", "foam", "aerosol"], correctIndex: 0, explanation: "Liquid-in-solid = gel." },
        { prompt: "Whipped cream is an example of a…", options: ["foam", "sol", "gel", "emulsion"], correctIndex: 0, explanation: "Gas dispersed in liquid = foam." },
        { prompt: "Particles larger than about 500 nm that settle out form a…", options: ["suspension", "colloid", "solution", "gel"], correctIndex: 0, explanation: "Large particles that settle = suspension." },
        { prompt: "The continuous phase of a colloid is the…", options: ["dispersion medium", "dispersed phase", "precipitate", "solute only"], correctIndex: 0, explanation: "The dispersion medium is continuous." },
        { prompt: "A water-loving colloid is described as…", options: ["hydrophilic", "hydrophobic", "aerosol", "saturated"], correctIndex: 0, explanation: "Hydrophilic = water-loving." },
        { prompt: "Hydrophobic colloids need … to stay dispersed.", options: ["stabilisers such as soap", "heating", "more mud", "salt"], correctIndex: 0, explanation: "Emulsifiers/soaps stabilise them." },
        { prompt: "The simplest test to tell a colloid from a true solution is the…", options: ["Tyndall effect", "flame test", "pH test", "boiling test"], correctIndex: 0, explanation: "Colloids scatter light; solutions do not." },
        { prompt: "Colloid particles … on standing.", options: ["do not settle", "always settle quickly", "dissolve fully", "evaporate"], correctIndex: 0, explanation: "They remain suspended indefinitely." },
        { prompt: "Paint (solid dispersed in liquid) is a…", options: ["sol", "gel", "foam", "aerosol"], correctIndex: 0, explanation: "Solid-in-liquid = sol." },
        { prompt: "Which mixture is homogeneous at the particle level?", options: ["true solution", "colloid", "suspension", "emulsion"], correctIndex: 0, explanation: "Only true solutions are truly homogeneous." },
        { prompt: "You can SEE a light beam passing through fog because of…", options: ["the Tyndall effect", "osmosis", "Henry's law", "dilution"], correctIndex: 0, explanation: "Colloidal droplets scatter the light." },
        { prompt: "Mayonnaise is an example of a stabilised…", options: ["emulsion", "sol", "aerosol", "gas"], correctIndex: 0, explanation: "It is an oil-in-water emulsion." },
        { prompt: "Which statement is TRUE?", options: ["colloid particles scatter light but do not settle", "colloids always settle", "solutions scatter light", "suspensions are homogeneous"], correctIndex: 0, explanation: "Scattering without settling is characteristic of colloids." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a colloid and describe the Tyndall effect.", answerKey: "A colloid is a mixture in which particles (about 2–500 nm) of a dispersed phase are spread through a dispersion medium and do not settle out. The Tyndall effect is the scattering of a beam of light by colloidal particles, making the light path visible. Award marks for the definition and the description of the Tyndall effect.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which mixture will show the Tyndall effect but will NOT settle on standing?", options: ["a colloid (e.g. milk)", "a true solution (e.g. salt water)", "a suspension (e.g. muddy water)", "a pure liquid"], correctIndex: 0, answerKey: "Colloids scatter light and stay dispersed.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Fog, in which liquid droplets are dispersed in air, is classified as a(n):", options: ["aerosol", "emulsion", "gel", "sol"], correctIndex: 0, answerKey: "Liquid/solid in gas = aerosol.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Give one difference in particle size and one difference in behaviour between a colloid and a suspension.", answerKey: "Size: colloid particles are about 2–500 nm while suspension particles are larger than ~500 nm. Behaviour: colloid particles do not settle on standing, whereas suspension particles settle out. Award marks for one correct size difference and one behaviour difference.", marks: 2 },
        { type: "ESSAY", prompt: "Compare true solutions, colloids and suspensions in terms of particle size, whether they settle, and whether they scatter light, giving an example of each.", answerKey: "A full answer states: true solution — particles < 2 nm, do not settle, do not scatter light, example salt water; colloid — particles 2–500 nm, do not settle, scatter light (Tyndall effect), example milk or fog; suspension — particles > 500 nm, settle on standing, scatter light, example muddy water. Award marks for correct comparison across the three properties and one example each.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.3 Factors Affecting Solubility (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.03%3A_Factors_Affecting_Solubility)
      slug: "factors-affecting-solubility",
      title: "Factors Affecting Solubility",
      objective:
        "By the end of the topic, learners should be able to explain how the nature of solute and solvent, temperature and pressure affect solubility, and apply Henry's law to gases. (MoE Grade 11 Period I, CONTENTS 7.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Some substances dissolve easily, others hardly at all — and conditions change how much dissolves.
- **This topic:** the nature of solute and solvent, temperature, and pressure (Henry's law).

## Nature of solute and solvent — "like dissolves like"

- **Polar solvents** (water) dissolve **polar** solutes and **ionic** compounds.
- **Non-polar solvents** (oil, hexane) dissolve **non-polar** solutes (fats, iodine).
- Oil and water do not mix because one is polar and the other non-polar.

## Temperature

- The solubility of **most solids increases** as temperature rises.
- The solubility of **gases decreases** as temperature rises (warm water holds less dissolved gas — why warm rivers hold less oxygen).

## Pressure and Henry's law

- Pressure has almost no effect on solids and liquids but a large effect on **gases**.
- **Henry's law:** the solubility of a gas is directly proportional to its partial pressure above the liquid.

**C = k × P**

- C = concentration of dissolved gas; P = partial pressure of the gas; k = Henry's law constant (depends on gas, solvent and temperature).
- A fizzy drink fizzes when opened because releasing the pressure lowers gas solubility.

## Common errors and misconceptions

- **"Like dissolves like" reversed** — polar dissolves polar/ionic; non-polar dissolves non-polar.
- **Thinking all solubility rises with temperature** — gases become **less** soluble when heated.
- **Pressure strongly affects solid solubility** — pressure mainly affects **gas** solubility.`,
      workedExample: `**Task.** The Henry's law constant for carbon dioxide in water at 25 °C is k = 3.3 × 10⁻² mol/(dm³·atm). A bottle of fizzy drink is sealed under CO₂ at a partial pressure of 4.0 atm. (a) Calculate the concentration of dissolved CO₂. (b) When the bottle is opened, the CO₂ partial pressure above the drink falls to 4.0 × 10⁻⁴ atm. Explain what happens.

**Part (a) — Apply Henry's law**
1. C = k × P = (3.3 × 10⁻²) × 4.0.
2. C = 0.132 ≈ **0.13 mol/dm³** of dissolved CO₂.

**Part (b) — Opening the bottle**
1. New concentration C = (3.3 × 10⁻²) × (4.0 × 10⁻⁴) = 1.3 × 10⁻⁵ mol/dm³ — far lower.
2. Because the pressure has dropped, the water can hold far less CO₂, so the excess gas escapes as **bubbles (fizz)**.

**Conclusion.** Dissolved gas concentration is proportional to the pressure above the liquid; releasing the pressure sharply lowers solubility and the drink fizzes.`,
      quiz: [
        { prompt: "The rule that predicts which solvents dissolve which solutes is…", options: ["like dissolves like", "opposites attract", "hot dissolves cold", "heavy dissolves light"], correctIndex: 0, explanation: "Polar dissolves polar; non-polar dissolves non-polar." },
        { prompt: "Water (polar) best dissolves…", options: ["ionic and polar solutes", "oils", "waxes", "non-polar gases only"], correctIndex: 0, explanation: "Polar water dissolves polar and ionic solutes." },
        { prompt: "Oil does not dissolve in water because oil is…", options: ["non-polar", "ionic", "polar", "a gas"], correctIndex: 0, explanation: "Non-polar oil and polar water do not mix." },
        { prompt: "The solubility of most solids as temperature rises…", options: ["increases", "decreases", "stays constant", "becomes zero"], correctIndex: 0, explanation: "Most solids dissolve more when hot." },
        { prompt: "The solubility of gases as temperature rises…", options: ["decreases", "increases", "stays the same", "doubles"], correctIndex: 0, explanation: "Warm liquids hold less dissolved gas." },
        { prompt: "Pressure has the greatest effect on the solubility of…", options: ["gases", "solids", "ionic solids", "liquids"], correctIndex: 0, explanation: "Gas solubility depends strongly on pressure." },
        { prompt: "Henry's law states solubility of a gas is proportional to its…", options: ["partial pressure", "colour", "molar mass", "temperature only"], correctIndex: 0, explanation: "C = kP." },
        { prompt: "In C = kP, k is the…", options: ["Henry's law constant", "molar mass", "gas constant", "molality"], correctIndex: 0, explanation: "k is the Henry's law constant." },
        { prompt: "A fizzy drink fizzes when opened because…", options: ["pressure drops, lowering gas solubility", "temperature drops", "it becomes polar", "water evaporates"], correctIndex: 0, explanation: "Lower pressure means less dissolved CO₂." },
        { prompt: "Warm river water holds … dissolved oxygen than cold water.", options: ["less", "more", "the same", "no"], correctIndex: 0, explanation: "Gas solubility falls as temperature rises." },
        { prompt: "Iodine (non-polar) dissolves best in…", options: ["a non-polar solvent", "water", "salt water", "acid"], correctIndex: 0, explanation: "Like dissolves like." },
        { prompt: "Doubling the partial pressure of a gas … its solubility (Henry's law).", options: ["doubles", "halves", "does not change", "removes"], correctIndex: 0, explanation: "C = kP is directly proportional." },
        { prompt: "Which factor barely affects the solubility of a solid?", options: ["pressure", "temperature", "nature of solvent", "nature of solute"], correctIndex: 0, explanation: "Pressure has little effect on solids." },
        { prompt: "For k = 3.3 × 10⁻² mol/(dm³·atm) and P = 2.0 atm, dissolved gas C is…", options: ["6.6 × 10⁻² mol/dm³", "3.3 × 10⁻² mol/dm³", "1.65 × 10⁻² mol/dm³", "2.0 mol/dm³"], correctIndex: 0, explanation: "C = kP = 3.3e-2 × 2.0." },
        { prompt: "Ethanol dissolves in water because both are…", options: ["polar", "non-polar", "ionic", "gaseous"], correctIndex: 0, explanation: "Both are polar, so they mix." },
        { prompt: "A sealed warm soda loses fizz faster than a cold one because heating…", options: ["lowers gas solubility", "raises gas solubility", "adds CO₂", "makes it polar"], correctIndex: 0, explanation: "Warmer liquid holds less gas." },
        { prompt: "The Henry's law constant depends on the gas, the solvent and the…", options: ["temperature", "colour", "container shape", "day"], correctIndex: 0, explanation: "k varies with temperature." },
        { prompt: "Divers get 'the bends' when dissolved gases … as pressure falls quickly.", options: ["come out of solution", "dissolve more", "freeze", "react"], correctIndex: 0, explanation: "Lower pressure reduces gas solubility, forming bubbles." },
        { prompt: "Which solute would be LEAST soluble in water?", options: ["candle wax (non-polar)", "table salt", "sugar", "ammonia"], correctIndex: 0, explanation: "Non-polar wax does not dissolve in polar water." },
        { prompt: "The main factors affecting solubility are nature of solute/solvent, temperature and…", options: ["pressure", "colour", "mass number", "container"], correctIndex: 0, explanation: "Pressure (mainly for gases) is the third factor." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the principle 'like dissolves like' and use it to explain why salt dissolves in water but not in oil.", answerKey: "'Like dissolves like' means polar/ionic solutes dissolve in polar solvents and non-polar solutes dissolve in non-polar solvents. Salt is ionic and water is polar, so salt dissolves in water; oil is non-polar and cannot solvate the ions, so salt does not dissolve in oil. Award marks for the principle and its correct application.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "As temperature increases, the solubility of most gases in water:", options: ["decreases", "increases", "stays the same", "becomes infinite"], correctIndex: 0, answerKey: "Gas solubility falls as temperature rises.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Henry's law (C = kP) shows that the solubility of a gas is directly proportional to its:", options: ["partial pressure", "molar mass", "colour", "temperature"], correctIndex: 0, answerKey: "Solubility ∝ partial pressure of the gas.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why a bottle of carbonated drink fizzes when it is opened.", answerKey: "The drink is bottled under a high partial pressure of CO₂, so a lot of CO₂ is dissolved (Henry's law: C = kP). Opening the bottle drops the CO₂ pressure above the liquid, so the water can hold much less gas; the excess CO₂ comes out of solution as bubbles (fizz). Award marks for the high-pressure bottling, the pressure drop, and the escape of excess gas.", marks: 3 },
        { type: "ESSAY", prompt: "Discuss how the nature of the solute and solvent, temperature, and pressure each affect solubility, giving an example for each factor.", answerKey: "A full answer covers: (1) nature of solute/solvent — 'like dissolves like'; polar/ionic solutes dissolve in polar solvents (salt in water) and non-polar in non-polar (iodine in hexane); (2) temperature — most solids become more soluble when hot (sugar dissolves faster in hot tea) while gases become less soluble when hot (warm water holds less oxygen); (3) pressure — little effect on solids/liquids but large effect on gases via Henry's law (C = kP), e.g. fizzy drinks. Award marks for correct treatment and an example of each of the three factors.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 13.2 Saturated Solutions and Solubility (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/13%3A_Properties_of_Solutions/13.02%3A_Saturated_Solutions_and_Solubility)
      slug: "general-principles-of-solubility",
      title: "General Principles of Solubility",
      objective:
        "By the end of the topic, learners should be able to treat a saturated solution as a dynamic equilibrium, express solubility in mol/dm³ and g/dm³, and relate solubility to crystallisation and recrystallisation. (MoE Grade 11 Period I, CONTENTS 8.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- A saturated solution is not "dead" — dissolving and crystallising go on all the time at equal rates.
- **This topic:** saturation as equilibrium, units of solubility, and crystallisation as purification.

## A saturated solution is a dynamic equilibrium

- With excess undissolved solid present, two opposite processes happen at once:

solid solute ⇌ dissolved solute

- **Dissolving** (solid → solution) and **crystallising** (solution → solid) occur at **equal rates**, so the concentration stays constant. This is **dynamic equilibrium**.

## Expressing solubility in concentration terms

- Solubility can be given as **g/dm³** (grams of solute per litre of solution) or **mol/dm³** (moles per litre).
- Convert between them using the molar mass: mol/dm³ = (g/dm³) ÷ molar mass.

## Solubility and crystallisation

- **Crystallisation** — solute leaves solution as solid crystals when the solution becomes supersaturated (e.g. on cooling or evaporating).
- Cooling a hot saturated solution makes solubility fall; the excess solute crystallises out.

## Recrystallisation as a purification method

- **Recrystallisation** purifies a solid: dissolve it in the minimum hot solvent, filter off insoluble impurities, then cool slowly so the pure solute crystallises while soluble impurities stay in solution.
- Works because the wanted solid and its impurities have different solubilities.

## Common errors and misconceptions

- **Equilibrium means nothing happens** — dissolving and crystallising continue, but at equal rates.
- **Confusing g/dm³ and mol/dm³** — convert using the molar mass.
- **Recrystallisation removes all impurity** — impurities more soluble than the product stay in solution and are washed away; it does not work if impurity and product have similar solubilities.`,
      workedExample: `**Task.** The solubility of potassium nitrate, KNO₃ (molar mass 101 g/mol), at 25 °C is 316 g/dm³. (a) Express this solubility in mol/dm³. (b) Explain, using equilibrium, what happens if a saturated solution at 25 °C is cooled to 10 °C where the solubility is only 209 g/dm³.

**Part (a) — Convert g/dm³ to mol/dm³**
1. mol/dm³ = (g/dm³) ÷ molar mass = 316 ÷ 101.
2. Solubility = **3.13 mol/dm³**.

**Part (b) — Cooling the saturated solution**
1. At 25 °C the solution is saturated at 316 g/dm³ — dissolving and crystallising are balanced (dynamic equilibrium).
2. Cooling to 10 °C lowers the solubility to 209 g/dm³, so the solution now holds more solute than it can retain.
3. The excess, 316 − 209 = **107 g per dm³**, crystallises out until a new equilibrium (saturation at 10 °C) is reached.

**Conclusion.** Solubility is 3.13 mol/dm³ at 25 °C; cooling shifts the equilibrium so that about 107 g/dm³ of pure KNO₃ crystallises out.`,
      quiz: [
        { prompt: "In a saturated solution with excess solid, dissolving and crystallising occur at…", options: ["equal rates", "zero rate", "different phases", "no rate"], correctIndex: 0, explanation: "That balance is dynamic equilibrium." },
        { prompt: "A saturated solution in contact with excess solute is an example of…", options: ["dynamic equilibrium", "a suspension", "a colloid", "a gas law"], correctIndex: 0, explanation: "The two opposite rates are equal." },
        { prompt: "Solubility can be expressed in g/dm³ or…", options: ["mol/dm³", "grams only", "kelvin", "atm"], correctIndex: 0, explanation: "Both mass and molar units are used." },
        { prompt: "To convert g/dm³ to mol/dm³ you divide by the…", options: ["molar mass", "volume", "density", "temperature"], correctIndex: 0, explanation: "mol/dm³ = (g/dm³) ÷ molar mass." },
        { prompt: "Solute leaving solution as solid crystals is…", options: ["crystallisation", "dissolving", "boiling", "diffusion"], correctIndex: 0, explanation: "Crystallisation forms solid from solution." },
        { prompt: "Cooling a hot saturated solution usually causes solute to…", options: ["crystallise out", "dissolve more", "evaporate", "react"], correctIndex: 0, explanation: "Lower temperature lowers solubility." },
        { prompt: "Recrystallisation is a method of…", options: ["purification", "titration", "distillation", "electrolysis"], correctIndex: 0, explanation: "It purifies a solid." },
        { prompt: "In recrystallisation the solid is dissolved in the … hot solvent.", options: ["minimum amount of", "maximum amount of", "cold", "frozen"], correctIndex: 0, explanation: "Minimum hot solvent gives a saturated hot solution." },
        { prompt: "Recrystallisation works because the solid and impurities have different…", options: ["solubilities", "colours", "masses only", "smells"], correctIndex: 0, explanation: "Differing solubilities allow separation." },
        { prompt: "During recrystallisation, soluble impurities…", options: ["stay in solution", "crystallise first", "evaporate", "react"], correctIndex: 0, explanation: "They remain dissolved and are washed away." },
        { prompt: "At equilibrium in a saturated solution, the concentration…", options: ["stays constant", "keeps rising", "keeps falling", "is zero"], correctIndex: 0, explanation: "Equal rates keep concentration constant." },
        { prompt: "316 g/dm³ of KNO₃ (M = 101) is about … mol/dm³.", options: ["3.13", "31.3", "0.31", "101"], correctIndex: 0, explanation: "316 ÷ 101 ≈ 3.13." },
        { prompt: "Evaporating the solvent from a solution makes it…", options: ["more concentrated, then crystallise", "more dilute", "colder", "a gas"], correctIndex: 0, explanation: "Removing solvent forces crystallisation." },
        { prompt: "A hot saturated solution cooled slowly gives…", options: ["pure crystals", "a colloid", "a gas", "a gel"], correctIndex: 0, explanation: "Slow cooling grows pure crystals." },
        { prompt: "The first step of recrystallisation is to…", options: ["dissolve the solid in hot solvent", "cool it", "filter cold", "boil it dry"], correctIndex: 0, explanation: "Dissolve in minimum hot solvent first." },
        { prompt: "Filtering the HOT solution during recrystallisation removes…", options: ["insoluble impurities", "the product", "all the solvent", "the crystals"], correctIndex: 0, explanation: "Insoluble impurities are filtered off while hot." },
        { prompt: "Solubility given as mol/dm³ is the amount of solute per litre of…", options: ["solution", "solvent", "gas", "container"], correctIndex: 0, explanation: "mol/dm³ is per litre of solution." },
        { prompt: "Which shows dynamic equilibrium symbolically?", options: ["solid ⇌ dissolved solute", "solid → gas", "solute + heat = colour", "A + B = C only"], correctIndex: 0, explanation: "The double arrow shows two opposite processes." },
        { prompt: "The amount of solid that crystallises on cooling equals the … in solubility.", options: ["decrease", "increase", "molar mass", "density"], correctIndex: 0, explanation: "The excess above the new solubility crystallises." },
        { prompt: "Recrystallisation gives a … product than the starting solid.", options: ["purer", "less pure", "gaseous", "coloured"], correctIndex: 0, explanation: "The point is to increase purity." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by describing a saturated solution as a dynamic equilibrium.", answerKey: "With excess undissolved solute present, the solute keeps dissolving while dissolved solute keeps crystallising; these two opposite processes happen at equal rates, so the concentration of the solution stays constant. This balance of equal opposing rates is a dynamic equilibrium. Award marks for the two opposing processes, equal rates, and constant concentration.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "The solubility of a salt is 250 g/dm³ and its molar mass is 100 g/mol. Its solubility in mol/dm³ is:", options: ["2.5 mol/dm³", "25 mol/dm³", "0.4 mol/dm³", "100 mol/dm³"], correctIndex: 0, answerKey: "250 ÷ 100 = 2.5 mol/dm³.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Recrystallisation purifies a solid mainly because the product and its impurities differ in:", options: ["solubility", "colour", "smell", "density"], correctIndex: 0, answerKey: "Different solubilities let the pure solid crystallise while impurities stay dissolved.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Outline the steps used to purify an impure solid by recrystallisation.", answerKey: "Dissolve the impure solid in the minimum volume of hot solvent to make a saturated hot solution; filter the hot solution to remove insoluble impurities; cool the filtrate slowly so pure crystals of the product form while soluble impurities stay in solution; filter off the crystals, wash and dry them. Award marks for the dissolve/hot-filter/cool-crystallise/filter sequence.", marks: 3 },
        { type: "ESSAY", prompt: "Using the idea of solubility changing with temperature, explain how cooling a hot saturated solution leads to crystallisation, and why this makes recrystallisation a good purification method.", answerKey: "A strong answer explains that solubility of most solids falls as temperature drops, so a solution that is saturated when hot holds more solute than it can retain when cooled; the excess solute comes out of solution as pure crystals (crystallisation) until a new saturation equilibrium is reached. Recrystallisation exploits this: the wanted solid crystallises while impurities, present in smaller amounts and often more soluble, remain dissolved and are washed away, so the recovered crystals are purer. Award marks for the temperature–solubility link, the crystallisation of excess solute, and the separation of impurities.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Introductory Chemistry CK-12) — 16.4 How Temperature Influences Solubility (https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/Introductory_Chemistry_(CK-12)/16%3A_Solutions/16.04%3A_How_Temperature_Influences_Solubility)
      slug: "solubility-curves",
      title: "Solubility Curves and Their Uses",
      objective:
        "By the end of the topic, learners should be able to draw and read a solubility curve and use it to find masses that dissolve or crystallise at given temperatures. (MoE Grade 11 Period I, CONTENTS 9.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- A **solubility curve** is a graph that shows how the solubility of a substance changes with temperature.
- **This topic:** how to draw, read and use solubility curves.

## What a solubility curve shows

- **x-axis:** temperature (°C). **y-axis:** solubility in **grams of solute per 100 g of water**.
- Each point on the curve gives the mass that just **saturates** 100 g of water at that temperature.

## Reading the graph

- **On the curve** — the solution is exactly **saturated**.
- **Below the curve** — the solution is **unsaturated** (more could dissolve).
- **Above the curve** — the solution is **supersaturated** (unstable).

## Shapes of the curves

- Most solids (KNO₃, KCl) have curves that **rise steeply** — solubility increases a lot with temperature. For example, KNO₃ is about 48 g/100 g water at 30 °C and about 107 g/100 g at 60 °C.
- Some solids (NaCl) have almost **flat** curves — solubility changes little with temperature.
- **Gases** have curves that **fall** — gas solubility decreases as temperature rises.

\`\`\`svg A rising solubility curve
<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Solubility curve rising with temperature">
  <line x1="35" y1="140" x2="220" y2="140" stroke="#334155"/>
  <line x1="35" y1="140" x2="35" y2="20" stroke="#334155"/>
  <path d="M40 132 Q120 120 210 40" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="120" y="160" font-size="9" text-anchor="middle" fill="#334155">Temperature (°C)</text>
  <text x="14" y="80" font-size="9" text-anchor="middle" fill="#334155" transform="rotate(-90 14 80)">g / 100 g water</text>
  <text x="150" y="60" font-size="8" fill="#2563eb">saturated on the line</text>
</svg>
\`\`\`

## Uses of solubility curves

- Find the mass that dissolves at any temperature.
- Work out how much solute **crystallises** when a saturated solution is cooled (mass at higher T − mass at lower T).
- Compare the solubilities of different salts on the same graph.

## Common errors and misconceptions

- **Reading the wrong axis** — solubility is on the y-axis, temperature on the x-axis.
- **Forgetting the 100 g basis** — values are per 100 g of water; scale up for other masses.
- **Assuming all curves rise** — gas curves fall with temperature.`,
      workedExample: `**Task.** From a solubility curve, potassium nitrate, KNO₃, dissolves to 110 g per 100 g water at 60 °C and 32 g per 100 g water at 20 °C. (a) A saturated solution of KNO₃ in 100 g of water is prepared at 60 °C and then cooled to 20 °C. What mass of KNO₃ crystallises? (b) What mass would crystallise from 200 g of water treated the same way?

**Part (a) — Using 100 g of water**
1. Mass dissolved at 60 °C = 110 g (saturated).
2. Mass that can stay dissolved at 20 °C = 32 g.
3. Mass crystallising = 110 − 32 = **78 g**.

**Part (b) — Scaling to 200 g of water**
1. The curve is per 100 g water; 200 g is twice as much.
2. Mass crystallising = 2 × 78 = **156 g**.

**Conclusion.** Cooling the saturated solution from 60 °C to 20 °C drops the solubility, so 78 g of KNO₃ crystallises per 100 g of water (156 g from 200 g of water).`,
      quiz: [
        { prompt: "A solubility curve plots solubility against…", options: ["temperature", "pressure", "time", "volume"], correctIndex: 0, explanation: "Temperature is the x-axis." },
        { prompt: "The y-axis of a solubility curve usually shows grams of solute per … of water.", options: ["100 g", "1 g", "1 kg", "1 dm³"], correctIndex: 0, explanation: "Solubility is per 100 g of water." },
        { prompt: "A point ON the curve represents a … solution.", options: ["saturated", "unsaturated", "supersaturated", "dilute"], correctIndex: 0, explanation: "On the line means exactly saturated." },
        { prompt: "A point BELOW the curve represents a … solution.", options: ["unsaturated", "saturated", "supersaturated", "solid"], correctIndex: 0, explanation: "Below means more could dissolve." },
        { prompt: "A point ABOVE the curve represents a … solution.", options: ["supersaturated", "saturated", "unsaturated", "dilute"], correctIndex: 0, explanation: "Above means more than the maximum is dissolved." },
        { prompt: "Most solids have solubility curves that…", options: ["rise with temperature", "fall with temperature", "are flat", "are vertical"], correctIndex: 0, explanation: "Solubility of most solids increases with temperature." },
        { prompt: "Sodium chloride's solubility curve is nearly…", options: ["flat", "steeply rising", "falling", "vertical"], correctIndex: 0, explanation: "NaCl solubility changes little with temperature." },
        { prompt: "Gas solubility curves…", options: ["fall with temperature", "rise with temperature", "are flat", "are vertical"], correctIndex: 0, explanation: "Gases are less soluble when warm." },
        { prompt: "If 110 g dissolves at 60 °C and 32 g at 20 °C, cooling crystallises…", options: ["78 g", "142 g", "32 g", "110 g"], correctIndex: 0, explanation: "110 − 32 = 78 g per 100 g water." },
        { prompt: "Solubility curves can be used to find the mass that … on cooling.", options: ["crystallises", "evaporates", "boils", "reacts"], correctIndex: 0, explanation: "The drop in solubility gives the crystal mass." },
        { prompt: "To use a curve for 200 g of water instead of 100 g, you…", options: ["double the values", "halve the values", "keep them the same", "square them"], correctIndex: 0, explanation: "Scale linearly with the mass of water." },
        { prompt: "The steeper the solubility curve, the … the effect of temperature.", options: ["greater", "smaller", "zero", "opposite"], correctIndex: 0, explanation: "A steep curve means solubility changes a lot." },
        { prompt: "KNO₃ solubility at 30 °C is about…", options: ["48 g/100 g", "5 g/100 g", "200 g/100 g", "1 g/100 g"], correctIndex: 0, explanation: "About 48 g per 100 g water at 30 °C." },
        { prompt: "Reading straight up from a temperature to the curve gives the…", options: ["saturation solubility", "boiling point", "density", "pressure"], correctIndex: 0, explanation: "The curve height is the solubility." },
        { prompt: "Two salts can be compared by plotting their curves on…", options: ["the same graph", "different axes", "a bar chart", "a pie chart"], correctIndex: 0, explanation: "Overlaying curves compares solubilities." },
        { prompt: "A solution at a point above the curve will tend to…", options: ["crystallise the excess", "dissolve more", "boil", "freeze"], correctIndex: 0, explanation: "Supersaturated solutions crystallise." },
        { prompt: "The mass crystallising on cooling equals the solubility at high T … the solubility at low T.", options: ["minus", "plus", "times", "divided by"], correctIndex: 0, explanation: "Subtract the lower solubility from the higher." },
        { prompt: "Which axis is temperature on?", options: ["horizontal (x)", "vertical (y)", "neither", "both"], correctIndex: 0, explanation: "Temperature is plotted horizontally." },
        { prompt: "A flat curve means the salt's solubility is … over the temperature range.", options: ["nearly constant", "increasing fast", "decreasing fast", "zero"], correctIndex: 0, explanation: "Flat = little change." },
        { prompt: "Solubility curves are drawn from … data.", options: ["experimental", "guessed", "random", "theoretical only"], correctIndex: 0, explanation: "They are plotted from measured solubilities." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State what the x-axis and y-axis of a solubility curve represent, and explain what a point lying below the curve means.", answerKey: "The x-axis is temperature (°C) and the y-axis is solubility in grams of solute per 100 g of water. A point below the curve represents an unsaturated solution — it contains less solute than the maximum, so more solute could still dissolve at that temperature. Award marks for both axes and the meaning of a point below the curve.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "On a solubility curve, a point that lies exactly on the line represents a solution that is:", options: ["saturated", "unsaturated", "supersaturated", "boiling"], correctIndex: 0, answerKey: "Points on the curve are saturated.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A salt dissolves to 90 g/100 g water at 50 °C and 30 g/100 g water at 10 °C. Cooling a saturated 100 g-water solution from 50 °C to 10 °C crystallises:", options: ["60 g", "120 g", "30 g", "90 g"], correctIndex: 0, answerKey: "90 − 30 = 60 g crystallise.", marks: 2 },
        { type: "SHORT_ANSWER", prompt: "Explain why the solubility curve for a gas slopes downwards while the curve for most solids slopes upwards.", answerKey: "For most solids, solubility increases with temperature, so their curves slope upwards. For gases, solubility decreases as temperature rises (warm liquids hold less dissolved gas), so their curves slope downwards. Award marks for the correct trend and slope for both solids and gases.", marks: 2 },
        { type: "ESSAY", prompt: "Describe how a solubility curve is drawn from experimental data and explain two ways it can be used.", answerKey: "A full answer explains that saturated solutions are prepared and the mass of solute dissolving in 100 g of water is measured at several temperatures; these values are plotted (solubility on the y-axis, temperature on the x-axis) and joined to form the curve. Two uses: (1) reading off the mass that saturates 100 g water at any temperature; (2) calculating the mass of solute that crystallises when a saturated solution is cooled (solubility at the higher temperature minus solubility at the lower temperature). Other valid uses include comparing salts and identifying saturated/unsaturated/supersaturated regions. Award marks for the data-plotting method and two correct uses.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Physical & Theoretical Chemistry, Supplemental Modules) — Solubility Rules (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Solubilty/Solubility_Rules)
      slug: "solubility-of-ionic-substances",
      title: "Solubility of Ionic Substances",
      objective:
        "By the end of the topic, learners should be able to apply the solubility rules to predict whether an ionic compound is soluble or insoluble in water. (MoE Grade 11 Period I, CONTENTS 10.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Not all ionic compounds dissolve in water — a set of **solubility rules** predicts which do.
- **This topic:** the rules for soluble and insoluble salts and their main exceptions.

## Soluble salts (dissolve in water)

- **All nitrates (NO₃⁻)** are soluble — no common exceptions.
- **All Group 1 (Na⁺, K⁺, Li⁺) and ammonium (NH₄⁺) salts** are soluble.
- **Most chlorides, bromides and iodides (Cl⁻, Br⁻, I⁻)** are soluble — **except** those of Ag⁺, Pb²⁺ and Hg₂²⁺ (AgCl, PbCl₂, Hg₂Cl₂ are insoluble).
- **Most sulfates (SO₄²⁻)** are soluble — **except** BaSO₄, PbSO₄, CaSO₄ and SrSO₄.

## Insoluble salts (do not dissolve)

- **Most carbonates (CO₃²⁻), phosphates (PO₄³⁻) and sulfides (S²⁻)** are insoluble — **except** those of Group 1 and ammonium.
- **Most hydroxides (OH⁻)** are insoluble — **except** Group 1 hydroxides and (partly) Ba(OH)₂ and Ca(OH)₂.

| Ion | General rule | Main exceptions |
|---|---|---|
| NO₃⁻ | soluble | none |
| Group 1, NH₄⁺ | soluble | none |
| Cl⁻, Br⁻, I⁻ | soluble | Ag⁺, Pb²⁺, Hg₂²⁺ |
| SO₄²⁻ | soluble | Ba²⁺, Pb²⁺, Ca²⁺, Sr²⁺ |
| CO₃²⁻, PO₄³⁻, S²⁻ | insoluble | Group 1, NH₄⁺ |
| OH⁻ | insoluble | Group 1, Ba²⁺, Ca²⁺ (partly) |

## Using the rules

- Rules are applied **in order**; a "soluble" ion normally wins unless an exception applies.
- The rules predict whether mixing two solutions will form a **precipitate**.

## Common errors and misconceptions

- **Thinking all salts dissolve** — many carbonates, hydroxides and sulfides do not.
- **Forgetting the halide exceptions** — silver and lead halides are insoluble.
- **Ignoring Group 1 override** — Na₂CO₃ is soluble even though most carbonates are not.`,
      workedExample: `**Task.** Use the solubility rules to decide whether each of these compounds is soluble or insoluble in water, giving the rule used: (a) KNO₃, (b) AgCl, (c) BaSO₄, (d) Na₂CO₃, (e) Fe(OH)₃.

**(a) KNO₃**
- Contains K⁺ (Group 1) and NO₃⁻ (nitrate). Both rules say soluble → **soluble**.

**(b) AgCl**
- Chlorides are usually soluble, but Ag⁺ is an exception → **insoluble**.

**(c) BaSO₄**
- Sulfates are usually soluble, but Ba²⁺ is an exception → **insoluble**.

**(d) Na₂CO₃**
- Carbonates are usually insoluble, but Na⁺ is Group 1 (always soluble) → **soluble**.

**(e) Fe(OH)₃**
- Hydroxides are usually insoluble, and Fe³⁺ is not an exception → **insoluble**.

**Conclusion.** KNO₃ and Na₂CO₃ dissolve; AgCl, BaSO₄ and Fe(OH)₃ do not. The Group 1 and nitrate rules override the "insoluble" rules for carbonates.`,
      quiz: [
        { prompt: "All nitrates are…", options: ["soluble", "insoluble", "gases", "coloured"], correctIndex: 0, explanation: "Nitrates are soluble with no common exceptions." },
        { prompt: "All Group 1 (Na⁺, K⁺) and ammonium salts are…", options: ["soluble", "insoluble", "solid gases", "acids"], correctIndex: 0, explanation: "Group 1 and NH₄⁺ salts are always soluble." },
        { prompt: "Most chlorides are soluble EXCEPT those of…", options: ["Ag⁺, Pb²⁺, Hg₂²⁺", "Na⁺, K⁺", "NH₄⁺", "nitrates"], correctIndex: 0, explanation: "Silver, lead and mercury(I) halides are insoluble." },
        { prompt: "AgCl is…", options: ["insoluble", "soluble", "a gas", "an acid"], correctIndex: 0, explanation: "Silver chloride is an insoluble exception." },
        { prompt: "Most sulfates are soluble EXCEPT those of…", options: ["Ba²⁺, Pb²⁺, Ca²⁺, Sr²⁺", "Na⁺, K⁺", "NO₃⁻", "NH₄⁺"], correctIndex: 0, explanation: "Barium, lead, calcium and strontium sulfates are insoluble." },
        { prompt: "BaSO₄ is…", options: ["insoluble", "soluble", "a gas", "a nitrate"], correctIndex: 0, explanation: "Barium sulfate is an insoluble exception." },
        { prompt: "Most carbonates are…", options: ["insoluble", "soluble", "gaseous", "acidic"], correctIndex: 0, explanation: "Carbonates are insoluble except Group 1 and NH₄⁺." },
        { prompt: "Na₂CO₃ is…", options: ["soluble", "insoluble", "a gas", "an oxide"], correctIndex: 0, explanation: "Group 1 override makes it soluble." },
        { prompt: "Most hydroxides are…", options: ["insoluble", "soluble", "gases", "salts of nitric acid"], correctIndex: 0, explanation: "Hydroxides are insoluble except Group 1 (and partly Ba, Ca)." },
        { prompt: "NaOH is…", options: ["soluble", "insoluble", "a gas", "a carbonate"], correctIndex: 0, explanation: "Group 1 hydroxides are soluble." },
        { prompt: "Most phosphates and sulfides are…", options: ["insoluble", "soluble", "gaseous", "acidic"], correctIndex: 0, explanation: "Insoluble except Group 1 and ammonium." },
        { prompt: "PbCl₂ is…", options: ["insoluble", "soluble", "a gas", "a nitrate"], correctIndex: 0, explanation: "Lead chloride is an insoluble halide exception." },
        { prompt: "KI (potassium iodide) is…", options: ["soluble", "insoluble", "a gas", "an oxide"], correctIndex: 0, explanation: "Group 1 salts are soluble." },
        { prompt: "Which pair are both soluble?", options: ["NaCl and KNO₃", "AgCl and BaSO₄", "CaCO₃ and Fe(OH)₃", "PbSO₄ and AgBr"], correctIndex: 0, explanation: "Group 1 and nitrate salts are soluble." },
        { prompt: "Which compound is insoluble?", options: ["CaCO₃", "NaNO₃", "KCl", "(NH₄)₂SO₄"], correctIndex: 0, explanation: "Calcium carbonate is insoluble." },
        { prompt: "Solubility rules help predict the formation of a…", options: ["precipitate", "gas only", "colour only", "buffer"], correctIndex: 0, explanation: "They tell you if an insoluble product forms." },
        { prompt: "The rule that overrides most others for carbonates is the … rule.", options: ["Group 1 / ammonium soluble", "sulfate", "halide", "hydroxide"], correctIndex: 0, explanation: "Group 1 and NH₄⁺ salts are always soluble." },
        { prompt: "AgNO₃ is…", options: ["soluble", "insoluble", "a gas", "a hydroxide"], correctIndex: 0, explanation: "All nitrates, including silver nitrate, are soluble." },
        { prompt: "Which is an insoluble hydroxide?", options: ["Fe(OH)₃", "NaOH", "KOH", "LiOH"], correctIndex: 0, explanation: "Iron(III) hydroxide is insoluble; Group 1 hydroxides are soluble." },
        { prompt: "CaSO₄ is best described as…", options: ["insoluble (exception)", "soluble", "a gas", "a nitrate"], correctIndex: 0, explanation: "Calcium sulfate is one of the insoluble sulfate exceptions." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the solubility rule for chlorides and give two exceptions.", answerKey: "Most chlorides are soluble in water, with the exceptions of silver chloride (AgCl), lead(II) chloride (PbCl₂) and mercury(I) chloride (Hg₂Cl₂), which are insoluble. Award a mark for the general rule and marks for two correct exceptions.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of these salts is INSOLUBLE in water?", options: ["barium sulfate (BaSO₄)", "sodium chloride (NaCl)", "potassium nitrate (KNO₃)", "ammonium sulfate ((NH₄)₂SO₄)"], correctIndex: 0, answerKey: "Ba²⁺ is a sulfate exception, so BaSO₄ is insoluble.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Sodium carbonate (Na₂CO₃) is soluble because:", options: ["all Group 1 salts are soluble", "all carbonates are soluble", "it is a nitrate", "it is a hydroxide"], correctIndex: 0, answerKey: "The Group 1 rule overrides the insoluble carbonate rule.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Predict whether silver nitrate and calcium carbonate are soluble or insoluble in water, giving a reason for each.", answerKey: "Silver nitrate (AgNO₃) is soluble because all nitrates are soluble. Calcium carbonate (CaCO₃) is insoluble because most carbonates are insoluble and calcium is not a Group 1 or ammonium exception. Award marks for each correct prediction with a valid reason.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the solubility rules are used to predict whether an ionic compound will dissolve in water, using at least three worked examples that include an exception.", answerKey: "A strong answer states the main rules (nitrates and Group 1/ammonium salts soluble; most chlorides/bromides/iodides soluble except Ag⁺, Pb²⁺, Hg₂²⁺; most sulfates soluble except Ba²⁺, Pb²⁺, Ca²⁺, Sr²⁺; most carbonates, phosphates, sulfides and hydroxides insoluble except Group 1/ammonium), notes that rules are applied in order with soluble rules usually overriding, and works examples such as KNO₃ (soluble), AgCl (insoluble halide exception), BaSO₄ (insoluble sulfate exception) and Na₂CO₃ (soluble by the Group 1 override). Award marks for a correct statement of rules, the ordering/override idea, and three correct worked examples including an exception.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Inorganic Chemistry, Supplemental Modules) — Precipitation Reactions (https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Descriptive_Chemistry/Main_Group_Reactions/Reactions_in_Aqueous_Solutions/Precipitation_Reactions)
      slug: "precipitation-and-quantitative-analysis",
      title: "Precipitation and Quantitative Analysis",
      objective:
        "By the end of the topic, learners should be able to describe precipitation reactions, write molecular, complete-ionic and net-ionic equations, identify spectator ions, and use precipitation in analysis. (MoE Grade 11 Period I, CONTENTS 11.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Mixing two solutions can produce an insoluble solid — a **precipitate**.
- **This topic:** precipitation reactions, the three types of equation, and their use in analysis.

## Precipitation reactions

- **Precipitate** — an insoluble ionic solid that forms when certain cations and anions meet in solution.
- A **precipitation reaction** is a **double-replacement** reaction: the ions "swap partners"; a precipitate forms only if one product is insoluble (by the solubility rules).

## The three equations

Using silver nitrate + sodium chloride as the example:

1. **Molecular (full) equation** — all species as compounds:
AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)

2. **Complete ionic equation** — soluble ionic compounds written as separate ions:
Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s) + Na⁺(aq) + NO₃⁻(aq)

3. **Net ionic equation** — spectator ions removed:
Ag⁺(aq) + Cl⁻(aq) → AgCl(s)

- **Spectator ions** — ions that appear unchanged on both sides (here Na⁺ and NO₃⁻); they take no part in the reaction.

## Uses in analysis

- **Qualitative analysis** — a precipitate of known colour identifies an ion (e.g. white AgCl confirms Cl⁻; white BaSO₄ confirms SO₄²⁻).
- **Quantitative analysis (gravimetric)** — the precipitate is filtered, dried and weighed to find how much of an ion was present.

| Test ion added | Reagent | Precipitate | Colour |
|---|---|---|---|
| Cl⁻ | AgNO₃ | AgCl | white |
| SO₄²⁻ | BaCl₂ | BaSO₄ | white |
| Fe³⁺ | NaOH | Fe(OH)₃ | red-brown |
| Cu²⁺ | NaOH | Cu(OH)₂ | blue |

## Common errors and misconceptions

- **Leaving spectator ions in the net equation** — remove ions unchanged on both sides.
- **Forgetting state symbols** — mark the precipitate (s) and dissolved species (aq).
- **Assuming every mix gives a precipitate** — only if a product is insoluble by the rules.`,
      workedExample: `**Task.** Barium chloride solution is mixed with sodium sulfate solution and a white precipitate forms. (a) Identify the precipitate. (b) Write the molecular, complete-ionic and net-ionic equations. (c) Name the spectator ions and explain how this reaction confirms the presence of sulfate ions.

**Part (a) — The precipitate**
- Sulfates are soluble except BaSO₄, so the white solid is **barium sulfate, BaSO₄**.

**Part (b) — The equations**
- Molecular: BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)
- Complete ionic: Ba²⁺(aq) + 2Cl⁻(aq) + 2Na⁺(aq) + SO₄²⁻(aq) → BaSO₄(s) + 2Na⁺(aq) + 2Cl⁻(aq)
- Net ionic: Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)

**Part (c) — Spectator ions and the test**
- Spectator ions: **Na⁺ and Cl⁻** (unchanged on both sides).
- Adding Ba²⁺ (as BaCl₂) to an unknown solution gives a white precipitate of BaSO₄ only if sulfate ions are present, so the white precipitate **confirms SO₄²⁻**.`,
      quiz: [
        { prompt: "An insoluble solid formed on mixing two solutions is a…", options: ["precipitate", "solvent", "spectator", "colloid"], correctIndex: 0, explanation: "That solid is a precipitate." },
        { prompt: "A precipitation reaction is a … reaction.", options: ["double-replacement", "combustion", "single-displacement", "decomposition"], correctIndex: 0, explanation: "The ions swap partners." },
        { prompt: "A precipitate forms only if one product is…", options: ["insoluble", "soluble", "a gas", "a liquid"], correctIndex: 0, explanation: "An insoluble product precipitates." },
        { prompt: "Ions unchanged on both sides of an ionic equation are…", options: ["spectator ions", "precipitates", "solvents", "reactants only"], correctIndex: 0, explanation: "Spectator ions take no part." },
        { prompt: "The net ionic equation shows only the ions that…", options: ["form the precipitate", "are spectators", "are gases", "do not react"], correctIndex: 0, explanation: "It shows the actual reaction." },
        { prompt: "AgNO₃ + NaCl → AgCl + NaNO₃ is the … equation.", options: ["molecular", "net ionic", "complete ionic", "half"], correctIndex: 0, explanation: "Compounds are written whole." },
        { prompt: "The net ionic equation for AgNO₃ + NaCl is…", options: ["Ag⁺ + Cl⁻ → AgCl", "Na⁺ + NO₃⁻ → NaNO₃", "Ag + Na → AgNa", "Cl⁻ + NO₃⁻ → ClNO₃"], correctIndex: 0, explanation: "Silver and chloride form the precipitate." },
        { prompt: "In AgNO₃ + NaCl, the spectator ions are…", options: ["Na⁺ and NO₃⁻", "Ag⁺ and Cl⁻", "Ag⁺ and NO₃⁻", "Na⁺ and Cl⁻"], correctIndex: 0, explanation: "They appear unchanged on both sides." },
        { prompt: "A white precipitate with AgNO₃ confirms the ion…", options: ["Cl⁻", "SO₄²⁻", "Na⁺", "NO₃⁻"], correctIndex: 0, explanation: "AgCl is a white precipitate testing for chloride." },
        { prompt: "A white precipitate with BaCl₂ confirms the ion…", options: ["SO₄²⁻", "Cl⁻", "K⁺", "NO₃⁻"], correctIndex: 0, explanation: "BaSO₄ is white, confirming sulfate." },
        { prompt: "Iron(III) ions give a … precipitate with sodium hydroxide.", options: ["red-brown", "white", "blue", "green"], correctIndex: 0, explanation: "Fe(OH)₃ is red-brown." },
        { prompt: "Copper(II) ions give a … precipitate with sodium hydroxide.", options: ["blue", "white", "red-brown", "yellow"], correctIndex: 0, explanation: "Cu(OH)₂ is blue." },
        { prompt: "Weighing a filtered, dried precipitate is part of … analysis.", options: ["quantitative (gravimetric)", "qualitative only", "flame", "titration"], correctIndex: 0, explanation: "Gravimetric analysis weighs the precipitate." },
        { prompt: "Using a coloured precipitate to identify an ion is … analysis.", options: ["qualitative", "quantitative", "volumetric", "spectroscopic"], correctIndex: 0, explanation: "Identifying an ion is qualitative." },
        { prompt: "The state symbol for a precipitate is…", options: ["(s)", "(aq)", "(l)", "(g)"], correctIndex: 0, explanation: "A precipitate is a solid, (s)." },
        { prompt: "In a complete ionic equation, soluble ionic compounds are written as…", options: ["separate ions", "whole molecules", "gases", "precipitates"], correctIndex: 0, explanation: "Dissolved strong electrolytes are shown as ions." },
        { prompt: "To get the net ionic equation you … the spectator ions.", options: ["cancel", "add", "double", "square"], correctIndex: 0, explanation: "Cancel ions unchanged on both sides." },
        { prompt: "Precipitation can be used to … an ion from seawater.", options: ["extract", "evaporate", "boil", "melt"], correctIndex: 0, explanation: "Forming a precipitate extracts the ion." },
        { prompt: "Which mixture would give NO precipitate?", options: ["NaCl + KNO₃", "AgNO₃ + NaCl", "BaCl₂ + Na₂SO₄", "NaOH + CuSO₄"], correctIndex: 0, explanation: "All products (NaNO₃, KCl) are soluble." },
        { prompt: "The molecular equation BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl needs the coefficient 2 before…", options: ["NaCl", "BaSO₄", "BaCl₂", "Na₂SO₄"], correctIndex: 0, explanation: "Two NaCl balance the sodium and chloride." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a precipitate and a spectator ion.", answerKey: "A precipitate is an insoluble ionic solid that forms when certain cations and anions combine in aqueous solution. A spectator ion is an ion that appears unchanged on both sides of the ionic equation and takes no part in the reaction. Award marks for each correct definition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The net ionic equation for the reaction of AgNO₃(aq) with NaCl(aq) is:", options: ["Ag⁺(aq) + Cl⁻(aq) → AgCl(s)", "Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)", "Ag⁺ + Na⁺ → AgNa", "Cl⁻ + NO₃⁻ → ClNO₃"], correctIndex: 0, answerKey: "Only Ag⁺ and Cl⁻ react to form the AgCl precipitate.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Adding barium chloride to a solution gives a white precipitate. This confirms the presence of:", options: ["sulfate ions (SO₄²⁻)", "chloride ions (Cl⁻)", "sodium ions (Na⁺)", "nitrate ions (NO₃⁻)"], correctIndex: 0, answerKey: "White BaSO₄ confirms sulfate ions.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the molecular and net ionic equations for the reaction between lead(II) nitrate and potassium iodide, which forms a yellow precipitate of lead(II) iodide.", answerKey: "Molecular: Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq). Net ionic: Pb²⁺(aq) + 2I⁻(aq) → PbI₂(s). Spectator ions K⁺ and NO₃⁻ are removed. Award marks for a correctly balanced molecular equation and the correct net ionic equation.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how precipitation reactions are used in the qualitative and quantitative analysis of ions, illustrating your answer with the silver-halide and barium-sulfate tests.", answerKey: "A full answer explains that in qualitative analysis a reagent is added to an unknown and the colour/formation of a precipitate identifies the ion — e.g. adding AgNO₃ gives a white precipitate of AgCl confirming chloride ions, and adding BaCl₂ gives a white precipitate of BaSO₄ confirming sulfate ions. In quantitative (gravimetric) analysis the precipitate is filtered, washed, dried and weighed, and the mass is used to calculate the amount of the ion originally present. It should note that reactions are written as molecular, complete-ionic and net-ionic equations, and that the tests rely on the solubility rules. Award marks for the qualitative use with the two named tests, the quantitative/gravimetric use, and reference to the solubility basis.", marks: 6 },
      ],
    },
  ],
};
