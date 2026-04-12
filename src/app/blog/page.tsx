import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, COMPANY } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — AI Automation, Vibe Coding & App Development Insights",
  description: "Expert articles on AI automation, AI integration, vibe coding, Flutter development, and SaaS — by Saurabh Infosys, Ahmedabad's leading AI software studio.",
  keywords: ["AI automation blog India", "vibe coding articles", "AI integration guide", "Flutter development blog", "AI enabled apps guide", "agentic AI blog", "software development blog India"],
  alternates: { canonical: "https://saurabhinfosys.com/blog" },
  openGraph: { title: "Blog — AI Automation & Dev Insights | Saurabh Infosys", description: "Expert articles on AI automation, vibe coding, AI integration, and app development by Saurabh Infosys.", url: "https://saurabhinfosys.com/blog", type: "website" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "AI Development":     "bg-purple-100 text-purple-700 border border-purple-200",
  "AI Automation":      "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "AI Integration":     "bg-violet-100 text-violet-700 border border-violet-200",
  "Artificial Intelligence": "bg-purple-100 text-purple-700 border border-purple-200",
  "Mobile Development": "bg-sky-100 text-sky-700 border border-sky-200",
  "Technology":         "bg-teal-100 text-teal-700 border border-teal-200",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const newPosts = BLOG_POSTS.filter((p) => p.isNew);
  const olderPosts = BLOG_POSTS.filter((p) => !p.isNew);

  return (
    <main className="bg-bg text-ink font-dm">

      {/* ── Hero ── */}
      <section className="bg-ink pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block bg-accent text-white text-xs font-syne font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Blog
          </span>
          <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-5 max-w-3xl">
            Insights on AI, Vibe Coding &amp; App Development
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Practical guides and expert perspectives from Saurabh Infosys — India&apos;s AI-first software studio in Ahmedabad.
          </p>
        </div>
      </section>

      {/* ── New Posts ── */}
      <section className="bg-bg py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            Latest Articles
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-ink mb-10">
            Fresh from our team
          </h2>

          {/* Featured first post */}
          <div className="bg-gradient-to-br from-accent/5 to-purple-500/5 border border-accent/15 rounded-3xl p-8 sm:p-10 mb-6 group hover:border-accent/30 transition-colors">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[newPosts[0].category] ?? "bg-ink/10 text-ink/60"}`}>
                {newPosts[0].category}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-white">New</span>
              <span className="text-ink/40 text-sm">{formatDate(newPosts[0].date)} · {newPosts[0].readTime}</span>
            </div>
            <h3 className="font-syne font-bold text-2xl sm:text-3xl text-ink mb-4 leading-snug group-hover:text-accent transition-colors">
              {newPosts[0].title}
            </h3>
            <p className="text-ink/65 leading-relaxed mb-6 max-w-2xl">{newPosts[0].excerpt}</p>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I read your blog on ${encodeURIComponent(newPosts[0].title)} and have a question`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-syne font-semibold hover:gap-3 transition-all"
            >
              Discuss with our team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Rest of new posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {newPosts.slice(1).map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl border border-ink/8 p-6 flex flex-col gap-4 hover:border-accent/30 hover:-translate-y-1 transition-all group">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-ink/10 text-ink/60"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent text-white">New</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-syne font-bold text-base text-ink leading-snug mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-ink/55 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <p className="text-xs text-ink/40">{formatDate(post.date)} · {post.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Older Posts ── */}
      <section className="bg-card py-16 px-6 border-t border-ink/6">
        <div className="max-w-5xl mx-auto">
          <p className="font-syne font-bold text-xs uppercase tracking-widest text-accent mb-3">
            More Articles
          </p>
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-ink mb-10">
            From the archives
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {olderPosts.map((post) => (
              <article key={post.slug} className="bg-bg rounded-2xl border border-ink/8 p-6 flex flex-col gap-4 hover:border-accent/20 hover:-translate-y-1 transition-all group">
                <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-ink/10 text-ink/60"}`}>
                  {post.category}
                </span>
                <div className="flex-1">
                  <h3 className="font-syne font-bold text-base text-ink leading-snug mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-ink/55 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
                <p className="text-xs text-ink/40">{formatDate(post.date)} · {post.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-white mb-5">
            Want to implement any of these ideas?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            We turn AI ideas into production software — AI agents, AI-enabled apps, vibe coding MVPs, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-8 py-4 rounded-full hover:bg-accent-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-syne font-semibold px-8 py-4 rounded-full hover:border-white transition-colors"
            >
              Send a Brief
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
