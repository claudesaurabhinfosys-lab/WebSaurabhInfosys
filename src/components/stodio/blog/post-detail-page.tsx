import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "../reveal";
import Tag from "../tag";
import BlogCard from "../blog-card";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { CalendarIcon, LinkedInIcon, PlusMark, WhatsAppIcon, XIcon } from "../icons";
import { BLOG_POSTS, COMPANY } from "@/lib/data";
import { blogImage } from "@/components/stodio/lib/blog-images";
import { formatPostDate } from "@/components/stodio/lib/format-date";

/** Slugs a heading so the table of contents can jump to it. */
function anchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function PostDetailPage({ slug }: { slug: string }) {
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug);
  const post = BLOG_POSTS[index];
  if (!post) notFound();

  const headings = post.content.filter((block) => block.type === "h2");
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const shareUrl = `https://saurabhinfosys.com/blog/${post.slug}`;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-light">
        <section className="st-blog-detail-hero">
          <div className="st-container">
            <div className="st-blog-detail-title-block">
              <Reveal className="st-tag-block st-is-center">
                <Tag on="light">{post.category}</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                  {post.title}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <div className="st-blog-meta st-text-m">
                  <span className="st-blog-date">
                    <CalendarIcon className="st-blog-date-icon" />
                    {formatPostDate(post.date)}
                  </span>
                  <span className="st-read-time">
                    <span className="st-read-time-dot" />
                    {post.readTime}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <Reveal className="st-project-cover">
        <Image src={blogImage(index)} alt="" width={1920} height={900} priority />
      </Reveal>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="st-blog-detail-section">
        <div className="st-container">
          <div className="st-blog-detail-block">
            <div className="st-blog-detail-left">
              <Reveal>
                <p className="st-h5 st-weight-medium">{post.excerpt}</p>
              </Reveal>

              <div className="st-prose" style={{ marginTop: "var(--st-pad-4x)" }}>
                {post.content.map((block, blockIndex) => {
                  if (block.type === "h2") {
                    return (
                      <h2 key={blockIndex} id={anchor(block.text)}>
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "ul") {
                    return (
                      <ul key={blockIndex}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return <p key={blockIndex}>{block.text}</p>;
                })}
              </div>

              <div className="st-divider st-is-solid" style={{ marginTop: "var(--st-pad-xl)" }} />

              <div className="st-blog-share">
                <span className="st-text-s st-mono st-upper st-mute">Share</span>
                <a
                  className="st-footer-social-link"
                  style={{ backgroundColor: "var(--st-bg-light)", color: "var(--st-primary)" }}
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <LinkedInIcon className="st-footer-social-icon" />
                </a>
                <a
                  className="st-footer-social-link"
                  style={{ backgroundColor: "var(--st-bg-light)", color: "var(--st-primary)" }}
                  href={`https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                >
                  <XIcon className="st-footer-social-icon" />
                </a>
                <a
                  className="st-footer-social-link"
                  style={{ backgroundColor: "var(--st-bg-light)", color: "var(--st-primary)" }}
                  href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                >
                  <WhatsAppIcon className="st-footer-social-icon" />
                </a>
              </div>
            </div>

            <aside className="st-blog-detail-right">
              <div className="st-sidebar">
                {headings.length > 0 && (
                  <nav className="st-toc" aria-label="On this page">
                    <ul className="st-toc-list st-text-l">
                      {headings.map((heading) => (
                        <li key={heading.text}>
                          <a className="st-toc-link" href={`#${anchor(heading.text)}`}>
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}

                <div className="st-side-cta">
                  <div className="st-side-cta-icon">
                    <PlusMark className="st-button-icon" />
                  </div>
                  <div className="st-h6 st-weight-medium">
                    Actionable advice from the team that ships it
                  </div>
                  <p className="st-text-s st-secondary" style={{ marginTop: "var(--st-gap-8)" }}>
                    Tell us what you are building and we will tell you, honestly,
                    what it takes.
                  </p>
                  <StButtonLink href={`https://wa.me/${COMPANY.whatsapp}`} variant="dark">
                    Get Started
                  </StButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related ──────────────────────────────────────────────────────── */}
      <section className="st-blogs-section st-is-page" style={{ paddingTop: "var(--st-pad-xl)" }}>
        <div className="st-container">
          <div className="st-blog-title-block">
            <div className="st-blog-title-left">
              <Reveal className="st-tag-block">
                <Tag>Keep reading</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  Related posts
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="st-blogs-card-block">
            {related.map((other, position) => (
              <Reveal key={other.slug} delay={position * 90}>
                <BlogCard
                  post={other}
                  image={blogImage(BLOG_POSTS.findIndex((p) => p.slug === other.slug))}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Get started" heading="Transform Your Ideas Today" />
    </>
  );
}
