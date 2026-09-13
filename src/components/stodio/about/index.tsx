import Image from "next/image";
import Reveal from "../reveal";
import Tag from "../tag";
import CtaSection from "../cta-section";
import FoundationSection from "./foundation-section";
import {
  ABOUT,
  ABOUT_BELIEFS,
  ABOUT_MARKETS,
  CLIENTS,
  COMPANY,
  HOME_PROCESS,
} from "@/lib/data";
import Odometer from "../odometer";
import {
  ClientMark,
  GlyphBlueprint,
  GlyphBox,
  GlyphPulse,
  GlyphTarget,
} from "../icons";

const STATS = [
  { value: COMPANY.stats.clients, label: "Clients served", copy: "Across India, the UK, Europe, APAC, the Americas and the Gulf." },
  { value: COMPANY.stats.projects, label: "Products shipped", copy: "Mobile apps, SaaS platforms and AI systems live in production." },
  { value: COMPANY.stats.saasProducts, label: "SaaS products of our own", copy: "SSMS, MySociety and MySampark — we run what we build." },
  { value: COMPANY.stats.clutchRating, label: "Clutch rating", copy: `${COMPANY.stats.clutchReviews} verified reviews from 80+ clients.` },
];

const PROCESS_GLYPHS = [GlyphTarget, GlyphBlueprint, GlyphBox, GlyphPulse];

