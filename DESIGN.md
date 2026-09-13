# Saurabh Infosys — Design System

The single source of truth for how this site looks and moves. Every section, on
every page, is built from what is defined here. If a value is missing, add it
here first and then use it — never inline a one-off number in a component.

**Reference build:** the Stodio agency template (`stodio.webflow.io`). Layout,
composition, spacing and interaction patterns are ported from it. Typeface is
theirs (Geist / Geist Mono). Colour is theirs *except* the brand hue, which
stays the Saurabh Infosys blue. Motion is the reference's, extracted from its
own interaction data rather than estimated (§3). The type scale is the one
place we deliberately differ (§2.2). Content is entirely ours.

There is one design system. Nothing on this site renders the previous one.

---

## 1. Principles

1. **Tokens or nothing.** No hardcoded hex, px size, radius, duration or easing
   in a component. Everything resolves to a `var(--st-…)` in
   [`src/app/stodio.css`](src/app/stodio.css).
2. **One entrance animation.** Sections do not each invent their own reveal.
   There is exactly one: rise 50px, un-blur 5px, fade — via `<Reveal>`.
3. **Motion matches the reference exactly.** The timings, easings and travel
   distances in §3 are extracted from the reference build's interaction data,
   not chosen. Do not "tidy" them.
4. **`transform` and `opacity` only** for anything that moves. The deliberate
   exceptions are accordion `height` (no transform equivalent) and the
   `border-radius` tightening on hover, which is the reference's signature and
   triggers no layout around it.
5. **Hover effects are gated** behind `@media (hover: hover) and (pointer: fine)`.
   Touch devices fire `:hover` on tap and then keep it; a transform that sticks
   after a tap reads as a bug.
6. **Every pressable thing answers.** `:active { transform: scale(0.96) }` at
   140ms. 0.96 is the floor — below that it reads as a bounce, not a response.
7. **Reduced motion ships with the animation**, never as a follow-up pass.
8. **Restraint on the dark panels.** Services, testimonials, the method slab and
   the footer are the only dark surfaces. They punctuate; they do not compete.
9. **Every class is `st-` prefixed.** A habit worth keeping even now that the
   legacy sheet is gone — it keeps the origin of a rule obvious.

---

## 2. Foundations

All tokens live in [`src/app/stodio.css`](src/app/stodio.css). Names mirror the
reference build so any further CSS lifted from it drops in without renaming.

### 2.1 Colour

| Token | Value | Used for |
|---|---|---|
| `--st-brand` | `#00a0e3` | The Saurabh Infosys blue. Buttons, active states, accents, the tag plus-square, row arrows. **The one value that is ours, not Stodio's.** |
| `--st-brand-hover` | `#0086c0` | Brand button hover fill |
| `--st-primary` | `#0a0a0a` | Body text, and every dark slab's background |
| `--st-white` | `#ffffff` | Page background, text on dark |
| `--st-bg-light` | `#f3f3f3` | Tag pills, FAQ rows, list rows, cards, blog cards |
| `--st-bg-primary` | `#f1f2f1` | Secondary tinted surface, row hover |
| `--st-secondary-bg` | `#232323` | Footer social pills, slider arrows, testimonial cards |
| `--st-border` | `#e6e6e6` | Dividers and hairlines on light |
| `--st-border-black` | `#232323` | Dashed rules on dark slabs |
| `--st-mute` | `#9d9d9d` | Muted text on dark, inactive service names |
| `--st-text-secondary` | `#5d5d5d` | Body copy that is not the headline |

`#00a0e3` on white is 2.9:1, so it is used for **fills, icons and large text
only** — never for small body copy on a light surface.

### 2.2 Type

Two faces, loaded through `next/font/google` in
[`src/app/layout.tsx`](src/app/layout.tsx):

- `--st-font-primary` → **Geist** (400/500/600/700). Everything.
- `--st-font-secondary` → **Geist Mono** (400/500/600/700). Tag pills, labels,
  captions, meta rows, the hero's `+ DEFINE` strip.

