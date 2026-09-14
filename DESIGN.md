# Saurabh Infosys — Design System

The single source of truth for how this site looks and moves. Every section, on
every page, is built from what is defined here. If a value is missing, add it
here first and then use it — never inline a one-off number in a component.

**Reference build:** the Stodio agency template (`stodio.webflow.io`). Layout,
composition, spacing and interaction patterns are ported from it. Typeface is
theirs (Geist / Geist Mono). Colour is theirs *except* the brand hue, which
stays the Saurabh Infosys blue. Motion and the type scale are both the
reference's own values, read out of its interaction data and computed styles
rather than estimated (§2.2, §3). Content is entirely ours.

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

**The heading scale is fluid, and it is deliberately quieter than the
reference's.** The reference runs fixed steps topping out at 96px, which is a
shout on anything wider than about 1440px. Ours ramps with the viewport and
caps at 72px. This is the one place the build knowingly departs from parity:
the reference's own headline copy is three or four words, ours is a sentence,
and a sentence at 96px does not survive a 1920px monitor gracefully.

Each heading token is `clamp(floor, intercept + slope·vw, ceiling)`, tuned so a
phone lands on the floor and a 1920px monitor lands on the ceiling. There are no
per-breakpoint heading overrides any more — the clamps cover every width, which
also removed a bug where the ≤767px step (64px) was *larger* than the ≤991px
one (60px).

| Class | 480px | 1280px | 1440px | 1920px | Line-height | Tracking | Weight |
|---|---|---|---|---|---|---|---|
| `.st-h1` | 36 | 55 | 59 | 72 | 1.1 | -0.035em | 500 |
| `.st-h2` | 30 | 43 | 47 | 56 | 1.08 | -0.025em | 400 |
| `.st-h3` | 24 | 32 | 34 | 40 | 1.25 | -0.02em | 400 |
| `.st-h4` | 21 | 26 | 27 | 30 | 1.3 | -0.02em | 400 |
| `.st-h5` | 18 | 21 | 22 | 24 | 1.35 | -0.02em | 400 |
| `.st-h6` | 17 | 19 | 19 | 20 | 1.4 | -0.015em | 400 |
| `--st-text-80` | 30 | 44 | 48 | 60 | — | — | — |
| `--st-heading-big` | 36 | 55 | 59 | 72 | — | — | — |

Body copy stays on fixed steps. Fluid body text costs more than it earns — it
breaks the reader's size expectation between pages — so only the two smallest
tokens step down, at 479px.

| Class | Size | Line-height | Tracking |
|---|---|---|---|
| `.st-text-xxl` | 22px (17 ≤479) | 1.2 | 0 |
| `.st-text-xl` | 20px (18 ≤479) | 1.6 | -0.02em |
| `.st-text-l` | 18px (16 ≤479) | 1.6 | -0.02em |
| `.st-text-m` | 16px | 1.6 | -0.015em |
| `.st-text-s` | 14px | 1.5 | 0 |
| `.st-text-sm` | 12px | 1.5 | — |

Add `.st-weight-medium` to lift a heading to 500 — that is how the reference
handles its heavier `h2`s.

### Nothing gets cut

Two rules exist purely so text never crops:

- Every heading line-height is above 1. The reference sets `h2` to exactly 1,
  which puts descenders on the box edge; anything that clips the box then eats
  them.
- `overflow-wrap: break-word` on every `h1`–`h6`. A single unbroken token
  ("MySchoolManagementSystem", a bare URL) at 72px is wider than a phone, and
  without this it escapes its box and is cut by the first clipping ancestor
  instead of wrapping.

The footer wordmark is `nowrap`, so its size is derived from the width the
container actually leaves it — `clamp(26px, calc(10.2vw - 7px), 150px)`. The
`- 7px` pays for the container's 32px side padding; a plain `vw` ramp ignored it
and pushed the last glyph past the edge on narrow screens.

Verified with a Playwright sweep over every page at 1920 / 1600 / 1440 / 1280 /
991 / 768 / 390: no page-level horizontal overflow, and no element whose text
overflows a clipping box. The only elements that extend past the viewport are
the ones meant to — marquee tracks, slider rails and the markets grid's
off-canvas entrance — each inside its own mask.

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
| Stat tile | an image fades in behind it and drifts with the pointer; the caption lifts `#5d5d5d` → ink, 500ms | 500ms | `a-21` / `a-22` / `a-23` |
| Market tile | the label panel fades 0 → 1, the photo scales to 1.2, and each line rises 25px. All 500ms | 500ms | `a-28` / `a-29` |
| Foundation tab | body height 0 → auto 400ms `ease`, the picture cross-fades 400ms, and the inactive icon sits at `#686868` | same | `a-24` / `a-25` |

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

### 3.5 Scroll-scrubbed sections

