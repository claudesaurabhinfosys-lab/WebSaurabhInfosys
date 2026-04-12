import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GPS Fleet Tracking & Management Software India | Saurabh Infosys",
  description: "Custom real-time GPS fleet tracking systems for logistics, transport & delivery companies. Live maps, driver behaviour analytics, route optimisation. Built in India.",
  keywords: ["GPS fleet management India", "fleet tracking software India", "vehicle tracking system", "GPS tracking Ahmedabad", "fleet management software Gujarat", "real-time GPS tracking", "logistics software India", "transport management system India"],
  alternates: { canonical: "https://saurabhinfosys.com/services/gps" },
  openGraph: { title: "GPS Fleet Tracking Software — Saurabh Infosys", description: "Real-time GPS tracking for fleets — live maps, driver analytics & route optimisation.", url: "https://saurabhinfosys.com/services/gps", type: "website" },
  twitter: { card: "summary_large_image", title: "GPS Fleet Tracking | Saurabh Infosys", description: "Custom GPS fleet management systems for logistics & transport companies." },
};

const features = [
  {
    title: "Real-Time GPS Tracking",
    desc: "Track every vehicle on a live map with second-by-second position updates. No refresh needed — data streams continuously.",
    icon: "📍",
  },
  {
    title: "Live Map Dashboard",
    desc: "A clean, fast web dashboard built on Google Maps API. Filter by vehicle, driver, or route. Export reports in one click.",
    icon: "🗺️",
  },
  {
    title: "Driver Behaviour Analytics",
    desc: "Monitor harsh braking, over-speeding, idle time, and route deviation. Score drivers and reduce accident risk.",
    icon: "📊",
  },
  {
    title: "Route Optimization",
    desc: "Automatically suggest the fastest, most fuel-efficient routes based on live traffic and historical trip data.",
    icon: "🔀",
  },
  {
    title: "Fuel & Maintenance Logs",
    desc: "Log fuel fill-ups, schedule servicing, and get alerts before maintenance windows are missed.",
    icon: "⛽",
  },
  {
    title: "Alerts & Notifications",
    desc: "Instant SMS or WhatsApp alerts on geo-fence exits, overspeeding, prolonged idling, or unexpected stops.",
    icon: "🔔",
  },
];

const useCases = [
  {
    title: "Transport Companies",
    desc: "Manage inter-city truck fleets across multiple routes and depots. Get ETA accuracy above 90% and reduce fuel leakage.",
  },
  {
    title: "Delivery Fleets",
    desc: "Track last-mile delivery riders and vehicles in real time. Share live tracking links with customers automatically.",
  },
  {
    title: "School Transport",
    desc: "Give parents live visibility into their child's school bus. Geo-fence alerts when the bus enters or leaves school premises.",
  },
];

const stats = [
  { value: "200+", label: "Vehicles currently tracked" },
  { value: "50%", label: "Fuel savings reported by clients" },
  { value: "24/7", label: "Real-time data, zero downtime" },
];

export default function GPSServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink text-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-4">
            GPS &amp; Fleet Management
          </p>
          <h1 className="font-syne text-4xl md:text-6xl font-bold leading-tight mb-6">
            Know where your fleet is,{" "}
            <span className="text-accent">every second.</span>
          </h1>
          <p className="font-dm text-lg md:text-xl text-bg/75 max-w-2xl mb-10">
            Real-time GPS tracking and fleet intelligence for logistics,
            transport, and delivery businesses. Cut fuel costs, reduce idle
            time, and keep customers informed — all from one dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/918735001217"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-bg font-syne font-semibold px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-center"
            >
              Request a Live Demo
            </a>
            <Link
              href="/contact"
              className="inline-block border border-bg/30 text-bg font-syne font-semibold px-8 py-4 rounded-lg hover:border-bg/60 transition-colors text-center"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-accent text-bg py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-syne text-4xl font-bold mb-1">{stat.value}</p>
                <p className="font-dm text-bg/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-4">
            Everything your fleet needs
          </h2>
          <p className="font-dm text-ink/60 mb-14 max-w-xl">
            Built for fleet operators who need reliability, speed, and clarity
            — not bloated enterprise software.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 border border-ink/5 hover:border-accent/30 transition-colors"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="font-syne font-semibold text-ink text-lg mb-2">
                  {f.title}
                </h3>
                <p className="font-dm text-ink/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-card py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-dm text-accent text-sm uppercase tracking-widest mb-3">
            Use Cases
          </p>
          <h2 className="font-syne text-3xl md:text-4xl font-bold text-ink mb-14">
            Who is this built for?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-bg rounded-2xl p-8">
                <h3 className="font-syne font-bold text-ink text-xl mb-3">
                  {uc.title}
                </h3>
                <p className="font-dm text-ink/60 text-sm leading-relaxed">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Callout */}
      <section className="bg-bg py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-ink rounded-2xl px-10 py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="font-dm text-accent text-sm uppercase tracking-widest mb-2">
                Tech Stack
              </p>
              <h3 className="font-syne text-bg text-2xl font-bold mb-2">
                Built for performance at scale
              </h3>
              <p className="font-dm text-bg/60 text-sm">
                Built on React + Node.js + WebSockets + Google Maps API — a
                proven stack delivering sub-second updates even across 100+
                simultaneous vehicle streams.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {["React", "Node.js", "WebSockets", "Google Maps API"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-bg/10 text-bg font-dm text-xs px-3 py-1.5 rounded-full border border-bg/20"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-ink py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-bg mb-5">
            Ready to track your fleet?
          </h2>
          <p className="font-dm text-bg/60 text-lg mb-10 max-w-xl mx-auto">
            We'll set you up with a live demo using your own vehicle data.
            Most clients go live within 2 weeks.
          </p>
          <a
            href="https://wa.me/918735001217"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-bg font-syne font-semibold px-10 py-4 rounded-lg hover:bg-accent/90 transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </>
  );
}
