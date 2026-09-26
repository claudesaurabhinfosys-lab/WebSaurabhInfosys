import type { Metadata } from "next";
import { SITE_URL, brandTitle, breadcrumbLd, jsonLd, ogImages } from "@/lib/seo";
import { blogImage } from "@/components/stodio/lib/blog-images";
import { BLOG_POSTS } from "@/lib/data";
import { BLOG_META_DESCRIPTIONS } from "@/lib/meta-descriptions";
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
  const description = BLOG_META_DESCRIPTIONS[post.slug] ?? post.excerpt;

  return {
    title: brandTitle(`${post.title} | Saurabh Infosys`),
    description,
    keywords: [
      post.category,
      ...(KEYWORDS[post.slug] ?? []),
      "AI automation India",
      "Saurabh Infosys blog",
      "software development India",
    ],
    alternates: { canonical: `https://saurabhinfosys.com/blog/${post.slug}` },
    openGraph: {
      images: ogImages(`/og/blog/${post.slug}.png`),
      title: post.title,
      description,
      url: `https://saurabhinfosys.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      images: ogImages(`/og/blog/${post.slug}.png`),
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const path = `/blog/${slug}`;
  const structuredData = post
    ? [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `${SITE_URL}${blogImage(post.slug)}`,
          datePublished: post.date,
          url: `${SITE_URL}${path}/`,
          mainEntityOfPage: `${SITE_URL}${path}/`,
          articleSection: post.category,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
        breadcrumbLd([["Home", "/"], ["Blog", "/blog"], [post.title, path]]),
      ]
    : null;

  return (
    <>
      {structuredData ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      ) : null}
      <PostDetailPage slug={slug} />
    </>
  );
}
