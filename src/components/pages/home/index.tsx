import HeroSection from "./hero-section";
import ClientsSection from "./clients-section";
import AboutSection from "./about-section";
import ServicesSection from "./services-section";
import ProcessSection from "./process-section";
import ProjectsSection from "./projects-section";
import TestimonialSection from "./testimonial-section";
import FaqSection from "./faq-section";
import BlogSection from "./blog-section";
import CtaSection from "./cta-section";

export function HomePage() {
  return (
    <div className="si-page">
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialSection />
      <FaqSection />
      <BlogSection />
      <CtaSection />
    </div>
  );
}