Three sections are not triggered, they are **scrubbed**: their transforms are
a function of how far the page has scrolled through them. Webflow calls these
`SCROLLING_IN_VIEW`, and every one of them carries `smoothing: 90`, which is
why the reference's scrubs lag the scroll slightly instead of tracking it
exactly. [`use-scroll-progress.ts`](src/components/stodio/use-scroll-progress.ts)
is that mechanism: progress 0 when the element's top reaches the bottom of the
viewport, 1 once its bottom clears the top, smoothed with a 0.12 lerp.

| Section | Keyframes | From IX2 |
|---|---|---|
| **What drives us** ([`showcase-row.tsx`](src/components/stodio/about/showcase-row.tsx)) | @10%: tiles offset ±60px and tilted -8 / 3 / -4 / 4°. @70%: offset 0, tilt -4 / 3 / -2 / 2°. The **wrapper** rotates, not the image. | `a-79` |
| **Our method** ([`process-section.tsx`](src/components/stodio/process-section.tsx)) | @0%: all four cards at `translateY(75vh)`. Card *n* comes home between *n*×20% and (*n*+1)×20%, so they arrive one at a time while the row is pinned. | `a-105` |
| **Markets** ([`markets-grid.tsx`](src/components/stodio/about/markets-grid.tsx)) | @20%: row one at `x: -500px`, row two at `x: +500px`. @75%: both at 0, on `outQuad`. The wrapper clips so neither row widens the page. | `a-80` |

The hook writes transforms **straight to the DOM through refs**. It must not
go through React state: re-rendering a subtree sixty times a second during a
scroll is exactly the work that drops frames on a mid-range phone. Elements
are server-rendered in their starting pose so there is no flash of the settled
layout on first paint, and the whole mechanism short-circuits to its end state
under `prefers-reduced-motion`.

Below 992px the method slab drops its pin and the cards stack, so the scrub
clears their transforms rather than leaving them parked off-screen.

### 3.6 Rules

- Never animate `width`/`height`/`top`/`left` for an entrance.
- Never `transition: all`. Name the properties.
- Never put `overflow: hidden` on an element that wraps a `<Reveal>`.
- Never animate a keyboard-initiated action.

### 3.7 Icons

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

### Navbar items

`Home · Studio · Work · Services · Products · Contact`. Blog is deliberately not
in the primary nav — the section still ships and is still linked from the
footer.

Products is the one item with a sub-menu, built from `PRODUCTS` in `data.ts`
rather than a second hard-coded list, so adding a product adds a nav entry.
Its trigger is a real `<Link>` to `/products`, not a button: the panel is a
shortcut, never the only way in. It opens on `:hover` and on `:focus-within`,
so a keyboard user reaches all three products by tabbing, and the panel's
`padding-top` is the hover bridge — without it the pointer crosses a dead gap
on the way down and the menu closes.

**The panel is three names and nothing else.** The first version carried a
tagline per row and ran 352px wide against an 89px nav item — five times the
trigger's width, so it spilled across Services and Contact and read as though
the menu had drifted left. At 176px the overhang is 44px a side and the panel
sits visibly under its own item.

### The mobile menu (<= 991px)

A compact panel anchored to the top-right corner, not a full-width sheet.
Geometry follows the shadcnspace hero-17 menu it was modelled on: 320px wide,
24px radius, 32/24 padding, a 24px-gapped column of header, list and footer, a
hairline rule under the header, and a full-width pill at the bottom. Ours is
dark rather than light, which also sidesteps the light/dark route variants —
one panel reads correctly over either hero.

It reads: `Menu` + a 38px circular close, rule, the links, rule, the phone
number and Book A Call. The current row is marked with a 22px brand dash, the
way the reference marks its own.

It replaced an `overflow: hidden` + `max-height` accordion that had four real
faults, each fixed here:

| Fault | Fix |
| --- | --- |
| `position: absolute` in a mount at the top of the document, so scrolling slid the open menu off screen | `position: fixed`, plus Lenis `stop()` and `body { overflow: hidden }` while open |
| `max-height: 0` still gave its links layout, so a keyboard user tabbed into an invisible menu | `visibility: hidden` in CSS and `inert` in `navbar.tsx` |
| 20px rows, under the 24px WCAG 2.5.8 floor | 44px rows, 36px sub-rows, 44px call to action |
| Animating `max-height` to a number far larger than the content, so most of the easing curve ran over empty space | opacity + an 8px `translateY` and a 0.98 scale from the corner it is anchored to |

`inert` is scoped to the breakpoint (`compact && !open`). Applied
unconditionally it also lands on the desktop nav — which is never "open" — and
makes every desktop link unclickable.

Three further things worth knowing:

- **Only the list scrolls.** `.st-nav-links` is the scroll container; the panel
  is `overflow: hidden`, so the header and the call to action stay put on a
  short screen. On desktop that wrapper is `display: contents`, or the nav row
  collapses into a stack.
