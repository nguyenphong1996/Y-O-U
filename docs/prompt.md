# Prompt cho AI Design Tool (Google Stitch / Figma)

---

## Tổng quan

Thiết kế landing page responsive cho Y.O.U (Youth Organization Union) với 7 section theo thứ tự chính xác. Phong cách: premium, hiện đại, global youth movement, rõ CTA, dễ đọc trên ảnh, tối ưu mobile/tablet/desktop.

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: >= 1024px

---

## Section 1: Sticky Header

**Mục tiêu:** Điều hướng nhanh đến section quan trọng, luôn hiển thị CTA chuyển đổi.

**Thành phần:**
- Logo Y.O.U (bên trái)
- Menu anchors (bên giữa): Home | Event | Timeline | Tickets | Membership | Contact
- CTA button "Tham Gia Ngay" (bên phải) → scroll đến Tickets section

**Hành vi:**
- Sticky ở đầu trang khi cuộn
- Mobile/tablet: hamburger icon, menu slide ra từ bên trái, CTA nằm trong menu
- Touch target tối thiểu 44px chiều cao

**Visual:**
- Background: trắng hoặc semi-transparent white
- Shadow nhẹ khi scroll
- Logo: full color
- Nav links: text màu tối, hover underline hoặc đổi màu accent
- CTA button: filled style với màu accent nổi bật

---

## Section 2: Hero Banner Slider

**Mục tiêu:** Thu hút trong 3 giây đầu, truyền tải sự cấp bách và bản sắc tổ chức.

**Yêu cầu chung:**
- Tối thiểu 2 slide
- Auto-rotate: 4-6 giây
- Prev/Next buttons
- Pagination dots (bên dưới)
- Desktop: pause on hover
- Mobile: swipe support
- Transition: crossfade 400-600ms, slide 600-800ms
- Accessibility: keyboard focus, ARIA labels, respect reduced-motion

---

### Slide A - Event (Slide mặc định đầu tiên)

**Background:**
- Hình ảnh sự kiện thật, chất lượng cao (recommend 1920x1080)
- Gradient overlay: từ transparent đến dark rgba(0,0,0,0.6) để đảm bảo text đọc được
- Overlay có thể là linear gradient từ bottom hoặc radial từ center

**Nội dung (centered hoặc left-aligned):**
- **Badge ngày giờ:** Icon lịch + "October 15-17, 2026 • Hanoi, Vietnam"
  - Background: semi-transparent dark
  - Font: 14px, uppercase, letter-spacing 1px
- **Headline (H1):** "Global Youth Summit 2026"
  - Font size: desktop 56-72px, tablet 40-48px, mobile 32-36px
  - Font weight: bold hoặc 800
  - Color: white
  - Margin bottom: 16-24px
- **Subheadline:** "Kết nối lãnh đạo trẻ toàn cầu qua hành trình học tập và hành động"
  - Font size: desktop 20-24px, tablet 18px, mobile 16px
  - Color: rgba(255,255,255,0.9)
  - Margin bottom: 32-48px
- **Countdown Timer:** Hiển thị ngay bên dưới subheadline
  - 4 blocks: Days | Hours | Minutes | Seconds
  - Mỗi block có số lớn (48-64px) và label nhỏ bên dưới
  - Background: semi-transparent white
  - Number color: accent/primary, Label color: white
  - Separator ":" giữa các blocks
- **CTA Button:** "Tham Gia Sự Kiện"
  - Style: filled button, màu accent (primary color)
  - Size: desktop 48px height, mobile 44px
  - Font: 16-18px, bold
  - Hover: slight scale up (1.02-1.05) + shadow
  - Click behavior: smooth scroll đến Tickets section

---

### Slide B - Y.O.U Organization

**Background:**
- Hình ảnh nhận diện tổ chức Y.O.U (logo pattern hoặc event photo grid)
- Gradient overlay tương tự Slide A
- Brand accent color có thể nhìn thấy

**Nội dung:**
- **Headline:** "All Youths Start with Y.O.U"
  - Font size: tương tự Slide A
  - Style: có thể dùng gradient text hoặc accent color
- **Subheadline:** "Liên minh tổ chức trẻ tại 85+ quốc gia"
  - Font size: tương tự Slide A
- **Stat badges (optional):** "85+ Countries • 500+ Organizations • 10,000+ Youth Leaders"
  - 3 badges inline, small text, semi-transparent background
