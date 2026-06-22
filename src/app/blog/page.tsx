import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import FinalCta from "@/components/sections/FinalCta";
import { ARTICLES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog & Articles | Achieve Performance Training",
  description:
    "Training articles and coaching insights from Jeremy Frisch on youth athletic development, physical literacy, and building better athletes.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="From the coach"
        title={
          <>
            Training <span className="text-brand-red">Articles</span>
          </>
        }
        subtitle={`Coaching insights from ${SITE.founder} on youth athletic development, physical literacy, and building better athletes.`}
      />

      <section className="bg-white py-[clamp(48px,8vw,96px)]">
        <div className="mx-auto max-w-site px-6">
          <Reveal>
            <p className="rounded-card border border-brand-red/30 bg-mist px-5 py-4 text-[14px] text-ink-900">
              <strong>Placeholder posts.</strong> Swap in real article titles,
              excerpts, and links — or connect a CMS / blog feed.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 90}>
                <Link
                  href={a.href}
                  className="group flex h-full flex-col rounded-card border border-black/5 bg-white p-7 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  <span className="font-display text-[18px] tracking-[0.1em] text-brand-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-[clamp(24px,3vw,32px)] leading-[1.05] text-ink-900">
                    {a.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-red">
                    Read article
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
