# 03 — Functional Requirements

## REQ Index

| ID | Module | Mức ưu tiên | Nguồn |
|----|--------|-------------|-------|
| FR-01 | Homepage / Landing Page | 🔴 Cao | DOCX, PDF, Existing |
| FR-02 | About Page | 🔴 Cao nhất | DOCX |
| FR-03 | Team Page | 🔴 Cao | DOCX |
| FR-04 | Member Organizations | 🟡 Trung bình | DOCX |
| FR-05 | SDG Projects | 🟡 Trung bình | DOCX |
| FR-06 | Events + Registration | 🟡 Trung bình (làm sau) | DOCX |
| FR-07 | Membership Application | 🔴 Cao | DOCX, Existing |
| FR-08 | Director Role Application | 🔴 Cao | DOCX |
| FR-09 | Payment Flow | 🔴 Cao | Existing |
| FR-10 | Policies & Documents | 🟡 Trung bình | DOCX |
| FR-11 | FAQ | 🟡 Trung bình | DOCX |
| FR-12 | Contact | 🔴 Cao | DOCX |
| FR-13 | Learning Hub | 🟢 Thấp (Phase 2) | PDF |
| FR-14 | Header / Navigation | 🔴 Cao | All |
| FR-15 | Footer | 🔴 Cao | All |
| FR-16 | Thank You Page | 🔴 Cao | Existing |

---

## FR-01: Homepage / Landing Page

### FR-01.1: Hero Banner Slider

| Field | Spec |
|-------|------|
| **Số slide** | Tối thiểu 2 |
| **Auto-rotate** | 4–6 giây |
| **Controls** | Prev/Next buttons + Pagination dots |
| **Mobile** | Swipe support |
| **Desktop** | Pause on hover |
| **Accessibility** | Keyboard focus, ARIA labels, respect `prefers-reduced-motion` |

**Slide A — Event:**
- Background: ảnh sự kiện chất lượng cao + gradient overlay
- Badge: Icon lịch + ngày/giờ + địa điểm
- H1: "Global Youth Summit 2026"
- Subheadline: "Connecting young leaders worldwide..."
- **Countdown timer**: Days / Hours / Minutes / Seconds (live, cập nhật mỗi giây)
- CTA: "Register Now" → smooth scroll đến `#tickets`

**Slide B — Organization:**
- Background: Y.O.U branding image
- Headline: "All Youths Start with Y.O.U"
- Subheadline: "Alliance of youth organizations across 85+ countries"
- Stats badges: "85+ Countries • 500+ Organizations • 10,000+ Youth Leaders"
- CTA: "Join Y.O.U" → smooth scroll đến `#membership`

### FR-01.2: About Snapshot (NEW)
- Tóm tắt ngắn về Union (2–3 câu)
- 3 pillars: Connector / Enabler / Multiplier (icon + title + 1-liner)
- CTA: "Learn More" → `/about`

### FR-01.3: Event + Passport Narrative
- **Desktop:** 2 columns (50/50)
- **Left:** Event benefits (bullet list 4–5 items)
- **Right:** Global Citizen Passport card visual + benefits
- Core message: "Mỗi sự kiện tạo dấu mốc → tích lũy thành hồ sơ Passport"
- CTA: "Discover Passport" → `/about#passport`

### FR-01.4: Event Timeline
- 6 milestones: Registration Opens → Profile Confirmed → Pre-event Onboarding → Event Days → Post-event Certification → Passport Update
- **Desktop:** Horizontal timeline
- **Mobile:** Vertical timeline
- Mỗi mốc: Icon/number + Title + Date + Description (1–2 lines)

### FR-01.5: Tickets + Payment

| Ticket | Price | Badge |
|--------|-------|-------|
| Summit Pass | $299 | — hoặc "Popular" |
| Self-Funded | $440 | "Premium" |
| Fully Funded | $21.99 | "Sponsor Supported" |
| Partially Funded | $21.99 | "70% Off" |

- **Desktop:** 4 cards in 1 row (hoặc 2×2)
- **Mobile/Tablet:** Horizontal carousel/swipe, snap-to-card, peek next card
- Mỗi card: Name, Price, 3–5 benefits, Badge, CTA "Register Now"
- Trust elements: Lock icon + "Secure payment via Stripe & PayPal" + refund note
- CTA opens existing payment modal (3-step: Info → Payment → Confirmation)

### FR-01.6: Membership Application
- **Desktop:** Form left (60%), GIF right (40%)
- **Mobile:** Stack vertically, form trên
- Form fields: 9 fields (xem FR-07)
- Success state: Checkmark + "Thank you" message
- Error state: Inline errors + summary banner

### FR-01.7: Footer
- Logo + tagline
- Quick nav links
- Contact info
- Copyright
- Social links

---

## FR-02: About Page

**Nguồn:** DOCX — "Giới thiệu về Liên minh (ưu tiên cao nhất)"

