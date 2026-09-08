import Link from "next/link";
import type { BlogPostData } from "@/lib/data";
import { ArrowIcon } from "@/components/ui/icons";
import { blogImage } from "./blog-images";

/**
 * The card used by the index head, the index grid and the related row.
 *
 * Its internals — the read-more rule, the arrow chip and its mask — are the
 * same primitives the home blog section uses, so they are already styled;
 * only the `.blog-card` hover trigger is new. Hover (a-3 / a-4, 400ms ease):
 * image 1 → 1.15, the rule wipes in from -101%, the arrow mask slides 100%
 * and the chip fills brand blue.
 */
export function BlogCard({ post, index = 0 }: { post: BlogPostData; index?: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-link">
      <div className="blog-card">
        <div className="blog-image-wrap">
          {/* TODO: real cover art per post — see public/images/blog */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blogImage(index)}
            alt=""
            className="fit-cover"
            loading={index === 0 ? undefined : "lazy"}
          />
        </div>

        <div className="blog-content-wrap">
          <div className="blog-details-wrap">
            <div className="h6-medium blog-title">{post.title}</div>
            <div className="paragraph-02 blog-subtitle">{post.excerpt}</div>
          </div>

          <div className="blog-inner-link-wrap">
            <div className="read-more-wrap">
              <div className="paragraph-03 read-more-title">Read more</div>
              <div className="read-more-line" />
            </div>
            <div className="blog-arrow-wrap">
              <div className="blog-arrow-mask">
                {/* dark on the resting white chip, white on the brand blue
                    one that slides in behind it */}
                <ArrowIcon tone="light" />
                <ArrowIcon tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
