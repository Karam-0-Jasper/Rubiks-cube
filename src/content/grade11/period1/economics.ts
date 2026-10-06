import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 11,
// Semester One, Period I: Price Determination. CONTENTS: (1) Determination of
// price by supply and demand — equilibrium price and quantity, shortage &
// surplus, changes in equilibrium; (2) Definitions: price elasticity of demand
// and supply, income elasticity, cross-price elasticity; (3) Calculation of
// price elasticity of demand and supply, income elasticity and cross-elasticity;
// (4) Price elasticity and total revenue (demand and supply); (5) Determinants
// of price elasticity of demand and supply. Sourced from OpenStax Principles of
// Economics 3e (Chapters 3 and 5).
export const economicsG11P1: PeriodContent = {
  grade: 11,
  number: 1,
  title: "Price Determination",
  summary:
    "Period I of the MoE Grade 11 Economics syllabus. Learners explain how the interaction of supply and demand fixes the market price, find equilibrium and the shortages or surpluses that appear away from it, and trace how shifts in demand or supply change the equilibrium. They then define, calculate and interpret the elasticities — price elasticity of demand and supply, income elasticity and cross-price elasticity — link the price elasticity of demand to total revenue, and list the determinants of elasticity.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 3.3 Changes in Equilibrium Price and Quantity: The Four-Step Process (https://openstax.org/books/principles-economics-3e/pages/3-3-changes-in-equilibrium-price-and-quantity-the-four-step-process)
    {
      slug: "determination-of-price-by-supply-and-demand",
      title: "Determination of Price by Supply and Demand",
      objective:
        "By the end of the topic, learners should be able to find the equilibrium price and quantity, explain shortages and surpluses, and use the four-step process to work out how a shift in demand or supply changes the equilibrium.",
      estimatedMinutes: 130,
      notes: `## Equilibrium

**Equilibrium** — the price and quantity where the demand and supply curves cross, so the plans of buyers and sellers agree.
**Equilibrium price** — the price at which **quantity demanded equals quantity supplied**.
**Equilibrium quantity** — the amount bought and sold at the equilibrium price.

\`\`\`svg Equilibrium where demand meets supply
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demand and supply crossing at equilibrium E">
  <line x1="45" y1="15" x2="45" y2="185" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="185" x2="285" y2="185" stroke="#555" stroke-width="1.5"/>
  <text x="10" y="20" font-size="11">Price</text>
  <text x="235" y="205" font-size="11">Quantity</text>
  <line x1="60" y1="35" x2="270" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="252" y="168" font-size="11" fill="#c0392b">D</text>
  <line x1="60" y1="170" x2="270" y2="35" stroke="#1f6feb" stroke-width="2"/>
  <text x="252" y="48" font-size="11" fill="#1f6feb">S</text>
  <circle cx="165" cy="102" r="4" fill="#111"/>
  <text x="172" y="99" font-size="11">E</text>
  <line x1="45" y1="102" x2="165" y2="102" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="165" y1="102" x2="165" y2="185" stroke="#999" stroke-dasharray="3 3"/>
  <text x="12" y="106" font-size="10">Pe</text>
  <text x="160" y="198" font-size="10">Qe</text>
</svg>
\`\`\`

## Shortage and surplus

**Surplus (excess supply)** — at a price **above** equilibrium, quantity supplied exceeds quantity demanded; unsold goods build up and push the price **down**.
**Shortage (excess demand)** — at a price **below** equilibrium, quantity demanded exceeds quantity supplied; buyers compete and push the price **up**.
- Only at the equilibrium price is there neither surplus nor shortage, so the price is steady. The market is **self-correcting**.

## Changes in equilibrium — the four-step process

When an event disturbs the market, work out the new equilibrium in four steps:
1. **Draw the starting position** — the original demand and supply curves and their equilibrium.
2. **Decide which curve the event affects** — demand or supply (a change in the good's own price never shifts its own curve).
3. **Decide the direction of the shift** — right (increase) or left (decrease) — and draw the new curve.
4. **Compare** the new equilibrium price and quantity with the old.

## What each shift does to the equilibrium

| Event | Curve that shifts | Direction | Equilibrium price | Equilibrium quantity |
| --- | --- | --- | --- | --- |
| Demand increases | Demand | Right | Rises | Rises |
| Demand decreases | Demand | Left | Falls | Falls |
| Supply increases | Supply | Right | Falls | Rises |
| Supply decreases | Supply | Left | Rises | Falls |

- *Example (supply increase):* good weather raised the salmon catch, so supply shifted right; equilibrium price fell from 3.25 to 2.50 dollars a pound and equilibrium quantity rose from 250,000 to 550,000 fish — the quantity demanded rose even though the demand curve did not move.
- *Example (demand decrease):* as readers moved to digital news, demand for print media shifted left, lowering both the equilibrium price and quantity.

## When both curves shift

- If demand and supply move together, one of price or quantity has a **definite** direction and the other is **ambiguous** until you know which shift is larger.
- *Example:* if both demand and supply fall, equilibrium quantity definitely falls, but the effect on price depends on the sizes of the two shifts.

## Common errors

- **Confusing a shift with a movement along a curve.** A change in the good's own price causes a movement along the curve, not a shift of it.
- **Shifting the wrong curve.** A change in buyers' incomes or tastes shifts demand; a change in input costs or technology shifts supply.
- **Forgetting that a rightward shift is an increase.** Right = more at each price; left = less at each price.`,
      workedExample: `**Question:** A drought destroys part of the rice harvest. Using the four-step process, explain what happens to the equilibrium price and quantity of rice.

**Solution**

*Step 1 — starting position.* Draw the original demand curve D and supply curve S for rice, crossing at equilibrium E0 with price P0 and quantity Q0.

*Step 2 — which curve?* A drought affects producers' ability to grow rice, so it changes **supply**, not demand. (Buyers' incomes and tastes are unchanged.)

*Step 3 — direction.* Less rice can be supplied at each price, so the **supply curve shifts left**, from S0 to S1.

*Step 4 — compare.* The new curve S1 crosses D at a higher point E1: the **equilibrium price rises** (P1 > P0) and the **equilibrium quantity falls** (Q1 < Q0).

**Answer:** The drought shifts supply leftward; the equilibrium price of rice rises and the equilibrium quantity falls.`,
      quiz: [
        { prompt: "Equilibrium price is the price where", options: ["price is highest", "quantity demanded equals quantity supplied", "supply is zero", "demand is zero"], correctIndex: 1, explanation: "At equilibrium the plans of buyers and sellers match, so Qd = Qs." },
        { prompt: "A price above equilibrium produces a", options: ["shortage", "surplus", "new equilibrium", "price rise"], correctIndex: 1, explanation: "Above equilibrium, quantity supplied exceeds quantity demanded — a surplus." },
        { prompt: "A price below equilibrium produces a", options: ["surplus", "shortage", "equilibrium", "profit"], correctIndex: 1, explanation: "Below equilibrium, quantity demanded exceeds quantity supplied — a shortage." },
        { prompt: "A surplus tends to push the price", options: ["up", "down", "nowhere", "to zero"], correctIndex: 1, explanation: "Unsold stock leads sellers to cut the price back toward equilibrium." },
        { prompt: "A shortage tends to push the price", options: ["down", "up", "nowhere", "to zero"], correctIndex: 1, explanation: "Competing buyers bid the price up toward equilibrium." },
        { prompt: "The first step of the four-step process is to", options: ["compare new price and quantity", "draw the original demand and supply and equilibrium", "shift supply", "shift demand"], correctIndex: 1, explanation: "Step 1 establishes the starting position." },
        { prompt: "A rise in consumers' incomes for a normal good shifts the", options: ["supply curve", "demand curve", "both curves left", "neither curve"], correctIndex: 1, explanation: "Income is a demand factor, so demand shifts." },
        { prompt: "A fall in the cost of a firm's raw materials shifts the", options: ["demand curve", "supply curve", "price axis", "quantity axis"], correctIndex: 1, explanation: "Input costs are a supply factor, so supply shifts." },
        { prompt: "An increase in demand (rightward shift) raises the equilibrium", options: ["price but lowers quantity", "price and quantity", "quantity but lowers price", "neither"], correctIndex: 1, explanation: "A rightward demand shift raises both equilibrium price and quantity." },
        { prompt: "An increase in supply (rightward shift) causes equilibrium price to", options: ["rise", "fall", "stay the same", "double"], correctIndex: 1, explanation: "More supplied at each price lowers the equilibrium price and raises quantity." },
        { prompt: "When good weather raised the salmon catch, the equilibrium price", options: ["rose", "fell", "was unchanged", "became zero"], correctIndex: 1, explanation: "Supply shifted right, so the price fell (3.25 to 2.50)." },
        { prompt: "A change in a good's own price causes", options: ["a shift of its demand curve", "a movement along its demand curve", "a shift of supply only", "no change"], correctIndex: 1, explanation: "Own-price changes move along the curve; they do not shift it." },
        { prompt: "A decrease in demand shifts the demand curve", options: ["right", "left", "up", "along supply"], correctIndex: 1, explanation: "Less demanded at each price is a leftward shift." },
        { prompt: "A decrease in supply raises the equilibrium price and", options: ["raises quantity", "lowers quantity", "leaves quantity unchanged", "removes the market"], correctIndex: 1, explanation: "A leftward supply shift raises price and lowers quantity." },
        { prompt: "The market is described as self-correcting because", options: ["prices are fixed", "shortages and surpluses push price back to equilibrium", "the government sets price", "supply never changes"], correctIndex: 1, explanation: "Excess demand or supply moves the price toward equilibrium." },
        { prompt: "When both demand and supply fall, equilibrium quantity", options: ["definitely rises", "definitely falls", "is ambiguous", "stays fixed"], correctIndex: 1, explanation: "Both shifts reduce quantity, so quantity definitely falls." },
        { prompt: "When both curves shift, the effect that may be ambiguous is on", options: ["nothing", "one of price or quantity, depending on shift sizes", "always quantity", "the axes"], correctIndex: 1, explanation: "One variable is definite; the other depends on the relative shift sizes." },
        { prompt: "Step 2 of the four-step process asks", options: ["how big the shift is", "whether the event affects demand or supply", "the final price", "the elasticity"], correctIndex: 1, explanation: "Step 2 decides which curve the event affects." },
        { prompt: "At the equilibrium price there is", options: ["a surplus", "a shortage", "neither surplus nor shortage", "no trade"], correctIndex: 2, explanation: "Plans match exactly, so there is no excess either way." },
        { prompt: "A rightward shift of a curve means, at each price,", options: ["a smaller quantity", "a larger quantity", "the same quantity", "no quantity"], correctIndex: 1, explanation: "A rightward shift is an increase — more at each price." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define equilibrium price and explain what a shortage and a surplus are.", answerKey: "Equilibrium price is the price where quantity demanded equals quantity supplied. A surplus (excess supply) occurs when price is above equilibrium, so quantity supplied exceeds quantity demanded; a shortage (excess demand) occurs when price is below equilibrium, so quantity demanded exceeds quantity supplied. Award 4 for the equilibrium definition, 3 each for surplus and shortage.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the four steps used to analyse a change in equilibrium.", answerKey: "1. Draw the original demand and supply curves and equilibrium. 2. Decide whether the event affects demand or supply. 3. Decide the direction of the shift (right or left) and draw the new curve. 4. Compare the new equilibrium price and quantity with the original. Award 2 per step.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "An increase in supply, demand unchanged, causes equilibrium price to", options: ["rise and quantity to fall", "fall and quantity to rise", "rise and quantity to rise", "fall and quantity to fall"], correctIndex: 1, answerKey: "A rightward supply shift lowers price and raises quantity. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Using the four-step process, explain what happens to the equilibrium price and quantity of coffee if a frost destroys part of the coffee crop.", answerKey: "Step 1: draw original D and S and equilibrium. Step 2: the frost affects producers, so it changes supply. Step 3: less can be supplied, so supply shifts left. Step 4: the equilibrium price rises and the equilibrium quantity falls. Award marks for identifying supply, the leftward shift, and the correct price/quantity effects.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how the interaction of demand and supply determines the market price, and discuss how the equilibrium changes when demand or supply shifts. Use diagrams or examples.", answerKey: "Award marks for: definition of equilibrium where Qd = Qs, 5; surplus above and shortage below equilibrium with the self-correcting mechanism, 7; the four-step process for analysing a shift, 6; correct effects of demand and supply shifts on price and quantity (using a table or examples), 8; a labelled diagram or worked example, 4. A script that treats price as set by one side alone should not exceed 15.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 5.1 Price Elasticity of Demand and Price Elasticity of Supply (https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply) and 5.4 Elasticity in Areas Other Than Price (https://openstax.org/books/principles-economics-3e/pages/5-4-elasticity-in-areas-other-than-price)
    {
      slug: "definitions-of-elasticity",
      title: "Definitions of Elasticity",
      objective:
        "By the end of the topic, learners should be able to define price elasticity of demand and supply, income elasticity of demand and cross-price elasticity of demand, and say what elastic and inelastic mean.",
      estimatedMinutes: 110,
      notes: `## Elasticity

**Elasticity** — a measure of how much the quantity of a good responds when one of its influences (its price, buyers' income, or another good's price) changes; it is a **ratio of percentage changes**.

## Price elasticity of demand and supply

**Price elasticity of demand (PED)** — the **percentage change in quantity demanded** divided by the **percentage change in price**.
**Price elasticity of supply (PES)** — the **percentage change in quantity supplied** divided by the **percentage change in price**.

## Elastic, inelastic and unitary

| Term | Condition | Meaning |
| --- | --- | --- |
| Elastic | % change in quantity > % change in price (value > 1) | Quantity is highly responsive to price |
| Unitary (unit) elastic | % change in quantity = % change in price (value = 1) | Quantity changes in exact proportion |
| Inelastic | % change in quantity < % change in price (value < 1) | Quantity is only weakly responsive |

- Because the demand curve slopes down, PED is strictly negative, but economists usually report its **size (absolute value)** and compare it with 1.

## Income elasticity of demand

**Income elasticity of demand (YED)** — the **percentage change in quantity demanded** divided by the **percentage change in income**.
- **Positive** for a **normal good** — higher income raises the quantity demanded.
- **Negative** for an **inferior good** — higher income lowers the quantity demanded (buyers switch to better goods).

## Cross-price elasticity of demand

**Cross-price elasticity of demand (XED)** — the percentage change in the quantity demanded of good A divided by the percentage change in the **price of another good B**.
- **Positive** for **substitutes** — a rise in B's price raises demand for A (e.g. coffee and tea).
- **Negative** for **complements** — a rise in B's price lowers demand for A (e.g. coffee and sugar).

## Common errors

- **Confusing elasticity with slope.** Elasticity uses percentage changes, not the raw gradient of the curve.
- **Mixing up the three elasticities.** PED and PES respond to the good's *own price*; YED responds to *income*; XED responds to *another good's price*.
- **Reading the sign wrongly.** For income elasticity, positive means normal and negative means inferior; for cross elasticity, positive means substitutes and negative means complements.`,
      workedExample: `**Question:** For each measure, name it and say what a value of 1.5 or of −0.4 tells you: (a) %ΔQd of petrol ÷ %Δ price of petrol; (b) %ΔQd of cars ÷ %Δ income; (c) %ΔQd of tea ÷ %Δ price of coffee.

**Solution**

(a) This is the **price elasticity of demand** for petrol. Reported as a size, a value above 1 would be elastic and below 1 inelastic; petrol's demand is usually **inelastic** (value below 1).

(b) This is the **income elasticity of demand** for cars. A value of **1.5 is positive**, so cars are a **normal good** — higher income raises the quantity demanded.

(c) This is the **cross-price elasticity of demand** of tea with respect to coffee's price. A **positive** value shows tea and coffee are **substitutes**; a **negative** value like −0.4 would instead indicate complements.

**Answer:** (a) price elasticity of demand; (b) income elasticity — positive, so a normal good; (c) cross-price elasticity — positive means substitutes, negative means complements.`,
      quiz: [
        { prompt: "Price elasticity of demand is the percentage change in quantity demanded divided by the percentage change in", options: ["income", "price", "another good's price", "quantity supplied"], correctIndex: 1, explanation: "PED compares %ΔQd with %Δ in the good's own price." },
        { prompt: "Price elasticity of supply measures the responsiveness of quantity supplied to a change in", options: ["income", "price", "tastes", "population"], correctIndex: 1, explanation: "PES is %ΔQs ÷ %Δ price." },
        { prompt: "Demand is elastic when the percentage change in quantity is", options: ["less than", "greater than", "equal to", "unrelated to"], correctIndex: 1, explanation: "Elastic means quantity changes more than price (value above 1)." },
        { prompt: "Demand is inelastic when its elasticity value is", options: ["greater than 1", "less than 1", "exactly 1", "negative infinity"], correctIndex: 1, explanation: "Inelastic demand has an elasticity size below 1." },
        { prompt: "Unitary elastic demand has an elasticity of", options: ["0", "1", "2", "infinity"], correctIndex: 1, explanation: "Unit elastic means quantity and price change in equal proportion." },
        { prompt: "Income elasticity of demand divides the percentage change in quantity demanded by the percentage change in", options: ["price", "income", "supply", "another good's price"], correctIndex: 1, explanation: "YED responds to income." },
        { prompt: "A positive income elasticity indicates a", options: ["inferior good", "normal good", "complement", "substitute"], correctIndex: 1, explanation: "Positive YED means higher income raises demand — a normal good." },
        { prompt: "A negative income elasticity indicates a(n)", options: ["normal good", "inferior good", "substitute", "luxury"], correctIndex: 1, explanation: "Negative YED means higher income lowers demand — an inferior good." },
        { prompt: "Cross-price elasticity of demand measures the response of the quantity of good A to a change in the", options: ["income of buyers", "price of good B", "supply of A", "tastes for A"], correctIndex: 1, explanation: "XED responds to another good's price." },
        { prompt: "A positive cross-price elasticity means the two goods are", options: ["complements", "substitutes", "inferior", "unrelated"], correctIndex: 1, explanation: "Substitutes have positive XED." },
        { prompt: "A negative cross-price elasticity means the two goods are", options: ["substitutes", "complements", "normal", "luxuries"], correctIndex: 1, explanation: "Complements have negative XED." },
        { prompt: "Coffee and tea, which can replace each other, have a cross elasticity that is", options: ["negative", "positive", "zero", "infinite"], correctIndex: 1, explanation: "Substitutes give a positive cross elasticity." },
        { prompt: "Coffee and sugar, used together, have a cross elasticity that is", options: ["positive", "negative", "zero", "one"], correctIndex: 1, explanation: "Complements give a negative cross elasticity." },
        { prompt: "Elasticity is best described as a ratio of", options: ["prices", "percentage changes", "slopes", "quantities only"], correctIndex: 1, explanation: "Elasticity compares percentage changes." },
        { prompt: "The three elasticities of demand respond, in turn, to price, income and", options: ["weather", "another good's price", "supply", "taxes"], correctIndex: 1, explanation: "Cross elasticity responds to another good's price." },
        { prompt: "Which measure tells you whether a good is normal or inferior?", options: ["Price elasticity of demand", "Income elasticity of demand", "Cross-price elasticity", "Price elasticity of supply"], correctIndex: 1, explanation: "The sign of income elasticity distinguishes normal from inferior goods." },
        { prompt: "Which measure tells you whether two goods are substitutes or complements?", options: ["Income elasticity", "Cross-price elasticity", "Price elasticity of supply", "Price elasticity of demand"], correctIndex: 1, explanation: "The sign of cross-price elasticity does this." },
        { prompt: "A good with elasticity size greater than 1 is said to be", options: ["inelastic", "elastic", "unit elastic", "perfectly inelastic"], correctIndex: 1, explanation: "Value above 1 is elastic." },
        { prompt: "Because the demand curve slopes down, the raw price elasticity of demand is always", options: ["positive", "negative", "zero", "one"], correctIndex: 1, explanation: "Price and quantity demanded move oppositely, so the raw value is negative; its size is compared with 1." },
        { prompt: "Price elasticity of supply is usually", options: ["negative", "positive", "zero", "undefined"], correctIndex: 1, explanation: "Price and quantity supplied move together, so PES is positive." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define price elasticity of demand and price elasticity of supply.", answerKey: "Price elasticity of demand is the percentage change in quantity demanded divided by the percentage change in price. Price elasticity of supply is the percentage change in quantity supplied divided by the percentage change in price. Award 5 per correct definition.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish between elastic, inelastic and unitary elastic demand.", answerKey: "Elastic: percentage change in quantity greater than percentage change in price (value > 1). Inelastic: percentage change in quantity less than percentage change in price (value < 1). Unitary: percentage changes equal (value = 1). Award 3 for elastic, 3 for inelastic, 2 for unitary.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A good with a negative income elasticity of demand is", options: ["a normal good", "an inferior good", "a substitute", "a complement"], correctIndex: 1, answerKey: "Negative income elasticity means higher income lowers demand — an inferior good. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what the sign of cross-price elasticity of demand tells you, with an example of each case.", answerKey: "A positive cross-price elasticity shows the goods are substitutes (e.g. coffee and tea) — a rise in one's price raises demand for the other. A negative value shows they are complements (e.g. coffee and sugar) — a rise in one's price lowers demand for the other. Award 3 per case with example.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the four elasticities studied (price elasticity of demand, price elasticity of supply, income elasticity and cross-price elasticity), what each measures and how each is interpreted.", answerKey: "Award marks for: PED as %ΔQd ÷ %Δprice with elastic/inelastic interpretation, 7; PES as %ΔQs ÷ %Δprice, 6; income elasticity with normal (positive) and inferior (negative) goods, 8; cross-price elasticity with substitutes (positive) and complements (negative), 7; noting elasticity is a ratio of percentage changes, 2. A script covering fewer than three elasticities loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 5.1 Price Elasticity of Demand and Price Elasticity of Supply (midpoint method) (https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply) and 5.4 Elasticity in Areas Other Than Price (https://openstax.org/books/principles-economics-3e/pages/5-4-elasticity-in-areas-other-than-price)
    {
      slug: "calculating-elasticity",
      title: "Calculating Price, Income and Cross Elasticities",
      objective:
        "By the end of the topic, learners should be able to calculate price elasticity of demand and supply using the midpoint method, and calculate income and cross-price elasticities from data.",
      estimatedMinutes: 130,
      notes: `## The percentage-change method

Elasticity uses **percentage changes**, not raw amounts, so the answer does not depend on the units.

**Basic formulas**
- Price elasticity of demand = (% change in quantity demanded) ÷ (% change in price)
- Price elasticity of supply = (% change in quantity supplied) ÷ (% change in price)

## The midpoint method

To get the **same** elasticity whether the price rises or falls, divide each change by the **average (midpoint)** of the two values:
- % change in quantity = (Q2 − Q1) ÷ [(Q2 + Q1) ÷ 2] × 100
- % change in price = (P2 − P1) ÷ [(P2 + P1) ÷ 2] × 100
- Elasticity = (% change in quantity) ÷ (% change in price)

## Worked figures for price elasticity of demand

Between point B (price 70, quantity 2,800) and point A (price 60, quantity 3,000):
- % change in quantity ≈ 6.9%
- % change in price ≈ −15.4%
- PED = 6.9 ÷ (−15.4) ≈ **0.45** in size — **inelastic** (a 1% price change moves quantity about 0.45% the other way).

## Worked figures for price elasticity of supply

Apartments, rent rising from 650 to 700:
- % change in quantity supplied ≈ 26.1%
- % change in price ≈ 7.4%
- PES = 26.1 ÷ 7.4 ≈ **3.53** — **elastic** (a 1% price rise raises quantity supplied about 3.5%).

## Income and cross elasticities

- Income elasticity of demand = (% change in quantity demanded) ÷ (% change in income).
- Cross-price elasticity of demand = (% change in quantity of A) ÷ (% change in price of B).
- The same percentage-change arithmetic is used; only the *cause* differs.

## Steps to follow

1. Write down the two values (before and after).
2. Find the percentage change in quantity.
3. Find the percentage change in the cause (price, income, or the other good's price).
4. Divide quantity's percentage change by the cause's percentage change.
5. Interpret the size (elastic/inelastic) and, for income and cross elasticities, the sign.

## Common errors

- **Using raw changes, not percentages.** Elasticity must be a ratio of percentage changes.
- **Getting a different answer up vs down.** Use the midpoint (average) so the direction does not matter.
- **Dropping the interpretation.** After the number, state elastic/inelastic and, where relevant, normal/inferior or substitute/complement.`,
      workedExample: `**Question:** When a shop cuts the price of a shirt from 50 to 40 dollars, quantity demanded rises from 40 to 60 shirts. Use the midpoint method to find the price elasticity of demand and say whether it is elastic or inelastic.

**Solution**

*Step 1 — percentage change in quantity.* Change = 60 − 40 = 20; average = (60 + 40) ÷ 2 = 50. % change in quantity = 20 ÷ 50 × 100 = **40%**.

*Step 2 — percentage change in price.* Change = 40 − 50 = −10; average = (40 + 50) ÷ 2 = 45. % change in price = −10 ÷ 45 × 100 ≈ **−22.2%**.

*Step 3 — elasticity.* PED = 40 ÷ (−22.2) ≈ **−1.8**; in size **1.8**.

*Step 4 — interpret.* Since 1.8 is greater than 1, demand is **elastic**: quantity responds more than proportionately to the price change.

**Answer:** Price elasticity of demand ≈ 1.8 in size — demand is elastic.`,
      quiz: [
        { prompt: "Elasticity is calculated using", options: ["raw differences", "percentage changes", "slopes only", "totals"], correctIndex: 1, explanation: "Elasticity is a ratio of percentage changes." },
        { prompt: "The midpoint method divides each change by the", options: ["starting value", "ending value", "average of the two values", "largest value"], correctIndex: 2, explanation: "Dividing by the average gives the same answer up or down." },
        { prompt: "Price elasticity of demand equals % change in quantity demanded divided by % change in", options: ["income", "price", "supply", "cost"], correctIndex: 1, explanation: "PED divides the quantity change by the price change." },
        { prompt: "If quantity changes 40% when price changes 20%, PED in size is", options: ["0.5", "2", "20", "60"], correctIndex: 1, explanation: "40 ÷ 20 = 2." },
        { prompt: "A PED size of 2 means demand is", options: ["inelastic", "elastic", "unit elastic", "perfectly inelastic"], correctIndex: 1, explanation: "Value above 1 is elastic." },
        { prompt: "If quantity supplied rises 26.1% when price rises 7.4%, PES is about", options: ["0.28", "3.53", "1.0", "18.7"], correctIndex: 1, explanation: "26.1 ÷ 7.4 ≈ 3.53." },
        { prompt: "A PES of 3.53 means supply is", options: ["inelastic", "elastic", "unit elastic", "perfectly inelastic"], correctIndex: 1, explanation: "Value above 1 is elastic." },
        { prompt: "The midpoint percentage change in quantity uses the formula (Q2 − Q1) divided by", options: ["Q1", "Q2", "(Q2 + Q1)/2", "Q2 − Q1"], correctIndex: 2, explanation: "The midpoint denominator is the average of the two quantities." },
        { prompt: "Between B (70, 2,800) and A (60, 3,000), the midpoint PED is about", options: ["0.45", "2.2", "6.9", "15.4"], correctIndex: 0, explanation: "6.9% ÷ 15.4% ≈ 0.45 — inelastic." },
        { prompt: "A PED of about 0.45 means demand is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "Below 1 is inelastic." },
        { prompt: "Income elasticity of demand divides % change in quantity by % change in", options: ["price", "income", "supply", "the other good's price"], correctIndex: 1, explanation: "Income elasticity uses the change in income." },
        { prompt: "Cross-price elasticity divides % change in quantity of A by % change in", options: ["income", "price of A", "price of B", "supply of B"], correctIndex: 2, explanation: "XED uses the price change of the other good B." },
        { prompt: "If income rises 10% and quantity demanded rises 5%, income elasticity is", options: ["0.5", "2", "5", "15"], correctIndex: 0, explanation: "5 ÷ 10 = 0.5 (positive, so normal good)." },
        { prompt: "An advantage of the midpoint method is that it gives", options: ["a bigger number", "the same answer for a rise and a fall", "no negatives", "the slope"], correctIndex: 1, explanation: "Using the average makes the direction irrelevant." },
        { prompt: "The last step in an elasticity calculation should be to", options: ["stop at the number", "interpret elastic/inelastic and the sign", "convert to dollars", "draw a pie chart"], correctIndex: 1, explanation: "Interpretation completes the answer." },
        { prompt: "If price of good B rises 8% and quantity of A falls 4%, the cross elasticity is", options: ["+0.5", "−0.5", "+2", "−2"], correctIndex: 1, explanation: "−4 ÷ 8 = −0.5 (negative, so complements)." },
        { prompt: "A cross elasticity of −0.5 shows the goods are", options: ["substitutes", "complements", "inferior", "normal"], correctIndex: 1, explanation: "Negative cross elasticity means complements." },
        { prompt: "Percentage change in price by the midpoint method for a move from 50 to 40 is about", options: ["−20%", "−22.2%", "−25%", "−10%"], correctIndex: 1, explanation: "−10 ÷ 45 × 100 ≈ −22.2%." },
        { prompt: "Elasticity has no units because it is a ratio of", options: ["dollars", "percentages", "quantities", "years"], correctIndex: 1, explanation: "Percentage changes cancel the units." },
        { prompt: "If quantity demanded changes 5% when price changes 5%, demand is", options: ["elastic", "inelastic", "unit elastic", "perfectly inelastic"], correctIndex: 2, explanation: "Equal percentage changes give unit elasticity (value 1)." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Write down the midpoint-method formulas for the percentage change in quantity and price, and for price elasticity of demand.", answerKey: "% change in quantity = (Q2 − Q1) ÷ [(Q2 + Q1)/2] × 100; % change in price = (P2 − P1) ÷ [(P2 + P1)/2] × 100; PED = (% change in quantity) ÷ (% change in price). Award 3 for each percentage-change formula and 4 for the elasticity formula.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "When rent rises from 650 to 700, quantity of apartments supplied rises by about 26.1% while price rises about 7.4%. Calculate the price elasticity of supply and interpret it.", answerKey: "PES = 26.1 ÷ 7.4 ≈ 3.53. Since 3.53 is greater than 1, supply is elastic — quantity supplied responds more than proportionately to the price rise. Award 5 for the calculation, 3 for the interpretation.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Income rises 20% and quantity demanded rises 10%. The income elasticity is", options: ["0.5, normal good", "2, normal good", "0.5, inferior good", "−2, inferior good"], correctIndex: 0, answerKey: "10 ÷ 20 = 0.5, positive so a normal good. Option A.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A price falls from 20 to 16 and quantity demanded rises from 100 to 140. Using the midpoint method, find and interpret the price elasticity of demand.", answerKey: "% change in quantity = 40 ÷ 120 × 100 ≈ 33.3%. % change in price = −4 ÷ 18 × 100 ≈ −22.2%. PED ≈ 33.3 ÷ (−22.2) ≈ −1.5, size 1.5 — elastic. Award marks for both percentage changes, the ratio, and the elastic interpretation.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how price, income and cross-price elasticities are calculated, why the midpoint method is used, and how each result is interpreted. Include a worked calculation.", answerKey: "Award marks for: the general percentage-change formula for elasticity, 5; the midpoint method and why it gives the same value up or down, 6; formulas for income and cross-price elasticity, 6; a correct worked calculation, 8; interpretation of the result (elastic/inelastic, normal/inferior, substitute/complement), 5. A script without a worked calculation should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 5.3 Elasticity and Pricing (elasticity and total revenue) (https://openstax.org/books/principles-economics-3e/pages/5-3-elasticity-and-pricing)
    {
      slug: "elasticity-and-total-revenue",
      title: "Price Elasticity and Total Revenue",
      objective:
        "By the end of the topic, learners should be able to explain how a price change affects total revenue when demand is elastic, inelastic or unitary, and apply this to a seller's pricing decision.",
      estimatedMinutes: 110,
      notes: `## Total revenue

**Total revenue (TR)** — the money a seller receives, equal to **price × quantity sold** (TR = P × Q).
- When price changes, quantity changes the other way, so the effect on total revenue depends on **which change is larger in percentage terms** — that is, on the **price elasticity of demand**.

## The elasticity–revenue rule

| Demand | Price rises | Price falls |
| --- | --- | --- |
| Elastic (value > 1) | Total revenue falls | Total revenue rises |
| Unitary (value = 1) | Total revenue unchanged | Total revenue unchanged |
| Inelastic (value < 1) | Total revenue rises | Total revenue falls |

- **Elastic demand:** quantity changes more than price. A price cut wins enough extra sales to raise total revenue; a price rise loses so many sales that total revenue falls.
- **Inelastic demand:** quantity changes less than price. A price rise raises total revenue because few buyers are lost; a price cut lowers it.
- **Unitary elastic demand:** the gain and the loss exactly offset, so total revenue does not change.

## Why it matters for pricing

- A seller wanting more revenue should **raise** price when demand is **inelastic** and **cut** price when demand is **elastic**.
- Necessities (housing, electricity) have inelastic demand, so a price rise raises spending on them; luxuries and goods with close substitutes have elastic demand.

## Price elasticity of supply and revenue

- On the supply side, a higher price and a higher quantity supplied both push total revenue up, so a more elastic supply lets sellers expand output and revenue more when price rises.

## Common errors

- **Assuming a price rise always raises revenue.** It only does so when demand is inelastic.
- **Assuming a price cut always lowers revenue.** With elastic demand a price cut *raises* revenue.
- **Forgetting quantity moves too.** Revenue is price times quantity, and quantity always moves opposite to price along a demand curve.`,
      workedExample: `**Question:** A bus company charges 2 dollars a ride and carries 1,000 riders a day. Demand is inelastic (PED size 0.5). It is thinking of raising the fare to 2.20 dollars, which would cut ridership to 950. Should it raise the fare if it wants more revenue?

**Solution**

*Step 1 — revenue now.* TR = P × Q = 2 × 1,000 = **2,000 dollars a day**.

*Step 2 — revenue after the rise.* TR = 2.20 × 950 = **2,090 dollars a day**.

*Step 3 — link to elasticity.* Demand is **inelastic** (0.5 < 1): the 10% fare rise loses only 5% of riders, so quantity changes less than price. The elasticity–revenue rule says a price rise with inelastic demand **raises** total revenue.

**Answer:** Yes — because demand is inelastic, raising the fare increases total revenue from 2,000 to 2,090 dollars a day.`,
      quiz: [
        { prompt: "Total revenue equals", options: ["price minus cost", "price times quantity sold", "quantity minus price", "cost times quantity"], correctIndex: 1, explanation: "TR = P × Q." },
        { prompt: "With elastic demand, a price rise makes total revenue", options: ["rise", "fall", "stay the same", "double"], correctIndex: 1, explanation: "Quantity falls more than price rises, so revenue falls." },
        { prompt: "With inelastic demand, a price rise makes total revenue", options: ["fall", "rise", "stay the same", "vanish"], correctIndex: 1, explanation: "Quantity falls less than price rises, so revenue rises." },
        { prompt: "With unitary elastic demand, a price change leaves total revenue", options: ["higher", "lower", "unchanged", "negative"], correctIndex: 2, explanation: "Gain and loss offset exactly." },
        { prompt: "With elastic demand, a price cut makes total revenue", options: ["fall", "rise", "stay the same", "become zero"], correctIndex: 1, explanation: "Extra sales more than make up for the lower price." },
        { prompt: "With inelastic demand, a price cut makes total revenue", options: ["rise", "fall", "stay the same", "double"], correctIndex: 1, explanation: "Few extra buyers, so lower price lowers revenue." },
        { prompt: "To raise revenue when demand is inelastic, a seller should", options: ["cut price", "raise price", "keep price fixed", "leave the market"], correctIndex: 1, explanation: "Inelastic demand: raising price raises revenue." },
        { prompt: "To raise revenue when demand is elastic, a seller should", options: ["raise price", "cut price", "keep price fixed", "add tax"], correctIndex: 1, explanation: "Elastic demand: cutting price raises revenue." },
        { prompt: "Necessities such as housing tend to have demand that is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "Necessities have inelastic demand." },
        { prompt: "Revenue depends on the elasticity of demand because a price change also changes", options: ["income", "quantity", "supply cost", "population"], correctIndex: 1, explanation: "Quantity moves opposite to price, so the net effect depends on elasticity." },
        { prompt: "If a 10% price rise cuts sales 5%, demand is inelastic and revenue will", options: ["fall", "rise", "stay the same", "be zero"], correctIndex: 1, explanation: "Quantity fell less than price rose — revenue rises." },
        { prompt: "If a 10% price rise cuts sales 20%, demand is elastic and revenue will", options: ["rise", "fall", "stay the same", "double"], correctIndex: 1, explanation: "Quantity fell more than price rose — revenue falls." },
        { prompt: "A bus carrying 1,000 riders at 2 dollars earns total revenue of", options: ["500", "2,000", "1,000", "200"], correctIndex: 1, explanation: "2 × 1,000 = 2,000." },
        { prompt: "The elasticity–revenue rule is most useful for", options: ["counting population", "pricing decisions", "drawing supply", "measuring inflation"], correctIndex: 1, explanation: "It guides whether to raise or cut price for more revenue." },
        { prompt: "A price rise always raises revenue only if demand is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "Only inelastic demand guarantees higher revenue from a price rise." },
        { prompt: "Goods with many close substitutes tend to have demand that is", options: ["inelastic", "elastic", "unit elastic", "fixed"], correctIndex: 1, explanation: "Substitutes make demand more elastic." },
        { prompt: "When demand is unitary elastic, the seller's revenue is", options: ["maximised at every price", "the same for small price changes", "always zero", "always rising"], correctIndex: 1, explanation: "Small price changes leave revenue unchanged at unit elasticity." },
        { prompt: "On the supply side, a higher price and higher quantity supplied push total revenue", options: ["down", "up", "to zero", "sideways"], correctIndex: 1, explanation: "Both factors raise total revenue." },
        { prompt: "A common mistake is to assume a price cut", options: ["never changes revenue", "always lowers revenue", "always raises revenue", "changes only cost"], correctIndex: 1, explanation: "With elastic demand a price cut raises revenue." },
        { prompt: "If bus fare rises from 2 to 2.20 and riders fall from 1,000 to 950, revenue goes from 2,000 to", options: ["1,900", "2,090", "2,200", "2,000"], correctIndex: 1, explanation: "2.20 × 950 = 2,090." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define total revenue and explain why the effect of a price change on total revenue depends on elasticity.", answerKey: "Total revenue is price times quantity sold (TR = P × Q). When price changes, quantity moves the other way, so whether total revenue rises or falls depends on which percentage change is larger — that is, on the price elasticity of demand. Award 4 for the definition, 6 for the elasticity explanation.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State what happens to total revenue when price rises for (a) elastic, (b) inelastic and (c) unitary elastic demand.", answerKey: "(a) Elastic: total revenue falls. (b) Inelastic: total revenue rises. (c) Unitary: total revenue is unchanged. Award 3 for elastic, 3 for inelastic, 2 for unitary.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A firm facing elastic demand that wants to raise revenue should", options: ["raise price", "lower price", "keep price fixed", "reduce output"], correctIndex: 1, answerKey: "With elastic demand, lowering price raises revenue. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "A shop cuts a price and finds its total revenue rises. What does this tell you about the elasticity of demand for the good?", answerKey: "A price cut that raises total revenue means quantity rose more than price fell in percentage terms, so demand for the good is elastic (price elasticity greater than 1). Award marks for identifying elastic demand and the reasoning.", marks: 6 },
        { type: "ESSAY", prompt: "Explain, with examples, how the price elasticity of demand determines the effect of a price change on a seller's total revenue, and how a seller can use this to decide on pricing.", answerKey: "Award marks for: TR = P × Q and that quantity moves opposite to price, 5; elastic demand — price rise lowers revenue, price cut raises it, 7; inelastic demand — price rise raises revenue, price cut lowers it, 7; unitary — revenue unchanged, 4; the pricing implication (raise price if inelastic, cut price if elastic) with an example such as necessities vs luxuries, 7. A script that omits the pricing decision should not exceed 20.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 5.3 Elasticity and Pricing (determinants of elasticity: necessities vs luxuries, time) (https://openstax.org/books/principles-economics-3e/pages/5-3-elasticity-and-pricing) and 5.1 Price Elasticity of Demand and Price Elasticity of Supply (https://openstax.org/books/principles-economics-3e/pages/5-1-price-elasticity-of-demand-and-price-elasticity-of-supply)
    {
      slug: "determinants-of-elasticity",
      title: "Determinants of Price Elasticity of Demand and Supply",
      objective:
        "By the end of the topic, learners should be able to list and explain the factors that make demand and supply more or less elastic.",
      estimatedMinutes: 100,
      notes: `## Determinants of price elasticity of demand

**Availability of substitutes** — the more (and closer) the substitutes, the **more elastic** demand, because buyers can switch easily when price rises.
**Necessity or luxury** — necessities (housing, electricity) have **inelastic** demand; luxuries and non-essentials (restaurant meals) have **elastic** demand. Measured elasticities show housing around 0.12 (inelastic) and restaurant meals around 2.27 (elastic).
**Share of income spent on the good** — goods that take a large share of income tend to have **more elastic** demand, because a price change is felt strongly; cheap items (salt) have inelastic demand.
**Time** — demand is **more elastic over a longer period**, because buyers have time to find substitutes and adjust their habits.

## Determinants of price elasticity of supply

**Time to adjust production** — supply is **more elastic the longer** the time allowed, because firms can build capacity, hire workers and change output; in the very short run supply is nearly fixed (inelastic).
**Availability of inputs and spare capacity** — if extra inputs are easy to obtain and factories have spare capacity, supply is **more elastic**.
**Ease of storing stock** — goods that can be stored let firms respond quickly to price changes, raising supply elasticity.

## Summary

| Factor | More elastic when… |
| --- | --- |
| Substitutes (demand) | many close substitutes exist |
| Necessity vs luxury (demand) | the good is a luxury, not a necessity |
| Share of income (demand) | the good takes a large share of income |
| Time (demand and supply) | more time is allowed to adjust |
| Spare capacity/inputs (supply) | inputs and capacity are readily available |

## Common errors

- **Thinking elasticity is fixed.** The same good can be inelastic in the short run and elastic in the long run.
- **Ignoring substitutes.** A good with close substitutes is elastic even if it feels ordinary.
- **Confusing the demand and supply lists.** Substitutes and necessity affect demand; capacity and inputs affect supply; time affects both.`,
      workedExample: `**Question:** Explain why the demand for salt is inelastic while the demand for a particular brand of soft drink is elastic.

**Solution**

*Step 1 — salt.* Salt has **few substitutes**, is a **necessity** used in small amounts, and takes a **tiny share of income**. A price rise barely changes how much people buy, so demand is **inelastic**.

*Step 2 — one brand of soft drink.* A single brand has **many close substitutes** (other brands), so if its price rises buyers switch easily to a rival. It is not a necessity, and buyers have time to change habits. These features make its demand **elastic**.

*Step 3 — the general point.* The number of substitutes, whether the good is a necessity, its share of income, and the time to adjust together determine elasticity.

**Answer:** Salt is inelastic because it has few substitutes, is a necessity and is cheap; a single soft-drink brand is elastic because close substitute brands let buyers switch when its price rises.`,
      quiz: [
        { prompt: "The more close substitutes a good has, the", options: ["less elastic", "more elastic", "unchanged", "zero"], correctIndex: 1, explanation: "Substitutes let buyers switch, raising elasticity." },
        { prompt: "Necessities tend to have demand that is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "Buyers keep buying necessities despite price rises." },
        { prompt: "Luxuries tend to have demand that is", options: ["inelastic", "elastic", "unit elastic", "fixed"], correctIndex: 1, explanation: "Non-essentials are easier to cut, so demand is elastic." },
        { prompt: "The measured elasticity of housing (about 0.12) shows demand is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "0.12 is well below 1 — inelastic." },
        { prompt: "The measured elasticity of restaurant meals (about 2.27) shows demand is", options: ["inelastic", "elastic", "unit elastic", "zero"], correctIndex: 1, explanation: "2.27 is above 1 — elastic." },
        { prompt: "Goods taking a large share of income tend to have demand that is", options: ["inelastic", "more elastic", "unit elastic", "fixed"], correctIndex: 1, explanation: "Big-ticket items make buyers respond strongly to price." },
        { prompt: "Over a longer period, demand generally becomes", options: ["less elastic", "more elastic", "fixed", "zero"], correctIndex: 1, explanation: "More time means more chance to substitute and adjust." },
        { prompt: "Supply is generally more elastic when firms have", options: ["no spare capacity", "spare capacity and available inputs", "fixed factories", "no workers"], correctIndex: 1, explanation: "Spare capacity lets firms expand output easily." },
        { prompt: "In the very short run, supply is usually", options: ["elastic", "nearly fixed (inelastic)", "unit elastic", "infinite"], correctIndex: 1, explanation: "Firms cannot change output quickly, so supply is inelastic." },
        { prompt: "Which factor affects the elasticity of supply, not demand?", options: ["Availability of substitutes", "Whether the good is a necessity", "Spare production capacity", "Share of income"], correctIndex: 2, explanation: "Capacity is a supply-side factor." },
        { prompt: "Cheap items such as salt tend to have demand that is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "A tiny share of income means an inelastic response." },
        { prompt: "The ease of storing a good tends to make its supply", options: ["less elastic", "more elastic", "fixed", "zero"], correctIndex: 1, explanation: "Storable stock lets firms respond quickly to price." },
        { prompt: "A good can be inelastic in the short run but elastic in the", options: ["same instant", "long run", "past", "graph"], correctIndex: 1, explanation: "Time raises elasticity as buyers adjust." },
        { prompt: "A single brand within a large group of rivals tends to have demand that is", options: ["inelastic", "elastic", "unit elastic", "fixed"], correctIndex: 1, explanation: "Rival brands are close substitutes, so demand is elastic." },
        { prompt: "Which makes demand MORE elastic?", options: ["Fewer substitutes", "Being a necessity", "Taking a large share of income", "Very little time to adjust"], correctIndex: 2, explanation: "A large income share raises elasticity." },
        { prompt: "Which makes supply MORE elastic?", options: ["No spare capacity", "More time to adjust production", "Perishable goods", "Fixed inputs"], correctIndex: 1, explanation: "More time lets firms change output." },
        { prompt: "Electricity has few substitutes and is a necessity, so its demand is", options: ["elastic", "inelastic", "unit elastic", "perfectly elastic"], correctIndex: 1, explanation: "Few substitutes plus necessity means inelastic." },
        { prompt: "The four main determinants of demand elasticity are substitutes, necessity/luxury, share of income and", options: ["colour", "time", "weather", "advertising budget"], correctIndex: 1, explanation: "Time is the fourth key determinant." },
        { prompt: "A firm with no spare capacity that cannot get more inputs quickly has supply that is", options: ["elastic", "inelastic", "unit elastic", "infinite"], correctIndex: 1, explanation: "Without capacity or inputs, supply cannot respond — inelastic." },
        { prompt: "Confusing the demand and supply determinants is avoided by remembering that capacity and inputs affect", options: ["demand", "supply", "income", "population"], correctIndex: 1, explanation: "Capacity and inputs are supply-side factors." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "List and briefly explain three determinants of the price elasticity of demand.", answerKey: "Any three of: availability of substitutes (more substitutes, more elastic); necessity or luxury (necessities inelastic, luxuries elastic); share of income spent on the good (larger share, more elastic); time to adjust (more time, more elastic). Award 3 marks per factor correctly explained; cap at 3 factors.", marks: 9 },
        { type: "SHORT_ANSWER", prompt: "Explain why supply tends to be more elastic in the long run than in the short run.", answerKey: "In the short run at least some inputs are fixed, so firms cannot change output much and supply is inelastic. Over a longer period all inputs can vary — firms can build capacity, hire more workers and obtain more inputs — so quantity supplied responds more to price and supply becomes more elastic. Award marks for the short-run constraint and the long-run adjustment.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "Which good is most likely to have inelastic demand?", options: ["One brand of biscuit among many", "A luxury holiday", "Table salt", "A restaurant meal"], correctIndex: 2, answerKey: "Salt has few substitutes, is a necessity and takes a tiny share of income — inelastic. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give two factors that make the supply of a good more elastic.", answerKey: "Any two of: more time to adjust production; spare production capacity; ready availability of inputs; ability to store stock. Award 3 marks per correct factor.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the factors that determine the price elasticity of demand and of supply, giving examples.", answerKey: "Award marks for: demand determinants — substitutes, necessity/luxury, share of income, time — each explained with an example, 16; supply determinants — time to adjust, spare capacity/inputs, storability — explained, 10; noting that the same good's elasticity can differ between short and long run, 4. A script covering only demand or only supply should not exceed 16.", marks: 30 },
      ],
    },
  ],
};
