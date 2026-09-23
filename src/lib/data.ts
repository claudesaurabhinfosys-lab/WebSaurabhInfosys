export const COMPANY = {
  name: "Saurabh Infosys",
  tagline: "AI-first software development studio",
  location: "Ahmedabad, Gujarat, India",
  website: "saurabhinfosys.com",
  email: "info@saurabhinfosys.com",
  phone: "+91 8735001217",
  whatsapp: "918735001217",
  stats: {
    clients: "80+",
    projects: "150+",
    years: "4+",
    saasProducts: "3",
    clutchRating: "4.9",
    clutchReviews: "33",
  },
};

export const SERVICES = [
  {
    slug: "ai-automation-services",
    blurb: "Agents, chatbots and voice bots wired into the tools you already run.",
    title: "AI Automation & Agents",
    shortTitle: "AI Automation",
    icon: "🤖",
    description:
      "Custom AI agents, chatbots, voice agents and workflow automation integrated with HubSpot, Salesforce, Slack, WhatsApp and more. Book a free automation audit.",
    features: [
      "Custom AI Agents & Chatbots",
      "AI Voice Agents for Inbound & Outbound Calls",
      "Document & Invoice Processing Automation",
      "Workflow Automation (Zapier, Make, n8n)",
      "Private AI Knowledge Assistants",
      "AI Sales Outreach & Lead Qualification",
    ],
    heroDesc:
      "We design and build custom AI agents that qualify leads, answer customer questions, process documents, and run your business workflows around the clock, connected to the tools you already run on.",
    useCases: [
      { title: "AI Chatbots (Web & WhatsApp)", desc: "Answer questions, qualify leads, book meetings, and sync conversations to CRM 24/7." },
      { title: "AI Voice Agents", desc: "Natural-sounding voice agents handling inbound calls, qualifying leads, and booking appointments." },
      { title: "Document Processing", desc: "Extract data from invoices, POs, and receipts straight into QuickBooks, Xero, or databases." },
      { title: "End-to-End Workflow Automation", desc: "Automate lead routing, onboarding, fulfillment, and approvals across Zapier, Make, and n8n." },
    ],
  },
  {
    slug: "app-development",
    blurb: "Flutter apps and launch-ready MVPs, fixed price, fixed date.",
    title: "App & MVP Development",
    shortTitle: "App Development",
    icon: "📱",
    description:
      "Hire an experienced Flutter and SaaS development team. Launch-ready MVPs in 2 to 4 weeks, plus fixes and scaling for apps built with AI coding tools.",
    features: [
      "Cross-Platform Flutter Mobile Apps (iOS & Android)",
      "Launch-Ready MVPs in 2 to 4 Weeks",
      "AI-Built App Rescue (Lovable, Bolt, Replit, Cursor)",
      "Multi-Tenant SaaS Platform Development",
      "Stripe Subscriptions & Payment Integrations",
      "Clean Architecture with 100% Code & IP Ownership",
    ],
    heroDesc:
      "We build high-performance iOS and Android apps from a single Flutter codebase, ship launch-ready MVPs in 2 to 4 weeks at fixed pricing, and rescue apps built with AI coding tools so they scale cleanly with real users.",
    useCases: [
      { title: "Flutter Mobile Apps", desc: "High-performance iOS and Android apps from a single codebase with Firebase, Stripe, and native feel." },
      { title: "MVP Sprints in 2–4 Weeks", desc: "From idea to a working, launch-ready MVP in weeks at a fixed price to validate with real users." },
      { title: "AI-Built App Rescue", desc: "Audit, bug fixes, security hardening, and restructuring for apps built with Lovable, Bolt, Replit, or Cursor." },
      { title: "Multi-Tenant SaaS Platforms", desc: "SaaS platforms with Stripe billing, role-based access, admin dashboards, and AI capabilities." },
    ],
  },
  {
    slug: "integration-services",
    blurb: "Your CRM, accounting and storefront kept in sync without anyone re-typing.",
    title: "System Integration",
    shortTitle: "System Integration",
    icon: "⚡",
    description:
      "Connect HubSpot, Salesforce, QuickBooks, Xero, Shopify, Slack, Twilio and more. Custom API integrations that eliminate manual data entry between systems.",
    features: [
      "Two-Way CRM Integration (HubSpot, Salesforce, Pipedrive)",
      "Accounting Integration (QuickBooks, Xero, Sage, MYOB)",
      "E-Commerce Automation (Shopify, WooCommerce, Stripe)",
      "Communication APIs (Slack, Teams, Twilio, WhatsApp)",
      "Custom REST & GraphQL API Development",
      "Automated Data Sync & Error Logging",
    ],
    heroDesc:
      "Most growing businesses run on a dozen tools that do not talk to each other. We build integrations that keep your data in sync automatically, so nobody has to copy and paste between apps again.",
    useCases: [
      { title: "CRM Sync", desc: "Two-way sync between your CRM, website forms, billing tools, and customer support desks." },
      { title: "Accounting Automation", desc: "Automate invoice creation, payment reconciliation, and ledger syncing with QuickBooks or Xero." },
      { title: "E-Commerce Pipeline", desc: "Connect storefronts with inventory, fulfillment, logistics, and messaging alerts." },
      { title: "Custom Backends & APIs", desc: "Secure, well-documented APIs built in Laravel, Node.js, or Python connecting legacy systems." },
    ],
  },
  {
    slug: "hire-developers",
    blurb: "Senior engineers who join your standups and ship on your roadmap.",
    title: "Dedicated AI & Dev Teams",
    shortTitle: "Hire Developers",
    icon: "👥",
    description:
      "Hire dedicated AI engineers, Flutter developers and full-stack engineers who work as an extension of your team on your schedule with flexible monthly terms.",
    features: [
      "Dedicated AI & Automation Engineers (LLMs, RAG, Agents)",
      "Senior Flutter Mobile App Developers",
      "Full-Stack Web Developers (React, Next.js, Node, Laravel)",
      "Working Hours Overlapping US, UK & Australian Timezones",
      "Direct Communication via Slack, Teams & Daily Standups",
      "2-Week Trial Period & No Long-Term Lock-In",
    ],
    heroDesc:
      "Scale your development capacity without the delay, overhead, and cost of local hiring. Our engineers integrate into your team, use your tools, attend your standups, and ship on your roadmap.",
    useCases: [
      { title: "AI & Automation Engineers", desc: "Engineers specialized in LLM integration, agentic workflows, RAG systems, and custom bot logic." },
      { title: "Flutter Developers", desc: "Mobile specialists who build, optimize, and maintain iOS and Android applications." },
      { title: "Full-Stack Developers", desc: "Engineers experienced in React, Next.js, Laravel, Node.js, Python, and PostgreSQL." },
    ],
  },
  {
    slug: "white-label-software",
    blurb: "Proven platforms rebranded as yours, hosting and updates included.",
    title: "White-Label Software",
    shortTitle: "White-Label Software",
    icon: "☁️",
    description:
      "License and rebrand ready-made school management, community management, fleet tracking and marketing automation software under your own brand.",
    features: [
      "School Management Platform (SSMS - 20+ Modules)",
      "Community & Property Management Platform (MySociety)",
      "Marketing Automation Platform (MySampark - Auto DM & Multi-Channel)",
      "GPS Fleet Tracking & Telematics (Traqo)",
      "Custom Domain & Branding Deployment",
      "We Handle Hosting, Cloud Infra, Security & Updates",
    ],
    heroDesc:
      "Launch a proven software product without the risk and expense of building from scratch. License our battle-tested platforms, apply your brand, and sell them directly to your clients while we manage the technology.",
    useCases: [
      { title: "School Management ERP", desc: "Full-featured ERP with admissions, attendance, fees, exams, and parent portals." },
      { title: "Property & Community SaaS", desc: "Resident billing, online payments, visitor check-in, and amenity booking." },
      { title: "Marketing Automation SaaS", desc: "Automated social DMs, scheduled campaigns, AI content generation, and unified inboxes." },
      { title: "GPS Fleet Tracking", desc: "Real-time vehicle tracking, geofencing, route history, fuel logs, and telemetry alerts." },
    ],
  },
];

export const SERVICES_HUB = {
  meta: {
    title: "AI Automation Agency & Software Studio | Saurabh Infosys",
    description:
      "AI agents, workflow automation, Flutter apps and MVPs for businesses in the USA, UK, Australia and Singapore. 50+ projects delivered, 4.9★ on Clutch.",
    keywords: [
      "AI automation agency",
      "offshore software development",
      "Flutter app development company",
      "custom AI agents",
      "workflow automation agency",
      "SaaS MVP development",
      "hire offshore developers",
    ],
  },
  hero: {
    title: "AI Automation and Software Development for Growing Businesses Worldwide",
    intro:
      "An AI-first studio for teams in the USA, UK, Australia and Singapore. 50+ projects delivered, 4.9★ on Clutch.",
    cta: "Book a free audit",
  },
  whyWorkWithUs: [
    {
      title: "Agency quality at offshore cost",
      desc: "Senior engineering and design, without local agency rates.",
    },
    {
      title: "Overlap with your working day",
      desc: "Hours that overlap US, UK and Australian business time.",
    },
    {
      title: "You own everything",
      desc: "Full source and IP on delivery. NDA before we start.",
    },
    {
      title: "Clear communication",
      desc: "Weekly demos, a shared board, direct Slack or Teams access.",
    },
    {
      title: "Proven track record",
      desc: "4.9★ on Clutch across 50+ delivered projects.",
    },
  ],
  faqs: [
    {
      question: "How do you work with clients in different time zones?",
      answer:
        "We schedule overlapping hours with your team for calls and reviews, and share updates daily through Slack, Teams or your project tool.",
    },
    {
      question: "Who owns the code and IP?",
      answer:
        "You do. All source code, designs and intellectual property transfer to you, and we sign an NDA before any project discussion.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Projects are priced at a fixed cost per milestone in your currency (USD, GBP, AUD, SGD). Ongoing automation support and dedicated developers are billed monthly.",
    },
    {
      question: "How quickly can we start?",
      answer: "Most projects start within 1 to 2 weeks of scope sign-off.",
    },
  ],
};

/** The four stages every engagement runs through, whatever the service. */
export const SERVICE_PROCESS = [
  {
    badge: "Align",
    number: "01",
    detail: "We agree the number that has to move, the constraints, and the date — in writing.",
  },
  {
    badge: "Architect",
    number: "02",
    detail: "We settle the data model and where it meets the systems you already run.",
  },
  {
    badge: "Build",
    number: "03",
    detail: "Working software every week on a staging link you can open and use.",
  },
  {
    badge: "Validate",
    number: "04",
    detail: "We measure against the number we agreed, then refine on real usage.",
  },
];

export type ServiceDetail = {
  /** two paragraphs for the overview section */
  overview: string[];
  /** the one line on the overview card, beside the CTA */
  note: string;
  faqs: { q: string; a: string }[];
  seo: { title: string; description: string; keywords: string[] };
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "ai-automation-services": {
    overview: [
      "Your team loses hours every week to work a machine could handle: answering repeat questions, updating the CRM, chasing invoices, and copying data between systems.",
      "We design and build custom AI agents that take this work off their plate reliably and securely, connected to the tools you already run on: HubSpot, Salesforce, Slack, WhatsApp, Xero and custom APIs.",
    ],
    note: "Live in 2–3 weeks. Start with a free automation audit.",
    faqs: [
      {
        q: "What AI automation services does Saurabh Infosys offer?",
        a: "We build custom AI chatbots for websites and WhatsApp, voice agents for phone calls, document and invoice extraction pipelines, and end-to-end workflow automations across Zapier, Make, n8n and custom APIs.",
      },
      {
        q: "Can you connect AI agents to our existing CRM and software?",
        a: "Yes. We integrate AI agents directly into HubSpot, Salesforce, Pipedrive, Slack, WhatsApp Business API, QuickBooks, Xero, and custom databases via secure REST APIs and webhooks.",
      },
      {
        q: "How long does an AI automation project take to deploy?",
        a: "Most AI agents and workflow automations go live in 2 to 3 weeks, including rigorous prompt testing, data security verification, documentation, and staff training.",
      },
      {
        q: "How is pricing structured?",
        a: "Projects are priced at a fixed cost per milestone in your currency (USD, GBP, AUD, EUR, or SGD). Ongoing support and maintenance are available on flexible monthly retainers.",
      },
    ],
    seo: {
      title: "AI Automation Services & Custom AI Agents | Saurabh Infosys",
      description:
        "Custom AI agents, chatbots, voice agents and workflow automation integrated with HubSpot, Salesforce, Slack and more. Book a free automation audit.",
      keywords: [
        "AI automation services",
        "AI agent development company",
        "custom AI chatbot development",
        "AI voice agents",
        "workflow automation agency",
        "Zapier integration developer",
        "n8n automation",
      ],
    },
  },

  "app-development": {
    overview: [
      "Whether you are building a consumer mobile app, launching a SaaS startup, or trying to fix an app generated with AI tools, we provide senior engineering without the local agency price tag.",
      "We have shipped Flutter apps and SaaS platforms for clients across the USA, UK, Australia, and Singapore, with 100% source code and intellectual property ownership transferred to you.",
    ],
    note: "Launch-ready MVPs in 2–4 weeks at fixed pricing. Full source code handover.",
    faqs: [
      {
        q: "Why choose Flutter for mobile app development?",
        a: "Flutter allows us to ship high-performance iOS and Android apps from a single codebase, cutting development time and ongoing maintenance costs in half without compromising native performance.",
      },
      {
        q: "What is AI-Built App Rescue?",
        a: "If you built an MVP with AI tools like Lovable, Bolt, Replit, or Cursor and hit walls with bugs, slowness, or security gaps, our senior engineers audit the code, fix core issues, and refactor it into clean, scalable software.",
      },
      {
        q: "Who owns the source code and IP?",
        a: "You own everything. All intellectual property, design assets, and source code transfer to you in full upon delivery, protected by an NDA before kickoff.",
      },
      {
        q: "How fast can you build and launch an MVP?",
        a: "Our AI-accelerated MVP sprints take you from idea to a working, launch-ready application in 2 to 4 weeks at fixed pricing, complete with auth, payments, and admin dashboards.",
      },
    ],
    seo: {
      title: "Offshore Flutter App Development & MVP Development Company",
      description:
        "Hire an experienced Flutter and SaaS development team. Launch-ready MVPs in 2 to 4 weeks, plus fixes for apps built with AI coding tools. Fixed pricing.",
      keywords: [
        "Flutter app development company",
        "MVP development for startups",
        "offshore app development",
        "AI app rescue",
        "SaaS platform development",
        "cross-platform app developers",
      ],
    },
  },

  "integration-services": {
    overview: [
      "Most growing businesses run on a dozen tools that do not talk to each other. We build integrations that keep your data in sync automatically, so nobody has to copy and paste between apps again.",
      "We connect your CRM, accounting, e-commerce and communication tools so data moves between them reliably, backed by automated error handling, webhooks, and custom APIs.",
    ],
    note: "Custom integrations deployed with automated error handling and live monitoring.",
    faqs: [
      {
        q: "Which tools and platforms can you integrate?",
        a: "We integrate CRM tools (HubSpot, Salesforce, Pipedrive), accounting systems (QuickBooks, Xero, Sage, MYOB), e-commerce platforms (Shopify, WooCommerce), messaging apps (Slack, Teams, WhatsApp, Twilio), and custom internal databases.",
      },
      {
        q: "How do you handle API rate limits and sync failures?",
        a: "We build retry queues, rate-limit handlers, and automated alerting so that temporary downtime or rate limits in third-party services never cause data loss.",
      },
      {
        q: "Can you build custom APIs for legacy software?",
        a: "Yes. We build secure, documented REST and GraphQL backends in Laravel, Node.js, and Python that wrap legacy databases and expose clean endpoints.",
      },
    ],
    seo: {
      title: "CRM, Accounting & API Integration Services | Saurabh Infosys",
      description:
        "Connect HubSpot, Salesforce, QuickBooks, Xero, Shopify, Slack and more. Custom API integrations that eliminate manual data entry between systems.",
      keywords: [
        "API integration services",
        "CRM integration services",
        "QuickBooks integration developer",
        "Xero API integration",
        "Shopify integration",
        "custom API developers",
      ],
    },
  },

  "hire-developers": {
    overview: [
      "Scale your development capacity without the delay, overhead, and cost of local hiring. Our developers join your team, use your tools, attend your standups and follow your processes.",
      "Whether you need an AI engineer for LLM agents, a senior Flutter developer, or a full-stack engineer, we provide vetted talent with working hours that overlap with your timezone.",
    ],
    note: "2-week trial period available. Flexible monthly terms with no long-term lock-in.",
    faqs: [
      {
        q: "How does the hiring and onboarding process work?",
        a: "Share your requirements, interview shortlisted developers within 48 hours, begin with a 2-week trial period, and scale your dedicated team up or down on flexible monthly terms.",
      },
      {
        q: "How do you manage communication across time zones?",
        a: "Our developers schedule daily working hours that overlap with US, UK, or Australian business hours, join your Slack or Teams channels, and attend your daily standups.",
      },
      {
        q: "What if a developer is not the right fit?",
        a: "If a developer does not match your team or technical expectations during the trial, we replace them immediately at no additional cost.",
      },
    ],
    seo: {
      title: "Hire Dedicated AI & Flutter Developers | Saurabh Infosys",
      description:
        "Hire dedicated AI engineers, Flutter developers and full-stack developers who work as part of your team. Flexible monthly engagement, no long-term lock-in.",
      keywords: [
        "hire Flutter developers",
        "hire AI developers",
        "offshore development team",
        "dedicated developers India",
        "hire Next.js developers",
        "outsource software engineers",
      ],
    },
  },

  "white-label-software": {
    overview: [
      "Launch a software product without building one. License our proven platforms, rebrand them as your own and sell them to your clients, while we handle development, hosting and updates.",
      "From school ERPs and community management systems to GPS fleet tracking and marketing automation platforms, our white-label SaaS allows agencies to generate recurring software revenue immediately.",
    ],
    note: "Deploy under your own domain and branding in days. We manage hosting and updates.",
    faqs: [
      {
        q: "What platforms are available for white-label licensing?",
        a: "We offer white-label licenses for School Management ERP (SSMS), Community & Property Management (MySociety), Marketing Automation (MySampark), and GPS Fleet Tracking (Traqo).",
      },
      {
        q: "Can we use our own custom domain and branding?",
        a: "Yes. Every white-label deployment runs under your custom domain, with your logo, brand colors, and email sender identities.",
      },
      {
        q: "Who handles technical maintenance and cloud hosting?",
        a: "We manage all server infrastructure, database backups, uptime monitoring, and ongoing security updates so you can focus entirely on sales and customer relationships.",
      },
    ],
    seo: {
      title: "White-Label SaaS Platforms for Agencies | Saurabh Infosys",
      description:
        "License and rebrand ready-made school management, community management, fleet tracking and marketing automation software under your own brand.",
      keywords: [
        "white label SaaS",
        "white label school management software",
        "white label fleet tracking software",
        "white label marketing software",
        "resell SaaS software",
      ],
    },
  },
};

// Aliases for legacy URLs to ensure complete backward compatibility
SERVICE_DETAILS["ai-agents"] = SERVICE_DETAILS["ai-automation-services"];
SERVICE_DETAILS["vibe-coding"] = SERVICE_DETAILS["app-development"];
SERVICE_DETAILS["flutter"] = SERVICE_DETAILS["app-development"];
SERVICE_DETAILS["gps"] = SERVICE_DETAILS["white-label-software"];
SERVICE_DETAILS["saas"] = SERVICE_DETAILS["white-label-software"];
SERVICE_DETAILS["digital-marketing"] = SERVICE_DETAILS["white-label-software"];

export const PRODUCTS = [
  {
    slug: "ssms",
    name: "SSMS",
    fullName: "School Management System",
    url: "https://sms.saurabhinfosys.com",
    tagline: "Complete school operations in one platform",
    price: "₹999/year",
    priceNote: "Launch price — limited time",
    color: "from-blue-600 to-blue-800",
    accentColor: "blue",
    description:
      "A comprehensive school management system covering admissions, attendance, fees, reports, and parent communication.",
    features: [
      "Student Admissions & Profiles",
      "Attendance Management",
      "Fee Collection & Receipts",
      "Exam Results & Report Cards",
      "Parent Communication Portal",
      "Staff & HR Management",
      "Transport Tracking",
      "WhatsApp Notifications",
    ],
    targetUsers: ["Private Schools", "Coaching Institutes", "Tutoring Centers"],
  },
  {
    slug: "mysociety",
    name: "MySociety",
    fullName: "Society Management System",
    url: "https://mysociety.saurabhinfosys.com",
    tagline: "Modern society management for housing complexes",
    price: "₹5/flat/month",
    priceNote: "Per flat per month, billed annually",
    color: "from-green-600 to-green-800",
    accentColor: "green",
    description:
      "End-to-end society management covering maintenance collection, visitor logs, complaints, and resident communication.",
    features: [
      "Maintenance Fee Collection",
      "Visitor Gate Management",
      "Complaint & Helpdesk System",
      "Notice Board & Announcements",
      "Resident Directory",
      "Parking Management",
      "Vendor & AMC Tracking",
      "WhatsApp Alerts",
    ],
    targetUsers: ["Housing Societies", "Apartment Complexes", "Gated Communities"],
  },
  {
    slug: "mysampark",
    name: "MySampark",
    fullName: "Digital Marketing Platform",
    url: "https://mysampark.com",
    tagline: "Reach thousands via WhatsApp, SMS & Email",
    price: "Pay-per-use",
    priceNote: "No monthly fee — pay only for what you send",
    color: "from-purple-600 to-purple-800",
    accentColor: "purple",
    description:
      "A bulk communication platform for WhatsApp, SMS, and email campaigns — built for Indian SMBs and marketing agencies.",
    features: [
      "Bulk WhatsApp Messaging",
      "SMS Campaign Builder",
      "Email Marketing",
      "Contact List Management",
      "Campaign Analytics Dashboard",
      "Template Library",
      "API Access",
      "Reseller Program",
    ],
    targetUsers: ["Marketing Agencies", "SMBs", "E-commerce Businesses"],
  },
];

export interface ClientLogo {
  name: string;
  logo: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Barber Plus", logo: "/images/logos/01.svg" },
  { name: "AI Assist", logo: "/images/logos/02.svg" },
  { name: "Barcode Scanner", logo: "/images/logos/03.svg" },
  { name: "Idool", logo: "/images/logos/04.svg" },
  { name: "FLPL", logo: "/images/logos/05.svg" },
  { name: "EV Connect", logo: "/images/logos/06.svg" },
  { name: "Eco Life", logo: "/images/logos/08.svg" },
  { name: "EPAV", logo: "/images/logos/10.svg" },
  { name: "Doodler", logo: "/images/logos/12 Doodlers.svg" },
  { name: "Waste Management", logo: "/images/logos/13 Waste Management.svg" },
  { name: "Banigi AI", logo: "/images/logos/14 Banigi Ai.svg" },
  { name: "Quick Delivery", logo: "/images/logos/Quick App Nerw 1.svg" },
];

export const CLIENTS = [
  {
    name: "Modern Dental Lab",
    country: "Hong Kong",
    flag: "🇭🇰",
    description: "Flutter mobile app serving 30,000+ customers across 20 countries.",
    category: "Healthcare",
    highlight: "30K+ customers, 20 countries",
  },
  {
    name: "ATCC Australia",
    country: "Australia",
    flag: "🇦🇺",
    description: "Transport compliance software for a 25-year-old industry leader.",
    category: "Transport",
    highlight: "25-year company",
  },
  {
    name: "Curvd by CapriCurves",
    country: "USA",
    flag: "🇺🇸",
    description: "Fitness app live on Play Store and App Store.",
    category: "Health & Fitness",
    highlight: "Live on both stores",
  },
  {
    name: "Digital Retail Display",
    country: "UK",
    flag: "🇬🇧",
    description: "Android TV digital signage app with cloud admin dashboard.",
    category: "Retail Tech",
    highlight: "Digital signage",
  },
];

