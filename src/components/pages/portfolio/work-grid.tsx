"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { PORTFOLIO_PROJECTS, PORTFOLIO_CATEGORIES } from "@/lib/data";
import { WorkCard, type WorkCardSize } from "./work-card";
import { workImage } from "./work-images";

/* The reference's rhythm: a seven-card, five-row cycle that keeps the
   grid off-balance as you scroll. `mod` is the row modifier, `blocks`
   are the block/image-wrap size variants sitting in it. */
const ROW_PATTERN: { mod: "" | "r2" | "r3"; blocks: WorkCardSize[] }[] = [
  { mod: "",   blocks: ["", "xs"] },
  { mod: "r2", blocks: ["xl"] },
  { mod: "r3", blocks: [""] },
  { mod: "",   blocks: ["xs", ""] },
  { mod: "",   blocks: ["xl"] },
];

type Row = { mod: string; cards: { project: (typeof PORTFOLIO_PROJECTS)[number]; size: WorkCardSize; index: number }[] };

/** Lay a flat project list into the repeating row pattern. */
function buildRows(projects: typeof PORTFOLIO_PROJECTS): Row[] {
  const rows: Row[] = [];
  let cursor = 0;
  let step = 0;

  while (cursor < projects.length) {
    const { mod, blocks } = ROW_PATTERN[step % ROW_PATTERN.length];
    const cards = blocks
      .map((size, i) => {
        const project = projects[cursor + i];
        return project ? { project, size, index: cursor + i } : null;
      })
      .filter((c): c is NonNullable<typeof c> => c !== null);

    rows.push({ mod, cards });
    cursor += blocks.length;
    step += 1;
  }

  return rows;
}

export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const rows = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? PORTFOLIO_PROJECTS
        : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
    return buildRows(filtered);
  }, [activeCategory]);

  return (
    <section className="work-v1 ds-root">
      <div className="container">
        <Reveal delay={0.1} className="work-v1-head-wrap">
          <div className="hero-heading-wrap">
            <h1>Selected Work</h1>
          </div>
          <div className="work-v1-head-right">
            <div className="paragraph-03 text-gray">(WORKS)</div>
            <div className="work-v1-shape" />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="work-v1-filter-wrap">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`work-v1-filter${activeCategory === category ? " is-active" : ""}`}
            >
              {category}
            </button>
          ))}
        </Reveal>

        {/* keyed on the filter so a category switch replays the reveal
            rather than dropping already-uncovered cards into place */}
        <Reveal key={activeCategory} delay={0.2} className="work-v1-main-wrap">
          {rows.map((row, i) => (
            <div key={i} className={`work-v1-row${row.mod ? ` ${row.mod}` : ""}`}>
              {row.cards.map(({ project, size, index }) => (
                <div
                  key={project.slug}
                  className={`work-v1-block${size ? ` ${size}` : ""}`}
                >
                  <WorkCard
                    project={project}
                    image={workImage(project.images, index, 0)}
                    size={size}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          ))}

          {rows.length === 0 && (
            <p className="paragraph-01 work-v1-empty">
              No projects in this category yet.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
