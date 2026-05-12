import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MySampark — AI Social Media Management Platform | Built by Saurabh Infosys",
  description:
    "MySampark is an AI-powered social media management platform. Schedule posts, generate AI content, track engagement, and manage Instagram, Facebook, LinkedIn, X, and Pinterest — all from one dashboard. Trusted by 50,000+ creators and brands.",
  keywords: [
    "AI social media management",
    "social media scheduling tool",
    "AI content generation",
    "MySampark",
    "social media automation",
    "Instagram scheduler",
    "LinkedIn scheduler",
    "social media analytics",
    "team collaboration social media",
    "poster maker app",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/products/mysampark" },
  openGraph: {
    title: "MySampark — AI Social Media Management Platform",
    description:
      "Schedule posts, generate AI content, and track engagement across all platforms from one dashboard. Trusted by 50,000+ creators and brands.",
    url: "https://saurabhinfosys.com/products/mysampark",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MySampark | AI Social Media Management",
    description:
      "AI-powered scheduling, content generation, and analytics for Instagram, Facebook, LinkedIn, X, and Pinterest.",
  },
};

const features = [
  {
    icon: "🚀",
    title: "90-Second Onboarding",
    desc: "Connect your brand details, link your social accounts, and start scheduling in under 90 seconds. No complex setup. No learning curve.",
  },
  {
    icon: "✨",
    title: "AI-Generated Content",
    desc: "Automatically generate optimised captions, hashtags, and post ideas for Facebook, Instagram, LinkedIn, X, and Pinterest — each fine-tuned for tone and platform style.",
  },
  {
    icon: "📅",
    title: "Post Scheduling (Up to 60 Days)",
    desc: "Plan ahead with a visual calendar. Schedule posts up to 60 days in advance with smart timing suggestions that maximise reach.",
  },
  {
    icon: "📊",
    title: "Performance Tracking & Insights",
    desc: "Understand your audience with real-time analytics — reach, engagement, impressions, and clicks — all in one visual dashboard to drive smarter decisions.",
  },
  {
    icon: "🖼️",
    title: "Promotional Poster Generator",
    desc: "Design stunning product and service promotional posters instantly. One-click background removal, pricing tags, and action-focused layouts — no design skills needed.",
  },
  {
    icon: "👥",
    title: "Team Collaboration & Role Management",
    desc: "Add teammates with defined roles — Admin, Designer, or Publisher. Collaborate efficiently while maintaining brand consistency across every post.",
  },
  {
    icon: "🔗",
    title: "Multi-Platform Integration",
    desc: "Manage Instagram, Facebook, X (Twitter), LinkedIn, and Pinterest from a single unified dashboard. Post everywhere without switching apps.",
  },
  {
    icon: "💬",
    title: "Comment-Based Auto DM (Coming Soon)",
    desc: "Automatically send a private message when a user comments specific keywords on your post — enabling lead capture and structured follow-ups at scale.",
  },
];

const platforms = [
  { name: "Instagram", icon: "📸", color: "from-pink-500 to-orange-400" },
  { name: "Facebook", icon: "👍", color: "from-blue-600 to-blue-400" },
  { name: "LinkedIn", icon: "💼", color: "from-blue-700 to-blue-500" },
  { name: "X (Twitter)", icon: "🐦", color: "from-gray-800 to-gray-600" },
  { name: "Pinterest", icon: "📌", color: "from-red-600 to-red-400" },
];

const stats = [
  { value: "50,000+", label: "Creators & Brands" },
  { value: "60 days", label: "Advance Scheduling" },
  { value: "5 platforms", label: "Supported" },
  { value: "90 sec", label: "To Get Started" },
];

const faqs = [
  {
    q: "What is MySampark?",
    a: "MySampark is an AI-powered social media management platform. It lets you schedule posts, generate content with AI, track engagement analytics, and manage all your social accounts from one dashboard.",
  },
  {
    q: "Which platforms does MySampark support?",
    a: "MySampark supports Instagram, Facebook, X (Twitter), LinkedIn, and Pinterest — with more platforms being added.",
  },
  {
    q: "How does the AI content generation work?",
    a: "Our AI suggests captions, hashtags, and post ideas tailored to your brand voice and the specific platform you're posting to. Each suggestion is optimised for tone, length, and style.",
  },
  {
    q: "Can I schedule posts in advance?",
    a: "Yes — you can schedule posts up to 60 days in advance using a visual calendar. Smart timing suggestions help you post when your audience is most active.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes, MySampark offers a free plan to get you started. You can upgrade anytime as your needs grow.",
  },
  {
    q: "Is MySampark available on mobile?",
    a: "Yes. MySampark is available on both Google Play (Android) and the App Store (iOS) so you can manage your social media on the go.",
  },
];

