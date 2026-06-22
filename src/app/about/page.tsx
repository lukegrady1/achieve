import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import FinalCta from "@/components/sections/FinalCta";
import { VALUES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About | Achieve Performance Training",
  description:
    "Achieve Performance Training is a locally owned strength & conditioning and youth athletic development facility in Clinton, MA, founded by coach Jeremy Frisch in 2010.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={
          <>
            Coach-Led, Locally <span className="text-brand-red">Owned</span>
          </>
        }
        subtitle="Building physical literacy and lifelong athletes in Clinton, MA — in person and online since 2010."
      />

      {/* Story + coach photo */}
      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto grid max-w-site items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-[0_14px_40px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/coach.svg"
                alt={`${SITE.founder}, founder and head coach of ${SITE.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">— Meet the coach</p>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.0]">
              Founded by{" "}
              <span className="text-brand-red">{SITE.founder}</span>
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                Achieve Performance Training is a locally owned and operated
                facility in Clinton, MA, founded by coach {SITE.founder} and
                serving the community since {SITE.established}.
              </p>
              <p>
                We&apos;re known for our work in youth athletic development and
                physical education — helping athletes of every age and ability
                get stronger, faster, and more confident, in person and through
                our online learning platform.
              </p>
              <p>
                Our approach is age-appropriate and long-term: we build capable,
                well-rounded athletes, not quick fixes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="eyebrow">— Why Achieve</p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(32px,5vw,56px)] leading-[1.0]">
              What We Stand <span className="text-brand-red">For</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-card bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="flex h-full flex-col bg-white p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink-900 text-brand-red">
                      <Icon name={v.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-[clamp(34px,5vw,52px)] leading-none text-mist">
                      {v.stat}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[clamp(24px,3vw,30px)] leading-[1.05] text-ink-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {v.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
