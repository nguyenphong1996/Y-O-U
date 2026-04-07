# Y.O.U. Landing Page — 10-Day Implementation Plan

**Project:** Youth Organization Union (Y.O.U.) Landing Page
**Deadline:** 10 days
**Reference:** universalyouthmovement.org/uyls-thailand-2026/
**Stack:** Next.js 16.2 + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui

---

## Overview

Y.O.U. (Youth Organization Union) is a global platform connecting youth organizations across 85+ countries. The website serves two primary user flows:

- **Flow 1:** Apply to join as a founding member organization (free → interview process)
- **Flow 2:** Purchase a ticket to attend an international conference (paid → Stripe or PayPal)

---

## Pages & Sections

### Page 1 — Home (Landing Page)
**URL:** `/` — Single-page scroll

| # | Section | Status |
|---|---|---|
| 1 | Header / Nav | ✅ Done — mobile hamburger menu added |
| 2 | Hero | ✅ Done — stats row, working CTAs |
| 3 | About (Connector / Enabler / Multiplier) | ✅ Done — full content |
| 4 | How It Works | ✅ Done — 3-step flow |
| 5 | Global Citizen Passport | ✅ Done |
| 6 | Membership Benefits | ✅ Done — 5 benefits |
| 7 | Events (6 international, countdown, spots) | ✅ Done |
| 8 | Pricing / Ticket Tiers | ✅ Done — 4 tiers |
| 9 | Community Gallery | ✅ Done — improved cards |
| 10 | Testimonials | ✅ Done — 8 quotes, auto carousel |
| 11 | FAQ | ✅ Done — 10 accordion questions |
| 12 | Join Our Alliance | ✅ Done — connected to backend |
| 13 | Footer + Contact | ✅ Done |

### Page 2 — Thank You
**URL:** `/thank-you` — Redirect after successful payment

- Booking code display (`#YOU-2026-XXXX`)
- Event summary (event name, ticket type, email)
- Share to social media button
- Back to home button

---

## Forms (Modals)

### Form A — Event Registration (Paid)
Triggered by "Register Now" on event cards or pricing cards.

**3 Steps:**
1. Personal info (name, email, phone, org) + ticket type selection
2. Payment — Stripe Elements (card) OR PayPal Buttons
3. Confirmation with booking code → redirects to `/thank-you`

**Ticket Types:**
| Type | Price | Notes |
|---|---|---|
| Summit Pass | $299 | Full conference access |
| Self-Funded | $440 | All-inclusive (flights + hotel) |
| Fully Funded | $21.99 | Admin fee only — scholarship |
| Partially Funded | $21.99 | Admin fee only — partial scholarship |

### Form B — Founder Application (Free)
Triggered by "Apply Now" in Join Our Alliance section.

**Fields:** Representative name, organization name, email, phone, year founded, member count, website, description, mission & vision

**On submit:** Saves to SQLite → shows "Thank you, we'll contact you in 5 business days."

---

## API Routes

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/apply-founder` | POST | Save founder application to DB |
| `/api/create-payment-intent` | POST | Create Stripe PaymentIntent, return clientSecret |
| `/api/save-registration` | POST | Save confirmed registration, return booking code |

---

## Database Schema

**File:** `data/you.db` (SQLite, auto-created on first run)

**Table: `event_registrations`**
```sql
id, name, email, phone, organization,
event_title, ticket_type, amount,
payment_method, payment_id, booking_code,
status, created_at
```

**Table: `founder_applications`**
```sql
id, founder_name, email, phone, organization_name,
year_founded, member_count, website,
organization_description, mission, status, created_at
```

---

## 10-Day Schedule

### Days 1–2: Infrastructure
- [x] Install: `stripe`, `@stripe/stripe-js`, `@stripe/react-stripe-js`, `@paypal/react-paypal-js`, `better-sqlite3`
- [x] Create `lib/db.ts` — SQLite setup with auto-table creation
- [x] Create 3 API routes
- [x] Configure `.env.local` template
- [x] Update `next.config.mjs` with `serverExternalPackages`

### Days 3–4: Form A — Registration + Payment
- [x] 3-step dialog: Info → Payment → Confirmation
- [x] Stripe Elements integration (card)
- [x] PayPal Buttons integration
- [x] Post-payment: save to DB → redirect to `/thank-you`

### Day 5: Form B + Thank You Page
- [x] Founder application form — full fields, backend connected
- [x] `/thank-you` page with booking code + share button

### Day 6: New Sections
- [x] Pricing section (4 tiers)
- [x] How It Works section (3 steps)
- [x] Membership Benefits section (5 benefits)

### Day 7: Events + Countdown
- [x] Countdown timer component (live, updates every second)
- [x] Event cards: spots remaining, price badge, countdown on next event
- [x] "Next Event" highlight banner

### Day 8: FAQ
- [x] 10 accordion Q&As covering eligibility, funding, logistics, deadlines

### Day 9: Testimonials + Gallery
- [x] 8 testimonials with auto-play carousel (4s interval) + manual controls
- [x] Gallery improved with descriptions

### Day 10: Review + Deploy Prep
- [ ] Full end-to-end test: landing → register → payment (test card `4242...`) → thank you
- [ ] Mobile responsive check
- [ ] Swap Stripe test keys → live keys
- [ ] Run `npm run build`

---

## Priority (If Behind Schedule)

**DO NOT CUT:**
- Payment flow (Forms A, API, DB)
- Database setup

**Safe to cut (add later):**
1. Testimonials carousel
2. Countdown timer
3. FAQ section
4. Gallery descriptions

---

## Events Schedule

| Event | Location | Date | ISO Date |
|---|---|---|---|
| Global Youth Summit 2026 | Singapore | June 15–17 | 2026-06-15 |
| African Leadership Conference | Nairobi, Kenya | July 20–22 | 2026-07-20 |
| Asia-Pacific Youth Forum | Bangkok, Thailand | August 10–12 | 2026-08-10 |
| European Youth Congress | Berlin, Germany | September 5–7 | 2026-09-05 |
| Americas Youth Alliance | Toronto, Canada | October 15–17 | 2026-10-15 |
| Middle East Youth Initiative | Dubai, UAE | November 8–10 | 2026-11-08 |

---

## Legal Notes

> ⚠️ Before going live:
> - **GDPR / PDPA compliance:** Collecting personal data from EU and Thai delegates requires a Privacy Policy page and explicit consent checkbox on forms
> - **Stripe live keys:** Replace `sk_test_...` with `sk_live_...` from Stripe Dashboard — never commit live keys to git
> - **Data retention policy:** Define how long `data/you.db` records are kept; inform users
> - **Refund policy:** Implement in Stripe Dashboard (30-day refund window is current policy per FAQ)
