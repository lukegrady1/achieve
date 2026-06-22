import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { PROGRAMS } from "@/lib/content";

/** §5.5 — "Everything It Takes to Perform — Under One Roof" */
export default function Programs() {
  return (
    <section
      id="programs"
      className="bg-white py-[clamp(64px,10vw,120px)]"
    >
      <div className="mx-auto max-w-site px-6">
        <Reveal>
          <p className="eyebrow">— What we do</p>
          <h2 className="mt-3 max-w-4xl font-display text-[clamp(40px,7vw,84px)] leading-[0.98]">
            Everything It Takes to Perform —{" "}
            <span className="text-brand-red">Under One Roof</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-muted">
            Achieve Performance Training is a locally owned strength &amp;
            conditioning and youth athletic development facility in Clinton, MA —
            building physical literacy and lifelong athletes, in person and
            online.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <ServiceCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
