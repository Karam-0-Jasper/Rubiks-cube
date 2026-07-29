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
- **Stripe subscriptions** — Checkout, billing portal, and webhook-driven plan
  and quota updates.
- **Dark / light theme** with no flash of the wrong theme on load.

## Stack

- **Next.js 15** (App Router, React 19, server actions)
- **PostgreSQL + Prisma**
- **Tailwind CSS**
- **Anthropic API** for Nyvora
- **Stripe** for payments

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
`ANTHROPIC_API_KEY` enables Nyvora; the Stripe keys enable billing. The app runs
without the optional keys — those features simply report that they are not
configured.

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
`getQuota` counts usage since the window start and rolls the window forward when
it lapses. Paid windows follow the Stripe billing period, updated by the webhook
at `src/app/api/stripe/webhook/route.ts`.

## Stripe setup

1. Create three recurring prices (weekly, monthly, yearly) in the Stripe
   dashboard and put their IDs in `STRIPE_PRICE_WEEKLY` / `_MONTHLY` / `_YEARLY`.
2. Add `STRIPE_SECRET_KEY`.
3. Create a webhook endpoint pointing at `/api/stripe/webhook`, subscribe to
   `checkout.session.completed` and the `customer.subscription.*` events, and
   put the signing secret in `STRIPE_WEBHOOK_SECRET`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build (runs `prisma generate` first) |
| `npm run start` | Serve the production build |
| `npm run db:push` | Push the Prisma schema to the database |
| `npm run db:seed` | Seed curriculum content |
| `npm run typecheck` | Type-check without emitting |
