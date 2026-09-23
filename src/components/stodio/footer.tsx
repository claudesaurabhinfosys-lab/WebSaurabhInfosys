import Link from "next/link";
import { COMPANY } from "@/lib/data";
import {
  ArrowUpRight,
  LinkedInIcon,
  WhatsAppIcon,
} from "./icons";
import NewsletterForm from "./newsletter-form";
import Logo from "./logo";

/* Three columns of five. They are rendered on an equal-width grid, so the
   hairline rules between them land on a regular rhythm instead of wherever the
   longest label in each list happened to push them. The country links use the
   short `/uk` form the content brief specifies, not the `/country/uk` alias. */
const COLUMN_ONE = [
  { label: "Home", href: "/" },
  { label: "Studio", href: "/about" },
  { label: "Work", href: "/portfolio" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
];

const COLUMN_TWO = [
  { label: "AI Automation", href: "/services/ai-automation-services" },
  { label: "App & MVP Dev", href: "/services/app-development" },
  { label: "System Integration", href: "/services/integration-services" },
  { label: "Hire Developers", href: "/services/hire-developers" },
  { label: "White-Label SaaS", href: "/services/white-label-software" },
];

const COLUMN_THREE = [
  { label: "United States", href: "/usa" },
  { label: "United Kingdom", href: "/uk" },
  { label: "Australia", href: "/australia" },
  { label: "Singapore", href: "/singapore" },
  { label: "Contact", href: "/contact" },
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
