# Image Prompts — Saurabh Infosys

Every generatable image slot on the site, page by page, section by section.
Each entry says **which component, which line, what size, what it means.**

**Excluded by decision:** project/portfolio covers and product imagery. Those
need real screenshots and real product shots, not generated art. Every slot
below is marked ✅ **generate** or ⛔ **skip — needs real asset**.

---

# Part 0 — The style

## 0.1 What the current placeholders are

Every file in `public/images/` is high-end agency-portfolio imagery in five
lanes. This is the reference standard:

| Lane | File | Look |
|---|---|---|
| **A** | `work/placeholder-04.webp` | 3D render — glass architectural block with live moss growing from the top, pale mint-grey gradient |
| **A** | `work/placeholder-05.webp` | 3D render — rolling grass hills at golden hour, real clouds nestled *inside* the valleys |
| **B** | `hero/placeholder-card.webp` | Editorial photo — two people from a low angle against deep blue sky, hard sun, one rust-orange garment |
| **C** | `work/placeholder-02.webp` | Extreme close crop of a chair edge, warm raking light, deep olive shadow, near-abstract |
| **D** | `work/placeholder-03.webp` | Real campaign photo — granite rock balanced on three cans, overcast sky |
| **E** | `about/studio-panel.jpg` | Candid documentary frame — people mid-motion in an office corridor, available light, unposed |

**Lane A — surreal premium 3D render.** One impossible-but-calm object.
Physically accurate materials (frosted glass, moss, dew, ceramic, brushed
steel). Desaturated gradient background. Carries all conceptual slots.

**Lane B — low-angle editorial against sky.** Real people, camera below eye
line, sky filling the frame, hard sun, one saturated wardrobe colour.

**Lane C — moody close crop.** One curve or edge filling the frame, warm raking
light, deep falloff. Quiet and expensive. Best where the slot renders small.

**Lane D — honest real-world shot.** Real object, real light, one witty idea.

**Lane E — candid documentary.** Real office, real motion, nobody posing. For
anything about *us*.

## 0.2 Hard rules

1. **No devices on seamless grey.** No phone floating on a backdrop, no laptop
   on a desk, no tablet showing a fake dashboard. That is the stock look these
   placeholders exist to avoid.
2. **Every image earns its slot.** The process step about *measurement* shows
   measurement. No filler.
3. **Colour comes from the image, not the brand.** Chrome is greyscale
   (`#141414` / `#f4f4f4` / `#e1e1e1`). Placeholders bring moss green, sky
   blue, rust orange, warm cream. **Never force `#00a0e3` into every image** —
   it reads as a template. Palettes are assigned per set below.
4. **No text, no logos, no UI, no readable screens.** AI renders text as
   garbage. Screens stay off or out of frame.
5. **No faces to camera.** Lanes B and E use people, always from behind, from
   below, or mid-motion. Never a posed portrait down the lens.

## 0.3 Palettes

Referenced by code in every prompt table.

| Code | Palette |
|---|---|
| **P1** | pale mint-grey to cool white, soft overcast light |
| **P2** | warm sand to pale terracotta, low golden light from the right |
| **P3** | pale sky blue to warm cream, golden hour from the left |
| **P4** | pale sage-grey to bone, soft overcast from upper left |
| **P5** | deep olive-taupe, warm raking light, deep shadow *(Lane C)* |
| **P6** | flat grey-green overcast, no sun *(Lane D)* |
| **P7** | bone-white to soft grey, even diffuse light |

## 0.4 Sizing — where stretching happens

Every container is `object-fit: cover`. Cover **crops**, never stretches —
distortion is not the risk, bad cropping is. Cover crops from centre unless
told otherwise.

**Top-anchored containers** (`object-position: 50% 0%`) — subject must live in
the **top 60%**: hero cards, portfolio cards.
**25%-anchored** (`object-position: 50% 25%`): the markets grid on About.

Cards that **hover-scale to 1.15** need margin on all four edges: work cards,
blog cards, services cards.

Generate at the **@2x** size given. Export WebP quality 82. Fixed-ratio
generator: generate at the nearest ratio, then **centre-crop** to the exact
pixels — never resize one axis alone.

Full-bleed panels are capped at **1920px wide** rather than true @2x — a 2760px
hero is wasted bytes behind a dark scrim.

---

# Part 1 — Home page

## 1.1 ✅ Hero — contact card

> *"Have a serious project?" · "The Saurabh Infosys delivery team" ·
> info@saurabhinfosys.com*

