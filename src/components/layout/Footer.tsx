import Link from "next/link";
import { COMPANY } from "@/lib/data";

const links = {
  Services: [
    { label: "AI Agents & Bots", href: "/services/ai-agents" },
    { label: "Vibe Coding / MVPs", href: "/services/vibe-coding" },
    { label: "Flutter Apps", href: "/services/flutter" },
    { label: "GPS & Fleet", href: "/services/gps" },
    { label: "SaaS Platforms", href: "/services/saas" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ],
  Products: [
    { label: "SSMS — School ERP", href: "/products/ssms" },
    { label: "MySociety", href: "/products/mysociety" },
    { label: "MySampark", href: "/products/mysampark" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-9 h-9 gradient-bg rounded-xl flex items-center justify-center">
                <span className="text-white font-extrabold text-sm">SI</span>
              </div>
              <span className="font-extrabold text-ink text-lg">
                Saurabh<span className="text-accent">Infosys</span>
              </span>
            </Link>
            <p className="text-sm text-ink-light leading-relaxed mb-5 max-w-xs">
              AI-First software studio. We build AI agents, Flutter apps, SaaS platforms, and GPS systems for clients worldwide.
            </p>
            <div className="flex flex-col gap-2 text-sm text-ink-light">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                📱 WhatsApp: +91 {COMPANY.whatsapp}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-accent transition-colors">
                ✉️ {COMPANY.email}
              </a>
              <span>📍 {COMPANY.location}</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="font-bold text-ink text-sm mb-4 tracking-wide">{heading}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-ink-light hover:text-accent transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-light">
            © {new Date().getFullYear()} Saurabh Infosys. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-light">
            <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <span>⭐</span> 4.9/5 on Clutch
            </a>
            <span className="text-ink/20">|</span>
            <span>80+ clients worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
