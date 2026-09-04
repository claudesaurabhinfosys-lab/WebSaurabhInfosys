import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MySampark — Auto DM, AI Product Reply & Social Media Automation | Saurabh Infosys",
  description:
    "MySampark automatically replies to comments, sends DMs, and captures leads 24/7. AI-powered social media automation for Instagram, Facebook, LinkedIn, YouTube, Pinterest & X. Save 30+ hours every week.",
  keywords: [
    "Auto DM Instagram",
    "AI comment reply",
    "social media automation",
    "MySampark",
    "AI social media management",
    "comment to DM automation",
    "AI product reply",
    "social media lead generation",
    "Instagram automation",
    "social media scheduling India",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/products/mysampark" },
  openGraph: {
    title: "MySampark — Turn Every Comment Into a Customer",
    description:
      "Auto DM, AI replies, campaign scheduling, and lead capture — all on autopilot. Save 30+ hours every week with MySampark.",
    url: "https://saurabhinfosys.com/products/mysampark",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MySampark | Auto DM & AI Social Media Automation",
    description:
      "Automatically reply to comments, send DMs, and capture leads 24/7 across Instagram, Facebook, LinkedIn, YouTube, Pinterest & X.",
  },
};

const features = [
  {
    icon: "📣",
    title: "Campaign Management",
    desc: "Plan, create, schedule, and publish weeks of content across all your connected social platforms from one intelligent workspace.",
  },
  {
    icon: "💬",
    title: "AI Customer Engagement",
    desc: "Turn comments and keywords into instant lead conversations. MySampark auto-replies and sends DMs the moment someone shows interest.",
  },
  {
    icon: "🧠",
    title: "Product Knowledge AI",
    desc: "Teach AI your products, pricing, specifications, and FAQs. It answers customer questions accurately every time — even at 3am.",
  },
  {
    icon: "📥",
    title: "Unified AI Inbox",
    desc: "Manage Facebook and Instagram conversations and generate smart replies from one place — no more jumping between apps.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    desc: "See what performs best across every connected channel. Track reach, likes, comments, shares, and engagement trends in one clear view.",
  },
  {
    icon: "🤝",
    title: "Partner Marketing",
    desc: "Personalize and scale campaigns across your partner or distributor network. Translate and broadcast marketing materials at scale.",
  },
];

const platforms = [
  { name: "Instagram", icon: "📸" },
  { name: "Facebook", icon: "👍" },
  { name: "LinkedIn", icon: "💼" },
  { name: "YouTube", icon: "▶️" },
  { name: "Pinterest", icon: "📌" },
  { name: "X (Twitter)", icon: "🐦" },
];

const stats = [
  { value: "30+", label: "Hours Saved / Week" },
  { value: "6", label: "Platforms Supported" },
  { value: "60–80%", label: "Less Manual Work" },
  { value: "24/7", label: "AI on Autopilot" },
];

const pricing = [
  {
    name: "Starter",
    price: "₹99",
    original: "₹149",
    bonus: "+ 100 bonus credits",
    total: "1,100",
    base: "1,000",
    desc: "Your AI-powered social media studio. Generate campaigns, content, and analytics in minutes.",
    cta: "Get Starter",
    popular: false,
  },
  {
    name: "Growth",
    price: "₹299",
    original: "₹449",
    bonus: "+ 500 bonus credits",
    total: "4,000",
    base: "3,500",
    desc: "Need everyday content sorted? Campaigns, copy, creatives, and analytics in one simple pack.",
    cta: "Get Growth",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹599",
    original: "₹899",
    bonus: "+ 1,500 bonus credits",
    total: "9,500",
    base: "8,000",
    desc: "Skip the hiring drama. Get a dedicated AI workflow in one seamless subscription.",
    cta: "Get Professional",
    popular: true,
  },
  {
    name: "Business",
    price: "₹999",
    original: "₹1,499",
    bonus: "+ 3,000 bonus credits",
    total: "18,000",
    base: "15,000",
    desc: "Hiring takes forever? Get a dedicated AI-powered workspace with fast delivery.",
    cta: "Get Business",
    popular: false,
  },
];

