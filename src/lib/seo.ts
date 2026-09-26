import type { Metadata } from "next";
import { COMPANY } from "./company";

export const SITE_URL = "https://saurabhinfosys.com";
export const SITE_NAME = COMPANY.name;

/**
 * Legacy service slugs that render the same page as a primary one. The pages
 * stay live so old links keep working, but their canonical points at the
 * primary URL and they are left out of the sitemap, so search engines see one
 * page instead of two identical ones competing with each other.
 */
export const SERVICE_ALIASES: Record<string, string> = {
  "ai-agents": "ai-automation-services",
  "vibe-coding": "app-development",
  flutter: "app-development",
  gps: "white-label-software",
  saas: "white-label-software",
  "digital-marketing": "white-label-software",
};

export function primaryServiceSlug(slug: string) {
  return SERVICE_ALIASES[slug] ?? slug;
}

/**
 * A page title that already names the brand is used exactly as written;
 * otherwise the root layout's "%s | Saurabh Infosys" template adds it. Stops
 * titles reading "... | Saurabh Infosys | Saurabh Infosys" without changing
 * any page's wording.
 */
export function brandTitle(title: string): Metadata["title"] {
  return /saurabh infosys/i.test(title) ? { absolute: title } : title;
}

export const DEFAULT_OG_IMAGE = "/og/default.png";

/** Open Graph / Twitter image entry for a social preview under /og/ (see
    src/app/og). Each page lists it in its own openGraph block, because a
    page's openGraph replaces the parent's wholesale. */
export function ogImages(url: string = DEFAULT_OG_IMAGE) {
  return [{ url, width: 1200, height: 630 }];
}

export const OG_IMAGES = ogImages();

/** BreadcrumbList JSON-LD from [name, path] pairs, home first. */
export function breadcrumbLd(items: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path === "/" ? "/" : `${path}/`}`,
    })),
  };
}

/** Serialises JSON-LD for a <script> tag, escaping "<" so content can never
    close the tag early. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
