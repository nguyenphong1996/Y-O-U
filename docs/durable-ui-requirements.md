# Y.O.U Landing Page - Refined Requirements for Durable + Implementation Agents

## 1) Project Review (Current State)

Current app already has:
- Next.js App Router structure with working single-page landing layout
- Stripe + PayPal payment flow
- Founder application form connected to backend
- Countdown component and ticket data model
- Responsive header/footer and multiple existing sections

Current page is content-rich (13 sections), but your new request needs a more focused conversion flow with this order:
1. Hero banner slider (event + countdown, then Y.O.U organization banner)
2. Event introduction + "event outcomes become Passport product" story
3. Event timeline
4. Ticket + payment block (carousel on mobile/tablet, all cards on desktop)
5. Founder/member form block (desktop: form left, GIF right)
6. Footer

This means we should simplify/reorder current homepage instead of stacking all old sections.

---

## 2) Target Experience (Information Architecture)

Homepage section order (final):
1. Sticky Header / Navigation
2. Hero Banner Slider (2 slides minimum)
3. Event + Passport Narrative Section
4. Event Timeline Section
5. Tickets + Payment Entry Section
6. Internal Membership Application Section
7. Footer

No extra sections (gallery/testimonials/FAQ) on first release unless requested later.

---

## 3) Section-by-Section Requirements

### 3.1 Header

Functional:
- Sticky top header with logo, nav anchors, and primary CTA button
- CTA should open ticket/payment flow or scroll to ticket section

Responsive:
- Desktop: full nav + CTA
- Tablet/mobile: hamburger menu + CTA inside menu

Anchors:
- home
- event-passport
- timeline
- tickets
- membership
- footer

### 3.2 Hero Banner Slider

Goal:
- Immediate visual impact + urgency via countdown

Slides:
- Slide A (Event-first)
  - Large event image background
  - Event title, location, date
  - Live countdown timer (days/hours/min/sec)
  - CTA: Register Now
- Slide B (Organization-first)
  - Y.O.U branding image/content
  - Short mission/value statement
  - CTA: About Y.O.U or Join Y.O.U

Behavior:
- Auto-slide continuously every 4 to 6 seconds
- Manual controls: next/prev + pagination dots
- Pause auto-slide on hover (desktop)
- Swipe support on mobile

Accessibility:
- Controls keyboard-focusable
- ARIA labels for prev/next/dots
- Respect reduced motion (disable auto transitions if needed)

### 3.3 Event to Passport Narrative

Purpose:
- Explain that event participation accumulates into a Passport-style achievement product

Content blocks:
- Left (or top on mobile): event explanation (why attend, outcomes)
- Right (or bottom on mobile): Passport product card/visual with key benefits

Core message:
- Each event contributes credits/proofs/competencies
- Combined across events to form a meaningful Passport profile

### 3.4 Timeline Section

Content:
- 4 to 6 milestones of one event cycle
- Example stages:
  - Registration opens
  - Selection/confirmation
  - Pre-event onboarding
  - Main event days
  - Post-event certification
  - Passport update

UI behavior:
- Desktop: horizontal timeline with milestone cards
- Tablet/mobile: vertical timeline with connector line

### 3.5 Tickets + Payment Section

Ticket types (already in codebase, keep consistent):
- Summit Pass - 299 USD
- Self-Funded - 440 USD
- Fully Funded - 21.99 USD (admin fee)
- Partially Funded - 21.99 USD (admin fee)

Display behavior:
- Desktop (>= 1024px): show all ticket cards in one grid row (or 2x2 if spacing better)
- Tablet/mobile (< 1024px): horizontal carousel/slider for ticket cards

Actions:
- Each ticket has Register button
- Register opens current payment flow
- Payment methods shown clearly: Stripe card, PayPal

Trust elements:
- Secure payment badges
- Short refund/eligibility note for funded tickets

### 3.6 Membership Form Section

Purpose:
- Collect internal membership/founder application

Desktop layout:
- Left: form fields
- Right: GIF/animated visual (Y.O.U themed)

Tablet/mobile layout:
- Stack vertically
- GIF placed below hero text or below form depending on readability

Form requirements:
- Keep existing backend-compatible fields
- Validation + error/success states
- Success confirmation after submit

### 3.7 Footer

Include:
- Logo + short tagline
- Contact info
- Quick nav links (same anchors)
- Copyright

---

