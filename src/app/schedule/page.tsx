import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import FinalCta from "@/components/sections/FinalCta";
import { SCHEDULE, HOURS, LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Training Schedule | Achieve Performance Training",
  description:
    "Weekly class and program schedule at Achieve Performance Training in Clinton, MA — youth athletic development, speed & agility, strength & conditioning, and adult fitness.",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Plan your week"
        title={
          <>
            Training <span className="text-brand-red">Schedule</span>
          </>
        }
        subtitle="Find a class or program that fits your goals, then come train with us in Clinton, MA."
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="rounded-card border border-brand-red/30 bg-mist px-5 py-4 text-[14px] text-ink-900">
              <strong>Placeholder schedule.</strong> The class times below are
              samples. Replace them with your live schedule before launch.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCHEDULE.map((day, i) => (
              <Reveal key={day.day} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-card border border-black/5 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                  <h2 className="font-display text-[clamp(26px,3vw,32px)] tracking-[0.03em] text-ink-900">
                    {day.day}
                  </h2>
                  <ul className="mt-4 space-y-4">
                    {day.sessions.map((s) => (
                      <li
                        key={`${day.day}-${s.time}-${s.name}`}
                        className="border-l-2 border-brand-red pl-3"
                      >
                        <p className="font-display text-[19px] tracking-[0.02em] text-brand-red">
                          {s.time}
                        </p>
                        <p className="text-[15px] font-medium text-ink-900">
                          {s.name}
                        </p>
                        <p className="text-[13px] text-muted">{s.group}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours / age-group highlights */}
      <section className="bg-mist py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="eyebrow">— Good to know</p>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.0]">
              Hours by <span className="text-brand-red">Group</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {HOURS.map((h, i) => (
              <Reveal key={h.label} delay={i * 80}>
                <div className="flex items-start gap-3 rounded-card bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
                  <span className="mt-0.5 text-brand-red">
                    <Icon name="stopwatch" className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-[22px] tracking-[0.03em] text-ink-900">
                      {h.label}
                    </p>
                    <p className="text-[14px] text-muted">{h.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={LINKS.contact} variant="primary" withArrow>
                Ask About a Class
              </Button>
              <Button href={LINKS.subscribe} variant="ghost">
                Train Online Instead
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
