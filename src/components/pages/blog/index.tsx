import { BLOG_POSTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import CtaSection from "@/components/pages/home/cta-section";
import { BlogCard } from "./blog-card";

/**
 * blog-v1 + blog-v2.
 *
 * The head puts the two-tone title beside the newest post as a featured
 * card; everything after it falls into the three-column grid below the
 * hairline.
 */
export function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="si-page">
      <section className="blog-v1 ds-root">
        <div className="container">
          <div className="blog-v1-wrap">
            <Reveal delay={0.1} className="blog-v1-left">
              <div className="hero-heading-wrap">
                <h1 className="blog-v1-heading">
                  Notes from <span className="text-steel-gray">the studio</span>
                </h1>
              </div>
            </Reveal>

            {featured && (
              <Reveal delay={0.2} className="blog-v1-right">
                <BlogCard post={featured} index={0} />
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="blog-v2 ds-root">
        <div className="container">
          <div className="blog-v2-divider" />
          <div className="blog-v2-wrap">
            <Reveal delay={0.1} className="blog-v2-list">
              {rest.map((post, i) => (
                <div key={post.slug} className="blog-v2-item">
                  <BlogCard post={post} index={i + 1} />
                </div>
              ))}
            </Reveal>

            {rest.length === 0 && (
              <p className="paragraph-01 blog-v2-empty">No other articles yet.</p>
            )}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