**The scale is the Saurabh Infosys brand guide's, not the reference's.** Stodio
runs H1 at 96px and H2 at 64/1.0; against our copy lengths that was too loud
and wrapped badly. Leading on H1/H2 is tightened from the guide's 120%/135%,
which falls apart on a display size across two lines. H3–H6 keep the guide's
leading.

Desktop (≥992px); the scale steps down at 991 / 767 / 479.

| Class | Size | Line-height | Tracking | Weight |
|---|---|---|---|---|
| `.st-h1` | 80px | 1.08 | -0.035em | 500 |
| `.st-h2` | 64px | 1.1 | -0.03em | 400 |
| `.st-h3` | 40px | 1.3 | -0.02em | 500 |
| `.st-h4` | 36px | 1.3 | -0.02em | 400 |
| `.st-h5` | 28px | 1.4 | -0.015em | 400 |
| `.st-h6` | 24px | 1.4 | -0.01em | 400 |
| `.st-text-xxl` | 22px | 1.4 | -0.01em | — |
| `.st-text-xl` | 20px | 1.6 | -0.015em | — |
| `.st-text-l` | 18px | 1.6 | -0.015em | — |
| `.st-text-m` | 16px | 1.6 | -0.011em | — |
| `.st-text-s` | 14px | 1.6 | 0 | — |
| `.st-text-sm` | 12px | 1.5 | — | — |

Plus `--st-text-80` (64px) for the home service list names and
`--st-heading-big` (80px) for oversized display text.

Modifiers: `.st-weight-medium`, `.st-weight-semibold`, `.st-mute`,
`.st-secondary`, `.st-brand-text`, `.st-mono`, `.st-upper`.

### 2.3 Space, radius, layout

- **Gap:** `--st-gap-4 … --st-gap-44`
- **Padding:** `--st-pad-3x` (12) `-5x` (20) `-1x` (24) `-2x` (28) `-36` `-4x`
  (44) `-48` `-x` (64) `-xl` (80) `-xxl` (120) `-big` (160)
- **Radius:** `--st-r-4 / 8 / 12 / 16 / 24 / 32 / 44 / 100`
- **Container:** `.st-container` is full-bleed with a 32px gutter (20px ≤767px).
  No max-width — the reference is edge-to-edge.
- **Slabs:** dark and tinted panels are inset `16px` from the viewport and
  rounded `--st-r-24`. That inset is also why the nav mount is inset 16px.

### 2.4 Breakpoints

`991` · `767` · `479` — matching the reference so its media-query values
transfer unchanged. Verified with no horizontal overflow at 390 / 768 / 1024 /
1600.

### 2.5 Logo

Two real assets, not one recoloured file:

| Surface | Asset |
|---|---|
| Dark (home hero, about hero, footer) | `public/SaurabhInfosysWhite.png` (800×491) |
| Light (portfolio, blog detail, contact, services, products) | `public/saurabhInfosys.webp` (150×95) |

[`logo.tsx`](src/components/stodio/logo.tsx) picks by `variant`; the navbar
passes the one that matches the surface it is sitting on. The lockup is two
lines tall (~1.63:1), so it is **sized by height** — 40px in the nav, 32px on
mobile, 46px in the footer. Fixing its width the way a single-line wordmark
would makes it tower over the nav row.

> **Known limit:** the colour asset is only 150px wide, so it is soft on a 2×
> display. A vector (SVG) or a ≥600px colour PNG would drop straight in — one
> file swap, no code change.

The giant footer wordmark is type-set rather than the logo file: no 800px
raster survives being scaled to ~1900px.

---

## 3. Motion system

**Every number in this section is read out of the reference build's own IX2
interaction data, not estimated.** Webflow does not ship that data in the page
HTML on optimized sites — the runtime fetches it — so it was pulled from the
live store (`Webflow.require("ix2").store.getState().ixData`): 378 events
across 66 action lists. Where a row below cites an id like `a-76`, that is the
action list it came from.

### 3.1 Easing

Webflow names its easings; these are the curves those names resolve to.

