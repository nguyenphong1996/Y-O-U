# Y.O.U. — Youth Organization Union

Landing page for **Y.O.U.** (Youth Organization Union), a global alliance connecting youth organizations across 85+ countries. Built with Next.js 16.2 + Tailwind CSS 4 + shadcn/ui.

> Full implementation plan: see [`PLAN.md`](./PLAN.md)

---

## What This Site Does

- **Landing page** with 13 sections: hero, about, how it works, passport, benefits, events, pricing, gallery, testimonials, FAQ, join alliance, footer
- **Event registration** with Stripe card payments and PayPal
- **Founder application** form (free, saves to SQLite)
- **Thank You page** (`/thank-you`) with booking code after payment
- **Live countdown** to next event (Global Youth Summit, June 15 2026)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add environment variables
cp .env.local.example .env.local
# → fill in your Stripe and PayPal keys

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

The SQLite database (`data/you.db`) is created automatically on first API call. No migrations needed.

---

## Environment Variables

Create `.env.local` with:

```env
# Stripe — get from https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# PayPal — get from https://developer.paypal.com/dashboard/
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...
```

> **Never commit real keys.** `.env.local` is in `.gitignore`.
> For production, swap `sk_test_` → `sk_live_` and `pk_test_` → `pk_live_`.

---

## Project Structure

```
Y-O-U/
├── app/
│   ├── page.tsx                          # Main landing page (13 sections)
│   ├── thank-you/page.tsx                # Post-payment confirmation page
│   └── api/
│       ├── apply-founder/route.ts        # POST — save founder application
│       ├── create-payment-intent/route.ts # POST — create Stripe PaymentIntent
│       └── save-registration/route.ts    # POST — save registration + return booking code
├── components/
│   ├── countdown-timer.tsx               # Live countdown clock
│   ├── forms/
│   │   ├── event-registration-dialog.tsx # 3-step registration + payment modal
│   │   └── founder-application-form.tsx  # Free membership application form
│   └── sections/
│       ├── how-it-works-section.tsx
│       ├── benefits-section.tsx
│       ├── pricing-section.tsx           # 4 ticket tiers
│       ├── faq-section.tsx               # 10 accordion questions
│       └── testimonials-section.tsx      # 8 testimonials, auto carousel
├── lib/
│   └── db.ts                             # SQLite setup (better-sqlite3)
├── data/                                 # SQLite DB — gitignored, auto-created
│   └── you.db
└── public/
    ├── you-icon.png
    ├── you-logo-full.png
    └── you-logo-footer.png
```

---

## Payment Flow

```
User clicks "Register Now"
        ↓
EventRegistrationDialog opens
        ↓
Step 1: Fill personal info + select ticket
        ↓
POST /api/create-payment-intent
→ returns Stripe clientSecret
        ↓
Step 2: Pay with card (Stripe Elements)
        or PayPal Buttons
        ↓
Payment confirmed
        ↓
POST /api/save-registration
→ returns booking code (e.g. YOU-2026-4821)
        ↓
Step 3: Confirmation shown
        ↓
Redirect → /thank-you?booking=YOU-2026-4821
```

### Test Cards (Stripe)

| Card | Result |
|---|---|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 9995` | Insufficient funds |
| `4000 0025 0000 3155` | 3D Secure required |

Use any future expiry, any 3-digit CVV, any ZIP.

---

## Database

Auto-created at `data/you.db` on first API call. Two tables:

**`event_registrations`** — conference ticket purchases
**`founder_applications`** — free membership applications

To view data:
```bash
# Install sqlite3 CLI if needed: brew install sqlite3
sqlite3 data/you.db ".tables"
sqlite3 data/you.db "SELECT * FROM event_registrations;"
sqlite3 data/you.db "SELECT * FROM founder_applications;"
```

---

## Ticket Pricing

| Ticket | Price | Notes |
|---|---|---|
| Summit Pass | $299 | Full conference access |
| Self-Funded | $440 | All-inclusive (hotel + meals + transfers) |
| Fully Funded | $21.99 | Admin fee only — scholarship covers rest |
| Partially Funded | $21.99 | Admin fee only — partial scholarship |

---

## Events (2026)

| Event | Location | Date |
|---|---|---|
| Global Youth Summit 2026 | Singapore | June 15–17 |
| African Leadership Conference | Nairobi, Kenya | July 20–22 |
| Asia-Pacific Youth Forum | Bangkok, Thailand | August 10–12 |
| European Youth Congress | Berlin, Germany | September 5–7 |
| Americas Youth Alliance | Toronto, Canada | October 15–17 |
| Middle East Youth Initiative | Dubai, UAE | November 8–10 |

---

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

For Vercel deployment:
1. Add all env variables in Vercel Dashboard → Settings → Environment Variables
2. Note: `better-sqlite3` requires a Node.js runtime — set **Runtime: Node.js** (not Edge) for API routes
3. `data/you.db` is ephemeral on serverless — consider migrating to a persistent DB (Turso, PlanetScale) for production

---

## Legal Checklist Before Launch

- [ ] Add Privacy Policy page (required for GDPR / Thailand PDPA)
- [ ] Add consent checkbox to registration forms
- [ ] Switch Stripe test keys → live keys
- [ ] Configure Stripe refund policy in Dashboard (30-day window per FAQ)
- [ ] Set data retention policy for SQLite records

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui |
| Payments | Stripe Elements + PayPal Buttons SDK |
| Database | SQLite via better-sqlite3 |
| Icons | Lucide React |
| Language | TypeScript |

---

## Contact

**hello@you-global.org** | Singapore HQ + Ho Chi Minh City Office
