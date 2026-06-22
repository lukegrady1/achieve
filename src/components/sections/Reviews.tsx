import Reveal from "@/components/Reveal";
import { REVIEWS } from "@/lib/content";

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-5 w-5 text-brand-red"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2l3 6.5 7 .7-5.2 4.7 1.5 6.9L12 17.8 5.7 20.8l1.5-6.9L2 9.2l7-.7z" />
        </svg>
      ))}
    </div>
  );
}

/** §5.8 — Member reviews (placeholder copy for the client to replace). */
export default function Reviews() {
  return (
    <section className="bg-white py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="eyebrow">— What members say</p>
          <h2 className="mt-3 font-display text-[clamp(40px,7vw,84px)] leading-[0.98]">
            Trusted by <span className="text-brand-red">Athletes</span> &amp;
            Families
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-card border border-black/5 bg-mist/60 p-7 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink-900">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-display text-[22px] tracking-[0.03em] text-ink-900">
                    {r.name}
                  </p>
                  <p className="text-[13px] uppercase tracking-[0.1em] text-brand-red">
                    {r.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
