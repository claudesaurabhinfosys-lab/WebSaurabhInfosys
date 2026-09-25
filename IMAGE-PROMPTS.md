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

# Part S — Service Images (Redesign, Sep 2026) ⭐ CURRENT

> **Supersedes §1.7, §4.1 and §4.3** for the five live services. The old
> ceramic/moss renders belong to the previous design and are being replaced.

## S.0 Art direction

**Reference:** [Alture template](https://alture-template.webflow.io/) — real editorial
photography of devices in lived-in spaces, natural light, film grain, one clear subject.
Every image shows *what the service delivers* (a chat bot, an app, synced data, an
engineer, a branded dashboard) — but staged like an agency campaign, never like stock.

**The formula every prompt follows:**
1. **Subject** — a device (or hands on a device) showing the deliverable on screen.
2. **Place** — a calm real space: plaster wall, leather, oak, stone, open sky.
3. **Light** — one named natural light source with a direction and a time of day.
4. **Palette** — warm neutrals; blue appears **only on screens** (ties back to `#00a0e3`).
5. **Camera** — lens, aperture, Kodak Portra colour, fine grain.

**Each service gets its own light and place** so the five read as a set without repeating:

| # | Service | Place | Light | Palette |
|---|---|---|---|---|
| 01 | AI Automation | Living room, leather bench, plaster wall | Golden hour, from right | Sand, tan, amber |
| 02 | App Development | Outdoors, looking up at sky | Hard midday sun | Azure, forest green, cream |
| 03 | System Integration | Oak table, seen from above / eye level | Soft morning window light | Oak, cream, sage |
| 04 | Hire Developers | Sofa / desk at dusk | Low warm lamp + last sun | Amber, deep brown, black |
| 05 | White-Label | Bright gallery-like studio | Airy diffused daylight | Cream, pale stone, white |

## S.1 Slots, sizes, files

| Slot | Component | Ratio | Generate | File |
|---|---|---|---|---|
| **Card** | [services-section.tsx:60](src/components/stodio/home/services-section.tsx#L60) — dark home slab, radius 24, ~300px wide | 3:2 | **1200 × 800** | `public/images/services/<slug>.webp` |
| **Banner** | [service-detail-page.tsx:68](src/components/stodio/services/service-detail-page.tsx#L68) — full width, `height: auto` | **exactly 2:1** | **1920 × 960** | `public/images/services/<slug>-hero.webp` |

- Home shows only the **first four** services, so the White-Label card is optional (future use).
- `-deliverables.webp` is no longer rendered on service pages — no prompt needed.
- Export as WebP, quality ~80, target < 200 KB.

**Generator settings**
- Midjourney: `--ar 3:2 --style raw --v 7` (card) / `--ar 2:1 --style raw --v 7` (banner)
- Flux / GPT-image / Ideogram: paste as-is, set aspect ratio.
- **Generate the banner first**, then the card with the same model and seed (or Midjourney
  `--sref` of the banner) so both images of one service share a look.

**Negative (all services)**
```
readable text, gibberish text, distorted letters, book titles, magazine covers, brand logos, Apple logo, laptop brand name, watermark, signature, extra fingers, deformed hands, two right hands, blurry screen, glare hiding screen, cluttered desk, office cubicle, open-plan office, corporate stock photo, people smiling at camera, neon, cyberpunk, robot, hologram, floating UI, oversaturated, HDR, plastic skin, CGI look, 3D render look
```

**Screens — finish in post (recommended):** AI can draw convincing UI but never correct
words. For the final version, place a real screenshot on each screen (Photoshop:
Free Transform → Distort, then Multiply a little of the original screen glare back on top;
or Figma mockup). Suggested screenshots are listed per service.

---

## S.2 — 01 · AI Automation & Agents (`ai-automation-services`)

**Story:** "Your business keeps working while you're away." A calm, empty room at golden
hour — the laptop shows an automation flow, the phone shows the bot answering a customer.
No one is there. That is the point.

**Banner** → `ai-automation-services-hero.webp` · 1920 × 960
```
Wide editorial interior photograph of a sleek silver laptop open on a low black metal and smoked-glass coffee table, in front of a tan leather daybed, in a calm modern living room. The laptop screen shows a clean dark automation workflow interface: a chat node on the left connected by thin glowing blue lines to a central glowing blue AI orb node, which branches to three small node cards with simple calendar, database and envelope glyphs, and a small audio waveform card below. Beside the laptop a smartphone lies face-up showing a chat conversation with blue message bubbles, next to a small turned walnut bowl. A plain stone bowl rests on two plain unlabelled linen books at the left edge. Warm golden-hour sunlight enters from a tall window on the right, casting long soft leaf shadows and light streaks across a textured beige plaster wall; a large dark abstract painting is partly cropped at the top. Woven jute rug on a polished concrete floor. Ultra-wide 2:1 composition, laptop slightly left of centre, calm wall space on the right. Shot on 35mm f/2.8, natural light, shallow depth of field, warm palette of sand, tan leather and amber, Kodak Portra 400 colour, fine film grain, quiet luxury, premium agency campaign photography.
```

**Card** → `ai-automation-services.webp` · 1200 × 800
```
Editorial close-up photograph of a hand holding a modern black smartphone at a slight angle, the screen showing a clean chat conversation between a customer and an AI assistant, incoming bubbles in soft grey and replies in bright blue, a small round assistant avatar with a blue spark at the top, and a typing indicator at the bottom. Warm golden-hour sunlight streams in from the left, casting soft window-frame and leaf shadows across a textured beige plaster wall behind. The person wears a cream knit sweater, only hand and forearm visible, face out of frame. Phone in crisp focus in the centre of the frame with generous margins, background softly blurred. Warm palette of sand, beige and cream, blue only on the screen. Shot on 50mm f/1.8, natural light, Kodak Portra 400 colour, fine film grain, calm, authentic, premium agency photography.
```

**Screens to composite:** WhatsApp bot conversation (booking or lead capture); n8n / Make workflow canvas in dark mode.

---

## S.3 — 02 · App & MVP Development (`app-development`)

**Story:** "Live on both stores." Two phones raised to an open sky — iOS and Android,
same app, one codebase. Bright, confident, outdoors: the only service shot outside.

**Banner** → `app-development-hero.webp` · 1920 × 960
```
Wide editorial photograph from a low angle, two hands raising two modern smartphones side by side against a vast deep cloudless azure sky, the left phone an iPhone-style device with a dynamic island, the right an Android-style device with a punch-hole camera, both screens showing the same clean bright mobile app home screen with a greeting header, a large rounded photo banner card, a grid of soft pastel category icons and a bottom navigation bar. Hard bright midday sun from the left, crisp sculptural shadows on the hands. Left sleeve in cream linen with a wooden button, right sleeve in forest-green ribbed knit, faces out of frame. The corner of a sunlit cream stucco wall and a few silvery olive leaves at the lower left edge. Ultra-wide 2:1 composition, phones slightly left of centre, generous open sky on the right. Shot on 35mm f/2.8, natural light, shallow depth of field, rich natural colours of azure, forest green and cream, Kodak Portra 400 colour, fine film grain, bold, optimistic, premium agency campaign photography.
```

**Card** → `app-development.webp` · 1200 × 800
```
Editorial lifestyle photograph from a low angle, a single hand raising a modern smartphone against a deep cloudless azure sky, the screen showing a clean bright mobile app with rounded content cards, soft pastel icons and a bottom navigation bar. Hard bright natural sunlight from the right, crisp shadows on the hand, the person wears a forest-green ribbed knit sweater, only hand, wrist and a softly blurred shoulder visible, face out of frame. A few silvery olive leaves in soft focus at one corner. Phone in sharp focus in the centre third with generous margins. Rich natural colours of deep sky blue, forest green and warm skin tones. Shot on 50mm f/2, natural light, Kodak Portra 400 colour, fine film grain, confident, fresh, premium agency photography.
```

**Screens to composite:** real Flutter app screens from the portfolio (Curvd, Fit Gate, MacroMate) — same app on both phones.

---

## S.4 — 03 · System Integration (`integration-services`)

**Story:** "Everything in sync." Several devices on one table, each running a different
tool, all showing the same customer / invoice data. Orderly, calm, morning.

**Banner** → `integration-services-hero.webp` · 1920 × 960
```
Wide editorial interior photograph of a long solid light-oak table in a calm sunlit room, a silver laptop, a tablet on a slim stand and a smartphone arranged in a clean evenly spaced row across the table. Each screen shows a different clean business interface that shares the same data in blue accents: the laptop a CRM contact record with a timeline, the tablet an invoice with line items and a paid badge, the phone a notification card with a green sync tick. A ceramic coffee cup, a small sprig of eucalyptus in a glass vase and a closed plain linen notebook complete the scene. Soft morning window light from the left, long gentle shadows across the oak and a warm cream plaster wall behind. Ultra-wide 2:1 composition, devices across the central band, calm empty wall above. Shot on 35mm f/2.8, natural light, shallow depth of field, palette of light oak, cream and soft sage, Kodak Portra 400 colour, fine film grain, orderly, quiet luxury, premium agency photography.
```

**Card** → `integration-services.webp` · 1200 × 800
```
Editorial overhead photograph looking straight down at a light-oak table, a laptop and a tablet placed side by side and perfectly aligned, both screens showing clean matching business dashboards with the same table of records and a small bar chart in soft blue tones, a thin green sync tick at the top of each, suggesting the two systems are in sync. A ceramic coffee cup and a small eucalyptus sprig sit at one corner. Soft diffused morning daylight from a window at the top of the frame, gentle natural shadows. Warm neutral palette of oak, cream and sage, blue only on the screens. Symmetrical orderly composition in the centre with generous margins. Shot on 35mm f/4, natural light, Kodak Portra 400 colour, fine film grain, calm, precise, premium agency mockup photography.
```

**Screens to composite:** HubSpot / Zoho contact view · QuickBooks / Tally invoice · a Slack or WhatsApp "synced" notification.

---

## S.5 — 04 · Dedicated AI & Dev Teams (`hire-developers`)

**Story:** "A senior engineer, focused on your roadmap." Human hands, real code, the warm
quiet of deep work. Faces never shown — the craft is the subject.

**Banner** → `hire-developers-hero.webp` · 1920 × 960
```
Wide editorial photograph of a software developer seen in three-quarter rear view, sitting at a minimal dark walnut desk, working on a silver laptop connected to a large external monitor, both screens showing a dark code editor with soft coloured syntax highlighting and a file tree, a small video call tile with blurred faces in the corner of the monitor. Low warm evening light from a brass desk lamp and the last golden sun through a window on the right, deep soft shadows, a warm plaster wall, a trailing plant leaf in soft focus at the frame edge, headphones resting on the desk. The developer wears a dark charcoal knit sweater, face not visible. Ultra-wide 2:1 composition, developer and screens left of centre, calm warm wall space on the right. Shot on 35mm f/2, shallow depth of field, palette of amber, walnut and deep brown, Kodak Portra 400 colour, fine film grain, focused, quiet, premium agency photography.
```

**Card** → `hire-developers.webp` · 1200 × 800
```
Editorial close-up photograph of a developer's hands typing on a silver laptop keyboard, the laptop resting on their lap on a tan leather sofa, the screen visible at the right showing a dark code editor with soft coloured syntax lines. Low warm golden light from a window on the left rakes across the forearms and keys, deep soft shadows, a green plant and warm bokeh in the blurred background. The person wears a white t-shirt and black trousers, face out of frame. Very shallow depth of field, focus on the hands and keys, subject in the middle of the frame with clear margins. Warm moody palette of amber, tan, deep brown and black. Shot on 85mm f/1.8, natural light, Kodak Portra 400 colour, fine film grain, focused, calm, premium agency photography.
```

**Screens to composite:** VS Code with real Flutter / Next.js code (dark theme); a Slack standup or Google Meet tile.

---

## S.6 — 05 · White-Label Software (`white-label-software`)

**Story:** "A proven platform, wearing your brand." The same dashboard on two devices in
two brand colours, with colour swatches nearby — rebranding made visible. Bright and airy.

**Banner** → `white-label-software-hero.webp` · 1920 × 960
```
Wide editorial interior photograph of a bright minimal gallery-like studio, a silver laptop and a tablet on a slim stand placed together on a pale travertine and light-oak table. Both screens show the same clean SaaS admin dashboard layout with a left sidebar, four stat cards and a line chart — the laptop styled in blue accents, the tablet in warm terracotta accents — suggesting one product under two different brands. A fan of plain paper colour swatch cards in blue, terracotta and sand lies beside them, with a small white ceramic vase holding a single dried stem. Soft diffused morning daylight from tall windows on the left, gentle long shadows and faint light streaks across a smooth cream plaster wall. Ultra-wide 2:1 composition, devices slightly left of centre, calm open wall space on the right. Shot on 35mm f/2.8, natural light, shallow depth of field, airy palette of cream, travertine and light oak, Kodak Portra 400 colour, fine film grain, polished, quiet luxury, premium agency photography.
```

**Card** → `white-label-software.webp` · 1200 × 800 *(optional — not shown on home today)*
```
Editorial product photograph of a modern tablet standing upright on a slim stand on a pale travertine surface, the screen showing a clean bright SaaS admin dashboard with a sidebar, stat cards and a simple chart in blue accents. Beside it a fan of plain paper colour swatch cards in blue, terracotta and sand, suggesting custom branding. Soft morning daylight from the left with gentle window shadows across a pale cream plaster wall behind. Tablet in the centre third with generous margins. Minimal airy palette of cream, pale stone and white, blue only on the screen. Shot on 50mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, clean, polished, premium agency mockup photography.
```

**Screens to composite:** SSMS or MySampark admin dashboard — one in the brand blue, one recoloured to a client colour.

---

## S.7 Checklist before saving

- [ ] No readable brand text anywhere (book spines, laptop base, phone back) — clone it out.
- [ ] Hands: five fingers, correct left/right.
- [ ] Banner is exactly 2:1 (1920 × 960), card exactly 3:2 (1200 × 800).
- [ ] Card subject sits in the centre with margin — it is cropped to rounded corners at ~300px.
- [ ] Real screenshot composited on screens (final version).
- [ ] WebP, < 200 KB, saved over the existing file name — no code change needed.

---

## S.8 Home "Who we are" strip — 6 portrait images

| | |
|---|---|
| Component | [gallery-section.tsx:7](src/components/stodio/home/gallery-section.tsx#L7) — infinite scrolling strip under the client marquee |
| CSS | `.st-image-wrapper` — 460 × 576 desktop, 320 × 450 tablet, 250 × 350 phone · radius 24 · `object-fit: cover` |
| **Generate** | **920 × 1150** · 4:5 portrait · Midjourney `--ar 4:5 --style raw --v 7` |
| Safe zone | Tablet/phone crop the sides ~5% — keep the subject in the **centre 80% width** |
| Save to | `public/images/home/strip-01.webp` … `strip-06.webp` |

**Story:** this is "Who we are", not "what we sell" — so **people and craft**, not devices
as heroes. The six alternate warm / cool so the moving strip has rhythm, exactly like
Alture's mix of motion-blur portraits, sky shots, warm interiors and one glass object.
Faces are allowed here but never posed at the lens.

| # | Mood | Palette |
|---|---|---|
| 01 | Speed — motion-blur figure | Brand blue wall |
| 02 | Planning — hands sketching wireframes | Warm paper, morning |
| 03 | Confidence — low-angle portrait to sky | Azure + rust orange |
| 04 | Collaboration — hands over a tablet | Oak, cream |
| 05 | The AI moment — chromatic glass object | Blue-violet gradient |
| 06 | Late shift for global clients — window at dusk | Deep blue + amber |

**01 · Speed** → `strip-01.webp`
```
Editorial long-exposure photograph of a young man in a loose white shirt and light grey trousers running past the camera in profile, his body dissolving into soft horizontal motion blur, only his face and shoulder slightly sharper. Behind him a seamless studio wall painted in saturated electric blue (#00A0E3), with a soft warm glow of light behind his head fading into deeper cobalt at the edges. Vertical 4:5 frame, figure centred with clear space around. Shot on 50mm with slow shutter, film camera look, Kodak Portra colour, fine grain, energetic, artful, premium agency campaign photography.
```

**02 · Planning** → `strip-02.webp`
```
Editorial overhead close-up of two hands sketching mobile app wireframes with a black fine-liner pen on thick cream sketch paper, simple rectangles for screens, rounded buttons and arrows between screens, no words. A smartphone lies face-down at the edge of the paper beside a small clay espresso cup. Warm low morning sunlight from the top left rakes across the paper, casting long shadows of the pen and fingers. Vertical 4:5 frame, hands and sketches in the centre. Shot on 50mm f/2.8, natural light, warm palette of cream, tan and soft brown, Kodak Portra 400 colour, fine film grain, thoughtful, crafted, premium agency photography.
```

**03 · Confidence** → `strip-03.webp`
```
Editorial fashion-grade portrait shot from a low angle of a young Indian woman in her late twenties standing against a vast deep cloudless azure sky, wearing a tailored rust-orange overshirt over a white tee, a slim laptop held casually under one arm, looking off toward the horizon in three-quarter profile, calm and self-assured, not looking at the camera. Hard bright midday sun from the right carving crisp shadows on her face and clothing. Vertical 4:5 frame, figure centred occupying the middle two-thirds, lots of blue sky above. Shot on 35mm f/4, Kodak Portra 400 colour, natural skin texture, fine grain, bold, confident, premium agency campaign photography.
```

**04 · Collaboration** → `strip-04.webp`
```
Editorial close-up photograph of two people's hands and forearms leaning over a tablet lying flat on a light-oak table, one hand pointing at the screen, the other resting a pencil near a printed colour palette card, the tablet screen showing a clean bright app design with rounded cards and blue accents. One wears a cream linen sleeve, the other a charcoal knit sleeve, faces out of frame. Soft morning window light from the left, gentle shadows, a ceramic mug softly blurred in the background. Vertical 4:5 frame, hands and tablet centred. Shot on 50mm f/2.2, shallow depth of field, palette of oak, cream and charcoal, Kodak Portra 400 colour, fine film grain, warm, collaborative, premium agency photography.
```

**05 · The AI moment** → `strip-05.webp`
```
A single sculptural abstract 3D object of flowing black glass, a smooth continuous looping ribbon folding over itself, with iridescent chromatic dispersion along every edge — thin fringes of electric blue, violet, cyan and a touch of warm orange — floating in the centre of a soft blurred gradient background that moves from deep cobalt at the top through electric blue (#00A0E3) to soft violet at the bottom. Soft studio lighting with crisp specular highlights on the glass, subtle reflections, no floor. Vertical 4:5 frame, object centred with generous margins. Ultra-detailed, physically accurate refraction, premium art-direction render, clean and minimal.
```

**06 · Late shift for global clients** → `strip-06.webp`
```
Editorial photograph at blue hour of a young developer seen from behind in silhouette, sitting on a low sill beside a large floor-to-ceiling window with an open laptop on their lap, the screen casting a soft cool glow on their shoulder and hands. Outside, a softly blurred city skyline at dusk with warm amber window lights and a deep blue sky gradient. A warm brass floor lamp glows at the edge of the frame. Vertical 4:5 frame, figure and laptop in the lower centre, sky and city bokeh filling the top. Shot on 35mm f/1.8, natural mixed light, shallow depth of field, palette of deep blue and amber, Kodak Portra 800 colour, fine film grain, quiet, focused, cinematic, premium agency photography.
```

**Negative (all six)**
```
readable text, gibberish text, words on paper, logos, brand names, watermark, extra fingers, deformed hands, distorted face, people smiling at camera, posed corporate headshot, office cubicle, open-plan office, meeting room, whiteboard with text, stock photo, neon, cyberpunk, robot, hologram, oversaturated, HDR, plastic skin, CGI look (except 05)
```

---

## S.9 Services heading inline image

| | |
|---|---|
| Component | [services-section.tsx:18](src/components/stodio/home/services-section.tsx#L18) — sits inside the headline "Everything ▢ your brand needs" on the **dark** services slab |
| CSS | `.st-service-title-image` — **80 × 60** · radius 24 |
| **Generate** | **640 × 480** · 4:3 · Midjourney `--ar 4:3 --style raw --v 7` |
| Save to | `public/images/home/services-title.webp` |

At 80px nothing detailed survives — it needs **one bold shape and one bright colour**
that pops on black type.

```
A single glossy abstract 3D form of flowing black glass, a smooth twisted loop, with bright iridescent chromatic edges in electric blue (#00A0E3), cyan and violet, centred on a vivid smooth gradient background from electric blue to soft violet. Crisp specular highlights, bold simple silhouette, large in frame with small margins. Clean minimal premium render, high contrast, readable at very small size.
```

**Negative** — `text, logos, multiple objects, busy background, dark background, fine detail, noise`

> ✅ Done — `hero/strip-05.webp` is used for this slot; no separate file needed.

---

## S.10 About page — 17 new images

All files go to `public/images/about/`. Market files keep their existing names (overwrite =
no code change). The rest are new names — tell Claude when they are added and the code
will be switched from the temporary `hero/strip-*` images.

**Negative (all About images unless noted)**
```
readable text, gibberish text, words, logos, brand names, watermark, extra fingers, deformed hands, distorted face, people looking at camera, posed corporate headshot, office cubicle, open-plan office, meeting room, stock photo, tourist landmark, flags, neon, cyberpunk, robot, hologram, oversaturated, HDR, plastic skin, CGI look
```

### S.10.1 Hero headline chip — 1 image

"We exist to build lasting **digital ▢** …" — sits inside the H1 at ~106 × 80, so one
bold shape, one bright colour. Deliberately **warm** so it differs from the blue loop on Home.

| Generate | 640 × 480 · 4:3 · `--ar 4:3` | Save | `about/chip.webp` |
|---|---|---|---|

```
A single glossy abstract 3D sphere of smooth clear glass with a soft inner twist, iridescent chromatic edges in warm orange, coral and a touch of violet, centred large in frame on a vivid smooth gradient background from warm tangerine orange to soft coral pink. Crisp specular highlights, bold simple silhouette, small margins. Clean minimal premium render, high contrast, readable at very small size.
```
Negative: `text, logos, multiple objects, busy background, dark background, fine detail, noise`

### S.10.2 "From first idea ▢ to launch" — 1 image

Inline in the H2 at 120 × 90 (hidden on phones). One clear symbol of *idea → launch*.

| Generate | 640 × 480 · 4:3 · `--ar 4:3` | Save | `about/launch.webp` |
|---|---|---|---|

```
Editorial photograph of a single crisp white folded paper airplane in mid-flight against a vast deep cloudless azure sky, lit by bright hard sunlight from the left with a clean shadow on its folds, centred large in frame. Shot on 85mm f/4, natural light, Kodak Portra 400 colour, fine grain, simple, optimistic, bold, readable at very small size.
```

### S.10.3 Showcase row — 4 portrait images

Staggered row under "From first idea to launch, backed by N years of shipping" — reads
left to right as the **journey of a product**.

| Generate | 1000 × 1200 · 5:6 portrait · `--ar 5:6` | Save | `about/showcase-01.webp` … `04` |
|---|---|---|---|

**01 · Idea** — warm café morning
```
Editorial photograph of a young founder seen in three-quarter profile, head down, writing ideas in a plain linen notebook at a small marble café table by a window, a flat white coffee beside the notebook, face partly turned away from the camera. Warm soft morning sunlight from the window on the left, gentle shadows, softly blurred café interior behind. Vertical 5:6 frame, figure and notebook centred. Shot on 50mm f/2, natural light, shallow depth of field, palette of cream, warm wood and soft brown, Kodak Portra 400 colour, fine film grain, thoughtful, calm, premium agency photography.
```

**02 · Build** — moody cool focus
```
Editorial close-up photograph of a developer's face in partial profile, eyes focused down and to the side, wearing thin clear-framed glasses in which soft blue reflections of lines of code on a screen are faintly visible, the face lit only by the cool blue glow of the screen with warm amber lamp light from behind on the hair and shoulder. Dark softly blurred room behind. Vertical 5:6 frame, face centred. Shot on 85mm f/1.8, very shallow depth of field, palette of deep blue, amber and black, Kodak Portra 800 colour, fine film grain, intense, focused, cinematic, premium agency photography.
```

**03 · Test** — bright and precise
```
Editorial photograph of two hands fanning out three smartphones of different sizes, one small, one standard, one large, all showing the same clean bright mobile app screen with rounded cards and blue accents, held against a smooth pale sage-green wall. Soft even daylight from the left, gentle shadows. Vertical 5:6 frame, hands and phones centred with clear margins. Shot on 50mm f/2.8, natural light, palette of sage, cream and white, blue only on the screens, Kodak Portra 400 colour, fine film grain, clean, precise, premium agency photography.
```

**04 · Launch** — sunrise celebration
```
Editorial photograph from a low angle of a young man on an open rooftop at sunrise, one arm raised in quiet celebration, the other hand holding a smartphone, wearing a loose white shirt, seen in three-quarter rear view looking toward the rising sun, not at the camera. Warm golden sunrise light rim-lighting his silhouette, a soft gradient sky from peach to pale blue, a few soft clouds. Vertical 5:6 frame, figure centred in the lower two-thirds. Shot on 35mm f/2.8, natural light, Kodak Portra 400 colour, fine film grain, joyful, triumphant yet calm, premium agency campaign photography.
```

### S.10.4 Stats hover backgrounds — 4 images

Revealed **behind** each number card on hover, with **dark text on top** — so these must be
**pale, high-key and low-contrast**. Anything dark or busy makes the numbers unreadable.

| Generate | 1000 × 1000 · 1:1 · `--ar 1:1` | Save | `about/stat-01.webp` … `04` |
|---|---|---|---|

Shared ending — already included in each prompt:
*"…high-key, very pale and low contrast, soft even light, lots of clean white space, gentle shadows, minimal, calm."*

**01 · Clients served (six markets)**
```
Minimal editorial still life of a small smooth matte white ceramic globe with no map markings, resting on a pale cream linen surface against a soft off-white wall, shot from a slight high angle, positioned in the lower right of the frame. Shot on 50mm f/4, natural daylight, Kodak Portra 400 colour, fine grain, high-key, very pale and low contrast, soft even light, lots of clean white space, gentle shadows, minimal, calm.
```

**02 · Products shipped**
```
Minimal editorial still life of three plain unbranded kraft-paper shipping boxes neatly stacked in a slight stagger on a pale oak floor against a soft off-white wall, positioned in the lower right of the frame. Shot on 50mm f/4, natural daylight, Kodak Portra 400 colour, fine grain, high-key, very pale and low contrast, soft even light, lots of clean white space, gentle shadows, minimal, calm.
```

**03 · SaaS products of our own**
```
Minimal editorial overhead still life of three smartphones lying face-up in a neat row on a pale cream linen surface, each screen showing a soft pale pastel app interface in blue, sage and sand tones, positioned in the lower right of the frame. Shot on 50mm f/4, natural daylight, Kodak Portra 400 colour, fine grain, high-key, very pale and low contrast, soft even light, lots of clean white space, gentle shadows, minimal, calm.
```

**04 · Clutch rating**
```
Minimal editorial still life of five small hand-folded white paper stars arranged in a gentle arc on a pale cream paper surface, soft shadows beneath each star, positioned in the lower right of the frame. Shot on 50mm f/4, natural daylight, Kodak Portra 400 colour, fine grain, high-key, very pale and low contrast, soft even light, lots of clean white space, gentle shadows, minimal, calm.
```

### S.10.5 "Our foundation" tabs — 3 images

One per principle; the image swaps when the tab is picked. Desktop shows a tall 600 × 680
panel; **phones crop it to a wide 420px-tall band** — keep the subject in the **centre**.

| Generate | 1200 × 1360 · 15:17 portrait · `--ar 15:17` | Save | `about/foundation-01.webp` … `03` |
|---|---|---|---|

**01 · "Shipping fast is a discipline, not a shortcut"**
```
Editorial photograph from a low side angle of a sprinter crouched perfectly still in the set position on starting blocks on an empty terracotta running track at dawn, muscles tense, eyes down the lane, wearing a plain white running top and black shorts, face in profile not toward the camera. Soft warm dawn light from behind, long shadows, pale mist over the track, clean white lane lines. Vertical frame, athlete centred. Shot on 50mm f/2.8, natural light, shallow depth of field, palette of terracotta, cream and soft peach, Kodak Portra 400 colour, fine film grain, disciplined, calm intensity, premium agency campaign photography.
```

**02 · "We run what we build"**
```
Editorial photograph of a potter's clay-dusted hands holding up a finished glazed ceramic vase they have just made, turning it slightly to inspect it in the light, the potter's wheel and shelves of handmade pieces softly blurred in a sunlit studio behind, face out of frame. Warm golden afternoon light through a window on the left, glowing on the glaze. Vertical frame, hands and vase centred. Shot on 50mm f/2, shallow depth of field, palette of terracotta, sand and warm cream, Kodak Portra 400 colour, fine film grain, proud, crafted, honest, premium agency photography.
```

**03 · "Communication is part of the deliverable"**
```
Editorial photograph of two young colleagues walking side by side along a sunlit tree-lined path, one mid-sentence gesturing with an open hand, the other listening and smiling, both seen in three-quarter view from the front-side, not looking at the camera, one in a cream linen shirt, one in a rust-orange knit. Warm golden-hour backlight through leaves, soft flare. Vertical frame, the pair centred. Shot on 85mm f/2, shallow depth of field, warm palette of green, cream and rust, Kodak Portra 400 colour, fine film grain, open, warm, genuine, premium agency campaign photography.
```

### S.10.6 Markets grid — 5 images (overwrite existing)

Used twice: About markets grid (1:1, ~294px, hover-zooms, label panel covers on hover) and
Contact page location rows (**80 × 60 thumbnail**). One person in each region using a
device in that region's natural light — "your users are here". No landmarks.

| Generate | 1000 × 1000 · 1:1 · `--ar 1:1` | Save (overwrite) | `about/market-<slug>.webp` |
|---|---|---|---|

**India** → `market-india.webp`
```
Editorial photograph from a low angle of a young Indian man on a sunlit rooftop terrace during Uttarayan, holding a smartphone in one hand and looking up at dozens of colourful paper kites in a clear azure sky, wearing a crisp white kurta, three-quarter profile, not looking at the camera. Hard warm late-afternoon sun, a plain lime-washed parapet at the bottom edge. Square frame, figure centred. Shot on 35mm f/4, Kodak Portra 400 colour, fine film grain, joyful, vivid, premium editorial photography.
```

**Europe** → `market-europe.webp`
```
Editorial photograph of a young woman sitting at a small outdoor café table on a quiet cobbled European street, working on a silver laptop with a cappuccino beside it, wearing a camel wool coat, three-quarter profile, not looking at the camera. Soft overcast silver morning light, pale limestone buildings and shuttered windows softly blurred behind. Square frame, woman centred. Shot on 50mm f/2, natural light, shallow depth of field, muted palette of stone, camel and soft grey, Kodak Portra 400 colour, fine film grain, refined, calm, premium editorial photography.
```

**Asia Pacific** → `market-asia-pacific.webp`
```
Editorial photograph of a young East Asian man on a clean modern elevated train platform, reading his smartphone, wearing a white t-shirt and light grey overshirt, three-quarter profile, not looking at the camera. Bright humid daylight with soft haze, lush tropical plants and sleek glass towers softly blurred behind. Square frame, man centred. Shot on 50mm f/2, natural light, shallow depth of field, palette of fresh green, white and pale silver-blue, Kodak Portra 400 colour, fine film grain, modern, energetic, premium editorial photography.
```

**Americas** → `market-americas.webp`
```
Editorial photograph of a young woman in a sunlit loft apartment with exposed red brick and large steel-framed windows, sitting on a wide window ledge with a laptop on her knees, wearing a denim shirt, three-quarter profile, not looking at the camera. Crisp bright morning sun from the window casting long geometric window-frame shadows across the brick and floor. Square frame, woman centred. Shot on 35mm f/2.8, natural light, shallow depth of field, palette of brick red, denim blue and warm cream, Kodak Portra 400 colour, fine film grain, confident, bright, premium editorial photography.
```

**Gulf Region** → `market-gulf.webp`
```
Editorial photograph of a young Gulf Arab man in a crisp white kandura standing on a modern sand-toned terrace, looking at a smartphone in his hand, three-quarter profile, not looking at the camera. High golden-hour sun from the right, long warm shadows cast by geometric latticed mashrabiya screens behind him, pale warm sky. Square frame, figure centred. Shot on 50mm f/2.8, natural light, shallow depth of field, palette of desert cream, sand and warm gold, Kodak Portra 400 colour, fine film grain, elegant, calm, premium editorial photography.
```

### S.10.7 ⛔ "By the Saurabh Infosys team" avatars — do not generate

The two 36px avatars next to *"By the Saurabh Infosys team"* claim to be **real people on
the team**. AI-generated faces there would be fake team members. Use two real team photos
(any phone portrait, cropped square) → `about/team-01.webp`, `about/team-02.webp`.

---

## S.11 Blog covers — 29 posts

| | |
|---|---|
| Slots | Post page cover [post-detail-page.tsx:63](src/components/stodio/blog/post-detail-page.tsx#L63) — full width, `height: auto`, **1920 × 900**  ·  Blog card thumbnail [blog-card.tsx:27](src/components/stodio/blog-card.tsx#L27) — **180 × 144** (5:4 centre crop) on Home, Blog index, related posts |
| **Generate** | **1920 × 900** exactly · 32:15 · Midjourney `--ar 32:15 --style raw --v 7` |
| Safe zone | The card crops to the **middle ~60% width** and is tiny — put **one bold subject in the centre** |
| Save to | `public/images/blog/<slug>.webp` |
| Code | Today every post cycles through 5 old placeholders ([blog-images.ts](src/components/stodio/lib/blog-images.ts)). Once files are added, Claude switches it to `slug → /images/blog/<slug>.webp`. |

**Style:** same editorial photography as the rest of the site. Each cover shows the
**post's idea** as a real scene or a smart physical metaphor (dominoes for "10 issues",
a stethoscope for "diagnosis", a balance scale for "vs"). Palettes rotate so neighbouring
cards never look alike.

Every prompt already ends with the shared camera line:
*"Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography."*

**Negative (all 29)**
```
readable text, gibberish text, words, letters, numbers, code that is readable, brand logos, Lovable logo, Stripe logo, Google logo, WhatsApp logo, Apple logo, laptop brand name, book titles, watermark, extra fingers, deformed hands, distorted face, people looking at camera, stock photo, office cubicle, meeting room, neon, cyberpunk, robot, humanoid, brain, circuit board, hologram, oversaturated, HDR, plastic skin, CGI look
```

### AI App Fixes (12)

**01** `fix-lovable-app-not-working` — *My Lovable App Is Broken*
```
Editorial photograph of a laptop on a dark walnut desk at night, its screen showing a soft pink-to-violet gradient web app with one red error notification card in the corner, a person's hand reaching for the trackpad, a half-finished cup of tea beside it, lit by a warm brass desk lamp and the cool glow of the screen. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**02** `bolt-app-not-working-fix` — *10 Common Issues Fixed*
```
Editorial photograph from a low side angle of a straight row of ten plain white dominoes standing on a pale oak table, three of them toppled in the middle, a hand gently setting one back upright. Soft morning window light from the left, long gentle shadows, cream wall behind. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**03** `ai-vibe-coding-bugs-fixes` — *15 Most Common Bugs*
```
Macro editorial photograph of a minimal white mechanical keyboard with one keycap removed and resting beside it, a pair of fine brass tweezers lying next to the exposed switch, on a warm linen desk mat. Warm low raking light from the right, crisp detail, soft falloff. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**04** `supabase-lovable-not-connecting` — *Supabase Not Connecting*
```
Editorial close-up photograph of two hands each holding the end of a braided emerald-green cable, the two connectors almost touching in the centre of the frame with a tiny gap between them, against a smooth pale sage-grey wall. Soft even daylight from the left. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**05** `take-lovable-app-to-production` — *Taking It to Production*
```
Editorial still life photograph on a pale oak studio shelf: on the left a rough hand-shaped unfired grey clay prototype of a vase, on the right the same vase finished, glazed in glossy deep blue and perfectly smooth. Warm afternoon window light from the left, soft shadows on a cream plaster wall. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**06** `fix-auth-ai-built-app` — *Login and Auth Broken*
```
Editorial close-up photograph of a hand holding a smartphone showing a clean minimal login screen with a large fingerprint icon and a row of passcode dots in blue, a small ring of brass keys softly blurred on the stone table below. Cool soft morning light, palette of slate blue, stone grey and brass. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**07** `when-hire-developer-fix-ai-app` — *When to Hire a Real Developer*
```
Editorial photograph from behind and slightly to the side of two people sitting together at a wooden desk in a warm sunlit room, one experienced developer pointing at code on a laptop screen, the other leaning in and listening, faces not visible. Warm late-afternoon light through a window on the right, leaf shadows on the wall. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**08** `stripe-payments-ai-app` — *Stripe Not Working*
```
Editorial close-up photograph of a hand tapping a plain matte-black payment card against a smartphone held in the other hand, the phone screen showing a clean violet-and-indigo payment screen with a large success tick, on a warm terrazzo café counter. Warm soft window light, palette of violet, indigo and warm terrazzo. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**09** `emergent-app-not-working` — *A Developer's Diagnosis Guide*
```
Playful editorial still life photograph of an open silver laptop on a pale grey desk with a classic silver stethoscope resting across its keyboard, the chest piece lying on the trackpad, the screen showing a soft dark interface with a small amber warning card. Clean cool daylight, calm clinical palette of white, pale grey and silver with an amber accent. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**10** `ai-app-performance-fixes` — *My AI-Built App Is Slow*
```
Editorial long-exposure photograph of a sprinter in a white running kit bursting out of the starting blocks on a deep blue running track, the body sharp at the head and trailing into soft horizontal motion blur, bright hard sunlight. Palette of electric blue, white and warm skin. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**11** `add-features-lovable-app` — *How to Add Features*
```
Editorial close-up photograph of a hand placing one new plain matte-white building block on top of a clean minimal architectural model built from identical white blocks, on a pale oak table. Soft warm morning light from the left, long gentle shadows, cream wall behind. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**12** `cursor-ai-code-review-fix` — *Review and Fix AI Code*
```
Editorial photograph of a laptop on a light desk showing a code review view with side-by-side panels of soft red and green highlighted lines, a pair of tortoiseshell reading glasses folded in front of it and a hand holding a pencil resting on a plain notebook. Soft north daylight, calm palette of cream, tortoiseshell brown, soft red and green. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

### Mobile Development (3)

**13** `google-signin-in-flutter` — *Google Sign-In in Flutter*
```
Editorial photograph from a low angle of a hand holding a smartphone up against a deep cloudless azure sky, the screen showing a clean minimal sign-in screen with two large rounded buttons and a small colourful circular icon, hard bright sunlight, the person's green knit sleeve visible. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**25** `flutter-vs-react-native-2025` — *Flutter vs React Native*
```
Editorial overhead photograph of two smartphones lying face-up side by side on a smooth pale concrete surface, one in a sky-blue case, one in a soft cyan case, both screens showing similar clean app interfaces, a thin shadow line of window light falling exactly between them. Bright crisp daylight. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**27** `why-flutter-2025` — *Why Flutter for Your Next App*
```
Editorial photograph of a smartphone, a tablet and a laptop fanned together on a pale oak table, all three screens showing the same clean bright app interface with rounded cards and blue accents, suggesting one codebase on every screen, against a soft sky-blue painted wall. Soft morning daylight from the left. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

### AI Development (6)

**14** `chatgpt-vs-gemini-vs-claude-2026` — *Which AI API Is Best*
```
Editorial still life photograph of three identical smartphones standing upright in a row on a pale travertine plinth, each screen showing a chat interface in a different soft colour — sage green, cobalt blue and terracotta — lit identically by soft window light from the left against a warm cream wall. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**15** `what-is-rag-ai-for-business` — *What Is RAG*
```
Editorial photograph of a hand pulling one book halfway out of a long wooden shelf of plain linen-bound books with blank spines in muted tones, in a quiet library aisle. Warm golden light through a tall window at the end of the aisle, dust motes in the air. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**16** `how-to-build-mvp-2-weeks` — *Build an MVP in 2 Weeks*
```
Editorial photograph of a hand placing a yellow sticky note with a simple hand-drawn screen sketch onto a large glass wall covered in neat columns of pastel sticky notes and sketches, no words, a soft blurred person in the background. Bright soft daylight, cheerful palette of yellow, pastel pink, sky blue and white. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**17** `google-gemma-4-vs-chatgpt` — *Cost, Privacy & Performance Compared*
```
Editorial still life photograph of an antique brass balance scale on a white marble table, a small dense polished black stone in one pan perfectly balancing a large pale pumice stone in the other, the beam level. Soft north daylight, clean shadows, pale grey wall. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**18** `what-is-vibe-coding` — *What Is Vibe Coding*
```
Editorial photograph of a young developer relaxed on a low tan sofa, wearing over-ear headphones, laptop on their knees, head gently nodding to music, eyes closed in a half smile, three-quarter profile, not looking at the camera. Warm sunset light pouring through a window, plants and a record player softly blurred behind. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**23** `flutter-ai-enabled-apps` — *AI-Enabled Apps with Flutter*
```
Editorial photograph of a smartphone on a slim stand on a pale oak table, the screen showing a clean app with a softly glowing blue orb assistant in the centre and a few chat cards below, a small ceramic cup beside it, against a smooth sky-blue wall. Soft bright daylight from the left. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

### AI Automation & Integration (4)

**19** `top-ai-automation-use-cases-india` — *Top 10 Use Cases for Indian Businesses*
```
Editorial photograph of a young Indian shop owner behind the counter of a small textile shop, checking a smartphone showing a chat conversation with blue bubbles, shelves of neatly folded colourful fabrics softly blurred behind, three-quarter profile, not looking at the camera. Warm golden afternoon light from the shop entrance. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**20** `how-to-integrate-ai-existing-software` — *Integrate AI into Existing Software*
```
Editorial still life photograph of a vintage cream-coloured typewriter sitting beside a modern slim silver laptop on a warm walnut desk, a single thin cable running between them, the laptop screen showing a soft blue interface. Warm window light from the left, old meeting new. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**21** `agentic-ai-vs-chatbots` — *Agentic AI vs Chatbots*
```
Editorial close-up photograph of a hand moving a wooden knight across a minimal wooden chess board mid-game, the other pieces standing still, on a linen-covered table. Warm low side light from the left, deep soft shadows, calm and strategic. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**22** `whatsapp-ai-bot-indian-business` — *WhatsApp AI Bot for Indian SMBs*
```
Editorial photograph of a hand holding a smartphone showing a chat conversation with green and white message bubbles, in front of a softly blurred Indian sweet shop counter with trays of colourful mithai under warm lights. Warm evening glow, palette of saffron, green and gold. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

### Technology & Artificial Intelligence (4)

**24** `ai-transforming-web-development-2025` — *AI Transforming Web Development*
```
Editorial photograph of an architect-style drafting table by a large window, a laptop open on it showing a clean modern website design with large images and blue accents, a set of drafting tools, a pencil and a folded ruler beside it. Bright soft morning light, calm palette of white, pale oak and blue. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**26** `future-software-development-emerging-tech` — *The Future of Software Development*
```
Editorial photograph of a person seen from behind standing at a floor-to-ceiling window at dawn, a laptop under one arm, looking out over a vast city skyline softly emerging from morning mist. Soft pastel dawn light of peach and pale blue, the figure in gentle silhouette. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**28** `mobile-first-development-2025` — *Mobile-First Should Be Your Priority*
```
Editorial photograph of a young woman walking through a busy city crossing while looking at her smartphone, in sharp focus, the people around her dissolving into soft motion blur, wearing a mustard-yellow coat, three-quarter profile, not looking at the camera. Bright late-afternoon sun, long shadows. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

**29** `pwa-essential-2025` — *Why PWAs Are Essential*
```
Editorial photograph of a smartphone and an open laptop on a small train table by the window, both screens showing the same clean web app with blue accents, a paper coffee cup beside them, the green countryside outside the window soft with motion blur. Bright soft daylight. Wide 32:15 frame, subject centred in the middle half with calm space on both sides. Shot on 35mm f/2.8, natural light, shallow depth of field, Kodak Portra 400 colour, fine film grain, premium editorial photography.
```

> Numbers match the post order in `BLOG_POSTS` (newest first), so #01 is the post shown
> first on Home.

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

## 1.7 ❌ SUPERSEDED by Part S — Services Section (old design)

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

## 2.3 ❌ SUPERSEDED — Workflow Section — 4 Step Images

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

## 2.4 ❌ SUPERSEDED by §S.10.6 — Markets Section — 5 Regional Images

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

## 2.5 ❌ SUPERSEDED — Beliefs Section — 5 Principle Images

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

## 4.1 ❌ SUPERSEDED by Part S — Detail Hero (old design)

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

## 4.3 ❌ SUPERSEDED — Detail Deliverables (no longer rendered)

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

# Part 5 — ❌ SUPERSEDED by §S.11 — Blog Cover System (old design)

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
