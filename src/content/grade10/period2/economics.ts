import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester One, Period II: The Concepts of Demand and Supply — the laws,
// schedules and curves, the factors that shift them, and market equilibrium.
export const economicsG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "Demand and Supply",
  summary:
    "Period II of the MoE Grade 10 Economics syllabus. Learners explain the laws of demand and supply, build demand and supply schedules and curves, distinguish a movement along a curve from a shift of the whole curve, and find the equilibrium price and quantity where a market clears.",
  topics: [
    {
      slug: "demand",
      title: "Demand and the Law of Demand",
      objective:
        "By the end of the topic, learners should be able to define demand, state and explain the law of demand, construct a demand schedule and curve, and distinguish a change in quantity demanded from a change in demand.",
      estimatedMinutes: 150,
      notes: `## Introduction

- **Demand** = one half of the machinery that sets every price (supply is the other).
- Market traders cut end-of-day prices; shoppers buy more when prices fall.
- **This topic:** what demand means (desire *plus* ability to pay); the **law of demand**; building a **demand schedule** and **curve**; and telling a **movement along** the curve from a **shift** of the whole curve.

## What demand means

- **Demand** — the quantity of a good or service consumers are **willing and able to buy** at a given price during a period of time.
- Not merely a wish — it combines *desire* with the *ability to pay* (backed by money).

## The law of demand

The **law of demand** states:

> As the price of a good rises, the quantity demanded falls; and as the price falls, the quantity demanded rises — **other things being equal**.

- Price and quantity demanded move in **opposite directions** (an inverse relationship).
- At a lower price consumers can afford more and will buy more of the good.

## The demand schedule

A **demand schedule** is a table showing how much of a good consumers will buy at different prices.

| Price (L$ per kg of rice) | Quantity demanded (kg) |
|---|---|
| 100 | 10 |
| 80 | 20 |
| 60 | 30 |
| 40 | 40 |
| 20 | 50 |

## The demand curve

Plotting the schedule gives the **demand curve** — a line that slopes **downward from left to right**, because price and quantity move in opposite directions.

\`\`\`svg A downward-sloping demand curve
<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demand curve sloping downward from left to right">
  <line x1="45" y1="175" x2="285" y2="175" stroke="#4d7c0f" stroke-width="2"/>
  <line x1="45" y1="175" x2="45" y2="20" stroke="#4d7c0f" stroke-width="2"/>
  <line x1="65" y1="35" x2="265" y2="160" stroke="#dc2626" stroke-width="2.5"/>
  <text x="255" y="150" font-size="12" fill="#dc2626">D</text>
  <text x="160" y="200" font-size="12" text-anchor="middle" fill="#4d7c0f">Quantity</text>
  <text x="16" y="100" font-size="12" fill="#4d7c0f" transform="rotate(-90 16,100)">Price</text>
</svg>
\`\`\`

## Kinds of demand

- **Individual demand** — the demand of one consumer.
- **Market demand** — the total demand of all consumers for a good, found by adding up everyone's individual demand at each price.
- **Joint (complementary) demand** — goods demanded together, e.g. cars and fuel.
- **Competitive (substitute) demand** — goods that can replace each other, e.g. rice and cassava.

## Movement along vs shift of the curve

This distinction is essential:

- A **change in the price of the good itself** causes a **movement along** the demand curve — a *change in quantity demanded*.
- A change in **any other factor** shifts the **whole curve** left or right — a *change in demand*.

Factors that **shift** demand (the *conditions of demand*):

- **Income** — more income usually increases demand.
- **Prices of related goods** — a rise in the price of rice can increase demand for cassava (a substitute).
- **Tastes and preferences** — fashion, advertising, culture.
- **Population** — more people, more demand.
- **Expectations** — if prices are expected to rise, people buy now.

## Common errors and misconceptions

- **Confusing a movement along the curve with a shift of the curve** — a change in the good's **own price** moves you *along* the curve (a change in *quantity demanded*); any *other* factor shifts the *whole* curve (a change in *demand*). This is the most examined error in the topic.
- **Thinking demand just means "wanting" something** — demand needs both the *desire* **and** the *ability to pay*; a wish with no money behind it is not demand.
- **Believing the demand curve slopes upward** — it slopes **downward**, because price and quantity demanded move in **opposite** directions.
- **Forgetting "other things being equal"** — the law of demand isolates price by holding income, tastes and related prices constant; in the real world several factors change at once.`,
      workedExample: `**Task.** Using the ideas of the law of demand, explain the difference between a *movement along* the demand curve and a *shift* of the demand curve, with an example of each for garri (cassava flour).

**Step 1 — State the law of demand**
Other things being equal, when price rises, quantity demanded falls; when price falls, quantity demanded rises. The demand curve therefore slopes downward.

**Step 2 — Movement along the curve (change in quantity demanded)**
This is caused **only by a change in the price of garri itself**.
- *Example:* the price of garri falls from L$60 to L$40 per cup, so consumers buy more garri — say from 30 to 40 cups. We move **down along the same demand curve**. This is a *change in quantity demanded*.

**Step 3 — Shift of the curve (change in demand)**
This is caused by a change in a factor **other than the price of garri**.
- *Example:* the price of rice (a substitute) rises sharply, so people switch to garri. Now consumers want **more garri at every price**, and the **whole demand curve shifts to the right**. This is a *change in demand*.

**Conclusion:** a change in the good's **own price** = movement **along** the curve; a change in **income, related-goods prices, tastes, population or expectations** = **shift** of the whole curve. Confusing the two is the commonest error in this topic.`,
      teachingTip:
        "The single most examined confusion here is 'movement along' versus 'shift'. Fix it with one rule: only the good's OWN price moves you along the curve; everything else shifts the curve. Draw both on the board — an arrow sliding down the existing curve for a price fall, and the whole curve jumping rightward for a rise in income — and have learners label real examples until the distinction is automatic.",
      quiz: [
        {
          prompt: "In economics, demand means the quantity consumers are…",
          options: [
            "willing and able to buy at a given price",
            "wishing they could own",
            "producing for sale",
            "storing in warehouses",
          ],
          correctIndex: 0,
          explanation: "Demand combines desire with the ability (money) to pay.",
        },
        {
          prompt: "The law of demand says that as price rises, quantity demanded…",
          options: ["falls", "rises", "stays the same", "doubles"],
          correctIndex: 0,
          explanation: "Price and quantity demanded move in opposite directions.",
        },
        {
          prompt: "The relationship between price and quantity demanded is…",
          options: ["inverse", "direct", "zero", "random"],
          correctIndex: 0,
          explanation: "It is an inverse (opposite) relationship.",
        },
        {
          prompt: "A demand curve slopes…",
          options: [
            "downward from left to right",
            "upward from left to right",
            "horizontally",
            "vertically",
          ],
          correctIndex: 0,
          explanation: "Because price and quantity move oppositely, it slopes down.",
        },
        {
          prompt: "A table showing quantity demanded at different prices is a…",
          options: ["demand schedule", "supply curve", "budget", "profit sheet"],
          correctIndex: 0,
          explanation: "The demand schedule lists quantities at each price.",
        },
        {
          prompt: "Adding up the demand of all consumers gives the…",
          options: ["market demand", "individual demand", "joint demand", "supply"],
          correctIndex: 0,
          explanation: "Market demand is the sum of all individual demands.",
        },
        {
          prompt: "Cars and fuel, which are demanded together, are an example of…",
          options: ["joint (complementary) demand", "competitive demand", "market demand", "no demand"],
          correctIndex: 0,
          explanation: "Complementary goods are demanded jointly.",
        },
        {
          prompt: "Rice and cassava, which can replace each other, are an example of…",
          options: ["competitive (substitute) demand", "joint demand", "derived demand", "zero demand"],
          correctIndex: 0,
          explanation: "Substitutes are in competitive demand.",
        },
        {
          prompt: "A fall in the price of a good, causing more to be bought, is a…",
          options: [
            "movement along the demand curve",
            "shift of the demand curve",
            "change in supply",
            "change in income",
          ],
          correctIndex: 0,
          explanation: "A change in the good's own price moves us along the curve.",
        },
        {
          prompt: "Which of these shifts the whole demand curve?",
          options: ["a rise in consumers' income", "a change in the good's own price", "nothing", "the slope"],
          correctIndex: 0,
          explanation: "Income is a condition of demand, so it shifts the curve.",
        },
        {
          prompt: "A change in quantity demanded is caused by a change in the…",
          options: ["good's own price", "consumers' income", "population", "tastes"],
          correctIndex: 0,
          explanation: "Only the good's own price changes quantity demanded.",
        },
        {
          prompt: "If income rises, demand for a normal good usually…",
          options: ["increases", "decreases", "disappears", "does not change"],
          correctIndex: 0,
          explanation: "Higher income raises demand for normal goods.",
        },
        {
          prompt: "A rise in the price of rice may increase the demand for cassava because they are…",
          options: ["substitutes", "complements", "the same good", "unrelated"],
          correctIndex: 0,
          explanation: "Consumers switch to the cheaper substitute.",
        },
        {
          prompt: "Which is NOT a factor that shifts demand?",
          options: [
            "the price of the good itself",
            "consumers' income",
            "tastes and preferences",
            "population",
          ],
          correctIndex: 0,
          explanation: "The good's own price moves us along, not shifts, the curve.",
        },
        {
          prompt: "'Other things being equal' in the law of demand means we assume…",
          options: [
            "only price changes; other factors stay constant",
            "everything changes at once",
            "price never changes",
            "supply is zero",
          ],
          correctIndex: 0,
          explanation: "We isolate the effect of price by holding other factors fixed.",
        },
        {
          prompt: "The demand of a single consumer is called…",
          options: ["individual demand", "market demand", "joint demand", "total demand"],
          correctIndex: 0,
          explanation: "Individual demand is one consumer's demand.",
        },
        {
          prompt: "If people expect prices to rise soon, their demand today may…",
          options: ["increase", "fall to zero", "not change", "become supply"],
          correctIndex: 0,
          explanation: "Expectations of higher prices lead people to buy now.",
        },
        {
          prompt: "A rightward shift of the demand curve means that at every price consumers want…",
          options: ["more of the good", "less of the good", "the same amount", "none of the good"],
          correctIndex: 0,
          explanation: "A rightward shift is an increase in demand at all prices.",
        },
        {
          prompt: "Which pairing is correct?",
          options: [
            "own price change → movement along the curve",
            "own price change → shift of the curve",
            "income change → movement along the curve",
            "tastes change → movement along the curve",
          ],
          correctIndex: 0,
          explanation: "Own-price changes move you along; other factors shift the curve.",
        },
        {
          prompt: "A larger population in a market tends to…",
          options: ["increase demand", "decrease demand", "remove demand", "flatten the curve to zero"],
          correctIndex: 0,
          explanation: "More consumers means greater demand at each price.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define demand and state the law of demand.",
          answerKey:
            "Demand is the quantity of a good consumers are willing and able to buy at a given price in a period of time. Law of demand: other things being equal, as price rises quantity demanded falls, and as price falls quantity demanded rises. Award marks for the definition (willing AND able) and the law.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt:
            "Using a demand schedule of your own, show that the demand curve slopes downward.",
          answerKey:
            "Learner should give a table with at least three price/quantity rows where quantity rises as price falls (e.g. 100→10, 60→30, 20→50), and state that plotting it gives a curve sloping downward left to right. Award marks for a valid inverse schedule and the correct conclusion about slope.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A rise in consumers' income shifting the demand curve to the right is best described as…",
          options: [
            "a change in demand",
            "a change in quantity demanded",
            "a movement along the curve",
            "a change in supply",
          ],
          correctIndex: 0,
          answerKey: "A shift caused by a non-price factor is a change in demand.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Explain the difference between a change in quantity demanded and a change in demand, giving an example of each.",
          answerKey:
            "A strong answer explains that a change in quantity demanded is caused only by a change in the good's own price and is shown as a movement along the same demand curve (e.g. the price of rice falls so more rice is bought). A change in demand is caused by a non-price factor — income, prices of related goods, tastes, population or expectations — and is shown as a shift of the whole curve (e.g. incomes rise so more is demanded at every price). Award marks for both correct definitions, the movement-vs-shift distinction, and valid examples.",
          marks: 5,
        },
      ],
    },
    {
      slug: "supply-and-equilibrium",
      title: "Supply and Market Equilibrium",
      objective:
        "By the end of the topic, learners should be able to state the law of supply, construct a supply schedule and curve, identify factors that shift supply, and find the equilibrium (market-clearing) price and quantity, explaining shortages and surpluses.",
      estimatedMinutes: 150,
      notes: `## Introduction

- Demand is only half the story — a price needs someone **willing to sell** as well as to buy.
- **Supply** = the seller's side of the market; its curve slopes *opposite* to demand.
- **This topic:** the meaning of supply; the **law of supply**; bringing demand and supply together at **equilibrium**; and what happens at a **surplus** (price too high) or a **shortage** (price too low), and how the market returns to balance.

## What supply means

**Supply** is the quantity of a good or service that producers are **willing and able to sell** at a given price during a period of time.

## The law of supply

The **law of supply** states:

> As the price of a good rises, the quantity supplied rises; and as the price falls, the quantity supplied falls — **other things being equal**.

- Price and quantity supplied move in the **same direction** (a direct relationship).
- A higher price makes production more profitable, so producers offer more.

## The supply schedule and curve

A **supply schedule** shows how much producers will sell at each price; plotting it gives a **supply curve** that slopes **upward from left to right**.

| Price (L$/kg) | Quantity supplied (kg) |
|---|---|
| 20 | 10 |
| 40 | 20 |
| 60 | 30 |
| 80 | 40 |
| 100 | 50 |

## Factors that shift supply

A change in the good's **own price** moves us **along** the supply curve. Other factors shift the whole curve:

- **Cost of production** — higher input costs reduce supply.
- **Technology** — better technology increases supply.
- **Weather** (for farm goods) — good rains increase supply.
- **Taxes and subsidies** — taxes reduce supply; subsidies increase it.
- **Number of producers** — more sellers increase supply.

## Market equilibrium

The market brings buyers and sellers together. **Equilibrium** is the price at which the **quantity demanded equals the quantity supplied** — the market "clears," with no shortage and no surplus. It is where the demand and supply curves **cross**.

\`\`\`svg Equilibrium where demand and supply curves cross
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demand and supply curves crossing at the equilibrium point">
  <line x1="45" y1="185" x2="285" y2="185" stroke="#4d7c0f" stroke-width="2"/>
  <line x1="45" y1="185" x2="45" y2="20" stroke="#4d7c0f" stroke-width="2"/>
  <line x1="65" y1="35" x2="265" y2="170" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="65" y1="170" x2="265" y2="40" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="165" cy="103" r="4" fill="#111"/>
  <text x="255" y="165" font-size="12" fill="#dc2626">D</text>
  <text x="255" y="55" font-size="12" fill="#2563eb">S</text>
  <text x="172" y="98" font-size="10" fill="#111">E</text>
  <text x="160" y="210" font-size="12" text-anchor="middle" fill="#4d7c0f">Quantity</text>
  <text x="16" y="110" font-size="12" fill="#4d7c0f" transform="rotate(-90 16,110)">Price</text>
</svg>
\`\`\`

## Shortages and surpluses

- If the price is **above** equilibrium, quantity supplied exceeds quantity demanded → a **surplus** (goods unsold). Sellers cut the price.
- If the price is **below** equilibrium, quantity demanded exceeds quantity supplied → a **shortage** (goods run out). Buyers bid the price up.

In both cases price moves back toward equilibrium — the **market-clearing price**.

## Common errors and misconceptions

- **Thinking the supply curve slopes downward like demand** — supply slopes **upward**: price and quantity supplied move in the **same** direction, because a higher price makes production more profitable.
- **Mixing up shortage and surplus** — a **shortage** happens when the price is *below* equilibrium (demand exceeds supply, goods run out); a **surplus** happens when the price is *above* equilibrium (supply exceeds demand, goods go unsold).
- **Confusing a movement along the supply curve with a shift** — only the good's **own price** moves you along; costs, technology, weather, taxes and the number of sellers **shift** the whole curve.
- **Believing a fixed price can hold against market forces** — above equilibrium, unsold surpluses push the price down; below it, shortages push it up, until the market clears.`,
      workedExample: `**Task.** From the schedules below, find the equilibrium price and quantity, and explain what happens at a price of L$80.

| Price (L$/kg) | Quantity demanded (kg) | Quantity supplied (kg) |
|---|---|---|
| 40 | 50 | 20 |
| 60 | 40 | 30 |
| 80 | 30 | 40 |
| 100 | 20 | 50 |

**Step 1 — Find where demand equals supply**
Compare the two quantity columns at each price:
- At L$40: demand 50, supply 20 → demand exceeds supply (**shortage of 30**).
- At L$60: demand 40, supply 30 → shortage of 10.
- At L$80: demand 30, supply 40 → supply exceeds demand (**surplus of 10**).
- At L$100: demand 20, supply 50 → surplus of 30.

Demand equals supply **between L$60 and L$80** — at the price where the two are equal. Reading carefully, equilibrium sits at about **L$70**, where quantity demanded = quantity supplied = **35 kg** (the point where the columns meet). This is the **market-clearing price**.

**Step 2 — What happens at L$80?**
At L$80, quantity supplied (40) is **greater** than quantity demanded (30), leaving a **surplus of 10 kg** unsold. To sell the extra stock, producers **lower the price**, which raises quantity demanded and lowers quantity supplied, pushing the market back down toward equilibrium.

**Conclusion:** the market naturally corrects a surplus by falling in price (and a shortage by rising in price) until quantity demanded equals quantity supplied at the equilibrium price.`,
      teachingTip:
        "Teach equilibrium as a story of pressure, not just a crossing point. At a high price, unsold stock (surplus) pushes sellers to cut prices; at a low price, empty shelves (shortage) let sellers raise them. Have learners predict the direction of the price arrow from a schedule before they draw the graph — it stops them memorising 'where the lines cross' without understanding why the market settles there.",
      quiz: [
        {
          prompt: "Supply is the quantity producers are…",
          options: [
            "willing and able to sell at a given price",
            "willing to buy",
            "hoping to store",
            "forced to destroy",
          ],
          correctIndex: 0,
          explanation: "Supply is what sellers will offer at a price.",
        },
        {
          prompt: "The law of supply says that as price rises, quantity supplied…",
          options: ["rises", "falls", "stays fixed", "becomes zero"],
          correctIndex: 0,
          explanation: "Higher prices make production more profitable, so supply rises.",
        },
        {
          prompt: "The relationship between price and quantity supplied is…",
          options: ["direct", "inverse", "zero", "negative"],
          correctIndex: 0,
          explanation: "They move in the same direction — a direct relationship.",
        },
        {
          prompt: "A supply curve slopes…",
          options: [
            "upward from left to right",
            "downward from left to right",
            "horizontally",
            "in a circle",
          ],
          correctIndex: 0,
          explanation: "Because price and quantity move together, it slopes up.",
        },
        {
          prompt: "Which factor shifts the supply curve?",
          options: ["the cost of production", "the good's own price", "the slope", "nothing"],
          correctIndex: 0,
          explanation: "Production costs are a condition of supply, so they shift the curve.",
        },
        {
          prompt: "Better technology usually causes supply to…",
          options: ["increase", "decrease", "vanish", "stay the same"],
          correctIndex: 0,
          explanation: "Improved technology raises output, increasing supply.",
        },
        {
          prompt: "A tax on producers usually causes supply to…",
          options: ["decrease", "increase", "double", "stay fixed"],
          correctIndex: 0,
          explanation: "Taxes raise costs, reducing supply.",
        },
        {
          prompt: "Equilibrium in a market is where…",
          options: [
            "quantity demanded equals quantity supplied",
            "demand is highest",
            "supply is zero",
            "price is highest",
          ],
          correctIndex: 0,
          explanation: "At equilibrium the market clears — demand meets supply.",
        },
        {
          prompt: "On a graph, equilibrium is found where the demand and supply curves…",
          options: ["cross", "are parallel", "both slope up", "disappear"],
          correctIndex: 0,
          explanation: "The intersection is the equilibrium point.",
        },
        {
          prompt: "If the price is above equilibrium, there is a…",
          options: ["surplus", "shortage", "perfect balance", "shift in demand"],
          correctIndex: 0,
          explanation: "Supply exceeds demand, leaving unsold goods (surplus).",
        },
        {
          prompt: "If the price is below equilibrium, there is a…",
          options: ["shortage", "surplus", "balance", "tax"],
          correctIndex: 0,
          explanation: "Demand exceeds supply, so goods run short.",
        },
        {
          prompt: "When there is a surplus, sellers tend to…",
          options: ["lower the price", "raise the price", "stop selling forever", "increase the tax"],
          correctIndex: 0,
          explanation: "Lowering the price clears the unsold stock.",
        },
        {
          prompt: "When there is a shortage, the price tends to…",
          options: ["rise", "fall", "stay the same", "become zero"],
          correctIndex: 0,
          explanation: "Buyers bid the price up when goods are scarce.",
        },
        {
          prompt: "The equilibrium price is also called the…",
          options: ["market-clearing price", "cost price", "tax price", "fixed price"],
          correctIndex: 0,
          explanation: "At it, the market clears with no surplus or shortage.",
        },
        {
          prompt: "A change in the good's own price causes a…",
          options: [
            "movement along the supply curve",
            "shift of the supply curve",
            "change in technology",
            "change in weather",
          ],
          correctIndex: 0,
          explanation: "Own-price changes move us along the curve.",
        },
        {
          prompt: "Good rainfall increasing the supply of rice is an example of which factor?",
          options: ["weather", "taxes", "the good's own price", "population of buyers"],
          correctIndex: 0,
          explanation: "Weather affects the supply of farm goods.",
        },
        {
          prompt: "More producers entering a market will tend to…",
          options: ["increase supply", "decrease supply", "remove supply", "raise costs only"],
          correctIndex: 0,
          explanation: "More sellers means greater supply at each price.",
        },
        {
          prompt: "A government subsidy to producers usually…",
          options: ["increases supply", "decreases supply", "has no effect", "raises the tax"],
          correctIndex: 0,
          explanation: "Subsidies lower costs, encouraging more supply.",
        },
        {
          prompt: "At equilibrium there is…",
          options: [
            "neither a shortage nor a surplus",
            "a large surplus",
            "a large shortage",
            "no trade at all",
          ],
          correctIndex: 0,
          explanation: "The market clears exactly — no shortage or surplus.",
        },
        {
          prompt: "If demand rises while supply is unchanged, the equilibrium price will usually…",
          options: ["rise", "fall", "stay exactly the same", "become zero"],
          correctIndex: 0,
          explanation: "Greater demand against fixed supply pushes the price up.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "State the law of supply and explain why the supply curve slopes upward.",
          answerKey:
            "Law of supply: other things being equal, as price rises quantity supplied rises, and as price falls quantity supplied falls. The curve slopes upward because a higher price makes production more profitable, so producers are willing to supply more. Award marks for the law and the profit-based reason.",
          marks: 3,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain the difference between a shortage and a surplus in a market.",
          answerKey:
            "A shortage occurs when the price is below equilibrium and quantity demanded exceeds quantity supplied (goods run out), pushing price up. A surplus occurs when the price is above equilibrium and quantity supplied exceeds quantity demanded (goods unsold), pushing price down. Award marks for each correctly defined with its price position.",
          marks: 4,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "The equilibrium price is the price at which…",
          options: [
            "quantity demanded equals quantity supplied",
            "supply is greatest",
            "demand is greatest",
            "the tax is highest",
          ],
          correctIndex: 0,
          answerKey: "Equilibrium is where quantity demanded equals quantity supplied.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Using demand and supply, explain how the market price of a good returns to equilibrium after it has been set too high.",
          answerKey:
            "A strong answer explains that at a price above equilibrium the quantity supplied exceeds the quantity demanded, creating a surplus of unsold goods. To sell the surplus, producers lower the price; as the price falls, quantity demanded rises and quantity supplied falls, shrinking the surplus. This continues until quantity demanded equals quantity supplied at the equilibrium (market-clearing) price. Award marks for identifying the surplus, the fall in price, the responses of quantity demanded and supplied, and the return to equilibrium.",
          marks: 5,
        },
      ],
    },
  ],
};
