# Saurabh Infosys — Design System & Home Page Spec

The single source of truth for how this site looks and moves. Every section, on
every page, is built from what is defined here. If a value is missing, add it
here first and then use it — never inline a one-off number in a component.

Reference build: the Hypen agency template. Layout, spacing and interaction
timings are ported from it verbatim; typeface, colour and content are ours.

---

## 1. Principles

1. **Tokens or nothing.** No hardcoded hex, px size, radius, duration or easing
   in a component. Everything resolves to a `var(--…)` in `design-system.css`.
2. **One entrance animation.** Sections do not each invent their own reveal.
   There is exactly one: rise + blur + fade, via `<Reveal>`.
3. **Motion needs a reason.** Feedback, spatial consistency, state change, or
   preventing a jarring jump. "It looks cool" on something seen daily is a
   reason to remove it.
4. **`transform` and `opacity` only.** The two exceptions, both deliberate:
   accordion `height` (no transform equivalent) and the hero showreel's
   `width`/`height` (the reference's signature scroll move).
5. **Reduced motion and hover gating ship with the animation**, never as a
   follow-up pass.
6. **Restraint on the dark panels.** Workflow, work and footer are the only
   dark surfaces. They punctuate; they do not compete.

---

## 2. Foundations

All tokens live in [`src/app/design-system.css`](src/app/design-system.css).
Variable names are kept identical to the reference build so any further CSS
lifted from it drops in without renaming.

### 2.1 Colour

| Token | Value | Used for |
| --- | --- | --- |
| `--colors--midnight-black` | `#141414` | All body and heading text; hover fill on buttons |
| `--colors--charcoal-shadow` | `#212121` | Dark panel surface (workflow, footer) |
| `--colors--dark-slate` | `#2c2c2c` | Cards sitting on a dark panel |
| `--colors--graphite-gray` | `#494949` | Secondary text on light |
| `--colors--gray` | `#6b6b6b` | The second tone in two-tone headings; nav links |
| `--colors--steel-gray` | `#7d7d7d` | Muted labels |
| `--colors--silver-mist` | `#b1b1b1` | Text on dark, de-emphasised |
| `--colors--cloud-gray` | `#e1e1e1` | Hairlines; text on dark panels |
| `--colors--snow-white` | `#f4f4f4` | The default raised surface — cards, pills, nav |
| `--colors--white` | `#ffffff` | Page ground; cards on dark panels |
| `--colors--white-lite` | `#ffffff33` | Glass labels over imagery (backdrop-blur 20px) |
| `--colors--brand` | `#00a0e3` | Saurabh Infosys blue |
| `--colors--brand-accent` | `#00a0e3` | Accent fill: buttons, badge dots, arrow pills |
| `--colors--brand-accent-light` | `#ccf0ff` | Accent tint for large soft fills |

`--colors--purple-blue` / `--colors--purple-blue-light` remain as aliases of the
two accent tokens purely so reference CSS resolves. Do not use them in new code.

**Contrast:** white on `#00a0e3` is 2.96:1. It is used only for button labels at
16px — acceptable there, not acceptable for body copy. Black on the accent is
6.2:1 and is the safe choice for anything smaller or denser.

### 2.2 Type

Two faces, no exceptions.

- **Raveo** (`--font-family--body` / `--font-family--heading`) — one variable
  file with a weight axis (100–900) and an optical-size axis (14–32).
  `font-optical-sizing: auto` on `.ds-root` means the 120px H1 automatically
  gets the display cut and 16px body gets the text cut.
- **DM Mono** (`--font-family--secondary-font`) — every uppercase label:
  section badges, the GMT clock, captions, tags, numbers in lists.

Raveo's named weights sit darker than Inter's, so the tokens use its axis
positions: medium **520**, semi-bold **630**, bold **730**.

| Role | Class | Size / line-height | Tracking |
| --- | --- | --- | --- |
| H1 | `h1` in `.ds-root` | 120 / 90% | −0.05em |
| H2 | `h2` | 72 / 100% | −0.04em |
| H3 | `h3` | 54 / 100% | −0.04em |
| H4 | `h4` | 44 / 110% | −0.03em |
| H5 | `h5` / `.h5` | 36 / 120% | −0.03em |
| H6 | `h6` / `.h6-medium` | 24 / 120% | −0.03em |
| Body large | `.paragraph-01` / `.paragraph-m-01` | 18 / 130% | — |
| Body | `.paragraph-02` / `.paragraph-m-02` | 16 / 140% | — |
| Mono label | `.paragraph-03` | 16 / 140%, DM Mono 520 | — |
| Caption | `.caption` | 14 / 140% | — |

At ≤991px the hero H1 steps down to the H2 size. Section headings follow the
same rule: one step down at 991, another at 479 where noted.

### 2.3 Space, radius, layout

Padding, gap and margin are a fixed ladder (`--_perimeter---padding--padding-*`,
`…gap-*`, `…margin-*`) running 0 → 2 → 4 → 6 → 8 → 10 → 12 → 14 → 16 → 20 → 24 →
28 → 32 → 40 → 48 → 60 → 80 → 100 → 120 → 140 → 160px. Radius runs 2 → 4 → 6 →
8 → 10 → 12 → 16 → 18 → 20 → 24 → 28 → 32 → 40 → 100px.

- `.container` — max-width **1420px**, 20px side padding (16px ≤479).
- Section rhythm — **120px** top padding on light sections
  (`--_perimeter---padding--padding-12xl`), 100px at ≤991.
- Dark panels are full-container-width blocks with **32px** radius
  (`--_border-radius---radius-6xl`), never edge-to-edge bleed.

### 2.4 Breakpoints

Four, matching the reference exactly: base, **991**, **767**, **479**. Every
section defines its own behaviour at each. The pattern is consistent — two
columns collapse to one at 991, the secondary column hides at 767, padding
tightens at 479.

---

## 3. Motion system

Tokens in `design-system.css` under `---- Motion ----`.

| Token | Value | Job |
| --- | --- | --- |
| `--ease-out` | `cubic-bezier(0.23, 1, 0.32, 1)` | Everything entering or exiting |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.175, 1)` | Things moving or morphing on screen |
| `--ease-hover` | `ease` | Colour and small hover states |
| `--ease-drawer` | `cubic-bezier(0.32, 0.72, 0, 1)` | Panels travelling a long distance |
| `--duration-press` | 140ms | `:active` feedback |
| `--duration-hover` | 200ms | Colour, small shifts |
| `--duration-swap` | 350ms | Button label + arrow mask slide |
| `--duration-panel` | 400ms | Accordion open / close |
| `--duration-reveal` | 800ms | Section entrance |
| `--stagger-step` | 80ms | Delay between staggered children |

**Never `ease-in`.** It delays the exact moment the user is watching.

### 3.1 The entrance — `<Reveal>`

[`src/components/ui/reveal.tsx`](src/components/ui/reveal.tsx). One animation,
used everywhere: `translateY(40px)` + `blur(5px)` + `opacity: 0` →
resting, 800ms on `--ease-out`, fired once at `-15%` viewport margin.

Stagger siblings with the `index` prop (80ms apart) rather than hand-written
delays. Under `prefers-reduced-motion` the travel and blur drop and only the
fade remains at 300ms.

800ms is well over the 300ms UI budget — deliberately. This is a scroll reveal
on a marketing page, seen once per session, where the blur needs room to
resolve. Interactive motion stays under 300ms.

### 3.2 Hover

- **Buttons** — label mask slides `−50%`, arrow mask slides `+100%`, both pills
  fill to `--colors--midnight-black`. 350ms, `ease`. Above the usual hover
  budget on purpose: it is a two-part slide and reads as mush when rushed.
- **Cards** — image `scale(1.03)` and the arrow badge scaling from `0.9` to `1`.
  200ms `--ease-out`.
- **Links** — colour only, 200ms.
- Every hover rule sits inside `@media (hover: hover) and (pointer: fine)`.
- Every pressable element gets `:active { transform: scale(0.97) }` at 140ms.
  The reference build omits this; we add it.

### 3.3 Scroll-driven

Three places only, all `framer-motion` `useScroll` mapped to explicit
progress ranges, all disabled below 992px where the layout goes static:

1. **Hero showreel** — 28%→50% progress: `50% / 40vh` → `100% / 100vh`;
   50%→60%: sticky opacity 1 → 0.8.
2. **Work list** — the left column of titles translates against scroll behind
   top and bottom gradient covers.
3. **Nothing else.** Parallax on body content is not part of this system.

### 3.4 Rules

- Transitions, not keyframes, for anything a user can trigger twice in a
  second — accordions, toggles, hovers. Transitions retarget; keyframes restart.
- Never `scale(0)`. Entrances start at `0.9`–`0.97` with opacity.
- In framer-motion use the full `transform` string, not `x`/`y`/`scale`
  shorthands — the shorthands are not hardware-accelerated.
- Exit the way you entered.

---

## 4. Primitives

| Component | File | Notes |
| --- | --- | --- |
| `PrimaryButton` | `src/components/ui/ds-button.tsx` | Accent pill + arrow pill. White label. Hover fills black. |
| `SecondaryButton` | same | Snow-white pill + accent arrow pill. Dark label, white on hover. |
| `SectionBadge` | `src/components/ui/section-badge.tsx` | Square-dot mono pill. Variants: `default`, `accent`, `dark`, `light`. |
| `Reveal` | `src/components/ui/reveal.tsx` | The entrance wrapper. `index` for stagger. |
| Icons | `src/components/ui/icons.tsx` | Arrow, star badge, globe, menu. Inline SVG, no network. |

Every section opens with a `SectionBadge`. Every section is wrapped in
`.ds-root` so it picks up the type and colour base.

---

## 5. Home page architecture

Order, and what each section is for. Content comes from
[`src/lib/data.ts`](src/lib/data.ts) — no copy is hardcoded in a component.

| # | Section | Reference | Surface | Purpose | Data |
| --- | --- | --- | --- | --- | --- |
| 1 | Hero | `hero` | Light | Positioning + showreel | `COMPANY` |
| 2 | Work | `work-v6` | Dark panel | Proof: what we shipped | `PORTFOLIO_PROJECTS` |
| 3 | Intro | `intro-v4` | Light | The one-sentence argument | static |
| 4 | Clients | `companies` | Light | Logo strip, trust | `CLIENTS` |
| 5 | Workflow | `workflow-v3` | Dark panel | How an engagement runs | static |
| 6 | Services | `services-v8` | Light | Numbered accordion of offerings | `SERVICES` |
| 7 | Testimonials | `testimonial-v1` | Light | Marquee of client quotes | `TESTIMONIALS` |
| 8 | FAQ | `faq` | Light | Objection handling | `HOME_FAQS` |
| 9 | Blog | `blog-v6` | Light | Depth signal, three latest posts | `BLOG_POSTS` |
| 10 | CTA | `cta` | Light | Single conversion moment | `COMPANY` |
| 11 | Footer | `footer` | Dark panel | Navigation + contact | `COMPANY` |

The reference's pricing section is dropped — Saurabh Infosys does not publish
fixed pricing, and a pricing block that says "contact us" is a dead section.

### Rhythm

Light, **dark**, light, light, **dark**, light, light, light, light, light,
**dark**. The two dark panels land at roughly one third and two thirds of the
scroll, breaking the page into three readable movements.

---

## 6. Section specs

Each section gives layout, content mapping and motion. Exact CSS lives in
`design-system.css` under a banner matching the section name.

### 6.1 Hero — `hero-section.tsx`

Rating badge, two-tone H1, a 248px offer card on the right, then a sticky
showreel below.

**Motion.** Four staggered `<Reveal>`s (badge, heading, card, showreel).
Scroll-driven showreel: over a 300vh runway, 28%→50% takes the frame from
`50% / 40vh` to `100% / 100vh`; 50%→60% drops sticky opacity to 0.8. Desktop
only — below 992px the runway collapses and the frame is a static image, so
the component keys on the breakpoint to drop framer-motion's inline styles.

### 6.2 Work — `work-section.tsx`

One black card, `overflow: clip`, 28px radius. Left: a sticky 310px rail with
the badge and a stack of project titles. Right: a 566px column of 400px image
cards, offset 220px so it starts below the rail.

**Motion.** The title stack translates `35%` → `-45%` of its own height across
27%→80% of the section's scroll, behind two 188px gradient scrims that bleed
5% past the text edges. The reference heavily damps this scrub, so the
progress value runs through a spring rather than mapping raw. Card hover
blurs the image to 5px and pops a 60px white arrow — `scale(0.85)` + opacity,
not `scale(0)`, 400ms. Two more sticky scrims fade the column into the panel.

**Trap.** `overflow: clip` on the wrap is load-bearing. `hidden` makes it a
scroll container and both sticky behaviours die.

### 6.3 Intro — `intro-section.tsx`

A centred 682px statement over a 477px offer card. The statement is an `h2`
for outline purposes but sized at H5 — it reads as a paragraph.

**Motion.** Each word scrubs `#7d7d7d` → `#141414` on scroll, on a window
that slides across the paragraph so the darkening reads as a wave. Card
enters with the standard `<Reveal>`. Reduced motion renders every word at
full ink immediately.

