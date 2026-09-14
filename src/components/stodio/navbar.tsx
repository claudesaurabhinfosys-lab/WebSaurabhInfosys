"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { COMPANY, PORTFOLIO_PROJECTS, PRODUCTS } from "@/lib/data";
import { ArrowUpRight, ChevronDown, CloseMark } from "./icons";
import Logo from "./logo";
import { getLenis } from "./lenis-provider";

type NavLink = {
  label: string;
  href: string;
  count?: boolean;
  /** Renders a sub-menu: a hover panel on desktop, an inline list on mobile. */
  children?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/portfolio", count: true },
  { label: "Services", href: "/services" },
  {
    label: "Products",
    href: "/products",
    children: PRODUCTS.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
    })),
  },
  /* Blog is intentionally absent: it still ships, is still linked from the
     footer and still ranks — it just does not earn a slot in the primary nav. */
  { label: "Contact", href: "/contact" },
];

/**
 * Which nav treatment a route gets. This mirrors the reference build's own
 * per-page navbar variant: `base` (white nav + white logo, sitting on a dark
 * hero) and `v2` (dark nav + colour logo, sitting on a light slab).
 *
 * `next.config.mjs` sets `trailingSlash: true`, so the blog index is served at
 * `/blog/` — which is why every path is normalised before matching. Matching
 * `/blog/` with `startsWith("/blog/")` used to put the white-on-dark index
 * page into the dark-nav variant and made the links disappear.
 */
function isLightRoute(pathname: string) {
  // Drop the trailing slash so "/blog/" and "/blog" are the same route.
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  // Dark heroes -> white nav.
  if (path === "/" || path === "/about" || path === "/blog") return false;

  // Light slabs -> dark nav.
  if (path.startsWith("/portfolio")) return true;
  if (path.startsWith("/blog/")) return true;
  if (path.startsWith("/contact")) return true;
  if (path.startsWith("/services")) return true;
  if (path.startsWith("/products")) return true;

  return false;
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const light = isLightRoute(pathname);
  const [open, setOpen] = useState(false);
  // The sheet only exists below 992px. `inert` has to be scoped to that, or the
  // desktop nav — which is never "open" — ends up inert and unclickable.
  const [compact, setCompact] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 991px)");
    const sync = () => setCompact(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes it, and focus goes back to the control that opened it —
  // otherwise the caret is left on a link that just became inert.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Hold the page still behind the sheet. Lenis has to be stopped as well as
  // the document: it scrolls from wheel and touch events of its own and keeps
  // running straight through `overflow: hidden`.
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    const previous = document.body.style.overflow;
    lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = previous;
    };
  }, [open]);

  const projectCount = String(PORTFOLIO_PROJECTS.length).padStart(2, "0");

  return (
    <div className="st-navbar-mount">
      <nav className={`st-navbar${light ? " st-is-light" : ""}`} aria-label="Primary">
        <div className="st-container">
          <div className="st-nav-link-block">
            <div className="st-nav-left">
              <Link href="/" className="st-nav-logo" aria-label="Saurabh Infosys — home">
                <Logo variant={light ? "dark" : "light"} priority />
              </Link>
            </div>

            {/* The scrim is part of the sheet, not the page: tapping anywhere
                off the panel closes the menu. It is `aria-hidden` because
                Escape and the toggle already cover the keyboard path. */}
            <div
              className={`st-nav-scrim${open ? " st-is-open" : ""}`}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* `inert` while the sheet is closed, so its links cannot be
                tabbed into behind a panel that is not on screen. The CSS
                already hides them with `visibility`, which does the same job;
                this states the intent and survives a styling change. */}
            <div
              id="st-nav-menu"
              className={`st-nav-menu${open ? " st-is-open" : ""}`}
              inert={compact && !open}
              data-lenis-prevent
            >
              <div className="st-nav-menu-wrp">
                {/* Header and footer are fixed; only the list between them
                    scrolls, so the call to action never leaves the panel. */}
                <div className="st-nav-sheet-head">
                  <span className="st-nav-sheet-title">Menu</span>
                  <button
                    type="button"
                    className="st-nav-sheet-close"
                    aria-label="Close menu"
                    onClick={() => {
                      setOpen(false);
                      toggleRef.current?.focus();
                    }}
                  >
                    <CloseMark />
                  </button>
                </div>

                <div className="st-nav-links">
                {NAV_LINKS.map((link) => {
                  const path =
                    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
                  const current =
                    link.href === "/" ? path === "/" : path.startsWith(link.href);

                  if (link.count) {
                    return (
                      /* The count sits inside the anchor, not beside it, so
                         the whole row is the tap target in the mobile sheet
                         and the badge stays glued to the word. */
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`st-nav-link st-nav-link-inner${current ? " st-is-current" : ""}`}
                      >
                        <span className="st-nav-mark" aria-hidden="true" />
                        {link.label}
                        <span className="st-nav-count st-mono">{projectCount}</span>
                      </Link>
                    );
                  }

                  if (link.children) {
                    return (
                      <div className="st-nav-item st-has-menu" key={link.href}>
                        <Link
                          href={link.href}
                          className={`st-nav-link${current ? " st-is-current" : ""}`}
                        >
                          <span className="st-nav-mark" aria-hidden="true" />
                          {link.label}
                          <ChevronDown className="st-nav-chevron" aria-hidden="true" />
                        </Link>
                        {/* Not a <button>/aria-expanded pair on purpose: the
                            parent is a real link to /products, and the panel
                            opens on hover and on :focus-within, so keyboard
                            users reach every child by tabbing. */}
                        <div className="st-nav-dropdown">
                          <div className="st-nav-dropdown-panel">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`st-nav-dropdown-link${
                                  path === child.href ? " st-is-current" : ""
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`st-nav-link${current ? " st-is-current" : ""}`}
                    >
                      <span className="st-nav-mark" aria-hidden="true" />
                      {link.label}
                    </Link>
                  );
                })}
                </div>

                <div className="st-nav-sheet-foot">
                  <a className="st-nav-sheet-phone" href={`tel:${COMPANY.phone}`}>
                    {COMPANY.phone}
                  </a>
                  <a
                    className="st-nav-sheet-cta"
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book A Call
                    <ArrowUpRight className="st-nav-sheet-cta-icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="st-nav-right">
              <div className="st-nav-button-wrapper">
                <a
                  className="st-button st-is-nav"
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="st-button-avatar"
                    src="/images/hero/contact-card.webp"
                    alt=""
                    width={48}
                    height={36}
                  />
                  <span className="st-button-content">
                    <span className="st-button-inner">
                      <span className="st-button-text-wrap">
                        <span className="st-button-text">Book A Call</span>
                      </span>
                      <span className="st-button-icon-wrap">
                        <ArrowUpRight className="st-button-icon" />
                      </span>
                    </span>
                    <span className="st-button-inner st-is-absolute" aria-hidden="true">
                      <span className="st-button-text-wrap">
                        <span className="st-button-text">Book A Call</span>
                      </span>
                      <span className="st-button-icon-wrap">
                        <ArrowUpRight className="st-button-icon" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>

              <button
                ref={toggleRef}
                type="button"
                className={`st-hamburger${open ? " st-is-open" : ""}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="st-nav-menu"
                onClick={() => setOpen((v) => !v)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
