import Image from "next/image";
import Reveal from "../reveal";
import Tag from "../tag";
import { StButtonLink } from "../button";

const META = [
  "Define",
  "est. YR2021",
  "system: Saurabh Infosys",
];

export default function HeroSection() {
  return (
    <div className="st-header">
      <section className="st-hero">
        <Image
          className="st-hero-bg"
          src="/images/services/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="st-hero-scrim" />

        <div className="st-container">
          <div className="st-hero-content">
            <Reveal className="st-tag-block" delay={0}>
              <Tag>AI-first software studio</Tag>
            </Reveal>

            <div className="st-hero-title-block st-is-home">
              <Reveal delay={100}>
                <h1 className="st-h1">Building the Next Generation of AI Products</h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="st-hero-subtext st-text-m">
                  Helping businesses automate, launch and scale through AI-first
                  software.
                </p>
              </Reveal>
            </div>

            <div className="st-hero-content-wrapper st-is-home">
              <Reveal delay={300}>
                <div className="st-hero-meta">
                  {META.map((item) => (
                    <div className="st-text-l" key={item}>
                      <span className="st-hero-meta-plus">+</span>
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="st-hero-intro st-is-home">
                  <h2 className="st-h4">
                    AI automation, mobile and web products for startups and
                    enterprises
                  </h2>
                  <div className="st-button-wrapper st-is-hero">
                    <StButtonLink href="/portfolio" variant="brand">
                      View Work
                    </StButtonLink>
                    <StButtonLink href="/contact">Reach Out</StButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
