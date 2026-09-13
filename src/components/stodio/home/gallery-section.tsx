import Image from "next/image";
import Link from "next/link";
import Reveal from "../reveal";
import Tag from "../tag";
import { ArrowRight } from "../icons";

const STRIP = [
  "/images/about/belief-01.webp",
  "/images/about/workflow-01.webp",
  "/images/about/belief-03.webp",
  "/images/about/workflow-03.webp",
  "/images/about/belief-05.webp",
  "/images/about/workflow-02.webp",
];

export default function GallerySection() {
  return (
    <section className="st-gallery-section">
      <div className="st-container">
        <div className="st-gallery-title-block">
          <div className="st-gallery-title-left">
            <Reveal className="st-tag-block">
              <Tag>Who we are</Tag>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="st-h2" style={{ marginTop: "var(--st-gap-24)" }}>
                We build AI-first digital systems for teams that want to move
                faster than their market.
              </h2>
            </Reveal>
          </div>

          <div className="st-section-title-right">
            <Reveal delay={200}>
              <span className="st-view-all-clip">
                <Link className="st-view-all" href="/about">
                  <ArrowRight className="st-view-all-icon" />
                  <span className="st-view-all-text">About The Studio</span>
                
                </Link>
              </span>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="st-gallery-list-wrapper">
        <div className="st-gallery-list-container">
          {[0, 1].map((copy) => (
            <div className="st-gallery-image-list" key={copy} aria-hidden={copy === 1}>
              {STRIP.map((src, index) => (
                <div className="st-image-wrapper" key={`${copy}-${src}`}>
                  <Image
                    className="st-gallery-image"
                    src={src}
                    alt={copy === 0 ? `Saurabh Infosys studio work ${index + 1}` : ""}
                    width={460}
                    height={576}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
