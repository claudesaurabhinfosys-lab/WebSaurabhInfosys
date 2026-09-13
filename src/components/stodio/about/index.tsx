import Image from "next/image";
import Reveal from "../reveal";
import Tag from "../tag";
import CtaSection from "../cta-section";
import ProcessSection from "../process-section";
import FoundationSection from "./foundation-section";
import ShowcaseRow from "./showcase-row";
import MarketsGrid from "./markets-grid";
import CounterItem from "../counter-item";
import { ClientMark } from "../icons";
import {
  ABOUT,
  ABOUT_BELIEFS,
  ABOUT_MARKETS,
  CLIENTS,
  COMPANY,
  HOME_PROCESS,
} from "@/lib/data";

const STATS = [
  { value: COMPANY.stats.clients, label: "Clients served", copy: "Across India, the UK, Europe, APAC, the Americas and the Gulf.", image: "/images/about/workflow-01.webp" },
  { value: COMPANY.stats.projects, label: "Products shipped", copy: "Mobile apps, SaaS platforms and AI systems live in production.", image: "/images/about/workflow-02.webp" },
  { value: COMPANY.stats.saasProducts, label: "SaaS products of our own", copy: "SSMS, MySociety and MySampark — we run what we build.", image: "/images/about/workflow-03.webp" },
  { value: COMPANY.stats.clutchRating, label: "Clutch rating", copy: `${COMPANY.stats.clutchReviews} verified reviews from 80+ clients.`, image: "/images/about/workflow-04.webp" },
];

const SHOWCASE = [
  "/images/about/belief-01.webp",
  "/images/about/belief-02.webp",
  "/images/about/belief-03.webp",
  "/images/about/belief-04.webp",
];

const PROCESS_STEPS = HOME_PROCESS.steps.map((step, index) => ({
  title: step.title,
  copy: step.copy,
  label: ["Week 1", "Week 2", "Weeks 3-8", "Launch"][index] ?? `Step ${index + 1}`,
}));

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="st-header st-is-dark">
        <section className="st-hero st-is-dark">
          <div className="st-container">
            <div className="st-about-hero-content">
              <Reveal className="st-tag-block st-is-center">
                <Tag on="dark">{ABOUT.identityBadge}</Tag>
              </Reveal>

              {/* Split into runs so the image chip sits between two words and
                  still wraps like text. */}
              <Reveal delay={200} className="st-about-hero-title">
                <h1 className="st-h1">We exist to build</h1>
                <Image
                  className="st-hero-title-image"
                  src="/images/about/studio.webp"
                  alt=""
                  width={106}
                  height={80}
                  priority
                />
                <h1 className="st-h1">lasting digital systems.</h1>
              </Reveal>

              <Reveal delay={300} style={{ width: "100%" }}>
                <div className="st-about-hero-bottom st-text-l">
                  <div>AI-first software studio</div>
                  <div>Since 2021</div>
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
              <Reveal delay={300} className="st-author-wrapper">
                <div className="st-author-images">
                  <Image className="st-author-image" src="/images/about/identity.webp" alt="" width={36} height={36} />
                  <Image className="st-author-image" src="/images/about/studio-panel.webp" alt="" width={36} height={36} />
                </div>
                <div className="st-text-xl">
                  <span className="st-mute">By</span> the Saurabh Infosys team
                </div>
              </Reveal>
            </div>

            <div className="st-story-right">
              <Reveal delay={200}>
                <p className="st-h4">{ABOUT.identityLead}</p>
              </Reveal>
              <Reveal delay={300}>
                <p className="st-h4 st-secondary" style={{ marginTop: "var(--st-gap-24)" }}>
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
                <Reveal key={stat.label} delay={index === 0 ? 200 : 300}>
                  <CounterItem {...stat} />
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
            <Reveal className="st-tag-block st-is-center">
              <Tag>What drives us</Tag>
            </Reveal>

            <Reveal delay={200} className="st-experience-title">
              <h2 className="st-h2 st-weight-medium">From first idea to launch</h2>
              <Image
                className="st-experience-title-image"
                src="/images/about/workflow-01.webp"
                alt=""
                width={120}
                height={90}
              />
              <h2 className="st-h2 st-weight-medium">
                backed by {COMPANY.stats.years} years of shipping.
              </h2>
            </Reveal>

            <ShowcaseRow images={SHOWCASE} />
          </div>
        </div>
      </section>

      {/* ── Our method ───────────────────────────────────────────────────── */}
      <ProcessSection
        heading="A systematic approach to growth."
        intro="We have spent years refining a process that closes the gap between a business goal and working software, without losing either."
        steps={PROCESS_STEPS}
      />

      {/* ── Client wall ──────────────────────────────────────────────────── */}
      <section className="st-clientwall-section">
        <div className="st-container">
          <Reveal className="st-tag-block">
            <Tag>Client wall</Tag>
          </Reveal>
          <div className="st-clientwall-grid">
            {CLIENTS.concat(CLIENTS).map((client, index) => (
              <Reveal
                className="st-clientwall-item"
                key={`${client.name}-${index}`}
                delay={index < 4 ? 200 : 300}
              >
                <div className="st-clientwall-name">
                  <ClientMark className="st-logo-mark" />
                  {client.name}
                </div>
                <div className="st-text-s st-mute st-mono st-upper">{client.country}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foundation ───────────────────────────────────────────────────── */}
      <FoundationSection beliefs={ABOUT_BELIEFS.slice(0, 3)} />

      {/* ── Markets ──────────────────────────────────────────────────────── */}
      <section className="st-markets-section">
        <div className="st-container">
          <div className="st-markets-title-block">
            <div className="st-markets-title-left">
              <Reveal className="st-tag-block">
                <Tag>{ABOUT.marketsBadge}</Tag>
              </Reveal>
              <Reveal delay={200}>
                <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                  Built in Ahmedabad, shipping to {ABOUT_MARKETS.length} markets
                </h2>
              </Reveal>
            </div>
            <Reveal delay={300} className="st-markets-title-right">
              <p className="st-text-m st-secondary">
                A small, senior team working inside your hours, in English,
                wherever you are.
              </p>
            </Reveal>
          </div>

          <MarketsGrid
            markets={ABOUT_MARKETS}
            statValue={ABOUT_MARKETS.length}
            statLabel="Markets served&hellip;"
            note={
              <>
                <div className="st-h5 st-weight-medium">
                  Time-zone aligned, English-first, and used to working as part
                  of someone else&rsquo;s team.
                </div>
                <div className="st-text-s st-mute st-mono st-upper">
                  {COMPANY.location}
                </div>
              </>
            }
          />
        </div>
      </section>

      <CtaSection eyebrow="Get started" heading="Transform Your Ideas Today" ctaLabel="Book a Consultation" />
    </>
  );
}
