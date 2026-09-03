import { COMPANY } from "@/lib/data";

const STATS = [
  { value: COMPANY.stats.projects, label: "Projects Delivered", featured: true },
  { value: COMPANY.stats.clients, label: "Satisfied Clients" },
  { value: COMPANY.stats.years, label: "Years of Experience" },
  { value: COMPANY.stats.saasProducts, label: "SaaS Products We Run" },
];

export default function AboutSection() {
  return (
    <section className="si-section bg-black-2">
      <div className="si-container flex flex-col justify-between si-stack-block lg:flex-row lg:items-start">
        <div className="max-w-[500px]">
          <h2 className="si-section-title font-clash text-white">
            About
            <br />
            Our Agency
          </h2>
          <div className="si-pt-stack">
            <p className="si-body-xs font-medium text-gray-1">
              Saurabh Infosys started with a clear purpose — to build software and enterprise systems that connect
              people and businesses on a deeper level. What began as a small group of engineers has grown into a
              studio that runs three SaaS products of its own, driven by curiosity, craft, and measurable impact.
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-2 rounded-2xl bg-white-3 p-2 sm:grid-cols-2 lg:max-w-[45rem]">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`flex min-h-[13rem] flex-col items-start justify-between rounded-lg p-4 ${
                stat.featured ? "bg-primary" : "bg-white-2"
              }`}
            >
              <span
                className={`si-stat font-clash ${stat.featured ? "text-white" : "text-black"}`}
              >
                {stat.value}
              </span>
              <span
                className={`si-body-xs font-light ${stat.featured ? "text-white" : "text-black"}`}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