/** One titled prose block on a case study page, between two images. */
export interface CaseStudySection {
  title: string;
  body: string;
}

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  highlights: string[];

  /* ---- Case study fields, all optional -------------------------------
     /portfolio/<slug> renders whatever is present and drops the row or
     block when it is not. Nothing here is inferred or filled in with a
     placeholder — an empty field means we do not have that fact yet.

     client / location / year / url   extra rows in the spec table
     overview                         the opening statement; falls back
                                      to `description`
     sections                         titled prose between the images
     images                           real project shots, in page order:
                                      hero, then one per slot. Falls back
                                      to the shared placeholder pool.     */
  client?: string;
  location?: string;
  year?: string;
  url?: string;
  overview?: string;
  sections?: CaseStudySection[];
  images?: string[];
  fullCaseStudyImage?: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  { id: 1,  slug: "ai-assist",           title: "AI Assist",            category: "AI",         description: "AI-powered educational platform with live tests, instant results, and personalised study material for students.", tech: ["Flutter", "OpenAI", "Firebase"],      highlights: ["OpenAI-powered personalised study paths", "Live test engine with instant results and explanations", "Progress tracking across subjects and topics", "Adaptive difficulty that adjusts to each student's level"], images: ["/images/work/ai-assist/01.webp", "/images/work/ai-assist/02.webp", "/images/work/ai-assist/03.webp", "/images/work/ai-assist/04.webp"] },
  { id: 2,  slug: "banigi-ai",           title: "Banigi AI",            category: "AI",         description: "AI-powered 3D home and interior design platform that transforms living spaces effortlessly with custom style models, architectural rendering, and smart redesign tools.", tech: ["Next.js", "Python", "3D AI", "Flutter"], highlights: ["Turn room interiors into photorealistic 3D designs with one-click AI precision", "Custom interior mode, style, and intervention level controls", "Exterior, landscape, and residential architectural rendering", "Seamless multi-platform experience across web and mobile apps"], images: ["/images/work/banigi-ai/01.webp", "/images/work/banigi-ai/02.webp", "/images/work/banigi-ai/03.webp", "/images/work/banigi-ai/04.webp"] },
  { id: 3,  slug: "bit-learn",           title: "BitLearn",             category: "Education",  description: "Personalised Web3 and crypto e-learning platform with interactive quizzes, achievement levels, and reward tokens.", tech: ["Flutter", "Firebase", "Node.js"],      highlights: ["Interactive quiz modules with instant feedback", "Gamified progress tracking with streaks and badges", "Crypto fundamentals and smart contract curriculum", "Achievement levels and reward token withdrawals"], images: ["/images/work/bit-learn/01.webp"] },
  { id: 4,  slug: "smart-theory-test",   title: "Smart Theory Test",    category: "Education",  description: "UK driving theory test preparation app with the largest categorised real-question bank, updated to current regulations.", tech: ["Next.js", "PostgreSQL", "Tailwind"], highlights: ["Largest categorised UK driving theory question bank", "Mock test mode with real exam timing and scoring", "Updated to current DVSA regulations and hazard clips", "Weak spot analysis with targeted practice recommendations"] },
  { id: 5,  slug: "curvd",               title: "Curvd",                category: "Health",     description: "Ultimate workouts and custom nutrition planning app designed for CapriCurves community — featuring structured fitness routines, video workouts, and macro nutrition tracking.", tech: ["Flutter", "Node.js", "Firebase", "Stripe"], highlights: ["Daily guided video workout player with interval timer and exercise demonstrations", "Personalized nutrition plans (Vegan, High Protein) with step-by-step recipes", "Community transformation challenges, workout logs, and progress metrics", "Available live on iOS App Store and Google Play Store"], images: ["/images/work/curvd/01.webp", "/images/work/curvd/02.webp", "/images/work/curvd/03.webp", "/images/work/curvd/04.webp"] },
  { id: 6,  slug: "macromate",           title: "MacroMate",            category: "Health",     description: "Nutrition balance companion app with personalised dietary guides, macro tracking, and healthy eating insights.", tech: ["Flutter", "Firebase", "REST API"],    highlights: ["Personalised macro targets based on goals and body data", "Food database with barcode scanner for quick logging", "Weekly nutrition trends and insights dashboard", "AI-generated meal suggestions based on remaining macros"], images: ["/images/work/macromate/01.webp", "/images/work/macromate/02.webp", "/images/work/macromate/03.webp", "/images/work/macromate/04.webp"] },
  { id: 7,  slug: "fit-gate",            title: "Fit Gate",             category: "Health",     description: "Unified multi-gym subscription and fitness club access platform with interactive geo-mapping, multi-tier membership passes, and digital check-in logs.", overview: "Fit Gate is an all-in-one fitness pass and multi-gym access management platform connecting fitness enthusiasts with premium gyms and health clubs across Bahrain. With flexible multi-tier subscription plans (Sapphire, Emerald, and Ruby), members enjoy unified access to partner facilities, interactive map-based gym discovery, facility amenity breakdowns, and seamless QR check-in activity logging with zero long-term single-club lock-in.", tech: ["Flutter", "Node.js", "PostgreSQL", "Google Maps", "Stripe"],   highlights: ["Interactive gym exploration map with real-time location pins and distance metrics across Bahrain", "Unified multi-tier membership passes (Sapphire, Emerald, Ruby) with automated monthly renewal", "Detailed gym profiles showcasing workout photos, operating hours, verified reviews, and amenity checklists", "Digital QR check-in engine and comprehensive member activity logs tracking partner gym attendances"], images: ["/images/work/fit-gate/01.webp", "/images/work/fit-gate/02.webp", "/images/work/fit-gate/03.webp", "/images/work/fit-gate/04.webp"] },
  { id: 8,  slug: "sleepz",              title: "Sleepz",               category: "Health",     description: "Sleep quality tracking and improvement app with AI-powered coaching, sleep score analysis, and habit nudges.", tech: ["Flutter", "Firebase", "ML Kit"],      highlights: ["AI sleep coaching personalised to detected sleep patterns", "Sleep score with nightly trend analysis", "Habit tracking with smart nudges for sleep hygiene", "Integration with wearables for automatic sleep detection"], images: ["/images/work/sleepz/01.webp"] },
  { id: 9,  slug: "cookpedia",           title: "Cookpedia",            category: "Health",     description: "Recipe discovery and meal planning app with ingredient-based search, nutrition info, and weekly meal plans.", tech: ["React Native", "Node.js", "MongoDB"], highlights: ["Ingredient-based recipe search — find recipes from what you have", "Weekly meal planner with automated shopping lists", "Full nutritional breakdown per recipe and serving", "User collections and offline-saved favourites"], images: ["/images/work/cookpedia/01.webp", "/images/work/cookpedia/02.webp", "/images/work/cookpedia/03.webp", "/images/work/cookpedia/04.webp"] },
  { id: 10, slug: "ev-connect",          title: "EV Connect",           category: "Transport",  description: "EV charging station finder with real-time availability updates, navigation, and charging session management.", tech: ["Flutter", "Node.js", "Google Maps"],  highlights: ["Real-time charging station availability across providers", "Turn-by-turn navigation to nearest available charger", "Charging session tracking with cost and duration logs", "Favourite stations and push alerts for availability"], images: ["/images/work/ev-connect/01.webp"] },
  { id: 11, slug: "commute",             title: "Commute",              category: "Transport",  description: "Fuel and journey expense splitter app allowing commuters to create journeys, calculate mileage dues, and split fuel costs with co-travelers via QR scan.", tech: ["Flutter", "Firebase", "Google Maps"], highlights: ["Create and join shared journeys via QR code scan", "Automatic fuel price calculation and dues tracking", "Recent journey history with MPG and route offsets", "Trip expense summaries and co-traveler settlements"], images: ["/images/work/commute/01.webp","/images/work/commute/02.webp","/images/work/commute/03.webp","/images/work/commute/04.webp"] },
  { id: 12, slug: "quick-delivery",      title: "Quick Delivery",       category: "Transport",  description: "On-demand last-mile delivery platform with real-time tracking, driver app, and customer notifications.", tech: ["Flutter", "Node.js", "Google Maps"],  highlights: ["Live order tracking on an interactive map", "Dedicated driver app with optimised route suggestions", "Push notifications at every delivery milestone", "Merchant dashboard for order and driver management"], images: ["/images/work/quick-delivery/01.webp"] },
  { id: 13, slug: "loadbase",            title: "Loadbase",             category: "Transport",  description: "Load management and freight booking platform connecting shippers with truck owners across India.", tech: ["React", "Node.js", "PostgreSQL"],     highlights: ["Load posting and competitive bidding marketplace", "Verified truck owner profiles with ratings and reviews", "Document management for lorry receipts and consignments", "Route planner with distance and estimated freight cost"], images: ["/images/work/loadbase/01.webp"] },
  { id: 14, slug: "ttac",                title: "TTAC",                 category: "Gig",        description: "A cutting-edge job recruitment and vocational talent matching platform connecting skilled professionals with global opportunities through interactive map exploration and seamless application tracking.", tech: ["Flutter", "Node.js", "Firebase", "Google Maps"], highlights: ["Interactive South America map search with geographic job location pins", "Role-tailored vocational matching for specialized careers (pilots, mechanics, designers)", "Comprehensive candidate onboarding and verified credential submission", "Real-time application status tracking, interview scheduling, and direct recruiter chat"], images: ["/images/work/ttac/01.webp", "/images/work/ttac/02.webp", "/images/work/ttac/03.webp", "/images/work/ttac/04.webp"] },
  { id: 15, slug: "vin-solutions",       title: "VIN Solutions",        category: "Transport",  description: "Vehicle identification and dealership management platform with VIN lookup, inventory, and sales tracking.", tech: ["Next.js", "PostgreSQL", "REST API"],  highlights: ["VIN lookup with full vehicle specification and history", "Dealership inventory management with status tracking", "Sales pipeline with lead and deal management", "Custom reporting on inventory turnover and sales performance"] },
  { id: 16, slug: "barber-plus",         title: "Barber Plus",          category: "Gig",        description: "Record keeping and financial management app for barber shops — tracking barber transactions, service packages, commissions, and member deposits.", tech: ["Flutter", "Firebase", "REST API"], highlights: ["Barber transaction logs with deposit and withdrawal tracking", "Package management for haircuts, beard trims, and spa combos", "E-wallet balance and commission breakdown for barbers and shop admin", "Monthly revenue trends, expense overviews, and member history"], images: ["/images/work/barber-plus/01.webp"] },
  { id: 17, slug: "walk-dogs",           title: "Walk Dogs",            category: "Gig",        description: "Decentralized move-to-earn dog walking and pet care platform combining real-time GPS tracking with in-app crypto reward tokens (WLD), digital breed marketplace, and pet inventory.", overview: "Walk Dogs is a gamified Web3 pet care and move-to-earn mobile ecosystem connecting pet owners, verified walkers, and breeders. It combines live GPS walk tracking with in-app crypto reward tokens (WLD), an authenticated digital breed marketplace (Akita Inu, Doberman, Pug, Jack Russell), and multi-pet digital inventory management.", tech: ["Flutter", "Firebase", "Web3 / WLD", "Google Maps", "REST API"],  highlights: ["Move-to-earn GPS walking tracker with real-time route logging and WLD reward distribution", "In-app digital breed marketplace with verifiable rarity tiers (Akita Inu, Doberman, Pug, Jack Russel)", "Digital kennel and pet inventory management with individual energy levels and stats", "Web3 wallet onboarding with MetaMask, Trust Wallet integration, and instant token checkout"], images: ["/images/work/walk-dogs/01.webp", "/images/work/walk-dogs/02.webp", "/images/work/walk-dogs/03.webp", "/images/work/walk-dogs/04.webp"] },
  { id: 18, slug: "instajob",            title: "InstaJob",             category: "Gig",        description: "Instant job matching platform connecting blue-collar workers with short-term and daily wage opportunities.", tech: ["React Native", "Node.js", "PostgreSQL"], highlights: ["Skill-based matching algorithm for instant job placement", "Worker profiles with verified skills and past ratings", "Daily wage tracking and in-app payment disbursement", "Dual rating system for workers and employers"], images: ["/images/work/instajob/01.webp"] },
  { id: 19, slug: "helping-hands",       title: "Helping Hands",        category: "NGO",        description: "Volunteer coordination and community support platform for NGOs — task assignments, tracking, and impact reporting.", tech: ["React", "Firebase", "Tailwind"],      highlights: ["Volunteer task assignment with skill matching", "Real-time task progress tracking and check-ins", "Impact reporting dashboard for donors and leadership", "Community support request management and triage"], images: ["/images/work/helping-hands/01.webp", "/images/work/helping-hands/02.webp", "/images/work/helping-hands/03.webp", "/images/work/helping-hands/04.webp"] },
  { id: 20, slug: "pots",                title: "Points of Tango (POT)", category: "Custom Dev",  description: "Global tango community and event discovery platform connecting dancers, organizers, orchestras, DJs, and instructors with centralized milonga schedules and festival registration.", overview: "Points of Tango (POT) is a worldwide mobile community and event directory designed for the global tango dance scene. It bridges dancers and organizers by providing a centralized hub for discovering international festivals, marathons, and local milongas, managing travel timetables, exploring orchestras and artists, and browsing specialized dancewear and shoe stores.", tech: ["Flutter", "Node.js", "Firebase", "REST API"],     highlights: ["Global tango event discovery for festivals, marathons, milongas, and practicas", "Advanced event filtering by continent, country, date ranges, and open registration", "Interactive community directory for orchestras, musicians, DJs, and taxi dancers", "Dancer profiles with attendee badges, organizing credentials, and event history"] , images: ["/images/work/pots/01.webp", "/images/work/pots/02.webp", "/images/work/pots/03.webp", "/images/work/pots/04.webp"] },
  { id: 21, slug: "volest",              title: "Volest",               category: "Custom Dev",  description: "Forestry calculation and timber estimation application for foresters, researchers, and field analysts — featuring mathematical volume models (Smalian, Huber, Newton), tree parameter logging, and CSV data export.", overview: "Volest is a user-friendly, technological forestry application that solves calculations for students, researchers, foresters, and environmental analysts determining tree and timber volumes using standard volume estimation formulas (Smalian, Huber, and Newton models).", tech: ["Flutter", "Node.js", "Firebase", "CSV Engine"], highlights: ["Tree volume calculation models using Smalian, Huber, and Newton mathematical formulas", "Flexible parameter input (DST, DBH, Dm, Dt, and tree height measurements)", "Bulk CSV data import and export for large-scale forest survey datasets", "Historical calculation log archive with cloud synchronization and report generation"], images: ["/images/work/volest/01.webp", "/images/work/volest/02.webp", "/images/work/volest/03.webp", "/images/work/volest/04.webp"] },
  { id: 22, slug: "retirement-planning", title: "Retirement Planning",  category: "Fintech",    description: "Retirement savings calculator and financial planning tool with scenario modelling and SIP recommendations.", overview: "Retirement Planning Tool App is an intelligent mobile wealth modeling and financial advisory application designed to help individuals calculate their comprehensive retirement expenses, project lifetime corpus growth across customizable life milestones (such as home purchases and children's higher education/marriage), and receive automated monthly SIP recommendations tailored to inflation.", tech: ["Flutter", "Firebase", "Node.js", "Chart Engine", "PDF Engine"],     highlights: ["Inflation-adjusted retirement corpus calculator with dynamic currency selection", "Milestone scenario and life event modeling (Home purchase, Marriage, Healthcare)", "Visual milestone growth bar chart with age-by-age corpus projection (Ages 35–75)", "Automated monthly SIP recommendation engine and instant PDF export"], images: ["/images/work/retirement-planning/01.webp", "/images/work/retirement-planning/02.webp", "/images/work/retirement-planning/03.webp", "/images/work/retirement-planning/04.webp"] },
  { id: 23, slug: "aces",                title: "ACES",                 category: "Custom Dev", description: "Industrial machine maintenance and equipment management platform with checklist history, operator manuals, and risk assessment workflows.", overview: "ACES is a modern industrial record-keeping and equipment management platform designed for heavy machinery operators and maintenance teams. It streamlines daily pre-operation checklists, digital operator manuals, risk assessments, and real-time maintenance verification directly on the shop floor.", tech: ["Flutter", "PostgreSQL", "REST API", "Next.js"],  highlights: ["Machine tagging and equipment profile tracking", "Pre-operation checklists and inspection history", "Maintenance records and scheduled servicing logs", "Digital operator manuals and risk assessment workflows"], images: ["/images/work/aces/01.webp", "/images/work/aces/02.webp", "/images/work/aces/03.webp", "/images/work/aces/04.webp"] },
  { id: 24, slug: "subrate",             title: "Subrate",              category: "Education",  description: "Online learning and micro-task platform where learners earn rewards as they complete daily lessons, social tasks, and educational modules.", tech: ["Flutter", "Node.js", "Firebase"], highlights: ["Daily lesson feed with interactive video learning", "Task-based earning engine with automated wallet payouts", "Multi-tier task verification and completion tracking", "Gamified progress with earnings analytics and milestones"], images: ["/images/work/subrate/01.webp", "/images/work/subrate/02.webp", "/images/work/subrate/03.webp", "/images/work/subrate/04.webp"] },
  { id: 25, slug: "review",              title: "Review",               category: "Custom Dev", description: "Peer and contact review app allowing users to leave verified reviews, rate interactions, earn coupon rewards, and manage their reputation score.", tech: ["React Native", "Node.js", "Firebase"], highlights: ["Contact-based review system with star ratings", "Reward coupons and redemption points for helpful reviews", "User reputation score and verified feedback history", "Special message requests and notification delivery"], images: ["/images/work/review/01.webp"] },
  { id: 26, slug: "wms",                 title: "WMS",                  category: "Custom Dev",  description: "Warehouse management system with barcode scanning, inventory tracking, pick-and-pack workflows, and dispatch management.", tech: ["React", "Node.js", "PostgreSQL"],   highlights: ["Barcode-driven stock receiving and dispatch workflows", "Pick-and-pack task management with operator assignment", "Real-time inventory levels with low-stock alerts", "Integration with e-commerce platforms for order sync"], images: ["/images/work/wms/01.webp"] },
  { id: 27, slug: "barcode-scanner",     title: "Barcode Scanner",      category: "Custom Dev",  description: "Mobile barcode scanning solution for retail and warehouse inventory management with real-time stock updates.", tech: ["Flutter", "REST API", "Firebase"],    highlights: ["High-speed barcode scanning via native device camera", "Instant stock level updates on every scan", "Offline mode with automatic sync on reconnection", "Multi-location inventory support with transfer tracking"], images: ["/images/work/barcode-scanner/01.webp", "/images/work/barcode-scanner/02.webp", "/images/work/barcode-scanner/03.webp", "/images/work/barcode-scanner/04.webp"] },
  { id: 28, slug: "formwork",            title: "Formwork",             category: "Custom Dev",  description: "Construction management and field reporting software with RFI workflows, technical submissions, drawings, RAMS, and site daily logs.", tech: ["Flutter", "Node.js", "PostgreSQL"], highlights: ["RFI (Request for Information) creation, assignment, and status tracking", "Technical submissions, drawing registers, and induction management", "RAMS (Risk Assessment & Method Statement) and non-conformance logs", "Site daily logs, snagging lists, and photo attachment workflows"], images: ["/images/work/formwork/01.webp", "/images/work/formwork/02.webp", "/images/work/formwork/03.webp", "/images/work/formwork/04.webp"] },
  { id: 29, slug: "doodler",             title: "Doodler",              category: "Custom Dev",  description: "Creative digital drawing and sketching application with layers, brushes, and cloud sync for artists.", tech: ["Flutter", "Firebase", "Canvas API"],   highlights: ["Multi-layer canvas with blend modes and opacity control", "Custom brush library with pressure sensitivity support", "Cloud sync to access artwork across all devices", "Export in PNG, SVG, and PDF with resolution options"] },
  { id: 30, slug: "knock-knock",         title: "Knoc Knoc",            category: "Gig",        description: "On-demand local services marketplace connecting customers with verified providers for home care, post-natal, car servicing, and lifestyle appointments.", tech: ["Flutter", "Firebase", "Node.js"],      highlights: ["Multi-category service discovery with transparent pricing", "Real-time provider booking and calendar scheduling", "Order progress tracking and customer reviews", "Secure in-app booking and checkout flow"], images: ["/images/work/knock-knock/01.webp", "/images/work/knock-knock/02.webp", "/images/work/knock-knock/03.webp", "/images/work/knock-knock/04.webp"] },
  { id: 31, slug: "panapa",              title: "Panapa",               category: "Custom Dev",  description: "Social connection and local networking platform built for community groups and neighbourhood engagement.", tech: ["React Native", "Node.js", "PostgreSQL"], highlights: ["Hyper-local community groups by neighbourhood and interest", "Local event creation and RSVP management", "Local business directory with reviews", "Anonymous community issue reporting to administrators"], images: ["/images/work/panapa/01.webp"] },
  { id: 32, slug: "riiicycle",           title: "Riiicycle",            category: "Custom Dev",  description: "Sustainable recycling marketplace and rewards app — users earn points for recycling pickups and eco actions.", tech: ["Flutter", "Firebase", "Node.js"],     highlights: ["Doorstep recycling pickup scheduling and tracking", "Points and rewards system for eco-friendly actions", "Personal recycling impact tracker with CO₂ savings", "Community leaderboard to drive neighbourhood engagement"] },
  { id: 33, slug: "changa-po",           title: "Changa Po",            category: "Custom Dev",  description: "Digital mobile adaptation of the traditional Indian strategy board game with 2 to 4 player support, online multiplayer, and smart AI opponent.", tech: ["Flutter", "Firebase", "WebSockets"], highlights: ["Online multiplayer matchmaking and play with friends mode", "Challenging single-player vs AI mode with adjustable difficulty", "Local pass-and-play supporting 2, 3, or 4 players", "Authentic cowrie-shell dice physics and winner animations"], images: ["/images/work/changa-po/01.webp"] },
  { id: 34, slug: "moyabet",             title: "MoyaBet",              category: "Custom Dev",  description: "Sports analytics and multi-tier affiliate platform with real-time performance tracking, player network trees, KYC verification, and wallet payouts.", tech: ["Flutter", "Node.js", "PostgreSQL"], highlights: ["Multi-tier affiliate network tree visualization", "Player KYC verification and automated onboarding workflow", "Real-time performance metrics, volume tracking, and ranks", "Multi-currency wallet with instant refill and withdrawal logs"], images: ["/images/work/moyabet/01.webp"] },
  { id: 35, slug: "ch90",                title: "CH90",                 category: "Custom Dev",  description: "Custom hospitality management system for hotels — reservations, housekeeping, billing, and guest communication.", tech: ["React", "Node.js", "PostgreSQL"],   highlights: ["Room reservation system with availability calendar", "Housekeeping task assignment and completion tracking", "Guest billing with itemised invoice generation", "WhatsApp notifications for booking confirmations and check-ins"] },
  { id: 36, slug: "epav",                title: "EPAV",                 category: "Custom Dev",  description: "Corporate web portal for EPAV (Grupo Emin) showcasing highway preservation solutions, diamond grinding, slab stabilization, and pavement engineering.", tech: ["Next.js", "Tailwind", "REST API"], highlights: ["Interactive showcase of pavement rehabilitation and diamond grinding", "Technical specifications and international standards compliance", "Multi-country service portfolio (Chile, Brazil) with project gallery", "Commercial inquiry and quote request submission workflow"], images: ["/images/work/epav/01.webp"] },
  { id: 37, slug: "vtm",                 title: "VTM Music",            category: "Health",      description: "Relaxation music streaming and sound therapy app providing curated audio programs, binaural beats, and video sessions for wellness and stress relief.", tech: ["Flutter", "Node.js", "Audio Streaming"], highlights: ["Curated relaxation music programs and binaural beats for stress relief", "Custom audio player with waveform seeking, repeat, and favorites", "Video program streaming with categorized health topics", "Personalized session history, ratings, and doctor guidance"], images: ["/images/work/vtm/01.webp", "/images/work/vtm/02.webp", "/images/work/vtm/03.webp", "/images/work/vtm/04.webp"] },
  { id: 38, slug: "flpl",                title: "FLPL",                 category: "Custom Dev",  description: "Custom logistics and fleet planning platform with route optimisation, load matching, and billing integration.", overview: "FLPL (Frigate Logistics) is a comprehensive logistics and fleet management platform built for modern e-commerce delivery networks. It streamlines driver onboarding, digital document compliance, daily geolocation attendance, load dispatching, automated invoicing, and trip transaction settlement.", tech: ["React", "Node.js", "Maps API"],       highlights: ["Intelligent load matching with route optimisation", "Fleet scheduling and vehicle utilisation dashboard", "Automated billing and invoice generation per trip", "Real-time driver communication and status updates"], images: ["/images/work/flpl/01.webp", "/images/work/flpl/02.webp", "/images/work/flpl/03.webp", "/images/work/flpl/04.webp"] },
  { id: 39, slug: "ewd",                 title: "EWD",                  category: "Transport",   description: "An Electronic Work Diary platform that digitises work and rest recording for drivers, transport operators, record keepers, and authorised officers — built to meet NHVR EWD Standards.", tech: ["Flutter", "Laravel"],              highlights: ["Simple driver interface for declaring work and rest periods", "Real-time compliance checks aligned with NHVR fatigue rules", "Intercept mode for authorised officers to quickly review records", "Operator and record keeper dashboards for log management", "Meets NHVR EWD Standards for performance and auditability"] },
  { id: 40, slug: "washry",              title: "Washry",               category: "Custom Dev",  description: "An on-demand laundry and dry-cleaning app that works like Uber Eats for your clothes — connecting users with trusted local cleaners for seamless pickup, cleaning, and doorstep delivery.", tech: ["Flutter", "Laravel"],              highlights: ["Custom hamper creation and item selection before checkout", "On-demand and scheduled pickup booking", "Real-time order tracking from pickup to delivery", "Secure in-app payment and flexible payment options", "Order history and saved preferences for faster reorders"] },
  { id: 41, slug: "washry-vendor",       title: "Washry Vendor",        category: "Custom Dev",  description: "A partner app that connects existing dry-cleaning and laundry businesses to the Washry network — bringing in more customers and handling all logistics without changing daily operations.", tech: ["Flutter", "Laravel"],              highlights: ["Easy order management dashboard for tracking incoming and completed jobs", "Washry Go Drivers handle all pickups and deliveries", "No changes to existing business operations", "Real-time delivery updates and driver logistics integration", "Simple onboarding for low-tech users"] },
  { id: 42, slug: "washry-go",           title: "Washry Go",            category: "Custom Dev",  description: "A gig-driving app built specifically for laundry and dry-cleaning logistics — letting drivers earn flexibly by picking up and delivering orders between customers and Washry's partner cleaners.", tech: ["Flutter", "Laravel"],              highlights: ["Flexible scheduling — no fixed shifts", "Real-time navigation with optimised map routing", "Seamless order acceptance and completion flow", "Transparent per-trip earnings and payout history", "Customer ratings and bonus rewards system"] },
  { id: 43, slug: "exotic-now",          title: "Exotic Now",           category: "Custom Dev",  description: "A premium car rental app that makes booking exotic and ultra-luxury vehicles effortless — with transparent pricing, secure payments, and flexible delivery or pickup options.", tech: ["Flutter", "Laravel"],              highlights: ["Browse exotic and ultra-exotic vehicles with photos and details", "Book by day or month with fully transparent upfront pricing", "100 miles/day included — extra miles at $1 each", "Secure deposit handling and easy refunds", "Home delivery or rental location pickup", "Premium chauffeur service option"] },
  { id: 44, slug: "exotic-now-partner",  title: "Exotic Now Partner",   category: "Custom Dev",  description: "An owner-side app that lets exotic and ultra-luxury car owners safely list their vehicles for rent — with verified renters, secure payouts, and full platform protection.", tech: ["Flutter", "Laravel"],              highlights: ["Quick car listing with photos, videos, and documents", "Flexible rental terms — daily, monthly, or both", "65% owner payout with transparent platform fee", "Renter verification — license, insurance, and admin approval", "Mileage, deposit, and safety policies to protect your vehicle"] },
  { id: 45, slug: "exotics-now-employee",title: "Exotics Now Employee",  category: "Custom Dev",  description: "A staff-facing app built for Exotics Now chauffeurs and employees — providing all the tools needed to deliver a seamless, professional luxury rental experience from pickup to drop-off.", tech: ["Flutter", "Laravel"],              highlights: ["View and accept assigned chauffeur trips", "Instant access to pickup, drop-off, and renter details", "Inspection photo upload at handover and return", "Real-time communication with admins and owners", "Clear trip timelines and status updates"] },
  { id: 46, slug: "edify-easy",          title: "Edify Easy",           category: "Education",   description: "A structured e-learning platform that allows organisations to onboard trainees, deliver learning materials, and track progress — all within a clean, role-based digital environment.", tech: ["React", "Laravel"],                highlights: ["Multi-company setup with role-based access control", "Admin content management — upload and organise training materials", "Trainee dashboard with course access and progress tracking", "Company owner reports and completion overviews", "Clean, intuitive interface for all user roles"] },
  { id: 47, slug: "drd",                 title: "DRD",                  category: "SaaS",        description: "DRD (Digital Retail Display) bridges online convenience with local in-store shopping — letting shoppers discover nearby stores, check real-time stock, and buy instantly, while helping local retailers go digital without any technical expertise.", tech: ["React", "Laravel", "Flutter"],     highlights: ["Location-based store and product discovery", "Real-time inventory visibility across nearby stores", "Fast digital checkout with pickup or delivery options", "Exclusive in-store deals and discounts", "Simple retailer dashboard for product and order management", "Fair revenue-sharing model for local businesses"] },
  { id: 48, slug: "meow-tampines",       title: "Meow Tampines",        category: "Le Meow",  description: "A refined website for Meow Tampines — a luxury hair salon and calm wellness retreat in Singapore where modern hair artistry meets personalised, thoughtful care.", overview: "Meow Tampines is an elevated hair studio and tranquil scalp wellness retreat located in Singapore. Designed to provide a serene sanctuary away from urban rush, the digital portal reflects its aesthetic refinement while allowing guests to explore signature hair spa rituals, creative balayage color transformations, and book personalized stylist sessions.", client: "Meow Tampines", year: "2025", url: "https://www.meowtampines.com/", tech: ["Next.js", "Tailwind CSS", "REST API"], highlights: ["Elegant, brand-aligned editorial design reflecting luxury, calmness, and minimalist beauty", "Signature Hair Spa and organic scalp detoxification service showcase", "Real-time stylist calendar and online appointment reservation system", "Interactive treatment catalog with upfront pricing and hair care styling guides"], images: ["/images/work/meow-tampines/01.webp", "/images/work/meow-tampines/02.webp", "/images/work/meow-tampines/03.webp", "/images/work/meow-tampines/04.webp"] },
  { id: 49, slug: "meowcademy",          title: "Meowcademy",           category: "Le Meow",  description: "A modern tuition centre website for Meowcademy — a Singapore-based small group learning platform offering affordable, high-quality education for children aged 6 to 16 across all levels and subjects.", overview: "Meowcademy is a vibrant learning academy based in Singapore delivering small-group academic tuition and STEM enrichment for primary and secondary students. Built around interactive pedagogy and personalized attention, the platform showcases MOE-aligned curriculum modules, robotics programmes, and seamless class enrolment.", client: "Meowcademy", year: "2025", url: "https://www.meowcademy.com/", tech: ["Next.js", "Laravel", "Tailwind CSS"], highlights: ["MOE syllabus curriculum directory across Primary and Secondary mathematics, science, and languages", "Trial class booking system offering 4 introductory lessons with zero registration charges", "Flexible digital instalment plans via Atome, GrabPay, and direct bank financing", "Hands-on LEGO Spike Prime robotics and coding enrichment course highlights"], images: ["/images/work/meowcademy/01.webp", "/images/work/meowcademy/02.webp", "/images/work/meowcademy/03.webp", "/images/work/meowcademy/04.webp"] },
  { id: 50, slug: "meow-aesthetics",     title: "Meow Aesthetics",      category: "Le Meow",  description: "A beauty and lifestyle website for Meow Aesthetics — a multi-location Singapore salon offering gel nails, lash extensions, facials, slimming, IPL treatments, and sister brand Meow Luxury.", overview: "Meow Aesthetics is Singapore's modern beauty collective operating across multiple prime locations. Offering customized gel nail artistry, lash extensions, advanced facial aesthetics, cryo slimming, and pain-free IPL treatments, the web portal serves as a unified digital boutique seamlessly integrating online booking with sister brand Meow Luxury's curated collections.", client: "Meow Aesthetics", year: "2025", url: "https://www.meowaesthetics.com/", tech: ["Next.js", "Laravel", "Tailwind CSS"], highlights: ["Comprehensive beauty menu covering nails, lash lifts, facials, targeted slimming, and IPL", "Transparent digital pricelist and customizable beauty package bundles", "Multi-branch studio locator with direct instant WhatsApp consultation channels", "Integrated showcase and cross-promotion with sister brand Meow Luxury"], images: ["/images/work/meow-aesthetics/01.webp", "/images/work/meow-aesthetics/02.webp", "/images/work/meow-aesthetics/03.webp", "/images/work/meow-aesthetics/04.webp"] },
  { id: 51, slug: "le-meow",             title: "Le Meow",              category: "Le Meow",  description: "An all-in-one on-demand app that connects users with trusted professionals for home, beauty, and lifestyle services — making booking seamless, secure, and rewarding.", overview: "Le Meow is Singapore's premier lifestyle ecosystem application, seamlessly uniting multiple premium service brands — including Meow Aesthetics (beauty, nails, lash & skin), Meow Renovations (home services & interior revamps), Meowcademy (education & enrichment), SureHand Agency (maids, helper & home care), and Meow Luxury (artisanal jewellery & fashion). With instant in-app appointment scheduling, real-time booking tracking, tiered membership reward perks, and secure digital payments, Le Meow delivers an effortless everyday lifestyle experience for modern consumers across Singapore.", client: "Le Meow", year: "2025", url: "https://lemeow.meowadvancedintelligence.com/", tech: ["Flutter", "Laravel", "Next.js", "Stripe"], highlights: ["One-stop booking for home, beauty, and lifestyle services", "Real-time provider tracking and direct in-app chat", "Secure payments with preferred payment methods", "Le Meow rewards points redeemable for exclusive savings", "Booking history and easy rebooking of favourites", "Verified, trusted professionals with transparent pricing"], images: ["/images/work/le-meow/01.webp", "/images/work/le-meow/02.webp", "/images/work/le-meow/03.webp", "/images/work/le-meow/04.webp"] },
  { id: 53, slug: "map-metrics",         title: "MapMetrics",           category: "Transport",   description: "Drive-to-earn crypto navigation app with real-time turn-by-turn routing, SPT hardware pairing, and token reward wallet.", tech: ["Flutter", "Web3", "Google Maps"], highlights: ["Turn-by-turn map navigation with live traffic updates", "Drive-to-earn cryptocurrency rewards ($MMAPS)", "Bluetooth pairing with SPT hardware devices", "Built-in token wallet and transaction history"], images: ["/images/work/map-metrics/01.webp"] },
  { id: 54, slug: "tap-to-share",        title: "Tap To Share",         category: "Custom Dev",  description: "Digital business card and bio-link profile platform with customizable links, viewer analytics, and instant NFC/QR sharing.", overview: "Tap To Share is an all-in-one digital identity, smart business card, and bio-link platform that empowers professionals and creators to effortlessly share their digital presence with a single tap or scan. Featuring customizable dynamic themes, rich multimedia link modules, and real-time visitor engagement analytics, Tap To Share redefines modern contactless networking and portfolio presentation.", tech: ["React Native", "Node.js", "Firebase", "NFC / QR", "Tailwind CSS"], highlights: ["Custom digital bio page with modular links, photos, video embeds, and socials", "Real-time link click tracking, visitor analytics, and conversion insights", "Instant contactless NFC tap and dynamic QR code profile sharing", "Personalized cover themes, avatar styling, and drag-and-drop link sorting"], images: ["/images/work/tap-to-share/01.webp", "/images/work/tap-to-share/02.webp", "/images/work/tap-to-share/03.webp", "/images/work/tap-to-share/04.webp"] },
  { id: 55, slug: "mworld",              title: "mworld",               category: "Custom Dev",  description: "Professional networking and talent showcase platform connecting vetted creators, entrepreneurs, and specialists with industry opportunities and curated stories.", tech: ["Flutter", "Firebase", "Node.js"], highlights: ["Verified professional directory with category and country filters", "Curated success stories, editorial highlights, and landscape features", "Direct in-app networking and connection requests", "Rich profile customization with portfolio reels and bio links"], images: ["/images/work/mworld/01.webp"] },
  { id: 56, slug: "q-easy",              title: "Q easy",               category: "Custom Dev",  description: "Intuitive site operations and queuing management platform that streamlines vehicle access, site user management, and automated queuing workflows.", tech: ["Next.js", "Flutter", "Node.js"], highlights: ["Centrally oversee and control all aspects of site operations", "Real-time vehicle access and geofence screen management", "Automated site load schedules and completed load summaries", "Custom form screens, alert messages, and active on-site tracking"], images: ["/images/work/q-easy/01.webp", "/images/work/q-easy/02.webp", "/images/work/q-easy/03.webp", "/images/work/q-easy/04.webp"] },
  { id: 57, slug: "edcalibre",           title: "EdCalibre",            category: "Education",   description: "Interactive online learning and classroom gamification platform that transforms children's education through animated video lessons, chapter quizzes, and league leaderboards.", overview: "Where education meets adventure! Our platform offers a dynamic blend of interactive lessons and quizzes, fostering a love for learning in children. With Edcalibre, kids can explore a world of knowledge while unlocking their full potential, all in a safe and engaging online environment.", tech: ["Next.js", "React", "Node.js", "MongoDB", "WebSockets"], highlights: ["Dynamic audio-visual learning paths with interactive lesson modules and video classrooms", "Granular chapter and section score analytics with real-time performance milestones", "Gamified student league leaderboards with achievement levels, badges, and points", "Personalized student profile management with custom learning pace and subscription plans"], images: ["/images/work/edcalibre/01.webp", "/images/work/edcalibre/02.webp", "/images/work/edcalibre/03.webp", "/images/work/edcalibre/04.webp"] },
  { id: 58, slug: "contractor-easy",     title: "Contractor Easy",      category: "Custom Dev",  description: "Subcontractor management and compliance tracking app that simplifies document verification, driver licencing, fleet tracking, and approval workflows.", overview: "Contractor Easy makes managing subcontractors simple and hassle-free. A dedicated mobile application that takes away the stress of keeping up to date with all required subcontractor documents, compliance checks, driver certifications, and fleet management.", tech: ["Flutter", "Firebase", "Node.js"], highlights: ["Centralized subcontractor directory with document and verification status tracking", "Fleet and driver compliance logs with real-time expiry alerts", "TRAI certificate, insurance, and legal document approval workflows", "Digital document upload, expiration monitoring, and instant push notifications"], images: ["/images/work/contractor-easy/01.webp", "/images/work/contractor-easy/02.webp", "/images/work/contractor-easy/03.webp", "/images/work/contractor-easy/04.webp"] },
  { id: 59, slug: "meow-advanced-intelligence", title: "Meow Advanced Intelligence", category: "Le Meow", description: "The Operating System for Everyday Life — uniting anti-scam protection, a verified services marketplace, and an intelligent personal AI assistant.", overview: "Meow Advanced Intelligence (MEOWAI) is an intelligent ecosystem platform designed as the operating system for modern living in Singapore. Uniting proactive anti-scam shield protocols, verified on-demand home and lifestyle services, and conversational personal AI assistants, MEOWAI creates a safe, interconnected digital umbrella for consumers and businesses alike.", client: "Meow Advanced Intelligence", year: "2025", url: "https://meowadvancedintelligence.com/", tech: ["Next.js", "AI / LLM", "Python", "Tailwind CSS", "REST API"], highlights: ["Anti-scam verification engine and fraud protection shield for household transactions", "Unified API hub connecting all Le Meow ecosystem brands under one digital umbrella", "Conversational AI assistant for on-demand booking, task delegation, and concierge support", "Enterprise dashboard for verified partner vetting, real-time dispatch, and analytics"], images: ["/images/work/meow-advanced-intelligence/01.webp", "/images/work/meow-advanced-intelligence/02.webp", "/images/work/meow-advanced-intelligence/03.webp", "/images/work/meow-advanced-intelligence/04.webp"] },
  { id: 60, slug: "meow-renovations",    title: "Meow Renovations",     category: "Le Meow",  description: "Premium HDB painting, artisanal limewash finishes, and architectural curved interior specialists in Singapore with 5-year warranty using Raffles Anti-Mould paint.", overview: "Meow Renovations is Singapore's dedicated interior revamp and painting studio specializing in hotel-quality limewash finishes, curved architectural feature walls, and moisture-resistant home restoration. Offering clear upfront package tiers for HDBs, condos, and landed residences, Meow Renovations elevates living spaces with craftsmanship and peace of mind.", client: "Meow Renovations", year: "2025", url: "https://meowrenovations.com/", tech: ["Next.js", "Tailwind CSS", "Node.js", "REST API"], highlights: ["Curated turnkey interior packages with transparent, upfront pricing for HDB and private homes", "Artisanal limewash textures and precision curved architectural wall designs", "Comprehensive 5-year anti-mould warranty backed by Raffles Anti-Mould paint systems", "Digital colour consultation, quote generation, and instant site measurement booking"], images: ["/images/work/meow-renovations/01.webp", "/images/work/meow-renovations/02.webp", "/images/work/meow-renovations/03.webp", "/images/work/meow-renovations/04.webp"] },
  { id: 61, slug: "surehand-agency",     title: "SureHand Agency",      category: "Le Meow",  description: "Sincere domestic helper and maid agency in Singapore providing transparent matching, certified eldercare & childcare helpers, and long-term aftercare support.", overview: "SureHands Agency is a trusted, MOM-licensed maid agency in Singapore dedicated to bringing sincerity, transparency, and careful compatibility matching to families. From trained infant care and dedicated eldercare companions to general housekeeping, SureHands guides employers with zero hidden costs, video interview arrangements, and dedicated post-placement welfare checks.", client: "SureHands Agency", year: "2025", url: "https://surehandagency.com/", tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"], highlights: ["Verified helper directory from Myanmar and Indonesia with skill certifications and medical clearance", "Smart compatibility matching based on infant care, eldercare, dietary, and language requirements", "Transparent fee breakdown with zero hidden placement deductions or surprise levies", "End-to-end MOM work permit processing, ongoing aftercare, and training documentation"], images: ["/images/work/surehand-agency/01.webp", "/images/work/surehand-agency/02.webp", "/images/work/surehand-agency/03.webp", "/images/work/surehand-agency/04.webp"] },
  { id: 62, slug: "le-destin",           title: "Le Destin",            category: "Le Meow",  description: "Singapore's curated matchmaking and experiential social discovery platform featuring thoughtful profiles, Match Credits, and memorable real-world dates.", overview: "Le Destin redefines modern romance and social connection in Singapore through curated, intentional matchmaking. Moving away from endless swiping, Le Destin combines verified personality profiles, intentional Match Credits, and bespoke real-world date arrangements at exclusive dining and cultural partner venues.", client: "Le Destin", year: "2025", url: "https://ledestin.meowadvancedintelligence.com/", tech: ["Next.js", "Node.js", "Tailwind CSS", "REST API"], highlights: ["Human-curated compatibility matching emphasizing lifestyle values and relationship readiness", "Proprietary Match Credit system encouraging genuine, respectful conversation and intentional meetings", "Exclusive dining and experiential date reservations partnered with premier Singapore venues", "Privacy-first identity verification ensuring an authentic, trusted community environment"], images: ["/images/work/le-destin/01.webp", "/images/work/le-destin/02.webp", "/images/work/le-destin/03.webp", "/images/work/le-destin/04.webp"] },
  { id: 63, slug: "meow-devs",           title: "Meow Devs",            category: "Le Meow",  description: "Specialized software engineering and AI studio building bespoke web apps, mobile solutions, agentic workflows, and high-performance digital platforms.", overview: "Meow Devs is the technology and engineering engine powering the Le Meow ecosystem. As a dedicated software and AI studio based in Singapore, Meow Devs architects scalable cloud backends, fluid cross-platform mobile apps, bespoke generative AI integrations, and high-converting web applications with meticulous design craftsmanship.", client: "Meow Devs", year: "2025", url: "https://meowdevs.meowadvancedintelligence.com/", tech: ["Next.js", "TypeScript", "Python AI", "Tailwind CSS", "PostgreSQL"], highlights: ["Full-lifecycle product engineering from high-fidelity UX prototyping to production deployment", "Bespoke AI agent integration, RAG architectures, and workflow automation systems", "Modern frontend engineering using Next.js, React, and buttery-smooth micro-interactions", "Scalable cloud infrastructure, automated CI/CD pipelines, and high-security compliance"], images: ["/images/work/meow-devs/01.webp", "/images/work/meow-devs/02.webp", "/images/work/meow-devs/03.webp", "/images/work/meow-devs/04.webp"] },
  { id: 64, slug: "meow-luxury",         title: "Meow Luxury",          category: "Le Meow",  description: "Curated luxury shopping portal offering fine gold jewellery, bespoke diamond pieces, and high-end fashion accessories with personalised concierge delivery.", overview: "Meow Luxury is a premier boutique lifestyle destination curating certified 18K/24K solid gold jewellery, bespoke diamond creations, and timeless fashion accessories. Integrated within the Le Meow ecosystem, Meow Luxury provides VIP concierge styling, private consultations, and insured white-glove doorstep delivery.", client: "Meow Luxury", year: "2025", url: "https://luxury.meowadvancedintelligence.com/", tech: ["Next.js", "Tailwind CSS", "Swiper", "REST API"], highlights: ["Curated collection of fine 18K and 24K gold jewellery, bridal pieces, and luxury watches", "Direct VIP concierge service via WhatsApp for bespoke orders and personalized styling recommendations", "Insured, tamper-proof doorstep delivery across Singapore with authenticity guarantees", "Integrated rewards and privileged benefits across the Le Meow service ecosystem"], images: ["/images/work/meow-luxury/01.webp", "/images/work/meow-luxury/02.webp", "/images/work/meow-luxury/03.webp", "/images/work/meow-luxury/04.webp"] },
];

