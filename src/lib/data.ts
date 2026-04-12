export const COMPANY = {
  name: "Saurabh Infosys",
  tagline: "AI-first software development studio",
  location: "Ahmedabad, Gujarat, India",
  website: "saurabhinfosys.com",
  email: "info@saurabhinfosys.com",
  phone: "+91 87350 01217",
  whatsapp: "918735001217",
  stats: {
    clients: "80+",
    projects: "50+",
    years: "4+",
    saasProducts: "3",
    clutchRating: "4.9",
    clutchReviews: "33",
  },
};

export const SERVICES = [
  {
    slug: "ai-agents",
    title: "AI Automation Services",
    shortTitle: "AI Automation",
    icon: "🤖",
    description:
      "Agentic AI & GenAI services — WhatsApp bots, RAG systems, voice agents, and AI integration into your existing business software. Real business impact, delivered in weeks.",
    features: [
      "Agentic AI & GenAI Development",
      "WhatsApp Business Automation",
      "AI Integration into Existing Systems",
      "RAG Knowledge Bases",
      "Voice Agents (Hindi/English)",
      "CRM & API AI Integration",
    ],
    heroDesc:
      "We deliver AI automation, Agentic AI, and GenAI services for Indian businesses — automating workflows, integrating AI into existing software, and building intelligent agents that run 24/7.",
    useCases: [
      { title: "Agentic AI & Automation", desc: "Automate customer support, lead qualification, and repetitive workflows via AI agents." },
      { title: "AI Integration", desc: "Integrate GPT-4o, RAG, and GenAI into your existing CRM, ERP, or business software." },
      { title: "Voice Agents", desc: "AI phone agents that handle inbound calls in Hindi and English." },
    ],
  },
  {
    slug: "vibe-coding",
    title: "Vibe Coding / AI-Enabled Apps",
    shortTitle: "Vibe Coding",
    icon: "⚡",
    description:
      "India's leading vibe coding studio. Ship AI-enabled apps and production-ready MVPs in 2 weeks, not 2 months.",
    features: [
      "2-Week AI-Enabled App Delivery",
      "Built-in AI Features (Chat, Recommendations)",
      "Next.js / React / Flutter",
      "Supabase / Firebase Backend",
      "Payment Integration",
      "Admin Dashboard Included",
    ],
    heroDesc:
      "Using vibe coding and AI-accelerated development, we build AI-enabled apps and MVPs in 2 weeks at a fraction of traditional cost. Validate your idea fast.",
    useCases: [
      { title: "AI-Enabled Apps", desc: "Apps with built-in AI — smart search, chatbots, recommendations, and automation." },
      { title: "Startup MVPs", desc: "Validate your idea with a production-ready app in 2 weeks." },
      { title: "Internal Tools", desc: "Replace spreadsheets with AI-powered dashboards and automation." },
    ],
  },
  {
    slug: "flutter",
    title: "Flutter Mobile Apps",
    shortTitle: "Flutter Apps",
    icon: "📱",
    description:
      "Cross-platform iOS & Android apps with a single codebase. Live on Play Store & App Store.",
    features: [
      "iOS + Android from One Codebase",
      "Play Store & App Store Deployment",
      "Firebase / REST API Backend",
      "Push Notifications",
      "Offline-First Architecture",
      "App Store Optimization",
    ],
    heroDesc:
      "We've shipped Flutter apps used by 30,000+ customers across 20 countries. From fitness apps to dental lab management — we build it right.",
    useCases: [
      { title: "Consumer Apps", desc: "B2C apps with beautiful UI and seamless UX for iOS and Android." },
      { title: "Business Apps", desc: "Field staff, delivery, or client-facing apps with real-time data." },
      { title: "App Revamps", desc: "Migrate your legacy native app to a modern Flutter codebase." },
    ],
  },
  {
    slug: "gps",
    title: "GPS & Fleet Management",
    shortTitle: "GPS & Fleet",
    icon: "🗺️",
    description:
      "Real-time vehicle tracking, route optimization, and fleet analytics for logistics businesses.",
    features: [
      "Real-Time GPS Tracking",
      "Live Map Dashboard",
      "Driver Behaviour Analytics",
      "Route Optimization",
      "Fuel & Maintenance Logs",
      "Alerts & Notifications",
    ],
    heroDesc:
      "Custom GPS and fleet management systems built for logistics companies, transport operators, and delivery fleets.",
    useCases: [
      { title: "Transport Companies", desc: "Track your entire fleet live and reduce fuel costs with route optimization." },
      { title: "Delivery Fleets", desc: "Monitor last-mile deliveries and share live tracking links with customers." },
      { title: "School Transport", desc: "Parent-facing apps with live bus tracking and arrival notifications." },
    ],
  },
  {
    slug: "saas",
    title: "SaaS Platform Development",
    shortTitle: "SaaS Dev",
    icon: "☁️",
    description:
      "End-to-end SaaS platforms with multi-tenancy, billing, and admin dashboards — we built 3 of our own.",
    features: [
      "Multi-Tenant Architecture",
      "Subscription Billing (Razorpay/Stripe)",
      "Role-Based Access Control",
      "Admin Super Dashboard",
      "API-First Design",
      "Scalable Cloud Infrastructure",
    ],
    heroDesc:
      "We don't just build SaaS — we run our own. SSMS, MySociety, and MySampark are live products we built and operate, giving us real-world SaaS expertise.",
    useCases: [
      { title: "Vertical SaaS", desc: "Industry-specific SaaS for education, real estate, healthcare, and more." },
      { title: "Marketplace Platforms", desc: "Multi-vendor platforms with seller dashboards and buyer apps." },
      { title: "Internal SaaS", desc: "White-label platforms for enterprises with custom branding." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Tools",
    shortTitle: "Marketing Tech",
    icon: "📣",
    description:
      "Bulk WhatsApp, SMS, and email marketing tools. We built MySampark — our own marketing SaaS.",
    features: [
      "Bulk WhatsApp Campaigns",
      "SMS Marketing Automation",
      "Email Campaign Builder",
      "Contact List Management",
      "Campaign Analytics",
      "API Access for Developers",
    ],
    heroDesc:
      "Built on our own MySampark platform, we create digital marketing tools that help SMBs reach thousands of customers at minimal cost.",
    useCases: [
      { title: "SMB Campaigns", desc: "Reach your customer base via WhatsApp, SMS, and email in bulk." },
      { title: "Reseller Platforms", desc: "White-label marketing platforms for digital marketing agencies." },
      { title: "Integrations", desc: "Connect your CRM or e-commerce store to automated campaigns." },
    ],
  },
];

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
    name: "TPI Veterans NSW",
    country: "Australia",
    flag: "🇦🇺",
    description: "Website and member portal for veterans association.",
    category: "Government / NGO",
    highlight: "Veterans association",
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

export const PORTFOLIO_PROJECTS = [
  // AI
  { id: 1, title: "WhatsApp Lead Bot", category: "AI", description: "AI-powered lead capture and qualification bot for a real estate firm.", tech: ["Python", "WhatsApp API", "OpenAI"] },
  { id: 2, title: "RAG Document Assistant", category: "AI", description: "Internal knowledge base chatbot trained on company SOPs.", tech: ["LangChain", "Pinecone", "Next.js"] },
  { id: 3, title: "Voice IVR Agent", category: "AI", description: "Hindi/English voice agent handling 500+ daily inbound calls.", tech: ["Twilio", "OpenAI", "Python"] },
  // GPS
  { id: 4, title: "Fleet Tracker Pro", category: "GPS", description: "Real-time fleet tracking for a 200-vehicle transport company.", tech: ["React", "Node.js", "WebSockets"] },
  { id: 5, title: "School Bus Tracker", category: "GPS", description: "Parent-facing live bus tracking app with arrival notifications.", tech: ["Flutter", "Google Maps", "Firebase"] },
  { id: 6, title: "Delivery Route Optimizer", category: "GPS", description: "Last-mile delivery route optimization for e-commerce logistics.", tech: ["React", "Maps API", "Python"] },
  // Education
  { id: 7, title: "SSMS - School ERP", category: "Education", description: "Full-featured school management system now live as SaaS.", tech: ["Next.js", "PostgreSQL", "Razorpay"] },
  { id: 8, title: "Online Exam Platform", category: "Education", description: "MCQ exam platform with anti-cheat and automated grading.", tech: ["React", "Node.js", "MongoDB"] },
  { id: 9, title: "Coaching CRM", category: "Education", description: "Student lifecycle management for a coaching institute chain.", tech: ["Next.js", "Supabase", "Tailwind"] },
  // Health
  { id: 10, title: "Modern Dental Lab App", category: "Health", description: "Flutter app for dental lab management across 20 countries.", tech: ["Flutter", "REST API", "Firebase"] },
  { id: 11, title: "Curvd Fitness App", category: "Health", description: "iOS & Android fitness app with workout plans and progress tracking.", tech: ["Flutter", "Firebase", "RevenueCat"] },
  { id: 12, title: "Pharmacy Management", category: "Health", description: "Inventory, billing, and expiry tracking for pharmacy chains.", tech: ["React", "Node.js", "MySQL"] },
  // Fintech
  { id: 13, title: "Loan DSA Portal", category: "Fintech", description: "Lead management portal for Direct Selling Agents in NBFC.", tech: ["Next.js", "PostgreSQL", "Tailwind"] },
  { id: 14, title: "Expense Tracker SaaS", category: "Fintech", description: "Multi-user business expense tracking with GST reporting.", tech: ["React", "Firebase", "Razorpay"] },
  { id: 15, title: "Wallet & Payments", category: "Fintech", description: "Internal wallet system with UPI integration for a B2B platform.", tech: ["Node.js", "PostgreSQL", "UPI API"] },
  // Gig / Marketplace
  { id: 16, title: "Handyman Marketplace", category: "Gig", description: "Urban Company-style marketplace for home services.", tech: ["React Native", "Node.js", "Stripe"] },
  { id: 17, title: "Freelancer Platform", category: "Gig", description: "Niche freelancing platform for regional language content creators.", tech: ["Next.js", "Supabase", "Stripe"] },
  { id: 18, title: "Delivery Partner App", category: "Gig", description: "Delivery agent app with order management and earnings dashboard.", tech: ["Flutter", "Firebase", "Google Maps"] },
  // Real Estate
  { id: 19, title: "MySociety Platform", category: "Real Estate", description: "Society management SaaS now serving 100+ housing complexes.", tech: ["Next.js", "PostgreSQL", "Razorpay"] },
  { id: 20, title: "Property Listing Portal", category: "Real Estate", description: "Broker-facing property search and lead management platform.", tech: ["React", "Node.js", "Maps API"] },
  // Retail
  { id: 21, title: "Digital Retail Display", category: "Retail", description: "Android TV signage app with cloud content management.", tech: ["Flutter", "Firebase", "REST API"] },
  { id: 22, title: "POS & Billing System", category: "Retail", description: "Tablet-based POS with GST billing for retail stores.", tech: ["Flutter", "PostgreSQL", "Bluetooth"] },
  { id: 23, title: "E-commerce Dashboard", category: "Retail", description: "Unified dashboard aggregating orders from multiple marketplaces.", tech: ["Next.js", "Node.js", "MongoDB"] },
  // Transport
  { id: 24, title: "ATCC Compliance Software", category: "Transport", description: "Transport compliance management for Australian operators.", tech: ["React", "Node.js", "PostgreSQL"] },
  { id: 25, title: "Booking & Dispatch", category: "Transport", description: "Bus ticket booking with real-time seat selection.", tech: ["Next.js", "Supabase", "Razorpay"] },
  // NGO / Government
  { id: 26, title: "TPI Veterans NSW", category: "NGO", description: "Member portal and website for Australian veterans association.", tech: ["WordPress", "PHP", "MySQL"] },
  { id: 27, title: "NGO Volunteer Manager", category: "NGO", description: "Volunteer coordination and task management for an NGO.", tech: ["React", "Firebase", "Tailwind"] },
  // Marketing
  { id: 28, title: "MySampark Platform", category: "Marketing", description: "Bulk WhatsApp, SMS, and email marketing SaaS.", tech: ["React", "Node.js", "Twilio"] },
  { id: 29, title: "Campaign Analytics", category: "Marketing", description: "Marketing analytics dashboard for an agency serving 50+ clients.", tech: ["Next.js", "PostgreSQL", "Chart.js"] },
  // SaaS
  { id: 30, title: "Multi-Tenant SaaS Core", category: "SaaS", description: "Reusable SaaS starter with auth, billing, and multi-tenancy.", tech: ["Next.js", "Supabase", "Stripe"] },
  { id: 31, title: "HR & Payroll SaaS", category: "SaaS", description: "SMB HR management with payroll, leave, and attendance.", tech: ["React", "Node.js", "PostgreSQL"] },
  { id: 32, title: "Restaurant POS SaaS", category: "SaaS", description: "Cloud POS for restaurant chains with kitchen display system.", tech: ["React", "Firebase", "Razorpay"] },
  // Custom Dev
  { id: 33, title: "ERP for Manufacturer", category: "Custom Dev", description: "Production planning and inventory ERP for a textile manufacturer.", tech: ["React", "Django", "PostgreSQL"] },
  { id: 34, title: "CRM for Insurance", category: "Custom Dev", description: "Lead and policy management CRM for insurance agents.", tech: ["Next.js", "Supabase", "Tailwind"] },
  { id: 35, title: "B2B Order Portal", category: "Custom Dev", description: "Wholesale order management portal for a FMCG distributor.", tech: ["React", "Node.js", "MySQL"] },
  { id: 36, title: "Document Management", category: "Custom Dev", description: "Secure document storage and e-signature platform.", tech: ["Next.js", "AWS S3", "PostgreSQL"] },
  { id: 37, title: "Event Management App", category: "Custom Dev", description: "Event booking and attendee management for corporate events.", tech: ["Flutter", "Firebase", "Razorpay"] },
  { id: 38, title: "Construction Site Monitor", category: "Custom Dev", description: "Progress tracking and photo documentation for construction sites.", tech: ["Flutter", "Firebase", "Maps API"] },
];

export const PORTFOLIO_CATEGORIES = [
  "All", "AI", "GPS", "Education", "Health", "Fintech", "Gig",
  "Real Estate", "Retail", "Transport", "NGO", "Marketing", "SaaS", "Custom Dev"
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
