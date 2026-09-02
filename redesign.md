# Saurabh Infosys — Complete Redesign Specification

> **Design Reference:** [Flux Studio Agency](https://flux-studio-agency.webflow.io/)  
> **Goal:** Transform the current site into a premium, world-class IT services agency website that follows the Flux Studio design language — bold typography, electric purple accent (`#5235F6`), dark/light contrast sections, generous whitespace, and purposeful motion.

---

## 📐 Design Philosophy

The redesign follows five core principles extracted from the Flux Studio reference:

1. **Bold Contrast** — Dark immersive sections (hero, testimonials, footer) alternating with clean light content sections
2. **Typography-Led** — Clash Display headlines command attention; Manrope body text ensures readability
3. **Generous Space** — Large section gaps (5rem+), breathing room between elements, never cramped
4. **Rounded & Soft** — Consistent `border-radius: 1rem` across cards, images, and containers
5. **Purposeful Motion** — Subtle entrance animations, hover lifts, and transition feedback — never gratuitous

---

## 🎨 Color System

### Primary Palette

| Token                  | Value       | Usage                                                      |
| ---------------------- | ----------- | ---------------------------------------------------------- |
| `--color-primary`      | `#5235F6`   | CTAs, active states, accent highlights, brand identity      |
| `--color-primary-hover`| `#4129D6`   | Hover state for primary elements                            |
| `--color-primary-light`| `#5235F61A` | 10% opacity backgrounds, subtle accents                     |

### Neutral Palette

| Token                  | Value       | Usage                                                      |
| ---------------------- | ----------- | ---------------------------------------------------------- |
| `--color-black`        | `#000000`   | Headings, primary text on light backgrounds                 |
| `--color-black-2`      | `#0E0E0E`   | Dark section backgrounds (about, testimonials)              |
| `--color-white`        | `#FFFFFF`   | Primary light background, text on dark                      |
| `--color-white-2`      | `#F1F1F1`   | Card backgrounds, secondary surfaces                        |
| `--color-white-3`      | `#EBEBEB`   | Borders, dividers, tertiary surfaces                        |
| `--color-white-4`      | `#FFFFF7`   | Subtle warm white for footer links                          |

### Gray Scale

| Token                  | Value       | Usage                                                      |
| ---------------------- | ----------- | ---------------------------------------------------------- |
| `--color-gray-1`       | `#A3A3A3`   | Muted text, secondary labels                                |
| `--color-gray-2`       | `#9F9F9F`   | Service numbers, subtle text                                |
| `--color-gray-3`       | `#BBBBBB`   | Tertiary text                                               |
| `--color-gray-4`       | `#D9D9D9`   | Footer link text                                            |
| `--color-gray-5`       | `#7A7A7A`   | Footer secondary text, copyright                            |
| `--color-gray-6`       | `#787878`   | Deep gray body text                                         |
| `--color-gray-7`       | `#E2E8F0`   | Section borders, divider lines                              |

### Semantic Colors

| Token                    | Value       | Usage                                                    |
| ------------------------ | ----------- | -------------------------------------------------------- |
| `--color-deep-gray-1`    | `#64748B`   | Default body text color                                   |
| `--color-deep-gray-2`    | `#475569`   | Form text, secondary body text                            |
| `--color-deep-blue`      | `#0F172A`   | Rich text content, article body text                      |
| `--color-deep-blue-095`  | `#0F172AF2` | Dark overlay backgrounds (95% opacity)                    |
| `--color-transparent`    | `transparent`| Transparent backgrounds                                  |

---

## ✏️ Typography System

### Font Families

```css
--font-heading: 'Clash Display', Georgia, sans-serif;
--font-body: 'Manrope', sans-serif;
```

### Font Loading (Next.js)
Load via `next/font/local` for Clash Display and `next/font/google` for Manrope. Do NOT use CDN links.

### Heading Scale

| Element | Font Family     | Size (Desktop) | Size (Tablet) | Size (Mobile) | Line Height | Weight   |
| ------- | --------------- | -------------- | ------------- | ------------- | ----------- | -------- |
| Display 1 | Clash Display | `7rem` (112px) | `4.85rem`     | `2.5rem`      | `1.2`       | Normal   |
| Display 2 | Clash Display | `5.5rem` (88px)| `4.5rem`      | `2.56rem`     | `0.9`       | SemiBold |
| H1      | Clash Display   | `4rem` (64px)  | `3.75rem`     | `2.25rem`     | `0.9`       | SemiBold |
| H2      | Clash Display   | `3.5rem` (56px)| `3rem`        | `2rem`        | `1.3`       | Normal   |
| H3      | Clash Display   | `3.5rem` (56px)| `2.75rem`     | `1.75rem`     | `1.3`       | Normal   |
| H4      | Clash Display   | `3rem` (48px)  | `2rem`        | `1.5rem`      | `1.5`       | Normal   |
| H5      | Clash Display   | `2.5rem` (40px)| `1.75rem`     | `1.375rem`    | `1.5`       | Normal   |
| H6      | Clash Display   | `2rem` (32px)  | `1.5rem`      | `1.25rem`     | `1.5`       | Normal   |

### Body Text Scale

| Element     | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Weight  |
| ----------- | ----------- | -------------- | ------------- | ----------- | ------- |
| Body Base   | Manrope     | `1.5rem` (24px)| `1.125rem`    | `1.4`       | Normal  |
| Body Large  | Manrope     | `1.25rem` (20px)| `1.125rem`   | `1.5`       | Medium  |
| Body SM     | Manrope     | `1.125rem` (18px)| `1rem`      | `1.5`       | Normal  |
| Body SMM    | Manrope     | `1rem` (16px)  | `1rem`        | `1.5`       | Normal  |
| Body MD     | Manrope     | `0.75rem` (12px)| `0.75rem`   | `1.4`       | Normal  |
| Body 1XL    | Manrope     | `0.875rem` (14px)| `0.875rem` | `1.3`       | Normal  |

### Font Weights

| Token             | Value |
| ----------------- | ----- |
| `--fw-light`      | `300` |
| `--fw-normal`     | `400` |
| `--fw-medium`     | `500` |
| `--fw-semibold`   | `600` |
| `--fw-bold`       | `700` |

---

## 📏 Spacing System

### Desktop Spacing Tokens

| Token           | Value     | Usage                                        |
| --------------- | --------- | -------------------------------------------- |
| `--space-none`  | `0`       | Reset                                         |
| `--space-mdd`   | `0.25rem` | Micro gaps (4px)                              |
| `--space-md`    | `0.5rem`  | Small internal gaps (8px)                     |
| `--space-smn`   | `0.75rem` | Tags, pill padding (12px)                     |
| `--space-sm`    | `1rem`    | Standard gap (16px)                           |
| `--space-lg`    | `1.25rem` | Component gaps (20px)                         |
| `--space-base`  | `1.5rem`  | Section padding, card internal (24px)         |
| `--space-xl`    | `1.75rem` | Medium spacing (28px)                         |
| `--space-xxl`   | `2rem`    | Grid gaps (32px)                              |
| `--space-2xl`   | `2.125rem`| Tab padding (34px)                            |
| `--space-3xl`   | `2.5rem`  | Large gaps (40px)                             |
| `--space-5xl`   | `3rem`    | Hero bottom padding (48px)                    |
| `--space-6xl`   | `3.5rem`  | Extra large spacing (56px)                    |
| `--space-7xl`   | `3.75rem` | Footer padding (60px)                         |
| `--space-8xl`   | `4rem`    | Section component gaps (64px)                 |
| `--space-9xl`   | `4.38rem` | Footer top/bottom (70px)                      |
| `--space-10xl`  | `6.69rem` | Extra large decorative gaps (107px)           |
| `--section-gap` | `5rem`    | Between major sections (80px)                 |

### Responsive Spacing (scales down at each breakpoint)

Spacing tokens reduce progressively:
- **≤991px (Tablet):** ~80-90% of desktop values
- **≤767px (Mobile):** ~60-70% of desktop values  
- **≤479px (Small Mobile):** ~40-50% of desktop values

---

## 🔲 Border Radius System

| Token           | Value       | Usage                                    |
| --------------- | ----------- | ---------------------------------------- |
| `--radius-sm`   | `0.5rem`    | Small elements, tags, badges (8px)       |
| `--radius-md`   | `1rem`      | Cards, images, containers (16px)         |
| `--radius-xl`   | `1.5rem`    | Large cards, dropdown menus (24px)       |
| `--radius-xxl`  | `6.25rem`   | Pill buttons, form fields (100px)        |
| `--radius-full` | `62.25rem`  | Perfect circles (996px)                  |

---

## 🖼️ Container System

| Token              | Value    | Usage                                        |
| ------------------ | -------- | -------------------------------------------- |
| `--container-fluid`| `83rem`  | Max-width for main content (1328px)           |
| `--container-full` | `83rem`  | Full-width container variant                  |
| `--width-full`     | `100%`   | Full width                                    |
| `--height-full`    | `100%`   | Full height                                   |

### Responsive Containers
- **Desktop:** `max-width: 83rem` (1328px)
- **Tablet (≤991px):** `max-width: 728px`
- **Mobile (≤767px):** `max-width: none` (full width with padding)

---

## 🧩 Component Specifications

### Navigation Bar
- **Position:** Fixed/absolute, full width, z-index 22
- **Background:** Transparent (with optional backdrop-blur on scroll)
- **Layout:** Logo left | Nav links center | CTA button right
- **Logo:** 17.25rem width
- **Nav links:** Manrope Medium, `1.125rem`, white on dark / black on light pages
- **CTA Button:** Pill shape (`border-radius: 6.25rem`), primary orange background, white text
- **Dropdown:** Rounded container (`1.5rem radius`), off-white background, 3-column layout
- **Mobile:** Hamburger menu with full-width overlay, rounded container

### Hero Section
- **Background:** Full-viewport dark image with gradient overlay (`linear-gradient(transparent, black)`)
- **Border radius:** `1rem` (inset by `0.5rem` margin on sides)
- **Min height:** `100vh`
- **Headline:** Display 2 size (`5.5rem`), Clash Display SemiBold, white
- **Sub-text:** Body Large (`1.25rem`), Manrope, white at 80% opacity
- **CTA:** Primary pill button with arrow icon circle
- **Service widget:** Bottom-right, listing services with border separators

### Section Headers
- **Pattern:** Em-dash line + section label text in one row
- **Line:** `1.5rem` wide, `1px` height, gray color
- **Label:** Body Large, Manrope Medium
- **Heading:** Below the label, H2 Clash Display

### Cards
- **Background:** `#F1F1F1` (white-2)
- **Padding:** `0.5rem` to `1.5rem` depending on card type
- **Border radius:** `0.5rem` to `1rem`
- **Hover:** Subtle lift/color change, no heavy shadows

### Buttons

#### Primary Button
```
Background: #5235F6 (primary)
Text: White, Manrope Medium, 1rem
Padding: 0.25rem (top/bottom/right) + 1.25rem (left)
Border-radius: 6.25rem (pill)
Icon: Black circle with white arrow (2.75rem × 2.75rem)
Hover: Text slides up (overflow hidden animation)
```

#### Secondary Button
```
Background: Transparent
Border: 1px solid black
Text: Black, Manrope Medium, 1rem
Padding: Same as primary
Border-radius: 6.25rem (pill)
Icon: White circle with black arrow
Hover: Text slides up
```

#### Tertiary Button
```
Background: White
Border: None
Text: Black, Manrope Medium, 1rem
Padding: Same as primary
Border-radius: 6.25rem (pill)
Icon: Black circle with white arrow
```

### Footer
- **Background:** Black (`#000000`), rounded corners (`1rem`)
- **Layout:** Multi-column grid (5 columns desktop)
- **Brand logo:** Left column, 25rem width
- **Newsletter:** Right column with email input + submit button
- **Links:** Gray-5 (`#7A7A7A`) text, hover to warm white
- **Copyright:** Bottom row with left text + right terms links
- **Input:** Rounded pill, transparent background, gray-5 border, focus state changes to primary

---

## 📱 Responsive Breakpoints

| Breakpoint  | Max Width | Layout Changes                                    |
| ----------- | --------- | ------------------------------------------------- |
| Desktop XL  | `1920px+` | Full token values, widest layout                  |
| Desktop L   | `1440px`  | Slightly tighter spacing                          |
| Desktop     | `1280px`  | Standard desktop layout                           |
| Tablet      | `≤991px`  | Single-column layouts, reduced typography, mobile nav |
| Mobile      | `≤767px`  | Stacked layouts, smaller headings, slider components |
| Small Mobile| `≤479px`  | Maximum compression, single-column everything      |

---

## 🎬 Animation Guidelines

### Entrance Animations
- **Pattern:** Fade up with slight Y-translate (`opacity: 0 → 1`, `translateY: 16px → 0`)
- **Duration:** `400ms–600ms`
- **Easing:** `ease-out` or spring
- **Stagger:** 100ms between elements in a group
- **Trigger:** On viewport enter (Intersection Observer / Framer Motion `whileInView`)

### Hover States
- **Cards:** Subtle `translateY(-4px)` lift + optional border color change
- **Links:** Color transition to primary (`#FF4D00`), `300ms ease`
- **Buttons:** Text slide-up animation (overflow hidden technique), `300ms`
- **Images:** Subtle scale (`1.02–1.05`) on hover, `400ms ease`

### Page Transitions
- **Pattern:** Fade in with slight slide from bottom
- **Duration:** `300ms`
- **Use Framer Motion `AnimatePresence`**

### Scroll Animations
- **Marquee:** Linear infinite scroll for client logos, `30s` duration
- **Counter:** Number counting up animation on scroll into view
- **Parallax:** Subtle parallax on hero background image

### Reduced Motion
- Always wrap animations in `@media (prefers-reduced-motion: no-preference)`
- Provide instant alternatives for users who prefer reduced motion

---

## 📄 Page Structure

### Homepage
1. **Hero** — Full-viewport dark image, headline, sub-text, CTA, service widget
2. **Clients** — Logo marquee + client grid cards with years
3. **About** — Dark background section with stats counter cards
4. **Services** — Numbered list with expandable details + hover images
5. **Work Process** — Asymmetrical bento grid (Discover → Define → Design → Deliver)
6. **Projects** — 2-column staggered portfolio grid
7. **Testimonials** — Dark background, horizontal card slider with ratings
8. **FAQ** — Accordion-style expandable questions with author attribution
9. **Blog** — 3-column article grid with tags, read time, and circle CTA
10. **CTA** — Gradient banner (`ebebeb → primary → ebebeb`) with centered headline
11. **Footer** — Black rounded container, multi-column, newsletter signup

### About Page
1. **Hero** — Centered headline + breadcrumb, full-width team photo
2. **Client Marquee** — Logo strip
3. **Counter Section** — 4-column stats grid (Projects, Clients, Awards, Years)
4. **Behind the Design** — 2-column grid with numbered principles
5. **Team** — 3-column photo cards with glassmorphism overlay
6. **Awards** — Accordion-style list with hover image reveal

### Services Page
1. **Hero** — Centered headline with sub-text
2. **Service Grid** — 2-column layout: left content + right image grid
3. **Featured Services** — Numbered expandable list with detail images

### Portfolio Page
1. **Hero** — Centered headline with tab filters (All, Web, Mobile, ERP, etc.)
2. **Project Grid** — 2-column cards with hover effects and circle CTA
3. **CTA Section**

### Blog Page
1. **Hero** — Centered headline with category tab filters
2. **Article Grid** — 3-column cards with image, tags, read time
3. **CTA Section**

### Contact Page
1. **Header** — Left: heading + contact details | Right: contact form
2. **Form Fields** — Rounded pill inputs, textarea with rounded corners
3. **Map / Office Section** — Optional office images grid

---

## 🔤 CSS Custom Properties (Full Token Map)

```css
:root {
  /* ── Colors ── */
  --color-primary: #5235F6;
  --color-primary-hover: #4129D6;
  --color-primary-light: rgba(82, 53, 246, 0.1);
  --color-black: #000000;
  --color-black-2: #0E0E0E;
  --color-white: #FFFFFF;
  --color-white-2: #F1F1F1;
  --color-white-3: #EBEBEB;
  --color-white-4: #FFFFF7;
  --color-white-08: rgba(255, 255, 255, 0.8);
  --color-gray-1: #A3A3A3;
  --color-gray-2: #9F9F9F;
  --color-gray-3: #BBBBBB;
  --color-gray-4: #D9D9D9;
  --color-gray-5: #7A7A7A;
  --color-gray-6: #787878;
  --color-gray-7: #E2E8F0;
  --color-deep-gray-1: #64748B;
  --color-deep-gray-2: #475569;
  --color-deep-blue: #0F172A;
  --color-deep-blue-095: rgba(15, 23, 42, 0.95);

  /* ── Typography ── */
  --font-heading: 'Clash Display', Georgia, sans-serif;
  --font-body: 'Manrope', sans-serif;
  --fw-light: 300;
  --fw-normal: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;

  /* ── Font Sizes ── */
  --fs-display-1: 7rem;
  --fs-display-2: 5.5rem;
  --fs-h1: 4rem;
  --fs-h2: 3.5rem;
  --fs-h3: 3.5rem;
  --fs-h4: 3rem;
  --fs-h5: 2.5rem;
  --fs-h6: 2rem;
  --fs-body-base: 1.5rem;
  --fs-body-lg: 1.25rem;
  --fs-body-sm: 1.125rem;
  --fs-body-smm: 1rem;
  --fs-body-md: 0.75rem;
  --fs-body-1xl: 0.875rem;

  /* ── Line Heights ── */
  --lh-09: 0.9em;
  --lh-10: 1em;
  --lh-12: 1.2em;
  --lh-13: 1.3em;
  --lh-14: 1.4em;
  --lh-15: 1.5em;

  /* ── Spacing ── */
  --space-none: 0;
  --space-mdd: 0.25rem;
  --space-md: 0.5rem;
  --space-smn: 0.75rem;
  --space-sm: 1rem;
  --space-lg: 1.25rem;
  --space-base: 1.5rem;
  --space-xl: 1.75rem;
  --space-xxl: 2rem;
  --space-2xl: 2.125rem;
  --space-3xl: 2.5rem;
  --space-5xl: 3rem;
  --space-6xl: 3.5rem;
  --space-7xl: 3.75rem;
  --space-8xl: 4rem;
  --space-9xl: 4.38rem;
  --space-10xl: 6.69rem;
  --section-gap: 5rem;

  /* ── Border Radius ── */
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-xl: 1.5rem;
  --radius-xxl: 6.25rem;
  --radius-full: 62.25rem;

  /* ── Container ── */
  --container-fluid: 83rem;
  --container-full: 83rem;
}
```

---

## 🖼️ Reference Screenshots

The following screenshots were captured from the Flux Studio Agency reference site during the design analysis:

| Section | Description |
|---------|-------------|
| Hero | Full-viewport dark photography with bold Clash Display headline |
| Navigation | Transparent navbar with centered links and pill CTA |
| Services | Numbered list layout with hover-reveal images |
| Work Process | Asymmetrical bento grid (1 large + 3 smaller cards) |
| Projects | 2-column staggered portfolio cards with circle CTA overlays |
| Testimonials | Dark section with horizontal card slider |
| FAQ | Accordion with section-scoped content |
| Blog | 3-column article cards with category tags |
| CTA | Gradient banner with centered headline |
| Footer | Black rounded container, 5-column layout, newsletter |

---

## ✅ Redesign Checklist

- [ ] Set up Clash Display + Manrope fonts via `next/font`
- [ ] Replace all CSS custom properties with new token system
- [ ] Update `tailwind.config.ts` with new color/spacing/font tokens
- [ ] Redesign Navbar (transparent, centered links, pill CTA, mobile menu)
- [ ] Redesign Footer (black rounded, multi-column, newsletter)
- [ ] Redesign Homepage hero (full-viewport dark, display typography)
- [ ] Build section header component (em-dash pattern)
- [ ] Build button system (primary, secondary, tertiary with arrow icons)
- [ ] Redesign services section (numbered list with hover images)
- [ ] Build work process bento grid
- [ ] Build portfolio grid (2-column staggered)
- [ ] Build testimonial slider (dark section)
- [ ] Build FAQ accordion
- [ ] Build blog grid (3-column with tags)
- [ ] Build CTA gradient banner
- [ ] Redesign About page
- [ ] Redesign Services page
- [ ] Redesign Portfolio page
- [ ] Redesign Blog page
- [ ] Redesign Contact page
- [ ] Add entrance animations (Framer Motion)
- [ ] Add hover states and micro-interactions
- [ ] Responsive testing across all breakpoints
- [ ] SEO audit (meta, schema, headings, alt text)
- [ ] Performance audit (Lighthouse > 90)
- [ ] Accessibility audit (WCAG AA)
