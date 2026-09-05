"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { COMPANY } from "@/lib/data";
import { PrimaryButton } from "@/components/ui/ds-button";
import { GlobeIcon, MenuIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Works", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Products", href: "/products/ssms" },
];

const MOBILE_PAGES = [
  [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],
  [
    { label: "AI Automation", href: "/services/ai-agents" },
    { label: "Vibe Coding", href: "/services/vibe-coding" },
    { label: "Flutter Apps", href: "/services/flutter" },
    { label: "SaaS Platforms", href: "/services/saas" },
    { label: "Contact", href: "/contact" },
  ],
];

const MOBILE_PRODUCTS = [
  { label: "SSMS — School ERP", href: "/products/ssms" },
  { label: "MySociety", href: "/products/mysociety" },
  { label: "MySampark", href: "/products/mysampark" },
  { label: "USA", href: "/usa" },
  { label: "Singapore", href: "/singapore" },
];

/** "GMT 8:23" — ticks every 30s, rendered only after mount so SSR and
 *  client markup can never disagree. */
function GmtClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const read = () => {
      const now = new Date();
      const h = now.getUTCHours();
      const m = String(now.getUTCMinutes()).padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    read();
    const id = setInterval(read, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="nav-clock-wrap">
      <GlobeIcon />
      <div className="paragraph-03 uppercase-label">GMT {time ?? "--:--"}</div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // the panel covers the page — don't let the body scroll behind it
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const link = (item: { label: string; href: string }) => (
    <Link
      key={item.href}
      href={item.href}
      className={`menu-link${isCurrent(item.href) ? " is-current" : ""}`}
    >
      {item.label}
    </Link>
  );

  return (
    <section id="Navbar" className="navbar ds-root">
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <Link href="/" className="navbar-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/saurabhInfosys.webp" alt="Saurabh Infosys" className="navbar-logo" />
            </Link>

            <div className="navbar-menu-wrap">
              <div className="menu-list">{NAV_LINKS.map(link)}</div>
              <GmtClock />
            </div>
          </div>

          <div className="navbar-right">
            <div className="nav-button-wrapper">
              <PrimaryButton href="/contact" label="Work with us" />
            </div>

            <button
              type="button"
              className="nav-menu-button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>

        {/* Drops down from behind the navbar: the overlay opens to the
            panel's height while the panel itself slides in from above. */}
        <div className="nav-overlay">
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="menu"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                <motion.nav
                  id="nav-mobile-menu"
                  className="nav-menu-wrapper"
                  initial={reduce ? { opacity: 0 } : { transform: "translateY(-100%)" }}
                  animate={reduce ? { opacity: 1 } : { transform: "translateY(0%)" }}
                  exit={reduce ? { opacity: 0 } : { transform: "translateY(-100%)" }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="nav-mobile-wrapper">
                    <div className="nav-mobile-column">
                      <div className="nav-title-wrap">
                        <div className="paragraph-03 nav-title">Pages</div>
                      </div>
                      <div className="menu-list-wrap">
                        {MOBILE_PAGES.map((column, i) => (
                          <div className="dropdown-menu-wrap" key={i}>
                            {column.map(link)}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="nav-mobile-column">
                      <div className="nav-title-wrap">
                        <div className="paragraph-03 nav-title">Products</div>
                      </div>
                      <div className="menu-list-wrap single">
                        <div className="dropdown-menu-wrap">
                          {MOBILE_PRODUCTS.map(link)}
                          <a href={`mailto:${COMPANY.email}`} className="menu-link">
                            {COMPANY.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="nav-menu-cta">
                    <PrimaryButton href="/contact" label="Work with us" />
                  </div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
