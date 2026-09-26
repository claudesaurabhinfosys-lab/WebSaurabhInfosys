import { BLOG_POSTS } from "@/lib/data";
import { ogCard } from "@/lib/og";

export const dynamic = "force-static";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ file: `${post.slug}.png` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const post = BLOG_POSTS.find((p) => `${p.slug}.png` === file);
  return ogCard({
    eyebrow: `Blog · ${post?.category ?? "Insights"}`,
    title: post?.title ?? "Saurabh Infosys Blog",
  });
}