- **CTA Button:** "Tham Gia Y.O.U"
  - Style: outline button hoặc secondary filled style (khác màu với Slide A để phân biệt)
  - Click behavior: smooth scroll đến Membership section

---

## Section 3: Event + Passport Narrative

**Mục tiêu:** Giải thích rõ logic giá trị: tham gia sự kiện → tích lũy thành Passport.

**Layout:**
- Desktop (>= 1024px): 2 columns, 50/50 split
- Tablet/Mobile: stacked vertically, Event block on top

**Left Column - Event Block:**
- **Section eyebrow:** "Tại sao tham gia?"
- **Headline (H2):** "Xây Dựng Hành Trình Lãnh Đạo Của Bạn"
- **Subheadline:** Mô tả ngắn về giá trị của sự kiện
- **Bullet list (4-5 items):**
  - Kết nối với lãnh đạo trẻ từ 85+ quốc gia
  - Học hỏi từ chuyên gia quốc tế hàng đầu
  - Xây dựng dự án cộng đồng thực tiễn
  - Nhận chứng chỉ công nhận quốc tế
  - Mở rộng mạng lưới quan hệ toàn cầu
- **CTA link:** "Tìm Hiểu Thêm" → scroll đến Timeline

**Right Column - Passport Card:**
- **Section eyebrow:** "Sản phẩm"
- **Card visual:**
  - Background: gradient accent hoặc image
  - Icon/Logo: Passport book icon
  - **Headline:** "Global Citizen Passport"
  - **Description:** "Tích lũy thành tích từ mỗi sự kiện thành hồ sơ năng lực dài hạn"
  - **Benefit list (3-4 items):**
    - Ghi nhận thành tích từ mọi sự kiện
    - Hồ sơ năng lực xác minh được
    - Cơ hội hợp tác và việc làm toàn cầu
    - Badge và credential hiển thị công khai

**Core message cốt lõi (nên có text nhỏ bên dưới section):**
"Mỗi sự kiện tạo dấu mốc học tập và năng lực. Các dấu mốc tích lũy thành hồ sơ giá trị dài hạn."

**Spacing:**
- Desktop: gap 48-64px giữa 2 columns
- Mobile: padding 24px horizontal, gap 32px vertical
- Section padding: 80px top/bottom desktop, 48px tablet, 32px mobile

---

## Section 4: Event Timeline

**Mục tiêu:** Cho người dùng thấy rõ hành trình tham gia từ đầu đến cuối.

**Số milestone:** 6 mốc

**Layout:**
- Desktop: horizontal timeline với milestone cards trên đường line
- Tablet/Mobile: vertical timeline với connector line bên trái

**6 Milestones:**

| # | Tiêu đề | Mốc thời gian | Mô tả |
|---|---------|---------------|-------|
| 1 | Mở Đăng Ký | [Date] | Ứng viên nộp hồ sơ và chọn loại vé phù hợp |
| 2 | Xác Nhận Hồ Sơ | [Date] | Đánh giá hồ sơ và thông báo kết quả trong 7 ngày |
| 3 | Định Hướng Trước Sự Kiện | [Date] | Onboarding online và chuẩn bị kiến thức nền |
| 4 | Ngày Diễn Ra Sự Kiện | [Date] | 2-3 ngày hoạt động chính tại địa điểm |
| 5 | Chứng Nhận Sau Sự Kiện | [Date] | Nhận certificate và post-event feedback |
| 6 | Cập Nhật Passport | [Date] | Thành tích được ghi nhận vào Global Citizen Passport |

**Visual timeline (Desktop):**
- Horizontal line nối các milestone
- Mỗi milestone: circle node trên line → vertical card bên dưới
- Card content: icon (số hoặc icon) + title + date + description
- Active/completed milestone có thể có checkmark hoặc filled circle

**Visual timeline (Mobile):**
- Line vertical bên trái
- Mỗi milestone: circle node → content block bên phải
- Content: title + date + description stacked vertically

**Spacing:**
- Desktop: cards cách nhau 24-32px, card height ~120px
- Mobile: items cách nhau 16-24px
- Section padding: tương tự section 3

---

## Section 5: Tickets + Payment

**Mục tiêu:** Giúp người dùng chọn vé nhanh và chuyển sang thanh toán rõ ràng.

**Layout:**
- Desktop (>= 1024px): 4 cards trong 1 row (grid 4 cột) hoặc 2x2 grid
- Tablet/Mobile (< 1024px): horizontal carousel/swipe

**4 Ticket Cards:**

