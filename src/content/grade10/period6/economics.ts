import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester Two, Period VI: Types of Business Organizations.
export const economicsG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Types of Business Organizations",
  summary:
    "Period VI of the MoE Grade 10 Economics syllabus. Learners study the main forms of business organization — the sole proprietorship, the partnership, companies (private and public limited), cooperatives and public (state) enterprises — comparing their ownership, control, liability and advantages.",
  topics: [
    {
      slug: "sole-proprietorship-and-partnership",
      title: "The Sole Proprietorship and the Partnership",
      objective:
        "By the end of the topic, learners should be able to describe the sole proprietorship and the partnership, and state the advantages and disadvantages of each.",
      estimatedMinutes: 150,
      notes: `## Introduction

Not all businesses are built the same way. The woman selling doughnuts at the roadside, the two friends who open a shop together, and a large trading company are all "businesses" — but they differ in who owns them, who makes the decisions, and, crucially, who is on the hook if the business runs into debt. This topic begins with the two simplest forms — the **sole proprietorship** and the **partnership** — weighing the advantages and disadvantages of each, and introduces the single idea (**liability**) that explains why bigger businesses take on other forms.

## What is a business organization?

A **business organization** is a firm set up to produce goods or services, usually to make a **profit**. Businesses differ in **who owns them, who controls them, how they raise money**, and how far the owners are responsible for the firm's debts (their **liability**). We begin with the two simplest forms.

## The sole proprietorship

A **sole proprietorship (one-man business)** is a business owned and run by **one person**. It is the commonest and simplest kind of business — the market trader, tailor, shopkeeper or small farmer.

**Advantages:**
- **Easy and cheap to set up** — few legal requirements.
- The owner **keeps all the profits**.
- The owner has **full control** and makes quick decisions.
- Close, personal relationship with customers.

**Disadvantages:**
- **Unlimited liability** — the owner is **personally responsible for all the debts**; if the business fails, the owner may have to sell personal property to pay them.
- **Limited capital** — one person can raise only so much money, so the business stays small.
- **The owner bears all the risk** and workload.
- The business often **ends** if the owner dies or stops (no continuity).

## The partnership

A **partnership** is a business owned by **two to twenty people (partners)** who share the capital, the work, the profits and the losses, usually under a **partnership agreement (deed)**.

**Advantages:**
- **More capital** than a sole proprietorship — several people contribute.
- **Shared work and shared risk**.
- Partners can bring **different skills** (e.g. one good at selling, one at accounts).
- More minds for **better decisions**.

**Disadvantages:**
- **Unlimited liability** — like the sole proprietor, partners are usually personally liable for the business's debts.
- **Disagreements** between partners can harm the business.
- Profits must be **shared**.
- A partner's actions **bind the others**, and the partnership may end if a partner leaves or dies.

## Comparing the two

| Feature | Sole proprietorship | Partnership |
|---|---|---|
| Owners | 1 | 2–20 |
| Capital | small | more (shared) |
| Liability | unlimited | unlimited |
| Profits | all to owner | shared |
| Decisions | one person | shared |

Both are simple to form and both have **unlimited liability** — the key weakness that companies overcome (the next topic).

## Common errors and misconceptions

- **Thinking a partnership has limited liability** — like the sole proprietor, partners usually have **unlimited liability** and can lose personal property to pay the firm's debts; limited liability belongs to *companies*.
- **Believing the sole proprietor has no responsibility for debts** — with **unlimited liability**, the owner is *personally* responsible for **all** the business's debts.
- **Assuming a partnership can have unlimited partners** — a partnership has **2 to 20** partners; a single owner is a sole proprietorship, and larger numbers of owners point to a company.
- **Forgetting that a partner's actions bind the others** — one partner's business decisions legally commit *all* the partners, which is a real risk of the form.`,
      workedExample: `**Task.** A tailor runs her shop alone. She is thinking of taking a partner. (a) What form of business does she run now? (b) Give two advantages and one disadvantage of her current form. (c) How would taking a partner help, and what new risk appears?

**Part (a) — her current form**
She runs a **sole proprietorship** (a one-man/one-woman business) — owned and run by one person.

**Part (b) — advantages and a disadvantage of the sole proprietorship**
- **Advantages** (any two): it was **easy and cheap to set up**; she **keeps all the profits**; she has **full control** and can decide quickly; a close relationship with her customers.
- **Disadvantage** (any one): **unlimited liability** — she is personally responsible for all the business's debts; or **limited capital**, so the business stays small; or she bears all the risk and workload.

**Part (c) — taking a partner**
Forming a **partnership** would help because the partner brings **more capital** (so the business can grow), **shares the work and the risk**, and may add **different skills** and better decisions.

But a **new risk** appears: in a partnership the partners still have **unlimited liability**, and **each partner's actions bind the others** — so she could be held responsible for debts caused by her partner's decisions, and disagreements could harm the business. Profits must also now be **shared**.

**Conclusion:** she currently runs a sole proprietorship (easy to set up, full profit and control, but unlimited liability and limited capital); a partnership would add capital, shared work and skills, but keeps unlimited liability and adds the risk that a partner's actions bind her.`,
      teachingTip:
        "The one concept that carries the whole unit is **liability** — teach 'unlimited liability' (owner personally responsible for debts) explicitly, because it is the weakness that makes learners understand why companies exist. Use local examples (the market trader = sole proprietor; two friends running a shop = partnership) so the forms feel real. A two-column advantage/disadvantage table is exactly what exam 'compare' questions reward.",
      quiz: [
        {
          prompt: "A business organization is usually set up to produce goods or services and make a…",
          options: ["profit", "loss", "law", "map"],
          correctIndex: 0,
          explanation: "Most businesses aim to make a profit.",
        },
        {
          prompt: "A sole proprietorship is owned by…",
          options: ["one person", "two to twenty people", "the government", "shareholders"],
          correctIndex: 0,
          explanation: "A sole proprietorship has a single owner.",
        },
        {
          prompt: "An advantage of a sole proprietorship is that the owner…",
          options: ["keeps all the profits", "shares profits with many", "has limited liability", "needs much capital"],
          correctIndex: 0,
          explanation: "The single owner keeps all the profit.",
        },
        {
          prompt: "'Unlimited liability' means the owner is…",
          options: ["personally responsible for all the business's debts", "not responsible for debts", "paid a fixed salary", "protected by the government"],
          correctIndex: 0,
          explanation: "The owner's personal property can be used to pay debts.",
        },
        {
          prompt: "A disadvantage of a sole proprietorship is…",
          options: ["limited capital", "too many owners", "sharing profits", "government control"],
          correctIndex: 0,
          explanation: "One person can raise only limited capital.",
        },
        {
          prompt: "A partnership is owned by…",
          options: ["two to twenty people", "one person", "the state", "shareholders in millions"],
          correctIndex: 0,
          explanation: "Partnerships have 2–20 partners.",
        },
        {
          prompt: "The document setting out how a partnership is run is the…",
          options: ["partnership agreement (deed)", "share certificate", "invoice", "budget"],
          correctIndex: 0,
          explanation: "A partnership deed governs the partnership.",
        },
        {
          prompt: "An advantage of a partnership over a sole proprietorship is…",
          options: ["more capital", "no owners", "less work shared", "government funding"],
          correctIndex: 0,
          explanation: "Several partners contribute more capital.",
        },
        {
          prompt: "Partners can bring different…",
          options: ["skills", "countries", "governments", "currencies only"],
          correctIndex: 0,
          explanation: "Different skills strengthen the business.",
        },
        {
          prompt: "A disadvantage of a partnership is…",
          options: ["disagreements between partners", "keeping all the profit alone", "having only one owner", "no capital at all"],
          correctIndex: 0,
          explanation: "Partners may disagree, harming the business.",
        },
        {
          prompt: "In a partnership, profits must be…",
          options: ["shared", "kept by one partner", "given to the state", "destroyed"],
          correctIndex: 0,
          explanation: "Partners share the profits.",
        },
        {
          prompt: "Both the sole proprietorship and the partnership have…",
          options: ["unlimited liability", "limited liability", "millions of owners", "no owners"],
          correctIndex: 0,
          explanation: "Both forms have unlimited liability.",
        },
        {
          prompt: "In a sole proprietorship, decisions are made by…",
          options: ["one person", "a board of directors", "shareholders", "the government"],
          correctIndex: 0,
          explanation: "The single owner decides.",
        },
        {
          prompt: "A market trader running her own stall is an example of a…",
          options: ["sole proprietorship", "partnership", "public company", "cooperative"],
          correctIndex: 0,
          explanation: "A one-person business is a sole proprietorship.",
        },
        {
          prompt: "If the owner of a sole proprietorship dies, the business often…",
          options: ["ends (no continuity)", "continues forever automatically", "becomes a company", "is taken by the state"],
          correctIndex: 0,
          explanation: "It usually lacks continuity.",
        },
        {
          prompt: "In a partnership, one partner's actions can…",
          options: ["bind the other partners", "never affect others", "be ignored", "end all liability"],
          correctIndex: 0,
          explanation: "Partners are bound by each other's actions.",
        },
        {
          prompt: "Which form is the easiest and cheapest to set up?",
          options: ["sole proprietorship", "public limited company", "cooperative", "state enterprise"],
          correctIndex: 0,
          explanation: "The sole proprietorship has the fewest requirements.",
        },
        {
          prompt: "Why does a sole proprietorship usually stay small?",
          options: ["limited capital from one owner", "too many owners", "government limits", "unlimited capital"],
          correctIndex: 0,
          explanation: "One person can raise only limited funds.",
        },
        {
          prompt: "A partnership shares the work and the…",
          options: ["risk", "government", "country", "currency"],
          correctIndex: 0,
          explanation: "Partners share the work and the risk.",
        },
        {
          prompt: "The key weakness that both these forms share, which companies overcome, is…",
          options: ["unlimited liability", "having profits", "having owners", "making goods"],
          correctIndex: 0,
          explanation: "Companies introduce limited liability.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Define a sole proprietorship and give two of its advantages.",
          answerKey:
            "A sole proprietorship is a business owned and run by one person. Advantages (any two): easy/cheap to set up; the owner keeps all the profits; full control and quick decisions; close relationship with customers. Award marks for the definition and two valid advantages.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "Which feature is shared by both a sole proprietorship and a partnership?",
          options: ["unlimited liability", "millions of shareholders", "government ownership", "limited liability"],
          correctIndex: 0,
          answerKey: "Both have unlimited liability.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "State two advantages a partnership has over a sole proprietorship.",
          answerKey:
            "Any two: more capital (several partners contribute); shared work and shared risk; partners bring different skills; more minds for better decisions. Award a mark per valid advantage.",
          marks: 2,
        },
        {
          type: "ESSAY",
          prompt:
            "Compare the sole proprietorship and the partnership, referring to ownership, capital, liability and profits, and state one disadvantage they share.",
          answerKey:
            "A strong answer compares: ownership — sole proprietorship one owner, partnership 2–20 partners; capital — the partnership can raise more (shared) than a single owner; liability — both have unlimited liability (owners personally responsible for debts); profits — the sole proprietor keeps all profits while partners share them. A shared disadvantage: unlimited liability (or lack of continuity). Award marks for the comparison across the features and the shared disadvantage.",
          marks: 5,
        },
      ],
    },
    {
      slug: "companies-cooperatives-public-enterprises",
      title: "Companies, Cooperatives and Public Enterprises",
      objective:
        "By the end of the topic, learners should be able to describe limited liability companies (private and public), cooperatives and public (state) enterprises, and explain the meaning and importance of limited liability.",
      estimatedMinutes: 150,
      notes: `## Introduction

How does a business grow big enough to build a factory, a bank or a shipping line — when a single owner or a handful of partners could never risk that much of their own money? The answer is a clever legal invention: the **limited liability company**, which lets many people invest without risking everything they own. This topic explains companies (both **private** and **public**), the pivotal idea of **limited liability**, and two further forms — the member-owned **cooperative** and the government-owned **public enterprise** — completing the picture of how businesses are organised.

## Beyond the simple firms

The sole proprietorship and partnership are limited by **unlimited liability** and **small capital**. Larger businesses use forms that offer **limited liability** and can raise much more money.

## Limited liability companies

A **company (corporation)** is a business owned by **shareholders** — people who buy **shares** (parts of the ownership) and so provide the **capital**. Its most important feature is **limited liability**.

> **Limited liability** means a shareholder can only lose the **amount of money they invested** (the value of their shares) if the company fails — their **personal property is safe**. This is the key advantage over the sole proprietorship and partnership.

A company is a **separate legal person** from its owners, run by a **board of directors** elected by the shareholders. There are two kinds:

- **Private limited company:** shares are sold **privately** (to family, friends, invited people), not to the general public. It is smaller and its ownership is restricted.
- **Public limited company:** shares are sold to the **general public** (on a stock exchange), so it can raise **very large amounts of capital** and become a big business.

**Advantages of companies:** limited liability; large capital; continuity (the company continues even if owners change or die); can employ specialists.
**Disadvantages:** more complex and costly to set up; must obey many legal rules; must publish accounts; owners (shareholders) may have little day-to-day control.

## Cooperatives

A **cooperative** is a business **owned and run by its members for their mutual benefit**, rather than mainly for outside profit. Members share the work and the benefits, and usually each member has an **equal vote** (one member, one vote), regardless of how much they put in.

- Examples: **farmers' cooperatives** (to buy seed cheaply and sell crops together), **consumer cooperatives** (to buy goods in bulk), and **savings/credit cooperatives (credit unions)**.
- **Advantages:** members help one another, share profits/benefits, and gain strength by working together.

## Public (state) enterprises

A **public (state) enterprise** is a business **owned and run by the government** (the state), not by private individuals — for example a national electricity, water or port company.

- **Aim:** to provide **essential services** to the public, sometimes where private firms would not, rather than only to make profit.
- **Advantages:** can provide vital services and are answerable to the public.
- **Disadvantages:** may be less efficient, and may need government subsidy.

## Summary of ownership

| Business | Owned by | Liability |
|---|---|---|
| Sole proprietorship | one person | unlimited |
| Partnership | 2–20 partners | unlimited |
| Company | shareholders | **limited** |
| Cooperative | its members | limited (usually) |
| Public enterprise | the government | (state-owned) |

## Common errors and misconceptions

- **Thinking limited liability means the company pays no debts** — the *company* still owes its debts; limited liability protects the **shareholder**, who can lose only what they *invested*, not their personal property.
- **Confusing a private with a public limited company** — a **private** company sells shares *privately* (to invited people); a **public** company sells shares to the **general public** (on a stock exchange) and can raise far more capital.
- **Treating a cooperative like an ordinary company** — a cooperative runs for its **members' mutual benefit** with **one member, one vote**; a company runs for **shareholder profit**, with votes weighted by shares owned.
- **Assuming a public (state) enterprise exists only to make profit** — its main aim is to **provide essential services** (electricity, water, ports), sometimes where private firms would not.`,
      workedExample: `**Task.** (a) Explain what limited liability means and why it is important. (b) Distinguish a private limited company from a public limited company. (c) How does a cooperative differ from an ordinary company?

**Part (a) — limited liability and its importance**
**Limited liability** means that if the company fails, a shareholder can only lose the **money they invested** (the value of their shares) — their **personal property is protected**. It is important because it **encourages people to invest**: knowing they cannot lose more than they put in, many people are willing to buy shares, so the company can **raise large amounts of capital** and grow. This overcomes the unlimited-liability weakness of sole proprietorships and partnerships.

**Part (b) — private vs public limited company**
- A **private limited company** sells its shares **privately** — to family, friends and invited people, not the general public — so it is smaller and its ownership is restricted.
- A **public limited company** sells its shares to the **general public** (on a stock exchange), so it can raise **very large amounts of capital** and become a big business.

**Part (c) — cooperative vs ordinary company**
A **cooperative** is owned and run by its **members for their mutual benefit** (e.g. farmers buying seed cheaply and selling crops together), usually with **one member, one vote** regardless of how much each contributed. An **ordinary company** is owned by **shareholders** mainly to make **profit**, and voting power depends on the **number of shares** owned. So a cooperative is about mutual member benefit and equal say; a company is about profit for shareholders, with control by shareholding.

**Conclusion:** limited liability protects investors (encouraging investment and growth); a private company sells shares privately while a public company sells to the public for large capital; and a cooperative serves its members mutually with equal votes, unlike a profit-seeking, shareholding company.`,
      teachingTip:
        "Limited liability is the pivotal idea — spell it out: a shareholder can lose only what they invested, never their house. Contrast it directly with the unlimited liability of the previous topic so learners see why companies can grow big. Keep the private-vs-public company distinction crisp (shares sold privately vs to the public). For cooperatives, the memorable rule is 'one member, one vote' and 'for members' benefit, not outside profit' — a reliable exam discriminator.",
      quiz: [
        {
          prompt: "A company is owned by…",
          options: ["shareholders", "one person only", "the workers only", "no one"],
          correctIndex: 0,
          explanation: "Shareholders own the company.",
        },
        {
          prompt: "Shareholders provide the company's…",
          options: ["capital", "government", "borders", "weather"],
          correctIndex: 0,
          explanation: "Buying shares provides capital.",
        },
        {
          prompt: "Limited liability means a shareholder can lose only…",
          options: ["the amount they invested", "all their personal property", "nothing at all", "their house always"],
          correctIndex: 0,
          explanation: "Loss is limited to the investment.",
        },
        {
          prompt: "Limited liability is important because it…",
          options: ["encourages people to invest", "stops all business", "raises taxes", "removes owners"],
          correctIndex: 0,
          explanation: "Protection encourages investment and growth.",
        },
        {
          prompt: "A company is run by a…",
          options: ["board of directors", "single owner only", "government minister always", "customer"],
          correctIndex: 0,
          explanation: "Directors, elected by shareholders, run it.",
        },
        {
          prompt: "A private limited company sells its shares…",
          options: ["privately (to invited people)", "to the general public", "to the government only", "for free"],
          correctIndex: 0,
          explanation: "Private company shares are sold privately.",
        },
        {
          prompt: "A public limited company sells its shares to…",
          options: ["the general public", "family only", "no one", "the government only"],
          correctIndex: 0,
          explanation: "Public company shares are sold to the public.",
        },
        {
          prompt: "Which can raise the LARGEST amount of capital?",
          options: ["a public limited company", "a sole proprietorship", "a partnership", "a one-man business"],
          correctIndex: 0,
          explanation: "Selling shares to the public raises the most.",
        },
        {
          prompt: "An advantage of a company is continuity, meaning it…",
          options: ["continues even if owners change or die", "ends when an owner leaves", "has no capital", "cannot employ staff"],
          correctIndex: 0,
          explanation: "A company is a separate legal person with continuity.",
        },
        {
          prompt: "A cooperative is owned and run by its…",
          options: ["members for their mutual benefit", "government only", "shareholders for profit only", "customers abroad"],
          correctIndex: 0,
          explanation: "Cooperatives serve their members.",
        },
        {
          prompt: "In a cooperative, voting is usually…",
          options: ["one member, one vote", "one share, one vote", "by the government", "not allowed"],
          correctIndex: 0,
          explanation: "Members typically have equal votes.",
        },
        {
          prompt: "Which is an example of a cooperative?",
          options: ["a farmers' cooperative", "a national army", "a private company", "a market trader"],
          correctIndex: 0,
          explanation: "Farmers' and credit cooperatives are examples.",
        },
        {
          prompt: "A public (state) enterprise is owned by…",
          options: ["the government", "one person", "foreign shareholders", "a cooperative"],
          correctIndex: 0,
          explanation: "The state owns public enterprises.",
        },
        {
          prompt: "The main aim of a public enterprise is often to…",
          options: ["provide essential services to the public", "make maximum private profit", "avoid all services", "sell shares abroad"],
          correctIndex: 0,
          explanation: "State enterprises provide vital services.",
        },
        {
          prompt: "Which is an example of a public enterprise?",
          options: ["a national electricity or water company", "a market stall", "a two-person shop", "a family firm"],
          correctIndex: 0,
          explanation: "State-owned utilities are public enterprises.",
        },
        {
          prompt: "A disadvantage of a company is that it…",
          options: ["is more complex and costly to set up", "has unlimited liability", "cannot raise capital", "has no owners"],
          correctIndex: 0,
          explanation: "Companies face more rules and costs.",
        },
        {
          prompt: "In a company, voting power usually depends on…",
          options: ["the number of shares owned", "one member one vote", "the government", "age"],
          correctIndex: 0,
          explanation: "More shares means more votes (unlike a cooperative).",
        },
        {
          prompt: "Which forms have LIMITED liability?",
          options: ["companies (and usually cooperatives)", "sole proprietorships", "partnerships", "market traders"],
          correctIndex: 0,
          explanation: "Companies offer limited liability.",
        },
        {
          prompt: "A disadvantage of a public enterprise can be that it…",
          options: ["may be less efficient and need subsidy", "always makes huge profits", "has unlimited liability", "has no aim"],
          correctIndex: 0,
          explanation: "State firms can be less efficient.",
        },
        {
          prompt: "The key advantage of a company over a partnership is…",
          options: ["limited liability and larger capital", "unlimited liability", "fewer owners", "no continuity"],
          correctIndex: 0,
          explanation: "Limited liability and large capital are the advantages.",
        },
      ],
      test: [
        {
          type: "SHORT_ANSWER",
          prompt: "Explain what 'limited liability' means and why it encourages people to invest in a company.",
          answerKey:
            "Limited liability means that if the company fails, a shareholder can only lose the amount they invested (the value of their shares); their personal property is safe. It encourages investment because people know their loss is capped, so more are willing to buy shares, allowing the company to raise large capital. Award marks for the definition and the link to encouraging investment.",
          marks: 3,
        },
        {
          type: "MULTIPLE_CHOICE",
          prompt: "A public limited company differs from a private limited company because it…",
          options: [
            "sells its shares to the general public",
            "has only one owner",
            "has unlimited liability",
            "cannot raise capital",
          ],
          correctIndex: 0,
          answerKey: "A public limited company sells shares to the general public.",
          marks: 2,
        },
        {
          type: "SHORT_ANSWER",
          prompt: "Explain how a cooperative differs from an ordinary company.",
          answerKey:
            "A cooperative is owned and run by its members for their mutual benefit, usually with one member, one vote regardless of contribution; an ordinary company is owned by shareholders mainly for profit, with voting power based on the number of shares owned. Award marks for the mutual-benefit/one-member-one-vote nature of the cooperative versus the profit/shareholding nature of the company.",
          marks: 3,
        },
        {
          type: "ESSAY",
          prompt:
            "Describe the main types of business organization and explain why limited liability companies can grow larger than sole proprietorships and partnerships.",
          answerKey:
            "A strong answer describes the sole proprietorship (one owner, unlimited liability), the partnership (2–20 partners, unlimited liability), the company (owned by shareholders, limited liability; private sells shares privately, public sells to the general public), the cooperative (owned by members for mutual benefit, one member one vote), and the public/state enterprise (government-owned, providing essential services). It explains that limited liability companies can grow larger because limited liability protects investors (they can lose only what they invested), which encourages many people to buy shares and provides large capital, and because companies have continuity and can employ specialists — advantages the unlimited-liability, small-capital sole proprietorship and partnership lack. Award marks for describing the types and explaining the growth advantage of limited liability companies.",
          marks: 6,
        },
      ],
    },
  ],
};