export const PORTFOLIO_CATEGORIES = [
  "All", "Le Meow", "AI", "Education", "Health", "Transport", "Gig", "Fintech", "SaaS", "NGO", "Custom Dev"
];

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPostData {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  isNew: boolean;
  content: ContentBlock[];
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: "fix-lovable-app-not-working",
    title: "My Lovable App Is Broken — How to Fix It (2026 Guide)",
    category: "AI App Fixes",
    date: "2026-05-17",
    readTime: "9 min read",
    excerpt: "Built your app on Lovable but now it's broken, throwing errors, or stuck? This guide covers the most common Lovable app problems — blank screens, Supabase errors, auth failures, broken deploys — and exactly how to fix each one.",
    isNew: true,
    content: [
      { type: "p", text: "Lovable is one of the fastest ways to build a web app in 2026. You describe what you want, the AI builds it, and within hours you have something that looks and works like a real product. Until something breaks." },
      { type: "p", text: "The most common experience: you get 80% of the way there, something stops working, and no matter what you tell the AI, it either makes it worse or goes in circles. This guide covers the most common Lovable app failures and how to fix them — either yourself or by knowing exactly what to ask a developer." },
      { type: "h2", text: "Problem 1: Blank White Screen After Deploy" },
      { type: "p", text: "This is the most common Lovable issue. The app works in the Lovable preview but shows a blank page when you share the link or deploy to your custom domain. The cause is almost always a routing issue — the app uses React Router or similar, and the server is not configured to handle client-side routes." },
      { type: "p", text: "Fix: If you are deploying to Netlify or Vercel, add a _redirects file (Netlify) or vercel.json with rewrites that point all routes to index.html. If you are on a custom server, configure the web server to serve index.html for all paths. This is a one-time server configuration fix, not a code issue." },
      { type: "h2", text: "Problem 2: Supabase Connection Errors" },
      { type: "p", text: "Errors like 'Failed to fetch', '401 Unauthorized', or 'relation does not exist' usually mean one of three things: your Supabase URL or anon key is wrong, your Row Level Security (RLS) policies are blocking the request, or the table the code expects does not exist in your database." },
      { type: "p", text: "Fix: Check your Lovable environment variables — VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY must match exactly what is in Supabase → Project Settings → API. For RLS errors, go to Supabase → Table Editor → your table → RLS policies and add a policy that allows the operation your app is trying to perform." },
      { type: "h2", text: "Problem 3: Auth Not Working / Users Cannot Log In" },
      { type: "p", text: "Common causes: the auth provider is not enabled in Supabase, the redirect URL is not in the allowed list, or email confirmation is required but your app is not handling the confirmation flow. Fix: Supabase Dashboard → Authentication → Providers → enable the providers your app uses. Under URL Configuration, add your app URL to the allowed redirect URLs list." },
      { type: "h2", text: "Problem 4: AI Keeps Making the Same Part Worse" },
      { type: "p", text: "You ask Lovable to fix a bug, it changes something, creates a new bug, you ask it to fix that, it breaks something else. This loop is a sign the AI has lost context of your app architecture. Fix: Start a new Lovable conversation and describe the exact current state — what the app should do, what it is actually doing, and what error appears in the browser console (F12 → Console). Specific error messages get specific fixes. 'It does not work' gets guesses." },
      { type: "h2", text: "Problem 5: App Works in Preview But Not on Your Domain" },
      { type: "p", text: "Environment variables are the usual culprit. In Lovable's preview, your Supabase keys are set. When you deploy elsewhere, those variables are not automatically carried over. Check your deployment platform's environment variable settings and ensure all VITE_ prefixed variables are configured." },
      { type: "h2", text: "When to Get a Developer Involved" },
      { type: "p", text: "If you have been going back and forth with Lovable for more than 2 hours on the same issue, the problem is likely architectural — something the AI built incorrectly from the start that now needs a proper fix. A developer who works with Lovable-exported code can typically resolve these issues in 2 to 4 hours. At Saurabh Infosys, we fix Lovable apps — share your repo and we will diagnose it within 24 hours." },
    ],
  },
  {
    slug: "bolt-app-not-working-fix",
    title: "Bolt.new App Not Working? 10 Common Issues Fixed",
    category: "AI App Fixes",
    date: "2026-05-17",
    readTime: "8 min read",
    excerpt: "Bolt.new app throwing errors, failing to run, or stuck in a loop? Here are the 10 most common Bolt.new problems — package errors, CORS failures, blank screens, database issues — with exact fixes for each.",
    isNew: true,
    content: [
      { type: "p", text: "Bolt.new lets you build full-stack apps in the browser without any local setup. It is genuinely impressive until something breaks — and when it does, you are often staring at an error in a browser-based terminal with limited context for what went wrong. Here are the 10 most common Bolt.new problems and how to fix each one." },
      { type: "h2", text: "1. Package Installation Fails" },
      { type: "p", text: "This usually means a package name is wrong, the version conflicts with another dependency, or the container timed out. Fix: Ask Bolt to use an alternative package or specify a stable older version explicitly — for example, 'use react-router-dom@6.8.0 instead of latest'." },
      { type: "h2", text: "2. Cannot Find Module Errors" },
      { type: "p", text: "Import errors usually mean the file path is wrong, the package was not installed, or an index file is missing. Fix: Tell Bolt the exact error message from the console — it can fix path issues immediately when given the precise text." },
      { type: "h2", text: "3. API Calls Failing with CORS Errors" },
      { type: "p", text: "CORS errors when calling external APIs happen because browser security blocks cross-origin requests. You cannot fix CORS on the client side. Fix: Ask Bolt to create a server-side API route that proxies the external API call. Server-to-server calls bypass CORS entirely." },
      { type: "h2", text: "4. Environment Variables Not Working" },
      { type: "p", text: "In Bolt Vite projects, environment variables must be prefixed with VITE_ and accessed via import.meta.env.VITE_VARIABLE_NAME. Server variables use process.env.VARIABLE_NAME. Using the wrong prefix means the variable is undefined at runtime." },
      { type: "h2", text: "5. App Runs But Shows a Blank Screen" },
      { type: "p", text: "Open the browser console (F12). Blank screens in React apps almost always have a red error in the console — usually an uncaught error in the root component or a null reference error on first render. Copy the error and give it to Bolt." },
      { type: "h2", text: "6. AI Keeps Regenerating the Same File" },
      { type: "p", text: "Bolt sometimes loops on the same file without solving the root problem. Stop and start a fresh message: describe exactly what the app should do, what it currently does, and paste the exact error text from the console." },
      { type: "h2", text: "7. Database Not Persisting Data" },
      { type: "p", text: "Data appears to save but disappears on refresh? Check whether the app is writing to React state instead of actually calling the database. Ask Bolt to add console.log after each database write to confirm the write is reaching the database." },
      { type: "h2", text: "8. Auth Redirecting to Wrong URL" },
      { type: "p", text: "After login, users land on the wrong page. Fix: Add the exact URL of your Bolt app to the allowed redirect URIs in your Supabase auth settings or OAuth provider settings." },
      { type: "h2", text: "9. Build Fails When Deploying" },
      { type: "p", text: "Bolt preview works but production build fails. Check for TypeScript errors that are warnings in dev but errors in build, missing environment variables in the build environment, and case-sensitive import paths (Mac is forgiving, Linux servers are not)." },
      { type: "h2", text: "10. App Works Once Then Breaks Intermittently" },
      { type: "p", text: "Intermittent failures usually mean a race condition — data is used before it has loaded, a missing loading state, or an API rate limit being hit. Ask Bolt to add proper loading and error states to every async operation." },
      { type: "p", text: "If your Bolt.new app is stuck on any of these, we can take the exported code and fix it. Most Bolt app fixes take 2 to 6 hours with a developer at Saurabh Infosys." },
    ],
  },
  {
    slug: "ai-vibe-coding-bugs-fixes",
    title: "15 Most Common AI Vibe Coding Bugs and How to Fix Them",
    category: "AI App Fixes",
    date: "2026-05-18",
    readTime: "11 min read",
    excerpt: "Built your app with Lovable, Bolt, Cursor, or Claude? These are the 15 bugs that appear in almost every AI-generated codebase — security holes, performance killers, and silent failures — and how to fix each one.",
    isNew: true,
    content: [
      { type: "p", text: "AI coding tools are remarkable at generating working code fast. But they have systematic blind spots — patterns they get wrong repeatedly across every tool and every project. After reviewing hundreds of AI-generated codebases, these are the 15 bugs that show up almost every time." },
      { type: "h2", text: "1. No Loading States" },
      { type: "p", text: "AI-generated code fetches data and directly renders it without handling the loading period. Users see blank sections or layout shifts. Fix: Add isLoading state to every async operation and show a spinner or skeleton component while data loads." },
      { type: "h2", text: "2. No Error Handling on API Calls" },
      { type: "p", text: "Fetch calls without try-catch blocks mean any API failure silently breaks the UI. Fix: Wrap every async operation in try-catch and display a user-friendly error message." },
      { type: "h2", text: "3. Secrets in Frontend Code" },
      { type: "p", text: "API keys and credentials hardcoded in React components. Anyone can view these in browser DevTools. Fix: Move all secrets to environment variables. Never put a real API key in frontend code — use a backend proxy for sensitive calls." },
      { type: "h2", text: "4. Missing Input Validation" },
      { type: "p", text: "Forms that submit empty values or accept invalid formats. AI generates the happy path but skips edge cases. Fix: Add validation before every form submission — required fields, email format, number ranges, and string length limits." },
      { type: "h2", text: "5. useEffect with Missing Dependencies" },
      { type: "p", text: "React hooks that run on every render or cause infinite loops because the dependency array is wrong. Fix: Include every variable the effect uses in the dependency array." },
      { type: "h2", text: "6. No Auth Checks on API Routes" },
      { type: "p", text: "Private pages hidden behind frontend checks that are accessible by navigating directly to the URL. Fix: Add server-side authentication checks on every protected API route. Frontend auth is UX, not security." },
      { type: "h2", text: "7. N+1 Database Queries" },
      { type: "p", text: "Fetching a list then making a separate database query for each item. Works with 10 items, collapses at 1000. Fix: Use JOIN queries or batch fetching to retrieve related data in one query." },
      { type: "h2", text: "8. No Pagination" },
      { type: "p", text: "Fetching all records from a table. Works in dev with 20 test records, times out in production with 10,000. Fix: Add LIMIT and OFFSET to all list queries and implement pagination in the UI." },
      { type: "h2", text: "9. Broken Mobile Layout" },
      { type: "p", text: "AI often generates desktop-first layouts that overflow on phones. Fix: Test on mobile immediately after each major layout change. Use relative units and responsive Tailwind prefixes (sm:, md:, lg:)." },
      { type: "h2", text: "10. CORS Not Configured for Production" },
      { type: "p", text: "API calls work in development but fail in production because CORS only allows localhost. Fix: Update backend CORS settings to include your production domain." },
      { type: "h2", text: "11. Images Not Optimised" },
      { type: "p", text: "4MB photos displayed at full resolution make pages painfully slow. Fix: Compress images on upload with sharp or Supabase Storage transformations." },
      { type: "h2", text: "12. No Rate Limiting" },
      { type: "p", text: "API endpoints that accept unlimited requests — a problem the moment anyone discovers your endpoint and hammers it. Fix: Add rate limiting middleware to every external-facing API route." },
      { type: "h2", text: "13. Console.log in Production" },
      { type: "p", text: "Debug logs left in production expose your data structure to anyone with DevTools open. Fix: Remove all console.log calls before deploying." },
      { type: "h2", text: "14. Hardcoded URLs" },
      { type: "p", text: "API URLs hardcoded as 'http://localhost:3000/api'. Works in dev, breaks in production. Fix: Use environment variables for all URLs." },
      { type: "h2", text: "15. No Database Indexes" },
      { type: "p", text: "Queries on columns with no index become full table scans — fast with 100 rows, slow with 100,000. Fix: Add indexes on every column you filter or sort by. In Supabase: Database → Indexes → New Index." },
      { type: "p", text: "If your AI-generated app has several of these issues, a code review from an experienced developer takes 2 to 3 hours and gives you a prioritised fix list. We offer this at Saurabh Infosys." },
    ],
  },
  {
    slug: "supabase-lovable-not-connecting",
    title: "Supabase Not Connecting to Your Lovable App? Full Fix Guide",
    category: "AI App Fixes",
    date: "2026-05-18",
    readTime: "8 min read",
    excerpt: "Supabase errors in your Lovable or Bolt app? This guide fixes every common connection issue — wrong keys, RLS blocking queries, missing tables, auth redirect errors — with step-by-step instructions.",
    isNew: true,
    content: [
      { type: "p", text: "Supabase is the database behind the majority of apps built with Lovable, Bolt, and similar AI tools. It is powerful and free to start — but the connection between your AI-built frontend and Supabase backend has several failure points that are not obvious if you have not seen them before." },
      { type: "h2", text: "Step 1: Verify Your Environment Variables" },
      { type: "p", text: "The first thing to check is always the environment variables. In Lovable, go to Project Settings → Environment Variables and verify that VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are present and correct. Find the correct values in Supabase → Project Settings → API → Project URL and anon/public key." },
      { type: "h2", text: "Error: 401 Unauthorized" },
      { type: "p", text: "The anon key is wrong or missing. Note: there are two keys — the anon/public key (safe for frontend) and the service_role key (never use in frontend, it bypasses all security). Make sure you are using the anon key." },
      { type: "h2", text: "Error: relation does not exist" },
      { type: "p", text: "The table your app is querying does not exist in your database. The AI generated code referencing a table that was never created. Fix: Go to Supabase → Table Editor, check which tables exist, and create any missing tables with the correct columns." },
      { type: "h2", text: "Error: Empty Array (Data Should Exist)" },
      { type: "p", text: "You can see data in the Supabase Table Editor but your app returns empty arrays. This is almost always Row Level Security (RLS). Fix: Supabase → Table Editor → your table → RLS → Add Policy. For testing, add: FOR SELECT TO anon USING (true). For production, scope to authenticated users." },
      { type: "h2", text: "Cannot Insert or Update Data" },
      { type: "p", text: "Insert and update operations need their own RLS policies — a SELECT policy does not cover writes. Add separate INSERT, UPDATE, and DELETE policies for who should be allowed to make those changes." },
      { type: "h2", text: "Auth Redirect Errors After Login" },
      { type: "p", text: "After signing in, users land on an error page. Fix: Supabase → Authentication → URL Configuration → add your production URL and local development URL to both the Site URL and Redirect URLs fields. Supabase only redirects to URLs on this list." },
      { type: "h2", text: "Real-Time Not Working" },
      { type: "p", text: "Supabase real-time requires the table to have real-time enabled. Go to Supabase → Database → Replication → supabase_realtime publication → add your table." },
      { type: "h2", text: "Storage Uploads Failing" },
      { type: "p", text: "Storage has its own access control separate from database RLS. Go to Supabase → Storage → your bucket → Policies and add upload policies. Check that the bucket visibility (public or private) matches your use case." },
      { type: "p", text: "If your app is still not connecting after checking all of these, the issue may be in the generated query code itself. Sharing your code with a developer for a quick review is usually the fastest path to a fix." },
    ],
  },
  {
    slug: "take-lovable-app-to-production",
    title: "Taking Your Lovable App to Production: What AI Gets Wrong",
    category: "AI App Fixes",
    date: "2026-05-19",
    readTime: "9 min read",
    excerpt: "Your Lovable app works in preview — but going to production requires more than clicking deploy. Here is the full checklist: security, performance, domain setup, error monitoring, backups, and everything the AI forgot.",
    isNew: true,
    content: [
      { type: "p", text: "The Lovable preview is not production. It is a fast, forgiving sandbox where rough edges do not matter. Production is where real users find every rough edge simultaneously, where security holes get exploited, and where an app that works for one person can break for a thousand." },
      { type: "p", text: "Here is what you need to set up before your Lovable app is genuinely production-ready." },
      { type: "h2", text: "1. Audit Environment Variables" },
      { type: "p", text: "Export your project and check every file for hardcoded API keys, database credentials, or secrets. Any string that looks like a key or password should be in an environment variable, not in your code. This is the most common security issue in AI-generated apps." },
      { type: "h2", text: "2. Add Error Monitoring" },
      { type: "p", text: "Add Sentry (free tier available) to catch and report JavaScript errors automatically. Without error monitoring, you find out about production crashes when users complain — not before." },
      { type: "h2", text: "3. Review All Supabase RLS Policies" },
      { type: "p", text: "Go through every Supabase table and ask: can an anonymous user read data they should not? Can a logged-in user access another user's data? AI-generated RLS policies are often either too permissive or missing entirely." },
      { type: "h2", text: "4. Custom Domain and SSL" },
      { type: "p", text: "Set up your custom domain, verify SSL is working, and ensure all HTTP traffic redirects to HTTPS. Update your Supabase redirect URLs to your production domain." },
      { type: "h2", text: "5. Performance Check" },
      { type: "p", text: "Run your app through PageSpeed Insights. A score below 70 on mobile means users on slower connections will have a poor experience. Common issues: unoptimised images, no code splitting, synchronous JavaScript loading." },
      { type: "h2", text: "6. Mobile Testing" },
      { type: "p", text: "Test every page on an actual phone. Browsers are forgiving; real phones are not. Check that buttons are large enough to tap, text is readable without zooming, and forms work on a small screen keyboard." },
      { type: "h2", text: "7. Database Backups" },
      { type: "p", text: "Supabase free tier includes daily backups with short retention. For a production app with real user data, enable point-in-time recovery (paid plan) or export regular backups of critical tables." },
      { type: "h2", text: "8. Rate Limiting" },
      { type: "p", text: "Any endpoint that sends emails or calls a paid external API needs rate limiting. A single bot can drain your email credits or exhaust your API quota in minutes without it." },
      { type: "h2", text: "9. Test With Real Users First" },
      { type: "p", text: "Give 3 to 5 people who match your target user a link and watch them use it without guidance. The confusion they show you is your fix list. Launch after addressing the critical blockers." },
      { type: "h2", text: "10. Legal Basics" },
      { type: "p", text: "If your app collects user data, you need a Privacy Policy. If it processes payments, you need Terms of Service. These are legal requirements that AI builders routinely skip." },
      { type: "p", text: "Taking an AI-built app to production properly usually takes one to two days of developer work — reviewing code, setting up infrastructure, and closing security and performance gaps. We handle this at Saurabh Infosys." },
    ],
  },
  {
    slug: "fix-auth-ai-built-app",
    title: "Login and Auth Broken in Your AI-Built App? Fix It Today",
    category: "AI App Fixes",
    date: "2026-05-19",
    readTime: "8 min read",
    excerpt: "Authentication is the most commonly broken feature in Lovable, Bolt, and Cursor apps. This guide fixes login redirects, session issues, OAuth errors, protected route bypasses, and email confirmation failures.",
    isNew: true,
    content: [
      { type: "p", text: "Authentication is one of the most complex features in any web app. AI tools generate auth code that looks correct and often works in simple cases — but breaks in production when users log in on different devices, sessions expire, or OAuth providers enforce strict redirect URL requirements." },
      { type: "h2", text: "Problem: Login Works but User Gets Redirected Back to Login" },
      { type: "p", text: "This is a session persistence issue. The app is not saving the authentication token correctly between page loads. In Supabase apps, this usually means the Supabase client is being recreated on every render instead of being a singleton. Fix: Create the Supabase client once outside any component (in a separate supabase.ts file) and import it everywhere. Never create a new Supabase client inside a component." },
      { type: "h2", text: "Problem: Google or GitHub OAuth Returns an Error" },
      { type: "p", text: "OAuth errors like 'redirect_uri_mismatch' mean the callback URL your app sends does not match what is registered. Fix: Copy the exact callback URL from Supabase → Authentication → Providers → Google → Callback URL and add it to your Google Cloud Console OAuth credentials under Authorised redirect URIs." },
      { type: "h2", text: "Problem: Email Confirmation Link Fails" },
      { type: "p", text: "Users sign up, click the confirmation link, and land on an error. The link is redirecting to localhost or the Lovable preview URL instead of your production domain. Fix: Supabase → Authentication → URL Configuration → update Site URL to your production domain." },
      { type: "h2", text: "Problem: Protected Pages Accessible Without Login" },
      { type: "p", text: "The AI put the auth check in the React component — hiding UI elements if not logged in. But navigating directly to the URL bypasses this entirely. Frontend auth is UX, not security. Fix: Add server-side authentication checks on every API route that returns sensitive data. The backend must verify the user's JWT on every request." },
      { type: "h2", text: "Problem: Session Expires and App Breaks" },
      { type: "p", text: "When a JWT expires, API calls return 401 errors and the app breaks instead of redirecting to login. Fix: Add a Supabase auth state change listener that detects session expiry and redirects to the login page with an appropriate message." },
      { type: "h2", text: "Problem: Multiple Users Seeing Each Other's Data" },
      { type: "p", text: "This is a critical security bug — database queries are not filtering by user ID. Fix: Every query returning user-specific data must include a WHERE user_id filter. In Supabase, implement RLS policies using auth.uid() to automatically scope every query to the current user." },
      { type: "h2", text: "Problem: Logout Does Not Clear the Session" },
      { type: "p", text: "User clicks logout, goes to login page, but clicking back shows the app again. The logout function is only updating local state. Fix: Call supabase.auth.signOut(), clear all local user state, then redirect to login." },
      { type: "p", text: "Authentication bugs are the highest-priority fixes in any app — they either break the experience entirely or create security vulnerabilities. Fix these before adding any new features." },
    ],
  },
  {
    slug: "when-hire-developer-fix-ai-app",
    title: "My Lovable or Bolt App Is Stuck — When to Hire a Real Developer",
    category: "AI App Fixes",
    date: "2026-05-20",
    readTime: "7 min read",
    excerpt: "AI tools are great for getting started but have a clear ceiling. Here are the 6 signs you have hit it, what to hand over to a developer, and what fixing an AI-built app should cost.",
    isNew: true,
    content: [
      { type: "p", text: "AI coding tools genuinely changed what non-developers can build on their own. A startup founder without a technical co-founder can now get a working prototype in a weekend. That is a real shift. But AI tools have a ceiling. Once you hit it, continuing to fight the AI costs more time than hiring a developer for a few hours would." },
      { type: "h2", text: "Sign 1: You Have Been on the Same Bug for More Than 2 Hours" },
      { type: "p", text: "If you have asked the AI to fix the same problem ten different ways and it is still broken, the issue is usually architectural — something built incorrectly from the start that the AI cannot now see or fix. A developer can look at the full picture in minutes." },
      { type: "h2", text: "Sign 2: Fixing One Thing Breaks Something Else Every Time" },
      { type: "p", text: "This is a sign of tight coupling in the code. AI makes a local fix without understanding the wider impact. A developer can refactor the problematic area properly so fixes stay fixed." },
      { type: "h2", text: "Sign 3: You Need Real Payment Processing" },
      { type: "p", text: "Stripe and similar payment systems require proper backend webhook handling, idempotency, error recovery, and security practices that AI tools routinely get wrong. Payment bugs cost real money — get a developer to review your payment integration before going live." },
      { type: "h2", text: "Sign 4: You Are Building Something Regulated" },
      { type: "p", text: "Healthcare, finance, legal, education — industries with compliance requirements need proper data handling, audit trails, and security practices. AI tools are not trained to think about HIPAA, PDPA, GDPR, or PCI-DSS." },
      { type: "h2", text: "Sign 5: You Have Real Users and Real Data" },
      { type: "p", text: "The moment real users start adding data, a security vulnerability becomes a liability. Have a developer review your RLS policies, API authentication, and input validation before real user data enters the system." },
      { type: "h2", text: "Sign 6: Performance Is Noticeably Bad" },
      { type: "p", text: "Pages loading slowly, queries timing out, the app crashing under moderate load — these are engineering problems. An experienced developer can identify the cause in an hour of profiling and fix it in another hour." },
      { type: "h2", text: "What to Hand Over" },
      { type: "p", text: "When you bring in a developer, give them: access to your Lovable or Bolt project (or the exported repository), access to your Supabase project, a clear description of what is broken and what it should do, and any relevant error messages from the browser console or network tab." },
      { type: "h2", text: "What It Should Cost" },
      { type: "p", text: "A focused bug fix or code review from an experienced developer should take 2 to 6 hours. That is significantly less than the days you might spend fighting an AI loop. We work with founders who built on Lovable and Bolt and need a developer to take it the rest of the way — get in touch at Saurabh Infosys." },
    ],
  },
  {
    slug: "stripe-payments-ai-app",
    title: "Stripe Not Working in Your AI-Built App? Step-by-Step Fix",
    category: "AI App Fixes",
    date: "2026-05-20",
    readTime: "9 min read",
    excerpt: "Stripe integration fails in most AI-built apps. This guide covers the correct architecture, fixes payment failures, webhook errors, duplicate orders, and the critical secret key mistake that most Lovable and Bolt apps make.",
    isNew: true,
    content: [
      { type: "p", text: "Stripe is the payment system of choice for most AI-built apps. It has excellent documentation and SDKs for every language. But there are several ways AI tools implement Stripe incorrectly — and payment bugs are not just frustrating, they cost real revenue." },
      { type: "h2", text: "The Biggest Mistake: Secret Key in Frontend Code" },
      { type: "p", text: "The Stripe publishable key (pk_test_ or pk_live_) is safe to use in frontend code. The secret key (sk_test_ or sk_live_) must never be in frontend code. If your app has the secret key in a React component or any JavaScript that runs in the browser, anyone can use it to charge cards, issue refunds, and access your Stripe account. Fix this immediately before anything else." },
      { type: "h2", text: "The Correct Architecture" },
      { type: "p", text: "1) Frontend calls a Supabase Edge Function with the order details. 2) The Edge Function uses the Stripe secret key (stored as a Supabase secret) to create a PaymentIntent. 3) The Edge Function returns the client_secret to the frontend. 4) The frontend uses Stripe.js and the client_secret to complete the payment — without ever seeing the secret key." },
      { type: "h2", text: "Problem: Works in Test Mode, Fails in Production" },
      { type: "p", text: "Check two things: Are you using live keys (pk_live_ and sk_live_) instead of test keys? Did you fully activate your Stripe account — Stripe requires business details before processing live payments. Check Stripe Dashboard → Activations." },
      { type: "h2", text: "Problem: Webhooks Not Being Received" },
      { type: "p", text: "Common causes: the webhook URL is localhost (Stripe cannot reach this — use Stripe CLI for local testing), the webhook secret is wrong (causing signature verification failures), or your server returns a non-200 response. Fix: Stripe Dashboard → Webhooks → your endpoint → Recent deliveries to see exactly what Stripe sent and what your server returned." },
      { type: "h2", text: "Problem: Duplicate Orders" },
      { type: "p", text: "Webhooks can be delivered more than once. If your handler creates a record every time payment_intent.succeeded fires, you get duplicates. Fix: Before creating any record, check whether a record with that payment intent ID already exists. If so, return 200 without creating a duplicate." },
      { type: "h2", text: "Problem: User Paid but Account Was Not Activated" },
      { type: "p", text: "Never rely on the frontend redirect after payment to activate an account. Browser closes, network errors, and navigation away can prevent the redirect. Always use a webhook to activate accounts and fulfil orders — webhooks are reliable, redirects are not." },
      { type: "h2", text: "Test Your Full Payment Flow" },
      { type: "p", text: "Stripe provides test card numbers for every scenario. Use 4242 4242 4242 4242 for success, 4000 0000 0000 0002 for a declined card, and 4000 0027 6000 3184 for 3D Secure authentication. Test all three before going live." },
      { type: "p", text: "If your Stripe integration is generating errors you cannot diagnose, share your Edge Function code and the Stripe Dashboard error logs with a developer. Stripe integration fixes are typically 3 to 5 hours of work." },
    ],
  },
  {
    slug: "emergent-app-not-working",
    title: "Emergent.sh App Not Working? A Developer's Diagnosis Guide",
    category: "AI App Fixes",
    date: "2026-05-21",
    readTime: "7 min read",
    excerpt: "Built your app on Emergent.sh but it is broken, incomplete, or stuck? This guide walks through how to diagnose what went wrong, what is fixable, and how to get your Emergent-built app to a working production state.",
    isNew: true,
    content: [
      { type: "p", text: "Emergent.sh runs a full AI agent loop to plan, build, and test your app autonomously. The results can be impressive. They can also be incomplete, broken in subtle ways, or have parts the AI chose to stub out rather than implement fully." },
      { type: "h2", text: "Step 1: Check What Was Built vs What Was Planned" },
      { type: "p", text: "Emergent generates a plan that sounds complete but often implements only part of it. Look at the agent's output logs — what did it say it would build? Now test each feature. Make a list of what works, what partially works, and what does nothing. This is your fix list." },
      { type: "h2", text: "Step 2: Check the Console for Errors" },
      { type: "p", text: "Open browser DevTools (F12 → Console) and look for red errors. Copy every distinct error and search for it. Most Emergent app errors fall into three categories: missing environment variables, API endpoint errors (404 or 500), and JavaScript runtime errors from undefined values." },
      { type: "h2", text: "Step 3: Check the Network Tab" },
      { type: "p", text: "F12 → Network → filter by Fetch/XHR. Reload the page and look for failed requests (red). Click each failed request and read the response body — this tells you exactly what the backend is returning." },
      { type: "h2", text: "Common Emergent App Problems" },
      { type: "ul", items: [
        "Backend routes that exist in the frontend code but were never implemented in the API",
        "Database tables that are queried but were never created",
        "Authentication flow wired on the frontend but not secured on the backend",
        "File upload UI with no working upload handler",
        "Payment UI not connected to a real payment processor",
      ]},
      { type: "h2", text: "What Is Fixable Without Rewriting" },
      { type: "p", text: "Missing environment variables, incorrect API URLs, missing database tables, and broken routing are quick fixes — typically under 2 hours for a developer. Frontend-backend integration gaps (routes that exist but were not implemented) take 4 to 8 hours depending on complexity." },
      { type: "h2", text: "What Usually Requires a Rewrite" },
      { type: "p", text: "If the AI built the wrong architecture — for example, a multi-tenant app where it treated all data as global — that requires more substantial work. If the authentication system has fundamental security flaws rather than just bugs, a rewrite of that module is often faster than patching." },
      { type: "h2", text: "Export to GitHub First" },
      { type: "p", text: "Before doing anything else, export your Emergent project to a GitHub repository. This gives you a version-controlled codebase that any developer can work with directly, independent of the Emergent platform." },
      { type: "p", text: "Emergent apps that are 70 to 80 percent complete can often be brought to a fully working production state in one to two days of developer work. The AI handles structure and boilerplate; a developer closes the gaps. This is exactly what we do at Saurabh Infosys." },
    ],
  },
  {
    slug: "ai-app-performance-fixes",
    title: "My AI-Built App Is Slow — 8 Performance Fixes That Actually Work",
    category: "AI App Fixes",
    date: "2026-05-21",
    readTime: "8 min read",
    excerpt: "Lovable, Bolt, and Cursor apps often have serious performance problems invisible in development but painful in production. These 8 fixes address the most common causes of slow AI-built apps.",
    isNew: true,
    content: [
      { type: "p", text: "AI tools optimise for correct, readable code — not necessarily performant code. The patterns that make AI-generated code easy to understand are often the same patterns that make it slow at scale. Here are the 8 highest-impact performance fixes for AI-built apps." },
      { type: "h2", text: "Fix 1: Add Database Indexes" },
      { type: "p", text: "This is the single highest-impact fix for most slow apps. If your queries filter by user_id, status, or created_at and those columns have no indexes, every query does a full table scan. Add an index on every column you filter or sort by. In Supabase: Database → Indexes → New Index." },
      { type: "h2", text: "Fix 2: Implement Pagination" },
      { type: "p", text: "Loading all rows from a table is fast with 50 rows and unusable with 5,000. Add LIMIT and OFFSET to every list query and show 20 to 50 items per page with a Load More button. This single change can make a slow app feel instant." },
      { type: "h2", text: "Fix 3: Stop Fetching on Every Render" },
      { type: "p", text: "useEffect with missing or wrong dependencies causes the same data to be fetched repeatedly on every state update and navigation event. Fix: Add correct dependencies to useEffect and consider SWR or React Query for smart caching." },
      { type: "h2", text: "Fix 4: Optimise Images" },
      { type: "p", text: "Unoptimised images are the most common cause of slow page loads. A single 3MB hero image makes your page feel broken on a mobile connection. Compress all images to under 200KB. For user uploads, use Supabase Storage's image transformation API to serve correctly sized versions." },
      { type: "h2", text: "Fix 5: Lazy Load Heavy Components" },
      { type: "p", text: "Large chart libraries, rich text editors, and maps loaded on the initial page load slow everything down even for users who never use those features. Use React.lazy() and Suspense to only load these when actually needed." },
      { type: "h2", text: "Fix 6: Select Only the Columns You Need" },
      { type: "p", text: "Replace select('*') with select('id, name, status') — fetching only the columns your UI actually displays. This reduces the data transferred on every query." },
      { type: "h2", text: "Fix 7: Move Filtering to the Database" },
      { type: "p", text: "If your app fetches a large dataset and then filters it in JavaScript, move that filtering to the SQL query instead. SQL is orders of magnitude faster at filtering and aggregating data than JavaScript running in a browser." },
      { type: "h2", text: "Fix 8: Add a CDN" },
      { type: "p", text: "If your app's static files are served from a single server region, users far from that region experience slow loads. Deploying to Vercel or Netlify automatically puts static assets on a CDN. If you are on a VPS, add Cloudflare in front of it — it is free and makes an immediate difference." },
      { type: "p", text: "Most AI-built apps have at least 3 of these issues. Applying all 8 typically improves load time by 50 to 80 percent. If the app is still slow after these fixes, the issue is in specific query or component architecture and needs a developer to profile and diagnose." },
    ],
  },
  {
    slug: "add-features-lovable-app",
    title: "How to Add Features to Your Lovable App When AI Gets Stuck",
    category: "AI App Fixes",
    date: "2026-05-22",
    readTime: "7 min read",
    excerpt: "Lovable is great for initial builds but struggles with complex additions to existing code. Here are 6 proven strategies for adding features when AI keeps failing — and when to just bring in a developer.",
    isNew: true,
    content: [
      { type: "p", text: "Adding features to an existing Lovable app is harder than starting fresh. The AI has to understand what is already there, avoid breaking it, and integrate the new feature cleanly. It does not always manage this — and the larger and more complex your app gets, the more often the AI struggles." },
      { type: "h2", text: "Strategy 1: Be Extremely Specific" },
      { type: "p", text: "Vague requests get vague results. Instead of 'add a settings page', say 'add a /settings route with a form that lets users update their display name and email, saving changes to the users table in Supabase'. The more specific you are, the less the AI has to guess." },
      { type: "h2", text: "Strategy 2: One Feature at a Time" },
      { type: "p", text: "Asking for multiple features in one prompt almost always produces partial or broken results. Build one thing completely — test it, confirm it works — before asking for the next. This keeps context focused and makes failures easier to isolate." },
      { type: "h2", text: "Strategy 3: Show the AI the Relevant Existing Code" },
      { type: "p", text: "The AI cannot see your entire codebase from a chat message. If the new feature needs to interact with existing code — a new button calling an existing API, a new field writing to an existing table — paste the relevant existing code into your message." },
      { type: "h2", text: "Strategy 4: Describe the Data Flow, Not Just the UI" },
      { type: "p", text: "AI is good at building UI. It is less reliable at correctly wiring up data flows. Be explicit: where does the data come from (which table, which API)? What happens when the user takes an action (what gets saved where)? What should change on screen as a result?" },
      { type: "h2", text: "Strategy 5: Export and Use a Code Editor for Incremental Changes" },
      { type: "p", text: "If you are adding something similar to what already exists — a second form like the first, a second dashboard tab — export your Lovable project to GitHub and make the addition by duplicating and modifying the existing component. This is often faster than AI generation for incremental additions." },
      { type: "h2", text: "Strategy 6: Ask for a Plan Before Code" },
      { type: "p", text: "For complex features, ask Lovable to describe its plan before writing any code. Review it — does it make sense? Does it interact with the right tables and components? Approve or correct the plan before letting it execute. This catches architectural misunderstandings early." },
      { type: "h2", text: "When to Bring in a Developer" },
      { type: "p", text: "If you have tried the same feature addition three times and it keeps breaking existing functionality, the feature requires understanding the full app architecture — something the AI cannot hold in context. A developer can understand the full system, make a targeted addition, and test it properly. Most feature additions we handle at Saurabh Infosys take 2 to 4 hours." },
    ],
  },
  {
    slug: "cursor-ai-code-review-fix",
    title: "Cursor AI Generated Bad Code? How to Review and Fix It",
    category: "AI App Fixes",
    date: "2026-05-22",
    readTime: "8 min read",
    excerpt: "Cursor generates code fast — but fast is not always correct or safe. This guide teaches you how to spot the most common quality and security issues in Cursor-generated code and fix them before they reach production.",
    isNew: true,
    content: [
      { type: "p", text: "Cursor is different from Lovable and Bolt — it works with your existing codebase in a real code editor rather than generating a fresh project. This makes it powerful, but also means it can silently introduce bugs into working code in ways that are harder to spot than a fresh generation." },
      { type: "h2", text: "The Core Risk With Cursor-Generated Code" },
      { type: "p", text: "Cursor generates code that looks plausible and often compiles without errors. Problems tend to emerge at runtime, under edge cases, or in production with real data. Code that passes a quick visual scan can contain security issues, performance problems, or logic errors." },
      { type: "h2", text: "How to Review Cursor Suggestions Before Accepting" },
      { type: "p", text: "Before accepting any non-trivial Cursor suggestion, ask three questions: Does this handle errors — what happens if the API call fails or the input is unexpected? Does this work with real data — test with empty arrays, null values, large datasets, not just the happy path? Is this the simplest approach — simpler code has fewer bugs and is easier to maintain." },
      { type: "h2", text: "Red Flags in Cursor-Generated Code" },
      { type: "ul", items: [
        "any or as any TypeScript casts — hiding type errors rather than fixing them",
        "// TODO: implement this — stubs that look like real implementations",
        "Async functions where async operations inside have no await",
        "console.log statements with user IDs, tokens, or sensitive data",
        "Hardcoded test values or example data that should come from variables",
        "catch(e) {} blocks that silently swallow errors",
      ]},
      { type: "h2", text: "Fix: TypeScript Any Abuse" },
      { type: "p", text: "When Cursor uses as any or : any to silence TypeScript errors, it is hiding a real problem. Do not accept these. Ask Cursor to fix the underlying type issue instead. Silenced TypeScript errors cause runtime crashes." },
      { type: "h2", text: "Fix: Missing Await on Async Calls" },
      { type: "p", text: "If a function calls an async operation without await, it returns a Promise instead of the actual value. The code runs without error but produces wrong results. Search all Cursor-generated code for Supabase calls, fetch() calls, and other async operations — verify every one has await." },
      { type: "h2", text: "Fix: Security Issues" },
      { type: "p", text: "Cursor sometimes generates code that trusts user input without validation, stores sensitive values in localStorage (where any script can read them), or constructs database queries unsafely. These require immediate fixes before production deployment." },
      { type: "h2", text: "When to Get a Second Pair of Eyes" },
      { type: "p", text: "If Cursor generated code for a payment flow, an authentication system, or a feature handling sensitive user data, have an experienced developer review it before going live. The cost of a code review is far less than the cost of a security incident." },
      { type: "p", text: "We offer code reviews for Cursor-generated projects at Saurabh Infosys. Share your repository and specify which parts are AI-generated — we will give you a prioritised issue list within 24 hours." },
    ],
  },


  {
    slug: "google-signin-in-flutter",
    title: "Google Sign-In in Flutter: Step-by-Step Guide (2026)",
    category: "Mobile Development",
    date: "2026-05-01",
    readTime: "7 min read",
    excerpt: "Add Google Sign-In to your Flutter app in under 30 minutes. Complete step-by-step guide covering Firebase setup, SHA-1 configuration, and handling auth state — with working code for Android and iOS.",
    isNew: true,
    content: [
      { type: "p", text: "Google Sign-In is the fastest way to add authentication to a Flutter app. Users tap one button, select their Google account, and they're in — no passwords, no OTP, no friction. This guide walks you through the complete setup for both Android and iOS, including the Firebase configuration that trips up most developers." },
      { type: "h2", text: "What You'll Need" },
      { type: "ul", items: ["Flutter 3.x project (Android + iOS)", "Firebase project (free tier works)", "Google Cloud project (auto-created with Firebase)", "Android Studio or Xcode for platform configuration"] },
      { type: "h2", text: "Step 1 — Set Up Firebase" },
      { type: "p", text: "Go to console.firebase.google.com and create a new project, or select an existing one. Enable Google as a sign-in provider under Authentication → Sign-in method → Google → Enable. Download the google-services.json for Android and GoogleService-Info.plist for iOS." },
      { type: "h2", text: "Step 2 — Add Dependencies" },
      { type: "p", text: "In your pubspec.yaml, add: firebase_core, firebase_auth, and google_sign_in. Run flutter pub get after saving. These three packages handle everything — Firebase initialisation, authentication state, and the Google OAuth flow." },
      { type: "h2", text: "Step 3 — Configure Android (SHA-1 is Critical)" },
      { type: "p", text: "This is where most developers get stuck. Open Android Studio → Gradle panel → your app → Tasks → android → signingReport. Copy the SHA-1 fingerprint and add it to your Firebase project under Project Settings → Your apps → Android app → Add fingerprint. Without this, Google Sign-In silently fails on Android." },
      { type: "h2", text: "Step 4 — Configure iOS" },
      { type: "p", text: "Add your GoogleService-Info.plist to the Xcode project (drag into Runner folder, tick 'Copy if needed'). In Info.plist, add a URL scheme using your REVERSED_CLIENT_ID from the plist file. This is what allows Google's OAuth redirect to return to your app." },
      { type: "h2", text: "Step 5 — Implement the Sign-In Logic" },
      { type: "p", text: "Create a signInWithGoogle function: initialise GoogleSignIn, call signIn() to trigger the account picker, get GoogleSignInAuthentication, create a GoogleAuthProvider credential, and sign in to Firebase with signInWithCredential. Wrap in try-catch for error handling. Listen to authStateChanges stream to reactively update your UI when auth state changes." },
      { type: "h2", text: "Step 6 — Handle Sign-Out" },
      { type: "p", text: "Always sign out from both GoogleSignIn and FirebaseAuth. Calling only FirebaseAuth.signOut() leaves the Google session active, so the next sign-in skips the account picker — which frustrates users who want to switch accounts." },
      { type: "h2", text: "Common Errors and Fixes" },
      { type: "ul", items: ["PlatformException SIGN_IN_FAILED: Missing or incorrect SHA-1 in Firebase console", "ApiException 10: google-services.json is outdated — re-download after adding SHA-1", "iOS redirect fails: REVERSED_CLIENT_ID URL scheme not added to Info.plist", "Null user after sign-in: AuthCredential not passed to signInWithCredential"] },
      { type: "h2", text: "Need Help with Flutter Authentication?" },
      { type: "p", text: "Saurabh Infosys builds Flutter apps for clients across India, UK, and the Gulf. If you're building a consumer app and want authentication, onboarding, and backend integration handled properly, reach out — we typically scope Flutter MVPs in 2 weeks." },
    ],
  },
  {
    slug: "chatgpt-vs-gemini-vs-claude-2026",
    title: "ChatGPT vs Gemini vs Claude: Which AI API is Best for Business in 2026?",
    category: "AI Development",
    date: "2026-05-05",
    readTime: "9 min read",
    excerpt: "GPT-4o, Gemini 2.0, and Claude 3.7 are all excellent — but they're not equal for every use case. We compare cost, context window, coding ability, and real-world performance so you can pick the right AI API for your business.",
    isNew: true,
    content: [
      { type: "p", text: "Three AI providers dominate the enterprise API market in 2026: OpenAI (ChatGPT / GPT-4o), Google (Gemini 2.0 Flash and Pro), and Anthropic (Claude 3.7 Sonnet and Opus). All three are genuinely powerful. All three are production-ready. But they differ significantly in cost, context window, coding performance, and reliability — and choosing the wrong one for your use case costs money and time." },
      { type: "h2", text: "Quick Comparison at a Glance" },
      { type: "ul", items: [
        "GPT-4o (OpenAI): Best all-rounder. Strongest ecosystem, widest plugin support, best for general-purpose AI apps and customer-facing chatbots.",
        "Gemini 2.0 Flash (Google): Cheapest at scale. Fastest response times. Best for high-volume document processing, summarisation, and apps already on Google Cloud.",
        "Claude 3.7 Sonnet (Anthropic): Best for reasoning and long documents. 200K context window. Best for legal, financial, and compliance use cases requiring careful analysis.",
      ]},
      { type: "h2", text: "Cost Comparison (Per Million Tokens)" },
      { type: "p", text: "Gemini 2.0 Flash is the cheapest at approximately $0.075 input / $0.30 output per million tokens. GPT-4o runs around $2.50 input / $10 output. Claude 3.7 Sonnet sits at $3.00 input / $15 output. For high-volume applications processing thousands of documents daily, Gemini can be 30–100x cheaper than GPT-4o for equivalent quality on summarisation tasks." },
      { type: "h2", text: "Context Window — Why It Matters" },
      { type: "p", text: "Claude 3.7 leads with a 200,000 token context window — enough to process entire legal contracts, annual reports, or codebases in a single call. GPT-4o supports 128K tokens. Gemini 2.0 Flash supports up to 1 million tokens but is optimised for shorter interactions. For RAG applications, context window size matters less since you retrieve only relevant chunks — but for whole-document analysis, Claude's 200K window is a genuine advantage." },
      { type: "h2", text: "Coding Performance" },
      { type: "p", text: "Claude 3.7 Sonnet consistently tops coding benchmarks — particularly for multi-file refactoring, debugging complex code, and generating well-structured TypeScript and Python. GPT-4o is a close second and benefits from deep integration with GitHub Copilot. Gemini 2.0 is strong for Google-adjacent tech (Firebase, Google Cloud) but lags in general coding tasks." },
      { type: "h2", text: "Which Should You Choose?" },
      { type: "ul", items: [
        "Customer support chatbot: GPT-4o — best tone control, widest fine-tuning options.",
        "High-volume document processing: Gemini 2.0 Flash — lowest cost, fast throughput.",
        "Legal / financial document analysis: Claude 3.7 — 200K context, best reasoning.",
        "Code generation and AI copilots: Claude 3.7 Sonnet — top coding benchmarks.",
        "WhatsApp bots and voice agents: GPT-4o — best ecosystem, widest integrations.",
        "Indian language support (Hindi, Gujarati): Gemini 2.0 — strongest multilingual support.",
      ]},
      { type: "h2", text: "Our Recommendation for Indian Businesses" },
      { type: "p", text: "For most Indian businesses building their first AI application, GPT-4o is the safest starting point — extensive documentation, the largest developer community, and reliable performance across use cases. If cost is a primary concern and you're processing large volumes, Gemini 2.0 Flash offers serious value. If you're building in legal, finance, or HR — where careful reasoning matters more than speed — Claude 3.7 Sonnet is worth the premium." },
      { type: "p", text: "At Saurabh Infosys, we use all three depending on the project. We help businesses select the right AI provider, build the integration, and deploy AI automation that delivers measurable ROI. If you're evaluating AI for your business, we're happy to share what we've learned across 80+ projects." },
    ],
  },
  {
    slug: "what-is-rag-ai-for-business",
    title: "What is RAG? How Retrieval-Augmented Generation Transforms Business AI",
    category: "AI Development",
    date: "2026-05-08",
    readTime: "8 min read",
    excerpt: "RAG lets AI answer questions using your own business data — not just its training data. Here's how Retrieval-Augmented Generation works, when to use it, and how Indian businesses are deploying it for customer support, sales, and internal tools.",
    isNew: true,
    content: [
      { type: "p", text: "Every business that deploys a generic AI chatbot runs into the same wall: the AI doesn't know anything specific about your company. It can't answer questions about your products, your pricing, your policies, or your internal processes. RAG — Retrieval-Augmented Generation — solves this problem by giving AI access to your own documents, data, and knowledge base at query time." },
      { type: "h2", text: "How RAG Works (Simply Explained)" },
      { type: "p", text: "A RAG system has two parts working together. First, an indexing pipeline: your documents (PDFs, Word files, website pages, database records) are chunked into small pieces and converted into vector embeddings — mathematical representations of meaning — stored in a vector database. Second, a retrieval + generation pipeline: when a user asks a question, the system finds the most relevant document chunks, passes them to the LLM as context, and the LLM generates an answer grounded in that specific content." },
      { type: "h2", text: "RAG vs Fine-Tuning: What's the Difference?" },
      { type: "ul", items: [
        "RAG: Your data stays in a database, retrieved at query time. Easy to update — add a new document and it's immediately searchable. Lower cost. Better for factual, document-based questions.",
        "Fine-tuning: The model is retrained on your data. Knowledge is baked into model weights. Expensive to update. Better for style, tone, and domain-specific language patterns.",
        "For most business use cases — product FAQs, policy lookup, internal knowledge bases — RAG outperforms fine-tuning at a fraction of the cost.",
      ]},
      { type: "h2", text: "Real Business Use Cases" },
      { type: "ul", items: [
        "Customer support bot: Trained on your product manuals, return policies, and FAQs. Answers customer questions 24/7 with accurate, brand-consistent responses.",
        "Sales assistant: Given access to your product catalogue, pricing, and case studies. Helps sales reps answer prospect questions instantly during calls.",
        "HR knowledge base: Employee handbook, leave policies, and onboarding docs indexed. Answers staff queries without HR intervention.",
        "Legal document analysis: Upload contracts or regulations. AI extracts clauses, flags risks, and summarises obligations.",
        "Inventory and operations: Connected to live product databases. Answers 'what's in stock?', 'what's the lead time?', and 'what's the reorder threshold?' in plain English.",
      ]},
      { type: "h2", text: "What You Need to Build a RAG System" },
      { type: "p", text: "A production RAG system needs four components: a document loader and chunker (splits your data into searchable pieces), a vector database (Pinecone, Weaviate, or pgvector work well), an embedding model (converts text to vectors — OpenAI's text-embedding-3-small is reliable and cheap), and an LLM for generation (GPT-4o, Claude, or Gemini). Modern frameworks like LangChain and LlamaIndex handle most of the orchestration." },
      { type: "h2", text: "How Long Does It Take to Build?" },
      { type: "p", text: "A proof-of-concept RAG chatbot for a single document source can be built in 2–3 days. A production-grade system with multiple data sources, access controls, conversation memory, and a web interface typically takes 3–6 weeks depending on data complexity. At Saurabh Infosys, we've built RAG systems for e-commerce catalogues, hospital FAQs, and financial advisory firms — the use case is broad." },
      { type: "h2", text: "Getting Started" },
      { type: "p", text: "The fastest way to evaluate RAG for your business is to run a pilot on a single, well-defined use case — typically your customer support FAQs or product documentation. This gives you a working demo in days, lets you measure accuracy and user satisfaction, and builds stakeholder confidence before a larger rollout. If you'd like help scoping a RAG pilot for your business, get in touch with the team at Saurabh Infosys." },
    ],
  },
  {
    slug: "how-to-build-mvp-2-weeks",
    title: "How to Build an MVP in 2 Weeks: Our Vibe Coding Process Explained",
    category: "AI Development",
    date: "2026-05-12",
    readTime: "7 min read",
    excerpt: "Most startups spend 3–6 months building an MVP that nobody asked for. Here's the AI-accelerated development process we use to ship production-ready apps in 2 weeks — including the exact tools, workflow, and what makes it work.",
    isNew: true,
    content: [
      { type: "p", text: "The traditional software development cycle is broken for early-stage products. Six months of planning, design, and development — followed by the discovery that users actually want something different. Vibe coding, our AI-accelerated development approach, compresses that cycle from months to weeks by using AI for code generation, UI scaffolding, and test writing while keeping experienced developers in control of architecture and product decisions." },
      { type: "h2", text: "What is Vibe Coding?" },
      { type: "p", text: "Vibe coding is a development methodology where AI assistants generate the majority of boilerplate, UI components, API integrations, and routine logic — while human developers focus on architecture, edge cases, and product quality. It's not about replacing developers; it's about eliminating the 60–70% of development time typically spent on predictable, repeatable code. The result: faster shipping, lower cost, and more iteration cycles before your runway runs out." },
      { type: "h2", text: "Our 2-Week MVP Process" },
      { type: "ul", items: [
        "Day 1–2: Discovery and architecture. We map user flows, define the data model, choose the tech stack, and set up the repository and CI/CD pipeline. No code written until the architecture is agreed.",
        "Day 3–5: Core feature development. AI generates UI components, API routes, and database schemas. Developers review, refine, and connect everything. Focus: the single workflow that delivers the primary value.",
        "Day 6–8: Authentication, payments, and integrations. Login, user roles, Stripe or Razorpay, and any third-party APIs the product requires.",
        "Day 9–11: Polish, error handling, and mobile responsiveness. The part AI can't do well on its own — real UX decisions and edge case handling.",
        "Day 12–13: Testing, bug fixes, and deployment. Staging environment, user acceptance testing with the client, and final deployment to production.",
        "Day 14: Handover and documentation. Codebase walkthrough, deployment guide, and a 30-day support period.",
      ]},
      { type: "h2", text: "What Gets Shipped in 2 Weeks" },
      { type: "p", text: "A 2-week MVP is not a prototype. It's a production-ready application with real users in mind: authentication and user management, a core feature set (typically 3–5 user stories), a database with proper schema, a mobile-responsive frontend, deployment on a proper cloud infrastructure, and basic analytics. What it's not: every feature from your product roadmap. Scope discipline is the single biggest factor in whether a 2-week MVP succeeds." },
      { type: "h2", text: "The Tech Stack We Use" },
      { type: "ul", items: [
        "Web apps: Next.js + TypeScript + Tailwind CSS + Supabase (auth + database) + Vercel",
        "Mobile apps: Flutter + Firebase + Riverpod — cross-platform Android and iOS from one codebase",
        "AI features: OpenAI API or Gemini, LangChain for RAG, Pinecone for vector storage",
        "Payments: Razorpay for India, Stripe for international",
        "Background jobs: BullMQ or Cloud Functions depending on complexity",
      ]},
      { type: "h2", text: "Is 2 Weeks Always Realistic?" },
      { type: "p", text: "For a focused MVP with a well-defined scope: yes. The main reasons timelines slip are scope creep (adding features mid-sprint), unclear requirements (decisions made during development instead of before), and integrations with legacy systems (old ERP or proprietary APIs that need custom adaptors). We scope every project during a free 1-hour discovery call before committing to a timeline." },
      { type: "h2", text: "Ready to Ship Your MVP?" },
      { type: "p", text: "Saurabh Infosys has shipped MVPs for founders in India, the UK, Singapore, and the UAE — from AI SaaS platforms to Flutter consumer apps to internal business tools. If you have an idea and want to see it running in production within the month, book a free discovery call. We'll tell you honestly what's achievable in 2 weeks and what needs more time." },
    ],
  },
  // New AI-focused posts
  {
    slug: "google-gemma-4-vs-chatgpt",
    title: "Google Gemma 4 vs ChatGPT: Cost, Privacy & Performance Compared (2026)",
    category: "AI Development",
    date: "2026-04-24",
    readTime: "8 min read",
    excerpt: "Gemma 4 is free, private, and runs on your own servers. ChatGPT costs per token but works instantly via API. We compare cost, data privacy, speed, and accuracy — with real examples — so you can pick the right AI model for your business.",
    isNew: true,
    content: [
      { type: "p", text: "The AI model landscape has never moved faster. Google's Gemma 4 — the latest in its open-weight model series — and OpenAI's ChatGPT (powered by GPT-4o) represent two very different philosophies about how AI should be deployed. Both are genuinely powerful. But for Indian businesses building AI automation, choosing the right foundation model matters more than most realise." },
      { type: "h2", text: "What is Google Gemma 4?" },
      { type: "p", text: "Gemma 4 is Google's fourth generation of open-weight language models — trained using the same research and infrastructure behind Gemini, but released as open weights that anyone can download, fine-tune, and run. Unlike proprietary APIs, you can deploy Gemma 4 on your own servers, on-device, or in a private cloud with no per-token cost and no data leaving your infrastructure. Gemma 4 builds on previous generations with improved reasoning, multilingual support, and multimodal capabilities — handling text, code, and images within a compact, efficient architecture." },
      { type: "h2", text: "What is ChatGPT?" },
      { type: "p", text: "ChatGPT is OpenAI's conversational AI product, powered by GPT-4o — one of the most capable frontier models available. It runs entirely on OpenAI's infrastructure, accessible via a web interface, mobile app, or API. ChatGPT excels at complex reasoning, long-context tasks, code generation, and creative writing. For businesses, the OpenAI API enables integration into products, workflows, and automation pipelines — at a per-token cost." },
      { type: "h2", text: "Key Differences at a Glance" },
      { type: "ul", items: [
        "Ownership: Gemma 4 is open-weight (you own the deployment); ChatGPT runs on OpenAI's servers",
        "Cost: Gemma 4 can be run for free (you pay only for compute); ChatGPT charges per token via API",
        "Data privacy: Gemma 4 can be fully air-gapped — your data never leaves your infrastructure; ChatGPT sends data to OpenAI",
        "Setup: Gemma 4 requires technical setup to self-host; ChatGPT works immediately via API or browser",
        "Capability ceiling: GPT-4o still leads on complex multi-step reasoning and instruction following for most benchmarks",
        "Fine-tuning: Gemma 4 can be fine-tuned on your own data for a specialised model; ChatGPT fine-tuning is limited and costly",
        "Multilingual: Both support Hindi and major Indian languages, though GPT-4o has a broader language advantage",
      ]},
      { type: "h2", text: "When Gemma 4 is the Right Choice" },
      { type: "p", text: "Gemma 4 shines in scenarios where data privacy, cost at scale, or self-hosting is a requirement. If you're processing sensitive customer data — healthcare records, financial documents, legal contracts — running an open-weight model on your own infrastructure ensures that data never touches a third-party server. For high-volume automation tasks (processing thousands of documents per day), Gemma 4's zero per-token cost can represent enormous savings at scale. It's also the right choice when you need a fine-tuned, domain-specific model — trained on your own data to perform a specialised task better than a general-purpose model." },
      { type: "h2", text: "When ChatGPT is the Right Choice" },
      { type: "p", text: "ChatGPT (GPT-4o) remains the right choice when you need maximum capability out of the box with minimal setup. For complex reasoning tasks, sophisticated code generation, nuanced content creation, or workflows that require broad world knowledge and instruction-following reliability, GPT-4o consistently outperforms smaller open-weight models. It's also the fastest path to a working prototype — an OpenAI API key and a few lines of code is all you need to start. For Indian businesses building their first AI integration, ChatGPT's ease of use and reliability makes it the natural starting point." },
      { type: "h2", text: "What About Google Gemini?" },
      { type: "p", text: "It's worth clarifying the distinction: Gemma 4 and Google Gemini are related but different products. Gemini is Google's proprietary frontier model — comparable to GPT-4o in capability and pricing — available via the Google AI or Vertex AI APIs. Gemma 4 is the open-weight cousin, smaller and self-hostable. For most Indian businesses, the practical choice is between GPT-4o (via ChatGPT API), Gemini Pro (via Google AI), or Gemma 4 (self-hosted). The first two are similar in capability and cost; Gemma 4 is the privacy-first, cost-at-scale option." },
      { type: "h2", text: "Our Recommendation for Indian Businesses" },
      { type: "ul", items: [
        "Start with ChatGPT (GPT-4o): fastest to production, most capable, easiest to integrate — ideal for your first AI automation or chatbot",
        "Move to Gemma 4 or fine-tuned models: once you have validated use cases with high volume, or when data privacy regulations require it",
        "Use both together: route simple, high-volume tasks to a self-hosted Gemma 4 instance; escalate complex tasks to GPT-4o — a hybrid architecture that optimises cost and quality",
        "Consider Gemini Pro: if you are already on Google Cloud (Firebase, GCP), Gemini's tight integration is a strong advantage",
      ]},
      { type: "p", text: "At Saurabh Infosys, we build AI automation and AI-enabled apps using whichever model best fits the client's requirements — GPT-4o, Gemini, Gemma, or Claude. The model is the engine; the architecture, integration, and workflow design are what actually deliver business results. If you'd like help choosing the right AI model for your specific use case, reach out to us on WhatsApp for a free consultation." },
    ],
  },
  {
    slug: "what-is-vibe-coding",
    title: "What is Vibe Coding? How AI is Changing Software Development in 2025",
    category: "AI Development",
    date: "2026-04-10",
    readTime: "6 min read",
    excerpt: "Vibe coding is the AI-accelerated development method taking the startup world by storm. Here's what it means, why it matters, and how Saurabh Infosys uses it to ship MVPs in 2 weeks.",
    isNew: true,
    content: [
      { type: "p", text: "Vibe coding is a new development methodology where AI tools act as an active co-pilot throughout the entire software build. Developers describe what they want in plain language, the AI generates the code, and the developer reviews, refines, and ships — dramatically accelerating the process." },
      { type: "h2", text: "How Vibe Coding Works" },
      { type: "p", text: "In a vibe coding workflow, a developer uses an AI-powered IDE like Cursor or a CLI tool like Claude Code. They describe a feature in plain English — 'Add a WhatsApp notification when a new order arrives' — and the AI generates a complete implementation. The developer reviews it, tests it, and either accepts it or iterates. This rapid loop replaces hours of manual coding with minutes of AI-assisted development." },
      { type: "p", text: "The term 'vibe coding' was coined in early 2025 and quickly went viral among startup founders and engineers. It captures the flow state that AI tools create: instead of fighting syntax and boilerplate, you stay in creative flow — thinking about the product, not the plumbing." },
      { type: "h2", text: "Why It Matters for Indian Startups" },
      { type: "p", text: "The biggest impact is speed and cost. A traditional MVP takes 3–6 months. With vibe coding, a skilled team can ship a production-ready product in 2 weeks. For Indian startups and SMBs with lean budgets and tight timelines, this fundamentally changes what's possible." },
      { type: "ul", items: ["2-week MVP delivery instead of 3–6 months", "50–70% lower development cost", "Faster iteration on real user feedback", "More energy spent on product, less on boilerplate"] },
      { type: "h2", text: "Vibe Coding vs Traditional Development" },
      { type: "p", text: "Vibe coding doesn't replace developers — it makes them dramatically more productive. A developer using AI tools can produce 5–10x more output than one coding manually. The craft shifts from memorising syntax to exercising product judgment: knowing what to build, how to architect it, and how to ensure quality." },
      { type: "h2", text: "How We Use It at Saurabh Infosys" },
      { type: "p", text: "Saurabh Infosys has built our entire delivery process around vibe coding. We use Cursor, Claude Code, and a battle-tested AI-first workflow to ship AI-enabled apps and MVPs in 2 weeks. Our clients get a fully functional, production-ready product — not a prototype — in the time it takes most agencies to finish wireframes." },
    ],
  },
  {
    slug: "top-ai-automation-use-cases-india",
    title: "Top 10 AI Automation Use Cases for Indian Businesses in 2025",
    category: "AI Automation",
    date: "2026-04-05",
    readTime: "8 min read",
    excerpt: "From WhatsApp bots to invoice processing — discover the 10 highest-ROI AI automation use cases transforming Indian SMBs and enterprises right now.",
    isNew: true,
    content: [
      { type: "p", text: "Indian businesses — from Ahmedabad textile exporters to Bengaluru SaaS startups — are discovering that AI automation doesn't require a large tech team or a big budget. The right automation, applied to the right workflow, delivers measurable ROI within weeks. Here are the 10 highest-impact use cases we see our clients adopting." },
      { type: "h2", text: "1. WhatsApp Lead Qualification Bots" },
      { type: "p", text: "With 500 million WhatsApp users in India, automating your WhatsApp inbox is the single biggest quick win for most SMBs. An AI bot can greet leads, ask qualifying questions, and route hot prospects to your sales team — 24/7, in Hindi or English. Our clients typically see a 3x improvement in lead response time." },
      { type: "h2", text: "2. Invoice and Document Processing" },
      { type: "p", text: "Manually processing invoices, purchase orders, and delivery challans costs businesses thousands of hours per year. AI-powered document extraction reads incoming PDFs and images, pulls the relevant data, and updates your ERP or accounting system automatically. ROI is usually achieved within the first month." },
      { type: "h2", text: "3. AI-Powered Customer Support" },
      { type: "p", text: "A RAG-based AI support bot trained on your product documentation, FAQs, and past tickets can resolve 60–80% of support queries without human intervention. Your support team handles only the complex cases, reducing costs and improving response times simultaneously." },
      { type: "h2", text: "4. Automated Appointment Booking" },
      { type: "p", text: "For clinics, salons, tutoring centres, and service businesses, an AI booking bot on WhatsApp or your website can handle scheduling, confirmations, and reminders end-to-end — no more back-and-forth messages to find a slot." },
      { type: "h2", text: "5. Sales CRM Automation" },
      { type: "p", text: "AI can automatically log calls, update deal stages, send follow-up reminders, and even draft personalised outreach emails based on CRM data. This alone saves sales teams 2–3 hours per day." },
      { type: "h2", text: "More High-ROI Use Cases" },
      { type: "ul", items: ["HR onboarding: auto-send offer letters, collect documents, schedule induction", "Social media: generate and schedule posts from a content brief", "Inventory alerts: AI monitors stock levels and triggers reorder workflows automatically", "Report generation: auto-create weekly sales or operations reports from your data", "Email triage: AI labels, summarises, and routes incoming emails to the right person"] },
      { type: "p", text: "The best automation projects start with an honest audit of where your team spends the most repetitive time. If you'd like a free automation audit for your business, reach out to Saurabh Infosys on WhatsApp — we've helped dozens of Indian businesses find their highest-ROI automation opportunities." },
    ],
  },
  {
    slug: "how-to-integrate-ai-existing-software",
    title: "How to Integrate AI into Your Existing Business Software",
    category: "AI Integration",
    date: "2026-03-28",
    readTime: "7 min read",
    excerpt: "You don't need to rebuild from scratch. A practical guide to adding AI capabilities — chatbots, recommendations, and automation — to your existing CRM, ERP, or web app.",
    isNew: true,
    content: [
      { type: "p", text: "The most common mistake businesses make with AI is thinking they need to rebuild everything from scratch. In reality, most AI integrations are additive — you layer new AI capabilities on top of what already works. Here's a practical step-by-step approach." },
      { type: "h2", text: "Step 1: Audit Your Current Software Stack" },
      { type: "p", text: "Start by mapping the software your business already uses: your CRM, ERP, accounting system, helpdesk, and internal tools. Identify the 3–5 workflows that consume the most manual time or produce the most errors. These are your AI integration targets." },
      { type: "h2", text: "Step 2: Start with a Chatbot or Copilot Layer" },
      { type: "p", text: "The lowest-risk, highest-visibility AI integration is almost always a conversational AI layer. Add a chatbot to your website that answers product questions, or build an internal copilot that lets your team query your CRM data in plain English. This builds organisational confidence in AI quickly." },
      { type: "h2", text: "Step 3: Connect AI to Your Business Data" },
      { type: "p", text: "The most powerful integrations use Retrieval-Augmented Generation (RAG) — connecting an LLM to your own data. Your AI assistant can answer questions using your real policies, inventory, and customer history. This turns generic AI into a specialist that actually knows your business." },
      { type: "h2", text: "Step 4: Automate Repetitive Workflows" },
      { type: "p", text: "Once you have an AI layer in place, identify workflows where the AI can take action rather than just answer questions. Integrate AI into your CRM to auto-update records, into your helpdesk to route tickets, or into WhatsApp to handle bookings. Each automation compounds your ROI." },
      { type: "h2", text: "Common Integration Approaches" },
      { type: "ul", items: ["API integration: connect OpenAI or Anthropic APIs to your existing software via custom code", "Webhook automation: trigger AI actions based on events in your CRM or ERP", "RAG pipeline: embed your documents in a vector database and query them with an LLM", "No-code automation: use Zapier or Make for simpler AI workflow automation", "Custom middleware: build a dedicated AI service layer between your existing systems"] },
      { type: "p", text: "Most businesses see their first AI integration pay for itself within 60 days. Saurabh Infosys specialises in practical AI integration for Indian businesses — we'll audit your stack and recommend the highest-ROI integration starting point." },
    ],
  },
  {
    slug: "agentic-ai-vs-chatbots",
    title: "Agentic AI vs Traditional Chatbots: What's the Real Difference?",
    category: "AI Automation",
    date: "2026-03-20",
    readTime: "5 min read",
    excerpt: "Traditional chatbots answer questions. Agentic AI takes actions. Here's what that difference means for your business — and why 2025 is the year to upgrade.",
    isNew: true,
    content: [
      { type: "p", text: "When most people think of business AI, they imagine a chatbot — a widget on a website that answers FAQs. Agentic AI is something fundamentally different. Understanding the distinction is crucial for choosing the right technology for your business needs." },
      { type: "h2", text: "What Are Traditional Chatbots?" },
      { type: "p", text: "Traditional chatbots — whether rule-based or LLM-powered — are conversation machines. They respond to inputs with outputs: a customer asks a question, the bot provides an answer. Even the best LLM-powered chatbots are primarily reactive. They don't take actions in the world; they generate text responses." },
      { type: "h2", text: "What Is Agentic AI?" },
      { type: "p", text: "Agentic AI doesn't just answer questions — it executes tasks. An AI agent can receive a goal ('Follow up with all leads who haven't responded in 3 days'), break it down into steps, use tools like email, CRM, and calendar, make decisions, and complete the workflow end-to-end — autonomously." },
      { type: "h2", text: "The Key Differences" },
      { type: "ul", items: ["Chatbots respond to messages; agents execute multi-step tasks", "Chatbots handle one turn at a time; agents complete entire workflows", "Chatbots require human follow-through; agents act autonomously", "Chatbots are stateless; agents maintain context across long tasks", "Chatbots are simpler and cheaper; agents are more powerful and complex"] },
      { type: "h2", text: "When to Use a Chatbot vs an AI Agent" },
      { type: "p", text: "Chatbots are the right choice for customer-facing Q&A, simple lead capture, and FAQ handling — high volume, low complexity interactions where a human-like conversation is the goal. Agentic AI is the right choice when you need multi-step workflow automation: lead qualification, CRM update, and follow-up email all triggered and executed automatically." },
      { type: "h2", text: "What This Means for Indian Businesses in 2025" },
      { type: "p", text: "2025 is the year agentic AI has become practically deployable for SMBs. Frameworks like LangChain and the Anthropic Claude API have matured to the point where building a reliable AI agent is within reach for any business with the right development partner. Saurabh Infosys has already built agentic workflows for clients in real estate, logistics, and healthcare." },
    ],
  },
  {
    slug: "whatsapp-ai-bot-indian-business",
    title: "Why Every Indian SMB Needs a WhatsApp AI Bot in 2025",
    category: "AI Automation",
    date: "2026-03-12",
    readTime: "6 min read",
    excerpt: "500 million Indians use WhatsApp daily. An AI bot on WhatsApp can handle leads, bookings, and support 24/7 — at a fraction of hiring costs. Here's how to get started.",
    isNew: true,
    content: [
      { type: "p", text: "India has 500 million WhatsApp users — more than any other country in the world. Your customers are already there, using WhatsApp for everything from ordering groceries to communicating with their bank. Yet most Indian businesses still handle WhatsApp manually, missing out on the single biggest automation opportunity available to them today." },
      { type: "h2", text: "What Can a WhatsApp AI Bot Do?" },
      { type: "ul", items: ["Greet new leads and qualify them with a conversational flow", "Answer product and pricing questions in Hindi or English — instantly", "Book appointments, demos, or service visits automatically", "Send order confirmations, shipping updates, and payment reminders", "Handle common support queries without human involvement", "Escalate complex queries to a human agent seamlessly"] },
      { type: "h2", text: "The Real ROI for Indian SMBs" },
      { type: "p", text: "The economics are compelling. A human WhatsApp operator costs ₹15,000–25,000/month and works 8 hours a day. A WhatsApp AI bot works 24/7, handles multiple conversations simultaneously, never has a bad day, and costs a fraction of that. For a business receiving 100+ WhatsApp messages daily, the ROI is typically achieved within the first month." },
      { type: "h2", text: "How It Works Technically" },
      { type: "p", text: "A WhatsApp AI bot connects to the WhatsApp Business API and integrates with an LLM — like GPT-4o or Claude — trained on your specific business context: your products, FAQs, pricing, and policies. When a customer messages you, the AI responds instantly with accurate, contextual answers. The setup takes 1–2 weeks." },
      { type: "h2", text: "Industries Seeing the Most Impact" },
      { type: "ul", items: ["Real estate: instant property info, site visit scheduling, and buyer qualification", "Healthcare: appointment booking, doctor availability queries, and prescription reminders", "E-commerce: order tracking, returns processing, and product recommendations", "Education: course enquiries, fee payment reminders, and schedule updates", "Travel: itinerary queries, booking confirmations, and live travel updates"] },
      { type: "p", text: "Saurabh Infosys has built WhatsApp AI bots for businesses across Ahmedabad and India. Reach out on WhatsApp — ironically — to discuss how we can automate yours." },
    ],
  },
  {
    slug: "flutter-ai-enabled-apps",
    title: "Building AI-Enabled Mobile Apps with Flutter: A Complete Guide",
    category: "AI Development",
    date: "2026-03-05",
    readTime: "9 min read",
    excerpt: "Flutter + AI is a powerful combo for cross-platform apps. This guide covers integrating OpenAI, on-device ML, and RAG into Flutter apps — with real examples from our portfolio.",
    isNew: true,
    content: [
      { type: "p", text: "Flutter has become one of the most popular cross-platform frameworks because it ships to iOS and Android from a single codebase without compromising on performance or UI quality. When you combine Flutter's strengths with modern AI capabilities — LLMs, on-device ML, and RAG — you get AI-enabled apps that users actually love." },
      { type: "h2", text: "What Makes an App 'AI-Enabled'?" },
      { type: "ul", items: ["Conversational AI: in-app chat assistant powered by GPT-4o or Claude", "Smart search: semantic search that understands user intent, not just keywords", "Personalised recommendations: AI-driven content or product suggestions based on behaviour", "On-device ML: image recognition and object detection without an internet connection", "Automated data entry: AI that reads receipts, business cards, or forms via the camera"] },
      { type: "h2", text: "Integrating LLMs into Flutter" },
      { type: "p", text: "The most common approach is calling LLM APIs from your Flutter app's backend. A Dart HTTP client sends the user's query to your API layer, which calls the LLM (OpenAI, Anthropic, or Google Gemini) and streams the response back to the app. This keeps your API keys secure server-side while giving users a smooth, streaming chat experience." },
      { type: "h2", text: "On-Device ML with Flutter" },
      { type: "p", text: "Google's ML Kit integrates natively with Flutter via the google_mlkit package, providing text recognition, face detection, barcode scanning, and object detection — all running locally on the device without any API calls. For apps that need ML features to work offline or in real time, this is the go-to solution." },
      { type: "h2", text: "RAG in Mobile Apps" },
      { type: "p", text: "For enterprise and B2B apps, Retrieval-Augmented Generation (RAG) allows users to query your company's own knowledge base from within the app. An employee can ask 'What's our return policy for damaged items?' and get an accurate, source-cited answer from your internal documents — powered by a vector database and LLM on the backend." },
      { type: "h2", text: "Our Flutter AI Portfolio" },
      { type: "p", text: "Saurabh Infosys has built AI-enabled Flutter apps across healthcare, education, logistics, and fintech — including AI Assist (educational platform with OpenAI integration) and Banigi AI (business intelligence with conversational analytics). If you have an idea for a Flutter app with AI features, let's talk." },
    ],
  },
  // Archive posts
  {
    slug: "ai-transforming-web-development-2025",
    title: "How AI is Transforming Modern Web Development in 2025",
    category: "Artificial Intelligence",
    date: "2025-10-27",
    readTime: "7 min read",
    excerpt: "Discover how Artificial Intelligence is revolutionising modern web and app development in 2025 — from automated code generation to intelligent testing.",
    isNew: false,
    content: [
      { type: "p", text: "The web development industry is undergoing its most significant transformation since the introduction of cloud computing. AI is not just a new tool in the developer's toolkit — it is fundamentally changing the economics, speed, and quality of building for the web." },
      { type: "h2", text: "AI-Powered Code Generation" },
      { type: "p", text: "Tools like GitHub Copilot, Cursor, and Claude Code now generate production-quality code from natural language descriptions. A developer can describe a feature in plain English and have a working implementation in seconds. Studies consistently show 30–50% productivity gains for developers using AI code assistants — and the best developers are seeing 5–10x improvements on repetitive tasks." },
      { type: "h2", text: "Automated Testing and Quality Assurance" },
      { type: "p", text: "AI can now write unit tests, integration tests, and end-to-end tests automatically from your codebase. AI-powered test generation significantly reduces the time needed to achieve meaningful test coverage. This is one of the most underused AI capabilities in web development today." },
      { type: "h2", text: "Personalised User Experiences at Scale" },
      { type: "p", text: "AI enables web applications to deliver personalised experiences to every user — customised content, dynamic pricing, smart recommendations, and adaptive interfaces. What previously required a large data science team is now accessible through LLM APIs and embedding-based recommendation systems." },
      { type: "h2", text: "AI in UI/UX Design" },
      { type: "p", text: "Design tools like Figma's AI features, v0 by Vercel, and Lovable are changing how web interfaces are designed. Designers can generate UI components, test variations, and iterate on visual design in a fraction of the traditional time. The barrier between design and working code has almost disappeared." },
      { type: "h2", text: "What This Means for Your Business" },
      { type: "p", text: "Businesses that partner with AI-native development studios get a significant competitive advantage: faster time-to-market, lower development costs, and higher-quality software. The gap between AI-native and traditional development is widening every month. Now is the time to ensure your development partner is working at the frontier." },
    ],
  },
  {
    slug: "flutter-vs-react-native-2025",
    title: "Flutter vs. React Native: Which is Better for Mobile App Development?",
    category: "Mobile Development",
    date: "2025-07-01",
    readTime: "8 min read",
    excerpt: "An in-depth comparison of Flutter and React Native for mobile app development in 2025 — performance, ecosystem, and when to choose which.",
    isNew: false,
    content: [
      { type: "p", text: "Choosing between Flutter and React Native is one of the most common decisions product teams face when building a new mobile app. Both are mature, well-supported cross-platform frameworks. The right choice depends on your team's background, your app's requirements, and your long-term roadmap." },
      { type: "h2", text: "Performance" },
      { type: "p", text: "Flutter compiles to native ARM code via Dart and renders its own UI using the Impeller graphics engine. This means Flutter's UI is pixel-perfect and consistent across platforms. React Native uses JavaScript and bridges to native components, which can cause performance bottlenecks in highly interactive screens. For apps requiring smooth 60fps animations or complex UI, Flutter has the edge." },
      { type: "h2", text: "Ecosystem and Libraries" },
      { type: "p", text: "React Native benefits from the massive JavaScript/npm ecosystem. Flutter's pub.dev ecosystem is smaller but growing rapidly and is generally high quality due to Flutter's stricter package guidelines. For enterprise apps, both ecosystems are mature enough that package availability is rarely a deciding factor." },
      { type: "h2", text: "Developer Experience" },
      { type: "p", text: "Both frameworks offer hot reload, but Flutter's is generally considered faster and more reliable. The Dart language has a steeper learning curve for JavaScript developers but is more performant and has fewer runtime surprises. Teams with existing React knowledge tend to ramp up faster on React Native." },
      { type: "h2", text: "When to Choose Flutter" },
      { type: "ul", items: ["You need pixel-perfect, custom UI that's identical across iOS and Android", "Your app has complex animations or game-like interactions", "You're starting fresh with no JavaScript team dependency", "You want to target web and desktop in the future (Flutter supports all platforms)"] },
      { type: "h2", text: "When to Choose React Native" },
      { type: "ul", items: ["Your team is already skilled in React and JavaScript", "You need to share code between a React web app and a mobile app", "You rely heavily on specific native SDKs with strong React Native support"] },
      { type: "h2", text: "Our Recommendation" },
      { type: "p", text: "At Saurabh Infosys, we build the majority of our mobile apps in Flutter. We've shipped Flutter apps serving 30,000+ customers across 20 countries and consistently find it delivers better performance, more consistent UI, and faster development once the team is ramped up. For new projects, we recommend Flutter unless there's a strong existing JavaScript team reason not to." },
    ],
  },
  {
    slug: "future-software-development-emerging-tech",
    title: "The Future of Software Development: Emerging Technologies and Strategies",
    category: "Technology",
    date: "2025-06-20",
    readTime: "6 min read",
    excerpt: "From AI-assisted coding to serverless architectures — the technologies and strategies that will define software development in the next 3 years.",
    isNew: false,
    content: [
      { type: "p", text: "The software development landscape is shifting faster than at any point in the last decade. Understanding which emerging technologies will have lasting impact — versus which are hype — is critical for businesses making long-term technology investments." },
      { type: "h2", text: "AI-Assisted Development: Already the New Normal" },
      { type: "p", text: "AI coding tools have crossed the threshold from 'interesting experiment' to 'professional standard'. Developers who don't use AI assistance are now at a productivity disadvantage. By 2026, AI-assisted development will be as standard as version control. For businesses, this means partnering with development studios that have fully adopted AI-first workflows." },
      { type: "h2", text: "Serverless and Edge Computing" },
      { type: "p", text: "Serverless architecture (AWS Lambda, Vercel Edge, Cloudflare Workers) is becoming the default for new web applications. It eliminates infrastructure management, scales automatically, and reduces costs for variable-load applications. Edge computing takes this further by running code physically closer to the user, reducing latency for global applications." },
      { type: "h2", text: "The Rise of Practical Low-Code" },
      { type: "p", text: "Low-code and no-code platforms have matured significantly. Platforms like Retool, Supabase, and Bubble handle a growing proportion of internal tools effectively. Smart engineering teams use these tools for the right use cases — freeing up developer time for the complex, differentiated work that requires custom code." },
      { type: "h2", text: "API-First and Composable Architecture" },
      { type: "p", text: "Modern software is increasingly composed from specialised services rather than built as monoliths. Payment (Stripe/Razorpay), authentication (Clerk), notifications (Twilio), and AI (Anthropic/OpenAI) are best-in-class services that can be assembled into production software quickly. This composable approach reduces time-to-market and improves reliability." },
      { type: "h2", text: "What to Focus On as a Business" },
      { type: "ul", items: ["Partner with development teams that have fully adopted AI-assisted workflows", "Favour API-first architecture so your software can evolve incrementally", "Invest in AI automation of your own business processes now, before competitors do", "Don't over-invest in infrastructure when serverless solves most problems cheaper", "Build your data foundation — AI is only as good as the data it has access to"] },
    ],
  },
  {
    slug: "why-flutter-2025",
    title: "Why You Should Consider Flutter for Your Next App (2025)",
    category: "Mobile Development",
    date: "2025-04-15",
    readTime: "5 min read",
    excerpt: "Flutter's cross-platform efficiency, fast UI, and growing ecosystem make it one of the best choices for mobile apps in 2025. Here's why.",
    isNew: false,
    content: [
      { type: "p", text: "Flutter was released by Google in 2018 and has grown into one of the world's most popular mobile development frameworks. In 2025, with over 1 million apps in production and a vibrant community of 2 million+ developers, it's the clear choice for most new mobile app projects." },
      { type: "h2", text: "One Codebase, Two Stores" },
      { type: "p", text: "The most compelling reason to choose Flutter is simple economics: you write your app once in Dart and get native iOS and Android apps. This typically cuts development time and cost by 40–60% compared to maintaining separate native codebases. For startups and SMBs, this is often the difference between being able to afford an app or not." },
      { type: "h2", text: "Native-Level Performance" },
      { type: "p", text: "Flutter doesn't use a JavaScript bridge or a WebView. It compiles to native ARM code and renders directly using its own graphics engine (Impeller in Flutter 3+). The result is smooth 60fps animations, fast startup times, and performance that users can't distinguish from native-built apps." },
      { type: "h2", text: "Developer Productivity" },
      { type: "p", text: "Flutter's hot reload shows code changes instantly without losing app state — turning what would be a 30-second rebuild cycle into a sub-second update. Combined with Flutter's excellent widget library and strong typing, developer productivity is consistently higher than with native development." },
      { type: "h2", text: "A Maturing Ecosystem" },
      { type: "p", text: "Flutter's pub.dev package ecosystem now has over 35,000 packages covering Firebase integration, maps, payments, biometrics, ML, and AI. For almost any feature you need, there's a well-maintained Flutter package available." },
      { type: "h2", text: "Our Flutter Track Record" },
      { type: "p", text: "Saurabh Infosys has shipped Flutter apps now used by 30,000+ customers across 20 countries. Our portfolio spans healthcare, fitness, logistics, fintech, education, and more — all built with Flutter. If you're considering a mobile app, we'd love to show you what's possible." },
    ],
  },
  {
    slug: "mobile-first-development-2025",
    title: "Why Mobile-First Development Should Be Your Top Priority in 2025",
    category: "Technology",
    date: "2025-06-15",
    readTime: "5 min read",
    excerpt: "With over 60% of web traffic coming from mobile devices, building mobile-first is no longer optional — it's essential for user experience and SEO.",
    isNew: false,
    content: [
      { type: "p", text: "Over 60% of global web traffic now comes from mobile devices. In India, that number is closer to 75%. Yet a surprising number of business websites and web applications are still designed primarily for desktop. This is a strategic mistake that costs businesses in both user experience and search ranking." },
      { type: "h2", text: "Google's Mobile-First Indexing" },
      { type: "p", text: "Since 2019, Google has used the mobile version of your website as the primary basis for indexing and ranking. This means your SEO is determined by how your site performs on mobile — not desktop. A site that looks great on desktop but is poor on mobile will rank lower, regardless of its content quality." },
      { type: "h2", text: "What Mobile-First Means in Practice" },
      { type: "ul", items: ["Design for the smallest screen first, then scale up to desktop", "Touch targets must be at least 48×48px — no tiny buttons or links", "Text must be readable at 16px without requiring zoom", "No horizontal scrolling — all content must fit within the viewport width", "Critical information and CTAs must be visible above the fold on mobile"] },
      { type: "h2", text: "Performance on Mobile Is Non-Negotiable" },
      { type: "p", text: "Mobile users are often on slower connections. Google's Core Web Vitals — LCP, CLS, and INP — measure real user performance on mobile and directly impact your search ranking. Optimising images (use WebP), reducing JavaScript bundle size, and using a CDN are the three highest-impact actions for most sites." },
      { type: "h2", text: "Progressive Enhancement vs Mobile-First" },
      { type: "p", text: "Progressive enhancement starts with a basic mobile experience and adds features for capable devices. Mobile-first design starts with the mobile layout as the design baseline. Mobile-first has become the industry standard because it forces designers to prioritise ruthlessly — removing clutter that was only there to fill desktop screen space." },
      { type: "p", text: "All websites and web apps built by Saurabh Infosys are mobile-first by default. If your existing site is underperforming on mobile, reach out — a mobile optimisation project often delivers measurable SEO improvements within 30 days." },
    ],
  },
  {
    slug: "pwa-essential-2025",
    title: "Why Progressive Web Apps (PWAs) Are Essential in 2025",
    category: "Technology",
    date: "2025-05-01",
    readTime: "6 min read",
    excerpt: "PWAs combine the best of web and native apps. Discover why leading businesses are adopting PWAs to improve engagement and cut app development costs.",
    isNew: false,
    content: [
      { type: "p", text: "Progressive Web Apps (PWAs) sit at the intersection of websites and native apps. They load in a browser like a website but can be installed on a home screen, work offline, send push notifications, and access device features — all without going through an app store. In 2025, PWAs have become a serious alternative to native apps for many use cases." },
      { type: "h2", text: "What Makes a Progressive Web App?" },
      { type: "p", text: "A PWA is a standard web application that includes three key elements: a Service Worker (which enables offline functionality and background sync), a Web App Manifest (which enables home screen installation), and a secure HTTPS connection. Modern frameworks like Next.js make adding PWA capabilities to an existing web app straightforward." },
      { type: "h2", text: "Key Benefits of PWAs" },
      { type: "ul", items: ["No app store approval process — deploy updates instantly without review", "Discoverable via Google search, unlike native apps buried in app stores", "One codebase for both the web and the installed app experience", "Works offline or on low connectivity via service worker caching", "50–70% lower development cost compared to native iOS + Android apps", "Automatic updates — users always get the latest version without a manual update"] },
      { type: "h2", text: "PWA vs Native App: When to Choose Which" },
      { type: "p", text: "PWAs are the right choice when your app primarily works in a browser, you want maximum reach without app store friction, and you don't need deep native capabilities like Bluetooth, AR, or complex background processing. Native or Flutter cross-platform apps are better when you need hardware access, app store distribution for discoverability, or maximum performance." },
      { type: "h2", text: "Industries Where PWAs Excel" },
      { type: "ul", items: ["E-commerce: cart, product catalogue, and checkout work perfectly as a PWA", "News and content: offline reading and push notifications for breaking articles", "Internal business tools: dashboards and forms that don't need app store distribution", "SaaS products: web-first products that benefit from desktop and mobile installation"] },
      { type: "p", text: "Saurabh Infosys builds PWAs as part of our standard web development offering. If you have a web app that would benefit from offline capability, home screen installation, or push notifications, a PWA upgrade is often a one-week project — reach out to discuss." },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "James Wilson",
    role: "Director, Modern Dental Lab",
    country: "Hong Kong 🇭🇰",
    text: "Saurabh Infosys built our Flutter app that now serves 30,000+ customers across 20 countries. Exceptional quality and communication throughout.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "CEO, ATCC Australia",
    country: "Australia 🇦🇺",
    text: "Professional team with deep technical knowledge. They understood our compliance requirements perfectly and delivered exactly what we needed.",
    rating: 5,
  },
  {
    name: "Sarah Capri",
    role: "Founder, Curvd by CapriCurves",
    country: "USA 🇺🇸",
    text: "Our fitness app is now live on both the App Store and Play Store. The team was responsive, creative, and delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    role: "Principal, Delhi Public School",
    country: "India 🇮🇳",
    text: "SSMS transformed how we manage our school. From fee collection to parent communication — everything is seamless now.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Secretary, Shivalik Heights Society",
    country: "India 🇮🇳",
    text: "MySociety has made managing our 200-flat complex a breeze. Maintenance collection alone has saved us 10 hours per month.",
    rating: 5,
  },
];

