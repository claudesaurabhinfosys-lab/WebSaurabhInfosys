# Image Prompts — Saurabh Infosys

Every generatable image slot on the site, page by page, section by section.
Each entry specifies **which component, which line, target size, visual lane, and prompt parameters.**

**Excluded by decision:** project/portfolio covers and product imagery. Those
require real screenshots and authentic client product deliverables. Every slot
below is marked ✅ **generate** or ⛔ **skip — needs real asset**.

---

# Part 0 — The Style Foundation

## 0.1 The Reference Standard: Hypen Agency & Curated Agency Lanes

All imagery on Saurabh Infosys is anchored directly in the high-end creative agency
aesthetic established by **[Hypen Agency](https://hypen-agency.webflow.io/)** and the
reference assets in `public/images/`.

| Lane | Reference File | Visual Direction (Hypen Standard) |
|---|---|---|
| **A** | `work/placeholder-04.webp` (Hypen Beliefs 02) | **Surreal Minimalist 3D Render** — Frosted architectural glass block with live emerald moss growing from the top, pale mint-grey gradient |
| **A** | `work/placeholder-05.webp` (Hypen Beliefs 03) | **Surreal Landscape Render** — Rolling grass hills at golden hour, real volumetric clouds nestled *inside* the valleys |
| **B** | `hero/placeholder-card.webp` (Hypen Hero 02) | **Skyward Low-Angle Editorial** — Two creative figures from an extreme low angle against deep azure sky, hard sun, rust-orange & crisp white wardrobe |
| **C** | `work/placeholder-02.webp` | **Moody Macro Close-Crop** — Extreme tactile crop of crafted edge, warm raking light, deep olive shadow falloff |
| **D** | `work/placeholder-03.webp` (Hypen Beliefs 01) | **Tactile Craft & Balanced Still Life** — Granite rock balanced on minimalist cans, hands placing polished stones, crafted physical objects |
| **E** | Hypen About 01 / 02 Hero | **Monumental Architecture & Cinematic Scale** — Majestic hot air balloon ascending over dawn mountain mist, sweeping curved brutalist concrete light-halls |

### Lane Descriptions

- **Lane A — Surreal Minimalist 3D Render.** Monolithic, calm, impossible physical geometry.
  Physically accurate materials (matte bone ceramic, frosted architectural glass, brushed titanium,
  live emerald moss, morning dew). Calibrated desaturated gradient backgrounds. Carries conceptual slots.
- **Lane B — Skyward Low-Angle Editorial.** Real humans photographed outdoors from low camera
  angles looking up into an infinite azure sky. Hard natural sunlight, sculptural silhouettes,
  vibrant wardrobe accents (electric rust-orange, cobalt, lemon, bone white). Pure creative confidence, zero corporate clutter.
- **Lane C — Moody Macro Close-Crop.** One precision edge or radius filling the frame diagonally.
  Warm raking light, deep falloff into olive-taupe. Quiet, tactile, high-luxury craftsmanship.
- **Lane D — Tactile Human Craft & Poetic Still Life.** Tangible physical objects in natural light:
  hands interacting with sculpted stone, machined metal cards, balanced granite monoliths, hot air
  balloons soaring over geological terrain. Demonstrates human intentionality without desk tropes.
- **Lane E — Monumental Monolithic Architecture & Spatial Light.** Vast curved concrete geometries,
  brutalist lightwells, chiaroscuro sunbeams cutting through atmospheric haze, lone silhouettes
  in vast spatial scale. Celebrates timeless structure and disciplined scale.

---

## 0.2 Hard Rules — The Zero-Office Mandate

1. **STRICT PROHIBITION ON OFFICE IMAGERY:**
   - **NO desks, NO computer monitors, NO office chairs, NO conference rooms, NO glass cubicles, NO people huddled over laptops in a corporate office.**
   - *Why:* Saurabh Infosys does not operate a sprawling corporate office campus. Generating fake tech-office scenes produces unconvincing stock imagery that damages credibility. World-class studios (like Hypen) project authority through surreal art direction, physical craft, skyward editorial portraits, and monumental architectural scale.
2. **No devices floating on seamless grey:**
   - No generic phones or laptops floating against plain studio backdrops showing fake UI dashboards.
3. **Every image earns its conceptual slot:**
   - The process step about *measurement* depicts measurement; *architecture* depicts structural frameworks. No decorative filler.
4. **Color comes from natural materials and atmospheric light:**
   - The site UI is greyscale (`#0E0E0E` / `#F1F1F1` / `#E2E8F0`). Imagery provides organic warmth: moss green, sky azure, rust orange, warm terracotta, bone, sand, and charcoal. **Never force `#00A0E3` into every image** — that makes it look like a template.
5. **No readable text, fake logos, or synthetic UI:**
   - AI renders text and UI erratically. Keep all surfaces free of letters, fake interfaces, and logos.
6. **Human presence is editorial and unposed:**
   - People in Lane B and Lane D are shot with editorial fashion discipline — silhouettes against sky, three-quarter profiles, heads tilted toward horizon, or hands engaged in tactile craft. Never a toothy corporate headshot looking down the lens.

---

## 0.3 Modern AI Generator Guidance

When prompting modern AI image generation models:

- **Midjourney v6 / v6.1:** Append `--ar [ratio] --style raw --v 6.1` for photographic editorial fidelity and accurate physically based material rendering.
- **Flux.1 (Dev / Schnell):** Excels at natural daylight, authentic skin textures, and macro stone/ceramic details. Avoid keywords like "photorealistic" or "hyperrealistic"; describe physical lighting, lens focal lengths, and camera sensor properties instead.
- **DALL-E 3 / Ideogram 2:** Specify camera perspective explicitly (e.g. "extreme low-angle worms-eye view", "macro 100mm f/2.8 lens", "warm natural sidelight").

---

## 0.4 Palettes

Referenced by code across all prompt specifications:

| Code | Palette | Lighting & Atmosphere |
|---|---|---|
| **P1** | Pale mint-grey to cool white | Soft overcast ambient light, dewy freshness |
| **P2** | Warm sand to pale terracotta | Low golden raking light from the right, warm earthy glow |
| **P3** | Pale sky blue to warm cream | Clear golden hour from the left, clean and airy |
| **P4** | Pale sage-grey to bone | Soft diffused overhead daylight, calm and analytical |
| **P5** | Deep olive-taupe to charcoal | Warm raking directional beam, deep velvety shadow falloff *(Lane C)* |
| **P6** | Flat slate-grey overcast | Cool even cloud cover, zero direct sun *(Lane D)* |
| **P7** | Bone-white to soft silver | Even diffuse studio light, architectural clarity |

---

## 0.5 Sizing & Object-Fit Rules

Every container uses `object-fit: cover`. Cover **crops**, never stretches.

- **Top-anchored containers** (`object-position: 50% 0%`): Subject must reside in the **top 60%** (Hero cards, portfolio cards).
- **25%-anchored containers** (`object-position: 50% 25%`): Markets grid on About page. Keep focal point in upper half.
- **Cards that hover-scale to 1.15:** Ensure at least 15% clear margin on all four borders so zooming does not cut off the primary subject (Services cards, Blog cards).
- **Full-bleed panels:** Capped at **1920px wide** master resolution.

---

# Part 1 — Home Page

## 1.1 ✅ Hero — Contact Card

> *"Have a serious project?" · "The Saurabh Infosys delivery team" · info@saurabhinfosys.com*

| | |
|---|---|
| Component | [hero-section.tsx:116](src/components/pages/home/hero-section.tsx#L116) |
| CSS | `.hero-cta-image` — 272 × 164 css px |
| **Generate** | **544 × 328** (@2x) · 5:3 · centre crop |
| Lane / palette | **Lane B** — Skyward Low-Angle Editorial · **P3** sky |
| Save to | `public/images/hero/contact-card.webp` |

**Meaning:** The primary action card above the fold. Communicates high creative agency energy and quiet confidence. Directly mirrors Hypen's signature `Hero Image 02.webp` (reference file: `public/images/hero/placeholder-card.webp`).

```
Editorial fashion-grade photograph of two stylish creative individuals shot from an extreme low camera angle looking up against an infinite, cloudless deep blue sky. Hard, brilliant natural afternoon sun illuminating their profiles and creating crisp geometric shadow lines. The figure on the left wears a tailored, minimalist electric rust-orange jacket; the figure on the right wears a textured crisp linen white blazer. Both stand with calm, effortless posture, looking forward toward the horizon with quiet confidence. No office, no desks, no indoor elements. Cinematic 35mm lens at f/4, Kodak Portra 400 color science, natural skin textures, fine grain, high-end agency campaign quality.
```

**Negative** — `office, desk, computer, monitor, laptop, cubicle, boardroom, suits, tie, corporate stock photo, posed handshake, teeth smiling at lens, indoor lighting, text, letters, logos, watermark, HDR, oversaturated, plastic skin`

---

## 1.2 ⛔ Hero — "New Launch" Card (MySampark)

`hero-section.tsx:153` · 670 × 660 · **Skip — product asset.** Needs real MySampark mobile app mockups and product renders.

---

## 1.3 ⛔ Hero — Newest Project Card

`hero-section.tsx:159` · 1116 × 660 · **Skip — project asset.** Uses real case study asset from portfolio.

---

## 1.4 ✅ About Section — Side Image

> *"An AI-first software studio built for speed and scale"*

| | |
|---|---|
| Component | [about-section.tsx:51](src/components/pages/home/about-section.tsx#L51) |
| CSS | `.about-v5-image-wrap` — 214 × 214 css px |
| **Generate** | **428 × 428** (@2x) · 1:1 · centre crop |
| Lane / palette | **Lane D** — Tactile Human Craft & Balanced Precision · **P2** sand |
| Save to | `public/images/about/studio.webp` |

**Meaning:** Sits top-right of the homepage About copy. Renders at 214px, demanding **one bold, unambiguous tactile subject**. Demonstrates human care, tactile discipline, and intentional precision (inspired by Hypen's `Beliefs 04` and `Workflow 04`).

```
Tactile editorial close-up photograph of a human hand in gentle motion, carefully placing a single smooth, polished dark obsidian river stone into a handcrafted pale beige ceramic bowl. The bowl rests on a neutral raw linen surface with subtle woven texture. Warm, low-angle natural morning light streaming from the left, highlighting the polished curve of the stone and the matte texture of the ceramic. Extremely shallow depth of field, 85mm lens at f/2.2, warm earth tones, fine film grain, meditative and precise. No office, no computers, no tech clutter.
```

**Negative** — `office, desk, monitor, keyboard, computer, laptop, messy background, text, words, icons, plastic, neon, oversaturated, blurry hands, extra fingers, cartoon, 3D render look, HDR`

---

## 1.5 ⛔ Work Section — 4 Project Covers

`work-section.tsx:55` · 1580 × 1056 each · **Skip — project assets.** Real client deliverables.

---

## 1.6 ✅ Process Section — 4 Step Images

> *"A delivery model designed for momentum"*

| | |
|---|---|
| Component | [process-section.tsx:75](src/components/pages/home/process-section.tsx#L75) |
| CSS | `.process-image-wrap` — ~297 × 334 css px (50% of open accordion) |
| **Generate** | **594 × 668** (@2x) · 8:9 portrait · centre crop |
| Lane / palette | **Lane A** · all four in **P7 (bone)** |
| Save to | `public/images/process/step-0N.webp` |

**Meaning:** Progresses conceptually through **Scope → Structure → Repetition → Measurement**. Identical lighting, materials, and bone palette across all four; only the central sculpted subject evolves.

**Base prompt:**
```
A minimalist 3D render of {SUBJECT}. Physically accurate materials: matte bone ceramic, frosted architectural glass, brushed titanium, fine live emerald moss where indicated, micro dewdrops on surfaces. Bone-white to soft silver gradient background, soft overcast daylight from the upper left, subtle contact shadow to the lower right. Vertical portrait composition (8:9), subject centered occupying middle 60% of frame with clean negative space around it. Octane render, ray-traced caustics, shallow depth of field, natural muted tone, fine grain, calm and sculptural.
```

| # | Step | `{SUBJECT}` |
|---|---|---|
| 01 | **Scope and success metrics** | `a single smooth matte ceramic sphere resting in the exact center of a shallow concentric circular dish carved from pale limestone, the concentric grooves drawing the eye inward to the center point, pristine and balanced` |
| 02 | **Architecture and data model** | `an open architectural lattice of slender matte ceramic rods joined into a clean three-dimensional geometric framework, perfectly level and square, two translucent frosted glass slabs resting precisely inside the framework cells` |
| 03 | **Build, one week at a time** | `a sequence of seven identical pale ceramic monolithic blocks arranged in a gentle ascending arc, each block subtly taller and more refined than the preceding one, the final block crowned with a thin layer of living emerald moss` |
| 04 | **Launch, measure, refine** | `a single tall slender pale ceramic column with subtle precision-milled horizontal graduation lines climbing its length like a measurement scale, a delicate ring of vibrant green moss encircling the column at the 75 percent mark` |

**Negative (all four)** — `office, desk, screens, devices, text, letters, numbers, graphs, charts, bullseye, arrows, clocks, checklist, sticky notes, tools, robot, gears, neon, blue glow, dark background, saturated colors, HDR`

---

## 1.7 ✅ Services Section — 6 Service Master Images

| | |
|---|---|
| Component | [services-section.tsx:70](src/components/pages/home/services-section.tsx#L70) |
| CSS | `.services-v8-image-wrap` — 334 × 244 css px |
| **Generate** | **1336 × 976** (@2x) · 11:8 · centre crop · hover-scales 1.15 |
| Lane / palette | **Lane A** · palette varies per service |
| Save to | `public/images/services/<slug>.webp` |

> ⚠️ Generated at **1336 × 976** so each master can be reused directly by the Services index (§3.2), Service detail overview (§4.2), and About role list (§2.6).

**Base prompt:**
```
A minimalist 3D conceptual render of {SUBJECT}. Physically based materials: matte bone ceramic, frosted architectural glass, brushed titanium, living emerald moss. {PALETTE}, soft diffuse lighting with gentle cast shadows. Horizontal frame, primary subject positioned slightly left of center, generous calm negative space to the right, generous margins on all four borders. Octane render, subsurface scattering, shallow depth of field, fine film grain, serene and sophisticated.
```

| Slug | Service | `{SUBJECT}` | Palette |
|---|---|---|---|
| `ai-agents` | **AI Automation Services** | `an interlocking ceramic and frosted-glass kinetic sculpture of smooth curved forms caught mid-rotation, one upper curved arc levitating slightly in balanced suspension, fine moss growing along the mechanical seams, no motors or wires` | **P4** sage |
| `vibe-coding` | **Vibe Coding / AI MVPs** | `a single monolithic ceramic form half-emerged from a block of raw, rough uncut pale limestone, the finished half polished with surgical precision, the boundary between raw stone and polished ceramic stark and clean` | **P2** sand |
| `flutter` | **Flutter Mobile Apps** | `a single continuous slender matte ceramic ribbon rising from one base point and cleanly bifurcating into two symmetrical mirrored ribbons that curve gracefully outward, joined at the junction by a frosted glass prism` | **P1** mint |
| `gps` | **GPS & Fleet Management** | `a stylized miniature landscape of undulating pale ceramic dunes with a single continuous polished brushed-titanium ribbon threading fluidly through the valleys as an optimal navigation path, tiny patches of moss on the north-facing slopes` | **P3** sky |
| `saas` | **SaaS Platform Development** | `a modular architectural stack of five identical square frosted-glass slabs forming a clean vertical tower, each floor subtly rotated 5 degrees relative to the one below, diffuse daylight transmitting cleanly through the entire stack` | **P7** bone |
| `digital-marketing` | **Digital Marketing Tools** | `a cluster of minimal geometric ceramic blocks and low plinths viewed from an elevated angle, delicate concentric ripples of translucent light echoing outward across their surfaces from a taller central monolith` | **P3** sky |

**Negative (all six)** — `office, desk, monitors, screens, keyboards, cables, UI, dashboard, code, text, letters, robot face, android, glowing blue lines, circuit board, cyber, matrix, neon glow, dark room, saturated primary colors, HDR`

---

## 1.8 ✅ Blog Section — 3 Latest Post Covers

`blog-section.tsx:32` · `.blog-v6-image-wrap` ~417 × 200 css → **834 × 400** (@2x) · 2.09:1.
Inherits the three newest post covers directly from **Part 5 (§5.1)**. No separate assets.

---

## 1.9 ⛔ Clients Strip & Testimonials

`clients-section.tsx:43` & `testimonial-v1-avatar` · **Skip — authentic assets.** Client logos and genuine client headshots.

---

# Part 2 — About Page

## 2.1 ✅ Hero Panel (Showreel Stand-In)

> *"An AI-first software studio built for speed and scale"*

| | |
|---|---|
| Component | [about-hero.tsx:62](src/components/pages/about/about-hero.tsx#L62) |
| CSS | `.about-v1-video-wrap` — 1380 × 740 css px, dark scrim + text overlay |
| **Generate** | **1920 × 1030** · 1.86:1 · centre crop |
| Lane / palette | **Lane B** (people) or **Lane A** (render) — *no architecture* |
| Save to | `public/images/about/studio-panel.webp` |

> **File name:** the component reads `/images/about/studio-panel.webp`. Overwrite that file — do **not** create `hero-panel.webp`.

**Meaning:** Largest visual on the About page. Carries the positioning line and the social row. Must read as a creative studio with global reach — **not** as a building.

> **Important:** The bottom third is covered by a dark gradient scrim and typography. Keep all key visual elements in the upper two-thirds, and keep the lower third visually quiet (sky, mist, plain ground, blurred foreground).

### Option A (Recommended — Skyward Editorial Crew, Lane B · P3):
```
Editorial fashion-grade wide photograph of three young creative professionals standing apart on an open windswept salt flat under an infinite cloudless deep blue sky, shot from a low camera angle so the horizon sits in the lower third. Hard brilliant afternoon sun raking from the left, carving crisp shadow lines across their faces and clothing. Wardrobe: one electric rust-orange overshirt, one bone-white linen blazer, one deep charcoal knit. All three look outward toward the horizon in different directions, calm and unposed, none facing the camera. Wide 1.86:1 frame, figures placed across the upper two-thirds, empty pale ground filling the lower third. 35mm lens at f/4, Kodak Portra 400 color science, natural skin texture, fine grain, high-end agency campaign quality.
```

### Option B (Alternative — Surreal Monolith Horizon, Lane A · P1):
```
Minimalist surreal 3D render of a vast calm plane of pale bone ceramic stretching to a soft horizon, with five smooth matte ceramic monoliths of varying heights standing far apart across the upper two-thirds of the frame, each casting a long soft shadow toward the viewer. One monolith carries a thin band of live emerald moss near its crown, another is made of frosted architectural glass transmitting pale mint light. Pale mint-grey to cool white gradient sky, soft overcast light from the upper left, faint ground mist. Wide 1.86:1 frame, uncluttered lower third. Octane render, physically based materials, subtle ray-traced caustics, fine grain, serene and monumental in scale without any building.
```

### Option C (Alternative — Tactile Craft Wide, Lane D · P2):
```
Wide tactile editorial photograph of two pairs of human hands working across a long raw linen-covered table, arranging a row of polished dark obsidian stones, hand-thrown pale terracotta vessels and a folded length of indigo block-printed cloth into a precise line. Warm low golden morning light raking from the right, long soft shadows across the woven texture. Faces out of frame, only hands, forearms and objects. Wide 1.86:1 frame, all objects and hands in the upper two-thirds, plain empty linen filling the lower third. 50mm lens at f/2.8, shallow depth of field, warm earth tones, fine film grain, unhurried and precise.
```

**Negative (all options)** — `buildings, architecture, concrete structures, office desks, computer screens, monitors, swivel chairs, cubicles, corporate meeting, whiteboard, laptops, text, logos, neon, bright synthetic colors, oversaturated, HDR, plastic skin, extra fingers, teeth smiling at lens, watermark`

---

## 2.2 ✅ Identity Section — Who We Are

> *"Who we are" — an Ahmedabad-based software and AI studio*

| | |
|---|---|
| Component | [identity-section.tsx:34](src/components/pages/about/identity-section.tsx#L34) |
| CSS | `.identity-image-wrap` — 690 × 518 css px |
| **Generate** | **1380 × 1036** (@2x) · 4:3 · centre crop |
| Lane / palette | **Lane B** (people) or **Lane D** (craft) · **P2** warm terracotta / **P3** sky |
| Save to | `public/images/about/identity.webp` |

> **Wired:** the component reads `/images/about/identity.webp`.

**Meaning:** *"Built from India without compromising on quality."* Signals Ahmedabad and Indian craft through **people, materials and sky** — not through buildings.

### Option A (Recommended — Uttarayan Kite, Lane B · P3):
```
Editorial photograph shot from a low angle of a single young person on an open rooftop terrace at Uttarayan, arms raised, flying a small hand-made paper kite high into a vast cloudless azure sky. Hard brilliant January sunlight from the right, sharp sculptural shadows across a plain lime-washed parapet. The figure wears a simple crisp white kurta with a rust-orange scarf, seen in three-quarter profile looking upward at the kite, never at the camera. A single taut kite line traces a clean diagonal through the upper frame. 4:3 frame, sky filling two-thirds, the parapet edge low in the frame. 35mm lens at f/4, Kodak Portra color science, natural skin texture, fine grain, joyful and quietly confident.
```

### Option B (Alternative — Indian Craft Still Life, Lane D · P2):
```
Tactile editorial still life photograph of a hand-thrown terracotta bowl, a folded length of indigo block-printed Ahmedabad cotton and a small polished brass measuring weight arranged in a precise triangular composition on a raw linen surface. One human hand enters from the right, fingertips resting lightly on the folded cloth. Warm low golden raking light from the right, long soft shadows, visible weave and clay grain. 4:3 frame, subject occupying the middle 60 percent with generous calm negative space. 85mm lens at f/2.8, shallow depth of field, warm terracotta and indigo against bone, fine film grain, meditative and exact.
```

### Option C (Alternative — Craft Hands at the Wheel, Lane D · P2):
```
Close editorial photograph of two hands shaping a tall symmetrical vessel on a spinning potter's wheel, wet terracotta clay slipping between the fingers, fine slip spray caught in the light. Warm directional morning light from the left, deep soft falloff into shadow behind. Face and body out of frame, only forearms, hands and the turning form. 4:3 frame, the vessel slightly left of centre, quiet dark background to the right. 85mm lens at f/2.5, shallow depth of field, warm earth tones, fine film grain, absolute focus and craftsmanship.
```

**Negative (all options)** — `buildings, architecture, office park, glass office building, desks, people sitting at computers, crowds, street traffic, wires, clutter, billboards, banners, text, letters, logos, poverty tropes, smog, sunset postcard, oversaturated, HDR, extra fingers, blurry hands, plastic skin`

---

## 2.3 ✅ Workflow Section — 4 Step Images

> *"Workflow" — Align · Architect · Execute · Validate*

| | |
|---|---|
| Component | [workflow-section.tsx:58](src/components/pages/about/workflow-section.tsx#L58) |
| CSS | `.workflow-image-wrap img` — 414 × 276 css px |
| **Generate** | **828 × 552** (@2x) · 3:2 · centre crop |
| Lane / palette | **Lane A** · all four in **P1 (mint)** |
| Save to | `public/images/about/workflow-0N.webp` |

**Meaning:** The About page's four-phase delivery sequence. Rendered in **P1 mint** to clearly distinguish it from the Home process set (**P7 bone**).

**Base prompt:**
```
A minimalist 3D render of {SUBJECT}. Physically accurate matte bone ceramic and frosted architectural glass, micro dewdrops on surfaces. Pale mint-grey to cool white gradient background, soft overcast light from upper left, gentle contact shadows. Horizontal 3:2 frame, subject centered in middle 60% with generous margins on all four sides. Octane render, shallow depth of field, natural muted tone, fine grain.
```

| # | Step | `{SUBJECT}` |
|---|---|---|
| 01 | **Align** | `three separate precision-machined pale ceramic circular disks floating at subtle angles, rotating into one perfectly flush aligned single plane, the subtle kinetic trajectory still visible` |
| 02 | **Architect** | `an open architectural grid of slender ceramic rods forming a clean three-dimensional lattice, one translucent frosted glass panel seated precisely within a central bay` |
| 03 | **Execute** | `a single sculptural ceramic form being assembled from four curved interlocking sections, three already seated and seamless, the fourth hovering a few millimeters away in perfect alignment` |
| 04 | **Validate** | `a smooth pale ceramic sphere resting at the exact dead center of a slender, perfectly balanced horizontal stone bar, the bar remaining level with a delicate fringe of moss underneath` |

**Negative (all four)** — `office, desk, computer, screens, blueprints, rulers, tape measure, hammer, wrench, gears, checkmarks, magnifying glass, robot, neon glow, dark background, saturated primary colors, HDR`

---

## 2.4 ✅ Markets Section — 5 Regional Images

> *"Built in Ahmedabad, shipping to six markets"*

| | |
|---|---|
| Component | [markets-section.tsx:31](src/components/pages/about/markets-section.tsx#L31) |
| CSS | `.team-v1-image-wrap` — ~449 × 450 css px |
| **Generate** | **900 × 900** (@2x) · 1:1 · **crop anchor 25% from top** (`object-position: 50% 25%`) |
| Lane / palette | **Lane D / E** — Architectural Landscapes & Distinct Regional Light |
| Save to | `public/images/about/market-<slug>.webp` |

**Meaning:** Real geographical presence without tourist cliches or generic corporate office parks. Each market receives its own distinct architectural atmosphere and natural lighting.

**Base prompt:**
```
Architectural landscape photograph of {SUBJECT}. Clean minimalist framing, completely free of signage, billboards, or readable text. {LIGHT}. Square frame, architecture occupying upper 60%, foreground clean and quiet. 50mm lens at f/8, editorial architectural photography, natural muted tones, fine grain, authentic and atmospheric.
```

| Market | `{SUBJECT}` | `{LIGHT}` |
|---|---|---|
| **India** | `a layered cityscape of terracotta-rendered residential terraces and modern geometric concrete facades under open sky` | `hard late-afternoon golden sun from the left, deep azure sky, warm ochre and sand tones` |
| **Europe** | `a serene street of minimalist modern European cultural buildings constructed of pale limestone and matte zinc, low uniform rooflines` | `soft overcast silver light, cool grey-green sky, muted and refined` |
| **Asia Pacific** | `a dramatic cluster of sculptural glass and concrete towers rising against an open sky, clean green sky-gardens along the balconies` | `bright tropical daylight with soft atmospheric haze, pale silver-blue sky` |
| **Americas** | `a low, wide modernist architectural pavilion of concrete, glass, and dark steel set behind open native grasses and clean landscape lines` | `crisp morning sun from the right, deep saturated blue sky, long clean geometric shadows` |
| **Gulf Region** | `a modern sand-toned monolithic tower featuring deep geometric Islamic-inspired mashrabiya shading screens across its clean facade` | `high golden hour sun, warm desert cream palette, pale atmospheric sky` |

**Negative (all five)** — `office cubicles, desks, people working on computers, tourist landmarks, Eiffel Tower, Burj Khalifa, Statue of Liberty, flags, maps, traffic jams, billboards, neon signs, night city, HDR, oversaturated`

---

## 2.5 ✅ Beliefs Section — 5 Principle Images

> *"Principles that guide our work"*

| | |
|---|---|
| Component | [beliefs-section.tsx:64](src/components/pages/about/beliefs-section.tsx#L64) |
| CSS | `.beliefs-image-wrap` — 360 × 360 css px, carousel |
| **Generate** | **720 × 720** (@2x) · 1:1 · centre crop |
| Lane / palette | **Lane A / D** · all five in **P2 (sand)** (Hypen Beliefs style) |
| Save to | `public/images/about/belief-0N.webp` |

**Meaning:** Five abstract beliefs expressed through **poetic physical equilibrium** (directly echoing Hypen's iconic balanced rock on cans `Beliefs 01` and moss on architectural glass `Beliefs 02`).

**Base prompt:**
```
A minimalist 3D conceptual render of {SUBJECT}. Physically based matte bone ceramic, frosted architectural glass, brushed titanium, live emerald moss. Warm sand to pale terracotta gradient background, low golden light raking across surfaces from the right, warm soft shadows. Square frame (1:1), subject centered occupying middle 60% of frame. Octane render, shallow depth of field, fine film grain, meditative and sculptural.
```

| # | Belief | `{SUBJECT}` |
|---|---|---|
| 01 | **Shipping fast is a discipline** | `a tall, slender matte ceramic needle standing perfectly balanced on a minute polished titanium sphere, demonstrating impossible physical equilibrium without support` |
| 02 | **We run what we build** | `three identical minimalist ceramic cylinders in a tight row, with a large, naturally weathered granite rock balanced delicately across the top (directly referencing Hypen Beliefs 01)` |
| 03 | **Communication is part of the deliverable** | `two distinct solid ceramic monoliths on opposite sides of the frame, connected seamlessly by a single continuous crystal-clear frosted glass span` |
| 04 | **AI is a tool, not the pitch** | `a single beautifully crafted, unbranded brushed-steel manual compass tool resting quietly on a raw, unadorned pale limestone block` |
| 05 | **Every project gets the care of our own** | `two ceramic vessels of radically different scales side by side, both finished with the exact same flawless hand-polished satin sheen and lit identically` |

**Negative (all five)** — `office, desk, computer, screens, lightbulb, handshake, hearts, speech bubbles, trophies, rocket, gears, robot, neon glow, dark background, oversaturated, HDR`

---

## 2.6 ♻️ Role Section — 6 Service Thumbnails

`role-section.tsx:50` · `.role-v1-image-wrap` 114 × 90 css px → **228 × 180** (@2x).
Crop directly from the six **§1.7 Service Masters** (crop left third).

---

## 2.7 ⛔ Brand Section

`brand-section.tsx` · Client names as type. Requires **authentic client vector logos.**

---

# Part 3 — Services Index (`/services`)

## 3.1 ✅ Services Hero

| | |
|---|---|
| Component | [services-hero.tsx:36](src/components/pages/services/services-hero.tsx#L36) |
| CSS | `.services-v2-image-wrap` — ~909 × 530 css px |
| **Generate** | **1818 × 1060** (@2x) · 1.72:1 · centre crop |
| Lane / palette | **Lane A** · **P4** sage |
| Save to | `public/images/services/hero.webp` |

**Meaning:** The entire studio capability in one unified architectural still life.

```
A minimalist 3D render of six distinct sculptural objects in matte bone ceramic and frosted architectural glass — a sphere, an open lattice, a fluid ribbon, a stacked tower, a graduated column, and a curved shell — arranged in one harmonious level row across a shallow pale limestone plinth. Each form is lit with identical soft daylight from the upper left. A delicate fringe of live emerald moss runs along the base of the plinth. Pale sage-grey to bone gradient background. Wide horizontal composition (1.72:1), objects occupying the central horizontal band with generous negative space above and below. Octane render, ray-traced subsurface scattering, shallow depth of field, fine grain.
```

**Negative** — `office, desk, screens, devices, robot, circuit board, glowing lines, neon, cyber, dark background, chess pieces, trophies, oversaturated, HDR`

---

## 3.2 ♻️ Services List — 6 Cards

`services-list.tsx:49` · `.services-v3-image-wrap` 458 × 305 css px → **916 × 610** (@2x).
Re-cropped directly from the **§1.7 Service Masters**.

---

# Part 4 — Service Detail Pages (× 6)

Pages: `ai-agents`, `vibe-coding`, `flutter`, `gps`, `saas`, `digital-marketing`.

## 4.1 ✅ Detail Hero — 6 Wide Panorama Images

| | |
|---|---|
| Component | [detail-hero.tsx:31](src/components/pages/services/detail-hero.tsx#L31) |
| CSS | `.services-image-wrap` — 1380 × 690 css px |
| **Generate** | **1920 × 960** · 2:1 panorama · centre crop |
| Lane / palette | **Lane A** · Palette matches §1.7 per service |
| Save to | `public/images/services/<slug>-hero.webp` |

**Meaning:** A wider, more expansive architectural staging of each service's conceptual subject on a vast stone plain.

**Base prompt:**
```
A wide panoramic 3D render of {SUBJECT}, staged upon an expansive, shallow pale limestone plane that stretches across the entire frame. A delicate line of live emerald moss traces the far horizon. {PALETTE}, low raking sun casting long, soft diagonal shadows across the stone floor. Ultra-wide 2:1 panoramic letterbox framing, subject centered in the middle third, expansive calm negative space to left and right. Octane render, physically based materials, shallow depth of field, natural muted color, fine grain.
```
*(Insert corresponding `{SUBJECT}` and `{PALETTE}` from §1.7 table)*

---

## 4.2 ♻️ Detail Overview — Square Master Crop

`detail-overview.tsx:17` · `.services-v4-image-wrap` 558 × 558 → **1116 × 1116** (@2x).
Square center-crop of the **§1.7 Service Master**.

---

## 4.3 ✅ Detail Deliverables — 6 Macro Close-Crops

| | |
|---|---|
| Component | [detail-deliverables.tsx:34](src/components/pages/services/detail-deliverables.tsx#L34) |
| CSS | `.services-v5-image-wrap` — ~645 × 580 css px |
| **Generate** | **1290 × 1160** · ~9:8 · centre crop |
| Lane / palette | **Lane C** — Moody Macro Close-Crop · **P5** deep olive-taupe |
| Save to | `public/images/services/<slug>-deliverables.webp` |

**Meaning:** Replaces high-level conceptual renders with **intimate macro materiality**. Quiet, tactile luxury that grounds the deliverables list.

```
Extreme macro close-crop photograph of {SUBJECT}, filling the frame diagonally. Warm, low raking light grazing across the surface from the upper left, highlighting micro surface textures, while the lower right dissolves into deep, velvety olive-taupe shadows. 100mm macro lens at f/2.8, razor-thin depth of field, organic textures, fine film grain, quiet and luxurious. No screens, no UI, no office clutter.
```

| Slug | `{SUBJECT}` |
|---|---|
| `ai-agents` | `the precision joint where two matte machined ceramic components meet, with a microscopic hairline of living emerald moss growing in the seam` |
| `vibe-coding` | `the exact transition line where rough, fractured pale limestone transitions seamlessly into mirror-polished bone ceramic` |
| `flutter` | `the bifurcation point of a single slender ceramic ribbon splitting cleanly into two identical mirrored curves` |
| `gps` | `a continuous brushed titanium ribbon curving over a pale ceramic ridge, the metal catching one crisp specular highlight` |
| `saas` | `the polished stacked edges of twenty ultra-thin frosted architectural glass sheets, soft diffuse light passing through the layered strata` |
| `digital-marketing` | `the leading crest of a translucent ripple wave passing over a matte ceramic surface in raking light` |

**Negative (all six)** — `office, desk, computer, screens, keyboard, UI, code, robot, circuit board, glowing lines, neon, bright high-key white backdrop, oversaturated, HDR`

---

# Part 5 — Blog Cover System (29 Posts)

Each post uses **Lane A (Surreal Minimalist 3D)** with rotating palettes (**P1 → P2 → P3 → P4**) to ensure adjacent posts in the blog grid never look identical.

Master generation size: **1920 × 1080** (16:9). All crops (Blog index card 1.57:1, Post hero 1.97:1, Home latest-3 2.09:1) originate from this single master.

**Base prompt:**
```
A minimalist 3D conceptual render of {SUBJECT}. Physically based materials: matte bone ceramic, frosted architectural glass, brushed titanium, live emerald moss. {PALETTE}, soft diffuse daylight, gentle contact shadows. Wide 16:9 horizontal frame, primary subject centered in the middle third, generous calm negative space to left and right, clear margins top and bottom. Octane render, subsurface scattering, shallow depth of field, natural muted tones, fine film grain.
```

**Negative (all 29 posts):** `office, desk, computer, keyboard, screens, laptop, terminal, code, error dialogs, bug icons, robot, brain, circuit board, chips, glowing cyber lines, neon blue glow, sci-fi matrix, dark hacker room, oversaturated, HDR`

### The 29 Blog Post Prompts

| # | Slug | `{SUBJECT}` | Pal |
|---|---|---|---|
| 1 | `fix-lovable-app-not-working` | `a smooth pale ceramic monolith with a single clean fracture across its body, the two halves being magnetically drawn back into perfect alignment with the seam nearly invisible` | P1 |
| 2 | `bolt-app-not-working-fix` | `ten slender pale ceramic pins standing in an orderly row, three tipped slightly off-axis, a slender brushed-titanium rod gently realigning them` | P2 |
| 3 | `ai-vibe-coding-bugs-fixes` | `a pale ceramic lattice grid of twelve cells, two cells holding slightly tilted frosted-glass inserts while the remaining ten sit flush and seamless` | P3 |
| 4 | `supabase-lovable-not-connecting` | `two sculptural ceramic forms facing each other across a small gap, connected by a frosted glass bridge with only one final millimeter left to seat` | P4 |
| 5 | `take-lovable-app-to-production` | `a raw, unpolished stone block on a low limestone plinth resting beside its finished, hand-polished ceramic twin on a taller plinth` | P1 |
| 6 | `fix-auth-ai-built-app` | `a precision-machined brushed-titanium geometric key form seated snugly inside an exact matching recess in a solid ceramic block` | P2 |
| 7 | `when-hire-developer-fix-ai-app` | `a delicate ceramic sculpture held securely in an adjustable minimal stone clamp, two fine titanium calibration tools resting beside it` | P3 |
| 8 | `stripe-payments-ai-app` | `a smooth ceramic channel guiding a single continuous ribbon of polished architectural glass smoothly from one terminus to the other` | P4 |
| 9 | `emergent-app-not-working` | `a pale ceramic block on a stone plinth with one corner cleanly cut away in cross-section to reveal an intricate frosted glass internal chamber` | P1 |
| 10 | `ai-app-performance-fixes` | `a slender ceramic ribbon untwisting from a tight knot into one continuous, high-velocity aerodynamic curve` | P2 |
| 11 | `add-features-lovable-app` | `a completed ceramic monolith with three new modular geometric sections hovering above it in exact registration, ready to lock into place` | P3 |
| 12 | `cursor-ai-code-review-fix` | `a row of pale ceramic tiles on a dark stone bench, one tile lifted and rotated forty-five degrees for inspection by a slender titanium caliper` | P4 |
| 13 | `google-signin-in-flutter` | `a slender ceramic ribbon splitting cleanly into two symmetrical mirrored ribbons, a small polished titanium sphere resting at the apex` | P1 |
| 14 | `chatgpt-vs-gemini-vs-claude-2026` | `three ceramic spheres of identical diameter arranged in a level row, each exhibiting a distinct tactile surface: ultra-matte, satin glazed, and micro-textured` | P2 |
| 15 | `what-is-rag-ai-for-business` | `many small frosted glass fragments converging from the periphery into one solid, perfectly coherent ceramic sphere at the center` | P3 |
| 16 | `how-to-build-mvp-2-weeks` | `fourteen pale ceramic blocks in a tight ascending arc, each block progressively more refined and complete than the last` | P4 |
| 17 | `google-gemma-4-vs-chatgpt` | `two ceramic forms of identical height on a level stone balance bar, one significantly more compact and dense, the balance bar remaining perfectly horizontal` | P1 |
| 18 | `what-is-vibe-coding` | `a smooth ceramic form half-emerged from raw uncut stone, the finished half hand-polished to a clean sheen` | P2 |
| 19 | `top-ai-automation-use-cases-india` | `a modular grid of eight small ceramic kinetic elements, each caught in subtle self-guided rotational motion, fine moss in their seams` | P3 |
| 20 | `how-to-integrate-ai-existing-software` | `a newly milled ceramic module locking flush into a matching opening within an older, patinated stone structure` | P4 |
| 21 | `agentic-ai-vs-chatbots` | `two ceramic mechanisms side by side: one static and sealed, the other open and actively rotating along multiple axes` | P1 |
| 22 | `whatsapp-ai-bot-indian-business` | `a cluster of minimal ceramic architectural forms with delicate concentric rings of light expanding outward from a central spire` | P2 |
| 23 | `flutter-ai-enabled-apps` | `a slender ceramic ribbon dividing into two symmetrical branches, a self-balancing titanium gyroscope nestled at the branch point` | P3 |
| 24 | `ai-transforming-web-development-2025` | `an open ceramic framework actively reconfiguring its geometry, several bays already reformed into a cleaner modular order` | P4 |
| 25 | `flutter-vs-react-native-2025` | `two slender ceramic ribbons running parallel: one bifurcating into two identical mirrored paths, the other into two subtly varied paths` | P1 |
| 26 | `future-software-development-emerging-tech` | `a tranquil landscape of low ceramic dunes with a monumental new geometric form rising cleanly on the horizon under soft mist` | P2 |
| 27 | `why-flutter-2025` | `one slender ceramic ribbon rising vertically from a single point and branching into two perfectly identical mirrored arches` | P3 |
| 28 | `mobile-first-development-2025` | `a tall, slender vertical ceramic monolith positioned with authority in front of a wider horizontal stone base` | P4 |
| 29 | `pwa-essential-2025` | `a monolithic cylinder that is solid limestone at one end and frosted architectural glass at the other, the transition imperceptible` | P1 |

---

# Part 6 — Contact Page

⛔ **No image slots.** [contact/index.tsx](src/components/pages/contact/index.tsx) is purely typography, form controls, and direct contact details.

---

# Part 7 — Country Pages (`usa`, `singapore`)

## 7.1 ✅ Country Hero Panel

| | |
|---|---|
| Component | [country/hero-section.tsx:52](src/components/pages/country/hero-section.tsx#L52) |
| CSS | `.hero-v2-video-wrap` — 1380 × 740 css px |
| **Generate** | **1920 × 1030** · 1.86:1 · centre crop |
| Lane | **Lane E / D** — Sculptural Architectural Landscapes |
| Save to | `public/images/country/<slug>-hero.webp` |

```
Wide panoramic architectural photograph of {SUBJECT}. Minimalist composition, clean skyline, completely free of commercial signage, billboards, or logos. {LIGHT}. Wide 1.85:1 frame, architectural skyline occupying the upper two-thirds, foreground quiet and uncluttered. 35mm lens at f/8, natural muted tones, fine grain, authentic and unstyled.
```

| Slug | `{SUBJECT}` | `{LIGHT}` |
|---|---|---|
| `usa` | `a low, wide modern architectural pavilion of glass, stone, and raw concrete set behind open natural grass landscape and clean horizontal pathways` | `crisp morning sun from the right, deep saturated blue sky, long clean geometric shadows` |
| `singapore` | `a dense cluster of contemporary vertical glass and concrete towers with cascading sky-terraces and tropical greenery, viewed looking up` | `bright daylight with soft tropical humidity haze, pale silver-blue sky` |

**Negative** — `office desks, computer screens, people working indoors, tourist landmarks, Statue of Liberty, Merlion, Marina Bay Sands, flags, maps, traffic jams, billboards, neon, HDR, oversaturated`

---

## 7.2 ✅ Country About Section

| | |
|---|---|
| Component | [country/about-section.tsx:42](src/components/pages/country/about-section.tsx#L42) |
| CSS | `.about-v4-image-wrap` — 500 × 375 css px |
| **Generate** | **1000 × 750** (@2x) · 4:3 · centre crop |
| Lane | **Lane D** — Tactile Precision & Cross-Border Delivery (Hypen Workflow style) |
| Save to | `public/images/country/<slug>-about.webp` |

**Meaning:** Demonstrates precision delivery and seamless international collaboration without generic office stock photos. Inspired by Hypen's `Workflow 02` and `Workflow 03`.

```
Tactile editorial close-up photograph of human hands holding a precision-machined minimal cobalt-blue anodized titanium cardholder with clean chamfered edges, resting against a pale textured concrete architectural balustrade in bright natural daylight. The hands are calm and purposeful. Crisp, natural shadows, authentic skin texture. 50mm lens at f/2.8, shallow depth of field, editorial product quality, natural muted colors, fine grain. No office cubicles, no laptops, no indoor desk clutter.
```

**Negative** — `office, desk, computer, keyboard, cubicle, corporate handshake, meeting room, business suit, tie, text, numbers, letters, blurry hands, extra fingers, cartoon, 3D render look, HDR`

---

## 7.3 ♻️ Country Blog Cards

`country/blog-section.tsx:61` · `.blog-v5-image-wrap` 620 × 512 → **1240 × 1024** (@2x).
Cropped directly from the **§5.1 Blog Master** pool.

---

## 7.4 ⛔ Country Work Section

`country/work-section.tsx:32` · **Skip — project assets.**

---

# Part 8 — Open Graph / Social Previews

Standard social share resolution: **1200 × 630** (1.91:1).

| Page | Source Asset |
|---|---|
| Home | 1200 × 630 crop of §1.1 Skyward Editorial, or §2.1 Dawn Ascent |
| About | 1200 × 630 crop of §2.1 Dawn Ascent Master |
| Services Index | 1200 × 630 crop of §3.1 Services Hero Master |
| Service Detail (× 6) | 1200 × 630 crop of §4.1 Detail Hero Master |
| Blog Post (× 29) | 1200 × 630 crop of §5.1 Blog Master |
| Country Pages (× 2) | 1200 × 630 crop of §7.1 Country Hero Master |

*Zero new generation required — all OG previews are crops of existing masters.*

---

# Part 9 — Master Generation Batches & Counts

| Batch | Description | Master Files |
|---|---|---|
| **1** | Home Hero skyward editorial (§1.1) + Home About tactile craft (§1.4) | 2 |
| **2** | Six Service 3D masters at 1336 × 976 (§1.7) — feeds §2.6, §3.2, §4.2 | 6 |
| **3** | Six Service Detail heroes (§4.1) + six deliverables macro crops (§4.3) | 12 |
| **4** | Home Process sequence × 4 (§1.6) + About Workflow sequence × 4 (§2.3) | 8 |
| **5** | About Hero dawn ascent (§2.1), Ahmedabad Identity (§2.2), Markets × 5 (§2.4), Beliefs × 5 (§2.5) | 12 |
| **6** | Services Index hero (§3.1) | 1 |
| **7** | Blog masters × 29 (§5.1) — feeds Home blog, Blog index, Post heroes, Country blog | 29 |
| **8** | Country Heroes × 2 (§7.1) + Country About tactile craft × 1 (§7.2) | 3 |
| | **Total new master images to generate** | **73** |

---

# Part 10 — Code Implications & Alt Text Strategy

1. **Alt Text Policy Update:**
   - Previous placeholders used misleading captions like `"The Saurabh Infosys delivery team in the office"`.
   - Under the Hypen-inspired art direction, alt text accurately describes the conceptual, tactile, and architectural subjects:
     - *Hero card (§1.1):* `"Creative directors in natural sunlight against open sky"`
     - *About side image (§1.4):* `"Tactile craft — hand placing polished stone in ceramic vessel"`
     - *About hero (§2.1):* `"Hot air balloon soaring over dawn mountain ridges with morning mist"`
     - *About identity (§2.2):* `"Monolithic brutalist modernist architecture in Ahmedabad"`
     - *Country about (§7.2):* `"Hands holding precision machined titanium artifact in natural light"`
2. **`blog-images.ts`:**
   - Replace the modulo pool `POOL[index % 5]` with a dedicated `slug → image` mapping once masters are generated.
3. **Container Elements Awaiting `<img>` tags:**
   - `services-section.tsx:70` (`.services-v8-image-wrap`)
   - `blog-section.tsx:32` (`.blog-v6-image-wrap`)
   - `services-list.tsx:49` (`.services-v3-image-wrap`)
   - `detail-overview.tsx:17` (`.services-v4-image-wrap`)
   - `detail-deliverables.tsx:34` (`.services-v5-image-wrap`)
   - `country/blog-section.tsx:61` (`.blog-v5-image-wrap`)
