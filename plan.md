# Platform MVP Implementation Plan
## Next.js + Payload CMS (SQLite)

### Overview
Embed Payload CMS 3.x into the existing Next.js app, restructuring into route groups.
Database: SQLite (swap to Supabase Postgres later via one-line adapter change).

---

## Phase 1: Foundation Setup

### Step 1.1 — Install Payload dependencies
```bash
npm install payload @payloadcms/next @payloadcms/db-sqlite @payloadcms/richtext-lexical sharp graphql --legacy-peer-deps
```

### Step 1.2 — Restructure app into route groups
Move all existing frontend files into `app/(frontend)/` and add Payload files in `app/(payload)/`.

**Before:**
```
app/
├── layout.tsx          (root layout with Navigation)
├── page.tsx            (homepage)
├── globals.css
├── favicon.ico
├── components/         (Navigation)
├── _components/        (ProductShell)
├── products/           (listing + [slug] + _data + _components)
├── blogs/
├── categories/
└── pl300/
```

**After:**
```
app/
├── layout.tsx              (NEW minimal root layout — just <html><body>{children}</body></html>)
├── globals.css             (stays here, imported by root layout)
├── favicon.ico             (stays)
│
├── (frontend)/
│   ├── layout.tsx          (OLD root layout content — Navigation wrapper)
│   ├── page.tsx            (homepage)
│   ├── page.module.css
│   ├── components/
│   ├── _components/
│   ├── products/
│   ├── blogs/
│   ├── categories/
│   └── pl300/
│
├── (payload)/
│   └── admin/
│       └── [[...segments]]/
│           ├── page.tsx        (Payload admin panel)
│           └── not-found.tsx   (Payload 404)
│
└── api/
    ├── [...slug]/
    │   └── route.ts        (Payload REST API)
    └── graphql/
        └── route.ts        (Payload GraphQL)
```

**Files to create/modify:**
1. `app/layout.tsx` — strip to minimal root (html + body + globals.css only, NO Navigation)
2. `app/(frontend)/layout.tsx` — move Navigation wrapper here
3. Move all existing pages/components into `app/(frontend)/`
4. Create Payload admin route files (from blank template)
5. Create API route files

### Step 1.3 — Create payload.config.ts (project root)
Define 4 collections: Users, Media, Posts, Products.
Configure SQLite adapter, Lexical rich text editor.

### Step 1.4 — Update next.config.ts
Wrap config with `withPayload()` from `@payloadcms/next/withPayload`.
Disable React Compiler (Payload incompatible).

### Step 1.5 — Update tsconfig.json
Add `@payload-config` path alias pointing to `./payload.config.ts`.

### Step 1.6 — Create .env
```
PAYLOAD_SECRET=<random-string>
```

---

## Phase 2: Define Collections

### Step 2.1 — Users collection
- Fields: email (required), role (select: admin/editor), name
- Auth enabled (Payload built-in)
- Admin access: role === 'admin'

### Step 2.2 — Media collection
- Upload enabled (images: jpg, png, webp, svg)
- Image sizes: thumbnail (300x200), card (600x400), hero (1200x630)
- Fields: alt text

### Step 2.3 — Posts collection (Blog)
- Fields: title, slug (unique), content (richText/Lexical), excerpt, coverImage (relationship to Media), author (relationship to Users), status (draft/published), publishedAt
- Admin access: editor or admin
- Public access: only where status === 'published'
- Hooks: auto-generate slug from title

### Step 2.4 — Products collection
- Fields mapping from current Product interface:
  - title, slug (unique), badge, price
  - image (relationship to Media), logo (relationship to Media)
  - description (richText or array of text blocks)
  - targetAudience (array of text)
  - prerequisites (text)
  - skills (array of text)
  - courseCodes (text)
  - studyProgram (array of text)
  - testimonials (array: { quote, author })
  - instructors (text or array of { name, bio, avatar })
  - relatedCourses (relationship to self, hasMany)
  - quickFacts group: duration, certificate
  - courseProvider (select: datapot/microsoft/mixed/partner/unknown)
  - credential group: type, issuer, codes (array), confidence (number)
  - status (draft/published), publishedAt