const teams = [
  { team: "Content Teams", use: "Campaign Planning", desc: "Plan weeks of content without spending every day writing captions and hashtags." },
  { team: "Sales Teams", use: "Lead Generation", desc: "Respond to pricing and product enquiries instantly, even outside business hours." },
  { team: "Product Teams", use: "Knowledge Base", desc: "Keep product details, FAQs, and brand information consistent in every AI response." },
  { team: "Support Teams", use: "Unified Inbox", desc: "Manage Facebook and Instagram conversations without jumping between inboxes." },
  { team: "Marketing Teams", use: "Performance Insights", desc: "See top-performing posts, reach, likes, comments, and shares in one clear view." },
  { team: "Partner Teams", use: "Broadcast Marketing", desc: "Personalize and translate marketing materials for every retailer or distributor." },
];

const faqs = [
  {
    q: "What is MySampark?",
    a: "MySampark is an AI social media automation platform for businesses. It helps teams create campaigns, schedule posts, automate comment-to-DM replies, answer product questions with AI, manage inbox conversations, and track analytics — all from one workspace.",
  },
  {
    q: "How does Auto DM work?",
    a: "When a user comments a specific keyword on your post, MySampark automatically sends them a private DM with your preset message, product link, or offer. This works 24/7 without any manual effort.",
  },
  {
    q: "What is AI Product Reply?",
    a: "You teach MySampark your products, pricing, and FAQs. When customers ask questions in comments or DMs, the AI replies with accurate, on-brand answers instantly — even at 3am.",
  },
  {
    q: "Which social media platforms are supported?",
    a: "MySampark supports Instagram, Facebook, LinkedIn, YouTube, Pinterest, and X (Twitter).",
  },
  {
    q: "Can I schedule posts in advance?",
    a: "Yes — you can plan, create, and schedule weeks of content in advance using MySampark's campaign management tools.",
  },
  {
    q: "Does MySampark include a unified inbox?",
    a: "Yes. The unified AI inbox lets you manage Facebook and Instagram conversations from one place and generate smart replies without switching between apps.",
  },
  {
    q: "Can MySampark help capture social media leads?",
    a: "Absolutely. The AI customer engagement feature turns comments and keyword triggers into instant lead conversations via Auto DM — capturing leads even while you sleep.",
  },
  {
    q: "How much time can I save?",
    a: "MySampark users save 30+ hours every week — 10 hrs on content creation, 15 hrs on customer engagement, 8 hrs on campaign management, and 4 hrs on analytics and reporting.",
  },
];

