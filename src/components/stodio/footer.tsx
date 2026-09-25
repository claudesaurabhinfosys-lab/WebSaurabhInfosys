import Link from "next/link";
import { COMPANY, COUNTRY_PAGES, PRODUCTS, SERVICES } from "@/lib/data";
import {
  ArrowUpRight,
  LinkedInIcon,
  WhatsAppIcon,
} from "./icons";
import NewsletterForm from "./newsletter-form";
import Logo from "./logo";

type FooterLink = { label: string; href: string };
type FooterColumn = { heading: string; href?: string; links: FooterLink[] };

/* Four titled columns, each fed from the same data as the navbar so the two
   never drift apart. They sit on an equal-width grid, so the hairline rules
   between them land on a regular rhythm. The country links use the short
   `/uk` form the content brief specifies, not the `/country/uk` alias. */
const COLUMNS: FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Studio", href: "/about" },
      { label: "Work", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    href: "/services",
    links: SERVICES.map((service) => ({
      label: service.shortTitle ?? service.title,
      href: `/services/${service.slug}`,
    })),
  },
  {
    heading: "Products",
    href: "/products",
    links: PRODUCTS.map((product) => ({
      label: product.name,
      href: `/products/${product.slug}`,
    })),
  },
  {
    heading: "Regions",
    links: (["usa", "uk", "australia", "singapore"] as const).map((slug) => ({
      label: COUNTRY_PAGES[slug].countryFull,
      href: `/${slug}`,
    })),
  },
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

function LinkColumn({ column }: { column: FooterColumn }) {
  return (
    <nav className="st-footer-link-item" aria-label={column.heading}>
      {column.href ? (
        <Link className="st-footer-heading st-mono" href={column.href}>
          {column.heading}
        </Link>
      ) : (
        <div className="st-footer-heading st-mono">{column.heading}</div>
      )}
      {column.links.map((link) => (
        <Link key={link.href} className="st-footer-link" href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
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
              {COLUMNS.map((column) => (
                <LinkColumn key={column.heading} column={column} />
              ))}
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
