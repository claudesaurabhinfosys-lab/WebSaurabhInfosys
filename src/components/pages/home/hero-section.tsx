"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import PillButton from "@/components/ui/pill-button";
import { SERVICES } from "@/lib/data";

const NAV_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const WIDGET_SERVICES = SERVICES.slice(0, 4);
const HERO_IMAGE = "url('https://picsum.photos/id/201/1920/1400?grayscale')";

export default function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section
      className="si-hero"
      style={{ "--si-hero-image": HERO_IMAGE } as React.CSSProperties}
    >
      <header className="relative z-30">
        <div className="si-container si-nav">
          <Link href="/" className="si-brand" aria-label="Saurabh Infosys — home">
            <Image
              src="/SaurabhInfosysWhite.png"
              alt="Saurabh Infosys"
              width={800}
              height={491}
              priority
              className="si-brand-logo"
            />
          </Link>

          <nav className="si-nav-menu">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} className="si-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="si-nav-cta si-nav-cta--bar">
            Start a Project
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="si-nav-toggle"
          >
            <HugeiconsIcon icon={mobileOpen ? Cancel01Icon : Menu01Icon} size={32} strokeWidth={2.5} />
          </button>
        </div>

        {mobileOpen && (
          <div className="si-container absolute inset-x-0 top-full z-30">
            <div className="si-nav-drawer">
              <nav className="si-nav-drawer-menu">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="si-nav-drawer-link"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="si-nav-cta">
                  Start a Project
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <div className="si-container si-hero-body">
        <div className="si-hero-title">
          <h1 className="si-hero-headline">
            {["We Build AI", "Software", "That Ships."].map((line) => (
              <span key={line} className="si-hero-line">
                <span>{line}</span>
              </span>
            ))}
          </h1>
        </div>

        <div className="si-hero-row">
          <div className="si-hero-copy">
            <p className="si-hero-lead si-body">
              We craft AI agents, production apps, and SaaS platforms that blend engineering, strategy, and
              measurable impact — helping businesses grow with clarity and purpose.
            </p>
            <div className="si-hero-actions">
              <PillButton href="/contact" variant="brand">
                Get in Touch
              </PillButton>
            </div>
          </div>

          <div className="si-hero-services">
            <p className="si-hero-services-label">Service We&rsquo;re Providing.</p>
            <div className="si-hero-services-rule" />
            {WIDGET_SERVICES.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="si-hero-service">
                {service.shortTitle}
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