- Access: same as Posts

---

## Phase 3: Frontend Integration (Public Pages)

### Step 3.1 — Create data access layer
New file: `app/(frontend)/lib/payload.ts`
- Uses Payload Local API (direct DB access, no HTTP overhead)
- `getPublishedPosts()` — fetch posts where status=published, ordered by publishedAt
- `getPostBySlug(slug)` — single post lookup
- `getPublishedProducts()` — fetch products where status=published
- `getProductBySlug(slug)` — single product lookup

### Step 3.2 — Update blog listing page
Replace placeholder content with real data from Payload.
- Fetch published posts via Local API
- Render post cards with title, excerpt, coverImage, date

### Step 3.3 — Create blog detail page
New route: `app/(frontend)/blogs/[slug]/page.tsx`
- Fetch post by slug
- Render rich text content
- generateStaticParams from all published post slugs

### Step 3.4 — Update product pages to dual-source
Modify `app/(frontend)/products/_data/index.ts`:
- Try Payload DB first (published products)
- Fall back to static .ts files if Payload has no data yet
- This allows incremental migration: seed products into Payload over time

### Step 3.5 — Product detail page
Keep existing `ProductPageShell` + sub-components.
Wire data source to Payload instead of static imports.

---

## Phase 4: Verification & Seed Data

### Step 4.1 — Create first admin user
On first visit to `/admin`, Payload prompts for admin account creation.

### Step 4.2 — Seed script (optional)
Create `scripts/seed.ts` that reads existing static .ts product data and inserts into Payload DB via Local API. This migrates the 6 existing products into the CMS.

### Step 4.3 — Test MVP gates
1. Admin logs in at `/admin` ✓
2. Admin invites editor (creates user with role=editor) ✓
3. Editor creates blog post → saves as draft → publishes → appears at `/blogs/[slug]` ✓
4. Editor creates product → publishes → appears at `/products/[slug]` ✓
5. Media upload works (cover images, avatars) ✓

---

## Implementation Order (sequential, each step depends on previous)

1. Install deps + create .env
2. Restructure app directory into route groups
3. Create payload.config.ts with all 4 collections
4. Update next.config.ts (withPayload wrapper)
5. Update tsconfig.json (@payload-config alias)
6. Create Payload admin route files
7. Create API route files
8. Test: `npm run dev` → visit `/admin` → create admin user
9. Create data access layer (lib/payload.ts)
10. Wire blog pages to Payload data
11. Wire product pages to Payload data (dual-source)
12. Test all MVP gates

---

## Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Next.js 16 + Payload incompatibility | Try first; if fails, downgrade Next.js to 15.x |
| Existing static product pages break during restructuring | Route groups are transparent to URLs — `/products/pl300` still works |
| Large file move breaks imports | All relative imports within `(frontend)` stay the same |
| Payload admin conflicts with existing styles | Payload runs in its own route group with isolated layout |

---

## Files Created (new)
- `payload.config.ts`
- `app/(payload)/admin/[[...segments]]/page.tsx`
- `app/(payload)/admin/[[...segments]]/not-found.tsx`
- `app/api/[...slug]/route.ts`
- `app/api/graphql/route.ts`
- `app/(frontend)/layout.tsx`
- `app/(frontend)/lib/payload.ts`
- `app/(frontend)/blogs/[slug]/page.tsx`
- `.env`

## Files Modified
- `app/layout.tsx` (simplified to minimal root)
- `next.config.ts` (add withPayload wrapper)
- `tsconfig.json` (add @payload-config path)
- `package.json` (new deps added by npm install)
- `app/(frontend)/products/_data/index.ts` (dual-source reading)

## Files Moved (into `(frontend)/` route group)
- `app/page.tsx` → `app/(frontend)/page.tsx`
- `app/page.module.css` → `app/(frontend)/page.module.css`
- `app/components/` → `app/(frontend)/components/`
- `app/_components/` → `app/(frontend)/_components/`
- `app/products/` → `app/(frontend)/products/`
- `app/blogs/` → `app/(frontend)/blogs/`
- `app/categories/` → `app/(frontend)/categories/`
- `app/pl300/` → `app/(frontend)/pl300/`