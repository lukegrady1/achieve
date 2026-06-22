import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { OFFERINGS } from "@/lib/content";

/** Three quick jump tiles directly under the hero. */
export default function OfferingsTeaser() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto grid max-w-site grid-cols-1 divide-y divide-black/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {OFFERINGS.map((o, i) => (
          <Reveal key={o.name} delay={i * 80}>
            <Link
              href={o.href}
              className="group flex items-center gap-4 px-6 py-8 transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red sm:justify-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink-900 text-white transition-colors group-hover:bg-brand-red">
                <Icon name={o.icon} className="h-6 w-6" />
              </span>
              <span className="font-display text-[clamp(22px,2.6vw,28px)] tracking-[0.03em] text-ink-900">
                {o.name}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
