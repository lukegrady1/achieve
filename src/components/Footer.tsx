import Image from "next/image";
import Link from "next/link";
import { SITE, LINKS, SOCIALS } from "@/lib/content";

interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}

const COLUMNS: FooterColumn[] = [
  {
    heading: "Train",
    links: [
      { label: "Gym Hours", href: LINKS.schedule },
      { label: "Programs", href: LINKS.programs },
      { label: "Our Gym", href: LINKS.gym },
      { label: "Achieve Gear", href: LINKS.gear },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "Learning Platform", href: LINKS.learningPlatform },
      { label: "Subscribe", href: LINKS.subscribe },
      { label: "Blog / Articles", href: LINKS.blog },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: LINKS.about },
      { label: "Contact", href: LINKS.contact },
      { label: "Login", href: LINKS.login },
    ],
  },
];

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 pb-24 text-white/70 lg:pb-0">
      <div className="mx-auto max-w-site px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              aria-label={`${SITE.name} — home`}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2"
            >
              {/* White logo for the black footer. */}
              <Image
                src="/logo-white.png"
                alt={SITE.name}
                width={561}
                height={300}
                className="h-20 w-auto md:h-24"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed">
              {SITE.description}
            </p>
            <Link
              href={LINKS.schedule}
              className="link-wipe mt-4 inline-block font-body text-[14px] font-semibold text-white"
            >
              View Schedule →
            </Link>
          </div>

          {/* Link columns: 2-up on phones, 3-up on small tablets, inline on desktop */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:contents">
            {COLUMNS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h2 className="font-display text-[20px] tracking-[0.06em] text-white md:text-[22px]">
                  {col.heading}
                </h2>
                <ul className="mt-3 space-y-2 md:mt-4 md:space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {col.heading === "Company" && (
                  <div className="mt-5 flex gap-3">
                <Social href={SOCIALS.facebook} label="Achieve on Facebook">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M14 9h3l.5-3.5H14V3.8c0-1 .3-1.7 1.8-1.7H17V-.4A24 24 0 0014.6-.5C12.2-.5 10.5 1 10.5 3.6V5.5H7.5V9h3v9.5H14V9z" transform="translate(0 2)" />
                  </svg>
                </Social>
                <Social href={SOCIALS.instagram} label="Jeremy Frisch on Instagram">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </Social>
                <Social href={SOCIALS.twitter} label="Jeremy Frisch on X (Twitter)">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M17.5 3h3l-6.6 7.5L22 21h-6l-4.3-5.6L6.7 21H3.6l7-8L2 3h6.2l3.9 5.2L17.5 3zm-1 16h1.7L7.6 4.8H5.8L16.5 19z" />
                  </svg>
                </Social>
              </div>
            )}
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* Contact placeholders */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-site px-6 py-4 text-[13px] text-muted">
          {/* PLACEHOLDER — client to confirm public phone & email */}
          <span className="mr-4">Phone: {SITE.contact.phone}</span>
          <span>Email: {SITE.contact.email}</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-6 py-5 text-[13px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {SITE.established}–{year} {SITE.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/disclaimers" className="hover:text-white">
              Disclaimers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