export const HOME_FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A vibe-coded MVP ships in about 2 weeks. A Flutter app or SaaS platform typically runs 6–12 weeks, covering discovery, design, build, and testing. AI automation pilots (WhatsApp bots, RAG systems) can go live in 1–2 weeks.",
  },
  {
    question: "What services do you offer for digital projects?",
    answer:
      "AI automation and integration, vibe coding / MVP development, Flutter mobile apps, GPS and fleet management systems, SaaS platform development, and digital marketing tools — see our Services page for the full breakdown.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Most projects are fixed-price based on a scoped requirement document, so you know the cost upfront. Ongoing work (maintenance, retainers, AI automation support) is billed monthly. We share a detailed quote before any work begins.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every project includes a post-launch support window, and we offer ongoing maintenance retainers for bug fixes, updates, and monitoring. Our own SaaS products (SSMS, MySociety, MySampark) run on the same support process we offer clients.",
  },
  {
    question: "Can you work with our existing team or codebase?",
    answer:
      "Absolutely. We regularly integrate into existing CRMs, ERPs, and codebases — including fixing and extending apps originally built with AI tools like Lovable, Bolt, or Cursor. Share your repo and we'll assess it within 24 hours.",
  },
];

/* ============================================================
   About page content.

   Every string here is lifted verbatim from the previous
   /about page — it is copy Saurabh Infosys already published,
   not new writing. The reference's awards table and team grid
   had no equivalent in our content, so the awards section is
   dropped and the team grid carries MARKETS instead.
   ============================================================ */

