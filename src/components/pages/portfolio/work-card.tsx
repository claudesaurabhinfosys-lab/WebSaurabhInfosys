"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/ui/icons";

/* Webflow's two named curves, so the timings below read the same as the
   reference's IX2 action lists. */
const EASE_IN_OUT = [0.455, 0.03, 0.515, 0.955] as const;
const EASE = [0.25, 0.1, 0.25, 1] as const;

/** image-wrap height variants — "" is the 560px default */
export type WorkCardSize = "" | "xs" | "xl";

export type WorkCardProject = {
  slug: string;
  title: string;
  category: string;
  tech: string[];
};

type Props = {
  project: WorkCardProject;
  image: string;
  size: WorkCardSize;
  /** first card on the page — skip lazy loading so the LCP shot is eager */
  priority?: boolean;
};

/**
 * One project card.
 *
 * Two overlapping animations, both traced from the reference:
 *
 * 1. Scroll in — the white cover collapses from scaleY 1 to 0 about its
 *    bottom edge over 800ms while the image rides 1.18 → 1 a beat behind
 *    it (100ms), so the shot settles just after it is uncovered.
 * 2. Hover — the image pushes to 1.15 and the "View Project" pill fades
 *    up, both 400ms.
 *
 * Both write to the image's scale, so it is driven from a single `animate`
 * rather than a `whileHover`: before the reveal fires the image holds at
 * 1.18, afterwards hover owns it.
 */
export function WorkCard({ project, image, size, priority }: Props) {
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(false);

  const imageScale = !revealed ? 1.18 : hovered ? 1.15 : 1;

  return (
    <div className="work-v1-item">
      <Link
        href={`/portfolio/${project.slug}`}
        className="work-link"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className="work-v1-card">
          <div className={`work-v1-image-wrap${size ? ` ${size}` : ""}`}>
            {/* TODO: swap for real project shots once they land in
                public/images/work — see the placeholder pool in work-grid */}
            <motion.img
              src={image}
              alt={project.title}
              loading={priority ? undefined : "lazy"}
              className="fit-cover work-v1-image"
              initial={reduce ? undefined : { scale: 1.18 }}
              animate={reduce ? undefined : { scale: imageScale }}
              transition={
                revealed
                  ? { duration: 0.4, ease: EASE }
                  : { duration: 0.8, ease: EASE_IN_OUT, delay: 0.1 }
              }
            />

            <motion.div
              className="work-button-wrap"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: reduce ? 0.2 : 0.4, ease: EASE }}
            >
              {/* doubled label and arrow: on hover the text group slides
                  -50% and the arrow mask +100%, so the second copy of each
                  takes the first one's place — same masks as the site
                  buttons, driven off .work-link:hover in CSS */}
              <div className="work-button">
                <div className="work-btn-text-wrap">
                  <div className="primary-btn-mask">
                    <div className="primary-btn-text-group">
                      <div className="paragraph-02 btn-text-01">View Project</div>
                      <div className="paragraph-02 btn-text-02" aria-hidden="true">
                        View Project
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work-arrow-wrap">
                  {/* the mask packs both arrows flex-end, so the SECOND is
                      the one showing at rest and the first slides in on
                      hover — order is the reverse of the label group's */}
                  <div className="primary-btn-arrow-mask">
                    <ArrowIcon tone="light" />
                    <ArrowIcon tone="dark" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="work-v1-cover"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: reduce ? 0.3 : 0.8, ease: EASE_IN_OUT }}
              onViewportEnter={() => setRevealed(true)}
            />
          </div>

          <div className="work-v1-content-wrap">
            <div className="work-v1-details">
              <div className="paragraph-01 work-v1-title">{project.title}</div>
              <div className="paragraph-01 work-v1-tag">{project.category}</div>
            </div>
            <div className="paragraph-01 work-v1-tag">{project.tech.join(" / ")}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
