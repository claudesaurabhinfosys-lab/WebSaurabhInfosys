"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Reveal from "../reveal";
import Tag from "../tag";
import BlogCard from "../blog-card";
import CtaSection from "../cta-section";
import { BLOG_POSTS } from "@/lib/data";
import { blogImage } from "@/components/stodio/lib/blog-images";

export default function BlogPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(BLOG_POSTS.map((post) => post.category)))],
    [],
  );
  const [filter, setFilter] = useState("All");

  const posts = BLOG_POSTS.filter((post) => filter === "All" || post.category === filter);

  return (
    <>
      <div className="st-header">
        <section className="st-hero st-is-blogs">
          <Image
            className="st-hero-bg"
            src="/images/services/digital-marketing-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="st-hero-scrim st-is-even" />

          <div className="st-container">
            <div className="st-hero-content st-is-center">
              <Reveal className="st-tag-block st-is-center">
                <Tag on="dark">Blog</Tag>
              </Reveal>
              <div className="st-hero-title-block st-is-center">
                <Reveal delay={100}>
                  <h1 className="st-h1">Latest Insights From Our Projects</h1>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="st-blogs-section st-is-page">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>All blogs</Tag>
          </Reveal>

          <div className="st-projects-filter" style={{ paddingTop: "var(--st-gap-24)" }}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`st-filter-pill${filter === category ? " st-is-active" : ""}`}
                onClick={() => setFilter(category)}
                aria-pressed={filter === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="st-blogs-grid">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 90}>
                <BlogCard post={post} image={blogImage(index)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Get started" heading="Transform Your Ideas Today" />
    </>
  );
}
