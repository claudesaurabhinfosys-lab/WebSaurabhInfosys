import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";
import NewsletterForm from "./newsletter-form";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: SERVICES.map((service) => ({ label: service.shortTitle, href: `/services/${service.slug}` })),
  },
  {
    heading: "Products",
    links: [
      { label: "SSMS — School ERP", href: "/products/ssms" },
      { label: "MySociety", href: "/products/mysociety" },
      { label: "MySampark", href: "/products/mysampark" },
      { label: "Privacy Policy", href: "/products/mysampark/privacy-policy" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "LinkedIn", href: SITE_CONFIG.links.linkedin, external: true },
      { label: "WhatsApp", href: `https://wa.me/${COMPANY.whatsapp}`, external: true },
      { label: "USA", href: "/usa" },
      { label: "Singapore", href: "/singapore" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mx-2 mb-2">
      <div className="rounded-2xl bg-black pb-[3.75rem] pt-[4.38rem]">
        <div className="si-container">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.heading} className="flex flex-col items-start gap-2">
                <h3 className="si-body-xs mb-1 font-semibold text-white">{col.heading}</h3>
                {col.links.map((link) =>
                  "external" in link && link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="si-body-xs text-gray-5 transition-colors duration-300 hover:text-white-4"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="si-body-xs text-gray-5 transition-colors duration-300 hover:text-white-4"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            ))}

            <div className="flex flex-col items-start gap-2">
              <h3 className="si-body-xs mb-1 font-semibold text-white">Contact</h3>
              <span className="si-body-xs text-gray-5">{COMPANY.location}</span>
              <a
                href={`mailto:${COMPANY.email}`}
                className="si-body-xs text-gray-5 transition-colors duration-300 hover:text-white-4"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 py-16 lg:flex-row lg:items-center">
            <div className="max-w-[23.5rem]">
              <span className="si-card-title font-clash text-white">Saurabh Infosys.</span>
              <div className="pt-4">
                <p className="si-body font-normal leading-snug text-gray-5">
                  AI-first software studio building agents, apps, and SaaS platforms for clients worldwide.
                </p>
              </div>
            </div>

            <div className="w-full max-w-[25.25rem]">
              <h3 className="si-lead font-semibold leading-snug text-white">
                Subscribe to our newsletter
              </h3>
              <p className="si-body-xs mb-4 mt-1 text-gray-5">
                Get product updates and engineering notes — no spam.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="si-caption text-gray-5">
              &copy; Copyright {new Date().getFullYear()} | Designed &amp; Developed by Saurabh Infosys
            </p>
            <div className="si-caption flex items-center gap-4 text-gray-5">
              <a
                href="https://clutch.co"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white-4"
              >
                4.9★ on Clutch
              </a>
              <span>&bull;</span>
              <Link
                href="/products/mysampark/privacy-policy"
                className="transition-colors duration-300 hover:text-white-4"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
