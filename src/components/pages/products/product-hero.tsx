"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { useScrollRefresh } from "./use-scroll-refresh";
import { Odometer } from "@/components/ui/odometer";
import { PrimaryButton, SecondaryButton } from "@/components/ui/ds-button";
import type { ProductPage } from "@/lib/data";

/**
 * about-v3, with a-37 "About Scroll".
 *
 * The wrap is a 300vh runway; the plate on the right is sticky and grows
 * from 55% x 60vh at 30% of that scroll to a full-bleed 100% x 100vh at
 * 72%, then holds. Width and height are what the reference animates and
 * what this animates: the two axes grow by different amounts, so a
 * scale() would stretch the shot where the reference re-crops it. That is
 * the one place on this page that leaves the transform-and-opacity rule,
 * and it is deliberate.
 *
 * Below 992px the runway is off in CSS, so the hook is left mapping a
 * progress nothing reads.
 */
export function ProductHero({
  name,
  page,
  productUrl,
  demoUrl,
  image,
}: {
  name: string;
  page: ProductPage;
  productUrl: string;
  demoUrl: string;
  image: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useScrollRefresh();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const width = useTransform(scrollYProgress, [0.3, 0.72], ["55%", "100%"], {
    clamp: true,
  });
  const height = useTransform(scrollYProgress, [0.3, 0.72], ["60vh", "100vh"], {
    clamp: true,
  });

  return (
    <section className="about-v3 ds-root">
      <div className="container">
        <div className="about-v3-wrap">
          <Reveal delay={0.1} className="about-v3-head-wrap">
            <div className="about-v3-head-left">
              <div className="hero-heading-wrap">
                <h1>{name}</h1>
              </div>
            </div>
            <div className="about-v3-head-right">
              <div className="paragraph-03 experience-title">{page.label}</div>
              <div className="paragraph-02 text-gray">{page.tagline}</div>
            </div>
          </Reveal>

          <div className="about-v3-main-wrap" ref={ref}>
            <Reveal delay={0.3} className="about-v3-left">
              <div className="about-button-wrap">
                <PrimaryButton href={productUrl} label={`Open ${name}`} external />
                <SecondaryButton href={demoUrl} label="Request a demo" external />
              </div>

              <div className="about-statistics-wrap">
                <div className="about-statistics-details">
                  <Odometer
                    value={page.stat.value}
                    suffix={page.stat.suffix}
                    size="h1"
                  />
                  <div className="paragraph-03 about-statistics-info">
                    {page.stat.label}
                  </div>
                </div>
              </div>
            </Reveal>

            <motion.div
              className="about-v3-right"
              style={reduce ? undefined : { width, height }}
            >
              <div className="about-v3-image-wrap">
                {/* TODO: a real product screenshot */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${name} — ${page.label}`}
                  className="fit-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
