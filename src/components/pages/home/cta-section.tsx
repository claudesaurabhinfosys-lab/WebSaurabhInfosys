import PillButton from "@/components/ui/pill-button";

export default function CtaSection() {
  return (
    <section className="mx-2">
      <div
        className="flex min-h-[24rem] items-center justify-center rounded-2xl px-6 md:min-h-[38.4375rem]"
        style={{ backgroundImage: "linear-gradient(281deg, #ebebeb, #5235f6 50%, #ebebeb)" }}
      >
        <div className="flex max-w-[55.5625rem] flex-col items-center si-stack-block text-center">
          <h2 className="si-title font-clash text-white">Let&rsquo;s Build Something That Scales.</h2>
          <PillButton href="/contact" variant="light">
            Start a Project
          </PillButton>
        </div>
      </div>
    </section>
  );
}
