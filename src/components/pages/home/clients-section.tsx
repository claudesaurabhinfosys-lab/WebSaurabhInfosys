"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { CLIENTS, PORTFOLIO_PROJECTS } from "@/lib/data";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { Reveal } from "@/components/ui/reveal";

type Cell = { name: string; meta: string };

/* Four named clients with the country they run in, then four shipped
   products with the sector they serve. Products are not clients, so the
   second line says what each one is rather than inventing a country. */
const PRODUCT_SLUGS = ["banigi-ai", "smart-theory-test", "macromate", "ev-connect"];

const GRID: Cell[] = [
  ...CLIENTS.map((client) => ({ name: client.name, meta: client.country })),
  ...PRODUCT_SLUGS.flatMap((slug) => {
    const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
    return project ? [{ name: project.title, meta: project.category }] : [];
  }),
];

function ClientCard({ cell, className }: { cell: Cell; className: string }) {
  return (
    <div className={className}>
      <div className="paragraph-m-01 companies-client">{cell.name}</div>
      <div className="paragraph-03 companies-meta">{cell.meta}</div>
    </div>
  );
}

/**
 * Three panels wipe the viewport in sequence — ink, brand, white — and the
 * client grid resolves out of the last one. Scroll-driven over a 300vh
 * runway with a sticky viewport; below 992px the whole mechanic is dropped
 * and a marquee runs instead.
 *
 * Panels grow width/height in vw/vh from their static position rather than
 * scaling — the reference wipes toward the bottom-right corner, it does not
 * bloom from the centre.
 *
 * Keyframes run 15 points earlier than the reference's (black 25→40, brand
 * 35→50, white 45→60, content 61→67). The reference holds a blank screen for
 * the first quarter of the runway; starting the wipe as the section pins
 * means the first thing you see on entering is motion, and the grid then has
 * the back half of the runway to sit and be read.
 */
export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const animated = isDesktop && !reduce;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // smoothing: 90 in the reference — the panels lag the scroll heavily
  // rather than tracking it 1:1
  const p = useSpring(scrollYProgress, { stiffness: 45, damping: 22, mass: 0.8 });

  const blackW = useTransform(p, [0.1, 0.25], ["0vw", "100vw"], { clamp: true });
  const blackH = useTransform(p, [0.1, 0.25], ["0vh", "100vh"], { clamp: true });
  const accentW = useTransform(p, [0.2, 0.35], ["0vw", "100vw"], { clamp: true });
  const accentH = useTransform(p, [0.2, 0.35], ["0vh", "100vh"], { clamp: true });
  const whiteW = useTransform(p, [0.3, 0.45], ["0vw", "100vw"], { clamp: true });
  const whiteH = useTransform(p, [0.3, 0.45], ["0vh", "100vh"], { clamp: true });
  const content = useTransform(p, [0.46, 0.52], [0, 1], { clamp: true });

  return (
    <section className="companies ds-root" ref={sectionRef}>
      <div className="companies-sticky">
        <motion.div
          className="companies-wrap"
          style={animated ? { opacity: content } : undefined}
        >
          <div className="container">
            <div className="companies-title-wrap">
              <div className="paragraph-03 companies-title">
                Trusted across four continents, and the work we ship
              </div>
            </div>

            <div className="companies-main-wrap">
              <div className="companies-list-wrap">
                {GRID.map((cell) => (
                  <ClientCard key={cell.name} cell={cell} className="companies-list" />
                ))}
              </div>
            </div>

            <Reveal className="brand-v3-marquee">
              {[0, 1].map((copy) => (
                <div className="brand-v3-list" key={copy} aria-hidden={copy === 1}>
                  {GRID.map((cell) => (
                    <ClientCard key={cell.name} cell={cell} className="brand-marquee-item" />
                  ))}
                </div>
              ))}
            </Reveal>
          </div>
        </motion.div>

        {animated && (
          <>
            <motion.div className="companies-bg black" style={{ width: blackW, height: blackH }} />
            <motion.div className="companies-bg accent" style={{ width: accentW, height: accentH }} />
            <motion.div className="companies-bg white" style={{ width: whiteW, height: whiteH }} />
          </>
        )}
      </div>
    </section>
  );
}
