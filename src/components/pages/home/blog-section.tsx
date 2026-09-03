import Link from "next/link";
import Image from "next/image";
import EmDashHeader from "@/components/shared/em-dash-header";
import PillButton from "@/components/ui/pill-button";
import { BLOG_POSTS } from "@/lib/data";

const FEATURED_IMAGES = [
  "https://picsum.photos/id/60/700/500",
  "https://picsum.photos/id/9/700/500",
  "https://picsum.photos/id/2/700/500",
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="si-section">
      <div className="si-container flex flex-col si-stack-block">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[39rem]">
            <div className="si-pb-stack">
              <EmDashHeader label="Blog" />
            </div>
            <p className="si-body max-w-[30.85rem] text-deep-gray-1">
              Practical fixes and field notes from shipping AI-built and hand-built software — insights for
              founders and developers alike.
            </p>
          </div>
          <PillButton href="/blog" variant="outline" className="shrink-0">
            View All Blog
          </PillButton>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative min-h-[18.75rem] overflow-hidden rounded-2xl">
                <Image
                  src={FEATURED_IMAGES[index]}
                  alt={post.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="si-caption absolute right-[5%] top-[5%] rounded-full bg-black/40 px-3 py-[0.4rem] font-semibold text-white backdrop-blur-md">
                  {post.category}
                </span>
              </div>

              <div className="pb-2 pt-4">
                <span className="si-caption text-deep-gray-1">{formatDate(post.date)}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="max-w-[14rem]">
                  <h3 className="si-body-xs font-bold text-black transition-colors duration-300 group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="si-body-xs mt-1 line-clamp-2 text-deep-gray-1">{post.excerpt}</p>
                </div>
                <span className="si-caption shrink-0 rounded-full bg-white-3 px-3 py-2 font-medium text-black">
                  {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
