import Link from "next/link";
import { COMPANY } from "@/lib/data";
import { SocialIcon } from "@/components/ui/accordion-icons";

const MENUS = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Automation", href: "/services/ai-agents" },
      { label: "Vibe Coding", href: "/services/vibe-coding" },
      { label: "Flutter Apps", href: "/services/flutter" },
      { label: "SaaS Platforms", href: "/services/saas" },
      { label: "GPS & Fleet", href: "/services/gps" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "SSMS — School ERP", href: "/products/ssms" },
      { label: "MySociety", href: "/products/mysociety" },
      { label: "MySampark", href: "/products/mysampark" },
      { label: "Privacy Policy", href: "/products/mysampark/privacy-policy" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer ds-root">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-top-wrap">
            <div className="footer-brand-column">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/SaurabhInfosysWhite.png"
                alt="Saurabh Infosys"
                className="footer-brand"
              />
              <div className="paragraph-02 footer-brand-title">{COMPANY.tagline}</div>
            </div>

            <div className="footer-menu-column">
              <div className="footer-menu-list-wrap">
                {MENUS.map((menu) => (
                  <div className="footer-menu-group" key={menu.title}>
                    <div className="paragraph-03 footer-menu-title">{menu.title}</div>
                    <div className="footer-menu-list">
                      {menu.links.map((link) => (
                        <Link key={link.href} href={link.href} className="paragraph-02 footer-menu">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom-wrap">
            <div className="footer-info-column">
              <div className="footer-info-list">
                <div className="paragraph-03 footer-info-title">Head office</div>
                <div className="paragraph-02 footer-menu">{COMPANY.location}</div>
              </div>
              <div className="footer-info-list">
                <div className="paragraph-03 footer-info-title">Email</div>
                <a href={`mailto:${COMPANY.email}`} className="paragraph-02 footer-menu">
                  {COMPANY.email}
                </a>
              </div>
              <div className="footer-info-list">
                <div className="paragraph-03 footer-info-title">Phone</div>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="paragraph-02 footer-menu"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="footer-social-column">
              <div className="footer-social-list-wrap">
                <a
                  href="https://www.linkedin.com/company/saurabh-infosys"
                  className="footer-social-link"
                  aria-label="Saurabh Infosys on LinkedIn"
                >
                  <SocialIcon name="linkedin" />
                </a>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  className="footer-social-link"
                  aria-label="Message us on WhatsApp"
                >
                  <SocialIcon name="whatsapp" />
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="footer-social-link"
                  aria-label="Email Saurabh Infosys"
                >
                  <SocialIcon name="email" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-copyright-wrap">
            <div className="paragraph-03 copyright-title">
              © {year} {COMPANY.name}. All rights reserved.
            </div>
            <div className="paragraph-03 copyright-title">
              {COMPANY.stats.clutchRating}★ on Clutch · {COMPANY.stats.clients} clients
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
