import Image from "next/image";
import Button from "@/components/Button";
import { LINKS } from "@/lib/content";

/**
 * Full-bleed black hero with a darkened action photo, condensed headline with a
 * single red accent word, and the two primary CTAs.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="grain relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink-950 text-white"
    >
      {/* Background action photo, darkened for contrast */}
      <Image
        src="/images/hero.svg"
        alt="Athletes training at Achieve Performance Training in Clinton, MA"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover opacity-60"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30"
        aria-hidden
      />

      {/* Faint chevron motion motif */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 hidden -translate-y-1/2 opacity-[0.07] md:block"
        aria-hidden
      >
        <svg width="520" height="520" viewBox="0 0 100 100" fill="none">
          {[0, 18, 36].map((x) => (
            <path
              key={x}
              d={`M${x} 20 L${x + 22} 50 L${x} 80`}
              stroke="#ed1d00"
              strokeWidth="6"
            />
          ))}
        </svg>
      </div>

      <div className="mx-auto w-full max-w-site px-6 pt-28 pb-20">
        <p className="eyebrow">— Clinton, MA · Since 2010</p>

        <h1 className="mt-4 max-w-4xl font-display text-[clamp(48px,8vw,92px)] leading-[0.98] tracking-[0.01em]">
          Train to <span className="text-brand-red">Achieve</span>.
          <br />
          Build Better <span className="text-brand-red">Athletes</span>.
        </h1>

        <p className="mt-6 max-w-2xl text-[clamp(16px,2vw,19px)] leading-relaxed text-white/80">
          Physical Education, Youth Athletic Development, Speed &amp; Agility,
          Strength &amp; Conditioning, and Adult Fitness — in person at our
          Clinton, MA gym and online, anywhere.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={LINKS.schedule} variant="accent" withArrow>
            View Training Schedule
          </Button>
          <Button href={LINKS.subscribe} variant="ghost-light">
            Join the Learning Platform
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        aria-hidden
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