const SHOWCASE = [
  "/images/about/belief-01.webp",
  "/images/about/belief-02.webp",
  "/images/about/belief-03.webp",
  "/images/about/belief-04.webp",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header">
        <section className="st-hero st-is-dark">
          <div className="st-container">
            <div className="st-hero-content st-is-center">
              <Reveal className="st-tag-block st-is-center">
                <Tag on="dark">{ABOUT.identityBadge}</Tag>
              </Reveal>

              <div className="st-hero-title-block st-is-center">
                <Reveal delay={100}>
                  <h1 className="st-h1">
                    We exist to build lasting
                    <Image
                      className="st-title-image"
                      src="/images/about/studio.webp"
                      alt=""
                      width={106}
                      height={80}
                    />
                    digital systems.
                  </h1>
                </Reveal>
              </div>

              <Reveal delay={250} style={{ width: "100%" }}>
                <div className="st-hero-content-wrapper">
                  <div className="st-text-l st-mute st-mono st-upper">
                    AI-first software studio
                  </div>
                  <div className="st-text-l st-mute st-mono st-upper">Since 2021</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* ── Our story ────────────────────────────────────────────────────── */}
      <section className="st-story-section">
        <div className="st-container">
          <div className="st-story-block">
            <div className="st-story-left">
              <Reveal className="st-tag-block">
                <Tag>Our story</Tag>
              </Reveal>
              <Reveal delay={150} className="st-author-wrapper">
                <div className="st-author-images">
                  <Image className="st-author-image" src="/images/about/identity.webp" alt="" width={36} height={36} />
                  <Image className="st-author-image" src="/images/about/studio-panel.webp" alt="" width={36} height={36} />
                </div>
                <div className="st-text-m">
                  <span className="st-mute">By</span> the Saurabh Infosys team
                </div>
              </Reveal>
            </div>

            <div className="st-story-right">
              <Reveal delay={100}>
                <p className="st-h5 st-weight-medium">{ABOUT.identityLead}</p>
              </Reveal>
              <Reveal delay={200}>
                <p className="st-h5 st-mute" style={{ marginTop: "var(--st-gap-24)" }}>
                  {ABOUT.identitySub}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers ──────────────────────────────────────────────────────── */}
      <section className="st-counter-section">
        <div className="st-container">
          <div className="st-counter-block">
            <Reveal className="st-tag-block">
              <Tag>Numbers</Tag>
            </Reveal>
            <div className="st-counter-grid">
              {STATS.map((stat, index) => (
                <Reveal className="st-counter-item" key={stat.label} delay={index * 90}>
                  <div className="st-counter-digit-wrapper">
                    <Odometer className="st-counter-digit" value={stat.value} />
                  </div>
                  <div className="st-counter-divider" />
                  <div className="st-counter-content">
                    <div className="st-h6 st-weight-medium">{stat.label}</div>
                    <p className="st-text-s st-secondary">{stat.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What drives us ───────────────────────────────────────────────── */}
      <section className="st-experience-section">
        <div className="st-container">
          <div className="st-experience-block">
            <div className="st-experience-title">
              <Reveal className="st-tag-block st-is-center">
                <Tag>What drives us</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  From first idea to launch
                  <Image
                    className="st-title-image"
                    src="/images/about/workflow-01.webp"
                    alt=""
                    width={106}
                    height={80}
                  />
                  backed by {COMPANY.stats.years} years of shipping.
                </h2>
              </Reveal>
            </div>

            <div className="st-showcase-grid">
              {SHOWCASE.map((src, index) => (
                <Reveal className="st-showcase-item" key={src} delay={index * 80}>
                  <Image
                    className="st-showcase-image"
                    src={src}
                    alt=""
                    width={220}
                    height={300}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our method ───────────────────────────────────────────────────── */}
      <section className="st-process-section">
        <div className="st-process-bg">
          <div className="st-container">
            <div className="st-process-title-block">
              <div className="st-process-title-left">
                <Reveal className="st-tag-block">
                  <Tag on="dark">Our method</Tag>
                </Reveal>
                <Reveal delay={100}>
                  <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                    {HOME_PROCESS.heading}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={200} className="st-process-title-right">
                <p className="st-text-m">
                  Years of refining a process that closes the gap between a
                  business goal and working software, without losing either.
                </p>
              </Reveal>
            </div>

            <div className="st-process-card-wrapper">
              {HOME_PROCESS.steps.map((step, index) => {
                const Glyph = PROCESS_GLYPHS[index % PROCESS_GLYPHS.length];
                return (
                  <Reveal className="st-process-card" key={step.title} delay={index * 90}>
                    <div className="st-process-card-head st-text-m">
                      <span className="st-process-card-step">Step {index + 1}</span>
                      <span className="st-mute">{step.title}</span>
                    </div>
                    <div className="st-process-card-icon-wrapper">
                      <Glyph className="st-process-card-icon" />
                    </div>
                    <p className="st-text-s st-secondary">{step.copy}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Client wall ──────────────────────────────────────────────────── */}
      <section className="st-clientwall-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Client wall</Tag>
          </Reveal>
          <div className="st-clientwall-grid">
            {CLIENTS.concat(CLIENTS).map((client, index) => (
              <Reveal className="st-clientwall-item" key={`${client.name}-${index}`} delay={(index % 4) * 70}>
                <div className="st-clientwall-name">
                  <ClientMark className="st-logo-mark" />
                  {client.name}
                </div>
                <div className="st-text-s st-mute st-mono st-upper">
                  {client.country}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foundation ───────────────────────────────────────────────────── */}
      <FoundationSection beliefs={ABOUT_BELIEFS} />

      {/* ── Markets ──────────────────────────────────────────────────────── */}
      <section className="st-markets-section">
        <div className="st-container">
          <div className="st-markets-title-block">
            <div className="st-markets-title-left">
              <Reveal className="st-tag-block">
                <Tag>{ABOUT.marketsBadge}</Tag>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  {ABOUT.marketsHeading}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={200} className="st-markets-title-right">
              <p className="st-text-m st-secondary">
                A small, senior team working inside your hours, in English,
                wherever you are.
              </p>
            </Reveal>
          </div>

          <div className="st-markets-grid">
            {ABOUT_MARKETS.map((market, index) => (
              <Reveal className="st-market-card" key={market.slug} delay={index * 80}>
                <Image
                  className="st-market-image"
                  src={`/images/about/market-${market.slug}.webp`}
                  alt={market.name}
                  width={400}
                  height={520}
                />
                <div className="st-market-info">
                  <div className="st-h6 st-weight-medium">{market.name}</div>
                  <div className="st-text-s st-mono st-upper" style={{ color: "var(--st-mute)" }}>
                    {market.tagline}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Work with us" heading={ABOUT.contactHeading} ctaLabel="Start a conversation" />
    </>
  );
}