### 6.4 Clients — `clients-section.tsx`

A 300vh runway with a sticky viewport. Three full-bleed panels wipe in
sequence — ink 25→40%, brand 35→50%, white 45→60% — then the client grid
fades in at 61→67%. Below 992px the runway collapses to a CSS marquee.

**Deviation.** The reference grows `width`/`height` from a static position,
which forces layout every frame and wipes from an ambiguous origin. Ours
scales from centre and carries a 32px radius, so a half-grown panel reads as
an expanding card rather than a colour flash.

### 6.5 Workflow — `workflow-section.tsx`

Dark panel. A white 390px card lists four steps; the active one fills snow
white and expands to show its tag pills. The copy for the active step sits
right, with a circular next-step button.

**Motion.** Tag row animates `height: auto` on open (400ms). Copy crossfades
with a 4px blur at 250ms — blur bridges the two states so it reads as one
change rather than two overlapping texts.

### 6.6 Services — `services-section.tsx`

Numbered accordion from `SERVICES`. Row: number, title, plus glyph. Open row
reveals a 334px image, description, feature pills and a See details button.

**Motion.** `height: auto` at 400ms — the one sanctioned use of animated
height. Plus rotates 45° into a cross on the same curve. One row open at a
time; clicking the open row closes it.

### 6.7 Testimonials — `testimonials-section.tsx`

