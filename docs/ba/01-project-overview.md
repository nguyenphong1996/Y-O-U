# 01 — Project Overview

## 1.1 Thông tin dự án

| Field | Value |
|-------|-------|
| **Tên dự án** | Y.O.U Website |
| **Tên đầy đủ** | Youth Organization Union |
| **Slogan** | "All Youths Start with Y.O.U." |
| **Loại sản phẩm** | Website tổ chức quốc tế + Landing page sự kiện |
| **Ngôn ngữ** | English |
| **Tech stack** | Next.js 16.2, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, SQLite |
| **Thanh toán** | Stripe + PayPal |

---

## 1.2 Tổ chức Y.O.U là gì?

**Youth Organization Union (Y.O.U.)** là một **liên minh toàn cầu** kết nối các tổ chức thanh niên tại 85+ quốc gia. Mô hình hoạt động:

- **Connector:** Kết nối founders và leaders của các tổ chức thanh niên
- **Enabler:** Hỗ trợ phát triển năng lực nội bộ cho tổ chức thành viên
- **Multiplier:** Nhân rộng tác động thông qua hợp tác tập thể

### Vision
> "To become the leading global hub, uniting youth organizations to amplify their internal capacity and collective impact."

### Mission
> "To unite youth organizations through collaboration, capacity building, and shared initiatives that strengthen member networks, develop youth leadership, and create opportunities for collective local and global impact."

### Sản phẩm cốt lõi: Global Citizen Passport
Một sản phẩm chung — **Global Citizen Passport** — do toàn bộ Union đồng sáng tạo:
- Ghi nhận thành tích từ mỗi sự kiện Y.O.U
- Tích lũy thành hồ sơ năng lực dài hạn
- Tạo cả giá trị xã hội (global citizenship, SDG awareness) và kinh tế

---

## 1.3 Stakeholders

| Vai trò | Tên | Trách nhiệm |
|---------|-----|-------------|
| **President** | Emily | Quyết định chiến lược, brand, nội dung chính |
| **Board Member** | Theodora | Đóng góp ý tưởng mission/vision/logo |
| **Developer** | (Freelancer) | Thiết kế + phát triển website |

---

## 1.4 Đối tượng người dùng (User Personas)

### Persona 1: Youth Leader (Cá nhân)
- **Tuổi:** 18–35
- **Vai trò:** Thanh niên, sinh viên, trưởng nhóm cộng đồng
- **Mục tiêu:** Tham gia sự kiện quốc tế, học hỏi, mở rộng mạng lưới
- **Hành vi trên site:** Xem thông tin sự kiện → Mua vé → Thanh toán
- **Touchpoint chính:** Hero banner, Ticket section, Payment flow

### Persona 2: Organization Founder/Leader (Tổ chức)
- **Tuổi:** 22–40
- **Vai trò:** Founder, Co-founder, Senior Manager của youth org
- **Mục tiêu:** Đăng ký tổ chức tham gia liên minh Y.O.U, có cơ hội hợp tác quốc tế
- **Hành vi trên site:** Tìm hiểu About → Xem Benefits → Điền form đăng ký membership
- **Touchpoint chính:** About section, Membership form, Team page

### Persona 3: Potential Continent/Country Director
- **Tuổi:** 25–40
- **Vai trò:** Leader muốn đại diện Y.O.U tại quốc gia/châu lục
- **Mục tiêu:** Apply vai trò Continent Director hoặc Country Director
- **Hành vi trên site:** Tìm hiểu governance → Apply role
- **Touchpoint chính:** About page, Role application form

### Persona 4: Partner/Sponsor (Observer)
- **Vai trò:** NGO, tổ chức giáo dục, nhà tài trợ
- **Mục tiêu:** Đánh giá Y.O.U có đáng hợp tác không
- **Hành vi trên site:** Xem About → Team → Projects → Contact
- **Touchpoint chính:** About, Team, SDG Projects, Contact

---

## 1.5 Business Goals

| # | Goal | Metric |
|---|------|--------|
| 1 | Thu hút đăng ký sự kiện | Số lượng registrations / thanh toán thành công |
| 2 | Thu hút tổ chức gia nhập Union | Số lượng founder applications |
| 3 | Xây dựng uy tín quốc tế | Bounce rate thấp, time-on-page cao tại About/Team |
| 4 | Thu hút Director applications | Số lượng Director role applications |
| 5 | Cung cấp thông tin minh bạch | Traffic tại Policies, FAQ, Contact pages |

---

## 1.6 Governance Structure của Union

```
                    ┌──────────────┐
                    │  President   │
                    │   (Emily)    │
                    └──────┬───────┘
                           │
                    ┌──────┴───────┐
                    │Vice President│
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
  ┌───────┴──────┐ ┌──────┴───────┐ ┌──────┴──────┐
  │  Continent   │ │  Continent   │ │  Continent  │
  │  Director    │ │  Director    │ │  Director   │
  │  (Africa)    │ │  (Asia)      │ │  (Europe)   │
  └───────┬──────┘ └──────┬───────┘ └──────┬──────┘
          │                │                │
    ┌─────┴─────┐   ┌─────┴─────┐   ┌─────┴─────┐
    │  Country  │   │  Country  │   │  Country  │
    │ Directors │   │ Directors │   │ Directors │
    └───────────┘   └───────────┘   └───────────┘
```

### Eligibility to Join

Tổ chức muốn tham gia Union phải đáp ứng:

1. **Organizational Status:** Hoạt động ít nhất 1 năm, ưu tiên đăng ký pháp lý
2. **Representation:** Founder, Co-founder hoặc Senior Manager có quyền quyết định
3. **Focus Areas:** Youth empowerment, children development, education, leadership, SDGs
4. **Commitment:** Tham gia ít nhất 1 cuộc họp/tháng, đóng góp ý tưởng, hỗ trợ sáng kiến chung

### Member Benefits

- Regional Knowledge & Idea Exchange
- Capacity Building & HR Development
- Project Support
- Co-creation of Global Citizen Passport (shared ownership)
- Global Visibility & Credibility
