# 08 — Phasing & Priorities

## 8.1 Mức ưu tiên từ Client

Trích từ `YÊU CẦU WEBSITE YOU.docx`:

| Priority | Feature |
|----------|---------|
| 🔴 **Cao nhất** | Giới thiệu về Liên minh (About) |
| 🔴 **Cao** | Cho phép đăng ký thành viên (Membership) |
| 🔴 **Cao** | Contact |
| 🟡 **Ưu tiên** | Tầm nhìn sứ mệnh giá trị cốt lõi |
| 🟡 **Ưu tiên** | Giới thiệu đội ngũ (Team) |
| 🟡 **Ưu tiên** | Các quy trình, tài liệu chính sách (Policies) |
| 🟡 **Ưu tiên** | FAQ |
| 🟡 **Trung bình** | Giới thiệu tổ chức thành viên (Members) |
| 🟡 **Trung bình** | Dự án SDG (Projects) |
| 🟢 **Làm sau** | Tổ chức sự kiện + đăng ký (Event detail pages) |
| 🟢 **Làm sau** | Đăng ký vai trò Director |
| 🟢 **Phase 2** | Learning Hub |

---

## 8.2 Phasing Plan

### Phase 1: Foundation + Core Pages (Tuần 1–2)

**Mục tiêu:** Website có thể launch với đủ thông tin giới thiệu + flow đăng ký cốt lõi.

| # | Task | Dependencies | Est. |
|---|------|-------------|------|
| 1.1 | Redesign Homepage (7 sections) | Assets từ client | 3 ngày |
| 1.2 | About Page | Vision/Mission copy | 1 ngày |
| 1.3 | Team Page (static data ban đầu) | Team photos + bios | 1 ngày |
| 1.4 | Contact Page + API | Contact info | 0.5 ngày |
| 1.5 | FAQ Page (migrate từ LP cũ + mở rộng) | FAQ content | 0.5 ngày |
| 1.6 | Header + Footer (multi-page) | Logo files | 1 ngày |
| 1.7 | Responsive testing + polish | — | 1 ngày |

**Blocked by:**
- Logo files (SVG/PNG)
- Hero images (ít nhất 2 ảnh)
- Team photos + bios
- Contact info chính thức
- GIF cho membership section

**Deliverable:** Website live với: Homepage, About, Team, Contact, FAQ

---

### Phase 2: Membership & Policies (Tuần 3)

**Mục tiêu:** Hoàn thiện flow đăng ký thành viên + legal compliance.

| # | Task | Dependencies | Est. |
|---|------|-------------|------|
| 2.1 | Director Role Application form + API | — | 1 ngày |
| 2.2 | `/join` page (combined Membership + Director) | — | 0.5 ngày |
| 2.3 | Policies page | Policy documents từ client | 0.5 ngày |
| 2.4 | Privacy Policy (GDPR/PDPA) | Legal review | 0.5 ngày |
| 2.5 | Terms & Conditions | Legal review | 0.5 ngày |

**Blocked by:**
- Policy/legal documents

**Deliverable:** Full membership flow + legal pages

---

### Phase 3: Events & Organizations (Tuần 4–5)

**Mục tiêu:** Event detail pages + Organization directory.

| # | Task | Dependencies | Est. |
|---|------|-------------|------|
| 3.1 | Event listing page `/events` | Event schedule data | 1 ngày |
| 3.2 | Event detail page `/events/[slug]` | Event content | 2 ngày |
| 3.3 | Member Organizations page `/members` | Org data | 1 ngày |
| 3.4 | SDG Projects page `/projects` | Project data | 1 ngày |

**Blocked by:**
- Event details (agenda, speakers)
- Member org data (logos, descriptions)
- Project data

**Deliverable:** Full event + organization showcase

---

### Phase 4: Learning Hub & Polish (Tuần 6+)

**Mục tiêu:** Learning Hub + overall polish.