### Card 1: Summit Pass
- **Price:** $299 USD
- **Badge:** (none hoặc "Phổ biến")
- **Benefits (4 items):**
  - Lớp học và workshop chuyên sâu
  - Networking session với leaders
  - Event materials và resources
  - Certificate tham dự
- **CTA Button:** "Đăng Ký Ngay"
- **Visual:** Standard card style

### Card 2: Self-Funded
- **Price:** $440 USD
- **Badge:** "Premium"
- **Benefits (5 items):**
  - Tất cả perks của Summit Pass
  - Premium networking dinner
  - 1-on-1 mentorship session
  - Video recordings của tất cả sessions
  - Priority support
- **CTA Button:** "Đăng Ký Ngay"
- **Visual:** Highlighted border hoặc "Best Value" badge

### Card 3: Fully Funded
- **Price:** $21.99 USD (phí hành chính)
- **Badge:** "Sponsor Supported"
- **Benefits (3 items):**
  - Miễn phí tham gia (sponsor chi trả toàn bộ)
  - Áp dụng cho tổ chức có hoàn cảnh khó khăn
  - Cần apply và phê duyệt trước
- **CTA Button:** "Đăng Ký Ngay"
- **Note nhỏ:** "Miễn phí học phí • Chỉ thanh toán phí hành chính"

### Card 4: Partially Funded
- **Price:** $21.99 USD (phí hành chính)
- **Badge:** "Giảm 70%"
- **Benefits (3 items):**
  - Giảm 70% học phí (từ $440 xuống còn $21.99 admin)
  - Cho tổ chức đang phát triển
  - Cần xác minh tư cách
- **CTA Button:** "Đăng Ký Ngay"
- **Note nhỏ:** "Chương trình hỗ trợ cộng đồng"

**Card Design:**
- Background: white hoặc light gray
- Border: 1px light gray, hover shadow
- Price: large font size (28-32px), accent color
- Benefits: checkmark icon + text, color dark
- CTA: full-width button at bottom of card
- Hover state: shadow elevation, slight scale

**Trust Elements (bên dưới cards):**
- Row ngang: icon lock + "Thanh toán an toàn qua Stripe và PayPal"
- Payment method icons: Stripe badge, PayPal badge
- Refund note nhỏ: "Chính sách hoàn tiền trong 7 ngày"

**Carousel Behavior (Mobile):**
- Horizontal scroll/swipe
- Snap to card
- Dots pagination bên dưới
- Peek: 1 phần của next card visible để hint có thêm content

---

## Section 6: Membership Application

**Mục tiêu:** Thu lead chất lượng cho chương trình thành viên nội bộ.

**Layout:**
- Desktop: 2 columns - Left form (60%), Right GIF (40%)
- Tablet/Mobile: stacked vertically - form on top, GIF below

**Left Column - Form:**

**Header:**
- **Headline (H2):** "Trở Thành Thành Viên Nội Bộ Y.O.U"
- **Subheadline:** "Điền thông tin tổ chức để tham gia mạng lưới kết nối và hợp tác toàn cầu"

**Form Fields (9 fields):**

1. **Họ tên đại diện** [Text input]
   - Placeholder: "Nguyễn Văn A"
   - Required

2. **Tên tổ chức** [Text input]
   - Placeholder: "Tên tổ chức của bạn"
   - Required

3. **Email** [Email input]
   - Placeholder: "email@organization.com"
   - Required, validate email format

4. **Số điện thoại** [Tel input]
   - Placeholder: "+84 xxx xxx xxx"
   - Required, validate phone format

5. **Năm thành lập** [Number input]
   - Placeholder: "2020"
   - Required, min 1900, max current year

6. **Số lượng thành viên** [Select dropdown]
   - Options: Dưới 10 | 10-50 | 50-100 | Trên 100
   - Required

7. **Website hoặc mạng xã hội** [Text input]
   - Placeholder: "https://facebook.com/yourorg"
   - Optional

8. **Mô tả tổ chức** [Textarea]
   - Placeholder: "Giới thiệu ngắn về tổ chức của bạn..."
   - Max 200 ký tự
   - Required

9. **Sứ mệnh và tầm nhìn** [Textarea]
   - Placeholder: "Sứ mệnh và tầm nhìn của tổ chức..."
   - Max 300 ký tự
   - Required

**Submit Button:**
- Text: "Gửi Đơn Đăng Ký"
- Style: full-width, accent color, 48px height
- Hover: slight elevation
- Loading state: spinner + "Đang gửi..."
- Disabled state: grayed out khi form invalid