| | |
|---|---|
| Component | [hero-section.tsx:116](src/components/pages/home/hero-section.tsx#L116) |
| CSS | `.hero-cta-image` — 272 × 164 css px |
| **Generate** | **544 × 328** (@2x) · 5:3 · centre crop |
| Lane / palette | **E** — candid documentary |
| Save to | `public/images/hero/contact-card.webp` |

**Meaning:** the only card a visitor can act on above the fold. It answers
*who am I emailing*. Real working people, not a concept.

> ⚠️ Alt text says "The Saurabh Infosys delivery team". A generated photo
> captioned as your real team misrepresents your company. **Shoot this one for
> real** — a phone photo of the Ahmedabad office beats any render on the
> highest-trust image on the site. If generated, faces stay turned away and
> the alt text must become generic ("Working at the Saurabh Infosys office in
> Ahmedabad").

```
Candid documentary photograph inside a bright modern software office. Two
colleagues seen from behind and slightly to the side, standing at a desk,
mid-conversation, one gesturing toward a monitor that faces away from camera.
Faces not visible. Warm available daylight from a large window on the left,
soft ceiling strip lights above. Natural muted colour, faint motion blur on
the gesturing arm, real depth, unposed. Wide horizontal 5:3 frame, the two
figures occupying the left two thirds, the bright window blowing out gently
on the right.
Shot on 35mm at f/2, cinematic video-still quality, natural grain, no
retouching.
```

**Negative** — `posed group photo, people smiling at camera, faces looking at lens, stock photo, handshake, boardroom, suits, text, letters, signage, logos, monitors showing readable UI, watermark, HDR, oversaturated, teal-and-orange grade, plastic skin`

---

## 1.2 ⛔ Hero — "New launch" card (MySampark)

`hero-section.tsx:153` · 670 × 660 · **Skip — product asset.** Needs a real
MySampark product shot.

## 1.3 ⛔ Hero — newest project card

`hero-section.tsx:159` · 1116 × 660 · **Skip — project asset.**

---

## 1.4 ✅ About section — side image

> *"An AI-first software studio built for speed and scale"*

| | |
|---|---|
| Component | [about-section.tsx:51](src/components/pages/home/about-section.tsx#L51) |
| CSS | `.about-v5-image-wrap` — 214 × 214 css px |
| **Generate** | **428 × 428** (@2x) · 1:1 · centre crop |
| Lane / palette | **E** — candid documentary |
| Save to | `public/images/about/studio.webp` |

**Meaning:** sits top-right of the about copy. Renders at only 214px, so it
must read as **one clear shape** — tight crop, one or two figures max. A wide
office shot turns to mush at this size. Same real-photo recommendation as 1.1.

```
Candid documentary photograph, tight square crop, of one person seen from
behind at a desk in a bright modern office, shoulders and the back of the head
filling the left half of the frame, softly out of focus in the foreground. A
second colleague further back, mid-motion, blurred. Warm available daylight
from a window, cool grey wall. Natural muted colour, unposed, real grain.
Square frame, subject filling it generously, no distant background detail.
Shot on 50mm at f/1.8, cinematic video-still quality, no retouching.
```

**Negative** — `posed portrait, face to camera, smiling at lens, stock photo, wide office shot, cubicles, boardroom, text, signage, logos, readable screens, watermark, HDR, oversaturated, plastic skin`

---

## 1.5 ⛔ Work section — 4 project covers

`work-section.tsx:55` · 1580 × 1056 each · **Skip — project assets.**

---

## 1.6 ✅ Process section — 4 step images

> *"A delivery model designed for momentum"*

| | |
|---|---|
| Component | [process-section.tsx:75](src/components/pages/home/process-section.tsx#L75) |
| CSS | `.process-image-wrap` — ~297 × 334 css px (50% of the open tab) |
| **Generate** | **594 × 668** (@2x) · 8:9 portrait · centre crop |
| Lane / palette | **A** · all four in **P7 (bone)** |
| Save to | `public/images/process/step-0N.webp` |

**Meaning:** seen one at a time, but they must read as a sequence —
**one target → structure → repetition → measurement.** Same engine, same
light, same palette across all four; **only the subject changes.** That is
what makes them a set instead of four unrelated pictures.

**Base prompt** — replace `{SUBJECT}` from the table:

```
A 3D render of {SUBJECT}. Fine dew on the surfaces. Bone-white to soft grey
gradient background, soft overcast key light from the upper left, one gentle
shadow to the lower right. Vertical portrait frame, the subject centred and
occupying the middle 60%, clear empty space above and below.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain, calm and precise.
```

| # | Step | `{SUBJECT}` |
|---|---|---|
| 01 | **Scope and success metrics** — *"the number that has to move, the constraints, and the date"* | `a single smooth ceramic sphere resting in the exact centre of a shallow circular dish carved from pale stone, the dish's concentric rings drawing the eye inward to it, everything else empty` |
| 02 | **Architecture and data model** — *"how the data is shaped and where it connects"* | `a lattice of slender pale ceramic rods joined into one clean open three-dimensional framework, perfectly square and level, a few frosted glass panels resting inside the cells` |
| 03 | **Build, one week at a time** — *"working software every week on a staging link"* | `a row of seven identical pale ceramic blocks in a gentle arc, each one slightly taller and more finished than the last, the final block smooth and complete with soft moss along its base` |
| 04 | **Launch, measure, refine** — *"add the tracking, watch the number we agreed on"* | `a single tall pale ceramic column with fine horizontal ridges climbing its length like a measuring scale, one thin band of soft green moss marking a level partway up` |

**Negative (all four)** — `text, letters, numbers, charts, graphs, target, bullseye, arrow, crosshair, calendar, clock, checklist, sticky notes, pen, desk, screens, devices, robot, gears, cogs, neon, glowing, sci-fi, dark background, saturated colour, HDR`

---

## 1.7 ✅ Services section — 6 service images

| | |
|---|---|
| Component | [services-section.tsx:70](src/components/pages/home/services-section.tsx#L70) |
| CSS | `.services-v8-image-wrap` — 334 × 244 css px |
| **Generate** | **668 × 488** (@2x) · 11:8 · centre crop · hover-scales 1.15 |
| Lane | **A** · palette varies per service (below) |
| Save to | `public/images/services/<slug>.webp` |

> ⚠️ This slot is a CSS `linear-gradient` div today, not an `<img>`. Needs a
> markup change as well as the assets. **These six files are reused** by the
> services index list (§3.2), the service detail overview (§4.2) and the About
> role list (§2.6) — generate once, crop per slot.

**Base prompt** — replace `{SUBJECT}` and `{PALETTE}`:

```
A 3D render of {SUBJECT}. Physically accurate materials — matte ceramic,
frosted glass, brushed steel, fine moss where noted. {PALETTE}, soft shadows.
Horizontal frame, the subject slightly left of centre, generous empty space to
the right, clear margin on all four edges.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain.
```

| Slug | Service | `{SUBJECT}` | Palette |
|---|---|---|---|
| `ai-agents` | **AI Automation Services** — *agentic AI, LLM, WhatsApp bots, RAG, voice agents* | `a pale ceramic mechanism of interlocking smooth curved forms caught mid-motion, one section lifted and turning by itself while the rest stays still, fine moss growing in the seams where the parts meet, no visible motor and no wires` | **P4** sage |
| `vibe-coding` | **Vibe Coding / AI-Enabled Apps** — *production MVPs in 2 weeks* | `a single smooth ceramic form half-emerged from a block of rough uncut pale stone, the finished half polished and precise, the transition between rough and smooth crisp and clean` | **P2** sand |
| `flutter` | **Flutter Mobile Apps** — *one codebase, iOS and Android* | `one slender pale ceramic ribbon rising from a single point and splitting cleanly into two identical mirrored ribbons that curve away symmetrically, frosted glass at the split` | **P1** mint |
| `gps` | **GPS & Fleet Management** — *real-time tracking, route optimisation* | `a miniature landscape of pale ceramic hills with a single continuous polished brushed-steel ribbon threading through the valleys as an optimal path, tiny moss patches on the slopes` | **P3** sky |
| `saas` | **SaaS Platform Development** — *multi-tenancy, billing, admin* | `a stack of identical frosted glass floors forming one clean tower, each floor slightly offset in rotation, soft light passing all the way through from top to bottom` | **P7** bone |
| `digital-marketing` | **Digital Marketing Tools** — *bulk WhatsApp, SMS, email* | `a cluster of pale ceramic apartment towers and low rooftops seen from a slightly elevated angle, thin concentric rings of translucent light rippling outward across them from one taller tower` | **P3** sky |

**Negative (all six)** — `text, letters, icons, symbols, gears, cogs, clockwork, robot, android, humanoid face, brain, circuit board, chip, glowing lines, network nodes, holograms, neon, blue glow, sci-fi, dark background, phones, tablets, screens, UI, dashboards, maps with labels, oversaturated, HDR`

---

## 1.8 ✅ Blog section — 3 latest covers

`blog-section.tsx:32` · `.blog-v6-image-wrap` ~417 × 200 css
→ **834 × 400** (@2x) · 2.09:1 · hover-scales 1.15.

Currently a gradient div. Pulls the three newest posts, so these are **the same
files as §5.1** — no separate assets. Wide letterbox: anything tall is
destroyed here, use the horizontal crop of the post cover.

## 1.9 ⛔ Clients strip · Testimonial avatars

`clients-section.tsx:43` renders client names as type; `testimonial-v1-avatar`
is a 102 × 102 initials block. Both need **real client logos and real
headshots** — not generatable.

---

# Part 2 — About page

## 2.1 ✅ Hero panel (showreel stand-in)

| | |
|---|---|
| Component | [about-hero.tsx:62](src/components/pages/about/about-hero.tsx#L62) |
| CSS | `.about-v1-video-wrap` — 1380 × 740 css px, dark scrim + copy over it |
| **Generate** | **1920 × 1030** · 1.86:1 · centre crop |
| Lane / palette | **E** — candid documentary |
| Save to | `public/images/about/hero-panel.webp` |

**Meaning:** the biggest image on the site, carrying the positioning line and
social row over a scrim. **The bottom third is covered by the scrim and text** —
put nothing important there. Currently uses `studio-panel.webp`.

Real footage is strongly preferred here. Same caveat as §1.1.

```
Wide candid documentary photograph of a modern open-plan software office in
motion. Several colleagues at desks across the depth of the frame, one walking
through the middle ground carrying a laptop, another leaning over a desk
mid-conversation. All seen from behind or in profile, no faces toward camera.
Large windows on the left throwing warm daylight across the room, cool grey
concrete and pale wood surfaces. Natural muted colour, faint motion blur on
the walking figure, real depth, unposed. Wide 1.85:1 frame, activity
concentrated in the upper two thirds, the lower third quiet and uncluttered.
Shot on 28mm at f/2.8, cinematic video-still quality, natural grain.
```

**Negative** — `posed group photo, faces to camera, smiling at lens, stock photo, handshake, boardroom, suits, empty office, text, signage, logos, readable screens, watermark, HDR, oversaturated, teal-and-orange grade`

---

## 2.2 ✅ Identity section

> *"Who we are" — an Ahmedabad-based software and AI studio*

| | |
|---|---|
| Component | [identity-section.tsx:34](src/components/pages/about/identity-section.tsx#L34) |
| CSS | `.identity-image-wrap` — 690 × 518 css px |
| **Generate** | **1380 × 1036** (@2x) · 4:3 · centre crop |
| Lane / palette | **B** — low-angle editorial |
| Save to | `public/images/about/identity.webp` |

**Meaning:** *"built from India without compromising on quality"*. This is the
place for a real sense of Ahmedabad — a location image, not a render. Breaks
the render run and grounds the studio somewhere real.

```
Low-angle architectural photograph of a clean modern office building exterior
in a warm Indian city, shot from street level looking up so a deep blue
cloudless sky fills the upper half of the frame. Pale concrete and glass
facade catching hard late-afternoon sun from the right, crisp shadow lines
across the surface. One slim tree in the lower left corner. Horizontal 4:3
frame, the building edge running diagonally from lower left to upper right,
wide open sky filling the rest.
Shot on 24mm at f/8, editorial architectural photography, natural colour,
fine grain, confident and clean.
```

**Negative** — `text, letters, signage, logos, billboards, hoardings, traffic, crowds, people close to camera, wires, clutter, slum, poverty imagery, overcast, sunset, HDR, oversaturated, tilt-shift, fisheye`

---

## 2.3 ✅ Workflow section — 4 step images

> *"Workflow" — Align · Architect · Execute · Validate*

| | |
|---|---|
| Component | [workflow-section.tsx:58](src/components/pages/about/workflow-section.tsx#L58) |
| CSS | `.workflow-image-wrap img` — 414 × 276 css px, reveals on accordion open |
| **Generate** | **828 × 552** (@2x) · 3:2 · centre crop |
| Lane / palette | **A** · all four in **P1 (mint)** |
| Save to | `public/images/about/workflow-0N.webp` |

**Meaning:** the About page's own four-beat sequence. Deliberately **P1 mint**,
where the home process set is **P7 bone** — same lane, different palette, so
the two sequences don't look like duplicates of each other.

**Base prompt:**

```
A 3D render of {SUBJECT}. Physically accurate matte ceramic and frosted glass,
fine dew on the surfaces. Pale mint-grey to cool white gradient background,
soft overcast key light from the upper left, gentle contact shadows.
Horizontal 3:2 frame, the subject centred and occupying the middle 60%, clear
margin on all four sides.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain.
```

| # | Step | `{SUBJECT}` |
|---|---|---|
| 01 | **Align** — goals, scope, constraints | `three separate pale ceramic plates floating at different angles, rotating into one perfectly flush aligned plane, the last few degrees of the movement still visible` |
| 02 | **Architect** — research-led product structure | `an open framework of slender ceramic rods forming one clean level three-dimensional grid, a single frosted glass panel slotted precisely into one cell` |
| 03 | **Execute** — focused build and systems | `a single smooth ceramic form being assembled from four interlocking curved sections, three already seated and flush, the fourth hovering a few centimetres away in perfect alignment` |
| 04 | **Validate** — test, refine, optimise | `a pale ceramic sphere resting in the centre of a precisely balanced level bar, the bar perfectly horizontal, fine moss along its underside` |

**Negative (all four)** — `text, letters, numbers, blueprints, rulers, tape measure, gears, cogs, tools, hammer, screwdriver, checkmarks, magnifying glass, robot, screens, devices, neon, glowing, sci-fi, dark background, saturated colour, HDR`

---

## 2.4 ✅ Markets section — 5 market images

> *"Built in Ahmedabad, shipping to six markets"*

| | |
|---|---|
| Component | [markets-section.tsx:31](src/components/pages/about/markets-section.tsx#L31) |
| CSS | `.team-v1-image-wrap` — ~449 × 450 css px, 3-up grid |
| **Generate** | **900 × 900** (@2x) · 1:1 · **crop anchor 25% from top** (`object-position: 50% 25%`) — keep the subject in the upper half |
| Lane / palette | **D** — honest real-world, each its own light |
| Save to | `public/images/about/market-<slug>.webp` |

**Meaning:** five real places, not five renders. This is the one set on the
site where **geography is the subject**, so it uses real-world photography and
each frame gets its own weather and palette. Skylines and light, no landmarks
turned into postcards, no flags, no maps.

**Base prompt:**

```
Architectural photograph of {SUBJECT}. Clean composition, no signage and no
readable text anywhere. {LIGHT}. Square frame, the skyline and buildings
occupying the upper half, foreground quiet and uncluttered.
Shot on 50mm at f/8, editorial architectural photography, natural muted
colour, fine grain, honest and unstyled.
```

| Market | `{SUBJECT}` | `{LIGHT}` |
|---|---|---|
| **India** — *SMBs, startups, schools, housing societies* | `a mid-rise residential and commercial skyline in a warm Indian city, pale rendered concrete facades and flat rooftops layered into the distance` | `hard late-afternoon sun from the left, deep blue sky, warm ochre tones` |
| **Europe** — *UK, Germany, Belgium, Croatia* | `a row of restrained modern European office buildings in pale stone and glass along a quiet street, low uniform heights` | `flat overcast light, cool grey-green sky, muted and even` |
| **Asia Pacific** — *Singapore, Malaysia, Hong Kong* | `a dense cluster of tall glass towers rising close together, seen from below, layered depth between the facades` | `bright hazy daylight, pale silver-blue sky, soft humidity in the air` |
| **Americas** — *US startups and scale-ups* | `a low modern glass and steel campus building set behind open ground, wide horizontal lines` | `crisp clear morning sun from the right, deep saturated blue sky, long clean shadows` |
| **Gulf Region** — *UAE, Saudi Arabia, GCC* | `a pale sand-coloured modern tower with deep geometric shading screens across its facade, clean desert-modern architecture` | `high golden hour sun, warm sand and cream palette, pale hazy sky` |

**Negative (all five)** — `text, letters, signage, billboards, logos, flags, maps, country outlines, landmarks, tourist landmarks, Eiffel Tower, Burj Khalifa, Statue of Liberty, Merlion, crowds, people, cars, traffic, night, neon, sunset postcard, HDR, oversaturated, tilt-shift`

---

## 2.5 ✅ Beliefs section — 5 principle images

> *"Principles that guide our work"*

| | |
|---|---|
| Component | [beliefs-section.tsx:64](src/components/pages/about/beliefs-section.tsx#L64) |
| CSS | `.beliefs-image-wrap` — 360 × 360 css px, carousel, inactive slides scale to 0.6 |
| **Generate** | **720 × 720** (@2x) · 1:1 · centre crop |
| Lane / palette | **A** · all five in **P2 (sand)** |
| Save to | `public/images/about/belief-0N.webp` |

**Meaning:** five abstract principles. Slides sit side by side in a track and
neighbours bleed into frame at 60% scale, so **all five must share one palette**
or the carousel looks broken. P2 sand keeps them distinct from the mint
workflow set above.

**Base prompt:**

```
A 3D render of {SUBJECT}. Physically accurate matte ceramic, frosted glass and
fine moss. Warm sand to pale terracotta gradient background, low golden light
raking from the right, soft shadows. Square frame, the subject centred and
occupying the middle 60%, clear empty space around it.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain.
```

| # | Belief | `{SUBJECT}` |
|---|---|---|
| 01 | **Shipping fast is a discipline, not a shortcut** | `a tall slender ceramic form standing perfectly upright and stable on one very small precise base, unmistakably balanced rather than propped` |
| 02 | **We run what we build** | `three identical smooth ceramic vessels standing in a close row, each one worn smooth and slightly weathered from long use, fine moss in the wear marks` |
| 03 | **Communication is part of the deliverable** | `two ceramic forms on either side of the frame joined by one continuous unbroken frosted glass bridge running clean between them` |
| 04 | **AI is a tool, not the pitch** | `a single well-used brushed steel hand tool resting quietly on a plain ceramic block, understated, no decoration` |
| 05 | **Every project gets the care we would give our own** | `two ceramic objects of very different sizes side by side, both finished to the exact same flawless polish and lit identically` |

**Negative (all five)** — `text, letters, numbers, icons, symbols, lightbulb, handshake, heart, speech bubbles, trophy, rocket, robot, brain, gears, screens, devices, neon, glowing, sci-fi, dark background, oversaturated, HDR`

---

## 2.6 ♻️ Role section — 6 service thumbnails

| | |
|---|---|
| Component | [role-section.tsx:50](src/components/pages/about/role-section.tsx#L50) |
| CSS | `.role-v1-image-wrap` — 114 × 90 css px |
| **Generate** | **nothing new** — centre-crop the six §1.7 service images to **228 × 180** (@2x, 1.27:1) |
| Save to | `public/images/services/<slug>-thumb.webp` |

At 114 × 90 no detail survives. Reuse. Because §1.7 puts every subject
**slightly left of centre**, crop from the left third, not dead centre.

## 2.7 ⛔ Brand section

`brand-section.tsx` — client names as type. Needs **real client logos.**

---

# Part 3 — Services index (`/services`)

## 3.1 ✅ Services hero

| | |
|---|---|
| Component | [services-hero.tsx:36](src/components/pages/services/services-hero.tsx#L36) |
| CSS | `.services-v2-image-wrap` — ~909 × 530 css px (2fr of a 2fr/1fr grid) |
| **Generate** | **1818 × 1060** (@2x) · 1.72:1 · centre crop |
| Lane / palette | **A** · **P4** sage |
| Save to | `public/images/services/hero.webp` |

**Meaning:** the whole service range in one frame — many capabilities, one
studio. Sits beside a snow-white CTA card, so keep the right edge quiet.

```
A 3D render of six distinct pale ceramic and frosted-glass forms of different
shapes — a sphere, a lattice, a ribbon, a stack, a column, a curved shell —
arranged in one loose level row across a shallow pale stone shelf, each lit
identically, fine moss along the base of the shelf. Pale sage-grey to bone
gradient background, soft overcast light from the upper left, gentle shadows
beneath each form. Wide horizontal frame, the row occupying the middle band,
generous empty space above and below, clear margin at both ends.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain.
```

**Negative** — `text, letters, icons, symbols, gears, robot, brain, circuit board, glowing lines, neon, sci-fi, dark background, phones, tablets, screens, UI, dashboards, chess pieces, trophies, oversaturated, HDR`

---

## 3.2 ♻️ Services list — 6 cards

| | |
|---|---|
| Component | [services-list.tsx:49](src/components/pages/services/services-list.tsx#L49) |
| CSS | `.services-v3-image-wrap` — 458 × 305 css px (currently a gradient div) |
| **Generate** | **nothing new** — re-crop the six §1.7 images to **916 × 610** (@2x, 1.5:1) |

Same six services, same six files. Generate §1.7 at **1336 × 976** instead of
668 × 488 and every downstream crop (this, §2.6, §4.2) comes out of one master.

---

# Part 4 — Service detail pages (× 6)

Six pages: `ai-agents`, `vibe-coding`, `flutter`, `gps`, `saas`,
`digital-marketing`.

## 4.1 ✅ Detail hero — 6 wide images

| | |
|---|---|
| Component | [detail-hero.tsx:31](src/components/pages/services/detail-hero.tsx#L31) |
| CSS | `.services-image-wrap` — 1380 × 690 css px, full container |
| **Generate** | **1920 × 960** · 2:1 · centre crop |
| Lane / palette | **A** · palette per service, matching §1.7 |
| Save to | `public/images/services/<slug>-hero.webp` |

**Meaning:** the same idea as that service's card, **staged wider** — not a
crop of the card, a second shot of the same subject with room around it. A
2:1 letterbox is very wide; a subject that filled the card frame will look
lost, so the environment carries it.

**Base prompt:**

```
A wide 3D render of {SUBJECT}, set on a shallow pale stone plane that runs the
full width of the frame, fine moss along the far edge. {PALETTE}, long soft
shadows stretching across the plane. Very wide 2:1 letterbox frame, the
subject centred and occupying the middle third, wide open empty plane to left
and right.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain.
```

Use the same `{SUBJECT}` and `{PALETTE}` per service as the §1.7 table.
Same negative list as §1.7.

## 4.2 ♻️ Detail overview — square

`detail-overview.tsx:17` · `.services-v4-image-wrap` 558 × 558 →
**1116 × 1116** (@2x) · 1:1. Currently a gradient div. **Square centre-crop of
the §1.7 master** — no new generation.

## 4.3 ✅ Detail deliverables — 6 panel images

| | |
|---|---|
| Component | [detail-deliverables.tsx:34](src/components/pages/services/detail-deliverables.tsx#L34) |
| CSS | `.services-v5-image-wrap` — ~645 css px wide, height stretches to the copy column (~580) |
| **Generate** | **1290 × 1160** · ~9:8 · centre crop |
| Lane / palette | **C** — moody close crop · **P5** olive |
| Save to | `public/images/services/<slug>-deliverables.webp` |

**Meaning:** *"What's included in this service"* — a detail list. Lane C here
is deliberate: after a wide render hero and a square render overview, a third
render on the same page would be one too many. A close, quiet, tactile crop
resets the eye. **Height is not fixed** — it stretches to match the list beside
it, so keep the subject well inside the middle and let cover crop top and
bottom freely.

```
Extreme close crop of {SUBJECT}, filling the frame diagonally. Warm raking
light from the upper left grazing across the surface, deep soft shadow falling
into the lower right, background dissolving to dark olive-taupe. Subject
running through the centre of the frame with generous falloff above and below.
Macro photography, 100mm lens at f/2.8, extremely shallow depth of field,
natural muted colour, fine grain, quiet and expensive.
```

| Slug | `{SUBJECT}` |
|---|---|
| `ai-agents` | `the seam where two smooth machined ceramic parts meet, a hairline of fine moss growing along the join` |
| `vibe-coding` | `the exact edge where rough uncut pale stone becomes flawlessly polished ceramic` |
| `flutter` | `the split point of a single slender ceramic ribbon dividing into two mirrored halves` |
| `gps` | `a polished brushed-steel ribbon curving over a pale ceramic ridge, the metal catching one bright specular line` |
| `saas` | `the stacked edges of many thin frosted glass sheets, light passing through the whole stack` |
| `digital-marketing` | `the leading edge of one translucent ripple crossing a matte ceramic surface` |

**Negative (all six)** — `text, letters, words, screens, UI, devices, robot, brain, circuit board, glowing lines, neon, sci-fi, blue tint, high key, white studio background, wide shot, oversaturated, HDR`

## 4.4 ⛔ Detail testimonials

`testimonials-section.tsx` — needs **real client headshots.**

---

# Part 5 — Blog (29 posts)

Currently [blog-images.ts:8](src/components/pages/blog/blog-images.ts#L8)
cycles the shared work placeholders by index. **That needs replacing with a
per-post `slug → image` map** so a post keeps its cover everywhere it appears.

Each post needs **one master**, cropped to three slots:

| Slot | Component | CSS px | Generate | Ratio |
|---|---|---|---|---|
| Blog index card | [blog-card.tsx:23](src/components/pages/blog/blog-card.tsx#L23) | 409 × 260 | 818 × 520 | 1.57:1 |
| Post hero | [post-detail-page.tsx:87](src/components/pages/blog/post-detail-page.tsx#L87) | 1380 × 700 | 1920 × 974 | 1.97:1 |
| Home latest-3 | `blog-section.tsx:32` | 417 × 200 | 834 × 400 | 2.09:1 |

**Generate the master at 1920 × 1080**, subject centred in the middle band, and
all three crops come out of it. The 2.09:1 crop is brutal — anything vertical
dies there.

## 5.1 ✅ Blog cover system

All 29 use **Lane A**, one shared base prompt, palette rotating on a 4-cycle so
the index grid never puts two identical-looking covers side by side.

**Base prompt:**

```
A 3D render of {SUBJECT}. Physically accurate materials — matte ceramic,
frosted glass, brushed steel, fine moss where noted. {PALETTE}, soft shadows.
Wide horizontal 16:9 frame, the subject centred and occupying the middle half
of the frame, generous empty space to left and right, clear margin top and
bottom.
Octane render, physically based materials, shallow depth of field, natural
muted colour, fine grain.
```

**Negative (all posts):** `text, letters, words, code, terminal, screens, UI, dashboards, error messages, warning triangles, bug icons, robot, android, brain, circuit board, chip, glowing lines, network nodes, holograms, neon, blue glow, sci-fi, matrix, dark background, phones, laptops, keyboards, oversaturated, HDR`

### The 29 posts

Palette rotates **P1 → P2 → P3 → P4** down the list.

| # | Slug | `{SUBJECT}` | Pal |
|---|---|---|---|
| 1 | `fix-lovable-app-not-working` | `a smooth pale ceramic form with one clean fracture across it, the two halves being drawn back together, the seam already almost invisible` | P1 |
| 2 | `bolt-app-not-working-fix` | `ten small pale ceramic pins standing in a row, three of them tipped over, a slender steel rod resting alongside ready to right them` | P2 |
| 3 | `ai-vibe-coding-bugs-fixes` | `a pale ceramic lattice with fifteen cells, a few cells holding a slightly misaligned frosted glass panel while the rest sit flush` | P3 |
| 4 | `supabase-lovable-not-connecting` | `two ceramic forms facing each other across a small gap, a frosted glass bridge between them almost meeting, one clean joint left to close` | P4 |
| 5 | `take-lovable-app-to-production` | `a rough unfinished ceramic form on a low pale stone plinth beside its finished, polished twin on a taller plinth` | P1 |
| 6 | `fix-auth-ai-built-app` | `a single precise brushed-steel key form resting in a shaped ceramic recess that matches it exactly` | P2 |
| 7 | `when-hire-developer-fix-ai-app` | `a small ceramic form wedged at an awkward angle in a stone slot, a pair of clean steel tools laid neatly beside it` | P3 |
| 8 | `stripe-payments-ai-app` | `a smooth ceramic channel carrying a single continuous ribbon of frosted glass cleanly from one end to the other` | P4 |
| 9 | `emergent-app-not-working` | `a pale ceramic form on a stone examination plinth, one section cut away to reveal a clean frosted glass interior` | P1 |
| 10 | `ai-app-performance-fixes` | `a slender ceramic ribbon straightening from a tangled loop into one clean fast curve, the last knot loosening` | P2 |
| 11 | `add-features-lovable-app` | `a finished ceramic form with three new matching sections hovering in perfect alignment, ready to seat` | P3 |
| 12 | `cursor-ai-code-review-fix` | `a row of pale ceramic tiles on a stone bench, one lifted and turned over by a slender steel arm for inspection` | P4 |
| 13 | `google-signin-in-flutter` | `a slender ceramic ribbon splitting into two mirrored halves, a single brushed-steel key form seated at the split` | P1 |
| 14 | `chatgpt-vs-gemini-vs-claude-2026` | `three ceramic spheres of identical size but distinctly different surface finishes — matte, polished, and lightly textured — in one level row` | P2 |
| 15 | `what-is-rag-ai-for-business` | `many small frosted glass shards drifting inward from the edges and converging into one smooth solid ceramic sphere at the centre` | P3 |
| 16 | `how-to-build-mvp-2-weeks` | `fourteen pale ceramic blocks in a tight arc, each slightly more finished than the last, the final one smooth and complete` | P4 |
| 17 | `google-gemma-4-vs-chatgpt` | `two ceramic forms of equal height on a level balance bar, one noticeably smaller and denser than the other, the bar perfectly horizontal` | P1 |
| 18 | `what-is-vibe-coding` | `a smooth ceramic form half-emerged from rough uncut pale stone, the finished half polished and precise` | P2 |
| 19 | `top-ai-automation-use-cases-india` | `ten small pale ceramic mechanisms in a level grid, each caught mid-motion turning by itself, fine moss in their seams` | P3 |
| 20 | `how-to-integrate-ai-existing-software` | `a new polished ceramic section seating cleanly into a gap in an older weathered ceramic structure, the join flush` | P4 |
| 21 | `agentic-ai-vs-chatbots` | `two ceramic mechanisms side by side, one static and closed, the other open and caught mid-motion turning by itself` | P1 |
| 22 | `whatsapp-ai-bot-indian-business` | `a cluster of pale ceramic rooftops with thin concentric rings of translucent light rippling outward from one taller form` | P2 |
| 23 | `flutter-ai-enabled-apps` | `a slender ceramic ribbon splitting into two mirrored halves, a small self-turning mechanism seated at the split` | P3 |
| 24 | `ai-transforming-web-development-2025` | `an open ceramic lattice rebuilding itself, several cells already reformed into a cleaner geometry than the rest` | P4 |
| 25 | `flutter-vs-react-native-2025` | `two slender ceramic ribbons side by side, one splitting cleanly into two mirrored halves, the other into two subtly different halves` | P1 |
| 26 | `future-software-development-emerging-tech` | `a pale ceramic landscape of low ridges with one impossibly smooth new form rising from the far horizon, soft moss on the near slopes` | P2 |
| 27 | `why-flutter-2025` | `one slender ceramic ribbon rising from a single point and splitting cleanly into two identical mirrored ribbons, frosted glass at the split` | P3 |
| 28 | `mobile-first-development-2025` | `a tall narrow ceramic form standing prominently in front of a much wider low one, both flawlessly finished` | P4 |
| 29 | `pwa-essential-2025` | `a ceramic form that is solid stone at one end and frosted glass at the other, the transition seamless` | P1 |

---

# Part 6 — Contact page

⛔ **No image slots.** [contact/index.tsx](src/components/pages/contact/index.tsx)
and `contact-form.tsx` are type and form only. Nothing to generate.

---

# Part 7 — Country pages (× 2: `usa`, `singapore`)

## 7.1 ✅ Country hero panel

| | |
|---|---|
| Component | [country/hero-section.tsx:52](src/components/pages/country/hero-section.tsx#L52) |
| CSS | `.hero-v2-video-wrap` — 1380 × 740 css px, dark scrim + copy over it |
| **Generate** | **1920 × 1030** · 1.86:1 · centre crop |
| Lane | **D** — honest real-world architectural |
| Data field | `COUNTRY_PAGES.<slug>.hero.image` |
| Save to | `public/images/country/<slug>-hero.webp` |

**Bottom third is under the scrim and copy** — nothing important there.

**Base prompt:**

```
Wide architectural photograph of {SUBJECT}. Clean composition, no signage and
no readable text anywhere. {LIGHT}. Wide 1.85:1 frame, the skyline occupying
the upper two thirds, the lower third quiet and uncluttered.
Shot on 35mm at f/8, editorial architectural photography, natural muted
colour, fine grain, honest and unstyled.
```

| Slug | `{SUBJECT}` | `{LIGHT}` |
|---|---|---|
| `usa` | `a low modern glass and steel campus building set behind open ground, wide horizontal lines, clean landscaping` | `crisp clear morning sun from the right, deep saturated blue sky, long clean shadows` |
| `singapore` | `a dense cluster of tall glass towers rising close together seen from below, layered depth between the facades, tropical greenery along the base` | `bright hazy daylight, pale silver-blue sky, soft humidity in the air` |

**Negative** — `text, letters, signage, billboards, logos, flags, maps, landmarks, Statue of Liberty, Merlion, Marina Bay Sands, crowds, people, traffic, night, neon, sunset postcard, HDR, oversaturated, tilt-shift`

## 7.2 ✅ Country about section

| | |
|---|---|
| Component | [country/about-section.tsx:42](src/components/pages/country/about-section.tsx#L42) |
| CSS | `.about-v4-image-wrap` — 500 × 375 css px |
| **Generate** | **1000 × 750** (@2x) · 4:3 · centre crop |
| Lane | **E** — candid documentary |
| Data field | `COUNTRY_PAGES.<slug>.about.image` |
| Save to | `public/images/country/<slug>-about.webp` |

**Meaning:** *working with clients in this market* — time-zone overlap, English
first. Same office, framed for the market. **One file can serve both countries**
unless you want each page distinct. Reuse the §2.1 prompt, cropped 4:3.

## 7.3 ♻️ Country blog cards

`country/blog-section.tsx:61` · `.blog-v5-image-wrap` 620 × 512 →
**1240 × 1024** (@2x) · 1.21:1. Currently a gradient div. **Crops of the §5.1
post masters** — no new generation. Note the near-square ratio: crop from the
centre of the 16:9 master.

## 7.4 ⛔ Country work section

`country/work-section.tsx:32` — **Skip, project assets.**

---

# Part 8 — Open Graph / social previews

⚠️ Not audited yet — [layout.tsx](src/app/layout.tsx) needs checking for what
`openGraph.images` currently points at. Standard size **1200 × 630**.

Recommended, once the above exists:

| Page | Source |
|---|---|
| Home | §1.1 contact card, or a dedicated 1200 × 630 crop of §2.1 |
| About | §2.1 hero panel, cropped |
| Services index | §3.1 hero, cropped |
| Service detail × 6 | §4.1 hero, cropped |
| Blog post × 29 | §5.1 master, cropped |
| Country × 2 | §7.1 hero, cropped |

No new generation — every OG image is a 1200 × 630 crop of a master above.

---

# Part 9 — Generation order and count

| Batch | What | New masters |
|---|---|---|
| 1 | Home hero contact card + home about (§1.1, §1.4) | 2 |
| 2 | Six service masters at 1336 × 976 (§1.7) — feeds §2.6, §3.2, §4.2 | 6 |
| 3 | Six service detail heroes (§4.1) + six deliverables crops (§4.3) | 12 |
| 4 | Home process × 4 (§1.6) + About workflow × 4 (§2.3) | 8 |
| 5 | About panel, identity, markets × 5, beliefs × 5 (§2.1–2.5) | 12 |
| 6 | Services index hero (§3.1) | 1 |
| 7 | Blog masters × 29 (§5.1) — feeds home blog, blog index, post heroes, country blog | 29 |
| 8 | Country heroes × 2 + country about × 1 (§7.1, §7.2) | 3 |
| | **Total new images to generate** | **73** |

Everything else on the site is a crop of one of these 73, a real asset that
must be photographed (team, client logos, testimonial headshots), or a project
/ product shot that is out of scope.

---

# Part 10 — Code changes this implies

1. **`blog-images.ts`** — [line 8](src/components/pages/blog/blog-images.ts#L8)
   currently returns `POOL[index % 5]`. Replace with a `slug → cover` map so a
   post keeps its image across the home list, the blog index and its own hero.
2. **Gradient divs that need an `<img>`:**
   - `services-section.tsx:70` (`.services-v8-image-wrap`)
   - `blog-section.tsx:32` (`.blog-v6-image-wrap`)
   - `services-list.tsx:49` (`.services-v3-image-wrap`)
   - `detail-overview.tsx:17` (`.services-v4-image-wrap`)
   - `detail-deliverables.tsx:34` (`.services-v5-image-wrap`)
   - `country/blog-section.tsx:61` (`.blog-v5-image-wrap`)
3. **`work-images.ts`** — every non-project section currently borrows
   `workImage()` as a stand-in (about beliefs, identity, markets, role,
   workflow; home process; country). Each should point at its own asset path
   once these land.
4. **`hero-section.tsx:159`** — the hero project card and the first work card
   both request image slot `0` of the same project, so they render the
   identical file twice on one screen. Change one to slot `1`. *(Project
   assets are out of scope here, but the duplication is worth fixing.)*
5. **Alt text** — §1.1 and §1.4 say "The Saurabh Infosys delivery team" / "The
   Saurabh Infosys studio". If these are generated rather than photographed,
   the alt text must stop claiming to depict real people.
