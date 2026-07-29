# Nuvex

A teacher-focused platform for Liberian schools. Teachers get ready-made,
Ministry of Education-aligned lesson notes and plans by subject, grade and
period — plus **Nyvora**, an AI teaching assistant to help them prep faster.

Launch scope: **Grade 10, Period 1, all 12 subjects.**

## Features

- **Login with username or phone number** — real auth with hashed passwords and
  server-side sessions (signed JWT cookie).
- **12 subjects** for Grade 10 Period 1: English, Mathematics, Biology,
  Chemistry, Physics, Geography, History, Civics, Economics, Agriculture,
  Literature and Computer Science.
- **Full lesson notes** for every topic — objective, notes, worked example and a
  teaching tip written the way a teacher would deliver it.
- **10 practice quiz questions** per topic, interactive and self-marking, for
  use with a class.
- **5 teacher-only test questions** per topic, each with a marking key, gated
  behind a per-subject **subject code**.
- **Nyvora AI assistant** with metered usage — Free 15/week, Weekly 80,
  Monthly 350, Yearly 4,200 messages, enforced against a rolling quota window.
- **Mobile money payments** — pay for a plan with **Orange Money** (hosted web
  payment) or **Lonestar Cell MoMo** (MTN MoMo request-to-pay). A successful
  payment extends the subscription; plans do not auto-renew.
- **Dark / light theme** with no flash of the wrong theme on load.

## Stack

- **Next.js 15** (App Router, React 19, server actions)
- **PostgreSQL + Prisma**
- **Tailwind CSS**
- **Anthropic API** for Nyvora
- **Orange Money** and **Lonestar Cell (MTN MoMo)** for payments

## Getting started

### 1. Install

```bash
npm install
```

### 2. Configure environment

Copy the example and fill in the values:

```bash
cp .env.example .env
```

At a minimum you need `DATABASE_URL` and `AUTH_SECRET` to run the app locally.
`ANTHROPIC_API_KEY` enables Nyvora; the mobile money credentials enable billing.
The app runs without the optional keys — those features simply report that they
are not configured, and payment providers only appear once their credentials are
present.

### 3. Set up the database

```bash
npm run db:push     # create the schema
npm run db:seed     # load Grade 10 Period 1 curriculum
```

### 4. Run

```bash
npm run dev
```

Open http://localhost:3000.

## Subject codes

The five test questions per topic are gated behind a per-subject code that a
teacher enters once. The codes are defined in each subject's content file
(`src/content/grade10/period1/*.ts`) and stored **hashed** in the database. For
example, Mathematics uses `MTH-10-4471`. Distribute these to teachers through
your school's own channel.

## Curriculum content

All curriculum lives in `src/content/grade10/period1/`, one file per subject,
typed against `src/content/types.ts`. The seed script
(`prisma/seed.ts`) is idempotent — re-run `npm run db:seed` after editing content
to update the database. Quiz and test questions are replaced wholesale on each
seed so edits propagate cleanly.

To add another period or grade, add a `PeriodContent` entry to a subject and
re-seed. The UI reads whatever is in the database.

## How metering works

Every account has a `Subscription` row, including Free accounts, which defines
the current quota window. Each Nyvora exchange records one `NyvoraUsage` row.
`getQuota` counts usage since the window start and reconciles the subscription
with the clock: a lapsed paid plan reverts to a fresh FREE window, and a lapsed
FREE window rolls forward. This means the plan stays correct even if a provider
callback never arrives.

## Payments (mobile money)

Teachers pay for a plan period up front with **Orange Money** or **Lonestar
Cell MoMo**. Both are real integrations wired to the providers' documented APIs;
they need a **merchant account** with each provider to go live (there is no
instant self-serve key like Stripe). Until a provider's credentials are set, it
is hidden from the checkout UI, and the app runs normally.

- **Lonestar Cell MoMo** — MTN MoMo **Collections** API (`request-to-pay`). A
  PIN prompt is pushed to the teacher's phone; we poll for the result.
  Credentials come from momodeveloper.mtn.com. Set `LONESTAR_MOMO_*` in `.env`.
  A sandbox base URL is supported for testing.
- **Orange Money** — Orange Money **Web Payment** API. The teacher is redirected
  to Orange's hosted page and returned to `/billing/confirm`. Credentials come
  from an Orange Money Liberia merchant account (developer.orange.com); confirm
  the base URL, country segment and currency with Orange Liberia. Set
  `ORANGE_MONEY_*` in `.env`.

Flow: `startPayment` (server action) creates a PENDING `Payment` and asks the
provider to collect. `/billing/confirm` polls `/api/payments/[id]/status`, which
re-queries the provider and grants the plan on success. Providers also POST to
`/api/payments/callback/[provider]`; that callback is used only to identify the
payment and re-query the provider — a spoofed callback can never grant a plan.
Payments are priced in `PAYMENT_CURRENCY` (default USD); amounts live in
`src/lib/plans.ts`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (runs `prisma generate` first) |
| `npm run start` | Serve the production build |
| `npm run db:push` | Push the Prisma schema to the database |
| `npm run db:seed` | Seed curriculum content |
| `npm run typecheck` | Type-check without emitting |
