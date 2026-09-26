import { TESTIMONIALS } from "@/lib/data";
import TestimonialsSlider from "./testimonials-slider";

export default function TestimonialsSection() {
  const testimonials = TESTIMONIALS.map(({ name, role, text }) => ({ name, role, text }));
  return <TestimonialsSlider testimonials={testimonials} />;
}
