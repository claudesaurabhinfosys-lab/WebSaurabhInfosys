import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "../reveal";
import Tag from "../tag";
import ProcessSection from "../process-section";
import FaqSection from "../faq-section";
import CtaSection from "../cta-section";
import { StButtonLink } from "../button";
import { ArrowUpRight, CheckMark } from "../icons";
import { COMPANY, PORTFOLIO_PROJECTS, SERVICE_DETAILS, SERVICE_PROCESS, SERVICES } from "@/lib/data";
import { postsForService, projectsForService } from "@/lib/topics";
import { workImage } from "@/components/stodio/lib/work-images";
import { blogImage } from "@/components/stodio/lib/blog-images";
import WorkCard from "../work-card";
import BlogCard from "../blog-card";
import { SITE_URL, breadcrumbLd, jsonLd, primaryServiceSlug } from "@/lib/seo";

const PROCESS_STEPS = SERVICE_PROCESS.map((step) => ({
  label: `Step ${step.number}`,
  title: step.badge,
  copy: step.detail,
}));

export default function ServiceDetailPage({ slug }: { slug: string }) {
  const resolvedSlug = primaryServiceSlug(slug);
  const service = SERVICES.find((item) => item.slug === resolvedSlug);
  const detail = SERVICE_DETAILS[slug] ?? SERVICE_DETAILS[resolvedSlug];
  if (!service || !detail) notFound();

  const others = SERVICES.filter((item) => item.slug !== resolvedSlug).slice(0, 3);
  // This service's topic cluster: its case studies and articles.
  const work = projectsForService(resolvedSlug);
  const reading = postsForService(resolvedSlug);
  const path = `/services/${resolvedSlug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: detail.seo.description,
      url: `${SITE_URL}${path}/`,
      provider: { "@id": `${SITE_URL}/#organization` },
    },
    breadcrumbLd([["Home", "/"], ["Services", "/services"], [service.title, path]]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-light">
        <section className="st-detail-hero">
          <div className="st-container">
            <div className="st-detail-hero-inner">
              <div className="st-detail-hero-left">
                <Reveal className="st-tag-block">
                  <Tag on="light">{service.shortTitle ?? service.title}</Tag>
                </Reveal>
                <Reveal delay={60}>
                  <h1 className="st-h1" style={{ marginTop: "var(--st-gap-24)" }}>
                    {service.title}
                  </h1>
                </Reveal>
              </div>

              <Reveal delay={120} className="st-detail-hero-right">
                <p className="st-text-l st-secondary">{service.description}</p>
                <div className="st-button-wrapper st-is-hero">
                  <StButtonLink href="/contact" variant="dark">
                    Get a quote
                  </StButtonLink>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      <Reveal className="st-banner">
        <Image
          src={`/images/services/${slug}-hero.webp`}
          alt=""
          width={1774}
          height={887}
          priority
        />
      </Reveal>

      {/* ── Overview ─────────────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <div className="st-split">
            <Reveal className="st-split-label">
              <Tag>Overview</Tag>
            </Reveal>
            <Reveal delay={60} className="st-split-body">
              {detail.overview.map((paragraph) => (
                <p className="st-text-l" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </p>
              ))}
              <div className="st-note-card">
                <div className="st-text-s st-mono st-upper st-mute">Timeline</div>
                <p className="st-h6 st-weight-medium" style={{ marginTop: "var(--st-gap-8)" }}>
                  {detail.note}
                </p>
                <StButtonLink href={`https://wa.me/${COMPANY.whatsapp}`} variant="brand">
                  Ask on WhatsApp
                </StButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What is included ─────────────────────────────────────────────── */}
      <section className="st-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>What is included</Tag>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
              Everything that ships with {service.shortTitle ?? service.title}
            </h2>
          </Reveal>

          <div className="st-feature-grid">
            {service.features.map((feature, index) => (
              <Reveal className="st-feature-row" key={feature} delay={Math.min(index, 5) * 40}>
                <CheckMark className="st-feature-check" />
                <span className="st-text-l">{feature}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use cases ────────────────────────────────────────────────────── */}
      {service.useCases?.length ? (
        <section className="st-section">
          <div className="st-container">
            <Reveal className="st-tag-block">
              <Tag>Where it pays off</Tag>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)", maxWidth: "760px" }}>
                The problems this solves
              </h2>
            </Reveal>

            <div className="st-card-grid">
              {service.useCases.map((useCase, index) => (
                <Reveal
                  className={`st-card${index === 0 ? " st-is-ink" : ""}`}
                  key={useCase.title}
                  delay={index * 60}
                >
                  <div className="st-card-index">
                    [{String(index + 1).padStart(2, "0")}]
                  </div>
                  <h3 className="st-h6 st-weight-medium">{useCase.title}</h3>
                  <p className="st-text-s st-secondary">{useCase.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ProcessSection
        heading="How the work runs"
        intro="Four steps, same on every engagement, so you always know where the project is."
        steps={PROCESS_STEPS}
      />

      <FaqSection
        eyebrow="FAQ"
        heading={`${service.shortTitle ?? service.title}, answered`}
        intro="The questions clients ask before they start."
        faqs={detail.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))}
      />

      {/* ── Selected work ────────────────────────────────────────────────── */}
      {work.length > 0 ? (
        <section className="st-other-projects">
          <div className="st-container">
            <div className="st-markets-title-block">
              <div className="st-markets-title-left">
                <Reveal className="st-tag-block">
                  <Tag>Selected work</Tag>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                    {`${service.shortTitle ?? service.title} projects we have shipped`}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={200} className="st-markets-title-right">
                <StButtonLink href="/portfolio" variant="dark">
                  All case studies
                </StButtonLink>
              </Reveal>
            </div>

            <div className="st-projects-grid st-is-three" style={{ paddingTop: "var(--st-pad-4x)" }}>
              {work.map((project, position) => (
                <Reveal key={project.slug} delay={position * 90}>
                  <WorkCard
                    href={`/portfolio/${project.slug}`}
                    title={project.title}
                    service={project.category}
                    image={workImage(
                      project.images,
                      PORTFOLIO_PROJECTS.findIndex((p) => p.slug === project.slug),
                      0,
                    )}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Related reading ──────────────────────────────────────────────── */}
      {reading.length > 0 ? (
        <section className="st-blogs-section st-is-page" style={{ paddingTop: "var(--st-pad-big)" }}>
          <div className="st-container">
            <div className="st-blog-title-block">
              <div className="st-blog-title-left">
                <Reveal className="st-tag-block">
                  <Tag>From the blog</Tag>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                    Related reading
                  </h2>
                </Reveal>
              </div>
            </div>
            <div className="st-blogs-card-block">
              {reading.map((post, position) => (
                <Reveal key={post.slug} delay={position * 90}>
                  <BlogCard post={post} image={blogImage(post.slug)} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── Other services ───────────────────────────────────────────────── */}
      <section className="st-section st-is-tight">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Also from the studio</Tag>
          </Reveal>

          <div className="st-list" style={{ marginTop: "var(--st-gap-32)" }}>
            {others.map((other, index) => (
              <Reveal key={other.slug} delay={index * 50}>
                <Link className="st-list-row" href={`/services/${other.slug}`}>
                  <div className="st-list-row-name">
                    <h3 className="st-h5 st-weight-medium">{other.title}</h3>
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
        eyebrow="Get started"
        heading="Ready when you are"
        ctaLabel="Book a consultation"
      />
    </>
  );
}
