import type { Metadata } from "next";
import { OG_IMAGES, brandTitle } from "@/lib/seo";
import BlogPage from "@/components/stodio/blog";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: brandTitle("Blog — AI Automation, Vibe Coding & App Development Insights"),
  description:
    "Expert articles on AI automation, AI integration, vibe coding, Flutter development, and SaaS — by Saurabh Infosys, Ahmedabad's leading AI software studio.",
  keywords: [
    "AI automation blog India",
    "vibe coding articles",
    "AI integration guide",
    "Flutter development blog",
    "AI enabled apps guide",
    "agentic AI blog",
    "software development blog India",
  ],
  alternates: { canonical: "https://saurabhinfosys.com/blog" },
  openGraph: {
    images: OG_IMAGES,
    title: "Blog — AI Automation & Dev Insights | Saurabh Infosys",
    description:
      "Expert articles on AI automation, vibe coding, AI integration, and app development by Saurabh Infosys.",
    url: "https://saurabhinfosys.com/blog",
    type: "website",
  },
};

export default function Page() {
  const posts = BLOG_POSTS.map(({ slug, title, category, date, readTime, excerpt }) => ({
    slug,
    title,
    category,
    date,
    readTime,
    excerpt,
  }));
  return <BlogPage posts={posts} />;
}
