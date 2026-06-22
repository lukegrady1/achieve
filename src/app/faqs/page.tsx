import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/sections/FinalCta";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQs | Achieve Performance Training",
  description:
    "Answers to common questions about programs, ages, in-person vs online training, getting started, and more at Achieve Performance Training in Clinton, MA.",
};

export default function FaqsPage() {
  return (
    <>
      <PageHero
        eyebrow="Good to know"
        title={
          <>
            Frequently Asked <span className="text-brand-red">Questions</span>
          </>
        }
        subtitle="The quick answers. Still curious? Reach out through the contact page."
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={(i % 6) * 50}>
                {/* Native accordion — no client JS required */}
                <details className="group rounded-card border border-black/10 bg-white px-6 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] open:border-brand-red/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[clamp(20px,2.6vw,26px)] tracking-[0.02em] text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red">
                    {f.q}
                    <span
                      className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-900 text-white transition-transform duration-200 group-open:rotate-45"
                      aria-hidden
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-[16px] leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
