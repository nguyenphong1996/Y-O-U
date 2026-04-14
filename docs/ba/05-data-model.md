# 05 — Data Model & API Contracts

## 5.1 Database

**Engine:** SQLite (`data/you.db`, auto-created on first run)

---

### 5.1.1 Existing Tables

#### `event_registrations` (Existing — giữ nguyên)

```sql
CREATE TABLE IF NOT EXISTS event_registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT,
  event_title TEXT NOT NULL,
  ticket_type TEXT NOT NULL,
  amount REAL NOT NULL,
  payment_method TEXT NOT NULL,    -- 'stripe' | 'paypal'
  payment_id TEXT,                 -- Stripe PaymentIntent ID hoặc PayPal Order ID
  booking_code TEXT NOT NULL,      -- Format: #YOU-2026-XXXX
  status TEXT DEFAULT 'confirmed', -- 'pending' | 'confirmed' | 'cancelled'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `founder_applications` (Existing — giữ nguyên)

```sql
CREATE TABLE IF NOT EXISTS founder_applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  founder_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization_name TEXT NOT NULL,
  year_founded INTEGER,
  member_count TEXT,               -- '<10' | '10-50' | '50-100' | '>100'
  website TEXT,
  organization_description TEXT,
  mission TEXT,
  status TEXT DEFAULT 'pending',   -- 'pending' | 'approved' | 'rejected'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

### 5.1.2 New Tables

#### `role_applications` (NEW — cho Director role)

```sql
CREATE TABLE IF NOT EXISTS role_applications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_organization TEXT NOT NULL,
  role_type TEXT NOT NULL,             -- 'continent_director' | 'country_director'
  target_region TEXT NOT NULL,         -- E.g., "Asia", "Vietnam"
  leadership_experience TEXT NOT NULL,
  motivation TEXT NOT NULL,
  portfolio_url TEXT,                  -- LinkedIn hoặc portfolio URL
  status TEXT DEFAULT 'pending',       -- 'pending' | 'interviewed' | 'approved' | 'rejected'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `contact_messages` (NEW — cho Contact form)

```sql
CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',     -- 'unread' | 'read' | 'replied'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `team_members` (NEW — cho Team page, optional)

```sql
CREATE TABLE IF NOT EXISTS team_members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  title TEXT NOT NULL,              -- 'President' | 'Vice President' | 'Continent Director' | 'Country Director'
  region TEXT,                      -- Continent hoặc Country
  organization TEXT,
  bio TEXT,
  photo_url TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

#### `member_organizations` (NEW — cho Members page, optional)

```sql
CREATE TABLE IF NOT EXISTS member_organizations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  continent TEXT NOT NULL,
  focus_areas TEXT,                 -- JSON array: ["youth_empowerment", "education", "sdg"]
  year_founded INTEGER,
  member_count TEXT,
  website TEXT,
  logo_url TEXT,
  description TEXT,
  is_approved BOOLEAN DEFAULT 0,
  founder_application_id INTEGER,  -- Link back to founder_applications if applicable
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (founder_application_id) REFERENCES founder_applications(id)
);
```

#### `projects` (NEW — cho SDG Projects, optional)

```sql
CREATE TABLE IF NOT EXISTS projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  organization_id INTEGER,
  sdg_goals TEXT,                  -- JSON array: [1, 4, 17] (SDG goal numbers)
  description TEXT NOT NULL,
  impact_summary TEXT,
  image_url TEXT,
  status TEXT DEFAULT 'active',    -- 'active' | 'completed' | 'upcoming'
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (organization_id) REFERENCES member_organizations(id)
);
```

---

## 5.2 API Routes

### 5.2.1 Existing APIs (Giữ nguyên, không breaking change)

| Endpoint | Method | Request Body | Response | Status |
|----------|--------|-------------|----------|--------|
| `/api/create-payment-intent` | POST | `{ amount, ticketType, email }` | `{ clientSecret }` | ✅ Existing |
| `/api/save-registration` | POST | `{ name, email, phone, org, eventTitle, ticketType, amount, paymentMethod, paymentId }` | `{ bookingCode }` | ✅ Existing |
| `/api/apply-founder` | POST | `{ founderName, email, phone, orgName, yearFounded, memberCount, website, description, mission }` | `{ success: true }` | ✅ Existing |

### 5.2.2 New APIs

#### `POST /api/apply-role`

**Purpose:** Submit Director role application

**Request:**
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "currentOrganization": "string",
  "roleType": "continent_director" | "country_director",
  "targetRegion": "string",
  "leadershipExperience": "string",
  "motivation": "string",
  "portfolioUrl": "string | null"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Your application has been submitted. We will review and contact you within 7 business days."
}
```

**Response (400):**
```json
{
  "success": false,
  "error": "Validation error message"
}
```

#### `POST /api/contact`

**Purpose:** Submit contact form

**Request:**
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Thank you for reaching out. We will respond within 2 business days."
}
```

---

## 5.3 Data Flow Diagrams

### Event Registration Flow

```
User (Browser)
    │
    ├── 1. Select ticket type
    │
    ├── 2. POST /api/create-payment-intent
    │       { amount, ticketType, email }
    │       → Stripe API → PaymentIntent
    │       ← { clientSecret }
    │
    ├── 3. Stripe.js confirmCardPayment(clientSecret)
    │       → Stripe processes payment
    │       ← { paymentIntent.id, status: 'succeeded' }
    │
    ├── 4. POST /api/save-registration
    │       { ...personalInfo, paymentId }
    │       → INSERT INTO event_registrations
    │       ← { bookingCode: '#YOU-2026-XXXX' }
    │
    └── 5. Redirect → /thank-you?code=YOU-2026-XXXX
```

### PayPal Alternative Flow

```
User (Browser)
    │
    ├── 1. Select ticket type
    │
    ├── 2. PayPal Buttons → createOrder
    │       → PayPal API → Order created
    │
    ├── 3. User approves on PayPal popup
    │       → onApprove callback
    │
    ├── 4. POST /api/save-registration
    │       { ...personalInfo, paymentMethod: 'paypal', paymentId: orderId }
    │       → INSERT INTO event_registrations
    │       ← { bookingCode }
    │
    └── 5. Redirect → /thank-you
```

### Membership Application Flow

```
User (Browser)
    │
    ├── 1. Fill 9 form fields
    │
    ├── 2. Client-side validation
    │
    ├── 3. POST /api/apply-founder
    │       { founderName, email, ... }
    │       → INSERT INTO founder_applications (status='pending')
    │       ← { success: true }
    │
    └── 4. Show success message
           "We'll contact you in 5 business days"
```

---

## 5.4 Environment Variables

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=...

# Database
DATABASE_URL=./data/you.db

# Email (future — for contact form notifications)
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
ADMIN_EMAIL=...
```
