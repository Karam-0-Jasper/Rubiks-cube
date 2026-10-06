import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Chemistry, Grade 11,
// Semester Two, Period VI, which carries TWO topic blocks: TOPIC 1 CHEMICAL
// EQUILIBRIUM and TOPIC 2 CHEMICAL KINETICS. One topic per top-level CONTENTS
// item across both blocks:
// Chemical Equilibrium — 1. General principles of equilibrium; 2. Factors
// influencing equilibrium (Le Chatelier's principle); 3. The equilibrium
// constant; 4. Relationship between Kp and Kc.
// Chemical Kinetics — 5. Reaction rates; 6. Introduction to rate laws;
// 7. Determining the form of the rate law (method of initial rates);
// 8. The integrated rate law; 9. Reaction mechanisms; 10. Activation energy;
// 11. Collision theory.
export const chemistryG11P6: PeriodContent = {
  grade: 11,
  number: 6,
  title: "Chemical Equilibrium and Chemical Kinetics",
  summary:
    "Period VI of the MoE Grade 11 Chemistry syllabus, covering two topic blocks. In Chemical Equilibrium, learners meet reversible reactions and dynamic equilibrium, the law of mass action, Le Chatelier's principle, the equilibrium constant, and the relationship between Kp and Kc. In Chemical Kinetics, learners define reaction rate and its rate law, use the method of initial rates, apply the integrated rate laws and half-lives for zero-, first- and second-order reactions, describe reaction mechanisms, and explain activation energy and collision theory.",
  topics: [
    {
      // source: LibreTexts (Chemistry: The Central Science) — 15.1 The Concept of Equilibrium (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/15%3A_Chemical_Equilibrium/15.01%3A_The_Concept_of_Equilibrium)
      slug: "general-principles-of-equilibrium",
      title: "General Principles of Equilibrium",
      objective:
        "By the end of the topic, learners should be able to describe reversible reactions and dynamic equilibrium and state the law of mass action. (MoE Grade 11 Period VI, Chemical Equilibrium CONTENTS 1.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Many reactions do not go to completion — they reach a balance called **equilibrium**.
- **This topic:** reversible reactions, dynamic equilibrium, and the law of mass action.

## Reversible reactions

- A **reversible reaction** can go both ways: reactants form products, and products re-form reactants.
- Written with a double arrow: aA + bB ⇌ cC + dD.
- Example: N₂O₄(g) ⇌ 2NO₂(g) (colourless ⇌ brown).

## Dynamic equilibrium

- **Chemical equilibrium** — the state where the **forward and reverse reactions occur at equal rates**, so the amounts of reactants and products stay **constant**.
- It is **dynamic**: both reactions keep going, but there is no net change.
- Equilibrium is reached only in a **closed system** at a fixed temperature, and can be approached from either direction.

## The law of mass action

- **Law of mass action** — at equilibrium, the ratio of the concentrations of products to reactants (each raised to the power of its coefficient) is a **constant** at a given temperature.
- This constant is the **equilibrium constant** (K).

## Characteristics of equilibrium

- Reached in a **closed system**.
- The **macroscopic properties** (colour, concentration, pressure) stay constant once at equilibrium.
- Both forward and reverse reactions continue at the molecular level.

## Common errors and misconceptions

- **Equilibrium means the reaction has stopped** — both reactions continue at equal rates (dynamic).
- **Equilibrium means equal amounts** — it means constant amounts, not necessarily equal ones.
- **Equilibrium happens in any system** — a closed system is needed; an open one lets products escape.`,
      workedExample: `**Task.** For the reversible reaction N₂O₄(g) ⇌ 2NO₂(g), explain what happens as the system moves to equilibrium and what "dynamic equilibrium" means.

**Step 1 — The forward reaction**
- At first there is mostly N₂O₄. It decomposes to NO₂, so the forward reaction is fast and the brown colour deepens.

**Step 2 — The reverse reaction speeds up**
- As NO₂ builds up, the reverse reaction (2NO₂ → N₂O₄) speeds up while the forward reaction slows.

**Step 3 — Equilibrium is reached**
- Eventually the **forward and reverse rates become equal**. The concentrations of N₂O₄ and NO₂ then stay constant and the colour stops changing.

**Step 4 — What "dynamic" means**
- At equilibrium both reactions are still happening at the molecular level, but at equal rates, so there is **no net change** — this is a dynamic equilibrium.

**Conclusion.** The system reaches equilibrium when the forward and reverse rates are equal; the amounts stay constant even though both reactions continue, which is what makes the equilibrium dynamic.`,
      quiz: [
        { prompt: "A reversible reaction can go…", options: ["both forward and backward", "only forward", "only backward", "not at all"], correctIndex: 0, explanation: "Both directions occur." },
        { prompt: "The symbol for a reversible reaction is…", options: ["⇌", "→", "=", "+"], correctIndex: 0, explanation: "A double arrow shows reversibility." },
        { prompt: "At equilibrium, the forward and reverse rates are…", options: ["equal", "zero", "very different", "increasing"], correctIndex: 0, explanation: "Equal rates define equilibrium." },
        { prompt: "At equilibrium, the amounts of reactants and products are…", options: ["constant", "always equal", "increasing", "zero"], correctIndex: 0, explanation: "They stay constant, not necessarily equal." },
        { prompt: "Chemical equilibrium is described as…", options: ["dynamic", "static", "finished", "one-way"], correctIndex: 0, explanation: "Both reactions continue (dynamic)." },
        { prompt: "Equilibrium is reached only in a … system.", options: ["closed", "open", "gaseous only", "cold"], correctIndex: 0, explanation: "A closed system is needed." },
        { prompt: "The law of mass action gives a constant ratio of products to…", options: ["reactants", "catalysts", "solvents", "temperature"], correctIndex: 0, explanation: "Products over reactants is constant." },
        { prompt: "This constant is called the…", options: ["equilibrium constant", "rate constant", "half-life", "activation energy"], correctIndex: 0, explanation: "It is the equilibrium constant K." },
        { prompt: "Once at equilibrium, the colour of N₂O₄/NO₂…", options: ["stops changing", "keeps darkening", "disappears", "flashes"], correctIndex: 0, explanation: "Constant composition means constant colour." },
        { prompt: "Equilibrium can be approached from…", options: ["either direction", "reactants only", "products only", "neither"], correctIndex: 0, explanation: "Either starting point gives the same equilibrium." },
        { prompt: "At equilibrium, the reactions at the molecular level are…", options: ["still happening", "stopped", "reversed only", "frozen"], correctIndex: 0, explanation: "Dynamic: both continue." },
        { prompt: "In an OPEN system, equilibrium is…", options: ["not reached (products escape)", "reached faster", "reached at 0 K", "the same"], correctIndex: 0, explanation: "Escaping products prevent equilibrium." },
        { prompt: "The macroscopic properties at equilibrium are…", options: ["constant", "changing fast", "zero", "random"], correctIndex: 0, explanation: "They stay constant." },
        { prompt: "As reactants are used up, the forward rate…", options: ["decreases", "increases", "stays constant", "doubles"], correctIndex: 0, explanation: "Lower reactant concentration slows it." },
        { prompt: "As products build up, the reverse rate…", options: ["increases", "decreases", "stays zero", "stops"], correctIndex: 0, explanation: "More product speeds the reverse reaction." },
        { prompt: "Equilibrium applies at a fixed…", options: ["temperature", "colour", "volume only", "mass"], correctIndex: 0, explanation: "The constant depends on temperature." },
        { prompt: "Which statement is TRUE of dynamic equilibrium?", options: ["both reactions continue at equal rates", "the reaction has stopped", "only the forward reaction occurs", "amounts always equal"], correctIndex: 0, explanation: "Equal, ongoing rates." },
        { prompt: "N₂O₄ ⇌ 2NO₂ shows a colourless gas in equilibrium with a … gas.", options: ["brown", "blue", "green", "black"], correctIndex: 0, explanation: "NO₂ is brown." },
        { prompt: "The law of mass action raises each concentration to the power of its…", options: ["coefficient", "mass", "charge", "half-life"], correctIndex: 0, explanation: "Stoichiometric coefficient." },
        { prompt: "Equilibrium does NOT mean the amounts are…", options: ["equal", "constant", "unchanging", "steady"], correctIndex: 0, explanation: "Constant, but not necessarily equal." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a reversible reaction and dynamic equilibrium.", answerKey: "A reversible reaction can proceed in both directions — reactants form products and products re-form reactants (shown by ⇌). Dynamic equilibrium is the state where the forward and reverse reactions occur at equal rates, so the amounts of reactants and products stay constant while both reactions continue at the molecular level. Award marks for both definitions.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "At chemical equilibrium:", options: ["the forward and reverse rates are equal", "the reaction has completely stopped", "only the forward reaction occurs", "the amounts of products and reactants are always equal"], correctIndex: 0, answerKey: "Equilibrium is when the forward and reverse rates are equal.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Chemical equilibrium can only be established in a:", options: ["closed system", "open system", "system at 0 K", "vacuum"], correctIndex: 0, answerKey: "A closed system is required so no substance escapes.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why chemical equilibrium is described as 'dynamic' rather than 'static'.", answerKey: "It is dynamic because, although the concentrations of reactants and products stay constant, both the forward and reverse reactions are still occurring at the molecular level — they simply proceed at equal rates so there is no net change. A static equilibrium would imply the reactions had stopped, which is not the case. Award marks for the ongoing reactions and the equal-rates/no-net-change idea.", marks: 3 },
        { type: "ESSAY", prompt: "Using the reaction N₂O₄(g) ⇌ 2NO₂(g), explain how a reversible reaction reaches dynamic equilibrium and state the characteristics of a system at equilibrium.", answerKey: "A full answer explains that initially the forward reaction (N₂O₄ → 2NO₂) is fast and the reverse slow; as products build up the reverse reaction speeds up and the forward slows until the forward and reverse rates become equal, at which point the concentrations (and the colour) stay constant — dynamic equilibrium. Characteristics: it is dynamic (both reactions continue), reached only in a closed system at a fixed temperature, macroscopic properties stay constant, and it can be approached from either direction, with the law of mass action giving a constant ratio of products to reactants. Award marks for the approach to equilibrium, the equal-rates definition, and the characteristics.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Supplemental Modules, Physical & Theoretical Chemistry) — Le Chatelier's Principle (https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Equilibria/Le_Chateliers_Principle)
      slug: "le-chateliers-principle",
      title: "Factors Influencing Equilibrium (Le Chatelier's Principle)",
      objective:
        "By the end of the topic, learners should be able to state Le Chatelier's principle and predict how changing concentration, pressure and temperature shifts the position of equilibrium. (MoE Grade 11 Period VI, Chemical Equilibrium CONTENTS 2.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- If an equilibrium is disturbed, it shifts to reduce the disturbance — this is **Le Chatelier's principle**.
- **This topic:** how concentration, pressure and temperature move the position of equilibrium.

## Le Chatelier's principle

- **Le Chatelier's principle:** if a system at equilibrium is disturbed by a change in conditions, the position of equilibrium **shifts to oppose (counteract) the change**.

## Effect of changes

| Change | Equilibrium shifts… |
|---|---|
| Increase concentration of a reactant | toward the products (forward) |
| Increase concentration of a product | toward the reactants (backward) |
| Increase pressure (decrease volume) | toward the side with **fewer moles of gas** |
| Increase temperature | in the **endothermic** direction |
| Decrease temperature | in the **exothermic** direction |
| Add a catalyst | **no shift** (speeds both directions equally) |

## Example: the Haber process

- N₂(g) + 3H₂(g) ⇌ 2NH₃(g); the forward reaction is exothermic.
- **High pressure** favours ammonia (4 moles of gas → 2 moles).
- **Low temperature** favours ammonia (exothermic), but too low a temperature makes the reaction slow, so a **compromise** temperature (about 400–450 °C) is used.

## Common errors and misconceptions

- **A catalyst shifts the equilibrium** — a catalyst speeds up both directions equally and does **not** move the position of equilibrium.
- **Higher temperature always increases product** — it shifts toward the **endothermic** direction, which may be the reactant side.
- **Pressure affects reactions with equal gas moles** — pressure only shifts equilibria where the number of gas moles differs.`,
      workedExample: `**Task.** For the exothermic reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), predict how the yield of ammonia changes if (a) the pressure is increased, (b) the temperature is increased, and (c) a catalyst is added.

**(a) Increasing the pressure**
- There are 4 moles of gas on the left and 2 on the right.
- By Le Chatelier's principle, the equilibrium shifts toward the side with **fewer moles of gas** (the products).
- So the **yield of ammonia increases**.

**(b) Increasing the temperature**
- The forward reaction is exothermic, so the reverse reaction is endothermic.
- The equilibrium shifts in the **endothermic (backward)** direction to absorb the extra heat.
- So the **yield of ammonia decreases**.

**(c) Adding a catalyst**
- A catalyst speeds up the forward and reverse reactions equally.
- It does **not** change the position of equilibrium, so the **yield of ammonia is unchanged** (equilibrium is just reached faster).

**Conclusion.** High pressure increases the ammonia yield, high temperature decreases it, and a catalyst leaves the yield unchanged but reaches equilibrium sooner — which is why the Haber process uses high pressure, a compromise temperature and a catalyst.`,
      quiz: [
        { prompt: "Le Chatelier's principle: a disturbed equilibrium shifts to … the change.", options: ["oppose", "increase", "ignore", "double"], correctIndex: 0, explanation: "It counteracts the disturbance." },
        { prompt: "Adding more reactant shifts the equilibrium toward the…", options: ["products", "reactants", "catalyst", "solvent"], correctIndex: 0, explanation: "It shifts to use up the added reactant." },
        { prompt: "Adding more product shifts the equilibrium toward the…", options: ["reactants", "products", "gas", "salt"], correctIndex: 0, explanation: "It shifts to use up the added product." },
        { prompt: "Increasing pressure shifts equilibrium toward the side with … moles of gas.", options: ["fewer", "more", "equal", "zero"], correctIndex: 0, explanation: "Fewer gas moles reduces the pressure." },
        { prompt: "Increasing temperature shifts equilibrium in the … direction.", options: ["endothermic", "exothermic", "forward always", "backward always"], correctIndex: 0, explanation: "It favours heat absorption." },
        { prompt: "A catalyst … the position of equilibrium.", options: ["does not change", "shifts forward", "shifts backward", "destroys"], correctIndex: 0, explanation: "It speeds both directions equally." },
        { prompt: "In N₂ + 3H₂ ⇌ 2NH₃, high pressure favours…", options: ["ammonia (fewer gas moles)", "the reactants", "no change", "hydrogen"], correctIndex: 0, explanation: "2 moles of gas on the product side." },
        { prompt: "For an exothermic reaction, low temperature favours the…", options: ["products", "reactants", "catalyst", "gas"], correctIndex: 0, explanation: "It shifts toward the exothermic (product) side." },
        { prompt: "The Haber process uses a compromise temperature because low temperature makes the reaction…", options: ["too slow", "explosive", "reverse", "cold only"], correctIndex: 0, explanation: "Rate is too slow at very low temperature." },
        { prompt: "Removing a product shifts the equilibrium toward the…", options: ["products", "reactants", "catalyst", "solid"], correctIndex: 0, explanation: "It shifts to replace the removed product." },
        { prompt: "A catalyst mainly lets equilibrium be reached…", options: ["faster", "slower", "never", "at higher yield"], correctIndex: 0, explanation: "It speeds attainment of equilibrium." },
        { prompt: "Pressure changes affect equilibria involving…", options: ["gases with unequal moles", "solids only", "liquids only", "equal gas moles"], correctIndex: 0, explanation: "Only when gas mole numbers differ." },
        { prompt: "Increasing temperature for an exothermic forward reaction … the yield of products.", options: ["decreases", "increases", "does not change", "doubles"], correctIndex: 0, explanation: "It shifts backward (endothermic)." },
        { prompt: "For A(g) ⇌ 2B(g), increasing pressure shifts toward…", options: ["A (fewer moles)", "B", "no change", "the catalyst"], correctIndex: 0, explanation: "A has fewer gas moles (1 vs 2)." },
        { prompt: "Le Chatelier's principle helps industry choose the best…", options: ["conditions for high yield", "colour", "container shape", "day"], correctIndex: 0, explanation: "It guides pressure and temperature choices." },
        { prompt: "Decreasing the volume of a gas mixture increases the…", options: ["pressure", "temperature", "colour", "mass"], correctIndex: 0, explanation: "Smaller volume raises pressure." },
        { prompt: "Which change does NOT move the position of equilibrium?", options: ["adding a catalyst", "adding reactant", "raising temperature", "increasing pressure"], correctIndex: 0, explanation: "A catalyst does not shift equilibrium." },
        { prompt: "If the forward reaction is endothermic, raising temperature favours the…", options: ["products", "reactants", "catalyst", "no side"], correctIndex: 0, explanation: "Heat drives the endothermic (forward) direction." },
        { prompt: "The purpose of Le Chatelier's principle is to predict the … of a change.", options: ["direction of the shift", "colour", "mass", "half-life"], correctIndex: 0, explanation: "It predicts which way equilibrium moves." },
        { prompt: "Adding an inert gas at constant volume … the equilibrium position.", options: ["does not change", "shifts forward", "shifts backward", "destroys"], correctIndex: 0, explanation: "It doesn't change partial pressures of reactants/products." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State Le Chatelier's principle.", answerKey: "Le Chatelier's principle states that if a system at equilibrium is disturbed by a change in conditions (concentration, pressure or temperature), the position of equilibrium shifts in the direction that opposes (counteracts) the change. Award marks for the disturbance and the opposing shift.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing the pressure shifts the equilibrium:", options: ["toward the ammonia (fewer moles of gas)", "toward the nitrogen and hydrogen", "there is no shift", "toward the catalyst"], correctIndex: 0, answerKey: "Higher pressure favours the side with fewer gas moles (2 NH₃ vs 4 reactant moles).", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Adding a catalyst to a system at equilibrium:", options: ["does not change the position of equilibrium", "shifts it toward the products", "shifts it toward the reactants", "stops the reaction"], correctIndex: 0, answerKey: "A catalyst speeds both directions equally, so the position is unchanged.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For an exothermic reaction at equilibrium, predict and explain the effect of increasing the temperature on the yield of products.", answerKey: "Increasing the temperature shifts the equilibrium in the endothermic direction. Since the forward reaction is exothermic, the reverse (endothermic) direction is favoured, so the equilibrium moves toward the reactants and the yield of products decreases. Award marks for the endothermic-direction shift and the resulting decrease in product yield.", marks: 3 },
        { type: "ESSAY", prompt: "Explain how Le Chatelier's principle is applied to choose the conditions for the Haber process (N₂ + 3H₂ ⇌ 2NH₃, forward reaction exothermic), discussing pressure, temperature and the use of a catalyst.", answerKey: "A full answer applies Le Chatelier's principle: high pressure is used because there are more gas moles on the reactant side (4) than the product side (2), so high pressure shifts the equilibrium toward ammonia. The forward reaction is exothermic, so a low temperature would favour a higher equilibrium yield, but at low temperature the reaction is too slow, so a compromise (moderate) temperature of about 400–450 °C is used to give a reasonable yield at a reasonable rate. A catalyst (iron) does not shift the equilibrium but speeds up the attainment of equilibrium, improving the rate. Award marks for the pressure reasoning, the temperature compromise, and the correct role of the catalyst.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 15.2 The Equilibrium Constant (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/15%3A_Chemical_Equilibrium/15.02%3A_The_Equilibrium_Constant)
      slug: "the-equilibrium-constant",
      title: "The Equilibrium Constant",
      objective:
        "By the end of the topic, learners should be able to write the equilibrium constant expression from a balanced equation and interpret the size of K. (MoE Grade 11 Period VI, Chemical Equilibrium CONTENTS 3.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- The **equilibrium constant (K)** puts a number on the position of equilibrium.
- **This topic:** how to write K and what its value tells us.

## Writing the expression

- For a general reaction aA + bB ⇌ cC + dD:

**Kc = [C]ᶜ [D]ᵈ ÷ ([A]ᵃ [B]ᵇ)**

- Products go on **top**, reactants on the **bottom**; each concentration is raised to the power of its **coefficient**.
- **Pure solids and pure liquids are left out** (their concentration is effectively constant).

## What K tells us

| Value of K | Meaning |
|---|---|
| Large (K > 1000) | products predominate; reaction nearly complete |
| Small (K < 0.001) | reactants predominate; little reaction |
| Around 1 | significant amounts of both |

- K depends only on the **temperature** — not on the starting amounts or pressure.

## Example

- For N₂(g) + 3H₂(g) ⇌ 2NH₃(g): Kc = [NH₃]² ÷ ([N₂][H₂]³).

## Common errors and misconceptions

- **Reactants on top** — products go on top, reactants on the bottom.
- **Forgetting the powers** — raise each concentration to its coefficient.
- **Including solids/liquids** — leave out pure solids and pure liquids.`,
      workedExample: `**Task.** Write the equilibrium constant (Kc) expression for the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), and state what a large value of Kc would tell you.

**Step 1 — Identify products and reactants**
- Products: SO₃ (coefficient 2). Reactants: SO₂ (coefficient 2) and O₂ (coefficient 1).

**Step 2 — Put products on top, reactants on the bottom**
- Numerator: [SO₃]².
- Denominator: [SO₂]² [O₂].

**Step 3 — Write the expression**
Kc = [SO₃]² ÷ ([SO₂]² [O₂]).

**Step 4 — Interpret a large Kc**
- A large Kc (much greater than 1) means the products predominate at equilibrium — the reaction goes almost to completion, forming mostly SO₃.

**Conclusion.** The equilibrium constant is Kc = [SO₃]² / ([SO₂]²[O₂]); a large value shows the equilibrium lies well to the right, favouring the product SO₃.`,
      quiz: [
        { prompt: "In the equilibrium constant, products go on the … of the expression.", options: ["top", "bottom", "side", "outside"], correctIndex: 0, explanation: "Products are in the numerator." },
        { prompt: "Reactants go on the … of the expression.", options: ["bottom", "top", "side", "outside"], correctIndex: 0, explanation: "Reactants are in the denominator." },
        { prompt: "Each concentration is raised to the power of its…", options: ["coefficient", "charge", "mass", "half-life"], correctIndex: 0, explanation: "Use the stoichiometric coefficient." },
        { prompt: "Pure solids and liquids are … the expression.", options: ["left out of", "put on top of", "doubled in", "squared in"], correctIndex: 0, explanation: "They are omitted." },
        { prompt: "A large K (>1000) means … predominate.", options: ["products", "reactants", "catalysts", "solids"], correctIndex: 0, explanation: "Equilibrium lies to the right." },
        { prompt: "A small K (<0.001) means … predominate.", options: ["reactants", "products", "gases", "liquids"], correctIndex: 0, explanation: "Equilibrium lies to the left." },
        { prompt: "K depends only on the…", options: ["temperature", "starting amounts", "pressure", "container"], correctIndex: 0, explanation: "K is fixed at a given temperature." },
        { prompt: "For N₂ + 3H₂ ⇌ 2NH₃, Kc = …", options: ["[NH₃]²/([N₂][H₂]³)", "[N₂][H₂]³/[NH₃]²", "[NH₃]/[N₂][H₂]", "[N₂]/[NH₃]"], correctIndex: 0, explanation: "Products over reactants, with powers." },
        { prompt: "The equilibrium constant expression follows the law of…", options: ["mass action", "conservation of mass only", "definite proportions", "multiple proportions"], correctIndex: 0, explanation: "It is the law of mass action." },
        { prompt: "For 2SO₂ + O₂ ⇌ 2SO₃, Kc = …", options: ["[SO₃]²/([SO₂]²[O₂])", "[SO₂]²[O₂]/[SO₃]²", "[SO₃]/[SO₂]", "[O₂]/[SO₃]"], correctIndex: 0, explanation: "Products over reactants with powers." },
        { prompt: "K around 1 means…", options: ["significant amounts of both", "only products", "only reactants", "no reaction"], correctIndex: 0, explanation: "Both sides are present." },
        { prompt: "K does NOT depend on the…", options: ["starting concentrations", "temperature", "reaction", "identity of species"], correctIndex: 0, explanation: "Starting amounts don't change K." },
        { prompt: "If K is very large, the reaction is nearly…", options: ["complete", "not started", "reversed", "frozen"], correctIndex: 0, explanation: "Products dominate." },
        { prompt: "The coefficient of a species becomes its … in the expression.", options: ["power (exponent)", "mass", "sign", "colour"], correctIndex: 0, explanation: "Coefficients are exponents." },
        { prompt: "For A + 2B ⇌ 3C, Kc = …", options: ["[C]³/([A][B]²)", "[A][B]²/[C]³", "[C]/[A][B]", "[A]/[C]"], correctIndex: 0, explanation: "Products over reactants with powers." },
        { prompt: "Which is omitted from the Kc expression?", options: ["a pure solid", "a gas", "an aqueous ion", "a dissolved reactant"], correctIndex: 0, explanation: "Pure solids are omitted." },
        { prompt: "Raising the temperature changes the value of…", options: ["K", "the coefficients", "the formula shape", "the species"], correctIndex: 0, explanation: "K changes with temperature." },
        { prompt: "The units of K depend on the…", options: ["form of the expression", "colour", "container", "day"], correctIndex: 0, explanation: "Units depend on the powers involved." },
        { prompt: "A reaction with K = 10⁻⁵ favours the…", options: ["reactants", "products", "catalyst", "solids"], correctIndex: 0, explanation: "Small K favours reactants." },
        { prompt: "The equilibrium constant is a measure of the … of equilibrium.", options: ["position", "speed", "colour", "mass"], correctIndex: 0, explanation: "K indicates the position of equilibrium." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the general form of the equilibrium constant Kc for aA + bB ⇌ cC + dD and state what is left out of the expression.", answerKey: "Kc = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ), with products in the numerator and reactants in the denominator, each raised to the power of its coefficient. Pure solids and pure liquids are left out of the expression. Award marks for the correct form and the omission of solids/liquids.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the equilibrium constant expression is:", options: ["[NH₃]² / ([N₂][H₂]³)", "[N₂][H₂]³ / [NH₃]²", "[NH₃] / ([N₂][H₂])", "[N₂] / [NH₃]"], correctIndex: 0, answerKey: "Products over reactants, each raised to its coefficient.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A very large value of the equilibrium constant K indicates that at equilibrium:", options: ["products predominate", "reactants predominate", "there is no reaction", "the temperature is low"], correctIndex: 0, answerKey: "A large K means the equilibrium lies to the right, favouring products.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Write the equilibrium constant expression for 2SO₂(g) + O₂(g) ⇌ 2SO₃(g).", answerKey: "Kc = [SO₃]² / ([SO₂]²[O₂]). Award marks for products on top with the correct power and reactants on the bottom with correct powers.", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the equilibrium constant expression is written from a balanced equation, what the size of K reveals about a reaction, and what K depends on.", answerKey: "A full answer explains that, following the law of mass action, the equilibrium constant is written with the product concentrations in the numerator and the reactant concentrations in the denominator, each raised to the power of its stoichiometric coefficient, with pure solids and liquids omitted. The size of K reveals the position of equilibrium: a large K (>1000) means products predominate (reaction nearly complete), a small K (<0.001) means reactants predominate, and a value near 1 means significant amounts of both. K depends only on the temperature — not on the starting concentrations or the pressure. Award marks for how the expression is written, the interpretation of large/small K, and the temperature dependence.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 15.2 The Equilibrium Constant / Kp and Kc (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/15%3A_Chemical_Equilibrium/15.02%3A_The_Equilibrium_Constant)
      slug: "relationship-between-kp-and-kc",
      title: "Relationship Between Kp and Kc",
      objective:
        "By the end of the topic, learners should be able to write Kp for gaseous equilibria and relate it to Kc using Kp = Kc(RT)^Δn. (MoE Grade 11 Period VI, Chemical Equilibrium CONTENTS 4.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- For gas reactions, the equilibrium constant can be written using **partial pressures** (Kp) or **concentrations** (Kc).
- **This topic:** Kp and its relationship to Kc.

## Kp — the pressure equilibrium constant

- For a gaseous equilibrium, **Kp** is written like Kc but using the **partial pressures** of the gases instead of concentrations.
- Example: for N₂(g) + 3H₂(g) ⇌ 2NH₃(g), Kp = (P(NH₃))² ÷ (P(N₂) × (P(H₂))³).

## Relating Kp and Kc

**Kp = Kc (RT)^Δn**

- **R** = gas constant; **T** = absolute temperature (K).
- **Δn** = (moles of gaseous products) − (moles of gaseous reactants) from the balanced equation.

## Special case

- When **Δn = 0** (equal moles of gas on both sides), **Kp = Kc**.

## Worked pattern

- For N₂ + 3H₂ ⇌ 2NH₃: Δn = 2 − (1 + 3) = **−2**, so Kp = Kc (RT)⁻².

## Common errors and misconceptions

- **Δn counts all species** — only **gaseous** species are counted in Δn.
- **Using °C for T** — T must be in kelvin.
- **Kp always equals Kc** — they are equal only when Δn = 0.`,
      workedExample: `**Task.** For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), (a) work out Δn, and (b) write the relationship between Kp and Kc.

**Step 1 — Count the moles of gas**
- Gaseous products: 2 mol SO₃.
- Gaseous reactants: 2 mol SO₂ + 1 mol O₂ = 3 mol.

**Step 2 — Calculate Δn**
- Δn = (moles gaseous products) − (moles gaseous reactants) = 2 − 3 = **−1**.

**Step 3 — Write the relationship**
- Kp = Kc (RT)^Δn = **Kc (RT)⁻¹** (that is, Kp = Kc ÷ RT).

**Conclusion.** For this reaction Δn = −1, so Kp = Kc(RT)⁻¹; because Δn is not zero, Kp and Kc have different values (they would be equal only if Δn were 0).`,
      quiz: [
        { prompt: "Kp is written using the … of the gases.", options: ["partial pressures", "concentrations", "masses", "volumes"], correctIndex: 0, explanation: "Kp uses partial pressures." },
        { prompt: "Kc is written using the … of the species.", options: ["concentrations", "partial pressures", "masses", "colours"], correctIndex: 0, explanation: "Kc uses concentrations." },
        { prompt: "The relationship is Kp = Kc(RT)^…", options: ["Δn", "n", "2", "0"], correctIndex: 0, explanation: "The exponent is Δn." },
        { prompt: "Δn is moles of gaseous products minus moles of gaseous…", options: ["reactants", "products", "solids", "liquids"], correctIndex: 0, explanation: "Products minus reactants (gases)." },
        { prompt: "When Δn = 0, Kp…", options: ["equals Kc", "is zero", "is infinite", "is negative"], correctIndex: 0, explanation: "(RT)⁰ = 1, so Kp = Kc." },
        { prompt: "T in Kp = Kc(RT)^Δn must be in…", options: ["kelvin", "Celsius", "Fahrenheit", "any"], correctIndex: 0, explanation: "Absolute temperature is required." },
        { prompt: "For N₂ + 3H₂ ⇌ 2NH₃, Δn is…", options: ["−2", "+2", "0", "−1"], correctIndex: 0, explanation: "2 − 4 = −2." },
        { prompt: "For 2SO₂ + O₂ ⇌ 2SO₃, Δn is…", options: ["−1", "+1", "0", "−2"], correctIndex: 0, explanation: "2 − 3 = −1." },
        { prompt: "Only … species are counted in Δn.", options: ["gaseous", "solid", "liquid", "aqueous"], correctIndex: 0, explanation: "Gases only." },
        { prompt: "R in the equation is the…", options: ["gas constant", "rate constant", "radius", "resistance"], correctIndex: 0, explanation: "R is the gas constant." },
        { prompt: "If Δn = +1, then Kp = …", options: ["Kc(RT)", "Kc/(RT)", "Kc", "0"], correctIndex: 0, explanation: "(RT)^1 = RT." },
        { prompt: "Kp and Kc are equal only when the number of gas moles is … on both sides.", options: ["equal", "different", "zero", "doubled"], correctIndex: 0, explanation: "Equal gas moles means Δn = 0." },
        { prompt: "For H₂(g) + I₂(g) ⇌ 2HI(g), Δn is…", options: ["0", "−1", "+1", "−2"], correctIndex: 0, explanation: "2 − 2 = 0." },
        { prompt: "For H₂ + I₂ ⇌ 2HI, Kp … Kc.", options: ["equals", "is larger than", "is smaller than", "is zero compared to"], correctIndex: 0, explanation: "Δn = 0, so Kp = Kc." },
        { prompt: "Kp for N₂ + 3H₂ ⇌ 2NH₃ is (P NH₃)² ÷ …", options: ["P N₂ × (P H₂)³", "P N₂ × P H₂", "(P N₂)² × P H₂", "P NH₃"], correctIndex: 0, explanation: "Reactant partial pressures with powers." },
        { prompt: "If Δn is negative, Kp is … Kc (for RT > 1).", options: ["smaller than", "larger than", "equal to", "zero"], correctIndex: 0, explanation: "(RT)^negative is a fraction." },
        { prompt: "Kp is used for equilibria involving…", options: ["gases", "solids only", "liquids only", "solutions only"], correctIndex: 0, explanation: "Partial pressures apply to gases." },
        { prompt: "The exponent Δn comes from the … equation.", options: ["balanced", "unbalanced", "ionic", "rate"], correctIndex: 0, explanation: "Use the balanced equation coefficients." },
        { prompt: "To convert Kc to Kp you multiply by…", options: ["(RT)^Δn", "RT", "Δn", "T only"], correctIndex: 0, explanation: "Kp = Kc(RT)^Δn." },
        { prompt: "When gas moles increase from reactants to products, Δn is…", options: ["positive", "negative", "zero", "undefined"], correctIndex: 0, explanation: "More product gas moles gives positive Δn." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the relationship between Kp and Kc and define Δn.", answerKey: "Kp = Kc(RT)^Δn, where R is the gas constant, T is the absolute temperature in kelvin, and Δn is the change in the number of moles of gas — (moles of gaseous products) minus (moles of gaseous reactants) — from the balanced equation. Award marks for the equation and the correct definition of Δn.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "Kp and Kc are equal when:", options: ["Δn = 0", "Δn = 1", "Δn = −1", "the temperature is 0 K"], correctIndex: 0, answerKey: "When Δn = 0, (RT)⁰ = 1 so Kp = Kc.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the value of Δn is:", options: ["−2", "+2", "0", "−1"], correctIndex: 0, answerKey: "Δn = 2 − (1 + 3) = −2.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For the reaction H₂(g) + I₂(g) ⇌ 2HI(g), work out Δn and state the relationship between Kp and Kc.", answerKey: "Gaseous products = 2 (HI); gaseous reactants = 2 (H₂ + I₂). Δn = 2 − 2 = 0. Since Δn = 0, Kp = Kc(RT)⁰ = Kc, so Kp equals Kc. Award marks for Δn = 0 and Kp = Kc.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the difference between Kp and Kc for gaseous equilibria, how they are related, and work through an example calculating Δn and stating the Kp–Kc relationship.", answerKey: "A full answer explains that Kc is written using the equilibrium concentrations of the species while Kp is written using the partial pressures of the gases; they are related by Kp = Kc(RT)^Δn, where Δn is the change in the number of moles of gas (gaseous products minus gaseous reactants) and T is in kelvin. When Δn = 0 the two are equal. Example: for 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), Δn = 2 − 3 = −1, so Kp = Kc(RT)⁻¹ = Kc/RT, meaning Kp and Kc differ. Award marks for the Kp/Kc distinction, the relating equation, and a correct worked Δn example.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 14.2 Reaction Rates (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.02%3A_Reaction_Rates)
      slug: "reaction-rates",
      title: "Reaction Rates",
      objective:
        "By the end of the topic, learners should be able to define reaction rate, state the factors that affect it, and describe how it is measured. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 1.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- **Chemical kinetics** studies how fast reactions go — their **rates**.
- **This topic:** what reaction rate means, what affects it, and how it is measured.

## Definition

- **Reaction rate** — the change in the concentration of a reactant or product per unit **time**.
- **rate = change in concentration ÷ time**; units are **mol/L·s** (or mol/dm³ per second).
- rate = −Δ[reactant]/Δt = +Δ[product]/Δt (reactants decrease, products increase).

## The rate changes with time

- The rate is **fastest at the start** (highest reactant concentration) and slows as reactants are used up.

## Factors that affect the rate

| Factor | Effect on rate |
|---|---|
| Concentration (or pressure of gases) | higher concentration → faster |
| Temperature | higher temperature → faster |
| Surface area of a solid | larger area (powder) → faster |
| Catalyst | a catalyst speeds the reaction up |

## Measuring the rate

- Follow a property that changes as the reaction proceeds: **volume of gas** produced, **mass** lost, **colour** change, or **concentration** measured over time.
- Rate = change in the measured quantity ÷ time taken.

## Common errors and misconceptions

- **Rate stays constant** — it usually decreases as reactants are used up.
- **A catalyst is used up** — a catalyst speeds the reaction without being consumed.
- **Only concentration matters** — temperature, surface area and catalysts all affect rate.`,
      workedExample: `**Task.** In a reaction, the concentration of a reactant falls from 0.80 mol/dm³ to 0.50 mol/dm³ in 20 seconds. (a) Calculate the average rate of reaction. (b) State two factors that could make the reaction go faster.

**Part (a) — Average rate**
1. Change in concentration = 0.80 − 0.50 = 0.30 mol/dm³ (a decrease).
2. rate = change in concentration ÷ time = 0.30 ÷ 20.
3. rate = **0.015 mol/dm³ per second**.

**Part (b) — Two factors to speed it up**
- Increase the **concentration** of the reactants.
- Increase the **temperature** (or add a catalyst, or increase the surface area of a solid reactant).

**Conclusion.** The average rate is 0.015 mol/dm³ per second; increasing the concentration or the temperature (among other factors) would make the reaction go faster.`,
      quiz: [
        { prompt: "Reaction rate is the change in concentration per unit…", options: ["time", "mass", "volume", "colour"], correctIndex: 0, explanation: "Rate is a change per unit time." },
        { prompt: "The units of reaction rate are…", options: ["mol/L·s", "mol", "L", "s"], correctIndex: 0, explanation: "Concentration per second." },
        { prompt: "During a reaction, reactant concentration…", options: ["decreases", "increases", "stays constant", "doubles"], correctIndex: 0, explanation: "Reactants are used up." },
        { prompt: "The reaction rate is usually fastest at the…", options: ["start", "end", "middle only", "same throughout"], correctIndex: 0, explanation: "Highest concentration at the start." },
        { prompt: "Increasing concentration … the rate.", options: ["increases", "decreases", "does not change", "stops"], correctIndex: 0, explanation: "More particles collide more often." },
        { prompt: "Increasing temperature … the rate.", options: ["increases", "decreases", "does not change", "reverses"], correctIndex: 0, explanation: "Faster particles react more." },
        { prompt: "Powdering a solid increases the … and speeds the reaction.", options: ["surface area", "mass", "colour", "temperature"], correctIndex: 0, explanation: "More exposed surface reacts faster." },
        { prompt: "A catalyst … the reaction.", options: ["speeds up", "slows", "stops", "reverses"], correctIndex: 0, explanation: "Catalysts increase rate." },
        { prompt: "A catalyst is … during the reaction.", options: ["not used up", "consumed", "destroyed", "evaporated"], correctIndex: 0, explanation: "Catalysts are not consumed." },
        { prompt: "For a reactant, rate = −Δ[reactant]/…", options: ["Δt", "Δm", "ΔV", "Δc"], correctIndex: 0, explanation: "Divide by the time change." },
        { prompt: "If concentration falls 0.30 mol/dm³ in 20 s, the rate is…", options: ["0.015 mol/dm³·s", "0.30 mol/dm³·s", "6.0 mol/dm³·s", "0.60 mol/dm³·s"], correctIndex: 0, explanation: "0.30 ÷ 20 = 0.015." },
        { prompt: "You can measure rate by following the volume of … produced.", options: ["gas", "solid", "colour only", "heat only"], correctIndex: 0, explanation: "Gas volume is a common measure." },
        { prompt: "As reactants are used up, the rate…", options: ["decreases", "increases", "stays constant", "doubles"], correctIndex: 0, explanation: "Lower concentration slows the reaction." },
        { prompt: "Which is NOT a factor affecting rate?", options: ["colour of the flask", "temperature", "concentration", "surface area"], correctIndex: 0, explanation: "Colour of the flask is irrelevant." },
        { prompt: "Higher gas pressure acts like higher…", options: ["concentration", "temperature only", "colour", "mass"], correctIndex: 0, explanation: "Pressure raises the concentration of gas." },
        { prompt: "The branch of chemistry studying rates is…", options: ["kinetics", "energetics", "equilibrium", "electrochemistry"], correctIndex: 0, explanation: "Kinetics studies reaction rates." },
        { prompt: "A product's concentration during a reaction…", options: ["increases", "decreases", "stays zero", "halves"], correctIndex: 0, explanation: "Products build up." },
        { prompt: "Measuring mass loss works when the reaction produces a…", options: ["gas that escapes", "solid", "colour", "liquid only"], correctIndex: 0, explanation: "Escaping gas reduces the mass." },
        { prompt: "To speed up a reaction of a solid with acid, you could…", options: ["grind the solid to a powder", "cool it", "dilute the acid", "use a bigger lump"], correctIndex: 0, explanation: "Powder increases surface area." },
        { prompt: "Reaction rate tells us how … a reaction goes.", options: ["fast", "far", "exothermic", "reversible"], correctIndex: 0, explanation: "Rate is about speed." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define reaction rate and give its usual units.", answerKey: "Reaction rate is the change in the concentration of a reactant or product per unit time (rate = change in concentration ÷ time). Its usual units are mol/L·s (mol dm⁻³ s⁻¹). Award marks for the definition and the units.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "Which of the following does NOT increase the rate of a reaction?", options: ["cooling the reaction mixture", "increasing the concentration", "using a catalyst", "increasing the surface area of a solid"], correctIndex: 0, answerKey: "Cooling decreases the rate; the others increase it.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "A reaction is usually fastest:", options: ["at the start, when reactant concentration is highest", "at the end", "when all reactants are used up", "when it reaches equilibrium"], correctIndex: 0, answerKey: "The rate is greatest at the start and slows as reactants are consumed.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "The concentration of a reactant decreases from 1.0 mol/dm³ to 0.4 mol/dm³ in 30 seconds. Calculate the average rate of reaction.", answerKey: "Change in concentration = 1.0 − 0.4 = 0.6 mol/dm³. Rate = 0.6 ÷ 30 = 0.02 mol/dm³ per second. Award marks for the concentration change and the answer 0.02 mol/dm³·s.", marks: 2 },
        { type: "ESSAY", prompt: "Explain what is meant by the rate of a reaction, list the factors that affect it, and describe one method of measuring the rate of a reaction that produces a gas.", answerKey: "A full answer defines reaction rate as the change in concentration of a reactant or product per unit time (units mol/L·s), noting it is fastest at the start and slows as reactants are used up. Factors affecting rate: concentration (or gas pressure), temperature, surface area of a solid, and the presence of a catalyst — each increasing the rate when raised/added. Method for a gas-producing reaction: collect the gas over time (e.g. in a gas syringe or by downward displacement of water) and record the volume at regular time intervals, or measure the loss in mass as the gas escapes; the rate is the change in volume (or mass) divided by time. Award marks for the definition, the factors, and a valid measurement method.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 14.3 Concentration and Rates (Differential Rate Laws) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.03%3A_Concentration_and_Rates_%28Differential_Rate_Laws%29)
      slug: "introduction-to-rate-laws",
      title: "Introduction to Rate Laws",
      objective:
        "By the end of the topic, learners should be able to write a rate law, define reaction order and the rate constant, and identify the overall order. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 2.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- The **rate law** shows how the reaction rate depends on the concentrations of the reactants.
- **This topic:** the form of the rate law, reaction order, and the rate constant.

## The rate law

- **Rate law:** rate = **k [A]ᵐ [B]ⁿ**.
- **k** is the **rate constant**; **m** and **n** are the **orders** with respect to A and B.
- The exponents m and n are found by **experiment**, not from the coefficients in the equation.

## Reaction order

- **Order with respect to a reactant** — the power to which its concentration is raised in the rate law.
- **Overall order** — the **sum** of the individual orders (m + n).
- Common orders are **0, 1 and 2**.

## The rate constant k

- **k** is constant at a given **temperature** but changes when the temperature changes.
- Its **units** depend on the overall order of the reaction.

## Types of rate law

- **Differential rate law** — links rate to concentrations (rate = k[A]ᵐ…).
- **Integrated rate law** — links concentration to time (covered in a later topic).

## Common errors and misconceptions

- **Orders equal the coefficients** — orders are found experimentally, not from the balanced equation.
- **k changes with concentration** — k is fixed at a set temperature; only temperature changes it.
- **All reactions are first order** — order must be determined experimentally.`,
      workedExample: `**Task.** A reaction has the rate law rate = k[A]²[B]. State (a) the order with respect to A, (b) the order with respect to B, and (c) the overall order. Then explain how k changes if the temperature is raised.

**Part (a) — Order in A**
- [A] is raised to the power 2, so the reaction is **second order in A**.

**Part (b) — Order in B**
- [B] is raised to the power 1, so the reaction is **first order in B**.

**Part (c) — Overall order**
- Overall order = 2 + 1 = **third order overall**.

**Effect of temperature on k**
- The rate constant k is fixed at a given temperature. If the temperature is **raised**, k **increases**, so the reaction goes faster (even at the same concentrations).

**Conclusion.** The reaction is second order in A, first order in B and third order overall; raising the temperature increases the rate constant k and hence the rate.`,
      quiz: [
        { prompt: "A rate law shows how rate depends on the … of reactants.", options: ["concentrations", "colours", "masses", "volumes"], correctIndex: 0, explanation: "Rate law links rate to concentrations." },
        { prompt: "The general rate law is rate = …", options: ["k[A]ᵐ[B]ⁿ", "k + [A]", "[A]/[B]", "kΔT"], correctIndex: 0, explanation: "rate = k[A]ᵐ[B]ⁿ." },
        { prompt: "k in the rate law is the…", options: ["rate constant", "order", "concentration", "temperature"], correctIndex: 0, explanation: "k is the rate constant." },
        { prompt: "The order with respect to a reactant is its … in the rate law.", options: ["power (exponent)", "coefficient in the equation", "mass", "charge"], correctIndex: 0, explanation: "It is the exponent." },
        { prompt: "Reaction orders are found by…", options: ["experiment", "the balanced equation", "guessing", "the molar mass"], correctIndex: 0, explanation: "Orders are experimental." },
        { prompt: "The overall order is the … of the individual orders.", options: ["sum", "product", "difference", "average"], correctIndex: 0, explanation: "Add the exponents." },
        { prompt: "For rate = k[A]²[B], the order in A is…", options: ["2", "1", "0", "3"], correctIndex: 0, explanation: "[A] is squared." },
        { prompt: "For rate = k[A]²[B], the overall order is…", options: ["3", "2", "1", "0"], correctIndex: 0, explanation: "2 + 1 = 3." },
        { prompt: "The rate constant k is fixed at a given…", options: ["temperature", "concentration", "colour", "volume"], correctIndex: 0, explanation: "k depends on temperature." },
        { prompt: "The units of k depend on the reaction's…", options: ["overall order", "colour", "mass", "volume"], correctIndex: 0, explanation: "Units vary with order." },
        { prompt: "Reaction orders are commonly…", options: ["0, 1 or 2", "always 1", "always 2", "negative"], correctIndex: 0, explanation: "Zero, first and second are common." },
        { prompt: "Raising the temperature makes k…", options: ["increase", "decrease", "stay constant", "become zero"], correctIndex: 0, explanation: "Higher temperature raises k." },
        { prompt: "The exponents in the rate law are … the coefficients in the equation.", options: ["not necessarily equal to", "always equal to", "always double", "always half"], correctIndex: 0, explanation: "Orders are experimental, not the coefficients." },
        { prompt: "A reaction that is zero order in A means rate is … [A].", options: ["independent of", "proportional to", "inversely proportional to", "squared with"], correctIndex: 0, explanation: "[A]⁰ = 1, no dependence." },
        { prompt: "A first-order reactant means doubling its concentration … the rate.", options: ["doubles", "quadruples", "halves", "does not change"], correctIndex: 0, explanation: "Rate ∝ [A]¹." },
        { prompt: "A second-order reactant means doubling its concentration … the rate.", options: ["quadruples", "doubles", "halves", "keeps"], correctIndex: 0, explanation: "Rate ∝ [A]², so ×4." },
        { prompt: "The differential rate law links rate to…", options: ["concentration", "time", "mass", "colour"], correctIndex: 0, explanation: "It relates rate and concentration." },
        { prompt: "Does k change when you change concentrations?", options: ["no", "yes", "only if doubled", "only if halved"], correctIndex: 0, explanation: "k is independent of concentration." },
        { prompt: "For rate = k[A][B], the overall order is…", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "1 + 1 = 2." },
        { prompt: "The rate law must be determined for each reaction by…", options: ["experiment", "the periodic table", "the colour", "the mass"], correctIndex: 0, explanation: "Only experiment gives the orders." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write the general form of a rate law and define the reaction order with respect to a reactant.", answerKey: "The general rate law is rate = k[A]ᵐ[B]ⁿ, where k is the rate constant and m, n are the orders. The order with respect to a reactant is the power (exponent) to which that reactant's concentration is raised in the rate law. Award marks for the rate law form and the definition of order.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "For the rate law rate = k[A]²[B], the overall order of reaction is:", options: ["3", "2", "1", "0"], correctIndex: 0, answerKey: "Overall order = 2 + 1 = 3.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "The exponents in a rate law are:", options: ["determined experimentally", "always the stoichiometric coefficients", "always equal to 1", "equal to the molar masses"], correctIndex: 0, answerKey: "Orders must be found by experiment, not read from the equation.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For a reaction with rate law rate = k[A][B]², state the order with respect to A, the order with respect to B, and the overall order.", answerKey: "Order with respect to A = 1; order with respect to B = 2; overall order = 1 + 2 = 3. Award marks for each correct order.", marks: 3 },
        { type: "ESSAY", prompt: "Explain what a rate law is, the meaning of reaction order and the rate constant, and why the orders in a rate law cannot simply be read from the balanced equation.", answerKey: "A full answer explains that a rate law expresses how the reaction rate depends on reactant concentrations, rate = k[A]ᵐ[B]ⁿ, where k is the rate constant (fixed at a given temperature, changing with temperature, units depending on overall order) and m, n are the orders with respect to each reactant; the overall order is their sum. It explains that the orders reflect the actual reaction mechanism (which steps are rate-determining) rather than the overall stoichiometry, so they must be determined experimentally — the balanced equation does not reveal the mechanism, so the coefficients are generally not the orders. Award marks for the rate-law form, order/rate-constant meanings, and the experimental-determination reasoning.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 14.3 Concentration and Rates (Differential Rate Laws) / Method of Initial Rates (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.03%3A_Concentration_and_Rates_%28Differential_Rate_Laws%29)
      slug: "method-of-initial-rates",
      title: "Determining the Form of the Rate Law (Method of Initial Rates)",
      objective:
        "By the end of the topic, learners should be able to use the method of initial rates to find reaction orders and write the rate law. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 3.)",
      estimatedMinutes: 130,
      notes: `## Introduction

- Reaction orders are found by seeing how the **initial rate** changes when concentrations change.
- **This topic:** the method of initial rates.

## The method of initial rates

1. Run several experiments, changing **one reactant's concentration at a time** while keeping the others constant.
2. Measure the **initial rate** in each experiment.
3. See how the rate changes and deduce the order for that reactant.

## Reading the pattern

| When a reactant's concentration doubles… | …and the rate… | the order is |
|---|---|---|
| ×2 | stays the same | 0 (zero order) |
| ×2 | doubles (×2) | 1 (first order) |
| ×2 | quadruples (×4) | 2 (second order) |

- Repeat for each reactant, then combine the orders into the full rate law.
- Finally, substitute data from one experiment to find the **rate constant k**.

## Example pattern

- For 2NO + O₂ → 2NO₂: doubling [NO] quadruples the rate (second order in NO); doubling [O₂] doubles the rate (first order in O₂).
- So rate = **k[NO]²[O₂]** (third order overall).

## Common errors and misconceptions

- **Changing two concentrations at once** — change only one at a time so its effect can be seen.
- **Using average rate** — use the **initial** rate (before the concentrations change much).
- **Reading order from the equation** — the method gives the orders experimentally.`,
      workedExample: `**Task.** For the reaction A + B → products, the following initial rates were measured. Find the order with respect to A and B and write the rate law.

Experiment 1: [A] = 0.1, [B] = 0.1, rate = 2 ×10⁻³.
Experiment 2: [A] = 0.2, [B] = 0.1, rate = 4 ×10⁻³.
Experiment 3: [A] = 0.1, [B] = 0.2, rate = 8 ×10⁻³.

**Step 1 — Find the order in A (compare 1 and 2)**
- [A] doubles (0.1 → 0.2), [B] constant.
- Rate doubles (2 → 4 ×10⁻³).
- Rate ×2 when [A] ×2 → **first order in A**.

**Step 2 — Find the order in B (compare 1 and 3)**
- [B] doubles (0.1 → 0.2), [A] constant.
- Rate quadruples (2 → 8 ×10⁻³).
- Rate ×4 when [B] ×2 → **second order in B**.

**Step 3 — Write the rate law**
- rate = k[A]¹[B]² = **k[A][B]²** (third order overall).

**Conclusion.** The reaction is first order in A and second order in B, giving the rate law rate = k[A][B]²; the orders were found by changing one concentration at a time and observing the effect on the initial rate.`,
      quiz: [
        { prompt: "The method of initial rates changes … concentration at a time.", options: ["one", "two", "all", "none"], correctIndex: 0, explanation: "Change one, keep the rest constant." },
        { prompt: "It uses the … rate of each experiment.", options: ["initial", "final", "average over hours", "colour"], correctIndex: 0, explanation: "Initial rates are compared." },
        { prompt: "If doubling a reactant leaves the rate unchanged, the order is…", options: ["0", "1", "2", "3"], correctIndex: 0, explanation: "No effect = zero order." },
        { prompt: "If doubling a reactant doubles the rate, the order is…", options: ["1", "0", "2", "3"], correctIndex: 0, explanation: "×2 rate = first order." },
        { prompt: "If doubling a reactant quadruples the rate, the order is…", options: ["2", "1", "0", "4"], correctIndex: 0, explanation: "×4 rate = second order." },
        { prompt: "You keep other concentrations … while changing one.", options: ["constant", "doubled", "zero", "random"], correctIndex: 0, explanation: "Only one variable changes at a time." },
        { prompt: "Doubling [NO] quadruples the rate, so the order in NO is…", options: ["2", "1", "0", "3"], correctIndex: 0, explanation: "×4 = second order." },
        { prompt: "Doubling [O₂] doubles the rate, so the order in O₂ is…", options: ["1", "2", "0", "3"], correctIndex: 0, explanation: "×2 = first order." },
        { prompt: "For 2NO + O₂ → 2NO₂, the rate law from the data is…", options: ["k[NO]²[O₂]", "k[NO][O₂]", "k[NO][O₂]²", "k[NO]²[O₂]²"], correctIndex: 0, explanation: "Second order in NO, first in O₂." },
        { prompt: "After finding the orders, you find k by substituting … from one experiment.", options: ["data", "colours", "masses", "temperatures"], correctIndex: 0, explanation: "Use concentrations and rate to find k." },
        { prompt: "Changing two concentrations at once makes the effect…", options: ["hard to separate", "easier", "zero", "doubled"], correctIndex: 0, explanation: "You cannot isolate each order." },
        { prompt: "If tripling [A] multiplies the rate by 9, the order in A is…", options: ["2", "1", "3", "0"], correctIndex: 0, explanation: "3² = 9, second order." },
        { prompt: "If doubling [A] multiplies the rate by 8, the order in A is…", options: ["3", "2", "1", "0"], correctIndex: 0, explanation: "2³ = 8, third order." },
        { prompt: "The overall order is the … of the reactant orders.", options: ["sum", "product", "difference", "average"], correctIndex: 0, explanation: "Add the orders." },
        { prompt: "The method of initial rates gives the reaction orders…", options: ["experimentally", "from the equation", "by guessing", "from the colour"], correctIndex: 0, explanation: "It is an experimental method." },
        { prompt: "For A + B, if rate doubles with [A] and quadruples with [B], rate = …", options: ["k[A][B]²", "k[A]²[B]", "k[A][B]", "k[A]²[B]²"], correctIndex: 0, explanation: "First in A, second in B." },
        { prompt: "The reaction orders determine the … of the rate law.", options: ["form", "colour", "temperature", "mass"], correctIndex: 0, explanation: "Orders shape the rate law." },
        { prompt: "If doubling [A] halves the rate, the order in A is…", options: ["−1", "1", "2", "0"], correctIndex: 0, explanation: "Inverse relationship gives order −1." },
        { prompt: "Which is the correct first step of the method?", options: ["run experiments changing one concentration", "boil the mixture", "add a catalyst", "measure the colour only"], correctIndex: 0, explanation: "Vary one concentration at a time." },
        { prompt: "The purpose of the method is to find the … of the reaction.", options: ["rate law", "enthalpy", "equilibrium constant", "half-life only"], correctIndex: 0, explanation: "It determines the rate law." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Describe the method of initial rates for finding reaction orders.", answerKey: "In the method of initial rates, several experiments are carried out in which the concentration of one reactant is changed while the others are kept constant, and the initial rate is measured each time. By comparing how the initial rate changes when a concentration changes, the order with respect to that reactant is deduced (e.g. doubling concentration doubling the rate = first order); this is repeated for each reactant, and the orders are combined into the rate law, with k found by substituting data. Award marks for changing one concentration at a time, measuring initial rates, and deducing the orders.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "In an experiment, doubling the concentration of a reactant causes the initial rate to quadruple. The order with respect to that reactant is:", options: ["2", "1", "0", "4"], correctIndex: 0, answerKey: "Rate ×4 when concentration ×2 means second order.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "When the concentration of a reactant is doubled but the initial rate does not change, the reaction is:", options: ["zero order in that reactant", "first order in that reactant", "second order in that reactant", "third order overall"], correctIndex: 0, answerKey: "No change in rate means zero order.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "For A + B → products: doubling [A] doubles the rate, and doubling [B] leaves the rate unchanged. Write the rate law.", answerKey: "Doubling [A] doubling the rate = first order in A; doubling [B] with no change = zero order in B. So rate = k[A]¹[B]⁰ = k[A]. Award marks for the two orders and the rate law rate = k[A].", marks: 2 },
        { type: "ESSAY", prompt: "Explain how the method of initial rates is used to determine the full rate law of a reaction, using worked reasoning for a two-reactant reaction.", answerKey: "A full answer explains that experiments are run varying one reactant's concentration at a time while holding the others constant, and the initial rate is measured in each. Comparing pairs of experiments where only [A] changes gives the order in A (rate unchanged = 0, doubles = 1, quadruples = 2), and comparing pairs where only [B] changes gives the order in B. Worked reasoning example: if doubling [A] doubles the rate (first order in A) and doubling [B] quadruples the rate (second order in B), the rate law is rate = k[A][B]²; the rate constant k is then found by substituting the concentrations and measured rate from one experiment. Award marks for the one-at-a-time procedure, deducing each order from the rate change, and combining into the rate law with k.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 14.4 The Change of Concentration with Time (Integrated Rate Laws) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.04%3A_The_Change_of_Concentration_with_Time_%28Integrated_Rate_Laws%29)
      slug: "the-integrated-rate-law",
      title: "The Integrated Rate Law",
      objective:
        "By the end of the topic, learners should be able to state the integrated rate laws and half-lives for zero-, first- and second-order reactions and identify the order from a straight-line plot. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 4.)",
      estimatedMinutes: 140,
      notes: `## Introduction

- The **integrated rate law** shows how concentration changes with **time**.
- **This topic:** the integrated rate laws and half-lives for zero-, first- and second-order reactions.

## First-order reactions

- **Integrated rate law:** ln[A] = ln[A]₀ − kt.
- **Straight-line plot:** ln[A] against time (gradient = −k).
- **Half-life:** t½ = 0.693 ÷ k — **independent of concentration** (constant half-life).

## Second-order reactions

- **Integrated rate law:** 1/[A] = 1/[A]₀ + kt.
- **Straight-line plot:** 1/[A] against time (gradient = +k).
- **Half-life:** t½ = 1 ÷ (k[A]₀) — depends on initial concentration.

## Zero-order reactions

- **Integrated rate law:** [A] = [A]₀ − kt.
- **Straight-line plot:** [A] against time (gradient = −k).
- **Half-life:** t½ = [A]₀ ÷ (2k) — depends on initial concentration.

## Identifying the order from a graph

| Straight-line plot | Order |
|---|---|
| [A] vs time | zero order |
| ln[A] vs time | first order |
| 1/[A] vs time | second order |

## Reactions with more than one reactant

- The integrated rate law can be applied by keeping other reactants in large excess so their concentrations stay effectively constant (pseudo-order method).

## Common errors and misconceptions

- **First-order half-life depends on concentration** — it is **constant** (independent of concentration).
- **Wrong plot** — check which plot (of [A], ln[A] or 1/[A]) gives a straight line to find the order.
- **Confusing the half-life formulas** — each order has its own half-life expression.`,
      workedExample: `**Task.** A first-order reaction has a rate constant k = 0.0231 s⁻¹. (a) Calculate its half-life. (b) State how the half-life changes as the reaction proceeds and how you would confirm the reaction is first order from a graph.

**Part (a) — Half-life of a first-order reaction**
1. t½ = 0.693 ÷ k.
2. t½ = 0.693 ÷ 0.0231.
3. t½ = **30 s**.

**Part (b) — Behaviour and graphical test**
- For a first-order reaction, the half-life is **constant** (independent of concentration), so it stays 30 s throughout the reaction.
- To confirm first order, plot **ln[A] against time**; a **straight line** (gradient −k) confirms it is first order.

**Conclusion.** The half-life is 30 s and stays constant because the reaction is first order; a straight-line plot of ln[A] against time confirms the order.`,
      quiz: [
        { prompt: "The integrated rate law relates concentration to…", options: ["time", "colour", "mass", "pressure only"], correctIndex: 0, explanation: "It shows how [A] changes with time." },
        { prompt: "For a first-order reaction, a straight line is given by plotting…", options: ["ln[A] vs time", "[A] vs time", "1/[A] vs time", "[A]² vs time"], correctIndex: 0, explanation: "First order: ln[A] linear." },
        { prompt: "The half-life of a first-order reaction is…", options: ["0.693/k", "1/(k[A]₀)", "[A]₀/2k", "k[A]₀"], correctIndex: 0, explanation: "t½ = 0.693/k." },
        { prompt: "The first-order half-life is … of concentration.", options: ["independent", "dependent", "half", "double"], correctIndex: 0, explanation: "It stays constant." },
        { prompt: "For a second-order reaction, a straight line is given by plotting…", options: ["1/[A] vs time", "ln[A] vs time", "[A] vs time", "[A]² vs time"], correctIndex: 0, explanation: "Second order: 1/[A] linear." },
        { prompt: "The half-life of a second-order reaction is…", options: ["1/(k[A]₀)", "0.693/k", "[A]₀/2k", "k[A]₀"], correctIndex: 0, explanation: "t½ = 1/(k[A]₀)." },
        { prompt: "For a zero-order reaction, a straight line is given by plotting…", options: ["[A] vs time", "ln[A] vs time", "1/[A] vs time", "[A]² vs time"], correctIndex: 0, explanation: "Zero order: [A] linear." },
        { prompt: "The half-life of a zero-order reaction is…", options: ["[A]₀/2k", "0.693/k", "1/(k[A]₀)", "k[A]₀"], correctIndex: 0, explanation: "t½ = [A]₀/(2k)." },
        { prompt: "The first-order integrated rate law is…", options: ["ln[A] = ln[A]₀ − kt", "1/[A] = 1/[A]₀ + kt", "[A] = [A]₀ − kt", "[A] = kt"], correctIndex: 0, explanation: "ln[A] linear with time." },
        { prompt: "The second-order integrated rate law is…", options: ["1/[A] = 1/[A]₀ + kt", "ln[A] = ln[A]₀ − kt", "[A] = [A]₀ − kt", "[A] = kt²"], correctIndex: 0, explanation: "1/[A] linear with time." },
        { prompt: "The zero-order integrated rate law is…", options: ["[A] = [A]₀ − kt", "ln[A] = ln[A]₀ − kt", "1/[A] = 1/[A]₀ + kt", "[A] = k/t"], correctIndex: 0, explanation: "[A] linear with time." },
        { prompt: "A first-order reaction with k = 0.0231 s⁻¹ has a half-life of…", options: ["30 s", "300 s", "3 s", "23 s"], correctIndex: 0, explanation: "0.693/0.0231 = 30 s." },
        { prompt: "If a plot of ln[A] vs time is a straight line, the order is…", options: ["1", "0", "2", "3"], correctIndex: 0, explanation: "First order gives linear ln[A]." },
        { prompt: "If a plot of 1/[A] vs time is a straight line, the order is…", options: ["2", "1", "0", "3"], correctIndex: 0, explanation: "Second order gives linear 1/[A]." },
        { prompt: "If a plot of [A] vs time is a straight line, the order is…", options: ["0", "1", "2", "3"], correctIndex: 0, explanation: "Zero order gives linear [A]." },
        { prompt: "The gradient of the first-order ln[A] plot equals…", options: ["−k", "+k", "k[A]₀", "0.693"], correctIndex: 0, explanation: "Slope is −k." },
        { prompt: "Which order has a half-life that stays constant as the reaction proceeds?", options: ["first order", "zero order", "second order", "none"], correctIndex: 0, explanation: "Only the first-order half-life is constant." },
        { prompt: "A reactant kept in large excess is used to simplify a multi-reactant rate law by making its concentration…", options: ["effectively constant", "zero", "doubled", "coloured"], correctIndex: 0, explanation: "Pseudo-order method." },
        { prompt: "The units of k differ between orders because of the … rate law form.", options: ["different", "same", "coloured", "gaseous"], correctIndex: 0, explanation: "Units depend on the order." },
        { prompt: "To find the order from experimental data, see which plot gives a…", options: ["straight line", "curve", "circle", "colour change"], correctIndex: 0, explanation: "The linear plot identifies the order." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the integrated rate law and half-life expression for a first-order reaction.", answerKey: "First-order integrated rate law: ln[A] = ln[A]₀ − kt. Half-life: t½ = 0.693/k (independent of the initial concentration). Award marks for the integrated rate law and the half-life expression.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "A reaction gives a straight line when 1/[A] is plotted against time. The reaction is:", options: ["second order", "first order", "zero order", "third order"], correctIndex: 0, answerKey: "A linear 1/[A] vs time plot indicates second order.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which property is unique to a first-order reaction?", options: ["a constant half-life independent of concentration", "a half-life that increases with concentration", "a linear plot of [A] vs time", "no rate constant"], correctIndex: 0, answerKey: "Only a first-order reaction has a half-life independent of concentration.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A first-order reaction has a rate constant k = 0.0347 s⁻¹. Calculate its half-life.", answerKey: "t½ = 0.693/k = 0.693/0.0347 = 20 s (approximately). Award marks for using the correct formula and the answer ≈ 20 s.", marks: 2 },
        { type: "ESSAY", prompt: "Compare the integrated rate laws and half-lives of zero-, first- and second-order reactions, and explain how a graph can be used to determine the order of a reaction.", answerKey: "A full answer gives: zero order — [A] = [A]₀ − kt, half-life t½ = [A]₀/2k (depends on concentration), linear plot of [A] vs time; first order — ln[A] = ln[A]₀ − kt, half-life t½ = 0.693/k (independent of concentration), linear plot of ln[A] vs time; second order — 1/[A] = 1/[A]₀ + kt, half-life t½ = 1/(k[A]₀) (inversely proportional to concentration), linear plot of 1/[A] vs time. To determine the order graphically, plot [A], ln[A] and 1/[A] against time and see which gives a straight line: the one that is linear identifies the order (zero, first or second respectively). Award marks for the three integrated rate laws and half-lives and the graphical method.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 14.6 Reaction Mechanisms (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.06%3A_Reaction_Mechanisms)
      slug: "reaction-mechanisms",
      title: "Reaction Mechanisms",
      objective:
        "By the end of the topic, learners should be able to describe a reaction mechanism, identify elementary steps, intermediates and the rate-determining step. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 5.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Most reactions happen in a **series of steps**, not all at once.
- **This topic:** reaction mechanisms, elementary steps and the rate-determining step.

## What a mechanism is

- **Reaction mechanism** — the sequence of **elementary steps** by which a reaction actually happens at the molecular level.
- The steps must **add up** to the overall balanced equation.

## Elementary steps and molecularity

- **Elementary step** — a single molecular event (a collision or a break-up).
- **Molecularity** — the number of particles in an elementary step: **unimolecular** (1), **bimolecular** (2), rarely **termolecular** (3).
- For an **elementary** step (only), the order equals its molecularity.

## Intermediates and the rate-determining step

- **Intermediate** — a species made in one step and used up in a later step; it does **not** appear in the overall equation.
- **Rate-determining step** — the **slowest** step; it controls the overall rate.
- The observed rate law matches the rate law of the **rate-determining step**, not the overall equation.

## Common errors and misconceptions

- **Intermediates appear in the overall equation** — they cancel out and do not appear.
- **The overall equation gives the rate law** — the rate-determining (slowest) step does.
- **Order equals molecularity for the overall reaction** — this only holds for a single **elementary** step.`,
      workedExample: `**Task.** A reaction occurs in two steps: Step 1 (slow): A + A → C (an intermediate). Step 2 (fast): C + B → products. (a) Identify the intermediate and the rate-determining step. (b) Predict the rate law.

**Step 1 — Identify the intermediate**
- C is formed in Step 1 and used up in Step 2, so **C is the intermediate** (it does not appear in the overall equation).

**Step 2 — Identify the rate-determining step**
- Step 1 is the **slow** step, so it is the **rate-determining step**; it controls the overall rate.

**Step 3 — Predict the rate law**
- The rate law comes from the rate-determining (slow) step, A + A → C.
- Two A particles collide, so rate = **k[A]²** (second order in A, and independent of [B]).

**Conclusion.** C is the intermediate and Step 1 is the rate-determining step; because the slow step involves two A particles, the predicted rate law is rate = k[A]², which does not depend on [B].`,
      quiz: [
        { prompt: "A reaction mechanism is the sequence of … steps.", options: ["elementary", "final", "reverse only", "catalytic only"], correctIndex: 0, explanation: "Mechanisms are made of elementary steps." },
        { prompt: "The elementary steps must add up to the … equation.", options: ["overall balanced", "ionic", "rate", "half"], correctIndex: 0, explanation: "Steps sum to the overall reaction." },
        { prompt: "An elementary step involving one particle is…", options: ["unimolecular", "bimolecular", "termolecular", "zero"], correctIndex: 0, explanation: "One particle = unimolecular." },
        { prompt: "An elementary step involving two particles is…", options: ["bimolecular", "unimolecular", "termolecular", "zero"], correctIndex: 0, explanation: "Two particles = bimolecular." },
        { prompt: "An intermediate is made in one step and … in another.", options: ["used up", "created again", "ignored", "doubled"], correctIndex: 0, explanation: "Intermediates are consumed later." },
        { prompt: "An intermediate … in the overall equation.", options: ["does not appear", "always appears", "is the product", "is a catalyst"], correctIndex: 0, explanation: "It cancels out." },
        { prompt: "The slowest step is the … step.", options: ["rate-determining", "fastest", "first always", "last always"], correctIndex: 0, explanation: "The slow step controls the rate." },
        { prompt: "The observed rate law matches the … step.", options: ["rate-determining", "fastest", "overall equation", "final product"], correctIndex: 0, explanation: "The slow step sets the rate law." },
        { prompt: "For an elementary step, the order equals its…", options: ["molecularity", "colour", "mass", "half-life"], correctIndex: 0, explanation: "Order = molecularity for elementary steps." },
        { prompt: "A reaction cannot go faster than its…", options: ["slowest step", "fastest step", "first product", "catalyst"], correctIndex: 0, explanation: "The slow step limits the rate." },
        { prompt: "If the slow step is A + A → C, the rate law is…", options: ["k[A]²", "k[A]", "k[B]", "k[A][B]"], correctIndex: 0, explanation: "Two A particles: rate = k[A]²." },
        { prompt: "A termolecular step involves … particles.", options: ["three", "one", "two", "zero"], correctIndex: 0, explanation: "Three particles = termolecular." },
        { prompt: "Termolecular steps are…", options: ["rare", "common", "impossible", "always fast"], correctIndex: 0, explanation: "Three-particle collisions are unlikely." },
        { prompt: "The overall equation … used to predict the rate law directly.", options: ["cannot be", "can always be", "must be", "is best"], correctIndex: 0, explanation: "The mechanism (slow step) gives the rate law." },
        { prompt: "The individual molecular events in a mechanism are called…", options: ["elementary steps", "final steps", "products", "catalysts"], correctIndex: 0, explanation: "They are elementary steps." },
        { prompt: "Which species is present during a reaction but not in the overall equation?", options: ["an intermediate", "a reactant", "a product", "a spectator"], correctIndex: 0, explanation: "An intermediate is transient." },
        { prompt: "If Step 2 is the slow step, the rate law is based on…", options: ["Step 2", "Step 1", "the products only", "the catalyst"], correctIndex: 0, explanation: "The rate-determining step sets the rate law." },
        { prompt: "The number of particles in an elementary step is its…", options: ["molecularity", "order overall", "half-life", "enthalpy"], correctIndex: 0, explanation: "Molecularity counts the particles." },
        { prompt: "A mechanism explains the reaction at the … level.", options: ["molecular", "colour", "mass", "temperature"], correctIndex: 0, explanation: "It describes molecular events." },
        { prompt: "The rate-determining step is a bottleneck because it is the…", options: ["slowest", "fastest", "first", "coloured"], correctIndex: 0, explanation: "The slow step limits the overall rate." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a reaction mechanism and an intermediate.", answerKey: "A reaction mechanism is the sequence of elementary steps by which a reaction actually takes place at the molecular level, which must add up to the overall balanced equation. An intermediate is a species formed in one step and consumed in a later step, so it does not appear in the overall equation. Award marks for both definitions.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "The step in a mechanism that determines the overall rate of reaction is the:", options: ["slowest (rate-determining) step", "fastest step", "first step always", "last step always"], correctIndex: 0, answerKey: "The slowest step is the rate-determining step.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "For a single elementary step, the reaction order is equal to its:", options: ["molecularity", "colour", "molar mass", "half-life"], correctIndex: 0, answerKey: "For elementary steps, order equals molecularity.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "A reaction has two steps: (slow) NO₂ + NO₂ → NO₃ + NO, then (fast) NO₃ + CO → NO₂ + CO₂. Identify the intermediate and predict the rate law.", answerKey: "The intermediate is NO₃ (formed in the slow step and consumed in the fast step; it does not appear in the overall equation). The rate law comes from the slow (rate-determining) step, NO₂ + NO₂: rate = k[NO₂]². Award marks for identifying NO₃ as the intermediate and the rate law rate = k[NO₂]².", marks: 3 },
        { type: "ESSAY", prompt: "Explain what a reaction mechanism is, including the roles of elementary steps, intermediates and the rate-determining step, and why the rate law is based on the rate-determining step rather than the overall equation.", answerKey: "A full answer explains that a reaction mechanism is the series of elementary steps (individual molecular events, described by their molecularity — unimolecular, bimolecular, rarely termolecular) that together make up the overall balanced reaction. Intermediates are species made in one step and used up in a later step, so they do not appear in the overall equation. The rate-determining step is the slowest step, and since a reaction can go no faster than its slowest step, this step controls the overall rate; therefore the experimentally observed rate law reflects the rate-determining step (and any prior fast equilibria), not the overall stoichiometry — which is why the rate law cannot generally be read from the balanced equation. Award marks for the mechanism/elementary-step idea, intermediates, the rate-determining step, and why it sets the rate law.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry: The Central Science) — 14.5 Temperature and Rate (Arrhenius / activation energy) (https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/14%3A_Chemical_Kinetics/14.05%3A_Temperature_and_Rate_%28The_Arrhenius_Equation%29)
      slug: "activation-energy",
      title: "Activation Energy",
      objective:
        "By the end of the topic, learners should be able to define activation energy, read an energy profile diagram, and explain how a catalyst and temperature affect the rate. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 6.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- Reactions need a minimum "kick" of energy to get going — the **activation energy**.
- **This topic:** activation energy, energy profiles, and the effect of catalysts and temperature.

## Activation energy

- **Activation energy (Ea)** — the **minimum energy** that colliding particles must have for a reaction to occur.
- Particles reach a high-energy **transition state** at the top of the energy barrier, where bonds are partly broken and partly formed.

## Energy profile diagram

- Shows the energy of the reactants and products and the **energy barrier** (Ea) between them.

\`\`\`svg Energy profile with activation energy
<svg viewBox="0 0 240 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy profile showing activation energy barrier">
  <line x1="20" y1="120" x2="220" y2="120" stroke="#334155"/>
  <line x1="20" y1="120" x2="20" y2="20" stroke="#334155"/>
  <path d="M30 90 C70 90 90 30 120 30 C150 30 170 100 210 100" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="35" y="86" font-size="8" fill="#334155">reactants</text>
  <text x="175" y="112" font-size="8" fill="#334155">products</text>
  <line x1="120" y1="90" x2="120" y2="30" stroke="#dc2626" stroke-dasharray="2 2"/>
  <text x="124" y="60" font-size="8" fill="#dc2626">Ea</text>
</svg>
\`\`\`

## Effect of temperature

- Higher temperature gives particles more kinetic energy, so **more particles have energy ≥ Ea** — the rate increases sharply.

## Effect of a catalyst

- A **catalyst** provides an **alternative pathway with a lower activation energy**, so more collisions succeed and the reaction is faster; the catalyst is not used up.

## Common errors and misconceptions

- **Catalysts supply energy** — a catalyst lowers Ea, it does not add energy.
- **Ea is the energy released** — Ea is the energy barrier that must be overcome, not the energy change of the reaction.
- **Temperature only makes particles collide more often** — its main effect is giving more particles energy above Ea.`,
      workedExample: `**Task.** Explain what the activation energy is, and use it to explain why (a) raising the temperature speeds up a reaction and (b) adding a catalyst speeds up a reaction.

**Step 1 — Activation energy**
- The activation energy (Ea) is the minimum energy that colliding particles must have for a successful reaction; only collisions with energy ≥ Ea lead to products.

**Step 2 — Effect of temperature**
- Raising the temperature increases the average kinetic energy of the particles.
- A **larger fraction of particles** now have energy ≥ Ea, so a greater proportion of collisions are successful and the rate increases sharply.

**Step 3 — Effect of a catalyst**
- A catalyst provides an **alternative reaction pathway with a lower activation energy**.
- With a lower Ea, more colliding particles have enough energy to react, so more collisions succeed and the reaction goes faster — without the catalyst being used up.

**Conclusion.** The activation energy is the energy barrier to reaction; heating raises the fraction of particles that can overcome it, and a catalyst lowers the barrier itself, both increasing the rate.`,
      quiz: [
        { prompt: "Activation energy is the … energy needed for a reaction.", options: ["minimum", "maximum", "average", "total"], correctIndex: 0, explanation: "It is the minimum energy to react." },
        { prompt: "The high-energy state at the top of the barrier is the…", options: ["transition state", "product", "reactant", "catalyst"], correctIndex: 0, explanation: "The transition state is at the peak." },
        { prompt: "An energy profile diagram shows the energy barrier between reactants and…", options: ["products", "catalysts", "solvents", "temperature"], correctIndex: 0, explanation: "It plots reactants → products." },
        { prompt: "Raising the temperature increases the fraction of particles with energy…", options: ["≥ Ea", "< Ea", "= 0", "= colour"], correctIndex: 0, explanation: "More particles clear the barrier." },
        { prompt: "A catalyst provides a pathway with a … activation energy.", options: ["lower", "higher", "zero", "negative"], correctIndex: 0, explanation: "It lowers Ea." },
        { prompt: "A catalyst is … during the reaction.", options: ["not used up", "consumed", "destroyed", "vaporised"], correctIndex: 0, explanation: "Catalysts are regenerated." },
        { prompt: "Only collisions with energy … Ea are successful.", options: ["greater than or equal to", "less than", "equal to zero", "far below"], correctIndex: 0, explanation: "They must meet or exceed Ea." },
        { prompt: "A higher activation energy means a … reaction (at a given temperature).", options: ["slower", "faster", "coloured", "reversed"], correctIndex: 0, explanation: "Fewer particles can clear a high barrier." },
        { prompt: "Ea is the … , not the energy change of the reaction.", options: ["energy barrier", "product mass", "colour", "half-life"], correctIndex: 0, explanation: "Ea is the barrier height." },
        { prompt: "A catalyst does NOT change the … of the reaction.", options: ["overall enthalpy change", "activation energy", "rate", "pathway"], correctIndex: 0, explanation: "It changes Ea/rate, not ΔH." },
        { prompt: "The main effect of temperature on rate is giving more particles energy above…", options: ["Ea", "the boiling point", "zero", "the colour"], correctIndex: 0, explanation: "More particles exceed Ea." },
        { prompt: "The transition state has bonds that are…", options: ["partly broken and partly formed", "fully broken", "fully formed", "ionic only"], correctIndex: 0, explanation: "Bonds are in between." },
        { prompt: "Lowering the activation energy … the rate.", options: ["increases", "decreases", "does not change", "stops"], correctIndex: 0, explanation: "More successful collisions." },
        { prompt: "A catalyst speeds up a reaction by lowering the…", options: ["activation energy", "temperature", "concentration", "colour"], correctIndex: 0, explanation: "It provides a lower-Ea path." },
        { prompt: "If Ea is much larger than the average kinetic energy, the reaction is…", options: ["slow", "fast", "instant", "impossible only"], correctIndex: 0, explanation: "Few particles can react." },
        { prompt: "The energy profile peak corresponds to the…", options: ["transition state", "reactants", "products", "catalyst"], correctIndex: 0, explanation: "The peak is the transition state." },
        { prompt: "Does a catalyst change the products of a reaction?", options: ["no", "yes", "sometimes doubles them", "removes them"], correctIndex: 0, explanation: "It only changes the pathway/rate." },
        { prompt: "The difference in energy between reactants and products is the…", options: ["enthalpy change (ΔH)", "activation energy", "half-life", "order"], correctIndex: 0, explanation: "ΔH is the reactant–product energy difference." },
        { prompt: "A small activation energy usually means a … reaction.", options: ["fast", "slow", "coloured", "endothermic only"], correctIndex: 0, explanation: "Low barrier = fast." },
        { prompt: "Which lowers Ea without being used up?", options: ["a catalyst", "heat", "a reactant", "a product"], correctIndex: 0, explanation: "A catalyst lowers Ea and is regenerated." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define activation energy and explain what a catalyst does to it.", answerKey: "Activation energy (Ea) is the minimum energy that colliding particles must have for a reaction to occur. A catalyst provides an alternative reaction pathway with a lower activation energy, so more collisions have enough energy to succeed and the reaction goes faster; the catalyst is not used up. Award marks for the definition and the catalyst's effect on Ea.", marks: 3 },
        { type: "MULTIPLE_CHOICE", prompt: "On an energy profile diagram, the activation energy is:", options: ["the energy from the reactants up to the peak (transition state)", "the energy difference between reactants and products", "the energy of the products", "always zero"], correctIndex: 0, answerKey: "Ea is the barrier from the reactants to the top of the curve.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Increasing the temperature increases the rate mainly because:", options: ["more particles have energy greater than or equal to Ea", "the activation energy decreases", "the products change", "the enthalpy change increases"], correctIndex: 0, answerKey: "Higher temperature raises the fraction of particles with energy ≥ Ea.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Explain why a reaction with a high activation energy is slow at room temperature.", answerKey: "At room temperature only a small fraction of the particles have kinetic energy equal to or greater than the high activation energy, so only a few collisions are successful and the reaction proceeds slowly. Award marks for the small fraction of particles exceeding a high Ea and the resulting few successful collisions.", marks: 2 },
        { type: "ESSAY", prompt: "Explain the meaning of activation energy using an energy profile diagram, and describe how increasing the temperature and adding a catalyst each increase the rate of reaction.", answerKey: "A full answer defines activation energy as the minimum energy colliding particles need to react and describes an energy profile: reactants rise over an energy barrier (Ea) through a high-energy transition state (bonds partly broken/formed) to the products, with ΔH the difference between reactant and product energies. Increasing temperature gives particles greater kinetic energy so a larger fraction have energy ≥ Ea and more collisions succeed, sharply increasing the rate. Adding a catalyst provides an alternative pathway with a lower activation energy, so a larger fraction of collisions have enough energy to react, increasing the rate without the catalyst being consumed and without changing the products or ΔH. Award marks for the definition/energy profile, the temperature effect, and the catalyst effect.", marks: 6 },
      ],
    },
    {
      // source: LibreTexts (Chemistry - Atoms First, OpenStax) — 17.5 Collision Theory (https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_-_Atoms_First_1e_(OpenSTAX)/17%3A_Kinetics/17.5%3A_Collision_Theory)
      slug: "collision-theory",
      title: "Collision Theory",
      objective:
        "By the end of the topic, learners should be able to state collision theory and use it to explain how the factors affecting rate work. (MoE Grade 11 Period VI, Chemical Kinetics CONTENTS 7.)",
      estimatedMinutes: 120,
      notes: `## Introduction

- **Collision theory** explains *why* the rate factors work, in terms of particle collisions.
- **This topic:** the requirements for a successful collision and how they explain the rate factors.

## Collision theory

- Particles must **collide** to react.
- For a collision to be **successful** (lead to reaction), two conditions must be met:
1. The particles must collide with enough energy — at least the **activation energy (Ea)**.
2. The particles must collide with the **correct orientation** (the right way round).
- Only a fraction of collisions are successful; most do not lead to reaction.

## Explaining the rate factors

| Factor | Effect on collisions | Result |
|---|---|---|
| Higher concentration/pressure | more particles per volume → more frequent collisions | faster |
| Higher temperature | particles move faster; more collisions and more with energy ≥ Ea | faster |
| Larger surface area | more particles exposed → more collisions | faster |
| Catalyst | lowers Ea → more collisions succeed | faster |

## Common errors and misconceptions

- **Every collision reacts** — only collisions with enough energy **and** the right orientation succeed.
- **Only frequency matters** — energy and orientation are also required.
- **Temperature only increases collision frequency** — its bigger effect is increasing the fraction of collisions with energy ≥ Ea.`,
      workedExample: `**Task.** Use collision theory to explain why (a) increasing the concentration and (b) increasing the temperature both increase the rate of a reaction.

**Step 1 — The requirements for a successful collision**
- Particles must collide with at least the activation energy **and** the correct orientation to react.

**Step 2 — Increasing the concentration**
- A higher concentration means **more particles in the same volume**.
- The particles collide **more frequently**, so there are more successful collisions per second, and the rate increases.

**Step 3 — Increasing the temperature**
- Higher temperature makes the particles move **faster**, so they collide more often.
- More importantly, a **larger fraction of collisions have energy ≥ Ea**, so a greater proportion are successful.
- Both effects increase the rate, and the second is the larger one.

**Conclusion.** By collision theory, more concentrated mixtures collide more frequently, and hotter mixtures collide both more often and with more particles exceeding the activation energy — so both raise the rate.`,
      quiz: [
        { prompt: "Collision theory says particles must … to react.", options: ["collide", "dissolve", "evaporate", "freeze"], correctIndex: 0, explanation: "Reaction requires collisions." },
        { prompt: "A successful collision needs enough energy and the correct…", options: ["orientation", "colour", "mass", "temperature"], correctIndex: 0, explanation: "Energy and orientation are both needed." },
        { prompt: "The minimum energy for a successful collision is the…", options: ["activation energy", "enthalpy", "half-life", "molar mass"], correctIndex: 0, explanation: "Ea must be met." },
        { prompt: "Most collisions … lead to reaction.", options: ["do not", "always", "never", "reverse"], correctIndex: 0, explanation: "Only a fraction succeed." },
        { prompt: "Higher concentration causes … collisions.", options: ["more frequent", "less frequent", "no", "coloured"], correctIndex: 0, explanation: "More particles collide more often." },
        { prompt: "Higher temperature makes particles move…", options: ["faster", "slower", "in circles", "not at all"], correctIndex: 0, explanation: "They gain kinetic energy." },
        { prompt: "Higher temperature increases the fraction of collisions with energy…", options: ["≥ Ea", "< Ea", "= 0", "= colour"], correctIndex: 0, explanation: "More collisions exceed Ea." },
        { prompt: "Larger surface area means … particles exposed.", options: ["more", "fewer", "no", "coloured"], correctIndex: 0, explanation: "More surface, more collisions." },
        { prompt: "A catalyst increases the rate by … the activation energy.", options: ["lowering", "raising", "removing all", "doubling"], correctIndex: 0, explanation: "Lower Ea = more successful collisions." },
        { prompt: "The two requirements for a successful collision are energy and…", options: ["orientation", "colour", "mass", "pressure"], correctIndex: 0, explanation: "Correct orientation is needed." },
        { prompt: "Does every collision cause a reaction?", options: ["no", "yes", "only at night", "only when cold"], correctIndex: 0, explanation: "Only successful collisions react." },
        { prompt: "Increasing gas pressure acts like increasing…", options: ["concentration", "temperature only", "colour", "mass"], correctIndex: 0, explanation: "Higher pressure packs particles closer." },
        { prompt: "The main reason heating speeds a reaction is more collisions with energy…", options: ["above Ea", "below Ea", "of zero", "of colour"], correctIndex: 0, explanation: "The energy effect dominates." },
        { prompt: "Powdering a solid increases the rate because it increases the…", options: ["surface area", "temperature", "colour", "mass"], correctIndex: 0, explanation: "More exposed surface." },
        { prompt: "Collision theory explains the factors affecting reaction…", options: ["rate", "colour", "mass", "half-life only"], correctIndex: 0, explanation: "It explains rate changes." },
        { prompt: "A collision with the wrong orientation…", options: ["does not react", "always reacts", "explodes", "reverses"], correctIndex: 0, explanation: "Orientation must be correct." },
        { prompt: "More frequent collisions generally give a … rate.", options: ["higher", "lower", "zero", "coloured"], correctIndex: 0, explanation: "More collisions per second." },
        { prompt: "The fraction of successful collisions increases when Ea is…", options: ["lowered", "raised", "removed only", "coloured"], correctIndex: 0, explanation: "Lower Ea = more succeed." },
        { prompt: "Which factor does collision theory NOT relate to rate?", options: ["the colour of the container", "concentration", "temperature", "surface area"], correctIndex: 0, explanation: "Container colour is irrelevant." },
        { prompt: "Collision theory links the rate to the number of … collisions per second.", options: ["successful", "total only", "coloured", "cold"], correctIndex: 0, explanation: "Successful collisions determine rate." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State the two conditions that must be met for a collision between particles to be successful.", answerKey: "The particles must collide with at least the activation energy (enough energy), and they must collide with the correct orientation (the right way round). Award a mark for each condition.", marks: 2 },
        { type: "MULTIPLE_CHOICE", prompt: "According to collision theory, increasing the concentration of a reactant increases the rate because:", options: ["collisions become more frequent", "the activation energy decreases", "the products change", "the temperature rises"], correctIndex: 0, answerKey: "More particles per volume means more frequent collisions.", marks: 1 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement about collisions is correct?", options: ["only a fraction of collisions lead to reaction", "every collision leads to reaction", "collisions are not needed for reaction", "orientation does not matter"], correctIndex: 0, answerKey: "Only collisions with enough energy and correct orientation react.", marks: 1 },
        { type: "SHORT_ANSWER", prompt: "Use collision theory to explain why grinding a solid reactant into a powder increases the rate of its reaction with an acid.", answerKey: "Grinding the solid into a powder greatly increases its surface area, so more of its particles are exposed to the acid. This means the acid particles can collide with the solid more frequently, giving more successful collisions per second and therefore a faster rate. Award marks for the increased surface area and the more frequent collisions.", marks: 2 },
        { type: "ESSAY", prompt: "State collision theory and use it to explain how concentration, temperature, surface area and a catalyst each affect the rate of a reaction.", answerKey: "A full answer states that, according to collision theory, particles must collide with at least the activation energy and with the correct orientation for a reaction to occur, and only a fraction of collisions are successful. It then explains: increasing concentration (or gas pressure) puts more particles in a given volume, so collisions are more frequent and the rate rises; increasing temperature makes particles move faster (more frequent collisions) and, more importantly, increases the fraction of collisions with energy ≥ Ea, sharply raising the rate; increasing the surface area of a solid exposes more particles, giving more frequent collisions; a catalyst lowers the activation energy so a greater fraction of collisions succeed. Award marks for the statement of collision theory and correct collision-based explanations of at least three of the four factors.", marks: 6 },
      ],
    },
  ],
};
