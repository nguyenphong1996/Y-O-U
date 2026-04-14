# 04 — UI/UX Specification

## 4.1 Design Direction

### Brand Identity

| Element | Spec |
|---------|------|
| **Tên** | Youth Organization Union (Y.O.U.) |
| **Slogan** | "All Youths Start with Y.O.U." |
| **Tinh thần** | Global youth movement — năng động, tích cực, chuyên nghiệp, gần gũi |
| **Tham khảo** | https://headwayinstitute.org/ |
| **Logo color** | Tham khảo color code Olympic (5 vòng = 5 châu lục) |

### Color Palette (Proposed — cần confirm logo)

| Token | Usage | Gợi ý |
|-------|-------|-------|
| `--primary` | CTA buttons, accent | Xanh dương đậm (trust + global feel) |
| `--secondary` | Secondary buttons, hover | Vàng/cam (energy + youth) |
| `--accent-1` | Asia highlight | Red (Olympic ring) |
| `--accent-2` | Africa highlight | Black (Olympic ring) |
| `--accent-3` | Europe highlight | Blue (Olympic ring) |
| `--accent-4` | Americas highlight | Yellow (Olympic ring) |
| `--accent-5` | Oceania highlight | Green (Olympic ring) |
| `--bg-light` | Page background | `#FAFAFA` hoặc `#FFFFFF` |
| `--bg-dark` | Footer, dark sections | `#1A1A2E` hoặc Navy |
| `--text-primary` | Body text | `#1A1A2E` |
| `--text-muted` | Secondary text | `#6B7280` |
| `--success` | Success states | `#22C55E` |
| `--error` | Error states | `#EF4444` |

> **Lưu ý:** Client muốn "sử dụng theo theme màu của logo". Logo chưa finalize → palette trên là gợi ý, cần update khi có logo chính thức.

### Typography

| Element | Font | Size (Desktop) | Size (Mobile) | Weight |
|---------|------|----------------|---------------|--------|
| H1 | Inter / Outfit | 56–72px | 32–36px | 800 |
| H2 | Inter / Outfit | 36–48px | 28–32px | 700 |
| H3 | Inter / Outfit | 24–32px | 20–24px | 600 |
| Body | Inter | 16–18px | 15–16px | 400 |
| Caption | Inter | 14px | 13px | 400 |
| Button | Inter | 16–18px | 16px | 600 |
| Badge | Inter | 12–14px | 12px | 500 |

---

## 4.2 Responsive Breakpoints

| Breakpoint | Range | Label |
|-----------|-------|-------|
| Mobile | < 768px | `sm` |
| Tablet | 768px – 1023px | `md` |
| Desktop | ≥ 1024px | `lg` |
| Wide | ≥ 1440px | `xl` |

### Responsive Behavior Matrix

| Element | Mobile (<768) | Tablet (768-1023) | Desktop (≥1024) |
|---------|--------------|-------------------|-----------------|
| Header | Hamburger + CTA in menu | Hamburger + CTA in menu | Full nav + CTA button |
| Hero Text | Stacked, smaller font | Medium font | Full size |
| Hero Countdown | Compact (2×2 grid) | Inline 4 blocks | Inline 4 blocks |
| About Pillars | Stacked vertically | 3 columns | 3 columns |
| Event+Passport | Stacked | Stacked | 2 columns side-by-side |
| Timeline | Vertical | Vertical | Horizontal |
| Tickets | Horizontal carousel | Horizontal carousel | 4 cards in row |
| Membership | Form only, GIF below | Form + GIF stacked | Form left, GIF right |
| Team Cards | 1 column | 2 columns | 3–4 columns |
| Footer | Stacked | 2×2 grid | 4 columns |

---

## 4.3 Homepage Section Specs

### 4.3.1 Sticky Header

```
┌─────────────────────────────────────────────────────────┐
│  [Logo]    Home  About  Team  Events  Join  Contact  [Register Now] │
└─────────────────────────────────────────────────────────┘
```

- Background: white hoặc semi-transparent white
- Shadow nhẹ khi scroll (box-shadow)
- Height: 64–72px
- z-index: 50
- Mobile: hamburger → slide-in menu from left

### 4.3.2 Hero Banner Slider

```
┌──────────────────────────────────────────────┐
│                                              │
│  [Badge: Oct 15-17, 2026 • Hanoi, Vietnam]   │
│                                              │
│  Global Youth Summit 2026        (H1)       │
│  Connecting young leaders...     (Sub)       │
│                                              │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐              │
│  │ 45 │ │ 12 │ │ 30 │ │ 15 │  (Countdown)  │
│  │Days│ │Hrs │ │Min │ │Sec │              │
│  └────┘ └────┘ └────┘ └────┘              │
│                                              │
│  [Register Now]                              │
│                                              │
│  ◄  ● ○  ►                      (Controls)  │
└──────────────────────────────────────────────┘
```

- Full viewport height (100vh) hoặc min-height 600px
- Background: ảnh sự kiện + gradient overlay `rgba(0,0,0,0.5–0.6)`
- Transition: crossfade 400–600ms, slide 600–800ms
- Auto-slide: mỗi 4–6 giây
- Countdown blocks: background semi-transparent, number size 48–64px

