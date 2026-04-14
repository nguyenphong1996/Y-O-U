# 02 — Sitemap & Information Architecture

## 2.1 Sitemap tổng thể

```
/                           → Homepage (Landing Page)
├── /about                  → Giới thiệu Union
│   ├── #vision-mission     → Vision, Mission, Core Values
│   ├── #what-we-do         → Connector / Enabler / Multiplier
│   └── #passport           → Global Citizen Passport giới thiệu
├── /team                   → Đội ngũ lãnh đạo
│   ├── #executive-board    → President, Vice President
│   ├── #continent-directors→ Giám đốc Châu lục
│   └── #country-directors  → Country Directors
├── /members                → Tổ chức thành viên
│   └── /members/[slug]     → Chi tiết tổ chức (future)
├── /projects               → Dự án SDG
│   └── /projects/[slug]    → Chi tiết dự án (future)
├── /events                 → Danh sách sự kiện
│   └── /events/[slug]      → Chi tiết sự kiện + đăng ký + thanh toán
├── /learning-hub           → Learning Hub (Phase 2)
│   ├── #featured-orgs      → Feature Youth Organizations
│   └── #intro-video        → Video giới thiệu từ President
├── /join                   → Đăng ký thành viên / Apply role
│   ├── #membership         → Form đăng ký tổ chức
│   └── #apply-role         → Apply Continent/Country Director
├── /policies               → Quy trình & Tài liệu chính sách
├── /faq                    → Frequently Asked Questions
├── /contact                → Liên hệ
└── /thank-you              → Thank You page (sau thanh toán / đăng ký)
```

---

## 2.2 Cấu trúc Navigation

### Primary Navigation (Header)

| Menu Label | URL | Dropdown? |
|-----------|-----|-----------|
| Home | `/` | No |
| About | `/about` | No |
| Team | `/team` | No |
| Events | `/events` | Yes → list upcoming events |
| Join | `/join` | No |
| Contact | `/contact` | No |
| **CTA: Register Now** | → scroll to tickets hoặc `/events` | Button style |

### Footer Navigation

| Column | Links |
|--------|-------|
| **About** | About Us, Team, Members, Projects |
| **Events** | Upcoming Events, Past Events, Tickets |
| **Resources** | Policies, FAQ, Learning Hub |
| **Contact** | Email, Phone, Social links |

---

## 2.3 Homepage — Section Order (Redesigned)

Homepage sẽ được redesign từ 13 sections cũ thành **7 sections tập trung conversion**:

| # | Section | Anchor ID | Mục tiêu |
|---|---------|-----------|----------|
| 1 | Sticky Header | — | Điều hướng + CTA |
| 2 | Hero Banner Slider | `#hero` | Thu hút + urgency (countdown) |
| 3 | About Snapshot | `#about` | Giới thiệu nhanh Union + link đến /about |
| 4 | Event + Passport Story | `#event-passport` | Giải thích giá trị Event → Passport |
| 5 | Event Timeline | `#timeline` | Quy trình tham gia |
| 6 | Tickets + Payment | `#tickets` | Chọn vé + Thanh toán |
| 7 | Membership Application | `#membership` | Đăng ký tổ chức |
| 8 | Footer | `#footer` | Liên hệ + Quick links |

> **So sánh với LP cũ:** Bỏ các sections: Gallery, Testimonials, FAQ, How It Works, Membership Benefits (chuyển sang pages riêng). Thêm: About Snapshot, Event+Passport Story.

---

## 2.4 Page-Level IA

### `/about` — About Page

| Section | Content |
|---------|---------|
| Hero Banner | "Connecting Youth Organizations for Global Impact" |
| Vision & Mission | Full vision + mission statements |
| Core Values | 3–5 giá trị cốt lõi |
| What We Do | Connector / Enabler / Multiplier (3 columns) |
| Global Citizen Passport | Product overview + benefits |
| Stats | 85+ Countries, 500+ Orgs, 10K+ Youth Leaders |
| CTA | "Join Our Alliance" → `/join` |

### `/team` — Team Page