export interface AboutMarket {
  flags: string;
  name: string;
  tagline: string;
  desc: string;
  /** picks `public/images/about/market-<slug>.webp` */
  slug: string;
}

/** The five regions we sell into. Renders in the team-v1 grid. */
export const ABOUT_MARKETS: AboutMarket[] = [
  {
    flags: "🇮🇳",
    name: "India",
    tagline: "Domestic Market",
    desc: "SMBs, startups, schools, and housing societies across Gujarat, Delhi, and Mumbai. Our roots and our largest market.",
    slug: "india",
  },
  {
    flags: "🇬🇧🇩🇪🇧🇪🇭🇷",
    name: "Europe",
    tagline: "European Markets",
    desc: "UK, Germany, Belgium, and Croatia clients seeking world-class software at startup-friendly prices. SaaS platforms, mobile apps, and AI integrations.",
    slug: "europe",
  },
  {
    flags: "🇸🇬🇲🇾🇭🇰",
    name: "Asia Pacific",
    tagline: "APAC Markets",
    desc: "Singapore, Malaysia, and Hong Kong clients across healthcare, logistics, and fintech. Time-zone aligned and English-first.",
    slug: "asia-pacific",
  },
  {
    flags: "🇺🇸",
    name: "Americas",
    tagline: "North America",
    desc: "US clients who want Silicon Valley quality at a fraction of the cost. Startups and scale-ups building AI-enabled products fast.",
    slug: "americas",
  },
  {
    flags: "🇦🇪🇸🇦",
    name: "Gulf Region",
    tagline: "Middle East",
    desc: "UAE, Saudi Arabia, and broader GCC clients. Fintech, retail tech, and enterprise software.",
    slug: "gulf",
  },
];