| Token | Curve | Webflow name |
|---|---|---|
| `--st-ease` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | `ease` |
| `--st-ease-out-quad` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | `outQuad` |
| `--st-ease-out-quart` | `cubic-bezier(0.165, 0.84, 0.44, 1)` | `outQuart` |
| `--st-ease-out-quint` | `cubic-bezier(0.23, 1, 0.32, 1)` | `outQuint` |
| `--st-ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | `easeInOut` |
| `--st-ease-in-out-quad` | `cubic-bezier(0.455, 0.03, 0.515, 0.955)` | `inOutQuad` |
| `--st-ease-in-out-quart` | `cubic-bezier(0.77, 0, 0.175, 1)` | `inOutQuart` |
| `--st-ease-in-out-back` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | `inOutBack` |

`ease-in` is never used anywhere in the reference, and is not used here.

### 3.2 The entrance — `<Reveal>` (`a-67` / `a-68` / `a-71` / `a-72` / `a-76` / `a-77`)

Six action lists, identical except for their delay. `a-76` alone accounts for
43 of the site's scroll triggers.

```
initial   opacity 0 · blur(5px) · translateY(50px)
in        opacity 1 · blur(0)   · translateY(0)
duration  1200ms
easing    outQuart
delay     0 | 200 | 300 | 400ms   ← the whole stagger vocabulary
trigger   scrollOffsetValue: 0 — fires as the element reaches the viewport
```

[`reveal.tsx`](src/components/stodio/reveal.tsx) carries two corrections that
are not in the reference, both load-bearing:

- The element starts 50px low, so the box the observer measures sits 50px
  below its resting place. The observer's bottom `rootMargin` cancels that,
  or anything settling near the fold could never trigger its own reveal.
- `IntersectionObserver` intersects with **every clipping ancestor**, not just
  the viewport. A `<Reveal>` inside a short `overflow: hidden` box reports zero
  intersection while it is offset and stays blank forever. A `getBoundingClientRect`
  fallback breaks that deadlock, and it fires for anything at *or past* the
  fold so a jumped scroll cannot skip an element permanently. Keep tight
  `overflow: hidden` off any element that wraps a `<Reveal>`.

### 3.3 Hover

| Element | In | Out | From IX2 |
|---|---|---|---|
| Button label swap | 300ms `outQuad`, `translateY(-100%)` | 400ms `outQuad` | `a-3` / `a-4` |
| Button pill radius | 350ms (44px → 16px) | 350ms | `.button { transition: all .35s }` |
| Project thumbnail | 400ms `outQuad`, `scale(1.1)` | 400ms `outQuad` | `a-44` / `a-46` |
| Blog thumbnail | 400ms `outQuad`, `scale(1.1)` | 400ms | `a-47` / `a-48` |
| Blog title → brand | 300ms `outQuad` | 300ms | `a-47` / `a-48` |
| Service row | 300ms `outQuad`: name `#5d5d5d`→white, number white→brand, card opacity 0→1, arrow wrapper width 0→auto | 300ms | `a-38` / `a-39` |
| View-all link | 300ms `easeInOut`, `translateX(-32px)` → `0` | 300ms | `a-111` / `a-112` |
| Location row | 400ms `inOutQuad`, thumbnail 0 → 120×80; **siblings** dim to `#5d5d5d` over 300ms `ease` | 400ms / 300ms | `a-40` / `a-41` |
| FAQ | height 400ms `easeInOut`; plus-wrapper rotates 180° on `inOutBack`; the vertical bar collapses to 0 | same | `a-19` / `a-20` |

Press feedback (`scale(0.96)` at 140ms) is ours — the reference has none — and
every hover that transforms is gated behind `@media (hover: hover) and (pointer: fine)`.

### 3.4 Loops and scroll-driven

| What | Spec | From IX2 |
|---|---|---|
| Client marquee | `.st-logos-row` x 0 → -100%, **12s linear**, loop | `a-5` |
| Gallery strip | `.st-gallery-image-list` x 0 → -100%, **12s linear**, loop | `a-73` |
| Marquee starburst | rotate 0 → **180° over 4s linear**, reset, loop. The mark is 16-fold symmetric so the reset is invisible | `a-92` |
| Hero background | `scale(1.4)` → `1` over **2s `outQuint`** on load | `a-81` |
| Counter | digit strip `translateY(-90%)` over **3s `inOutQuart`**, 80ms apart. The strip is built to *end* on the target digit, so every digit travels the same distance — including a target of 0 | `a-7` |
| Work title | `position: sticky; top: 20%` while the project rows pass | — |
| Smooth scroll | Lenis, `lerp: 0.1` | page script |

