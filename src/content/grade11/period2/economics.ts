import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 11,
// Semester One, Period II: Market Structures. CONTENTS: (1) Definitions &
// features of market types — perfect market & imperfect market, monopolistic
// market, oligopoly market; (2) Advantages & disadvantages of market types
// (perfect competition, monopoly, oligopoly); (3) Comparison and contrast of
// perfect competitive market and monopolistic market; (4) Graphic illustrations
// of perfect competitive market and monopoly. The concept of a market vs the
// market place (Objective 1) is folded into topic 1. Sourced from OpenStax
// Principles of Economics 3e (Chapters 8, 9, 10).
export const economicsG11P2: PeriodContent = {
  grade: 11,
  number: 2,
  title: "Market Structures",
  summary:
    "Period II of the MoE Grade 11 Economics syllabus. Learners explain what a market is, distinguish perfect competition from imperfect markets, and describe the features of monopoly, monopolistic competition and oligopoly. They weigh the advantages and disadvantages of each structure, compare perfect competition with monopolistic competition, and read the graphs that show how price and output are determined under perfect competition and monopoly.",
  topics: [
    // source: OpenStax — Principles of Economics 3e, 8.1 Perfect Competition and Why It Matters (https://openstax.org/books/principles-economics-3e/pages/8-1-perfect-competition-and-why-it-matters), 9.1 How Monopolies Form: Barriers to Entry (https://openstax.org/books/principles-economics-3e/pages/9-1-how-monopolies-form-barriers-to-entry), 10.1 Monopolistic Competition (https://openstax.org/books/principles-economics-3e/pages/10-1-monopolistic-competition) and 10.2 Oligopoly (https://openstax.org/books/principles-economics-3e/pages/10-2-oligopoly)
    {
      slug: "types-of-market-structures",
      title: "The Concept of a Market and Types of Market Structures",
      objective:
        "By the end of the topic, learners should be able to explain what a market is, distinguish perfect from imperfect markets, and state the features of perfect competition, monopoly, monopolistic competition and oligopoly.",
      estimatedMinutes: 140,
      notes: `## What a market is

**Market** — any arrangement that brings buyers and sellers together to trade a good or service and settle a price; it need not be a physical place.
**Market place** — the physical location (a building or square) where trade happens. A market can exist without a single market place (e.g. trade by phone or online).
**Market structure** — the features of a market, such as the number of firms, whether products are identical, and how easily firms can enter or leave.

## Perfect competition

**Perfect competition** exists when: (1) many firms produce **identical products**; (2) there are many buyers and many sellers; (3) buyers and sellers have **full information**; and (4) firms can **enter and leave freely** without restrictions.
- Each firm is a **price taker** — it is too small to affect the market price and must accept the prevailing equilibrium price; if it raised its price it would lose all its customers.
- Example: markets for farm crops such as corn are close to perfect competition.

## Imperfect markets

**Imperfect market** — any market that is not perfectly competitive: firms have some power over price because products differ, sellers are few, or entry is restricted. Monopoly, monopolistic competition and oligopoly are all imperfect markets.

## Monopoly

**Monopoly** — a market with a **single seller** of a product that has no close substitutes, protected by **barriers to entry**.
- **Barriers to entry** — legal, technological or market forces that prevent new competitors from entering (natural monopoly from large economies of scale, control of a key resource, legal barriers such as patents and licences).
- A monopolist is a **price maker/setter**: it faces the whole downward-sloping market demand curve, so to sell more it must lower the price.

## Monopolistic competition

**Monopolistic competition** — **many firms** selling **differentiated** (distinctive) products, with **free entry and exit**.
- **Product differentiation** through physical features, location, brand, service or advertising gives each firm a "mini-monopoly" over its own version, so it faces a **downward-sloping** but **highly elastic** demand curve.
- Free entry means profits are competed away in the long run. Examples: restaurants, clothing shops.

## Oligopoly

**Oligopoly** — a **few large firms** supply all or most of the market.
- Firms are **interdependent**: each one's price, output and advertising depends on rivals' choices.
- **Barriers to entry** (economies of scale, patents, brand recognition) keep the numbers small.
- Firms may **collude** (act together to cut output and keep prices high); a formal agreement is a **cartel** (illegal in many countries). The **prisoner's dilemma** shows why firms are tempted to break such agreements. Examples: airlines, car makers.

## Common errors

- **Equating a market with a physical place.** A market is any arrangement for trade, not only a market place.
- **Calling every large firm a monopoly.** A monopoly is the *only* seller; a few firms is oligopoly; many differentiated firms is monopolistic competition.
- **Thinking perfect competitors set their price.** They are price takers who accept the market price.`,
      workedExample: `**Question:** Classify each market and give one feature: (a) hundreds of farmers selling identical maize; (b) the only piped-water company in a town; (c) three firms supplying almost all the country's mobile-phone service; (d) many small restaurants each with its own menu.

**Solution**

(a) **Perfect competition.** Many sellers of an identical product; each farmer is a price taker.

(b) **Monopoly.** A single seller protected by barriers to entry (a natural monopoly in water supply); it is a price maker facing the whole market demand curve.

(c) **Oligopoly.** A few large interdependent firms; each firm's decisions depend on the others', and barriers to entry keep the number small.

(d) **Monopolistic competition.** Many firms selling differentiated products with free entry; each faces a downward-sloping but elastic demand curve.

**Answer:** (a) perfect competition, (b) monopoly, (c) oligopoly, (d) monopolistic competition.`,
      quiz: [
        { prompt: "A market is best defined as", options: ["only a physical building", "any arrangement bringing buyers and sellers together to trade", "a government office", "a single shop"], correctIndex: 1, explanation: "A market is any arrangement for trade, not only a place." },
        { prompt: "Under perfect competition, firms sell products that are", options: ["differentiated", "identical", "unique", "branded"], correctIndex: 1, explanation: "Perfect competition has many firms with identical products." },
        { prompt: "A perfectly competitive firm is a", options: ["price maker", "price taker", "monopolist", "cartel"], correctIndex: 1, explanation: "It is too small to affect price and must accept the market price." },
        { prompt: "Which is a condition of perfect competition?", options: ["Barriers to entry", "Free entry and exit", "A single seller", "Secret information"], correctIndex: 1, explanation: "Firms can enter and leave freely." },
        { prompt: "A monopoly has", options: ["many sellers", "a single seller", "a few sellers", "identical products from rivals"], correctIndex: 1, explanation: "A monopoly is one seller with no close substitutes." },
        { prompt: "Barriers to entry are forces that", options: ["attract new firms", "prevent new competitors from entering", "lower prices", "raise supply"], correctIndex: 1, explanation: "They block potential competitors, protecting a monopoly." },
        { prompt: "A monopolist is a", options: ["price taker", "price maker/setter", "small firm", "cartel member"], correctIndex: 1, explanation: "Facing the whole demand curve, it sets price." },
        { prompt: "Monopolistic competition has", options: ["one firm", "a few firms", "many firms with differentiated products", "identical products"], correctIndex: 2, explanation: "Many firms sell distinctive products." },
        { prompt: "Product differentiation gives a monopolistically competitive firm", options: ["a flat demand curve", "a downward-sloping but elastic demand curve", "no demand curve", "a vertical demand curve"], correctIndex: 1, explanation: "Differentiation makes demand downward-sloping but elastic." },
        { prompt: "An oligopoly is a market with", options: ["one firm", "a few large firms", "many small firms", "no firms"], correctIndex: 1, explanation: "A few large firms dominate an oligopoly." },
        { prompt: "Firms in an oligopoly are described as", options: ["independent", "interdependent", "identical", "price takers"], correctIndex: 1, explanation: "Each firm's decisions depend on its rivals' choices." },
        { prompt: "When firms secretly act together to keep prices high, it is called", options: ["competition", "collusion", "entry", "differentiation"], correctIndex: 1, explanation: "Collusion is joint action to reduce output and keep prices high." },
        { prompt: "A formal collusive agreement among firms is a", options: ["cartel", "monopoly", "market place", "substitute"], correctIndex: 0, explanation: "A cartel is a formal collusive agreement." },
        { prompt: "A natural monopoly arises when", options: ["products are identical", "economies of scale are large relative to market demand", "there are many firms", "information is perfect"], correctIndex: 1, explanation: "Large scale economies make one big firm cheapest." },
        { prompt: "A patent is an example of a", options: ["price taker", "legal barrier to entry", "substitute good", "differentiated product"], correctIndex: 1, explanation: "Patents legally block competitors, creating monopoly power." },
        { prompt: "Corn and other farm crops are given as an example of", options: ["monopoly", "oligopoly", "near-perfect competition", "a cartel"], correctIndex: 2, explanation: "Agricultural markets are close to perfect competition." },
        { prompt: "An imperfect market is any market that is", options: ["perfectly competitive", "not perfectly competitive", "illegal", "government-run"], correctIndex: 1, explanation: "Imperfect markets are all those that are not perfectly competitive." },
        { prompt: "The prisoner's dilemma helps explain why oligopolists", options: ["always cooperate", "are tempted to break collusive agreements", "have identical products", "are price takers"], correctIndex: 1, explanation: "Each firm gains by defecting, undermining collusion." },
        { prompt: "Restaurants and clothing shops are typical examples of", options: ["perfect competition", "monopoly", "monopolistic competition", "cartels"], correctIndex: 2, explanation: "Many firms with differentiated products — monopolistic competition." },
        { prompt: "A market can exist without a market place because", options: ["trade can occur by phone or online", "prices are illegal", "buyers do not matter", "sellers are banned"], correctIndex: 0, explanation: "A market is any arrangement for trade, physical or not." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Distinguish between a market and a market place, and define market structure.", answerKey: "A market is any arrangement that brings buyers and sellers together to trade and settle a price; it need not be physical. A market place is the physical location where trade happens. Market structure refers to the features of a market — number of firms, whether products are identical, and ease of entry and exit. Award 3 for market, 3 for market place, 4 for market structure.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State the four conditions of perfect competition.", answerKey: "(1) Many firms produce identical products; (2) many buyers and many sellers; (3) buyers and sellers have full information; (4) free entry and exit with no restrictions. Award 2 marks per condition.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A market with a few large interdependent firms and barriers to entry is", options: ["perfect competition", "monopoly", "oligopoly", "monopolistic competition"], correctIndex: 2, answerKey: "Few large interdependent firms with barriers to entry describes oligopoly. Option C.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a monopolist is a price maker while a perfectly competitive firm is a price taker.", answerKey: "A monopolist is the only seller and faces the whole downward-sloping market demand curve, so it can choose a price (to sell more it must lower price) — a price maker. A perfectly competitive firm is one of many selling an identical product; it is too small to affect price and must accept the market price — a price taker. Award marks for each firm's demand situation and the resulting price behaviour.", marks: 6 },
        { type: "ESSAY", prompt: "Describe the main types of market structure (perfect competition, monopoly, monopolistic competition and oligopoly) and their key features.", answerKey: "Award marks for: perfect competition — many firms, identical products, free entry, price takers, 7; monopoly — single seller, barriers to entry, price maker, 7; monopolistic competition — many firms, differentiated products, free entry, downward-sloping elastic demand, 8; oligopoly — few large interdependent firms, barriers to entry, collusion/cartels, 8. A script covering fewer than three structures loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 8.1 Perfect Competition and Why It Matters (https://openstax.org/books/principles-economics-3e/pages/8-1-perfect-competition-and-why-it-matters), 9.1 How Monopolies Form: Barriers to Entry (https://openstax.org/books/principles-economics-3e/pages/9-1-how-monopolies-form-barriers-to-entry), 10.1 Monopolistic Competition (https://openstax.org/books/principles-economics-3e/pages/10-1-monopolistic-competition) and 10.2 Oligopoly (https://openstax.org/books/principles-economics-3e/pages/10-2-oligopoly)
    {
      slug: "advantages-and-disadvantages-of-market-types",
      title: "Advantages and Disadvantages of Market Types",
      objective:
        "By the end of the topic, learners should be able to state and explain the advantages and disadvantages of perfect competition, monopoly and oligopoly.",
      estimatedMinutes: 120,
      notes: `## Perfect competition

**Advantages**
- Prices are driven to the lowest level consistent with covering costs, because firms are price takers and free entry competes away extra profit.
- Free entry and exit push the market toward **productive and allocative efficiency** in the long run.
- Consumers gain from low prices and cannot be exploited by any single seller.

**Disadvantages**
- Identical products mean **no variety or choice** for consumers.
- Firms are small and earn only normal profit in the long run, leaving **little money for research or innovation**.
- The model is an ideal that few real markets fully meet.

## Monopoly

**Advantages**
- Large scale can bring **economies of scale** (lower average cost), useful where a natural monopoly avoids wasteful duplication (e.g. water pipes).
- Protected profit can fund **research and development** and large investment.

**Disadvantages**
- A monopolist can restrict output and charge a **higher price** than a competitive market, earning **significant economic profit** at consumers' expense.
- Without competition there is less pressure to be efficient or to improve quality.
- Barriers to entry keep new firms out, so the gains are not competed away.

## Oligopoly

**Advantages**
- Large firms can achieve **economies of scale** and fund innovation and advertising.
- Non-price competition (branding, quality) can give consumers **variety**.

**Disadvantages**
- Firms may **collude** or form a **cartel** to cut output and keep prices high, harming consumers.
- **Interdependence** can lead to price rigidity or price wars.
- **Barriers to entry** limit new competition.

## Summary table

| Structure | Main advantage | Main disadvantage |
| --- | --- | --- |
| Perfect competition | Low prices, efficiency | No variety, little innovation |
| Monopoly | Economies of scale, funds R&D | High price, restricted output |
| Oligopoly | Scale and innovation, some variety | Collusion keeps prices high |

## Common errors

- **Assuming monopoly is always bad.** A natural monopoly can be cheaper than many small firms.
- **Assuming perfect competition is always best.** It offers no product variety and little innovation.
- **Confusing collusion with competition.** Colluding oligopolists reduce output to raise prices, unlike competitive firms.`,
      workedExample: `**Question:** A town's only electricity supplier wants to raise prices. Give one advantage and one disadvantage of leaving electricity supply as a monopoly.

**Solution**

*Step 1 — an advantage.* Electricity distribution has very large economies of scale: one network of cables is far cheaper than several duplicate networks. As a **natural monopoly**, a single supplier can produce at lower average cost, avoiding wasteful duplication.

*Step 2 — a disadvantage.* Because it faces no competitor and is protected by barriers to entry, the monopolist can **restrict output and charge a higher price**, earning economic profit at consumers' expense, with little pressure to be efficient.

*Step 3 — balance.* This is why such natural monopolies are often regulated: to keep the cost advantage while limiting the price abuse.

**Answer:** Advantage — economies of scale from a single network (natural monopoly); disadvantage — the monopolist can charge a higher price and restrict output, harming consumers.`,
      quiz: [
        { prompt: "A key advantage of perfect competition for consumers is", options: ["high prices", "low prices near cost", "no choice", "monopoly profit"], correctIndex: 1, explanation: "Competition and free entry drive prices down to cost." },
        { prompt: "A disadvantage of perfect competition is", options: ["high prices", "no product variety", "collusion", "barriers to entry"], correctIndex: 1, explanation: "Identical products mean no variety or choice." },
        { prompt: "Perfect competition tends toward efficiency because of", options: ["barriers to entry", "free entry and exit", "collusion", "a single seller"], correctIndex: 1, explanation: "Free entry and exit push firms to efficiency in the long run." },
        { prompt: "An advantage of a monopoly can be", options: ["economies of scale", "many sellers", "identical products", "zero profit"], correctIndex: 0, explanation: "Large scale can lower average cost." },
        { prompt: "A disadvantage of a monopoly is that it can", options: ["charge a high price and restrict output", "lower prices to cost", "guarantee variety", "compete away profit"], correctIndex: 0, explanation: "Without rivals it restricts output and raises price." },
        { prompt: "A natural monopoly is efficient where", options: ["many small firms are cheapest", "one large firm avoids wasteful duplication", "products are identical", "entry is free"], correctIndex: 1, explanation: "Large economies of scale favour a single supplier." },
        { prompt: "Monopoly profit is not competed away because of", options: ["free entry", "barriers to entry", "identical products", "price taking"], correctIndex: 1, explanation: "Barriers keep new firms out." },
        { prompt: "An advantage of oligopoly is", options: ["economies of scale and innovation", "guaranteed low prices", "zero profit", "no advertising"], correctIndex: 0, explanation: "Large firms can achieve scale and fund innovation." },
        { prompt: "A disadvantage of oligopoly is that firms may", options: ["compete prices to cost", "collude to keep prices high", "give products away", "leave the market"], correctIndex: 1, explanation: "Collusion or a cartel harms consumers." },
        { prompt: "Perfect competition offers little", options: ["low prices", "innovation and variety", "efficiency", "entry"], correctIndex: 1, explanation: "Small firms and identical products limit innovation and variety." },
        { prompt: "Protected monopoly profit can be used to fund", options: ["nothing", "research and development", "lower quality", "more competitors"], correctIndex: 1, explanation: "Monopolies can invest profit in R&D." },
        { prompt: "In an oligopoly, non-price competition such as branding gives consumers", options: ["identical goods", "variety", "no choice", "lower profits"], correctIndex: 1, explanation: "Branding and quality provide product variety." },
        { prompt: "A cartel is harmful because it", options: ["increases output", "cuts output and keeps prices high", "lowers prices", "removes barriers"], correctIndex: 1, explanation: "Cartels restrict output to raise prices." },
        { prompt: "Interdependence in an oligopoly can lead to", options: ["perfect information", "price rigidity or price wars", "free entry", "identical products"], correctIndex: 1, explanation: "Rivals' reactions can freeze prices or spark price wars." },
        { prompt: "Which structure is most associated with the lowest long-run prices?", options: ["Monopoly", "Oligopoly", "Perfect competition", "Cartel"], correctIndex: 2, explanation: "Perfect competition drives prices toward cost." },
        { prompt: "Which structure most restricts output to raise price?", options: ["Perfect competition", "Monopoly", "Free market", "None"], correctIndex: 1, explanation: "A monopoly can restrict output for higher price." },
        { prompt: "A reason monopolies are often regulated is to", options: ["remove their cost advantage", "keep the cost advantage while limiting price abuse", "ban all production", "force identical products"], correctIndex: 1, explanation: "Regulation aims to keep scale economies but curb high prices." },
        { prompt: "A disadvantage shared by monopoly and oligopoly is", options: ["free entry", "barriers to entry limiting competition", "zero profit", "no advertising"], correctIndex: 1, explanation: "Both have barriers that limit new competition." },
        { prompt: "Perfect competition is described as", options: ["the most common real market", "an ideal few markets fully meet", "always illegal", "a single seller"], correctIndex: 1, explanation: "It is a benchmark model that few real markets match." },
        { prompt: "The main gain to consumers from oligopoly is", options: ["guaranteed lowest price", "variety from non-price competition", "no choice", "cartels"], correctIndex: 1, explanation: "Branding and quality bring variety." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of perfect competition.", answerKey: "Advantages (any two): low prices near cost; efficiency from free entry and exit; consumers not exploited. Disadvantages (any two): no product variety; small firms earn only normal profit with little money for innovation; it is an ideal few markets meet. Award 2.5 marks each, up to four points.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Give two advantages and two disadvantages of a monopoly.", answerKey: "Advantages: economies of scale (natural monopoly avoids duplication); protected profit funds R&D and investment. Disadvantages: can restrict output and charge a high price; less pressure to be efficient; barriers to entry keep profit from being competed away. Award 2 marks each, up to four points.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Which is a disadvantage of oligopoly?", options: ["Economies of scale", "Collusion that keeps prices high", "Product variety", "Innovation"], correctIndex: 1, answerKey: "Collusion/cartels keep prices high at consumers' expense. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain one situation in which a monopoly may be better for society than many small firms.", answerKey: "Where economies of scale are very large relative to demand (a natural monopoly), such as water pipes or an electricity network, a single large firm produces at lower average cost than several duplicate firms would, avoiding wasteful duplication. Award marks for identifying natural monopoly and the cost/duplication argument.", marks: 6 },
        { type: "ESSAY", prompt: "Compare the advantages and disadvantages of perfect competition, monopoly and oligopoly, and reach a reasoned conclusion about which best serves consumers.", answerKey: "Award marks for: perfect competition advantages (low price, efficiency) and disadvantages (no variety, little innovation), 8; monopoly advantages (scale, R&D) and disadvantages (high price, restricted output), 8; oligopoly advantages (scale, variety) and disadvantages (collusion, barriers), 8; a reasoned conclusion weighing price, choice and innovation, 6. A one-sided script should not exceed 16.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 8.1 Perfect Competition and Why It Matters (https://openstax.org/books/principles-economics-3e/pages/8-1-perfect-competition-and-why-it-matters) and 10.1 Monopolistic Competition (https://openstax.org/books/principles-economics-3e/pages/10-1-monopolistic-competition)
    {
      slug: "perfect-versus-monopolistic-competition",
      title: "Comparing Perfect Competition and Monopolistic Competition",
      objective:
        "By the end of the topic, learners should be able to compare and contrast perfect competition and monopolistic competition in terms of products, demand curves, entry, pricing and efficiency.",
      estimatedMinutes: 100,
      notes: `## What they share

- **Many firms** compete in both markets.
- **Free entry and exit** means economic profit is competed away in the long run, so firms end up earning only normal profit.

## How they differ

**Products**
- Perfect competition: products are **identical** (homogeneous).
- Monopolistic competition: products are **differentiated** — distinct by physical features, location, brand, service or advertising.

**Demand curve facing the firm**
- Perfect competition: the firm's demand curve is **horizontal (perfectly elastic)** at the market price; it can sell any amount at that price.
- Monopolistic competition: the firm's demand curve is **downward-sloping** (it has some price-setting power) but **highly elastic** because close substitutes exist.

**Price behaviour**
- Perfect competition: the firm is a **price taker**.
- Monopolistic competition: the firm is a **price maker** to a small degree — it can raise price a little without losing all sales.

**Efficiency and variety**
- Perfect competition is **productively and allocatively efficient** in the long run but offers **no variety**.
- Monopolistic competition is **not fully efficient** (price exceeds marginal cost and firms have spare capacity) but provides **product variety and innovation** consumers value.

## Comparison table

| Feature | Perfect competition | Monopolistic competition |
| --- | --- | --- |
| Number of firms | Many | Many |
| Product | Identical | Differentiated |
| Firm's demand curve | Horizontal (perfectly elastic) | Downward-sloping, elastic |
| Price behaviour | Price taker | Slight price maker |
| Entry/exit | Free | Free |
| Long-run profit | Normal | Normal |
| Efficiency | Efficient | Not fully efficient |
| Variety | None | Product variety |

## Common errors

- **Thinking monopolistic competition has few firms.** It has *many* firms, like perfect competition; the difference is differentiated products.
- **Giving a perfect competitor a downward-sloping demand curve.** Its demand curve is horizontal.
- **Assuming differentiation means large long-run profit.** Free entry still competes profit away to normal levels.`,
      workedExample: `**Question:** Two markets each have many firms and free entry. In market A the product is identical; in market B each firm's product is branded and slightly different. Compare the demand curve each firm faces and its long-run profit.

**Solution**

*Step 1 — market A (perfect competition).* Identical products and many sellers make each firm a **price taker** facing a **horizontal (perfectly elastic)** demand curve at the market price.

*Step 2 — market B (monopolistic competition).* Differentiated products give each firm a small amount of price-setting power, so it faces a **downward-sloping but highly elastic** demand curve (close substitutes exist).

*Step 3 — long-run profit.* Both markets have **free entry**, so in the long run economic profit is competed away and firms in *both* markets earn only **normal profit**.

**Answer:** Market A firms face a horizontal demand curve as price takers; market B firms face a downward-sloping elastic demand curve as slight price makers; but with free entry both earn only normal profit in the long run.`,
      quiz: [
        { prompt: "Both perfect and monopolistic competition have", options: ["one firm", "a few firms", "many firms", "barriers to entry"], correctIndex: 2, explanation: "Both structures have many firms." },
        { prompt: "In perfect competition products are", options: ["differentiated", "identical", "unique", "branded"], correctIndex: 1, explanation: "Products are homogeneous." },
        { prompt: "In monopolistic competition products are", options: ["identical", "differentiated", "the same brand", "unbranded"], correctIndex: 1, explanation: "Products are distinctive/differentiated." },
        { prompt: "A perfectly competitive firm faces a demand curve that is", options: ["downward-sloping", "horizontal (perfectly elastic)", "vertical", "upward-sloping"], correctIndex: 1, explanation: "It can sell any amount at the market price." },
        { prompt: "A monopolistically competitive firm faces a demand curve that is", options: ["horizontal", "downward-sloping and elastic", "vertical", "perfectly inelastic"], correctIndex: 1, explanation: "It slopes down but is elastic because of close substitutes." },
        { prompt: "A perfectly competitive firm is a", options: ["price maker", "price taker", "monopolist", "cartel"], correctIndex: 1, explanation: "It accepts the market price." },
        { prompt: "A monopolistically competitive firm is", options: ["a full price maker", "a slight price maker", "a price taker", "a monopolist"], correctIndex: 1, explanation: "It has limited power to set price." },
        { prompt: "Both markets have free entry, so long-run profit is", options: ["very high", "normal", "negative", "zero output"], correctIndex: 1, explanation: "Entry competes away economic profit to normal levels." },
        { prompt: "Which market is fully efficient in the long run?", options: ["Monopolistic competition", "Perfect competition", "Both", "Neither"], correctIndex: 1, explanation: "Perfect competition is productively and allocatively efficient." },
        { prompt: "Which market offers product variety?", options: ["Perfect competition", "Monopolistic competition", "Neither", "Both equally"], correctIndex: 1, explanation: "Differentiation gives variety." },
        { prompt: "A downside of monopolistic competition is", options: ["no firms", "price above marginal cost and spare capacity", "identical products", "no entry"], correctIndex: 1, explanation: "It is not fully efficient." },
        { prompt: "The key difference between the two structures is", options: ["number of firms", "whether products are differentiated", "entry conditions", "long-run profit"], correctIndex: 1, explanation: "Product differentiation is the distinguishing feature." },
        { prompt: "A perfect competitor that raised its price would", options: ["keep all customers", "lose all its customers", "gain customers", "set a new market price"], correctIndex: 1, explanation: "With identical products, buyers switch to rivals at the market price." },
        { prompt: "A monopolistic competitor that raised its price a little would", options: ["lose all customers", "lose some but not all customers", "gain all rivals' customers", "face vertical demand"], correctIndex: 1, explanation: "Differentiation means some buyers stay." },
        { prompt: "Perfect competition offers consumers", options: ["variety", "low prices but no variety", "high prices", "collusion"], correctIndex: 1, explanation: "Low prices, but identical products mean no variety." },
        { prompt: "Restaurants are a good example of", options: ["perfect competition", "monopolistic competition", "monopoly", "oligopoly"], correctIndex: 1, explanation: "Many firms, differentiated products." },
        { prompt: "Corn farming is a good example of", options: ["monopolistic competition", "perfect competition", "monopoly", "cartel"], correctIndex: 1, explanation: "Many firms, identical product." },
        { prompt: "In both markets, economic profit in the long run is driven to zero by", options: ["barriers to entry", "free entry and exit", "collusion", "differentiation"], correctIndex: 1, explanation: "Free entry competes profit away." },
        { prompt: "Which feature is TRUE of monopolistic competition but not perfect competition?", options: ["Many firms", "Free entry", "Differentiated products", "Normal long-run profit"], correctIndex: 2, explanation: "Only monopolistic competition has differentiated products." },
        { prompt: "Which feature is TRUE of perfect competition but not monopolistic competition?", options: ["Many firms", "A horizontal firm demand curve", "Free entry", "Normal profit"], correctIndex: 1, explanation: "Only the perfect competitor faces a horizontal demand curve." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "State two features that perfect competition and monopolistic competition have in common.", answerKey: "Both have many firms and both have free entry and exit, so both earn only normal profit in the long run. Award 5 marks per correct shared feature (any two of: many firms, free entry/exit, normal long-run profit).", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Contrast the demand curve facing a perfectly competitive firm with that facing a monopolistically competitive firm.", answerKey: "A perfectly competitive firm faces a horizontal (perfectly elastic) demand curve at the market price and is a price taker. A monopolistically competitive firm faces a downward-sloping but highly elastic demand curve because its differentiated product has close substitutes, so it is a slight price maker. Award 4 per curve described correctly.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "The main difference between perfect and monopolistic competition is", options: ["the number of firms", "whether products are differentiated", "entry conditions", "long-run profit"], correctIndex: 1, answerKey: "Both have many firms and free entry; the difference is differentiated products. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why monopolistic competition is not fully efficient, yet may still benefit consumers.", answerKey: "It is not fully efficient because price exceeds marginal cost and firms operate with spare capacity, so output is below the efficient level. It still benefits consumers by offering product variety and innovation that perfect competition does not provide. Award marks for the inefficiency point and the variety benefit.", marks: 6 },
        { type: "ESSAY", prompt: "Compare and contrast perfect competition and monopolistic competition, covering products, demand curves, pricing, entry, profit and efficiency.", answerKey: "Award marks for: shared features — many firms, free entry, normal long-run profit, 8; products — identical vs differentiated, 5; demand curves — horizontal vs downward-sloping elastic, 6; pricing — price taker vs slight price maker, 5; efficiency and variety — efficient/no variety vs not fully efficient/variety, 6. A script that only lists one structure should not exceed 15.", marks: 30 },
      ],
    },
    // source: OpenStax — Principles of Economics 3e, 8.2 How Perfectly Competitive Firms Make Output Decisions (https://openstax.org/books/principles-economics-3e/pages/8-2-how-perfectly-competitive-firms-make-output-decisions) and 9.1 How Monopolies Form: Barriers to Entry (https://openstax.org/books/principles-economics-3e/pages/9-1-how-monopolies-form-barriers-to-entry)
    {
      slug: "price-and-output-perfect-competition-and-monopoly",
      title: "Graphic Illustrations: Price and Output under Perfect Competition and Monopoly",
      objective:
        "By the end of the topic, learners should be able to draw and read the diagrams for a perfectly competitive firm and a monopoly, and use the MR = MC rule to find the profit-maximising output.",
      estimatedMinutes: 120,
      notes: `## Revenue terms

**Total revenue (TR)** — price times quantity sold (TR = P × Q).
**Average revenue (AR)** — total revenue divided by quantity; AR equals the price.
**Marginal revenue (MR)** — the change in total revenue from selling one more unit (MR = change in TR ÷ change in Q).

## The perfectly competitive firm

- The firm is a **price taker**, so its demand curve is **horizontal** at the market price.
- For this firm, **price = marginal revenue = average revenue**, because every extra unit sells at the same market price.

\`\`\`svg Perfectly competitive firm: horizontal demand = P = MR = AR
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Horizontal demand line at market price for a price-taking firm">
  <line x1="45" y1="15" x2="45" y2="170" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="170" x2="285" y2="170" stroke="#555" stroke-width="1.5"/>
  <text x="10" y="20" font-size="11">Price</text>
  <text x="235" y="190" font-size="11">Quantity</text>
  <line x1="45" y1="90" x2="275" y2="90" stroke="#1f6feb" stroke-width="2"/>
  <text x="200" y="83" font-size="11" fill="#1f6feb">D = P = MR = AR</text>
  <text x="14" y="94" font-size="10">P</text>
</svg>
\`\`\`

## The monopoly

- The monopolist is the only seller, so it faces the whole **downward-sloping** market demand curve.
- To sell one more unit it must **lower the price**, so its **marginal revenue lies below the price** and slopes down more steeply than demand.

\`\`\`svg Monopoly: downward-sloping demand with marginal revenue below it
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Downward demand curve with a steeper marginal revenue curve below it">
  <line x1="45" y1="15" x2="45" y2="170" stroke="#555" stroke-width="1.5"/>
  <line x1="45" y1="170" x2="285" y2="170" stroke="#555" stroke-width="1.5"/>
  <text x="10" y="20" font-size="11">Price</text>
  <text x="235" y="190" font-size="11">Quantity</text>
  <line x1="55" y1="30" x2="255" y2="160" stroke="#c0392b" stroke-width="2"/>
  <text x="240" y="150" font-size="11" fill="#c0392b">D = AR</text>
  <line x1="55" y1="30" x2="160" y2="160" stroke="#e67e22" stroke-width="2"/>
  <text x="150" y="150" font-size="11" fill="#e67e22">MR</text>
</svg>
\`\`\`

## The profit-maximising rule

- Every firm maximises profit by producing where **marginal revenue equals marginal cost (MR = MC)**.
- **Perfect competition:** since P = MR, the firm produces where **P = MC**, then earns only normal profit in the long run as entry competes profit away.
- **Monopoly:** the firm produces where **MR = MC**, then reads the **price up on the demand curve** above that output — so price is higher and output lower than in perfect competition, and economic profit can persist behind barriers to entry.

## Reading the raspberry-farm revenue table

| Price | Quantity | Total revenue | Marginal revenue |
| --- | --- | --- | --- |
| 4 | 1 | 4 | — |
| 4 | 2 | 8 | 4 |
| 4 | 3 | 12 | 4 |
| 4 | 4 | 16 | 4 |

- For this price taker, marginal revenue is constant at 4 (the market price), confirming P = MR.

## Common errors

- **Giving a monopoly a horizontal demand curve.** Only the price-taking competitor has that; the monopoly's demand slopes down.
- **Putting MR above demand for a monopoly.** MR lies *below* the demand curve for a downward-sloping demand.
- **Forgetting to read price off the demand curve for a monopoly.** Find output where MR = MC, then read the price above it on demand.`,
      workedExample: `**Question:** A firm's marginal cost is constant at 4 dollars. (a) If it is a price taker in a market where the price is 4 dollars, what is its marginal revenue, and what does the MR = MC rule say about output? (b) How does a monopolist's marginal revenue differ, and what does that mean for price and output?

**Solution**

(a) *Price taker.* For a perfectly competitive firm, price = marginal revenue, so MR = **4 dollars**, constant at every output. Producing where MR = MC means where 4 = 4 — the firm expands output up to the point where the extra unit's cost just reaches the price (P = MC). It earns only normal profit in the long run.

(b) *Monopolist.* The monopolist faces a downward-sloping demand curve, so to sell more it must cut the price; its **marginal revenue is below the price** and falls as output rises. Setting MR = MC gives a **smaller output**; the monopolist then reads the **price up on the demand curve**, so price is **higher** than under perfect competition, and it can keep economic profit behind barriers to entry.

**Answer:** (a) MR = 4 = P, so the competitor produces where P = MC; (b) the monopolist's MR is below price, so MR = MC gives lower output and a higher price than perfect competition.`,
      quiz: [
        { prompt: "Total revenue equals", options: ["price times quantity", "price minus cost", "quantity minus price", "marginal cost times price"], correctIndex: 0, explanation: "TR = P × Q." },
        { prompt: "Average revenue equals", options: ["total cost per unit", "total revenue divided by quantity", "price plus quantity", "marginal cost"], correctIndex: 1, explanation: "AR = TR ÷ Q, which equals price." },
        { prompt: "Marginal revenue is", options: ["total revenue", "the change in total revenue from one more unit", "price times cost", "average cost"], correctIndex: 1, explanation: "MR is the extra revenue from selling one more unit." },
        { prompt: "A perfectly competitive firm's demand curve is", options: ["downward-sloping", "horizontal at the market price", "vertical", "upward-sloping"], correctIndex: 1, explanation: "As a price taker it can sell any amount at the market price." },
        { prompt: "For a perfectly competitive firm, price equals", options: ["marginal cost only", "marginal revenue and average revenue", "total cost", "fixed cost"], correctIndex: 1, explanation: "P = MR = AR for a price taker." },
        { prompt: "A monopolist faces a demand curve that is", options: ["horizontal", "downward-sloping", "vertical", "flat at the market price"], correctIndex: 1, explanation: "It faces the whole downward-sloping market demand." },
        { prompt: "For a monopolist, marginal revenue lies", options: ["above the price", "below the price", "on the demand curve", "at zero"], correctIndex: 1, explanation: "To sell more it lowers price, so MR is below price." },
        { prompt: "Every firm maximises profit where", options: ["MR = MC", "price = fixed cost", "TR = 0", "AR = 0"], correctIndex: 0, explanation: "The profit-maximising rule is MR = MC." },
        { prompt: "Because P = MR, a perfect competitor produces where", options: ["P = MC", "P = AC only", "MR is above MC", "TR = TC"], correctIndex: 0, explanation: "With P = MR, MR = MC becomes P = MC." },
        { prompt: "A monopolist finds output where MR = MC, then reads the price", options: ["off the MR curve", "up on the demand curve", "at zero", "off the cost curve"], correctIndex: 1, explanation: "Price is read above the profit-maximising output on demand." },
        { prompt: "Compared with perfect competition, a monopoly typically has", options: ["higher output, lower price", "lower output, higher price", "same output and price", "no output"], correctIndex: 1, explanation: "MR below price gives less output and a higher price." },
        { prompt: "In the raspberry-farm table, marginal revenue is constant at", options: ["2", "4", "8", "16"], correctIndex: 1, explanation: "The price taker's MR equals the price, 4." },
        { prompt: "A monopoly can keep economic profit because of", options: ["free entry", "barriers to entry", "identical products", "price taking"], correctIndex: 1, explanation: "Barriers stop entry from competing profit away." },
        { prompt: "A perfect competitor earns, in the long run,", options: ["large economic profit", "only normal profit", "constant losses", "no revenue"], correctIndex: 1, explanation: "Free entry competes profit down to normal." },
        { prompt: "Marginal revenue for a monopoly slopes down", options: ["less steeply than demand", "more steeply than demand", "horizontally", "upward"], correctIndex: 1, explanation: "MR falls faster than the demand curve." },
        { prompt: "A common mistake is to draw a monopoly's demand curve as", options: ["downward-sloping", "horizontal", "the market demand", "AR"], correctIndex: 1, explanation: "Only the price taker has a horizontal demand curve." },
        { prompt: "For a monopoly, the demand curve is also its", options: ["marginal cost curve", "average revenue curve", "marginal revenue curve", "total cost curve"], correctIndex: 1, explanation: "Demand shows the price at each quantity, which is average revenue." },
        { prompt: "If market price is 4 and marginal cost is constant at 4, the price taker produces where", options: ["MR is above MC", "4 = 4 (P = MC)", "TR is zero", "AR is below price"], correctIndex: 1, explanation: "P = MR = MC at the profit-maximising output." },
        { prompt: "The profit-maximising output for any firm is where the last unit's extra revenue", options: ["exceeds its extra cost", "just equals its extra cost", "is zero", "equals total cost"], correctIndex: 1, explanation: "MR = MC pins down the best output." },
        { prompt: "Reading a monopoly diagram, the price is found", options: ["where MR meets the quantity axis", "on the demand curve above the MR = MC output", "at the origin", "where MR = 0"], correctIndex: 1, explanation: "Set MR = MC for output, then read price up on demand." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define total revenue, average revenue and marginal revenue.", answerKey: "Total revenue is price times quantity sold (TR = P × Q). Average revenue is total revenue divided by quantity (AR = TR ÷ Q), which equals the price. Marginal revenue is the change in total revenue from selling one more unit (MR = ΔTR ÷ ΔQ). Award 3 for TR, 3 for AR, 4 for MR.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain why, for a perfectly competitive firm, price equals marginal revenue.", answerKey: "A perfectly competitive firm is a price taker facing a horizontal demand curve at the market price. Each extra unit sells at that same price, so the addition to total revenue from one more unit (marginal revenue) equals the price. Hence P = MR (and also AR). Award marks for the price-taker/horizontal-demand point and the MR reasoning.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A monopoly maximises profit by producing where", options: ["price = average cost", "marginal revenue = marginal cost, then reading price off demand", "total revenue is largest", "marginal revenue = 0 always"], correctIndex: 1, answerKey: "Set MR = MC for output, then read price up on the demand curve. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a monopoly's marginal revenue curve lies below its demand curve.", answerKey: "A monopoly faces the whole downward-sloping demand curve, so to sell one more unit it must lower the price on all units sold. The extra revenue from the last unit is therefore less than its price, so marginal revenue lies below the demand (price) curve. Award marks for the downward-sloping demand point and the MR-below-price reasoning.", marks: 6 },
        { type: "ESSAY", prompt: "Using diagrams, explain how price and output are determined under perfect competition and under monopoly, and compare the two outcomes.", answerKey: "Award marks for: perfect competitor's horizontal demand with P = MR = AR, 6; MR = MC rule and, since P = MR, producing where P = MC, 6; monopoly's downward-sloping demand with MR below price, 6; monopoly setting MR = MC then reading price off demand, 6; comparison — monopoly has lower output and higher price, with lasting profit behind barriers to entry, 6. A script without diagrams or the MR = MC rule should not exceed 18.", marks: 30 },
      ],
    },
  ],
};