/**
 * The principles that guide our work. Renders in the beliefs carousel.
 *
 * Each one is drawn from something already true and already published
 * elsewhere on the site — the shipping-fast-without-cutting-quality line,
 * the three SaaS products we operate, the English-first team, the 2024 AI
 * shift, and the same-care-as-our-own promise. Nothing here is a new claim.
 */
export const ABOUT_BELIEFS = [
  {
    title: "Shipping fast is a discipline, not a shortcut",
    body: "We move quickly because the foundations are right, not because we skipped them. Speed that creates rework is not speed.",
  },
  {
    title: "We run what we build",
    body: "Three of our own SaaS products are live and in daily use. Operating them holds us to the same standard we ask of every client project.",
  },
  {
    title: "Communication is part of the deliverable",
    body: "Every engineer and PM on the team works in English, inside your hours. Software that arrives without context is unfinished work.",
  },
  {
    title: "AI is a tool, not the pitch",
    body: "We went all-in on AI in 2024 because it solves real problems for real businesses. We use it where it earns its place, not where it makes a better slide.",
  },
  {
    title: "Every project gets the care we would give our own",
    body: "From first consultation to final delivery, the standard does not move — whether the client is a school in Ahmedabad or a scale-up in London.",
  },
];

/**
 * The Ahmedabad advantages, kept from the previous /about page.
 *
 * Nothing renders these today — the beliefs carousel took the principles
 * above instead. Left here so the copy is not lost if it earns a section.
 */
export const ABOUT_ADVANTAGES = [
  {
    title: "Cost Advantage",
    body: "Our rates are 60–70% lower than UK/US agencies with zero compromise on code quality or communication.",
  },
  {
    title: "Timezone Overlap",
    body: "IST works naturally with UK mornings and Australian afternoons. Gulf clients share near-identical hours.",
  },
  {
    title: "English-First Team",
    body: "Every engineer and PM on our team communicates fluently in English. No lost-in-translation moments.",
  },
  {
    title: "Top-Tier Talent",
    body: "Ahmedabad is home to IIM, IIT Gandhinagar, and dozens of top engineering colleges feeding our talent pipeline.",
  },
];

