import EmDashHeader from "@/components/shared/em-dash-header";

const IMAGES = {
  discover: "https://picsum.photos/id/6/900/1200",
  define: "https://picsum.photos/id/8/1000/600",
  design: "https://picsum.photos/id/5/700/600",
};

export default function ProcessSection() {
  return (
    <section className="si-section">
      <div className="si-container flex flex-col si-stack-block">
        <div>
          <div className="si-pb-stack">
            <EmDashHeader label="Work Process" />
          </div>
          <p className="si-body max-w-[39rem] text-deep-gray-1">
            Our process is built around clarity and collaboration — from research to execution, we work closely
            with clients to turn ideas into shipped software.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_0.75fr_0.75fr] md:grid-rows-[auto_auto]">
          {/* Discover — tall, spans both rows */}
          <article
            className="relative flex min-h-[28rem] flex-col items-start justify-end overflow-hidden rounded-2xl bg-cover bg-center px-6 pb-8 md:row-span-2 md:min-h-[40rem]"
            style={{ backgroundImage: `url('${IMAGES.discover}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="relative z-10">
              <h3 className="si-card-title font-clash text-white">Discover</h3>
              <p className="si-body-xs mt-3 max-w-sm text-white/80">
                We start by deeply understanding your business, users, and objectives — through research and
                strategy sessions, before a line of code is written.
              </p>
            </div>
          </article>

          {/* Define — wide, spans two columns */}
          <article
            className="relative flex min-h-[18rem] flex-col items-start justify-end overflow-hidden rounded-2xl bg-cover bg-center p-6 md:col-span-2 md:min-h-[22rem]"
            style={{ backgroundImage: `url('${IMAGES.define}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="relative z-10">
              <h3 className="si-card-title font-clash text-white">Define</h3>
              <p className="si-body-xs mt-3 max-w-md text-white/80">
                Shaping a clear technical strategy, architecture, and roadmap — so scope and cost are agreed
                before the build starts.
              </p>
            </div>
          </article>

          {/* Design */}
          <article
            className="relative flex min-h-[16.25rem] flex-col items-start justify-end overflow-hidden rounded-2xl bg-cover bg-center p-6"
            style={{ backgroundImage: `url('${IMAGES.design}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="relative z-10">
              <h3 className="si-card-title font-clash text-white">Design</h3>
              <p className="si-body-xs mt-3 text-white/80">
                Turning requirements into interfaces with precision, creativity, and purpose.
              </p>
            </div>
          </article>

          {/* Deliver — solid purple */}
          <article className="flex min-h-[16.25rem] flex-col items-start justify-end rounded-2xl bg-primary p-6">
            <h3 className="si-card-title font-clash text-white">Deliver</h3>
            <p className="si-body-xs mt-3 text-white/90">
              Launching, testing, and refining to ensure a seamless, high-performing product in your users&rsquo;
              hands.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
