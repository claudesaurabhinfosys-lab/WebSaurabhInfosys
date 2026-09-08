import FaqSection from "@/components/pages/home/faq-section";
import AboutHero from "./about-hero";
import IdentitySection from "./identity-section";
import AboutIntroSection from "./intro-section";
import BeliefsSection from "./beliefs-section";
import BrandSection from "./brand-section";
import RoleSection from "./role-section";
import AboutWorkflowSection from "./workflow-section";
import MarketsSection from "./markets-section";
import ContactSection from "./contact-section";

/**
 * about-01, in the reference's order.
 *
 * The reference's awards table sits between workflow and team; it is
 * dropped here because Saurabh Infosys has no awards on record and a
 * table of invented ones is a fabricated record, not a design decision.
 */
export function AboutPage() {
  return (
    <div className="si-page">
      <AboutHero />
      <IdentitySection />
      <AboutIntroSection />
      <BeliefsSection />
      <BrandSection />
      <RoleSection />
      <AboutWorkflowSection />
      <MarketsSection />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