### FR-02.1: Vision & Mission Section
- Hiển thị đầy đủ Vision statement
- Hiển thị đầy đủ Mission statement
- Core values (3–5 items)

### FR-02.2: What We Do
- 3 blocks: Connector / Enabler / Multiplier
- Mỗi block: Icon + Title + Description (2–3 sentences)
- Trích từ Idea Brief Section 1

### FR-02.3: Global Citizen Passport
- Product overview
- Visual: Passport card/book icon
- Benefits: 4 items
- CTA: "Register for Next Event" → `/events`

### FR-02.4: Statistics
- 85+ Countries
- 500+ Organizations
- 10,000+ Youth Leaders
- Animated counter on scroll (count-up effect)

### FR-02.5: CTA
- "Join Our Alliance" → `/join`

---

## FR-03: Team Page

**Nguồn:** DOCX — "Giới thiệu đội ngũ: Chủ tịch / Phó chủ tịch, Các Giám đốc Châu lục, Các Country Director"

### FR-03.1: Executive Board
- Cards: Photo, Name, Title, Short Bio
- Hiển thị: President (Emily), Vice President

### FR-03.2: Continent Directors
- Grid layout (3–4 columns desktop)
- Cards: Photo, Name, Continent, Organization
- Có filter by continent

### FR-03.3: Country Directors
- Grouped by continent (accordion hoặc tab)
- Cards: Photo, Name, Country, Organization

### FR-03.4: CTA
- "Become a Director" → `/join#apply-role`

> **Decision needed:** Data nguồn từ đâu? Hardcode ban đầu? DB table `team_members`?

---

## FR-04: Member Organizations

**Nguồn:** DOCX — "Giới thiệu các tổ chức tham gia liên minh"

### FR-04.1: Organization Listing
- Grid cards: Logo, Name, Country, Focus Area, Year Founded, Member Count
- Filter: By continent, By focus area
- Search: By name

### FR-04.2: Organization Detail (Future)
- Full profile: Description, Mission, Projects, Contact

> **Decision needed:** Data từ approved `founder_applications` hay nhập tay riêng?

---

## FR-05: SDG Projects

**Nguồn:** DOCX — "Giới thiệu các dự án theo các mục tiêu phát triển bền vững"

