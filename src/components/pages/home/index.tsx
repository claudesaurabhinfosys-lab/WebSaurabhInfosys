import HeroSection from "./hero-section";
import WorkSection from "./work-section";
import IntroSection from "./intro-section";
import ClientsSection from "./clients-section";
import WorkflowSection from "./workflow-section";
import ServicesSection from "./services-section";
import TestimonialsSection from "./testimonials-section";
import FaqSection from "./faq-section";
import BlogSection from "./blog-section";
import CtaSection from "./cta-section";

export function HomePage() {
  return (
    <div className="si-page">
      <HeroSection />
      <WorkSection />
      <IntroSection />
      <ClientsSection />
      <WorkflowSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <CtaSection />
    </div>
  );
}
