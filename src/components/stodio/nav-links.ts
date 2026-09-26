import { COUNTRY_PAGES, COUNTRY_SLUGS, PRODUCTS, SERVICES } from "@/lib/data";

export type NavLink = {
  label: string;
  /** Absent on an item that only exists to open its sub-menu. */
  href?: string;
  /** Renders a sub-menu: a hover panel on desktop, an inline list on mobile. */
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/portfolio" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.map((service) => ({
      label: service.shortTitle ?? service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Products",
    href: "/products",
    children: PRODUCTS.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
    })),
  },
  {
    /* No href: there is no regions index page, and pointing the parent at one
       of the four would be arbitrary. It renders as a button instead — the
       panel opens on :focus-within, and a non-focusable parent would leave
       keyboard users with no way to reach the children, which are
       `visibility: hidden` until it opens. */
    label: "Regions",
    /* Listed in the same order as the footer column, which `COUNTRY_SLUGS`
       does not use — that array's order feeds `generateStaticParams`. */
    children: (["usa", "uk", "australia", "singapore"] as const)
      .filter((slug) => COUNTRY_SLUGS.includes(slug))
      .map((slug) => ({
        label: COUNTRY_PAGES[slug].countryFull,
        href: `/${slug}`,
      })),
  },
  /* Blog is intentionally absent: it still ships, is still linked from the
     footer and still ranks — it just does not earn a slot in the primary nav. */
  { label: "Contact", href: "/contact" },
];
