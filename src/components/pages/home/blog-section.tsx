import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import { SectionBadge } from "@/components/ui/section-badge";
import { Reveal } from "@/components/ui/reveal";
import { PrimaryButton } from "@/components/ui/ds-button";
import { ArrowRightIcon } from "@/components/ui/accordion-icons";

const LATEST = BLOG_POSTS.slice(0, 3);

export default function BlogSection() {
  return (
    <section className="blog-v6 ds-root">
      <div className="container">
        <div className="blog-v6-head-wrap">
          <div className="blog-v6-head-left">
            <Reveal>
              <SectionBadge label="Latest Writing" />
            </Reveal>
            <Reveal index={1}>
              <h2>Notes on building software that ships</h2>
            </Reveal>
          </div>
          <Reveal index={2} className="blog-v6-head-right">
            <PrimaryButton href="/blog" label="All articles" />
          </Reveal>
        </div>

        <div className="blog-v6-list">
          {LATEST.map((post, i) => (
            <Reveal key={post.slug} index={i}>
              <Link href={`/blog/${post.slug}`} className="blog-v6-card">
                {/* TODO: swap the gradient for each post's cover image */}
                <div className="blog-v6-image-wrap" />
                <h3 className="h6-medium blog-v6-title">{post.title}</h3>
                <p className="paragraph-02 blog-v6-excerpt">{post.excerpt}</p>
                <div className="blog-v6-more">
                  <span className="paragraph-03">Read more</span>
                  <ArrowRightIcon />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
