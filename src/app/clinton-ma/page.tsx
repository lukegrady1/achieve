import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import FinalCta from "@/components/sections/FinalCta";
import { GALLERY, HOURS, SITE, LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Gym in Clinton, MA | Achieve Performance Training",
  description:
    "Visit Achieve Performance Training — a locally owned strength & conditioning and youth athletic development facility in Clinton, MA, established 2010.",
};

export default function ClintonMaPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to find us"
        title={
          <>
            Our Gym in <span className="text-brand-red">Clinton, MA</span>
          </>
        }
        subtitle="A locally owned and operated facility, established 2010 — the home base for youth athletic development, strength & conditioning, and adult fitness."
      />

      {/* Map + hours */}
      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto grid max-w-site items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">— Visit us</p>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.0]">
              Come Train <span className="text-brand-red">In Person</span>
            </h2>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
              Stop in to train with our coaches, or take the programming with you
              on the Learning Platform. Athletes of every age and ability are
              welcome.
            </p>

            <dl className="mt-8 space-y-4">
              {HOURS.map((h) => (
                <div key={h.label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-red">
                    <Icon name="stopwatch" className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="font-display text-[20px] tracking-[0.03em] text-ink-900">
                      {h.label}
                    </dt>
                    <dd className="text-[14px] text-muted">{h.detail}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[13px] text-muted">
              {/* PLACEHOLDER */}
              Address &amp; exact hours: {SITE.contact.address} — client to
              confirm.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={LINKS.schedule} variant="primary" withArrow>
                View Full Schedule
              </Button>
              <Button href={LINKS.contact} variant="ghost">
                Contact the Gym
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card shadow-[0_14px_40px_rgba(0,0,0,0.15)]">
              <iframe
                title="Map showing Achieve Performance Training in Clinton, MA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.477596513595!2d-71.68656399999999!3d42.417567999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3f174e380a0fb%3A0xc1e20a76e22db062!2sAchieve%20Performance%20Training!5e0!3m2!1sen!2sus!4v1782166978918!5m2!1sen!2sus"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-mist py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="eyebrow">— Inside the gym</p>
            <h2 className="mt-3 font-display text-[clamp(32px,5vw,56px)] leading-[1.0]">
              On the <span className="text-brand-red">Floor</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal key={g.img} delay={i * 80}>
                <div className="relative aspect-square overflow-hidden rounded-card shadow-[0_6px_24px_rgba(0,0,0,0.10)]">
                  <Image
                    src={g.img}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
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
