import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester One, Period II: The Concepts of Demand and Supply. CONTENTS:
// (1) Definitions: demand and supply laws; (2) demand and supply schedules;
// (3) kinds of demand and supply; (4) relationship between supply and demand;
// (5) different graphs of demand and supply curves; (6) determination of
// equilibrium price and quantity; (7) market clearing price, shortages &
// surplus; (8) movements and shift of demand and supply; (9) exceptional
// demand curve, price ceiling and price floor. Items 2 and 5 are taught as one
// topic (a schedule and its curve are the same data), and items 6 and 7 as one
// (market clearing is the equilibrium), giving seven sourced topics.
export const economicsG10P2: PeriodContent = {
  grade: 10,
  number: 2,
  title: "The Concepts of Demand and Supply",
  summary:
    "Period II of the MoE Grade 10 Economics syllabus. Learners state the laws of demand and supply, build schedules and curves, distinguish the kinds of demand and supply, explain how the two sides interact, find the equilibrium (market-clearing) price and quantity, tell a movement along a curve from a shift of the whole curve, and study exceptional demand curves and price controls.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 3.1 Demand, Supply, and Equilibrium in Markets for Goods and Services (https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services)
    {
      slug: "laws-of-demand-and-supply",
      title: "Definitions: The Laws of Demand and Supply",
      objective:
        "By the end of the topic, learners should be able to define demand, quantity demanded, supply and quantity supplied, and state and explain the laws of demand and supply.",
      estimatedMinutes: 120,
      notes: `## Demand

**Demand** — the amount of a good or service consumers are **willing and able** to buy at each price.
- It rests on both the desire for the good and the **ability to pay** — a wish without money is not demand.
- **Quantity demanded** — the specific amount consumers will buy at **one particular price**.

## The law of demand

**Law of demand** — other things equal, as the **price rises**, the **quantity demanded falls**; as the price falls, the quantity demanded rises.
- Price and quantity demanded move in **opposite directions** (an inverse relationship).
- The phrase "other things equal" (ceteris paribus) means all other influences are held constant.

*Why it holds:* at a higher price fewer people can afford the good and buyers switch to cheaper substitutes; at a lower price the good is more affordable and attractive.

## Supply

**Supply** — the amount of a good or service a producer is **willing to produce and bring to market** at each price.
- **Quantity supplied** — the specific amount producers will offer at **one particular price**.

## The law of supply

**Law of supply** — other things equal, a **higher price** leads to a **higher quantity supplied**, and a lower price to a lower quantity supplied.
- Price and quantity supplied move in the **same direction** (a direct relationship).

*Why it holds:* a higher price makes production more profitable, so firms are willing to produce and sell more.

## Summary table

| Concept | Relationship with price | Direction |
| --- | --- | --- |
| Quantity demanded | Inverse | Price up, Qd down |
| Quantity supplied | Direct | Price up, Qs up |

## Common errors

- **Confusing "demand" with "wanting".** Demand requires both willingness *and* ability to pay.
- **Mixing up the two laws.** Demand is inverse (opposite directions); supply is direct (same direction).
- **Forgetting "other things equal".** The laws hold only while all other influences are constant.`,
      workedExample: `**Question:** At a price of 1 dollar a loaf, buyers want 800 loaves and bakers offer 500. At 2 dollars, buyers want 460 and bakers offer 700. State which law each pattern illustrates and explain the direction of change.

**Solution**

*Step 1 — the demand side.* As price rises from 1 to 2 dollars, quantity demanded falls from 800 to 460. Price up, quantity demanded down — opposite directions. This illustrates the **law of demand** (inverse relationship).

*Step 2 — the supply side.* As price rises from 1 to 2 dollars, quantity supplied rises from 500 to 700. Price up, quantity supplied up — same direction. This illustrates the **law of supply** (direct relationship).

*Step 3 — why.* Higher prices push buyers away (less affordable, switch to substitutes) but pull sellers in (more profitable to produce).

**Answer:** The buyers' figures follow the law of demand (price and quantity demanded move oppositely); the bakers' figures follow the law of supply (price and quantity supplied move together).`,
      quiz: [
        { prompt: "Demand requires that a consumer is", options: ["willing only", "able only", "willing and able to pay", "employed"], correctIndex: 2, explanation: "Demand needs both willingness and ability to pay." },
        { prompt: "The law of demand states that as price rises, quantity demanded", options: ["rises", "falls", "stays the same", "doubles"], correctIndex: 1, explanation: "Price and quantity demanded move inversely." },
        { prompt: "The law of supply states that as price rises, quantity supplied", options: ["falls", "rises", "stays the same", "becomes zero"], correctIndex: 1, explanation: "Price and quantity supplied move in the same direction." },
        { prompt: "Quantity demanded is", options: ["the amount bought at one particular price", "all the amounts at every price", "the same as supply", "always fixed"], correctIndex: 0, explanation: "Quantity demanded is at a single price." },
        { prompt: "The relationship between price and quantity demanded is", options: ["direct", "inverse", "zero", "random"], correctIndex: 1, explanation: "It is inverse (opposite directions)." },
        { prompt: "The relationship between price and quantity supplied is", options: ["inverse", "direct", "negative", "constant"], correctIndex: 1, explanation: "It is direct (same direction)." },
        { prompt: "'Other things equal' (ceteris paribus) means", options: ["prices never change", "all other influences are held constant", "demand equals supply", "the market is closed"], correctIndex: 1, explanation: "Only price changes; other factors are held constant." },
        { prompt: "A higher price raises quantity supplied because production becomes", options: ["illegal", "more profitable", "cheaper for buyers", "impossible"], correctIndex: 1, explanation: "Higher prices make supplying more profitable." },
        { prompt: "A pure wish for a car with no money to buy it is", options: ["demand", "not demand", "quantity supplied", "supply"], correctIndex: 1, explanation: "Without ability to pay it is not demand." },
        { prompt: "As price falls, the law of demand predicts quantity demanded will", options: ["fall", "rise", "stay the same", "vanish"], correctIndex: 1, explanation: "Lower price, higher quantity demanded." },
        { prompt: "Supply is the amount producers are willing to", options: ["buy", "produce and bring to market at each price", "consume", "import only"], correctIndex: 1, explanation: "Supply is what producers offer at each price." },
        { prompt: "Which pair moves in opposite directions?", options: ["Price and quantity supplied", "Price and quantity demanded", "Supply and cost", "Income and wants"], correctIndex: 1, explanation: "Price and quantity demanded are inverse." },
        { prompt: "At a lower price, buyers switch away from", options: ["the cheaper good", "more expensive substitutes", "all goods", "savings"], correctIndex: 1, explanation: "A lower price attracts buyers from dearer substitutes." },
        { prompt: "Quantity supplied at one specific price is a point on the", options: ["demand curve", "supply curve", "budget line", "scale of preference"], correctIndex: 1, explanation: "It is a point on the supply curve." },
        { prompt: "The law of demand assumes", options: ["income changes", "tastes change", "other things equal", "supply is fixed"], correctIndex: 2, explanation: "Ceteris paribus underlies the law." },
        { prompt: "If price rises and quantity demanded also rises, this", options: ["confirms the law of demand", "appears to break the ordinary law of demand", "is normal for all goods", "proves the law of supply"], correctIndex: 1, explanation: "Ordinary demand is inverse; a same-direction move is exceptional." },
        { prompt: "Which best defines demand?", options: ["What producers offer", "The amount consumers are willing and able to buy at each price", "The total money in an economy", "Government spending"], correctIndex: 1, explanation: "Demand is consumers' willingness and ability to buy at each price." },
        { prompt: "A direct relationship means the two variables", options: ["move oppositely", "move together", "never change", "cancel out"], correctIndex: 1, explanation: "Direct = same direction, as with price and quantity supplied." },
        { prompt: "Higher prices reduce quantity demanded partly because buyers", options: ["earn more", "switch to cheaper substitutes", "produce more", "pay no tax"], correctIndex: 1, explanation: "Substitution away from the dearer good lowers quantity demanded." },
        { prompt: "The two laws together describe how", options: ["governments tax", "price influences the amounts bought and produced", "money is printed", "firms merge"], correctIndex: 1, explanation: "They link price to quantity demanded and supplied." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define demand and quantity demanded, and state the law of demand.", answerKey: "Demand is the amount of a good consumers are willing and able to buy at each price. Quantity demanded is the specific amount bought at one particular price. The law of demand: other things equal, as price rises quantity demanded falls, and as price falls quantity demanded rises (inverse relationship). Award 3 for demand, 3 for quantity demanded, 4 for the law.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the law of supply and explain why it holds.", answerKey: "Law of supply: other things equal, a higher price leads to a higher quantity supplied and a lower price to a lower quantity supplied (direct relationship). It holds because a higher price makes production more profitable, so firms are willing to produce and sell more. Award 4 for the law, 4 for the reason.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which statement correctly contrasts the two laws?", options: ["Both are inverse", "Both are direct", "Demand is inverse; supply is direct", "Demand is direct; supply is inverse"], correctIndex: 2, answerKey: "Demand is inverse (price up, Qd down); supply is direct (price up, Qs up). Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a strong wish to own a good is not necessarily demand.", answerKey: "Demand requires both willingness and the ability to pay. A wish without the money to buy is only a want, not effective demand, because it cannot be expressed in the market. Award marks for the willingness-and-ability point and the distinction from a mere want.", marks: 6 },
        { type: "ESSAY", prompt: "Explain the laws of demand and supply, using price examples, and discuss why they move in opposite directions to each other.", answerKey: "Award marks for: definition of demand/quantity demanded and the inverse law with a price example, 8; definition of supply/quantity supplied and the direct law with a price example, 8; explanation that buyers are pushed away by higher prices while sellers are pulled in, so the two respond oppositely, 8; ceteris paribus noted, 3; terminology, 3. A script that states the laws without explaining the opposite responses should not exceed 16.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 3.1 Demand, Supply, and Equilibrium in Markets for Goods and Services (https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services)
    {
      slug: "demand-and-supply-schedules-and-curves",
      title: "Demand and Supply Schedules and Curves",
      objective:
        "By the end of the topic, learners should be able to read and build demand and supply schedules, plot them as curves, and explain why the demand curve slopes downward and the supply curve upward.",
      estimatedMinutes: 130,
      notes: `## The demand schedule

**Demand schedule** — a table showing the quantity demanded at each of several prices.

Example (petrol market, quantities in millions of gallons):

| Price (per gallon) | Quantity demanded | Quantity supplied |
| --- | --- | --- |
| 1.00 | 800 | 500 |
| 1.20 | 700 | 550 |
| 1.40 | 600 | 600 |
| 1.60 | 550 | 640 |
| 1.80 | 500 | 680 |
| 2.00 | 460 | 700 |
| 2.20 | 420 | 720 |

- Reading down the demand column: as price rises, quantity demanded falls (law of demand).
- Reading down the supply column: as price rises, quantity supplied rises (law of supply).

## The supply schedule

**Supply schedule** — a table showing the quantity supplied at each price (the third column above).

## From schedule to curve

- Plot **price on the vertical axis** and **quantity on the horizontal axis**.
- Each row of the schedule becomes a point; joining the points gives a curve.

**Demand curve** — a graph of the demand schedule; it **slopes downward** from left to right, because price and quantity demanded move inversely.

**Supply curve** — a graph of the supply schedule; it **slopes upward** from left to right, because price and quantity supplied move in the same direction.

\`\`\`svg Demand slopes down, supply slopes up
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Downward demand curve and upward supply curve">
  <line x1="45" y1="15" x2="45" y2="185" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="185" x2="285" y2="185" stroke="#555" stroke-width="1.5"/>
  <text x="10" y="20" font-size="11">Price</text>
  <text x="240" y="205" font-size="11">Quantity</text>
  <line x1="60" y1="30" x2="270" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="250" y="165" font-size="11" fill="#c0392b">D</text>
  <line x1="60" y1="170" x2="270" y2="30" stroke="#1f6feb" stroke-width="2"/>
  <text x="250" y="45" font-size="11" fill="#1f6feb">S</text>
</svg>
\`\`\`

## Reading a curve

- A point **on** the demand curve gives the quantity demanded at that price.
- A point **on** the supply curve gives the quantity supplied at that price.
- The two curves are usually drawn on the **same axes** so the market can be studied together.

## Common errors

- **Putting quantity on the vertical axis.** By convention, price is vertical, quantity horizontal.
- **Drawing the demand curve upward.** It slopes downward; only the supply curve slopes upward.
- **Confusing a schedule with a curve.** They show the *same information* — the schedule as a table, the curve as a graph.`,
      workedExample: `**Question:** From the petrol schedule above, (a) state the quantity demanded and supplied at 1.20 dollars, (b) describe what happens to each as price rises to 2.00 dollars, and (c) say which way each curve slopes.

**Solution**

(a) At **1.20 dollars**: quantity demanded = **700** million gallons; quantity supplied = **550** million gallons.

(b) As price rises from 1.20 to 2.00 dollars:
- Quantity demanded **falls** from 700 to 460 (down 240) — the law of demand.
- Quantity supplied **rises** from 550 to 700 (up 150) — the law of supply.

(c) Plotting price (vertical) against quantity (horizontal):
- The **demand curve slopes downward** (price and quantity demanded inverse).
- The **supply curve slopes upward** (price and quantity supplied direct).

**Answer:** At 1.20 dollars, Qd = 700 and Qs = 550; as price rises to 2.00, Qd falls to 460 while Qs rises to 700; the demand curve slopes down and the supply curve slopes up.`,
      quiz: [
        { prompt: "A demand schedule is", options: ["a graph", "a table of quantity demanded at each price", "a single price", "a curve"], correctIndex: 1, explanation: "A schedule is a table of prices and quantities." },
        { prompt: "On a demand or supply graph, price is placed on the", options: ["horizontal axis", "vertical axis", "diagonal", "curve itself"], correctIndex: 1, explanation: "By convention price is vertical, quantity horizontal." },
        { prompt: "The demand curve slopes", options: ["upward", "downward", "horizontally", "vertically"], correctIndex: 1, explanation: "Downward because price and quantity demanded are inverse." },
        { prompt: "The supply curve slopes", options: ["downward", "upward", "horizontally", "in a circle"], correctIndex: 1, explanation: "Upward because price and quantity supplied are direct." },
        { prompt: "In the petrol schedule, at 1.40 dollars quantity demanded equals", options: ["500", "600", "700", "800"], correctIndex: 1, explanation: "The schedule shows 600 million gallons demanded at 1.40." },
        { prompt: "At 1.00 dollar, quantity supplied in the schedule is", options: ["800", "500", "600", "700"], correctIndex: 1, explanation: "500 million gallons are supplied at 1.00." },
        { prompt: "A schedule and its curve show", options: ["different information", "the same information in different forms", "only prices", "only quantities"], correctIndex: 1, explanation: "Table and graph present the same data." },
        { prompt: "Each row of a demand schedule becomes", options: ["a whole curve", "a point on the curve", "an axis", "a shift"], correctIndex: 1, explanation: "Rows plot as points that join into the curve." },
        { prompt: "As you read down the price column of a demand schedule, quantity demanded", options: ["rises", "falls", "is constant", "doubles"], correctIndex: 1, explanation: "Higher prices, lower quantity demanded." },
        { prompt: "As you read down the price column of a supply schedule, quantity supplied", options: ["falls", "rises", "is constant", "is zero"], correctIndex: 1, explanation: "Higher prices, higher quantity supplied." },
        { prompt: "Quantity is placed on the", options: ["vertical axis", "horizontal axis", "top of the graph", "curve"], correctIndex: 1, explanation: "Quantity is horizontal by convention." },
        { prompt: "A point on the supply curve tells you the", options: ["quantity demanded", "quantity supplied at that price", "equilibrium", "income"], correctIndex: 1, explanation: "It reads off the quantity supplied at a price." },
        { prompt: "Which curve slopes upward from left to right?", options: ["Demand", "Supply", "Both", "Neither"], correctIndex: 1, explanation: "The supply curve slopes upward." },
        { prompt: "In the petrol schedule, at 2.20 dollars quantity demanded is", options: ["420", "700", "600", "550"], correctIndex: 0, explanation: "420 million gallons are demanded at 2.20." },
        { prompt: "Both curves are usually drawn on the same axes so that", options: ["they cancel out", "the market can be studied together", "prices disappear", "quantity is hidden"], correctIndex: 1, explanation: "Together they show how the market behaves." },
        { prompt: "A downward-sloping curve on a price-quantity graph is the", options: ["supply curve", "demand curve", "cost curve", "income line"], correctIndex: 1, explanation: "Demand slopes down." },
        { prompt: "The demand curve slopes downward because", options: ["price and quantity demanded are direct", "price and quantity demanded are inverse", "supply is fixed", "income is fixed"], correctIndex: 1, explanation: "The inverse relationship gives a downward slope." },
        { prompt: "Turning a supply schedule into a supply curve requires", options: ["only the price column", "plotting price against quantity and joining the points", "adding demand", "removing the table"], correctIndex: 1, explanation: "Plot the pairs and join them." },
        { prompt: "Which is TRUE of the petrol schedule as price rises from 1.00 to 2.20?", options: ["Qd rises, Qs falls", "Qd falls, Qs rises", "Both fall", "Both rise"], correctIndex: 1, explanation: "Qd falls (800 to 420); Qs rises (500 to 720)." },
        { prompt: "A common mistake is to draw the demand curve", options: ["downward", "upward", "as a point", "on the horizontal axis"], correctIndex: 1, explanation: "The demand curve should slope downward, not upward." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a demand schedule and a supply schedule.", answerKey: "A demand schedule is a table showing the quantity demanded at each of several prices. A supply schedule is a table showing the quantity supplied at each price. Award 4 per correct definition, plus 2 for noting each reflects the relevant law.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain why the demand curve slopes downward and the supply curve slopes upward.", answerKey: "The demand curve slopes downward because price and quantity demanded are inversely related (higher price, lower quantity demanded). The supply curve slopes upward because price and quantity supplied are directly related (higher price, higher quantity supplied). Award 4 per curve with its reason.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "On a standard demand/supply diagram, the axes are", options: ["price horizontal, quantity vertical", "price vertical, quantity horizontal", "both price", "both quantity"], correctIndex: 1, answerKey: "By convention price is on the vertical axis and quantity on the horizontal axis. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Using the petrol schedule, describe what happens to quantity demanded and quantity supplied as price rises from 1.00 to 1.80 dollars.", answerKey: "Quantity demanded falls from 800 to 500 million gallons; quantity supplied rises from 500 to 680 million gallons. This shows the law of demand (inverse) and the law of supply (direct). Award marks for the two correct directions with figures and naming the laws.", marks: 6 },
        { type: "ESSAY", prompt: "Explain how a demand schedule and a supply schedule are turned into curves, and why the two curves have opposite slopes. Use the petrol data to illustrate.", answerKey: "Award marks for: definition of the two schedules, 6; plotting price (vertical) against quantity (horizontal), each row a point joined into a curve, 6; the demand curve sloping downward (inverse) and supply upward (direct), 8; use of the petrol figures to illustrate both, 6; terminology and a labelled description, 4. A script that does not use the data should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 3.2 Shifts in Demand and Supply (substitutes, complements) (https://openstax.org/books/principles-economics-3e/pages/3-2-shifts-in-demand-and-supply-for-goods-and-services) and LibreTexts Social Sci — Boundless Economics 3.1 Demand: individual vs market demand (https://socialsci.libretexts.org/Bookshelves/Economics/Introductory_Comprehensive_Economics/Economics_(Boundless)/03:_Introducing_Supply_and_Demand/3.01:_Demand)
    {
      slug: "kinds-of-demand-and-supply",
      title: "Kinds of Demand and Supply",
      objective:
        "By the end of the topic, learners should be able to distinguish individual from market demand and supply, and identify joint (complementary) demand, competitive (substitute) demand and derived demand.",
      estimatedMinutes: 110,
      notes: `## Individual and market demand

**Individual demand** — the quantities a single consumer is willing and able to buy at various prices.
**Market demand** — the **sum of the individual quantities** all consumers are willing to buy at each price; individual demand schedules are added across to get the market demand curve.

## Individual and market supply

- In the same way, **individual supply** is one producer's offering at each price, and **market supply** is the sum of all producers' quantities supplied at each price.

## Kinds of demand

**Joint (complementary) demand** — two goods demanded **together** because they are used together (**complements**). A complement is a good we use *with* another good; when the demand for one rises, so does the demand for the other. Examples: cars and petrol, bread and butter, phones and chargers.

**Competitive (substitute) demand** — goods that can be used **in place of** one another (**substitutes**). A substitute is a good we can use instead of another; a rise in the price of one raises the demand for the other. Examples: rice and cassava, tea and coffee.

**Derived demand** — demand for a good or factor that comes **from the demand for something else it helps produce**. The demand for labour, for instance, is derived from the demand for the goods that labour makes — the stronger the demand for the product, the greater the demand for the workers. Demand for cement is derived from the demand for buildings.

## Kinds of supply (brief)

- **Individual vs market supply** — as above.
- **Joint supply** — one process yields two goods together (e.g. beef and hides from cattle).
- **Competitive supply** — the same resources could produce one good *or* another (e.g. land used for rice *or* cassava).

## Common errors

- **Confusing complements with substitutes.** Complements are used *together* (joint demand); substitutes are used *instead of* each other (competitive demand).
- **Thinking market demand is just one big consumer.** It is the horizontal sum of every individual consumer's demand.
- **Missing that factor demand is derived.** Firms want labour and machines only because consumers want the goods those factors make.`,
      workedExample: `**Question:** Classify the demand in each case: (a) cars and petrol; (b) tea and coffee; (c) bricklayers hired to build houses. Explain each classification.

**Solution**

(a) **Cars and petrol — joint (complementary) demand.** They are used together; buying more cars raises the demand for petrol. They are complements.

(b) **Tea and coffee — competitive (substitute) demand.** One can replace the other; if coffee's price rises, buyers switch to tea, raising tea's demand. They are substitutes.

(c) **Bricklayers to build houses — derived demand.** The demand for bricklayers comes from the demand for houses. If people want more houses, firms want more bricklayers; the labour is wanted only because of the product it helps make.

**Answer:** (a) joint/complementary demand, (b) competitive/substitute demand, (c) derived demand — each shows a different way that the demand for one thing depends on another.`,
      quiz: [
        { prompt: "Market demand is", options: ["one consumer's demand", "the sum of all consumers' quantities demanded at each price", "the government's demand", "supply minus demand"], correctIndex: 1, explanation: "It adds individual demands across consumers." },
        { prompt: "Two goods used together are in", options: ["competitive demand", "joint (complementary) demand", "derived demand", "no demand"], correctIndex: 1, explanation: "Complements are jointly demanded." },
        { prompt: "Goods used in place of each other are", options: ["complements", "substitutes", "derived goods", "joint goods"], correctIndex: 1, explanation: "Substitutes are competitive demand." },
        { prompt: "Demand for labour is an example of", options: ["joint demand", "derived demand", "competitive demand", "individual supply"], correctIndex: 1, explanation: "It derives from demand for the goods labour makes." },
        { prompt: "Cars and petrol are", options: ["substitutes", "complements", "unrelated", "derived"], correctIndex: 1, explanation: "They are used together — complements." },
        { prompt: "Tea and coffee are", options: ["complements", "substitutes", "joint goods", "derived goods"], correctIndex: 1, explanation: "One can replace the other — substitutes." },
        { prompt: "Individual demand is", options: ["all consumers combined", "one consumer's quantities at various prices", "market supply", "government demand"], correctIndex: 1, explanation: "It is a single consumer's demand." },
        { prompt: "If the demand for buildings rises, the demand for cement will", options: ["fall", "rise (derived demand)", "stay the same", "disappear"], correctIndex: 1, explanation: "Cement demand is derived from building demand." },
        { prompt: "A complement is a good we use", options: ["instead of another", "with another good", "only alone", "as money"], correctIndex: 1, explanation: "Complements are used together." },
        { prompt: "A substitute is a good we use", options: ["with another", "in place of another", "as a factor", "for export only"], correctIndex: 1, explanation: "Substitutes replace one another." },
        { prompt: "One process yielding beef and hides together illustrates", options: ["competitive supply", "joint supply", "derived demand", "market demand"], correctIndex: 1, explanation: "Beef and hides are in joint supply." },
        { prompt: "Land that could grow rice OR cassava illustrates", options: ["joint supply", "competitive supply", "joint demand", "derived demand"], correctIndex: 1, explanation: "The same resources produce one good or another — competitive supply." },
        { prompt: "Market demand curves are found by adding individual curves", options: ["vertically", "horizontally", "diagonally", "not at all"], correctIndex: 1, explanation: "Quantities are summed across at each price." },
        { prompt: "A rise in the price of coffee tends to raise the demand for", options: ["coffee", "tea (a substitute)", "sugar only", "nothing"], correctIndex: 1, explanation: "Buyers switch to the substitute, tea." },
        { prompt: "Bread and butter are usually", options: ["substitutes", "complements", "derived goods", "unrelated"], correctIndex: 1, explanation: "They are used together — complements (joint demand)." },
        { prompt: "Derived demand means demand that comes from", options: ["advertising only", "the demand for something else it helps produce", "government orders", "the weather"], correctIndex: 1, explanation: "Factor demand derives from product demand." },
        { prompt: "Firms want machines mainly because consumers want", options: ["the machines themselves", "the goods the machines make", "lower taxes", "more imports"], correctIndex: 1, explanation: "Machine demand is derived from product demand." },
        { prompt: "Which pairing is a substitute (competitive) relationship?", options: ["Phone and charger", "Rice and cassava", "Car and petrol", "Bread and butter"], correctIndex: 1, explanation: "Rice and cassava can replace each other." },
        { prompt: "A single consumer's demand added to all others gives", options: ["derived demand", "market demand", "joint supply", "quantity supplied"], correctIndex: 1, explanation: "Summed individual demands equal market demand." },
        { prompt: "Which is TRUE of complements?", options: ["A rise in one's price raises the other's demand", "They are used together, so using more of one raises demand for the other", "They replace each other", "They are always cheaper"], correctIndex: 1, explanation: "Complements are used together; using more of one raises demand for the other." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between individual demand and market demand.", answerKey: "Individual demand is the quantities a single consumer is willing and able to buy at various prices. Market demand is the sum of all individual quantities demanded at each price — the horizontal addition of individual demand curves. Award 4 per definition, 2 for the summing point.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Distinguish joint (complementary) demand from competitive (substitute) demand, with an example of each.", answerKey: "Joint/complementary demand is for goods used together (complements), e.g. cars and petrol — more of one raises demand for the other. Competitive/substitute demand is for goods used in place of each other (substitutes), e.g. tea and coffee — a rise in one's price raises the other's demand. Award 3 per type with example, 2 for a clear contrast.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "The demand for bricklayers to build houses is an example of", options: ["joint demand", "competitive demand", "derived demand", "market supply"], correctIndex: 2, answerKey: "It derives from the demand for houses — derived demand. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain what is meant by derived demand and give one example.", answerKey: "Derived demand is demand for a good or factor that arises from the demand for something else it helps to produce; e.g. the demand for labour (or cement) is derived from the demand for the products (goods, or buildings) they make. Award 4 for the definition, 2 for a valid example.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the different kinds of demand and supply, showing how the demand for one thing can depend on another.", answerKey: "Award marks for: individual vs market demand and supply, 6; joint/complementary demand (complements) with example, 6; competitive/substitute demand (substitutes) with example, 6; derived demand with example, 6; joint and competitive supply, 3; terminology, 3. A script covering fewer than four kinds of demand/supply loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 3.1 Demand, Supply, and Equilibrium in Markets for Goods and Services (how the two sides interact) (https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services)
    {
      slug: "relationship-between-demand-and-supply",
      title: "The Relationship Between Demand and Supply",
      objective:
        "By the end of the topic, learners should be able to explain how demand and supply interact through the price mechanism to coordinate the plans of buyers and sellers.",
      estimatedMinutes: 100,
      notes: `## Two sides of every market

- **Demand** represents the plans of **consumers** (buyers).
- **Supply** represents the plans of **producers** (sellers).
- A market brings the two together; the **price** is the signal that links them.

## The price mechanism

- Price acts as a signal to both sides at once:
  - A **high price** discourages buyers (quantity demanded falls) but encourages sellers (quantity supplied rises).
  - A **low price** encourages buyers (quantity demanded rises) but discourages sellers (quantity supplied falls).
- Because the two sides respond to price in **opposite directions**, there is one price at which their plans exactly match.

## Coordinating buyers and sellers

- Only at the price where **quantity demanded equals quantity supplied** do the plans of consumers and producers **agree**.
- Above that price, sellers want to sell more than buyers want to buy.
- Below it, buyers want to buy more than sellers want to sell.
- The gap between the two plans creates pressure that pushes price back toward the matching point (studied in detail in the equilibrium topic).

## An inverse partnership

| Price change | Quantity demanded | Quantity supplied | Effect on the gap |
| --- | --- | --- | --- |
| Price rises | Falls | Rises | Sellers' plans grow, buyers' shrink |
| Price falls | Rises | Falls | Buyers' plans grow, sellers' shrink |

## Why the relationship matters

- Demand alone cannot set a price, and supply alone cannot set a price — **both together** determine what is bought and sold and at what price.
- This interaction is the heart of a market economy: no single person decides the price; it emerges from the two sides meeting.

## Common errors

- **Thinking demand or supply alone fixes the price.** Price comes from their interaction.
- **Assuming buyers and sellers want the same thing at a high price.** They pull in opposite directions; only one price reconciles them.`,
      workedExample: `**Question:** At 2 dollars, buyers want 460 units and sellers offer 700. At 1 dollar, buyers want 800 and sellers offer 500. Explain how demand and supply interact at each price and what this tells us about where price will settle.

**Solution**

*Step 1 — at 2 dollars (a high price).* Sellers' plans (700) exceed buyers' plans (460). Sellers are keen but buyers are not; there are more goods offered than wanted. The mismatch pushes price **down**.

*Step 2 — at 1 dollar (a low price).* Buyers' plans (800) exceed sellers' plans (500). Buyers are keen but sellers are not; more is wanted than offered. The mismatch pushes price **up**.

*Step 3 — the interaction.* Because the two sides respond to price oppositely, the price where **their plans meet** lies between 1 and 2 dollars. There the quantity buyers want equals the quantity sellers offer, and both plans agree.

**Answer:** At a high price supply outweighs demand and price is pushed down; at a low price demand outweighs supply and price is pushed up; the interaction drives price to the level where the two plans match.`,
      quiz: [
        { prompt: "Demand represents the plans of", options: ["producers", "consumers", "the government", "banks"], correctIndex: 1, explanation: "Demand is the buyers' side." },
        { prompt: "Supply represents the plans of", options: ["consumers", "producers", "importers only", "the central bank"], correctIndex: 1, explanation: "Supply is the sellers' side." },
        { prompt: "In a market, the signal that links buyers and sellers is the", options: ["quantity", "price", "tax", "wage"], correctIndex: 1, explanation: "Price coordinates the two sides." },
        { prompt: "A high price tends to", options: ["encourage buyers and discourage sellers", "discourage buyers and encourage sellers", "encourage both", "discourage both"], correctIndex: 1, explanation: "High prices deter buyers but attract sellers." },
        { prompt: "A low price tends to", options: ["encourage buyers and discourage sellers", "discourage buyers and encourage sellers", "encourage both", "have no effect"], correctIndex: 0, explanation: "Low prices attract buyers but deter sellers." },
        { prompt: "Buyers and sellers respond to a price change in", options: ["the same direction", "opposite directions", "no direction", "random directions"], correctIndex: 1, explanation: "Their opposite responses allow one matching price." },
        { prompt: "The plans of consumers and producers agree only where", options: ["price is highest", "quantity demanded equals quantity supplied", "supply is zero", "demand is zero"], correctIndex: 1, explanation: "That is the matching (equilibrium) point." },
        { prompt: "The price in a market economy is set by", options: ["demand alone", "supply alone", "both demand and supply interacting", "the seller only"], correctIndex: 2, explanation: "Both sides together determine price." },
        { prompt: "Above the matching price, sellers want to sell", options: ["less than buyers want", "more than buyers want to buy", "exactly what buyers want", "nothing"], correctIndex: 1, explanation: "Excess supply exists above the matching price." },
        { prompt: "Below the matching price, buyers want to buy", options: ["less than sellers offer", "more than sellers want to sell", "exactly what sellers offer", "nothing"], correctIndex: 1, explanation: "Excess demand exists below the matching price." },
        { prompt: "The interaction of demand and supply is the heart of a", options: ["command economy", "market economy", "traditional economy", "closed economy"], correctIndex: 1, explanation: "Prices emerge from the two sides meeting in a market." },
        { prompt: "When plans do not match, the resulting gap", options: ["stays forever", "creates pressure that moves price toward the matching point", "removes the market", "raises taxes"], correctIndex: 1, explanation: "The mismatch pushes price toward equilibrium." },
        { prompt: "Which alone can determine a market price?", options: ["Demand only", "Supply only", "Neither alone; both together", "The government only"], correctIndex: 2, explanation: "Price comes from their interaction." },
        { prompt: "At a high price, the plan gap is that", options: ["buyers exceed sellers", "sellers exceed buyers", "there is no gap", "both plans vanish"], correctIndex: 1, explanation: "Sellers' plans exceed buyers' plans at high prices." },
        { prompt: "The price mechanism works because price signals reach", options: ["only buyers", "only sellers", "both buyers and sellers at once", "the government"], correctIndex: 2, explanation: "Price signals both sides simultaneously." },
        { prompt: "If price is too low, the pressure on it is to", options: ["fall further", "rise", "stay", "disappear"], correctIndex: 1, explanation: "Excess demand pushes a too-low price up." },
        { prompt: "If price is too high, the pressure on it is to", options: ["rise further", "fall", "stay", "double"], correctIndex: 1, explanation: "Excess supply pushes a too-high price down." },
        { prompt: "The demand and supply relationship is best called", options: ["a one-sided decision", "an interaction of two opposing plans", "a government rule", "a fixed rate"], correctIndex: 1, explanation: "It is the interaction of buyers' and sellers' opposing plans." },
        { prompt: "No single person decides the market price because", options: ["prices are illegal", "it emerges from many buyers and sellers interacting", "only firms matter", "only buyers matter"], correctIndex: 1, explanation: "Price emerges from the market interaction." },
        { prompt: "The one price at which both plans agree is called the", options: ["ceiling price", "floor price", "equilibrium price", "tax price"], correctIndex: 2, explanation: "That matching price is the equilibrium." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain how price links the plans of buyers and sellers in a market.", answerKey: "Price is a signal reaching both sides at once: a high price discourages buyers (Qd falls) but encourages sellers (Qs rises); a low price does the reverse. Because the two respond oppositely, price coordinates their plans, and where Qd equals Qs their plans agree. Award marks for price as a two-sided signal, the opposite responses, and the matching point.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Why can neither demand nor supply on its own determine the market price?", answerKey: "Demand shows only what buyers will do at each price and supply only what sellers will do; a price is set only where the two plans meet. Both curves together fix the price and quantity; alone, each gives a whole range of prices with no single outcome. Award marks for each side being incomplete and for needing their interaction.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "At a price above the level where plans match", options: ["buyers want more than sellers offer", "sellers want to sell more than buyers want to buy", "plans agree", "the market closes"], correctIndex: 1, answerKey: "Above the matching price there is excess supply — sellers want to sell more than buyers want. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Describe the pressure on price when buyers' plans exceed sellers' plans.", answerKey: "When quantity demanded exceeds quantity supplied (a low price), more is wanted than offered; competition among buyers pushes the price up toward the matching point where plans agree. Award marks for identifying excess demand and the upward pressure.", marks: 6 },
        { type: "ESSAY", prompt: "'A market price is not chosen by anyone; it emerges from the interaction of demand and supply.' Explain and discuss this statement.", answerKey: "Award marks for: demand as buyers' plans and supply as sellers' plans, 6; price as a signal reaching both sides, 6; the opposite responses of the two sides to price, 6; the matching price where plans agree, and the pressures above and below it, 8; conclusion that no single person sets the price, 4. A script that treats price as set by one side should not exceed 15.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 3.1 Demand, Supply, and Equilibrium in Markets for Goods and Services (https://openstax.org/books/principles-economics-3e/pages/3-1-demand-supply-and-equilibrium-in-markets-for-goods-and-services)
    {
      slug: "market-equilibrium-shortages-and-surpluses",
      title: "Market Equilibrium, Shortages and Surpluses",
      objective:
        "By the end of the topic, learners should be able to find the equilibrium (market-clearing) price and quantity from a schedule or graph, and explain how shortages and surpluses arise and are removed.",
      estimatedMinutes: 140,
      notes: `## Equilibrium

**Equilibrium** — the point where the supply and demand curves cross (point E on a graph).
**Equilibrium price** — the only price where the plans of consumers and producers agree: **quantity demanded equals quantity supplied**. Also called the **market-clearing price**, because at it the market "clears" — everything offered is bought.
**Equilibrium quantity** — the quantity bought and sold at the equilibrium price.

\`\`\`svg Equilibrium at the crossing of demand and supply
<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Supply and demand curves crossing at equilibrium point E">
  <line x1="45" y1="15" x2="45" y2="185" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="185" x2="285" y2="185" stroke="#555" stroke-width="1.5"/>
  <text x="10" y="20" font-size="11">Price</text>
  <text x="235" y="205" font-size="11">Quantity</text>
  <line x1="60" y1="35" x2="270" y2="170" stroke="#c0392b" stroke-width="2"/>
  <text x="250" y="168" font-size="11" fill="#c0392b">D</text>
  <line x1="60" y1="170" x2="270" y2="35" stroke="#1f6feb" stroke-width="2"/>
  <text x="250" y="48" font-size="11" fill="#1f6feb">S</text>
  <circle cx="165" cy="102" r="4" fill="#111"/>
  <text x="172" y="99" font-size="11">E</text>
  <line x1="45" y1="102" x2="165" y2="102" stroke="#999" stroke-dasharray="3 3"/>
  <line x1="165" y1="102" x2="165" y2="185" stroke="#999" stroke-dasharray="3 3"/>
  <text x="12" y="106" font-size="10">Pe</text>
  <text x="160" y="198" font-size="10">Qe</text>
</svg>
\`\`\`

## Finding equilibrium from a schedule

In the petrol schedule, the two quantities are equal at **1.40 dollars**, where quantity demanded = quantity supplied = **600** million gallons.
- Equilibrium price = **1.40 dollars**; equilibrium quantity = **600** million gallons.

| Price | Qd | Qs | Situation |
| --- | --- | --- | --- |
| 1.00 | 800 | 500 | Shortage of 300 (price too low) |
| 1.40 | 600 | 600 | Equilibrium (market clears) |
| 2.00 | 460 | 700 | Surplus of 240 (price too high) |

## Surplus (excess supply)

**Surplus** — when the price is **above** equilibrium, quantity supplied exceeds quantity demanded; goods pile up unsold.
- The unsold stock pressures sellers to **cut the price** back toward equilibrium.

## Shortage (excess demand)

**Shortage** — when the price is **below** equilibrium, quantity demanded exceeds quantity supplied; buyers compete for too few goods.
- The competition pressures the price **up** toward equilibrium.

## How the market clears

- Above equilibrium, a surplus makes price fall.
- Below equilibrium, a shortage makes price rise.
- At equilibrium there is no shortage or surplus, so price is steady. The market is **self-correcting**.

## Common errors

- **Confusing surplus with shortage.** Surplus = too much (price too high); shortage = too little (price too low).
- **Thinking equilibrium is the highest or lowest price.** It is the price where Qd equals Qs, usually in the middle of the schedule.
- **Assuming a shortage means the good ran out everywhere.** It means quantity demanded exceeds quantity supplied at that price.`,
      workedExample: `**Question:** Using the petrol schedule (Qd: 800, 700, 600, 550, 500, 460, 420; Qs: 500, 550, 600, 640, 680, 700, 720 at prices 1.00 to 2.20), find the equilibrium and describe the market at 1.00 and at 2.00 dollars.

**Solution**

*Step 1 — find where Qd = Qs.* Scanning the schedule, the quantities are equal at **1.40 dollars**, where both are **600** million gallons.
- Equilibrium price = 1.40 dollars; equilibrium quantity = 600 million gallons; this is the market-clearing price.

*Step 2 — the market at 1.00 dollar.* Qd = 800, Qs = 500. Quantity demanded exceeds quantity supplied by **300** — a **shortage**. Buyers compete, so the price is pushed **up** toward 1.40.

*Step 3 — the market at 2.00 dollars.* Qd = 460, Qs = 700. Quantity supplied exceeds quantity demanded by **240** — a **surplus**. Unsold petrol builds up, so sellers cut the price **down** toward 1.40.

**Answer:** Equilibrium is 1.40 dollars and 600 million gallons; at 1.00 there is a shortage of 300 (price rises); at 2.00 there is a surplus of 240 (price falls). The market self-corrects to equilibrium.`,
      quiz: [
        { prompt: "Equilibrium price is where", options: ["price is highest", "quantity demanded equals quantity supplied", "supply is zero", "demand is zero"], correctIndex: 1, explanation: "At equilibrium Qd = Qs." },
        { prompt: "The equilibrium price is also called the", options: ["ceiling price", "market-clearing price", "floor price", "tax price"], correctIndex: 1, explanation: "The market clears at this price." },
        { prompt: "In the petrol schedule, equilibrium price is", options: ["1.00", "1.40", "1.80", "2.20"], correctIndex: 1, explanation: "Qd = Qs = 600 at 1.40 dollars." },
        { prompt: "A surplus occurs when price is", options: ["at equilibrium", "above equilibrium", "below equilibrium", "zero"], correctIndex: 1, explanation: "Above equilibrium, Qs exceeds Qd." },
        { prompt: "A shortage occurs when price is", options: ["above equilibrium", "below equilibrium", "at equilibrium", "very high"], correctIndex: 1, explanation: "Below equilibrium, Qd exceeds Qs." },
        { prompt: "A surplus means quantity supplied is", options: ["less than quantity demanded", "greater than quantity demanded", "equal to quantity demanded", "zero"], correctIndex: 1, explanation: "Surplus = excess supply." },
        { prompt: "A shortage means quantity demanded is", options: ["less than quantity supplied", "greater than quantity supplied", "equal to quantity supplied", "zero"], correctIndex: 1, explanation: "Shortage = excess demand." },
        { prompt: "When there is a surplus, price tends to", options: ["rise", "fall", "stay the same", "double"], correctIndex: 1, explanation: "Unsold stock pushes price down." },
        { prompt: "When there is a shortage, price tends to", options: ["fall", "rise", "stay the same", "vanish"], correctIndex: 1, explanation: "Competing buyers push price up." },
        { prompt: "At 1.00 dollar in the schedule (Qd 800, Qs 500) there is a", options: ["surplus of 300", "shortage of 300", "equilibrium", "surplus of 500"], correctIndex: 1, explanation: "Qd exceeds Qs by 300 — a shortage." },
        { prompt: "At 2.00 dollars (Qd 460, Qs 700) there is a", options: ["shortage of 240", "surplus of 240", "equilibrium", "shortage of 700"], correctIndex: 1, explanation: "Qs exceeds Qd by 240 — a surplus." },
        { prompt: "Equilibrium quantity is the quantity", options: ["supplied only", "demanded only", "bought and sold at the equilibrium price", "left unsold"], correctIndex: 2, explanation: "It is the traded quantity at equilibrium." },
        { prompt: "On a graph, equilibrium is where", options: ["the curves are parallel", "the demand and supply curves cross", "the axes meet", "supply is vertical"], correctIndex: 1, explanation: "Equilibrium is the crossing point E." },
        { prompt: "A self-correcting market means", options: ["prices never change", "shortages and surpluses push price back to equilibrium", "the government sets price", "supply is fixed"], correctIndex: 1, explanation: "Market forces restore equilibrium." },
        { prompt: "Which best describes a shortage?", options: ["Too much offered at a high price", "Too little offered at a low price relative to demand", "Equal plans", "No buyers"], correctIndex: 1, explanation: "A shortage is excess demand at a below-equilibrium price." },
        { prompt: "At equilibrium there is", options: ["a surplus", "a shortage", "neither surplus nor shortage", "no trade"], correctIndex: 2, explanation: "Plans match exactly; no excess either way." },
        { prompt: "The equilibrium price is usually", options: ["the highest in the schedule", "the lowest in the schedule", "where Qd equals Qs, often in the middle", "zero"], correctIndex: 2, explanation: "It is where the two quantities are equal." },
        { prompt: "Unsold goods piling up is a sign of a", options: ["shortage", "surplus", "equilibrium", "price rise"], correctIndex: 1, explanation: "A surplus leaves goods unsold." },
        { prompt: "Buyers queueing and competing for scarce goods is a sign of a", options: ["surplus", "shortage", "equilibrium", "price cut"], correctIndex: 1, explanation: "A shortage makes buyers compete." },
        { prompt: "If price is set below equilibrium and left there, the result is a persistent", options: ["surplus", "shortage", "equilibrium", "profit"], correctIndex: 1, explanation: "A below-equilibrium price causes a lasting shortage." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define equilibrium price and equilibrium quantity, and explain why the equilibrium price is called the market-clearing price.", answerKey: "Equilibrium price is the price where quantity demanded equals quantity supplied; equilibrium quantity is the amount traded at that price. It is the market-clearing price because at it everything offered for sale is bought — the market clears with no surplus or shortage. Award 3 per definition, 4 for the clearing explanation.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Using the petrol schedule, find the equilibrium and calculate the shortage at 1.00 dollar.", answerKey: "Equilibrium is at 1.40 dollars where Qd = Qs = 600 million gallons. At 1.00 dollar, Qd = 800 and Qs = 500, so there is a shortage of 800 minus 500 = 300 million gallons. Award 4 for the equilibrium, 4 for the correct shortage.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A price set above equilibrium produces a", options: ["shortage", "surplus", "market-clearing price", "new equilibrium"], correctIndex: 1, answerKey: "Above equilibrium, quantity supplied exceeds quantity demanded — a surplus. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how a surplus is removed by market forces.", answerKey: "A surplus (price above equilibrium) leaves quantity supplied greater than quantity demanded, so unsold goods build up. Sellers cut the price to clear stock; as price falls, quantity demanded rises and quantity supplied falls until Qd = Qs at equilibrium. Award marks for excess supply, the price cut, and the return to equilibrium.", marks: 6 },
        { type: "ESSAY", prompt: "Explain, with a schedule or diagram, how equilibrium is reached in a market and how shortages and surpluses are automatically corrected.", answerKey: "Award marks for: definition of equilibrium where Qd = Qs (market-clearing), 6; identifying equilibrium from a schedule or graph, 6; surplus above equilibrium pushing price down, 6; shortage below equilibrium pushing price up, 6; the self-correcting conclusion, 3; use of figures or a labelled diagram, 3. A script without a worked example or diagram should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 3.2 Shifts in Demand and Supply for Goods and Services (https://openstax.org/books/principles-economics-3e/pages/3-2-shifts-in-demand-and-supply-for-goods-and-services)
    {
      slug: "movements-and-shifts-in-demand-and-supply",
      title: "Movements Along and Shifts of Demand and Supply Curves",
      objective:
        "By the end of the topic, learners should be able to distinguish a movement along a curve (caused by price) from a shift of the whole curve (caused by other factors), and list the factors that shift demand and supply.",
      estimatedMinutes: 130,
      notes: `## Two different changes

**Movement along a curve** — caused **only by a change in the good's own price**. It is a *change in quantity demanded* (or quantity supplied) — you slide up or down the *same* curve.

**Shift of the whole curve** — caused by a change in something **other than the good's own price**. It is a *change in demand* (or supply) — the whole curve moves left or right.

Key rule: a change in the good's **own price** moves you *along* the curve; a change in any **other factor** *shifts* the curve.

## Factors that shift the demand curve

1. **Income** — for a **normal good**, higher income raises demand (curve shifts right); lower income lowers it.
2. **Population** — a larger or differently composed population changes demand.
3. **Tastes and preferences** — a change in taste changes the quantity demanded at every price.
4. **Prices of related goods** — a rise in the price of a **substitute** raises demand for this good; a rise in the price of a **complement** lowers it.
5. **Expectations** — expecting a future price rise can raise demand now.

## Factors that shift the supply curve

1. **Input (production) costs** — lower input costs mean firms supply more (shift right); higher costs mean less (shift left).
2. **Technology** — a better technology lowers cost and shifts supply right.
3. **Natural conditions** — good weather can raise agricultural supply; bad weather lowers it.
4. **Government policy** — **taxes** and **regulations** raise costs (supply left); **subsidies** lower costs (supply right).
5. **Number of producers** — more firms shift supply right.

## Shift direction

- **Rightward shift** = an increase (more demanded or supplied at every price).
- **Leftward shift** = a decrease (less at every price).

## Common errors

- **Calling a price-caused change a "shift".** A change in the good's own price is a *movement along* the curve, not a shift.
- **Confusing substitutes and complements when shifting demand.** A dearer substitute raises this good's demand; a dearer complement lowers it.
- **Forgetting that a subsidy shifts supply right, a tax shifts it left.**`,
      workedExample: `**Question:** For the market for rice, state whether each event causes a movement along or a shift of a curve, and in which direction: (a) the price of rice falls; (b) household incomes rise (rice is a normal good); (c) the price of cassava, a substitute, rises; (d) a new milling technology lowers production cost.

**Solution**

(a) **Price of rice falls** — this is the good's **own price** changing, so it is a **movement along the demand curve** (quantity demanded rises) and along the supply curve — not a shift.

(b) **Incomes rise (normal good)** — income is a factor other than price, so the **demand curve shifts right** (more demanded at every price).

(c) **Price of a substitute (cassava) rises** — buyers switch to rice, so the **demand curve for rice shifts right**.

(d) **Better milling technology** — lower cost, a supply factor, so the **supply curve shifts right** (more supplied at every price).

**Answer:** (a) movement along the curve; (b) demand shifts right; (c) demand shifts right; (d) supply shifts right. Only the good's own price causes a movement along; all other factors shift a curve.`,
      quiz: [
        { prompt: "A movement along a demand curve is caused by a change in", options: ["income", "the good's own price", "tastes", "population"], correctIndex: 1, explanation: "Only the good's own price moves you along the curve." },
        { prompt: "A shift of the demand curve is caused by a change in", options: ["the good's own price", "a factor other than price", "quantity demanded", "the axis"], correctIndex: 1, explanation: "Non-price factors shift the whole curve." },
        { prompt: "A change in the good's own price is a change in", options: ["demand", "quantity demanded", "supply", "income"], correctIndex: 1, explanation: "It is a change in quantity demanded (movement along)." },
        { prompt: "A rightward shift of demand means", options: ["less demanded at every price", "more demanded at every price", "price rises only", "no change"], correctIndex: 1, explanation: "Rightward = increase in demand." },
        { prompt: "For a normal good, higher income shifts demand", options: ["left", "right", "not at all", "downward"], correctIndex: 1, explanation: "More income raises demand for a normal good." },
        { prompt: "A rise in the price of a substitute shifts this good's demand", options: ["left", "right", "vertically", "not at all"], correctIndex: 1, explanation: "Buyers switch to this good, raising its demand." },
        { prompt: "A rise in the price of a complement shifts this good's demand", options: ["right", "left", "up", "not at all"], correctIndex: 1, explanation: "A dearer complement lowers demand for this good." },
        { prompt: "Lower input costs shift the supply curve", options: ["left", "right", "downward only", "not at all"], correctIndex: 1, explanation: "Cheaper inputs raise supply (rightward shift)." },
        { prompt: "A new cost-saving technology shifts supply", options: ["left", "right", "vertically", "not at all"], correctIndex: 1, explanation: "Lower cost increases supply." },
        { prompt: "A tax on producers shifts supply", options: ["right", "left", "up the demand curve", "not at all"], correctIndex: 1, explanation: "A tax raises cost and reduces supply (leftward)." },
        { prompt: "A subsidy to producers shifts supply", options: ["left", "right", "down demand", "not at all"], correctIndex: 1, explanation: "A subsidy lowers cost and raises supply (rightward)." },
        { prompt: "Good weather for a crop shifts its supply", options: ["left", "right", "up", "not at all"], correctIndex: 1, explanation: "Better harvests increase supply." },
        { prompt: "More firms entering a market shift supply", options: ["left", "right", "vertically", "not at all"], correctIndex: 1, explanation: "More producers raise supply." },
        { prompt: "A change in tastes toward a good shifts its demand", options: ["left", "right", "not at all", "down the supply curve"], correctIndex: 1, explanation: "Stronger taste raises demand at every price." },
        { prompt: "Which causes a movement along, NOT a shift?", options: ["A change in income", "A change in the good's own price", "A change in technology", "A change in taste"], correctIndex: 1, explanation: "Own price causes a movement along the curve." },
        { prompt: "A leftward shift of supply means", options: ["more supplied at every price", "less supplied at every price", "price falls only", "no change"], correctIndex: 1, explanation: "Leftward = decrease in supply." },
        { prompt: "Expecting a future price rise can shift current demand", options: ["left", "right", "not at all", "vertically"], correctIndex: 1, explanation: "Buyers buy now, raising current demand." },
        { prompt: "A dearer complement (e.g. petrol) affects the demand for cars by shifting it", options: ["right", "left", "up", "not at all"], correctIndex: 1, explanation: "A costlier complement lowers demand for the good." },
        { prompt: "Which is a supply-shifting factor?", options: ["Consumer income", "Consumer tastes", "Input costs and technology", "Population"], correctIndex: 2, explanation: "Costs and technology shift supply; the others shift demand." },
        { prompt: "The key test for a shift versus a movement is whether the change is in", options: ["the good's own price (movement) or another factor (shift)", "the axis labels", "the currency", "the graph size"], correctIndex: 0, explanation: "Own price = movement; other factors = shift." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish a movement along a demand curve from a shift of the demand curve.", answerKey: "A movement along the curve is caused only by a change in the good's own price and is a change in quantity demanded (sliding along the same curve). A shift of the curve is caused by a change in a factor other than price (income, tastes, related-good prices, population, expectations) and is a change in demand (the whole curve moves). Award 4 per correctly explained concept, 2 for the own-price versus other-factor rule.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "List four factors that shift the supply curve and state the direction of each.", answerKey: "Any four: lower input costs, right; better technology, right; good weather, right; more producers, right; taxes/regulations, left; subsidies, right; higher input costs, left. Award 2 per factor with correct direction.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A fall in the good's own price causes", options: ["a shift of the demand curve", "a movement along the demand curve", "a leftward supply shift", "no change"], correctIndex: 1, answerKey: "A change in the good's own price is a movement along the curve. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how a rise in the price of a substitute affects the demand for a good.", answerKey: "When a substitute becomes dearer, buyers switch away from it toward this good, so demand for this good rises — the demand curve shifts right (at every price more is demanded). Award marks for the substitution and the correct rightward shift.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the factors that shift the demand and supply curves, clearly distinguishing these shifts from movements caused by price.", answerKey: "Award marks for: the movement-versus-shift distinction with the own-price rule, 8; demand shifters (income, population, tastes, related-good prices, expectations) with directions, 8; supply shifters (input costs, technology, natural conditions, policy/taxes/subsidies, number of producers) with directions, 8; worked or illustrative examples, 4; terminology, 2. A script that confuses shifts with movements should not exceed 15.", marks: 30 },
      ],
    },
    // source: LibreTexts Social Sci — Giffen Goods, income/substitution effects and Veblen goods (https://socialsci.libretexts.org/Bookshelves/Economics/Intermediate_Microeconomics_with_Excel_(Barreto)/04:_Compartive_Statics/4.05:_Giffen_Goods) and OpenStax — Principles of Economics 3e, 3.4 Price Ceilings and Price Floors (https://openstax.org/books/principles-economics-3e/pages/3-4-price-ceilings-and-price-floors)
    {
      slug: "exceptional-demand-and-price-controls",
      title: "Exceptional Demand Curves and Price Controls",
      objective:
        "By the end of the topic, learners should be able to explain the exceptional (upward-sloping) demand curve using Giffen and Veblen goods, and describe how price ceilings and price floors affect a market.",
      estimatedMinutes: 130,
      notes: `## The exceptional demand curve

- Normally the demand curve slopes **downward** (law of demand). In a few rare cases it slopes **upward** — an **exceptional demand curve** — where a higher price goes with a higher quantity demanded. Two textbook cases explain this.

**Giffen goods**
- A **Giffen good** has an **upward-sloping** demand curve.
- It is an **inferior good** (demand falls as income rises) that takes up a **large share** of the buyer's income.
- When its price falls, buyers feel better off and switch to preferred goods, so they buy **less** of it; when its price rises they can afford little else and buy **more**. Here the income effect outweighs the substitution effect.
- Giffen goods are **extremely rare** — economists debate whether they truly exist outside textbooks.

**Veblen goods**
- A **Veblen good** is a luxury or status item that becomes **more desirable the higher its price**.
- Part of its value is **exclusivity**; lowering the price reduces its status appeal, so demand falls. Examples: designer handbags, high-end cars.

## Price controls

**Price control** — a law that regulates the price of a good or service. The two types are the price ceiling and the price floor.

**Price ceiling** — a legal **maximum** price, set to keep a necessity **affordable**.
- If set **below** equilibrium, quantity demanded exceeds quantity supplied, so it causes a **shortage**.
- Example: **rent control** limits how much rent can rise; it can lead to fewer available units and lower housing quality.

**Price floor** — a legal **minimum** price.
- If set **above** equilibrium, quantity supplied exceeds quantity demanded, so it causes a **surplus**.
- Example: **agricultural price supports** guarantee farmers a minimum price and can create surpluses of farm produce.

| Control | Set relative to equilibrium | Result |
| --- | --- | --- |
| Price ceiling (maximum) | Below equilibrium | Shortage (excess demand) |
| Price floor (minimum) | Above equilibrium | Surplus (excess supply) |

## Common errors

- **Thinking a price ceiling raises the price.** A ceiling is a *maximum*; a binding one is below equilibrium and causes a shortage.
- **Thinking a price floor lowers the price.** A floor is a *minimum*; a binding one is above equilibrium and causes a surplus.
- **Believing exceptional demand is common.** Giffen goods are extremely rare; most goods obey the ordinary law of demand.`,
      workedExample: `**Question:** A government fixes the maximum rent on flats at 100 dollars, while the equilibrium rent is 150 dollars. At 100 dollars, 900 flats are demanded and 600 are supplied. (a) What kind of price control is this? (b) What is the result in the market? (c) How would a price floor differ?

**Solution**

(a) A legal **maximum** price is a **price ceiling**, set to keep rents affordable.

(b) The ceiling (100) is **below** equilibrium (150). At 100, quantity demanded (900) exceeds quantity supplied (600), so there is a **shortage** of 900 minus 600 = **300 flats**. More people want flats than there are flats available, and quality may fall as landlords cut maintenance.

(c) A **price floor** is a legal **minimum** price. Set **above** equilibrium, it would make quantity supplied exceed quantity demanded, creating a **surplus** instead of a shortage — the opposite outcome.

**Answer:** It is a price ceiling; being below equilibrium it causes a shortage of 300 flats; a price floor set above equilibrium would instead cause a surplus.`,
      quiz: [
        { prompt: "An exceptional demand curve slopes", options: ["downward", "upward", "horizontally", "vertically"], correctIndex: 1, explanation: "Exceptionally, higher price goes with higher quantity demanded." },
        { prompt: "A Giffen good has a demand curve that slopes", options: ["downward", "upward", "flat", "in a circle"], correctIndex: 1, explanation: "Giffen goods slope upward — an exception to the law of demand." },
        { prompt: "A Giffen good is a type of", options: ["luxury good", "inferior good", "normal good", "public good"], correctIndex: 1, explanation: "It is an inferior good taking a large share of income." },
        { prompt: "A Veblen good becomes more desirable when its price", options: ["falls", "rises", "is fixed", "is zero"], correctIndex: 1, explanation: "Status value rises with price." },
        { prompt: "Part of a Veblen good's value comes from its", options: ["low cost", "exclusivity", "abundance", "necessity"], correctIndex: 1, explanation: "Exclusivity drives its status appeal." },
        { prompt: "A price ceiling is a legal", options: ["minimum price", "maximum price", "tax", "subsidy"], correctIndex: 1, explanation: "A ceiling is a maximum price." },
        { prompt: "A price floor is a legal", options: ["maximum price", "minimum price", "average price", "tax"], correctIndex: 1, explanation: "A floor is a minimum price." },
        { prompt: "A binding price ceiling (below equilibrium) causes a", options: ["surplus", "shortage", "new equilibrium", "price rise"], correctIndex: 1, explanation: "Qd exceeds Qs — a shortage." },
        { prompt: "A binding price floor (above equilibrium) causes a", options: ["shortage", "surplus", "equilibrium", "price fall"], correctIndex: 1, explanation: "Qs exceeds Qd — a surplus." },
        { prompt: "Rent control is an example of a", options: ["price floor", "price ceiling", "subsidy", "tax"], correctIndex: 1, explanation: "It caps the maximum rent — a ceiling." },
        { prompt: "Agricultural price supports are an example of a", options: ["price ceiling", "price floor", "tax", "quota"], correctIndex: 1, explanation: "They set a minimum price — a floor." },
        { prompt: "Giffen goods are", options: ["very common", "extremely rare", "always luxuries", "always cheap"], correctIndex: 1, explanation: "They are extremely rare and debated." },
        { prompt: "A price control is", options: ["a voluntary price", "a law regulating price", "a market price", "an equilibrium"], correctIndex: 1, explanation: "It is a legal regulation of price." },
        { prompt: "A ceiling is set to keep a necessity", options: ["expensive", "affordable", "scarce", "exported"], correctIndex: 1, explanation: "Ceilings aim to keep necessities affordable." },
        { prompt: "When the price of a Giffen good falls, buyers tend to buy", options: ["more", "less", "the same", "none"], correctIndex: 1, explanation: "The income effect leads them to buy less." },
        { prompt: "Which good is more desirable at a higher price?", options: ["A Giffen good", "A Veblen good", "A normal good", "An inferior good"], correctIndex: 1, explanation: "Veblen goods gain appeal with price." },
        { prompt: "Most goods obey the", options: ["exceptional demand curve", "ordinary law of demand", "price floor", "law of supply only"], correctIndex: 1, explanation: "Exceptions are rare; most goods obey the ordinary law of demand." },
        { prompt: "A price ceiling below equilibrium is called", options: ["non-binding", "binding", "a floor", "a subsidy"], correctIndex: 1, explanation: "Below equilibrium it bites, causing a shortage." },
        { prompt: "Lowering the price of a Veblen good tends to", options: ["raise its demand", "lower its demand", "have no effect", "make it Giffen"], correctIndex: 1, explanation: "A lower price cuts its status, lowering demand." },
        { prompt: "Which outcome pairs correctly with its control?", options: ["Price ceiling then surplus", "Price floor then shortage", "Price ceiling then shortage", "Price floor then equilibrium"], correctIndex: 2, explanation: "A binding ceiling causes a shortage; a binding floor a surplus." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Explain what an exceptional demand curve is and describe Giffen and Veblen goods.", answerKey: "An exceptional demand curve slopes upward — a higher price goes with a higher quantity demanded, contrary to the law of demand. A Giffen good is an inferior good taking a large share of income, whose demand rises when its price rises (income effect dominates); such goods are extremely rare. A Veblen good is a luxury/status good that becomes more desirable at a higher price because of exclusivity. Award 3 for the curve, 4 for Giffen, 3 for Veblen.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Define a price ceiling and a price floor and state the result of each when it is binding.", answerKey: "A price ceiling is a legal maximum price; when set below equilibrium it causes a shortage (Qd exceeds Qs). A price floor is a legal minimum price; when set above equilibrium it causes a surplus (Qs exceeds Qd). Award 2 per definition and 2 per correct result.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Rent control that holds rent below the equilibrium level tends to cause", options: ["a surplus of housing", "a shortage of housing", "no effect", "higher supply of housing"], correctIndex: 1, answerKey: "A binding price ceiling causes a shortage — quantity demanded exceeds quantity supplied. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Give one example each of a price ceiling and a price floor from the real world, and state who it is meant to help.", answerKey: "Price ceiling: rent control — meant to help tenants/consumers keep housing affordable. Price floor: agricultural price supports (or a minimum wage) — meant to help producers/farmers (or workers) by guaranteeing a minimum price. Award 3 per example with the group it helps.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss price controls in a market, explaining how price ceilings and price floors create shortages and surpluses, and evaluate their effects using real examples.", answerKey: "Award marks for: definition of price control, ceiling and floor, 6; a binding ceiling below equilibrium causing a shortage, with rent control example, 8; a binding floor above equilibrium causing a surplus, with agricultural supports example, 8; evaluation of side effects (lower quality/maintenance under ceilings; costly surpluses under floors), 5; conclusion and terminology, 3. A script that reverses the effects should not exceed 12.", marks: 30 },
      ],
    },
  ],
};
