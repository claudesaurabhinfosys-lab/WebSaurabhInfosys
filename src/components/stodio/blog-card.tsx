import Image from "next/image";
import Link from "next/link";
import { CalendarIcon } from "./icons";
import { formatPostDate } from "@/components/stodio/lib/format-date";
import type { BlogPostData } from "@/lib/data";

type Props = {
  post: BlogPostData;
  image: string;
  /** `light` when the card sits on the tinted page background. */
  on?: "default" | "light";
};

/**
 * Tinted slab, category pill top-left, thumbnail top-right, the meta row and
 * title pushed to the bottom of a tall card — the reference's blog tile.
 */
export default function BlogCard({ post, image, on = "default" }: Props) {
  return (
    <Link
      className={`st-blog-card${on === "light" ? " st-on-light" : ""}`}
      href={`/blog/${post.slug}`}
    >
      <div className="st-blog-card-top">
        <div className="st-blog-tag">{post.category}</div>
        <div className="st-blog-card-image-wrapper">
          <Image
            className="st-blog-thumb"
            src={image}
            alt=""
            width={180}
            height={144}
          />
        </div>
      </div>

      <div className="st-blog-card-content">
        <div className="st-blog-info st-text-s">
          <div className="st-blog-date">
            <CalendarIcon className="st-blog-date-icon" />
            {formatPostDate(post.date)}
          </div>
          <div className="st-read-time">
            <span className="st-read-time-dot" />
            {post.readTime}
          </div>
        </div>

        <div className="st-blog-title-wrapper">
          <h3 className="st-h6 st-weight-medium">{post.title}</h3>
          <p className="st-text-s st-secondary" style={{ marginTop: "var(--st-gap-12)" }}>
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
