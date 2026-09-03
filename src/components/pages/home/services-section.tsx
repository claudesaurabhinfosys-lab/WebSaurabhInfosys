"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import EmDashHeader from "@/components/shared/em-dash-header";
import PillButton from "@/components/ui/pill-button";
import { SERVICES } from "@/lib/data";

const PREVIEW_IMAGES = [
  "https://picsum.photos/id/0/640/400",
  "https://picsum.photos/id/2/640/400",
  "https://picsum.photos/id/3/640/400",
  "https://picsum.photos/id/9/640/400",
  "https://picsum.photos/id/20/640/400",
  "https://picsum.photos/id/180/640/400",
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="si-section">
      <div className="si-container flex flex-col gap-16 lg:gap-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[33.52rem]">
            <EmDashHeader label="Service" />
            <p className="si-body mt-4 text-deep-gray-1">
              Six offerings, one team — from AI automation to the SaaS platforms we&rsquo;ve built and run
              ourselves.
            </p>
          </div>
          <PillButton href="/services" variant="outline" className="shrink-0">
            View All Services
          </PillButton>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={service.slug} className="pb-8 last:pb-0">
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="relative flex flex-col justify-between gap-6 border-t-[1.5px] border-gray-7 pt-5 md:flex-row md:items-center"
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className={`flex items-center gap-2 font-clash text-2xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-black" : "text-gray-2"
                    }`}
                  >
                    <span>{index + 1}.</span>
                    <span>{service.shortTitle}</span>
                  </Link>

                  <div className="grid w-full max-w-[32rem] grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span
                          className={`size-2 shrink-0 rounded-full transition-colors duration-300 ${
                            isActive ? "bg-black" : "bg-gray-2"
                          }`}
                        />
                        <span
                          className={`si-body-xs leading-tight transition-colors duration-300 ${
                            isActive ? "text-black" : "text-gray-2"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "15rem" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="pointer-events-none absolute right-[42%] top-[-20%] z-[55] hidden w-[20rem] overflow-hidden rounded-2xl lg:block"
                      >
                        <Image
                          src={PREVIEW_IMAGES[index]}
                          alt=""
                          width={320}
                          height={240}
                          className="h-[15rem] w-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