| Section | Content |
|---------|---------|
| Page Header | "Our Leadership" |
| Executive Board | President (Emily), Vice President — photo, name, title, short bio |
| Continent Directors | Grid cards — photo, name, region, org |
| Country Directors | Grid cards — organized by continent |
| CTA | "Become a Director" → `/join#apply-role` |

### `/members` — Member Organizations

| Section | Content |
|---------|---------|
| Page Header | "Our Member Organizations" |
| Filter/Search | Filter by continent, country, focus area |
| Org Cards Grid | Logo, name, country, focus area, member count |
| CTA | "Join Our Alliance" → `/join` |

### `/projects` — SDG Projects

| Section | Content |
|---------|---------|
| Page Header | "Projects for Sustainable Development" |
| SDG Filter | Filter by SDG goal (reference: UNESCO SDGs) |
| Project Cards | Title, org name, SDG tags, description, impact metrics |
| CTA | "Submit Your Project" (future) |

### `/events` — Events Listing

| Section | Content |
|---------|---------|
| Page Header | "Upcoming Events" |
| Next Event Highlight | Countdown + featured event banner |
| Event Cards Grid | Title, location, date, price range, spots remaining |
| Past Events | Archive section |

### `/events/[slug]` — Event Detail

| Section | Content |
|---------|---------|
| Hero | Event image + title + date + location + countdown |
| Overview | Description, objectives, what you'll learn |
| Schedule/Agenda | Daily breakdown |
| Speakers (future) | Speaker cards |
| Tickets | 4 ticket types + comparison table |
| Registration + Payment | Stripe + PayPal flow |
| FAQ (event-specific) | Related questions |

### `/join` — Join / Apply

| Section | Content |
|---------|---------|
| Page Header | "Join Youth Organization Union" |
| Benefits Overview | Why join? (6 benefits from Idea Brief) |
| Eligibility | Requirements to join |
| Membership Form | Full application form (9 fields) |
| Apply for Role | Separate form for Continent/Country Director |

### `/policies` — Policies & Documents

| Section | Content |
|---------|---------|
| Page Header | "Policies & Documents" |
| Document List | PDF downloads — Constitution, Code of Conduct, Privacy Policy |
| Terms | Terms and Conditions |
| Privacy | Privacy Policy (GDPR/PDPA) |
| Refund | Refund Policy |

### `/faq` — FAQ

| Section | Content |
|---------|---------|
| Page Header | "Frequently Asked Questions" |
| Categories | General, Events, Membership, Payment |
| Accordion List | Q&A items organized by category |

### `/contact` — Contact

| Section | Content |
|---------|---------|
| Page Header | "Contact Us" |
| Contact Form | Name, email, subject, message |
| Contact Info | Email, phone, social media links |
| Map (optional) | Headquarters location |

### `/learning-hub` — Learning Hub (Phase 2)

| Section | Content |
|---------|---------|
| Intro Video | Video by President welcoming everyone |
| Featured Organizations | First 3 board member organizations + bios |
| Resources | Educational materials, links |

---

## 2.5 User Flow Diagrams

### Flow 1: Event Registration (Paid)

```
Homepage Hero/Ticket CTA
    → Scroll to Tickets section (hoặc /events/[slug])
    → Chọn ticket type
    → Modal: Step 1 — Personal info (name, email, phone, org)
    → Modal: Step 2 — Payment (Stripe card HOẶC PayPal)
    → Modal: Step 3 — Confirmation + Booking code
    → Redirect → /thank-you (hiển thị booking code, event summary)
```

### Flow 2: Membership Application (Free)

```
Homepage CTA / /join page
    → Điền form membership (9 fields)
    → Submit → POST /api/apply-founder
    → Success: "Cảm ơn, liên hệ trong 5 ngày"
```

### Flow 3: Director Role Application (Free)

```
/join#apply-role HOẶC /team → "Become a Director"
    → Chọn role type (Continent Director / Country Director)
    → Điền form (personal info + tổ chức + motivation)
    → Submit → POST /api/apply-role (NEW)
    → Success confirmation
```

### Flow 4: General Inquiry

```
/contact
    → Điền contact form
    → Submit → email notification
    → Success confirmation
```
