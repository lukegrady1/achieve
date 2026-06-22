import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { LINKS } from "@/lib/content";

/** §5.13 — Big black closing CTA band. */
export default function FinalCta() {
  return (
    <section className="grain relative overflow-hidden bg-ink-950 text-white">
      {/* Oversized faint wordmark for depth */}
      <span
        className="pointer-events-none absolute -bottom-6 left-1/2 -z-0 -translate-x-1/2 select-none font-display text-[26vw] leading-none text-white/[0.03]"
        aria-hidden
      >
        ACHIEVE
      </span>

      <div className="relative mx-auto max-w-site px-6 py-[clamp(72px,12vw,140px)] text-center">
        <Reveal>
          <p className="eyebrow">— Ready to train?</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-[clamp(44px,9vw,97px)] leading-[0.96]">
            It&apos;s Time to <span className="text-brand-red">Achieve</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/75">
            Stronger, faster, more confident — for athletes of every age. Train
            with us in Clinton, MA, or anywhere on the Learning Platform.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={LINKS.schedule} variant="accent" withArrow>
              View Training Schedule
            </Button>
            <Button href={LINKS.subscribe} variant="ghost-light">
              Join the Learning Platform
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
