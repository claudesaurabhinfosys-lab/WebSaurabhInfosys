import EmDashHeader from "@/components/shared/em-dash-header";
import { COMPANY, TESTIMONIALS } from "@/lib/data";

const AVATAR_IDS = [18, 13, 5, 51, 8];

export default function TestimonialSection() {
  return (
    <section className="si-section overflow-hidden bg-black-2">
      <div className="flex flex-col si-stack-block">
        <div className="si-container flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <EmDashHeader label="Testimonial" light />
          <p className="si-body max-w-[450px] text-gray-1">
            Real feedback from clients who trusted Saurabh Infosys to design and build their software.
          </p>
        </div>

        <div className="no-scrollbar flex gap-6 overflow-x-auto px-6 pb-4">
          <div className="flex min-h-[25rem] w-[22rem] shrink-0 flex-col items-center justify-center gap-4 rounded-3xl bg-primary p-6">
            <span className="si-metric font-clash text-white">{COMPANY.stats.clutchRating}</span>
            <span className="si-lead text-white">{COMPANY.stats.clutchReviews}+ Reviews</span>
            <span className="text-xl leading-none text-white" aria-hidden="true">
              ★★★★★
            </span>
          </div>

          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative min-h-[25rem] w-[22rem] shrink-0 overflow-hidden rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0) 45%, rgba(0,0,0,0.85)), url('https://i.pravatar.cc/600?img=${AVATAR_IDS[index]}')`,
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-opacity duration-300 group-hover:opacity-0">
                <p className="si-body-xs font-bold">&mdash; {testimonial.name}</p>
                <p className="si-caption text-white/70">{testimonial.role}</p>
              </div>

              <div className="absolute inset-0 flex flex-col items-start justify-between gap-6 bg-white p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-lg leading-none text-primary" aria-hidden="true">
                  {"★".repeat(testimonial.rating)}
                </span>
                <p className="si-body-xs text-deep-gray-2">{testimonial.text}</p>
                <div>
                  <p className="si-body-xs font-bold text-black">&mdash; {testimonial.name}</p>
                  <p className="si-caption text-deep-gray-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
