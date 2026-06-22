import Reveal from "@/components/Reveal";

interface PageHeroProps {
  eyebrow: string;
  /** Title may include a <span className="text-brand-red"> accent word. */
  title: React.ReactNode;
  subtitle?: string;
}

/**
 * Dark interior-page header. Sits under the fixed site header (which renders its
 * white logo over this dark band), with top padding to clear it.
 */
export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden bg-ink-950 text-white">
      {/* Faint chevron motif, echoing the homepage hero */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block"
        aria-hidden
      >
        <svg width="420" height="420" viewBox="0 0 100 100" fill="none">
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

      <div className="mx-auto max-w-site px-6 pt-[clamp(128px,18vw,200px)] pb-[clamp(48px,8vw,96px)]">
        <Reveal>
          <p className="eyebrow">— {eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-[clamp(48px,9vw,97px)] leading-[0.96]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-[clamp(16px,2vw,19px)] leading-relaxed text-white/80">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
