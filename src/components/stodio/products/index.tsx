import Link from "next/link";
import Reveal from "../reveal";
import Tag from "../tag";
import MarqueeSection from "../marquee-section";
import TestimonialsSection from "../testimonials-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { ArrowUpRight } from "../icons";
import { PRODUCTS } from "@/lib/data";

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-light">
        <section className="st-hero st-is-light">
          <div className="st-container">
            <div className="st-hero-content">
              <Reveal className="st-tag-block">
                <Tag on="light">What we run</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-row">
                <Reveal delay={60}>
                  <h1 className="st-h1">Three products we build and operate</h1>
                </Reveal>

                <Reveal delay={120}>
                  <div className="st-hero-intro">
                    <p className="st-text-m st-secondary">
                      Not case studies — live software with paying customers, support
                      and a roadmap.
                    </p>
                    <div className="st-button-wrapper st-is-hero">
                      <StButtonLink href="/contact" variant="dark">
                        Book a demo
                      </StButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>

      <MarqueeSection />

      {/* ── The list ─────────────────────────────────────────────────────── */}
      <section className="st-list-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Products</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              Pick the one that matches your operation
            </h2>
          </Reveal>

          <div className="st-list">
            {PRODUCTS.map((product, index) => (
              <Reveal key={product.slug} delay={Math.min(index, 4) * 50}>
                <Link className="st-list-row" href={`/products/${product.slug}`}>
                  <div className="st-list-row-name">
                    <h3 className="st-h5 st-weight-medium">{product.fullName}</h3>
                    <p className="st-text-s st-list-row-blurb">{product.tagline}</p>
                  </div>
                  <div className="st-list-row-foot">
                    <div className="st-list-row-meta st-text-s st-mono st-upper">
                      <span className="st-list-row-meta-item">From {product.price}</span>
                    </div>
                    <span className="st-row-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CtaSection
        eyebrow="See it live"
        heading="Walk through any of the three with us"
        ctaLabel="Book a demo"
      />
    </>
  );
}