## 4) Responsive Breakpoints and Behavior

Use these rules:
- Mobile: < 768px
- Tablet: 768px to 1023px
- Desktop: >= 1024px

Critical responsive rules:
- Hero text must remain readable on image overlays (use gradient overlay)
- Ticket cards become carousel below desktop
- Membership form changes from 2-column to 1-column
- Touch targets >= 44px height on mobile

---

## 5) Motion and Interaction

Allowed motion:
- Hero crossfade/slide animation
- Section reveal-on-scroll (subtle)
- Ticket card hover emphasis on desktop

Do not over-animate:
- Keep animation duration short (200 to 500ms for most UI, 600 to 800ms for hero transitions)

Reduced motion:
- Respect prefers-reduced-motion with static alternatives

---

## 6) Content and Asset Requirements

Required assets from client/team:
- Event hero images (at least 2, recommended 1920x1080)
- Y.O.U organization banner image
- GIF for membership section (web-optimized, < 4MB preferred)
- Optional fallback static image if GIF fails

Copywriting placeholders to finalize:
- Event headline/subheadline
- Y.O.U mission statement
- Timeline milestone descriptions
- Payment notes and eligibility notes

---

## 7) Non-Functional Requirements

Performance:
- Lighthouse mobile target: >= 80 for Performance and Accessibility
- Use optimized images and lazy loading where applicable

SEO:
- One clear H1 on page
- Semantic section headings (H2/H3)
- Meta title/description aligned to event + Y.O.U keywords

Quality:
- No layout shift on hero load
- Form and payment CTAs always visible and actionable

---

## 8) Integration Constraints (Important)

Keep existing backend and APIs unchanged:
- POST /api/create-payment-intent
- POST /api/save-registration
- POST /api/apply-founder

Do not break existing components/contracts:
- Keep ticket IDs and pricing consistent with current payment logic
- Founder form payload must remain compatible with existing database schema

---

## 9) Acceptance Criteria (Definition of Done)

1. Page sections appear exactly in requested order.
2. Hero has at least 2 auto-sliding banners, one with live countdown.
3. Timeline is visible and readable on all breakpoints.
4. Ticket block:
   - desktop shows all tickets together
   - mobile/tablet supports slide/swipe cards
5. Membership block:
   - desktop form-left visual-right
   - mobile/tablet stacked
6. Stripe and PayPal checkout flows still work from ticket buttons.
7. Founder/member form submits successfully to current API.
8. Page is responsive on mobile, tablet, desktop without overflow bugs.

---

## 10) Execution Plan for Agents

Phase 1 - UX skeleton:
- Reorder homepage sections and remove non-core sections from initial flow
- Implement anchor navigation matching new IA

Phase 2 - Hero + timeline + responsive ticket presentation:
- Build banner slider with countdown in slide A
- Implement timeline component
- Add responsive ticket carousel behavior

Phase 3 - Membership + polish:
- Create split form/GIF block
- Tune spacing/typography/animations
- Verify responsiveness and payment/form flows end-to-end

Phase 4 - QA and signoff:
- Manual tests on mobile/tablet/desktop
- Verify APIs and success states
- Final content polish and asset swaps

---

## 11) Prompt Template for Durable (Copy/Paste)

Build a modern responsive landing page for Youth Organization Union (Y.O.U.) with this exact section order:
1) sticky header,
2) hero slider with 2 banners (banner 1 = event image + live countdown + register CTA, banner 2 = Y.O.U organization branding + mission CTA),
3) event introduction that explains event outcomes can be accumulated into a Passport product,
4) event timeline,
5) tickets and payment section with 4 ticket types (Summit Pass 299 USD, Self-Funded 440 USD, Fully Funded 21.99 USD, Partially Funded 21.99 USD),
6) membership application section (desktop two-column: left form, right GIF),
7) footer.

Responsive requirements:
- desktop shows all ticket cards together,
- tablet/mobile uses swipeable ticket cards,
- form and GIF stack vertically on smaller screens.

Interaction requirements:
- hero auto-slides every 4 to 6 seconds with manual controls,
- live countdown visible on event banner,
- subtle motion only, and accessible controls.

Style direction:
- clean, premium, global youth leadership vibe,
- strong image overlays for readability,
- clear CTA hierarchy for Register and Apply.

Deliver production-ready responsive UI structure that can be mapped into a Next.js + Tailwind app.