400vh runway, sticky viewport, a row of 566px cards translating horizontally
`4%` → `-68%` across scroll. Below 992px it is a 45s CSS marquee — CSS, not
JS, so it stays smooth while the page is still loading.

Avatars are initials on a tinted square; we have no client photographs.

### 6.8 FAQ — `faq-section.tsx`

Sticky heading left, accordion right, from `HOME_FAQS`. Open item fills snow
white. Same accordion mechanics as Services.

### 6.9 Blog — `blog-section.tsx`

Badge and heading left, All articles button right, three cards below from
`BLOG_POSTS`. Card hover deepens the surface and nudges the arrow 4px.
Covers are brand gradients until posts carry real images.

### 6.10 CTA — `cta-section.tsx`

Centred badge, two-tone headline, one button. The only conversion moment
below the hero.

### 6.11 Footer — `Footer.tsx`

Dark panel in the root layout, so every page gets it. Wordmark and tagline,
three link columns, contact details, three social buttons, copyright bar.

---

## 7. Build order and conventions

1. Work · 2. Intro · 3. Clients · 4. Workflow · 5. Services · 6. Testimonials ·
7. FAQ · 8. Blog · 9. CTA · 10. Footer

### File conventions

- One section per file in `src/components/pages/home/`, named
  `<section>-section.tsx`, default-exported.
- `"use client"` only where a section actually needs state or scroll. Static
  sections stay server components.
- Section CSS goes in `design-system.css` under a commented banner matching the
  section name, base rules first, then 991 / 767 / 479 blocks in that order.
- Content is read from `data.ts`. If a section needs a field that does not
  exist, add it to `data.ts` — do not inline the string.

### Checklist before a section is done

- [ ] Renders correctly at 1600 / 991 / 767 / 430
- [ ] Entrance via `<Reveal>`, staggered where there is a list
- [ ] Hover states gated behind `(hover: hover) and (pointer: fine)`
- [ ] `:active` scale on anything pressable
- [ ] `prefers-reduced-motion` path verified
- [ ] No hardcoded colour, size, duration or easing
- [ ] Keyboard reachable; accordions use real buttons with `aria-expanded`
