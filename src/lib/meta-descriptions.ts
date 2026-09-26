/**
 * Search-result descriptions for pages whose on-page text runs past ~160
 * characters, where Google cuts it off mid-sentence. The original excerpt or
 * project description is untouched and still shown on the site; these only
 * feed the <meta name="description"> and Open Graph description. Same
 * message and keywords, trimmed to fit. Pages not listed use their own text.
 */

export const BLOG_META_DESCRIPTIONS: Record<string, string> = {
  "fix-lovable-app-not-working":
    "Lovable app broken or stuck? Fix the most common Lovable problems — blank screens, Supabase errors, auth failures and broken deploys — step by step.",
  "bolt-app-not-working-fix":
    "Bolt.new app throwing errors or stuck in a loop? The 10 most common Bolt.new problems — package errors, CORS, blank screens, database issues — with fixes.",
  "ai-vibe-coding-bugs-fixes":
    "Built with Lovable, Bolt, Cursor or Claude? The 15 bugs in almost every AI-generated codebase — security holes, slow code, silent failures — and the fixes.",
  "supabase-lovable-not-connecting":
    "Supabase errors in your Lovable or Bolt app? Fix wrong keys, RLS blocking queries, missing tables and auth redirect errors with step-by-step instructions.",
  "take-lovable-app-to-production":
    "Taking a Lovable app to production: the full checklist — security, performance, domain setup, error monitoring, backups and everything the AI forgot.",
  "fix-auth-ai-built-app":
    "Fix broken authentication in Lovable, Bolt and Cursor apps: login redirects, session issues, OAuth errors, route bypasses and email confirmation failures.",
  "when-hire-developer-fix-ai-app":
    "AI tools have a ceiling. The 6 signs you have hit it, what to hand over to a developer, and what fixing an AI-built app should cost.",
  "stripe-payments-ai-app":
    "Stripe fails in most AI-built apps. The right architecture, plus fixes for payment failures, webhook errors, duplicate orders and the secret key mistake.",
  "emergent-app-not-working":
    "Emergent.sh app broken, incomplete or stuck? How to diagnose what went wrong, what is fixable, and how to get your Emergent app production-ready.",
  "ai-app-performance-fixes":
    "Lovable, Bolt and Cursor apps are often slow in production. 8 fixes for the most common causes of poor performance in AI-built apps.",
  "add-features-lovable-app":
    "Lovable struggling to add features to existing code? 6 proven strategies for when the AI keeps failing — and when to bring in a developer.",
  "cursor-ai-code-review-fix":
    "Cursor writes code fast, not always safely. How to spot the common quality and security issues in Cursor-generated code and fix them before production.",
  "google-signin-in-flutter":
    "Add Google Sign-In to your Flutter app in 30 minutes: Firebase setup, SHA-1 configuration and auth state handling, with working Android and iOS code.",
  "chatgpt-vs-gemini-vs-claude-2026":
    "GPT-4o vs Gemini 2.0 vs Claude 3.7: cost, context window, coding ability and real-world performance compared, so you can pick the right AI API.",
  "what-is-rag-ai-for-business":
    "RAG lets AI answer from your own business data. How Retrieval-Augmented Generation works, when to use it, and how Indian businesses deploy it.",
  "how-to-build-mvp-2-weeks":
    "Ship a production-ready MVP in 2 weeks, not 6 months. The AI-accelerated process, tools and workflow we use to build startup MVPs fast.",
  "google-gemma-4-vs-chatgpt":
    "Gemma 4 vs ChatGPT: free and private on your own servers, or pay-per-token via API? Cost, privacy, speed and accuracy compared with real examples.",
  "what-is-vibe-coding":
    "Vibe coding is the AI-accelerated way startups build software. What it means, why it matters, and how Saurabh Infosys uses it to ship MVPs in 2 weeks.",
  "how-to-integrate-ai-existing-software":
    "Add AI to your existing CRM, ERP or web app without rebuilding: a practical guide to chatbots, recommendations and automation.",
  "whatsapp-ai-bot-indian-business":
    "500 million Indians use WhatsApp daily. How an AI WhatsApp bot handles leads, bookings and support 24/7 for a fraction of hiring costs.",
  "flutter-ai-enabled-apps":
    "Flutter + AI for cross-platform apps: integrating OpenAI, on-device ML and RAG into Flutter, with real examples from our portfolio.",
};

export const PROJECT_META_DESCRIPTIONS: Record<string, string> = {
  "banigi-ai":
    "AI-powered 3D home and interior design platform with custom style models, architectural rendering and smart redesign tools. Case study by Saurabh Infosys.",
  curvd:
    "Workout and custom nutrition planning app for the CapriCurves community — structured fitness routines, video workouts and macro nutrition tracking.",
  ttac:
    "Job recruitment and vocational talent matching platform with interactive map exploration and application tracking for skilled professionals.",
  "walk-dogs":
    "Move-to-earn dog walking platform with real-time GPS tracking, in-app crypto reward tokens (WLD), a digital breed marketplace and pet inventory.",
  pots:
    "Global tango community and event discovery platform for dancers, organizers, orchestras, DJs and instructors, with milonga schedules and festival sign-up.",
  volest:
    "Forestry and timber volume estimation app with Smalian, Huber and Newton models, tree parameter logging and CSV export for foresters and researchers.",
  ewd:
    "Electronic Work Diary platform digitising work and rest records for drivers, transport operators and authorised officers — built to NHVR EWD Standards.",
  washry:
    "On-demand laundry and dry-cleaning app — like Uber Eats for your clothes — connecting users with local cleaners for pickup, cleaning and delivery.",
  "exotic-now":
    "Premium car rental app for exotic and ultra-luxury vehicles, with transparent pricing, secure payments and flexible delivery or pickup.",
  "edify-easy":
    "Structured e-learning platform for onboarding trainees, delivering learning materials and tracking progress in a clean, role-based environment.",
  drd:
    "DRD (Digital Retail Display) lets shoppers find nearby stores, check real-time stock and buy instantly, while helping local retailers go digital.",
  meowcademy:
    "Website for Meowcademy, a Singapore small-group tuition centre offering affordable, high-quality education for children aged 6 to 16.",
  "meow-aesthetics":
    "Website for Meow Aesthetics, a multi-location Singapore salon for gel nails, lash extensions, facials, slimming and IPL, with sister brand Meow Luxury.",
  "le-meow":
    "All-in-one on-demand app connecting users with trusted professionals for home, beauty and lifestyle services — seamless, secure and rewarding booking.",
  edcalibre:
    "Gamified online learning platform for children with animated video lessons, chapter quizzes and league leaderboards.",
  "meow-renovations":
    "Premium HDB painting, limewash finishes and curved interior specialists in Singapore, with a 5-year warranty on Raffles Anti-Mould paint.",
};

/** Keyed by the country page slug; used in place of meta.description. */
export const COUNTRY_META_DESCRIPTIONS: Record<string, string> = {
  usa: "AI integration, chatbot and mobile app development for US businesses. 4.9★ on Clutch, with apps shipped for US retail, fitness and luxury auto clients.",
  singapore:
    "AI integration, chatbot and mobile app development for Singapore businesses. 4.9★ on Clutch, with booking and service marketplace apps shipped locally.",
};
