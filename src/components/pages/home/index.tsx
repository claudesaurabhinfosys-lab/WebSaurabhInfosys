import HeroSection from "./hero-section";
import AboutSection from "./about-section";
import WorkSection from "./work-section";
import ClientsSection from "./clients-section";
import ProcessSection from "./process-section";
import ServicesSection from "./services-section";
import TestimonialsSection from "./testimonials-section";
import FaqSection from "./faq-section";
import BlogSection from "./blog-section";
import CtaSection from "./cta-section";

/**
 * Home, second pass — ported from home-03.
 *
 * Dropped in this pass: the four-number proof strip and `intro-v4` (both
 * folded into about-v5), the 300vh colour-wipe clients runway (replaced by
 * the brand-v3 grid), the dark work-v6 panel (now work-v5) and the dark
 * workflow-v3 panel (now process-v2).
 *
 * Every section is a light surface, as home-03 renders them, which leaves
 * the footer as the only dark panel on the page.
 */
export function HomePage() {
  return (
    <div className="si-page">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ClientsSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <CtaSection />
    </div>
  );
}