### 4.3.3 About Snapshot

```
┌──────────────────────────────────────────────┐
│  Who We Are                                   │
│  "Y.O.U connects youth organizations..."     │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 🔗       │ │ ⚡       │ │ 🚀       │    │
│  │Connector │ │ Enabler  │ │Multiplier│    │
│  │ desc...  │ │ desc...  │ │ desc...  │    │
│  └──────────┘ └──────────┘ └──────────┘    │
│                                              │
│  [Learn More →]                              │
└──────────────────────────────────────────────┘
```

### 4.3.4 Tickets Section

**Desktop:**
```
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│Summit  │ │Self-   │ │Fully   │ │Partial │
│Pass    │ │Funded  │ │Funded  │ │Funded  │
│        │ │Premium │ │Sponsor │ │70% Off │
│$299    │ │$440    │ │$21.99  │ │$21.99  │
│        │ │        │ │        │ │        │
│✓ item  │ │✓ item  │ │✓ item  │ │✓ item  │
│✓ item  │ │✓ item  │ │✓ item  │ │✓ item  │
│✓ item  │ │✓ item  │ │✓ item  │ │✓ item  │
│        │ │        │ │        │ │        │
│[Reg]   │ │[Reg]   │ │[Reg]   │ │[Reg]   │
└────────┘ └────────┘ └────────┘ └────────┘

🔒 Secure payment via Stripe & PayPal
```

**Mobile:** Horizontal scroll with snap + peek next card

### 4.3.5 Membership Form Section

**Desktop:**
```
┌────────────────────────┬──────────────┐
│  Join Y.O.U             │              │
│  "Fill in your org..."  │              │
│                         │   [GIF/      │
│  [Name          ]       │    Animation]│
│  [Org Name      ]       │              │
│  [Email         ]       │              │
│  [Phone         ]       │              │
│  [Year] [Members▾]      │              │
│  [Website       ]       │              │
│  [Description   ]       │              │
│  [Mission       ]       │              │
│                         │              │
│  [Submit Application]   │              │
└────────────────────────┴──────────────┘
```

---

## 4.4 Component States

### Buttons

| State | Visual |
|-------|--------|
| Default | Filled background, white text |
| Hover | Slight scale (1.02), elevated shadow |
| Active/Pressed | Darker shade, no shadow |
| Disabled | Gray background, lower opacity |
| Loading | Spinner + "Processing..." text |

### Form Fields

| State | Visual |
|-------|--------|
| Default | Light border, gray placeholder |
| Focus | Primary color border, subtle glow |
| Filled | Dark text, primary border |
| Error | Red border, error message below |
| Disabled | Grayed out |

### Cards (Ticket, Team, Org)

| State | Visual |
|-------|--------|
| Default | White bg, light border, subtle shadow |
| Hover | Elevated shadow, scale 1.02 |
| Selected | Primary border highlight |

---

## 4.5 Motion & Animation

### Allowed

| Animation | Duration | Easing |
|-----------|----------|--------|
| Hero slide transition | 400–600ms (fade), 600–800ms (slide) | ease-in-out |
| Section reveal on scroll | 300–500ms | ease-out |
| Card hover elevation | 200ms | ease |
| Button hover | 150ms | ease |
| Countdown number change | 200ms | ease-in-out |
| Counter count-up (About stats) | 2000ms | ease-out |

### Not Allowed
- Quá nhiều animation cùng lúc
- Auto-play video heavy
- Flashing / blinking elements
- Animation gây rối mắt hoặc giảm tốc độ đọc

### Reduced Motion
Khi `prefers-reduced-motion: reduce`:
- Tắt auto-rotate slider
- Tắt scroll reveal
- Dùng instant state changes

---

## 4.6 Accessibility

| Requirement | Spec |
|------------|------|
| WCAG level | 2.1 AA minimum |
| Color contrast | ≥ 4.5:1 for body text, ≥ 3:1 for large text |
| Touch targets | ≥ 44px height on mobile |
| Keyboard nav | Full keyboard accessibility for all interactive elements |
| Focus states | Visible focus ring on all focusable elements |
| ARIA labels | All buttons, links, form inputs, slider controls |
| Alt text | All images |
| Skip links | "Skip to content" at page top |
| Screen reader | Semantic HTML (header, nav, main, section, footer) |

---

## 4.7 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance (Mobile) | ≥ 80 |
| Lighthouse Accessibility | ≥ 90 |
| First Contentful Paint | < 2s |
| Largest Contentful Paint | < 3s |
| Cumulative Layout Shift | < 0.1 |
| Image optimization | Next.js Image, WebP/AVIF, lazy loading |
| Font loading | font-display: swap |

---

## 4.8 SEO

| Element | Spec |
|---------|------|
| Title tag | "Y.O.U - Global Youth Summit and Youth Organization Alliance" |
| Meta description | "Join Y.O.U events, build your Global Citizen Passport and become part of the international youth leadership network." |
| H1 | 1 per page |
| Heading hierarchy | H1 → H2 → H3 (no skipping) |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| Open Graph | Title, description, image for social sharing |
| Keywords | youth summit, youth organization, global passport, youth leadership |
