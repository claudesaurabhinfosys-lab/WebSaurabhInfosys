import Link from "next/link";
import { BLOG_POSTS, type BlogPostData, type CountryPageData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { ArrowIcon } from "@/components/ui/icons";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** The picks named in the country entry, then latest posts to fill four. */
function postsFor(slugs: string[]) {
  const picked = slugs
    .map((slug) => BLOG_POSTS.find((post) => post.slug === slug))
    .filter((post): post is BlogPostData => Boolean(post));

  const filler = BLOG_POSTS.filter((post) => !picked.includes(post));
  return [...picked, ...filler].slice(0, 4);
}

function ReadLink() {
  return (
    <div className="blog-read-wrap">
      <div className="paragraph-03 uppercase-label">Read article</div>
      <div className="read-link">
        <div className="read-icons">
          <ArrowIcon tone="light" />
          <ArrowIcon tone="light" />
        </div>
      </div>
    </div>
  );
}

/**
 * blog-v5. One lead card split image / copy, then a row of three
 * compact cards.
 *
 * Covers are brand gradients until posts carry real images — the same
 * stand-in `blog-v6` uses on the home page, so the two sections do not
 * disagree about what a post looks like.
 */
export default function CountryBlog({ page }: { page: CountryPageData }) {
  const [lead, ...rest] = postsFor(page.blogSlugs);

  return (
    <section className="blog-v5 ds-root">
      <div className="container">
        <div className="blog-v5-wrap">
          <Reveal>
            <SectionBadge label="Latest writing" />
          </Reveal>

          <div className="blog-v5-main-wrap">
            <Reveal index={1}>
              <Link href={`/blog/${lead.slug}`} className="blog-v5-link">
                <div className="blog-v5-card-large">
                  <div className="blog-v5-image-wrap">
                    <div className="blog-v5-visual" />
                  </div>

                  <div className="blog-v5-content-wrap">
                    <div className="blog-v5-content-inner">
                      <div className="blog-v5-content">
                        <div className="blog-v5-top">
                          <SectionBadge label={lead.category} variant="light" />
                          <div className="paragraph-02 text-gray">
                            {formatDate(lead.date)}
                          </div>
                        </div>
                        <div className="blog-v5-text-wrap">
                          <h3 className="h5 blog-v5-title">{lead.title}</h3>
                          <p className="paragraph-02 blog-details">{lead.excerpt}</p>
                        </div>
                      </div>
                      <ReadLink />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            <div className="blog-v5-list-wrap">
              <div className="blog-v5-list">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} index={i} className="blog-v5-item">
                    <Link href={`/blog/${post.slug}`} className="blog-v5-link">
                      <div className="blog-v5-card">
                        <div className="blog-v5-content sm">
                          <div className="blog-v5-top">
                            <SectionBadge label={post.category} variant="light" />
                            <div className="paragraph-02 text-gray">
                              {formatDate(post.date)}
                            </div>
                          </div>
                          <h3 className="h5 blog-v5-title-sm">{post.title}</h3>
                        </div>
                        <ReadLink />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
