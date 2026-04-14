# 07 — Acceptance Criteria & Test Scenarios

## 7.1 Tiêu chí nghiệm thu tổng thể

### A. Chức năng cốt lõi

| # | Tiêu chí | Priority |
|---|----------|----------|
| AC-01 | Homepage hiển thị đúng thứ tự 7 section đã định | 🔴 Must |
| AC-02 | Hero slider có tối thiểu 2 slide, auto-rotate 4–6s, có controls (prev/next/dots) | 🔴 Must |
| AC-03 | Countdown timer trên slide Event hiển thị chính xác và cập nhật mỗi giây | 🔴 Must |
| AC-04 | CTA "Register Now" trên hero cuộn đúng đến section Tickets | 🔴 Must |
| AC-05 | CTA "Join Y.O.U" trên hero cuộn đúng đến section Membership | 🔴 Must |
| AC-06 | Ticket section hiển thị 4 loại vé với đầy đủ thông tin và giá | 🔴 Must |
| AC-07 | Stripe payment flow hoàn chỉnh: chọn vé → nhập info → thanh toán → booking code | 🔴 Must |
| AC-08 | PayPal payment flow hoàn chỉnh tương tự Stripe | 🔴 Must |
| AC-09 | Membership form submit thành công, data lưu vào DB | 🔴 Must |
| AC-10 | Thank You page hiển thị booking code + event summary | 🔴 Must |
| AC-11 | About page hiển thị đầy đủ Vision, Mission, What We Do, Passport | 🔴 Must |
| AC-12 | Team page hiển thị đội ngũ theo hierarchy (Board → Continent → Country) | 🔴 Must |
| AC-13 | Contact form submit thành công | 🔴 Must |
| AC-14 | FAQ page hiển thị Q&A theo categories, accordion hoạt động | 🟡 Should |
| AC-15 | Policies page hiển thị nội dung | 🟡 Should |
| AC-16 | Director role application form submit thành công | 🟡 Should |
| AC-17 | Member Organizations page hiển thị danh sách + filter | 🟢 Could |
| AC-18 | SDG Projects page hiển thị + filter by SDG | 🟢 Could |
| AC-19 | Learning Hub page có video + featured orgs | 🟢 Phase 2 |

### B. Responsive

| # | Tiêu chí | Priority |
|---|----------|----------|
| AC-20 | Không bị overflow/horizontal scroll trên bất kỳ breakpoint nào | 🔴 Must |
| AC-21 | Hero text luôn dễ đọc trên mọi thiết bị (có gradient overlay) | 🔴 Must |
| AC-22 | Ticket cards: desktop = grid, mobile/tablet = carousel swipe | 🔴 Must |
| AC-23 | Membership section: desktop = 2 columns, mobile = stacked | 🔴 Must |
| AC-24 | Timeline: desktop = horizontal, mobile = vertical | 🔴 Must |
| AC-25 | Header: desktop = full nav, mobile = hamburger menu | 🔴 Must |
| AC-26 | Touch targets ≥ 44px trên mobile | 🔴 Must |
| AC-27 | Footer: desktop = 4 columns, tablet = 2×2, mobile = stacked | 🟡 Should |

### C. Performance & Quality

| # | Tiêu chí | Priority |
|---|----------|----------|
| AC-28 | Lighthouse Performance (Mobile) ≥ 80 | 🟡 Should |
| AC-29 | Lighthouse Accessibility ≥ 90 | 🟡 Should |
| AC-30 | Không có layout shift khi hero load | 🔴 Must |
| AC-31 | Images sử dụng lazy loading | 🟡 Should |
| AC-32 | Fonts load với font-display: swap | 🟡 Should |

### D. SEO

| # | Tiêu chí | Priority |
|---|----------|----------|
| AC-33 | Mỗi page có 1 H1 duy nhất | 🔴 Must |
| AC-34 | Meta title + description trên mỗi page | 🔴 Must |
| AC-35 | Semantic HTML (header, nav, main, section, footer) | 🟡 Should |
| AC-36 | Open Graph tags cho social sharing | 🟡 Should |

---

## 7.2 Test Scenarios

### TS-01: Event Registration — Stripe (Happy Path)

```
Given: User trên Homepage hoặc Event page
When:  User click "Register Now" trên ticket Summit Pass ($299)
Then:  Modal mở ra

When:  User điền Step 1 — Name, Email, Phone, Organization
And:   Click "Next"
Then:  Chuyển sang Step 2 — Payment

When:  User chọn Stripe
And:   Nhập test card 4242 4242 4242 4242, exp 12/29, CVC 123
And:   Click "Pay $299"
Then:  Stripe xử lý thanh toán thành công

When:  Payment thành công
Then:  Step 3 hiển thị — Confirmation + Booking code #YOU-2026-XXXX
And:   Redirect đến /thank-you sau 3 giây

When:  Trên /thank-you
Then:  Hiển thị booking code, event name, ticket type, email
And:   Có nút "Share" và "Back to Home"
```

