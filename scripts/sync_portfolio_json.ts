import fs from "fs";
import path from "path";
import { queryApiProjects, getAllApiProjects } from "../src/lib/portfolio-api";
import { PORTFOLIO_PROJECTS } from "../src/lib/data";

const rootDir = path.resolve(__dirname, "..");
const publicApiDir = path.join(rootDir, "public", "api");
const portfolioSingleDir = path.join(publicApiDir, "portfolio");

fs.mkdirSync(portfolioSingleDir, { recursive: true });

// 1. Generate public/api/portfolio.json
const catalogue = queryApiProjects({ limit: 0 });
fs.writeFileSync(
  path.join(publicApiDir, "portfolio.json"),
  JSON.stringify(catalogue, null, 2),
  "utf-8"
);
console.log(`Updated public/api/portfolio.json with ${catalogue.data.length} projects.`);

// 2. Generate each single project file in public/api/portfolio/[slug].json
const all = getAllApiProjects();
for (let i = 0; i < all.length; i++) {
  const project = all[i];
  const prev =
    i > 0
      ? {
          id: all[i - 1].id,
          slug: all[i - 1].slug,
          title: all[i - 1].title,
        }
      : null;
  const next =
    i < all.length - 1
      ? {
          id: all[i + 1].id,
          slug: all[i + 1].slug,
          title: all[i + 1].title,
        }
      : null;

  const singlePayload = {
    success: true,
    data: project,
    navigation: {
      prev,
      next,
    },
  };

  fs.writeFileSync(
    path.join(portfolioSingleDir, `${project.slug}.json`),
    JSON.stringify(singlePayload, null, 2),
    "utf-8"
  );
}
console.log(`Generated ${all.length} single project JSON files in public/api/portfolio/`);
