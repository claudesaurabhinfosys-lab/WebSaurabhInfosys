import Link from "next/link";
import { COMPANY } from "@/lib/data";
import {
  ArrowUpRight,
  LinkedInIcon,
  WhatsAppIcon,
} from "./icons";
import NewsletterForm from "./newsletter-form";
import Logo from "./logo";

const COLUMN_ONE = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

const COLUMN_TWO = [
  { label: "AI Automation", href: "/services/ai-agents" },
  { label: "Vibe Coding", href: "/services/vibe-coding" },
  { label: "Flutter Apps", href: "/services/flutter" },
  { label: "SaaS Platforms", href: "/services/saas" },
  { label: "Contact", href: "/contact" },
];

const COLUMN_THREE = [
  { label: "School ERP", href: "https://myschoolmanagementsystem.com" },
  { label: "MySociety", href: "/products/mysociety" },
  { label: "MySampark", href: "https://mysampark.com" },
  { label: "GPS & Fleet", href: "/services/gps" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/saurabh-infosys",
    Icon: LinkedInIcon,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${COMPANY.whatsapp}`,
    Icon: WhatsAppIcon,
  },
];

function LinkColumn({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="st-footer-link-item">
      {links.map((link) =>
        link.href.startsWith("http") ? (
          <a
            key={link.label}
            className="st-footer-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <Link key={link.label} className="st-footer-link" href={link.href}>
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="st-footer">
      <div className="st-container">
        <div className="st-footer-block">
          <div className="st-footer-link-block">
            <div className="st-footer-left">
              <Logo className="st-footer-logo" variant="light" />
              <h2 className="st-h3">Stay updated with Saurabh Infosys</h2>
              <NewsletterForm />
              <div className="st-footer-social-wrapper">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    className="st-footer-social-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <span className="st-footer-social-icon">
                      <Icon className="st-footer-social-icon" />
                    </span>
                    <span className="st-footer-social-arrow">
                      <ArrowUpRight className="st-footer-social-arrow" />
                    </span>
                  </a>
                ))}
                <a
                  className="st-footer-social-link st-text-s"
                  href={`mailto:${COMPANY.email}`}
                  aria-label="Email us"
                >
                  {COMPANY.email}
                  <span className="st-footer-social-arrow">
                    <ArrowUpRight className="st-footer-social-arrow" />
                  </span>
                </a>
              </div>
            </div>

            <div className="st-footer-link-item-block">
              <LinkColumn links={COLUMN_ONE} />
              <LinkColumn links={COLUMN_TWO} />
              <LinkColumn links={COLUMN_THREE} />
            </div>
          </div>

          <div className="st-footer-wordmark">Saurabh Infosys</div>

          <div className="st-footer-divider" />

          <div className="st-footer-bottom">
            <p className="st-text-l">
              {COMPANY.name} © {year}. All rights reserved. Built in{" "}
              <span className="st-copyright-link">Ahmedabad, India.</span>
            </p>
            <div className="st-footer-legal">
              <Link className="st-footer-link st-is-bottom" href="/contact">
                Contact
              </Link>
              <div className="st-footer-legal-divider" />
              <a className="st-footer-link st-is-bottom" href={`tel:${COMPANY.phone}`}>
                {COMPANY.phone}
              </a>
            </div>
          </div>

          <div className="st-footer-blur" />
        </div>
      </div>
    </footer>
  );
}
