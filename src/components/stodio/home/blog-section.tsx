import Link from "next/link";
import Reveal from "../reveal";
import Tag from "../tag";
import BlogCard from "../blog-card";
import { ArrowRight } from "../icons";
import { BLOG_POSTS } from "@/lib/data";
import { blogImage } from "@/components/stodio/lib/blog-images";

export default function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="st-blogs-section st-is-home">
      <div className="st-container">
        <div className="st-blog-title-block">
          <div className="st-blog-title-left">
            <Reveal className="st-tag-block">
              <Tag>The journal</Tag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                Stories, strategies, <span className="st-mute">and AI thinking.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <span className="st-view-all-clip">
              <Link className="st-view-all" href="/blog">
                <ArrowRight className="st-view-all-icon" />
                <span className="st-view-all-text">View All Blogs</span>
              
              </Link>
            </span>
          </Reveal>
        </div>

        <div className="st-blogs-card-block">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <BlogCard post={post} image={blogImage(index)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
