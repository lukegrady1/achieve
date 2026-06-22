import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export interface LegalSection {
  heading: string;
  body: string;
}

interface LegalLayoutProps {
  title: string;
  eyebrow: string;
  intro: string;
  sections: LegalSection[];
}

/**
 * Shared template for Terms / Privacy / Disclaimers. Content is placeholder
 * boilerplate — the client should replace it with reviewed legal copy.
 */
export default function LegalLayout({
  title,
  eyebrow,
  intro,
  sections,
}: LegalLayoutProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="rounded-card border border-brand-red/30 bg-mist px-5 py-4 text-[14px] text-ink-900">
              <strong>Placeholder.</strong> This page contains sample text only.
              Replace it with your reviewed, jurisdiction-appropriate legal copy
              before launch.
            </p>
            <p className="mt-8 text-[17px] leading-relaxed text-muted">{intro}</p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60}>
                <h2 className="font-display text-[clamp(26px,3.5vw,36px)] leading-[1.05] text-ink-900">
                  {s.heading}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-ink-900/80">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
