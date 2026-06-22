import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import FinalCta from "@/components/sections/FinalCta";
import { PLATFORM_FEATURES, STEPS, LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learning Platform | Achieve Performance Training",
  description:
    "Exclusive youth athletic development and physical education videos plus an exercise reference guide — for teachers, coaches, trainers, and parents. Train anywhere, anytime.",
};

export default function LearningPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Train anywhere"
        title={
          <>
            The Achieve <span className="text-brand-red">Learning Platform</span>
          </>
        }
        subtitle="Exclusive youth athletic development and physical education videos, plus a full exercise reference guide — accessible from any computer or phone, anytime, anywhere. New content released regularly."
      />

      {/* Features */}
      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="eyebrow">— What you get</p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(32px,5vw,64px)] leading-[1.0]">
              Coaching Knowledge,{" "}
              <span className="text-brand-red">On Demand</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {PLATFORM_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 90}>
                <div className="flex h-full gap-4 rounded-card border border-black/5 bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink-900 text-brand-red">
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(22px,3vw,28px)] leading-[1.05] text-ink-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {f.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + how it works */}
      <section className="bg-ink-950 py-[clamp(48px,8vw,96px)] text-white">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="eyebrow">— Who it&apos;s for</p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(32px,5vw,64px)] leading-[1.0]">
              For Teachers, Coaches, Trainers &amp;{" "}
              <span className="text-brand-red">Parents</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/75">
              Whether you run a PE class, coach a team, or want to help your own
              kids move better, the platform gives you proven, age-appropriate
              content you can use right away.
            </p>
          </Reveal>

          <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {STEPS.slice(0, 3).map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90}>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-red font-display text-[24px] leading-none text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[clamp(22px,3vw,28px)] leading-[1.05]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                  {s.copy}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <div className="mt-12">
              <Button href={LINKS.subscribe} variant="accent" withArrow>
                Join the Learning Platform
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
