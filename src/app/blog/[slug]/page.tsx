import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/data";
import PostDetailPage from "@/components/stodio/blog/post-detail-page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Per-post long-tail keywords, carried over from the previous route. */
const KEYWORDS: Record<string, string[]> = {
  "google-gemma-4-vs-chatgpt": [
    "gemma 4 vs chatgpt",
    "google gemma vs chatgpt",
    "best AI model for business",
    "open source AI vs chatgpt",
    "gemma 4 comparison 2026",
  ],
  "what-is-vibe-coding": [
    "vibe coding",
    "AI coding India",
    "vibe coding services India",
    "AI-accelerated development",
    "MVP development AI",
  ],
  "google-signin-in-flutter": [
    "google sign in flutter",
    "flutter authentication",
    "flutter firebase auth",
    "flutter google login",
    "flutter app development",
  ],
  "flutter-ai-enabled-apps": [
    "flutter AI apps",
    "AI flutter development",
    "flutter machine learning",
    "flutter OpenAI integration",
  ],
  "flutter-vs-react-native-2025": [
    "flutter vs react native 2025",
    "flutter vs react native performance",
    "best cross platform framework 2025",
  ],
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Saurabh Infosys`,
    description: post.excerpt,
    keywords: [
      post.category,
      ...(KEYWORDS[post.slug] ?? []),
      "AI automation India",
      "Saurabh Infosys blog",
      "software development India",
    ],
    alternates: { canonical: `https://saurabhinfosys.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://saurabhinfosys.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <PostDetailPage slug={slug} />;
}