| # | Task | Dependencies | Est. |
|---|------|-------------|------|
| 4.1 | Learning Hub page | Video from President | 1 ngày |
| 4.2 | SEO optimization | — | 0.5 ngày |
| 4.3 | Performance optimization | — | 0.5 ngày |
| 4.4 | Cross-browser testing | — | 0.5 ngày |
| 4.5 | Deploy to production | Domain + hosting | 0.5 ngày |

**Deliverable:** Complete website, production-ready

---

## 8.3 Gantt Chart (Simplified)

```
Tuần 1 ████████ Phase 1: Homepage redesign + About + Team
Tuần 2 ████████ Phase 1: Contact + FAQ + Header/Footer + Polish
Tuần 3 ████████ Phase 2: Director form + Join page + Policies
Tuần 4 ████████ Phase 3: Events listing + detail pages
Tuần 5 ████████ Phase 3: Members + Projects pages
Tuần 6 ████████ Phase 4: Learning Hub + SEO + Deploy
```

---

## 8.4 Risk Matrix

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|------------|
| Logo chưa finalize | 🔴 High | 🟡 Medium | Dùng text-based logo tạm, design system flexible |
| Client không cung cấp photos/bios đúng hạn | 🔴 High | 🔴 High | Dùng placeholder images + dummy data, swap khi có |
| Client đổi requirements (scope creep) | 🟡 Medium | 🟡 Medium | Document rõ scope per phase, sign-off mỗi phase |
| Payment flow bị break khi redesign | 🔴 High | 🟢 Low | Giữ nguyên existing APIs + components, chỉ wrap UI mới |
| GDPR/PDPA compliance thiếu | 🟡 Medium | 🟡 Medium | Thêm consent checkbox, Privacy Policy sớm |
| Hosting chưa quyết | 🟡 Medium | 🟡 Medium | Develop với Vercel preset, dễ deploy sau |

---

## 8.5 Definition of Done (Per Phase)

### Phase 1 DOD:
- [ ] Homepage 7 sections hoạt động đúng
- [ ] Hero slider auto-rotate + countdown
- [ ] Payment flow Stripe + PayPal hoạt động
- [ ] Membership form submit thành công
- [ ] About page đầy đủ nội dung
- [ ] Team page hiển thị đội ngũ
- [ ] Contact page + form hoạt động
- [ ] FAQ page với accordion
- [ ] Responsive: mobile, tablet, desktop
- [ ] No console errors
- [ ] Client review + sign-off

### Phase 2 DOD:
- [ ] Director application form + API
- [ ] Combined `/join` page
- [ ] Policies page published
- [ ] Privacy Policy + Terms
- [ ] Client review + sign-off

### Phase 3 DOD:
- [ ] Event listing + detail pages
- [ ] Registration from event detail page
- [ ] Members directory with filter
- [ ] Projects page with SDG filter
- [ ] Client review + sign-off

### Phase 4 DOD:
- [ ] Learning Hub live
- [ ] Lighthouse scores met
- [ ] Cross-browser tested
- [ ] Production deployment
- [ ] Live keys swapped (Stripe)
- [ ] Final client sign-off

---

## 8.6 Nếu bị trễ tiến độ — Priority Cut Guide

**KHÔNG ĐƯỢC CẮT (Core):**
1. Payment flow (Stripe + PayPal)
2. Membership Application form
3. About page
4. Contact page
5. Responsive layout

**CÓ THỂ LÙI (Move to later phase):**
1. Learning Hub → Phase 4+
2. SDG Projects → Phase 4+
3. Member Organizations → Phase 3+
4. Director Role Application → Phase 3+
5. Timeline section trên Homepage
6. Animated counters / scroll reveals

**CÓ THỂ ĐƠN GIẢN HÓA:**
1. Team page → chỉ Executive Board, bỏ Directors
2. FAQ → accordion basic, bỏ search/filter
3. Events → chỉ listing, bỏ detail page
4. Hero slider → static hero thay vì slider