Everything above is disabled or frozen under `prefers-reduced-motion: reduce`.

### 3.5 Rules

- Never animate `width`/`height`/`top`/`left` for an entrance.
- Never `transition: all`. Name the properties.
- Never put `overflow: hidden` on an element that wraps a `<Reveal>`.
- Never animate a keyboard-initiated action.

### 3.6 Icons

The icon set is not redrawn — every path in
[`icons.tsx`](src/components/stodio/icons.tsx) is lifted verbatim from the
reference's inline SVG embeds, with hardcoded fills swapped for `currentColor`
so the brand hue comes from CSS. That includes the 16-point starburst, the
plus-square tag mark, the long `view-all` arrow, the calendar, and the
diagonal arrow inside every button.

## 4. Primitives

All under [`src/components/stodio/`](src/components/stodio/).

| Component | What it is |
|---|---|
| `button.tsx` | `StButton` / `StButtonLink`. Variants: `white`, `brand`, `dark`, `light`, `outline`. Renders the doubled label for the hover swap. |
| `logo.tsx` | The brand lockup, light or dark variant. |
| `tag.tsx` | The eyebrow pill. `on="default" \| "dark" \| "light"` picks the fill for the surface it sits on. |
| `reveal.tsx` | The entrance. `delay`, `as`, `threshold`. |
| `odometer.tsx` | Rolling stat digits, self-clipping at any size. |
| `icons.tsx` | Every icon. All inherit `currentColor` and fill their box. |
| `work-card.tsx` | Project tile — thumbnail, name leading, discipline trailing. |
| `blog-card.tsx` | Blog tile — category pill, thumbnail, meta row, title, excerpt. |
| `marquee-section.tsx` | The client rail. |
| `process-section.tsx` | The dark method slab — four white step cards. Shared by about, services index and every service detail page. |
| `faq-section.tsx` | Title leading, accordion trailing. |
| `testimonials-section.tsx` | Dark slab slider. |
| `cta-section.tsx` | The closing panel every page ends on. |
| `navbar.tsx` / `footer.tsx` | Layout chrome, mounted once in `layout.tsx`. |
| `lib/` | `blog-images`, `format-date`, `work-images`. |

### Navbar surface variants

The nav floats over whatever slab the page opens with, so it has to know the
surface. `isLightRoute()` in `navbar.tsx` is the single place that decides:
`/portfolio*`, `/blog/*`, `/contact`, `/services*` and `/products*` get the dark
nav and the colour logo; everything else keeps the white nav and white logo.
**Add a route there when you add a page.**

---

## 5. Stylesheets

Loaded in this order from `layout.tsx`:

1. `globals.css` — Tailwind base (preflight) and a few legacy variables
2. `stodio.css` — tokens, base, typography, buttons, tags, reveal
3. `stodio-layout.css` — navbar + footer
4. `stodio-sections.css` — sections shared across pages
5. `stodio-pages.css` — sections belonging to one page (about, projects, blog, contact)
6. `stodio-detail.css` — services index, service detail, product detail

**Specificity trap, learned the hard way:** an element-level rule inside
`.st-root` (e.g. `.st-root a { color: … }`, `.st-root p { margin: … }`) scores
0,1,1 and therefore *outranks* a component class like `.st-nav-link` (0,1,0).
Keep the base layer to properties no component needs to override, or scope the
component rule as `.st-root .st-thing`.

---

## 6. Page architecture

Every page closes with `<CtaSection>` and the shared footer.

### Home — `components/stodio/home/`
Hero (full-bleed image + scrim) → Marquee → Gallery ("who we are" + image
strip) → Counter → Services (**dark slab**, hovered list + floating preview) →
Work (sticky title, projects staggered 2/1/2) → FAQ → Testimonials (**dark
slab**) → Journal → CTA