**Success State:**
- Khi submit thành công, form được replace bằng:
- Icon: checkmark in circle (green)
- Headline: "Cảm Ơn Bạn!"
- Message: "Chúng tôi đã nhận đơn đăng ký và sẽ liên hệ trong vòng 5 ngày làm việc."

**Error State:**
- Inline error messages bên dưới từng field
- Error message color: red
- Summary error banner at top nếu submit fail

**Right Column - GIF:**
- Y.O.U themed animated GIF
- Kích thước: responsive, max 400px width
- Alt text: "Y.O.U membership animation"
- Fallback: static image nếu GIF fail
- Animation: subtle movement (logo animation, data visualization, etc.)
- File size: < 4MB

**Desktop layout specifics:**
- Form column: padding right 32px
- GIF column: padding left 32px, centered vertically
- Gap between columns: 48px

**Mobile layout:**
- Form full width, padding 24px
- GIF below form, centered, max 300px
- Gap: 24px

---

## Section 7: Footer

**Thành phần:**
- Logo Y.O.U (full color)
- Tagline: "Connecting Youth Organizations for Global Impact"
- Contact info: email, phone (nếu có)
- Quick nav links: Home, Event, Timeline, Tickets, Membership
- Copyright: "© 2026 Youth Organization Union. All rights reserved."

**Layout:**
- Desktop: 4 columns (Logo+tagline, Links, Contact, Social)
- Tablet: 2x2 grid
- Mobile: stacked vertically

**Visual:**
- Background: dark color (navy hoặc dark gray)
- Text: white hoặc light gray
- Links: white, hover accent color
- Social icons: white, hover accent

**Spacing:**
- Footer padding: 64px top, 32px bottom desktop
- Mobile: 48px top, 24px bottom
- Section separator: thin line hoặc subtle shadow

---

## Animation & Motion Guidelines

**Allowed:**
- Hero transition: crossfade 400-600ms, slide 600-800ms
- Section reveal on scroll: fade-in + slight translate up (opacity 0→1, translateY 20px→0), 300-500ms, staggered 100ms
- Card hover: shadow elevation + slight scale (1.02), 200ms ease
- Button hover: background color shift + slight scale (1.02), 150ms ease

**Not allowed:**
- Too many animations running simultaneously
- Distracting effects that slow reading
- Auto-play video or continuous heavy animation
- Flashing or blinking elements

**Reduced Motion:**
- If prefers-reduced-motion is detected:
  - Disable auto-rotate on slider
  - Disable scroll reveal animations
  - Use instant state changes instead

---

## Responsive Behavior Summary

| Element | Mobile (<768px) | Tablet (768-1023px) | Desktop (>=1024px) |
|---------|-----------------|---------------------|-------------------|
| Header | Hamburger + CTA in menu | Hamburger + CTA in menu | Full nav + CTA |
| Hero | Stacked, smaller text | Medium text | Full size text |
| Event+Passport | Stacked vertically | Stacked vertically | 2 columns side-by-side |
| Timeline | Vertical | Vertical | Horizontal |
| Tickets | Horizontal carousel | Horizontal carousel | 4 cards in row |
| Membership | Form on top, GIF below | Form on top, GIF below | Form left, GIF right |
| Footer | Stacked | 2x2 grid | 4 columns |

---

## Assets Required (từ client/team)

1. Hero event images: tối thiểu 2 ảnh, recommend 1920x1080
2. Y.O.U organization banner image
3. GIF cho membership section (< 4MB)
4. Fallback static image cho GIF
5. Passport card visual/icon
6. Payment method icons (Stripe, PayPal)
7. Social media icons
8. Lock icon cho trust element

---

## SEO Metadata

**Title:** Y.O.U - Global Youth Summit and Youth Organization Alliance

**Description:** Tham gia sự kiện Y.O.U, tích lũy hành trình Global Citizen Passport và trở thành một phần của mạng lưới lãnh đạo trẻ quốc tế.

**Keywords:** youth summit, youth organization, global passport, youth leadership, international youth event, young leaders

---

## Output Requirements

- Figma-compatible design file
- All interactive states: default, hover, active, disabled, loading, success, error
- Mobile, tablet, desktop variants for each section
- Color palette với hex codes
- Typography specs (font family, sizes, weights)
- Component specifications với measurements
- Interactive prototype với scroll behavior và CTA actions