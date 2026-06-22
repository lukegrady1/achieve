import Reveal from "@/components/Reveal";
import { STEPS } from "@/lib/content";

/** §5.11 — 4-step "How to Get Started" stepper. */
export default function GetStarted() {
  return (
    <section className="bg-mist py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="eyebrow">— Get started</p>
          <h2 className="mt-3 font-display text-[clamp(40px,7vw,84px)] leading-[0.98]">
            How to <span className="text-brand-red">Get Started</span>
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {/* Connecting dashed line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 -z-0 hidden border-t-2 border-dashed border-black/20 md:block"
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 100} className="relative z-10">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-red font-display text-[28px] leading-none text-white shadow-[0_6px_18px_rgba(237,29,0,0.35)]">
                {s.n}
              </span>
              <h3 className="mt-5 font-display text-[clamp(24px,3vw,30px)] leading-[1.05] text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {s.copy}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
