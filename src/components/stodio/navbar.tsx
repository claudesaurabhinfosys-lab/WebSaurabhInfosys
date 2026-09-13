"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY, PORTFOLIO_PROJECTS } from "@/lib/data";
import { ArrowUpRight } from "./icons";
import Logo from "./logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/portfolio", count: true },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
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

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

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

            <div className={`st-nav-menu${open ? " st-is-open" : ""}`}>
              <div className="st-nav-menu-wrp">
                {NAV_LINKS.map((link) => {
                  const path =
                    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
                  const current =
                    link.href === "/" ? path === "/" : path.startsWith(link.href);

                  if (link.count) {
                    return (
                      <div className="st-nav-link-inner" key={link.href}>
                        <Link
                          href={link.href}
                          className={`st-nav-link${current ? " st-is-current" : ""}`}
                        >
                          {link.label}
                        </Link>
                        <div className="st-nav-count st-mono">{projectCount}</div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`st-nav-link${current ? " st-is-current" : ""}`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
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
                type="button"
                className={`st-hamburger${open ? " st-is-open" : ""}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
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