### TS-02: Event Registration — PayPal (Happy Path)

```
Given: User trên ticket section
When:  User click "Register Now" trên ticket Self-Funded ($440)
Then:  Modal mở ra

When:  User điền Step 1
And:   Click "Next"
Then:  Chuyển sang Step 2

When:  User click PayPal button
Then:  PayPal popup mở ra
And:   User approve trong PayPal

When:  PayPal onApprove triggered
Then:  Registration saved, booking code generated
And:   Redirect → /thank-you
```

### TS-03: Event Registration — Validation Errors

```
Given: Registration modal Step 1
When:  User click "Next" mà không điền gì
Then:  Inline error hiển thị dưới tất cả required fields
And:   Button "Next" bị disable

When:  User nhập email sai format
Then:  Error "Please enter a valid email" hiển thị
```

### TS-04: Membership Application (Happy Path)

```
Given: User trên Homepage #membership hoặc /join
When:  User điền đầy đủ 9 fields
And:   Click "Submit Application"
Then:  Loading state (spinner + "Submitting...")
And:   POST /api/apply-founder gửi thành công
And:   Form replaced bằng success message:
       "Thank you! We'll contact you within 5 business days."
```

### TS-05: Membership Application — Validation

```
Given: Membership form
When:  User để trống required fields
Then:  Inline errors hiển thị
And:   Submit button disabled

When:  Year Founded = 1899
Then:  Error "Year must be between 1900 and [current year]"

When:  Organization Description > 200 ký tự
Then:  Error "Maximum 200 characters"
```

### TS-06: Director Role Application

```
Given: User trên /join#apply-role
When:  User chọn role "Continent Director"
And:   Điền đầy đủ form
And:   Click "Submit"
Then:  POST /api/apply-role
And:   Success: "Your application has been submitted. We will review within 7 business days."
```

### TS-07: Contact Form

```
Given: User trên /contact
When:  User điền Name, Email, Subject, Message
And:   Click "Send Message"
Then:  POST /api/contact
And:   Success: "Thank you for reaching out. We will respond within 2 business days."
```

### TS-08: Hero Slider Behavior

```
Given: Homepage loaded
Then:  Slide A (Event) hiển thị đầu tiên
And:   Countdown timer đang đếm ngược

When:  4–6 giây trôi qua
Then:  Tự động chuyển sang Slide B (Organization)

When:  User click "Prev" button
Then:  Slide chuyển về Slide A

When:  User click pagination dot #2
Then:  Chuyển đến Slide B

When (Mobile):  User swipe left
Then:  Chuyển sang slide tiếp theo

When (Desktop): User hover trên slider
Then:  Auto-rotate tạm dừng
```

### TS-09: Ticket Carousel (Mobile)

```
Given: User trên mobile (< 768px) tại section Tickets
Then:  Chỉ thấy ~1.2 card (peek next card)

When:  User swipe left
Then:  Snap đến card tiếp theo
And:   Pagination dots cập nhật

When:  User swipe right
Then:  Snap đến card trước đó
```

### TS-10: Responsive Navigation

```
Given: User trên mobile
Then:  Thấy hamburger icon, không thấy full nav

When:  Click hamburger
Then:  Slide-in menu mở ra từ trái
And:   Hiển thị: Home, About, Team, Events, Join, Contact, Register Now

When:  Click "Home" trong menu
Then:  Menu đóng lại
And:   Scroll lên đầu trang
```

### TS-11: About Page

```
Given: User navigate đến /about
Then:  Hero banner hiển thị
And:   Vision + Mission hiển thị đầy đủ
And:   3 pillars: Connector, Enabler, Multiplier
And:   Global Citizen Passport section
And:   Stats section (nếu implemented: counter animation)
And:   CTA "Join Our Alliance" link đến /join
```

### TS-12: Team Page

```
Given: User navigate đến /team
Then:  Executive Board section hiển thị President, VP
And:   Continent Directors grid hiển thị
And:   Country Directors grouped by continent
And:   CTA "Become a Director" link đến /join#apply-role
```

### TS-13: Cross-browser Testing

```
Test trên:
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Mobile Safari (iOS)
- Mobile Chrome (Android)

Verify: Không có layout break, payment flow hoạt động, forms submit thành công
```

---

## 7.3 Test Data

### Stripe Test Cards

| Card | Scenario |
|------|----------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Decline |
| `4000 0025 0000 3155` | Requires 3D Secure |

### PayPal Sandbox

- Dùng PayPal sandbox accounts cho testing

### Test Membership Application

```json
{
  "founderName": "Test User",
  "email": "test@example.com",
  "phone": "+84 900 000 000",
  "organizationName": "Test Youth Org",
  "yearFounded": 2020,
  "memberCount": "10-50",
  "website": "https://example.com",
  "description": "A test youth organization.",
  "mission": "To test the application form."
}
```