- **No scrim.** Dimming the page also dimmed the 16px gutter outside the site's
  rounded frame, which read as a broken overlay. The catcher is transparent —
  it exists only so a tap off the panel closes the menu — and the panel's own
  ring and shadow do the separating.
- **The panel outranks the nav controls.** It covers the corner the hamburger
  sits in, so `.st-nav-menu` takes `z-index: 2` over `.st-nav-right`'s `1`.
  Without that the hamburger's own cross draws on top of the panel's close
  button and you see two of them.

One specificity trap. The desktop dropdown is centred with
`.st-has-menu:hover .st-nav-dropdown { transform: translate(-50%, 0) }`, which
scores (0,2,0). A plain `.st-nav-dropdown { transform: none }` in the mobile
block scores (0,1,0) and loses, so the desktop centring survived into the panel
and threw it half its own width off the left edge the moment a finger landed on
a product and `:focus-within` matched. The mobile override repeats all three
selectors at matching specificity.

### The products index

`/products` exists because the nav item points at it. Without it the new nav
entry and the footer's three product links all landed on a 404 — the route only
had `[slug]` under it.

### Footer product links

The three products link to `/products/<slug>`, not to the live apps. The product
page is where the pricing, modules, rollout and FAQ live, and it already carries
a "Visit" button for anyone who wants the running app instead.

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
Hero (**dark slab**, centred, hand-split two-line headline with an image chip
that wipes open between two words, meta row 164px below) → Our story (243px label column with the author
credit pinned 148px down / 680px prose column at `.st-h4`) → Numbers →
What drives us (tilted, overlapping showcase inside a 922px grid) →
Our method (**dark slab**, card row pinned for 300vh) → Client wall (4×160px
tiles) → Foundation (600px picture + tab list — see below) → Markets (5-col grid:
stat spanning 2, five cards, closing note spanning 3) → CTA

Its geometry is in [`stodio-about.css`](src/app/stodio-about.css) and every
number in it was measured off the live reference at 1600px.

**The about hero headline is written twice.** Above 992px the page renders a
hand-split block — line one is `We exist to build lasting`, line two is a flex
row of `digital`, the image chip, and `systems.` Below 992px that block is
`display: none` and a single plain heading wraps on its own. This mirrors the
reference exactly (its desktop block is three `h1`s, its fallback an `h2`), and
the reason is structural: a line split by hand is only correct at widths where
you know how wide the line will be.

The chip is `.st-about-hero-chip`, a wrapper whose width runs 0 → 1.417em with
`transition: width 500ms ease 1000ms`, fired by the same `.st-is-in` class the
reveal uses — the reference's IX2 list "Hero Text Image Hide" is `delay: 1000,
easing: ease, duration: 500`, triggered by the same SCROLL_INTO_VIEW that runs
the line's own 400ms-delayed fade. The image inside is `max-width: 100%`, which
is what makes the wipe read as a squeeze instead of an overflowing block.

Every chip dimension is in `em` against the row's own `--st-h1-size`, not the
reference's pixels (136 / 106 / 80 / 24 at a 96px `h1`), so the chip tracks the
fluid heading scale.

**Foundation is a tab set, not an accordion.** In the reference it is a
Webflow `w-tabs`, where each pane carries its own picture: selecting a
principle swaps the image as well as opening the body. The three pictures are
stacked and cross-faded rather than swapped in the DOM, so nothing reflows.
The picture panel is absolutely positioned on the leading side because it is
taller than the list (680 vs ~290) and as a flex sibling it would set the
block's height — the reference solves it the same way with
`.intro-tabs-mask`. Below 992px the panel goes back into flow, above the list.

**The process-card art is the reference's own.** Four fill-based marks on a
240 box — pinwheel, lightbulb, cube, puzzle piece — lifted from its SVG
assets, with the shipped `#F3F3F3` swapped for `currentColor`. They are capped
at 220px rather than filling the card, which is the one deliberate departure:
at the reference's 316px they swamp our longer copy.

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
Hero (**light slab**, flush; title and a label/value meta row leading, the
product shot with its live-site button trailing) → banner → Overview + app
chips → What ships (three role cards) → Why it exists (image beside prose) →
Quote + numbers (**dark slab**) → Rollout (**dark slab**) → Modules table →
Pricing (plan card beside a dark audience panel) → FAQ → The other two
products → CTA

Its styles are in [`stodio-product.css`](src/app/stodio-product.css), built
from two measured reference patterns: the project detail page
(`/projects/xenitho`) for the split hero, the `.career-meta` label/value row
and the tag-leading / 650px-prose-trailing body blocks; and the pricing page
for the plan card, its circular badge and its bordered feature list.

The rewrite fixed three things the page was simply missing: `price` /
`priceNote` were in the data and never rendered, the live product `url` was
never linked, and there was no path between the three products. The earlier
ink / brand / tint card trio was dropped — brand-on-brand text in the middle
card was the weakest thing on the page.

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
