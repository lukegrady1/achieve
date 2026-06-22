import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { VALUES } from "@/lib/content";

/** §5.10 — "Why Achieve" value/stat cards. */
export default function WhyAchieve() {
  return (
    <section className="bg-white py-[clamp(64px,10vw,120px)]">
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="eyebrow">— Why Achieve</p>
          <h2 className="mt-3 max-w-3xl font-display text-[clamp(40px,7vw,84px)] leading-[0.98]">
            Coaching Built for the <span className="text-brand-red">Long Game</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
