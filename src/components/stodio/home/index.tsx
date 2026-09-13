import HeroSection from "./hero-section";
import MarqueeSection from "../marquee-section";
import GallerySection from "./gallery-section";
import CounterSection from "./counter-section";
import ServicesSection from "./services-section";
import WorkSection from "./work-section";
import FaqSection from "../faq-section";
import TestimonialsSection from "../testimonials-section";
import BlogSection from "./blog-section";
import CtaSection from "../cta-section";
import { HOME_FAQS } from "@/lib/data";

/**
 * Home page architecture, in the reference's order:
 * hero → clients → who we are → numbers → services → work → FAQ →
 * testimonials → journal → CTA. Light and dark slabs alternate so the two
 * dark panels (services, testimonials) punctuate rather than compete.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <GallerySection />
      <CounterSection />
      <ServicesSection />
      <WorkSection />
      <FaqSection faqs={HOME_FAQS} />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