### About — `components/stodio/about/`
Hero (**dark slab**, centred, inline image chip) → Our story → Numbers →
What drives us (tilted showcase) → Our method (**dark slab**) → Client wall →
Foundation (image + disclosure list) → Markets → CTA

### Projects — `components/stodio/portfolio/index.tsx`
Hero (**light slab**) → Marquee → category filter → two-column grid → CTA

### Project detail — `components/stodio/portfolio/project-detail-page.tsx`
Hero (title + meta leading, thumbnail + Preview trailing) → full-bleed banner →
The brief → What we built → two-image gallery → Results → Other projects → CTA

### Services — `components/stodio/services/index.tsx`
Hero (**light slab**) → Marquee → scannable row list (name, deliverables,
timeline, arrow) → Method (**dark slab**) → Testimonials → FAQ → CTA

### Service detail — `components/stodio/services/service-detail-page.tsx`
Hero (**light slab**, flush) → banner → Overview (label leading, prose +
timeline card trailing) → What is included (dashed checklist, two up) →
Where it pays off (three cards, first inked) → Method (**dark slab**) → FAQ →
Also from the studio → CTA

### Product detail — `components/stodio/products/product-detail-page.tsx`
Hero (**light slab**, flush; stat odometer trailing) → banner → Overview +
app chips → Highlights (three cards: ink / brand / tint) → Why it exists
(image beside prose) → Quote + numbers (**dark slab**) → Rollout (**dark
slab**) → Modules table → Who it is for → FAQ → CTA

### Blog — `components/stodio/blog/index.tsx`
Hero (image + scrim, centred) → category filter → three-column grid → CTA

### Blog detail — `components/stodio/blog/post-detail-page.tsx`
Hero (**light slab**, centred) → banner → prose leading / sticky sidebar
trailing (dark table of contents + tinted CTA card) → share row → related → CTA

### Contact — `components/stodio/contact/`
Form leading / tall image trailing, address-email-phone row, map → Where we
work (**dark slab**, hover reveals a thumbnail) → CTA

---

## 7. Conventions

- Page components live in `components/stodio/<page>/`; the route file in
  `src/app/**/page.tsx` holds only metadata and renders the component.
- Section files are `kebab-case.tsx`, default-exported.
- `"use client"` only where state actually lives: `navbar`, `reveal`,
  `odometer`, `faq-section`, `testimonials-section`, `services-section`,
  `foundation-section`, the two filter pages, and the forms.
- Data comes from [`src/lib/data.ts`](src/lib/data.ts). No copy is written
  inline in a component unless it is structural (a section eyebrow, a label).
- Images are `next/image` with explicit `width`/`height` (the export is
  `unoptimized`, so those numbers are the layout contract).
- Copy: verb-first buttons, sentence case, no "Click here", no "Learn more"
  without a destination.
- **No flag emoji.** Windows ships no flag glyphs, so they render as bare
  letter pairs.
- Use logical properties (`padding-inline-end`) for direction-dependent layout.

### Checklist before a section is done

- [ ] Every value is a token
- [ ] One `<Reveal>` per logical group, staggered on the 0 / 200 / 300 / 400ms set
- [ ] No `overflow: hidden` on anything wrapping a `<Reveal>`
- [ ] Every hover that transforms is behind `@media (hover: hover)`
- [ ] Pressable elements scale to 0.96 on `:active`
- [ ] Reduced-motion path verified
- [ ] 1600 / 991 / 767 / 390 all checked, no horizontal overflow
- [ ] Focus ring visible on every interactive element
- [ ] Headings share the container's leading edge with the content under them

---

## 8. Removed

- **`/country/[slug]`** — the market landing pages, their components, and
  `COUNTRY_PAGES` / `COUNTRY_SLUGS` in `data.ts`. Also dropped from the sitemap
  and the footer. Their content lives on in the about page's Markets grid and
  the contact page's "Where we work" slab.
- **`design-system.css`** and everything under `src/components/pages/`,
  `src/components/layout/`, `src/components/ui/`, `src/components/shared/`,
  `src/components/contact/` — the previous design system, now unreferenced.
