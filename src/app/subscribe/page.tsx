import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import FinalCta from "@/components/sections/FinalCta";
import { PLANS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Subscribe | Achieve Performance Training",
  description:
    "Join the Achieve Learning Platform — exclusive youth athletic development and PE videos plus an exercise reference guide. Monthly, annual, and team plans.",
};

export default function SubscribePage() {
  return (
    <>
      <PageHero
        eyebrow="Join us online"
        title={
          <>
            Join the <span className="text-brand-red">Learning Platform</span>
          </>
        }
        subtitle="Pick the plan that fits how you coach. Every plan unlocks the full video library and exercise reference guide, with new content released regularly."
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="rounded-card border border-brand-red/30 bg-mist px-5 py-4 text-[14px] text-ink-900">
              <strong>Placeholder pricing.</strong> Plan prices are not final —
              add your real pricing and checkout links before launch.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={(i % 3) * 90}>
                <div
                  className={`flex h-full flex-col rounded-card p-8 ${
                    plan.featured
                      ? "bg-ink-950 text-white shadow-[0_14px_40px_rgba(0,0,0,0.25)] ring-2 ring-brand-red"
                      : "border border-black/10 bg-white text-ink-900 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
                  }`}
                >
                  {plan.featured && (
                    <span className="mb-4 inline-block w-max rounded-pill bg-brand-red px-3 py-1 font-body text-[12px] font-semibold uppercase tracking-[0.1em] text-white">
                      Best value
                    </span>
                  )}
                  <h2 className="font-display text-[clamp(28px,3.5vw,38px)] tracking-[0.02em]">
                    {plan.name}
                  </h2>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-[clamp(40px,6vw,60px)] leading-none">
                      {plan.price}
                    </span>
                    <span
                      className={
                        plan.featured ? "text-white/60" : "text-muted"
                      }
                    >
                      {plan.cadence}
                    </span>
                  </div>
                  <p
                    className={`mt-3 text-[15px] leading-relaxed ${
                      plan.featured ? "text-white/75" : "text-muted"
                    }`}
                  >
                    {plan.blurb}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[15px]">
                        <span className="mt-0.5 text-brand-red">
                          <Icon name="arrow" className="h-4 w-4" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href={plan.href}
                      variant={plan.featured ? "accent" : "primary"}
                      withArrow
                      className="w-full justify-center"
                    >
                      {plan.cta}
                    </Button>
                  </div>
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
