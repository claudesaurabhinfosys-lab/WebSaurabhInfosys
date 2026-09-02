# Saurabh Infosys — Homepage Redesign Blueprint (Pixel-to-Pixel Guide)

> **Design Source:** Reference screenshots from `public/home/image (55).png` through `image (65).png`  
> **Aesthetic Model:** [Flux Studio Agency](https://flux-studio-agency.webflow.io/)  
> **Brand & Primary Color:** Saurabh Infosys (`#5235F6` electric purple, `#000000` pitch black, `#0E0E0E` dark surface, `#F1F1F1` light surface)  
> **Typography:** **Clash Display** (Headings / Display) + **Manrope** (Body / Subtitles / UI)  
> **Icons:** **HugeIcons** exclusively (`@hugeicons/react` + `@hugeicons/core-free-icons`)

---

## 🧭 Visual Flow & Section Sequence

The homepage consists of **11 distinct sections** in strict visual progression:

| # | Section | Reference Image | Background | Key Highlight |
|---|---|---|---|---|
| **01** | **Floating Navbar & Hero** | `image (55).png` | Dark Inset Card (`#0E0E0E` + Photo) | 7rem Clash Display headline, right service widget |
| **02** | **Clients Section** | `image (56).png` | Pure White (`#FFFFFF`) | `— CLIENTS` em-dash, 4×2 grid of logo cards |
| **03** | **About Agency Section** | `image (57).png` | Pitch Black (`#000000`) | 2×2 stats grid (1 purple card + 3 white cards) |
| **04** | **Services Showcase** | `image (58).png` | Pure White (`#FFFFFF`) | Numbered interactive rows with hover laptop mockup |
| **05** | **Work Process Bento** | `image (59).png` | Pure White (`#FFFFFF`) | 3-column asymmetric bento (Discover, Define, Design, Deliver) |
| **06** | **Featured Projects** | `image (60).png` | Pure White (`#FFFFFF`) | 2-column staggered masonry with frosted circle badges |
| **07** | **Testimonials Carousel** | `image (61).png` | Pitch Black (`#000000`) | Purple rating card (4.9★) + portrait cards with quote reveals |
| **08** | **FAQ Accordion** | `image (62).png` | Pure White (`#FFFFFF`) | Active item in purple (`#5235F6`), rounded accordion cards |
| **09** | **Latest Blog / Insights** | `image (63).png` | Pure White (`#FFFFFF`) | 3-column card grid with pill tags & read time badges |
| **10** | **CTA Banner** | `image (64).png` | Electric Purple (`#5235F6`) | Centered display typography + white pill button |
| **11** | **Global Footer** | `image (65).png` | Pitch Black (`#000000`) | 5-column sitemap, brand bio, newsletter pill input |

---

## 📐 Global Design Tokens & Rules

### Container & Layout Tokens
- **Outer Shell Padding:** `px-3 md:px-5 lg:px-8` (hero is inset with `m-2 md:m-3` and `rounded-2xl`)
- **Max Content Width:** `max-w-[83rem]` (`1328px`) centered via `mx-auto`
- **Section Vertical Rhythm:** `py-20 md:py-28 lg:py-32` (`section-gap: 5rem` to `8rem`)
- **Card Border Radius:** `rounded-2xl` (`1rem` / `16px`)
- **Button Pill Radius:** `rounded-full` (`6.25rem` / `100px`)
- **Em-Dash Header Pattern:** `— LABEL` in `font-display uppercase tracking-wider text-xs md:text-sm font-semibold`

### Color Reference
- **Primary Purple:** `#5235F6`
- **Primary Purple Hover:** `#4129D6`
- **Dark Surface (Hero / Cards):** `#0E0E0E`
- **Pure Dark (About / Testimonials / Footer):** `#000000`
- **Light Surface (Cards / FAQ / Clients):** `#F1F1F1`
- **Borders & Dividers:** `#E2E8F0` / `#EBEBEB`
- **Muted Body Text:** `#64748B` / `#787878`
- **Pure White:** `#FFFFFF`

---

## 🔍 Section-by-Section Pixel Blueprint

---

### Section 01: Floating Navbar & Hero
**Reference Image:** `public/home/image (55).png`  
**Target Component:** `src/components/pages/home/hero-section.tsx` & `src/components/layout/navbar.tsx`

#### Visual Structure
1. **Container:**
   - Inset from browser viewport by `0.5rem` (`8px`) on all sides (`m-2 md:m-3 lg:m-4`).
   - `rounded-2xl` (`16px`), `overflow-hidden`, `min-h-[92vh] md:min-h-screen`.
   - Background: Dark moody high-res developer portrait photo + vertical gradient overlay (`linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)`).

2. **Floating Navbar:**
   - `absolute top-0 inset-x-0 z-30 px-6 md:px-12 py-6 flex items-center justify-between`
   - **Brand Logo (Left):** "Saurabh Infosys" / "Flux Studio" in Clash Display Semibold `text-2xl text-white tracking-tight` with a small purple square dot (`size-2 bg-[#5235F6] inline-block ml-1 rounded-[2px]`).
   - **Nav Links (Center):** Projects, Service, About, Blog, Contact, Pages ▾.
     - `text-white/80 hover:text-white text-sm font-medium transition-colors`
   - **Header CTA (Right):** "Start a Project"
     - Pill button: `bg-[#5235F6] hover:bg-[#4129D6] text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all shadow-md active:scale-95`

3. **Hero Main Content (Bottom Left):**
   - Positioned in bottom-left quadrant (`pb-12 md:pb-20 px-6 md:px-12 max-w-2xl`).
   - **Main Headline:**
     - Clash Display Bold, `text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] text-white tracking-tight`.
     - Text: *"We Design Brands That Speak."* (or *"We Build Digital Solutions That Scale."*).
   - **Sub-paragraph:**
     - Manrope, `text-white/80 text-base md:text-lg leading-relaxed mt-6 max-w-xl`.
     - *"We craft thoughtful digital experiences that blend creativity, strategy, and technology — helping brands grow with clarity and purpose."*
   - **Action Button:**
     - Pill: `bg-[#5235F6] hover:bg-[#4129D6] text-white pl-6 pr-2 py-2 rounded-full inline-flex items-center gap-4 mt-8 group cursor-pointer`.
     - Text: *"Get in Touch"* (`text-sm font-medium`).
     - Icon block: White circle (`size-10 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-45`).
     - HugeIcon: `<HugeiconsIcon icon={ArrowRight01Icon} size={18} />`.

4. **Service Providing Widget (Bottom Right):**
   - Positioned in bottom-right quadrant (`pb-12 md:pb-20 px-6 md:px-12 w-full max-w-sm hidden md:flex flex-col`).
   - **Header:** `text-white/70 uppercase text-xs font-bold tracking-widest pb-3 border-b border-white/20`
     - *"SERVICE WE'RE PROVIDING."*
   - **List Items (4 services):**
     - Brand Identity ↗
     - Web Development ↗
     - Web & UI/UX Design ↗
     - Digital Marketing ↗
   - Each item: `py-3.5 border-b border-white/10 flex items-center justify-between text-white text-sm font-medium hover:text-[#5235F6] hover:border-[#5235F6] transition-colors cursor-pointer`.

---

### Section 02: Clients Section
**Reference Image:** `public/home/image (56).png`  
**Target Component:** `src/components/pages/home/clients-section.tsx`

#### Visual Structure
1. **Section Header:**
   - Em-dash label: `— CLIENTS` (`text-xs md:text-sm font-bold tracking-widest text-[#0E0E0E] uppercase mb-4`).
   - Headline / Lead text: `text-lg md:text-xl text-[#475569] font-normal leading-relaxed max-w-4xl`.
   - Text: *"We've had the privilege of collaborating with forward-thinking brands and passionate founders who value design as a catalyst for growth. Each partnership reflects our shared belief that meaningful results come from empathy, transparency, and creative collaboration — not just beautiful visuals."*

2. **Logo Grid (4×2 Layout):**
   - Grid: `grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-12`.
   - Card dimensions: `h-36 md:h-44 rounded-xl bg-[#F1F1F1] flex flex-col justify-between items-center p-4 md:p-6 transition-all hover:shadow-sm hover:scale-[1.01]`.
   - **Card Top:** Client category/name label (`text-[11px] text-[#787878] font-medium tracking-wide`).
   - **Card Center:** Bold brand logo graphic/typography (e.g., Biosynthesis, BuildingBlocks, Boltshift, Capsule, ContrastAI, Constellation, Codecraft_, Chromatools).
   - **Card Bottom:** Year label (`text-[11px] text-[#787878] font-medium`).

---

### Section 03: About Our Agency (Dark Section)
**Reference Image:** `public/home/image (57).png`  
**Target Component:** `src/components/pages/home/about-section.tsx`

#### Visual Structure
1. **Container:**
   - Background: `bg-[#0E0E0E]` (or `#000000`) full-bleed or outer shell.
   - Padding: `py-20 md:py-28 px-6 md:px-12`.
   - Grid: `grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`.

2. **Left Column (Text Story — 5 Cols):**
   - **Headline:** Clash Display Bold, `text-4xl md:text-5xl lg:text-6xl text-white leading-tight uppercase`.
     - *"ABOUT OUR AGENCY"*
   - **Body Text:** Manrope, `text-white/70 text-sm md:text-base leading-relaxed mt-6 max-w-md`.
     - *"At Saurabh Infosys, our story began with a clear purpose — to craft digital solutions and enterprise experiences that connect people and businesses on a deeper level. Driven by curiosity, engineering excellence, and measurable impact."*

3. **Right Column (2×2 Bento Stats Grid — 7 Cols):**
   - Outer wrapper: `rounded-2xl p-2 bg-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 gap-2`.
   - **Card 1 (Top Left — Vibrant Purple Accent):**
     - Background: `bg-[#5235F6]` (`p-8 md:p-10 rounded-xl flex flex-col justify-between min-h-[160px] md:min-h-[190px]`).
     - Number: Clash Display Semibold, `text-5xl md:text-6xl text-white font-bold tracking-tight`. *"320+"*
     - Label: Manrope Medium, `text-white/90 text-sm md:text-base mt-4`. *"Projects Delivered"*
   - **Card 2 (Top Right — Crisp Light Card):**
     - Background: `bg-[#F1F1F1]` (`p-8 md:p-10 rounded-xl flex flex-col justify-between min-h-[160px] md:min-h-[190px]`).
     - Number: Clash Display Semibold, `text-5xl md:text-6xl text-black font-bold tracking-tight`. *"200+"*
     - Label: Manrope Medium, `text-[#475569] text-sm md:text-base mt-4`. *"Satisfied customers"*
   - **Card 3 (Bottom Left — Crisp Light Card):**
     - Background: `bg-[#F1F1F1]` (`p-8 md:p-10 rounded-xl flex flex-col justify-between min-h-[160px] md:min-h-[190px]`).
     - Number: Clash Display Semibold, `text-5xl md:text-6xl text-black font-bold tracking-tight`. *"20+"*
     - Label: Manrope Medium, `text-[#475569] text-sm md:text-base mt-4`. *"Years of Experience"*
   - **Card 4 (Bottom Right — Crisp Light Card):**
     - Background: `bg-[#F1F1F1]` (`p-8 md:p-10 rounded-xl flex flex-col justify-between min-h-[160px] md:min-h-[190px]`).
     - Number: Clash Display Semibold, `text-5xl md:text-6xl text-black font-bold tracking-tight`. *"25+"*
     - Label: Manrope Medium, `text-[#475569] text-sm md:text-base mt-4`. *"Industries Served"*

---

### Section 04: Services Showcase
**Reference Image:** `public/home/image (58).png`  
**Target Component:** `src/components/pages/home/services-section.tsx`

#### Visual Structure
1. **Header Row:**
   - Em-dash header: `— SERVICE` (Clash Display, `text-3xl md:text-4xl font-bold uppercase`).
   - Subtitle: *"We've collaborated with brands and startups around the world who trust our creativity, strategy, and design craftsmanship."* (`max-w-md text-sm text-[#64748B]`).
   - Button (Right): Outlined pill button `border border-black text-black pl-5 pr-2 py-1.5 rounded-full inline-flex items-center gap-3 text-xs font-semibold hover:bg-black hover:text-white transition-all`.
     - Text: *"View All Services"*
     - Icon block: Black circle with white diagonal arrow (`size-7 rounded-full bg-black text-white flex items-center justify-center`).

2. **Numbered Service Rows (Interactive Accordion / Hover Reveal):**
   - 4 horizontal full-width rows with divider lines `border-t border-[#E2E8F0]`.
   - **Row 1:** `1. Brand Identity`
     - Left: Clash Display Semibold `text-xl md:text-2xl text-[#1E293B] hover:text-[#5235F6] cursor-pointer transition-colors`.
     - Right: 2-column bullet list of capabilities:
       - Column A: • Core Identity • Brand Voice • Print & Packaging Design
       - Column B: • Creative Direction • Rebranding
   - **Row 2 (Active / Hover State Demo):** `2. Web Development`
     - Floating image preview: High-fidelity MacBook screen mockup (`w-64 md:w-80 rounded-xl shadow-2xl absolute left-1/3 -translate-y-6 z-20 pointer-events-none transition-all`).
     - Subservices:
       - Column A: • Content Management Systems • E-commerce Development • Wireframing & Prototyping
       - Column B: • User Research & Testing • Web Application Development
   - **Row 3:** `3. Web & UI/UX Design`
     - Subservices: • Navigation Design • User Experience Design • Wireframing & Prototyping | • Landing Page • Design Systems & Guidelines
   - **Row 4:** `4. Digital Marketing`
     - Subservices: • Email Marketing • Social Media Marketing • Content Marketing | • PPC • Paid Advertising & Campaigns

---

### Section 05: Work Process Bento Grid
**Reference Image:** `public/home/image (59).png`  
**Target Component:** `src/components/pages/home/process-section.tsx`

#### Visual Structure
1. **Header:**
   - Em-dash: `— WORK PROCESS` (Clash Display Bold `text-3xl md:text-4xl uppercase`).
   - Description: *"Our process is built around clarity and collaboration — from research to execution, we work closely with clients to turn ideas into impactful design solutions."* (`max-w-xl text-sm text-[#64748B] mt-2`).

2. **Asymmetrical Bento Layout:**
   - `grid grid-cols-1 md:grid-cols-12 gap-4 mt-12`

   - **Card 1: "Discover" (Left Tall Column — 5 Cols):**
     - `md:col-span-5 relative rounded-2xl overflow-hidden min-h-[460px] md:min-h-[540px] flex flex-col justify-end p-6 md:p-8`.
     - Background: Full photo (designer with glasses & red mug at laptop), bottom gradient overlay (`from-black/90 via-black/40 to-transparent`).
     - Title: Clash Display Bold, `text-2xl md:text-3xl text-white`. *"Discover"*
     - Text: Manrope, `text-xs md:text-sm text-white/80 mt-2 leading-relaxed`. *"We begin by deeply understanding your brand, audience, and business objectives. Through research, strategy sessions."*

   - **Right Bento Section (7 Cols):**
     - `md:col-span-7 flex flex-col gap-4`

     - **Card 2: "Define" (Top Wide Card):**
       - `relative rounded-2xl overflow-hidden min-h-[240px] md:min-h-[260px] flex flex-col justify-end p-6 md:p-8`.
       - Background: Office team working around computers, dark gradient overlay.
       - Title: Clash Display Bold, `text-2xl text-white`. *"Define"*
       - Text: `text-xs md:text-sm text-white/80 mt-1`. *"Shaping a clear strategy, creative direction, and roadmap for the project."*

     - **Bottom Row (Split into 2 Equal Cards):**
       - `grid grid-cols-1 sm:grid-cols-2 gap-4`

       - **Card 3: "Design" (Bottom Left):**
         - `relative rounded-2xl overflow-hidden min-h-[240px] md:min-h-[260px] flex flex-col justify-end p-6`.
         - Background: Overhead view of hands sketching prototypes on architectural paper, dark gradient overlay.
         - Title: Clash Display Bold, `text-2xl text-white`. *"Design"*
         - Text: `text-xs text-white/80 mt-1`. *"Transforming ideas into visual experiences with precision, creativity and purpose."*

       - **Card 4: "Deliver" (Bottom Right — Solid Electric Purple):**
         - `rounded-2xl bg-[#5235F6] min-h-[240px] md:min-h-[260px] flex flex-col justify-end p-6 md:p-8`.
         - Title: Clash Display Bold, `text-2xl text-white`. *"Deliver"*
         - Text: `text-xs md:text-sm text-white/90 mt-1 leading-relaxed`. *"Launching, testing, and refining to ensure a seamless, high-performing"*

---

### Section 06: Featured Projects (Staggered Masonry)
**Reference Image:** `public/home/image (60).png`  
**Target Component:** `src/components/pages/home/projects-section.tsx`

#### Visual Structure
1. **Header:**
   - Em-dash: `— Project` (Clash Display, `text-3xl md:text-4xl font-bold`).
   - Description: *"Each project represents a journey — from understanding real user needs to transforming insights into meaningful experiences."*

2. **2-Column Staggered Grid:**
   - `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12`
   - **Column 1 (Left):**
     - **Item 1: Toko**
       - Image: Signboard mockup (`rounded-2xl overflow-hidden relative group aspect-[4/3]`).
       - Floating Badge: Centered translucent circle badge (`size-20 rounded-full bg-black/30 backdrop-blur-md text-white text-[11px] font-medium flex items-center justify-center text-center p-2 leading-tight opacity-0 group-hover:opacity-100 transition-all`). *"View Full Project"*
       - Info: Below image, `flex justify-between items-baseline mt-3`:
         - Left: **Toko** (`font-bold text-base text-black`), below: `Mobile App Design` (`text-xs text-[#787878]`).
         - Right: `2025` (`text-xs font-semibold text-black`).
     - **Item 2: Workspace**
       - Image: MacBook mockup on concrete pedestal (`rounded-2xl overflow-hidden aspect-[4/3] mt-12 md:mt-24`).
       - Info: **Workspace** (`SaaS Website Design`), `2025`.

   - **Column 2 (Right — Shifted Downwards by `mt-12 md:mt-16`):**
     - **Item 3: PacePro**
       - Image: Phone mockup angled on warm wooden surface (`rounded-2xl overflow-hidden aspect-[4/3]`).
       - Info: **PacePro** (`UI UX Design`), `2025`.
     - **Item 4: SODA**
       - Image: Red soda can splash mockup (`rounded-2xl overflow-hidden aspect-[4/3] mt-12 md:mt-24`).
       - Info: **SODA** (`Brand Design`), `2025`.

---

### Section 07: Testimonial Carousel (Dark Section)
**Reference Image:** `public/home/image (61).png`  
**Target Component:** `src/components/pages/home/testimonial-section.tsx`

#### Visual Structure
1. **Container:**
   - Background: `bg-[#0E0E0E]` / `#000000` full width.
   - Padding: `py-20 md:py-28 px-6 md:px-12`.

2. **Header:**
   - Left: `— TESTIMONIAL` (Clash Display, `text-3xl md:text-4xl text-white font-bold`).
   - Right: *"Real feedback from clients who trusted Artificer/Saurabh to design and build their digital experiences."* (`text-white/60 text-sm max-w-sm`).

3. **Horizontal Strip / Slider:**
   - `flex items-center gap-4 mt-12 overflow-x-auto no-scrollbar pb-4`

   - **Card 1 (Static Purple Rating Card):**
     - `w-44 md:w-52 h-72 md:h-80 shrink-0 rounded-2xl bg-[#5235F6] p-6 flex flex-col justify-center items-center text-center`.
     - Rating: Clash Display Bold `text-5xl text-white`. *"4.9"*
     - Review count: `text-white/80 text-xs font-medium mt-2`. *"150+ Reviews"*
     - Stars: 5 white filled stars `flex gap-1 text-white text-xs mt-3`. ★★★★★

   - **Cards 2 through 6 (Client Portrait Cards):**
     - `w-44 md:w-52 h-72 md:h-80 shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer`.
     - Image: Crisp portrait photography filling entire card (`object-cover w-full h-full`).
     - Bottom Overlay (Rest State): `absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white`.
       - Name: `— Sarah Mitchell` (`text-xs font-bold`)
       - Role: `Product Manager, Nova Travel` (`text-[10px] text-white/70`)
     - Hover State: White card slides up covering photo with 5-star rating + quote: *"Working with Saurabh Infosys took our platform to another level. The new design and architecture significantly boosted user retention."*

---

### Section 08: FAQ Accordion
**Reference Image:** `public/home/image (62).png`  
**Target Component:** `src/components/pages/home/faq-section.tsx`

#### Visual Structure
1. **Centered Header:**
   - `— FAQS` (`Clash Display Bold text-3xl md:text-4xl text-center uppercase`).
   - Subtitle: *"All the frequent questions that are asked are here."* (`text-center text-sm text-[#64748B] mt-2 mb-10`).

2. **Accordion Cards Stack:**
   - Container: `max-w-3xl mx-auto flex flex-col gap-3`.

   - **Active Card (Top Card in Purple):**
     - `bg-[#5235F6] text-white rounded-2xl p-6 md:p-8 transition-all`.
     - Question row: `flex justify-between items-center text-base md:text-lg font-bold`.
       - Text: *"How long does a typical project take?"*
       - Icon: Minus `—` icon.
     - Answer block (Expanded): `text-white/90 text-xs md:text-sm mt-4 leading-relaxed max-w-2xl`.
       - *"Project timelines vary depending on scope and complexity, but most projects are completed within 6–12 weeks, including research, design, revisions, and final delivery."*

   - **Inactive Cards (4 Cards in Off-White):**
     - `bg-[#F1F1F1] text-black rounded-2xl p-5 md:p-6 flex justify-between items-center transition-all hover:bg-[#EBEBEB] cursor-pointer`.
     - Question: `text-sm md:text-base font-semibold text-[#0E0E0E]`.
       - *"What services do you offer for digital projects?"*
       - *"What is your pricing model?"*
       - *"How do you handle maintenance and support after launch?"*
     - Icon: Plus `+` icon (`text-black/60`).

---

### Section 09: Latest Blog & Insights
**Reference Image:** `public/home/image (63).png`  
**Target Component:** `src/components/pages/home/blog-section.tsx`

#### Visual Structure
1. **Header Row:**
   - Left: `— BLOG` (`Clash Display Bold text-3xl md:text-4xl uppercase`).
   - Subtitle: *"Stay inspired with our latest thoughts on design, branding, and digital innovation — insights that help shape creative thinking."* (`max-w-md text-sm text-[#64748B]`).
   - Button (Right): Outlined pill button `border border-black text-black pl-5 pr-2 py-1.5 rounded-full inline-flex items-center gap-3 text-xs font-semibold hover:bg-black hover:text-white transition-all`.
     - Text: *"View All Blog"*
     - Icon: Black circle with white diagonal arrow `↗`.

2. **3-Column Article Grid:**
   - `grid grid-cols-1 md:grid-cols-3 gap-6 mt-12`

   - **Card Structure (Repeated for 3 Posts):**
     - **Image Thumbnail:** `aspect-[16/10] rounded-2xl overflow-hidden relative group`:
       - High-fidelity visual (e.g. abstract digital portrait, 3D character, desktop workstation).
       - Floating category badge (Top Right): `absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold`. e.g., *"Insights"*, *"Illustration"*, *"Branding"*.
     - **Post Meta:** Below image, `mt-4 flex flex-col gap-1`:
       - Date: `text-[11px] text-[#787878] font-medium`. e.g., *"June 24, 2026"*
       - Title: Clash Display Bold, `text-base md:text-lg text-black hover:text-[#5235F6] transition-colors leading-snug cursor-pointer`.
       - Excerpt: `text-xs text-[#64748B] line-clamp-2 leading-relaxed`.
       - Bottom Read Time: `inline-block self-start mt-2 px-3 py-1 rounded-full bg-[#EBEBEB] text-black text-[10px] font-semibold`. e.g., *"6 min read"*.

---

### Section 10: CTA Banner
**Reference Image:** `public/home/image (64).png`  
**Target Component:** `src/components/pages/home/cta-section.tsx`

#### Visual Structure
1. **Container:**
   - `w-full bg-[#5235F6] rounded-2xl py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center my-8 md:my-16`.

2. **Typography:**
   - Clash Display Bold, `text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight max-w-4xl leading-[1.1]`.
   - Text: *"Let's Create Something Amazing Together."*

3. **CTA Button (Centered):**
   - White pill button: `bg-white hover:bg-[#F1F1F1] text-black pl-7 pr-2.5 py-2.5 rounded-full inline-flex items-center gap-4 mt-10 transition-all shadow-xl active:scale-95 cursor-pointer`.
   - Label: `text-sm font-bold text-black`. *"Start a Project"*
   - Icon block: Black circle (`size-9 rounded-full bg-black text-white flex items-center justify-center`).
   - HugeIcon: `<HugeiconsIcon icon={ArrowRight01Icon} size={16} />`.

---

### Section 11: Global Footer
**Reference Image:** `public/home/image (65).png`  
**Target Component:** `src/components/layout/footer.tsx`

#### Visual Structure
1. **Container:**
   - Background: `bg-[#000000]` / pitch black.
   - Border radius: `rounded-2xl mx-2 md:mx-4 mb-4`.
   - Padding: `pt-16 md:pt-24 pb-8 px-6 md:px-16`.

2. **Top Navigation Grid (5 Columns):**
   - `grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-white/10 text-xs md:text-sm`.
   - **Col 1:** Home, About, Project, Service, Blog, Career
   - **Col 2:** Project Details, Service Details, Blog Details, Career Details, Contact Us
   - **Col 3:** 404, Changelog, Style Guide, License, Password Protected
   - **Col 4 (Socials):** Facebook, Instagram, LinkedIn, X
   - **Col 5 (Contact Details):**
     - Location: `Toronto, M5H 2N2, Canada` / `Ahmedabad, Gujarat, India`
     - Email: `contact@saurabhinfosys.com`
   - Link styling: `text-white/60 hover:text-white transition-colors block py-1 font-medium`.

3. **Middle Brand & Newsletter Row:**
   - `py-16 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-white/10`.
   - **Left (Brand Identity):**
     - Logo: Clash Display Bold `text-3xl md:text-4xl text-white tracking-tight`. *"Flux Studio."* / *"Saurabh Infosys."*
     - Tagline: `text-white/60 text-xs md:text-sm max-w-sm mt-3 leading-relaxed`.
       - *"Empowering businesses with innovative strategies, & scalable solutions for lasting growth."*
   - **Right (Newsletter):**
     - Heading: `text-white text-base md:text-lg font-bold`. *"Subscribe to our newsletter"*
     - Helper text: `text-white/50 text-xs mt-1 mb-4`. *"Stay up to date with our newest products and design articles."*
     - Input pill container: `flex items-center rounded-full border border-white/20 p-1.5 bg-black max-w-md w-full focus-within:border-[#5235F6] transition-all`.
       - Input field: `bg-transparent text-white placeholder:text-white/40 text-xs md:text-sm px-4 outline-none flex-1`.
       - Submit button: `bg-[#5235F6] hover:bg-[#4129D6] text-white px-6 py-2.5 rounded-full text-xs font-semibold transition-colors cursor-pointer`. *"Subscribe"*

4. **Bottom Copyright Row:**
   - `pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/50 gap-4`.
   - Left: `© Copyright 2026 | Design & Developed By Saurabh Infosys`
   - Right: `Terms & Condition • Privacy Policy` (with hover to white).

---

## 🏗️ Technical Component File Plan

Under the Next.js 16 architecture codified in `AGENTS.md`:

```
src/
├── app/
│   ├── page.tsx                             # Server-only root route, renders <HomePage />
│   └── globals.css                          # Design tokens, fonts, Clash Display @font-face
├── components/
│   ├── pages/
│   │   └── home/
│   │       ├── index.tsx                    # Barrel export: <HomePage />
│   │       ├── hero-section.tsx             # Section 01: Hero + right service widget
│   │       ├── clients-section.tsx          # Section 02: 4x2 client logo grid
│   │       ├── about-section.tsx            # Section 03: Dark about + 2x2 stats bento
│   │       ├── services-section.tsx         # Section 04: Numbered rows + hover mockup
│   │       ├── process-section.tsx          # Section 05: Asymmetric bento grid
│   │       ├── projects-section.tsx         # Section 06: 2-column staggered portfolio
│   │       ├── testimonial-section.tsx      # Section 07: Dark slider with 4.9 card
│   │       ├── faq-section.tsx              # Section 08: Interactive accordion (leaf)
│   │       ├── blog-section.tsx             # Section 09: 3-column article cards
│   │       └── cta-section.tsx              # Section 10: Purple banner + pill button
│   ├── layout/
│   │   ├── navbar.tsx                       # Section 01: Transparent floating header
│   │   ├── footer.tsx                       # Section 11: 5-column dark footer
│   │   └── mobile-menu.tsx                  # Client leaf for mobile navigation drawer
│   ├── shared/
│   │   ├── section-header.tsx               # Reusable em-dash header (— LABEL)
│   │   └── circular-badge.tsx               # Frosted "View Full Project" badge
│   └── ui/
│       ├── button.tsx                       # Primary / Secondary / Tertiary pill button
│       └── card.tsx                         # Surface container with rounded-2xl
```

---

## 🎯 Verification Criteria for Pixel Precision

Before approving the homepage implementation, verify against these checks:

1. **Hero Section (`image 55`):**
   - [ ] Inset card with margin around border
   - [ ] Display headline in Clash Display at ~7rem desktop
   - [ ] Right-hand widget with 4 services and diagonal arrow dividers
   - [ ] Primary button with white circle and HugeIcons diagonal arrow

2. **Clients Grid (`image 56`):**
   - [ ] Em-dash label `— CLIENTS`
   - [ ] 4×2 grid of `#F1F1F1` cards with top title, centered logo, and bottom "2025"

3. **About Section (`image 57`):**
   - [ ] Pitch-black background with white uppercase heading
   - [ ] Top-left stat card is solid purple (`#5235F6`) with "320+ Projects Delivered"
   - [ ] Other 3 cards are off-white with dark typography

4. **Services List (`image 58`):**
   - [ ] Clean numbered list (1–4) with 2-column bullet subservices
   - [ ] Hover reveals floating laptop screen mockup
   - [ ] Outlined pill button "View All Services"

5. **Work Process (`image 59`):**
   - [ ] 3-column bento: tall Discover on left, wide Define top right, split Design + purple Deliver on bottom right

6. **Projects (`image 60`):**
   - [ ] Staggered offset between column 1 and column 2
   - [ ] Frosted circular badges on card hover

7. **Testimonials (`image 61`):**
   - [ ] Dark container with solid purple 4.9 rating card on left
   - [ ] Portrait photograph cards with name tags and hover quotes

8. **FAQs (`image 62`):**
   - [ ] Active question card in solid `#5235F6` with minus icon
   - [ ] Inactive cards in `#F1F1F1` with plus icons

9. **Blog Grid (`image 63`):**
   - [ ] 3 cards with frosted category badges (Insights, Illustration, Branding)
   - [ ] Read time pill badges

10. **CTA Banner (`image 64`):**
    - [ ] Vibrant `#5235F6` background with centered Clash Display headline
    - [ ] White pill button with black circle arrow

11. **Footer (`image 65`):**
    - [ ] 5-column navigation link structure
    - [ ] Brand bio on left, newsletter pill input on right
    - [ ] Copyright and legal links at bottom
