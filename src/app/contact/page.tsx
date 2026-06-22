import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import { SITE, SOCIALS, LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Achieve Performance Training",
  description:
    "Get in touch with Achieve Performance Training in Clinton, MA — questions about programs, the schedule, the Learning Platform, or team and school access.",
};

const inputBase =
  "mt-1.5 w-full rounded-card border border-black/15 bg-white px-4 py-3 text-[16px] text-ink-900 outline-none transition-colors placeholder:text-muted focus:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-red/40";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s <span className="text-brand-red">Talk</span>
          </>
        }
        subtitle="Questions about a program, the schedule, or the Learning Platform? Reach out and we'll point you in the right direction."
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Contact details */}
          <Reveal>
            <h2 className="font-display text-[clamp(28px,4vw,44px)] leading-[1.0]">
              Contact <span className="text-brand-red">Details</span>
            </h2>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-red">
                  <Icon name="whistle" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-[20px] tracking-[0.03em] text-ink-900">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="link-wipe text-[16px] text-ink-900"
                  >
                    {SITE.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-red">
                  <Icon name="play" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-[20px] tracking-[0.03em] text-ink-900">
                    Email
                  </p>
                  {/* PLACEHOLDER — client to confirm public email */}
                  <a
                    href={`mailto:${SITE.contact.email}`}
                    className="link-wipe text-[16px] text-ink-900"
                  >
                    {SITE.contact.email}
                  </a>
                  <p className="text-[12px] text-muted">Placeholder — to confirm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-brand-red">
                  <Icon name="location" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-[20px] tracking-[0.03em] text-ink-900">
                    Location
                  </p>
                  {/* PLACEHOLDER — client to confirm street address */}
                  <p className="text-[16px] text-ink-900">
                    {SITE.contact.address}
                  </p>
                  <Link href={LINKS.gym} className="link-wipe text-[14px] text-brand-red">
                    View the gym &amp; map →
                  </Link>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <p className="font-display text-[20px] tracking-[0.03em] text-ink-900">
                Follow Along
              </p>
              <div className="mt-3 flex gap-3">
                {[
                  { href: SOCIALS.facebook, label: "Facebook" },
                  { href: SOCIALS.instagram, label: "Instagram" },
                  { href: SOCIALS.twitter, label: "X (Twitter)" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-pill border border-black/15 px-4 py-2 text-[14px] transition-colors hover:border-brand-red hover:text-brand-red"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form (placeholder — not yet wired to a backend) */}
          <Reveal delay={120}>
            <form
              className="rounded-card border border-black/10 bg-mist/50 p-7 shadow-[0_6px_24px_rgba(0,0,0,0.06)]"
              aria-label="Contact form"
            >
              <p className="mb-5 rounded-card border border-brand-red/30 bg-white px-4 py-3 text-[13px] text-ink-900">
                <strong>Placeholder form.</strong> Connect this to your email or
                form service before launch.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-[14px] font-medium text-ink-900">
                    Name
                  </label>
                  <input id="name" name="name" type="text" className={inputBase} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-[14px] font-medium text-ink-900">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className={inputBase} placeholder="you@example.com" />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="subject" className="text-[14px] font-medium text-ink-900">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" className={inputBase} placeholder="What can we help with?" />
              </div>

              <div className="mt-4">
                <label htmlFor="message" className="text-[14px] font-medium text-ink-900">
                  Message
                </label>
                <textarea id="message" name="message" rows={5} className={inputBase} placeholder="Tell us a bit about what you're looking for…" />
              </div>

              <div className="mt-6">
                <Button href="#" variant="accent" withArrow>
                  Send Message
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