export const ABOUT = {
  /* about-v1 — hero */
  note: "Ahmedabad, India",
  badgeLabel: "Clutch rating",
  /** the odometer: digits roll, suffix is static */
  heroStat: { value: "4.9", suffix: "★" },
  heroStatCaption: "Across 33 reviews from 80+ clients",
  heroTitle:
    "A full-stack software and AI studio building for teams across India, the UK, Europe, Asia Pacific, the Americas, and the Gulf.",
  /* the reference plays a showreel here; we have no footage, so the
     panel carries the positioning line and the social row */
  panelCopy:
    "We specialise in AI automation, mobile apps, and SaaS platforms — with an obsession for quality and shipping fast. World-class software, built from India, without compromising on quality or communication.",

  /* identity — the two split-text statements, then the story */
  identityBadge: "Who we are",
  identityLead:
    "Saurabh Infosys is an Ahmedabad-based software and AI studio building applications and digital products for businesses of all sizes. We work with Flutter, React, Next.js, Node.js, and the latest AI platforms.",
  identitySub:
    "We work closely with our clients from initial consultation through to final delivery — treating every project with the same care we would our own.",
  identityBody: [
    "From our first international project — a Flutter app for a Hong Kong dental lab now serving 30,000+ customers across 20 countries — we have proved that world-class software can be built from India without compromising on quality or communication.",
    "In 2024 we went all-in on AI. WhatsApp AI bots, agentic workflows, RAG knowledge bases, voice agents — we are building practical AI for Indian and global businesses today.",
  ],

  /* intro-v1 — the statement and the four counters */
  introHeading:
    "Three live SaaS products of our own. Building and operating them keeps us sharp, accountable, and familiar with what it actually takes to ship.",
  introAuthor: "SSMS · MySociety · MySampark",
  introAuthorRole: "Products we build and run",

  /* brand-v1 */
  brandBadge: "Clients",

  /* role-v1 */
  roleBadge: "Our role",
  roleLead:
    "We go beyond writing code. Our role is to help shape direction, bring clarity across teams, and build systems that reduce friction and accelerate meaningful progress.",
  roleSub:
    "We embed ourselves into your workflow — working closely with founders, product managers, and engineers to ensure every decision supports long-term product growth.",

  /* workflow */
  workflowBadge: "Workflow",
  workflowSteps: [
    { title: "Align", subtitle: "Goals, scope, and constraints" },
    { title: "Architect", subtitle: "Research-led product structure" },
    { title: "Execute", subtitle: "Focused build and systems" },
    { title: "Validate", subtitle: "Test, refine, and optimise" },
  ],

  /* team-v1, carrying the markets */
  marketsBadge: "Markets",
  marketsHeading: "Built in Ahmedabad, shipping to six markets",

  /* beliefs */
  beliefsBadge: "Beliefs",
  beliefsHeading: "Principles that guide our work",

  /* contact-v1 */
  contactHeading:
    "Have a project in mind or want to collaborate — let’s get in touch!",
};

/* ============================================================
   Home page content, second pass.

   The process steps are lifted verbatim from the previous
   workflow section — copy Saurabh Infosys already published.
   The about block reuses the /about page's own wording.
   ============================================================ */

export const HOME_ABOUT = {
  badge: "About us",
  heading: "An AI-first software studio built for speed and scale",
  /** the ink paragraph */
  lead:
    "Saurabh Infosys is an Ahmedabad-based software and AI studio building applications and digital products for businesses of all sizes. We work with Flutter, React, Next.js, Node.js, and the latest AI platforms.",
  /** the second paragraph, scrubbed grey to ink on scroll */
  sub:
    "We work closely with our clients from initial consultation through to final delivery — treating every project with the same care we would our own.",
};

export const HOME_PROCESS = {
  badge: "Our process",
  heading: "A delivery model designed for momentum",
  steps: [
    {
      title: "Scope and success metrics",
      copy: "We agree what success looks like before anything gets built: the number that has to move, the constraints we are working inside, and the date. It goes in writing, and it is what we measure against at the end.",
    },
    {
      title: "Architecture and data model",
      copy: "Next we settle how the data is shaped and where it connects to the systems you already run. Getting this right is what lets the product change later without a rewrite, so we spend real time here instead of rushing to screens.",
    },
    {
      title: "Build, one week at a time",
      copy: "You get working software every week on a staging link you can open and use. Your feedback goes into the next week's build, so nothing waits for a change request queue at the end.",
    },
    {
      title: "Launch, measure, refine",
      copy: "We ship it, add the tracking, and watch the number we agreed on in week zero. Support and improvements carry on after launch — the first version is where the product starts, not where we hand it over.",
    },
  ],
};

export const HOME_CLIENTS = {
  heading: "Trusted by teams across four continents",
};


/* ============================================================
   Product page content, second pass.

   Sourced from the live product sites — sms.saurabhinfosys.com,
   mysociety.saurabhinfosys.com and mysampark.com — so the wording
   here is what each product already says about itself.

   Pricing is deliberately absent: these pages send people to the
   product to see current pricing rather than carrying a second
   copy of it that can drift.
   ============================================================ */

export interface ProductPage {
  /** the mono label beside the hero heading */
  label: string;
  /** one line under the label */
  tagline: string;
  /** the hero counter: a real, checkable number */
  stat: { value: string; suffix?: string; label: string };
  /** intro-v3, the long "what it is" paragraph */
  overview: string;
  /** brand-v2 — the apps or channels it spans */
  worksWith: { heading: string; items: string[] };
  /** services-v1 — three cards, first ink, second brand tint, third snow */
  highlights: { title: string; desc: string }[];
  /** purpose-v1 — why it exists */
  purpose: { heading: string; paragraphs: string[] };
  /** statistics-v2 — a line from the product, then the numbers */
  quote: string;
  numbers: { value: string; suffix?: string; label: string }[];
  /** workflow-v2 — how a rollout runs */
  steps: { label: string; desc: string }[];
  /** the module table */
  modules: { name: string; desc: string; role: string }[];
  /** the FAQ panel; omitted products simply do not render it */
  faqs?: { q: string; a: string }[];
}

export const PRODUCT_PAGES: Record<string, ProductPage> = {
  ssms: {
    label: "School Management System",
    tagline: "Transform your school management experience",
    stat: { value: "24", suffix: "/7", label: "Support and onboarding" },
    overview:
      "Our school management platform is designed to simplify every aspect of educational administration. From seamless student enrollment to real-time communication with parents, and efficient resource handling — we empower schools to operate smarter, faster, and more transparently.",
    worksWith: {
      heading: "One platform, four dedicated apps",
      items: ["Admin Portal", "Teacher App", "Staff App", "Parent App", "Student Portal"],
    },
    highlights: [
      {
        title: "Admin Portal",
        desc: "Complete control over school operations — admissions, student and staff records, fee collections, transport, and real-time communication, with powerful reporting and customisable settings.",
      },
      {
        title: "Teacher & Staff Apps",
        desc: "Simplify teaching operations. Attendance, timetables, leave, salary records and class communication, all from a purpose-built app rather than a cut-down version of the admin panel.",
      },
      {
        title: "Parent App",
        desc: "Parents stay connected anytime — their child's attendance, fees, results and daily timetable in one place, with instant WhatsApp alerts for anything that needs their attention.",
      },
    ],
    purpose: {
      heading: "Why SSMS is the right choice",
      paragraphs: [
        "SSMS provides a secure, intelligent, and user-centric environment that empowers educators, engages students, and simplifies school operations, all while maintaining the highest standards of quality and performance.",
        "It integrates academic management, communication, finance, and reporting into one cohesive system — ensuring smooth workflows, informed decision-making, and stronger connections across your entire institution. From admissions to alumni, it covers the complete student lifecycle.",
      ],
    },
    quote:
      "Choosing the right management system can define your institution's future.",
    numbers: [
      { value: "8", suffix: "+", label: "Modules across the student lifecycle" },
      { value: "4", label: "Role-specific apps, not one shared login" },
      { value: "24", suffix: "/7", label: "Support after go-live" },
    ],
    steps: [
      { label: "Scope", desc: "We map your structure — classes, sections, fee heads and staff roles — before anything is configured." },
      { label: "Configure", desc: "Workflows, reports and user roles are tailored to how your school already runs, not the other way round." },
      { label: "Migrate", desc: "Existing student, staff and fee records are imported and checked against your own registers." },
      { label: "Go live", desc: "Fast implementation with our team on hand, so daily operations are never interrupted." },
    ],
    modules: [
      { name: "Student Management", desc: "Attendance, profiles and academic records in one record per student", role: "Admin · Teacher" },
      { name: "Seating Management", desc: "Exam and classroom seating plans generated from live rolls", role: "Admin" },
      { name: "Leave Management", desc: "Student and staff leave requests with an approval trail", role: "Admin · Staff" },
      { name: "Real-time Communication", desc: "WhatsApp and in-app alerts for attendance, fees and notices", role: "All roles" },
      { name: "Timetable Overview", desc: "Daily and weekly class schedules, visible to parents and students", role: "Teacher · Parent" },
      { name: "Salary Management", desc: "Staff salaries, profiles and payroll records", role: "Admin" },
    ],
    faqs: [
      { q: "Who gets their own app?", a: "Four role-specific apps ship with the platform: an Admin Portal with full control and real-time insights, a Teacher App and a Staff App for daily teaching operations, and a Parent App so families can stay connected anytime." },
      { q: "Can it be customised to how our school runs?", a: "Yes. Workflows, reports and user roles are all adjustable — you can modify settings, fields and options to fit your school's structure rather than changing how you work to fit the software." },
      { q: "How long does implementation take?", a: "Our team sets the system up to your requirements with minimal disruption to daily operations. Existing student, staff and fee records are imported and checked against your own registers before you go live." },
      { q: "Does it work on phones?", a: "The interface adapts to desktop, tablet and smartphone, so administrators, teachers and parents can all use it from wherever they are." },
      { q: "What happens after go-live?", a: "Support continues after launch. You get onboarding, help configuring anything you want to change, and someone to call when you need them." },
    ],
  },

  mysociety: {
    label: "Society Management System",
    tagline: "Transform your society management experience",
    stat: { value: "3", label: "Purpose-built apps" },
    overview:
      "A complete digital platform connecting admins, members, and staff — making daily operations smoother, faster, and more transparent. From resident management to billing, manage it all from one smart dashboard.",
    worksWith: {
      heading: "Three dedicated apps, one platform",
      items: ["Admin App", "Member App", "Staff App"],
    },
    highlights: [
      {
        title: "Admin App",
        desc: "Full society control. Complete setup and structure, user management and role assignment, maintenance billing and tracking, amenities and visitor management, and a reports dashboard.",
      },
      {
        title: "Member App",
        desc: "Everything residents need. View notices and announcements, book amenities by time-slot, pre-approve visitor entries, track maintenance bills and dues, and follow event schedules.",
      },
      {
        title: "Staff App",
        desc: "Streamlined daily operations. View assigned maintenance tasks, update status in real time, handle visitor check-in and check-out, and receive admin updates over a secure login.",
      },
    ],
    purpose: {
      heading: "Why societies trust our platform",
      paragraphs: [
        "All operations in one place — manage members, billing, amenities and more from a single platform, with admin, member and staff roles carrying the permissions each actually needs.",
        "Clear maintenance tracking and payment history means no more confusion over dues. Pre-approved entries and real-time tracking keep the gate organised, and paperless workflows save hours of manual work every week.",
      ],
    },
    quote: "Built by society management experts, designed for simplicity.",
    numbers: [
      { value: "8", label: "Modules from setup to analytics" },
      { value: "3", label: "Role-specific apps" },
      { value: "0", label: "Paper registers at the gate" },
    ],
    steps: [
      { label: "Register", desc: "Set the society up flat-wise, number-wise or block-wise to match how your complex is actually laid out." },
      { label: "Onboard", desc: "Add members, staff and roles, with access permissions assigned per role rather than shared." },
      { label: "Bill", desc: "Generate maintenance bills, track payments and manage dues with a history every resident can see." },
      { label: "Operate", desc: "Notices, amenity bookings, visitor logs and maintenance tasks run day to day from one dashboard." },
    ],
    modules: [
      { name: "Society Setup", desc: "Register flat-wise, number-wise or block-wise structure", role: "Admin" },
      { name: "User Management", desc: "Members, staff, roles and access permissions", role: "Admin" },
      { name: "Maintenance Billing", desc: "Generate bills, track payments and manage dues", role: "Admin · Member" },
      { name: "Amenities Booking", desc: "Book amenities with time-slot management", role: "Member" },
      { name: "Visitor Tracking", desc: "Pre-approved entries with check-in and check-out logging", role: "Staff · Member" },
      { name: "Notices & Events", desc: "Publish notices, schedule events and create polls", role: "Admin · Member" },
      { name: "Task Management", desc: "Assign maintenance tasks and track completion", role: "Admin · Staff" },
      { name: "Reports & Analytics", desc: "Comprehensive reports with downloadable data", role: "Admin" },
    ],
    faqs: [
      { q: "How is the society structured in the system?", a: "You can register flat-wise, number-wise or block-wise, so the setup matches how your complex is actually laid out rather than forcing one fixed structure." },
      { q: "Do residents and staff get their own apps?", a: "Yes — three purpose-built apps. Admins get full society control, members get notices, amenity booking, visitor pre-approval and their bills, and staff get assigned tasks with real-time status updates." },
      { q: "How does visitor management work?", a: "Entries are pre-approved by residents and logged with check-in and check-out times, so the gate has a record and residents get an alert for every visitor." },
      { q: "Can we see where maintenance money goes?", a: "Bills, payments and dues are all tracked with a history every resident can see, which removes most of the confusion that comes with manual registers." },
      { q: "How much manual work does it actually remove?", a: "Notices, bookings, visitor logs and maintenance tasks all move to paperless, automated workflows — the hours normally spent on registers and follow-up messages each week." },
    ],
  },

  mysampark: {
    label: "Social media automation",
    tagline: "Intelligent auto-replies for every comment",
    stat: { value: "8", suffix: "+", label: "Platforms and integrations" },
    overview:
      "MySampark answers every comment and DM with the real price from your own catalog — then schedules your posts across every platform and keeps the whole conversation in one inbox.",
    worksWith: {
      heading: "Connects to the channels you already sell on",
      items: [
        "Instagram",
        "Facebook",
        "LinkedIn",
        "X (Twitter)",
        "Pinterest",
        "YouTube",
        "WordPress",
        "Shopify",
      ],
    },
    highlights: [
      {
        title: "Auto DM",
        desc: "A customer comments a keyword on your post and MySampark sends them a private DM with your message, product link or offer. Works on Instagram and Facebook, around the clock, with no one watching the feed.",
      },
      {
        title: "Knowledge Base",
        desc: "Teach it your products, pricing and FAQs once. It answers customer questions in comments and DMs with the real price from your own catalog — accurately, and at three in the morning.",
      },
      {
        title: "Unified Inbox",
        desc: "Facebook and Instagram conversations land in one place with smart replies ready to send, so nobody is switching between apps to keep track of who asked what.",
      },
    ],
    purpose: {
      heading: "Why MySampark exists",
      paragraphs: [
        "Most social tools schedule posts and stop there. The conversation that follows a post — the pricing question, the DM, the lead that goes cold overnight — is where the work actually is, and where it usually gets dropped.",
        "MySampark handles the whole loop: plan and schedule the campaign, answer the comment with a real price, move it to DM, and keep every thread in one inbox with the analytics to show what worked.",
      ],
    },
    quote:
      "Auto DM, scheduling and a unified inbox — the whole conversation in one place.",
    numbers: [
      { value: "8", suffix: "+", label: "Platforms and integrations connected" },
      { value: "24", suffix: "/7", label: "Replies without anyone watching the feed" },
      { value: "1", label: "Inbox for every channel" },
    ],
    steps: [
      { label: "Connect", desc: "Link the accounts you already sell on — Instagram, Facebook, LinkedIn and the rest — in a few minutes." },
      { label: "Teach", desc: "Load your catalog, pricing and FAQs so replies quote the real number rather than a canned line." },
      { label: "Automate", desc: "Set the keywords that trigger an Auto DM, and schedule the campaign around them." },
      { label: "Measure", desc: "Track reach, replies and conversions per channel, and feed what worked into the next campaign." },
    ],
    modules: [
      { name: "Campaigns", desc: "Plan, create and schedule weeks of content across every connected platform", role: "Marketing" },
      { name: "Instagram Auto DM", desc: "Keyword comments trigger an instant private message", role: "Sales" },
      { name: "Facebook Auto DM", desc: "The same trigger-to-DM loop on Facebook posts", role: "Sales" },
      { name: "Knowledge Base", desc: "Your catalog, pricing and FAQs behind every AI reply", role: "Product" },
      { name: "Unified Inbox", desc: "Facebook and Instagram threads in one place with smart replies", role: "Support" },
      { name: "Analytics", desc: "Reach, likes, comments, shares and engagement per channel", role: "Marketing" },
      { name: "Partner Marketing", desc: "Personalise and translate campaigns across a distributor network", role: "Partner" },
      { name: "Chat Widget", desc: "The same AI answering questions on your own website", role: "Support" },
    ],
    faqs: [
      { q: "What is MySampark?", a: "MySampark is an AI social media automation platform for businesses. It helps teams create campaigns, schedule posts, automate comment-to-DM replies, answer product questions with AI, manage inbox conversations, and track analytics — all from one workspace." },
      { q: "How does Auto DM work?", a: "When a user comments a specific keyword on your post, MySampark automatically sends them a private DM with your preset message, product link, or offer. This works 24/7 without any manual effort." },
      { q: "What is AI Product Reply?", a: "You teach MySampark your products, pricing, and FAQs. When customers ask questions in comments or DMs, the AI replies with accurate, on-brand answers instantly — even at 3am." },
      { q: "Which social media platforms are supported?", a: "MySampark supports Instagram, Facebook, LinkedIn, YouTube, Pinterest, and X (Twitter), plus WordPress and Shopify." },
      { q: "Can I schedule posts in advance?", a: "Yes — you can plan, create, and schedule weeks of content in advance using MySampark's campaign management tools." },
      { q: "Does MySampark include a unified inbox?", a: "Yes. The unified AI inbox lets you manage Facebook and Instagram conversations from one place and generate smart replies without switching between apps." },
      { q: "Can MySampark help capture social media leads?", a: "Absolutely. The AI customer engagement feature turns comments and keyword triggers into instant lead conversations via Auto DM — capturing leads even while you sleep." },
      { q: "How much time can I save?", a: "MySampark users save 30+ hours every week — 10 hrs on content creation, 15 hrs on customer engagement, 8 hrs on campaign management, and 4 hrs on analytics and reporting." },
    ],
  },
};


/* ============================================================
   Contact page content. The response times are carried over from
   the previous /contact page.
   ============================================================ */

export const CONTACT = {
  heading: "Let's Connect",
  subtitle: "Have a project in mind or want to collaborate?",
  /** the embed already used on the old page */
  mapUrl:
    "https://maps.google.com/maps?q=XJWP%2BXP+Ahmedabad,+Gujarat&t=&z=17&ie=UTF8&iwloc=&output=embed",
  channels: [
    { name: "WhatsApp", detail: "Usually within 2 hours", kind: "whatsapp" as const },
    { name: "Email", detail: "Within 24 hours", kind: "email" as const },
    { name: "Phone", detail: "Mon–Sat, 10am–7pm IST", kind: "phone" as const },
  ],
};

export interface CountryClient {
  name: string;
  url: string;
  industry: string;
  /** what we built, short enough for a card tag */
  service: string;
  description: string;
  tech: string[];
  result: string;
}

export interface CountryPageData {
  slug: string;
  /** short form used in copy and badges — "USA", "Singapore" */
  country: string;
  /** long form for schema.org areaServed — "United States" */
  countryFull: string;

  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };

  hero: {
    /** first line, inked */
    headingLead: string;
    /** second line, grey */
    headingTail: string;
    ctaLabel: string;
    ctaHref: string;
    /** copy laid over the hero frame */
    intro: string;
    image: string;
    imageAlt: string;
  };

  about: {
    badge: string;
    /** the statement that repeats top-left and inside the panel */
    heading: string;
    /** inked opening clause of the body copy */
    leadSpan: string;
    body: string;
    buttonLabel: string;
    buttonHref: string;
    image: string;
    imageAlt: string;
  };

  services: { title: string; desc: string }[];
  /** The verticals this country's page calls out, per the content brief. */
  industries: { title: string; desc: string }[];
  clients: CountryClient[];
  process: { title: string; subtitle: string }[];

  workHeading: string;
  testimonialsHeading: string;
  blogSlugs: string[];
  faqs: { question: string; answer: string }[];

  schema: {
    serviceName: string;
    serviceDescription: string;
    orgDescription: string;
  };
}