export default function MySamparkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-accent/10 text-accent font-dm font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            AI Social Media Management
          </div>
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            The smarter way to
            <br />
            grow on social
          </h1>
          <p className="font-dm text-ink-light text-lg md:text-xl max-w-2xl mx-auto mb-8">
            MySampark is the AI platform for scheduling posts, generating
            content, tracking engagement, and scaling your audience — all from
            one dashboard.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex -space-x-2">
              {["👩", "👨", "👩", "👨"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-accent/10 border-2 border-white flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="font-dm text-ink-light text-sm">
              Trusted by{" "}
              <span className="font-semibold text-ink">50,000+ creators</span>{" "}
              &amp; brands
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysampark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Get Started for Free →
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.saurabhinfosys.mysampark"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-ink text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-ink/80 transition-colors"
            >
              <span>📱</span> Download the App
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-syne text-3xl font-bold text-white mb-1">
                  {s.value}
                </div>
                <div className="font-dm text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              One dashboard. Every platform.
            </h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Stop juggling multiple apps. MySampark connects all your social
              accounts so you can post, schedule, and analyse from one place.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 bg-bg border border-ink/8 rounded-2xl px-6 py-4 shadow-sm"
              >
                <span className="text-2xl">{p.icon}</span>
                <span className="font-syne font-semibold text-ink">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-bg py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-dm text-accent font-semibold text-sm uppercase tracking-wide">
              Features
            </span>
            <h2 className="font-syne text-4xl font-bold text-ink mt-3 mb-4">
              Everything you need to grow on social
            </h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              MySampark brings all your social media accounts under one roof —
              powered by AI to save time, boost engagement, and grow your
              presence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 border border-ink/5 hover:border-accent/30 transition-colors"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-syne text-base font-semibold text-ink mb-2">
                  {f.title}
                </h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-ink py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-white mb-4">
              Start posting in 3 steps
            </h2>
            <p className="font-dm text-white/60 text-lg max-w-xl mx-auto">
              No complicated setup. Go from sign-up to scheduled in under 2
              minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect your accounts",
                desc: "Link your Instagram, Facebook, LinkedIn, X, and Pinterest accounts in one click. 90 seconds to get started.",
              },
              {
                step: "02",
                title: "Create or generate content",
                desc: "Write your own posts or let AI generate captions, hashtags, and creative ideas tailored to your brand voice.",
              },
              {
                step: "03",
                title: "Schedule and analyse",
                desc: "Pick the best time, schedule up to 60 days ahead, then track reach, engagement, and clicks in real time.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-syne text-5xl font-bold text-accent/30 mb-4">
                  {item.step}
                </div>
                <h3 className="font-syne text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-dm text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App CTA */}
      <section className="bg-card py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-bg rounded-3xl border border-ink/8 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl flex-shrink-0">📱</div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-syne text-3xl font-bold text-ink mb-3">
                Take MySampark with you
              </h2>
              <p className="font-dm text-ink-light text-base mb-6">
                The MySampark mobile app lets you create and share professional
                festival posts, promotional content, and campaign updates on the
                go. Available on Android and iOS — free to download.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.saurabhinfosys.mysampark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-white font-syne font-semibold text-sm px-6 py-3 rounded-xl hover:bg-ink/80 transition-colors"
                >
                  <span>▶</span> Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/my-sampark-poster-maker/id6736365281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-ink/20 text-ink font-syne font-semibold text-sm px-6 py-3 rounded-xl hover:bg-ink/5 transition-colors"
                >
                  <span>🍎</span> App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-card rounded-2xl p-6 border border-ink/5"
              >
                <h3 className="font-syne text-base font-semibold text-ink mb-2">
                  {faq.q}
                </h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to grow your social media presence?
          </h2>
          <p className="font-dm text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join 50,000+ creators and brands using MySampark to schedule
            smarter, post faster, and grow their audience with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysampark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Visit mysampark.com →
            </a>
            <a
              href="mailto:info@mysampark.com"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              ✉️ Contact the Team
            </a>
          </div>
          <p className="font-dm text-white/30 text-sm mt-6">
            Free plan available · No credit card required
          </p>
        </div>
      </section>
    </>
  );
}
