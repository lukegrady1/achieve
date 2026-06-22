import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { ARTICLES, SITE } from "@/lib/content";

/** §5.9 — Coach / brand story + "From the Coach" articles strip. */
export default function CoachStory() {
  return (
    <section className="bg-ink-950 py-[clamp(64px,10vw,120px)] text-white">
      <div className="mx-auto max-w-site px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo + radial badge */}
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                <Image
                  src="/images/coach.svg"
                  alt={`${SITE.founder}, founder and head coach of ${SITE.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 grid h-28 w-28 place-items-center rounded-full bg-brand-red text-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:-right-6">
                <div>
                  <p className="font-display text-[34px] leading-none">SINCE</p>
                  <p className="font-display text-[34px] leading-none">
                    {SITE.established}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={120}>
            <p className="eyebrow">— Our story</p>
            <h2 className="mt-3 font-display text-[clamp(40px,6vw,72px)] leading-[1.0]">
              Coach-Led, Locally <span className="text-brand-red">Owned</span>
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/80">
              Achieve Performance Training is a locally owned and operated
              facility in Clinton, MA, founded by coach{" "}
              <span className="font-semibold text-white">{SITE.founder}</span>{" "}
              and serving the community since {SITE.established}. We&apos;re known
              for our work in youth athletic development and physical education —
              in person and through our online learning platform.
            </p>
          </Reveal>
        </div>

        {/* Articles strip */}
        <div className="mt-16">
          <Reveal>
            <p className="eyebrow">— From the coach</p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <Link
                  href={a.href}
                  className="group flex h-full flex-col rounded-card border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brand-red/60 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                >
                  <h3 className="font-display text-[clamp(22px,2.4vw,28px)] leading-[1.05] text-white">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/65">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-[0.1em] text-brand-red">
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
      </div>
    </section>
  );
}
