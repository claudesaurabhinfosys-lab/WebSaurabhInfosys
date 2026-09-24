import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../reveal";
import Tag from "../tag";
import Odometer from "../odometer";
import ProcessSection from "../process-section";
import FaqSection from "../faq-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { ArrowUpRight, CheckMark, TagIcon } from "../icons";
import { COMPANY, PRODUCTS, PRODUCT_PAGES } from "@/lib/data";

/** Art per product: the shot in the hero, the banner, the purpose picture. */
const ART: Record<string, { shot: string; banner: string; purpose: string }> = {
  ssms: {
    shot: "/images/products/sms/01.webp",
    banner: "/images/products/sms/02.webp",
    purpose: "/images/products/sms/03.webp",
  },
  mysociety: {
    shot: "/images/products/society/01.webp",
    banner: "/images/products/society/02.webp",
    purpose: "/images/products/society/03.webp",
  },
  mysampark: {
    shot: "/images/products/mysampark/01.webp",
    banner: "/images/products/mysampark/02.webp",
    purpose: "/images/products/mysampark/03.webp",
  },
};

const FALLBACK = {
  shot: "/images/services/saas.webp",
  banner: "/images/services/hero.webp",
  purpose: "/images/services/saas-deliverables.webp",
};

export default function ProductDetailPage({ slug }: { slug: string }) {
  const product = PRODUCTS.find((item) => item.slug === slug);
  const page = PRODUCT_PAGES[slug];
  if (!product || !page) notFound();

  const art = ART[slug] ?? FALLBACK;
  const others = PRODUCTS.filter((item) => item.slug !== slug);
  const steps = page.steps.map((step, index) => ({
    label: `Step ${String(index + 1).padStart(2, "0")}`,
    title: step.label,
    copy: step.desc,
  }));

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-light">
        <section className="st-product-hero">
          <div className="st-container">
            <div className="st-product-hero-inner">
              <div className="st-product-hero-left">
                <Reveal className="st-tag-block">
                  <Tag on="light">{page.label}</Tag>
                </Reveal>
                <Reveal delay={200}>
                  <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                    {page.tagline}
                  </h1>
                </Reveal>

                <Reveal delay={300}>
                  <div className="st-product-meta st-text-l">
                    <div className="st-product-meta-item">
                      <span className="st-product-meta-label">Product:</span>
                      <span className="st-product-meta-value">{product.fullName}</span>
                    </div>
                    <div className="st-product-meta-item">
                      <span className="st-product-meta-label">From:</span>
                      <span className="st-product-meta-value">{product.price}</span>
                    </div>
                    <div className="st-product-meta-item">
                      <span className="st-product-meta-label">Support:</span>
                      <span className="st-product-meta-value">Included after go-live</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={300} className="st-product-shot">
                <Image
                  src={art.shot}
                  alt={`${product.name} interface`}
                  width={527}
                  height={296}
                  priority
                />
                <div className="st-product-shot-button">
                  <StButtonLink href={product.url} variant="dark">
                    Visit {product.name}
                  </StButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <Reveal className="st-banner">
        <Image src={art.banner} alt="" width={1774} height={887} />
      </Reveal>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="st-product-section st-is-tight">
        <div className="st-container">
          <div className="st-product-split">
            <Reveal>
              <Tag>Overview</Tag>
            </Reveal>
            <Reveal delay={200} className="st-product-split-body">
              <div className="st-product-prose">
                <p>{page.overview}</p>
                <p>{product.description}</p>
              </div>
              <div className="st-text-s st-mono st-upper st-mute" style={{ marginTop: "var(--st-gap-32)" }}>
                {page.worksWith.heading}
              </div>
              <div className="st-chip-row">
                {page.worksWith.items.map((item) => (
                  <span className="st-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── One app per role ─────────────────────────────────────────────── */}
      <section className="st-product-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>What ships</Tag>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              One platform, a purpose-built app for every role
            </h2>
          </Reveal>

          <div className="st-role-grid">
            {page.highlights.map((highlight, index) => (
              <Reveal className="st-role-card" key={highlight.title} delay={index === 0 ? 200 : 300}>
                <div className="st-role-badge st-text-s st-mono st-upper">
                  <span className="st-role-badge-icon">
                    <TagIcon />
                  </span>
                  [{String(index + 1).padStart(2, "0")}]
                </div>
                <h3 className="st-h5 st-role-title st-weight-medium">{highlight.title}</h3>
                <p className="st-text-s st-role-copy">{highlight.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why it exists ────────────────────────────────────────────────── */}
      <section className="st-product-section">
        <div className="st-container">
          <div className="st-media-split">
            <Reveal className="st-media-split-media">
              <Image src={art.purpose} alt="" width={1536} height={1024} />
            </Reveal>
            <div className="st-media-split-body">
              <Reveal className="st-tag-block">
                <Tag>Why it exists</Tag>
              </Reveal>
              <Reveal delay={200}>
                <h2 className="st-h3" style={{ marginTop: "var(--st-gap-24)" }}>
                  {page.purpose.heading}
                </h2>
              </Reveal>
              {page.purpose.paragraphs.map((paragraph, index) => (
                <Reveal delay={300 + index * 100} key={paragraph.slice(0, 40)}>
                  <p className="st-text-l st-secondary" style={{ marginTop: "var(--st-gap-24)" }}>
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote + numbers ──────────────────────────────────────────────── */}
      <section className="st-quote-slab">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag on="dark">By the numbers</Tag>
          </Reveal>
          <Reveal delay={200} className="st-quote">
            <p className="st-h3" style={{ marginTop: "var(--st-gap-24)" }}>
              {page.quote}
            </p>
          </Reveal>

          <div className="st-quote-numbers">
            {page.numbers.map((number, index) => (
              <Reveal key={number.label} delay={index === 0 ? 200 : 300}>
                <div className="st-quote-number-value">
                  <Odometer value={`${number.value}${number.suffix ?? ""}`} />
                </div>
                <p className="st-quote-number-label st-text-s">{number.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        eyebrow="Rollout"
        heading="How a rollout runs"
        intro="Four steps from first call to go-live, with your data checked against your own registers before launch."
        steps={steps}
      />

      {/* ── Modules ──────────────────────────────────────────────────────── */}
      <section className="st-product-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Modules</Tag>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              What is in the box
            </h2>
          </Reveal>

          <Reveal delay={300} className="st-table-scroll">
            <table className="st-table">
              <thead>
                <tr>
                  <th scope="col">Module</th>
                  <th scope="col">What it does</th>
                  <th scope="col">Who uses it</th>
                </tr>
              </thead>
              <tbody>
                {page.modules.map((module) => (
                  <tr key={module.name}>
                    <td>{module.name}</td>
                    <td>{module.desc}</td>
                    <td>{module.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* ── Plan + audience ──────────────────────────────────────────────── */}
      <section className="st-product-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Pricing</Tag>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              What it costs, and who runs it
            </h2>
          </Reveal>

          <div className="st-plan-block">
            <Reveal className="st-plan-card" delay={200}>
              <div className="st-role-badge st-text-s st-mono st-upper">
                <span className="st-role-badge-icon">
                  <TagIcon />
                </span>
                {product.name}
              </div>
              <div className="st-h4 st-plan-price">{product.price}</div>
              <div className="st-text-s st-plan-note">{product.priceNote}</div>

              <div className="st-plan-list">
                {product.features.slice(0, 6).map((feature) => (
                  <div className="st-plan-list-row st-text-m" key={feature}>
                    <CheckMark className="st-plan-check" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="st-button-wrapper">
                <StButtonLink href={`https://wa.me/${COMPANY.whatsapp}`} variant="brand">
                  Request a demo
                </StButtonLink>
              </div>
            </Reveal>

            <Reveal className="st-plan-aside" delay={300}>
              <div>
                <div className="st-text-s st-mono st-upper st-mute">Built for</div>
                <h3 className="st-h4" style={{ marginTop: "var(--st-gap-16)" }}>
                  The people who run it every day
                </h3>
                <div className="st-plan-aside-list">
                  {product.targetUsers.map((user) => (
                    <div className="st-plan-aside-row st-text-l" key={user}>
                      <span className="st-plan-aside-dot" />
                      {user}
                    </div>
                  ))}
                </div>
              </div>
              <div className="st-button-wrapper">
                <StButtonLink href={product.url} variant="white">
                  See it live
                </StButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {page.faqs?.length ? (
        <FaqSection
          eyebrow="FAQ"
          heading={`${product.name}, answered`}
          intro="What teams ask before they switch."
          faqs={page.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
        />
      ) : null}

      {/* ── The other two products ───────────────────────────────────────── */}
      <section className="st-product-section st-is-tight">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Also from the studio</Tag>
          </Reveal>

          <div className="st-product-more">
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index === 0 ? 200 : 300}>
                <Link className="st-product-more-card" href={`/products/${other.slug}`}>
                  <div>
                    <h3 className="st-h5 st-weight-medium">{other.name}</h3>
                    <p className="st-text-s st-product-more-sub">{other.tagline}</p>
                  </div>
                  <span className="st-row-arrow" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="See it live"
        heading={`Walk through ${product.name} with us`}
        ctaLabel="Book a demo"
        ctaHref={`https://wa.me/${COMPANY.whatsapp}`}
      />
    </>
  );
}