### FR-05.1: Project Listing
- Cards: Title, Org Name, SDG Tags, Description snippet, Impact metrics
- Filter by SDG goal (17 goals)
- Reference design: UNESCO (https://www.unesco.org/en)

### FR-05.2: Project Detail (Future)
- Full description, gallery, impact report

> **Decision needed:** Cần CMS? Hay hardcode data ban đầu?

---

## FR-06: Events

**Nguồn:** DOCX — "Tổ chức sự kiện và cho phép cộng đồng đăng ký (làm sau)"

### FR-06.1: Event Listing
- Upcoming events: Card grid with countdown to next event
- Past events: Archive section

### FR-06.2: Event Detail Page
- Hero: Image + Title + Date + Location + Countdown
- Overview: Description, objectives
- Tickets section: 4 ticket types + comparison
- Registration form + Payment (Stripe + PayPal)
- Reference: https://headwayinstitute.org/leadership-certification-global-diplomacy-2026/

### Events Data (from existing codebase)

| Event | Location | Date |
|-------|----------|------|
| Global Youth Summit 2026 | Singapore | June 15–17 |
| African Leadership Conference | Nairobi, Kenya | July 20–22 |
| Asia-Pacific Youth Forum | Bangkok, Thailand | Aug 10–12 |
| European Youth Congress | Berlin, Germany | Sep 5–7 |
| Americas Youth Alliance | Toronto, Canada | Oct 15–17 |
| Middle East Youth Initiative | Dubai, UAE | Nov 8–10 |

---

## FR-07: Membership Application

**Nguồn:** DOCX — "Cho phép đăng ký thành viên (ưu tiên cao)"

### FR-07.1: Form Fields

| # | Field | Type | Required | Validation |
|---|-------|------|----------|------------|
| 1 | Representative Name | Text | ✅ | Min 2 chars |
| 2 | Organization Name | Text | ✅ | Min 2 chars |
| 3 | Email | Email | ✅ | Email format |
| 4 | Phone | Tel | ✅ | Phone format |
| 5 | Year Founded | Number | ✅ | 1900 ≤ x ≤ current year |
| 6 | Member Count | Select | ✅ | Options: <10, 10-50, 50-100, >100 |
| 7 | Website / Social | URL | ❌ | URL format if provided |
| 8 | Organization Description | Textarea | ✅ | Max 200 chars |
| 9 | Mission & Vision | Textarea | ✅ | Max 300 chars |

### FR-07.2: Submission
- POST `/api/apply-founder`
- Save to `founder_applications` table
- Success: "Thank you, we'll contact you within 5 business days."
- Error: Inline validation + toast notification

### FR-07.3: Backend (Existing)
- API route đã có: `/api/apply-founder` → SQLite `founder_applications`
- Giữ nguyên schema, không breaking change

---

## FR-08: Director Role Application (NEW)

**Nguồn:** DOCX — "Emily có thể đăng ký tham gia làm các vai trò (Continent Director / Country Director)"

### FR-08.1: Form Fields

| # | Field | Type | Required |
|---|-------|------|----------|
| 1 | Full Name | Text | ✅ |
| 2 | Email | Email | ✅ |
| 3 | Phone | Tel | ✅ |
| 4 | Current Organization | Text | ✅ |
| 5 | Role Type | Select | ✅ | Options: Continent Director, Country Director |
| 6 | Target Region/Country | Text | ✅ |
| 7 | Leadership Experience | Textarea | ✅ |
| 8 | Motivation | Textarea | ✅ |
| 9 | LinkedIn / Portfolio | URL | ❌ |

### FR-08.2: Submission
- **NEW API:** POST `/api/apply-role`
- **NEW Table:** `role_applications`
- Success: Confirmation message

> **Decision needed:** Tách form riêng hay merge vào membership form với radio toggle?

---

## FR-09: Payment Flow (Existing)

### FR-09.1: Flow
1. User chọn ticket → Open modal
2. Step 1: Personal info (name, email, phone, org) + ticket type
3. Step 2: Payment — Stripe Elements (card) HOẶC PayPal Buttons
4. Step 3: Confirmation + booking code (#YOU-2026-XXXX)
5. Redirect → `/thank-you`

### FR-09.2: APIs (Existing, giữ nguyên)
- POST `/api/create-payment-intent` → Stripe PaymentIntent
- POST `/api/save-registration` → Save registration + return booking code

### FR-09.3: Ticket Pricing

| Type | Price | Notes |
|------|-------|-------|
| Summit Pass | $299 | Full conference access |
| Self-Funded | $440 | All-inclusive |
| Fully Funded | $21.99 | Admin fee only — scholarship |
| Partially Funded | $21.99 | Admin fee only — partial scholarship |

---

## FR-10: Policies & Documents

**Nguồn:** DOCX — "Các quy trình, tài liệu chính sách của liên minh (ưu tiên)"

### FR-10.1: Content
- Terms and Conditions
- Privacy Policy (GDPR / PDPA compliant)
- Refund Policy (7-day or 30-day window)
- Y.O.U Constitution / Charter (if available)
- Code of Conduct

### FR-10.2: Format
- Markdown-rendered content pages
- PDF download links where applicable

---

## FR-11: FAQ

**Nguồn:** DOCX — "Frequent asked question (ưu tiên)"

### FR-11.1: Categories
- **General:** What is Y.O.U? Who can join? etc.
- **Events:** How do events work? What's included?
- **Membership:** How to apply? How long does review take?
- **Payment:** Payment methods? Refund policy? Funded ticket eligibility?

### FR-11.2: UI
- Accordion-style Q&A
- Category tabs or grouped sections
- Search/filter functionality

---

## FR-12: Contact

**Nguồn:** DOCX — "Contact (ưu tiên cao)"

### FR-12.1: Contact Form
- Fields: Name, Email, Subject, Message
- Submit: Email notification to admin

### FR-12.2: Contact Information
- Email address
- Phone number (if applicable)
- Social media links (Facebook, Instagram, LinkedIn)

---

## FR-13: Learning Hub (Phase 2)

**Nguồn:** PDF — "Learning Hub (Educational + Empowerment)"

### FR-13.1: Featured Youth Organizations
- Showcase first 3 board member organizations
- Profile cards: Logo, Name, Description, Link

### FR-13.2: President's Intro Video
- Introductory video by President (Emily)
- Content: Welcome message, Union introduction, goals
- Format: Embedded video (YouTube or self-hosted)

---

## FR-14: Header / Navigation

### FR-14.1: Sticky Header
- Logo Y.O.U (left)
- Nav links (center): Home, About, Team, Events, Join, Contact
- CTA button (right): "Register Now"
- Sticky on scroll

### FR-14.2: Mobile/Tablet
- Hamburger menu icon
- Slide-out menu
- CTA inside menu
- Touch target ≥ 44px

---

## FR-15: Footer

### FR-15.1: Content
- Logo + tagline: "Connecting Youth Organizations for Global Impact"
- Contact info (email, phone)
- Quick nav links (same as header)
- Policies links (Terms, Privacy, Refund)
- Social media icons
- Copyright: "© 2026 Youth Organization Union. All rights reserved."

### FR-15.2: Layout
- Desktop: 4 columns
- Tablet: 2×2 grid
- Mobile: Stacked vertically

---

## FR-16: Thank You Page (Existing)

- URL: `/thank-you`
- Booking code display: `#YOU-2026-XXXX`
- Event summary: event name, ticket type, email
- Share to social media button
- Back to home button
