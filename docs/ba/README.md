# Y.O.U Website — Business Analysis Documentation

> **Project:** Youth Organization Union (Y.O.U.) Website
> **Client:** Emily (President) + Theodora (Board Member)
> **Stack:** Next.js 16.2 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui
> **Language:** Tiếng Anh (English-only UI)
> **Design Reference:** https://headwayinstitute.org/

---

## 📋 Document Map

| # | Document | Mô tả |
|---|----------|--------|
| 1 | [01-project-overview.md](./01-project-overview.md) | Tổng quan dự án, vision/mission, stakeholder, đối tượng người dùng |
| 2 | [02-sitemap-and-ia.md](./02-sitemap-and-ia.md) | Sitemap, Information Architecture, cấu trúc trang |
| 3 | [03-functional-requirements.md](./03-functional-requirements.md) | Yêu cầu chức năng chi tiết theo từng module/page |
| 4 | [04-ui-ux-spec.md](./04-ui-ux-spec.md) | Đặc tả UI/UX, responsive, motion, design system |
| 5 | [05-data-model.md](./05-data-model.md) | Database schema, API contracts, data flow |
| 6 | [06-content-matrix.md](./06-content-matrix.md) | Nội dung cần chuẩn bị, copy, assets |
| 7 | [07-acceptance-criteria.md](./07-acceptance-criteria.md) | Tiêu chí nghiệm thu, test scenarios |
| 8 | [08-phasing-and-priorities.md](./08-phasing-and-priorities.md) | Phân phase, mức ưu tiên, roadmap |

---

## 🎯 Scope Overview

### Nguồn yêu cầu đầu vào

| Nguồn | Nội dung chính |
|-------|---------------|
| `YÊU CẦU WEBSITE YOU.docx` | Yêu cầu tổng thể từ client — nội dung, đội ngũ, đăng ký, sự kiện, policies, FAQ |
| `Y.O.U Website.pdf` | Website structure: Homepage + Learning Hub |
| `Youth Union - Idea Brief.pdf` | Proposal thành lập Union — vision, mission, eligibility, benefits, governance |
| `Emily idea on name logo vision mission.pdf` | Brand identity — tên, logo, slogan, vision, mission |
| `Ideas from Theodora - Youth Union.pdf` | Ý tưởng thêm về tên, slogan, mission, vision, logo |
| Existing codebase (PLAN.md) | Landing page đã build — payment flow, forms, 13 sections |

### Phạm vi tổng quan

Website Y.O.U là nền tảng **multi-page** phục vụ 2 mục tiêu chính:

```
┌─────────────────────────────────────────────────────────────┐
│                    Y.O.U WEBSITE                            │
├─────────────────────┬───────────────────────────────────────┤
│   FLOW 1 (Public)   │   FLOW 2 (Organization)              │
│   Tham gia sự kiện  │   Đăng ký thành viên liên minh       │
│   → Mua vé          │   → Apply membership                 │
│   → Thanh toán       │   → Apply vai trò (Director)         │
│   → Thank You page   │   → Confirmation                     │
├─────────────────────┴───────────────────────────────────────┤
│   FLOW 3 (Content)                                          │
│   Giới thiệu Union · Đội ngũ · Tổ chức thành viên          │
│   Dự án SDG · Policies · FAQ · Contact                      │
└─────────────────────────────────────────────────────────────┘
```

### Tổng hợp scope vs hiện trạng

| Feature | Client yêu cầu | Đã build | Gap |
|---------|----------------|----------|-----|
| Landing page (Hero, Tickets, Membership Form) | ✅ | ✅ | Cần redesign theo IA mới |
| Payment (Stripe + PayPal) | ✅ | ✅ | Giữ nguyên |
| Founder Application Form | ✅ | ✅ | Giữ nguyên backend, bổ sung field vai trò |
| Giới thiệu Union (About) | ✅ (ưu tiên cao nhất) | ❌ | **NEW** |
| Đội ngũ lãnh đạo (Team) | ✅ | ❌ | **NEW** |
| Tổ chức thành viên (Members) | ✅ | ❌ | **NEW** |
| Dự án SDG (Projects) | ✅ | ❌ | **NEW** |
| Learning Hub | ✅ | ❌ | **NEW** |
| Policies & Documents | ✅ (ưu tiên) | ❌ | **NEW** |
| FAQ | ✅ (ưu tiên) | ❌ (có trên LP cũ) | Tách thành page riêng |
| Contact | ✅ (ưu tiên cao) | ❌ (có trên LP cũ) | Tách thành page riêng |
| Event Detail + Registration | ✅ (làm sau) | Partial (card) | Cần page riêng |
| Đăng ký vai trò (Director) | ✅ | ❌ | **NEW** |

---

## ⚠️ Key Decisions Needed

Các quyết định cần confirm với client trước khi triển khai:

1. **Phase 1 scope** — Landing page redesign + About + Team + Contact + FAQ đủ cho launch đầu tiên?
2. **Đăng ký vai trò Director** — Chung form với Founder Application hay tách riêng?
3. **Learning Hub** — Video intro từ President cần embed YouTube hay self-hosted?
4. **Tổ chức thành viên** — Data nhập tay hay tự động từ approved applications?
5. **Dự án SDG** — Cần CMS để client tự quản lý hay hardcode ban đầu?
6. **Multi-language** — Client nói English-only, nhưng cần confirm không cần Vietnamese toggle?
7. **Domain + Hosting** — Vercel? Railway? VPS?
