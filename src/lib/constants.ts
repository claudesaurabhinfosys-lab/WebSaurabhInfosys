export const SITE_CONFIG = {
  name: "Saurabh Infosys",
  description: "Enterprise IT Services, Custom Web & Mobile Development, Society Management Systems",
  url: "https://saurabhinfosys.com",
  ogImage: "https://saurabhinfosys.com/og-image.jpg",
  links: {
    whatsapp: "https://wa.me/919909900000",
    email: "contact@saurabhinfosys.com",
    linkedin: "https://www.linkedin.com/company/saurabh-infosys"
  }
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
] as const;
