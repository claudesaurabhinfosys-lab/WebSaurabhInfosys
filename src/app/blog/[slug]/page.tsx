import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, COMPANY, type ContentBlock } from "@/lib/data";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Saurabh Infosys Blog`,
    description: post.excerpt,
    keywords: [post.category, "AI automation India", "Saurabh Infosys blog", "software development India"],
    alternates: { canonical: `https://saurabhinfosys.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://saurabhinfosys.com/blog/${post.slug}`,
      type: "article",
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  "AI Development":          "bg-purple-100 text-purple-700 border border-purple-200",
  "AI Automation":           "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "AI Integration":          "bg-violet-100 text-violet-700 border border-violet-200",
  "Artificial Intelligence": "bg-purple-100 text-purple-700 border border-purple-200",
  "Mobile Development":      "bg-sky-100 text-sky-700 border border-sky-200",
  "Technology":              "bg-teal-100 text-teal-700 border border-teal-200",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function renderBlock(block: ContentBlock, i: number) {
  if (block.type === "h2") {
    return (
      <h2
        key={i}
        className="font-syne font-bold text-xl sm:text-2xl text-ink mt-10 mb-3"
      >
        {block.text}
      </h2>
    );
  }
  if (block.type === "p") {
    return (
      <p key={i} className="text-ink/75 leading-relaxed">
        {block.text}
      </p>
    );
  }
  if (block.type === "ul") {
    return (
      <ul key={i} className="space-y-2 pl-1">
        {block.items.map((item, j) => (
          <li key={j} className="flex items-start gap-3 text-ink/75">
            <span className="text-accent mt-1 flex-shrink-0 text-sm">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="bg-bg text-ink font-dm">

      {/* ── Hero ── */}
      <section className="bg-ink pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                CATEGORY_COLORS[post.category] ?? "bg-white/10 text-white"
              }`}
            >
              {post.category}
            </span>
            {post.isNew && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-white">
                New
              </span>
            )}
          </div>

          <h1 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-5">
            {post.title}
          </h1>
          <p className="text-white/50 text-sm">
            {formatDate(post.date)} · {post.readTime}
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Lead excerpt */}
          <p className="text-lg text-ink/80 leading-relaxed mb-10 font-medium border-l-4 border-accent pl-5">
            {post.excerpt}
          </p>

          {/* Content blocks */}
          <div className="space-y-5">
            {post.content.map((block, i) => renderBlock(block, i))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-syne font-bold text-2xl sm:text-3xl text-white mb-4">
            Want to implement this for your business?
          </h2>
          <p className="text-white/60 text-base mb-10 max-w-xl mx-auto">
            Saurabh Infosys builds AI automation, AI-enabled apps, and MVPs for
            Indian businesses. Let&apos;s talk about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi%2C+I+read+your+blog+on+${encodeURIComponent(post.title)}+and+want+to+discuss+a+project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-semibold px-8 py-4 rounded-full hover:bg-accent-dark transition-colors"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-syne font-semibold px-8 py-4 rounded-full hover:border-white transition-colors"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
