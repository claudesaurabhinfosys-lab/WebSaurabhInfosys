import WorkflowSection from "@/components/pages/home/workflow-section";
import FaqSection from "@/components/pages/home/faq-section";
import ServicesHero from "./services-hero";
import ServicesList from "./services-list";
import ServicesTestimonials from "./testimonials-section";
import InquirySection from "./inquiry-section";

export function ServicesPage() {
  return (
    <div className="si-page">
      <ServicesHero />
      <ServicesList />
      <WorkflowSection />
      <ServicesTestimonials />
      <FaqSection />
      <InquirySection />
    </div>
  );
}
