import type { PeriodContent } from "@/content/types";

// Aligned to the Liberian MoE National Curriculum for Economics, Grade 10,
// Semester Two, Period VI: Types of Business Organizations. CONTENTS:
// (1) Definition of sole-proprietorship, partnership, corporation, joint-stock
// companies, cooperatives, statutory corporation and joint-ventures;
// (2) Main features of the same; (3) Advantages & disadvantages of the same;
// (4) Sources of funding of the same; (5) Business enterprise policy on
// privatization, commercialization, indigenization and nationalization.
// CONTENTS items 1-4 are cross-cutting aspects of the SAME set of organization
// types, so they are taught organized BY organization type (each topic covers
// that form's definition, features, advantages/disadvantages and funding),
// which keeps each topic coherent while still covering every aspect; item 5 is
// its own policy topic. Five sourced topics result.
export const economicsG10P6: PeriodContent = {
  grade: 10,
  number: 6,
  title: "Types of Business Organizations",
  summary:
    "Period VI of the MoE Grade 10 Economics syllabus. Learners study the main forms of business organization — the sole proprietorship, the partnership, the company/joint-stock corporation, cooperatives, statutory (public) corporations and joint ventures — comparing their definition, features, advantages, disadvantages and sources of funding, and examine business enterprise policies of privatization, commercialization, indigenization and nationalization.",
  topics: [
    // source: OpenStax — Introduction to Business, 4.1 Going It Alone: Sole Proprietorships (https://openstax.org/books/introduction-business/pages/4-1-going-it-alone-sole-proprietorships)
    {
      slug: "sole-proprietorship",
      title: "The Sole Proprietorship",
      objective:
        "By the end of the topic, learners should be able to define a sole proprietorship, state its features, list its advantages and disadvantages, and describe how it is financed.",
      estimatedMinutes: 110,
      notes: `## Definition

**Sole proprietorship** — a business that is **established, owned, operated and often financed by one person**.
- It is the simplest and most common form of business.

## Main features

- **One owner** who makes all the decisions.
- The owner and the business are **legally the same** (not a separate legal person).
- **Unlimited liability** — the owner is personally responsible for all the business's debts.
- Profits are taxed as the owner's **personal income**.
- Minimal legal formality to start or close.

## Advantages

- **Easy and inexpensive** to establish.
- The owner **keeps all the profits**.
- **Complete control** over decisions.
- **Freedom** from most government regulation.
- No special business taxes; simple to dissolve or sell.

## Disadvantages

- **Unlimited personal liability** for debts — personal assets are at risk.
- **Difficulty raising capital** (seen as high-risk by lenders).
- **Limited managerial expertise** — one person must handle everything.
- Hard to attract qualified employees.
- **Unstable business life** — the business may end if the owner dies or leaves.
- The owner bears **all losses**.

## Sources of funding

- Mostly **personal funds**: the owner's savings and start-up capital.
- Personal credit cards, a loan against the home, or selling personal investments.
- Heavy reliance on personal financing because lenders see the form as higher risk (unlimited liability).

## Common errors

- **Thinking the owner's liability is limited.** It is **unlimited** — personal assets can be taken for business debts.
- **Assuming it is a separate legal person.** Owner and business are legally one.
- **Confusing "keeps all profit" with "no risk".** The owner also bears all the losses.`,
      workedExample: `**Question:** Musu opens a small tailoring shop alone, using her savings, and runs it herself. The shop later owes 5,000 dollars it cannot pay from business takings. (a) What form of business is this? (b) State two features. (c) Explain what happens about the 5,000-dollar debt.

**Solution**

(a) A business established, owned, operated and financed by **one person** is a **sole proprietorship**.

(b) Features: Musu is the **only owner and decision-maker**; the business and Musu are **legally the same**, so she has **unlimited liability**; profits are her personal income; she started it with minimal formality.

(c) Because of **unlimited liability**, Musu is **personally responsible** for the 5,000-dollar debt. If the business cannot pay from its takings, her **personal assets** (savings, property) can be used to settle it — the debt is not limited to what she put into the shop.

**Answer:** It is a sole proprietorship; Musu is sole owner with unlimited liability; she must pay the 5,000-dollar debt personally, from her own assets if necessary.`,
      quiz: [
        { prompt: "A sole proprietorship is owned by", options: ["two people", "one person", "shareholders", "the state"], correctIndex: 1, explanation: "It is owned and run by one person." },
        { prompt: "In a sole proprietorship, the owner and the business are", options: ["separate legal persons", "legally the same", "always a company", "owned by a board"], correctIndex: 1, explanation: "There is no separate legal identity." },
        { prompt: "The liability of a sole proprietor is", options: ["limited", "unlimited", "zero", "shared"], correctIndex: 1, explanation: "The owner is personally liable for all debts." },
        { prompt: "An advantage of a sole proprietorship is", options: ["unlimited liability", "the owner keeps all the profits", "double taxation", "complex formation"], correctIndex: 1, explanation: "The single owner keeps all profit." },
        { prompt: "A disadvantage of a sole proprietorship is", options: ["easy formation", "complete control", "difficulty raising capital", "keeping all profit"], correctIndex: 2, explanation: "Raising capital is hard for a sole trader." },
        { prompt: "Profits of a sole proprietorship are taxed as", options: ["corporate profit", "the owner's personal income", "not taxed", "sales tax only"], correctIndex: 1, explanation: "They are personal income." },
        { prompt: "Sole proprietorships are financed mainly by", options: ["selling shares to the public", "the owner's personal funds", "government grants only", "bonds"], correctIndex: 1, explanation: "Personal funds are the main source." },
        { prompt: "'Unstable business life' means the business", options: ["never ends", "may end if the owner dies or leaves", "is a company", "has many owners"], correctIndex: 1, explanation: "It depends on the single owner." },
        { prompt: "Who makes the decisions in a sole proprietorship?", options: ["A board of directors", "The single owner", "Shareholders", "The government"], correctIndex: 1, explanation: "The owner has complete control." },
        { prompt: "The simplest and most common form of business is the", options: ["corporation", "partnership", "sole proprietorship", "cooperative"], correctIndex: 2, explanation: "Sole proprietorships are simplest and most common." },
        { prompt: "Unlimited liability means the owner's ... are at risk for business debts.", options: ["shares", "personal assets", "employees", "customers"], correctIndex: 1, explanation: "Personal assets can be taken to pay debts." },
        { prompt: "A sole proprietorship is relatively free from", options: ["all costs", "most government regulation", "any risk", "the market"], correctIndex: 1, explanation: "It faces minimal regulation." },
        { prompt: "Lenders view sole proprietorships as", options: ["low risk", "higher risk", "risk-free", "state-backed"], correctIndex: 1, explanation: "Unlimited liability makes them higher risk to lenders." },
        { prompt: "Which is TRUE of a sole proprietorship?", options: ["It has limited liability", "The owner bears all losses", "It sells shares publicly", "It has a board"], correctIndex: 1, explanation: "The owner bears all losses as well as all profit." },
        { prompt: "A drawback of one person running everything is", options: ["more capital", "limited managerial expertise", "double taxation", "public reporting"], correctIndex: 1, explanation: "One person cannot be expert in all areas." },
        { prompt: "Dissolving a sole proprietorship is", options: ["very difficult", "relatively simple", "impossible", "decided by shareholders"], correctIndex: 1, explanation: "It is simple to close." },
        { prompt: "The owner of a sole proprietorship keeps", options: ["half the profit", "all the profit", "no profit", "a fixed salary only"], correctIndex: 1, explanation: "All profit goes to the sole owner." },
        { prompt: "A common source of start-up funds for a sole trader is", options: ["public share issue", "personal savings", "corporate bonds", "a stock exchange listing"], correctIndex: 1, explanation: "Personal savings are typical." },
        { prompt: "Which pairs a feature with the sole proprietorship correctly?", options: ["Separate legal person", "Board of directors", "Unlimited liability", "Public shareholders"], correctIndex: 2, explanation: "Unlimited liability is a key feature." },
        { prompt: "The main reason it is hard to expand a sole proprietorship is", options: ["too much regulation", "limited access to capital", "double taxation", "too many owners"], correctIndex: 1, explanation: "Limited capital constrains growth." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a sole proprietorship and state two of its features.", answerKey: "A sole proprietorship is a business established, owned, operated and often financed by one person. Features (any two): one owner who makes all decisions; the owner and business are legally the same; unlimited liability; profits taxed as personal income; minimal legal formality. Award 4 for the definition, 2 per feature.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of a sole proprietorship.", answerKey: "Advantages (any two): easy and cheap to set up; owner keeps all profit; complete control; freedom from regulation. Disadvantages (any two): unlimited liability; difficulty raising capital; limited managerial expertise; unstable business life; owner bears all losses. Award 2 per correct point.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Unlimited liability in a sole proprietorship means", options: ["the owner can never lose money", "the owner's personal assets can be used to pay business debts", "liability is shared with the state", "only the business's assets are at risk"], correctIndex: 1, answerKey: "The owner is personally liable, so personal assets can be taken for business debts. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain why a sole proprietorship often struggles to raise capital.", answerKey: "It cannot sell shares to the public and relies mainly on the owner's personal funds. Lenders see it as higher risk because of unlimited liability and unstable business life, so they are reluctant to lend, limiting the capital available for expansion. Award marks for reliance on personal funds and the lender-risk point.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the sole proprietorship as a form of business, covering its definition, features, advantages, disadvantages and sources of funding.", answerKey: "Award marks for: definition (owned/run/financed by one person), 5; features (single owner, no separate legal identity, unlimited liability, personal-income tax), 6; advantages (easy setup, all profit, control, little regulation), 6; disadvantages (unlimited liability, limited capital, limited expertise, unstable life), 6; sources of funding (personal savings, credit, home loan), 5; terminology, 2. A script omitting funding or liability loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Business, 4.2 Partnerships: Sharing the Load (https://openstax.org/books/introduction-business/pages/4-2-partnerships-sharing-the-load)
    {
      slug: "partnership",
      title: "The Partnership",
      objective:
        "By the end of the topic, learners should be able to define a partnership, distinguish general from limited partners, state its features, advantages and disadvantages, and describe its funding.",
      estimatedMinutes: 110,
      notes: `## Definition

**Partnership** — an association of **two or more individuals** who agree to operate a business together for **profit**.
- The agreement may be oral or written, but a **written partnership agreement** (deed) is strongly advised.

## Types of partner

- **General partnership** — all partners share management, profits and co-own the assets, and each has **unlimited liability** for the firm's debts.
- **Limited partnership** — has at least one **general partner** (unlimited liability) plus **limited partners** whose liability is limited to the amount they invested; limited partners provide capital but do not manage day-to-day.

## Main features

- **Two or more owners** sharing ownership and profits.
- General partners have **unlimited liability** (a single partner can be liable for all the firm's debts).
- The partners **pool capital and skills**.
- No separate business income tax — profits are taxed as the **partners' personal income**.

## Advantages

- **Easy to form** and little regulation.
- **More capital** available than for a sole trader (several contributors).
- **Diverse skills and expertise** among partners.
- Ability to respond flexibly and share the workload.

## Disadvantages

- **Unlimited liability** for general partners.
- **Disagreements** over strategy and direction are possible.
- **Profit must be shared**.
- Difficulty **dissolving** the partnership or transferring an interest.

## Sources of funding

- **Partners' pooled capital** (each contributes funds).
- Their combined strength makes it **easier to borrow** than a sole trader.
- Limited partners can be admitted specifically to provide extra finance.

## Common errors

- **Thinking all partners have limited liability.** General partners have **unlimited** liability; only limited partners are protected.
- **Believing a partnership pays a separate business tax.** Profits are taxed as the partners' personal income.
- **Assuming one partner cannot bind the others.** In a general partnership, one partner's actions can make all partners liable.`,
      workedExample: `**Question:** Two friends, Kofi and Ama, run a shop together as general partners; a third person, Bea, invests money but takes no part in running it and her liability is limited to her investment. The firm runs up a large debt. (a) Name this form of business. (b) Classify each person. (c) Explain each person's liability for the debt.

**Solution**

(a) An association of two or more people running a business for profit is a **partnership** (here a **limited partnership**, since it has both general and limited partners).

(b) **Kofi and Ama** are **general partners** (they manage the business); **Bea** is a **limited partner** (she invests but does not manage).

(c) Kofi and Ama have **unlimited liability** — they are personally responsible for the whole debt, and each can be held liable for all of it. Bea, as a **limited partner**, is liable only up to the **amount she invested**; her other personal assets are protected.

**Answer:** It is a (limited) partnership; Kofi and Ama are general partners with unlimited liability for the full debt; Bea is a limited partner liable only to the extent of her investment.`,
      quiz: [
        { prompt: "A partnership is an association of", options: ["one person", "two or more individuals running a business for profit", "shareholders only", "the government"], correctIndex: 1, explanation: "Two or more people operate it for profit." },
        { prompt: "A written partnership agreement is", options: ["illegal", "strongly advised", "never used", "issued by the state"], correctIndex: 1, explanation: "A written deed is recommended." },
        { prompt: "In a general partnership, partners' liability is", options: ["limited", "unlimited", "zero", "the state's"], correctIndex: 1, explanation: "General partners have unlimited liability." },
        { prompt: "A limited partner's liability is limited to", options: ["nothing", "the amount they invested", "all firm debts", "their salary"], correctIndex: 1, explanation: "It is capped at their investment." },
        { prompt: "A limited partner usually", options: ["manages day-to-day", "provides capital but does not manage", "owns no share", "controls the firm"], correctIndex: 1, explanation: "Limited partners finance but do not run the business." },
        { prompt: "An advantage of a partnership over a sole trader is", options: ["less capital", "more capital and diverse skills", "unlimited liability", "double taxation"], correctIndex: 1, explanation: "Several partners bring more capital and skills." },
        { prompt: "A disadvantage of a partnership is", options: ["easy formation", "more capital", "possible disagreements among partners", "shared skills"], correctIndex: 2, explanation: "Partners may disagree over direction." },
        { prompt: "Partnership profits are taxed as", options: ["corporate profit", "the partners' personal income", "not taxed", "sales tax"], correctIndex: 1, explanation: "There is no separate partnership income tax." },
        { prompt: "Partnerships are funded mainly by", options: ["public share issues", "the partners' pooled capital", "government only", "bonds only"], correctIndex: 1, explanation: "Partners pool their capital." },
        { prompt: "In a general partnership, one partner's actions can", options: ["never affect the others", "make all partners liable", "only bind that partner", "be ignored"], correctIndex: 1, explanation: "Each partner can bind the firm." },
        { prompt: "The minimum number of people in a partnership is", options: ["one", "two", "seven", "twenty"], correctIndex: 1, explanation: "At least two people are needed." },
        { prompt: "Which partner has unlimited liability?", options: ["Limited partner", "General partner", "Silent investor only", "None"], correctIndex: 1, explanation: "General partners have unlimited liability." },
        { prompt: "A benefit of pooling partners' skills is", options: ["less expertise", "diverse managerial expertise", "unlimited liability", "double taxation"], correctIndex: 1, explanation: "Partners bring varied expertise." },
        { prompt: "Dissolving a partnership or transferring an interest is often", options: ["very easy", "difficult", "automatic", "done by shareholders"], correctIndex: 1, explanation: "It can be difficult." },
        { prompt: "Compared with a sole trader, a partnership finds borrowing", options: ["harder", "easier due to combined strength", "impossible", "unnecessary"], correctIndex: 1, explanation: "Combined resources ease borrowing." },
        { prompt: "A key drawback shared by sole traders and general partners is", options: ["limited liability", "unlimited liability", "no profit", "public reporting"], correctIndex: 1, explanation: "Both have unlimited liability." },
        { prompt: "Profit in a partnership must be", options: ["kept by one partner", "shared among the partners", "given to the state", "reinvested only"], correctIndex: 1, explanation: "Profit is shared." },
        { prompt: "Which is TRUE of a limited partnership?", options: ["All partners manage equally", "It has both general and limited partners", "No one has liability", "It is state-owned"], correctIndex: 1, explanation: "It mixes general and limited partners." },
        { prompt: "Extra finance can be raised by admitting", options: ["a new limited partner", "the government", "the public via shares", "a board of directors"], correctIndex: 0, explanation: "A limited partner can supply extra capital." },
        { prompt: "The partnership form is best described as", options: ["one owner, limited liability", "several owners sharing profits, often unlimited liability", "public company", "state enterprise"], correctIndex: 1, explanation: "Several owners share profits; general partners have unlimited liability." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a partnership and distinguish a general partner from a limited partner.", answerKey: "A partnership is an association of two or more individuals who agree to operate a business together for profit. A general partner shares management and profits and has unlimited liability for the firm's debts; a limited partner contributes capital, does not manage day-to-day, and has liability limited to the amount invested. Award 4 for the definition, 3 per partner type.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of a partnership.", answerKey: "Advantages (any two): easy formation; more capital than a sole trader; diverse skills/expertise; shared workload; little regulation. Disadvantages (any two): unlimited liability for general partners; disagreements; profit must be shared; difficulty dissolving/transferring interest. Award 2 per correct point.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "In a general partnership, if one partner incurs a large business debt", options: ["only that partner is liable", "all partners can be held liable", "no one is liable", "only limited partners are liable"], correctIndex: 1, answerKey: "General partners have unlimited liability and can each be liable for all debts. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how a partnership raises more capital than a sole proprietorship.", answerKey: "Several partners pool their personal capital, and their combined financial strength makes lenders more willing to advance funds; a limited partner can also be admitted to provide additional finance. This gives access to more capital than a single owner could raise. Award marks for pooled capital and easier borrowing/limited partner.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the partnership as a form of business, covering its definition, types of partner, features, advantages, disadvantages and funding.", answerKey: "Award marks for: definition (two or more for profit, agreement/deed), 5; general vs limited partners and their liability, 6; features (shared ownership/profit, personal-income tax), 5; advantages (more capital, diverse skills, easy formation), 5; disadvantages (unlimited liability, disagreements, shared profit, hard to dissolve), 6; funding (pooled capital, easier borrowing), 3. A script omitting the general/limited distinction should not exceed 18.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Business, 4.3 Corporations: Limiting Your Liability (https://openstax.org/books/introduction-business/pages/4-3-corporations-limiting-your-liability)
    {
      slug: "companies-and-joint-stock-corporations",
      title: "Companies and Joint-Stock Corporations",
      objective:
        "By the end of the topic, learners should be able to define a corporation (joint-stock company), state its features, list its advantages and disadvantages, and explain how it raises capital.",
      estimatedMinutes: 120,
      notes: `## Definition

**Corporation (joint-stock company)** — a **legal entity, separate from its owners**, created by state charter, with the right to operate as a business.
- Ownership is divided into **shares of stock**; the shareholders are the owners.
- A **joint-stock company** is a company whose capital is jointly held by many owners through shares — the older name for what is today the limited company/corporation.

## Main features

- **Separate legal entity** — the company can own property, make contracts and sue or be sued in its own name, apart from its owners.
- **Shareholders and stock** — owners hold shares that carry voting rights and a claim on dividends, and can transfer (sell) their shares.
- **Board of directors** — elected by shareholders to set goals, appoint officers and oversee the company.
- **Limited liability** — a shareholder's liability is **limited to the amount of stock they own**; personal assets are protected.

## Advantages

- **Limited liability** for owners.
- **Easy transfer of ownership** by selling shares.
- **Unlimited (perpetual) life** — the company continues even if owners change.
- **Superior ability to raise capital** through issuing shares and borrowing.
- Tax-deductible operating expenses.

## Disadvantages

- **Double taxation** — company profits are taxed, and shareholders' dividends are taxed again.
- **Expensive and complex** to set up.
- Heavy **government regulation and reporting** requirements.
- **Reduced privacy** — public companies must disclose financial information.

## Sources of funding

- **Issuing (selling) new shares of stock** to investors — the defining method.
- **Borrowing** from banks, and (for large companies) issuing **bonds**.
- Retained profits reinvested in the business.

## Private and public companies

- A **private limited company** cannot sell shares to the general public; shares are held by a small group.
- A **public limited company** can sell shares to the public, often on a stock exchange, raising large amounts of capital.

## Common errors

- **Thinking shareholders run the company day-to-day.** They elect a **board of directors**, which appoints managers.
- **Confusing limited with unlimited liability.** A shareholder can lose only what they invested in shares.
- **Forgetting double taxation.** Corporate profit and dividends are both taxed.`,
      workedExample: `**Question:** A company issues 10,000 shares to the public and is run by a board elected by shareholders. It later collapses owing large debts. Zoe owns 100 shares she paid 500 dollars for. (a) What form of business is this? (b) State two features. (c) How much can Zoe lose?

**Solution**

(a) A separate legal entity owned through shares of stock is a **corporation (joint-stock / public limited company)**.

(b) Features: it is a **separate legal person** (owns property and contracts in its own name); ownership is in **shares** that can be transferred; it is run by a **board of directors** elected by shareholders; shareholders have **limited liability**.

(c) Because of **limited liability**, Zoe can lose only the amount she put into her shares — the **500 dollars** she paid. Her other personal assets are **protected**; she is not personally responsible for the company's debts beyond her shareholding.

**Answer:** It is a corporation/public limited company; features include separate legal identity, transferable shares, a board of directors and limited liability; Zoe can lose at most her 500-dollar investment.`,
      quiz: [
        { prompt: "A corporation is", options: ["the same as its owners", "a legal entity separate from its owners", "owned by one person", "always state-owned"], correctIndex: 1, explanation: "It is a separate legal entity." },
        { prompt: "Ownership of a corporation is divided into", options: ["partners", "shares of stock", "sole owners", "board seats only"], correctIndex: 1, explanation: "Shareholders own shares of stock." },
        { prompt: "Shareholders' liability is", options: ["unlimited", "limited to the amount of stock they own", "zero", "the board's"], correctIndex: 1, explanation: "Limited liability caps loss at the investment." },
        { prompt: "A corporation is run day-to-day under a", options: ["single owner", "board of directors elected by shareholders", "government minister", "limited partner"], correctIndex: 1, explanation: "Shareholders elect a board." },
        { prompt: "An advantage of a corporation is", options: ["unlimited liability", "unlimited (perpetual) life", "no ability to raise capital", "simple formation"], correctIndex: 1, explanation: "The company continues beyond its owners." },
        { prompt: "A disadvantage of a corporation is", options: ["limited liability", "double taxation", "easy transfer of shares", "perpetual life"], correctIndex: 1, explanation: "Profit and dividends are both taxed." },
        { prompt: "Corporations raise capital mainly by", options: ["one owner's savings", "selling shares of stock", "partners' pooled funds only", "no external finance"], correctIndex: 1, explanation: "Issuing shares is the defining method." },
        { prompt: "A joint-stock company is one whose capital is", options: ["held by one person", "jointly held by many owners through shares", "provided by the state", "borrowed only"], correctIndex: 1, explanation: "Many owners hold shares jointly." },
        { prompt: "A public limited company can", options: ["never sell shares", "sell shares to the general public", "have only one owner", "avoid all regulation"], correctIndex: 1, explanation: "Public companies sell shares to the public." },
        { prompt: "A private limited company", options: ["sells shares to the public", "cannot sell shares to the general public", "has no shares", "is state-owned"], correctIndex: 1, explanation: "Private companies restrict share ownership." },
        { prompt: "'Separate legal entity' means the company can", options: ["not own property", "own property and make contracts in its own name", "never be sued", "avoid tax"], correctIndex: 1, explanation: "It acts in its own name, apart from owners." },
        { prompt: "Double taxation refers to tax on", options: ["shares only", "company profit and again on dividends", "wages twice", "imports"], correctIndex: 1, explanation: "Both corporate profit and dividends are taxed." },
        { prompt: "Shareholders can change without ending the company because it has", options: ["unlimited liability", "perpetual life", "one owner", "no board"], correctIndex: 1, explanation: "Perpetual life means continuity." },
        { prompt: "Setting up a corporation is", options: ["simple and cheap", "expensive and complex", "impossible", "free"], correctIndex: 1, explanation: "Formation is complex and costly." },
        { prompt: "Which body do shareholders elect?", options: ["The workforce", "The board of directors", "The government", "Limited partners"], correctIndex: 1, explanation: "Shareholders elect the board." },
        { prompt: "A shareholder who paid 500 dollars for shares can lose at most", options: ["nothing", "500 dollars", "all their assets", "the company's debts"], correctIndex: 1, explanation: "Limited liability caps loss at the investment." },
        { prompt: "Large corporations may also raise finance by issuing", options: ["partnership deeds", "bonds", "sole-trader loans", "cooperative shares"], correctIndex: 1, explanation: "Bonds are a corporate borrowing tool." },
        { prompt: "Public companies must", options: ["keep all finances secret", "disclose financial information", "avoid regulation", "have one owner"], correctIndex: 1, explanation: "Reduced privacy is a disadvantage." },
        { prompt: "Which is an advantage over a sole proprietorship?", options: ["Unlimited liability", "Superior ability to raise capital", "One owner only", "No regulation"], correctIndex: 1, explanation: "Corporations raise capital more easily." },
        { prompt: "Transferring ownership of a corporation is done by", options: ["dissolving it", "selling shares", "changing the name", "electing partners"], correctIndex: 1, explanation: "Ownership transfers by selling shares." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a corporation (joint-stock company) and state two of its features.", answerKey: "A corporation is a legal entity separate from its owners, created by state charter, with ownership divided into shares of stock (a joint-stock company has its capital jointly held through shares). Features (any two): separate legal entity; shareholders own transferable shares; a board of directors runs it; limited liability. Award 4 for the definition, 2 per feature.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "State two advantages and two disadvantages of a corporation.", answerKey: "Advantages (any two): limited liability; easy transfer of shares; perpetual life; superior ability to raise capital. Disadvantages (any two): double taxation; expensive/complex formation; heavy regulation and reporting; reduced privacy. Award 2 per correct point.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "Limited liability means a shareholder can lose at most", options: ["all their personal assets", "the amount they invested in shares", "nothing at all", "the company's total debt"], correctIndex: 1, answerKey: "A shareholder's loss is limited to their investment in the shares. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Explain how a corporation raises capital and why this ability exceeds that of a sole proprietorship.", answerKey: "A corporation issues (sells) shares of stock to many investors, and can borrow from banks or issue bonds. Because ownership is split into affordable shares with limited liability, and the company is a stable, perpetual legal entity, it can attract far more capital than a single owner relying on personal funds. Award marks for share issue, borrowing/bonds, and the comparison with a sole trader.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the corporation (joint-stock company) as a form of business, covering its definition, features, advantages, disadvantages and sources of funding, and distinguish private from public companies.", answerKey: "Award marks for: definition (separate legal entity owned through shares), 5; features (separate legal person, shares, board, limited liability), 6; advantages (limited liability, transferable shares, perpetual life, capital-raising), 6; disadvantages (double taxation, complex/costly formation, regulation, reduced privacy), 6; funding (issuing shares, borrowing/bonds), 4; private vs public company, 3. A script omitting funding or the private/public split loses proportionally.", marks: 30 },
      ],
    },
    // source: OpenStax — Introduction to Business 2e, 4.4 Specialized Forms of Business Organization (cooperatives, joint ventures) (https://openstax.org/books/introduction-business-2e/pages/4-4-specialized-forms-of-business-organization) and OpenStax — Principles of Economics 3e, 1.4 economic systems: government/public ownership (https://openstax.org/books/principles-economics-3e/pages/1-4-how-to-organize-economies-an-overview-of-economic-systems)
    {
      slug: "cooperatives-statutory-corporations-and-joint-ventures",
      title: "Cooperatives, Statutory Corporations and Joint Ventures",
      objective:
        "By the end of the topic, learners should be able to define a cooperative, a statutory (public) corporation and a joint venture, and state the main features and purpose of each.",
      estimatedMinutes: 120,
      notes: `## Cooperative (co-op)

**Cooperative** — a business **owned and democratically controlled by its members** — the people who buy its goods or use its services — not by outside investors.
- **Purpose:** to meet the needs of the member-owners, not to make profit for investors.
- **Features:** limited liability, an unlimited life span, an elected board of directors and administrative staff; members pay fees and **share profits in proportion to their contribution** (patronage). Because it does not retain profits, it is often not taxed.
- **One member, one vote** — control is democratic, not by size of shareholding.

**Types of cooperative:**
- **Buyer (consumer) cooperative** — members pool their **purchasing power** to buy in bulk at lower prices.
- **Seller (producer) cooperative** — producers combine to market their goods and compete with larger firms (e.g. farmers selling together).

**Cooperative principles** (in brief): voluntary open membership; democratic member control; members' economic participation; autonomy; education and training; cooperation among cooperatives; concern for community.

## Statutory (public) corporation

**Statutory corporation (public corporation)** — a business **owned by the government (the state)** and set up by a law (statute) to provide a public service or run a key industry.
- Under state ownership, key industries are **nationalised and directly controlled by the government**.
- **Purpose:** to provide essential services (water, electricity, ports, broadcasting) rather than only to make profit.
- **Features:** owned by the state on behalf of the public; run by a board appointed by government; financed largely from **public funds** and its own revenue; accountable to the government/public.

## Joint venture

**Joint venture** — an alliance in which **two or more companies join together to pursue a specific project**, usually for a **set period of time**.
- **Purpose:** to share the cost, risk and expertise of a large or new project.
- By sharing management, technology and finance, firms **reduce the risk** of a new enterprise and gain access to markets, products or technology neither could reach alone.

## Common errors

- **Thinking a cooperative aims to profit outside investors.** It exists to serve its **member-owners**.
- **Confusing a statutory corporation with a private company.** A statutory corporation is **state-owned**, created by law for public service.
- **Thinking a joint venture is a permanent merger.** It is usually for a **specific project and a limited time**; the firms stay separate.`,
      workedExample: `**Question:** Match each situation to a form of business and give one feature: (a) local farmers combine to sell rice together and share the proceeds by how much each supplied; (b) the government sets up, by law, a body to run the national electricity supply; (c) two car firms team up for four years to develop one new vehicle.

**Solution**

(a) Farmers combining to market their produce and sharing proceeds by contribution is a **(seller/producer) cooperative**. Feature: owned and democratically controlled by its members (one member, one vote), sharing profit in proportion to contribution.

(b) A body created **by law** and **owned by the government** to run electricity is a **statutory (public) corporation**. Feature: state-owned, run by a government-appointed board to provide a public service.

(c) Two firms joining for a set period on one project is a **joint venture**. Feature: the firms share cost, risk and expertise for a specific project and limited time, then remain separate.

**Answer:** (a) cooperative, (b) statutory (public) corporation, (c) joint venture — each defined by who owns it and why it is formed.`,
      quiz: [
        { prompt: "A cooperative is owned and controlled by its", options: ["outside investors", "members", "the government", "a single owner"], correctIndex: 1, explanation: "Members own and control a cooperative." },
        { prompt: "The purpose of a cooperative is to", options: ["profit outside investors", "meet the needs of its member-owners", "serve the government", "avoid all members"], correctIndex: 1, explanation: "It serves its members, not investors." },
        { prompt: "Cooperatives usually operate on the principle of", options: ["one share, one vote", "one member, one vote", "the state votes", "no voting"], correctIndex: 1, explanation: "Control is democratic — one member, one vote." },
        { prompt: "A buyer (consumer) cooperative pools members'", options: ["votes only", "purchasing power to buy in bulk", "farms", "shares on an exchange"], correctIndex: 1, explanation: "Members combine buying power for lower prices." },
        { prompt: "A seller (producer) cooperative helps producers", options: ["compete with larger firms by marketing together", "avoid selling", "pay more tax", "give up ownership"], correctIndex: 0, explanation: "Producers combine to market and compete." },
        { prompt: "Cooperative profits are shared", options: ["equally regardless of use", "in proportion to each member's contribution", "with investors", "with the state"], correctIndex: 1, explanation: "Profits are shared by patronage/contribution." },
        { prompt: "A statutory (public) corporation is owned by", options: ["shareholders", "the government (the state)", "one person", "a cooperative"], correctIndex: 1, explanation: "It is state-owned." },
        { prompt: "A statutory corporation is set up by", options: ["a partnership deed", "a law (statute)", "a stock issue", "member fees"], correctIndex: 1, explanation: "It is created by statute." },
        { prompt: "The main purpose of a statutory corporation is to", options: ["maximise private profit", "provide an essential public service", "sell shares publicly", "serve one owner"], correctIndex: 1, explanation: "It provides public services." },
        { prompt: "A joint venture is formed when", options: ["one firm buys another forever", "two or more firms ally for a specific project and time", "a sole trader expands", "the state nationalises a firm"], correctIndex: 1, explanation: "It is a temporary alliance for a project." },
        { prompt: "The purpose of a joint venture is to", options: ["increase risk", "share cost, risk and expertise on a project", "avoid all partners", "end both firms"], correctIndex: 1, explanation: "Firms share cost, risk and expertise." },
        { prompt: "After a joint venture ends, the firms", options: ["merge permanently", "remain separate companies", "become cooperatives", "become state-owned"], correctIndex: 1, explanation: "They stay separate; the venture is temporary." },
        { prompt: "Which is TRUE of a cooperative?", options: ["It has no liability limit", "It has limited liability and an unlimited life span", "It is owned by the state", "It sells shares on an exchange"], correctIndex: 1, explanation: "Cooperatives have limited liability and unlimited life." },
        { prompt: "Water and electricity supply are often run by", options: ["sole traders", "statutory (public) corporations", "joint ventures only", "buyer cooperatives"], correctIndex: 1, explanation: "Public utilities are often statutory corporations." },
        { prompt: "A cooperative that does not retain profits is often", options: ["heavily taxed", "not subject to tax", "state-owned", "a corporation"], correctIndex: 1, explanation: "Distributing all profit means it is often untaxed." },
        { prompt: "A statutory corporation is run by", options: ["one owner", "a board appointed by government", "member votes only", "shareholders"], correctIndex: 1, explanation: "A government-appointed board runs it." },
        { prompt: "Two firms sharing technology and finance for one new product form a", options: ["cooperative", "joint venture", "sole proprietorship", "statutory corporation"], correctIndex: 1, explanation: "That is a joint venture." },
        { prompt: "Cooperative principles include", options: ["closed membership", "voluntary and open membership", "state control", "single ownership"], correctIndex: 1, explanation: "Voluntary, open membership is a core principle." },
        { prompt: "A statutory corporation is financed largely from", options: ["public funds and its own revenue", "member fees only", "a single owner", "joint-venture partners"], correctIndex: 0, explanation: "It uses public funds and its revenue." },
        { prompt: "Which correctly pairs form and owner?", options: ["Cooperative then the state", "Statutory corporation then members", "Joint venture then allied companies", "Cooperative then one person"], correctIndex: 2, explanation: "A joint venture is owned by the allied companies." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define a cooperative and state two of its features.", answerKey: "A cooperative is a business owned and democratically controlled by its members (who use its goods or services), formed to meet members' needs rather than to profit outside investors. Features (any two): one member, one vote; limited liability; unlimited life span; elected board; profits shared in proportion to contribution; often untaxed. Award 4 for the definition, 2 per feature.", marks: 8 },
        { type: "SHORT_ANSWER", prompt: "Define a statutory (public) corporation and state its main purpose.", answerKey: "A statutory corporation is a business owned by the government (state) and created by law (statute), run by a government-appointed board. Its main purpose is to provide an essential public service or run a key industry (water, electricity, ports) rather than only to make profit. Award 4 for the definition, 2 for the purpose.", marks: 6 },
        { type: "MULTIPLE_CHOICE", prompt: "A joint venture is best described as", options: ["a permanent merger of two firms", "an alliance of two or more firms for a specific project and limited time", "a state-owned enterprise", "a one-owner business"], correctIndex: 1, answerKey: "A joint venture is a temporary alliance for a specific project; the firms remain separate. Option B.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "Distinguish a buyer cooperative from a seller cooperative.", answerKey: "A buyer (consumer) cooperative pools members' purchasing power to buy in bulk at lower prices. A seller (producer) cooperative is formed by producers who combine to market their goods and compete with larger firms. Award 3 per type with the contrast.", marks: 6 },
        { type: "ESSAY", prompt: "Compare the cooperative, the statutory (public) corporation and the joint venture, explaining who owns each, why it is formed, and its main features.", answerKey: "Award marks for: cooperative — member-owned, democratic control, serves members, profit by contribution, limited liability, 8; statutory corporation — state-owned, created by law, provides public services, government board, public funds, 8; joint venture — alliance of firms for a specific project and limited time to share cost/risk/expertise, 8; a clear comparison of ownership and purpose, 4; terminology, 2. A script covering fewer than three forms loses proportionally.", marks: 30 },
      ],
    },
    // source: LibreTexts Social Sci — 16.1 Economic Systems: nationalization / public ownership vs private enterprise (https://socialsci.libretexts.org/Courses/Solano_Community_College/SOC_002:_Social_Issues_and_Problems/16:_Economy/16.01:_Economic_Systems) and OpenStax — Principles of Economics 3e, 1.4 How To Organize Economies: private enterprise, regulation, mixed economy (https://openstax.org/books/principles-economics-3e/pages/1-4-how-to-organize-economies-an-overview-of-economic-systems)
    {
      slug: "business-enterprise-policy",
      title: "Business Enterprise Policy: Privatization, Commercialization, Indigenization and Nationalization",
      objective:
        "By the end of the topic, learners should be able to define and distinguish privatization, commercialization, indigenization and nationalization as government policies toward business ownership.",
      estimatedMinutes: 120,
      notes: `## Government and business ownership

- A government can change **who owns and controls** businesses. The four main policy moves are privatization, commercialization, indigenization and nationalization.
- These sit on the line between **private enterprise** (private individuals own the means of production) and **public (state) ownership** (the government owns key industries).

## Nationalization

**Nationalization** — the government **takes a privately owned business or industry into state ownership** and control.
- Under state ownership, "key industries are nationalised and directly controlled by the government".
- *Aims:* to control strategic or essential industries, secure public services, or capture their revenue for the state.

## Privatization

**Privatization** — the reverse of nationalization: **transferring a state-owned business into private ownership**, usually by selling it (often through a share sale) to private individuals or firms.
- *Aims:* to raise efficiency and competition, attract private capital and management, and reduce the burden on the state.
- *Concerns:* possible loss of public control, reduced accountability, and services shaped by profit rather than need.

## Commercialization

**Commercialization** — a state-owned enterprise is **required to run on business (commercial) lines** — covering its costs and aiming to make a profit — **while remaining owned by the government**.
- It stops short of full privatization: ownership stays public, but the enterprise must behave like a private business and rely less on government subsidy.

## Indigenization

**Indigenization** — a policy requiring that **ownership and control of businesses be transferred to, or reserved for, citizens (indigenes)** of the country rather than foreigners.
- *Aim:* to increase local (national) participation and control in the economy and reduce foreign dominance.

## Comparison

| Policy | What changes | Ownership after |
| --- | --- | --- |
| Nationalization | Private business taken over by state | Government (public) |
| Privatization | State business sold to private owners | Private |
| Commercialization | State firm made to run for profit | Government (public) |
| Indigenization | Ownership shifted to citizens | Citizens/nationals |

## Common errors

- **Confusing privatization with nationalization.** Privatization = state to private; nationalization = private to state (opposites).
- **Thinking commercialization means selling the firm.** Ownership stays with the state; only its way of operating changes.
- **Reading indigenization as nationalization.** Indigenization moves ownership to **citizens**, not necessarily to the **state**.`,
      workedExample: `**Question:** For each government action, name the policy: (a) the state sells the national telephone company to private investors; (b) the state takes over all private oil companies; (c) a state-owned railway is told it must now cover its own costs and make a profit while staying state-owned; (d) a law requires that retail shops be owned by citizens of the country.

**Solution**

(a) Selling a **state-owned** firm to **private** investors is **privatization** (state to private).

(b) The state **taking over private** oil companies into public ownership is **nationalization** (private to state).

(c) Making a **state-owned** railway run on business lines for profit **while it stays state-owned** is **commercialization** (operation changes, ownership stays public).

(d) Requiring businesses to be **owned by citizens** rather than foreigners is **indigenization** (ownership moved to nationals).

**Answer:** (a) privatization, (b) nationalization, (c) commercialization, (d) indigenization — distinguished by the direction of the change in ownership or control.`,
      quiz: [
        { prompt: "Nationalization means the government", options: ["sells a firm to private owners", "takes a private business into state ownership", "makes a firm run for profit", "gives firms to citizens"], correctIndex: 1, explanation: "Private to state ownership." },
        { prompt: "Privatization means", options: ["state takeover of a firm", "transferring a state firm into private ownership", "making a firm citizen-owned", "closing a firm"], correctIndex: 1, explanation: "State to private ownership." },
        { prompt: "Privatization and nationalization are", options: ["the same thing", "opposite policies", "both state takeovers", "both citizen policies"], correctIndex: 1, explanation: "They move ownership in opposite directions." },
        { prompt: "Commercialization requires a state-owned firm to", options: ["be sold off", "run on business lines and aim for profit while staying state-owned", "be given to citizens", "close down"], correctIndex: 1, explanation: "Ownership stays public; operation becomes commercial." },
        { prompt: "Indigenization transfers ownership to", options: ["the state", "foreign firms", "citizens (nationals)", "cooperatives only"], correctIndex: 2, explanation: "It reserves ownership for citizens." },
        { prompt: "A common aim of privatization is to", options: ["reduce competition", "raise efficiency and attract private capital", "increase state control", "ban private firms"], correctIndex: 1, explanation: "Privatization aims at efficiency and private investment." },
        { prompt: "Under commercialization, ownership of the enterprise", options: ["moves to private owners", "stays with the government", "moves to foreigners", "is dissolved"], correctIndex: 1, explanation: "Only the way it operates changes." },
        { prompt: "A government selling shares of a state firm to the public is carrying out", options: ["nationalization", "privatization", "indigenization", "commercialization"], correctIndex: 1, explanation: "Selling to private owners is privatization." },
        { prompt: "Taking key strategic industries under direct state control is", options: ["privatization", "nationalization", "commercialization", "indigenization"], correctIndex: 1, explanation: "That is nationalization." },
        { prompt: "The aim of indigenization is to", options: ["increase foreign ownership", "increase local (national) participation and control", "reduce citizen ownership", "sell to the state"], correctIndex: 1, explanation: "It boosts local ownership." },
        { prompt: "A concern about privatization is", options: ["more state control", "possible loss of public control and accountability", "no private capital", "guaranteed low prices"], correctIndex: 1, explanation: "Public control and accountability may fall." },
        { prompt: "Which policy keeps state ownership but demands profitability?", options: ["Privatization", "Nationalization", "Commercialization", "Indigenization"], correctIndex: 2, explanation: "Commercialization keeps ownership public." },
        { prompt: "After nationalization, a business is owned by", options: ["private investors", "the government", "citizens only", "a joint venture"], correctIndex: 1, explanation: "Nationalization gives the state ownership." },
        { prompt: "After privatization, a business is owned by", options: ["the state", "private individuals or firms", "no one", "the workers only"], correctIndex: 1, explanation: "Ownership becomes private." },
        { prompt: "Indigenization differs from nationalization because it moves ownership to", options: ["the state", "citizens rather than necessarily the state", "foreigners", "cooperatives"], correctIndex: 1, explanation: "Indigenization targets citizens, not the state." },
        { prompt: "A private enterprise economy is one where", options: ["the state owns all firms", "private individuals own the means of production", "no one owns firms", "only cooperatives exist"], correctIndex: 1, explanation: "Private enterprise means private ownership." },
        { prompt: "Which pair are opposites?", options: ["Commercialization and indigenization", "Privatization and nationalization", "Nationalization and indigenization", "Privatization and commercialization"], correctIndex: 1, explanation: "Privatization and nationalization are opposites." },
        { prompt: "Selling a loss-making state airline to a private company is", options: ["nationalization", "privatization", "commercialization", "indigenization"], correctIndex: 1, explanation: "State to private ownership is privatization." },
        { prompt: "Requiring a state water utility to charge fees and cover its costs while staying public is", options: ["privatization", "commercialization", "nationalization", "indigenization"], correctIndex: 1, explanation: "That is commercialization." },
        { prompt: "The four policies all concern", options: ["prices only", "who owns and controls businesses", "taxes only", "exports only"], correctIndex: 1, explanation: "They change business ownership and control." },
      ],
      test: [
        { type: "SHORT_ANSWER", prompt: "Define privatization and nationalization and state how they differ.", answerKey: "Privatization is transferring a state-owned business into private ownership (usually by sale). Nationalization is the government taking a privately owned business or industry into state ownership and control. They are opposites: privatization moves ownership from state to private; nationalization from private to state. Award 4 per definition, 2 for the contrast.", marks: 10 },
        { type: "SHORT_ANSWER", prompt: "Explain what commercialization means and how it differs from privatization.", answerKey: "Commercialization requires a state-owned enterprise to run on commercial lines — covering its costs and aiming for profit — while remaining owned by the government. It differs from privatization because ownership stays with the state; only the way the enterprise operates changes, whereas privatization actually transfers ownership to private hands. Award 4 for commercialization, 4 for the contrast with privatization.", marks: 8 },
        { type: "MULTIPLE_CHOICE", prompt: "A law reserving business ownership for citizens rather than foreigners is", options: ["privatization", "nationalization", "commercialization", "indigenization"], correctIndex: 3, answerKey: "Indigenization moves ownership to citizens/nationals. Option D.", marks: 3 },
        { type: "SHORT_ANSWER", prompt: "State one aim and one concern of privatization.", answerKey: "Aim (any one): raise efficiency and competition; attract private capital and management; reduce the burden on the state. Concern (any one): loss of public control; reduced accountability; services driven by profit rather than need. Award 3 for a valid aim, 3 for a valid concern.", marks: 6 },
        { type: "ESSAY", prompt: "Discuss the four business enterprise policies — privatization, commercialization, indigenization and nationalization — explaining what each changes and evaluating the case for and against government involvement in business.", answerKey: "Award marks for: nationalization (private to state) with its aims, 6; privatization (state to private) with aims and concerns, 6; commercialization (state firm run for profit, ownership stays public), 6; indigenization (ownership to citizens), 5; a balanced evaluation of state versus private ownership (efficiency and capital under private ownership vs public control and essential services under state ownership), 5; terminology, 2. A script that confuses privatization and nationalization should not exceed 15.", marks: 30 },
      ],
    },
  ],
};
