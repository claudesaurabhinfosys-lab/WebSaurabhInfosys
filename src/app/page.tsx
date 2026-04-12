import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProductsSection from "@/components/home/ProductsSection";
import ClientLogos from "@/components/home/ClientLogos";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <ProductsSection />
      <ClientLogos />
      <Testimonials />
      <CTASection />
    </>
  );
}