export default function MySamparkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <a href="https://mysampark.com" target="_blank" rel="noopener noreferrer">
              <Image src="/mysampark-logo.svg" alt="MySampark" width={200} height={37} priority />
            </a>
          </div>
          <div className="inline-block bg-accent/10 text-accent-dark font-dm font-semibold text-sm px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
            AI Social Media Automation
          </div>
          <h1 className="font-syne text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            Turn every comment
            <br />
            <span className="text-accent-dark">into a customer</span>
          </h1>
          <p className="font-dm text-ink-light text-lg md:text-xl max-w-2xl mx-auto mb-10">
            MySampark automatically replies to your comments, sends DMs, and captures leads 24/7 — so you never miss a potential customer again.
          </p>
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
              href="https://mysampark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink/20 text-ink font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-ink/5 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* Orange CTA Banner */}
      <section className="bg-[#FB6238] py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/mysampark-logo.svg" alt="MySampark" width={120} height={22} className="brightness-0 invert" />
            <span className="font-dm text-white text-sm">— AI Social Media Automation Platform</span>
          </div>
          <a
            href="https://mysampark.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#FB6238] font-syne font-bold text-sm px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Visit mysampark.com →
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-syne text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="font-dm text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-card py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">One dashboard. Every platform.</h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Publish, schedule, reply, and analyse across all your social accounts — without switching apps.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="flex items-center gap-3 bg-bg border border-ink/8 rounded-2xl px-6 py-4 shadow-sm">
                <span className="text-2xl">{p.icon}</span>
                <span className="font-syne font-semibold text-ink">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 AI Features */}
      <section className="bg-bg py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-dm text-accent-dark font-semibold text-sm uppercase tracking-wide">Six AI Workflows</span>
            <h2 className="font-syne text-4xl font-bold text-ink mt-3 mb-4">One intelligent workspace</h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              From publishing to customer replies and performance insights — keep your social media moving on autopilot.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-card rounded-2xl p-6 border border-ink/5 hover:border-accent/30 transition-colors">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-syne text-base font-semibold text-ink mb-2">{f.title}</h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Savings */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">Save 30+ hours every week</h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Put your social media on intelligent autopilot and get back to what matters.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { hours: "10 hrs/week", area: "Content Creation" },
              { hours: "15 hrs/week", area: "Customer Engagement" },
              { hours: "8 hrs/week", area: "Campaign Management" },
              { hours: "4 hrs/week", area: "Analytics & Reporting" },
            ].map((item) => (
              <div key={item.area} className="bg-surface border border-ink/8 rounded-2xl p-6 text-center">
                <div className="font-syne text-2xl font-bold text-accent-dark mb-2">{item.hours}</div>
                <div className="font-dm text-ink-light text-sm">saved on {item.area}</div>
              </div>
            ))}
          </div>
          <div className="bg-accent rounded-2xl p-8 text-center">
            <p className="font-syne text-white text-xl font-bold mb-1">120+ hours saved every month</p>
            <p className="font-dm text-white/70 text-sm">60–80% less manual work across your daily social tasks</p>
          </div>
        </div>
      </section>

      {/* Built for Teams */}
      <section className="bg-bg py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">Built for teams that do more with less</h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Whether you are a content creator, sales team, or enterprise — MySampark fits your workflow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((t) => (
              <div key={t.team} className="bg-card rounded-2xl p-6 border border-ink/5">
                <p className="text-accent-dark font-syne font-semibold text-xs uppercase tracking-wider mb-1">{t.team}</p>
                <h3 className="font-syne font-bold text-ink text-base mb-2">{t.use}</h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="font-dm text-accent-dark font-semibold text-sm uppercase tracking-wide">Pricing</span>
            <h2 className="font-syne text-4xl font-bold text-ink mt-3 mb-4">Flexible credits. Scale as you grow.</h2>
            <p className="font-dm text-ink-light text-lg max-w-xl mx-auto">
              Choose a plan that fits your team. All plans include bonus credits on top of your base allocation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-surface rounded-2xl p-6 border transition-all ${
                  plan.popular
                    ? "border-accent shadow-lg shadow-accent/10 ring-2 ring-accent/20"
                    : "border-ink/8"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-syne font-bold px-3 py-1 rounded-full">Popular</span>
                  </div>
                )}
                <h3 className="font-syne font-bold text-ink text-lg mb-1">{plan.name}</h3>
                <p className="font-dm text-ink-light text-xs mb-4 leading-relaxed">{plan.desc}</p>
                <div className="mb-1">
                  <span className="font-syne text-3xl font-bold text-ink">{plan.price}</span>
                  <span className="font-dm text-ink-light text-sm line-through ml-2">{plan.original}</span>
                </div>
                <p className="font-dm text-accent-dark text-xs font-semibold mb-4">{plan.bonus}</p>
                <div className="bg-ink/4 rounded-xl p-3 mb-5 text-center">
                  <div className="font-syne font-bold text-ink text-xl">{plan.total}</div>
                  <div className="font-dm text-ink-light text-xs">Total credits ({plan.base} base)</div>
                </div>
                <a
                  href="https://mysampark.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-syne font-semibold text-sm px-4 py-3 rounded-xl transition-colors ${
                    plan.popular
                      ? "bg-accent text-white hover:bg-accent-dark"
                      : "border border-ink/20 text-ink hover:bg-ink/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center font-dm text-ink-light text-sm mt-8">
            All prices in INR · No subscription lock-in · Credits never expire
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-syne text-4xl font-bold text-ink mb-4">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card rounded-2xl p-6 border border-ink/5">
                <h3 className="font-syne text-base font-semibold text-ink mb-2">{faq.q}</h3>
                <p className="font-dm text-ink-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-ink mb-6">
            Ready to put social media on autopilot?
          </h2>
          <p className="font-dm text-ink-light text-lg mb-10 max-w-xl mx-auto">
            Join thousands of creators and brands using MySampark to turn comments into customers — 24/7, automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mysampark.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Start for Free at mysampark.com →
            </a>
            <a
              href="mailto:info@saurabhinfosys.com"
              className="flex items-center justify-center gap-2 border border-ink/20 text-ink font-syne font-semibold text-base px-8 py-4 rounded-lg hover:bg-ink/5 transition-colors"
            >
              Ask Us Anything
            </a>
          </div>
          <p className="font-dm text-ink-light text-sm mt-6">Free plan available · No credit card required</p>
        </div>
      </section>
    </>
  );
}
