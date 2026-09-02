# Saurabh Infosys — Agent Rules & Guidelines

> **This file governs all AI-assisted development on the Saurabh Infosys website.**
> Every agent — Claude, Gemini, Antigravity, Cursor — MUST read and follow these rules before writing any code.

---

## 1. 🏢 Project Identity

- **Company:** Saurabh Infosys
- **Industry:** IT Services & Digital Solutions (Web, Mobile, Cloud ERP, Society Management)
- **Location:** Ahmedabad, Gujarat, India
- **Website:** https://saurabhinfosys.com
- **Design Reference:** [Flux Studio Agency](https://flux-studio-agency.webflow.io/)
- **Primary Color:** `#5235F6` (vibrant electric purple from Flux Studio reference)

---

## 2. 🧱 Tech Stack

| Layer             | Technology                                                              |
| ----------------- | ----------------------------------------------------------------------- |
| **Framework**     | Next.js 16 (App Router, Turbopack, Static Export → `out/`)              |
| **Language**      | TypeScript (strict mode, no `any`)                                      |
| **UI Library**    | React 19 (`react` + `react-dom` 19)                                     |
| **Styling**       | Tailwind CSS v3/v4 extended with custom design tokens                   |
| **Animation**     | Framer Motion 12 (`framer-motion`)                                      |
| **Icons**         | **HugeIcons exclusively** (`@hugeicons/react` + `@hugeicons/core-free-icons`) |
| **Toasts**        | Sonner (`sonner`)                                                       |
| **Fonts**         | Clash Display (headings) + Manrope (body) via `next/font`               |
| **Deployment**    | GitHub Actions → rsync to cPanel shared hosting (Apache)                |
| **Analytics**     | Google Analytics 4 (`G-6DRPCYYNQ5`)                                    |

---

## 3. 📁 File Structure Convention (Next.js 16 Architecture)

```
src/
├── app/                          # Next.js App Router — ROUTING ONLY (Server Components)
│   ├── layout.tsx                # Root layout (fonts, metadata, GA4, schema.org)
│   ├── page.tsx                  # Homepage — server only, imports HomePage
│   ├── loading.tsx               # Root skeleton loader
│   ├── error.tsx                 # Root error boundary UI
│   ├── not-found.tsx             # 404 page
│   ├── globals.css               # Design tokens + Tailwind
│   ├── about/
│   │   ├── page.tsx              # Server only, imports AboutPage
│   │   ├── loading.tsx           # Skeleton
│   │   └── error.tsx             # Error boundary
│   ├── services/
│   │   ├── page.tsx              # Server only, imports ServicesPage
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── [slug]/
│   │       ├── page.tsx          # Server only, async params: const { slug } = await params
│   │       ├── loading.tsx
│   │       └── error.tsx
│   ├── portfolio/
│   │   ├── page.tsx              # Server only, imports PortfolioPage
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── [slug]/
│   │       ├── page.tsx          # async params
│   │       ├── loading.tsx
│   │       └── error.tsx
│   ├── blog/
│   │   ├── page.tsx              # Server only, imports BlogPage
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   └── [slug]/
│   │       ├── page.tsx          # async params
│   │       ├── loading.tsx
│   │       └── error.tsx
│   ├── contact/
│   │   ├── page.tsx              # Server only, imports ContactPage
│   │   ├── loading.tsx
│   │   └── error.tsx
│   ├── products/
│   │   ├── page.tsx              # Server only, imports ProductsPage
│   │   ├── loading.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── pages/                    # Page-level components (client islands isolated)
│   │   ├── home/
│   │   │   ├── index.tsx         # HomePage (barrel export)
│   │   │   ├── hero-section.tsx
│   │   │   ├── clients-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── services-section.tsx
│   │   │   ├── process-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── testimonial-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   ├── blog-section.tsx
│   │   │   └── cta-section.tsx
│   │   ├── about/
│   │   │   ├── index.tsx         # AboutPage
│   │   │   ├── about-hero.tsx
│   │   │   ├── stats-strip.tsx
│   │   │   ├── values-grid.tsx
│   │   │   ├── team-grid.tsx
│   │   │   └── awards-list.tsx
│   │   ├── services/
│   │   │   ├── index.tsx         # ServicesPage
│   │   │   └── service-detail-page.tsx
│   │   ├── portfolio/
│   │   │   ├── index.tsx         # PortfolioPage
│   │   │   └── project-detail-page.tsx
│   │   ├── blog/
│   │   │   ├── index.tsx         # BlogPage
│   │   │   └── post-detail-page.tsx
│   │   └── contact/
│   │       ├── index.tsx         # ContactPage
│   │       ├── contact-form.tsx  # Client leaf with state/action
│   │       └── contact-info.tsx
│   │
│   ├── layout/                   # App Frame
│   │   ├── navbar.tsx            # Header navigation + mobile drawer
│   │   ├── footer.tsx            # Multi-column black footer
│   │   ├── page-shell.tsx        # Outer padding and max-width wrapper
│   │   └── mobile-menu.tsx       # Client island for mobile drawer
│   │
│   ├── shared/                   # Reusable cross-page components
│   │   ├── section-header.tsx    # Em-dash pattern (— SERVICES)
│   │   ├── empty-state.tsx       # Empty and error state displays
│   │   ├── stat-card.tsx
│   │   ├── cta-banner.tsx
│   │   └── skeleton/             # Skeleton loaders (no layout shifts)
│   │       ├── card-skeleton.tsx
│   │       ├── grid-skeleton.tsx
│   │       └── page-skeleton.tsx
│   │
│   └── ui/                       # Primitive design tokens / UI components
│       ├── button.tsx            # Primary, secondary, tertiary pill buttons
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       └── textarea.tsx
│
├── hooks/                        # Custom React hooks (use-<thing>.ts)
├── lib/
│   ├── data.ts                   # All content data (services, company, blog, projects)
│   ├── constants.ts              # Design tokens, nav links, social URLs, metadata
│   └── utils.ts                  # cn() utility (clsx + tailwind-merge)
├── types/                        # Global TypeScript types (kebab-case.ts)
└── public/                       # Static assets, logos, fonts, images
```

---

## 4. ⚡ The Golden Rules of Next.js 16

### 4.1 The Law of `page.tsx`
1. **`page.tsx` is ALWAYS a Server Component.**
   - Never write `"use client"` in `page.tsx` or `layout.tsx`.
   - Contains NO business logic, NO state hooks (`useState`, `useEffect`), and NO heavy JSX.
   - It exports `metadata` and renders exactly one page-level component from `@/components/pages/<route>`.

```tsx
// ✅ CORRECT — app/services/page.tsx (Server Component)
import type { Metadata } from "next";
import { ServicesPage } from "@/components/pages/services";

export const metadata: Metadata = {
  title: "Services",
  description: "End-to-end digital solutions, custom software, web and mobile development."
};

export default function Page() {
  return <ServicesPage />;
}
```

### 4.2 Next.js 16 Dynamic Route APIs are Async
In Next.js 16, `params` and `searchParams` are Promises and **MUST be awaited**:

```tsx
// ✅ CORRECT — Next.js 16 dynamic route
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
```

### 4.3 Client Boundaries: Push to the Leaves
- `"use client"` marks a **boundary, not a file** — everything imported beneath it runs in the client bundle.
- Keep page structures on the server and isolate interactivity (e.g. mobile toggle, contact form, animated accordion) to leaf components.

```
Is the component interactive? (click handler, form inputs, animation state)
  ├── YES → Isolate to the smallest possible leaf component, add "use client"
  └── NO  → Server Component (default)
```

### 4.4 Every Route Has `loading.tsx` and `error.tsx`
- Never let the user look at a blank screen or a generic unstyled spinner.
- Use shaped skeleton components in `loading.tsx` matching the final layout.

---

## 5. 🎯 Icons: HugeIcons ONLY

> **Zero tolerance for mixing icon libraries.**
> We do NOT use Lucide, FontAwesome, or inline SVGs. Use `@hugeicons/core-free-icons` and `@hugeicons/react`.

```tsx
// ✅ CORRECT
import { ArrowRight01Icon, Code01Icon, Call02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function ActionButton() {
  return (
    <button className="primary-button">
      <span>Get Started</span>
      <div className="button-icon-block">
        <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
      </div>
    </button>
  );
}
```

---

## 6. 📐 Design System — Flux Studio Agency Reference

> See `redesign.md` for complete token values and breakpoint mappings.

### Typography
- **Headings (Display, H1–H6):** Clash Display — bold, geometric, modern
- **Body / Subheadings:** Manrope — clean, legible neo-grotesque
- Never use default system fonts or Arial

### Color Palette
- **Primary:** `#5235F6` (Flux Studio electric purple)
- **Primary Hover:** `#4129D6`
- **Dark Surfaces:** `#0E0E0E` (Hero, Testimonials, Footer, Dark Contrast Sections)
- **Light Surfaces:** `#FFFFFF` / `#F1F1F1` (Content sections, clean cards)
- **Dividers / Borders:** `#E2E8F0` / `#EBEBEB`
- **Muted Text:** `#64748B` / `#787878`

### Core Aesthetics
1. **Premium Agency Feel:** World-class craftsmanship, generous breathing room (5rem+ section gaps).
2. **Em-Dash Header Pattern:** Every section starts with `— LABEL` (e.g., `— SERVICES`, `— CASE STUDIES`).
3. **Rounded Geometry:** Consistent `border-radius: 1rem` (16px) for cards and containers, `6.25rem` (100px) pill buttons.
4. **Button System:**
   - **Primary:** Purple pill with black arrow circle
   - **Secondary:** Outlined pill with white arrow circle
   - **Tertiary:** White pill with black arrow circle

---

## 7. 🔤 Naming Conventions

```
kebab-case     → folders, files              hero-section.tsx, use-scroll.ts
PascalCase     → React components, Types     HeroSection, ServiceCardProps
camelCase      → functions, hooks, variables getServices, useNavigation
SCREAMING_CASE → constants                   COMPANY_INFO, NAV_LINKS
```

- **Named exports everywhere**, except framework files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`).
- Framework files use `export default function Page()` or `export default function Layout()`.
- Component filenames match their default export in kebab-case: `service-card.tsx` → `ServiceCard`.

---

## 8. 🎨 Skills to Consult

| Category | Skill | When to Use |
|---|---|---|
| **Design & UI** | `better-interface` | Complete UI review across accessibility, layout, typography, color |
| | `better-ui` | Polishing UI — border radii, surface depth, hit areas |
| | `better-typography` | Type scale, font pairing, line-heights, tracking |
| | `better-colors` | Token compliance, contrast checks, palette verification |
| | `better-layout` | Visual hierarchy, whitespace, grid alignment |
| | `better-accessibility` | WCAG 2.1 AA compliance, ARIA attributes, keyboard navigation |
| | `emil-design-eng` | Emil Kowalski's micro-interaction polish principles |
| | `apple-design` | Apple-grade fluid spring motion, materials, depth |
| **Motion** | `animate` | Building animations from scratch with proper curves |
| | `transitions-dev` | Production-ready transitions (drawers, dropdowns, accordions) |
| | `transitions-polish` | Timing, easing, stagger, and reduced-motion polish |
| | `find-animation-opportunities` | Auditing for subtle places needing motion |
| | `improve-animations` | Motion audit and roadmap |
| **Code Quality** | `vercel-react-best-practices` | Next.js performance patterns from Vercel Engineering |
| | `lean-build` | Scoped, disciplined feature development |
| | `safe-refactor` | Structural refactoring without breaking behavior |
| | `surgical-patch` | Precise, minimal-footprint bug fixes |
| | `investigate-first` | Diagnosing root causes before altering code |
| | `verify-and-stop` | Verifying acceptance criteria without scope creep |
| | `caveman-review` | Concise, high-signal code reviews |

---

## 9. 🚫 Anti-Patterns — NEVER DO THESE

| ❌ Don't | ✅ Do instead |
|---|---|
| `"use client"` on `page.tsx` or `layout.tsx` | Keep server-only; push client boundary to leaf components |
| Put business logic or JSX trees in `page.tsx` | Import single page component from `components/pages/` |
| Use Lucide React or inline SVGs | Use **HugeIcons** exclusively (`@hugeicons/react`) |
| Use generic spinners or "Loading..." text | Use shaped skeleton components in `loading.tsx` |
| Hardcode hex colors outside design tokens | Use Tailwind token classes and CSS custom properties |
| Create "AI slop" template grids | Follow Flux Studio design specifications from `redesign.md` |
| Use `<a>` tags for internal links | Use `next/link` (`Link` component) |
| Hardcode mock copy inside components | Centralize content in `src/lib/data.ts` |
| Skip `alt` attributes on images | Always write descriptive `alt` text for accessibility & SEO |
| Overwrite `.htaccess` on the server | Server `.htaccess` contains critical Apache rewrite rules |
| Mix icon libraries | HugeIcons only |
| Leave mutations or actions without feedback | Always notify via `sonner` (`toast.success` / `toast.error`) |

---

## 10. 📋 Pre-Commit & Verification Checklist

Before pushing or considering any task complete:

- [ ] `npm run build` succeeds cleanly without TypeScript or ESLint errors
- [ ] Every route has a server `page.tsx`, `loading.tsx`, and `error.tsx`
- [ ] Dynamic routes correctly `await params` (Next.js 16 standard)
- [ ] HugeIcons is used for all icons (no Lucide)
- [ ] Primary color is `#5235F6`
- [ ] Mobile responsive at 375px, 768px, 1024px, 1440px
- [ ] Animations respect `prefers-reduced-motion`
- [ ] All interactive controls have visible focus rings and accessible hit areas (≥44px on mobile)
- [ ] Meta tags (`title`, `description`, OpenGraph) configured per page