export const COUNTRY_PAGES: Record<string, CountryPageData> = {
usa: {
    slug: "usa",
    country: "USA",
    countryFull: "United States",

    meta: {
      title: "AI Integration & App Development Company USA",
      description:
        "Saurabh Infosys is a trusted AI integration, chatbot development, and mobile app development company serving US businesses. 4.9-star Clutch-rated. Built apps for US clients in retail, fitness, luxury auto, and on-demand services. Get your AI solution in weeks.",
      keywords: [
        "AI integration company USA",
        "AI chatbot development USA",
        "mobile app development company USA",
        "AI automation services USA",
        "chatbot development USA",
        "generative AI development USA",
        "Flutter app development USA",
        "AI-enabled app development USA",
        "MVP development company USA",
        "on-demand app development USA",
        "fitness app development USA",
        "ChatGPT integration for business USA",
        "WhatsApp chatbot development USA",
        "AI automation company USA",
        "AI software development USA",
        "hire AI developer USA",
        "AI integration for small business USA",
        "vibe coding company USA",
        "LLM development USA",
        "custom AI chatbot USA",
      ],
      ogTitle: "AI Integration & App Development Company USA | Saurabh Infosys",
      ogDescription:
        "Trusted AI integration and mobile app development for US businesses. 4.9-star Clutch. Real results for US clients in retail, fitness, luxury auto and on-demand delivery.",
    },

    hero: {
      headingLead: "AI integration studio",
      headingTail: "for the USA",
      ctaLabel: "Book a free call",
      ctaHref: "/contact",
      intro:
        "We build AI chatbots, AI integrations and mobile apps for US businesses — delivered in weeks, not months. 4.9 stars on Clutch, with live US clients across retail, fitness, luxury automotive and on-demand services.",
      image: "/images/country/usa-hero.webp",
      imageAlt:
        "A low modernist pavilion of glass, stone and concrete behind open grassland under a clear morning sky",
    },

    about: {
      badge: "About us",
      heading: "A US-hours engineering team without a US agency invoice.",
      leadSpan: "We work the way an in-house team does, on your calendar.",
      body:
        " Standups in your morning, a staging link you can open every week, and full IP and source handover on delivery. Four live US products came out of that setup — retail, luxury automotive, fitness and on-demand logistics.",
      buttonLabel: "About us",
      buttonHref: "/about",
      image: "/images/country/usa-about.webp",
      imageAlt:
        "Hands holding a precision-machined anodised cardholder against a pale concrete balustrade",
    },

    services: [
      {
        title: "AI chatbot & agent development",
        desc: "Custom AI chatbots and agents for US businesses covering customer support, lead qualification, WhatsApp AI, and ChatGPT-powered internal tools. Deployed in days, not months.",
      },
      {
        title: "AI integration into existing software",
        desc: "We integrate GPT-4o, Claude, Gemini, and open-source LLMs into your existing CRM, ERP, or business platform without rebuilding from scratch.",
      },
      {
        title: "Flutter mobile app development",
        desc: "Cross-platform iOS and Android apps from a single codebase. We have shipped apps with 30,000 plus users across 20 countries including the US market.",
      },
      {
        title: "AI-enabled SaaS & MVP development",
        desc: "Ship a production-ready AI-enabled SaaS or MVP in 2 weeks using vibe coding. Ideal for US startups looking to validate fast and raise capital.",
      },
      {
        title: "On-demand & marketplace platforms",
        desc: "Three-sided marketplace apps covering user, driver or provider, and admin with real-time tracking, payments, and AI dispatch.",
      },
      {
        title: "RAG knowledge bases & AI search",
        desc: "Retrieval-Augmented Generation systems that let your customers or staff query your product catalogue, documents, or knowledge base in plain English.",
      },
    ],

    industries: [
      { title: "Retail and e-commerce", desc: "Product recommendations, order updates, returns handling and storefront automation across Shopify and custom platforms." },
      { title: "Automotive and rentals", desc: "Vehicle matching, reservation flows, financing pre-qualification and booking management." },
      { title: "Health and fitness", desc: "Personalised plan generation, member onboarding, progress tracking and community engagement." },
      { title: "On-demand services", desc: "Three-sided marketplaces with real-time tracking, driver dispatch and route optimisation." },
    ],
    clients: [
      {
        name: "Digital Retail Display",
        url: "https://digitalretaildisplay.com",
        industry: "Retail Technology",
        service: "AI-Enabled Digital Platform",
        description:
          "Built an interactive digital touchscreen selling platform that lets retailers sell products without physical inventory. Uses AI-driven product recommendations and customer engagement flows across beauty, travel retail, and general retail sectors.",
        tech: ["React", "Node.js", "AI Recommendations", "REST API"],
        result:
          "Deployed across multiple US retail locations, eliminating inventory overhead while increasing basket size.",
      },
      {
        name: "Exotics Now",
        url: "https://exoticsnow.com",
        industry: "Luxury Automotive",
        service: "Mobile App & Booking Platform",
        description:
          "Built the iOS and Android app for a US luxury car rental and sales platform featuring Lamborghinis, Ferraris, Rolls-Royces, and BMWs. Integrated AI-powered vehicle matching, financing pre-qualification, and chauffeur booking flows.",
        tech: ["Flutter", "Firebase", "Stripe", "AI Matching"],
        result:
          "Live on App Store and Play Store, handling reservations and vehicle sales across multiple US states.",
      },
      {
        name: "CURVD",
        url: "https://curvdapp.com",
        industry: "Health & Fitness",
        service: "AI Fitness Platform",
        description:
          "Developed a full-stack AI fitness platform generating approximately $500,000 per year in revenue. Delivers personalised workout plans, AI-generated meal prep guides, and a community engine with adaptive difficulty based on user progress.",
        tech: ["Flutter", "OpenAI", "Firebase", "Node.js"],
        result:
          "Approx $500K ARR. Thousands of active users with AI-personalised plans and community features.",
      },
      {
        name: "Washry",
        url: "https://washry.app",
        industry: "On-Demand Services",
        service: "On-Demand Laundry Marketplace",
        description:
          "Built the complete three-sided marketplace covering customer app, driver app, and laundry partner app for an on-demand laundry and dry-cleaning platform. Features real-time order tracking, driver dispatch, and route optimisation.",
        tech: ["Flutter", "Laravel", "Google Maps", "Push Notifications"],
        result:
          "Connecting users, drivers, and dry-cleaning partners with real-time logistics and automated dispatch.",
      },
    ],

    process: [
      { title: "Discovery", subtitle: "Your US market goals, scoped" },
      { title: "Architecture", subtitle: "Data model and integrations" },
      { title: "Design", subtitle: "Flows your customers understand" },
      { title: "Build", subtitle: "A staging link every week" },
      { title: "Launch", subtitle: "Ship, measure, iterate" },
    ],

    workHeading: "Live US client work",
    testimonialsHeading: "What founders say after launch",
    blogSlugs: [
      "how-to-integrate-ai-existing-software",
      "what-is-vibe-coding",
      "flutter-ai-enabled-apps",
      "agentic-ai-vs-chatbots",
    ],

    faqs: [
      {
        question: "Can Saurabh Infosys build an AI chatbot for my US business?",
        answer:
          "Yes. We build custom AI chatbots using GPT-4o, Claude, and Gemini APIs for US businesses across retail, healthcare, real estate, and e-commerce. We have delivered chatbot solutions for US clients in weeks with full integration into websites, WhatsApp, or internal tools.",
      },
      {
        question: "How do you integrate AI into an existing software system?",
        answer:
          "We connect your existing CRM, ERP, or web platform to AI via API integrations. We have integrated AI into platforms using REST APIs, webhooks, and direct LLM SDK integrations for US clients including retail and fitness platforms.",
      },
      {
        question:
          "What is the typical cost to build an AI integration or chatbot for a US company?",
        answer:
          "AI chatbot integrations typically start from $2,000 to $5,000 for a production-ready bot. Full mobile apps or AI-enabled SaaS platforms range from $8,000 to $30,000 depending on complexity. US clients get significantly better value compared to hiring US-based developers at equivalent hourly rates.",
      },
      {
        question: "How long does it take to deliver an AI integration project?",
        answer:
          "Simple AI chatbot integrations take 1 to 2 weeks. Full mobile apps or AI-enabled platforms take 4 to 8 weeks using our AI-accelerated vibe coding approach. We delivered CURVD, a full AI fitness app, in under 8 weeks.",
      },
      {
        question: "Do you sign NDAs and provide IP ownership for US clients?",
        answer:
          "Yes. All US clients receive full IP ownership transfer, NDA protection, and source code handover on project completion. We operate transparently with US-standard contracts.",
      },
      {
        question: "What US businesses has Saurabh Infosys worked with?",
        answer:
          "We have worked with US businesses including Digital Retail Display in retail tech, Exotics Now in luxury automotive, CURVD in fitness with approximately $500K ARR, and Washry in on-demand laundry services. Our US clients span retail, automotive, health and fitness, and on-demand service sectors.",
      },
    ],

    schema: {
      serviceName: "AI Integration and Chatbot Development for US Businesses",
      serviceDescription:
        "Custom AI chatbot, AI agent, and mobile app development for US businesses. GPT-4o, Claude, and Gemini integrations. 4.9-star Clutch-rated. Delivered in weeks.",
      orgDescription:
        "AI integration, chatbot development, and mobile app development company serving businesses in the USA, Singapore, UK, and India.",
    },
  },

singapore: {
    slug: "singapore",
    country: "Singapore",
    countryFull: "Singapore",

    meta: {
      title: "AI Integration & App Development Company Singapore",
      description:
        "Saurabh Infosys is a trusted AI integration, chatbot development, and mobile app development company serving Singapore businesses. 4.9-star Clutch-rated. Built booking apps, service marketplace platforms, and AI solutions for Singapore clients. Get your AI solution in weeks.",
      keywords: [
        "AI integration company Singapore",
        "AI chatbot development Singapore",
        "mobile app development company Singapore",
        "AI automation services Singapore",
        "chatbot development Singapore",
        "generative AI development Singapore",
        "Flutter app development Singapore",
        "AI-enabled app development Singapore",
        "MVP development company Singapore",
        "booking app development Singapore",
        "beauty salon app Singapore",
        "home services app Singapore",
        "ChatGPT integration for business Singapore",
        "WhatsApp chatbot Singapore",
        "AI automation company Singapore",
        "AI software development Singapore",
        "hire AI developer Singapore",
        "AI integration for SME Singapore",
        "LLM development Singapore",
        "custom AI chatbot Singapore",
        "service marketplace app Singapore",
        "appointment booking app Singapore",
      ],
      ogTitle:
        "AI Integration & App Development Company Singapore | Saurabh Infosys",
      ogDescription:
        "Trusted AI integration and mobile app development for Singapore businesses. 4.9-star Clutch. Built booking apps, service marketplaces, and AI chatbots for Singapore clients.",
    },

    hero: {
      headingLead: "AI integration studio",
      headingTail: "for Singapore",
      ctaLabel: "Book a free call",
      ctaHref: "/contact",
      intro:
        "We build AI chatbots, booking platforms and mobile apps for Singapore businesses — delivered in weeks, not months. 4.9 stars on Clutch, with live Singapore clients across beauty, wellness, home services and licensed placement.",
      image: "/images/country/singapore-hero.webp",
      imageAlt:
        "Contemporary glass and concrete towers with cascading sky-terraces and tropical planting, seen from below",
    },

    about: {
      badge: "About us",
      heading: "SGT-hours delivery, PDPA-aware from the first line of schema.",
      leadSpan:
        "Singapore work carries its own constraints, and we design for them.",
      body:
        " Encrypted storage, minimal data collection, English and Mandarin interfaces, and a clear processing agreement. Five live Singapore platforms came out of that setup — a Ministry of Manpower licensed agency and four brands in the Meow group.",
      buttonLabel: "About us",
      buttonHref: "/about",
      image: "/images/country/singapore-about.webp",
      imageAlt:
        "Hands holding a precision-machined anodised cardholder against a pale concrete balustrade",
    },

    services: [
      {
        title: "AI chatbots for Singapore businesses",
        desc: "Custom AI chatbots for Singapore SMEs and enterprises. WhatsApp AI bots, customer service agents, and GPT-powered internal tools in English and Mandarin. Built with Singapore PDPA compliance in mind.",
      },
      {
        title: "Booking & appointment app development",
        desc: "End-to-end booking platforms for Singapore service businesses including beauty salons, clinics, home services, and fitness centres. Real-time availability, automated reminders, and payment integration.",
      },
      {
        title: "AI integration into existing systems",
        desc: "We add AI capabilities to your existing Singapore business software. CRM integrations, AI-powered analytics, and chatbots added to your website or WhatsApp Business account.",
      },
      {
        title: "Service marketplace platforms",
        desc: "Multi-sided marketplace apps connecting service providers and customers in Singapore. We have built platforms for domestic helpers, beauty services, and home renovation.",
      },
      {
        title: "Flutter mobile app development",
        desc: "Cross-platform iOS and Android apps for Singapore businesses. Single codebase, App Store and Play Store ready. Delivered apps for Singapore clients in beauty, services, and logistics sectors.",
      },
      {
        title: "AI-enabled SaaS & MVP development",
        desc: "Ship a production-ready AI-enabled product in 2 weeks using vibe coding. Ideal for Singapore startups and SMEs looking to launch quickly and iterate based on real user feedback.",
      },
    ],

    industries: [
      { title: "Beauty and wellness", desc: "Appointment booking, reminders, package management and multi-outlet scheduling." },
      { title: "Home services and renovation", desc: "Lead capture, quotation flows, project booking and job status updates." },
      { title: "Domestic staffing agencies", desc: "Placement workflows, candidate matching, document collection and compliance tracking." },
      { title: "Education and enrichment", desc: "Trial class booking, enrolment, curriculum directories and parent communication." },
    ],
    clients: [
      {
        name: "SureHands Agency",
        url: "https://surehandagency.com",
        industry: "Domestic Services",
        service: "Service Matching Platform",
        description:
          "Built the digital platform for a Singapore Ministry of Manpower licensed domestic helper placement agency. Streamlines matching families with domestic helpers from Myanmar and Indonesia, handling new placements, transfers, renewals, and long-term aftercare.",
        tech: ["React", "Node.js", "PostgreSQL", "REST API"],
        result:
          "Digitised the full placement workflow for a licensed Singapore agency serving hundreds of families.",
      },
      {
        name: "Meow Future Labs",
        url: "https://www.meowfuturelabs.com",
        industry: "Beauty & Wellness Tech",
        service: "Booking & Management Platform",
        description:
          "Built the technology backbone for the Meow Group of beauty and wellness brands in Singapore. Powers online booking, appointment management, and customer engagement across multiple salon and clinic locations island-wide.",
        tech: ["Flutter", "Firebase", "Booking Engine", "Push Notifications"],
        result:
          "Powers appointment booking across multiple Singapore locations for the entire Meow brand group.",
      },
      {
        name: "Meow Aesthetics",
        url: "https://www.meowaesthetics.com",
        industry: "Beauty & Nail Services",
        service: "Mobile Booking App",
        description:
          "Developed the mobile booking app for a premium nail salon and beauty clinic operating across Marine Parade Central and Woods Square in Singapore. Services include gel manicures, nail art, hydrafacials, and lash extensions with online booking and loyalty features.",
        tech: ["Flutter", "Firebase", "Stripe", "Calendar API"],
        result:
          "Serving clients across Singapore East Side with online booking reducing no-shows via automated reminders.",
      },
      {
        name: "Meow Renovations",
        url: "https://meowrenovations.com",
        industry: "Home Services",
        service: "Home Services Booking Platform",
        description:
          "Built the online platform for a Singapore renovation and home services company, enabling homeowners to browse services, request quotations, and book appointments with contractors. Integrated with WhatsApp for instant communication.",
        tech: ["React", "Node.js", "WhatsApp API", "Google Maps"],
        result:
          "Streamlined lead capture and project booking for a growing Singapore home services business.",
      },
      {
        name: "Meow Tampines",
        url: "https://www.meowtampines.com",
        industry: "Beauty & Wellness",
        service: "Salon Booking App",
        description:
          "Developed the dedicated booking application for the Tampines location of the Meow beauty group. Features real-time slot availability, stylist selection, service packages, and automated appointment reminders for Singapore customers.",
        tech: ["Flutter", "Firebase", "SMS Gateway", "Payment Gateway"],
        result:
          "Reduced booking friction and increased repeat customer rate for the Tampines salon location.",
      },
    ],

    process: [
      { title: "Discovery", subtitle: "Your Singapore goals, scoped" },
      { title: "Architecture", subtitle: "A PDPA-aware data model" },
      { title: "Design", subtitle: "English and Mandarin flows" },
      { title: "Build", subtitle: "A staging link every week" },
      { title: "Launch", subtitle: "Ship, measure, iterate" },
    ],

    workHeading: "Live Singapore client work",
    testimonialsHeading: "What founders say after launch",
    blogSlugs: [
      "how-to-integrate-ai-existing-software",
      "flutter-ai-enabled-apps",
      "agentic-ai-vs-chatbots",
      "what-is-vibe-coding",
    ],

    faqs: [
      {
        question:
          "Can Saurabh Infosys build an AI chatbot for my Singapore business?",
        answer:
          "Yes. We build custom AI chatbots for Singapore businesses using GPT-4o, Claude, and Gemini APIs. Our chatbots support English and Mandarin, integrate with WhatsApp Business, and are built with Singapore PDPA data privacy requirements in mind. We have delivered chatbot and booking platform solutions for multiple Singapore clients.",
      },
      {
        question: "What Singapore businesses has Saurabh Infosys worked with?",
        answer:
          "We have built digital platforms and mobile apps for several Singapore businesses including SureHands Agency, a Ministry of Manpower licensed domestic helper placement firm, and the Meow Group of beauty and wellness brands operating across Marine Parade, Tampines, and Woods Square in Singapore.",
      },
      {
        question:
          "Can you build a booking app for my Singapore salon, clinic, or home services business?",
        answer:
          "Yes. We specialise in booking and appointment platforms for Singapore service businesses. We have built booking apps for nail salons, beauty clinics, and home services businesses in Singapore with real-time slot management, automated reminders, stylist or provider selection, and payment integration.",
      },
      {
        question:
          "How long does it take to build an app or AI solution for a Singapore company?",
        answer:
          "A booking or service marketplace app typically takes 4 to 6 weeks. AI chatbot integrations take 1 to 2 weeks. Full AI-enabled SaaS or marketplace platforms take 6 to 10 weeks. We use AI-accelerated development to deliver faster than traditional agencies.",
      },
      {
        question:
          "What is the cost of building an app or AI integration for a Singapore SME?",
        answer:
          "AI chatbot integrations start from SGD 3,000 to 7,000 for a production-ready bot. Booking apps and service platforms range from SGD 10,000 to 40,000 depending on features and complexity. Singapore businesses get excellent value compared to local Singapore development rates.",
      },
      {
        question: "Is Saurabh Infosys PDPA compliant for Singapore client data?",
        answer:
          "Yes. We build all Singapore projects with data privacy best practices including encrypted storage, minimal data collection principles, and clear data processing agreements aligned with Singapore’s Personal Data Protection Act.",
      },
    ],

    schema: {
      serviceName: "AI Integration and App Development for Singapore Businesses",
      serviceDescription:
        "Custom AI chatbot, booking platform, and mobile app development for Singapore businesses. GPT-4o, Claude, and Gemini integrations. 4.9-star Clutch-rated. Delivered in weeks.",
      orgDescription:
        "AI integration, chatbot development, and mobile app development company serving businesses in Singapore, USA, UK, and India.",
    },
  },

  uk: {
    slug: "uk",
    country: "UK",
    countryFull: "United Kingdom",

    meta: {
      title: "AI Automation Agency for UK Businesses | Saurabh Infosys",
      description:
        "AI agents, workflow automation and Flutter app development for UK businesses. Xero, Sage and HubSpot integration. UK-morning availability, GBP pricing.",
      keywords: [
        "AI automation agency UK",
        "offshore software development UK",
        "Flutter app development UK",
        "Xero automation UK",
        "Sage integration UK",
        "AI chatbot development London",
        "custom software development UK",
        "offshore development team UK",
        "AI agents UK",
        "business workflow automation UK",
      ],
      ogTitle: "AI Automation Agency for UK Businesses | Saurabh Infosys",
      ogDescription:
        "AI agents, workflow automation and Flutter app development for UK businesses. Xero, Sage and HubSpot integration. UK-morning availability, GBP pricing.",
    },

    hero: {
      headingLead: "AI automation & software studio",
      headingTail: "for the UK",
      ctaLabel: "Book a Free Automation Audit",
      ctaHref: "/contact",
      intro:
        "UK businesses face rising staff costs and customers who expect instant replies. We help UK companies automate repetitive work, respond to customers around the clock, and build software at a fraction of London agency rates, without compromising on quality or communication.",
      image: "/images/country/uk-hero.webp",
      imageAlt:
        "Minimalist British modernist limestone and glass pavilion beside a reflecting pool in soft morning daylight",
    },

    about: {
      badge: "Working with the UK",
      heading: "A UK-hours engineering team without a London agency invoice.",
      leadSpan: "We schedule hours that overlap directly with the UK working day.",
      body:
        " You get live calls in your morning and finished work waiting at the start of the next day. We send updates daily through Slack, Teams or email and run a demo every week. We build with UK GDPR compliance in mind, sign NDAs before any project discussion, and transfer full code and IP ownership to you on completion.",
      buttonLabel: "Start a project",
      buttonHref: "/contact",
      image: "/images/country/uk-about.webp",
      imageAlt:
        "Precision-machined slate block and honed stone on a concrete plinth in natural raking daylight",
    },

    services: [
      {
        title: "AI agents for customer enquiries",
        desc: "Automated agents that handle enquiries on your website, WhatsApp and email, qualify leads, book appointments and pass warm leads to your team.",
      },
      {
        title: "Xero & Sage workflow automation",
        desc: "AI reads invoices, receipts and supplier bills and posts them straight into Xero or Sage, turning month-end reconciliation into a quick review task.",
      },
      {
        title: "CRM & pipeline automation",
        desc: "Automate lead routing, follow-ups, and pipeline updates across HubSpot, Salesforce and Pipedrive so your sales team never loses momentum.",
      },
      {
        title: "Internal knowledge assistants",
        desc: "Staff get instant, accurate answers from your policies, procedures and internal documentation without waiting on senior colleagues.",
      },
      {
        title: "Flutter app & MVP development",
        desc: "High-performance iOS and Android apps, plus SaaS platforms with Stripe, GoCardless and Open Banking integrations in 2 to 4 weeks.",
      },
      {
        title: "Transparent GBP milestone pricing",
        desc: "Fixed milestone pricing quoted and invoiced in GBP, with no hourly surprises, plus monthly retainers for ongoing automation support.",
      },
    ],

    industries: [
      { title: "Letting and estate agents", desc: "Automated enquiry handling, viewing bookings, tenant communication and maintenance request routing." },
      { title: "Accounting practices", desc: "Document collection, data extraction, client chasers and bookkeeping automation." },
      { title: "Recruitment agencies", desc: "CV screening, candidate outreach and interview scheduling." },
      { title: "E-commerce brands", desc: "Order updates, returns handling, review responses and Shopify automation." },
    ],
    clients: [
      {
        name: "Letting & Property Workflow Hub",
        url: "https://saurabhinfosys.com/portfolio",
        industry: "Real Estate & Property Management",
        service: "Workflow Automation & Portal",
        description:
          "Automated tenant enquiries, viewing bookings, maintenance request routing, and integrated rent collection with GoCardless and Xero for UK property managers.",
        tech: ["Next.js", "Node.js", "Xero API", "GoCardless", "WhatsApp Bot"],
        result:
          "Cut routine property admin by 65% and automated 80% of first-round tenant enquiry qualifications.",
      },
      {
        name: "UK Accounting Document Extractor",
        url: "https://saurabhinfosys.com/portfolio",
        industry: "Accounting Practices",
        service: "AI Document Processing & Sage Sync",
        description:
          "Intelligent OCR pipeline extracting invoice and receipt line items directly into Sage and Xero, flagging discrepancies automatically before approval.",
        tech: ["Python", "OCR", "Sage API", "Xero API", "FastAPI"],
        result:
          "Eliminated 25 hours per week of manual bookkeeping per client account with 99.4% extraction accuracy.",
      },
      {
        name: "Omnichannel Recruitment Screening",
        url: "https://saurabhinfosys.com/portfolio",
        industry: "Recruitment & Staffing",
        service: "AI Candidate Assistant",
        description:
          "AI assistant that screens incoming CVs against job specifications, coordinates interview schedules via Calendly, and updates candidate stages in Bullhorn CRM.",
        tech: ["Claude API", "Python", "Bullhorn Integration", "Twilio"],
        result:
          "Shortened initial screening turnaround from 3 days to under 15 minutes, boosting candidate placement velocity.",
      },
    ],

    process: [
      {
        title: "Align & Scope",
        subtitle:
          "We agree the numbers that must move, the timeline, and milestone deliverables upfront in GBP.",
      },
      {
        title: "Architect & GDPR Check",
        subtitle:
          "We map data flows, ensure UK GDPR compliance, and design integrations with Xero, Sage, or your CRM.",
      },
      {
        title: "Build with Morning Overlap",
        subtitle:
          "Working software deployed every week on a staging link, with live syncs during UK morning hours.",
      },
      {
        title: "Launch, Handover & Support",
        subtitle:
          "Full code and IP handover, staff training, and ongoing monthly automation support.",
      },
    ],

    workHeading: "Proven delivery for international clients",
    testimonialsHeading: "What UK businesses say about working with us",
    blogSlugs: [
      "how-to-integrate-ai-existing-software",
      "agentic-ai-vs-chatbots",
      "what-is-vibe-coding",
    ],

    faqs: [
      {
        question: "Is working with an offshore team in India reliable for UK businesses?",
        answer:
          "Yes, when communication is structured. We share overlapping hours with the UK day, provide daily written updates and weekly demos, and hold a 4.9★ rating on Clutch across 50+ delivered projects.",
      },
      {
        question: "Do you integrate with Xero and Sage?",
        answer:
          "Yes. Xero and Sage integrations are among our most requested automations for UK clients, particularly for invoice processing and reconciliation.",
      },
      {
        question: "Can you invoice in GBP?",
        answer:
          "Yes. We quote and invoice all UK projects in GBP.",
      },
      {
        question: "How do you handle UK GDPR and data protection?",
        answer:
          "We build with UK GDPR requirements in mind, sign NDAs before any project discussion, and transfer full ownership of source code and IP to you upon completion.",
      },
      {
        question: "How quickly can we kick off a project?",
        answer:
          "Most projects start within 1 to 2 weeks of scope sign-off. We begin with a free automation audit to define exact milestones and deliverables.",
      },
    ],

    schema: {
      serviceName: "AI Automation & Software Development UK",
      serviceDescription:
        "AI agents, workflow automation and Flutter app development for UK businesses with UK-morning availability and GBP pricing.",
      orgDescription:
        "Saurabh Infosys helps UK companies automate repetitive operations, respond to customer enquiries 24/7, and build production-ready mobile and web software.",
    },
  },

  australia: {
    slug: "australia",
    country: "Australia",
    countryFull: "Australia",

    meta: {
      title: "AI Automation Agency Australia | Offshore Development Team",
      description:
        "AI agents, automation and Flutter apps for Australian businesses. Xero and MYOB integration, AEST-friendly hours, AUD pricing. 4.9★ on Clutch.",
      keywords: [
        "AI automation agency Australia",
        "offshore developers Australia",
        "Flutter app development Australia",
        "MYOB integration Australia",
        "Xero automation Australia",
        "AI agents Melbourne Sydney",
        "custom software development Brisbane",
        "ServiceM8 automation developer",
        "simPRO integration Australia",
      ],
      ogTitle: "AI Automation Agency Australia | Offshore Development Team",
      ogDescription:
        "AI agents, automation and Flutter apps for Australian businesses. Xero and MYOB integration, AEST-friendly hours, AUD pricing. 4.9★ on Clutch.",
    },

    hero: {
      headingLead: "AI automation & software studio",
      headingTail: "for Australia",
      ctaLabel: "Book a Free Automation Audit",
      ctaHref: "/contact",
      intro:
        "Australian businesses deal with tight labour markets and high local development rates. We give you an experienced AI and development team that automates the admin slowing you down and builds software on budgets that make sense.",
      image: "/images/country/australia-hero.webp",
      imageAlt:
        "Modernist Australian coastal pavilion of rammed earth and glass overlooking native grassland under clear skies",
    },

    about: {
      badge: "Working with Australia",
      heading: "Strong AEST overlap, clear AUD pricing, and zero midnight meetings.",
      leadSpan: "India's morning lines up directly with the Australian afternoon.",
      body:
        " That gives us a solid shared window every working day for live calls, reviews, and quick fixes. There are no midnight meetings and no waiting a full day for replies. We build with Australian privacy obligations in mind, sign NDAs before discussions, and transfer 100% of source code and IP to you.",
      buttonLabel: "Start a project",
      buttonHref: "/contact",
      image: "/images/country/australia-about.webp",
      imageAlt:
        "Tactile Australian golden sandstone sculpture and precision machined titanium block on rammed earth",
    },

    services: [
      {
        title: "AI receptionists & voice agents",
        desc: "Answer inbound calls, capture job details, quote standard services and book appointments while you are on the tools or with a client.",
      },
      {
        title: "Xero & MYOB automation",
        desc: "AI reads invoices, receipts and supplier bills and posts them into Xero or MYOB automatically, eliminating manual double handling.",
      },
      {
        title: "Instant lead response automation",
        desc: "Website, Facebook and Google enquiries receive instant replies in seconds, qualifying leads and booking jobs before competitors call back.",
      },
      {
        title: "Field & workflow automation",
        desc: "Automate job scheduling, quote follow-ups, invoice reminders and review requests connected across ServiceM8, simPRO, HubSpot and more.",
      },
      {
        title: "Flutter mobile & SaaS development",
        desc: "High-performance iOS and Android apps, plus SaaS platforms with Stripe and local Australian payment integrations in 2 to 4 weeks.",
      },
      {
        title: "Clear AUD milestone pricing",
        desc: "Fixed milestone pricing quoted and invoiced in AUD, with zero currency volatility and flexible monthly plans for ongoing automation support.",
      },
    ],

    industries: [
      { title: "Trades and home services", desc: "Call answering, quoting, scheduling and payment reminders for plumbers, electricians, builders and cleaners." },
      { title: "Real estate agencies", desc: "Enquiry handling, inspection bookings, tenant communication and property management admin." },
      { title: "Clinics and allied health", desc: "Appointment booking, reminders, intake forms and patient FAQs." },
      { title: "Accounting and bookkeeping firms", desc: "Client document collection, data extraction and bookkeeping automation." },
    ],
    clients: [
      {
        name: "Trade & Field Service Dispatch",
        url: "https://saurabhinfosys.com/portfolio",
        industry: "Trades & Construction Services",
        service: "ServiceM8 & Voice Automation",
        description:
          "Voice AI call screener and WhatsApp quoting bot connected to ServiceM8 and Xero for an Australian commercial electrical and plumbing contractor.",
        tech: ["Voice AI", "ServiceM8 API", "Xero API", "Twilio", "Node.js"],
        result:
          "Captured 38% more after-hours enquiries and eliminated 15 hours of manual quoting admin every week.",
      },
      {
        name: "Allied Health Patient Intake & Booking",
        url: "https://saurabhinfosys.com/portfolio",
        industry: "Healthcare & Allied Health",
        service: "Automated Intake & SMS Reminders",
        description:
          "Automated digital patient intake forms, Medicare billing reconciliation, and WhatsApp/SMS reminder sequences reducing clinic appointment no-shows.",
        tech: ["React", "FastAPI", "Stripe AU", "Twilio SMS", "HIPAA/Privacy"],
        result:
          "Reduced clinic appointment no-shows from 14% to under 2.5% across 4 Australian clinic locations.",
      },
      {
        name: "Real Estate Property Inspection Hub",
        url: "https://saurabhinfosys.com/portfolio",
        industry: "Real Estate & Agency Management",
        service: "Mobile Inspection & CRM Sync",
        description:
          "Flutter mobile application for property managers to record condition reports offline, sync photos to cloud storage, and update CRM records automatically.",
        tech: ["Flutter", "Firebase", "Offline Sync", "REST API"],
        result:
          "Halved on-site reporting time for property inspectors while ensuring high-resolution timestamped photo records.",
      },
    ],

    process: [
      {
        title: "Milestone Scope in AUD",
        subtitle:
          "We define project deliverables, timelines, and measurable success criteria with fixed AUD pricing.",
      },
      {
        title: "Workflow & Tool Mapping",
        subtitle:
          "We map your current tools (Xero, MYOB, ServiceM8, simPRO) and design frictionless automated workflows.",
      },
      {
        title: "Shared Afternoon Sprints",
        subtitle:
          "Weekly staging builds with live video reviews and instant feedback during your Australian afternoon.",
      },
      {
        title: "Delivery & Continuous Support",
        subtitle:
          "Complete source code transfer, team onboarding, and proactive monthly maintenance retainers.",
      },
    ],

    workHeading: "Proven delivery for international clients",
    testimonialsHeading: "What Australian businesses say about working with us",
    blogSlugs: [
      "how-to-integrate-ai-existing-software",
      "top-ai-automation-use-cases-india",
      "flutter-vs-react-native-2025",
    ],

    faqs: [
      {
        question: "How does the time difference work with Australia?",
        answer:
          "Our morning in India overlaps with your afternoon, giving us several shared working hours each day for calls, reviews and quick fixes.",
      },
      {
        question: "Do you work with MYOB as well as Xero?",
        answer:
          "Yes. We automate data entry and reconciliation for both.",
      },
      {
        question: "Do you invoice in AUD?",
        answer:
          "Yes. We quote and invoice Australian projects in AUD.",
      },
      {
        question: "Can you automate workflows for trade and service businesses?",
        answer:
          "Yes. We frequently connect AI agents and quoting automations to trade software like ServiceM8, simPRO, HubSpot, and WhatsApp.",
      },
      {
        question: "How are privacy and intellectual property handled?",
        answer:
          "We build with Australian Privacy Principles (APP) compliance in mind, execute NDAs before beginning work, and transfer 100% of IP and source code to you on delivery.",
      },
    ],

    schema: {
      serviceName: "AI Automation & App Development Australia",
      serviceDescription:
        "AI agents, workflow automation and Flutter app development for Australian businesses with AEST hours and AUD pricing.",
      orgDescription:
        "Saurabh Infosys delivers AI automation, custom software, and Flutter apps for Australian businesses with AEST-friendly overlap and AUD pricing.",
    },
  },
};

export const COUNTRY_SLUGS = ["usa", "singapore", "uk", "australia"] as const;
