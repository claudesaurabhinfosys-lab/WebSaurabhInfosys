"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { CLIENTS } from "@/lib/data";
import { useIsDesktop } from "@/lib/use-is-desktop";
import { Reveal } from "@/components/ui/reveal";

const GRID = CLIENTS.slice(0, 8);

function ClientCard({ client, className }: { client: (typeof CLIENTS)[number]; className: string }) {
  return (
    <div className={className}>
      <div className="paragraph-m-01 companies-client">{client.name}</div>
      <div className="paragraph-03 companies-meta">{client.country}</div>
    </div>
  );
}

/**
 * Three colour panels wipe the viewport in sequence — ink, brand, white —
 * and the client grid resolves out of the last one. Scroll-driven over a
 * 300vh runway with a sticky viewport; the whole mechanic is dropped below
 * 992px, where a marquee runs instead.
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

  const black = useTransform(scrollYProgress, [0.25, 0.4], [0, 1], { clamp: true });
  const accent = useTransform(scrollYProgress, [0.35, 0.5], [0, 1], { clamp: true });
  const white = useTransform(scrollYProgress, [0.45, 0.6], [0, 1], { clamp: true });
  const content = useTransform(scrollYProgress, [0.61, 0.67], [0, 1], { clamp: true });

  const blackScale = useTransform(black, (n) => `scale(${n})`);
  const accentScale = useTransform(accent, (n) => `scale(${n})`);
  const whiteScale = useTransform(white, (n) => `scale(${n})`);

  return (
    <section className="companies ds-root" ref={sectionRef}>
      <div className="companies-sticky">
        <div className="companies-wrap">
          <motion.div
            className="container"
            style={animated ? { opacity: content } : undefined}
          >
            <div className="companies-title-wrap">
              <div className="paragraph-03 companies-title">
                Trusted by teams across four continents
              </div>
            </div>

            <div className="companies-main-wrap">
              <div className="companies-list-wrap">
                {GRID.map((client) => (
                  <ClientCard key={client.name} client={client} className="companies-list" />
                ))}
              </div>
            </div>

            <Reveal className="brand-v3-marquee">
              {[0, 1].map((copy) => (
                <div className="brand-v3-list" key={copy} aria-hidden={copy === 1}>
                  {GRID.map((client) => (
                    <ClientCard
                      key={client.name}
                      client={client}
                      className="brand-marquee-item"
                    />
                  ))}
                </div>
              ))}
            </Reveal>
          </motion.div>
        </div>

        {animated && (
          <>
            <motion.div className="companies-bg black" style={{ transform: blackScale }} />
            <motion.div className="companies-bg accent" style={{ transform: accentScale }} />
            <motion.div className="companies-bg white" style={{ transform: whiteScale }} />
          </>
        )}
      </div>
    </section>
  );
}
