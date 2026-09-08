import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/accordion-icons";
import CtaSection from "@/components/pages/home/cta-section";
import { BlogCard } from "./blog-card";
import { blogImage } from "./blog-images";
import { formatPostDate } from "./format-date";

/** One label / value pair in the sticky rail. */
function RailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="blog-v3-info-list">
      <div className="blog-v3-info-content">
        <div className="paragraph-m-02">{label}</div>
        <div className="paragraph-02 text-gray">{value}</div>
      </div>
    </div>
  );
}

export function PostDetailPage({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const index = BLOG_POSTS.indexOf(post);
  const url = `https://saurabhinfosys.com/blog/${post.slug}`;

  /* Same category first, then whatever is newest, so the row is never
     short on a post whose category has no siblings. */
  const related = [
    ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  /* The reference offers four share targets. Ours are the three channels
     Saurabh Infosys actually publishes — no invented accounts. */
  const shares = [
    {
      name: "linkedin",
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "whatsapp",
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`,
    },
    {
      name: "email",
      label: "Share by email",
      href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="si-page">
      <article className="blog-v3 ds-root">
        <div className="container">
          <div className="blog-v3-wrap">
            <Reveal delay={0.1}>
              <div className="blog-v3-heading-wrap">
                <h1 className="h2 blog-v3-heading">{post.title}</h1>
              </div>

              {/* The reference names a writer here. We publish no bylines,
                  so the brand pill carries the category instead. */}
              <div className="blog-v3-info-wrap">
                <div className="blog-info-list">
                  <div className="publish-wrap">
                    <div className="paragraph-02 publish-title">Category</div>
                    <div className="paragraph-m-02">{post.category}</div>
                  </div>
                </div>
                <div className="blog-info-list white">
                  <div className="publish-wrap">
                    <div className="paragraph-02 publish-title">Published</div>
                    <div className="paragraph-m-02">{formatPostDate(post.date)}</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="blog-v3-image-wrap">
              {/* TODO: real cover art per post */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={blogImage(index)} alt="" className="fit-cover" />
            </Reveal>
          </div>

          <div className="blog-v3-main-wrap">
            <div className="blog-v3-left">
              <RailItem label="Published" value={formatPostDate(post.date)} />
              <RailItem label="Read time" value={post.readTime} />
              <RailItem label="Category" value={post.category} />

              <div className="blog-v3-info-list">
                <div className="blog-share-wrap">
                  <div className="paragraph-m-02">Share</div>
                  <div className="blog-share-list">
                    {shares.map((share) => (
                      <a
                        key={share.name}
                        href={share.href}
                        className="blog-share-link"
                        aria-label={share.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SocialIcon name={share.name} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-v3-right">
              <div className="blog-v3-details">
                {post.content.map((block, i) => {
                  if (block.type === "h2") {
                    return <h2 key={i}>{block.text}</h2>;
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={i}>
                        {block.items.map((item) => (
                          <li key={item} className="paragraph-01">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="paragraph-01">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="blog-v4 ds-root">
          <div className="container">
            <div className="blog-v4-wrap">
              <Reveal delay={0.1} className="blog-v4-head-wrap">
                <div className="heading-wrap">
                  <h2 className="h3">More from the studio</h2>
                </div>
              </Reveal>

              <Reveal delay={0.2} className="blog-v4-main-wrap">
                <div className="blog-v2-list">
                  {related.map((item, i) => (
                    <div key={item.slug} className="blog-v2-item">
                      <BlogCard post={item} index={i} />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </div>
  );
}
