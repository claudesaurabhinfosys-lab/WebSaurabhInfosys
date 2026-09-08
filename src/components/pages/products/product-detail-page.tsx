import { notFound } from "next/navigation";
import { PRODUCTS, PRODUCT_PAGES, COMPANY } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SectionBadge } from "@/components/ui/section-badge";
import { Odometer } from "@/components/ui/odometer";
import { PrimaryButton } from "@/components/ui/ds-button";
import { ProductHero } from "./product-hero";
import { ProductWorkflow } from "./product-workflow";
import { ProductFaq } from "./product-faq";
import { ProductContact } from "./product-contact";
import { ArrowIcon } from "@/components/ui/icons";
import { SplitText } from "@/components/ui/split-text";
import { workImage } from "@/components/pages/portfolio/work-images";

/** The three feature cards: ink, brand tint, snow — in that order. */
const CARD_TONE = ["", " purple", " white"];

/**
 * /products/<slug>, built section for section from about-03.
 *
 * about-v3 · intro-v3 · brand-v2 · services-v1 · purpose-v1 ·
 * statistics-v2 · workflow-v2 · the module table · CTA.
 *
 * Copy comes from each product's own live site, so the page says what the
 * product already says about itself. Pricing is not repeated here — the
 * CTAs send people to the product, where the current price lives.
 */
export function ProductDetailPage({ slug }: { slug: string }) {
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const page = PRODUCT_PAGES[slug];
  if (!page) notFound();

  const waText = encodeURIComponent(
    `Hi Saurabh Infosys, I'd like a demo of ${product.name}.`
  );
  const seed = product.slug.length;

  return (
    <div className="si-page">
      <ProductHero
        name={product.name}
        page={page}
        productUrl={product.url}
        demoUrl={`https://wa.me/${COMPANY.whatsapp}?text=${waText}`}
        image={workImage(undefined, seed, 0)}
      />

      {/* ---- intro-v3 — what it is -------------------------------- */}
      <section className="intro-v3 ds-root">
        <div className="container">
          <Reveal delay={0.1} className="intro-v3-wrap">
            <div className="intro-v3-left">
              <div className="heading-wrap">
                <h2>What it is</h2>
              </div>
            </div>
            <div className="intro-v3-right">
              <div className="subtitle-wrap">
                <SplitText className="h6 intro-v3-details" text={page.overview} />
              </div>
              <div className="section-button-wrap">
                <PrimaryButton href={product.url} label="See it live" external />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- brand-v2 — what it spans ----------------------------- */}
      <section className="brand-v2 ds-root">
        <div className="container">
          <Reveal delay={0.1} className="brand-v2-head-wrap">
            <div className="brand-v2-divider" />
            <div className="paragraph-03 uppercase-label text-gray">
              {page.worksWith.heading}
            </div>
            <div className="brand-v2-divider" />
          </Reveal>

          <Reveal delay={0.2} className="brand-v2-main-wrap">
            <div className="brand-v2-marquee">
              {/* two copies so the 35s loop wraps without a seam */}
              {[0, 1].map((copy) => (
                <div className="brand-v2-list" key={copy} aria-hidden={copy === 1}>
                  {page.worksWith.items.map((item) => (
                    <div key={item} className="brand-v2-logo">
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="brand-v2-shadow" />
            <div className="brand-v2-shadow right" />
          </Reveal>
        </div>
      </section>

      {/* ---- services-v1 — the three cards ------------------------ */}
      <section className="services-v1 ds-root">
        <div className="container">
          <div className="services-v1-wrap">
            <Reveal delay={0.1} className="services-v1-head-wrap">
              <div className="services-v1-left">
                <SectionBadge label="Highlights" />
                <div className="heading-wrap">
                  <h2 className="services-v1-heading">
                    More than a dashboard. {product.name} runs the day.
                  </h2>
                </div>
              </div>
              <div className="services-v1-right">
                <div className="paragraph-02 text-gray">{product.tagline}</div>
                <PrimaryButton href={product.url} label="Explore features" external />
              </div>
            </Reveal>

            <div className="services-v1-main-wrap">
              {page.highlights.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={0.1}
                  className={`services-v1-list${i > 0 ? ` _0${i + 1}` : ""}`}
                >
                  <div className={`services-v1-card${CARD_TONE[i] ?? ""}`}>
                    <div className="services-v1-top">
                      <div className="services-v1-icon">
                        <ArrowIcon tone={i === 0 ? "light" : "dark"} />
                      </div>
                      <div className="paragraph-03">
                        //{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="services-v1-bottom">
                      <p className="paragraph-02">{item.desc}</p>
                      <div className="services-v1-title-wrap">
                        <h3 className="h6">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- purpose-v1 — why it exists --------------------------- */}
      <section className="purpose-v1 ds-root">
        <div className="container">
          <div className="purpose-v1-wrap">
            <Reveal delay={0.1} className="purpose-v1-head-wrap">
              <SectionBadge label="Purpose" />
              <div className="heading-wrap">
                <h2>{page.purpose.heading}</h2>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="purpose-v1-main-wrap">
              <div className="purpose-v1-details-wrap">
                <div className="purpose-v1-text-wrap">
                  {page.purpose.paragraphs.map((text) => (
                    <p key={text} className="paragraph-01 purpose-v1-details">
                      {text}
                    </p>
                  ))}
                </div>
                <div className="section-button-wrap">
                  <PrimaryButton
                    href={`https://wa.me/${COMPANY.whatsapp}?text=${waText}`}
                    label="Request a demo"
                    external
                  />
                </div>
              </div>

              <div className="purpose-v1-image-wrap">
                {/* TODO: a real product screenshot */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={workImage(undefined, seed + 1, 0)}
                  alt={`${product.name} in use`}
                  className="fit-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- statistics-v2 — the line and the numbers ------------- */}
      <section className="statistics-v2 ds-root">
        <div className="container">
          <Reveal delay={0.1} className="statistics-v2-content">
            <div className="heading-wrap">
              <h2 className="h3 align-center">&ldquo;{page.quote}&rdquo;</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="statistics-v2-list-wrap">
            {page.numbers.map((n) => (
              <div key={n.label} className="statistics-v2-list">
                <Odometer value={n.value} suffix={n.suffix} size="h1" />
                <div className="statistics-v2-title-wrap">
                  <div className="paragraph-m-01 statistics-v2-title">{n.label}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <ProductWorkflow page={page} image={workImage(undefined, seed + 2, 0)} />

      {/* ---- the module table ------------------------------------- */}
      <section className="modules ds-root">
        <div className="container">
          <Reveal delay={0.1} className="modules-head-wrap">
            <SectionBadge label="Modules" />
            <div className="heading-wrap">
              <h2>Everything in the box</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="modules-main-wrap">
            <div className="modules-title-wrap">
              <div className="paragraph-02 text-gray">Module</div>
              <div className="paragraph-02 text-gray">What it does</div>
              <div className="paragraph-02 text-gray modules-role">Used by</div>
            </div>

            {page.modules.map((mod) => (
              <div key={mod.name} className="modules-list">
                <div className="paragraph-m-01">{mod.name}</div>
                <div className="paragraph-02 text-gray">{mod.desc}</div>
                <div className="paragraph-03 text-gray modules-role">{mod.role}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {page.faqs && page.faqs.length > 0 && <ProductFaq faqs={page.faqs} />}

      {/* contact-v1 is the last section, as it is on about-03 — the form
          is the conversion moment, so the CTA band underneath was a
          second ask for the same thing. */}
      <ProductContact productName={product.name} />
    </div>
  );
}
