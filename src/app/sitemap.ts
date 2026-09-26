import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { BLOG_POSTS, COUNTRY_SLUGS, PORTFOLIO_PROJECTS, PRODUCTS, SERVICE_DETAILS } from "@/lib/data";
import { SERVICE_ALIASES, SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

/* `trailingSlash: true` serves every page at `/path/`, and the server 301s the
   slashless form — so every URL here ends in a slash, or each entry would be a
   redirect rather than the canonical page. */
const url = (path: string) => `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;

const BUILD_DATE = new Date();
const DATA = "src/lib/data.ts";

/**
 * When a page's content last really changed: the newest git commit touching
 * the files it is built from. Google trusts <lastmod> only when it tracks
 * real edits — a build timestamp moves on every deploy and gets ignored.
 * Falls back to the build date if git history is unavailable (deploy.yml
 * checks out with fetch-depth: 0 so it is available in CI).
 */
const cache = new Map<string, Date>();
function lastChanged(paths: string[]): Date {
  const key = paths.join("|");
  const hit = cache.get(key);
  if (hit) return hit;
  let date = BUILD_DATE;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) date = new Date(out);
  } catch {
    // no git: keep the build date
  }
  cache.set(key, date);
  return date;
}

/**
 * Built from the same data the pages are generated from, so a new blog post,
 * case study or product is listed the moment it is added, and a removed one
 * can never linger here as a 404.
 *
 * Only canonical URLs are listed: the legacy service aliases, the top-level
 * service copies and the /country/ copies all canonicalise elsewhere.
 */
type Entry = MetadataRoute.Sitemap[number];
type Freq = Entry["changeFrequency"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, changeFrequency: Freq, priority: number, sources: string[]): Entry => ({
    url: url(path),
    lastModified: lastChanged(sources),
    changeFrequency,
    priority,
  });

  /** A route's own files, its components, and the content file. */
  const page = (route: string, component: string) => [
    `src/app/${route}`,
    `src/components/stodio/${component}`,
    DATA,
  ];

  const services = Object.keys(SERVICE_DETAILS)
    .filter((slug) => !(slug in SERVICE_ALIASES))
    .map((slug) => entry(`/services/${slug}`, "monthly", 0.9, page("services", "services")));

  return [
    entry("/", "weekly", 1.0, ["src/app/page.tsx", "src/components/stodio/home", DATA]),
    entry("/about", "monthly", 0.8, page("about", "about")),
    entry("/contact", "monthly", 0.9, page("contact", "contact")),
    entry("/portfolio", "weekly", 0.8, page("portfolio", "portfolio")),
    entry("/services", "monthly", 0.9, page("services", "services")),
    entry("/products", "monthly", 0.8, page("products", "products")),
    entry("/blog", "weekly", 0.9, page("blog", "blog")),
    ...services,
    ...PRODUCTS.map((product) => entry(`/products/${product.slug}`, "monthly", 0.8, page("products", "products"))),
    ...COUNTRY_SLUGS.map((slug) => entry(`/${slug}`, "monthly", 0.9, page(slug, "country"))),
    ...PORTFOLIO_PROJECTS.map((project) =>
      entry(`/portfolio/${project.slug}`, "monthly", 0.6, [
        "src/components/stodio/portfolio",
        `public/images/work/${project.slug}`,
        DATA,
      ]),
    ),
    // Posts carry their own publish date.
    ...BLOG_POSTS.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
