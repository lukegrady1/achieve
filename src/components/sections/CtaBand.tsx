import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { LINKS } from "@/lib/content";

/** §5.6 — Mid-page black CTA band: heading left, red pill CTA right. */
export default function CtaBand() {
  return (
    <section className="grain relative overflow-hidden bg-ink-950 text-white">
      <div className="mx-auto flex max-w-site flex-col items-start gap-8 px-6 py-[clamp(48px,8vw,84px)] md:flex-row md:items-center md:justify-between">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(32px,5vw,56px)] leading-[1.02]">
            Ready to get stronger, faster, and more{" "}
            <span className="text-brand-red">confident</span>?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <Button href={LINKS.schedule} variant="accent" withArrow>
            View Training Schedule
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
