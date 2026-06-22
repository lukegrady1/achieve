import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import FinalCta from "@/components/sections/FinalCta";
import { PROGRAMS, LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs | Achieve Performance Training",
  description:
    "Youth athletic development, speed & agility, strength & conditioning, adult group fitness, stick stretch, and the online Learning Platform — coach-led in Clinton, MA.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={
          <>
            Train Every Way to <span className="text-brand-red">Achieve</span>
          </>
        }
        subtitle="From a young athlete's first agility drill to an adult's strongest year yet — every program is age-appropriate, coach-led, and built for the long game."
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto flex max-w-site flex-col gap-16 px-6 md:gap-24">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title}>
              <div
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[3/2] overflow-hidden rounded-card shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <span className="font-display text-[20px] tracking-[0.1em] text-brand-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-[clamp(30px,5vw,52px)] leading-[1.0]">
                    {p.title}
                  </h2>
                  <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
                    {p.blurb}
                  </p>
                  <div className="mt-6">
                    <Button href={LINKS.schedule} variant="ghost" withArrow>
                      View Training Schedule
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
